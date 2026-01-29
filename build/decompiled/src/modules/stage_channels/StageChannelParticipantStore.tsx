// modules/stage_channels/StageChannelParticipantStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun38621: for (var _fun38621_ip = 0;;) switch (_fun38621_ip) {
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
                _fun38621_ip = 74;
                continue _fun38621;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun38624: for (var _fun38624_ip = 0;;) switch (_fun38624_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38624_ip = 45;
                    continue _fun38624
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun38624_ip = 54;
                    continue _fun38624
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun38624_ip = 342;
                    continue _fun38624
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun38624_ip = 322;
                    continue _fun38624
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun38624_ip = 282;
                    continue _fun38624
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun38624_ip = 269;
                    continue _fun38624
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
                    _fun38624_ip = 162;
                    continue _fun38624
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun38624_ip = 178;
                    continue _fun38624
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun38624_ip = 248;
                    continue _fun38624
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun38624_ip = 248;
                    continue _fun38624
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun38624_ip = 233;
                    continue _fun38624
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun38624_ip = 246;
                    continue _fun38624
                }
            case 233:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun38624_ip = 264;
                continue _fun38624;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun38624_ip = 282;
                continue _fun38624;
            case 269:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun38624_ip = 322;
                    continue _fun38624
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
                    _fun38624_ip = 329;
                    continue _fun38624
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun38625: for (var _fun38625_ip = 0;;) switch (_fun38625_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun38625_ip = 56;
                                continue _fun38625
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
                            _fun38625_ip = 67;
                            continue _fun38625;
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
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun38626: for (var _fun38626_ip = 0;;) switch (_fun38626_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun38626_ip = 23;
                    continue _fun38626
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun38626_ip = 33;
                    continue _fun38626
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
                    _fun38626_ip = 70;
                    continue _fun38626
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun38626_ip = 55;
                    continue _fun38626
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: getGuildId, environment: var3
        _fun38627: for (var _fun38627_ip = 0;;) switch (_fun38627_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getGuildId;
                var0 = var0.bind(var1)();
                var1 = null;
                if (!(var1 == var0)) {
                    _fun38627_ip = 26;
                    continue _fun38627
                }
            case 19:
                var0 = _closure1_slot20;
            case 26:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: getActiveStageChannelIds, environment: var3
        _fun38628: for (var _fun38628_ip = 0;;) switch (_fun38628_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot21;
                var2 = var3.values;
                var1 = null;
                var4 = var1 != var0;
                var1 = undefined;
                if (!var4) {
                    _fun38628_ip = 29;
                    continue _fun38628
                }
            case 26:
                var1 = var0;
            case 29:
                var0 = true;
                var2 = var2.bind(var3)(var1, var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0) { // Original name: buildActiveStageChannelIds, environment: var3
        _fun38630: for (var _fun38630_ip = 0;;) switch (_fun38630_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot22;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun38630_ip = 105;
                    continue _fun38630
                }
            case 23:
                var2 = _closure1_slot22;
                var1 = var2.add;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var3 = _closure1_slot10;
                var0 = var3.getMutableGuildChannelsForGuild;
                var0 = var0.bind(var3)(var4);
                var1 = var1.bind(var2)(var0);
                var0 = var1.values;
                var2 = var0.bind(var1)();
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun38631: for (var _fun38631_ip = 0;;) switch (_fun38631_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot33;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var4);
                            if (!var2) {
                                _fun38631_ip = 40;
                                continue _fun38631
                            }
                        case 20:
                            var3 = _closure1_slot21;
                            var2 = var3.set;
                            var1 = var4.id;
                            var1 = var2.bind(var3)(var1, var4);
                        case 40:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 105:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: maybeGetParticipants, environment: var3
        _fun38632: for (var _fun38632_ip = 0;;) switch (_fun38632_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot23;
                var0 = var0[var5];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun38632_ip = 102;
                    continue _fun38632
                }
            case 20:
                var4 = _closure1_slot10;
                var1 = var4.getChannel;
                var7 = var1.bind(var4)(var5);
                var4 = var2 != var7;
                var1 = null;
                if (!var4) {
                    _fun38632_ip = 100;
                    continue _fun38632
                }
            case 43:
                var4 = var7.isGuildStageVoice;
                var4 = var4.bind(var7)();
                var1 = null;
                if (!var4) {
                    _fun38632_ip = 100;
                    continue _fun38632
                }
            case 58:
                var8 = _closure1_slot30;
                var6 = var7.guild_id;
                var4 = undefined;
                var6 = var8.bind(var4)(var6);
                var6 = _closure1_slot33;
                var6 = var6.bind(var4)(var7);
                var2 = null;
                if (!var6) {
                    _fun38632_ip = 97;
                    continue _fun38632
                }
            case 88:
                var3 = _closure1_slot32;
                var2 = var3.bind(var4)(var5);
            case 97:
                var1 = var2;
            case 100:
                return var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: getOrCreateParticipants, environment: var3
        _fun38633: for (var _fun38633_ip = 0;;) switch (_fun38633_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot23;
                var0 = var0[var3];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun38633_ip = 86;
                    continue _fun38633
                }
            case 20:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 19;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var4;
                var6 = var3;
                var1 = new var7[var1](var6, var5);
                var1 = var1 instanceof Object ? var1 : var4;
                var2 = _closure1_slot23;
                var2[var3] = var1;
                var2 = var1.rebuild;
                var2 = var2.bind(var1)();
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: isActiveStageChannel, environment: var3
        _fun38634: for (var _fun38634_ip = 0;;) switch (_fun38634_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun38634_ip = 22;
                    continue _fun38634
                }
            case 12:
                var2 = var1.isGuildStageVoice;
                var0 = var2.bind(var1)();
            case 22:
                if (!var0) {
                    _fun38634_ip = 54;
                    continue _fun38634
                }
            case 25:
                var3 = _closure1_slot17;
                var2 = var3.countVoiceStatesForChannel;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var0 = var2 > var1;
            case 54:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: updateParticipants, environment: var3
        _fun38635: for (var _fun38635_ip = 0;;) switch (_fun38635_ip) {
            case 0:
                var3 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun38635_ip = 29;
                    continue _fun38635
                }
            case 18:
                var1 = _closure1_slot29;
                var3 = var1.bind(var2)();
            case 29:
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun38636: for (var _fun38636_ip = 0;;) switch (_fun38636_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = arg1;
                            var1 = _closure1_slot32;
                            var3 = undefined;
                            var6 = var1.bind(var3)(var7);
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var3)(var6);
                            if (!var1) {
                                _fun38636_ip = 167;
                                continue _fun38636
                            }
                        case 38:
                            var4 = _closure1_slot10;
                            var1 = var4.getChannel;
                            var1 = var1.bind(var4)(var7);
                            var5 = null;
                            if (!(var5 != var1)) {
                                _fun38636_ip = 71;
                                continue _fun38636
                            }
                        case 58:
                            var4 = var1.isGuildStageVoice;
                            var4 = var4.bind(var1)();
                            if (var4) {
                                _fun38636_ip = 84;
                                continue _fun38636
                            }
                        case 71:
                            var4 = _closure1_slot36;
                            var4 = var4.bind(var3)(var7);
                            var0 = true;
                            _fun38636_ip = 167;
                            continue _fun38636;
                        case 84:
                            var4 = var6.size;
                            var6 = var4.bind(var6)();
                            var4 = 0;
                            if (!(var4 !== var6)) {
                                _fun38636_ip = 151;
                                continue _fun38636
                            }
                        case 99:
                            var7 = _closure1_slot21;
                            var6 = var7.get;
                            var4 = var1.id;
                            var4 = var6.bind(var7)(var4);
                            var5 = var5 == var4;
                            var0 = true;
                            if (!var5) {
                                _fun38636_ip = 167;
                                continue _fun38636
                            }
                        case 127:
                            var7 = _closure1_slot21;
                            var6 = var7.set;
                            var5 = var1.id;
                            var5 = var6.bind(var7)(var5, var1);
                            var0 = true;
                            _fun38636_ip = 167;
                            continue _fun38636;
                        case 151:
                            var2 = _closure1_slot36;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0 = true;
                        case 167:
                            return var0;
                    }
                };
                var0 = false;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function(arg0) { // Original name: updateParticipant, environment: var3
        _fun38637: for (var _fun38637_ip = 0;;) switch (_fun38637_ip) {
            case 0:
                var3 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun38637_ip = 29;
                    continue _fun38637
                }
            case 18:
                var1 = _closure1_slot29;
                var3 = var1.bind(var2)();
            case 29:
                var1 = _closure1_slot34;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.updateParticipant;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0) { // Original name: clearChannel, environment: var3
        _fun38639: for (var _fun38639_ip = 0;;) switch (_fun38639_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun38639_ip = 39;
                    continue _fun38639
                }
            case 12:
                var2 = _closure1_slot23;
                var2 = delete var2[var3];
                var2 = _closure1_slot21;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                var0 = true;
            case 39:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var12 = function() { // Original name: handleRebuildActiveStageChannels, environment: var3
        var2 = _closure1_slot22;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot21;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = {};
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = function(arg0, arg1, arg2) { // Original name: maybeAddChannelIdToUpdate, environment: var3
        _fun38641: for (var _fun38641_ip = 0;;) switch (_fun38641_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = arg2;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun38641_ip = 97;
                    continue _fun38641
                }
            case 15:
                var0 = var2.has;
                var0 = var0.bind(var2)(var1);
                if (var0) {
                    _fun38641_ip = 97;
                    continue _fun38641
                }
            case 28:
                var6 = _closure1_slot10;
                var4 = var6.getChannel;
                var7 = var4.bind(var6)(var1);
                var4 = var3 != var7;
                if (!var4) {
                    _fun38641_ip = 62;
                    continue _fun38641
                }
            case 52:
                var6 = var7.isGuildStageVoice;
                var4 = var6.bind(var7)();
            case 62:
                if (!var4) {
                    _fun38641_ip = 97;
                    continue _fun38641
                }
            case 65:
                var4 = var5.add;
                var4 = var4.bind(var5)(var1);
                var0 = _closure1_slot23;
                var0 = var0[var1];
                if (!(var3 == var0)) {
                    _fun38641_ip = 97;
                    continue _fun38641
                }
            case 87:
                var0 = var2.add;
                var0 = var0.bind(var2)(var1);
            case 97:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var11 = function(arg0) { // Original name: handleUserUpdate, environment: var3
        var0 = arg0;
        var0 = var0.user;
        var2 = _closure1_slot35;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var9 = function(arg0) { // Original name: handleRelationshipUpdate, environment: var3
        var0 = arg0;
        var0 = var0.relationship;
        var2 = _closure1_slot35;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var8 = function(arg0) { // Original name: handleGuildCreateOrDelete, environment: var3
        _fun38644: for (var _fun38644_ip = 0;;) switch (_fun38644_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var3 = var0.id;
                var4 = _closure1_slot26;
                var2 = _closure1_slot21;
                var0 = var2.values;
                var2 = var0.bind(var2)(var3);
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.bind(var0)();
                var2 = var4.done;
                if (var2) {
                    _fun38644_ip = 105;
                    continue _fun38644
                }
            case 53:
                var2 = var4.value;
                var8 = _closure1_slot21;
                var7 = var8.delete;
                var6 = var2.id;
                var6 = var7.bind(var8)(var6);
                var6 = _closure1_slot23;
                var2 = var2.id;
                var2 = delete var6[var2];
                var6 = var5.bind(var0)();
                var2 = var6.done;
                var4 = var6;
                if (!var2) {
                    _fun38644_ip = 53;
                    continue _fun38644
                }
            case 105:
                var2 = _closure1_slot22;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var10 = function(arg0) { // Original name: handleStreamClose, environment: var3
        _fun38645: for (var _fun38645_ip = 0;;) switch (_fun38645_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.streamKey;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 20;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.decodeStreamKey;
                var0 = var0.bind(var2)(var3);
                var5 = var0.channelId;
                var7 = var0.guildId;
                var3 = var0.ownerId;
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun38645_ip = 87;
                    continue _fun38645
                }
            case 70:
                var6 = _closure1_slot22;
                var0 = var6.has;
                var0 = var0.bind(var6)(var7);
                var2 = !var0;
            case 87:
                var0 = !var2;
                if (var2) {
                    _fun38645_ip = 111;
                    continue _fun38645
                }
            case 93:
                var2 = _closure1_slot35;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 111:
                return var0;
        }
    };
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 'NO_GUILD';
    var _closure1_slot20 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var15 = var7.SecondaryIndexMap;
    var7 = var15.prototype;
    var13 = Object.create(var7, {
        constructor: {
            value: var15
        }
    });
    var18 = function(arg0) { // Environment: var3
        var2 = _closure1_slot28;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var17 = function(arg0) { // Environment: var3
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var19 = var13;
    var7 = new var19[var15](var18, var17, var16);
    var7 = var7 instanceof Object ? var7 : var13;
    var _closure1_slot21 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var19 = var7;
    var1 = new var19[var1](var18);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot22 = var1;
    var1 = {};
    var _closure1_slot23 = var1;
    var1 = new Array(0);
    var _closure1_slot24 = var1;
    var1 = 22;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: StageChannelParticipantStore, environment: var5
            _fun38649: for (var _fun38649_ip = 0;;) switch (_fun38649_ip) {
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
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38649_ip = 69;
                        continue _fun38649
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38649_ip = 105;
                    continue _fun38649;
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
        var0 = function() { // Original name: value, environment: var5
            var13 = this;
            var12 = var13.waitFor;
            var25 = _closure1_slot9;
            var24 = _closure1_slot15;
            var23 = _closure1_slot10;
            var22 = _closure1_slot14;
            var21 = _closure1_slot16;
            var20 = _closure1_slot12;
            var19 = _closure1_slot17;
            var18 = _closure1_slot11;
            var17 = _closure1_slot18;
            var16 = _closure1_slot13;
            var15 = _closure1_slot19;
            var14 = _closure1_slot8;
            var26 = var13;
            var0 = var26[var12](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getParticipantsVersion';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun38651: for (var _fun38651_ip = 0;;) switch (_fun38651_ip) {
                case 0:
                    var5 = arg0;
                    var3 = null;
                    var2 = var3 == var5;
                    var1 = -1;
                    var0 = var1;
                    if (var2) {
                        _fun38651_ip = 61;
                        continue _fun38651
                    }
                case 21:
                    var4 = _closure1_slot31;
                    var2 = undefined;
                    var4 = var4.bind(var2)(var5);
                    var5 = var3 == var4;
                    if (var5) {
                        _fun38651_ip = 48;
                        continue _fun38651
                    }
                case 42:
                    var2 = var4.version;
                case 48:
                    var3 = var3 != var2;
                    if (!var3) {
                        _fun38651_ip = 58;
                        continue _fun38651
                    }
                case 55:
                    var1 = var2;
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMutableParticipants';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38652: for (var _fun38652_ip = 0;;) switch (_fun38652_ip) {
                case 0:
                    var4 = arg0;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun38652_ip = 54;
                        continue _fun38652
                    }
                case 9:
                    var3 = _closure1_slot31;
                    var0 = undefined;
                    var5 = var3.bind(var0)(var4);
                    var3 = var2 == var5;
                    if (var3) {
                        _fun38652_ip = 44;
                        continue _fun38652
                    }
                case 30:
                    var4 = var5.toArray;
                    var3 = arg1;
                    var0 = var4.bind(var5)(var3);
                case 44:
                    if (!(var2 == var0)) {
                        _fun38652_ip = 52;
                        continue _fun38652
                    }
                case 48:
                    var0 = _closure1_slot24;
                case 52:
                    _fun38652_ip = 61;
                    continue _fun38652;
                case 54:
                    var0 = _closure1_slot24;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMutableRequestToSpeakParticipants';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun38653: for (var _fun38653_ip = 0;;) switch (_fun38653_ip) {
                case 0:
                    var3 = _closure1_slot31;
                    var0 = undefined;
                    var2 = arg0;
                    var4 = var3.bind(var0)(var2);
                    var2 = null;
                    var3 = var2 == var4;
                    if (var3) {
                        _fun38653_ip = 38;
                        continue _fun38653
                    }
                case 26:
                    var3 = var4.getRequestToSpeakParticipants;
                    var0 = var3.bind(var4)();
                case 38:
                    if (!(var2 == var0)) {
                        _fun38653_ip = 46;
                        continue _fun38653
                    }
                case 42:
                    var0 = _closure1_slot24;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getRequestToSpeakParticipantsVersion';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun38654: for (var _fun38654_ip = 0;;) switch (_fun38654_ip) {
                case 0:
                    var2 = _closure1_slot31;
                    var1 = undefined;
                    var0 = arg0;
                    var2 = var2.bind(var1)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    if (var3) {
                        _fun38654_ip = 34;
                        continue _fun38654
                    }
                case 26:
                    var1 = var2.requestToSpeakVersion;
                case 34:
                    var2 = var0 != var1;
                    var0 = -1;
                    if (!var2) {
                        _fun38654_ip = 50;
                        continue _fun38654
                    }
                case 47:
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getParticipantCount';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38655: for (var _fun38655_ip = 0;;) switch (_fun38655_ip) {
                case 0:
                    var2 = _closure1_slot31;
                    var1 = undefined;
                    var0 = arg0;
                    var4 = var2.bind(var1)(var0);
                    var0 = null;
                    var2 = var0 == var4;
                    if (var2) {
                        _fun38655_ip = 39;
                        continue _fun38655
                    }
                case 26:
                    var3 = var4.size;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 39:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun38655_ip = 51;
                        continue _fun38655
                    }
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun38656: for (var _fun38656_ip = 0;;) switch (_fun38656_ip) {
                case 0:
                    var2 = arg0;
                    var5 = _closure1_slot30;
                    var4 = null;
                    var1 = var2;
                    if (!(var4 == var2)) {
                        _fun38656_ip = 23;
                        continue _fun38656
                    }
                case 19:
                    var1 = _closure1_slot20;
                case 23:
                    var0 = undefined;
                    var0 = var5.bind(var0)(var1);
                    var1 = _closure1_slot21;
                    var0 = var1.values;
                    if (!(var4 == var2)) {
                        _fun38656_ip = 47;
                        continue _fun38656
                    }
                case 43:
                    var2 = _closure1_slot20;
                case 47:
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getChannelsVersion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot21;
            var0 = var0.version;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getParticipant';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38658: for (var _fun38658_ip = 0;;) switch (_fun38658_ip) {
                case 0:
                    var2 = _closure1_slot31;
                    var1 = undefined;
                    var0 = arg0;
                    var4 = var2.bind(var1)(var0);
                    var0 = null;
                    var2 = var0 == var4;
                    if (var2) {
                        _fun38658_ip = 40;
                        continue _fun38658
                    }
                case 26:
                    var3 = var4.getParticipant;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 40:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun38658_ip = 52;
                        continue _fun38658
                    }
                case 49:
                    var0 = var1;
                case 52:
                    return var0;
            }
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StageChannelParticipantStore';
    var7.displayName = var1;
    var1 = 23;
    var1 = var5[var1];
    var18 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var12;
    var1.OVERLAY_INITIALIZE = var12;
    var12 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var3
        var1 = arg0;
        var3 = var1.voiceStates;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var6 = var2;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun38660: for (var _fun38660_ip = 0;;) switch (_fun38660_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var2 = var3.guildId;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun38660_ip = 170;
                        continue _fun38660
                    }
                case 20:
                    var5 = _closure1_slot22;
                    var2 = var5.has;
                    var1 = var3.guildId;
                    var1 = var2.bind(var5)(var1);
                    if (!var1) {
                        _fun38660_ip = 170;
                        continue _fun38660
                    }
                case 48:
                    var2 = global;
                    var1 = var2.Set;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var5;
                    var1 = new var12[var1](var11);
                    var7 = var1 instanceof Object ? var1 : var5;
                    var8 = _closure1_slot37;
                    var6 = _closure2_slot0;
                    var1 = var3.oldChannelId;
                    var5 = undefined;
                    var1 = var8.bind(var5)(var6, var7, var1);
                    var1 = var3.channelId;
                    var1 = var8.bind(var5)(var6, var7, var1);
                    var8 = var7.size;
                    var6 = 0;
                    var1 = var0;
                    if (!(var6 !== var8)) {
                        _fun38660_ip = 168;
                        continue _fun38660
                    }
                case 128:
                    var4 = _closure1_slot35;
                    var3 = var3.userId;
                    var6 = var2.Array;
                    var2 = var6.from;
                    var2 = var2.bind(var6)(var7);
                    var2 = var4.bind(var5)(var3, var2);
                    if (var2) {
                        _fun38660_ip = 165;
                        continue _fun38660
                    }
                case 162:
                    var2 = var0;
                case 165:
                    var1 = var2;
                case 168:
                    return var1;
                case 170:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var12;
    var12 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = _closure1_slot36;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var12;
    var12 = function(arg0) { // Original name: handleGuildMembersChunkBatch, environment: var3
        _fun38662: for (var _fun38662_ip = 0;;) switch (_fun38662_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chunks;
                var0 = _closure1_slot26;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun38662_ip = 155;
                    continue _fun38662
                }
            case 42:
                var7 = _closure1_slot26;
                var1 = var3.value;
                var1 = var1.members;
                var10 = var7.bind(var5)(var1);
                var7 = var10.bind(var5)();
                var1 = var7.done;
                var9 = var2;
                var8 = var7;
                var7 = var9;
                if (var1) {
                    _fun38662_ip = 134;
                    continue _fun38662
                }
            case 83:
                var11 = _closure1_slot35;
                var1 = var8.value;
                var1 = var1.user;
                var1 = var1.id;
                var11 = var11.bind(var5)(var1);
                if (var11) {
                    _fun38662_ip = 113;
                    continue _fun38662
                }
            case 110:
                var11 = var9;
            case 113:
                var12 = var10.bind(var5)();
                var1 = var12.done;
                var9 = var11;
                var8 = var12;
                var7 = var9;
                if (!var1) {
                    _fun38662_ip = 83;
                    continue _fun38662
                }
            case 134:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun38662_ip = 42;
                    continue _fun38662
                }
            case 155:
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var12;
    var1.USER_UPDATE = var11;
    var1.GUILD_MEMBER_REMOVE = var11;
    var1.GUILD_MEMBER_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleChannelUpdate, environment: var3
        var0 = arg0;
        var4 = var0.channels;
        var3 = var4.reduce;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun38664: for (var _fun38664_ip = 0;;) switch (_fun38664_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arg1;
                    var1 = var4.isGuildStageVoice;
                    var1 = var1.bind(var4)();
                    if (!var1) {
                        _fun38664_ip = 44;
                        continue _fun38664
                    }
                case 19:
                    var5 = _closure1_slot22;
                    var3 = var5.has;
                    var2 = var4.guild_id;
                    var2 = var3.bind(var5)(var2);
                    if (var2) {
                        _fun38664_ip = 46;
                        continue _fun38664
                    }
                case 44:
                    return var0;
                case 46:
                    var5 = _closure1_slot21;
                    var3 = var5.get;
                    var2 = var4.id;
                    var3 = var3.bind(var5)(var2);
                    var2 = null;
                    var2 = var2 == var3;
                    if (var2) {
                        _fun38664_ip = 114;
                        continue _fun38664
                    }
                case 74:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 21;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = var4.permissionOverwrites;
                    var3 = var3.permissionOverwrites;
                    var2 = var6.bind(var7)(var5, var3);
                case 114:
                    if (var2) {
                        _fun38664_ip = 152;
                        continue _fun38664
                    }
                case 117:
                    var3 = var0.push;
                    var2 = var4.id;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot21;
                    var2 = var3.set;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1, var4);
                case 152:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var3.bind(var4)(var2, var0);
        var3 = _closure1_slot34;
        var2 = undefined;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var0 = var1.rebuild;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var3.bind(var2)(var1, var0);
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var1.CHANNEL_UPDATES = var11;
    var11 = function(arg0) { // Original name: handleGuildRoleUpdate, environment: var3
        _fun38666: for (var _fun38666_ip = 0;;) switch (_fun38666_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var3 = _closure1_slot22;
                var2 = var3.has;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun38666_ip = 32;
                    continue _fun38666
                }
            case 28:
                var2 = undefined;
                return var2;
            case 32:
                var3 = _closure1_slot34;
                var0 = _closure1_slot29;
                var2 = undefined;
                var1 = var0.bind(var2)(var1);
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.rebuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var2)(var0, var1);
                return var0;
        }
    };
    var1.GUILD_ROLE_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleRTCConnectionVideo, environment: var3
        _fun38668: for (var _fun38668_ip = 0;;) switch (_fun38668_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var5 = var0.guildId;
                var4 = var0.userId;
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun38668_ip = 47;
                    continue _fun38668
                }
            case 27:
                var3 = _closure1_slot22;
                var0 = var3.has;
                var0 = var0.bind(var3)(var5);
                var2 = !var0;
            case 47:
                var0 = !var2;
                if (var2) {
                    _fun38668_ip = 76;
                    continue _fun38668
                }
            case 53:
                var3 = _closure1_slot35;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var0 = var3.bind(var1)(var4, var2);
            case 76:
                return var0;
        }
    };
    var1.RTC_CONNECTION_VIDEO = var11;
    var1.STREAM_CLOSE = var10;
    var1.STREAM_DELETE = var10;
    var1.RELATIONSHIP_ADD = var9;
    var1.RELATIONSHIP_REMOVE = var9;
    var1.RELATIONSHIP_UPDATE = var9;
    var1.GUILD_CREATE = var8;
    var1.GUILD_DELETE = var8;
    var3 = function(arg0) { // Original name: handlePassiveUpdateV2, environment: var3
        _fun38669: for (var _fun38669_ip = 0;;) switch (_fun38669_ip) {
            case 0:
                var1 = _closure1_slot26;
                var2 = _closure1_slot29;
                var0 = arg0;
                var0 = var0.guildId;
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun38669_ip = 101;
                    continue _fun38669
                }
            case 50:
                var7 = _closure1_slot32;
                var1 = var3.value;
                var7 = var7.bind(var5)(var1);
                var1 = var7.rebuild;
                var7 = var1.bind(var7)();
                if (var7) {
                    _fun38669_ip = 80;
                    continue _fun38669
                }
            case 77:
                var7 = var2;
            case 80:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun38669_ip = 50;
                    continue _fun38669
                }
            case 101:
                return var0;
        }
    };
    var1.PASSIVE_UPDATE_V2 = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var19 = var3;
    var17 = var1;
    var1 = new var19[var7](var18, var17, var16);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/StageChannelParticipantStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3671, 1216, 1372, 1410, 3050, 3059, 3903, 1613, 3480, 3483, 4204, 1377, 3046, 22, 5620, 3464, 644, 566, 806, 2]);