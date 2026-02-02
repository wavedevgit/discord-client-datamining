// modules/user_profile/native/ChangeAvatarActionSheet.tsx
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
    var11 = 0;
    var6 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsObjects;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginLeft = var12;
    var3.nitroWheel = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var8.color = var12;
    var3.sublabel = var8;
    var8 = {
        'marginBottom': 4,
        'color': null,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var12;
    var3.label = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var8.color = var12;
    var3.remove = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginBottom = var12;
    var3.upsellButton = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-end'
    };
    var3.upsellTitleContainer = var8;
    var8 = {};
    var8.flex = var11;
    var3.titleWrapper = var8;
    var8 = {};
    var11 = 'flex-start';
    var8.justifyContent = var11;
    var3.titleContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var8.tintColor = var9;
    var3.disabledNitroWheel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/ChangeAvatarActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79846: for (var _fun79846_ip = 0;;) switch (_fun79846_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.handleUploadAvatarSelect;
                var13 = var0.handleRemoveAvatarSelect;
                var22 = var0.handleUploadGIFAvatarSelect;
                var17 = var0.handleEditAvatarDecorationSelect;
                var14 = var0.showAnimatedAvatarUpsell;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun79846_ip = 41;
                    continue _fun79846
                }
            case 39:
                var14 = false;
            case 41:
                var9 = var0.showRemoveAvatar;
                if (!(var9 === var3)) {
                    _fun79846_ip = 53;
                    continue _fun79846
                }
            case 51:
                var9 = false;
            case 53:
                var0 = _closure1_slot9;
                var18 = var0.bind(var3)();
                var15 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var4 = var15.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var2.bind(var4)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isPremium;
                var7 = var0.bind(var1)(var2);
                var2 = _closure1_slot7;
                var0 = 9;
                var0 = var8[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = _closure1_slot6;
                var4 = 10;
                var4 = var8[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var20 = 11;
                var10 = var8[var20];
                var10 = var15.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var8 = var8[var20];
                var8 = var15.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.lqaIxI;
                var8 = var10.bind(var12)(var8);
                var4.title = var8;
                if (!var7) {
                    _fun79846_ip = 283;
                    continue _fun79846
                }
            case 245:
                var12 = _closure1_slot6;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 12;
                var8 = var15[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.NitroWheelIcon;
                var8 = {};
                var7 = var12.bind(var3)(var10, var8);
            case 283:
                var4.trailing = var7;
                var7 = var18.titleWrapper;
                var4.titleWrapperStyle = var7;
                var7 = var18.titleContainer;
                var4.titleContainerStyle = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var24 = _closure1_slot0;
                var19 = _closure1_slot2;
                var5 = 13;
                var5 = var19[var5];
                var5 = var24.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var15 = _closure1_slot6;
                var10 = 14;
                var8 = var19[var10];
                var8 = var24.bind(var3)(var8);
                var12 = var8.TableRow;
                var8 = {};
                var21 = var19[var20];
                var21 = var24.bind(var3)(var21);
                var25 = var21.intl;
                var23 = var25.string;
                var21 = var19[var20];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["MsUY/S"];
                var21 = var23.bind(var25)(var21);
                var8.label = var21;
                var21 = var19[var20];
                var21 = var24.bind(var3)(var21);
                var23 = var21.intl;
                var21 = var23.string;
                var19 = var19[var20];
                var19 = var24.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.r5hKOy;
                var19 = var21.bind(var23)(var19);
                var8.subLabel = var19;
                var8.onPress = var16;
                var12 = var15.bind(var3)(var12, var8);
                var8 = new Array(5);
                var8[0] = var12;
                var12 = null;
                var15 = var12 != var22;
                if (!var15) {
                    _fun79846_ip = 509;
                    continue _fun79846
                }
            case 506:
                var15 = !var14;
            case 509:
                if (!var15) {
                    _fun79846_ip = 599;
                    continue _fun79846
                }
            case 512:
                var21 = _closure1_slot6;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = var23[var10];
                var16 = var26.bind(var3)(var16);
                var19 = var16.TableRow;
                var16 = {};
                var24 = var23[var20];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var20];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["xsC+/y"];
                var23 = var24.bind(var25)(var23);
                var16.label = var23;
                var16.onPress = var22;
                var15 = var21.bind(var3)(var19, var16);
            case 599:
                var8[1] = var15;
                if (!var14) {
                    _fun79846_ip = 1043;
                    continue _fun79846
                }
            case 609:
                var19 = _closure1_slot6;
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var15 = var29[var10];
                var15 = var32.bind(var3)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var23 = _closure1_slot7;
                var26 = _closure1_slot3;
                var21 = {};
                var22 = var18.upsellTitleContainer;
                var21.style = var22;
                var24 = 15;
                var22 = var29[var24];
                var22 = var32.bind(var3)(var22);
                var25 = var22.FormLabel;
                var22 = {};
                var27 = var29[var20];
                var27 = var32.bind(var3)(var27);
                var30 = var27.intl;
                var28 = var30.string;
                var27 = var29[var20];
                var27 = var32.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.xZ0Wot;
                var27 = var28.bind(var30)(var27);
                var22.text = var27;
                var25 = var19.bind(var3)(var25, var22);
                var22 = new Array(2);
                var22[0] = var25;
                var25 = 12;
                var25 = var29[var25];
                var25 = var32.bind(var3)(var25);
                var27 = var25.NitroWheelIcon;
                var25 = {};
                var28 = var18.nitroWheel;
                var25.style = var28;
                var28 = 'sm';
                var25.size = var28;
                var25 = var19.bind(var3)(var27, var25);
                var22[1] = var25;
                var21.children = var22;
                var21 = var23.bind(var3)(var26, var21);
                var15.label = var21;
                var22 = _closure1_slot8;
                var21 = {};
                var24 = var29[var24];
                var24 = var32.bind(var3)(var24);
                var25 = var24.FormSubLabel;
                var24 = {};
                var27 = var18.sublabel;
                var24.style = var27;
                var27 = 3;
                var24.numberOfLines = var27;
                var27 = var29[var20];
                var27 = var32.bind(var3)(var27);
                var30 = var27.intl;
                var28 = var30.string;
                var27 = var29[var20];
                var27 = var32.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.L3UPqR;
                var27 = var28.bind(var30)(var27);
                var24.text = var27;
                var25 = var19.bind(var3)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var25 = {};
                var27 = var18.upsellButton;
                var25.style = var27;
                var28 = _closure1_slot1;
                var27 = 16;
                var27 = var29[var27];
                var28 = var28.bind(var3)(var27);
                var27 = {};
                var30 = _closure1_slot5;
                var30 = var30.ANIMATED_AVATAR;
                var27.analyticsObject = var30;
                var30 = var29[var20];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var20];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.mr4K7D;
                var29 = var30.bind(var31)(var29);
                var27.label = var29;
                var27 = var19.bind(var3)(var28, var27);
                var25.children = var27;
                var25 = var19.bind(var3)(var26, var25);
                var24[1] = var25;
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var15.subLabel = var21;
                var14 = var19.bind(var3)(var16, var15);
            case 1043:
                var8[2] = var14;
                var12 = var12 != var17;
                if (!var12) {
                    _fun79846_ip = 1200;
                    continue _fun79846
                }
            case 1057:
                var16 = _closure1_slot6;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var14 = var24[var10];
                var14 = var27.bind(var3)(var14);
                var15 = var14.TableRow;
                var14 = {};
                var21 = _closure1_slot3;
                var19 = {};
                var22 = var18.upsellTitleContainer;
                var19.style = var22;
                var22 = 15;
                var22 = var24[var22];
                var22 = var27.bind(var3)(var22);
                var23 = var22.FormLabel;
                var22 = {};
                var25 = var24[var20];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var20];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.BVcYCx;
                var24 = var25.bind(var26)(var24);
                var22.text = var24;
                var22 = var16.bind(var3)(var23, var22);
                var19.children = var22;
                var19 = var16.bind(var3)(var21, var19);
                var14.label = var19;
                var14.onPress = var17;
                var12 = var16.bind(var3)(var15, var14);
            case 1200:
                var8[3] = var12;
                if (!var9) {
                    _fun79846_ip = 1356;
                    continue _fun79846
                }
            case 1210:
                var12 = _closure1_slot6;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = var16[var10];
                var10 = var19.bind(var3)(var10);
                var11 = var10.TableRow;
                var10 = {};
                var14 = 15;
                var14 = var16[var14];
                var14 = var19.bind(var3)(var14);
                var15 = var14.FormLabel;
                var14 = {};
                var21 = var18.label;
                var17 = new Array(2);
                var17[0] = var21;
                var18 = var18.remove;
                var17[1] = var18;
                var14.style = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.twB3fz;
                var16 = var17.bind(var18)(var16);
                var14.text = var16;
                var14 = var12.bind(var3)(var15, var14);
                var10.label = var14;
                var10.onPress = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1356:
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 33, 1297, 671, 566, 3070, 5173, 5176, 1234, 5713, 5327, 4863, 5342, 10107, 2]);