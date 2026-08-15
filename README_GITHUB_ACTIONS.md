# Celeiro da Horta — APK via GitHub Actions

Este projeto gera o APK automaticamente no GitHub, sem Android Studio.

## Como usar

1. Crie um repositório no GitHub.
2. Envie **todo o conteúdo desta pasta `celeiro_android`** para o repositório.
3. Faça o primeiro commit para a branch `main` (ou `master`).
4. No GitHub, abra **Actions**.
5. Escolha **Gerar APK Android**.
6. Clique em **Run workflow**.
7. Quando terminar, abra a execução concluída.
8. Na secção **Artifacts**, descarregue **Celeiro-da-Horta-APK**.
9. Dentro do ZIP estará `app-debug.apk`.

O workflow usa Java 17 e Gradle 8.7 e compila com Android Gradle Plugin 8.5.2.

### Importante
O APK `debug` é adequado para testes/instalação direta. Para publicar na Google Play, será necessário criar uma versão assinada (`release`) com uma chave de assinatura.
