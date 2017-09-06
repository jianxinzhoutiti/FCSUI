'use strict';

import React, {Component} from "react";
import {View} from 'react-native';

import Overlay from '../Overlay/Overlay';
import MenuView from './MenuView';

export default class Menu extends Overlay {

  static MenuView = MenuView;
  static show(fromBounds, items, options = {}) {
    return super.show(
      <this.MenuView fromBounds={fromBounds} items={items} {...options} />
    );
  }

}

