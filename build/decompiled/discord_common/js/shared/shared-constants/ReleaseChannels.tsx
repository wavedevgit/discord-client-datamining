// ../discord_common/js/shared/shared-constants/ReleaseChannels.tsx
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
    var1 = 'canaryRelease';
    var3.CANARY_RELEASE = var1;
    var1 = 'betaRelease';
    var3.BETA_RELEASE = var1;
    var1 = 'googleRelease';
    var3.GOOGLE_RELEASE = var1;
    var1 = 'canary';
    var3.CANARY = var1;
    var1 = 'ptb';
    var3.PTB = var1;
    var1 = 'stable';
    var3.STABLE = var1;
    var1 = 'adhoc';
    var3.ADHOC = var1;
    var1 = 'staging';
    var3.STAGING = var1;
    var1 = 'development';
    var3.DEVELOPMENT = var1;
    var1 = 'N/A';
    var3.N_A = var1;
    var1 = {};
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['canary', 'ptb', 'stable'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.WEB_AND_IOS = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['betaRelease', 'canaryRelease', 'googleRelease'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.ANDROID = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var9 = ['N/A', 'adhoc', 'development', 'staging'];
    var10 = var5;
    var4 = new var10[var6](var9, var8);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.OTHER = var4;
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var9 = ['N/A', 'adhoc', 'betaRelease', 'canary', 'canaryRelease', 'development', 'googleRelease', 'ptb', 'stable', 'staging'];
    var10 = var4;
    var0 = new var10[var5](var9, var8);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.ALL = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/ReleaseChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ReleaseChannels = var3;
    var2.ReleaseChannelsSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);