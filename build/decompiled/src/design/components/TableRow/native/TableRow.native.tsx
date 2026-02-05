// design/components/TableRow/native/TableRow.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun44567: for (var _fun44567_ip = 0;;) switch (_fun44567_ip) {
            case 0:
                var2 = arg0;
                var21 = var2.label;
                var20 = var2.subLabel;
                var10 = var2.icon;
                var19 = var2.trailing;
                var18 = var2.arrow;
                var8 = var2.onPress;
                var17 = var2.disabled;
                var4 = undefined;
                if (!(var17 === var4)) {
                    _fun44567_ip = 49;
                    continue _fun44567
                }
            case 47:
                var17 = false;
            case 49:
                var23 = var2.start;
                var3 = var2.end;
                var16 = var2.labelLineClamp;
                var15 = var2.subLabelLineClamp;
                var14 = var2.variant;
                if (!(var14 === var4)) {
                    _fun44567_ip = 84;
                    continue _fun44567
                }
            case 80:
                var14 = 'default';
            case 84:
                var13 = var2.draggable;
                var12 = var2.dragHandlePressableProps;
                var1 = {
                    'label': 0,
                    'subLabel': 0,
                    'icon': 0,
                    'trailing': 0,
                    'arrow': 0,
                    'onPress': 0,
                    'disabled': 0,
                    'start': 0,
                    'end': 0,
                    'labelLineClamp': 0,
                    'subLabelLineClamp': 0,
                    'variant': 0,
                    'draggable': 0,
                    'dragHandlePressableProps': 0
                };
                var9 = null;
                var26 = var1;
                var25 = null;
                var0 = silentSetPrototypeOf(var26, var25);
                var26 = {};
                var25 = var2;
                var24 = var1;
                var7 = copyDataProperties(var26, var25, var24);
                var2 = _closure1_slot2;
                var1 = var2.useContext;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 5;
                var0 = var11[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.TableRowGroupContext;
                var2 = var1.bind(var2)(var0);
                var1 = !var2;
                if (!var1) {
                    _fun44567_ip = 189;
                    continue _fun44567
                }
            case 183:
                var0 = true;
                var1 = var0 === var3;
            case 189:
                var5 = _closure1_slot7;
                var3 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 6;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.Card;
                var0 = {
                    'shadow': 'none',
                    'border': 'none'
                };
                var11 = !var2;
                if (!var11) {
                    _fun44567_ip = 245;
                    continue _fun44567
                }
            case 239:
                var22 = true;
                var11 = var22 === var23;
            case 245:
                var0.start = var11;
                var0.end = var1;
                var0.onPress = var8;
                var0.disabled = var17;
                var8 = _closure1_slot10;
                var0.style = var8;
                var26 = var0;
                var25 = var7;
                var7 = copyDataProperties(var26, var25);
                var11 = _closure1_slot7;
                var8 = _closure1_slot12;
                var7 = {};
                var7.label = var21;
                var7.subLabel = var20;
                var7.icon = var10;
                var7.trailing = var19;
                var7.arrow = var18;
                var7.disabled = var17;
                var7.labelLineClamp = var16;
                var7.subLabelLineClamp = var15;
                var7.variant = var14;
                var7.draggable = var13;
                var7.dragHandlePressableProps = var12;
                var8 = var11.bind(var4)(var8, var7);
                var7 = 'children';
                var0[var7] = var8;
                var7 = var5.bind(var4)(var3, var0);
                var0 = var7;
                if (var2) {
                    _fun44567_ip = 452;
                    continue _fun44567
                }
            case 367:
                var0 = var7;
                if (var1) {
                    _fun44567_ip = 452;
                    continue _fun44567
                }
            case 373:
                var3 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 7;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TableRowDivider;
                var6 = {};
                var9 = var9 != var10;
                var6.adjustSpacingForIcon = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 452:
                return var0;
        }
    };
    var1 = function arg0() {
        _fun44568: for (var _fun44568_ip = 0;;) switch (_fun44568_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.label;
                var22 = var0.labelLineClamp;
                var23 = var0.subLabel;
                var24 = var0.subLabelLineClamp;
                var15 = var0.icon;
                var11 = var0.trailing;
                var5 = var0.arrow;
                var10 = var0.disabled;
                var27 = var0.variant;
                var3 = undefined;
                if (!(var27 === var3)) {
                    _fun44568_ip = 63;
                    continue _fun44568
                }
            case 59:
                var27 = 'default';
            case 63:
                var7 = var0.draggable;
                if (!(var7 === var3)) {
                    _fun44568_ip = 75;
                    continue _fun44568
                }
            case 73:
                var7 = false;
            case 75:
                var14 = var0.dragHandlePressableProps;
                var1 = _closure1_slot2;
                var0 = var1.isValidElement;
                var0 = var0.bind(var1)(var11);
                var9 = undefined;
                if (!var0) {
                    _fun44568_ip = 144;
                    continue _fun44568
                }
            case 104:
                var1 = var11.type;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 10;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.TableRowTrailingText;
                var9 = undefined;
                if (!(var1 === var0)) {
                    _fun44568_ip = 144;
                    continue _fun44568
                }
            case 141:
                var9 = var11;
            case 144:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useFontScale;
                var1 = var0.bind(var1)();
                var0 = 12;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun44568_ip = 215;
                    continue _fun44568
                }
            case 199:
                var0 = 1.5;
                var4 = var1 > var0;
                _fun44568_ip = 229;
                continue _fun44568;
            case 215:
                var0 = 1.2;
                var4 = var1 > var0;
            case 229:
                var2 = _closure1_slot11;
                var8 = null;
                var1 = var8 != var9;
                var0 = true;
                var0 = var0 === var10;
                var12 = var2.bind(var3)(var0, var1, var4);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.row;
                var0.style = var4;
                if (!var7) {
                    _fun44568_ip = 366;
                    continue _fun44568
                }
            case 275:
                var13 = _closure1_slot7;
                var10 = _closure1_slot3;
                var4 = {};
                var30 = var4;
                var29 = var14;
                var14 = copyDataProperties(var30, var29);
                var17 = _closure1_slot7;
                var16 = _closure1_slot0;
                var18 = _closure1_slot1;
                var14 = 13;
                var14 = var18[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.DragIcon;
                var14 = {};
                var18 = 'xs';
                var14.size = var18;
                var18 = var12.dragHandle;
                var14.style = var18;
                var16 = var17.bind(var3)(var16, var14);
                var14 = 'children';
                var4[var14] = var16;
                var7 = var13.bind(var3)(var10, var4);
            case 366:
                var4 = new Array(5);
                var4[0] = var7;
                var7 = var8 != var15;
                if (!var7) {
                    _fun44568_ip = 411;
                    continue _fun44568
                }
            case 381:
                var14 = _closure1_slot7;
                var13 = _closure1_slot4;
                var10 = {};
                var16 = var12.iconContainer;
                var10.style = var16;
                var10.children = var15;
                var7 = var14.bind(var3)(var13, var10);
            case 411:
                var4[1] = var7;
                var13 = _closure1_slot9;
                var10 = _closure1_slot4;
                var7 = {};
                var14 = var12.content;
                var7.style = var14;
                var16 = _closure1_slot9;
                var15 = _closure1_slot4;
                var14 = {};
                var17 = var12.labels;
                var14.style = var17;
                var18 = _closure1_slot2;
                var17 = var18.isValidElement;
                var17 = var17.bind(var18)(var21);
                var18 = var21;
                if (var17) {
                    _fun44568_ip = 553;
                    continue _fun44568
                }
            case 475:
                var20 = _closure1_slot7;
                var19 = _closure1_slot0;
                var25 = _closure1_slot1;
                var17 = 14;
                var17 = var25[var17];
                var17 = var19.bind(var3)(var17);
                var19 = var17.Text;
                var17 = {};
                var25 = 'text-md/semibold';
                var17.variant = var25;
                var25 = 'mobile-text-heading-primary';
                var26 = 'danger';
                if (!(var26 === var27)) {
                    _fun44568_ip = 534;
                    continue _fun44568
                }
            case 528:
                var25 = 'text-feedback-critical';
            case 534:
                var17.color = var25;
                var17.lineClamp = var22;
                var17.children = var21;
                var18 = var20.bind(var3)(var19, var17);
            case 553:
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var8 != var23;
                if (!var18) {
                    _fun44568_ip = 672;
                    continue _fun44568
                }
            case 568:
                var20 = _closure1_slot2;
                var19 = var20.isValidElement;
                var20 = var19.bind(var20)(var23);
                var19 = var23;
                if (var20) {
                    _fun44568_ip = 669;
                    continue _fun44568
                }
            case 589:
                var22 = _closure1_slot7;
                var21 = _closure1_slot0;
                var25 = _closure1_slot1;
                var20 = 14;
                var20 = var25[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {};
                var25 = 'text-xs/medium';
                var20.variant = var25;
                var25 = 'text-subtle';
                var26 = 'danger';
                if (!(var26 === var27)) {
                    _fun44568_ip = 650;
                    continue _fun44568
                }
            case 644:
                var25 = 'text-feedback-critical';
            case 650:
                var20.color = var25;
                var20.lineClamp = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 669:
                var18 = var19;
            case 672:
                var17[1] = var18;
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var8 != var9;
                if (!var15) {
                    _fun44568_ip = 749;
                    continue _fun44568
                }
            case 701:
                var18 = _closure1_slot7;
                var17 = _closure1_slot4;
                var16 = {};
                var20 = var12.trailing;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var12.trailingText;
                var19[1] = var20;
                var16.style = var19;
                var16.children = var9;
                var15 = var18.bind(var3)(var17, var16);
            case 749:
                var14[1] = var15;
                var7.children = var14;
                var7 = var13.bind(var3)(var10, var7);
                var4[2] = var7;
                var7 = var8 != var11;
                if (!var7) {
                    _fun44568_ip = 778;
                    continue _fun44568
                }
            case 774:
                var7 = var8 == var9;
            case 778:
                if (!var7) {
                    _fun44568_ip = 811;
                    continue _fun44568
                }
            case 781:
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.trailing;
                var8.style = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 811:
                var4[3] = var7;
                if (!var5) {
                    _fun44568_ip = 856;
                    continue _fun44568
                }
            case 818:
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 9;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.TableRowArrow;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 856:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var8 = 0;
    var9 = var6[var8];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var9);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.Pressable;
    var _closure1_slot3 = var9;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var9;
    var4 = var4.TABLE_ROW_PADDING;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot7 = var9;
    var9 = var4.Fragment;
    var _closure1_slot8 = var9;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = {};
    var4.padding = var8;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = function(arg0, arg1, arg2) { // Environment: var7
        _fun44569: for (var _fun44569_ip = 0;;) switch (_fun44569_ip) {
            case 0:
                var7 = arg1;
                var3 = arg2;
                var0 = {};
                var1 = {};
                var4 = _closure1_slot6;
                var1.padding = var4;
                var4 = _closure1_slot5;
                var1.minHeight = var4;
                var6 = 'row';
                var1.flexDirection = var6;
                var5 = 'center';
                var1.alignItems = var5;
                var4 = 1;
                var9 = arg0;
                var8 = var4;
                if (!var9) {
                    _fun44569_ip = 68;
                    continue _fun44569
                }
            case 58:
                var8 = 0.5;
            case 68:
                var1.opacity = var8;
                var0.row = var1;
                var1 = {};
                var2 = _closure1_slot6;
                var1.marginEnd = var2;
                var0.iconContainer = var1;
                var1 = {};
                var2 = 18;
                var1.marginStart = var2;
                var0.trailing = var1;
                var1 = {
                    'flexShrink': 1,
                    'flexGrow': 1,
                    'flexDirection': null,
                    'alignItems': null,
                    'justifyContent': 'space-between'
                };
                if (!var3) {
                    _fun44569_ip = 129;
                    continue _fun44569
                }
            case 125:
                var6 = 'column';
            case 129:
                var1.flexDirection = var6;
                if (!var3) {
                    _fun44569_ip = 142;
                    continue _fun44569
                }
            case 138:
                var5 = 'stretch';
            case 142:
                var1.alignItems = var5;
                var0.content = var1;
                var1 = {};
                var1.flexGrow = var4;
                var5 = var4;
                if (!var7) {
                    _fun44569_ip = 173;
                    continue _fun44569
                }
            case 165:
                var5 = var4;
                if (var3) {
                    _fun44569_ip = 173;
                    continue _fun44569
                }
            case 171:
                var5 = undefined;
            case 173:
                var1.flexShrink = var5;
                var5 = undefined;
                if (!var7) {
                    _fun44569_ip = 194;
                    continue _fun44569
                }
            case 183:
                var5 = undefined;
                if (var3) {
                    _fun44569_ip = 194;
                    continue _fun44569
                }
            case 188:
                var5 = '70%';
            case 194:
                var1.maxWidth = var5;
                var0.labels = var1;
                var1 = {};
                var1.flexShrink = var4;
                if (!var3) {
                    _fun44569_ip = 216;
                    continue _fun44569
                }
            case 214:
                var2 = 0;
            case 216:
                var1.marginStart = var2;
                var0.trailingText = var1;
                var1 = {};
                var2 = 8;
                var1.marginEnd = var2;
                var0.dragHandle = var1;
                return var0;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TableRowIcon;
    var3.Icon = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TableRowArrow;
    var3.Arrow = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TableRowTrailingText;
    var3.TrailingText = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TableRow/native/TableRow.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.TableRow = var3;
    var2.TableRowInner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4872, 33, 1297, 4901, 4902, 4871, 4907, 4908, 4910, 4090, 478, 4911, 3941, 2]);