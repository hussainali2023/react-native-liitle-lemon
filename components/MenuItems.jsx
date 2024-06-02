import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
    { id: 4, name: 'User 4', email: 'user4@example.com' },
    { id: 5, name: 'User 5', email: 'user5@example.com' },
    { id: 6, name: 'User 6', email: 'user6@example.com' },
    { id: 7, name: 'User 7', email: 'user7@example.com' },
    { id: 8, name: 'User 8', email: 'user8@example.com' },
    { id: 9, name: 'User 9', email: 'user9@example.com' },
    { id: 10, name: 'User 10', email: 'user10@example.com' },
    { id: 11, name: 'User 11', email: 'user11@example.com' },
    { id: 12, name: 'User 12', email: 'user12@example.com' },
    { id: 13, name: 'User 13', email: 'user13@example.com' },
    { id: 14, name: 'User 14', email: 'user14@example.com' },
    { id: 15, name: 'User 15', email: 'user15@example.com' },
    { id: 16, name: 'User 16', email: 'user16@example.com' },
    { id: 17, name: 'User 17', email: 'user17@example.com' },
    { id: 18, name: 'User 18', email: 'user18@example.com' },
    { id: 19, name: 'User 19', email: 'user19@example.com' },
    { id: 20, name: 'User 20', email: 'user20@example.com' },
    { id: 21, name: 'User 21', email: 'user21@example.com' },
    { id: 22, name: 'User 22', email: 'user22@example.com' },
    { id: 23, name: 'User 23', email: 'user23@example.com' },
    { id: 24, name: 'User 24', email: 'user24@example.com' },
    { id: 25, name: 'User 25', email: 'user25@example.com' },
    { id: 26, name: 'User 26', email: 'user26@example.com' },
    { id: 27, name: 'User 27', email: 'user27@example.com' },
    { id: 28, name: 'User 28', email: 'user28@example.com' },
    { id: 29, name: 'User 29', email: 'user29@example.com' },
    { id: 30, name: 'User 30', email: 'user30@example.com' },
    { id: 31, name: 'User 31', email: 'user31@example.com' },
    { id: 32, name: 'User 32', email: 'user32@example.com' },
    { id: 33, name: 'User 33', email: 'user33@example.com' },
    { id: 34, name: 'User 34', email: 'user34@example.com' },
    { id: 35, name: 'User 35', email: 'user35@example.com' },
    { id: 36, name: 'User 36', email: 'user36@example.com' },
    { id: 37, name: 'User 37', email: 'user37@example.com' },
    { id: 38, name: 'User 38', email: 'user38@example.com' },
    { id: 39, name: 'User 39', email: 'user39@example.com' },
    { id: 40, name: 'User 40', email: 'user40@example.com' },
    { id: 41, name: 'User 41', email: 'user41@example.com' },
    { id: 42, name: 'User 42', email: 'user42@example.com' },
    { id: 43, name: 'User 43', email: 'user43@example.com' },
    { id: 44, name: 'User 44', email: 'user44@example.com' },
    { id: 45, name: 'User 45', email: 'user45@example.com' },
    { id: 46, name: 'User 46', email: 'user46@example.com' },
    { id: 47, name: 'User 47', email: 'user47@example.com' },
    { id: 48, name: 'User 48', email: 'user48@example.com' },
    { id: 49, name: 'User 49', email: 'user49@example.com' },
    { id: 50, name: 'User 50', email: 'user50@example.com' },
    { id: 51, name: 'User 51', email: 'user51@example.com' },
    { id: 52, name: 'User 52', email: 'user52@example.com' },
    { id: 53, name: 'User 53', email: 'user53@example.com' },
    { id: 54, name: 'User 54', email: 'user54@example.com' },
    { id: 55, name: 'User 55', email: 'user55@example.com' },
    { id: 56, name: 'User 56', email: 'user56@example.com' },
    { id: 57, name: 'User 57', email: 'user57@example.com' },
    { id: 58, name: 'User 58', email: 'user58@example.com' },
    { id: 59, name: 'User 59', email: 'user59@example.com' },
    { id: 60, name: 'User 60', email: 'user60@example.com' },
    { id: 61, name: 'User 61', email: 'user61@example.com' },
    { id: 62, name: 'User 62', email: 'user62@example.com' },
    { id: 63, name: 'User 63', email: 'user63@example.com' },
    { id: 64, name: 'User 64', email: 'user64@example.com' },
    { id: 65, name: 'User 65', email: 'user65@example.com' },
    { id: 66, name: 'User 66', email: 'user66@example.com' },
    { id: 67, name: 'User 67', email: 'user67@example.com' },
    { id: 68, name: 'User 68', email: 'user68@example.com' },
    { id: 69, name: 'User 69', email: 'user69@example.com' },
    { id: 70, name: 'User 70', email: 'user70@example.com' },
    { id: 71, name: 'User 71', email: 'user71@example.com' },
    { id: 72, name: 'User 72', email: 'user72@example.com' },
    { id: 73, name: 'User 73', email: 'user73@example.com' },
    { id: 74, name: 'User 74', email: 'user74@example.com' },
    { id: 75, name: 'User 75', email: 'user75@example.com' },
    { id: 76, name: 'User 76', email: 'user76@example.com' },
    { id: 77, name: 'User 77', email: 'user77@example.com' },
    { id: 78, name: 'User 78', email: 'user78@example.com' },
    { id: 79, name: 'User 79', email: 'user79@example.com' },
    { id: 80, name: 'User 80', email: 'user80@example.com' },
    { id: 81, name: 'User 81', email: 'user81@example.com' },
    { id: 82, name: 'User 82', email: 'user82@example.com' },
    { id: 83, name: 'User 83', email: 'user83@example.com' },
    { id: 84, name: 'User 84', email: 'user84@example.com' },
    { id: 85, name: 'User 85', email: 'user85@example.com' },
    { id: 86, name: 'User 86', email: 'user86@example.com' },
    { id: 87, name: 'User 87', email: 'user87@example.com' },
    { id: 88, name: 'User 88', email: 'user88@example.com' },
    { id: 89, name: 'User 89', email: 'user89@example.com' },
    { id: 90, name: 'User 90', email: 'user90@example.com' },
    { id: 91, name: 'User 91', email: 'user91@example.com' },
    { id: 92, name: 'User 92', email: 'user92@example.com' },
    { id: 93, name: 'User 93', email: 'user93@example.com' },
    { id: 94, name: 'User 94', email: 'user94@example.com' },
    { id: 95, name: 'User 95', email: 'user95@example.com' },
    { id: 96, name: 'User 96', email: 'user96@example.com' },
    { id: 97, name: 'User 97', email: 'user97@example.com' },
    { id: 98, name: 'User 98', email: 'user98@example.com' },
    { id: 99, name: 'User 99', email: 'user99@example.com' },
    { id: 100, name: 'User 100', email: 'user100@example.com' }
  ];
  
  

const User = ({ name }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.userText}>{name}</Text>
    </View>
);

const MenuItems = () => {
    const renderUser = ({ item }) => <User name={item.name} />;

    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.headerText}>Menu Items</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUser}
            />
        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        
        padding: 20,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 30,
        textAlign: "center",
        marginVertical: 20,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: "black",
        marginVertical: 10,
        borderRadius: 10,
    },
    userText: {
        color: "#F4CE14",
        fontSize: 24,
    }
});
