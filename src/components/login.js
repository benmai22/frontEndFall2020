import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout}>
          <React.Fragment>
            <View style={styles.row}>
              <Text style={styles.text} category="h2">
                LOGIN
              </Text>
            </View>
            <View style={styles.username}>
              <Input label="User Name" placeholder="Your Username" />
            </View>
            <View style={styles.password}>
              <Input
                label="Password"
                placeholder="Password"
                caption="Should contain at least 8 symbols"
              />
            </View>
            <Layout style={styles.forgotText} level="3">
              <Text>Forgot username and password?</Text>
            </Layout>
            <Layout style={styles.buttonLogin} level="3">
              <Button
                onPress={() => this.props.navigation.navigate('home')}
                status="success">
                Enter
              </Button>
            </Layout>
          </React.Fragment>
        </Layout>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    margin: 2,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  password: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  forgotText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Login;
