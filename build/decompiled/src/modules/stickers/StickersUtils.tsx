// modules/stickers/StickersUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var3 = function() {
        _fun36609: for (var _fun36609_ip = 0;;) switch (_fun36609_ip) {
            case 0:
                var0 = _closure1_slot2;
                var0 = var0.frecencyWithoutFetchingLatest;
                var3 = var0.favoriteStickers;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun36609_ip = 36;
                    continue _fun36609
                }
            case 30:
                var0 = var3.stickerIds;
            case 36:
                if (!(var2 == var0)) {
                    _fun36609_ip = 44;
                    continue _fun36609
                }
            case 40:
                var0 = _closure1_slot19;
            case 44:
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.DEFAULT_STICKER_DIMENSIONS;
    var _closure1_slot6 = var6;
    var6 = var5.STICKER_APPLICATION_ID;
    var _closure1_slot7 = var6;
    var5 = var5.StickerAnimationSettings;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var11 = var5.Endpoints;
    var _closure1_slot9 = var11;
    var5 = var4.window;
    var5 = var5.GLOBAL_ENV;
    var14 = var5.API_ENDPOINT;
    var _closure1_slot10 = var14;
    var18 = var5.MEDIA_PROXY_ENDPOINT;
    var _closure1_slot11 = var18;
    var6 = var5.PROJECT_ENV;
    var _closure1_slot12 = var6;
    var17 = var5.ASSET_ENDPOINT;
    var _closure1_slot13 = var17;
    var5 = var5.CDN_HOST;
    var _closure1_slot14 = var5;
    var9 = var4.Object;
    var6 = var9.values;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.StickerExtensions;
    var9 = var6.bind(var9)(var5);
    var6 = var4.decodeURIComponent;
    var10 = var11.STICKER_ASSET;
    var5 = var9.join;
    var16 = '|';
    var9 = var5.bind(var9)(var16);
    var5 = var4.HermesInternal;
    var5 = var5.concat;
    var13 = '(';
    var12 = ')';
    var9 = var5.bind(var13)(var9, var12);
    var5 = '[\\d]+';
    var5 = var10.bind(var11)(var5, var9);
    var11 = var6.bind(var0)(var5);
    var10 = var4.RegExp;
    var5 = var4.location;
    var26 = var5.protocol;
    var5 = var4.location;
    var23 = var5.protocol;
    var5 = var4.HermesInternal;
    var6 = var5.concat;
    var21 = ')(';
    var27 = var13;
    var25 = var17;
    var24 = var16;
    var22 = var18;
    var20 = var11;
    var19 = var12;
    var26 = var27[var6](var26, var25, var24, var23, var22, var21, var20, var19, var18);
    var6 = var10.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var9 = 'ig';
    var27 = var6;
    var25 = var9;
    var5 = new var27[var10](var26, var25, var24);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot15 = var5;
    var6 = var4.RegExp;
    var5 = var4.location;
    var26 = var5.protocol;
    var4 = var4.HermesInternal;
    var5 = var4.concat;
    var27 = '';
    var25 = var14;
    var24 = var13;
    var23 = var11;
    var22 = var12;
    var26 = var27[var5](var26, var25, var24, var23, var22, var21);
    var5 = var6.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var6
        }
    });
    var27 = var5;
    var25 = var9;
    var4 = new var27[var6](var26, var25, var24);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var4;
    var5 = function arg0() {
        _fun36610: for (var _fun36610_ip = 0;;) switch (_fun36610_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = var1.cover_sticker_id;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun36610_ip = 46;
                    continue _fun36610
                }
            case 21:
                var4 = var1.stickers;
                var3 = var4.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.cover_sticker_id;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                if (!(var2 == var0)) {
                    _fun36610_ip = 60;
                    continue _fun36610
                }
            case 46:
                var2 = var1.stickers;
                var1 = 0;
                var1 = var2[var1];
                return var1;
            case 60:
                return var0;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function arg0() {
        _fun36612: for (var _fun36612_ip = 0;;) switch (_fun36612_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 6;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.PNG;
                if (!(var0 !== var6)) {
                    _fun36612_ip = 294;
                    continue _fun36612
                }
            case 47:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.APNG;
                if (!(var0 !== var6)) {
                    _fun36612_ip = 263;
                    continue _fun36612
                }
            case 83:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.LOTTIE;
                if (!(var0 !== var6)) {
                    _fun36612_ip = 232;
                    continue _fun36612
                }
            case 116:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerFormat;
                var0 = var0.GIF;
                if (!(var0 !== var6)) {
                    _fun36612_ip = 201;
                    continue _fun36612
                }
            case 149:
                var0 = global;
                var5 = var0.Error;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'Unexpected format type: ';
                var7 = var2.bind(var0)(var6);
                var2 = var5.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var2;
                var0 = new var8[var5](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 201:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerExtensions;
                var0 = var0.GIF;
                return var0;
            case 232:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerExtensions;
                var0 = var0.LOTTIE;
                return var0;
            case 263:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerExtensions;
                var0 = var0.APNG;
                return var0;
            case 294:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.SUPPORTS_WEBP;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.StickerExtensions;
                if (var0) {
                    _fun36612_ip = 354;
                    continue _fun36612
                }
            case 346:
                var0 = var1.PNG;
                _fun36612_ip = 360;
                continue _fun36612;
            case 354:
                var0 = var1.WEBP;
            case 360:
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var6 = new Array(0);
    var _closure1_slot19 = var6;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stickers/StickersUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getStickerPackPreviewSticker = var5;
    var2.getStickerExtensionFromFormatType = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36613: for (var _fun36613_ip = 0;;) switch (_fun36613_ip) {
            case 0:
                var3 = arg0;
                var0 = 'application/json';
                if (!(var0 !== var3)) {
                    _fun36613_ip = 226;
                    continue _fun36613
                }
            case 14:
                var0 = 'image/apng';
                if (!(var0 !== var3)) {
                    _fun36613_ip = 187;
                    continue _fun36613
                }
            case 27:
                var0 = 'image/png';
                if (!(var0 !== var3)) {
                    _fun36613_ip = 148;
                    continue _fun36613
                }
            case 37:
                var0 = 'image/webp';
                if (!(var0 !== var3)) {
                    _fun36613_ip = 148;
                    continue _fun36613
                }
            case 47:
                var0 = 'image/gif';
                if (!(var0 !== var3)) {
                    _fun36613_ip = 109;
                    continue _fun36613
                }
            case 57:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Unexpected file type: ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 109:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StickerFormat;
                var0 = var0.GIF;
                return var0;
            case 148:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StickerFormat;
                var0 = var0.PNG;
                return var0;
            case 187:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StickerFormat;
                var0 = var0.APNG;
                return var0;
            case 226:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StickerFormat;
                var0 = var0.LOTTIE;
                return var0;
        }
    };
    var2.getStickerFormatTypeFromFileType = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36614: for (var _fun36614_ip = 0;;) switch (_fun36614_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun36614_ip = 65;
                    continue _fun36614
                }
            case 12:
                var5 = var1.name;
                var3 = _closure1_slot18;
                var2 = var1.format_type;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '.';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 65:
                return var0;
        }
    };
    var2.getFilenameForSticker = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36615: for (var _fun36615_ip = 0;;) switch (_fun36615_ip) {
            case 0:
                var0 = arguments[1];
                var8 = arg0;
                var15 = undefined;
                if (!(var0 === var15)) {
                    _fun36615_ip = 14;
                    continue _fun36615
                }
            case 12:
                var0 = {};
            case 14:
                var3 = var0.isPreview;
                if (!(var3 === var15)) {
                    _fun36615_ip = 26;
                    continue _fun36615
                }
            case 24:
                var3 = false;
            case 26:
                var1 = var3;
                var0 = var0.size;
                if (!(var0 === var15)) {
                    _fun36615_ip = 45;
                    continue _fun36615
                }
            case 38:
                var0 = _closure1_slot6;
            case 45:
                var7 = var0;
                var5 = undefined;
                var10 = undefined;
                var2 = undefined;
                var9 = undefined;
                var4 = undefined;
                var6 = undefined;
                var12 = undefined;
                var0 = var8;
                var3 = var0.format_type;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun36615_ip = 725;
                    continue _fun36615
                }
            case 80:
                var3 = var8;
                var5 = var3.format_type;
                var14 = var3.format_type;
                var16 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 6;
                var13 = var13[var11];
                var13 = var16.bind(var15)(var13);
                var13 = var13.StickerFormat;
                var13 = var13.GIF;
                var13 = var14 === var13;
                if (!var13) {
                    _fun36615_ip = 140;
                    continue _fun36615
                }
            case 137:
                var13 = var1;
            case 140:
                if (!var13) {
                    _fun36615_ip = 172;
                    continue _fun36615
                }
            case 143:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var11];
                var13 = var14.bind(var15)(var13);
                var13 = var13.StickerFormat;
                var5 = var13.PNG;
            case 172:
                var13 = _closure1_slot18;
                var16 = var13.bind(var15)(var5);
                var10 = var16;
                var14 = _closure1_slot9;
                var13 = var14.STICKER_ASSET;
                var5 = var8;
                var5 = var5.id;
                var2 = var13.bind(var14)(var5, var16);
                var9 = false;
            case 210: // try_start_0
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var5 = 8;
                var5 = var14[var5];
                var5 = var13.bind(var15)(var5);
                var13 = var5.getForceSdrEmojisStickersConfig;
                var5 = {};
                var14 = 'sticker_url';
                var5.location = var14;
                var5 = var13.bind(var15)(var5);
                var9 = var5.enabled;
            case 258: // try_end0
                _fun36615_ip = 262;
                continue _fun36615;
            case 260: // catch_target0
                CatchBlockStart(arg_register = 5);
            case 262:
                var14 = var9;
                var5 = '';
                var13 = var5;
                if (!var14) {
                    _fun36615_ip = 281;
                    continue _fun36615
                }
            case 275:
                var13 = '&force_sdr=true';
            case 281:
                var4 = var13;
                var14 = var10;
                var13 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var11];
                var10 = var13.bind(var15)(var10);
                var10 = var10.StickerExtensions;
                var13 = var10.WEBP;
                var10 = var5;
                if (!(var14 === var13)) {
                    _fun36615_ip = 329;
                    continue _fun36615
                }
            case 323:
                var10 = '&quality=lossless';
            case 329:
                var6 = var10;
                var13 = _closure1_slot12;
                var10 = 'development';
                if (!(var10 === var13)) {
                    _fun36615_ip = 419;
                    continue _fun36615
                }
            case 344:
                var10 = global;
                var13 = var10.location;
                var17 = var13.protocol;
                var16 = _closure1_slot11;
                var14 = var2;
                var13 = var10.HermesInternal;
                var13 = var13.concat;
                var12 = var13.bind(var5)(var17, var16, var14);
                var13 = var12;
                if (var9) {
                    _fun36615_ip = 394;
                    continue _fun36615
                }
            case 389:
                var9 = var13;
                _fun36615_ip = 417;
                continue _fun36615;
            case 394:
                var10 = var10.HermesInternal;
                var12 = var10.concat;
                var10 = '?force_sdr=true';
                var9 = var12.bind(var5)(var13, var10);
            case 417:
                return var9;
            case 419:
                var9 = var8;
                var10 = var9.format_type;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var12.bind(var15)(var9);
                var9 = var9.StickerFormat;
                var9 = var9.LOTTIE;
                if (!(var10 !== var9)) {
                    _fun36615_ip = 687;
                    continue _fun36615
                }
            case 464:
                var9 = var8.format_type;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var11];
                var8 = var10.bind(var15)(var8);
                var8 = var8.StickerFormat;
                var8 = var8.APNG;
                var12 = var5;
                if (!(var9 === var8)) {
                    _fun36615_ip = 554;
                    continue _fun36615
                }
            case 506:
                var12 = var5;
                if (!var1) {
                    _fun36615_ip = 554;
                    continue _fun36615
                }
            case 512:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 9;
                var1 = var9[var1];
                var8 = var8.bind(var15)(var1);
                var1 = var8.isAndroid;
                var1 = var1.bind(var8)();
                var12 = var5;
                if (var1) {
                    _fun36615_ip = 554;
                    continue _fun36615
                }
            case 548:
                var12 = '&passthrough=false';
            case 554:
                var1 = global;
                var14 = var1.Math;
                var11 = var14.min;
                var13 = _closure1_slot0;
                var16 = _closure1_slot1;
                var8 = 10;
                var9 = var16[var8];
                var10 = var13.bind(var15)(var9);
                var9 = var10.getDevicePixelRatio;
                var10 = var9.bind(var10)();
                var9 = 2;
                var14 = var11.bind(var14)(var9, var10);
                var9 = var1.location;
                var11 = var9.protocol;
                var24 = _closure1_slot11;
                var23 = var2;
                var8 = var16[var8];
                var13 = var13.bind(var15)(var8);
                var8 = var13.getBestMediaProxySize;
                var7 = var7 * var14;
                var21 = var8.bind(var13)(var7);
                var19 = var6;
                var18 = var4;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var22 = '?size=';
                var26 = var5;
                var25 = var11;
                var20 = var12;
                var1 = var26[var4](var25, var24, var23, var22, var21, var20, var19, var18, var17);
                return var1;
            case 687:
                var1 = global;
                var4 = var1.location;
                var4 = var4.protocol;
                var3 = _closure1_slot13;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var4, var3, var2);
                return var1;
            case 725:
                return var0;
        }
    };
    var2.getStickerAssetUrl = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun36616: for (var _fun36616_ip = 0;;) switch (_fun36616_ip) {
            case 0:
                var5 = arg1;
                var0 = arg0;
                var13 = var0.banner_asset_id;
                var0 = null;
                if (!(var0 != var13)) {
                    _fun36616_ip = 259;
                    continue _fun36616
                }
            case 23:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var6 = undefined;
                var1 = var3.bind(var6)(var1);
                var1 = var1.SUPPORTS_WEBP;
                var12 = 'png';
                if (!var1) {
                    _fun36616_ip = 67;
                    continue _fun36616
                }
            case 61:
                var12 = 'webp';
            case 67:
                var1 = _closure1_slot14;
                if (!(var0 == var1)) {
                    _fun36616_ip = 138;
                    continue _fun36616
                }
            case 75:
                var1 = global;
                var3 = var1.location;
                var8 = var3.protocol;
                var7 = _closure1_slot10;
                var9 = _closure1_slot9;
                var4 = var9.STORE_ASSET;
                var3 = _closure1_slot7;
                var4 = var4.bind(var9)(var3, var13, var12);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '';
                var3 = var3.bind(var1)(var8, var7, var4);
                _fun36616_ip = 191;
                continue _fun36616;
            case 138:
                var20 = _closure1_slot14;
                var18 = _closure1_slot7;
                var1 = global;
                var1 = var1.HermesInternal;
                var9 = var1.concat;
                var21 = 'https://';
                var19 = '/app-assets/';
                var17 = '/store/';
                var15 = '.';
                var16 = var13;
                var14 = var12;
                var3 = var21[var9](var20, var19, var18, var17, var16, var15, var14, var13);
            case 191:
                var1 = var3;
                if (!(var0 != var5)) {
                    _fun36616_ip = 257;
                    continue _fun36616
                }
            case 198:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 10;
                var2 = var7[var2];
                var4 = var4.bind(var6)(var2);
                var2 = var4.getBestMediaProxySize;
                var5 = var2.bind(var4)(var5);
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var1 = var3 + var2;
            case 257:
                return var1;
            case 259:
                return var0;
        }
    };
    var2.getStickerPackBannerAssetUrl = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36617: for (var _fun36617_ip = 0;;) switch (_fun36617_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var4 = _closure1_slot12;
                var0 = 'development';
                if (!(var0 === var4)) {
                    _fun36617_ip = 30;
                    continue _fun36617
                }
            case 24:
                var0 = _closure1_slot16;
                _fun36617_ip = 34;
                continue _fun36617;
            case 30:
                var0 = _closure1_slot15;
            case 34:
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var1;
                return var0;
        }
    };
    var2.isStickerAssetUrl = var4;
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.stickers;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            _fun36619: for (var _fun36619_ip = 0;;) switch (_fun36619_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.format_type;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 6;
                    var0 = var0[var5];
                    var4 = undefined;
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.StickerFormat;
                    var0 = var0.APNG;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun36619_ip = 86;
                        continue _fun36619
                    }
                case 53:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var5];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.StickerFormat;
                    var3 = var3.LOTTIE;
                    var0 = var2 === var3;
                case 86:
                    if (var0) {
                        _fun36619_ip = 122;
                        continue _fun36619
                    }
                case 89:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.StickerFormat;
                    var1 = var1.GIF;
                    var0 = var2 === var1;
                case 122:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isStickerPackAnimated = var4;
    var4 = function(arg0) { // Environment: var1
        var3 = arg0;
        var0 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 6;
        var4 = var4[var2];
        var2 = undefined;
        var4 = var5.bind(var2)(var4);
        var4 = var4.StickerCategoryTypes;
        var4 = var4.PACK;
        var0.type = var4;
        var4 = var3.id;
        var0.id = var4;
        var4 = var3.name;
        var0.name = var4;
        var4 = var3.stickers;
        var0.stickers = var4;
        var1 = _closure1_slot17;
        var1 = var1.bind(var2)(var3);
        var0.previewSticker = var1;
        return var0;
    };
    var2.createStickerPackCategory = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun36621: for (var _fun36621_ip = 0;;) switch (_fun36621_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var3 = _closure1_slot8;
                var3 = var3.ANIMATE_ON_INTERACTION;
                if (!(var2 !== var3)) {
                    _fun36621_ip = 37;
                    continue _fun36621
                }
            case 23:
                var1 = _closure1_slot8;
                var1 = var1.NEVER_ANIMATE;
                var0 = var2 !== var1;
            case 37:
                return var0;
        }
    };
    var2.shouldAnimateSticker = var4;
    var4 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun36622: for (var _fun36622_ip = 0;;) switch (_fun36622_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var7 = arg2;
                var6 = arg3;
                var3 = _closure1_slot4;
                var2 = var3.getUploadCount;
                var2 = var2.bind(var3)(var7, var6);
                var3 = 0;
                if (!(!(var2 > var3))) {
                    _fun36622_ip = 249;
                    continue _fun36622
                }
            case 40:
                var5 = _closure1_slot5;
                var2 = var5.getStickerPreview;
                var2 = var2.bind(var5)(var7, var6);
                var5 = null;
                if (!(var5 != var2)) {
                    _fun36622_ip = 76;
                    continue _fun36622
                }
            case 64:
                var2 = var2.length;
                if (!(!(var2 > var3))) {
                    _fun36622_ip = 245;
                    continue _fun36622
                }
            case 76:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 6;
                var2 = var2[var5];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var2.StickerSelectLocation;
                var2 = var2.STICKER_PICKER;
                if (!(var2 !== var4)) {
                    _fun36622_ip = 225;
                    continue _fun36622
                }
            case 114:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var6.bind(var3)(var2);
                var2 = var2.StickerSelectLocation;
                var2 = var2.AUTOCOMPLETE;
                if (!(var2 !== var4)) {
                    _fun36622_ip = 180;
                    continue _fun36622
                }
            case 147:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var3)(var2);
                var2 = var2.StickerSelectLocation;
                var2 = var2.BUILT_IN_INTEGRATION;
                var2 = false;
                return var2;
            case 180:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getQueriesFromUserInput;
                var0 = var0.bind(var2)(var1);
                var2 = var0.length;
                var0 = 1;
                var0 = var2 > var0;
                return var0;
            case 225:
                var0 = var1.trim;
                var1 = var0.bind(var1)();
                var0 = '';
                var0 = var0 !== var1;
                return var0;
            case 245:
                var0 = true;
                return var0;
            case 249:
                var0 = true;
                return var0;
        }
    };
    var2.shouldAttachSticker = var4;
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.type;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.MetaStickerType;
        var0 = var0.GUILD;
        var0 = var1 === var0;
        return var0;
    };
    var2.isGuildSticker = var4;
    var4 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.type;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.MetaStickerType;
        var0 = var0.STANDARD;
        var0 = var1 === var0;
        return var0;
    };
    var2.isStandardSticker = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36625: for (var _fun36625_ip = 0;;) switch (_fun36625_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.stickerItems;
                var0 = var0.length;
                var2 = 0;
                if (!(!(var0 > var2))) {
                    _fun36625_ip = 49;
                    continue _fun36625
                }
            case 20:
                var0 = var1.stickers;
                var0 = var0.length;
                if (!(!(var0 > var2))) {
                    _fun36625_ip = 41;
                    continue _fun36625
                }
            case 35:
                var0 = new Array(0);
                _fun36625_ip = 47;
                continue _fun36625;
            case 41:
                var0 = var1.stickers;
            case 47:
                _fun36625_ip = 55;
                continue _fun36625;
            case 49:
                var0 = var1.stickerItems;
            case 55:
                return var0;
        }
    };
    var2.getMessageStickers = var4;
    var4 = function(arg0) { // Environment: var1
        _fun36626: for (var _fun36626_ip = 0;;) switch (_fun36626_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 !== var0)) {
                    _fun36626_ip = 39;
                    continue _fun36626
                }
            case 9:
                var2 = var0.guild_id;
                var1 = _closure1_slot3;
                var0 = var1.getGuild;
                var1 = var0.bind(var1)(var2);
                var0 = undefined;
                var0 = var0 !== var1;
                return var0;
            case 39:
                var0 = false;
                return var0;
        }
    };
    var2.isAvailableGuildSticker = var4;
    var2.getFavoriteStickerIds = var3;
    var1 = function arg0() {
        var1 = _closure1_slot20;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isFavoriteSticker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1410, 3961, 4184, 1352, 660, 4185, 1417, 1587, 478, 1443, 4187, 2]);