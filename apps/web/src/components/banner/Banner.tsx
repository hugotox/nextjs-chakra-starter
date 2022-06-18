import { useTranslations } from 'next-intl'

export const Banner = () => {
  const t = useTranslations('Banner')
  return <div>{t('message')}</div>
}
