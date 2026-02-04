// modules/recent_avatars/RecentAvatarUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun50898: for (var _fun50898_ip = 0;;) switch (_fun50898_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.storageHash;
                var0 = var1.canAnimate;
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun50898_ip = 23;
                    continue _fun50898
                }
            case 21:
                var0 = false;
            case 23:
                var3 = var1.allowWebp;
                if (!(var3 === var6)) {
                    _fun50898_ip = 35;
                    continue _fun50898
                }
            case 33:
                var3 = true;
            case 35:
                if (!var0) {
                    _fun50898_ip = 79;
                    continue _fun50898
                }
            case 38:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.isAnimatedIconHash;
                var1 = var0.bind(var1)(var2);
                var0 = 'gif';
                if (var1) {
                    _fun50898_ip = 171;
                    continue _fun50898
                }
            case 79:
                var1 = global;
                var1 = var1.window;
                var1 = var1.GLOBAL_ENV;
                var2 = var1.CDN_HOST;
                var1 = null;
                var2 = var1 == var2;
                var1 = 'jpg';
                if (var2) {
                    _fun50898_ip = 168;
                    continue _fun50898
                }
            case 114:
                var4 = 'png';
                var2 = var4;
                if (!var3) {
                    _fun50898_ip = 165;
                    continue _fun50898
                }
            case 124:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 1;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SUPPORTS_WEBP;
                var2 = var4;
                if (!var3) {
                    _fun50898_ip = 165;
                    continue _fun50898
                }
            case 159:
                var2 = 'webp';
            case 165:
                var1 = var2;
            case 168:
                var0 = var1;
            case 171:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun50899: for (var _fun50899_ip = 0;;) switch (_fun50899_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.userId;
                var7 = var0.avatarId;
                var6 = var0.storageHash;
                var9 = var0.canAnimate;
                var15 = undefined;
                if (!(var9 === var15)) {
                    _fun50899_ip = 34;
                    continue _fun50899
                }
            case 32:
                var9 = false;
            case 34:
                var5 = var0.allowWebp;
                if (!(var5 === var15)) {
                    _fun50899_ip = 46;
                    continue _fun50899
                }
            case 44:
                var5 = true;
            case 46:
                var13 = var0.size;
                var0 = global;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var3 = var1.CDN_HOST;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun50899_ip = 113;
                    continue _fun50899
                }
            case 77:
                var1 = var0.location;
                var2 = var1.protocol;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var1 = var1.API_ENDPOINT;
                var4 = var2 + var1;
                _fun50899_ip = 135;
                continue _fun50899;
            case 113:
                var1 = var0.HermesInternal;
                var2 = var1.concat;
                var1 = 'https://';
                var4 = var2.bind(var1)(var3);
            case 135:
                var3 = _closure1_slot4;
                var2 = {};
                var2.storageHash = var6;
                var2.canAnimate = var9;
                var2.allowWebp = var5;
                var17 = var3.bind(var15)(var2);
                var3 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 2;
                var2 = var16[var2];
                var9 = var3.bind(var15)(var2);
                var3 = var9.stringify;
                var2 = {};
                var14 = _closure1_slot0;
                var10 = 3;
                var11 = var16[var10];
                var12 = var14.bind(var15)(var11);
                var11 = var12.getBestMediaProxySize;
                var10 = var16[var10];
                var14 = var14.bind(var15)(var10);
                var10 = var14.getDevicePixelRatio;
                var10 = var10.bind(var14)();
                var10 = var13 * var10;
                var10 = var11.bind(var12)(var10);
                var2.size = var10;
                var9 = var3.bind(var9)(var2);
                var2 = var0.HermesInternal;
                var3 = var2.concat;
                var2 = '?';
                var3 = var3.bind(var2)(var9);
                var2 = _closure1_slot3;
                var1 = var2.ARCHIVED_AVATAR;
                var21 = var2;
                var20 = var8;
                var19 = var7;
                var18 = var6;
                var2 = var21[var1](var20, var19, var18, var17, var16);
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '';
                var0 = var1.bind(var0)(var4, var2, var3);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function arg0() {
        _fun50900: for (var _fun50900_ip = 0;;) switch (_fun50900_ip) {
            case 0:
                var3 = arg0;
                var0 = 'gif';
                if (!(var0 !== var3)) {
                    _fun50900_ip = 83;
                    continue _fun50900
                }
            case 11:
                var0 = 'png';
                if (!(var0 !== var3)) {
                    _fun50900_ip = 75;
                    continue _fun50900
                }
            case 19:
                var0 = 'jpg';
                if (!(var0 !== var3)) {
                    _fun50900_ip = 67;
                    continue _fun50900
                }
            case 29:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 67:
                var0 = 'image/jpeg';
                return var0;
            case 75:
                var0 = 'image/png';
                return var0;
            case 83:
                var0 = 'image/gif';
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot3 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/recent_avatars/RecentAvatarUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getImageFormat = var4;
    var2.getArchivedAvatarURL = var3;
    var3 = function arg0() {
        _fun50901: for (var _fun50901_ip = 0;;) switch (_fun50901_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun50901_ip = 11;
                    continue _fun50901
                }
            case 9:
                var0 = {};
            case 11:
                var5 = var0.filename;
                var6 = var0.assetOrigin;
                var7 = undefined;
                if (!(var7 === var6)) {
                    _fun50901_ip = 64;
                    continue _fun50901
                }
            case 29:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var0 = var2.bind(var7)(var0);
                var0 = var0.AssetOriginTypes;
                var6 = var0.NEW_ASSET;
            case 64:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 5;
                var2 = var2[var10];
                var2 = var3.bind(var7)(var2);
                var2 = var2.AssetOriginTypes;
                var2 = var2.ARCHIVED_ASSET;
                if (!(var6 === var2)) {
                    _fun50901_ip = 105;
                    continue _fun50901
                }
            case 103:
                return var7;
            case 105:
                if (!(var1 == var5)) {
                    _fun50901_ip = 164;
                    continue _fun50901
                }
            case 109:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var2 = var8[var1];
                var2 = var4.bind(var7)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var8[var1];
                var1 = var4.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.lqaIxI;
                var5 = var2.bind(var3)(var1);
            case 164:
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var14 = var2;
                var1 = new var14[var1](var13);
                var11 = var1 instanceof Object ? var1 : var2;
                var4 = var11.toLocaleString;
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 4;
                var2 = var1[var8];
                var2 = var9.bind(var7)(var2);
                var2 = var2.intl;
                var3 = var2.currentLocale;
                var2 = {
                    'year': 'numeric',
                    'day': 'numeric',
                    'month': 'long',
                    'hour': 'numeric',
                    'minute': 'numeric'
                };
                var4 = var4.bind(var11)(var3, var2);
                var2 = var1[var8];
                var2 = var9.bind(var7)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var1 = var1[var10];
                var1 = var9.bind(var7)(var1);
                var1 = var1.AssetOriginTypes;
                var1 = var1.EDITED_ARCHIVED_ASSET;
                if (!(var6 !== var1)) {
                    _fun50901_ip = 325;
                    continue _fun50901
                }
            case 293:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var6.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.DYil93;
                _fun50901_ip = 355;
                continue _fun50901;
            case 325:
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var0 = var6.bind(var7)(var0);
                var0 = var0.t;
                var1 = var0.eC2sZi;
            case 355:
                var0 = {};
                var0.name = var5;
                var0.dateTime = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.generateAvatarDescription = var3;
    var3 = function arg0, arg1() {
        _fun50902: for (var _fun50902_ip = 0;;) switch (_fun50902_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot4;
                var0 = {
                    'storageHash': null,
                    'canAnimate': true,
                    'allowWebp': false
                };
                var3 = arg0;
                var0.storageHash = var3;
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var4 = null;
                if (!(var4 != var6)) {
                    _fun50902_ip = 70;
                    continue _fun50902
                }
            case 48:
                var5 = var6.split;
                var4 = ',';
                var5 = var5.bind(var6)(var4);
                var4 = 0;
                var7 = var5[var4];
                _fun50902_ip = 125;
                continue _fun50902;
            case 70:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 4;
                var5 = var9[var4];
                var5 = var8.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.lqaIxI;
                var7 = var5.bind(var6)(var4);
            case 125:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var5 = '';
                var4 = '.';
                var4 = var6.bind(var5)(var7, var4, var2);
                var0.filename = var4;
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)(var2);
                var0.type = var1;
                return var0;
        }
    };
    var2.generateRecentAvatarFileDetails = var3;
    var3 = function arg0() {
        _fun50903: for (var _fun50903_ip = 0;;) switch (_fun50903_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.assetOrigin;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun50903_ip = 50;
                    continue _fun50903
                }
            case 15:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.AssetOriginTypes;
                var3 = var1.NEW_ASSET;
            case 50:
                var2 = var4.imageUri;
                var1 = var4.description;
                var4 = var4.originalAsset;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 5;
                var6 = var6[var8];
                var6 = var7.bind(var0)(var6);
                var6 = var6.AssetOriginTypes;
                var6 = var6.NEW_ASSET;
                if (!(var6 !== var3)) {
                    _fun50903_ip = 250;
                    continue _fun50903
                }
            case 109:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var0)(var6);
                var6 = var6.AssetOriginTypes;
                var6 = var6.EDITED_ARCHIVED_ASSET;
                if (!(var6 !== var3)) {
                    _fun50903_ip = 227;
                    continue _fun50903
                }
            case 142:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var0)(var6);
                var6 = var6.AssetOriginTypes;
                var6 = var6.ARCHIVED_ASSET;
                if (!(var6 !== var3)) {
                    _fun50903_ip = 208;
                    continue _fun50903
                }
            case 175:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 6;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.assertNever;
                var5 = var5.bind(var6)(var3);
                return var0;
            case 208:
                var0 = {};
                var0.assetOrigin = var3;
                var0.imageUri = var2;
                var0.originalAsset = var4;
                return var0;
            case 227:
                var0 = {};
                var0.assetOrigin = var3;
                var0.imageUri = var2;
                var0.description = var1;
                var0.originalAsset = var4;
                return var0;
            case 250:
                var0 = {};
                var0.assetOrigin = var3;
                var0.imageUri = var2;
                var0.description = var1;
                return var0;
        }
    };
    var2.createPendingImage = var3;
    var1 = function arg0() {
        _fun50904: for (var _fun50904_ip = 0;;) switch (_fun50904_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.userId;
                var7 = var0.image;
                var6 = var0.size;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun50904_ip = 28;
                    continue _fun50904
                }
            case 25:
                var6 = 80;
            case 28:
                var5 = var0.canAnimate;
                if (!(var5 === var4)) {
                    _fun50904_ip = 40;
                    continue _fun50904
                }
            case 38:
                var5 = true;
            case 40:
                var1 = null;
                var0 = var7;
                if (!(var1 != var7)) {
                    _fun50904_ip = 186;
                    continue _fun50904
                }
            case 52:
                var2 = 'string';
                var1 = typeof var7;
                var0 = var7;
                if (!(var2 !== var1)) {
                    _fun50904_ip = 186;
                    continue _fun50904
                }
            case 66:
                var3 = var7.assetOrigin;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var1 = var1.AssetOriginTypes;
                var1 = var1.ARCHIVED_ASSET;
                if (!(var3 !== var1)) {
                    _fun50904_ip = 119;
                    continue _fun50904
                }
            case 111:
                var1 = var7.imageUri;
                _fun50904_ip = 183;
                continue _fun50904;
            case 119:
                var3 = _closure1_slot5;
                var2 = {};
                var2.userId = var8;
                var8 = var7.originalAsset;
                var8 = var8.id;
                var2.avatarId = var8;
                var7 = var7.originalAsset;
                var7 = var7.storageHash;
                var2.storageHash = var7;
                var2.size = var6;
                var2.canAnimate = var5;
                var5 = false;
                var2.allowWebp = var5;
                var1 = var3.bind(var4)(var2);
            case 183:
                var0 = var1;
            case 186:
                return var0;
        }
    };
    var2.getPendingAvatarSrc = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1417, 1454, 1443, 1234, 5724, 1304, 2]);