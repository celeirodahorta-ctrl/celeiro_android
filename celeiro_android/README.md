# Celeiro da Horta — Android APK

Este projeto transforma a versão web/PWA fornecida no ZIP numa aplicação Android nativa baseada em WebView.

## Como gerar o APK

1. Instale o **Android Studio** (versão recente).
2. Abra esta pasta (`CeleiroDaHorta`) no Android Studio.
3. Aguarde a sincronização do Gradle e aceite a instalação dos SDKs pedidos.
4. No menu: **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
5. O APK de debug será criado em:
   `app/build/outputs/apk/debug/app-debug.apk`

Para uma versão instalável para distribuição, use **Build → Generate Signed Bundle / APK** e crie uma chave de assinatura.

## O que está incluído

- Página web original e todos os seus recursos locais.
- Ícone da aplicação.
- WebView com JavaScript e armazenamento local ativados.
- Links HTTPS externos abrem no navegador do Android.
- Botão Voltar do Android navega para trás dentro da aplicação.
- Nome da app: **Celeiro da Horta**.
- ID Android: `pt.celeirodahorta.app`.
- Versão: `1.0` (versionCode 1).
