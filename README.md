![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?logo=next.js&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v4-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?logo=typescript&logoColor=white)

# NextAuth Demo

Aplicacion de ejemplo construida con **Next.js** (App Router) y **NextAuth.js** que demuestra como integrar multiples proveedores de autenticacion (Google, Microsoft Azure AD y GitHub) junto con la proteccion de rutas.

## Caracteristicas

- Autenticacion multi-proveedor: Google, Microsoft Azure AD y GitHub
- Proteccion de rutas (ej. `/dashboard`) mediante middleware/proxy
- App Router de Next.js con layout y providers centralizados
- Barra de navegacion responsiva con inicio/cierre de sesion
- Estilos con Tailwind CSS v4

## Stack tecnologico

| Tecnologia     | Version  |
|----------------|----------|
| Next.js        | 16.2.10  |
| NextAuth.js    | v4       |
| React          | 19.2.4   |
| Tailwind CSS   | v4       |
| TypeScript     | v5       |

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 20
- npm (incluido con Node.js)

## Instalacion

```bash
npm install
```

## Configuracion de variables de entorno

Copia el archivo de ejemplo y rellena tus credenciales reales:

```bash
cp .env.example .env
```

| Variable                  | Descripcion                                                     |
|---------------------------|-----------------------------------------------------------------|
| `NEXTAUTH_URL`            | URL publica de la app (en desarrollo `http://localhost:3000`).  |
| `NEXTAUTH_SECRET`         | Secreto para firmar sesiones. Genera uno con `openssl rand -hex 32`. |
| `GOOGLE_CLIENT_ID`        | Client ID de Google OAuth.                                      |
| `GOOGLE_CLIENT_SECRET`    | Client Secret de Google OAuth.                                 |
| `AZURE_AD_CLIENT_ID`      | Client ID de Azure AD.                                         |
| `AZURE_AD_CLIENT_SECRET`  | Client Secret de Azure AD.                                     |
| `AZURE_AD_TENANT_ID`      | Tenant ID de Azure AD.                                         |
| `GITHUB_ID`               | Client ID de GitHub OAuth.                                     |
| `GITHUB_SECRET`           | Client Secret de GitHub OAuth.                                  |

Para obtener las credenciales de cada proveedor consulta la documentacion de [NextAuth.js providers](https://next-auth.js.org/providers/).

## Scripts disponibles

| Script        | Descripcion                                    |
|---------------|------------------------------------------------|
| `npm run dev` | Inicia el servidor de desarrollo.              |
| `npm run build` | Compila la app para produccion.             |
| `npm start`   | Inicia el servidor de produccion (tras build). |
| `npm run lint`| Ejecuta el linter (ESLint).                    |

## Estructura del proyecto

```
nextauth/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts        # Configuracion de NextAuth (providers)
│   │   ├── dashboard/
│   │   │   └── page.tsx                # Ruta protegida
│   │   ├── layout.tsx                  # Layout raiz + Providers + Navbar
│   │   ├── page.tsx                    # Home
│   │   ├── Providers.tsx               # SessionProvider de next-auth
│   │   └── globals.css
│   ├── components/
│   │   └── Navbar.tsx                  # Navegacion con signIn/signOut
│   └── proxy.ts                        # Proteccion de rutas (middleware)
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Proveedores de autenticacion soportados

- **Google** — [Documentacion](https://next-auth.js.org/providers/google)
- **Microsoft Azure AD** — [Documentacion](https://next-auth.js.org/providers/azure-ad)
- **GitHub** — [Documentacion](https://next-auth.js.org/providers/github)

La configuracion se encuentra en `src/app/api/auth/[...nextauth]/route.ts`.

## Notas de seguridad

- **Nunca** hagas commit del archivo `.env`. Ya esta ignorado en `.gitignore` (`.env*`).
- Si tu `NEXTAUTH_SECRET` se expone, generalo de nuevo (`openssl rand -hex 32`) y actualizalo en todos los entornos.
- Los Client IDs/Secrets de los proveedores deben rotarse desde sus respectivas consolas si se comprometen.

## Licencia

Este proyecto es de uso educativo/demostrativo. Sin licencia especifica.