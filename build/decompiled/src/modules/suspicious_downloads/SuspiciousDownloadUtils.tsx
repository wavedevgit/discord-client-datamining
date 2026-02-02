// modules/suspicious_downloads/SuspiciousDownloadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var7 = var5.Set;
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var11 = var6.bind(var0)(var3);
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot2 = var3;
    var3 = {};
    var8 = var5.RegExp;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var11 = '/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*';
    var12 = var7;
    var6 = new var12[var8](var11, var10);
    var6 = var6 instanceof Object ? var6 : var7;
    var3['github.com'] = var6;
    var6 = var5.RegExp;
    var7 = var6.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var7 = '/downloads\\S*/[^/]*';
    var12 = var8;
    var11 = var7;
    var6 = new var12[var6](var11, var10);
    var6 = var6 instanceof Object ? var6 : var8;
    var3['bitbucket.org'] = var6;
    var5 = var5.RegExp;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var12 = var6;
    var5 = new var12[var5](var11, var10);
    var5 = var5 instanceof Object ? var5 : var6;
    var3['gitlab.com'] = var5;
    var _closure1_slot3 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/suspicious_downloads/SuspiciousDownloadUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92760: for (var _fun92760_ip = 0;;) switch (_fun92760_ip) {
            case 0:
                var1 = undefined;
                var4 = undefined;
                var12 = undefined;
                var8 = undefined;
                var9 = undefined;
                var6 = undefined;
                var7 = undefined;
                var10 = undefined;
                var15 = undefined;
                var5 = undefined;
                var2 = undefined;
                var13 = _closure1_slot0;
                var0 = _closure1_slot1;
                var11 = 1;
                var0 = var0[var11];
                var14 = var13.bind(var1)(var0);
                var13 = var14.toURLSafe;
                var0 = arg0;
                var13 = var13.bind(var14)(var0);
                var0 = null;
                if (!(var0 == var13)) {
                    _fun92760_ip = 67;
                    continue _fun92760
                }
            case 65:
                var13 = {};
            case 67:
                var12 = var13.pathname;
                var14 = var13.hostname;
                if (!(var0 != var14)) {
                    _fun92760_ip = 397;
                    continue _fun92760
                }
            case 86:
                var13 = _closure1_slot3;
                var16 = var13[var14];
                if (!(var0 != var16)) {
                    _fun92760_ip = 123;
                    continue _fun92760
                }
            case 98:
                var13 = var12;
                if (!(var0 != var13)) {
                    _fun92760_ip = 123;
                    continue _fun92760
                }
            case 105:
                var14 = var16.test;
                var13 = var12;
                var13 = var14.bind(var16)(var13);
                if (var13) {
                    _fun92760_ip = 123;
                    continue _fun92760
                }
            case 121:
                return var0;
            case 123:
                var13 = var12;
                if (!(var0 != var13)) {
                    _fun92760_ip = 395;
                    continue _fun92760
                }
            case 133:
                var8 = var12;
            case 136: // try_start_0
                var13 = global;
                var13 = var13.decodeURIComponent;
                var8 = var13.bind(var1)(var12);
            case 149: // try_end0
                _fun92760_ip = 153;
                continue _fun92760;
            case 151: // catch_target0
                CatchBlockStart(arg_register = 12);
            case 153:
                var13 = var8;
                var12 = var13.split;
                var8 = '/';
                var8 = var12.bind(var13)(var8);
                var9 = var8;
                var6 = null;
                var14 = 0;
                var7 = 0;
                var8 = var8.length;
                var11 = var8 - var11;
                var10 = var11;
                var13 = '..';
                var8 = '.';
                var12 = '';
                if (!(var11 >= var14)) {
                    _fun92760_ip = 279;
                    continue _fun92760
                }
            case 209:
                var16 = var9;
                var11 = var10;
                var11 = var16[var11];
                var15 = var11;
                if (!(var12 !== var11)) {
                    _fun92760_ip = 246;
                    continue _fun92760
                }
            case 226:
                var11 = var15;
                if (!(var8 !== var11)) {
                    _fun92760_ip = 246;
                    continue _fun92760
                }
            case 233:
                var11 = var15;
                if (!(var13 === var11)) {
                    _fun92760_ip = 261;
                    continue _fun92760
                }
            case 240:
                var11 = var7;
                var7 = var11 + 1;
            case 246:
                var11 = var10;
                var11 = var11 - 1;
                var10 = var11;
                if (var11 >= var14) {
                    _fun92760_ip = 209;
                    continue _fun92760
                }
            case 259:
                _fun92760_ip = 279;
                continue _fun92760;
            case 261:
                var12 = var7;
                var11 = var10;
                if (!(!(var12 > var11))) {
                    _fun92760_ip = 279;
                    continue _fun92760
                }
            case 271:
                var7 = var10 - var7;
                var6 = var9[var7];
            case 279:
                var7 = var6;
                if (!(var0 != var7)) {
                    _fun92760_ip = 393;
                    continue _fun92760
                }
            case 286:
                var7 = var6;
                var6 = var7.split;
                var6 = var6.bind(var7)(var8);
                var5 = var6;
                var7 = var6.length;
                var6 = 2;
                if (!(!(var7 < var6))) {
                    _fun92760_ip = 391;
                    continue _fun92760
                }
            case 314:
                var6 = var5;
                var5 = var6.pop;
                var5 = var5.bind(var6)();
                var4 = var5;
                var5 = var0 == var5;
                var1 = undefined;
                if (var5) {
                    _fun92760_ip = 352;
                    continue _fun92760
                }
            case 339:
                var5 = var4;
                var4 = var5.toLowerCase;
                var1 = var4.bind(var5)();
            case 352:
                var2 = var1;
                var4 = var0 != var1;
                var1 = null;
                if (!var4) {
                    _fun92760_ip = 389;
                    continue _fun92760
                }
            case 364:
                var5 = _closure1_slot2;
                var4 = var5.has;
                var3 = var2;
                var3 = var4.bind(var5)(var3);
                var1 = null;
                if (!var3) {
                    _fun92760_ip = 389;
                    continue _fun92760
                }
            case 386:
                var1 = var2;
            case 389:
                return var1;
            case 391:
                return var0;
            case 393:
                return var0;
            case 395:
                return var0;
            case 397:
                return var0;
        }
    };
    var2.isSuspiciousDownload = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12090, 1457, 2]);