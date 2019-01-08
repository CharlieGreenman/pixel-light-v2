import * as React from 'react';
import styles from './choose-size.module.scss'; // Import css modules stylesheet as styles
import Button from '@material-ui/core/Button';

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
      <div className={styles.chooseSize} ref="chooseSizeContainer">
        <h6 className={styles.chooseSize}>Choose size of grid</h6>
        <form className={styles.form}>
          <label className={styles.label}>columns</label>
          <label className={styles.label}>rows</label>
          <input className={styles.input} onChange={this.handleChange} type="text" id="input-for-columns"  />
          <input className={styles.input} onChange={this.handleChange} type="text" id="input-for-rows"  />
          <label className={styles.label}>Pixel Size</label>
          <Button onClick={(e) => this.handleClick(e)} id="create_grid" type="button" >Create Grid</Button>
          <input className={styles.input} onChange={this.handleChange} type="text" id="input-for-pixel-size"  />
        </form>
      </div>
    );
  }

}

export default ChooseSize;
