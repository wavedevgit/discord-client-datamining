// modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() {
        _fun96184: for (var _fun96184_ip = 0;;) switch (_fun96184_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun96184_ip = 11;
                    continue _fun96184
                }
            case 9:
                var0 = {};
            case 11:
                var2 = var0.guildStore;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun96184_ip = 30;
                    continue _fun96184
                }
            case 23:
                var2 = _closure1_slot2;
            case 30:
                var3 = var2.getGuild;
                var0 = _closure1_slot5;
                var0 = var3.bind(var2)(var0);
                var1 = var1 == var0;
                var4 = undefined;
                if (var1) {
                    _fun96184_ip = 62;
                    continue _fun96184
                }
            case 56:
                var4 = var0.joinedAt;
            case 62:
                var3 = global;
                var1 = var3.Date;
                var1 = var4 instanceof var1;
                if (!var1) {
                    _fun96184_ip = 122;
                    continue _fun96184
                }
            case 77:
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = var0.joinedAt;
                var0 = var4.getTime;
                var0 = var0.bind(var4)();
                var3 = var3 - var0;
                var0 = 3600000;
                var1 = var3 <= var0;
            case 122:
                var0 = var2.getGuildCount;
                var2 = var0.bind(var2)();
                var0 = 1;
                var0 = var0 === var2;
                if (!var0) {
                    _fun96184_ip = 145;
                    continue _fun96184
                }
            case 142:
                var0 = var1;
            case 145:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MIDJOURNEY_BOT_ID;
    var _closure1_slot4 = var7;
    var4 = var4.MIDJOURNEY_GUILD_ID;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isMidjourneyOnboardingFlow = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useStateFromStores;
        var0 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = {};
            var0 = _closure1_slot2;
            var1.guildStore = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.useIsMidjourneyOnboardingFlow = var3;
    var3 = function arg0() {
        _fun96187: for (var _fun96187_ip = 0;;) switch (_fun96187_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isDM;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun96187_ip = 34;
                    continue _fun96187
                }
            case 16:
                var2 = var1.rawRecipients;
                var3 = var2.length;
                var2 = 1;
                var0 = var2 === var3;
            case 34:
                if (!var0) {
                    _fun96187_ip = 65;
                    continue _fun96187
                }
            case 37:
                var2 = var1.rawRecipients;
                var1 = 0;
                var1 = var2[var1];
                var2 = var1.id;
                var1 = _closure1_slot4;
                var0 = var2 === var1;
            case 65:
                if (!var0) {
                    _fun96187_ip = 81;
                    continue _fun96187
                }
            case 68:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 81:
                return var0;
        }
    };
    var2.isEligibleForMidjourneyRedirect = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun96189: for (var _fun96189_ip = 0;;) switch (_fun96189_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot3;
                    var1 = var4.getGuildId;
                    var4 = var1.bind(var4)();
                    var1 = _closure2_slot0;
                    if (!(var4 === var1)) {
                        _fun96189_ip = 52;
                        continue _fun96189
                    }
                case 44:
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun96189_ip = 122;
                    continue _fun96189;
                case 52:
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var2 = function() { // Environment: var3
                        var2 = _closure3_slot4;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = 3000;
                    var1 = var5.bind(var4)(var2, var1);
                    var _closure3_slot2 = var1;
                    var2 = function() {
                        _fun96191: for (var _fun96191_ip = 0;;) switch (_fun96191_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                var0 = var1.getGuildId;
                                var1 = var0.bind(var1)();
                                var0 = _closure2_slot0;
                                if (!(var1 === var0)) {
                                    _fun96191_ip = 49;
                                    continue _fun96191
                                }
                            case 28:
                                var2 = _closure3_slot4;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                var0 = _closure3_slot0;
                                var0 = var0.bind(var1)();
                            case 49:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var2;
                    var1 = function() {
                        var3 = _closure1_slot3;
                        var2 = var3.removeChangeListener;
                        var1 = _closure3_slot3;
                        var1 = var2.bind(var3)(var1);
                        var1 = global;
                        var2 = var1.clearTimeout;
                        var1 = _closure3_slot2;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot4 = var1;
                    var1 = _closure1_slot3;
                    var0 = var1.addChangeListener;
                    var0 = var0.bind(var1)(var2);
                case 122:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.hasRedirectedToGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3204, 12521, 566, 2]);