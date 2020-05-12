import BasicLayout, { BasicLayoutProps } from './BasicLayout';
import DefaultHeader, { HeaderViewProps as HeaderProps } from './Header';
import TopNavHeader, { TopNavHeaderProps } from './TopNavHeader';
import SettingDrawer, {
  SettingDrawerProps,
  SettingDrawerState,
} from './SettingDrawer';

import DefaultFooter, { FooterProps } from './Footer';
import GridContent from './GridContent';
import PageContainer from './PageContainer';
import RouteContext from './RouteContext';
import getMenuData from './utils/getMenuData';
import getPageTitle from './getPageTitle';
import PageLoading from './PageLoading';

export { ProSettings as Settings } from './defaultSettings';

export { MenuDataItem } from './typings';

const PageHeaderWrapper = PageContainer;

export {
  BasicLayout,
  BasicLayoutProps,
  HeaderProps,
  TopNavHeaderProps,
  RouteContext,
  PageLoading,
  GridContent,
  DefaultHeader,
  TopNavHeader,
  DefaultFooter,
  FooterProps,
  SettingDrawer,
  SettingDrawerState,
  SettingDrawerProps,
  getPageTitle,
  PageHeaderWrapper,
  getMenuData,
  PageContainer,
};

export default BasicLayout;
