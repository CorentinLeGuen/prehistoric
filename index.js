const r = require('raylib')

r.InitWindow(800, 600, "Prehistoric")

r.SetTargetFPS(60)

const msg = "TESINT ACCENTS : 61789098765432'(-è_çàç_è-('²/\"é&²²²è_eà!e#{@^@[^[ TEST"
const font_dogica = r.LoadFont(__dirname + "dogica.ttf")

while (!r.WindowShouldClose())
{
    r.BeginDrawing()
    r.ClearBackground(r.RAYWHITE)

    /* Start Drawing */

    r.DrawTextEx(font_dogica, msg, r.Vector2(100, 100), 12, 2, r.BLACK)
    r.DrawText("Nice !", 200, 200, 20, r.LIGHTGRAY)
    

    /* End Drawing  */
    
    r.EndDrawing()
}

r.UnloadFont(font_dogica)

r.CloseWindow()