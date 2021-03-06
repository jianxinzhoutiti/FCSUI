'use strict';

import React, {Component} from "react";
import {View} from 'react-native';

import Overlay from '../Overlay/Overlay';
import ActionSheetView from './ActionSheetView';

export default class ActionSheet extends Overlay {

  static ActionSheetView = ActionSheetView;
  static show(items, cancelItem, options = {}) {
    return super.show(
      <this.ActionSheetView items={items} cancelItem={cancelItem} {...options} />
    );
  }

}

