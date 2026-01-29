// modules/media_viewer/native/components/MediaAltText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var12 = 'rgba(0, 0, 0, 0.6)';
    var8.backgroundColor = var12;
    var3.transparentContainer = var8;
    var8 = {
        'alignSelf': 'flex-end',
        'height': 40,
        'width': 40,
        'borderRadius': 20,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.circleContainer = var8;
    var8 = {};
    var12 = 5;
    var12 = var5[var12];
    var13 = var11.bind(var0)(var12);
    var12 = var10.DISPLAY_SEMIBOLD;
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var16 = var10.WHITE;
    var10 = {};
    var10.uppercase = var9;
    var15 = 12;
    var18 = undefined;
    var17 = var12;
    var14 = var10;
    var16 = var18[var13](var17, var16, var15, var14, var13);
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var3.circleText = var8;
    var8 = {
        'marginLeft': 0,
        'marginRight': 12
    };
    var3.closeIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaAltText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MediaAltText, environment: var1
        _fun72915: for (var _fun72915_ip = 0;;) switch (_fun72915_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.description;
                var _closure2_slot0 = var9;
                var2 = var1.onFullViewToggle;
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.ViewImageDescriptions;
                var1 = var3.useSetting;
                var3 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var1 = true;
                var8 = var5.bind(var6)(var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var8 = var5.bind(var4)(var8, var1);
                var1 = 0;
                var1 = var8[var1];
                var5 = 1;
                var5 = var8[var5];
                var _closure2_slot2 = var5;
                var8 = var6.useCallback;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    _fun72916: for (var _fun72916_ip = 0;;) switch (_fun72916_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72916_ip = 26;
                                continue _fun72916
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                        case 26:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var8 = var8.bind(var6)(var2, var5);
                var _closure2_slot3 = var8;
                var5 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var8;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 9;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var4 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.description = var2;
                    var2 = _closure2_slot3;
                    var3.onClose = var2;
                    var2 = 'none';
                    var3.backdropKind = var2;
                    var2 = 'MediaViewerAltTextSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    var2 = _closure2_slot2;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var5.bind(var6)(var0, var2);
                var0 = null;
                if (!var3) {
                    _fun72915_ip = 387;
                    continue _fun72915
                }
            case 181:
                var0 = null;
                if (!var1) {
                    _fun72915_ip = 387;
                    continue _fun72915
                }
            case 189:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var9 = _closure1_slot8;
                var8 = var9.transparentContainer;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var9.circleContainer;
                var6[1] = var8;
                var1.style = var6;
                var1.onPress = var5;
                var5 = {
                    'top': 6,
                    'bottom': 6,
                    'left': 6,
                    'right': 6
                };
                var1.hitSlop = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var9.circleContainer;
                var5.style = var8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 11;
                var7 = var13[var7];
                var7 = var12.bind(var4)(var7);
                var8 = var7.LegacyText;
                var7 = {};
                var9 = var9.circleText;
                var7.style = var9;
                var9 = 12;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.Q5VqrN;
                var9 = var10.bind(var11)(var9);
                var7.children = var9;
                var7 = var3.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 387:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 483, 33, 4638, 671, 1348, 3237, 9138, 1307, 4832, 1234, 2]);