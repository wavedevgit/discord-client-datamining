// modules/messages/MessageReactionsTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var4 = 0;
    var3.NORMAL = var4;
    var1 = 'NORMAL';
    var3[var4] = var1;
    var5 = 1;
    var3.BURST = var5;
    var1 = 'BURST';
    var3[var5] = var1;
    var5 = 2;
    var3.VOTE = var5;
    var1 = 'VOTE';
    var3[var5] = var1;
    var5 = var0.Set;
    var1 = var3.NORMAL;
    var0 = new Array(2);
    var0[0] = var1;
    var1 = var3.BURST;
    var0[1] = var1;
    var1 = var5.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var5
        }
    });
    var10 = var1;
    var9 = var0;
    var0 = new var10[var5](var9, var8);
    var1 = var0 instanceof Object ? var0 : var1;
    var0 = dependencyMap;
    var5 = var0[var4];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageReactionsTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ReactionTypes = var3;
    var2.NOTIFICATION_REACTION_TYPES = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);