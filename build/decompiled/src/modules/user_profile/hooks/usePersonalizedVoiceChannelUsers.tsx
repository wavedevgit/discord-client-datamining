// modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Consents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 5;
        var6 = var8[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var6);
        var9 = var10.useStateFromStoresArray;
        var6 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var6;
        var11 = var5.id;
        var6 = new Array(2);
        var6[0] = var11;
        var5 = var5.guild_id;
        var6[1] = var5;
        var5 = function() { // Environment: var0
            var3 = _closure1_slot5;
            var2 = var3.getVoiceStatesForChannelAlt;
            var0 = _closure2_slot0;
            var1 = var0.id;
            var0 = var0.guild_id;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.user;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var9.bind(var10)(var7, var5, var6);
        var _closure2_slot1 = var5;
        var6 = var8[var2];
        var10 = var4.bind(var3)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot2;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot2;
            var0 = var1.getUserAffinitiesMap;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var9.bind(var10)(var7, var6);
        var _closure2_slot2 = var6;
        var7 = var8[var2];
        var11 = var4.bind(var3)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot3;
        var9 = new Array(1);
        var9[0] = var7;
        var7 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.hasConsented;
            var0 = _closure1_slot6;
            var0 = var0.PERSONALIZATION;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var10.bind(var11)(var9, var7);
        var _closure2_slot3 = var7;
        var2 = var8[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            _fun63193: for (var _fun63193_ip = 0;;) switch (_fun63193_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var4 = _closure2_slot1;
                    if (var1) {
                        _fun63193_ip = 21;
                        continue _fun63193
                    }
                case 16:
                    var3 = var4;
                    _fun63193_ip = 37;
                    continue _fun63193;
                case 21:
                    var2 = var4.sort;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun63194: for (var _fun63194_ip = 0;;) switch (_fun63194_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = var2.get;
                                var0 = arg1;
                                var0 = var1.bind(var2)(var0);
                                var3 = null;
                                var1 = var3 == var0;
                                var5 = undefined;
                                if (var1) {
                                    _fun63194_ip = 37;
                                    continue _fun63194
                                }
                            case 31:
                                var5 = var0.vcProbability;
                            case 37:
                                var6 = var3 != var5;
                                var0 = 0;
                                if (!var6) {
                                    _fun63194_ip = 49;
                                    continue _fun63194
                                }
                            case 46:
                                var0 = var5;
                            case 49:
                                var6 = _closure2_slot2;
                                var5 = var6.get;
                                var4 = arg0;
                                var4 = var5.bind(var6)(var4);
                                var5 = var3 == var4;
                                var2 = undefined;
                                if (var5) {
                                    _fun63194_ip = 81;
                                    continue _fun63194
                                }
                            case 75:
                                var2 = var4.vcProbability;
                            case 81:
                                var3 = var3 != var2;
                                var1 = 0;
                                if (!var3) {
                                    _fun63194_ip = 93;
                                    continue _fun63194
                                }
                            case 90:
                                var1 = var2;
                            case 93:
                                var0 = var0 - var1;
                                return var0;
                        }
                    };
                    var3 = var2.bind(var4)(var1);
                case 37:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot4;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6841, 4559, 1621, 3527, 660, 566, 2]);