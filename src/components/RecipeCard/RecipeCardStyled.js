import styled from 'styled-components';

export default styled.div`
  border: 1px solid black;
  border-radius: .5em;
  width: calc(50% - 1em);
  margin: .5em;
  overflow: hidden;
  position: relative;

  &.card--is-favorite {
    border-color: #f17f42;
  }

  .card-image {
    max-width: 100%;
  }
  .card-details {
    padding: 1em;
  }
  .card-link {
    color: #F17F42;
  }
  .card-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    color: white;
  }
`;
