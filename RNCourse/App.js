import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enterdGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enterdGoalText, id: Math.random().toString() }])
    setModalIsVisible(false)
  }

  function deleteGoalHnadler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
  }

  return (
    <View style={styles.addContainer}>
      <Button title='Add New Goal' color={'#5e0acc'} onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHnadler}/>
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
