import React from 'react';

import styles from './SearchComponent.module.css';

class SearchComponent extends React.Component {
    state = {
        username: '',
        password: '',
    }

    render() {
        return (
            <div className={styles.container}>
                <input 
                    placeholder="Type your username here"
                    value={this.state.username}
                    name='username'
                    onChange={(e) => this.setState({ username: e.target.value })}
                />
                <input
                    placeholder='type your password here'
                    value={this.state.password}
                    name='password'
                    onChange={(e) => this.setState({ password: e.target.value })}
                />
            </div>
        );
    }
}

export default SearchComponent;