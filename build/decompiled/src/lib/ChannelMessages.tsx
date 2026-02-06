// lib/ChannelMessages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun39064: for (var _fun39064_ip = 0;;) switch (_fun39064_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = var1.get;
                var0 = var3.id;
                var0 = var2.bind(var1)(var0);
                var7 = null;
                if (!(var7 != var0)) {
                    _fun39064_ip = 189;
                    continue _fun39064
                }
            case 30:
                var2 = var0.editedTimestamp;
                var2 = var7 != var2;
                var4 = 0;
                if (!var2) {
                    _fun39064_ip = 54;
                    continue _fun39064
                }
            case 45:
                var2 = var0.editedTimestamp;
                var4 = var2 - 0;
            case 54:
                var2 = var3.edited_timestamp;
                var6 = var7 != var2;
                var2 = 0;
                if (!var6) {
                    _fun39064_ip = 106;
                    continue _fun39064
                }
            case 69:
                var6 = global;
                var9 = var6.Date;
                var10 = var3.edited_timestamp;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var11 = var8;
                var6 = new var11[var9](var10, var9);
                var6 = var6 instanceof Object ? var6 : var8;
                var2 = var6 - 0;
            case 106:
                var2 = var2 > var4;
                if (var2) {
                    _fun39064_ip = 160;
                    continue _fun39064
                }
            case 113:
                var4 = var0.embeds;
                var4 = var4.length;
                var8 = var3.embeds;
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun39064_ip = 144;
                    continue _fun39064
                }
            case 139:
                var6 = var8.length;
            case 144:
                var7 = var7 != var6;
                var5 = 0;
                if (!var7) {
                    _fun39064_ip = 156;
                    continue _fun39064
                }
            case 153:
                var5 = var6;
            case 156:
                var2 = var4 < var5;
            case 160:
                if (var2) {
                    _fun39064_ip = 177;
                    continue _fun39064
                }
            case 163:
                var5 = var0.content;
                var4 = var3.content;
                var2 = var5 !== var4;
            case 177:
                if (var2) {
                    _fun39064_ip = 189;
                    continue _fun39064
                }
            case 180:
                var1 = var1.cached;
                if (!var1) {
                    _fun39064_ip = 225;
                    continue _fun39064
                }
            case 189:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.createMessageRecord;
                var0 = var1.bind(var2)(var3);
            case 225:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot6 = var7;
    var7 = var3.MAX_LOADED_MESSAGES;
    var _closure1_slot7 = var7;
    var7 = var3.MAX_MESSAGE_CACHE_SIZE;
    var _closure1_slot8 = var7;
    var7 = var3.TRUNCATED_MESSAGE_VIEW_SIZE;
    var _closure1_slot9 = var7;
    var3 = var3.MessageStates;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var6[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'ChannelMessages';
    var12 = var4;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2._messages = var1;
            var1 = {};
            var2._map = var1;
            var1 = false;
            var2._wasAtEdge = var1;
            var1 = arg0;
            var2._isCacheBefore = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot5;
        var0 = {};
        var1 = 'clone';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var3 = _closure2_slot0;
            var7 = var1._isCacheBefore;
            var2 = var3.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var3
                }
            });
            var8 = var2;
            var0 = new var8[var3](var7, var6);
            var0 = var0 instanceof Object ? var0 : var2;
            var2 = {};
            var6 = var1._map;
            var7 = var2;
            var3 = copyDataProperties(var7, var6);
            var0._map = var2;
            var6 = var1._messages;
            var2 = new Array(0);
            var5 = 0;
            var7 = var2;
            var3 = arraySpread(var7, var6, var5);
            var0._messages = var2;
            var1 = var1._wasAtEdge;
            var0._wasAtEdge = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'wasAtEdge';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._wasAtEdge;
            return var0;
        };
        var0.get = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._wasAtEdge = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'length';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._messages;
            var0 = var0.length;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = {};
            var1._map = var0;
            var0 = new Array(0);
            var1._messages = var0;
            var0 = false;
            var1._wasAtEdge = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var0 = 6;
            var4 = var4[var0];
            var0 = undefined;
            var6 = var5.bind(var0)(var4);
            var5 = var6.filter;
            var4 = var1._messages;
            var3 = function(arg0) { // Environment: var3
                var0 = arg0;
                var1 = var0.id;
                var0 = _closure3_slot0;
                var0 = var1 !== var0;
                return var0;
            };
            var3 = var5.bind(var6)(var4, var3);
            var1._messages = var3;
            var1 = var1._map;
            var1 = delete var1[var2];
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'removeMany';
        var0.key = var5;
        var5 = function arg0() {
            var6 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var6;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var0 = 6;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.each;
            var3 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var1 = var0._map;
                var0 = arg0;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
            };
            var3 = var4.bind(var5)(var6, var3);
            var4 = var2._messages;
            var3 = var4.filter;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot1;
                var1 = var2.indexOf;
                var0 = arg0;
                var0 = var0.id;
                var1 = var1.bind(var2)(var0);
                var0 = -1;
                var0 = var0 === var1;
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var2._messages = var1;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'replace';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun39077: for (var _fun39077_ip = 0;;) switch (_fun39077_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var1 = var0._map;
                    var4 = var1[var3];
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun39077_ip = 77;
                        continue _fun39077
                    }
                case 25:
                    var1 = var0._map;
                    var1 = delete var1[var3];
                    var3 = var0._map;
                    var1 = var2.id;
                    var3[var1] = var2;
                    var1 = var0._messages;
                    var3 = var0._messages;
                    var0 = var3.indexOf;
                    var0 = var0.bind(var3)(var4);
                    var1[var0] = var2;
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun39078: for (var _fun39078_ip = 0;;) switch (_fun39078_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._map;
                    var1 = arg0;
                    var4 = var2[var1];
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun39078_ip = 74;
                        continue _fun39078
                    }
                case 22:
                    var2 = arg1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4);
                    var3 = var0._map;
                    var1 = var4.id;
                    var3[var1] = var2;
                    var1 = var0._messages;
                    var3 = var0._messages;
                    var0 = var3.indexOf;
                    var0 = var0.bind(var3)(var4);
                    var1[var0] = var2;
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._map;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0._map;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var3 = var0._messages;
            var2 = var3.forEach;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'cache';
        var0.key = var5;
        var5 = function arg0() {
            _fun39082: for (var _fun39082_ip = 0;;) switch (_fun39082_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arguments[1];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = undefined;
                    if (!(var2 === var3)) {
                        _fun39082_ip = 23;
                        continue _fun39082
                    }
                case 21:
                    var2 = false;
                case 23:
                    var5 = var1.length;
                    var6 = 0;
                    if (!(var6 === var5)) {
                        _fun39082_ip = 40;
                        continue _fun39082
                    }
                case 34:
                    var1._wasAtEdge = var2;
                case 40:
                    var2 = var1._messages;
                    var5 = var2.length;
                    var2 = var4.length;
                    var7 = var5 + var2;
                    var5 = _closure1_slot8;
                    if (!(var7 > var5)) {
                        _fun39082_ip = 187;
                        continue _fun39082
                    }
                case 71:
                    var5 = false;
                    var1._wasAtEdge = var5;
                    var7 = var4.length;
                    var5 = _closure1_slot8;
                    if (!(!(var7 > var5))) {
                        _fun39082_ip = 295;
                        continue _fun39082
                    }
                case 95:
                    var7 = _closure1_slot8;
                    var5 = var4.length;
                    var11 = var7 - var5;
                    var5 = var1._isCacheBefore;
                    var8 = var1._messages;
                    var7 = var8.slice;
                    if (var5) {
                        _fun39082_ip = 142;
                        continue _fun39082
                    }
                case 128:
                    var5 = var7.bind(var8)(var6, var11);
                    var1._messages = var5;
                    _fun39082_ip = 187;
                    continue _fun39082;
                case 142:
                    var5 = global;
                    var10 = var5.Math;
                    var9 = var10.max;
                    var5 = var1._messages;
                    var5 = var5.length;
                    var5 = var5 - var11;
                    var5 = var9.bind(var10)(var5, var6);
                    var5 = var7.bind(var8)(var5);
                    var1._messages = var5;
                case 187:
                    var5 = var1._isCacheBefore;
                    var7 = new Array(0);
                    if (var5) {
                        _fun39082_ip = 230;
                        continue _fun39082
                    }
                case 200:
                    var14 = var7;
                    var13 = var4;
                    var12 = 0;
                    var12 = arraySpread(var14, var13, var12);
                    var13 = var1._messages;
                    var14 = var7;
                    var5 = arraySpread(var14, var13, var12);
                    var5 = var7;
                    _fun39082_ip = 258;
                    continue _fun39082;
                case 230:
                    var13 = var1._messages;
                    var14 = var7;
                    var12 = 0;
                    var12 = arraySpread(var14, var13, var12);
                    var14 = var7;
                    var13 = var4;
                    var8 = arraySpread(var14, var13, var12);
                    var5 = var7;
                case 258:
                    var1._messages = var5;
                    var5 = {};
                    var1._map = var5;
                    var8 = var1._messages;
                    var7 = var8.forEach;
                    var5 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = _closure3_slot0;
                        var2 = var1._map;
                        var1 = var0.id;
                        var2[var1] = var0;
                        return var0;
                    };
                    var5 = var7.bind(var8)(var5);
                    return var3;
                case 295:
                    var5 = var1._isCacheBefore;
                    var3 = var4.slice;
                    if (var5) {
                        _fun39082_ip = 327;
                        continue _fun39082
                    }
                case 309:
                    var5 = _closure1_slot8;
                    var5 = var3.bind(var4)(var6, var5);
                    var1._messages = var5;
                    _fun39082_ip = 351;
                    continue _fun39082;
                case 327:
                    var5 = var4.length;
                    var2 = _closure1_slot8;
                    var2 = var5 - var2;
                    var2 = var3.bind(var4)(var2);
                    var1._messages = var2;
                case 351:
                    var2 = {};
                    var1._map = var2;
                    var2 = var1._messages;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = _closure3_slot0;
                        var2 = var1._map;
                        var1 = var0.id;
                        var2[var1] = var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'extractAll';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = var2._messages;
            var1 = new Array(0);
            var2._messages = var1;
            var1 = {};
            var2._map = var1;
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'extract';
        var0.key = var5;
        var4 = function arg0() {
            _fun39086: for (var _fun39086_ip = 0;;) switch (_fun39086_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = var3._isCacheBefore;
                    var2 = global;
                    var6 = var2.Math;
                    if (var0) {
                        _fun39086_ip = 84;
                        continue _fun39086
                    }
                case 29:
                    var2 = var6.min;
                    var0 = var3.length;
                    var5 = var2.bind(var6)(var4, var0);
                    var2 = var3._messages;
                    var0 = var2.slice;
                    var7 = 0;
                    var0 = var0.bind(var2)(var7, var5);
                    var5 = var3._messages;
                    var2 = var5.splice;
                    var2 = var2.bind(var5)(var7, var4);
                    _fun39086_ip = 145;
                    continue _fun39086;
                case 84:
                    var5 = var6.max;
                    var2 = var3.length;
                    var4 = var2 - var4;
                    var2 = 0;
                    var5 = var5.bind(var6)(var4, var2);
                    var6 = var3.length;
                    var4 = var3._messages;
                    var2 = var4.slice;
                    var0 = var2.bind(var4)(var5, var6);
                    var4 = var3._messages;
                    var3 = var4.splice;
                    var3 = var3.bind(var4)(var5);
                case 145:
                    var2 = var0.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0._map;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = delete var1[var0];
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var4 = function arg0() {
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var4 = false;
            var2.ready = var4;
            var2.cached = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.JumpTypes;
            var3 = var3.ANIMATED;
            var2.jumpType = var3;
            var5 = null;
            var2.jumpTargetId = var5;
            var6 = 0;
            var2.jumpTargetOffset = var6;
            var7 = 1;
            var2.jumpSequenceId = var7;
            var2.jumped = var4;
            var2.jumpedToPresent = var4;
            var3 = true;
            var2.jumpFlash = var3;
            var2.jumpReturnTargetId = var5;
            var2.focusTargetId = var5;
            var2.focusSequenceId = var7;
            var2.initialScrollSequenceId = var6;
            var2.hasMoreBefore = var3;
            var2.hasMoreAfter = var4;
            var2.loadingMore = var4;
            var2.revealedMessageId = var5;
            var2.hasFetched = var4;
            var2.error = var4;
            var5 = new Array(0);
            var2._array = var5;
            var1 = _closure1_slot12;
            var5 = var1.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var1
                }
            });
            var11 = var5;
            var10 = true;
            var3 = new var11[var1](var10, var9);
            var3 = var3 instanceof Object ? var3 : var5;
            var2._before = var3;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var11 = var3;
            var10 = false;
            var1 = new var11[var1](var10, var9);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._after = var1;
            var1 = {};
            var2._map = var1;
            var1 = arg0;
            var2.channelId = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var0 = {};
        var1 = 'mutate';
        var0.key = var1;
        var1 = function arg0() {
            _fun39090: for (var _fun39090_ip = 0;;) switch (_fun39090_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arguments[1];
                    var3 = this;
                    var1 = undefined;
                    if (!(var4 === var1)) {
                        _fun39090_ip = 17;
                        continue _fun39090
                    }
                case 15:
                    var4 = false;
                case 17:
                    var6 = _closure2_slot0;
                    var11 = var3.channelId;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var5;
                    var0 = new var12[var6](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var5;
                    var8 = var3._array;
                    if (var4) {
                        _fun39090_ip = 63;
                        continue _fun39090
                    }
                case 58:
                    var5 = var8;
                    _fun39090_ip = 82;
                    continue _fun39090;
                case 63:
                    var6 = new Array(0);
                    var9 = 0;
                    var11 = var6;
                    var10 = var8;
                    var7 = arraySpread(var11, var10, var9);
                    var5 = var6;
                case 82:
                    var0._array = var5;
                    var7 = var3._map;
                    if (var4) {
                        _fun39090_ip = 102;
                        continue _fun39090
                    }
                case 97:
                    var5 = var7;
                    _fun39090_ip = 117;
                    continue _fun39090;
                case 102:
                    var6 = {};
                    var11 = var6;
                    var10 = var7;
                    var7 = copyDataProperties(var11, var10);
                    var5 = var6;
                case 117:
                    var0._map = var5;
                    var7 = var3._after;
                    if (var4) {
                        _fun39090_ip = 137;
                        continue _fun39090
                    }
                case 132:
                    var5 = var7;
                    _fun39090_ip = 147;
                    continue _fun39090;
                case 137:
                    var6 = var7.clone;
                    var5 = var6.bind(var7)();
                case 147:
                    var0._after = var5;
                    var6 = var3._before;
                    if (var4) {
                        _fun39090_ip = 167;
                        continue _fun39090
                    }
                case 162:
                    var4 = var6;
                    _fun39090_ip = 177;
                    continue _fun39090;
                case 167:
                    var5 = var6.clone;
                    var4 = var5.bind(var6)();
                case 177:
                    var0._before = var4;
                    var4 = global;
                    var4 = var4.Function;
                    var4 = var2 instanceof var4;
                    if (var4) {
                        _fun39090_ip = 823;
                        continue _fun39090
                    }
                case 201:
                    var5 = 'object';
                    var4 = typeof var2;
                    if (!(var5 === var4)) {
                        _fun39090_ip = 1055;
                        continue _fun39090
                    }
                case 215:
                    var4 = var2.ready;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 233;
                        continue _fun39090
                    }
                case 225:
                    var4 = var3.ready;
                    _fun39090_ip = 245;
                    continue _fun39090;
                case 233:
                    var6 = var2.ready;
                    var5 = true;
                    var4 = var5 === var6;
                case 245:
                    var0.ready = var4;
                    var4 = var2.jumpType;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 269;
                        continue _fun39090
                    }
                case 261:
                    var4 = var3.jumpType;
                    _fun39090_ip = 275;
                    continue _fun39090;
                case 269:
                    var4 = var2.jumpType;
                case 275:
                    var0.jumpType = var4;
                    var4 = var2.jumpTargetId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 299;
                        continue _fun39090
                    }
                case 291:
                    var4 = var3.jumpTargetId;
                    _fun39090_ip = 305;
                    continue _fun39090;
                case 299:
                    var4 = var2.jumpTargetId;
                case 305:
                    var0.jumpTargetId = var4;
                    var4 = var2.jumpTargetOffset;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 329;
                        continue _fun39090
                    }
                case 321:
                    var4 = var3.jumpTargetOffset;
                    _fun39090_ip = 335;
                    continue _fun39090;
                case 329:
                    var4 = var2.jumpTargetOffset;
                case 335:
                    var0.jumpTargetOffset = var4;
                    var4 = var2.jumpSequenceId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 359;
                        continue _fun39090
                    }
                case 351:
                    var4 = var3.jumpSequenceId;
                    _fun39090_ip = 365;
                    continue _fun39090;
                case 359:
                    var4 = var2.jumpSequenceId;
                case 365:
                    var0.jumpSequenceId = var4;
                    var4 = var2.jumped;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 389;
                        continue _fun39090
                    }
                case 381:
                    var4 = var3.jumped;
                    _fun39090_ip = 401;
                    continue _fun39090;
                case 389:
                    var6 = var2.jumped;
                    var5 = true;
                    var4 = var5 === var6;
                case 401:
                    var0.jumped = var4;
                    var4 = var2.jumpedToPresent;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 425;
                        continue _fun39090
                    }
                case 417:
                    var4 = var3.jumpedToPresent;
                    _fun39090_ip = 437;
                    continue _fun39090;
                case 425:
                    var6 = var2.jumpedToPresent;
                    var5 = true;
                    var4 = var5 === var6;
                case 437:
                    var0.jumpedToPresent = var4;
                    var4 = var2.jumpFlash;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 461;
                        continue _fun39090
                    }
                case 453:
                    var4 = var3.jumpFlash;
                    _fun39090_ip = 473;
                    continue _fun39090;
                case 461:
                    var6 = var2.jumpFlash;
                    var5 = true;
                    var4 = var5 === var6;
                case 473:
                    var0.jumpFlash = var4;
                    var4 = var2.jumpReturnTargetId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 497;
                        continue _fun39090
                    }
                case 489:
                    var4 = var3.jumpReturnTargetId;
                    _fun39090_ip = 503;
                    continue _fun39090;
                case 497:
                    var4 = var2.jumpReturnTargetId;
                case 503:
                    var0.jumpReturnTargetId = var4;
                    var4 = var2.focusTargetId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 527;
                        continue _fun39090
                    }
                case 519:
                    var4 = var3.focusTargetId;
                    _fun39090_ip = 533;
                    continue _fun39090;
                case 527:
                    var4 = var2.focusTargetId;
                case 533:
                    var0.focusTargetId = var4;
                    var4 = var2.focusSequenceId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 557;
                        continue _fun39090
                    }
                case 549:
                    var4 = var3.focusSequenceId;
                    _fun39090_ip = 563;
                    continue _fun39090;
                case 557:
                    var4 = var2.focusSequenceId;
                case 563:
                    var0.focusSequenceId = var4;
                    var4 = var2.hasMoreBefore;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 587;
                        continue _fun39090
                    }
                case 579:
                    var4 = var3.hasMoreBefore;
                    _fun39090_ip = 599;
                    continue _fun39090;
                case 587:
                    var6 = var2.hasMoreBefore;
                    var5 = true;
                    var4 = var5 === var6;
                case 599:
                    var0.hasMoreBefore = var4;
                    var4 = var2.hasMoreAfter;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 623;
                        continue _fun39090
                    }
                case 615:
                    var4 = var3.hasMoreAfter;
                    _fun39090_ip = 635;
                    continue _fun39090;
                case 623:
                    var6 = var2.hasMoreAfter;
                    var5 = true;
                    var4 = var5 === var6;
                case 635:
                    var0.hasMoreAfter = var4;
                    var4 = var2.loadingMore;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 659;
                        continue _fun39090
                    }
                case 651:
                    var4 = var3.loadingMore;
                    _fun39090_ip = 665;
                    continue _fun39090;
                case 659:
                    var4 = var2.loadingMore;
                case 665:
                    var0.loadingMore = var4;
                    var4 = var2.revealedMessageId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 689;
                        continue _fun39090
                    }
                case 681:
                    var4 = var3.revealedMessageId;
                    _fun39090_ip = 695;
                    continue _fun39090;
                case 689:
                    var4 = var2.revealedMessageId;
                case 695:
                    var0.revealedMessageId = var4;
                    var4 = var2.cached;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 719;
                        continue _fun39090
                    }
                case 711:
                    var4 = var3.cached;
                    _fun39090_ip = 725;
                    continue _fun39090;
                case 719:
                    var4 = var2.cached;
                case 725:
                    var0.cached = var4;
                    var4 = var2.hasFetched;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 749;
                        continue _fun39090
                    }
                case 741:
                    var4 = var3.hasFetched;
                    _fun39090_ip = 755;
                    continue _fun39090;
                case 749:
                    var4 = var2.hasFetched;
                case 755:
                    var0.hasFetched = var4;
                    var4 = var2.error;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 777;
                        continue _fun39090
                    }
                case 770:
                    var4 = var3.error;
                    _fun39090_ip = 782;
                    continue _fun39090;
                case 777:
                    var4 = var2.error;
                case 782:
                    var0.error = var4;
                    var4 = var2.initialScrollSequenceId;
                    if (!(var1 === var4)) {
                        _fun39090_ip = 806;
                        continue _fun39090
                    }
                case 798:
                    var4 = var3.initialScrollSequenceId;
                    _fun39090_ip = 812;
                    continue _fun39090;
                case 806:
                    var4 = var2.initialScrollSequenceId;
                case 812:
                    var0.initialScrollSequenceId = var4;
                    _fun39090_ip = 1055;
                    continue _fun39090;
                case 823:
                    var4 = var3.ready;
                    var0.ready = var4;
                    var4 = var3.jumpType;
                    var0.jumpType = var4;
                    var4 = var3.jumpTargetId;
                    var0.jumpTargetId = var4;
                    var4 = var3.jumpTargetOffset;
                    var0.jumpTargetOffset = var4;
                    var4 = var3.jumpSequenceId;
                    var0.jumpSequenceId = var4;
                    var4 = var3.jumped;
                    var0.jumped = var4;
                    var4 = var3.jumpedToPresent;
                    var0.jumpedToPresent = var4;
                    var4 = var3.jumpFlash;
                    var0.jumpFlash = var4;
                    var4 = var3.jumpReturnTargetId;
                    var0.jumpReturnTargetId = var4;
                    var4 = var3.focusTargetId;
                    var0.focusTargetId = var4;
                    var4 = var3.focusSequenceId;
                    var0.focusSequenceId = var4;
                    var4 = var3.hasMoreBefore;
                    var0.hasMoreBefore = var4;
                    var4 = var3.hasMoreAfter;
                    var0.hasMoreAfter = var4;
                    var4 = var3.loadingMore;
                    var0.loadingMore = var4;
                    var4 = var3.revealedMessageId;
                    var0.revealedMessageId = var4;
                    var4 = var3.cached;
                    var0.cached = var4;
                    var4 = var3.hasFetched;
                    var0.hasFetched = var4;
                    var4 = var3.error;
                    var0.error = var4;
                    var3 = var3.initialScrollSequenceId;
                    var0.initialScrollSequenceId = var3;
                    var1 = var2.bind(var1)(var0);
                case 1055:
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(46);
        var2[0] = var0;
        var0 = {};
        var1 = 'length';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._array;
            var0 = var0.length;
            return var0;
        };
        var0.get = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'toArray';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var4 = var0._array;
            var0 = new Array(0);
            var3 = 0;
            var5 = var0;
            var1 = arraySpread(var5, var4, var3);
            return var0;
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'forEach';
        var0.key = var1;
        var6 = function arg0, arg1() {
            _fun39093: for (var _fun39093_ip = 0;;) switch (_fun39093_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var1 = arguments[2];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39093_ip = 17;
                        continue _fun39093
                    }
                case 15:
                    var1 = false;
                case 17:
                    var2 = this;
                    var5 = var2._array;
                    if (var1) {
                        _fun39093_ip = 42;
                        continue _fun39093
                    }
                case 29:
                    var1 = var5.forEach;
                    var1 = var1.bind(var5)(var7, var6);
                    _fun39093_ip = 112;
                    continue _fun39093;
                case 42:
                    var2 = var5.length;
                    var1 = 1;
                    var2 = var2 - var1;
                    var4 = 0;
                    if (!(var2 >= var4)) {
                        _fun39093_ip = 112;
                        continue _fun39093
                    }
                case 60:
                    var3 = var7.call;
                    var1 = var5[var2];
                    var1 = var3.bind(var7)(var6, var1, var2);
                    var3 = false;
                    if (!(var3 !== var1)) {
                        _fun39093_ip = 112;
                        continue _fun39093
                    }
                case 82:
                    var8 = var2 - 1;
                    if (!(var8 >= var4)) {
                        _fun39093_ip = 112;
                        continue _fun39093
                    }
                case 89:
                    var9 = var7.call;
                    var1 = var5[var8];
                    var1 = var9.bind(var7)(var6, var1, var8);
                    var2 = var8;
                    if (var3 !== var1) {
                        _fun39093_ip = 82;
                        continue _fun39093
                    }
                case 112:
                    return var0;
            }
        };
        var0.value = var6;
        var2[3] = var0;
        var0 = {};
        var6 = 'reduce';
        var0.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0._array;
            var2 = var3.reduce;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[4] = var0;
        var0 = {};
        var6 = 'some';
        var0.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0._array;
            var2 = var3.some;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[5] = var0;
        var0 = {};
        var6 = 'filter';
        var0.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0._array;
            var2 = var3.filter;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[6] = var0;
        var0 = {};
        var6 = 'forAll';
        var0.key = var6;
        var6 = function arg0, arg1() {
            var3 = arg0;
            var2 = arg1;
            var0 = this;
            var4 = var0._before;
            var1 = var4.forEach;
            var1 = var1.bind(var4)(var3, var2);
            var4 = var0._array;
            var1 = var4.forEach;
            var1 = var1.bind(var4)(var3, var2);
            var1 = var0._after;
            var0 = var1.forEach;
            var0 = var0.bind(var1)(var3, var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var2[7] = var0;
        var0 = {};
        var6 = 'findOldest';
        var0.key = var6;
        var6 = function arg0() {
            _fun39098: for (var _fun39098_ip = 0;;) switch (_fun39098_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot3;
                    var6 = 6;
                    var0 = var0[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var0);
                    var3 = var7.find;
                    var0 = var1._before;
                    var0 = var0._messages;
                    var0 = var3.bind(var7)(var0, var4);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun39098_ip = 94;
                        continue _fun39098
                    }
                case 60:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var6];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.find;
                    var7 = var1._array;
                    var0 = var8.bind(var9)(var7, var4);
                case 94:
                    if (!(var3 == var0)) {
                        _fun39098_ip = 138;
                        continue _fun39098
                    }
                case 98:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.find;
                    var1 = var1._after;
                    var1 = var1._messages;
                    var0 = var2.bind(var3)(var1, var4);
                case 138:
                    return var0;
            }
        };
        var0.value = var6;
        var2[8] = var0;
        var0 = {};
        var6 = 'findNewest';
        var0.key = var6;
        var6 = function arg0() {
            _fun39099: for (var _fun39099_ip = 0;;) switch (_fun39099_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot3;
                    var6 = 6;
                    var0 = var0[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var0);
                    var3 = var7.findLast;
                    var0 = var1._after;
                    var0 = var0._messages;
                    var0 = var3.bind(var7)(var0, var4);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun39099_ip = 96;
                        continue _fun39099
                    }
                case 61:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var6];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.findLast;
                    var7 = var1._array;
                    var0 = var8.bind(var9)(var7, var4);
                case 96:
                    if (!(var3 == var0)) {
                        _fun39099_ip = 141;
                        continue _fun39099
                    }
                case 100:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.findLast;
                    var1 = var1._before;
                    var1 = var1._messages;
                    var0 = var2.bind(var3)(var1, var4);
                case 141:
                    return var0;
            }
        };
        var0.value = var6;
        var2[9] = var0;
        var0 = {};
        var6 = 'map';
        var0.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0._array;
            var2 = var3.map;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[10] = var0;
        var0 = {};
        var6 = 'first';
        var0.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0._array;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var6;
        var2[11] = var0;
        var0 = {};
        var6 = 'last';
        var0.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0._array;
            var0 = var0._array;
            var2 = var0.length;
            var0 = 1;
            var0 = var2 - var0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var6;
        var2[12] = var0;
        var0 = {};
        var7 = 'get';
        var0.key = var7;
        var6 = function arg0() {
            _fun39103: for (var _fun39103_ip = 0;;) switch (_fun39103_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39103_ip = 17;
                        continue _fun39103
                    }
                case 15:
                    var1 = false;
                case 17:
                    var0 = var2._map;
                    var5 = var0[var4];
                    var3 = null;
                    var0 = var5;
                    if (!(var3 == var5)) {
                        _fun39103_ip = 81;
                        continue _fun39103
                    }
                case 36:
                    var0 = var5;
                    if (!var1) {
                        _fun39103_ip = 81;
                        continue _fun39103
                    }
                case 42:
                    var5 = var2._before;
                    var1 = var5.get;
                    var1 = var1.bind(var5)(var4);
                    if (!(var3 == var1)) {
                        _fun39103_ip = 78;
                        continue _fun39103
                    }
                case 62:
                    var3 = var2._after;
                    var2 = var3.get;
                    var1 = var2.bind(var3)(var4);
                case 78:
                    var0 = var1;
                case 81:
                    return var0;
            }
        };
        var0.value = var6;
        var2[13] = var0;
        var0 = {};
        var6 = 'getByIndex';
        var0.key = var6;
        var6 = function arg0() {
            var0 = this;
            var1 = var0._array;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var6;
        var2[14] = var0;
        var0 = {};
        var6 = 'getAfter';
        var0.key = var6;
        var6 = function arg0() {
            _fun39105: for (var _fun39105_ip = 0;;) switch (_fun39105_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.get;
                    var0 = arg0;
                    var4 = var1.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun39105_ip = 85;
                        continue _fun39105
                    }
                case 22:
                    var2 = var3._array;
                    var1 = var2.indexOf;
                    var4 = var1.bind(var2)(var4);
                    var2 = -1;
                    var1 = null;
                    if (!(var2 !== var4)) {
                        _fun39105_ip = 83;
                        continue _fun39105
                    }
                case 51:
                    var5 = var3.length;
                    var2 = 1;
                    var5 = var5 - var2;
                    var1 = null;
                    if (!(var4 !== var5)) {
                        _fun39105_ip = 83;
                        continue _fun39105
                    }
                case 69:
                    var3 = var3._array;
                    var2 = var4 + var2;
                    var1 = var3[var2];
                case 83:
                    return var1;
                case 85:
                    return var0;
            }
        };
        var0.value = var6;
        var2[15] = var0;
        var0 = {};
        var6 = 'getManyAfter';
        var0.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun39106: for (var _fun39106_ip = 0;;) switch (_fun39106_ip) {
                case 0:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = this;
                    var1 = var5.get;
                    var0 = arg0;
                    var3 = var1.bind(var5)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun39106_ip = 184;
                        continue _fun39106
                    }
                case 31:
                    var2 = var5._array;
                    var1 = var2.indexOf;
                    var4 = var1.bind(var2)(var3);
                    var2 = -1;
                    if (!(var2 !== var4)) {
                        _fun39106_ip = 182;
                        continue _fun39106
                    }
                case 61:
                    var1 = new Array(0);
                    var3 = 1;
                    var8 = var4 + var3;
                    var3 = var5.length;
                    if (!(var8 < var3)) {
                        _fun39106_ip = 180;
                        continue _fun39106
                    }
                case 81:
                    var4 = var2 === var7;
                    var3 = var8;
                    if (var4) {
                        _fun39106_ip = 103;
                        continue _fun39106
                    }
                case 91:
                    var2 = var1.length;
                    var3 = var8;
                    if (!(var2 < var7)) {
                        _fun39106_ip = 180;
                        continue _fun39106
                    }
                case 103:
                    var2 = var0 == var6;
                    if (var2) {
                        _fun39106_ip = 127;
                        continue _fun39106
                    }
                case 110:
                    var8 = var5._array;
                    var9 = var8[var3];
                    var8 = undefined;
                    var2 = var6.bind(var8)(var9);
                case 127:
                    if (!var2) {
                        _fun39106_ip = 150;
                        continue _fun39106
                    }
                case 130:
                    var8 = var1.push;
                    var2 = var5._array;
                    var2 = var2[var3];
                    var2 = var8.bind(var1)(var2);
                case 150:
                    var8 = var3 + 1;
                    var2 = var5.length;
                    if (!(var8 < var2)) {
                        _fun39106_ip = 180;
                        continue _fun39106
                    }
                case 162:
                    var3 = var8;
                    if (var4) {
                        _fun39106_ip = 103;
                        continue _fun39106
                    }
                case 168:
                    var2 = var1.length;
                    var3 = var8;
                    if (var2 < var7) {
                        _fun39106_ip = 103;
                        continue _fun39106
                    }
                case 180:
                    return var1;
                case 182:
                    return var0;
                case 184:
                    return var0;
            }
        };
        var0.value = var6;
        var2[16] = var0;
        var0 = {};
        var6 = 'getManyBefore';
        var0.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun39107: for (var _fun39107_ip = 0;;) switch (_fun39107_ip) {
                case 0:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = this;
                    var1 = var6.get;
                    var0 = arg0;
                    var3 = var1.bind(var6)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun39107_ip = 174;
                        continue _fun39107
                    }
                case 31:
                    var2 = var6._array;
                    var1 = var2.indexOf;
                    var4 = var1.bind(var2)(var3);
                    var2 = -1;
                    if (!(var2 !== var4)) {
                        _fun39107_ip = 172;
                        continue _fun39107
                    }
                case 58:
                    var1 = new Array(0);
                    var3 = 1;
                    var9 = var4 - var3;
                    var5 = 0;
                    if (!(var9 >= var5)) {
                        _fun39107_ip = 170;
                        continue _fun39107
                    }
                case 75:
                    var4 = var2 === var8;
                    var3 = var9;
                    if (var4) {
                        _fun39107_ip = 97;
                        continue _fun39107
                    }
                case 85:
                    var2 = var1.length;
                    var3 = var9;
                    if (!(var2 < var8)) {
                        _fun39107_ip = 170;
                        continue _fun39107
                    }
                case 97:
                    var2 = var0 == var7;
                    if (var2) {
                        _fun39107_ip = 121;
                        continue _fun39107
                    }
                case 104:
                    var9 = var6._array;
                    var10 = var9[var3];
                    var9 = undefined;
                    var2 = var7.bind(var9)(var10);
                case 121:
                    if (!var2) {
                        _fun39107_ip = 145;
                        continue _fun39107
                    }
                case 124:
                    var9 = var1.unshift;
                    var2 = var6._array;
                    var2 = var2[var3];
                    var2 = var9.bind(var1)(var2);
                case 145:
                    var9 = var3 - 1;
                    if (!(var9 >= var5)) {
                        _fun39107_ip = 170;
                        continue _fun39107
                    }
                case 152:
                    var3 = var9;
                    if (var4) {
                        _fun39107_ip = 97;
                        continue _fun39107
                    }
                case 158:
                    var2 = var1.length;
                    var3 = var9;
                    if (var2 < var8) {
                        _fun39107_ip = 97;
                        continue _fun39107
                    }
                case 170:
                    return var1;
                case 172:
                    return var0;
                case 174:
                    return var0;
            }
        };
        var0.value = var6;
        var2[17] = var0;
        var0 = {};
        var6 = 'hasAnyAfter';
        var0.key = var6;
        var6 = function arg0, arg1() {
            _fun39108: for (var _fun39108_ip = 0;;) switch (_fun39108_ip) {
                case 0:
                    var7 = arg1;
                    var6 = arguments[2];
                    var5 = this;
                    var4 = undefined;
                    if (!(var6 === var4)) {
                        _fun39108_ip = 21;
                        continue _fun39108
                    }
                case 15:
                    var6 = -1;
                case 21:
                    var1 = var5.get;
                    var0 = arg0;
                    var2 = var1.bind(var5)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun39108_ip = 166;
                        continue _fun39108
                    }
                case 43:
                    var1 = var5._array;
                    var0 = var1.indexOf;
                    var3 = var0.bind(var1)(var2);
                    var0 = -1;
                    if (!(var0 !== var3)) {
                        _fun39108_ip = 162;
                        continue _fun39108
                    }
                case 70:
                    var1 = 1;
                    var8 = var3 + var1;
                    var1 = var5.length;
                    if (!(var8 < var1)) {
                        _fun39108_ip = 154;
                        continue _fun39108
                    }
                case 86:
                    var2 = var0 === var6;
                    var1 = var8;
                    if (var2) {
                        _fun39108_ip = 107;
                        continue _fun39108
                    }
                case 96:
                    var0 = var3 + var6;
                    var1 = var8;
                    if (!(var1 <= var0)) {
                        _fun39108_ip = 154;
                        continue _fun39108
                    }
                case 107:
                    var0 = var5._array;
                    var0 = var0[var1];
                    var0 = var7.bind(var4)(var0);
                    if (var0) {
                        _fun39108_ip = 158;
                        continue _fun39108
                    }
                case 125:
                    var8 = var1 + 1;
                    var0 = var5.length;
                    if (!(var8 < var0)) {
                        _fun39108_ip = 154;
                        continue _fun39108
                    }
                case 137:
                    var1 = var8;
                    if (var2) {
                        _fun39108_ip = 107;
                        continue _fun39108
                    }
                case 143:
                    var0 = var3 + var6;
                    var1 = var8;
                    if (var1 <= var0) {
                        _fun39108_ip = 107;
                        continue _fun39108
                    }
                case 154:
                    var0 = false;
                    return var0;
                case 158:
                    var0 = true;
                    return var0;
                case 162:
                    var0 = false;
                    return var0;
                case 166:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var6;
        var2[18] = var0;
        var0 = {};
        var6 = 'has';
        var0.key = var6;
        var6 = function arg0() {
            _fun39109: for (var _fun39109_ip = 0;;) switch (_fun39109_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arguments[1];
                    var3 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39109_ip = 17;
                        continue _fun39109
                    }
                case 15:
                    var1 = true;
                case 17:
                    var0 = var3._map;
                    var2 = var0[var5];
                    var0 = null;
                    var0 = var0 != var2;
                    if (var0) {
                        _fun39109_ip = 80;
                        continue _fun39109
                    }
                case 36:
                    if (!var1) {
                        _fun39109_ip = 77;
                        continue _fun39109
                    }
                case 39:
                    var4 = var3._before;
                    var2 = var4.has;
                    var2 = var2.bind(var4)(var5);
                    if (var2) {
                        _fun39109_ip = 74;
                        continue _fun39109
                    }
                case 58:
                    var4 = var3._after;
                    var3 = var4.has;
                    var2 = var3.bind(var4)(var5);
                case 74:
                    var1 = var2;
                case 77:
                    var0 = var1;
                case 80:
                    return var0;
            }
        };
        var0.value = var6;
        var2[19] = var0;
        var0 = {};
        var6 = 'indexOf';
        var0.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = -1;
            var _closure3_slot1 = var1;
            var1 = this;
            var3 = var1._array;
            var2 = var3.find;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun39111: for (var _fun39111_ip = 0;;) switch (_fun39111_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        if (!var0) {
                            _fun39111_ip = 31;
                            continue _fun39111
                        }
                    case 22:
                        var1 = arg1;
                        _closure3_slot1 = var1;
                        var0 = true;
                    case 31:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot1;
            return var0;
        };
        var0.value = var6;
        var2[20] = var0;
        var0 = {};
        var6 = 'hasPresent';
        var0.key = var6;
        var8 = function() {
            _fun39112: for (var _fun39112_ip = 0;;) switch (_fun39112_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._after;
                    var2 = var0.length;
                    var0 = 0;
                    var0 = var2 > var0;
                    if (!var0) {
                        _fun39112_ip = 35;
                        continue _fun39112
                    }
                case 23:
                    var2 = var1._after;
                    var0 = var2.wasAtEdge;
                case 35:
                    if (var0) {
                        _fun39112_ip = 47;
                        continue _fun39112
                    }
                case 38:
                    var1 = var1.hasMoreAfter;
                    var0 = !var1;
                case 47:
                    return var0;
            }
        };
        var0.value = var8;
        var2[21] = var0;
        var0 = {};
        var8 = 'hasBeforeCached';
        var0.key = var8;
        var8 = function arg0() {
            _fun39113: for (var _fun39113_ip = 0;;) switch (_fun39113_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.length;
                    var2 = 0;
                    if (!(var0 > var2)) {
                        _fun39113_ip = 29;
                        continue _fun39113
                    }
                case 14:
                    var0 = var1._before;
                    var0 = var0.length;
                    if (!(!(var0 > var2))) {
                        _fun39113_ip = 33;
                        continue _fun39113
                    }
                case 29:
                    var0 = false;
                    return var0;
                case 33:
                    var0 = var1.first;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39113_ip = 64;
                        continue _fun39113
                    }
                case 52:
                    var2 = var1.id;
                    var1 = arg0;
                    var0 = var2 === var1;
                case 64:
                    return var0;
            }
        };
        var0.value = var8;
        var2[22] = var0;
        var0 = {};
        var8 = 'hasAfterCached';
        var0.key = var8;
        var8 = function arg0() {
            _fun39114: for (var _fun39114_ip = 0;;) switch (_fun39114_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.length;
                    var2 = 0;
                    if (!(var0 > var2)) {
                        _fun39114_ip = 29;
                        continue _fun39114
                    }
                case 14:
                    var0 = var1._after;
                    var0 = var0.length;
                    if (!(!(var0 > var2))) {
                        _fun39114_ip = 33;
                        continue _fun39114
                    }
                case 29:
                    var0 = false;
                    return var0;
                case 33:
                    var0 = var1.last;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun39114_ip = 64;
                        continue _fun39114
                    }
                case 52:
                    var2 = var1.id;
                    var1 = arg0;
                    var0 = var2 === var1;
                case 64:
                    return var0;
            }
        };
        var0.value = var8;
        var2[23] = var0;
        var0 = {};
        var8 = 'update';
        var0.key = var8;
        var8 = function arg0, arg1() {
            _fun39115: for (var _fun39115_ip = 0;;) switch (_fun39115_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var5;
                    var0 = var4._map;
                    var2 = var0[var3];
                    var _closure3_slot2 = var2;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun39115_ip = 71;
                        continue _fun39115
                    }
                case 39:
                    var0 = undefined;
                    var0 = var5.bind(var0)(var2);
                    var _closure3_slot3 = var0;
                    var5 = var4.mutate;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var5 = var1._map;
                        var4 = _closure3_slot2;
                        var3 = var4.id;
                        var2 = _closure3_slot3;
                        var5[var3] = var2;
                        var2 = var1._array;
                        var3 = var1._array;
                        var1 = var3.indexOf;
                        var1 = var1.bind(var3)(var4);
                        var0 = _closure3_slot3;
                        var2[var1] = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = true;
                    var0 = var5.bind(var4)(var2, var0);
                    return var0;
                case 71:
                    var2 = var4._before;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun39115_ip = 133;
                        continue _fun39115
                    }
                case 90:
                    var2 = var4._after;
                    var0 = var2.has;
                    var2 = var0.bind(var2)(var3);
                    var0 = var4;
                    if (!var2) {
                        _fun39115_ip = 131;
                        continue _fun39115
                    }
                case 112:
                    var5 = var4.mutate;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0._after;
                        var2 = var3.update;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2 = true;
                    var0 = var5.bind(var4)(var3, var2);
                case 131:
                    _fun39115_ip = 152;
                    continue _fun39115;
                case 133:
                    var3 = var4.mutate;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0._before;
                        var2 = var3.update;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = true;
                    var0 = var3.bind(var4)(var2, var1);
                case 152:
                    return var0;
            }
        };
        var0.value = var8;
        var2[24] = var0;
        var0 = {};
        var8 = 'replace';
        var0.key = var8;
        var8 = function arg0, arg1() {
            _fun39119: for (var _fun39119_ip = 0;;) switch (_fun39119_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var _closure3_slot0 = var4;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = var5._map;
                    var1 = var0[var4];
                    var _closure3_slot2 = var1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun39119_ip = 60;
                        continue _fun39119
                    }
                case 39:
                    var3 = var5.mutate;
                    var1 = function(arg0) { // Environment: var2
                        var3 = arg0;
                        var2 = var3._map;
                        var1 = _closure3_slot0;
                        var1 = delete var2[var1];
                        var4 = var3._map;
                        var2 = _closure3_slot1;
                        var1 = var2.id;
                        var4[var1] = var2;
                        var1 = var3._array;
                        var4 = var3._array;
                        var3 = var4.indexOf;
                        var0 = _closure3_slot2;
                        var0 = var3.bind(var4)(var0);
                        var1[var0] = var2;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = true;
                    var0 = var3.bind(var5)(var1, var0);
                    _fun39119_ip = 144;
                    continue _fun39119;
                case 60:
                    var3 = var5._before;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var4);
                    if (var1) {
                        _fun39119_ip = 122;
                        continue _fun39119
                    }
                case 79:
                    var3 = var5._after;
                    var1 = var3.has;
                    var3 = var1.bind(var3)(var4);
                    var1 = var5;
                    if (!var3) {
                        _fun39119_ip = 120;
                        continue _fun39119
                    }
                case 101:
                    var6 = var5.mutate;
                    var4 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var3 = var0._after;
                        var2 = var3.replace;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var3 = true;
                    var1 = var6.bind(var5)(var4, var3);
                case 120:
                    _fun39119_ip = 141;
                    continue _fun39119;
                case 122:
                    var4 = var5.mutate;
                    var3 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var3 = var0._before;
                        var2 = var3.replace;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2 = true;
                    var1 = var4.bind(var5)(var3, var2);
                case 141:
                    var0 = var1;
                case 144:
                    return var0;
            }
        };
        var0.value = var8;
        var2[25] = var0;
        var0 = {};
        var8 = 'remove';
        var0.key = var8;
        var8 = function arg0() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.mutate;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0._map;
                var2 = _closure3_slot0;
                var1 = delete var1[var2];
                var4 = var0._array;
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure3_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var0._array = var1;
                var3 = var0._before;
                var1 = var3.remove;
                var1 = var1.bind(var3)(var2);
                var1 = var0._after;
                var0 = var1.remove;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var8;
        var2[26] = var0;
        var0 = {};
        var8 = 'removeMany';
        var0.key = var8;
        var8 = function arg0() {
            _fun39126: for (var _fun39126_ip = 0;;) switch (_fun39126_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var3;
                    var2 = var3.some;
                    var0 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var0);
                    var0 = var4;
                    if (!var2) {
                        _fun39126_ip = 57;
                        continue _fun39126
                    }
                case 38:
                    var3 = var4.mutate;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var0 = 6;
                        var3 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var3);
                        var5 = var6.each;
                        var3 = _closure3_slot1;
                        var4 = function(arg0) { // Environment: var2
                            var0 = _closure4_slot0;
                            var1 = var0._map;
                            var0 = arg0;
                            var0 = delete var1[var0];
                            var0 = undefined;
                            return var0;
                        };
                        var4 = var5.bind(var6)(var3, var4);
                        var5 = var1._array;
                        var4 = var5.filter;
                        var2 = function(arg0) { // Environment: var2
                            var2 = _closure3_slot1;
                            var1 = var2.indexOf;
                            var0 = arg0;
                            var0 = var0.id;
                            var1 = var1.bind(var2)(var0);
                            var0 = -1;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var1._array = var2;
                        var4 = var1._before;
                        var2 = var4.removeMany;
                        var2 = var2.bind(var4)(var3);
                        var2 = var1._after;
                        var1 = var2.removeMany;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var1 = true;
                    var0 = var3.bind(var4)(var2, var1);
                case 57:
                    return var0;
            }
        };
        var0.value = var8;
        var2[27] = var0;
        var0 = {};
        var8 = 'merge';
        var0.key = var8;
        var8 = function arg0() {
            _fun39131: for (var _fun39131_ip = 0;;) switch (_fun39131_ip) {
                case 0:
                    var4 = arguments[1];
                    var1 = arguments[2];
                    var3 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var2 = undefined;
                    if (!(var4 === var2)) {
                        _fun39131_ip = 26;
                        continue _fun39131
                    }
                case 24:
                    var4 = false;
                case 26:
                    var _closure3_slot1 = var4;
                    if (!(var1 === var2)) {
                        _fun39131_ip = 36;
                        continue _fun39131
                    }
                case 34:
                    var1 = false;
                case 36:
                    var _closure3_slot2 = var1;
                    var2 = var3.mutate;
                    var1 = function(arg0) { // Environment: var0
                        var4 = arg0;
                        var3 = var4._merge;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var0 = _closure3_slot2;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[28] = var0;
        var0 = {};
        var8 = '_merge';
        var0.key = var8;
        var8 = function arg0() {
            _fun39133: for (var _fun39133_ip = 0;;) switch (_fun39133_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arguments[1];
                    var3 = arguments[2];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun39133_ip = 26;
                        continue _fun39133
                    }
                case 24:
                    var1 = false;
                case 26:
                    if (!(var3 === var0)) {
                        _fun39133_ip = 32;
                        continue _fun39133
                    }
                case 30:
                    var3 = false;
                case 32:
                    var5 = var6.filter;
                    var4 = function(arg0) { // Environment: var4
                        _fun39134: for (var _fun39134_ip = 0;;) switch (_fun39134_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var4 = var0._map;
                                var2 = var3.id;
                                var5 = var4[var2];
                                var2 = var0._map;
                                var0 = var3.id;
                                var2[var0] = var3;
                                var0 = null;
                                var0 = var0 == var5;
                                if (var0) {
                                    _fun39134_ip = 82;
                                    continue _fun39134
                                }
                            case 49:
                                var1 = _closure3_slot0;
                                var2 = var1._array;
                                var4 = var1._array;
                                var1 = var4.indexOf;
                                var1 = var1.bind(var4)(var5);
                                var2[var1] = var3;
                                var0 = false;
                            case 82:
                                return var0;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    if (!var3) {
                        _fun39133_ip = 77;
                        continue _fun39133
                    }
                case 50:
                    if (var1) {
                        _fun39133_ip = 61;
                        continue _fun39133
                    }
                case 53:
                    var4 = var2._after;
                    _fun39133_ip = 67;
                    continue _fun39133;
                case 61:
                    var4 = var2._before;
                case 67:
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                case 77:
                    var3 = new Array(0);
                    if (var1) {
                        _fun39133_ip = 114;
                        continue _fun39133
                    }
                case 84:
                    var8 = var2._array;
                    var9 = var3;
                    var7 = 0;
                    var7 = arraySpread(var9, var8, var7);
                    var9 = var3;
                    var8 = var5;
                    var1 = arraySpread(var9, var8, var7);
                    var1 = var3;
                    _fun39133_ip = 142;
                    continue _fun39133;
                case 114:
                    var9 = var3;
                    var8 = var5;
                    var7 = 0;
                    var7 = arraySpread(var9, var8, var7);
                    var8 = var2._array;
                    var9 = var3;
                    var4 = arraySpread(var9, var8, var7);
                    var1 = var3;
                case 142:
                    var2._array = var1;
                    return var0;
            }
        };
        var0.value = var8;
        var2[29] = var0;
        var0 = {};
        var8 = 'mergeDelta';
        var0.key = var8;
        var8 = function() {
            _fun39135: for (var _fun39135_ip = 0;;) switch (_fun39135_ip) {
                case 0:
                    var5 = arguments[0];
                    var4 = arguments[1];
                    var1 = arguments[2];
                    var2 = this;
                    var3 = undefined;
                    if (!(var5 === var3)) {
                        _fun39135_ip = 24;
                        continue _fun39135
                    }
                case 20:
                    var5 = new Array(0);
                case 24:
                    var _closure3_slot0 = var5;
                    if (!(var4 === var3)) {
                        _fun39135_ip = 36;
                        continue _fun39135
                    }
                case 32:
                    var4 = new Array(0);
                case 36:
                    var _closure3_slot1 = var4;
                    if (!(var1 === var3)) {
                        _fun39135_ip = 48;
                        continue _fun39135
                    }
                case 44:
                    var1 = new Array(0);
                case 48:
                    var _closure3_slot2 = var1;
                    var1 = var2.mutate;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var3 = var1._before;
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        var3 = var1._after;
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        var2 = global;
                        var5 = var2.Set;
                        var9 = _closure3_slot2;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var4;
                        var3 = new var10[var5](var9, var8);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var _closure4_slot0 = var3;
                        var6 = _closure3_slot0;
                        var4 = var6.forEach;
                        var3 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = var2.add;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var6)(var3);
                        var7 = _closure3_slot1;
                        var3 = var7.forEach;
                        var2 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = var2.add;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var3.bind(var7)(var2);
                        var4 = var1._array;
                        var3 = var4.filter;
                        var2 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var1 = var2.has;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var5 = var3.bind(var4)(var2);
                        var4 = var5.concat;
                        var3 = var6.map;
                        var2 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.createMessageRecord;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var3.bind(var6)(var2);
                        var6 = var7.map;
                        var2 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.createMessageRecord;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var6.bind(var7)(var2);
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = var3.sort;
                        var0 = function(arg0, arg1) { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        var1._array = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[30] = var0;
        var0 = {};
        var8 = '_clearMessages';
        var0.key = var8;
        var8 = function() {
            var1 = this;
            var0 = new Array(0);
            var1._array = var0;
            var0 = {};
            var1._map = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var8;
        var2[31] = var0;
        var0 = {};
        var8 = 'reset';
        var0.key = var8;
        var8 = function arg0() {
            var2 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = var2.mutate;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var3 = _closure3_slot0;
                var0._array = var3;
                var2 = {};
                var0._map = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = _closure4_slot0;
                    var2 = var1._map;
                    var1 = var0.id;
                    var2[var1] = var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var2 = var0._before;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = var0._after;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var8;
        var2[32] = var0;
        var0 = {};
        var8 = 'truncateTop';
        var0.key = var8;
        var8 = function arg0() {
            _fun39147: for (var _fun39147_ip = 0;;) switch (_fun39147_ip) {
                case 0:
                    var4 = arguments[1];
                    var3 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun39147_ip = 16;
                        continue _fun39147
                    }
                case 14:
                    var4 = true;
                case 16:
                    var _closure3_slot0 = var0;
                    var0 = var3._array;
                    var2 = var0.length;
                    var0 = arg0;
                    var5 = var2 - var0;
                    _closure3_slot0 = var5;
                    var2 = 0;
                    var0 = var3;
                    if (!(!(var5 <= var2))) {
                        _fun39147_ip = 68;
                        continue _fun39147
                    }
                case 51:
                    var2 = var3.mutate;
                    var1 = function(arg0) { // Environment: var1
                        _fun39148: for (var _fun39148_ip = 0;;) switch (_fun39148_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure3_slot0;
                                var7 = 0;
                                var2 = var7 < var2;
                                var3 = 0;
                                if (!var2) {
                                    _fun39148_ip = 57;
                                    continue _fun39148
                                }
                            case 21:
                                var4 = var1._map;
                                var2 = var1._array;
                                var2 = var2[var3];
                                var2 = var2.id;
                                var2 = delete var4[var2];
                                var3 = var3 + 1;
                                var2 = _closure3_slot0;
                                if (var3 < var2) {
                                    _fun39148_ip = 21;
                                    continue _fun39148
                                }
                            case 57:
                                var5 = var1._before;
                                var4 = var5.cache;
                                var6 = var1._array;
                                var3 = var6.slice;
                                var2 = _closure3_slot0;
                                var3 = var3.bind(var6)(var7, var2);
                                var2 = var1.hasMoreBefore;
                                var2 = !var2;
                                var2 = var4.bind(var5)(var3, var2);
                                var3 = var1._array;
                                var2 = var3.slice;
                                var0 = _closure3_slot0;
                                var0 = var2.bind(var3)(var0);
                                var1._array = var0;
                                var0 = true;
                                var1.hasMoreBefore = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var4);
                case 68:
                    return var0;
            }
        };
        var0.value = var8;
        var2[33] = var0;
        var0 = {};
        var8 = 'truncateBottom';
        var0.key = var8;
        var8 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var8;
        var2[34] = var0;
        var0 = {};
        var8 = 'jumpToPresent';
        var0.key = var8;
        var8 = function arg0() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.mutate;
            var1 = function(arg0) { // Environment: var0
                var1 = arg0;
                var2 = var1._after;
                var0 = var2.extractAll;
                var6 = var0.bind(var2)();
                var0 = false;
                var1.hasMoreAfter = var0;
                var2 = global;
                var5 = var2.Math;
                var3 = var5.max;
                var4 = var6.length;
                var2 = _closure3_slot0;
                var2 = var4 - var2;
                var4 = 0;
                var5 = var3.bind(var5)(var2, var4);
                var2 = var6.slice;
                var3 = var2.bind(var6)(var5);
                var2 = var6.splice;
                var2 = var2.bind(var6)(var5);
                var7 = var1._before;
                var5 = var7.cache;
                var2 = var1._array;
                var2 = var5.bind(var7)(var2);
                var5 = var1._before;
                var2 = var5.cache;
                var2 = var2.bind(var5)(var6);
                var2 = var1._clearMessages;
                var2 = var2.bind(var1)();
                var2 = var1._merge;
                var2 = var2.bind(var1)(var3);
                var2 = var1._before;
                var2 = var2.length;
                var2 = var2 > var4;
                var1.hasMoreBefore = var2;
                var2 = true;
                var1.jumped = var2;
                var3 = null;
                var1.jumpTargetId = var3;
                var1.jumpTargetOffset = var4;
                var1.jumpedToPresent = var2;
                var1.jumpFlash = var0;
                var1.jumpReturnTargetId = var3;
                var4 = var1.jumpSequenceId;
                var3 = 1;
                var3 = var4 + var3;
                var1.jumpSequenceId = var3;
                var1.ready = var2;
                var1.loadingMore = var0;
                var0 = undefined;
                return var0;
            };
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var8;
        var2[35] = var0;
        var0 = {};
        var8 = 'jumpToMessage';
        var0.key = var8;
        var8 = function arg0() {
            _fun39152: for (var _fun39152_ip = 0;;) switch (_fun39152_ip) {
                case 0:
                    var4 = arguments[1];
                    var1 = arguments[3];
                    var3 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var2 = undefined;
                    if (!(var4 === var2)) {
                        _fun39152_ip = 26;
                        continue _fun39152
                    }
                case 24:
                    var4 = true;
                case 26:
                    var _closure3_slot1 = var4;
                    var4 = arguments[2];
                    var _closure3_slot2 = var4;
                    if (!(var1 === var2)) {
                        _fun39152_ip = 43;
                        continue _fun39152
                    }
                case 41:
                    var1 = null;
                case 43:
                    var _closure3_slot3 = var1;
                    var1 = arguments[4];
                    var _closure3_slot4 = var1;
                    var2 = var3.mutate;
                    var1 = function(arg0) { // Environment: var0
                        _fun39153: for (var _fun39153_ip = 0;;) switch (_fun39153_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = true;
                                var1.jumped = var2;
                                var0 = false;
                                var1.jumpedToPresent = var0;
                                var4 = _closure3_slot4;
                                var7 = null;
                                if (!(var7 == var4)) {
                                    _fun39153_ip = 71;
                                    continue _fun39153
                                }
                            case 32:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var4 = 7;
                                var5 = var5[var4];
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var4 = var4.JumpTypes;
                                var4 = var4.ANIMATED;
                                _fun39153_ip = 75;
                                continue _fun39153;
                            case 71:
                                var4 = _closure3_slot4;
                            case 75:
                                var1.jumpType = var4;
                                var4 = _closure3_slot0;
                                var1.jumpTargetId = var4;
                                var5 = var7 != var4;
                                var4 = 0;
                                if (!var5) {
                                    _fun39153_ip = 117;
                                    continue _fun39153
                                }
                            case 100:
                                var5 = _closure3_slot2;
                                var5 = var7 != var5;
                                var4 = 0;
                                if (!var5) {
                                    _fun39153_ip = 117;
                                    continue _fun39153
                                }
                            case 113:
                                var4 = _closure3_slot2;
                            case 117:
                                var1.jumpTargetOffset = var4;
                                var5 = var1.jumpSequenceId;
                                var4 = 1;
                                var4 = var5 + var4;
                                var1.jumpSequenceId = var4;
                                var4 = _closure3_slot1;
                                var1.jumpFlash = var4;
                                var3 = _closure3_slot3;
                                var1.jumpReturnTargetId = var3;
                                var1.ready = var2;
                                var1.loadingMore = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[36] = var0;
        var0 = {};
        var8 = 'focusOnMessage';
        var0.key = var8;
        var8 = function arg0() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = var3.mutate;
            var1 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = _closure3_slot0;
                var1.focusTargetId = var0;
                var2 = var1.focusSequenceId;
                var0 = 1;
                var0 = var2 + var0;
                var1.focusSequenceId = var0;
                var0 = true;
                var1.ready = var0;
                var0 = false;
                var1.loadingMore = var0;
                var0 = undefined;
                return var0;
            };
            var0 = false;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var8;
        var2[37] = var0;
        var0 = {};
        var8 = 'loadFromCache';
        var0.key = var8;
        var8 = function arg0, arg1() {
            var3 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = var3.mutate;
            var1 = function(arg0) { // Environment: var0
                _fun39157: for (var _fun39157_ip = 0;;) switch (_fun39157_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure3_slot0;
                        if (var0) {
                            _fun39157_ip = 21;
                            continue _fun39157
                        }
                    case 13:
                        var3 = var1._after;
                        _fun39157_ip = 27;
                        continue _fun39157;
                    case 21:
                        var3 = var1._before;
                    case 27:
                        var5 = var1._merge;
                        var4 = var3.extract;
                        var0 = _closure3_slot1;
                        var4 = var4.bind(var3)(var0);
                        var0 = _closure3_slot0;
                        var0 = var5.bind(var1)(var4, var0);
                        var4 = var3.length;
                        var0 = 0;
                        var0 = var4 > var0;
                        if (var0) {
                            _fun39157_ip = 81;
                            continue _fun39157
                        }
                    case 72:
                        var3 = var3.wasAtEdge;
                        var0 = !var3;
                    case 81:
                        var2 = _closure3_slot0;
                        if (var2) {
                            _fun39157_ip = 96;
                            continue _fun39157
                        }
                    case 88:
                        var1.hasMoreAfter = var0;
                        _fun39157_ip = 102;
                        continue _fun39157;
                    case 96:
                        var1.hasMoreBefore = var0;
                    case 102:
                        var0 = true;
                        var1.ready = var0;
                        var0 = false;
                        var1.loadingMore = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var8;
        var2[38] = var0;
        var0 = {};
        var8 = 'truncate';
        var0.key = var8;
        var8 = function arg0, arg1() {
            _fun39158: for (var _fun39158_ip = 0;;) switch (_fun39158_ip) {
                case 0:
                    var4 = this;
                    var3 = var4.length;
                    var1 = _closure1_slot7;
                    var0 = var4;
                    if (!(!(var3 <= var1))) {
                        _fun39158_ip = 72;
                        continue _fun39158
                    }
                case 22:
                    var1 = arg0;
                    if (var1) {
                        _fun39158_ip = 54;
                        continue _fun39158
                    }
                case 28:
                    var3 = arg1;
                    var1 = var4;
                    if (!var3) {
                        _fun39158_ip = 52;
                        continue _fun39158
                    }
                case 37:
                    var5 = var4.truncateTop;
                    var3 = _closure1_slot9;
                    var1 = var5.bind(var4)(var3);
                case 52:
                    _fun39158_ip = 69;
                    continue _fun39158;
                case 54:
                    var3 = var4.truncateBottom;
                    var2 = _closure1_slot9;
                    var1 = var3.bind(var4)(var2);
                case 69:
                    var0 = var1;
                case 72:
                    return var0;
            }
        };
        var0.value = var8;
        var2[39] = var0;
        var0 = {};
        var8 = 'receiveMessage';
        var0.key = var8;
        var8 = function arg0() {
            _fun39159: for (var _fun39159_ip = 0;;) switch (_fun39159_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arguments[1];
                    var3 = this;
                    var6 = undefined;
                    if (!(var2 === var6)) {
                        _fun39159_ip = 17;
                        continue _fun39159
                    }
                case 15:
                    var2 = true;
                case 17:
                    var1 = var0.nonce;
                    var5 = null;
                    var4 = var5 == var1;
                    var1 = null;
                    if (var4) {
                        _fun39159_ip = 53;
                        continue _fun39159
                    }
                case 34:
                    var8 = var3.get;
                    var7 = var0.nonce;
                    var4 = true;
                    var1 = var8.bind(var3)(var7, var4);
                case 53:
                    if (!(var5 != var1)) {
                        _fun39159_ip = 170;
                        continue _fun39159
                    }
                case 57:
                    var4 = var0.author;
                    var8 = var5 == var4;
                    var7 = undefined;
                    if (var8) {
                        _fun39159_ip = 77;
                        continue _fun39159
                    }
                case 72:
                    var7 = var4.id;
                case 77:
                    var8 = var1.author;
                    var9 = var5 == var8;
                    var4 = undefined;
                    if (var9) {
                        _fun39159_ip = 97;
                        continue _fun39159
                    }
                case 92:
                    var4 = var8.id;
                case 97:
                    if (!(var7 !== var4)) {
                        _fun39159_ip = 142;
                        continue _fun39159
                    }
                case 101:
                    var4 = var0.interaction;
                    if (!(var5 != var4)) {
                        _fun39159_ip = 170;
                        continue _fun39159
                    }
                case 111:
                    var4 = var0.interaction;
                    var4 = var4.user;
                    var7 = var4.id;
                    var4 = var1.author;
                    var4 = var4.id;
                    if (!(var7 === var4)) {
                        _fun39159_ip = 170;
                        continue _fun39159
                    }
                case 142:
                    var4 = var0.nonce;
                    if (!(var5 != var4)) {
                        _fun39159_ip = 170;
                        continue _fun39159
                    }
                case 152:
                    var7 = var1.id;
                    var4 = var0.nonce;
                    if (!(var7 !== var4)) {
                        _fun39159_ip = 394;
                        continue _fun39159
                    }
                case 170:
                    var4 = var3.hasMoreAfter;
                    if (var4) {
                        _fun39159_ip = 363;
                        continue _fun39159
                    }
                case 182:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 9;
                    var7 = var9[var7];
                    var11 = var8.bind(var6)(var7);
                    var10 = var11.getCurrentConfig;
                    var8 = {};
                    var7 = '2ecb25_1';
                    var8.location = var7;
                    var7 = {};
                    var9 = false;
                    var7.autoTrackExposure = var9;
                    var7 = var10.bind(var11)(var8, var7);
                    var7 = var7.enabled;
                    if (var7) {
                        _fun39159_ip = 258;
                        continue _fun39159
                    }
                case 246:
                    var7 = _closure1_slot13;
                    var10 = var7.bind(var6)(var3, var0);
                    _fun39159_ip = 289;
                    continue _fun39159;
                case 258:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 5;
                    var7 = var11[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.createMessageRecord;
                    var10 = var7.bind(var8)(var0);
                case 289:
                    var8 = var3.merge;
                    var7 = new Array(1);
                    var7[0] = var10;
                    var8 = var8.bind(var3)(var7);
                    if (var2) {
                        _fun39159_ip = 345;
                        continue _fun39159
                    }
                case 311:
                    var10 = var3.length;
                    var7 = _closure1_slot7;
                    var2 = var8;
                    if (!(var10 > var7)) {
                        _fun39159_ip = 343;
                        continue _fun39159
                    }
                case 327:
                    var10 = var8.truncateBottom;
                    var7 = _closure1_slot6;
                    var2 = var10.bind(var8)(var7, var9);
                case 343:
                    _fun39159_ip = 361;
                    continue _fun39159;
                case 345:
                    var7 = var8.truncateTop;
                    var4 = _closure1_slot6;
                    var2 = var7.bind(var8)(var4, var9);
                case 361:
                    return var2;
                case 363:
                    var2 = var3._after;
                    var2 = var2.wasAtEdge;
                    if (!var2) {
                        _fun39159_ip = 392;
                        continue _fun39159
                    }
                case 378:
                    var4 = var3._after;
                    var2 = false;
                    var4.wasAtEdge = var2;
                case 392:
                    return var3;
                case 394:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 5;
                    var2 = var7[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.createMessageRecord;
                    var2 = var2.bind(var4)(var0);
                    var4 = var1.interactionData;
                    if (!(var5 != var4)) {
                        _fun39159_ip = 450;
                        continue _fun39159
                    }
                case 438:
                    var1 = var1.interactionData;
                    var2.interactionData = var1;
                case 450:
                    var1 = var3.replace;
                    var0 = var0.nonce;
                    var0 = var1.bind(var3)(var0, var2);
                    return var0;
            }
        };
        var0.value = var8;
        var2[40] = var0;
        var0 = {};
        var8 = 'receivePushNotification';
        var0.key = var8;
        var8 = function arg0, arg1() {
            _fun39160: for (var _fun39160_ip = 0;;) switch (_fun39160_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var1 = var5.nonce;
                    var2 = null;
                    var3 = var2 == var1;
                    var1 = null;
                    if (var3) {
                        _fun39160_ip = 42;
                        continue _fun39160
                    }
                case 23:
                    var6 = var0.get;
                    var4 = var5.nonce;
                    var3 = true;
                    var1 = var6.bind(var0)(var4, var3);
                case 42:
                    if (!(var2 == var1)) {
                        _fun39160_ip = 174;
                        continue _fun39160
                    }
                case 49:
                    var3 = var0.get;
                    var1 = var5.id;
                    var7 = true;
                    var1 = var3.bind(var0)(var1, var7);
                    if (!(var2 == var1)) {
                        _fun39160_ip = 172;
                        continue _fun39160
                    }
                case 71:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                    var2 = var2.bind(var3)();
                    var6 = !var2;
                    if (var6) {
                        _fun39160_ip = 118;
                        continue _fun39160
                    }
                case 112:
                    var2 = arg1;
                    var6 = !var2;
                case 118:
                    var3 = var0.mutate;
                    var2 = {};
                    var2.ready = var7;
                    var2.cached = var6;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.merge;
                    var1 = _closure1_slot13;
                    var4 = var1.bind(var4)(var0, var5);
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 172:
                    return var0;
                case 174:
                    return var0;
            }
        };
        var0.value = var8;
        var2[41] = var0;
        var0 = {};
        var8 = 'receiveReactionInAppNotification';
        var0.key = var8;
        var8 = function arg0() {
            _fun39161: for (var _fun39161_ip = 0;;) switch (_fun39161_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var0 = var6.nonce;
                    var2 = null;
                    var0 = var2 == var0;
                    var1 = null;
                    if (var0) {
                        _fun39161_ip = 42;
                        continue _fun39161
                    }
                case 23:
                    var4 = var5.get;
                    var3 = var6.nonce;
                    var0 = true;
                    var1 = var4.bind(var5)(var3, var0);
                case 42:
                    var0 = var5;
                    if (!(var2 == var1)) {
                        _fun39161_ip = 108;
                        continue _fun39161
                    }
                case 49:
                    var2 = var5.mutate;
                    var1 = {
                        'ready': true,
                        'cached': true
                    };
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.merge;
                    var4 = _closure1_slot13;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var5, var6);
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = var2.bind(var3)(var1);
                case 108:
                    return var0;
            }
        };
        var0.value = var8;
        var2[42] = var0;
        var0 = {};
        var8 = 'loadStart';
        var0.key = var8;
        var8 = function arg0() {
            _fun39162: for (var _fun39162_ip = 0;;) switch (_fun39162_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.mutate;
                    var0 = {};
                    var3 = true;
                    var0.loadingMore = var3;
                    var3 = null;
                    var5 = var3 != var4;
                    var0.jumped = var5;
                    var5 = var3 == var4;
                    var7 = undefined;
                    if (var5) {
                        _fun39162_ip = 47;
                        continue _fun39162
                    }
                case 41:
                    var7 = var4.present;
                case 47:
                    var5 = var3 != var7;
                    if (!var5) {
                        _fun39162_ip = 57;
                        continue _fun39162
                    }
                case 54:
                    var5 = var7;
                case 57:
                    var0.jumpedToPresent = var5;
                    var5 = var3 == var4;
                    var7 = undefined;
                    if (var5) {
                        _fun39162_ip = 76;
                        continue _fun39162
                    }
                case 71:
                    var7 = var4.messageId;
                case 76:
                    var8 = var3 != var7;
                    var5 = null;
                    if (!var8) {
                        _fun39162_ip = 88;
                        continue _fun39162
                    }
                case 85:
                    var5 = var7;
                case 88:
                    var0.jumpTargetId = var5;
                    var5 = var3 == var4;
                    var7 = undefined;
                    if (var5) {
                        _fun39162_ip = 108;
                        continue _fun39162
                    }
                case 102:
                    var7 = var4.offset;
                case 108:
                    var8 = var3 != var7;
                    var5 = 0;
                    if (!var8) {
                        _fun39162_ip = 120;
                        continue _fun39162
                    }
                case 117:
                    var5 = var7;
                case 120:
                    var0.jumpTargetOffset = var5;
                    var5 = var3 == var4;
                    var6 = undefined;
                    if (var5) {
                        _fun39162_ip = 140;
                        continue _fun39162
                    }
                case 134:
                    var6 = var4.returnMessageId;
                case 140:
                    var7 = var3 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun39162_ip = 152;
                        continue _fun39162
                    }
                case 149:
                    var5 = var6;
                case 152:
                    var0.jumpReturnTargetId = var5;
                    var3 = var3 == var4;
                    if (!var3) {
                        _fun39162_ip = 170;
                        continue _fun39162
                    }
                case 164:
                    var3 = var2.ready;
                case 170:
                    var0.ready = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[43] = var0;
        var0 = {};
        var8 = 'loadComplete';
        var0.key = var8;
        var8 = function arg0() {
            _fun39163: for (var _fun39163_ip = 0;;) switch (_fun39163_ip) {
                case 0:
                    var5 = arg0;
                    var15 = this;
                    var _closure3_slot0 = var15;
                    var25 = var5.newMessages;
                    var2 = new Array(0);
                    var17 = 0;
                    var26 = var2;
                    var24 = 0;
                    var1 = arraySpread(var26, var25, var24);
                    var1 = var5.isBefore;
                    var11 = null;
                    var8 = var11 != var1;
                    if (!var8) {
                        _fun39163_ip = 51;
                        continue _fun39163
                    }
                case 48:
                    var8 = var1;
                case 51:
                    var1 = var5.isAfter;
                    var12 = var11 != var1;
                    if (!var12) {
                        _fun39163_ip = 67;
                        continue _fun39163
                    }
                case 64:
                    var12 = var1;
                case 67:
                    var1 = var5.jump;
                    var3 = var11 != var1;
                    var10 = null;
                    if (!var3) {
                        _fun39163_ip = 85;
                        continue _fun39163
                    }
                case 82:
                    var10 = var1;
                case 85:
                    var1 = var5.hasMoreBefore;
                    var13 = var11 != var1;
                    if (!var13) {
                        _fun39163_ip = 101;
                        continue _fun39163
                    }
                case 98:
                    var13 = var1;
                case 101:
                    var1 = var5.hasMoreAfter;
                    var9 = var11 != var1;
                    if (!var9) {
                        _fun39163_ip = 117;
                        continue _fun39163
                    }
                case 114:
                    var9 = var1;
                case 117:
                    var1 = var5.avoidInitialScroll;
                    var7 = var11 != var1;
                    if (!var7) {
                        _fun39163_ip = 133;
                        continue _fun39163
                    }
                case 130:
                    var7 = var1;
                case 133:
                    var1 = var5.cached;
                    var6 = var11 != var1;
                    if (!var6) {
                        _fun39163_ip = 149;
                        continue _fun39163
                    }
                case 146:
                    var6 = var1;
                case 149:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var1 = 6;
                    var1 = var18[var1];
                    var14 = undefined;
                    var1 = var4.bind(var14)(var1);
                    var2 = var1.bind(var14)(var2);
                    var1 = var2.reverse;
                    var3 = var1.bind(var2)();
                    var2 = var3.map;
                    var1 = 9;
                    var1 = var18[var1];
                    var20 = var4.bind(var14)(var1);
                    var19 = var20.getCurrentConfig;
                    var18 = {};
                    var1 = '2ecb25_2';
                    var18.location = var1;
                    var1 = {};
                    var4 = false;
                    var1.autoTrackExposure = var4;
                    var1 = var19.bind(var20)(var18, var1);
                    var1 = var1.enabled;
                    if (var1) {
                        _fun39163_ip = 254;
                        continue _fun39163
                    }
                case 247:
                    var1 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot13;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    _fun39163_ip = 259;
                    continue _fun39163;
                case 254:
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.createMessageRecord;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                case 259:
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var3 = var1.bind(var2)();
                    if (var8) {
                        _fun39163_ip = 279;
                        continue _fun39163
                    }
                case 276:
                    if (!var12) {
                        _fun39163_ip = 295;
                        continue _fun39163
                    }
                case 279:
                    if (!(var11 == var10)) {
                        _fun39163_ip = 295;
                        continue _fun39163
                    }
                case 283:
                    var1 = var15.ready;
                    if (var1) {
                        _fun39163_ip = 631;
                        continue _fun39163
                    }
                case 295:
                    var18 = var15._array;
                    var2 = var18.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.state;
                        var0 = _closure1_slot10;
                        var0 = var0.SENDING;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var18)(var1);
                    var18 = var15._array;
                    var2 = var18.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.state;
                        var0 = _closure1_slot10;
                        var0 = var0.SEND_FAILED;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var18 = var2.bind(var18)(var0);
                    var0 = var1.length;
                    var2 = var0 > var17;
                    if (var2) {
                        _fun39163_ip = 358;
                        continue _fun39163
                    }
                case 349:
                    var0 = var18.length;
                    var2 = var0 > var17;
                case 358:
                    var0 = var15.reset;
                    var0 = var0.bind(var15)(var3);
                    if (!var2) {
                        _fun39163_ip = 569;
                        continue _fun39163
                    }
                case 375:
                    if (var8) {
                        _fun39163_ip = 569;
                        continue _fun39163
                    }
                case 381:
                    if (var12) {
                        _fun39163_ip = 569;
                        continue _fun39163
                    }
                case 387:
                    var19 = var11 == var10;
                    var2 = undefined;
                    if (var19) {
                        _fun39163_ip = 401;
                        continue _fun39163
                    }
                case 396:
                    var2 = var10.messageId;
                case 401:
                    if (!(var11 == var2)) {
                        _fun39163_ip = 569;
                        continue _fun39163
                    }
                case 408:
                    var19 = var11 == var10;
                    var2 = undefined;
                    if (var19) {
                        _fun39163_ip = 423;
                        continue _fun39163
                    }
                case 417:
                    var2 = var10.offset;
                case 423:
                    if (!(var11 == var2)) {
                        _fun39163_ip = 569;
                        continue _fun39163
                    }
                case 430:
                    var2 = var18.length;
                    var19 = var0;
                    if (!(var2 > var17)) {
                        _fun39163_ip = 497;
                        continue _fun39163
                    }
                case 442:
                    var21 = _closure1_slot11;
                    var20 = var21.info;
                    var23 = var15.channelId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var22 = var2.concat;
                    var2 = 'loadComplete: merging with SEND_FAILED messages for channelId=';
                    var2 = var22.bind(var2)(var23);
                    var2 = var20.bind(var21)(var2);
                    var2 = var0.merge;
                    var19 = var2.bind(var0)(var18);
                case 497:
                    var18 = var1.length;
                    var2 = var19;
                    if (!(var18 > var17)) {
                        _fun39163_ip = 646;
                        continue _fun39163
                    }
                case 512:
                    var21 = _closure1_slot11;
                    var20 = var21.info;
                    var23 = var15.channelId;
                    var18 = global;
                    var18 = var18.HermesInternal;
                    var22 = var18.concat;
                    var18 = 'loadComplete: merging with SENDING messages for channelId=';
                    var18 = var22.bind(var18)(var23);
                    var18 = var20.bind(var21)(var18);
                    var18 = var19.merge;
                    var2 = var18.bind(var19)(var1);
                    _fun39163_ip = 646;
                    continue _fun39163;
                case 569:
                    var19 = _closure1_slot11;
                    var18 = var19.info;
                    var23 = var15.channelId;
                    var22 = var1.length;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var21 = var1.concat;
                    var20 = 'loadComplete: resetting state for channelId=';
                    var1 = ', sending.length=';
                    var1 = var21.bind(var20)(var23, var1, var22);
                    var1 = var18.bind(var19)(var1);
                    var2 = var0;
                    _fun39163_ip = 646;
                    continue _fun39163;
                case 631:
                    var1 = var15.merge;
                    var0 = true;
                    var2 = var1.bind(var15)(var3, var8, var0);
                case 646:
                    var3 = !var6;
                    if (!var3) {
                        _fun39163_ip = 658;
                        continue _fun39163
                    }
                case 652:
                    var3 = var2.cached;
                case 658:
                    if (!var3) {
                        _fun39163_ip = 664;
                        continue _fun39163
                    }
                case 661:
                    var3 = !var7;
                case 664:
                    var1 = var2.mutate;
                    var0 = {
                        'ready': true,
                        'loadingMore': false
                    };
                    var18 = var11 == var10;
                    var15 = undefined;
                    if (var18) {
                        _fun39163_ip = 699;
                        continue _fun39163
                    }
                case 693:
                    var15 = var10.jumpType;
                case 699:
                    if (!(var11 == var15)) {
                        _fun39163_ip = 735;
                        continue _fun39163
                    }
                case 703:
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var16 = 7;
                    var16 = var19[var16];
                    var16 = var18.bind(var14)(var16);
                    var16 = var16.JumpTypes;
                    var15 = var16.ANIMATED;
                case 735:
                    var0.jumpType = var15;
                    var15 = var11 == var10;
                    var16 = undefined;
                    if (var15) {
                        _fun39163_ip = 755;
                        continue _fun39163
                    }
                case 749:
                    var16 = var10.flash;
                case 755:
                    var15 = var11 != var16;
                    if (!var15) {
                        _fun39163_ip = 765;
                        continue _fun39163
                    }
                case 762:
                    var15 = var16;
                case 765:
                    var0.jumpFlash = var15;
                    var15 = var11 != var10;
                    var0.jumped = var15;
                    var15 = var11 == var10;
                    var16 = undefined;
                    if (var15) {
                        _fun39163_ip = 794;
                        continue _fun39163
                    }
                case 788:
                    var16 = var10.present;
                case 794:
                    var15 = var11 != var16;
                    if (!var15) {
                        _fun39163_ip = 804;
                        continue _fun39163
                    }
                case 801:
                    var15 = var16;
                case 804:
                    var0.jumpedToPresent = var15;
                    var15 = var11 == var10;
                    var16 = undefined;
                    if (var15) {
                        _fun39163_ip = 823;
                        continue _fun39163
                    }
                case 818:
                    var16 = var10.messageId;
                case 823:
                    var18 = var11 != var16;
                    var15 = null;
                    if (!var18) {
                        _fun39163_ip = 835;
                        continue _fun39163
                    }
                case 832:
                    var15 = var16;
                case 835:
                    var0.jumpTargetId = var15;
                    var16 = var11 != var10;
                    var15 = 0;
                    if (!var16) {
                        _fun39163_ip = 884;
                        continue _fun39163
                    }
                case 849:
                    var16 = var10.messageId;
                    var16 = var11 != var16;
                    var15 = 0;
                    if (!var16) {
                        _fun39163_ip = 884;
                        continue _fun39163
                    }
                case 863:
                    var16 = var10.offset;
                    var16 = var11 != var16;
                    var15 = 0;
                    if (!var16) {
                        _fun39163_ip = 884;
                        continue _fun39163
                    }
                case 878:
                    var15 = var10.offset;
                case 884:
                    var0.jumpTargetOffset = var15;
                    if (!(var11 != var10)) {
                        _fun39163_ip = 911;
                        continue _fun39163
                    }
                case 893:
                    if (var7) {
                        _fun39163_ip = 911;
                        continue _fun39163
                    }
                case 896:
                    var15 = var2.jumpSequenceId;
                    var7 = 1;
                    var7 = var15 + var7;
                    _fun39163_ip = 917;
                    continue _fun39163;
                case 911:
                    var7 = var2.jumpSequenceId;
                case 917:
                    var0.jumpSequenceId = var7;
                    var7 = var11 == var10;
                    var14 = undefined;
                    if (var7) {
                        _fun39163_ip = 937;
                        continue _fun39163
                    }
                case 931:
                    var14 = var10.returnMessageId;
                case 937:
                    var15 = var11 != var14;
                    var7 = null;
                    if (!var15) {
                        _fun39163_ip = 949;
                        continue _fun39163
                    }
                case 946:
                    var7 = var14;
                case 949:
                    var0.jumpReturnTargetId = var7;
                    var7 = var13;
                    if (!(var11 == var10)) {
                        _fun39163_ip = 973;
                        continue _fun39163
                    }
                case 961:
                    var7 = var13;
                    if (!var12) {
                        _fun39163_ip = 973;
                        continue _fun39163
                    }
                case 967:
                    var7 = var2.hasMoreBefore;
                case 973:
                    var0.hasMoreBefore = var7;
                    var7 = var9;
                    if (!(var11 == var10)) {
                        _fun39163_ip = 997;
                        continue _fun39163
                    }
                case 985:
                    var7 = var9;
                    if (!var8) {
                        _fun39163_ip = 997;
                        continue _fun39163
                    }
                case 991:
                    var7 = var2.hasMoreAfter;
                case 997:
                    var0.hasMoreAfter = var7;
                    var0.cached = var6;
                    var5 = var5.hasFetched;
                    var0.hasFetched = var5;
                    var0.error = var4;
                    var5 = var2.initialScrollSequenceId;
                    if (var3) {
                        _fun39163_ip = 1036;
                        continue _fun39163
                    }
                case 1031:
                    var3 = var5;
                    _fun39163_ip = 1043;
                    continue _fun39163;
                case 1036:
                    var4 = 1;
                    var3 = var5 + var4;
                case 1043:
                    var0.initialScrollSequenceId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[44] = var0;
        var0 = {};
        var8 = 'addCachedMessages';
        var0.key = var8;
        var8 = function arg0, arg1() {
            _fun39168: for (var _fun39168_ip = 0;;) switch (_fun39168_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var1 = var2.requireSortedDescending;
                    var1 = var1.bind(var2)(var3);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot13;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.reverse;
                    var1 = var1.bind(var2)();
                    var _closure3_slot1 = var1;
                    var6 = var4._array;
                    var3 = var6.filter;
                    var2 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure3_slot1;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.id;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot3;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.insert;
                        var2 = _closure3_slot1;
                        var1 = arg0;
                        var0 = function(arg0, arg1) { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var3 = !var5;
                    if (!var3) {
                        _fun39168_ip = 128;
                        continue _fun39168
                    }
                case 122:
                    var3 = var4.cached;
                case 128:
                    var0 = var4.reset;
                    var2 = var0.bind(var4)(var1);
                    var1 = var2.mutate;
                    var0 = {
                        'ready': true,
                        'cached': null,
                        'error': false
                    };
                    var0.cached = var5;
                    var5 = var4.initialScrollSequenceId;
                    if (var3) {
                        _fun39168_ip = 179;
                        continue _fun39168
                    }
                case 174:
                    var3 = var5;
                    _fun39168_ip = 186;
                    continue _fun39168;
                case 179:
                    var4 = 1;
                    var3 = var5 + var4;
                case 186:
                    var0.initialScrollSequenceId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var8;
        var2[45] = var0;
        var0 = {};
        var0.key = var1;
        var1 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.forEach;
            var1 = _closure2_slot0;
            var2 = var1._channelMessages;
            var1 = arg0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var0.key = var7;
        var7 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0._channelMessages;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var7;
        var1[1] = var0;
        var0 = {};
        var0.key = var6;
        var6 = function arg0() {
            _fun39176: for (var _fun39176_ip = 0;;) switch (_fun39176_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun39176_ip = 39;
                        continue _fun39176
                    }
                case 29:
                    var1 = var2.hasPresent;
                    var0 = var1.bind(var2)();
                case 39:
                    return var0;
            }
        };
        var0.value = var6;
        var1[2] = var0;
        var0 = {};
        var6 = 'getOrCreate';
        var0.key = var6;
        var6 = function arg0() {
            _fun39177: for (var _fun39177_ip = 0;;) switch (_fun39177_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure2_slot0;
                    var0 = var0._channelMessages;
                    var0 = var0[var3];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun39177_ip = 66;
                        continue _fun39177
                    }
                case 26:
                    var2 = _closure2_slot0;
                    var1 = var2.prototype;
                    var4 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var4;
                    var5 = var3;
                    var1 = new var6[var2](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2 = var2._channelMessages;
                    var2[var3] = var1;
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var0.value = var6;
        var1[3] = var0;
        var0 = {};
        var6 = 'clear';
        var0.key = var6;
        var6 = function arg0() {
            var0 = _closure2_slot0;
            var1 = var0._channelMessages;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[4] = var0;
        var0 = {};
        var6 = 'clearCache';
        var0.key = var6;
        var6 = function arg0() {
            _fun39179: for (var _fun39179_ip = 0;;) switch (_fun39179_ip) {
                case 0:
                    var2 = this;
                    var0 = _closure2_slot0;
                    var1 = var0._channelMessages;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun39179_ip = 72;
                        continue _fun39179
                    }
                case 29:
                    var3 = var1._before;
                    var0 = var3.clear;
                    var0 = var0.bind(var3)();
                    var3 = var1._after;
                    var0 = var3.clear;
                    var0 = var0.bind(var3)();
                    var0 = var2.commit;
                    var0 = var0.bind(var2)(var1);
                case 72:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var6;
        var1[5] = var0;
        var0 = {};
        var6 = 'commit';
        var0.key = var6;
        var5 = function arg0() {
            var2 = arg0;
            var0 = _closure2_slot0;
            var1 = var0._channelMessages;
            var0 = var2.channelId;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = {};
    var3._channelMessages = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/ChannelMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = var2.flatMap;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0._array;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.flatMapChannelMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [153, 6, 7, 660, 3, 3972, 22, 4254, 21, 4255, 4256, 4257, 4258, 2]);