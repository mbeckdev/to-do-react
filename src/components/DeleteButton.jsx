import React from 'react';
import styled from 'styled-components';

const WrapperDeleteButton = styled.section`
  --delete-icon-color: ${(props) => props.theme.colors.iconColorPrimary};
  --delete-icon-color2: ${(props) => props.theme.colors.iconColorSecondary};

  button {
    background-color: transparent;
  }

  .delete-icon {
    display: flex;
    padding: 5px 2px 5px 3px;
    position: relative;
  }

  .delete-icon1 {
    width: 18px;
    height: 2px;
    background-color: var(--delete-icon-color);
    display: inline-block;
    position: relative;
    top: -2px;
  }

  .delete-icon1::before {
    content: '';
    display: block;
    position: relative;
    top: -3px;
    left: 7px;
    width: 4px;
    height: 2px;

    background-color: var(--delete-icon-color);
  }

  .delete-icon1::after {
    content: '';
    display: block;
    position: relative;
    left: 1px;
    top: 1px;

    width: 16px;
    height: 14px;

    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;

    background-color: var(--delete-icon-color);
  }

  .delete-icon2 {
    width: 1px;
    height: 10px;

    display: inline-block;
    position: relative;

    left: -9px;
    top: 3px;

    background-color: var(--delete-icon-color2);
  }

  .delete-icon2::before {
    content: '';
    display: block;
    background-color: var(--delete-icon-color2);
    position: relative;
    top: 0px;
    left: -4px;

    width: 1px;
    height: 10px;
  }

  .delete-icon2::after {
    content: '';
    display: block;
    position: relative;
    left: 4px;
    top: -100%;

    width: 1px;
    height: 10px;
    background-color: var(--delete-icon-color2);
  }
`;

function DeleteButton() {
  return (
    <WrapperDeleteButton>
      <button className="delete-button">
        <div className="delete-icon">
          <div className="delete-icon1"></div>
          <div className="delete-icon2"></div>
        </div>
      </button>
    </WrapperDeleteButton>
  );
}

export default DeleteButton;
