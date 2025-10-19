export type CafeItem = {
    itemName: string;
    description: string;
    category: string | null;
    price: number;
    intensity: string;
    image: string | null;
    ingredients: string[];
};

export type RockStackParamList = {
    WelcomeScreen: undefined;
    HomeScreen: undefined;
    ManageScreen: {
        items: CafeItem[];
        setItems: React.Dispatch<React.SetStateAction<CafeItem[]>>;
    };
};