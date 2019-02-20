import addToMailchimp from 'gatsby-plugin-mailchimp';
import * as React from 'react';
import * as ReactGA from 'react-ga';

ReactGA.initialize('UA-132813912-1');

const initialState = { email: '' };

type State = Readonly<typeof initialState>;


interface MailChimpResult {msg: string; result: string;};

const CTA_TEXT = 'Subscribe to Runfastus';

const SUBSCRIBE_TEXT = 'Subscribe';

class RFSubscriptionForm extends React.Component<{}, State> {

  readonly state: State = initialState

  render() {
    return (
      <div
        style={{
          display: `flex`,
          flexDirection: 'column',
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: 5,
            padding: 12,
          }}>
          {CTA_TEXT}
        </div>
        <div
          style={{
          display: `flex`,
          flexDirection: 'row',
        }}>
        <textarea
          style={{
            display: `flex`,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            color: '#000000',
            borderWidth: 2, borderColor: '#d6d7da',
            flexGrow: 1,
            borderRadius: 10,
            padding: 12,
            marginTop: 12,
            marginRight: 12,
            height: 60,
          }}
          placeholder={'Your email address'}
          value={this.state.email}
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }} >
          Email
        </textarea>
        <div
          style={{
            display: `flex`,
            backgroundColor: '#CD5C5C',
            justifyContent: 'center',
            color: '#FFFFFF',
            borderRadius: 10,
            padding: 14,
            marginTop: 12,
            height: 60,
          }}
          onClick={() => {
            ReactGA.event({
              category: 'Subscription',
              action: 'SubscribeButtonPressed',
            });
            addToMailchimp(this.state.email)
              .then((data: MailChimpResult) => {
                ReactGA.event({
                  category: 'Subscription',
                  action: 'SubscribeProcessed',
                });
                console.log(data)
              })
              .catch(() => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
              });
          }}>
          {SUBSCRIBE_TEXT}
        </div>
      </div>
      </div >
    );
  }
}
export default RFSubscriptionForm
