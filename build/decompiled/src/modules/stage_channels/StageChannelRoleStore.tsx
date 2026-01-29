// modules/stage_channels/StageChannelRoleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var10
        _fun38671: for (var _fun38671_ip = 0;;) switch (_fun38671_ip) {
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
                _fun38671_ip = 74;
                continue _fun38671;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var10
        _fun38674: for (var _fun38674_ip = 0;;) switch (_fun38674_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38674_ip = 45;
                    continue _fun38674
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun38674_ip = 54;
                    continue _fun38674
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun38674_ip = 342;
                    continue _fun38674
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun38674_ip = 322;
                    continue _fun38674
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun38674_ip = 282;
                    continue _fun38674
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun38674_ip = 269;
                    continue _fun38674
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
                    _fun38674_ip = 162;
                    continue _fun38674
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun38674_ip = 178;
                    continue _fun38674
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun38674_ip = 248;
                    continue _fun38674
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun38674_ip = 248;
                    continue _fun38674
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun38674_ip = 233;
                    continue _fun38674
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun38674_ip = 246;
                    continue _fun38674
                }
            case 233:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun38674_ip = 264;
                continue _fun38674;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun38674_ip = 282;
                continue _fun38674;
            case 269:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun38674_ip = 322;
                    continue _fun38674
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
                    _fun38674_ip = 329;
                    continue _fun38674
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun38675: for (var _fun38675_ip = 0;;) switch (_fun38675_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun38675_ip = 56;
                                continue _fun38675
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
                            _fun38675_ip = 67;
                            continue _fun38675;
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
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var10
        _fun38676: for (var _fun38676_ip = 0;;) switch (_fun38676_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun38676_ip = 23;
                    continue _fun38676
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun38676_ip = 33;
                    continue _fun38676
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
                    _fun38676_ip = 70;
                    continue _fun38676
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun38676_ip = 55;
                    continue _fun38676
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: isSpeaker, environment: var10
        var4 = _closure1_slot14;
        var3 = var4.getVoiceStateForChannel;
        var2 = arg1;
        var1 = arg0;
        var6 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 11;
        var1 = var4[var0];
        var2 = undefined;
        var5 = var3.bind(var2)(var1);
        var1 = var5.getAudienceRequestToSpeakState;
        var1 = var1.bind(var5)(var6);
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.RequestToSpeakStates;
        var0 = var0.ON_STAGE;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: isModerator, environment: var10
        var3 = arg1;
        var1 = _closure1_slot2;
        var8 = _closure1_slot3;
        var0 = 12;
        var0 = var8[var0];
        var7 = undefined;
        var2 = var1.bind(var7)(var0);
        var1 = var2.can;
        var0 = {};
        var6 = _closure1_slot0;
        var5 = 13;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.MODERATE_STAGE_CHANNEL_PERMISSIONS;
        var0.permission = var5;
        var5 = arg0;
        var0.user = var5;
        var0.context = var3;
        var5 = arg2;
        var5 = var5.permissionOverwrites;
        var0.overwrites = var5;
        var5 = _closure1_slot11;
        var4 = var5.getUnsafeMutableRoles;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var0.roles = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: buildStageChannelUserRoles, environment: var10
        _fun38679: for (var _fun38679_ip = 0;;) switch (_fun38679_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var7 = arguments[2];
                var10 = undefined;
                if (!(var7 === var10)) {
                    _fun38679_ip = 17;
                    continue _fun38679
                }
            case 15:
                var7 = false;
            case 17:
                var0 = _closure1_slot16;
                var0 = var0[var3];
                var6 = null;
                if (!(var6 == var0)) {
                    _fun38679_ip = 44;
                    continue _fun38679
                }
            case 34:
                var4 = _closure1_slot16;
                var0 = {};
                var4[var3] = var0;
            case 44:
                if (!(var7 === var10)) {
                    _fun38679_ip = 50;
                    continue _fun38679
                }
            case 48:
                var7 = false;
            case 50:
                var4 = _closure1_slot9;
                var0 = var4.getChannel;
                var9 = var0.bind(var4)(var3);
                var0 = var6 == var9;
                var5 = undefined;
                if (var0) {
                    _fun38679_ip = 83;
                    continue _fun38679
                }
            case 73:
                var0 = var9.getGuildId;
                var5 = var0.bind(var9)();
            case 83:
                var4 = _closure1_slot12;
                var0 = var4.getGuild;
                var8 = var0.bind(var4)(var5);
                if (!(var6 != var8)) {
                    _fun38679_ip = 118;
                    continue _fun38679
                }
            case 101:
                if (!(var6 != var9)) {
                    _fun38679_ip = 118;
                    continue _fun38679
                }
            case 105:
                var0 = var9.isGuildStageVoice;
                var0 = var0.bind(var9)();
                if (var0) {
                    _fun38679_ip = 124;
                    continue _fun38679
                }
            case 118:
                var0 = _closure1_slot17;
                _fun38679_ip = 185;
                continue _fun38679;
            case 124:
                var4 = {};
                var5 = _closure1_slot15;
                var11 = var5.SPEAKER;
                var5 = _closure1_slot21;
                var5 = var5.bind(var10)(var2, var3);
                var4[var11] = var5;
                var5 = _closure1_slot15;
                var5 = var5.MODERATOR;
                var6 = null;
                if (!var7) {
                    _fun38679_ip = 177;
                    continue _fun38679
                }
            case 166:
                var7 = _closure1_slot22;
                var6 = var7.bind(var10)(var2, var8, var9);
            case 177:
                var4[var5] = var6;
                var0 = var4;
            case 185:
                var1 = _closure1_slot16;
                var1 = var1[var3];
                var1[var2] = var0;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: resetStageChannelRolesForGuild, environment: var10
        _fun38680: for (var _fun38680_ip = 0;;) switch (_fun38680_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getMutableGuildChannelsForGuild;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = global;
                var1 = var0.Object;
                var0 = var1.values;
                var2 = var0.bind(var1)(var2);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.isGuildStageVoice;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var1 = _closure1_slot19;
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun38680_ip = 112;
                    continue _fun38680
                }
            case 79:
                var1 = var2.value;
                var6 = _closure1_slot16;
                var1 = var1.id;
                var1 = delete var6[var1];
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun38680_ip = 79;
                    continue _fun38680
                }
            case 112:
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var11 = function(arg0) { // Original name: handleGuildMemberUpdate, environment: var10
        _fun38682: for (var _fun38682_ip = 0;;) switch (_fun38682_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var1 = var0.user;
                var9 = null;
                var0 = var9 != var1;
                if (!var0) {
                    _fun38682_ip = 26;
                    continue _fun38682
                }
            case 22:
                var0 = var9 != var10;
            case 26:
                if (!var0) {
                    _fun38682_ip = 113;
                    continue _fun38682
                }
            case 29:
                var8 = var1.id;
                var6 = _closure1_slot16;
                var0 = true;
                for (var2 in var6)
                    case 51: {
                        var0 = true;
                        case 62: var12 = var2;
                        var13 = _closure1_slot9;
                        var11 = var13.getBasicChannel;
                        var13 = var11.bind(var13)(var12);
                        var11 = var9 != var13;
                        if (!var11) {
                            _fun38682_ip = 96;
                            continue _fun38682
                        }
                        case 87: var13 = var13.guild_id;
                        var11 = var13 === var10;
                        case 96: if (!var11) {
                            _fun38682_ip = 51;
                            continue _fun38682
                        }
                        case 99: var11 = _closure1_slot16;
                        var11 = var11[var12];
                        var11 = delete var11[var8];
                        _fun38682_ip = 51;
                        continue _fun38682;
                    }
            case 113:
                return var0;
        }
    };
    var5 = function(arg0) { // Original name: handleGuildCreateOrDelete, environment: var10
        _fun38683: for (var _fun38683_ip = 0;;) switch (_fun38683_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild;
                var5 = _closure1_slot16;
                var0 = null;
                for (var1 in var5)
                    case 25: {
                        case 34: var9 = var1;
                        var10 = _closure1_slot9;
                        var8 = var10.getBasicChannel;
                        var10 = var8.bind(var10)(var9);
                        var8 = var0 != var10;
                        if (!var8) {
                            _fun38683_ip = 73;
                            continue _fun38683
                        }
                        case 59: var11 = var10.guild_id;
                        var10 = var7.id;
                        var8 = var11 !== var10;
                        case 73: if (var8) {
                            _fun38683_ip = 25;
                            continue _fun38683
                        }
                        case 76: var8 = _closure1_slot16;
                        var8 = delete var8[var9];
                        _fun38683_ip = 25;
                        continue _fun38683;
                    }
            case 86:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var3 = {};
    var1 = 'speaker';
    var3.SPEAKER = var1;
    var1 = 'moderator';
    var3.MODERATOR = var1;
    var _closure1_slot15 = var3;
    var1 = {};
    var _closure1_slot16 = var1;
    var1 = {};
    var4 = var3.SPEAKER;
    var9 = false;
    var1[var4] = var9;
    var4 = var3.MODERATOR;
    var1[var4] = var9;
    var _closure1_slot17 = var1;
    var4 = 16;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.Store;
    var4 = function(arg0) { // Environment: var10
        var3 = function() { // Original name: StageChannelRoleStore, environment: var5
            _fun38685: for (var _fun38685_ip = 0;;) switch (_fun38685_ip) {
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
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38685_ip = 69;
                        continue _fun38685
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38685_ip = 105;
                    continue _fun38685;
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
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var8 = _closure1_slot11;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'isSpeaker';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.getPermissionsForUser;
            var1 = arg0;
            var0 = arg1;
            var1 = var2.bind(var3)(var1, var0);
            var0 = _closure1_slot15;
            var0 = var0.SPEAKER;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isModerator';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38688: for (var _fun38688_ip = 0;;) switch (_fun38688_ip) {
                case 0:
                    var4 = this;
                    var3 = var4.getPermissionsForUser;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = true;
                    var1 = var3.bind(var4)(var2, var1, var0);
                    var0 = _closure1_slot15;
                    var0 = var0.MODERATOR;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun38688_ip = 53;
                        continue _fun38688
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isAudienceMember';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38689: for (var _fun38689_ip = 0;;) switch (_fun38689_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getPermissionsForUser;
                    var1 = arg0;
                    var0 = arg1;
                    var2 = var2.bind(var3)(var1, var0);
                    var0 = _closure1_slot15;
                    var0 = var0.SPEAKER;
                    var0 = var2[var0];
                    var0 = !var0;
                    if (!var0) {
                        _fun38689_ip = 61;
                        continue _fun38689
                    }
                case 44:
                    var1 = _closure1_slot15;
                    var1 = var1.MODERATOR;
                    var1 = var2[var1];
                    var0 = !var1;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getPermissionsForUser';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun38690: for (var _fun38690_ip = 0;;) switch (_fun38690_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var3 = arguments[2];
                    var5 = undefined;
                    if (!(var3 === var5)) {
                        _fun38690_ip = 17;
                        continue _fun38690
                    }
                case 15:
                    var3 = false;
                case 17:
                    var4 = null;
                    if (!(var4 != var7)) {
                        _fun38690_ip = 189;
                        continue _fun38690
                    }
                case 26:
                    if (!(var4 != var6)) {
                        _fun38690_ip = 189;
                        continue _fun38690
                    }
                case 33:
                    var2 = _closure1_slot13;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var8 = var4 == var2;
                    var1 = undefined;
                    if (var8) {
                        _fun38690_ip = 63;
                        continue _fun38690
                    }
                case 58:
                    var1 = var2.id;
                case 63:
                    if (!(var7 === var1)) {
                        _fun38690_ip = 100;
                        continue _fun38690
                    }
                case 67:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 15;
                    var1 = var8[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.isStageSpeakingDisabledForCurrentUser;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun38690_ip = 183;
                        continue _fun38690
                    }
                case 100:
                    var1 = _closure1_slot16;
                    var1 = var1[var6];
                    var2 = var4 == var1;
                    var8 = undefined;
                    if (var2) {
                        _fun38690_ip = 121;
                        continue _fun38690
                    }
                case 117:
                    var8 = var1[var7];
                case 121:
                    if (!(var4 == var8)) {
                        _fun38690_ip = 138;
                        continue _fun38690
                    }
                case 125:
                    var1 = _closure1_slot23;
                    var1 = var1.bind(var5)(var7, var6, var3);
                    _fun38690_ip = 181;
                    continue _fun38690;
                case 138:
                    var2 = var8;
                    if (!var3) {
                        _fun38690_ip = 178;
                        continue _fun38690
                    }
                case 144:
                    var3 = _closure1_slot15;
                    var3 = var3.MODERATOR;
                    var3 = var8[var3];
                    var2 = var8;
                    if (!(var4 == var3)) {
                        _fun38690_ip = 178;
                        continue _fun38690
                    }
                case 165:
                    var4 = _closure1_slot23;
                    var3 = true;
                    var2 = var4.bind(var5)(var7, var6, var3);
                case 178:
                    var1 = var2;
                case 181:
                    return var1;
                case 183:
                    var0 = _closure1_slot17;
                    return var0;
                case 189:
                    var0 = _closure1_slot17;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'StageChannelRoleStore';
    var9.displayName = var4;
    var4 = 17;
    var4 = var7[var4];
    var15 = var8.bind(var0)(var4);
    var4 = {};
    var12 = function(arg0) { // Original name: handleChannelUpdate, environment: var10
        _fun38691: for (var _fun38691_ip = 0;;) switch (_fun38691_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channels;
                var1 = _closure1_slot19;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun38691_ip = 68;
                    continue _fun38691
                }
            case 35:
                var1 = var2.value;
                var5 = _closure1_slot16;
                var1 = var1.id;
                var1 = delete var5[var1];
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun38691_ip = 35;
                    continue _fun38691
                }
            case 68:
                return var0;
        }
    };
    var4.CHANNEL_UPDATES = var12;
    var12 = function() { // Original name: handleConnectionOpen, environment: var10
        var0 = {};
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var4.CONNECTION_OPEN = var12;
    var4.GUILD_MEMBER_REMOVE = var11;
    var4.GUILD_MEMBER_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleGuildRoleUpdate, environment: var10
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot24;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.GUILD_ROLE_UPDATE = var11;
    var11 = function(arg0) { // Original name: handlePassiveUpdateV2, environment: var10
        var2 = _closure1_slot24;
        var0 = arg0;
        var1 = var0.guildId;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var4.PASSIVE_UPDATE_V2 = var11;
    var10 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var10
        _fun38695: for (var _fun38695_ip = 0;;) switch (_fun38695_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.voiceStates;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.isEmpty;
                var0 = _closure1_slot16;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun38695_ip = 76;
                    continue _fun38695
                }
            case 55:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun38696: for (var _fun38696_ip = 0;;) switch (_fun38696_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            var5 = var0.userId;
                            var6 = var0.channelId;
                            var3 = null;
                            var2 = var3 == var6;
                            var0 = false;
                            if (var2) {
                                _fun38696_ip = 93;
                                continue _fun38696
                            }
                        case 27:
                            var7 = _closure1_slot9;
                            var2 = var7.getChannel;
                            var8 = var2.bind(var7)(var6);
                            var2 = var3 == var8;
                            if (var2) {
                                _fun38696_ip = 64;
                                continue _fun38696
                            }
                        case 51:
                            var7 = var8.isGuildStageVoice;
                            var7 = var7.bind(var8)();
                            var2 = !var7;
                        case 64:
                            if (var2) {
                                _fun38696_ip = 90;
                                continue _fun38696
                            }
                        case 67:
                            var4 = _closure1_slot16;
                            var4 = var4[var6];
                            var6 = var3 == var4;
                            var2 = 0;
                            if (var6) {
                                _fun38696_ip = 90;
                                continue _fun38696
                            }
                        case 84:
                            var4 = delete var4[var5];
                            var2 = 0;
                        case 90:
                            var0 = !var2;
                        case 93:
                            if (var0) {
                                _fun38696_ip = 99;
                                continue _fun38696
                            }
                        case 96:
                            var0 = var1;
                        case 99:
                            return var0;
                    }
                };
                var1 = false;
                var0 = var3.bind(var4)(var2, var1);
            case 76:
                return var0;
        }
    };
    var4.VOICE_STATE_UPDATES = var10;
    var4.GUILD_CREATE = var5;
    var4.GUILD_DELETE = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageChannelRoleStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.StagePermissionBuckets = var3;
    var2.NO_PERMISSIONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1672, 1665, 1410, 1613, 3480, 4196, 3055, 1380, 22, 4205, 566, 806, 2]);