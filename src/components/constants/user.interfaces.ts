export interface Entry {
  id: number;
  title: string;
  description: string;
  category: string;
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