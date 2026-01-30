// modules/safety_hub/native/AppealIngestionModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: getHeader, environment: var1
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 10;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {};
        var4 = 'text-md/normal';
        var0.variant = var4;
        var0.children = var2;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.APPEAL_INGESTION_IMPRESSION_PROPERTIES;
    var _closure1_slot9 = var6;
    var3 = var3.AppealIngestionSections;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = var6;
    var9 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var10;
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {};
    var12 = 14;
    var8.fontSize = var12;
    var9 = var9.PRIMARY_SEMIBOLD;
    var8.fontFamily = var9;
    var3.buttonTextStyles = var8;
    var9 = 16;
    var8 = {
        'alignSelf': 'stretch',
        'marginTop': 16,
        'marginBottom': 8,
        'paddingHorizontal': 16
    };
    var3.headerContainer = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'lineHeight': 20,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.subheader = var8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.description = var8;
    var8 = {
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 24
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var8.backgroundColor = var10;
    var3.separator = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.footerContainer = var8;
    var8 = {
        'marginBottom': 16,
        'textAlign': 'center'
    };
    var3.footerText = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.footerButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionModal.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: AppealIngestionModal, environment: var1
        _fun79468: for (var _fun79468_ip = 0;;) switch (_fun79468_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.classificationId;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 12;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSafetyHubClassification;
                var2 = var1.bind(var2)(var4);
                var1 = var2.isDsaEligible;
                var _closure2_slot0 = var1;
                var6 = var2.classification;
                var1 = null;
                var7 = var1 == var6;
                var4 = undefined;
                if (var7) {
                    _fun79468_ip = 88;
                    continue _fun79468
                }
            case 82:
                var4 = var6.is_spam;
            case 88:
                if (var4) {
                    _fun79468_ip = 93;
                    continue _fun79468
                }
            case 91:
                var4 = false;
            case 93:
                _closure2_slot1 = var4;
                var2 = var2.classification;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun79468_ip = 118;
                    continue _fun79468
                }
            case 112:
                var1 = var2.is_coppa;
            case 118:
                if (var1) {
                    _fun79468_ip = 123;
                    continue _fun79468
                }
            case 121:
                var1 = false;
            case 123:
                _closure2_slot2 = var1;
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 29;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = function(arg0, arg1, arg2) { // Original name: getScreens, environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = arg2;
                        var _closure4_slot2 = var0;
                        var0 = {};
                        var1 = _closure1_slot10;
                        var11 = var1.SPEED_BUMP;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var10 = 21;
                        var4 = var7[var10];
                        var5 = undefined;
                        var14 = var6.bind(var5)(var4);
                        var13 = var14.getHeaderCloseButton;
                        var12 = _closure1_slot1;
                        var9 = 15;
                        var4 = var7[var9];
                        var4 = var12.bind(var5)(var4);
                        var4 = var4.close;
                        var4 = var13.bind(var14)(var4);
                        var2.headerLeft = var4;
                        var4 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var2.headerTitle = var4;
                        var4 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 22;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = _closure4_slot0;
                            var0.isDsaEligible = var5;
                            var5 = _closure4_slot1;
                            var0.isSpam = var5;
                            var4 = _closure4_slot2;
                            var0.isCoppa = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var4;
                        var4 = 23;
                        var13 = var7[var4];
                        var13 = var6.bind(var5)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.APPEAL_INGESTION_SPEED_BUMP;
                        var2.impressionName = var13;
                        var3 = _closure1_slot9;
                        var2.impressionProperties = var3;
                        var0[var11] = var2;
                        var11 = var1.COLLECT_SIGNAL;
                        var2 = {};
                        var13 = var7[var10];
                        var14 = var6.bind(var5)(var13);
                        var13 = var14.getHeaderBackButton;
                        var13 = var13.bind(var14)();
                        var2.headerLeft = var13;
                        var13 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var2.headerTitle = var13;
                        var13 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 24;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.isDsaEligible = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var13;
                        var13 = var7[var4];
                        var13 = var6.bind(var5)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.APPEAL_INGESTION_COLLECT_SIGNAL;
                        var2.impressionName = var13;
                        var2.impressionProperties = var3;
                        var0[var11] = var2;
                        var11 = var1.CONFIRM_SUBMISSION;
                        var2 = {};
                        var13 = var7[var10];
                        var14 = var6.bind(var5)(var13);
                        var13 = var14.getHeaderBackButton;
                        var13 = var13.bind(var14)();
                        var2.headerLeft = var13;
                        var13 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var2.headerTitle = var13;
                        var13 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 25;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.isDsaEligible = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var13;
                        var13 = var7[var4];
                        var13 = var6.bind(var5)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.APPEAL_INGESTION_CONFIRM_SUBMISSION;
                        var2.impressionName = var13;
                        var2.impressionProperties = var3;
                        var0[var11] = var2;
                        var11 = var1.REQUEST_SENT;
                        var2 = {};
                        var13 = var7[var10];
                        var15 = var6.bind(var5)(var13);
                        var14 = var15.getHeaderCloseButton;
                        var13 = var7[var9];
                        var13 = var12.bind(var5)(var13);
                        var13 = var13.close;
                        var13 = var14.bind(var15)(var13);
                        var2.headerLeft = var13;
                        var13 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var2.headerTitle = var13;
                        var13 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 26;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var13;
                        var13 = var7[var4];
                        var13 = var6.bind(var5)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.APPEAL_INGESTION_REQUEST_SENT;
                        var2.impressionName = var13;
                        var2.impressionProperties = var3;
                        var0[var11] = var2;
                        var11 = var1.THANKS;
                        var2 = {};
                        var13 = var7[var10];
                        var15 = var6.bind(var5)(var13);
                        var14 = var15.getHeaderCloseButton;
                        var13 = var7[var9];
                        var13 = var12.bind(var5)(var13);
                        var13 = var13.close;
                        var13 = var14.bind(var15)(var13);
                        var2.headerLeft = var13;
                        var13 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var2.headerTitle = var13;
                        var13 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 27;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var13;
                        var13 = var7[var4];
                        var13 = var6.bind(var5)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.APPEAL_INGESTION_THANKS;
                        var2.impressionName = var13;
                        var2.impressionProperties = var3;
                        var0[var11] = var2;
                        var2 = var1.SPAM;
                        var1 = {};
                        var10 = var7[var10];
                        var11 = var6.bind(var5)(var10);
                        var10 = var11.getHeaderCloseButton;
                        var9 = var7[var9];
                        var9 = var12.bind(var5)(var9);
                        var9 = var9.close;
                        var9 = var10.bind(var11)(var9);
                        var1.headerLeft = var9;
                        var9 = function() { // Original name: headerTitle, environment: var8
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var1.headerTitle = var9;
                        var8 = function() { // Original name: render, environment: var8
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 28;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.render = var8;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.ImpressionNames;
                        var4 = var4.APPEAL_INGESTION_SPAM;
                        var1.impressionName = var4;
                        var1.impressionProperties = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var4, var3, var2);
                    return var0;
                };
                var4 = var1.bind(var3)(var0);
                var2 = _closure1_slot12;
                var7 = _closure1_slot0;
                var0 = 30;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var5 = _closure1_slot10;
                var5 = var5.SPEED_BUMP;
                var0.initialRouteName = var5;
                var0.screens = var4;
                var4 = 19;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["13/7kX"];
                var4 = var5.bind(var6)(var4);
                var0.headerBackTitle = var4;
                var4 = 'center';
                var0.headerTitleAlign = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function(arg0) { // Original name: AppealIngestionModalHeader, environment: var1
        _fun79483: for (var _fun79483_ip = 0;;) switch (_fun79483_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.headerText;
                var9 = var0.subHeaderText;
                var0 = _closure1_slot15;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var10.headerContainer;
                var0.style = var4;
                var8 = null;
                var5 = var8 != var12;
                if (!var5) {
                    _fun79483_ip = 65;
                    continue _fun79483
                }
            case 57:
                var4 = '';
                var5 = var4 !== var12;
            case 65:
                if (!var5) {
                    _fun79483_ip = 132;
                    continue _fun79483
                }
            case 68:
                var11 = _closure1_slot12;
                var7 = _closure1_slot0;
                var13 = _closure1_slot3;
                var4 = 10;
                var4 = var13[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var13 = var10.header;
                var4.style = var13;
                var4.children = var12;
                var5 = var11.bind(var3)(var7, var4);
            case 132:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = var8 != var9;
                var5 = null;
                if (!var7) {
                    _fun79483_ip = 230;
                    continue _fun79483
                }
            case 149:
                var11 = var9.length;
                var7 = 0;
                var7 = var11 > var7;
                var5 = null;
                if (!var7) {
                    _fun79483_ip = 230;
                    continue _fun79483
                }
            case 165:
                var8 = _closure1_slot12;
                var7 = _closure1_slot0;
                var11 = _closure1_slot3;
                var6 = 10;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var10 = var10.subheader;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 230:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AppealIngestionModalHeader = var3;
    var1 = function(arg0) { // Original name: AppealIngestionModalScreen, environment: var1
        _fun79484: for (var _fun79484_ip = 0;;) switch (_fun79484_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.children;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot15;
                var25 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var9 = 11;
                var1 = var4[var9];
                var10 = var2.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var7 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var7;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getIsSubmitting;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var8.bind(var10)(var6, var1);
                var1 = 12;
                var6 = var4[var1];
                var8 = var2.bind(var3)(var6);
                var6 = var8.useSafetyHubAppealSignal;
                var8 = var6.bind(var8)();
                var _closure2_slot0 = var8;
                var6 = var4[var9];
                var12 = var2.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var10 = new Array(1);
                var10[0] = var7;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getFreeTextAppealReason;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var11.bind(var12)(var10, var6);
                var _closure2_slot1 = var6;
                var9 = var4[var9];
                var11 = var2.bind(var3)(var9);
                var10 = var11.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getAppealClassificationId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var7);
                var _closure2_slot2 = var9;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var4 = var7.useSafetyHubClassification;
                var2 = null;
                var1 = var9;
                if (!(var2 == var1)) {
                    _fun79484_ip = 225;
                    continue _fun79484
                }
            case 221:
                var1 = _closure1_slot11;
            case 225:
                var1 = var4.bind(var7)(var1);
                var7 = var1.classification;
                var10 = var2 == var7;
                var4 = undefined;
                if (var10) {
                    _fun79484_ip = 251;
                    continue _fun79484
                }
            case 245:
                var4 = var7.is_spam;
            case 251:
                if (var4) {
                    _fun79484_ip = 256;
                    continue _fun79484
                }
            case 254:
                var4 = false;
            case 256:
                var10 = var1.classification;
                var11 = var2 == var10;
                var7 = undefined;
                if (var11) {
                    _fun79484_ip = 277;
                    continue _fun79484
                }
            case 271:
                var7 = var10.is_coppa;
            case 277:
                if (var7) {
                    _fun79484_ip = 282;
                    continue _fun79484
                }
            case 280:
                var7 = false;
            case 282:
                var1 = var1.classification;
                var10 = var2 == var1;
                var11 = undefined;
                if (var10) {
                    _fun79484_ip = 305;
                    continue _fun79484
                }
            case 297:
                var11 = var1.appeal_ingestion_type;
            case 305:
                var10 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 13;
                var1 = var12[var1];
                var10 = var10.bind(var3)(var1);
                var1 = var10.useNavigation;
                var1 = var1.bind(var10)();
                _closure2_slot3 = var1;
                var2 = var2 != var11;
                if (!var2) {
                    _fun79484_ip = 382;
                    continue _fun79484
                }
            case 346:
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var10 = 14;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.AppealIngestionType;
                var10 = var10.IN_APP;
                var2 = var11 !== var10;
            case 382:
                if (var2) {
                    _fun79484_ip = 388;
                    continue _fun79484
                }
            case 385:
                var2 = var7;
            case 388:
                if (var2) {
                    _fun79484_ip = 394;
                    continue _fun79484
                }
            case 391:
                var2 = var4;
            case 394:
                var7 = !var2;
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var16 = '';
                var2 = var2.bind(var4)(var16);
                var13 = _closure1_slot5;
                var12 = 2;
                var2 = var13.bind(var3)(var2, var12);
                var11 = 0;
                var21 = var2[var11];
                var10 = 1;
                var2 = var2[var10];
                _closure2_slot4 = var2;
                var2 = var4.useState;
                var2 = var2.bind(var4)(var16);
                var2 = var13.bind(var3)(var2, var12);
                var15 = var2[var11];
                _closure2_slot5 = var15;
                var2 = var2[var10];
                _closure2_slot6 = var2;
                var11 = var4.useEffect;
                var10 = new Array(1);
                var10[0] = var1;
                var2 = function() { // Environment: var0
                    var4 = _closure2_slot3;
                    var3 = var4.addListener;
                    var2 = 'state';
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot3;
                        var1 = var2.getState;
                        var1 = var1.bind(var2)();
                        var2 = var1.routes;
                        var3 = _closure2_slot3;
                        var1 = var3.getState;
                        var1 = var1.bind(var3)();
                        var1 = var1.routes;
                        var3 = var1.length;
                        var1 = 1;
                        var1 = var3 - var1;
                        var1 = var2[var1];
                        var2 = var1.name;
                        var1 = _closure2_slot6;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot3;
                        var2 = var3.removeListener;
                        var1 = _closure3_slot0;
                        var0 = 'state';
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = var11.bind(var4)(var2, var10);
                var10 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var15;
                var1 = function() { // Environment: var0
                    _fun79491: for (var _fun79491_ip = 0;;) switch (_fun79491_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot10;
                            var2 = var2.SPEED_BUMP;
                            if (!(var3 !== var2)) {
                                _fun79491_ip = 149;
                                continue _fun79491
                            }
                        case 27:
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot10;
                            var2 = var2.COLLECT_SIGNAL;
                            if (!(var3 !== var2)) {
                                _fun79491_ip = 123;
                                continue _fun79491
                            }
                        case 45:
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot10;
                            var2 = var2.CONFIRM_SUBMISSION;
                            if (!(var3 !== var2)) {
                                _fun79491_ip = 97;
                                continue _fun79491
                            }
                        case 63:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 15;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.close;
                            var2 = var2.bind(var3)();
                            _fun79491_ip = 173;
                            continue _fun79491;
                        case 97:
                            var4 = _closure2_slot3;
                            var3 = var4.push;
                            var2 = _closure1_slot10;
                            var2 = var2.REQUEST_SENT;
                            var2 = var3.bind(var4)(var2);
                            _fun79491_ip = 173;
                            continue _fun79491;
                        case 123:
                            var4 = _closure2_slot3;
                            var3 = var4.push;
                            var2 = _closure1_slot10;
                            var2 = var2.CONFIRM_SUBMISSION;
                            var2 = var3.bind(var4)(var2);
                            _fun79491_ip = 173;
                            continue _fun79491;
                        case 149:
                            var2 = _closure2_slot3;
                            var1 = var2.push;
                            var0 = _closure1_slot10;
                            var0 = var0.COLLECT_SIGNAL;
                            var0 = var1.bind(var2)(var0);
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var10.bind(var4)(var1, var2);
                _closure2_slot7 = var14;
                var2 = var4.useCallback;
                var1 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun79493: for (var _fun79493_ip = 0;;) switch (_fun79493_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun79493_ip = 184;
                                    continue _fun79493
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                                var2 = _closure2_slot2;
                                var7 = null;
                                if (!(var7 !== var2)) {
                                    _fun79493_ip = 181;
                                    continue _fun79493
                                }
                            case 30: // try_start_0
                                var4 = _closure2_slot4;
                                var2 = '';
                                var2 = var4.bind(var1)(var2);
                                var4 = _closure1_slot2;
                                var5 = _closure1_slot3;
                                var2 = 16;
                                var2 = var5[var2];
                                var9 = var4.bind(var1)(var2);
                                var8 = var9.requestReview;
                                var5 = _closure2_slot2;
                                var4 = _closure2_slot0;
                                var2 = _closure2_slot1;
                                var2 = var8.bind(var9)(var5, var4, var2);
                                SaveGenerator(address = 95);
                            case 93:
                                return var2;
                            case 95:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun79493_ip = 111;
                                    continue _fun79493
                                }
                            case 101:
                                var4 = _closure2_slot7;
                                var4 = var4.bind(var1)();
                            case 109: // try_end0
                                _fun79493_ip = 181;
                                continue _fun79493;
                            case 111:
                                return var2;
                            case 114: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var3 = _closure2_slot4;
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var4 = 17;
                                var4 = var8[var4];
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.getRequestReviewErrorFromCode;
                                var2 = var2.body;
                                var6 = var2;
                                var7 = var7 == var2;
                                var2 = undefined;
                                if (var7) {
                                    _fun79493_ip = 171;
                                    continue _fun79493
                                }
                            case 166:
                                var2 = var6.code;
                            case 171:
                                var2 = var4.bind(var5)(var2);
                                var2 = var3.bind(var1)(var2);
                            case 181:
                                return var1;
                            case 184:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(4);
                var0[0] = var9;
                var0[1] = var8;
                var0[2] = var6;
                var0[3] = var14;
                var26 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var25.container;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var25.footerContainer;
                var5.style = var6;
                var8 = _closure1_slot12;
                var6 = {};
                var9 = var25.separator;
                var6.style = var9;
                var8 = var8.bind(var3)(var1, var6);
                var6 = new Array(2);
                var6[0] = var8;
                if (!var7) {
                    _fun79484_ip = 1274;
                    continue _fun79484
                }
            case 659:
                var10 = _closure1_slot12;
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var8 = 18;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SafeAreaPaddingView;
                var8 = {};
                var11 = true;
                var8.bottom = var11;
                var11 = var25.footerButton;
                var8.style = var11;
                var11 = _closure1_slot10;
                var11 = var11.CONFIRM_SUBMISSION;
                if (!(var15 !== var11)) {
                    _fun79484_ip = 920;
                    continue _fun79484
                }
            case 724:
                var13 = _closure1_slot12;
                var12 = _closure1_slot1;
                var17 = _closure1_slot3;
                var11 = 20;
                var11 = var17[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.onPress = var14;
                var14 = var25.buttonTextStyles;
                var11.textStyle = var14;
                var14 = _closure1_slot10;
                var14 = var14.REQUEST_SENT;
                if (!(var15 !== var14)) {
                    _fun79484_ip = 850;
                    continue _fun79484
                }
            case 779:
                var14 = _closure1_slot10;
                var14 = var14.THANKS;
                if (!(var15 !== var14)) {
                    _fun79484_ip = 850;
                    continue _fun79484
                }
            case 793:
                var18 = _closure1_slot0;
                var20 = _closure1_slot3;
                var14 = 19;
                var15 = var20[var14];
                var15 = var18.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var14 = var20[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.XiOHRX;
                var14 = var15.bind(var17)(var14);
                _fun79484_ip = 905;
                continue _fun79484;
            case 850:
                var20 = _closure1_slot0;
                var22 = _closure1_slot3;
                var15 = 19;
                var17 = var22[var15];
                var17 = var20.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var22[var15];
                var15 = var20.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.i4jeWR;
                var14 = var17.bind(var18)(var15);
            case 905:
                var11.text = var14;
                var11 = var13.bind(var3)(var12, var11);
                _fun79484_ip = 1264;
                continue _fun79484;
            case 920:
                var14 = _closure1_slot13;
                var13 = _closure1_slot14;
                var12 = {};
                var18 = _closure1_slot12;
                var29 = _closure1_slot0;
                var20 = _closure1_slot3;
                var22 = 10;
                var15 = var20[var22];
                var15 = var29.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var23 = var25.footerText;
                var15.style = var23;
                var23 = 19;
                var27 = var20[var23];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var20 = var20[var23];
                var20 = var29.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["d6qgY/"];
                var20 = var27.bind(var28)(var20);
                var15.children = var20;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(3);
                var15[0] = var17;
                var16 = var16 !== var21;
                if (!var16) {
                    _fun79484_ip = 1117;
                    continue _fun79484
                }
            case 1057:
                var20 = _closure1_slot12;
                var18 = _closure1_slot0;
                var17 = _closure1_slot3;
                var17 = var17[var22];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-critical'
                };
                var22 = var25.footerText;
                var17.style = var22;
                var17.children = var21;
                var16 = var20.bind(var3)(var18, var17);
            case 1117:
                var15[1] = var16;
                var18 = _closure1_slot12;
                var21 = _closure1_slot1;
                var22 = _closure1_slot3;
                var20 = 20;
                var16 = var22[var20];
                var17 = var21.bind(var3)(var16);
                var16 = {};
                var16.onPress = var26;
                var25 = var25.buttonTextStyles;
                var16.textStyle = var25;
                var26 = _closure1_slot0;
                var24 = var22[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var22[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.geKm7t;
                var23 = var24.bind(var25)(var23);
                var16.text = var23;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.Colors;
                var20 = var20.RED;
                var16.color = var20;
                var16.loading = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[2] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1264:
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1274:
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AppealIngestionModalScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 10052, 5902, 660, 33, 1297, 671, 3901, 566, 10058, 1469, 5903, 10067, 10059, 5901, 4696, 1234, 4835, 4667, 10069, 481, 10074, 10076, 10078, 10080, 10081, 4890, 5747, 2]);