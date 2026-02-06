// utils/web/DesktopNativeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun60281: for (var _fun60281_ip = 0;;) switch (_fun60281_ip) {
        case 0:
            var11 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var12;
            var0 = function arg0, arg1() {
                _fun60282: for (var _fun60282_ip = 0;;) switch (_fun60282_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun60282_ip = 46;
                            continue _fun60282
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun60282_ip = 55;
                            continue _fun60282
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun60282_ip = 343;
                            continue _fun60282
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun60282_ip = 323;
                            continue _fun60282
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun60282_ip = 283;
                            continue _fun60282
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun60282_ip = 270;
                            continue _fun60282
                        }
                    case 110:
                        var6 = {};
                        var8 = var6.toString;
                        var6 = var8.call;
                        var10 = var6.bind(var8)(var2);
                        var9 = var10.slice;
                        var8 = 8;
                        var6 = -1;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = 'Object';
                        var6 = var6 === var8;
                        if (!var6) {
                            _fun60282_ip = 163;
                            continue _fun60282
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun60282_ip = 179;
                            continue _fun60282
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun60282_ip = 249;
                            continue _fun60282
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun60282_ip = 249;
                            continue _fun60282
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun60282_ip = 234;
                            continue _fun60282
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun60282_ip = 247;
                            continue _fun60282
                        }
                    case 234:
                        var8 = _closure1_slot23;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun60282_ip = 265;
                        continue _fun60282;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun60282_ip = 283;
                        continue _fun60282;
                    case 270:
                        var6 = _closure1_slot23;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun60282_ip = 323;
                            continue _fun60282
                        }
                    case 289:
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 323:
                        if (!var3) {
                            _fun60282_ip = 330;
                            continue _fun60282
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun60283: for (var _fun60283_ip = 0;;) switch (_fun60283_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun60283_ip = 56;
                                        continue _fun60283
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot1 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun60283_ip = 67;
                                    continue _fun60283;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        return var0;
                    case 343:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function arg0, arg1() {
                _fun60284: for (var _fun60284_ip = 0;;) switch (_fun60284_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun60284_ip = 23;
                            continue _fun60284
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun60284_ip = 33;
                            continue _fun60284
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var0 = var0.bind(var2)(var1);
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun60284_ip = 70;
                            continue _fun60284
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun60284_ip = 55;
                            continue _fun60284
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var7 = function arg0() {
                _fun60285: for (var _fun60285_ip = 0;;) switch (_fun60285_ip) {
                    case 0:
                        var0 = arg0;
                    case 3: // try_start_0
                        var1 = global;
                        var3 = var1.decodeURIComponent;
                        var2 = var0;
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.replace;
                        var3 = _closure1_slot16;
                        var2 = '$1';
                        var5 = var4.bind(var5)(var3, var2);
                        var4 = var5.replace;
                        var3 = /(.+)@([a-zA-Z0-9]+)$/;
                        var2 = '$1.$2';
                        var4 = var4.bind(var5)(var3, var2);
                        var3 = var4.replace;
                        var2 = _closure1_slot15;
                        var1 = '_';
                        var1 = var3.bind(var4)(var2, var1);
                    case 95: // try_end0
                        return var1;
                    case 97: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = var0;
                        var3 = var4.replace;
                        var2 = _closure1_slot17;
                        var1 = '$1';
                        var4 = var3.bind(var4)(var2, var1);
                        var3 = var4.replace;
                        var2 = /(.+)%40([a-zA-Z0-9]+)$/;
                        var1 = '$1.$2';
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.replace;
                        var1 = _closure1_slot15;
                        var0 = '_';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot24 = var7;
            var6 = function() {
                var0 = undefined;
                var3 = _closure1_slot26;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot25 = var6;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot4;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun60289: for (var _fun60289_ip = 0;;) switch (_fun60289_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60289_ip = 189;
                                    continue _fun60289
                                }
                            case 10:
                                var1 = global;
                                var2 = var1.fetch;
                                var5 = var1.Request;
                                var1 = var5.prototype;
                                var3 = Object.create(var1, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var9 = arg0;
                                var8 = {
                                    'method': 'GET',
                                    'mode': 'cors'
                                };
                                var10 = var3;
                                var1 = new var10[var5](var9, var8, var7);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var6 = undefined;
                                var1 = var2.bind(var6)(var1);
                                SaveGenerator(address = 72);
                            case 70:
                                return var1;
                            case 72:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60289_ip = 186;
                                    continue _fun60289
                                }
                            case 78:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var5 = 3;
                                var2 = var2[var5];
                                var7 = var4.bind(var6)(var2);
                                var4 = var1.status;
                                var2 = 200;
                                var4 = var2 === var4;
                                var2 = 'Data fetch unsuccessful';
                                var2 = var7.bind(var6)(var4, var2);
                                var2 = var1.arrayBuffer;
                                var2 = var2.bind(var1)();
                                SaveGenerator(address = 139);
                            case 137:
                                return var2;
                            case 139:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun60289_ip = 183;
                                    continue _fun60289
                                }
                            case 145:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var3 = var3[var5];
                                var5 = var4.bind(var6)(var3);
                                var3 = null;
                                var4 = var3 != var2;
                                var3 = 'Data is null';
                                var3 = var5.bind(var6)(var4, var3);
                                return var2;
                            case 183:
                                return var2;
                            case 186:
                                return var1;
                            case 189:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot26 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot26 = var0;
            var5 = function arg0() {
                var2 = _closure1_slot25;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var _closure1_slot27 = var5;
            var0 = function arg0() {
                _fun60291: for (var _fun60291_ip = 0;;) switch (_fun60291_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = {};
                        var6 = _closure1_slot12;
                        var7 = var1.id;
                        var2 = null;
                        var8 = var2 != var7;
                        var3 = '';
                        var5 = var3;
                        if (!var8) {
                            _fun60291_ip = 36;
                            continue _fun60291
                        }
                    case 33:
                        var5 = var7;
                    case 36:
                        var5 = var6[var5];
                        var0.id = var5;
                        var5 = global;
                        var8 = var5.parseInt;
                        var5 = var1.id;
                        var6 = var2 != var5;
                        var7 = var3;
                        if (!var6) {
                            _fun60291_ip = 70;
                            continue _fun60291
                        }
                    case 67:
                        var7 = var5;
                    case 70:
                        var6 = undefined;
                        var5 = 10;
                        var5 = var8.bind(var6)(var7, var5);
                        var0.nativeProcessObserverId = var5;
                        var5 = var1.gameName;
                        if (!(var2 == var5)) {
                            _fun60291_ip = 101;
                            continue _fun60291
                        }
                    case 96:
                        var5 = var1.name;
                    case 101:
                        var0.name = var5;
                        var5 = var1.origGameName;
                        var0.origGameName = var5;
                        var5 = var1.name;
                        var7 = var2 != var5;
                        if (!var7) {
                            _fun60291_ip = 131;
                            continue _fun60291
                        }
                    case 128:
                        var3 = var5;
                    case 131:
                        var0.processName = var3;
                        var3 = var1.hidden;
                        var0.hidden = var3;
                        var3 = var1.elevated;
                        var0.elevated = var3;
                        var5 = var1.sandboxed;
                        var3 = var2 != var5;
                        if (!var3) {
                            _fun60291_ip = 176;
                            continue _fun60291
                        }
                    case 173:
                        var3 = var5;
                    case 176:
                        var0.sandboxed = var3;
                        var3 = var1.lastFocused;
                        var0.lastFocused = var3;
                        var3 = var1.exePath;
                        var0.exePath = var3;
                        var3 = var1.exeName;
                        var0.exeName = var3;
                        var3 = var1.cmdLine;
                        var0.cmdLine = var3;
                        var3 = var1.distributor;
                        var0.distributor = var3;
                        var3 = var1.sku;
                        var0.sku = var3;
                        var3 = var1.pid;
                        var0.pid = var3;
                        var3 = var1.pidPath;
                        if (!(var2 == var3)) {
                            _fun60291_ip = 272;
                            continue _fun60291
                        }
                    case 268:
                        var3 = new Array(0);
                    case 272:
                        var0.pidPath = var3;
                        var3 = var1.gameMetadata;
                        var0.gameMetadata = var3;
                        var5 = var1.windowHandle;
                        var7 = var2 != var5;
                        var3 = null;
                        if (!var7) {
                            _fun60291_ip = 306;
                            continue _fun60291
                        }
                    case 303:
                        var3 = var5;
                    case 306:
                        var0.windowHandle = var3;
                        var3 = var1.fullscreenType;
                        if (!(var2 == var3)) {
                            _fun60291_ip = 353;
                            continue _fun60291
                        }
                    case 321:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 4;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.RunningProcessFullscreenType;
                        var3 = var4.UNKNOWN;
                    case 353:
                        var0.fullscreenType = var3;
                        var3 = var1.isLauncher;
                        var2 = var2 != var3;
                        if (!var2) {
                            _fun60291_ip = 374;
                            continue _fun60291
                        }
                    case 371:
                        var2 = var3;
                    case 374:
                        var0.isLauncher = var2;
                        var1 = var1.executableFingerprint;
                        var0.executableFingerprint = var1;
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var1 = function arg0, arg1() {
                _fun60292: for (var _fun60292_ip = 0;;) switch (_fun60292_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun60292_ip = 89;
                            continue _fun60292
                        }
                    case 9:
                        var2 = var3.startsWith;
                        var0 = 'image/';
                        var0 = var2.bind(var3)(var0);
                        if (!var0) {
                            _fun60292_ip = 89;
                            continue _fun60292
                        }
                    case 29:
                        var2 = var3.split;
                        var0 = '/';
                        var2 = var2.bind(var3)(var0);
                        var0 = 1;
                        var3 = var2[var0];
                        var2 = var1 == var3;
                        var0 = undefined;
                        if (var2) {
                            _fun60292_ip = 69;
                            continue _fun60292
                        }
                    case 59:
                        var2 = var3.toLowerCase;
                        var0 = var2.bind(var3)();
                    case 69:
                        var2 = 'jpeg';
                        if (!(var2 !== var0)) {
                            _fun60292_ip = 231;
                            continue _fun60292
                        }
                    case 82:
                        if (!(var1 == var0)) {
                            _fun60292_ip = 229;
                            continue _fun60292
                        }
                    case 89:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 5;
                        var2 = var2[var5];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var2);
                        var3 = var6.toURLSafe;
                        var2 = arg0;
                        var2 = var3.bind(var6)(var2);
                        if (!(var1 == var2)) {
                            _fun60292_ip = 134;
                            continue _fun60292
                        }
                    case 132:
                        return var4;
                    case 134:
                        var7 = var2.pathname;
                        var3 = var1 == var7;
                        var2 = undefined;
                        if (var3) {
                            _fun60292_ip = 201;
                            continue _fun60292
                        }
                    case 149:
                        var6 = var7.split;
                        var3 = '.';
                        var6 = var6.bind(var7)(var3);
                        var3 = var1 == var6;
                        var2 = undefined;
                        if (var3) {
                            _fun60292_ip = 201;
                            continue _fun60292
                        }
                    case 172:
                        var3 = var6.pop;
                        var6 = var3.bind(var6)();
                        var3 = var1 == var6;
                        var2 = undefined;
                        if (var3) {
                            _fun60292_ip = 201;
                            continue _fun60292
                        }
                    case 191:
                        var3 = var6.toLowerCase;
                        var2 = var3.bind(var6)();
                    case 201:
                        var3 = var1 != var2;
                        var1 = undefined;
                        if (!var3) {
                            _fun60292_ip = 227;
                            continue _fun60292
                        }
                    case 210:
                        var3 = var2.length;
                        var3 = var3 <= var5;
                        var1 = undefined;
                        if (!var3) {
                            _fun60292_ip = 227;
                            continue _fun60292
                        }
                    case 224:
                        var1 = var2;
                    case 227:
                        return var1;
                    case 229:
                        return var0;
                    case 231:
                        var0 = 'jpg';
                        return var0;
                }
            };
            var _closure1_slot29 = var1;
            var0 = function arg0() {
                _fun60293: for (var _fun60293_ip = 0;;) switch (_fun60293_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isDesktop;
                        var3 = var3.bind(var4)();
                        if (!var3) {
                            _fun60293_ip = 60;
                            continue _fun60293
                        }
                    case 41: // try_start_0
                        var3 = _closure1_slot21;
                        var2 = var3.send;
                        var1 = var2.bind(var3)(var1);
                    case 56: // try_end0
                        _fun60293_ip = 60;
                        continue _fun60293;
                    case 58: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 60:
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var3 = global;
            var13 = var3.Object;
            var9 = var13.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var13)(var2, var0, var4);
            var14 = 0;
            var4 = var12[var14];
            var0 = undefined;
            var4 = var8.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var13 = 1;
            var4 = var12[var13];
            var4 = var8.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var9 = 2;
            var4 = var12[var9];
            var4 = var11.bind(var0)(var4);
            var4 = var4.NativeFeatures;
            var _closure1_slot5 = var4;
            var4 = var3.window;
            var8 = var4.DiscordNative;
            var _closure1_slot6 = var8;
            var16 = var3.Set;
            var4 = var16.prototype;
            var15 = Object.create(var4, {
                constructor: {
                    value: var16
                }
            });
            var20 = ['jpg', 'jpeg', 'jfif', 'png'];
            var21 = var15;
            var4 = new var21[var16](var20, var19);
            var4 = var4 instanceof Object ? var4 : var15;
            var _closure1_slot7 = var4;
            var16 = var3.Set;
            var4 = var16.prototype;
            var15 = Object.create(var4, {
                constructor: {
                    value: var16
                }
            });
            var20 = ['jpg', 'jpeg', 'jfif', 'png', 'webp', 'gif', 'tiff', 'bmp', 'avif'];
            var21 = var15;
            var4 = new var21[var16](var20, var19);
            var4 = var4 instanceof Object ? var4 : var15;
            var _closure1_slot8 = var4;
            var15 = null;
            var _closure1_slot9 = var15;
            var _closure1_slot10 = var15;
            var _closure1_slot11 = var15;
            var4 = {};
            var _closure1_slot12 = var4;
            if (!(var15 != var8)) {
                _fun60281_ip = 448;
                continue _fun60281
            }
        case 317:
            var16 = var8.remoteApp;
            var4 = var16.getVersion;
            var17 = var4.bind(var16)();
            var16 = var17.split;
            var4 = '.';
            var17 = var16.bind(var17)(var4);
            var16 = var17.map;
            var4 = function(arg0) { // Environment: var10
                var0 = global;
                var2 = var0.parseInt;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var4 = var16.bind(var17)(var4);
            _closure1_slot9 = var4;
            var4 = var8.remoteApp;
            var4 = var4.getModuleVersions;
            var16 = var15 == var4;
            var4 = undefined;
            if (var16) {
                _fun60281_ip = 403;
                continue _fun60281
            }
        case 387:
            var17 = var8.remoteApp;
            var16 = var17.getModuleVersions;
            var4 = var16.bind(var17)();
        case 403:
            _closure1_slot11 = var4;
            var4 = var8.remoteApp;
            var4 = var4.getBuildNumber;
            var15 = var15 == var4;
            var4 = undefined;
            if (var15) {
                _fun60281_ip = 444;
                continue _fun60281
            }
        case 428:
            var15 = var8.remoteApp;
            var8 = var15.getBuildNumber;
            var4 = var8.bind(var15)();
        case 444:
            _closure1_slot10 = var4;
        case 448:
            var8 = var3.Set;
            var3 = var8.prototype;
            var21 = Object.create(var3, {
                constructor: {
                    value: var8
                }
            });
            var20 = ['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice'];
            var3 = new var21[var8](var20, var19);
            var3 = false;
            var _closure1_slot13 = var3;
            var3 = 'lastImageSaveDirectory';
            var _closure1_slot14 = var3;
            var3 = /[<>:"\/\\|?*@]/g;
            var _closure1_slot15 = var3;
            var3 = /(\.[a-zA-Z0-9]+):[^.]*$/;
            var _closure1_slot16 = var3;
            var3 = /(\.[a-zA-Z0-9]+)%3A.+$/;
            var _closure1_slot17 = var3;
            var3 = /[^a-zA-Z0-9]/g;
            var _closure1_slot18 = var3;
            var3 = /\.[^.]*$/;
            var _closure1_slot19 = var3;
            var8 = {};
            var3 = 'saved';
            var8.SAVED = var3;
            var3 = 'canceled';
            var8.CANCELED = var3;
            var3 = 'errored';
            var8.ERRORED = var3;
            var _closure1_slot20 = var8;
            var4 = {};
            var4.Camera = var14;
            var3 = 'Camera';
            var4[var14] = var3;
            var4.Microphone = var13;
            var3 = 'Microphone';
            var4[var13] = var3;
            var4.Photo = var9;
            var3 = 'Photo';
            var4[var9] = var3;
            var9 = 3;
            var4.InputMonitoring = var9;
            var3 = 'InputMonitoring';
            var4[var9] = var3;
            var9 = 4;
            var4.ScreenRecording = var9;
            var3 = 'ScreenRecording';
            var4[var9] = var3;
            var3 = {};
            var9 = 'VIDEO';
            var3.VIDEO = var9;
            var9 = 'MUTE';
            var3.MUTE = var9;
            var9 = 'DEAFEN';
            var3.DEAFEN = var9;
            var9 = 'DISCONNECT';
            var3.DISCONNECT = var9;
            var9 = {};
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.nativeModules;
                var1 = var2.requireModule;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.requireModule = var13;
            var13 = function arg0() {
                _fun60296: for (var _fun60296_ip = 0;;) switch (_fun60296_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60296_ip = 87;
                            continue _fun60296
                        }
                    case 34:
                        var0 = global;
                        var3 = var0.Promise;
                        var2 = var3.reject;
                        var5 = var0.Error;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'not embedded';
                        var7 = var4;
                        var0 = new var7[var5](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var0 = var2.bind(var3)(var0);
                        _fun60296_ip = 111;
                        continue _fun60296;
                    case 87:
                        var1 = _closure1_slot6;
                        var3 = var1.nativeModules;
                        var2 = var3.ensureModule;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 111:
                        return var0;
                }
            };
            var9.ensureModule = var13;
            var14 = function() {
                _fun60297: for (var _fun60297_ip = 0;;) switch (_fun60297_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var0 = var0.nativeModules;
                        var0 = var0.canBootstrapNewUpdater;
                        if (var0) {
                            _fun60297_ip = 26;
                            continue _fun60297
                        }
                    case 24:
                        var0 = false;
                    case 26:
                        return var0;
                }
            };
            var13 = 'canBootstrapNewUpdater';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var13 = function() {
                var0 = _closure1_slot6;
                var1 = var0.crashReporter;
                var0 = var1.getMetadata;
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.getCrashReporterMetadata = var13;
            var13 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60301: for (var _fun60301_ip = 0;;) switch (_fun60301_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60301_ip = 58;
                                    continue _fun60301
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var4 = var1.settings;
                                var3 = var4.get;
                                var2 = _closure2_slot0;
                                var1 = _closure2_slot1;
                                var1 = var3.bind(var4)(var2, var1);
                                SaveGenerator(address = 46);
                            case 44:
                                return var1;
                            case 46:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60301_ip = 55;
                                    continue _fun60301
                                }
                            case 52:
                                return var1;
                            case 55:
                                return var1;
                            case 58:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.getSetting = var13;
            var13 = function() {
                _fun60302: for (var _fun60302_ip = 0;;) switch (_fun60302_ip) {
                    case 0:
                        var5 = this;
                        var0 = undefined;
                        var1 = undefined;
                    case 7: // try_start_0
                        var3 = var5.requireModule;
                        var2 = 'discord_overlay2';
                        var1 = var3.bind(var5)(var2);
                    case 24: // try_end0
                        _fun60302_ip = 28;
                        continue _fun60302;
                    case 26: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 28:
                        var3 = var1;
                        var2 = var3;
                        if (!var3) {
                            _fun60302_ip = 46;
                            continue _fun60302
                        }
                    case 37:
                        var3 = var1;
                        var2 = var3.reset;
                    case 46:
                        if (!var2) {
                            _fun60302_ip = 62;
                            continue _fun60302
                        }
                    case 49:
                        var3 = var1;
                        var2 = var3.reset;
                        var2 = var2.bind(var3)();
                    case 62:
                        var4 = var1;
                        var3 = var4;
                        if (!var4) {
                            _fun60302_ip = 80;
                            continue _fun60302
                        }
                    case 71:
                        var4 = var1;
                        var3 = var4.disconnectAllProcesses;
                    case 80:
                        var2 = var3;
                        if (!var3) {
                            _fun60302_ip = 95;
                            continue _fun60302
                        }
                    case 86:
                        var3 = var1;
                        var2 = var3.destroyHostProcess;
                    case 95:
                        if (!var2) {
                            _fun60302_ip = 121;
                            continue _fun60302
                        }
                    case 98:
                        var2 = var1;
                        var1 = var2.disconnectAllProcesses;
                        var1 = var1.bind(var2)();
                        var1 = var2.destroyHostProcess;
                        var1 = var1.bind(var2)();
                    case 121:
                        var2 = _closure1_slot6;
                        var3 = var2.remotePowerMonitor;
                        var2 = var3.removeAllListeners;
                        var2 = var2.bind(var3)();
                        var4 = global;
                        var6 = var4.window;
                        var6 = var6.location;
                        var6 = var6.origin;
                        var4 = var4.window;
                        var4 = var4.GLOBAL_ENV;
                        var4 = var4.MIGRATION_SOURCE_ORIGIN;
                        var4 = var6 === var4;
                        var3 = var4;
                        if (!var4) {
                            _fun60302_ip = 251;
                            continue _fun60302
                        }
                    case 191:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 7;
                        var4 = var9[var4];
                        var4 = var8.bind(var0)(var4);
                        var7 = var4.Storage;
                        var6 = var7.get;
                        var4 = 8;
                        var4 = var9[var4];
                        var4 = var8.bind(var0)(var4);
                        var4 = var4.DOMAIN_MIGRATION_SUCCESS_KEY;
                        var6 = var6.bind(var7)(var4);
                        var4 = true;
                        var3 = var4 !== var6;
                    case 251:
                        var2 = var3;
                        if (!var3) {
                            _fun60302_ip = 278;
                            continue _fun60302
                        }
                    case 257:
                        var4 = var5.supportsFeature;
                        var3 = _closure1_slot5;
                        var3 = var3.USER_DATA_CACHE;
                        var2 = var4.bind(var5)(var3);
                    case 278:
                        if (!var2) {
                            _fun60302_ip = 342;
                            continue _fun60302
                        }
                    case 281:
                        var2 = _closure1_slot6;
                        var3 = var2.userDataCache;
                        var2 = var3.cacheUserData;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var4 = var1.Storage;
                        var1 = var4.stringify;
                        var1 = var1.bind(var4)();
                        var1 = var2.bind(var3)(var1);
                    case 342:
                        return var0;
                }
            };
            var9.beforeUnload = var13;
            var13 = function arg0, arg1, arg2, arg3() {
                var3 = arg1;
                var1 = this;
                var0 = var1.getDiscordUtils;
                var6 = var0.bind(var1)();
                var5 = var6.inputEventRegister;
                var0 = global;
                var2 = var0.parseInt;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var1 = '';
                var0 = arg0;
                var1 = var4.bind(var1)(var0);
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun60304: for (var _fun60304_ip = 0;;) switch (_fun60304_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = var5[Symbol.iterator];
                            var5 = var0().next;
                            var2 = var5().value;
                            var1 = var0;
                            var7 = undefined;
                            var1 = var1 === var7;
                            var4 = undefined;
                            if (var1) {
                                _fun60304_ip = 27;
                                continue _fun60304
                            }
                        case 24:
                            var4 = var2;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun60304_ip = 57;
                                continue _fun60304
                            }
                        case 32:
                            var6 = var5().value;
                            var2 = var0;
                            var2 = var2 === var7;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun60304_ip = 57;
                                continue _fun60304
                            }
                        case 51:
                            var3 = var6;
                            var1 = var2;
                        case 57:
                            var2 = undefined;
                            if (var1) {
                                _fun60304_ip = 87;
                                continue _fun60304
                            }
                        case 62:
                            var6 = var5().value;
                            var5 = var0;
                            var5 = var5 === var7;
                            var2 = undefined;
                            var1 = var5;
                            if (var5) {
                                _fun60304_ip = 87;
                                continue _fun60304
                            }
                        case 81:
                            var2 = var6;
                            var1 = var5;
                        case 87:
                            if (var1) {
                                _fun60304_ip = 93;
                                continue _fun60304
                            }
                        case 90:
                            var0.return();
                        case 93:
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 !== var0)) {
                                _fun60304_ip = 118;
                                continue _fun60304
                            }
                        case 104:
                            var0 = new Array(2);
                            var0[0] = var4;
                            var0[1] = var3;
                            _fun60304_ip = 137;
                            continue _fun60304;
                        case 118:
                            var1 = new Array(3);
                            var1[0] = var4;
                            var1[1] = var3;
                            var1[2] = var2;
                            var0 = var1;
                        case 137:
                            return var0;
                    }
                };
                var9 = var2.bind(var3)(var1);
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var10 = var4;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var0;
            };
            var9.inputEventRegister = var13;
            var13 = function arg0() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var3 = var0.bind(var1)();
                var2 = var3.inputEventUnregister;
                var0 = global;
                var4 = var0.parseInt;
                var0 = undefined;
                var1 = arg0;
                var1 = var4.bind(var0)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var9.inputEventUnregister = var13;
            var13 = function arg0() {
                _fun60306: for (var _fun60306_ip = 0;;) switch (_fun60306_ip) {
                    case 0:
                        var2 = this;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.isPlatformEmbedded;
                        if (!var1) {
                            _fun60306_ip = 63;
                            continue _fun60306
                        }
                    case 37:
                        var1 = var2.getDiscordUtils;
                        var3 = var1.bind(var2)();
                        var2 = var3.inputWatchAll;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 63:
                        return var0;
                }
            };
            var9.setOnInputEventCallback = var13;
            var13 = function arg0() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var2 = var0.bind(var1)();
                var1 = var2.inputSetFocused;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.setFocused = var13;
            var13 = function arg0, arg1, arg2, arg3() {
                _fun60308: for (var _fun60308_ip = 0;;) switch (_fun60308_ip) {
                    case 0:
                        var9 = this;
                        var7 = arg0;
                        var4 = arg1;
                        var0 = arg2;
                        var _closure2_slot0 = var0;
                        var6 = arg3;
                        var0 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var1 = undefined;
                    case 29: // try_start_0
                        var8 = {};
                        _closure1_slot12 = var8;
                        var8 = 0;
                        var _closure2_slot1 = var8;
                        var8 = var9.getDiscordUtils;
                        var3 = var8.bind(var9)();
                        var9 = var7;
                        var8 = var9.map;
                        var7 = function(arg0) { // Environment: var5
                            _fun60309: for (var _fun60309_ip = 0;;) switch (_fun60309_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure2_slot1;
                                    var2 = var2 + 1;
                                    _closure2_slot1 = var2;
                                    var3 = var1.id;
                                    var0 = null;
                                    if (!(var0 != var3)) {
                                        _fun60309_ip = 44;
                                        continue _fun60309
                                    }
                                case 28:
                                    var3 = _closure1_slot12;
                                    var0 = var1.id;
                                    var3[var2] = var0;
                                case 44:
                                    var0 = {};
                                    var5 = var0;
                                    var4 = var1;
                                    var3 = copyDataProperties(var5, var4);
                                    var3 = var1.cmdLine;
                                    var1 = 'cmdline';
                                    var0[var1] = var3;
                                    var1 = 'id';
                                    var0[var1] = var2;
                                    return var0;
                            }
                        };
                        var2 = var8.bind(var9)(var7);
                        var1 = function arg0() {
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var3.map;
                            var0 = _closure1_slot28;
                            var1 = var1.bind(var3)(var0);
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var8 = var6;
                        var5 = null;
                        var8 = var5 != var8;
                        var7 = var8;
                        if (!var8) {
                            _fun60308_ip = 105;
                            continue _fun60308
                        }
                    case 92:
                        var8 = var3;
                        var8 = var8.setProcessObserverUserId;
                        var7 = var5 != var8;
                    case 105:
                        if (!var7) {
                            _fun60308_ip = 122;
                            continue _fun60308
                        }
                    case 108:
                        var8 = var3;
                        var7 = var8.setProcessObserverUserId;
                        var6 = var7.bind(var8)(var6);
                    case 122:
                        if (!var4) {
                            _fun60308_ip = 138;
                            continue _fun60308
                        }
                    case 125:
                        var4 = var3;
                        var4 = var4.setObservedGamesCallback2;
                        if (!(var5 == var4)) {
                            _fun60308_ip = 161;
                            continue _fun60308
                        }
                    case 138:
                        var7 = var3;
                        var6 = var7.setObservedGamesCallback;
                        var5 = var2;
                        var4 = var1;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun60308_ip = 176;
                        continue _fun60308;
                    case 161:
                        var4 = var3;
                        var3 = var4.setObservedGamesCallback2;
                        var1 = var3.bind(var4)(var2, var1);
                    case 176: // try_end0
                        _fun60308_ip = 180;
                        continue _fun60308;
                    case 178: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 180:
                        return var0;
                }
            };
            var9.setObservedGamesCallback = var13;
            var13 = function arg0() {
                _fun60311: for (var _fun60311_ip = 0;;) switch (_fun60311_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = var2.getDiscordUtils;
                        var3 = var1.bind(var2)();
                        var2 = var3.setGameDetectionCallback;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60311_ip = 50;
                            continue _fun60311
                        }
                    case 34:
                        var1 = var2.call;
                        var0 = function(arg0, arg1) { // Environment: var0
                            var2 = arg0;
                            var4 = arg1;
                            var3 = _closure2_slot0;
                            var0 = var2.map;
                            var1 = _closure1_slot28;
                            var2 = var0.bind(var2)(var1);
                            var0 = var4.map;
                            var1 = var0.bind(var4)(var1);
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var3, var0);
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setGameDetectionCallback = var13;
            var13 = function arg0() {
                _fun60313: for (var _fun60313_ip = 0;;) switch (_fun60313_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var3 = var0.bind(var1)();
                        var2 = var3.setGameDetectionErrorCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60313_ip = 39;
                            continue _fun60313
                        }
                    case 25:
                        var1 = var2.call;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var3, var0);
                    case 39:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setGameDetectionErrorCallback = var13;
            var13 = function arg0, arg1() {
                _fun60314: for (var _fun60314_ip = 0;;) switch (_fun60314_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var4 = var0.bind(var1)();
                        var3 = var4.setRobloxSubgameDetectionConfig;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun60314_ip = 43;
                            continue _fun60314
                        }
                    case 25:
                        var2 = var3.call;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var4, var1, var0);
                    case 43:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setRobloxSubgameDetectionConfig = var13;
            var13 = function() {
                _fun60315: for (var _fun60315_ip = 0;;) switch (_fun60315_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var2 = var0.bind(var1)();
                        var1 = var2.checkForRobloxSubgameUpdate;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60315_ip = 35;
                            continue _fun60315
                        }
                    case 25:
                        var0 = var1.call;
                        var0 = var0.bind(var1)(var2);
                    case 35:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.checkForRobloxSubgameUpdate = var13;
            var13 = function arg0() {
                var2 = this;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = var2.getDiscordUtils;
                var2 = var1.bind(var2)();
                var1 = var2.setCandidateGamesCallback;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var3.map;
                    var0 = _closure1_slot28;
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.setCandidateGamesCallback = var13;
            var13 = function() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var1 = var0.bind(var1)();
                var0 = var1.clearCandidateGamesCallback;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var9.clearCandidateGamesCallback = var13;
            var13 = function arg0() {
                var4 = arg0;
                var1 = this;
                var0 = var1.getDiscordUtils;
                var2 = var0.bind(var1)();
                var1 = var2.setGameCandidateOverrides;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.id;
                    var2 = 'gameId';
                    var0[var2] = var3;
                    var2 = var1.name;
                    var1 = 'gameName';
                    var0[var1] = var2;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.setGameCandidateOverrides = var13;
            var13 = function arg0, arg1, arg2() {
                var2 = this;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = var2.getDiscordUtils;
                var4 = var1.bind(var2)();
                var3 = var4.setObserverDebugCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = arg1;
                var0 = arg2;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
            };
            var9.setObserverDebugCallback = var13;
            var13 = function() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var5 = var0.bind(var1)();
                var4 = var5.setObserverDebugCallback;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.GameDetectionDebugLevel;
                var3 = var1.NONE;
                var2 = null;
                var1 = 0;
                var1 = var4.bind(var5)(var2, var3, var1);
                return var0;
            };
            var9.clearObserverDebugCallback = var13;
            var13 = function() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var1 = var0.bind(var1)();
                var0 = var1.shouldDisplayNotifications;
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.shouldDisplayNotifications = var13;
            var13 = function() {
                _fun60325: for (var _fun60325_ip = 0;;) switch (_fun60325_ip) {
                    case 0:
                        var3 = this;
                        var2 = var3.requireModule;
                        var0 = 'discord_voice';
                        var0 = var2.bind(var3)(var0);
                        var _closure2_slot0 = var0;
                        var3 = _closure1_slot13;
                        if (var3) {
                            _fun60325_ip = 74;
                            continue _fun60325
                        }
                    case 36:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.setNativeLogFn;
                        var1 = function(arg0, arg1, arg2) { // Environment: var1
                            var3 = _closure2_slot0;
                            var2 = var3.consoleLog;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '[';
                            var4 = arg0;
                            var1 = '] ';
                            var0 = arg2;
                            var1 = var6.bind(var5)(var4, var1, var0);
                            var0 = arg1;
                            var0 = var2.bind(var3)(var0, var1);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                    case 74:
                        var1 = true;
                        _closure1_slot13 = var1;
                        return var0;
                }
            };
            var9.getVoiceEngine = var13;
            var13 = function() {
                _fun60327: for (var _fun60327_ip = 0;;) switch (_fun60327_ip) {
                    case 0:
                        var2 = this;
                        var0 = _closure1_slot13;
                        if (var0) {
                            _fun60327_ip = 27;
                            continue _fun60327
                        }
                    case 13: // try_start_0
                        var0 = var2.getVoiceEngine;
                        var0 = var0.bind(var2)();
                    case 23: // try_end0
                        _fun60327_ip = 27;
                        continue _fun60327;
                    case 25: // catch_target0
                        CatchBlockStart(arg_register = 0);
                    case 27:
                        var1 = var2.requireModule;
                        var0 = 'discord_utils';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var9.getDiscordUtils = var13;
            var13 = function() {
                _fun60328: for (var _fun60328_ip = 0;;) switch (_fun60328_ip) {
                    case 0:
                        var3 = this;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.isWindows;
                        var0 = var0.bind(var1)();
                        var1 = !var0;
                        var0 = !var1;
                        if (var1) {
                            _fun60328_ip = 97;
                            continue _fun60328
                        }
                    case 47:
                        var1 = var3.getDiscordUtils;
                        var5 = var1.bind(var3)();
                        var4 = var5.isSystemDarkMode;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if (var3) {
                            _fun60328_ip = 84;
                            continue _fun60328
                        }
                    case 74:
                        var3 = var4.call;
                        var2 = var3.bind(var4)(var5);
                    case 84:
                        var1 = var1 == var2;
                        if (var1) {
                            _fun60328_ip = 94;
                            continue _fun60328
                        }
                    case 91:
                        var1 = var2;
                    case 94:
                        var0 = var1;
                    case 97:
                        return var0;
                }
            };
            var9.isSystemDarkMode = var13;
            var13 = function() {
                var2 = this;
                var1 = var2.requireModule;
                var0 = 'discord_voice_filters';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.getVoiceFilters = var13;
            var13 = function() {
                var2 = this;
                var1 = var2.requireModule;
                var0 = 'discord_game_utils';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.getGameUtils = var13;
            var13 = function() {
                var2 = this;
                var1 = var2.requireModule;
                var0 = 'discord_cloudsync';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.getCloudSync = var13;
            var13 = function() {
                var2 = this;
                var1 = var2.requireModule;
                var0 = 'discord_dispatch';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.getDispatch = var13;
            var13 = function arg0() {
                _fun60333: for (var _fun60333_ip = 0;;) switch (_fun60333_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = this;
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var6 = 6;
                        var2 = var0[var6];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getPlatformName;
                        var3 = var2.bind(var3)();
                        var2 = 'darwin';
                        if (!(var2 !== var3)) {
                            _fun60333_ip = 186;
                            continue _fun60333
                        }
                    case 54:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getPlatformName;
                        var3 = var2.bind(var3)();
                        var2 = 'win32';
                        if (!(var2 !== var3)) {
                            _fun60333_ip = 166;
                            continue _fun60333
                        }
                    case 91:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getPlatformName;
                        var3 = var2.bind(var3)();
                        var2 = 'linux';
                        if (!(var2 === var3)) {
                            _fun60333_ip = 261;
                            continue _fun60333
                        }
                    case 129:
                        var2 = _closure1_slot6;
                        var6 = var2.remoteApp;
                        var3 = var6.setBadgeCount;
                        var2 = 0;
                        var7 = var5 >= var2;
                        if (!var7) {
                            _fun60333_ip = 159;
                            continue _fun60333
                        }
                    case 156:
                        var2 = var5;
                    case 159:
                        var2 = var3.bind(var6)(var2);
                        _fun60333_ip = 261;
                        continue _fun60333;
                    case 166:
                        var3 = var4.send;
                        var2 = 'APP_BADGE_SET';
                        var2 = var3.bind(var4)(var2, var5);
                        _fun60333_ip = 261;
                        continue _fun60333;
                    case 186:
                        var3 = '•';
                        var2 = -1;
                        if (!(var2 !== var5)) {
                            _fun60333_ip = 234;
                            continue _fun60333
                        }
                    case 200:
                        var2 = 0;
                        var2 = var5 > var2;
                        var4 = '';
                        var3 = var4;
                        if (!var2) {
                            _fun60333_ip = 234;
                            continue _fun60333
                        }
                    case 216:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var3 = var2.bind(var4)(var5);
                    case 234:
                        var1 = _closure1_slot6;
                        var1 = var1.remoteApp;
                        var2 = var1.dock;
                        var1 = var2.setBadge;
                        var1 = var1.bind(var2)(var3);
                    case 261:
                        return var0;
                }
            };
            var9.setBadge = var13;
            var13 = function arg0() {
                _fun60334: for (var _fun60334_ip = 0;;) switch (_fun60334_ip) {
                    case 0:
                        var4 = this;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.isPlatformEmbedded;
                        if (!var1) {
                            _fun60334_ip = 58;
                            continue _fun60334
                        }
                    case 37:
                        var3 = var4.send;
                        var2 = 'SYSTEM_TRAY_SET_ICON';
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                    case 58:
                        return var0;
                }
            };
            var9.setSystemTrayIcon = var13;
            var13 = function arg0() {
                _fun60335: for (var _fun60335_ip = 0;;) switch (_fun60335_ip) {
                    case 0:
                        var2 = this;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun60335_ip = 96;
                            continue _fun60335
                        }
                    case 37:
                        var1 = _closure1_slot6;
                        var4 = var1.thumbar;
                        var5 = null;
                        var1 = var5 == var4;
                        if (var1) {
                            _fun60335_ip = 68;
                            continue _fun60335
                        }
                    case 58:
                        var3 = var4.setThumbarButtons;
                        var1 = var5 == var3;
                    case 68:
                        if (var1) {
                            _fun60335_ip = 96;
                            continue _fun60335
                        }
                    case 71:
                        var3 = var4.setThumbarButtons;
                        var1 = var2.isSystemDarkMode;
                        var2 = var1.bind(var2)();
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                    case 96:
                        return var0;
                }
            };
            var9.setThumbarButtons = var13;
            var13 = function arg0() {
                _fun60336: for (var _fun60336_ip = 0;;) switch (_fun60336_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun60336_ip = 62;
                            continue _fun60336
                        }
                    case 36:
                        var3 = _closure1_slot6;
                        var3 = var3.remoteApp;
                        var _closure2_slot0 = var3;
                        var5 = var3.dock;
                        var4 = null;
                        if (!(var4 == var5)) {
                            _fun60336_ip = 64;
                            continue _fun60336
                        }
                    case 62:
                        return var2;
                    case 64:
                        var5 = var3.dock;
                        var4 = var5.bounce;
                        var3 = arg0;
                        var3 = var4.bind(var5)(var3);
                        var _closure2_slot1 = var3;
                        var1 = _closure1_slot4;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun60338: for (var _fun60338_ip = 0;;) switch (_fun60338_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun60338_ip = 55;
                                            continue _fun60338
                                        }
                                    case 7:
                                        var1 = _closure2_slot1;
                                        SaveGenerator(address = 18);
                                    case 16:
                                        return var1;
                                    case 18:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun60338_ip = 52;
                                            continue _fun60338
                                        }
                                    case 24:
                                        var2 = _closure2_slot0;
                                        var3 = var2.dock;
                                        var2 = var3.cancelBounce;
                                        var2 = var2.bind(var3)(var1);
                                        var2 = undefined;
                                        return var2;
                                    case 52:
                                        return var1;
                                    case 55:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var9.bounceDock = var13;
            var13 = function arg0() {
                _fun60339: for (var _fun60339_ip = 0;;) switch (_fun60339_ip) {
                    case 0:
                        var4 = this;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.isPlatformEmbedded;
                        if (!var1) {
                            _fun60339_ip = 58;
                            continue _fun60339
                        }
                    case 37:
                        var3 = var4.send;
                        var2 = 'SYSTEM_TRAY_SET_APPLICATIONS';
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                    case 58:
                        return var0;
                }
            };
            var9.setSystemTrayApplications = var13;
            var14 = function() {
                _fun60340: for (var _fun60340_ip = 0;;) switch (_fun60340_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var2 = var0.isPlatformEmbedded;
                        var0 = '';
                        if (!var2) {
                            _fun60340_ip = 54;
                            continue _fun60340
                        }
                    case 38:
                        var1 = _closure1_slot6;
                        var1 = var1.process;
                        var0 = var1.arch;
                    case 54:
                        return var0;
                }
            };
            var13 = 'architecture';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var14 = function() {
                _fun60341: for (var _fun60341_ip = 0;;) switch (_fun60341_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.isPlatformEmbedded;
                        if (var1) {
                            _fun60341_ip = 40;
                            continue _fun60341
                        }
                    case 34:
                        var1 = '';
                        return var1;
                    case 40:
                        var0 = _closure1_slot6;
                        var1 = var0.remoteApp;
                        var0 = var1.getReleaseChannel;
                        var1 = var0.bind(var1)();
                        var0 = null;
                        var2 = var0 != var1;
                        var0 = '';
                        if (!var2) {
                            _fun60341_ip = 76;
                            continue _fun60341
                        }
                    case 73:
                        var0 = var1;
                    case 76:
                        return var0;
                }
            };
            var13 = 'releaseChannel';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var14 = function() {
                var0 = _closure1_slot9;
                return var0;
            };
            var13 = 'version';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var14 = function() {
                var0 = _closure1_slot10;
                return var0;
            };
            var13 = 'buildNumber';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var14 = function() {
                var0 = _closure1_slot11;
                return var0;
            };
            var13 = 'moduleVersions';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var14 = function() {
                _fun60345: for (var _fun60345_ip = 0;;) switch (_fun60345_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60345_ip = 40;
                            continue _fun60345
                        }
                    case 34:
                        var0 = new Array(0);
                        _fun60345_ip = 87;
                        continue _fun60345;
                    case 40:
                        var1 = _closure1_slot6;
                        var1 = var1.os;
                        var3 = var1.release;
                        var2 = var3.split;
                        var1 = '.';
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = global;
                            var3 = var0.parseInt;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 10;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 87:
                        return var0;
                }
            };
            var13 = 'parsedOSRelease';
            Object.defineProperty(var9, var13, {
                get: var14,
                set: var0,
                enumerable: true
            });
            var13 = function arg0() {
                _fun60347: for (var _fun60347_ip = 0;;) switch (_fun60347_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60347_ip = 58;
                            continue _fun60347
                        }
                    case 34:
                        var1 = _closure1_slot6;
                        var3 = var1.clipboard;
                        var2 = var3.copy;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var9.copy = var13;
            var13 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60350: for (var _fun60350_ip = 0;;) switch (_fun60350_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60350_ip = 260;
                                    continue _fun60350
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 3;
                                var6 = var5[var1];
                                var2 = undefined;
                                var8 = var4.bind(var2)(var6);
                                var7 = _closure1_slot0;
                                var6 = 6;
                                var6 = var5[var6];
                                var6 = var7.bind(var2)(var6);
                                var7 = var6.isPlatformEmbedded;
                                var6 = 'Copy image method called outside native app';
                                var6 = var8.bind(var2)(var7, var6);
                                var1 = var5[var1];
                                var5 = var4.bind(var2)(var1);
                                var1 = _closure1_slot6;
                                var1 = var1.clipboard;
                                var1 = var1.copyImage;
                                var4 = 'function';
                                var1 = typeof var1;
                                var4 = var4 === var1;
                                var1 = 'Copy image not supported';
                                var1 = var5.bind(var2)(var4, var1);
                                var5 = _closure1_slot27;
                                var1 = _closure2_slot0;
                                var1 = var5.bind(var2)(var1);
                                SaveGenerator(address = 137);
                            case 135:
                                return var1;
                            case 137:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun60350_ip = 257;
                                    continue _fun60350
                                }
                            case 143:
                                var7 = _closure1_slot29;
                                var6 = _closure2_slot0;
                                var5 = _closure2_slot1;
                                var7 = var7.bind(var2)(var6, var5);
                                var5 = null;
                                if (!(var5 != var7)) {
                                    _fun60350_ip = 184;
                                    continue _fun60350
                                }
                            case 167:
                                var6 = _closure1_slot7;
                                var5 = var6.has;
                                var5 = var5.bind(var6)(var7);
                                if (var5) {
                                    _fun60350_ip = 190;
                                    continue _fun60350
                                }
                            case 184:
                                var6 = _closure2_slot0;
                                _fun60350_ip = 214;
                                continue _fun60350;
                            case 190:
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var5 = var4.concat;
                                var4 = 'image.';
                                var6 = var5.bind(var4)(var7);
                            case 214:
                                var3 = _closure1_slot6;
                                var5 = var3.clipboard;
                                var4 = var5.copyImage;
                                var3 = global;
                                var7 = var3.Buffer;
                                var3 = var7.from;
                                var3 = var3.bind(var7)(var1);
                                var3 = var4.bind(var5)(var3, var6);
                                return var2;
                            case 257:
                                return var1;
                            case 260:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.copyImage = var13;
            var13 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60353: for (var _fun60353_ip = 0;;) switch (_fun60353_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60353_ip = 89;
                                    continue _fun60353
                                }
                            case 7:
                                var3 = _closure2_slot0;
                                var1 = var3.arrayBuffer;
                                var1 = var1.bind(var3)();
                                SaveGenerator(address = 28);
                            case 26:
                                return var1;
                            case 28:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun60353_ip = 86;
                                    continue _fun60353
                                }
                            case 34:
                                var3 = _closure1_slot6;
                                var5 = var3.clipboard;
                                var4 = var5.copyImage;
                                var3 = global;
                                var6 = var3.Buffer;
                                var3 = var6.from;
                                var3 = var3.bind(var6)(var1);
                                var2 = _closure2_slot1;
                                var2 = var4.bind(var5)(var3, var2);
                                var2 = undefined;
                                return var2;
                            case 86:
                                return var1;
                            case 89:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.copyImageBlob = var13;
            var13 = function arg0, arg1() {
                _fun60354: for (var _fun60354_ip = 0;;) switch (_fun60354_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = null;
                        if (!(var0 != var5)) {
                            _fun60354_ip = 79;
                            continue _fun60354
                        }
                    case 9:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60354_ip = 79;
                            continue _fun60354
                        }
                    case 43:
                        var3 = _closure1_slot29;
                        var2 = arg1;
                        var3 = var3.bind(var4)(var5, var2);
                        var0 = var0 == var3;
                        if (var0) {
                            _fun60354_ip = 77;
                            continue _fun60354
                        }
                    case 63:
                        var2 = _closure1_slot8;
                        var1 = var2.has;
                        var0 = var1.bind(var2)(var3);
                    case 77:
                        return var0;
                    case 79:
                        var0 = false;
                        return var0;
                }
            };
            var9.canSaveImage = var13;
            var13 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60357: for (var _fun60357_ip = 0;;) switch (_fun60357_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60357_ip = 778;
                                    continue _fun60357
                                }
                            case 10:
                                var7 = undefined;
                                var3 = undefined;
                                var4 = undefined;
                                var5 = undefined;
                                var12 = undefined;
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var2 = 3;
                                var2 = var8[var2];
                                var10 = var6.bind(var7)(var2);
                                var9 = _closure1_slot0;
                                var2 = 6;
                                var2 = var8[var2];
                                var2 = var9.bind(var7)(var2);
                                var9 = var2.isPlatformEmbedded;
                                var2 = 'Save image method called outside native app';
                                var2 = var10.bind(var7)(var9, var2);
                                var2 = 5;
                                var2 = var8[var2];
                                var9 = var6.bind(var7)(var2);
                                var8 = var9.toURLSafe;
                                var6 = _closure2_slot0;
                                var8 = var8.bind(var9)(var6);
                                var6 = null;
                                if (!(var6 != var8)) {
                                    _fun60357_ip = 765;
                                    continue _fun60357
                                }
                            case 116:
                                var11 = var8.pathname;
                                var10 = var11.split;
                                var9 = '/';
                                var10 = var10.bind(var11)(var9);
                                var9 = var10.pop;
                                var9 = var9.bind(var10)();
                                var11 = var6 != var9;
                                var10 = 'unknown';
                                if (!var11) {
                                    _fun60357_ip = 160;
                                    continue _fun60357
                                }
                            case 157:
                                var10 = var9;
                            case 160:
                                var3 = var10;
                                var9 = _closure1_slot24;
                                var3 = var9.bind(var7)(var10);
                                var10 = var8.searchParams;
                                var9 = var10.get;
                                var8 = 'format';
                                var10 = var9.bind(var10)(var8);
                                if (!(var6 == var10)) {
                                    _fun60357_ip = 288;
                                    continue _fun60357
                                }
                            case 196:
                                var9 = var3;
                                var8 = var9.includes;
                                var14 = '.';
                                var8 = var8.bind(var9)(var14);
                                if (var8) {
                                    _fun60357_ip = 370;
                                    continue _fun60357
                                }
                            case 219:
                                var13 = var3;
                                var11 = _closure1_slot29;
                                var9 = _closure2_slot0;
                                var8 = _closure2_slot1;
                                var8 = var11.bind(var7)(var9, var8);
                                if (!(var6 == var8)) {
                                    _fun60357_ip = 248;
                                    continue _fun60357
                                }
                            case 244:
                                var8 = _closure2_slot2;
                            case 248:
                                var9 = var6 != var8;
                                var11 = 'png';
                                if (!var9) {
                                    _fun60357_ip = 262;
                                    continue _fun60357
                                }
                            case 259:
                                var11 = var8;
                            case 262:
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var9 = var8.concat;
                                var8 = '';
                                var3 = var9.bind(var8)(var13, var14, var11);
                                _fun60357_ip = 370;
                                continue _fun60357;
                            case 288:
                                var9 = var10.replace;
                                var8 = _closure1_slot18;
                                var13 = '';
                                var9 = var9.bind(var10)(var8, var13);
                                var8 = var9.toLowerCase;
                                var11 = var8.bind(var9)();
                                var9 = var11.length;
                                var8 = 0;
                                if (!(var9 > var8)) {
                                    _fun60357_ip = 370;
                                    continue _fun60357
                                }
                            case 328:
                                var10 = var3;
                                var9 = var10.replace;
                                var8 = _closure1_slot19;
                                var10 = var9.bind(var10)(var8, var13);
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var9 = var8.concat;
                                var8 = '.';
                                var3 = var9.bind(var13)(var10, var8, var11);
                            case 370:
                                var8 = _closure1_slot27;
                                var2 = _closure2_slot0;
                                var2 = var8.bind(var7)(var2);
                                SaveGenerator(address = 387);
                            case 385:
                                return var2;
                            case 387:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun60357_ip = 762;
                                    continue _fun60357
                                }
                            case 396:
                                var8 = global;
                                var9 = var8.Buffer;
                                var8 = var9.from;
                                var5 = var8.bind(var9)(var2);
                                var10 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var8 = 7;
                                var9 = var9[var8];
                                var9 = var10.bind(var7)(var9);
                                var11 = var9.Storage;
                                var10 = var11.get;
                                var9 = _closure1_slot14;
                                var9 = var10.bind(var11)(var9);
                                var12 = var9;
                                var10 = 'string';
                                var9 = typeof var9;
                                if (!(var10 !== var9)) {
                                    _fun60357_ip = 470;
                                    continue _fun60357
                                }
                            case 468:
                                var12 = undefined;
                            case 470:
                                var9 = _closure1_slot6;
                                var9 = var9.fileManager;
                                var9 = var9.saveWithDialog2;
                                var10 = 'function';
                                var9 = typeof var9;
                                if (!(var10 !== var9)) {
                                    _fun60357_ip = 574;
                                    continue _fun60357
                                }
                            case 497: // try_start_0
                                var9 = _closure1_slot6;
                                var14 = var9.fileManager;
                                var13 = var14.saveWithDialog;
                                var11 = var5;
                                var10 = var3;
                                var9 = var12;
                                var15 = var6 != var9;
                                var9 = undefined;
                                if (!var15) {
                                    _fun60357_ip = 534;
                                    continue _fun60357
                                }
                            case 531:
                                var9 = var12;
                            case 534:
                                var9 = var13.bind(var14)(var11, var10, var9);
                                SaveGenerator(address = 545);
                            case 543:
                                return var9;
                            case 545:
                                ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                                if (var10) {
                                    _fun60357_ip = 556;
                                    continue _fun60357
                                }
                            case 551:
                                var4 = var9;
                            case 554: // try_end0
                                _fun60357_ip = 652;
                                continue _fun60357;
                            case 556:
                                return var9;
                            case 559: // catch_target0
                                CatchBlockStart(arg_register = 9);
                                var9 = _closure1_slot20;
                                var9 = var9.ERRORED;
                                return var9;
                            case 574:
                                var9 = _closure1_slot6;
                                var11 = var9.fileManager;
                                var10 = var11.saveWithDialog2;
                                var9 = var5;
                                var5 = var3;
                                var3 = var12;
                                var13 = var6 != var3;
                                var3 = undefined;
                                if (!var13) {
                                    _fun60357_ip = 611;
                                    continue _fun60357
                                }
                            case 608:
                                var3 = var12;
                            case 611:
                                var3 = var10.bind(var11)(var9, var5, var3);
                                SaveGenerator(address = 622);
                            case 620:
                                return var3;
                            case 622:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun60357_ip = 759;
                                    continue _fun60357
                                }
                            case 631:
                                if (!(var6 != var3)) {
                                    _fun60357_ip = 746;
                                    continue _fun60357
                                }
                            case 635:
                                var5 = var3.canceledByUser;
                                if (var5) {
                                    _fun60357_ip = 733;
                                    continue _fun60357
                                }
                            case 646:
                                var4 = var3.directory;
                            case 652:
                                var5 = var4;
                                if (!(var6 != var5)) {
                                    _fun60357_ip = 720;
                                    continue _fun60357
                                }
                            case 659:
                                var6 = var4;
                                var5 = '';
                                if (!(var5 !== var6)) {
                                    _fun60357_ip = 720;
                                    continue _fun60357
                                }
                            case 670:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var5 = var5[var8];
                                var5 = var6.bind(var7)(var5);
                                var7 = var5.Storage;
                                var6 = var7.set;
                                var5 = _closure1_slot14;
                                var4 = var6.bind(var7)(var5, var4);
                                var4 = _closure1_slot20;
                                var4 = var4.SAVED;
                                _fun60357_ip = 730;
                                continue _fun60357;
                            case 720:
                                var5 = _closure1_slot20;
                                var4 = var5.ERRORED;
                            case 730:
                                return var4;
                            case 733:
                                var4 = _closure1_slot20;
                                var4 = var4.CANCELED;
                                return var4;
                            case 746:
                                var4 = _closure1_slot20;
                                var4 = var4.ERRORED;
                                return var4;
                            case 759:
                                return var3;
                            case 762:
                                return var2;
                            case 765:
                                var1 = _closure1_slot20;
                                var1 = var1.ERRORED;
                                return var1;
                            case 778:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.saveImage = var13;
            var13 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60360: for (var _fun60360_ip = 0;;) switch (_fun60360_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60360_ip = 284;
                                    continue _fun60360
                                }
                            case 10:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 3;
                                var1 = var4[var1];
                                var7 = undefined;
                                var6 = var2.bind(var7)(var1);
                                var5 = _closure1_slot0;
                                var1 = 6;
                                var1 = var4[var1];
                                var1 = var5.bind(var7)(var1);
                                var5 = var1.isPlatformEmbedded;
                                var1 = 'Save file method called outside native app';
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 5;
                                var1 = var4[var1];
                                var5 = var2.bind(var7)(var1);
                                var4 = var5.toURLSafe;
                                var1 = _closure2_slot0;
                                var4 = var4.bind(var5)(var1);
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun60360_ip = 281;
                                    continue _fun60360
                                }
                            case 108:
                                var5 = _closure2_slot1;
                                if (!(var1 == var5)) {
                                    _fun60360_ip = 148;
                                    continue _fun60360
                                }
                            case 116:
                                var6 = var4.pathname;
                                var5 = var6.split;
                                var4 = '/';
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.pop;
                                var4 = var4.bind(var5)();
                                _fun60360_ip = 152;
                                continue _fun60360;
                            case 148:
                                var4 = _closure2_slot1;
                            case 152:
                                var6 = var1 != var4;
                                var5 = 'unknown';
                                if (!var6) {
                                    _fun60360_ip = 166;
                                    continue _fun60360
                                }
                            case 163:
                                var5 = var4;
                            case 166:
                                var4 = _closure2_slot1;
                                var6 = var5;
                                if (!(var1 == var4)) {
                                    _fun60360_ip = 186;
                                    continue _fun60360
                                }
                            case 177:
                                var4 = _closure1_slot24;
                                var6 = var4.bind(var7)(var5);
                            case 186:
                                var4 = _closure1_slot25;
                                var2 = _closure2_slot0;
                                var2 = var4.bind(var7)(var2);
                                SaveGenerator(address = 203);
                            case 201:
                                return var2;
                            case 203:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun60360_ip = 278;
                                    continue _fun60360
                                }
                            case 209:
                                var4 = global;
                                var5 = var4.Buffer;
                                var4 = var5.from;
                                var5 = var4.bind(var5)(var2);
                                var3 = _closure1_slot6;
                                var4 = var3.fileManager;
                                var3 = var4.saveWithDialog;
                                var3 = var3.bind(var4)(var5, var6, var7);
                                SaveGenerator(address = 254);
                            case 252:
                                return var3;
                            case 254:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun60360_ip = 275;
                                    continue _fun60360
                                }
                            case 260:
                                var5 = var1 == var3;
                                var4 = null;
                                if (var5) {
                                    _fun60360_ip = 272;
                                    continue _fun60360
                                }
                            case 269:
                                var4 = var3;
                            case 272:
                                return var4;
                            case 275:
                                return var3;
                            case 278:
                                return var2;
                            case 281:
                                return var1;
                            case 284:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.saveFile = var13;
            var13 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60363: for (var _fun60363_ip = 0;;) switch (_fun60363_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60363_ip = 169;
                                    continue _fun60363
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 3;
                                var1 = var8[var3];
                                var7 = undefined;
                                var6 = var4.bind(var7)(var1);
                                var5 = _closure1_slot0;
                                var1 = 6;
                                var1 = var8[var1];
                                var1 = var5.bind(var7)(var1);
                                var5 = var1.isPlatformEmbedded;
                                var1 = 'Download voice filter file method called outside native app';
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 5;
                                var1 = var8[var1];
                                var9 = var4.bind(var7)(var1);
                                var6 = var9.toURLSafe;
                                var5 = _closure2_slot0;
                                var6 = var6.bind(var9)(var5);
                                var3 = var8[var3];
                                var4 = var4.bind(var7)(var3);
                                var3 = 'Could not download voice filter, fileSrc was not a valid path';
                                var3 = var4.bind(var7)(var6, var3);
                                var2 = _closure1_slot6;
                                var4 = var2.fileManager;
                                var3 = var4.maybeDownloadVoiceFilterFile;
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot2;
                                var1 = var3.bind(var4)(var5, var2, var1);
                                SaveGenerator(address = 157);
                            case 155:
                                return var1;
                            case 157:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60363_ip = 166;
                                    continue _fun60363
                                }
                            case 163:
                                return var1;
                            case 166:
                                return var1;
                            case 169:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.downloadVoiceFilterFile = var13;
            var13 = function() {
                var0 = _closure1_slot6;
                var1 = var0.fileManager;
                var0 = var1.stopVoiceFilterDownloads;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var9.stopVoiceFilterDownloads = var13;
            var13 = function() {
                var0 = _closure1_slot6;
                var0 = var0.fileManager;
                var0 = var0.checkVoiceFilterFilesExist;
                var1 = 'function';
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var9.canCheckVoiceFilterFilesExist = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60368: for (var _fun60368_ip = 0;;) switch (_fun60368_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60368_ip = 54;
                                    continue _fun60368
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.fileManager;
                                var2 = var3.checkVoiceFilterFilesExist;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60368_ip = 51;
                                    continue _fun60368
                                }
                            case 48:
                                return var1;
                            case 51:
                                return var1;
                            case 54:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.checkVoiceFilterFilesExist = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60371: for (var _fun60371_ip = 0;;) switch (_fun60371_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60371_ip = 54;
                                    continue _fun60371
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.fileManager;
                                var2 = var3.cleanupUnusedVoiceFilterFiles;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60371_ip = 51;
                                    continue _fun60371
                                }
                            case 48:
                                return var1;
                            case 51:
                                return var1;
                            case 54:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.cleanupUnusedVoiceFilterFiles = var13;
            var13 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60374: for (var _fun60374_ip = 0;;) switch (_fun60374_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60374_ip = 169;
                                    continue _fun60374
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 3;
                                var1 = var8[var3];
                                var7 = undefined;
                                var6 = var4.bind(var7)(var1);
                                var5 = _closure1_slot0;
                                var1 = 6;
                                var1 = var8[var1];
                                var1 = var5.bind(var7)(var1);
                                var5 = var1.isPlatformEmbedded;
                                var1 = 'Download ML model file method called outside native app';
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 5;
                                var1 = var8[var1];
                                var9 = var4.bind(var7)(var1);
                                var6 = var9.toURLSafe;
                                var5 = _closure2_slot0;
                                var6 = var6.bind(var9)(var5);
                                var3 = var8[var3];
                                var4 = var4.bind(var7)(var3);
                                var3 = 'Could not download ML model, fileSrc was not a valid path';
                                var3 = var4.bind(var7)(var6, var3);
                                var2 = _closure1_slot6;
                                var4 = var2.fileManager;
                                var3 = var4.maybeDownloadMLModelFile;
                                var2 = _closure2_slot1;
                                var1 = _closure2_slot2;
                                var1 = var3.bind(var4)(var5, var2, var1);
                                SaveGenerator(address = 157);
                            case 155:
                                return var1;
                            case 157:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60374_ip = 166;
                                    continue _fun60374
                                }
                            case 163:
                                return var1;
                            case 166:
                                return var1;
                            case 169:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.downloadMLModelFile = var13;
            var13 = function() {
                var0 = _closure1_slot6;
                var1 = var0.fileManager;
                var0 = var1.stopMLModelDownloads;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var9.stopMLModelDownloads = var13;
            var13 = function() {
                var0 = _closure1_slot6;
                var0 = var0.fileManager;
                var0 = var0.checkMLModelFilesExist;
                var1 = 'function';
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            var9.canCheckMLModelFilesExist = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60379: for (var _fun60379_ip = 0;;) switch (_fun60379_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60379_ip = 54;
                                    continue _fun60379
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.fileManager;
                                var2 = var3.checkMLModelFilesExist;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60379_ip = 51;
                                    continue _fun60379
                                }
                            case 48:
                                return var1;
                            case 51:
                                return var1;
                            case 54:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.checkMLModelFilesExist = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60382: for (var _fun60382_ip = 0;;) switch (_fun60382_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60382_ip = 54;
                                    continue _fun60382
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.fileManager;
                                var2 = var3.cleanupUnusedMLModelFiles;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60382_ip = 51;
                                    continue _fun60382
                                }
                            case 48:
                                return var1;
                            case 51:
                                return var1;
                            case 54:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.cleanupUnusedMLModelFiles = var13;
            var13 = function() {
                _fun60383: for (var _fun60383_ip = 0;;) switch (_fun60383_ip) {
                    case 0:
                        var4 = arguments[0];
                        var3 = undefined;
                        if (!(var4 === var3)) {
                            _fun60383_ip = 11;
                            continue _fun60383
                        }
                    case 9:
                        var4 = undefined;
                    case 11:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 6;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.isPlatformEmbedded;
                        if (var1) {
                            _fun60383_ip = 47;
                            continue _fun60383
                        }
                    case 43:
                        var1 = false;
                        return var1;
                    case 47:
                        var1 = _closure1_slot6;
                        var1 = var1.clipboard;
                        var1 = var1.copyImage;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun60383_ip = 119;
                            continue _fun60383
                        }
                    case 74:
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun60383_ip = 115;
                            continue _fun60383
                        }
                    case 80:
                        var2 = _closure1_slot29;
                        var2 = var2.bind(var3)(var4, var3);
                        if (!(var1 != var2)) {
                            _fun60383_ip = 115;
                            continue _fun60383
                        }
                    case 94:
                        var1 = _closure1_slot7;
                        var0 = var1.has;
                        var0 = var0.bind(var1)(var2);
                        if (var0) {
                            _fun60383_ip = 115;
                            continue _fun60383
                        }
                    case 111:
                        var0 = false;
                        return var0;
                    case 115:
                        var0 = true;
                        return var0;
                    case 119:
                        var0 = false;
                        return var0;
                }
            };
            var9.canCopyImage = var13;
            var13 = function() {
                _fun60384: for (var _fun60384_ip = 0;;) switch (_fun60384_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60384_ip = 54;
                            continue _fun60384
                        }
                    case 34:
                        var1 = _closure1_slot6;
                        var2 = var1.clipboard;
                        var1 = var2.cut;
                        var1 = var1.bind(var2)();
                    case 54:
                        return var0;
                }
            };
            var9.cut = var13;
            var13 = function() {
                _fun60385: for (var _fun60385_ip = 0;;) switch (_fun60385_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60385_ip = 54;
                            continue _fun60385
                        }
                    case 34:
                        var1 = _closure1_slot6;
                        var2 = var1.clipboard;
                        var1 = var2.paste;
                        var1 = var1.bind(var2)();
                    case 54:
                        return var0;
                }
            };
            var9.paste = var13;
            var13 = function() {
                _fun60386: for (var _fun60386_ip = 0;;) switch (_fun60386_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var2 = var0.isPlatformEmbedded;
                        var0 = '';
                        if (!var2) {
                            _fun60386_ip = 58;
                            continue _fun60386
                        }
                    case 38:
                        var1 = _closure1_slot6;
                        var2 = var1.clipboard;
                        var1 = var2.read;
                        var0 = var1.bind(var2)();
                    case 58:
                        return var0;
                }
            };
            var9.readClipboard = var13;
            var13 = function() {
                _fun60387: for (var _fun60387_ip = 0;;) switch (_fun60387_ip) {
                    case 0:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.isPlatformEmbedded;
                        var1 = !var0;
                        var0 = !var1;
                        if (var1) {
                            _fun60387_ip = 100;
                            continue _fun60387
                        }
                    case 40:
                        var1 = _closure1_slot6;
                        var1 = var1.clipboard;
                        var4 = var1.hasMixedContent;
                        var1 = null;
                        var4 = var1 == var4;
                        var2 = undefined;
                        if (var4) {
                            _fun60387_ip = 87;
                            continue _fun60387
                        }
                    case 67:
                        var3 = _closure1_slot6;
                        var4 = var3.clipboard;
                        var3 = var4.hasMixedContent;
                        var2 = var3.bind(var4)();
                    case 87:
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun60387_ip = 97;
                            continue _fun60387
                        }
                    case 94:
                        var1 = var2;
                    case 97:
                        var0 = var1;
                    case 100:
                        return var0;
                }
            };
            var9.clipboardHasMixedContent = var13;
            var13 = function arg0, arg1() {
                var0 = _closure1_slot6;
                var3 = var0.ipc;
                var2 = var3.on;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var9.on = var13;
            var13 = function arg0, arg1() {
                var4 = 1;
                var8 = var4;
                var7 = copyRestArgs(var8);
                var0 = _closure1_slot6;
                var2 = var0.ipc;
                var1 = var2.invoke;
                var0 = new Array(1);
                var5 = arg0;
                var0[0] = var5;
                var8 = var0;
                var6 = var4;
                var3 = arraySpread(var8, var7, var6);
                var8 = var1;
                var7 = var0;
                var6 = var2;
                var0 = apply(var8, var7, var6);
                return var0;
            };
            var9.invoke = var13;
            var13 = function arg0, arg1() {
                var4 = 1;
                var8 = var4;
                var7 = copyRestArgs(var8);
                var0 = _closure1_slot6;
                var2 = var0.ipc;
                var1 = var2.send;
                var0 = new Array(1);
                var5 = arg0;
                var0[0] = var5;
                var8 = var0;
                var6 = var4;
                var3 = arraySpread(var8, var7, var6);
                var8 = var1;
                var7 = var0;
                var6 = var2;
                var0 = apply(var8, var7, var6);
                var0 = undefined;
                return var0;
            };
            var9.send = var13;
            var13 = function() {
                _fun60391: for (var _fun60391_ip = 0;;) switch (_fun60391_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var3.bind(var2)(var0);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60391_ip = 38;
                            continue _fun60391
                        }
                    case 34:
                        var0 = true;
                        return var0;
                    case 38: // try_start_0
                        var4 = _closure1_slot6;
                        var3 = null;
                        var4 = var3 == var4;
                        var2 = undefined;
                        if (var4) {
                            _fun60391_ip = 63;
                            continue _fun60391
                        }
                    case 53:
                        var4 = _closure1_slot6;
                        var2 = var4.ipc;
                    case 63:
                        var2 = var3 != var2;
                        var0 = var2;
                        if (!var2) {
                            _fun60391_ip = 100;
                            continue _fun60391
                        }
                    case 73:
                        var1 = _closure1_slot6;
                        var1 = var1.ipc;
                        var1 = var1.send;
                        var2 = 'function';
                        var1 = typeof var1;
                        var0 = var2 === var1;
                    case 100: // try_end0
                        return var0;
                    case 102: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var9.isIPCReady = var13;
            var13 = function() {
                _fun60392: for (var _fun60392_ip = 0;;) switch (_fun60392_ip) {
                    case 0:
                        var3 = arguments[0];
                        var2 = arguments[1];
                        var1 = undefined;
                        if (!(var3 === var1)) {
                            _fun60392_ip = 20;
                            continue _fun60392
                        }
                    case 14:
                        var3 = 5000;
                    case 20:
                        var _closure2_slot0 = var3;
                        if (!(var2 === var1)) {
                            _fun60392_ip = 36;
                            continue _fun60392
                        }
                    case 28:
                        var3 = global;
                        var2 = var3.window;
                    case 36:
                        var _closure2_slot1 = var2;
                        var2 = this;
                        var _closure2_slot2 = var2;
                        var2 = _closure1_slot4;
                        var0 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun60394: for (var _fun60394_ip = 0;;) switch (_fun60394_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun60394_ip = 157;
                                            continue _fun60394
                                        }
                                    case 12:
                                        var6 = global;
                                        var2 = var6.Date;
                                        var1 = var2.now;
                                        var5 = var1.bind(var2)();
                                        var2 = var6.Date;
                                        var1 = var2.now;
                                        var1 = var1.bind(var2)();
                                        var2 = var1 - var5;
                                        var1 = _closure2_slot0;
                                        if (!(var2 < var1)) {
                                            _fun60394_ip = 144;
                                            continue _fun60394
                                        }
                                    case 59:
                                        var2 = _closure2_slot2;
                                        var1 = var2.isIPCReady;
                                        var1 = var1.bind(var2)();
                                        if (var1) {
                                            _fun60394_ip = 152;
                                            continue _fun60394
                                        }
                                    case 76:
                                        var3 = var6.Promise;
                                        var1 = var3.prototype;
                                        var2 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var8 = function(arg0) { // Environment: var7
                                            var2 = _closure2_slot1;
                                            var1 = var2.requestAnimationFrame;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var9 = var2;
                                        var1 = new var9[var3](var8, var7);
                                        var1 = var1 instanceof Object ? var1 : var2;
                                        SaveGenerator(address = 111);
                                    case 109:
                                        return var1;
                                    case 111:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun60394_ip = 149;
                                            continue _fun60394
                                        }
                                    case 117:
                                        var3 = var6.Date;
                                        var2 = var3.now;
                                        var2 = var2.bind(var3)();
                                        var3 = var2 - var5;
                                        var2 = _closure2_slot0;
                                        if (var3 < var2) {
                                            _fun60394_ip = 59;
                                            continue _fun60394
                                        }
                                    case 144:
                                        var2 = false;
                                        return var2;
                                    case 149:
                                        return var1;
                                    case 152:
                                        var1 = true;
                                        return var1;
                                    case 157:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var9.waitForIPCReady = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.flashFrame;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.flashFrame = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot6;
                var3 = var1.nativeModules;
                var2 = var3.ensureModule;
                var1 = 'discord_webauthn';
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var2 = var0.webAuthn;
                    var1 = var2.webAuthnRegister;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.webAuthnRegister = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot6;
                var3 = var1.nativeModules;
                var2 = var3.ensureModule;
                var1 = 'discord_webauthn';
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var2 = var0.webAuthn;
                    var1 = var2.webAuthnAuthenticate;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.webAuthnAuthenticate = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.minimize;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.minimize = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.restore;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.restore = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.maximize;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.maximize = var13;
            var13 = function arg0() {
                _fun60404: for (var _fun60404_ip = 0;;) switch (_fun60404_ip) {
                    case 0:
                        var4 = arguments[1];
                        var3 = this;
                        var0 = undefined;
                        if (!(var4 === var0)) {
                            _fun60404_ip = 14;
                            continue _fun60404
                        }
                    case 12:
                        var4 = false;
                    case 14:
                        var1 = var4;
                        if (!var1) {
                            _fun60404_ip = 53;
                            continue _fun60404
                        }
                    case 20:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var5 = var5.bind(var0)(var2);
                        var2 = var5.isWindows;
                        var1 = var2.bind(var5)();
                    case 53:
                        if (!var1) {
                            _fun60404_ip = 69;
                            continue _fun60404
                        }
                    case 56:
                        var2 = var3.minimize;
                        var1 = null;
                        var1 = var2.bind(var3)(var1);
                    case 69:
                        var1 = _closure1_slot6;
                        var3 = var1.window;
                        var2 = var3.focus;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var4, var1);
                        return var0;
                }
            };
            var9.focus = var13;
            var13 = function() {
                _fun60405: for (var _fun60405_ip = 0;;) switch (_fun60405_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60405_ip = 55;
                            continue _fun60405
                        }
                    case 34:
                        var2 = _closure1_slot6;
                        var2 = var2.window;
                        var3 = var2.blur;
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun60405_ip = 75;
                            continue _fun60405
                        }
                    case 55:
                        var2 = global;
                        var3 = var2.window;
                        var2 = var3.blur;
                        var2 = var2.bind(var3)();
                        _fun60405_ip = 94;
                        continue _fun60405;
                    case 75:
                        var1 = _closure1_slot6;
                        var2 = var1.window;
                        var1 = var2.blur;
                        var1 = var1.bind(var2)();
                    case 94:
                        return var0;
                }
            };
            var9.blur = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.fullscreen;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.fullscreen = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.window;
                var1 = var2.close;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.close = var13;
            var13 = function arg0, arg1() {
                _fun60408: for (var _fun60408_ip = 0;;) switch (_fun60408_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var1 = var1.setAlwaysOnTop;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun60408_ip = 56;
                            continue _fun60408
                        }
                    case 29:
                        var0 = _closure1_slot6;
                        var3 = var0.window;
                        var2 = var3.setAlwaysOnTop;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                    case 56:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setAlwaysOnTop = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60411: for (var _fun60411_ip = 0;;) switch (_fun60411_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60411_ip = 84;
                                    continue _fun60411
                                }
                            case 7:
                                var2 = _closure1_slot6;
                                var2 = var2.window;
                                var3 = var2.isAlwaysOnTop;
                                var4 = 'function';
                                var3 = typeof var3;
                                var2 = false;
                                if (!(var4 === var3)) {
                                    _fun60411_ip = 78;
                                    continue _fun60411
                                }
                            case 38:
                                var1 = _closure1_slot6;
                                var4 = var1.window;
                                var3 = var4.isAlwaysOnTop;
                                var1 = _closure2_slot0;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 69);
                            case 67:
                                return var1;
                            case 69:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                var2 = var1;
                                if (var3) {
                                    _fun60411_ip = 81;
                                    continue _fun60411
                                }
                            case 78:
                                return var2;
                            case 81:
                                return var1;
                            case 84:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.isAlwaysOnTop = var13;
            var13 = function arg0() {
                _fun60412: for (var _fun60412_ip = 0;;) switch (_fun60412_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var4 = null;
                        var3 = var4 == var0;
                        var0 = undefined;
                        var2 = undefined;
                        if (var3) {
                            _fun60412_ip = 44;
                            continue _fun60412
                        }
                    case 20:
                        var3 = _closure1_slot6;
                        var3 = var3.window;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if (var4) {
                            _fun60412_ip = 44;
                            continue _fun60412
                        }
                    case 38:
                        var2 = var3.showInactive;
                    case 44:
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun60412_ip = 78;
                            continue _fun60412
                        }
                    case 55:
                        var1 = _closure1_slot6;
                        var3 = var1.window;
                        var2 = var3.showInactive;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 78:
                        return var0;
                }
            };
            var9.showInactive = var13;
            var13 = function arg0, arg1() {
                _fun60413: for (var _fun60413_ip = 0;;) switch (_fun60413_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var3 = null;
                        var1 = var3 == var0;
                        var0 = undefined;
                        var4 = undefined;
                        if (var1) {
                            _fun60413_ip = 36;
                            continue _fun60413
                        }
                    case 20:
                        var2 = _closure1_slot6;
                        var2 = var2.window;
                        var1 = var3 == var2;
                        var4 = var2;
                    case 36:
                        if (var1) {
                            _fun60413_ip = 49;
                            continue _fun60413
                        }
                    case 39:
                        var2 = var4.setMinimumSize;
                        var1 = var3 == var2;
                    case 49:
                        if (var1) {
                            _fun60413_ip = 70;
                            continue _fun60413
                        }
                    case 52:
                        var3 = var4.setMinimumSize;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                    case 70:
                        return var0;
                }
            };
            var9.setMinimumSize = var13;
            var13 = function arg0() {
                _fun60414: for (var _fun60414_ip = 0;;) switch (_fun60414_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var6 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var5 = 6;
                        var3 = var0[var5];
                        var0 = undefined;
                        var3 = var6.bind(var0)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun60414_ip = 102;
                            continue _fun60414
                        }
                    case 40:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getPlatformName;
                        var3 = var2.bind(var3)();
                        var2 = 'darwin';
                        if (!(var2 === var3)) {
                            _fun60414_ip = 102;
                            continue _fun60414
                        }
                    case 77: // try_start_0
                        var3 = var4.send;
                        var2 = var1;
                        var1 = 'WINDOW_SET_TRAFFIC_LIGHT_POSITION';
                        var1 = var3.bind(var4)(var1, var2);
                    case 98: // try_end0
                        _fun60414_ip = 102;
                        continue _fun60414;
                    case 100: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 102:
                        return var0;
                }
            };
            var9.setTrafficLightPosition = var13;
            var13 = function() {
                _fun60415: for (var _fun60415_ip = 0;;) switch (_fun60415_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60415_ip = 54;
                            continue _fun60415
                        }
                    case 34:
                        var1 = _closure1_slot6;
                        var2 = var1.processUtils;
                        var1 = var2.purgeMemory;
                        var1 = var1.bind(var2)();
                    case 54:
                        return var0;
                }
            };
            var9.purgeMemory = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.crashReporter;
                var1 = var2.updateCrashReporter;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.updateCrashReporter = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.crashReporter;
                var1 = var2.triggerJSException;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.triggerJSException = var13;
            var13 = function() {
                _fun60418: for (var _fun60418_ip = 0;;) switch (_fun60418_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60418_ip = 54;
                            continue _fun60418
                        }
                    case 34:
                        var1 = _closure1_slot6;
                        var2 = var1.processUtils;
                        var1 = var2.flushDNSCache;
                        var1 = var1.bind(var2)();
                    case 54:
                        return var0;
                }
            };
            var9.flushDNSCache = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.features;
                var1 = var2.supports;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.supportsFeature = var13;
            var13 = function() {
                _fun60420: for (var _fun60420_ip = 0;;) switch (_fun60420_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        var0 = !var0;
                        if (var0) {
                            _fun60420_ip = 57;
                            continue _fun60420
                        }
                    case 37:
                        var1 = _closure1_slot6;
                        var2 = var1.gpuSettings;
                        var1 = var2.getEnableHardwareAcceleration;
                        var0 = var1.bind(var2)();
                    case 57:
                        return var0;
                }
            };
            var9.getEnableHardwareAcceleration = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.gpuSettings;
                var1 = var2.setEnableHardwareAcceleration;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.setEnableHardwareAcceleration = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.gpuSettings;
                var1 = var2.setChromiumSwitches;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var9.setChromiumSwitches = var13;
            var13 = function arg0, arg1() {
                _fun60423: for (var _fun60423_ip = 0;;) switch (_fun60423_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.gpuSettings;
                        var2 = var1.setSetting;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60423_ip = 53;
                            continue _fun60423
                        }
                    case 25:
                        var0 = _closure1_slot6;
                        var3 = var0.gpuSettings;
                        var2 = var3.setSetting;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                    case 53:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setSetting = var13;
            var13 = function() {
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60426: for (var _fun60426_ip = 0;;) switch (_fun60426_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60426_ip = 125;
                                    continue _fun60426
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var1 = var1.app;
                                var1 = var1.getOpenOnStart;
                                var4 = null;
                                var2 = var4 == var1;
                                var1 = undefined;
                                if (var2) {
                                    _fun60426_ip = 57;
                                    continue _fun60426
                                }
                            case 37:
                                var2 = _closure1_slot6;
                                var5 = var2.app;
                                var2 = var5.getOpenOnStart;
                                var1 = var2.bind(var5)();
                            case 57:
                                SaveGenerator(address = 61);
                            case 59:
                                return var1;
                            case 61:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60426_ip = 122;
                                    continue _fun60426
                                }
                            case 67:
                                var2 = var1;
                                if (!(var4 == var2)) {
                                    _fun60426_ip = 119;
                                    continue _fun60426
                                }
                            case 74:
                                var3 = _closure1_slot6;
                                var6 = var3.settings;
                                var5 = var6.get;
                                var4 = 'OPEN_ON_STARTUP';
                                var3 = true;
                                var3 = var5.bind(var6)(var4, var3);
                                SaveGenerator(address = 107);
                            case 105:
                                return var3;
                            case 107:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                var2 = var3;
                                if (!var4) {
                                    _fun60426_ip = 119;
                                    continue _fun60426
                                }
                            case 116:
                                return var3;
                            case 119:
                                return var2;
                            case 122:
                                return var1;
                            case 125:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.getOpenOnStart = var13;
            var13 = function() {
                _fun60427: for (var _fun60427_ip = 0;;) switch (_fun60427_ip) {
                    case 0:
                        var2 = this;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var0 = var1.isWindows;
                        var0 = var0.bind(var1)();
                        if (!var0) {
                            _fun60427_ip = 63;
                            continue _fun60427
                        }
                    case 41:
                        var0 = var2.getDiscordUtils;
                        var0 = var0.bind(var2)();
                        var1 = var0.getGPUDriverVersions;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60427_ip = 103;
                            continue _fun60427
                        }
                    case 63:
                        var0 = global;
                        var3 = var0.Promise;
                        var1 = var3.resolve;
                        var5 = var0.Object;
                        var4 = var5.freeze;
                        var0 = {};
                        var0 = var4.bind(var5)(var0);
                        var0 = var1.bind(var3)(var0);
                        _fun60427_ip = 123;
                        continue _fun60427;
                    case 103:
                        var1 = var2.getDiscordUtils;
                        var2 = var1.bind(var2)();
                        var1 = var2.getGPUDriverVersions;
                        var0 = var1.bind(var2)();
                    case 123:
                        return var0;
                }
            };
            var9.getGPUDriverVersions = var13;
            var13 = function arg0() {
                _fun60428: for (var _fun60428_ip = 0;;) switch (_fun60428_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        var2 = !var0;
                        var0 = !var2;
                        if (var2) {
                            _fun60428_ip = 65;
                            continue _fun60428
                        }
                    case 40:
                        var1 = _closure1_slot6;
                        var3 = var1.window;
                        var2 = var3.setZoomFactor;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var0 = true;
                    case 65:
                        return var0;
                }
            };
            var9.setZoomFactor = var13;
            var13 = function arg0() {
                _fun60429: for (var _fun60429_ip = 0;;) switch (_fun60429_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var3 = var1.setBackgroundThrottling;
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun60429_ip = 57;
                            continue _fun60429
                        }
                    case 27:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var3 = var1.webContents;
                        var1 = var3.setBackgroundThrottling;
                        var1 = var1.bind(var3)(var2);
                        _fun60429_ip = 77;
                        continue _fun60429;
                    case 57:
                        var0 = _closure1_slot6;
                        var1 = var0.window;
                        var0 = var1.setBackgroundThrottling;
                        var0 = var0.bind(var1)(var2);
                    case 77:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setBackgroundThrottling = var13;
            var13 = function arg0, arg1() {
                _fun60430: for (var _fun60430_ip = 0;;) switch (_fun60430_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var1 = var1.setFocusable;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun60430_ip = 56;
                            continue _fun60430
                        }
                    case 29:
                        var0 = _closure1_slot6;
                        var3 = var0.window;
                        var2 = var3.setFocusable;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                    case 56:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.setFocusable = var13;
            var13 = function() {
                _fun60431: for (var _fun60431_ip = 0;;) switch (_fun60431_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.app;
                        var2 = var1.pauseFrameEvictor;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60431_ip = 45;
                            continue _fun60431
                        }
                    case 25:
                        var0 = _closure1_slot6;
                        var1 = var0.app;
                        var0 = var1.pauseFrameEvictor;
                        var0 = var0.bind(var1)();
                    case 45:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.pauseFrameEvictor = var13;
            var13 = function() {
                _fun60432: for (var _fun60432_ip = 0;;) switch (_fun60432_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.app;
                        var2 = var1.unpauseFrameEvictor;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60432_ip = 45;
                            continue _fun60432
                        }
                    case 25:
                        var0 = _closure1_slot6;
                        var1 = var0.app;
                        var0 = var1.unpauseFrameEvictor;
                        var0 = var0.bind(var1)();
                    case 45:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.unpauseFrameEvictor = var13;
            var13 = function() {
                _fun60433: for (var _fun60433_ip = 0;;) switch (_fun60433_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var0 = var0.app;
                        var2 = var0.getPreferredSystemLanguages;
                        var0 = null;
                        var2 = var0 == var2;
                        var0 = undefined;
                        if (var2) {
                            _fun60433_ip = 50;
                            continue _fun60433
                        }
                    case 30:
                        var1 = _closure1_slot6;
                        var2 = var1.app;
                        var1 = var2.getPreferredSystemLanguages;
                        var0 = var1.bind(var2)();
                    case 50:
                        return var0;
                }
            };
            var9.getPreferredSystemLanguages = var13;
            var13 = function arg0() {
                _fun60434: for (var _fun60434_ip = 0;;) switch (_fun60434_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = this;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isDesktop;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun60434_ip = 226;
                            continue _fun60434
                        }
                    case 47:
                        var2 = var1.getDiscordUtils;
                        var2 = var2.bind(var1)();
                        var2 = var2.getPidFromWindowHandle;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun60434_ip = 226;
                            continue _fun60434
                        }
                    case 72:
                        var2 = var3 == var6;
                        var4 = undefined;
                        if (var2) {
                            _fun60434_ip = 95;
                            continue _fun60434
                        }
                    case 81:
                        var5 = var6.split;
                        var2 = ':';
                        var4 = var5.bind(var6)(var2);
                    case 95:
                        var2 = var3 == var4;
                        var6 = undefined;
                        if (var2) {
                            _fun60434_ip = 110;
                            continue _fun60434
                        }
                    case 104:
                        var2 = 0;
                        var6 = var4[var2];
                    case 110:
                        var2 = 'window';
                        if (!(var2 !== var6)) {
                            _fun60434_ip = 153;
                            continue _fun60434
                        }
                    case 118:
                        var5 = var6.startsWith;
                        var2 = 'screen';
                        var2 = var5.bind(var6)(var2);
                        if (var2) {
                            _fun60434_ip = 148;
                            continue _fun60434
                        }
                    case 136:
                        var5 = 'prepicked';
                        var2 = null;
                        if (!(var5 === var6)) {
                            _fun60434_ip = 151;
                            continue _fun60434
                        }
                    case 148:
                        var2 = 1;
                    case 151:
                        return var2;
                    case 153:
                        var2 = var3 == var4;
                        var0 = undefined;
                        if (var2) {
                            _fun60434_ip = 169;
                            continue _fun60434
                        }
                    case 162:
                        var2 = 1;
                        var0 = var4[var2];
                    case 169:
                        var4 = var3 != var0;
                        var2 = '';
                        if (!var4) {
                            _fun60434_ip = 183;
                            continue _fun60434
                        }
                    case 180:
                        var2 = var0;
                    case 183:
                        var0 = var1.getDiscordUtils;
                        var1 = var0.bind(var1)();
                        var0 = var1.getPidFromWindowHandle;
                        var1 = var0.bind(var1)(var2);
                        var2 = var3 == var1;
                        var0 = null;
                        if (var2) {
                            _fun60434_ip = 224;
                            continue _fun60434
                        }
                    case 213:
                        var2 = 0;
                        var0 = null;
                        if (!(var2 !== var1)) {
                            _fun60434_ip = 224;
                            continue _fun60434
                        }
                    case 221:
                        var0 = var1;
                    case 224:
                        return var0;
                    case 226:
                        var0 = null;
                        return var0;
                }
            };
            var9.getPidFromDesktopSource = var13;
            var13 = function arg0() {
                _fun60435: for (var _fun60435_ip = 0;;) switch (_fun60435_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = this;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var0 = var3.isWindows;
                        var0 = var0.bind(var3)();
                        if (!var0) {
                            _fun60435_ip = 153;
                            continue _fun60435
                        }
                    case 44:
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var0 = var0.getWindowHandleFromPid;
                        var4 = null;
                        if (!(var4 != var0)) {
                            _fun60435_ip = 153;
                            continue _fun60435
                        }
                    case 66:
                        if (!(var4 != var2)) {
                            _fun60435_ip = 153;
                            continue _fun60435
                        }
                    case 70:
                        var0 = var1.getDiscordUtils;
                        var1 = var0.bind(var1)();
                        var0 = var1.getWindowHandleFromPid;
                        var1 = var0.bind(var1)(var2);
                        var2 = var4 == var1;
                        var0 = null;
                        if (var2) {
                            _fun60435_ip = 151;
                            continue _fun60435
                        }
                    case 100:
                        var3 = var1.length;
                        var2 = 0;
                        var0 = null;
                        if (!(var2 !== var3)) {
                            _fun60435_ip = 151;
                            continue _fun60435
                        }
                    case 113:
                        var3 = ['window'];
                        var3[1] = var1;
                        var1 = '0';
                        var3[2] = var1;
                        var2 = var3.join;
                        var1 = ':';
                        var0 = var2.bind(var3)(var1);
                    case 151:
                        return var0;
                    case 153:
                        var0 = null;
                        return var0;
                }
            };
            var9.getDesktopSourceFromPid = var13;
            var13 = function arg0() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var2 = var0.bind(var1)();
                var1 = var2.generateSessionFromPid;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.generateSessionFromPid = var13;
            var13 = function arg0() {
                _fun60437: for (var _fun60437_ip = 0;;) switch (_fun60437_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = this;
                        var0 = var2.getDiscordUtils;
                        var0 = var0.bind(var2)();
                        var4 = var0.getAudioPid;
                        var1 = null;
                        var0 = var3;
                        if (!(var1 != var4)) {
                            _fun60437_ip = 59;
                            continue _fun60437
                        }
                    case 31:
                        var0 = var3;
                        if (!(var1 != var0)) {
                            _fun60437_ip = 59;
                            continue _fun60437
                        }
                    case 38:
                        var1 = var2.getDiscordUtils;
                        var2 = var1.bind(var2)();
                        var1 = var2.getAudioPid;
                        var0 = var1.bind(var2)(var3);
                    case 59:
                        return var0;
                }
            };
            var9.getAudioPid = var13;
            var13 = function arg0() {
                _fun60438: for (var _fun60438_ip = 0;;) switch (_fun60438_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var3 = undefined;
                        var2 = undefined;
                        var0 = var4.getDiscordUtils;
                        var0 = var0.bind(var4)();
                        var2 = var0.setForegroundProcess;
                    case 26: // try_start_0
                        var5 = var2;
                        var4 = null;
                        var4 = var4 != var5;
                        var0 = var4;
                        if (!var4) {
                            _fun60438_ip = 46;
                            continue _fun60438
                        }
                    case 41:
                        var0 = var2.bind(var3)(var1);
                    case 46: // try_end0
                        return var0;
                    case 48: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var9.setForegroundProcess = var13;
            var13 = function() {
                _fun60439: for (var _fun60439_ip = 0;;) switch (_fun60439_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getDiscordMemoryUsage;
                        var0 = null;
                        var1 = var0 != var2;
                        if (!var1) {
                            _fun60439_ip = 34;
                            continue _fun60439
                        }
                    case 28:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 34:
                        return var0;
                }
            };
            var9.getDiscordMemoryUsage = var13;
            var13 = function() {
                _fun60440: for (var _fun60440_ip = 0;;) switch (_fun60440_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getDiscordMemoryUsageElectronRenderer;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60440_ip = 36;
                            continue _fun60440
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getDiscordMemoryUsageElectronRenderer = var13;
            var13 = function() {
                _fun60441: for (var _fun60441_ip = 0;;) switch (_fun60441_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getDiscordMemoryPrivUsageElectronRenderer;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60441_ip = 38;
                            continue _fun60441
                        }
                    case 34:
                        var0 = var2.bind(var1)();
                    case 38:
                        return var0;
                }
            };
            var9.getDiscordMemoryPrivateUsageElectronRenderer = var13;
            var13 = function() {
                _fun60442: for (var _fun60442_ip = 0;;) switch (_fun60442_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getDiscordMemoryUsageElectronProcessTypeDetails;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60442_ip = 36;
                            continue _fun60442
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getDiscordMemoryUsageElectronProcessTypeDetails = var13;
            var13 = function arg0() {
                _fun60443: for (var _fun60443_ip = 0;;) switch (_fun60443_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var3 = var0.enablePerfMemoryHooks;
                        var0 = null;
                        var1 = var0 == var3;
                        var2 = undefined;
                        var0 = undefined;
                        if (var1) {
                            _fun60443_ip = 40;
                            continue _fun60443
                        }
                    case 32:
                        var1 = arg0;
                        var0 = var3.bind(var2)(var1);
                    case 40:
                        return var0;
                }
            };
            var9.enablePerfMemoryHooks = var13;
            var13 = function() {
                _fun60444: for (var _fun60444_ip = 0;;) switch (_fun60444_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.disablePerfMemoryHooks;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60444_ip = 36;
                            continue _fun60444
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.disablePerfMemoryHooks = var13;
            var13 = function() {
                _fun60445: for (var _fun60445_ip = 0;;) switch (_fun60445_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getPerfAttributedMemory;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60445_ip = 36;
                            continue _fun60445
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getPerfAttributedMemory = var13;
            var13 = function arg0() {
                _fun60446: for (var _fun60446_ip = 0;;) switch (_fun60446_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var3 = var0.getPerfAttributedMemoryCallstacks;
                        var0 = null;
                        var1 = var0 == var3;
                        var2 = undefined;
                        var0 = undefined;
                        if (var1) {
                            _fun60446_ip = 40;
                            continue _fun60446
                        }
                    case 32:
                        var1 = arg0;
                        var0 = var3.bind(var2)(var1);
                    case 40:
                        return var0;
                }
            };
            var9.getPerfAttributedMemoryCallstacks = var13;
            var13 = function() {
                _fun60447: for (var _fun60447_ip = 0;;) switch (_fun60447_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getPerfAttributedMemoryStats;
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun60447_ip = 36;
                            continue _fun60447
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getPerfAttributedMemoryStats = var13;
            var13 = function arg0() {
                _fun60448: for (var _fun60448_ip = 0;;) switch (_fun60448_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var3 = var0.startCPUProfiling;
                        var0 = null;
                        var1 = var0 == var3;
                        var2 = undefined;
                        var0 = undefined;
                        if (var1) {
                            _fun60448_ip = 40;
                            continue _fun60448
                        }
                    case 32:
                        var1 = arg0;
                        var0 = var3.bind(var2)(var1);
                    case 40:
                        return var0;
                }
            };
            var9.startCPUProfiling = var13;
            var13 = function() {
                var1 = this;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60451: for (var _fun60451_ip = 0;;) switch (_fun60451_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60451_ip = 142;
                                    continue _fun60451
                                }
                            case 10:
                                var2 = _closure2_slot0;
                                var1 = var2.getDiscordUtils;
                                var1 = var1.bind(var2)();
                                var4 = var1.stopCPUProfiling;
                                var2 = null;
                                var5 = var2 == var4;
                                var3 = undefined;
                                var1 = undefined;
                                if (var5) {
                                    _fun60451_ip = 50;
                                    continue _fun60451
                                }
                            case 46:
                                var1 = var4.bind(var3)();
                            case 50:
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun60451_ip = 139;
                                    continue _fun60451
                                }
                            case 60:
                                if (!(var2 != var1)) {
                                    _fun60451_ip = 85;
                                    continue _fun60451
                                }
                            case 64:
                                var2 = global;
                                var3 = var2.JSON;
                                var2 = var3.parse;
                                var2 = var2.bind(var3)(var1);
                                _fun60451_ip = 136;
                                continue _fun60451;
                            case 85:
                                var3 = global;
                                var5 = var3.Promise;
                                var4 = var5.reject;
                                var7 = var3.Error;
                                var3 = var7.prototype;
                                var6 = Object.create(var3, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var8 = 'Failed to stop CPU profiling';
                                var9 = var6;
                                var3 = new var9[var7](var8, var7);
                                var3 = var3 instanceof Object ? var3 : var6;
                                var2 = var4.bind(var5)(var3);
                            case 136:
                                return var2;
                            case 139:
                                return var1;
                            case 142:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.stopCPUProfiling = var13;
            var13 = function arg0() {
                _fun60452: for (var _fun60452_ip = 0;;) switch (_fun60452_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var4 = var0.gzipAndBase64Encode;
                        var3 = null;
                        var1 = var3 == var4;
                        var2 = undefined;
                        var0 = undefined;
                        if (var1) {
                            _fun60452_ip = 40;
                            continue _fun60452
                        }
                    case 32:
                        var1 = arg0;
                        var0 = var4.bind(var2)(var1);
                    case 40:
                        if (!(var3 == var0)) {
                            _fun60452_ip = 63;
                            continue _fun60452
                        }
                    case 44:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var0 = var1.bind(var2)(var3);
                    case 63:
                        return var0;
                }
            };
            var9.gzipAndBase64Encode = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var2 = var0.fileManager;
                var1 = var2.showOpenDialog;
                var0 = {};
                var3 = arg0;
                var0.properties = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var9.showOpenDialog = var13;
            var13 = function() {
                _fun60454: for (var _fun60454_ip = 0;;) switch (_fun60454_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.isPlatformEmbedded;
                        var1 = global;
                        var3 = var1.Promise;
                        if (var0) {
                            _fun60454_ip = 54;
                            continue _fun60454
                        }
                    case 42:
                        var0 = var3.resolve;
                        var0 = var0.bind(var3)();
                        _fun60454_ip = 81;
                        continue _fun60454;
                    case 54:
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var1
                            _fun60455: for (var _fun60455_ip = 0;;) switch (_fun60455_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure3_slot0 = var3;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var2 = _closure1_slot6;
                                    var2 = var2.processUtils;
                                    var4 = var2.flushStorageData;
                                    var2 = null;
                                    if (!(var2 == var4)) {
                                        _fun60455_ip = 49;
                                        continue _fun60455
                                    }
                                case 41:
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    _fun60455_ip = 75;
                                    continue _fun60455;
                                case 49:
                                    var1 = _closure1_slot6;
                                    var2 = var1.processUtils;
                                    var1 = var2.flushStorageData;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun60456: for (var _fun60456_ip = 0;;) switch (_fun60456_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = null;
                                                if (!(var0 == var4)) {
                                                    _fun60456_ip = 24;
                                                    continue _fun60456
                                                }
                                            case 9:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                _fun60456_ip = 69;
                                                continue _fun60456;
                                            case 24:
                                                var3 = _closure3_slot1;
                                                var1 = global;
                                                var1 = var1.Error;
                                                var2 = var1.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var6 = var2;
                                                var5 = var4;
                                                var1 = new var6[var1](var5, var4);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var1 = undefined;
                                                var0 = var3.bind(var1)(var2);
                                            case 69:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 75:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 81:
                        return var0;
                }
            };
            var9.flushStorageData = var13;
            var13 = function() {
                _fun60457: for (var _fun60457_ip = 0;;) switch (_fun60457_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.isPlatformEmbedded;
                        var1 = global;
                        var3 = var1.Promise;
                        if (var0) {
                            _fun60457_ip = 54;
                            continue _fun60457
                        }
                    case 42:
                        var0 = var3.resolve;
                        var0 = var0.bind(var3)();
                        _fun60457_ip = 81;
                        continue _fun60457;
                    case 54:
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var1
                            _fun60458: for (var _fun60458_ip = 0;;) switch (_fun60458_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure3_slot0 = var3;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var2 = _closure1_slot6;
                                    var2 = var2.processUtils;
                                    var4 = var2.flushCookies;
                                    var2 = null;
                                    if (!(var2 == var4)) {
                                        _fun60458_ip = 49;
                                        continue _fun60458
                                    }
                                case 41:
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    _fun60458_ip = 75;
                                    continue _fun60458;
                                case 49:
                                    var1 = _closure1_slot6;
                                    var2 = var1.processUtils;
                                    var1 = var2.flushCookies;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun60459: for (var _fun60459_ip = 0;;) switch (_fun60459_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = null;
                                                if (!(var0 == var4)) {
                                                    _fun60459_ip = 24;
                                                    continue _fun60459
                                                }
                                            case 9:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                _fun60459_ip = 69;
                                                continue _fun60459;
                                            case 24:
                                                var3 = _closure3_slot1;
                                                var1 = global;
                                                var1 = var1.Error;
                                                var2 = var1.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var1
                                                    }
                                                });
                                                var6 = var2;
                                                var5 = var4;
                                                var1 = new var6[var1](var5, var4);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var1 = undefined;
                                                var0 = var3.bind(var1)(var2);
                                            case 69:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 75:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 81:
                        return var0;
                }
            };
            var9.flushCookies = var13;
            var13 = function arg0, arg1() {
                _fun60460: for (var _fun60460_ip = 0;;) switch (_fun60460_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60460_ip = 78;
                            continue _fun60460
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = null;
                        var5 = var4 == var3;
                        var3 = undefined;
                        if (var5) {
                            _fun60460_ip = 74;
                            continue _fun60460
                        }
                    case 49:
                        var5 = _closure1_slot6;
                        var5 = var5.processUtils;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun60460_ip = 74;
                            continue _fun60460
                        }
                    case 68:
                        var3 = var5.setCrashInformation;
                    case 74:
                        var2 = var4 != var3;
                    case 78:
                        if (!var2) {
                            _fun60460_ip = 109;
                            continue _fun60460
                        }
                    case 81:
                        var1 = _closure1_slot6;
                        var4 = var1.processUtils;
                        var3 = var4.setCrashInformation;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                    case 109:
                        return var0;
                }
            };
            var9.setCrashInformation = var13;
            var13 = function() {
                _fun60461: for (var _fun60461_ip = 0;;) switch (_fun60461_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var2 = var0.isPlatformEmbedded;
                        var3 = null;
                        var0 = null;
                        if (!var2) {
                            _fun60461_ip = 77;
                            continue _fun60461
                        }
                    case 38:
                        var2 = _closure1_slot6;
                        var2 = var2.powerSaveBlocker;
                        var2 = var3 != var2;
                        var0 = null;
                        if (!var2) {
                            _fun60461_ip = 77;
                            continue _fun60461
                        }
                    case 57:
                        var1 = _closure1_slot6;
                        var2 = var1.powerSaveBlocker;
                        var1 = var2.blockDisplaySleep;
                        var0 = var1.bind(var2)();
                    case 77:
                        return var0;
                }
            };
            var9.blockDisplaySleep = var13;
            var13 = function arg0() {
                _fun60462: for (var _fun60462_ip = 0;;) switch (_fun60462_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60462_ip = 50;
                            continue _fun60462
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = var3.powerSaveBlocker;
                        var3 = null;
                        var2 = var3 != var4;
                    case 50:
                        if (!var2) {
                            _fun60462_ip = 77;
                            continue _fun60462
                        }
                    case 53:
                        var1 = _closure1_slot6;
                        var3 = var1.powerSaveBlocker;
                        var2 = var3.unblockDisplaySleep;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                    case 77:
                        return var0;
                }
            };
            var9.unblockDisplaySleep = var13;
            var13 = function() {
                _fun60463: for (var _fun60463_ip = 0;;) switch (_fun60463_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60463_ip = 50;
                            continue _fun60463
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = var3.powerSaveBlocker;
                        var3 = null;
                        var2 = var3 != var4;
                    case 50:
                        if (!var2) {
                            _fun60463_ip = 73;
                            continue _fun60463
                        }
                    case 53:
                        var1 = _closure1_slot6;
                        var2 = var1.powerSaveBlocker;
                        var1 = var2.cleanupDisplaySleep;
                        var1 = var1.bind(var2)();
                    case 73:
                        return var0;
                }
            };
            var9.cleanupDisplaySleep = var13;
            var13 = function() {
                _fun60464: for (var _fun60464_ip = 0;;) switch (_fun60464_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60464_ip = 56;
                            continue _fun60464
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var3 = var3.remoteApp;
                        var4 = var3.relaunch;
                        var3 = null;
                        var2 = var3 != var4;
                    case 56:
                        if (!var2) {
                            _fun60464_ip = 79;
                            continue _fun60464
                        }
                    case 59:
                        var1 = _closure1_slot6;
                        var2 = var1.remoteApp;
                        var1 = var2.relaunch;
                        var1 = var1.bind(var2)();
                    case 79:
                        return var0;
                }
            };
            var9.relaunch = var13;
            var13 = function arg0, arg1, arg2() {
                _fun60465: for (var _fun60465_ip = 0;;) switch (_fun60465_ip) {
                    case 0:
                        var7 = arg1;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 11;
                        var0 = var6[var0];
                        var4 = undefined;
                        var3 = var5.bind(var4)(var0);
                        var0 = var3.getAPIBaseURL;
                        var10 = var0.bind(var3)();
                        var0 = global;
                        var3 = var0.HermesInternal;
                        var9 = var3.concat;
                        var8 = '';
                        var3 = arg0;
                        var3 = var9.bind(var8)(var10, var3);
                        var _closure2_slot0 = var3;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (var3) {
                            _fun60465_ip = 142;
                            continue _fun60465
                        }
                    case 91:
                        var5 = var0.Promise;
                        var4 = var5.reject;
                        var8 = var0.Error;
                        var3 = var8.prototype;
                        var6 = Object.create(var3, {
                            constructor: {
                                value: var8
                            }
                        });
                        var12 = 'Not embedded!';
                        var13 = var6;
                        var3 = new var13[var8](var12, var11);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 142:
                        var2 = _closure1_slot6;
                        var3 = var2.http;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun60465_ip = 405;
                            continue _fun60465
                        }
                    case 161:
                        var2 = {
                            'maxBps': 8000,
                            'chunkInterval': 50,
                            'contentType': 'application/json'
                        };
                        var5 = 'application/json';
                        var11 = arg2;
                        var12 = var2;
                        var3 = copyDataProperties(var12, var11);
                        var3 = var2.method;
                        var _closure2_slot1 = var3;
                        var3 = var2.maxBps;
                        var4 = var2.token;
                        var _closure2_slot2 = var4;
                        var4 = var2.chunkInterval;
                        var _closure2_slot3 = var4;
                        var2 = var2.contentType;
                        var _closure2_slot4 = var2;
                        var6 = var7;
                        if (!(var5 === var2)) {
                            _fun60465_ip = 259;
                            continue _fun60465
                        }
                    case 242:
                        var5 = var0.JSON;
                        var2 = var5.stringify;
                        var6 = var2.bind(var5)(var7);
                    case 259:
                        var2 = 1000;
                        var2 = var4 / var2;
                        var5 = var3 * var2;
                        var4 = var0.Math;
                        var3 = var4.ceil;
                        var2 = var6.length;
                        var2 = var2 / var5;
                        var4 = var3.bind(var4)(var2);
                        var2 = var0.Array;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = var3;
                        var12 = var4;
                        var2 = new var13[var2](var12, var11);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var _closure2_slot5 = var3;
                        var2 = 0;
                        var7 = var2 < var4;
                        if (!var7) {
                            _fun60465_ip = 372;
                            continue _fun60465
                        }
                    case 341:
                        var9 = var2 * var5;
                        var8 = var6.substring;
                        var7 = var9 + var5;
                        var7 = var8.bind(var6)(var9, var7);
                        var3[var2] = var7;
                        var2 = var2 + 1;
                        if (var2 < var4) {
                            _fun60465_ip = 341;
                            continue _fun60465
                        }
                    case 372:
                        var3 = var0.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = function(arg0, arg1) { // Environment: var1
                            _fun60466: for (var _fun60466_ip = 0;;) switch (_fun60466_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var2 = _closure1_slot6;
                                    var3 = var2.http;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun60466_ip = 115;
                                        continue _fun60466
                                    }
                                case 35:
                                    var1 = _closure1_slot6;
                                    var5 = var1.http;
                                    var4 = var5.makeChunkedRequest;
                                    var11 = _closure2_slot0;
                                    var10 = _closure2_slot5;
                                    var1 = {};
                                    var7 = _closure2_slot1;
                                    var1.method = var7;
                                    var7 = _closure2_slot3;
                                    var1.chunkInterval = var7;
                                    var7 = _closure2_slot4;
                                    var1.contentType = var7;
                                    var6 = _closure2_slot2;
                                    var1.token = var6;
                                    var8 = function(arg0, arg1) { // Environment: var0
                                        _fun60467: for (var _fun60467_ip = 0;;) switch (_fun60467_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var1 = arg1;
                                                var0 = null;
                                                if (!(var0 == var3)) {
                                                    _fun60467_ip = 94;
                                                    continue _fun60467
                                                }
                                            case 12:
                                                var2 = var1.status;
                                                var0 = 400;
                                                if (!(!(var2 >= var0))) {
                                                    _fun60467_ip = 45;
                                                    continue _fun60467
                                                }
                                            case 27:
                                                var2 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                var0 = undefined;
                                                _fun60467_ip = 92;
                                                continue _fun60467;
                                            case 45:
                                                var4 = _closure3_slot1;
                                                var2 = global;
                                                var5 = var2.Error;
                                                var6 = var1.body;
                                                var2 = var5.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var7 = var2;
                                                var1 = new var7[var5](var6, var5);
                                                var2 = var1 instanceof Object ? var1 : var2;
                                                var1 = undefined;
                                                var0 = var4.bind(var1)(var2);
                                            case 92:
                                                _fun60467_ip = 108;
                                                continue _fun60467;
                                            case 94:
                                                var2 = _closure3_slot1;
                                                var1 = undefined;
                                                var0 = var2.bind(var1)(var3);
                                            case 108:
                                                return var0;
                                        }
                                    };
                                    var12 = var5;
                                    var9 = var1;
                                    var0 = var12[var4](var11, var10, var9, var8, var7);
                                case 115:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 405:
                        var2 = var0.Promise;
                        var1 = var2.reject;
                        var4 = var0.Error;
                        var0 = var4.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = 'HTTP module not available';
                        var13 = var3;
                        var0 = new var13[var4](var12, var11);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var9.makeChunkedRequest = var13;
            var13 = function arg0() {
                _fun60468: for (var _fun60468_ip = 0;;) switch (_fun60468_ip) {
                    case 0:
                        var1 = this;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 6;
                        var0 = var4[var0];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.isWindows;
                        var0 = var0.bind(var2)();
                        if (!var0) {
                            _fun60468_ip = 154;
                            continue _fun60468
                        }
                    case 41:
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var0 = var0.submitLiveCrashReport;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun60468_ip = 154;
                            continue _fun60468
                        }
                    case 63:
                        var0 = var1.getCrashReporterMetadata;
                        var0 = var0.bind(var1)();
                        var3 = _closure1_slot6;
                        var5 = var3.app;
                        var3 = var5.getReleaseChannel;
                        var3 = var3.bind(var5)();
                        var2 = var2 == var0;
                        var4 = undefined;
                        if (var2) {
                            _fun60468_ip = 108;
                            continue _fun60468
                        }
                    case 102:
                        var4 = var0.sentry;
                    case 108:
                        var0 = var1.getDiscordUtils;
                        var2 = var0.bind(var1)();
                        var1 = var2.submitLiveCrashReport;
                        var0 = {};
                        var7 = var0;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var6 = arg0;
                        var7 = var0;
                        var4 = copyDataProperties(var7, var6);
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 154:
                        var0 = global;
                        var1 = var0.Promise;
                        var0 = var1.resolve;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var9.submitLiveCrashReport = var13;
            var13 = function arg0() {
                _fun60469: for (var _fun60469_ip = 0;;) switch (_fun60469_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var3 = var0.crash;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun60469_ip = 40;
                            continue _fun60469
                        }
                    case 28:
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var2)(var1);
                        var0 = true;
                    case 40:
                        return var0;
                }
            };
            var9.crash = var13;
            var13 = function arg0() {
                var0 = _closure1_slot6;
                var3 = var0.ipc;
                var2 = var3.send;
                var1 = 'SETTINGS_UPDATE_BACKGROUND_COLOR';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var9.setApplicationBackgroundColor = var13;
            var13 = function() {
                _fun60471: for (var _fun60471_ip = 0;;) switch (_fun60471_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.initializeExitHook;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60471_ip = 31;
                            continue _fun60471
                        }
                    case 25:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 31:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.initializeExitHook = var13;
            var13 = function() {
                _fun60472: for (var _fun60472_ip = 0;;) switch (_fun60472_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.initializeWERHandler;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60472_ip = 31;
                            continue _fun60472
                        }
                    case 25:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 31:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.initializeWERHandler = var13;
            var13 = function arg0() {
                _fun60473: for (var _fun60473_ip = 0;;) switch (_fun60473_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.pollQueueMetrics;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60473_ip = 35;
                            continue _fun60473
                        }
                    case 25:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                    case 35:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.pollQueueMetrics = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var9.asyncify = var13;
            var13 = function() {
                var1 = this;
                var0 = var1.getDiscordUtils;
                var0 = var0.bind(var1)();
                var1 = var0.gameDisplayModeUpdate;
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var9.IsGameDisplayModeUpdateSupported = var13;
            var13 = function arg0() {
                _fun60477: for (var _fun60477_ip = 0;;) switch (_fun60477_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.gameDisplayModeUpdate;
                        var1 = null;
                        var0 = var1 != var2;
                        if (!var0) {
                            _fun60477_ip = 35;
                            continue _fun60477
                        }
                    case 31:
                        var0 = var1 != var3;
                    case 35:
                        if (!var0) {
                            _fun60477_ip = 45;
                            continue _fun60477
                        }
                    case 38:
                        var1 = undefined;
                        var0 = var2.bind(var1)(var3);
                    case 45:
                        return var0;
                }
            };
            var9.GameDisplayModeUpdate = var13;
            var13 = function arg0() {
                _fun60478: for (var _fun60478_ip = 0;;) switch (_fun60478_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.gameDisplayModeIsSupported;
                        var1 = null;
                        var0 = var1 != var2;
                        if (!var0) {
                            _fun60478_ip = 37;
                            continue _fun60478
                        }
                    case 33:
                        var0 = var1 != var3;
                    case 37:
                        if (!var0) {
                            _fun60478_ip = 47;
                            continue _fun60478
                        }
                    case 40:
                        var1 = undefined;
                        var0 = var2.bind(var1)(var3);
                    case 47:
                        return var0;
                }
            };
            var9.GameDisplayModeIsGameSupported = var13;
            var13 = function arg0, arg1, arg2() {
                _fun60479: for (var _fun60479_ip = 0;;) switch (_fun60479_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var0 = arg2;
                        var2 = this;
                        var1 = var2.getDiscordUtils;
                        var1 = var1.bind(var2)();
                        var4 = var1.getWindowFullscreenTypeByPid;
                        var1 = null;
                        var3 = 0;
                        var2 = null;
                        if (!(var3 !== var6)) {
                            _fun60479_ip = 66;
                            continue _fun60479
                        }
                    case 40:
                        var3 = var1 != var4;
                        var2 = null;
                        if (!var3) {
                            _fun60479_ip = 66;
                            continue _fun60479
                        }
                    case 49:
                        var3 = var1 != var5;
                        var2 = null;
                        if (!var3) {
                            _fun60479_ip = 66;
                            continue _fun60479
                        }
                    case 58:
                        var3 = undefined;
                        var2 = var4.bind(var3)(var6, var5);
                    case 66:
                        var3 = -1;
                        if (!(var3 === var2)) {
                            _fun60479_ip = 78;
                            continue _fun60479
                        }
                    case 76:
                        var2 = null;
                    case 78:
                        if (!(var1 != var2)) {
                            _fun60479_ip = 85;
                            continue _fun60479
                        }
                    case 82:
                        var0 = var2;
                    case 85:
                        if (!(var1 == var0)) {
                            _fun60479_ip = 126;
                            continue _fun60479
                        }
                    case 89:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.RunningProcessFullscreenType;
                        var0 = var1.UNKNOWN;
                    case 126:
                        return var0;
                }
            };
            var9.GetWindowFullscreenTypeByPid = var13;
            var13 = function arg0, arg1() {
                _fun60480: for (var _fun60480_ip = 0;;) switch (_fun60480_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getWindowFullscreenTypeExtraByPid;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60480_ip = 47;
                            continue _fun60480
                        }
                    case 30:
                        if (!(var0 != var3)) {
                            _fun60480_ip = 47;
                            continue _fun60480
                        }
                    case 34:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        _fun60480_ip = 96;
                        continue _fun60480;
                    case 47:
                        var1 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.QueryUserNotificationState;
                        var2 = var2.QUNS_UNKNOWN;
                        var1.quns = var2;
                        var0 = var1;
                    case 96:
                        return var0;
                }
            };
            var9.GetWindowFullscreenTypeExtraByPid = var13;
            var13 = function arg0, arg1() {
                _fun60481: for (var _fun60481_ip = 0;;) switch (_fun60481_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var4 = var0.setGPUBoostEnabledByPid;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun60481_ip = 44;
                            continue _fun60481
                        }
                    case 30:
                        var3 = undefined;
                        var2 = arg0;
                        var1 = arg1;
                        var0 = var4.bind(var3)(var2, var1);
                    case 44:
                        return var0;
                }
            };
            var9.SetGPUBoostEnabledByPid = var13;
            var13 = function() {
                _fun60482: for (var _fun60482_ip = 0;;) switch (_fun60482_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.isHardwareAcceleratedGPUSchedulingEnabled;
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun60482_ip = 36;
                            continue _fun60482
                        }
                    case 30:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.IsHardwareAcceleratedGPUSchedulingEnabled = var13;
            var13 = function arg0() {
                _fun60483: for (var _fun60483_ip = 0;;) switch (_fun60483_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.acquireGlobalLock;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60483_ip = 31;
                            continue _fun60483
                        }
                    case 27:
                        var0 = undefined;
                        return var0;
                    case 31:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var9.AcquireGlobalLock = var13;
            var13 = function arg0() {
                _fun60484: for (var _fun60484_ip = 0;;) switch (_fun60484_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.setServiceChannel;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60484_ip = 37;
                            continue _fun60484
                        }
                    case 27:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.SetServiceChannel = var13;
            var13 = function() {
                _fun60485: for (var _fun60485_ip = 0;;) switch (_fun60485_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.isSystemServiceInstalled;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60485_ip = 31;
                            continue _fun60485
                        }
                    case 27:
                        var0 = undefined;
                        return var0;
                    case 31:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var9.IsSystemServiceInstalled = var13;
            var13 = function() {
                _fun60486: for (var _fun60486_ip = 0;;) switch (_fun60486_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.canSystemServiceBeInstalled;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60486_ip = 31;
                            continue _fun60486
                        }
                    case 27:
                        var0 = undefined;
                        return var0;
                    case 31:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var9.CanSystemServiceBeInstalled = var13;
            var13 = function() {
                _fun60487: for (var _fun60487_ip = 0;;) switch (_fun60487_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.installSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60487_ip = 80;
                            continue _fun60487
                        }
                    case 27:
                        var0 = global;
                        var3 = var0.Promise;
                        var1 = var3.reject;
                        var5 = var0.Error;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'System service native not available';
                        var7 = var4;
                        var0 = new var7[var5](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var0 = var1.bind(var3)(var0);
                        _fun60487_ip = 86;
                        continue _fun60487;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.InstallSystemService = var13;
            var13 = function() {
                _fun60488: for (var _fun60488_ip = 0;;) switch (_fun60488_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.doesSystemServiceHaveUpdate;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60488_ip = 80;
                            continue _fun60488
                        }
                    case 27:
                        var0 = global;
                        var3 = var0.Promise;
                        var1 = var3.reject;
                        var5 = var0.Error;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'System service native not available';
                        var7 = var4;
                        var0 = new var7[var5](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var0 = var1.bind(var3)(var0);
                        _fun60488_ip = 86;
                        continue _fun60488;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.DoesSystemServiceHaveUpdate = var13;
            var13 = function() {
                _fun60489: for (var _fun60489_ip = 0;;) switch (_fun60489_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.updateSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60489_ip = 80;
                            continue _fun60489
                        }
                    case 27:
                        var0 = global;
                        var3 = var0.Promise;
                        var1 = var3.reject;
                        var5 = var0.Error;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'System service native not available';
                        var7 = var4;
                        var0 = new var7[var5](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var0 = var1.bind(var3)(var0);
                        _fun60489_ip = 86;
                        continue _fun60489;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.UpdateSystemService = var13;
            var13 = function() {
                _fun60490: for (var _fun60490_ip = 0;;) switch (_fun60490_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.uninstallSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60490_ip = 80;
                            continue _fun60490
                        }
                    case 27:
                        var0 = global;
                        var3 = var0.Promise;
                        var1 = var3.reject;
                        var5 = var0.Error;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = 'System service native not available';
                        var7 = var4;
                        var0 = new var7[var5](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var4;
                        var0 = var1.bind(var3)(var0);
                        _fun60490_ip = 86;
                        continue _fun60490;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.UninstallSystemService = var13;
            var13 = function arg0() {
                _fun60491: for (var _fun60491_ip = 0;;) switch (_fun60491_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.inputEventServiceSetStatusCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60491_ip = 37;
                            continue _fun60491
                        }
                    case 27:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.InputEventServiceSetStatusCallback = var13;
            var13 = function arg0() {
                _fun60492: for (var _fun60492_ip = 0;;) switch (_fun60492_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.inputEventServiceSetAllowed;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60492_ip = 31;
                            continue _fun60492
                        }
                    case 27:
                        var0 = undefined;
                        return var0;
                    case 31:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var9.InputEventServiceSetAllowed = var13;
            var13 = function arg0() {
                _fun60493: for (var _fun60493_ip = 0;;) switch (_fun60493_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.toolServiceSetStatusCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60493_ip = 37;
                            continue _fun60493
                        }
                    case 27:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            var9.ToolServiceSetStatusCallback = var13;
            var13 = function arg0() {
                _fun60494: for (var _fun60494_ip = 0;;) switch (_fun60494_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.toolServiceSetAllowed;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60494_ip = 31;
                            continue _fun60494
                        }
                    case 27:
                        var0 = undefined;
                        return var0;
                    case 31:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var9.ToolServiceSetAllowed = var13;
            var13 = function arg0, arg1() {
                _fun60495: for (var _fun60495_ip = 0;;) switch (_fun60495_ip) {
                    case 0:
                        var0 = arg1;
                        var3 = this;
                        var2 = _closure1_slot9;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun60495_ip = 29;
                            continue _fun60495
                        }
                    case 19:
                        var4 = [0, 0, 0];
                        _fun60495_ip = 33;
                        continue _fun60495;
                    case 29:
                        var4 = _closure1_slot9;
                    case 33:
                        var2 = new Array(0);
                        var7 = 0;
                        var13 = var2;
                        var12 = var4;
                        var11 = 0;
                        var4 = arraySpread(var13, var12, var11);
                        var5 = var2.push;
                        var10 = var3.moduleVersions;
                        var4 = var1 == var10;
                        var6 = undefined;
                        var9 = undefined;
                        if (var4) {
                            _fun60495_ip = 82;
                            continue _fun60495
                        }
                    case 75:
                        var4 = arg0;
                        var9 = var10[var4];
                    case 82:
                        var10 = var1 != var9;
                        var4 = 0;
                        if (!var10) {
                            _fun60495_ip = 94;
                            continue _fun60495
                        }
                    case 91:
                        var4 = var9;
                    case 94:
                        var4 = var5.bind(var2)(var4);
                        var3 = var3.releaseChannel;
                        var5 = var0[var3];
                        if (!(var1 == var5)) {
                            _fun60495_ip = 119;
                            continue _fun60495
                        }
                    case 113:
                        var5 = var0.stable;
                    case 119:
                        var1 = _closure1_slot22;
                        var0 = var2.entries;
                        var0 = var0.bind(var2)();
                        var4 = var1.bind(var6)(var0);
                        var1 = var4.bind(var6)();
                        var0 = var1.done;
                        var3 = 2;
                        var2 = 1;
                        if (var0) {
                            _fun60495_ip = 220;
                            continue _fun60495
                        }
                    case 156:
                        var9 = var1.value;
                        var0 = _closure1_slot3;
                        var9 = var0.bind(var6)(var9, var3);
                        var0 = var9[var7];
                        var9 = var9[var2];
                        var10 = var5[var0];
                        if (!(!(var9 > var10))) {
                            _fun60495_ip = 216;
                            continue _fun60495
                        }
                    case 187:
                        var0 = var5[var0];
                        if (!(!(var9 < var0))) {
                            _fun60495_ip = 212;
                            continue _fun60495
                        }
                    case 195:
                        var9 = var4.bind(var6)();
                        var0 = var9.done;
                        var1 = var9;
                        if (var0) {
                            _fun60495_ip = 220;
                            continue _fun60495
                        }
                    case 210:
                        _fun60495_ip = 156;
                        continue _fun60495;
                    case 212:
                        var0 = false;
                        return var0;
                    case 216:
                        var0 = true;
                        return var0;
                    case 220:
                        var0 = true;
                        return var0;
                }
            };
            var9.isModuleVersionAtLeast = var13;
            var13 = function arg0() {
                _fun60496: for (var _fun60496_ip = 0;;) switch (_fun60496_ip) {
                    case 0:
                        var4 = arguments[1];
                        var3 = undefined;
                        if (!(var4 === var3)) {
                            _fun60496_ip = 11;
                            continue _fun60496
                        }
                    case 9:
                        var4 = {};
                    case 11:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 6;
                        var0 = var5[var0];
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60496_ip = 96;
                            continue _fun60496
                        }
                    case 43:
                        var0 = global;
                        var3 = var0.Promise;
                        var2 = var3.reject;
                        var6 = var0.Error;
                        var0 = var6.prototype;
                        var5 = Object.create(var0, {
                            constructor: {
                                value: var6
                            }
                        });
                        var8 = 'Not embedded!';
                        var9 = var5;
                        var0 = new var9[var6](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var5;
                        var0 = var2.bind(var3)(var0);
                        _fun60496_ip = 195;
                        continue _fun60496;
                    case 96:
                        var2 = _closure1_slot6;
                        var3 = var2.riotGames;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun60496_ip = 141;
                            continue _fun60496
                        }
                    case 112:
                        var1 = _closure1_slot6;
                        var3 = var1.riotGames;
                        var2 = var3.fetchLiveClientData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var4);
                        _fun60496_ip = 192;
                        continue _fun60496;
                    case 141:
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.reject;
                        var6 = var2.Error;
                        var2 = var6.prototype;
                        var5 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var8 = 'Riot Games module not available';
                        var9 = var5;
                        var2 = new var9[var6](var8, var7);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var1 = var3.bind(var4)(var2);
                    case 192:
                        var0 = var1;
                    case 195:
                        return var0;
                }
            };
            var9.fetchRiotGamesLiveClientData = var13;
            var13 = function() {
                _fun60497: for (var _fun60497_ip = 0;;) switch (_fun60497_ip) {
                    case 0:
                        var3 = this;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isDesktop;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun60497_ip = 58;
                            continue _fun60497
                        }
                    case 41:
                        var2 = var3.send;
                        var1 = 'APP_VIEWED';
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var9.appViewed = var13;
            var13 = function() {
                _fun60498: for (var _fun60498_ip = 0;;) switch (_fun60498_ip) {
                    case 0:
                        var3 = this;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isDesktop;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun60498_ip = 58;
                            continue _fun60498
                        }
                    case 41:
                        var2 = var3.send;
                        var1 = 'APP_FIRST_RENDER_AFTER_READY_PAYLOAD';
                        var1 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var9.appFirstRenderAfterReadyPayload = var13;
            var13 = function() {
                var2 = _closure1_slot30;
                var0 = undefined;
                var1 = 'APP_LOADED';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var9.appLoaded = var13;
            var13 = function() {
                var2 = _closure1_slot30;
                var0 = undefined;
                var1 = 'DISCORD_APP_ASYNC_INDEX_TSX_LOADED';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var9.indexLoadedAsync = var13;
            var _closure1_slot21 = var9;
            var10 = 12;
            var10 = var12[var10];
            var12 = var11.bind(var0)(var10);
            var11 = var12.fileFinishedImporting;
            var10 = 'utils/web/DesktopNativeUtils.tsx';
            var10 = var11.bind(var12)(var10);
            var2.default = var9;
            var2.SaveImageResult = var8;
            var2.sanitizeFilename = var7;
            var2.getFileData = var6;
            var2.getImageData = var5;
            var2.NativePermissionRequestType = var4;
            var2.ThumbarButtonName = var3;
            var2.decideFileExtension = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 660, 44, 4254, 1457, 478, 587, 7469, 3489, 4, 507, 2]);