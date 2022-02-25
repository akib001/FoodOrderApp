import Card from '../../UI/Card';
import classes from './OrderList.module.css';
import Order from './Order';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/auth-slice';

const OrderList = () => {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchOrdersHandler() {
      setIsError(null);
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://react-http-597d3-default-rtdb.firebaseio.com/orders.json'
        );

        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();

        // console.log(data);

        let loadedOrders = [];
        
        for (const key in data) {
          let loadedItems = [];
          for (const itemKey in data[key].orderData) {
            loadedItems.push({
              itemId: itemKey,
              itemName: data[key].orderData[itemKey].title,
              itemPrice: data[key].orderData[itemKey].price,
              itemQuantity: data[key].orderData[itemKey].quantity,
            })
          }

          dispatch(authActions.calculateOrderSummary({
            totalQuantity: data[key].totalOrderedQuantity,
            totalPrice: data[key].totalOrderedPrice
          }))



          loadedOrders.push({
            id: key,
            name: data[key].userData.name,
            city: data[key].userData.city,
            items: loadedItems,
          });
        }
        setOrders(loadedOrders);
      } catch (error) {
        setIsError(error.message);
      }
      setIsLoading(false);
    }
    fetchOrdersHandler();
  }, [dispatch]);

  const ordersList = orders.map(order => (      
    <Order
      key={order.id}
      id={order.id}
      name={order.name}
      city={order.city}
      items={order.items}
    />
  ));

  console.log(orders);

  let content = <p>Found no meals.</p>;

  if (ordersList.length > 0) {
    content = ordersList;
  }

  if (isError) {
    content = <p>{isError}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <section className={classes.orders}>
      <Card>{content}</Card>
    </section>
  );
};

export default OrderList;