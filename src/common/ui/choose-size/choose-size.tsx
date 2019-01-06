import * as React from 'react';

export class ChooseSize extends React.Component {
  constructor(props: any){
      super(props);
      //allows us to simply call this.handleClick to call the handleClick function
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: any){
    console.log('handle click is called');
  }

  handleChange(): void {
    console.log('handleChange');
  }

  public render() {
    return (
      <div ref="chooseSizeContainer">
        <h6>Choose size of grid</h6>
        <form>
          <label>columns</label>
          <label>rows</label>
          <input onChange={this.handleChange} type="text" id="input-for-columns"  />
          <input onChange={this.handleChange} type="text" id="input-for-rows"  />
          <label>Pixel Size</label>
          <button onClick={(e) => this.handleClick(e)} id="create_grid" type="button" >Create Grid</button>
          <input onChange={this.handleChange} type="text" id="input-for-pixel-size"  />
        </form>
      </div>
    );
  }

}

export default ChooseSize;
