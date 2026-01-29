// modules/media_channel/native/useSetMediaPostThumbnail.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/native/useSetMediaPostThumbnail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useSetMediaPostThumbnail, environment: var1
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var3);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun75540: for (var _fun75540_ip = 0;;) switch (_fun75540_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUploads;
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot4;
                    var0 = var0.ChannelMessage;
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        _fun75541: for (var _fun75541_ip = 0;;) switch (_fun75541_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = null;
                                var0 = var3 == var1;
                                var4 = undefined;
                                var2 = undefined;
                                if (var0) {
                                    _fun75541_ip = 36;
                                    continue _fun75541
                                }
                            case 16:
                                var0 = var1.item;
                                var3 = var3 == var0;
                                var2 = undefined;
                                if (var3) {
                                    _fun75541_ip = 36;
                                    continue _fun75541
                                }
                            case 30:
                                var2 = var0.platform;
                            case 36:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 4;
                                var0 = var5[var0];
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.UploadPlatform;
                                var0 = var0.REACT_NATIVE;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun75541_ip = 90;
                                    continue _fun75541
                                }
                            case 78:
                                var2 = var1.isThumbnail;
                                var1 = true;
                                var0 = var1 === var2;
                            case 90:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun75540_ip = 67;
                        continue _fun75540
                    }
                case 64:
                    var0 = var1;
                case 67:
                    return var0;
            }
        };
        var6 = var6.bind(var7)(var3, var2);
        var _closure2_slot2 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun75542: for (var _fun75542_ip = 0;;) switch (_fun75542_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 == var0;
                    var0 = undefined;
                    var1 = undefined;
                    if (var3) {
                        _fun75542_ip = 29;
                        continue _fun75542
                    }
                case 20:
                    var3 = _closure2_slot1;
                    var1 = var3.id;
                case 29:
                    if (!(var4 != var1)) {
                        _fun75542_ip = 317;
                        continue _fun75542
                    }
                case 36:
                    var1 = _closure2_slot2;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun75542_ip = 82;
                        continue _fun75542
                    }
                case 47:
                    var3 = _closure2_slot2;
                    var5 = var3.id;
                    var3 = _closure2_slot1;
                    var6 = var4 == var3;
                    var3 = undefined;
                    if (var6) {
                        _fun75542_ip = 78;
                        continue _fun75542
                    }
                case 69:
                    var6 = _closure2_slot1;
                    var3 = var6.id;
                case 78:
                    var1 = var5 !== var3;
                case 82:
                    if (!var1) {
                        _fun75542_ip = 156;
                        continue _fun75542
                    }
                case 85:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var8 = var5.bind(var0)(var3);
                    var7 = var8.update;
                    var13 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var12 = var3.id;
                    var1 = _closure1_slot4;
                    var11 = var1.ChannelMessage;
                    var1 = {};
                    var9 = false;
                    var1.thumbnail = var9;
                    var14 = var8;
                    var10 = var1;
                    var1 = var14[var7](var13, var12, var11, var10, var9);
                case 156:
                    var1 = _closure2_slot1;
                    var3 = var4 == var1;
                    var1 = undefined;
                    if (var3) {
                        _fun75542_ip = 179;
                        continue _fun75542
                    }
                case 169:
                    var3 = _closure2_slot1;
                    var1 = var3.isThumbnail;
                case 179:
                    var8 = var4 != var1;
                    if (!var8) {
                        _fun75542_ip = 189;
                        continue _fun75542
                    }
                case 186:
                    var8 = var1;
                case 189:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var7 = var5.bind(var0)(var3);
                    var6 = var7.update;
                    var5 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var4 == var3;
                    var4 = undefined;
                    if (var3) {
                        _fun75542_ip = 244;
                        continue _fun75542
                    }
                case 235:
                    var2 = _closure2_slot1;
                    var4 = var2.id;
                case 244:
                    var2 = _closure1_slot4;
                    var11 = var2.ChannelMessage;
                    var2 = {};
                    var8 = !var8;
                    var2.thumbnail = var8;
                    var8 = false;
                    var2.spoiler = var8;
                    var14 = var7;
                    var13 = var5;
                    var12 = var4;
                    var10 = var2;
                    var2 = var14[var6](var13, var12, var11, var10, var9);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                case 317:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3954, 3953, 632, 3959, 7567, 3237, 2]);