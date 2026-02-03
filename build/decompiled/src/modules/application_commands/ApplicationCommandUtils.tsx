// modules/application_commands/ApplicationCommandUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var7;
    var0 = function arg0, arg1() {
        _fun40896: for (var _fun40896_ip = 0;;) switch (_fun40896_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40896_ip = 46;
                    continue _fun40896
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40896_ip = 55;
                    continue _fun40896
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40896_ip = 343;
                    continue _fun40896
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40896_ip = 323;
                    continue _fun40896
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40896_ip = 283;
                    continue _fun40896
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40896_ip = 270;
                    continue _fun40896
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun40896_ip = 163;
                    continue _fun40896
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40896_ip = 179;
                    continue _fun40896
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40896_ip = 249;
                    continue _fun40896
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40896_ip = 249;
                    continue _fun40896
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40896_ip = 234;
                    continue _fun40896
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40896_ip = 247;
                    continue _fun40896
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40896_ip = 265;
                continue _fun40896;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40896_ip = 283;
                continue _fun40896;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40896_ip = 323;
                    continue _fun40896
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun40896_ip = 330;
                    continue _fun40896
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40897: for (var _fun40897_ip = 0;;) switch (_fun40897_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40897_ip = 56;
                                continue _fun40897
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun40897_ip = 67;
                            continue _fun40897;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun40898: for (var _fun40898_ip = 0;;) switch (_fun40898_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40898_ip = 23;
                    continue _fun40898
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40898_ip = 33;
                    continue _fun40898
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun40898_ip = 70;
                    continue _fun40898
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40898_ip = 55;
                    continue _fun40898
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var4 = function arg0() {
        _fun40899: for (var _fun40899_ip = 0;;) switch (_fun40899_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.rootCommand;
                var3 = var2.command;
                var10 = var2.applicationId;
                var8 = var2.subCommandPath;
                var2 = var2.useKeyedPermissions;
                var11 = undefined;
                var _closure2_slot0 = var11;
                var5 = var1.permissions;
                var4 = null;
                var6 = var4 != var5;
                if (!var6) {
                    _fun40899_ip = 72;
                    continue _fun40899
                }
            case 55:
                var5 = var1.permissions;
                var7 = var5.length;
                var5 = 0;
                var6 = var7 > var5;
            case 72:
                var5 = undefined;
                if (!var6) {
                    _fun40899_ip = 159;
                    continue _fun40899
                }
            case 77:
                if (var2) {
                    _fun40899_ip = 109;
                    continue _fun40899
                }
            case 80:
                var2 = {};
                _closure2_slot0 = var2;
                var9 = var1.permissions;
                var7 = var9.forEach;
                var6 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var0 = var2.id;
                    var1[var0] = var2;
                    var0 = undefined;
                    return var0;
                };
                var6 = var7.bind(var9)(var6);
                _fun40899_ip = 156;
                continue _fun40899;
            case 109:
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 5;
                var6 = var9[var6];
                var9 = var7.bind(var11)(var6);
                var7 = var9.keyPermissions;
                var6 = var1.permissions;
                var6 = var7.bind(var9)(var6);
                _closure2_slot0 = var6;
                var2 = var6;
            case 156:
                var5 = var2;
            case 159:
                var7 = var8;
                if (!(var4 == var8)) {
                    _fun40899_ip = 170;
                    continue _fun40899
                }
            case 166:
                var7 = new Array(0);
            case 170:
                var6 = var7.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var6 = var6.bind(var7)(var2);
                var7 = var8;
                if (!(var4 == var7)) {
                    _fun40899_ip = 196;
                    continue _fun40899
                }
            case 192:
                var7 = new Array(0);
            case 196:
                var2 = var7.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.displayName;
                    return var0;
                };
                var7 = var2.bind(var7)(var0);
                var0 = {};
                var2 = var1.version;
                var0.version = var2;
                var2 = var1.guild_id;
                var0.guildId = var2;
                var2 = var1.id;
                var14 = new Array(1);
                var14[0] = var2;
                var2 = 1;
                var17 = var14;
                var16 = var6;
                var15 = var2;
                var9 = arraySpread(var17, var16, var15);
                var13 = var14.join;
                var12 = _closure1_slot7;
                var12 = var13.bind(var14)(var12);
                var0.id = var12;
                var12 = var1.name;
                var13 = new Array(1);
                var13[0] = var12;
                var17 = var13;
                var16 = var6;
                var6 = arraySpread(var17, var16, var15);
                var12 = var13.join;
                var6 = ' ';
                var12 = var12.bind(var13)(var6);
                var0.untranslatedName = var12;
                var12 = var3.name_localized;
                var0.serverLocalizedName = var12;
                var0.applicationId = var10;
                var10 = var1.type;
                if (!(var4 == var10)) {
                    _fun40899_ip = 383;
                    continue _fun40899
                }
            case 351:
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var12 = 6;
                var12 = var14[var12];
                var12 = var13.bind(var11)(var12);
                var12 = var12.ApplicationCommandType;
                var10 = var12.CHAT;
            case 383:
                var0.type = var10;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var10 = 7;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.ApplicationCommandInputType;
                var10 = var10.BOT;
                var0.inputType = var10;
                var10 = var3.description;
                var0.untranslatedDescription = var10;
                var12 = _closure1_slot15;
                var10 = var3.options;
                var10 = var12.bind(var11)(var10);
                var0.options = var10;
                var0.rootCommand = var1;
                var0.subCommandPath = var8;
                var8 = var1.default_member_permissions;
                var10 = var4 == var8;
                var8 = undefined;
                if (var10) {
                    _fun40899_ip = 514;
                    continue _fun40899
                }
            case 477:
                var10 = _closure1_slot2;
                var12 = _closure1_slot3;
                var9 = 8;
                var9 = var12[var9];
                var11 = var10.bind(var11)(var9);
                var10 = var11.deserialize;
                var9 = var1.default_member_permissions;
                var8 = var10.bind(var11)(var9);
            case 514:
                var0.defaultMemberPermissions = var8;
                var8 = var1.dm_permission;
                var0.dmPermission = var8;
                var0.permissions = var5;
                var8 = var1.name_localized;
                if (!(var4 == var8)) {
                    _fun40899_ip = 550;
                    continue _fun40899
                }
            case 545:
                var8 = var1.name;
            case 550:
                var5 = new Array(1);
                var5[0] = var8;
                var17 = var5;
                var16 = var7;
                var15 = var2;
                var2 = arraySpread(var17, var16, var15);
                var2 = var5.join;
                var2 = var2.bind(var5)(var6);
                var0.displayName = var2;
                var2 = var3.description_localized;
                if (!(var4 == var2)) {
                    _fun40899_ip = 600;
                    continue _fun40899
                }
            case 595:
                var2 = var3.description;
            case 600:
                var0.displayDescription = var2;
                var2 = var1.nsfw;
                var0.nsfw = var2;
                var2 = var1.contexts;
                var0.contexts = var2;
                var2 = var1.integration_types;
                var0.integration_types = var2;
                var2 = var1.global_popularity_rank;
                var0.global_popularity_rank = var2;
                var1 = var1.handler;
                var0.handler = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var0 = function arg0() {
        _fun40903: for (var _fun40903_ip = 0;;) switch (_fun40903_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun40903_ip = 31;
                    continue _fun40903
                }
            case 14:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun40904: for (var _fun40904_ip = 0;;) switch (_fun40904_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = {};
                            var9 = var3;
                            var8 = var2;
                            var0 = copyDataProperties(var9, var8);
                            var7 = var2.choices;
                            var0 = null;
                            var1 = var0 == var7;
                            var6 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun40904_ip = 51;
                                continue _fun40904
                            }
                        case 34:
                            var5 = var7.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun40905: for (var _fun40905_ip = 0;;) switch (_fun40905_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = {};
                                        var5 = var0;
                                        var4 = var1;
                                        var2 = copyDataProperties(var5, var4);
                                        var2 = var1.name_localized;
                                        var3 = null;
                                        if (!(var3 == var2)) {
                                            _fun40905_ip = 32;
                                            continue _fun40905
                                        }
                                    case 27:
                                        var2 = var1.name;
                                    case 32:
                                        var1 = 'displayName';
                                        var0[var1] = var2;
                                        return var0;
                                }
                            };
                            var4 = var5.bind(var7)(var1);
                        case 51:
                            var1 = 'choices';
                            var3[var1] = var4;
                            var5 = _closure1_slot15;
                            var4 = var2.options;
                            var5 = var5.bind(var6)(var4);
                            var4 = 'options';
                            var3[var4] = var5;
                            var5 = var2.name_localized;
                            var4 = 'serverLocalizedName';
                            var3[var4] = var5;
                            var5 = var2.name_localized;
                            if (!(var0 == var5)) {
                                _fun40904_ip = 116;
                                continue _fun40904
                            }
                        case 111:
                            var5 = var2.name;
                        case 116:
                            var4 = 'displayName';
                            var3[var4] = var5;
                            var4 = var2.description_localized;
                            if (!(var0 == var4)) {
                                _fun40904_ip = 140;
                                continue _fun40904
                            }
                        case 135:
                            var4 = var2.description;
                        case 140:
                            var0 = 'displayDescription';
                            var3[var0] = var4;
                            var4 = var2.type;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var7 = 6;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.ApplicationCommandOptionType;
                            var0 = var0.CHANNEL;
                            if (!(var4 === var0)) {
                                _fun40904_ip = 204;
                                continue _fun40904
                            }
                        case 190:
                            var0 = 'channel_types';
                            var0 = var0 in var2;
                            if (var0) {
                                _fun40904_ip = 470;
                                continue _fun40904
                            }
                        case 204:
                            var4 = var2.type;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.ApplicationCommandOptionType;
                            var0 = var0.NUMBER;
                            if (!(var4 !== var0)) {
                                _fun40904_ip = 280;
                                continue _fun40904
                            }
                        case 242:
                            var4 = var2.type;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.ApplicationCommandOptionType;
                            var0 = var0.INTEGER;
                            if (!(var4 === var0)) {
                                _fun40904_ip = 354;
                                continue _fun40904
                            }
                        case 280:
                            var0 = 'min_value';
                            var0 = var0 in var2;
                            if (var0) {
                                _fun40904_ip = 306;
                                continue _fun40904
                            }
                        case 293:
                            var0 = 'max_value';
                            var0 = var0 in var2;
                            if (!var0) {
                                _fun40904_ip = 354;
                                continue _fun40904
                            }
                        case 306:
                            var0 = {};
                            var9 = var0;
                            var8 = var3;
                            var4 = copyDataProperties(var9, var8);
                            var5 = var2.min_value;
                            var4 = 'minValue';
                            var0[var4] = var5;
                            var5 = var2.max_value;
                            var4 = 'maxValue';
                            var0[var4] = var5;
                            _fun40904_ip = 468;
                            continue _fun40904;
                        case 354:
                            var5 = var2.type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var1 = var1[var7];
                            var1 = var4.bind(var6)(var1);
                            var1 = var1.ApplicationCommandOptionType;
                            var4 = var1.STRING;
                            var1 = var3;
                            if (!(var5 === var4)) {
                                _fun40904_ip = 465;
                                continue _fun40904
                            }
                        case 395:
                            var4 = 'min_length';
                            var4 = var4 in var2;
                            if (var4) {
                                _fun40904_ip = 420;
                                continue _fun40904
                            }
                        case 406:
                            var4 = 'max_length';
                            var4 = var4 in var2;
                            var1 = var3;
                            if (!var4) {
                                _fun40904_ip = 465;
                                continue _fun40904
                            }
                        case 420:
                            var4 = {};
                            var9 = var4;
                            var8 = var3;
                            var5 = copyDataProperties(var9, var8);
                            var6 = var2.min_length;
                            var5 = 'minLength';
                            var4[var5] = var6;
                            var6 = var2.max_length;
                            var5 = 'maxLength';
                            var4[var5] = var6;
                            var1 = var4;
                        case 465:
                            var0 = var1;
                        case 468:
                            _fun40904_ip = 500;
                            continue _fun40904;
                        case 470:
                            var1 = {};
                            var9 = var1;
                            var8 = var3;
                            var3 = copyDataProperties(var9, var8);
                            var3 = var2.channel_types;
                            var2 = 'channelTypes';
                            var1[var2] = var3;
                            var0 = var1;
                        case 500:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 31:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun40906: for (var _fun40906_ip = 0;;) switch (_fun40906_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.rootCommand;
                var5 = var0.command;
                var4 = var0.applicationId;
                var3 = var0.subCommandPath;
                var0 = var0.useKeyedPermissions;
                var2 = var5.hasOwnProperty;
                var1 = 'id';
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun40906_ip = 214;
                    continue _fun40906
                }
            case 55:
                var9 = var5.type;
                var10 = _closure1_slot0;
                var2 = _closure1_slot3;
                var11 = 6;
                var2 = var2[var11];
                var7 = undefined;
                var2 = var10.bind(var7)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.SUB_COMMAND;
                if (!(var9 !== var2)) {
                    _fun40906_ip = 247;
                    continue _fun40906
                }
            case 104:
                var9 = var5.type;
                var10 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var11];
                var2 = var10.bind(var7)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.SUB_COMMAND_GROUP;
                if (!(var9 !== var2)) {
                    _fun40906_ip = 247;
                    continue _fun40906
                }
            case 142:
                var9 = var5.options;
                var2 = null;
                if (!(var2 != var9)) {
                    _fun40906_ip = 169;
                    continue _fun40906
                }
            case 153:
                var2 = var5.options;
                var9 = var2.length;
                var2 = 0;
                if (!(var2 === var9)) {
                    _fun40906_ip = 247;
                    continue _fun40906
                }
            case 169:
                var2 = _closure1_slot14;
                var1 = {};
                var1.rootCommand = var6;
                var1.command = var5;
                var1.applicationId = var4;
                var1.subCommandPath = var3;
                var1.useKeyedPermissions = var0;
                var2 = var2.bind(var7)(var1);
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            case 214:
                var2 = var5.options;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun40906_ip = 779;
                    continue _fun40906
                }
            case 228:
                var1 = var5.options;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun40906_ip = 779;
                    continue _fun40906
                }
            case 247:
                var1 = new Array(0);
                var2 = var5.options;
                var14 = null;
                if (!(var14 != var2)) {
                    _fun40906_ip = 777;
                    continue _fun40906
                }
            case 265:
                var9 = var5.options;
                var7 = var9.filter;
                var2 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.SUB_COMMAND_GROUP;
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var7.bind(var9)(var2);
                var2 = var7.length;
                var10 = 0;
                var11 = var10 < var2;
                var9 = undefined;
                var13 = 6;
                var12 = 0;
                if (!var11) {
                    _fun40906_ip = 501;
                    continue _fun40906
                }
            case 312:
                var15 = var1.push;
                var16 = _closure1_slot16;
                var11 = {};
                var11.rootCommand = var6;
                var17 = var7[var12];
                var11.command = var17;
                var11.applicationId = var4;
                var19 = var3;
                if (!(var14 == var3)) {
                    _fun40906_ip = 352;
                    continue _fun40906
                }
            case 348:
                var19 = new Array(0);
            case 352:
                var18 = var19.concat;
                var20 = {};
                var17 = var7[var12];
                var17 = var17.name;
                var20.name = var17;
                var21 = _closure1_slot0;
                var17 = _closure1_slot3;
                var17 = var17[var13];
                var17 = var21.bind(var9)(var17);
                var17 = var17.ApplicationCommandOptionType;
                var17 = var17.SUB_COMMAND_GROUP;
                var20.type = var17;
                var17 = var7[var12];
                var17 = var17.name_localized;
                if (!(var14 == var17)) {
                    _fun40906_ip = 428;
                    continue _fun40906
                }
            case 419:
                var21 = var7[var12];
                var17 = var21.name;
            case 428:
                var20.displayName = var17;
                var17 = new Array(1);
                var17[0] = var20;
                var17 = var18.bind(var19)(var17);
                var11.subCommandPath = var17;
                var11.useKeyedPermissions = var0;
                var23 = var16.bind(var9)(var11);
                var11 = new Array(0);
                var24 = var11;
                var22 = 0;
                var16 = arraySpread(var24, var23, var22);
                var24 = var15;
                var23 = var11;
                var22 = var1;
                var11 = apply(var24, var23, var22);
                var12 = var12 + 1;
                var11 = var7.length;
                if (var12 < var11) {
                    _fun40906_ip = 312;
                    continue _fun40906
                }
            case 501:
                var12 = var5.options;
                var11 = var12.filter;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.SUB_COMMAND;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var11.bind(var12)(var8);
                var11 = var8.length;
                var11 = var10 < var11;
                var12 = 0;
                if (!var11) {
                    _fun40906_ip = 706;
                    continue _fun40906
                }
            case 538:
                var15 = var1.push;
                var16 = _closure1_slot14;
                var11 = {};
                var11.rootCommand = var6;
                var17 = var8[var12];
                var11.command = var17;
                var11.applicationId = var4;
                var19 = var3;
                if (!(var14 == var19)) {
                    _fun40906_ip = 578;
                    continue _fun40906
                }
            case 574:
                var19 = new Array(0);
            case 578:
                var18 = var19.concat;
                var20 = {};
                var17 = var8[var12];
                var17 = var17.name;
                var20.name = var17;
                var21 = _closure1_slot0;
                var17 = _closure1_slot3;
                var17 = var17[var13];
                var17 = var21.bind(var9)(var17);
                var17 = var17.ApplicationCommandOptionType;
                var17 = var17.SUB_COMMAND;
                var20.type = var17;
                var17 = var8[var12];
                var17 = var17.name_localized;
                if (!(var14 == var17)) {
                    _fun40906_ip = 654;
                    continue _fun40906
                }
            case 645:
                var21 = var8[var12];
                var17 = var21.name;
            case 654:
                var20.displayName = var17;
                var17 = new Array(1);
                var17[0] = var20;
                var17 = var18.bind(var19)(var17);
                var11.subCommandPath = var17;
                var11.useKeyedPermissions = var0;
                var11 = var16.bind(var9)(var11);
                var11 = var15.bind(var1)(var11);
                var12 = var12 + 1;
                var11 = var8.length;
                if (var12 < var11) {
                    _fun40906_ip = 538;
                    continue _fun40906
                }
            case 706:
                var7 = var7.length;
                var7 = var10 === var7;
                if (!var7) {
                    _fun40906_ip = 727;
                    continue _fun40906
                }
            case 718:
                var8 = var8.length;
                var7 = var10 === var8;
            case 727:
                if (!var7) {
                    _fun40906_ip = 775;
                    continue _fun40906
                }
            case 730:
                var7 = var1.push;
                var8 = _closure1_slot14;
                var2 = {};
                var2.rootCommand = var6;
                var2.command = var5;
                var2.applicationId = var4;
                var2.subCommandPath = var3;
                var2.useKeyedPermissions = var0;
                var2 = var8.bind(var9)(var2);
                var2 = var7.bind(var1)(var2);
            case 775:
                return var1;
            case 777:
                return var1;
            case 779:
                var2 = _closure1_slot14;
                var1 = {};
                var1.rootCommand = var6;
                var1.command = var5;
                var1.applicationId = var4;
                var1.subCommandPath = var3;
                var1.useKeyedPermissions = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun40909: for (var _fun40909_ip = 0;;) switch (_fun40909_ip) {
            case 0:
                var1 = arg0;
                var4 = arg2;
                var10 = _closure1_slot0;
                var0 = _closure1_slot3;
                var6 = 5;
                var2 = var0[var6];
                var8 = undefined;
                var7 = var10.bind(var8)(var2);
                var5 = var7.toPermissionKey;
                var2 = var1.userId;
                var9 = 7;
                var0 = var0[var9];
                var0 = var10.bind(var8)(var0);
                var0 = var0.ApplicationCommandPermissionType;
                var0 = var0.USER;
                var0 = var5.bind(var7)(var2, var0);
                var0 = var4[var0];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40909_ip = 298;
                    continue _fun40909
                }
            case 85:
                var5 = _closure1_slot12;
                var1 = var1.roles;
                var13 = var5.bind(var8)(var1);
                var5 = var13.bind(var8)();
                var10 = var5.done;
                var1 = false;
                var7 = true;
                var12 = var5;
                var11 = false;
                var5 = false;
                if (var10) {
                    _fun40909_ip = 219;
                    continue _fun40909
                }
            case 123:
                var16 = var12.value;
                var17 = _closure1_slot0;
                var10 = _closure1_slot3;
                var14 = var10[var6];
                var15 = var17.bind(var8)(var14);
                var14 = var15.toPermissionKey;
                var10 = var10[var9];
                var10 = var17.bind(var8)(var10);
                var10 = var10.ApplicationCommandPermissionType;
                var10 = var10.ROLE;
                var10 = var14.bind(var15)(var16, var10);
                var10 = var4[var10];
                if (!(var2 != var10)) {
                    _fun40909_ip = 197;
                    continue _fun40909
                }
            case 186:
                var10 = var10.permission;
                var11 = true;
                if (var10) {
                    _fun40909_ip = 217;
                    continue _fun40909
                }
            case 197:
                var15 = var13.bind(var8)();
                var10 = var15.done;
                var12 = var15;
                var5 = var11;
                if (var10) {
                    _fun40909_ip = 219;
                    continue _fun40909
                }
            case 215:
                _fun40909_ip = 123;
                continue _fun40909;
            case 217:
                return var7;
            case 219:
                if (var5) {
                    _fun40909_ip = 296;
                    continue _fun40909
                }
            case 222:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var6 = var3[var6];
                var7 = var5.bind(var8)(var6);
                var6 = var7.toPermissionKey;
                var3 = var3[var9];
                var3 = var5.bind(var8)(var3);
                var3 = var3.ApplicationCommandPermissionType;
                var5 = var3.ROLE;
                var3 = arg1;
                var3 = var6.bind(var7)(var3, var5);
                var3 = var4[var3];
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun40909_ip = 294;
                    continue _fun40909
                }
            case 288:
                var2 = var3.permission;
            case 294:
                return var2;
            case 296:
                return var1;
            case 298:
                var0 = var0.permission;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var8 = 0;
    var3 = var7[var8];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.isReadableType;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var9 = var3.BuiltInSectionId;
    var _closure1_slot6 = var9;
    var3 = var3.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var9 = var3.AnalyticEvents;
    var _closure1_slot8 = var9;
    var3 = var3.ID_REGEX;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var7[var3];
    var5 = var5.bind(var0)(var3);
    var3 = var5.deserialize;
    var3 = var3.bind(var5)(var8);
    var _closure1_slot11 = var3;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.buildCommand = var4;
    var4 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.flatMap;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 10;
            var1 = var2[var1];
            var2 = undefined;
            var5 = var4.bind(var2)(var1);
            var4 = var3.id;
            var1 = null;
            var4 = var1 != var4;
            var1 = 'Missing command id';
            var1 = var5.bind(var2)(var4, var1);
            var1 = _closure1_slot16;
            var0 = {};
            var0.rootCommand = var3;
            var0.command = var3;
            var3 = var3.application_id;
            var0.applicationId = var3;
            var0.subCommandPath = var2;
            var3 = _closure2_slot0;
            var0.useKeyedPermissions = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.buildApplicationCommands = var4;
    var4 = function arg0() {
        _fun40912: for (var _fun40912_ip = 0;;) switch (_fun40912_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var0 = undefined;
                if (var1) {
                    _fun40912_ip = 37;
                    continue _fun40912
                }
            case 14:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun40913: for (var _fun40913_ip = 0;;) switch (_fun40913_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var2 = var3.applicationCommandPermissions;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun40913_ip = 50;
                                continue _fun40913
                            }
                        case 18:
                            var2 = var0.push;
                            var1 = {};
                            var4 = var3.id;
                            var1.id = var4;
                            var3 = var3.applicationCommandPermissions;
                            var1.permissions = var3;
                            var1 = var2.bind(var0)(var1);
                        case 50:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var0 = var3.bind(var4)(var2, var1);
            case 37:
                return var0;
        }
    };
    var2.applicationPermissionsList = var4;
    var4 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot9;
        var1 = var2.test;
        var0 = var3.trim;
        var0 = var0.bind(var3)();
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isSnowflake = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = new Array(0);
        var _closure2_slot2 = var3;
        var2 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 9;
        var1 = var4[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = arg0;
        var2 = var2.bind(var4)(var1);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun40916: for (var _fun40916_ip = 0;;) switch (_fun40916_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure2_slot0;
                    var3 = var4.test;
                    var1 = var2.displayName;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun40916_ip = 61;
                        continue _fun40916
                    }
                case 28:
                    var4 = var2.predicate;
                    var3 = null;
                    var3 = var3 == var4;
                    if (var3) {
                        _fun40916_ip = 58;
                        continue _fun40916
                    }
                case 43:
                    var5 = var2.predicate;
                    var4 = _closure2_slot1;
                    var3 = var5.bind(var2)(var4);
                case 58:
                    var1 = var3;
                case 61:
                    if (!var1) {
                        _fun40916_ip = 78;
                        continue _fun40916
                    }
                case 64:
                    var1 = _closure2_slot2;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var2 = var3.slice;
        var1 = 0;
        var0 = arg3;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getMatchingGroupCommands = var4;
    var4 = function arg0() {
        _fun40917: for (var _fun40917_ip = 0;;) switch (_fun40917_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.type;
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var8 = 6;
                var1 = var2[var8];
                var7 = undefined;
                var1 = var6.bind(var7)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.STRING;
                var1 = var3 === var1;
                var5 = var4.type;
                var3 = var2[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.ApplicationCommandOptionType;
                var3 = var3.CHANNEL;
                var5 = var5 === var3;
                var3 = var4.type;
                var2 = var2[var8];
                var2 = var6.bind(var7)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.USER;
                var3 = var3 === var2;
                if (var3) {
                    _fun40917_ip = 150;
                    continue _fun40917
                }
            case 112:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var2 = var9.bind(var7)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.MENTIONABLE;
                var3 = var6 === var2;
            case 150:
                var6 = var4.type;
                var9 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var2 = var9.bind(var7)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.ROLE;
                var2 = var6 === var2;
                if (var2) {
                    _fun40917_ip = 229;
                    continue _fun40917
                }
            case 191:
                var4 = var4.type;
                var6 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var8];
                var0 = var6.bind(var7)(var0);
                var0 = var0.ApplicationCommandOptionType;
                var0 = var0.MENTIONABLE;
                var2 = var4 === var0;
            case 229:
                var0 = {};
                var4 = var1;
                if (var1) {
                    _fun40917_ip = 240;
                    continue _fun40917
                }
            case 237:
                var4 = var2;
            case 240:
                var0.canMentionEveryone = var4;
                var0.canMentionHere = var1;
                var4 = var1;
                if (var1) {
                    _fun40917_ip = 259;
                    continue _fun40917
                }
            case 256:
                var4 = var5;
            case 259:
                var0.canMentionChannels = var4;
                var4 = var1;
                if (var1) {
                    _fun40917_ip = 273;
                    continue _fun40917
                }
            case 270:
                var4 = var3;
            case 273:
                var0.canMentionUsers = var4;
                var4 = var1;
                if (var4) {
                    _fun40917_ip = 287;
                    continue _fun40917
                }
            case 284:
                var4 = var2;
            case 287:
                var0.canMentionRoles = var4;
                var0.canMentionAnyGuildUser = var3;
                var0.canMentionNonMentionableRoles = var2;
                var0.canMentionOtherGlobals = var1;
                return var0;
        }
    };
    var2.getApplicationCommandOptionQueryOptions = var4;
    var4 = function arg0() {
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 11;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.subtract;
        var0 = 1;
        var1 = var1.bind(var2)(var0);
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.allChannelsSentinel = var4;
    var4 = function arg0, arg1, arg2() {
        _fun40919: for (var _fun40919_ip = 0;;) switch (_fun40919_ip) {
            case 0:
                var6 = arg0;
                var4 = arg2;
                var0 = arg1;
                var0 = !var0;
                if (!var0) {
                    _fun40919_ip = 242;
                    continue _fun40919
                }
            case 18:
                var1 = var4.isMultiUserDM;
                var1 = var1.bind(var4)();
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun40919_ip = 239;
                    continue _fun40919
                }
            case 40:
                var2 = var4.isDM;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun40919_ip = 223;
                    continue _fun40919
                }
            case 56:
                var2 = var4.isArchivedLockedThread;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun40919_ip = 159;
                    continue _fun40919
                }
            case 72:
                var5 = _closure1_slot4;
                var2 = var4.type;
                var9 = undefined;
                var2 = var5.bind(var9)(var2);
                var5 = !var2;
                var2 = !var5;
                if (var5) {
                    _fun40919_ip = 157;
                    continue _fun40919
                }
            case 97:
                var7 = var6.can;
                var8 = _closure1_slot2;
                var10 = _closure1_slot3;
                var5 = 8;
                var5 = var10[var5];
                var10 = var8.bind(var9)(var5);
                var9 = var10.combine;
                var5 = _closure1_slot10;
                var8 = var5.USE_APPLICATION_COMMANDS;
                var5 = var5.SEND_MESSAGES;
                var5 = var9.bind(var10)(var8, var5);
                var2 = var7.bind(var6)(var5, var4);
            case 157:
                _fun40919_ip = 221;
                continue _fun40919;
            case 159:
                var5 = var6.can;
                var9 = _closure1_slot2;
                var8 = _closure1_slot3;
                var7 = 8;
                var8 = var8[var7];
                var7 = undefined;
                var9 = var9.bind(var7)(var8);
                var8 = var9.combine;
                var3 = _closure1_slot10;
                var7 = var3.USE_APPLICATION_COMMANDS;
                var3 = var3.MANAGE_THREADS;
                var3 = var8.bind(var9)(var7, var3);
                var2 = var5.bind(var6)(var3, var4);
            case 221:
                _fun40919_ip = 236;
                continue _fun40919;
            case 223:
                var3 = var4.isSystemDM;
                var3 = var3.bind(var4)();
                var2 = !var3;
            case 236:
                var1 = var2;
            case 239:
                var0 = var1;
            case 242:
                return var0;
        }
    };
    var2.canUseApplicationCommands = var4;
    var2.DISABLED_BY_DEFAULT_PERMISSION_FLAG = var3;
    var3 = function arg0() {
        _fun40920: for (var _fun40920_ip = 0;;) switch (_fun40920_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.PermissionStore;
                var6 = var0.guild;
                var10 = var0.selfMember;
                var8 = var0.applicationLevelPermissions;
                var9 = var0.commandLevelPermissions;
                var5 = var0.defaultMemberPermissions;
                var1 = var6.ownerId;
                var0 = var10.userId;
                if (!(var1 !== var0)) {
                    _fun40920_ip = 235;
                    continue _fun40920
                }
            case 62:
                var1 = var7.can;
                var0 = _closure1_slot10;
                var0 = var0.ADMINISTRATOR;
                var0 = var1.bind(var7)(var0, var6);
                if (var0) {
                    _fun40920_ip = 235;
                    continue _fun40920
                }
            case 93:
                var4 = var6.id;
                var2 = null;
                if (!(var2 != var9)) {
                    _fun40920_ip = 128;
                    continue _fun40920
                }
            case 104:
                var1 = _closure1_slot17;
                var0 = undefined;
                var0 = var1.bind(var0)(var10, var4, var9);
                var9 = 'boolean';
                var1 = typeof var0;
                if (!(var9 !== var1)) {
                    _fun40920_ip = 233;
                    continue _fun40920
                }
            case 128:
                var1 = _closure1_slot17;
                var9 = undefined;
                var1 = var1.bind(var9)(var10, var4, var8);
                var8 = 'boolean';
                var4 = typeof var1;
                var4 = var8 === var4;
                if (!var4) {
                    _fun40920_ip = 158;
                    continue _fun40920
                }
            case 155:
                var4 = !var1;
            case 158:
                var1 = !var4;
                if (var4) {
                    _fun40920_ip = 231;
                    continue _fun40920
                }
            case 164:
                var2 = var2 == var5;
                if (var2) {
                    _fun40920_ip = 228;
                    continue _fun40920
                }
            case 171:
                var8 = _closure1_slot2;
                var10 = _closure1_slot3;
                var4 = 8;
                var4 = var10[var4];
                var8 = var8.bind(var9)(var4);
                var4 = var8.equals;
                var3 = _closure1_slot11;
                var3 = var4.bind(var8)(var5, var3);
                var3 = !var3;
                if (!var3) {
                    _fun40920_ip = 225;
                    continue _fun40920
                }
            case 213:
                var4 = var7.can;
                var3 = var4.bind(var7)(var5, var6);
            case 225:
                var2 = var3;
            case 228:
                var1 = var2;
            case 231:
                return var1;
            case 233:
                return var0;
            case 235:
                var0 = true;
                return var0;
        }
    };
    var2.hasAccess = var3;
    var3 = function arg0() {
        _fun40921: for (var _fun40921_ip = 0;;) switch (_fun40921_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 7;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.CHAT;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 625;
                    continue _fun40921
                }
            case 47:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.APPLICATION_LAUNCHER;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 83:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.APP_LAUNCHER_APPLICATION_VIEW;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 119:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.CONTEXT_MENU;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 155:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.VOICE_UI;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 191:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.VOICE_TILE_ACTIVITY_SUGGESTIONS;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 227:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.MINI_SHELF;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 263:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.USER_PROFILE;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 299:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.NOW_PLAYING;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 335:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.ACTIVITY_DETAILS;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 371:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.ACTIVITIES_HOME;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 407:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.ACTIVITY_INSTANCE_EMBED;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 443:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.ACTIVITY_BOOKMARK_EMBED;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 479:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.APP_MESSAGE_EMBED;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 512:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 545:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.IMAGE_RECS_MENU;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 578:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.CommandOrigin;
                var2 = var2.IMAGE_RECS_SUBMENU;
                if (!(var2 !== var3)) {
                    _fun40921_ip = 613;
                    continue _fun40921
                }
            case 611:
                return var1;
            case 613:
                var1 = _closure1_slot5;
                var1 = var1.ApplicationLauncherCommand;
                return var1;
            case 625:
                var0 = _closure1_slot5;
                var0 = var0.SlashCommand;
                return var0;
        }
    };
    var2.getCommandAttachmentDraftType = var3;
    var3 = function arg0() {
        _fun40922: for (var _fun40922_ip = 0;;) switch (_fun40922_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun40922_ip = 13;
                    continue _fun40922
                }
            case 9:
                var1 = undefined;
                return var1;
            case 13:
                var3 = var0.id;
                var2 = _closure1_slot6;
                var2 = var2.BUILT_IN;
                if (!(var3 !== var2)) {
                    _fun40922_ip = 126;
                    continue _fun40922
                }
            case 35:
                var2 = var0.id;
                var0 = _closure1_slot6;
                var0 = var0.FRECENCY;
                if (!(var2 !== var0)) {
                    _fun40922_ip = 90;
                    continue _fun40922
                }
            case 54:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.ApplicationCommandTriggerSections;
                var0 = var0.APP;
                _fun40922_ip = 124;
                continue _fun40922;
            case 90:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ApplicationCommandTriggerSections;
                var0 = var2.FRECENCY;
            case 124:
                _fun40922_ip = 160;
                continue _fun40922;
            case 126:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ApplicationCommandTriggerSections;
                var0 = var1.BUILT_IN;
            case 160:
                return var0;
        }
    };
    var2.getCommandTriggerSection = var3;
    var3 = function arg0, arg1, arg2() {
        _fun40923: for (var _fun40923_ip = 0;;) switch (_fun40923_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = arg2;
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 7;
                var1 = var6[var1];
                var8 = undefined;
                var1 = var5.bind(var8)(var1);
                var1 = var1.ApplicationCommandSectionType;
                var1 = var1.APPLICATION;
                var0.type = var1;
                var1 = var3.id;
                var0.id = var1;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun40923_ip = 99;
                    continue _fun40923
                }
            case 67:
                var6 = var1 == var3;
                var5 = undefined;
                if (var6) {
                    _fun40923_ip = 96;
                    continue _fun40923
                }
            case 76:
                var6 = var3.bot;
                var7 = var1 == var6;
                var5 = undefined;
                if (var7) {
                    _fun40923_ip = 96;
                    continue _fun40923
                }
            case 91:
                var5 = var6.username;
            case 96:
                var4 = var5;
            case 99:
                if (!(var1 == var4)) {
                    _fun40923_ip = 108;
                    continue _fun40923
                }
            case 103:
                var4 = var3.name;
            case 108:
                var0.name = var4;
                var4 = var3.icon;
                var0.icon = var4;
                var0.application = var3;
                var1 = var1 != var2;
                if (!var1) {
                    _fun40923_ip = 135;
                    continue _fun40923
                }
            case 132:
                var1 = var2;
            case 135:
                var0.isUserApp = var1;
                return var0;
        }
    };
    var2.getApplicationCommandSection = var3;
    var3 = function arg0() {
        _fun40924: for (var _fun40924_ip = 0;;) switch (_fun40924_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.id;
                var1 = var0.options;
                var3 = null;
                var4 = var3 == var1;
                var5 = undefined;
                if (var4) {
                    _fun40924_ip = 41;
                    continue _fun40924
                }
            case 26:
                var6 = var1.find;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.SUB_COMMAND_GROUP;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var6.bind(var1)(var4);
            case 41:
                var4 = var7;
                if (!(var3 != var5)) {
                    _fun40924_ip = 92;
                    continue _fun40924
                }
            case 48:
                var10 = _closure1_slot7;
                var9 = var5.name;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var6 = '';
                var6 = var8.bind(var6)(var10, var9);
                var4 = var7 + var6;
                var1 = var5.options;
            case 92:
                var5 = var3 == var1;
                var0 = undefined;
                if (var5) {
                    _fun40924_ip = 116;
                    continue _fun40924
                }
            case 101:
                var5 = var1.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ApplicationCommandOptionType;
                    var0 = var0.SUB_COMMAND;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var5.bind(var1)(var2);
            case 116:
                var2 = var4;
                if (!(var3 != var0)) {
                    _fun40924_ip = 167;
                    continue _fun40924
                }
            case 123:
                var7 = _closure1_slot7;
                var6 = var0.name;
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = '';
                var3 = var5.bind(var3)(var7, var6);
                var2 = var4 + var3;
                var1 = var0.options;
            case 167:
                var0 = {};
                var0.commandKey = var2;
                var0.interactionOptions = var1;
                return var0;
        }
    };
    var2.extractInteractionDataProps = var3;
    var3 = function arg0() {
        _fun40927: for (var _fun40927_ip = 0;;) switch (_fun40927_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.command;
                var12 = var0.location;
                var11 = var0.triggerSection;
                var10 = var0.queryLength;
                var8 = var0.sectionName;
                var7 = var0.query;
                var6 = var0.searchResultsPosition;
                var5 = var0.source;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot8;
                var2 = var1.APPLICATION_COMMAND_SELECTED;
                var1 = {};
                var15 = var9.rootCommand;
                var14 = null;
                var16 = var14 == var15;
                var13 = undefined;
                if (var16) {
                    _fun40927_ip = 114;
                    continue _fun40927
                }
            case 109:
                var13 = var15.id;
            case 114:
                if (!(var14 == var13)) {
                    _fun40927_ip = 123;
                    continue _fun40927
                }
            case 118:
                var13 = var9.id;
            case 123:
                var1.command_id = var13;
                var13 = var9.applicationId;
                var1.application_id = var13;
                var1.location = var12;
                var1.section = var11;
                var1.query_length = var10;
                var9 = var9.displayName;
                var9 = var9.length;
                var1.command_text_length = var9;
                var1.section_name = var8;
                var1.query = var7;
                var1.search_results_position = var6;
                var1.source = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackCommandSelected = var3;
    var3 = function arg0() {
        _fun40928: for (var _fun40928_ip = 0;;) switch (_fun40928_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.interactionMetadata;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun40928_ip = 45;
                    continue _fun40928
                }
            case 18:
                var1 = 'triggering_interaction_metadata';
                var3 = var1 in var2;
                var1 = var2;
                if (!var3) {
                    _fun40928_ip = 42;
                    continue _fun40928
                }
            case 34:
                var1 = var2.triggering_interaction_metadata;
            case 42:
                var0 = var1;
            case 45:
                return var0;
        }
    };
    var2.getInitialInteractionMetadata = var3;
    var1 = function arg0, arg1() {
        _fun40929: for (var _fun40929_ip = 0;;) switch (_fun40929_ip) {
            case 0:
                var0 = arg1;
                var1 = var0.result;
                var0 = null;
                var3 = var0 == var1;
                var2 = undefined;
                if (var3) {
                    _fun40929_ip = 26;
                    continue _fun40929
                }
            case 20:
                var2 = var1.sections;
            case 26:
                var0 = var0 != var2;
                if (!var0) {
                    _fun40929_ip = 40;
                    continue _fun40929
                }
            case 33:
                var1 = arg0;
                var0 = var1 in var2;
            case 40:
                return var0;
        }
    };
    var2.hasCommandIndexForApp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 3992, 4541, 660, 483, 4542, 1636, 4543, 484, 22, 44, 24, 4298, 2]);