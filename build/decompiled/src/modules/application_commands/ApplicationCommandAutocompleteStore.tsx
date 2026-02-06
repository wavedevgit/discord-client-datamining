// modules/application_commands/ApplicationCommandAutocompleteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun53722: for (var _fun53722_ip = 0;;) switch (_fun53722_ip) {
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
                _fun53722_ip = 74;
                continue _fun53722;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun53725: for (var _fun53725_ip = 0;;) switch (_fun53725_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot10;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun53725_ip = 239;
                    continue _fun53725
                }
            case 26:
                var4 = _closure1_slot10;
                var3 = var4.set;
                var1 = {};
                var6 = _closure1_slot7;
                var5 = var6.getActiveCommand;
                var7 = var5.bind(var6)(var2);
                var5 = null;
                var8 = var5 == var7;
                var5 = undefined;
                var6 = undefined;
                if (var8) {
                    _fun53725_ip = 70;
                    continue _fun53725
                }
            case 65:
                var6 = var7.id;
            case 70:
                var1.commandId = var6;
                var7 = _closure1_slot7;
                var6 = var7.getActiveOptionName;
                var6 = var6.bind(var7)(var2);
                var1.optionName = var6;
                var6 = global;
                var7 = var6.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var1.optionNameToAutocompleteQueries = var7;
                var7 = var6.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var1.optionNameToLastResults = var7;
                var7 = var6.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var1.optionNameToNonce = var7;
                var6 = var6.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var7;
                var6 = new var11[var6](var10);
                var6 = var6 instanceof Object ? var6 : var7;
                var1.optionNameToLastQuery = var6;
                var6 = false;
                var1.lastErrored = var6;
                var1.lastResponseNonce = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 239:
                var1 = _closure1_slot10;
                var0 = var1.get;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var9 = function() {
        var2 = _closure1_slot9;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot10;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = true;
        return var0;
    };
    var8 = function arg0() {
        _fun53727: for (var _fun53727_ip = 0;;) switch (_fun53727_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.command;
                var2 = _closure1_slot15;
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun53727_ip = 39;
                    continue _fun53727
                }
            case 34:
                var1 = var4.id;
            case 39:
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun53728: for (var _fun53728_ip = 0;;) switch (_fun53728_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot7;
                var1 = var2.getActiveOptionName;
                var2 = var1.bind(var2)(var4);
                var1 = _closure1_slot10;
                var0 = var1.get;
                var1 = var0.bind(var1)(var4);
                var4 = null;
                var0 = var4 != var1;
                if (!var0) {
                    _fun53728_ip = 73;
                    continue _fun53728
                }
            case 47:
                var5 = var1.commandId;
                var5 = var3 !== var5;
                if (var5) {
                    _fun53728_ip = 70;
                    continue _fun53728
                }
            case 60:
                var6 = var1.optionName;
                var5 = var2 !== var6;
            case 70:
                var0 = var5;
            case 73:
                if (!var0) {
                    _fun53728_ip = 182;
                    continue _fun53728
                }
            case 76:
                var4 = var4 != var3;
                if (!var4) {
                    _fun53728_ip = 93;
                    continue _fun53728
                }
            case 83:
                var5 = var1.commandId;
                var4 = var3 !== var5;
            case 93:
                if (!var4) {
                    _fun53728_ip = 160;
                    continue _fun53728
                }
            case 96:
                var5 = var1.optionNameToLastResults;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var5 = var1.optionNameToNonce;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var5 = var1.optionNameToLastQuery;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var5 = var1.optionNameToAutocompleteQueries;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
            case 160:
                var4 = false;
                var1.lastErrored = var4;
                var1.commandId = var3;
                var1.optionName = var2;
                var0 = true;
            case 182:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var1.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot9 = var7;
    var7 = var1.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot10 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var1 = var7.isDesktop;
    var1 = var1.bind(var7)();
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53730: for (var _fun53730_ip = 0;;) switch (_fun53730_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53730_ip = 69;
                        continue _fun53730
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53730_ip = 105;
                    continue _fun53730;
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
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getLastErrored';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.lastErrored;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAutocompleteChoices';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun53733: for (var _fun53733_ip = 0;;) switch (_fun53733_ip) {
                case 0:
                    var2 = _closure1_slot14;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.optionNameToAutocompleteQueries;
                    var2 = var3.get;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var3;
                    if (var1) {
                        _fun53733_ip = 58;
                        continue _fun53733
                    }
                case 45:
                    var2 = var3.get;
                    var1 = arg2;
                    var0 = var2.bind(var3)(var1);
                case 58:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAutocompleteLastChoices';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot14;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var2 = var0.optionNameToLastResults;
            var1 = var2.get;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLastResponseNonce';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot14;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.lastResponseNonce;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationCommandAutocompleteStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var9;
    var1.LOGOUT = var9;
    var1.CHANNEL_SELECT = var9;
    var9 = function arg0() {
        _fun53736: for (var _fun53736_ip = 0;;) switch (_fun53736_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.nonce;
                var10 = var0.channelId;
                var9 = var0.query;
                var3 = var0.name;
                var0 = _closure1_slot14;
                var1 = undefined;
                var0 = var0.bind(var1)(var10);
                var5 = var0.optionNameToLastQuery;
                var2 = var5.get;
                var2 = var2.bind(var5)(var3);
                if (!(var2 !== var9)) {
                    _fun53736_ip = 299;
                    continue _fun53736
                }
            case 62:
                var5 = var0.optionNameToLastQuery;
                var2 = var5.set;
                var2 = var2.bind(var5)(var3, var9);
                var5 = var0.optionNameToAutocompleteQueries;
                var2 = var5.get;
                var8 = var2.bind(var5)(var3);
                var5 = null;
                var7 = var5 == var8;
                var2 = undefined;
                if (var7) {
                    _fun53736_ip = 116;
                    continue _fun53736
                }
            case 106:
                var7 = var8.get;
                var2 = var7.bind(var8)(var9);
            case 116:
                if (!(var5 == var2)) {
                    _fun53736_ip = 270;
                    continue _fun53736
                }
            case 123:
                var8 = var0.optionNameToNonce;
                var7 = var8.get;
                var8 = var7.bind(var8)(var3);
                if (!(var5 != var8)) {
                    _fun53736_ip = 157;
                    continue _fun53736
                }
            case 143:
                var7 = _closure1_slot9;
                var5 = var7.delete;
                var5 = var5.bind(var7)(var8);
            case 157:
                var8 = _closure1_slot9;
                var7 = var8.set;
                var5 = {};
                var5.channelId = var10;
                var5.query = var9;
                var5.name = var3;
                var5 = var7.bind(var8)(var6, var5);
                var7 = _closure1_slot11;
                var5 = var7.set;
                var4 = global;
                var4 = var4.Date;
                var8 = var4.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var8;
                var4 = new var13[var4](var12);
                var4 = var4 instanceof Object ? var4 : var8;
                var4 = var5.bind(var7)(var6, var4);
                var5 = var0.optionNameToNonce;
                var4 = var5.set;
                var4 = var4.bind(var5)(var3, var6);
                var4 = var0.lastErrored;
                var1 = undefined;
                if (!var4) {
                    _fun53736_ip = 268;
                    continue _fun53736
                }
            case 258:
                var4 = false;
                var0.lastErrored = var4;
                var1 = true;
            case 268:
                return var1;
            case 270:
                var1 = false;
                var0.lastErrored = var1;
                var1 = var0.optionNameToLastResults;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
                var0 = true;
                return var0;
            case 299:
                var0 = false;
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST = var9;
    var9 = function arg0() {
        _fun53737: for (var _fun53737_ip = 0;;) switch (_fun53737_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.choices;
                var1 = var0.nonce;
                var9 = undefined;
                var _closure2_slot0 = var9;
                var2 = _closure1_slot9;
                var0 = var2.get;
                var2 = var0.bind(var2)(var1);
                var4 = null;
                if (!(var4 != var2)) {
                    _fun53737_ip = 530;
                    continue _fun53737
                }
            case 49:
                var5 = _closure1_slot9;
                var0 = var5.delete;
                var0 = var0.bind(var5)(var1);
                var5 = _closure1_slot14;
                var0 = var2.channelId;
                var0 = var5.bind(var9)(var0);
                var10 = var0.optionNameToAutocompleteQueries;
                var7 = var10.get;
                var5 = var2.name;
                var5 = var7.bind(var10)(var5);
                if (!(var4 == var5)) {
                    _fun53737_ip = 152;
                    continue _fun53737
                }
            case 102:
                var11 = var0.optionNameToAutocompleteQueries;
                var10 = var11.set;
                var7 = var2.name;
                var5 = global;
                var5 = var5.Map;
                var12 = var5.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var5
                    }
                });
                var15 = var12;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var12;
                var5 = var10.bind(var11)(var7, var5);
            case 152:
                var5 = _closure1_slot12;
                if (!var5) {
                    _fun53737_ip = 229;
                    continue _fun53737
                }
            case 159:
                var11 = _closure1_slot7;
                var10 = var11.getActiveOption;
                var7 = var2.channelId;
                var7 = var10.bind(var11)(var7);
                var11 = var4 == var7;
                var10 = undefined;
                if (var11) {
                    _fun53737_ip = 193;
                    continue _fun53737
                }
            case 188:
                var10 = var7.type;
            case 193:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 8;
                var7 = var12[var7];
                var7 = var11.bind(var9)(var7);
                var7 = var7.ApplicationCommandOptionType;
                var7 = var7.INTEGER;
                var5 = var10 === var7;
            case 229:
                _closure2_slot0 = var5;
                var7 = var4 == var8;
                var5 = undefined;
                if (var7) {
                    _fun53737_ip = 257;
                    continue _fun53737
                }
            case 242:
                var7 = var8.map;
                var3 = function(arg0) { // Environment: var3
                    _fun53738: for (var _fun53738_ip = 0;;) switch (_fun53738_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.value;
                            var3 = var0.name_localized;
                            var1 = var0.name;
                            var0 = {};
                            var5 = null;
                            var2 = var1;
                            if (!(var5 != var3)) {
                                _fun53738_ip = 33;
                                continue _fun53738
                            }
                        case 30:
                            var2 = var3;
                        case 33:
                            var0.displayName = var2;
                            var0.name = var1;
                            var2 = _closure2_slot0;
                            var1 = var4;
                            if (!var2) {
                                _fun53738_ip = 69;
                                continue _fun53738
                            }
                        case 54:
                            var2 = global;
                            var3 = var2.Number;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var4);
                        case 69:
                            var0.value = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var3);
            case 257:
                if (!(var4 == var5)) {
                    _fun53737_ip = 265;
                    continue _fun53737
                }
            case 261:
                var5 = new Array(0);
            case 265:
                var7 = _closure1_slot11;
                var3 = var7.get;
                var10 = var3.bind(var7)(var1);
                var7 = var4 != var10;
                var3 = 0;
                if (!var7) {
                    _fun53737_ip = 340;
                    continue _fun53737
                }
            case 288:
                var7 = global;
                var7 = var7.Date;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = var8;
                var7 = new var15[var7](var14);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.getTime;
                var8 = var7.bind(var8)();
                var7 = var10.getTime;
                var7 = var7.bind(var10)();
                var3 = var8 - var7;
            case 340:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 9;
                var7 = var10[var7];
                var10 = var8.bind(var9)(var7);
                var9 = var10.trackWithMetadata;
                var7 = _closure1_slot8;
                var8 = var7.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
                var7 = {};
                var7.duration_ms = var3;
                var3 = false;
                var7.error = var3;
                var11 = var5.length;
                var7.num_options = var11;
                var7 = var9.bind(var10)(var8, var7);
                var7 = _closure1_slot11;
                var6 = var7.delete;
                var6 = var6.bind(var7)(var1);
                var8 = var0.optionNameToAutocompleteQueries;
                var7 = var8.get;
                var6 = var2.name;
                var7 = var7.bind(var8)(var6);
                if (!(var4 != var7)) {
                    _fun53737_ip = 461;
                    continue _fun53737
                }
            case 444:
                var6 = var7.set;
                var4 = var2.query;
                var4 = var6.bind(var7)(var4, var5);
            case 461:
                var7 = var0.optionNameToLastQuery;
                var6 = var7.get;
                var4 = var2.name;
                var6 = var6.bind(var7)(var4);
                var4 = var2.query;
                if (!(var6 === var4)) {
                    _fun53737_ip = 520;
                    continue _fun53737
                }
            case 492:
                var0.lastErrored = var3;
                var4 = var0.optionNameToLastResults;
                var3 = var4.set;
                var2 = var2.name;
                var2 = var3.bind(var4)(var2, var5);
            case 520:
                var0.lastResponseNonce = var1;
                var0 = true;
                return var0;
            case 530:
                var0 = false;
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE = var9;
    var9 = function arg0() {
        _fun53739: for (var _fun53739_ip = 0;;) switch (_fun53739_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.nonce;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun53739_ip = 228;
                    continue _fun53739
                }
            case 18:
                var3 = _closure1_slot9;
                var1 = var3.get;
                var1 = var1.bind(var3)(var6);
                if (!(var0 != var1)) {
                    _fun53739_ip = 224;
                    continue _fun53739
                }
            case 42:
                var4 = _closure1_slot9;
                var3 = var4.delete;
                var3 = var3.bind(var4)(var6);
                var4 = _closure1_slot11;
                var3 = var4.get;
                var5 = var3.bind(var4)(var6);
                var3 = var0 != var5;
                var0 = 0;
                if (!var3) {
                    _fun53739_ip = 131;
                    continue _fun53739
                }
            case 79:
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var4;
                var3 = new var12[var3](var11);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = var4.getTime;
                var4 = var3.bind(var4)();
                var3 = var5.getTime;
                var3 = var3.bind(var5)();
                var0 = var4 - var3;
            case 131:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var8 = var5.bind(var3)(var4);
                var7 = var8.trackWithMetadata;
                var4 = _closure1_slot8;
                var5 = var4.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE;
                var4 = {};
                var4.duration_ms = var0;
                var0 = true;
                var4.error = var0;
                var4 = var7.bind(var8)(var5, var4);
                var5 = _closure1_slot11;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var6);
                var2 = _closure1_slot14;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                var1.lastErrored = var0;
                return var0;
            case 224:
                var0 = false;
                return var0;
            case 228:
                var0 = false;
                return var0;
        }
    };
    var1.INTERACTION_FAILURE = var9;
    var1.APPLICATION_COMMAND_SET_ACTIVE_COMMAND = var8;
    var1.APP_LAUNCHER_SET_ACTIVE_COMMAND = var8;
    var3 = function arg0() {
        _fun53740: for (var _fun53740_ip = 0;;) switch (_fun53740_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.command;
                var2 = _closure1_slot15;
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun53740_ip = 39;
                    continue _fun53740
                }
            case 34:
                var1 = var4.id;
            case 39:
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_UPDATE_CHANNEL_STATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/ApplicationCommandAutocompleteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6508, 660, 478, 1645, 4303, 566, 806, 2]);