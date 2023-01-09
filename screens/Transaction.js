import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
import { TextInput } from "react-native-gesture-handler";

export default class TransactionScreen extends Component {
  constructor(props){
    super(props);
    this.state= {
      boodId:"",
      studentId:"",
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      //scannedData: "",
    }
  }

  getCameraPermissions = async domState => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
  
    this.setState({
      /*status === "granted" é verdadeiro se o usuário concedeu permissão
          status === "granted" é falso se o usuário não concedeu permissão
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false
    });
  };
 
 handleBarCodeScanned = async ({ type, data }) => {
    if (domState === "bookId"){
  this.setState({
      bookId: data,
      domState: "normal",
      scanned: true
    });
  } else if (domState === "studentId")
  this.setState({
    studentId: data,
    domState: "normal",
    scanned: true
  })
};
 
  

  render() {
    const { bookId, studentId, domState, hasCameraPermissions, scannedData, scanned } = this.state;
 if (domState === "scanner") {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
        </View>

        <View style={styles.lowerContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
              style={styles.textInput}
              placeholder={"Id Livro"}
              placeholderTextColor={"#FFFFFF"}
              value={bookId}
              />
              <TouchableOpacity style={styles.scanButton}
              onPress={() => this.getCameraPermissions("bookID")}>

              </TouchableOpacity>
            </View>
            <View style={[styles.textInputContainer, { marginTop: 25 }]}>
              <TextInput
              style={styles.textInput}
              placeholder={"Id Aluno"}
              placeholderTextColor={"#FFFFFF"}
              value={studentId}
            />
            <TouchableOpacity style={styles.scanButton}
            onPress={() => this.getCameraPermissions("studentId")}
              >
              <Text style={styles.scanButtonText}>Scan</Text>
             </TouchableOpacity>
</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4",
  },
  text: {
    color: "#ffff",
    fontSize: 30,
  },

  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF"
  },

  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textInputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  textInput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    color: "#FFFFFF"
  },
  scanButton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanButtonText: {
    fontSize: 24,
    color: "#0A0101",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80
  },
  appName: {
    width: 180,
    resizeMode: "contain"
  },

});
