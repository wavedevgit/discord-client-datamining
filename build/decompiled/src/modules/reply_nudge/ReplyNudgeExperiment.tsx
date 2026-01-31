// modules/reply_nudge/ReplyNudgeExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var6 = var4.bind(var0)(var1);
    var3 = var6.createApexExperiment;
    var1 = {
        'name': '2026-01-reply-nudge',
        'kind': 'user'
    };
    var7 = {
        'enabled': false,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var9 = 1;
    var8 = var5[var9];
    var8 = var11.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var14 = 3;
    var8 = var14 * var8;
    var7.maxNudgeAge = var8;
    var8 = var5[var9];
    var8 = var11.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var10 = 12;
    var8 = var10 * var8;
    var7.minSinceReceiverMessageMs = var8;
    var8 = var5[var9];
    var8 = var11.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var8 = var10 * var8;
    var7.minLatestMessageAgeMs = var8;
    var1.defaultConfig = var7;
    var7 = {};
    var8 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[1] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var15 = 5;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[2] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var13 = 24;
    var12 = var13 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[3] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var13 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[4] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': true,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var15 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var15 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[5] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[6] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[7] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 1
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var13 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var10 * var12;
    var8.minLatestMessageAgeMs = var12;
    var7[8] = var8;
    var8 = {
        'enabled': true,
        'displayNudges': false,
        'minUserDMAffinity': 4294967295,
        'maxNudgeCount': 5
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.DAY;
    var12 = var14 * var12;
    var8.maxNudgeAge = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.HOUR;
    var12 = var13 * var12;
    var8.minSinceReceiverMessageMs = var12;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.Millis;
    var9 = var9.HOUR;
    var9 = var10 * var9;
    var8.minLatestMessageAgeMs = var9;
    var7[9] = var8;
    var1.variations = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/ReplyNudgeExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ReplyNudgeExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 667, 2]);