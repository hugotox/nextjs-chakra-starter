import { Heading } from '@chakra-ui/react'
import { css, Theme } from '@emotion/react'
import { useTranslations } from 'next-intl'
import { Button } from 'ui'

import { Banner } from '../banner'

const styles = ({ colors }: Theme) => css`
  color: ${colors.facebook[600]};
`

export const Home = () => {
  const t = useTranslations('Home')
  return (
    <>
      <Heading css={styles}>{t('heading')}</Heading>
      <Banner />
      <Button>Test</Button>
    </>
  )
}
