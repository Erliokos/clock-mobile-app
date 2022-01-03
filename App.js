import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput,ScrollView } from "react-native";
import Clock from "./src/public/components/Clock";
import InputT from "./src/public/components/InputT";


export default function App() {
  const [second, setSecond] = useState(
    new Date().toLocaleString([], { second: "2-digit" })
  );
  const [minute, setMinute] = useState(
    new Date().toLocaleString([], { minute: "2-digit" })
  );
  const [hour, setHour] = useState(
    new Date().toLocaleString([], { hour: "2-digit" })
  );

  useEffect(() => {
    let timer = setTimeout(() => {
      setSecond(new Date().toLocaleString([], { second: "2-digit" }));
      setMinute(new Date().toLocaleString([], { minute: "2-digit" }));
      setHour(new Date().toLocaleString([], { hour: "2-digit" }));
    }, 1000);

    return () => clearInterval(timer);
  }, [second]);

  return (
    

    <View style={styles.container}>
      
      <View style={styles.greeting}>
        <Text style={{color: 'white'}}>ПРИВЕТСТВИЕ</Text>
        <InputT/>
      </View>


      <View style={styles.boxic}>
        <ScrollView style={styles.scroll}>
        <Text style={{textAlign: 'center', color: 'white'}}>Часы отрисованны из SVG</Text>
        <View style={styles.clock}><Clock second={second} minute={minute} hour={hour} /></View>
        </ScrollView>
      </View>
      

      <View style={styles.box}>
        <Text style={styles.text}>{hour} </Text>
        <Text style={styles.text}>{minute}</Text>
        <Text style={styles.text}>{second}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(30,30,30)",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  box: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "25%",
  },
  boxic: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
  },
  greeting:{
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "25%",
  },
  scroll:{
    width: "100%",
    backgroundColor: "rgb(30,30,30)",
    
    
  },
  clock:{
    width: "100%",
    backgroundColor: "rgb(40,40,40)",
    height: 400
  }

});
