// modules/verification/native/components/ChangeEmailWarning.tsx
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.COMMON_SCAMS_EDUCATION_HC_ARTICLE;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'padding': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var11 = 'center';
    var3.container = var8;
    var8 = {
        'height': 190,
        'width': 220,
        'resizeMode': 'contain'
    };
    var3.image = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginTop = var12;
    var3.title = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var8.textAlign = var11;
    var3.body = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginTop = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ChangeEmailWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61099: for (var _fun61099_ip = 0;;) switch (_fun61099_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.changeEmailReason;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot11;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useNavigation;
                var6 = var1.bind(var5)();
                var _closure2_slot1 = var6;
                var1 = 9;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var15
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var3.bind(var5)(var2, var1);
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var0;
                var0 = function() { // Environment: var15
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 10;
                    var2 = var5[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot8;
                    var4 = var2.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3.change_email_reason_enum = var8;
                    var3 = var6.bind(var7)(var4, var3);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var4 = _closure1_slot0;
                    var1 = 11;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.VerificationModalScenes;
                    var1 = var1.ENTER_EMAIL;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var17 = var3.bind(var5)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun61099_ip = 799;
                    continue _fun61099
                }
            case 146:
                var3 = _closure1_slot9;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 12;
                var1 = var20[var1];
                var1 = var19.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var6 = _closure1_slot5;
                var5 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var9 = _closure1_slot10;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = var12.container;
                var7.style = var10;
                var10 = 13;
                var10 = var20[var10];
                var10 = var19.bind(var4)(var10);
                var11 = var10.TrafficConeSpotIllustration;
                var10 = {};
                var11 = var3.bind(var4)(var11, var10);
                var10 = new Array(4);
                var10[0] = var11;
                var11 = 14;
                var11 = var20[var11];
                var11 = var19.bind(var4)(var11);
                var13 = var11.Text;
                var11 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.title;
                var11.style = var14;
                var16 = 15;
                var14 = var20[var16];
                var14 = var19.bind(var4)(var14);
                var21 = var14.intl;
                var18 = var21.string;
                var14 = var20[var16];
                var14 = var19.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.hhR7gX;
                var14 = var18.bind(var21)(var14);
                var11.children = var14;
                var11 = var3.bind(var4)(var13, var11);
                var10[1] = var11;
                var11 = 16;
                var11 = var20[var11];
                var11 = var19.bind(var4)(var11);
                var13 = var11.TextWithIOSLinkWorkaround;
                var11 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.body;
                var11.style = var14;
                var14 = var20[var16];
                var14 = var19.bind(var4)(var14);
                var22 = var14.intl;
                var21 = var22.format;
                var14 = var20[var16];
                var14 = var19.bind(var4)(var14);
                var14 = var14.t;
                var18 = var14.rqWXUf;
                var14 = {};
                var23 = _closure1_slot7;
                var14.hcArticle = var23;
                var18 = var21.bind(var22)(var18, var14);
                var14 = new Array(3);
                var14[0] = var18;
                var18 = '\n\n';
                var14[1] = var18;
                var18 = var20[var16];
                var18 = var19.bind(var4)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var16];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["3LW10C"];
                var18 = var21.bind(var22)(var18);
                var14[2] = var18;
                var11.children = var14;
                var11 = var9.bind(var4)(var13, var11);
                var10[2] = var11;
                var11 = {};
                var12 = var12.buttonContainer;
                var11.style = var12;
                var13 = 17;
                var12 = var20[var13];
                var12 = var19.bind(var4)(var12);
                var14 = var12.Button;
                var12 = {
                    'size': 'md',
                    'variant': 'tertiary',
                    'text': null,
                    'onPress': null,
                    'shrink': true
                };
                var18 = var20[var16];
                var18 = var19.bind(var4)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var16];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.rwTBFs;
                var18 = var21.bind(var22)(var18);
                var12.text = var18;
                var12.onPress = var17;
                var14 = var3.bind(var4)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var20[var13];
                var13 = var19.bind(var4)(var13);
                var14 = var13.Button;
                var13 = {
                    'size': 'md',
                    'variant': 'primary',
                    'text': null,
                    'onPress': null,
                    'shrink': true
                };
                var17 = var20[var16];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16["ETE/oC"];
                var16 = var17.bind(var18)(var16);
                var13.text = var16;
                var15 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.close;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13.onPress = var15;
                var13 = var3.bind(var4)(var14, var13);
                var12[1] = var13;
                var11.children = var12;
                var11 = var9.bind(var4)(var8, var11);
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 799:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 7538, 660, 33, 1297, 671, 1469, 566, 795, 670, 4899, 6013, 3942, 1234, 5384, 4084, 7534, 2]);