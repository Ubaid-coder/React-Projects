import './Main.css'
import Fanta from '../assets/fanta.png'
import orange from '../assets/orange.webp'
import orange2 from '../assets/orange2.png'
import leaf from '../assets/leaf.webp'
import leaf2 from '../assets/leaf2.png'
import leaf3 from '../assets/coconoutleaf.png'
import cocacola from '../assets/cocacola.png'
import fanta from '../assets/fanta.png'
import pepsi from '../assets/pepsi.png'
import lemon from '../assets/lemon.webp'

function Main() {
    
    return (
        <main>

            <section className='hero-section'>
                <h1>Fanta</h1>
                <img id='orange2' src={orange2} />
                <img id='fanta' src={Fanta} />
                <img id='orange' src={orange} />
                <img id='leaf' src={leaf} />
                <img id='leaf2' src={leaf2} />
                <img id='leaf3' src={leaf3} />
            </section>

            <section className='fanta-section'>
                <div className="left">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#a95a22" d="M39.2,-0.8C39.2,28.2,19.6,56.4,-6.1,56.4C-31.8,56.4,-63.6,28.2,-63.6,-0.8C-63.6,-29.8,-31.8,-59.7,-6.1,-59.7C19.6,-59.7,39.2,-29.8,39.2,-0.8Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="right">
                    <h1>Flavour Updated</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi provident impedit, dolore facere minus sed! Nisi at et facere a aspernatur esse ratione perspiciatis quam pariatur, in qui libero ipsum explicabo debitis! Sequi deleniti totam temporibus itaque. Asperiores laboriosam atque earum fuga. Odio quibusdam ab ipsum blanditiis. Temporibus, officia! Error animi inventore quasi mollitia quo delectus nobis amet odio provident facilis modi neque iusto, recusandae dignissimos minus doloremque odit atque porro sint omnis. Ex architecto ipsum deleniti optio voluptatibus. Exercitationem voluptate cum laudantium optio nisi nesciunt ullam obcaecati amet corporis neque error eius assumenda iste, at quae! Ut, qui.</p>
                </div>
            </section>

            <section className="details-section">
                <div className="card ">
                    <img className='lemon lemon1' src={lemon} />
                    <img id='cocacola-can' src={cocacola} alt="" />
                    <h1>Cocacola</h1>
                    <button>Buy Now</button>
                </div>
                <div className="card ">
                    <h1>Fanta</h1>
                    <button>Buy Now</button>
                </div>
                <div className="card ">
                    <img className='lemon lemon2' src={lemon} />
                    <img id='pepsi-can' src={pepsi} alt="" />
                    <h1>Pepsi</h1>
                    <button>Buy Now</button>
                </div>
            </section>
        </main>
    )
}

export default Main;