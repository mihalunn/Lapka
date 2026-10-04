# Lapka

Учебный pet-проект: семейное веб-приложение для хранения истории питомцев и планирования ухода.

## Текущий статус

Создан базовый каркас приложения на React, TypeScript и Vite. Требования и этапы разработки описаны в продуктовой документации.

## Запуск проекта

Требуется Node.js версии 22.12.0 или новее.

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер:

```bash
npm run dev
```

Если `localhost` недоступен:

```bash
npm run dev -- --host 127.0.0.1
```

Проверить код:

```bash
npm run lint
```

Создать production-сборку:

```bash
npm run build
```

## Документация

1. [Product Brief](docs/product/01-product-brief.md)
2. [Границы MVP](docs/product/02-mvp-scope.md)
3. [Сценарии и предметная модель](docs/product/03-analysis.md)
4. [UX/UI-спецификация](docs/product/04-design-spec.md)
5. [Техническая концепция](docs/product/05-architecture.md)
6. [Учебный backlog](docs/product/06-backlog.md)

## Дизайн-подход

Источником истины служат UX/UI-спецификация, CSS-токены, адаптивные правила и служебная страница `/ui-kit`.

[Figma — Lapka Product Concept](https://www.figma.com/design/GLVWRdZxqNcG7torKEqs5I) используется как необязательный черновик и не блокирует разработку.

## Следующий шаг

Настроить инструменты контроля качества по задаче T-002 из backlog.