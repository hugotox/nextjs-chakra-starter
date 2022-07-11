import { Link } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'

import { Home } from '../components/home'
import { getLangMessages } from '../utils/pageUtils'

export default function Index() {
  return (
    <>
      <Home />
      <NextLink href="/profile" passHref>
        <Link>Profile</Link>
      </NextLink>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getLangMessages({ locale, page: 'index' })),
    },
  }
}
