// modules/user_settings/native/design_system/UserSettingsDesignSystemTooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() {
        var4 = _closure1_slot3;
        var2 = var4.useState;
        var1 = false;
        var5 = var2.bind(var4)(var1);
        var4 = _closure1_slot2;
        var2 = undefined;
        var1 = 2;
        var4 = var4.bind(var2)(var5, var1);
        var1 = 0;
        var2 = var4[var1];
        var _closure2_slot0 = var2;
        var1 = 1;
        var1 = var4[var1];
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() { // Environment: var0
            _fun88804: for (var _fun88804_ip = 0;;) switch (_fun88804_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    if (var1) {
                        _fun88804_ip = 47;
                        continue _fun88804
                    }
                case 35:
                    var1 = var3.lockOrientationForiOS;
                    var1 = var1.bind(var3)();
                    _fun88804_ip = 67;
                    continue _fun88804;
                case 47:
                    var2 = var3.unlockOrientation;
                    var1 = {};
                    var4 = false;
                    var1.unlockAfterRotatingToPreviousLock = var4;
                    var1 = var2.bind(var3)(var1);
                case 67:
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.lockOrientationForiOS;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var4.bind(var5)(var3, var0);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = function() {
        _fun88807: for (var _fun88807_ip = 0;;) switch (_fun88807_ip) {
            case 0:
                var0 = _closure1_slot8;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot3;
                var0 = var1.useState;
                var8 = false;
                var1 = var0.bind(var1)(var8);
                var0 = _closure1_slot2;
                var7 = 2;
                var1 = var0.bind(var3)(var1, var7);
                var4 = 0;
                var0 = var1[var4];
                var _closure2_slot0 = var0;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var1 = _closure1_slot10;
                var6 = var1.bind(var3)();
                var1 = _closure1_slot2;
                var1 = var1.bind(var3)(var6, var7);
                var15 = var1[var4];
                var14 = var1[var2];
                var6 = _closure1_slot3;
                var1 = var6.useState;
                var6 = var1.bind(var6)(var8);
                var1 = _closure1_slot2;
                var1 = var1.bind(var3)(var6, var7);
                var10 = var1[var4];
                var _closure2_slot2 = var10;
                var9 = var1[var2];
                var17 = 'Show tooltip';
                if (!var0) {
                    _fun88807_ip = 142;
                    continue _fun88807
                }
            case 136:
                var17 = 'Hide tooltip';
            case 142:
                var4 = _closure1_slot3;
                var2 = var4.useRef;
                var1 = null;
                var19 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var0;
                var0 = function() { // Environment: var18
                    _fun88808: for (var _fun88808_ip = 0;;) switch (_fun88808_ip) {
                        case 0:
                            var0 = {};
                            var1 = 'NEW';
                            var0.label = var1;
                            var3 = _closure2_slot2;
                            var2 = 'top';
                            if (!var3) {
                                _fun88808_ip = 28;
                                continue _fun88808
                            }
                        case 24:
                            var2 = 'bottom';
                        case 28:
                            var0.position = var2;
                            var1 = _closure2_slot0;
                            var0.visible = var1;
                            var1 = function() {
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0.onPress = var1;
                            return var0;
                    }
                };
                var2 = var2.bind(var4)(var0, var1);
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 6;
                var0 = var11[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useTooltip;
                var0 = var0.bind(var1)(var19, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var8 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = {};
                var12 = var12.container;
                var4.style = var12;
                var16 = _closure1_slot5;
                var12 = 7;
                var12 = var11[var12];
                var12 = var7.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var12.ref = var19;
                var18 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var18;
                var18 = 'primary';
                var12.variant = var18;
                var12.text = var17;
                var17 = 'md';
                var12.size = var17;
                var12 = var16.bind(var3)(var13, var12);
                var4.children = var12;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var13 = _closure1_slot5;
                var6 = 8;
                var8 = var11[var6];
                var8 = var7.bind(var3)(var8);
                var12 = var8.TableSwitchRow;
                var8 = {};
                var16 = 'Unlock Orientation';
                var8.label = var16;
                var8.value = var15;
                var8.onValueChange = var14;
                var8 = var13.bind(var3)(var12, var8);
                var4[1] = var8;
                var8 = _closure1_slot5;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {};
                var11 = 'Enable Bottom Position';
                var6.label = var11;
                var6.value = var10;
                var6.onValueChange = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot9;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var5 = var7[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot2 = var1;
    var10 = 1;
    var5 = var7[var10];
    var1 = arg3;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var5 = var1.jsx;
    var _closure1_slot5 = var5;
    var5 = var1.Fragment;
    var _closure1_slot6 = var5;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var8 = var6.bind(var0)(var1);
    var5 = var8.createStyles;
    var1 = {};
    var9 = {
        'padding': 16,
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var1.container = var9;
    var9 = {};
    var9.flex = var10;
    var1.flex = var9;
    var1 = var5.bind(var8)(var1);
    var _closure1_slot8 = var1;
    var1 = function() {
        var3 = _closure1_slot7;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 9;
        var0 = var7[var4];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {};
        var8 = 'text-sm/normal';
        var0.variant = var8;
        var8 = {
            'padding': 16,
            'paddingTop': 16
        };
        var0.style = var8;
        var6 = _closure1_slot5;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-sm/bold',
            'children': ' <LayerScope/>'
        };
        var5 = var6.bind(var2)(var5, var4);
        var4 = ['Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing'];
        var4[1] = var5;
        var5 = ' on the surface you expect to see the tooltip.';
        var4[2] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var1;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemTooltip.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() {
        var0 = _closure1_slot8;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var0 = 10;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = var4.flex;
        var0.style = var4;
        var4 = true;
        var0.bottom = var4;
        var6 = _closure1_slot5;
        var4 = 11;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.LayerScope;
        var4 = {};
        var9 = _closure1_slot5;
        var8 = _closure1_slot11;
        var7 = {};
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var4;
    var2.useCanRotate = var3;
    var2.TooltipNote = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 7888, 7089, 4084, 5468, 3942, 4736, 5255, 2]);