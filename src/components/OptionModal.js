import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={Boolean(props.selectedOption)}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;

// Createa  new event handler in IndecisionApp that clearSelectedOption
// Pass that into OptionModal
// Call it on the button click