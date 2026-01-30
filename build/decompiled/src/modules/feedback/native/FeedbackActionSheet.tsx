// modules/feedback/native/FeedbackActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: closeActionSheet, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hideActionSheet;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackRating;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var3.container = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var3.ratingsHeader = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginBottom = var9;
    var3.reasonsList = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/FeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FeedbackActionSheet, environment: var1
        _fun76270: for (var _fun76270_ip = 0;;) switch (_fun76270_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.headerLabel;
                var11 = var0.showHeaderCloseButton;
                var10 = var0.hideDontShowAgainCheckbox;
                var23 = var0.ratingOptions;
                var22 = var0.ratingTextLabels;
                var24 = var0.ratingsBodyLabel;
                var19 = var0.reasonsHeaderLabel;
                var26 = var0.reasons;
                var _closure2_slot0 = var26;
                var1 = var0.feedbackReasons;
                var _closure2_slot1 = var1;
                var2 = var0.otherKey;
                var _closure2_slot2 = var2;
                var3 = var0.trackOpen;
                var _closure2_slot3 = var3;
                var3 = var0.trackReport;
                var _closure2_slot4 = var3;
                var0 = var0.getFreeformDescription;
                var _closure2_slot5 = var0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var6 = _closure1_slot4;
                var0 = var6.useRef;
                var8 = null;
                var4 = var0.bind(var6)(var8);
                var _closure2_slot6 = var4;
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 8;
                var0 = var14[var0];
                var0 = var15.bind(var3)(var0);
                var25 = var0.bind(var3)(var26);
                var _closure2_slot7 = var25;
                var5 = var6.useState;
                var0 = 9;
                var0 = var14[var0];
                var13 = var15.bind(var3)(var0);
                var0 = var13.shuffle;
                var0 = var0.bind(var13)(var26);
                var0 = var5.bind(var6)(var0);
                var16 = _closure1_slot3;
                var13 = 2;
                var18 = var16.bind(var3)(var0, var13);
                var0 = 0;
                var21 = var18[var0];
                var5 = 1;
                var18 = var18[var5];
                var _closure2_slot8 = var18;
                var20 = var6.useEffect;
                var18 = new Array(3);
                var18[0] = var26;
                var18[1] = var25;
                var18[2] = var2;
                var2 = function() { // Environment: var12
                    _fun76271: for (var _fun76271_ip = 0;;) switch (_fun76271_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.isEqual;
                            var4 = _closure2_slot7;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var4, var2);
                            if (var2) {
                                _fun76271_ip = 100;
                                continue _fun76271
                            }
                        case 51:
                            var2 = _closure2_slot8;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 10;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.shuffleProblems;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = var2.bind(var0)(var1);
                        case 100:
                            return var0;
                    }
                };
                var2 = var20.bind(var6)(var2, var18);
                var2 = var6.useState;
                var2 = var2.bind(var6)(var8);
                var2 = var16.bind(var3)(var2, var13);
                var20 = var2[var0];
                var _closure2_slot9 = var20;
                var2 = var2[var5];
                var _closure2_slot10 = var2;
                var2 = var6.useState;
                var2 = var2.bind(var6)(var8);
                var2 = var16.bind(var3)(var2, var13);
                var18 = var2[var0];
                var _closure2_slot11 = var18;
                var2 = var2[var5];
                var _closure2_slot12 = var2;
                var2 = var6.useState;
                var18 = false;
                var2 = var2.bind(var6)(var18);
                var2 = var16.bind(var3)(var2, var13);
                var25 = var2[var0];
                var _closure2_slot13 = var25;
                var2 = var2[var5];
                var _closure2_slot14 = var2;
                var2 = var6.useState;
                var2 = var2.bind(var6)(var18);
                var2 = var16.bind(var3)(var2, var13);
                var13 = var2[var0];
                var _closure2_slot15 = var13;
                var2 = var2[var5];
                var _closure2_slot16 = var2;
                var2 = 11;
                var5 = var14[var2];
                var15 = var15.bind(var3)(var5);
                var5 = function() { // Environment: var12
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5 = var15.bind(var3)(var5);
                var5 = _closure1_slot0;
                var2 = var14[var2];
                var14 = var5.bind(var3)(var2);
                var5 = var14.useUnmountEffect;
                var2 = function() { // Environment: var12
                    _fun76273: for (var _fun76273_ip = 0;;) switch (_fun76273_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (var0) {
                                _fun76273_ip = 55;
                                continue _fun76273
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = _closure2_slot9;
                            var1.rating = var0;
                            var0 = _closure2_slot11;
                            var1.reason = var0;
                            var0 = _closure2_slot15;
                            var1.dontShowAgain = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun76273_ip = 216;
                            continue _fun76273;
                        case 55:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 12;
                            var2 = var0[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.pushLazy;
                            var5 = _closure1_slot0;
                            var1 = 14;
                            var1 = var0[var1];
                            var5 = var5.bind(var4)(var1);
                            var1 = 13;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var1 = var5.bind(var4)(var1, var0);
                            var0 = {};
                            var5 = {};
                            var6 = _closure2_slot9;
                            var5.rating = var6;
                            var6 = _closure2_slot11;
                            var5.reason = var6;
                            var6 = _closure2_slot15;
                            var5.dontShowAgain = var6;
                            var0.result = var5;
                            var5 = _closure2_slot4;
                            var0.trackReport = var5;
                            var5 = _closure2_slot5;
                            var6 = null;
                            var8 = var6 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun76273_ip = 193;
                                continue _fun76273
                            }
                        case 180:
                            var8 = _closure2_slot5;
                            var7 = _closure2_slot11;
                            var5 = var8.bind(var4)(var7);
                        case 193:
                            var6 = var6 != var5;
                            var4 = undefined;
                            if (!var6) {
                                _fun76273_ip = 205;
                                continue _fun76273
                            }
                        case 202:
                            var4 = var5;
                        case 205:
                            var0.descriptionLabel = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 216:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var14)(var2);
                var14 = var6.useCallback;
                var5 = function(arg0) { // Environment: var12
                    _fun76274: for (var _fun76274_ip = 0;;) switch (_fun76274_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var3 = _closure1_slot6;
                            var3 = var3.GOOD;
                            if (!(var4 !== var3)) {
                                _fun76274_ip = 61;
                                continue _fun76274
                            }
                        case 34:
                            var3 = _closure2_slot6;
                            var4 = var3.current;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun76274_ip = 91;
                                continue _fun76274
                            }
                        case 49:
                            var3 = var4.expandActionSheet;
                            var3 = var3.bind(var4)();
                            _fun76274_ip = 91;
                            continue _fun76274;
                        case 61:
                            var4 = _closure2_slot12;
                            var3 = null;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure2_slot14;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure1_slot10;
                            var1 = var1.bind(var0)();
                        case 91:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var18 = var14.bind(var6)(var5, var2);
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var12
                    _fun76275: for (var _fun76275_ip = 0;;) switch (_fun76275_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot12;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var4 = _closure2_slot1;
                            var2 = null;
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun76275_ip = 49;
                                continue _fun76275
                            }
                        case 30:
                            var5 = _closure2_slot1;
                            var4 = var5.includes;
                            var3 = var3.value;
                            var2 = var4.bind(var5)(var3);
                        case 49:
                            if (!var2) {
                                _fun76275_ip = 63;
                                continue _fun76275
                            }
                        case 52:
                            var2 = _closure2_slot14;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 63:
                            var1 = _closure1_slot10;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var _closure2_slot17 = var1;
                var14 = var8 !== var20;
                if (!var14) {
                    _fun76270_ip = 526;
                    continue _fun76270
                }
            case 512:
                var1 = _closure1_slot6;
                var1 = var1.GOOD;
                var14 = var20 !== var1;
            case 526:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var16 = var1.bottom;
                var1 = 48;
                if (!var10) {
                    _fun76270_ip = 563;
                    continue _fun76270
                }
            case 561:
                var1 = 0;
            case 563:
                var0 = 232;
                var0 = var0 + var1;
                var5 = var0 + var16;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 16;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var6 = true;
                var0.scrollable = var6;
                var0.ref = var4;
                var0.startHeight = var5;
                var6 = var8 == var20;
                var4 = undefined;
                if (!var6) {
                    _fun76270_ip = 634;
                    continue _fun76270
                }
            case 631:
                var4 = var5;
            case 634:
                var0.maxHeight = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 17;
                var4 = var15[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var7;
                var7 = null;
                if (!var11) {
                    _fun76270_ip = 726;
                    continue _fun76270
                }
            case 680:
                var25 = _closure1_slot7;
                var15 = _closure1_slot0;
                var26 = _closure1_slot2;
                var11 = 18;
                var11 = var26[var11];
                var11 = var15.bind(var3)(var11);
                var15 = var11.ActionSheetCloseButton;
                var11 = {};
                var26 = _closure1_slot10;
                var11.onPress = var26;
                var7 = var25.bind(var3)(var15, var11);
            case 726:
                var4.trailing = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 19;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var11 = var17.container;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = {};
                var15 = var17.container;
                var15 = var15.padding;
                var15 = var15 + var16;
                var11.paddingBottom = var15;
                var7[1] = var11;
                var4.contentContainerStyle = var7;
                var7 = var8 != var24;
                var11 = null;
                if (!var7) {
                    _fun76270_ip = 890;
                    continue _fun76270
                }
            case 825:
                var16 = _closure1_slot7;
                var15 = _closure1_slot0;
                var25 = _closure1_slot2;
                var7 = 20;
                var7 = var25[var7];
                var7 = var15.bind(var3)(var7);
                var15 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var25 = var17.ratingsHeader;
                var7.style = var25;
                var7.children = var24;
                var11 = var16.bind(var3)(var15, var7);
            case 890:
                var7 = new Array(4);
                var7[0] = var11;
                var16 = _closure1_slot7;
                var15 = _closure1_slot1;
                var24 = _closure1_slot2;
                var11 = 21;
                var11 = var24[var11];
                var15 = var15.bind(var3)(var11);
                var11 = {};
                var11.ratingOptions = var23;
                var11.textLabels = var22;
                var11.selectedRating = var20;
                var11.onChangeRating = var18;
                var11 = var16.bind(var3)(var15, var11);
                var7[1] = var11;
                var11 = null;
                if (!var14) {
                    _fun76270_ip = 1048;
                    continue _fun76270
                }
            case 959:
                var16 = _closure1_slot7;
                var15 = _closure1_slot5;
                var14 = {};
                var17 = var17.reasonsList;
                var14.style = var17;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = 22;
                var17 = var20[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.TableRowGroup;
                var17 = {};
                var17.title = var19;
                var20 = var21.map;
                var19 = function(arg0, arg1) { // Environment: var12
                    _fun76276: for (var _fun76276_ip = 0;;) switch (_fun76276_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var2 = var6.label;
                            var0 = null;
                            var2 = var0 != var2;
                            var5 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun76276_ip = 100;
                                continue _fun76276
                            }
                        case 27:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 23;
                            var2 = var7[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.TableRow;
                            var2 = {};
                            var6 = var6.label;
                            var2.label = var6;
                            var6 = 2;
                            var2.labelLineClamp = var6;
                            var1 = function() { // Original name: onPress, environment: var1
                                var2 = _closure2_slot17;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var1;
                            var1 = arg1;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 100:
                            return var0;
                    }
                };
                var19 = var20.bind(var21)(var19);
                var17.children = var19;
                var17 = var16.bind(var3)(var18, var17);
                var14.children = var17;
                var11 = var16.bind(var3)(var15, var14);
            case 1048:
                var7[2] = var11;
                var8 = null;
                if (var10) {
                    _fun76270_ip = 1170;
                    continue _fun76270
                }
            case 1057:
                var11 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 24;
                var9 = var17[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.TableCheckboxRow;
                var9 = {
                    'start': true,
                    'end': true
                };
                var9.checked = var13;
                var13 = 25;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["5E9SB9"];
                var13 = var14.bind(var15)(var13);
                var9.label = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var2 = _closure2_slot16;
                    var0 = _closure2_slot15;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1170:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9670, 33, 1297, 671, 3237, 5267, 22, 9673, 4062, 4524, 9692, 1307, 1568, 4893, 5173, 5171, 4895, 3901, 9674, 5324, 4860, 8732, 1234, 2]);