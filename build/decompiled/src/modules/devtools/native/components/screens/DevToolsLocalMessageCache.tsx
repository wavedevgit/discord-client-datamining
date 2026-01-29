// modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: CacheLogEntry, environment: var1
        _fun85702: for (var _fun85702_ip = 0;;) switch (_fun85702_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.entry;
                var6 = global;
                var2 = var6.Date;
                var21 = var12.startTime;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var22 = var1;
                var0 = new var22[var2](var21, var20);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.toLocaleString;
                var1 = var0.bind(var1)();
                var0 = var6.HermesInternal;
                var0 = var0.concat;
                var11 = '';
                var9 = var0.bind(var11)(var1);
                var0 = var12.before;
                var10 = null;
                var1 = var10 != var0;
                var7 = 'null';
                var5 = var7;
                if (!var1) {
                    _fun85702_ip = 98;
                    continue _fun85702
                }
            case 95:
                var5 = var0;
            case 98:
                var0 = var12.after;
                var1 = var10 != var0;
                if (!var1) {
                    _fun85702_ip = 114;
                    continue _fun85702
                }
            case 111:
                var7 = var0;
            case 114:
                var17 = var12.limit;
                var0 = var6.HermesInternal;
                var3 = var0.concat;
                var22 = 'Before: ';
                var20 = ', After: ';
                var18 = ', Limit: ';
                var21 = var5;
                var19 = var7;
                var8 = var22[var3](var21, var20, var19, var18, var17, var16);
                var0 = var12.localMessageDetails;
                var0 = var10 != var0;
                var7 = 'Cache Missed';
                if (!var0) {
                    _fun85702_ip = 242;
                    continue _fun85702
                }
            case 177:
                var0 = var12.localMessageDetails;
                var21 = var0.count;
                var0 = var12.localMessageDetails;
                var1 = var0.loadTime;
                var0 = var12.startTime;
                var19 = var1 - var0;
                var0 = var6.HermesInternal;
                var3 = var0.concat;
                var22 = 'Cache Hit: ';
                var20 = ' messages in ';
                var18 = 'ms';
                var7 = var22[var3](var21, var20, var19, var18, var17);
            case 242:
                var0 = var12.networkMessageDetails;
                var0 = var10 != var0;
                var5 = 'No Network Fetch';
                if (!var0) {
                    _fun85702_ip = 326;
                    continue _fun85702
                }
            case 261:
                var0 = var12.networkMessageDetails;
                var21 = var0.count;
                var0 = var12.networkMessageDetails;
                var1 = var0.loadTime;
                var0 = var12.startTime;
                var19 = var1 - var0;
                var0 = var6.HermesInternal;
                var3 = var0.concat;
                var22 = 'Network: ';
                var20 = ' messages in ';
                var18 = 'ms';
                var5 = var22[var3](var21, var20, var19, var18, var17);
            case 326:
                var0 = var12.localMessageDetails;
                var0 = var10 == var0;
                var4 = 'Comparision unavailable (no local cache data)';
                if (var0) {
                    _fun85702_ip = 551;
                    continue _fun85702
                }
            case 348:
                var0 = var12.networkMessageDetails;
                var1 = var10 == var0;
                var0 = 'Comparision unavailable (no network data)';
                if (var1) {
                    _fun85702_ip = 548;
                    continue _fun85702
                }
            case 370:
                var1 = var12.localMessageDetails;
                var2 = var1.count;
                var1 = var12.networkMessageDetails;
                var1 = var1.count;
                if (!(var2 === var1)) {
                    _fun85702_ip = 488;
                    continue _fun85702
                }
            case 398:
                var1 = var12.localMessageDetails;
                var3 = var1.lastMessageId;
                var1 = var12.networkMessageDetails;
                var2 = var1.lastMessageId;
                var1 = 'Cache was up-to-date';
                if (!(var3 !== var2)) {
                    _fun85702_ip = 486;
                    continue _fun85702
                }
            case 432:
                var2 = var12.localMessageDetails;
                var15 = var2.lastMessageId;
                var2 = var12.networkMessageDetails;
                var14 = var2.lastMessageId;
                var2 = var6.HermesInternal;
                var13 = var2.concat;
                var3 = 'Cache last message ID ';
                var2 = ' differs from network last message ID ';
                var1 = var13.bind(var3)(var15, var2, var14);
            case 486:
                _fun85702_ip = 545;
                continue _fun85702;
            case 488:
                var2 = var12.localMessageDetails;
                var21 = var2.count;
                var2 = var12.networkMessageDetails;
                var19 = var2.count;
                var2 = var6.HermesInternal;
                var14 = var2.concat;
                var22 = 'Cache had ';
                var20 = ' messages vs ';
                var18 = ' from network';
                var1 = var22[var14](var21, var20, var19, var18, var17);
            case 545:
                var0 = var1;
            case 548:
                var4 = var0;
            case 551:
                var3 = _closure1_slot5;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var14 = _closure1_slot4;
                var13 = var14.getChannel;
                var12 = var12.channelId;
                var12 = var13.bind(var14)(var12);
                var13 = var10 == var12;
                var10 = undefined;
                if (var13) {
                    _fun85702_ip = 621;
                    continue _fun85702
                }
            case 616:
                var10 = var12.name;
            case 621:
                var6 = var6.HermesInternal;
                var6 = var6.concat;
                var6 = var6.bind(var11)(var10);
                var0.label = var6;
                var6 = new Array(5);
                var6[0] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var6[3] = var5;
                var6[4] = var4;
                var5 = var6.join;
                var4 = '\n';
                var4 = var5.bind(var6)(var4);
                var0.subLabel = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.padding = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: DevToolsLocalMessageCache, environment: var1
        var0 = _closure1_slot7;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var4.container;
        var0.style = var5;
        var4 = var4.contentContainer;
        var0.contentContainerStyle = var4;
        var6 = _closure1_slot6;
        var9 = _closure1_slot0;
        var15 = _closure1_slot2;
        var4 = 6;
        var4 = var15[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var11 = 8;
        var4.spacing = var11;
        var8 = 7;
        var7 = var15[var8];
        var7 = var9.bind(var3)(var7);
        var12 = var7.TableRowGroup;
        var7 = {};
        var13 = 'Local Message Cache Stats';
        var7.title = var13;
        var18 = _closure1_slot5;
        var16 = 5;
        var13 = var15[var16];
        var13 = var9.bind(var3)(var13);
        var17 = var13.TableRow;
        var13 = {};
        var14 = 'Channels Fetched';
        var13.label = var14;
        var14 = _closure1_slot1;
        var19 = var15[var11];
        var19 = var14.bind(var3)(var19);
        var19 = var19.channelsFetchStarted;
        var19 = var19.size;
        var13.subLabel = var19;
        var17 = var18.bind(var3)(var17, var13);
        var13 = new Array(4);
        var13[0] = var17;
        var19 = _closure1_slot5;
        var17 = var15[var16];
        var17 = var9.bind(var3)(var17);
        var18 = var17.TableRow;
        var17 = {};
        var20 = 'Cache Hits';
        var17.label = var20;
        var20 = var15[var11];
        var20 = var14.bind(var3)(var20);
        var20 = var20.channelsFetchedWithLocalMessages;
        var20 = var20.size;
        var17.subLabel = var20;
        var17 = var19.bind(var3)(var18, var17);
        var13[1] = var17;
        var19 = _closure1_slot5;
        var17 = var15[var16];
        var17 = var9.bind(var3)(var17);
        var18 = var17.TableRow;
        var17 = {};
        var20 = 'Cache Misses';
        var17.label = var20;
        var20 = var15[var11];
        var20 = var14.bind(var3)(var20);
        var20 = var20.channelsFetchedNetwork;
        var21 = var20.size;
        var20 = var15[var11];
        var20 = var14.bind(var3)(var20);
        var20 = var20.channelsFetchedWithLocalMessages;
        var20 = var20.size;
        var20 = var21 - var20;
        var17.subLabel = var20;
        var17 = var19.bind(var3)(var18, var17);
        var13[2] = var17;
        var18 = _closure1_slot5;
        var16 = var15[var16];
        var16 = var9.bind(var3)(var16);
        var17 = var16.TableRow;
        var16 = {};
        var19 = 'Incomplete Fetches';
        var16.label = var19;
        var19 = var15[var11];
        var19 = var14.bind(var3)(var19);
        var19 = var19.channelsFetchStarted;
        var20 = var19.size;
        var19 = var15[var11];
        var19 = var14.bind(var3)(var19);
        var19 = var19.channelsFetchedNetwork;
        var19 = var19.size;
        var19 = var20 - var19;
        var16.subLabel = var19;
        var16 = var18.bind(var3)(var17, var16);
        var13[3] = var16;
        var7.children = var13;
        var12 = var6.bind(var3)(var12, var7);
        var7 = new Array(3);
        var7[0] = var12;
        var16 = _closure1_slot5;
        var12 = 9;
        var12 = var15[var12];
        var12 = var9.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-sm/normal',
            'color': 'text-muted',
            'children': 'Cumulative since app launch. Does not update dynamically.'
        };
        var12 = var16.bind(var3)(var13, var12);
        var7[1] = var12;
        var10 = _closure1_slot5;
        var8 = var15[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowGroup;
        var8 = {};
        var12 = 'Fetch Log (Reversed)';
        var8.title = var12;
        var12 = global;
        var13 = var12.Array;
        var12 = var13.from;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var14 = var11.fetchLogs;
        var11 = var14.values;
        var11 = var11.bind(var14)();
        var12 = var12.bind(var13)(var11);
        var11 = var12.reverse;
        var13 = var11.bind(var12)();
        var12 = var13.map;
        var11 = function(arg0, arg1) { // Environment: var11
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var2 = {};
            var0 = arg0;
            var2.entry = var0;
            var1 = undefined;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var11 = var12.bind(var13)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1372, 33, 1297, 671, 4854, 4033, 5320, 4337, 3895, 2]);