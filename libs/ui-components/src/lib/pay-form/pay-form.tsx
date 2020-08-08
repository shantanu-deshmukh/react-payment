import React, { Component } from 'react';
import { maxLengthCheck } from '@shantanu/payment-utils';
import './pay-form.scss';
/* eslint-disable-next-line */
export interface PayFormProps {
  style;
  updateState;
  onInputFocus;
  onInputBlur;
  cardNumber;
  cardName;
  expMonth;
  expYear;
  cvv;
}

export interface PayFormState {
  cardNumberError: string;
  cardNameError: string;
  expMonthError: string;
  cvvError: string;
  isSubmitted: boolean;
}

const monthOptions = Array.from({ length: 12 }, (x, i) => {
  return i + 1;
});

const yearOptions = Array.from(
  { length: 20 },
  (_x, i) => new Date().getFullYear() + i
);

const initialState = {
  cardNumberError: '',
  cardNameError: '',
  expMonthError: '',
  cvvError: '',
  isSubmitted: false,
};

export class PayForm extends Component<PayFormProps, PayFormState> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleFormChange = (event) => {
    const { name, value } = event.target;
    this.props.updateState(name, value);
    const newState = {
      ...this.state,
    };
    newState[`${name}Error`] = '';
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validateAll();
  };

  validateAll() {
    let isValid = true;
    const newState = { ...this.state } as any;
    if (this.props.cardName === '') {
      newState.cardNameError = 'Please enter a valid card name';
      isValid = false;
    }

    //TODO: write util function to validate credit card numbers
    if (
      this.props.cardNumber === '' ||
      this.props.cardNumber < 1000000000000000
    ) {
      newState.cardNumberError = 'Please enter credit card number';
      isValid = false;
    }

    const date = new Date();
    if (
      this.props.expYear < date.getFullYear() ||
      (this.props.expMonth < date.getMonth() &&
        this.props.expYear == date.getFullYear())
    ) {
      newState.expMonthError = 'Please valid expiry date';
      isValid = false;
    }

    if (this.props.cvv < 100) {
      newState.cvvError = 'Invalid CVV';
      isValid = false;
    }

    newState.isSubmitted = isValid;
    this.setState(newState);
  }

  hideSuccessMessage = () => {
    this.setState({
      ...this.state,
      isSubmitted: false,
    });
  };

  render() {
    return (
      <form
        className="form-horizontal pay-form"
        style={this.props.style}
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <div className="form-group">
            <label className="control-label">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="number"
              maxLength={16}
              onInput={maxLengthCheck}
              className="form-control input-md"
              value={this.props.cardNumber}
              onChange={this.handleFormChange}
            />
            {this.state.cardNumberError && (
              <small className="help-block" style={{ color: 'red' }}>
                {this.state.cardNumberError}
              </small>
            )}
          </div>

          <div className="form-group">
            <label className="control-label">Card Name</label>
            <input
              id="cardName"
              name="cardName"
              maxLength={30}
              onInput={maxLengthCheck}
              type="text"
              autoComplete = "off"
              className="form-control input-md"
              onChange={this.handleFormChange}
              value={this.props.cardName}
            />
            {this.state.cardNameError && (
              <small className="help-block" style={{ color: 'red' }}>
                {this.state.cardNameError}
              </small>
            )}
          </div>

          <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
            <div className="p-2 bd-highlight">
              <label className="control-label">Expiry Date</label>

              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="bd-highlight">
                  <select
                    id="expMonth"
                    name="expMonth"
                    className="form-control"
                    onChange={this.handleFormChange}
                    value={this.props.expMonth}
                  >
                    <option value="" disabled>
                      Month
                    </option>

                    {monthOptions.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bd-highlight" style={{ marginLeft: 10 }}>
                  <select
                    id="expYear"
                    name="expYear"
                    className="form-control"
                    onChange={this.handleFormChange}
                    value={this.props.expYear}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {yearOptions.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {this.state.expMonthError && (
                <small className="help-block" style={{ color: 'red' }}>
                  {this.state.expMonthError}
                </small>
              )}
            </div>

            <div className="p-2 bd-highlight" style={{ maxWidth: 150 }}>
              <div className="form-group">
                <label className="control-label">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  type="number"
                  maxLength={3}
                  onInput={maxLengthCheck}
                  className="form-control input-md"
                  onFocus={(e) => this.props.onInputFocus(e, 'cvv')}
                  onBlur={(e) => this.props.onInputBlur(e, 'cvv')}
                  onChange={this.handleFormChange}
                  value={this.props.cvv}
                />
                {this.state.cvvError && (
                  <small className="help-block" style={{ color: 'red' }}>
                    {this.state.cvvError}
                  </small>
                )}
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Submit
          </button>

          {this.state.isSubmitted && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
              style={{ marginTop: 10 }}
            >
              Submitted!
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={this.hideSuccessMessage}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </fieldset>
      </form>
    );
  }
}

export default PayForm;
