// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun45713: for (var _fun45713_ip = 0;;) switch (_fun45713_ip) {
                case 0:
                    var3 = arg0;
                    var9 = this;
                    var _closure3_slot0 = var9;
                    var4 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var9, var2);
                    var2 = new Array(0);
                    var9.viewabilityHelpers = var2;
                    var2 = false;
                    var9.hasInteracted = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.viewabilityHelpers;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.dispose;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var9.dispose = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.updateViewableItems;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var9.onVisibleIndicesChanged = var2;
                    var2 = function() { // Environment: var1
                        _fun45717: for (var _fun45717_ip = 0;;) switch (_fun45717_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.hasInteracted;
                                if (var1) {
                                    _fun45717_ip = 61;
                                    continue _fun45717
                                }
                            case 16:
                                var1 = _closure3_slot0;
                                var0 = true;
                                var1.hasInteracted = var0;
                                var3 = var1.viewabilityHelpers;
                                var2 = var3.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = true;
                                    var0 = arg0;
                                    var0.hasInteracted = var1;
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var0);
                                var0 = var1.updateViewableItems;
                                var0 = var0.bind(var1)();
                            case 61:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var9.recordInteraction = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun45719: for (var _fun45719_ip = 0;;) switch (_fun45719_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = _closure3_slot0;
                                var0 = var0.flashListRef;
                                var6 = var0.recyclerlistview_unsafe;
                                var5 = null;
                                var4 = var5 == var6;
                                var0 = undefined;
                                var3 = undefined;
                                if (var4) {
                                    _fun45719_ip = 51;
                                    continue _fun45719
                                }
                            case 41:
                                var4 = var6.getRenderedSize;
                                var3 = var4.bind(var6)();
                            case 51:
                                if (!(var5 == var3)) {
                                    _fun45719_ip = 76;
                                    continue _fun45719
                                }
                            case 55:
                                var4 = _closure3_slot0;
                                var4 = var4.flashListRef;
                                var4 = var4.props;
                                var3 = var4.estimatedListSize;
                            case 76:
                                var _closure4_slot1 = var3;
                                if (!(var0 !== var3)) {
                                    _fun45719_ip = 299;
                                    continue _fun45719
                                }
                            case 87:
                                var3 = _closure3_slot0;
                                var3 = var3.shouldListenToVisibleIndices;
                                if (!var3) {
                                    _fun45719_ip = 299;
                                    continue _fun45719
                                }
                            case 103:
                                var3 = _closure3_slot0;
                                var3 = var3.flashListRef;
                                var6 = var3.recyclerlistview_unsafe;
                                var3 = var5 == var6;
                                var4 = undefined;
                                if (var3) {
                                    _fun45719_ip = 138;
                                    continue _fun45719
                                }
                            case 128:
                                var3 = var6.getCurrentScrollOffset;
                                var4 = var3.bind(var6)();
                            case 138:
                                var6 = var5 != var4;
                                var7 = 0;
                                if (!var6) {
                                    _fun45719_ip = 150;
                                    continue _fun45719
                                }
                            case 147:
                                var7 = var4;
                            case 150:
                                var4 = _closure3_slot0;
                                var6 = var4.flashListRef;
                                var6 = var6.firstItemOffset;
                                var6 = var7 - var6;
                                var _closure4_slot2 = var6;
                                var4 = var4.flashListRef;
                                var4 = var4.props;
                                var4 = var4.bottomViewabilityInsetRef;
                                var7 = var5 == var4;
                                var6 = undefined;
                                if (var7) {
                                    _fun45719_ip = 205;
                                    continue _fun45719
                                }
                            case 200:
                                var6 = var4.current;
                            case 205:
                                var7 = var5 != var6;
                                var4 = 0;
                                if (!var7) {
                                    _fun45719_ip = 217;
                                    continue _fun45719
                                }
                            case 214:
                                var4 = var6;
                            case 217:
                                var _closure4_slot3 = var4;
                                var4 = _closure3_slot0;
                                var4 = var4.flashListRef;
                                var4 = var4.props;
                                var6 = var4.topViewabilityInsetRef;
                                var7 = var5 == var6;
                                var4 = undefined;
                                if (var7) {
                                    _fun45719_ip = 258;
                                    continue _fun45719
                                }
                            case 253:
                                var4 = var6.current;
                            case 258:
                                var5 = var5 != var4;
                                var3 = 0;
                                if (!var5) {
                                    _fun45719_ip = 270;
                                    continue _fun45719
                                }
                            case 267:
                                var3 = var4;
                            case 270:
                                var _closure4_slot4 = var3;
                                var2 = _closure3_slot0;
                                var3 = var2.viewabilityHelpers;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun45720: for (var _fun45720_ip = 0;;) switch (_fun45720_ip) {
                                        case 0:
                                            var8 = arg0;
                                            var7 = var8.updateViewableItems;
                                            var0 = _closure3_slot0;
                                            var0 = var0.flashListRef;
                                            var0 = var0.props;
                                            var0 = var0.horizontal;
                                            var1 = null;
                                            var6 = var1 != var0;
                                            if (!var6) {
                                                _fun45720_ip = 45;
                                                continue _fun45720
                                            }
                                        case 42:
                                            var6 = var0;
                                        case 45:
                                            var14 = _closure4_slot2;
                                            var13 = _closure4_slot3;
                                            var12 = _closure4_slot4;
                                            var11 = _closure4_slot1;
                                            var9 = _closure4_slot0;
                                            var10 = function(arg0) { // Environment: var0
                                                _fun45721: for (var _fun45721_ip = 0;;) switch (_fun45721_ip) {
                                                    case 0:
                                                        var0 = _closure3_slot0;
                                                        var0 = var0.flashListRef;
                                                        var3 = var0.recyclerlistview_unsafe;
                                                        var0 = null;
                                                        var1 = var0 == var3;
                                                        var0 = undefined;
                                                        if (var1) {
                                                            _fun45721_ip = 44;
                                                            continue _fun45721
                                                        }
                                                    case 30:
                                                        var2 = var3.getLayout;
                                                        var1 = arg0;
                                                        var0 = var2.bind(var3)(var1);
                                                    case 44:
                                                        return var0;
                                                }
                                            };
                                            var16 = var8;
                                            var15 = var6;
                                            var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                            case 299:
                                return var0;
                        }
                    };
                    var9.updateViewableItems = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var3 = var1.viewabilityHelpers;
                        var2 = var3.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = var1.clearLastReportedViewableIndices;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        var0 = var1.updateViewableItems;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var9.recomputeViewableItems = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = function arg0, arg1() {
                            _fun45725: for (var _fun45725_ip = 0;;) switch (_fun45725_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = _closure3_slot0;
                                    var1 = var1.flashListRef;
                                    var1 = var1.props;
                                    var1 = var1.data;
                                    var2 = null;
                                    var5 = var2 == var1;
                                    var4 = undefined;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun45725_ip = 43;
                                        continue _fun45725
                                    }
                                case 39:
                                    var2 = var1[var3];
                                case 43:
                                    if (!(var4 !== var2)) {
                                        _fun45725_ip = 101;
                                        continue _fun45725
                                    }
                                case 47:
                                    var1 = _closure3_slot0;
                                    var1 = var1.flashListRef;
                                    var1 = var1.props;
                                    var1 = var1.keyExtractor;
                                    if (!(var4 !== var1)) {
                                        _fun45725_ip = 101;
                                        continue _fun45725
                                    }
                                case 72:
                                    var0 = _closure3_slot0;
                                    var0 = var0.flashListRef;
                                    var1 = var0.props;
                                    var0 = var1.keyExtractor;
                                    var1 = var0.bind(var1)(var2, var3);
                                    _fun45725_ip = 110;
                                    continue _fun45725;
                                case 101:
                                    var0 = var3.toString;
                                    var1 = var0.bind(var3)();
                                case 110:
                                    var0 = {};
                                    var0.index = var3;
                                    var3 = arg1;
                                    var0.isViewable = var3;
                                    var0.item = var2;
                                    var0.key = var1;
                                    var1 = global;
                                    var2 = var1.Date;
                                    var1 = var2.now;
                                    var1 = var1.bind(var2)();
                                    var0.timestamp = var1;
                                    return var0;
                            }
                        };
                        var _closure4_slot1 = var1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var1 = var3.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var5 = arg0;
                        var4 = function(arg0, arg1, arg2) { // Environment: var0
                            _fun45726: for (var _fun45726_ip = 0;;) switch (_fun45726_ip) {
                                case 0:
                                    var5 = arg0;
                                    var8 = arg1;
                                    var9 = arg2;
                                    var2 = _closure4_slot0;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun45726_ip = 124;
                                        continue _fun45726
                                    }
                                case 24:
                                    var2 = _closure4_slot0;
                                    var1 = {};
                                    var4 = var5.map;
                                    var0 = function(arg0) { // Environment: var3
                                        var3 = _closure4_slot1;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = true;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var0 = var4.bind(var5)(var0);
                                    var1.viewableItems = var0;
                                    var6 = new Array(0);
                                    var5 = var6.concat;
                                    var7 = _closure1_slot2;
                                    var4 = var8.map;
                                    var0 = function(arg0) { // Environment: var3
                                        var3 = _closure4_slot1;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = true;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var4 = var4.bind(var8)(var0);
                                    var0 = undefined;
                                    var4 = var7.bind(var0)(var4);
                                    var8 = var9.map;
                                    var3 = function(arg0) { // Environment: var3
                                        var3 = _closure4_slot1;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = false;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var3 = var8.bind(var9)(var3);
                                    var3 = var7.bind(var0)(var3);
                                    var3 = var5.bind(var6)(var4, var3);
                                    var1.changed = var3;
                                    var0 = var2.bind(var0)(var1);
                                case 124:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var1;
                        var0 = new var6[var3](var5, var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var9.createViewabilityHelper = var2;
                    var9.flashListRef = var3;
                    var2 = var3.props;
                    var4 = var2.onViewableItemsChanged;
                    var2 = null;
                    var4 = var2 !== var4;
                    if (!var4) {
                        _fun45713_ip = 159;
                        continue _fun45713
                    }
                case 144:
                    var5 = var3.props;
                    var5 = var5.onViewableItemsChanged;
                    var4 = var0 !== var5;
                case 159:
                    if (!var4) {
                        _fun45713_ip = 212;
                        continue _fun45713
                    }
                case 162:
                    var6 = var9.viewabilityHelpers;
                    var5 = var6.push;
                    var8 = var9.createViewabilityHelper;
                    var4 = var3.props;
                    var7 = var4.viewabilityConfig;
                    var4 = var3.props;
                    var4 = var4.onViewableItemsChanged;
                    var4 = var8.bind(var9)(var7, var4);
                    var4 = var5.bind(var6)(var4);
                case 212:
                    var3 = var3.props;
                    var3 = var3.viewabilityConfigCallbackPairs;
                    if (!(var2 == var3)) {
                        _fun45713_ip = 231;
                        continue _fun45713
                    }
                case 227:
                    var3 = new Array(0);
                case 231:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var5 = _closure3_slot0;
                        var2 = var5.viewabilityHelpers;
                        var1 = var2.push;
                        var4 = var5.createViewabilityHelper;
                        var3 = var0.viewabilityConfig;
                        var0 = var0.onViewableItemsChanged;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'shouldListenToVisibleIndices';
        var0.key = var4;
        var1 = function() {
            var0 = this;
            var0 = var0.viewabilityHelpers;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5122, 5105, 5106, 5128]);