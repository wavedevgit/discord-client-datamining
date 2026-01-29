// modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.header = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AgeVerificationEmbeddedIntroScreen, environment: var1
        var0 = arg0;
        var5 = var0.onClose;
        var10 = var0.modalSessionId;
        var2 = var0.classificationId;
        var20 = var0.entryPoint;
        var0 = _closure1_slot6;
        var3 = undefined;
        var17 = var0.bind(var3)();
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 4;
        var0 = var12[var0];
        var1 = var9.bind(var3)(var0);
        var0 = var1.useIsSuspendedUser;
        var19 = var0.bind(var1)();
        var1 = _closure1_slot1;
        var0 = 5;
        var0 = var12[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.onClose = var5;
        var0.classificationId = var2;
        var0 = var1.bind(var3)(var0);
        var11 = var0.ageVerificationMethods;
        var2 = _closure1_slot4;
        var0 = 6;
        var0 = var12[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.ModalScreen;
        var0 = {};
        var6 = _closure1_slot5;
        var4 = 7;
        var4 = var12[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.ModalContent;
        var4 = {};
        var7 = 8;
        var7 = var12[var7];
        var7 = var9.bind(var3)(var7);
        var8 = var7.Stack;
        var7 = {
            'align': 'center',
            'justify': 'center',
            'spacing': 8
        };
        var13 = 9;
        var13 = var12[var13];
        var13 = var9.bind(var3)(var13);
        var14 = var13.ShieldSpotIllustration;
        var13 = {
            'height': 100,
            'width': 177
        };
        var14 = var2.bind(var3)(var14, var13);
        var13 = new Array(3);
        var13[0] = var14;
        var14 = 10;
        var15 = var12[var14];
        var15 = var9.bind(var3)(var15);
        var18 = var15.Text;
        var15 = {
            'accessibilityRole': 'header',
            'variant': 'heading-xl/bold',
            'color': 'mobile-text-heading-primary'
        };
        var16 = var17.header;
        var15.style = var16;
        var16 = 11;
        var21 = var12[var16];
        var22 = var9.bind(var3)(var21);
        var21 = var22.getAgeVerificationGetStartedTitle;
        var21 = var21.bind(var22)(var20);
        var15.children = var21;
        var15 = var2.bind(var3)(var18, var15);
        var13[1] = var15;
        var14 = var12[var14];
        var14 = var9.bind(var3)(var14);
        var15 = var14.Text;
        var14 = {
            'variant': 'text-md/medium',
            'color': 'text-strong'
        };
        var17 = var17.header;
        var14.style = var17;
        var16 = var12[var16];
        var18 = var9.bind(var3)(var16);
        var17 = var18.getAgeVerificationGetStartedSubtitle;
        var16 = function() { // Environment: var16
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 12;
            var2 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var2);
            var2 = var3.openUrl;
            var4 = 13;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = var5.getArticleURL;
            var1 = _closure1_slot3;
            var1 = var1.TIGGER_PAWTECT_LEARN_MORE;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var16 = var17.bind(var18)(var20, var16, var19);
        var14.children = var16;
        var14 = var2.bind(var3)(var15, var14);
        var13[2] = var14;
        var7.children = var13;
        var8 = var6.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 14;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.AgeVerificationMethodsContainer;
        var8 = {};
        var8.ageVerificationMethods = var11;
        var8.modalSessionId = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 5898, 6394, 6397, 6398, 4033, 5920, 3895, 4206, 5890, 1675, 6399, 2]);