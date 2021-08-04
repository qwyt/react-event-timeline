import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineBlip extends Component {
  // mergeNotificationStyle(iconColor) {
  //   return iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } } : s.eventType
  // }

  mergeNotificationStyle(iconColor, bubbleStyle, orientation) {
    let stretched = {}
    // Make stretched TODO improve
    if (bubbleStyle['width'] !== undefined) {
      stretched = s['eventType--stretched']
    }

    const iconColorStyle = iconColor
      ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } }
      : s.eventType
    const leftOrRight =
            orientation === 'right'
              ? { ...s['eventType--right'] }
              : { ...s['eventType--left'] }
    return { ...iconColorStyle, ...leftOrRight, ...bubbleStyle, ...stretched }
  }

  // TODO use class
  iconStyle(iconStyle, stretched) {
    if (stretched) {
      return { ...s.materialIcons, ...iconStyle, color: 'black' }
    }
    return { ...s.materialIcons, ...iconStyle }
  }

  render() {
    const {
      title,
      iconStyle,
      icon,
      content,
      orientation,
      iconColor,
      style,
      bubbleStyle,
      direction,
      ...otherProps
    } = this.props
    let marginStyle = {}
    if (direction === 'horizontal') {
      marginStyle['marginLeft'] = 100 // TODO make flexible
    } else {
      marginStyle['marginBottom'] = 50
    }
    let labelPosition

    if (direction === 'horizontal') {
      labelPosition = { ...s['event--bottom'] }
    } else {
      labelPosition = (orientation === 'right') ? { ...s['event--right'] } : { ...s['event--left'] }
    }

    return (
      <div style={{ ...s.event, ...marginStyle, ...style }}>
        <div style={this.mergeNotificationStyle(iconColor, bubbleStyle, orientation)}>
          {/* //TODO use classes or something? */}
          <span style={this.iconStyle(iconStyle, bubbleStyle['width'] !== undefined)}>{icon}</span>
        </div>
        <div {...otherProps} style={{ ...s.blipStyle, ...labelPosition }}>
          <div style={s.blipLabelContainer}>{title}</div>
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}

TimelineBlip.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  style: PropTypes.object,
  orientation: PropTypes.string
}

TimelineBlip.defaultProps = {
  iconStyle: {},
  style: {},
  bubbleStyle: {}
}

export default TimelineBlip
