// modules/summaries/Summary.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var4 = 0;
    var3.SOURCE_0 = var4;
    var0 = 'SOURCE_0';
    var3[var4] = var0;
    var5 = 1;
    var3.SOURCE_1 = var5;
    var0 = 'SOURCE_1';
    var3[var5] = var0;
    var1 = {};
    var1.UNSET = var4;
    var6 = 'UNSET';
    var1[var4] = var6;
    var1.SOURCE_1 = var5;
    var1[var5] = var0;
    var5 = 2;
    var1.SOURCE_2 = var5;
    var0 = 'SOURCE_2';
    var1[var5] = var0;
    var0 = dependencyMap;
    var5 = var0[var4];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/summaries/Summary.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SummarySources = var3;
    var2.SummaryType = var1;
    var1 = function arg0, arg1() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.topic;
        var0.topic = var2;
        var2 = var1.summ_short;
        var0.summShort = var2;
        var2 = global;
        var4 = var2.Array;
        var3 = var4.from;
        var6 = var2.Set;
        var7 = var1.people;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var8 = var5;
        var2 = new var8[var6](var7, var6);
        var2 = var2 instanceof Object ? var2 : var5;
        var2 = var3.bind(var4)(var2);
        var0.people = var2;
        var2 = var1.start_id;
        var0.startId = var2;
        var2 = var1.end_id;
        var0.endId = var2;
        var2 = var1.count;
        var0.count = var2;
        var2 = arg1;
        var0.channelId = var2;
        var2 = var1.source;
        var0.source = var2;
        var1 = var1.type;
        var0.type = var1;
        return var0;
    };
    var2.createSummaryFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);