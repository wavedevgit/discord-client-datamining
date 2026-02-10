// modules/messages/setupLoadFromMessageManagerHandlers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/messages/setupLoadFromMessageManagerHandlers.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun114294: for (var _fun114294_ip = 0;;) switch (_fun114294_ip) {
            case 0:
                var2 = arg0;
                var1 = arguments[2];
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun114294_ip = 23;
                    continue _fun114294
                }
            case 21:
                var1 = {};
            case 23:
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var3 = function arg0() {
                    _fun114295: for (var _fun114295_ip = 0;;) switch (_fun114295_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.channel_id;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun114295_ip = 39;
                                continue _fun114295
                            }
                        case 17:
                            var4 = _closure2_slot2;
                            var3 = var4.has;
                            var1 = var2.channel_id;
                            var0 = var3.bind(var4)(var1);
                        case 39:
                            if (!var0) {
                                _fun114295_ip = 56;
                                continue _fun114295
                            }
                        case 42:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot3 = var3;
                var8 = function arg0() {
                    _fun114296: for (var _fun114296_ip = 0;;) switch (_fun114296_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.message;
                            var0 = var2.channel_id;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun114296_ip = 44;
                                continue _fun114296
                            }
                        case 22:
                            var5 = _closure2_slot2;
                            var4 = var5.has;
                            var1 = var2.channel_id;
                            var0 = var4.bind(var5)(var1);
                        case 44:
                            if (!var0) {
                                _fun114296_ip = 79;
                                continue _fun114296
                            }
                        case 47:
                            var1 = _closure2_slot1;
                            if (!(var3 != var1)) {
                                _fun114296_ip = 68;
                                continue _fun114296
                            }
                        case 58:
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 68:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = function arg0() {
                    _fun114297: for (var _fun114297_ip = 0;;) switch (_fun114297_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.channelId;
                            var2 = var0.messages;
                            var3 = _closure2_slot2;
                            var1 = var3.add;
                            var1 = var1.bind(var3)(var4);
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun114297_ip = 51;
                                continue _fun114297
                            }
                        case 41:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 51:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = function arg0() {
                    _fun114299: for (var _fun114299_ip = 0;;) switch (_fun114299_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.data;
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun114299_ip = 31;
                                continue _fun114299
                            }
                        case 21:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 31:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.messages;
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = arg0;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure2_slot0;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var1.onBeforeBatch;
                _closure2_slot1 = var1;
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = var3;
                var1 = new var12[var1](var11);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure2_slot2 = var1;
                var1 = {};
                var10 = var2.actions;
                var11 = var1;
                var3 = copyDataProperties(var11, var10);
                var4 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var3 = 'POST_CONNECTION_OPEN';
                var1[var3] = var4;
                var9 = {};
                var9.callback = var8;
                var3 = false;
                var9.autoSubscribe = var3;
                var4 = 'MESSAGE_CREATE';
                var1[var4] = var9;
                var4 = 'MESSAGE_UPDATE';
                var1[var4] = var8;
                var4 = 'LOAD_MESSAGES_SUCCESS';
                var1[var4] = var7;
                var4 = 'LOAD_MESSAGES_AROUND_SUCCESS';
                var1[var4] = var7;
                var7 = function arg0() {
                    _fun114304: for (var _fun114304_ip = 0;;) switch (_fun114304_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messages;
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun114304_ip = 32;
                                continue _fun114304
                            }
                        case 22:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = 'LOAD_RECENT_MENTIONS_SUCCESS';
                var1[var4] = var7;
                var7 = function arg0() {
                    _fun114306: for (var _fun114306_ip = 0;;) switch (_fun114306_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.pins;
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun114306_ip = 32;
                                continue _fun114306
                            }
                        case 22:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.message;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = 'LOAD_PINNED_MESSAGES_SUCCESS';
                var1[var4] = var7;
                var4 = 'SEARCH_MESSAGES_SUCCESS';
                var1[var4] = var6;
                var4 = 'MOD_VIEW_SEARCH_MESSAGES_SUCCESS';
                var1[var4] = var6;
                var4 = {};
                var5 = function arg0() {
                    _fun114308: for (var _fun114308_ip = 0;;) switch (_fun114308_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.channelId;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun114308_ip = 31;
                                continue _fun114308
                            }
                        case 14:
                            var1 = _closure2_slot2;
                            var0 = var1.add;
                            var0 = var0.bind(var1)(var2);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.callback = var5;
                var4.autoSubscribe = var3;
                var3 = 'CHANNEL_SELECT';
                var1[var3] = var4;
                var2.actions = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);