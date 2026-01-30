// modules/threads/LazyLoadedThreadManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var3 = function(arg0) { // Original name: loadThread, environment: var6
        _fun49866: for (var _fun49866_ip = 0;;) switch (_fun49866_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun49866_ip = 502;
                    continue _fun49866
                }
            case 18:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var5.bind(var6)(var1);
                var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                if (!(var4 !== var1)) {
                    _fun49866_ip = 482;
                    continue _fun49866
                }
            case 56:
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)(var4);
                if (var1) {
                    _fun49866_ip = 462;
                    continue _fun49866
                }
            case 71:
                var5 = _closure1_slot6;
                var1 = var5.getChannel;
                var1 = var1.bind(var5)(var4);
                if (!(var3 == var1)) {
                    _fun49866_ip = 442;
                    continue _fun49866
                }
            case 92:
                var1 = function() { // Original name: initialize, environment: var0
                    _fun49867: for (var _fun49867_ip = 0;;) switch (_fun49867_ip) {
                        case 0:
                            var1 = _closure1_slot12;
                            if (var1) {
                                _fun49867_ip = 61;
                                continue _fun49867
                            }
                        case 10:
                            var1 = true;
                            _closure1_slot12 = var1;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.subscribe;
                            var1 = 'CONNECTION_OPEN';
                            var0 = function() { // Environment: var0
                                _fun49868: for (var _fun49868_ip = 0;;) switch (_fun49868_ip) {
                                    case 0:
                                        var1 = {};
                                        _closure1_slot11 = var1;
                                        var2 = _closure1_slot7;
                                        var1 = var2.getChannelId;
                                        var2 = var1.bind(var2)();
                                        var3 = _closure1_slot6;
                                        var1 = var3.getChannel;
                                        var4 = var1.bind(var3)(var2);
                                        var3 = null;
                                        var1 = var3 != var2;
                                        if (!var1) {
                                            _fun49868_ip = 50;
                                            continue _fun49868
                                        }
                                    case 46:
                                        var1 = var3 == var4;
                                    case 50:
                                        if (!var1) {
                                            _fun49868_ip = 64;
                                            continue _fun49868
                                        }
                                    case 53:
                                        var1 = _closure1_slot13;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                    case 64:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var1.bind(var6)();
                var5 = _closure1_slot3;
                var1 = var5.isConnected;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun49866_ip = 138;
                    continue _fun49866
                }
            case 118:
                var1 = global;
                var5 = var1.Promise;
                var1 = var5.resolve;
                var1 = var1.bind(var5)();
                return var1;
            case 138:
                var1 = _closure1_slot11;
                var1 = var1[var4];
                if (!(var3 == var1)) {
                    _fun49866_ip = 401;
                    continue _fun49866
                }
            case 153:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var10 = var5.bind(var6)(var3);
                var9 = var10.matchPath;
                var3 = global;
                var3 = var3.location;
                var8 = var3.pathname;
                var3 = {};
                var15 = _closure1_slot9;
                var14 = var15.CHANNEL;
                var11 = 9;
                var12 = var7[var11];
                var12 = var5.bind(var6)(var12);
                var13 = var12.RouteParam;
                var12 = var13.guildId;
                var13 = var12.bind(var13)();
                var11 = var7[var11];
                var11 = var5.bind(var6)(var11);
                var12 = var11.RouteParam;
                var11 = var12.channelId;
                var12 = var11.bind(var12)();
                var11 = ':messageId';
                var11 = var14.bind(var15)(var13, var12, var11);
                var3.path = var11;
                var11 = true;
                var3.exact = var11;
                var3 = var9.bind(var10)(var8, var3);
                var _closure2_slot1 = var3;
                var3 = 10;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var6 = var3.HTTP;
                var5 = var6.get;
                var3 = {};
                var8 = _closure1_slot8;
                var7 = var8.CHANNEL;
                var7 = var7.bind(var8)(var4);
                var3.url = var7;
                var7 = false;
                var3.rejectWithError = var7;
                var6 = var5.bind(var6)(var3);
                var5 = var6.then;
                var3 = function(arg0) { // Environment: var0
                    _fun49869: for (var _fun49869_ip = 0;;) switch (_fun49869_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.body;
                            var2 = _closure1_slot11;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = 'LOADED';
                            var0.type = var6;
                            var2[var1] = var0;
                            var2 = _closure1_slot5;
                            var1 = var2.has;
                            var0 = var5.type;
                            var0 = var1.bind(var2)(var0);
                            if (!var0) {
                                _fun49869_ip = 156;
                                continue _fun49869
                            }
                        case 58:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var6 = undefined;
                            var2 = var1.bind(var6)(var0);
                            var1 = var2.dispatch;
                            var0 = {};
                            var7 = 'THREAD_CREATE';
                            var0.type = var7;
                            var3 = _closure1_slot4;
                            var3 = var3.bind(var6)(var5);
                            var0.channel = var3;
                            var3 = _closure2_slot1;
                            var5 = null;
                            var7 = var5 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun49869_ip = 147;
                                continue _fun49869
                            }
                        case 123:
                            var4 = _closure2_slot1;
                            var4 = var4.params;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun49869_ip = 147;
                                continue _fun49869
                            }
                        case 142:
                            var3 = var4.messageId;
                        case 147:
                            var0.messageId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 156:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var3);
                var3 = var5.catch;
                var0 = function() { // Environment: var0
                    _fun49870: for (var _fun49870_ip = 0;;) switch (_fun49870_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var5 = _closure2_slot0;
                            var1 = {};
                            var3 = 'NOT_FOUND';
                            var1.type = var3;
                            var2[var5] = var1;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CHANNEL_DELETE';
                            var1.type = var4;
                            var4 = {};
                            var4.id = var5;
                            var5 = _closure2_slot1;
                            var7 = null;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun49870_ip = 110;
                                continue _fun49870
                            }
                        case 86:
                            var6 = _closure2_slot1;
                            var6 = var6.params;
                            var7 = var7 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun49870_ip = 110;
                                continue _fun49870
                            }
                        case 105:
                            var5 = var6.guildId;
                        case 110:
                            var4.guild_id = var5;
                            var4.parent_id = var0;
                            var1.channel = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0);
                var3 = _closure1_slot11;
                var2 = {};
                var5 = 'LOADING';
                var2.type = var5;
                var2.promise = var0;
                var3[var4] = var2;
                return var0;
            case 401:
                var2 = var1.type;
                var0 = 'LOADING';
                if (!(var0 !== var2)) {
                    _fun49866_ip = 434;
                    continue _fun49866
                }
            case 414:
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.resolve;
                var0 = var0.bind(var2)();
                _fun49866_ip = 440;
                continue _fun49866;
            case 434:
                var0 = var1.promise;
            case 440:
                return var0;
            case 442:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
            case 462:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
            case 482:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
            case 502:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.createChannelRecordFromServer;
    var _closure1_slot4 = var8;
    var1 = var1.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.Endpoints;
    var _closure1_slot8 = var7;
    var1 = var1.Routes;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.isStaticChannelRoute;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = false;
    var _closure1_slot12 = var1;
    var1 = {};
    var1.loadThread = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/LazyLoadedThreadManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3433, 1376, 1372, 1661, 660, 1379, 806, 5605, 3177, 3187, 507, 2]);