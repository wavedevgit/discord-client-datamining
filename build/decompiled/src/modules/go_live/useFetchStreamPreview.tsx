// modules/go_live/useFetchStreamPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BasicPermissions;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/useFetchStreamPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useFetchStreamPreview, environment: var1
        _fun69277: for (var _fun69277_ip = 0;;) switch (_fun69277_ip) {
            case 0:
                var10 = arg0;
                var11 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var11;
                var _closure2_slot2 = var9;
                var0 = null;
                var4 = var0 == var11;
                if (var4) {
                    _fun69277_ip = 36;
                    continue _fun69277
                }
            case 32:
                var4 = var0 == var9;
            case 36:
                var _closure2_slot3 = var4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 6;
                var0 = var8[var1];
                var2 = undefined;
                var13 = var3.bind(var2)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var12.bind(var13)(var7, var0);
                var _closure2_slot4 = var0;
                var0 = var8[var1];
                var13 = var3.bind(var2)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var5
                    _fun69279: for (var _fun69279_ip = 0;;) switch (_fun69279_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun69279_ip = 49;
                                continue _fun69279
                            }
                        case 16:
                            var4 = _closure1_slot5;
                            var3 = var4.canBasicChannel;
                            var2 = _closure1_slot7;
                            var2 = var2.CONNECT;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var0 = var12.bind(var13)(var7, var0);
                var7 = var8[var1];
                var14 = var3.bind(var2)(var7);
                var13 = var14.useStateFromStores;
                var7 = _closure1_slot6;
                var12 = new Array(1);
                var12[0] = var7;
                var7 = function() { // Environment: var5
                    var1 = _closure1_slot6;
                    var0 = var1.getVoiceChannelId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var7 = var13.bind(var14)(var12, var7);
                var1 = var8[var1];
                var12 = var3.bind(var2)(var1);
                var8 = var12.useStateFromStoresObject;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var5
                    _fun69281: for (var _fun69281_ip = 0;;) switch (_fun69281_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot3;
                            var1 = !var3;
                            if (var3) {
                                _fun69281_ip = 47;
                                continue _fun69281
                            }
                        case 15:
                            var7 = _closure1_slot3;
                            var6 = var7.shouldFetchPreview;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var3 = _closure2_slot2;
                            var1 = var6.bind(var7)(var5, var4, var3);
                        case 47:
                            var0.shouldFetchPreview = var1;
                            var3 = _closure2_slot3;
                            var1 = null;
                            if (var3) {
                                _fun69281_ip = 93;
                                continue _fun69281
                            }
                        case 61:
                            var7 = _closure1_slot3;
                            var6 = var7.getPreviewURL;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var3 = _closure2_slot2;
                            var1 = var6.bind(var7)(var5, var4, var3);
                        case 93:
                            var0.previewUrl = var1;
                            var3 = _closure2_slot3;
                            var1 = !var3;
                            if (var3) {
                                _fun69281_ip = 142;
                                continue _fun69281
                            }
                        case 108:
                            var6 = _closure1_slot3;
                            var5 = var6.getIsPreviewLoading;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var1 = var5.bind(var6)(var4, var3, var2);
                        case 142:
                            var0.isLoading = var1;
                            return var0;
                    }
                };
                var1 = var8.bind(var12)(var3, var1);
                var12 = var1.shouldFetchPreview;
                var _closure2_slot5 = var12;
                var3 = var1.previewUrl;
                var1 = var1.isLoading;
                if (var0) {
                    _fun69277_ip = 245;
                    continue _fun69277
                }
            case 242:
                var0 = var7;
            case 245:
                var _closure2_slot6 = var0;
                var8 = _closure1_slot2;
                var7 = var8.useEffect;
                var6 = new Array(6);
                var6[0] = var12;
                var6[1] = var11;
                var6[2] = var10;
                var6[3] = var9;
                var6[4] = var4;
                var6[5] = var0;
                var5 = function() { // Environment: var5
                    _fun69282: for (var _fun69282_ip = 0;;) switch (_fun69282_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun69282_ip = 17;
                                continue _fun69282
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = !var2;
                        case 17:
                            if (!var1) {
                                _fun69282_ip = 24;
                                continue _fun69282
                            }
                        case 20:
                            var1 = _closure2_slot6;
                        case 24:
                            if (!var1) {
                                _fun69282_ip = 77;
                                continue _fun69282
                            }
                        case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchStreamPreview;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                if (var4) {
                    _fun69277_ip = 319;
                    continue _fun69277
                }
            case 302:
                if (!var0) {
                    _fun69277_ip = 319;
                    continue _fun69277
                }
            case 305:
                var0 = {};
                var0.previewUrl = var3;
                var0.isLoading = var1;
                _fun69277_ip = 336;
                continue _fun69277;
            case 319:
                var1 = {};
                var1.previewUrl = var2;
                var2 = false;
                var1.isLoading = var2;
                var0 = var1;
            case 336:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7976, 1372, 3050, 1661, 483, 566, 7975, 2]);