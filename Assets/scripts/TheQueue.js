#pragma strict

//Set GameObject array size in Inspector window
var circles : GameObject[];
var circlesPrefab : GameObject[];

//Random color of balls - the order list
var orders : int[];
var tarPosX : float[];


//todo: some GUI scaling
//write here.........
//var nowInset = new Rect(400.0, 775.0, 60.0, 60.0);
var nowPos = Vector3(0.8, 0.90, 0);

//Left-border: inset.x = 8

var pointedCircle = 0;


function Start () {
	GenerateQueue();
}

function Update () {
 	MoveToLeftMost();
 	if (pointedCircle == circles.length)
 	{
 		pointedCircle = 0;
 		nowPos = Vector3(0.8, 0.90, 0);
 		GenerateQueue();
 		//Waits(5);
 	}
 		

}

function GenerateQueue() {

	var i = 0;
	//create a list of random circle order
	for (var number in orders) 
	{
		number = Random.Range(0, 8);
		
		circles[i] = Instantiate(circlesPrefab[number], Vector3(0, 0, 0), circlesPrefab[number].transform.rotation);

		//Set Pixel Inset
		//circles[i].guiTexture.pixelInset = nowInset;
		circles[i].transform.position = nowPos;

		//Shifted Right for every circle
		//nowInset.x += nowInset.width * 6.0 / 5.0;
		nowPos.x += 0.15;

		//count for each circle
		i++;
	}

	//set each move Target position
	var tarX = 0.02;
	for (var each in tarPosX)
	{
		each = tarX;
		tarX += 0.15;
	}
}

//move all circles to left
function MoveToLeftMost(){
	//var movePixel = 8 - circles[pointedCircle].guiTexture.pixelInset.x;

	var amount = circles.length;
	for (var i = pointedCircle; i < amount; i++)
	{
		circles[i].transform.position = Vector3.MoveTowards(circles[i].transform.position, Vector3(tarPosX[i], 0.91, 0), Time.deltaTime);
	}
}

function DestroyCircle(index : int) : boolean
{
	var Namae = circlesPrefab[index].name + "(Clone)";
	
	//Debug.Log("pointed circle name = \"" + circles[pointedCircle].name + "\", prefab index name = \"" + Namae + "\"");

	if (circles[pointedCircle].name == Namae)
	{
		for (var each in tarPosX)
		{
			each -= 0.15;
		}
		Destroy(circles[pointedCircle]);

		pointedCircle++;
		return true;
	}
	else return false;
}

function WhichBubble(bubbleName : String) : int
{
	switch(bubbleName)
	{
		case "bubble1":
			return 0;
			break;
		case "bubble2":
			return 1;
			break;
		case "bubble3":
			return 2;
			break;
		case "bubble4":
			return 3;
			break;
		case "bubble5":
			return 4;
			break;
		case "bubble6":
			return 5;
			break;
		case "bubble7":
			return 6;
			break;
		case "bubble8":
			return 7;
			break;
	}
}

function Waits(seconds : float)
{
	yield WaitForSeconds(seconds);
}