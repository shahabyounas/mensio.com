import locales from '../locales';

const useLocale = () => {
    let defaultLocale = 'en'
    const locale = window.localStorage.getItem('locale') ? JSON.parse(window.localStorage.getItem('locale')) : defaultLocale;

    console.log("locale", locale);

    const i = (string) => {
        
        return locales[locale][string] || string;
      }

      return {
          i
      }
}

export default useLocale;