import React from 'react';

const HomeEvolving = (props) => {
    return (
        <section className="module evolving-module">
            <div className="wrapper">
                <div className="module-boxed">
                    <h2 className="module-title">Modern Education</h2>
                    <div className="row-container one-half-container">
                        <div className="one-half-content">
                            <p>We believe education should evolve with the times. Unlike traditional education institutions, we are in close contact with employers, ensuring the subjects we teach the most in-demand job skills of today.</p>
                            <div className="link-more text-body-small">
                                <a href="#">Read more about us here<span className="fa fa-caret-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="one-half-content">
                            <div className="cta-widget">
                                <div className="text-body-small">Want to learn more about life as a DecodeMTL student?</div>
                                <div className="cta cta-single">
                                    <a href="#" className="btn-primary btn-small">Schedule a visit</a>
                                </div>
                                <div className="text-body-small"><a className="phone-link" itemProp="telephone" href="tel:1-888-511-9155">Or Give us a call: 1-888-551-9155</a></div>
                            </div>
                        </div>
                    </div>
                    {/*!-- /.row-container --*/}
                </div>
                {/*!-- /.module-boxed --*/}
            </div>
            {/*!-- /.wrapper --*/}
        </section>
    );
};

HomeEvolving.propTypes = {};

export default HomeEvolving;