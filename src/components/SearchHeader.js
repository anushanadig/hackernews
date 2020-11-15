/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

function SearchHeader({searchTerm, onSearchTermChange, onSearchSubmit}) {

  const Header = css`
    margin: 0 auto;
    font-size: 3rem;
    background-color: black;
    color: white;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 20% 5% 75%;

    form {
      grid-column: 3;
    }

    span {
      grid-column: 1;
      margin-left: 3rem;
      text-align: right;
      font-family: consolas, monospace, sans-serif;
    }

    input {
      margin: 1rem;
      margin-left: 3.5rem;
      padding: 1rem;
      width: 70%;
      font-size: 2rem;
      border: 0.3rem solid darkgray;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 100%;
      justify-items: center;

      span {
        grid-row: 1;
        grid-column: 1;
        margin: 0;
      }

      form {
        grid-row: 2;
        grid-column: 1;
        width: 100%;
        text-align: center;
      }
    }
  `

  return (
    <div css={Header}>
      <span>Hacker News</span>
      <form onSubmit={onSearchSubmit}> <input type="text" value={searchTerm} 
      onChange={onSearchTermChange} placeholder="search"/></form>
     
    </div>
  );
}

export default SearchHeader;
