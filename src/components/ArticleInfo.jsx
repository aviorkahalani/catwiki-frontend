const ArticleInfo = () => {
  return (
    <section className="article">
      <div className="article__content">
        <h2 className="content__title">Why should you have a cat?</h2>
        <p className="content__desc">
          Having a cat around you can actually trigger the release of calming chemicals in your
          body which lower your stress and anxiety leves
        </p>
        <a className="content__link" href="#">
          READ MORE
        </a>
      </div>
      <div className="article__imgs">
        <img className="img-1" src="src/assets/images/image1.png" alt="" />
        <img className="img-2" src="src/assets/images/image2.png" alt="" />
        <img className="img-3" src="src/assets/images/image3.png" alt="" />
      </div>
    </section>
  )
}

export default ArticleInfo
