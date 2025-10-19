// CODE ATTRIBUTION
// TITLE: Christofels Fine Dining
// AUTHOR: Seiuri Naidoo
// DATE: 18/10/2025
// Based on learning materials from The Independent Institute of Education (IIE)

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { RockStackParamList, CafeItem } from "./type";

const predefinedItems: CafeItem[] = [
  {
    itemName: "Caprese Skewers",
    description: "Fresh mozzarella, cherry tomatoes, and basil leaves drizzled with balsamic glaze.",
    category: "Starter",
    price: 45,
    intensity: "Balanced",
    image: "https://images.pexels.com/photos/33691783/pexels-photo-33691783.jpeg?_gl=1*1ljd7yp*_ga*MTEyMDQxODY0Ni4xNzU4NTUwMTM5*_ga_8JE65Q40S6*czE3NjA4MTI1MTAkbzYkZzEkdDE3NjA4MTI3MzEkajU2JGwwJGgw",
    ingredients:  ["Mozzarella", "Cherry Tomatoes", "Basil", "Balsamic Glaze"],
  },
  {
    itemName: "Spicy Chicken Bites",
    description: "Crispy chicken pieces tossed in a tangy, spicy glaze served with a cooling dip.",
    category: "Starter",
    price: 50,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/appetizing-spicy-chicken-bites-in-skillet-29259132/",
    ingredients: ["Chicken", "Spicy Glaze", "Garlic", "Yogurt Dip"],
  },
  {
    itemName: "Garlic Butter Pita Dippers",
    description: "Warm pita triangles brushed with garlic butter and served with sambals.",
    category: "Starter",
    price: 55,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/bread-with-red-sauce-on-white-paper-6183634/",
    ingredients: ["Pita Bread", "Garlic Butter", "Onions", "Green chillies"],
  },
   {
    itemName: "Grilled Lemon Herb Chicken",
    description: "Tender grilled chicken breast marinated in zesty lemon and aromatic herbs, served with roasted vegetables.",
    category: "Main",
    price: 65,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/a-delicious-roasted-chicken-with-lemon-slices-6896080/",
    ingredients: ["Chicken Breast", "Lemon", "Rosemary", "Olive Oil", "Roasted Vegetables"],
  },
   {
    itemName: "Creamy Chicken Alfredo Pasta",
    description: "Rich and creamy Alfredo sauce tossed with fettuccine and sautéed mushrooms, topped with Parmesan cheese.",
    category: "Main",
    price: 65,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/delicious-creamy-pasta-dish-in-baghdad-restaurant-29935436/",
    ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan", "Garlic"],
  },
   {
    itemName: "Spicy Beef Stir-Fry",
    description: "Sliced beef and colorful vegetables wok-tossed in a spicy soy-ginger sauce, served with jasmine rice.",
    category: "Main",
    price: 70,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/a-black-dish-with-meat-and-vegetables-on-it-27588092/",
    ingredients: ["Beef Strips", "Bell Peppers", "Soy Sauce", "Ginger", "Jasmine Rice"],
  },
   {
    itemName: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.",
    category: "Dessert",
    price: 65,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/fruit-slices-beside-the-chocolate-brownie-14457510/",
    ingredients: ["Dark Chocolate", "Butter", "Flour", "Sugar", "Vanilla Ice Cream"],
  },
   {
    itemName: "Berry Cheesecake Parfait",
    description: "Layers of creamy cheesecake filling, crushed biscuits, and mixed berries in a chilled glass.",
    category: "Dessert",
    price: 70,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/white-ice-cream-with-red-and-black-berries-on-top-5150206/",
    ingredients: ["Cream Cheese", "Biscuits", "Strawberries", "Blueberries", "Whipped Cream"],
  },
   {
    itemName: "Caramel Apple Tart slice",
    description: "Buttery pastry filled with spiced caramel apples and topped with a light dusting of cinnamon sugar.",
    category: "Dessert",
    price: 80,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/close-up-of-cake-15082307/",
    ingredients: ["Apples", "Caramel Sauce", "Pastry Dough", "Cinnamon", "Sugar"],
  },
   {
    itemName: "Iced Matcha Latte",
    description: "Smooth matcha green tea blended with milk and served over ice for a refreshing boost.",
    category: "Beverage",
    price: 40,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/iced-matcha-latte-on-vibrant-terrazzo-table-32300845/",
    ingredients: ["Matcha Powder", "Milk", "Ice", "Vanilla Syrup"],
  },
  {
    itemName: "Tropical Sunrise Smoothie",
    description: "A fruity blend of mango, pineapple, and orange juice with a hint of coconut.",
    category: "Beverage",
    price: 45,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/mason-jar-with-shake-and-straw-775030/",
    ingredients: ["Mango", "Pineapple", "Orange Juice", "Coconut Milk"],
  },
  {
    itemName: "Classic Mocha",
    description: "A rich espresso drink mixed with chocolate syrup and steamed milk, topped with whipped cream.",
    category: "Beverage",
    price: 45,
    intensity: "Balanced",
    image: "https://www.pexels.com/photo/cappuccino-in-white-ceramic-cup-on-white-ceramic-saucer-2396220/",
    ingredients: ["Espresso", "Milk", "Chocolate Syrup", "Whipped Cream"],
  },
];
function ManageMenuScreen(props: NativeStackScreenProps<RockStackParamList, "ManageScreen">) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("Beverage");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = () => {
    if (itemName && description && category && price) {
      const priceValue = parseFloat(price);
      if (priceValue > 0) {
        const intensity = priceValue < 45 ? "Mild" : priceValue < 65 ? "Balanced" : "Strong";
        const newItem: CafeItem = {
          itemName,
          description,
          category,
          price: priceValue,
          intensity,
          image,
          ingredients: ingredients.split(",").map((i) => i.trim()),
        };
        props.route.params.setItems([...props.route.params.items, newItem]);
        props.navigation.goBack();
      } else {
        Alert.alert("Invalid Price", "Price must be greater than 0");
      }
    } else {
      Alert.alert("Missing Fields", "Please fill out all details before saving.");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.formHeader}>Add a New Café Item</Text>

          <TextInput style={styles.input} placeholder="Item Name" value={itemName} onChangeText={setItemName} />
          <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />

          {/* ✅ Perfectly aligned picker */}
          <View style={styles.pickerWrapper}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={category}
                onValueChange={(value) => setCategory(value)}
                mode="dropdown"
                dropdownIconColor="#4b2b2b"
                style={styles.pickerStyle}
                itemStyle={{ height: 50 }}
              >
                <Picker.Item label="Select a Category" value="" color="#bfa888" />
                <Picker.Item label="Beverage" value="Beverage" />
                <Picker.Item label="Pastry" value="Pastry" />
                <Picker.Item label="Dessert" value="Dessert" />
              </Picker>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Price (e.g. 50)"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            value={ingredients}
            onChangeText={setIngredients}
          />
          <TextInput style={styles.input} placeholder="Image URL" value={image} onChangeText={setImage} />

          {image ? <Image source={{ uri: image }} style={styles.imagePreview} /> : null}

          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.saveButtonText}>Save Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={() => props.navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function HomeScreen(props: NativeStackScreenProps<RockStackParamList, "HomeScreen">) {
  const [items, setItems] = useState<CafeItem[]>(predefinedItems);

  const removeItem = (index: number) => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => setItems(items.filter((_, i) => i !== index)) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Christofells Fine Dining</Text>
      <Text style={styles.subtitle}>Where Every Bite is an Experience.</Text>

      <FlatList
        data={items}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image || "" }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.itemName}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
              <Text style={styles.cardMeta}>
                {item.category} • R{item.price} • {item.intensity}
              </Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => props.navigation.navigate("ManageScreen", { items, setItems })}
      >
        <Text style={styles.addText}>+ Add New Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <Image
        source={{ uri: "https://www.pexels.com/photo/a-table-setting-in-a-candle-lit-room-6715103/" }}
        style={styles.heroImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.welcomeTitle}>Welcome to Christofells Fine Dining</Text>
        <Text style={styles.welcomeText}>A taste of luxury — from our table to yours.</Text>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.startText}>View Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator<RockStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ManageScreen"
          component={ManageMenuScreen}
          options={{
            title: "Add Menu Item",
            headerStyle: { backgroundColor: "#3b2e2a" },
            headerTintColor: "#f5f0e6",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  // 🏛️ Welcome Screen
  welcomeContainer: { flex: 1, backgroundColor: "#1c1b1a" },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  welcomeTitle: {
    color: "#f5f0e6",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeText: {
    color: "#d5c8b8",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: "#b2946b",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  startText: { color: "#1c1b1a", fontWeight: "bold", fontSize: 18 },

  // 🍽️ Main Screen
  container: { flex: 1, backgroundColor: "#f9f6f1", padding: 15 },
  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#3b2e2a",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#7a6a58",
    marginBottom: 15,
    fontSize: 15,
  },

  // 🥂 Cards
  card: {
    backgroundColor: "#fffdf8",
    borderRadius: 18,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: { width: "100%", height: 220 },
  cardContent: { padding: 15 },
  cardTitle: { fontSize: 20, fontWeight: "700", color: "#3b2e2a" },
  cardDesc: { color: "#5a4d42", fontSize: 14, marginVertical: 5 },
  cardMeta: { color: "#8f816f", fontSize: 13 },

  removeButton: {
    backgroundColor: "#8b1e1e",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  removeText: { color: "#fff", fontWeight: "bold" },

  addButton: {
    backgroundColor: "#3b2e2a",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    elevation: 4,
  },
  addText: { color: "#f5f0e6", fontSize: 18, fontWeight: "bold" },

  // 🪶 Form Section
  formContainer: { backgroundColor: "#f4f1ea", padding: 20 },
  formHeader: {
    fontSize: 24,
    color: "#3b2e2a",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#bfa888",
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
    justifyContent: "center",
    marginVertical: 8,
  },

  // 🍷 Picker
  pickerWrapper: { marginVertical: 10 },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3b2e2a",
    marginBottom: 6,
    marginLeft: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#bfa888",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
  },
  pickerStyle: {
    height: 50,
    width: "100%",
    color: "#3b2e2a",
    fontSize: 15,
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? -6 : -2,
  },

  // 📸 Image
  imagePreview: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  // 💾 Buttons
  saveButton: {
    backgroundColor: "#3b2e2a",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  saveButtonText: { color: "#f5f0e6", fontWeight: "bold", fontSize: 16 },
  cancelButton: { alignItems: "center", marginTop: 10 },
  cancelButtonText: { color: "#7a6a58", fontWeight: "bold" },
});