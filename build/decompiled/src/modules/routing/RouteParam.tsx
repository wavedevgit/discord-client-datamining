// modules/routing/RouteParam.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun28039: for (var _fun28039_ip = 0;;) switch (_fun28039_ip) {
            case 0:
                var0 = arguments[2];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun28039_ip = 11;
                    continue _fun28039
                }
            case 9:
                var0 = {};
            case 11:
                var0 = var0.optional;
                if (!(var0 === var4)) {
                    _fun28039_ip = 23;
                    continue _fun28039
                }
            case 21:
                var0 = false;
            case 23:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.UnescapedPathParam;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = arg0;
                var7 = var3.bind(var4)(var1);
                var6 = '';
                if (!var0) {
                    _fun28039_ip = 87;
                    continue _fun28039
                }
            case 83:
                var6 = '?';
            case 87:
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var13 = ':';
                var11 = '(';
                var10 = arg1;
                var9 = ')';
                var12 = var7;
                var8 = var6;
                var12 = var13[var5](var12, var11, var10, var9, var8, var7);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var1 = var1.PSEUDO_GUILD_IDS;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.StaticChannelRoutes;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function() {
        _fun28040: for (var _fun28040_ip = 0;;) switch (_fun28040_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun28040_ip = 11;
                    continue _fun28040
                }
            case 9:
                var0 = {};
            case 11:
                var3 = var0.name;
                if (!(var3 === var4)) {
                    _fun28040_ip = 24;
                    continue _fun28040
                }
            case 20:
                var3 = 'guildId';
            case 24:
                var5 = var0.optional;
                if (!(var5 === var4)) {
                    _fun28040_ip = 36;
                    continue _fun28040
                }
            case 34:
                var5 = false;
            case 36:
                var2 = _closure1_slot5;
                var6 = _closure1_slot3;
                var1 = var6.map;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 3;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var6 = var1.bind(var6)(var0);
                var1 = var6.join;
                var0 = '|';
                var7 = var1.bind(var6)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var1 = '';
                var0 = '|\\d+';
                var1 = var6.bind(var1)(var7, var0);
                var0 = {};
                var0.optional = var5;
                var0 = var2.bind(var4)(var3, var1, var0);
                return var0;
        }
    };
    var1.guildId = var6;
    var3 = function() {
        _fun28041: for (var _fun28041_ip = 0;;) switch (_fun28041_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun28041_ip = 11;
                    continue _fun28041
                }
            case 9:
                var0 = {};
            case 11:
                var3 = var0.name;
                if (!(var3 === var4)) {
                    _fun28041_ip = 24;
                    continue _fun28041
                }
            case 20:
                var3 = 'channelId';
            case 24:
                var5 = var0.optional;
                if (!(var5 === var4)) {
                    _fun28041_ip = 36;
                    continue _fun28041
                }
            case 34:
                var5 = false;
            case 36:
                var2 = _closure1_slot5;
                var10 = _closure1_slot4;
                var6 = new Array(0);
                var9 = 0;
                var11 = var6;
                var1 = arraySpread(var11, var10, var9);
                var1 = var6.map;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 3;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var6 = var1.bind(var6)(var0);
                var1 = var6.join;
                var0 = '|';
                var7 = var1.bind(var6)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var1 = '';
                var0 = '|\\d+';
                var1 = var6.bind(var1)(var7, var0);
                var0 = {};
                var0.optional = var5;
                var0 = var2.bind(var4)(var3, var1, var0);
                return var0;
        }
    };
    var1.channelId = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/routing/RouteParam.tsx';
    var3 = var4.bind(var5)(var3);
    var2.RouteParam = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [661, 1379, 485, 3232, 2]);