'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import Theme from '../../common/Theme';

export default class Label extends Text {

  static propTypes = {
    ...Text.propTypes,
    type: PropTypes.oneOf(['default', 'title', 'detail', 'danger']),
    size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    ...Text.defaultProps,
    type: 'default',
    size: 'md',
    numberOfLines: 1,
  };

  buildProps() {
    let {type, size, style, text, children, ...others} = this.props;

    let color, fontSize;
    switch (size) {
      case 'xl': fontSize = Theme.labelFontSizeXL; break;
      case 'lg': fontSize = Theme.labelFontSizeLG; break;
      case 'sm': fontSize = Theme.labelFontSizeSM; break;
      case 'xs': fontSize = Theme.labelFontSizeXS; break;
      default: fontSize = Theme.labelFontSizeMD;
    }
    switch (type) {
      case 'title':
        color = Theme.labelTextTitleColor;
        fontSize = Math.round(fontSize * Theme.labelTitleScale);
        break;
      case 'detail':
        color = Theme.labelTextDetailColor;
        fontSize = Math.round(fontSize * Theme.labelDetailScale);
        break;
      case 'danger':
        color = Theme.labelTextDangerColor;
        fontSize = Math.round(fontSize * Theme.labelDangerScale);
        break;
      default:
        color = Theme.labelTextColor;
    }
    style = [{
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: color,
      fontSize: fontSize,
      overflow: 'hidden',
    }].concat(style);

    if (text || text === '' || text === 0) children = text;

    this.props = {type, size, style, text, children, ...others};
  }

  render() {
    this.buildProps();
    return super.render();
  }
}