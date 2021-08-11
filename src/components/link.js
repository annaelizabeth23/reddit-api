import React from 'react';
import styled from 'styled-components';

function Link(props){

    const Link = styled.a`
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        color: black;

        &:hover, &:visited, &:active {
            color: black;
            text-decoration: none;
        }
    `;

    return(
        <Link href={props.url}>{props.title}</Link>
    )
}

export default Link;