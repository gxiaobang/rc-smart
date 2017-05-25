/**
 * 消息提示
 */

import { Dialog, Message } from 'components';
import { getCache } from 'stores/cache';

const homeStore = getCache('homeStore');

const tips = {
  success({ code, msg, addition, method = 'refresh' }) {

    Dialog.closeCurrent();

    if (addition) {
      msg = `${msg}：` + addition;
      Dialog.alert(msg, 'info', () => {
        homeStore.refresh('enterprise', method);   
      })
    }
    else {
      homeStore.refresh(code, method);
      Message.success(msg);
    }
  }
};


export default tips;