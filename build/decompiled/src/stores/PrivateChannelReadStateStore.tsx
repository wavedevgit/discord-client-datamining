// stores/PrivateChannelReadStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96662: for (var _fun96662_ip = 0;;) switch (_fun96662_ip) {
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
                _fun96662_ip = 76;
                continue _fun96662;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun96665: for (var _fun96665_ip = 0;;) switch (_fun96665_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96665_ip = 45;
                    continue _fun96665
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96665_ip = 54;
                    continue _fun96665
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96665_ip = 344;
                    continue _fun96665
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96665_ip = 322;
                    continue _fun96665
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96665_ip = 282;
                    continue _fun96665
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96665_ip = 269;
                    continue _fun96665
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
                    _fun96665_ip = 162;
                    continue _fun96665
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96665_ip = 178;
                    continue _fun96665
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96665_ip = 248;
                    continue _fun96665
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96665_ip = 248;
                    continue _fun96665
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96665_ip = 233;
                    continue _fun96665
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96665_ip = 246;
                    continue _fun96665
                }
            case 233:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96665_ip = 264;
                continue _fun96665;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96665_ip = 282;
                continue _fun96665;
            case 269:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96665_ip = 322;
                    continue _fun96665
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
                    _fun96665_ip = 329;
                    continue _fun96665
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96666: for (var _fun96666_ip = 0;;) switch (_fun96666_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96666_ip = 56;
                                continue _fun96666
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
                            _fun96666_ip = 67;
                            continue _fun96666;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun96667: for (var _fun96667_ip = 0;;) switch (_fun96667_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96667_ip = 23;
                    continue _fun96667
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96667_ip = 33;
                    continue _fun96667
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
                    _fun96667_ip = 70;
                    continue _fun96667
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96667_ip = 55;
                    continue _fun96667
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: rebuildUnreads, environment: var3
        _fun96668: for (var _fun96668_ip = 0;;) switch (_fun96668_ip) {
            case 0:
                var1 = _closure1_slot11;
                var0 = var1.getPrivateChannelIds;
                var3 = var0.bind(var1)();
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getMentionCount;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var4 = var1.bind(var3)(var0);
                var1 = var4.length;
                var0 = 20;
                if (!(var1 > var0)) {
                    _fun96668_ip = 54;
                    continue _fun96668
                }
            case 48:
                var4.length = var0;
            case 54:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.areArraysShallowlyEqual;
                var0 = _closure1_slot12;
                var0 = var1.bind(var3)(var4, var0);
                var0 = !var0;
                if (!var0) {
                    _fun96668_ip = 139;
                    continue _fun96668
                }
            case 98:
                _closure1_slot12 = var4;
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var3;
                var6 = var4;
                var1 = new var7[var1](var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot13 = var1;
                var0 = true;
            case 139:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var9 = function() { // Original name: handleConnectionOpen, environment: var3
        var1 = _closure1_slot17;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var8 = function(arg0) { // Original name: handleGenericUpdate, environment: var3
        _fun96671: for (var _fun96671_ip = 0;;) switch (_fun96671_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot8;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                var2 = var2 == var0;
                if (var2) {
                    _fun96671_ip = 53;
                    continue _fun96671
                }
            case 34:
                var4 = _closure1_slot7;
                var3 = var0.type;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var2 = !var0;
            case 53:
                var0 = !var2;
                if (var2) {
                    _fun96671_ip = 69;
                    continue _fun96671
                }
            case 59:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 69:
                return var0;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.isPrivate;
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = new Array(0);
    var _closure1_slot12 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: PrivateChannelReadStateStore, environment: var5
            _fun96673: for (var _fun96673_ip = 0;;) switch (_fun96673_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96673_ip = 69;
                        continue _fun96673
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96673_ip = 105;
                    continue _fun96673;
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
            var5 = this;
            var4 = var5.waitFor;
            var9 = _closure1_slot11;
            var8 = _closure1_slot8;
            var7 = _closure1_slot10;
            var6 = _closure1_slot9;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUnreadPrivateChannelIds';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PrivateChannelReadStateStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var9;
    var1.OVERLAY_INITIALIZE = var9;
    var1.MESSAGE_CREATE = var8;
    var1.MESSAGE_ACK = var8;
    var8 = function(arg0) { // Original name: handleChannelSelect, environment: var3
        _fun96676: for (var _fun96676_ip = 0;;) switch (_fun96676_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot8;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                var2 = var2 == var0;
                if (var2) {
                    _fun96676_ip = 53;
                    continue _fun96676
                }
            case 34:
                var4 = _closure1_slot7;
                var3 = var0.type;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var2 = !var0;
            case 53:
                var0 = !var2;
                if (var2) {
                    _fun96676_ip = 69;
                    continue _fun96676
                }
            case 59:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 69:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        _fun96677: for (var _fun96677_ip = 0;;) switch (_fun96677_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.id;
                var2 = _closure1_slot13;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun96677_ip = 49;
                    continue _fun96677
                }
            case 39:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 49:
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function() { // Original name: handleWindowFocus, environment: var3
        _fun96678: for (var _fun96678_ip = 0;;) switch (_fun96678_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var4 = _closure1_slot10;
                var0 = var4.getChannelId;
                var0 = var0.bind(var4)();
                var0 = var2.bind(var3)(var0);
                var2 = null;
                var2 = var2 == var0;
                if (var2) {
                    _fun96678_ip = 59;
                    continue _fun96678
                }
            case 40:
                var4 = _closure1_slot7;
                var3 = var0.type;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var2 = !var0;
            case 59:
                var0 = !var2;
                if (var2) {
                    _fun96678_ip = 75;
                    continue _fun96678
                }
            case 65:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 75:
                return var0;
        }
    };
    var1.WINDOW_FOCUS = var8;
    var8 = function(arg0) { // Original name: handleChannelCreate, environment: var3
        _fun96679: for (var _fun96679_ip = 0;;) switch (_fun96679_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = var0.id;
                var2 = _closure1_slot8;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                var2 = var2 == var0;
                if (var2) {
                    _fun96679_ip = 58;
                    continue _fun96679
                }
            case 39:
                var4 = _closure1_slot7;
                var3 = var0.type;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var2 = !var0;
            case 58:
                var0 = !var2;
                if (var2) {
                    _fun96679_ip = 74;
                    continue _fun96679
                }
            case 64:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 74:
                return var0;
        }
    };
    var1.CHANNEL_CREATE = var8;
    var3 = function(arg0) { // Original name: handleChannelUpdates, environment: var3
        _fun96680: for (var _fun96680_ip = 0;;) switch (_fun96680_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channels;
                var0 = _closure1_slot15;
                var2 = undefined;
                var8 = var0.bind(var2)(var3);
                var4 = var8.bind(var2)();
                var0 = var4.done;
                var6 = null;
                var5 = var4;
                var4 = false;
                var3 = false;
                if (var0) {
                    _fun96680_ip = 112;
                    continue _fun96680
                }
            case 44:
                var0 = var5.value;
                var10 = var0.id;
                var9 = _closure1_slot8;
                var0 = var9.getChannel;
                var9 = var0.bind(var9)(var10);
                var0 = var6 != var9;
                if (!var0) {
                    _fun96680_ip = 89;
                    continue _fun96680
                }
            case 75:
                var10 = _closure1_slot7;
                var9 = var9.type;
                var0 = var10.bind(var2)(var9);
            case 89:
                if (!var0) {
                    _fun96680_ip = 94;
                    continue _fun96680
                }
            case 92:
                var4 = true;
            case 94:
                var10 = var8.bind(var2)();
                var0 = var10.done;
                var5 = var10;
                var3 = var4;
                if (!var0) {
                    _fun96680_ip = 44;
                    continue _fun96680
                }
            case 112:
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun96680_ip = 129;
                    continue _fun96680
                }
            case 121:
                var1 = _closure1_slot17;
                var0 = var1.bind(var2)();
            case 129:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PrivateChannelReadStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 1372, 3907, 1661, 8293, 1671, 566, 806, 2]);