export interface Entry {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}