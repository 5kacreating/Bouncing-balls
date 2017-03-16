function Ball(x,y,r,color)
{
	this.location = new Vector(x,y);
	this.velocity = new Vector(0,0);
	this.acc = new Vector (0,0);

	this.r = r;
	this.color = color;

	this.dna = [];

	for (var i = 0; i<gNumb; i=i+1)
	{
		this.dna[i] = new Vector(Math.random() / 25 - 0.02, Math.random() / 25 - 0.02);
	}


	this.draw = function() 
	{
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.location.x,this.location.y,this.r,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}

	this.update = function()
	{
		this.acc.add(this.dna[time]);	
		this.velocity.add(this.acc);
		this.location.add(this.velocity);

		if(this.location.x + this.r >= cWidth)
		{
			this.velocity.x = this.velocity.x * (-1);
		}

		if(this.location.x - this.r <= 0)
		{
			this.velocity.x = this.velocity.x * (-1);
		}

		if(this.location.y - this.r <= 0)
		{
			this.velocity.y = this.velocity.y * (-1);
		}

		if(this.location.y + this.r >= cHeight)
		{
			this.velocity.y = this.velocity.y * (-1);
		}


		this.acc.mult(0);
	}

	this.addForce = function(v)
	{
		this.acc.add(v);
	}





}