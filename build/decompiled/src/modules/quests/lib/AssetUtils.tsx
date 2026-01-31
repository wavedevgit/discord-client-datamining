// modules/quests/lib/AssetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var11;
    var5 = function(arg0, arg1, arg2) { // Original name: resolveAsset, environment: var1
        _fun47062: for (var _fun47062_ip = 0;;) switch (_fun47062_ip) {
            case 0:
                var4 = arg1;
                var5 = _closure1_slot12;
                var3 = undefined;
                var1 = arg0;
                var0 = arg2;
                var1 = var5.bind(var3)(var1, var4, var0);
                var0 = _closure1_slot13;
                var4 = var0.bind(var3)(var4);
                var0 = {};
                var0.url = var1;
                var0.mimetype = var4;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun47062_ip = 68;
                    continue _fun47062
                }
            case 54:
                var3 = _closure1_slot7;
                var2 = var3.includes;
                var1 = var2.bind(var3)(var4);
            case 68:
                var0.isAnimated = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var0 = function(arg0, arg1) { // Original name: getVideoOrDefaultAsset, environment: var1
        var0 = arg1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var4 = function(arg0, arg1, arg2) { // Original name: buildUrl, environment: var1
        _fun47064: for (var _fun47064_ip = 0;;) switch (_fun47064_ip) {
            case 0:
                var0 = arg1;
                var1 = arg2;
                var3 = var0.startsWith;
                var2 = 'blob:';
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun47064_ip = 174;
                    continue _fun47064
                }
            case 29:
                var7 = _closure1_slot4;
                var3 = var0.includes;
                var6 = '/';
                var3 = var3.bind(var0)(var6);
                if (var3) {
                    _fun47064_ip = 145;
                    continue _fun47064
                }
            case 53:
                var4 = null;
                var5 = var4 == var1;
                var3 = undefined;
                if (var5) {
                    _fun47064_ip = 70;
                    continue _fun47064
                }
            case 64:
                var3 = var1.theme;
            case 70:
                var3 = var4 != var3;
                var5 = '';
                var4 = var5;
                if (!var3) {
                    _fun47064_ip = 108;
                    continue _fun47064
                }
            case 84:
                var3 = var1.theme;
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var4 = var1.bind(var6)(var3);
            case 108:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var11 = arg0;
                var13 = var5;
                var12 = var7;
                var10 = var4;
                var9 = var6;
                var8 = var0;
                var1 = var13[var3](var12, var11, var10, var9, var8, var7);
                _fun47064_ip = 172;
                continue _fun47064;
            case 145:
                var4 = _closure1_slot3;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var4, var0);
            case 172:
                return var1;
            case 174:
                var3 = var0.split;
                var2 = '?';
                var1 = 1;
                var3 = var3.bind(var0)(var2, var1);
                var2 = var3.at;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun47064_ip = 214;
                    continue _fun47064
                }
            case 211:
                var0 = var1;
            case 214:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function(arg0) { // Original name: getMimetype, environment: var1
        _fun47065: for (var _fun47065_ip = 0;;) switch (_fun47065_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.startsWith;
                var0 = 'blob:';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun47065_ip = 295;
                    continue _fun47065
                }
            case 26:
                var1 = _closure1_slot6;
                var0 = var1.exec;
                var4 = var0.bind(var1)(var3);
                var0 = null;
                var1 = var0 == var4;
                var2 = undefined;
                if (var1) {
                    _fun47065_ip = 81;
                    continue _fun47065
                }
            case 55:
                var1 = 1;
                var4 = var4[var1];
                var1 = var0 == var4;
                var2 = undefined;
                if (var1) {
                    _fun47065_ip = 81;
                    continue _fun47065
                }
            case 71:
                var1 = var4.toLowerCase;
                var2 = var1.bind(var4)();
            case 81:
                var1 = 'webm';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 287;
                    continue _fun47065
                }
            case 94:
                var1 = 'mp4';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 279;
                    continue _fun47065
                }
            case 107:
                var1 = 'webp';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 271;
                    continue _fun47065
                }
            case 120:
                var1 = 'jpg';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 263;
                    continue _fun47065
                }
            case 133:
                var1 = 'jpeg';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 263;
                    continue _fun47065
                }
            case 143:
                var1 = 'png';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 255;
                    continue _fun47065
                }
            case 151:
                var1 = 'gif';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 247;
                    continue _fun47065
                }
            case 159:
                var1 = 'svg';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 239;
                    continue _fun47065
                }
            case 167:
                var1 = 'txt';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 231;
                    continue _fun47065
                }
            case 177:
                var1 = 'vtt';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 223;
                    continue _fun47065
                }
            case 187:
                var1 = 'ts';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 215;
                    continue _fun47065
                }
            case 195:
                var1 = 'm3u8';
                if (!(var1 !== var2)) {
                    _fun47065_ip = 207;
                    continue _fun47065
                }
            case 205:
                return var0;
            case 207:
                var0 = 'application/x-mpegURL';
                return var0;
            case 215:
                var0 = 'video/mp2t';
                return var0;
            case 223:
                var0 = 'text/vtt';
                return var0;
            case 231:
                var0 = 'text/plain';
                return var0;
            case 239:
                var0 = 'image/svg+xml';
                return var0;
            case 247:
                var0 = 'image/gif';
                return var0;
            case 255:
                var0 = 'image/png';
                return var0;
            case 263:
                var0 = 'image/jpeg';
                return var0;
            case 271:
                var0 = 'image/webp';
                return var0;
            case 279:
                var0 = 'video/mp4';
                return var0;
            case 287:
                var0 = 'video/webm';
                return var0;
            case 295:
                var1 = global;
                var0 = var1.URL;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var2;
                var6 = var3;
                var0 = new var7[var0](var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = var0.searchParams;
                var2 = var3.get;
                var0 = 'mimetype';
                var4 = var2.bind(var3)(var0);
                var0 = null;
                var5 = var0 != var4;
                var3 = undefined;
                var2 = undefined;
                if (!var5) {
                    _fun47065_ip = 362;
                    continue _fun47065
                }
            case 359:
                var2 = var4;
            case 362:
                var4 = var0 != var2;
                var0 = null;
                if (!var4) {
                    _fun47065_ip = 382;
                    continue _fun47065
                }
            case 371:
                var1 = var1.decodeURIComponent;
                var0 = var1.bind(var3)(var2);
            case 382:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = function(arg0) { // Original name: safeMediaProxyDimension, environment: var1
        var0 = global;
        var3 = var0.Math;
        var2 = var3.min;
        var4 = var0.Math;
        var1 = var4.ceil;
        var0 = arg0;
        var1 = var1.bind(var4)(var0);
        var0 = _closure1_slot5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var11[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var7 = var6.CDN_URL_BASE;
    var _closure1_slot3 = var7;
    var6 = var6.QUESTS_CDN_URL_BASE;
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var11[var6];
    var6 = var10.bind(var0)(var6);
    var6 = var6.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot5 = var6;
    var8 = /\.([a-zA-Z0-9]+)$/;
    var _closure1_slot6 = var8;
    var7 = ['video/mp4', 'video/webm'];
    var _closure1_slot7 = var7;
    var6 = {};
    var9 = 'hero';
    var6.HERO = var9;
    var9 = 'hero_image';
    var6.HERO_IMAGE = var9;
    var9 = 'hero_video';
    var6.HERO_VIDEO = var9;
    var9 = 'quest_bar_hero';
    var6.QUEST_BAR_HERO = var9;
    var9 = 'quest_bar_hero_video';
    var6.QUEST_BAR_HERO_VIDEO = var9;
    var9 = 'reward';
    var6.REWARD = var9;
    var9 = 'reward_image';
    var6.REWARD_IMAGE = var9;
    var9 = 'game_tile';
    var6.GAME_TILE = var9;
    var9 = 'logo_type';
    var6.LOGO_TYPE = var9;
    var9 = 'cosponsor_logo_type';
    var6.COSPONSOR_LOGO_TYPE = var9;
    var9 = 'video_player_video';
    var6.VIDEO_PLAYER_VIDEO = var9;
    var9 = 'video_player_video_low_res';
    var6.VIDEO_PLAYER_VIDEO_LOW_RES = var9;
    var9 = 'video_player_video_hls';
    var6.VIDEO_PLAYER_VIDEO_HLS = var9;
    var9 = 'video_player_thumbnail';
    var6.VIDEO_PLAYER_THUMBNAIL = var9;
    var9 = 'video_player_caption';
    var6.VIDEO_PLAYER_CAPTION = var9;
    var9 = 'video_player_transcript';
    var6.VIDEO_PLAYER_TRANSCRIPT = var9;
    var _closure1_slot8 = var6;
    var15 = {};
    var9 = 'video';
    var15.VIDEO = var9;
    var9 = 'videoLowRes';
    var15.VIDEO_LOW_RES = var9;
    var9 = 'videoHls';
    var15.VIDEO_HLS = var9;
    var14 = {};
    var9 = 'url';
    var14.VIDEO = var9;
    var9 = 'thumbnail';
    var14.THUMBNAIL = var9;
    var9 = 'caption';
    var14.CAPTION = var9;
    var9 = 'transcript';
    var14.TRANSCRIPT = var9;
    var9 = {};
    var13 = var6.VIDEO_PLAYER_VIDEO;
    var12 = {};
    var16 = var15.VIDEO;
    var12.variant = var16;
    var16 = var14.VIDEO;
    var12.property = var16;
    var9[var13] = var12;
    var13 = var6.VIDEO_PLAYER_VIDEO_LOW_RES;
    var12 = {};
    var16 = var15.VIDEO_LOW_RES;
    var12.variant = var16;
    var16 = var14.VIDEO;
    var12.property = var16;
    var9[var13] = var12;
    var13 = var6.VIDEO_PLAYER_VIDEO_HLS;
    var12 = {};
    var16 = var15.VIDEO_HLS;
    var12.variant = var16;
    var16 = var14.VIDEO;
    var12.property = var16;
    var9[var13] = var12;
    var13 = var6.VIDEO_PLAYER_THUMBNAIL;
    var12 = {};
    var16 = var15.VIDEO;
    var12.variant = var16;
    var16 = var14.THUMBNAIL;
    var12.property = var16;
    var9[var13] = var12;
    var13 = var6.VIDEO_PLAYER_CAPTION;
    var12 = {};
    var16 = var15.VIDEO;
    var12.variant = var16;
    var16 = var14.CAPTION;
    var12.property = var16;
    var9[var13] = var12;
    var13 = var6.VIDEO_PLAYER_TRANSCRIPT;
    var12 = {};
    var15 = var15.VIDEO;
    var12.variant = var15;
    var14 = var14.TRANSCRIPT;
    var12.property = var14;
    var9[var13] = var12;
    var _closure1_slot9 = var9;
    var9 = 9;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/quests/lib/AssetUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.EXTENSION_RE = var8;
    var2.ANIMATED_MIMETYPES = var7;
    var2.QuestAssetType = var6;
    var2.resolveAsset = var5;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: getQuestAsset, environment: var1
        _fun47067: for (var _fun47067_ip = 0;;) switch (_fun47067_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var7 = arg2;
                var3 = arg3;
                var0 = _closure1_slot8;
                var0 = var0.HERO;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 1300;
                    continue _fun47067
                }
            case 32:
                var0 = _closure1_slot8;
                var0 = var0.HERO_IMAGE;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 1277;
                    continue _fun47067
                }
            case 49:
                var0 = _closure1_slot8;
                var0 = var0.HERO_VIDEO;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 1242;
                    continue _fun47067
                }
            case 66:
                var0 = _closure1_slot8;
                var0 = var0.QUEST_BAR_HERO;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 1187;
                    continue _fun47067
                }
            case 83:
                var0 = _closure1_slot8;
                var0 = var0.QUEST_BAR_HERO_VIDEO;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 1149;
                    continue _fun47067
                }
            case 100:
                var0 = _closure1_slot8;
                var0 = var0.REWARD;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 959;
                    continue _fun47067
                }
            case 117:
                var0 = _closure1_slot8;
                var0 = var0.REWARD_IMAGE;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 874;
                    continue _fun47067
                }
            case 134:
                var0 = _closure1_slot8;
                var0 = var0.GAME_TILE;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 734;
                    continue _fun47067
                }
            case 151:
                var0 = _closure1_slot8;
                var0 = var0.LOGO_TYPE;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 594;
                    continue _fun47067
                }
            case 168:
                var0 = _closure1_slot8;
                var0 = var0.COSPONSOR_LOGO_TYPE;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 436;
                    continue _fun47067
                }
            case 185:
                var0 = _closure1_slot8;
                var0 = var0.VIDEO_PLAYER_VIDEO;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 278;
                    continue _fun47067
                }
            case 199:
                var0 = _closure1_slot8;
                var0 = var0.VIDEO_PLAYER_VIDEO_LOW_RES;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 278;
                    continue _fun47067
                }
            case 213:
                var0 = _closure1_slot8;
                var0 = var0.VIDEO_PLAYER_VIDEO_HLS;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 278;
                    continue _fun47067
                }
            case 227:
                var0 = _closure1_slot8;
                var0 = var0.VIDEO_PLAYER_THUMBNAIL;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 278;
                    continue _fun47067
                }
            case 241:
                var0 = _closure1_slot8;
                var0 = var0.VIDEO_PLAYER_CAPTION;
                if (!(var0 !== var6)) {
                    _fun47067_ip = 278;
                    continue _fun47067
                }
            case 255:
                var0 = _closure1_slot8;
                var4 = var0.VIDEO_PLAYER_TRANSCRIPT;
                var8 = false;
                var5 = undefined;
                var0 = false;
                if (!(var4 === var6)) {
                    _fun47067_ip = 1353;
                    continue _fun47067
                }
            case 278:
                var9 = var1.config;
                var4 = 'taskConfigV2';
                var4 = var4 in var9;
                if (var4) {
                    _fun47067_ip = 298;
                    continue _fun47067
                }
            case 294:
                var4 = null;
                return var4;
            case 298:
                var4 = var1.config;
                var4 = var4.taskConfigV2;
                var9 = var4.tasks;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 6;
                var4 = var11[var4];
                var12 = undefined;
                var4 = var10.bind(var12)(var4);
                var10 = var4.FirstPartyQuestTaskTypes;
                if (var3) {
                    _fun47067_ip = 354;
                    continue _fun47067
                }
            case 346:
                var4 = var10.WATCH_VIDEO;
                _fun47067_ip = 360;
                continue _fun47067;
            case 354:
                var4 = var10.WATCH_VIDEO_ON_MOBILE;
            case 360:
                var9 = var9[var4];
                var4 = _closure1_slot9;
                var6 = var4[var6];
                var4 = null;
                var10 = var4 == var9;
                var11 = undefined;
                if (var10) {
                    _fun47067_ip = 417;
                    continue _fun47067
                }
            case 383:
                var10 = var9.assets;
                var9 = var6.variant;
                var9 = var10[var9];
                var10 = var4 == var9;
                var11 = undefined;
                if (var10) {
                    _fun47067_ip = 417;
                    continue _fun47067
                }
            case 407:
                var6 = var6.property;
                var11 = var9[var6];
            case 417:
                var6 = var4 == var11;
                var8 = false;
                var0 = true;
                var5 = var11;
                if (!var6) {
                    _fun47067_ip = 1353;
                    continue _fun47067
                }
            case 434:
                return var4;
            case 436:
                var4 = var1.config;
                var6 = var4.cosponsorMetadata;
                var4 = null;
                if (!(var4 != var6)) {
                    _fun47067_ip = 592;
                    continue _fun47067
                }
            case 456:
                var6 = 'dark';
                if (!(var6 === var7)) {
                    _fun47067_ip = 485;
                    continue _fun47067
                }
            case 464:
                var6 = var1.config;
                var6 = var6.cosponsorMetadata;
                var6 = var6.logotypeDark;
                if (!(var4 == var6)) {
                    _fun47067_ip = 566;
                    continue _fun47067
                }
            case 485:
                var6 = 'light';
                if (!(var6 === var7)) {
                    _fun47067_ip = 514;
                    continue _fun47067
                }
            case 493:
                var6 = var1.config;
                var6 = var6.cosponsorMetadata;
                var6 = var6.logotypeLight;
                if (!(var4 == var6)) {
                    _fun47067_ip = 540;
                    continue _fun47067
                }
            case 514:
                var6 = var1.config;
                var6 = var6.cosponsorMetadata;
                var5 = var6.logotype;
                var8 = true;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 540:
                var6 = var1.config;
                var6 = var6.cosponsorMetadata;
                var5 = var6.logotypeLight;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 566:
                var6 = var1.config;
                var6 = var6.cosponsorMetadata;
                var5 = var6.logotypeDark;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 592:
                return var4;
            case 594:
                var4 = 'dark';
                if (!(var4 === var7)) {
                    _fun47067_ip = 625;
                    continue _fun47067
                }
            case 602:
                var4 = var1.config;
                var4 = var4.assets;
                var6 = var4.logotypeDark;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun47067_ip = 708;
                    continue _fun47067
                }
            case 625:
                var4 = 'light';
                if (!(var4 === var7)) {
                    _fun47067_ip = 656;
                    continue _fun47067
                }
            case 633:
                var4 = var1.config;
                var4 = var4.assets;
                var6 = var4.logotypeLight;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun47067_ip = 682;
                    continue _fun47067
                }
            case 656:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.logotype;
                var8 = true;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 682:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.logotypeLight;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 708:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.logotypeDark;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 734:
                var4 = 'dark';
                if (!(var4 === var7)) {
                    _fun47067_ip = 765;
                    continue _fun47067
                }
            case 742:
                var4 = var1.config;
                var4 = var4.assets;
                var6 = var4.gameTileDark;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun47067_ip = 848;
                    continue _fun47067
                }
            case 765:
                var4 = 'light';
                if (!(var4 === var7)) {
                    _fun47067_ip = 796;
                    continue _fun47067
                }
            case 773:
                var4 = var1.config;
                var4 = var4.assets;
                var6 = var4.gameTileLight;
                var4 = null;
                if (!(var4 == var6)) {
                    _fun47067_ip = 822;
                    continue _fun47067
                }
            case 796:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.gameTile;
                var8 = true;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 822:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.gameTileLight;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 848:
                var4 = var1.config;
                var4 = var4.assets;
                var5 = var4.gameTileDark;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 874:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 2;
                var4 = var12[var4];
                var10 = undefined;
                var6 = var11.bind(var10)(var4);
                var4 = var6.getQuestPrimaryReward;
                var4 = var4.bind(var6)(var1);
                var9 = var4.type;
                var6 = 3;
                var6 = var12[var6];
                var6 = var11.bind(var10)(var6);
                var6 = var6.QuestRewardTypes;
                var6 = var6.VIRTUAL_CURRENCY;
                if (!(var9 !== var6)) {
                    _fun47067_ip = 955;
                    continue _fun47067
                }
            case 940:
                var5 = var4.asset;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 955:
                var4 = null;
                return var4;
            case 959:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 2;
                var4 = var12[var4];
                var10 = undefined;
                var6 = var11.bind(var10)(var4);
                var4 = var6.getQuestPrimaryReward;
                var6 = var4.bind(var6)(var1);
                var9 = var6.type;
                var4 = 3;
                var4 = var12[var4];
                var4 = var11.bind(var10)(var4);
                var4 = var4.QuestRewardTypes;
                var4 = var4.VIRTUAL_CURRENCY;
                if (!(var9 !== var4)) {
                    _fun47067_ip = 1059;
                    continue _fun47067
                }
            case 1025:
                var4 = _closure1_slot11;
                var9 = var6.assetVideo;
                var6 = var6.asset;
                var4 = var4.bind(var10)(var10, var6);
                var8 = false;
                var5 = var6;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 1059:
                if (var3) {
                    _fun47067_ip = 1104;
                    continue _fun47067
                }
            case 1062:
                var3 = {
                    'url': null,
                    'mimetype': 'video/webm',
                    'isAnimated': true
                };
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 5;
                var4 = var9[var4];
                var4 = var6.bind(var10)(var4);
                var3.url = var4;
                _fun47067_ip = 1147;
                continue _fun47067;
            case 1104:
                var4 = {
                    'url': null,
                    'mimetype': 'video/mp4',
                    'isAnimated': true
                };
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 4;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var4.url = var6;
                var3 = var4;
            case 1147:
                return var3;
            case 1149:
                var3 = var1.config;
                var3 = var3.assets;
                var9 = var3.questBarHeroVideo;
                var3 = null;
                var4 = var3 == var9;
                var8 = false;
                var5 = var9;
                var0 = false;
                if (!var4) {
                    _fun47067_ip = 1353;
                    continue _fun47067
                }
            case 1185:
                return var3;
            case 1187:
                var6 = _closure1_slot11;
                var3 = var1.config;
                var3 = var3.assets;
                var3 = var3.questBarHeroVideo;
                var3 = var1.config;
                var3 = var3.assets;
                var4 = var3.questBarHero;
                var3 = undefined;
                var3 = var6.bind(var3)(var3, var4);
                var8 = false;
                var5 = var4;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 1242:
                var3 = var1.config;
                var3 = var3.assets;
                var9 = var3.heroVideo;
                var3 = null;
                var4 = var3 == var9;
                var8 = false;
                var5 = var9;
                var0 = false;
                if (!var4) {
                    _fun47067_ip = 1353;
                    continue _fun47067
                }
            case 1275:
                return var3;
            case 1277:
                var3 = var1.config;
                var3 = var3.assets;
                var5 = var3.hero;
                var8 = false;
                var0 = false;
                _fun47067_ip = 1353;
                continue _fun47067;
            case 1300:
                var6 = _closure1_slot11;
                var3 = var1.config;
                var3 = var3.assets;
                var3 = var3.heroVideo;
                var3 = var1.config;
                var3 = var3.assets;
                var4 = var3.hero;
                var3 = undefined;
                var3 = var6.bind(var3)(var3, var4);
                var8 = false;
                var5 = var4;
                var0 = false;
            case 1353:
                var4 = _closure1_slot10;
                var3 = var1.id;
                var2 = {};
                var1 = undefined;
                var6 = undefined;
                if (!var8) {
                    _fun47067_ip = 1374;
                    continue _fun47067
                }
            case 1371:
                var6 = var7;
            case 1374:
                var2.theme = var6;
                var1 = var4.bind(var1)(var3, var5, var2);
                if (!var0) {
                    _fun47067_ip = 1404;
                    continue _fun47067
                }
            case 1389:
                var2 = var1.mimetype;
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun47067_ip = 1407;
                    continue _fun47067
                }
            case 1404:
                var0 = var1;
            case 1407:
                return var0;
        }
    };
    var2.getQuestAsset = var5;
    var2.buildUrl = var4;
    var2.getMimetype = var3;
    var3 = function(arg0, arg1) { // Original name: getDevicePixelScaledDimensions, environment: var1
        _fun47068: for (var _fun47068_ip = 0;;) switch (_fun47068_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var1 = var0.bind(var1)();
                var0 = 3;
                if (!(!(var1 < var0))) {
                    _fun47068_ip = 62;
                    continue _fun47068
                }
            case 42:
                var0 = {};
                var4 = var3 * var1;
                var0.width = var4;
                var1 = var2 * var1;
                var0.height = var1;
                _fun47068_ip = 75;
                continue _fun47068;
            case 62:
                var1 = {};
                var1.width = var3;
                var1.height = var2;
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var2.getDevicePixelScaledDimensions = var3;
    var3 = function(arg0) { // Original name: getAssetUrlWithMediaProxyQueryParams, environment: var1
        _fun47069: for (var _fun47069_ip = 0;;) switch (_fun47069_ip) {
            case 0:
                var0 = arg0;
                var2 = arguments[1];
                var7 = undefined;
                if (!(var2 === var7)) {
                    _fun47069_ip = 14;
                    continue _fun47069
                }
            case 12:
                var2 = {};
            case 14:
                var3 = var0.startsWith;
                var1 = 'blob:';
                var1 = var3.bind(var0)(var1);
                if (var1) {
                    _fun47069_ip = 264;
                    continue _fun47069
                }
            case 37:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var3 = var3.bind(var7)(var1);
                var1 = var3.toURLSafe;
                var3 = var1.bind(var3)(var0);
                var6 = null;
                var1 = var0;
                if (!(var6 != var3)) {
                    _fun47069_ip = 262;
                    continue _fun47069
                }
            case 83:
                var5 = var2.format;
                if (!(var6 != var5)) {
                    _fun47069_ip = 119;
                    continue _fun47069
                }
            case 92:
                var10 = var3.searchParams;
                var9 = var10.append;
                var8 = var2.format;
                var5 = 'format';
                var5 = var9.bind(var10)(var5, var8);
            case 119:
                var5 = var2.width;
                if (!(var6 != var5)) {
                    _fun47069_ip = 186;
                    continue _fun47069
                }
            case 128:
                var10 = var3.searchParams;
                var9 = var10.append;
                var8 = _closure1_slot14;
                var5 = var2.width;
                var11 = var8.bind(var7)(var5);
                var5 = global;
                var5 = var5.HermesInternal;
                var8 = var5.concat;
                var5 = '';
                var8 = var8.bind(var5)(var11);
                var5 = 'width';
                var5 = var9.bind(var10)(var5, var8);
            case 186:
                var5 = var2.height;
                if (!(var6 != var5)) {
                    _fun47069_ip = 253;
                    continue _fun47069
                }
            case 195:
                var6 = var3.searchParams;
                var5 = var6.append;
                var4 = _closure1_slot14;
                var2 = var2.height;
                var7 = var4.bind(var7)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '';
                var4 = var4.bind(var2)(var7);
                var2 = 'height';
                var2 = var5.bind(var6)(var2, var4);
            case 253:
                var2 = var3.toString;
                var1 = var2.bind(var3)();
            case 262:
                return var1;
            case 264:
                return var0;
        }
    };
    var2.getAssetUrlWithMediaProxyQueryParams = var3;
    var1 = function(arg0, arg1) { // Original name: convertVideoToFirstFrameImageWithMediaProxy, environment: var1
        _fun47070: for (var _fun47070_ip = 0;;) switch (_fun47070_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = var0.startsWith;
                var1 = 'blob:';
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun47070_ip = 228;
                    continue _fun47070
                }
            case 29:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var9 = undefined;
                var3 = var3.bind(var9)(var1);
                var1 = var3.toURLSafe;
                var3 = var1.bind(var3)(var0);
                var5 = null;
                var6 = var5 == var3;
                var1 = null;
                if (var6) {
                    _fun47070_ip = 226;
                    continue _fun47070
                }
            case 79:
                var10 = var3.searchParams;
                var8 = var10.append;
                var7 = 'format';
                var6 = 'webp';
                var6 = var8.bind(var10)(var7, var6);
                if (!(var5 != var4)) {
                    _fun47070_ip = 217;
                    continue _fun47070
                }
            case 111:
                var11 = var3.searchParams;
                var10 = var11.append;
                var8 = _closure1_slot14;
                var2 = var4.width;
                var6 = var8.bind(var9)(var2);
                var2 = global;
                var5 = var2.HermesInternal;
                var5 = var5.concat;
                var7 = '';
                var6 = var5.bind(var7)(var6);
                var5 = 'width';
                var5 = var10.bind(var11)(var5, var6);
                var6 = var3.searchParams;
                var5 = var6.append;
                var4 = var4.height;
                var4 = var8.bind(var9)(var4);
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var4 = var2.bind(var7)(var4);
                var2 = 'height';
                var2 = var5.bind(var6)(var2, var4);
            case 217:
                var2 = var3.toString;
                var1 = var2.bind(var3)();
            case 226:
                return var1;
            case 228:
                return var0;
        }
    };
    var2.convertVideoToFirstFrameImageWithMediaProxy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5191, 660, 5249, 5200, 5260, 5261, 5197, 1586, 1457, 2]);