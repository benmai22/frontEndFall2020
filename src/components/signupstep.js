import React from 'react';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  Icon,
} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {TouchableWithoutFeedback} from 'react-native';

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

class SignUpStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userNameValue: '',
    };
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout}>
          <React.Fragment>
            <View style={styles.row}>
              <Text style={styles.text} category="h2">
                Great!
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text} category="h5">
                Now let's set up your account details
              </Text>
            </View>
            <View style={styles.username}>
              <Input label="Full name" placeholder="Name" />
            </View>
            <View style={styles.username}>
              <Input label="Email" placeholder="Email" />
            </View>
            <View style={styles.username}>
              <Input label="User Name" placeholder="User Name" />
            </View>
            <View style={styles.username}>
              <Input label="Password" placeholder="Password" />
            </View>
            <Layout style={styles.buttonLogin} level="3">
              <Button
                onPress={() => this.props.navigation.navigate('home')}
                status="success">
                Finish sign up
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
  text: {
    marginRight: 10,
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

export default SignUpStep;
