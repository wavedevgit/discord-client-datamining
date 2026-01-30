// modules/quickswitcher/QuickSwitcherStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun54753: for (var _fun54753_ip = 0;;) switch (_fun54753_ip) {
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
                _fun54753_ip = 74;
                continue _fun54753;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot38 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun54756: for (var _fun54756_ip = 0;;) switch (_fun54756_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54756_ip = 45;
                    continue _fun54756
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun54756_ip = 54;
                    continue _fun54756
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun54756_ip = 342;
                    continue _fun54756
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54756_ip = 322;
                    continue _fun54756
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54756_ip = 282;
                    continue _fun54756
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54756_ip = 269;
                    continue _fun54756
                }
            case 109:
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
                    _fun54756_ip = 162;
                    continue _fun54756
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun54756_ip = 178;
                    continue _fun54756
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54756_ip = 248;
                    continue _fun54756
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54756_ip = 248;
                    continue _fun54756
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54756_ip = 233;
                    continue _fun54756
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54756_ip = 246;
                    continue _fun54756
                }
            case 233:
                var8 = _closure1_slot40;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun54756_ip = 264;
                continue _fun54756;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun54756_ip = 282;
                continue _fun54756;
            case 269:
                var6 = _closure1_slot40;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun54756_ip = 322;
                    continue _fun54756
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun54756_ip = 329;
                    continue _fun54756
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54757: for (var _fun54757_ip = 0;;) switch (_fun54757_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54757_ip = 56;
                                continue _fun54757
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
                            _fun54757_ip = 67;
                            continue _fun54757;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun54758: for (var _fun54758_ip = 0;;) switch (_fun54758_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54758_ip = 23;
                    continue _fun54758
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54758_ip = 33;
                    continue _fun54758
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
                    _fun54758_ip = 70;
                    continue _fun54758
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54758_ip = 55;
                    continue _fun54758
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var11 = function() { // Original name: handleConnectionOpen, environment: var4
        _fun54759: for (var _fun54759_ip = 0;;) switch (_fun54759_ip) {
            case 0:
                var2 = _closure1_slot17;
                var0 = var2.getGuildCount;
                var2 = var0.bind(var2)();
                var0 = 3;
                var0 = var2 >= var0;
                if (var0) {
                    _fun54759_ip = 77;
                    continue _fun54759
                }
            case 27:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 20;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.size;
                var6 = _closure1_slot11;
                var2 = var6.getMutablePrivateChannels;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                var0 = var2 >= var3;
            case 77:
                _closure1_slot29 = var0;
                var0 = new Array(0);
                _closure1_slot34 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1 = function(arg0) { // Original name: generateResultFromId, environment: var4
        _fun54760: for (var _fun54760_ip = 0;;) switch (_fun54760_ip) {
            case 0:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = arg0;
                var1 = var1.bind(var3)(var0);
                var4 = null;
                var3 = var4 == var1;
                var0 = null;
                if (var3) {
                    _fun54760_ip = 70;
                    continue _fun54760
                }
            case 44:
                var3 = _closure1_slot30;
                if (!(var4 != var3)) {
                    _fun54760_ip = 67;
                    continue _fun54760
                }
            case 52:
                var3 = _closure1_slot30;
                var2 = var1.type;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun54760_ip = 70;
                    continue _fun54760
                }
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot41 = var1;
    var0 = function() { // Original name: generateInitialResults, environment: var4
        _fun54761: for (var _fun54761_ip = 0;;) switch (_fun54761_ip) {
            case 0:
                var3 = _closure1_slot21;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var12 = null;
                var4 = var12 != var2;
                var3 = undefined;
                var16 = undefined;
                if (!var4) {
                    _fun54761_ip = 35;
                    continue _fun54761
                }
            case 32:
                var16 = var2;
            case 35:
                var4 = _closure1_slot20;
                var2 = var4.getChannelId;
                var2 = var2.bind(var4)();
                var5 = var12 != var2;
                var4 = undefined;
                if (!var5) {
                    _fun54761_ip = 61;
                    continue _fun54761
                }
            case 58:
                var4 = var2;
            case 61:
                var _closure2_slot0 = var4;
                var5 = _closure1_slot30;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 19;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.USER;
                if (!(var2 !== var5)) {
                    _fun54761_ip = 1606;
                    continue _fun54761
                }
            case 108:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.APPLICATION;
                if (!(var2 !== var5)) {
                    _fun54761_ip = 1559;
                    continue _fun54761
                }
            case 144:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.GUILD;
                if (!(var2 !== var5)) {
                    _fun54761_ip = 1512;
                    continue _fun54761
                }
            case 180:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.TEXT_CHANNEL;
                if (!(var2 !== var5)) {
                    _fun54761_ip = 1445;
                    continue _fun54761
                }
            case 216:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.VOICE_CHANNEL;
                if (!(var2 !== var5)) {
                    _fun54761_ip = 1357;
                    continue _fun54761
                }
            case 252:
                var10 = new Array(0);
                var5 = global;
                var2 = var5.Set;
                var7 = var2.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var2
                    }
                });
                var23 = var7;
                var2 = new var23[var2](var22);
                var11 = var2 instanceof Object ? var2 : var7;
                var _closure2_slot2 = var11;
                var7 = function(arg0) { // Original name: getDrafts, environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = new Array(0);
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot12;
                    var3 = var4.getRecentlyEditedDrafts;
                    var2 = _closure1_slot13;
                    var2 = var2.ChannelMessage;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun54765: for (var _fun54765_ip = 0;;) switch (_fun54765_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.channelId;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var4);
                                if (var2) {
                                    _fun54765_ip = 68;
                                    continue _fun54765
                                }
                            case 25:
                                var2 = _closure1_slot41;
                                var5 = var2.bind(var0)(var4);
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun54765_ip = 68;
                                    continue _fun54765
                                }
                            case 43:
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var1 = {};
                                var1.record = var5;
                                var1.channelId = var4;
                                var1 = var2.bind(var3)(var1);
                            case 68:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = function(arg0) { // Environment: var0
                    _fun54766: for (var _fun54766_ip = 0;;) switch (_fun54766_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun54766_ip = 34;
                                continue _fun54766
                            }
                        case 17:
                            var4 = _closure1_slot35;
                            var2 = var4.includes;
                            var0 = var2.bind(var4)(var3);
                        case 34:
                            if (var0) {
                                _fun54766_ip = 51;
                                continue _fun54766
                            }
                        case 37:
                            var2 = _closure2_slot2;
                            var1 = var2.has;
                            var0 = var1.bind(var2)(var3);
                        case 51:
                            return var0;
                    }
                };
                var7 = var7.bind(var3)(var2);
                var2 = var7.length;
                var8 = 0;
                if (!(var2 > var8)) {
                    _fun54761_ip = 476;
                    continue _fun54761
                }
            case 317:
                var9 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var14 = var18.bind(var3)(var2);
                var13 = var14.createHeaderResult;
                var2 = 23;
                var15 = var19[var2];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["4B63jZ"];
                var2 = var15.bind(var17)(var2);
                var2 = var13.bind(var14)(var2);
                var2 = var9.bind(var10)(var2);
                var2 = _closure1_slot39;
                var9 = var2.bind(var3)(var7);
                var7 = var9.bind(var3)();
                var2 = var7.done;
                if (var2) {
                    _fun54761_ip = 476;
                    continue _fun54761
                }
            case 425:
                var2 = var7.value;
                var14 = var11.add;
                var13 = var2.channelId;
                var13 = var14.bind(var11)(var13);
                var13 = var10.push;
                var2 = var2.record;
                var2 = var13.bind(var10)(var2);
                var13 = var9.bind(var3)();
                var2 = var13.done;
                var7 = var13;
                if (!var2) {
                    _fun54761_ip = 425;
                    continue _fun54761
                }
            case 476:
                var7 = _closure1_slot19;
                var2 = var7.getMentionChannelIds;
                var9 = var2.bind(var7)();
                var7 = var9.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun54767: for (var _fun54767_ip = 0;;) switch (_fun54767_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun54767_ip = 37;
                                continue _fun54767
                            }
                        case 17:
                            var4 = _closure1_slot35;
                            var2 = var4.includes;
                            var2 = var2.bind(var4)(var3);
                            var0 = !var2;
                        case 37:
                            if (!var0) {
                                _fun54767_ip = 57;
                                continue _fun54767
                            }
                        case 40:
                            var2 = _closure2_slot2;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 57:
                            return var0;
                    }
                };
                var9 = var7.bind(var9)(var2);
                var7 = var9.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot41;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var9 = var7.bind(var9)(var2);
                var7 = var9.filter;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 24;
                var2 = var14[var2];
                var2 = var13.bind(var3)(var2);
                var2 = var2.isNotNullish;
                var7 = var7.bind(var9)(var2);
                var2 = var7.reverse;
                var7 = var2.bind(var7)();
                var2 = var7.length;
                if (!(var2 > var8)) {
                    _fun54761_ip = 737;
                    continue _fun54761
                }
            case 578:
                var9 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var14 = var18.bind(var3)(var2);
                var13 = var14.createHeaderResult;
                var2 = 23;
                var15 = var19[var2];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["61Df13"];
                var2 = var15.bind(var17)(var2);
                var2 = var13.bind(var14)(var2);
                var2 = var9.bind(var10)(var2);
                var2 = _closure1_slot39;
                var9 = var2.bind(var3)(var7);
                var7 = var9.bind(var3)();
                var2 = var7.done;
                if (var2) {
                    _fun54761_ip = 737;
                    continue _fun54761
                }
            case 686:
                var13 = var7.value;
                var14 = var11.add;
                var2 = var13.record;
                var2 = var2.id;
                var2 = var14.bind(var11)(var2);
                var2 = var10.push;
                var2 = var2.bind(var10)(var13);
                var13 = var9.bind(var3)();
                var2 = var13.done;
                var7 = var13;
                if (!var2) {
                    _fun54761_ip = 686;
                    continue _fun54761
                }
            case 737:
                var7 = var10;
                if (!(var12 != var16)) {
                    _fun54761_ip = 964;
                    continue _fun54761
                }
            case 747:
                var9 = _closure1_slot14;
                var2 = var9.getSelectableChannelIds;
                var13 = var2.bind(var9)(var16);
                var9 = var13.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun54769: for (var _fun54769_ip = 0;;) switch (_fun54769_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = _closure1_slot11;
                            var0 = var2.getChannel;
                            var3 = var0.bind(var2)(var7);
                            var4 = null;
                            var0 = var4 == var3;
                            if (var0) {
                                _fun54769_ip = 40;
                                continue _fun54769
                            }
                        case 29:
                            var2 = _closure2_slot0;
                            var0 = var7 === var2;
                        case 40:
                            if (var0) {
                                _fun54769_ip = 57;
                                continue _fun54769
                            }
                        case 43:
                            var5 = _closure1_slot35;
                            var2 = var5.includes;
                            var0 = var2.bind(var5)(var7);
                        case 57:
                            if (var0) {
                                _fun54769_ip = 77;
                                continue _fun54769
                            }
                        case 60:
                            var5 = _closure2_slot2;
                            var2 = var5.has;
                            var0 = var2.bind(var5)(var7);
                        case 77:
                            if (var0) {
                                _fun54769_ip = 101;
                                continue _fun54769
                            }
                        case 80:
                            var6 = _closure1_slot22;
                            var5 = var6.isChannelMuted;
                            var2 = var3.guild_id;
                            var0 = var5.bind(var6)(var2, var7);
                        case 101:
                            if (var0) {
                                _fun54769_ip = 147;
                                continue _fun54769
                            }
                        case 104:
                            var2 = var3.parent_id;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun54769_ip = 144;
                                continue _fun54769
                            }
                        case 117:
                            var7 = _closure1_slot22;
                            var6 = var7.isChannelMuted;
                            var5 = var3.guild_id;
                            var4 = var3.parent_id;
                            var2 = var6.bind(var7)(var5, var4);
                        case 144:
                            var0 = var2;
                        case 147:
                            var0 = !var0;
                            if (!var0) {
                                _fun54769_ip = 186;
                                continue _fun54769
                            }
                        case 153:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getHasImportantUnread;
                            var0 = var1.bind(var2)(var3);
                        case 186:
                            return var0;
                    }
                };
                var13 = var9.bind(var13)(var2);
                var9 = var13.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot41;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var13 = var9.bind(var13)(var2);
                var9 = var13.filter;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    return var0;
                };
                var9 = var9.bind(var13)(var2);
                var _closure2_slot3 = var9;
                var14 = var5.Object;
                var13 = var14.values;
                var15 = _closure1_slot8;
                var2 = var15.getActiveJoinedUnreadThreadsForGuild;
                var2 = var2.bind(var15)(var16);
                var14 = var13.bind(var14)(var2);
                var13 = var14.forEach;
                var2 = function(arg0) { // Environment: var0
                    _fun54772: for (var _fun54772_ip = 0;;) switch (_fun54772_ip) {
                        case 0:
                            var7 = arg0;
                            var0 = undefined;
                            var1 = null;
                            for (var4 in var7)
                                case 21: {
                                    case 30: var13 = var4;
                                    var9 = _closure1_slot41;
                                    var11 = var9.bind(var0)(var13);
                                    var9 = var1 == var11;
                                    if (var9) {
                                        _fun54772_ip = 74;
                                        continue _fun54772
                                    }
                                    case 49: var14 = _closure2_slot2;
                                    var12 = var14.has;
                                    var10 = var11.record;
                                    var10 = var10.id;
                                    var9 = var12.bind(var14)(var10);
                                    case 74: if (var9) {
                                        _fun54772_ip = 91;
                                        continue _fun54772
                                    }
                                    case 77: var12 = _closure1_slot35;
                                    var10 = var12.includes;
                                    var9 = var10.bind(var12)(var13);
                                    case 91: if (var9) {
                                        _fun54772_ip = 21;
                                        continue _fun54772
                                    }
                                    case 94: var10 = _closure2_slot3;
                                    var9 = var10.push;
                                    var9 = var9.bind(var10)(var11);
                                    _fun54772_ip = 21;
                                    continue _fun54772;
                                }
                        case 110:
                            return var0;
                    }
                };
                var2 = var13.bind(var14)(var2);
                var2 = var9.length;
                var7 = var10;
                if (!(var2 > var8)) {
                    _fun54761_ip = 964;
                    continue _fun54761
                }
            case 869:
                var13 = var10.push;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var6];
                var15 = var18.bind(var3)(var2);
                var14 = var15.createHeaderResult;
                var2 = 23;
                var16 = var19[var2];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var2 = var19[var2];
                var2 = var18.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.ieCAhD;
                var2 = var16.bind(var17)(var2);
                var2 = var14.bind(var15)(var2);
                var2 = var13.bind(var10)(var2);
                var2 = var10.concat;
                var7 = var2.bind(var10)(var9);
            case 964:
                var2 = var7.length;
                var9 = var2 > var8;
                var2 = 7;
                if (!var9) {
                    _fun54761_ip = 982;
                    continue _fun54761
                }
            case 979:
                var2 = 3;
            case 982:
                var13 = var5.Math;
                var10 = var13.min;
                var5 = _closure1_slot35;
                var5 = var5.length;
                var9 = 1;
                var2 = var2 + var9;
                var10 = var10.bind(var13)(var2, var5);
                var5 = new Array(0);
                var13 = var9 < var10;
                var2 = var9;
                if (!var13) {
                    _fun54761_ip = 1215;
                    continue _fun54761
                }
            case 1032:
                var14 = _closure1_slot41;
                var13 = _closure1_slot35;
                var13 = var13[var2];
                var13 = var14.bind(var3)(var13);
                if (!(var12 != var13)) {
                    _fun54761_ip = 1204;
                    continue _fun54761
                }
            case 1056:
                var15 = var13.type;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var6];
                var14 = var16.bind(var3)(var14);
                var14 = var14.AutocompleterResultTypes;
                var14 = var14.TEXT_CHANNEL;
                var14 = var15 !== var14;
                if (!var14) {
                    _fun54761_ip = 1135;
                    continue _fun54761
                }
            case 1097:
                var16 = var13.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var6];
                var15 = var17.bind(var3)(var15);
                var15 = var15.AutocompleterResultTypes;
                var15 = var15.VOICE_CHANNEL;
                var14 = var16 !== var15;
            case 1135:
                if (var14) {
                    _fun54761_ip = 1170;
                    continue _fun54761
                }
            case 1138:
                var18 = _closure1_slot18;
                var17 = var18.can;
                var15 = _closure1_slot24;
                var16 = var15.VIEW_CHANNEL;
                var15 = var13.record;
                var14 = var17.bind(var18)(var16, var15);
            case 1170:
                if (!var14) {
                    _fun54761_ip = 1204;
                    continue _fun54761
                }
            case 1173:
                var14 = var5.push;
                var14 = var14.bind(var5)(var13);
                var14 = var11.add;
                var13 = var13.record;
                var13 = var13.id;
                var13 = var14.bind(var11)(var13);
            case 1204:
                var2 = var2 + var9;
                if (var2 < var10) {
                    _fun54761_ip = 1032;
                    continue _fun54761
                }
            case 1215:
                var10 = var5.length;
                var2 = var7;
                if (!(var10 > var8)) {
                    _fun54761_ip = 1355;
                    continue _fun54761
                }
            case 1230:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = var15[var6];
                var11 = var14.bind(var3)(var6);
                var10 = var11.createHeaderResult;
                var6 = 23;
                var12 = var15[var6];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["80lOZ1"];
                var6 = var12.bind(var13)(var6);
                var10 = var10.bind(var11)(var6);
                var6 = new Array(1);
                var6[0] = var10;
                var22 = var6;
                var21 = var5;
                var20 = var9;
                var5 = arraySpread(var22, var21, var20);
                var5 = new Array(0);
                var22 = var5;
                var21 = var6;
                var20 = 0;
                var20 = arraySpread(var22, var21, var20);
                var22 = var5;
                var21 = var7;
                var6 = arraySpread(var22, var21, var20);
                var2 = var5;
            case 1355:
                return var2;
            case 1357:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryChannels;
                var2 = {
                    'query': '',
                    'guildId': null,
                    'limit': 100,
                    'fuzzy': true,
                    'filter': null,
                    'type': null,
                    'allowEmptyQueries': true
                };
                var8 = _closure1_slot21;
                var7 = var8.getGuildId;
                var7 = var7.bind(var8)();
                var2.guildId = var7;
                var7 = function() { // Original name: filter, environment: var0
                    var0 = true;
                    return var0;
                };
                var2.filter = var7;
                var7 = _closure1_slot15;
                var2.type = var7;
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1445:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryChannels;
                var2 = {
                    'query': '',
                    'guildId': null,
                    'limit': 100,
                    'fuzzy': true,
                    'allowEmptyQueries': true
                };
                var8 = _closure1_slot21;
                var7 = var8.getGuildId;
                var7 = var7.bind(var8)();
                var2.guildId = var7;
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1512:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryGuilds;
                var2 = {
                    'query': '',
                    'limit': 100,
                    'fuzzy': true
                };
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1559:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.queryApplications;
                var2 = {
                    'query': '',
                    'limit': 100,
                    'fuzzy': true
                };
                var2 = var5.bind(var6)(var2);
                return var2;
            case 1606:
                var5 = _closure1_slot10;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                var _closure2_slot1 = var2;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 22;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getRecentlyTalked;
                var1 = 100;
                var2 = var2.bind(var3)(var4, var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.record;
                    var1 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0, arg1) { // Original name: updateResults, environment: var4
        _fun54773: for (var _fun54773_ip = 0;;) switch (_fun54773_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var6 = _closure1_slot30;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 19;
                var5 = var0[var4];
                var0 = undefined;
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.USER;
                if (!(var5 !== var6)) {
                    _fun54773_ip = 592;
                    continue _fun54773
                }
            case 54:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.TEXT_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun54773_ip = 495;
                    continue _fun54773
                }
            case 90:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.VOICE_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun54773_ip = 398;
                    continue _fun54773
                }
            case 126:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.GUILD;
                if (!(var5 !== var6)) {
                    _fun54773_ip = 301;
                    continue _fun54773
                }
            case 162:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.APPLICATION;
                if (!(var5 !== var6)) {
                    _fun54773_ip = 204;
                    continue _fun54773
                }
            case 195:
                _closure1_slot31 = var3;
                _fun54773_ip = 797;
                continue _fun54773;
            case 204:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.VwK1ld;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54773_ip = 797;
                continue _fun54773;
            case 301:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.olADPs;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54773_ip = 797;
                continue _fun54773;
            case 398:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.zUoI5C;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54773_ip = 797;
                continue _fun54773;
            case 495:
                var6 = var3.unshift;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var4];
                var8 = var11.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.W26k4V;
                var5 = var9.bind(var10)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
                _fun54773_ip = 797;
                continue _fun54773;
            case 592:
                var7 = _closure1_slot17;
                var6 = var7.getGuild;
                var8 = _closure1_slot21;
                var5 = var8.getGuildId;
                var5 = var5.bind(var8)();
                var13 = var6.bind(var7)(var5);
                var6 = var3.unshift;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var8 = var7.bind(var0)(var5);
                var7 = var8.createHeaderResult;
                var5 = null;
                if (!(var5 == var13)) {
                    _fun54773_ip = 714;
                    continue _fun54773
                }
            case 655:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 23;
                var9 = var12[var5];
                var9 = var11.bind(var0)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var12[var5];
                var5 = var11.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.XFYW1o;
                var5 = var9.bind(var10)(var5);
                _fun54773_ip = 783;
                continue _fun54773;
            case 714:
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 23;
                var11 = var14[var9];
                var11 = var10.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var9 = var14[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.t;
                var10 = var9.FREzQs;
                var9 = {};
                var13 = var13.name;
                var9.name = var13;
                var5 = var11.bind(var12)(var10, var9);
            case 783:
                var5 = var7.bind(var8)(var5);
                var5 = var6.bind(var3)(var5);
                _closure1_slot31 = var3;
            case 797:
                var3 = _closure1_slot32;
                if (!(var2 === var3)) {
                    _fun54773_ip = 938;
                    continue _fun54773
                }
            case 808:
                var5 = _closure1_slot31;
                var3 = _closure1_slot27;
                var5 = var5[var3];
                var3 = null;
                var3 = var3 != var5;
                if (!var3) {
                    _fun54773_ip = 867;
                    continue _fun54773
                }
            case 829:
                var6 = var5.type;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AutocompleterResultTypes;
                var5 = var5.HEADER;
                var3 = var6 === var5;
            case 867:
                if (!var3) {
                    _fun54773_ip = 1039;
                    continue _fun54773
                }
            case 873:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = var3[var4];
                var8 = var5.bind(var0)(var6);
                var7 = var8.findNextSelectedResult;
                var3 = var3[var4];
                var3 = var5.bind(var0)(var3);
                var3 = var3.FindResultDirections;
                var6 = var3.DOWN;
                var5 = _closure1_slot27;
                var3 = _closure1_slot31;
                var3 = var7.bind(var8)(var6, var5, var3);
                _closure1_slot27 = var3;
                _fun54773_ip = 1039;
                continue _fun54773;
            case 938:
                _closure1_slot32 = var2;
                var3 = global;
                var6 = var3.Math;
                var5 = var6.max;
                var3 = var2.length;
                var2 = _closure1_slot33;
                var2 = var5.bind(var6)(var3, var2);
                _closure1_slot33 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = var2[var4];
                var6 = var3.bind(var0)(var5);
                var5 = var6.findNextSelectedResult;
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var2 = var2.FindResultDirections;
                var4 = var2.DOWN;
                var3 = _closure1_slot31;
                var2 = -1;
                var2 = var5.bind(var6)(var4, var2, var3);
                _closure1_slot27 = var2;
            case 1039:
                var2 = _closure1_slot37;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var10 = function(arg0) { // Original name: handleQuickSwitcherShow, environment: var4
        _fun54774: for (var _fun54774_ip = 0;;) switch (_fun54774_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var2 = var0.queryMode;
                var0 = var1.trim;
                var3 = var0.bind(var1)();
                var4 = _closure1_slot21;
                var0 = var4.getGuildId;
                var5 = var0.bind(var4)();
                var4 = null;
                var6 = var4 != var5;
                var0 = undefined;
                var10 = undefined;
                if (!var6) {
                    _fun54774_ip = 58;
                    continue _fun54774
                }
            case 55:
                var10 = var5;
            case 58:
                var6 = global;
                var8 = var6.Set;
                var7 = _closure1_slot10;
                var5 = var7.getId;
                var9 = var5.bind(var7)();
                var5 = var6.HermesInternal;
                var7 = var5.concat;
                var5 = 'user:';
                var7 = var7.bind(var5)(var9);
                var5 = new Array(1);
                var5[0] = var7;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var17 = var7;
                var16 = var5;
                var5 = new var17[var8](var16, var15);
                var5 = var5 instanceof Object ? var5 : var7;
                if (!(var4 != var10)) {
                    _fun54774_ip = 169;
                    continue _fun54774
                }
            case 137:
                var8 = var5.add;
                var7 = var6.HermesInternal;
                var9 = var7.concat;
                var7 = 'guild:';
                var7 = var9.bind(var7)(var10);
                var7 = var8.bind(var5)(var7);
            case 169:
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                _closure1_slot36 = var6;
                var6 = _closure1_slot25;
                if (!(var4 == var6)) {
                    _fun54774_ip = 294;
                    continue _fun54774
                }
            case 196:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var6 = var8[var6];
                var11 = var7.bind(var0)(var6);
                var10 = _closure1_slot44;
                var9 = _closure1_slot26;
                var6 = var4 != var2;
                var8 = 5;
                if (!var6) {
                    _fun54774_ip = 237;
                    continue _fun54774
                }
            case 234:
                var8 = 100;
            case 237:
                var7 = {
                    'frecencyBoosters': true,
                    'blacklist': null,
                    'allowSnowflake': true
                };
                var7.blacklist = var5;
                var5 = var11.prototype;
                var6 = Object.create(var5, {
                    constructor: {
                        value: var11
                    }
                });
                var12 = 100;
                var17 = var6;
                var16 = var10;
                var15 = var9;
                var14 = var8;
                var13 = var7;
                var5 = new var17[var11](var16, var15, var14, var13, var12, var11);
                var5 = var5 instanceof Object ? var5 : var6;
                _fun54774_ip = 298;
                continue _fun54774;
            case 294:
                var5 = _closure1_slot25;
            case 298:
                var _closure1_slot25 = var5;
                _closure1_slot32 = var4;
                var4 = var3.length;
                _closure1_slot33 = var4;
                _closure1_slot30 = var2;
                var2 = _closure1_slot25;
                var1 = var2.search;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var0 = function(arg0, arg1) { // Original name: handleUserSearchUpdate, environment: var4
        _fun54775: for (var _fun54775_ip = 0;;) switch (_fun54775_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var1.trim;
                var2 = var0.bind(var1)();
                var0 = var2.trim;
                var1 = var0.bind(var2)();
                var0 = '';
                if (!(var0 === var1)) {
                    _fun54775_ip = 47;
                    continue _fun54775
                }
            case 34:
                var1 = _closure1_slot42;
                var0 = undefined;
                var3 = var1.bind(var0)();
            case 47:
                var8 = _closure1_slot34;
                var5 = var3.length;
                var4 = var8.length;
                var1 = false;
                if (!(var5 === var4)) {
                    _fun54775_ip = 139;
                    continue _fun54775
                }
            case 70:
                var4 = var3.length;
                var6 = 0;
                var4 = var6 < var4;
                var1 = true;
                if (!var4) {
                    _fun54775_ip = 139;
                    continue _fun54775
                }
            case 86:
                var9 = var3[var6];
                var4 = var8[var6];
                var9 = var9.record;
                var9 = var9.id;
                var4 = var4.record;
                var4 = var4.id;
                var1 = false;
                if (!(var9 === var4)) {
                    _fun54775_ip = 139;
                    continue _fun54775
                }
            case 122:
                var6 = var6 + 1;
                var4 = var3.length;
                var4 = var6 < var4;
                var1 = true;
                if (var4) {
                    _fun54775_ip = 86;
                    continue _fun54775
                }
            case 139:
                if (var1) {
                    _fun54775_ip = 158;
                    continue _fun54775
                }
            case 142:
                _closure1_slot34 = var3;
                var1 = _closure1_slot43;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 158:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var7 = function() { // Original name: handleQuickSwitcherHide, environment: var4
        _fun54776: for (var _fun54776_ip = 0;;) switch (_fun54776_ip) {
            case 0:
                var0 = null;
                _closure1_slot32 = var0;
                var2 = 0;
                _closure1_slot33 = var2;
                var2 = new Array(0);
                _closure1_slot34 = var2;
                var2 = _closure1_slot25;
                if (!(var0 != var2)) {
                    _fun54776_ip = 49;
                    continue _fun54776
                }
            case 31:
                var3 = _closure1_slot25;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                _closure1_slot25 = var0;
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var12 = var0.Object;
    var9 = var12.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var12)(var2, var0, var3);
    var9 = 0;
    var3 = var6[var9];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var12 = var6[var3];
    var12 = var8.bind(var0)(var12);
    var _closure1_slot12 = var12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot13 = var3;
    var3 = 10;
    var12 = var6[var3];
    var12 = var8.bind(var0)(var12);
    var _closure1_slot14 = var12;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 16;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 17;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 18;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var12 = var3.CHANNEL_NOTICE_SHOW_DELAY;
    var _closure1_slot23 = var12;
    var3 = var3.Permissions;
    var _closure1_slot24 = var3;
    var12 = 19;
    var3 = var6[var12];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AutocompleterResultTypes;
    var13 = var3.USER;
    var3 = new Array(7);
    var3[0] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.GROUP_DM;
    var3[1] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.TEXT_CHANNEL;
    var3[2] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.GUILD;
    var3[3] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.APPLICATION;
    var3[4] = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.LINK;
    var3[5] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.AutocompleterResultTypes;
    var12 = var12.IN_APP_NAVIGATION;
    var3[6] = var12;
    var _closure1_slot26 = var3;
    var _closure1_slot27 = var9;
    var3 = false;
    var _closure1_slot28 = var3;
    var _closure1_slot29 = var3;
    var3 = null;
    var _closure1_slot30 = var3;
    var12 = new Array(0);
    var _closure1_slot31 = var12;
    var _closure1_slot32 = var3;
    var _closure1_slot33 = var9;
    var9 = new Array(0);
    var _closure1_slot34 = var9;
    var9 = new Array(0);
    var _closure1_slot35 = var9;
    var _closure1_slot36 = var3;
    var3 = 27;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: QuickSwitcherStoreClass, environment: var5
            _fun54778: for (var _fun54778_ip = 0;;) switch (_fun54778_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot38;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54778_ip = 69;
                        continue _fun54778
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54778_ip = 105;
                    continue _fun54778;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun54779: for (var _fun54779_ip = 0;;) switch (_fun54779_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var16 = var5.waitFor;
                    var29 = _closure1_slot8;
                    var28 = _closure1_slot10;
                    var27 = _closure1_slot11;
                    var26 = _closure1_slot12;
                    var25 = _closure1_slot14;
                    var24 = _closure1_slot16;
                    var23 = _closure1_slot17;
                    var22 = _closure1_slot18;
                    var21 = _closure1_slot19;
                    var20 = _closure1_slot20;
                    var19 = _closure1_slot21;
                    var0 = _closure1_slot9;
                    var17 = _closure1_slot22;
                    var30 = var5;
                    var18 = var0;
                    var1 = var30[var16](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                    var3 = var5.syncWith;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var0 = true;
                        return var0;
                    };
                    var0 = var3.bind(var5)(var1, var0);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var5 = var1.Storage;
                    var3 = var5.get;
                    var1 = 'seenQSTutorial';
                    var1 = var3.bind(var5)(var1);
                    if (var1) {
                        _fun54779_ip = 153;
                        continue _fun54779
                    }
                case 151:
                    var1 = false;
                case 153:
                    _closure1_slot28 = var1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun54779_ip = 174;
                        continue _fun54779
                    }
                case 168:
                    var1 = var4.channelHistory;
                case 174:
                    if (!(var3 == var1)) {
                        _fun54779_ip = 182;
                        continue _fun54779
                    }
                case 178:
                    var1 = new Array(0);
                case 182:
                    _closure1_slot35 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot35;
            var0.channelHistory = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isOpen';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot25;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getResultTotals';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun54783: for (var _fun54783_ip = 0;;) switch (_fun54783_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var0 = _closure1_slot25;
                    var1 = null;
                    var6 = var1 == var0;
                    var5 = 0;
                    var0 = 0;
                    if (var6) {
                        _fun54783_ip = 92;
                        continue _fun54783
                    }
                case 29:
                    if (!(var1 != var4)) {
                        _fun54783_ip = 62;
                        continue _fun54783
                    }
                case 33:
                    var1 = _closure1_slot25;
                    var6 = var1.results;
                    var4 = var6.reduce;
                    var1 = function(arg0, arg1) { // Environment: var2
                        _fun54785: for (var _fun54785_ip = 0;;) switch (_fun54785_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                var3 = var0.type;
                                var1 = _closure3_slot0;
                                var0 = var2;
                                if (!(var3 === var1)) {
                                    _fun54785_ip = 32;
                                    continue _fun54785
                                }
                            case 25:
                                var1 = 1;
                                var0 = var2 + var1;
                            case 32:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var6)(var1, var5);
                    _fun54783_ip = 89;
                    continue _fun54783;
                case 62:
                    var3 = _closure1_slot25;
                    var4 = var3.results;
                    var3 = var4.reduce;
                    var2 = function(arg0, arg1) { // Environment: var2
                        _fun54784: for (var _fun54784_ip = 0;;) switch (_fun54784_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                var3 = var0.type;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 19;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var1);
                                var0 = var0.AutocompleterResultTypes;
                                var1 = var0.HEADER;
                                var0 = var2;
                                if (!(var3 !== var1)) {
                                    _fun54784_ip = 62;
                                    continue _fun54784
                                }
                            case 55:
                                var1 = 1;
                                var0 = var2 + var1;
                            case 62:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var5);
                case 89:
                    var0 = var1;
                case 92:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'channelNoticePredicate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun54786: for (var _fun54786_ip = 0;;) switch (_fun54786_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = arg1;
                    var2 = var1 - var0;
                    var1 = _closure1_slot23;
                    var1 = var2 >= var1;
                    var0 = _closure1_slot29;
                    if (!var0) {
                        _fun54786_ip = 45;
                        continue _fun54786
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFrequentGuilds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun54787: for (var _fun54787_ip = 0;;) switch (_fun54787_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun54787_ip = 39;
                        continue _fun54787
                    }
                case 16:
                    var4 = _closure1_slot25;
                    var3 = var4.queryGuilds;
                    var2 = '';
                    var1 = 100;
                    var0 = var3.bind(var4)(var2, var1);
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFrequentGuildsLength';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun54788: for (var _fun54788_ip = 0;;) switch (_fun54788_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun54788_ip = 46;
                        continue _fun54788
                    }
                case 18:
                    var4 = _closure1_slot25;
                    var3 = var4.queryGuilds;
                    var2 = '';
                    var1 = 100;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = var1.length;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getChannelHistory';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot35;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getLastShowTimestamp';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot36;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun54791: for (var _fun54791_ip = 0;;) switch (_fun54791_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.theme;
                    var0.theme = var2;
                    var3 = _closure1_slot25;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = '';
                    if (!var3) {
                        _fun54791_ip = 47;
                        continue _fun54791
                    }
                case 37:
                    var3 = _closure1_slot25;
                    var2 = var3.query;
                case 47:
                    var0.query = var2;
                    var2 = _closure1_slot30;
                    var0.queryMode = var2;
                    var2 = _closure1_slot31;
                    var0.results = var2;
                    var2 = _closure1_slot27;
                    var0.selectedIndex = var2;
                    var2 = _closure1_slot28;
                    var0.seenTutorial = var2;
                    var1 = _closure1_slot33;
                    var0.maxQueryLength = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'QuickSwitcherStore';
    var9.displayName = var3;
    var9.persistKey = var3;
    var3 = 28;
    var3 = var6[var3];
    var16 = var8.bind(var0)(var3);
    var3 = {};
    var3.CONNECTION_OPEN = var11;
    var3.CONNECTION_OPEN_SUPPLEMENTAL = var11;
    var3.QUICKSWITCHER_SHOW = var10;
    var3.SHOW_ACTION_SHEET_QUICK_SWITCHER = var10;
    var3.QUICKSWITCHER_HIDE = var7;
    var3.OVERLAY_SET_INPUT_LOCKED = var7;
    var3.HIDE_ACTION_SHEET_QUICK_SWITCHER = var7;
    var7 = function(arg0) { // Original name: handleQuickSwitcherSearch, environment: var4
        _fun54792: for (var _fun54792_ip = 0;;) switch (_fun54792_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var5 = var0.queryMode;
                var0 = var1.trim;
                var4 = var0.bind(var1)();
                var0 = _closure1_slot25;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun54792_ip = 416;
                    continue _fun54792
                }
            case 41:
                var0 = _closure1_slot30;
                if (!(var0 !== var5)) {
                    _fun54792_ip = 312;
                    continue _fun54792
                }
            case 52:
                var6 = _closure1_slot25;
                var2 = var6.setResultTypes;
                if (!(var3 == var5)) {
                    _fun54792_ip = 72;
                    continue _fun54792
                }
            case 66:
                var0 = _closure1_slot26;
                _fun54792_ip = 83;
                continue _fun54792;
            case 72:
                var7 = new Array(1);
                var7[0] = var5;
                var0 = var7;
            case 83:
                var0 = var2.bind(var6)(var0);
                var6 = _closure1_slot25;
                var2 = var6.setLimit;
                var7 = var3 != var5;
                var0 = 5;
                if (!var7) {
                    _fun54792_ip = 111;
                    continue _fun54792
                }
            case 108:
                var0 = 100;
            case 111:
                var0 = var2.bind(var6)(var0);
                var2 = _closure1_slot21;
                var0 = var2.getGuildId;
                var6 = var0.bind(var2)();
                var7 = var3 != var6;
                var2 = undefined;
                var0 = undefined;
                if (!var7) {
                    _fun54792_ip = 144;
                    continue _fun54792
                }
            case 141:
                var0 = var6;
            case 144:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 19;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.AutocompleterResultTypes;
                var6 = var6.USER;
                if (!(var5 === var6)) {
                    _fun54792_ip = 184;
                    continue _fun54792
                }
            case 180:
                if (!(var3 == var0)) {
                    _fun54792_ip = 276;
                    continue _fun54792
                }
            case 184:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.AutocompleterResultTypes;
                var6 = var6.VOICE_CHANNEL;
                if (!(var5 !== var6)) {
                    _fun54792_ip = 249;
                    continue _fun54792
                }
            case 217:
                var8 = _closure1_slot25;
                var7 = var8.setOptions;
                var6 = {};
                var6.userFilters = var3;
                var6.voiceChannelGuildFilter = var2;
                var2 = true;
                var2 = var7.bind(var8)(var6, var2);
                _fun54792_ip = 312;
                continue _fun54792;
            case 249:
                var8 = _closure1_slot25;
                var7 = var8.setOptions;
                var6 = {};
                var6.voiceChannelGuildFilter = var3;
                var2 = true;
                var2 = var7.bind(var8)(var6, var2);
                _fun54792_ip = 312;
                continue _fun54792;
            case 276:
                var7 = _closure1_slot25;
                var6 = var7.setOptions;
                var2 = {};
                var8 = {};
                var8.guild = var0;
                var0 = true;
                var8.friends = var0;
                var2.userFilters = var8;
                var0 = var6.bind(var7)(var2, var0);
            case 312:
                _closure1_slot30 = var5;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var2 = var2.AutocompleterResultTypes;
                var2 = var2.USER;
                if (!(var5 !== var2)) {
                    _fun54792_ip = 372;
                    continue _fun54792
                }
            case 354:
                var5 = _closure1_slot25;
                var2 = var5.search;
                var2 = var2.bind(var5)(var4, var0);
                _fun54792_ip = 414;
                continue _fun54792;
            case 372:
                var5 = _closure1_slot21;
                var2 = var5.getGuildId;
                var2 = var2.bind(var5)();
                var5 = var3 != var2;
                var3 = null;
                if (!var5) {
                    _fun54792_ip = 398;
                    continue _fun54792
                }
            case 395:
                var3 = var2;
            case 398:
                var2 = _closure1_slot25;
                var1 = var2.search;
                var1 = var1.bind(var2)(var4, var3);
            case 414:
                return var0;
            case 416:
                var0 = false;
                return var0;
        }
    };
    var3.QUICKSWITCHER_SEARCH = var7;
    var7 = function(arg0) { // Original name: handleQuickSwitcherSelect, environment: var4
        var0 = arg0;
        var1 = var0.selectedIndex;
        _closure1_slot27 = var1;
        var0 = undefined;
        return var0;
    };
    var3.QUICKSWITCHER_SELECT = var7;
    var7 = function() { // Original name: handleQuickSwitcherSwitchTo, environment: var4
        _fun54794: for (var _fun54794_ip = 0;;) switch (_fun54794_ip) {
            case 0:
                var1 = _closure1_slot28;
                if (var1) {
                    _fun54794_ip = 63;
                    continue _fun54794
                }
            case 10:
                var4 = true;
                _closure1_slot28 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 26;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'seenQSTutorial';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            case 63:
                var0 = false;
                return var0;
        }
    };
    var3.QUICKSWITCHER_SWITCH_TO = var7;
    var7 = function(arg0) { // Original name: handleChannelSelect, environment: var4
        _fun54795: for (var _fun54795_ip = 0;;) switch (_fun54795_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun54795_ip = 87;
                    continue _fun54795
                }
            case 20:
                var4 = _closure1_slot35;
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                _closure1_slot35 = var2;
                var1 = var2.unshift;
                var1 = var1.bind(var2)(var3);
                var1 = _closure1_slot35;
                var2 = var1.length;
                var1 = 8;
                if (!(var2 > var1)) {
                    _fun54795_ip = 83;
                    continue _fun54795
                }
            case 73:
                var0 = _closure1_slot35;
                var0.length = var1;
            case 83:
                var0 = undefined;
                return var0;
            case 87:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var17 = var7;
    var15 = var3;
    var3 = new var17[var9](var16, var15, var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot37 = var3;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quickswitcher/QuickSwitcherStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.generateResultFromId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4513, 3155, 1216, 1372, 3960, 1662, 1672, 1410, 3050, 3907, 1661, 3172, 4266, 660, 6586, 22, 6594, 5552, 1234, 1304, 6595, 587, 566, 806, 2]);