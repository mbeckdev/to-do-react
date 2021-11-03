import React from 'react';
import styled from 'styled-components';

const WrapperEditButton = styled.button`
  /* --edit-icon-color: red; */
  /* --edit-icon-color-eraser: blue; */
  --edit-icon-color: ${(props) => props.theme.colors.color2Yellow};
  --edit-icon-color-eraser: ${(props) => props.theme.colors.color1Red};

  background-color: transparent;

  .edit-icon {
    display: flex;
    padding: 6px 4px;
    cursor: pointer;
  }

  .edit-inner {
    top: 1px;
    width: 8px;
    height: 6px;
    background-color: var(--edit-icon-color);
    display: inline-block;
    position: relative;

    transform: rotate(-60deg);
  }

  .edit-inner::before {
    content: '';
    display: block;
    position: relative;
    left: -5px;

    width: 0;
    height: 0;

    /*   this makes a triangle */
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 4px solid var(--edit-icon-color);
  }

  .edit-inner::after {
    content: '';
    display: block;
    position: relative;
    left: 9px;
    top: -100%;

    width: 4px;
    height: 6px;
    background-color: var(--edit-icon-color-eraser);
  }
`;

function EditButton(props) {
  return (
    <WrapperEditButton
      className="edit-button"
      onClick={() => props.handleEditButtonClick(props.task.id)}
    >
      <div className="edit-icon">
        <div className="edit-inner"></div>
      </div>
    </WrapperEditButton>
  );
}

export default EditButton;
