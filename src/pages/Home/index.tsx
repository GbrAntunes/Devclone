import React from 'react';
import { FaDev } from 'react-icons/fa'
import { BsLightning } from 'react-icons/bs'
import { BiCoinStack } from 'react-icons/bi'
import { RiHeart2Line, RiChat1Line, RiNotification3Line, RiChatSmile3Line } from 'react-icons/ri'

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <nav>
        <FaDev size={50} />
        <input type="text" placeholder="Search..." />
        <div className="actions">
          <button><RiChatSmile3Line size={21} /></button>
          <button><RiNotification3Line size={21} /></button>
          <button>
            <img src="https://i.picsum.photos/id/273/200/200.jpg?hmac=q1g4PnYVQHWkGBWnLmy3VaiQHuPGrZXnpZK986TwkFg" alt="user-pic" />
          </button>
        </div>
      </nav>

      <header className="page-header">
        <button id="left-menu-btn">
          <BiCoinStack size={23} />
        </button>
        <h2>Posts</h2>
        <select name="" id="">
          <option value="">Feed</option>
          <option value="">Week</option>
          <option value="">Month</option>
          <option value="">Year</option>
          <option value="">Infinity</option>
          <option value="">Latest</option>
        </select>
        <button>
          <BsLightning size={23} />
        </button>
      </header>

      <main>

        <article>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--U9m1Czht--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/onvm67cqitxnrtfxq3go.jpg" alt=""/>
          <div className="article-wrapper">
            <header>
              <a href="#" className="user-pic">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--aNpj7Idw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169109/ff04caf5-01fd-4a8b-a2c5-f06826cccaae.jpeg" alt="user" />
              </a>
              <div>
                <p>Vitor Paladini</p>
                <small>Oct 30 (7 hours ago)</small>
              </div>
            </header>
            <div className="article-content">
              <h2>Grab your user's attention with the :focus-within CSS selector</h2>
              <div className="tags">
                <a href="#">css</a>
                <a href="#">html</a>
                <a href="#">webdev</a>
                <a href="#">beginners</a>
              </div>
              <footer>
                <div className="details">
                  <a href="#">
                    <RiHeart2Line size={23} />
                    <span>33</span>
                  </a>
                  <a href="#">
                    <RiChat1Line size={23} />
                    <span>6</span>
                  </a>
                </div>
                <div className="save">
                  <small>2 min read</small>
                  <button>Save</button>
                </div>
              </footer>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <header>
              <a href="#" className="user-pic">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--aNpj7Idw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169109/ff04caf5-01fd-4a8b-a2c5-f06826cccaae.jpeg" alt="user" />
              </a>
              <div>
                <p>Vitor Paladini</p>
                <small>Oct 30 (7 hours ago)</small>
              </div>
            </header>
            <div className="article-content">
              <h2>Grab your user's attention with the :focus-within CSS selector</h2>
              <div className="tags">
                <a href="#">css</a>
                <a href="#">html</a>
                <a href="#">webdev</a>
                <a href="#">beginners</a>
              </div>
              <footer>
                <div className="details">
                  <a href="#">
                    <RiHeart2Line size={23} />
                    <span>33</span>
                  </a>
                  <a href="#">
                    <RiChat1Line size={23} />
                    <span>6</span>
                  </a>
                </div>
                <div className="save">
                  <small>2 min read</small>
                  <button>Save</button>
                </div>
              </footer>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <header>
              <a href="#" className="user-pic">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--aNpj7Idw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/169109/ff04caf5-01fd-4a8b-a2c5-f06826cccaae.jpeg" alt="user" />
              </a>
              <div>
                <p>Vitor Paladini</p>
                <small>Oct 30 (7 hours ago)</small>
              </div>
            </header>
            <div className="article-content">
              <h2>Grab your user's attention with the :focus-within CSS selector</h2>
              <div className="tags">
                <a href="#">css</a>
                <a href="#">html</a>
                <a href="#">webdev</a>
                <a href="#">beginners</a>
              </div>
              <footer>
                <div className="details">
                  <a href="#">
                    <RiHeart2Line size={23} />
                    <span>33</span>
                  </a>
                  <a href="#">
                    <RiChat1Line size={23} />
                    <span>6</span>
                  </a>
                </div>
                <div className="save">
                  <small>2 min read</small>
                  <button>Save</button>
                </div>
              </footer>
            </div>
          </div>
        </article>

      </main>

    </Container>
  );
};

export default Home;
