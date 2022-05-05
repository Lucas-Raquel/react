import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Starbucks</title>
        <link rel="stylesheet" href="assets/css/style.css" />
        <header>
       
          <div className="line" />
          <div className="container header--area">
          
            <div className="header-left">
            </div>
            <div className="header--right">
              <div className="header--search">
                <form>
                  <input type="text" name="search" placeholder="Search" />
                  <button>
                  
                  </button>
                </form>
              </div>
              <div className="header--menu">
                
              </div>
            </div>
          </div>
          <section className="banner">
            <div className="container">
              <h1>Starbucks®<br />Happy Hour</h1>
              <span>We'll meet you in your inbox. Drink deals are on their way.</span>
              <div className="banner--images">
                <img className='imagem1'/>
                <img className='imagem2'/>
                <img className='imagem3'/>
              </div>
            </div>
          </section>
          <section className="area1">
            <div className="area1--content">
              <div className="bar" />
              <h2>Four Drinks, A Million<br />Reasons</h2>
              <div className="area1--quote"><em>"Just love yourself and you're set."</em> - Lady Gaga</div> 
              {/*<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FStarbucks%2Fposts%2F10160094951568057&show_text=true&width=500" width="500" height="590" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>*/}
            </div>
            <a href className="button">learn more</a>
            <div className="area1--img1" />
            <div className="area1--img2" />
          </section>
          <section className="area2">
            <div className="area2--content">
              <div className="bar" />
              <h2>Introducing Vanilla Sweet Cream Cold Brew - Sweet, Creamy, Cold, Bold.</h2>
              <div className="area2--text">Just before serving, our slow-steeped custom blend Starbucks® Cold Brew Coffee is topped
                with a delicate float of house-made vanilla sweet cream that cascades throughout the cup.
              </div>
              <a href className="button">learn more</a>
            </div>
            <div className="area2--img1" />
            <div className="area2--img2" />
          </section>
          <section>
            <div className="area3">
              <div className="area3--content">
                <h2>The New Ultra Caramel<br />Frappuccino Is Here!</h2>
                <div className="area3--text">Congrats on doing that thing! This calls for caramel. Lots of it. With cold
                  brew whipped cream. The new Ultra Caramel Frappuccino is here!</div>
                <a href className="button">learn more</a>
              </div>
              <div className="area3--img1" />
            </div>
          </section>
          <section className="area4">
            <div className="area4--content">
              <div className="bar" />
              <h2>kindness Starts<br /> With A Cup</h2>
              <div className="area4--text">Introducing the Cups of kindness collection: four very special drinks as delicious
                and refreshing as they are beautiful. Two new creations, Matcha Lemonade and Violet Drink, will join
                Pink Drink as instant summer favorites.</div>
              <a href className="button">learn more</a>
            </div>
            <div className="area4--img1" />
          </section>
          <section className="area5" />
          <section className='area6'/>
    
          <footer>
    
          </footer>
        </header>
      </div>
    );

      </header>
    </div>
  );
}

export default App;
