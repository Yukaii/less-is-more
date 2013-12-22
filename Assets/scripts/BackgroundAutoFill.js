#pragma strict

//auto fills background according to screen resolution
//Warning : The Transform.position.x and Tranfrom.position.y must set to zero

function Start () { 
	
}

function Update () {
	guiTexture.pixelInset = new Rect(0, 0, Screen.width, Screen.height);
}