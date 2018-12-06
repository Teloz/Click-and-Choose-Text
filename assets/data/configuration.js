$(document).ready(function(){
var tabItems = [		
			{
				"showDefault": "true",
				"heading": "Thinking Skill",
				"info":[
					{
						"subHeading" : "Remembering",
						"listitems":["Remember", "assets/images/icon7.png", "Define", "State","Repeat"]			
					},
					{
						"subHeading" : "Understanding",
						"listitems":["Remember", "List", "Define", "State","Repeat"]
					},
					{
						"subHeading" : "Applying",
						"listitems":["assets/images/icon8.png", "List", "Define", "State","Repeat","Remember"]
					},
					{
						"subHeading" : "Analyzing",
						"listitems":["Remember", "List", "assets/images/icon3.png", "State","Repeat"]
					},
					{
						"subHeading" : "Evaluating",
						"listitems":["Remember", "List", "Define", "State","Repeat", "assets/images/icon4.png","Repeat"]
					}	
				]														
			},		
			{
				"showDefault": "false",
				"heading": "Content",
				"info":[
					{
						"subHeading" : "Depth",
						"listitems":["Remember", "List", "assets/images/icon1.png", "State","Repeat"]			
					},
					{
						"subHeading" : "Complexity",
						"listitems":["Remember", "List", "assets/images/icon5.jpg", "State","Repeat"]
					},
					{
						"subHeading" : "Imperatives",
						"listitems":["assets/images/icon3.png", "List", "Define", "State","Repeat"]
					},
					{
						"subHeading" : "Key Words",
						"listitems":["Remember", "List", "Define", "State","Repeat"]
					}	
				]														
			},
			{
				"showDefault": "false",
				"heading": "Resources",
				"info":[
					{
						"subHeading" : "Offline",
						"listitems":["Textbook", "Library Book", "Magazine", "Newspaper","Interview", "Encyclopedia", "Expert"]			
					},
					{
						"subHeading" : "Online",
						"listitems":["Website", "assets/images/icon4.png", "Online Encyclopedia", "Journal","Article", "Expert"]
					}	
				]														
			},
			{
				"showDefault": "false",
				"heading": "Products",
				"info":[
					{
						"subHeading" : "Group Size",
						"listitems":["one", "two", "three", "four", "five"]			
					}	
				]														
			}		
	]
var tabs = new Tabs(tabItems);
});
