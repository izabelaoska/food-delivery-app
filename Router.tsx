import { NativeRouter, Routes, Route } from 'react-router-native'
import { MainPage } from './pages/MainPage'
import { SecondPage } from './pages/SecondPage'

export const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </NativeRouter>
  )
}
