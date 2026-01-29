// modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'flex': 1,
        'paddingHorizontal': 16
    };
    var3.container = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.detailsAction = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppealIngestionConfirmSubmission, environment: var1
        _fun79478: for (var _fun79478_ip = 0;;) switch (_fun79478_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.isDsaEligible;
                var0 = _closure1_slot8;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 6;
                var0 = var4[var5];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var1 = _closure1_slot4;
                    var0 = var1.getAppealClassificationId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var0);
                var0 = 7;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useSafetyHubClassification;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun79478_ip = 102;
                    continue _fun79478
                }
            case 98:
                var1 = _closure1_slot5;
            case 102:
                var11 = var2.bind(var4)(var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = var2[var5];
                var12 = var4.bind(var3)(var1);
                var10 = var12.useStateFromStores;
                var1 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var1;
                var6 = function() { // Environment: var16
                    var1 = _closure1_slot4;
                    var0 = var1.getAppealSignal;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var10.bind(var12)(var7, var6);
                var2 = var2[var5];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var16
                    var1 = _closure1_slot4;
                    var0 = var1.getFreeTextAppealReason;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var4.bind(var5)(var2, var1);
                var1 = var11.classification;
                var2 = var0 == var1;
                var14 = undefined;
                if (var2) {
                    _fun79478_ip = 210;
                    continue _fun79478
                }
            case 204:
                var14 = var1.flagged_content;
            case 210:
                if (!(var0 == var14)) {
                    _fun79478_ip = 218;
                    continue _fun79478
                }
            case 214:
                var14 = new Array(0);
            case 218:
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var20 = 8;
                var0 = var21[var20];
                var0 = var18.bind(var3)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var0 = var21[var20];
                var0 = var18.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["C5q+pW"];
                var7 = var1.bind(var2)(var0);
                var0 = var21[var20];
                var0 = var18.bind(var3)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var0 = var21[var20];
                var0 = var18.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["G2g/g5"];
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var4 = 9;
                var0 = var21[var4];
                var0 = var18.bind(var3)(var0);
                var1 = var0.AppealIngestionModalScreen;
                var0 = {};
                var12 = _closure1_slot6;
                var4 = var21[var4];
                var4 = var18.bind(var3)(var4);
                var5 = var4.AppealIngestionModalHeader;
                var4 = {};
                var4.headerText = var7;
                var4.subHeaderText = var6;
                var5 = var12.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var7 = var17.container;
                var5.style = var7;
                var10 = _closure1_slot1;
                var7 = 10;
                var7 = var21[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var13 = 11;
                var13 = var21[var13];
                var18 = var18.bind(var3)(var13);
                var13 = var18.getAppealSignalDisplayText;
                var13 = var13.bind(var18)(var19);
                var19 = new Array(2);
                var19[0] = var13;
                var19[1] = var15;
                var18 = var19.filter;
                var13 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var13 = var18.bind(var19)(var13);
                var7.reasons = var13;
                var10 = var12.bind(var3)(var10, var7);
                var7 = new Array(4);
                var7[0] = var10;
                if (!var9) {
                    _fun79478_ip = 689;
                    continue _fun79478
                }
            case 498:
                var13 = _closure1_slot6;
                var12 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 12;
                var10 = var18[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.Text;
                var10 = {
                    'variant': 'heading-md/normal',
                    'color': 'text-link'
                };
                var17 = var17.detailsAction;
                var10.style = var17;
                var16 = function() { // Original name: onPress, environment: var16
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 13;
                    var3 = var1[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 15;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 14;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = {};
                    var5 = function(arg0) { // Original name: onSave, environment: var0
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 16;
                        var1 = var3[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.dispatch;
                        var1 = {};
                        var6 = 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE';
                        var1.type = var6;
                        var6 = arg0;
                        var1.userInput = var6;
                        var1 = var4.bind(var5)(var1);
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.hideActionSheet;
                        var1 = 'AppealIngestionFreeTextAppealReasonActionSheet';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onSave = var5;
                    var0 = function() { // Original name: onClose, environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var0 = 'AppealIngestionFreeTextAppealReasonActionSheet';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.onClose = var0;
                    var0 = 'AppealIngestionFreeTextAppealReasonActionSheet';
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var10.onPress = var16;
                var16 = var15.length;
                var15 = 0;
                if (!(!(var16 > var15))) {
                    _fun79478_ip = 627;
                    continue _fun79478
                }
            case 573:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var20];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var20];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.uoQFIp;
                var15 = var16.bind(var17)(var15);
                _fun79478_ip = 679;
                continue _fun79478;
            case 627:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.tnE3bZ;
                var15 = var17.bind(var18)(var16);
            case 679:
                var10.children = var15;
                var9 = var13.bind(var3)(var12, var10);
            case 689:
                var7[1] = var9;
                var10 = var14.length;
                var9 = 0;
                var9 = var10 > var9;
                if (!var9) {
                    _fun79478_ip = 744;
                    continue _fun79478
                }
            case 707:
                var13 = _closure1_slot6;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 17;
                var10 = var15[var10];
                var12 = var12.bind(var3)(var10);
                var10 = {};
                var10.flaggedContent = var14;
                var9 = var13.bind(var3)(var12, var10);
            case 744:
                var7[2] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 18;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var11 = var11.classification;
                var8.classification = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10046, 660, 33, 1297, 566, 10052, 1234, 10062, 10071, 5898, 3895, 3237, 10069, 1307, 806, 10065, 10066, 2]);