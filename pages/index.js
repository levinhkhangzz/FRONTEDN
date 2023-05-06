import Head from 'next/head';
import homeStyles from '../styles/home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VegaCorner</title>
        <meta name='keywords' content='vegan, vegetarian, recipes, cooking, food' />
      </Head>
      <section className={homeStyles.section}>
        <div className={homeStyles.tit}>
          <div className={homeStyles.tit1}>
            The art of
            <br/>vegan food
          </div>
          <div className={homeStyles.tit2}>
            Making a vegan dish is much
            <br/>easier than you would imagine!
            <br/>Let us inspire you to cook daily vegan meal
            <br/>from common ingredients around you
            <br/>and master the art of vegan cooking!
          </div>
        </div>
        <div className={homeStyles.pic}></div>
      </section>

    </div>
  )
}