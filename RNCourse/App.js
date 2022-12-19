import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enterdGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enterdGoalText, id: Math.random().toString() }])
  }

  return (
    <View style={styles.addContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>
        }} keyExtractor={(item, index) => {
          return item.id
        }} alwaysBounceHorizontal={false} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  
  goalsContainer: {
    flex: 5
  }
  
});
