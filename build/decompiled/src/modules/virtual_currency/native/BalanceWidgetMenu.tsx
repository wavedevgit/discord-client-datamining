// modules/virtual_currency/native/BalanceWidgetMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: BalanceWidgetMenu, environment: var3
        var1 = arg0;
        var6 = var1.style;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 15;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var5.bind(var3)(var1);
        var1 = var2.useFetchVirtualCurrencyBalance;
        var1 = var1.bind(var2)();
        var8 = var1.balance;
        var _closure2_slot0 = var8;
        var7 = _closure1_slot3;
        var2 = var7.useCallback;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var0 = 12;
            var2 = var7[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.USER_PROFILE_ACTION;
            var2 = {};
            var9 = 'ORBS_BALANCE_PRESSED';
            var2.profile_action = var9;
            var2 = var4.bind(var5)(var3, var2);
            var2 = 16;
            var2 = var7[var2];
            var5 = var6.bind(var0)(var2);
            var4 = var5.openLazy;
            var3 = {};
            var2 = _closure2_slot0;
            var3.balance = var2;
            var2 = {};
            var11 = _closure1_slot0;
            var8 = 8;
            var9 = var7[var8];
            var9 = var11.bind(var0)(var9);
            var12 = var9.intl;
            var10 = var12.string;
            var9 = var7[var8];
            var9 = var11.bind(var0)(var9);
            var9 = var9.t;
            var9 = var9.WrzJBf;
            var9 = var10.bind(var12)(var9);
            var2.buttonText = var9;
            var9 = function() { // Original name: onButtonPress, environment: var1
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 12;
                var1 = var7[var0];
                var0 = undefined;
                var8 = var6.bind(var0)(var1);
                var3 = var8.track;
                var1 = _closure1_slot5;
                var2 = var1.ORB_BALANCE_ACTION_SHEET_ACTION;
                var1 = {};
                var5 = 'GO_TO_SHOP';
                var1.type = var5;
                var5 = 19;
                var9 = var7[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.YOU_SCREEN;
                var1.source = var9;
                var9 = _closure2_slot0;
                var1.balance = var9;
                var1 = var3.bind(var8)(var2, var1);
                var1 = 16;
                var1 = var7[var1];
                var2 = var6.bind(var0)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = 20;
                var1 = var7[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openCollectiblesShopMobile;
                var1 = {};
                var8 = var7[var5];
                var8 = var6.bind(var0)(var8);
                var9 = var8.COLLECTIBLES_SHOP;
                var8 = new Array(1);
                var8[0] = var9;
                var1.analyticsLocations = var8;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.COLLECTIBLES_SHOP;
                var1.analyticsSource = var5;
                var4 = _closure1_slot6;
                var4 = var4.ORBS;
                var1.screen = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.onButtonPress = var9;
            var3.primaryButtonConfig = var2;
            var2 = {};
            var9 = var7[var8];
            var9 = var11.bind(var0)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var7[var8];
            var8 = var11.bind(var0)(var8);
            var8 = var8.t;
            var8 = var8.SymzJC;
            var8 = var9.bind(var10)(var8);
            var2.buttonText = var8;
            var8 = function() { // Original name: onButtonPress, environment: var1
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 12;
                var1 = var3[var0];
                var0 = undefined;
                var7 = var2.bind(var0)(var1);
                var6 = var7.track;
                var1 = _closure1_slot5;
                var5 = var1.ORB_BALANCE_ACTION_SHEET_ACTION;
                var1 = {};
                var8 = 'GO_TO_QUEST_HOME';
                var1.type = var8;
                var8 = 19;
                var8 = var3[var8];
                var8 = var2.bind(var0)(var8);
                var8 = var8.YOU_SCREEN;
                var1.source = var8;
                var8 = _closure2_slot0;
                var1.balance = var8;
                var1 = var6.bind(var7)(var5, var1);
                var1 = 16;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openQuestHome;
                var1 = {};
                var5 = true;
                var1.mergeExistingRoutes = var5;
                var4 = _closure1_slot9;
                var4 = var4.VIRTUAL_CURRENCY;
                var1.filter = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.onButtonPress = var8;
            var3.secondaryButtonConfig = var2;
            var2 = 19;
            var2 = var7[var2];
            var2 = var6.bind(var0)(var2);
            var2 = var2.YOU_SCREEN;
            var3.source = var2;
            var2 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 18;
                var1 = var0[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = 17;
                var1 = var0[var1];
                var0 = var0.paths;
                var2 = var2.bind(var3)(var1, var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.default;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = 'BalanceWidgetMenu';
            var1 = var4.bind(var5)(var2, var1, var3);
            return var0;
        };
        var7 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot12;
        var0 = {};
        var0.onPress = var7;
        var0.style = var6;
        var6 = _closure1_slot10;
        var4 = 21;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.BalanceWidgetPill;
        var4 = {};
        var4.balance = var8;
        var4.onPress = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var1 = var1.DismissibleContentGroupName;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.RewardFilterTypes;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = function(arg0) { // Original name: BalanceWidget, environment: var3
        var0 = arg0;
        var4 = var0.onPress;
        var6 = var0.style;
        var8 = var0.children;
        var0 = _closure1_slot14;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 7;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var7 = 'button';
        var0.accessibilityRole = var7;
        var10 = 8;
        var7 = var14[var10];
        var7 = var13.bind(var3)(var7);
        var12 = var7.intl;
        var11 = var12.string;
        var7 = var14[var10];
        var7 = var13.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.y0WGqP;
        var7 = var11.bind(var12)(var7);
        var0.accessibilityLabel = var7;
        var0.onPress = var4;
        var7 = var9.pressable;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot10;
        var4 = 9;
        var4 = var14[var4];
        var4 = var13.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'accessibilityRole': 'header',
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var11 = var9.label;
        var4.style = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.gGtZpz;
        var10 = var11.bind(var12)(var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot4;
        var5 = {};
        var9 = var9.pill;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var1;
    var1 = function(arg0) { // Original name: OrbsOnboardingMenuDismissibleContent, environment: var3
        var0 = arg0;
        var0 = var0.style;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot10;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 10;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var7 = _closure1_slot0;
        var6 = 11;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var6 = var6.DismissibleContent;
        var7 = var6.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
        var6 = new Array(1);
        var6[0] = var7;
        var0.contentTypes = var6;
        var5 = _closure1_slot8;
        var5 = var5.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
        var0.groupName = var5;
        var4 = function(arg0) { // Original name: children, environment: var4
            _fun87293: for (var _fun87293_ip = 0;;) switch (_fun87293_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                    if (!(var2 !== var1)) {
                        _fun87293_ip = 66;
                        continue _fun87293
                    }
                case 62:
                    var1 = null;
                    return var1;
                case 66:
                    var7 = function() { // Original name: handleOnboardingPress, environment: var0
                        var2 = _closure3_slot0;
                        var0 = _closure1_slot7;
                        var1 = var0.TAKE_ACTION;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var1 = var3[var1];
                        var6 = var2.bind(var0)(var1);
                        var5 = var6.track;
                        var1 = _closure1_slot5;
                        var2 = var1.USER_PROFILE_ACTION;
                        var1 = {};
                        var7 = 'ORBS_BALANCE_PRESSED';
                        var1.profile_action = var7;
                        var1 = var5.bind(var6)(var2, var1);
                        var2 = _closure1_slot0;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openQuestHome;
                        var1 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.VIRTUAL_CURRENCY;
                        var1.filter = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot12;
                    var0 = {};
                    var0.onPress = var7;
                    var5 = _closure2_slot0;
                    var0.style = var5;
                    var6 = _closure1_slot10;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var4.onPress = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var1;
    var4 = 24;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 16
    };
    var11 = 25;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var9.borderRadius = var11;
    var4.pressable = var9;
    var9 = {};
    var9.flex = var10;
    var4.label = var9;
    var9 = {
        'alignItems': 'center',
        'marginLeft': 'auto'
    };
    var4.pill = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: BalanceWidgetMenuWrapper, environment: var3
        _fun87295: for (var _fun87295_ip = 0;;) switch (_fun87295_ip) {
            case 0:
                var6 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 15;
                var0 = var8[var0];
                var4 = undefined;
                var1 = var7.bind(var4)(var0);
                var0 = var1.useFetchVirtualCurrencyBalance;
                var0 = var0.bind(var1)();
                var3 = var0.balance;
                var0 = 22;
                var0 = var8[var0];
                var2 = var7.bind(var4)(var0);
                var1 = var2.UNSAFE_isDismissibleContentDismissed;
                var0 = 11;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun87295_ip = 140;
                    continue _fun87295
                }
            case 97:
                var2 = _closure1_slot10;
                var1 = 0;
                if (!(!(var3 > var1))) {
                    _fun87295_ip = 116;
                    continue _fun87295
                }
            case 107:
                if (var0) {
                    _fun87295_ip = 116;
                    continue _fun87295
                }
            case 110:
                var1 = _closure1_slot13;
                _fun87295_ip = 120;
                continue _fun87295;
            case 116:
                var1 = _closure1_slot15;
            case 120:
                var0 = {};
                var10 = var0;
                var9 = var6;
                var3 = copyDataProperties(var10, var9);
                var0 = var2.bind(var4)(var1, var0);
                _fun87295_ip = 232;
                continue _fun87295;
            case 140:
                var3 = _closure1_slot10;
                var2 = _closure1_slot12;
                var1 = {};
                var7 = function() { // Original name: onPress, environment: var7
                    var0 = undefined;
                    return var0;
                };
                var1.onPress = var7;
                var6 = var6.style;
                var1.style = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 23;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Ellipsis;
                var5 = {
                    'variant': 'primary',
                    'size': 'sm'
                };
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 232:
                return var0;
        }
    };
    var2.default = var3;
    var2.OrbsOnboardingMenuDismissibleContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 3242, 1369, 5190, 33, 4864, 1234, 3901, 5918, 1358, 795, 9938, 11225, 9959, 3237, 9505, 1307, 5540, 4560, 9497, 3171, 4061, 1297, 671, 2]);