function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="sidebar">
          <h2 className="mb-30">Корзина</h2>

          <div className="items">
            <div className="cart-item d-flex align-center mb-25">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cart-item__img"></div>
              <div className='mr-20 flex'>
                <p className="">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn mr-20" src='img/btn-remove.svg' alt="Add" />
            </div>

            <div className="cart-item d-flex align-center mb-25">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="cart-item__img"></div>
              <div className='mr-20 flex'>
                <p className="">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn mr-20" src='img/btn-remove.svg' alt="Add" />
            </div>
          </div>

        

        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-40 ">
            <img width={18} height={18} src="img/basket.svg" alt="" />
            <span>1205</span>
          </li>
          <li>
            <img width={18} height={18} src="img/userpic.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <img src="/img/heart_unliked.svg" alt="heart" className="favourite" />
            <img width={133} height={112} src='img/sneakers/1.jpg' alt='' />
            <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='' alt='' />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/heart_unliked.svg" alt="heart" className="favourite" />
            <img width={133} height={112} src='img/sneakers/1.jpg' alt='' />
            <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='' alt='' />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/heart_unliked.svg" alt="heart" className="favourite" />
            <img width={133} height={112} src='img/sneakers/3.jpg' alt='' />
            <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='' alt='' />
              </button>
            </div>
          </div>

          <div className="card">

            <img src="/img/heart_unliked.svg" alt="heart" className="favourite" />
            <img width={133} height={112} src='img/sneakers/4.jpg' alt='' />
            <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b> 12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='' alt='' />
              </button>
            </div>
          </div>



        </div>

      </div>
    </div >
  );
}

export default App;
