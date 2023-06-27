import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext({
  signIn: () => {},
  signOut: () => {},
  user: null as AuthUser | null,
});

export interface AuthUser {
  isLoggedIn: boolean;
}

export function AuthProvider(props: { children: React.ReactNode }) {
  const [user, setAuth] = React.useState<AuthUser | null>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={
        user
          ? {
              signIn: () => setAuth({ isLoggedIn: true }),
              signOut: () => setAuth({ isLoggedIn: false }),
              user,
            }
          : (null as any)
      }
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: AuthUser | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}
