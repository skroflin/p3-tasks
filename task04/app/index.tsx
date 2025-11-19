import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { useState } from "react";
import TabNavigator from "./navigation/TabNavigator";

export default function Index() {
  const [userData, setUserData] = useState({ name: '', age: '' })

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <TabNavigator userData={userData} setUserData={setUserData} />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
