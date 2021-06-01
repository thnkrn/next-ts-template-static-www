import { styled } from '@compiled/react'
import ImageWrapper from 'components/ImageWrapper'
import Layout from 'components/Layout'
import Link from 'next/link'
import Img from 'react-optimized-image'

const H1 = styled.h1`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about" prefetch={false}>
        <a>Go to About page</a>
      </Link>
    </p>
    <ImageWrapper width={1920} height={1080}>
      <Img
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        src={require('public/images/mock-img.png')}
        sizes={[400, 500, 700, 900]}
        breakpoints={[599, 1000, 1599]}
        loading="lazy"
        width="100%"
        height="auto"
      />
    </ImageWrapper>
  </Layout>
)

export default IndexPage
