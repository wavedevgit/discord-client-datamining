// modules/reactions/native/MessagePreviewReactions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = new Array(0);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/native/MessagePreviewReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73392: for (var _fun73392_ip = 0;;) switch (_fun73392_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channelId;
                var10 = var0.messageId;
                var9 = var0.emoji;
                var0 = function arg0() {
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useStateFromStores;
                    var1 = _closure1_slot3;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var0 = function() { // Environment: var0
                        _fun73394: for (var _fun73394_ip = 0;;) switch (_fun73394_ip) {
                            case 0:
                                var3 = _closure1_slot3;
                                var2 = var3.getMessage;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun73394_ip = 37;
                                    continue _fun73394
                                }
                            case 31:
                                var0 = _closure1_slot5;
                                _fun73394_ip = 43;
                                continue _fun73394;
                            case 37:
                                var0 = var1.reactions;
                            case 43:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var3 = undefined;
                var8 = var0.bind(var3)(var10);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var1 = var6[var0];
                var2 = var4.bind(var3)(var1);
                var1 = 5;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.MESSAGE_PREVIEW_REACTIONS;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = var8.length;
                var4 = 0;
                if (!(!(var6 > var4))) {
                    _fun73392_ip = 167;
                    continue _fun73392
                }
            case 127:
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 6;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.MessageReactionsEmpty;
                var4 = {};
                var4 = var7.bind(var3)(var6, var4);
                _fun73392_ip = 223;
                continue _fun73392;
            case 167:
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 6;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.MessageReactionsContent;
                var5 = {};
                var5.channelId = var11;
                var5.messageId = var10;
                var5.emoji = var9;
                var5.reactions = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 223:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8837, 33, 566, 5688, 5541, 9181, 2]);