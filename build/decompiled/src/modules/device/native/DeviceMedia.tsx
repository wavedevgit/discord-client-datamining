// modules/device/native/DeviceMedia.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var6 = var7.create;
    var1 = function() { // Environment: var3
        var0 = {
            'assets': null,
            'page': 0,
            'hasReachedEnd': false,
            'lastAssetIndex': 0
        };
        return var0;
    };
    var1 = var6.bind(var7)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun75836: for (var _fun75836_ip = 0;;) switch (_fun75836_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.batchSize;
                var0 = undefined;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot4;
                var2 = var4.getState;
                var6 = var2.bind(var4)();
                var2 = var6.assets;
                var _closure2_slot0 = var2;
                var8 = var6.page;
                var5 = var6.lastAssetIndex;
                var _closure2_slot1 = var5;
                var4 = var6.hasReachedEnd;
                var6 = var6.endCursor;
                var10 = null;
                if (!(var10 != var2)) {
                    _fun75836_ip = 263;
                    continue _fun75836
                }
            case 81:
                if (var4) {
                    _fun75836_ip = 263;
                    continue _fun75836
                }
            case 87:
                var9 = var2.edges;
                var2 = var2.edges;
                var4 = var2.length;
                var2 = 1;
                var4 = var4 - var2;
                var9 = var9[var4];
                var11 = var10 == var9;
                var4 = undefined;
                if (var11) {
                    _fun75836_ip = 145;
                    continue _fun75836
                }
            case 124:
                var9 = var9.node;
                var11 = var10 == var9;
                var4 = undefined;
                if (var11) {
                    _fun75836_ip = 145;
                    continue _fun75836
                }
            case 139:
                var4 = var9.image;
            case 145:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 5;
                var9 = var12[var9];
                var11 = var11.bind(var0)(var9);
                var9 = var11.isIOS;
                var9 = var9.bind(var11)();
                if (!var9) {
                    _fun75836_ip = 191;
                    continue _fun75836
                }
            case 178:
                if (!(var10 != var4)) {
                    _fun75836_ip = 263;
                    continue _fun75836
                }
            case 182:
                var9 = var4.uri;
                if (!(var10 != var9)) {
                    _fun75836_ip = 263;
                    continue _fun75836
                }
            case 191:
                var2 = var8 + var2;
                _closure2_slot2 = var2;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 4;
                var1 = var8[var1];
                var2 = var2.bind(var0)(var1);
                var1 = {};
                var1.batchSize = var7;
                var1.endCursor = var6;
                var1.lastAssetIndex = var5;
                var4 = var4.uri;
                var1.lastNodeImageUri = var4;
                var3 = function arg0() {
                    var2 = function arg0() {
                        _fun75838: for (var _fun75838_ip = 0;;) switch (_fun75838_ip) {
                            case 0:
                                var3 = arg0;
                                var _closure4_slot0 = var3;
                                var5 = _closure2_slot1;
                                var4 = null;
                                var1 = var4 == var3;
                                var0 = undefined;
                                var7 = undefined;
                                if (var1) {
                                    _fun75838_ip = 49;
                                    continue _fun75838
                                }
                            case 29:
                                var1 = var3.edges;
                                var8 = var4 == var1;
                                var7 = undefined;
                                if (var8) {
                                    _fun75838_ip = 49;
                                    continue _fun75838
                                }
                            case 44:
                                var7 = var1.length;
                            case 49:
                                var8 = var4 != var7;
                                var9 = 0;
                                var1 = 0;
                                if (!var8) {
                                    _fun75838_ip = 63;
                                    continue _fun75838
                                }
                            case 60:
                                var1 = var7;
                            case 63:
                                var1 = var5 + var1;
                                var _closure4_slot1 = var1;
                                var1 = _closure2_slot0;
                                if (!(var4 != var1)) {
                                    _fun75838_ip = 146;
                                    continue _fun75838
                                }
                            case 79:
                                var1 = var4 == var3;
                                var7 = undefined;
                                if (var1) {
                                    _fun75838_ip = 101;
                                    continue _fun75838
                                }
                            case 88:
                                var5 = var3.edges;
                                var1 = var4 == var5;
                                var7 = var5;
                            case 101:
                                if (var1) {
                                    _fun75838_ip = 146;
                                    continue _fun75838
                                }
                            case 104:
                                var5 = var7.unshift;
                                var1 = _closure2_slot0;
                                var12 = var1.edges;
                                var1 = new Array(0);
                                var13 = var1;
                                var11 = 0;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var5;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                            case 146:
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var7 = 3;
                                var5 = var5[var7];
                                var10 = var8.bind(var0)(var5);
                                var8 = var10.batchUpdates;
                                var5 = function() { // Environment: var2
                                    _fun75839: for (var _fun75839_ip = 0;;) switch (_fun75839_ip) {
                                        case 0:
                                            var3 = _closure1_slot4;
                                            var2 = var3.setState;
                                            var1 = {};
                                            var0 = _closure4_slot0;
                                            var1.assets = var0;
                                            var4 = _closure2_slot2;
                                            var1.page = var4;
                                            var4 = _closure4_slot1;
                                            var1.lastAssetIndex = var4;
                                            var6 = null;
                                            var7 = var6 == var0;
                                            var0 = undefined;
                                            var4 = undefined;
                                            if (var7) {
                                                _fun75839_ip = 86;
                                                continue _fun75839
                                            }
                                        case 61:
                                            var5 = _closure4_slot0;
                                            var5 = var5.page_info;
                                            var6 = var6 == var5;
                                            var4 = undefined;
                                            if (var6) {
                                                _fun75839_ip = 86;
                                                continue _fun75839
                                            }
                                        case 80:
                                            var4 = var5.end_cursor;
                                        case 86:
                                            var1.endCursor = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var5 = var8.bind(var10)(var5);
                                var5 = var4 == var3;
                                if (var5) {
                                    _fun75838_ip = 209;
                                    continue _fun75838
                                }
                            case 194:
                                var8 = var3.edges;
                                var8 = var8.length;
                                var5 = var9 === var8;
                            case 209:
                                if (var5) {
                                    _fun75838_ip = 239;
                                    continue _fun75838
                                }
                            case 212:
                                var3 = var3.page_info;
                                var8 = var4 == var3;
                                var4 = undefined;
                                if (var8) {
                                    _fun75838_ip = 233;
                                    continue _fun75838
                                }
                            case 227:
                                var4 = var3.has_next_page;
                            case 233:
                                var3 = false;
                                var5 = var3 === var4;
                            case 239:
                                var _closure4_slot2 = var5;
                                if (!var5) {
                                    _fun75838_ip = 281;
                                    continue _fun75838
                                }
                            case 246:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var7];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.batchUpdates;
                                var2 = function() { // Environment: var2
                                    var2 = _closure1_slot4;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = _closure4_slot2;
                                    var0.hasReachedEnd = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                            case 281:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 2;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.track;
                                var1 = _closure1_slot3;
                                var2 = var1.MEDIA_PICKER_INFINITE_SCROLL_PAGED;
                                var1 = {};
                                var6 = _closure2_slot2;
                                var1.page = var6;
                                var1.has_reached_end = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onFetched = var3;
                var1 = var2.bind(var0)(var1);
            case 263:
                return var0;
        }
    };
    var1.getNextAssetPage = var6;
    var6 = function arg0() {
        var0 = arg0;
        var4 = var0.batchSize;
        var _closure2_slot0 = var4;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var1.batchSize = var4;
        var3 = function arg0() {
            var2 = function arg0() {
                _fun75843: for (var _fun75843_ip = 0;;) switch (_fun75843_ip) {
                    case 0:
                        var7 = arg0;
                        var _closure4_slot0 = var7;
                        var8 = null;
                        var2 = var8 == var7;
                        var0 = undefined;
                        var3 = undefined;
                        if (var2) {
                            _fun75843_ip = 50;
                            continue _fun75843
                        }
                    case 22:
                        var5 = var7.edges;
                        var4 = var5.filter;
                        var2 = function(arg0) { // Environment: var1
                            _fun75844: for (var _fun75844_ip = 0;;) switch (_fun75844_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = null;
                                    var2 = var3 == var1;
                                    var0 = undefined;
                                    if (var2) {
                                        _fun75844_ip = 49;
                                        continue _fun75844
                                    }
                                case 14:
                                    var2 = var1.node;
                                    var5 = var3 == var2;
                                    var0 = undefined;
                                    if (var5) {
                                        _fun75844_ip = 49;
                                        continue _fun75844
                                    }
                                case 29:
                                    var2 = var2.image;
                                    var5 = var3 == var2;
                                    var0 = undefined;
                                    if (var5) {
                                        _fun75844_ip = 49;
                                        continue _fun75844
                                    }
                                case 44:
                                    var0 = var2.uri;
                                case 49:
                                    var0 = var3 == var0;
                                    if (var0) {
                                        _fun75844_ip = 108;
                                        continue _fun75844
                                    }
                                case 56:
                                    var5 = var3 == var1;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun75844_ip = 100;
                                        continue _fun75844
                                    }
                                case 65:
                                    var1 = var1.node;
                                    var5 = var3 == var1;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun75844_ip = 100;
                                        continue _fun75844
                                    }
                                case 80:
                                    var1 = var1.image;
                                    var3 = var3 == var1;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun75844_ip = 100;
                                        continue _fun75844
                                    }
                                case 95:
                                    var2 = var1.uri;
                                case 100:
                                    var1 = '';
                                    var0 = var1 === var2;
                                case 108:
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var3 = var2.length;
                    case 50:
                        var4 = var8 != var3;
                        var2 = 0;
                        var6 = 0;
                        if (!var4) {
                            _fun75843_ip = 64;
                            continue _fun75843
                        }
                    case 61:
                        var6 = var3;
                    case 64:
                        if (!(var6 > var2)) {
                            _fun75843_ip = 167;
                            continue _fun75843
                        }
                    case 68:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot3;
                        var3 = var2.MEDIA_PICKER_ASSETS_DEBUG;
                        var2 = {};
                        var2.num_broken_assets = var6;
                        var9 = var8 == var7;
                        var6 = undefined;
                        if (var9) {
                            _fun75843_ip = 144;
                            continue _fun75843
                        }
                    case 124:
                        var7 = var7.edges;
                        var8 = var8 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun75843_ip = 144;
                            continue _fun75843
                        }
                    case 139:
                        var6 = var7.length;
                    case 144:
                        var2.num_assets = var6;
                        var6 = 'DeviceMedia.applyStateUpdate';
                        var2.location = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 167:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.batchUpdates;
                        var1 = function() { // Environment: var1
                            _fun75845: for (var _fun75845_ip = 0;;) switch (_fun75845_ip) {
                                case 0:
                                    var3 = _closure1_slot4;
                                    var2 = var3.setState;
                                    var1 = {};
                                    var0 = _closure4_slot0;
                                    var1.assets = var0;
                                    var4 = 0;
                                    var1.page = var4;
                                    var4 = _closure2_slot0;
                                    var1.lastAssetIndex = var4;
                                    var4 = null;
                                    var7 = var4 == var0;
                                    var0 = undefined;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun75845_ip = 84;
                                        continue _fun75845
                                    }
                                case 59:
                                    var7 = _closure4_slot0;
                                    var7 = var7.page_info;
                                    var8 = var4 == var7;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun75845_ip = 84;
                                        continue _fun75845
                                    }
                                case 78:
                                    var5 = var7.end_cursor;
                                case 84:
                                    var1.endCursor = var5;
                                    var5 = _closure4_slot0;
                                    var7 = var4 == var5;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun75845_ip = 127;
                                        continue _fun75845
                                    }
                                case 102:
                                    var6 = _closure4_slot0;
                                    var6 = var6.page_info;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun75845_ip = 127;
                                        continue _fun75845
                                    }
                                case 121:
                                    var5 = var6.has_next_page;
                                case 127:
                                    var4 = var4 == var5;
                                    if (var4) {
                                        _fun75845_ip = 137;
                                        continue _fun75845
                                    }
                                case 134:
                                    var4 = var5;
                                case 137:
                                    var4 = !var4;
                                    var1.hasReachedEnd = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1.onFetched = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.refreshAssets = var6;
    var6 = function() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.assets;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.useAssets = var6;
    var3 = function() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.hasReachedEnd;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.useHasReachedEnd = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/device/native/DeviceMedia.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 629, 795, 802, 9617, 478, 2]);