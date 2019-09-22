import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
// eslint-disable-next-line
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
// KdmComponents
// eslint-disable-next-line
import { EmptyLayout, LayoutRoute, MainLayout } from 'kdmcomponents/Layout';
import { GAListener } from 'kdmcomponents';

// pages
import DashboardPage from 'DashboardPage';

import './App.scss';

import {
  // eslint-disable-next-line
  avatarsData,
  // eslint-disable-next-line
  chartjs,
  // eslint-disable-next-line
  productsData,
  // eslint-disable-next-line
  supportTicketsData,
  // eslint-disable-next-line
  todosData,
  // eslint-disable-next-line
  userProgressTableData,
} from 'demos/dashboardPage';
import {
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Card,
  // eslint-disable-next-line
  CardBody,
  // eslint-disable-next-line
  CardHeader,
  // eslint-disable-next-line
  Col,
  // eslint-disable-next-line
  DropdownItem,
  // eslint-disable-next-line
  DropdownMenu,
  // eslint-disable-next-line
  DropdownToggle,
  // eslint-disable-next-line
  Row,
  // eslint-disable-next-line
  UncontrolledButtonDropdown,
} from 'reactstrap';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
  //return '/';
};

class App extends Component {
  render() {
    console.log(MainLayout);
    console.log(DashboardPage);
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={DashboardPage}
            />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

export default App;
