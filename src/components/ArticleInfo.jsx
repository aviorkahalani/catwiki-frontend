const ArticleInfo = () => {
  const getImage = (path) => new URL(`../assets/images/${path}.png`, import.meta.url).href

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
        <img className="img-1" src={getImage('image1')} alt="" />
        <img className="img-2" src={getImage('image2')} alt="" />
        <img className="img-3" src={getImage('image3')} alt="" />
      </div>
    </section>
  )
}

export default ArticleInfo
