// modules/content_inventory/ContentInventoryActivityImageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var5 = function(arg0) { // Original name: getApplicationImage, environment: var4
        _fun62163: for (var _fun62163_ip = 0;;) switch (_fun62163_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var3 = var1 == var0;
                var6 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun62163_ip = 40;
                    continue _fun62163
                }
            case 16:
                var4 = var0.getIconURL;
                var3 = _closure1_slot4;
                var3 = var3.LARGE;
                var2 = var4.bind(var0)(var3);
            case 40:
                var3 = var1 == var0;
                var5 = undefined;
                if (var3) {
                    _fun62163_ip = 54;
                    continue _fun62163
                }
            case 49:
                var5 = var0.name;
            case 54:
                if (!(var1 == var2)) {
                    _fun62163_ip = 60;
                    continue _fun62163
                }
            case 58:
                return var6;
            case 60:
                var0 = {};
                var0.src = var2;
                if (!(var1 != var5)) {
                    _fun62163_ip = 141;
                    continue _fun62163
                }
            case 71:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.tiKyYg;
                var1 = {};
                var1.applicationName = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun62163_ip = 201;
                continue _fun62163;
            case 141:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["2B/phM"];
                var1 = var3.bind(var4)(var2);
            case 201:
                var0.alt = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var3 = function(arg0, arg1) { // Original name: useImageForActivity, environment: var4
        _fun62164: for (var _fun62164_ip = 0;;) switch (_fun62164_ip) {
            case 0:
                var10 = arg0;
                var5 = arg1;
                var0 = _closure1_slot7;
                var3 = undefined;
                var0 = var0.bind(var3)(var10, var5);
                var2 = var0.largeImage;
                var1 = var0.smallImage;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun62164_ip = 610;
                    continue _fun62164
                }
            case 42:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 7;
                var0 = var0[var6];
                var7 = var7.bind(var3)(var0);
                var0 = var7.isStageActivity;
                var0 = var0.bind(var7)(var10);
                if (var0) {
                    _fun62164_ip = 450;
                    continue _fun62164
                }
            case 79:
                if (!(var4 == var2)) {
                    _fun62164_ip = 114;
                    continue _fun62164
                }
            case 83:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 9;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)(var10);
                if (var0) {
                    _fun62164_ip = 322;
                    continue _fun62164
                }
            case 114:
                if (!(var4 == var2)) {
                    _fun62164_ip = 150;
                    continue _fun62164
                }
            case 118:
                if (!(var4 == var1)) {
                    _fun62164_ip = 150;
                    continue _fun62164
                }
            case 122:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 11;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)(var10);
                if (var0) {
                    _fun62164_ip = 194;
                    continue _fun62164
                }
            case 150:
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)(var5);
                if (!(var4 == var7)) {
                    _fun62164_ip = 177;
                    continue _fun62164
                }
            case 163:
                var0 = {};
                var0.largeImage = var1;
                var0.smallImage = var3;
                _fun62164_ip = 192;
                continue _fun62164;
            case 177:
                var5 = {};
                var5.largeImage = var7;
                var5.smallImage = var1;
                var0 = var5;
            case 192:
                return var0;
            case 194:
                var0 = {};
                var5 = {};
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 10;
                var7 = var13[var7];
                var11 = var9.bind(var3)(var7);
                var9 = var11.get;
                var7 = _closure1_slot3;
                var7 = var7.PLAYSTATION;
                var7 = var9.bind(var11)(var7);
                var7 = var7.icon;
                var7 = var7.lightPNG;
                var5.src = var7;
                var12 = _closure1_slot0;
                var7 = 4;
                var9 = var13[var7];
                var9 = var12.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.fFl4jo;
                var7 = var9.bind(var11)(var7);
                var5.alt = var7;
                var0.largeImage = var5;
                var0.smallImage = var3;
                return var0;
            case 322:
                var0 = {};
                var5 = {};
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 10;
                var7 = var13[var7];
                var11 = var9.bind(var3)(var7);
                var9 = var11.get;
                var7 = _closure1_slot3;
                var7 = var7.XBOX;
                var7 = var9.bind(var11)(var7);
                var7 = var7.icon;
                var7 = var7.customPNG;
                var5.src = var7;
                var12 = _closure1_slot0;
                var7 = 4;
                var9 = var13[var7];
                var9 = var12.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Nfvo72;
                var7 = var9.bind(var11)(var7);
                var5.alt = var7;
                var0.largeImage = var5;
                var0.smallImage = var3;
                return var0;
            case 450:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var5 = var5.bind(var3)(var0);
                var0 = var5.unpackStageChannelParty;
                var9 = var0.bind(var5)(var10);
                var0 = var4 != var9;
                var6 = undefined;
                if (!var0) {
                    _fun62164_ip = 577;
                    continue _fun62164
                }
            case 487:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var7 = var5.bind(var3)(var0);
                var5 = var7.getGuildIconURL;
                var0 = {};
                var9 = var9.guildId;
                var0.id = var9;
                var11 = var4 == var10;
                var9 = undefined;
                if (var11) {
                    _fun62164_ip = 554;
                    continue _fun62164
                }
            case 533:
                var10 = var10.assets;
                var11 = var4 == var10;
                var9 = undefined;
                if (var11) {
                    _fun62164_ip = 554;
                    continue _fun62164
                }
            case 548:
                var9 = var10.small_image;
            case 554:
                var0.icon = var9;
                var8 = _closure1_slot4;
                var8 = var8.SMALL;
                var0.size = var8;
                var6 = var5.bind(var7)(var0);
            case 577:
                var0 = {};
                var5 = var4 != var6;
                var4 = undefined;
                if (!var5) {
                    _fun62164_ip = 598;
                    continue _fun62164
                }
            case 588:
                var5 = {};
                var5.src = var6;
                var4 = var5;
            case 598:
                var0.largeImage = var4;
                var0.smallImage = var3;
                return var0;
            case 610:
                var0 = {};
                var0.largeImage = var2;
                var0.smallImage = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var1 = function(arg0, arg1) { // Original name: useRichImageForActivity, environment: var4
        _fun62165: for (var _fun62165_ip = 0;;) switch (_fun62165_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 12;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var2.bind(var1)(var0);
                var2 = var3.useGetOrFetchApplication;
                var7 = null;
                var4 = var7 == var8;
                var0 = undefined;
                if (var4) {
                    _fun62165_ip = 54;
                    continue _fun62165
                }
            case 48:
                var0 = var8.application_id;
            case 54:
                var4 = var2.bind(var3)(var0);
                if (!(var7 != var8)) {
                    _fun62165_ip = 514;
                    continue _fun62165
                }
            case 66:
                var0 = var7 == var8;
                var12 = undefined;
                if (var0) {
                    _fun62165_ip = 96;
                    continue _fun62165
                }
            case 75:
                var0 = var8.assets;
                var2 = var7 == var0;
                var12 = undefined;
                if (var2) {
                    _fun62165_ip = 96;
                    continue _fun62165
                }
            case 90:
                var12 = var0.large_image;
            case 96:
                var0 = var7 != var12;
                var3 = undefined;
                if (!var0) {
                    _fun62165_ip = 258;
                    continue _fun62165
                }
            case 108:
                var0 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 3;
                var2 = var10[var2];
                var11 = var9.bind(var1)(var2);
                var10 = var11.getAssetImage;
                var9 = var8.application_id;
                var2 = _closure1_slot4;
                var13 = var2.LARGE;
                var2 = new Array(2);
                var2[0] = var13;
                var13 = _closure1_slot4;
                var13 = var13.LARGE;
                var2[1] = var13;
                var2 = var10.bind(var11)(var9, var12, var2);
                var0.src = var2;
                var9 = var8.assets;
                var10 = var7 == var9;
                var2 = undefined;
                if (var10) {
                    _fun62165_ip = 226;
                    continue _fun62165
                }
            case 201:
                var10 = var9.large_text;
                var9 = var7 == var10;
                var2 = undefined;
                if (var9) {
                    _fun62165_ip = 226;
                    continue _fun62165
                }
            case 216:
                var9 = var10.trim;
                var2 = var9.bind(var10)();
            case 226:
                var0.text = var2;
                var9 = var8.assets;
                var10 = var7 == var9;
                var2 = undefined;
                if (var10) {
                    _fun62165_ip = 251;
                    continue _fun62165
                }
            case 245:
                var2 = var9.large_url;
            case 251:
                var0.url = var2;
                var3 = var0;
            case 258:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)(var8);
                var13 = undefined;
                if (var0) {
                    _fun62165_ip = 318;
                    continue _fun62165
                }
            case 288:
                var0 = var7 == var8;
                var13 = undefined;
                if (var0) {
                    _fun62165_ip = 318;
                    continue _fun62165
                }
            case 297:
                var0 = var8.assets;
                var2 = var7 == var0;
                var13 = undefined;
                if (var2) {
                    _fun62165_ip = 318;
                    continue _fun62165
                }
            case 312:
                var13 = var0.small_image;
            case 318:
                var0 = var7 != var13;
                var2 = undefined;
                if (!var0) {
                    _fun62165_ip = 480;
                    continue _fun62165
                }
            case 330:
                var0 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 3;
                var9 = var11[var9];
                var12 = var10.bind(var1)(var9);
                var11 = var12.getAssetImage;
                var10 = var8.application_id;
                var9 = _closure1_slot4;
                var14 = var9.LARGE;
                var9 = new Array(2);
                var9[0] = var14;
                var14 = _closure1_slot4;
                var14 = var14.LARGE;
                var9[1] = var14;
                var9 = var11.bind(var12)(var10, var13, var9);
                var0.src = var9;
                var10 = var8.assets;
                var11 = var7 == var10;
                var9 = undefined;
                if (var11) {
                    _fun62165_ip = 448;
                    continue _fun62165
                }
            case 423:
                var11 = var10.small_text;
                var10 = var7 == var11;
                var9 = undefined;
                if (var10) {
                    _fun62165_ip = 448;
                    continue _fun62165
                }
            case 438:
                var10 = var11.trim;
                var9 = var10.bind(var11)();
            case 448:
                var0.text = var9;
                var9 = var8.assets;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun62165_ip = 473;
                    continue _fun62165
                }
            case 467:
                var8 = var9.small_url;
            case 473:
                var0.url = var8;
                var2 = var0;
            case 480:
                var0 = {};
                if (!(var7 == var3)) {
                    _fun62165_ip = 502;
                    continue _fun62165
                }
            case 486:
                var5 = _closure1_slot5;
                if (!(var7 != var6)) {
                    _fun62165_ip = 497;
                    continue _fun62165
                }
            case 494:
                var4 = var6;
            case 497:
                var3 = var5.bind(var1)(var4);
            case 502:
                var0.largeImage = var3;
                var0.smallImage = var2;
                return var0;
            case 514:
                var0 = {};
                var0.largeImage = var1;
                var0.smallImage = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var6 = var6.PlatformTypes;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ImageSizes;
    var _closure1_slot4 = var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_inventory/ContentInventoryActivityImageUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getApplicationImage = var5;
    var4 = function(arg0) { // Original name: useImageForContentEntry, environment: var4
        _fun62166: for (var _fun62166_ip = 0;;) switch (_fun62166_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.entry;
                var0 = var0.showCoverImage;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun62166_ip = 25;
                    continue _fun62166
                }
            case 23:
                var0 = true;
            case 25:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)(var9);
                var8 = var1.activity;
                var10 = var1.activityApplication;
                var5 = var1.fallbackApplication;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)(var8, var10);
                var3 = var1.largeImage;
                var2 = var1.smallImage;
                var7 = _closure1_slot6;
                var6 = null;
                var1 = var10;
                if (!(var6 != var5)) {
                    _fun62166_ip = 109;
                    continue _fun62166
                }
            case 106:
                var1 = var5;
            case 109:
                var1 = var7.bind(var4)(var8, var1);
                var1 = var1.largeImage;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 6;
                var7 = var12[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.useDetectableGameSupplementalData;
                if (!(var6 != var5)) {
                    _fun62166_ip = 154;
                    continue _fun62166
                }
            case 151:
                var10 = var5;
            case 154:
                var12 = var6 == var10;
                var5 = undefined;
                if (var12) {
                    _fun62166_ip = 168;
                    continue _fun62166
                }
            case 163:
                var5 = var10.id;
            case 168:
                var5 = var7.bind(var8)(var5);
                var7 = var5.coverImageUrl;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 2;
                var8 = var8[var5];
                var10 = var10.bind(var4)(var8);
                var8 = var10.isListenedSessionEntry;
                var8 = var8.bind(var10)(var9);
                if (!var8) {
                    _fun62166_ip = 239;
                    continue _fun62166
                }
            case 213:
                var8 = var9.extra;
                var8 = var8.entries;
                var8 = var8.length;
                var10 = 0;
                if (!(!(var8 > var10))) {
                    _fun62166_ip = 421;
                    continue _fun62166
                }
            case 239:
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var5];
                var12 = var12.bind(var4)(var8);
                var8 = var12.isWatchedMediaEntry;
                var8 = var8.bind(var12)(var9);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                if (var8) {
                    _fun62166_ip = 333;
                    continue _fun62166
                }
            case 278:
                var5 = var14[var5];
                var8 = var13.bind(var4)(var5);
                var5 = var8.isTopArtistEntry;
                var8 = var5.bind(var8)(var9);
                var5 = undefined;
                if (!var8) {
                    _fun62166_ip = 331;
                    continue _fun62166
                }
            case 303:
                var8 = {};
                var12 = var9.extra;
                var12 = var12.media;
                var12 = var12.image_url;
                var8.src = var12;
                var5 = var8;
            case 331:
                _fun62166_ip = 419;
                continue _fun62166;
            case 333:
                var8 = {};
                var12 = 3;
                var12 = var14[var12];
                var15 = var13.bind(var4)(var12);
                var14 = var15.getAssetImage;
                var12 = var9.extra;
                var13 = var12.application_id;
                var12 = var9.extra;
                var12 = var12.media_assets_large_image;
                var11 = _closure1_slot4;
                var11 = var11.LARGE;
                var11 = var14.bind(var15)(var13, var12, var11);
                var8.src = var11;
                var11 = var9.extra;
                var11 = var11.media_title;
                var8.alt = var11;
                var5 = var8;
            case 419:
                _fun62166_ip = 459;
                continue _fun62166;
            case 421:
                var8 = {};
                var9 = var9.extra;
                var9 = var9.entries;
                var9 = var9[var10];
                var9 = var9.media;
                var9 = var9.image_url;
                var8.src = var9;
                var5 = var8;
            case 459:
                if (!(var6 == var3)) {
                    _fun62166_ip = 529;
                    continue _fun62166
                }
            case 463:
                if (!(var6 == var5)) {
                    _fun62166_ip = 512;
                    continue _fun62166
                }
            case 467:
                if (!(var6 != var7)) {
                    _fun62166_ip = 474;
                    continue _fun62166
                }
            case 471:
                if (var0) {
                    _fun62166_ip = 488;
                    continue _fun62166
                }
            case 474:
                var0 = {};
                var0.largeImage = var1;
                var0.smallImage = var4;
                _fun62166_ip = 510;
                continue _fun62166;
            case 488:
                var1 = {};
                var6 = {};
                var6.src = var7;
                var1.largeImage = var6;
                var1.smallImage = var4;
                var0 = var1;
            case 510:
                _fun62166_ip = 527;
                continue _fun62166;
            case 512:
                var1 = {};
                var1.largeImage = var5;
                var1.smallImage = var4;
                var0 = var1;
            case 527:
                _fun62166_ip = 544;
                continue _fun62166;
            case 529:
                var1 = {};
                var1.largeImage = var3;
                var1.smallImage = var2;
                var0 = var1;
            case 544:
                return var0;
        }
    };
    var2.useImageForContentEntry = var4;
    var2.useImageForActivity = var3;
    var2.useRichImageForActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3416, 7789, 5612, 1234, 7791, 7797, 5619, 1417, 7798, 4352, 7799, 6839, 7740, 2]);