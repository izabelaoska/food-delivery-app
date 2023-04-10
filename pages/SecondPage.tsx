import React from 'react'
import { View, Text } from 'react-native'
import { Link, useNavigate } from 'react-router-native'

export const SecondPage = () => {
  const navigate = useNavigate()
  return (
    <View>
      <Text>SecondPage</Text>
      <Text onPress={() => navigate('/')}>Go to main page</Text>
    </View>
  )
}
