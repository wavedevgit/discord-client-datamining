// modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var7
        _fun96199: for (var _fun96199_ip = 0;;) switch (_fun96199_ip) {
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
            case 72: // try_end0
                _fun96199_ip = 76;
                continue _fun96199;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var8 = function() { // Original name: init, environment: var7
        var0 = {};
        _closure1_slot9 = var0;
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var8;
    var3 = function(arg0) { // Original name: handleRelationshipChange, environment: var7
        _fun96203: for (var _fun96203_ip = 0;;) switch (_fun96203_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.relationship;
                var4 = _closure1_slot8;
                var2 = var4.getVoiceStateForUser;
                var0 = var1.id;
                var2 = var2.bind(var4)(var0);
                var5 = null;
                var0 = var5 != var2;
                if (!var0) {
                    _fun96203_ip = 50;
                    continue _fun96203
                }
            case 41:
                var4 = var2.channelId;
                var0 = var5 != var4;
            case 50:
                if (!var0) {
                    _fun96203_ip = 75;
                    continue _fun96203
                }
            case 53:
                var4 = _closure1_slot14;
                var3 = var2.channelId;
                var2 = var1.id;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 75:
                return var0;
        }
    };
    var0 = function(arg0, arg1) { // Original name: processUserInChannel, environment: var7
        _fun96204: for (var _fun96204_ip = 0;;) switch (_fun96204_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = global;
                var6 = var0.Set;
                var2 = _closure1_slot9;
                var12 = var2[var4];
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var13 = var5;
                var2 = new var13[var6](var12, var11);
                var6 = var2 instanceof Object ? var2 : var5;
                var5 = _closure1_slot7;
                var2 = var5.isBlocked;
                var7 = var2.bind(var5)(var3);
                if (!var7) {
                    _fun96204_ip = 92;
                    continue _fun96204
                }
            case 63:
                var2 = var6.has;
                var2 = var2.bind(var6)(var3);
                if (var2) {
                    _fun96204_ip = 92;
                    continue _fun96204
                }
            case 76:
                var2 = var6.add;
                var2 = var2.bind(var6)(var3);
                var9 = true;
                var5 = true;
                _fun96204_ip = 111;
                continue _fun96204;
            case 92:
                var9 = false;
                var5 = false;
                if (var7) {
                    _fun96204_ip = 111;
                    continue _fun96204
                }
            case 99:
                var7 = var6.delete;
                var9 = var7.bind(var6)(var3);
                var5 = false;
            case 111:
                var2 = var6.size;
                var7 = 0;
                if (!(var7 === var2)) {
                    _fun96204_ip = 125;
                    continue _fun96204
                }
            case 122:
                if (var9) {
                    _fun96204_ip = 138;
                    continue _fun96204
                }
            case 125:
                if (!var9) {
                    _fun96204_ip = 146;
                    continue _fun96204
                }
            case 128:
                var2 = _closure1_slot9;
                var2[var4] = var6;
                _fun96204_ip = 146;
                continue _fun96204;
            case 138:
                var2 = _closure1_slot9;
                var2 = delete var2[var4];
            case 146:
                var6 = var0.Set;
                var0 = _closure1_slot10;
                var12 = var0[var4];
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var13 = var2;
                var0 = new var13[var6](var12, var11);
                var6 = var0 instanceof Object ? var0 : var2;
                var2 = _closure1_slot7;
                var0 = var2.isIgnored;
                var8 = var0.bind(var2)(var3);
                if (!var8) {
                    _fun96204_ip = 227;
                    continue _fun96204
                }
            case 198:
                var0 = var6.has;
                var0 = var0.bind(var6)(var3);
                if (var0) {
                    _fun96204_ip = 227;
                    continue _fun96204
                }
            case 211:
                var0 = var6.add;
                var0 = var0.bind(var6)(var3);
                var0 = true;
                var2 = true;
                _fun96204_ip = 249;
                continue _fun96204;
            case 227:
                var0 = var9;
                var2 = var5;
                if (var8) {
                    _fun96204_ip = 249;
                    continue _fun96204
                }
            case 236:
                var8 = var6.delete;
                var0 = var8.bind(var6)(var3);
                var2 = var5;
            case 249:
                var5 = var6.size;
                if (!(var7 === var5)) {
                    _fun96204_ip = 261;
                    continue _fun96204
                }
            case 258:
                if (var0) {
                    _fun96204_ip = 274;
                    continue _fun96204
                }
            case 261:
                if (!var0) {
                    _fun96204_ip = 282;
                    continue _fun96204
                }
            case 264:
                var5 = _closure1_slot10;
                var5[var4] = var6;
                _fun96204_ip = 282;
                continue _fun96204;
            case 274:
                var5 = _closure1_slot10;
                var5 = delete var5[var4];
            case 282:
                if (!var2) {
                    _fun96204_ip = 321;
                    continue _fun96204
                }
            case 285:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.handleBlockedOrIgnoredUserVoiceChannelJoin;
                var1 = var1.bind(var2)(var4, var3);
            case 321:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = {};
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var1 = var1.Set;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var14 = var6;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var7
        var3 = function() { // Original name: VoiceChannelBlockedUserStore, environment: var5
            _fun96206: for (var _fun96206_ip = 0;;) switch (_fun96206_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96206_ip = 69;
                        continue _fun96206
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96206_ip = 105;
                    continue _fun96206;
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
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getBlockedUsersForVoiceChannel';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96208: for (var _fun96208_ip = 0;;) switch (_fun96208_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun96208_ip = 24;
                        continue _fun96208
                    }
                case 20:
                    var0 = _closure1_slot11;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getIgnoredUsersForVoiceChannel';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun96209: for (var _fun96209_ip = 0;;) switch (_fun96209_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun96209_ip = 24;
                        continue _fun96209
                    }
                case 20:
                    var0 = _closure1_slot11;
                case 24:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 9;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.LOGOUT = var8;
    var8 = function() { // Original name: handleOverlayInitialize, environment: var7
        _fun96210: for (var _fun96210_ip = 0;;) switch (_fun96210_ip) {
            case 0:
                var0 = _closure1_slot13;
                var9 = undefined;
                var0 = var0.bind(var9)();
                var1 = _closure1_slot8;
                var0 = var1.getAllVoiceStates;
                var2 = var0.bind(var1)();
                var8 = global;
                var1 = var8.Object;
                var0 = var1.values;
                var7 = var0.bind(var1)(var2);
                var0 = var7.length;
                var6 = 0;
                var1 = var6 < var0;
                var4 = false;
                var5 = null;
                var3 = 0;
                var2 = undefined;
                var0 = false;
                if (!var1) {
                    _fun96210_ip = 196;
                    continue _fun96210
                }
            case 72:
                var12 = var7[var3];
                var11 = var8.Object;
                var1 = var11.values;
                var14 = var1.bind(var11)(var12);
                var1 = var14.length;
                var1 = var6 < var1;
                var13 = var4;
                var12 = 0;
                var11 = var13;
                if (!var1) {
                    _fun96210_ip = 178;
                    continue _fun96210
                }
            case 112:
                var15 = var14[var12];
                var1 = var15.channelId;
                var16 = var13;
                if (!(var5 != var1)) {
                    _fun96210_ip = 157;
                    continue _fun96210
                }
            case 128:
                var18 = _closure1_slot14;
                var17 = var15.channelId;
                var1 = var15.userId;
                var1 = var18.bind(var9)(var17, var1);
                if (var1) {
                    _fun96210_ip = 154;
                    continue _fun96210
                }
            case 151:
                var1 = var13;
            case 154:
                var16 = var1;
            case 157:
                var12 = var12 + 1;
                var1 = var14.length;
                var13 = var16;
                var11 = var13;
                var2 = var15;
                if (var12 < var1) {
                    _fun96210_ip = 112;
                    continue _fun96210
                }
            case 178:
                var3 = var3 + 1;
                var1 = var7.length;
                var4 = var11;
                var0 = var4;
                if (var3 < var1) {
                    _fun96210_ip = 72;
                    continue _fun96210
                }
            case 196:
                return var0;
        }
    };
    var1.OVERLAY_INITIALIZE = var8;
    var7 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var7
        var1 = arg0;
        var3 = var1.voiceStates;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun96212: for (var _fun96212_ip = 0;;) switch (_fun96212_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.oldChannelId;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun96212_ip = 141;
                        continue _fun96212
                    }
                case 18:
                    var4 = _closure1_slot9;
                    var3 = var0.oldChannelId;
                    var3 = var4[var3];
                    if (!(var2 != var3)) {
                        _fun96212_ip = 81;
                        continue _fun96212
                    }
                case 39:
                    var4 = _closure1_slot9;
                    var3 = var0.oldChannelId;
                    var5 = var4[var3];
                    if (!(var2 != var5)) {
                        _fun96212_ip = 72;
                        continue _fun96212
                    }
                case 57:
                    var4 = var5.delete;
                    var3 = var0.userId;
                    var3 = var4.bind(var5)(var3);
                case 72:
                    var3 = true;
                    _closure2_slot0 = var3;
                case 81:
                    var4 = _closure1_slot10;
                    var3 = var0.oldChannelId;
                    var3 = var4[var3];
                    if (!(var2 != var3)) {
                        _fun96212_ip = 141;
                        continue _fun96212
                    }
                case 99:
                    var3 = _closure1_slot10;
                    var1 = var0.oldChannelId;
                    var4 = var3[var1];
                    if (!(var2 != var4)) {
                        _fun96212_ip = 132;
                        continue _fun96212
                    }
                case 117:
                    var3 = var4.delete;
                    var1 = var0.userId;
                    var1 = var3.bind(var4)(var1);
                case 132:
                    var1 = true;
                    _closure2_slot0 = var1;
                case 141:
                    var1 = var0.channelId;
                    if (!(var2 != var1)) {
                        _fun96212_ip = 192;
                        continue _fun96212
                    }
                case 150:
                    var3 = _closure1_slot14;
                    var2 = var0.channelId;
                    var1 = var0.userId;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    if (var1) {
                        _fun96212_ip = 185;
                        continue _fun96212
                    }
                case 178:
                    var1 = _closure2_slot0;
                case 185:
                    _closure2_slot0 = var1;
                case 192:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var7;
    var1.RELATIONSHIP_ADD = var3;
    var1.RELATIONSHIP_REMOVE = var3;
    var1.RELATIONSHIP_UPDATE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3059, 3480, 12489, 566, 806, 2]);