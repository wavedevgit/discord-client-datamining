// stores/ChannelPinsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun75720: for (var _fun75720_ip = 0;;) switch (_fun75720_ip) {
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
                _fun75720_ip = 76;
                continue _fun75720;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var1 = _closure1_slot16;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var9 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.forEach;
        var2 = _closure1_slot16;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var3 = var1.items;
            var2 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var3 = var0.message;
                var4 = var3.set;
                var2 = _closure1_slot13;
                var1 = var2.isBlockedForMessage;
                var2 = var1.bind(var2)(var3);
                var1 = 'blocked';
                var1 = var4.bind(var3)(var1, var2);
                var2 = var3.set;
                var1 = _closure1_slot13;
                var0 = var1.isIgnoredForMessage;
                var1 = var0.bind(var1)(var3);
                var0 = 'ignored';
                var0 = var2.bind(var3)(var0, var1);
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var2 = var1.items;
            var0 = var2.slice;
            var0 = var0.bind(var2)();
            var1.items = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
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
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = {};
    var3 = 'LOADING';
    var1.LOADING = var3;
    var3 = 'LOADED_HAS_MORE';
    var1.LOADED_HAS_MORE = var3;
    var3 = 'LOADING_FINISHED';
    var1.LOADED_FINISHED = var3;
    var3 = 'FAILED';
    var1.FAILED = var3;
    var _closure1_slot15 = var1;
    var3 = {};
    var _closure1_slot16 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun75728: for (var _fun75728_ip = 0;;) switch (_fun75728_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun75728_ip = 69;
                        continue _fun75728
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun75728_ip = 105;
                    continue _fun75728;
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
        var0 = function() {
            var8 = this;
            var7 = var8.waitFor;
            var15 = _closure1_slot9;
            var14 = _closure1_slot10;
            var13 = _closure1_slot11;
            var12 = _closure1_slot8;
            var11 = _closure1_slot12;
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var16 = var8;
            var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getPins';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot16;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'ChannelPinsStore';
    var8.displayName = var3;
    var3 = 16;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var11 = function() {
        var0 = {};
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_OPEN = var11;
    var11 = function arg0() {
        _fun75732: for (var _fun75732_ip = 0;;) switch (_fun75732_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = var0.reset;
                if (var0) {
                    _fun75732_ip = 60;
                    continue _fun75732
                }
            case 17:
                var1 = _closure1_slot16;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun75732_ip = 60;
                    continue _fun75732
                }
            case 34:
                var1 = _closure1_slot16;
                var1 = var1[var2];
                var0 = _closure1_slot15;
                var0 = var0.LOADING;
                var1.state = var0;
                _fun75732_ip = 150;
                continue _fun75732;
            case 60:
                var1 = _closure1_slot9;
                var0 = var1.getChannel;
                var6 = var0.bind(var1)(var2);
                var1 = null;
                var5 = var1 == var6;
                var0 = undefined;
                if (var5) {
                    _fun75732_ip = 98;
                    continue _fun75732
                }
            case 88:
                var5 = var6.getGuildId;
                var0 = var5.bind(var6)();
            case 98:
                var1 = var1 != var0;
                var3 = undefined;
                if (!var1) {
                    _fun75732_ip = 110;
                    continue _fun75732
                }
            case 107:
                var3 = var0;
            case 110:
                var1 = _closure1_slot16;
                var0 = {};
                var0.id = var2;
                var5 = new Array(0);
                var0.items = var5;
                var4 = _closure1_slot15;
                var4 = var4.LOADING;
                var0.state = var4;
                var0.guildId = var3;
                var1[var2] = var0;
            case 150:
                var0 = undefined;
                return var0;
        }
    };
    var3.LOAD_PINNED_MESSAGES = var11;
    var11 = function arg0() {
        _fun75733: for (var _fun75733_ip = 0;;) switch (_fun75733_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.pins;
                var0 = var0.hasMore;
                var1 = _closure1_slot16;
                var1 = var1[var3];
                var3 = null;
                if (!(var3 != var1)) {
                    _fun75733_ip = 121;
                    continue _fun75733
                }
            case 37:
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var5 = var0.pinned_at;
                    var3 = var0.message;
                    var0 = {};
                    var1 = global;
                    var4 = var1.Date;
                    var2 = var1.Date;
                    var1 = var2.parse;
                    var6 = var1.bind(var2)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var2;
                    var1 = new var7[var4](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.pinnedAt = var1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.createMessageRecord;
                    var1 = var1.bind(var2)(var3);
                    var0.message = var1;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var8 = var1.items;
                var3 = new Array(0);
                var7 = 0;
                var9 = var3;
                var7 = arraySpread(var9, var8, var7);
                var9 = var3;
                var8 = var5;
                var4 = arraySpread(var9, var8, var7);
                var1.items = var3;
                var2 = _closure1_slot15;
                if (var0) {
                    _fun75733_ip = 105;
                    continue _fun75733
                }
            case 97:
                var0 = var2.LOADED_FINISHED;
                _fun75733_ip = 111;
                continue _fun75733;
            case 105:
                var0 = var2.LOADED_HAS_MORE;
            case 111:
                var1.state = var0;
                var0 = undefined;
                return var0;
            case 121:
                var0 = false;
                return var0;
        }
    };
    var3.LOAD_PINNED_MESSAGES_SUCCESS = var11;
    var11 = function arg0() {
        _fun75735: for (var _fun75735_ip = 0;;) switch (_fun75735_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = _closure1_slot16;
                var1 = var1[var2];
                var2 = null;
                if (!(var2 != var1)) {
                    _fun75735_ip = 45;
                    continue _fun75735
                }
            case 25:
                var0 = _closure1_slot15;
                var0 = var0.FAILED;
                var1.state = var0;
                var0 = undefined;
                return var0;
            case 45:
                var0 = false;
                return var0;
        }
    };
    var3.LOAD_PINNED_MESSAGES_FAILURE = var11;
    var3.CHANNEL_DELETE = var10;
    var3.THREAD_DELETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 13;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = _closure1_slot16;
        var4 = var4.bind(var0)(var3);
        var3 = var4.filter;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.guildId;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1 !== var0;
            return var0;
        };
        var4 = var3.bind(var4)(var1);
        var3 = var4.keyBy;
        var1 = 'id';
        var3 = var3.bind(var4)(var1);
        var1 = var3.value;
        var1 = var1.bind(var3)();
        _closure1_slot16 = var1;
        return var0;
    };
    var3.GUILD_DELETE = var10;
    var10 = function arg0() {
        _fun75738: for (var _fun75738_ip = 0;;) switch (_fun75738_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var _closure2_slot0 = var2;
                var4 = var0.channelId;
                var0 = _closure1_slot16;
                var2 = var0[var4];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun75738_ip = 132;
                    continue _fun75738
                }
            case 39:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 13;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.remove;
                var5 = var2.items;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var1);
                var5 = var1.length;
                var1 = 0;
                var1 = var1 !== var5;
                if (!var1) {
                    _fun75738_ip = 129;
                    continue _fun75738
                }
            case 99:
                var6 = var2.items;
                var5 = var6.slice;
                var5 = var5.bind(var6)();
                var2.items = var5;
                var3 = _closure1_slot16;
                var3[var4] = var2;
                var1 = undefined;
            case 129:
                var0 = var1;
            case 132:
                return var0;
        }
    };
    var3.MESSAGE_DELETE = var10;
    var10 = function arg0() {
        _fun75740: for (var _fun75740_ip = 0;;) switch (_fun75740_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.ids;
                var _closure2_slot0 = var2;
                var2 = var1.channelId;
                var1 = _closure1_slot16;
                var1 = var1[var2];
                var2 = null;
                if (!(var2 != var1)) {
                    _fun75740_ip = 69;
                    continue _fun75740
                }
            case 37:
                var3 = var1.items;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.message;
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var1.items = var0;
                var0 = undefined;
                return var0;
            case 69:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_DELETE_BULK = var10;
    var10 = function arg0() {
        _fun75742: for (var _fun75742_ip = 0;;) switch (_fun75742_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.message;
                var0 = var0.id;
                var _closure2_slot0 = var0;
                var0 = var3.message;
                var7 = var0.channel_id;
                var5 = null;
                if (!(var5 != var7)) {
                    _fun75742_ip = 606;
                    continue _fun75742
                }
            case 38:
                var0 = _closure1_slot16;
                var0 = var0[var7];
                if (!(var5 != var0)) {
                    _fun75742_ip = 602;
                    continue _fun75742
                }
            case 56:
                var2 = var3.message;
                var2 = var2.author;
                if (!(var5 == var2)) {
                    _fun75742_ip = 244;
                    continue _fun75742
                }
            case 74:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var5 = var5[var2];
                var2 = undefined;
                var9 = var6.bind(var2)(var5);
                var8 = var9.findIndex;
                var6 = var0.items;
                var5 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var8 = var8.bind(var9)(var6, var5);
                var5 = -1;
                if (!(var5 !== var8)) {
                    _fun75742_ip = 242;
                    continue _fun75742
                }
            case 130:
                var5 = var0.items;
                var5 = var5[var8];
                var10 = var5.pinnedAt;
                var5 = var5.message;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 12;
                var6 = var11[var6];
                var11 = var9.bind(var2)(var6);
                var9 = var11.updateMessageRecord;
                var6 = var3.message;
                var9 = var9.bind(var11)(var5, var6);
                if (!(var9 !== var5)) {
                    _fun75742_ip = 598;
                    continue _fun75742
                }
            case 194:
                var6 = var0.items;
                var5 = var6.slice;
                var6 = var5.bind(var6)();
                var5 = {};
                var5.pinnedAt = var10;
                var5.message = var9;
                var6[var8] = var5;
                var5 = _closure1_slot16;
                var5 = var5[var7];
                var5.items = var6;
                _fun75742_ip = 598;
                continue _fun75742;
            case 242:
                return var2;
            case 244:
                var2 = var3.message;
                var2 = var2.pinned;
                if (var2) {
                    _fun75742_ip = 363;
                    continue _fun75742
                }
            case 258:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var5 = var5[var2];
                var2 = undefined;
                var7 = var6.bind(var2)(var5);
                var6 = var7.findIndex;
                var5 = var0.items;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var6.bind(var7)(var5, var2);
                var2 = -1;
                if (!(var2 !== var7)) {
                    _fun75742_ip = 359;
                    continue _fun75742
                }
            case 314:
                var5 = var0.items;
                var2 = var5.slice;
                var2 = var2.bind(var5)();
                var0.items = var2;
                var6 = var0.items;
                var5 = var6.splice;
                var2 = 1;
                var2 = var5.bind(var6)(var7, var2);
                _fun75742_ip = 598;
                continue _fun75742;
            case 359:
                var2 = false;
                return var2;
            case 363:
                var5 = var0.items;
                var2 = var5.slice;
                var2 = var2.bind(var5)();
                var0.items = var2;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var6 = undefined;
                var7 = var5.bind(var6)(var2);
                var5 = var7.findIndex;
                var2 = var0.items;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var7)(var2, var1);
                var1 = -1;
                if (!(var1 !== var5)) {
                    _fun75742_ip = 507;
                    continue _fun75742
                }
            case 439:
                var1 = var0.items;
                var2 = var1[var5];
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var8 = var7.bind(var6)(var1);
                var7 = var8.updateMessageRecord;
                var1 = var0.items;
                var1 = var1[var5];
                var5 = var1.message;
                var1 = var3.message;
                var1 = var7.bind(var8)(var5, var1);
                var2.message = var1;
                _fun75742_ip = 598;
                continue _fun75742;
            case 507:
                var2 = var0.items;
                var1 = var2.unshift;
                var0 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 12;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.createMessageRecord;
                var3 = var3.message;
                var3 = var4.bind(var5)(var3);
                var0.message = var3;
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var14 = var4;
                var3 = new var14[var3](var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var0.pinnedAt = var3;
                var0 = var1.bind(var2)(var0);
            case 598:
                var0 = undefined;
                return var0;
            case 602:
                var0 = false;
                return var0;
            case 606:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_UPDATE = var10;
    var3.RELATIONSHIP_ADD = var9;
    var3.RELATIONSHIP_REMOVE = var9;
    var3.RELATIONSHIP_UPDATE = var9;
    var4 = function arg0() {
        _fun75746: for (var _fun75746_ip = 0;;) switch (_fun75746_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.messageId;
                var _closure2_slot0 = var1;
                var1 = var0.channelId;
                var0 = _closure1_slot16;
                var1 = var0[var1];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun75746_ip = 181;
                    continue _fun75746
                }
            case 39:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 13;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.findIndex;
                var4 = var1.items;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.message;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var6)(var4, var2);
                var2 = -1;
                if (!(var2 !== var5)) {
                    _fun75746_ip = 177;
                    continue _fun75746
                }
            case 95:
                var4 = var1.items;
                var2 = var4.slice;
                var2 = var2.bind(var4)();
                var1.items = var2;
                var2 = var1.items;
                var2 = var2[var5];
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.handleExplicitMediaScanTimeoutForMessage;
                var1 = var1.items;
                var1 = var1[var5];
                var1 = var1.message;
                var1 = var3.bind(var4)(var1);
                var2.message = var1;
                return var0;
            case 177:
                var0 = false;
                return var0;
            case 181:
                var0 = false;
                return var0;
        }
    };
    var3.MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ChannelPinsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1676, 1372, 1672, 1410, 4213, 3059, 1613, 3931, 22, 4220, 566, 806, 2]);