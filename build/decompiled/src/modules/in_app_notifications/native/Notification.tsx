// modules/in_app_notifications/native/Notification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var11 = var1.percent;
        var _closure2_slot0 = var11;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = 0;
        var6 = var2.bind(var3)(var1);
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = 2;
        var2 = var4.bind(var3)(var6, var2);
        var10 = var2[var1];
        var _closure2_slot1 = var10;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot2 = var1;
        var1 = _closure1_slot10;
        var8 = var1.bind(var3)();
        var6 = _closure1_slot4;
        var4 = var6.useCallback;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.width;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = new Array(0);
        var6 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 8;
        var1 = var7[var4];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun69940: for (var _fun69940_ip = 0;;) switch (_fun69940_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = 'number';
                    var0 = typeof var0;
                    if (!(var1 !== var0)) {
                        _fun69940_ip = 33;
                        continue _fun69940
                    }
                case 18:
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    _fun69940_ip = 37;
                    continue _fun69940;
                case 33:
                    var1 = _closure2_slot0;
                case 37:
                    var0 = 100;
                    var1 = var1 / var0;
                    var0 = {};
                    var2 = {};
                    var3 = _closure2_slot1;
                    var1 = var3 * var1;
                    var1 = var1 - var3;
                    var2.translateX = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var9 = {};
        var9.percent = var11;
        var9.width = var10;
        var0.__closure = var9;
        var9 = 7737176392305.0;
        var0.__workletHash = var9;
        var9 = _closure1_slot11;
        var0.__initData = var9;
        var9 = var1.bind(var2)(var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var0.onLayout = var6;
        var6 = var8.progressContainer;
        var0.style = var6;
        var6 = _closure1_slot7;
        var5 = _closure1_slot1;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var7 = new Array(2);
        var7[0] = var9;
        var8 = var8.progress;
        var7[1] = var8;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 5;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.shadows;
    var16 = var13.SHADOW_HIGH;
    var17 = var8;
    var13 = copyDataProperties(var17, var16);
    var3.shadow = var8;
    var8 = {
        'maxWidth': 480,
        'width': '100%',
        'backgroundColor': null,
        'alignSelf': 'center',
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'overflow': 'hidden'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_ALERT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var13;
    var13 = 'center';
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var8.borderRadius = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.borderColor = var14;
    var3.container = var8;
    var8 = {};
    var8.flex = var12;
    var3.body = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginRight = var12;
    var3.iconContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.YELLOW_300;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingVertical = var12;
    var12 = 'row';
    var8.flexDirection = var12;
    var8.alignItems = var13;
    var3.alertContainer = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.padding = var13;
    var8.flexDirection = var12;
    var3.contentContainer = var8;
    var8 = {
        'flex': 1,
        'marginBottom': 2
    };
    var3.label = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.labelContainer = var8;
    var8 = {
        'width': 12,
        'height': 12
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.marginRight = var12;
    var3.warningIcon = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderTopRightRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderBottomRightRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var8.backgroundColor = var10;
    var8.height = var9;
    var3.progress = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 4294967295,
        'width': '100%'
    };
    var3.progressContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = "function NotificationTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}";
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/Notification.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun69941: for (var _fun69941_ip = 0;;) switch (_fun69941_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.icon;
                var22 = var0.label;
                var24 = var0.labelStyle;
                var16 = var0.textChildren;
                var12 = var0.children;
                var19 = var0.alertLabel;
                var18 = var0.accessoryLabelNode;
                var0 = _closure1_slot10;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var14 = null;
                var4 = var14 != var19;
                var5 = null;
                if (!var4) {
                    _fun69941_ip = 232;
                    continue _fun69941
                }
            case 79:
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var4 = {};
                var8 = var23.alertContainer;
                var4.style = var8;
                var15 = _closure1_slot7;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 6;
                var8 = var17[var8];
                var8 = var10.bind(var3)(var8);
                var9 = var8.CircleErrorIcon;
                var8 = {};
                var20 = var23.warningIcon;
                var8.style = var20;
                var20 = 'black';
                var8.color = var20;
                var9 = var15.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var15 = _closure1_slot7;
                var9 = 7;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/bold',
                    'color': 'black'
                };
                var17 = var19.toUpperCase;
                var17 = var17.bind(var19)();
                var9.children = var17;
                var9 = var15.bind(var3)(var10, var9);
                var8[1] = var9;
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 232:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var23.contentContainer;
                var5.style = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot5;
                var8 = {};
                var15 = var23.iconContainer;
                var8.style = var15;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var10 = _closure1_slot5;
                var9 = {};
                var11 = var23.body;
                var9.style = var11;
                var15 = _closure1_slot5;
                var11 = {};
                var17 = var23.labelContainer;
                var11.style = var17;
                var19 = var14 != var18;
                var17 = null;
                if (!var19) {
                    _fun69941_ip = 341;
                    continue _fun69941
                }
            case 338:
                var17 = var18;
            case 341:
                var18 = new Array(2);
                var18[0] = var17;
                var21 = _closure1_slot7;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var17 = 7;
                var19 = var19[var17];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var25 = var23.label;
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var24;
                var19.style = var23;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[1] = var19;
                var11.children = var18;
                var15 = var7.bind(var3)(var15, var11);
                var11 = new Array(2);
                var11[0] = var15;
                if (!(var14 == var12)) {
                    _fun69941_ip = 499;
                    continue _fun69941
                }
            case 449:
                var15 = _closure1_slot7;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'redesign/message-preview/medium',
                    'color': 'text-subtle',
                    'lineClamp': 2
                };
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 499:
                var11[1] = var12;
                var9.children = var11;
                var9 = var7.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Notification = var3;
    var1 = function arg0() {
        _fun69942: for (var _fun69942_ip = 0;;) switch (_fun69942_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.children;
                var10 = var0.onLongPress;
                var12 = var0.percent;
                var0 = _closure1_slot10;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var7.shadow;
                var0.style = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot6;
                var4 = {};
                var4.onLongPress = var10;
                var10 = 'button';
                var4.accessibilityRole = var10;
                var10 = var7.container;
                var7 = new Array(1);
                var7[0] = var10;
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                var10 = var8 != var12;
                if (!var10) {
                    _fun69942_ip = 131;
                    continue _fun69942
                }
            case 110:
                var11 = _closure1_slot7;
                var10 = _closure1_slot12;
                var9 = {};
                var9.percent = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 131:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.NotificationPressable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 5355, 3902, 3681, 2]);