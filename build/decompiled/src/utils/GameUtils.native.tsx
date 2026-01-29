// utils/GameUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = function() { // Original name: waitSubscribed, environment: var0
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.waitSubscribed = var3;
    var3 = function() { // Original name: waitConnected, environment: var0
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.waitConnected = var3;
    var3 = function() { // Original name: isLaunchable, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.isLaunchable = var3;
    var3 = function() { // Original name: launch, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.reject;
        var4 = var0.Error;
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var5 = 'not supported';
        var6 = var3;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.launch = var3;
    var3 = function() { // Original name: launchDispatchApplication, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.reject;
        var4 = var0.Error;
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var5 = 'not supported';
        var6 = var3;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.launchDispatchApplication = var3;
    var3 = function() { // Original name: removeShortcuts, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.removeShortcuts = var3;
    var3 = function() { // Original name: createShortcuts, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createShortcuts = var3;
    var3 = function() { // Original name: isGameLaunchable, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.isGameLaunchable = var3;
    var3 = function() { // Original name: launchGame, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.reject;
        var4 = var0.Error;
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var5 = 'not supported';
        var6 = var3;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.launchGame = var3;
    var3 = function() { // Original name: isProtocolRegistered, environment: var0
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = false;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.isProtocolRegistered = var3;
    var0 = function() { // Original name: setRecentGames, environment: var0
        var0 = undefined;
        return var0;
    };
    var1.setRecentGames = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/GameUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);