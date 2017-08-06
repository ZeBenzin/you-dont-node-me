import React, { Component } from 'react';
import 'src/components/EntityResultItem/EntityResultItem.scss';

class EntityResultItem extends Component {
  constructor (props) {
    super(props);
    this.onEntitySelected = this.onEntitySelected.bind(this);
  }

  onEntitySelected () {
    this.props.showEntityCard(this.props.entity._id);
  }

  render () {
    return (
      <div onClick={this.onEntitySelected}>
        <div className='entity-result-item__left'>
          <p className='entity-result-item__left-name'>
            {this.props.entity.name}
          </p>
        </div>
        <div className='entity-result-item__right'>
          <span className='entity-result-item__right-trust fa' />
        </div>
      </div>
    );
  }
}

export default EntityResultItem;
