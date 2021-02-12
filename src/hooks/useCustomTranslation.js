import { useTranslation } from 'react-i18next';

export const useCustomTranslation = () => {
  const {
    i18n: { language },
    t
  } = useTranslation();

  return { t, language };
};
