<?php echo 1; ?>
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="build/nes.min.js"></script>
    <script type="text/javascript" src="build/local.js"></script>

  </head>
  <body>
    <p>
      <select id="romList">
        <option value="./roms/nestest.nes">nestest</option>
        <option value="./roms/Sgt. Helmet - Training Day (2013)(The Mojon Twins)[!].nes" selected>Sgt. Helmet</option>
        <option value="./roms/pong1k.nes">pong1k</option>
        <option value="./roms/The Invasion.nes">The Invasion</option>
        <option value="./roms/mguard.nes">mguard</option>
      </select>
      <button id="loadROMButton" >load rom</button><br />
      Select rom from the list or drag and drop your own rom into this window to start.
    </p>

    <p>
      <canvas id="mainCanvas" width="256" height="240"
              style="border:1px solid black; width:512px; height:480px;"></canvas>
      <span id="fps"></span> fps
    </p>

    <div>
      <table>
        <tr>
          <td></td>
          <td><button id="pad1_4" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.UP)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.UP)">U</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><button id="pad1_6" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.LEFT)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.LEFT)">L</button></td>
          <td></td>
          <td><button id="pad1_7" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.RIGHT)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.RIGHT)">R</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><button id="pad1_5" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.DOWN)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.DOWN)">D</button></td>
          <td></td>
          <td><button id="pad1_2" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.SELECT)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.SELECT)">SELECT</button></td>
          <td><button id="pad1_3" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.START)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.START)">START</button></td>
          <td><button id="pad1_1" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.B)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.B)">B</button></td>
          <td><button id="pad1_0" onmousedown="pressPadButton(NesJs.Joypad.BUTTONS.A)"
                onclick="releasePadButton(NesJs.Joypad.BUTTONS.A)">A</button></td>
        </tr>
      </table>
    </div>

    <p>
      <div>
        <button id="dumpROMButton" >dump ROM</button>
        <button id="dumpRegButton" >dump CPU/PPU reg</button>
        <button id="dumpRAMButton" >dump CPU RAM</button>
        <button id="dumpVRAMButton" >dump PPU VRAM</button>
        <button id="dumpSPRRAMButton" >dump PPU SPRRAM</button>
        <button id="stopButton" >stop</button>
        <button id="stepButton" >step</button>
        <button id="resumeButton" >resume</button>
      </div>
      <textarea id="dump" cols="128" rows="16" readonly="readonly"> </textarea>
    </p>

    <p>
      Thanks for the public domain NES roms.
    </p>
    <ul>
      <li><a href="http://pdroms.de/category/nintendoentertainmentsystem">http://pdroms.de/category/nintendoentertainmentsystem</a></li>
      <li><a href="http://slydogstudios.org/index.php/1k-series/">http://slydogstudios.org/index.php/1k-series/</a></li>
      <li><a href="http://www.mojontwins.com/juegos_mojonos/sgt-helmet-training-day-nes/">http://www.mojontwins.com/juegos_mojonos/sgt-helmet-training-day-nes/</a></li>
    </ul>

    <p>
      <a href="https://github.com/takahirox/nes-js">Source code at GitHub</a>
    </p>

  </body>
</html>
