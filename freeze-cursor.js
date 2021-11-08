const robot = require("robotjs")
const ioHook = require('iohook');

robot.setMouseDelay(0)
const screen = robot.getScreenSize()

ioHook.on('mousemove', (event) => {
	if (event.x != screen.width / 2 || event.y != screen.height / 2) {
		console.log(JSON.stringify({
			x: event.x - (screen.width / 2),
			y: event.y - (screen.height / 2)
		}))
		robot.moveMouse(screen.width/2, screen.height/2)
	}
});

ioHook.start()
