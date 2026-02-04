// modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isAvatarDecorationRecord;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isNameplateRecord;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isProfileEffectRecord;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        var9 = arg0;
        var8 = arg1;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 5;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.useShopProductItems;
        var3 = var3.bind(var4)(var9);
        var7 = var3.firstProfileEffect;
        var _closure2_slot2 = var7;
        var6 = var3.firstAvatarDecoration;
        var _closure2_slot3 = var6;
        var5 = var3.firstNameplate;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() { // Environment: var1
            _fun75625: for (var _fun75625_ip = 0;;) switch (_fun75625_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.BUNDLE;
                    if (!(var4 === var2)) {
                        _fun75625_ip = 74;
                        continue _fun75625
                    }
                case 53:
                    var2 = _closure2_slot2;
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun75625_ip = 74;
                        continue _fun75625
                    }
                case 63:
                    var2 = _closure2_slot3;
                    if (!(var5 == var2)) {
                        _fun75625_ip = 246;
                        continue _fun75625
                    }
                case 74:
                    var6 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var4 = var2.items;
                    var2 = 1;
                    var4 = var6.bind(var3)(var4, var2);
                    var2 = 0;
                    var6 = var4[var2];
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var3)(var6);
                    if (var2) {
                        _fun75625_ip = 213;
                        continue _fun75625
                    }
                case 114:
                    var2 = _closure1_slot6;
                    var2 = var2.bind(var3)(var6);
                    if (var2) {
                        _fun75625_ip = 177;
                        continue _fun75625
                    }
                case 126:
                    var2 = _closure1_slot5;
                    var2 = var2.bind(var3)(var6);
                    if (!var2) {
                        _fun75625_ip = 345;
                        continue _fun75625
                    }
                case 141:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var2 = var7[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.setNewPendingNameplate;
                    var2 = var2.bind(var4)(var6);
                    _fun75625_ip = 345;
                    continue _fun75625;
                case 177:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var2 = var7[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.setNewPendingProfileEffect;
                    var2 = var2.bind(var4)(var6);
                    _fun75625_ip = 345;
                    continue _fun75625;
                case 213:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var2 = var7[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.setNewPendingAvatarDecoration;
                    var2 = var2.bind(var4)(var6);
                    _fun75625_ip = 345;
                    continue _fun75625;
                case 246:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 7;
                    var7 = var2[var4];
                    var9 = var6.bind(var3)(var7);
                    var8 = var9.setNewPendingAvatarDecoration;
                    var7 = _closure2_slot3;
                    var7 = var8.bind(var9)(var7);
                    var2 = var2[var4];
                    var7 = var6.bind(var3)(var2);
                    var6 = var7.setNewPendingProfileEffect;
                    var2 = _closure2_slot2;
                    var2 = var6.bind(var7)(var2);
                    var2 = _closure2_slot4;
                    if (!(var5 != var2)) {
                        _fun75625_ip = 345;
                        continue _fun75625
                    }
                case 313:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.setNewPendingNameplate;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                case 345:
                    var0 = function() { // Environment: var0
                        _fun75626: for (var _fun75626_ip = 0;;) switch (_fun75626_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                if (!var0) {
                                    _fun75626_ip = 86;
                                    continue _fun75626
                                }
                            case 10:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 7;
                                var4 = var3[var0];
                                var2 = undefined;
                                var5 = var1.bind(var2)(var4);
                                var4 = var5.setNewPendingAvatarDecoration;
                                var4 = var4.bind(var5)(var2);
                                var4 = var3[var0];
                                var5 = var1.bind(var2)(var4);
                                var4 = var5.setNewPendingProfileEffect;
                                var4 = var4.bind(var5)(var2);
                                var0 = var3[var0];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.setNewPendingNameplate;
                                var0 = var0.bind(var1)(var2);
                            case 86:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.usePreviewCollectibleProduct = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4601, 4603, 4604, 6886, 3493, 5585, 2]);