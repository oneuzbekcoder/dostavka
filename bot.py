import hashlib
import logging

from aiogram import Bot, Dispatcher, executor,types
from aiogram.types import InlineQuery, \
    InputTextMessageContent, InlineQueryResultArticle
from aiogram.types.web_app_info import WebAppInfo
API_TOKEN = '5785064940:AAEo38n-n62QzoA3468x-qRRqCY4aXyoSTE'

logging.basicConfig(level=logging.DEBUG)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

def webAppKeyboard(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webAppTest = WebAppInfo(url="https://oneuzbekcoder.github.io") #создаем webappinfo - формат хранения url
   one_butt = types.KeyboardButton(text="Тестовая страница", web_app=webAppTest) #создаем кнопку типа webapp
   keyboard.add(one_butt) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру



@dp.message_handler(commands=['start', 'help'])
async def send_welcome(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton("Sahifani ochish",web_app=WebAppInfo(url='https://oneuzbekcoder.github.io')))
    # bot.send_message( message.chat.id, 'Привет, я бот для проверки телеграмм webapps!)', reply_markup=webAppKeyboard()) 

    await message.reply("Hi!\nI'm EchoBot!\nPowered by aiogram.",reply_markup=webAppKeyboard())

# @dp.message_handler(content_types=['web_app_data'])
# async def progress(message: types.Message):
#     print(message)
#     await message.answer(f"hello {message.web_app_data.data}" )

@dp.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   print(webAppMes) #вся информация о сообщении
   print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
   dp.send_message(webAppMes.chat.id, f"получили инофрмацию из веб-приложения: {webAppMes.web_app_data.data}") 
   #отправляем сообщение в ответ на отправку данных из веб-приложения 
if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)