import hashlib
import logging

from aiogram import Bot, Dispatcher, executor,types
from aiogram.types import InlineQuery, \
    InputTextMessageContent, InlineQueryResultArticle

API_TOKEN = '5785064940:AAEo38n-n62QzoA3468x-qRRqCY4aXyoSTE'

logging.basicConfig(level=logging.DEBUG)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start', 'help'])
async def send_welcome(message: types.Message):
  await message.reply("Hi!\nI'm EchoBot!\nPowered by aiogram.")

@dp.message_handler(content_types='web_app_data')
async def progress(message):
    print(message.web_app_data.data)
    await bot.send_message(message.chat.id,text=f"hello {message.web_app_data.data}" )

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)