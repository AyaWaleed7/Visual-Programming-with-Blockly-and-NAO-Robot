'use strict';

goog.provide('Blockly.Pseudo.logic');

goog.require('Blockly.Pseudo');

Blockly.Pseudo['start'] = function(block) {
  var code = "Connect Nao network\n";
  return code;
};

Blockly.Pseudo['talk'] = function(block) {
  var value_text = Blockly.Pseudo.valueToCode(block, 'text', Blockly.Pseudo.ORDER_ATOMIC);
  var code = "Nao says("+value_text+")\n";
  return code

};
Blockly.Pseudo['stand'] = function(block) {
  var code =  "Nao stands \n";
  return code;

};
Blockly.Pseudo['sit'] = function(block) {
  var code =  "Nao sits\n";
  return code;
};
Blockly.Pseudo['crouch'] = function(block) {
  var code =  "Nao crouches\n";
  return code;
};
Blockly.Pseudo['Lying_Belly'] = function(block) {
  var code =  "Nao Lies on belly\n";
  return code;
};
Blockly.Pseudo['Lying_Back'] = function(block) {
  var code =  "Nao lies on back\n";
  return code;
};
Blockly.Pseudo['walk'] = function(block) {
  var value_distance = Blockly.Pseudo.valueToCode(block, 'distance', Blockly.Pseudo.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');
  if(dropdown_direction=='Forward')
    var code = "Nao walks("+value_distance+"forward)\n";
  else
    var code = "Nao walks("+value_distance+"backward)\n";
  return code ;
}; 
Blockly.Pseudo['turn'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var dropdown_direction = block.getFieldValue('direction');
  if(dropdown_direction=='Left')
    var code = "Nao turns to the left"+angle_angle+")\n";
  else
    var code = "Nao turns to the right"+angle_angle+")\n";

  return code ;
};
Blockly.Pseudo['open_hand'] = function(block) {
  var dropdown_lr = block.getFieldValue('LR');
  if (dropdown_lr == 'Left'){
  var code = "Nao opens left hand\n";
  }
  else{
    var code = "Nao opens right hand\n";
  }
  return code;
};
Blockly.Pseudo['close_hand'] = function(block) {
  var dropdown_lr = block.getFieldValue('LR');
  if (dropdown_lr == 'Left'){
  var code = "Nao closes left hand\n";
  }
  else{
    var code = "Nao closes right hand\n";
  }
  return code;
};

Blockly.Pseudo['wave'] = function(block) {
  var code =  "Nao waves\n";
  return code;
};
Blockly.Pseudo['wipe'] = function(block) {
  var code =  "Nao wipes its forehead\n";
  return code;
};
Blockly.Pseudo['blink'] = function(block) {
  var code =  "Nao blinks\n";
  return code;
};
Blockly.Pseudo['Bow'] = function(block) {
  var code =  "Nao bows\n";
  return code;
};
Blockly.Pseudo['Blow_kiss'] = function(block) {
  var code =  "Nao blows kiss\n";
  return code;
};
Blockly.Pseudo['Macarena'] = function(block) {
  var code =  "Nao dances Macarena\n";
  return code;
};
Blockly.Pseudo['taichi'] = function(block) {
  var code =  "Nao perfroms the Taichi\n";
  return code;
};
Blockly.Pseudo['Pushups'] = function(block) {
  var code =  "Nao does pushups\n";
  return code;
};
Blockly.Pseudo['random_eyes'] = function(block) {
  var number_time = block.getFieldValue('time');
  var code = "Nao sets random colors to the eyes for"+number_time+"seconds\n";
  return code;
};
Blockly.Pseudo['rasta'] = function(block) {
  var number_time = block.getFieldValue('time');
  var code = "Nao sets random colors to the whole body for"+number_time+"seconds\n";
  return code;
};
Blockly.Pseudo['set_color'] = function(block) {
  var colour_name = block.getFieldValue("NAME");
  var dropdown_leds = block.getFieldValue("Leds");
  var code = "Nao.setLeds("+"'"+dropdown_leds+"','"+colour_name+"')\n";
  return code;
};
Blockly.Pseudo['head_sensor'] = function(block) {
  var dropdown_head = block.getFieldValue('Head', Blockly.Pseudo.ORDER_ATOMIC);
  var code = "Nao ("+"'"+dropdown_head+"'"+") head sensor is touched";
  return [code, Blockly.Pseudo.ORDER_ATOMIC];
};
Blockly.Pseudo['hand_sensor'] = function(block) {
  var dropdown_hand = block.getFieldValue('Hand', Blockly.Pseudo.ORDER_ATOMIC);
  var code = "Nao ("+"'"+dropdown_hand+"'"+") hand sensor is touched";
  return [code, Blockly.Pseudo.ORDER_ATOMIC];
};
Blockly.Pseudo['bumper_sensor'] = function(block) {
  var dropdown_bumper = block.getFieldValue('Bumper', Blockly.Pseudo.ORDER_ATOMIC);
  var code = "Nao ("+"'"+dropdown_bumper+"'"+") foot sensor is touched";
  return [code, Blockly.Pseudo.ORDER_ATOMIC];
};
Blockly.Pseudo['ultrasonic_sensor'] = function(block) {
  var code = "ultrasonic()";
  return [code, Blockly.Pseudo.ORDER_NONE];
};

