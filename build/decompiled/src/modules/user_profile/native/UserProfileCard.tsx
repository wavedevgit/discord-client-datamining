// modules/user_profile/native/UserProfileCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.CARD_PADDING;
    var11 = var3.CARD_ROWS_COLUMN_GAP;
    var10 = var3.CARD_ROWS_ICON_SIZE;
    var3 = var3.CARD_ROWS_ICON_SIZE_VARIANT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginBottom': 12,
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.title = var9;
    var9 = {};
    var9.flexShrink = var12;
    var3.text = var9;
    var9 = {};
    var9.borderBottomWidth = var12;
    var14 = 5;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderBottomColor = var14;
    var14 = var10 + var11;
    var9.marginLeft = var14;
    var13 = -var13;
    var9.marginRight = var13;
    var3.rowDivider = var9;
    var9 = {
        'flexDirection': 'column',
        'paddingVertical': 20
    };
    var3.row = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9.columnGap = var11;
    var3.rowLabel = var9;
    var9 = {};
    var9.flex = var12;
    var9.lineHeight = var10;
    var3.rowLabelText = var9;
    var9 = {};
    var10 = var10 + var11;
    var9.marginHorizontal = var10;
    var3.rowSublabel = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChevronSmallRightIcon;
    var3 = {};
    var8 = 'sm';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot10 = var3;
    var6 = function() {
        var1 = _closure1_slot9;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.rowDivider;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileCard.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun68571: for (var _fun68571_ip = 0;;) switch (_fun68571_ip) {
            case 0:
                var2 = arg0;
                var13 = var2.title;
                var10 = var2.titleIcon;
                var12 = var2.titleStyle;
                var4 = var2.children;
                var8 = var2.style;
                var1 = {
                    'title': 0,
                    'titleIcon': 0,
                    'titleStyle': 0,
                    'children': 0,
                    'style': 0
                };
                var5 = null;
                var18 = var1;
                var17 = null;
                var0 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var2;
                var16 = var1;
                var17 = copyDataProperties(var18, var17, var16);
                var0 = _closure1_slot9;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var7 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var11 = var7.card;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var8;
                var0.style = var7;
                var18 = var0;
                var6 = copyDataProperties(var18, var17);
                var6 = var5 != var13;
                if (!var6) {
                    _fun68571_ip = 267;
                    continue _fun68571
                }
            case 150:
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var5 = {};
                var15 = var14.title;
                var11 = new Array(2);
                var11[0] = var15;
                var11[1] = var12;
                var5.style = var11;
                var12 = _closure1_slot6;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 8;
                var9 = var15[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-sm/semibold',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var14 = var14.text;
                var9.style = var14;
                var9.children = var13;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var5.children = var9;
                var6 = var8.bind(var3)(var7, var5);
            case 267:
                var5 = new Array(2);
                var5[0] = var6;
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun68572: for (var _fun68572_ip = 0;;) switch (_fun68572_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.label;
                var9 = var1.sublabel;
                var14 = var1.icon;
                var15 = var1.hint;
                var5 = var1.disabled;
                var0 = var1.isDestructive;
                var4 = var1.onPress;
                var19 = var1.labelColor;
                var11 = var1.arrow;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun68572_ip = 61;
                    continue _fun68572
                }
            case 59:
                var11 = false;
            case 61:
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var16 = undefined;
                if (!var0) {
                    _fun68572_ip = 83;
                    continue _fun68572
                }
            case 77:
                var16 = 'text-feedback-critical';
            case 83:
                var18 = 'mobile-text-heading-primary';
                if (!var0) {
                    _fun68572_ip = 98;
                    continue _fun68572
                }
            case 92:
                var18 = 'text-feedback-critical';
            case 98:
                var2 = _closure1_slot7;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var7 = var10.row;
                var0.style = var7;
                var7 = 'button';
                var0.accessibilityRole = var7;
                var0.accessibilityLabel = var17;
                var0.disabled = var5;
                var0.onPress = var4;
                var7 = _closure1_slot4;
                var4 = {};
                var5 = var10.rowLabel;
                var4.style = var5;
                var8 = _closure1_slot6;
                var5 = {};
                var20 = _closure1_slot5;
                var5.size = var20;
                var5.color = var16;
                var5 = var8.bind(var3)(var14, var5);
                var8 = new Array(4);
                var8[0] = var5;
                var14 = _closure1_slot6;
                var5 = 8;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var13 = var5.Text;
                var12 = {};
                var5 = 'text-md/semibold';
                var12.variant = var5;
                var5 = null;
                if (!(var5 != var19)) {
                    _fun68572_ip = 248;
                    continue _fun68572
                }
            case 245:
                var18 = var19;
            case 248:
                var12.color = var18;
                var18 = var10.rowLabelText;
                var12.style = var18;
                var12.children = var17;
                var12 = var14.bind(var3)(var13, var12);
                var8[1] = var12;
                var12 = var5 != var15;
                if (!var12) {
                    _fun68572_ip = 307;
                    continue _fun68572
                }
            case 283:
                var14 = _closure1_slot6;
                var13 = {};
                var17 = _closure1_slot5;
                var13.size = var17;
                var13.color = var16;
                var12 = var14.bind(var3)(var15, var13);
            case 307:
                var8[2] = var12;
                if (!var11) {
                    _fun68572_ip = 318;
                    continue _fun68572
                }
            case 314:
                var11 = _closure1_slot10;
            case 318:
                var8[3] = var11;
                var4.children = var8;
                var7 = var2.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = var5 != var9;
                if (!var5) {
                    _fun68572_ip = 377;
                    continue _fun68572
                }
            case 347:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.rowSublabel;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 377:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UserProfileFormRow = var3;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.children;
        var3 = _closure1_slot6;
        var2 = _closure1_slot8;
        var1 = {};
        var0 = _closure1_slot3;
        var5 = var0.Children;
        var4 = var5.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun68574: for (var _fun68574_ip = 0;;) switch (_fun68574_ip) {
                case 0:
                    var4 = arg1;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot3;
                    var2 = var1.Fragment;
                    var1 = {};
                    var6 = 0;
                    var5 = null;
                    if (!(var6 !== var4)) {
                        _fun68574_ip = 34;
                        continue _fun68574
                    }
                case 30:
                    var5 = _closure1_slot11;
                case 34:
                    var0 = new Array(2);
                    var0[0] = var5;
                    var5 = arg0;
                    var0[1] = var5;
                    var1.children = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var6, var0);
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.UserProfileCardRows = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7058, 33, 1297, 671, 8440, 4880, 3938, 7061, 2]);