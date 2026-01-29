// modules/media_channel/MediaPostEmbedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun76866: for (var _fun76866_ip = 0;;) switch (_fun76866_ip) {
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
                _fun76866_ip = 76;
                continue _fun76866;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot0 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var8 = 2;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var7 = 3;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var1.NOT_FETCHED = var10;
    var3 = 'NOT_FETCHED';
    var1[var10] = var3;
    var1.FETCHING = var9;
    var3 = 'FETCHING';
    var1[var9] = var3;
    var1.FETCHED = var8;
    var3 = 'FETCHED';
    var1[var8] = var3;
    var1.FAILED = var7;
    var3 = 'FAILED';
    var1[var7] = var3;
    var _closure1_slot5 = var1;
    var3 = {};
    var _closure1_slot6 = var3;
    var3 = {};
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: MediaPostEmbedStore, environment: var5
            _fun76870: for (var _fun76870_ip = 0;;) switch (_fun76870_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun76870_ip = 69;
                        continue _fun76870
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun76870_ip = 105;
                    continue _fun76870;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getMediaPostEmbed';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun76871: for (var _fun76871_ip = 0;;) switch (_fun76871_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun76871_ip = 13;
                        continue _fun76871
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot6;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getEmbedFetchState';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun76872: for (var _fun76872_ip = 0;;) switch (_fun76872_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun76872_ip = 30;
                        continue _fun76872
                    }
                case 20:
                    var1 = _closure1_slot5;
                    var0 = var1.NOT_FETCHED;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMediaPostEmbeds';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 'MediaPostEmbedStore';
    var7.displayName = var3;
    var3 = 6;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function() { // Original name: handleConnectionOpen, environment: var4
        var0 = {};
        _closure1_slot6 = var0;
        var0 = {};
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleFetchMediaPostEmbed, environment: var4
        var0 = arg0;
        var2 = var0.threadId;
        var1 = _closure1_slot7;
        var0 = _closure1_slot5;
        var0 = var0.FETCHING;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_POST_EMBED_FETCH = var8;
    var8 = function(arg0) { // Original name: handleFetchMediaPostEmbedSuccess, environment: var4
        var0 = arg0;
        var2 = var0.threadId;
        var3 = var0.mediaPostEmbed;
        var1 = {};
        var5 = _closure1_slot6;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1[var2] = var3;
        _closure1_slot6 = var1;
        var1 = _closure1_slot7;
        var0 = _closure1_slot5;
        var0 = var0.FETCHED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_POST_EMBED_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleFetchMediaPostFailure, environment: var4
        var0 = arg0;
        var2 = var0.threadId;
        var1 = _closure1_slot7;
        var0 = _closure1_slot5;
        var0 = var0.FAILED;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_POST_EMBED_FETCH_FAILURE = var8;
    var4 = function(arg0) { // Original name: handleLogout, environment: var4
        _fun76878: for (var _fun76878_ip = 0;;) switch (_fun76878_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isSwitchingAccount;
                if (var0) {
                    _fun76878_ip = 27;
                    continue _fun76878
                }
            case 12:
                var0 = {};
                _closure1_slot6 = var0;
                var0 = {};
                _closure1_slot7 = var0;
            case 27:
                var0 = undefined;
                return var0;
        }
    };
    var3.LOGOUT = var4;
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
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_channel/MediaPostEmbedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);