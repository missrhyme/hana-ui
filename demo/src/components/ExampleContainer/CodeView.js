/**
 * Author: ひまわり(dtysky<dtysky@outlook.com>)
 * Github: https://github.com/dtysky
 * Created: 16/12/29
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MarkdownElement from '../MarkdownElement';
import CodeViewTitle from './CodeViewTitle';

const styles = {
  markdown: {
    overflow: 'auto',
    maxHeight: 1400,
    transition: 'max-height .8s ease-in-out',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    borderBottom: '1px solid #ddd',
    background: 'transparent'
  },
  markdownRetracted: {
    maxHeight: 0,
    borderBottom: 'none',
    background: 'transparent'
  },
  description: {
    overflow: 'auto',
    padding: '10px 20px 0',
    marginTop: 0,
    marginBottom: 0,
    background: 'transparent'
  }
};

export default class CodeView extends Component {
  static propTypes = {
    children: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    lang: PropTypes.string
  };

  state = {
    expand: false
  };

  handleClick = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  render() {
    const text = `\`\`\`js
${this.props.children}
    \`\`\``;

    const descriptionStyle = styles.description;
    let codeStyle = Object.assign({}, styles.markdown, styles.markdownRetracted);
    let tooltip = 'Show source';

    if (this.state.expand) {
      codeStyle = styles.markdown;
      tooltip = 'Hide source';
    }

    return (
      <div className={cx('example-view')}>
        <div onClick={this.handleClick}>
          <CodeViewTitle
            title={this.props.title}
            tooltip={tooltip}
            active={this.state.expand}
          />
        </div>
        <MarkdownElement
          style={codeStyle}
          text={text}
        />
        <MarkdownElement
          style={descriptionStyle}
          text={this.props.description}
        />
      </div>
    );
  }
}
