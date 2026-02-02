// modules/guild_role_subscriptions/native/RoleTierEditStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function arg0, arg1() {
        _fun116593: for (var _fun116593_ip = 0;;) switch (_fun116593_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun116593_ip = 46;
                    continue _fun116593
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun116593_ip = 55;
                    continue _fun116593
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun116593_ip = 345;
                    continue _fun116593
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun116593_ip = 323;
                    continue _fun116593
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun116593_ip = 283;
                    continue _fun116593
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun116593_ip = 270;
                    continue _fun116593
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
                    _fun116593_ip = 163;
                    continue _fun116593
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun116593_ip = 179;
                    continue _fun116593
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun116593_ip = 249;
                    continue _fun116593
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun116593_ip = 249;
                    continue _fun116593
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun116593_ip = 234;
                    continue _fun116593
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun116593_ip = 247;
                    continue _fun116593
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun116593_ip = 265;
                continue _fun116593;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun116593_ip = 283;
                continue _fun116593;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun116593_ip = 323;
                    continue _fun116593
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
                    _fun116593_ip = 330;
                    continue _fun116593
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun116594: for (var _fun116594_ip = 0;;) switch (_fun116594_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun116594_ip = 56;
                                continue _fun116594
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
                            _fun116594_ip = 67;
                            continue _fun116594;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun116595: for (var _fun116595_ip = 0;;) switch (_fun116595_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun116595_ip = 23;
                    continue _fun116595
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun116595_ip = 33;
                    continue _fun116595
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
                    _fun116595_ip = 70;
                    continue _fun116595
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun116595_ip = 55;
                    continue _fun116595
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var3 = _closure2_slot1;
                var0 = _closure3_slot0;
                var1[var3] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot8;
        var3 = _closure1_slot0;
        var8 = _closure1_slot3;
        var2 = 5;
        var2 = var8[var2];
        var6 = undefined;
        var2 = var3.bind(var6)(var2);
        var3 = var2.shallow;
        var2 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.priceTiers;
            var0 = new Array(3);
            var0[0] = var2;
            var2 = var1.priceTierState;
            var0[1] = var2;
            var1 = var1.loadPriceTiers;
            var0[2] = var1;
            return var0;
        };
        var4 = var4.bind(var6)(var2, var3);
        var3 = _closure1_slot4;
        var2 = 3;
        var7 = var3.bind(var6)(var4, var2);
        var2 = 0;
        var4 = var7[var2];
        var _closure2_slot1 = var4;
        var2 = 1;
        var3 = var7[var2];
        var _closure2_slot2 = var3;
        var2 = 2;
        var2 = var7[var2];
        var _closure2_slot3 = var2;
        var2 = function arg0() {
            _fun116601: for (var _fun116601_ip = 0;;) switch (_fun116601_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 == var2;
                    if (!var1) {
                        _fun116601_ip = 37;
                        continue _fun116601
                    }
                case 16:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot6;
                    var2 = var2.LOADING;
                    var1 = var3 !== var2;
                case 37:
                    if (!var1) {
                        _fun116601_ip = 54;
                        continue _fun116601
                    }
                case 40:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot4 = var2;
        var7 = _closure1_slot1;
        var5 = 6;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var0 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var5.bind(var6)(var0);
        var0 = {};
        var0.tiers = var4;
        var0.state = var3;
        var0.onRefresh = var2;
        var0.guildId = var1;
        return var0;
    };
    var _closure1_slot12 = var3;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var10 = 0;
    var5 = var8[var10];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var9 = 1;
    var5 = var8[var9];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = {};
    var5.IDLE = var10;
    var6 = 'IDLE';
    var5[var10] = var6;
    var5.LOADING = var9;
    var6 = 'LOADING';
    var5[var9] = var6;
    var9 = 2;
    var5.ERROR = var9;
    var6 = 'ERROR';
    var5[var9] = var6;
    var _closure1_slot6 = var5;
    var9 = var4.Object;
    var6 = var9.freeze;
    var4 = {
        'currentScene': null,
        'groupCover': null,
        'groupDescription': '',
        'groupIsFullGate': false
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var8[var4];
    var9 = var7.bind(var0)(var4);
    var6 = var9.createWithEqualityFn;
    var4 = function(arg0) { // Environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var0 = {};
        var8 = _closure1_slot7;
        var9 = var0;
        var3 = copyDataProperties(var9, var8);
        var4 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.currentScene = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var3 = 'setScene';
        var0[var3] = var4;
        var5 = _closure1_slot11;
        var4 = undefined;
        var3 = 'groupCover';
        var7 = var5.bind(var4)(var6, var3);
        var3 = 'setGroupCover';
        var0[var3] = var7;
        var3 = 'groupDescription';
        var7 = var5.bind(var4)(var6, var3);
        var3 = 'setGroupDescription';
        var0[var3] = var7;
        var3 = 'groupIsFullGate';
        var4 = var5.bind(var4)(var6, var3);
        var3 = 'setGroupIsFullGate';
        var0[var3] = var4;
        var4 = null;
        var3 = 'priceTiers';
        var0[var3] = var4;
        var2 = _closure1_slot6;
        var3 = var2.IDLE;
        var2 = 'priceTierState';
        var0[var2] = var3;
        var3 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot5;
            var1 = undefined;
            var0 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun116608: for (var _fun116608_ip = 0;;) switch (_fun116608_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun116608_ip = 193;
                                continue _fun116608
                            }
                        case 12:
                            var1 = undefined;
                            var _closure5_slot0 = var1;
                        case 18: // try_start_0
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var6 = 2;
                            var3 = var7[var6];
                            var8 = var5.bind(var1)(var3);
                            var5 = var8.batchUpdates;
                            var3 = function() { // Environment: var2
                                var2 = _closure2_slot0;
                                var1 = {};
                                var0 = _closure1_slot6;
                                var0 = var0.LOADING;
                                var1.priceTierState = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3 = var5.bind(var8)(var3);
                            var5 = _closure1_slot2;
                            var3 = 4;
                            var3 = var7[var3];
                            var7 = var5.bind(var1)(var3);
                            var5 = var7.getPriceTiers;
                            var3 = _closure3_slot0;
                            var3 = var5.bind(var7)(var3);
                            SaveGenerator(address = 97);
                        case 95:
                            return var3;
                        case 97:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                            if (var5) {
                                _fun116608_ip = 144;
                                continue _fun116608
                            }
                        case 103:
                            _closure5_slot0 = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var4 = var4[var6];
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.batchUpdates;
                            var4 = function() { // Environment: var2
                                var2 = _closure2_slot0;
                                var1 = {};
                                var0 = _closure5_slot0;
                                var1.priceTiers = var0;
                                var0 = _closure1_slot6;
                                var0 = var0.IDLE;
                                var1.priceTierState = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                        case 142: // try_end0
                            _fun116608_ip = 190;
                            continue _fun116608;
                        case 144:
                            return var3;
                        case 147: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 2;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() { // Environment: var2
                                var2 = _closure2_slot0;
                                var1 = {};
                                var0 = _closure1_slot6;
                                var0 = var0.ERROR;
                                var1.priceTierState = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                        case 190:
                            return var1;
                        case 193:
                            return var0;
                    }
                };
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = 'loadPriceTiers';
        var0[var2] = var3;
        var2 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = 'reset';
        var0[var1] = var2;
        return var0;
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_role_subscriptions/native/RoleTierEditStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.LoadingState = var5;
    var2.useRoleTierEditStore = var4;
    var4 = function() {
        var1 = _closure1_slot8;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var1 = var0.reset;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var2.resetImperatively = var4;
    var4 = function() {
        var1 = _closure1_slot8;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var2 = var1.currentScene;
        var0 = new Array(2);
        var0[0] = var2;
        var1 = var1.setScene;
        var0[1] = var1;
        return var0;
    };
    var2.useCurrentTierEditScene = var4;
    var4 = function() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.reset;
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useResetTierEditState = var4;
    var2.usePriceTiers = var3;
    var3 = function arg0() {
        _fun116618: for (var _fun116618_ip = 0;;) switch (_fun116618_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot12;
                var3 = undefined;
                var1 = var1.bind(var3)(var8);
                var6 = var1.tiers;
                var2 = var1.state;
                var1 = var1.onRefresh;
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 7;
                var5 = var9[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useSubscriptionListingsForGuild;
                var5 = var5.bind(var7)(var8);
                var7 = global;
                var7 = var7.Set;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = var8;
                var7 = new var12[var7](var11);
                var9 = var7 instanceof Object ? var7 : var8;
                var _closure2_slot0 = var9;
                var0 = _closure1_slot9;
                var8 = var0.bind(var3)(var5);
                var5 = var8.bind(var3)();
                var0 = var5.done;
                var7 = 0;
                if (var0) {
                    _fun116618_ip = 168;
                    continue _fun116618
                }
            case 122:
                var0 = var5.value;
                var10 = var9.add;
                var0 = var0.subscription_plans;
                var0 = var0[var7];
                var0 = var0.price;
                var0 = var10.bind(var9)(var0);
                var10 = var8.bind(var3)();
                var0 = var10.done;
                var5 = var10;
                if (!var0) {
                    _fun116618_ip = 122;
                    continue _fun116618
                }
            case 168:
                var0 = {};
                var5 = null;
                var5 = var5 == var6;
                var3 = undefined;
                if (var5) {
                    _fun116618_ip = 198;
                    continue _fun116618
                }
            case 181:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var4
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var4);
            case 198:
                var0.tiers = var3;
                var0.state = var2;
                var0.onRefresh = var1;
                return var0;
        }
    };
    var2.usePriceTiersAvailableInGuild = var3;
    var3 = function() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.groupCover;
            var1 = var0.setGroupCover;
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useGroupCoverState = var3;
    var3 = function() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.groupDescription;
            var1 = var0.setGroupDescription;
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useGroupDescriptionState = var3;
    var1 = function() {
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.groupIsFullGate;
            var1 = var0.setGroupIsFullGate;
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useGroupIsFullGateState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 802, 797, 5589, 3037, 4064, 10710, 2]);