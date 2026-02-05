// modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun76958: for (var _fun76958_ip = 0;;) switch (_fun76958_ip) {
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
                _fun76958_ip = 76;
                continue _fun76958;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.StaticChannelRoute;
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun76962: for (var _fun76962_ip = 0;;) switch (_fun76962_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun76962_ip = 69;
                        continue _fun76962
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun76962_ip = 105;
                    continue _fun76962;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun76963: for (var _fun76963_ip = 0;;) switch (_fun76963_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var1 = var3.waitFor;
                    var0 = _closure1_slot5;
                    var0 = var1.bind(var3)(var0);
                    var3 = null;
                    var5 = var3 == var4;
                    var0 = undefined;
                    var1 = undefined;
                    if (var5) {
                        _fun76963_ip = 43;
                        continue _fun76963
                    }
                case 37:
                    var1 = var4.selectedResourceChannelIdByGuildId;
                case 43:
                    if (!(var3 == var1)) {
                        _fun76963_ip = 49;
                        continue _fun76963
                    }
                case 47:
                    var1 = {};
                case 49:
                    _closure1_slot7 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot7;
            var0.selectedResourceChannelIdByGuildId = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSelectedResourceChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun76965: for (var _fun76965_ip = 0;;) switch (_fun76965_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun76965_ip = 23;
                        continue _fun76965
                    }
                case 12:
                    var1 = _closure1_slot7;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getHomeNavigationChannelId';
        var4.key = var6;
        var5 = function arg0() {
            _fun76966: for (var _fun76966_ip = 0;;) switch (_fun76966_ip) {
                case 0:
                    var3 = arg0;
                    var4 = null;
                    var1 = var4 == var3;
                    var0 = null;
                    if (var1) {
                        _fun76966_ip = 40;
                        continue _fun76966
                    }
                case 14:
                    var1 = _closure1_slot7;
                    var1 = var1[var3];
                    if (!(var4 == var1)) {
                        _fun76966_ip = 37;
                        continue _fun76966
                    }
                case 29:
                    var2 = _closure1_slot8;
                    var1 = var2[var3];
                case 37:
                    var0 = var1;
                case 40:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildOnboardingHomeNavigationStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun76967: for (var _fun76967_ip = 0;;) switch (_fun76967_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = var0.guildId;
                var6 = null;
                if (!(var6 != var1)) {
                    _fun76967_ip = 178;
                    continue _fun76967
                }
            case 22:
                var2 = _closure1_slot6;
                var2 = var2.GUILD_HOME;
                if (!(var3 !== var2)) {
                    _fun76967_ip = 178;
                    continue _fun76967
                }
            case 42:
                var4 = _closure1_slot5;
                var2 = var4.getChannel;
                var9 = var2.bind(var4)(var3);
                var2 = _closure1_slot7;
                var4 = var2[var1];
                var2 = _closure1_slot8;
                var2 = var2[var1];
                var5 = var6 != var9;
                if (!var5) {
                    _fun76967_ip = 89;
                    continue _fun76967
                }
            case 79:
                var7 = var9.isThread;
                var5 = var7.bind(var9)();
            case 89:
                if (!var5) {
                    _fun76967_ip = 111;
                    continue _fun76967
                }
            case 92:
                var8 = var6 == var9;
                var7 = undefined;
                if (var8) {
                    _fun76967_ip = 107;
                    continue _fun76967
                }
            case 101:
                var7 = var9.parent_id;
            case 107:
                var5 = var6 != var7;
            case 111:
                if (!var5) {
                    _fun76967_ip = 151;
                    continue _fun76967
                }
            case 114:
                var8 = new Array(2);
                var8[0] = var2;
                var8[1] = var4;
                var7 = var8.includes;
                var10 = var6 == var9;
                var6 = undefined;
                if (var10) {
                    _fun76967_ip = 146;
                    continue _fun76967
                }
            case 140:
                var6 = var9.parent_id;
            case 146:
                var5 = var7.bind(var8)(var6);
            case 151:
                if (var5) {
                    _fun76967_ip = 178;
                    continue _fun76967
                }
            case 154:
                if (!(var3 !== var4)) {
                    _fun76967_ip = 166;
                    continue _fun76967
                }
            case 158:
                var4 = _closure1_slot7;
                var4 = delete var4[var1];
            case 166:
                if (!(var3 !== var2)) {
                    _fun76967_ip = 178;
                    continue _fun76967
                }
            case 170:
                var0 = _closure1_slot8;
                var0 = delete var0[var1];
            case 178:
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun76968: for (var _fun76968_ip = 0;;) switch (_fun76968_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.guildId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun76968_ip = 32;
                    continue _fun76968
                }
            case 19:
                var0 = _closure1_slot7;
                var0[var1] = var2;
                _fun76968_ip = 43;
                continue _fun76968;
            case 32:
                var0 = _closure1_slot8;
                var0 = delete var0[var1];
            case 43:
                var0 = _closure1_slot8;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var1.SELECT_HOME_RESOURCE_CHANNEL = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.guildId;
        var3 = _closure1_slot7;
        var3 = delete var3[var1];
        var0 = _closure1_slot8;
        var0[var1] = var2;
        var0 = undefined;
        return var0;
    };
    var1.SELECT_NEW_MEMBER_ACTION_CHANNEL = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1379, 566, 806, 2]);