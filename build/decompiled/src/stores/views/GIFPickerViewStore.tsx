// stores/views/GIFPickerViewStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun73344: for (var _fun73344_ip = 0;;) switch (_fun73344_ip) {
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
                _fun73344_ip = 76;
                continue _fun73344;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun73347: for (var _fun73347_ip = 0;;) switch (_fun73347_ip) {
            case 0:
                var1 = arg0;
                var2 = undefined;
                var0 = undefined;
            case 7: // try_start_0
                var3 = global;
                var4 = var3.URL;
                var5 = var1;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var1.pathname;
                var1 = var3.toLowerCase;
                var4 = var1.bind(var3)();
                var0 = var4;
                var3 = var4.endsWith;
                var1 = '.mp4';
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun73347_ip = 102;
                    continue _fun73347
                }
            case 77:
                var3 = var0;
                var1 = var3.endsWith;
                var0 = '.webm';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun73347_ip = 102;
                    continue _fun73347
                }
            case 100: // try_end0
                _fun73347_ip = 141;
                continue _fun73347;
            case 102: // try_start_1
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.GIFType;
                var0 = var0.VIDEO;
            case 137: // try_end1
                return var0;
            case 139: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
            case 141:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.GIFType;
                var0 = var0.IMAGE;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
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
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GIFPickerResultTypes;
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GIFType;
    var1 = var1.IMAGE;
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var1 = '';
    var _closure1_slot10 = var1;
    var _closure1_slot11 = var1;
    var1 = new Array(0);
    var _closure1_slot12 = var1;
    var1 = new Array(0);
    var _closure1_slot13 = var1;
    var1 = new Array(0);
    var _closure1_slot14 = var1;
    var1 = new Array(0);
    var _closure1_slot15 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun73349: for (var _fun73349_ip = 0;;) switch (_fun73349_ip) {
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
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun73349_ip = 69;
                        continue _fun73349
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun73349_ip = 105;
                    continue _fun73349;
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
        var0 = 'getAnalyticsID';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getQuery';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getResultQuery';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getResultItems';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getTrendingCategories';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSelectedFormat';
        var4.key = var6;
        var6 = function() {
            var0 = 'tinywebp';
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSuggestions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getTrendingSearchTerms';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GIFPickerViewStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.analyticsID;
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GIF_PICKER_INITIALIZE = var8;
    var8 = function arg0() {
        _fun73359: for (var _fun73359_ip = 0;;) switch (_fun73359_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.query;
                _closure1_slot10 = var2;
                var0 = '';
                if (!(var0 === var2)) {
                    _fun73359_ip = 44;
                    continue _fun73359
                }
            case 24:
                _closure1_slot11 = var0;
                var0 = new Array(0);
                _closure1_slot12 = var0;
                var0 = new Array(0);
                _closure1_slot14 = var0;
            case 44:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIF_PICKER_QUERY = var8;
    var8 = function arg0() {
        _fun73360: for (var _fun73360_ip = 0;;) switch (_fun73360_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun73360_ip = 30;
                    continue _fun73360
                }
            case 15:
                var3 = _closure1_slot10;
                var1 = _closure1_slot11;
                if (!(var3 !== var1)) {
                    _fun73360_ip = 88;
                    continue _fun73360
                }
            case 30:
                var1 = var0.query;
                if (!(var2 != var1)) {
                    _fun73360_ip = 53;
                    continue _fun73360
                }
            case 40:
                var2 = var0.query;
                _closure1_slot11 = var2;
            case 53:
                var2 = var0.items;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var6 = var0.width;
                    var5 = var0.height;
                    var4 = var0.src;
                    var3 = var0.gif_src;
                    var2 = var0.url;
                    var1 = var0.id;
                    var0 = {};
                    var0.width = var6;
                    var0.height = var5;
                    var0.src = var4;
                    var0.gifSrc = var3;
                    var0.url = var2;
                    var0.id = var1;
                    var1 = _closure1_slot8;
                    var0.format = var1;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                _closure1_slot12 = var1;
                var0 = undefined;
                return var0;
            case 88:
                var0 = false;
                return var0;
        }
    };
    var1.GIF_PICKER_QUERY_SUCCESS = var8;
    var8 = function arg0() {
        _fun73362: for (var _fun73362_ip = 0;;) switch (_fun73362_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.query;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun73362_ip = 34;
                    continue _fun73362
                }
            case 15:
                _closure1_slot11 = var0;
                var0 = new Array(0);
                _closure1_slot12 = var0;
                var0 = undefined;
                return var0;
            case 34:
                var0 = false;
                return var0;
        }
    };
    var1.GIF_PICKER_QUERY_FAILURE = var8;
    var8 = function arg0() {
        _fun73363: for (var _fun73363_ip = 0;;) switch (_fun73363_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.trendingCategories;
                var2 = var0.trendingGIFPreview;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun73363_ip = 30;
                    continue _fun73363
                }
            case 21:
                var2 = new Array(0);
                _fun73363_ip = 165;
                continue _fun73363;
            case 30:
                var1 = {};
                var5 = _closure1_slot7;
                var5 = var5.TRENDING_GIFS;
                var1.type = var5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 7;
                var7 = var10[var6];
                var5 = undefined;
                var7 = var9.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.H6zNFz;
                var6 = var7.bind(var8)(var6);
                var1.name = var6;
                var6 = var0.trendingGIFPreview;
                var6 = var6.src;
                var1.src = var6;
                var3 = _closure1_slot17;
                var0 = var0.trendingGIFPreview;
                var0 = var0.src;
                var0 = var3.bind(var5)(var0);
                var1.format = var0;
                var0 = new Array(1);
                var0[0] = var1;
                var2 = var0;
            case 165:
                var1 = new Array(0);
                var11 = 0;
                var13 = var1;
                var12 = var2;
                var11 = arraySpread(var13, var12, var11);
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var3 = var1.src;
                    var2 = 'src';
                    var0[var2] = var3;
                    var3 = _closure1_slot7;
                    var4 = var3.TRENDING_CATEGORY;
                    var3 = 'type';
                    var0[var3] = var4;
                    var3 = _closure1_slot17;
                    var2 = var1.src;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = 'format';
                    var0[var1] = var2;
                    return var0;
                };
                var12 = var3.bind(var4)(var0);
                var13 = var1;
                var0 = arraySpread(var13, var12, var11);
                _closure1_slot13 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.GIF_PICKER_TRENDING_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.items;
        _closure1_slot14 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GIF_PICKER_SUGGESTIONS_SUCCESS = var8;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.items;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/views/GIFPickerViewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 1343, 1234, 566, 806, 2]);