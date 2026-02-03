// design/components/Sheet/native/SimpleActionSheet.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun61859: for (var _fun61859_ip = 0;;) switch (_fun61859_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.hideActionSheet;
                var _closure2_slot0 = var1;
                var15 = var0.header;
                var10 = var0.options;
                var3 = _closure1_slot3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var11 = null;
                var6 = var11 != var15;
                if (!var6) {
                    _fun61859_ip = 210;
                    continue _fun61859
                }
            case 74:
                var9 = _closure1_slot2;
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 3;
                var4 = var12[var4];
                var4 = var7.bind(var2)(var4);
                var7 = var4.BottomSheetTitleHeader;
                var4 = {};
                var12 = var15.icon;
                var4.leading = var12;
                var12 = var15.title;
                var4.title = var12;
                var12 = var15.subtitle;
                var4.subtitle = var12;
                var12 = var15.onClose;
                var12 = var11 != var12;
                var11 = null;
                if (!var12) {
                    _fun61859_ip = 199;
                    continue _fun61859
                }
            case 151:
                var14 = _closure1_slot2;
                var13 = _closure1_slot0;
                var16 = _closure1_slot1;
                var12 = 4;
                var12 = var16[var12];
                var12 = var13.bind(var2)(var12);
                var13 = var12.ActionSheetCloseButton;
                var12 = {};
                var15 = var15.onClose;
                var12.onPress = var15;
                var11 = var14.bind(var2)(var13, var12);
            case 199:
                var4.trailing = var11;
                var6 = var9.bind(var2)(var7, var4);
            case 210:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot2;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 5;
                var5 = var9[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ActionSheetRow;
                var6 = var5.Group;
                var5 = {};
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun61860: for (var _fun61860_ip = 0;;) switch (_fun61860_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.label;
                            var11 = var1.icon;
                            var10 = var1.IconComponent;
                            var7 = var1.isDestructive;
                            var1 = var1.onPress;
                            var _closure3_slot0 = var1;
                            var4 = _closure1_slot2;
                            var8 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var6 = 5;
                            var1 = var12[var6];
                            var3 = undefined;
                            var1 = var8.bind(var3)(var1);
                            var2 = var1.ActionSheetRow;
                            var1 = {};
                            var9 = _closure1_slot2;
                            var6 = var12[var6];
                            var6 = var8.bind(var3)(var6);
                            var6 = var6.ActionSheetRow;
                            var8 = var6.Icon;
                            var6 = {};
                            var6.source = var11;
                            var6.IconComponent = var10;
                            var6 = var9.bind(var3)(var8, var6);
                            var1.icon = var6;
                            var6 = 'default';
                            if (!var7) {
                                _fun61860_ip = 128;
                                continue _fun61860
                            }
                        case 124:
                            var6 = 'danger';
                        case 128:
                            var1.variant = var6;
                            var1.label = var5;
                            var0 = function() {
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1.onPress = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var2)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot2 = var7;
    var3 = var3.jsxs;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/SimpleActionSheet.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.SimpleActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5203, 5206, 5204, 7727, 2]);