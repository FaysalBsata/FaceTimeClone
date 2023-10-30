import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
type AuthData = {
  session: Session | null;
  loading: boolean;
};
const AuthContext = createContext<AuthData>({ session: null, loading: false });
export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      setSession(session);
      setLoading(false);
    };
    fetchSession();
  }, []);
  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
