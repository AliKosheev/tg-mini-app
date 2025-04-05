from aiogram import Bot, Dispatcher, types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from aiogram.utils import executor
from aiogram.contrib.middlewares.logging import LoggingMiddleware
import logging
import os
from dotenv import load_dotenv

load_dotenv()

# Вставь свой токен в .env или через переменные среды
TOKEN = os.getenv("BOT_TOKEN", "PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE")

bot = Bot(token=TOKEN)
dp = Dispatcher(bot)
dp.middleware.setup(LoggingMiddleware())

logging.basicConfig(level=logging.INFO)

# Ссылка на WebApp (твой фронт на Vercel)
WEBAPP_URL = "https://tg-mini-app-xxeh.vercel.app"

@dp.message_handler(commands=['start'])
async def start_handler(message: types.Message):
    keyboard = InlineKeyboardMarkup(row_width=1)
    webapp_button = InlineKeyboardButton(
        text="Открыть мини-приложение 🚀",
        web_app=WebAppInfo(url=WEBAPP_URL)
    )
    keyboard.add(webapp_button)

    await message.answer("Нажми кнопку ниже, чтобы открыть мини-приложение:", reply_markup=keyboard)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)