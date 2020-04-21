import React, {Component} from 'react';
import Button from './Button';

function KeyPad(props){
    return(
    <>
          <div className="button">
          <Button buttonName='(' name='(' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='CE' name='CE' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName=')' name=')' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='C' name='C' onClick={e => props.onClick(e.target.name)}/><br/>


          <Button buttonName='1' name='1' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='2' name='2' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='3' name='3' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='+' name='+' onClick={e => props.onClick(e.target.name)}/><br/>


          <Button buttonName='4' name='4' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='5' name='5' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='6' name='6' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='-' name='-' onClick={e => props.onClick(e.target.name)}/><br/>


          <Button buttonName='7' name='7' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='8' name='8' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='9' name='9' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='*' name='*' onClick={e => props.onClick(e.target.name)}/><br/>


          <Button buttonName='.' name='.' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='0' name='0' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='=' name='=' onClick={e => props.onClick(e.target.name)}/>
          <Button buttonName='/' name='/' onClick={e => props.onClick(e.target.name)}/><br/>
      </div>
    </>
  )
}

export default KeyPad;
