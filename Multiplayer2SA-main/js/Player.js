class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

getCount()
{
  var playerCountRef = database.ref("playerCount");
  playerCountRef.on("value",(data)=>{
  playerCount = data.val();
  })
}

updateCount(count)
{
/*[/]is used here to refer to the above note, here playerCount[a shortcut, no need to refer it again and again]*/
  database.ref("/").update({
    playerCount:count
  })
}

}

