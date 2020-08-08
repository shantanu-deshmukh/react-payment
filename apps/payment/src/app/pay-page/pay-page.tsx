import React, { Component } from 'react';
import { PayForm, CreditCard } from '@shantanu/ui-components';

import cardbg from '../../assets/cardbg.jpg';
import hologram from '../../assets/hologram.png';
import visa from '../../assets/visa.png';

import './pay-page.scss';

/* eslint-disable-next-line */
export interface PayPageProps {}

export interface PayPageState {
  cardNumber: number;
  cardName: string;
  expMonth: number;
  expYear: number;
  cvv: number;
  cvvFocused: boolean;
}
const initialState = {
  cardNumber: '',
  cardName: '',
  expMonth: '',
  expYear: '',
  cvv: '',
  cvvFocused: false,
} as any;

export class PayPage extends Component<PayPageProps, PayPageState> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onFormInputFocus = (_event, inputName) => {
    if (inputName == 'cvv') {
      this.setState({
        ...this.state,
        cvvFocused: true,
      });
    }
  };

  onFormInputBlur = (_event, inputName) => {
    if (inputName == 'cvv') {
      this.setState({
        ...this.state,
        cvvFocused: false,
      });
    }
  };

  updateState = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value || initialState[name],
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <div className="row justify-content-center">
          <CreditCard
            background={cardbg}
            isFlipped={this.state.cvvFocused}
            hologram={hologram}
            cardNetwork={visa}
            cardNumber={this.state.cardNumber}
            cardName={this.state.cardName}
            expMonth={this.state.expMonth}
            expYear={this.state.expYear}
            cvv={this.state.cvv}
          />
          <PayForm
            style={{
              borderRadius: 10,
              backgroundColor: '#FFF',
              position: 'absolute',
              marginTop: 100,
              padding: 20,
              paddingTop: 200,
            }}
            onInputFocus={this.onFormInputFocus}
            onInputBlur={this.onFormInputBlur}
            updateState={this.updateState}
            cardNumber={this.state.cardNumber}
            cardName={this.state.cardName}
            expMonth={this.state.expMonth}
            expYear={this.state.expYear}
            cvv={this.state.cvv}
          />
        </div>
      </div>
    );
  }
}

export default PayPage;
