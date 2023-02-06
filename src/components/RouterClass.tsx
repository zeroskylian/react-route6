import React, { ComponentType } from 'react';
import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  Location,
} from 'react-router-dom';

interface RouterProps {
  navigate: NavigateFunction;
  readonly params: Params<string>;
  location: Location;
}

export type WithRouterProps<T> = T & RouterProps;
type OmitRouter<T> = Omit<T, keyof RouterProps>;

export function withRouter<T>(
  Component: ComponentType<OmitRouter<T> & RouterProps>
) {
  return (props: OmitRouter<T>) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        {...props}
      />
    );
  };
}

/************* 
    Usage 
 *************/

interface TestProps {
  howdy: boolean;
  partner: boolean;
}

interface TestState {
  howdyPartner: string;
}

class TestComponent extends React.Component<
  WithRouterProps<TestProps>,
  TestState
> {
  state = { howdyPartner: '' };
  render() {
    return <h1>{this.props.location.pathname}</h1>;
  }
}

export default withRouter<TestProps>(TestComponent);
