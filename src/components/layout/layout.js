import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';


const Layout = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="layout">
      <header>
        Mensio Health Care Application
      </header>

        <div className="layout__content">
          {children}
        </div>

    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default React.memo(Layout);
