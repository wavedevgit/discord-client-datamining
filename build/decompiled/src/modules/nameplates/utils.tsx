// modules/nameplates/utils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function(arg0) { // Original name: isValidPalette, environment: var1
        _fun18304: for (var _fun18304_ip = 0;;) switch (_fun18304_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.name;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 1;
                var0 = var0[var7];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var0 = var0.INVALID_PALETTE_KEY;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun18304_ip = 120;
                    continue _fun18304
                }
            case 46:
                var2 = var3.name;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.CUSTOM_PALETTE_KEY;
                var1 = var2 !== var1;
                if (var1) {
                    _fun18304_ip = 117;
                    continue _fun18304
                }
            case 81:
                var6 = _closure1_slot6;
                var2 = var3.darkBackground;
                var2 = var6.bind(var5)(var2);
                if (!var2) {
                    _fun18304_ip = 114;
                    continue _fun18304
                }
            case 99:
                var4 = _closure1_slot6;
                var3 = var3.lightBackground;
                var2 = var4.bind(var5)(var3);
            case 114:
                var1 = var2;
            case 117:
                var0 = var1;
            case 120:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = function(arg0) { // Original name: isValidHex, environment: var1
        var2 = /^#([0-9a-fA-F]{6})$/;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot3 = var3;
    var3 = function(arg0) { // Original name: getNameplatePalette, environment: var1
        _fun18306: for (var _fun18306_ip = 0;;) switch (_fun18306_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 1;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.NAMEPLATE_PALETTES;
                var0 = arg0;
                var0 = var2[var0];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun18306_ip = 67;
                    continue _fun18306
                }
            case 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var0 = var1.INVALID_NAMEPLATE_PALETTE;
            case 67:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/nameplates/utils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1) { // Original name: getBackgroundGradientColors, environment: var1
        _fun18307: for (var _fun18307_ip = 0;;) switch (_fun18307_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot5;
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                if (var3) {
                    _fun18307_ip = 22;
                    continue _fun18307
                }
            case 20:
                return var2;
            case 22:
                var1 = _closure1_slot3;
                var2 = var1.LIGHT;
                var1 = arg1;
                if (!(var1 !== var2)) {
                    _fun18307_ip = 47;
                    continue _fun18307
                }
            case 39:
                var4 = var0.darkBackground;
                _fun18307_ip = 53;
                continue _fun18307;
            case 47:
                var4 = var0.lightBackground;
            case 53:
                var0 = {};
                var1 = global;
                var2 = var1.HermesInternal;
                var5 = var2.concat;
                var3 = '';
                var2 = '00';
                var2 = var5.bind(var3)(var4, var2);
                var0.left = var2;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '4D';
                var1 = var2.bind(var3)(var4, var1);
                var0.right = var1;
                return var0;
        }
    };
    var2.getBackgroundGradientColors = var5;
    var2.isValidPalette = var4;
    var2.getNameplatePalette = var3;
    var3 = function(arg0) { // Original name: parseFirstFrame, environment: var1
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 2;
        var0 = var4[var1];
        var2 = undefined;
        var6 = var3.bind(var2)(var0);
        var5 = var6.decode;
        var0 = arg0;
        var0 = var5.bind(var6)(var0);
        var1 = var4[var1];
        var2 = var3.bind(var2)(var1);
        var1 = var2.toRGBA8;
        var1 = var1.bind(var2)(var0);
        var4 = 0;
        var6 = var1[var4];
        var1 = global;
        var5 = var1.document;
        var3 = var5.createElement;
        var2 = 'canvas';
        var2 = var3.bind(var5)(var2);
        var3 = var0.width;
        var2.width = var3;
        var3 = var0.height;
        var2.height = var3;
        var5 = var2.getContext;
        var3 = '2d';
        var3 = var5.bind(var2)(var3);
        var7 = var1.ImageData;
        var1 = var1.Uint8ClampedArray;
        var5 = var1.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var1
            }
        });
        var11 = var5;
        var10 = var6;
        var1 = new var11[var1](var10, var9);
        var10 = var1 instanceof Object ? var1 : var5;
        var9 = var0.width;
        var8 = var0.height;
        var1 = var7.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var7
            }
        });
        var11 = var1;
        var0 = new var11[var7](var10, var9, var8, var7);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var3.putImageData;
        var0 = var0.bind(var3)(var1, var4, var4);
        var1 = var2.toDataURL;
        var0 = 'image/png';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.parseFirstFrame = var3;
    var3 = function() { // Original name: getNameplateSampleUsers, environment: var1
        var0 = {};
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 3;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.SbKDHi;
        var3 = var4.bind(var8)(var3);
        var1.name = var3;
        var3 = 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png';
        var1.avatarSrc = var3;
        var0.mallow = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["LMSo+F"];
        var3 = var4.bind(var8)(var3);
        var1.name = var3;
        var3 = 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png';
        var1.avatarSrc = var3;
        var0.phibi = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.g5Dumi;
        var3 = var4.bind(var8)(var3);
        var1.name = var3;
        var3 = 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png';
        var1.avatarSrc = var3;
        var0.locke = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var8 = var3.intl;
        var4 = var8.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.p5Z3Ol;
        var3 = var4.bind(var8)(var3);
        var1.name = var3;
        var3 = 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png';
        var1.avatarSrc = var3;
        var0.cherry = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.ncslie;
        var2 = var3.bind(var4)(var2);
        var1.name = var2;
        var2 = 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png';
        var1.avatarSrc = var2;
        var0.boom = var1;
        return var0;
    };
    var2.getNameplateSampleUsers = var3;
    var1 = function(arg0) { // Environment: var1
        _fun18310: for (var _fun18310_ip = 0;;) switch (_fun18310_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun18310_ip = 63;
                    continue _fun18310
                }
            case 12:
                var1 = {};
                var3 = var2.asset;
                var1.src = var3;
                var5 = _closure1_slot4;
                var4 = var2.palette;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1.palette = var3;
                var2 = var2.label;
                var1.imgAlt = var2;
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.getNameplateData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 1631, 1633, 1234, 2]);