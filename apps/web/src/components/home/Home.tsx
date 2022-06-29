import { Heading } from '@chakra-ui/react'
import { Interpolation, Theme, css } from '@emotion/react'
import { useTranslations } from 'next-intl'
import { ColorModeToggle } from 'ui'

import { Banner } from '../banner'

const styles = ({ colors }: Theme) => css`
  color: ${colors.facebook[600]};
`

export const Home = () => {
  const t = useTranslations('Home')
  return (
    <>
      <Heading css={styles as Interpolation<{}>}>{t('heading')}</Heading>
      <Banner />
      <ColorModeToggle />
    </>
  )
}
