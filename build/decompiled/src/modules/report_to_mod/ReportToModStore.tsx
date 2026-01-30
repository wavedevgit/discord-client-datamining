// modules/report_to_mod/ReportToModStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun77813: for (var _fun77813_ip = 0;;) switch (_fun77813_ip) {
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
                _fun77813_ip = 76;
                continue _fun77813;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function() { // Original name: handleSelectedGuildChange, environment: var3
        _fun77816: for (var _fun77816_ip = 0;;) switch (_fun77816_ip) {
            case 0:
                var2 = _closure1_slot5;
                var0 = var2.getLastSelectedGuildId;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot6;
                if (!(var2 !== var0)) {
                    _fun77816_ip = 45;
                    continue _fun77816
                }
            case 25:
                var0 = null;
                _closure1_slot7 = var0;
                var3 = var0 != var2;
                if (!var3) {
                    _fun77816_ip = 41;
                    continue _fun77816
                }
            case 38:
                var0 = var2;
            case 41:
                _closure1_slot6 = var0;
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = null;
    var _closure1_slot6 = var1;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = {};
    var1.reportedMessages = var6;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ReportToModStore, environment: var5
            _fun77818: for (var _fun77818_ip = 0;;) switch (_fun77818_ip) {
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
                        _fun77818_ip = 69;
                        continue _fun77818
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77818_ip = 105;
                    continue _fun77818;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun77819: for (var _fun77819_ip = 0;;) switch (_fun77819_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun77819_ip = 86;
                        continue _fun77819
                    }
                case 12:
                    var1 = _closure1_slot8;
                    var5 = global;
                    var4 = var5.Object;
                    var2 = var4.fromEntries;
                    var6 = var5.Object;
                    var5 = var6.entries;
                    var0 = var0.reportedMessages;
                    var6 = var5.bind(var6)(var0);
                    var5 = var6.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun77820: for (var _fun77820_ip = 0;;) switch (_fun77820_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = var4[Symbol.iterator];
                                var4 = var0().next;
                                var3 = var4().value;
                                var1 = var0;
                                var6 = undefined;
                                var2 = var1 === var6;
                                var1 = undefined;
                                if (var2) {
                                    _fun77820_ip = 27;
                                    continue _fun77820
                                }
                            case 24:
                                var1 = var3;
                            case 27:
                                var3 = undefined;
                                if (var2) {
                                    _fun77820_ip = 57;
                                    continue _fun77820
                                }
                            case 32:
                                var5 = var4().value;
                                var4 = var0;
                                var4 = var4 === var6;
                                var3 = undefined;
                                var2 = var4;
                                if (var4) {
                                    _fun77820_ip = 57;
                                    continue _fun77820
                                }
                            case 51:
                                var3 = var5;
                                var2 = var4;
                            case 57:
                                if (var2) {
                                    _fun77820_ip = 63;
                                    continue _fun77820
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var0 = new Array(2);
                                var0[0] = var1;
                                var1 = global;
                                var1 = var1.Set;
                                var2 = var1.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var8 = var2;
                                var7 = var3;
                                var1 = new var8[var1](var7, var6);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var0 = var5.bind(var6)(var0);
                    var0 = var2.bind(var4)(var0);
                    var1.reportedMessages = var0;
                case 86:
                    var2 = var3.syncWith;
                    var4 = _closure1_slot5;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot10;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isUserBanned';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun77822: for (var _fun77822_ip = 0;;) switch (_fun77822_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun77822_ip = 31;
                        continue _fun77822
                    }
                case 18:
                    var3 = var4.get;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 31:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun77822_ip = 43;
                        continue _fun77822
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getReportedMessages';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            var0 = var0.reportedMessages;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasReportedMessage';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun77824: for (var _fun77824_ip = 0;;) switch (_fun77824_ip) {
                case 0:
                    var0 = _closure1_slot8;
                    var1 = var0.reportedMessages;
                    var0 = arg0;
                    var4 = var1[var0];
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun77824_ip = 44;
                        continue _fun77824
                    }
                case 31:
                    var3 = var4.has;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 44:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun77824_ip = 54;
                        continue _fun77824
                    }
                case 51:
                    var0 = var1;
                case 54:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ReportToModStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = new Array(1);
    var7 = function(arg0) { // Environment: var3
        _fun77825: for (var _fun77825_ip = 0;;) switch (_fun77825_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun77825_ip = 22;
                    continue _fun77825
                }
            case 16:
                var1 = var3.reportedMessages;
            case 22:
                if (!(var2 == var1)) {
                    _fun77825_ip = 28;
                    continue _fun77825
                }
            case 26:
                var1 = {};
            case 28:
                var0.reportedMessages = var1;
                return var0;
        }
    };
    var1[0] = var7;
    var6.migrations = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleMessageReportSuccess, environment: var3
        _fun77826: for (var _fun77826_ip = 0;;) switch (_fun77826_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var2 = var0.messageId;
                var3 = _closure1_slot8;
                var3 = var3.reportedMessages;
                var4 = var3[var1];
                var3 = null;
                if (!(var3 == var4)) {
                    _fun77826_ip = 78;
                    continue _fun77826
                }
            case 36:
                var3 = _closure1_slot8;
                var4 = var3.reportedMessages;
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var5;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var1] = var3;
            case 78:
                var0 = _closure1_slot8;
                var0 = var0.reportedMessages;
                var1 = var0[var1];
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS = var7;
    var7 = function(arg0) { // Original name: handleGuildBanAdd, environment: var3
        _fun77827: for (var _fun77827_ip = 0;;) switch (_fun77827_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var3 = var1.guildId;
                var2 = _closure1_slot6;
                var2 = var3 === var2;
                if (!var2) {
                    _fun77827_ip = 37;
                    continue _fun77827
                }
            case 27:
                var4 = _closure1_slot7;
                var3 = null;
                var2 = var3 != var4;
            case 37:
                if (!var2) {
                    _fun77827_ip = 62;
                    continue _fun77827
                }
            case 40:
                var3 = _closure1_slot7;
                var2 = var3.set;
                var1 = var0.id;
                var0 = true;
                var0 = var2.bind(var3)(var1, var0);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_BAN_ADD = var7;
    var7 = function(arg0) { // Original name: handleGuildBanRemove, environment: var3
        _fun77828: for (var _fun77828_ip = 0;;) switch (_fun77828_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var3 = var1.guildId;
                var2 = _closure1_slot6;
                var2 = var3 === var2;
                if (!var2) {
                    _fun77828_ip = 37;
                    continue _fun77828
                }
            case 27:
                var4 = _closure1_slot7;
                var3 = null;
                var2 = var3 != var4;
            case 37:
                if (!var2) {
                    _fun77828_ip = 62;
                    continue _fun77828
                }
            case 40:
                var3 = _closure1_slot7;
                var2 = var3.set;
                var1 = var0.id;
                var0 = false;
                var0 = var2.bind(var3)(var1, var0);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_BAN_REMOVE = var7;
    var7 = function(arg0) { // Original name: handleGuildBansLoaded, environment: var3
        _fun77829: for (var _fun77829_ip = 0;;) switch (_fun77829_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.bans;
                var3 = var0.guildId;
                var10 = var0.userIds;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot6;
                if (!(var3 === var2)) {
                    _fun77829_ip = 235;
                    continue _fun77829
                }
            case 42:
                var2 = global;
                var6 = var2.Set;
                var5 = var7.map;
                var3 = function(arg0) { // Environment: var1
                    _fun77830: for (var _fun77830_ip = 0;;) switch (_fun77830_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.user;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77830_ip = 24;
                                continue _fun77830
                            }
                        case 19:
                            var0 = var1.id;
                        case 24:
                            return var0;
                    }
                };
                var11 = var5.bind(var7)(var3);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = var5;
                var3 = new var12[var6](var11, var10);
                var5 = var3 instanceof Object ? var3 : var5;
                _closure2_slot0 = var5;
                var8 = var2.Array;
                var6 = var8.from;
                var3 = var2.Set;
                var7 = null;
                if (!(var7 == var10)) {
                    _fun77829_ip = 118;
                    continue _fun77829
                }
            case 114:
                var10 = new Array(0);
            case 118:
                var9 = var3.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var9;
                var11 = var10;
                var3 = new var12[var3](var11, var10);
                var3 = var3 instanceof Object ? var3 : var9;
                var8 = var6.bind(var8)(var3);
                var6 = var8.filter;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var6.bind(var8)(var3);
                var6 = _closure1_slot7;
                if (!(var7 == var6)) {
                    _fun77829_ip = 201;
                    continue _fun77829
                }
            case 171:
                var2 = var2.Map;
                var6 = var2.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var6;
                var2 = new var12[var2](var11);
                var2 = var2 instanceof Object ? var2 : var6;
                _closure1_slot7 = var2;
            case 201:
                var4 = var5.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun77832: for (var _fun77832_ip = 0;;) switch (_fun77832_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun77832_ip = 29;
                                continue _fun77832
                            }
                        case 13:
                            var2 = var3.set;
                            var1 = arg0;
                            var0 = true;
                            var0 = var2.bind(var3)(var1, var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun77833: for (var _fun77833_ip = 0;;) switch (_fun77833_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun77833_ip = 29;
                                continue _fun77833
                            }
                        case 13:
                            var2 = var3.set;
                            var1 = arg0;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 235:
                return var0;
        }
    };
    var1.GUILD_SETTINGS_LOADED_BANS_BATCH = var7;
    var3 = function() { // Original name: handleLogout, environment: var3
        var1 = null;
        _closure1_slot6 = var1;
        _closure1_slot7 = var1;
        var1 = _closure1_slot8;
        var0 = {};
        var1.reportedMessages = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/report_to_mod/ReportToModStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3172, 566, 806, 2]);