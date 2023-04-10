import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export const MainPage = () => {
  return (
    <View>
      <Text>MainPage</Text>
      <Link to="/second">
        <Text>Go to second page</Text>
      </Link>
    </View>
  )
}
