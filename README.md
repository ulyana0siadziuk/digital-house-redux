# Digital House (ЛР №5, Redux Toolkit)

React-приложение интернет-магазина с глобальным управлением состоянием корзины через Redux Toolkit. Вариант 3.

## Запуск

```bash
cd "C:\D\Study\7 sem\lab5-digital-house"
npm install
npm run dev
```

Открой адрес из терминала (обычно http://localhost:5173/).

## Что реализовано

- `src/store/cartSlice.js` — срез состояния корзины (`items`) и действие `addToCart`
- `src/store/store.js` — `configureStore`
- `Provider` в `main.jsx`
- `ProductCard` — `useDispatch` + `addToCart`
- `CartIcon` — `useSelector`, показывает общее количество товаров в корзине

## Структура store

```
src/store/
  cartSlice.js
  store.js
```
