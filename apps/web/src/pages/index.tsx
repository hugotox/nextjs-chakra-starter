import { Link } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'

import { Home } from '../components/home'
import { getLangFiles } from '../utils/pages'

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

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: await getLangFiles(locale),
    },
  }
}
