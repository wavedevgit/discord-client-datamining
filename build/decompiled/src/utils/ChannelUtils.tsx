// utils/ChannelUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function arg0, arg1() {
        _fun38763: for (var _fun38763_ip = 0;;) switch (_fun38763_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38763_ip = 46;
                    continue _fun38763
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun38763_ip = 55;
                    continue _fun38763
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun38763_ip = 343;
                    continue _fun38763
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun38763_ip = 323;
                    continue _fun38763
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun38763_ip = 283;
                    continue _fun38763
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun38763_ip = 270;
                    continue _fun38763
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
                    _fun38763_ip = 163;
                    continue _fun38763
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun38763_ip = 179;
                    continue _fun38763
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun38763_ip = 249;
                    continue _fun38763
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun38763_ip = 249;
                    continue _fun38763
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun38763_ip = 234;
                    continue _fun38763
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun38763_ip = 247;
                    continue _fun38763
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun38763_ip = 265;
                continue _fun38763;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun38763_ip = 283;
                continue _fun38763;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun38763_ip = 323;
                    continue _fun38763
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
                    _fun38763_ip = 330;
                    continue _fun38763
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun38764: for (var _fun38764_ip = 0;;) switch (_fun38764_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun38764_ip = 56;
                                continue _fun38764
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
                            _fun38764_ip = 67;
                            continue _fun38764;
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
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun38765: for (var _fun38765_ip = 0;;) switch (_fun38765_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun38765_ip = 23;
                    continue _fun38765
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun38765_ip = 33;
                    continue _fun38765
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
                    _fun38765_ip = 70;
                    continue _fun38765
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun38765_ip = 55;
                    continue _fun38765
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun38766: for (var _fun38766_ip = 0;;) switch (_fun38766_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var0 = var2 === var0;
                if (var0) {
                    _fun38766_ip = 24;
                    continue _fun38766
                }
            case 13:
                var1 = _closure1_slot22;
                var0 = var2 === var1;
            case 24:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var6 = function arg0, arg1, arg2() {
        _fun38767: for (var _fun38767_ip = 0;;) switch (_fun38767_ip) {
            case 0:
                var6 = arg1;
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var5 = 8;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var7 = var0.NONE;
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun38767_ip = 54;
                    continue _fun38767
                }
            case 46:
                var1 = _closure1_slot22;
                var0 = var6 === var1;
            case 54:
                var10 = var7;
                if (!var0) {
                    _fun38767_ip = 101;
                    continue _fun38767
                }
            case 60:
                var1 = _closure1_slot2;
                var3 = _closure1_slot3;
                var0 = 9;
                var0 = var3[var0];
                var3 = var1.bind(var4)(var0);
                var1 = var3.add;
                var0 = _closure1_slot13;
                var0 = var0.VIEW_CHANNEL;
                var10 = var1.bind(var3)(var7, var0);
            case 101:
                var1 = _closure1_slot26;
                var0 = _closure1_slot21;
                var0 = var1.bind(var4)(var6, var0);
                if (var0) {
                    _fun38767_ip = 132;
                    continue _fun38767
                }
            case 118:
                var3 = _closure1_slot26;
                var1 = _closure1_slot23;
                var0 = var3.bind(var4)(var6, var1);
            case 132:
                var1 = var10;
                if (!var0) {
                    _fun38767_ip = 209;
                    continue _fun38767
                }
            case 138:
                var3 = _closure1_slot2;
                var6 = _closure1_slot3;
                var0 = 9;
                var7 = var6[var0];
                var9 = var3.bind(var4)(var7);
                var8 = var9.add;
                var7 = _closure1_slot13;
                var7 = var7.VIEW_CHANNEL;
                var7 = var8.bind(var9)(var10, var7);
                var0 = var6[var0];
                var6 = var3.bind(var4)(var0);
                var3 = var6.add;
                var0 = _closure1_slot13;
                var0 = var0.CONNECT;
                var1 = var3.bind(var6)(var7, var0);
            case 209:
                var0 = {};
                var3 = arg0;
                var0.id = var3;
                var3 = arg2;
                var0.type = var3;
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.NONE;
                var0.deny = var2;
                var0.allow = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var6;
    var5 = function arg0() {
        var0 = arg0;
        var3 = var0.channels;
        var2 = var0.selectedChannelId;
        var _closure2_slot0 = var2;
        var2 = var0.selectedVoiceChannelId;
        var _closure2_slot1 = var2;
        var0 = var0.voiceStates;
        var _closure2_slot2 = var0;
        var0 = new Array(0);
        var _closure2_slot3 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun38769: for (var _fun38769_ip = 0;;) switch (_fun38769_ip) {
                case 0:
                    var3 = arg0;
                    var4 = var3.id;
                    var2 = _closure2_slot1;
                    if (!(var4 !== var2)) {
                        _fun38769_ip = 93;
                        continue _fun38769
                    }
                case 21:
                    var4 = var3.id;
                    var2 = _closure2_slot0;
                    if (!(var4 !== var2)) {
                        _fun38769_ip = 93;
                        continue _fun38769
                    }
                case 34:
                    var2 = _closure2_slot2;
                    var1 = var3.id;
                    var2 = var2[var1];
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun38769_ip = 93;
                        continue _fun38769
                    }
                case 53:
                    var1 = var3.isGuildStageVoice;
                    var3 = var1.bind(var3)();
                    var1 = var2.forEach;
                    if (var3) {
                        _fun38769_ip = 83;
                        continue _fun38769
                    }
                case 71:
                    var3 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot3;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var1.bind(var2)(var3);
                    _fun38769_ip = 93;
                    continue _fun38769;
                case 83:
                    var0 = function(arg0) { // Environment: var0
                        _fun38770: for (var _fun38770_ip = 0;;) switch (_fun38770_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 12;
                                var2 = var5[var1];
                                var0 = undefined;
                                var7 = var4.bind(var0)(var2);
                                var6 = var7.getAudienceRequestToSpeakState;
                                var2 = var3.voiceState;
                                var2 = var6.bind(var7)(var2);
                                var1 = var5[var1];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.RequestToSpeakStates;
                                var1 = var1.ON_STAGE;
                                if (!(var2 === var1)) {
                                    _fun38770_ip = 87;
                                    continue _fun38770
                                }
                            case 70:
                                var2 = _closure2_slot3;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 87:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 93:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot28 = var5;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun38772: for (var _fun38772_ip = 0;;) switch (_fun38772_ip) {
            case 0:
                var2 = arg3;
                var0 = null;
                var0 = var0 == var2;
                var6 = '';
                var5 = var6;
                if (var0) {
                    _fun38772_ip = 43;
                    continue _fun38772
                }
            case 19:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '?summaryId=';
                var5 = var1.bind(var0)(var2);
            case 43:
                var0 = global;
                var1 = var0.location;
                var4 = var1.protocol;
                var1 = var0.location;
                var3 = var1.host;
                var9 = _closure1_slot18;
                var8 = var9.CHANNEL;
                var7 = arg0;
                var2 = arg1;
                var1 = arg2;
                var11 = var8.bind(var9)(var7, var2, var1);
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var13 = '//';
                var15 = var6;
                var14 = var4;
                var12 = var3;
                var10 = var5;
                var0 = var15[var1](var14, var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var _closure1_slot29 = var4;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun38773: for (var _fun38773_ip = 0;;) switch (_fun38773_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var6 = arg2;
                var3 = arg3;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun38773_ip = 117;
                    continue _fun38773
                }
            case 18:
                if (!(var0 != var4)) {
                    _fun38773_ip = 117;
                    continue _fun38773
                }
            case 22:
                if (!(var0 != var6)) {
                    _fun38773_ip = 117;
                    continue _fun38773
                }
            case 26:
                var0 = global;
                var1 = var0.location;
                var8 = var1.protocol;
                var1 = var0.location;
                var7 = var1.host;
                var2 = _closure1_slot18;
                var1 = var2.CHANNEL_THREAD_VIEW;
                var13 = var2;
                var12 = var5;
                var11 = var4;
                var10 = var6;
                var9 = var3;
                var9 = var13[var1](var12, var11, var10, var9, var8);
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var13 = '';
                var11 = '//';
                var12 = var8;
                var10 = var7;
                var0 = var13[var2](var12, var11, var10, var9, var8);
                _fun38773_ip = 133;
                continue _fun38773;
            case 117:
                var2 = _closure1_slot29;
                var1 = undefined;
                var0 = var2.bind(var1)(var5, var4, var3);
            case 133:
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var9);
    var0 = 0;
    var9 = var8[var0];
    var0 = undefined;
    var9 = var10.bind(var0)(var9);
    var11 = var9.isGuildSelectableChannelType;
    var _closure1_slot4 = var11;
    var11 = var9.TEXT_CHANNEL_TYPES;
    var _closure1_slot5 = var11;
    var9 = var9.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 2;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 3;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 4;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot10 = var9;
    var9 = 5;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var _closure1_slot11 = var9;
    var9 = 6;
    var9 = var8[var9];
    var11 = var10.bind(var0)(var9);
    var9 = var11.ChannelTypes;
    var _closure1_slot12 = var9;
    var12 = var11.Permissions;
    var _closure1_slot13 = var12;
    var12 = var11.GuildFeatures;
    var _closure1_slot14 = var12;
    var12 = var11.BoostedGuildTiers;
    var _closure1_slot15 = var12;
    var12 = var11.BITRATE_MAX;
    var _closure1_slot16 = var12;
    var12 = var11.BITRATE_DEFAULT;
    var _closure1_slot17 = var12;
    var12 = var11.Routes;
    var _closure1_slot18 = var12;
    var11 = var11.AnalyticsPages;
    var _closure1_slot19 = var11;
    var11 = 7;
    var11 = var8[var11];
    var11 = var10.bind(var0)(var11);
    var11 = var11.BoostedGuildFeatures;
    var _closure1_slot20 = var11;
    var11 = var9.GUILD_VOICE;
    var _closure1_slot21 = var11;
    var11 = var9.GUILD_CATEGORY;
    var _closure1_slot22 = var11;
    var9 = var9.GUILD_STAGE_VOICE;
    var _closure1_slot23 = var9;
    var9 = 17;
    var9 = var8[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/ChannelUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function arg0, arg1() {
        _fun38774: for (var _fun38774_ip = 0;;) switch (_fun38774_ip) {
            case 0:
                var3 = arg1;
                var0 = _closure1_slot12;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var3 !== var0)) {
                    _fun38774_ip = 72;
                    continue _fun38774
                }
            case 20:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Premium channel feature not supported for channel type ';
                var10 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 72:
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 8;
                var0 = var5[var2];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var8 = var0.NONE;
                var0 = 9;
                var0 = var5[var0];
                var7 = var4.bind(var3)(var0);
                var1 = var7.add;
                var0 = _closure1_slot13;
                var0 = var0.CONNECT;
                var1 = var1.bind(var7)(var8, var0);
                var0 = {};
                var7 = arg0;
                var0.id = var7;
                var7 = _closure1_slot0;
                var6 = 10;
                var6 = var5[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.PermissionOverwriteType;
                var6 = var6.ROLE;
                var0.type = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.NONE;
                var0.allow = var2;
                var0.deny = var1;
                return var0;
        }
    };
    var2.denyChannelAccessForNonPaidUsers = var9;
    var2.allowChannelAccess = var6;
    var6 = function arg0, arg1, arg2() {
        _fun38775: for (var _fun38775_ip = 0;;) switch (_fun38775_ip) {
            case 0:
                var10 = arg1;
                var3 = arg2;
                var4 = arguments[3];
                var _closure2_slot0 = var10;
                var8 = undefined;
                if (!(var4 === var8)) {
                    _fun38775_ip = 23;
                    continue _fun38775
                }
            case 21:
                var4 = false;
            case 23:
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var5 = var3.length;
                var2 = 0;
                var2 = var5 > var2;
                if (var2) {
                    _fun38775_ip = 48;
                    continue _fun38775
                }
            case 45:
                var2 = var4;
            case 48:
                if (!var2) {
                    _fun38775_ip = 325;
                    continue _fun38775
                }
            case 54:
                var4 = var0.push;
                var7 = _closure1_slot0;
                var2 = _closure1_slot3;
                var5 = 10;
                var5 = var2[var5];
                var5 = var7.bind(var8)(var5);
                var5 = var5.PermissionOverwriteType;
                var7 = var5.ROLE;
                var5 = _closure1_slot2;
                var9 = 8;
                var2 = var2[var9];
                var2 = var5.bind(var8)(var2);
                var12 = var2.NONE;
                var2 = _closure1_slot4;
                var2 = var2.bind(var8)(var10);
                if (var2) {
                    _fun38775_ip = 136;
                    continue _fun38775
                }
            case 128:
                var5 = _closure1_slot22;
                var2 = var10 === var5;
            case 136:
                var15 = var12;
                if (!var2) {
                    _fun38775_ip = 183;
                    continue _fun38775
                }
            case 142:
                var5 = _closure1_slot2;
                var11 = _closure1_slot3;
                var2 = 9;
                var2 = var11[var2];
                var11 = var5.bind(var8)(var2);
                var5 = var11.add;
                var2 = _closure1_slot13;
                var2 = var2.VIEW_CHANNEL;
                var15 = var5.bind(var11)(var12, var2);
            case 183:
                var5 = _closure1_slot26;
                var2 = _closure1_slot21;
                var2 = var5.bind(var8)(var10, var2);
                var5 = var15;
                if (!var2) {
                    _fun38775_ip = 274;
                    continue _fun38775
                }
            case 203:
                var10 = _closure1_slot2;
                var11 = _closure1_slot3;
                var2 = 9;
                var12 = var11[var2];
                var14 = var10.bind(var8)(var12);
                var13 = var14.add;
                var12 = _closure1_slot13;
                var12 = var12.VIEW_CHANNEL;
                var12 = var13.bind(var14)(var15, var12);
                var2 = var11[var2];
                var11 = var10.bind(var8)(var2);
                var10 = var11.add;
                var2 = _closure1_slot13;
                var2 = var2.CONNECT;
                var5 = var10.bind(var11)(var12, var2);
            case 274:
                var2 = {};
                var10 = arg0;
                var2.id = var10;
                var2.type = var7;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.NONE;
                var2.allow = var6;
                var2.deny = var5;
                var2 = var4.bind(var0)(var2);
            case 325:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var6 = _closure1_slot27;
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.PermissionOverwriteType;
                    var4 = var1.ROLE;
                    var1 = arg0;
                    var1 = var6.bind(var0)(var1, var5, var4);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.permissionOverwritesForRoles = var6;
    var6 = function arg0, arg1() {
        var4 = _closure1_slot27;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 10;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.PermissionOverwriteType;
        var2 = var0.MEMBER;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var1, var0, var2);
        return var0;
    };
    var2.permissionOverwriteForUser = var6;
    var6 = function arg0, arg1() {
        var4 = _closure1_slot27;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 10;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.PermissionOverwriteType;
        var2 = var0.ROLE;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var3)(var1, var0, var2);
        return var0;
    };
    var2.permissionOverwriteForRole = var6;
    var6 = function arg0() {
        var1 = {};
        var0 = arg0;
        var1.id = var0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var2 = 10;
        var2 = var4[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.PermissionOverwriteType;
        var2 = var2.ROLE;
        var1.type = var2;
        var2 = _closure1_slot13;
        var2 = var2.SEND_MESSAGES;
        var1.deny = var2;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var4[var0];
        var0 = var2.bind(var3)(var0);
        var0 = var0.NONE;
        var1.allow = var0;
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var2.permissionOverwritesForAnnouncement = var6;
    var6 = function arg0, arg1, arg2() {
        _fun38780: for (var _fun38780_ip = 0;;) switch (_fun38780_ip) {
            case 0:
                var3 = arg0;
                var11 = arg1;
                var1 = arg2;
                var0 = var3.getGuildId;
                var6 = var0.bind(var3)();
                var0 = var1.getGuild;
                var2 = var0.bind(var1)(var6);
                var1 = null;
                var4 = var1 == var2;
                var10 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun38780_ip = 48;
                    continue _fun38780
                }
            case 42:
                var0 = var2.maxVideoChannelUsers;
            case 48:
                var4 = var1 != var0;
                var5 = -1;
                var12 = var5;
                if (!var4) {
                    _fun38780_ip = 67;
                    continue _fun38780
                }
            case 64:
                var12 = var0;
            case 67:
                var4 = var1 == var2;
                var0 = undefined;
                if (var4) {
                    _fun38780_ip = 82;
                    continue _fun38780
                }
            case 76:
                var0 = var2.maxStageVideoChannelUsers;
            case 82:
                var2 = var1 != var0;
                if (!var2) {
                    _fun38780_ip = 92;
                    continue _fun38780
                }
            case 89:
                var5 = var0;
            case 92:
                var2 = _closure1_slot11;
                var4 = var2.countVoiceStatesForChannel;
                var0 = var3.id;
                var4 = var4.bind(var2)(var0);
                var0 = var2.getVoiceStatesForChannel;
                var9 = var0.bind(var2)(var3);
                var8 = _closure1_slot9;
                var2 = var8.can;
                var0 = _closure1_slot13;
                var0 = var0.MOVE_MEMBERS;
                var2 = var2.bind(var8)(var0, var3);
                if (!var2) {
                    _fun38780_ip = 181;
                    continue _fun38780
                }
            case 155:
                var13 = _closure1_slot9;
                var8 = var13.can;
                var0 = _closure1_slot13;
                var0 = var0.CONNECT;
                var2 = var8.bind(var13)(var0, var3);
            case 181:
                var8 = var3.type;
                var0 = _closure1_slot23;
                if (!(var8 !== var0)) {
                    _fun38780_ip = 247;
                    continue _fun38780
                }
            case 194:
                var0 = var1 != var6;
                if (!var0) {
                    _fun38780_ip = 217;
                    continue _fun38780
                }
            case 201:
                var13 = var11.hasVideo;
                var8 = var3.id;
                var0 = var13.bind(var11)(var8);
            case 217:
                if (!var0) {
                    _fun38780_ip = 226;
                    continue _fun38780
                }
            case 220:
                var8 = 0;
                var0 = var12 > var8;
            case 226:
                if (!var0) {
                    _fun38780_ip = 245;
                    continue _fun38780
                }
            case 229:
                var8 = 0;
                if (!var2) {
                    _fun38780_ip = 237;
                    continue _fun38780
                }
            case 234:
                var8 = 1;
            case 237:
                var8 = var12 + var8;
                var0 = var4 >= var8;
            case 245:
                _fun38780_ip = 326;
                continue _fun38780;
            case 247:
                var1 = var1 != var6;
                if (!var1) {
                    _fun38780_ip = 307;
                    continue _fun38780
                }
            case 254:
                var8 = var11.hasVideo;
                var6 = var3.id;
                var6 = var8.bind(var11)(var6);
                if (var6) {
                    _fun38780_ip = 304;
                    continue _fun38780
                }
            case 273:
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 11;
                var7 = var11[var7];
                var8 = var8.bind(var10)(var7);
                var7 = var8.hasStream;
                var6 = var7.bind(var8)(var9);
            case 304:
                var1 = var6;
            case 307:
                if (!var1) {
                    _fun38780_ip = 316;
                    continue _fun38780
                }
            case 310:
                var6 = 0;
                var1 = var5 > var6;
            case 316:
                if (!var1) {
                    _fun38780_ip = 323;
                    continue _fun38780
                }
            case 319:
                var1 = var4 >= var5;
            case 323:
                var0 = var1;
            case 326:
                var5 = var3.userLimit;
                var1 = 0;
                var1 = var5 > var1;
                if (!var1) {
                    _fun38780_ip = 351;
                    continue _fun38780
                }
            case 341:
                var3 = var3.userLimit;
                var1 = var4 >= var3;
            case 351:
                if (var0) {
                    _fun38780_ip = 363;
                    continue _fun38780
                }
            case 354:
                if (!var1) {
                    _fun38780_ip = 360;
                    continue _fun38780
                }
            case 357:
                var1 = !var2;
            case 360:
                var0 = var1;
            case 363:
                return var0;
        }
    };
    var2.isChannelFull = var6;
    var6 = 18;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var2.sanitizeGuildTextChannelName = var6;
    var6 = function arg0, arg1() {
        _fun38781: for (var _fun38781_ip = 0;;) switch (_fun38781_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun38781_ip = 152;
                    continue _fun38781
                }
            case 22:
                var1 = null;
                if (!(var1 != var0)) {
                    _fun38781_ip = 143;
                    continue _fun38781
                }
            case 28:
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var6 = var0.features;
                var5 = var6.has;
                var1 = _closure1_slot14;
                var1 = var1.VIP_REGIONS;
                var1 = var5.bind(var6)(var1);
                if (var1) {
                    _fun38781_ip = 79;
                    continue _fun38781
                }
            case 73:
                var1 = _closure1_slot16;
                _fun38781_ip = 109;
                continue _fun38781;
            case 79:
                var6 = _closure1_slot20;
                var5 = _closure1_slot15;
                var5 = var5.TIER_3;
                var5 = var6[var5];
                var5 = var5.limits;
                var1 = var5.bitrate;
            case 109:
                var4 = _closure1_slot20;
                var0 = var0.premiumTier;
                var0 = var4[var0];
                var0 = var0.limits;
                var0 = var0.bitrate;
                var0 = var2.bind(var3)(var1, var0);
                _fun38781_ip = 150;
                continue _fun38781;
            case 143:
                var0 = _closure1_slot16;
            case 150:
                _fun38781_ip = 159;
                continue _fun38781;
            case 152:
                var0 = _closure1_slot17;
            case 159:
                return var0;
        }
    };
    var2.getBitrateLimit = var6;
    var2.computeSummarizedVoiceStates = var5;
    var5 = function arg0() {
        var0 = arg0;
        var5 = var0.channels;
        var4 = var0.selectedChannelId;
        var3 = var0.selectedVoiceChannelId;
        var0 = var0.voiceStates;
        var2 = _closure1_slot28;
        var1 = {};
        var1.channels = var5;
        var1.selectedChannelId = var4;
        var1.selectedVoiceChannelId = var3;
        var1.voiceStates = var0;
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.user;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.computeSummarizedVoiceUsers = var5;
    var5 = function arg0, arg1, arg2() {
        _fun38784: for (var _fun38784_ip = 0;;) switch (_fun38784_ip) {
            case 0:
                var11 = arg1;
                var10 = arg2;
                var1 = _closure1_slot24;
                var8 = undefined;
                var0 = arg0;
                var7 = var1.bind(var8)(var0);
                var1 = var7.bind(var8)();
                var0 = var1.done;
                var6 = 12;
                var5 = null;
                var4 = var1;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun38784_ip = 276;
                    continue _fun38784
                }
            case 52:
                var14 = var4.value;
                var0 = var14.id;
                var13 = var2;
                var12 = var1;
                if (!(var0 !== var11)) {
                    _fun38784_ip = 252;
                    continue _fun38784
                }
            case 75:
                var0 = var14.id;
                var16 = var10[var0];
                var3 = var16;
                var13 = var2;
                var12 = var1;
                if (!(var5 != var16)) {
                    _fun38784_ip = 252;
                    continue _fun38784
                }
            case 100:
                var0 = var14.isGuildStageVoice;
                var0 = var0.bind(var14)();
                var3 = var16;
                var13 = var2;
                var12 = var1;
                if (!var0) {
                    _fun38784_ip = 252;
                    continue _fun38784
                }
            case 125:
                var0 = _closure1_slot24;
                var15 = var0.bind(var8)(var16);
                var17 = var15.bind(var8)();
                var0 = var17.done;
                var14 = var17;
                var3 = var16;
                var13 = var14;
                var12 = var15;
                if (var0) {
                    _fun38784_ip = 252;
                    continue _fun38784
                }
            case 158:
                var17 = var14.value;
                var18 = _closure1_slot0;
                var0 = _closure1_slot3;
                var19 = var0[var6];
                var20 = var18.bind(var8)(var19);
                var19 = var20.getAudienceRequestToSpeakState;
                var17 = var17.voiceState;
                var17 = var19.bind(var20)(var17);
                var0 = var0[var6];
                var0 = var18.bind(var8)(var0);
                var0 = var0.RequestToSpeakStates;
                var0 = var0.ON_STAGE;
                if (!(var17 !== var0)) {
                    _fun38784_ip = 248;
                    continue _fun38784
                }
            case 222:
                var17 = var15.bind(var8)();
                var0 = var17.done;
                var14 = var17;
                var3 = var16;
                var13 = var14;
                var12 = var15;
                if (var0) {
                    _fun38784_ip = 252;
                    continue _fun38784
                }
            case 246:
                _fun38784_ip = 158;
                continue _fun38784;
            case 248:
                var0 = true;
                return var0;
            case 252:
                var14 = var7.bind(var8)();
                var0 = var14.done;
                var2 = var13;
                var1 = var12;
                var4 = var14;
                if (!var0) {
                    _fun38784_ip = 52;
                    continue _fun38784
                }
            case 276:
                var0 = false;
                return var0;
        }
    };
    var2.isAnyVoiceStateStage = var5;
    var5 = function arg0() {
        _fun38785: for (var _fun38785_ip = 0;;) switch (_fun38785_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot12;
                var1 = var1.DM;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 722;
                    continue _fun38785
                }
            case 28:
                var1 = _closure1_slot12;
                var1 = var1.GROUP_DM;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 661;
                    continue _fun38785
                }
            case 45:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 600;
                    continue _fun38785
                }
            case 62:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 539;
                    continue _fun38785
                }
            case 79:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 478;
                    continue _fun38785
                }
            case 96:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 419;
                    continue _fun38785
                }
            case 113:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_STAGE_VOICE;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 360;
                    continue _fun38785
                }
            case 130:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 299;
                    continue _fun38785
                }
            case 147:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_STORE;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 238;
                    continue _fun38785
                }
            case 161:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var2)) {
                    _fun38785_ip = 179;
                    continue _fun38785
                }
            case 175:
                var1 = null;
                return var1;
            case 179:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.vHCZwr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 238:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["P1/Erq"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 299:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.l1dkSD;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 360:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.EErMzA;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 419:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.BVZqJl;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 478:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.seKITE;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 539:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.GbryDd;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 600:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Pnajj0;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 661:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["e5y+gm"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 722:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 13;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.jN2DfZ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.channelTypeString = var5;
    var5 = function arg0, arg1() {
        _fun38786: for (var _fun38786_ip = 0;;) switch (_fun38786_ip) {
            case 0:
                var3 = arg0;
                var9 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun38786_ip = 296;
                    continue _fun38786
                }
            case 15:
                var1 = var9.getCurrentUser;
                var1 = var1.bind(var9)();
                var2 = var0 == var1;
                var8 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun38786_ip = 40;
                    continue _fun38786
                }
            case 35:
                var7 = var1.id;
            case 40:
                if (!(var0 != var7)) {
                    _fun38786_ip = 294;
                    continue _fun38786
                }
            case 47:
                var6 = new Array(0);
                var2 = _closure1_slot24;
                var5 = var2.bind(var8)(var3);
                var3 = var5.bind(var8)();
                var2 = var3.done;
                var4 = var3;
                var3 = undefined;
                if (var2) {
                    _fun38786_ip = 135;
                    continue _fun38786
                }
            case 80:
                var10 = var4.value;
                if (!(var7 !== var10)) {
                    _fun38786_ip = 120;
                    continue _fun38786
                }
            case 89:
                var2 = var9.getUser;
                var2 = var2.bind(var9)(var10);
                var3 = var2;
                if (!(var0 != var2)) {
                    _fun38786_ip = 120;
                    continue _fun38786
                }
            case 107:
                var10 = var6.push;
                var10 = var10.bind(var6)(var2);
                var3 = var2;
            case 120:
                var10 = var5.bind(var8)();
                var2 = var10.done;
                var4 = var10;
                if (!var2) {
                    _fun38786_ip = 80;
                    continue _fun38786
                }
            case 135:
                var2 = var6.length;
                var7 = 0;
                if (!(var7 !== var2)) {
                    _fun38786_ip = 292;
                    continue _fun38786
                }
            case 149:
                var3 = var6.slice;
                var2 = 2;
                var4 = var3.bind(var6)(var7, var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun38787: for (var _fun38787_ip = 0;;) switch (_fun38787_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.isProvisional;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            if (var0) {
                                _fun38787_ip = 50;
                                continue _fun38787
                            }
                        case 37:
                            var0 = var2.getUserTag;
                            var0 = var0.bind(var2)(var3);
                            _fun38787_ip = 61;
                            continue _fun38787;
                        case 50:
                            var1 = var2.getName;
                            var0 = var1.bind(var2)(var3);
                        case 61:
                            return var0;
                    }
                };
                var5 = var3.bind(var4)(var2);
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 13;
                var3 = var9[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.BXG0Eh;
                var1 = {};
                var8 = var6.length;
                var1.users = var8;
                var7 = var5[var7];
                var1.user1 = var7;
                var7 = 1;
                var7 = var5[var7];
                var1.user2 = var7;
                var6 = var6.length;
                var5 = var5.length;
                var5 = var6 - var5;
                var1.extras = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 292:
                return var0;
            case 294:
                return var0;
            case 296:
                return var0;
        }
    };
    var2.getPrivateChannelUserTagsString = var5;
    var5 = function arg0() {
        _fun38788: for (var _fun38788_ip = 0;;) switch (_fun38788_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun38788_ip = 298;
                    continue _fun38788
                }
            case 12:
                var0 = var4.isMediaChannel;
                var3 = var0.bind(var4)();
                var2 = var4.type;
                var0 = _closure1_slot12;
                var0 = var0.GUILD_VOICE;
                if (!(var2 !== var0)) {
                    _fun38788_ip = 254;
                    continue _fun38788
                }
            case 47:
                var2 = var4.type;
                var0 = _closure1_slot12;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var2 !== var0)) {
                    _fun38788_ip = 210;
                    continue _fun38788
                }
            case 69:
                var5 = _closure1_slot6;
                var2 = var5.has;
                var0 = var4.type;
                var0 = var2.bind(var5)(var0);
                if (var0) {
                    _fun38788_ip = 184;
                    continue _fun38788
                }
            case 91:
                var2 = var4.type;
                var0 = _closure1_slot12;
                var0 = var0.GUILD_FORUM;
                if (!(var2 !== var0)) {
                    _fun38788_ip = 166;
                    continue _fun38788
                }
            case 110:
                var5 = var4.type;
                var0 = _closure1_slot12;
                var2 = var0.GUILD_MEDIA;
                var0 = 'media';
                if (!(var5 !== var2)) {
                    _fun38788_ip = 164;
                    continue _fun38788
                }
            case 133:
                var6 = _closure1_slot5;
                var5 = var6.has;
                var2 = var4.type;
                var5 = var5.bind(var6)(var2);
                var2 = undefined;
                if (!var5) {
                    _fun38788_ip = 161;
                    continue _fun38788
                }
            case 157:
                var2 = 'text';
            case 161:
                var0 = var2;
            case 164:
                _fun38788_ip = 182;
                continue _fun38788;
            case 166:
                var2 = 'forum';
                if (!var3) {
                    _fun38788_ip = 179;
                    continue _fun38788
                }
            case 175:
                var2 = 'media';
            case 179:
                var0 = var2;
            case 182:
                _fun38788_ip = 208;
                continue _fun38788;
            case 184:
                var2 = var4.isForumPost;
                var3 = var2.bind(var4)();
                var2 = 'thread';
                if (!var3) {
                    _fun38788_ip = 205;
                    continue _fun38788
                }
            case 201:
                var2 = 'post';
            case 205:
                var0 = var2;
            case 208:
                _fun38788_ip = 252;
                continue _fun38788;
            case 210:
                var5 = _closure1_slot9;
                var3 = var5.can;
                var2 = _closure1_slot13;
                var2 = var2.CONNECT;
                var3 = var3.bind(var5)(var2, var4);
                var2 = 'stage-locked';
                if (!var3) {
                    _fun38788_ip = 249;
                    continue _fun38788
                }
            case 245:
                var2 = 'stage';
            case 249:
                var0 = var2;
            case 252:
                _fun38788_ip = 296;
                continue _fun38788;
            case 254:
                var3 = _closure1_slot9;
                var2 = var3.can;
                var1 = _closure1_slot13;
                var1 = var1.CONNECT;
                var2 = var2.bind(var3)(var1, var4);
                var1 = 'voice-locked';
                if (!var2) {
                    _fun38788_ip = 293;
                    continue _fun38788
                }
            case 289:
                var1 = 'voice';
            case 293:
                var0 = var1;
            case 296:
                return var0;
            case 298:
                var0 = 'text';
                return var0;
        }
    };
    var2.getMentionIconType = var5;
    var5 = function arg0() {
        _fun38789: for (var _fun38789_ip = 0;;) switch (_fun38789_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot7;
                var2 = var4.getChannel;
                var5 = _closure1_slot10;
                var1 = var5.getLastSelectedChannelId;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var4)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun38789_ip = 73;
                    continue _fun38789
                }
            case 40:
                var4 = var1.getGuildId;
                var4 = var4.bind(var1)();
                if (!(var4 === var3)) {
                    _fun38789_ip = 73;
                    continue _fun38789
                }
            case 54:
                var5 = var1.type;
                var4 = _closure1_slot12;
                var4 = var4.GUILD_TEXT;
                if (!(var5 !== var4)) {
                    _fun38789_ip = 104;
                    continue _fun38789
                }
            case 73:
                var5 = _closure1_slot8;
                var4 = var5.getDefaultChannel;
                var4 = var4.bind(var5)(var3);
                var5 = var2 != var4;
                var2 = null;
                if (!var5) {
                    _fun38789_ip = 102;
                    continue _fun38789
                }
            case 97:
                var2 = var4.id;
            case 102:
                _fun38789_ip = 109;
                continue _fun38789;
            case 104:
                var2 = var1.id;
            case 109:
                var1 = _closure1_slot18;
                var0 = var1.CHANNEL;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.previousTextChannelRouteForGuild = var5;
    var2.getChannelPermalink = var4;
    var2.getChannelThreadPermalink = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun38790: for (var _fun38790_ip = 0;;) switch (_fun38790_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = arg3;
                var3 = var1.getGuildId;
                var6 = var3.bind(var1)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 15;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.canUseMediaPostEmbed;
                var4 = var3.bind(var4)(var6, var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun38790_ip = 65;
                    continue _fun38790
                }
            case 62:
                if (var4) {
                    _fun38790_ip = 90;
                    continue _fun38790
                }
            case 65:
                if (!(var3 == var0)) {
                    _fun38790_ip = 88;
                    continue _fun38790
                }
            case 69:
                var8 = _closure1_slot29;
                var4 = var1.id;
                var3 = arg2;
                var0 = var8.bind(var5)(var6, var4, var3);
            case 88:
                _fun38790_ip = 149;
                continue _fun38790;
            case 90:
                var4 = _closure1_slot30;
                var12 = var2.id;
                var11 = var1.id;
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var7 = 16;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.castChannelIdAsMessageId;
                var1 = var1.id;
                var10 = var7.bind(var8)(var1);
                var14 = undefined;
                var13 = var6;
                var0 = var14[var4](var13, var12, var11, var10, var9);
            case 149:
                return var0;
        }
    };
    var2.getChannelLinkToCopy = var3;
    var1 = function arg0() {
        _fun38791: for (var _fun38791_ip = 0;;) switch (_fun38791_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun38791_ip = 127;
                    continue _fun38791
                }
            case 9:
                var3 = var1.type;
                var2 = _closure1_slot12;
                var2 = var2.GUILD_ANNOUNCEMENT;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 115;
                    continue _fun38791
                }
            case 31:
                var2 = _closure1_slot12;
                var2 = var2.GUILD_TEXT;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 115;
                    continue _fun38791
                }
            case 45:
                var2 = _closure1_slot12;
                var2 = var2.GUILD_FORUM;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 115;
                    continue _fun38791
                }
            case 59:
                var2 = _closure1_slot12;
                var2 = var2.GUILD_MEDIA;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 115;
                    continue _fun38791
                }
            case 73:
                var2 = _closure1_slot12;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 103;
                    continue _fun38791
                }
            case 87:
                var2 = _closure1_slot12;
                var2 = var2.DM;
                if (!(var2 !== var3)) {
                    _fun38791_ip = 103;
                    continue _fun38791
                }
            case 101:
                return var0;
            case 103:
                var2 = _closure1_slot19;
                var2 = var2.DM_CHANNEL;
                return var2;
            case 115:
                var1 = _closure1_slot19;
                var1 = var1.GUILD_CHANNEL;
                return var1;
            case 127:
                return var0;
        }
    };
    var2.getChannelAnalyticsPage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 1671, 3091, 1670, 3526, 660, 1623, 3096, 484, 1645, 4237, 4238, 1234, 3236, 4239, 21, 2, 4241]);