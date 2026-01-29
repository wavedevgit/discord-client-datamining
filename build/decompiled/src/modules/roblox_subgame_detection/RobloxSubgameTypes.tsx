// modules/roblox_subgame_detection/RobloxSubgameTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = function(arg0) { // Original name: ROBLOX_PROTOCOL_URL, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'roblox://placeId=';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot0 = var4;
    var3 = function(arg0) { // Original name: ROBLOX_WEB_URL, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://www.roblox.com/games/start?placeId=';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot1 = var3;
    var5 = arg6;
    var0 = 0;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/roblox_subgame_detection/RobloxSubgameTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = '363445589247131668';
    var2.ROBLOX_APPLICATION_ID = var5;
    var5 = {
        'PLACE_ID': 'placeId',
        'ROBLOX_TIME_STARTED': 'timeStarted'
    };
    var2.RobloxMetadataKeys = var5;
    var5 = {
        'UNIVERSE_ID': 'universeid',
        'PLACE_ID': 'placeid'
    };
    var2.NativeRobloxSubgameKeys = var5;
    var5 = 'roblox';
    var2.ROBLOX_URL_SCHEME = var5;
    var2.ROBLOX_PROTOCOL_URL = var4;
    var2.ROBLOX_WEB_URL = var3;
    var1 = function(arg0) { // Environment: var1
        var5 = arg0;
        var0 = global;
        var4 = var0.encodeURIComponent;
        var2 = _closure1_slot0;
        var3 = undefined;
        var2 = var2.bind(var3)(var5);
        var4 = var4.bind(var3)(var2);
        var2 = var0.encodeURIComponent;
        var1 = _closure1_slot1;
        var1 = var1.bind(var3)(var5);
        var3 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://ro.blox.com/Ebh5?af_dp=';
        var0 = '&af_web_dp=';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var2.ROBLOX_DEFERRED_WEB_URL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);