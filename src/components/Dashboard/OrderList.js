import Card from '../UI/Card';
import classes from './OrderList.module.css';
import Order from './Order';
import { useState, useEffect } from 'react';

const OrderList = () => {
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
              itemName: data[key].orderData[itemKey].name,
              itemPrice: data[key].orderData[itemKey].price,
              itemAmount: data[key].orderData[itemKey].amount,
            })
          }

          loadedOrders.push({
            id: key,
            name: data[key].userData.name,
            street: data[key].userData.street,
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
  }, []);

  const ordersList = orders.map(order => (  
    

    <Order
      key={order.id}
      id={order.id}
      name={order.name}
      street={order.street}
      items={order.items}
    />
  ));

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
