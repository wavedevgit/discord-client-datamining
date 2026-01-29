// modules/a11y/native/AccessibilityFocusLockManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun37246: for (var _fun37246_ip = 0;;) switch (_fun37246_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun37246_ip = 45;
                    continue _fun37246
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun37246_ip = 54;
                    continue _fun37246
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun37246_ip = 342;
                    continue _fun37246
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun37246_ip = 322;
                    continue _fun37246
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun37246_ip = 282;
                    continue _fun37246
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun37246_ip = 269;
                    continue _fun37246
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
                    _fun37246_ip = 162;
                    continue _fun37246
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun37246_ip = 178;
                    continue _fun37246
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun37246_ip = 248;
                    continue _fun37246
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun37246_ip = 248;
                    continue _fun37246
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun37246_ip = 233;
                    continue _fun37246
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun37246_ip = 246;
                    continue _fun37246
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun37246_ip = 264;
                continue _fun37246;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun37246_ip = 282;
                continue _fun37246;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun37246_ip = 322;
                    continue _fun37246
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
                    _fun37246_ip = 329;
                    continue _fun37246
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun37247: for (var _fun37247_ip = 0;;) switch (_fun37247_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun37247_ip = 56;
                                continue _fun37247
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
                            _fun37247_ip = 67;
                            continue _fun37247;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun37248: for (var _fun37248_ip = 0;;) switch (_fun37248_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun37248_ip = 23;
                    continue _fun37248
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun37248_ip = 33;
                    continue _fun37248
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
                    _fun37248_ip = 70;
                    continue _fun37248
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun37248_ip = 55;
                    continue _fun37248
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun37249: for (var _fun37249_ip = 0;;) switch (_fun37249_ip) {
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
            case 70: // try_end0
                _fun37249_ip = 74;
                continue _fun37249;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'AccessibilityFocusLockManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: AccessibilityFocusLockManager, environment: var5
            _fun37253: for (var _fun37253_ip = 0;;) switch (_fun37253_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun37253_ip = 84;
                        continue _fun37253
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun37253_ip = 118;
                    continue _fun37253;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = false;
                    var0._screenReaderEnabled = var1;
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var3;
                    var2 = new var12[var2](var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0._focusLockedNativeIDGroups = var2;
                    var0._focusLockEnabled = var1;
                    var1 = -1;
                    var0._focusLockEnabledDelayTimeoutId = var1;
                    var1 = 250;
                    var0._focusLockEnabledDelayTimeout = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_updateAccessibilityFocusLock';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun37254: for (var _fun37254_ip = 0;;) switch (_fun37254_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun37254_ip = 16;
                        continue _fun37254
                    }
                case 14:
                    var3 = false;
                case 16:
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var0;
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var4 = var2._focusLockEnabledDelayTimeoutId;
                    var4 = var5.bind(var0)(var4);
                    _closure3_slot1 = var0;
                    var6 = _closure1_slot10;
                    var7 = var2._focusLockedNativeIDGroups;
                    var5 = var7.values;
                    var5 = var5.bind(var7)();
                    var8 = var6.bind(var0)(var5);
                    var6 = var8.bind(var0)();
                    var5 = var6.done;
                    var7 = var6;
                    var6 = undefined;
                    if (var5) {
                        _fun37254_ip = 118;
                        continue _fun37254
                    }
                case 91:
                    var9 = var7.value;
                    _closure3_slot1 = var9;
                    var10 = var8.bind(var0)();
                    var5 = var10.done;
                    var7 = var10;
                    var6 = var9;
                    if (!var5) {
                        _fun37254_ip = 91;
                        continue _fun37254
                    }
                case 118:
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun37254_ip = 133;
                        continue _fun37254
                    }
                case 124:
                    var5 = var2._screenReaderEnabled;
                    if (var5) {
                        _fun37254_ip = 240;
                        continue _fun37254
                    }
                case 133:
                    var5 = var2._focusLockEnabled;
                    if (!var5) {
                        _fun37254_ip = 277;
                        continue _fun37254
                    }
                case 145:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 7;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.isAndroid;
                    var5 = var5.bind(var6)();
                    if (var5) {
                        _fun37254_ip = 200;
                        continue _fun37254
                    }
                case 178:
                    var5 = _closure1_slot8;
                    var6 = var5.DCDAccessibilityManager;
                    var5 = var6.disableFocusLock;
                    var5 = var5.bind(var6)();
                    _fun37254_ip = 230;
                    continue _fun37254;
                case 200:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.disableFocusLock;
                    var4 = var4.bind(var5)();
                case 230:
                    var4 = false;
                    var2._focusLockEnabled = var4;
                    _fun37254_ip = 277;
                    continue _fun37254;
                case 240:
                    var4 = var3.setTimeout;
                    var3 = var2._focusLockEnabledDelayTimeout;
                    var1 = function() { // Environment: var1
                        _fun37255: for (var _fun37255_ip = 0;;) switch (_fun37255_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 7;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isAndroid;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun37255_ip = 73;
                                    continue _fun37255
                                }
                            case 38:
                                var2 = _closure1_slot8;
                                var5 = var2.DCDAccessibilityManager;
                                var4 = var5.enableFocusLock;
                                var3 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                var2 = var4.bind(var5)(var3, var2);
                                _fun37255_ip = 116;
                                continue _fun37255;
                            case 73:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.enableFocusLock;
                                var2 = _closure3_slot1;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var2, var1);
                            case 116:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2._focusLockEnabledDelayTimeoutId = var1;
                    var1 = true;
                    var2._focusLockEnabled = var1;
                case 277:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = '_initialize';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 9;
            var3 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.addScreenReaderEnabledListener;
            var1 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var0 = arg0;
                var1._screenReaderEnabled = var0;
                var0 = var1._updateAccessibilityFocusLock;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var2._screenReaderEnabledListener = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun37258: for (var _fun37258_ip = 0;;) switch (_fun37258_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._screenReaderEnabledListener;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun37258_ip = 25;
                        continue _fun37258
                    }
                case 15:
                    var0 = var2.call;
                    var0 = var0.bind(var2)(var1);
                case 25:
                    var2 = var1._focusLockedNativeIDGroups;
                    var0 = var2.clear;
                    var0 = var0.bind(var2)();
                    var0 = var1._updateAccessibilityFocusLock;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'enableAccessibilityFocusLock';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun37259: for (var _fun37259_ip = 0;;) switch (_fun37259_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var0 = var5.length;
                    var1 = 0;
                    if (!(var1 === var0)) {
                        _fun37259_ip = 40;
                        continue _fun37259
                    }
                case 17:
                    var4 = _closure1_slot9;
                    var2 = var4.error;
                    var0 = 'No target view nativeIDs to add.';
                    var0 = var2.bind(var4)(var0);
                case 40:
                    var4 = _closure1_slot10;
                    var2 = var3._focusLockedNativeIDGroups;
                    var0 = var2.values;
                    var2 = var0.bind(var2)();
                    var0 = undefined;
                    var10 = var4.bind(var0)(var2);
                    var4 = var10.bind(var0)();
                    var2 = var4.done;
                    var9 = global;
                    var8 = 'Duplicate target view nativeID ';
                    var7 = ' already accessibility focus locked.';
                    var6 = var4;
                    var4 = undefined;
                    if (var2) {
                        _fun37259_ip = 208;
                        continue _fun37259
                    }
                case 100:
                    var12 = _closure1_slot10;
                    var2 = var6.value;
                    var13 = var12.bind(var0)(var2);
                    var12 = var13.bind(var0)();
                    var2 = var12.done;
                    if (var2) {
                        _fun37259_ip = 193;
                        continue _fun37259
                    }
                case 126:
                    var14 = var12.value;
                    var2 = var5.includes;
                    var2 = var2.bind(var5)(var14);
                    if (!var2) {
                        _fun37259_ip = 175;
                        continue _fun37259
                    }
                case 144:
                    var16 = _closure1_slot9;
                    var15 = var16.error;
                    var2 = var9.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var8)(var14, var7);
                    var2 = var15.bind(var16)(var2);
                case 175:
                    var15 = var13.bind(var0)();
                    var2 = var15.done;
                    var12 = var15;
                    var4 = var14;
                    if (!var2) {
                        _fun37259_ip = 126;
                        continue _fun37259
                    }
                case 193:
                    var12 = var10.bind(var0)();
                    var2 = var12.done;
                    var6 = var12;
                    if (!var2) {
                        _fun37259_ip = 100;
                        continue _fun37259
                    }
                case 208:
                    var4 = var3._focusLockedNativeIDGroups;
                    var2 = var4.set;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1, var5);
                    var2 = var3._updateAccessibilityFocusLock;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'disableAccessibilityFocusLock';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun37260: for (var _fun37260_ip = 0;;) switch (_fun37260_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var2 = var4.length;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun37260_ip = 40;
                        continue _fun37260
                    }
                case 17:
                    var5 = _closure1_slot9;
                    var3 = var5.error;
                    var2 = 'No target view nativeIDs to remove.';
                    var2 = var3.bind(var5)(var2);
                case 40:
                    var5 = var1._focusLockedNativeIDGroups;
                    var3 = var5.has;
                    var2 = var4[var0];
                    var2 = var3.bind(var5)(var2);
                    if (var2) {
                        _fun37260_ip = 115;
                        continue _fun37260
                    }
                case 63:
                    var5 = _closure1_slot9;
                    var3 = var5.error;
                    var8 = var4[var0];
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'No target view nativeID ';
                    var2 = ' accessibility focus locked.';
                    var2 = var7.bind(var6)(var8, var2);
                    var2 = var3.bind(var5)(var2);
                case 115:
                    var3 = var1._focusLockedNativeIDGroups;
                    var2 = var3.delete;
                    var0 = var4[var0];
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._updateAccessibilityFocusLock;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/AccessibilityFocusLockManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 3, 478, 4022, 4023, 3971, 2]);