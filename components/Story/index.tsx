import * as React from 'react';
import { Container } from './styles';

function Story() {
  const adjectives = ['Creative', 'Analytics', 'Collaborative', 'Proactive'];

  return (
    <Container>
      {adjectives.map((adjective) => (
        <div key={adjective}>
          <div className="image">
            <span>
              <div />
            </span>
          </div>

          <span>{adjective}</span>
        </div>
      ))}
    </Container>
  );
}

export default Story;
