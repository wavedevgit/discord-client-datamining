// stores/PermissionStore.tsx
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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var11
        _fun24577: for (var _fun24577_ip = 0;;) switch (_fun24577_ip) {
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
                _fun24577_ip = 74;
                continue _fun24577;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var11
        _fun24580: for (var _fun24580_ip = 0;;) switch (_fun24580_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun24580_ip = 45;
                    continue _fun24580
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun24580_ip = 54;
                    continue _fun24580
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun24580_ip = 342;
                    continue _fun24580
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun24580_ip = 322;
                    continue _fun24580
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun24580_ip = 282;
                    continue _fun24580
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun24580_ip = 269;
                    continue _fun24580
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
                    _fun24580_ip = 162;
                    continue _fun24580
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun24580_ip = 178;
                    continue _fun24580
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun24580_ip = 248;
                    continue _fun24580
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun24580_ip = 248;
                    continue _fun24580
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun24580_ip = 233;
                    continue _fun24580
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun24580_ip = 246;
                    continue _fun24580
                }
            case 233:
                var8 = _closure1_slot30;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun24580_ip = 264;
                continue _fun24580;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun24580_ip = 282;
                continue _fun24580;
            case 269:
                var6 = _closure1_slot30;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun24580_ip = 322;
                    continue _fun24580
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
                    _fun24580_ip = 329;
                    continue _fun24580
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun24581: for (var _fun24581_ip = 0;;) switch (_fun24581_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun24581_ip = 56;
                                continue _fun24581
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
                            _fun24581_ip = 67;
                            continue _fun24581;
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
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var11
        _fun24582: for (var _fun24582_ip = 0;;) switch (_fun24582_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun24582_ip = 23;
                    continue _fun24582
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun24582_ip = 33;
                    continue _fun24582
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
                    _fun24582_ip = 70;
                    continue _fun24582
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun24582_ip = 55;
                    continue _fun24582
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: _getGuildPermissions, environment: var11
        _fun24583: for (var _fun24583_ip = 0;;) switch (_fun24583_ip) {
            case 0:
                var5 = arg0;
                var3 = undefined;
                var8 = undefined;
                if (!(var8 === var8)) {
                    _fun24583_ip = 13;
                    continue _fun24583
                }
            case 11:
                var8 = true;
            case 13:
                var0 = _closure1_slot24;
                var0 = var0[var5];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun24583_ip = 180;
                    continue _fun24583
                }
            case 33:
                var6 = _closure1_slot21;
                var4 = var6.getCurrentUser;
                var10 = var4.bind(var6)();
                if (!(var2 != var10)) {
                    _fun24583_ip = 152;
                    continue _fun24583
                }
            case 50:
                var6 = _closure1_slot20;
                var4 = var6.getGuild;
                var9 = var4.bind(var6)(var5);
                if (!(var2 != var9)) {
                    _fun24583_ip = 124;
                    continue _fun24583
                }
            case 68:
                var4 = _closure1_slot24;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var2 = 18;
                var2 = var7[var2];
                var7 = var6.bind(var3)(var2);
                var6 = var7.computePermissions;
                var2 = {};
                var2.user = var10;
                var2.context = var9;
                var2.checkElevated = var8;
                var2 = var6.bind(var7)(var2);
                var4[var5] = var2;
                _fun24583_ip = 150;
                continue _fun24583;
            case 124:
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 18;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var2 = var4.NONE;
            case 150:
                return var2;
            case 152:
                var2 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 18;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.NONE;
                return var1;
            case 180:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: getUncachedChannelPermissions, environment: var11
        _fun24584: for (var _fun24584_ip = 0;;) switch (_fun24584_ip) {
            case 0:
                var6 = arguments[1];
                var2 = undefined;
                if (!(var6 === var2)) {
                    _fun24584_ip = 11;
                    continue _fun24584
                }
            case 9:
                var6 = true;
            case 11:
                var3 = _closure1_slot21;
                var1 = var3.getCurrentUser;
                var8 = var1.bind(var3)();
                var1 = null;
                if (!(var1 != var8)) {
                    _fun24584_ip = 284;
                    continue _fun24584
                }
            case 36:
                var5 = _closure1_slot18;
                var4 = var5.getChannel;
                var3 = arg0;
                var7 = var4.bind(var5)(var3);
                if (!(var1 != var7)) {
                    _fun24584_ip = 256;
                    continue _fun24584
                }
            case 60:
                var3 = var7.getGuildId;
                var3 = var3.bind(var7)();
                var4 = var1 != var3;
                if (!var4) {
                    _fun24584_ip = 137;
                    continue _fun24584
                }
            case 77:
                var9 = _closure1_slot10;
                var5 = var9.isLurking;
                var5 = var5.bind(var9)(var3);
                if (var5) {
                    _fun24584_ip = 134;
                    continue _fun24584
                }
            case 95:
                var11 = _closure1_slot19;
                var10 = var11.getMember;
                var9 = var8.id;
                var10 = var10.bind(var11)(var3, var9);
                var11 = var1 == var10;
                var9 = undefined;
                if (var11) {
                    _fun24584_ip = 131;
                    continue _fun24584
                }
            case 125:
                var9 = var10.isPending;
            case 131:
                var5 = var9;
            case 134:
                var4 = var5;
            case 137:
                var5 = var7.isScheduledForDeletion;
                var5 = var5.bind(var7)();
                if (var5) {
                    _fun24584_ip = 208;
                    continue _fun24584
                }
            case 150:
                if (var4) {
                    _fun24584_ip = 208;
                    continue _fun24584
                }
            case 153:
                var5 = _closure1_slot1;
                var9 = _closure1_slot3;
                var4 = 19;
                var4 = var9[var4];
                var9 = var5.bind(var2)(var4);
                var5 = var9.isEmpty;
                var4 = var7.permissionOverwrites;
                var4 = var5.bind(var9)(var4);
                if (!var4) {
                    _fun24584_ip = 208;
                    continue _fun24584
                }
            case 193:
                if (!(var1 != var3)) {
                    _fun24584_ip = 208;
                    continue _fun24584
                }
            case 197:
                var1 = _closure1_slot31;
                var1 = var1.bind(var2)(var3);
                _fun24584_ip = 254;
                continue _fun24584;
            case 208:
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var3 = 18;
                var3 = var5[var3];
                var5 = var4.bind(var2)(var3);
                var4 = var5.computePermissions;
                var3 = {};
                var3.user = var8;
                var3.context = var7;
                var3.checkElevated = var6;
                var1 = var4.bind(var5)(var3);
            case 254:
                return var1;
            case 256:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 18;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.NONE;
                return var1;
            case 284:
                var1 = _closure1_slot2;
                var3 = _closure1_slot3;
                var0 = 18;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.NONE;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: _getChannelPermissions, environment: var11
        _fun24585: for (var _fun24585_ip = 0;;) switch (_fun24585_ip) {
            case 0:
                var3 = arg0;
                var5 = undefined;
                var4 = undefined;
                if (!(var4 === var4)) {
                    _fun24585_ip = 13;
                    continue _fun24585
                }
            case 11:
                var4 = true;
            case 13:
                var0 = _closure1_slot25;
                var0 = var0[var3];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun24585_ip = 51;
                    continue _fun24585
                }
            case 30:
                var2 = _closure1_slot25;
                var1 = _closure1_slot32;
                var1 = var1.bind(var5)(var3, var4);
                var2[var3] = var1;
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: updateGuildVersion, environment: var11
        _fun24586: for (var _fun24586_ip = 0;;) switch (_fun24586_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun24586_ip = 43;
                    continue _fun24586
                }
            case 9:
                var1 = _closure1_slot26;
                var0 = var1[var2];
                var4 = var3 != var0;
                var3 = 0;
                if (!var4) {
                    _fun24586_ip = 32;
                    continue _fun24586
                }
            case 29:
                var3 = var0;
            case 32:
                var0 = 1;
                var0 = var3 + var0;
                var1[var2] = var0;
            case 43:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() { // Original name: rebuildPermissions, environment: var11
        _fun24587: for (var _fun24587_ip = 0;;) switch (_fun24587_ip) {
            case 0:
                var0 = {};
                _closure1_slot24 = var0;
                var0 = {};
                _closure1_slot25 = var0;
                var5 = _closure1_slot26;
                var2 = 1;
                for (var0 in var5)
                    case 30: {
                        case 39: var9 = var0;
                        var8 = _closure1_slot26;
                        var7 = var8[var9];
                        var7 = var7 + var2;
                        var8[var9] = var7;
                        _fun24587_ip = 30;
                        continue _fun24587;
                    }
            case 60:
                var0 = _closure1_slot27;
                var0 = var0 + var2;
                _closure1_slot27 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var16 = function() { // Original name: handleConnectionOpen, environment: var11
        var1 = _closure1_slot35;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var15 = function() { // Original name: handleGuild, environment: var11
        var1 = _closure1_slot35;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var14 = function(arg0) { // Original name: handleGuildMemberUpdate, environment: var11
        _fun24590: for (var _fun24590_ip = 0;;) switch (_fun24590_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.user;
                var3 = var0.id;
                var2 = _closure1_slot21;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun24590_ip = 47;
                    continue _fun24590
                }
            case 42:
                var2 = var4.id;
            case 47:
                if (!(var3 === var2)) {
                    _fun24590_ip = 61;
                    continue _fun24590
                }
            case 51:
                var1 = _closure1_slot35;
                var1 = var1.bind(var0)();
                return var0;
            case 61:
                var0 = false;
                return var0;
        }
    };
    var13 = function() { // Original name: handleThreadAction, environment: var11
        var0 = true;
        return var0;
    };
    var12 = function(arg0) { // Original name: handleSearchMessagesSuccess, environment: var11
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            _fun24593: for (var _fun24593_ip = 0;;) switch (_fun24593_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.messages;
                    var0 = var0.threads;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    if (var0) {
                        _fun24593_ip = 47;
                        continue _fun24593
                    }
                case 29:
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.thread;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 47:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var10 = function(arg0) { // Original name: handleGuildRole, environment: var11
        var0 = arg0;
        var2 = var0.guildId;
        var0 = _closure1_slot24;
        var0 = delete var0[var2];
        var3 = _closure1_slot18;
        var0 = var3.getMutableBasicGuildChannelsForGuild;
        var6 = var0.bind(var3)(var2);
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 19;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.forEach;
        var3 = function(arg0) { // Environment: var3
            var1 = _closure1_slot25;
            var0 = arg0;
            var0 = var0.id;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var3 = var4.bind(var5)(var6, var3);
        var4 = _closure1_slot27;
        var3 = 1;
        var3 = var4 + var3;
        _closure1_slot27 = var3;
        var1 = _closure1_slot34;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var8 = function(arg0) { // Original name: handleStageInstancesChanged, environment: var11
        _fun24598: for (var _fun24598_ip = 0;;) switch (_fun24598_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.instance;
                var3 = _closure1_slot18;
                var1 = var3.getChannel;
                var0 = var0.channel_id;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun24598_ip = 144;
                    continue _fun24598
                }
            case 37:
                var3 = _closure1_slot21;
                var0 = var3.getCurrentUser;
                var6 = var0.bind(var3)();
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var0 = 18;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.computePermissions;
                var3 = {};
                var3.user = var6;
                var3.context = var1;
                var4 = var4.bind(var5)(var3);
                var5 = _closure1_slot25;
                var3 = var1.id;
                var3 = var5[var3];
                if (!(var4 !== var3)) {
                    _fun24598_ip = 140;
                    continue _fun24598
                }
            case 110:
                var3 = _closure1_slot25;
                var1 = var1.id;
                var3[var1] = var4;
                var3 = _closure1_slot27;
                var1 = 1;
                var1 = var3 + var1;
                _closure1_slot27 = var1;
                return var0;
            case 140:
                var0 = false;
                return var0;
            case 144:
                var0 = false;
                return var0;
        }
    };
    var3 = function(arg0) { // Original name: handleImpersonateUpdate, environment: var11
        var0 = arg0;
        var2 = var0.guildId;
        var0 = _closure1_slot24;
        var0 = delete var0[var2];
        var3 = _closure1_slot18;
        var0 = var3.getMutableBasicGuildChannelsForGuild;
        var6 = var0.bind(var3)(var2);
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 19;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.forEach;
        var3 = function(arg0) { // Environment: var3
            var1 = _closure1_slot25;
            var0 = arg0;
            var0 = var0.id;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var3 = var4.bind(var5)(var6, var3);
        var4 = _closure1_slot27;
        var3 = 1;
        var3 = var4 + var3;
        _closure1_slot27 = var3;
        var1 = _closure1_slot34;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: _computePermissions, environment: var11
        _fun24601: for (var _fun24601_ip = 0;;) switch (_fun24601_ip) {
            case 0:
                var8 = arg0;
                var10 = arg1;
                var9 = arg2;
                var5 = arg3;
                var2 = _closure1_slot2;
                var0 = _closure1_slot3;
                var4 = 18;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.NONE;
                var2 = _closure1_slot13;
                var2 = var8 instanceof var2;
                if (var2) {
                    _fun24601_ip = 104;
                    continue _fun24601
                }
            case 54:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 21;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isGuildRecord;
                var2 = var2.bind(var6)(var8);
                if (!var2) {
                    _fun24601_ip = 140;
                    continue _fun24601
                }
            case 88:
                var6 = _closure1_slot31;
                var2 = var8.id;
                var0 = var6.bind(var3)(var2);
                _fun24601_ip = 140;
                continue _fun24601;
            case 104:
                var7 = _closure1_slot14;
                var6 = var7.has;
                var2 = var8.type;
                var2 = var6.bind(var7)(var2);
                if (var2) {
                    _fun24601_ip = 227;
                    continue _fun24601
                }
            case 126:
                var6 = _closure1_slot33;
                var2 = var8.id;
                var0 = var6.bind(var3)(var2);
            case 140:
                if (!(var3 === var10)) {
                    _fun24601_ip = 152;
                    continue _fun24601
                }
            case 144:
                if (!(var3 === var9)) {
                    _fun24601_ip = 152;
                    continue _fun24601
                }
            case 148:
                if (!(var3 !== var5)) {
                    _fun24601_ip = 225;
                    continue _fun24601
                }
            case 152:
                var6 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var7 = var6.bind(var3)(var2);
                var6 = var7.computePermissions;
                var2 = {};
                var12 = _closure1_slot21;
                var11 = var12.getCurrentUser;
                var11 = var11.bind(var12)();
                var2.user = var11;
                var2.context = var8;
                var2.overwrites = var10;
                var2.roles = var9;
                var11 = true;
                var2.checkElevated = var11;
                var2.excludeGuildPermissions = var5;
                var0 = var6.bind(var7)(var2);
            case 225:
                return var0;
            case 227:
                var6 = _closure1_slot18;
                var2 = var6.getChannel;
                var0 = var8.parent_id;
                var2 = var2.bind(var6)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun24601_ip = 350;
                    continue _fun24601
                }
            case 253:
                var6 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var4];
                var7 = var6.bind(var3)(var0);
                var6 = var7.applyThreadPermissions;
                var0 = _closure1_slot36;
                var17 = undefined;
                var16 = var2;
                var15 = var10;
                var14 = var9;
                var13 = var5;
                var15 = var17[var0](var16, var15, var14, var13, var12);
                var9 = _closure1_slot12;
                var2 = var9.hasJoined;
                var0 = var8.id;
                var14 = var2.bind(var9)(var0);
                var10 = _closure1_slot19;
                var9 = var10.isCurrentUserGuest;
                var0 = var8.guild_id;
                var13 = var9.bind(var10)(var0);
                var17 = var7;
                var16 = var8;
                var0 = var17[var6](var16, var15, var14, var13, var12);
                _fun24601_ip = 373;
                continue _fun24601;
            case 350:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var0 = var1.NONE;
            case 373:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var9 = function() { // Original name: resetState, environment: var11
        var0 = {};
        _closure1_slot25 = var0;
        var0 = {};
        _closure1_slot24 = var0;
        var0 = {};
        _closure1_slot26 = var0;
        var0 = 0;
        _closure1_slot27 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot37 = var9;
    var0 = global;
    var17 = var0.Object;
    var7 = var17.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var17)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var17 = var7.ChannelRecordBase;
    var _closure1_slot13 = var17;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var17 = var7.isGuildOwner;
    var _closure1_slot15 = var17;
    var7 = var7.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 14;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot20 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot21 = var7;
    var7 = 16;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Permissions;
    var _closure1_slot22 = var7;
    var7 = 17;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.MemberSafetyPagePermissions;
    var _closure1_slot23 = var7;
    var7 = {};
    var _closure1_slot24 = var7;
    var7 = {};
    var _closure1_slot25 = var7;
    var7 = {};
    var _closure1_slot26 = var7;
    var _closure1_slot27 = var1;
    var1 = 24;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var11
        var3 = function() { // Original name: PermissionStore, environment: var5
            _fun24604: for (var _fun24604_ip = 0;;) switch (_fun24604_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun24604_ip = 69;
                        continue _fun24604
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun24604_ip = 105;
                    continue _fun24604;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var9 = this;
            var8 = var9.waitFor;
            var17 = _closure1_slot18;
            var16 = _closure1_slot19;
            var15 = _closure1_slot20;
            var14 = _closure1_slot9;
            var13 = _closure1_slot12;
            var12 = _closure1_slot10;
            var11 = _closure1_slot11;
            var10 = _closure1_slot21;
            var18 = var9;
            var0 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10, var9);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelPermissions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun24606: for (var _fun24606_ip = 0;;) switch (_fun24606_ip) {
                case 0:
                    var1 = arg0;
                    var4 = _closure1_slot14;
                    var3 = var4.has;
                    var0 = var1.type;
                    var0 = var3.bind(var4)(var0);
                    if (var0) {
                        _fun24606_ip = 46;
                        continue _fun24606
                    }
                case 28:
                    var4 = _closure1_slot33;
                    var3 = var1.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    _fun24606_ip = 62;
                    continue _fun24606;
                case 46:
                    var3 = _closure1_slot32;
                    var2 = var1.id;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildPermissions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot31;
            var0 = arg0;
            var1 = var0.id;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildPermissionProps';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun24608: for (var _fun24608_ip = 0;;) switch (_fun24608_ip) {
                case 0:
                    var1 = arg0;
                    var6 = this;
                    var2 = _closure1_slot21;
                    var0 = var2.getCurrentUser;
                    var5 = var0.bind(var2)();
                    var0 = {};
                    var7 = var6.can;
                    var2 = _closure1_slot22;
                    var4 = var2.MANAGE_GUILD;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageGuild = var4;
                    var7 = var6.can;
                    var4 = var2.MANAGE_CHANNELS;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageChannels = var4;
                    var7 = var6.can;
                    var4 = var2.MANAGE_ROLES;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageRoles = var4;
                    var7 = var6.can;
                    var4 = var2.BAN_MEMBERS;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageBans = var4;
                    var7 = var6.can;
                    var4 = var2.MANAGE_NICKNAMES;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageNicknames = var4;
                    var4 = var6.can;
                    var2 = var2.MANAGE_GUILD_EXPRESSIONS;
                    var2 = var4.bind(var6)(var2, var1);
                    if (var2) {
                        _fun24608_ip = 188;
                        continue _fun24608
                    }
                case 166:
                    var7 = var6.can;
                    var4 = _closure1_slot22;
                    var4 = var4.CREATE_GUILD_EXPRESSIONS;
                    var2 = var7.bind(var6)(var4, var1);
                case 188:
                    var0.canManageGuildExpressions = var2;
                    var7 = var6.can;
                    var2 = _closure1_slot22;
                    var4 = var2.VIEW_AUDIT_LOG;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canViewAuditLog = var4;
                    var7 = var6.can;
                    var4 = var2.VIEW_AUDIT_LOG;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canViewAuditLogV2 = var4;
                    var7 = var6.can;
                    var4 = var2.MANAGE_WEBHOOKS;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canManageWebhooks = var4;
                    var7 = var6.can;
                    var4 = var2.VIEW_GUILD_ANALYTICS;
                    var4 = var7.bind(var6)(var4, var1);
                    var0.canViewGuildAnalytics = var4;
                    var4 = var6.canAccessMemberSafetyPage;
                    var4 = var4.bind(var6)(var1);
                    var0.canAccessMembersPage = var4;
                    var4 = var6.can;
                    var2 = var2.ADMINISTRATOR;
                    var2 = var4.bind(var6)(var2, var1);
                    var0.isGuildAdmin = var2;
                    var2 = null;
                    var4 = var2 != var5;
                    if (!var4) {
                        _fun24608_ip = 355;
                        continue _fun24608
                    }
                case 343:
                    var7 = _closure1_slot15;
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1, var5);
                case 355:
                    var0.isOwner = var4;
                    var2 = var2 != var5;
                    if (!var2) {
                        _fun24608_ip = 379;
                        continue _fun24608
                    }
                case 367:
                    var4 = _closure1_slot16;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var1, var5);
                case 379:
                    var0.isOwnerWithRequiredMfaLevel = var2;
                    var0.guild = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'canAccessMemberSafetyPage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 22;
            var1 = var3[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.hasAny;
            var4 = _closure1_slot31;
            var1 = arg0;
            var1 = var1.id;
            var1 = var4.bind(var5)(var1);
            var0 = _closure1_slot23;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'canAccessGuildSettings';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var1 = 22;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var2 = var3.hasAny;
            var1 = _closure1_slot31;
            var0 = arg0;
            var0 = var0.id;
            var1 = var1.bind(var4)(var0);
            var0 = 18;
            var0 = var6[var0];
            var0 = var5.bind(var4)(var0);
            var0 = var0.VIEW_GUILD_SETTINGS;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'canWithPartialContext';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun24611: for (var _fun24611_ip = 0;;) switch (_fun24611_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var3 = this;
                    var0 = 'channelId';
                    var0 = var0 in var1;
                    if (!var0) {
                        _fun24611_ip = 36;
                        continue _fun24611
                    }
                case 20:
                    var0 = var1.channelId;
                    var2 = 'string';
                    var0 = typeof var0;
                    if (!(var2 !== var0)) {
                        _fun24611_ip = 102;
                        continue _fun24611
                    }
                case 36:
                    var0 = 'guildId';
                    var0 = var0 in var1;
                    if (!var0) {
                        _fun24611_ip = 63;
                        continue _fun24611
                    }
                case 47:
                    var2 = var1.guildId;
                    var5 = 'string';
                    var2 = typeof var2;
                    var0 = var5 === var2;
                case 63:
                    if (!var0) {
                        _fun24611_ip = 100;
                        continue _fun24611
                    }
                case 66:
                    var5 = var3.can;
                    var7 = _closure1_slot20;
                    var6 = var7.getGuild;
                    var2 = var1.guildId;
                    var2 = var6.bind(var7)(var2);
                    var0 = var5.bind(var3)(var4, var2);
                case 100:
                    _fun24611_ip = 136;
                    continue _fun24611;
                case 102:
                    var2 = var3.can;
                    var6 = _closure1_slot18;
                    var5 = var6.getChannel;
                    var1 = var1.channelId;
                    var1 = var5.bind(var6)(var1);
                    var0 = var2.bind(var3)(var4, var1);
                case 136:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'can';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: value, environment: var5
            var6 = _closure1_slot36;
            var2 = undefined;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var7 = arg4;
            var11 = undefined;
            var3 = var11[var6](var10, var9, var8, var7, var6);
            var1 = _closure1_slot2;
            var4 = _closure1_slot3;
            var0 = 22;
            var0 = var4[var0];
            var2 = var1.bind(var2)(var0);
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'canBasicChannel';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: value, environment: var5
            _fun24613: for (var _fun24613_ip = 0;;) switch (_fun24613_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var0 = 'basicPermissions';
                    var0 = var0 in var1;
                    if (var0) {
                        _fun24613_ip = 106;
                        continue _fun24613
                    }
                case 20:
                    var3 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var0 = 22;
                    var0 = var9[var0];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var0);
                    var5 = var6.has;
                    var10 = _closure1_slot36;
                    var13 = arg2;
                    var12 = arg3;
                    var11 = arg4;
                    var15 = undefined;
                    var14 = var1;
                    var3 = var15[var10](var14, var13, var12, var11, var10);
                    var7 = _closure1_slot1;
                    var0 = 23;
                    var0 = var9[var0];
                    var7 = var7.bind(var8)(var0);
                    var0 = var7.asBigFlag;
                    var0 = var0.bind(var7)(var4);
                    var0 = var5.bind(var6)(var3, var0);
                    _fun24613_ip = 145;
                    continue _fun24613;
                case 106:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 23;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.has;
                    var1 = var1.basicPermissions;
                    var0 = var2.bind(var3)(var1, var4);
                case 145:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'computePermissions';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            var5 = _closure1_slot36;
            var10 = undefined;
            var9 = arg0;
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var0 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'computeBasicPermissions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun24615: for (var _fun24615_ip = 0;;) switch (_fun24615_ip) {
                case 0:
                    var1 = arg0;
                    var0 = 'basicPermissions';
                    var0 = var0 in var1;
                    if (var0) {
                        _fun24615_ip = 61;
                        continue _fun24615
                    }
                case 14:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.asBasicFlag;
                    var0 = _closure1_slot36;
                    var0 = var0.bind(var4)(var1);
                    var0 = var2.bind(var3)(var0);
                    _fun24615_ip = 67;
                    continue _fun24615;
                case 61:
                    var0 = var1.basicPermissions;
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'canManageUser';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun24616: for (var _fun24616_ip = 0;;) switch (_fun24616_ip) {
                case 0:
                    var0 = arg1;
                    var6 = arg2;
                    var4 = this;
                    var1 = _closure1_slot17;
                    var3 = var0 instanceof var1;
                    var1 = var0;
                    if (!var3) {
                        _fun24616_ip = 31;
                        continue _fun24616
                    }
                case 26:
                    var1 = var0.id;
                case 31:
                    var0 = _closure1_slot15;
                    var7 = undefined;
                    var0 = var0.bind(var7)(var6, var1);
                    var9 = var1;
                    if (var0) {
                        _fun24616_ip = 220;
                        continue _fun24616
                    }
                case 52:
                    var1 = _closure1_slot21;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var3 = var4.can;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0, var6);
                    if (var0) {
                        _fun24616_ip = 87;
                        continue _fun24616
                    }
                case 83:
                    var0 = false;
                    return var0;
                case 87:
                    var0 = null;
                    var3 = var0 != var1;
                    var5 = undefined;
                    if (!var3) {
                        _fun24616_ip = 135;
                        continue _fun24616
                    }
                case 98:
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 18;
                    var3 = var8[var3];
                    var8 = var4.bind(var7)(var3);
                    var4 = var8.getHighestRole;
                    var3 = var1.id;
                    var5 = var4.bind(var8)(var6, var3);
                case 135:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var8 = 18;
                    var3 = var3[var8];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.getHighestRole;
                    var4 = var3.bind(var4)(var6, var9);
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun24616_ip = 218;
                        continue _fun24616
                    }
                case 174:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.isRoleHigher;
                    var12 = var1.id;
                    var14 = var3;
                    var13 = var6;
                    var11 = var5;
                    var10 = var4;
                    var0 = var14[var2](var13, var12, var11, var10, var9);
                case 218:
                    return var0;
                case 220:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getHighestRole';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun24617: for (var _fun24617_ip = 0;;) switch (_fun24617_ip) {
                case 0:
                    var1 = _closure1_slot21;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 != var1;
                    if (!var3) {
                        _fun24617_ip = 67;
                        continue _fun24617
                    }
                case 25:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getHighestRole;
                    var2 = var1.id;
                    var1 = arg0;
                    var0 = var3.bind(var4)(var1, var2);
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isRoleHigher';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun24618: for (var _fun24618_ip = 0;;) switch (_fun24618_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot21;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot9;
                    var3 = var4.isViewingRoles;
                    var1 = var5.id;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 18;
                    var2 = var4[var2];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.isRoleHigher;
                    var2 = undefined;
                    if (var1) {
                        _fun24618_ip = 88;
                        continue _fun24618
                    }
                case 72:
                    var1 = null;
                    var1 = var1 == var0;
                    var2 = undefined;
                    if (var1) {
                        _fun24618_ip = 88;
                        continue _fun24618
                    }
                case 83:
                    var2 = var0.id;
                case 88:
                    var8 = arg1;
                    var7 = arg2;
                    var11 = var4;
                    var10 = var5;
                    var9 = var2;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'canImpersonateRole';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun24619: for (var _fun24619_ip = 0;;) switch (_fun24619_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var3 = this;
                    var0 = var3.getHighestRole;
                    var4 = var0.bind(var3)(var5);
                    var6 = var3.can;
                    var0 = _closure1_slot22;
                    var0 = var0.MANAGE_GUILD;
                    var0 = var6.bind(var3)(var0, var5);
                    if (!var0) {
                        _fun24619_ip = 70;
                        continue _fun24619
                    }
                case 48:
                    var6 = var3.can;
                    var1 = _closure1_slot22;
                    var1 = var1.MANAGE_ROLES;
                    var0 = var6.bind(var3)(var1, var5);
                case 70:
                    var1 = var3.isRoleHigher;
                    var1 = var1.bind(var3)(var5, var4, var2);
                    if (!var0) {
                        _fun24619_ip = 117;
                        continue _fun24619
                    }
                case 86:
                    if (var1) {
                        _fun24619_ip = 114;
                        continue _fun24619
                    }
                case 89:
                    var3 = var2.id;
                    var2 = null;
                    var5 = var2 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun24619_ip = 110;
                        continue _fun24619
                    }
                case 105:
                    var2 = var4.id;
                case 110:
                    var1 = var3 === var2;
                case 114:
                    var0 = var1;
                case 117:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getGuildVersion';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun24620: for (var _fun24620_ip = 0;;) switch (_fun24620_ip) {
                case 0:
                    var1 = _closure1_slot26;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun24620_ip = 28;
                        continue _fun24620
                    }
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getChannelsVersion';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PermissionStore';
    var7.displayName = var1;
    var1 = 25;
    var1 = var5[var1];
    var20 = var6.bind(var0)(var1);
    var1 = {};
    var1.BACKGROUND_SYNC = var16;
    var1.CONNECTION_OPEN = var16;
    var1.OVERLAY_INITIALIZE = var16;
    var1.CACHE_LOADED = var16;
    var1.CACHE_LOADED_LAZY = var16;
    var16 = function() { // Original name: handleConnectionClose, environment: var11
        var1 = _closure1_slot37;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_CLOSED = var16;
    var1.GUILD_CREATE = var15;
    var1.GUILD_UPDATE = var15;
    var1.GUILD_DELETE = var15;
    var1.GUILD_MEMBER_ADD = var14;
    var1.GUILD_MEMBER_UPDATE = var14;
    var1.CURRENT_USER_UPDATE = var14;
    var14 = function(arg0) { // Original name: handleChannelCreate, environment: var11
        _fun24623: for (var _fun24623_ip = 0;;) switch (_fun24623_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.id;
                var2 = _closure1_slot18;
                var0 = var2.getChannel;
                var3 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun24623_ip = 181;
                    continue _fun24623
                }
            case 39:
                var0 = var3.isPrivate;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun24623_ip = 181;
                    continue _fun24623
                }
            case 55:
                var2 = _closure1_slot21;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var0 = 18;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.computePermissions;
                var2 = {};
                var2.user = var6;
                var2.context = var3;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot25;
                var2 = var3.id;
                var2 = var4[var2];
                if (!(var2 !== var5)) {
                    _fun24623_ip = 177;
                    continue _fun24623
                }
            case 128:
                var4 = _closure1_slot25;
                var2 = var3.id;
                var4[var2] = var5;
                var4 = _closure1_slot27;
                var2 = 1;
                var2 = var4 + var2;
                _closure1_slot27 = var2;
                var2 = _closure1_slot34;
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                var1 = var2.bind(var0)(var1);
                return var0;
            case 177:
                var0 = false;
                return var0;
            case 181:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var14;
    var1.THREAD_CREATE = var13;
    var1.THREAD_UPDATE = var13;
    var1.THREAD_LIST_SYNC = var13;
    var1.LOAD_THREADS_SUCCESS = var13;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var13;
    var13 = function(arg0) { // Original name: handleChannelUpdates, environment: var11
        _fun24624: for (var _fun24624_ip = 0;;) switch (_fun24624_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot29;
                var10 = undefined;
                var9 = var0.bind(var10)(var1);
                var2 = var9.bind(var10)();
                var0 = var2.done;
                var4 = false;
                var7 = 18;
                var6 = null;
                var5 = var2;
                var2 = undefined;
                var1 = false;
                if (var0) {
                    _fun24624_ip = 246;
                    continue _fun24624
                }
            case 52:
                var0 = var5.value;
                var12 = var0.id;
                var11 = _closure1_slot18;
                var0 = var11.getChannel;
                var15 = var0.bind(var11)(var12);
                var11 = var4;
                var12 = var2;
                if (!(var6 != var15)) {
                    _fun24624_ip = 219;
                    continue _fun24624
                }
            case 89:
                var0 = var15.isPrivate;
                var0 = var0.bind(var15)();
                var11 = var4;
                var12 = var2;
                if (var0) {
                    _fun24624_ip = 219;
                    continue _fun24624
                }
            case 108:
                var13 = _closure1_slot21;
                var0 = var13.getCurrentUser;
                var16 = var0.bind(var13)();
                var13 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var7];
                var14 = var13.bind(var10)(var0);
                var13 = var14.computePermissions;
                var0 = {};
                var0.user = var16;
                var0.context = var15;
                var0 = var13.bind(var14)(var0);
                var14 = _closure1_slot25;
                var13 = var15.id;
                var13 = var14[var13];
                var11 = var4;
                var12 = var0;
                if (!(var13 !== var0)) {
                    _fun24624_ip = 219;
                    continue _fun24624
                }
            case 182:
                var14 = _closure1_slot25;
                var13 = var15.id;
                var14[var13] = var0;
                var14 = _closure1_slot34;
                var13 = var15.getGuildId;
                var13 = var13.bind(var15)();
                var13 = var14.bind(var10)(var13);
                var11 = true;
                var12 = var0;
            case 219:
                var13 = var9.bind(var10)();
                var0 = var13.done;
                var4 = var11;
                var2 = var12;
                var5 = var13;
                var1 = var4;
                if (!var0) {
                    _fun24624_ip = 52;
                    continue _fun24624
                }
            case 246:
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun24624_ip = 273;
                    continue _fun24624
                }
            case 255:
                var4 = _closure1_slot27;
                var2 = 1;
                var2 = var4 + var2;
                _closure1_slot27 = var2;
                var0 = var1;
            case 273:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var13;
    var13 = function(arg0) { // Original name: handleLoadMessagesSuccess, environment: var11
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.thread;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.LOAD_MESSAGES_SUCCESS = var13;
    var1.SEARCH_MESSAGES_SUCCESS = var12;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var12;
    var12 = function(arg0) { // Original name: handleThreadMemberUpdate, environment: var11
        _fun24627: for (var _fun24627_ip = 0;;) switch (_fun24627_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot21;
                var0 = var3.getCurrentUser;
                var0 = var0.bind(var3)();
                var3 = null;
                var5 = var3 == var0;
                var3 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun24627_ip = 37;
                    continue _fun24627
                }
            case 32:
                var4 = var0.id;
            case 37:
                var0 = var1.userId;
                var0 = var4 === var0;
                if (!var0) {
                    _fun24627_ip = 65;
                    continue _fun24627
                }
            case 49:
                var2 = _closure1_slot34;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 65:
                return var0;
        }
    };
    var1.THREAD_MEMBER_UPDATE = var12;
    var12 = function(arg0) { // Original name: handleThreadMembersUpdate, environment: var11
        _fun24628: for (var _fun24628_ip = 0;;) switch (_fun24628_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 20;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var4.bind(var3)(var0);
                var0 = var4.doesThreadMembersActionAffectMe;
                var0 = var0.bind(var4)(var1);
                var4 = !var0;
                var0 = !var4;
                if (var4) {
                    _fun24628_ip = 64;
                    continue _fun24628
                }
            case 48:
                var2 = _closure1_slot34;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 64:
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var12;
    var11 = function(arg0) { // Original name: handleChannelDelete, environment: var11
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot25;
        var2 = var0.id;
        var2 = delete var3[var2];
        var3 = _closure1_slot27;
        var2 = 1;
        var2 = var3 + var2;
        _closure1_slot27 = var2;
        var2 = _closure1_slot34;
        var1 = var0.guild_id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = false;
        return var0;
    };
    var1.CHANNEL_DELETE = var11;
    var1.GUILD_ROLE_CREATE = var10;
    var1.GUILD_ROLE_UPDATE = var10;
    var1.GUILD_ROLE_DELETE = var10;
    var1.LOGOUT = var9;
    var1.STAGE_INSTANCE_CREATE = var8;
    var1.STAGE_INSTANCE_UPDATE = var8;
    var1.STAGE_INSTANCE_DELETE = var8;
    var1.IMPERSONATE_UPDATE = var3;
    var1.IMPERSONATE_STOP = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var21 = var3;
    var19 = var1;
    var1 = new var21[var7](var20, var19, var18);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PermissionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1664, 3051, 1377, 3052, 1376, 1416, 1620, 1372, 1672, 1410, 1613, 660, 3054, 3055, 22, 3057, 1598, 484, 3058, 566, 806, 2]);