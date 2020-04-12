import React, { useState } from 'react';

import styles from './SearchComponent.module.css';

const SearchComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <input placeholder="Type your username here" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Type your username here" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
};

export default SearchComponent;

// class SearchComponent extends React.Component {
//     state = {
//       username: '',
//       password: '',
//     }

//     render() {
//       const { username, password } = this.state;

//       return (
//         <div className={styles.container}>
//           <input
//             placeholder="Type your username here"
//             value={username}
//             onChange={(e) => this.setState({ username: e.target.value })}
//           />
//           <input
//             placeholder="type your password here"
//             value={password}
//             onChange={(e) => this.setState({ password: e.target.value })}
//           />
//         </div>
//       );
//     }
// }
