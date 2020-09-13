from flask import Flask, request
from flask_cors import CORS
from naoqi import ALProxy
import math


def move(Stepsinput):
	motion = ALProxy("ALMotion", "172.20.10.9", 9559)
	motion.setStiffnesses("Body", 1.0)
	motion.moveInit()
	motion.moveTo(float(Stepsinput), 0, 0)
	print (Stepsinput)
	return


def talk(text):
	tts = ALProxy("ALTextToSpeech", "172.20.10.9", 9559)
	tts.say(text)
	print(text)
	return


if __name__ == '__main__':
   app.run()

@app.route('/')
def output():
	# serve index template
	return "Hello World"


@app.route('/receiver', methods=['POST'])
def worker():
	# read json + reply
	data = request.get_json()
	result = ''

	for item in data:
		result = str(item['Name'])

		if result == str('move'):
			print (str(item['Stepsinput']))
			move(str(item['Stepsinput']))

		elif result == 'talk':
			print (str(item['Text']))
			talk(str(item['Text']))


	print result
	return result


if __name__ == '__main__':
	app.run()

# from flask import Flask, render_template, request
# from flask_cors import  CORS
# from werkzeug.utils import secure_filename
# app = Flask(__name__)


# # Sending the home page when browsing /home
# @app.route('/receiver')
# def receiver():
#    return render_template('index.html')


# # Saving the code posted by the javascript app
# @app.route('/savecode', methods=['POST'])
# def savecode():
#     f = request.files['file']
#     f.save(secure_filename(f.filename))
#     return 'file saved successfully'

# if __name__ == '__main__':
#    app.run()