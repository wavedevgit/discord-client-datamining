// modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var10 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var10;
    var _closure1_slot3 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun84088: for (var _fun84088_ip = 0;;) switch (_fun84088_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun84088_ip = 46;
                    continue _fun84088
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun84088_ip = 55;
                    continue _fun84088
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun84088_ip = 345;
                    continue _fun84088
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun84088_ip = 323;
                    continue _fun84088
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun84088_ip = 283;
                    continue _fun84088
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun84088_ip = 270;
                    continue _fun84088
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
                    _fun84088_ip = 163;
                    continue _fun84088
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun84088_ip = 179;
                    continue _fun84088
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun84088_ip = 249;
                    continue _fun84088
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun84088_ip = 249;
                    continue _fun84088
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun84088_ip = 234;
                    continue _fun84088
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun84088_ip = 247;
                    continue _fun84088
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun84088_ip = 265;
                continue _fun84088;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun84088_ip = 283;
                continue _fun84088;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun84088_ip = 323;
                    continue _fun84088
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
                    _fun84088_ip = 330;
                    continue _fun84088
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun84089: for (var _fun84089_ip = 0;;) switch (_fun84089_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun84089_ip = 56;
                                continue _fun84089
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
                            _fun84089_ip = 67;
                            continue _fun84089;
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
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun84090: for (var _fun84090_ip = 0;;) switch (_fun84090_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun84090_ip = 23;
                    continue _fun84090
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun84090_ip = 33;
                    continue _fun84090
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
                    _fun84090_ip = 70;
                    continue _fun84090
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun84090_ip = 55;
                    continue _fun84090
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var4 = function(arg0, arg1, arg2) { // Original name: useListingEditState, environment: var1
        _fun84091: for (var _fun84091_ip = 0;;) switch (_fun84091_ip) {
            case 0:
                var8 = arg0;
                var1 = arg1;
                var2 = arg2;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot10;
                var3 = undefined;
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.setListing;
                    return var0;
                };
                var9 = var6.bind(var3)(var5);
                var _closure2_slot3 = var9;
                var7 = _closure1_slot6;
                var6 = var7.useCallback;
                var5 = new Array(4);
                var5[0] = var9;
                var5[1] = var8;
                var5[2] = var1;
                var5[3] = var2;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun84094: for (var _fun84094_ip = 0;;) switch (_fun84094_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = null;
                                var3 = var0 == var4;
                                var2 = undefined;
                                var1 = undefined;
                                if (var3) {
                                    _fun84094_ip = 27;
                                    continue _fun84094
                                }
                            case 16:
                                var3 = _closure2_slot1;
                                var1 = var4[var3];
                            case 27:
                                if (!(var0 == var1)) {
                                    _fun84094_ip = 38;
                                    continue _fun84094
                                }
                            case 31:
                                var1 = _closure2_slot2;
                            case 38:
                                var3 = _closure3_slot0;
                                var5 = 'function';
                                var3 = typeof var3;
                                if (!(var5 !== var3)) {
                                    _fun84094_ip = 62;
                                    continue _fun84094
                                }
                            case 56:
                                var5 = _closure3_slot0;
                                _fun84094_ip = 71;
                                continue _fun84094;
                            case 62:
                                var0 = _closure3_slot0;
                                var5 = var0.bind(var2)(var1);
                            case 71:
                                var0 = global;
                                var3 = var0.Object;
                                var2 = var3.assign;
                                var1 = {};
                                var0 = _closure2_slot1;
                                var1[var0] = var5;
                                var0 = {};
                                var0 = var2.bind(var3)(var0, var4, var1);
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var5);
                var4 = _closure1_slot10;
                var0 = function(arg0) { // Environment: var0
                    _fun84095: for (var _fun84095_ip = 0;;) switch (_fun84095_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.listings;
                            var0 = _closure2_slot0;
                            var2 = var2[var0];
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun84095_ip = 39;
                                continue _fun84095
                            }
                        case 31:
                            var1 = _closure2_slot1;
                            var0 = var2[var1];
                        case 39:
                            return var0;
                    }
                };
                var0 = var4.bind(var3)(var0);
                if (!(var3 !== var0)) {
                    _fun84091_ip = 113;
                    continue _fun84091
                }
            case 110:
                var2 = var0;
            case 113:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var0 = function(arg0, arg1) { // Original name: useListingValue, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var6 = _closure1_slot3;
        var2 = 9;
        var2 = var6[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot8;
            var1 = var2.getSubscriptionListing;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var7)(var3, var2);
        var _closure2_slot2 = var5;
        var3 = _closure1_slot1;
        var2 = 10;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = function() { // Environment: var0
            var0 = _closure2_slot1;
            return var0;
        };
        var4 = var3.bind(var4)(var2);
        var _closure2_slot3 = var4;
        var3 = _closure1_slot6;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: getRoleEmojis, environment: var1
        _fun84100: for (var _fun84100_ip = 0;;) switch (_fun84100_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var2 = var3.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun84100_ip = 87;
                    continue _fun84100
                }
            case 23:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var1 = global;
                var2 = var1.Set;
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 87:
                var0 = _closure1_slot17;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var3 = function(arg0) { // Original name: clearEditState, environment: var1
        var3 = function(arg0, arg1) { // Original name: copyEditState, environment: var0
            var0 = 'nonexistantEditStateId';
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 19;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot10;
                var1 = var2.setState;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var0 = {};
                    var1 = {};
                    var5 = var4.listings;
                    var6 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var3 = _closure3_slot1;
                    var4 = var4.listings;
                    var2 = _closure3_slot0;
                    var2 = var4[var2];
                    var1[var3] = var2;
                    var0.listings = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = undefined;
        var2 = 'nonexistantEditStateId';
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot23 = var3;
    var0 = function() { // Original name: _updateListingPeripheralsFromEditState, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun84109: for (var _fun84109_ip = 0;;) switch (_fun84109_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84109_ip = 652;
                            continue _fun84109
                        }
                    case 15:
                        var10 = var1.guildId;
                        var _closure4_slot0 = var10;
                        var13 = var1.editStateId;
                        var4 = undefined;
                        var _closure4_slot1 = var4;
                        SaveGenerator(address = 40);
                    case 38:
                        return var4;
                    case 40:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84109_ip = 649;
                            continue _fun84109
                        }
                    case 49:
                        var5 = _closure1_slot8;
                        var2 = var5.getSubscriptionListing;
                        var2 = var2.bind(var5)(var13);
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var5 = 20;
                        var7 = var12[var5];
                        var14 = var11.bind(var4)(var7);
                        var7 = null;
                        var9 = var7 != var2;
                        var8 = 'listing doesnt exist';
                        var8 = var14.bind(var4)(var9, var8);
                        var8 = var2.role_id;
                        _closure4_slot1 = var8;
                        var9 = var2.id;
                        var14 = _closure1_slot10;
                        var2 = var14.getState;
                        var2 = var2.bind(var14)();
                        var2 = var2.listings;
                        var2 = var2[var13];
                        var5 = var12[var5];
                        var12 = var11.bind(var4)(var5);
                        var11 = var7 != var2;
                        var5 = 'edit state does not exist';
                        var5 = var12.bind(var4)(var11, var5);
                        var15 = var2.roleColor;
                        var16 = var2.roleIcon;
                        var12 = var2.trialLimit;
                        var13 = var2.trialInterval;
                        var11 = var2.tierEmojiIds;
                        var2 = var4 === var15;
                        if (!var2) {
                            _fun84109_ip = 216;
                            continue _fun84109
                        }
                    case 212:
                        var2 = var4 === var16;
                    case 216:
                        if (var2) {
                            _fun84109_ip = 309;
                            continue _fun84109
                        }
                    case 219:
                        var5 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var2 = 21;
                        var2 = var14[var2];
                        var14 = var5.bind(var4)(var2);
                        var5 = var14.updateRole;
                        var2 = {};
                        var2.color = var15;
                        var17 = var7 == var16;
                        var15 = undefined;
                        if (var17) {
                            _fun84109_ip = 265;
                            continue _fun84109
                        }
                    case 260:
                        var15 = var16.icon;
                    case 265:
                        var2.icon = var15;
                        var17 = var7 == var16;
                        var15 = undefined;
                        if (var17) {
                            _fun84109_ip = 284;
                            continue _fun84109
                        }
                    case 278:
                        var15 = var16.unicodeEmoji;
                    case 284:
                        var2.unicodeEmoji = var15;
                        var2 = var5.bind(var14)(var10, var8, var2);
                        SaveGenerator(address = 300);
                    case 298:
                        return var2;
                    case 300:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun84109_ip = 309;
                            continue _fun84109
                        }
                    case 306:
                        return var2;
                    case 309:
                        var5 = _closure1_slot8;
                        var2 = var5.getSubscriptionTrial;
                        var5 = var2.bind(var5)(var9);
                        var2 = var7 != var12;
                        if (var2) {
                            _fun84109_ip = 335;
                            continue _fun84109
                        }
                    case 331:
                        var2 = var7 != var13;
                    case 335:
                        if (var2) {
                            _fun84109_ip = 352;
                            continue _fun84109
                        }
                    case 338:
                        var5 = var7 != var5;
                        if (!var5) {
                            _fun84109_ip = 349;
                            continue _fun84109
                        }
                    case 345:
                        var5 = var7 == var13;
                    case 349:
                        var2 = var5;
                    case 352:
                        if (!var2) {
                            _fun84109_ip = 413;
                            continue _fun84109
                        }
                    case 355:
                        var5 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var2 = 22;
                        var2 = var7[var2];
                        var7 = var5.bind(var4)(var2);
                        var5 = var7.updateSubscriptionTrial;
                        var2 = {};
                        var2.trial = var13;
                        var2.max_num_active_trial_users = var12;
                        var2 = var5.bind(var7)(var10, var9, var2);
                        SaveGenerator(address = 404);
                    case 402:
                        return var2;
                    case 404:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun84109_ip = 646;
                            continue _fun84109
                        }
                    case 413:
                        if (!(var4 !== var11)) {
                            _fun84109_ip = 640;
                            continue _fun84109
                        }
                    case 420:
                        var7 = _closure1_slot22;
                        var9 = _closure1_slot7;
                        var5 = var9.getGuildEmoji;
                        var5 = var5.bind(var9)(var10);
                        var5 = var7.bind(var4)(var5, var8);
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var6 = 23;
                        var8 = var10[var6];
                        var14 = var7.bind(var4)(var8);
                        var13 = var14.difference;
                        var12 = new Array(0);
                        var20 = var12;
                        var19 = var11;
                        var18 = 0;
                        var8 = arraySpread(var20, var19, var18);
                        var8 = new Array(0);
                        var20 = var8;
                        var19 = var5;
                        var15 = arraySpread(var20, var19, var18);
                        var8 = var13.bind(var14)(var12, var8);
                        var6 = var10[var6];
                        var10 = var7.bind(var4)(var6);
                        var7 = var10.difference;
                        var6 = new Array(0);
                        var20 = var6;
                        var19 = var5;
                        var5 = arraySpread(var20, var19, var18);
                        var5 = new Array(0);
                        var20 = var5;
                        var19 = var11;
                        var11 = arraySpread(var20, var19, var18);
                        var6 = var7.bind(var10)(var6, var5);
                        var7 = var8.map;
                        var5 = function(arg0) { // Environment: var3
                            _fun84110: for (var _fun84110_ip = 0;;) switch (_fun84110_ip) {
                                case 0:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getCustomEmojiById;
                                    var1 = arg0;
                                    var3 = var2.bind(var3)(var1);
                                    var1 = null;
                                    if (!(var1 == var3)) {
                                        _fun84110_ip = 31;
                                        continue _fun84110
                                    }
                                case 27:
                                    var1 = undefined;
                                    return var1;
                                case 31:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 24;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.updateEmoji;
                                    var0 = {};
                                    var5 = _closure4_slot0;
                                    var0.guildId = var5;
                                    var5 = var3.id;
                                    var0.emojiId = var5;
                                    var8 = var3.roles;
                                    var3 = new Array(1);
                                    var7 = 0;
                                    var9 = var3;
                                    var5 = arraySpread(var9, var8, var7);
                                    var4 = _closure4_slot1;
                                    var3[var5] = var4;
                                    var4 = 1;
                                    var4 = var5 + var4;
                                    var0.roles = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var19 = var7.bind(var8)(var5);
                        var5 = var6.map;
                        var3 = function(arg0) { // Environment: var3
                            _fun84111: for (var _fun84111_ip = 0;;) switch (_fun84111_ip) {
                                case 0:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getCustomEmojiById;
                                    var0 = arg0;
                                    var5 = var2.bind(var3)(var0);
                                    var0 = null;
                                    if (!(var0 == var5)) {
                                        _fun84111_ip = 31;
                                        continue _fun84111
                                    }
                                case 27:
                                    var0 = undefined;
                                    return var0;
                                case 31:
                                    var3 = var5.roles;
                                    var2 = var3.filter;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = _closure4_slot1;
                                        var0 = arg0;
                                        var0 = var0 !== var1;
                                        return var0;
                                    };
                                    var4 = var2.bind(var3)(var0);
                                    var2 = var4.length;
                                    var0 = 0;
                                    if (!(!(var2 > var0))) {
                                        _fun84111_ip = 115;
                                        continue _fun84111
                                    }
                                case 67:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 24;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var2);
                                    var3 = var6.deleteEmoji;
                                    var2 = _closure4_slot0;
                                    var0 = var5.id;
                                    var0 = var3.bind(var6)(var2, var0);
                                    _fun84111_ip = 176;
                                    continue _fun84111;
                                case 115:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.updateEmoji;
                                    var1 = {};
                                    var6 = _closure4_slot0;
                                    var1.guildId = var6;
                                    var5 = var5.id;
                                    var1.emojiId = var5;
                                    var1.roles = var4;
                                    var0 = var2.bind(var3)(var1);
                                case 176:
                                    return var0;
                            }
                        };
                        var8 = var5.bind(var6)(var3);
                        var3 = global;
                        var6 = var3.Promise;
                        var5 = var6.all;
                        var3 = new Array(0);
                        var20 = var3;
                        var18 = arraySpread(var20, var19, var18);
                        var20 = var3;
                        var19 = var8;
                        var7 = arraySpread(var20, var19, var18);
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 634);
                    case 632:
                        return var3;
                    case 634:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun84109_ip = 643;
                            continue _fun84109
                        }
                    case 640:
                        return var4;
                    case 643:
                        return var3;
                    case 646:
                        return var2;
                    case 649:
                        return var1;
                    case 652:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: _createListingFromEditState, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun84115: for (var _fun84115_ip = 0;;) switch (_fun84115_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84115_ip = 566;
                            continue _fun84115
                        }
                    case 13:
                        var17 = var1.guildId;
                        var19 = var1.editStateId;
                        var9 = var1.groupListingId;
                        var7 = var1.onBeforeDispatchNewListing;
                        var6 = undefined;
                        SaveGenerator(address = 42);
                    case 40:
                        return var6;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun84115_ip = 563;
                            continue _fun84115
                        }
                    case 51:
                        var3 = _closure1_slot10;
                        var2 = var3.getState;
                        var2 = var2.bind(var3)();
                        var2 = var2.listings;
                        var15 = var2[var19];
                        var3 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var2 = 20;
                        var5 = var11[var2];
                        var10 = var3.bind(var6)(var5);
                        var18 = null;
                        var8 = var18 != var15;
                        var5 = 'edit state does not exist';
                        var5 = var10.bind(var6)(var8, var5);
                        var13 = var15.name;
                        var12 = var15.description;
                        var5 = var15.channelBenefits;
                        var8 = var15.intangibleBenefits;
                        var10 = var15.priceTier;
                        var14 = var15.image;
                        var16 = var15.channelAccessFormat;
                        var15 = var11[var2];
                        var21 = var3.bind(var6)(var15);
                        var20 = var18 != var13;
                        var15 = 'no name provided';
                        var15 = var21.bind(var6)(var20, var15);
                        var15 = var11[var2];
                        var21 = var3.bind(var6)(var15);
                        var20 = var18 != var12;
                        var15 = 'no description provided';
                        var15 = var21.bind(var6)(var20, var15);
                        var15 = var11[var2];
                        var21 = var3.bind(var6)(var15);
                        var20 = var18 != var10;
                        var15 = 'no priceTier provided';
                        var15 = var21.bind(var6)(var20, var15);
                        var2 = var11[var2];
                        var11 = var3.bind(var6)(var2);
                        var3 = var18 != var14;
                        var2 = 'no image provided';
                        var2 = var11.bind(var6)(var3, var2);
                        var2 = _closure1_slot9;
                        var15 = var2.ALL_CHANNELS_ACCESS;
                        if (!(var18 == var9)) {
                            _fun84115_ip = 322;
                            continue _fun84115
                        }
                    case 270:
                        var3 = _closure1_slot2;
                        var11 = _closure1_slot3;
                        var2 = 22;
                        var2 = var11[var2];
                        var11 = var3.bind(var6)(var2);
                        var3 = var11.createSubscriptionGroupListing;
                        var2 = {};
                        var2 = var3.bind(var11)(var17, var2);
                        SaveGenerator(address = 308);
                    case 306:
                        return var2;
                    case 308:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun84115_ip = 560;
                            continue _fun84115
                        }
                    case 317:
                        var9 = var2.id;
                    case 322:
                        var3 = var18 != var5;
                        if (!var3) {
                            _fun84115_ip = 340;
                            continue _fun84115
                        }
                    case 329:
                        var20 = var5.length;
                        var11 = 0;
                        var3 = var20 > var11;
                    case 340:
                        if (!var3) {
                            _fun84115_ip = 388;
                            continue _fun84115
                        }
                    case 343:
                        var11 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var3 = 25;
                        var3 = var20[var3];
                        var11 = var11.bind(var6)(var3);
                        var3 = var11.createChannelsFromTemplateTierBenefits;
                        var3 = var3.bind(var11)(var17, var5);
                        SaveGenerator(address = 379);
                    case 377:
                        return var3;
                    case 379:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 11);
                        if (var11) {
                            _fun84115_ip = 557;
                            continue _fun84115
                        }
                    case 388:
                        var20 = var5;
                        if (!(var18 == var20)) {
                            _fun84115_ip = 399;
                            continue _fun84115
                        }
                    case 395:
                        var20 = new Array(0);
                    case 399:
                        var11 = new Array(0);
                        var22 = 0;
                        var24 = var11;
                        var23 = var20;
                        var5 = arraySpread(var24, var23, var22);
                        if (!(var18 == var8)) {
                            _fun84115_ip = 423;
                            continue _fun84115
                        }
                    case 419:
                        var8 = new Array(0);
                    case 423:
                        var24 = var11;
                        var23 = var8;
                        var22 = var5;
                        var5 = arraySpread(var24, var23, var22);
                        var8 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var5 = 25;
                        var5 = var18[var5];
                        var8 = var8.bind(var6)(var5);
                        var5 = var8.getTemplateTierCreationAnalyticsContext;
                        var8 = var5.bind(var8)(var19, var17);
                        var5 = _closure1_slot2;
                        var4 = 22;
                        var4 = var18[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.createSubscriptionListing;
                        var4 = {};
                        var4.guildId = var17;
                        var4.groupListingId = var9;
                        var9 = {};
                        var15 = var16 === var15;
                        var9.can_access_all_channels = var15;
                        var9.image = var14;
                        var9.name = var13;
                        var9.description = var12;
                        var9.benefits = var11;
                        var9.priceTier = var10;
                        var4.data = var9;
                        var4.analyticsContext = var8;
                        var4.onBeforeDispatchNewListing = var7;
                        var4 = var5.bind(var6)(var4);
                        return var4;
                    case 557:
                        return var3;
                    case 560:
                        return var2;
                    case 563:
                        return var1;
                    case 566:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot25 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var5 = global;
    var12 = var5.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var10.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var9 = var8.AllChannelAccessOptions;
    var _closure1_slot9 = var9;
    var8 = var8.useEditStateStore;
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var9 = var8.CurrencyCodes;
    var _closure1_slot12 = var9;
    var8 = var8.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.SubscriptionIntervalTypes;
    var _closure1_slot14 = var8;
    var8 = new Array(0);
    var _closure1_slot15 = var8;
    var8 = new Array(0);
    var _closure1_slot16 = var8;
    var5 = var5.Set;
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var16 = var8;
    var5 = new var16[var5](var15);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot17 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useListingEditState = var4;
    var4 = function(arg0) { // Original name: useClearEditStateOnUnmount, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot6;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var2 = _closure1_slot23;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useClearEditStateOnUnmount = var4;
    var4 = function(arg0) { // Original name: useName, environment: var1
        var4 = arg0;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84120: for (var _fun84120_ip = 0;;) switch (_fun84120_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun84120_ip = 19;
                        continue _fun84120
                    }
                case 14:
                    var1 = var2.name;
                case 19:
                    var2 = var0 != var1;
                    var0 = '';
                    if (!var2) {
                        _fun84120_ip = 33;
                        continue _fun84120
                    }
                case 30:
                    var0 = var1;
                case 33:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'name';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.useName = var4;
    var4 = function(arg0) { // Original name: usePriceTier, environment: var1
        var4 = arg0;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84122: for (var _fun84122_ip = 0;;) switch (_fun84122_ip) {
                case 0:
                    var1 = arg0;
                    var2 = null;
                    var4 = var2 == var1;
                    var0 = undefined;
                    if (var4) {
                        _fun84122_ip = 41;
                        continue _fun84122
                    }
                case 14:
                    var4 = var1.subscription_plans;
                    var1 = 0;
                    var1 = var4[var1];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun84122_ip = 41;
                        continue _fun84122
                    }
                case 35:
                    var0 = var1.price;
                case 41:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'priceTier';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.usePriceTier = var4;
    var4 = function(arg0) { // Original name: useDescription, environment: var1
        var4 = arg0;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84124: for (var _fun84124_ip = 0;;) switch (_fun84124_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun84124_ip = 19;
                        continue _fun84124
                    }
                case 14:
                    var1 = var2.description;
                case 19:
                    var2 = var0 != var1;
                    var0 = '';
                    if (!var2) {
                        _fun84124_ip = 33;
                        continue _fun84124
                    }
                case 30:
                    var0 = var1;
                case 33:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'description';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.useDescription = var4;
    var4 = function(arg0, arg1) { // Original name: useImage, environment: var1
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84126: for (var _fun84126_ip = 0;;) switch (_fun84126_ip) {
                case 0:
                    var0 = arg0;
                    var2 = null;
                    var4 = var2 == var0;
                    var3 = undefined;
                    var1 = undefined;
                    if (var4) {
                        _fun84126_ip = 22;
                        continue _fun84126
                    }
                case 16:
                    var1 = var0.image_asset;
                case 22:
                    if (!(var2 == var1)) {
                        _fun84126_ip = 28;
                        continue _fun84126
                    }
                case 26:
                    return var3;
                case 28:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 11;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.getAssetURL;
                    var2 = var0.application_id;
                    var1 = var0.image_asset;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'image';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.useImage = var4;
    var4 = function(arg0) { // Original name: useApplicationId, environment: var1
        var3 = _closure1_slot21;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun84128: for (var _fun84128_ip = 0;;) switch (_fun84128_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun84128_ip = 20;
                        continue _fun84128
                    }
                case 14:
                    var0 = var1.application_id;
                case 20:
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.useApplicationId = var4;
    var4 = function(arg0, arg1) { // Original name: useRoleIcon, environment: var1
        var4 = arg0;
        var5 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 12;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = arg1;
        var7 = var5.bind(var3)(var2, var4);
        var _closure2_slot0 = var7;
        var2 = _closure1_slot20;
        var6 = _closure1_slot6;
        var5 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun84130: for (var _fun84130_ip = 0;;) switch (_fun84130_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var1;
                    var5 = undefined;
                    if (var2) {
                        _fun84130_ip = 29;
                        continue _fun84130
                    }
                case 20:
                    var2 = _closure2_slot0;
                    var5 = var2.icon;
                case 29:
                    var6 = var3 != var5;
                    var2 = undefined;
                    if (!var6) {
                        _fun84130_ip = 41;
                        continue _fun84130
                    }
                case 38:
                    var2 = var5;
                case 41:
                    var0.icon = var2;
                    var2 = _closure2_slot0;
                    var5 = var3 == var2;
                    var2 = undefined;
                    if (var5) {
                        _fun84130_ip = 68;
                        continue _fun84130
                    }
                case 58:
                    var4 = _closure2_slot0;
                    var2 = var4.unicodeEmoji;
                case 68:
                    var3 = var3 != var2;
                    var1 = undefined;
                    if (!var3) {
                        _fun84130_ip = 80;
                        continue _fun84130
                    }
                case 77:
                    var1 = var2;
                case 80:
                    var0.unicodeEmoji = var1;
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var0, var1);
        var0 = 'roleIcon';
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var2.useRoleIcon = var4;
    var4 = function(arg0, arg1) { // Original name: useRole, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var5 = _closure1_slot3;
        var2 = 12;
        var2 = var5[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = arg1;
        var6 = var3.bind(var5)(var2, var4);
        var _closure2_slot1 = var6;
        var3 = _closure1_slot10;
        var2 = function(arg0) { // Environment: var0
            _fun84132: for (var _fun84132_ip = 0;;) switch (_fun84132_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.listings;
                    var0 = _closure2_slot0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun84132_ip = 37;
                        continue _fun84132
                    }
                case 31:
                    var0 = var1.roleColor;
                case 37:
                    return var0;
            }
        };
        var4 = var3.bind(var5)(var2);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot10;
        var2 = function(arg0) { // Environment: var0
            _fun84133: for (var _fun84133_ip = 0;;) switch (_fun84133_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.listings;
                    var0 = _closure2_slot0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun84133_ip = 37;
                        continue _fun84133
                    }
                case 31:
                    var0 = var1.roleIcon;
                case 37:
                    return var0;
            }
        };
        var5 = var3.bind(var5)(var2);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot6;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun84134: for (var _fun84134_ip = 0;;) switch (_fun84134_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot1;
                    var5 = null;
                    if (!(var5 == var2)) {
                        _fun84134_ip = 48;
                        continue _fun84134
                    }
                case 15:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.DEFAULT_PREVIEW_ROLE;
                    _fun84134_ip = 52;
                    continue _fun84134;
                case 48:
                    var2 = _closure2_slot1;
                case 52:
                    var9 = var0;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var2 = _closure2_slot3;
                    var4 = undefined;
                    if (!(var4 !== var2)) {
                        _fun84134_ip = 130;
                        continue _fun84134
                    }
                case 72:
                    var2 = _closure2_slot3;
                    var6 = var2.icon;
                    var7 = var5 != var6;
                    var2 = '';
                    var3 = var2;
                    if (!var7) {
                        _fun84134_ip = 98;
                        continue _fun84134
                    }
                case 95:
                    var3 = var6;
                case 98:
                    var0.icon = var3;
                    var3 = _closure2_slot3;
                    var3 = var3.unicodeEmoji;
                    var5 = var5 != var3;
                    if (!var5) {
                        _fun84134_ip = 124;
                        continue _fun84134
                    }
                case 121:
                    var2 = var3;
                case 124:
                    var0.unicodeEmoji = var2;
                case 130:
                    var2 = _closure2_slot2;
                    if (!(var4 !== var2)) {
                        _fun84134_ip = 188;
                        continue _fun84134
                    }
                case 138:
                    var3 = _closure2_slot2;
                    var0.color = var3;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 14;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.int2hex;
                    var1 = var1.bind(var2)(var3);
                    var0.colorString = var1;
                case 188:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useRole = var4;
    var4 = function(arg0, arg1) { // Original name: useRoleColor, environment: var1
        var4 = arg0;
        var5 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 12;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = arg1;
        var7 = var5.bind(var3)(var2, var4);
        var _closure2_slot0 = var7;
        var2 = _closure1_slot20;
        var6 = _closure1_slot6;
        var5 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun84136: for (var _fun84136_ip = 0;;) switch (_fun84136_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var0;
                    var0 = undefined;
                    if (var3) {
                        _fun84136_ip = 27;
                        continue _fun84136
                    }
                case 18:
                    var2 = _closure2_slot0;
                    var0 = var2.color;
                case 27:
                    if (!(var1 == var0)) {
                        _fun84136_ip = 38;
                        continue _fun84136
                    }
                case 31:
                    var0 = _closure1_slot13;
                case 38:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var0, var1);
        var0 = 'roleColor';
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var2.useRoleColor = var4;
    var4 = function(arg0, arg1) { // Original name: useChannelAccessFormat, environment: var1
        var4 = arg0;
        var5 = _closure1_slot1;
        var3 = _closure1_slot3;
        var2 = 12;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = arg1;
        var7 = var5.bind(var3)(var2, var4);
        var _closure2_slot0 = var7;
        var2 = _closure1_slot20;
        var6 = _closure1_slot6;
        var5 = var6.useMemo;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun84138: for (var _fun84138_ip = 0;;) switch (_fun84138_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun84138_ip = 76;
                        continue _fun84138
                    }
                case 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hasViewChannelPermission;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var1 = _closure1_slot9;
                    if (var0) {
                        _fun84138_ip = 68;
                        continue _fun84138
                    }
                case 60:
                    var0 = var1.SOME_CHANNELS_ACCESS;
                    _fun84138_ip = 74;
                    continue _fun84138;
                case 68:
                    var0 = var1.ALL_CHANNELS_ACCESS;
                case 74:
                    _fun84138_ip = 89;
                    continue _fun84138;
                case 76:
                    var1 = _closure1_slot9;
                    var0 = var1.SOME_CHANNELS_ACCESS;
                case 89:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var0, var1);
        var0 = 'channelAccessFormat';
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var2.useChannelAccessFormat = var4;
    var4 = function(arg0) { // Original name: useChannelBenefits, environment: var1
        var4 = arg0;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84140: for (var _fun84140_ip = 0;;) switch (_fun84140_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun84140_ip = 64;
                        continue _fun84140
                    }
                case 9:
                    var0 = var0.role_benefits;
                    var2 = var0.benefits;
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 16;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isChannelBenefit;
                    var0 = var1.bind(var2)(var0);
                    _fun84140_ip = 71;
                    continue _fun84140;
                case 64:
                    var0 = _closure1_slot15;
                case 71:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'channelBenefits';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.useChannelBenefits = var4;
    var4 = function(arg0) { // Original name: useIntangibleBenefits, environment: var1
        var4 = arg0;
        var3 = _closure1_slot20;
        var1 = _closure1_slot21;
        var2 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84142: for (var _fun84142_ip = 0;;) switch (_fun84142_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun84142_ip = 64;
                        continue _fun84142
                    }
                case 9:
                    var0 = var0.role_benefits;
                    var2 = var0.benefits;
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 16;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isIntangibleBenefit;
                    var0 = var1.bind(var2)(var0);
                    _fun84142_ip = 71;
                    continue _fun84142;
                case 64:
                    var0 = _closure1_slot16;
                case 71:
                    return var0;
            }
        };
        var1 = var1.bind(var2)(var4, var0);
        var0 = 'intangibleBenefits';
        var0 = var3.bind(var2)(var4, var0, var1);
        return var0;
    };
    var2.useIntangibleBenefits = var4;
    var4 = function(arg0, arg1) { // Original name: useTierEmojiIds, environment: var1
        var4 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot1;
        var8 = _closure1_slot3;
        var3 = 12;
        var5 = var8[var3];
        var3 = undefined;
        var5 = var6.bind(var3)(var5);
        var7 = var5.bind(var3)(var2, var4);
        var _closure2_slot1 = var7;
        var6 = _closure1_slot0;
        var5 = 9;
        var5 = var8[var5];
        var9 = var6.bind(var3)(var5);
        var8 = var9.useStateFromStoresArray;
        var5 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = var2.getGuildEmoji;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var8.bind(var9)(var6, var2, var5);
        var _closure2_slot2 = var8;
        var2 = _closure1_slot20;
        var6 = _closure1_slot6;
        var5 = var6.useMemo;
        var1 = new Array(2);
        var1[0] = var8;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun84145: for (var _fun84145_ip = 0;;) switch (_fun84145_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun84145_ip = 43;
                        continue _fun84145
                    }
                case 13:
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot2;
                    var0 = _closure2_slot1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    _fun84145_ip = 50;
                    continue _fun84145;
                case 43:
                    var0 = _closure1_slot17;
                case 50:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var0, var1);
        var0 = 'tierEmojiIds';
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var2.useTierEmojiIds = var4;
    var4 = function(arg0) { // Original name: useTrialInterval, environment: var1
        _fun84146: for (var _fun84146_ip = 0;;) switch (_fun84146_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 17;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.useSubscriptionTrial;
                var0 = var0.bind(var2)(var4);
                var5 = _closure1_slot1;
                var2 = 18;
                var2 = var6[var2];
                var5 = var5.bind(var3)(var2);
                var2 = null;
                var7 = var2 == var0;
                var6 = undefined;
                if (var7) {
                    _fun84146_ip = 74;
                    continue _fun84146
                }
            case 66:
                var6 = var0.active_trial;
            case 74:
                var7 = var2 != var6;
                var0 = null;
                if (!var7) {
                    _fun84146_ip = 86;
                    continue _fun84146
                }
            case 83:
                var0 = var6;
            case 86:
                var0 = var5.bind(var3)(var0);
                var0 = var0.selectedOption;
                var1 = _closure1_slot20;
                var5 = var2 != var0;
                var2 = null;
                if (!var5) {
                    _fun84146_ip = 113;
                    continue _fun84146
                }
            case 110:
                var2 = var0;
            case 113:
                var0 = 'trialInterval';
                var0 = var1.bind(var3)(var4, var0, var2);
                return var0;
        }
    };
    var2.useTrialInterval = var4;
    var4 = function(arg0) { // Original name: useTrialLimit, environment: var1
        _fun84147: for (var _fun84147_ip = 0;;) switch (_fun84147_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSubscriptionTrial;
                var5 = var1.bind(var2)(var4);
                var2 = _closure1_slot20;
                var1 = null;
                var6 = var1 == var5;
                var0 = undefined;
                if (var6) {
                    _fun84147_ip = 60;
                    continue _fun84147
                }
            case 54:
                var0 = var5.max_num_active_trial_users;
            case 60:
                var5 = var1 != var0;
                var1 = null;
                if (!var5) {
                    _fun84147_ip = 72;
                    continue _fun84147
                }
            case 69:
                var1 = var0;
            case 72:
                var0 = 'trialLimit';
                var0 = var2.bind(var3)(var4, var0, var1);
                return var0;
        }
    };
    var2.useTrialLimit = var4;
    var4 = function(arg0) { // Original name: useHasChanges, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot10;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.listings;
            var0 = _closure2_slot0;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var0 !== var1;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useHasChanges = var4;
    var4 = function(arg0) { // Original name: useHasChangesForEditStateIds, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot10;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun84151: for (var _fun84151_ip = 0;;) switch (_fun84151_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot18;
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.bind(var3)();
                    var0 = var1.done;
                    if (var0) {
                        _fun84151_ip = 76;
                        continue _fun84151
                    }
                case 36:
                    var5 = var1.value;
                    var0 = var4.listings;
                    var0 = var0[var5];
                    if (!(var3 === var0)) {
                        _fun84151_ip = 72;
                        continue _fun84151
                    }
                case 55:
                    var5 = var2.bind(var3)();
                    var0 = var5.done;
                    var1 = var5;
                    if (var0) {
                        _fun84151_ip = 76;
                        continue _fun84151
                    }
                case 70:
                    _fun84151_ip = 36;
                    continue _fun84151;
                case 72:
                    var0 = true;
                    return var0;
                case 76:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useHasChangesForEditStateIds = var4;
    var4 = function(arg0) { // Original name: useSubscriptionPlan, environment: var1
        var4 = arg0;
        var3 = _closure1_slot21;
        var6 = undefined;
        var2 = function(arg0) { // Environment: var0
            _fun84153: for (var _fun84153_ip = 0;;) switch (_fun84153_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun84153_ip = 26;
                        continue _fun84153
                    }
                case 14:
                    var2 = var1.subscription_plans;
                    var1 = 0;
                    var0 = var2[var1];
                case 26:
                    return var0;
            }
        };
        var5 = var3.bind(var6)(var4, var2);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot20;
        var2 = 'priceTier';
        var4 = var3.bind(var6)(var4, var2, var6);
        var3 = _closure1_slot5;
        var2 = 1;
        var3 = var3.bind(var6)(var4, var2);
        var2 = 0;
        var4 = var3[var2];
        var _closure2_slot1 = var4;
        var3 = _closure1_slot6;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun84154: for (var _fun84154_ip = 0;;) switch (_fun84154_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun84154_ip = 40;
                        continue _fun84154
                    }
                case 15:
                    var2 = _closure2_slot0;
                    var2 = var1 == var2;
                    var4 = undefined;
                    if (var2) {
                        _fun84154_ip = 38;
                        continue _fun84154
                    }
                case 28:
                    var2 = _closure2_slot0;
                    var4 = var2.price;
                case 38:
                    _fun84154_ip = 44;
                    continue _fun84154;
                case 40:
                    var4 = _closure2_slot1;
                case 44:
                    var5 = var1 != var4;
                    var2 = 0;
                    if (!var5) {
                        _fun84154_ip = 56;
                        continue _fun84154
                    }
                case 53:
                    var2 = var4;
                case 56:
                    var0.price = var2;
                    var2 = _closure2_slot0;
                    var5 = var1 == var2;
                    var4 = undefined;
                    if (var5) {
                        _fun84154_ip = 84;
                        continue _fun84154
                    }
                case 74:
                    var5 = _closure2_slot0;
                    var4 = var5.currency;
                case 84:
                    if (!(var1 == var4)) {
                        _fun84154_ip = 101;
                        continue _fun84154
                    }
                case 88:
                    var5 = _closure1_slot12;
                    var4 = var5.USD;
                case 101:
                    var0.currency = var4;
                    var4 = _closure2_slot0;
                    var5 = var1 == var4;
                    var4 = undefined;
                    if (var5) {
                        _fun84154_ip = 129;
                        continue _fun84154
                    }
                case 119:
                    var5 = _closure2_slot0;
                    var4 = var5.interval;
                case 129:
                    if (!(var1 == var4)) {
                        _fun84154_ip = 146;
                        continue _fun84154
                    }
                case 133:
                    var5 = _closure1_slot14;
                    var4 = var5.MONTH;
                case 146:
                    var0.interval = var4;
                    var4 = _closure2_slot0;
                    var4 = var1 == var4;
                    var5 = undefined;
                    if (var4) {
                        _fun84154_ip = 174;
                        continue _fun84154
                    }
                case 164:
                    var4 = _closure2_slot0;
                    var5 = var4.interval_count;
                case 174:
                    var6 = var1 != var5;
                    var4 = 1;
                    if (!var6) {
                        _fun84154_ip = 187;
                        continue _fun84154
                    }
                case 184:
                    var4 = var5;
                case 187:
                    var0.interval_count = var4;
                    var4 = _closure2_slot0;
                    var4 = var1 == var4;
                    var2 = undefined;
                    if (var4) {
                        _fun84154_ip = 214;
                        continue _fun84154
                    }
                case 205:
                    var3 = _closure2_slot0;
                    var2 = var3.id;
                case 214:
                    var3 = var1 != var2;
                    var1 = '';
                    if (!var3) {
                        _fun84154_ip = 228;
                        continue _fun84154
                    }
                case 225:
                    var1 = var2;
                case 228:
                    var0.id = var1;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var0, var1);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var2.useSubscriptionPlan = var4;
    var2.clearEditState = var3;
    var3 = function() { // Original name: useCreateOrUpdateListingFromEditState, environment: var1
        var3 = _closure1_slot6;
        var2 = var3.useState;
        var1 = false;
        var2 = var2.bind(var3)(var1);
        var8 = _closure1_slot5;
        var1 = undefined;
        var7 = 2;
        var5 = var8.bind(var1)(var2, var7);
        var2 = 0;
        var3 = var5[var2];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot0 = var5;
        var9 = _closure1_slot6;
        var5 = var9.useState;
        var5 = var5.bind(var9)();
        var5 = var8.bind(var1)(var5, var7);
        var2 = var5[var2];
        var5 = var5[var6];
        var _closure2_slot1 = var5;
        var5 = _closure1_slot6;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun84158: for (var _fun84158_ip = 0;;) switch (_fun84158_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                            if (var4) {
                                _fun84158_ip = 936;
                                continue _fun84158
                            }
                        case 15:
                            var11 = var1.guildId;
                            var14 = var1.editStateId;
                            var2 = var1.groupListingId;
                            var10 = var1.onBeforeDispatchNewListing;
                            var13 = var1.onAfterDispatchNewListing;
                            var5 = undefined;
                            var8 = undefined;
                            var15 = undefined;
                            var12 = undefined;
                            SaveGenerator(address = 56);
                        case 54:
                            return var5;
                        case 56:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun84158_ip = 933;
                                continue _fun84158
                            }
                        case 65:
                            var16 = var14;
                            var8 = var16;
                            var7 = _closure1_slot8;
                            var4 = var7.getSubscriptionListing;
                            var15 = var4.bind(var7)(var16);
                        case 89: // try_start_0 // try_start_2
                            var16 = _closure2_slot0;
                            var7 = true;
                            var16 = var16.bind(var5)(var7);
                            var16 = _closure2_slot1;
                            var16 = var16.bind(var5)(var5);
                            var19 = null;
                            if (!(var19 == var15)) {
                                _fun84158_ip = 231;
                                continue _fun84158
                            }
                        case 118:
                            var15 = {};
                            var16 = var11;
                            var15.guildId = var16;
                            var16 = var8;
                            var15.editStateId = var16;
                            var16 = var2;
                            var15.groupListingId = var16;
                            var15.onBeforeDispatchNewListing = var10;
                            var10 = function() { // Original name: createListingFromEditState, environment: var6
                                var0 = undefined;
                                var3 = _closure1_slot25;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var10 = var10.bind(var5)(var15);
                            SaveGenerator(address = 164);
                        case 162:
                            return var10;
                        case 164:
                            ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 15);
                            if (var15) {
                                _fun84158_ip = 217;
                                continue _fun84158
                            }
                        case 170:
                            var12 = var10;
                            var16 = var14;
                            var15 = var10.id;
                            var8 = var15;
                            var14 = function(arg0, arg1) { // Original name: moveEditState, environment: var6
                                var0 = arg0;
                                var _closure6_slot0 = var0;
                                var0 = arg1;
                                var _closure6_slot1 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.batchUpdates;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot10;
                                    var1 = var2.setState;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = arg0;
                                        var0 = {};
                                        var1 = {};
                                        var5 = var2.listings;
                                        var6 = var1;
                                        var3 = copyDataProperties(var6, var5);
                                        var4 = _closure6_slot1;
                                        var2 = var2.listings;
                                        var3 = _closure6_slot0;
                                        var2 = var2[var3];
                                        var1[var4] = var2;
                                        var2 = undefined;
                                        var1[var3] = var2;
                                        var0.listings = var1;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var14 = var14.bind(var5)(var16, var15);
                            var14 = var13;
                            if (!(var19 != var14)) {
                                _fun84158_ip = 781;
                                continue _fun84158
                            }
                        case 207:
                            var12 = var13.bind(var5)(var12);
                            _fun84158_ip = 781;
                            continue _fun84158;
                        case 217: // try_end0 // try_end2
                            var13 = _closure2_slot0;
                            var12 = false;
                            var12 = var13.bind(var5)(var12);
                            return var10;
                        case 231: // try_start_1 // try_start_3
                            var12 = _closure1_slot1;
                            var14 = _closure1_slot3;
                            var10 = 20;
                            var13 = var14[var10];
                            var16 = var12.bind(var5)(var13);
                            var13 = var2;
                            var15 = var19 != var13;
                            var2 = 'groupListingId is null';
                            var2 = var16.bind(var5)(var15, var2);
                            var2 = {};
                            var15 = var11;
                            var2.guildId = var15;
                            var15 = var8;
                            var2.editStateId = var15;
                            var2.groupListingId = var13;
                            var17 = var2.guildId;
                            var15 = var2.editStateId;
                            var16 = var2.groupListingId;
                            var13 = _closure1_slot8;
                            var2 = var13.getSubscriptionListing;
                            var2 = var2.bind(var13)(var15);
                            var13 = var14[var10];
                            var20 = var12.bind(var5)(var13);
                            var18 = var19 != var2;
                            var13 = 'listing doesnt exist';
                            var13 = var20.bind(var5)(var18, var13);
                            var18 = _closure1_slot10;
                            var13 = var18.getState;
                            var13 = var13.bind(var18)();
                            var13 = var13.listings;
                            var13 = var13[var15];
                            var10 = var14[var10];
                            var14 = var12.bind(var5)(var10);
                            var12 = var19 != var13;
                            var10 = 'edit state does not exist';
                            var10 = var14.bind(var5)(var12, var10);
                            var22 = var13.name;
                            var20 = var13.description;
                            var10 = var13.channelBenefits;
                            var18 = var13.intangibleBenefits;
                            var21 = var13.priceTier;
                            var12 = var13.image;
                            var13 = var13.channelAccessFormat;
                            var14 = {};
                            var23 = var2.name;
                            if (!(var22 !== var23)) {
                                _fun84158_ip = 455;
                                continue _fun84158
                            }
                        case 449:
                            var14.name = var22;
                        case 455:
                            var22 = var2.description;
                            if (!(var20 !== var22)) {
                                _fun84158_ip = 470;
                                continue _fun84158
                            }
                        case 464:
                            var14.description = var20;
                        case 470:
                            var22 = var2.subscription_plans;
                            var20 = 0;
                            var23 = var22[var20];
                            var24 = var19 == var23;
                            var22 = undefined;
                            if (var24) {
                                _fun84158_ip = 497;
                                continue _fun84158
                            }
                        case 491:
                            var22 = var23.price;
                        case 497:
                            if (!(var21 !== var22)) {
                                _fun84158_ip = 507;
                                continue _fun84158
                            }
                        case 501:
                            var14.priceTier = var21;
                        case 507:
                            if (!(var19 != var12)) {
                                _fun84158_ip = 517;
                                continue _fun84158
                            }
                        case 511:
                            var14.image = var12;
                        case 517:
                            if (!(var19 != var13)) {
                                _fun84158_ip = 541;
                                continue _fun84158
                            }
                        case 521:
                            var12 = _closure1_slot9;
                            var12 = var12.ALL_CHANNELS_ACCESS;
                            var12 = var13 === var12;
                            var14.can_access_all_channels = var12;
                        case 541:
                            if (!(var19 == var10)) {
                                _fun84158_ip = 552;
                                continue _fun84158
                            }
                        case 545:
                            if (!(var19 != var18)) {
                                _fun84158_ip = 686;
                                continue _fun84158
                            }
                        case 552:
                            var12 = var2.role_benefits;
                            var22 = var12.benefits;
                            var21 = var22.filter;
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot3;
                            var12 = 16;
                            var13 = var24[var12];
                            var13 = var23.bind(var5)(var13);
                            var13 = var13.isChannelBenefit;
                            var13 = var21.bind(var22)(var13);
                            var21 = var2.role_benefits;
                            var22 = var21.benefits;
                            var21 = var22.filter;
                            var12 = var24[var12];
                            var12 = var23.bind(var5)(var12);
                            var12 = var12.isIntangibleBenefit;
                            var12 = var21.bind(var22)(var12);
                            if (!(var19 != var10)) {
                                _fun84158_ip = 644;
                                continue _fun84158
                            }
                        case 641:
                            var13 = var10;
                        case 644:
                            var10 = new Array(0);
                            var27 = var10;
                            var26 = var13;
                            var25 = 0;
                            var13 = arraySpread(var27, var26, var25);
                            if (!(var19 != var18)) {
                                _fun84158_ip = 667;
                                continue _fun84158
                            }
                        case 664:
                            var12 = var18;
                        case 667:
                            var27 = var10;
                            var26 = var12;
                            var25 = var13;
                            var12 = arraySpread(var27, var26, var25);
                            var14.benefits = var10;
                        case 686:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var10 = 23;
                            var10 = var13[var10];
                            var12 = var12.bind(var5)(var10);
                            var10 = var12.isEmpty;
                            var10 = var10.bind(var12)(var14);
                            if (var10) {
                                _fun84158_ip = 771;
                                continue _fun84158
                            }
                        case 720:
                            var12 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var10 = 22;
                            var10 = var13[var10];
                            var13 = var12.bind(var5)(var10);
                            var12 = var13.updateSubscriptionListing;
                            var10 = {};
                            var10.guildId = var17;
                            var10.groupListingId = var16;
                            var10.listingId = var15;
                            var10.data = var14;
                            var2 = var12.bind(var13)(var10);
                        case 771:
                            SaveGenerator(address = 775);
                        case 773:
                            return var2;
                        case 775:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 10);
                            if (var10) {
                                _fun84158_ip = 854;
                                continue _fun84158
                            }
                        case 781:
                            var10 = {};
                            var10.guildId = var11;
                            var11 = var8;
                            var10.editStateId = var11;
                            var6 = function() { // Original name: updateListingPeripheralsFromEditState, environment: var6
                                var0 = undefined;
                                var3 = _closure1_slot24;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var6 = var6.bind(var5)(var10);
                            SaveGenerator(address = 811);
                        case 809:
                            return var6;
                        case 811:
                            ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 10);
                            if (var10) {
                                _fun84158_ip = 840;
                                continue _fun84158
                            }
                        case 817:
                            var9 = _closure1_slot23;
                            var8 = var9.bind(var5)(var8);
                        case 826: // try_end1 // try_end3
                            var9 = _closure2_slot0;
                            var8 = false;
                            var8 = var9.bind(var5)(var8);
                            return var7;
                        case 840:
                            var8 = _closure2_slot0;
                            var7 = false;
                            var7 = var8.bind(var5)(var7);
                            return var6;
                        case 854:
                            var6 = _closure2_slot0;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
                        case 868: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 4);
                            var3 = var4;
                            var2 = 'getAnyErrorMessage';
                            var2 = var2 in var4;
                            if (var2) {
                                _fun84158_ip = 889;
                                continue _fun84158
                            }
                        case 884:
                            var2 = var3;
                            throw var2;
                        case 889:
                            var4 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
                        case 901: // try_end4
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var5)(var2);
                            return var5;
                        case 915: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
                        case 933:
                            return var1;
                        case 936:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var1 = var0.bind(var1)();
        var0 = new Array(0);
        var1 = var4.bind(var5)(var1, var0);
        var0 = {};
        var0.loading = var3;
        var0.error = var2;
        var0.handleCreateOrUpdateFromEditState = var1;
        return var0;
    };
    var2.useCreateOrUpdateListingFromEditState = var3;
    var1 = function(arg0, arg1) { // Original name: useEditStateIds, environment: var1
        _fun84165: for (var _fun84165_ip = 0;;) switch (_fun84165_ip) {
            case 0:
                var6 = arg1;
                var5 = arguments[2];
                var _closure2_slot0 = var6;
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun84165_ip = 30;
                    continue _fun84165
                }
            case 18:
                var0 = {};
                var2 = false;
                var0.includeSoftDeleted = var2;
                var5 = var0;
            case 30:
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var7;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 17;
                var0 = var4[var0];
                var4 = var3.bind(var7)(var0);
                var3 = var4.useSubscriptionListingsForGroup;
                var0 = arg0;
                var4 = var3.bind(var4)(var0, var5);
                _closure2_slot1 = var4;
                var3 = _closure1_slot10;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.editStateIdsForGroup;
                    var0 = _closure2_slot0;
                    var0 = var1[var0];
                    return var0;
                };
                var10 = var3.bind(var7)(var0);
                _closure2_slot2 = var10;
                var3 = _closure1_slot10;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.setEditStateIdsForGroup;
                    return var0;
                };
                var5 = var3.bind(var7)(var0);
                _closure2_slot3 = var5;
                var3 = _closure1_slot10;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.setListing;
                    return var0;
                };
                var3 = var3.bind(var7)(var0);
                _closure2_slot4 = var3;
                var0 = {};
                var9 = _closure1_slot6;
                var8 = var9.useMemo;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var4;
                var4 = function() { // Environment: var1
                    _fun84169: for (var _fun84169_ip = 0;;) switch (_fun84169_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var6 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            var5 = 0;
                            var7 = var0;
                            var2 = arraySpread(var7, var6, var5);
                            var4 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun84169_ip = 55;
                                continue _fun84169
                            }
                        case 49:
                            var1 = new Array(0);
                            _fun84169_ip = 59;
                            continue _fun84169;
                        case 55:
                            var1 = _closure2_slot2;
                        case 59:
                            var7 = var0;
                            var6 = var1;
                            var5 = var2;
                            var1 = arraySpread(var7, var6, var5);
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4, var7);
                var0.editStateIds = var4;
                var9 = _closure1_slot6;
                var8 = var9.useCallback;
                var7 = new Array(2);
                var7[0] = var6;
                var7[1] = var5;
                var4 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 26;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.v4;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = function(arg0) { // Environment: var1
                        _fun84172: for (var _fun84172_ip = 0;;) switch (_fun84172_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun84172_ip = 13;
                                    continue _fun84172
                                }
                            case 9:
                                var2 = new Array(0);
                            case 13:
                                var0 = new Array(1);
                                var3 = 0;
                                var5 = var0;
                                var4 = var2;
                                var2 = arraySpread(var5, var4, var3);
                                var1 = _closure3_slot0;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var8.bind(var9)(var4, var7);
                var0.addNewEditStateId = var4;
                var8 = _closure1_slot6;
                var7 = var8.useCallback;
                var4 = new Array(3);
                var4[0] = var6;
                var4[1] = var5;
                var4[2] = var3;
                var3 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 26;
                    var0 = var4[var0];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var0);
                    var0 = var3.v4;
                    var0 = var0.bind(var3)();
                    var _closure3_slot1 = var0;
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var3 = function(arg0) { // Environment: var1
                        _fun84174: for (var _fun84174_ip = 0;;) switch (_fun84174_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun84174_ip = 13;
                                    continue _fun84174
                                }
                            case 9:
                                var2 = new Array(0);
                            case 13:
                                var0 = new Array(1);
                                var3 = 0;
                                var5 = var0;
                                var4 = var2;
                                var2 = arraySpread(var5, var4, var3);
                                var1 = _closure3_slot1;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                        }
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = var2.listings;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = _closure2_slot4;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            var0 = {};
                            var1 = _closure4_slot0;
                            var2 = var1.name;
                            var0.name = var2;
                            var2 = var1.description;
                            var0.description = var2;
                            var2 = var1.price_tier;
                            var0.priceTier = var2;
                            var2 = var1.image;
                            var0.image = var2;
                            var2 = var1.additional_perks;
                            var0.intangibleBenefits = var2;
                            var4 = var1.channels;
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.id;
                                var0.ref_id = var2;
                                var2 = _closure1_slot11;
                                var2 = var2.CHANNEL;
                                var0.ref_type = var2;
                                var2 = var1.description;
                                var0.description = var2;
                                var2 = var1.name;
                                var0.name = var2;
                                var1 = var1.emoji_name;
                                var0.emoji_name = var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            var0.channelBenefits = var2;
                            var2 = {};
                            var3 = undefined;
                            var2.unicodeEmoji = var3;
                            var3 = var1.image;
                            var2.icon = var3;
                            var0.roleIcon = var2;
                            var1 = var1.role_color;
                            var0.roleColor = var1;
                            var1 = _closure3_slot0;
                            var1 = var1.category;
                            var0.usedTemplate = var1;
                            return var0;
                        };
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var7.bind(var8)(var3, var4);
                var0.addNewEditStateFromTemplate = var3;
                var4 = _closure1_slot6;
                var3 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun84179: for (var _fun84179_ip = 0;;) switch (_fun84179_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun84179_ip = 13;
                                    continue _fun84179
                                }
                            case 9:
                                var2 = new Array(0);
                            case 13:
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = _closure3_slot0;
                                    var0 = arg0;
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.removeEditStateId = var1;
                return var0;
        }
    };
    var2.useEditStateIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4700, 3044, 10726, 5597, 660, 1615, 566, 4891, 3320, 10727, 10728, 668, 3042, 10729, 10708, 10730, 802, 44, 4642, 5586, 22, 9186, 10731, 491, 2]);