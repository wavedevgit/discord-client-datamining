// utils/MFAUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun60786: for (var _fun60786_ip = 0;;) switch (_fun60786_ip) {
        case 0:
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var0 = metroImportDefault;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var8;
            var3 = function arg0() {
                var3 = arg0;
                var2 = var3.replace;
                var1 = /[\s._-]+/g;
                var0 = '';
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.toUpperCase;
                var0 = var0.bind(var1)();
                return var0;
            };
            var _closure1_slot3 = var3;
            var4 = global;
            var9 = var4.Object;
            var6 = var9.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var9)(var2, var0, var5);
            var5 = var4.window;
            var6 = null;
            var9 = var6 == var5;
            var0 = undefined;
            var10 = undefined;
            if (var9) {
                _fun60786_ip = 88;
                continue _fun60786
            }
        case 82:
            var10 = var5.crypto;
        case 88:
            if (!(var6 == var10)) {
                _fun60786_ip = 116;
                continue _fun60786
            }
        case 92:
            var9 = var4.window;
            var11 = var6 == var9;
            var5 = undefined;
            if (var11) {
                _fun60786_ip = 113;
                continue _fun60786
            }
        case 107:
            var5 = var9.msCrypto;
        case 113:
            var10 = var5;
        case 116:
            var _closure1_slot2 = var10;
            var5 = var4.window;
            var4 = 'Uint8Array';
            var4 = var4 in var5;
            var5 = var6 != var10;
            if (!var5) {
                _fun60786_ip = 149;
                continue _fun60786
            }
        case 141:
            var9 = 'getRandomValues';
            var5 = var9 in var10;
        case 149:
            if (!var5) {
                _fun60786_ip = 155;
                continue _fun60786
            }
        case 152:
            var5 = var4;
        case 155:
            var4 = 0;
            var4 = var8[var4];
            var4 = var7.bind(var0)(var4);
            var4 = var4.NativeModules;
            var4 = var4.DCDSecurityKeyManager;
            var4 = var6 != var4;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = 'utils/MFAUtils.tsx';
            var6 = var7.bind(var8)(var6);
            var2.hasCrypto = var5;
            var2.hasWebAuthn = var4;
            var4 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getRandomValues;
                var1 = global;
                var5 = var1.Uint8Array;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = 20;
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var2 = var2.bind(var3)(var1);
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.encode;
                var2 = var0.bind(var1)(var2);
                var1 = var2.toString;
                var0 = 'utf8';
                var3 = var1.bind(var2)(var0);
                var2 = var3.replace;
                var1 = /=/g;
                var0 = '';
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.toLowerCase;
                var3 = var0.bind(var1)();
                var2 = var3.replace;
                var1 = /(\w{4})/g;
                var0 = '$1 ';
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.trim;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2.generateTotpSecret = var4;
            var2.encodeTotpSecret = var3;
            var3 = function arg0, arg1() {
                _fun60789: for (var _fun60789_ip = 0;;) switch (_fun60789_ip) {
                    case 0:
                        var3 = arguments[2];
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun60789_ip = 15;
                            continue _fun60789
                        }
                    case 9:
                        var3 = 'Discord';
                    case 15:
                        var0 = global;
                        var1 = var0.encodeURI;
                        var8 = var1.bind(var2)(var3);
                        var4 = var0.encodeURI;
                        var1 = arg0;
                        var13 = var4.bind(var2)(var1);
                        var4 = _closure1_slot3;
                        var1 = arg1;
                        var11 = var4.bind(var2)(var1);
                        var1 = var0.encodeURIComponent;
                        var9 = var1.bind(var2)(var3);
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var16 = 'otpauth://totp/';
                        var14 = ':';
                        var12 = '?secret=';
                        var10 = '&issuer=';
                        var15 = var8;
                        var0 = var16[var4](var15, var14, var13, var12, var11, var10, var9, var8);
                        return var0;
                }
            };
            var2.encodeTotpSecretAsUrl = var3;
            var1 = function arg0, arg1() {
                _fun60790: for (var _fun60790_ip = 0;;) switch (_fun60790_ip) {
                    case 0:
                        var6 = arg1;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.captureException;
                        var2 = {};
                        var9 = var2;
                        var8 = var6;
                        var1 = copyDataProperties(var9, var8);
                        var5 = {};
                        var1 = null;
                        var7 = var1 == var6;
                        var1 = undefined;
                        if (var7) {
                            _fun60790_ip = 65;
                            continue _fun60790
                        }
                    case 59:
                        var1 = var6.tags;
                    case 65:
                        var9 = var5;
                        var8 = var1;
                        var1 = copyDataProperties(var9, var8);
                        var6 = 'webauthn';
                        var1 = 'app_context';
                        var5[var1] = var6;
                        var1 = 'tags';
                        var2[var1] = var5;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                }
            };
            var2.captureWebAuthnException = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 7499, 1207, 2]);