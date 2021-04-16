import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import useLocale from '../../hooks/use-locale';
import Button from '../button';


const Layout = (props) => {
  const {
    children,
  } = props;

  const { i } = useLocale();
  const currentLocale  = window.localStorage.getItem('locale');
  let defaultBtnLabel = 'English'

  if(currentLocale) {
    defaultBtnLabel = JSON.parse(currentLocale) === 'en' ? 'English' : 'French'
  }

  const [buttonLable, setButtonLabel] = useState(defaultBtnLabel);


  const setLanguage = () => {
    if(currentLocale) {
       const newSetLng = JSON.parse(currentLocale) === 'en' ? 'fr' : 'en'

       setButtonLabel(newSetLng === 'en' ? 'English' :'French')

       window.localStorage.setItem('locale', JSON.stringify(newSetLng));
    }
    
  }

  useEffect(() => {
  }, [buttonLable])
  

  return (
    <div className="layout">
      <div className="layout__top" >
        <header className="layout__header">{i('app-heading')}</header>
        <Button  name={buttonLable} className="layout__locale-btn button--lang"  onClick={() => setLanguage()} />
      </div>

        <div className="layout__content" key={defaultBtnLabel}>
          {children}
        </div>

    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default React.memo(Layout);
