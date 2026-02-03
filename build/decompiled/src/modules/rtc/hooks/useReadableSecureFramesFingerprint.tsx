// modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66877: for (var _fun66877_ip = 0;;) switch (_fun66877_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.fingerprintBase64;
                var _closure2_slot0 = var3;
                var6 = var1.chunkSize;
                var _closure2_slot1 = var6;
                var5 = var1.desiredLength;
                var _closure2_slot2 = var5;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var3;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun66878: for (var _fun66878_ip = 0;;) switch (_fun66878_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun66878_ip = 217;
                                continue _fun66878
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = '';
                            if (!(var2 !== var3)) {
                                _fun66878_ip = 217;
                                continue _fun66878
                            }
                        case 31:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 1;
                            var3 = var5[var3];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.toByteArray;
                            var3 = _closure2_slot0;
                            var6 = var6.bind(var7)(var3);
                            var3 = _closure1_slot0;
                            var2 = 2;
                            var2 = var5[var2];
                            var5 = var3.bind(var4)(var2);
                            var4 = var5.generateDisplayableCode;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot1;
                            var4 = var4.bind(var5)(var6, var3, var2);
                            if (!(var0 != var4)) {
                                _fun66878_ip = 215;
                                continue _fun66878
                            }
                        case 112:
                            var2 = global;
                            var6 = var2.RegExp;
                            var7 = _closure2_slot1;
                            var1 = var2.HermesInternal;
                            var5 = var1.concat;
                            var3 = '.{1,';
                            var1 = '}';
                            var10 = var5.bind(var3)(var7, var1);
                            var1 = var6.prototype;
                            var3 = Object.create(var1, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var9 = 'g';
                            var11 = var3;
                            var1 = new var11[var6](var10, var9, var8);
                            var3 = var1 instanceof Object ? var1 : var3;
                            var1 = var4.match;
                            var4 = var1.bind(var4)(var3);
                            var3 = var0 == var4;
                            var1 = null;
                            if (var3) {
                                _fun66878_ip = 213;
                                continue _fun66878
                            }
                        case 197:
                            var3 = var2.Array;
                            var2 = var3.from;
                            var1 = var2.bind(var3)(var4);
                        case 213:
                            return var1;
                        case 215:
                            return var0;
                        case 217:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun66877_ip = 94;
                    continue _fun66877
                }
            case 82:
                var2 = '';
                if (!(var2 !== var3)) {
                    _fun66877_ip = 94;
                    continue _fun66877
                }
            case 90:
                if (!(var1 != var0)) {
                    _fun66877_ip = 96;
                    continue _fun66877
                }
            case 94:
                return var0;
            case 96:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = '[useReadableSecureFramesCode] Failed to parse base 64 code.';
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useReadableSecureFramesFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 206, 8242, 2]);