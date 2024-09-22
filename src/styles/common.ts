import styled from 'styled-components';

const ErrorStyled = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 24px;
  max-width: 1320px;
  margin: auto;
  overflow-y: auto;
  padding: 0 12px;
`;

interface SpaceProps {
  height? : number;
  $minHeight? : number;
}

const Space = styled.div<SpaceProps>`
  height: ${(props) => `${props.height}px` || 'auto'};
  min-height: ${(props) => `${props.$minHeight}px` || 0};
`;

export {
  ErrorStyled,
  Container,
  Grid,
  Space,
};
