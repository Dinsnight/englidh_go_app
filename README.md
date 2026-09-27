# EnglishGo

Приложение для изучения английского языка (Reading, Listening, Writing, Speaking, Vocabulary).
Дизайн в стиле iOS. Архитектура — Feature-Sliced Design (FSD).

## Запуск

```bash
npm install
npm run dev
```

Откроется на http://localhost:5173

## Логин

Это фронтенд-заглушка без бэкенда: введите любой логин и пароль (не пустые) — вход выполнится всегда.

## Структура (FSD)

```
src/
  app/        — инициализация приложения, провайдеры, роутинг, глобальные стили
  pages/      — страницы (Login, Home, Reading, Listening, Writing, Speaking, Vocabulary, Exercise)
  widgets/    — крупные составные блоки (TabBar, TopBar)
  features/   — фичи (auth/login, exercise-runner — прохождение упражнения)
  entities/   — сущности (user, exercise)
  shared/     — переиспользуемые UI-компоненты, данные упражнений, хуки, конфиг
```

## Возможности

- **Reading** — 10 текстов с вопросами на понимание прочитанного
- **Listening** — 10 упражнений (озвучка через Web Speech API) с вопросами
- **Writing** — 10 заданий на письмо с таймером, счётчиком слов и автосохранением черновика
- **Speaking** — 10 тем (Part 1 / Part 2 / Part 3) с записью своего голоса и прослушиванием
- **Vocabulary** — 5 наборов по 10 карточек (флеш-карты) с отслеживанием "выучено"
- Прогресс сохраняется в localStorage
