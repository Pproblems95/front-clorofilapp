import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export const UserIcon = (props) => {
    return(<FontAwesome name="user" size={24} color="black" {...props} />)
}

export const PlustIcon = (props) => {
    return(<AntDesign name="pluscircleo" size={24} color="black" {...props}/>)
}

export const MenuIcon = (props) => {
    return(<Entypo name="menu" size={24} color="black" {...props}/>)
}