// lib/native/FastList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var5
        _fun52999: for (var _fun52999_ip = 0;;) switch (_fun52999_ip) {
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
                _fun52999_ip = 74;
                continue _fun52999;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot32 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var5
        _fun53002: for (var _fun53002_ip = 0;;) switch (_fun53002_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53002_ip = 46;
                    continue _fun53002
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53002_ip = 55;
                    continue _fun53002
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53002_ip = 343;
                    continue _fun53002
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53002_ip = 323;
                    continue _fun53002
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53002_ip = 283;
                    continue _fun53002
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53002_ip = 270;
                    continue _fun53002
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
                    _fun53002_ip = 163;
                    continue _fun53002
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53002_ip = 179;
                    continue _fun53002
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53002_ip = 249;
                    continue _fun53002
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53002_ip = 249;
                    continue _fun53002
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53002_ip = 234;
                    continue _fun53002
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53002_ip = 247;
                    continue _fun53002
                }
            case 234:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53002_ip = 265;
                continue _fun53002;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53002_ip = 283;
                continue _fun53002;
            case 270:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53002_ip = 323;
                    continue _fun53002
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
                    _fun53002_ip = 330;
                    continue _fun53002
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53003: for (var _fun53003_ip = 0;;) switch (_fun53003_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53003_ip = 56;
                                continue _fun53003
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
                            _fun53003_ip = 67;
                            continue _fun53003;
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
    var _closure1_slot33 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var5
        _fun53004: for (var _fun53004_ip = 0;;) switch (_fun53004_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53004_ip = 23;
                    continue _fun53004
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53004_ip = 33;
                    continue _fun53004
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
                    _fun53004_ip = 70;
                    continue _fun53004
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53004_ip = 55;
                    continue _fun53004
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() { // Original name: renderDefaultEmpty, environment: var5
        var0 = null;
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() { // Original name: defaultRecyclerKey, environment: var5
        var0 = undefined;
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0) { // Original name: getBatchSize, environment: var5
        var0 = global;
        var2 = var0.Math;
        var1 = var2.ceil;
        var3 = arg0;
        var0 = 4;
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = ['manualRef', 'onScroll', 'onScrollEnd', 'onLayout', 'renderHeader', 'renderFooter', 'renderSection', 'renderItem', 'renderSectionFooter', 'getRecyclerKey', 'onEndReached', 'endReachedThreshold', 'headerSize', 'footerSize', 'sectionSize', 'sectionFooterSize', 'itemSize', 'sections', 'scrollPosValue', 'batchesToRender', 'optimizeListItemRender', 'initialScrollSection', 'initialScrollItem', 'initialScrollOrientation', 'initialScrollStart', 'getAnchorIdFromIndex', 'getAnchorIndexFromId', 'EXPERIMENTAL_enableAnchorWhileScrolling', 'chunkBase', 'disableContentWrappers', 'childrenWrapper', 'stickyHeaderFooter', 'stickySectionsVariant', 'persistantKeys', 'disableRecyclingOnFullCompute', 'disableLegacyGestureHandling', 'viewabilityConfig', 'onViewableItemsChanged', 'debugLayout', 'renderAccessory', 'removeClippedSubviews', 'inActionSheet'];
    var _closure1_slot3 = var0;
    var3 = global;
    var6 = var3.Object;
    var4 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var1);
    var6 = 0;
    var1 = var9[var6];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var9[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var4 = var9[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot11 = var1;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var10 = var4.PixelRatio;
    var _closure1_slot12 = var10;
    var10 = var4.ScrollView;
    var _closure1_slot13 = var10;
    var10 = var4.StyleSheet;
    var4 = var4.findNodeHandle;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var10 = var4.jsxs;
    var _closure1_slot15 = var10;
    var10 = var4.jsx;
    var _closure1_slot16 = var10;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = {
        'top': 0,
        'right': 0,
        'left': 0,
        'bottom': 0
    };
    var _closure1_slot18 = var4;
    var3 = var3.Map;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var14 = var4;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot19 = var3;
    var4 = {};
    var3 = 'SPACER';
    var4.SPACER = var3;
    var3 = 'HEADER';
    var4.HEADER = var3;
    var3 = 'FOOTER';
    var4.FOOTER = var3;
    var3 = 'SECTION';
    var4.SECTION = var3;
    var3 = 'ITEM';
    var4.ITEM = var3;
    var3 = 'SECTION_FOOTER';
    var4.SECTION_FOOTER = var3;
    var _closure1_slot20 = var4;
    var3 = function() { // Environment: var5
        var3 = function(arg0) { // Original name: FastListItemRecycler, environment: var4
            var3 = arg0;
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot9;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var5.bind(var0)(var4, var2);
            var2 = {};
            var4._items = var2;
            var2 = {};
            var4._pendingItems = var2;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var3 = arg0;
                var4 = var3.type;
                var2 = var3.recyclerKey;
                var1 = _closure3_slot0;
                var0 = var1._itemsForType;
                var5 = var0.bind(var1)(var4);
                var4 = _closure1_slot8;
                var0 = undefined;
                var1 = 1;
                var4 = var4.bind(var0)(var5, var1);
                var1 = 0;
                var1 = var4[var1];
                var1[var2] = var3;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot10;
        var0 = {};
        var1 = '_itemsForType';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun53011: for (var _fun53011_ip = 0;;) switch (_fun53011_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = var2._items;
                    var1 = var0[var4];
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun53011_ip = 37;
                        continue _fun53011
                    }
                case 22:
                    var5 = var2._items;
                    var0 = {};
                    var5[var4] = var0;
                    var1 = var0;
                case 37:
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2._pendingItems;
                    var1 = var1[var4];
                    if (!(var3 == var1)) {
                        _fun53011_ip = 76;
                        continue _fun53011
                    }
                case 59:
                    var3 = var2._pendingItems;
                    var2 = new Array(0);
                    var3[var4] = var2;
                    var1 = var2;
                case 76:
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var4
            _fun53012: for (var _fun53012_ip = 0;;) switch (_fun53012_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arguments[4];
                    var5 = arguments[5];
                    var2 = this;
                    var4 = undefined;
                    if (!(var6 === var4)) {
                        _fun53012_ip = 20;
                        continue _fun53012
                    }
                case 18:
                    var6 = 0;
                case 20:
                    if (!(var5 === var4)) {
                        _fun53012_ip = 30;
                        continue _fun53012
                    }
                case 24:
                    var5 = -1;
                case 30:
                    var0 = var2._itemsForType;
                    var3 = var0.bind(var2)(var7);
                    var1 = _closure1_slot8;
                    var0 = 2;
                    var1 = var1.bind(var4)(var3, var0);
                    var0 = 0;
                    var4 = var1[var0];
                    var0 = 1;
                    var3 = var1[var0];
                    var1 = var2._get;
                    var0 = {};
                    var0.type = var7;
                    var7 = arg1;
                    var0.layoutStart = var7;
                    var7 = arg2;
                    var0.layoutSize = var7;
                    var7 = arg3;
                    var0.customKey = var7;
                    var0.section = var6;
                    var0.item = var5;
                    var0.items = var4;
                    var0.pendingItems = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53013: for (var _fun53013_ip = 0;;) switch (_fun53013_ip) {
                case 0:
                    var0 = arg0;
                    var8 = var0.type;
                    var7 = var0.layoutStart;
                    var6 = var0.layoutSize;
                    var2 = var0.customKey;
                    var5 = var0.section;
                    var4 = var0.item;
                    var1 = var0.items;
                    var3 = var0.pendingItems;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun53013_ip = 93;
                        continue _fun53013
                    }
                case 53:
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var11 = var9.concat;
                    var17 = '';
                    var9 = ':';
                    var16 = var8;
                    var15 = var9;
                    var14 = var5;
                    var13 = var9;
                    var12 = var4;
                    var2 = var17[var11](var16, var15, var14, var13, var12, var11);
                case 93:
                    var9 = var1[var2];
                    if (!(var0 != var9)) {
                        _fun53013_ip = 143;
                        continue _fun53013
                    }
                case 101:
                    var0 = {};
                    var16 = var0;
                    var15 = var9;
                    var9 = copyDataProperties(var16, var15);
                    var0.layoutStart = var7;
                    var0.layoutSize = var6;
                    var0.section = var5;
                    var0.item = var4;
                    var1 = delete var1[var2];
                    _fun53013_ip = 195;
                    continue _fun53013;
                case 143:
                    var1 = {};
                    var1.type = var8;
                    var8 = -1;
                    var1.key = var8;
                    var1.layoutStart = var7;
                    var1.layoutSize = var6;
                    var1.section = var5;
                    var1.item = var4;
                    var1.recyclerKey = var2;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var1);
                    var0 = var1;
                case 195:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'fill';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = arg0;
            var _closure3_slot1 = var0;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 10;
            var3 = var3[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.forEach;
            var2 = _closure1_slot20;
            var1 = function(arg0) { // Environment: var1
                var5 = _closure3_slot0;
                var2 = var5._itemsForType;
                var0 = arg0;
                var4 = var2.bind(var5)(var0);
                var3 = _closure1_slot8;
                var0 = undefined;
                var2 = 2;
                var3 = var3.bind(var0)(var4, var2);
                var2 = 0;
                var4 = var3[var2];
                var2 = 1;
                var3 = var3[var2];
                var2 = var5._fill;
                var1 = _closure3_slot1;
                var1 = var2.bind(var5)(var4, var3, var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_fill';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun53016: for (var _fun53016_ip = 0;;) switch (_fun53016_ip) {
                case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var0 = 0;
                    var _closure3_slot1 = var0;
                    var2 = arg2;
                    if (var2) {
                        _fun53016_ip = 65;
                        continue _fun53016
                    }
                case 21:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.forEach;
                    var3 = arg0;
                    var2 = function(arg0) { // Environment: var5
                        _fun53017: for (var _fun53017_ip = 0;;) switch (_fun53017_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.key;
                                var3 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var3[var0];
                                var3 = null;
                                if (!(var3 != var0)) {
                                    _fun53017_ip = 50;
                                    continue _fun53017
                                }
                            case 29:
                                var0.key = var2;
                                var0 = _closure3_slot1;
                                var0 = var0 + 1;
                                _closure3_slot1 = var0;
                                var0 = undefined;
                                return var0;
                            case 50:
                                var0 = false;
                                return var0;
                        }
                    };
                    var2 = var4.bind(var6)(var3, var2);
                case 65:
                    var3 = _closure3_slot1;
                    var2 = var1.length;
                    if (!(var3 < var2)) {
                        _fun53016_ip = 134;
                        continue _fun53016
                    }
                case 81:
                    var2 = _closure3_slot1;
                    var3 = var1[var2];
                    var6 = _closure2_slot0;
                    var2 = var6._LAST_KEY;
                    var2 = var2 + 1;
                    var6._LAST_KEY = var2;
                    var3.key = var2;
                    var2 = _closure3_slot1;
                    var3 = var2 + 1;
                    _closure3_slot1 = var3;
                    var2 = var1.length;
                    if (var3 < var2) {
                        _fun53016_ip = 81;
                        continue _fun53016
                    }
                case 134:
                    var1.length = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot21 = var3;
    var3._LAST_KEY = var6;
    var3 = function() { // Environment: var5
        var3 = _closure1_slot10;
        var2 = function(arg0) { // Original name: FastListComputer, environment: var4
            var3 = arg0;
            var2 = this;
            var4 = _closure1_slot9;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var4 = 0;
            var2.chunkSize = var4;
            var1 = false;
            var2.uniform = var1;
            var5 = new Array(0);
            var2.dataCache = var5;
            var2.size = var4;
            var4 = true;
            var2.dirty = var4;
            var4 = -1;
            var2.lastStartChunk = var4;
            var2.lastEndChunk = var4;
            var4 = new Array(0);
            var2.items = var4;
            var4 = new Array(0);
            var2.persistantItemData = var4;
            var2.disableRecycling = var1;
            var2.props = var3;
            var1 = var2.updateProps;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateProps';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun53020: for (var _fun53020_ip = 0;;) switch (_fun53020_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.dirty;
                    var3 = !var2;
                    var2 = !var3;
                    if (!var3) {
                        _fun53020_ip = 60;
                        continue _fun53020
                    }
                case 21:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var1.props;
                    var3 = var4.bind(var5)(var0, var3);
                    var2 = !var3;
                case 60:
                    var1.dirty = var2;
                    var1.props = var0;
                    var0 = var0.itemSize;
                    var2 = 'number';
                    var0 = typeof var0;
                    var0 = var2 === var0;
                    var1.uniform = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(17);
        var1[0] = var0;
        var0 = {};
        var5 = 'setInfo';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53021: for (var _fun53021_ip = 0;;) switch (_fun53021_ip) {
                case 0:
                    var1 = this;
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.ceil;
                    var4 = arg0;
                    var0 = 4;
                    var0 = var4 / var0;
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.dirty;
                    var3 = !var2;
                    var2 = !var3;
                    if (!var3) {
                        _fun53021_ip = 57;
                        continue _fun53021
                    }
                case 47:
                    var3 = var1.chunkSize;
                    var2 = var0 !== var3;
                case 57:
                    var1.dirty = var2;
                    var1.chunkSize = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getSizeForHeader';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun53022: for (var _fun53022_ip = 0;;) switch (_fun53022_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.headerSize;
                    var1 = undefined;
                    var2 = 0;
                    if (!(var1 !== var0)) {
                        _fun53022_ip = 25;
                        continue _fun53022
                    }
                case 22:
                    var2 = var0;
                case 25:
                    var4 = 'number';
                    var3 = typeof var2;
                    var0 = var2;
                    if (!(var4 !== var3)) {
                        _fun53022_ip = 43;
                        continue _fun53022
                    }
                case 39:
                    var0 = var2.bind(var1)();
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSizeForFooter';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun53023: for (var _fun53023_ip = 0;;) switch (_fun53023_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.footerSize;
                    var1 = undefined;
                    var2 = 0;
                    if (!(var1 !== var0)) {
                        _fun53023_ip = 25;
                        continue _fun53023
                    }
                case 22:
                    var2 = var0;
                case 25:
                    var4 = 'number';
                    var3 = typeof var2;
                    var0 = var2;
                    if (!(var4 !== var3)) {
                        _fun53023_ip = 43;
                        continue _fun53023
                    }
                case 39:
                    var0 = var2.bind(var1)();
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getSizeForSection';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53024: for (var _fun53024_ip = 0;;) switch (_fun53024_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.sectionSize;
                    var2 = undefined;
                    var3 = 0;
                    if (!(var2 !== var0)) {
                        _fun53024_ip = 25;
                        continue _fun53024
                    }
                case 22:
                    var3 = var0;
                case 25:
                    var4 = 'number';
                    var1 = typeof var3;
                    var0 = var3;
                    if (!(var4 !== var1)) {
                        _fun53024_ip = 47;
                        continue _fun53024
                    }
                case 39:
                    var1 = arg0;
                    var0 = var3.bind(var2)(var1);
                case 47:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getSizeForItem';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun53025: for (var _fun53025_ip = 0;;) switch (_fun53025_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var4 = var0.itemSize;
                    var2 = 'number';
                    var1 = typeof var4;
                    var0 = var4;
                    if (!(var2 !== var1)) {
                        _fun53025_ip = 42;
                        continue _fun53025
                    }
                case 28:
                    var3 = undefined;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = var4.bind(var3)(var2, var1);
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getSizeForSectionFooter';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53026: for (var _fun53026_ip = 0;;) switch (_fun53026_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.sectionFooterSize;
                    var2 = undefined;
                    var3 = 0;
                    if (!(var2 !== var0)) {
                        _fun53026_ip = 25;
                        continue _fun53026
                    }
                case 22:
                    var3 = var0;
                case 25:
                    var4 = 'number';
                    var1 = typeof var3;
                    var0 = var3;
                    if (!(var4 !== var1)) {
                        _fun53026_ip = 47;
                        continue _fun53026
                    }
                case 39:
                    var1 = arg0;
                    var0 = var3.bind(var2)(var1);
                case 47:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getChunk';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53027: for (var _fun53027_ip = 0;;) switch (_fun53027_ip) {
                case 0:
                    var8 = arg0;
                    var0 = this;
                    var7 = var0.dataCache;
                    var1 = var7.length;
                    var6 = 1;
                    var5 = var1 - var6;
                    var1 = var0.chunkCache;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun53027_ip = 66;
                        continue _fun53027
                    }
                case 36:
                    var1 = var0.chunkCache;
                    var1 = var1.start;
                    if (!(var8 >= var1)) {
                        _fun53027_ip = 66;
                        continue _fun53027
                    }
                case 51:
                    var1 = var0.chunkCache;
                    var1 = var1.end;
                    if (!(!(var8 <= var1))) {
                        _fun53027_ip = 168;
                        continue _fun53027
                    }
                case 66:
                    var2 = 2;
                    var3 = 0;
                    if (!(var3 <= var5)) {
                        _fun53027_ip = 164;
                        continue _fun53027
                    }
                case 75:
                    var1 = var5 - var3;
                    var1 = var1 / var2;
                    var1 = var1 | 0;
                    var10 = var3 + var1;
                    var1 = var7[var10];
                    if (!(var4 != var1)) {
                        _fun53027_ip = 164;
                        continue _fun53027
                    }
                case 98:
                    var9 = var1.start;
                    if (!(var8 >= var9)) {
                        _fun53027_ip = 116;
                        continue _fun53027
                    }
                case 107:
                    var9 = var1.end;
                    if (!(!(var8 <= var9))) {
                        _fun53027_ip = 156;
                        continue _fun53027
                    }
                case 116:
                    var9 = var1.start;
                    if (!(!(var8 < var9))) {
                        _fun53027_ip = 140;
                        continue _fun53027
                    }
                case 125:
                    var9 = var1.end;
                    if (!(var8 > var9)) {
                        _fun53027_ip = 164;
                        continue _fun53027
                    }
                case 134:
                    var9 = var10 + var6;
                    _fun53027_ip = 147;
                    continue _fun53027;
                case 140:
                    var5 = var10 - var6;
                    var9 = var3;
                case 147:
                    var3 = var9;
                    if (var3 <= var5) {
                        _fun53027_ip = 75;
                        continue _fun53027
                    }
                case 154:
                    _fun53027_ip = 164;
                    continue _fun53027;
                case 156:
                    var0.chunkCache = var1;
                    return var1;
                case 164:
                    var1 = undefined;
                    return var1;
                case 168:
                    var0 = var0.chunkCache;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'compute';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun53028: for (var _fun53028_ip = 0;;) switch (_fun53028_ip) {
                case 0:
                    var7 = arg0;
                    var12 = arg1;
                    var0 = arguments[3];
                    var2 = this;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var12;
                    var11 = undefined;
                    if (!(var0 === var11)) {
                        _fun53028_ip = 30;
                        continue _fun53028
                    }
                case 28:
                    var0 = false;
                case 30:
                    var _closure3_slot2 = var0;
                    var _closure3_slot3 = var11;
                    var _closure3_slot4 = var11;
                    var _closure3_slot5 = var11;
                    var _closure3_slot6 = var11;
                    var27 = function(arg0, arg1, arg2, arg3) { // Original name: addInitialSection, environment: var3
                        _fun53029: for (var _fun53029_ip = 0;;) switch (_fun53029_ip) {
                            case 0:
                                var12 = arg0;
                                var3 = arg1;
                                var2 = arg2;
                                var4 = arg3;
                                var8 = _closure3_slot4;
                                var7 = var8.push;
                                var11 = _closure3_slot5;
                                var10 = var11.get;
                                var0 = _closure1_slot20;
                                var9 = var0.SECTION;
                                var13 = _closure3_slot3;
                                var6 = var0.SECTION;
                                var0 = undefined;
                                var16 = var13.bind(var0)(var6, var12);
                                var20 = var11;
                                var19 = var9;
                                var18 = var3;
                                var17 = var2;
                                var15 = var12;
                                var6 = var20[var10](var19, var18, var17, var16, var15, var14);
                                var6 = var7.bind(var8)(var6);
                                var9 = var3 + var2;
                                if (!(var9 < var4)) {
                                    _fun53029_ip = 162;
                                    continue _fun53029
                                }
                            case 96:
                                var2 = _closure3_slot6;
                                var2 = var2 + 1;
                                _closure3_slot6 = var2;
                                var3 = _closure3_slot4;
                                var2 = var3.push;
                                var8 = _closure3_slot5;
                                var7 = var8.get;
                                var5 = _closure1_slot20;
                                var19 = var5.SPACER;
                                var17 = var4 - var9;
                                var14 = _closure3_slot6;
                                var15 = 0;
                                var20 = var8;
                                var18 = var9;
                                var16 = undefined;
                                var1 = var20[var7](var19, var18, var17, var16, var15, var14, var13);
                                var1 = var2.bind(var3)(var1);
                            case 162:
                                return var0;
                        }
                    };
                    var26 = function(arg0, arg1) { // Original name: isVisible, environment: var3
                        _fun53030: for (var _fun53030_ip = 0;;) switch (_fun53030_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot2;
                                var0 = !var0;
                                if (var0) {
                                    _fun53030_ip = 45;
                                    continue _fun53030
                                }
                            case 16:
                                var4 = _closure3_slot0;
                                var1 = arg1;
                                var1 = var4 - var1;
                                var1 = var3 >= var1;
                                if (!var1) {
                                    _fun53030_ip = 42;
                                    continue _fun53030
                                }
                            case 34:
                                var2 = _closure3_slot1;
                                var1 = var3 < var2;
                            case 42:
                                var0 = var1;
                            case 45:
                                return var0;
                        }
                    };
                    var0 = var2.dirty;
                    if (var0) {
                        _fun53028_ip = 115;
                        continue _fun53028
                    }
                case 69:
                    var0 = var2.lastStartChunk;
                    var6 = false;
                    if (!(var7 === var0)) {
                        _fun53028_ip = 127;
                        continue _fun53028
                    }
                case 81:
                    var0 = var2.lastEndChunk;
                    var6 = false;
                    if (!(var12 === var0)) {
                        _fun53028_ip = 127;
                        continue _fun53028
                    }
                case 93:
                    var0 = {};
                    var1 = var2.size;
                    var0.size = var1;
                    var1 = var2.items;
                    var0.items = var1;
                    return var0;
                case 115:
                    var0 = var2.fullCompute;
                    var0 = var0.bind(var2)();
                    var6 = true;
                case 127:
                    var0 = var2.props;
                    var13 = var0.stickyHeaderFooter;
                    var25 = var0.getRecyclerKey;
                    if (!(var11 === var25)) {
                        _fun53028_ip = 155;
                        continue _fun53028
                    }
                case 148:
                    var25 = _closure1_slot36;
                case 155:
                    _closure3_slot3 = var25;
                    var2.lastStartChunk = var7;
                    var2.lastEndChunk = var12;
                    var15 = global;
                    var0 = var15.Map;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var62 = var1;
                    var0 = new var62[var0](var61);
                    var5 = var0 instanceof Object ? var0 : var1;
                    var1 = _closure1_slot33;
                    var0 = var2.persistantItemData;
                    var4 = var1.bind(var11)(var0);
                    var1 = var4.bind(var11)();
                    var0 = var1.done;
                    var14 = null;
                    if (var0) {
                        _fun53028_ip = 309;
                        continue _fun53028
                    }
                case 231:
                    var9 = var1.value;
                    var16 = var9.type;
                    var8 = var9.section;
                    var18 = var9.type;
                    var0 = _closure1_slot20;
                    var17 = var0.ITEM;
                    var0 = undefined;
                    if (!(var18 === var17)) {
                        _fun53028_ip = 272;
                        continue _fun53028
                    }
                case 267:
                    var0 = var9.item;
                case 272:
                    var8 = var25.bind(var11)(var16, var8, var0);
                    if (!(var14 != var8)) {
                        _fun53028_ip = 294;
                        continue _fun53028
                    }
                case 283:
                    var0 = var5.set;
                    var0 = var0.bind(var5)(var8, var9);
                case 294:
                    var8 = var4.bind(var11)();
                    var0 = var8.done;
                    var1 = var8;
                    if (!var0) {
                        _fun53028_ip = 231;
                        continue _fun53028
                    }
                case 309:
                    var4 = var15.Math;
                    var1 = var4.floor;
                    var0 = var2.chunkSize;
                    var0 = var7 / var0;
                    var0 = var1.bind(var4)(var0);
                    var7 = var15.Math;
                    var4 = var7.max;
                    var9 = var15.Math;
                    var8 = var9.ceil;
                    var1 = var2.chunkSize;
                    var1 = var12 / var1;
                    var1 = var8.bind(var9)(var1);
                    var24 = var4.bind(var7)(var1, var0);
                    var1 = var2.chunkSize;
                    var23 = var0 * var1;
                    var1 = new Array(0);
                    var2.items = var1;
                    _closure3_slot4 = var1;
                    var8 = _closure1_slot21;
                    var4 = var8.prototype;
                    var7 = Object.create(var4, {
                        constructor: {
                            value: var8
                        }
                    });
                    var61 = arg2;
                    var62 = var7;
                    var4 = new var62[var8](var61, var60);
                    var4 = var4 instanceof Object ? var4 : var7;
                    _closure3_slot5 = var4;
                    var21 = {
                        'initialSection': 4294967295,
                        'initialItem': 4294967295,
                        'lastSection': 4294967295,
                        'lastItem': 4294967295
                    };
                    var22 = -1;
                    var9 = 0;
                    _closure3_slot6 = var9;
                    var3 = var15.Set;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var62 = var7;
                    var3 = new var62[var3](var61);
                    var3 = var3 instanceof Object ? var3 : var7;
                    if (!(var0 <= var24)) {
                        _fun53028_ip = 526;
                        continue _fun53028
                    }
                case 491:
                    var7 = var2.getChunk;
                    var12 = var7.bind(var2)(var0);
                    var7 = var0;
                    if (!(var14 != var12)) {
                        _fun53028_ip = 519;
                        continue _fun53028
                    }
                case 509:
                    var8 = var3.add;
                    var8 = var8.bind(var3)(var12);
                case 519:
                    var0 = var7 + 1;
                    if (var0 <= var24) {
                        _fun53028_ip = 491;
                        continue _fun53028
                    }
                case 526:
                    var0 = _closure1_slot33;
                    var20 = var0.bind(var11)(var3);
                    var3 = var20.bind(var11)();
                    var0 = var3.done;
                    var19 = var3;
                    var18 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var3 = undefined;
                    if (var0) {
                        _fun53028_ip = 2253;
                        continue _fun53028
                    }
                case 567:
                    var0 = var19.value;
                    var34 = var23;
                    var32 = var16;
                    var31 = var12;
                    var30 = var8;
                    var29 = var7;
                    var28 = var3;
                    if (!(var14 != var0)) {
                        _fun53028_ip = 2217;
                        continue _fun53028
                    }
                case 597:
                    var33 = _closure1_slot33;
                    var0 = var0.data;
                    var40 = var33.bind(var11)(var0);
                    var41 = var40.bind(var11)();
                    var0 = var41.done;
                    var39 = var23;
                    var38 = var41;
                    var37 = var12;
                    var36 = var8;
                    var35 = var7;
                    var33 = var3;
                    var34 = var39;
                    var18 = var38;
                    var17 = var40;
                    var32 = var16;
                    var31 = var37;
                    var30 = var36;
                    var29 = var35;
                    var28 = var33;
                    if (var0) {
                        _fun53028_ip = 2217;
                        continue _fun53028
                    }
                case 668:
                    var45 = var38.value;
                    var41 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var0 = var41 + var0;
                    var47 = var39;
                    var44 = var37;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                    if (!(!(var0 < var39))) {
                        _fun53028_ip = 2160;
                        continue _fun53028
                    }
                case 711:
                    var46 = var45.type;
                    var0 = _closure1_slot20;
                    var0 = var0.HEADER;
                    if (!(var0 !== var46)) {
                        _fun53028_ip = 2065;
                        continue _fun53028
                    }
                case 733:
                    var0 = _closure1_slot20;
                    var0 = var0.SECTION;
                    if (!(var0 !== var46)) {
                        _fun53028_ip = 1857;
                        continue _fun53028
                    }
                case 750:
                    var0 = _closure1_slot20;
                    var0 = var0.ITEM;
                    if (!(var0 !== var46)) {
                        _fun53028_ip = 1095;
                        continue _fun53028
                    }
                case 767:
                    var0 = _closure1_slot20;
                    var0 = var0.SECTION_FOOTER;
                    if (!(var0 !== var46)) {
                        _fun53028_ip = 916;
                        continue _fun53028
                    }
                case 784:
                    var0 = _closure1_slot20;
                    var0 = var0.FOOTER;
                    var47 = var39;
                    var44 = var37;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                    if (!(var0 === var46)) {
                        _fun53028_ip = 2160;
                        continue _fun53028
                    }
                case 816:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var0 = var26.bind(var11)(var46, var0);
                    if (!var0) {
                        _fun53028_ip = 883;
                        continue _fun53028
                    }
                case 837:
                    var46 = var1.push;
                    var50 = var4.get;
                    var0 = _closure1_slot20;
                    var61 = var0.FOOTER;
                    var60 = var45.layoutStart;
                    var59 = var45.layoutSize;
                    var62 = var4;
                    var58 = undefined;
                    var0 = var62[var50](var61, var60, var59, var58, var57);
                    var0 = var46.bind(var1)(var0);
                case 883:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var47 = var46 + var0;
                    var44 = var37;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                    _fun53028_ip = 2160;
                    continue _fun53028;
                case 916:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var0 = var26.bind(var11)(var46, var0);
                    if (!var0) {
                        _fun53028_ip = 1062;
                        continue _fun53028
                    }
                case 940:
                    var0 = var1.length;
                    if (!(var9 === var0)) {
                        _fun53028_ip = 990;
                        continue _fun53028
                    }
                case 949:
                    var61 = var45.section;
                    var0 = var45.sectionData;
                    var60 = var0.layoutStart;
                    var0 = var45.sectionData;
                    var59 = var0.layoutSize;
                    var58 = var45.layoutStart;
                    var62 = undefined;
                    var0 = var62[var27](var61, var60, var59, var58, var57);
                case 990:
                    var46 = var1.push;
                    var52 = var4.get;
                    var0 = _closure1_slot20;
                    var51 = var0.SECTION_FOOTER;
                    var50 = var45.layoutStart;
                    var59 = var45.layoutSize;
                    var48 = var0.SECTION_FOOTER;
                    var0 = var45.section;
                    var58 = var25.bind(var11)(var48, var0);
                    var57 = var45.section;
                    var62 = var4;
                    var61 = var51;
                    var60 = var50;
                    var0 = var62[var52](var61, var60, var59, var58, var57, var56);
                    var0 = var46.bind(var1)(var0);
                case 1062:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var47 = var46 + var0;
                    var44 = var37;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                    _fun53028_ip = 2160;
                    continue _fun53028;
                case 1095:
                    var0 = var45.uniform;
                    if (!(var14 != var0)) {
                        _fun53028_ip = 1566;
                        continue _fun53028
                    }
                case 1108:
                    var0 = var45.layoutStart;
                    var0 = var39 > var0;
                    var50 = 0;
                    if (!var0) {
                        _fun53028_ip = 1160;
                        continue _fun53028
                    }
                case 1123:
                    var48 = var15.Math;
                    var46 = var48.floor;
                    var0 = var45.layoutStart;
                    var49 = var39 - var0;
                    var0 = var45.itemSize;
                    var0 = var49 / var0;
                    var50 = var46.bind(var48)(var0);
                case 1160:
                    var46 = var45.layoutStart;
                    var0 = var45.itemSize;
                    var0 = var0 * var50;
                    var51 = var46 + var0;
                    var0 = var2.chunkSize;
                    var0 = var24 * var0;
                    var47 = var51;
                    var44 = var37;
                    var43 = var36;
                    var42 = var50;
                    var41 = var33;
                    if (!(var51 < var0)) {
                        _fun53028_ip = 2160;
                        continue _fun53028
                    }
                case 1212:
                    var0 = var45.items;
                    var49 = var51;
                    var48 = var50;
                    var46 = var33;
                    var47 = var49;
                    var44 = var37;
                    var43 = var36;
                    var41 = var46;
                    var42 = var48;
                    if (!(var42 < var0)) {
                        _fun53028_ip = 2160;
                        continue _fun53028
                    }
                case 1248:
                    var0 = var45.itemSize;
                    var0 = var26.bind(var11)(var49, var0);
                    var50 = var49;
                    if (!var0) {
                        _fun53028_ip = 1477;
                        continue _fun53028
                    }
                case 1269:
                    var0 = var1.length;
                    if (!(var9 === var0)) {
                        _fun53028_ip = 1316;
                        continue _fun53028
                    }
                case 1278:
                    var61 = var45.section;
                    var0 = var45.sectionData;
                    var60 = var0.layoutStart;
                    var0 = var45.sectionData;
                    var59 = var0.layoutSize;
                    var62 = undefined;
                    var58 = var50;
                    var0 = var62[var27](var61, var60, var59, var58, var57);
                case 1316:
                    var0 = var21.initialSection;
                    if (!(var22 === var0)) {
                        _fun53028_ip = 1337;
                        continue _fun53028
                    }
                case 1326:
                    var0 = var45.section;
                    var21.initialSection = var0;
                case 1337:
                    var0 = var21.initialItem;
                    if (!(var22 === var0)) {
                        _fun53028_ip = 1353;
                        continue _fun53028
                    }
                case 1347:
                    var21.initialItem = var48;
                case 1353:
                    var0 = var45.section;
                    var21.lastSection = var0;
                    var21.lastItem = var48;
                    var0 = _closure1_slot20;
                    var51 = var0.ITEM;
                    var0 = var45.section;
                    var0 = var25.bind(var11)(var51, var0, var48);
                    var51 = var14 != var0;
                    if (!var51) {
                        _fun53028_ip = 1409;
                        continue _fun53028
                    }
                case 1399:
                    var52 = var5.has;
                    var51 = var52.bind(var5)(var0);
                case 1409:
                    if (!var51) {
                        _fun53028_ip = 1422;
                        continue _fun53028
                    }
                case 1412:
                    var51 = var5.delete;
                    var51 = var51.bind(var5)(var0);
                case 1422:
                    var52 = var1.push;
                    var55 = var4.get;
                    var51 = _closure1_slot20;
                    var61 = var51.ITEM;
                    var59 = var45.itemSize;
                    var57 = var45.section;
                    var62 = var4;
                    var60 = var50;
                    var58 = var0;
                    var56 = var48;
                    var51 = var62[var55](var61, var60, var59, var58, var57, var56, var55);
                    var51 = var52.bind(var1)(var51);
                    var46 = var0;
                case 1477:
                    var0 = var45.itemSize;
                    var52 = var50 + var0;
                    var50 = var48 + 1;
                    var0 = var2.chunkSize;
                    var0 = var24 * var0;
                    var51 = var46;
                    var47 = var52;
                    var44 = var37;
                    var43 = var36;
                    var42 = var50;
                    var41 = var51;
                    if (!(var52 < var0)) {
                        _fun53028_ip = 2160;
                        continue _fun53028
                    }
                case 1525:
                    var0 = var45.items;
                    var49 = var52;
                    var48 = var50;
                    var46 = var51;
                    var47 = var49;
                    var44 = var37;
                    var43 = var36;
                    var41 = var46;
                    var42 = var48;
                    if (var42 < var0) {
                        _fun53028_ip = 1248;
                        continue _fun53028
                    }
                case 1561:
                    _fun53028_ip = 2160;
                    continue _fun53028;
                case 1566:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var46 = var26.bind(var11)(var46, var0);
                    var0 = var36;
                    if (!var46) {
                        _fun53028_ip = 1824;
                        continue _fun53028
                    }
                case 1593:
                    var46 = var1.length;
                    if (!(var9 === var46)) {
                        _fun53028_ip = 1643;
                        continue _fun53028
                    }
                case 1602:
                    var61 = var45.section;
                    var46 = var45.sectionData;
                    var60 = var46.layoutStart;
                    var46 = var45.sectionData;
                    var59 = var46.layoutSize;
                    var58 = var45.layoutStart;
                    var62 = undefined;
                    var46 = var62[var27](var61, var60, var59, var58, var57);
                case 1643:
                    var46 = var21.initialSection;
                    if (!(var22 === var46)) {
                        _fun53028_ip = 1664;
                        continue _fun53028
                    }
                case 1653:
                    var46 = var45.section;
                    var21.initialSection = var46;
                case 1664:
                    var46 = var21.initialItem;
                    if (!(var22 === var46)) {
                        _fun53028_ip = 1685;
                        continue _fun53028
                    }
                case 1674:
                    var46 = var45.item;
                    var21.initialItem = var46;
                case 1685:
                    var46 = var45.section;
                    var21.lastSection = var46;
                    var46 = var45.item;
                    var21.lastItem = var46;
                    var46 = _closure1_slot20;
                    var49 = var46.ITEM;
                    var48 = var45.section;
                    var46 = var45.item;
                    var46 = var25.bind(var11)(var49, var48, var46);
                    var48 = var14 != var46;
                    if (!var48) {
                        _fun53028_ip = 1751;
                        continue _fun53028
                    }
                case 1741:
                    var49 = var5.has;
                    var48 = var49.bind(var5)(var46);
                case 1751:
                    if (!var48) {
                        _fun53028_ip = 1764;
                        continue _fun53028
                    }
                case 1754:
                    var48 = var5.delete;
                    var48 = var48.bind(var5)(var46);
                case 1764:
                    var49 = var1.push;
                    var54 = var4.get;
                    var48 = _closure1_slot20;
                    var61 = var48.ITEM;
                    var60 = var45.layoutStart;
                    var59 = var45.layoutSize;
                    var57 = var45.section;
                    var56 = var45.item;
                    var62 = var4;
                    var58 = var46;
                    var48 = var62[var54](var61, var60, var59, var58, var57, var56, var55);
                    var48 = var49.bind(var1)(var48);
                    var0 = var46;
                case 1824:
                    var48 = var45.layoutStart;
                    var46 = var45.layoutSize;
                    var47 = var48 + var46;
                    var43 = var0;
                    var44 = var37;
                    var42 = var35;
                    var41 = var33;
                    _fun53028_ip = 2160;
                    continue _fun53028;
                case 1857:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var46 = var26.bind(var11)(var46, var0);
                    var0 = var37;
                    if (!var46) {
                        _fun53028_ip = 2035;
                        continue _fun53028
                    }
                case 1884:
                    var46 = var21.initialSection;
                    if (!(var22 !== var46)) {
                        _fun53028_ip = 1907;
                        continue _fun53028
                    }
                case 1894:
                    var46 = var45.section;
                    var21.lastSection = var46;
                    _fun53028_ip = 1929;
                    continue _fun53028;
                case 1907:
                    var46 = var45.section;
                    var21.initialSection = var46;
                    var46 = var45.section;
                    var21.lastSection = var46;
                case 1929:
                    var46 = _closure1_slot20;
                    var48 = var46.SECTION;
                    var46 = var45.section;
                    var46 = var25.bind(var11)(var48, var46);
                    var48 = var14 != var46;
                    if (!var48) {
                        _fun53028_ip = 1967;
                        continue _fun53028
                    }
                case 1957:
                    var49 = var5.has;
                    var48 = var49.bind(var5)(var46);
                case 1967:
                    if (!var48) {
                        _fun53028_ip = 1980;
                        continue _fun53028
                    }
                case 1970:
                    var48 = var5.delete;
                    var48 = var48.bind(var5)(var46);
                case 1980:
                    var49 = var1.push;
                    var53 = var4.get;
                    var48 = _closure1_slot20;
                    var61 = var48.SECTION;
                    var60 = var45.layoutStart;
                    var59 = var45.layoutSize;
                    var57 = var45.section;
                    var62 = var4;
                    var58 = var46;
                    var48 = var62[var53](var61, var60, var59, var58, var57, var56);
                    var48 = var49.bind(var1)(var48);
                    var0 = var46;
                case 2035:
                    var48 = var45.layoutStart;
                    var46 = var45.layoutSize;
                    var47 = var48 + var46;
                    var44 = var0;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                    _fun53028_ip = 2160;
                    continue _fun53028;
                case 2065:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var0 = var26.bind(var11)(var46, var0);
                    if (!var0) {
                        _fun53028_ip = 2132;
                        continue _fun53028
                    }
                case 2086:
                    var46 = var1.push;
                    var50 = var4.get;
                    var0 = _closure1_slot20;
                    var61 = var0.HEADER;
                    var60 = var45.layoutStart;
                    var59 = var45.layoutSize;
                    var62 = var4;
                    var58 = undefined;
                    var0 = var62[var50](var61, var60, var59, var58, var57);
                    var0 = var46.bind(var1)(var0);
                case 2132:
                    var46 = var45.layoutStart;
                    var0 = var45.layoutSize;
                    var47 = var46 + var0;
                    var44 = var37;
                    var43 = var36;
                    var42 = var35;
                    var41 = var33;
                case 2160:
                    var46 = var40.bind(var11)();
                    var0 = var46.done;
                    var39 = var47;
                    var37 = var44;
                    var36 = var43;
                    var35 = var42;
                    var33 = var41;
                    var38 = var46;
                    var34 = var39;
                    var18 = var38;
                    var17 = var40;
                    var32 = var45;
                    var31 = var37;
                    var30 = var36;
                    var29 = var35;
                    var28 = var33;
                    if (!var0) {
                        _fun53028_ip = 668;
                        continue _fun53028
                    }
                case 2217:
                    var33 = var20.bind(var11)();
                    var0 = var33.done;
                    var23 = var34;
                    var16 = var32;
                    var12 = var31;
                    var8 = var30;
                    var7 = var29;
                    var3 = var28;
                    var19 = var33;
                    if (!var0) {
                        _fun53028_ip = 567;
                        continue _fun53028
                    }
                case 2253:
                    var12 = new Array(0);
                    var3 = new Array(0);
                    var0 = _closure1_slot33;
                    var20 = var0.bind(var11)(var5);
                    var5 = var20.bind(var11)();
                    var0 = var5.done;
                    var8 = 2;
                    var7 = 1;
                    var19 = var5;
                    var18 = 0;
                    var16 = 0;
                    var17 = 0;
                    var5 = 0;
                    if (var0) {
                        _fun53028_ip = 2601;
                        continue _fun53028
                    }
                case 2302:
                    var22 = var19.value;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var11)(var22, var8);
                    var27 = var0[var9];
                    var26 = var0[var7];
                    var22 = var26.section;
                    var0 = var21.initialSection;
                    if (!(!(var22 < var0))) {
                        _fun53028_ip = 2536;
                        continue _fun53028
                    }
                case 2343:
                    var22 = var26.section;
                    var0 = var21.lastSection;
                    if (!(!(var22 > var0))) {
                        _fun53028_ip = 2499;
                        continue _fun53028
                    }
                case 2361:
                    var24 = var26.type;
                    var0 = _closure1_slot20;
                    var0 = var0.ITEM;
                    var23 = var18;
                    var22 = var16;
                    if (!(var24 === var0)) {
                        _fun53028_ip = 2571;
                        continue _fun53028
                    }
                case 2389:
                    var24 = var26.section;
                    var0 = var21.initialSection;
                    if (!(var24 === var0)) {
                        _fun53028_ip = 2419;
                        continue _fun53028
                    }
                case 2404:
                    var24 = var26.item;
                    var0 = var21.initialItem;
                    if (!(!(var24 < var0))) {
                        _fun53028_ip = 2456;
                        continue _fun53028
                    }
                case 2419:
                    var0 = var26.layoutSize;
                    var0 = var16 + var0;
                    var25 = var3.push;
                    var24 = new Array(2);
                    var24[0] = var27;
                    var24[1] = var26;
                    var24 = var25.bind(var3)(var24);
                    var24 = var18;
                    _fun53028_ip = 2491;
                    continue _fun53028;
                case 2456:
                    var25 = var26.layoutSize;
                    var24 = var18 + var25;
                    var29 = var12.push;
                    var28 = new Array(2);
                    var28[0] = var27;
                    var28[1] = var26;
                    var28 = var29.bind(var12)(var28);
                    var0 = var16;
                case 2491:
                    var23 = var24;
                    var22 = var0;
                    _fun53028_ip = 2571;
                    continue _fun53028;
                case 2499:
                    var0 = var26.layoutSize;
                    var22 = var16 + var0;
                    var25 = var3.push;
                    var24 = new Array(2);
                    var24[0] = var27;
                    var24[1] = var26;
                    var24 = var25.bind(var3)(var24);
                    var23 = var18;
                    _fun53028_ip = 2571;
                    continue _fun53028;
                case 2536:
                    var0 = var26.layoutSize;
                    var23 = var18 + var0;
                    var25 = var12.push;
                    var24 = new Array(2);
                    var24[0] = var27;
                    var24[1] = var26;
                    var24 = var25.bind(var12)(var24);
                    var22 = var16;
                case 2571:
                    var24 = var20.bind(var11)();
                    var0 = var24.done;
                    var18 = var23;
                    var16 = var22;
                    var19 = var24;
                    var17 = var18;
                    var5 = var16;
                    if (!var0) {
                        _fun53028_ip = 2302;
                        continue _fun53028
                    }
                case 2601:
                    var0 = var1[var9];
                    if (!(var14 != var0)) {
                        _fun53028_ip = 3045;
                        continue _fun53028
                    }
                case 2612:
                    var16 = var0.layoutStart;
                    if (!(var16 > var9)) {
                        _fun53028_ip = 3045;
                        continue _fun53028
                    }
                case 2625:
                    var16 = var2.headerDataCache;
                    var23 = var0.layoutStart;
                    var18 = var13;
                    if (!var13) {
                        _fun53028_ip = 2647;
                        continue _fun53028
                    }
                case 2643:
                    var18 = var14 != var16;
                case 2647:
                    if (!var18) {
                        _fun53028_ip = 2663;
                        continue _fun53028
                    }
                case 2650:
                    var19 = var0.type;
                    var0 = 'HEADER';
                    var18 = var0 !== var19;
                case 2663:
                    var0 = var23;
                    if (!var18) {
                        _fun53028_ip = 2824;
                        continue _fun53028
                    }
                case 2672:
                    var18 = var16.layoutStart;
                    var19 = var23 - var18;
                    var18 = var16.layoutSize;
                    var18 = var19 - var18;
                    if (!(var18 > var9)) {
                        _fun53028_ip = 2771;
                        continue _fun53028
                    }
                case 2696:
                    var19 = var1.unshift;
                    var22 = var4.get;
                    var18 = _closure1_slot20;
                    var61 = var18.SPACER;
                    var20 = var16.layoutStart;
                    var18 = var16.layoutSize;
                    var60 = var20 + var18;
                    var18 = var16.layoutStart;
                    var23 = var23 - var18;
                    var18 = var16.layoutSize;
                    var59 = var23 - var18;
                    var62 = var4;
                    var58 = undefined;
                    var57 = 0;
                    var56 = 0;
                    var18 = var62[var22](var61, var60, var59, var58, var57, var56, var55);
                    var18 = var19.bind(var1)(var18);
                case 2771:
                    var19 = var1.unshift;
                    var22 = var4.get;
                    var18 = _closure1_slot20;
                    var61 = var18.HEADER;
                    var60 = var16.layoutStart;
                    var59 = var16.layoutSize;
                    var62 = var4;
                    var58 = undefined;
                    var18 = var62[var22](var61, var60, var59, var58, var57);
                    var18 = var19.bind(var1)(var18);
                    var0 = var16.layoutStart;
                case 2824:
                    var16 = var15.Math;
                    var15 = var16.max;
                    var0 = var0 - var17;
                    var16 = var15.bind(var16)(var0, var9);
                    var0 = _closure1_slot33;
                    var15 = var0.bind(var11)(var12);
                    var12 = var15.bind(var11)();
                    var0 = var12.done;
                    if (var0) {
                        _fun53028_ip = 2996;
                        continue _fun53028
                    }
                case 2869:
                    var17 = var12.value;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var11)(var17, var8);
                    var23 = var0[var9];
                    var24 = var0[var7];
                    var17 = var1.unshift;
                    var22 = var4.get;
                    var21 = var24.type;
                    var20 = var24.layoutStart;
                    var19 = var24.layoutSize;
                    var18 = var24.section;
                    var26 = var24.type;
                    var0 = _closure1_slot20;
                    var25 = var0.ITEM;
                    var0 = undefined;
                    if (!(var26 === var25)) {
                        _fun53028_ip = 2951;
                        continue _fun53028
                    }
                case 2946:
                    var0 = var24.item;
                case 2951:
                    var62 = var4;
                    var61 = var21;
                    var60 = var20;
                    var59 = var19;
                    var58 = var23;
                    var57 = var18;
                    var56 = var0;
                    var0 = var62[var22](var61, var60, var59, var58, var57, var56, var55);
                    var0 = var17.bind(var1)(var0);
                    var17 = var15.bind(var11)();
                    var0 = var17.done;
                    var12 = var17;
                    if (!var0) {
                        _fun53028_ip = 2869;
                        continue _fun53028
                    }
                case 2996:
                    if (!(var16 > var9)) {
                        _fun53028_ip = 3045;
                        continue _fun53028
                    }
                case 3000:
                    var12 = var1.unshift;
                    var15 = var4.get;
                    var0 = _closure1_slot20;
                    var61 = var0.SPACER;
                    var62 = var4;
                    var60 = 0;
                    var59 = var16;
                    var58 = undefined;
                    var57 = 0;
                    var56 = var7;
                    var0 = var62[var15](var61, var60, var59, var58, var57, var56, var55);
                    var0 = var12.bind(var1)(var0);
                case 3045:
                    var0 = var1.length;
                    var0 = var0 - var7;
                    var0 = var1[var0];
                    if (!(var14 == var0)) {
                        _fun53028_ip = 3069;
                        continue _fun53028
                    }
                case 3062:
                    var17 = var2.size;
                    _fun53028_ip = 3085;
                    continue _fun53028;
                case 3069:
                    var15 = var0.layoutStart;
                    var12 = var0.layoutSize;
                    var17 = var15 + var12;
                case 3085:
                    var12 = var2.size;
                    if (!(var17 < var12)) {
                        _fun53028_ip = 3484;
                        continue _fun53028
                    }
                case 3097:
                    var12 = var2.footerDataCache;
                    if (!var13) {
                        _fun53028_ip = 3110;
                        continue _fun53028
                    }
                case 3106:
                    var13 = var14 != var12;
                case 3110:
                    if (!var13) {
                        _fun53028_ip = 3126;
                        continue _fun53028
                    }
                case 3113:
                    var14 = var0.type;
                    var0 = 'FOOTER';
                    var13 = var0 !== var14;
                case 3126:
                    var0 = var17;
                    if (!var13) {
                        _fun53028_ip = 3269;
                        continue _fun53028
                    }
                case 3135:
                    var13 = var12.layoutStart;
                    if (!(var17 < var13)) {
                        _fun53028_ip = 3207;
                        continue _fun53028
                    }
                case 3145:
                    var14 = var1.push;
                    var16 = var4.get;
                    var13 = _closure1_slot20;
                    var61 = var13.SPACER;
                    var18 = var12.layoutStart;
                    var13 = var12.layoutSize;
                    var13 = var18 + var13;
                    var59 = var13 - var17;
                    var62 = var4;
                    var60 = var17;
                    var58 = undefined;
                    var57 = var7;
                    var56 = 0;
                    var13 = var62[var16](var61, var60, var59, var58, var57, var56, var55);
                    var13 = var14.bind(var1)(var13);
                case 3207:
                    var14 = var1.push;
                    var17 = var4.get;
                    var13 = _closure1_slot20;
                    var61 = var13.FOOTER;
                    var60 = var12.layoutStart;
                    var59 = var12.layoutSize;
                    var62 = var4;
                    var58 = undefined;
                    var13 = var62[var17](var61, var60, var59, var58, var57);
                    var13 = var14.bind(var1)(var13);
                    var13 = var12.layoutStart;
                    var12 = var12.layoutSize;
                    var0 = var13 + var12;
                case 3269:
                    var14 = var0 + var5;
                    var0 = var2.size;
                    if (!(var14 < var0)) {
                        _fun53028_ip = 3334;
                        continue _fun53028
                    }
                case 3282:
                    var5 = var1.push;
                    var13 = var4.get;
                    var0 = _closure1_slot20;
                    var61 = var0.SPACER;
                    var0 = var2.size;
                    var59 = var0 - var14;
                    var62 = var4;
                    var60 = var14;
                    var58 = undefined;
                    var57 = var7;
                    var56 = var7;
                    var0 = var62[var13](var61, var60, var59, var58, var57, var56, var55);
                    var0 = var5.bind(var1)(var0);
                case 3334:
                    var0 = _closure1_slot33;
                    var5 = var0.bind(var11)(var3);
                    var3 = var5.bind(var11)();
                    var0 = var3.done;
                    if (var0) {
                        _fun53028_ip = 3484;
                        continue _fun53028
                    }
                case 3358:
                    var12 = var3.value;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var11)(var12, var8);
                    var18 = var0[var9];
                    var19 = var0[var7];
                    var12 = var1.push;
                    var17 = var4.get;
                    var16 = var19.type;
                    var15 = var19.layoutStart;
                    var14 = var19.layoutSize;
                    var13 = var19.section;
                    var21 = var19.type;
                    var0 = _closure1_slot20;
                    var20 = var0.ITEM;
                    var0 = undefined;
                    if (!(var21 === var20)) {
                        _fun53028_ip = 3439;
                        continue _fun53028
                    }
                case 3434:
                    var0 = var19.item;
                case 3439:
                    var62 = var4;
                    var61 = var16;
                    var60 = var15;
                    var59 = var14;
                    var58 = var18;
                    var57 = var13;
                    var56 = var0;
                    var0 = var62[var17](var61, var60, var59, var58, var57, var56, var55);
                    var0 = var12.bind(var1)(var0);
                    var12 = var5.bind(var11)();
                    var0 = var12.done;
                    var3 = var12;
                    if (!var0) {
                        _fun53028_ip = 3358;
                        continue _fun53028
                    }
                case 3484:
                    var3 = var4.fill;
                    var0 = var2.disableRecycling;
                    if (var0) {
                        _fun53028_ip = 3519;
                        continue _fun53028
                    }
                case 3499:
                    var5 = var2.props;
                    var5 = var5.disableRecyclingOnFullCompute;
                    if (!var5) {
                        _fun53028_ip = 3516;
                        continue _fun53028
                    }
                case 3513:
                    var5 = var6;
                case 3516:
                    var0 = var5;
                case 3519:
                    var0 = var3.bind(var4)(var0);
                    var0 = {};
                    var2 = var2.size;
                    var0.size = var2;
                    var0.items = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'fullCompute';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun53031: for (var _fun53031_ip = 0;;) switch (_fun53031_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = var2.props;
                    var21 = var6.sections;
                    var5 = var6.insetStart;
                    var4 = 0;
                    var0 = undefined;
                    var3 = 0;
                    if (!(var0 !== var5)) {
                        _fun53031_ip = 39;
                        continue _fun53031
                    }
                case 36:
                    var3 = var5;
                case 39:
                    var7 = var6.insetEnd;
                    var5 = 0;
                    if (!(var0 !== var7)) {
                        _fun53031_ip = 54;
                        continue _fun53031
                    }
                case 51:
                    var5 = var7;
                case 54:
                    var20 = var6.getRecyclerKey;
                    if (!(var0 === var20)) {
                        _fun53031_ip = 71;
                        continue _fun53031
                    }
                case 64:
                    var20 = _closure1_slot36;
                case 71:
                    var6 = global;
                    var8 = var6.Set;
                    var6 = var2.props;
                    var42 = var6.persistantKeys;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var43 = var7;
                    var6 = new var43[var8](var42, var41);
                    var19 = var6 instanceof Object ? var6 : var7;
                    var6 = new Array(0);
                    var2.persistantItemData = var6;
                    var6 = new Array(0);
                    var2.dataCache = var6;
                    var _closure3_slot1 = var6;
                    var2.chunkCache = var0;
                    var6 = var2.chunkSize;
                    var _closure3_slot2 = var6;
                    var _closure3_slot3 = var3;
                    var2.headerDataCache = var0;
                    var2.footerDataCache = var0;
                    var8 = function(arg0, arg1, arg2) { // Original name: pushData, environment: var1
                        _fun53032: for (var _fun53032_ip = 0;;) switch (_fun53032_ip) {
                            case 0:
                                var9 = arg0;
                                var8 = arg1;
                                var2 = arg2;
                                var1 = _closure3_slot3;
                                var0 = var8 - var9;
                                var0 = var1 + var0;
                                _closure3_slot3 = var0;
                                var0 = global;
                                var6 = var0.Math;
                                var5 = var6.max;
                                var7 = var0.Math;
                                var4 = var7.floor;
                                var1 = _closure3_slot2;
                                var1 = var9 / var1;
                                var4 = var4.bind(var7)(var1);
                                var1 = 0;
                                var5 = var5.bind(var6)(var4, var1);
                                var4 = var0.Math;
                                var1 = var4.max;
                                var7 = var0.Math;
                                var6 = var7.floor;
                                var0 = _closure3_slot2;
                                var0 = var8 / var0;
                                var6 = var6.bind(var7)(var0);
                                var0 = 1;
                                var0 = var6 - var0;
                                var1 = var1.bind(var4)(var0, var5);
                                var4 = _closure3_slot0;
                                var0 = var4.getChunk;
                                var0 = var0.bind(var4)(var5);
                                var4 = null;
                                if (!(var4 == var0)) {
                                    _fun53032_ip = 179;
                                    continue _fun53032
                                }
                            case 144:
                                var4 = {};
                                var4.start = var5;
                                var4.end = var1;
                                var5 = new Array(0);
                                var4.data = var5;
                                var6 = _closure3_slot1;
                                var5 = var6.push;
                                var5 = var5.bind(var6)(var4);
                                var0 = var4;
                            case 179:
                                var6 = var2.type;
                                var5 = _closure1_slot20;
                                var5 = var5.HEADER;
                                if (!(var6 !== var5)) {
                                    _fun53032_ip = 232;
                                    continue _fun53032
                                }
                            case 201:
                                var5 = var2.type;
                                var4 = _closure1_slot20;
                                var4 = var4.FOOTER;
                                if (!(var5 === var4)) {
                                    _fun53032_ip = 242;
                                    continue _fun53032
                                }
                            case 220:
                                var4 = _closure3_slot0;
                                var4.footerDataCache = var2;
                                _fun53032_ip = 242;
                                continue _fun53032;
                            case 232:
                                var3 = _closure3_slot0;
                                var3.headerDataCache = var2;
                            case 242:
                                var0.end = var1;
                                var1 = var0.data;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var2.getSizeForHeader;
                    var9 = var3.bind(var2)();
                    var3 = var9 > var4;
                    var18 = undefined;
                    if (!var3) {
                        _fun53031_ip = 239;
                        continue _fun53031
                    }
                case 192:
                    var3 = _closure3_slot3;
                    var7 = var3 + var9;
                    var6 = {};
                    var10 = _closure1_slot20;
                    var10 = var10.HEADER;
                    var6.type = var10;
                    var6.layoutStart = var3;
                    var6.layoutSize = var9;
                    var6 = var8.bind(var0)(var3, var7, var6);
                    var18 = var3;
                case 239:
                    var3 = var21.length;
                    var6 = var4 < var3;
                    var17 = true;
                    var16 = null;
                    var15 = 0;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    if (!var6) {
                        _fun53031_ip = 882;
                        continue _fun53031
                    }
                case 277:
                    var34 = var21[var15];
                    var25 = var12;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    if (!(var4 !== var34)) {
                        _fun53031_ip = 855;
                        continue _fun53031
                    }
                case 300:
                    var26 = _closure3_slot3;
                    var6 = var2.getSizeForSection;
                    var30 = var6.bind(var2)(var15);
                    var29 = {};
                    var6 = _closure1_slot20;
                    var6 = var6.SECTION;
                    var29.type = var6;
                    var29.layoutStart = var26;
                    var29.layoutSize = var30;
                    var29.section = var15;
                    var6 = var19.size;
                    if (!(var6 > var4)) {
                        _fun53031_ip = 424;
                        continue _fun53031
                    }
                case 356:
                    var6 = _closure1_slot20;
                    var6 = var6.SECTION;
                    var6 = var20.bind(var0)(var6, var15);
                    var27 = var16 != var6;
                    if (!var27) {
                        _fun53031_ip = 389;
                        continue _fun53031
                    }
                case 379:
                    var28 = var19.has;
                    var27 = var28.bind(var19)(var6);
                case 389:
                    var12 = var6;
                    if (!var27) {
                        _fun53031_ip = 424;
                        continue _fun53031
                    }
                case 395:
                    var28 = var2.persistantItemData;
                    var27 = var28.push;
                    var27 = var27.bind(var28)(var29);
                    var27 = var19.delete;
                    var27 = var27.bind(var19)(var6);
                    var12 = var6;
                case 424:
                    var6 = var26 + var30;
                    var6 = var8.bind(var0)(var26, var6, var29);
                    var6 = var2.uniform;
                    if (var6) {
                        _fun53031_ip = 644;
                        continue _fun53031
                    }
                case 447:
                    var33 = var4 < var34;
                    var32 = 0;
                    var6 = var9;
                    var31 = var26;
                    var28 = 0;
                    var27 = var10;
                    var26 = var6;
                    if (!var33) {
                        _fun53031_ip = 740;
                        continue _fun53031
                    }
                case 473:
                    var33 = var2.getSizeForItem;
                    var33 = var33.bind(var2)(var15, var32);
                    var37 = _closure3_slot3;
                    var36 = {};
                    var35 = _closure1_slot20;
                    var35 = var35.ITEM;
                    var36.type = var35;
                    var36.layoutStart = var37;
                    var36.layoutSize = var33;
                    var36.section = var15;
                    var36.item = var32;
                    var36.sectionData = var29;
                    var33 = var37 + var33;
                    var33 = var8.bind(var0)(var37, var33, var36);
                    var35 = var19.size;
                    var33 = var32;
                    if (!(var35 > var4)) {
                        _fun53031_ip = 620;
                        continue _fun53031
                    }
                case 551:
                    var35 = _closure1_slot20;
                    var35 = var35.ITEM;
                    var35 = var20.bind(var0)(var35, var15, var33);
                    var38 = var16 != var35;
                    if (!var38) {
                        _fun53031_ip = 585;
                        continue _fun53031
                    }
                case 575:
                    var39 = var19.has;
                    var38 = var39.bind(var19)(var35);
                case 585:
                    var6 = var35;
                    if (!var38) {
                        _fun53031_ip = 620;
                        continue _fun53031
                    }
                case 591:
                    var39 = var2.persistantItemData;
                    var38 = var39.push;
                    var38 = var38.bind(var39)(var36);
                    var38 = var19.delete;
                    var38 = var38.bind(var19)(var35);
                    var6 = var35;
                case 620:
                    var32 = var33 + 1;
                    var31 = var37;
                    var27 = var36;
                    var26 = var6;
                    var28 = var32;
                    if (var28 < var34) {
                        _fun53031_ip = 473;
                        continue _fun53031
                    }
                case 642:
                    _fun53031_ip = 740;
                    continue _fun53031;
                case 644:
                    var6 = var2.getSizeForItem;
                    var35 = var6.bind(var2)(var15, var4);
                    var6 = _closure3_slot3;
                    var32 = var35 * var34;
                    var33 = var6 + var32;
                    var32 = {};
                    var36 = _closure1_slot20;
                    var36 = var36.ITEM;
                    var32.type = var36;
                    var32.uniform = var17;
                    var32.layoutStart = var6;
                    var32.itemSize = var35;
                    var35 = var35 * var34;
                    var32.layoutSize = var35;
                    var32.section = var15;
                    var32.items = var34;
                    var32.sectionData = var29;
                    var32 = var8.bind(var0)(var6, var33, var32);
                    var31 = var6;
                    var28 = var11;
                    var27 = var10;
                    var26 = var9;
                case 740:
                    var6 = var2.getSizeForSectionFooter;
                    var6 = var6.bind(var2)(var15);
                    var18 = var31;
                    var14 = var30;
                    var13 = var29;
                    var25 = var12;
                    var24 = var28;
                    var23 = var27;
                    var22 = var26;
                    var7 = var6;
                    if (!(var7 > var4)) {
                        _fun53031_ip = 855;
                        continue _fun53031
                    }
                case 781:
                    var31 = _closure3_slot3;
                    var33 = var31 + var6;
                    var32 = {};
                    var34 = _closure1_slot20;
                    var34 = var34.SECTION_FOOTER;
                    var32.type = var34;
                    var32.layoutStart = var31;
                    var32.layoutSize = var6;
                    var32.section = var15;
                    var32.sectionData = var29;
                    var32 = var8.bind(var0)(var31, var33, var32);
                    var18 = var31;
                    var14 = var30;
                    var13 = var29;
                    var25 = var12;
                    var24 = var28;
                    var23 = var27;
                    var22 = var26;
                    var7 = var6;
                case 855:
                    var15 = var15 + 1;
                    var6 = var21.length;
                    var12 = var25;
                    var11 = var24;
                    var10 = var23;
                    var9 = var22;
                    if (var15 < var6) {
                        _fun53031_ip = 277;
                        continue _fun53031
                    }
                case 882:
                    var6 = var2.getSizeForFooter;
                    var9 = var6.bind(var2)();
                    if (!(var9 > var4)) {
                        _fun53031_ip = 939;
                        continue _fun53031
                    }
                case 898:
                    var7 = _closure3_slot3;
                    var6 = var7 + var9;
                    var4 = {};
                    var10 = _closure1_slot20;
                    var10 = var10.FOOTER;
                    var4.type = var10;
                    var4.layoutStart = var7;
                    var4.layoutSize = var9;
                    var4 = var8.bind(var0)(var7, var6, var4);
                case 939:
                    var4 = _closure3_slot3;
                    var4 = var4 + var5;
                    _closure3_slot3 = var4;
                    var4 = _closure1_slot12;
                    var3 = var4.roundToNearestPixel;
                    var1 = _closure3_slot3;
                    var1 = var3.bind(var4)(var1);
                    var2.size = var1;
                    var1 = false;
                    var2.dirty = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getChunkDataFromSectionItem';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun53033: for (var _fun53033_ip = 0;;) switch (_fun53033_ip) {
                case 0:
                    var9 = arg0;
                    var8 = arg1;
                    var0 = this;
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun53033_ip = 28;
                        continue _fun53033
                    }
                case 18:
                    var1 = var0.fullCompute;
                    var1 = var1.bind(var0)();
                case 28:
                    var2 = _closure1_slot33;
                    var1 = var0.dataCache;
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.bind(var0)();
                    var1 = var2.done;
                    var5 = null;
                    var4 = true;
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun53033_ip = 266;
                        continue _fun53033
                    }
                case 72:
                    var12 = var3.value;
                    var10 = _closure1_slot33;
                    var1 = var12.data;
                    var11 = var10.bind(var0)(var1);
                    var10 = var11.bind(var0)();
                    var1 = var10.done;
                    if (var1) {
                        _fun53033_ip = 248;
                        continue _fun53033
                    }
                case 106:
                    var13 = var10.value;
                    var14 = var13.type;
                    var1 = _closure1_slot20;
                    var1 = var1.ITEM;
                    if (!(var1 !== var14)) {
                        _fun53033_ip = 161;
                        continue _fun53033
                    }
                case 130:
                    var1 = _closure1_slot20;
                    var1 = var1.SECTION;
                    if (!(var1 === var14)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 144:
                    var1 = var13.section;
                    if (!(!(var1 > var9))) {
                        _fun53033_ip = 159;
                        continue _fun53033
                    }
                case 153:
                    if (!(var5 == var8)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 157:
                    return var12;
                case 159:
                    return var0;
                case 161:
                    if (!(var5 != var8)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 165:
                    var1 = var13.uniform;
                    if (!(var4 === var1)) {
                        _fun53033_ip = 184;
                        continue _fun53033
                    }
                case 175:
                    var1 = var13.section;
                    if (!(var1 !== var9)) {
                        _fun53033_ip = 214;
                        continue _fun53033
                    }
                case 184:
                    var1 = var13.uniform;
                    if (!(var5 == var1)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 194:
                    var1 = var13.section;
                    if (!(var1 === var9)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 203:
                    var1 = var13.item;
                    if (!(var1 === var8)) {
                        _fun53033_ip = 227;
                        continue _fun53033
                    }
                case 212:
                    return var12;
                case 214:
                    var1 = var13.items;
                    if (!(!(var8 > var1))) {
                        _fun53033_ip = 225;
                        continue _fun53033
                    }
                case 223:
                    return var12;
                case 225:
                    return var0;
                case 227:
                    var14 = var11.bind(var0)();
                    var1 = var14.done;
                    var10 = var14;
                    var2 = var13;
                    if (!var1) {
                        _fun53033_ip = 106;
                        continue _fun53033
                    }
                case 248:
                    var10 = var6.bind(var0)();
                    var1 = var10.done;
                    var3 = var10;
                    if (!var1) {
                        _fun53033_ip = 72;
                        continue _fun53033
                    }
                case 266:
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getChunkIndexFromSectionItem';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53034: for (var _fun53034_ip = 0;;) switch (_fun53034_ip) {
                case 0:
                    var0 = arg0;
                    var9 = this;
                    var1 = var0.chunk;
                    var8 = var0.targetSection;
                    var7 = var0.targetItem;
                    var6 = var0.padBottom;
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun53034_ip = 43;
                        continue _fun53034
                    }
                case 40:
                    var6 = 16;
                case 43:
                    var2 = _closure1_slot33;
                    var1 = var1.data;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    var3 = null;
                    if (var1) {
                        _fun53034_ip = 565;
                        continue _fun53034
                    }
                case 77:
                    var10 = var2.value;
                    var11 = var10.type;
                    var1 = _closure1_slot20;
                    var1 = var1.ITEM;
                    if (!(var1 !== var11)) {
                        _fun53034_ip = 247;
                        continue _fun53034
                    }
                case 104:
                    var1 = _closure1_slot20;
                    var1 = var1.SECTION;
                    if (!(var1 === var11)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 121:
                    if (!(var3 == var7)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 128:
                    var1 = var10.section;
                    if (!(!(var8 < var1))) {
                        _fun53034_ip = 245;
                        continue _fun53034
                    }
                case 137:
                    var1 = var10.section;
                    if (!(var8 === var1)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 149:
                    var1 = {};
                    var11 = global;
                    var14 = var11.Math;
                    var13 = var14.floor;
                    var15 = var10.layoutStart;
                    var12 = var9.chunkSize;
                    var12 = var15 / var12;
                    var12 = var13.bind(var14)(var12);
                    var1.startIndex = var12;
                    var13 = var11.Math;
                    var12 = var13.floor;
                    var14 = var10.layoutStart;
                    var11 = var10.layoutSize;
                    var11 = var14 + var11;
                    var14 = var11 + var6;
                    var11 = var9.chunkSize;
                    var11 = var14 / var11;
                    var11 = var12.bind(var13)(var11);
                    var1.endIndex = var11;
                    return var1;
                case 245:
                    return var0;
                case 247:
                    var1 = var10.section;
                    if (!(var1 === var8)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 259:
                    if (!(var3 != var7)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 266:
                    var1 = var10.uniform;
                    if (var1) {
                        _fun53034_ip = 416;
                        continue _fun53034
                    }
                case 278:
                    var1 = var10.item;
                    if (!(!(var1 >= var7))) {
                        _fun53034_ip = 414;
                        continue _fun53034
                    }
                case 290:
                    var1 = var10.item;
                    if (!(var1 === var7)) {
                        _fun53034_ip = 547;
                        continue _fun53034
                    }
                case 302:
                    var1 = {};
                    var11 = global;
                    var14 = var11.Math;
                    var13 = var14.floor;
                    var15 = var10.layoutStart;
                    var12 = var10.sectionData;
                    var12 = var12.layoutSize;
                    var15 = var15 - var12;
                    var12 = var9.chunkSize;
                    var12 = var15 / var12;
                    var12 = var13.bind(var14)(var12);
                    var1.startIndex = var12;
                    var13 = var11.Math;
                    var12 = var13.floor;
                    var14 = var10.layoutStart;
                    var11 = var10.layoutSize;
                    var11 = var14 + var11;
                    var14 = var11 + var6;
                    var11 = var9.chunkSize;
                    var11 = var14 / var11;
                    var11 = var12.bind(var13)(var11);
                    var1.endIndex = var11;
                    return var1;
                case 414:
                    return var0;
                case 416:
                    var1 = var10.items;
                    if (!(!(var7 >= var1))) {
                        _fun53034_ip = 545;
                        continue _fun53034
                    }
                case 425:
                    var11 = var10.layoutStart;
                    var1 = var10.sectionData;
                    var1 = var1.layoutSize;
                    var11 = var11 + var1;
                    var1 = var10.itemSize;
                    var1 = var1 * var7;
                    var13 = var11 + var1;
                    var1 = {};
                    var11 = global;
                    var15 = var11.Math;
                    var14 = var15.floor;
                    var12 = var9.chunkSize;
                    var12 = var13 / var12;
                    var12 = var14.bind(var15)(var12);
                    var1.startIndex = var12;
                    var12 = var11.Math;
                    var11 = var12.floor;
                    var10 = var10.itemSize;
                    var10 = var13 + var10;
                    var13 = var10 + var6;
                    var10 = var9.chunkSize;
                    var10 = var13 / var10;
                    var10 = var11.bind(var12)(var10);
                    var1.endIndex = var10;
                    return var1;
                case 545:
                    return var0;
                case 547:
                    var10 = var4.bind(var0)();
                    var1 = var10.done;
                    var2 = var10;
                    if (!var1) {
                        _fun53034_ip = 77;
                        continue _fun53034
                    }
                case 565:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'computeScrollPosition';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun53035: for (var _fun53035_ip = 0;;) switch (_fun53035_ip) {
                case 0:
                    var11 = arg0;
                    var10 = arg1;
                    var9 = arg2;
                    var0 = this;
                    var8 = null;
                    if (!(var8 != var9)) {
                        _fun53035_ip = 27;
                        continue _fun53035
                    }
                case 18:
                    var1 = 0;
                    if (!(!(var9 < var1))) {
                        _fun53035_ip = 493;
                        continue _fun53035
                    }
                case 27:
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun53035_ip = 46;
                        continue _fun53035
                    }
                case 36:
                    var1 = var0.fullCompute;
                    var1 = var1.bind(var0)();
                case 46:
                    var1 = var0.dataCache;
                    var7 = 0;
                    if (!(!(var10 < var7))) {
                        _fun53035_ip = 477;
                        continue _fun53035
                    }
                case 61:
                    var0 = _closure1_slot33;
                    var5 = undefined;
                    var4 = var0.bind(var5)(var1);
                    var1 = var4.bind(var5)();
                    var0 = var1.done;
                    var3 = true;
                    var2 = var1;
                    var1 = undefined;
                    if (var0) {
                        _fun53035_ip = 493;
                        continue _fun53035
                    }
                case 97:
                    var12 = _closure1_slot33;
                    var0 = var2.value;
                    var0 = var0.data;
                    var13 = var12.bind(var5)(var0);
                    var12 = var13.bind(var5)();
                    var0 = var12.done;
                    if (var0) {
                        _fun53035_ip = 457;
                        continue _fun53035
                    }
                case 131:
                    var14 = var12.value;
                    var15 = var14.type;
                    var0 = _closure1_slot20;
                    var0 = var0.ITEM;
                    if (!(var0 !== var15)) {
                        _fun53035_ip = 232;
                        continue _fun53035
                    }
                case 155:
                    var0 = _closure1_slot20;
                    var0 = var0.SECTION;
                    if (!(var0 === var15)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 172:
                    var0 = var14.section;
                    if (!(!(var0 > var10))) {
                        _fun53035_ip = 230;
                        continue _fun53035
                    }
                case 181:
                    if (!(var8 == var9)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 188:
                    var0 = var14.section;
                    if (!(var0 === var10)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 200:
                    var0 = {};
                    var15 = var14.layoutStart;
                    var0.scrollPosition = var15;
                    var15 = var14.layoutSize;
                    var0.size = var15;
                    var0.sectionOffset = var7;
                    return var0;
                case 230:
                    return var5;
                case 232:
                    if (!(var8 != var9)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 239:
                    var0 = var14.uniform;
                    if (!(var3 === var0)) {
                        _fun53035_ip = 258;
                        continue _fun53035
                    }
                case 249:
                    var0 = var14.section;
                    if (!(var0 !== var10)) {
                        _fun53035_ip = 342;
                        continue _fun53035
                    }
                case 258:
                    var0 = var14.uniform;
                    if (!(var8 == var0)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 271:
                    var0 = var14.section;
                    if (!(var0 === var10)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 283:
                    var0 = var14.item;
                    if (!(var0 === var9)) {
                        _fun53035_ip = 436;
                        continue _fun53035
                    }
                case 295:
                    var0 = {};
                    var15 = var14.layoutStart;
                    var0.scrollPosition = var15;
                    var15 = var14.layoutSize;
                    var0.size = var15;
                    var15 = 0;
                    if (!var11) {
                        _fun53035_ip = 335;
                        continue _fun53035
                    }
                case 323:
                    var16 = var14.sectionData;
                    var15 = var16.layoutSize;
                case 335:
                    var0.sectionOffset = var15;
                    return var0;
                case 342:
                    var0 = var14.items;
                    if (!(!(var9 > var0))) {
                        _fun53035_ip = 434;
                        continue _fun53035
                    }
                case 351:
                    var0 = {};
                    var15 = var14.sectionData;
                    var16 = var15.layoutStart;
                    var15 = var14.sectionData;
                    var15 = var15.layoutSize;
                    var16 = var16 + var15;
                    var15 = var14.itemSize;
                    var15 = var15 * var9;
                    var15 = var16 + var15;
                    var0.scrollPosition = var15;
                    var15 = var14.itemSize;
                    var0.size = var15;
                    var7 = 0;
                    if (!var11) {
                        _fun53035_ip = 427;
                        continue _fun53035
                    }
                case 415:
                    var15 = var14.sectionData;
                    var7 = var15.layoutSize;
                case 427:
                    var0.sectionOffset = var7;
                    return var0;
                case 434:
                    return var5;
                case 436:
                    var15 = var13.bind(var5)();
                    var0 = var15.done;
                    var12 = var15;
                    var1 = var14;
                    if (!var0) {
                        _fun53035_ip = 131;
                        continue _fun53035
                    }
                case 457:
                    var12 = var4.bind(var5)();
                    var0 = var12.done;
                    var2 = var12;
                    if (var0) {
                        _fun53035_ip = 493;
                        continue _fun53035
                    }
                case 472:
                    _fun53035_ip = 97;
                    continue _fun53035;
                case 477:
                    var0 = {
                        'scrollPosition': 0,
                        'size': 0,
                        'sectionOffset': 0
                    };
                    return var0;
                case 493:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getSectionItemFromPosition';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun53036: for (var _fun53036_ip = 0;;) switch (_fun53036_ip) {
                case 0:
                    var5 = arg0;
                    var13 = arguments[1];
                    var0 = this;
                    var12 = undefined;
                    if (!(var13 === var12)) {
                        _fun53036_ip = 22;
                        continue _fun53036
                    }
                case 15:
                    var13 = _closure1_slot19;
                case 22:
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun53036_ip = 41;
                        continue _fun53036
                    }
                case 31:
                    var1 = var0.fullCompute;
                    var1 = var1.bind(var0)();
                case 41:
                    var1 = _closure1_slot33;
                    var0 = var0.items;
                    var11 = var1.bind(var12)(var0);
                    var1 = var11.bind(var12)();
                    var0 = var1.done;
                    var10 = 0;
                    var9 = null;
                    var8 = var1;
                    var7 = 0;
                    var2 = undefined;
                    var1 = 0;
                    if (var0) {
                        _fun53036_ip = 198;
                        continue _fun53036
                    }
                case 83:
                    var3 = var8.value;
                    var0 = var3.layoutStart;
                    var0 = var0 + var7;
                    var6 = var13.get;
                    var4 = var3.recyclerKey;
                    var15 = var6.bind(var13)(var4);
                    var4 = var15;
                    if (!(var9 == var4)) {
                        _fun53036_ip = 127;
                        continue _fun53036
                    }
                case 121:
                    var4 = var3.layoutSize;
                case 127:
                    if (!(var4 > var10)) {
                        _fun53036_ip = 143;
                        continue _fun53036
                    }
                case 131:
                    if (!(var5 >= var0)) {
                        _fun53036_ip = 143;
                        continue _fun53036
                    }
                case 135:
                    var6 = var0 + var4;
                    if (!(!(var5 <= var6))) {
                        _fun53036_ip = 187;
                        continue _fun53036
                    }
                case 143:
                    var14 = var9 != var15;
                    var6 = 0;
                    if (!var14) {
                        _fun53036_ip = 162;
                        continue _fun53036
                    }
                case 152:
                    var14 = var3.layoutSize;
                    var6 = var15 - var14;
                case 162:
                    var7 = var7 + var6;
                    var14 = var11.bind(var12)();
                    var6 = var14.done;
                    var8 = var14;
                    var2 = undefined;
                    var1 = 0;
                    if (var6) {
                        _fun53036_ip = 198;
                        continue _fun53036
                    }
                case 185:
                    _fun53036_ip = 83;
                    continue _fun53036;
                case 187:
                    var0 = var5 - var0;
                    var1 = var0 / var4;
                    var2 = var3;
                case 198:
                    var0 = {};
                    var0.item = var2;
                    var0.positionPercentage = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'setDisableRecycling';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = arg0;
            var0 = this;
            var0.disableRecycling = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'getSize';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun53038: for (var _fun53038_ip = 0;;) switch (_fun53038_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun53038_ip = 22;
                        continue _fun53038
                    }
                case 12:
                    var1 = var0.fullCompute;
                    var1 = var1.bind(var0)();
                case 22:
                    var0 = var0.size;
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'isDirty';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.dirty;
            return var0;
        };
        var0.value = var4;
        var1[16] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot22 = var3;
    var6 = {};
    var10 = 'function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}';
    var6.code = var10;
    var _closure1_slot23 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: FastListStickySectionRendererComponent, environment: var5
        _fun53040: for (var _fun53040_ip = 0;;) switch (_fun53040_ip) {
            case 0:
                var2 = arg0;
                var13 = var2.layoutStart;
                var11 = var2.layoutSize;
                var12 = var2.horizontal;
                var _closure2_slot0 = var12;
                var4 = var2.nextSectionLayoutPosition;
                var10 = var2.scrollPosValue;
                var _closure2_slot1 = var10;
                var9 = var2.fastListInstance;
                var8 = var2.section;
                var0 = var2.children;
                var3 = var2.debug;
                var2 = var2.recyclerKey;
                var16 = new Array(2);
                var3 = -1;
                var16[0] = var3;
                var5 = 0;
                var16[1] = var5;
                var _closure2_slot2 = var16;
                var15 = [0, 0];
                var _closure2_slot3 = var15;
                var2 = var16.push;
                var2 = var2.bind(var16)(var13);
                var2 = var15.push;
                var2 = var2.bind(var15)(var5);
                var6 = null;
                var7 = var6 != var4;
                var2 = 0;
                if (!var7) {
                    _fun53040_ip = 143;
                    continue _fun53040
                }
            case 140:
                var2 = var4;
            case 143:
                var2 = var2 - var11;
                if (!(!(var2 >= var13))) {
                    _fun53040_ip = 180;
                    continue _fun53040
                }
            case 151:
                var14 = var16.push;
                var7 = 1;
                var4 = var13 + var7;
                var4 = var14.bind(var16)(var4);
                var4 = var15.push;
                var4 = var4.bind(var15)(var7);
                _fun53040_ip = 268;
                continue _fun53040;
            case 180:
                var14 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 14;
                var7 = var7[var4];
                var4 = undefined;
                var7 = var14.bind(var4)(var7);
                var4 = var7.isAndroid;
                var4 = var4.bind(var7)();
                var5 = 0;
                if (!var4) {
                    _fun53040_ip = 223;
                    continue _fun53040
                }
            case 220:
                var5 = var3;
            case 223:
                var4 = var16.push;
                var3 = 1;
                var3 = var2 + var3;
                var3 = var4.bind(var16)(var2, var3);
                var4 = var15.push;
                var3 = var2 - var13;
                var3 = var3 + var5;
                var2 = var2 - var13;
                var2 = var2 + var5;
                var2 = var4.bind(var15)(var3, var2);
            case 268:
                var18 = _closure1_slot0;
                var5 = _closure1_slot2;
                var17 = 15;
                var2 = var5[var17];
                var3 = undefined;
                var7 = var18.bind(var3)(var2);
                var2 = var7.useAnimatedStyle;
                var1 = function() { // Original name: v, environment: var1
                    _fun53041: for (var _fun53041_ip = 0;;) switch (_fun53041_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var0 = var1 != var0;
                            var4 = null;
                            if (!var0) {
                                _fun53041_ip = 77;
                                continue _fun53041
                            }
                        case 18:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var3 = var3[var0];
                            var0 = undefined;
                            var7 = var5.bind(var0)(var3);
                            var6 = var7.interpolate;
                            var3 = _closure2_slot1;
                            var0 = var3.get;
                            var5 = var0.bind(var3)();
                            var3 = _closure2_slot2;
                            var0 = _closure2_slot3;
                            var4 = var6.bind(var7)(var5, var3, var0);
                        case 77:
                            var0 = {};
                            var3 = var1 != var4;
                            var1 = undefined;
                            if (!var3) {
                                _fun53041_ip = 126;
                                continue _fun53041
                            }
                        case 88:
                            var3 = _closure2_slot0;
                            var2 = {};
                            if (var3) {
                                _fun53041_ip = 107;
                                continue _fun53041
                            }
                        case 97:
                            var2.translateY = var4;
                            var3 = var2;
                            _fun53041_ip = 115;
                            continue _fun53041;
                        case 107:
                            var2.translateX = var4;
                            var3 = var2;
                        case 115:
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
                        case 126:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var14 = {};
                var14.scrollPosValue = var10;
                var17 = var5[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.interpolate;
                var14.interpolate = var17;
                var14.inputRange = var16;
                var14.outputRange = var15;
                var14.horizontal = var12;
                var1.__closure = var14;
                var14 = 699810682881.0;
                var1.__workletHash = var14;
                var14 = _closure1_slot23;
                var1.__initData = var14;
                var7 = var2.bind(var7)(var1);
                var1 = _closure1_slot11;
                var2 = var1.Children;
                var1 = var2.only;
                var24 = undefined;
                var23 = var8;
                var22 = var9;
                var21 = var10;
                var20 = var13;
                var0 = var24[var0](var23, var22, var21, var20, var19);
                var9 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot1;
                var0 = 16;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'style': null,
                    'collapsable': false,
                    'preventClipping': true
                };
                var5 = var6 != var9;
                var8 = undefined;
                if (!var5) {
                    _fun53040_ip = 488;
                    continue _fun53040
                }
            case 465:
                var5 = 'props';
                var5 = var5 in var9;
                var8 = undefined;
                if (!var5) {
                    _fun53040_ip = 488;
                    continue _fun53040
                }
            case 478:
                var5 = var9.props;
                var8 = var5.style;
            case 488:
                var5 = new Array(3);
                var5[0] = var8;
                var8 = {
                    'zIndex': 10,
                    'position': 'relative'
                };
                var10 = undefined;
                if (var12) {
                    _fun53040_ip = 518;
                    continue _fun53040
                }
            case 515:
                var10 = var11;
            case 518:
                var8.height = var10;
                var10 = undefined;
                if (!var12) {
                    _fun53040_ip = 530;
                    continue _fun53040
                }
            case 527:
                var10 = var11;
            case 530:
                var8.width = var10;
                var5[1] = var8;
                var5[2] = var7;
                var0.style = var5;
                var5 = false;
                var7 = var6 != var9;
                var6 = undefined;
                if (!var7) {
                    _fun53040_ip = 590;
                    continue _fun53040
                }
            case 559:
                var8 = _closure1_slot11;
                var7 = var8.cloneElement;
                var4 = {};
                var10 = {};
                var11 = 1;
                var10.flex = var11;
                var4.style = var10;
                var6 = var7.bind(var8)(var9, var4);
            case 590:
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot24 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: _FastListSectionRenderer, environment: var5
        _fun53042: for (var _fun53042_ip = 0;;) switch (_fun53042_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.layoutSize;
                var9 = var2.horizontal;
                var1 = var2.disableWrapper;
                var8 = var2.children;
                var7 = var2.fastListInstance;
                var5 = var2.section;
                var0 = var2.debug;
                var2 = var2.recyclerKey;
                if (!var1) {
                    _fun53042_ip = 88;
                    continue _fun53042
                }
            case 52:
                if (var0) {
                    _fun53042_ip = 88;
                    continue _fun53042
                }
            case 55:
                var3 = _closure1_slot16;
                var2 = _closure1_slot17;
                var1 = {};
                var0 = undefined;
                var4 = var8.bind(var0)(var5, var7);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                _fun53042_ip = 188;
                continue _fun53042;
            case 88:
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {
                    'collapsable': false,
                    'style': null,
                    'preventClipping': true
                };
                var6 = false;
                var10 = {};
                if (var9) {
                    _fun53042_ip = 147;
                    continue _fun53042
                }
            case 138:
                var10.height = var11;
                var9 = var10;
                _fun53042_ip = 154;
                continue _fun53042;
            case 147:
                var10.width = var11;
                var9 = var10;
            case 154:
                var1.style = var9;
                var7 = var8.bind(var3)(var5, var7);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 188:
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot25 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: _FastListSectionFooterRenderer, environment: var5
        _fun53043: for (var _fun53043_ip = 0;;) switch (_fun53043_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.layoutSize;
                var9 = var2.horizontal;
                var1 = var2.disableWrapper;
                var8 = var2.fastListInstance;
                var7 = var2.children;
                var5 = var2.section;
                var0 = var2.debug;
                var2 = var2.recyclerKey;
                if (!var1) {
                    _fun53043_ip = 88;
                    continue _fun53043
                }
            case 52:
                if (var0) {
                    _fun53043_ip = 88;
                    continue _fun53043
                }
            case 55:
                var3 = _closure1_slot16;
                var2 = _closure1_slot17;
                var1 = {};
                var0 = undefined;
                var4 = var7.bind(var0)(var5, var8);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                _fun53043_ip = 179;
                continue _fun53043;
            case 88:
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = false;
                var1.collapsable = var6;
                var10 = {};
                if (var9) {
                    _fun53043_ip = 140;
                    continue _fun53043
                }
            case 131:
                var10.height = var11;
                var9 = var10;
                _fun53043_ip = 147;
                continue _fun53043;
            case 140:
                var10.width = var11;
                var9 = var10;
            case 147:
                var1.style = var9;
                var7 = var7.bind(var3)(var5, var8);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 179:
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot26 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: _FastListItemRenderer, environment: var5
        _fun53044: for (var _fun53044_ip = 0;;) switch (_fun53044_ip) {
            case 0:
                var2 = arg0;
                var12 = var2.layoutSize;
                var7 = var2.horizontal;
                var1 = var2.disableWrapper;
                var10 = var2.children;
                var9 = var2.section;
                var8 = var2.fastListInstance;
                var5 = var2.item;
                var0 = var2.debug;
                var2 = var2.recyclerKey;
                if (!var1) {
                    _fun53044_ip = 82;
                    continue _fun53044
                }
            case 57:
                if (var0) {
                    _fun53044_ip = 82;
                    continue _fun53044
                }
            case 60:
                var0 = null;
                var2 = var0 == var10;
                var1 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun53044_ip = 80;
                    continue _fun53044
                }
            case 73:
                var0 = var10.bind(var1)(var9, var5, var8);
            case 80:
                _fun53044_ip = 185;
                continue _fun53044;
            case 82:
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = false;
                var1.collapsable = var6;
                var11 = {};
                if (var7) {
                    _fun53044_ip = 134;
                    continue _fun53044
                }
            case 125:
                var11.height = var12;
                var7 = var11;
                _fun53044_ip = 141;
                continue _fun53044;
            case 134:
                var11.width = var12;
                var7 = var11;
            case 141:
                var1.style = var7;
                var7 = null;
                var11 = var7 == var10;
                var7 = undefined;
                if (var11) {
                    _fun53044_ip = 163;
                    continue _fun53044
                }
            case 156:
                var7 = var10.bind(var3)(var9, var5, var8);
            case 163:
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 185:
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot27 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: _FastListHeaderFooterRenderer, environment: var5
        _fun53045: for (var _fun53045_ip = 0;;) switch (_fun53045_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.layoutSize;
                var8 = var2.horizontal;
                var1 = var2.disableWrapper;
                var7 = var2.children;
                var5 = var2.fastListInstance;
                var0 = var2.debug;
                var2 = var2.recyclerKey;
                if (!var1) {
                    _fun53045_ip = 82;
                    continue _fun53045
                }
            case 47:
                if (var0) {
                    _fun53045_ip = 82;
                    continue _fun53045
                }
            case 50:
                var3 = _closure1_slot16;
                var2 = _closure1_slot17;
                var1 = {};
                var0 = undefined;
                var4 = var7.bind(var0)(var5);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                _fun53045_ip = 181;
                continue _fun53045;
            case 82:
                var4 = _closure1_slot15;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {
                    'collapsable': false,
                    'style': null,
                    'preventClipping': true
                };
                var6 = false;
                var9 = {};
                if (var8) {
                    _fun53045_ip = 141;
                    continue _fun53045
                }
            case 132:
                var9.height = var10;
                var8 = var9;
                _fun53045_ip = 148;
                continue _fun53045;
            case 141:
                var9.width = var10;
                var8 = var9;
            case 148:
                var1.style = var8;
                var7 = var7.bind(var3)(var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 181:
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot28 = var6;
    var10 = var1.memo;
    var6 = function(arg0) { // Original name: _FastListSpacer, environment: var5
        _fun53046: for (var _fun53046_ip = 0;;) switch (_fun53046_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.layoutSize;
                var4 = var0.horizontal;
                var3 = _closure1_slot16;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var5 = false;
                var0.collapsable = var5;
                var5 = {};
                if (var4) {
                    _fun53046_ip = 67;
                    continue _fun53046
                }
            case 58:
                var5.height = var6;
                var4 = var5;
                _fun53046_ip = 74;
                continue _fun53046;
            case 67:
                var5.width = var6;
                var4 = var5;
            case 74:
                var0.style = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var6 = var10.bind(var1)(var6);
    var _closure1_slot29 = var6;
    var6 = function() { // Environment: var5
        var3 = _closure1_slot10;
        var2 = function(arg0) { // Original name: FastListScrollAnchor, environment: var4
            var2 = this;
            var3 = _closure1_slot9;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.getScrollPosition = var1;
            var1 = false;
            var2.isCustomAnchor = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'hasAnchor';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.anchorId;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'cleanAnchor';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun53050: for (var _fun53050_ip = 0;;) switch (_fun53050_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun53050_ip = 14;
                        continue _fun53050
                    }
                case 12:
                    var2 = false;
                case 14:
                    var2 = !var2;
                    if (!var2) {
                        _fun53050_ip = 26;
                        continue _fun53050
                    }
                case 20:
                    var2 = var1.isCustomAnchor;
                case 26:
                    if (var2) {
                        _fun53050_ip = 49;
                        continue _fun53050
                    }
                case 29:
                    var2 = false;
                    var1.isCustomAnchor = var2;
                    var1.anchorId = var0;
                    var1.anchorOffset = var0;
                case 49:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleUserScroll';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = this;
            var1 = var2.cleanAnchor;
            var0 = true;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setCustomAnchor';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var4
            _fun53052: for (var _fun53052_ip = 0;;) switch (_fun53052_ip) {
                case 0:
                    var3 = this;
                    var2 = true;
                    var3.isCustomAnchor = var2;
                    var0 = arg1;
                    var3.anchorOffset = var0;
                    var5 = arg0;
                    var0 = undefined;
                    var4 = arg2;
                    var1 = arg3;
                    var1 = var5.bind(var0)(var4, var1);
                    var3.anchorId = var1;
                    var4 = var3.anchorId;
                    var1 = null;
                    if (!(var1 == var4)) {
                        _fun53052_ip = 66;
                        continue _fun53052
                    }
                case 55:
                    var1 = var3.cleanAnchor;
                    var1 = var1.bind(var3)(var2);
                case 66:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'findOrUpdateAnchor';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun53053: for (var _fun53053_ip = 0;;) switch (_fun53053_ip) {
                case 0:
                    var11 = arg0;
                    var2 = this;
                    var0 = var2.getScrollPosition;
                    var3 = var0.bind(var2)();
                    var0 = var2.cleanAnchor;
                    var0 = var0.bind(var2)();
                    var4 = _closure1_slot33;
                    var0 = undefined;
                    var1 = arg1;
                    var9 = var4.bind(var0)(var1);
                    var4 = var9.bind(var0)();
                    var1 = var4.done;
                    var8 = null;
                    var6 = var4;
                    var5 = undefined;
                    if (var1) {
                        _fun53053_ip = 267;
                        continue _fun53053
                    }
                case 65:
                    var1 = var6.value;
                    var13 = var1.type;
                    var4 = _closure1_slot20;
                    var4 = var4.ITEM;
                    var12 = var5;
                    if (!(var13 === var4)) {
                        _fun53053_ip = 224;
                        continue _fun53053
                    }
                case 95:
                    var4 = var2.isCustomAnchor;
                    if (!var4) {
                        _fun53053_ip = 145;
                        continue _fun53053
                    }
                case 104:
                    var13 = var2.anchorId;
                    var15 = var1.section;
                    var14 = var1.item;
                    var16 = var8 != var14;
                    var4 = 0;
                    if (!var16) {
                        _fun53053_ip = 132;
                        continue _fun53053
                    }
                case 129:
                    var4 = var14;
                case 132:
                    var4 = var11.bind(var0)(var15, var4);
                    var5 = var14;
                    if (!(var13 !== var4)) {
                        _fun53053_ip = 247;
                        continue _fun53053
                    }
                case 145:
                    var4 = var2.isCustomAnchor;
                    var12 = var5;
                    if (var4) {
                        _fun53053_ip = 224;
                        continue _fun53053
                    }
                case 157:
                    var4 = var1.layoutStart;
                    var12 = var5;
                    if (!(var4 >= var3)) {
                        _fun53053_ip = 224;
                        continue _fun53053
                    }
                case 170:
                    var4 = var1.layoutStart;
                    var4 = var4 - var3;
                    var2.anchorOffset = var4;
                    var4 = var1.section;
                    var13 = var1.item;
                    var14 = var8 != var13;
                    var7 = 0;
                    if (!var14) {
                        _fun53053_ip = 208;
                        continue _fun53053
                    }
                case 205:
                    var7 = var13;
                case 208:
                    var4 = var11.bind(var0)(var4, var7);
                    var2.anchorId = var4;
                    var4 = undefined;
                    return var4;
                case 224:
                    var13 = var9.bind(var0)();
                    var4 = var13.done;
                    var5 = var12;
                    var6 = var13;
                    if (var4) {
                        _fun53053_ip = 267;
                        continue _fun53053
                    }
                case 242:
                    _fun53053_ip = 65;
                    continue _fun53053;
                case 247:
                    var1 = var1.layoutStart;
                    var1 = var1 - var3;
                    var2.anchorOffset = var1;
                    var1 = undefined;
                    return var1;
                case 267:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getAnchorIndex';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun53054: for (var _fun53054_ip = 0;;) switch (_fun53054_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.anchorId;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun53054_ip = 19;
                        continue _fun53054
                    }
                case 15:
                    var0 = undefined;
                    return var0;
                case 19:
                    var3 = var2.anchorId;
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3);
                    var1 = var2.cleanAnchor;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var _closure1_slot30 = var6;
    var6 = {};
    var10 = 'function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));}';
    var6.code = var10;
    var _closure1_slot31 = var6;
    var6 = var1.PureComponent;
    var1 = function(arg0) { // Environment: var5
        var4 = function(arg0) { // Original name: FastList, environment: var0
            _fun53056: for (var _fun53056_ip = 0;;) switch (_fun53056_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var3, var2);
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var5)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot32;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun53056_ip = 75;
                        continue _fun53056
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var10);
                    _fun53056_ip = 109;
                    continue _fun53056;
                case 75:
                    var4 = global;
                    var8 = var4.Reflect;
                    var7 = var8.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var5)(var3);
                    var4 = var4.constructor;
                    var0 = var7.bind(var8)(var9, var10, var4);
                case 109:
                    var0 = var2.bind(var5)(var3, var0);
                    var _closure3_slot0 = var0;
                    var3 = 0;
                    var0.containerSize = var3;
                    var0.scrollPos = var3;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 17;
                    var2 = var7[var2];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.createFakeSharedValue;
                    var2 = var2.bind(var4)(var3);
                    var0.scrollPosValue = var2;
                    var2 = var0.props;
                    var4 = var2.manualRef;
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun53056_ip = 201;
                        continue _fun53056
                    }
                case 187:
                    var8 = _closure1_slot11;
                    var7 = var8.createRef;
                    var4 = var7.bind(var8)();
                case 201:
                    var0.scrollView = var4;
                    var4 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.state;
                        var0 = var0.items;
                        return var0;
                    };
                    var0.getItems = var4;
                    var4 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.scrollPos;
                        return var0;
                    };
                    var0.getScrollPosition = var4;
                    var0.disableAnchoringTimeout = var5;
                    var0.viewTag = var2;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 15;
                    var4 = var8[var4];
                    var8 = var7.bind(var5)(var4);
                    var4 = var8.makeMutable;
                    var7 = false;
                    var4 = var4.bind(var8)(var7);
                    var0.workletMounted = var4;
                    var4 = -1;
                    var0.deferredCompute = var4;
                    var0.deferNextCompute = var7;
                    var9 = _closure1_slot30;
                    var22 = var0.getScrollPosition;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var23 = var8;
                    var7 = new var23[var9](var22, var21);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var0.scrollAnchor = var7;
                    var0.viewabilityDebounce = var4;
                    var4 = new Array(0);
                    var0.previouslyViewableItems = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53059: for (var _fun53059_ip = 0;;) switch (_fun53059_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var3 = var0.horizontal;
                                var0 = {};
                                var4 = 0;
                                if (!var3) {
                                    _fun53059_ip = 31;
                                    continue _fun53059
                                }
                            case 28:
                                var4 = var2;
                            case 31:
                                var0.x = var4;
                                var1 = 0;
                                if (var3) {
                                    _fun53059_ip = 43;
                                    continue _fun53059
                                }
                            case 40:
                                var1 = var2;
                            case 43:
                                var0.y = var1;
                                return var0;
                        }
                    };
                    var0._scrollPositionToPoint = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53060: for (var _fun53060_ip = 0;;) switch (_fun53060_ip) {
                            case 0:
                                var1 = arg0;
                                var10 = var1.itemCoords;
                                var7 = var1.fullSize;
                                var12 = var1.orientation;
                                var0 = undefined;
                                if (!(var12 === var0)) {
                                    _fun53060_ip = 31;
                                    continue _fun53060
                                }
                            case 27:
                                var12 = 'top';
                            case 31:
                                var4 = var1.paddingStart;
                                if (!(var4 === var0)) {
                                    _fun53060_ip = 43;
                                    continue _fun53060
                                }
                            case 41:
                                var4 = 0;
                            case 43:
                                var8 = var1.paddingEnd;
                                if (!(var8 === var0)) {
                                    _fun53060_ip = 55;
                                    continue _fun53060
                                }
                            case 53:
                                var8 = 0;
                            case 55:
                                var2 = var10.scrollPosition;
                                var5 = var10.size;
                                var1 = var10.sectionOffset;
                                var0 = _closure3_slot0;
                                var0 = var0.containerSize;
                                var3 = 0;
                                if (!(!(var0 > var3))) {
                                    _fun53060_ip = 122;
                                    continue _fun53060
                                }
                            case 91:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var6 = var0.chunkBase;
                                var0 = null;
                                var11 = var0 != var6;
                                var0 = 0;
                                if (!var11) {
                                    _fun53060_ip = 120;
                                    continue _fun53060
                                }
                            case 117:
                                var0 = var6;
                            case 120:
                                _fun53060_ip = 132;
                                continue _fun53060;
                            case 122:
                                var6 = _closure3_slot0;
                                var0 = var6.containerSize;
                            case 132:
                                if (!(var5 >= var0)) {
                                    _fun53060_ip = 140;
                                    continue _fun53060
                                }
                            case 136:
                                var12 = 'top';
                            case 140:
                                var6 = 'visible';
                                if (!(var6 !== var12)) {
                                    _fun53060_ip = 248;
                                    continue _fun53060
                                }
                            case 148:
                                var6 = 'top';
                                if (!(var6 !== var12)) {
                                    _fun53060_ip = 238;
                                    continue _fun53060
                                }
                            case 156:
                                var11 = 'center';
                                var6 = var2;
                                if (!(var11 === var12)) {
                                    _fun53060_ip = 336;
                                    continue _fun53060
                                }
                            case 170:
                                var13 = var10.scrollPosition;
                                var12 = global;
                                var15 = var12.Math;
                                var14 = var15.floor;
                                var11 = var10.size;
                                var10 = 2;
                                var11 = var11 / var10;
                                var11 = var14.bind(var15)(var11);
                                var11 = var13 + var11;
                                var13 = var12.Math;
                                var12 = var13.floor;
                                var10 = var0 / var10;
                                var10 = var12.bind(var13)(var10);
                                var6 = var11 - var10;
                                _fun53060_ip = 336;
                                continue _fun53060;
                            case 238:
                                var10 = var1 + var4;
                                var6 = var2 - var10;
                                _fun53060_ip = 336;
                                continue _fun53060;
                            case 248:
                                var11 = var2 + var1;
                                var10 = _closure3_slot0;
                                var10 = var10.scrollPos;
                                var10 = var10 + var4;
                                if (!(var11 >= var10)) {
                                    _fun53060_ip = 296;
                                    continue _fun53060
                                }
                            case 270:
                                var11 = var2 + var5;
                                var10 = _closure3_slot0;
                                var12 = var10.scrollPos;
                                var10 = var0 - var8;
                                var10 = var12 + var10;
                                if (!(!(var11 <= var10))) {
                                    _fun53060_ip = 378;
                                    continue _fun53060
                                }
                            case 296:
                                if (!(!(var5 > var0))) {
                                    _fun53060_ip = 328;
                                    continue _fun53060
                                }
                            case 300:
                                var9 = _closure3_slot0;
                                var9 = var9.scrollPos;
                                if (!(!(var2 < var9))) {
                                    _fun53060_ip = 328;
                                    continue _fun53060
                                }
                            case 314:
                                var5 = var2 + var5;
                                var5 = var5 + var8;
                                var6 = var5 - var0;
                                _fun53060_ip = 336;
                                continue _fun53060;
                            case 328:
                                var1 = var1 + var4;
                                var6 = var2 - var1;
                            case 336:
                                var4 = global;
                                var2 = var4.Math;
                                var1 = var2.max;
                                var5 = var4.Math;
                                var4 = var5.min;
                                var0 = var7 - var0;
                                var0 = var4.bind(var5)(var6, var0);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            case 378:
                                var0 = null;
                                return var0;
                        }
                    };
                    var0._calculateScrollPosition = var4;
                    var8 = var0.props;
                    var4 = var8.chunkBase;
                    var19 = var8.headerSize;
                    var18 = var8.footerSize;
                    var17 = var8.sectionSize;
                    var16 = var8.itemSize;
                    var15 = var8.sectionFooterSize;
                    var14 = var8.sections;
                    var13 = var8.insetStart;
                    var12 = var8.insetEnd;
                    var7 = var8.stickyHeaderFooter;
                    var11 = var5 !== var7;
                    if (!var11) {
                        _fun53056_ip = 447;
                        continue _fun53056
                    }
                case 444:
                    var11 = var7;
                case 447:
                    var10 = var8.getRecyclerKey;
                    var7 = var8.persistantKeys;
                    var9 = var8.disableRecyclingOnFullCompute;
                    var8 = _closure1_slot22;
                    var6 = {};
                    var6.headerSize = var19;
                    var6.footerSize = var18;
                    var6.sectionSize = var17;
                    var6.itemSize = var16;
                    var6.sectionFooterSize = var15;
                    var6.sections = var14;
                    var6.insetStart = var13;
                    var6.insetEnd = var12;
                    var6.stickyHeaderFooter = var11;
                    var6.getRecyclerKey = var10;
                    var6.persistantKeys = var7;
                    var7 = var5 !== var9;
                    if (!var7) {
                        _fun53056_ip = 536;
                        continue _fun53056
                    }
                case 533:
                    var7 = var9;
                case 536:
                    var6.disableRecyclingOnFullCompute = var7;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var23 = var7;
                    var22 = var6;
                    var6 = new var23[var8](var22, var21);
                    var8 = var6 instanceof Object ? var6 : var7;
                    var7 = var0.getInitialState;
                    var9 = var2 != var4;
                    var6 = 0;
                    if (!var9) {
                        _fun53056_ip = 582;
                        continue _fun53056
                    }
                case 579:
                    var6 = var4;
                case 582:
                    var4 = true;
                    var4 = var7.bind(var0)(var6, var8, var4);
                    var0.state = var4;
                    var4 = function() { // Environment: var1
                        _fun53061: for (var _fun53061_ip = 0;;) switch (_fun53061_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.onViewableItemsChanged;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun53061_ip = 298;
                                    continue _fun53061
                                }
                            case 27:
                                var0 = _closure3_slot0;
                                var1 = var0.getViewabilityConfig;
                                var1 = var1.bind(var0)();
                                var11 = var1.visibilityThreshold;
                                var1 = var0.state;
                                var6 = var1.items;
                                var10 = var0.scrollPos;
                                var1 = var0.scrollPos;
                                var0 = var0.containerSize;
                                var9 = var1 + var0;
                                var1 = new Array(0);
                                var5 = _closure1_slot33;
                                var0 = undefined;
                                var8 = var5.bind(var0)(var6);
                                var6 = var8.bind(var0)();
                                var5 = var6.done;
                                var7 = global;
                                if (var5) {
                                    _fun53061_ip = 238;
                                    continue _fun53061
                                }
                            case 114:
                                var5 = var6.value;
                                var12 = var5.layoutStart;
                                if (!(!(var12 > var9))) {
                                    _fun53061_ip = 238;
                                    continue _fun53061
                                }
                            case 129:
                                var14 = var7.Math;
                                var13 = var14.max;
                                var12 = var5.layoutStart;
                                var13 = var13.bind(var14)(var12, var10);
                                var15 = var7.Math;
                                var14 = var15.min;
                                var16 = var5.layoutStart;
                                var12 = var5.layoutSize;
                                var12 = var16 + var12;
                                var12 = var14.bind(var15)(var12, var9);
                                if (!(!(var13 >= var12))) {
                                    _fun53061_ip = 223;
                                    continue _fun53061
                                }
                            case 189:
                                var13 = var12 - var13;
                                var12 = var5.layoutSize;
                                var12 = var13 / var12;
                                if (!(var12 >= var11)) {
                                    _fun53061_ip = 223;
                                    continue _fun53061
                                }
                            case 207:
                                var12 = var1.push;
                                var5 = var5.recyclerKey;
                                var5 = var12.bind(var1)(var5);
                            case 223:
                                var12 = var8.bind(var0)();
                                var5 = var12.done;
                                var6 = var12;
                                if (!var5) {
                                    _fun53061_ip = 114;
                                    continue _fun53061
                                }
                            case 238:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 11;
                                var4 = var6[var4];
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.areArraysShallowEqual;
                                var4 = _closure3_slot0;
                                var4 = var4.previouslyViewableItems;
                                var4 = var5.bind(var6)(var1, var4);
                                if (var4) {
                                    _fun53061_ip = 298;
                                    continue _fun53061
                                }
                            case 283:
                                var3 = _closure3_slot0;
                                var3.previouslyViewableItems = var1;
                                var0 = var2.bind(var0)(var1);
                            case 298:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleViewabilityChange = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53062: for (var _fun53062_ip = 0;;) switch (_fun53062_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = arguments[1];
                                var3 = arguments[2];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun53062_ip = 17;
                                    continue _fun53062
                                }
                            case 15:
                                var4 = 0;
                            case 17:
                                if (!(var3 === var0)) {
                                    _fun53062_ip = 23;
                                    continue _fun53062
                                }
                            case 21:
                                var3 = 0;
                            case 23:
                                var0 = _closure3_slot0;
                                var0 = var0.scrollPos;
                                var0 = var0 + var4;
                                var0 = var2 >= var0;
                                if (!var0) {
                                    _fun53062_ip = 75;
                                    continue _fun53062
                                }
                            case 47:
                                var1 = _closure3_slot0;
                                var4 = var1.scrollPos;
                                var1 = var1.containerSize;
                                var1 = var4 + var1;
                                var1 = var1 - var3;
                                var0 = var2 <= var1;
                            case 75:
                                return var0;
                        }
                    };
                    var0.isVisible = var4;
                    var4 = function() { // Environment: var1
                        _fun53063: for (var _fun53063_ip = 0;;) switch (_fun53063_ip) {
                            case 0:
                                var4 = arguments[0];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun53063_ip = 11;
                                    continue _fun53063
                                }
                            case 9:
                                var4 = true;
                            case 11:
                                var1 = _closure3_slot0;
                                var2 = var1.scrollView;
                                var5 = null;
                                var1 = var5 == var2;
                                var3 = var2;
                                if (var1) {
                                    _fun53063_ip = 48;
                                    continue _fun53063
                                }
                            case 36:
                                var2 = var2.current;
                                var1 = var5 == var2;
                                var3 = var2;
                            case 48:
                                if (var1) {
                                    _fun53063_ip = 77;
                                    continue _fun53063
                                }
                            case 51:
                                var2 = var3.scrollTo;
                                var1 = {
                                    'x': 0,
                                    'y': 0
                                };
                                var1.animated = var4;
                                var1 = var2.bind(var3)(var1);
                            case 77:
                                return var0;
                        }
                    };
                    var0.scrollToTop = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53064: for (var _fun53064_ip = 0;;) switch (_fun53064_ip) {
                            case 0:
                                var0 = arg0;
                                var10 = var0.section;
                                var9 = var0.item;
                                var5 = var0.animated;
                                var15 = undefined;
                                if (!(var5 === var15)) {
                                    _fun53064_ip = 27;
                                    continue _fun53064
                                }
                            case 25:
                                var5 = false;
                            case 27:
                                var14 = var0.orientation;
                                if (!(var14 === var15)) {
                                    _fun53064_ip = 41;
                                    continue _fun53064
                                }
                            case 37:
                                var14 = 'top';
                            case 41:
                                var13 = var0.paddingStart;
                                if (!(var13 === var15)) {
                                    _fun53064_ip = 53;
                                    continue _fun53064
                                }
                            case 51:
                                var13 = 0;
                            case 53:
                                var12 = var0.paddingEnd;
                                if (!(var12 === var15)) {
                                    _fun53064_ip = 65;
                                    continue _fun53064
                                }
                            case 63:
                                var12 = 0;
                            case 65:
                                var6 = var0.setAnchor;
                                if (!(var6 === var15)) {
                                    _fun53064_ip = 77;
                                    continue _fun53064
                                }
                            case 75:
                                var6 = false;
                            case 77:
                                var0 = _closure3_slot0;
                                var0 = var0.scrollView;
                                var3 = var0.current;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun53064_ip = 441;
                                    continue _fun53064
                                }
                            case 104:
                                var2 = _closure3_slot0;
                                var1 = var2.props;
                                var8 = var1.getAnchorIdFromIndex;
                                var11 = var1.stickySectionsVariant;
                                var7 = 'default';
                                var1 = var7;
                                if (!(var15 !== var11)) {
                                    _fun53064_ip = 139;
                                    continue _fun53064
                                }
                            case 136:
                                var1 = var11;
                            case 139:
                                var2 = var2.state;
                                var16 = var2.fastListComputer;
                                var2 = var16.computeScrollPosition;
                                var1 = var7 === var1;
                                var1 = var2.bind(var16)(var1, var10, var9);
                                if (!(var0 != var1)) {
                                    _fun53064_ip = 437;
                                    continue _fun53064
                                }
                            case 174:
                                var2 = 'visible';
                                if (!(var2 === var14)) {
                                    _fun53064_ip = 211;
                                    continue _fun53064
                                }
                            case 182:
                                var11 = _closure3_slot0;
                                var7 = var11.isVisible;
                                var2 = var1.scrollPosition;
                                var2 = var7.bind(var11)(var2, var13, var12);
                                if (var2) {
                                    _fun53064_ip = 433;
                                    continue _fun53064
                                }
                            case 211:
                                var11 = _closure3_slot0;
                                var7 = var11._calculateScrollPosition;
                                var2 = {};
                                var2.itemCoords = var1;
                                var15 = var16.getSize;
                                var15 = var15.bind(var16)();
                                var2.fullSize = var15;
                                var2.orientation = var14;
                                var2.paddingStart = var13;
                                var2.paddingEnd = var12;
                                var7 = var7.bind(var11)(var2);
                                var2 = !var5;
                                if (!var2) {
                                    _fun53064_ip = 272;
                                    continue _fun53064
                                }
                            case 269:
                                var2 = var6;
                            case 272:
                                if (!var2) {
                                    _fun53064_ip = 279;
                                    continue _fun53064
                                }
                            case 275:
                                var2 = var0 != var8;
                            case 279:
                                if (!var2) {
                                    _fun53064_ip = 338;
                                    continue _fun53064
                                }
                            case 282:
                                var2 = _closure3_slot0;
                                var6 = var2.scrollAnchor;
                                var2 = var6.setCustomAnchor;
                                var11 = var1.scrollPosition;
                                var12 = var0 != var7;
                                var1 = 0;
                                if (!var12) {
                                    _fun53064_ip = 318;
                                    continue _fun53064
                                }
                            case 315:
                                var1 = var7;
                            case 318:
                                var19 = var11 - var1;
                                var21 = var6;
                                var20 = var8;
                                var18 = var10;
                                var17 = var9;
                                var1 = var21[var2](var20, var19, var18, var17, var16);
                            case 338:
                                var0 = var0 != var7;
                                if (!var0) {
                                    _fun53064_ip = 359;
                                    continue _fun53064
                                }
                            case 345:
                                var1 = _closure3_slot0;
                                var1 = var1.scrollPos;
                                var0 = var7 !== var1;
                            case 359:
                                if (!var0) {
                                    _fun53064_ip = 431;
                                    continue _fun53064
                                }
                            case 362:
                                if (var5) {
                                    _fun53064_ip = 385;
                                    continue _fun53064
                                }
                            case 365:
                                var2 = _closure3_slot0;
                                var2.scrollPos = var7;
                                var1 = var2.computeBlocks;
                                var1 = var1.bind(var2)();
                            case 385:
                                var2 = var3.scrollTo;
                                var1 = {};
                                var6 = _closure3_slot0;
                                var4 = var6._scrollPositionToPoint;
                                var19 = var4.bind(var6)(var7);
                                var20 = var1;
                                var4 = copyDataProperties(var20, var19);
                                var4 = 'animated';
                                var1[var4] = var5;
                                var1 = var2.bind(var3)(var1);
                                var0 = true;
                            case 431:
                                return var0;
                            case 433:
                                var0 = false;
                                return var0;
                            case 437:
                                var0 = false;
                                return var0;
                            case 441:
                                var0 = false;
                                return var0;
                        }
                    };
                    var0.scrollToLocation = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53065: for (var _fun53065_ip = 0;;) switch (_fun53065_ip) {
                            case 0:
                                var8 = arg0;
                                var6 = arguments[1];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun53065_ip = 14;
                                    continue _fun53065
                                }
                            case 12:
                                var6 = false;
                            case 14:
                                var0 = _closure3_slot0;
                                var1 = var0.scrollView;
                                var4 = var1.current;
                                var0 = var0.state;
                                var2 = var0.fastListComputer;
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun53065_ip = 149;
                                    continue _fun53065
                                }
                            case 52:
                                var1 = var2.getSize;
                                var2 = var1.bind(var2)();
                                var1 = _closure3_slot0;
                                var1 = var1.containerSize;
                                var1 = var2 - var1;
                                var1 = var8 <= var1;
                                if (!var1) {
                                    _fun53065_ip = 97;
                                    continue _fun53065
                                }
                            case 83:
                                var2 = _closure3_slot0;
                                var2 = var2.scrollPos;
                                var1 = var8 !== var2;
                            case 97:
                                if (!var1) {
                                    _fun53065_ip = 146;
                                    continue _fun53065
                                }
                            case 100:
                                var3 = var4.scrollTo;
                                var2 = {};
                                var7 = _closure3_slot0;
                                var5 = var7._scrollPositionToPoint;
                                var9 = var5.bind(var7)(var8);
                                var10 = var2;
                                var5 = copyDataProperties(var10, var9);
                                var5 = 'animated';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
                                var1 = true;
                            case 146:
                                var0 = var1;
                            case 149:
                                return var0;
                        }
                    };
                    var0.scrollTo = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53066: for (var _fun53066_ip = 0;;) switch (_fun53066_ip) {
                            case 0:
                                var7 = arg0;
                                var2 = _closure3_slot0;
                                var3 = var2.props;
                                var6 = var3.contentInset;
                                var0 = undefined;
                                if (!(var0 === var6)) {
                                    _fun53066_ip = 36;
                                    continue _fun53066
                                }
                            case 29:
                                var6 = _closure1_slot18;
                            case 36:
                                var8 = var3.horizontal;
                                var14 = var3.onScroll;
                                var5 = var3.onEndReached;
                                var11 = var3.endReachedThreshold;
                                var3 = var3.EXPERIMENTAL_enableAnchorWhileScrolling;
                                var13 = var0 !== var3;
                                if (!var13) {
                                    _fun53066_ip = 76;
                                    continue _fun53066
                                }
                            case 73:
                                var13 = var3;
                            case 76:
                                var2 = var2.state;
                                var19 = var2.fastListComputer;
                                var3 = var2.hasReachedEndBefore;
                                var2 = var7.nativeEvent;
                                var2 = var2.layoutMeasurement;
                                if (var8) {
                                    _fun53066_ip = 115;
                                    continue _fun53066
                                }
                            case 108:
                                var9 = var2.height;
                                _fun53066_ip = 120;
                                continue _fun53066;
                            case 115:
                                var9 = var2.width;
                            case 120:
                                if (var8) {
                                    _fun53066_ip = 130;
                                    continue _fun53066
                                }
                            case 123:
                                var15 = var6.top;
                                _fun53066_ip = 135;
                                continue _fun53066;
                            case 130:
                                var15 = var6.left;
                            case 135:
                                var12 = null;
                                var16 = var12 != var15;
                                var4 = 0;
                                var2 = 0;
                                if (!var16) {
                                    _fun53066_ip = 151;
                                    continue _fun53066
                                }
                            case 148:
                                var2 = var15;
                            case 151:
                                if (var8) {
                                    _fun53066_ip = 161;
                                    continue _fun53066
                                }
                            case 154:
                                var15 = var6.bottom;
                                _fun53066_ip = 166;
                                continue _fun53066;
                            case 161:
                                var15 = var6.right;
                            case 166:
                                var16 = var12 != var15;
                                var6 = 0;
                                if (!var16) {
                                    _fun53066_ip = 178;
                                    continue _fun53066
                                }
                            case 175:
                                var6 = var15;
                            case 178:
                                var15 = _closure3_slot0;
                                var2 = var9 - var2;
                                var2 = var2 - var6;
                                var15.containerSize = var2;
                                var2 = global;
                                var18 = var2.Math;
                                var17 = var18.min;
                                var20 = var2.Math;
                                var16 = var20.max;
                                var6 = var15.getScrollPositionFromEvent;
                                var6 = var6.bind(var15)(var7);
                                var16 = var16.bind(var20)(var4, var6);
                                var6 = var19.getSize;
                                var19 = var6.bind(var19)();
                                var6 = var15.containerSize;
                                var6 = var19 - var6;
                                var6 = var17.bind(var18)(var16, var6);
                                var15.scrollPos = var6;
                                if (!(var12 != var14)) {
                                    _fun53066_ip = 280;
                                    continue _fun53066
                                }
                            case 275:
                                var14 = var14.bind(var0)(var7);
                            case 280:
                                var14 = _closure3_slot0;
                                var15 = var14.deferNextCompute;
                                var14 = _closure3_slot0;
                                if (var15) {
                                    _fun53066_ip = 309;
                                    continue _fun53066
                                }
                            case 297:
                                var15 = var14.computeBlocks;
                                var15 = var15.bind(var14)();
                                _fun53066_ip = 380;
                                continue _fun53066;
                            case 309:
                                var15 = false;
                                var14.deferNextCompute = var15;
                                var15 = var14.deferredCompute;
                                var14 = -1;
                                if (!(var14 !== var15)) {
                                    _fun53066_ip = 354;
                                    continue _fun53066
                                }
                            case 333:
                                var15 = var2.cancelAnimationFrame;
                                var14 = _closure3_slot0;
                                var14 = var14.deferredCompute;
                                var14 = var15.bind(var0)(var14);
                            case 354:
                                var15 = _closure3_slot0;
                                var16 = var2.requestAnimationFrame;
                                var14 = function() { // Environment: var10
                                    var1 = _closure3_slot0;
                                    var0 = var1.computeBlocks;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var14 = var16.bind(var0)(var14);
                                var15.deferredCompute = var14;
                            case 380:
                                if (var13) {
                                    _fun53066_ip = 430;
                                    continue _fun53066
                                }
                            case 383:
                                var15 = var2.clearTimeout;
                                var13 = _closure3_slot0;
                                var14 = var13.disableAnchoringTimeout;
                                var14 = var15.bind(var0)(var14);
                                var15 = var2.setTimeout;
                                var14 = function() { // Environment: var10
                                    var0 = global;
                                    var3 = var0.clearTimeout;
                                    var1 = _closure3_slot0;
                                    var2 = var1.disableAnchoringTimeout;
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var1.disableAnchoringTimeout = var0;
                                    return var0;
                                };
                                var10 = 100;
                                var10 = var15.bind(var0)(var14, var10);
                                var13.disableAnchoringTimeout = var10;
                            case 430:
                                if (!(var12 != var5)) {
                                    _fun53066_ip = 606;
                                    continue _fun53066
                                }
                            case 437:
                                var7 = var7.nativeEvent;
                                var7 = var7.contentSize;
                                if (var8) {
                                    _fun53066_ip = 459;
                                    continue _fun53066
                                }
                            case 452:
                                var10 = var7.height;
                                _fun53066_ip = 464;
                                continue _fun53066;
                            case 459:
                                var10 = var7.width;
                            case 464:
                                var8 = var2.Math;
                                var7 = var8.ceil;
                                var12 = var12 != var11;
                                var4 = 0;
                                if (!var12) {
                                    _fun53066_ip = 488;
                                    continue _fun53066
                                }
                            case 485:
                                var4 = var11;
                            case 488:
                                var4 = var10 - var4;
                                var4 = var4 - var9;
                                var7 = var7.bind(var8)(var4);
                                var4 = var2.Math;
                                var2 = var4.ceil;
                                var6 = var2.bind(var4)(var6);
                                var4 = var6 >= var7;
                                if (!var4) {
                                    _fun53066_ip = 570;
                                    continue _fun53066
                                }
                            case 525:
                                if (var3) {
                                    _fun53066_ip = 570;
                                    continue _fun53066
                                }
                            case 528:
                                var9 = _closure3_slot0;
                                var8 = var9.setState;
                                var2 = {};
                                var10 = true;
                                var2.hasReachedEndBefore = var10;
                                var2 = var8.bind(var9)(var2);
                                var2 = {};
                                var6 = var6 - var7;
                                var2.distanceFromEnd = var6;
                                var2 = var5.bind(var0)(var2);
                                _fun53066_ip = 606;
                                continue _fun53066;
                            case 570:
                                var2 = !var4;
                                if (var4) {
                                    _fun53066_ip = 579;
                                    continue _fun53066
                                }
                            case 576:
                                var2 = var3;
                            case 579:
                                if (!var2) {
                                    _fun53066_ip = 606;
                                    continue _fun53066
                                }
                            case 582:
                                var4 = _closure3_slot0;
                                var3 = var4.setState;
                                var2 = {};
                                var5 = false;
                                var2.hasReachedEndBefore = var5;
                                var2 = var3.bind(var4)(var2);
                            case 606:
                                var2 = _closure3_slot0;
                                var1 = var2.queueViewabilityChange;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.handleScroll = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53069: for (var _fun53069_ip = 0;;) switch (_fun53069_ip) {
                            case 0:
                                var8 = arg0;
                                var2 = var8.nativeEvent;
                                var0 = _closure3_slot0;
                                var3 = var0.state;
                                var4 = var3.isFirstLayout;
                                var7 = var3.fastListComputer;
                                var3 = var0.props;
                                var12 = var3.contentInset;
                                var0 = undefined;
                                if (!(var0 === var12)) {
                                    _fun53069_ip = 57;
                                    continue _fun53069
                                }
                            case 50:
                                var12 = _closure1_slot18;
                            case 57:
                                var6 = var3.onLayout;
                                var9 = var3.horizontal;
                                var3 = var3.chunkBase;
                                var2 = var2.layout;
                                if (var9) {
                                    _fun53069_ip = 91;
                                    continue _fun53069
                                }
                            case 84:
                                var11 = var2.height;
                                _fun53069_ip = 96;
                                continue _fun53069;
                            case 91:
                                var11 = var2.width;
                            case 96:
                                if (var9) {
                                    _fun53069_ip = 106;
                                    continue _fun53069
                                }
                            case 99:
                                var13 = var12.top;
                                _fun53069_ip = 111;
                                continue _fun53069;
                            case 106:
                                var13 = var12.left;
                            case 111:
                                var2 = null;
                                var14 = var2 != var13;
                                var5 = 0;
                                if (!var14) {
                                    _fun53069_ip = 125;
                                    continue _fun53069
                                }
                            case 122:
                                var5 = var13;
                            case 125:
                                if (var9) {
                                    _fun53069_ip = 135;
                                    continue _fun53069
                                }
                            case 128:
                                var9 = var12.bottom;
                                _fun53069_ip = 140;
                                continue _fun53069;
                            case 135:
                                var9 = var12.right;
                            case 140:
                                var12 = var2 != var9;
                                var10 = 0;
                                if (!var12) {
                                    _fun53069_ip = 152;
                                    continue _fun53069
                                }
                            case 149:
                                var10 = var9;
                            case 152:
                                var9 = _closure3_slot0;
                                var5 = var11 - var5;
                                var5 = var5 - var10;
                                var9.containerSize = var5;
                                if (!(var2 == var3)) {
                                    _fun53069_ip = 195;
                                    continue _fun53069
                                }
                            case 174:
                                var9 = var7.setInfo;
                                var5 = _closure3_slot0;
                                var5 = var5.containerSize;
                                var5 = var9.bind(var7)(var5);
                            case 195:
                                if (!(var2 != var6)) {
                                    _fun53069_ip = 209;
                                    continue _fun53069
                                }
                            case 199:
                                var5 = _closure3_slot0;
                                var5 = var6.bind(var0)(var8, var5);
                            case 209:
                                if (var4) {
                                    _fun53069_ip = 228;
                                    continue _fun53069
                                }
                            case 212:
                                var5 = _closure3_slot0;
                                var4 = var5.computeBlocks;
                                var4 = var4.bind(var5)();
                                _fun53069_ip = 284;
                                continue _fun53069;
                            case 228:
                                if (!(var2 != var3)) {
                                    _fun53069_ip = 248;
                                    continue _fun53069
                                }
                            case 232:
                                var3 = _closure3_slot0;
                                var2 = var3.restoreScrollPosition;
                                var2 = var2.bind(var3)();
                                _fun53069_ip = 284;
                                continue _fun53069;
                            case 248:
                                var4 = _closure3_slot0;
                                var3 = var4.setState;
                                var6 = var4.getInitialState;
                                var5 = var4.containerSize;
                                var2 = false;
                                var2 = var6.bind(var4)(var5, var7, var2);
                                var2 = var3.bind(var4)(var2);
                            case 284:
                                var2 = _closure3_slot0;
                                var1 = var2.queueViewabilityChange;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.handleLayout = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun53070: for (var _fun53070_ip = 0;;) switch (_fun53070_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.onScrollEnd;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun53070_ip = 34;
                                    continue _fun53070
                                }
                            case 24:
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 34:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMomentumScrollEnd = var4;
                    var1 = function(arg0) { // Environment: var1
                        _fun53071: for (var _fun53071_ip = 0;;) switch (_fun53071_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.scrollAnchor;
                                var2 = var3.handleUserScroll;
                                var2 = var2.bind(var3)();
                                var1 = var1.props;
                                var2 = var1.onScrollBeginDrag;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun53071_ip = 65;
                                    continue _fun53071
                                }
                            case 42:
                                var0 = _closure3_slot0;
                                var2 = var0.props;
                                var1 = var2.onScrollBeginDrag;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 65:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleScrollBeginDrag = var1;
                    var1 = var0.props;
                    var4 = var1.batchesToRender;
                    var6 = 12;
                    if (!(var5 !== var4)) {
                        _fun53056_ip = 717;
                        continue _fun53056
                    }
                case 714:
                    var6 = var4;
                case 717:
                    var4 = var1.getAnchorIdFromIndex;
                    var1 = var1.getAnchorIndexFromId;
                    var5 = 5;
                    if (!(!(var6 < var5))) {
                        _fun53056_ip = 908;
                        continue _fun53056
                    }
                case 739:
                    if (!(var2 == var4)) {
                        _fun53056_ip = 747;
                        continue _fun53056
                    }
                case 743:
                    if (!(var2 != var1)) {
                        _fun53056_ip = 791;
                        continue _fun53056
                    }
                case 747:
                    if (!(var2 != var4)) {
                        _fun53056_ip = 755;
                        continue _fun53056
                    }
                case 751:
                    if (!(var2 == var1)) {
                        _fun53056_ip = 791;
                        continue _fun53056
                    }
                case 755:
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var22 = 'FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither';
                    var23 = var2;
                    var1 = new var23[var4](var22, var21);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 791:
                    var1 = var0.getViewabilityConfig;
                    var1 = var1.bind(var0)();
                    var2 = var1.minimumViewTime;
                    if (!(!(var2 <= var3))) {
                        _fun53056_ip = 872;
                        continue _fun53056
                    }
                case 811:
                    var2 = var1.visibilityThreshold;
                    if (!(!(var2 <= var3))) {
                        _fun53056_ip = 836;
                        continue _fun53056
                    }
                case 821:
                    var2 = var1.visibilityThreshold;
                    var1 = 1;
                    if (!(!(var2 > var1))) {
                        _fun53056_ip = 836;
                        continue _fun53056
                    }
                case 834:
                    return var0;
                case 836:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var22 = 'FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1';
                    var23 = var1;
                    var0 = new var23[var2](var22, var21);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 872:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var22 = 'FastList: `viewabilityConfig.minimumViewTime` must be greater than 0';
                    var23 = var1;
                    var0 = new var23[var2](var22, var21);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 908:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var22 = 'FastList: `batchesToRender` must be >= 6';
                    var23 = var1;
                    var0 = new var23[var2](var22, var21);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot10;
        var5 = {};
        var1 = 'computeScrollPosition';
        var5.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.state;
            var4 = var0.fastListComputer;
            var3 = var4.computeScrollPosition;
            var2 = false;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var5.value = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var6 = 'getInitialState';
        var5.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var0
            _fun53073: for (var _fun53073_ip = 0;;) switch (_fun53073_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var9 = arguments[3];
                    var8 = this;
                    var13 = undefined;
                    if (!(var9 === var13)) {
                        _fun53073_ip = 22;
                        continue _fun53073
                    }
                case 18:
                    var9 = new Array(0);
                case 22:
                    var0 = var8.props;
                    var2 = var0.initialScrollSection;
                    var7 = 0;
                    var21 = 0;
                    if (!(var13 !== var2)) {
                        _fun53073_ip = 44;
                        continue _fun53073
                    }
                case 41:
                    var21 = var2;
                case 44:
                    var19 = var0.initialScrollItem;
                    var2 = var0.initialScrollOrientation;
                    var20 = 'visible';
                    if (!(var13 !== var2)) {
                        _fun53073_ip = 67;
                        continue _fun53073
                    }
                case 64:
                    var20 = var2;
                case 67:
                    var17 = var0.initialScrollStart;
                    var2 = var0.stickySectionsVariant;
                    var22 = 'default';
                    var14 = var22;
                    if (!(var13 !== var2)) {
                        _fun53073_ip = 93;
                        continue _fun53073
                    }
                case 90:
                    var14 = var2;
                case 93:
                    var2 = var0.horizontal;
                    var11 = var13 !== var2;
                    if (!var11) {
                        _fun53073_ip = 109;
                        continue _fun53073
                    }
                case 106:
                    var11 = var2;
                case 109:
                    var0 = var0.scrollPosValue;
                    var2 = var3.setInfo;
                    var2 = var2.bind(var3)(var1);
                    var2 = _closure1_slot37;
                    var6 = var2.bind(var13)(var1);
                    var12 = null;
                    var2 = var12 != var17;
                    var16 = 0;
                    if (!var2) {
                        _fun53073_ip = 152;
                        continue _fun53073
                    }
                case 149:
                    var16 = var17;
                case 152:
                    var15 = var16 + var1;
                    if (!(var12 == var17)) {
                        _fun53073_ip = 345;
                        continue _fun53073
                    }
                case 163:
                    if (!(!(var21 > var7))) {
                        _fun53073_ip = 185;
                        continue _fun53073
                    }
                case 167:
                    var18 = var12 != var19;
                    var5 = var16;
                    var4 = var15;
                    var2 = undefined;
                    if (!var18) {
                        _fun53073_ip = 362;
                        continue _fun53073
                    }
                case 185:
                    var18 = var1 > var7;
                    var5 = var16;
                    var4 = var15;
                    var2 = undefined;
                    if (!var18) {
                        _fun53073_ip = 362;
                        continue _fun53073
                    }
                case 203:
                    var18 = var3.computeScrollPosition;
                    var14 = var22 === var14;
                    var14 = var18.bind(var3)(var14, var21, var19);
                    var18 = var12 != var14;
                    var5 = var16;
                    var4 = var15;
                    var2 = undefined;
                    if (!var18) {
                        _fun53073_ip = 362;
                        continue _fun53073
                    }
                case 238:
                    var19 = var8._calculateScrollPosition;
                    var18 = {};
                    var18.itemCoords = var14;
                    var21 = var3.getSize;
                    var21 = var21.bind(var3)();
                    var18.fullSize = var21;
                    var18.orientation = var20;
                    var20 = 16;
                    var18.paddingEnd = var20;
                    var20 = var19.bind(var8)(var18);
                    var19 = var20;
                    if (!(var12 == var19)) {
                        _fun53073_ip = 307;
                        continue _fun53073
                    }
                case 291:
                    var18 = var14.scrollPosition;
                    var14 = var14.sectionOffset;
                    var19 = var18 - var14;
                case 307:
                    var18 = var19 + var1;
                    var14 = var12 != var20;
                    var5 = var19;
                    var4 = var18;
                    var2 = undefined;
                    if (!var14) {
                        _fun53073_ip = 362;
                        continue _fun53073
                    }
                case 326:
                    var14 = var8._scrollPositionToPoint;
                    var2 = var14.bind(var8)(var20);
                    var5 = var19;
                    var4 = var18;
                    _fun53073_ip = 362;
                    continue _fun53073;
                case 345:
                    var14 = var8._scrollPositionToPoint;
                    var2 = var14.bind(var8)(var17);
                    var5 = var16;
                    var4 = var15;
                case 362:
                    if (!(var12 == var2)) {
                        _fun53073_ip = 376;
                        continue _fun53073
                    }
                case 366:
                    var2 = {
                        'x': 0,
                        'y': 0
                    };
                case 376:
                    if (var11) {
                        _fun53073_ip = 386;
                        continue _fun53073
                    }
                case 379:
                    var11 = var2.y;
                    _fun53073_ip = 391;
                    continue _fun53073;
                case 386:
                    var11 = var2.x;
                case 391:
                    if (!(var12 == var0)) {
                        _fun53073_ip = 434;
                        continue _fun53073
                    }
                case 395:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 15;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.makeMutable;
                    var10 = var10.bind(var12)(var11);
                    var8.scrollPosValue = var10;
                    _fun53073_ip = 450;
                    continue _fun53073;
                case 434:
                    var10 = var0.set;
                    var10 = var10.bind(var0)(var11);
                    var8.scrollPosValue = var0;
                case 450:
                    var0 = {};
                    if (!(!(var1 > var7))) {
                        _fun53073_ip = 472;
                        continue _fun53073
                    }
                case 456:
                    var1 = {};
                    var1.size = var7;
                    var7 = new Array(0);
                    var1.items = var7;
                    _fun53073_ip = 496;
                    continue _fun53073;
                case 472:
                    var8 = var3.compute;
                    var23 = true;
                    var27 = var3;
                    var26 = var5;
                    var25 = var4;
                    var24 = var9;
                    var1 = var27[var8](var26, var25, var24, var23, var22);
                case 496:
                    var26 = var0;
                    var25 = var1;
                    var1 = copyDataProperties(var26, var25);
                    var1 = 'batchSize';
                    var0[var1] = var6;
                    var1 = 'blockStart';
                    var0[var1] = var5;
                    var1 = 'blockEnd';
                    var0[var1] = var4;
                    var4 = arg2;
                    var1 = 'isFirstLayout';
                    var0[var1] = var4;
                    var1 = 'fastListComputer';
                    var0[var1] = var3;
                    var1 = 'initialContentOffset';
                    var0[var1] = var2;
                    var2 = false;
                    var1 = 'hasReachedEndBefore';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'componentDidMount';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53074: for (var _fun53074_ip = 0;;) switch (_fun53074_ip) {
                case 0:
                    var2 = this;
                    var4 = var2.scrollPosValue;
                    var _closure3_slot0 = var4;
                    var7 = var2.workletMounted;
                    var _closure3_slot1 = var7;
                    var0 = var2.props;
                    var1 = var0.horizontal;
                    var0 = undefined;
                    var8 = var0 !== var1;
                    if (!var8) {
                        _fun53074_ip = 48;
                        continue _fun53074
                    }
                case 45:
                    var8 = var1;
                case 48:
                    var _closure3_slot2 = var8;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 15;
                    var5 = var9[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.WorkletEventHandler;
                    var5 = function(arg0) { // Original name: t, environment: var3
                        _fun53075: for (var _fun53075_ip = 0;;) switch (_fun53075_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot2;
                                var2 = var1.contentOffset;
                                if (var3) {
                                    _fun53075_ip = 26;
                                    continue _fun53075
                                }
                            case 19:
                                var5 = var2.y;
                                _fun53075_ip = 31;
                                continue _fun53075;
                            case 26:
                                var5 = var2.x;
                            case 31:
                                var2 = _closure3_slot2;
                                var1 = var1.contentSize;
                                if (var2) {
                                    _fun53075_ip = 51;
                                    continue _fun53075
                                }
                            case 44:
                                var4 = var1.height;
                                _fun53075_ip = 56;
                                continue _fun53075;
                            case 51:
                                var4 = var1.width;
                            case 56:
                                var1 = 0;
                                var1 = var1 !== var4;
                                if (var1) {
                                    _fun53075_ip = 78;
                                    continue _fun53075
                                }
                            case 65:
                                var3 = _closure3_slot1;
                                var2 = var3.get;
                                var1 = var2.bind(var3)();
                            case 78:
                                if (!var1) {
                                    _fun53075_ip = 130;
                                    continue _fun53075
                                }
                            case 81:
                                var3 = _closure3_slot1;
                                var2 = var3.set;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                var1 = var2.set;
                                var0 = global;
                                var3 = var0.Math;
                                var0 = var3.min;
                                var0 = var0.bind(var3)(var5, var4);
                                var0 = var1.bind(var2)(var0);
                            case 130:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = {};
                    var3.horizontal = var8;
                    var3.workletMounted = var7;
                    var3.scrollPosValue = var4;
                    var5.__closure = var3;
                    var3 = 13353994165730.0;
                    var5.__workletHash = var3;
                    var3 = _closure1_slot31;
                    var5.__initData = var3;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = ['onScroll'];
                    var12 = var4;
                    var11 = var5;
                    var3 = new var12[var6](var11, var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.worklet = var3;
                    var3 = _closure1_slot14;
                    var1 = var2.scrollView;
                    var1 = var1.current;
                    var1 = var3.bind(var0)(var1);
                    var2.viewTag = var1;
                    var4 = var2.worklet;
                    var3 = var4.registerForEvents;
                    var1 = var2.viewTag;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.queueViewabilityChange;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'getSnapshotBeforeUpdate';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            _fun53076: for (var _fun53076_ip = 0;;) switch (_fun53076_ip) {
                case 0:
                    var3 = arg1;
                    var1 = this;
                    var0 = arg0;
                    var6 = var0.getAnchorIdFromIndex;
                    var0 = var1.props;
                    var2 = var0.EXPERIMENTAL_enableAnchorWhileScrolling;
                    var0 = undefined;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun53076_ip = 38;
                        continue _fun53076
                    }
                case 35:
                    var0 = var2;
                case 38:
                    var2 = var1.state;
                    var7 = var2.isFirstLayout;
                    if (var0) {
                        _fun53076_ip = 67;
                        continue _fun53076
                    }
                case 52:
                    var2 = var1.disableAnchoringTimeout;
                    var0 = null;
                    var2 = var0 == var2;
                    if (!var2) {
                        _fun53076_ip = 146;
                        continue _fun53076
                    }
                case 67:
                    var2 = null;
                    var4 = var2 == var6;
                    if (var4) {
                        _fun53076_ip = 79;
                        continue _fun53076
                    }
                case 76:
                    var4 = var7;
                case 79:
                    if (var4) {
                        _fun53076_ip = 92;
                        continue _fun53076
                    }
                case 82:
                    var5 = var3.isFirstLayout;
                    var4 = var7 !== var5;
                case 92:
                    if (var4) {
                        _fun53076_ip = 120;
                        continue _fun53076
                    }
                case 95:
                    var5 = var1.scrollAnchor;
                    var4 = var5.findOrUpdateAnchor;
                    var3 = var3.items;
                    var3 = var4.bind(var5)(var6, var3);
                case 120:
                    var3 = var1.scrollAnchor;
                    var1 = var3.hasAnchor;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun53076_ip = 143;
                        continue _fun53076
                    }
                case 141:
                    var1 = null;
                case 143:
                    var0 = var1;
                case 146:
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'componentDidUpdate';
        var5.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var0
            _fun53077: for (var _fun53077_ip = 0;;) switch (_fun53077_ip) {
                case 0:
                    var0 = arg1;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = arg0;
                    var4 = var3.scrollPosValue;
                    var3 = var1.props;
                    var3 = var3.scrollPosValue;
                    if (!(var4 === var3)) {
                        _fun53077_ip = 163;
                        continue _fun53077
                    }
                case 39:
                    var3 = var1.state;
                    var3 = var3.isFirstLayout;
                    if (var3) {
                        _fun53077_ip = 112;
                        continue _fun53077
                    }
                case 53:
                    var3 = var0.isFirstLayout;
                    if (!var3) {
                        _fun53077_ip = 112;
                        continue _fun53077
                    }
                case 62:
                    var3 = var1.props;
                    var4 = var3.chunkBase;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun53077_ip = 130;
                        continue _fun53077
                    }
                case 79:
                    var4 = var1.scrollView;
                    var4 = var4.current;
                    if (!(var3 != var4)) {
                        _fun53077_ip = 130;
                        continue _fun53077
                    }
                case 94:
                    var3 = var4.measure;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.restoreScrollPosition;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun53077_ip = 130;
                    continue _fun53077;
                case 112:
                    var2 = arg2;
                    if (!var2) {
                        _fun53077_ip = 130;
                        continue _fun53077
                    }
                case 118:
                    var2 = var1.anchorScroll;
                    var2 = var2.bind(var1)();
                case 130:
                    var2 = var1.state;
                    var2 = var2.items;
                    var0 = var0.items;
                    if (!(var2 !== var0)) {
                        _fun53077_ip = 159;
                        continue _fun53077
                    }
                case 149:
                    var0 = var1.queueViewabilityChange;
                    var0 = var0.bind(var1)();
                case 159:
                    var0 = undefined;
                    return var0;
                case 163:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = 'FastList: scrollPosValue cannot changed after mounting';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'getViewabilityConfig';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53079: for (var _fun53079_ip = 0;;) switch (_fun53079_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var3 = var0.viewabilityConfig;
                    var0 = {};
                    var1 = null;
                    var4 = var1 == var3;
                    var5 = undefined;
                    if (var4) {
                        _fun53079_ip = 33;
                        continue _fun53079
                    }
                case 27:
                    var5 = var3.minimumViewTime;
                case 33:
                    var6 = var1 != var5;
                    var4 = 1000;
                    if (!var6) {
                        _fun53079_ip = 49;
                        continue _fun53079
                    }
                case 46:
                    var4 = var5;
                case 49:
                    var0.minimumViewTime = var4;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun53079_ip = 69;
                        continue _fun53079
                    }
                case 63:
                    var2 = var3.visibilityThreshold;
                case 69:
                    var3 = var1 != var2;
                    var1 = 0.5;
                    if (!var3) {
                        _fun53079_ip = 89;
                        continue _fun53079
                    }
                case 86:
                    var1 = var2;
                case 89:
                    var0.visibilityThreshold = var1;
                    return var0;
            }
        };
        var5.value = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'queueViewabilityChange';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53080: for (var _fun53080_ip = 0;;) switch (_fun53080_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var2 = var0.onViewableItemsChanged;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun53080_ip = 81;
                        continue _fun53080
                    }
                case 20:
                    var0 = var1.getViewabilityConfig;
                    var0 = var0.bind(var1)();
                    var4 = var0.minimumViewTime;
                    var0 = global;
                    var5 = var0.clearTimeout;
                    var2 = var1.viewabilityDebounce;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var0.setTimeout;
                    var0 = var1.handleViewabilityChange;
                    var0 = var2.bind(var3)(var0, var4);
                    var1.viewabilityDebounce = var0;
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'reset';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53081: for (var _fun53081_ip = 0;;) switch (_fun53081_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var0 = var0.chunkBase;
                    var1 = var2.state;
                    var6 = var1.fastListComputer;
                    var5 = var1.items;
                    var1 = var1.isFirstLayout;
                    if (var1) {
                        _fun53081_ip = 88;
                        continue _fun53081
                    }
                case 39:
                    var1 = var2.setState;
                    var4 = var2.getInitialState;
                    var3 = null;
                    var7 = var3 != var0;
                    var3 = 0;
                    if (!var7) {
                        _fun53081_ip = 65;
                        continue _fun53081
                    }
                case 62:
                    var3 = var0;
                case 65:
                    var9 = false;
                    var12 = var2;
                    var11 = var3;
                    var10 = var6;
                    var8 = var5;
                    var0 = var12[var4](var11, var10, var9, var8, var7);
                    var0 = var1.bind(var2)(var0);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[7] = var5;
        var5 = {};
        var6 = 'componentWillUnmount';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53082: for (var _fun53082_ip = 0;;) switch (_fun53082_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.worklet;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun53082_ip = 32;
                        continue _fun53082
                    }
                case 15:
                    var2 = var3.unregisterFromEvents;
                    var1 = var0.viewTag;
                    var1 = var2.bind(var3)(var1);
                case 32:
                    var1 = var0.deferredCompute;
                    var2 = -1;
                    if (!(var2 !== var1)) {
                        _fun53082_ip = 69;
                        continue _fun53082
                    }
                case 48:
                    var1 = global;
                    var4 = var1.cancelAnimationFrame;
                    var3 = var0.deferredCompute;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                case 69:
                    var1 = var0.viewabilityDebounce;
                    if (!(var2 !== var1)) {
                        _fun53082_ip = 100;
                        continue _fun53082
                    }
                case 79:
                    var1 = global;
                    var2 = var1.clearTimeout;
                    var1 = var0.viewabilityDebounce;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[8] = var5;
        var5 = {};
        var6 = 'anchorScroll';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53083: for (var _fun53083_ip = 0;;) switch (_fun53083_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.props;
                    var7 = var0.getAnchorIndexFromId;
                    var2 = var0.stickySectionsVariant;
                    var9 = 'default';
                    var0 = undefined;
                    var1 = var9;
                    if (!(var0 !== var2)) {
                        _fun53083_ip = 36;
                        continue _fun53083
                    }
                case 33:
                    var1 = var2;
                case 36:
                    var2 = var3.state;
                    var8 = var2.fastListComputer;
                    var2 = null;
                    if (!(var2 != var7)) {
                        _fun53083_ip = 170;
                        continue _fun53083
                    }
                case 53:
                    var4 = var3.scrollAnchor;
                    var4 = var4.anchorOffset;
                    if (!(var2 != var4)) {
                        _fun53083_ip = 170;
                        continue _fun53083
                    }
                case 69:
                    var6 = var3.scrollAnchor;
                    var5 = var6.getAnchorIndex;
                    var5 = var5.bind(var6)(var7);
                    if (!(var2 != var5)) {
                        _fun53083_ip = 170;
                        continue _fun53083
                    }
                case 92:
                    var7 = var8.computeScrollPosition;
                    var6 = var5.section;
                    var5 = var5.item;
                    var1 = var9 === var1;
                    var1 = var7.bind(var8)(var1, var6, var5);
                    var2 = var2 != var1;
                    if (!var2) {
                        _fun53083_ip = 146;
                        continue _fun53083
                    }
                case 126:
                    var6 = var3.scrollPos;
                    var5 = var1.scrollPosition;
                    var5 = var5 - var4;
                    var2 = var6 !== var5;
                case 146:
                    if (!var2) {
                        _fun53083_ip = 170;
                        continue _fun53083
                    }
                case 149:
                    var2 = var3.scrollTo;
                    var1 = var1.scrollPosition;
                    var1 = var1 - var4;
                    var1 = var2.bind(var3)(var1);
                case 170:
                    return var0;
            }
        };
        var5.value = var6;
        var1[9] = var5;
        var5 = {};
        var6 = 'getSectionItemFromPosition';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.state;
            var3 = var0.fastListComputer;
            var2 = var3.getSectionItemFromPosition;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.value = var6;
        var1[10] = var5;
        var5 = {};
        var6 = 'getScrollPositionFromEvent';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            _fun53085: for (var _fun53085_ip = 0;;) switch (_fun53085_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.horizontal;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.contentOffset;
                    if (var0) {
                        _fun53085_ip = 39;
                        continue _fun53085
                    }
                case 32:
                    var0 = var1.y;
                    _fun53085_ip = 44;
                    continue _fun53085;
                case 39:
                    var0 = var1.x;
                case 44:
                    return var0;
            }
        };
        var5.value = var6;
        var1[11] = var5;
        var5 = {};
        var6 = 'restoreScrollPosition';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53086: for (var _fun53086_ip = 0;;) switch (_fun53086_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = var2.props;
                    var10 = var4.initialScrollItem;
                    var1 = var4.initialScrollSection;
                    var8 = 0;
                    var0 = undefined;
                    var9 = 0;
                    if (!(var0 !== var1)) {
                        _fun53086_ip = 39;
                        continue _fun53086
                    }
                case 36:
                    var9 = var1;
                case 39:
                    var5 = var4.initialScrollOrientation;
                    var1 = 'visible';
                    if (!(var0 !== var5)) {
                        _fun53086_ip = 56;
                        continue _fun53086
                    }
                case 53:
                    var1 = var5;
                case 56:
                    var4 = var4.initialScrollStart;
                    var6 = null;
                    if (!(var6 == var10)) {
                        _fun53086_ip = 79;
                        continue _fun53086
                    }
                case 68:
                    if (!(var9 <= var8)) {
                        _fun53086_ip = 79;
                        continue _fun53086
                    }
                case 72:
                    if (!(var6 != var4)) {
                        _fun53086_ip = 244;
                        continue _fun53086
                    }
                case 79:
                    if (!(var6 == var4)) {
                        _fun53086_ip = 228;
                        continue _fun53086
                    }
                case 86:
                    var7 = var2.scrollToLocation;
                    var5 = {};
                    var5.section = var9;
                    var11 = var6 != var10;
                    var6 = -1;
                    var9 = var6;
                    if (!var11) {
                        _fun53086_ip = 117;
                        continue _fun53086
                    }
                case 114:
                    var9 = var10;
                case 117:
                    var5.item = var9;
                    var5.orientation = var1;
                    var1 = 16;
                    var5.paddingEnd = var1;
                    var1 = true;
                    var5.setAnchor = var1;
                    var5 = var7.bind(var2)(var5);
                    if (var5) {
                        _fun53086_ip = 220;
                        continue _fun53086
                    }
                case 149:
                    var7 = var2.scrollPosValue;
                    var5 = var7.set;
                    var5 = var5.bind(var7)(var8);
                    var5 = var2.deferredCompute;
                    if (!(var6 !== var5)) {
                        _fun53086_ip = 194;
                        continue _fun53086
                    }
                case 175:
                    var5 = global;
                    var6 = var5.cancelAnimationFrame;
                    var5 = var2.deferredCompute;
                    var5 = var6.bind(var0)(var5);
                case 194:
                    var5 = global;
                    var5 = var5.requestAnimationFrame;
                    var3 = function() { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1.computeBlocks;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var5.bind(var0)(var3);
                    var2.deferredCompute = var3;
                    _fun53086_ip = 254;
                    continue _fun53086;
                case 220:
                    var2.deferNextCompute = var1;
                    _fun53086_ip = 254;
                    continue _fun53086;
                case 228:
                    var3 = var2.scrollTo;
                    var1 = false;
                    var1 = var3.bind(var2)(var4, var1);
                    _fun53086_ip = 254;
                    continue _fun53086;
                case 244:
                    var1 = var2.computeBlocks;
                    var1 = var1.bind(var2)();
                case 254:
                    return var0;
            }
        };
        var5.value = var6;
        var1[12] = var5;
        var5 = {};
        var6 = 'computeBlocks';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53088: for (var _fun53088_ip = 0;;) switch (_fun53088_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.props;
                    var2 = var1.batchesToRender;
                    var5 = 12;
                    var0 = undefined;
                    if (!(var0 !== var2)) {
                        _fun53088_ip = 26;
                        continue _fun53088
                    }
                case 23:
                    var5 = var2;
                case 26:
                    var10 = var1.chunkBase;
                    var1 = var3.state;
                    var8 = var1.fastListComputer;
                    var7 = var1.items;
                    var1 = null;
                    if (!(var1 == var10)) {
                        _fun53088_ip = 60;
                        continue _fun53088
                    }
                case 54:
                    var10 = var3.containerSize;
                case 60:
                    var6 = var3.scrollPos;
                    var9 = 0;
                    if (!(var9 !== var10)) {
                        _fun53088_ip = 210;
                        continue _fun53088
                    }
                case 75:
                    var2 = global;
                    var4 = var2.Math;
                    var1 = var4.ceil;
                    var10 = var1.bind(var4)(var10);
                    var4 = var2.Math;
                    var1 = var4.floor;
                    var13 = var1.bind(var4)(var6);
                    var1 = _closure1_slot37;
                    var1 = var1.bind(var0)(var10);
                    var6 = var2.Math;
                    var4 = var6.max;
                    var12 = var2.Math;
                    var11 = var12.round;
                    var2 = 2;
                    var10 = var10 / var2;
                    var10 = var13 + var10;
                    var10 = var10 / var1;
                    var10 = var11.bind(var12)(var10);
                    var2 = var5 / var2;
                    var2 = var10 - var2;
                    var2 = var4.bind(var6)(var9, var2);
                    var2 = var2 * var1;
                    var4 = {};
                    var4.batchSize = var1;
                    var4.blockStart = var2;
                    var1 = var1 * var5;
                    var1 = var2 + var1;
                    var4.blockEnd = var1;
                    _fun53088_ip = 224;
                    continue _fun53088;
                case 210:
                    var4 = {
                        'batchSize': 0,
                        'blockStart': 0,
                        'blockEnd': 0
                    };
                case 224:
                    var2 = var4.batchSize;
                    var1 = var3.state;
                    var1 = var1.batchSize;
                    var1 = var2 === var1;
                    if (!var1) {
                        _fun53088_ip = 269;
                        continue _fun53088
                    }
                case 248:
                    var5 = var4.blockStart;
                    var2 = var3.state;
                    var2 = var2.blockStart;
                    var1 = var5 === var2;
                case 269:
                    if (!var1) {
                        _fun53088_ip = 293;
                        continue _fun53088
                    }
                case 272:
                    var5 = var4.blockEnd;
                    var2 = var3.state;
                    var2 = var2.blockEnd;
                    var1 = var5 === var2;
                case 293:
                    if (var1) {
                        _fun53088_ip = 362;
                        continue _fun53088
                    }
                case 296:
                    var2 = var3.setState;
                    var1 = {};
                    var16 = var1;
                    var15 = var4;
                    var5 = copyDataProperties(var16, var15);
                    var6 = var8.compute;
                    var5 = var4.blockStart;
                    var4 = var4.blockEnd;
                    var15 = var6.bind(var8)(var5, var4, var7);
                    var16 = var1;
                    var4 = copyDataProperties(var16, var15);
                    var5 = false;
                    var4 = 'isFirstLayout';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                case 362:
                    return var0;
            }
        };
        var5.value = var6;
        var1[13] = var5;
        var5 = {};
        var6 = 'renderItems';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53089: for (var _fun53089_ip = 0;;) switch (_fun53089_ip) {
                case 0:
                    var21 = this;
                    var0 = var21.props;
                    var1 = var0.stickySectionsVariant;
                    var20 = 'default';
                    var19 = undefined;
                    var18 = var20;
                    if (!(var19 !== var1)) {
                        _fun53089_ip = 32;
                        continue _fun53089
                    }
                case 29:
                    var18 = var1;
                case 32:
                    var17 = var0.renderHeader;
                    if (!(var19 === var17)) {
                        _fun53089_ip = 49;
                        continue _fun53089
                    }
                case 42:
                    var17 = _closure1_slot35;
                case 49:
                    var _closure3_slot0 = var17;
                    var16 = var0.renderFooter;
                    if (!(var19 === var16)) {
                        _fun53089_ip = 70;
                        continue _fun53089
                    }
                case 63:
                    var16 = _closure1_slot35;
                case 70:
                    var _closure3_slot1 = var16;
                    var15 = var0.renderSection;
                    if (!(var19 === var15)) {
                        _fun53089_ip = 91;
                        continue _fun53089
                    }
                case 84:
                    var15 = _closure1_slot35;
                case 91:
                    var _closure3_slot2 = var15;
                    var14 = var0.renderItem;
                    var _closure3_slot3 = var14;
                    var13 = var0.renderSectionFooter;
                    if (!(var19 === var13)) {
                        _fun53089_ip = 122;
                        continue _fun53089
                    }
                case 115:
                    var13 = _closure1_slot35;
                case 122:
                    var _closure3_slot4 = var13;
                    var1 = var0.optimizeListItemRender;
                    var12 = var19 !== var1;
                    if (!var12) {
                        _fun53089_ip = 142;
                        continue _fun53089
                    }
                case 139:
                    var12 = var1;
                case 142:
                    var1 = var0.disableContentWrappers;
                    var11 = var19 !== var1;
                    if (!var11) {
                        _fun53089_ip = 158;
                        continue _fun53089
                    }
                case 155:
                    var11 = var1;
                case 158:
                    var0 = var0.debugLayout;
                    var0 = var21.state;
                    var2 = var0.items;
                    var0 = var21.props;
                    var0 = var0.horizontal;
                    var1 = null;
                    var10 = var1 != var0;
                    if (!var10) {
                        _fun53089_ip = 197;
                        continue _fun53089
                    }
                case 194:
                    var10 = var0;
                case 197:
                    var9 = new Array(0);
                    var _closure3_slot5 = var9;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var22
                        _fun53090: for (var _fun53090_ip = 0;;) switch (_fun53090_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.type;
                                var2 = var0.layoutStart;
                                var0 = _closure1_slot20;
                                var0 = var0.SECTION;
                                if (!(var1 === var0)) {
                                    _fun53090_ip = 48;
                                    continue _fun53090
                                }
                            case 31:
                                var1 = _closure3_slot5;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 48:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = new Array(0);
                    var1 = _closure1_slot33;
                    var7 = var1.bind(var19)(var2);
                    var2 = var7.bind(var19)();
                    var1 = var2.done;
                    var6 = global;
                    var5 = '';
                    var4 = false;
                    var3 = 0;
                    if (var1) {
                        _fun53089_ip = 1103;
                        continue _fun53089
                    }
                case 261:
                    var25 = var2.value;
                    var28 = var25.type;
                    var27 = var25.key;
                    var30 = var25.layoutStart;
                    var23 = var25.recyclerKey;
                    var1 = var25.layoutSize;
                    var24 = var25.section;
                    var25 = var25.item;
                    if (!(var3 !== var1)) {
                        _fun53089_ip = 1085;
                        continue _fun53089
                    }
                case 311:
                    var26 = _closure1_slot20;
                    var26 = var26.SPACER;
                    if (!(var26 !== var28)) {
                        _fun53089_ip = 1032;
                        continue _fun53089
                    }
                case 328:
                    var26 = _closure1_slot20;
                    var26 = var26.HEADER;
                    if (!(var26 !== var28)) {
                        _fun53089_ip = 942;
                        continue _fun53089
                    }
                case 345:
                    var26 = _closure1_slot20;
                    var26 = var26.FOOTER;
                    if (!(var26 !== var28)) {
                        _fun53089_ip = 849;
                        continue _fun53089
                    }
                case 362:
                    var26 = _closure1_slot20;
                    var26 = var26.SECTION;
                    if (!(var26 !== var28)) {
                        _fun53089_ip = 608;
                        continue _fun53089
                    }
                case 379:
                    var26 = _closure1_slot20;
                    var26 = var26.ITEM;
                    if (!(var26 !== var28)) {
                        _fun53089_ip = 507;
                        continue _fun53089
                    }
                case 393:
                    var26 = _closure1_slot20;
                    var26 = var26.SECTION_FOOTER;
                    if (!(var26 === var28)) {
                        _fun53089_ip = 1085;
                        continue _fun53089
                    }
                case 410:
                    var28 = var0.push;
                    var32 = _closure1_slot16;
                    var31 = _closure1_slot26;
                    var29 = {};
                    var29.recyclerKey = var23;
                    var29.horizontal = var10;
                    var29.disableWrapper = var11;
                    var29.fastListInstance = var21;
                    var29.layoutSize = var1;
                    var29.section = var24;
                    var29.debug = var4;
                    var26 = var13;
                    if (var12) {
                        _fun53089_ip = 470;
                        continue _fun53089
                    }
                case 465:
                    var26 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot4;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 470:
                    var29.children = var26;
                    var26 = var6.HermesInternal;
                    var26 = var26.concat;
                    var26 = var26.bind(var5)(var27);
                    var26 = var32.bind(var19)(var31, var29, var26);
                    var26 = var28.bind(var0)(var26);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 507:
                    var26 = var0.push;
                    var31 = _closure1_slot16;
                    var29 = _closure1_slot27;
                    var28 = {};
                    var28.recyclerKey = var23;
                    var28.horizontal = var10;
                    var28.disableWrapper = var11;
                    var28.layoutSize = var1;
                    var28.fastListInstance = var21;
                    var28.section = var24;
                    var28.item = var25;
                    var28.debug = var4;
                    var25 = var14;
                    if (var12) {
                        _fun53089_ip = 571;
                        continue _fun53089
                    }
                case 566:
                    var25 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot3;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 571:
                    var28.children = var25;
                    var25 = var6.HermesInternal;
                    var25 = var25.concat;
                    var25 = var25.bind(var5)(var27);
                    var25 = var31.bind(var19)(var29, var28, var25);
                    var25 = var26.bind(var0)(var25);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 608:
                    var25 = var9.shift;
                    var25 = var25.bind(var9)();
                    if (!(var20 === var18)) {
                        _fun53089_ip = 747;
                        continue _fun53089
                    }
                case 625:
                    var26 = var0.push;
                    var31 = _closure1_slot16;
                    var29 = _closure1_slot24;
                    var28 = {};
                    var28.recyclerKey = var23;
                    var28.horizontal = var10;
                    var28.disableWrapper = var11;
                    var28.layoutStart = var30;
                    var28.layoutSize = var1;
                    var25 = var9[var3];
                    var28.nextSectionLayoutPosition = var25;
                    var25 = var21.scrollPosValue;
                    var28.scrollPosValue = var25;
                    var28.fastListInstance = var21;
                    var28.section = var24;
                    var28.debug = var4;
                    var25 = var15;
                    if (var12) {
                        _fun53089_ip = 710;
                        continue _fun53089
                    }
                case 705:
                    var25 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot2;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 710:
                    var28.children = var25;
                    var25 = var6.HermesInternal;
                    var25 = var25.concat;
                    var25 = var25.bind(var5)(var27);
                    var25 = var31.bind(var19)(var29, var28, var25);
                    var25 = var26.bind(var0)(var25);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 747:
                    var25 = var0.push;
                    var29 = _closure1_slot16;
                    var28 = _closure1_slot25;
                    var26 = {};
                    var26.recyclerKey = var23;
                    var26.horizontal = var10;
                    var26.disableWrapper = var11;
                    var26.layoutStart = var30;
                    var26.layoutSize = var1;
                    var26.fastListInstance = var21;
                    var26.section = var24;
                    var26.debug = var4;
                    var24 = var15;
                    if (var12) {
                        _fun53089_ip = 812;
                        continue _fun53089
                    }
                case 807:
                    var24 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot2;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 812:
                    var26.children = var24;
                    var24 = var6.HermesInternal;
                    var24 = var24.concat;
                    var24 = var24.bind(var5)(var27);
                    var24 = var29.bind(var19)(var28, var26, var24);
                    var24 = var25.bind(var0)(var24);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 849:
                    var25 = var0.push;
                    var29 = _closure1_slot16;
                    var28 = _closure1_slot28;
                    var26 = {};
                    var26.recyclerKey = var23;
                    var26.horizontal = var10;
                    var26.disableWrapper = var11;
                    var26.fastListInstance = var21;
                    var26.layoutSize = var1;
                    var26.debug = var4;
                    var24 = var16;
                    if (var12) {
                        _fun53089_ip = 905;
                        continue _fun53089
                    }
                case 900:
                    var24 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot1;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 905:
                    var26.children = var24;
                    var24 = var6.HermesInternal;
                    var24 = var24.concat;
                    var24 = var24.bind(var5)(var27);
                    var24 = var29.bind(var19)(var28, var26, var24);
                    var24 = var25.bind(var0)(var24);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 942:
                    var24 = var0.push;
                    var28 = _closure1_slot16;
                    var26 = _closure1_slot28;
                    var25 = {};
                    var25.recyclerKey = var23;
                    var25.horizontal = var10;
                    var25.disableWrapper = var11;
                    var25.fastListInstance = var21;
                    var25.layoutSize = var1;
                    var25.debug = var4;
                    var23 = var17;
                    if (var12) {
                        _fun53089_ip = 998;
                        continue _fun53089
                    }
                case 993:
                    var23 = function(arg0) { // Environment: var22
                        var6 = 0;
                        var5 = copyRestArgs(var6);
                        var2 = _closure3_slot0;
                        var1 = new Array(0);
                        var6 = var1;
                        var4 = 0;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                case 998:
                    var25.children = var23;
                    var23 = var6.HermesInternal;
                    var23 = var23.concat;
                    var23 = var23.bind(var5)(var27);
                    var23 = var28.bind(var19)(var26, var25, var23);
                    var23 = var24.bind(var0)(var23);
                    _fun53089_ip = 1085;
                    continue _fun53089;
                case 1032:
                    var23 = var0.push;
                    var26 = _closure1_slot16;
                    var25 = _closure1_slot29;
                    var24 = {};
                    var24.horizontal = var10;
                    var24.layoutSize = var1;
                    var1 = var6.HermesInternal;
                    var1 = var1.concat;
                    var1 = var1.bind(var5)(var27);
                    var1 = var26.bind(var19)(var25, var24, var1);
                    var1 = var23.bind(var0)(var1);
                case 1085:
                    var23 = var7.bind(var19)();
                    var1 = var23.done;
                    var2 = var23;
                    if (!var1) {
                        _fun53089_ip = 261;
                        continue _fun53089
                    }
                case 1103:
                    return var0;
            }
        };
        var5.value = var6;
        var1[14] = var5;
        var5 = {};
        var6 = 'isEmpty';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.props;
            var3 = var0.sections;
            var2 = var3.reduce;
            var0 = function(arg0, arg1) { // Environment: var0
                var1 = arg0;
                var0 = arg1;
                var0 = var1 + var0;
                return var0;
            };
            var1 = 0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = var1 === var0;
            return var0;
        };
        var5.value = var6;
        var1[15] = var5;
        var5 = {};
        var6 = 'setDisableRecycling';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            var0 = this;
            var0 = var0.state;
            var2 = var0.fastListComputer;
            var1 = var2.setDisableRecycling;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[16] = var5;
        var5 = {};
        var6 = 'render';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun53100: for (var _fun53100_ip = 0;;) switch (_fun53100_ip) {
                case 0:
                    var7 = this;
                    var4 = var7.props;
                    var0 = var4.manualRef;
                    var0 = var4.onScroll;
                    var0 = var4.onScrollEnd;
                    var0 = var4.onLayout;
                    var0 = var4.renderHeader;
                    var0 = var4.renderFooter;
                    var0 = var4.renderSection;
                    var0 = var4.renderItem;
                    var0 = var4.renderSectionFooter;
                    var0 = var4.getRecyclerKey;
                    var0 = var4.onEndReached;
                    var0 = var4.endReachedThreshold;
                    var0 = var4.headerSize;
                    var0 = var4.footerSize;
                    var0 = var4.sectionSize;
                    var0 = var4.sectionFooterSize;
                    var0 = var4.itemSize;
                    var0 = var4.sections;
                    var0 = var4.scrollPosValue;
                    var0 = var4.batchesToRender;
                    var0 = var4.optimizeListItemRender;
                    var0 = var4.initialScrollSection;
                    var0 = var4.initialScrollItem;
                    var0 = var4.initialScrollOrientation;
                    var0 = var4.initialScrollStart;
                    var0 = var4.getAnchorIdFromIndex;
                    var0 = var4.getAnchorIndexFromId;
                    var0 = var4.EXPERIMENTAL_enableAnchorWhileScrolling;
                    var0 = var4.chunkBase;
                    var0 = var4.disableContentWrappers;
                    var0 = var4.childrenWrapper;
                    var0 = var4.stickyHeaderFooter;
                    var0 = var4.stickySectionsVariant;
                    var0 = var4.persistantKeys;
                    var0 = var4.disableRecyclingOnFullCompute;
                    var0 = var4.disableLegacyGestureHandling;
                    var0 = var4.viewabilityConfig;
                    var0 = var4.onViewableItemsChanged;
                    var0 = var4.debugLayout;
                    var6 = var4.renderAccessory;
                    var10 = var4.removeClippedSubviews;
                    var3 = undefined;
                    if (!(var3 === var10)) {
                        _fun53100_ip = 295;
                        continue _fun53100
                    }
                case 262:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isAndroid;
                    var10 = var0.bind(var1)();
                case 295:
                    var0 = var4.inActionSheet;
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot3;
                    var11 = var2.bind(var3)(var4, var1);
                    if (var0) {
                        _fun53100_ip = 327;
                        continue _fun53100
                    }
                case 321:
                    var8 = _closure1_slot13;
                    _fun53100_ip = 353;
                    continue _fun53100;
                case 327:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var0 = var1.bind(var3)(var0);
                    var8 = var0.BottomSheetScrollView;
                case 353:
                    var2 = _closure1_slot15;
                    var1 = _closure1_slot17;
                    var0 = {};
                    var5 = _closure1_slot16;
                    var4 = {};
                    var14 = var4;
                    var13 = var11;
                    var11 = copyDataProperties(var14, var13);
                    var12 = 'list';
                    var11 = 'accessibilityRole';
                    var4[var11] = var12;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 19;
                    var9 = var12[var9];
                    var11 = var11.bind(var3)(var9);
                    var9 = var7.scrollView;
                    var11 = var11.bind(var3)(var9);
                    var9 = 'ref';
                    var4[var9] = var11;
                    var11 = 16;
                    var9 = 'scrollEventThrottle';
                    var4[var9] = var11;
                    var9 = var7.state;
                    var11 = var9.initialContentOffset;
                    var9 = 'contentOffset';
                    var4[var9] = var11;
                    var11 = var7.handleScroll;
                    var9 = 'onScroll';
                    var4[var9] = var11;
                    var11 = var7.handleLayout;
                    var9 = 'onLayout';
                    var4[var9] = var11;
                    var11 = var7.handleMomentumScrollEnd;
                    var9 = 'onMomentumScrollEnd';
                    var4[var9] = var11;
                    var11 = var7.handleScrollBeginDrag;
                    var9 = 'onScrollBeginDrag';
                    var4[var9] = var11;
                    var9 = 'removeClippedSubviews';
                    var4[var9] = var10;
                    var9 = var7.renderItems;
                    var10 = var9.bind(var7)();
                    var9 = 'children';
                    var4[var9] = var10;
                    var5 = var5.bind(var3)(var8, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = null;
                    var8 = var5 != var6;
                    if (!var8) {
                        _fun53100_ip = 584;
                        continue _fun53100
                    }
                case 579:
                    var5 = var6.bind(var3)(var7);
                case 584:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var5.value = var6;
        var1[17] = var5;
        var5 = {};
        var6 = 'getDerivedStateFromProps';
        var5.key = var6;
        var0 = function(arg0, arg1) { // Original name: value, environment: var0
            _fun53101: for (var _fun53101_ip = 0;;) switch (_fun53101_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var10 = var2.fastListComputer;
                    var1 = var10.updateProps;
                    var0 = {};
                    var3 = var4.headerSize;
                    var0.headerSize = var3;
                    var3 = var4.footerSize;
                    var0.footerSize = var3;
                    var3 = var4.sectionSize;
                    var0.sectionSize = var3;
                    var3 = var4.itemSize;
                    var0.itemSize = var3;
                    var3 = var4.sectionFooterSize;
                    var0.sectionFooterSize = var3;
                    var3 = var4.sections;
                    var0.sections = var3;
                    var3 = var4.insetStart;
                    var0.insetStart = var3;
                    var3 = var4.insetEnd;
                    var0.insetEnd = var3;
                    var6 = var4.stickyHeaderFooter;
                    var5 = null;
                    var3 = var5 != var6;
                    if (!var3) {
                        _fun53101_ip = 126;
                        continue _fun53101
                    }
                case 123:
                    var3 = var6;
                case 126:
                    var0.stickyHeaderFooter = var3;
                    var3 = var4.getRecyclerKey;
                    var0.getRecyclerKey = var3;
                    var3 = var4.persistantKeys;
                    var0.persistantKeys = var3;
                    var6 = var4.disableRecyclingOnFullCompute;
                    var3 = var5 != var6;
                    if (!var3) {
                        _fun53101_ip = 169;
                        continue _fun53101
                    }
                case 166:
                    var3 = var6;
                case 169:
                    var0.disableRecyclingOnFullCompute = var3;
                    var0 = var1.bind(var10)(var0);
                    var0 = var2.batchSize;
                    var3 = 0;
                    if (!(var3 !== var0)) {
                        _fun53101_ip = 268;
                        continue _fun53101
                    }
                case 191:
                    var0 = var10.isDirty;
                    var1 = var0.bind(var10)();
                    var0 = null;
                    if (!var1) {
                        _fun53101_ip = 266;
                        continue _fun53101
                    }
                case 206:
                    var1 = {};
                    var14 = var1;
                    var13 = var2;
                    var6 = copyDataProperties(var14, var13);
                    var9 = var10.compute;
                    var8 = var2.blockStart;
                    var7 = var2.blockEnd;
                    var6 = var2.items;
                    if (!(var5 == var6)) {
                        _fun53101_ip = 249;
                        continue _fun53101
                    }
                case 245:
                    var6 = new Array(0);
                case 249:
                    var13 = var9.bind(var10)(var8, var7, var6);
                    var14 = var1;
                    var6 = copyDataProperties(var14, var13);
                    var0 = var1;
                case 266:
                    _fun53101_ip = 345;
                    continue _fun53101;
                case 268:
                    var1 = {};
                    var14 = var1;
                    var13 = var2;
                    var2 = copyDataProperties(var14, var13);
                    var6 = var4.insetStart;
                    var7 = var5 != var6;
                    var2 = 0;
                    if (!var7) {
                        _fun53101_ip = 298;
                        continue _fun53101
                    }
                case 295:
                    var2 = var6;
                case 298:
                    var4 = var4.insetEnd;
                    var5 = var5 != var4;
                    var3 = 0;
                    if (!var5) {
                        _fun53101_ip = 316;
                        continue _fun53101
                    }
                case 313:
                    var3 = var4;
                case 316:
                    var3 = var2 + var3;
                    var2 = 'size';
                    var1[var2] = var3;
                    var3 = new Array(0);
                    var2 = 'items';
                    var1[var2] = var3;
                    var0 = var1;
                case 345:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 15;
    var1 = var9[var1];
    var7 = var7.bind(var0)(var1);
    var1 = var7.createAnimatedComponent;
    var1 = var1.bind(var7)(var6);
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'lib/native/FastList.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var5 = function(arg0, arg1, arg2) { // Original name: getItemSizeOverrideKey, environment: var5
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var11 = '';
        var10 = arg0;
        var2 = ':';
        var8 = arg1;
        var6 = arg2;
        var9 = var2;
        var7 = var2;
        var0 = var11[var5](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getItemSizeOverrideKey = var5;
    var2.FastListItemTypes = var4;
    var2.FastListComputer = var3;
    var2.AnimatedFastList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 15, 17, 18, 57, 6, 7, 31, 27, 33, 22, 628, 6419, 3900, 478, 3679, 6420, 5218, 4896, 6422, 2]);