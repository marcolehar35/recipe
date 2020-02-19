import styled from 'styled-components';

export default styled.div`
  border: 1px solid black;
  border-radius: .5em;
  width: calc(50% - 1em);
  margin: .5em;
  overflow: hidden;
  .card-image {
    max-width: 100%;
  }
  .card-details {
    padding: 1em;
  }
  .card-link {
    color: #F17F42;
  }
`;
