// components_native/common/SortableListView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun102985: for (var _fun102985_ip = 0;;) switch (_fun102985_ip) {
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
                _fun102985_ip = 76;
                continue _fun102985;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot7 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot8 = var7;
    var7 = var6.Animated;
    var _closure1_slot9 = var7;
    var8 = var6.Dimensions;
    var7 = var6.PanResponder;
    var _closure1_slot10 = var7;
    var6 = var6.FlatList;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot12 = var7;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var7 = var8.get;
    var6 = 'window';
    var6 = var7.bind(var8)(var6);
    var6 = var6.height;
    var _closure1_slot14 = var6;
    var6 = {
        'x': 0,
        'y': 0
    };
    var _closure1_slot15 = var6;
    var7 = var3.memo;
    var6 = function(arg0) { // Environment: var1
        _fun102988: for (var _fun102988_ip = 0;;) switch (_fun102988_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var6 = var7.hovering;
                var4 = var7.renderActiveDivider;
                var10 = var7.hideContent;
                var15 = var7.renderRow;
                var0 = var7.rowData;
                var13 = var7.onPressOut;
                var3 = var7.active;
                var8 = _closure1_slot7;
                var2 = var8.useRef;
                var2 = var2.bind(var8)(var7);
                var _closure2_slot1 = var2;
                var2 = var8.useRef;
                var9 = null;
                var7 = var2.bind(var8)(var9);
                var _closure2_slot2 = var7;
                var2 = var8.useRef;
                var2 = var2.bind(var8)(var9);
                var _closure2_slot3 = var2;
                var11 = var8.useEffect;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var11.bind(var8)(var2);
                var12 = var8.useCallback;
                var11 = function() { // Environment: var1
                    _fun102990: for (var _fun102990_ip = 0;;) switch (_fun102990_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun102990_ip = 38;
                                continue _fun102990
                            }
                        case 18:
                            var1 = var2.measure;
                            var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                var3 = _closure2_slot1;
                                var2 = var3.current;
                                var1 = var2.onRowActive;
                                var0 = {};
                                var4 = {};
                                var5 = arg0;
                                var4.frameX = var5;
                                var5 = arg1;
                                var4.frameY = var5;
                                var5 = arg2;
                                var4.frameWidth = var5;
                                var5 = arg3;
                                var4.frameHeight = var5;
                                var5 = arg4;
                                var4.pageX = var5;
                                var5 = arg5;
                                var4.pageY = var5;
                                var0.layout = var4;
                                var3 = var3.current;
                                var3 = var3.rowData;
                                var0.rowData = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var14 = var12.bind(var8)(var11, var2);
                var11 = var8.useCallback;
                var2 = function(arg0) { // Environment: var1
                    _fun102992: for (var _fun102992_ip = 0;;) switch (_fun102992_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = {};
                            var1 = var5.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.x;
                            var3.x = var1;
                            var1 = var5.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.y;
                            var3.y = var1;
                            var1 = var5.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.width;
                            var3.width = var1;
                            var1 = _closure2_slot3;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun102992_ip = 105;
                                continue _fun102992
                            }
                        case 88:
                            var5 = var5.nativeEvent;
                            var5 = var5.layout;
                            var4 = var5.height;
                        case 105:
                            var3.height = var4;
                            var _closure3_slot0 = var3;
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun102992_ip = 144;
                                continue _fun102992
                            }
                        case 126:
                            var1 = var2.measure;
                            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                _fun102993: for (var _fun102993_ip = 0;;) switch (_fun102993_ip) {
                                    case 0:
                                        var3 = arg3;
                                        var1 = _closure2_slot3;
                                        var1 = var1.current;
                                        var2 = null;
                                        var1 = var2 == var1;
                                        if (!var1) {
                                            _fun102993_ip = 30;
                                            continue _fun102993
                                        }
                                    case 24:
                                        var4 = 0;
                                        var1 = var3 > var4;
                                    case 30:
                                        if (!var1) {
                                            _fun102993_ip = 43;
                                            continue _fun102993
                                        }
                                    case 33:
                                        var1 = _closure2_slot3;
                                        var1.current = var3;
                                    case 43:
                                        var1 = _closure2_slot1;
                                        var1 = var1.current;
                                        var1 = var1.onRowLayout;
                                        if (!(var2 != var1)) {
                                            _fun102993_ip = 100;
                                            continue _fun102993
                                        }
                                    case 62:
                                        var0 = _closure2_slot1;
                                        var3 = var0.current;
                                        var2 = var3.onRowLayout;
                                        var0 = var0.current;
                                        var1 = var0.index;
                                        var0 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 100:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 144:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var11 = var11.bind(var8)(var2, var1);
                var2 = var8.cloneElement;
                var12 = var0.item;
                var1 = var0.index;
                var0 = var9 != var3;
                if (!var0) {
                    _fun102988_ip = 189;
                    continue _fun102988
                }
            case 186:
                var0 = var3;
            case 189:
                var3 = undefined;
                var1 = var15.bind(var3)(var12, var1, var0);
                var0 = {};
                var12 = {};
                var12.onLongPress = var14;
                var12.onPressOut = var13;
                var0.sortHandlers = var12;
                var8 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot8;
                var0 = {};
                var0.onLayout = var11;
                var0.ref = var7;
                if (!var6) {
                    _fun102988_ip = 249;
                    continue _fun102988
                }
            case 245:
                var6 = var4.bind(var3)();
            case 249:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot8;
                var5 = {};
                var9 = null;
                if (!var10) {
                    _fun102988_ip = 286;
                    continue _fun102988
                }
            case 272:
                var9 = {
                    'height': 0.01,
                    'opacity': 0
                };
            case 286:
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var7.bind(var3)(var6);
    var _closure1_slot16 = var6;
    var7 = var3.memo;
    var6 = function(arg0) { // Environment: var1
        var1 = arg0;
        var5 = var1.sortRowStyle;
        var0 = var1.rowData;
        var7 = var1.renderRow;
        var6 = var1.pan;
        var11 = var1.frameHeight;
        var _closure2_slot0 = var11;
        var10 = var1.listPageY;
        var _closure2_slot1 = var10;
        var9 = var1.wrapperPageY;
        var _closure2_slot2 = var9;
        var8 = _closure1_slot7;
        var4 = var8.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var2 = function() { // Environment: var2
            var0 = {
                'position': 'absolute',
                'left': 0,
                'right': 0,
                'opacity': 0.25,
                'overflow': 'hidden',
                'backgroundColor': 'transparent'
            };
            var2 = _closure2_slot0;
            var0.height = var2;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var1 = var2 - var1;
            var0.marginTop = var1;
            return var0;
        };
        var8 = var4.bind(var8)(var2, var3);
        var3 = _closure1_slot12;
        var1 = _closure1_slot9;
        var2 = var1.View;
        var1 = {};
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var5;
        var5 = var6.getLayout;
        var5 = var5.bind(var6)();
        var4[2] = var5;
        var1.style = var4;
        var6 = var0.item;
        var5 = var0.index;
        var0 = undefined;
        var4 = true;
        var4 = var7.bind(var0)(var6, var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var7.bind(var3)(var6);
    var _closure1_slot17 = var6;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun102997: for (var _fun102997_ip = 0;;) switch (_fun102997_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var5, var3);
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var2)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun102997_ip = 75;
                        continue _fun102997
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun102997_ip = 109;
                    continue _fun102997;
                case 75:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var2)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var3.bind(var2)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var0.memoedRowData = var3;
                    var0.firstRowY = var2;
                    var2 = {};
                    var0.layoutMap = var2;
                    var2 = 0;
                    var0.scrollValue = var2;
                    var2 = null;
                    var0._delayedInitTimeout = var2;
                    var7 = false;
                    var0._isMounted = var7;
                    var0.moved = var7;
                    var3 = _closure1_slot7;
                    var2 = var3.createRef;
                    var2 = var2.bind(var3)();
                    var0._wrapperRef = var2;
                    var2 = var3.createRef;
                    var2 = var2.bind(var3)();
                    var0._listRef = var2;
                    var2 = _closure1_slot14;
                    var0.scrollContainerHeight = var2;
                    var2 = {
                        'active': null,
                        'hovering': false,
                        'hoverIndex': 4294967291
                    };
                    var6 = _closure1_slot9;
                    var8 = var6.ValueXY;
                    var13 = _closure1_slot15;
                    var5 = var8.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = var5;
                    var3 = new var14[var8](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var2.pan = var3;
                    var0.state = var2;
                    var2 = function() { // Environment: var4
                        _fun102998: for (var _fun102998_ip = 0;;) switch (_fun102998_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var5 = var1.renderRow;
                                var0 = var0.state;
                                var8 = var0.active;
                                var9 = var0.hoverIndex;
                                var1 = var0.pan;
                                var0 = null;
                                if (!(var0 != var8)) {
                                    _fun102998_ip = 260;
                                    continue _fun102998
                                }
                            case 50:
                                var2 = var8.rowData;
                                var11 = var2.item;
                                var6 = var2.index;
                                var4 = _closure1_slot12;
                                var3 = _closure1_slot17;
                                var2 = {};
                                var2.pan = var1;
                                var1 = _closure3_slot0;
                                var10 = var1.getMemoedRowData;
                                var10 = var10.bind(var1)(var6, var11);
                                var2.rowData = var10;
                                var6 = var9 === var6;
                                var2.shouldDisplayHovering = var6;
                                var1 = var1.wrapperLayout;
                                var2.wrapperLayout = var1;
                                var6 = var0 == var8;
                                var1 = undefined;
                                var10 = undefined;
                                if (var6) {
                                    _fun102998_ip = 150;
                                    continue _fun102998
                                }
                            case 138:
                                var6 = var8.layout;
                                var10 = var6.frameHeight;
                            case 150:
                                var11 = var0 != var10;
                                var9 = 0;
                                if (!var11) {
                                    _fun102998_ip = 162;
                                    continue _fun102998
                                }
                            case 159:
                                var9 = var10;
                            case 162:
                                var2.frameHeight = var9;
                                var10 = var0 == var8;
                                var9 = undefined;
                                if (var10) {
                                    _fun102998_ip = 188;
                                    continue _fun102998
                                }
                            case 176:
                                var8 = var8.layout;
                                var9 = var8.pageY;
                            case 188:
                                var10 = var0 != var9;
                                var8 = 0;
                                if (!var10) {
                                    _fun102998_ip = 200;
                                    continue _fun102998
                                }
                            case 197:
                                var8 = var9;
                            case 200:
                                var2.listPageY = var8;
                                var7 = _closure3_slot0;
                                var8 = var7.wrapperLayout;
                                var9 = var0 == var8;
                                var7 = undefined;
                                if (var9) {
                                    _fun102998_ip = 230;
                                    continue _fun102998
                                }
                            case 224:
                                var7 = var8.pageY;
                            case 230:
                                var8 = var0 != var7;
                                var6 = 0;
                                if (!var8) {
                                    _fun102998_ip = 242;
                                    continue _fun102998
                                }
                            case 239:
                                var6 = var7;
                            case 242:
                                var2.wrapperPageY = var6;
                                var2.renderRow = var5;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            case 260:
                                return var0;
                        }
                    };
                    var0.renderActive = var2;
                    var2 = function() { // Environment: var4
                        _fun102999: for (var _fun102999_ip = 0;;) switch (_fun102999_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var3 = var1.renderActiveDivider;
                                var0 = var0.state;
                                var4 = var0.active;
                                var0 = null;
                                var5 = var0 != var4;
                                var2 = undefined;
                                var1 = undefined;
                                if (!var5) {
                                    _fun102999_ip = 54;
                                    continue _fun102999
                                }
                            case 42:
                                var4 = var4.layout;
                                var1 = var4.frameHeight;
                            case 54:
                                if (!(var0 == var3)) {
                                    _fun102999_ip = 89;
                                    continue _fun102999
                                }
                            case 58:
                                var5 = _closure1_slot12;
                                var4 = _closure1_slot8;
                                var0 = {};
                                var6 = {};
                                var6.height = var1;
                                var0.style = var6;
                                var0 = var5.bind(var2)(var4, var0);
                                _fun102999_ip = 94;
                                continue _fun102999;
                            case 89:
                                var0 = var3.bind(var2)(var1);
                            case 94:
                                return var0;
                        }
                    };
                    var0.renderActiveDivider = var2;
                    var2 = function(arg0, arg1) { // Environment: var4
                        var3 = _closure3_slot0;
                        var2 = var3._updateLayoutMap;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleRowLayout = var2;
                    var2 = function(arg0) { // Environment: var4
                        _fun103001: for (var _fun103001_ip = 0;;) switch (_fun103001_ip) {
                            case 0:
                                var0 = arg0;
                                var7 = var0.item;
                                var6 = var0.index;
                                var10 = var0.active;
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var11 = var1.disableSorting;
                                var4 = var1.renderRow;
                                var0 = var0.state;
                                var9 = var0.hoverIndex;
                                var8 = var0.pan;
                                var0 = null;
                                var2 = var0 == var10;
                                if (!var2) {
                                    _fun103001_ip = 117;
                                    continue _fun103001
                                }
                            case 69:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var3 = var1.active;
                                var12 = var0 == var3;
                                var1 = undefined;
                                if (var12) {
                                    _fun103001_ip = 113;
                                    continue _fun103001
                                }
                            case 93:
                                var3 = var3.rowData;
                                var12 = var0 == var3;
                                var1 = undefined;
                                if (var12) {
                                    _fun103001_ip = 113;
                                    continue _fun103001
                                }
                            case 108:
                                var1 = var3.index;
                            case 113:
                                var2 = var1 === var6;
                            case 117:
                                var1 = var0 == var10;
                                if (!var1) {
                                    _fun103001_ip = 127;
                                    continue _fun103001
                                }
                            case 124:
                                var1 = var2;
                            case 127:
                                if (!var1) {
                                    _fun103001_ip = 142;
                                    continue _fun103001
                                }
                            case 130:
                                var1 = {};
                                var2 = true;
                                var1.active = var2;
                                var10 = var1;
                            case 142:
                                var3 = _closure1_slot12;
                                var2 = _closure1_slot16;
                                var1 = {};
                                var1.index = var6;
                                var1.disabled = var11;
                                var1.active = var10;
                                var10 = _closure3_slot0;
                                var10 = var10.state;
                                var11 = var10.active;
                                var12 = var0 == var11;
                                var0 = undefined;
                                var10 = undefined;
                                if (var12) {
                                    _fun103001_ip = 205;
                                    continue _fun103001
                                }
                            case 194:
                                var11 = var11.rowData;
                                var10 = var11.index;
                            case 205:
                                var10 = var10 === var6;
                                var1.hideContent = var10;
                                var9 = var9 === var6;
                                var1.hovering = var9;
                                var5 = _closure3_slot0;
                                var9 = var5.cancel;
                                var1.onPressOut = var9;
                                var9 = var5.handleRowActive;
                                var1.onRowActive = var9;
                                var9 = var5.handleRowLayout;
                                var1.onRowLayout = var9;
                                var1.pan = var8;
                                var8 = var5.renderActiveDivider;
                                var1.renderActiveDivider = var8;
                                var1.renderRow = var4;
                                var4 = var5.getMemoedRowData;
                                var4 = var4.bind(var5)(var6, var7);
                                var1.rowData = var4;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                        }
                    };
                    var0.renderItem = var2;
                    var2 = function(arg0) { // Environment: var4
                        _fun103002: for (var _fun103002_ip = 0;;) switch (_fun103002_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot0;
                                var3 = var2.nativeEvent;
                                var3 = var3.contentOffset;
                                var3 = var3.y;
                                var1.scrollValue = var3;
                                var1 = var1.props;
                                var3 = var1.onScroll;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun103002_ip = 70;
                                    continue _fun103002
                                }
                            case 50:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onScroll;
                                var0 = var0.bind(var1)(var2);
                            case 70:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleScroll = var2;
                    var2 = function(arg0) { // Environment: var4
                        var1 = _closure3_slot0;
                        var0 = {};
                        var2 = arg0;
                        var2 = var2.nativeEvent;
                        var3 = var2.layout;
                        var4 = var0;
                        var2 = copyDataProperties(var4, var3);
                        var1.listLayout = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLayout = var2;
                    var2 = function(arg0, arg1) { // Environment: var4
                        var1 = _closure3_slot0;
                        var0 = arg1;
                        var1.scrollContainerHeight = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleContentSizeChange = var2;
                    var2 = function() { // Environment: var4
                        _fun103005: for (var _fun103005_ip = 0;;) switch (_fun103005_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var3 = var0.scrollValue;
                                var4 = var0.moveY;
                                var2 = var0.wrapperLayout;
                                var2 = var2.pageY;
                                var2 = var4 - var2;
                                var2 = var3 + var2;
                                var0 = var0.firstRowY;
                                var9 = var2 - var0;
                                var3 = 0;
                                var6 = null;
                                var5 = true;
                                var7 = 0;
                                var4 = 0;
                                var0 = 0;
                                var2 = false;
                                if (!(var3 <= var9)) {
                                    _fun103005_ip = 114;
                                    continue _fun103005
                                }
                            case 67:
                                var10 = _closure3_slot0;
                                var10 = var10.layoutMap;
                                var10 = var10[var4];
                                var11 = var6 == var10;
                                var0 = var4;
                                var2 = true;
                                if (var11) {
                                    _fun103005_ip = 114;
                                    continue _fun103005
                                }
                            case 93:
                                var10 = var10.height;
                                var7 = var7 + var10;
                                var4 = var4 + 1;
                                var0 = var4;
                                var2 = false;
                                if (var7 <= var9) {
                                    _fun103005_ip = 67;
                                    continue _fun103005
                                }
                            case 114:
                                var4 = var0;
                                if (var2) {
                                    _fun103005_ip = 123;
                                    continue _fun103005
                                }
                            case 120:
                                var4 = var0 - 1;
                            case 123:
                                var0 = global;
                                var2 = var0.Math;
                                var0 = var2.max;
                                var2 = var0.bind(var2)(var3, var4);
                                var0 = _closure3_slot0;
                                var0 = var0.state;
                                var7 = var0.active;
                                var8 = var6 == var7;
                                var0 = undefined;
                                var4 = undefined;
                                if (var8) {
                                    _fun103005_ip = 179;
                                    continue _fun103005
                                }
                            case 168:
                                var7 = var7.rowData;
                                var4 = var7.index;
                            case 179:
                                var6 = var6 != var4;
                                var3 = 0;
                                if (!var6) {
                                    _fun103005_ip = 191;
                                    continue _fun103005
                                }
                            case 188:
                                var3 = var4;
                            case 191:
                                var4 = var2;
                                if (!(var3 < var4)) {
                                    _fun103005_ip = 201;
                                    continue _fun103005
                                }
                            case 198:
                                var4 = var2 + 1;
                            case 201:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.hoverIndex;
                                if (!(var4 !== var2)) {
                                    _fun103005_ip = 280;
                                    continue _fun103005
                                }
                            case 220:
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 8;
                                var2 = var6[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.DeprecatedLayoutAnimation;
                                var2 = var2.bind(var3)();
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var1.hovering = var5;
                                var1.hoverIndex = var4;
                                var1 = var2.bind(var3)(var1);
                            case 280:
                                return var0;
                        }
                    };
                    var0.checkTargetElement = var2;
                    var2 = function() { // Environment: var4
                        _fun103006: for (var _fun103006_ip = 0;;) switch (_fun103006_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.moved;
                                if (var1) {
                                    _fun103006_ip = 45;
                                    continue _fun103006
                                }
                            case 16:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {
                                    'active': null,
                                    'hovering': false,
                                    'hoverIndex': 4294967291
                                };
                                var0 = var1.bind(var2)(var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.cancel = var2;
                    var2 = function(arg0) { // Environment: var4
                        var7 = 0;
                        var6 = copyRestArgs(var7);
                        var0 = _closure3_slot0;
                        var2 = var0.scrollResponder;
                        var1 = var2.scrollTo;
                        var0 = new Array(0);
                        var7 = var0;
                        var5 = 0;
                        var3 = arraySpread(var7, var6, var5);
                        var7 = var1;
                        var6 = var0;
                        var5 = var2;
                        var0 = apply(var7, var6, var5);
                        var0 = undefined;
                        return var0;
                    };
                    var0.scrollTo = var2;
                    var2 = function() { // Environment: var4
                        _fun103008: for (var _fun103008_ip = 0;;) switch (_fun103008_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._isMounted;
                                if (!var1) {
                                    _fun103008_ip = 369;
                                    continue _fun103008
                                }
                            case 19:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.active;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun103008_ip = 369;
                                    continue _fun103008
                                }
                            case 43:
                                var1 = _closure3_slot0;
                                var1 = var1.moveY;
                                if (!(var2 != var1)) {
                                    _fun103008_ip = 373;
                                    continue _fun103008
                                }
                            case 60:
                                var1 = _closure3_slot0;
                                var3 = var1.wrapperLayout;
                                var4 = var3.pageY;
                                var3 = var1.moveY;
                                var7 = var3 - var4;
                                var3 = var1.listLayout;
                                var3 = var3.height;
                                var6 = 80;
                                var8 = var3 - var6;
                                var4 = var1.scrollContainerHeight;
                                var3 = var1.listLayout;
                                var3 = var3.height;
                                var4 = var4 - var3;
                                var3 = var1.state;
                                var3 = var3.active;
                                var3 = var3.layout;
                                var5 = var3.frameHeight;
                                var3 = 2;
                                var3 = var3 * var5;
                                var3 = var4 + var3;
                                var5 = var1.scrollValue;
                                var1 = var7 < var6;
                                if (!var1) {
                                    _fun103008_ip = 178;
                                    continue _fun103008
                                }
                            case 172:
                                var4 = 0;
                                var1 = var5 > var4;
                            case 178:
                                var4 = null;
                                if (!var1) {
                                    _fun103008_ip = 214;
                                    continue _fun103008
                                }
                            case 183:
                                var11 = var7 / var6;
                                var10 = 20;
                                var9 = 1;
                                var9 = var9 - var11;
                                var9 = var10 * var9;
                                var9 = var5 - var9;
                                var10 = 0;
                                var1 = var9 < var10;
                                var4 = var9;
                            case 214:
                                if (!var1) {
                                    _fun103008_ip = 219;
                                    continue _fun103008
                                }
                            case 217:
                                var4 = 0;
                            case 219:
                                var1 = var4;
                                if (!(var7 > var8)) {
                                    _fun103008_ip = 281;
                                    continue _fun103008
                                }
                            case 226:
                                var1 = var4;
                                if (!(var5 < var3)) {
                                    _fun103008_ip = 281;
                                    continue _fun103008
                                }
                            case 233:
                                var4 = _closure3_slot0;
                                var4 = var4.listLayout;
                                var4 = var4.height;
                                var4 = var4 - var7;
                                var7 = var4 / var6;
                                var6 = 20;
                                var4 = 1;
                                var4 = var4 - var7;
                                var4 = var6 * var4;
                                var1 = var5 + var4;
                                if (!(var1 > var3)) {
                                    _fun103008_ip = 281;
                                    continue _fun103008
                                }
                            case 278:
                                var1 = var3;
                            case 281:
                                if (!(var2 !== var1)) {
                                    _fun103008_ip = 334;
                                    continue _fun103008
                                }
                            case 285:
                                var4 = _closure3_slot0;
                                var4.scrollValue = var1;
                                var3 = var4.scrollResponder;
                                var2 = var3.scrollTo;
                                var1 = {
                                    'y': null,
                                    'x': 0,
                                    'animated': false
                                };
                                var4 = var4.scrollValue;
                                var1.y = var4;
                                var1 = var2.bind(var3)(var1);
                            case 334:
                                var1 = _closure3_slot0;
                                var2 = var1.checkTargetElement;
                                var2 = var2.bind(var1)();
                                var2 = global;
                                var3 = var2.requestAnimationFrame;
                                var2 = var1.scrollAnimation;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                            case 369:
                                var1 = undefined;
                                return var1;
                            case 373:
                                var1 = global;
                                var2 = var1.requestAnimationFrame;
                                var0 = _closure3_slot0;
                                var1 = var0.scrollAnimation;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var0.scrollAnimation = var2;
                    var2 = function(arg0, arg1) { // Environment: var4
                        _fun103009: for (var _fun103009_ip = 0;;) switch (_fun103009_ip) {
                            case 0:
                                var2 = arg1;
                                var1 = _closure3_slot0;
                                var3 = var1.firstRowY;
                                var1 = null;
                                var1 = var1 == var3;
                                if (var1) {
                                    _fun103009_ip = 41;
                                    continue _fun103009
                                }
                            case 25:
                                var3 = _closure3_slot0;
                                var4 = var3.firstRowY;
                                var3 = 0;
                                var1 = var3 === var4;
                            case 41:
                                if (var1) {
                                    _fun103009_ip = 63;
                                    continue _fun103009
                                }
                            case 44:
                                var4 = var2.y;
                                var3 = _closure3_slot0;
                                var3 = var3.firstRowY;
                                var1 = var4 < var3;
                            case 63:
                                if (!var1) {
                                    _fun103009_ip = 81;
                                    continue _fun103009
                                }
                            case 66:
                                var3 = _closure3_slot0;
                                var1 = var2.y;
                                var3.firstRowY = var1;
                            case 81:
                                var0 = _closure3_slot0;
                                var1 = var0.layoutMap;
                                var0 = arg0;
                                var1[var0] = var2;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._updateLayoutMap = var2;
                    var2 = function() { // Environment: var4
                        var0 = _closure3_slot0;
                        var0 = var0.scrollResponder;
                        return var0;
                    };
                    var0.getScrollResponder = var2;
                    var2 = function(arg0) { // Environment: var4
                        _fun103011: for (var _fun103011_ip = 0;;) switch (_fun103011_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.disableSorting;
                                var0 = undefined;
                                var3 = undefined;
                                if (var2) {
                                    _fun103011_ip = 58;
                                    continue _fun103011
                                }
                            case 34:
                                var4 = _closure3_slot0;
                                var4 = var4._wrapperRef;
                                var4 = var4.current;
                                var5 = null;
                                var2 = var5 == var4;
                                var3 = var4;
                            case 58:
                                if (var2) {
                                    _fun103011_ip = 79;
                                    continue _fun103011
                                }
                            case 61:
                                var2 = var3.measure;
                                var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                                    var4 = _closure3_slot0;
                                    var0 = {};
                                    var1 = arg0;
                                    var0.frameX = var1;
                                    var1 = arg1;
                                    var0.frameY = var1;
                                    var1 = arg2;
                                    var0.frameWidth = var1;
                                    var1 = arg3;
                                    var0.frameHeight = var1;
                                    var1 = arg4;
                                    var0.pageX = var1;
                                    var1 = arg5;
                                    var0.pageY = var1;
                                    var4.wrapperLayout = var0;
                                    var0 = var4.state;
                                    var2 = var0.pan;
                                    var1 = var2.setValue;
                                    var0 = {
                                        'x': 0,
                                        'y': 0
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.DeprecatedLayoutAnimation;
                                    var1 = var1.bind(var2)();
                                    var1 = _closure4_slot0;
                                    var2 = var1.layout;
                                    var2 = var2.pageY;
                                    var4.moveY = var2;
                                    var3 = var4.setState;
                                    var2 = {};
                                    var2.active = var1;
                                    var5 = true;
                                    var2.hovering = var5;
                                    var1 = var1.rowData;
                                    var1 = var1.index;
                                    var2.hoverIndex = var1;
                                    var1 = var4.scrollAnimation;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                            case 79:
                                return var0;
                        }
                    };
                    var0.handleRowActive = var2;
                    var5 = var6.event;
                    var2 = {};
                    var3 = var0.state;
                    var3 = var3.pan;
                    var3 = var3.x;
                    var2.dx = var3;
                    var3 = var0.state;
                    var3 = var3.pan;
                    var3 = var3.y;
                    var2.dy = var3;
                    var3 = [null];
                    var3[1] = var2;
                    var2 = {};
                    var2.useNativeDriver = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    var _closure3_slot1 = var2;
                    var3 = _closure1_slot10;
                    var2 = var3.create;
                    var1 = {};
                    var5 = function() {
                        var0 = true;
                        return var0;
                    };
                    var1.onStartShouldSetPanResponder = var5;
                    var5 = function arg0, arg1() {
                        _fun103014: for (var _fun103014_ip = 0;;) switch (_fun103014_ip) {
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
                                    _fun103014_ip = 82;
                                    continue _fun103014
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
                    var1.onMoveShouldSetPanResponderCapture = var5;
                    var5 = function arg0, arg1() {
                        var3 = arg1;
                        var0 = 0;
                        var3.dx = var0;
                        var2 = _closure3_slot0;
                        var1 = var3.moveY;
                        var2.moveY = var1;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1, var3);
                        return var0;
                    };
                    var1.onPanResponderMove = var5;
                    var5 = function() {
                        _fun103016: for (var _fun103016_ip = 0;;) switch (_fun103016_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = true;
                                var1.moved = var2;
                                var2 = var1.state;
                                var3 = var2.pan;
                                var2 = var3.setOffset;
                                var4 = _closure1_slot15;
                                var2 = var2.bind(var3)(var4);
                                var2 = var1.state;
                                var3 = var2.pan;
                                var2 = var3.setValue;
                                var2 = var2.bind(var3)(var4);
                                var1 = var1.props;
                                var2 = var1.onMoveStart;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun103016_ip = 102;
                                    continue _fun103016
                                }
                            case 83:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onMoveStart;
                                var0 = var0.bind(var1)();
                            case 102:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onPanResponderGrant = var5;
                    var5 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {
                            'active': null,
                            'hovering': false,
                            'hoverIndex': 4294967291
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onPanResponderTerminate = var5;
                    var4 = function() {
                        _fun103018: for (var _fun103018_ip = 0;;) switch (_fun103018_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = false;
                                var1.moved = var3;
                                var1 = var1.props;
                                var2 = var1.onMoveEnd;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun103018_ip = 51;
                                    continue _fun103018
                                }
                            case 32:
                                var2 = _closure3_slot0;
                                var4 = var2.props;
                                var2 = var4.onMoveEnd;
                                var2 = var2.bind(var4)();
                            case 51:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.active;
                                if (!(var1 != var2)) {
                                    _fun103018_ip = 423;
                                    continue _fun103018
                                }
                            case 73:
                                var2 = _closure3_slot0;
                                var4 = var2.state;
                                var4 = var4.active;
                                var4 = var4.layout;
                                var8 = var4.frameHeight;
                                var4 = var2.state;
                                var4 = var4.active;
                                var4 = var4.rowData;
                                var9 = var4.index;
                                var2 = var2.state;
                                var2 = var2.hovering;
                                if (!(var3 !== var2)) {
                                    _fun103018_ip = 392;
                                    continue _fun103018
                                }
                            case 140:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.hoverIndex;
                                var6 = var2;
                                if (!(var6 > var9)) {
                                    _fun103018_ip = 165;
                                    continue _fun103018
                                }
                            case 162:
                                var6 = var2 - 1;
                            case 165:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 8;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.DeprecatedLayoutAnimation;
                                var3 = {};
                                var7 = 0;
                                var3.duration = var7;
                                var3 = var4.bind(var5)(var3);
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var3 = var3.onRowMoved;
                                if (!(var1 != var3)) {
                                    _fun103018_ip = 280;
                                    continue _fun103018
                                }
                            case 228:
                                var10 = _closure3_slot0;
                                var5 = var10.props;
                                var4 = var5.onRowMoved;
                                var3 = {};
                                var10 = var10.state;
                                var10 = var10.active;
                                var10 = var10.rowData;
                                var3.row = var10;
                                var3.from = var9;
                                var3.to = var6;
                                var3 = var4.bind(var5)(var3);
                            case 280:
                                var3 = _closure3_slot0;
                                var5 = var3.setState;
                                var4 = {
                                    'active': null,
                                    'hovering': false,
                                    'hoverIndex': 4294967291
                                };
                                var4 = var5.bind(var3)(var4);
                                var4 = global;
                                var6 = var4.Math;
                                var5 = var6.max;
                                var9 = var3.scrollContainerHeight;
                                var4 = var3.listLayout;
                                var4 = var4.height;
                                var4 = var9 - var4;
                                var4 = var4 + var8;
                                var6 = var5.bind(var6)(var7, var4);
                                var3 = var3.scrollValue;
                                if (!(var3 > var6)) {
                                    _fun103018_ip = 390;
                                    continue _fun103018
                                }
                            case 363:
                                var3 = _closure3_slot0;
                                var5 = var3.scrollResponder;
                                var4 = var5.scrollTo;
                                var3 = {};
                                var3.y = var6;
                                var3 = var4.bind(var5)(var3);
                            case 390:
                                return var2;
                            case 392:
                                var4 = _closure3_slot0;
                                var3 = var4.setState;
                                var2 = {
                                    'active': null,
                                    'hoverIndex': 4294967291
                                };
                                var2 = var3.bind(var4)(var2);
                                return var2;
                            case 423:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.hovering;
                                if (!var2) {
                                    _fun103018_ip = 470;
                                    continue _fun103018
                                }
                            case 441:
                                var4 = _closure3_slot0;
                                var3 = var4.setState;
                                var2 = {
                                    'hovering': false,
                                    'hoverIndex': 4294967291
                                };
                                var2 = var3.bind(var4)(var2);
                            case 470:
                                var0 = _closure3_slot0;
                                var0.moveY = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onPanResponderRelease = var4;
                    var1 = var2.bind(var3)(var1);
                    var0._panResponder = var1;
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
            var2 = this;
            var _closure3_slot0 = var2;
            var0 = true;
            var2._isMounted = var0;
            var0 = global;
            var4 = var0.setTimeout;
            var0 = undefined;
            var3 = function() { // Environment: var1
                _fun103020: for (var _fun103020_ip = 0;;) switch (_fun103020_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var0 = var4._listRef;
                        var6 = var0.current;
                        var1 = null;
                        var5 = var1 == var6;
                        var0 = undefined;
                        var3 = undefined;
                        if (var5) {
                            _fun103020_ip = 41;
                            continue _fun103020
                        }
                    case 31:
                        var5 = var6.getScrollResponder;
                        var3 = var5.bind(var6)();
                    case 41:
                        var4.scrollResponder = var3;
                        var2 = _closure3_slot0;
                        var2 = var2._wrapperRef;
                        var3 = var2.current;
                        if (!(var1 != var3)) {
                            _fun103020_ip = 86;
                            continue _fun103020
                        }
                    case 66:
                        var2 = var3.measure;
                        var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                            var1 = _closure3_slot0;
                            var0 = {};
                            var2 = arg0;
                            var0.frameX = var2;
                            var2 = arg1;
                            var0.frameY = var2;
                            var2 = arg2;
                            var0.frameWidth = var2;
                            var2 = arg3;
                            var0.frameHeight = var2;
                            var2 = arg4;
                            var0.pageX = var2;
                            var2 = arg5;
                            var0.pageY = var2;
                            var1.wrapperLayout = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                    case 86:
                        return var0;
                }
            };
            var1 = 1;
            var1 = var4.bind(var0)(var3, var1);
            var2._delayedInitTimeout = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.clearTimeout;
            var0 = this;
            var1 = var0._delayedInitTimeout;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMemoedRowData';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun103023: for (var _fun103023_ip = 0;;) switch (_fun103023_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arg1;
                    var1 = this;
                    var0 = var1.memoedRowData;
                    var0 = var0[var2];
                    var3 = null;
                    var3 = var3 != var0;
                    if (!var3) {
                        _fun103023_ip = 37;
                        continue _fun103023
                    }
                case 28:
                    var5 = var0.index;
                    var3 = var2 === var5;
                case 37:
                    if (!var3) {
                        _fun103023_ip = 49;
                        continue _fun103023
                    }
                case 40:
                    var5 = var0.item;
                    var3 = var4 === var5;
                case 49:
                    if (var3) {
                        _fun103023_ip = 65;
                        continue _fun103023
                    }
                case 52:
                    var3 = {};
                    var3.index = var2;
                    var3.item = var4;
                    var0 = var3;
                case 65:
                    var1 = var1.memoedRowData;
                    var1[var2] = var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun103024: for (var _fun103024_ip = 0;;) switch (_fun103024_ip) {
                case 0:
                    var6 = this;
                    var0 = var6.props;
                    var5 = var0.wrapperStyles;
                    var12 = var0.contentContainerStyle;
                    var13 = var0.disableSorting;
                    var11 = var0.header;
                    var9 = var0.footer;
                    var8 = var0.data;
                    var10 = var0.scrollEnabled;
                    var15 = var0.keyboardShouldPersistTaps;
                    var14 = var0.scrollEventThrottle;
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var4 = var6._wrapperRef;
                    var1.ref = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var7 = 1;
                    var5.flex = var7;
                    var4[1] = var5;
                    var1.style = var4;
                    var7 = _closure1_slot12;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var0 = var6._panResponder;
                    var20 = var0.panHandlers;
                    var21 = var4;
                    var0 = copyDataProperties(var21, var20);
                    var16 = var6._listRef;
                    var0 = 'ref';
                    var4[var0] = var16;
                    var0 = 'keyboardShouldPersistTaps';
                    var4[var0] = var15;
                    var0 = 'scrollEventThrottle';
                    var4[var0] = var14;
                    var0 = 'contentContainerStyle';
                    var4[var0] = var12;
                    var0 = 'ListHeaderComponent';
                    var4[var0] = var11;
                    var0 = 'ListFooterComponent';
                    var4[var0] = var9;
                    var0 = 'data';
                    var4[var0] = var8;
                    var8 = var6.handleScroll;
                    var0 = 'onScroll';
                    var4[var0] = var8;
                    var8 = var6.handleContentSizeChange;
                    var0 = 'onContentSizeChange';
                    var4[var0] = var8;
                    var8 = var6.handleLayout;
                    var0 = 'onLayout';
                    var4[var0] = var8;
                    var0 = var6.state;
                    var8 = var0.active;
                    var0 = null;
                    var9 = var0 == var8;
                    if (!var9) {
                        _fun103024_ip = 277;
                        continue _fun103024
                    }
                case 271:
                    var8 = false;
                    var9 = var8 !== var10;
                case 277:
                    var8 = 'scrollEnabled';
                    var4[var8] = var9;
                    var9 = var6.renderItem;
                    var8 = 'renderItem';
                    var4[var8] = var9;
                    var8 = var6.state;
                    var8 = var8.active;
                    var9 = var0 == var8;
                    var0 = undefined;
                    var12 = undefined;
                    if (var9) {
                        _fun103024_ip = 334;
                        continue _fun103024
                    }
                case 323:
                    var8 = var8.rowData;
                    var12 = var8.index;
                case 334:
                    var8 = var6.state;
                    var17 = var8.hoverIndex;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var10 = var8.concat;
                    var22 = '';
                    var8 = ':';
                    var21 = var13;
                    var20 = var8;
                    var19 = var12;
                    var18 = var8;
                    var9 = var22[var10](var21, var20, var19, var18, var17, var16);
                    var8 = 'extraData';
                    var4[var8] = var9;
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
    var3 = {};
    var6 = false;
    var3.disableSorting = var6;
    var1.defaultProps = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SortableListView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 4895, 2]);