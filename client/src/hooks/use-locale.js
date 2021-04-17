import locales from '../locales';

const useLocale = () => {
    let defaultLocale = 'en'
    const locale = window.localStorage.getItem('locale') ? JSON.parse(window.localStorage.getItem('locale')) : defaultLocale;

    const i = (string) => {
        
        return locales[locale][string] || string;
      }

      return {
          i
      }
}

export default useLocale;