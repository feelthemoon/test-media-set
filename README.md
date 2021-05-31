# Тестовое задание на позицию frontend-разработчика в компанию Медиасеть

## Установка необходимых зависимостей
```
yarn install
yarn global add json-server
```

### Запуск приложения и json-server
```
json-server --watch db.json
```
Далее вставьте url на json-server в локальный файл .env, в переменную окружения,
с таким же именем, как .env.example
```
yarn serve
```

### Сборка проекта в продакшн
```
yarn build
```
