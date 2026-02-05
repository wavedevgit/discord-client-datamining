// modules/activities/ActivitiesInTextUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun56380: for (var _fun56380_ip = 0;;) switch (_fun56380_ip) {
            case 0:
                var2 = arg0;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun56380_ip = 234;
                    continue _fun56380
                }
            case 12:
                var5 = _closure1_slot2;
                var3 = var5.getChannel;
                var0 = var2.parent_id;
                var3 = var3.bind(var5)(var0);
                var0 = var4 == var3;
                if (var0) {
                    _fun56380_ip = 94;
                    continue _fun56380
                }
            case 42:
                var5 = var4 == var3;
                var6 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun56380_ip = 58;
                    continue _fun56380
                }
            case 53:
                var4 = var3.type;
            case 58:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ChannelTypes;
                var3 = var3.GUILD_CATEGORY;
                var0 = var4 === var3;
            case 94:
                if (!var0) {
                    _fun56380_ip = 232;
                    continue _fun56380
                }
            case 100:
                var3 = var2.type;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var2 = var2.ChannelTypes;
                var7 = var2.GUILD_TEXT;
                var2 = new Array(4);
                var2[0] = var7;
                var7 = var6[var1];
                var7 = var5.bind(var4)(var7);
                var7 = var7.ChannelTypes;
                var7 = var7.GUILD_VOICE;
                var2[1] = var7;
                var7 = var6[var1];
                var7 = var5.bind(var4)(var7);
                var7 = var7.ChannelTypes;
                var7 = var7.GROUP_DM;
                var2[2] = var7;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.ChannelTypes;
                var1 = var1.DM;
                var2[3] = var1;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 232:
                return var0;
            case 234:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = function arg0, arg1() {
        _fun56381: for (var _fun56381_ip = 0;;) switch (_fun56381_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun56381_ip = 79;
                    continue _fun56381
                }
            case 12:
                var5 = undefined;
                if (!(var5 !== var3)) {
                    _fun56381_ip = 79;
                    continue _fun56381
                }
            case 18:
                var1 = _closure1_slot5;
                var1 = var1.bind(var5)(var3);
                if (var1) {
                    _fun56381_ip = 37;
                    continue _fun56381
                }
            case 33:
                var1 = false;
                return var1;
            case 37:
                var1 = var3.guild_id;
                if (!(var4 != var1)) {
                    _fun56381_ip = 75;
                    continue _fun56381
                }
            case 46:
                var1 = var2.can;
                var0 = _closure1_slot4;
                var0 = var0.USE_EMBEDDED_ACTIVITIES;
                var0 = var1.bind(var2)(var0, var3);
                if (var0) {
                    _fun56381_ip = 75;
                    continue _fun56381
                }
            case 71:
                var0 = false;
                return var0;
            case 75:
                var0 = true;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = function arg0() {
        _fun56382: for (var _fun56382_ip = 0;;) switch (_fun56382_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun56382_ip = 21;
                    continue _fun56382
                }
            case 16:
                var0 = var3.guild_id;
            case 21:
                var0 = var1 != var0;
                if (var0) {
                    _fun56382_ip = 40;
                    continue _fun56382
                }
            case 28:
                var1 = _closure1_slot5;
                var0 = var1.bind(var2)(var3);
            case 40:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Permissions;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/ActivitiesInTextUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isActivityInTextSupportedForChannel = var4;
    var4 = function arg0() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var2.isActivitiesInTextEnabled = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot6;
            var4 = _closure1_slot2;
            var2 = var4.getChannel;
            var1 = _closure2_slot0;
            var2 = var2.bind(var4)(var1);
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsActivitiesInTextEnabled = var4;
    var2.getIsAppLauncherEnabled = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun56387: for (var _fun56387_ip = 0;;) switch (_fun56387_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun56387_ip = 44;
                        continue _fun56387
                    }
                case 33:
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 44:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsAppLauncherEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3091, 483, 790, 566, 2]);