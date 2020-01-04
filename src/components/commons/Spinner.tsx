import React, { FC } from "react";
import Loader from "react-loader-spinner";
import { Dimmer, Segment } from "semantic-ui-react";
import styled from "styled-components";

const SegmentWrapper = styled.div`
  > * > * {
    justify-content: center;
  }
`;

const LoadWrapper = styled.p``;

const Spinner: FC = () => (
  <SegmentWrapper>
    <Segment className="spinner">
      <Dimmer active inverted>
        <LoadWrapper>読み込み中...</LoadWrapper>
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </Dimmer>
    </Segment>
  </SegmentWrapper>
);

export default Spinner;
