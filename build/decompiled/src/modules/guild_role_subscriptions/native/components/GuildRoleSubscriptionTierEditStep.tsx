// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.description;
        var13 = var0.title;
        var0 = _closure1_slot8;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var0 = var9[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var4 = var8.headerContainer;
        var0.style = var4;
        var12 = _closure1_slot6;
        var6 = 6;
        var4 = var9[var6];
        var4 = var7.bind(var3)(var4);
        var10 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var8.title;
        var4.style = var14;
        var4.children = var13;
        var10 = var12.bind(var3)(var10, var4);
        var4 = new Array(3);
        var4[0] = var10;
        var10 = _closure1_slot6;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var12 = var8.subtitle;
        var6.style = var12;
        var6.children = var11;
        var6 = var10.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot1;
        var5 = 7;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var8 = var8.separator;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun116846: for (var _fun116846_ip = 0;;) switch (_fun116846_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.canProceedToNextStep;
                var1 = var0.nextStep;
                var7 = var0.onProceed;
                var13 = var0.submitting;
                var0 = _closure1_slot8;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun116846_ip = 105;
                    continue _fun116846
                }
            case 46:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var1 = var8[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var8[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["bm6P5/"];
                var8 = var1.bind(var2)(var0);
                _fun116846_ip = 162;
                continue _fun116846;
            case 105:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var1 = var9[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["4cAsqe"];
                var8 = var1.bind(var2)(var0);
            case 162:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 9;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var9 = var0.bottom;
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var5.footerContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.paddingBottom = var9;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot6;
                var9 = 10;
                var4 = var11[var9];
                var5 = var10.bind(var3)(var4);
                var4 = {};
                var4.loading = var13;
                var12 = !var12;
                var4.disabled = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.Colors;
                var9 = var9.BRAND;
                var4.color = var9;
                var4.text = var8;
                var4.onPress = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var10;
    var10 = '100%';
    var3.height = var10;
    var6.container = var3;
    var3 = {};
    var3.flexGrow = var9;
    var6.scrollContainer = var3;
    var9 = 48;
    var3 = {
        'position': 'relative',
        'paddingTop': 48,
        'paddingBottom': 8,
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var6.headerContainer = var3;
    var3 = {};
    var10 = 6;
    var3.right = var10;
    var6.closeButtonContainer = var3;
    var3 = {};
    var3.height = var9;
    var6.stepContainer = var3;
    var3 = 12;
    var9 = {
        'marginTop': 12,
        'textAlign': 'center'
    };
    var6.title = var9;
    var9 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var6.subtitle = var9;
    var9 = {};
    var10 = 24;
    var9.marginTop = var10;
    var6.separator = var9;
    var9 = {
        'width': '100%',
        'padding': 16
    };
    var6.footerContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116847: for (var _fun116847_ip = 0;;) switch (_fun116847_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.scrollable;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2.scrollable = var1;
                var16 = {};
                var15 = var3;
                var14 = var2;
                var9 = copyDataProperties(var16, var15, var14);
                var1 = _closure1_slot8;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var10 = var1.bind(var2)();
                var _closure2_slot0 = var10;
                var8 = var9.nextStep;
                var _closure2_slot1 = var8;
                var7 = var9.onProceed;
                var _closure2_slot2 = var7;
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var10;
                var1[1] = var8;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    _fun116848: for (var _fun116848_ip = 0;;) switch (_fun116848_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun116848_ip = 41;
                                continue _fun116848
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun116848_ip = 51;
                                continue _fun116848
                            }
                        case 21:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            _fun116848_ip = 51;
                            continue _fun116848;
                        case 41:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = false;
                if (!(var0 === var4)) {
                    _fun116847_ip = 256;
                    continue _fun116847
                }
            case 154:
                var0 = {};
                var4 = var12.container;
                var0.style = var4;
                var7 = _closure1_slot6;
                var5 = _closure1_slot9;
                var4 = {};
                var16 = var4;
                var15 = var9;
                var8 = copyDataProperties(var16, var15);
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var9.children;
                var4[1] = var5;
                var8 = _closure1_slot6;
                var7 = _closure1_slot10;
                var5 = {};
                var16 = var5;
                var15 = var9;
                var11 = copyDataProperties(var16, var15);
                var11 = 'onProceed';
                var5[var11] = var10;
                var5 = var8.bind(var3)(var7, var5);
                var4[2] = var5;
                var0.children = var4;
                _fun116847_ip = 407;
                continue _fun116847;
            case 256:
                var4 = {};
                var5 = var12.container;
                var4.style = var5;
                var8 = _closure1_slot6;
                var7 = _closure1_slot9;
                var5 = {};
                var16 = var5;
                var15 = var9;
                var11 = copyDataProperties(var16, var15);
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var11 = _closure1_slot6;
                var8 = _closure1_slot5;
                var7 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'showsVerticalScrollIndicator': false,
                    'alwaysBounceVertical': false
                };
                var13 = var12.scrollContainer;
                var12 = new Array(1);
                var12[0] = var13;
                var7.contentContainerStyle = var12;
                var12 = var9.children;
                var7.children = var12;
                var7 = var11.bind(var3)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot10;
                var6 = {};
                var16 = var6;
                var15 = var9;
                var9 = copyDataProperties(var16, var15);
                var9 = 'onProceed';
                var6[var9] = var10;
                var6 = var8.bind(var3)(var7, var6);
                var5[2] = var6;
                var4.children = var5;
                var0 = var4;
            case 407:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4737, 3943, 10834, 1234, 1568, 4876, 1469, 2]);