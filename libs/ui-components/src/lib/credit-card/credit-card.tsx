import React, { Component } from 'react';
import { maskAllCharacters, maskCreditCard } from '@shantanu/payment-utils';
import './credit-card.scss';

/* eslint-disable-next-line */
export interface CreditCardProps {
  cardNumber: number;
  cardName: string;
  expMonth: number;
  expYear: number;
  cvv: number;
  isFlipped: boolean;
  background: any;
  hologram: any;
  cardNetwork: any;
}

export class CreditCard extends Component<CreditCardProps> {
  render() {
    return (
      <div
        className={`card-container ${
          this.props.isFlipped ? 'card-flipped' : ''
        }`}
      >
        <div className="card-inner">
          <div
            className="card-front"
            style={{
              background: `url(${this.props.background})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            <div className="d-flex justify-content-between">
              <img
                src={this.props.hologram}
                alt="hologram"
                style={{ width: 70, height: 45, objectFit: 'cover' }}
              />

              <img
                className="card-network"
                src={this.props.cardNetwork}
                alt="VISA"
                style={{ width: 100, height: 65, objectFit: 'cover' }}
              />
            </div>

            <h2 className="card-number" style={{ color: 'white' }}>
              {this.props.cardNumber
                ? maskCreditCard(`${this.props.cardNumber}`)
                : 'XXXX XXXX XXXX XXXX'}
            </h2>

            <div className="d-flex justify-content-between card-footer">
              <div style={{ color: 'white', textAlign: 'start' }}>
                <small>Card Holder</small>
                <p className="h6">
                  {this.props.cardName ? this.props.cardName : 'YOUR NAME'}
                </p>
              </div>
              <div style={{ color: 'white', textAlign: 'start', minWidth: 50 }}>
                <small>Expires</small>
                <p className="h6">
                  {this.props.expMonth
                    ? ('0' + this.props.expMonth).slice(-2)
                    : 'MM'}
                  /
                  {this.props.expYear
                    ? this.props.expYear.toString().substr(-2)
                    : 'YY'}
                </p>
              </div>
            </div>
          </div>

          {/* CARD BACK */}

          <div
            className="card-back"
            style={{
              background: `url(${this.props.background})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            <div
              className="magnetic-stripe"
              style={{ backgroundColor: '#1c1c1c' }}
            ></div>

            <div className="back-container">
              <div
                className="d-flex justify-content-end"
                style={{ color: '#FFF' }}
              >
                CVV
              </div>
              <div
                className="d-flex justify-content-end sign-stripe"
                style={{ backgroundColor: '#FFF' }}
              >
                <span className="cvv">
                  {' '}
                  {this.props.cvv ? maskAllCharacters(`${this.props.cvv}`) : ''}
                </span>
              </div>

              {/* <div
              className="d-flex justify-content-end"
              style={{ color: '#FFF', marginTop: 10 }}
            >
              <img
                className="card-network"
                src={props.cardNetwork}
                alt="VISA"
                id="back"
                style={{ width: 50, height: 20, objectFit: 'cover' }}
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
