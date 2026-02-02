// modules/feedback/native/FeedbackModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun76314: for (var _fun76314_ip = 0;;) switch (_fun76314_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.result;
                var _closure2_slot0 = var0;
                var2 = var1.trackReport;
                var _closure2_slot1 = var2;
                var7 = var1.titleLabel;
                var19 = var1.descriptionLabel;
                var8 = var1.hideHelpdeskLink;
                var1 = _closure1_slot9;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var22 = var0.reason;
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var17 = '';
                var2 = var0.bind(var1)(var17);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var16 = var1[var0];
                var _closure2_slot2 = var16;
                var0 = 1;
                var18 = var1[var0];
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var6 = _closure1_slot8;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var20 = 5;
                var4 = var9[var20];
                var4 = var10.bind(var3)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var11 = _closure1_slot7;
                var9 = var9[var20];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FormInput;
                var9 = {};
                var15 = null;
                var23 = var15 == var22;
                var21 = undefined;
                if (var23) {
                    _fun76314_ip = 198;
                    continue _fun76314
                }
            case 193:
                var21 = var22.label;
            case 198:
                var9.value = var21;
                if (!(var15 == var7)) {
                    _fun76314_ip = 263;
                    continue _fun76314
                }
            case 206:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 6;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.vcqwCj;
                var7 = var22.bind(var23)(var21);
            case 263:
                var9.title = var7;
                var7 = true;
                var9.disabled = var7;
                var7 = 'channel-input';
                var9 = var11.bind(var3)(var10, var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var22 = _closure1_slot7;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var20];
                var11 = var10.bind(var3)(var11);
                var21 = var11.FormDivider;
                var11 = {};
                var11 = var22.bind(var3)(var21, var11);
                var7[1] = var11;
                var11 = _closure1_slot7;
                var9 = var9[var20];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FormInput;
                var9 = {
                    'value': null,
                    'title': null,
                    'onChange': null,
                    'multiline': true,
                    'numberOfLines': 4,
                    'autoCorrect': true
                };
                var9.value = var16;
                if (!(var15 == var19)) {
                    _fun76314_ip = 431;
                    continue _fun76314
                }
            case 376:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 6;
                var21 = var24[var20];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.h95hcn;
                var19 = var21.bind(var22)(var20);
            case 431:
                var9.title = var19;
                var9.onChange = var18;
                var9 = var11.bind(var3)(var10, var9);
                var7[2] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var14.bottomContainer;
                var5.style = var9;
                var9 = !var8;
                if (!var9) {
                    _fun76314_ip = 651;
                    continue _fun76314
                }
            case 500:
                var11 = _closure1_slot7;
                var19 = _closure1_slot0;
                var24 = _closure1_slot2;
                var8 = 7;
                var8 = var24[var8];
                var8 = var19.bind(var3)(var8);
                var10 = var8.TextWithIOSLinkWorkaround;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var18 = var14.helpDeskLabel;
                var8.style = var18;
                var18 = 6;
                var20 = var24[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var24[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.ybi2tD;
                var18 = {};
                var23 = _closure1_slot1;
                var22 = 8;
                var22 = var24[var22];
                var23 = var23.bind(var3)(var22);
                var22 = var23.getSubmitRequestURL;
                var22 = var22.bind(var23)();
                var18.helpdeskURL = var22;
                var18 = var20.bind(var21)(var19, var18);
                var8.children = var18;
                var9 = var11.bind(var3)(var10, var8);
            case 651:
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var9 = 9;
                var9 = var18[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = var15 == var16;
                if (var15) {
                    _fun76314_ip = 696;
                    continue _fun76314
                }
            case 692:
                var15 = var17 === var16;
            case 696:
                var9.disabled = var15;
                var14 = var14.submitButton;
                var9.style = var14;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 6;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.geKm7t;
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var6 = var1;
                    var4 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot2;
                    var3 = 'feedback';
                    var1[var3] = var4;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'lineHeight': 16,
        'marginTop': 8
    };
    var3.helpDeskLabel = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.bottomContainer = var8;
    var8 = {
        'marginTop': 24,
        'marginBottom': 24
    };
    var3.submitButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/FeedbackModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var5 = var0.result;
        var _closure2_slot1 = var5;
        var4 = var0.trackReport;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useRef;
        var1 = {};
        var1.result = var5;
        var1.trackReport = var4;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot3 = var1;
        var3 = _closure1_slot4;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var6
            var1 = _closure2_slot3;
            var0 = {};
            var3 = _closure2_slot1;
            var0.result = var3;
            var2 = _closure2_slot2;
            var0.trackReport = var2;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = function() { // Environment: var6
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            var1 = _closure2_slot3;
            var1 = var1.current;
            var2 = var1.result;
            var1 = var1.trackReport;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = new Array(0);
        var9 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 11;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var4 = 'Feedback';
        var0.initialRouteName = var4;
        var4 = {};
        var5 = {};
        var7 = 6;
        var11 = var10[var7];
        var11 = var8.bind(var2)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var7 = var10[var7];
        var7 = var8.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7["dBx+Cn"];
        var7 = var11.bind(var12)(var7);
        var5.title = var7;
        var7 = 12;
        var7 = var10[var7];
        var8 = var8.bind(var2)(var7);
        var7 = var8.getHeaderCloseButton;
        var7 = var7.bind(var8)(var9);
        var5.headerLeft = var7;
        var6 = function() {
            var3 = _closure1_slot7;
            var2 = _closure1_slot10;
            var1 = {};
            var4 = _closure2_slot0;
            var5 = var1;
            var0 = copyDataProperties(var5, var4);
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var5.render = var6;
        var4.Feedback = var5;
        var0.screens = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 5342, 1234, 5296, 1675, 4838, 4527, 5750, 4670, 2]);