import React from "react";
import Magazine from "./Magazine";
import "./App.css";
import magazine1 from './imgs/magazines/magazine1.png'
import magazine2 from './imgs/magazines/magazine2.png'
import magazine3 from './imgs/magazines/magazine3.png'

// Class Component
class App extends React.Component {
  state = {
    isLoading: true,
    magazines: []
  };

  getMagazines = async () => {

    const magazines = [{
      'id' : 1,
      'title' : 'magazine1',
      'src' : magazine1
    },
    {
      'id' : 2,
      'title' : 'magazine2',
      'src' : magazine2
    },
    {
      'id' : 3,
      'title' : 'magazine3',
      'src' : magazine3
    }]
    this.setState({ magazines, isLoading: false})
    
  }

  componentDidMount() {
    this.getMagazines();
  }

  render() {
    const { magazines, isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div class="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="magazines">
            {magazines.map(magazine => (
              <Magazine 
                key={magazine.id} 
                id={magazine.id} 
                title={magazine.title} 
                src={magazine.src} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
