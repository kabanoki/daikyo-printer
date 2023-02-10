import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [
      {name:'', fileName:''},
      {name:'', fileName:''},
      {name:'', fileName:''},
      {name:'', fileName:''},
      {name:'', fileName:''},
      {name:'', fileName:''},
      {name:'', fileName:''},
    ],
  };

  constructor(prop) {
    super();
    this.todoRef = React.createRef();
  }

  insert(e) {
    let array = this.state.list;
    const id = this.state.list.length;
    const val = this.todoRef.current.value;
    array.push({id:id,value:val});
    this.setState({list:array});
  }

  render() {
    return <div className="App">
      <div className="container">
        <div className="card">
          <h5 className="card-header">印刷を選択</h5>
          <div className="card-body overflow-auto print-list">
            <div className="list-group">
              {this.state.list.map(item => 
              <button key={item.id} type="button" className="list-group-item list-group-item-action">A second item</button>
              )}
            </div>
          </div>
          <div className="card-footer text-muted">
            <button type="button" className="btn btn-outline-secondary">CSV再取り込み</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
