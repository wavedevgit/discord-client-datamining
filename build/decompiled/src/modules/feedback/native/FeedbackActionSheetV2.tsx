// modules/feedback/native/FeedbackActionSheetV2.tsx
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
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
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
    var8.textAlign = var11;
    var3.ratingsBody = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginBottom = var9;
    var3.problemsList = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Original name: shuffleOptionsTree, environment: var1
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.shuffle;
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            _fun113021: for (var _fun113021_ip = 0;;) switch (_fun113021_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.shuffle;
                    var2 = var1.problemOptions;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.concat;
                    var1 = var1.freeformConfig;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun113021_ip = 78;
                        continue _fun113021
                    }
                case 74:
                    var1 = new Array(0);
                case 78:
                    var2 = var2.bind(var3)(var1);
                    var1 = 'problemOptions';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/FeedbackActionSheetV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FeedbackActionSheetV2, environment: var1
        _fun113022: for (var _fun113022_ip = 0;;) switch (_fun113022_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.headerLabel;
                var23 = var0.ratingBody;
                var22 = var0.ratingOptions;
                var12 = var0.showHeaderCloseButton;
                var2 = var0.hideDontShowAgainCheckbox;
                var6 = var0.categoriesHeader;
                var11 = var0.initialRating;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun113022_ip = 57;
                    continue _fun113022
                }
            case 55:
                var11 = null;
            case 57:
                var18 = var0.optionsTree;
                var _closure2_slot0 = var18;
                var4 = var0.onMount;
                var _closure2_slot1 = var4;
                var4 = var0.trackOpen;
                var _closure2_slot2 = var4;
                var0 = var0.trackReport;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var0 = _closure1_slot10;
                var10 = var0.bind(var3)();
                var14 = _closure1_slot4;
                var0 = var14.useRef;
                var9 = null;
                var8 = var0.bind(var14)(var9);
                _closure2_slot4 = var8;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var5 = var0.bind(var3)(var18);
                _closure2_slot5 = var5;
                var7 = var14.useState;
                var0 = _closure1_slot11;
                var0 = var0.bind(var3)(var18);
                var0 = var7.bind(var14)(var0);
                var7 = _closure1_slot3;
                var16 = 2;
                var15 = var7.bind(var3)(var0, var16);
                var0 = 0;
                var30 = var15[var0];
                _closure2_slot6 = var30;
                var13 = 1;
                var15 = var15[var13];
                _closure2_slot7 = var15;
                var17 = var14.useEffect;
                var15 = new Array(2);
                var15[0] = var18;
                var15[1] = var5;
                var5 = function() { // Environment: var20
                    _fun113023: for (var _fun113023_ip = 0;;) switch (_fun113023_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.isEqual;
                            var4 = _closure2_slot5;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var4, var2);
                            if (var2) {
                                _fun113023_ip = 73;
                                continue _fun113023
                            }
                        case 51:
                            var2 = _closure2_slot7;
                            var3 = _closure1_slot11;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var0)(var1);
                            var1 = var2.bind(var0)(var1);
                        case 73:
                            return var0;
                    }
                };
                var5 = var17.bind(var14)(var5, var15);
                var5 = var14.useState;
                var17 = false;
                var5 = var5.bind(var14)(var17);
                var5 = var7.bind(var3)(var5, var16);
                var21 = var5[var0];
                _closure2_slot8 = var21;
                var5 = var5[var13];
                _closure2_slot9 = var5;
                var5 = var14.useState;
                var5 = var5.bind(var14)(var11);
                var7 = var7.bind(var3)(var5, var16);
                var5 = var7[var0];
                _closure2_slot10 = var5;
                var7 = var7[var13];
                _closure2_slot11 = var7;
                var11 = var14.useState;
                var15 = var30.length;
                var7 = null;
                if (!(var13 === var15)) {
                    _fun113022_ip = 390;
                    continue _fun113022
                }
            case 386:
                var7 = var30[var0];
            case 390:
                var7 = var11.bind(var14)(var7);
                var14 = _closure1_slot3;
                var7 = var14.bind(var3)(var7, var16);
                var27 = var7[var0];
                _closure2_slot12 = var27;
                var7 = var7[var13];
                _closure2_slot13 = var7;
                var15 = _closure1_slot4;
                var7 = var15.useState;
                var7 = var7.bind(var15)(var9);
                var11 = var14.bind(var3)(var7, var16);
                var7 = var11[var0];
                _closure2_slot14 = var7;
                var11 = var11[var13];
                _closure2_slot15 = var11;
                var11 = var15.useState;
                var11 = var11.bind(var15)(var17);
                var11 = var14.bind(var3)(var11, var16);
                var14 = var11[var0];
                _closure2_slot16 = var14;
                var11 = var11[var13];
                _closure2_slot17 = var11;
                var16 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 10;
                var13 = var14[var11];
                var16 = var16.bind(var3)(var13);
                var13 = function() { // Environment: var20
                    _fun113024: for (var _fun113024_ip = 0;;) switch (_fun113024_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun113024_ip = 23;
                                continue _fun113024
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 23:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var13 = var16.bind(var3)(var13);
                var13 = _closure1_slot0;
                var11 = var14[var11];
                var14 = var13.bind(var3)(var11);
                var13 = var14.useUnmountEffect;
                var11 = function() { // Environment: var20
                    _fun113025: for (var _fun113025_ip = 0;;) switch (_fun113025_ip) {
                        case 0:
                            var0 = _closure2_slot16;
                            if (var0) {
                                _fun113025_ip = 105;
                                continue _fun113025
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = {};
                            var0 = _closure2_slot10;
                            var1.rating = var0;
                            var0 = _closure2_slot12;
                            var3 = null;
                            var6 = var3 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun113025_ip = 51;
                                continue _fun113025
                            }
                        case 42:
                            var6 = _closure2_slot12;
                            var4 = var6.value;
                        case 51:
                            var6 = var3 != var4;
                            var3 = null;
                            if (!var6) {
                                _fun113025_ip = 63;
                                continue _fun113025
                            }
                        case 60:
                            var3 = var4;
                        case 63:
                            var1.category = var3;
                            var3 = _closure2_slot14;
                            var1.reason = var3;
                            var3 = _closure2_slot8;
                            var1.dontShowAgain = var3;
                            var3 = '';
                            var1.feedback = var3;
                            var0 = var2.bind(var0)(var1);
                            _fun113025_ip = 386;
                            continue _fun113025;
                        case 105:
                            var2 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var1 = 11;
                            var1 = var0[var1];
                            var7 = undefined;
                            var3 = var2.bind(var7)(var1);
                            var2 = var3.pushLazy;
                            var6 = _closure1_slot0;
                            var1 = 13;
                            var1 = var0[var1];
                            var6 = var6.bind(var7)(var1);
                            var1 = 12;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var1 = var6.bind(var7)(var1, var0);
                            var0 = {};
                            var8 = {};
                            var6 = _closure2_slot10;
                            var8.rating = var6;
                            var9 = _closure2_slot12;
                            var6 = null;
                            var10 = var6 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun113025_ip = 207;
                                continue _fun113025
                            }
                        case 198:
                            var10 = _closure2_slot12;
                            var9 = var10.value;
                        case 207:
                            var8.category = var9;
                            var9 = _closure2_slot14;
                            var8.reason = var9;
                            var9 = _closure2_slot8;
                            var8.dontShowAgain = var9;
                            var0.result = var8;
                            var8 = function(arg0) { // Original name: trackReport, environment: var8
                                _fun113026: for (var _fun113026_ip = 0;;) switch (_fun113026_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = _closure2_slot3;
                                        var1 = {};
                                        var3 = var0.rating;
                                        var1.rating = var3;
                                        var3 = var0.category;
                                        var1.category = var3;
                                        var3 = var0.reason;
                                        var1.reason = var3;
                                        var3 = var0.dontShowAgain;
                                        var1.dontShowAgain = var3;
                                        var3 = var0.feedback;
                                        var0 = null;
                                        var4 = var0 != var3;
                                        var0 = '';
                                        if (!var4) {
                                            _fun113026_ip = 78;
                                            continue _fun113026
                                        }
                                    case 75:
                                        var0 = var3;
                                    case 78:
                                        var1.feedback = var0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0.trackReport = var8;
                            var8 = _closure2_slot12;
                            var9 = var6 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun113025_ip = 272;
                                continue _fun113025
                            }
                        case 262:
                            var9 = _closure2_slot12;
                            var8 = var9.problemsHeader;
                        case 272:
                            var0.titleLabel = var8;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 14;
                            var8 = var11[var4];
                            var8 = var10.bind(var7)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var4 = var11[var4];
                            var4 = var10.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.h95hcn;
                            var4 = var8.bind(var9)(var4);
                            var0.descriptionLabel = var4;
                            var4 = _closure2_slot12;
                            var8 = var6 == var4;
                            var4 = undefined;
                            if (var8) {
                                _fun113025_ip = 375;
                                continue _fun113025
                            }
                        case 350:
                            var5 = _closure2_slot12;
                            var5 = var5.freeformConfig;
                            var6 = var6 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun113025_ip = 375;
                                continue _fun113025
                            }
                        case 369:
                            var4 = var5.hideHelpdeskLink;
                        case 375:
                            var0.hideHelpdeskLink = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 386:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var13.bind(var14)(var11);
                var14 = var15.useCallback;
                var13 = function(arg0) { // Environment: var20
                    _fun113027: for (var _fun113027_ip = 0;;) switch (_fun113027_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot11;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var3 = _closure1_slot6;
                            var3 = var3.GOOD;
                            if (!(var4 !== var3)) {
                                _fun113027_ip = 61;
                                continue _fun113027
                            }
                        case 34:
                            var3 = _closure2_slot4;
                            var4 = var3.current;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun113027_ip = 100;
                                continue _fun113027
                            }
                        case 49:
                            var3 = var4.expandActionSheet;
                            var3 = var3.bind(var4)();
                            _fun113027_ip = 100;
                            continue _fun113027;
                        case 61:
                            var3 = _closure2_slot13;
                            var4 = null;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure2_slot15;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure2_slot17;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure1_slot12;
                            var1 = var1.bind(var0)();
                        case 100:
                            return var0;
                    }
                };
                var11 = new Array(0);
                var19 = var14.bind(var15)(var13, var11);
                var14 = var15.useCallback;
                var13 = function(arg0) { // Environment: var20
                    _fun113028: for (var _fun113028_ip = 0;;) switch (_fun113028_ip) {
                        case 0:
                            var3 = _closure2_slot13;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var0)(var1);
                            var3 = _closure2_slot15;
                            var1 = null;
                            var3 = var3.bind(var0)(var1);
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun113028_ip = 51;
                                continue _fun113028
                            }
                        case 41:
                            var1 = var2.expandActionSheet;
                            var1 = var1.bind(var2)();
                        case 51:
                            return var0;
                    }
                };
                var11 = new Array(0);
                var11 = var14.bind(var15)(var13, var11);
                _closure2_slot18 = var11;
                var14 = var15.useCallback;
                var13 = new Array(1);
                var13[0] = var27;
                var11 = function(arg0) { // Environment: var20
                    _fun113029: for (var _fun113029_ip = 0;;) switch (_fun113029_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot15;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot12;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun113029_ip = 64;
                                continue _fun113029
                            }
                        case 27:
                            if (!(var3 != var2)) {
                                _fun113029_ip = 64;
                                continue _fun113029
                            }
                        case 31:
                            var4 = _closure2_slot12;
                            var4 = var4.freeformConfig;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun113029_ip = 55;
                                continue _fun113029
                            }
                        case 50:
                            var3 = var4.value;
                        case 55:
                            var2 = var2.value;
                            if (!(var3 !== var2)) {
                                _fun113029_ip = 77;
                                continue _fun113029
                            }
                        case 64:
                            var3 = _closure2_slot17;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            _fun113029_ip = 88;
                            continue _fun113029;
                        case 77:
                            var2 = _closure2_slot17;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                        case 88:
                            var1 = _closure1_slot12;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var11 = var14.bind(var15)(var11, var13);
                _closure2_slot19 = var11;
                if (!(var9 != var5)) {
                    _fun113022_ip = 1139;
                    continue _fun113022
                }
            case 637:
                var11 = _closure1_slot6;
                var11 = var11.GOOD;
                if (!(var5 !== var11)) {
                    _fun113022_ip = 658;
                    continue _fun113022
                }
            case 651:
                if (!(var9 != var27)) {
                    _fun113022_ip = 914;
                    continue _fun113022
                }
            case 658:
                var11 = var9 != var27;
                if (!var11) {
                    _fun113022_ip = 669;
                    continue _fun113022
                }
            case 665:
                var11 = var9 == var7;
            case 669:
                var7 = undefined;
                var13 = var1;
                if (!var11) {
                    _fun113022_ip = 1417;
                    continue _fun113022
                }
            case 680:
                var13 = var27.problemsHeader;
                var16 = _closure1_slot9;
                var15 = _closure1_slot8;
                var14 = {};
                var25 = _closure1_slot7;
                var18 = _closure1_slot5;
                var17 = {};
                var24 = var10.problemsList;
                var17.style = var24;
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var24 = 18;
                var24 = var31[var24];
                var24 = var29.bind(var3)(var24);
                var26 = var24.TableRowGroup;
                var24 = {};
                var32 = var27.problemOptions;
                var28 = var32.map;
                var27 = function(arg0, arg1) { // Environment: var20
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var5 = var5.label;
                    var1.label = var5;
                    var5 = 2;
                    var1.labelLineClamp = var5;
                    var0 = function() { // Original name: onPress, environment: var0
                        var2 = _closure2_slot19;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var27 = var28.bind(var32)(var27);
                var24.children = var27;
                var24 = var25.bind(var3)(var26, var24);
                var17.children = var24;
                var18 = var25.bind(var3)(var18, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = 20;
                var18 = var31[var18];
                var18 = var29.bind(var3)(var18);
                var24 = var18.Button;
                var18 = {
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var26 = 14;
                var27 = var31[var26];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var31[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["13/7kX"];
                var26 = var27.bind(var28)(var26);
                var18.text = var26;
                var26 = function() { // Original name: onPress, environment: var20
                    _fun113036: for (var _fun113036_ip = 0;;) switch (_fun113036_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var2 = var0.length;
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun113036_ip = 34;
                                continue _fun113036
                            }
                        case 19:
                            var3 = _closure2_slot13;
                            var2 = undefined;
                            var0 = null;
                            var0 = var3.bind(var2)(var0);
                            _fun113036_ip = 47;
                            continue _fun113036;
                        case 34:
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var1 = null;
                            var0 = var3.bind(var2)(var1);
                        case 47:
                            return var0;
                    }
                };
                var18.onPress = var26;
                var18 = var25.bind(var3)(var24, var18);
                var17[1] = var18;
                var14.children = var17;
                var7 = var16.bind(var3)(var15, var14);
                _fun113022_ip = 1417;
                continue _fun113022;
            case 914:
                var15 = _closure1_slot9;
                var14 = _closure1_slot8;
                var11 = {};
                var24 = _closure1_slot7;
                var17 = _closure1_slot5;
                var16 = {};
                var18 = var10.problemsList;
                var16.style = var18;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var18 = 18;
                var18 = var29[var18];
                var18 = var28.bind(var3)(var18);
                var25 = var18.TableRowGroup;
                var18 = {};
                var27 = var30.map;
                var26 = function(arg0, arg1) { // Environment: var20
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var5 = var5.label;
                    var1.label = var5;
                    var5 = 2;
                    var1.labelLineClamp = var5;
                    var0 = function() { // Original name: onPress, environment: var0
                        var2 = _closure2_slot18;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var26 = var27.bind(var30)(var26);
                var18.children = var26;
                var18 = var24.bind(var3)(var25, var18);
                var16.children = var18;
                var17 = var24.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 20;
                var17 = var29[var17];
                var17 = var28.bind(var3)(var17);
                var18 = var17.Button;
                var17 = {
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var25 = 14;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["13/7kX"];
                var25 = var26.bind(var27)(var25);
                var17.text = var25;
                var25 = function() { // Original name: onPress, environment: var20
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var0 = null;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var17.onPress = var25;
                var17 = var24.bind(var3)(var18, var17);
                var16[1] = var17;
                var11.children = var16;
                var7 = var15.bind(var3)(var14, var11);
                var13 = var6;
                _fun113022_ip = 1417;
                continue _fun113022;
            case 1139:
                var14 = _closure1_slot9;
                var11 = _closure1_slot8;
                var6 = {};
                var15 = var9 != var23;
                var16 = null;
                if (!var15) {
                    _fun113022_ip = 1223;
                    continue _fun113022
                }
            case 1158:
                var18 = _closure1_slot7;
                var17 = _closure1_slot0;
                var24 = _closure1_slot2;
                var15 = 15;
                var15 = var24[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var24 = var10.ratingsBody;
                var15.style = var24;
                var15.children = var23;
                var16 = var18.bind(var3)(var17, var15);
            case 1223:
                var15 = new Array(3);
                var15[0] = var16;
                var18 = _closure1_slot7;
                var17 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 16;
                var16 = var23[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.ratingOptions = var22;
                var16.selectedRating = var5;
                var16.onChangeRating = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var16 = null;
                if (var2) {
                    _fun113022_ip = 1400;
                    continue _fun113022
                }
            case 1287:
                var19 = _closure1_slot7;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var17 = 17;
                var17 = var25[var17];
                var17 = var24.bind(var3)(var17);
                var18 = var17.TableCheckboxRow;
                var17 = {
                    'start': true,
                    'end': true
                };
                var17.checked = var21;
                var21 = 14;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["5E9SB9"];
                var21 = var22.bind(var23)(var21);
                var17.label = var21;
                var20 = function() { // Original name: onPress, environment: var20
                    var2 = _closure2_slot9;
                    var0 = _closure2_slot8;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var17.onPress = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1400:
                var15[2] = var16;
                var6.children = var15;
                var7 = var14.bind(var3)(var11, var6);
                var13 = var1;
            case 1417:
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 21;
                var1 = var11[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var11 = var1.bottom;
                var1 = 48;
                if (!var2) {
                    _fun113022_ip = 1454;
                    continue _fun113022
                }
            case 1452:
                var1 = 0;
            case 1454:
                var0 = 232;
                var0 = var0 + var1;
                var6 = var0 + var11;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 22;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var14 = true;
                var0.scrollable = var14;
                var0.ref = var8;
                var0.startHeight = var6;
                var8 = var9 == var5;
                var5 = undefined;
                if (!var8) {
                    _fun113022_ip = 1525;
                    continue _fun113022
                }
            case 1522:
                var5 = var6;
            case 1525:
                var0.maxHeight = var5;
                var8 = _closure1_slot7;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 23;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var5.title = var13;
                var9 = null;
                if (!var12) {
                    _fun113022_ip = 1617;
                    continue _fun113022
                }
            case 1571:
                var14 = _closure1_slot7;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 24;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.ActionSheetCloseButton;
                var12 = {};
                var15 = _closure1_slot12;
                var12.onPress = var15;
                var9 = var14.bind(var3)(var13, var12);
            case 1617:
                var5.trailing = var9;
                var5 = var8.bind(var3)(var6, var5);
                var0.header = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 25;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var9 = var10.container;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var10.container;
                var10 = var10.padding;
                var10 = var10 + var11;
                var9.paddingBottom = var10;
                var8[1] = var9;
                var4.contentContainerStyle = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9672, 33, 1297, 671, 3237, 22, 5268, 4062, 4525, 9694, 1307, 1234, 3900, 9676, 8732, 5325, 4861, 4043, 1568, 4894, 5174, 5172, 4896, 2]);