// components_native/common/SortableChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun115517: for (var _fun115517_ip = 0;;) switch (_fun115517_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun115517_ip = 46;
                    continue _fun115517
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun115517_ip = 55;
                    continue _fun115517
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun115517_ip = 345;
                    continue _fun115517
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun115517_ip = 323;
                    continue _fun115517
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun115517_ip = 283;
                    continue _fun115517
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun115517_ip = 270;
                    continue _fun115517
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
                    _fun115517_ip = 163;
                    continue _fun115517
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun115517_ip = 179;
                    continue _fun115517
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun115517_ip = 249;
                    continue _fun115517
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun115517_ip = 249;
                    continue _fun115517
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun115517_ip = 234;
                    continue _fun115517
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun115517_ip = 247;
                    continue _fun115517
                }
            case 234:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun115517_ip = 265;
                continue _fun115517;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun115517_ip = 283;
                continue _fun115517;
            case 270:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun115517_ip = 323;
                    continue _fun115517
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
                    _fun115517_ip = 330;
                    continue _fun115517
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun115518: for (var _fun115518_ip = 0;;) switch (_fun115518_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun115518_ip = 56;
                                continue _fun115518
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
                            _fun115518_ip = 67;
                            continue _fun115518;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun115519: for (var _fun115519_ip = 0;;) switch (_fun115519_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun115519_ip = 23;
                    continue _fun115519
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun115519_ip = 33;
                    continue _fun115519
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
                    _fun115519_ip = 70;
                    continue _fun115519
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun115519_ip = 55;
                    continue _fun115519
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun115520: for (var _fun115520_ip = 0;;) switch (_fun115520_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot22;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun115520_ip = 51;
                    continue _fun115520
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun115520_ip = 92;
                continue _fun115520;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun115520_ip = 71;
                    continue _fun115520
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun115521: for (var _fun115521_ip = 0;;) switch (_fun115521_ip) {
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
                _fun115521_ip = 76;
                continue _fun115521;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var8 = 5;
    var6 = var5[var8];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot7 = var3;
    var6 = 6;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var6 = var9.View;
    var _closure1_slot8 = var6;
    var6 = var9.Animated;
    var _closure1_slot9 = var6;
    var6 = var9.PanResponder;
    var _closure1_slot10 = var6;
    var6 = var9.StyleSheet;
    var9 = var9.SectionList;
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var10 = var9.jsxs;
    var _closure1_slot12 = var10;
    var9 = var9.jsx;
    var _closure1_slot13 = var9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.createElement;
    var _closure1_slot14 = var8;
    var8 = var6.hairlineWidth;
    var6 = 24;
    var6 = var6 + var8;
    var _closure1_slot15 = var6;
    var6 = 8;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.memoize;
    var6 = function(arg0) { // Environment: var1
        var3 = arg0;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = {};
            var0 = 'section';
            var2.type = var0;
            var0 = var1.category;
            var2.data = var0;
            var0 = new Array(1);
            var0[0] = var2;
            var3 = var1.data;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                var0 = {};
                var1 = 'row';
                var0.type = var1;
                var1 = arg0;
                var0.data = var1;
                return var0;
            };
            var5 = var2.bind(var3)(var1);
            var4 = 1;
            var6 = var0;
            var1 = arraySpread(var6, var5, var4);
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = new Array(0);
            var4 = arg0;
            var3 = 0;
            var5 = var0;
            var3 = arraySpread(var5, var4, var3);
            var4 = arg1;
            var5 = var0;
            var1 = arraySpread(var5, var4, var3);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var7 = var3.Component;
    var6 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: Row, environment: var0
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot2;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot21;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var2 = function(arg0) { // Environment: var1
                _fun115530: for (var _fun115530_ip = 0;;) switch (_fun115530_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var3 = var2.onRowActive;
                        var _closure4_slot1 = var3;
                        var2 = var2.rowData;
                        var _closure4_slot2 = var2;
                        var2 = var1._view;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun115530_ip = 71;
                            continue _fun115530
                        }
                    case 53:
                        var1 = var2.measure;
                        var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                            _fun115531: for (var _fun115531_ip = 0;;) switch (_fun115531_ip) {
                                case 0:
                                    var2 = _closure4_slot1;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun115531_ip = 73;
                                        continue _fun115531
                                    }
                                case 13:
                                    var2 = _closure4_slot1;
                                    var1 = {};
                                    var3 = {};
                                    var4 = arg3;
                                    var3.frameHeight = var4;
                                    var4 = arg5;
                                    var3.pageY = var4;
                                    var1.layout = var3;
                                    var3 = _closure4_slot2;
                                    var1.rowData = var3;
                                    var0 = _closure4_slot0;
                                    var0 = var0.nativeEvent;
                                    var1.touch = var0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 73:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.handleLongPress = var2;
            var2 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var0 = arg0;
                var1._view = var0;
                var0 = undefined;
                return var0;
            };
            var0.setViewRef = var2;
            var1 = function(arg0) { // Environment: var1
                _fun115533: for (var _fun115533_ip = 0;;) switch (_fun115533_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var2 = var0._view;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun115533_ip = 33;
                            continue _fun115533
                        }
                    case 19:
                        var1 = var2.measure;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 33:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.measure = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun115534: for (var _fun115534_ip = 0;;) switch (_fun115534_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var1 = var0.rowData;
                    var10 = var0.active;
                    var2 = var0.renderItem;
                    var14 = var0.list;
                    var6 = var0.activeDivider;
                    var9 = var0.isAfter;
                    var11 = var0.style;
                    var13 = var0.sortingEnabled;
                    var0 = var14.state;
                    var0 = var0.active;
                    var8 = null;
                    var5 = var8 != var0;
                    var3 = -1;
                    if (!var5) {
                        _fun115534_ip = 94;
                        continue _fun115534
                    }
                case 83:
                    var0 = var0.rowData;
                    var3 = var0.index;
                case 94:
                    var0 = var1.index;
                    var7 = var3 !== var0;
                    var12 = _closure1_slot7;
                    var5 = var12.cloneElement;
                    var1 = var1.data;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!var13) {
                        _fun115534_ip = 189;
                        continue _fun115534
                    }
                case 133:
                    var13 = {};
                    var15 = {};
                    var16 = var4.handleLongPress;
                    var15.onLongPress = var16;
                    var16 = var14.cancel;
                    var15.onPressOut = var16;
                    var13.sortHandlers = var15;
                    var15 = var4.handleLongPress;
                    var13.onLongPress = var15;
                    var14 = var14.cancel;
                    var13.onPressOut = var14;
                    var1 = var13;
                case 189:
                    var5 = var5.bind(var12)(var2, var1);
                    var2 = _closure1_slot12;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var12 = null;
                    if (!var10) {
                        _fun115534_ip = 229;
                        continue _fun115534
                    }
                case 210:
                    var10 = {};
                    var13 = 0.2;
                    var10.opacity = var13;
                    var12 = var10;
                case 229:
                    var10 = new Array(2);
                    var10[0] = var12;
                    var10[1] = var11;
                    var0.style = var10;
                    var4 = var4.setViewRef;
                    var0.ref = var4;
                    var4 = false;
                    var0.collapsable = var4;
                    var10 = null;
                    if (var9) {
                        _fun115534_ip = 284;
                        continue _fun115534
                    }
                case 267:
                    var10 = null;
                    if (!var7) {
                        _fun115534_ip = 284;
                        continue _fun115534
                    }
                case 272:
                    var4 = var8 != var6;
                    var10 = null;
                    if (!var4) {
                        _fun115534_ip = 284;
                        continue _fun115534
                    }
                case 281:
                    var10 = var6;
                case 284:
                    var4 = new Array(3);
                    var4[0] = var10;
                    var4[1] = var5;
                    var5 = null;
                    if (!var9) {
                        _fun115534_ip = 318;
                        continue _fun115534
                    }
                case 301:
                    var5 = null;
                    if (!var7) {
                        _fun115534_ip = 318;
                        continue _fun115534
                    }
                case 306:
                    var7 = var8 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun115534_ip = 318;
                        continue _fun115534
                    }
                case 315:
                    var5 = var6;
                case 318:
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var7);
    var _closure1_slot17 = var6;
    var7 = var3.Component;
    var6 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: SortRow, environment: var0
            _fun115536: for (var _fun115536_ip = 0;;) switch (_fun115536_ip) {
                case 0:
                    var6 = arg0;
                    var4 = this;
                    var1 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var4, var3);
                    var1 = _closure1_slot21;
                    var0 = new Array(1);
                    var0[0] = var6;
                    var0 = var1.bind(var2)(var4, var3, var0);
                    var1 = var6.list;
                    var1 = var1.state;
                    var1 = var1.active;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun115536_ip = 200;
                        continue _fun115536
                    }
                case 73:
                    var1 = var6.list;
                    var1 = var1.state;
                    var1 = var1.active;
                    var4 = var1.layout;
                    var1 = var6.list;
                    var3 = var1.wrapperLayout;
                    var1 = {};
                    var2 = {
                        'position': 'absolute',
                        'left': 0,
                        'right': 0,
                        'opacity': null,
                        'height': null,
                        'overflow': 'hidden',
                        'backgroundColor': 'transparent'
                    };
                    var6 = var6.activeOpacity;
                    var7 = var5 != var6;
                    var5 = 0.8;
                    if (!var7) {
                        _fun115536_ip = 150;
                        continue _fun115536
                    }
                case 147:
                    var5 = var6;
                case 150:
                    var2.opacity = var5;
                    var5 = var4.frameHeight;
                    var2.height = var5;
                    var4 = var4.pageY;
                    var3 = var3.pageY;
                    var3 = var4 - var3;
                    var2.marginTop = var3;
                    var1.style = var2;
                    var0.state = var1;
                    return var0;
                case 200:
                    var0 = global;
                    var0 = var0.Error;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var0](var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            var4 = this;
            var1 = var4.props;
            var7 = var1.sortRowStyle;
            var5 = var1.list;
            var0 = var1.rowData;
            var6 = var1.renderItem;
            var3 = _closure1_slot13;
            var1 = _closure1_slot9;
            var2 = var1.View;
            var1 = {};
            var4 = var4.state;
            var8 = var4.style;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var7;
            var5 = var5.state;
            var7 = var5.pan;
            var5 = var7.getLayout;
            var5 = var5.bind(var7)();
            var4[2] = var5;
            var1.style = var4;
            var5 = var0.data;
            var0 = undefined;
            var4 = true;
            var4 = var6.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var7);
    var _closure1_slot18 = var6;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: SortableChannels, environment: var5
            var8 = arg0;
            var4 = this;
            var0 = _closure1_slot2;
            var3 = _closure2_slot0;
            var5 = undefined;
            var0 = var0.bind(var5)(var4, var3);
            var2 = _closure1_slot21;
            var0 = new Array(1);
            var0[0] = var8;
            var0 = var2.bind(var5)(var4, var3, var0);
            var _closure3_slot0 = var0;
            var2 = function() { // Environment: var6
                _fun115540: for (var _fun115540_ip = 0;;) switch (_fun115540_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.moved;
                        if (var1) {
                            _fun115540_ip = 89;
                            continue _fun115540
                        }
                    case 16:
                        var1 = _closure3_slot0;
                        var2 = var1.state;
                        var3 = var2.active;
                        var1 = var1.props;
                        var2 = var1.onMoveCancel;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun115540_ip = 60;
                            continue _fun115540
                        }
                    case 50:
                        if (!(var1 != var2)) {
                            _fun115540_ip = 60;
                            continue _fun115540
                        }
                    case 54:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 60:
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {
                            'active': null,
                            'hoveringIndex': 4294967295,
                            'activeIndex': 4294967295
                        };
                        var0 = var1.bind(var2)(var0);
                    case 89:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.cancel = var2;
            var2 = function() { // Environment: var6
                _fun115541: for (var _fun115541_ip = 0;;) switch (_fun115541_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1._view;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun115541_ip = 49;
                            continue _fun115541
                        }
                    case 19:
                        var0 = _closure3_slot0;
                        var2 = var0._view;
                        var1 = var2.measure;
                        var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                            var1 = _closure3_slot0;
                            var0 = {};
                            var2 = arg3;
                            var0.frameHeight = var2;
                            var2 = arg5;
                            var0.pageY = var2;
                            var1.wrapperLayout = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 49:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.handleWrapperLayout = var2;
            var2 = function(arg0) { // Environment: var6
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0.nativeEvent;
                var0 = var0.layout;
                var1.listLayout = var0;
                var0 = undefined;
                return var0;
            };
            var0.handleListLayout = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115544: for (var _fun115544_ip = 0;;) switch (_fun115544_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var0 = var3.props;
                        var1 = var0.onScroll;
                        var0 = var2.nativeEvent;
                        var0 = var0.contentOffset;
                        var0 = var0.y;
                        var3.scrollValue = var0;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun115544_ip = 57;
                            continue _fun115544
                        }
                    case 50:
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 57:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.handleScroll = var2;
            var2 = function(arg0, arg1) { // Environment: var6
                var1 = _closure3_slot0;
                var0 = arg1;
                var1.scrollContainerHeight = var0;
                var0 = undefined;
                return var0;
            };
            var0.handleContentSizeChange = var2;
            var2 = function(arg0) { // Environment: var6
                var1 = _closure3_slot0;
                var0 = arg0;
                var1._list = var0;
                var0 = undefined;
                return var0;
            };
            var0.setListRef = var2;
            var2 = function() { // Environment: var6
                _fun115547: for (var _fun115547_ip = 0;;) switch (_fun115547_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var8 = var1.active;
                        var3 = null;
                        if (!(var3 != var8)) {
                            _fun115547_ip = 380;
                            continue _fun115547
                        }
                    case 27:
                        var1 = _closure3_slot0;
                        var1 = var1.moveY;
                        if (!(var3 == var1)) {
                            _fun115547_ip = 71;
                            continue _fun115547
                        }
                    case 41:
                        var1 = global;
                        var4 = var1.requestAnimationFrame;
                        var1 = _closure3_slot0;
                        var2 = var1.scrollAnimation;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        _fun115547_ip = 380;
                        continue _fun115547;
                    case 71:
                        var6 = _closure3_slot0;
                        var1 = var6.wrapperLayout;
                        var5 = var1.pageY;
                        var1 = global;
                        var7 = var1.Math;
                        var4 = var7.max;
                        var2 = var6.moveY;
                        var2 = var2 - var5;
                        var5 = 0;
                        var7 = var4.bind(var7)(var2, var5);
                        var2 = var6.listLayout;
                        var2 = var2.height;
                        var4 = 100;
                        var2 = var2 - var4;
                        var10 = var6.scrollContainerHeight;
                        var9 = var6.listLayout;
                        var9 = var9.height;
                        var9 = var10 - var9;
                        var8 = var8.layout;
                        var8 = var8.frameHeight;
                        var8 = var9 + var8;
                        var6 = var6.scrollValue;
                        if (!(var7 < var4)) {
                            _fun115547_ip = 187;
                            continue _fun115547
                        }
                    case 183:
                        if (!(!(var6 > var5))) {
                            _fun115547_ip = 258;
                            continue _fun115547
                        }
                    case 187:
                        var9 = var7 > var2;
                        var2 = null;
                        if (!var9) {
                            _fun115547_ip = 289;
                            continue _fun115547
                        }
                    case 196:
                        var9 = var6 < var8;
                        var2 = null;
                        if (!var9) {
                            _fun115547_ip = 289;
                            continue _fun115547
                        }
                    case 205:
                        var9 = _closure3_slot0;
                        var9 = var9.listLayout;
                        var9 = var9.height;
                        var9 = var9 - var7;
                        var11 = var9 / var4;
                        var10 = 1500;
                        var9 = 1;
                        var9 = var9 - var11;
                        var9 = var10 * var9;
                        var2 = var6 + var9;
                        if (!(var2 > var8)) {
                            _fun115547_ip = 289;
                            continue _fun115547
                        }
                    case 253:
                        var2 = var8;
                        _fun115547_ip = 289;
                        continue _fun115547;
                    case 258:
                        var8 = var7 / var4;
                        var7 = 1500;
                        var4 = 1;
                        var4 = var4 - var8;
                        var4 = var7 * var4;
                        var2 = var6 - var4;
                        if (!(var2 < var5)) {
                            _fun115547_ip = 289;
                            continue _fun115547
                        }
                    case 287:
                        var2 = 0;
                    case 289:
                        if (!(var3 != var2)) {
                            _fun115547_ip = 330;
                            continue _fun115547
                        }
                    case 293:
                        var4 = _closure3_slot0;
                        var4.scrollValue = var2;
                        var3 = var4.scrollTo;
                        var2 = {};
                        var6 = var4.scrollValue;
                        var2.y = var6;
                        var2.x = var5;
                        var2 = var3.bind(var4)(var2);
                    case 330:
                        var2 = _closure3_slot0;
                        var2 = var2.moved;
                        if (!var2) {
                            _fun115547_ip = 357;
                            continue _fun115547
                        }
                    case 343:
                        var3 = _closure3_slot0;
                        var2 = var3.checkTargetElement;
                        var2 = var2.bind(var3)();
                    case 357:
                        var2 = var1.requestAnimationFrame;
                        var0 = _closure3_slot0;
                        var1 = var0.scrollAnimation;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 380:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.scrollAnimation = var2;
            var2 = function(arg0) { // Environment: var6
                var1 = _closure3_slot0;
                var0 = arg0;
                var1._view = var0;
                var0 = undefined;
                return var0;
            };
            var0.setWrapperRef = var2;
            var2 = function() { // Environment: var6
                _fun115549: for (var _fun115549_ip = 0;;) switch (_fun115549_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var1 = var0.state;
                        var5 = var1.hoveringIndex;
                        var1 = var0.props;
                        var2 = var1.onHoverChange;
                        var14 = var0.scrollValue;
                        var3 = var0.moveY;
                        var1 = var0.wrapperLayout;
                        var1 = var1.pageY;
                        var13 = var3 - var1;
                        var0 = var0.props;
                        var1 = var0.order;
                        var0 = var14 + var13;
                        var6 = 0;
                        var0 = var0 + var6;
                        var3 = null;
                        var10 = 0;
                        var9 = 0;
                        var8 = false;
                        var7 = 0;
                        if (!(var7 < var0)) {
                            _fun115549_ip = 151;
                            continue _fun115549
                        }
                    case 92:
                        var15 = var1[var9];
                        var0 = _closure3_slot0;
                        var0 = var0.layoutMap;
                        var0 = var0[var15];
                        var15 = var3 == var0;
                        var7 = var9;
                        var8 = true;
                        if (var15) {
                            _fun115549_ip = 151;
                            continue _fun115549
                        }
                    case 122:
                        var0 = var0.height;
                        var10 = var10 + var0;
                        var9 = var9 + 1;
                        var0 = var14 + var13;
                        var0 = var0 + var6;
                        var7 = var9;
                        var8 = false;
                        if (var10 < var0) {
                            _fun115549_ip = 92;
                            continue _fun115549
                        }
                    case 151:
                        var0 = var7;
                        if (var8) {
                            _fun115549_ip = 160;
                            continue _fun115549
                        }
                    case 157:
                        var0 = var7 - 1;
                    case 160:
                        var5 = var0 !== var5;
                        if (!var5) {
                            _fun115549_ip = 171;
                            continue _fun115549
                        }
                    case 167:
                        var5 = var0 >= var6;
                    case 171:
                        if (!var5) {
                            _fun115549_ip = 211;
                            continue _fun115549
                        }
                    case 174:
                        var6 = _closure3_slot0;
                        var5 = var6.setState;
                        var4 = {};
                        var4.hoveringIndex = var0;
                        var4 = var5.bind(var6)(var4);
                        if (!(var3 != var2)) {
                            _fun115549_ip = 211;
                            continue _fun115549
                        }
                    case 200:
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 211:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.checkTargetElement = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115550: for (var _fun115550_ip = 0;;) switch (_fun115550_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var3 = var1.props;
                        var1 = var3.onRowActive;
                        var3 = var3.disableSorting;
                        if (var3) {
                            _fun115550_ip = 169;
                            continue _fun115550
                        }
                    case 33:
                        var5 = _closure3_slot0;
                        var0 = var5.state;
                        var4 = var0.pan;
                        var3 = var4.setValue;
                        var0 = {
                            'x': 0,
                            'y': 0
                        };
                        var0 = var3.bind(var4)(var0);
                        var0 = var2.layout;
                        var3 = var0.pageY;
                        var0 = var2.layout;
                        var4 = var0.frameHeight;
                        var0 = 2;
                        var0 = var4 / var0;
                        var0 = var3 + var0;
                        var5.moveY = var0;
                        var0 = var2.rowData;
                        var0 = var0.index;
                        var4 = var5.setState;
                        var3 = {};
                        var3.active = var2;
                        var3.activeIndex = var0;
                        var3.hoveringIndex = var0;
                        var0 = var5.scrollAnimation;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun115550_ip = 169;
                            continue _fun115550
                        }
                    case 162:
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 169:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.handleRowActive = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115551: for (var _fun115551_ip = 0;;) switch (_fun115551_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var1 = var0.state;
                        var2 = var1.active;
                        var0 = var0.props;
                        var6 = var0.renderActiveDivider;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun115551_ip = 137;
                            continue _fun115551
                        }
                    case 35:
                        var1 = var2.layout;
                        var5 = var1.frameHeight;
                        if (!(var0 == var6)) {
                            _fun115551_ip = 84;
                            continue _fun115551
                        }
                    case 51:
                        var8 = _closure1_slot13;
                        var7 = _closure1_slot8;
                        var4 = {};
                        var1 = {};
                        var1.height = var5;
                        var4.style = var1;
                        var1 = undefined;
                        var1 = var8.bind(var1)(var7, var4);
                        _fun115551_ip = 135;
                        continue _fun115551;
                    case 84:
                        var7 = var0 != var2;
                        var4 = null;
                        if (!var7) {
                            _fun115551_ip = 123;
                            continue _fun115551
                        }
                    case 93:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.order;
                        var2 = var2.rowData;
                        var2 = var2.index;
                        var4 = var3[var2];
                    case 123:
                        var3 = undefined;
                        var2 = arg0;
                        var1 = var6.bind(var3)(var5, var2, var4);
                    case 135:
                        return var1;
                    case 137:
                        return var0;
                }
            };
            var0.renderActiveDivider = var2;
            var2 = function(arg0, arg1) { // Environment: var6
                _fun115552: for (var _fun115552_ip = 0;;) switch (_fun115552_ip) {
                    case 0:
                        var6 = arg0;
                        var11 = arg1;
                        var1 = _closure3_slot0;
                        var2 = var1.state;
                        var9 = var2.active;
                        var4 = var2.hoveringIndex;
                        var0 = var2.activeIndex;
                        var8 = var2.panResponder;
                        var1 = var1.props;
                        var3 = var1.order;
                        var2 = var3.indexOf;
                        var1 = var6.section;
                        var1 = var1.category;
                        var1 = var1.id;
                        var2 = var2.bind(var3)(var1);
                        if (var11) {
                            _fun115552_ip = 92;
                            continue _fun115552
                        }
                    case 86:
                        var3 = _closure1_slot17;
                        _fun115552_ip = 96;
                        continue _fun115552;
                    case 92:
                        var3 = _closure1_slot18;
                    case 96:
                        var10 = !var11;
                        if (!var10) {
                            _fun115552_ip = 137;
                            continue _fun115552
                        }
                    case 102:
                        var12 = null;
                        var14 = var12 == var9;
                        var7 = undefined;
                        if (var14) {
                            _fun115552_ip = 133;
                            continue _fun115552
                        }
                    case 113:
                        var9 = var9.rowData;
                        var12 = var12 == var9;
                        var7 = undefined;
                        if (var12) {
                            _fun115552_ip = 133;
                            continue _fun115552
                        }
                    case 128:
                        var7 = var9.index;
                    case 133:
                        var10 = var7 === var2;
                    case 137:
                        var7 = _closure3_slot0;
                        var7 = var7.props;
                        var7 = var7.order;
                        var7 = var7[var4];
                        var13 = null;
                        var12 = var13 != var7;
                        var9 = '';
                        if (!var12) {
                            _fun115552_ip = 172;
                            continue _fun115552
                        }
                    case 169:
                        var9 = var7;
                    case 172:
                        var7 = {};
                        var7.data = var6;
                        var7.index = var2;
                        var2 = false;
                        var7.isRow = var2;
                        var12 = _closure3_slot0;
                        var14 = var12.getItemLayoutProps;
                        var2 = var7.index;
                        var2 = var14.bind(var12)(var2);
                        var2 = _closure1_slot14;
                        var1 = {};
                        var15 = var12.props;
                        var16 = var1;
                        var14 = copyDataProperties(var16, var15);
                        var12 = var12.props;
                        var14 = var12.renderSectionHeader;
                        var12 = var14.bind;
                        var14 = var12.bind(var14)(var13, var6);
                        var12 = 'renderItem';
                        var1[var12] = var14;
                        var12 = var6.section;
                        var12 = var12.key;
                        var13 = null;
                        if (!(var9 === var12)) {
                            _fun115552_ip = 289;
                            continue _fun115552
                        }
                    case 274:
                        var14 = _closure3_slot0;
                        var12 = var14.renderActiveDivider;
                        var13 = var12.bind(var14)(var9);
                    case 289:
                        var12 = 'activeDivider';
                        var1[var12] = var13;
                        var12 = var6.section;
                        var13 = var12.key;
                        var12 = 'key';
                        var1[var12] = var13;
                        if (var11) {
                            _fun115552_ip = 325;
                            continue _fun115552
                        }
                    case 322:
                        var11 = var10;
                    case 325:
                        var10 = 'active';
                        var1[var10] = var11;
                        var5 = _closure3_slot0;
                        var10 = 'list';
                        var1[var10] = var5;
                        var10 = var5.props;
                        var11 = var10.sortingEnabled;
                        var10 = 'sortingEnabled';
                        var1[var10] = var11;
                        var6 = var6.section;
                        var6 = var6.key;
                        var9 = var9 === var6;
                        var6 = 'hovering';
                        var1[var6] = var9;
                        var6 = 'panResponder';
                        var1[var6] = var8;
                        var6 = 'rowData';
                        var1[var6] = var7;
                        var6 = var5.handleRowActive;
                        var5 = 'onRowActive';
                        var1[var5] = var6;
                        var4 = var4 > var0;
                        var0 = 'isAfter';
                        var1[var0] = var4;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                }
            };
            var0.renderSectionHeader = var2;
            var2 = function(arg0, arg1) { // Environment: var6
                _fun115553: for (var _fun115553_ip = 0;;) switch (_fun115553_ip) {
                    case 0:
                        var6 = arg0;
                        var11 = arg1;
                        var0 = _closure3_slot0;
                        var1 = var0.state;
                        var2 = var1.active;
                        var4 = var1.hoveringIndex;
                        var0 = var1.activeIndex;
                        var8 = var1.panResponder;
                        if (var11) {
                            _fun115553_ip = 54;
                            continue _fun115553
                        }
                    case 48:
                        var3 = _closure1_slot17;
                        _fun115553_ip = 58;
                        continue _fun115553;
                    case 54:
                        var3 = _closure1_slot18;
                    case 58:
                        var10 = !var11;
                        if (!var10) {
                            _fun115553_ip = 109;
                            continue _fun115553
                        }
                    case 64:
                        var9 = null;
                        var13 = var9 == var2;
                        var7 = undefined;
                        if (var13) {
                            _fun115553_ip = 95;
                            continue _fun115553
                        }
                    case 75:
                        var2 = var2.rowData;
                        var9 = var9 == var2;
                        var7 = undefined;
                        if (var9) {
                            _fun115553_ip = 95;
                            continue _fun115553
                        }
                    case 90:
                        var7 = var2.index;
                    case 95:
                        var2 = var6.item;
                        var2 = var2.index;
                        var10 = var7 === var2;
                    case 109:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.order;
                        var2 = var2[var4];
                        var13 = null;
                        var7 = var13 != var2;
                        var9 = '';
                        if (!var7) {
                            _fun115553_ip = 144;
                            continue _fun115553
                        }
                    case 141:
                        var9 = var2;
                    case 144:
                        var7 = {};
                        var7.data = var6;
                        var2 = var6.item;
                        var2 = var2.index;
                        var7.index = var2;
                        var2 = true;
                        var7.isRow = var2;
                        var12 = _closure3_slot0;
                        var14 = var12.getItemLayoutProps;
                        var2 = var7.index;
                        var2 = var14.bind(var12)(var2);
                        var2 = _closure1_slot14;
                        var1 = {};
                        var15 = var12.props;
                        var16 = var1;
                        var12 = copyDataProperties(var16, var15);
                        var12 = var6.item;
                        var12 = var12.key;
                        var13 = null;
                        if (!(var9 === var12)) {
                            _fun115553_ip = 240;
                            continue _fun115553
                        }
                    case 225:
                        var14 = _closure3_slot0;
                        var12 = var14.renderActiveDivider;
                        var13 = var12.bind(var14)(var9);
                    case 240:
                        var12 = 'activeDivider';
                        var1[var12] = var13;
                        var12 = var6.item;
                        var13 = var12.key;
                        var12 = 'key';
                        var1[var12] = var13;
                        if (var11) {
                            _fun115553_ip = 276;
                            continue _fun115553
                        }
                    case 273:
                        var11 = var10;
                    case 276:
                        var10 = 'active';
                        var1[var10] = var11;
                        var5 = _closure3_slot0;
                        var10 = 'list';
                        var1[var10] = var5;
                        var10 = var5.props;
                        var11 = var10.sortingEnabled;
                        var10 = 'sortingEnabled';
                        var1[var10] = var11;
                        var6 = var6.item;
                        var6 = var6.key;
                        var9 = var9 === var6;
                        var6 = 'hovering';
                        var1[var6] = var9;
                        var6 = 'panResponder';
                        var1[var6] = var8;
                        var6 = 'rowData';
                        var1[var6] = var7;
                        var6 = var5.handleRowActive;
                        var5 = 'onRowActive';
                        var1[var5] = var6;
                        var4 = var4 > var0;
                        var0 = 'isAfter';
                        var1[var0] = var4;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                }
            };
            var0.renderItem = var2;
            var2 = function(arg0, arg1) { // Environment: var6
                var2 = _closure3_slot0;
                var1 = var2.getItemLayoutProps;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.getItemLayout = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115555: for (var _fun115555_ip = 0;;) switch (_fun115555_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var1 = var0.props;
                        var0 = var1.sortingEnabled;
                        var2 = var1.fontScale;
                        var1 = 20;
                        if (!var0) {
                            _fun115555_ip = 32;
                            continue _fun115555
                        }
                    case 30:
                        var1 = 0;
                    case 32:
                        var0 = global;
                        var4 = var0.Math;
                        var3 = var4.max;
                        var0 = 16;
                        var2 = var0 * var2;
                        var0 = 44;
                        var2 = var0 + var2;
                        var0 = 60;
                        var0 = var3.bind(var4)(var2, var0);
                        var2 = arg0;
                        var2 = var2.data;
                        var3 = var2.id;
                        var2 = 'null';
                        if (!(var2 === var3)) {
                            _fun115555_ip = 92;
                            continue _fun115555
                        }
                    case 89:
                        var0 = var1;
                    case 92:
                        return var0;
                }
            };
            var0.getSectionHeight = var2;
            var2 = function() { // Environment: var6
                var0 = _closure3_slot0;
                var0 = var0.props;
                var4 = var0.fontScale;
                var0 = global;
                var3 = var0.Math;
                var2 = var3.max;
                var1 = _closure1_slot15;
                var0 = 20;
                var0 = var0 * var4;
                var1 = var1 + var0;
                var0 = 48;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0.getRowHeight = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115557: for (var _fun115557_ip = 0;;) switch (_fun115557_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot19;
                        var4 = _closure1_slot16;
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var0 = var0.sections;
                        var11 = undefined;
                        var0 = var4.bind(var11)(var0);
                        var10 = var2.bind(var11)(var0);
                        var0 = var10.bind(var11)();
                        var6 = var0.done;
                        var4 = undefined;
                        var2 = undefined;
                        var5 = 0;
                        if (var6) {
                            _fun115557_ip = 231;
                            continue _fun115557
                        }
                    case 65:
                        var13 = var0.value;
                        var0 = var13.type;
                        var9 = 'section';
                        if (!(var9 !== var0)) {
                            _fun115557_ip = 99;
                            continue _fun115557
                        }
                    case 83:
                        var6 = _closure3_slot0;
                        var0 = var6.getRowHeight;
                        var14 = var0.bind(var6)();
                        _fun115557_ip = 114;
                        continue _fun115557;
                    case 99:
                        var6 = _closure3_slot0;
                        var0 = var6.getSectionHeight;
                        var14 = var0.bind(var6)(var13);
                    case 114:
                        var8 = var14;
                        var7 = var13;
                        var6 = 0;
                        var0 = 0;
                        var4 = var8;
                        var2 = var7;
                        var5 = 0;
                        if (!(var5 !== var3)) {
                            _fun115557_ip = 231;
                            continue _fun115557
                        }
                    case 136:
                        var12 = var6 + var8;
                        var0 = var0 + 1;
                        var13 = var10.bind(var11)();
                        var14 = var13.done;
                        var4 = var8;
                        var2 = var7;
                        var5 = var12;
                        if (var14) {
                            _fun115557_ip = 231;
                            continue _fun115557
                        }
                    case 164:
                        var13 = var13.value;
                        var14 = var13.type;
                        if (!(var9 !== var14)) {
                            _fun115557_ip = 194;
                            continue _fun115557
                        }
                    case 178:
                        var15 = _closure3_slot0;
                        var14 = var15.getRowHeight;
                        var14 = var14.bind(var15)();
                        _fun115557_ip = 209;
                        continue _fun115557;
                    case 194:
                        var16 = _closure3_slot0;
                        var15 = var16.getSectionHeight;
                        var14 = var15.bind(var16)(var13);
                    case 209:
                        var8 = var14;
                        var7 = var13;
                        var6 = var12;
                        var4 = var8;
                        var2 = var7;
                        var5 = var6;
                        if (var0 !== var3) {
                            _fun115557_ip = 136;
                            continue _fun115557
                        }
                    case 231:
                        var0 = {};
                        var0.length = var4;
                        var0.offset = var5;
                        var0.index = var3;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun115557_ip = 349;
                            continue _fun115557
                        }
                    case 252:
                        var6 = var2.data;
                        var6 = var6.id;
                        if (!(var3 == var6)) {
                            _fun115557_ip = 302;
                            continue _fun115557
                        }
                    case 266:
                        var6 = var2.data;
                        var6 = var6.channel;
                        var6 = var3 != var6;
                        var3 = null;
                        if (!var6) {
                            _fun115557_ip = 300;
                            continue _fun115557
                        }
                    case 285:
                        var6 = var2.data;
                        var6 = var6.channel;
                        var3 = var6.id;
                    case 300:
                        _fun115557_ip = 312;
                        continue _fun115557;
                    case 302:
                        var2 = var2.data;
                        var3 = var2.id;
                    case 312:
                        var6 = 'string';
                        var2 = typeof var3;
                        if (!(var6 === var2)) {
                            _fun115557_ip = 347;
                            continue _fun115557
                        }
                    case 323:
                        var1 = _closure3_slot0;
                        var2 = var1.layoutMap;
                        var1 = {};
                        var1.y = var5;
                        var1.height = var4;
                        var2[var3] = var1;
                    case 347:
                        return var0;
                    case 349:
                        return var0;
                }
            };
            var0.getItemLayoutProps = var2;
            var2 = function(arg0) { // Environment: var6
                _fun115558: for (var _fun115558_ip = 0;;) switch (_fun115558_ip) {
                    case 0:
                        var7 = 0;
                        var3 = copyRestArgs(var7);
                        var1 = _closure3_slot0;
                        var0 = var1.getScrollResponder;
                        var2 = var0.bind(var1)();
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun115558_ip = 64;
                            continue _fun115558
                        }
                    case 29:
                        var1 = var2.scrollTo;
                        var0 = new Array(0);
                        var7 = var0;
                        var6 = var3;
                        var5 = 0;
                        var3 = arraySpread(var7, var6, var5);
                        var7 = var1;
                        var6 = var0;
                        var5 = var2;
                        var0 = apply(var7, var6, var5);
                    case 64:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.scrollTo = var2;
            var2 = function() { // Environment: var6
                _fun115559: for (var _fun115559_ip = 0;;) switch (_fun115559_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var3 = var0._list;
                        var0 = null;
                        var2 = var0 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun115559_ip = 49;
                            continue _fun115559
                        }
                    case 24:
                        var2 = var3.getScrollResponder;
                        var2 = var0 == var2;
                        var1 = undefined;
                        if (var2) {
                            _fun115559_ip = 49;
                            continue _fun115559
                        }
                    case 39:
                        var2 = var3.getScrollResponder;
                        var1 = var2.bind(var3)();
                    case 49:
                        var2 = var0 != var1;
                        var0 = null;
                        if (!var2) {
                            _fun115559_ip = 61;
                            continue _fun115559
                        }
                    case 58:
                        var0 = var1;
                    case 61:
                        return var0;
                }
            };
            var0.getScrollResponder = var2;
            var7 = {
                'x': 0,
                'y': 0
            };
            var4 = 0;
            var2 = _closure1_slot9;
            var2 = var2.ValueXY;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var12 = var3;
            var11 = var7;
            var2 = new var12[var2](var11, var10);
            var2 = var2 instanceof Object ? var2 : var3;
            var3 = var0.createPanResponder;
            var3 = var3.bind(var0)(var8, var7, var2);
            var7 = var2.addListener;
            var6 = function(arg0) { // Environment: var6
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0.y;
                var1.panY = var0;
                return var0;
            };
            var6 = var7.bind(var2)(var6);
            var0.listener = var6;
            var6 = false;
            var0.moved = var6;
            var0.moveY = var4;
            var0.dy = var4;
            var6 = 'down';
            var0.direction = var6;
            var0.scrollValue = var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.getWindowDimensions;
            var1 = var1.bind(var4)();
            var4 = var1.height;
            var1 = 1.2;
            var1 = var1 * var4;
            var0.scrollContainerHeight = var1;
            var1 = {
                'active': null,
                'activeIndex': 4294967295,
                'hoveringIndex': 4294967295
            };
            var1.panResponder = var3;
            var1.pan = var2;
            var0.state = var1;
            var1 = {};
            var0.layoutMap = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentWillUnmount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.state;
            var2 = var1.pan;
            var1 = var2.removeListener;
            var0 = var0.listener;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'createPanResponder';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            var2 = arg2;
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = arg0;
            var _closure3_slot1 = var0;
            var0 = arg1;
            var _closure3_slot2 = var0;
            var5 = _closure1_slot9;
            var4 = var5.event;
            var1 = {};
            var6 = var2.x;
            var1.dx = var6;
            var2 = var2.y;
            var1.dy = var2;
            var2 = [null];
            var2[1] = var1;
            var1 = {};
            var6 = false;
            var1.useNativeDriver = var6;
            var1 = var4.bind(var5)(var2, var1);
            var _closure3_slot3 = var1;
            var2 = _closure1_slot10;
            var1 = var2.create;
            var0 = {};
            var4 = function() { // Original name: onStartShouldSetPanResponder, environment: var3
                var0 = true;
                return var0;
            };
            var0.onStartShouldSetPanResponder = var4;
            var4 = function(arg0, arg1) { // Original name: onMoveShouldSetPanResponderCapture, environment: var3
                _fun115564: for (var _fun115564_ip = 0;;) switch (_fun115564_ip) {
                    case 0:
                        var0 = arg1;
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.abs;
                        var1 = var0.vy;
                        var1 = var3.bind(var4)(var1);
                        var3 = var2.Math;
                        var2 = var3.abs;
                        var0 = var0.vx;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 > var0;
                        if (!var0) {
                            _fun115564_ip = 82;
                            continue _fun115564
                        }
                    case 58:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var2 = var1.active;
                        var1 = null;
                        var0 = var1 != var2;
                    case 82:
                        return var0;
                }
            };
            var0.onMoveShouldSetPanResponderCapture = var4;
            var4 = function(arg0, arg1) { // Original name: onPanResponderMove, environment: var3
                _fun115565: for (var _fun115565_ip = 0;;) switch (_fun115565_ip) {
                    case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var1 = var1.active;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun115565_ip = 151;
                            continue _fun115565
                        }
                    case 30:
                        var2 = 0;
                        var3.dx = var2;
                        var1 = var1.layout;
                        var2 = _closure3_slot0;
                        var4 = var1.pageY;
                        var5 = var1.frameHeight;
                        var1 = 2;
                        var1 = var5 / var1;
                        var4 = var4 + var1;
                        var1 = var3.dy;
                        var1 = var4 + var1;
                        var2.moveY = var1;
                        var4 = var3.dy;
                        var1 = var2.dy;
                        var4 = var4 >= var1;
                        var1 = 'up';
                        if (!var4) {
                            _fun115565_ip = 114;
                            continue _fun115565
                        }
                    case 110:
                        var1 = 'down';
                    case 114:
                        var2.direction = var1;
                        var2 = _closure3_slot0;
                        var1 = var3.dy;
                        var2.dy = var1;
                        var2 = _closure3_slot3;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0, var3);
                    case 151:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPanResponderMove = var4;
            var4 = function() { // Original name: onPanResponderGrant, environment: var3
                _fun115566: for (var _fun115566_ip = 0;;) switch (_fun115566_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.state;
                        var4 = var0.active;
                        var2 = var0.pan;
                        var0 = _closure3_slot1;
                        var3 = var0.onMoveStart;
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun115566_ip = 106;
                            continue _fun115566
                        }
                    case 40:
                        var5 = _closure3_slot0;
                        var4 = true;
                        var5.moved = var4;
                        var4 = 0;
                        var5.dy = var4;
                        var4 = 'down';
                        var5.direction = var4;
                        if (!(var0 != var3)) {
                            _fun115566_ip = 80;
                            continue _fun115566
                        }
                    case 74:
                        var0 = undefined;
                        var0 = var3.bind(var0)();
                    case 80:
                        var0 = var2.setOffset;
                        var1 = _closure3_slot2;
                        var0 = var0.bind(var2)(var1);
                        var0 = var2.setValue;
                        var0 = var0.bind(var2)(var1);
                    case 106:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPanResponderGrant = var4;
            var4 = function() { // Original name: onPanResponderTerminate, environment: var3
                _fun115567: for (var _fun115567_ip = 0;;) switch (_fun115567_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onHoverChange;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun115567_ip = 35;
                            continue _fun115567
                        }
                    case 24:
                        var2 = undefined;
                        var1 = '-1';
                        var1 = var3.bind(var2)(var1);
                    case 35:
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {
                            'active': null,
                            'hoveringIndex': 4294967295,
                            'activeIndex': 4294967295
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPanResponderTerminate = var4;
            var3 = function() { // Original name: onPanResponderRelease, environment: var3
                _fun115568: for (var _fun115568_ip = 0;;) switch (_fun115568_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var2 = var4.state;
                        var1 = var2.active;
                        var2 = var2.hoveringIndex;
                        var3 = var4.props;
                        var7 = var3.onRowMoved;
                        var3 = false;
                        var4.moved = var3;
                        var3 = _closure3_slot1;
                        var3 = var3.onMoveEnd;
                        var6 = null;
                        if (!(var6 != var3)) {
                            _fun115568_ip = 73;
                            continue _fun115568
                        }
                    case 59:
                        var4 = _closure3_slot1;
                        var3 = var4.onMoveEnd;
                        var3 = var3.bind(var4)();
                    case 73:
                        if (!(var6 != var1)) {
                            _fun115568_ip = 342;
                            continue _fun115568
                        }
                    case 80:
                        var3 = var1.layout;
                        var4 = var3.frameHeight;
                        var3 = var1.rowData;
                        var9 = var3.index;
                        var5 = -1;
                        var8 = var2;
                        if (!(var5 === var8)) {
                            _fun115568_ip = 119;
                            continue _fun115568
                        }
                    case 116:
                        var8 = var9;
                    case 119:
                        if (!(var8 !== var9)) {
                            _fun115568_ip = 311;
                            continue _fun115568
                        }
                    case 126:
                        var3 = {};
                        var1 = var1.rowData;
                        var3.row = var1;
                        var1 = 1;
                        var9 = var9 - var1;
                        var3.from = var9;
                        var1 = var8 - var1;
                        var3.to = var1;
                        if (!(var6 != var7)) {
                            _fun115568_ip = 169;
                            continue _fun115568
                        }
                    case 162:
                        var1 = undefined;
                        var1 = var7.bind(var1)(var3);
                    case 169:
                        var1 = _closure3_slot0;
                        var7 = var1.setState;
                        var3 = {
                            'active': null,
                            'hoveringIndex': 4294967295,
                            'activeIndex': 4294967295
                        };
                        var3 = var7.bind(var1)(var3);
                        var3 = global;
                        var8 = var3.Math;
                        var7 = var8.max;
                        var9 = var1.scrollContainerHeight;
                        var3 = var1.listLayout;
                        var3 = var3.height;
                        var3 = var9 - var3;
                        var4 = var3 + var4;
                        var3 = 0;
                        var8 = var7.bind(var8)(var3, var4);
                        var1 = var1.scrollValue;
                        if (!(var1 > var8)) {
                            _fun115568_ip = 275;
                            continue _fun115568
                        }
                    case 254:
                        var7 = _closure3_slot0;
                        var4 = var7.scrollTo;
                        var1 = {};
                        var1.y = var8;
                        var1 = var4.bind(var7)(var1);
                    case 275:
                        var1 = _closure3_slot0;
                        var4 = var1.state;
                        var4.active = var6;
                        var4 = var1.state;
                        var4.hoveringIndex = var5;
                        var1.moveY = var3;
                        var1 = undefined;
                        return var1;
                    case 311:
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var1 = {
                            'active': null,
                            'hoveringIndex': 4294967295,
                            'activeIndex': 4294967295
                        };
                        var1 = var3.bind(var4)(var1);
                        return var1;
                    case 342:
                        var1 = 0;
                        if (!(var2 >= var1)) {
                            _fun115568_ip = 376;
                            continue _fun115568
                        }
                    case 348:
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = -1;
                        var2.hoveringIndex = var5;
                        var2 = var3.bind(var4)(var2);
                    case 376:
                        var0 = _closure3_slot0;
                        var0.moveY = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPanResponderRelease = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'renderActive';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun115569: for (var _fun115569_ip = 0;;) switch (_fun115569_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.state;
                    var0 = var0.active;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun115569_ip = 24;
                        continue _fun115569
                    }
                case 20:
                    var1 = undefined;
                    return var1;
                case 24:
                    var0 = var0.rowData;
                    var3 = var0.data;
                    var0 = var0.isRow;
                    if (var0) {
                        _fun115569_ip = 60;
                        continue _fun115569
                    }
                case 44:
                    var1 = var4.renderSectionHeader;
                    var0 = true;
                    var0 = var1.bind(var4)(var3, var0);
                    _fun115569_ip = 74;
                    continue _fun115569;
                case 60:
                    var2 = var4.renderItem;
                    var1 = true;
                    var0 = var2.bind(var4)(var3, var1);
                case 74:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun115570: for (var _fun115570_ip = 0;;) switch (_fun115570_ip) {
                case 0:
                    var6 = this;
                    var0 = var6.state;
                    var8 = var0.active;
                    var0 = var0.panResponder;
                    var1 = var6.props;
                    var9 = var1.scrollEnabled;
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var5 = {};
                    var7 = 1;
                    var5.flex = var7;
                    var1.style = var5;
                    var5 = var6.handleWrapperLayout;
                    var1.onLayout = var5;
                    var5 = var6.setWrapperRef;
                    var1.ref = var5;
                    var7 = _closure1_slot13;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var10 = true;
                    var4.enableEmptySections = var10;
                    var11 = var6.props;
                    var12 = var4;
                    var10 = copyDataProperties(var12, var11);
                    var11 = var0.panHandlers;
                    var12 = var4;
                    var0 = copyDataProperties(var12, var11);
                    var10 = var6.setListRef;
                    var0 = 'ref';
                    var4[var0] = var10;
                    var10 = var6.handleScroll;
                    var0 = 'onScroll';
                    var4[var0] = var10;
                    var10 = var6.handleContentSizeChange;
                    var0 = 'onContentSizeChange';
                    var4[var0] = var10;
                    var10 = var6.handleListLayout;
                    var0 = 'onLayout';
                    var4[var0] = var10;
                    var0 = null;
                    var8 = var0 == var8;
                    if (!var8) {
                        _fun115570_ip = 197;
                        continue _fun115570
                    }
                case 191:
                    var0 = false;
                    var8 = var0 !== var9;
                case 197:
                    var0 = 'scrollEnabled';
                    var4[var0] = var8;
                    var8 = var6.renderItem;
                    var0 = 'renderItem';
                    var4[var0] = var8;
                    var8 = var6.renderSectionHeader;
                    var0 = 'renderSectionHeader';
                    var4[var0] = var8;
                    var8 = false;
                    var0 = 'stickySectionHeadersEnabled';
                    var4[var0] = var8;
                    var8 = 20;
                    var0 = 'initialNumToRender';
                    var4[var0] = var8;
                    var8 = function(arg0) { // Original name: keyExtractor, environment: var0
                        var0 = arg0;
                        var0 = var0.key;
                        return var0;
                    };
                    var0 = 'keyExtractor';
                    var4[var0] = var8;
                    var8 = var6.getItemLayout;
                    var0 = 'getItemLayout';
                    var4[var0] = var8;
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = var6.renderActive;
                    var5 = var5.bind(var6)();
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SortableChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 22, 1464, 2]);