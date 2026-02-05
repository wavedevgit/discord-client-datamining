// modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72591: for (var _fun72591_ip = 0;;) switch (_fun72591_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.headerTitle;
                var10 = var1.hasHeaderBack;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
                var12 = var1.warningId;
                var11 = var1.warningType;
                var13 = var1.recipientId;
                var5 = var1.children;
                var14 = var1.onClose;
                var _closure2_slot1 = var14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var7)(var2, var1);
                var _closure2_slot2 = var1;
                var7 = _closure1_slot3;
                var3 = var7.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var14;
                var0 = function() { // Environment: var0
                    _fun72593: for (var _fun72593_ip = 0;;) switch (_fun72593_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun72593_ip = 23;
                                continue _fun72593
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                var1 = var0 != var1;
                if (!var1) {
                    _fun72591_ip = 271;
                    continue _fun72591
                }
            case 161:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 4;
                var1 = var14[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'showGradient': true,
                    'startExpanded': true
                };
                var7 = _closure1_slot1;
                var6 = 5;
                var6 = var14[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.recipientId = var13;
                var6.warningId = var12;
                var6.warningType = var11;
                var6.hasBackButton = var10;
                var6.title = var9;
                var6.channelId = var8;
                var6 = var3.bind(var4)(var7, var6);
                var1.header = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 271:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 566, 4933, 9089, 2]);