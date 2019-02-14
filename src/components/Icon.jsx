import React from 'react';

function Icon(props) {

  const renderIcon = (id, alt, title) => {
    let backgroundColor = (id % 2 === 0) ? 'gray' : '';
    let imagePath = `img/iconbig${id}.png`

    return (
      <section id={backgroundColor} className="pt-5 pb-5">
        <div className="row large-block">
          <div className="col-lg-3 d-lg-block">
            <img src={imagePath} alt={alt} className="center-block text-center" />
          </div>
          <div className="col-lg-8 d-lg-block icon-box">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore reiciendis similique, quis pariatur dignissimos ad fugit dicta libero, fuga ipsum nobis at optio numquam unde delectus eaque? Ducimus, cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore reiciendis similique, quis pariatur dignissimos ad fugit dicta libero, fuga ipsum nobis at optio numquam unde delectus eaque? Ducimus, cumque.</p>
          </div>
          <div className="col-lg-1 d-lg-block icon-box"></div>
        </div>
      </section>
    );
  }

  return (
    renderIcon(props.id, props.alt, props.title)
  );
}

export default Icon;