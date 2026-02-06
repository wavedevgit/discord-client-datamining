// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun104319: for (var _fun104319_ip = 0;;) switch (_fun104319_ip) {
        case 0:
            var11 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var10;
            var0 = function() {
                _fun104320: for (var _fun104320_ip = 0;;) switch (_fun104320_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 72: // try_end0
                        _fun104320_ip = 76;
                        continue _fun104320;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot14 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function arg0() {
                _fun104323: for (var _fun104323_ip = 0;;) switch (_fun104323_ip) {
                    case 0:
                        var0 = global;
                        var5 = var0.Object;
                        var4 = var5.assign;
                        var3 = _closure1_slot13;
                        var2 = {};
                        var1 = arg0;
                        var2 = var4.bind(var5)(var2, var3, var1);
                        var1 = new Array(0);
                        var3 = 'width';
                        var3 = var3 in var2;
                        if (!var3) {
                            _fun104323_ip = 80;
                            continue _fun104323
                        }
                    case 47:
                        var4 = var2.width;
                        var5 = 'number';
                        var4 = typeof var4;
                        var4 = var5 !== var4;
                        if (var4) {
                            _fun104323_ip = 77;
                            continue _fun104323
                        }
                    case 66:
                        var6 = var2.width;
                        var5 = 0;
                        var4 = var6 <= var5;
                    case 77:
                        var3 = var4;
                    case 80:
                        if (!var3) {
                            _fun104323_ip = 104;
                            continue _fun104323
                        }
                    case 83:
                        var4 = var1.push;
                        var3 = 'option width should be a positive number';
                        var3 = var4.bind(var1)(var3);
                        var3 = delete var2.width;
                    case 104:
                        var3 = 'height';
                        var3 = var3 in var2;
                        if (!var3) {
                            _fun104323_ip = 148;
                            continue _fun104323
                        }
                    case 115:
                        var4 = var2.height;
                        var5 = 'number';
                        var4 = typeof var4;
                        var4 = var5 !== var4;
                        if (var4) {
                            _fun104323_ip = 145;
                            continue _fun104323
                        }
                    case 134:
                        var6 = var2.height;
                        var5 = 0;
                        var4 = var6 <= var5;
                    case 145:
                        var3 = var4;
                    case 148:
                        if (!var3) {
                            _fun104323_ip = 172;
                            continue _fun104323
                        }
                    case 151:
                        var4 = var1.push;
                        var3 = 'option height should be a positive number';
                        var3 = var4.bind(var1)(var3);
                        var3 = delete var2.height;
                    case 172:
                        var3 = var2.quality;
                        var4 = 'number';
                        var3 = typeof var3;
                        var3 = var4 !== var3;
                        if (var3) {
                            _fun104323_ip = 204;
                            continue _fun104323
                        }
                    case 192:
                        var5 = var2.quality;
                        var4 = 0;
                        var3 = var5 < var4;
                    case 204:
                        if (var3) {
                            _fun104323_ip = 220;
                            continue _fun104323
                        }
                    case 207:
                        var5 = var2.quality;
                        var4 = 1;
                        var3 = var5 > var4;
                    case 220:
                        if (!var3) {
                            _fun104323_ip = 255;
                            continue _fun104323
                        }
                    case 223:
                        var4 = var1.push;
                        var3 = 'option quality should be a number between 0.0 and 1.0';
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure1_slot13;
                        var3 = var3.quality;
                        var2.quality = var3;
                    case 255:
                        var3 = var2.snapshotContentContainer;
                        var4 = 'boolean';
                        var3 = typeof var3;
                        if (!(var4 !== var3)) {
                            _fun104323_ip = 288;
                            continue _fun104323
                        }
                    case 272:
                        var5 = var1.push;
                        var3 = 'option snapshotContentContainer should be a boolean';
                        var3 = var5.bind(var1)(var3);
                    case 288:
                        var3 = var2.handleGLSurfaceViewOnAndroid;
                        var3 = typeof var3;
                        if (!(var4 !== var3)) {
                            _fun104323_ip = 317;
                            continue _fun104323
                        }
                    case 301:
                        var4 = var1.push;
                        var3 = 'option handleGLSurfaceViewOnAndroid should be a boolean';
                        var3 = var4.bind(var1)(var3);
                    case 317:
                        var5 = _closure1_slot11;
                        var4 = var5.indexOf;
                        var3 = var2.format;
                        var3 = var4.bind(var5)(var3);
                        var4 = -1;
                        if (!(var4 === var3)) {
                            _fun104323_ip = 421;
                            continue _fun104323
                        }
                    case 347:
                        var3 = _closure1_slot13;
                        var3 = var3.format;
                        var2.format = var3;
                        var5 = var1.push;
                        var6 = var2.format;
                        var3 = "option format '";
                        var7 = var3 + var6;
                        var8 = _closure1_slot11;
                        var6 = var8.join;
                        var3 = ' | ';
                        var6 = var6.bind(var8)(var3);
                        var3 = "' is not in valid formats: ";
                        var3 = var7 + var3;
                        var3 = var3 + var6;
                        var3 = var5.bind(var1)(var3);
                    case 421:
                        var6 = _closure1_slot12;
                        var5 = var6.indexOf;
                        var3 = var2.result;
                        var3 = var5.bind(var6)(var3);
                        if (!(var4 === var3)) {
                            _fun104323_ip = 522;
                            continue _fun104323
                        }
                    case 446:
                        var3 = _closure1_slot13;
                        var3 = var3.result;
                        var2.result = var3;
                        var3 = var1.push;
                        var5 = var2.result;
                        var4 = "option result '";
                        var5 = var4 + var5;
                        var6 = _closure1_slot12;
                        var4 = var6.join;
                        var0 = ' | ';
                        var4 = var4.bind(var6)(var0);
                        var0 = "' is not in valid formats: ";
                        var0 = var5 + var0;
                        var0 = var0 + var4;
                        var0 = var3.bind(var1)(var0);
                    case 522:
                        var0 = {};
                        var0.options = var2;
                        var0.errors = var1;
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var5 = function() {
                _fun104324: for (var _fun104324_ip = 0;;) switch (_fun104324_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        if (var1) {
                            _fun104324_ip = 64;
                            continue _fun104324
                        }
                    case 28:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.';
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 64:
                        return var0;
                }
            };
            var _closure1_slot16 = var5;
            var4 = function arg0, arg1() {
                _fun104325: for (var _fun104325_ip = 0;;) switch (_fun104325_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot16;
                        var4 = undefined;
                        var2 = var2.bind(var4)();
                        var6 = var1;
                        if (!var1) {
                            _fun104325_ip = 122;
                            continue _fun104325
                        }
                    case 22:
                        var3 = 'object';
                        var2 = typeof var1;
                        var6 = var1;
                        if (!(var3 === var2)) {
                            _fun104325_ip = 122;
                            continue _fun104325
                        }
                    case 36:
                        var2 = 'current';
                        var2 = var2 in var1;
                        var6 = var1;
                        if (!var2) {
                            _fun104325_ip = 122;
                            continue _fun104325
                        }
                    case 50:
                        var2 = var1.current;
                        var6 = var1;
                        if (!var2) {
                            _fun104325_ip = 122;
                            continue _fun104325
                        }
                    case 61:
                        var6 = var1.current;
                        if (var6) {
                            _fun104325_ip = 122;
                            continue _fun104325
                        }
                    case 69:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.reject;
                        var7 = var1.Error;
                        var1 = var7.prototype;
                        var5 = Object.create(var1, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = 'ref.current is null';
                        var10 = var5;
                        var1 = new var10[var7](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 122:
                        var2 = 'number';
                        var1 = typeof var6;
                        var3 = var6;
                        if (!(var2 !== var1)) {
                            _fun104325_ip = 216;
                            continue _fun104325
                        }
                    case 136:
                        var1 = _closure1_slot8;
                        var3 = var1.bind(var4)(var6);
                        if (var3) {
                            _fun104325_ip = 216;
                            continue _fun104325
                        }
                    case 148:
                        var1 = global;
                        var5 = var1.Promise;
                        var2 = var5.reject;
                        var7 = var1.Error;
                        var1 = var1.String;
                        var6 = var1.bind(var4)(var6);
                        var1 = 'findNodeHandle failed to resolve view=';
                        var9 = var1 + var6;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var10 = var6;
                        var1 = new var10[var7](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var1 = var2.bind(var5)(var1);
                        return var1;
                    case 216:
                        var2 = _closure1_slot15;
                        var1 = arg1;
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.options;
                        var1 = var1.errors;
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 8;
                        var0 = var5[var0];
                        var1 = var1.bind(var4)(var0);
                        var0 = var1.captureRef;
                        var0 = var0.bind(var1)(var3, var2);
                        return var0;
                }
            };
            var _closure1_slot17 = var4;
            var3 = function arg0() {
                _fun104326: for (var _fun104326_ip = 0;;) switch (_fun104326_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 'string';
                        var0 = typeof var2;
                        if (!(var1 === var0)) {
                            _fun104326_ip = 50;
                            continue _fun104326
                        }
                    case 14:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var0 = var1.releaseCapture;
                        var0 = var0.bind(var1)(var2);
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot18 = var3;
            var6 = global;
            var12 = var6.Object;
            var8 = var12.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var12)(var2, var0, var7);
            var0 = 0;
            var7 = var10[var0];
            var0 = undefined;
            var7 = var9.bind(var0)(var7);
            var _closure1_slot2 = var7;
            var7 = 1;
            var7 = var10[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var7 = 2;
            var7 = var10[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var7 = 3;
            var7 = var10[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 4;
            var7 = var10[var7];
            var7 = var9.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var7 = 5;
            var8 = var10[var7];
            var8 = var9.bind(var0)(var8);
            var7 = var10[var7];
            var7 = var11.bind(var0)(var7);
            var7 = var7.Component;
            var8 = 6;
            var8 = var10[var8];
            var8 = var11.bind(var0)(var8);
            var12 = var8.View;
            var _closure1_slot7 = var12;
            var12 = var8.Platform;
            var12 = var8.findNodeHandle;
            var _closure1_slot8 = var12;
            var8 = var8.StyleProp;
            var8 = 7;
            var8 = var10[var8];
            var8 = var11.bind(var0)(var8);
            var8 = var8.jsx;
            var _closure1_slot9 = var8;
            var12 = var6.Promise;
            var8 = var12.prototype;
            var11 = Object.create(var8, {
                constructor: {
                    value: var12
                }
            });
            var15 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var16 = var11;
            var8 = new var16[var12](var15, var14);
            var8 = var8 instanceof Object ? var8 : var11;
            var _closure1_slot10 = var8;
            var8 = 8;
            var8 = var10[var8];
            var8 = var9.bind(var0)(var8);
            if (var8) {
                _fun104319_ip = 357;
                continue _fun104319
            }
        case 335:
            var9 = var6.console;
            var8 = var9.warn;
            var6 = 'react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.';
            var6 = var8.bind(var9)(var6);
        case 357:
            var9 = ['png', 'jpg'];
            var8 = var9.concat;
            var6 = ['webm', 'raw'];
            var6 = var8.bind(var9)(var6);
            var _closure1_slot11 = var6;
            var9 = ['tmpfile', 'base64', 'data-uri'];
            var8 = var9.concat;
            var6 = ['zip-base64'];
            var6 = var8.bind(var9)(var6);
            var _closure1_slot12 = var6;
            var6 = {
                'format': 'png',
                'quality': 1,
                'result': 'tmpfile',
                'snapshotContentContainer': false,
                'handleGLSurfaceViewOnAndroid': false
            };
            var _closure1_slot13 = var6;
            var6 = function(arg0) { // Environment: var1
                var3 = function() {
                    _fun104329: for (var _fun104329_ip = 0;;) switch (_fun104329_ip) {
                        case 0:
                            var5 = this;
                            var4 = undefined;
                            var9 = undefined;
                            var3 = _closure1_slot2;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var5, var2);
                            var7 = arguments.length;
                            var2 = global;
                            var3 = var2.Array;
                            var8 = var3.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var15 = var8;
                            var14 = var7;
                            var3 = new var15[var3](var14, var13);
                            var8 = var3 instanceof Object ? var3 : var8;
                            var3 = 0;
                            var10 = var3 < var7;
                            if (!var10) {
                                _fun104329_ip = 87;
                                continue _fun104329
                            }
                        case 72:
                            var10 = arguments[var3];
                            var8[var3] = var10;
                            var3 = var3 + 1;
                            if (var3 < var7) {
                                _fun104329_ip = 72;
                                continue _fun104329
                            }
                        case 87:
                            var3 = _closure2_slot0;
                            var7 = new Array(0);
                            var0 = var7.concat;
                            var7 = var0.bind(var7)(var8);
                            var0 = _closure1_slot5;
                            var10 = var0.bind(var4)(var3);
                            var3 = _closure1_slot4;
                            var0 = _closure1_slot14;
                            var0 = var0.bind(var4)();
                            if (var0) {
                                _fun104329_ip = 142;
                                continue _fun104329
                            }
                        case 129:
                            var0 = var10.apply;
                            var0 = var0.bind(var10)(var5, var7);
                            _fun104329_ip = 181;
                            continue _fun104329;
                        case 142:
                            var9 = var2.Reflect;
                            var8 = var9.construct;
                            if (var7) {
                                _fun104329_ip = 160;
                                continue _fun104329
                            }
                        case 156:
                            var7 = new Array(0);
                        case 160:
                            var6 = _closure1_slot5;
                            var6 = var6.bind(var4)(var5);
                            var6 = var6.constructor;
                            var0 = var8.bind(var9)(var10, var7, var6);
                        case 181:
                            var0 = var3.bind(var4)(var5, var0);
                            var _closure3_slot0 = var0;
                            var4 = var2.Promise;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var14 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1.resolveFirstLayout = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var15 = var3;
                            var2 = new var15[var4](var14, var13);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var0.firstLayoutPromise = var2;
                            var2 = function() { // Environment: var1
                                var1 = _closure3_slot0;
                                var3 = var1.firstLayoutPromise;
                                var2 = var3.then;
                                var1 = function() { // Environment: var0
                                    _fun104332: for (var _fun104332_ip = 0;;) switch (_fun104332_ip) {
                                        case 0:
                                            var0 = _closure3_slot0;
                                            var4 = var0.root;
                                            if (var4) {
                                                _fun104332_ip = 25;
                                                continue _fun104332
                                            }
                                        case 19:
                                            var0 = _closure1_slot10;
                                            _fun104332_ip = 51;
                                            continue _fun104332;
                                        case 25:
                                            var3 = _closure1_slot17;
                                            var1 = _closure3_slot0;
                                            var1 = var1.props;
                                            var2 = var1.options;
                                            var1 = undefined;
                                            var0 = var3.bind(var1)(var4, var2);
                                        case 51:
                                            return var0;
                                    }
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var2 = _closure3_slot0;
                                    var1 = var2.onCapture;
                                    var1 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var2 = _closure3_slot0;
                                    var1 = var2.onCaptureFailure;
                                    var1 = var1.bind(var2)(var0);
                                    throw var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.capture = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun104335: for (var _fun104335_ip = 0;;) switch (_fun104335_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1.root;
                                        if (!var1) {
                                            _fun104335_ip = 107;
                                            continue _fun104335
                                        }
                                    case 19:
                                        var1 = _closure3_slot0;
                                        var1 = var1.lastCapturedURI;
                                        if (!var1) {
                                            _fun104335_ip = 72;
                                            continue _fun104335
                                        }
                                    case 32:
                                        var1 = global;
                                        var6 = var1.setTimeout;
                                        var5 = _closure1_slot18;
                                        var1 = _closure3_slot0;
                                        var4 = var1.lastCapturedURI;
                                        var3 = undefined;
                                        var1 = 500;
                                        var1 = var6.bind(var3)(var5, var1, var4);
                                    case 72:
                                        var1 = _closure3_slot0;
                                        var1.lastCapturedURI = var2;
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var1 = var0.onCapture;
                                        if (!var1) {
                                            _fun104335_ip = 107;
                                            continue _fun104335
                                        }
                                    case 100:
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 107:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onCapture = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun104336: for (var _fun104336_ip = 0;;) switch (_fun104336_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1.root;
                                        if (!var1) {
                                            _fun104336_ip = 44;
                                            continue _fun104336
                                        }
                                    case 16:
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var2 = var0.onCaptureFailure;
                                        if (!var2) {
                                            _fun104336_ip = 44;
                                            continue _fun104336
                                        }
                                    case 34:
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0);
                                    case 44:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onCaptureFailure = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun104337: for (var _fun104337_ip = 0;;) switch (_fun104337_ip) {
                                    case 0:
                                        var1 = global;
                                        var5 = var1.cancelAnimationFrame;
                                        var0 = _closure3_slot0;
                                        var3 = var0._raf;
                                        var0 = undefined;
                                        var3 = var5.bind(var0)(var3);
                                        var5 = 'continuous';
                                        var3 = arg0;
                                        if (!(var5 === var3)) {
                                            _fun104337_ip = 83;
                                            continue _fun104337
                                        }
                                    case 43:
                                        var3 = '-';
                                        var _closure4_slot0 = var3;
                                        var3 = function() {
                                            _fun104338: for (var _fun104338_ip = 0;;) switch (_fun104338_ip) {
                                                case 0:
                                                    var4 = _closure3_slot0;
                                                    var0 = global;
                                                    var5 = var0.requestAnimationFrame;
                                                    var2 = _closure4_slot1;
                                                    var0 = undefined;
                                                    var2 = var5.bind(var0)(var2);
                                                    var4._raf = var2;
                                                    var4 = _closure4_slot0;
                                                    var2 = _closure3_slot0;
                                                    var2 = var2.lastCapturedURI;
                                                    if (!(var4 !== var2)) {
                                                        _fun104338_ip = 81;
                                                        continue _fun104338
                                                    }
                                                case 53:
                                                    var2 = _closure3_slot0;
                                                    var2 = var2.lastCapturedURI;
                                                    _closure4_slot0 = var2;
                                                    var2 = _closure3_slot0;
                                                    var1 = var2.capture;
                                                    var1 = var1.bind(var2)();
                                                case 81:
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot1 = var3;
                                        var2 = _closure3_slot0;
                                        var1 = var1.requestAnimationFrame;
                                        var1 = var1.bind(var0)(var3);
                                        var2._raf = var1;
                                    case 83:
                                        return var0;
                                }
                            };
                            var0.syncCaptureLoop = var2;
                            var2 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1.root = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0.onRef = var2;
                            var1 = function(arg0) { // Environment: var1
                                _fun104340: for (var _fun104340_ip = 0;;) switch (_fun104340_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onLayout;
                                        var4 = _closure3_slot0;
                                        var3 = var4.resolveFirstLayout;
                                        var0 = var2.nativeEvent;
                                        var0 = var0.layout;
                                        var0 = var3.bind(var4)(var0);
                                        if (!var1) {
                                            _fun104340_ip = 58;
                                            continue _fun104340
                                        }
                                    case 51:
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onLayout = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot3;
                var4 = {};
                var0 = 'componentDidMount';
                var4.key = var0;
                var0 = function() {
                    _fun104341: for (var _fun104341_ip = 0;;) switch (_fun104341_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.props;
                            var2 = var0.captureMode;
                            var0 = 'mount';
                            if (!(var0 !== var2)) {
                                _fun104341_ip = 46;
                                continue _fun104341
                            }
                        case 22:
                            var2 = var1.syncCaptureLoop;
                            var0 = var1.props;
                            var0 = var0.captureMode;
                            var0 = var2.bind(var1)(var0);
                            _fun104341_ip = 56;
                            continue _fun104341;
                        case 46:
                            var0 = var1.capture;
                            var0 = var0.bind(var1)();
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(4);
                var0[0] = var4;
                var4 = {};
                var6 = 'componentDidUpdate';
                var4.key = var6;
                var6 = function arg0() {
                    _fun104342: for (var _fun104342_ip = 0;;) switch (_fun104342_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var1 = var0.captureMode;
                            var0 = undefined;
                            var1 = var0 !== var1;
                            if (!var1) {
                                _fun104342_ip = 47;
                                continue _fun104342
                            }
                        case 23:
                            var3 = var2.props;
                            var4 = var3.captureMode;
                            var3 = arg0;
                            var3 = var3.captureMode;
                            var1 = var4 !== var3;
                        case 47:
                            if (!var1) {
                                _fun104342_ip = 72;
                                continue _fun104342
                            }
                        case 50:
                            var3 = var2.syncCaptureLoop;
                            var1 = var2.props;
                            var1 = var1.captureMode;
                            var1 = var3.bind(var2)(var1);
                        case 72:
                            var1 = var2.props;
                            var3 = var1.captureMode;
                            var1 = 'update';
                            if (!(var1 === var3)) {
                                _fun104342_ip = 101;
                                continue _fun104342
                            }
                        case 91:
                            var1 = var2.capture;
                            var1 = var1.bind(var2)();
                        case 101:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'componentWillUnmount';
                var4.key = var6;
                var6 = function() {
                    var2 = this;
                    var1 = var2.syncCaptureLoop;
                    var0 = null;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'render';
                var4.key = var6;
                var5 = function() {
                    var4 = this;
                    var0 = var4.props;
                    var0 = var0.children;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var5 = var4.onRef;
                    var1.ref = var5;
                    var5 = false;
                    var1.collapsable = var5;
                    var5 = var4.onLayout;
                    var1.onLayout = var5;
                    var4 = var4.props;
                    var4 = var4.style;
                    var1.style = var4;
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4.value = var5;
                var0[3] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var6 = var6.bind(var0)(var7);
            var6.captureRef = var4;
            var6.releaseCapture = var3;
            var2.default = var6;
            var2.ensureModuleIsLoaded = var5;
            var2.captureRef = var4;
            var2.releaseCapture = var3;
            var1 = function arg0() {
                var1 = _closure1_slot16;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var2 = _closure1_slot15;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var2 = var1.options;
                var1 = var1.errors;
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.captureScreen;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var2.captureScreen = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 13615]);