import * as React from 'react';
import { IconProps, Icon } from 'react-native-elements';

interface Props extends IconProps {
  focused?: boolean,
}

export const TabIcon: React.FunctionComponent<Props> = ({ focused, ...restProps }) => {
  return focused
    ? <Icon {...restProps} />
    : <Icon {...restProps} color='grey' />
};

TabIcon.defaultProps = {
  focused: false,
};