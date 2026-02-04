// stores/SelectedGuildStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun27837: for (var _fun27837_ip = 0;;) switch (_fun27837_ip) {
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
                _fun27837_ip = 74;
                continue _fun27837;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var8 = function() {
        _fun27840: for (var _fun27840_ip = 0;;) switch (_fun27840_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = null;
                var2 = var1 != var2;
                if (!var2) {
                    _fun27840_ip = 38;
                    continue _fun27840
                }
            case 16:
                var5 = _closure1_slot10;
                var4 = var5.getGuild;
                var3 = _closure1_slot12;
                var3 = var4.bind(var5)(var3);
                var2 = var1 == var3;
            case 38:
                if (!var2) {
                    _fun27840_ip = 64;
                    continue _fun27840
                }
            case 41:
                var5 = _closure1_slot7;
                var4 = var5.getRequest;
                var3 = _closure1_slot12;
                var3 = var4.bind(var5)(var3);
                var2 = var1 == var3;
            case 64:
                if (!var2) {
                    _fun27840_ip = 71;
                    continue _fun27840
                }
            case 67:
                _closure1_slot12 = var1;
            case 71:
                var2 = _closure1_slot13;
                var2 = var1 != var2;
                if (!var2) {
                    _fun27840_ip = 104;
                    continue _fun27840
                }
            case 82:
                var5 = _closure1_slot10;
                var4 = var5.getGuild;
                var3 = _closure1_slot13;
                var3 = var4.bind(var5)(var3);
                var2 = var1 == var3;
            case 104:
                if (!var2) {
                    _fun27840_ip = 130;
                    continue _fun27840
                }
            case 107:
                var5 = _closure1_slot7;
                var4 = var5.getRequest;
                var3 = _closure1_slot13;
                var3 = var4.bind(var5)(var3);
                var2 = var1 == var3;
            case 130:
                if (!var2) {
                    _fun27840_ip = 137;
                    continue _fun27840
                }
            case 133:
                _closure1_slot13 = var1;
            case 137:
                var2 = _closure1_slot17;
                var1 = _closure1_slot12;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot16 = var8;
    var0 = function arg0() {
        _fun27841: for (var _fun27841_ip = 0;;) switch (_fun27841_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun27841_ip = 37;
                    continue _fun27841
                }
            case 9:
                var1 = _closure1_slot14;
                var0 = global;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                var1[var2] = var0;
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun27842: for (var _fun27842_ip = 0;;) switch (_fun27842_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot14;
                var0 = delete var0[var3];
                var2 = _closure1_slot13;
                var0 = false;
                if (!(var2 === var3)) {
                    _fun27842_ip = 38;
                    continue _fun27842
                }
            case 30:
                var2 = null;
                _closure1_slot13 = var2;
                var0 = true;
            case 38:
                var2 = _closure1_slot12;
                if (!(var2 === var3)) {
                    _fun27842_ip = 199;
                    continue _fun27842
                }
            case 49:
                var3 = _closure1_slot10;
                var2 = var3.getGuildsArray;
                var3 = var2.bind(var3)();
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 == var1)) {
                    _fun27842_ip = 135;
                    continue _fun27842
                }
            case 84:
                _closure1_slot12 = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.replaceWith;
                var2 = _closure1_slot11;
                var2 = var2.ME;
                var2 = var3.bind(var5)(var2);
                var0 = true;
                _fun27842_ip = 199;
                continue _fun27842;
            case 135:
                var2 = var1.id;
                _closure1_slot12 = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.replaceWith;
                var5 = _closure1_slot11;
                var4 = var5.CHANNEL;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 199:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot11 = var1;
    var1 = null;
    var _closure1_slot12 = var1;
    var _closure1_slot13 = var1;
    var1 = {};
    var _closure1_slot14 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun27845: for (var _fun27845_ip = 0;;) switch (_fun27845_ip) {
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
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun27845_ip = 69;
                        continue _fun27845
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun27845_ip = 105;
                    continue _fun27845;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun27846: for (var _fun27846_ip = 0;;) switch (_fun27846_ip) {
                case 0:
                    var1 = arg0;
                    var7 = this;
                    var2 = var7.mustEmitChanges;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'CONNECTION_OPEN';
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var0 = var2.bind(var7)(var0);
                    var6 = var7.waitFor;
                    var15 = _closure1_slot8;
                    var14 = _closure1_slot9;
                    var13 = _closure1_slot10;
                    var12 = _closure1_slot7;
                    var16 = var7;
                    var0 = var16[var6](var15, var14, var13, var12, var11);
                    var3 = null;
                    var5 = var3 == var1;
                    var0 = undefined;
                    var4 = undefined;
                    if (var5) {
                        _fun27846_ip = 75;
                        continue _fun27846
                    }
                case 69:
                    var4 = var1.selectedGuildTimestampMillis;
                case 75:
                    if (!(var3 == var4)) {
                        _fun27846_ip = 81;
                        continue _fun27846
                    }
                case 79:
                    var4 = {};
                case 81:
                    _closure1_slot14 = var4;
                    var4 = var3 == var1;
                    var5 = undefined;
                    if (var4) {
                        _fun27846_ip = 100;
                        continue _fun27846
                    }
                case 94:
                    var5 = var1.selectedGuildId;
                case 100:
                    var6 = var3 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun27846_ip = 112;
                        continue _fun27846
                    }
                case 109:
                    var4 = var5;
                case 112:
                    _closure1_slot12 = var4;
                    var5 = var3 == var1;
                    var4 = undefined;
                    if (var5) {
                        _fun27846_ip = 131;
                        continue _fun27846
                    }
                case 125:
                    var4 = var1.lastSelectedGuildId;
                case 131:
                    var5 = var3 != var4;
                    var1 = null;
                    if (!var5) {
                        _fun27846_ip = 143;
                        continue _fun27846
                    }
                case 140:
                    var1 = var4;
                case 143:
                    _closure1_slot13 = var1;
                    var1 = _closure1_slot9;
                    var6 = var1.lastNonVoiceRoute;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var1 = 11;
                    var1 = var11[var1];
                    var5 = var10.bind(var0)(var1);
                    var4 = var5.matchPath;
                    var1 = {};
                    var9 = _closure1_slot11;
                    var8 = var9.CHANNEL;
                    var7 = 12;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var10 = var7.RouteParam;
                    var7 = var10.guildId;
                    var7 = var7.bind(var10)();
                    var7 = var8.bind(var9)(var7);
                    var1.path = var7;
                    var4 = var4.bind(var5)(var6, var1);
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun27846_ip = 267;
                        continue _fun27846
                    }
                case 247:
                    var4 = var4.params;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun27846_ip = 267;
                        continue _fun27846
                    }
                case 262:
                    var1 = var4.guildId;
                case 267:
                    var3 = var3 != var1;
                    if (!var3) {
                        _fun27846_ip = 282;
                        continue _fun27846
                    }
                case 274:
                    var4 = _closure1_slot12;
                    var3 = var1 !== var4;
                case 282:
                    if (!var3) {
                        _fun27846_ip = 289;
                        continue _fun27846
                    }
                case 285:
                    _closure1_slot12 = var1;
                case 289:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot14;
            var0.selectedGuildTimestampMillis = var2;
            var2 = _closure1_slot12;
            var0.selectedGuildId = var2;
            var1 = _closure1_slot13;
            var0.lastSelectedGuildId = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastSelectedGuildId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLastSelectedTimestamp';
        var4.key = var6;
        var5 = function arg0() {
            _fun27851: for (var _fun27851_ip = 0;;) switch (_fun27851_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot12;
                    var0 = -1;
                    if (!(var3 !== var2)) {
                        _fun27851_ip = 28;
                        continue _fun27851
                    }
                case 20:
                    var1 = _closure1_slot14;
                    var0 = var1[var2];
                case 28:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SelectedGuildStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 14;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.selectedGuildId;
        _closure1_slot12 = var0;
        var0 = undefined;
        _closure1_slot13 = var0;
        var1 = _closure1_slot16;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function arg0() {
        _fun27853: for (var _fun27853_ip = 0;;) switch (_fun27853_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = _closure1_slot12;
                if (!(var0 !== var2)) {
                    _fun27853_ip = 55;
                    continue _fun27853
                }
            case 19:
                var3 = _closure1_slot17;
                var4 = _closure1_slot12;
                var0 = undefined;
                var4 = var3.bind(var0)(var4);
                var3 = var3.bind(var0)(var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun27853_ip = 49;
                    continue _fun27853
                }
            case 45:
                _closure1_slot13 = var2;
            case 49:
                _closure1_slot12 = var2;
                return var0;
            case 55:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun27854: for (var _fun27854_ip = 0;;) switch (_fun27854_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.user;
                var2 = var0.id;
                var4 = _closure1_slot8;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                var0 = var2 === var0;
                if (!var0) {
                    _fun27854_ip = 53;
                    continue _fun27854
                }
            case 42:
                var2 = _closure1_slot18;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 53:
                return var0;
        }
    };
    var1.GUILD_MEMBER_REMOVE = var8;
    var8 = function arg0() {
        _fun27855: for (var _fun27855_ip = 0;;) switch (_fun27855_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = var0.id;
                var1 = var0.unavailable;
                var0 = true;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun27855_ip = 42;
                    continue _fun27855
                }
            case 28:
                var2 = _closure1_slot18;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 42:
                return var0;
        }
    };
    var1.GUILD_DELETE = var8;
    var3 = function() {
        var0 = null;
        _closure1_slot12 = var0;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/SelectedGuildStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = -1;
    var2.SELECTED_GUILD_TIMESTAMP_NOW = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3214, 1216, 3217, 1410, 660, 1220, 3218, 3228, 566, 806, 2]);