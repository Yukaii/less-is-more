//var circleMaterial : Material[];
var Rate : float;
var MainCamera : Camera;
var Tespos : Vector3;
var inputRegion : float;
var QueueFunctions : TheQueue;

MainCamera = GameObject.Find("Camera").GetComponent("Camera");
QueueFunctions = GameObject.Find("Camera").GetComponent(TheQueue);

var _particles : ParticleSystem.Particle[];
_particles = new ParticleSystem.Particle[particleSystem.maxParticles];

//var touched : boolean[particleSystem.maxParticles];

//set particle[i].lifetime to zero to destroy the particle

function Start (){

}

function Update (){

	//set particles in _particles array
	var amount = particleSystem.GetParticles(_particles);
	
	//must use this for method to pass the correct item
	//not "for (var each in _particle)"
	//still don't know why :p
	for (var i = 0; i < amount; i++)
	{	
		if(isTouched(_particles[i]))
		{
			var index = QueueFunctions.WhichBubble(gameObject.name);
			
			if (QueueFunctions.DestroyCircle(index))
			{
				//destroy single particle
				_particles[i].lifetime = 0;
			}
			
		}

	}
	//set back the changes to original particle array
	particleSystem.SetParticles(_particles, amount);
	
	//set the emission rate
	GetComponent(ParticleSystem).emissionRate = Rate;

	
}

//position range from (x, y) = (0, 0.89) to (0.99, 0.89)
//pixel form (240.0, 503.0, 22.7) to (324.5, 503.0, 22.7)
//later stage animation
function FlyAway(theParticle : ParticleSystem.Particle) 
{

}


function isTouched(theParticle : ParticleSystem.Particle) : boolean 
{

	var counts = Input.touchCount;
	var particlePos = Vector2.zero;
	var tempVector : Vector3 = MainCamera.WorldToScreenPoint(theParticle.position);

	particlePos.x = tempVector.x;
	particlePos.y = tempVector.y;

	for (var i = 0; i < counts; i++)
	{
		var touch : Touch = Input.GetTouch(i);

		var between : Vector2 = touch.position - particlePos;

		if (between.magnitude <= inputRegion) return true;
			else return false;
	}

	
	//---------------------------------------------//
	//add mouse support for testing
	var click2 : Vector3 = Input.mousePosition;
	var click : Vector2;

	click.x = click2.x;
	click.y = click2.y;

	//print(click);

	var between2 : Vector2 = click - particlePos;

	if ( between2.magnitude <= inputRegion)
		return true;
	else 
		return false;
	//----------------end test block------------//

}