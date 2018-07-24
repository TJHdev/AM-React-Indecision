class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {

  }
  //handlePick - pass down to Action and setup onClick - bind here
  //randomly pick an option and alert it
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {  // Upper case for classes is not optional in React
  render() {                            // it allows react to figure out if we're trying to render a HTML element or a react component
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }


  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions} 
          onClick={this.handlePick}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} /> 
        })}
        
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      e.target.elements.option.value = '';
      alert(option);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));