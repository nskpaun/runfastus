import * as React from 'react';

interface RFGuestAuthorHeaderProps {
  guestAuthorName: string;
}

const POG_RADIUS = 24;

class RFGuestAuthorHeader extends React.Component<RFGuestAuthorHeaderProps> {
  render() {
    const authorAttribution =
      `Written by The Most Honorable ${this.props.guestAuthorName}, friend of Runfastus who lives.`;
    return (
      <div
        style={{
          display: `flex`,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            fontStyle: 'italic',
            borderRadius: 5,
            padding: 12,
          }}>
          <div
            style={{
              display: `flex`,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0073e6',
              fontStyle: 'italic',
              borderRadius: POG_RADIUS,
              height:POG_RADIUS * 2,
              width: POG_RADIUS * 2,
              color: '#ffffff',
              fontSize: 24,
              marginRight: 12,
              padding: 12,
            }}>
            {this.props.guestAuthorName.substring(0,1)}
          </div>
          {authorAttribution}
        </div>
      </div>
    );
  }
}
export default RFGuestAuthorHeader
