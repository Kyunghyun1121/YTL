/**
 * ControlBtn
 * 예시에서는 생략되어있다. .control-btn에 해당한다.
 */
 function ControlBtn({
    controlOn = false,
    ...restProps
  }) {
    let style = {
      margin: 0,
      color: '#555',
      padding: '2px 6px',
      background: '#fff',
      border: 'solid 1px #333',
      cursor: 'pointer',
      borderRadius: '5px',
      outline: '0 none',
      boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
      fontSize: '14px',
      margin: '0 5px 5px 0',
    }
  
    if (controlOn) {
      style = {
        ...style,
        background: '#2780E3',
        color: '#FFF',
      }
    }
  
    return <button style={style} {...restProps} />
  }
  
  /**
   * Buttons
   * 예시에서는 생략되어있다. .buttons 에 해당한다.
   */
  function Buttons(props) {
    return (
      <div 
        style={{ 
          zIndex: 1000, 
          position: 'absolute', 
          display: 'inline-block',
        }}
        {...props} 
      />
    )
  }

