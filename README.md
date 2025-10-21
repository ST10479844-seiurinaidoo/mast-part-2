# Christofells Fine Dining
## Where Every Bite is an Experience!

A modern, elegant mobile application built with React Native that showcases a fine dining café menu.
The app allows users to view, add, and manage menu items, complete with descriptions, categories, images, and ingredients - creating a digital restaurant experience that blends sophistication with usability.

## Features:
## Welcome Screen:
Elegant introduction to the restaurant brand with a full-screen hero image and overlay.
“View Menu” button seamlessly navigates to the main menu screen.

## Homescreen (main menu screen):
Displays all menu items (Starters, Mains, Desserts, Beverages).

Each item includes:
1. Image
2. Description
3. Category
4. Price
5. Flavor intensity

Users can remove individual items.
Includes an “Add New Item” button that navigates to the management screen.

## Manage Menu Screen:
Allows users to add new café items dynamically.

Fields include:
1. Item Name
2. Description
3. Category (Picker component with dropdown)
4. Price
5. Ingredients (comma-separated list)
6. Image URL (with preview)

Intelligent validation ensures no empty fields or invalid prices.

Automatically assigns Intensity based on price ranges:
1. <R45 = Mild
2. R45 to R64 = Balanced
3. R64+ = Strong

Automatically assigns Intensity based on price ranges:

## Technical Overview:
1. Framework: React Native
2. Language: TypeScript
3. Navigation: @react-navigation/native & @react-navigation/native-stack
4. UI Components: react-native, @react-native-picker/picker
5. Code Editor Used: Visual Studio Code

## App Screenshots:



## UI & Styling:

## Color Palette:
1. Deep brown tones (#3b2e2a, #4b2b2b) — for luxury and warmth.
2. Cream and beige (#f5f0e6, #d5c8b8) — for elegance and comfort.
3. Gold accent (#b2946b) — to symbolize fine dining sophistication.

## Typography: 
1. Clean sans-serif fonts emphasizing clarity and readability.
2. Hierarchical font sizes for titles, descriptions, and metadata.

## Layout Design:
1. Fully responsive using SafeAreaView, ScrollView, and KeyboardAvoidingView.
2. Consistent spacing, rounded corners, and elevation for depth.

## Developer Information:
1. Author: Seiuri Naidoo
2. Institution: Varsity College
3. Qualification: Higher Certificate in Mobile Application & Web Development
4. Year: 2025
5. Developed Using: Visual Studio Code

“A digital fine dining experience — crafted with code, creativity, and class.”

