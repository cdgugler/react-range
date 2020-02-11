import * as React from 'react';
import { Range, getTrackBackground } from '../src/index';

const STEP = 10;
const MIN = 5;
const MAX = 105;

class StyledSteps extends React.Component {
  state = {
    values: [55]
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => this.setState({ values })}
          renderTrack={({ props, children }) => {
            const tickColor = "rgb(216,216,216)";
            const backgroundSteps = props.steps?.reduce((acc, next, idx, src) => {
              let start = next;
              if (idx === 0) {
                return `linear-gradient(to right, ${tickColor} 2px, transparent 2px)`;
              }
              if (idx === src.length - 1) {
                start -= 2;
              }
    
              let middle = start + 2;
              let end = start + 2;

              return `${acc}, linear-gradient(to right, transparent ${start}px, ${tickColor} ${middle}px, transparent ${end}px)`;
            }, "");
    

            return (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                display: 'flex',
                width: '100%'
              }}
            >
              <div
                style={{
                  height: '30px',
                  width: '100%',
                  background: backgroundSteps
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '6px',
                    width: '100%',
                    marginTop: '12px',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ['#548BF4', '#ccc'],
                      min: MIN,
                      max: MAX
                    }),
                    alignSelf: 'center'
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
          )}}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '42px',
                width: '42px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC'
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: '30px' }}>
          {this.state.values[0].toFixed(1)}
        </output>
      </div>
    );
  }
}

export default StyledSteps;
