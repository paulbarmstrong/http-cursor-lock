const express = require("express")
const app = express()
const { spawn } = require("child_process")

var freezeCursor = null
var mouseDeltaSinceLastRequest = {x: 0, y: 0}

app.get('/enable', function (req, res) {
	if (freezeCursor == null) {
		freezeCursor = spawn("node", ["freeze-cursor.js"])
		freezeCursor.stdout.on('data', (data) => {
			try {
				parsedData = JSON.parse(data)
				mouseDeltaSinceLastRequest = {
					x: mouseDeltaSinceLastRequest.x + parsedData.x,
					y: mouseDeltaSinceLastRequest.y + parsedData.y,
				}
			} catch (error) {
				console.error("Unable to parse freeze-cursor output: " + data)
			}
		});
	}
	console.log(new Date().toISOString() + " - " + "Enabled")
	res.send("Enabled")
})

app.get('/disable', function (req, res) {
	if (freezeCursor != null) {
		freezeCursor.kill()
		freezeCursor = null
	}
	console.log(new Date().toISOString() + " - " + "Disabled")
	res.send("Disabled")
})

app.get('/getMouseDelta', function (req, res) {
	console.log(new Date().toISOString() + " - " + JSON.stringify(mouseDeltaSinceLastRequest))
	const temp = mouseDeltaSinceLastRequest
	mouseDeltaSinceLastRequest = {x: 0, y: 0}
	res.send(temp.x + "," + temp.y)
})

app.listen(3000)

