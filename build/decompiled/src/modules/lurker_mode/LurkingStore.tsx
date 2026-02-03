// modules/lurker_mode/LurkingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun24728: for (var _fun24728_ip = 0;;) switch (_fun24728_ip) {
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
                _fun24728_ip = 74;
                continue _fun24728;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun24731: for (var _fun24731_ip = 0;;) switch (_fun24731_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot11;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var1);
                var2 = -1;
                if (!(!(var5 > var2))) {
                    _fun24731_ip = 35;
                    continue _fun24731
                }
            case 31:
                var2 = false;
                return var2;
            case 35:
                var7 = _closure1_slot11;
                var2 = new Array(0);
                var6 = 0;
                var8 = var2;
                var3 = arraySpread(var8, var7, var6);
                var4 = var2.splice;
                var3 = 1;
                var3 = var4.bind(var2)(var5, var3);
                _closure1_slot11 = var2;
                var0 = _closure1_slot12;
                var0 = delete var0[var1];
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun24732: for (var _fun24732_ip = 0;;) switch (_fun24732_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot10;
                var0 = var4 !== var0;
                if (!var0) {
                    _fun24732_ip = 75;
                    continue _fun24732
                }
            case 17:
                var2 = _closure1_slot11;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var4);
                var1 = !var1;
                if (!var1) {
                    _fun24732_ip = 72;
                    continue _fun24732
                }
            case 37:
                var8 = _closure1_slot11;
                var2 = new Array(1);
                var7 = 0;
                var9 = var2;
                var5 = arraySpread(var9, var8, var7);
                var2[var5] = var4;
                var4 = 1;
                var4 = var5 + var4;
                _closure1_slot11 = var2;
                var1 = true;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var1 = var4.bind(var0)(var1);
    var1 = var1.isGuildLurker;
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.JoinGuildSources;
    var _closure1_slot9 = var7;
    var1 = var1.ME;
    var _closure1_slot10 = var1;
    var1 = new Array(0);
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = null;
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun24734: for (var _fun24734_ip = 0;;) switch (_fun24734_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun24734_ip = 69;
                        continue _fun24734
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun24734_ip = 105;
                    continue _fun24734;
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
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot6;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'lurkingGuildIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'mostRecentLurkedGuildId';
        var4.key = var6;
        var6 = function() {
            _fun24737: for (var _fun24737_ip = 0;;) switch (_fun24737_ip) {
                case 0:
                    var0 = _closure1_slot11;
                    var3 = var0.length;
                    var2 = 0;
                    var0 = null;
                    if (!(var2 !== var3)) {
                        _fun24737_ip = 40;
                        continue _fun24737
                    }
                case 20:
                    var2 = _closure1_slot11;
                    var3 = var2.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var0 = var2[var1];
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isLurking';
        var4.key = var6;
        var6 = function arg0() {
            _fun24738: for (var _fun24738_ip = 0;;) switch (_fun24738_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot7;
                    var0 = var2.getGuild;
                    var3 = var0.bind(var2)(var4);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun24738_ip = 76;
                        continue _fun24738
                    }
                case 26:
                    var2 = _closure1_slot6;
                    var0 = var2.isCurrentUserGuest;
                    var0 = var0.bind(var2)(var4);
                    var1 = _closure1_slot5;
                    var2 = undefined;
                    var3 = var1.bind(var2)(var3);
                    var1 = global;
                    var1 = var1.Boolean;
                    var0 = !var0;
                    if (!var0) {
                        _fun24738_ip = 69;
                        continue _fun24738
                    }
                case 66:
                    var0 = var3;
                case 69:
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 76:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLurkingSource';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLoadId';
        var4.key = var6;
        var5 = function arg0() {
            _fun24740: for (var _fun24740_ip = 0;;) switch (_fun24740_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun24740_ip = 23;
                        continue _fun24740
                    }
                case 12:
                    var1 = _closure1_slot12;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LurkingStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var3 = _closure1_slot7;
        var2 = var3.getGuildsArray;
        var4 = var2.bind(var3)();
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var0
            var2 = _closure1_slot5;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun24744: for (var _fun24744_ip = 0;;) switch (_fun24744_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guildId;
                var0 = var1.lurker;
                var4 = var1.source;
                var2 = var1.directoryChannelId;
                var5 = var1.loadId;
                if (var0) {
                    _fun24744_ip = 38;
                    continue _fun24744
                }
            case 34:
                var0 = false;
                return var0;
            case 38:
                var3 = _closure1_slot16;
                var0 = undefined;
                var0 = var3.bind(var0)(var6);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun24744_ip = 66;
                    continue _fun24744
                }
            case 58:
                var3 = _closure1_slot12;
                var3[var6] = var5;
            case 66:
                var3 = _closure1_slot9;
                var3 = var3.MOBILE_GUILD_DISCOVERY;
                if (!(var3 !== var4)) {
                    _fun24744_ip = 127;
                    continue _fun24744
                }
            case 80:
                var3 = _closure1_slot9;
                var3 = var3.DIRECTORY_ENTRY;
                if (!(var3 !== var4)) {
                    _fun24744_ip = 100;
                    continue _fun24744
                }
            case 94:
                _closure1_slot13 = var0;
                _fun24744_ip = 147;
                continue _fun24744;
            case 100:
                var0 = {};
                var3 = _closure1_slot9;
                var3 = var3.DIRECTORY_ENTRY;
                var0.type = var3;
                var0.directoryChannelId = var2;
                _closure1_slot13 = var0;
                _fun24744_ip = 147;
                continue _fun24744;
            case 127:
                var0 = {};
                var2 = _closure1_slot9;
                var2 = var2.MOBILE_GUILD_DISCOVERY;
                var0.type = var2;
                _closure1_slot13 = var0;
            case 147:
                var0 = true;
                return var0;
        }
    };
    var1.GUILD_JOIN = var8;
    var8 = function arg0() {
        _fun24745: for (var _fun24745_ip = 0;;) switch (_fun24745_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.ignoredGuildIds;
                var1 = function arg0() {
                    _fun24746: for (var _fun24746_ip = 0;;) switch (_fun24746_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = global;
                            var4 = var1.Set;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun24746_ip = 23;
                                continue _fun24746
                            }
                        case 19:
                            var3 = new Array(0);
                        case 23:
                            var1 = new Array(0);
                            var7 = var1;
                            var6 = var3;
                            var5 = 0;
                            var3 = arraySpread(var7, var6, var5);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var3;
                            var7 = var1;
                            var1 = new var8[var4](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure3_slot0 = var1;
                            var6 = _closure1_slot11;
                            var3 = new Array(0);
                            var7 = var3;
                            var1 = arraySpread(var7, var6, var5);
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun24747: for (var _fun24747_ip = 0;;) switch (_fun24747_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = arg1;
                                        var1 = _closure3_slot0;
                                        var0 = var1.has;
                                        var1 = var0.bind(var1)(var4);
                                        var0 = var2;
                                        if (var1) {
                                            _fun24747_ip = 52;
                                            continue _fun24747
                                        }
                                    case 29:
                                        var3 = _closure1_slot15;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var4);
                                        if (var1) {
                                            _fun24747_ip = 49;
                                            continue _fun24747
                                        }
                                    case 46:
                                        var1 = var2;
                                    case 49:
                                        var0 = var1;
                                    case 52:
                                        return var0;
                                }
                            };
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                if (!var0) {
                    _fun24745_ip = 35;
                    continue _fun24745
                }
            case 26:
                var1 = null;
                _closure1_slot13 = var1;
            case 35:
                return var0;
        }
    };
    var1.GUILD_STOP_LURKING = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.lurkingGuildId;
        var1 = var0.lurkingSource;
        var3 = _closure1_slot16;
        var2 = undefined;
        var2 = var3.bind(var2)(var4);
        _closure1_slot13 = var1;
        var0 = true;
        return var0;
    };
    var1.GUILD_STOP_LURKING_FAILURE = var8;
    var8 = function arg0() {
        _fun24749: for (var _fun24749_ip = 0;;) switch (_fun24749_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild;
                var0 = var3.joined_at;
                var2 = null;
                var1 = var2 == var0;
                if (var1) {
                    _fun24749_ip = 48;
                    continue _fun24749
                }
            case 23:
                var5 = _closure1_slot11;
                var4 = var5.includes;
                var0 = var3.id;
                var0 = var4.bind(var5)(var0);
                var1 = !var0;
            case 48:
                var0 = !var1;
                if (var1) {
                    _fun24749_ip = 79;
                    continue _fun24749
                }
            case 54:
                var5 = _closure1_slot15;
                var4 = var3.id;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _closure1_slot13 = var2;
                var0 = true;
            case 79:
                return var0;
        }
    };
    var1.GUILD_CREATE = var8;
    var8 = function arg0() {
        _fun24750: for (var _fun24750_ip = 0;;) switch (_fun24750_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var4 = _closure1_slot11;
                var3 = var4.includes;
                var0 = var1.id;
                var0 = var3.bind(var4)(var0);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun24750_ip = 63;
                    continue _fun24750
                }
            case 39:
                var4 = _closure1_slot15;
                var3 = var1.id;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = null;
                _closure1_slot13 = var1;
                var0 = true;
            case 63:
                return var0;
        }
    };
    var1.GUILD_DELETE = var8;
    var3 = function arg0() {
        _fun24751: for (var _fun24751_ip = 0;;) switch (_fun24751_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.guildId;
                var0 = var1.joinedAt;
                var1 = var1.user;
                var6 = var1.id;
                var3 = _closure1_slot8;
                var1 = var3.getCurrentUser;
                var7 = var1.bind(var3)();
                var1 = null;
                var8 = var1 == var7;
                var4 = undefined;
                var3 = undefined;
                if (var8) {
                    _fun24751_ip = 58;
                    continue _fun24751
                }
            case 53:
                var3 = var7.id;
            case 58:
                var3 = var6 !== var3;
                if (var3) {
                    _fun24751_ip = 69;
                    continue _fun24751
                }
            case 65:
                var3 = var1 == var0;
            case 69:
                if (var3) {
                    _fun24751_ip = 89;
                    continue _fun24751
                }
            case 72:
                var6 = _closure1_slot11;
                var0 = var6.includes;
                var0 = var0.bind(var6)(var5);
                var3 = !var0;
            case 89:
                var0 = !var3;
                if (var3) {
                    _fun24751_ip = 110;
                    continue _fun24751
                }
            case 95:
                var3 = _closure1_slot15;
                var3 = var3.bind(var4)(var5);
                _closure1_slot13 = var1;
                var0 = true;
            case 110:
                return var0;
        }
    };
    var1.GUILD_MEMBER_ADD = var3;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/lurker_mode/LurkingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1416, 1672, 1410, 1613, 660, 566, 806, 2]);