// modules/safety_hub/native/AppealIngestionSpeedBump.tsx
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
    var6 = var3.SafetyHubAnalyticsActions;
    var _closure1_slot5 = var6;
    var3 = var3.SafetyHubLinks;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = 16;
    var9 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'paddingHorizontal': 16
    };
    var6.container = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionSpeedBump.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80543: for (var _fun80543_ip = 0;;) switch (_fun80543_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.isCoppa;
                var11 = var0.isSpam;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot10;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var6 = var2.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure1_slot4;
                    var0 = var1.getAppealClassificationId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var0);
                var0 = 8;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useSafetyHubClassification;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun80543_ip = 112;
                    continue _fun80543
                }
            case 108:
                var1 = _closure1_slot7;
            case 112:
                var18 = var2.bind(var4)(var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useEmitAppealIngestionEvent;
                var1 = var1.bind(var2)();
                _closure2_slot0 = var1;
                var8 = var18.isDsaEligible;
                var2 = var18.classification;
                var4 = var0 == var2;
                var1 = undefined;
                if (var4) {
                    _fun80543_ip = 178;
                    continue _fun80543
                }
            case 172:
                var1 = var2.explainer_link;
            case 178:
                var2 = var0 != var1;
                var15 = '';
                if (!var2) {
                    _fun80543_ip = 192;
                    continue _fun80543
                }
            case 189:
                var15 = var1;
            case 192:
                var1 = var18.classification;
                var2 = var0 == var1;
                var19 = undefined;
                if (var2) {
                    _fun80543_ip = 213;
                    continue _fun80543
                }
            case 207:
                var19 = var1.flagged_content;
            case 213:
                if (!(var0 == var19)) {
                    _fun80543_ip = 221;
                    continue _fun80543
                }
            case 217:
                var19 = new Array(0);
            case 221:
                var5 = _closure1_slot0;
                var17 = _closure1_slot2;
                var16 = 10;
                var0 = var17[var16];
                var0 = var5.bind(var3)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var0 = var17[var16];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["C5q+pW"];
                var13 = var1.bind(var2)(var0);
                var0 = var17[var16];
                var0 = var5.bind(var3)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var0 = var17[var16];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.URt7VI;
                var12 = var1.bind(var2)(var0);
                var2 = _closure1_slot9;
                var4 = 11;
                var0 = var17[var4];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AppealIngestionModalScreen;
                var0 = {};
                var6 = _closure1_slot8;
                var4 = var17[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.AppealIngestionModalHeader;
                var4 = {};
                var4.headerText = var13;
                var4.subHeaderText = var12;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var7 = var7.container;
                var5.style = var7;
                var12 = var19.length;
                var7 = 0;
                var12 = var12 > var7;
                if (!var12) {
                    _fun80543_ip = 457;
                    continue _fun80543
                }
            case 420:
                var17 = _closure1_slot8;
                var13 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 12;
                var7 = var20[var7];
                var13 = var13.bind(var3)(var7);
                var7 = {};
                var7.flaggedContent = var19;
                var12 = var17.bind(var3)(var13, var7);
            case 457:
                var7 = new Array(6);
                var7[0] = var12;
                var17 = _closure1_slot8;
                var13 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 13;
                var12 = var19[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var18 = var18.classification;
                var12.classification = var18;
                var12 = var17.bind(var3)(var13, var12);
                var7[1] = var12;
                var12 = var10;
                if (!var12) {
                    _fun80543_ip = 629;
                    continue _fun80543
                }
            case 518:
                var18 = _closure1_slot8;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = 14;
                var13 = var19[var13];
                var17 = var17.bind(var3)(var13);
                var13 = {};
                var22 = _closure1_slot0;
                var20 = var19[var16];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var16];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["gJs+kf"];
                var19 = var20.bind(var21)(var19);
                var13.text = var19;
                var19 = _closure1_slot6;
                var19 = var19.AGE_VERIFICATION_LINK;
                var13.url = var19;
                var19 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot5;
                    var1 = var0.ClickAgeVerificationLink;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onPress = var19;
                var12 = var18.bind(var3)(var17, var13);
            case 629:
                var7[2] = var12;
                if (!var11) {
                    _fun80543_ip = 639;
                    continue _fun80543
                }
            case 636:
                var11 = !var10;
            case 639:
                if (!var11) {
                    _fun80543_ip = 753;
                    continue _fun80543
                }
            case 642:
                var17 = _closure1_slot8;
                var13 = _closure1_slot1;
                var18 = _closure1_slot2;
                var12 = 14;
                var12 = var18[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var21 = _closure1_slot0;
                var19 = var18[var16];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var16];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.NBsJvm;
                var18 = var19.bind(var20)(var18);
                var12.text = var18;
                var18 = _closure1_slot6;
                var18 = var18.SPAM_LINK;
                var12.url = var18;
                var18 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot5;
                    var1 = var0.ClickSpamWebformLink;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var18;
                var11 = var17.bind(var3)(var13, var12);
            case 753:
                var7[3] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun80543_ip = 864;
                    continue _fun80543
                }
            case 763:
                var13 = _closure1_slot8;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var11 = 14;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var20 = _closure1_slot0;
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var16];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["Vtyn/7"];
                var17 = var18.bind(var19)(var17);
                var11.text = var17;
                var11.url = var15;
                var14 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot5;
                    var1 = var0.ClickLearnMoreLink;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 864:
                var7[4] = var10;
                if (!var8) {
                    _fun80543_ip = 972;
                    continue _fun80543
                }
            case 871:
                var11 = _closure1_slot8;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 15;
                var9 = var12[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TextWithIOSLinkWorkaround;
                var9 = {};
                var14 = 'text-xs/normal';
                var9.variant = var14;
                var14 = var12[var16];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var12 = var12[var16];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.WMUgCX;
                var12 = {};
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 972:
                var7[5] = var8;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10224, 5992, 660, 33, 1297, 566, 10230, 10242, 1234, 10240, 10243, 10244, 10245, 5384, 2]);