// modules/main_tabs_v2/native/YouBarStackNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: getGuildsComponent, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: getNotificationsComponent, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.ThemedNotifications;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: getYouComponent, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: getICYMIComponent, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var _closure1_slot4 = var8;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MainTabsNavigatorScreens;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: YouBarStackNavigator, environment: var1
        var0 = function() { // Original name: useInitialGuildParams, environment: var6
            _fun101036: for (var _fun101036_ip = 0;;) switch (_fun101036_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.useRef;
                    var2 = undefined;
                    var0 = var0.bind(var1)(var2);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var6 = var4.bind(var2)(var1);
                    var5 = var6.useStateFromStores;
                    var1 = _closure1_slot7;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var1 = function() { // Environment: var1
                        var1 = _closure1_slot7;
                        var0 = var1.getGuildId;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = var5.bind(var6)(var4, var1);
                    var1 = var0.current;
                    var4 = null;
                    var1 = var4 == var1;
                    if (!var1) {
                        _fun101036_ip = 89;
                        continue _fun101036
                    }
                case 85:
                    var1 = var4 != var6;
                case 89:
                    if (!var1) {
                        _fun101036_ip = 135;
                        continue _fun101036
                    }
                case 92:
                    var1 = {};
                    var1.guildId = var6;
                    var5 = _closure1_slot6;
                    var3 = var5.getChannelId;
                    var3 = var3.bind(var5)(var6);
                    var4 = var4 != var3;
                    var2 = undefined;
                    if (!var4) {
                        _fun101036_ip = 125;
                        continue _fun101036
                    }
                case 122:
                    var2 = var3;
                case 125:
                    var1.channelId = var2;
                    var0.current = var1;
                case 135:
                    var0 = var0.current;
                    return var0;
            }
        };
        var3 = undefined;
        var12 = var0.bind(var3)();
        var _closure2_slot0 = var12;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 12;
        var0 = var2[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var0 = 13;
        var0 = var2[var0];
        var7 = var1.bind(var3)(var0);
        var5 = var7.useICYMIEnabled;
        var0 = 'TabsNavigator';
        var11 = var5.bind(var7)(var0);
        var _closure2_slot1 = var11;
        var0 = 14;
        var0 = var2[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useAccessibilityNativeStackOptions;
        var10 = var0.bind(var1)();
        var _closure2_slot2 = var10;
        var9 = _closure1_slot3;
        var2 = var9.useMemo;
        var1 = new Array(1);
        var1[0] = var10;
        var0 = function() { // Environment: var6
            var0 = {};
            var3 = _closure2_slot2;
            var4 = var0;
            var1 = copyDataProperties(var4, var3);
            var2 = false;
            var1 = 'headerShown';
            var0[var1] = var2;
            var2 = true;
            var1 = 'gestureEnabled';
            var0[var1] = var2;
            var1 = 'fullScreenGestureEnabled';
            var0[var1] = var2;
            return var0;
        };
        var7 = var2.bind(var9)(var0, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = _closure1_slot4;
        var5 = var5.absoluteFillObject;
        var0.style = var5;
        var4 = _closure1_slot12;
        var5 = var4.Navigator;
        var4 = {};
        var8 = 'tabs';
        var4.id = var8;
        var4.screenOptions = var7;
        var8 = var9.useMemo;
        var7 = new Array(3);
        var7[0] = var12;
        var7[1] = var11;
        var7[2] = var10;
        var6 = function() { // Environment: var6
            _fun101039: for (var _fun101039_ip = 0;;) switch (_fun101039_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var7 = _closure1_slot9;
                    var0 = _closure1_slot12;
                    var6 = var0.Screen;
                    var4 = {};
                    var0 = _closure1_slot8;
                    var0 = var0.GUILDS;
                    var4.name = var0;
                    var0 = _closure2_slot0;
                    var4.initialParams = var0;
                    var0 = _closure1_slot13;
                    var4.getComponent = var0;
                    var0 = function() { // Original name: options, environment: var8
                        var0 = {};
                        var2 = _closure2_slot2;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var4.options = var0;
                    var0 = undefined;
                    var6 = var7.bind(var0)(var6, var4);
                    var4 = new Array(4);
                    var4[0] = var6;
                    var6 = _closure2_slot1;
                    var5 = null;
                    if (!var6) {
                        _fun101039_ip = 158;
                        continue _fun101039
                    }
                case 102:
                    var10 = _closure1_slot9;
                    var6 = _closure1_slot12;
                    var7 = var6.Screen;
                    var6 = {};
                    var11 = _closure1_slot8;
                    var11 = var11.ICYMI;
                    var6.name = var11;
                    var11 = _closure1_slot16;
                    var6.getComponent = var11;
                    var11 = function() { // Original name: options, environment: var8
                        var0 = {};
                        var2 = _closure2_slot2;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var6.options = var11;
                    var5 = var10.bind(var0)(var7, var6);
                case 158:
                    var4[1] = var5;
                    var7 = _closure1_slot9;
                    var5 = _closure1_slot12;
                    var11 = var5.Screen;
                    var6 = {};
                    var10 = _closure1_slot8;
                    var12 = var10.NOTIFICATIONS;
                    var6.name = var12;
                    var12 = _closure1_slot14;
                    var6.getComponent = var12;
                    var12 = function() { // Original name: options, environment: var8
                        var0 = {};
                        var2 = _closure2_slot2;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var6.options = var12;
                    var6 = var7.bind(var0)(var11, var6);
                    var4[2] = var6;
                    var6 = var5.Screen;
                    var5 = {};
                    var10 = var10.YOU;
                    var5.name = var10;
                    var9 = _closure1_slot15;
                    var5.getComponent = var9;
                    var8 = function() { // Original name: options, environment: var8
                        var0 = {};
                        var2 = _closure2_slot2;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var5.options = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[3] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var6 = var8.bind(var9)(var6, var7);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/YouBarStackNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1661, 3172, 6900, 33, 9063, 13112, 13459, 13504, 13528, 566, 13610, 8822, 5744, 2]);