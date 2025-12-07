import { createDrawerNavigator } from '@react-navigation/drawer';
import { createContext, useState } from 'react';
import InputScreen from './screens/InputScreen';
import ReadScreen from './screens/ReadScreen';

export const AlbumContext = createContext()

const Drawer = createDrawerNavigator()

export default function Index() {
  const [album, setAlbum] = useState(null)

  return (
    <AlbumContext.Provider value={{ album, setAlbum }}>
      <Drawer.Navigator>
        <Drawer.Screen name='Input' component={InputScreen} />
        <Drawer.Screen name='Read' component={ReadScreen} />
      </Drawer.Navigator>
    </AlbumContext.Provider>
  );
}
