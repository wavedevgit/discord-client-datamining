// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37550: for (var _fun37550_ip = 0;;) switch (_fun37550_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var7 = dependencyMap;
            var8 = global;
            var9 = var8.Object;
            var6 = var9.defineProperty;
            var1 = {};
            var4 = true;
            var1.value = var4;
            var0 = '__esModule';
            var0 = var6.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.codegenNativeComponent;
            var1 = {};
            var6 = 'RNSBottomTabsScreen';
            var1.uiViewClassName = var6;
            var9 = {};
            var10 = {};
            var11 = 'onLifecycleStateChange';
            var10.registrationName = var11;
            var9.topLifecycleStateChange = var10;
            var10 = {};
            var11 = 'onWillAppear';
            var10.registrationName = var11;
            var9.topWillAppear = var10;
            var10 = {};
            var11 = 'onDidAppear';
            var10.registrationName = var11;
            var9.topDidAppear = var10;
            var10 = {};
            var11 = 'onWillDisappear';
            var10.registrationName = var11;
            var9.topWillDisappear = var10;
            var10 = {};
            var11 = 'onDidDisappear';
            var10.registrationName = var11;
            var9.topDidDisappear = var10;
            var1.directEventTypes = var9;
            var10 = var8.Object;
            var9 = var10.assign;
            var8 = {
                'isFocused': true,
                'tabKey': true,
                'title': true,
                'isTitleUndefined': true,
                'badgeValue': true,
                'tabBarItemTestID': true,
                'tabBarItemAccessibilityLabel': true,
                'orientation': true,
                'drawableIconResourceName': true,
                'imageIconResource': null,
                'tabBarItemBadgeTextColor': null,
                'tabBarItemBadgeBackgroundColor': null,
                'standardAppearance': true,
                'scrollEdgeAppearance': true,
                'iconType': true
            };
            var11 = {};
            var13 = 1;
            var12 = var7[var13];
            var15 = var5.bind(var0)(var12);
            var12 = 'default';
            var16 = var12 in var15;
            var14 = var15;
            if (!var16) {
                _fun37550_ip = 228;
                continue _fun37550
            }
        case 223:
            var14 = var15.default;
        case 228:
            var11.process = var14;
            var8.imageIconResource = var11;
            var11 = {};
            var14 = 2;
            var15 = var7[var14];
            var15 = var5.bind(var0)(var15);
            var15 = var15.default;
            var11.process = var15;
            var8.tabBarItemBadgeTextColor = var11;
            var11 = {};
            var14 = var7[var14];
            var14 = var5.bind(var0)(var14);
            var14 = var14.default;
            var11.process = var14;
            var8.tabBarItemBadgeBackgroundColor = var11;
            var11 = {};
            var14 = var7[var13];
            var15 = var5.bind(var0)(var14);
            var16 = var12 in var15;
            var14 = var15;
            if (!var16) {
                _fun37550_ip = 322;
                continue _fun37550
            }
        case 317:
            var14 = var15.default;
        case 322:
            var11.process = var14;
            var8.iconImageSource = var11;
            var8.iconResourceName = var4;
            var11 = {};
            var13 = var7[var13];
            var13 = var5.bind(var0)(var13);
            var14 = var12 in var13;
            var12 = var13;
            if (!var14) {
                _fun37550_ip = 367;
                continue _fun37550
            }
        case 362:
            var12 = var13.default;
        case 367:
            var11.process = var12;
            var8.selectedIconImageSource = var11;
            var8.selectedIconResourceName = var4;
            var8.systemItem = var4;
            var8.specialEffects = var4;
            var8.overrideScrollViewContentInsetAdjustmentBehavior = var4;
            var8.bottomScrollEdgeEffect = var4;
            var8.leftScrollEdgeEffect = var4;
            var8.rightScrollEdgeEffect = var4;
            var8.topScrollEdgeEffect = var4;
            var8.userInterfaceStyle = var4;
            var4 = 3;
            var4 = var7[var4];
            var12 = var5.bind(var0)(var4);
            var11 = var12.ConditionallyIgnoredEventHandlers;
            var4 = {
                'onLifecycleStateChange': true,
                'onWillAppear': true,
                'onDidAppear': true,
                'onWillDisappear': true,
                'onDidDisappear': true
            };
            var4 = var11.bind(var12)(var4);
            var4 = var9.bind(var10)(var8, var4);
            var1.validAttributes = var4;
            var _closure1_slot0 = var1;
            var4 = 4;
            var4 = var7[var4];
            var5 = var5.bind(var0)(var4);
            var4 = var5.get;
            var3 = function() { // Environment: var3
                var0 = _closure1_slot0;
                return var0;
            };
            var3 = var4.bind(var5)(var6, var3);
            var2.default = var3;
            var2.__INTERNAL_VIEW_CONFIG = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 90, 38, 110, 42]);