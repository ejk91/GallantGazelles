import React, { Component } from 'react';
import { Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logOut } from '../actions/user';
import { connect } from 'react-redux';

class LoggedInNav extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid padded stackable>
        <Grid.Column width={3} verticalAlign='middle'>
          <Header as="h1" textAlign='center'>
            <Link to="/"><img src="../logo.jpg" alt="PitchMe.io" height="50" width="100" /><p>PitchMe.io</p></Link>
          </Header>
        </Grid.Column>

        <Grid.Column width={13}>
          <Menu secondary compact floated='right'>
            <Menu.Menu position='right'>
              <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='how it works' as={Link} to='/howitworks' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
              <Menu.Item name='start a pitch' as={Link} to='/createpitch' active={activeItem === 'start a pitch'} onClick={this.handleItemClick} />
              <Menu.Item name='user' as={Link} to='/user' active={activeItem === 'user'} onClick={this.handleItemClick}>
                <Icon name='user circle outline' color='blue' size='large' /> {this.props.username}
              </Menu.Item>
              <Menu.Item name='sign out' active={activeItem === 'sign out'} onClick={()=>this.props.userLogOut()}/>
              <Menu.Item>
                <Input icon='search' placeholder='Search' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogOut: () => { dispatch(logOut()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNav);