import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TopicContainer from '../components/topicContainer';


function TopicList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/ProgrammerHumor/hot.json?limit=18",
    {
      method: 'GET',
      cors: 'no-cors'
    }
    )
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          let sortedResults = result.data.children.sort(function(a, b) {
            return b.data.num_comments - a.data.num_comments;
          });
          console.log("results: ", sortedResults);
          setItems(sortedResults);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


    const Wrapper = styled.div`
        display: flex;
        flex-flow: column;
        justify-content: center;

        @media(min-width: 768px) {
            flex-flow: row wrap;
            justify-content: space-evenly;
        }
    `;

    const Item = styled.div`
        padding: 5px;
        width: 100%;

        @media(min-width: 768px) {
            width: 30%;
        }
    `;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <Wrapper>
                {items.map(item => (
                    <Item key={item.data.id}>
                        <TopicContainer
                            topic={item.data}
                        ></TopicContainer>
                    </Item>
                ))}
        </Wrapper>
    );
  }
}

export default TopicList;
