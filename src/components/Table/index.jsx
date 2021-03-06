/**
 * 表格
 * @author gxiaobang
 * @example
 *   <Table data={data} columns={columns} onChange={fn}></Table>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Pagination, Spin } from '@/components';
import './style';

// <colgroup><col style="width: 360px;"></colgroup>

// 显示序号
const showNo = () => {
  return { title: __('No'), key: 'No', render: (text, item, index) => index + 1 };
};

class Table extends React.Component {

  static showNo = showNo;

  renderColumns() {
    const { columns = [] } = this.props;
    return (
      <tr>
      {
        columns.map((item, index) => {
          return <th key={index}>{item.title}</th>
        })
      }
      </tr>
    );
  }

  renderData() {
    const { columns = [], data = [] } = this.props;

    return (
      data.map((item, index) => {
        return (
          <tr key={index}>
          {
            columns.map((item2, index2) => {
              let { key, title } = item2;
              let text = item[ key ];
              if (_.isFunction(item2.render)) {
                text = item2.render(text, item, index);
              }
              return <td key={key}>{text}</td>
            })
          }
          </tr>
        )
      })
    )
  }

  render() {
    const { data = [], pagination = {}, onChange, loading, style } = this.props;
    // <img src={require('url-loader!images/kongshuju.svg')} alt=""/>
    return (
      <div className="table-wrapper">
        <div className="table-main" ref="main">
          <table className="table">
            <thead>
              {this.renderColumns()}
            </thead>
            <tbody>
              {this.renderData()}
            </tbody>
          </table>

          {
            !loading && data.length == 0 &&
              <img src={require('url-loader!@/images/kongshuju.svg')} alt="" style={{
                maxHeight: 600
              }} />
          }
        </div>
        
        <Pagination data={pagination} onChange={onChange} />

        {
          loading && 
            <div className="table-loading"><Spin /></div>
        }
      </div>
    )
  }
}

export default Table;