// modules/reactions/native/MessageReactions.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = new Array(0);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reactions/native/MessageReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73517: for (var _fun73517_ip = 0;;) switch (_fun73517_ip) {
            case 0:
                var7 = arg0;
                var13 = var7.channelId;
                var12 = var7.messageId;
                var11 = var7.emoji;
                var1 = var7.reactions;
                var9 = var7.isSelectedBurst;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun73517_ip = 41;
                    continue _fun73517
                }
            case 39:
                var9 = false;
            case 41:
                var5 = {
                    'channelId': 0,
                    'messageId': 0,
                    'emoji': 0,
                    'reactions': 0,
                    'isSelectedBurst': 0
                };
                var2 = null;
                var18 = var5;
                var17 = null;
                var4 = silentSetPrototypeOf(var18, var17);
                var6 = 0;
                var18 = {};
                var17 = var7;
                var16 = var5;
                var8 = copyDataProperties(var18, var17, var16);
                var _closure2_slot0 = var3;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 4;
                var4 = var15[var7];
                var10 = var14.bind(var3)(var4);
                var4 = 5;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var4 = var4.MESSAGE_REACTIONS;
                var4 = var10.bind(var3)(var4);
                var4 = var4.analyticsLocations;
                var10 = function arg0, arg1() {
                    var7 = arg0;
                    var2 = arg1;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.useStateFromStores;
                    var3 = _closure1_slot4;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var2;
                    var2 = function() { // Environment: var0
                        _fun73519: for (var _fun73519_ip = 0;;) switch (_fun73519_ip) {
                            case 0:
                                var4 = _closure1_slot4;
                                var3 = var4.getMessage;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var1 = var3.bind(var4)(var2, var1);
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun73519_ip = 42;
                                    continue _fun73519
                                }
                            case 36:
                                var0 = _closure1_slot6;
                                _fun73519_ip = 48;
                                continue _fun73519;
                            case 42:
                                var0 = var1.reactions;
                            case 48:
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4, var2, var3);
                    var _closure3_slot2 = var4;
                    var3 = _closure1_slot3;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot2;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun73521: for (var _fun73521_ip = 0;;) switch (_fun73521_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.count_details;
                                    var1 = null;
                                    var3 = var1 == var2;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun73521_ip = 26;
                                        continue _fun73521
                                    }
                                case 20:
                                    var0 = var2.vote;
                                case 26:
                                    var0 = var1 == var0;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var10 = var10.bind(var3)(var13, var12);
                var14 = var10;
                if (!(var2 != var1)) {
                    _fun73517_ip = 171;
                    continue _fun73517
                }
            case 156:
                var2 = var1.length;
                var14 = var10;
                if (!(var2 > var6)) {
                    _fun73517_ip = 171;
                    continue _fun73517
                }
            case 168:
                var14 = var1;
            case 171:
                var10 = new Array(0);
                _closure2_slot0 = var10;
                var2 = var14.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun73522: for (var _fun73522_ip = 0;;) switch (_fun73522_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.burst_count;
                            var4 = 0;
                            if (!(var0 > var4)) {
                                _fun73522_ip = 25;
                                continue _fun73522
                            }
                        case 15:
                            var0 = var3.count;
                            if (!(!(var0 > var4))) {
                                _fun73522_ip = 56;
                                continue _fun73522
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var1 = var2.push;
                            var0 = {};
                            var8 = var0;
                            var7 = var3;
                            var5 = copyDataProperties(var8, var7);
                            var0 = var1.bind(var2)(var0);
                            _fun73522_ip = 129;
                            continue _fun73522;
                        case 56:
                            var5 = _closure2_slot0;
                            var2 = var5.push;
                            var1 = {};
                            var8 = var1;
                            var7 = var3;
                            var6 = copyDataProperties(var8, var7);
                            var6 = 'count';
                            var1[var6] = var4;
                            var1 = var2.bind(var5)(var1);
                            var2 = _closure2_slot0;
                            var1 = var2.push;
                            var0 = {};
                            var8 = var0;
                            var7 = var3;
                            var3 = copyDataProperties(var8, var7);
                            var3 = 'burst_count';
                            var0[var3] = var4;
                            var0 = var1.bind(var2)(var0);
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var14)(var1);
                var1 = var10.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun73523: for (var _fun73523_ip = 0;;) switch (_fun73523_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            var1 = var0.burst_count;
                            var3 = 0;
                            if (!(!(var1 > var3))) {
                                _fun73523_ip = 26;
                                continue _fun73523
                            }
                        case 18:
                            var1 = var0.count;
                            _fun73523_ip = 32;
                            continue _fun73523;
                        case 26:
                            var1 = var0.burst_count;
                        case 32:
                            var0 = var2.burst_count;
                            if (!(!(var0 > var3))) {
                                _fun73523_ip = 50;
                                continue _fun73523
                            }
                        case 42:
                            var0 = var2.count;
                            _fun73523_ip = 56;
                            continue _fun73523;
                        case 50:
                            var0 = var2.burst_count;
                        case 56:
                            var0 = var1 - var0;
                            return var0;
                    }
                };
                var0 = var1.bind(var10)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var4 = var10.length;
                if (!(!(var4 > var6))) {
                    _fun73517_ip = 296;
                    continue _fun73517
                }
            case 256:
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 6;
                var4 = var14[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.MessageReactionsEmpty;
                var4 = {};
                var4 = var7.bind(var3)(var6, var4);
                _fun73517_ip = 367;
                continue _fun73517;
            case 296:
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 6;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.MessageReactionsContent;
                var5 = {};
                var5.channelId = var13;
                var5.messageId = var12;
                var5.emoji = var11;
                var5.reactions = var10;
                var5.isSelectedBurst = var9;
                var18 = var5;
                var17 = var8;
                var8 = copyDataProperties(var18, var17);
                var4 = var7.bind(var3)(var6, var5);
            case 367:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4249, 33, 566, 5730, 5583, 9255, 2]);