//var circleMaterial : Material[];
var Rate : float;


var _particles : ParticleSystem.Particle[];
_particles = new ParticleSystem.Particle[particleSystem.maxParticles];

//set particle[i].lifetime to zero to destroy the particle

function Start (){

}

function Update (){

	//set particles in _particles array
	particleSystem.GetParticles(_particles);
	for (var each in _particles)
		if (each.position.magnitude)
			print(each.position);
	
	GetComponent(ParticleSystem).emissionRate = Rate;

	
}