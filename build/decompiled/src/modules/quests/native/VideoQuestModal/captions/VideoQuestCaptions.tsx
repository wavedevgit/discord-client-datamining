// modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx
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
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'bottom': null,
        'left': null,
        'right': null,
        'alignItems': 'center',
        'justifyContent': 'flex-end'
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_32;
    var8.bottom = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.left = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.right = var9;
    var9 = 'center';
    var3.container = var8;
    var8 = {};
    var12 = 5;
    var12 = var5[var12];
    var13 = var11.bind(var0)(var12);
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BLACK;
    var14 = var13.bind(var0)(var12);
    var13 = var14.alpha;
    var12 = 0.35;
    var13 = var13.bind(var14)(var12);
    var12 = var13.hex;
    var12 = var12.bind(var13)();
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.padding = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = 'hidden';
    var8.overflow = var12;
    var3.captionBox = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var8.color = var10;
    var8.textAlign = var9;
    var3.captionText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun83998: for (var _fun83998_ip = 0;;) switch (_fun83998_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.quest;
                var9 = var1.currentTime;
                var _closure2_slot0 = var9;
                var6 = var1.style;
                var8 = var1.visible;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun83998_ip = 40;
                    continue _fun83998
                }
            case 38:
                var8 = true;
            case 40:
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var4;
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useVideoQuestCaptions;
                var1 = var1.bind(var2)(var3);
                var11 = var1.captions;
                _closure2_slot2 = var11;
                var3 = var1.status;
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var11;
                var1[1] = var9;
                var1[2] = var8;
                var0 = function() { // Environment: var0
                    _fun83999: for (var _fun83999_ip = 0;;) switch (_fun83999_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun83999_ip = 72;
                                continue _fun83999
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!var2) {
                                _fun83999_ip = 72;
                                continue _fun83999
                            }
                        case 27:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.findActiveCaption;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 72:
                            return var0;
                    }
                };
                var9 = var2.bind(var5)(var0, var1);
                var2 = null;
                var1 = 'success';
                var0 = null;
                if (!(var1 === var3)) {
                    _fun83998_ip = 339;
                    continue _fun83998
                }
            case 158:
                var1 = var2 == var9;
                var0 = null;
                if (var1) {
                    _fun83998_ip = 339;
                    continue _fun83998
                }
            case 170:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {
                    'style': null,
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityRole': 'none',
                    'accessible': false
                };
                var8 = var10.container;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var6;
                var1.style = var5;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 8;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {
                    'style': null,
                    'blurTheme': 'dark',
                    'blurStyle': 'default',
                    'blurAmount': 0.2
                };
                var8 = var10.captionBox;
                var5.style = var8;
                var8 = _closure1_slot0;
                var7 = 9;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var11 = 'heading-sm/medium';
                var7.variant = var11;
                var10 = var10.captionText;
                var7.style = var10;
                var9 = var9.text;
                var7.children = var9;
                var7 = var3.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 339:
                return var0;
        }
    };
    var2.VideoQuestCaptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 669, 10735, 10737, 4073, 3941, 2]);