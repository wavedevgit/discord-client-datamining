// modules/safety_hub/native/ClassificationDetail.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var7 = var1.classificationTypeText;
        var _closure2_slot0 = var7;
        var6 = var1.guildMetadata;
        var _closure2_slot1 = var6;
        var1 = _closure1_slot15;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            _fun79849: for (var _fun79849_ip = 0;;) switch (_fun79849_ip) {
                case 0:
                    var8 = {};
                    var0 = _closure2_slot0;
                    var8.classification_type = var0;
                    var0 = function arg0, arg1() {
                        var4 = _closure1_slot12;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 9;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var2 = var0.Text;
                        var1 = {};
                        var0 = 'heading-xl/bold';
                        var1.variant = var0;
                        var0 = arg0;
                        var1.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var8.classificationHook = var0;
                    var0 = _closure2_slot1;
                    var9 = null;
                    if (!(var9 == var0)) {
                        _fun79849_ip = 106;
                        continue _fun79849
                    }
                case 38:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 11;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.format;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["39jfOz"];
                    var0 = var1.bind(var2)(var0, var8);
                    _fun79849_ip = 375;
                    continue _fun79849;
                case 106:
                    var1 = _closure2_slot1;
                    var1 = var9 == var1;
                    var7 = undefined;
                    var3 = undefined;
                    if (var1) {
                        _fun79849_ip = 131;
                        continue _fun79849
                    }
                case 121:
                    var1 = _closure2_slot1;
                    var3 = var1.member_type;
                case 131:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.MemberType;
                    var1 = var1.OWNER;
                    if (!(var3 !== var1)) {
                        _fun79849_ip = 271;
                        continue _fun79849
                    }
                case 170:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 11;
                    var4 = var10[var1];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var1 = var10[var1];
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.t;
                    var3 = var1.rmpEPD;
                    var1 = {};
                    var13 = var1;
                    var12 = var8;
                    var10 = copyDataProperties(var13, var12);
                    var10 = _closure2_slot1;
                    var10 = var9 == var10;
                    var11 = undefined;
                    if (var10) {
                        _fun79849_ip = 254;
                        continue _fun79849
                    }
                case 245:
                    var10 = _closure2_slot1;
                    var11 = var10.name;
                case 254:
                    var10 = 'guildName';
                    var1[var10] = var11;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun79849_ip = 372;
                    continue _fun79849;
                case 271:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 11;
                    var4 = var10[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var10[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.X1ngSd;
                    var2 = {};
                    var13 = var2;
                    var12 = var8;
                    var8 = copyDataProperties(var13, var12);
                    var8 = _closure2_slot1;
                    var8 = var9 == var8;
                    var7 = undefined;
                    if (var8) {
                        _fun79849_ip = 357;
                        continue _fun79849
                    }
                case 348:
                    var6 = _closure2_slot1;
                    var7 = var6.name;
                case 357:
                    var6 = 'guildName';
                    var2[var6] = var7;
                    var1 = var4.bind(var5)(var3, var2);
                case 372:
                    var0 = var1;
                case 375:
                    return var0;
            }
        };
        var7 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var8.header;
        var0.style = var5;
        var6 = _closure1_slot12;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 9;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-lg/normal',
            'style': null,
            'color': 'mobile-text-heading-primary'
        };
        var8 = var8.headerText;
        var4.style = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun79851: for (var _fun79851_ip = 0;;) switch (_fun79851_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.actions;
                var25 = var0.classificationExpiration;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var24 = var3.bind(var5)(var1, var0);
                var0 = _closure1_slot15;
                var11 = var0.bind(var4)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var0 = var0.descriptions;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var12 = var1.bind(var2)(var0);
                var1 = var12.length;
                var0 = 0;
                if (!(var0 === var1)) {
                    _fun79851_ip = 120;
                    continue _fun79851
                }
            case 108:
                var0 = null;
                var1 = var0 == var25;
                if (var1) {
                    _fun79851_ip = 519;
                    continue _fun79851
                }
            case 120:
                var3 = _closure1_slot13;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var11.sectionContainer;
                var1.style = var5;
                var7 = _closure1_slot12;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var15 = 9;
                var5 = var8[var15];
                var5 = var14.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'eyebrow',
                    'color': 'text-muted'
                };
                var22 = 11;
                var10 = var8[var22];
                var10 = var14.bind(var4)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var8 = var8[var22];
                var8 = var14.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["O2nYk+"];
                var8 = var10.bind(var13)(var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot13;
                var7 = _closure1_slot4;
                var6 = {};
                var13 = var11.actionsTaken;
                var10 = new Array(1);
                var10[0] = var13;
                var6.style = var10;
                var10 = var12.map;
                var9 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var2.action = var0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var10 = var10.bind(var12)(var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = null;
                var12 = var10 != var25;
                if (!var12) {
                    _fun79851_ip = 491;
                    continue _fun79851
                }
            case 315:
                var14 = _closure1_slot13;
                var13 = _closure1_slot4;
                var12 = {};
                var11 = var11.classificationActionDescription;
                var12.style = var11;
                var17 = _closure1_slot16;
                var11 = new Array(2);
                var11[0] = var17;
                var17 = _closure1_slot12;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = var18[var15];
                var15 = var19.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {};
                var20 = 'text-xs/normal';
                var15.variant = var20;
                var20 = var18[var22];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var18[var22];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18.TByIjT;
                var18 = {};
                var23 = var25.toLocaleDateString;
                var22 = {};
                var26 = 'medium';
                var22.dateStyle = var26;
                var22 = var23.bind(var25)(var24, var22);
                var18.expirationDate = var22;
                var18 = var20.bind(var21)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var11[1] = var15;
                var12.children = var11;
                var11 = 'expiration';
                var10 = var14.bind(var4)(var13, var12, var11);
            case 491:
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 519:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.action;
        var1 = _closure1_slot15;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var2 = _closure1_slot12;
        var1 = _closure1_slot14;
        var0 = {};
        var6 = var5.descriptions;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            var4 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var0 = _closure2_slot0;
            var0 = var0.classificationActionDescription;
            var2.style = var0;
            var5 = _closure1_slot17;
            var0 = new Array(2);
            var0[0] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.Text;
            var5 = {};
            var8 = 'text-xs/normal';
            var5.variant = var8;
            var8 = arg0;
            var5.children = var8;
            var5 = var7.bind(var1)(var6, var5);
            var0[1] = var5;
            var2.children = var0;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var17 = var0.tosLink;
        var16 = var0.communityGuidelinesLink;
        var10 = var0.classificationTypeText;
        var9 = var0.policyExplainerLink;
        var5 = var0.appealComponent;
        var0 = _closure1_slot15;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.sectionContainer;
        var0.style = var4;
        var8 = _closure1_slot12;
        var13 = _closure1_slot0;
        var18 = _closure1_slot2;
        var4 = 9;
        var4 = var18[var4];
        var4 = var13.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'variant': 'eyebrow',
            'color': 'text-muted'
        };
        var12 = 11;
        var11 = var18[var12];
        var11 = var13.bind(var3)(var11);
        var15 = var11.intl;
        var14 = var15.string;
        var11 = var18[var12];
        var11 = var13.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["977iei"];
        var11 = var14.bind(var15)(var11);
        var4.children = var11;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(4);
        var4[0] = var7;
        var11 = _closure1_slot12;
        var7 = 13;
        var7 = var18[var7];
        var7 = var13.bind(var3)(var7);
        var8 = var7.TextWithIOSLinkWorkaround;
        var7 = {};
        var14 = 'text-sm/normal';
        var7.variant = var14;
        var14 = var18[var12];
        var14 = var13.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.format;
        var12 = var18[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var13 = var12["1Z/+aA"];
        var12 = {};
        var12.tosLink = var17;
        var12.communityGuidelinesLink = var16;
        var12 = var14.bind(var15)(var13, var12);
        var7.children = var12;
        var7 = var11.bind(var3)(var8, var7);
        var4[1] = var7;
        var8 = _closure1_slot12;
        var7 = _closure1_slot26;
        var6 = {};
        var6.classificationTypeText = var10;
        var6.policyExplainerLink = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4[2] = var6;
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var18 = var0.classificationTypeText;
        var0 = var0.policyExplainerLink;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot15;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot13;
        var17 = _closure1_slot1;
        var19 = _closure1_slot2;
        var4 = 14;
        var4 = var19[var4];
        var5 = var17.bind(var3)(var4);
        var4 = {};
        var7 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openURL;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.onPress = var7;
        var8 = var12.classificationPolicyCard;
        var7 = new Array(1);
        var7[0] = var8;
        var4.style = var7;
        var9 = _closure1_slot12;
        var8 = _closure1_slot4;
        var7 = {};
        var10 = var12.classificationPolicyCardIcon;
        var7.style = var10;
        var14 = _closure1_slot12;
        var15 = _closure1_slot0;
        var10 = 16;
        var10 = var19[var10];
        var10 = var15.bind(var3)(var10);
        var13 = var10.ShieldIcon;
        var10 = {};
        var16 = 'sm';
        var10.size = var16;
        var16 = 8;
        var16 = var19[var16];
        var16 = var17.bind(var3)(var16);
        var16 = var16.colors;
        var16 = var16.TEXT_LINK;
        var10.color = var16;
        var10 = var14.bind(var3)(var13, var10);
        var7.children = var10;
        var8 = var9.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var10 = _closure1_slot12;
        var9 = _closure1_slot4;
        var8 = {};
        var12 = var12.classificationPolicyCardContent;
        var8.style = var12;
        var13 = _closure1_slot12;
        var11 = 9;
        var11 = var19[var11];
        var11 = var15.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = 11;
        var16 = var19[var14];
        var16 = var15.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.format;
        var14 = var19[var14];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var15 = var14.zxUdpj;
        var14 = {};
        var14.classificationDescription = var18;
        var14 = var16.bind(var17)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.onClose;
        var0 = _closure1_slot15;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var6 = 17;
        var0 = var9[var6];
        var1 = var7.bind(var3)(var0);
        var0 = {};
        var8 = var8.redirectButton;
        var0.style = var8;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.Sizes;
        var6 = var6.MEDIUM;
        var0.size = var6;
        var8 = _closure1_slot0;
        var5 = 11;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.elrEjL;
        var5 = var6.bind(var7)(var5);
        var0.text = var5;
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var14 = 1;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var7 = var3.ActivityIndicator;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SafetyHubAnalyticsActionSource;
    var _closure1_slot8 = var6;
    var6 = var3.SafetyHubAnalyticsActions;
    var _closure1_slot9 = var6;
    var3 = var3.SafetyHubLinks;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var9 = var3.jsxs;
    var _closure1_slot13 = var9;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var8 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 8;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var15;
    var3.root = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'column',
        'height': '100%'
    };
    var15 = 'flex';
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var11.paddingTop = var16;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var11.paddingHorizontal = var16;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_32;
    var11.gap = var16;
    var3.container = var11;
    var11 = {
        'display': 'flex',
        'textAlign': 'center',
        'alignItems': 'center',
        'flexDirection': 'column'
    };
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var11.gap = var16;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var11.marginBottom = var16;
    var3.header = var11;
    var11 = {
        'textAlign': 'center',
        'maxWidth': 260
    };
    var3.headerText = var11;
    var11 = {};
    var11.display = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11.gap = var15;
    var3.sectionContainer = var11;
    var11 = {
        'display': 'flex',
        'paddingLeft': null,
        'flexDirection': 'column'
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11.paddingLeft = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11.gap = var15;
    var3.actionsTaken = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var11.gap = var15;
    var3.classificationDetailContainer = var11;
    var11 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.letUsKnowContainer = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var11.gap = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var11.padding = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11.marginTop = var15;
    var11.flexShrink = var14;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var15;
    var3.classificationPolicyCard = var11;
    var11 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'width': 32,
        'height': 32
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_STRONG;
    var11.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xxl;
    var11.borderRadius = var15;
    var3.classificationPolicyCardIcon = var11;
    var11 = {};
    var11.flex = var14;
    var3.classificationPolicyCardContent = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11.gap = var14;
    var3.classificationActionDescription = var11;
    var11 = {
        'borderRadius': null,
        'width': 300,
        'alignSelf': 'center'
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var11.borderRadius = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var11.marginTop = var12;
    var3.redirectButton = var11;
    var3 = var8.bind(var10)(var3);
    var _closure1_slot15 = var3;
    var3 = 9;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var11 = var8.Text;
    var8 = {};
    var10 = 'text-xs/normal';
    var8.variant = var10;
    var12 = [' ', '•'];
    var8.children = var12;
    var8 = var9.bind(var0)(var11, var8);
    var _closure1_slot16 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Text;
    var3 = {};
    var3.variant = var10;
    var10 = [' ', '•'];
    var3.children = var10;
    var3 = var9.bind(var0)(var8, var3);
    var _closure1_slot17 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot12;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 9;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-sm/normal',
            'color': 'text-muted'
        };
        var4 = 11;
        var6 = var9[var4];
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var5 = var4.IFxUaT;
        var4 = {};
        var8 = function arg0, arg1() {
            var4 = _closure1_slot12;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 9;
            var0 = var2[var0];
            var3 = undefined;
            var0 = var1.bind(var3)(var0);
            var2 = var0.Text;
            var1 = {
                'onPress': null,
                'variant': 'text-sm/normal',
                'color': 'text-link'
            };
            var0 = _closure2_slot0;
            var0 = var0.onPressLetUsKnow;
            var1.onPress = var0;
            var0 = arg0;
            var1.children = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.letUsKnowHook = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var3;
    var8 = function() { // Environment: var1
        var3 = _closure1_slot12;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 9;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var4 = 11;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["I2H0/E"];
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot19 = var3;
    var3 = function arg0() {
        _fun79864: for (var _fun79864_ip = 0;;) switch (_fun79864_ip) {
            case 0:
                var8 = arg0;
                var0 = _closure1_slot15;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.letUsKnowContainer;
                var0.style = var4;
                var4 = var8.hasBeenAppealed;
                if (var4) {
                    _fun79864_ip = 74;
                    continue _fun79864
                }
            case 45:
                var7 = _closure1_slot12;
                var6 = _closure1_slot18;
                var4 = {};
                var8 = var8.onPressLetUsKnow;
                var4.onPressLetUsKnow = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun79864_ip = 78;
                continue _fun79864;
            case 74:
                var4 = _closure1_slot19;
            case 78:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var3 = {};
    var8 = 'large';
    var3.size = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot21 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/ClassificationDetail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79865: for (var _fun79865_ip = 0;;) switch (_fun79865_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.classificationId;
                var _closure2_slot0 = var7;
                var4 = var0.source;
                var _closure2_slot1 = var4;
                var17 = var0.onClose;
                var _closure2_slot2 = var17;
                var3 = var0.onError;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 18;
                var0 = var6[var0];
                var2 = undefined;
                var1 = var5.bind(var2)(var0);
                var0 = var1.useSafetyHubClassification;
                var0 = var0.bind(var1)(var7);
                var _closure2_slot3 = var0;
                var22 = var0.classification;
                var _closure2_slot4 = var22;
                var1 = var0.isAppealEligible;
                var _closure2_slot5 = var1;
                var1 = _closure1_slot15;
                var13 = var1.bind(var2)();
                var1 = 12;
                var1 = var6[var1];
                var8 = var5.bind(var2)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var21
                    var1 = _closure1_slot7;
                    var0 = var1.getAppealEligibility;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var6.bind(var8)(var5, var1);
                var1 = null;
                var6 = var1 == var22;
                var5 = undefined;
                if (var6) {
                    _fun79865_ip = 167;
                    continue _fun79865
                }
            case 161:
                var5 = var22.flagged_content;
            case 167:
                var5 = var1 != var5;
                if (!var5) {
                    _fun79865_ip = 200;
                    continue _fun79865
                }
            case 174:
                var6 = var1 == var22;
                var8 = undefined;
                if (var6) {
                    _fun79865_ip = 194;
                    continue _fun79865
                }
            case 183:
                var6 = var22.flagged_content;
                var8 = var6.length;
            case 194:
                var6 = 0;
                var5 = var8 > var6;
            case 200:
                var _closure2_slot6 = var5;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 19;
                var6 = var9[var6];
                var8 = var8.bind(var2)(var6);
                var6 = var8.useSafetyHubAccountStanding;
                var8 = var6.bind(var8)();
                var _closure2_slot7 = var8;
                var9 = var1 == var22;
                if (var9) {
                    _fun79865_ip = 254;
                    continue _fun79865
                }
            case 245:
                var6 = var22.is_coppa;
                var9 = !var6;
            case 254:
                var6 = !var9;
                if (var9) {
                    _fun79865_ip = 302;
                    continue _fun79865
                }
            case 260:
                var11 = var12.includes;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 10;
                var9 = var15[var9];
                var9 = var14.bind(var2)(var9);
                var9 = var9.AppealEligibility;
                var9 = var9.AGE_VERIFY_ELIGIBLE;
                var6 = var11.bind(var12)(var9);
            case 302:
                var _closure2_slot8 = var6;
                var9 = var1 == var22;
                if (var9) {
                    _fun79865_ip = 322;
                    continue _fun79865
                }
            case 313:
                var6 = var22.is_coppa;
                var9 = !var6;
            case 322:
                var6 = !var9;
                if (var9) {
                    _fun79865_ip = 370;
                    continue _fun79865
                }
            case 328:
                var11 = var12.includes;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 10;
                var9 = var15[var9];
                var9 = var14.bind(var2)(var9);
                var9 = var9.AppealEligibility;
                var9 = var9.AGE_VERIFY_GLOBAL_ELIGIBLE;
                var6 = var11.bind(var12)(var9);
            case 370:
                var _closure2_slot9 = var6;
                var6 = {};
                var6.accountStanding = var8;
                var6.classificationId = var7;
                var6.classificationState = var0;
                var6.hasFlaggedContent = var5;
                var6.source = var4;
                var _closure2_slot10 = var6;
                var5 = _closure1_slot3;
                var4 = var5.useRef;
                var4 = var4.bind(var5)(var6);
                var _closure2_slot11 = var4;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = function() { // Environment: var21
                    var1 = _closure2_slot11;
                    var0 = _closure2_slot10;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var22;
                var4 = function() { // Environment: var21
                    _fun79868: for (var _fun79868_ip = 0;;) switch (_fun79868_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var8 = null;
                            if (!(var8 != var1)) {
                                _fun79868_ip = 197;
                                continue _fun79868
                            }
                        case 16:
                            var0 = _closure2_slot11;
                            var0 = var0.current;
                            var9 = var0.accountStanding;
                            var11 = var0.classificationId;
                            var4 = var0.classificationState;
                            var5 = var0.hasFlaggedContent;
                            var6 = var0.source;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var0 = var2[var0];
                            var10 = undefined;
                            var3 = var1.bind(var10)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot11;
                            var1 = var0.SAFETY_HUB_ACTION;
                            var0 = {};
                            var12 = _closure1_slot9;
                            var12 = var12.ViewViolationDetail;
                            var0.action = var12;
                            var9 = var9.state;
                            var0.account_standing = var9;
                            var9 = global;
                            var9 = var9.Number;
                            var10 = var9.bind(var10)(var11);
                            var9 = new Array(1);
                            var9[0] = var10;
                            var0.classification_ids = var9;
                            if (!(var8 == var6)) {
                                _fun79868_ip = 160;
                                continue _fun79868
                            }
                        case 150:
                            var7 = _closure1_slot8;
                            var6 = var7.SystemDM;
                        case 160:
                            var0.source = var6;
                            var0.is_violative_content_shown = var5;
                            var5 = var4.isDsaEligible;
                            var0.is_dsa_eligible = var5;
                            var4 = var4.violationType;
                            var0.violation_type = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 197:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                if (!(var1 == var22)) {
                    _fun79865_ip = 522;
                    continue _fun79865
                }
            case 477:
                var4 = var0.classificationRequestState;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.ClassificationRequestState;
                var0 = var0.FAILED;
                if (!(var4 !== var0)) {
                    _fun79865_ip = 980;
                    continue _fun79865
                }
            case 522:
                var5 = _closure1_slot12;
                var4 = _closure1_slot5;
                var0 = {};
                var6 = var13.root;
                var0.style = var6;
                var8 = _closure1_slot12;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 21;
                var6 = var9[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var9 = var13.container;
                var6.style = var9;
                var9 = true;
                var6.bottom = var9;
                if (!(var1 != var22)) {
                    _fun79865_ip = 954;
                    continue _fun79865
                }
            case 596:
                var12 = _closure1_slot13;
                var11 = _closure1_slot4;
                var9 = {};
                var14 = var13.classificationDetailContainer;
                var13 = new Array(1);
                var13[0] = var14;
                var9.style = var13;
                var15 = _closure1_slot12;
                var14 = _closure1_slot22;
                var13 = {};
                var16 = var22.description;
                var13.classificationTypeText = var16;
                var16 = var22.guild_metadata;
                var13.guildMetadata = var16;
                var14 = var15.bind(var2)(var14, var13);
                var13 = new Array(5);
                var13[0] = var14;
                var16 = _closure1_slot12;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 22;
                var14 = var18[var14];
                var15 = var15.bind(var2)(var14);
                var14 = {};
                var18 = var22.flagged_content;
                if (!(var1 == var18)) {
                    _fun79865_ip = 709;
                    continue _fun79865
                }
            case 705:
                var18 = new Array(0);
            case 709:
                var14.flaggedContent = var18;
                var14 = var16.bind(var2)(var15, var14);
                var13[1] = var14;
                var16 = _closure1_slot12;
                var15 = _closure1_slot23;
                var14 = {};
                var18 = var22.actions;
                var14.actions = var18;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = 23;
                var18 = var20[var18];
                var19 = var19.bind(var2)(var18);
                var18 = var19.getClassificationExpiration;
                var18 = var18.bind(var19)(var22);
                var14.classificationExpiration = var18;
                var14 = var16.bind(var2)(var15, var14);
                var13[2] = var14;
                var16 = _closure1_slot12;
                var15 = _closure1_slot25;
                var14 = {};
                var18 = _closure1_slot10;
                var19 = var18.APPEALS_LINK;
                var14.appealLink = var19;
                var19 = var18.COMMUNITY_GUIDELINES;
                var14.communityGuidelinesLink = var19;
                var18 = var18.TOS_LINK;
                var14.tosLink = var18;
                var18 = var22.description;
                var14.classificationTypeText = var18;
                var18 = var22.explainer_link;
                var14.policyExplainerLink = var18;
                var20 = _closure1_slot12;
                var19 = _closure1_slot20;
                var18 = {};
                var22 = var22.appeal_status;
                var22 = var1 != var22;
                var18.hasBeenAppealed = var22;
                var21 = function() {
                    _fun79869: for (var _fun79869_ip = 0;;) switch (_fun79869_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var1);
                            var5 = var6.track;
                            var1 = _closure1_slot11;
                            var4 = var1.SAFETY_HUB_ACTION;
                            var3 = {};
                            var1 = _closure1_slot9;
                            var1 = var1.ClickLetUsKnow;
                            var3.action = var1;
                            var7 = _closure2_slot7;
                            var7 = var7.state;
                            var3.account_standing = var7;
                            var7 = global;
                            var8 = var7.Number;
                            var7 = _closure2_slot0;
                            var8 = var8.bind(var0)(var7);
                            var7 = new Array(1);
                            var7[0] = var8;
                            var3.classification_ids = var7;
                            var8 = _closure2_slot1;
                            var7 = null;
                            if (!(var7 == var8)) {
                                _fun79869_ip = 125;
                                continue _fun79869
                            }
                        case 113:
                            var7 = _closure1_slot8;
                            var7 = var7.SystemDM;
                            _fun79869_ip = 129;
                            continue _fun79869;
                        case 125:
                            var7 = _closure2_slot1;
                        case 129:
                            var3.source = var7;
                            var7 = _closure2_slot6;
                            var3.is_violative_content_shown = var7;
                            var7 = _closure2_slot3;
                            var8 = var7.isDsaEligible;
                            var3.is_dsa_eligible = var8;
                            var7 = var7.violationType;
                            var3.violation_type = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = _closure2_slot9;
                            if (var3) {
                                _fun79869_ip = 382;
                                continue _fun79869
                            }
                        case 184:
                            var3 = _closure2_slot8;
                            if (var3) {
                                _fun79869_ip = 340;
                                continue _fun79869
                            }
                        case 194:
                            var3 = _closure2_slot5;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            if (var3) {
                                _fun79869_ip = 247;
                                continue _fun79869
                            }
                        case 209:
                            var3 = 15;
                            var3 = var5[var3];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.openURL;
                            var3 = _closure1_slot10;
                            var3 = var3.APPEALS_LINK;
                            var3 = var6.bind(var7)(var3);
                            _fun79869_ip = 422;
                            continue _fun79869;
                        case 247:
                            var3 = 25;
                            var3 = var5[var3];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.increment;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var8 = 26;
                            var8 = var5[var8];
                            var8 = var9.bind(var0)(var8);
                            var8 = var8.MetricEvents;
                            var8 = var8.APPEAL_INGESTION_VIEW;
                            var3.name = var8;
                            var3 = var6.bind(var7)(var3);
                            var3 = 27;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.open;
                            var3 = {};
                            var6 = _closure2_slot0;
                            var3.classificationId = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun79869_ip = 422;
                            continue _fun79869;
                        case 340:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 24;
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.open;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot2;
                            var3 = var5.bind(var6)(var4, var3);
                            _fun79869_ip = 422;
                            continue _fun79869;
                        case 382:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 24;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openV2;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                        case 422:
                            return var0;
                    }
                };
                var18.onPressLetUsKnow = var21;
                var18 = var20.bind(var2)(var19, var18);
                var14.appealComponent = var18;
                var14 = var16.bind(var2)(var15, var14);
                var13[3] = var14;
                var16 = _closure1_slot12;
                var15 = _closure1_slot27;
                var14 = {};
                var14.onClose = var17;
                var14 = var16.bind(var2)(var15, var14);
                var13[4] = var14;
                var9.children = var13;
                var9 = var12.bind(var2)(var11, var9);
                _fun79865_ip = 958;
                continue _fun79865;
            case 954:
                var9 = _closure1_slot21;
            case 958:
                var6.children = var9;
                var6 = var8.bind(var2)(var7, var6);
                var0.children = var6;
                var0 = var5.bind(var2)(var4, var0);
                _fun79865_ip = 986;
                continue _fun79865;
            case 980:
                var2 = var3.bind(var2)();
                var0 = null;
            case 986:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1687, 10083, 6018, 660, 33, 1297, 671, 3938, 6019, 1234, 566, 5384, 6879, 3146, 5509, 4849, 10089, 10091, 795, 4754, 10092, 6017, 10098, 4269, 4274, 10100, 2]);