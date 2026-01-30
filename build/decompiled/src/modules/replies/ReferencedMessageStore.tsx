// modules/replies/ReferencedMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var9
        _fun39128: for (var _fun39128_ip = 0;;) switch (_fun39128_ip) {
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
                _fun39128_ip = 74;
                continue _fun39128;
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var9
        _fun39131: for (var _fun39131_ip = 0;;) switch (_fun39131_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39131_ip = 45;
                    continue _fun39131
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun39131_ip = 54;
                    continue _fun39131
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun39131_ip = 342;
                    continue _fun39131
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39131_ip = 322;
                    continue _fun39131
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39131_ip = 282;
                    continue _fun39131
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39131_ip = 269;
                    continue _fun39131
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
                    _fun39131_ip = 162;
                    continue _fun39131
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun39131_ip = 178;
                    continue _fun39131
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39131_ip = 248;
                    continue _fun39131
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39131_ip = 248;
                    continue _fun39131
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39131_ip = 233;
                    continue _fun39131
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39131_ip = 246;
                    continue _fun39131
                }
            case 233:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun39131_ip = 264;
                continue _fun39131;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun39131_ip = 282;
                continue _fun39131;
            case 269:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun39131_ip = 322;
                    continue _fun39131
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
                    _fun39131_ip = 329;
                    continue _fun39131
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39132: for (var _fun39132_ip = 0;;) switch (_fun39132_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39132_ip = 56;
                                continue _fun39132
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
                            _fun39132_ip = 67;
                            continue _fun39132;
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
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var9
        _fun39133: for (var _fun39133_ip = 0;;) switch (_fun39133_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39133_ip = 23;
                    continue _fun39133
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39133_ip = 33;
                    continue _fun39133
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
                    _fun39133_ip = 70;
                    continue _fun39133
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39133_ip = 55;
                    continue _fun39133
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: processMessage, environment: var9
        _fun39134: for (var _fun39134_ip = 0;;) switch (_fun39134_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot17;
                var0 = var1.updateExistingMessageIfCached;
                var1 = var0.bind(var1)(var2);
                var0 = false;
                if (!var1) {
                    _fun39134_ip = 30;
                    continue _fun39134
                }
            case 28:
                var0 = true;
            case 30:
                var5 = _closure1_slot12;
                var4 = var5.has;
                var1 = var2.type;
                var4 = var4.bind(var5)(var1);
                var1 = var0;
                if (!var4) {
                    _fun39134_ip = 364;
                    continue _fun39134
                }
            case 58:
                var5 = var2.message_reference;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun39134_ip = 368;
                    continue _fun39134
                }
            case 73:
                var9 = var5.message_id;
                if (!(var4 != var9)) {
                    _fun39134_ip = 366;
                    continue _fun39134
                }
            case 86:
                var6 = 'referenced_message';
                var6 = var6 in var2;
                if (var6) {
                    _fun39134_ip = 202;
                    continue _fun39134
                }
            case 97:
                var8 = _closure1_slot10;
                var7 = var8.getMessage;
                var6 = var5.channel_id;
                var10 = var7.bind(var8)(var6, var9);
                if (!(var4 == var10)) {
                    _fun39134_ip = 154;
                    continue _fun39134
                }
            case 122:
                var11 = _closure1_slot17;
                var8 = var11.set;
                var7 = var5.channel_id;
                var6 = _closure1_slot14;
                var6 = var8.bind(var11)(var7, var9, var6);
                var1 = true;
                _fun39134_ip = 364;
                continue _fun39134;
            case 154:
                var8 = _closure1_slot17;
                var7 = var8.set;
                var6 = var5.channel_id;
                var5 = {};
                var11 = _closure1_slot13;
                var11 = var11.LOADED;
                var5.state = var11;
                var5.message = var10;
                var5 = var7.bind(var8)(var6, var9, var5);
                var1 = true;
                _fun39134_ip = 364;
                continue _fun39134;
            case 202:
                var5 = var2.referenced_message;
                if (!(var4 == var5)) {
                    _fun39134_ip = 253;
                    continue _fun39134
                }
            case 212:
                var8 = _closure1_slot17;
                var7 = var8.set;
                var6 = var2.channel_id;
                var4 = {};
                var10 = _closure1_slot13;
                var10 = var10.DELETED;
                var4.state = var10;
                var4 = var7.bind(var8)(var6, var9, var4);
                var1 = true;
                _fun39134_ip = 364;
                continue _fun39134;
            case 253:
                var10 = _closure1_slot17;
                var9 = var10.set;
                var8 = var5.channel_id;
                var7 = var5.id;
                var6 = {};
                var4 = _closure1_slot13;
                var4 = var4.LOADED;
                var6.state = var4;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 10;
                var11 = var11[var4];
                var4 = undefined;
                var12 = var12.bind(var4)(var11);
                var11 = var12.createMessageRecord;
                var11 = var11.bind(var12)(var5);
                var6.message = var11;
                var6 = var9.bind(var10)(var8, var7, var6);
                var7 = var2.type;
                var2 = _closure1_slot11;
                var6 = var2.THREAD_STARTER_MESSAGE;
                var1 = true;
                if (!(var7 === var6)) {
                    _fun39134_ip = 364;
                    continue _fun39134
                }
            case 353:
                var3 = _closure1_slot21;
                var3 = var3.bind(var4)(var5);
                var1 = true;
            case 364:
                return var1;
            case 366:
                return var0;
            case 368:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: anyChanged, environment: var9
        _fun39135: for (var _fun39135_ip = 0;;) switch (_fun39135_ip) {
            case 0:
                var7 = arg1;
                var1 = _closure1_slot19;
                var6 = undefined;
                var0 = arg0;
                var5 = var1.bind(var6)(var0);
                var0 = var5.bind(var6)();
                var1 = var0.done;
                var4 = false;
                var3 = var0;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun39135_ip = 82;
                    continue _fun39135
                }
            case 41:
                var1 = var3.value;
                var1 = var7.bind(var6)(var1);
                var8 = var4 !== var1;
                if (var8) {
                    _fun39135_ip = 61;
                    continue _fun39135
                }
            case 58:
                var8 = var2;
            case 61:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var2 = var8;
                var3 = var9;
                var0 = var2;
                if (!var1) {
                    _fun39135_ip = 41;
                    continue _fun39135
                }
            case 82:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var13 = function(arg0) { // Original name: handleLoadMessages, environment: var9
        var0 = arg0;
        var3 = var0.messages;
        var2 = _closure1_slot22;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot21;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var12 = function(arg0) { // Original name: handleSearchMessagesSuccess, environment: var9
        var0 = arg0;
        var3 = var0.data;
        var2 = _closure1_slot22;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.messages;
            var2 = _closure1_slot22;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot22;
                var2 = undefined;
                var1 = arg0;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot21;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var1)(var3, var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var10 = function(arg0) { // Original name: handleChannelDelete, environment: var9
        var2 = _closure1_slot17;
        var1 = var2.deleteChannelCache;
        var0 = arg0;
        var0 = var0.channel;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0 = function(arg0, arg1) { // Original name: unsetDeletedMessage, environment: var9
        _fun39143: for (var _fun39143_ip = 0;;) switch (_fun39143_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = _closure1_slot17;
                var0 = var1.has;
                var0 = var0.bind(var1)(var4, var3);
                if (var0) {
                    _fun39143_ip = 31;
                    continue _fun39143
                }
            case 27:
                var0 = false;
                return var0;
            case 31:
                var2 = _closure1_slot17;
                var1 = var2.set;
                var0 = {};
                var5 = _closure1_slot13;
                var5 = var5.DELETED;
                var0.state = var5;
                var0 = var1.bind(var2)(var4, var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var4 = function() { // Original name: resetState, environment: var9
        var1 = _closure1_slot17;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var11 = function(arg0) { // Original name: handleLoadThreadsSuccess, environment: var9
        _fun39145: for (var _fun39145_ip = 0;;) switch (_fun39145_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.firstMessages;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun39145_ip = 40;
                    continue _fun39145
                }
            case 18:
                var3 = _closure1_slot22;
                var2 = undefined;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot21;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var3.bind(var2)(var4, var1);
            case 40:
                return var0;
        }
    };
    var3 = global;
    var14 = var3.Object;
    var8 = var14.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var14)(var2, var0, var1);
    var16 = 0;
    var1 = var6[var16];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var15 = 1;
    var1 = var6[var15];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var14 = 2;
    var1 = var6[var14];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.MessageTypes;
    var _closure1_slot11 = var8;
    var1 = var1.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot12 = var1;
    var1 = {};
    var1.LOADED = var16;
    var8 = 'LOADED';
    var1[var16] = var8;
    var1.NOT_LOADED = var15;
    var8 = 'NOT_LOADED';
    var1[var15] = var8;
    var1.DELETED = var14;
    var8 = 'DELETED';
    var1[var14] = var8;
    var _closure1_slot13 = var1;
    var15 = var3.Object;
    var14 = var15.freeze;
    var8 = {};
    var16 = var1.NOT_LOADED;
    var8.state = var16;
    var8 = var14.bind(var15)(var8);
    var _closure1_slot14 = var8;
    var3 = var3.Set;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var20 = var8;
    var3 = new var20[var3](var19);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot15 = var3;
    var3 = function() { // Environment: var9
        var3 = _closure1_slot8;
        var2 = function() { // Original name: ChannelReferencedMessageCache, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot7;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var4 = var4.bind(var0)(var1);
            var1 = {};
            var5 = 100;
            var1.max = var5;
            var3 = function(arg0, arg1) { // Original name: dispose, environment: var3
                var3 = _closure3_slot0;
                var2 = var3.handleCacheDisposed;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.dispose = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var8 = var3;
            var7 = var1;
            var1 = new var8[var4](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._cachedMessages = var1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._cachedMessageIds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handleCacheDisposed';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun39150: for (var _fun39150_ip = 0;;) switch (_fun39150_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0._cachedMessageIds;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (!var1) {
                        _fun39150_ip = 81;
                        continue _fun39150
                    }
                case 25:
                    var1 = global;
                    var4 = var1.Set;
                    var5 = var0._cachedMessageIds;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0._cachedMessageIds = var1;
                    var1 = var0._cachedMessageIds;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun39151: for (var _fun39151_ip = 0;;) switch (_fun39151_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var4 = var0._cachedMessages;
                    var3 = var4.set;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var3 = var0._cachedMessageIds;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun39151_ip = 101;
                        continue _fun39151
                    }
                case 45:
                    var1 = global;
                    var4 = var1.Set;
                    var6 = var0._cachedMessageIds;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var1 = new var7[var4](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0._cachedMessageIds = var1;
                    var1 = var0._cachedMessageIds;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._cachedMessageIds;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._cachedMessages;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getCachedMessageIds';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._cachedMessageIds;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot16 = var3;
    var3 = function() { // Environment: var9
        var3 = _closure1_slot8;
        var2 = function() { // Original name: ReferencedMessageCache, environment: var4
            var2 = this;
            var3 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._channelCaches = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'has';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun39157: for (var _fun39157_ip = 0;;) switch (_fun39157_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._channelCaches;
                    var1 = var2.get;
                    var0 = arg0;
                    var4 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun39157_ip = 46;
                        continue _fun39157
                    }
                case 33:
                    var3 = var4.has;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 46:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39157_ip = 56;
                        continue _fun39157
                    }
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun39158: for (var _fun39158_ip = 0;;) switch (_fun39158_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._channelCaches;
                    var1 = var2.get;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun39158_ip = 46;
                        continue _fun39158
                    }
                case 33:
                    var2 = var3.get;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun39159: for (var _fun39159_ip = 0;;) switch (_fun39159_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var2 = var1._channelCaches;
                    var0 = var2.get;
                    var3 = var0.bind(var2)(var4);
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun39159_ip = 75;
                        continue _fun39159
                    }
                case 28:
                    var0 = _closure1_slot16;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var7 = var2;
                    var0 = new var7[var0](var6);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var2 = var1._channelCaches;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var0);
                    var3 = var0;
                case 75:
                    var2 = var3.set;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updateExistingMessageIfCached';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun39160: for (var _fun39160_ip = 0;;) switch (_fun39160_ip) {
                case 0:
                    var8 = arg0;
                    var0 = this;
                    var2 = var0._channelCaches;
                    var1 = var2.get;
                    var0 = var8.channel_id;
                    var5 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var5;
                    if (!var0) {
                        _fun39160_ip = 137;
                        continue _fun39160
                    }
                case 36:
                    var2 = var5.has;
                    var1 = var8.id;
                    var1 = var2.bind(var5)(var1);
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun39160_ip = 134;
                        continue _fun39160
                    }
                case 60:
                    var4 = var5.set;
                    var3 = var8.id;
                    var2 = {};
                    var7 = _closure1_slot13;
                    var7 = var7.LOADED;
                    var2.state = var7;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 10;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var6 = var7.createMessageRecord;
                    var6 = var6.bind(var7)(var8);
                    var2.message = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = true;
                case 134:
                    var0 = var1;
                case 137:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'deleteChannelCache';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._channelCaches;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'retainWhere';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun39162: for (var _fun39162_ip = 0;;) switch (_fun39162_ip) {
                case 0:
                    var9 = arg0;
                    var3 = this;
                    var0 = new Array(0);
                    var2 = _closure1_slot19;
                    var1 = var3._channelCaches;
                    var7 = undefined;
                    var6 = var2.bind(var7)(var1);
                    var4 = var6.bind(var7)();
                    var1 = var4.done;
                    var5 = 1;
                    var2 = 0;
                    if (var1) {
                        _fun39162_ip = 99;
                        continue _fun39162
                    }
                case 47:
                    var10 = var4.value;
                    var1 = _closure1_slot6;
                    var1 = var1.bind(var7)(var10, var5);
                    var10 = var1[var2];
                    var1 = var9.bind(var7)(var10);
                    if (var1) {
                        _fun39162_ip = 84;
                        continue _fun39162
                    }
                case 74:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var10);
                case 84:
                    var10 = var6.bind(var7)();
                    var1 = var10.done;
                    var4 = var10;
                    if (!var1) {
                        _fun39162_ip = 47;
                        continue _fun39162
                    }
                case 99:
                    var1 = var0.length;
                    var1 = var2 < var1;
                    var2 = 0;
                    if (!var1) {
                        _fun39162_ip = 140;
                        continue _fun39162
                    }
                case 113:
                    var4 = var0[var2];
                    var1 = var3.deleteChannelCache;
                    var1 = var1.bind(var3)(var4);
                    var2 = var2 + 1;
                    var1 = var0.length;
                    if (var2 < var1) {
                        _fun39162_ip = 113;
                        continue _fun39162
                    }
                case 140:
                    var0 = var0.length;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getCachedMessageIdsForChannel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun39163: for (var _fun39163_ip = 0;;) switch (_fun39163_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._channelCaches;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun39163_ip = 43;
                        continue _fun39163
                    }
                case 31:
                    var1 = var2.getCachedMessageIds;
                    var0 = var1.bind(var2)();
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0._channelCaches;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var20 = var8;
    var3 = new var20[var3](var19);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var9
        var3 = function() { // Original name: ReferencedMessageStore, environment: var5
            _fun39166: for (var _fun39166_ip = 0;;) switch (_fun39166_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39166_ip = 69;
                        continue _fun39166
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39166_ip = 105;
                    continue _fun39166;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot10;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMessageByReference';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39168: for (var _fun39168_ip = 0;;) switch (_fun39168_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    var3 = var1 != var2;
                    var0 = undefined;
                    if (!var3) {
                        _fun39168_ip = 43;
                        continue _fun39168
                    }
                case 14:
                    var5 = _closure1_slot17;
                    var4 = var5.get;
                    var3 = var2.channel_id;
                    var2 = var2.message_id;
                    var0 = var4.bind(var5)(var3, var2);
                case 43:
                    if (!(var1 == var0)) {
                        _fun39168_ip = 54;
                        continue _fun39168
                    }
                case 47:
                    var0 = _closure1_slot14;
                case 54:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39169: for (var _fun39169_ip = 0;;) switch (_fun39169_ip) {
                case 0:
                    var4 = _closure1_slot17;
                    var3 = var4.get;
                    var2 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun39169_ip = 34;
                        continue _fun39169
                    }
                case 30:
                    var0 = _closure1_slot14;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getReplyIdsForChannel';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun39170: for (var _fun39170_ip = 0;;) switch (_fun39170_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 != var4;
                    var0 = undefined;
                    if (!var2) {
                        _fun39170_ip = 34;
                        continue _fun39170
                    }
                case 14:
                    var3 = _closure1_slot17;
                    var2 = var3.getCachedMessageIdsForChannel;
                    var0 = var2.bind(var3)(var4);
                case 34:
                    if (!(var1 == var0)) {
                        _fun39170_ip = 45;
                        continue _fun39170
                    }
                case 38:
                    var0 = _closure1_slot15;
                case 45:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ReferencedMessageStore';
    var8.displayName = var3;
    var3 = 13;
    var3 = var6[var3];
    var19 = var7.bind(var0)(var3);
    var3 = {};
    var14 = function(arg0) { // Original name: handleCacheLoaded, environment: var9
        var0 = arg0;
        var2 = var0.messages;
        var3 = _closure1_slot22;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var2 = var0.bind(var1)(var2);
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot22;
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot21;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var3.CACHE_LOADED = var14;
    var3.LOCAL_MESSAGES_LOADED = var13;
    var3.LOAD_MESSAGES_SUCCESS = var13;
    var3.LOAD_MESSAGES_AROUND_SUCCESS = var13;
    var3.SEARCH_MESSAGES_SUCCESS = var12;
    var3.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var12;
    var3.LOAD_THREADS_SUCCESS = var11;
    var3.LOAD_ARCHIVED_THREADS_SUCCESS = var11;
    var11 = function(arg0) { // Original name: handleMessageExplicitContentScanTimeout, environment: var9
        _fun39174: for (var _fun39174_ip = 0;;) switch (_fun39174_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.messageId;
                var4 = var0.channelId;
                var2 = _closure1_slot17;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4, var5);
                if (var1) {
                    _fun39174_ip = 38;
                    continue _fun39174
                }
            case 34:
                var1 = false;
                return var1;
            case 38:
                var2 = _closure1_slot17;
                var1 = var2.get;
                var6 = var1.bind(var2)(var4, var5);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun39174_ip = 154;
                    continue _fun39174
                }
            case 59:
                var2 = var6.state;
                var1 = _closure1_slot13;
                var1 = var1.LOADED;
                if (!(var2 === var1)) {
                    _fun39174_ip = 154;
                    continue _fun39174
                }
            case 78:
                var3 = _closure1_slot17;
                var2 = var3.set;
                var1 = {};
                var7 = _closure1_slot13;
                var7 = var7.LOADED;
                var1.state = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var7 = var7[var0];
                var0 = undefined;
                var8 = var8.bind(var0)(var7);
                var7 = var8.handleExplicitMediaScanTimeoutForMessage;
                var6 = var6.message;
                var6 = var7.bind(var8)(var6);
                var1.message = var6;
                var1 = var2.bind(var3)(var4, var5, var1);
                return var0;
            case 154:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT = var11;
    var11 = function(arg0) { // Original name: handleLoadForumPosts, environment: var9
        var0 = arg0;
        var2 = var0.threads;
        var3 = _closure1_slot22;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var2 = var0.bind(var1)(var2);
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun39176: for (var _fun39176_ip = 0;;) switch (_fun39176_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.first_message;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun39176_ip = 32;
                        continue _fun39176
                    }
                case 18:
                    var2 = _closure1_slot21;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 32:
                    return var0;
            }
        };
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var3.LOAD_FORUM_POSTS = var11;
    var11 = function(arg0) { // Original name: handleMessageCreate, environment: var9
        _fun39177: for (var _fun39177_ip = 0;;) switch (_fun39177_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.message;
                var4 = _closure1_slot10;
                var2 = var4.getMessages;
                var0 = var3.channel_id;
                var0 = var2.bind(var4)(var0);
                var0 = var0.ready;
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun39177_ip = 57;
                    continue _fun39177
                }
            case 46:
                var2 = _closure1_slot21;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 57:
                return var0;
        }
    };
    var3.MESSAGE_CREATE = var11;
    var11 = function(arg0) { // Original name: handleMessageUpdate, environment: var9
        _fun39178: for (var _fun39178_ip = 0;;) switch (_fun39178_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.message;
                var5 = var9.id;
                var4 = var9.channel_id;
                var2 = _closure1_slot17;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4, var5);
                if (var1) {
                    _fun39178_ip = 43;
                    continue _fun39178
                }
            case 39:
                var1 = false;
                return var1;
            case 43:
                var2 = _closure1_slot17;
                var1 = var2.get;
                var6 = var1.bind(var2)(var4, var5);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun39178_ip = 160;
                    continue _fun39178
                }
            case 64:
                var2 = var6.state;
                var1 = _closure1_slot13;
                var1 = var1.LOADED;
                if (!(var2 === var1)) {
                    _fun39178_ip = 160;
                    continue _fun39178
                }
            case 83:
                var3 = _closure1_slot17;
                var2 = var3.set;
                var1 = {};
                var7 = _closure1_slot13;
                var7 = var7.LOADED;
                var1.state = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var7 = var7[var0];
                var0 = undefined;
                var8 = var8.bind(var0)(var7);
                var7 = var8.updateMessageRecord;
                var6 = var6.message;
                var6 = var7.bind(var8)(var6, var9);
                var1.message = var6;
                var1 = var2.bind(var3)(var4, var5, var1);
                return var0;
            case 160:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleMessageDelete, environment: var9
        var0 = arg0;
        var3 = var0.id;
        var2 = var0.channelId;
        var1 = _closure1_slot23;
        var0 = undefined;
        var0 = var1.bind(var0)(var2, var3);
        return var0;
    };
    var3.MESSAGE_DELETE = var11;
    var11 = function(arg0) { // Original name: handleMessageDeleteBulk, environment: var9
        var1 = arg0;
        var3 = var1.ids;
        var1 = var1.channelId;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot22;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot23;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var3.MESSAGE_DELETE_BULK = var11;
    var11 = function(arg0) { // Original name: handleCreatePendingReply, environment: var9
        var0 = arg0;
        var5 = var0.message;
        var4 = _closure1_slot17;
        var3 = var4.set;
        var2 = var5.channel_id;
        var1 = var5.id;
        var0 = {};
        var6 = _closure1_slot13;
        var6 = var6.LOADED;
        var0.state = var6;
        var0.message = var5;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = undefined;
        return var0;
    };
    var3.CREATE_PENDING_REPLY = var11;
    var3.CHANNEL_DELETE = var10;
    var3.THREAD_DELETE = var10;
    var9 = function() { // Original name: handleGenericCleanup, environment: var9
        _fun39183: for (var _fun39183_ip = 0;;) switch (_fun39183_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = var2.retainWhere;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun39183_ip = 37;
                    continue _fun39183
                }
            case 33:
                var0 = undefined;
                return var0;
            case 37:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_DELETE = var9;
    var3.CONNECTION_OPEN = var4;
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var20 = var4;
    var18 = var3;
    var3 = new var20[var8](var19, var18, var17);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/replies/ReferencedMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ReferencedMessageState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 1372, 4213, 660, 1386, 3932, 4219, 566, 806, 2]);