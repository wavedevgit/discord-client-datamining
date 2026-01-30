// modules/keyboard/native/KeyCommandsView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100555: for (var _fun100555_ip = 0;;) switch (_fun100555_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
                _fun100556: for (var _fun100556_ip = 0;;) switch (_fun100556_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun100556_ip = 45;
                            continue _fun100556
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun100556_ip = 54;
                            continue _fun100556
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun100556_ip = 344;
                            continue _fun100556
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun100556_ip = 322;
                            continue _fun100556
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun100556_ip = 282;
                            continue _fun100556
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun100556_ip = 269;
                            continue _fun100556
                        }
                    case 109:
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
                            _fun100556_ip = 162;
                            continue _fun100556
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun100556_ip = 178;
                            continue _fun100556
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun100556_ip = 248;
                            continue _fun100556
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun100556_ip = 248;
                            continue _fun100556
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun100556_ip = 233;
                            continue _fun100556
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun100556_ip = 246;
                            continue _fun100556
                        }
                    case 233:
                        var8 = _closure1_slot7;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun100556_ip = 264;
                        continue _fun100556;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun100556_ip = 282;
                        continue _fun100556;
                    case 269:
                        var6 = _closure1_slot7;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun100556_ip = 322;
                            continue _fun100556
                        }
                    case 288:
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
                    case 322:
                        if (!var3) {
                            _fun100556_ip = 329;
                            continue _fun100556
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun100557: for (var _fun100557_ip = 0;;) switch (_fun100557_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun100557_ip = 56;
                                        continue _fun100557
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
                                    _fun100557_ip = 67;
                                    continue _fun100557;
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
                    case 344:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot6 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                _fun100558: for (var _fun100558_ip = 0;;) switch (_fun100558_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun100558_ip = 23;
                            continue _fun100558
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun100558_ip = 33;
                            continue _fun100558
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
                            _fun100558_ip = 70;
                            continue _fun100558
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun100558_ip = 55;
                            continue _fun100558
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var8.bind(var0)(var3);
            var _closure1_slot0 = var3;
            var12 = 1;
            var6 = var5[var12];
            var3 = arg3;
            var7 = var3.bind(var0)(var6);
            var _closure1_slot1 = var7;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.requireNativeComponent;
            var10 = var3.StyleSheet;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot2 = var3;
            var9 = var10.create;
            var3 = {};
            var11 = {};
            var11.flex = var12;
            var3.viewDefaults = var11;
            var3 = var9.bind(var10)(var3);
            var _closure1_slot3 = var3;
            var3 = 4;
            var3 = var5[var3];
            var9 = var4.bind(var0)(var3);
            var3 = var9.isAndroid;
            var3 = var3.bind(var9)();
            if (var3) {
                _fun100555_ip = 212;
                continue _fun100555
            }
        case 201:
            var3 = 'KeyCommandsView';
            var3 = var6.bind(var0)(var3);
            _fun100555_ip = 224;
            continue _fun100555;
        case 212:
            var6 = 5;
            var6 = var5[var6];
            var3 = var8.bind(var0)(var6);
        case 224:
            var _closure1_slot4 = var3;
            var6 = var7.createContext;
            var3 = {};
            var8 = new Array(0);
            var3.keyCommands = var8;
            var8 = function() { // Original name: addKeyCommand, environment: var1
                var0 = undefined;
                return var0;
            };
            var3.addKeyCommand = var8;
            var8 = function() { // Original name: removeKeyCommand, environment: var1
                var0 = undefined;
                return var0;
            };
            var3.removeKeyCommand = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot5 = var3;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/keyboard/native/KeyCommandsView.tsx';
            var3 = var4.bind(var5)(var3);
            var3 = function(arg0) { // Original name: KeyCommandsView, environment: var1
                var3 = arg0;
                var7 = var3.style;
                var0 = null;
                var2 = Object.create(var0);
                var0 = 0;
                var2.style = var0;
                var14 = {};
                var13 = var3;
                var12 = var2;
                var10 = copyDataProperties(var14, var13, var12);
                var4 = _closure1_slot1;
                var2 = var4.useState;
                var1 = new Array(0);
                var5 = var2.bind(var4)(var1);
                var2 = _closure1_slot0;
                var3 = undefined;
                var1 = 2;
                var1 = var2.bind(var3)(var5, var1);
                var8 = var1[var0];
                var _closure2_slot0 = var8;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot1 = var0;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = new Array(1);
                        var4 = arg0;
                        var3 = 0;
                        var5 = var0;
                        var2 = arraySpread(var5, var4, var3);
                        var1 = _closure3_slot0;
                        var0[var2] = var1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var5 = var2.bind(var4)(var1, var0);
                var _closure2_slot2 = var5;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.eventName;
                            var0 = _closure3_slot0;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot3 = var0;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var6
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.keyCommands = var2;
                    var2 = _closure2_slot2;
                    var0.addKeyCommand = var2;
                    var1 = _closure2_slot3;
                    var0.removeKeyCommand = var1;
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot2;
                var0 = _closure1_slot5;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var14 = var4;
                var13 = var10;
                var10 = copyDataProperties(var14, var13);
                var9 = _closure1_slot3;
                var10 = var9.viewDefaults;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var7;
                var7 = 'style';
                var4[var7] = var9;
                var7 = 'keyCommands';
                var4[var7] = var8;
                var7 = function(arg0) { // Original name: onKeyCommand, environment: var6
                    _fun100568: for (var _fun100568_ip = 0;;) switch (_fun100568_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.nativeEvent;
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot0;
                            var1 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.eventName;
                                var0 = _closure3_slot0;
                                var0 = var0.eventName;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var1.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun100568_ip = 56;
                                continue _fun100568
                            }
                        case 45:
                            var0 = var1.onKeyCommand;
                            var0 = var0.bind(var1)(var2);
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = 'onKeyCommand';
                var4[var6] = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.default = var3;
            var1 = function(arg0) { // Original name: useKeyCommands, environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot1;
                var2 = var3.useContext;
                var1 = _closure1_slot5;
                var1 = var2.bind(var3)(var1);
                var6 = var1.addKeyCommand;
                var _closure2_slot1 = var6;
                var5 = var1.removeKeyCommand;
                var _closure2_slot2 = var5;
                var2 = var3.useEffect;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun100571: for (var _fun100571_ip = 0;;) switch (_fun100571_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = _closure2_slot0;
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.bind(var3)();
                            var0 = var1.done;
                            if (var0) {
                                _fun100571_ip = 62;
                                continue _fun100571
                            }
                        case 33:
                            var5 = var1.value;
                            var0 = _closure2_slot1;
                            var0 = var0.bind(var3)(var5);
                            var5 = var2.bind(var3)();
                            var0 = var5.done;
                            var1 = var5;
                            if (!var0) {
                                _fun100571_ip = 33;
                                continue _fun100571
                            }
                        case 62:
                            var0 = function() { // Environment: var0
                                _fun100572: for (var _fun100572_ip = 0;;) switch (_fun100572_ip) {
                                    case 0:
                                        var2 = _closure1_slot6;
                                        var1 = _closure2_slot0;
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.bind(var0)();
                                        var1 = var2.done;
                                        if (var1) {
                                            _fun100572_ip = 68;
                                            continue _fun100572
                                        }
                                    case 33:
                                        var1 = var2.value;
                                        var5 = _closure2_slot2;
                                        var1 = var1.eventName;
                                        var1 = var5.bind(var0)(var1);
                                        var5 = var3.bind(var0)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun100572_ip = 33;
                                            continue _fun100572
                                        }
                                    case 68:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = undefined;
                return var0;
            };
            var2.useKeyCommands = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 478, 13039, 2]);