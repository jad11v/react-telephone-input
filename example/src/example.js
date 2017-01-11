'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import ReactTelephoneInput from '../../lib/ReactTelephoneInput.js';

console.log('ReactTelephoneInput: ', ReactTelephoneInput);
var App = React.createClass({
    render() {
        return (
            <div>
                <ReactTelephoneInput defaultCountry='us' preferredCountries={['us', 'ca', 'zz', 'hk']} />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
