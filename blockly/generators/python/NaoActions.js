'use strict';

goog.provide('Blockly.Python.logic');

goog.require('Blockly.Python');

Blockly.Python['start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "import math \nfrom Nao import generate\n \nNao=generate()\n";
  return code;
};

Blockly.Python['talk'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "Nao.say("+value_text+")\n";
  return code

};
Blockly.Python['stand'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.stand()\n";
  return code

};
Blockly.Python['sit'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.sit()\n";
  return code;
};
Blockly.Python['crouch'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.crouch()\n";
  return code;
};
Blockly.Python['Lying_Belly'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.LyingBelly()\n";
  return code;
};
Blockly.Python['Lying_Back'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.LyingBack()\n";
  return code;
};
Blockly.Python['walk'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');
  if(dropdown_direction=='Forward')
    var code = "Nao.walk("+value_distance+",0,0)\n";
  else
    var code = "Nao.walk(-"+value_distance+",0,0)\n";
  return code ;
}; 
Blockly.Python['turn'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var dropdown_direction = block.getFieldValue('direction');
  if(dropdown_direction=='Left')
    var code = "Nao.walk(0,0,"+angle_angle+")\n";
  else
    var code = "Nao.walk(0,0,-"+angle_angle+")\n";

  return code ;
};
Blockly.Python['open_hand'] = function(block) {
  var dropdown_lr = block.getFieldValue('LR');
  if (dropdown_lr == 'Left'){
  var code = "Nao.OpenHand('LHand')\n";
  }
  else{
    var code = "Nao.OpenHand('RHand')\n";
  }
  return code;
};
Blockly.Python['close_hand'] = function(block) {
  var dropdown_lr = block.getFieldValue('LR');
  if (dropdown_lr == 'Left'){
  var code = "Nao.CloseHand('LHand')\n";
  }
  else{
    var code = "Nao.CloseHand('RHand')\n";
  }
  return code;
};

Blockly.Python['wave'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.wave()\n";
  return code;
};
Blockly.Python['wipe'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao. wipeForehead()\n";
  return code;
};
Blockly.Python['blink'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.blink()\n";
  return code;
};
Blockly.Python['Bow'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.bow()\n";
  return code;
};
Blockly.Python['Blow_kiss'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.blowkiss()\n";
  return code;
};
Blockly.Python['Macarena'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.macrenadance()\n";
  return code;
};
Blockly.Python['taichi'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.taiChi()\n";
  return code;
};
Blockly.Python['Pushups'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  "Nao.pushups()\n";
  return code;
};
Blockly.Python['random_eyes'] = function(block) {
  var number_time = block.getFieldValue('time');
  // TODO: Assemble Python into code variable.
  var code = "Nao.randomEyes("+number_time+")\n";
  return code;
};
Blockly.Python['rasta'] = function(block) {
  var number_time = block.getFieldValue('time');
  // TODO: Assemble Python into code variable.
  var code = "Nao.rasta("+number_time+")\n";
  return code;
};
Blockly.Python['set_color'] = function(block) {
  var colour_name = block.getFieldValue("NAME");
  var dropdown_leds = block.getFieldValue("Leds");
  // TODO: Assemble Python into code variable.
  var code = "Nao.setLeds("+"'"+dropdown_leds+"','"+colour_name+"')\n";
  return code;
};
Blockly.Python['head_sensor'] = function(block) {
  var dropdown_head = block.getFieldValue('Head', Blockly.Python.ORDER_ATOMIC);
  var code = "Nao.headsensor("+"'"+dropdown_head+"'"+")";
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['hand_sensor'] = function(block) {
  var dropdown_hand = block.getFieldValue('Hand', Blockly.Python.ORDER_ATOMIC);
  var code = "Nao.handsensor("+"'"+dropdown_hand+"'"+")";
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['bumper_sensor'] = function(block) {
  var dropdown_bumper = block.getFieldValue('Bumper', Blockly.Python.ORDER_ATOMIC);
  var code = "Nao.bumpersensor("+"'"+dropdown_bumper+"'"+")";
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['ultrasonic_sensor'] = function(block) {
  var code = "ultrasonic()";
  return [code, Blockly.Python.ORDER_NONE];
};

