// modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CONTROLS_DRAWER_HEADER_SIZE;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'justifyContent': 'center',
        'alignItems': 'center',
        'padding': 16
    };
    var9.height = var10;
    var3.titleWrapper = var9;
    var9 = {
        'borderRadius': null,
        'paddingHorizontal': 12,
        'paddingTop': 1,
        'paddingBottom': 2
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.titlePill = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var10;
    var3.titlePillBG = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}";
    var3.code = var7;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoicePanelControlsDrawerTitle, environment: var1
        _fun90939: for (var _fun90939_ip = 0;;) switch (_fun90939_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.title;
                var13 = var1.shown;
                var _closure2_slot0 = var13;
                var12 = var1.disablePill;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun90939_ip = 34;
                    continue _fun90939
                }
            case 32:
                var12 = false;
            case 34:
                var _closure2_slot1 = var12;
                var6 = var1.style;
                var7 = var1.blurStyle;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 6;
                var4 = var14[var1];
                var11 = var2.bind(var3)(var4);
                var5 = var11.useSharedValue;
                var4 = true;
                var11 = var5.bind(var11)(var4);
                _closure2_slot2 = var11;
                var4 = var9.titlePillBG;
                var5 = var4.backgroundColor;
                _closure2_slot3 = var5;
                var1 = var14[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: p, environment: var0
                    _fun90940: for (var _fun90940_ip = 0;;) switch (_fun90940_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun90940_ip = 30;
                                continue _fun90940
                            }
                        case 15:
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            _fun90940_ip = 43;
                            continue _fun90940;
                        case 30:
                            var4 = _closure2_slot0;
                            var1 = var4.get;
                            var3 = var1.bind(var4)();
                        case 43:
                            var4 = 'transparent';
                            var1 = var4;
                            if (!var3) {
                                _fun90940_ip = 67;
                                continue _fun90940
                            }
                        case 53:
                            var3 = _closure2_slot1;
                            var1 = var4;
                            if (var3) {
                                _fun90940_ip = 67;
                                continue _fun90940
                            }
                        case 63:
                            var1 = _closure2_slot3;
                        case 67:
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.shown = var13;
                var4._shown = var11;
                var4.disablePill = var12;
                var4.backgroundColor = var5;
                var0.__closure = var4;
                var4 = 14837285839887.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot7;
                var0.__initData = var4;
                var12 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var5 = _closure1_slot1;
                var0 = 7;
                var0 = var14[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var15 = var9.titleWrapper;
                var4 = new Array(2);
                var4[0] = var15;
                var4[1] = var6;
                var0.style = var4;
                var6 = _closure1_slot4;
                var4 = 8;
                var4 = var14[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var14 = null;
                if (!(var14 != var13)) {
                    _fun90939_ip = 273;
                    continue _fun90939
                }
            case 270:
                var11 = var13;
            case 273:
                var4.shown = var11;
                var11 = _closure1_slot3;
                var11 = var11.absoluteFillObject;
                var4.style = var11;
                var4.blurStyle = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 9;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var13 = var9.titlePill;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var5.style = var9;
                var9 = _closure1_slot0;
                var8 = 10;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11769, 33, 1297, 671, 3679, 6419, 11778, 6420, 3900, 2]);