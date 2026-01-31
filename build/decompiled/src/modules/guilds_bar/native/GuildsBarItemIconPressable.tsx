// modules/guilds_bar/native/GuildsBarItemIconPressable.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Image;
    var10 = var3.Pressable;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var12 = var3.GUILD_ITEM_SIZE;
    var14 = var3.GUILD_ITEM_PADDING;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var7 = var5[var3];
    var9 = var11.bind(var0)(var7);
    var7 = var9.createAnimatedComponent;
    var7 = var7.bind(var9)(var10);
    var _closure1_slot4 = var7;
    var3 = var5[var3];
    var7 = var11.bind(var0)(var3);
    var3 = var7.createAnimatedComponent;
    var3 = var3.bind(var7)(var8);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var15;
    var3.iconBackground = var9;
    var9 = {};
    var9.marginTop = var14;
    var9.width = var12;
    var9.height = var12;
    var12 = var12 / var13;
    var9.borderRadius = var12;
    var12 = 'center';
    var9.justifyContent = var12;
    var9.alignItems = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var3.icon = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.color = var12;
    var3.iconColor = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9.color = var12;
    var3.iconColorActive = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_SUBTLE;
    var9.color = var10;
    var3.iconColorDesaturated = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = 'function GuildsBarItemIconPressableTsx1(){const{stylesClientThemeOverride,styles,withTiming,active,desaturated,timingStandard}=this.__closure;var _stylesClientThemeOve,_stylesClientThemeOve2;const defaultBackgroundColor=(_stylesClientThemeOve=(_stylesClientThemeOve2=stylesClientThemeOverride)===null||_stylesClientThemeOve2===void 0?void 0:_stylesClientThemeOve2.backgroundColor)!==null&&_stylesClientThemeOve!==void 0?_stylesClientThemeOve:styles.icon.backgroundColor;return{backgroundColor:withTiming(active.get()?desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color:defaultBackgroundColor,timingStandard)};}';
    var3.code = var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'function GuildsBarItemIconPressableTsx2(){const{withTiming,active,styles,desaturated,timingNone,timingStandard}=this.__closure;return{tintColor:withTiming(active.get()?styles.iconColor.color:desaturated?styles.iconColorDesaturated.color:styles.iconColorActive.color,active.get()?timingNone:timingStandard)};}';
    var3.code = var7;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GuildsBarItemIconPresable, environment: var1
        _fun101166: for (var _fun101166_ip = 0;;) switch (_fun101166_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.iconSource;
                var19 = var1.desaturated;
                var3 = undefined;
                if (!(var19 === var3)) {
                    _fun101166_ip = 25;
                    continue _fun101166
                }
            case 23:
                var19 = false;
            case 25:
                var _closure2_slot0 = var19;
                var9 = var1.onPress;
                var10 = var1.onLayout;
                var11 = var1.accessibilityLabel;
                var14 = var1.style;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot6;
                var12 = var1.bind(var3)();
                _closure2_slot1 = var12;
                var17 = _closure1_slot0;
                var18 = _closure1_slot1;
                var1 = 7;
                var1 = var18[var1];
                var5 = var17.bind(var3)(var1);
                var2 = var5.useClientThemesOverride;
                var1 = var12.iconBackground;
                var15 = var2.bind(var5)(var1);
                _closure2_slot2 = var15;
                var1 = 4;
                var2 = var18[var1];
                var6 = var17.bind(var3)(var2);
                var5 = var6.useSharedValue;
                var2 = false;
                var20 = var5.bind(var6)(var2);
                _closure2_slot3 = var20;
                var13 = _closure1_slot2;
                var6 = var13.useCallback;
                var5 = new Array(1);
                var5[0] = var20;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var13)(var2, var5);
                var6 = var13.useCallback;
                var5 = new Array(1);
                var5[0] = var20;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var13)(var2, var5);
                var2 = var18[var1];
                var13 = var17.bind(var3)(var2);
                var6 = var13.useAnimatedStyle;
                var2 = function() { // Original name: b, environment: var0
                    _fun101169: for (var _fun101169_ip = 0;;) switch (_fun101169_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            var1 = var0 == var1;
                            var6 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun101169_ip = 29;
                                continue _fun101169
                            }
                        case 20:
                            var1 = _closure2_slot2;
                            var4 = var1.backgroundColor;
                        case 29:
                            if (!(var0 == var4)) {
                                _fun101169_ip = 47;
                                continue _fun101169
                            }
                        case 33:
                            var0 = _closure2_slot1;
                            var0 = var0.icon;
                            var4 = var0.backgroundColor;
                        case 47:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 8;
                            var2 = var5[var2];
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.withTiming;
                            var8 = _closure2_slot3;
                            var5 = var8.get;
                            var5 = var5.bind(var8)();
                            if (!var5) {
                                _fun101169_ip = 131;
                                continue _fun101169
                            }
                        case 93:
                            var5 = _closure2_slot0;
                            var7 = _closure2_slot1;
                            if (var5) {
                                _fun101169_ip = 117;
                                continue _fun101169
                            }
                        case 104:
                            var5 = var7.iconColorActive;
                            var5 = var5.color;
                            _fun101169_ip = 128;
                            continue _fun101169;
                        case 117:
                            var7 = var7.iconColorDesaturated;
                            var5 = var7.color;
                        case 128:
                            var4 = var5;
                        case 131:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.timingStandard;
                            var1 = var2.bind(var3)(var4, var1);
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var22 = {};
                var22.stylesClientThemeOverride = var15;
                var22.styles = var12;
                var21 = 8;
                var16 = var18[var21];
                var16 = var17.bind(var3)(var16);
                var16 = var16.withTiming;
                var22.withTiming = var16;
                var22.active = var20;
                var22.desaturated = var19;
                var16 = 9;
                var23 = var18[var16];
                var23 = var17.bind(var3)(var23);
                var23 = var23.timingStandard;
                var22.timingStandard = var23;
                var2.__closure = var22;
                var22 = 3906808140956.0;
                var2.__workletHash = var22;
                var22 = _closure1_slot7;
                var2.__initData = var22;
                var13 = var6.bind(var13)(var2);
                var1 = var18[var1];
                var2 = var17.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: I, environment: var0
                    _fun101170: for (var _fun101170_ip = 0;;) switch (_fun101170_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 8;
                            var1 = var3[var1];
                            var7 = undefined;
                            var4 = var2.bind(var7)(var1);
                            var3 = var4.withTiming;
                            var6 = _closure2_slot3;
                            var2 = var6.get;
                            var2 = var2.bind(var6)();
                            if (var2) {
                                _fun101170_ip = 88;
                                continue _fun101170
                            }
                        case 51:
                            var2 = _closure2_slot0;
                            var6 = _closure2_slot1;
                            if (var2) {
                                _fun101170_ip = 75;
                                continue _fun101170
                            }
                        case 62:
                            var2 = var6.iconColorActive;
                            var2 = var2.color;
                            _fun101170_ip = 86;
                            continue _fun101170;
                        case 75:
                            var6 = var6.iconColorDesaturated;
                            var2 = var6.color;
                        case 86:
                            _fun101170_ip = 103;
                            continue _fun101170;
                        case 88:
                            var6 = _closure2_slot1;
                            var6 = var6.iconColor;
                            var2 = var6.color;
                        case 103:
                            var6 = _closure2_slot3;
                            var1 = var6.get;
                            var1 = var1.bind(var6)();
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 9;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            if (var1) {
                                _fun101170_ip = 147;
                                continue _fun101170
                            }
                        case 139:
                            var1 = var5.timingStandard;
                            _fun101170_ip = 153;
                            continue _fun101170;
                        case 147:
                            var1 = var5.timingNone;
                        case 153:
                            var1 = var3.bind(var4)(var2, var1);
                            var0.tintColor = var1;
                            return var0;
                    }
                };
                var6 = {};
                var21 = var18[var21];
                var21 = var17.bind(var3)(var21);
                var21 = var21.withTiming;
                var6.withTiming = var21;
                var6.active = var20;
                var6.styles = var12;
                var6.desaturated = var19;
                var19 = var18[var16];
                var19 = var17.bind(var3)(var19);
                var19 = var19.timingNone;
                var6.timingNone = var19;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.timingStandard;
                var6.timingStandard = var16;
                var0.__closure = var6;
                var6 = 10433579876797.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot8;
                var0.__initData = var6;
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot3;
                var1 = _closure1_slot4;
                var0 = {};
                var16 = var12.icon;
                var12 = new Array(4);
                var12[0] = var16;
                var12[1] = var15;
                var12[2] = var14;
                var12[3] = var13;
                var0.style = var12;
                var12 = 'button';
                var0.accessibilityRole = var12;
                var0.accessibilityLabel = var11;
                var0.onLayout = var10;
                var0.onPress = var9;
                var0.onPressIn = var8;
                var0.onPressOut = var5;
                var5 = _closure1_slot5;
                var4 = {};
                var4.source = var7;
                var4.style = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarItemIconPressable.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13087, 33, 3679, 1297, 671, 8857, 4056, 4844, 2]);