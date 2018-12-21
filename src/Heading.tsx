import * as React from 'react';

interface IHeadingProps {
  recipient?: string;
}

const Heading: React.FunctionComponent<IHeadingProps> = ({ recipient = 'React' }) => {
  return <h1>Hello {recipient}</h1>;
};

export default Heading;
