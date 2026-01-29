// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun5819: for (var _fun5819_ip = 0;;) switch (_fun5819_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var1 = global;
            var8 = var1.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var13 = true;
            var3.value = var13;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var7 = var6[var0];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var7);
            var3 = {};
            var7 = 'AndroidSwipeRefreshLayout';
            var3.uiViewClassName = var7;
            var8 = {};
            var9 = {};
            var10 = 'onRefresh';
            var9.registrationName = var10;
            var8.topRefresh = var9;
            var3.directEventTypes = var8;
            var10 = var1.Object;
            var9 = var10.assign;
            var8 = {
                'enabled': true,
                'colors': null,
                'progressBackgroundColor': null,
                'size': true,
                'progressViewOffset': true,
                'refreshing': true
            };
            var1 = {};
            var11 = 1;
            var11 = var6[var11];
            var12 = var4.bind(var0)(var11);
            var11 = 'default';
            var14 = var11 in var12;
            var11 = var12;
            if (!var14) {
                _fun5819_ip = 157;
                continue _fun5819
            }
        case 152:
            var11 = var12.default;
        case 157:
            var1.process = var11;
            var8.colors = var1;
            var1 = {};
            var11 = 2;
            var11 = var6[var11];
            var11 = var4.bind(var0)(var11);
            var11 = var11.default;
            var1.process = var11;
            var8.progressBackgroundColor = var1;
            var1 = 3;
            var1 = var6[var1];
            var12 = var4.bind(var0)(var1);
            var11 = var12.ConditionallyIgnoredEventHandlers;
            var1 = {};
            var1.onRefresh = var13;
            var1 = var11.bind(var12)(var1);
            var1 = var9.bind(var10)(var8, var1);
            var3.validAttributes = var1;
            var _closure1_slot2 = var3;
            var1 = 4;
            var1 = var6[var1];
            var6 = var4.bind(var0)(var1);
            var4 = var6.get;
            var1 = function() { // Environment: var5
                var0 = _closure1_slot2;
                return var0;
            };
            var4 = var4.bind(var6)(var7, var1);
            var1 = {};
            var5 = function(arg0, arg1) { // Original name: setNativeRefreshing, environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var4 = var5.dispatchCommand;
                var3 = new Array(1);
                var1 = arg1;
                var3[0] = var1;
                var2 = arg0;
                var1 = 'setNativeRefreshing';
                var1 = var4.bind(var5)(var2, var1, var3);
                return var0;
            };
            var1.setNativeRefreshing = var5;
            var2.default = var4;
            var2.__INTERNAL_VIEW_CONFIG = var3;
            var2.Commands = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 89, 38, 110, 42, 117]);