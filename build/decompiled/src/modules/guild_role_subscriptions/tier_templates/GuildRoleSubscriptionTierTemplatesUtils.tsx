// modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun84726: for (var _fun84726_ip = 0;;) switch (_fun84726_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun84726_ip = 46;
                    continue _fun84726
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun84726_ip = 55;
                    continue _fun84726
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun84726_ip = 345;
                    continue _fun84726
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun84726_ip = 323;
                    continue _fun84726
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun84726_ip = 283;
                    continue _fun84726
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun84726_ip = 270;
                    continue _fun84726
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
                    _fun84726_ip = 163;
                    continue _fun84726
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun84726_ip = 179;
                    continue _fun84726
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun84726_ip = 249;
                    continue _fun84726
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun84726_ip = 249;
                    continue _fun84726
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun84726_ip = 234;
                    continue _fun84726
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun84726_ip = 247;
                    continue _fun84726
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun84726_ip = 265;
                continue _fun84726;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun84726_ip = 283;
                continue _fun84726;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun84726_ip = 323;
                    continue _fun84726
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
                    _fun84726_ip = 330;
                    continue _fun84726
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun84727: for (var _fun84727_ip = 0;;) switch (_fun84727_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun84727_ip = 56;
                                continue _fun84727
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
                            _fun84727_ip = 67;
                            continue _fun84727;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun84728: for (var _fun84728_ip = 0;;) switch (_fun84728_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun84728_ip = 23;
                    continue _fun84728
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun84728_ip = 33;
                    continue _fun84728
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
                    _fun84728_ip = 70;
                    continue _fun84728
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun84728_ip = 55;
                    continue _fun84728
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun84729: for (var _fun84729_ip = 0;;) switch (_fun84729_ip) {
            case 0:
                var8 = arg0;
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.editStateIdsForGroup;
                var3 = var1[var8];
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.listings;
                var _closure2_slot0 = var1;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var13 = var2;
                var1 = new var13[var1](var12);
                var2 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var2;
                var6 = null;
                if (!(var6 != var3)) {
                    _fun84729_ip = 111;
                    continue _fun84729
                }
            case 94:
                var1 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun84730: for (var _fun84730_ip = 0;;) switch (_fun84730_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var2 = var1[var0];
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun84730_ip = 33;
                                continue _fun84730
                            }
                        case 27:
                            var3 = var2.channelBenefits;
                        case 33:
                            if (!(var1 != var3)) {
                                _fun84730_ip = 56;
                                continue _fun84730
                            }
                        case 37:
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun84731: for (var _fun84731_ip = 0;;) switch (_fun84731_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure1_slot7;
                                        var2 = var3.getChannel;
                                        var1 = var0.ref_id;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun84731_ip = 55;
                                            continue _fun84731
                                        }
                                    case 32:
                                        var2 = _closure2_slot1;
                                        var1 = var2.add;
                                        var0 = var0.ref_id;
                                        var0 = var1.bind(var2)(var0);
                                    case 55:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
            case 111:
                var0 = new Array(0);
                var1 = _closure1_slot11;
                var5 = undefined;
                var4 = var1.bind(var5)(var2);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = 'guild_id';
                if (var1) {
                    _fun84729_ip = 201;
                    continue _fun84729
                }
            case 142:
                var10 = var2.value;
                var9 = _closure1_slot7;
                var1 = var9.getChannel;
                var9 = var1.bind(var9)(var10);
                if (!(var6 != var9)) {
                    _fun84729_ip = 186;
                    continue _fun84729
                }
            case 165:
                var1 = var9.set;
                var9 = var1.bind(var9)(var3, var8);
                var1 = var0.push;
                var1 = var1.bind(var0)(var9);
            case 186:
                var9 = var4.bind(var5)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun84729_ip = 142;
                    continue _fun84729
                }
            case 201:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun84734: for (var _fun84734_ip = 0;;) switch (_fun84734_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun84734_ip = 121;
                            continue _fun84734
                        }
                    case 12:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var5;
                        var4 = new Array(0);
                        var _closure4_slot2 = var4;
                        var1 = new Array(0);
                        var _closure4_slot3 = var1;
                        var3 = var5.forEach;
                        var1 = function(arg0) { // Environment: var2
                            _fun84735: for (var _fun84735_ip = 0;;) switch (_fun84735_ip) {
                                case 0:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getChannel;
                                    var0 = arg0;
                                    var0 = var0.ref_id;
                                    var2 = var2.bind(var3)(var0);
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun84735_ip = 118;
                                        continue _fun84735
                                    }
                                case 32:
                                    var4 = _closure4_slot2;
                                    var3 = var4.push;
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 10;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var9 = var6.bind(var1)(var5);
                                    var8 = var9.createRoleSubscriptionTemplateChannel;
                                    var13 = _closure4_slot0;
                                    var12 = var2.name;
                                    var11 = var2.type;
                                    var10 = var2.topic;
                                    var14 = var9;
                                    var1 = var14[var8](var13, var12, var11, var10, var9);
                                    var1 = var3.bind(var4)(var1);
                                    var1 = _closure4_slot3;
                                    var0 = var1.push;
                                    var0 = var0.bind(var1)(var2);
                                case 118:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var5)(var1);
                        var3 = var4.length;
                        var1 = 0;
                        if (!(var1 !== var3)) {
                            _fun84734_ip = 113;
                            continue _fun84734
                        }
                    case 67:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.allSettled;
                        var1 = var1.bind(var3)(var4);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun84734_ip = 118;
                            continue _fun84734
                        }
                    case 96:
                        var3 = var1.forEach;
                        var2 = function(arg0, arg1) { // Environment: var2
                            _fun84736: for (var _fun84736_ip = 0;;) switch (_fun84736_ip) {
                                case 0:
                                    var1 = arg0;
                                    var4 = _closure4_slot3;
                                    var3 = arg1;
                                    var3 = var4[var3];
                                    var3 = var3.id;
                                    var _closure5_slot0 = var3;
                                    var4 = var1.status;
                                    var3 = 'fulfilled';
                                    if (!(var3 !== var4)) {
                                        _fun84736_ip = 120;
                                        continue _fun84736
                                    }
                                case 43:
                                    var3 = _closure4_slot1;
                                    var4 = null;
                                    if (!(var4 != var3)) {
                                        _fun84736_ip = 212;
                                        continue _fun84736
                                    }
                                case 56:
                                    var6 = _closure4_slot1;
                                    var5 = var6.findIndex;
                                    var3 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.ref_id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var6 = var5.bind(var6)(var3);
                                    var3 = -1;
                                    if (!(var3 !== var6)) {
                                        _fun84736_ip = 212;
                                        continue _fun84736
                                    }
                                case 91:
                                    var3 = _closure4_slot1;
                                    if (!(var4 != var3)) {
                                        _fun84736_ip = 212;
                                        continue _fun84736
                                    }
                                case 99:
                                    var5 = _closure4_slot1;
                                    var4 = var5.splice;
                                    var3 = 1;
                                    var3 = var4.bind(var5)(var6, var3);
                                    _fun84736_ip = 212;
                                    continue _fun84736;
                                case 120:
                                    var1 = var1.value;
                                    var1 = var1.body;
                                    var _closure5_slot1 = var1;
                                    var4 = _closure1_slot6;
                                    var3 = var4.getState;
                                    var3 = var3.bind(var4)();
                                    var3 = var3.editStateIdsForGroup;
                                    var2 = _closure4_slot0;
                                    var2 = var3[var2];
                                    var3 = _closure1_slot6;
                                    var1 = var3.getState;
                                    var1 = var1.bind(var3)();
                                    var1 = var1.listings;
                                    var _closure5_slot2 = var1;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun84736_ip = 212;
                                        continue _fun84736
                                    }
                                case 195:
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun84737: for (var _fun84737_ip = 0;;) switch (_fun84737_ip) {
                                            case 0:
                                                var1 = _closure5_slot2;
                                                var0 = arg0;
                                                var2 = var1[var0];
                                                var1 = null;
                                                var4 = var1 == var2;
                                                var0 = undefined;
                                                var3 = undefined;
                                                if (var4) {
                                                    _fun84737_ip = 33;
                                                    continue _fun84737
                                                }
                                            case 27:
                                                var3 = var2.channelBenefits;
                                            case 33:
                                                if (!(var1 != var3)) {
                                                    _fun84737_ip = 56;
                                                    continue _fun84737
                                                }
                                            case 37:
                                                var2 = var3.forEach;
                                                var1 = function(arg0) { // Environment: var1
                                                    _fun84738: for (var _fun84738_ip = 0;;) switch (_fun84738_ip) {
                                                        case 0:
                                                            var1 = arg0;
                                                            var3 = var1.ref_id;
                                                            var2 = _closure5_slot0;
                                                            if (!(var3 === var2)) {
                                                                _fun84738_ip = 35;
                                                                continue _fun84738
                                                            }
                                                        case 20:
                                                            var0 = _closure5_slot1;
                                                            var0 = var0.id;
                                                            var1.ref_id = var0;
                                                        case 35:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var1 = var2.bind(var3)(var1);
                                            case 56:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 212:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                    case 113:
                        var2 = undefined;
                        return var2;
                    case 118:
                        return var1;
                    case 121:
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEditStateStore;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.shim;
    var3 = var3.bind(var6)();
    var3 = {};
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun84740: for (var _fun84740_ip = 0;;) switch (_fun84740_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 8;
                var1 = var6[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var7, var1);
                var3 = var6[var3];
                var4 = var5.bind(var4)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun84740_ip = 112;
                    continue _fun84740
                }
            case 109:
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var2.useChannelWithTemplateFallback = var3;
    var3 = function arg0, arg1, arg2() {
        _fun84743: for (var _fun84743_ip = 0;;) switch (_fun84743_ip) {
            case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var8 = var6.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getSubscriptionListingsForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var6, var4);
                var6 = _closure1_slot6;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.editStateIdsForGroup;
                    var0 = _closure2_slot0;
                    var0 = var1[var0];
                    return var0;
                };
                var6 = var6.bind(var3)(var4);
                var4 = _closure1_slot6;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.listings;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var _closure2_slot1 = var2;
                if (!(var3 !== var1)) {
                    _fun84743_ip = 342;
                    continue _fun84743
                }
            case 113:
                if (!(var3 !== var5)) {
                    _fun84743_ip = 342;
                    continue _fun84743
                }
            case 120:
                var4 = var7.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun84747: for (var _fun84747_ip = 0;;) switch (_fun84747_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.soft_deleted;
                            var0 = !var0;
                            if (!var0) {
                                _fun84747_ip = 24;
                                continue _fun84747
                            }
                        case 15:
                            var1 = var1.archived;
                            var0 = !var1;
                        case 24:
                            return var0;
                    }
                };
                var7 = var4.bind(var7)(var2);
                var4 = var7.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.subscription_plans;
                    var0 = 0;
                    var0 = var1[var0];
                    var0 = var0.price;
                    return var0;
                };
                var4 = var4.bind(var7)(var2);
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                if (!(var3 !== var6)) {
                    _fun84743_ip = 183;
                    continue _fun84743
                }
            case 166:
                var3 = var6.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun84749: for (var _fun84749_ip = 0;;) switch (_fun84749_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = arg0;
                            var4 = var2[var0];
                            var2 = null;
                            var5 = var2 == var4;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun84749_ip = 33;
                                continue _fun84749
                            }
                        case 27:
                            var3 = var4.priceTier;
                        case 33:
                            if (!(var2 != var3)) {
                                _fun84749_ip = 51;
                                continue _fun84749
                            }
                        case 37:
                            var2 = _closure2_slot2;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 51:
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0);
            case 183:
                var0 = global;
                var3 = var0.Set;
                var0 = var2.concat;
                var10 = var0.bind(var2)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var2;
                var0 = new var11[var3](var10, var9);
                var4 = var0 instanceof Object ? var0 : var2;
                var0 = var4.has;
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun84743_ip = 238;
                    continue _fun84743
                }
            case 234:
                var0 = null;
                return var0;
            case 238:
                var0 = var5.indexOf;
                var2 = var0.bind(var5)(var1);
                var0 = -1;
                if (!(var0 !== var2)) {
                    _fun84743_ip = 338;
                    continue _fun84743
                }
            case 259:
                var0 = new Array(0);
                var1 = 1;
                var3 = var2 + var1;
                var1 = var5.length;
                var2 = 3;
                if (!(var3 < var1)) {
                    _fun84743_ip = 334;
                    continue _fun84743
                }
            case 282:
                var6 = var4.has;
                var1 = var5[var3];
                var1 = var6.bind(var4)(var1);
                if (var1) {
                    _fun84743_ip = 313;
                    continue _fun84743
                }
            case 299:
                var6 = var0.push;
                var1 = var5[var3];
                var1 = var6.bind(var0)(var1);
            case 313:
                var1 = var0.length;
                if (!(var2 !== var1)) {
                    _fun84743_ip = 336;
                    continue _fun84743
                }
            case 322:
                var3 = var3 + 1;
                var1 = var5.length;
                if (var3 < var1) {
                    _fun84743_ip = 282;
                    continue _fun84743
                }
            case 334:
                return var0;
            case 336:
                return var0;
            case 338:
                var0 = null;
                return var0;
            case 342:
                var0 = null;
                return var0;
        }
    };
    var2.useSuggestedUnusedPrices = var3;
    var3 = function arg0() {
        var2 = arg0;
        var3 = _closure1_slot13;
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot10;
        var1[var2] = var3;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var3 = var4.set;
            var1 = _closure1_slot9;
            var2 = var1.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL;
            var1 = 'flags';
            var4 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'CHANNEL_CREATE';
            var1.type = var5;
            var1.channel = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.announceCreateTemplateChannels = var3;
    var3 = function arg0() {
        _fun84752: for (var _fun84752_ip = 0;;) switch (_fun84752_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot10;
                var2 = var1[var3];
                var1 = null;
                if (!(var1 == var2)) {
                    _fun84752_ip = 31;
                    continue _fun84752
                }
            case 20:
                var1 = _closure1_slot13;
                var0 = undefined;
                var2 = var1.bind(var0)(var3);
            case 31:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CHANNEL_DELETE';
                    var1.type = var4;
                    var4 = arg0;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.announceDeleteTemplateChannels = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createChannelsFromTemplateTierBenefits = var3;
    var3 = function arg0, arg1() {
        _fun84755: for (var _fun84755_ip = 0;;) switch (_fun84755_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = var1.listings;
                var1 = arg0;
                var4 = var2[var1];
                var6 = null;
                var1 = var6 == var4;
                var3 = undefined;
                if (var1) {
                    _fun84755_ip = 47;
                    continue _fun84755
                }
            case 41:
                var3 = var4.usedTemplate;
            case 47:
                if (!(var6 != var3)) {
                    _fun84755_ip = 663;
                    continue _fun84755
                }
            case 54:
                var2 = _closure1_slot7;
                var1 = var2.getTemplateWithCategory;
                var0 = arg1;
                var1 = var1.bind(var2)(var0, var3);
                if (!(var6 != var1)) {
                    _fun84755_ip = 647;
                    continue _fun84755
                }
            case 82:
                var0 = var1.listings;
                var3 = 0;
                var2 = var0[var3];
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 108;
                    continue _fun84755
                }
            case 103:
                var5 = var4.name;
            case 108:
                var0 = var2.name;
                if (!(var5 === var0)) {
                    _fun84755_ip = 625;
                    continue _fun84755
                }
            case 120:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 134;
                    continue _fun84755
                }
            case 129:
                var5 = var4.description;
            case 134:
                var0 = var2.description;
                if (!(var5 === var0)) {
                    _fun84755_ip = 625;
                    continue _fun84755
                }
            case 146:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 161;
                    continue _fun84755
                }
            case 155:
                var5 = var4.priceTier;
            case 161:
                var0 = var2.price_tier;
                if (!(var5 === var0)) {
                    _fun84755_ip = 625;
                    continue _fun84755
                }
            case 174:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 189;
                    continue _fun84755
                }
            case 183:
                var5 = var4.image;
            case 189:
                var0 = var2.image;
                if (!(var5 === var0)) {
                    _fun84755_ip = 625;
                    continue _fun84755
                }
            case 202:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 217;
                    continue _fun84755
                }
            case 211:
                var5 = var4.roleColor;
            case 217:
                var0 = var2.role_color;
                if (!(var5 === var0)) {
                    _fun84755_ip = 625;
                    continue _fun84755
                }
            case 230:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 259;
                    continue _fun84755
                }
            case 239:
                var0 = var4.channelBenefits;
                var8 = var6 == var0;
                var5 = undefined;
                if (var8) {
                    _fun84755_ip = 259;
                    continue _fun84755
                }
            case 254:
                var5 = var0.length;
            case 259:
                var0 = var2.channels;
                var0 = var0.length;
                if (!(var5 === var0)) {
                    _fun84755_ip = 603;
                    continue _fun84755
                }
            case 277:
                var0 = var6 == var4;
                var5 = undefined;
                if (var0) {
                    _fun84755_ip = 306;
                    continue _fun84755
                }
            case 286:
                var0 = var4.intangibleBenefits;
                var6 = var6 == var0;
                var5 = undefined;
                if (var6) {
                    _fun84755_ip = 306;
                    continue _fun84755
                }
            case 301:
                var5 = var0.length;
            case 306:
                var0 = var2.additional_perks;
                var0 = var0.length;
                if (!(var5 === var0)) {
                    _fun84755_ip = 603;
                    continue _fun84755
                }
            case 324:
                var0 = var2.channels;
                var0 = var0.length;
                var0 = var3 < var0;
                var5 = 0;
                if (!var0) {
                    _fun84755_ip = 435;
                    continue _fun84755
                }
            case 344:
                var0 = var4.channelBenefits;
                var6 = var0[var5];
                var0 = var2.channels;
                var0 = var0[var5];
                var8 = var6.name;
                var7 = var0.name;
                if (!(var8 === var7)) {
                    _fun84755_ip = 581;
                    continue _fun84755
                }
            case 381:
                var8 = var6.description;
                var7 = var0.description;
                if (!(var8 === var7)) {
                    _fun84755_ip = 581;
                    continue _fun84755
                }
            case 398:
                var6 = var6.emoji_name;
                var0 = var0.emoji_name;
                if (!(var6 === var0)) {
                    _fun84755_ip = 581;
                    continue _fun84755
                }
            case 417:
                var5 = var5 + 1;
                var0 = var2.channels;
                var0 = var0.length;
                if (var5 < var0) {
                    _fun84755_ip = 344;
                    continue _fun84755
                }
            case 435:
                var0 = var2.additional_perks;
                var0 = var0.length;
                var0 = var3 < var0;
                var3 = 0;
                if (!var0) {
                    _fun84755_ip = 537;
                    continue _fun84755
                }
            case 455:
                var0 = var4.intangibleBenefits;
                var5 = var0[var3];
                var0 = var2.additional_perks;
                var0 = var0[var3];
                var7 = var5.name;
                var6 = var0.name;
                if (!(var7 === var6)) {
                    _fun84755_ip = 559;
                    continue _fun84755
                }
            case 489:
                var7 = var5.description;
                var6 = var0.description;
                if (!(var7 === var6)) {
                    _fun84755_ip = 559;
                    continue _fun84755
                }
            case 503:
                var5 = var5.emoji_name;
                var0 = var0.emoji_name;
                if (!(var5 === var0)) {
                    _fun84755_ip = 559;
                    continue _fun84755
                }
            case 519:
                var3 = var3 + 1;
                var0 = var2.additional_perks;
                var0 = var0.length;
                if (var3 < var0) {
                    _fun84755_ip = 455;
                    continue _fun84755
                }
            case 537:
                var0 = {};
                var2 = var1.category;
                var0.templateCategory = var2;
                var2 = false;
                var0.hasChangeFromTemplate = var2;
                return var0;
            case 559:
                var0 = {};
                var2 = var1.category;
                var0.templateCategory = var2;
                var2 = true;
                var0.hasChangeFromTemplate = var2;
                return var0;
            case 581:
                var0 = {};
                var2 = var1.category;
                var0.templateCategory = var2;
                var2 = true;
                var0.hasChangeFromTemplate = var2;
                return var0;
            case 603:
                var0 = {};
                var2 = var1.category;
                var0.templateCategory = var2;
                var2 = true;
                var0.hasChangeFromTemplate = var2;
                return var0;
            case 625:
                var0 = {};
                var1 = var1.category;
                var0.templateCategory = var1;
                var1 = true;
                var0.hasChangeFromTemplate = var1;
                return var0;
            case 647:
                var0 = {
                    'templateCategory': null,
                    'hasChangeFromTemplate': null
                };
                return var0;
            case 663:
                var0 = {
                    'templateCategory': null,
                    'hasChangeFromTemplate': null
                };
                return var0;
        }
    };
    var2.getTemplateTierCreationAnalyticsContext = var3;
    var1 = function arg0() {
        _fun84756: for (var _fun84756_ip = 0;;) switch (_fun84756_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.canManageGuildRoleSubscriptions;
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun84756_ip = 68;
                    continue _fun84756
                }
            case 42:
                var6 = var1.features;
                var5 = var6.has;
                var3 = _closure1_slot8;
                var3 = var3.ROLE_SUBSCRIPTIONS_ENABLED;
                var0 = var5.bind(var6)(var3);
            case 68:
                if (!var0) {
                    _fun84756_ip = 101;
                    continue _fun84756
                }
            case 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.isUserEligibleForTierTemplates;
                var0 = var3.bind(var5)();
            case 101:
                if (!var0) {
                    _fun84756_ip = 140;
                    continue _fun84756
                }
            case 104:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildEligibleForTierTemplates;
                var1 = var1.id;
                var0 = var2.bind(var3)(var1);
            case 140:
                return var0;
        }
    };
    var2.isEligibleForNewBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 3085, 10844, 10850, 660, 1379, 3362, 632, 806, 8153, 5636, 5637, 2]);