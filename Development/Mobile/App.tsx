import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


type ValueProps = {
  label: string;
  value: string;
}

const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.values}>


        <Value label="Passos" value="1204" />
        <Value label="Distância" value="0,75 km" />



      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3d9fdff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {},
  value: {
    fontSize: 35,
    
    fontWeight: "500"
  },
  values:
  {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap"
  }
});
