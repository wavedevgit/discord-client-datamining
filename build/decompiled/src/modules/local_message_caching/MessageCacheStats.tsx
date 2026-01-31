// modules/local_message_caching/MessageCacheStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: makeLogKey, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var7 = var0.concat;
        var17 = '';
        var16 = arg0;
        var4 = ':';
        var14 = arg1;
        var12 = arg2;
        var10 = arg3;
        var8 = arg4;
        var15 = var4;
        var13 = var4;
        var11 = var4;
        var9 = var4;
        var0 = var17[var7](var16, var15, var14, var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: MessageCacheStats, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.channelsFetchStarted = var3;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.channelsFetchedWithLocalMessages = var3;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.channelsFetchedNetwork = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.fetchLogs = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'recordChannelFetchStart';
        var0.key = var1;
        var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: value, environment: var4
            _fun40209: for (var _fun40209_ip = 0;;) switch (_fun40209_ip) {
                case 0:
                    var8 = arg0;
                    var9 = arg2;
                    var7 = arg3;
                    var5 = arg4;
                    var0 = this;
                    var2 = var0.channelsFetchStarted;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var8);
                    var4 = var0.fetchLogs;
                    var3 = var4.set;
                    var11 = _closure1_slot2;
                    var6 = null;
                    var0 = var6 != var9;
                    var10 = null;
                    if (!var0) {
                        _fun40209_ip = 63;
                        continue _fun40209
                    }
                case 60:
                    var10 = var9;
                case 63:
                    var0 = var6 != var7;
                    var2 = null;
                    if (!var0) {
                        _fun40209_ip = 75;
                        continue _fun40209
                    }
                case 72:
                    var2 = var7;
                case 75:
                    var0 = undefined;
                    var15 = arg1;
                    var17 = undefined;
                    var16 = var8;
                    var14 = var10;
                    var13 = var2;
                    var12 = var5;
                    var2 = var17[var11](var16, var15, var14, var13, var12, var11);
                    var1 = {};
                    var1.channelId = var8;
                    var10 = var6 != var9;
                    var8 = null;
                    if (!var10) {
                        _fun40209_ip = 116;
                        continue _fun40209
                    }
                case 113:
                    var8 = var9;
                case 116:
                    var1.before = var8;
                    var8 = var6 != var7;
                    var6 = null;
                    if (!var8) {
                        _fun40209_ip = 133;
                        continue _fun40209
                    }
                case 130:
                    var6 = var7;
                case 133:
                    var1.after = var6;
                    var1.limit = var5;
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var1.startTime = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'recordChannelFetchedLocal';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: value, environment: var4
            _fun40210: for (var _fun40210_ip = 0;;) switch (_fun40210_ip) {
                case 0:
                    var10 = arg0;
                    var1 = arg2;
                    var0 = arg3;
                    var6 = arg5;
                    var2 = this;
                    var4 = var2.channelsFetchedWithLocalMessages;
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var10);
                    var4 = var2.fetchLogs;
                    var2 = var4.get;
                    var9 = _closure1_slot2;
                    var3 = null;
                    var5 = var3 != var1;
                    var8 = null;
                    if (!var5) {
                        _fun40210_ip = 63;
                        continue _fun40210
                    }
                case 60:
                    var8 = var1;
                case 63:
                    var1 = var3 != var0;
                    var7 = null;
                    if (!var1) {
                        _fun40210_ip = 75;
                        continue _fun40210
                    }
                case 72:
                    var7 = var0;
                case 75:
                    var0 = undefined;
                    var14 = arg1;
                    var11 = arg4;
                    var16 = undefined;
                    var15 = var10;
                    var13 = var8;
                    var12 = var7;
                    var1 = var16[var9](var15, var14, var13, var12, var11, var10);
                    var2 = var2.bind(var4)(var1);
                    if (!(var3 != var2)) {
                        _fun40210_ip = 183;
                        continue _fun40210
                    }
                case 107:
                    var1 = {};
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var1.loadTime = var4;
                    var4 = var6.length;
                    var1.count = var4;
                    var5 = var6.at;
                    var4 = -1;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun40210_ip = 172;
                        continue _fun40210
                    }
                case 167:
                    var3 = var4.id;
                case 172:
                    var1.lastMessageId = var3;
                    var2.localMessageDetails = var1;
                case 183:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'recordChannelFetchedNetwork';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: value, environment: var4
            _fun40211: for (var _fun40211_ip = 0;;) switch (_fun40211_ip) {
                case 0:
                    var10 = arg0;
                    var1 = arg2;
                    var0 = arg3;
                    var6 = arg5;
                    var2 = this;
                    var4 = var2.channelsFetchedNetwork;
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var10);
                    var4 = var2.fetchLogs;
                    var2 = var4.get;
                    var9 = _closure1_slot2;
                    var3 = null;
                    var5 = var3 != var1;
                    var8 = null;
                    if (!var5) {
                        _fun40211_ip = 63;
                        continue _fun40211
                    }
                case 60:
                    var8 = var1;
                case 63:
                    var1 = var3 != var0;
                    var7 = null;
                    if (!var1) {
                        _fun40211_ip = 75;
                        continue _fun40211
                    }
                case 72:
                    var7 = var0;
                case 75:
                    var0 = undefined;
                    var14 = arg1;
                    var11 = arg4;
                    var16 = undefined;
                    var15 = var10;
                    var13 = var8;
                    var12 = var7;
                    var1 = var16[var9](var15, var14, var13, var12, var11, var10);
                    var2 = var2.bind(var4)(var1);
                    if (!(var3 != var2)) {
                        _fun40211_ip = 183;
                        continue _fun40211
                    }
                case 107:
                    var1 = {};
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var1.loadTime = var4;
                    var4 = var6.length;
                    var1.count = var4;
                    var5 = var6.at;
                    var4 = -1;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun40211_ip = 172;
                        continue _fun40211
                    }
                case 167:
                    var3 = var4.id;
                case 172:
                    var1.lastMessageId = var3;
                    var2.networkMessageDetails = var1;
                case 183:
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/local_message_caching/MessageCacheStats.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 'NativeAppStartup';
    var2.INITIAL_MESSAGE_FETCH_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);