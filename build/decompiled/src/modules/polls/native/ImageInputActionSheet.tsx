// modules/polls/native/ImageInputActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginHorizontal': 24
    };
    var3.emojiContainer = var8;
    var8 = {};
    var9 = 12;
    var8.marginRight = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.emojiIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/ImageInputActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108457: for (var _fun108457_ip = 0;;) switch (_fun108457_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var _closure2_slot0 = var5;
                var1 = var0.index;
                var _closure2_slot1 = var1;
                var17 = var0.answer;
                var _closure2_slot2 = var17;
                var1 = var0.onSaveAltText;
                var _closure2_slot3 = var1;
                var1 = var0.onRemoveAnswerImage;
                var _closure2_slot4 = var1;
                var0 = var0.openExpressionPicker;
                var _closure2_slot5 = var0;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot8;
                var15 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var26 = var17.localCreationAnswerId;
                var25 = var17.image;
                var0 = 40;
                var28 = undefined;
                var27 = var5;
                var24 = var0;
                var23 = var0;
                var0 = var28[var4](var27, var26, var25, var24, var23, var22);
                var10 = var0.renderImage;
                var14 = var0.upload;
                var9 = null;
                var12 = var9 != var14;
                if (var12) {
                    _fun108457_ip = 176;
                    continue _fun108457
                }
            case 151:
                var1 = var17.image;
                var2 = var9 == var1;
                var0 = undefined;
                if (var2) {
                    _fun108457_ip = 172;
                    continue _fun108457
                }
            case 166:
                var0 = var1.emoji;
            case 172:
                var12 = var9 != var0;
            case 176:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var13
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var2 = var4[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var1 = _closure1_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                _closure2_slot6 = var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var5 = var12;
                if (!var5) {
                    _fun108457_ip = 429;
                    continue _fun108457
                }
            case 254:
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var4 = {};
                var8 = var15.emojiContainer;
                var4.style = var8;
                var16 = _closure1_slot6;
                var8 = {};
                var15 = var15.emojiIcon;
                var8.style = var15;
                var8.children = var10;
                var10 = var16.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 10;
                var10 = var18[var10];
                var10 = var15.bind(var3)(var10);
                var15 = var10.Text;
                var10 = {
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var17.image;
                var18 = var9 == var17;
                var19 = undefined;
                if (var18) {
                    _fun108457_ip = 382;
                    continue _fun108457
                }
            case 362:
                var17 = var17.emoji;
                var18 = var9 == var17;
                var19 = undefined;
                if (var18) {
                    _fun108457_ip = 382;
                    continue _fun108457
                }
            case 377:
                var19 = var17.name;
            case 382:
                var17 = global;
                var17 = var17.HermesInternal;
                var18 = var17.concat;
                var17 = ':';
                var17 = var18.bind(var17)(var19, var17);
                var10.children = var17;
                var10 = var16.bind(var3)(var15, var10);
                var8[1] = var10;
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 429:
                var4 = new Array(3);
                var4[0] = var5;
                var16 = _closure1_slot6;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 11;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var7 = 21;
                var5.size = var7;
                var5 = var16.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot7;
                var15 = _closure1_slot0;
                var10 = 12;
                var5 = var8[var10];
                var5 = var15.bind(var3)(var5);
                var5 = var5.ActionSheetRow;
                var6 = var5.Group;
                var5 = {};
                var17 = false;
                var5.hasIcons = var17;
                var8 = var8[var10];
                var8 = var15.bind(var3)(var8);
                var15 = var8.ActionSheetRow;
                var8 = {};
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = 13;
                var20 = var17[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var17 = var17[var18];
                var17 = var19.bind(var3)(var17);
                var19 = var17.t;
                if (var12) {
                    _fun108457_ip = 600;
                    continue _fun108457
                }
            case 585:
                var17 = var19.dzcU1Q;
                var17 = var20.bind(var21)(var17);
                _fun108457_ip = 613;
                continue _fun108457;
            case 600:
                var19 = var19.CZeRhU;
                var17 = var20.bind(var21)(var19);
            case 613:
                var8.label = var17;
                var17 = function() {
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var17;
                var15 = var16.bind(var3)(var15, var8);
                var8 = new Array(3);
                var8[0] = var15;
                var15 = var9 != var14;
                var14 = null;
                if (!var15) {
                    _fun108457_ip = 747;
                    continue _fun108457
                }
            case 651:
                var17 = _closure1_slot6;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = var19[var10];
                var15 = var22.bind(var3)(var15);
                var16 = var15.ActionSheetRow;
                var15 = {};
                var20 = var19[var18];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var18];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.w7x2t4;
                var19 = var20.bind(var21)(var19);
                var15.label = var19;
                var19 = function() {
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEditPollCreationImageAltTextModal;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.channelId = var5;
                    var5 = _closure2_slot2;
                    var1.answer = var5;
                    var5 = _closure2_slot1;
                    var1.index = var5;
                    var4 = _closure2_slot3;
                    var1.onSave = var4;
                    var4 = 40;
                    var1.imageSize = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15.onPress = var19;
                var14 = var17.bind(var3)(var16, var15);
            case 747:
                var8[1] = var14;
                var9 = null;
                if (!var12) {
                    _fun108457_ip = 852;
                    continue _fun108457
                }
            case 756:
                var12 = _closure1_slot6;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = var14[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.ActionSheetRow;
                var10 = {};
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.IhMxgu;
                var14 = var15.bind(var16)(var14);
                var10.label = var14;
                var13 = function() {
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var10.onPress = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 852:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6608, 33, 1297, 671, 13995, 3718, 3278, 5208, 3941, 9282, 7735, 1234, 13997, 2]);