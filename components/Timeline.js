import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class Timeline extends Component {
  render () {
    const { orientation = 'left', children, lineColor, lineStyle, style, direction, ...otherProps } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { orientation, direction }))
    let leftOrRight = (orientation === 'right') ? { ...s['containerBefore--right'] } : { ...s['containerBefore--left'] }

    let lineAppearance = { ...leftOrRight, ...lineStyle }

    lineAppearance = lineColor ? { ...lineAppearance, background: lineColor } : lineAppearance

    let TEMPstyle = {
      ...style,
      display: 'flex'
    }
    let containerAfter = {
      ...s.containerAfter
    }
    let containerBefore = {
      ...s.containerBefore, ...lineAppearance
    }

    if (direction === 'horizontal') {
      containerBefore = { ...containerBefore, ...s['containerBefore--horizontal'] }
      containerAfter = { ...containerAfter, ...s['containerAfter--horizontal'] }
    } else {
      containerBefore = { ...containerBefore, ...s['containerBefore--vertical'] }
      containerAfter = { ...containerAfter, ...s['containerAfter--vertical'] }
    }

    return (
      <div>
        <section style={{ ...s.container, ...TEMPstyle }} {...otherProps}>
          <div id='Ff' style={containerBefore} />
          {childrenWithProps}
          <div style={containerAfter} />
        </section >
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
  style: PropTypes.object,
  lineColor: PropTypes.string,
  lineStyle: PropTypes.object
}

Timeline.defaultProps = {
  style: {},
  lineStyle: {}
}

export default Timeline
