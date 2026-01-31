// modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot3;
        var1 = var2.resolveAssetSource;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 8;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var1.bind(var2)(var0);
        var0 = var0.uri;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun56267: for (var _fun56267_ip = 0;;) switch (_fun56267_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot9;
                var5 = undefined;
                var1 = var1.bind(var5)();
                if (!(var4 !== var1)) {
                    _fun56267_ip = 159;
                    continue _fun56267
                }
            case 23:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.hasFetchedColors;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun56267_ip = 59;
                    continue _fun56267
                }
            case 57:
                return var5;
            case 59:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var2 = var3.bind(var5)(var1);
                var1 = var2.getHeroColors;
                var1 = var1.bind(var2)(var4);
                var8 = var1.primaryColor;
                var4 = var1.secondaryColor;
                var2 = 11;
                var1 = var6[var2];
                var7 = var3.bind(var5)(var1);
                var1 = var7.hexToRgba;
                var7 = var1.bind(var7)(var8);
                var1 = new Array(2);
                var1[0] = var7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hexToRgba;
                var2 = var2.bind(var3)(var4);
                var1[1] = var2;
                return var1;
            case 159:
                var0 = _closure1_slot8;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1, arg2() {
        var6 = arg0;
        var0 = arg1;
        var1 = var0.timestamp;
        var0 = var1.getTime;
        var5 = var0.bind(var1)();
        var0 = {};
        var13 = arg2;
        var14 = var0;
        var1 = copyDataProperties(var14, var13);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var7 = 12;
        var2 = var10[var7];
        var8 = undefined;
        var4 = var9.bind(var8)(var2);
        var3 = var4.formatEntryTimestamp;
        var2 = _closure1_slot5;
        var2 = var2.locale;
        var3 = var3.bind(var4)(var6, var2, var5);
        var2 = 'text';
        var0[var2] = var3;
        var2 = var10[var7];
        var4 = var9.bind(var8)(var2);
        var3 = var4.formatEntryTimestamp;
        var1 = _closure1_slot5;
        var13 = var1.locale;
        var1 = {};
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.A11Y_FORMAT_SET;
        var1.formatSet = var7;
        var15 = var4;
        var14 = var6;
        var12 = var5;
        var11 = var1;
        var2 = var15[var3](var14, var13, var12, var11, var10);
        var1 = 'ariaDescription';
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ImageSizes;
    var _closure1_slot7 = var3;
    var3 = new Array(2);
    var6 = {
        'r': 0,
        'g': 0,
        'b': 0,
        'a': 1
    };
    var3[0] = var6;
    var6 = {
        'r': 0,
        'g': 0,
        'b': 0,
        'a': 1
    };
    var3[1] = var6;
    var _closure1_slot8 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56269: for (var _fun56269_ip = 0;;) switch (_fun56269_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.component;
                var3 = var1.contentInventoryEntry;
                var13 = var0.message;
                var4 = var3.content_type;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 5;
                var1 = var0[var5];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.PLAYED_GAME;
                if (!(var1 !== var4)) {
                    _fun56269_ip = 1742;
                    continue _fun56269
                }
            case 70:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.TOP_GAME;
                if (!(var1 !== var4)) {
                    _fun56269_ip = 1742;
                    continue _fun56269
                }
            case 106:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.WATCHED_MEDIA;
                if (!(var1 !== var4)) {
                    _fun56269_ip = 1243;
                    continue _fun56269
                }
            case 142:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.TOP_ARTIST;
                if (!(var1 !== var4)) {
                    _fun56269_ip = 787;
                    continue _fun56269
                }
            case 178:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.LISTENED_SESSION;
                if (!(var1 !== var4)) {
                    _fun56269_ip = 463;
                    continue _fun56269
                }
            case 214:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryEntryType;
                var1 = var1.LAUNCHED_ACTIVITY;
                var2 = undefined;
                if (!(var1 === var4)) {
                    _fun56269_ip = 2267;
                    continue _fun56269
                }
            case 252:
                var5 = _closure1_slot4;
                var4 = var5.getApplication;
                var1 = var3.extra;
                var1 = var1.application_id;
                var8 = var4.bind(var5)(var1);
                var4 = null;
                var5 = var4 == var8;
                var1 = undefined;
                if (var5) {
                    _fun56269_ip = 455;
                    continue _fun56269
                }
            case 293:
                var7 = var8.getIconURL;
                var5 = _closure1_slot7;
                var5 = var5.LARGE;
                var7 = var7.bind(var8)(var5);
                if (!(var4 == var7)) {
                    _fun56269_ip = 326;
                    continue _fun56269
                }
            case 318:
                var5 = _closure1_slot9;
                var7 = var5.bind(var0)();
            case 326:
                var5 = _closure1_slot10;
                var5 = var5.bind(var0)(var7);
                var4 = var4 == var5;
                var8 = var7;
                var1 = undefined;
                if (var4) {
                    _fun56269_ip = 455;
                    continue _fun56269
                }
            case 347:
                var7 = new Array(0);
                var9 = var7.push;
                var10 = _closure1_slot11;
                var4 = {};
                var14 = _closure1_slot3;
                var12 = var14.resolveAssetSource;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 17;
                var11 = var16[var11];
                var11 = var15.bind(var0)(var11);
                var11 = var12.bind(var14)(var11);
                var11 = var11.uri;
                var4.badgeUrl = var11;
                var4 = var10.bind(var0)(var3, var13, var4);
                var4 = var9.bind(var7)(var4);
                var4 = {};
                var4.imageUrl = var8;
                var8 = var3.extra;
                var8 = var8.activity_name;
                var4.title = var8;
                var4.subtitles = var7;
                var4.gradientColors = var5;
                var1 = var4;
            case 455:
                var2 = var1;
                _fun56269_ip = 2267;
                continue _fun56269;
            case 463:
                var1 = var3.extra;
                var1 = var1.entries;
                var5 = 0;
                var4 = var1[var5];
                var1 = var4.media;
                var9 = var1.image_url;
                var1 = var4.media;
                var8 = var1.title;
                var1 = var4.media;
                var1 = var1.artists;
                var5 = var1[var5];
                var1 = null;
                var10 = var1 == var5;
                var7 = undefined;
                if (var10) {
                    _fun56269_ip = 536;
                    continue _fun56269
                }
            case 531:
                var7 = var5.name;
            case 536:
                if (!(var1 == var7)) {
                    _fun56269_ip = 551;
                    continue _fun56269
                }
            case 540:
                var4 = var4.media;
                var7 = var4.title;
            case 551:
                var4 = var1 == var9;
                var1 = undefined;
                if (var4) {
                    _fun56269_ip = 779;
                    continue _fun56269
                }
            case 563:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 9;
                var4 = var10[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.hasFetchedColors;
                var4 = var4.bind(var5)(var9);
                var1 = undefined;
                if (!var4) {
                    _fun56269_ip = 779;
                    continue _fun56269
                }
            case 602:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 10;
                var4 = var10[var4];
                var5 = var11.bind(var0)(var4);
                var4 = var5.getHeroColors;
                var4 = var4.bind(var5)(var9);
                var15 = var4.primaryColor;
                var12 = var4.secondaryColor;
                var4 = 11;
                var5 = var10[var4];
                var14 = var11.bind(var0)(var5);
                var5 = var14.hexToRgba;
                var14 = var5.bind(var14)(var15);
                var5 = new Array(2);
                var5[0] = var14;
                var4 = var10[var4];
                var11 = var11.bind(var0)(var4);
                var4 = var11.hexToRgba;
                var4 = var4.bind(var11)(var12);
                var5[1] = var4;
                var4 = {};
                var4.imageUrl = var9;
                var4.title = var8;
                var8 = {};
                var8.text = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var4.subtitles = var7;
                var4.gradientColors = var5;
                var8 = _closure1_slot3;
                var7 = var8.resolveAssetSource;
                var9 = _closure1_slot1;
                var5 = 20;
                var5 = var10[var5];
                var5 = var9.bind(var0)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var5.uri;
                var4.platformIconUrl = var5;
                var1 = var4;
            case 779:
                var2 = var1;
                _fun56269_ip = 2267;
                continue _fun56269;
            case 787:
                var1 = var3.extra;
                var1 = var1.media;
                var8 = var1.image_url;
                var4 = null;
                var5 = var4 == var8;
                var1 = undefined;
                if (var5) {
                    _fun56269_ip = 1235;
                    continue _fun56269
                }
            case 819:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var7.hasFetchedColors;
                var5 = var5.bind(var7)(var8);
                var1 = undefined;
                if (!var5) {
                    _fun56269_ip = 1235;
                    continue _fun56269
                }
            case 858:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 10;
                var5 = var14[var5];
                var7 = var12.bind(var0)(var5);
                var5 = var7.getHeroColors;
                var5 = var5.bind(var7)(var8);
                var11 = var5.primaryColor;
                var10 = var5.secondaryColor;
                var7 = 11;
                var5 = var14[var7];
                var9 = var12.bind(var0)(var5);
                var5 = var9.hexToRgba;
                var9 = var5.bind(var9)(var11);
                var5 = new Array(2);
                var5[0] = var9;
                var7 = var14[var7];
                var9 = var12.bind(var0)(var7);
                var7 = var9.hexToRgba;
                var7 = var7.bind(var9)(var10);
                var5[1] = var7;
                var7 = new Array(0);
                var9 = 12;
                var9 = var14[var9];
                var11 = var12.bind(var0)(var9);
                var10 = var11.getTrait;
                var9 = 21;
                var9 = var14[var9];
                var9 = var12.bind(var0)(var9);
                var9 = var9.ContentInventoryTraitType;
                var9 = var9.AGGREGATE_COUNT;
                var9 = var10.bind(var11)(var3, var9);
                var10 = var4 == var9;
                var14 = undefined;
                if (var10) {
                    _fun56269_ip = 1023;
                    continue _fun56269
                }
            case 1017:
                var14 = var9.count;
            case 1023:
                var4 = var4 == var14;
                var1 = undefined;
                if (var4) {
                    _fun56269_ip = 1235;
                    continue _fun56269
                }
            case 1035:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 14;
                var11 = var10[var4];
                var11 = var9.bind(var0)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var4 = var10[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var9 = var4.HtifnG;
                var4 = {};
                var4.count = var14;
                var12 = var11.bind(var12)(var9, var4);
                var11 = var7.push;
                var4 = {};
                var16 = _closure1_slot3;
                var15 = var16.resolveAssetSource;
                var9 = _closure1_slot1;
                var14 = 15;
                var14 = var10[var14];
                var14 = var9.bind(var0)(var14);
                var14 = var15.bind(var16)(var14);
                var14 = var14.uri;
                var4.badgeUrl = var14;
                var4.text = var12;
                var4 = var11.bind(var7)(var4);
                var4 = {};
                var4.imageUrl = var8;
                var8 = var3.extra;
                var8 = var8.artist;
                var8 = var8.name;
                var4.title = var8;
                var4.subtitles = var7;
                var4.gradientColors = var5;
                var8 = _closure1_slot3;
                var7 = var8.resolveAssetSource;
                var5 = 20;
                var5 = var10[var5];
                var5 = var9.bind(var0)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var5.uri;
                var4.platformIconUrl = var5;
                var1 = var4;
            case 1235:
                var2 = var1;
                _fun56269_ip = 2267;
                continue _fun56269;
            case 1243:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var1 = var5[var1];
                var8 = var4.bind(var0)(var1);
                var7 = var8.getAssetImage;
                var1 = var3.extra;
                var5 = var1.application_id;
                var1 = var3.extra;
                var4 = var1.media_assets_large_image;
                var9 = _closure1_slot7;
                var10 = var9.LARGE;
                var1 = new Array(2);
                var1[0] = var10;
                var9 = var9.LARGE;
                var1[1] = var9;
                var4 = var7.bind(var8)(var5, var4, var1);
                var7 = _closure1_slot4;
                var5 = var7.getApplication;
                var1 = var3.extra;
                var1 = var1.application_id;
                var8 = var5.bind(var7)(var1);
                var11 = null;
                var5 = var11 == var8;
                var1 = undefined;
                if (var5) {
                    _fun56269_ip = 1387;
                    continue _fun56269
                }
            case 1366:
                var7 = var8.getIconURL;
                var5 = _closure1_slot7;
                var5 = var5.LARGE;
                var1 = var7.bind(var8)(var5);
            case 1387:
                if (!(var11 == var1)) {
                    _fun56269_ip = 1399;
                    continue _fun56269
                }
            case 1391:
                var5 = _closure1_slot9;
                var1 = var5.bind(var0)();
            case 1399:
                if (!(var11 != var4)) {
                    _fun56269_ip = 1406;
                    continue _fun56269
                }
            case 1403:
                var1 = var4;
            case 1406:
                var4 = _closure1_slot10;
                var5 = var4.bind(var0)(var1);
                var4 = var11 == var5;
                var8 = var1;
                var1 = undefined;
                if (var4) {
                    _fun56269_ip = 1734;
                    continue _fun56269
                }
            case 1430:
                var7 = new Array(0);
                var10 = /\w+ (\d+), \w+ (\d+)/;
                var9 = var10.exec;
                var4 = var3.extra;
                var12 = var4.media_assets_large_text;
                var14 = var11 != var12;
                var4 = '';
                if (!var14) {
                    _fun56269_ip = 1482;
                    continue _fun56269
                }
            case 1479:
                var4 = var12;
            case 1482:
                var15 = var9.bind(var10)(var4);
                if (!(var11 != var15)) {
                    _fun56269_ip = 1653;
                    continue _fun56269
                }
            case 1494:
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 14;
                var10 = var14[var4];
                var10 = var9.bind(var0)(var10);
                var12 = var10.intl;
                var10 = var12.formatToPlainString;
                var4 = var14[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var9 = var4.ijVm6y;
                var4 = {};
                var14 = 1;
                var14 = var15[var14];
                var4.seasonNum = var14;
                var14 = 2;
                var14 = var15[var14];
                var4.episodeNum = var14;
                var9 = var10.bind(var12)(var9, var4);
                var4 = var3.extra;
                var4 = var4.media_title;
                var10 = var9;
                if (!(var11 != var4)) {
                    _fun56269_ip = 1637;
                    continue _fun56269
                }
            case 1595:
                var4 = var3.extra;
                var12 = var4.media_subtitle;
                var4 = global;
                var4 = var4.HermesInternal;
                var11 = var4.concat;
                var4 = ' · ';
                var4 = var11.bind(var4)(var12);
                var10 = var9 + var4;
            case 1637:
                var9 = var7.push;
                var4 = {};
                var4.text = var10;
                var4 = var9.bind(var7)(var4);
            case 1653:
                var4 = {};
                var4.imageUrl = var8;
                var8 = var3.extra;
                var8 = var8.media_title;
                var4.title = var8;
                var4.subtitles = var7;
                var4.gradientColors = var5;
                var8 = _closure1_slot3;
                var7 = var8.resolveAssetSource;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 19;
                var5 = var10[var5];
                var5 = var9.bind(var0)(var5);
                var5 = var7.bind(var8)(var5);
                var5 = var5.uri;
                var4.platformIconUrl = var5;
                var1 = var4;
            case 1734:
                var2 = var1;
                _fun56269_ip = 2267;
                continue _fun56269;
            case 1742:
                var5 = _closure1_slot4;
                var4 = var5.getApplication;
                var1 = var3.extra;
                var1 = var1.application_id;
                var8 = var4.bind(var5)(var1);
                var4 = null;
                var5 = var4 == var8;
                var1 = undefined;
                if (var5) {
                    _fun56269_ip = 2264;
                    continue _fun56269
                }
            case 1783:
                var7 = var8.getIconURL;
                var5 = _closure1_slot7;
                var5 = var5.LARGE;
                var8 = var7.bind(var8)(var5);
                if (!(var4 == var8)) {
                    _fun56269_ip = 1816;
                    continue _fun56269
                }
            case 1808:
                var5 = _closure1_slot9;
                var8 = var5.bind(var0)();
            case 1816:
                var5 = _closure1_slot10;
                var5 = var5.bind(var0)(var8);
                var7 = var4 == var5;
                var1 = undefined;
                if (var7) {
                    _fun56269_ip = 2264;
                    continue _fun56269
                }
            case 1837:
                var7 = new Array(0);
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 12;
                var9 = var9[var11];
                var10 = var10.bind(var0)(var9);
                var9 = var10.isEntryTopGame;
                var9 = var9.bind(var10)(var3);
                if (var9) {
                    _fun56269_ip = 1948;
                    continue _fun56269
                }
            case 1875:
                var10 = var7.push;
                var12 = _closure1_slot11;
                var9 = {};
                var16 = _closure1_slot3;
                var15 = var16.resolveAssetSource;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 16;
                var14 = var18[var14];
                var14 = var17.bind(var0)(var14);
                var14 = var15.bind(var16)(var14);
                var14 = var14.uri;
                var9.badgeUrl = var14;
                var9 = var12.bind(var0)(var3, var13, var9);
                var9 = var10.bind(var7)(var9);
                _fun56269_ip = 2228;
                continue _fun56269;
            case 1948:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var10 = var10.bind(var0)(var9);
                var9 = var10.getEntryDuration;
                var12 = var9.bind(var10)(var3);
                var4 = var4 == var12;
                var1 = undefined;
                if (var4) {
                    _fun56269_ip = 2264;
                    continue _fun56269
                }
            case 1988:
                var4 = global;
                var11 = var4.Math;
                var10 = var11.round;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 13;
                var9 = var15[var9];
                var9 = var14.bind(var0)(var9);
                var9 = var9.Seconds;
                var9 = var9.HOUR;
                var9 = var12 / var9;
                var16 = var10.bind(var11)(var9);
                var10 = _closure1_slot0;
                var9 = 14;
                var11 = var15[var9];
                var11 = var10.bind(var0)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var15[var9];
                var11 = var10.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11["/50eHi"];
                var12 = var12.bind(var13)(var11);
                var11 = var15[var9];
                var11 = var10.bind(var0)(var11);
                var13 = var11.intl;
                var11 = var13.formatToPlainString;
                var9 = var15[var9];
                var9 = var10.bind(var0)(var9);
                var9 = var9.t;
                var10 = var9.C0AxoR;
                var9 = {};
                var9.hours = var16;
                var11 = var11.bind(var13)(var10, var9);
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var9 = '';
                var4 = ' - ';
                var10 = var10.bind(var9)(var12, var4, var11);
                var9 = var7.push;
                var4 = {};
                var13 = _closure1_slot3;
                var12 = var13.resolveAssetSource;
                var11 = 15;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var12.bind(var13)(var11);
                var11 = var11.uri;
                var4.badgeUrl = var11;
                var4.text = var10;
                var4 = var9.bind(var7)(var4);
            case 2228:
                var4 = {};
                var4.imageUrl = var8;
                var8 = var3.extra;
                var8 = var8.game_name;
                var4.title = var8;
                var4.subtitles = var7;
                var4.gradientColors = var5;
                var1 = var4;
            case 2264:
                var2 = var1;
            case 2267:
                var5 = _closure1_slot6;
                var4 = var5.getUser;
                var1 = var3.author_id;
                var11 = var4.bind(var5)(var1);
                var4 = null;
                var5 = var4 == var11;
                var1 = undefined;
                if (var5) {
                    _fun56269_ip = 2436;
                    continue _fun56269
                }
            case 2302:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 6;
                var5 = var9[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var7.getName;
                var7 = var5.bind(var7)(var0, var0, var11);
                var5 = {};
                var8 = var3.author_id;
                var5.authorId = var8;
                var8 = _closure1_slot0;
                var6 = 7;
                var6 = var9[var6];
                var9 = var8.bind(var0)(var6);
                var8 = var9.ensureAvatarSource;
                var10 = var11.getAvatarSource;
                var6 = 80;
                var6 = var10.bind(var11)(var4, var0, var6);
                var8 = var8.bind(var9)(var6);
                var9 = var4 == var8;
                var6 = undefined;
                if (var9) {
                    _fun56269_ip = 2405;
                    continue _fun56269
                }
            case 2400:
                var6 = var8.uri;
            case 2405:
                var5.avatarUrl = var6;
                var5.userActionDescription = var7;
                var6 = {};
                var6.ariaDescription = var7;
                var5.userClickable = var6;
                var1 = var5;
            case 2436:
                if (!(var4 != var2)) {
                    _fun56269_ip = 2444;
                    continue _fun56269
                }
            case 2440:
                if (!(var4 == var1)) {
                    _fun56269_ip = 2446;
                    continue _fun56269
                }
            case 2444:
                return var0;
            case 2446:
                var0 = {};
                var3 = var3.id;
                var0.contentId = var3;
                var21 = var0;
                var20 = var2;
                var2 = copyDataProperties(var21, var20);
                var21 = var0;
                var20 = var1;
                var1 = copyDataProperties(var21, var20);
                return var0;
        }
    };
    var2.transformToRowGeneratedContentInventoryEntryComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3413, 1676, 1613, 3416, 6797, 3920, 1418, 6798, 6799, 6800, 3199, 6802, 667, 1234, 6804, 5290, 6805, 5616, 6806, 6807, 6803, 2]);