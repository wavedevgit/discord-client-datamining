// modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun65785: for (var _fun65785_ip = 0;;) switch (_fun65785_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun65785_ip = 46;
                    continue _fun65785
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun65785_ip = 55;
                    continue _fun65785
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun65785_ip = 345;
                    continue _fun65785
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun65785_ip = 323;
                    continue _fun65785
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun65785_ip = 283;
                    continue _fun65785
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun65785_ip = 270;
                    continue _fun65785
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
                    _fun65785_ip = 163;
                    continue _fun65785
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun65785_ip = 179;
                    continue _fun65785
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun65785_ip = 249;
                    continue _fun65785
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun65785_ip = 249;
                    continue _fun65785
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun65785_ip = 234;
                    continue _fun65785
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun65785_ip = 247;
                    continue _fun65785
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun65785_ip = 265;
                continue _fun65785;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun65785_ip = 283;
                continue _fun65785;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun65785_ip = 323;
                    continue _fun65785
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
                    _fun65785_ip = 330;
                    continue _fun65785
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun65786: for (var _fun65786_ip = 0;;) switch (_fun65786_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun65786_ip = 56;
                                continue _fun65786
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
                            _fun65786_ip = 67;
                            continue _fun65786;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun65787: for (var _fun65787_ip = 0;;) switch (_fun65787_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun65787_ip = 23;
                    continue _fun65787
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun65787_ip = 33;
                    continue _fun65787
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
                    _fun65787_ip = 70;
                    continue _fun65787
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun65787_ip = 55;
                    continue _fun65787
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun65790: for (var _fun65790_ip = 0;;) switch (_fun65790_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65790_ip = 71;
                            continue _fun65790
                        }
                    case 10:
                        var1 = null;
                        var1 = var1 == var6;
                        if (var1) {
                            _fun65790_ip = 68;
                            continue _fun65790
                        }
                    case 19:
                        var5 = _closure1_slot13;
                        var4 = undefined;
                        var3 = arg1;
                        var2 = {
                            'removingView': true,
                            'removingChat': true
                        };
                        var2 = var5.bind(var4)(var6, var3, var2);
                        SaveGenerator(address = 56);
                    case 54:
                        return var2;
                    case 56:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        var1 = var2;
                        if (!var3) {
                            _fun65790_ip = 68;
                            continue _fun65790
                        }
                    case 65:
                        return var2;
                    case 68:
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun65794: for (var _fun65794_ip = 0;;) switch (_fun65794_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var7 = arg1;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun65794_ip = 662;
                            continue _fun65794
                        }
                    case 21:
                        var _closure4_slot0 = var7;
                        var5 = _closure1_slot5;
                        var1 = var5.getGuild;
                        var5 = var1.bind(var5)(var8);
                        var18 = null;
                        if (!(var18 != var5)) {
                            _fun65794_ip = 657;
                            continue _fun65794
                        }
                    case 51:
                        var1 = var18 != var5;
                        if (!var1) {
                            _fun65794_ip = 96;
                            continue _fun65794
                        }
                    case 58:
                        var10 = var5.features;
                        var6 = var18 == var10;
                        var5 = undefined;
                        if (var6) {
                            _fun65794_ip = 93;
                            continue _fun65794
                        }
                    case 73:
                        var9 = var10.has;
                        var6 = _closure1_slot8;
                        var6 = var6.GUILD_ONBOARDING;
                        var5 = var9.bind(var10)(var6);
                    case 93:
                        var1 = var5;
                    case 96:
                        if (var1) {
                            _fun65794_ip = 104;
                            continue _fun65794
                        }
                    case 99:
                        var5 = true;
                        return var5;
                    case 104:
                        if (!var1) {
                            _fun65794_ip = 122;
                            continue _fun65794
                        }
                    case 107:
                        var6 = _closure1_slot6;
                        var5 = var6.shouldFetchPrompts;
                        var1 = var5.bind(var6)(var8);
                    case 122:
                        if (!var1) {
                            _fun65794_ip = 171;
                            continue _fun65794
                        }
                    case 125:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 5;
                        var5 = var5[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var1 = var5.fetchOnboardingPrompts;
                        var1 = var1.bind(var5)(var8);
                        SaveGenerator(address = 162);
                    case 160:
                        return var1;
                    case 162:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun65794_ip = 654;
                            continue _fun65794
                        }
                    case 171:
                        var6 = _closure1_slot6;
                        var5 = var6.getDefaultChannelIds;
                        var9 = var5.bind(var6)(var8);
                        var6 = _closure1_slot6;
                        var5 = var6.isAdvancedMode;
                        var5 = var5.bind(var6)(var8);
                        var6 = var9;
                        if (!var5) {
                            _fun65794_ip = 489;
                            continue _fun65794
                        }
                    case 210:
                        var12 = new Array(0);
                        var10 = _closure1_slot10;
                        var11 = _closure1_slot6;
                        var5 = var11.getOnboardingPromptsForOnboarding;
                        var5 = var5.bind(var11)(var8);
                        var17 = undefined;
                        var16 = var10.bind(var17)(var5);
                        var11 = var16.bind(var17)();
                        var5 = var11.done;
                        var15 = var11;
                        var14 = undefined;
                        var13 = undefined;
                        var11 = undefined;
                        if (var5) {
                            _fun65794_ip = 416;
                            continue _fun65794
                        }
                    case 264:
                        var5 = var15.value;
                        var20 = var5.required;
                        var19 = var11;
                        if (!var20) {
                            _fun65794_ip = 395;
                            continue _fun65794
                        }
                    case 281:
                        var20 = _closure1_slot10;
                        var5 = var5.options;
                        var21 = var20.bind(var17)(var5);
                        var22 = var21.bind(var17)();
                        var5 = var22.done;
                        var20 = var22;
                        var14 = var20;
                        var13 = var21;
                        var19 = var11;
                        if (var5) {
                            _fun65794_ip = 395;
                            continue _fun65794
                        }
                    case 319:
                        var22 = var20.value;
                        var5 = var22.channelIds;
                        if (!(var18 != var5)) {
                            _fun65794_ip = 371;
                            continue _fun65794
                        }
                    case 334:
                        var23 = var12.push;
                        var27 = var22.channelIds;
                        var5 = new Array(0);
                        var28 = var5;
                        var26 = 0;
                        var24 = arraySpread(var28, var27, var26);
                        var28 = var23;
                        var27 = var5;
                        var26 = var12;
                        var5 = apply(var28, var27, var26);
                    case 371:
                        var23 = var21.bind(var17)();
                        var5 = var23.done;
                        var20 = var23;
                        var14 = var20;
                        var13 = var21;
                        var19 = var22;
                        if (!var5) {
                            _fun65794_ip = 319;
                            continue _fun65794
                        }
                    case 395:
                        var20 = var16.bind(var17)();
                        var5 = var20.done;
                        var11 = var19;
                        var15 = var20;
                        if (!var5) {
                            _fun65794_ip = 264;
                            continue _fun65794
                        }
                    case 416:
                        var5 = global;
                        var11 = var5.Set;
                        var5 = new Array(0);
                        var28 = var5;
                        var27 = var9;
                        var26 = 0;
                        var26 = arraySpread(var28, var27, var26);
                        var28 = var5;
                        var27 = var12;
                        var9 = arraySpread(var28, var27, var26);
                        var9 = var11.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var11
                            }
                        });
                        var29 = var9;
                        var28 = var5;
                        var5 = new var29[var11](var28, var27);
                        var27 = var5 instanceof Object ? var5 : var9;
                        var5 = new Array(0);
                        var28 = var5;
                        var26 = 0;
                        var9 = arraySpread(var28, var27, var26);
                        var6 = var5;
                    case 489:
                        var5 = var6.includes;
                        var5 = var5.bind(var6)(var7);
                        if (var5) {
                            _fun65794_ip = 507;
                            continue _fun65794
                        }
                    case 502:
                        var5 = true;
                        return var5;
                    case 507:
                        var5 = var4.removingChat;
                        if (var5) {
                            _fun65794_ip = 530;
                            continue _fun65794
                        }
                    case 516:
                        var4 = var4.removingView;
                        if (var4) {
                            _fun65794_ip = 530;
                            continue _fun65794
                        }
                    case 525:
                        var4 = true;
                        return var4;
                    case 530:
                        var5 = _closure1_slot6;
                        var4 = var5.getDefaultChannelIds;
                        var7 = var4.bind(var5)(var8);
                        var5 = _closure1_slot6;
                        var4 = var5.isAdvancedMode;
                        var4 = var4.bind(var5)(var8);
                        if (var4) {
                            _fun65794_ip = 569;
                            continue _fun65794
                        }
                    case 563:
                        var6 = new Array(0);
                        _fun65794_ip = 584;
                        continue _fun65794;
                    case 569:
                        var5 = _closure1_slot6;
                        var4 = var5.getOnboardingPromptsForOnboarding;
                        var6 = var4.bind(var5)(var8);
                    case 584:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 6;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var9.bind(var4)(var5);
                        var4 = var5.getMinimumSetOfDefaultChannelIds;
                        var25 = function(arg0) { // Environment: var3
                            _fun65795: for (var _fun65795_ip = 0;;) switch (_fun65795_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = _closure4_slot0;
                                    var0 = var3 !== var0;
                                    if (!var0) {
                                        _fun65795_ip = 53;
                                        continue _fun65795
                                    }
                                case 17:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 6;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var1 = var2.isChattableChannelId;
                                    var0 = var1.bind(var2)(var3);
                                case 53:
                                    return var0;
                            }
                        };
                        var29 = var5;
                        var28 = var8;
                        var27 = var7;
                        var26 = var6;
                        var3 = var29[var4](var28, var27, var26, var25, var24);
                        var3 = var3.length;
                        var2 = _closure1_slot7;
                        var2 = var3 < var2;
                        var2 = !var2;
                        return var2;
                    case 654:
                        return var1;
                    case 657:
                        var1 = true;
                        return var1;
                    case 662:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun65798: for (var _fun65798_ip = 0;;) switch (_fun65798_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var7 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65798_ip = 756;
                            continue _fun65798
                        }
                    case 19:
                        var2 = var1.getGuildId;
                        var5 = var2.bind(var1)();
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun65798_ip = 751;
                            continue _fun65798
                        }
                    case 38:
                        var11 = var7;
                        if (!(var3 != var9)) {
                            _fun65798_ip = 101;
                            continue _fun65798
                        }
                    case 45:
                        var10 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var2 = 7;
                        var4 = var12[var2];
                        var8 = undefined;
                        var6 = var10.bind(var8)(var4);
                        var4 = var6.filter;
                        var2 = var12[var2];
                        var8 = var10.bind(var8)(var2);
                        var2 = var8.invert;
                        var2 = var2.bind(var8)(var9);
                        var11 = var4.bind(var6)(var7, var2);
                    case 101:
                        var2 = var1.permissionOverwrites;
                        var2 = var2[var5];
                        if (!(var3 == var2)) {
                            _fun65798_ip = 155;
                            continue _fun65798
                        }
                    case 115:
                        var6 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var3 = 7;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.deserialize;
                        var3 = 0;
                        var10 = var4.bind(var6)(var3);
                        _fun65798_ip = 223;
                        continue _fun65798;
                    case 155:
                        var9 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var7 = 7;
                        var3 = var12[var7];
                        var8 = undefined;
                        var6 = var9.bind(var8)(var3);
                        var4 = var6.filter;
                        var3 = var2.deny;
                        var7 = var12[var7];
                        var8 = var9.bind(var8)(var7);
                        var7 = var8.invert;
                        var2 = var2.allow;
                        var2 = var7.bind(var8)(var2);
                        var10 = var4.bind(var6)(var3, var2);
                    case 223:
                        var4 = {};
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var9 = 7;
                        var2 = var2[var9];
                        var12 = undefined;
                        var6 = var3.bind(var12)(var2);
                        var3 = var6.has;
                        var2 = _closure1_slot9;
                        var2 = var2.VIEW_CHANNEL;
                        var2 = var3.bind(var6)(var11, var2);
                        if (!var2) {
                            _fun65798_ip = 315;
                            continue _fun65798
                        }
                    case 274:
                        var6 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var3 = var3[var9];
                        var7 = var6.bind(var12)(var3);
                        var6 = var7.has;
                        var3 = _closure1_slot9;
                        var3 = var3.VIEW_CHANNEL;
                        var3 = var6.bind(var7)(var10, var3);
                        var2 = !var3;
                    case 315:
                        var4.removingView = var2;
                        var3 = false;
                        var4.removingChat = var3;
                        var2 = var1.isForumLikeChannel;
                        var13 = var2.bind(var1)();
                        var6 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var2 = var2[var9];
                        var7 = var6.bind(var12)(var2);
                        var6 = var7.has;
                        var2 = _closure1_slot9;
                        if (var13) {
                            _fun65798_ip = 430;
                            continue _fun65798
                        }
                    case 366:
                        var13 = var2.SEND_MESSAGES;
                        var13 = var6.bind(var7)(var11, var13);
                        if (!var13) {
                            _fun65798_ip = 422;
                            continue _fun65798
                        }
                    case 381:
                        var15 = _closure1_slot2;
                        var14 = _closure1_slot3;
                        var14 = var14[var9];
                        var16 = var15.bind(var12)(var14);
                        var15 = var16.has;
                        var14 = _closure1_slot9;
                        var14 = var14.SEND_MESSAGES;
                        var14 = var15.bind(var16)(var10, var14);
                        var13 = !var14;
                    case 422:
                        var4.removingChat = var13;
                        _fun65798_ip = 492;
                        continue _fun65798;
                    case 430:
                        var2 = var2.SEND_MESSAGES_IN_THREADS;
                        var2 = var6.bind(var7)(var11, var2);
                        if (!var2) {
                            _fun65798_ip = 486;
                            continue _fun65798
                        }
                    case 445:
                        var7 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var6 = var6[var9];
                        var9 = var7.bind(var12)(var6);
                        var7 = var9.has;
                        var6 = _closure1_slot9;
                        var6 = var6.SEND_MESSAGES_IN_THREADS;
                        var6 = var7.bind(var9)(var10, var6);
                        var2 = !var6;
                    case 486:
                        var4.removingChat = var2;
                    case 492:
                        var2 = var4.removingChat;
                        if (var2) {
                            _fun65798_ip = 515;
                            continue _fun65798
                        }
                    case 501:
                        var2 = var4.removingView;
                        if (var2) {
                            _fun65798_ip = 515;
                            continue _fun65798
                        }
                    case 510:
                        var2 = true;
                        return var2;
                    case 515:
                        var6 = _closure1_slot6;
                        var2 = var6.isAdvancedMode;
                        var7 = var2.bind(var6)(var5);
                        var2 = _closure1_slot13;
                        var1 = var1.id;
                        var1 = var2.bind(var12)(var5, var1, var4);
                        SaveGenerator(address = 550);
                    case 548:
                        return var1;
                    case 550:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun65798_ip = 748;
                            continue _fun65798
                        }
                    case 559:
                        var4 = !var1;
                        var2 = !var4;
                        if (!var4) {
                            _fun65798_ip = 745;
                            continue _fun65798
                        }
                    case 571:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 8;
                        var4 = var9[var4];
                        var6 = var5.bind(var12)(var4);
                        var5 = var6.show;
                        var4 = {};
                        var14 = _closure1_slot0;
                        var13 = 9;
                        var10 = var9[var13];
                        var10 = var14.bind(var12)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var9[var13];
                        var9 = var14.bind(var12)(var9);
                        var9 = var9.t;
                        var9 = var9.ut7sq0;
                        var9 = var10.bind(var11)(var9);
                        var4.title = var9;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var10 = var8[var13];
                        var10 = var9.bind(var12)(var10);
                        var11 = var10.intl;
                        var10 = var11.format;
                        var8 = var8[var13];
                        var8 = var9.bind(var12)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun65798_ip = 718;
                            continue _fun65798
                        }
                    case 700:
                        var9 = var8["5sm9rH"];
                        var7 = {};
                        var7 = var10.bind(var11)(var9, var7);
                        _fun65798_ip = 734;
                        continue _fun65798;
                    case 718:
                        var9 = var8.w9Oz5K;
                        var8 = {};
                        var7 = var10.bind(var11)(var9, var8);
                    case 734:
                        var4.body = var7;
                        var4 = var5.bind(var6)(var4);
                        var2 = false;
                    case 745:
                        return var2;
                    case 748:
                        return var1;
                    case 751:
                        var1 = true;
                        return var1;
                    case 756:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot8 = var6;
    var6 = var3.GuildSettingsSections;
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/DefaultChannelThresholdUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.isDefaultChannelThresholdMetAfterDelete = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.checkChattableChannelThresholdMetAfterChannelPermissionDeny = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 4688, 4583, 660, 4687, 4582, 484, 4002, 1234, 2]);