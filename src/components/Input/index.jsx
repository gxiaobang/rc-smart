/**
 * 按钮
 */
import React from 'react';
import Validator from 'validatorjs';
import classnames from 'classnames';
import './style';

class Input extends React.Component {

  state = {
    error: ''
  };

  // 输入变化
  handleChange(e) {
    const { rules } = this.props;
    let val = e.target.value;
    // 校验规则
    var validation = new Validator({ n: val }, { n: rules });

    let error = null;
    if (validation.fails()) {
      error = validation.errors.first('n');
    }
    
    this.setState({
      error
    });
  }
  render() {
    const { rules, type, name, className, placeholder } = this.props;
    let cls = classnames('rc-smart-input', className);

    const props = { type, placeholder, name };
    if (this.props.hasOwnProperty('value')) {
      props.value = this.props.value;
    }
    if (this.props.hasOwnProperty('defaultValue')) {
      props.defaultValue = this.props.defaultValue;
    }

    if (rules) {
      return (
        <div className="rc-smart-input-wrap">
          <input className={cls} {...props} onChange={this.handleChange.bind(this)} />
          {
            this.state.error &&
              <div className="rc-smart-error">{this.state.error}</div>
          }
        </div>
      );
    }
    else {
      return (
        <input className={cls} {...props} />
      );
    }
  }
}

export default Input;