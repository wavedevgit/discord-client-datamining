// ../discord_common/js/shared/lib/PlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29101: for (var _fun29101_ip = 0;;) switch (_fun29101_ip) {
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
                _fun29101_ip = 151;
                continue _fun29101
            }
        case 130:
            var1 = var1.navigator;
            var5 = var8 == var1;
            var4 = undefined;
            if (var5) {
                _fun29101_ip = 151;
                continue _fun29101
            }
        case 145:
            var4 = var1.platform;
        case 151:
            var1 = 'MacIntel';
            var1 = var1 === var4;
            if (!var1) {
                _fun29101_ip = 204;
                continue _fun29101
            }
        case 164:
            var5 = var3.window;
            var6 = var8 == var5;
            var4 = undefined;
            if (var6) {
                _fun29101_ip = 200;
                continue _fun29101
            }
        case 179:
            var5 = var5.navigator;
            var6 = var8 == var5;
            var4 = undefined;
            if (var6) {
                _fun29101_ip = 200;
                continue _fun29101
            }
        case 194:
            var4 = var5.standalone;
        case 200:
            var1 = var0 !== var4;
        case 204:
            if (!var1) {
                _fun29101_ip = 250;
                continue _fun29101
            }
        case 207:
            var3 = var3.window;
            var5 = var8 == var3;
            var4 = undefined;
            if (var5) {
                _fun29101_ip = 243;
                continue _fun29101
            }
        case 222:
            var3 = var3.navigator;
            var5 = var8 == var3;
            var4 = undefined;
            if (var5) {
                _fun29101_ip = 243;
                continue _fun29101
            }
        case 237:
            var4 = var3.maxTouchPoints;
        case 243:
            var3 = 1;
            var1 = var4 > var3;
        case 250:
            var5 = var11.has;
            var6 = 0;
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var12 = var3.product;
            var13 = var8 != var12;
            var4 = '';
            var3 = var4;
            if (!var13) {
                _fun29101_ip = 289;
                continue _fun29101
            }
        case 286:
            var3 = var12;
        case 289:
            var5 = var5.bind(var11)(var3);
            if (var5) {
                _fun29101_ip = 300;
                continue _fun29101
            }
        case 297:
            var5 = var1;
        case 300:
            var1 = !var5;
            if (!var1) {
                _fun29101_ip = 374;
                continue _fun29101
            }
        case 306:
            var3 = var10.has;
            var11 = var7[var6];
            var11 = var9.bind(var0)(var11);
            var12 = var8 == var11;
            var11 = undefined;
            if (var12) {
                _fun29101_ip = 359;
                continue _fun29101
            }
        case 329:
            var12 = var7[var6];
            var12 = var9.bind(var0)(var12);
            var12 = var12.os;
            var13 = var8 == var12;
            var11 = undefined;
            if (var13) {
                _fun29101_ip = 359;
                continue _fun29101
            }
        case 353:
            var11 = var12.family;
        case 359:
            var12 = var8 != var11;
            if (!var12) {
                _fun29101_ip = 369;
                continue _fun29101
            }
        case 366:
            var4 = var11;
        case 369:
            var1 = var3.bind(var10)(var4);
        case 374:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var3 = var8 == var3;
            var4 = undefined;
            if (var3) {
                _fun29101_ip = 422;
                continue _fun29101
            }
        case 392:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var3 = var3.os;
            var10 = var8 == var3;
            var4 = undefined;
            if (var10) {
                _fun29101_ip = 422;
                continue _fun29101
            }
        case 416:
            var4 = var3.family;
        case 422:
            var3 = var7[var6];
            var3 = var9.bind(var0)(var3);
            var10 = var8 == var3;
            var3 = undefined;
            if (var10) {
                _fun29101_ip = 470;
                continue _fun29101
            }
        case 440:
            var6 = var7[var6];
            var6 = var9.bind(var0)(var6);
            var6 = var6.os;
            var8 = var8 == var6;
            var3 = undefined;
            if (var8) {
                _fun29101_ip = 470;
                continue _fun29101
            }
        case 464:
            var3 = var6.family;
        case 470:
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