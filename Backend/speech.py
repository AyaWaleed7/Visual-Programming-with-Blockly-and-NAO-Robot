
from naoqi import ALProxy

import time


data=[]
ip = "192.168.137.73"
asr = ALProxy("ALSpeechRecognition", ip, 9559)

asr.pause(True)
asr.setLanguage("English")


vocabulary = ["yes", "no", "hi", "wave"]


asr.setVocabulary(vocabulary, False)
asr.subscribe(ip)
memProxy = ALProxy("ALMemory", ip, 9559)
memProxy.subscribeToEvent('WordRecognized',ip,'wordRecognized')

asr.pause(False)

time.sleep(5)

asr.unsubscribe(ip)
data=memProxy.getData("WordRecognized")

print( "data: %s" % data )