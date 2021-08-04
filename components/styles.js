let style = {
  // rgb(160, 178, 184);
  container: {
    position: 'relative',
    fontSize: '80%',
    fontWeight: 300,
    padding: '10px 0',
    margin: '0 auto'
  },
  containerBefore: {
    content: '',
    position: 'absolute',
    background: '#a0b2b8'
  },
  'containerBefore--vertical': {
    width: 3,
    height: '100%',
    top: 0
  },

  'containerBefore--horizontal': {
    height: 3,
    width: '100%',
    top: '100%'
  },

  'containerBefore--left': {
    // left: '16px'
  },
  'containerBefore--right': {
    right: '14px'
  },

  containerAfter: {
    content: '',
    display: 'table',
    clear: 'both'
  },

  'containerAfter--vertical': {},
  'containerAfter--horizontal': {},
  event: {
    position: 'relative',
    margin: '5px 0'
  },
  'event--left': {
    paddingLeft: 45,
    textAlign: 'left'
  },
  'event--right': {
    paddingRight: 45,
    textAlign: 'right'
  },

  'event--bottom': {
    paddingTop: 30,
    textAlign: 'right'
  },
  'event--top': {
    paddingBottom: 45,
    textAlign: 'center'
  },

  eventAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  eventType: {
    position: 'absolute',
    top: 0,
    borderRadius: '50%',
    width: 35,
    height: 35,
    marginLeft: 1,
    background: '#e9f0f5',
    border: '3px solid #6fba1c',
    display: 'flex'
  },

  'eventType--stretched': {
    borderRadius: '17px',
    fontSize: '24px',
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'center'
  },

  'eventType--left': {
    left: 0
  },
  'eventType--right': {
    right: 0
  },
  materialIcons: {
    display: 'flex',
    width: 32,
    height: 32,
    position: 'relative',
    justifyContent: 'center',
    cursor: 'pointer',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  eventContainer: {
    position: 'relative'
  },
  eventContainerBefore: {
    top: 24,
    left: '100%',
    borderColor: 'transparent',
    borderLeftColor: '#ffffff'
  },
  time: {
    marginBottom: 3
  },
  subtitle: {
    marginTop: 2,
    fontSize: '85%',
    color: '#777'
  },
  message: {
    width: '98%',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginTop: '1em',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: '0.5em 1em'
  },
  messageAfter: {
    clear: 'both',
    content: '',
    display: 'table'
  },
  actionButtons: {
    marginTop: -20
  },
  'actionButtons--left': {
    float: 'left',
    textAlign: 'left'
  },
  'actionButtons--right': {
    float: 'right',
    textAlign: 'right'
  },
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  cardTitle: {
    backgroundColor: '#7BB1EA',
    padding: 10,
    color: '#fff'
  },
  cardBody: {
    backgroundColor: '#ffffff',
    marginBottom: '1em',
    lineHeight: 1.6,
    padding: 10,
    minHeight: 40
  },
  blipStyle: {
    position: 'absolute',
    top: '50%',
    marginTop: '9px',
    left: '-5px'
  },
  toggleEnabled: {
    cursor: 'pointer'
  },
  blipLabelContainer: {
    textAlign: 'center',
    width: '50px'
    // backgroundColor: "red"
  }
}

export default style
