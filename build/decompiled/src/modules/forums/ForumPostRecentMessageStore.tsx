// modules/forums/ForumPostRecentMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
        _fun76457: for (var _fun76457_ip = 0;;) switch (_fun76457_ip) {
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
                _fun76457_ip = 76;
                continue _fun76457;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: isValidMessage, environment: var8
        _fun76460: for (var _fun76460_ip = 0;;) switch (_fun76460_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot8;
                var3 = var4.getChannel;
                var5 = null;
                var7 = var5 == var0;
                var6 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun76460_ip = 33;
                    continue _fun76460
                }
            case 28:
                var2 = var0.channel_id;
            case 33:
                var2 = var3.bind(var4)(var2);
                if (!(var5 != var2)) {
                    _fun76460_ip = 154;
                    continue _fun76460
                }
            case 42:
                var3 = var2.isForumPost;
                var3 = var3.bind(var2)();
                if (!var3) {
                    _fun76460_ip = 154;
                    continue _fun76460
                }
            case 55:
                var3 = _closure1_slot10;
                var2 = var2.id;
                var4 = var3[var2];
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = var2.bind(var6)(var1);
                var2 = var3.compare;
                var7 = var5 == var0;
                var1 = undefined;
                if (var7) {
                    _fun76460_ip = 108;
                    continue _fun76460
                }
            case 103:
                var1 = var0.id;
            case 108:
                var7 = var5 == var4;
                var0 = undefined;
                if (var7) {
                    _fun76460_ip = 136;
                    continue _fun76460
                }
            case 117:
                var4 = var4.message;
                var5 = var5 == var4;
                var0 = undefined;
                if (var5) {
                    _fun76460_ip = 136;
                    continue _fun76460
                }
            case 131:
                var0 = var4.id;
            case 136:
                var1 = var2.bind(var3)(var1, var0);
                var0 = -1;
                var0 = var1 > var0;
                return var0;
            case 154:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: set, environment: var8
        _fun76461: for (var _fun76461_ip = 0;;) switch (_fun76461_ip) {
            case 0:
                var3 = arg1;
                var1 = null;
                var0 = var1 == var3;
                if (var0) {
                    _fun76461_ip = 48;
                    continue _fun76461
                }
            case 12:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.createMessageRecord;
                var1 = var0.bind(var2)(var3);
            case 48:
                var3 = _closure1_slot10;
                var2 = {};
                var0 = true;
                var2.loaded = var0;
                var2.message = var1;
                var1 = arg0;
                var3[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: getMessageState, environment: var8
        var1 = _closure1_slot10;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getMessage, environment: var8
        _fun76463: for (var _fun76463_ip = 0;;) switch (_fun76463_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun76463_ip = 31;
                    continue _fun76463
                }
            case 26:
                var0 = var1.message;
            case 31:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var3 = function(arg0) { // Original name: handleLoadThreadsSuccess, environment: var8
        _fun76464: for (var _fun76464_ip = 0;;) switch (_fun76464_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.threads;
                var3 = var1.mostRecentMessages;
                var2 = var4.forEach;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot13;
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = undefined;
                    var0 = null;
                    var0 = var3.bind(var1)(var2, var0);
                    var0 = true;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun76464_ip = 98;
                    continue _fun76464
                }
            case 40:
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var3)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = _closure1_slot13;
                    var1 = var3.channel_id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 98:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() { // Original name: ForumPostRecentMessageStore, environment: var5
            _fun76468: for (var _fun76468_ip = 0;;) switch (_fun76468_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun76468_ip = 69;
                        continue _fun76468
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun76468_ip = 105;
                    continue _fun76468;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMessageState';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun76470: for (var _fun76470_ip = 0;;) switch (_fun76470_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot10;
                    var2 = var1 in var2;
                    if (var2) {
                        _fun76470_ip = 35;
                        continue _fun76470
                    }
                case 17:
                    var3 = _closure1_slot10;
                    var2 = {
                        'loaded': false,
                        'message': null
                    };
                    var3[var1] = var2;
                case 35:
                    var0 = _closure1_slot10;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ForumPostRecentMessageStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() { // Original name: handleConnectionOpen, environment: var8
        var0 = {};
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function(arg0) { // Original name: handleMessageCreate, environment: var8
        _fun76472: for (var _fun76472_ip = 0;;) switch (_fun76472_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.isPushNotification;
                var0 = !var0;
                if (!var0) {
                    _fun76472_ip = 157;
                    continue _fun76472
                }
            case 18:
                var5 = _closure1_slot12;
                var1 = var3.message;
                var2 = undefined;
                var5 = var5.bind(var2)(var1);
                var1 = !var5;
                var1 = !var1;
                if (!var5) {
                    _fun76472_ip = 154;
                    continue _fun76472
                }
            case 46:
                var5 = var3.message;
                var6 = var5.channel_id;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var8 = var7.bind(var2)(var5);
                var7 = var8.castMessageIdAsChannelId;
                var5 = var3.message;
                var5 = var5.id;
                var5 = var7.bind(var8)(var5);
                if (!(var6 !== var5)) {
                    _fun76472_ip = 130;
                    continue _fun76472
                }
            case 101:
                var7 = _closure1_slot13;
                var5 = var3.message;
                var6 = var5.channel_id;
                var5 = var3.message;
                var5 = var7.bind(var2)(var6, var5);
                var1 = undefined;
                _fun76472_ip = 154;
                continue _fun76472;
            case 130:
                var5 = _closure1_slot13;
                var3 = var3.message;
                var4 = var3.channel_id;
                var3 = null;
                var3 = var5.bind(var2)(var4, var3);
                var1 = undefined;
            case 154:
                var0 = var1;
            case 157:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var9;
    var9 = function(arg0) { // Original name: handleMessageUpdate, environment: var8
        _fun76473: for (var _fun76473_ip = 0;;) switch (_fun76473_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot12;
                var0 = var2.message;
                var10 = undefined;
                var1 = var1.bind(var10)(var0);
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun76473_ip = 178;
                    continue _fun76473
                }
            case 34:
                var1 = var2.message;
                var3 = var1.channel_id;
                var1 = var2.message;
                var1 = var1.id;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun76473_ip = 175;
                    continue _fun76473
                }
            case 61:
                var3 = var2.message;
                var5 = var3.channel_id;
                var9 = var2.message;
                var2 = _closure1_slot14;
                var7 = var2.bind(var10)(var5);
                var2 = _closure1_slot15;
                var8 = var2.bind(var10)(var5);
                var3 = null;
                var2 = var3 != var7;
                if (!var2) {
                    _fun76473_ip = 107;
                    continue _fun76473
                }
            case 103:
                var2 = var3 != var8;
            case 107:
                if (!var2) {
                    _fun76473_ip = 173;
                    continue _fun76473
                }
            case 110:
                var4 = _closure1_slot10;
                var3 = {};
                var13 = var3;
                var12 = var7;
                var7 = copyDataProperties(var13, var12);
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 8;
                var6 = var11[var6];
                var7 = var7.bind(var10)(var6);
                var6 = var7.updateMessageRecord;
                var7 = var6.bind(var7)(var8, var9);
                var6 = 'message';
                var3[var6] = var7;
                var4[var5] = var3;
                var2 = true;
            case 173:
                var1 = undefined;
            case 175:
                var0 = var1;
            case 178:
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleMessageDelete, environment: var8
        _fun76474: for (var _fun76474_ip = 0;;) switch (_fun76474_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = var0.id;
                var4 = _closure1_slot15;
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var5 = null;
                var5 = var5 == var4;
                if (var5) {
                    _fun76474_ip = 41;
                    continue _fun76474
                }
            case 36:
                var0 = var4.id;
            case 41:
                var0 = var0 === var3;
                if (!var0) {
                    _fun76474_ip = 58;
                    continue _fun76474
                }
            case 48:
                var1 = _closure1_slot10;
                var1 = delete var1[var2];
                var0 = true;
            case 58:
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var9;
    var8 = function(arg0) { // Original name: handlePostChannelLoadData, environment: var8
        _fun76475: for (var _fun76475_ip = 0;;) switch (_fun76475_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.threads;
                var5 = var7;
                var0 = undefined;
                for (var2 in var5)
                    case 25: {
                        case 34: var10 = var2;
                        var9 = _closure1_slot13;
                        var8 = var7[var10];
                        var8 = var8.most_recent_message;
                        var8 = var9.bind(var0)(var10, var8);
                        _fun76475_ip = 25;
                        continue _fun76475;
                    }
            case 59:
                return var0;
        }
    };
    var1.LOAD_FORUM_POSTS = var8;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var3;
    var1.LOAD_THREADS_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumPostRecentMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1613, 21, 3932, 1304, 566, 806, 2]);