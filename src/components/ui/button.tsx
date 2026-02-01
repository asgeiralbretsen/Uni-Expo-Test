import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    label?: string,
    onPress?: () => void;
}

export function Button (props: ButtonProps) {
    const { label, onPress } = props; 

    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}