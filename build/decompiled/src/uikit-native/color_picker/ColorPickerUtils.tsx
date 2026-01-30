// uikit-native/color_picker/ColorPickerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = {};
    var3 = 'function normalizeValue_ColorPickerUtilsTsx1(value){if(value<0)return 0;if(value>1)return 1;return value;}';
    var0.code = var3;
    var _closure1_slot0 = var0;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: normalizeValue, environment: var0
            _fun79757: for (var _fun79757_ip = 0;;) switch (_fun79757_ip) {
                case 0:
                    var2 = arg0;
                    var0 = 0;
                    var1 = var2 < var0;
                    if (var1) {
                        _fun79757_ip = 28;
                        continue _fun79757
                    }
                case 12:
                    var1 = 1;
                    var3 = var2 > var1;
                    if (var3) {
                        _fun79757_ip = 25;
                        continue _fun79757
                    }
                case 22:
                    var1 = var2;
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4078966449794.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var4 = var3.bind(var0)();
    var3 = {};
    var5 = 'function hsvToRgbWorklet_ColorPickerUtilsTsx2({h:h,s:s,v:v}){let r=0;let g=0;let b=0;h/=360;var i=Math.floor(h*6);var f=h*6-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)];}';
    var3.code = var5;
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: hsvToRgbWorklet, environment: var0
            _fun79759: for (var _fun79759_ip = 0;;) switch (_fun79759_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.h;
                    var8 = var0.s;
                    var6 = var0.v;
                    var0 = 360;
                    var0 = var1 / var0;
                    var2 = global;
                    var3 = var2.Math;
                    var1 = var3.floor;
                    var4 = 6;
                    var0 = var4 * var0;
                    var3 = var1.bind(var3)(var0);
                    var5 = var0 - var3;
                    var0 = 1;
                    var1 = var0 - var8;
                    var1 = var6 * var1;
                    var7 = var5 * var8;
                    var7 = var0 - var7;
                    var7 = var6 * var7;
                    var5 = var0 - var5;
                    var5 = var5 * var8;
                    var5 = var0 - var5;
                    var5 = var6 * var5;
                    var9 = var3 % var4;
                    var4 = 0;
                    if (!(var4 !== var9)) {
                        _fun79759_ip = 200;
                        continue _fun79759
                    }
                case 107:
                    if (!(var0 !== var9)) {
                        _fun79759_ip = 189;
                        continue _fun79759
                    }
                case 111:
                    var0 = 2;
                    if (!(var0 !== var9)) {
                        _fun79759_ip = 178;
                        continue _fun79759
                    }
                case 118:
                    var0 = 3;
                    if (!(var0 !== var9)) {
                        _fun79759_ip = 167;
                        continue _fun79759
                    }
                case 125:
                    var0 = 4;
                    if (!(var0 !== var9)) {
                        _fun79759_ip = 156;
                        continue _fun79759
                    }
                case 132:
                    var8 = 5;
                    var0 = 0;
                    var3 = 0;
                    var4 = 0;
                    if (!(var8 === var9)) {
                        _fun79759_ip = 209;
                        continue _fun79759
                    }
                case 145:
                    var0 = var6;
                    var3 = var1;
                    var4 = var7;
                    _fun79759_ip = 209;
                    continue _fun79759;
                case 156:
                    var0 = var5;
                    var3 = var1;
                    var4 = var6;
                    _fun79759_ip = 209;
                    continue _fun79759;
                case 167:
                    var0 = var1;
                    var3 = var7;
                    var4 = var6;
                    _fun79759_ip = 209;
                    continue _fun79759;
                case 178:
                    var0 = var1;
                    var3 = var6;
                    var4 = var5;
                    _fun79759_ip = 209;
                    continue _fun79759;
                case 189:
                    var0 = var7;
                    var3 = var6;
                    var4 = var1;
                    _fun79759_ip = 209;
                    continue _fun79759;
                case 200:
                    var0 = var6;
                    var3 = var5;
                    var4 = var1;
                case 209:
                    var6 = var2.Math;
                    var5 = var6.round;
                    var1 = 255;
                    var0 = var1 * var0;
                    var5 = var5.bind(var6)(var0);
                    var0 = new Array(3);
                    var0[0] = var5;
                    var6 = var2.Math;
                    var5 = var6.round;
                    var3 = var1 * var3;
                    var3 = var5.bind(var6)(var3);
                    var0[1] = var3;
                    var3 = var2.Math;
                    var2 = var3.round;
                    var1 = var1 * var4;
                    var1 = var2.bind(var3)(var1);
                    var0[2] = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14555937576302.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = {};
    var6 = 'function hslToRgbWorklet_ColorPickerUtilsTsx3({h:h,s:s,l:l}){let r=0;let g=0;let b=0;const c=(1-Math.abs(2*l-1))*s;const x=c*(1-Math.abs(h/60%2-1));const m=l-c/2;if(h===360||0<=h&&h<60){r=c;g=x;b=0;}else if(60<=h&&h<120){r=x;g=c;b=0;}else if(120<=h&&h<180){r=0;g=c;b=x;}else if(180<=h&&h<240){r=0;g=x;b=c;}else if(240<=h&&h<300){r=x;g=0;b=c;}else if(300<=h&&h<360){r=c;g=0;b=x;}return[Math.round((r+m)*255),Math.round((g+m)*255),Math.round((b+m)*255)];}';
    var5.code = var6;
    var _closure1_slot2 = var5;
    var1 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: hslToRgbWorklet, environment: var0
            _fun79761: for (var _fun79761_ip = 0;;) switch (_fun79761_ip) {
                case 0:
                    var0 = arg0;
                    var10 = var0.h;
                    var5 = var0.s;
                    var1 = var0.l;
                    var2 = global;
                    var7 = var2.Math;
                    var6 = var7.abs;
                    var0 = 2;
                    var3 = var0 * var1;
                    var4 = 1;
                    var3 = var3 - var4;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4 - var3;
                    var7 = var3 * var5;
                    var6 = var2.Math;
                    var5 = var6.abs;
                    var8 = 60;
                    var3 = var10 / var8;
                    var3 = var3 % var0;
                    var3 = var3 - var4;
                    var3 = var5.bind(var6)(var3);
                    var3 = var4 - var3;
                    var4 = var7 * var3;
                    var0 = var7 / var0;
                    var5 = var1 - var0;
                    var6 = 0;
                    var9 = 360;
                    var0 = var7;
                    var3 = var4;
                    var1 = 0;
                    if (!(var9 !== var10)) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 130:
                    if (!(var6 <= var10)) {
                        _fun79761_ip = 152;
                        continue _fun79761
                    }
                case 134:
                    var11 = var10 < var8;
                    var0 = var7;
                    var3 = var4;
                    var1 = 0;
                    if (var11) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 152:
                    if (!(var8 <= var10)) {
                        _fun79761_ip = 174;
                        continue _fun79761
                    }
                case 156:
                    var8 = 120;
                    var8 = var10 < var8;
                    var0 = var4;
                    var3 = var7;
                    var1 = 0;
                    if (var8) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 174:
                    var8 = 120;
                    if (!(var8 <= var10)) {
                        _fun79761_ip = 199;
                        continue _fun79761
                    }
                case 181:
                    var8 = 180;
                    var8 = var10 < var8;
                    var0 = 0;
                    var3 = var7;
                    var1 = var4;
                    if (var8) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 199:
                    var8 = 180;
                    if (!(var8 <= var10)) {
                        _fun79761_ip = 224;
                        continue _fun79761
                    }
                case 206:
                    var8 = 240;
                    var8 = var10 < var8;
                    var0 = 0;
                    var3 = var4;
                    var1 = var7;
                    if (var8) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 224:
                    var8 = 240;
                    if (!(var8 <= var10)) {
                        _fun79761_ip = 252;
                        continue _fun79761
                    }
                case 231:
                    var8 = 300;
                    var8 = var10 < var8;
                    var0 = var4;
                    var3 = 0;
                    var1 = var7;
                    if (var8) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 252:
                    var8 = 300;
                    var8 = var8 <= var10;
                    if (!var8) {
                        _fun79761_ip = 269;
                        continue _fun79761
                    }
                case 265:
                    var8 = var10 < var9;
                case 269:
                    var0 = 0;
                    var3 = 0;
                    var1 = 0;
                    if (!var8) {
                        _fun79761_ip = 286;
                        continue _fun79761
                    }
                case 278:
                    var0 = var7;
                    var3 = 0;
                    var1 = var4;
                case 286:
                    var7 = var2.Math;
                    var6 = var7.round;
                    var4 = 255;
                    var0 = var0 + var5;
                    var0 = var4 * var0;
                    var6 = var6.bind(var7)(var0);
                    var0 = new Array(3);
                    var0[0] = var6;
                    var7 = var2.Math;
                    var6 = var7.round;
                    var3 = var3 + var5;
                    var3 = var4 * var3;
                    var3 = var6.bind(var7)(var3);
                    var0[1] = var3;
                    var3 = var2.Math;
                    var2 = var3.round;
                    var1 = var1 + var5;
                    var1 = var4 * var1;
                    var1 = var2.bind(var3)(var1);
                    var0[2] = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 13811670810842.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var6 = arg6;
    var5 = 0;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/color_picker/ColorPickerUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.normalizeValue = var4;
    var2.hsvToRgbWorklet = var3;
    var2.hslToRgbWorklet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);