import { html, render } from 'lit-html';
import { simple_backend } from 'declarations/simple_backend';
import logo from './logo2.svg';

class App {
  greeting = '';

  constructor() {
    this.#render();
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const color = document.getElementById('color').value;
    const movie = document.getElementById('movie').value;
    this.greeting = await simple_backend.greet(name, age, color, movie);
    this.#render();

    // Display a confirmation message after recording the response
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Your response has been recorded.';
    document.querySelector('form').appendChild(confirmationMessage);
  };

  #render() {
    let body = html`
      <main>
        <img src="${logo}" alt="DFINITY logo" />
        <h3>About you!!!</h3>
        <h4>About ICP (Internet Computer)</h4>
        <p>ICP is a blockchain-based decentralized computing platform that aims to enable secure and scalable internet services.</p>
        <h5>Become a blockchain developer</h5>
        <p>Are you interested in becoming a blockchain developer? Tell us more about yourself!</p>
      
        <br />
        <br />
        <form action="#">
          <label for="name">What's your name?: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <label for="age">What's your age?: &nbsp;</label>
          <input id="age" alt="Age" type="number" />
          <label for="color">What's your fav color?: &nbsp;</label>
          <input id="color" alt="Color" type="text" />
          <label for="movie">What's your fav movie?: &nbsp;</label>
          <input id="movie" alt="Movie" type="text" />
          <section id="greeting">${this.greeting}</section>
          <button type="submit">Submit</button>
          <h5> So Glad you are here!! </h5>
        </form>
      </main>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
      .addEventListener('submit', this.#handleSubmit);
  }
}

export default App;
