import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';

import { Icon } from "react-native-elements";
import {colors} from "../global/styles";

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="RootClientTabs" 
                component={RootClientTabs} 
                options = {{
                    title: 'Cliente',
                    drawerIcon: ({ focussed, size }) => (
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focussed ? colors.turquoise : colors.grey4} 
                            size={size} 
                        />
                    ),

                }}
            />
        </Drawer.Navigator>
    );
}