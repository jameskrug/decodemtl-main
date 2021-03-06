import React from 'react';
import Helmet from 'react-helmet';

const Success = (props) => {
    const status = props.location.query.status;

    if (status === 'success') {
        return (
            <section className="module">
                <div className="wrapper">
                    <h2 className="module-title">Success!</h2>
                    <p>THIS IS THE SUCCESS PAGE</p>
                    <p>If you have any questions in the mean time, please <a href="mailto:hello@decodemtl.com">email
                        us</a>.</p>
                </div>
            </section>
        );
    }
    return (
        <section className="module">
            <Helmet
                title="Confirmation | DecodeMTL"
                meta={[
                    {property: 'description', content: ''},
                ]}/>
            <div className="wrapper">
                <h2 className="module-title">Something went wrong!</h2>
                <p>Please try again! If the problem persists, please contact hello@decodemtl.com.</p>
            </div>
        </section>
    );

};

Success.propTypes = {};

export default Success;