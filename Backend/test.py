from flask_cors import CORS
from flask import Flask, request


app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route('/')
def output():
    # serve index template
    return "Hello World"


@app.route('/savecode', methods=['POST'])
def savecode():
    data = request.get_json()
    code = str(data['Code'])
    f = open("t.py", "w+")
    f.write(code)
    f.close()
    execfile(r'C:\Users\AYA WALEED\Desktop\NAO Project\nao-project\Backend\t.py')
    return ''
    # f = request.files['file']
    # f.save(secure_filename(f.filename))
    # return 'file saved successfully'


@app.route('/receiver', methods = ['POST'])
def worker():
# read json + reply
    data = request.get_json()
    result = ''

if __name__ == '__main__':
	app.run()



