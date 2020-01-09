import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    Splash,
    Main,
  }),
);

export default Routes;
