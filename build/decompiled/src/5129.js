// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45717: for (var _fun45717_ip = 0;;) switch (_fun45717_ip) {
        case 0:
            var4 = require;
            var1 = exports;
            var5 = dependencyMap;
            var3 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = var3;
            if (!var3) {
                _fun45717_ip = 34;
                continue _fun45717
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun45717_ip = 51;
                continue _fun45717
            }
        case 37:
            var6 = function arg0, arg1() {
                _fun45718: for (var _fun45718_ip = 0;;) switch (_fun45718_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45718_ip = 47;
                            continue _fun45718
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45718_ip = 44;
                            continue _fun45718
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun45718_ip = 55;
                            continue _fun45718
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45720: for (var _fun45720_ip = 0;;) switch (_fun45720_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun45720_ip = 19;
                                                continue _fun45720
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45720_ip = 19;
                                            continue _fun45720;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var6;
            var0 = function(arg0, arg1) { // Environment: var2
                _fun45721: for (var _fun45721_ip = 0;;) switch (_fun45721_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45721_ip = 34;
                            continue _fun45721
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45721_ip = 114;
                            continue _fun45721
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45721_ip = 88;
                            continue _fun45721
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun45721_ip = 106;
                        continue _fun45721;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = var3;
            if (!var0) {
                _fun45717_ip = 67;
                continue _fun45717
            }
        case 61:
            var0 = var3.__assign;
        case 67:
            if (var0) {
                _fun45717_ip = 75;
                continue _fun45717
            }
        case 70:
            var0 = function() { // Environment: var2
                _fun45723: for (var _fun45723_ip = 0;;) switch (_fun45723_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun45723_ip = 25;
                            continue _fun45723
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun45724: for (var _fun45724_ip = 0;;) switch (_fun45724_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var2 = 1;
                                    var6 = var2 < var3;
                                    var1 = global;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun45724_ip = 112;
                                        continue _fun45724
                                    }
                                case 22:
                                    var8 = arguments[var2];
                                    var11 = var8;
                                    var6 = var4;
                                    var4 = var6;
                                    for (var7 in var11)
                                        case 43: {
                                            var4 = var6;
                                            case 55: var13 = var7;
                                            var14 = var1.Object;
                                            var14 = var14.prototype;
                                            var15 = var14.hasOwnProperty;
                                            var14 = var15.call;
                                            var14 = var14.bind(var15)(var8, var13);
                                            var6 = var13;
                                            if (!var14) {
                                                _fun45724_ip = 43;
                                                continue _fun45724
                                            }
                                            case 92: var14 = var8[var13];
                                            var0[var13] = var14;
                                            var6 = var13;
                                            _fun45724_ip = 43;
                                            continue _fun45724;
                                        }
                                case 105:
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun45724_ip = 22;
                                        continue _fun45724
                                    }
                                case 112:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot4 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
        case 75:
            var _closure1_slot4 = var0;
            var8 = global;
            var7 = var8.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var1, var0, var3);
            var7 = 0;
            var3 = var5[var7];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var _closure1_slot5 = var6;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = var6.version;
            var9 = !var3;
            var3 = !var9;
            if (var9) {
                _fun45717_ip = 205;
                continue _fun45717
            }
        case 159:
            var8 = var8.parseInt;
            var10 = var6.version;
            var9 = var10.split;
            var6 = '.';
            var6 = var9.bind(var10)(var6);
            var7 = var6[var7];
            var6 = 10;
            var7 = var8.bind(var0)(var7, var6);
            var6 = 19;
            var3 = var7 >= var6;
        case 205:
            var _closure1_slot7 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ComponentCompat;
            var2 = function(arg0) { // Environment: var2
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    _fun45726: for (var _fun45726_ip = 0;;) switch (_fun45726_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = this;
                            var5 = _closure2_slot0;
                            var4 = var5.call;
                            var0 = arg1;
                            var0 = var4.bind(var5)(var2, var3, var0);
                            if (var0) {
                                _fun45726_ip = 36;
                                continue _fun45726
                            }
                        case 33:
                            var0 = var2;
                        case 36:
                            var _closure3_slot0 = var0;
                            var2 = undefined;
                            var0._recyclerRef = var2;
                            var2 = null;
                            var0._stickyHeaderRef = var2;
                            var0._stickyFooterRef = var2;
                            var2 = new Array(0);
                            var0._visibleIndicesAll = var2;
                            var2 = 0;
                            var4 = {
                                'startCorrection': 0,
                                'endCorrection': 0,
                                'windowShift': 0
                            };
                            var0._windowCorrection = var4;
                            var4 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                                _fun45727: for (var _fun45727_ip = 0;;) switch (_fun45727_ip) {
                                    case 0:
                                        var5 = arg2;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.alwaysStickyFooter;
                                        if (!var1) {
                                            _fun45727_ip = 130;
                                            continue _fun45727
                                        }
                                    case 24:
                                        var2 = _closure3_slot0;
                                        var1 = var2._getRLVRenderedSize;
                                        var2 = var1.bind(var2)();
                                        var3 = _closure3_slot0;
                                        var1 = var3._getContentDimension;
                                        var3 = var1.bind(var3)();
                                        var4 = var2;
                                        if (!var4) {
                                            _fun45727_ip = 61;
                                            continue _fun45727
                                        }
                                    case 58:
                                        var4 = var3;
                                    case 61:
                                        var1 = false;
                                        if (!var4) {
                                            _fun45727_ip = 80;
                                            continue _fun45727
                                        }
                                    case 66:
                                        var3 = var3.height;
                                        var2 = var2.height;
                                        var1 = var3 > var2;
                                    case 80:
                                        if (var1) {
                                            _fun45727_ip = 130;
                                            continue _fun45727
                                        }
                                    case 83:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.stickyFooterIndices;
                                        if (!var1) {
                                            _fun45727_ip = 130;
                                            continue _fun45727
                                        }
                                    case 101:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var2 = var1.stickyFooterIndices;
                                        var1 = 0;
                                        var1 = var2[var1];
                                        if (!(var5 === var1)) {
                                            _fun45727_ip = 130;
                                            continue _fun45727
                                        }
                                    case 126:
                                        var1 = null;
                                        return var1;
                                    case 130:
                                        var4 = _closure3_slot0;
                                        var3 = var4._rowRenderer;
                                        var9 = arg0;
                                        var8 = arg1;
                                        var6 = arg3;
                                        var10 = var4;
                                        var7 = var5;
                                        var0 = var10[var3](var9, var8, var7, var6, var5);
                                        return var0;
                                }
                            };
                            var0._rlvRowRenderer = var4;
                            var4 = function(arg0) { // Environment: var1
                                _fun45728: for (var _fun45728_ip = 0;;) switch (_fun45728_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure3_slot0;
                                        var0._recyclerRef = var3;
                                        var2 = _closure1_slot7;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.children;
                                        if (var2) {
                                            _fun45728_ip = 47;
                                            continue _fun45728
                                        }
                                    case 40:
                                        var2 = var1.ref;
                                        _fun45728_ip = 57;
                                        continue _fun45728;
                                    case 47:
                                        var1 = var1.props;
                                        var2 = var1.ref;
                                    case 57:
                                        if (!var2) {
                                            _fun45728_ip = 78;
                                            continue _fun45728
                                        }
                                    case 60:
                                        var4 = 'function';
                                        var1 = typeof var2;
                                        if (!(var4 === var1)) {
                                            _fun45728_ip = 82;
                                            continue _fun45728
                                        }
                                    case 71:
                                        var1 = undefined;
                                        var1 = var2.bind(var1)(var3);
                                    case 78:
                                        var1 = undefined;
                                        return var1;
                                    case 82:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var0 = 2;
                                        var0 = var4[var0];
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var0);
                                        var2 = var0.default;
                                        var0 = 3;
                                        var0 = var4[var0];
                                        var0 = var3.bind(var1)(var0);
                                        var0 = var0.default;
                                        var5 = var0.refNotAsFunctionException;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var6 = var1;
                                        var0 = new var6[var2](var5, var4);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var0._getRecyclerRef = var4;
                            var4 = function() { // Environment: var1
                                var0 = _closure3_slot0;
                                var0 = var0._windowCorrection;
                                return var0;
                            };
                            var0._getCurrentWindowCorrection = var4;
                            var4 = function(arg0) { // Environment: var1
                                _fun45730: for (var _fun45730_ip = 0;;) switch (_fun45730_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyHeaderRef;
                                        if (!(var1 !== var2)) {
                                            _fun45730_ip = 55;
                                            continue _fun45730
                                        }
                                    case 20:
                                        var1 = _closure3_slot0;
                                        var1._stickyHeaderRef = var2;
                                        var2 = _closure3_slot0;
                                        var1 = var2._callStickyObjectsOnVisibleIndicesChanged;
                                        var0 = _closure3_slot0;
                                        var0 = var0._visibleIndicesAll;
                                        var0 = var1.bind(var2)(var0);
                                    case 55:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._getStickyHeaderRef = var4;
                            var4 = function(arg0) { // Environment: var1
                                _fun45731: for (var _fun45731_ip = 0;;) switch (_fun45731_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyFooterRef;
                                        if (!(var1 !== var2)) {
                                            _fun45731_ip = 55;
                                            continue _fun45731
                                        }
                                    case 20:
                                        var1 = _closure3_slot0;
                                        var1._stickyFooterRef = var2;
                                        var2 = _closure3_slot0;
                                        var1 = var2._callStickyObjectsOnVisibleIndicesChanged;
                                        var0 = _closure3_slot0;
                                        var0 = var0._visibleIndicesAll;
                                        var0 = var1.bind(var2)(var0);
                                    case 55:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._getStickyFooterRef = var4;
                            var4 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun45732: for (var _fun45732_ip = 0;;) switch (_fun45732_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var1 = _closure3_slot0;
                                        var1._visibleIndicesAll = var4;
                                        var2 = _closure3_slot0;
                                        var1 = var2._callStickyObjectsOnVisibleIndicesChanged;
                                        var1 = var1.bind(var2)(var4);
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.children;
                                        if (!var1) {
                                            _fun45732_ip = 67;
                                            continue _fun45732
                                        }
                                    case 48:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.children;
                                        var1 = var2.props;
                                    case 67:
                                        if (!var1) {
                                            _fun45732_ip = 95;
                                            continue _fun45732
                                        }
                                    case 70:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.children;
                                        var2 = var2.props;
                                        var1 = var2.onVisibleIndicesChanged;
                                    case 95:
                                        if (!var1) {
                                            _fun45732_ip = 136;
                                            continue _fun45732
                                        }
                                    case 98:
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var0 = var0.children;
                                        var3 = var0.props;
                                        var2 = var3.onVisibleIndicesChanged;
                                        var1 = arg1;
                                        var0 = arg2;
                                        var0 = var2.bind(var3)(var4, var1, var0);
                                    case 136:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._onVisibleIndicesChanged = var4;
                            var4 = function(arg0) { // Environment: var1
                                _fun45733: for (var _fun45733_ip = 0;;) switch (_fun45733_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyHeaderRef;
                                        if (!var1) {
                                            _fun45733_ip = 40;
                                            continue _fun45733
                                        }
                                    case 19:
                                        var1 = _closure3_slot0;
                                        var3 = var1._stickyHeaderRef;
                                        var1 = var3.onVisibleIndicesChanged;
                                        var1 = var1.bind(var3)(var2);
                                    case 40:
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyFooterRef;
                                        if (!var1) {
                                            _fun45733_ip = 74;
                                            continue _fun45733
                                        }
                                    case 53:
                                        var0 = _closure3_slot0;
                                        var1 = var0._stickyFooterRef;
                                        var0 = var1.onVisibleIndicesChanged;
                                        var0 = var0.bind(var1)(var2);
                                    case 74:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._callStickyObjectsOnVisibleIndicesChanged = var4;
                            var4 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun45734: for (var _fun45734_ip = 0;;) switch (_fun45734_ip) {
                                    case 0:
                                        var4 = arg1;
                                        var3 = arg2;
                                        var5 = _closure3_slot0;
                                        var2 = var5._getWindowCorrection;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var2.bind(var5)(var4, var3, var1);
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyHeaderRef;
                                        if (!var1) {
                                            _fun45734_ip = 69;
                                            continue _fun45734
                                        }
                                    case 48:
                                        var1 = _closure3_slot0;
                                        var2 = var1._stickyHeaderRef;
                                        var1 = var2.onScroll;
                                        var1 = var1.bind(var2)(var3);
                                    case 69:
                                        var1 = _closure3_slot0;
                                        var1 = var1._stickyFooterRef;
                                        if (!var1) {
                                            _fun45734_ip = 103;
                                            continue _fun45734
                                        }
                                    case 82:
                                        var1 = _closure3_slot0;
                                        var2 = var1._stickyFooterRef;
                                        var1 = var2.onScroll;
                                        var1 = var1.bind(var2)(var3);
                                    case 103:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.children;
                                        if (!var1) {
                                            _fun45734_ip = 145;
                                            continue _fun45734
                                        }
                                    case 120:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.children;
                                        var2 = var2.props;
                                        var1 = var2.onScroll;
                                    case 145:
                                        if (!var1) {
                                            _fun45734_ip = 183;
                                            continue _fun45734
                                        }
                                    case 148:
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var0 = var0.children;
                                        var2 = var0.props;
                                        var1 = var2.onScroll;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0, var4, var3);
                                    case 183:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._onScroll = var4;
                            var4 = function() { // Environment: var1
                                _fun45735: for (var _fun45735_ip = 0;;) switch (_fun45735_ip) {
                                    case 0:
                                        var1 = _closure1_slot5;
                                        var4 = var1.Children;
                                        var3 = var4.count;
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.children;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = 1;
                                        if (!(var2 === var3)) {
                                            _fun45735_ip = 69;
                                            continue _fun45735
                                        }
                                    case 48:
                                        var2 = _closure3_slot0;
                                        var1 = var2._isChildRecyclerInstance;
                                        var1 = var1.bind(var2)();
                                        if (!var1) {
                                            _fun45735_ip = 69;
                                            continue _fun45735
                                        }
                                    case 65:
                                        var1 = undefined;
                                        return var1;
                                    case 69:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var0 = 2;
                                        var0 = var4[var0];
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var0);
                                        var2 = var0.default;
                                        var0 = 3;
                                        var0 = var4[var0];
                                        var0 = var3.bind(var1)(var0);
                                        var0 = var0.default;
                                        var5 = var0.wrongStickyChildTypeException;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var6 = var1;
                                        var0 = new var6[var2](var5, var4);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var0._assertChildType = var4;
                            var4 = function() { // Environment: var1
                                _fun45736: for (var _fun45736_ip = 0;;) switch (_fun45736_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var0 = var0.children;
                                        var0 = var0.props;
                                        var0 = var0.dataProvider;
                                        if (!var0) {
                                            _fun45736_ip = 56;
                                            continue _fun45736
                                        }
                                    case 31:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.children;
                                        var2 = var2.props;
                                        var0 = var2.rowRenderer;
                                    case 56:
                                        if (!var0) {
                                            _fun45736_ip = 84;
                                            continue _fun45736
                                        }
                                    case 59:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.children;
                                        var1 = var1.props;
                                        var0 = var1.layoutProvider;
                                    case 84:
                                        return var0;
                                }
                            };
                            var0._isChildRecyclerInstance = var4;
                            var4 = function(arg0) { // Environment: var1
                                _fun45737: for (var _fun45737_ip = 0;;) switch (_fun45737_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1._recyclerRef;
                                        if (var1) {
                                            _fun45737_ip = 20;
                                            continue _fun45737
                                        }
                                    case 16:
                                        var1 = undefined;
                                        return var1;
                                    case 20:
                                        var0 = _closure3_slot0;
                                        var2 = var0._recyclerRef;
                                        var1 = var2.getLayout;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var0._getLayoutForIndex = var4;
                            var4 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var2 = var0._dataProvider;
                                var1 = var2.getDataForIndex;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0._getDataForIndex = var4;
                            var4 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var2 = var0._layoutProvider;
                                var1 = var2.getLayoutTypeForIndex;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0._getLayoutTypeForIndex = var4;
                            var4 = function() { // Environment: var1
                                var0 = _closure3_slot0;
                                var0 = var0._extendedState;
                                return var0;
                            };
                            var0._getExtendedState = var4;
                            var4 = function() { // Environment: var1
                                var0 = _closure3_slot0;
                                var0 = var0._rowRenderer;
                                return var0;
                            };
                            var0._getRowRenderer = var4;
                            var4 = function() { // Environment: var1
                                _fun45742: for (var _fun45742_ip = 0;;) switch (_fun45742_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1._recyclerRef;
                                        if (var1) {
                                            _fun45742_ip = 20;
                                            continue _fun45742
                                        }
                                    case 16:
                                        var1 = undefined;
                                        return var1;
                                    case 20:
                                        var0 = _closure3_slot0;
                                        var1 = var0._recyclerRef;
                                        var0 = var1.getRenderedSize;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0._getRLVRenderedSize = var4;
                            var4 = function() { // Environment: var1
                                _fun45743: for (var _fun45743_ip = 0;;) switch (_fun45743_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1._recyclerRef;
                                        if (var1) {
                                            _fun45743_ip = 20;
                                            continue _fun45743
                                        }
                                    case 16:
                                        var1 = undefined;
                                        return var1;
                                    case 20:
                                        var0 = _closure3_slot0;
                                        var1 = var0._recyclerRef;
                                        var0 = var1.getContentDimension;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0._getContentDimension = var4;
                            var4 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun45744: for (var _fun45744_ip = 0;;) switch (_fun45744_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.applyWindowCorrection;
                                        if (!var1) {
                                            _fun45744_ip = 52;
                                            continue _fun45744
                                        }
                                    case 21:
                                        var0 = _closure3_slot0;
                                        var4 = var0.props;
                                        var3 = var4.applyWindowCorrection;
                                        var2 = arg0;
                                        var1 = arg1;
                                        var0 = arg2;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._applyWindowCorrection = var4;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.children;
                                var0 = var0.props;
                                var3 = _closure3_slot0;
                                var2 = var0.dataProvider;
                                var3._dataProvider = var2;
                                var3 = _closure3_slot0;
                                var2 = var0.layoutProvider;
                                var3._layoutProvider = var2;
                                var3 = _closure3_slot0;
                                var2 = var0.extendedState;
                                var3._extendedState = var2;
                                var1 = _closure3_slot0;
                                var0 = var0.rowRenderer;
                                var1._rowRenderer = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0._initParams = var1;
                            var1 = var0._assertChildType;
                            var1 = var1.bind(var0)();
                            var1 = var3.children;
                            var1 = var1.props;
                            var4 = var1.dataProvider;
                            var0._dataProvider = var4;
                            var4 = var1.layoutProvider;
                            var0._layoutProvider = var4;
                            var4 = var1.extendedState;
                            var0._extendedState = var4;
                            var1 = var1.rowRenderer;
                            var0._rowRenderer = var1;
                            var1 = var0._getWindowCorrection;
                            var1 = var1.bind(var0)(var2, var2, var3);
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var2 = this;
                    var1 = var2._initParams;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillReceivePropsCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45747: for (var _fun45747_ip = 0;;) switch (_fun45747_ip) {
                        case 0:
                            var11 = this;
                            var _closure3_slot0 = var11;
                            var0 = var11._assertChildType;
                            var0 = var0.bind(var11)();
                            var3 = _closure1_slot5;
                            var2 = var3.cloneElement;
                            var0 = var11.props;
                            var1 = var0.children;
                            var5 = _closure1_slot4;
                            var0 = var11.props;
                            var0 = var0.children;
                            var4 = var0.props;
                            var13 = undefined;
                            var0 = {};
                            var4 = var5.bind(var13)(var0, var4);
                            var0 = {};
                            var6 = var11._getRecyclerRef;
                            var0.ref = var6;
                            var6 = var11._onVisibleIndicesChanged;
                            var0.onVisibleIndicesChanged = var6;
                            var6 = var11._onScroll;
                            var0.onScroll = var6;
                            var6 = var11._applyWindowCorrection;
                            var0.applyWindowCorrection = var6;
                            var6 = var11._rlvRowRenderer;
                            var0.rowRenderer = var6;
                            var0 = var5.bind(var13)(var4, var0);
                            var6 = var2.bind(var3)(var1, var0);
                            var5 = _closure1_slot5;
                            var4 = var5.createElement;
                            var0 = _closure1_slot6;
                            var3 = var0.View;
                            var2 = {};
                            var0 = var11.props;
                            var0 = var0.style;
                            if (var0) {
                                _fun45747_ip = 184;
                                continue _fun45747
                            }
                        case 173:
                            var0 = {};
                            var1 = 1;
                            var0.flex = var1;
                            _fun45747_ip = 194;
                            continue _fun45747;
                        case 184:
                            var1 = var11.props;
                            var0 = var1.style;
                        case 194:
                            var2.style = var0;
                            var0 = var11.props;
                            var8 = var0.stickyHeaderIndices;
                            var0 = null;
                            if (!var8) {
                                _fun45747_ip = 405;
                                continue _fun45747
                            }
                        case 217:
                            var14 = _closure1_slot5;
                            var10 = var14.createElement;
                            var9 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var8 = 4;
                            var8 = var15[var8];
                            var8 = var9.bind(var13)(var8);
                            var9 = var8.default;
                            var8 = {};
                            var15 = function arg0() {
                                var2 = _closure3_slot0;
                                var1 = var2._getStickyHeaderRef;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var8.ref = var15;
                            var15 = var11.props;
                            var15 = var15.stickyHeaderIndices;
                            var8.stickyIndices = var15;
                            var15 = var11._getLayoutForIndex;
                            var8.getLayoutForIndex = var15;
                            var15 = var11._getDataForIndex;
                            var8.getDataForIndex = var15;
                            var15 = var11._getLayoutTypeForIndex;
                            var8.getLayoutTypeForIndex = var15;
                            var15 = var11._getExtendedState;
                            var8.getExtendedState = var15;
                            var15 = var11._getRLVRenderedSize;
                            var8.getRLVRenderedSize = var15;
                            var15 = var11._getContentDimension;
                            var8.getContentDimension = var15;
                            var15 = var11._getRowRenderer;
                            var8.getRowRenderer = var15;
                            var15 = var11.props;
                            var15 = var15.overrideRowRenderer;
                            var8.overrideRowRenderer = var15;
                            var15 = var11.props;
                            var15 = var15.renderStickyContainer;
                            var8.renderContainer = var15;
                            var15 = var11._getCurrentWindowCorrection;
                            var8.getWindowCorrection = var15;
                            var0 = var10.bind(var14)(var9, var8);
                        case 405:
                            var8 = var11.props;
                            var8 = var8.stickyFooterIndices;
                            var1 = null;
                            if (!var8) {
                                _fun45747_ip = 630;
                                continue _fun45747
                            }
                        case 424:
                            var10 = _closure1_slot5;
                            var9 = var10.createElement;
                            var8 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var7 = 5;
                            var7 = var14[var7];
                            var7 = var8.bind(var13)(var7);
                            var8 = var7.default;
                            var7 = {};
                            var12 = function arg0() {
                                var2 = _closure3_slot0;
                                var1 = var2._getStickyFooterRef;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var7.ref = var12;
                            var12 = var11.props;
                            var12 = var12.stickyFooterIndices;
                            var7.stickyIndices = var12;
                            var12 = var11._getLayoutForIndex;
                            var7.getLayoutForIndex = var12;
                            var12 = var11._getDataForIndex;
                            var7.getDataForIndex = var12;
                            var12 = var11._getLayoutTypeForIndex;
                            var7.getLayoutTypeForIndex = var12;
                            var12 = var11._getExtendedState;
                            var7.getExtendedState = var12;
                            var12 = var11._getRLVRenderedSize;
                            var7.getRLVRenderedSize = var12;
                            var12 = var11._getContentDimension;
                            var7.getContentDimension = var12;
                            var12 = var11._getRowRenderer;
                            var7.getRowRenderer = var12;
                            var12 = var11.props;
                            var12 = var12.overrideRowRenderer;
                            var7.overrideRowRenderer = var12;
                            var12 = var11.props;
                            var12 = var12.renderStickyContainer;
                            var7.renderContainer = var12;
                            var12 = var11._getCurrentWindowCorrection;
                            var7.getWindowCorrection = var12;
                            var11 = var11.props;
                            var11 = var11.alwaysStickyFooter;
                            var7.alwaysStickBottom = var11;
                            var1 = var9.bind(var10)(var8, var7);
                        case 630:
                            var21 = var5;
                            var20 = var3;
                            var19 = var2;
                            var18 = var6;
                            var17 = var0;
                            var16 = var1;
                            var0 = var21[var4](var20, var19, var18, var17, var16, var15);
                            return var0;
                    }
                };
                var3.renderCompat = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun45750: for (var _fun45750_ip = 0;;) switch (_fun45750_ip) {
                        case 0:
                            var6 = arg2;
                            var1 = this;
                            var0 = var6.applyWindowCorrection;
                            if (!var0) {
                                _fun45750_ip = 40;
                                continue _fun45750
                            }
                        case 15:
                            var5 = var6.applyWindowCorrection;
                            var4 = var1._windowCorrection;
                            var3 = arg0;
                            var2 = arg1;
                            var0 = var5.bind(var6)(var3, var2, var4);
                        case 40:
                            if (var0) {
                                _fun45750_ip = 49;
                                continue _fun45750
                            }
                        case 43:
                            var0 = var1._windowCorrection;
                        case 49:
                            return var0;
                    }
                };
                var2._getWindowCorrection = var1;
                var1 = {};
                var0.propTypes = var1;
                return var0;
            };
            var2 = var2.bind(var0)(var3);
            var1.default = var2;
            var1 = {};
            var3 = 7;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.element;
            var6 = var6.isRequired;
            var1.children = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.arrayOf;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var6 = var7.bind(var8)(var6);
            var1.stickyHeaderIndices = var6;
            var6 = var5[var3];
            var8 = var4.bind(var0)(var6);
            var7 = var8.arrayOf;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.number;
            var6 = var7.bind(var8)(var6);
            var1.stickyFooterIndices = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.overrideRowRenderer = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.object;
            var1.style = var6;
            var6 = var5[var3];
            var6 = var4.bind(var0)(var6);
            var6 = var6.func;
            var1.renderStickyContainer = var6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.func;
            var1.applyWindowCorrection = var3;
            var2.propTypes = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5130, 5131, 5132, 5136, 5134, 5137]);