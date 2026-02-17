// utils/web/DesktopNativeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun60723: for (var _fun60723_ip = 0;;) switch (_fun60723_ip) {
        case 0:
            var11 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var12;
            var0 = function arg0, arg1() {
                _fun60724: for (var _fun60724_ip = 0;;) switch (_fun60724_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun60724_ip = 46;
                            continue _fun60724
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun60724_ip = 55;
                            continue _fun60724
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun60724_ip = 343;
                            continue _fun60724
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun60724_ip = 323;
                            continue _fun60724
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun60724_ip = 283;
                            continue _fun60724
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun60724_ip = 270;
                            continue _fun60724
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
                            _fun60724_ip = 163;
                            continue _fun60724
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun60724_ip = 179;
                            continue _fun60724
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun60724_ip = 249;
                            continue _fun60724
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun60724_ip = 249;
                            continue _fun60724
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun60724_ip = 234;
                            continue _fun60724
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun60724_ip = 247;
                            continue _fun60724
                        }
                    case 234:
                        var8 = _closure1_slot23;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun60724_ip = 265;
                        continue _fun60724;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun60724_ip = 283;
                        continue _fun60724;
                    case 270:
                        var6 = _closure1_slot23;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun60724_ip = 323;
                            continue _fun60724
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
                            _fun60724_ip = 330;
                            continue _fun60724
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun60725: for (var _fun60725_ip = 0;;) switch (_fun60725_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun60725_ip = 56;
                                        continue _fun60725
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
                                    _fun60725_ip = 67;
                                    continue _fun60725;
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
                _fun60726: for (var _fun60726_ip = 0;;) switch (_fun60726_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun60726_ip = 23;
                            continue _fun60726
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun60726_ip = 33;
                            continue _fun60726
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
                            _fun60726_ip = 70;
                            continue _fun60726
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun60726_ip = 55;
                            continue _fun60726
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var7 = function arg0() {
                _fun60727: for (var _fun60727_ip = 0;;) switch (_fun60727_ip) {
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
                        _fun60731: for (var _fun60731_ip = 0;;) switch (_fun60731_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60731_ip = 189;
                                    continue _fun60731
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
                                    _fun60731_ip = 186;
                                    continue _fun60731
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
                                    _fun60731_ip = 183;
                                    continue _fun60731
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
                _fun60733: for (var _fun60733_ip = 0;;) switch (_fun60733_ip) {
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
                            _fun60733_ip = 36;
                            continue _fun60733
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
                            _fun60733_ip = 70;
                            continue _fun60733
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
                            _fun60733_ip = 101;
                            continue _fun60733
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
                            _fun60733_ip = 131;
                            continue _fun60733
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
                            _fun60733_ip = 176;
                            continue _fun60733
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
                            _fun60733_ip = 272;
                            continue _fun60733
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
                            _fun60733_ip = 306;
                            continue _fun60733
                        }
                    case 303:
                        var3 = var5;
                    case 306:
                        var0.windowHandle = var3;
                        var3 = var1.fullscreenType;
                        if (!(var2 == var3)) {
                            _fun60733_ip = 353;
                            continue _fun60733
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
                            _fun60733_ip = 374;
                            continue _fun60733
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
                _fun60734: for (var _fun60734_ip = 0;;) switch (_fun60734_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun60734_ip = 89;
                            continue _fun60734
                        }
                    case 9:
                        var2 = var3.startsWith;
                        var0 = 'image/';
                        var0 = var2.bind(var3)(var0);
                        if (!var0) {
                            _fun60734_ip = 89;
                            continue _fun60734
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
                            _fun60734_ip = 69;
                            continue _fun60734
                        }
                    case 59:
                        var2 = var3.toLowerCase;
                        var0 = var2.bind(var3)();
                    case 69:
                        var2 = 'jpeg';
                        if (!(var2 !== var0)) {
                            _fun60734_ip = 231;
                            continue _fun60734
                        }
                    case 82:
                        if (!(var1 == var0)) {
                            _fun60734_ip = 229;
                            continue _fun60734
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
                            _fun60734_ip = 134;
                            continue _fun60734
                        }
                    case 132:
                        return var4;
                    case 134:
                        var7 = var2.pathname;
                        var3 = var1 == var7;
                        var2 = undefined;
                        if (var3) {
                            _fun60734_ip = 201;
                            continue _fun60734
                        }
                    case 149:
                        var6 = var7.split;
                        var3 = '.';
                        var6 = var6.bind(var7)(var3);
                        var3 = var1 == var6;
                        var2 = undefined;
                        if (var3) {
                            _fun60734_ip = 201;
                            continue _fun60734
                        }
                    case 172:
                        var3 = var6.pop;
                        var6 = var3.bind(var6)();
                        var3 = var1 == var6;
                        var2 = undefined;
                        if (var3) {
                            _fun60734_ip = 201;
                            continue _fun60734
                        }
                    case 191:
                        var3 = var6.toLowerCase;
                        var2 = var3.bind(var6)();
                    case 201:
                        var3 = var1 != var2;
                        var1 = undefined;
                        if (!var3) {
                            _fun60734_ip = 227;
                            continue _fun60734
                        }
                    case 210:
                        var3 = var2.length;
                        var3 = var3 <= var5;
                        var1 = undefined;
                        if (!var3) {
                            _fun60734_ip = 227;
                            continue _fun60734
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
                _fun60735: for (var _fun60735_ip = 0;;) switch (_fun60735_ip) {
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
                            _fun60735_ip = 60;
                            continue _fun60735
                        }
                    case 41: // try_start_0
                        var3 = _closure1_slot21;
                        var2 = var3.send;
                        var1 = var2.bind(var3)(var1);
                    case 56: // try_end0
                        _fun60735_ip = 60;
                        continue _fun60735;
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
                _fun60723_ip = 448;
                continue _fun60723
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
                _fun60723_ip = 403;
                continue _fun60723
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
                _fun60723_ip = 444;
                continue _fun60723
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
                _fun60738: for (var _fun60738_ip = 0;;) switch (_fun60738_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60738_ip = 87;
                            continue _fun60738
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
                        _fun60738_ip = 111;
                        continue _fun60738;
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
                _fun60739: for (var _fun60739_ip = 0;;) switch (_fun60739_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var0 = var0.nativeModules;
                        var0 = var0.canBootstrapNewUpdater;
                        if (var0) {
                            _fun60739_ip = 26;
                            continue _fun60739
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
                        _fun60743: for (var _fun60743_ip = 0;;) switch (_fun60743_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60743_ip = 58;
                                    continue _fun60743
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
                                    _fun60743_ip = 55;
                                    continue _fun60743
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
                _fun60744: for (var _fun60744_ip = 0;;) switch (_fun60744_ip) {
                    case 0:
                        var5 = this;
                        var0 = undefined;
                        var1 = undefined;
                    case 7: // try_start_0
                        var3 = var5.requireModule;
                        var2 = 'discord_overlay2';
                        var1 = var3.bind(var5)(var2);
                    case 24: // try_end0
                        _fun60744_ip = 28;
                        continue _fun60744;
                    case 26: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 28:
                        var3 = var1;
                        var2 = var3;
                        if (!var3) {
                            _fun60744_ip = 46;
                            continue _fun60744
                        }
                    case 37:
                        var3 = var1;
                        var2 = var3.reset;
                    case 46:
                        if (!var2) {
                            _fun60744_ip = 62;
                            continue _fun60744
                        }
                    case 49:
                        var3 = var1;
                        var2 = var3.reset;
                        var2 = var2.bind(var3)();
                    case 62:
                        var4 = var1;
                        var3 = var4;
                        if (!var4) {
                            _fun60744_ip = 80;
                            continue _fun60744
                        }
                    case 71:
                        var4 = var1;
                        var3 = var4.disconnectAllProcesses;
                    case 80:
                        var2 = var3;
                        if (!var3) {
                            _fun60744_ip = 95;
                            continue _fun60744
                        }
                    case 86:
                        var3 = var1;
                        var2 = var3.destroyHostProcess;
                    case 95:
                        if (!var2) {
                            _fun60744_ip = 121;
                            continue _fun60744
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
                            _fun60744_ip = 251;
                            continue _fun60744
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
                            _fun60744_ip = 278;
                            continue _fun60744
                        }
                    case 257:
                        var4 = var5.supportsFeature;
                        var3 = _closure1_slot5;
                        var3 = var3.USER_DATA_CACHE;
                        var2 = var4.bind(var5)(var3);
                    case 278:
                        if (!var2) {
                            _fun60744_ip = 342;
                            continue _fun60744
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
                    _fun60746: for (var _fun60746_ip = 0;;) switch (_fun60746_ip) {
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
                                _fun60746_ip = 27;
                                continue _fun60746
                            }
                        case 24:
                            var4 = var2;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun60746_ip = 57;
                                continue _fun60746
                            }
                        case 32:
                            var6 = var5().value;
                            var2 = var0;
                            var2 = var2 === var7;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun60746_ip = 57;
                                continue _fun60746
                            }
                        case 51:
                            var3 = var6;
                            var1 = var2;
                        case 57:
                            var2 = undefined;
                            if (var1) {
                                _fun60746_ip = 87;
                                continue _fun60746
                            }
                        case 62:
                            var6 = var5().value;
                            var5 = var0;
                            var5 = var5 === var7;
                            var2 = undefined;
                            var1 = var5;
                            if (var5) {
                                _fun60746_ip = 87;
                                continue _fun60746
                            }
                        case 81:
                            var2 = var6;
                            var1 = var5;
                        case 87:
                            if (var1) {
                                _fun60746_ip = 93;
                                continue _fun60746
                            }
                        case 90:
                            var0.return();
                        case 93:
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 !== var0)) {
                                _fun60746_ip = 118;
                                continue _fun60746
                            }
                        case 104:
                            var0 = new Array(2);
                            var0[0] = var4;
                            var0[1] = var3;
                            _fun60746_ip = 137;
                            continue _fun60746;
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
                _fun60748: for (var _fun60748_ip = 0;;) switch (_fun60748_ip) {
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
                            _fun60748_ip = 63;
                            continue _fun60748
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
                _fun60750: for (var _fun60750_ip = 0;;) switch (_fun60750_ip) {
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
                            _fun60751: for (var _fun60751_ip = 0;;) switch (_fun60751_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure2_slot1;
                                    var2 = var2 + 1;
                                    _closure2_slot1 = var2;
                                    var3 = var1.id;
                                    var0 = null;
                                    if (!(var0 != var3)) {
                                        _fun60751_ip = 44;
                                        continue _fun60751
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
                            _fun60750_ip = 105;
                            continue _fun60750
                        }
                    case 92:
                        var8 = var3;
                        var8 = var8.setProcessObserverUserId;
                        var7 = var5 != var8;
                    case 105:
                        if (!var7) {
                            _fun60750_ip = 122;
                            continue _fun60750
                        }
                    case 108:
                        var8 = var3;
                        var7 = var8.setProcessObserverUserId;
                        var6 = var7.bind(var8)(var6);
                    case 122:
                        if (!var4) {
                            _fun60750_ip = 138;
                            continue _fun60750
                        }
                    case 125:
                        var4 = var3;
                        var4 = var4.setObservedGamesCallback2;
                        if (!(var5 == var4)) {
                            _fun60750_ip = 161;
                            continue _fun60750
                        }
                    case 138:
                        var7 = var3;
                        var6 = var7.setObservedGamesCallback;
                        var5 = var2;
                        var4 = var1;
                        var4 = var6.bind(var7)(var5, var4);
                        _fun60750_ip = 176;
                        continue _fun60750;
                    case 161:
                        var4 = var3;
                        var3 = var4.setObservedGamesCallback2;
                        var1 = var3.bind(var4)(var2, var1);
                    case 176: // try_end0
                        _fun60750_ip = 180;
                        continue _fun60750;
                    case 178: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 180:
                        return var0;
                }
            };
            var9.setObservedGamesCallback = var13;
            var13 = function arg0() {
                _fun60753: for (var _fun60753_ip = 0;;) switch (_fun60753_ip) {
                    case 0:
                        var2 = this;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = var2.getDiscordUtils;
                        var3 = var1.bind(var2)();
                        var2 = var3.setGameDetectionCallback;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60753_ip = 50;
                            continue _fun60753
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
                _fun60755: for (var _fun60755_ip = 0;;) switch (_fun60755_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var3 = var0.bind(var1)();
                        var2 = var3.setGameDetectionErrorCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60755_ip = 39;
                            continue _fun60755
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
                _fun60756: for (var _fun60756_ip = 0;;) switch (_fun60756_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var4 = var0.bind(var1)();
                        var3 = var4.setRobloxSubgameDetectionConfig;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun60756_ip = 43;
                            continue _fun60756
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
                _fun60757: for (var _fun60757_ip = 0;;) switch (_fun60757_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var2 = var0.bind(var1)();
                        var1 = var2.checkForRobloxSubgameUpdate;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60757_ip = 35;
                            continue _fun60757
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
                _fun60767: for (var _fun60767_ip = 0;;) switch (_fun60767_ip) {
                    case 0:
                        var3 = this;
                        var2 = var3.requireModule;
                        var0 = 'discord_voice';
                        var0 = var2.bind(var3)(var0);
                        var _closure2_slot0 = var0;
                        var3 = _closure1_slot13;
                        if (var3) {
                            _fun60767_ip = 74;
                            continue _fun60767
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
                _fun60769: for (var _fun60769_ip = 0;;) switch (_fun60769_ip) {
                    case 0:
                        var2 = this;
                        var0 = _closure1_slot13;
                        if (var0) {
                            _fun60769_ip = 27;
                            continue _fun60769
                        }
                    case 13: // try_start_0
                        var0 = var2.getVoiceEngine;
                        var0 = var0.bind(var2)();
                    case 23: // try_end0
                        _fun60769_ip = 27;
                        continue _fun60769;
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
                _fun60770: for (var _fun60770_ip = 0;;) switch (_fun60770_ip) {
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
                            _fun60770_ip = 97;
                            continue _fun60770
                        }
                    case 47:
                        var1 = var3.getDiscordUtils;
                        var5 = var1.bind(var3)();
                        var4 = var5.isSystemDarkMode;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if (var3) {
                            _fun60770_ip = 84;
                            continue _fun60770
                        }
                    case 74:
                        var3 = var4.call;
                        var2 = var3.bind(var4)(var5);
                    case 84:
                        var1 = var1 == var2;
                        if (var1) {
                            _fun60770_ip = 94;
                            continue _fun60770
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
                _fun60775: for (var _fun60775_ip = 0;;) switch (_fun60775_ip) {
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
                            _fun60775_ip = 186;
                            continue _fun60775
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
                            _fun60775_ip = 166;
                            continue _fun60775
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
                            _fun60775_ip = 261;
                            continue _fun60775
                        }
                    case 129:
                        var2 = _closure1_slot6;
                        var6 = var2.remoteApp;
                        var3 = var6.setBadgeCount;
                        var2 = 0;
                        var7 = var5 >= var2;
                        if (!var7) {
                            _fun60775_ip = 159;
                            continue _fun60775
                        }
                    case 156:
                        var2 = var5;
                    case 159:
                        var2 = var3.bind(var6)(var2);
                        _fun60775_ip = 261;
                        continue _fun60775;
                    case 166:
                        var3 = var4.send;
                        var2 = 'APP_BADGE_SET';
                        var2 = var3.bind(var4)(var2, var5);
                        _fun60775_ip = 261;
                        continue _fun60775;
                    case 186:
                        var3 = '•';
                        var2 = -1;
                        if (!(var2 !== var5)) {
                            _fun60775_ip = 234;
                            continue _fun60775
                        }
                    case 200:
                        var2 = 0;
                        var2 = var5 > var2;
                        var4 = '';
                        var3 = var4;
                        if (!var2) {
                            _fun60775_ip = 234;
                            continue _fun60775
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
                _fun60776: for (var _fun60776_ip = 0;;) switch (_fun60776_ip) {
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
                            _fun60776_ip = 58;
                            continue _fun60776
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
                _fun60777: for (var _fun60777_ip = 0;;) switch (_fun60777_ip) {
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
                            _fun60777_ip = 96;
                            continue _fun60777
                        }
                    case 37:
                        var1 = _closure1_slot6;
                        var4 = var1.thumbar;
                        var5 = null;
                        var1 = var5 == var4;
                        if (var1) {
                            _fun60777_ip = 68;
                            continue _fun60777
                        }
                    case 58:
                        var3 = var4.setThumbarButtons;
                        var1 = var5 == var3;
                    case 68:
                        if (var1) {
                            _fun60777_ip = 96;
                            continue _fun60777
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
                _fun60778: for (var _fun60778_ip = 0;;) switch (_fun60778_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun60778_ip = 62;
                            continue _fun60778
                        }
                    case 36:
                        var3 = _closure1_slot6;
                        var3 = var3.remoteApp;
                        var _closure2_slot0 = var3;
                        var5 = var3.dock;
                        var4 = null;
                        if (!(var4 == var5)) {
                            _fun60778_ip = 64;
                            continue _fun60778
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
                                _fun60780: for (var _fun60780_ip = 0;;) switch (_fun60780_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun60780_ip = 55;
                                            continue _fun60780
                                        }
                                    case 7:
                                        var1 = _closure2_slot1;
                                        SaveGenerator(address = 18);
                                    case 16:
                                        return var1;
                                    case 18:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun60780_ip = 52;
                                            continue _fun60780
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
                _fun60781: for (var _fun60781_ip = 0;;) switch (_fun60781_ip) {
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
                            _fun60781_ip = 58;
                            continue _fun60781
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
                _fun60782: for (var _fun60782_ip = 0;;) switch (_fun60782_ip) {
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
                            _fun60782_ip = 54;
                            continue _fun60782
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
                _fun60783: for (var _fun60783_ip = 0;;) switch (_fun60783_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.isPlatformEmbedded;
                        if (var1) {
                            _fun60783_ip = 40;
                            continue _fun60783
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
                            _fun60783_ip = 76;
                            continue _fun60783
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
                _fun60787: for (var _fun60787_ip = 0;;) switch (_fun60787_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60787_ip = 40;
                            continue _fun60787
                        }
                    case 34:
                        var0 = new Array(0);
                        _fun60787_ip = 87;
                        continue _fun60787;
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
                _fun60789: for (var _fun60789_ip = 0;;) switch (_fun60789_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60789_ip = 58;
                            continue _fun60789
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
                        _fun60792: for (var _fun60792_ip = 0;;) switch (_fun60792_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60792_ip = 260;
                                    continue _fun60792
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
                                    _fun60792_ip = 257;
                                    continue _fun60792
                                }
                            case 143:
                                var7 = _closure1_slot29;
                                var6 = _closure2_slot0;
                                var5 = _closure2_slot1;
                                var7 = var7.bind(var2)(var6, var5);
                                var5 = null;
                                if (!(var5 != var7)) {
                                    _fun60792_ip = 184;
                                    continue _fun60792
                                }
                            case 167:
                                var6 = _closure1_slot7;
                                var5 = var6.has;
                                var5 = var5.bind(var6)(var7);
                                if (var5) {
                                    _fun60792_ip = 190;
                                    continue _fun60792
                                }
                            case 184:
                                var6 = _closure2_slot0;
                                _fun60792_ip = 214;
                                continue _fun60792;
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
                        _fun60795: for (var _fun60795_ip = 0;;) switch (_fun60795_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60795_ip = 89;
                                    continue _fun60795
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
                                    _fun60795_ip = 86;
                                    continue _fun60795
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
                _fun60796: for (var _fun60796_ip = 0;;) switch (_fun60796_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = null;
                        if (!(var0 != var5)) {
                            _fun60796_ip = 79;
                            continue _fun60796
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
                            _fun60796_ip = 79;
                            continue _fun60796
                        }
                    case 43:
                        var3 = _closure1_slot29;
                        var2 = arg1;
                        var3 = var3.bind(var4)(var5, var2);
                        var0 = var0 == var3;
                        if (var0) {
                            _fun60796_ip = 77;
                            continue _fun60796
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
                        _fun60799: for (var _fun60799_ip = 0;;) switch (_fun60799_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60799_ip = 778;
                                    continue _fun60799
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
                                    _fun60799_ip = 765;
                                    continue _fun60799
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
                                    _fun60799_ip = 160;
                                    continue _fun60799
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
                                    _fun60799_ip = 288;
                                    continue _fun60799
                                }
                            case 196:
                                var9 = var3;
                                var8 = var9.includes;
                                var14 = '.';
                                var8 = var8.bind(var9)(var14);
                                if (var8) {
                                    _fun60799_ip = 370;
                                    continue _fun60799
                                }
                            case 219:
                                var13 = var3;
                                var11 = _closure1_slot29;
                                var9 = _closure2_slot0;
                                var8 = _closure2_slot1;
                                var8 = var11.bind(var7)(var9, var8);
                                if (!(var6 == var8)) {
                                    _fun60799_ip = 248;
                                    continue _fun60799
                                }
                            case 244:
                                var8 = _closure2_slot2;
                            case 248:
                                var9 = var6 != var8;
                                var11 = 'png';
                                if (!var9) {
                                    _fun60799_ip = 262;
                                    continue _fun60799
                                }
                            case 259:
                                var11 = var8;
                            case 262:
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var9 = var8.concat;
                                var8 = '';
                                var3 = var9.bind(var8)(var13, var14, var11);
                                _fun60799_ip = 370;
                                continue _fun60799;
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
                                    _fun60799_ip = 370;
                                    continue _fun60799
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
                                    _fun60799_ip = 762;
                                    continue _fun60799
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
                                    _fun60799_ip = 470;
                                    continue _fun60799
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
                                    _fun60799_ip = 574;
                                    continue _fun60799
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
                                    _fun60799_ip = 534;
                                    continue _fun60799
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
                                    _fun60799_ip = 556;
                                    continue _fun60799
                                }
                            case 551:
                                var4 = var9;
                            case 554: // try_end0
                                _fun60799_ip = 652;
                                continue _fun60799;
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
                                    _fun60799_ip = 611;
                                    continue _fun60799
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
                                    _fun60799_ip = 759;
                                    continue _fun60799
                                }
                            case 631:
                                if (!(var6 != var3)) {
                                    _fun60799_ip = 746;
                                    continue _fun60799
                                }
                            case 635:
                                var5 = var3.canceledByUser;
                                if (var5) {
                                    _fun60799_ip = 733;
                                    continue _fun60799
                                }
                            case 646:
                                var4 = var3.directory;
                            case 652:
                                var5 = var4;
                                if (!(var6 != var5)) {
                                    _fun60799_ip = 720;
                                    continue _fun60799
                                }
                            case 659:
                                var6 = var4;
                                var5 = '';
                                if (!(var5 !== var6)) {
                                    _fun60799_ip = 720;
                                    continue _fun60799
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
                                _fun60799_ip = 730;
                                continue _fun60799;
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
                        _fun60802: for (var _fun60802_ip = 0;;) switch (_fun60802_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60802_ip = 284;
                                    continue _fun60802
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
                                    _fun60802_ip = 281;
                                    continue _fun60802
                                }
                            case 108:
                                var5 = _closure2_slot1;
                                if (!(var1 == var5)) {
                                    _fun60802_ip = 148;
                                    continue _fun60802
                                }
                            case 116:
                                var6 = var4.pathname;
                                var5 = var6.split;
                                var4 = '/';
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.pop;
                                var4 = var4.bind(var5)();
                                _fun60802_ip = 152;
                                continue _fun60802;
                            case 148:
                                var4 = _closure2_slot1;
                            case 152:
                                var6 = var1 != var4;
                                var5 = 'unknown';
                                if (!var6) {
                                    _fun60802_ip = 166;
                                    continue _fun60802
                                }
                            case 163:
                                var5 = var4;
                            case 166:
                                var4 = _closure2_slot1;
                                var6 = var5;
                                if (!(var1 == var4)) {
                                    _fun60802_ip = 186;
                                    continue _fun60802
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
                                    _fun60802_ip = 278;
                                    continue _fun60802
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
                                    _fun60802_ip = 275;
                                    continue _fun60802
                                }
                            case 260:
                                var5 = var1 == var3;
                                var4 = null;
                                if (var5) {
                                    _fun60802_ip = 272;
                                    continue _fun60802
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
                        _fun60805: for (var _fun60805_ip = 0;;) switch (_fun60805_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60805_ip = 169;
                                    continue _fun60805
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
                                    _fun60805_ip = 166;
                                    continue _fun60805
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
                        _fun60810: for (var _fun60810_ip = 0;;) switch (_fun60810_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60810_ip = 54;
                                    continue _fun60810
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
                                    _fun60810_ip = 51;
                                    continue _fun60810
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
                        _fun60813: for (var _fun60813_ip = 0;;) switch (_fun60813_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60813_ip = 54;
                                    continue _fun60813
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
                                    _fun60813_ip = 51;
                                    continue _fun60813
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
                        _fun60816: for (var _fun60816_ip = 0;;) switch (_fun60816_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60816_ip = 169;
                                    continue _fun60816
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
                                    _fun60816_ip = 166;
                                    continue _fun60816
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
                        _fun60821: for (var _fun60821_ip = 0;;) switch (_fun60821_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60821_ip = 54;
                                    continue _fun60821
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
                                    _fun60821_ip = 51;
                                    continue _fun60821
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
                        _fun60824: for (var _fun60824_ip = 0;;) switch (_fun60824_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60824_ip = 54;
                                    continue _fun60824
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
                                    _fun60824_ip = 51;
                                    continue _fun60824
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
            var13 = function arg0, arg1, arg2, arg3() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = arg3;
                var _closure2_slot3 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60827: for (var _fun60827_ip = 0;;) switch (_fun60827_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60827_ip = 176;
                                    continue _fun60827
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
                                var1 = 'Download OpenH264 file method called outside native app';
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 5;
                                var1 = var8[var1];
                                var9 = var4.bind(var7)(var1);
                                var5 = var9.toURLSafe;
                                var6 = _closure2_slot0;
                                var5 = var5.bind(var9)(var6);
                                var3 = var8[var3];
                                var4 = var4.bind(var7)(var3);
                                var3 = 'Could not download OpenH264, fileSrc was not a valid path';
                                var3 = var4.bind(var7)(var5, var3);
                                var2 = _closure1_slot6;
                                var5 = var2.fileManager;
                                var4 = var5.maybeDownloadOpenH264;
                                var12 = _closure2_slot1;
                                var11 = _closure2_slot2;
                                var10 = _closure2_slot3;
                                var14 = var5;
                                var13 = var6;
                                var1 = var14[var4](var13, var12, var11, var10, var9);
                                SaveGenerator(address = 164);
                            case 162:
                                return var1;
                            case 164:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60827_ip = 173;
                                    continue _fun60827
                                }
                            case 170:
                                return var1;
                            case 173:
                                return var1;
                            case 176:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var9.downloadOpenH264 = var13;
            var13 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60830: for (var _fun60830_ip = 0;;) switch (_fun60830_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60830_ip = 54;
                                    continue _fun60830
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var3 = var1.fileManager;
                                var2 = var3.cleanupUnusedOpenH264Files;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 42);
                            case 40:
                                return var1;
                            case 42:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60830_ip = 51;
                                    continue _fun60830
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
            var9.cleanupUnusedOpenH264Files = var13;
            var13 = function() {
                _fun60831: for (var _fun60831_ip = 0;;) switch (_fun60831_ip) {
                    case 0:
                        var4 = arguments[0];
                        var3 = undefined;
                        if (!(var4 === var3)) {
                            _fun60831_ip = 11;
                            continue _fun60831
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
                            _fun60831_ip = 47;
                            continue _fun60831
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
                            _fun60831_ip = 119;
                            continue _fun60831
                        }
                    case 74:
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun60831_ip = 115;
                            continue _fun60831
                        }
                    case 80:
                        var2 = _closure1_slot29;
                        var2 = var2.bind(var3)(var4, var3);
                        if (!(var1 != var2)) {
                            _fun60831_ip = 115;
                            continue _fun60831
                        }
                    case 94:
                        var1 = _closure1_slot7;
                        var0 = var1.has;
                        var0 = var0.bind(var1)(var2);
                        if (var0) {
                            _fun60831_ip = 115;
                            continue _fun60831
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
                _fun60832: for (var _fun60832_ip = 0;;) switch (_fun60832_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60832_ip = 54;
                            continue _fun60832
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
                _fun60833: for (var _fun60833_ip = 0;;) switch (_fun60833_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60833_ip = 54;
                            continue _fun60833
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
                _fun60834: for (var _fun60834_ip = 0;;) switch (_fun60834_ip) {
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
                            _fun60834_ip = 58;
                            continue _fun60834
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
                _fun60835: for (var _fun60835_ip = 0;;) switch (_fun60835_ip) {
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
                            _fun60835_ip = 100;
                            continue _fun60835
                        }
                    case 40:
                        var1 = _closure1_slot6;
                        var1 = var1.clipboard;
                        var4 = var1.hasMixedContent;
                        var1 = null;
                        var4 = var1 == var4;
                        var2 = undefined;
                        if (var4) {
                            _fun60835_ip = 87;
                            continue _fun60835
                        }
                    case 67:
                        var3 = _closure1_slot6;
                        var4 = var3.clipboard;
                        var3 = var4.hasMixedContent;
                        var2 = var3.bind(var4)();
                    case 87:
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun60835_ip = 97;
                            continue _fun60835
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
                _fun60839: for (var _fun60839_ip = 0;;) switch (_fun60839_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var3.bind(var2)(var0);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun60839_ip = 38;
                            continue _fun60839
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
                            _fun60839_ip = 63;
                            continue _fun60839
                        }
                    case 53:
                        var4 = _closure1_slot6;
                        var2 = var4.ipc;
                    case 63:
                        var2 = var3 != var2;
                        var0 = var2;
                        if (!var2) {
                            _fun60839_ip = 100;
                            continue _fun60839
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
                _fun60840: for (var _fun60840_ip = 0;;) switch (_fun60840_ip) {
                    case 0:
                        var3 = arguments[0];
                        var2 = arguments[1];
                        var1 = undefined;
                        if (!(var3 === var1)) {
                            _fun60840_ip = 20;
                            continue _fun60840
                        }
                    case 14:
                        var3 = 5000;
                    case 20:
                        var _closure2_slot0 = var3;
                        if (!(var2 === var1)) {
                            _fun60840_ip = 36;
                            continue _fun60840
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
                                _fun60842: for (var _fun60842_ip = 0;;) switch (_fun60842_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun60842_ip = 157;
                                            continue _fun60842
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
                                            _fun60842_ip = 144;
                                            continue _fun60842
                                        }
                                    case 59:
                                        var2 = _closure2_slot2;
                                        var1 = var2.isIPCReady;
                                        var1 = var1.bind(var2)();
                                        if (var1) {
                                            _fun60842_ip = 152;
                                            continue _fun60842
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
                                            _fun60842_ip = 149;
                                            continue _fun60842
                                        }
                                    case 117:
                                        var3 = var6.Date;
                                        var2 = var3.now;
                                        var2 = var2.bind(var3)();
                                        var3 = var2 - var5;
                                        var2 = _closure2_slot0;
                                        if (var3 < var2) {
                                            _fun60842_ip = 59;
                                            continue _fun60842
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
                _fun60852: for (var _fun60852_ip = 0;;) switch (_fun60852_ip) {
                    case 0:
                        var4 = arguments[1];
                        var3 = this;
                        var0 = undefined;
                        if (!(var4 === var0)) {
                            _fun60852_ip = 14;
                            continue _fun60852
                        }
                    case 12:
                        var4 = false;
                    case 14:
                        var1 = var4;
                        if (!var1) {
                            _fun60852_ip = 53;
                            continue _fun60852
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
                            _fun60852_ip = 69;
                            continue _fun60852
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
                _fun60853: for (var _fun60853_ip = 0;;) switch (_fun60853_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60853_ip = 55;
                            continue _fun60853
                        }
                    case 34:
                        var2 = _closure1_slot6;
                        var2 = var2.window;
                        var3 = var2.blur;
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun60853_ip = 75;
                            continue _fun60853
                        }
                    case 55:
                        var2 = global;
                        var3 = var2.window;
                        var2 = var3.blur;
                        var2 = var2.bind(var3)();
                        _fun60853_ip = 94;
                        continue _fun60853;
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
                _fun60856: for (var _fun60856_ip = 0;;) switch (_fun60856_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var1 = var1.setAlwaysOnTop;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun60856_ip = 56;
                            continue _fun60856
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
                        _fun60859: for (var _fun60859_ip = 0;;) switch (_fun60859_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60859_ip = 84;
                                    continue _fun60859
                                }
                            case 7:
                                var2 = _closure1_slot6;
                                var2 = var2.window;
                                var3 = var2.isAlwaysOnTop;
                                var4 = 'function';
                                var3 = typeof var3;
                                var2 = false;
                                if (!(var4 === var3)) {
                                    _fun60859_ip = 78;
                                    continue _fun60859
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
                                    _fun60859_ip = 81;
                                    continue _fun60859
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
                _fun60860: for (var _fun60860_ip = 0;;) switch (_fun60860_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var4 = null;
                        var3 = var4 == var0;
                        var0 = undefined;
                        var2 = undefined;
                        if (var3) {
                            _fun60860_ip = 44;
                            continue _fun60860
                        }
                    case 20:
                        var3 = _closure1_slot6;
                        var3 = var3.window;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if (var4) {
                            _fun60860_ip = 44;
                            continue _fun60860
                        }
                    case 38:
                        var2 = var3.showInactive;
                    case 44:
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun60860_ip = 78;
                            continue _fun60860
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
                _fun60861: for (var _fun60861_ip = 0;;) switch (_fun60861_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var3 = null;
                        var1 = var3 == var0;
                        var0 = undefined;
                        var4 = undefined;
                        if (var1) {
                            _fun60861_ip = 36;
                            continue _fun60861
                        }
                    case 20:
                        var2 = _closure1_slot6;
                        var2 = var2.window;
                        var1 = var3 == var2;
                        var4 = var2;
                    case 36:
                        if (var1) {
                            _fun60861_ip = 49;
                            continue _fun60861
                        }
                    case 39:
                        var2 = var4.setMinimumSize;
                        var1 = var3 == var2;
                    case 49:
                        if (var1) {
                            _fun60861_ip = 70;
                            continue _fun60861
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
                _fun60862: for (var _fun60862_ip = 0;;) switch (_fun60862_ip) {
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
                            _fun60862_ip = 102;
                            continue _fun60862
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
                            _fun60862_ip = 102;
                            continue _fun60862
                        }
                    case 77: // try_start_0
                        var3 = var4.send;
                        var2 = var1;
                        var1 = 'WINDOW_SET_TRAFFIC_LIGHT_POSITION';
                        var1 = var3.bind(var4)(var1, var2);
                    case 98: // try_end0
                        _fun60862_ip = 102;
                        continue _fun60862;
                    case 100: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 102:
                        return var0;
                }
            };
            var9.setTrafficLightPosition = var13;
            var13 = function() {
                _fun60863: for (var _fun60863_ip = 0;;) switch (_fun60863_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60863_ip = 54;
                            continue _fun60863
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
                _fun60866: for (var _fun60866_ip = 0;;) switch (_fun60866_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60866_ip = 54;
                            continue _fun60866
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
                _fun60868: for (var _fun60868_ip = 0;;) switch (_fun60868_ip) {
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
                            _fun60868_ip = 57;
                            continue _fun60868
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
                _fun60871: for (var _fun60871_ip = 0;;) switch (_fun60871_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.gpuSettings;
                        var2 = var1.setSetting;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60871_ip = 53;
                            continue _fun60871
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
                        _fun60874: for (var _fun60874_ip = 0;;) switch (_fun60874_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60874_ip = 125;
                                    continue _fun60874
                                }
                            case 7:
                                var1 = _closure1_slot6;
                                var1 = var1.app;
                                var1 = var1.getOpenOnStart;
                                var4 = null;
                                var2 = var4 == var1;
                                var1 = undefined;
                                if (var2) {
                                    _fun60874_ip = 57;
                                    continue _fun60874
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
                                    _fun60874_ip = 122;
                                    continue _fun60874
                                }
                            case 67:
                                var2 = var1;
                                if (!(var4 == var2)) {
                                    _fun60874_ip = 119;
                                    continue _fun60874
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
                                    _fun60874_ip = 119;
                                    continue _fun60874
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
                _fun60875: for (var _fun60875_ip = 0;;) switch (_fun60875_ip) {
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
                            _fun60875_ip = 63;
                            continue _fun60875
                        }
                    case 41:
                        var0 = var2.getDiscordUtils;
                        var0 = var0.bind(var2)();
                        var1 = var0.getGPUDriverVersions;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60875_ip = 103;
                            continue _fun60875
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
                        _fun60875_ip = 123;
                        continue _fun60875;
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
                _fun60876: for (var _fun60876_ip = 0;;) switch (_fun60876_ip) {
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
                            _fun60876_ip = 65;
                            continue _fun60876
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
                _fun60877: for (var _fun60877_ip = 0;;) switch (_fun60877_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var3 = var1.setBackgroundThrottling;
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun60877_ip = 57;
                            continue _fun60877
                        }
                    case 27:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var3 = var1.webContents;
                        var1 = var3.setBackgroundThrottling;
                        var1 = var1.bind(var3)(var2);
                        _fun60877_ip = 77;
                        continue _fun60877;
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
                _fun60878: for (var _fun60878_ip = 0;;) switch (_fun60878_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.window;
                        var1 = var1.setFocusable;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun60878_ip = 56;
                            continue _fun60878
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
                _fun60879: for (var _fun60879_ip = 0;;) switch (_fun60879_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.app;
                        var2 = var1.pauseFrameEvictor;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60879_ip = 45;
                            continue _fun60879
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
                _fun60880: for (var _fun60880_ip = 0;;) switch (_fun60880_ip) {
                    case 0:
                        var1 = _closure1_slot6;
                        var1 = var1.app;
                        var2 = var1.unpauseFrameEvictor;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60880_ip = 45;
                            continue _fun60880
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
                _fun60881: for (var _fun60881_ip = 0;;) switch (_fun60881_ip) {
                    case 0:
                        var0 = _closure1_slot6;
                        var0 = var0.app;
                        var2 = var0.getPreferredSystemLanguages;
                        var0 = null;
                        var2 = var0 == var2;
                        var0 = undefined;
                        if (var2) {
                            _fun60881_ip = 50;
                            continue _fun60881
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
                _fun60882: for (var _fun60882_ip = 0;;) switch (_fun60882_ip) {
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
                            _fun60882_ip = 226;
                            continue _fun60882
                        }
                    case 47:
                        var2 = var1.getDiscordUtils;
                        var2 = var2.bind(var1)();
                        var2 = var2.getPidFromWindowHandle;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun60882_ip = 226;
                            continue _fun60882
                        }
                    case 72:
                        var2 = var3 == var6;
                        var4 = undefined;
                        if (var2) {
                            _fun60882_ip = 95;
                            continue _fun60882
                        }
                    case 81:
                        var5 = var6.split;
                        var2 = ':';
                        var4 = var5.bind(var6)(var2);
                    case 95:
                        var2 = var3 == var4;
                        var6 = undefined;
                        if (var2) {
                            _fun60882_ip = 110;
                            continue _fun60882
                        }
                    case 104:
                        var2 = 0;
                        var6 = var4[var2];
                    case 110:
                        var2 = 'window';
                        if (!(var2 !== var6)) {
                            _fun60882_ip = 153;
                            continue _fun60882
                        }
                    case 118:
                        var5 = var6.startsWith;
                        var2 = 'screen';
                        var2 = var5.bind(var6)(var2);
                        if (var2) {
                            _fun60882_ip = 148;
                            continue _fun60882
                        }
                    case 136:
                        var5 = 'prepicked';
                        var2 = null;
                        if (!(var5 === var6)) {
                            _fun60882_ip = 151;
                            continue _fun60882
                        }
                    case 148:
                        var2 = 1;
                    case 151:
                        return var2;
                    case 153:
                        var2 = var3 == var4;
                        var0 = undefined;
                        if (var2) {
                            _fun60882_ip = 169;
                            continue _fun60882
                        }
                    case 162:
                        var2 = 1;
                        var0 = var4[var2];
                    case 169:
                        var4 = var3 != var0;
                        var2 = '';
                        if (!var4) {
                            _fun60882_ip = 183;
                            continue _fun60882
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
                            _fun60882_ip = 224;
                            continue _fun60882
                        }
                    case 213:
                        var2 = 0;
                        var0 = null;
                        if (!(var2 !== var1)) {
                            _fun60882_ip = 224;
                            continue _fun60882
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
                _fun60883: for (var _fun60883_ip = 0;;) switch (_fun60883_ip) {
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
                            _fun60883_ip = 153;
                            continue _fun60883
                        }
                    case 44:
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var0 = var0.getWindowHandleFromPid;
                        var4 = null;
                        if (!(var4 != var0)) {
                            _fun60883_ip = 153;
                            continue _fun60883
                        }
                    case 66:
                        if (!(var4 != var2)) {
                            _fun60883_ip = 153;
                            continue _fun60883
                        }
                    case 70:
                        var0 = var1.getDiscordUtils;
                        var1 = var0.bind(var1)();
                        var0 = var1.getWindowHandleFromPid;
                        var1 = var0.bind(var1)(var2);
                        var2 = var4 == var1;
                        var0 = null;
                        if (var2) {
                            _fun60883_ip = 151;
                            continue _fun60883
                        }
                    case 100:
                        var3 = var1.length;
                        var2 = 0;
                        var0 = null;
                        if (!(var2 !== var3)) {
                            _fun60883_ip = 151;
                            continue _fun60883
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
                _fun60885: for (var _fun60885_ip = 0;;) switch (_fun60885_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = this;
                        var0 = var2.getDiscordUtils;
                        var0 = var0.bind(var2)();
                        var4 = var0.getAudioPid;
                        var1 = null;
                        var0 = var3;
                        if (!(var1 != var4)) {
                            _fun60885_ip = 59;
                            continue _fun60885
                        }
                    case 31:
                        var0 = var3;
                        if (!(var1 != var0)) {
                            _fun60885_ip = 59;
                            continue _fun60885
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
                _fun60886: for (var _fun60886_ip = 0;;) switch (_fun60886_ip) {
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
                            _fun60886_ip = 46;
                            continue _fun60886
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
                _fun60887: for (var _fun60887_ip = 0;;) switch (_fun60887_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getDiscordMemoryUsage;
                        var0 = null;
                        var1 = var0 != var2;
                        if (!var1) {
                            _fun60887_ip = 34;
                            continue _fun60887
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
                _fun60888: for (var _fun60888_ip = 0;;) switch (_fun60888_ip) {
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
                            _fun60888_ip = 36;
                            continue _fun60888
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getDiscordMemoryUsageElectronRenderer = var13;
            var13 = function() {
                _fun60889: for (var _fun60889_ip = 0;;) switch (_fun60889_ip) {
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
                            _fun60889_ip = 38;
                            continue _fun60889
                        }
                    case 34:
                        var0 = var2.bind(var1)();
                    case 38:
                        return var0;
                }
            };
            var9.getDiscordMemoryPrivateUsageElectronRenderer = var13;
            var13 = function() {
                _fun60890: for (var _fun60890_ip = 0;;) switch (_fun60890_ip) {
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
                            _fun60890_ip = 36;
                            continue _fun60890
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getDiscordMemoryUsageElectronProcessTypeDetails = var13;
            var13 = function arg0() {
                _fun60891: for (var _fun60891_ip = 0;;) switch (_fun60891_ip) {
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
                            _fun60891_ip = 40;
                            continue _fun60891
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
                _fun60892: for (var _fun60892_ip = 0;;) switch (_fun60892_ip) {
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
                            _fun60892_ip = 36;
                            continue _fun60892
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.disablePerfMemoryHooks = var13;
            var13 = function() {
                _fun60893: for (var _fun60893_ip = 0;;) switch (_fun60893_ip) {
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
                            _fun60893_ip = 36;
                            continue _fun60893
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getPerfAttributedMemory = var13;
            var13 = function arg0() {
                _fun60894: for (var _fun60894_ip = 0;;) switch (_fun60894_ip) {
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
                            _fun60894_ip = 40;
                            continue _fun60894
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
                _fun60895: for (var _fun60895_ip = 0;;) switch (_fun60895_ip) {
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
                            _fun60895_ip = 36;
                            continue _fun60895
                        }
                    case 32:
                        var0 = var2.bind(var1)();
                    case 36:
                        return var0;
                }
            };
            var9.getPerfAttributedMemoryStats = var13;
            var13 = function arg0() {
                _fun60896: for (var _fun60896_ip = 0;;) switch (_fun60896_ip) {
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
                            _fun60896_ip = 40;
                            continue _fun60896
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
                        _fun60899: for (var _fun60899_ip = 0;;) switch (_fun60899_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60899_ip = 142;
                                    continue _fun60899
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
                                    _fun60899_ip = 50;
                                    continue _fun60899
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
                                    _fun60899_ip = 139;
                                    continue _fun60899
                                }
                            case 60:
                                if (!(var2 != var1)) {
                                    _fun60899_ip = 85;
                                    continue _fun60899
                                }
                            case 64:
                                var2 = global;
                                var3 = var2.JSON;
                                var2 = var3.parse;
                                var2 = var2.bind(var3)(var1);
                                _fun60899_ip = 136;
                                continue _fun60899;
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
                _fun60900: for (var _fun60900_ip = 0;;) switch (_fun60900_ip) {
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
                            _fun60900_ip = 40;
                            continue _fun60900
                        }
                    case 32:
                        var1 = arg0;
                        var0 = var4.bind(var2)(var1);
                    case 40:
                        if (!(var3 == var0)) {
                            _fun60900_ip = 63;
                            continue _fun60900
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
                _fun60902: for (var _fun60902_ip = 0;;) switch (_fun60902_ip) {
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
                            _fun60902_ip = 54;
                            continue _fun60902
                        }
                    case 42:
                        var0 = var3.resolve;
                        var0 = var0.bind(var3)();
                        _fun60902_ip = 81;
                        continue _fun60902;
                    case 54:
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var1
                            _fun60903: for (var _fun60903_ip = 0;;) switch (_fun60903_ip) {
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
                                        _fun60903_ip = 49;
                                        continue _fun60903
                                    }
                                case 41:
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    _fun60903_ip = 75;
                                    continue _fun60903;
                                case 49:
                                    var1 = _closure1_slot6;
                                    var2 = var1.processUtils;
                                    var1 = var2.flushStorageData;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun60904: for (var _fun60904_ip = 0;;) switch (_fun60904_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = null;
                                                if (!(var0 == var4)) {
                                                    _fun60904_ip = 24;
                                                    continue _fun60904
                                                }
                                            case 9:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                _fun60904_ip = 69;
                                                continue _fun60904;
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
                _fun60905: for (var _fun60905_ip = 0;;) switch (_fun60905_ip) {
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
                            _fun60905_ip = 54;
                            continue _fun60905
                        }
                    case 42:
                        var0 = var3.resolve;
                        var0 = var0.bind(var3)();
                        _fun60905_ip = 81;
                        continue _fun60905;
                    case 54:
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var1
                            _fun60906: for (var _fun60906_ip = 0;;) switch (_fun60906_ip) {
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
                                        _fun60906_ip = 49;
                                        continue _fun60906
                                    }
                                case 41:
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    _fun60906_ip = 75;
                                    continue _fun60906;
                                case 49:
                                    var1 = _closure1_slot6;
                                    var2 = var1.processUtils;
                                    var1 = var2.flushCookies;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun60907: for (var _fun60907_ip = 0;;) switch (_fun60907_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = null;
                                                if (!(var0 == var4)) {
                                                    _fun60907_ip = 24;
                                                    continue _fun60907
                                                }
                                            case 9:
                                                var1 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                _fun60907_ip = 69;
                                                continue _fun60907;
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
                _fun60908: for (var _fun60908_ip = 0;;) switch (_fun60908_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60908_ip = 78;
                            continue _fun60908
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = null;
                        var5 = var4 == var3;
                        var3 = undefined;
                        if (var5) {
                            _fun60908_ip = 74;
                            continue _fun60908
                        }
                    case 49:
                        var5 = _closure1_slot6;
                        var5 = var5.processUtils;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun60908_ip = 74;
                            continue _fun60908
                        }
                    case 68:
                        var3 = var5.setCrashInformation;
                    case 74:
                        var2 = var4 != var3;
                    case 78:
                        if (!var2) {
                            _fun60908_ip = 109;
                            continue _fun60908
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
                _fun60909: for (var _fun60909_ip = 0;;) switch (_fun60909_ip) {
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
                            _fun60909_ip = 77;
                            continue _fun60909
                        }
                    case 38:
                        var2 = _closure1_slot6;
                        var2 = var2.powerSaveBlocker;
                        var2 = var3 != var2;
                        var0 = null;
                        if (!var2) {
                            _fun60909_ip = 77;
                            continue _fun60909
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
                _fun60910: for (var _fun60910_ip = 0;;) switch (_fun60910_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60910_ip = 50;
                            continue _fun60910
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = var3.powerSaveBlocker;
                        var3 = null;
                        var2 = var3 != var4;
                    case 50:
                        if (!var2) {
                            _fun60910_ip = 77;
                            continue _fun60910
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
                _fun60911: for (var _fun60911_ip = 0;;) switch (_fun60911_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60911_ip = 50;
                            continue _fun60911
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var4 = var3.powerSaveBlocker;
                        var3 = null;
                        var2 = var3 != var4;
                    case 50:
                        if (!var2) {
                            _fun60911_ip = 73;
                            continue _fun60911
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
                _fun60912: for (var _fun60912_ip = 0;;) switch (_fun60912_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.isPlatformEmbedded;
                        if (!var2) {
                            _fun60912_ip = 56;
                            continue _fun60912
                        }
                    case 34:
                        var3 = _closure1_slot6;
                        var3 = var3.remoteApp;
                        var4 = var3.relaunch;
                        var3 = null;
                        var2 = var3 != var4;
                    case 56:
                        if (!var2) {
                            _fun60912_ip = 79;
                            continue _fun60912
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
                _fun60913: for (var _fun60913_ip = 0;;) switch (_fun60913_ip) {
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
                            _fun60913_ip = 142;
                            continue _fun60913
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
                            _fun60913_ip = 405;
                            continue _fun60913
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
                            _fun60913_ip = 259;
                            continue _fun60913
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
                            _fun60913_ip = 372;
                            continue _fun60913
                        }
                    case 341:
                        var9 = var2 * var5;
                        var8 = var6.substring;
                        var7 = var9 + var5;
                        var7 = var8.bind(var6)(var9, var7);
                        var3[var2] = var7;
                        var2 = var2 + 1;
                        if (var2 < var4) {
                            _fun60913_ip = 341;
                            continue _fun60913
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
                            _fun60914: for (var _fun60914_ip = 0;;) switch (_fun60914_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var2 = _closure1_slot6;
                                    var3 = var2.http;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun60914_ip = 115;
                                        continue _fun60914
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
                                        _fun60915: for (var _fun60915_ip = 0;;) switch (_fun60915_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var1 = arg1;
                                                var0 = null;
                                                if (!(var0 == var3)) {
                                                    _fun60915_ip = 94;
                                                    continue _fun60915
                                                }
                                            case 12:
                                                var2 = var1.status;
                                                var0 = 400;
                                                if (!(!(var2 >= var0))) {
                                                    _fun60915_ip = 45;
                                                    continue _fun60915
                                                }
                                            case 27:
                                                var2 = _closure3_slot0;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                var0 = undefined;
                                                _fun60915_ip = 92;
                                                continue _fun60915;
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
                                                _fun60915_ip = 108;
                                                continue _fun60915;
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
                _fun60916: for (var _fun60916_ip = 0;;) switch (_fun60916_ip) {
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
                            _fun60916_ip = 154;
                            continue _fun60916
                        }
                    case 41:
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var0 = var0.submitLiveCrashReport;
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun60916_ip = 154;
                            continue _fun60916
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
                            _fun60916_ip = 108;
                            continue _fun60916
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
                _fun60917: for (var _fun60917_ip = 0;;) switch (_fun60917_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var3 = var0.crash;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun60917_ip = 40;
                            continue _fun60917
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
                _fun60919: for (var _fun60919_ip = 0;;) switch (_fun60919_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.initializeExitHook;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60919_ip = 31;
                            continue _fun60919
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
                _fun60920: for (var _fun60920_ip = 0;;) switch (_fun60920_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.initializeWERHandler;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun60920_ip = 31;
                            continue _fun60920
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
                _fun60921: for (var _fun60921_ip = 0;;) switch (_fun60921_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.pollQueueMetrics;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60921_ip = 35;
                            continue _fun60921
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
                _fun60925: for (var _fun60925_ip = 0;;) switch (_fun60925_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.gameDisplayModeUpdate;
                        var1 = null;
                        var0 = var1 != var2;
                        if (!var0) {
                            _fun60925_ip = 35;
                            continue _fun60925
                        }
                    case 31:
                        var0 = var1 != var3;
                    case 35:
                        if (!var0) {
                            _fun60925_ip = 45;
                            continue _fun60925
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
                _fun60926: for (var _fun60926_ip = 0;;) switch (_fun60926_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.gameDisplayModeIsSupported;
                        var1 = null;
                        var0 = var1 != var2;
                        if (!var0) {
                            _fun60926_ip = 37;
                            continue _fun60926
                        }
                    case 33:
                        var0 = var1 != var3;
                    case 37:
                        if (!var0) {
                            _fun60926_ip = 47;
                            continue _fun60926
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
                _fun60927: for (var _fun60927_ip = 0;;) switch (_fun60927_ip) {
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
                            _fun60927_ip = 66;
                            continue _fun60927
                        }
                    case 40:
                        var3 = var1 != var4;
                        var2 = null;
                        if (!var3) {
                            _fun60927_ip = 66;
                            continue _fun60927
                        }
                    case 49:
                        var3 = var1 != var5;
                        var2 = null;
                        if (!var3) {
                            _fun60927_ip = 66;
                            continue _fun60927
                        }
                    case 58:
                        var3 = undefined;
                        var2 = var4.bind(var3)(var6, var5);
                    case 66:
                        var3 = -1;
                        if (!(var3 === var2)) {
                            _fun60927_ip = 78;
                            continue _fun60927
                        }
                    case 76:
                        var2 = null;
                    case 78:
                        if (!(var1 != var2)) {
                            _fun60927_ip = 85;
                            continue _fun60927
                        }
                    case 82:
                        var0 = var2;
                    case 85:
                        if (!(var1 == var0)) {
                            _fun60927_ip = 126;
                            continue _fun60927
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
                _fun60928: for (var _fun60928_ip = 0;;) switch (_fun60928_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.getWindowFullscreenTypeExtraByPid;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60928_ip = 47;
                            continue _fun60928
                        }
                    case 30:
                        if (!(var0 != var3)) {
                            _fun60928_ip = 47;
                            continue _fun60928
                        }
                    case 34:
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                        _fun60928_ip = 96;
                        continue _fun60928;
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
                _fun60929: for (var _fun60929_ip = 0;;) switch (_fun60929_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var4 = var0.setGPUBoostEnabledByPid;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun60929_ip = 44;
                            continue _fun60929
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
                _fun60930: for (var _fun60930_ip = 0;;) switch (_fun60930_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.isHardwareAcceleratedGPUSchedulingEnabled;
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun60930_ip = 36;
                            continue _fun60930
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
                _fun60931: for (var _fun60931_ip = 0;;) switch (_fun60931_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.acquireGlobalLock;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60931_ip = 31;
                            continue _fun60931
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
                _fun60932: for (var _fun60932_ip = 0;;) switch (_fun60932_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.setServiceChannel;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60932_ip = 37;
                            continue _fun60932
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
                _fun60933: for (var _fun60933_ip = 0;;) switch (_fun60933_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.isSystemServiceInstalled;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60933_ip = 31;
                            continue _fun60933
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
                _fun60934: for (var _fun60934_ip = 0;;) switch (_fun60934_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var1 = var0.canSystemServiceBeInstalled;
                        var0 = null;
                        if (!(var0 == var1)) {
                            _fun60934_ip = 31;
                            continue _fun60934
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
                _fun60935: for (var _fun60935_ip = 0;;) switch (_fun60935_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.installSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60935_ip = 80;
                            continue _fun60935
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
                        _fun60935_ip = 86;
                        continue _fun60935;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.InstallSystemService = var13;
            var13 = function() {
                _fun60936: for (var _fun60936_ip = 0;;) switch (_fun60936_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.doesSystemServiceHaveUpdate;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60936_ip = 80;
                            continue _fun60936
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
                        _fun60936_ip = 86;
                        continue _fun60936;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.DoesSystemServiceHaveUpdate = var13;
            var13 = function() {
                _fun60937: for (var _fun60937_ip = 0;;) switch (_fun60937_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.updateSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60937_ip = 80;
                            continue _fun60937
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
                        _fun60937_ip = 86;
                        continue _fun60937;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.UpdateSystemService = var13;
            var13 = function() {
                _fun60938: for (var _fun60938_ip = 0;;) switch (_fun60938_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.uninstallSystemService;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60938_ip = 80;
                            continue _fun60938
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
                        _fun60938_ip = 86;
                        continue _fun60938;
                    case 80:
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 86:
                        return var0;
                }
            };
            var9.UninstallSystemService = var13;
            var13 = function arg0() {
                _fun60939: for (var _fun60939_ip = 0;;) switch (_fun60939_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.inputEventServiceSetStatusCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60939_ip = 37;
                            continue _fun60939
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
                _fun60940: for (var _fun60940_ip = 0;;) switch (_fun60940_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.inputEventServiceSetAllowed;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60940_ip = 31;
                            continue _fun60940
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
                _fun60941: for (var _fun60941_ip = 0;;) switch (_fun60941_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.toolServiceSetStatusCallback;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun60941_ip = 37;
                            continue _fun60941
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
                _fun60942: for (var _fun60942_ip = 0;;) switch (_fun60942_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.getDiscordUtils;
                        var0 = var0.bind(var1)();
                        var2 = var0.toolServiceSetAllowed;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun60942_ip = 31;
                            continue _fun60942
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
                _fun60943: for (var _fun60943_ip = 0;;) switch (_fun60943_ip) {
                    case 0:
                        var0 = arg1;
                        var3 = this;
                        var2 = _closure1_slot9;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun60943_ip = 31;
                            continue _fun60943
                        }
                    case 19:
                        var4 = [0, 0, 0];
                        _fun60943_ip = 35;
                        continue _fun60943;
                    case 31:
                        var4 = _closure1_slot9;
                    case 35:
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
                            _fun60943_ip = 84;
                            continue _fun60943
                        }
                    case 77:
                        var4 = arg0;
                        var9 = var10[var4];
                    case 84:
                        var10 = var1 != var9;
                        var4 = 0;
                        if (!var10) {
                            _fun60943_ip = 96;
                            continue _fun60943
                        }
                    case 93:
                        var4 = var9;
                    case 96:
                        var4 = var5.bind(var2)(var4);
                        var3 = var3.releaseChannel;
                        var5 = var0[var3];
                        if (!(var1 == var5)) {
                            _fun60943_ip = 121;
                            continue _fun60943
                        }
                    case 115:
                        var5 = var0.stable;
                    case 121:
                        var1 = _closure1_slot22;
                        var0 = var2.entries;
                        var0 = var0.bind(var2)();
                        var4 = var1.bind(var6)(var0);
                        var1 = var4.bind(var6)();
                        var0 = var1.done;
                        var3 = 2;
                        var2 = 1;
                        if (var0) {
                            _fun60943_ip = 222;
                            continue _fun60943
                        }
                    case 158:
                        var9 = var1.value;
                        var0 = _closure1_slot3;
                        var9 = var0.bind(var6)(var9, var3);
                        var0 = var9[var7];
                        var9 = var9[var2];
                        var10 = var5[var0];
                        if (!(!(var9 > var10))) {
                            _fun60943_ip = 218;
                            continue _fun60943
                        }
                    case 189:
                        var0 = var5[var0];
                        if (!(!(var9 < var0))) {
                            _fun60943_ip = 214;
                            continue _fun60943
                        }
                    case 197:
                        var9 = var4.bind(var6)();
                        var0 = var9.done;
                        var1 = var9;
                        if (var0) {
                            _fun60943_ip = 222;
                            continue _fun60943
                        }
                    case 212:
                        _fun60943_ip = 158;
                        continue _fun60943;
                    case 214:
                        var0 = false;
                        return var0;
                    case 218:
                        var0 = true;
                        return var0;
                    case 222:
                        var0 = true;
                        return var0;
                }
            };
            var9.isModuleVersionAtLeast = var13;
            var13 = function arg0() {
                _fun60944: for (var _fun60944_ip = 0;;) switch (_fun60944_ip) {
                    case 0:
                        var4 = arguments[1];
                        var3 = undefined;
                        if (!(var4 === var3)) {
                            _fun60944_ip = 11;
                            continue _fun60944
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
                            _fun60944_ip = 96;
                            continue _fun60944
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
                        _fun60944_ip = 195;
                        continue _fun60944;
                    case 96:
                        var2 = _closure1_slot6;
                        var3 = var2.riotGames;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun60944_ip = 141;
                            continue _fun60944
                        }
                    case 112:
                        var1 = _closure1_slot6;
                        var3 = var1.riotGames;
                        var2 = var3.fetchLiveClientData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var4);
                        _fun60944_ip = 192;
                        continue _fun60944;
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
                _fun60945: for (var _fun60945_ip = 0;;) switch (_fun60945_ip) {
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
                            _fun60945_ip = 58;
                            continue _fun60945
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
                _fun60946: for (var _fun60946_ip = 0;;) switch (_fun60946_ip) {
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
                            _fun60946_ip = 58;
                            continue _fun60946
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 660, 44, 4261, 1457, 478, 587, 7507, 3487, 4, 507, 2]);