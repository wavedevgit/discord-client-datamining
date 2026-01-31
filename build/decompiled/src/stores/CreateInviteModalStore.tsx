// stores/CreateInviteModalStore.tsx
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
        _fun67110: for (var _fun67110_ip = 0;;) switch (_fun67110_ip) {
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
                _fun67110_ip = 76;
                continue _fun67110;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: updateWithLatestInvite, environment: var3
        _fun67113: for (var _fun67113_ip = 0;;) switch (_fun67113_ip) {
            case 0:
                var8 = arg0;
                var0 = arg1;
                var6 = var0.targetType;
                var5 = var0.targetUserId;
                var3 = var0.targetApplicationId;
                var1 = _closure1_slot8;
                var0 = var1.getChannel;
                var10 = var0.bind(var1)(var8);
                var9 = _closure1_slot9;
                var7 = var9.getGuild;
                var4 = null;
                var11 = var4 == var10;
                var0 = undefined;
                var1 = undefined;
                if (var11) {
                    _fun67113_ip = 68;
                    continue _fun67113
                }
            case 63:
                var1 = var10.guild_id;
            case 68:
                var10 = var7.bind(var9)(var1);
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var9 = var7.bind(var0)(var1);
                var7 = var9.getDefaultInviteExpiration;
                var1 = {};
                var1.guild = var10;
                var7 = var7.bind(var9)(var1);
                var10 = _closure1_slot10;
                var9 = var10.getInvite;
                var1 = {};
                var1.targetType = var6;
                var1.targetUserId = var5;
                var1.targetApplicationId = var3;
                var1 = var9.bind(var10)(var8, var1);
                var _closure1_slot14 = var1;
                var1 = {};
                var1.channelId = var8;
                var8 = _closure1_slot14;
                if (!(var4 != var8)) {
                    _fun67113_ip = 171;
                    continue _fun67113
                }
            case 161:
                var8 = _closure1_slot14;
                var7 = var8.maxAge;
            case 171:
                var1.maxAge = var7;
                var7 = _closure1_slot14;
                if (!(var4 == var7)) {
                    _fun67113_ip = 190;
                    continue _fun67113
                }
            case 184:
                var7 = _closure1_slot18;
                _fun67113_ip = 200;
                continue _fun67113;
            case 190:
                var8 = _closure1_slot14;
                var7 = var8.maxUses;
            case 200:
                var1.maxUses = var7;
                var7 = _closure1_slot14;
                var7 = var4 != var7;
                if (!var7) {
                    _fun67113_ip = 226;
                    continue _fun67113
                }
            case 216:
                var8 = _closure1_slot14;
                var7 = var8.temporary;
            case 226:
                var1.temporary = var7;
                var7 = _closure1_slot14;
                var8 = var4 != var7;
                var7 = 0;
                if (!var8) {
                    _fun67113_ip = 253;
                    continue _fun67113
                }
            case 244:
                var8 = _closure1_slot14;
                var7 = var8.flags;
            case 253:
                var1.flags = var7;
                var1.targetType = var6;
                var1.targetUserId = var5;
                var1.targetApplicationId = var3;
                var5 = _closure1_slot14;
                var6 = var4 == var5;
                var3 = undefined;
                if (var6) {
                    _fun67113_ip = 319;
                    continue _fun67113
                }
            case 285:
                var7 = var5.roles;
                var5 = var4 == var7;
                var3 = undefined;
                if (var5) {
                    _fun67113_ip = 319;
                    continue _fun67113
                }
            case 300:
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var6.bind(var7)(var5);
            case 319:
                if (!(var4 == var3)) {
                    _fun67113_ip = 327;
                    continue _fun67113
                }
            case 323:
                var3 = new Array(0);
            case 327:
                var1.roleIds = var3;
                var _closure1_slot15 = var1;
                var _closure1_slot16 = var1;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: init, environment: var3
        _fun67115: for (var _fun67115_ip = 0;;) switch (_fun67115_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure1_slot12 = var0;
                var0 = null;
                var _closure1_slot13 = var0;
                var3 = var1.targetType;
                var4 = var0 != var3;
                var5 = null;
                if (!var4) {
                    _fun67115_ip = 39;
                    continue _fun67115
                }
            case 36:
                var5 = var3;
            case 39:
                var3 = var1.targetUserId;
                var6 = var0 != var3;
                var4 = null;
                if (!var6) {
                    _fun67115_ip = 57;
                    continue _fun67115
                }
            case 54:
                var4 = var3;
            case 57:
                var3 = var1.targetApplicationId;
                var6 = var0 != var3;
                var0 = null;
                if (!var6) {
                    _fun67115_ip = 75;
                    continue _fun67115
                }
            case 72:
                var0 = var3;
            case 75:
                var3 = _closure1_slot22;
                var2 = var1.channelId;
                var1 = {};
                var1.targetType = var5;
                var1.targetUserId = var4;
                var1.targetApplicationId = var0;
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.FormStates;
    var _closure1_slot11 = var1;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.INVITE_OPTIONS_UNLIMITED;
    var7 = var7.value;
    var _closure1_slot18 = var7;
    var1 = var1.CLOSED;
    var _closure1_slot19 = var1;
    var1 = false;
    var _closure1_slot20 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: CreateInviteModalStore, environment: var5
            _fun67117: for (var _fun67117_ip = 0;;) switch (_fun67117_ip) {
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
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67117_ip = 69;
                        continue _fun67117
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67117_ip = 105;
                    continue _fun67117;
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
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var0 = _closure1_slot10;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'init';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot10;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isOpen';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot19;
            var0 = _closure1_slot11;
            var0 = var0.CLOSED;
            var0 = var1 !== var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSubmitting';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGuildId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getInvite';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getInviteSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getPendingSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'onClose';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot17;
            return var0;
        };
        var4.get = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'CreateInviteModalStore';
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleInit, environment: var3
        var2 = _closure1_slot23;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.CREATE_INVITE_MODAL_INIT = var8;
    var8 = function(arg0) { // Original name: handleModalOpen, environment: var3
        _fun67130: for (var _fun67130_ip = 0;;) switch (_fun67130_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot11;
                var0 = var0.OPEN;
                _closure1_slot19 = var0;
                var4 = var2.onClose;
                var0 = null;
                var5 = var0 != var4;
                var0 = undefined;
                var3 = undefined;
                if (!var5) {
                    _fun67130_ip = 42;
                    continue _fun67130
                }
            case 39:
                var3 = var4;
            case 42:
                var _closure1_slot17 = var3;
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.CREATE_INVITE_MODAL_OPEN = var8;
    var8 = function(arg0) { // Original name: handleUpdateSettings, environment: var3
        _fun67131: for (var _fun67131_ip = 0;;) switch (_fun67131_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.settings;
                var3 = _closure1_slot16;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun67131_ip = 49;
                    continue _fun67131
                }
            case 22:
                var0 = {};
                var4 = _closure1_slot16;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var5 = var0;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                _closure1_slot16 = var0;
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var1.CREATE_INVITE_MODAL_UPDATE_SETTINGS = var8;
    var8 = function() { // Original name: handleResetSettings, environment: var3
        var0 = _closure1_slot15;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CREATE_INVITE_MODAL_RESET_SETTINGS = var8;
    var8 = function() { // Original name: handleGenerateInvite, environment: var3
        var0 = _closure1_slot16;
        _closure1_slot15 = var0;
        var0 = true;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CREATE_INVITE_MODAL_GENERATE_INVITE = var8;
    var8 = function(arg0) { // Original name: handleGenerateInviteSuccess, environment: var3
        var0 = arg0;
        var3 = var0.channelId;
        var4 = null;
        _closure1_slot13 = var4;
        var0 = false;
        _closure1_slot20 = var0;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var2);
        var2 = _closure1_slot15;
        var4 = var4 != var2;
        var2 = 'No invite settings for generated invite';
        var2 = var5.bind(var0)(var4, var2);
        var4 = _closure1_slot15;
        var2 = _closure1_slot22;
        var1 = {};
        var5 = var4.targetType;
        var1.targetType = var5;
        var5 = var4.targetUserId;
        var1.targetUserId = var5;
        var4 = var4.targetApplicationId;
        var1.targetApplicationId = var4;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleGenerateInviteFailure, environment: var3
        var0 = null;
        _closure1_slot14 = var0;
        var0 = false;
        _closure1_slot20 = var0;
        var0 = arg0;
        var0 = var0.message;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE = var8;
    var3 = function() { // Original name: handleModalClose, environment: var3
        var0 = _closure1_slot11;
        var0 = var0.CLOSED;
        _closure1_slot19 = var0;
        var0 = undefined;
        _closure1_slot17 = var0;
        return var0;
    };
    var1.CREATE_INVITE_MODAL_CLOSE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/CreateInviteModalStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1410, 5861, 660, 8291, 8297, 44, 566, 806, 2]);