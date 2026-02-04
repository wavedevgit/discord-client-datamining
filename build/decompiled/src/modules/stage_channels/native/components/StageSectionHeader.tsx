// modules/stage_channels/native/components/StageSectionHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot5 = var6;
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 4;
    var8 = {
        'height': 48,
        'paddingHorizontal': 4
    };
    var3.section = var8;
    var8 = {};
    var11 = 12;
    var8.marginLeft = var11;
    var3.children = var8;
    var8 = {};
    var11 = 'auto';
    var8.marginLeft = var11;
    var3.collapseButton = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var8.tintColor = var11;
    var3.collapseIcon = var8;
    var8 = {
        'height': 48,
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderBottomWidth': 1,
        'borderBottomColor': null,
        'paddingHorizontal': 4
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderBottomColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.audience = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = "function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}";
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageSectionHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69459: for (var _fun69459_ip = 0;;) switch (_fun69459_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.label;
                var10 = var1.count;
                var5 = var1.collapsed;
                var _closure2_slot0 = var5;
                var7 = var1.onToggleCollapse;
                var16 = var1.children;
                var1 = _closure1_slot7;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 5;
                var1 = var9[var11];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun69460: for (var _fun69460_ip = 0;;) switch (_fun69460_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.withTiming;
                            var1 = _closure2_slot0;
                            var3 = '0deg';
                            if (!var1) {
                                _fun69460_ip = 56;
                                continue _fun69460
                            }
                        case 50:
                            var3 = '180deg';
                        case 56:
                            var1 = {};
                            var6 = 150;
                            var1.duration = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.rotate = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var4 = {};
                var6 = 6;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.withTiming;
                var4.withTiming = var6;
                var4.collapsed = var5;
                var0.__closure = var4;
                var4 = 13855092771739.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot8;
                var0.__initData = var4;
                var13 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var15.section;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var17 = var15.audience;
                var4.style = var17;
                var4.onPress = var7;
                var7 = 7;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/semibold',
                    'color': 'always-white',
                    'accessibilityRole': 'header'
                };
                var9 = new Array(3);
                var9[0] = var14;
                var14 = ' — ';
                var9[1] = var14;
                var9[2] = var10;
                var7.children = var9;
                var8 = var6.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = null;
                var8 = var8 != var16;
                if (!var8) {
                    _fun69459_ip = 300;
                    continue _fun69459
                }
            case 271:
                var14 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = {};
                var17 = var15.children;
                var9.style = var17;
                var9.children = var16;
                var8 = var14.bind(var3)(var10, var9);
            case 300:
                var7[1] = var8;
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = var15.collapseButton;
                var8.style = var14;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = var18[var11];
                var11 = var17.bind(var3)(var11);
                var12 = var11.View;
                var11 = {};
                var11.style = var13;
                var13 = 8;
                var13 = var18[var13];
                var14 = var17.bind(var3)(var13);
                var13 = {};
                var16 = 9;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var13.source = var16;
                var15 = var15.collapseIcon;
                var13.style = var15;
                var13 = var10.bind(var3)(var14, var13);
                var11.children = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3720, 4097, 3941, 4086, 8676, 2]);