// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var1 = function arg0() {
        _fun1468: for (var _fun1468_ip = 0;;) switch (_fun1468_ip) {
            case 0:
                var26 = arg0;
                var2 = 'string';
                var1 = typeof var26;
                var0 = var26;
                if (!(var2 === var1)) {
                    _fun1468_ip = 531;
                    continue _fun1468
                }
            case 20:
                var25 = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
                var24 = ['50%', '50%', 0];
                var1 = var25.exec;
                var1 = var1.bind(var25)(var26);
                var23 = 0;
                var22 = undefined;
                var20 = 1;
                var19 = 'Transform-origin %s can only be used for x-position';
                var18 = '100%';
                var17 = 'left';
                var16 = 2;
                var15 = '50%';
                var14 = false;
                var13 = 'Could not parse transform-origin: %s';
                var12 = 'center';
                var11 = 'right';
                var10 = null;
                var9 = 'Transform-origin %s can only be used for y-position';
                var8 = 'top';
                var7 = 'Transform-origin value %s cannot be used for z-position';
                var6 = global;
                var5 = '%';
                var4 = 'bottom';
                var3 = 0;
                var2 = undefined;
                var0 = var24;
                if (!var1) {
                    _fun1468_ip = 531;
                    continue _fun1468
                }
            case 147:
                var27 = var3 + var20;
                var33 = var1[var23];
                var28 = var33.toLowerCase;
                var31 = var28.bind(var33)();
                if (!(var17 !== var31)) {
                    _fun1468_ip = 458;
                    continue _fun1468
                }
            case 172:
                if (!(var11 !== var31)) {
                    _fun1468_ip = 458;
                    continue _fun1468
                }
            case 179:
                if (!(var8 !== var31)) {
                    _fun1468_ip = 289;
                    continue _fun1468
                }
            case 183:
                if (!(var4 !== var31)) {
                    _fun1468_ip = 289;
                    continue _fun1468
                }
            case 187:
                if (!(var12 !== var31)) {
                    _fun1468_ip = 246;
                    continue _fun1468
                }
            case 191:
                var28 = var33.endsWith;
                var28 = var28.bind(var33)(var5);
                if (var28) {
                    _fun1468_ip = 231;
                    continue _fun1468
                }
            case 205:
                var28 = var6.parseFloat;
                var28 = var28.bind(var22)(var33);
                var24[var3] = var28;
                var29 = var27;
                var28 = var2;
                _fun1468_ip = 505;
                continue _fun1468;
            case 231:
                var24[var3] = var33;
                var29 = var27;
                var28 = var2;
                _fun1468_ip = 505;
                continue _fun1468;
            case 246:
                var32 = _closure1_slot0;
                var30 = _closure1_slot1;
                var30 = var30[var20];
                var32 = var32.bind(var22)(var30);
                var30 = var16 !== var3;
                var30 = var32.bind(var22)(var30, var7, var33);
                var24[var3] = var15;
                var29 = var27;
                var28 = var2;
                _fun1468_ip = 505;
                continue _fun1468;
            case 289:
                var32 = _closure1_slot0;
                var30 = _closure1_slot1;
                var30 = var30[var20];
                var32 = var32.bind(var22)(var30);
                var30 = var16 !== var3;
                var30 = var32.bind(var22)(var30, var9, var33);
                var30 = var18;
                if (!(var8 === var31)) {
                    _fun1468_ip = 326;
                    continue _fun1468
                }
            case 324:
                var30 = 0;
            case 326:
                var24[var20] = var30;
                var29 = var27;
                var28 = var2;
                if (!(var23 === var3)) {
                    _fun1468_ip = 505;
                    continue _fun1468
                }
            case 343:
                var30 = var25.exec;
                var30 = var30.bind(var25)(var26);
                var0 = var24;
                if (!(var10 != var30)) {
                    _fun1468_ip = 531;
                    continue _fun1468
                }
            case 364:
                var34 = var30[var23];
                var32 = var34.toLowerCase;
                var32 = var32.bind(var34)();
                if (!(var17 !== var32)) {
                    _fun1468_ip = 446;
                    continue _fun1468
                }
            case 382:
                if (!(var11 !== var32)) {
                    _fun1468_ip = 434;
                    continue _fun1468
                }
            case 386:
                if (!(var12 !== var32)) {
                    _fun1468_ip = 422;
                    continue _fun1468
                }
            case 390:
                var34 = _closure1_slot0;
                var32 = _closure1_slot1;
                var32 = var32[var20];
                var32 = var34.bind(var22)(var32);
                var32 = var32.bind(var22)(var14, var13, var26);
                var29 = var16;
                var28 = var30;
                _fun1468_ip = 505;
                continue _fun1468;
            case 422:
                var24[var23] = var15;
                var29 = var16;
                var28 = var30;
                _fun1468_ip = 505;
                continue _fun1468;
            case 434:
                var24[var23] = var18;
                var29 = var16;
                var28 = var30;
                _fun1468_ip = 505;
                continue _fun1468;
            case 446:
                var24[var23] = var23;
                var29 = var16;
                var28 = var30;
                _fun1468_ip = 505;
                continue _fun1468;
            case 458:
                var32 = _closure1_slot0;
                var30 = _closure1_slot1;
                var30 = var30[var20];
                var32 = var32.bind(var22)(var30);
                var30 = var23 === var3;
                var30 = var32.bind(var22)(var30, var19, var33);
                var30 = var18;
                if (!(var17 === var31)) {
                    _fun1468_ip = 495;
                    continue _fun1468
                }
            case 493:
                var30 = 0;
            case 495:
                var24[var23] = var30;
                var29 = var27;
                var28 = var2;
            case 505:
                var27 = var25.exec;
                var1 = var27.bind(var25)(var26);
                var3 = var29;
                var2 = var28;
                var0 = var24;
                if (var1) {
                    _fun1468_ip = 147;
                    continue _fun1468
                }
            case 531:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 44]);