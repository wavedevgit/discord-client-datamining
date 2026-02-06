// ../discord_common/js/shared/lib/PlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29018: for (var _fun29018_ip = 0;;) switch (_fun29018_ip) {
        case 0:
            var9 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var1);
            var4 = var3.Set;
            var0 = var4.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var16 = ['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook'];
            var17 = var1;
            var0 = new var17[var4](var16, var15);
            var11 = var0 instanceof Object ? var0 : var1;
            var4 = var3.Set;
            var0 = var4.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var16 = ['Android', 'iOS', 'Windows Phone'];
            var17 = var1;
            var0 = new var17[var4](var16, var15);
            var10 = var0 instanceof Object ? var0 : var1;
            var1 = var3.window;
            var8 = null;
            var5 = var8 == var1;
            var0 = undefined;
            var4 = undefined;
            if (var5) {
                _fun29018_ip = 153;
                continue _fun29018
            }
        case 132:
            var1 = var1.navigator;
            var5 = var8 == var1;
            var4 = undefined;
            if (var5) {
                _fun29018_ip = 153;
                continue _fun29018
            }
        case 147:
            var4 = var1.platform;
        case 153:
            var1 = 'MacIntel';
            var1 = var1 === var4;
            if (!var1) {
                _fun29018_ip = 206;
                continue _fun29018
            }
        case 166:
            var5 = var3.window;
            var6 = var8 == var5;
            var4 = undefined;
            if (var6) {
                _fun29018_ip = 202;
                continue _fun29018
            }
        case 181:
            var5 = var5.navigator;
            var6 = var8 == var5;
            var4 = undefined;
            if (var6) {
                _fun29018_ip = 202;
                continue _fun29018
            }
        case 196:
            var4 = var5.standalone;
        case 202:
            var1 = var0 !== var4;
        case 206:
            if (!var1) {
                _fun29018_ip = 252;
                continue _fun29018
            }
        case 209:
            var3 = var3.window;
            var5 = var8 == var3;
            var4 = undefined;
            if (var5) {
                _fun29018_ip = 245;
                continue _fun29018
            }
        case 224:
            var3 = var3.navigator;
            var5 = var8 == var3;
            var4 = undefined;
            if (var5) {
                _fun29018_ip = 245;
                continue _fun29018
            }
        case 239:
            var4 = var3.maxTouchPoints;
        case 245:
            var3 = 1;
            var1 = var4 > var3;
        case 252:
            var5 = var11.has;
            var6 = 0;
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var12 = var3.product;
            var13 = var8 != var12;
            var4 = '';
            var3 = var4;
            if (!var13) {
                _fun29018_ip = 291;
                continue _fun29018
            }
        case 288:
            var3 = var12;
        case 291:
            var5 = var5.bind(var11)(var3);
            if (var5) {
                _fun29018_ip = 302;
                continue _fun29018
            }
        case 299:
            var5 = var1;
        case 302:
            var1 = !var5;
            if (!var1) {
                _fun29018_ip = 376;
                continue _fun29018
            }
        case 308:
            var3 = var10.has;
            var11 = var7[var6];
            var11 = var9.bind(var0)(var11);
            var12 = var8 == var11;
            var11 = undefined;
            if (var12) {
                _fun29018_ip = 361;
                continue _fun29018
            }
        case 331:
            var12 = var7[var6];
            var12 = var9.bind(var0)(var12);
            var12 = var12.os;
            var13 = var8 == var12;
            var11 = undefined;
            if (var13) {
                _fun29018_ip = 361;
                continue _fun29018
            }
        case 355:
            var11 = var12.family;
        case 361:
            var12 = var8 != var11;
            if (!var12) {
                _fun29018_ip = 371;
                continue _fun29018
            }
        case 368:
            var4 = var11;
        case 371:
            var1 = var3.bind(var10)(var4);
        case 376:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var3 = var8 == var3;
            var4 = undefined;
            if (var3) {
                _fun29018_ip = 424;
                continue _fun29018
            }
        case 394:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var3 = var3.os;
            var10 = var8 == var3;
            var4 = undefined;
            if (var10) {
                _fun29018_ip = 424;
                continue _fun29018
            }
        case 418:
            var4 = var3.family;
        case 424:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var10 = var8 == var3;
            var3 = undefined;
            if (var10) {
                _fun29018_ip = 472;
                continue _fun29018
            }
        case 442:
            var6 = var7[var6];
            var6 = var9.bind(var0)(var6);
            var6 = var6.os;
            var8 = var8 == var6;
            var3 = undefined;
            if (var8) {
                _fun29018_ip = 472;
                continue _fun29018
            }
        case 466:
            var3 = var6.family;
        case 472:
            var6 = 1;
            var7 = var7[var6];
            var6 = require;
            var8 = var6.bind(var0)(var7);
            var7 = var8.fileFinishedImporting;
            var6 = '../discord_common/js/shared/lib/PlatformUtils.tsx';
            var6 = var7.bind(var8)(var6);
            var2.isTablet = var5;
            var2.isMobile = var1;
            var1 = 'iOS';
            var1 = var1 === var4;
            var2.isIOSWeb = var1;
            var1 = 'Android';
            var1 = var1 === var3;
            var2.isAndroidWeb = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [654, 2]);