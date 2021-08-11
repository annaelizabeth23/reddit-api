import React from 'react';
import styled from 'styled-components';
import Link from './link';

function TopicContainer(props){
    const Container = styled.div`
        background-color:${props.topic.score % 2 === 0 ? '#f59149' : '#247cb3'};
        padding: 2px;
        text-align: center;
        border: 2px solid black;
        border-radius: 3px;
    `;

    const List = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: column;
        justify-content: center;
    `;

    const Item = styled.li`
       width: 100%;
    `;

    return(
        <Container>
            <Link
                url={`https://www.reddit.com${props.topic.permalink}`}
                title={props.topic.title}
            ></Link>
            <List>
                <Item><span style={{fontWeight: "bold"}}>Author:</span> {props.topic.author}</Item>
                <Item><span style={{fontWeight: "bold"}}>Up Vote Count:</span> {props.topic.ups}</Item>
                <Item><span style={{fontWeight: "bold"}}>Number of Comments:</span> {props.topic.num_comments}</Item>
                <Item><span style={{fontWeight: "bold"}}>Score:</span> {props.topic.score}</Item>
            </List>
        </Container>
    )
}

export default TopicContainer;