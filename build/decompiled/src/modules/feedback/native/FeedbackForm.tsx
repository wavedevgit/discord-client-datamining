// modules/feedback/native/FeedbackForm.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackRating;
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
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.ratingsLabel = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var3.reasonsHeader = var8;
    var8 = {
        'overflow': 'hidden',
        'marginBottom': 12,
        'padding': 0
    };
    var3.reasonsList = var8;
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var11;
    var3.reason = var8;
    var8 = {
        'paddingHorizontal': 0,
        'paddingVertical': 8
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.doNotShowAgainContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/FeedbackForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76968: for (var _fun76968_ip = 0;;) switch (_fun76968_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.showDoNotShowAgainCheckbox;
                var13 = var2.ratingsBodyLabel;
                var19 = var2.reasonsHeaderLabel;
                var20 = var2.reasons;
                var _closure2_slot0 = var20;
                var1 = var2.otherKey;
                var _closure2_slot1 = var1;
                var0 = var2.onFeedbackChanged;
                var _closure2_slot2 = var0;
                var2 = var2.trackOpen;
                var _closure2_slot3 = var2;
                var2 = _closure1_slot8;
                var3 = undefined;
                var16 = var2.bind(var3)();
                var _closure2_slot4 = var16;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var18 = var2.bind(var3)(var20);
                var _closure2_slot5 = var18;
                var5 = _closure1_slot4;
                var8 = var5.useState;
                var2 = 7;
                var2 = var7[var2];
                var9 = var4.bind(var3)(var2);
                var2 = var9.shuffle;
                var2 = var2.bind(var9)(var20);
                var2 = var8.bind(var5)(var2);
                var14 = _closure1_slot3;
                var10 = 2;
                var15 = var14.bind(var3)(var2, var10);
                var9 = 0;
                var2 = var15[var9];
                var8 = 1;
                var15 = var15[var8];
                var _closure2_slot6 = var15;
                var17 = var5.useEffect;
                var15 = new Array(3);
                var15[0] = var20;
                var15[1] = var18;
                var15[2] = var1;
                var1 = function() { // Environment: var12
                    _fun76969: for (var _fun76969_ip = 0;;) switch (_fun76969_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.isEqual;
                            var4 = _closure2_slot5;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var4, var2);
                            if (var2) {
                                _fun76969_ip = 100;
                                continue _fun76969
                            }
                        case 51:
                            var2 = _closure2_slot6;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.shuffleProblems;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = var2.bind(var0)(var1);
                        case 100:
                            return var0;
                    }
                };
                var1 = var17.bind(var5)(var1, var15);
                var15 = var5.useState;
                var1 = {};
                var1 = var15.bind(var5)(var1);
                var1 = var14.bind(var3)(var1, var10);
                var15 = var1[var9];
                var _closure2_slot7 = var15;
                var1 = var1[var8];
                var _closure2_slot8 = var1;
                var1 = 9;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = function() { // Environment: var12
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var4.bind(var3)(var1);
                var4 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var15;
                var1[1] = var0;
                var0 = function() { // Environment: var12
                    _fun76971: for (var _fun76971_ip = 0;;) switch (_fun76971_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var2 = var0.doNotShowAgain;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun76971_ip = 25;
                                continue _fun76971
                            }
                        case 22:
                            var0 = var2;
                        case 25:
                            var4 = _closure2_slot8;
                            var3 = {};
                            var2 = _closure2_slot7;
                            var7 = var3;
                            var6 = var2;
                            var5 = copyDataProperties(var7, var6);
                            var5 = !var0;
                            var0 = 'doNotShowAgain';
                            var3[var0] = var5;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var9 = var4.bind(var5)(var0, var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var0 = var0.label;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var12
                    _fun76973: for (var _fun76973_ip = 0;;) switch (_fun76973_ip) {
                        case 0:
                            var12 = arg0;
                            var4 = arg1;
                            var _closure3_slot0 = var12;
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot4;
                            var2 = var1.Fragment;
                            var1 = {};
                            var5 = 0;
                            var5 = var4 > var5;
                            var6 = null;
                            if (!var5) {
                                _fun76973_ip = 82;
                                continue _fun76973
                            }
                        case 42:
                            var10 = _closure1_slot6;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 10;
                            var5 = var8[var5];
                            var8 = undefined;
                            var5 = var7.bind(var8)(var5);
                            var7 = var5.FormDivider;
                            var5 = {};
                            var6 = var10.bind(var8)(var7, var5);
                        case 82:
                            var5 = new Array(2);
                            var5[0] = var6;
                            var8 = _closure1_slot6;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 10;
                            var6 = var13[var10];
                            var0 = undefined;
                            var6 = var11.bind(var0)(var6);
                            var7 = var6.FormRow;
                            var6 = {};
                            var14 = _closure2_slot4;
                            var14 = var14.reason;
                            var6.labelStyle = var14;
                            var10 = var13[var10];
                            var10 = var11.bind(var0)(var10);
                            var11 = var10.FormLabel;
                            var10 = {};
                            var12 = var12.label;
                            var10.text = var12;
                            var12 = 2;
                            var10.numberOfLines = var12;
                            var10 = var8.bind(var0)(var11, var10);
                            var6.label = var10;
                            var9 = function() {
                                var3 = _closure3_slot0;
                                var2 = {};
                                var4 = _closure2_slot7;
                                var5 = var2;
                                var0 = copyDataProperties(var5, var4);
                                var0 = 'reason';
                                var2[var0] = var3;
                                var3 = _closure2_slot8;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var6.onPress = var9;
                            var6 = var8.bind(var0)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var17 = var1.bind(var2)(var0);
                var0 = var15.rating;
                var14 = null;
                var0 = var14 != var0;
                var5 = null;
                if (!var0) {
                    _fun76968_ip = 533;
                    continue _fun76968
                }
            case 354:
                var1 = var15.rating;
                var0 = _closure1_slot5;
                var0 = var0.GOOD;
                var5 = null;
                if (!(var1 !== var0)) {
                    _fun76968_ip = 533;
                    continue _fun76968
                }
            case 379:
                var2 = _closure1_slot7;
                var0 = _closure1_slot4;
                var1 = var0.Fragment;
                var0 = {};
                var10 = _closure1_slot6;
                var8 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 11;
                var4 = var18[var4];
                var4 = var8.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var20 = var16.reasonsHeader;
                var4.style = var20;
                var4.children = var19;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = 12;
                var7 = var18[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Card;
                var7 = {};
                var18 = 'subtle';
                var7.border = var18;
                var18 = var16.reasonsList;
                var7.style = var18;
                var7.children = var17;
                var7 = var10.bind(var3)(var8, var7);
                var4[1] = var7;
                var0.children = var4;
                var5 = var2.bind(var3)(var1, var0);
            case 533:
                var2 = _closure1_slot7;
                var0 = _closure1_slot4;
                var1 = var0.Fragment;
                var0 = {};
                var4 = var14 != var13;
                var7 = null;
                if (!var4) {
                    _fun76968_ip = 623;
                    continue _fun76968
                }
            case 558:
                var10 = _closure1_slot6;
                var8 = _closure1_slot0;
                var17 = _closure1_slot2;
                var4 = 11;
                var4 = var17[var4];
                var4 = var8.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'text-default'
                };
                var17 = var16.ratingsLabel;
                var4.style = var17;
                var4.children = var13;
                var7 = var10.bind(var3)(var8, var4);
            case 623:
                var4 = new Array(4);
                var4[0] = var7;
                var10 = _closure1_slot6;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 13;
                var7 = var13[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var17 = var15.rating;
                var18 = var14 != var17;
                var13 = null;
                if (!var18) {
                    _fun76968_ip = 675;
                    continue _fun76968
                }
            case 672:
                var13 = var17;
            case 675:
                var7.selectedRating = var13;
                var12 = function arg0() {
                    _fun76975: for (var _fun76975_ip = 0;;) switch (_fun76975_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure1_slot5;
                            var0 = var0.GOOD;
                            var3 = null;
                            if (!(var4 !== var0)) {
                                _fun76975_ip = 35;
                                continue _fun76975
                            }
                        case 22:
                            var0 = _closure2_slot7;
                            var3 = var0.reason;
                        case 35:
                            var2 = {};
                            var5 = _closure2_slot7;
                            var6 = var2;
                            var0 = copyDataProperties(var6, var5);
                            var0 = 'rating';
                            var2[var0] = var4;
                            var0 = 'reason';
                            var2[var0] = var3;
                            var3 = _closure2_slot8;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var7.onChangeRating = var12;
                var7 = var10.bind(var3)(var8, var7);
                var4[1] = var7;
                var4[2] = var5;
                var5 = null;
                if (!var6) {
                    _fun76968_ip = 917;
                    continue _fun76968
                }
            case 714:
                var8 = _closure1_slot6;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 10;
                var6 = var12[var10];
                var6 = var13.bind(var3)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var16 = var16.doNotShowAgainContainer;
                var6.style = var16;
                var12 = var12[var10];
                var12 = var13.bind(var3)(var12);
                var12 = var12.FormRow;
                var13 = var12.Checkbox;
                var12 = {};
                var15 = var15.doNotShowAgain;
                var14 = var14 != var15;
                if (!var14) {
                    _fun76968_ip = 795;
                    continue _fun76968
                }
            case 792:
                var14 = var15;
            case 795:
                var12.selected = var14;
                var12 = var8.bind(var3)(var13, var12);
                var6.leading = var12;
                var12 = _closure1_slot6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var10 = var10.FormRow;
                var11 = var10.Label;
                var10 = {};
                var13 = 14;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["5E9SB9"];
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var10 = var12.bind(var3)(var11, var10);
                var6.label = var10;
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 917:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.FeedbackForm = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9798, 33, 1297, 671, 5358, 22, 9801, 4103, 5430, 3942, 4902, 9802, 1234, 2]);