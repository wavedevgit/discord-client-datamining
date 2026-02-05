// modules/reply_nudge/ReplyNudgeExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var1);
    var6 = var7.createApexExperiment;
    var1 = {
        'name': '2026-01-reply-nudge',
        'kind': 'user'
    };
    var3 = {
        'enabled': false,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var10 = 1;
    var8 = var5[var10];
    var8 = var12.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var13 = 3;
    var8 = var13 * var8;
    var3.maxNudgeAge = var8;
    var8 = var5[var10];
    var8 = var12.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var15 = 12;
    var8 = var15 * var8;
    var3.minSinceReceiverMessageMs = var8;
    var8 = var5[var10];
    var8 = var12.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var14 = 24;
    var8 = var14 * var8;
    var3.minLatestMessageAgeMs = var8;
    var1.defaultConfig = var3;
    var8 = {};
    var9 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 2
    };
    var3 = 2;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var15 * var11;
    var9.minSinceReceiverMessageMs = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var14 * var11;
    var9.minLatestMessageAgeMs = var11;
    var8[1] = var9;
    var9 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 0.05,
        'maxNudgeCount': 2
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var15 * var11;
    var9.minSinceReceiverMessageMs = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var14 * var11;
    var9.minLatestMessageAgeMs = var11;
    var8[2] = var9;
    var9 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 2
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var15 = 36;
    var11 = var15 * var11;
    var9.minSinceReceiverMessageMs = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var14 * var11;
    var9.minLatestMessageAgeMs = var11;
    var8[3] = var9;
    var9 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 0.05,
        'maxNudgeCount': 2
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var15 * var11;
    var9.minSinceReceiverMessageMs = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var14 * var11;
    var9.minLatestMessageAgeMs = var11;
    var8[4] = var9;
    var9 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var14 = 5;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var14 * var11;
    var9.minSinceReceiverMessageMs = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var14 * var11;
    var9.minLatestMessageAgeMs = var11;
    var8[5] = var9;
    var9 = {
        'enabled': true,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.DAY;
    var11 = var13 * var11;
    var9.maxNudgeAge = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.Millis;
    var13 = var11.HOUR;
    var11 = 6;
    var13 = var11 * var13;
    var9.minSinceReceiverMessageMs = var13;
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.HOUR;
    var10 = var11 * var10;
    var9.minLatestMessageAgeMs = var10;
    var8[6] = var9;
    var1.variations = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/ReplyNudgeExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ReplyNudgeExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 667, 2]);