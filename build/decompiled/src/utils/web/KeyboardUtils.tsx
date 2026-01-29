// utils/web/KeyboardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94562: for (var _fun94562_ip = 0;;) switch (_fun94562_ip) {
        case 0:
            var9 = require;
            var15 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var15;
            var _closure1_slot3 = var10;
            var0 = function(arg0) { // Original name: maybePlusConversion, environment: var1
                _fun94563: for (var _fun94563_ip = 0;;) switch (_fun94563_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 'plus';
                        var2 = '+';
                        if (!(var2 !== var1)) {
                            _fun94563_ip = 18;
                            continue _fun94563
                        }
                    case 15:
                        var0 = var1;
                    case 18:
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var7 = function(arg0, arg1, arg2) { // Original name: getCodeToKeyLanguageCorrection, environment: var1
                _fun94564: for (var _fun94564_ip = 0;;) switch (_fun94564_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = arg1;
                        var2 = arg2;
                        var8 = null;
                        if (!(var8 != var2)) {
                            _fun94564_ip = 35;
                            continue _fun94564
                        }
                    case 15:
                        var1 = _closure1_slot9;
                        var1 = var1.WINDOWS;
                        if (!(var2 === var1)) {
                            _fun94564_ip = 236;
                            continue _fun94564
                        }
                    case 35:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var5 = 5;
                        var3 = var2[var5];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var4 = var3.BACKTICK_CODES;
                        var3 = var4.has;
                        var3 = var3.bind(var4)(var6);
                        if (var3) {
                            _fun94564_ip = 81;
                            continue _fun94564
                        }
                    case 79:
                        return var0;
                    case 81:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var5];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getLayoutMap;
                        var4 = var3.bind(var4)();
                        var3 = var4.get;
                        var9 = 'Backquote';
                        var7 = var3.bind(var4)(var9);
                        if (!(var0 !== var7)) {
                            _fun94564_ip = 225;
                            continue _fun94564
                        }
                    case 128:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.getExactKeyboardEventMatchFromAny;
                        var3 = {};
                        var3.key = var7;
                        var3.code = var9;
                        var3.keyCode = var6;
                        var4 = var4.bind(var5)(var3);
                        var3 = '\\';
                        if (!(var3 === var0)) {
                            _fun94564_ip = 190;
                            continue _fun94564
                        }
                    case 179:
                        var5 = '`';
                        var3 = var0;
                        if (!(var5 !== var7)) {
                            _fun94564_ip = 223;
                            continue _fun94564
                        }
                    case 190:
                        var5 = _closure1_slot18;
                        if (!(var8 != var4)) {
                            _fun94564_ip = 205;
                            continue _fun94564
                        }
                    case 198:
                        var4 = var4.key;
                        _fun94564_ip = 218;
                        continue _fun94564;
                    case 205:
                        var6 = var0;
                        if (!(var8 != var7)) {
                            _fun94564_ip = 215;
                            continue _fun94564
                        }
                    case 212:
                        var6 = var7;
                    case 215:
                        var4 = var6;
                    case 218:
                        var3 = var5.bind(var2)(var4);
                    case 223:
                        return var3;
                    case 225:
                        var1 = _closure1_slot18;
                        var1 = var1.bind(var2)(var0);
                        return var1;
                    case 236:
                        return var0;
                }
            };
            var _closure1_slot19 = var7;
            var6 = function() { // Original name: getEnv, environment: var1
                _fun94565: for (var _fun94565_ip = 0;;) switch (_fun94565_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var4 = 2;
                        var0 = var0[var4];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.isLinux;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun94565_ip = 130;
                            continue _fun94565
                        }
                    case 38:
                        var2 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var0 = var0[var4];
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.isMac;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun94565_ip = 118;
                            continue _fun94565
                        }
                    case 68:
                        var2 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var0 = var0[var4];
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.isWindows;
                        var0 = var0.bind(var2)();
                        var2 = _closure1_slot9;
                        if (var0) {
                            _fun94565_ip = 110;
                            continue _fun94565
                        }
                    case 102:
                        var0 = var2.BROWSER;
                        _fun94565_ip = 116;
                        continue _fun94565;
                    case 110:
                        var0 = var2.WINDOWS;
                    case 116:
                        _fun94565_ip = 128;
                        continue _fun94565;
                    case 118:
                        var2 = _closure1_slot9;
                        var0 = var2.MACOS;
                    case 128:
                        _fun94565_ip = 140;
                        continue _fun94565;
                    case 130:
                        var1 = _closure1_slot9;
                        var0 = var1.LINUX;
                    case 140:
                        return var0;
                }
            };
            var _closure1_slot20 = var6;
            var5 = function(arg0) { // Original name: codeToKey, environment: var1
                _fun94566: for (var _fun94566_ip = 0;;) switch (_fun94566_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure1_slot4;
                        var7 = undefined;
                        var1 = 3;
                        var2 = var2.bind(var7)(var0, var1);
                        var1 = 1;
                        var6 = var2[var1];
                        var1 = 2;
                        var5 = var2[var1];
                        var12 = var0;
                        var1 = var12[Symbol.iterator];
                        var12 = var1().next;
                        var2 = undefined;
                        var11 = undefined;
                        var13 = var12().value;
                        var14 = var1;
                        var14 = var14 === var7;
                        var2 = var14;
                        if (var14) {
                            _fun94566_ip = 65;
                            continue _fun94566
                        }
                    case 62:
                        var11 = var13;
                    case 65:
                        var11 = undefined;
                        var13 = var2;
                        if (var13) {
                            _fun94566_ip = 93;
                            continue _fun94566
                        }
                    case 73:
                        var13 = var12().value;
                        var14 = var1;
                        var14 = var14 === var7;
                        var2 = var14;
                        if (var14) {
                            _fun94566_ip = 93;
                            continue _fun94566
                        }
                    case 90:
                        var11 = var13;
                    case 93:
                        var8 = var11;
                        var11 = undefined;
                        var13 = var2;
                        if (var13) {
                            _fun94566_ip = 124;
                            continue _fun94566
                        }
                    case 104:
                        var12 = var12().value;
                        var13 = var1;
                        var13 = var13 === var7;
                        var2 = var13;
                        if (var13) {
                            _fun94566_ip = 124;
                            continue _fun94566
                        }
                    case 121:
                        var11 = var12;
                    case 124:
                        var4 = var11;
                        var11 = var2;
                        if (var11) {
                            _fun94566_ip = 136;
                            continue _fun94566
                        }
                    case 133:
                        var1.return();
                    case 136:
                        var9 = undefined;
                        var10 = undefined;
                        var11 = var4;
                        var4 = _closure1_slot9;
                        var4 = var4.LINUX;
                        if (!(var4 !== var11)) {
                            _fun94566_ip = 301;
                            continue _fun94566
                        }
                    case 160:
                        var4 = _closure1_slot9;
                        var4 = var4.MACOS;
                        if (!(var4 !== var11)) {
                            _fun94566_ip = 285;
                            continue _fun94566
                        }
                    case 174:
                        var4 = _closure1_slot9;
                        var4 = var4.WINDOWS;
                        if (!(var4 !== var11)) {
                            _fun94566_ip = 269;
                            continue _fun94566
                        }
                    case 188:
                        var4 = _closure1_slot9;
                        var4 = var4.BROWSER;
                        if (!(var4 !== var11)) {
                            _fun94566_ip = 218;
                            continue _fun94566
                        }
                    case 202:
                        var11 = _closure1_slot14;
                        var4 = var8;
                        var4 = '' + var4;
                        var9 = var11[var4];
                        _fun94566_ip = 312;
                        continue _fun94566;
                    case 218:
                        var11 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var4 = 4;
                        var4 = var12[var4];
                        var11 = var11.bind(var7)(var4);
                        var4 = var8;
                        var11 = var11.bind(var7)(var4);
                        var10 = var11;
                        var4 = null;
                        var11 = var4 == var11;
                        if (var11) {
                            _fun94566_ip = 330;
                            continue _fun94566
                        }
                    case 258:
                        var11 = _closure1_slot23;
                        var9 = var11.bind(var7)(var10);
                        _fun94566_ip = 312;
                        continue _fun94566;
                    case 269:
                        var11 = _closure1_slot13;
                        var10 = var8;
                        var10 = '' + var10;
                        var9 = var11[var10];
                        _fun94566_ip = 312;
                        continue _fun94566;
                    case 285:
                        var11 = _closure1_slot12;
                        var10 = var8;
                        var10 = '' + var10;
                        var9 = var11[var10];
                        _fun94566_ip = 312;
                        continue _fun94566;
                    case 301:
                        var10 = _closure1_slot11;
                        var8 = '' + var8;
                        var9 = var10[var8];
                    case 312:
                        var10 = var9;
                        var8 = null;
                        var10 = var8 != var10;
                        if (!var10) {
                            _fun94566_ip = 327;
                            continue _fun94566
                        }
                    case 324:
                        var8 = var9;
                    case 327:
                        var4 = var8;
                    case 330:
                        var8 = null;
                        if (!(var8 == var4)) {
                            _fun94566_ip = 400;
                            continue _fun94566
                        }
                    case 336:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var9 = 5;
                        var9 = var11[var9];
                        var10 = var10.bind(var7)(var9);
                        var9 = var10.getKeyboardEventShapeFromKeycode;
                        var9 = var9.bind(var10)(var6);
                        var10 = var8 != var9;
                        var8 = null;
                        if (!var10) {
                            _fun94566_ip = 398;
                            continue _fun94566
                        }
                    case 376:
                        var11 = _closure1_slot19;
                        var10 = var9.keyCode;
                        var9 = var9.key;
                        var8 = var11.bind(var7)(var10, var9, var5);
                    case 398:
                        return var8;
                    case 400:
                        var3 = _closure1_slot19;
                        var3 = var3.bind(var7)(var6, var4, var5);
                        return var3;
                    case 413:
                        CatchBlockStart(arg_register = 0);
                        if (var2) {
                            _fun94566_ip = 421;
                            continue _fun94566
                        }
                    case 418:
                        var1.return();
                    case 421:
                        throw var0;
                }
            };
            var _closure1_slot21 = var5;
            var4 = function(arg0) { // Original name: keyToCode, environment: var1
                _fun94567: for (var _fun94567_ip = 0;;) switch (_fun94567_ip) {
                    case 0:
                        var4 = arg0;
                        var10 = arguments[1];
                        var9 = arguments[2];
                        var5 = undefined;
                        if (!(var10 === var5)) {
                            _fun94567_ip = 26;
                            continue _fun94567
                        }
                    case 15:
                        var0 = _closure1_slot20;
                        var10 = var0.bind(var5)();
                    case 26:
                        if (!(var9 === var5)) {
                            _fun94567_ip = 43;
                            continue _fun94567
                        }
                    case 30:
                        var0 = _closure1_slot5;
                        var9 = var0.KEYBOARD_KEY;
                    case 43:
                        if (!(var10 === var5)) {
                            _fun94567_ip = 58;
                            continue _fun94567
                        }
                    case 47:
                        var0 = _closure1_slot20;
                        var10 = var0.bind(var5)();
                    case 58:
                        if (!(var9 === var5)) {
                            _fun94567_ip = 75;
                            continue _fun94567
                        }
                    case 62:
                        var0 = _closure1_slot5;
                        var9 = var0.KEYBOARD_KEY;
                    case 75:
                        var1 = null;
                        var2 = var1 == var4;
                        var0 = null;
                        if (var2) {
                            _fun94567_ip = 525;
                            continue _fun94567
                        }
                    case 89:
                        var2 = _closure1_slot5;
                        var2 = var2.KEYBOARD_KEY;
                        var2 = var9 === var2;
                        if (var2) {
                            _fun94567_ip = 123;
                            continue _fun94567
                        }
                    case 109:
                        var6 = _closure1_slot5;
                        var6 = var6.KEYBOARD_MODIFIER_KEY;
                        var2 = var9 === var6;
                    case 123:
                        var7 = var2;
                        if (!var2) {
                            _fun94567_ip = 143;
                            continue _fun94567
                        }
                    case 129:
                        var6 = _closure1_slot9;
                        var6 = var6.LINUX;
                        var7 = var10 === var6;
                    case 143:
                        var6 = true;
                        if (!(var7 !== var6)) {
                            _fun94567_ip = 505;
                            continue _fun94567
                        }
                    case 152:
                        var7 = var2;
                        if (!var2) {
                            _fun94567_ip = 172;
                            continue _fun94567
                        }
                    case 158:
                        var8 = _closure1_slot9;
                        var8 = var8.MACOS;
                        var7 = var10 === var8;
                    case 172:
                        if (!(var7 !== var6)) {
                            _fun94567_ip = 495;
                            continue _fun94567
                        }
                    case 179:
                        var7 = var2;
                        if (!var2) {
                            _fun94567_ip = 199;
                            continue _fun94567
                        }
                    case 185:
                        var8 = _closure1_slot9;
                        var8 = var8.WINDOWS;
                        var7 = var10 === var8;
                    case 199:
                        if (!(var7 !== var6)) {
                            _fun94567_ip = 462;
                            continue _fun94567
                        }
                    case 206:
                        var7 = var2;
                        if (!var7) {
                            _fun94567_ip = 226;
                            continue _fun94567
                        }
                    case 212:
                        var8 = _closure1_slot9;
                        var8 = var8.BROWSER;
                        var7 = var10 === var8;
                    case 226:
                        if (!(var7 !== var6)) {
                            _fun94567_ip = 426;
                            continue _fun94567
                        }
                    case 233:
                        if (!(var2 !== var6)) {
                            _fun94567_ip = 416;
                            continue _fun94567
                        }
                    case 240:
                        var2 = _closure1_slot5;
                        var2 = var2.MOUSE_BUTTON;
                        var2 = var9 === var2;
                        if (!(var2 !== var6)) {
                            _fun94567_ip = 376;
                            continue _fun94567
                        }
                    case 258:
                        var2 = _closure1_slot5;
                        var2 = var2.GAMEPAD_BUTTON;
                        var2 = var9 === var2;
                        if (!(var2 !== var6)) {
                            _fun94567_ip = 333;
                            continue _fun94567
                        }
                    case 276:
                        var2 = global;
                        var7 = var2.Error;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var6 = 'Unrecognized DeviceType ';
                        var2 = '.';
                        var12 = var8.bind(var6)(var9, var2);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var13 = var6;
                        var2 = new var13[var7](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var6;
                        throw var2;
                    case 333:
                        var2 = global;
                        var7 = var2.parseInt;
                        var8 = var4.replace;
                        var6 = 'GAMEPAD';
                        var2 = '';
                        var6 = var8.bind(var4)(var6, var2);
                        var2 = 10;
                        var2 = var7.bind(var5)(var6, var2);
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 376:
                        var6 = global;
                        var8 = var6.parseInt;
                        var9 = var4.replace;
                        var7 = 'MOUSE';
                        var6 = '';
                        var7 = var9.bind(var4)(var7, var6);
                        var6 = 10;
                        var2 = var8.bind(var5)(var7, var6);
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 416:
                        var6 = _closure1_slot10;
                        var2 = var6[var4];
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 426:
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var6 = 4;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = _closure1_slot23;
                        var6 = var6.bind(var5)(var4);
                        var2 = var7.bind(var5)(var6);
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 462:
                        var6 = '+';
                        if (!(var6 !== var4)) {
                            _fun94567_ip = 480;
                            continue _fun94567
                        }
                    case 470:
                        var6 = _closure1_slot8;
                        var6 = var6[var4];
                        _fun94567_ip = 490;
                        continue _fun94567;
                    case 480:
                        var7 = _closure1_slot8;
                        var6 = var7.plus;
                    case 490:
                        var2 = var6;
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 495:
                        var6 = _closure1_slot7;
                        var2 = var6[var4];
                        _fun94567_ip = 513;
                        continue _fun94567;
                    case 505:
                        var3 = _closure1_slot6;
                        var2 = var3[var4];
                    case 513:
                        var3 = var1 != var2;
                        var0 = null;
                        if (!var3) {
                            _fun94567_ip = 525;
                            continue _fun94567
                        }
                    case 522:
                        var0 = var2;
                    case 525:
                        if (!(var1 == var0)) {
                            _fun94567_ip = 580;
                            continue _fun94567
                        }
                    case 529:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 5;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.getKeyboardEventShapeFromKey;
                        var2 = var2.bind(var3)(var4);
                        var3 = var1 != var2;
                        var1 = null;
                        if (!var3) {
                            _fun94567_ip = 578;
                            continue _fun94567
                        }
                    case 572:
                        var1 = var2.keyCode;
                    case 578:
                        return var1;
                    case 580:
                        return var0;
                }
            };
            var _closure1_slot22 = var4;
            var3 = function(arg0) { // Original name: getKeyConversionForBrowser, environment: var1
                _fun94568: for (var _fun94568_ip = 0;;) switch (_fun94568_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = var3.replace;
                        var1 = /^(right|left) (shift|meta|ctrl|alt)$/;
                        var0 = '$2';
                        var3 = var2.bind(var3)(var1, var0);
                        var2 = var3.replace;
                        var1 = 'meta';
                        var0 = 'command';
                        var1 = var2.bind(var3)(var1, var0);
                        var3 = 'pause/break';
                        var2 = 'pause';
                        var0 = var3;
                        if (!(var2 !== var1)) {
                            _fun94568_ip = 84;
                            continue _fun94568
                        }
                    case 70:
                        var2 = 'break';
                        var0 = var3;
                        if (!(var2 !== var1)) {
                            _fun94568_ip = 84;
                            continue _fun94568
                        }
                    case 81:
                        var0 = var1;
                    case 84:
                        return var0;
                }
            };
            var _closure1_slot23 = var3;
            var0 = function(arg0) { // Original name: toMetaKeyIndexKey, environment: var1
                var1 = arg0;
                var0 = 'Key';
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot24 = var0;
            var8 = global;
            var13 = var8.Object;
            var12 = var13.defineProperty;
            var11 = {};
            var0 = true;
            var11.value = var0;
            var0 = '__esModule';
            var0 = var12.bind(var13)(var2, var0, var11);
            var0 = 0;
            var11 = var10[var0];
            var0 = undefined;
            var11 = var15.bind(var0)(var11);
            var _closure1_slot4 = var11;
            var11 = 1;
            var11 = var10[var11];
            var11 = var9.bind(var0)(var11);
            var12 = var11.KeyboardDeviceTypes;
            var _closure1_slot5 = var12;
            var17 = var11.LinuxKeyToCode;
            var _closure1_slot6 = var17;
            var22 = var11.MacosKeyToCode;
            var _closure1_slot7 = var22;
            var19 = var11.WindowsKeyToCode;
            var _closure1_slot8 = var19;
            var11 = var11.KeyboardEnvs;
            var _closure1_slot9 = var11;
            var14 = 2;
            var11 = var10[var14];
            var12 = var9.bind(var0)(var11);
            var11 = var12.isLinux;
            var11 = var11.bind(var12)();
            var16 = var17;
            if (var11) {
                _fun94562_ip = 307;
                continue _fun94562
            }
        case 249:
            var11 = var10[var14];
            var12 = var9.bind(var0)(var11);
            var11 = var12.isMac;
            var12 = var11.bind(var12)();
            var11 = var22;
            if (var12) {
                _fun94562_ip = 304;
                continue _fun94562
            }
        case 274:
            var12 = var10[var14];
            var13 = var9.bind(var0)(var12);
            var12 = var13.isWindows;
            var13 = var12.bind(var13)();
            var12 = var19;
            if (var13) {
                _fun94562_ip = 301;
                continue _fun94562
            }
        case 299:
            var12 = {};
        case 301:
            var11 = var12;
        case 304:
            var16 = var11;
        case 307:
            var _closure1_slot10 = var16;
            var12 = 3;
            var11 = var10[var12];
            var13 = var15.bind(var0)(var11);
            var11 = var13.invert;
            var20 = var11.bind(var13)(var17);
            var _closure1_slot11 = var20;
            var13 = '`';
            var11 = 223;
            var20[var11] = var13;
            var18 = var8.Object;
            var17 = var18.freeze;
            var17 = var17.bind(var18)(var20);
            var20 = var8.Object;
            var18 = var20.freeze;
            var17 = var10[var12];
            var21 = var15.bind(var0)(var17);
            var17 = var21.invert;
            var17 = var17.bind(var21)(var22);
            var17 = var18.bind(var20)(var17);
            var _closure1_slot12 = var17;
            var17 = var10[var12];
            var18 = var15.bind(var0)(var17);
            var17 = var18.invert;
            var19 = var17.bind(var18)(var19);
            var _closure1_slot13 = var19;
            var19[var11] = var13;
            var18 = var8.Object;
            var17 = var18.freeze;
            var17 = var17.bind(var18)(var19);
            var12 = var10[var12];
            var15 = var15.bind(var0)(var12);
            var12 = var15.invert;
            var17 = null;
            if (!(var17 == var16)) {
                _fun94562_ip = 475;
                continue _fun94562
            }
        case 473:
            var16 = {};
        case 475:
            var12 = var12.bind(var15)(var16);
            var _closure1_slot14 = var12;
            var14 = var10[var14];
            var15 = var9.bind(var0)(var14);
            var14 = var15.isMac;
            var14 = var14.bind(var15)();
            if (var14) {
                _fun94562_ip = 510;
                continue _fun94562
            }
        case 506:
            var12[var11] = var13;
        case 510:
            var11 = var8.Object;
            var8 = var11.freeze;
            var8 = var8.bind(var11)(var12);
            var8 = new Array(24);
            var11 = ['META', '⌘'];
            var8[0] = var11;
            var11 = ['CMD', '⌘'];
            var8[1] = var11;
            var11 = ['RIGHT META', 'RIGHT ⌘'];
            var8[2] = var11;
            var11 = ['RIGHT CMD', 'RIGHT ⌘'];
            var8[3] = var11;
            var11 = ['SHIFT', '⇧'];
            var8[4] = var11;
            var11 = ['RIGHT SHIFT', 'RIGHT ⇧'];
            var8[5] = var11;
            var11 = ['ALT', '⌥'];
            var8[6] = var11;
            var11 = ['RIGHT ALT', 'RIGHT ⌥'];
            var8[7] = var11;
            var11 = ['CTRL', '⌃'];
            var8[8] = var11;
            var11 = ['RIGHT CTRL', 'RIGHT ⌃'];
            var8[9] = var11;
            var11 = ['ENTER', '↵'];
            var8[10] = var11;
            var11 = ['BACKSPACE', '⌫'];
            var8[11] = var11;
            var11 = ['DEL', '⌦'];
            var8[12] = var11;
            var11 = ['ESC', '⎋'];
            var8[13] = var11;
            var11 = ['PAGEUP', '⇞'];
            var8[14] = var11;
            var11 = ['PAGEDOWN', '⇟'];
            var8[15] = var11;
            var11 = ['UP', '↑'];
            var8[16] = var11;
            var11 = ['DOWN', '↓'];
            var8[17] = var11;
            var11 = ['LEFT', '←'];
            var8[18] = var11;
            var11 = ['RIGHT', '→'];
            var8[19] = var11;
            var11 = ['HOME', '↖'];
            var8[20] = var11;
            var11 = ['END', '↘'];
            var8[21] = var11;
            var11 = ['TAB', '⇥'];
            var8[22] = var11;
            var11 = ['SPACE', '␣'];
            var8[23] = var11;
            var _closure1_slot15 = var8;
            var8 = function(arg0) { // Original name: toPrettyKey, environment: var1
                _fun94570: for (var _fun94570_ip = 0;;) switch (_fun94570_ip) {
                    case 0:
                        var1 = arg0;
                        var8 = _closure1_slot15;
                        var0 = var8.length;
                        var7 = 0;
                        var0 = var7 < var0;
                        var6 = undefined;
                        var5 = 2;
                        var4 = 1;
                        var3 = 0;
                        if (!var0) {
                            _fun94570_ip = 82;
                            continue _fun94570
                        }
                    case 34:
                        var2 = _closure1_slot4;
                        var0 = var8[var3];
                        var0 = var2.bind(var6)(var0, var5);
                        var10 = var0[var7];
                        var0 = var0[var4];
                        var2 = var1.toUpperCase;
                        var2 = var2.bind(var1)();
                        if (!(var10 !== var2)) {
                            _fun94570_ip = 84;
                            continue _fun94570
                        }
                    case 70:
                        var3 = var3 + 1;
                        var2 = var8.length;
                        if (var3 < var2) {
                            _fun94570_ip = 34;
                            continue _fun94570
                        }
                    case 82:
                        return var1;
                    case 84:
                        return var0;
                }
            };
            var _closure1_slot16 = var8;
            var8 = /shift|meta|ctrl|alt$/;
            var _closure1_slot17 = var8;
            var8 = 8;
            var8 = var10[var8];
            var10 = var9.bind(var0)(var8);
            var9 = var10.fileFinishedImporting;
            var8 = 'utils/web/KeyboardUtils.tsx';
            var8 = var9.bind(var10)(var8);
            var8 = function(arg0) { // Original name: getRawCodeFromKey, environment: var1
                _fun94571: for (var _fun94571_ip = 0;;) switch (_fun94571_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = arguments[1];
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun94571_ip = 23;
                            continue _fun94571
                        }
                    case 12:
                        var0 = _closure1_slot20;
                        var4 = var0.bind(var2)();
                    case 23:
                        var0 = _closure1_slot9;
                        var0 = var0.BROWSER;
                        if (!(var4 !== var0)) {
                            _fun94571_ip = 50;
                            continue _fun94571
                        }
                    case 40:
                        var0 = _closure1_slot10;
                        var0 = var0[var3];
                        _fun94571_ip = 75;
                        continue _fun94571;
                    case 50:
                        var4 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var0 = var1.bind(var2)(var3);
                    case 75:
                        return var0;
                }
            };
            var2.getRawCodeFromKey = var8;
            var2.getCodeToKeyLanguageCorrection = var7;
            var2.getEnv = var6;
            var2.codeToKey = var5;
            var2.keyToCode = var4;
            var2.getKeyConversionForBrowser = var3;
            var3 = function(arg0) { // Original name: toBrowserEvents, environment: var1
                _fun94572: for (var _fun94572_ip = 0;;) switch (_fun94572_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = {
                            'keyCode': 0,
                            'key': '',
                            'code': '',
                            'metaKey': false,
                            'shiftKey': false,
                            'altKey': false,
                            'ctrlKey': false
                        };
                        var _closure2_slot0 = var1;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun94572_ip = 54;
                            continue _fun94572
                        }
                    case 29:
                        var2 = var3.reduce;
                        var1 = function(arg0, arg1) { // Environment: var0
                            _fun94573: for (var _fun94573_ip = 0;;) switch (_fun94573_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = arg1;
                                    var3 = _closure1_slot21;
                                    var7 = undefined;
                                    var5 = var3.bind(var7)(var4);
                                    var _closure3_slot0 = var5;
                                    var3 = {};
                                    var11 = _closure2_slot0;
                                    var12 = var3;
                                    var8 = copyDataProperties(var12, var11);
                                    var9 = null;
                                    if (!(var9 != var5)) {
                                        _fun94573_ip = 192;
                                        continue _fun94573
                                    }
                                case 51:
                                    var10 = _closure1_slot17;
                                    var8 = var10.test;
                                    var8 = var8.bind(var10)(var5);
                                    if (!var8) {
                                        _fun94573_ip = 112;
                                        continue _fun94573
                                    }
                                case 68:
                                    var8 = 'meta';
                                    var8 = var8 === var5;
                                    if (var8) {
                                        _fun94573_ip = 87;
                                        continue _fun94573
                                    }
                                case 79:
                                    var10 = 'shift';
                                    var8 = var10 === var5;
                                case 87:
                                    if (var8) {
                                        _fun94573_ip = 98;
                                        continue _fun94573
                                    }
                                case 90:
                                    var10 = 'alt';
                                    var8 = var10 === var5;
                                case 98:
                                    if (var8) {
                                        _fun94573_ip = 109;
                                        continue _fun94573
                                    }
                                case 101:
                                    var10 = 'ctrl';
                                    var8 = var10 === var5;
                                case 109:
                                    if (var8) {
                                        _fun94573_ip = 154;
                                        continue _fun94573
                                    }
                                case 112:
                                    var10 = _closure1_slot22;
                                    var8 = _closure1_slot9;
                                    var8 = var8.BROWSER;
                                    var8 = var10.bind(var7)(var5, var8);
                                    if (!(var9 != var8)) {
                                        _fun94573_ip = 142;
                                        continue _fun94573
                                    }
                                case 136:
                                    var3.keyCode = var8;
                                case 142:
                                    var8 = var0.push;
                                    var8 = var8.bind(var0)(var3);
                                    return var0;
                                case 154:
                                    var6 = _closure2_slot0;
                                    var2 = _closure1_slot24;
                                    var5 = var2.bind(var7)(var5);
                                    var2 = true;
                                    var6[var5] = var2;
                                    var2 = var0.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var3 = _closure1_slot24;
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        var1 = true;
                                        var0[var2] = var1;
                                        return var0;
                                    };
                                    var1 = var2.bind(var0)(var1);
                                    return var1;
                                case 192:
                                    var2 = var0.push;
                                    var1 = {};
                                    var12 = var1;
                                    var11 = var3;
                                    var3 = copyDataProperties(var12, var11);
                                    var3 = 'combo';
                                    var1[var3] = var4;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var0 = new Array(0);
                        var0 = var2.bind(var3)(var1, var0);
                        _fun94572_ip = 58;
                        continue _fun94572;
                    case 54:
                        var0 = new Array(0);
                    case 58:
                        return var0;
                }
            };
            var2.toBrowserEvents = var3;
            var3 = function(arg0) { // Original name: toCombo, environment: var1
                _fun94575: for (var _fun94575_ip = 0;;) switch (_fun94575_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arguments[1];
                        var1 = arguments[2];
                        var5 = undefined;
                        if (!(var2 === var5)) {
                            _fun94575_ip = 28;
                            continue _fun94575
                        }
                    case 17:
                        var3 = _closure1_slot20;
                        var2 = var3.bind(var5)();
                    case 28:
                        var _closure2_slot0 = var2;
                        if (!(var1 === var5)) {
                            _fun94575_ip = 49;
                            continue _fun94575
                        }
                    case 36:
                        var2 = _closure1_slot5;
                        var1 = var2.KEYBOARD_KEY;
                    case 49:
                        var _closure2_slot1 = var1;
                        var3 = var4.replace;
                        var2 = /numpad plus/i;
                        var1 = '';
                        var4 = var3.bind(var4)(var2, var1);
                        var3 = var4.replace;
                        var2 = /NUMPAD \+/i;
                        var1 = 'numpad plus';
                        var4 = var3.bind(var4)(var2, var1);
                        var3 = var4.replace;
                        var2 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var1 = 6;
                        var1 = var6[var1];
                        var1 = var2.bind(var5)(var1);
                        var2 = var1.modKey;
                        var1 = /mod/i;
                        var3 = var3.bind(var4)(var1, var2);
                        var2 = var3.split;
                        var1 = '+';
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.trim;
                            var3 = var0.bind(var1)();
                            var2 = var3.replace;
                            var1 = 'plus';
                            var0 = '+';
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.reduce;
                        var1 = function(arg0, arg1) { // Environment: var0
                            _fun94577: for (var _fun94577_ip = 0;;) switch (_fun94577_ip) {
                                case 0:
                                    var0 = arg0;
                                    var11 = arg1;
                                    var10 = _closure1_slot15;
                                    var2 = var10.length;
                                    var9 = 0;
                                    var2 = var9 < var2;
                                    var6 = undefined;
                                    var8 = 2;
                                    var7 = 1;
                                    var4 = 0;
                                    var5 = var11;
                                    if (!var2) {
                                        _fun94577_ip = 103;
                                        continue _fun94577
                                    }
                                case 40:
                                    var3 = _closure1_slot4;
                                    var2 = var10[var4];
                                    var2 = var3.bind(var6)(var2, var8);
                                    var3 = var2[var9];
                                    var12 = var2[var7];
                                    var2 = var11.toUpperCase;
                                    var2 = var2.bind(var11)();
                                    if (!(var12 !== var2)) {
                                        _fun94577_ip = 93;
                                        continue _fun94577
                                    }
                                case 76:
                                    var4 = var4 + 1;
                                    var2 = var10.length;
                                    var5 = var11;
                                    if (var4 < var2) {
                                        _fun94577_ip = 40;
                                        continue _fun94577
                                    }
                                case 91:
                                    _fun94577_ip = 103;
                                    continue _fun94577;
                                case 93:
                                    var2 = var3.toLowerCase;
                                    var5 = var2.bind(var3)();
                                case 103:
                                    var4 = _closure1_slot22;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var4 = var4.bind(var6)(var5, var2, var1);
                                    var1 = null;
                                    if (!(var1 != var4)) {
                                        _fun94577_ip = 165;
                                        continue _fun94577
                                    }
                                case 131:
                                    var2 = var0.push;
                                    var5 = _closure2_slot1;
                                    var1 = new Array(3);
                                    var1[0] = var5;
                                    var1[1] = var4;
                                    var3 = _closure2_slot0;
                                    var1[2] = var3;
                                    var1 = var2.bind(var0)(var1);
                                case 165:
                                    return var0;
                            }
                        };
                        var0 = new Array(0);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.toCombo = var3;
            var3 = function(arg0) { // Original name: toString, environment: var1
                _fun94578: for (var _fun94578_ip = 0;;) switch (_fun94578_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = arguments[1];
                        var6 = undefined;
                        if (!(var0 === var6)) {
                            _fun94578_ip = 14;
                            continue _fun94578
                        }
                    case 12:
                        var0 = false;
                    case 14:
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var1
                            _fun94579: for (var _fun94579_ip = 0;;) switch (_fun94579_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2[Symbol.iterator];
                                    var2 = var0().next;
                                    var3 = var2().value;
                                    var1 = var0;
                                    var5 = undefined;
                                    var1 = var1 === var5;
                                    var8 = undefined;
                                    if (var1) {
                                        _fun94579_ip = 27;
                                        continue _fun94579
                                    }
                                case 24:
                                    var8 = var3;
                                case 27:
                                    var4 = undefined;
                                    if (var1) {
                                        _fun94579_ip = 57;
                                        continue _fun94579
                                    }
                                case 32:
                                    var6 = var2().value;
                                    var3 = var0;
                                    var3 = var3 === var5;
                                    var4 = undefined;
                                    var1 = var3;
                                    if (var3) {
                                        _fun94579_ip = 57;
                                        continue _fun94579
                                    }
                                case 51:
                                    var4 = var6;
                                    var1 = var3;
                                case 57:
                                    var7 = undefined;
                                    if (var1) {
                                        _fun94579_ip = 87;
                                        continue _fun94579
                                    }
                                case 62:
                                    var3 = var2().value;
                                    var2 = var0;
                                    var2 = var2 === var5;
                                    var7 = undefined;
                                    var1 = var2;
                                    if (var2) {
                                        _fun94579_ip = 87;
                                        continue _fun94579
                                    }
                                case 81:
                                    var7 = var3;
                                    var1 = var2;
                                case 87:
                                    if (var1) {
                                        _fun94579_ip = 93;
                                        continue _fun94579
                                    }
                                case 90:
                                    var0.return();
                                case 93:
                                    var1 = 'number';
                                    var0 = typeof var7;
                                    if (!(var1 !== var0)) {
                                        _fun94579_ip = 115;
                                        continue _fun94579
                                    }
                                case 104:
                                    var0 = _closure1_slot20;
                                    var7 = var0.bind(var5)();
                                case 115:
                                    var0 = _closure1_slot5;
                                    var0 = var0.KEYBOARD_KEY;
                                    if (!(var8 !== var0)) {
                                        _fun94579_ip = 259;
                                        continue _fun94579
                                    }
                                case 135:
                                    var0 = _closure1_slot5;
                                    var0 = var0.KEYBOARD_MODIFIER_KEY;
                                    if (!(var8 !== var0)) {
                                        _fun94579_ip = 259;
                                        continue _fun94579
                                    }
                                case 149:
                                    var0 = _closure1_slot5;
                                    var0 = var0.MOUSE_BUTTON;
                                    if (!(var8 !== var0)) {
                                        _fun94579_ip = 235;
                                        continue _fun94579
                                    }
                                case 163:
                                    var0 = _closure1_slot5;
                                    var0 = var0.GAMEPAD_BUTTON;
                                    if (!(var8 !== var0)) {
                                        _fun94579_ip = 209;
                                        continue _fun94579
                                    }
                                case 177:
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var2 = 'dev';
                                    var0 = ',';
                                    var0 = var3.bind(var2)(var8, var0, var4);
                                    _fun94579_ip = 233;
                                    continue _fun94579;
                                case 209:
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var3 = var2.concat;
                                    var2 = 'gamepad';
                                    var0 = var3.bind(var2)(var4);
                                case 233:
                                    _fun94579_ip = 257;
                                    continue _fun94579;
                                case 235:
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var3 = var2.concat;
                                    var2 = 'mouse';
                                    var0 = var3.bind(var2)(var4);
                                case 257:
                                    _fun94579_ip = 338;
                                    continue _fun94579;
                                case 259:
                                    var3 = _closure1_slot21;
                                    var2 = null;
                                    if (!(var2 == var7)) {
                                        _fun94579_ip = 283;
                                        continue _fun94579
                                    }
                                case 269:
                                    var1 = new Array(2);
                                    var1[0] = var8;
                                    var1[1] = var4;
                                    _fun94579_ip = 302;
                                    continue _fun94579;
                                case 283:
                                    var6 = new Array(3);
                                    var6[0] = var8;
                                    var6[1] = var4;
                                    var6[2] = var7;
                                    var1 = var6;
                                case 302:
                                    var1 = var3.bind(var5)(var1);
                                    if (!(var2 == var1)) {
                                        _fun94579_ip = 335;
                                        continue _fun94579
                                    }
                                case 311:
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var3 = var2.concat;
                                    var2 = 'UNK';
                                    var1 = var3.bind(var2)(var4);
                                case 335:
                                    var0 = var1;
                                case 338:
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.filter;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var2 = 7;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.isNotNullish;
                        var4 = var3.bind(var4)(var2);
                        if (var0) {
                            _fun94578_ip = 91;
                            continue _fun94578
                        }
                    case 75:
                        var2 = var4.join;
                        var0 = '+';
                        var0 = var2.bind(var4)(var0);
                        _fun94578_ip = 177;
                        continue _fun94578;
                    case 91:
                        var2 = _closure1_slot0;
                        var2 = var2.navigator;
                        var5 = var2.appVersion;
                        var3 = var5.indexOf;
                        var2 = 'Mac OS X';
                        var5 = var3.bind(var5)(var2);
                        var2 = -1;
                        var3 = var4;
                        if (!(var2 !== var5)) {
                            _fun94578_ip = 151;
                            continue _fun94578
                        }
                    case 137:
                        var2 = var4.map;
                        var1 = _closure1_slot16;
                        var3 = var2.bind(var4)(var1);
                    case 151:
                        var2 = var3.join;
                        var1 = ' + ';
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.toUpperCase;
                        var0 = var1.bind(var2)();
                    case 177:
                        return var0;
                }
            };
            var2.toString = var3;
            var3 = function(arg0, arg1) { // Original name: areKeyCombosEqual, environment: var1
                _fun94580: for (var _fun94580_ip = 0;;) switch (_fun94580_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = arg1;
                        var2 = arguments[2];
                        var _closure2_slot0 = var0;
                        var4 = undefined;
                        if (!(var2 === var4)) {
                            _fun94580_ip = 23;
                            continue _fun94580
                        }
                    case 21:
                        var2 = false;
                    case 23:
                        var _closure2_slot1 = var2;
                        var2 = var3.length;
                        var0 = var0.length;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun94580_ip = 62;
                            continue _fun94580
                        }
                    case 44:
                        var2 = var3.every;
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun94581: for (var _fun94581_ip = 0;;) switch (_fun94581_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2[Symbol.iterator];
                                    var2 = var0().next;
                                    var3 = var2().value;
                                    var1 = var0;
                                    var7 = undefined;
                                    var1 = var1 === var7;
                                    var6 = undefined;
                                    if (var1) {
                                        _fun94581_ip = 27;
                                        continue _fun94581
                                    }
                                case 24:
                                    var6 = var3;
                                case 27:
                                    var5 = undefined;
                                    if (var1) {
                                        _fun94581_ip = 57;
                                        continue _fun94581
                                    }
                                case 32:
                                    var4 = var2().value;
                                    var3 = var0;
                                    var3 = var3 === var7;
                                    var5 = undefined;
                                    var1 = var3;
                                    if (var3) {
                                        _fun94581_ip = 57;
                                        continue _fun94581
                                    }
                                case 51:
                                    var5 = var4;
                                    var1 = var3;
                                case 57:
                                    var3 = undefined;
                                    if (var1) {
                                        _fun94581_ip = 87;
                                        continue _fun94581
                                    }
                                case 62:
                                    var4 = var2().value;
                                    var2 = var0;
                                    var2 = var2 === var7;
                                    var3 = undefined;
                                    var1 = var2;
                                    if (var2) {
                                        _fun94581_ip = 87;
                                        continue _fun94581
                                    }
                                case 81:
                                    var3 = var4;
                                    var1 = var2;
                                case 87:
                                    if (var1) {
                                        _fun94581_ip = 93;
                                        continue _fun94581
                                    }
                                case 90:
                                    var0.return();
                                case 93:
                                    var4 = _closure1_slot4;
                                    var2 = _closure2_slot0;
                                    var0 = arg1;
                                    var2 = var2[var0];
                                    var0 = 3;
                                    var7 = var4.bind(var7)(var2, var0);
                                    var0 = 0;
                                    var0 = var7[var0];
                                    var2 = 1;
                                    var4 = var7[var2];
                                    var2 = 2;
                                    var2 = var7[var2];
                                    var0 = var6 === var0;
                                    if (!var0) {
                                        _fun94581_ip = 154;
                                        continue _fun94581
                                    }
                                case 150:
                                    var0 = var5 === var4;
                                case 154:
                                    if (!var0) {
                                        _fun94581_ip = 174;
                                        continue _fun94581
                                    }
                                case 157:
                                    var1 = _closure2_slot1;
                                    var1 = !var1;
                                    if (var1) {
                                        _fun94581_ip = 171;
                                        continue _fun94581
                                    }
                                case 167:
                                    var1 = var3 === var2;
                                case 171:
                                    var0 = var1;
                                case 174:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1);
                    case 62:
                        return var0;
                }
            };
            var2.areKeyCombosEqual = var3;
            var1 = function(arg0) { // Original name: isKeyboardActivatedMouseEvent, environment: var1
                _fun94582: for (var _fun94582_ip = 0;;) switch (_fun94582_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun94582_ip = 23;
                            continue _fun94582
                        }
                    case 12:
                        var3 = 'object';
                        var2 = typeof var1;
                        var0 = var3 === var2;
                    case 23:
                        if (!var0) {
                            _fun94582_ip = 34;
                            continue _fun94582
                        }
                    case 26:
                        var2 = 'nativeEvent';
                        var0 = var2 in var1;
                    case 34:
                        if (!var0) {
                            _fun94582_ip = 55;
                            continue _fun94582
                        }
                    case 37:
                        var2 = var1.nativeEvent;
                        var3 = var2.clientX;
                        var2 = 0;
                        var0 = var2 === var3;
                    case 55:
                        if (!var0) {
                            _fun94582_ip = 76;
                            continue _fun94582
                        }
                    case 58:
                        var1 = var1.nativeEvent;
                        var2 = var1.clientY;
                        var1 = 0;
                        var0 = var1 === var2;
                    case 76:
                        return var0;
                }
            };
            var2.isKeyboardActivatedMouseEvent = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4483, 478, 22, 12339, 12340, 12341, 1304, 2]);