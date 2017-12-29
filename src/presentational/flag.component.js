import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <div class="thumbnail">
            <img style={{minHeight: 280 + 'px'}} className="country-logo" src={props.country.imageUrl} alt="country" />
        </div>
        </div>
);

export default CountryFlag;