import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};
   /*  onInputChange(event) {
        console.log(event.target.value); //With the alternative way we dont have to define this method
    } */
    onFormSubmit = (event) => { 
      event.preventDefault(); //we call this to prevent a form to submit automatically
      this.props.onSubmit(this.state.term);
    };

    render () {
      return (
        <div className="ui segment">
         <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
             <label>Image Search</label> {/* everysingle time an user types something into our input we are goin to update our state */}     
             <input 
               type="text" 
               value={this.state.term} 
               onChange={(e) => this.setState({ term: e.target.value })} />{/* everysingle time an user types something into our input we are goin to update our state */}
             {/* Alternative way    onChange={(event) => console.log(event.target.value)} */} 
{/* We do not put on () whenever we pass a callback function to any event handler like- onChange */}
            </div>
         </form>
        </div>
       );
    }
}


export default SearchBar;