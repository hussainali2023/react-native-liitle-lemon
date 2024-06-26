import React from 'react';
import { SectionList, Text, View } from 'react-native';


const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

  const Item = ({name}) => (
    <View style={{backgroundColor:"pink", marginVertical:10, paddingVertical:10, marginLeft:10, marginRight:10, borderRadius:20, paddingHorizontal:20, flex:1, flexDirection:"row", justifyContent:"space-between"}}>
    <Text style={{fontSize:20, color:"green", fontWeight:900,}}>{name.name}</Text>
    <Text style={{fontSize:20, color:"red", fontWeight:900,}}>{name.price}</Text>
    </View>
  )

  const HeaderEachItem = ({title}) => (
    <View style={{backgroundColor:"yellow"}}>
      <Text style={{textAlign:"center", fontSize:40, fontWeight:"bold", color:"blue"}}>{title}</Text>
    </View>
  )


const PracticeSectionList = () => {

    const renderItem = ({item}) => <Item name={item}/>
    const renderItemHeader = ({section: {title}}) => <HeaderEachItem title={title}/>
    return (
       <View>
<SectionList 
sections={menuItemsToDisplay}
renderItem={renderItem}
renderSectionHeader={renderItemHeader}
/>
       </View>
    );
};

export default PracticeSectionList;