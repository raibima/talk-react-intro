import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`

const Dots = styled.div`
  position: absolute;
  bottom: 7px;
  left: 100%;
  display: flex;
`;

const Dot = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 16px;
  background-color: #333;
`;

class Aisi extends React.Component {
  state = {
    dots: [null],
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => {
        if (state.dots.length === 3) {
          return {
            dots: [null],
          };
        }
        return {
          dots: [...state.dots, null],
        };
      });
    }, 800);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Container>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrJuZkjaPF4UmwYIlQCjOlg8ZMD5Otm-rZzzV1JmyOGcrbZRmyw" />
        <Dots>
          {this.state.dots.map((d, idx) => (
            <Dot key={idx} />
          ))}
        </Dots>
      </Container>
    );
  }
}

export default Aisi;
