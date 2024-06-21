var BigDiv = document.getElementById('projects');

for(i=0; i<PROJECTS.length;i++){
    var currentproject = PROJECTS[i];

    //div
    var SmallDiv = document.createElement('div');
    var SmallDivStyle = document.createAttribute('style');
    SmallDivStyle.value = 'display:inline-block;width:300px;margin:10px';
    SmallDiv.setAttributeNode(SmallDivStyle);

    //title
    var Title = document.createElement('h3');
    var titleNode = document.createTextNode(currentproject.title);
    Title.appendChild(titleNode);

    //image
    var image = document.createElement('img');
    var sorce = document.createAttribute('src');
    sorce.value = './images/' + currentproject.img;
    image.setAttributeNode(sorce);
    var imgStyle = document.createAttribute('style');
    imgStyle.value = 'width:180px;height:100px';
    image.setAttributeNode(imgStyle);

    //describtion
    var Desc = document.createElement('p');
    var DescNode = document.createTextNode(currentproject.description);
    Desc.appendChild(DescNode);

    // adding the title, image and description to the small div
    SmallDiv.appendChild(Title);
    SmallDiv.appendChild(image);
    SmallDiv.appendChild(Desc);
    
    // adding the small div to the big div 
    BigDiv.appendChild(SmallDiv);

}