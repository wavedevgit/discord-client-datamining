// modules/applications/ApplicationAssetsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
        _fun50156: for (var _fun50156_ip = 0;;) switch (_fun50156_ip) {
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
                _fun50156_ip = 74;
                continue _fun50156;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function(arg0) { // Original name: handleFetchEmbeddedActivityShelfSuccess, environment: var8
        _fun50159: for (var _fun50159_ip = 0;;) switch (_fun50159_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.assets;
                var2 = {};
                var19 = _closure1_slot8;
                var20 = var2;
                var0 = copyDataProperties(var20, var19);
                var10 = var12;
                var6 = global;
                var5 = 5;
                var0 = undefined;
                var4 = 'name';
                var3 = null;
                for (var7 in var10)
                    case 49: {
                        case 58: var15 = var7;
                        var18 = var12[var15];
                        var13 = _closure1_slot7;
                        var13 = var13.FETCH_SUCCESS;
                        var2[var15] = var13;
                        var14 = _closure1_slot9;
                        var13 = {};
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var5];
                        var17 = var17.bind(var0)(var16);
                        var16 = var17.keyBy;
                        var16 = var16.bind(var17)(var18, var4);
                        if (!(var3 == var16)) {
                            _fun50159_ip = 120;
                            continue _fun50159
                        }
                        case 118: var16 = {};
                        case 120: var13.assets = var16;
                        var17 = var6.Date;
                        var16 = var17.now;
                        var16 = var16.bind(var17)();
                        var13.lastUpdated = var16;
                        var14[var15] = var13;
                        _fun50159_ip = 49;
                        continue _fun50159;
                    }
            case 151:
                _closure1_slot8 = var2;
                return var0;
        }
    };
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var7 = 2;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var1.NOT_FETCHED = var10;
    var3 = 'NOT_FETCHED';
    var1[var10] = var3;
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCH_SUCCESS = var7;
    var3 = 'FETCH_SUCCESS';
    var1[var7] = var3;
    var _closure1_slot7 = var1;
    var3 = {};
    var _closure1_slot8 = var3;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var8
        var3 = function() { // Original name: ApplicationAssetsStore, environment: var5
            _fun50161: for (var _fun50161_ip = 0;;) switch (_fun50161_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50161_ip = 69;
                        continue _fun50161
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50161_ip = 105;
                    continue _fun50161;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'getApplicationAssetFetchState';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun50162: for (var _fun50162_ip = 0;;) switch (_fun50162_ip) {
                case 0:
                    var2 = _closure1_slot8;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun50162_ip = 30;
                        continue _fun50162
                    }
                case 20:
                    var1 = _closure1_slot7;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchingIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = _closure1_slot8;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun50164: for (var _fun50164_ip = 0;;) switch (_fun50164_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var7 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        var6 = var5().value;
                        var8 = var1;
                        var8 = var8 === var7;
                        var2 = var8;
                        if (var8) {
                            _fun50164_ip = 32;
                            continue _fun50164
                        }
                    case 29:
                        var4 = var6;
                    case 32:
                        var4 = undefined;
                        var6 = var2;
                        if (var6) {
                            _fun50164_ip = 60;
                            continue _fun50164
                        }
                    case 40:
                        var5 = var5().value;
                        var6 = var1;
                        var6 = var6 === var7;
                        var2 = var6;
                        if (var6) {
                            _fun50164_ip = 60;
                            continue _fun50164
                        }
                    case 57:
                        var4 = var5;
                    case 60:
                        var3 = var4;
                        var4 = var2;
                        if (var4) {
                            _fun50164_ip = 72;
                            continue _fun50164
                        }
                    case 69:
                        var1.return();
                    case 72:
                        var4 = var3;
                        var3 = _closure1_slot7;
                        var3 = var3.FETCHING;
                        var3 = var4 === var3;
                        return var3;
                    case 94:
                        CatchBlockStart(arg_register = 0);
                        if (var2) {
                            _fun50164_ip = 102;
                            continue _fun50164
                        }
                    case 99:
                        var1.return();
                    case 102:
                        throw var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun50165: for (var _fun50165_ip = 0;;) switch (_fun50165_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0[Symbol.iterator];
                        var0 = var1().next;
                        var3 = var0().value;
                        var2 = var1;
                        var0 = undefined;
                        var2 = var2 === var0;
                        if (var2) {
                            _fun50165_ip = 25;
                            continue _fun50165
                        }
                    case 22:
                        var0 = var3;
                    case 25:
                        if (var2) {
                            _fun50165_ip = 31;
                            continue _fun50165
                        }
                    case 28:
                        var1.return();
                    case 31:
                        return var0;
                }
            };
            var5 = var1.bind(var2)(var0);
            var0 = new Array(0);
            var4 = 0;
            var6 = var0;
            var1 = arraySpread(var6, var5, var4);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getApplicationAssets';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'ApplicationAssetsStore';
    var7.displayName = var3;
    var3 = 7;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var9 = function(arg0) { // Original name: handleFetchApplicationAssets, environment: var8
        var0 = arg0;
        var3 = var0.applicationId;
        var1 = {};
        var4 = _closure1_slot8;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = _closure1_slot7;
        var2 = var2.FETCHING;
        var1[var3] = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var3.APPLICATION_ASSETS_FETCH = var9;
    var9 = function(arg0) { // Original name: handleFetchApplicationAssetsSuccess, environment: var8
        var0 = arg0;
        var3 = var0.applicationId;
        var1 = {};
        var4 = _closure1_slot8;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = _closure1_slot7;
        var2 = var2.FETCH_SUCCESS;
        var1[var3] = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var3.APPLICATION_ASSETS_FETCH_SUCCESS = var9;
    var8 = function(arg0) { // Original name: handleUpdateApplicationAssets, environment: var8
        _fun50169: for (var _fun50169_ip = 0;;) switch (_fun50169_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.applicationId;
                var7 = var0.assets;
                var4 = null;
                if (!(var4 == var7)) {
                    _fun50169_ip = 33;
                    continue _fun50169
                }
            case 20:
                var0 = _closure1_slot9;
                var0 = delete var0[var2];
                _fun50169_ip = 117;
                continue _fun50169;
            case 33:
                var1 = _closure1_slot9;
                var0 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.keyBy;
                var3 = 'name';
                var3 = var5.bind(var6)(var7, var3);
                if (!(var4 == var3)) {
                    _fun50169_ip = 86;
                    continue _fun50169
                }
            case 84:
                var3 = {};
            case 86:
                var0.assets = var3;
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var0.lastUpdated = var3;
                var1[var2] = var0;
            case 117:
                var0 = undefined;
                return var0;
        }
    };
    var3.APPLICATION_ASSETS_UPDATE = var8;
    var3.EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS = var4;
    var3.DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var7](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationAssetsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 22, 566, 806, 2]);