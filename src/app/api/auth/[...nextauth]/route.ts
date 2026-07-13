import NextAuth from "next-auth";   
import GoogleProvider from "next-auth/providers/google";

const authOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
});

// Exportar las opciones de autenticacion para que puedan ser utilizadas en las rutas GET y POST del endpoint de autenticacion
export { authOptions as GET, authOptions as POST };