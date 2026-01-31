// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: IconOrPreview, environment: var1
        _fun101622: for (var _fun101622_ip = 0;;) switch (_fun101622_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.userId;
                var0 = var2.activity;
                var9 = var2.stream;
                var2 = var2.game;
                var4 = _closure1_slot16;
                var3 = undefined;
                var8 = var4.bind(var3)();
                var _closure2_slot0 = var8;
                var4 = {};
                var4.userId = var5;
                var4.activity = var0;
                var4.game = var2;
                var4.stream = var9;
                var2 = function(arg0) { // Original name: useActivityIcon, environment: var1
                    _fun101623: for (var _fun101623_ip = 0;;) switch (_fun101623_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.userId;
                            var1 = var0.activity;
                            var9 = var0.game;
                            var10 = var0.stream;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 41;
                            var2 = var4[var2];
                            var4 = undefined;
                            var8 = var3.bind(var4)(var2);
                            var2 = null;
                            var3 = var2 == var10;
                            var6 = undefined;
                            if (var3) {
                                _fun101623_ip = 67;
                                continue _fun101623
                            }
                        case 62:
                            var6 = var10.guildId;
                        case 67:
                            var3 = var2 == var10;
                            var5 = undefined;
                            if (var3) {
                                _fun101623_ip = 81;
                                continue _fun101623
                            }
                        case 76:
                            var5 = var10.channelId;
                        case 81:
                            var11 = var2 == var10;
                            var3 = undefined;
                            if (var11) {
                                _fun101623_ip = 96;
                                continue _fun101623
                            }
                        case 90:
                            var3 = var10.ownerId;
                        case 96:
                            var3 = var8.bind(var4)(var6, var5, var3);
                            var5 = var3.previewUrl;
                            var6 = var2 != var5;
                            var3 = undefined;
                            if (!var6) {
                                _fun101623_ip = 121;
                                continue _fun101623
                            }
                        case 118:
                            var3 = var5;
                        case 121:
                            var5 = var2 == var3;
                            if (!var5) {
                                _fun101623_ip = 162;
                                continue _fun101623
                            }
                        case 128:
                            var8 = var2 == var1;
                            var6 = undefined;
                            if (var8) {
                                _fun101623_ip = 158;
                                continue _fun101623
                            }
                        case 137:
                            var8 = var1.assets;
                            var10 = var2 == var8;
                            var6 = undefined;
                            if (var10) {
                                _fun101623_ip = 158;
                                continue _fun101623
                            }
                        case 152:
                            var6 = var8.large_image;
                        case 158:
                            var5 = var2 != var6;
                        case 162:
                            if (!var5) {
                                _fun101623_ip = 254;
                                continue _fun101623
                            }
                        case 165:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 42;
                            var5 = var8[var5];
                            var11 = var6.bind(var4)(var5);
                            var10 = var11.getAssetImage;
                            var5 = var2 == var1;
                            var8 = undefined;
                            if (var5) {
                                _fun101623_ip = 206;
                                continue _fun101623
                            }
                        case 200:
                            var8 = var1.application_id;
                        case 206:
                            var5 = var2 == var1;
                            var6 = undefined;
                            if (var5) {
                                _fun101623_ip = 227;
                                continue _fun101623
                            }
                        case 215:
                            var5 = var1.assets;
                            var6 = var5.large_image;
                        case 227:
                            var12 = _closure1_slot14;
                            var5 = new Array(2);
                            var5[0] = var12;
                            var12 = _closure1_slot14;
                            var5[1] = var12;
                            var3 = var10.bind(var11)(var8, var6, var5);
                        case 254:
                            if (!(var2 == var3)) {
                                _fun101623_ip = 285;
                                continue _fun101623
                            }
                        case 258:
                            var6 = var2 == var9;
                            var5 = undefined;
                            if (var6) {
                                _fun101623_ip = 282;
                                continue _fun101623
                            }
                        case 267:
                            var8 = var9.getIconURL;
                            var6 = _closure1_slot14;
                            var5 = var8.bind(var9)(var6);
                        case 282:
                            var3 = var5;
                        case 285:
                            var5 = var2 == var3;
                            if (!var5) {
                                _fun101623_ip = 326;
                                continue _fun101623
                            }
                        case 292:
                            var8 = var2 == var1;
                            var6 = undefined;
                            if (var8) {
                                _fun101623_ip = 322;
                                continue _fun101623
                            }
                        case 301:
                            var8 = var1.assets;
                            var9 = var2 == var8;
                            var6 = undefined;
                            if (var9) {
                                _fun101623_ip = 322;
                                continue _fun101623
                            }
                        case 316:
                            var6 = var8.small_image;
                        case 322:
                            var5 = var2 != var6;
                        case 326:
                            if (!var5) {
                                _fun101623_ip = 418;
                                continue _fun101623
                            }
                        case 329:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 42;
                            var5 = var8[var5];
                            var10 = var6.bind(var4)(var5);
                            var9 = var10.getAssetImage;
                            var5 = var2 == var1;
                            var8 = undefined;
                            if (var5) {
                                _fun101623_ip = 370;
                                continue _fun101623
                            }
                        case 364:
                            var8 = var1.application_id;
                        case 370:
                            var5 = var2 == var1;
                            var6 = undefined;
                            if (var5) {
                                _fun101623_ip = 391;
                                continue _fun101623
                            }
                        case 379:
                            var5 = var1.assets;
                            var6 = var5.small_image;
                        case 391:
                            var11 = _closure1_slot14;
                            var5 = new Array(2);
                            var5[0] = var11;
                            var11 = _closure1_slot14;
                            var5[1] = var11;
                            var3 = var9.bind(var10)(var8, var6, var5);
                        case 418:
                            if (!(var2 == var3)) {
                                _fun101623_ip = 521;
                                continue _fun101623
                            }
                        case 422:
                            var5 = var2 == var1;
                            var2 = undefined;
                            if (var5) {
                                _fun101623_ip = 436;
                                continue _fun101623
                            }
                        case 431:
                            var2 = var1.type;
                        case 436:
                            var1 = _closure1_slot9;
                            var1 = var1.PLAYING;
                            if (!(var2 !== var1)) {
                                _fun101623_ip = 472;
                                continue _fun101623
                            }
                        case 450:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 43;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            _fun101623_ip = 518;
                            continue _fun101623;
                        case 472:
                            var5 = _closure1_slot15;
                            var6 = var7.slice;
                            var2 = -1;
                            var7 = var6.bind(var7)(var2);
                            var6 = var7.charCodeAt;
                            var2 = 0;
                            var6 = var6.bind(var7)(var2);
                            var2 = var5.length;
                            var2 = var6 % var2;
                            var1 = var5[var2];
                        case 518:
                            var3 = var1;
                        case 521:
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 44;
                            var2 = var5[var0];
                            var6 = var1.bind(var4)(var2);
                            var2 = var6.memoizedImageSource;
                            var2 = var2.bind(var6)(var3);
                            var0 = var5[var0];
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.useDominantRGBFromImage;
                            var1 = var0.bind(var1)(var3, var2);
                            var0 = {};
                            var0.source = var2;
                            var0.accentColor = var1;
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var4);
                var14 = var2.source;
                var2 = var2.accentColor;
                var13 = var2.r;
                var12 = var2.g;
                var11 = var2.b;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 35;
                var2 = var6[var4];
                var10 = var5.bind(var3)(var2);
                var2 = var10.rgbToHex;
                var2 = var2.bind(var10)(var13, var12, var11);
                var _closure2_slot1 = var2;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.hexWithOpacity;
                var4 = 0.2;
                var10 = var5.bind(var6)(var2, var4);
                var _closure2_slot2 = var10;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = var8.cardImageAssetContainer;
                var4[1] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.cardImageAssetContainer;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var2 = _closure2_slot1;
                    var1.shadowColor = var2;
                    var0[1] = var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var2, var4);
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var10;
                var10 = var8.cardImageAssetBackground;
                var2[1] = var10;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.cardImageAssetBackground;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var2 = _closure2_slot2;
                    var1.backgroundColor = var2;
                    var0[1] = var1;
                    return var0;
                };
                var11 = var5.bind(var6)(var1, var2);
                var1 = null;
                if (!(var1 == var9)) {
                    _fun101622_ip = 720;
                    continue _fun101622
                }
            case 266:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 27;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun101622_ip = 563;
                    continue _fun101622
                }
            case 297:
                var2 = var1 == var0;
                var5 = undefined;
                if (var2) {
                    _fun101622_ip = 311;
                    continue _fun101622
                }
            case 306:
                var5 = var0.type;
            case 311:
                var2 = _closure1_slot9;
                var2 = var2.LISTENING;
                if (!(var5 !== var2)) {
                    _fun101622_ip = 504;
                    continue _fun101622
                }
            case 328:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 30;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun101622_ip = 445;
                    continue _fun101622
                }
            case 356:
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun101622_ip = 370;
                    continue _fun101622
                }
            case 365:
                var1 = var0.type;
            case 370:
                var0 = _closure1_slot9;
                var0 = var0.CUSTOM_STATUS;
                var5 = undefined;
                if (!(var1 !== var0)) {
                    _fun101622_ip = 443;
                    continue _fun101622
                }
            case 386:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 34;
                var1 = var10[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["2TbM/G"];
                var5 = var1.bind(var2)(var0);
            case 443:
                _fun101622_ip = 502;
                continue _fun101622;
            case 445:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 34;
                var1 = var10[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.T0uYK9;
                var5 = var1.bind(var2)(var0);
            case 502:
                _fun101622_ip = 561;
                continue _fun101622;
            case 504:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 34;
                var1 = var10[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.kUEnxN;
                var5 = var1.bind(var2)(var0);
            case 561:
                _fun101622_ip = 620;
                continue _fun101622;
            case 563:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 34;
                var1 = var10[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.rmnkz4;
                var5 = var1.bind(var2)(var0);
            case 620:
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var0.accessibilityLabel = var5;
                var10 = _closure1_slot11;
                var6 = _closure1_slot4;
                var5 = {};
                var5.style = var11;
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 38;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var15 = var8.cardImageAsset;
                var11.style = var15;
                var11.source = var14;
                var11 = var13.bind(var3)(var12, var11);
                var5.children = var11;
                var5 = var10.bind(var3)(var6, var5);
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 720:
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var6 = _closure1_slot11;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 36;
                var4 = var11[var4];
                var5 = var10.bind(var3)(var4);
                var4 = {};
                var4.stream = var9;
                var12 = _closure1_slot11;
                var9 = 37;
                var9 = var11[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var8.cardImageStreamLive;
                var9.style = var13;
                var13 = var8.stageStreamLiveText;
                var9.textStyle = var13;
                var13 = false;
                var9.allowFontScaling = var13;
                var9 = var12.bind(var3)(var10, var9);
                var4.children = var9;
                var8 = var8.cardImageStreamPreview;
                var4.style = var8;
                var10 = _closure1_slot0;
                var7 = 34;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["7Xq/nV"];
                var7 = var8.bind(var9)(var7);
                var4.ctaText = var7;
                var7 = true;
                var4.disabled = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: StageStreamAvatars, environment: var1
        var0 = arg0;
        var7 = var0.user;
        var11 = var0.stage;
        var0 = _closure1_slot16;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 39;
        var0 = var9[var0];
        var1 = var8.bind(var3)(var0);
        var0 = var1.useLiveStageData;
        var0 = var0.bind(var1)(var11);
        var10 = var0.audienceCount;
        var15 = var0.audienceFriends;
        var2 = _closure1_slot11;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.avatarStackContainer;
        var0.style = var5;
        var6 = _closure1_slot11;
        var4 = 40;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var5 = var4.HappeningNowAvatarStack;
        var4 = {};
        var12 = new Array(1);
        var12[0] = var7;
        var7 = 1;
        var16 = var12;
        var14 = var7;
        var13 = arraySpread(var16, var15, var14);
        var4.users = var12;
        var11 = var11.guild_id;
        var4.guildId = var11;
        var7 = var10 + var7;
        var4.userCount = var7;
        var7 = true;
        var4.isStage = var7;
        var7 = 25;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.AvatarSizes;
        var7 = var7.SIZE_16;
        var4.avatarSize = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var14 = 1;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PixelRatio;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var15 = 2;
    var3 = var5[var15];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.HAPPENING_NOW_CONTENT_HEIGHT;
    var8 = var3.HappeningNowCardTrackingType;
    var _closure1_slot7 = var8;
    var16 = var3.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    var3 = var3.STATUS_CUTOUT_SMALL;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ActivityTypes;
    var _closure1_slot9 = var8;
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot11 = var8;
    var8 = var3.jsxs;
    var _closure1_slot12 = var8;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = var7.getPixelSizeForLayoutSize;
    var3 = var3.bind(var7)(var13);
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var12.bind(var0)(var3);
    var3 = new Array(2);
    var3[0] = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var3[1] = var7;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexShrink': 1,
        'gap': 2
    };
    var3.content = var9;
    var9 = {
        'backgroundColor': null,
        'padding': 2,
        'borderRadius': null,
        'position': 'absolute',
        'alignSelf': 'center',
        'bottom': 0
    };
    var11 = 11;
    var17 = var5[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.STAGE_CARD_PILL_BG;
    var9.backgroundColor = var17;
    var17 = var5[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.xl;
    var9.borderRadius = var17;
    var3.avatarStackContainer = var9;
    var9 = {};
    var9.marginBottom = var15;
    var3.cardAvatar = var9;
    var9 = {};
    var9.height = var13;
    var9.minWidth = var13;
    var15 = 12;
    var9.marginRight = var15;
    var15 = 'relative';
    var9.position = var15;
    var3.cardImage = var9;
    var9 = {};
    var9.height = var16;
    var9.minWidth = var13;
    var9.position = var15;
    var3.cardImageStream = var9;
    var9 = {};
    var9.width = var13;
    var9.height = var13;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var9.borderWidth = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderColor = var14;
    var3.cardImageAsset = var9;
    var9 = {
        'height': '100%',
        'backgroundColor': null,
        'borderRadius': null,
        'shadowOffset': null,
        'shadowRadius': 5,
        'shadowOpacity': 0.32,
        'elevation': 10
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_SECONDARY_BG;
    var9.backgroundColor = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderRadius = var14;
    var14 = {
        'width': 0,
        'height': 0
    };
    var9.shadowOffset = var14;
    var3.cardImageAssetContainer = var9;
    var9 = {};
    var9.width = var13;
    var9.height = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var3.cardImageAssetBackground = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9.borderRadius = var11;
    var11 = 'hidden';
    var9.overflow = var11;
    var3.cardImageStreamPreview = var9;
    var9 = {
        'top': 4,
        'left': 4,
        'position': 'absolute'
    };
    var3.cardImageStreamLive = var9;
    var9 = {
        'fontSize': 10,
        'lineHeight': 13
    };
    var10 = var10.PRIMARY_BOLD;
    var9.fontFamily = var10;
    var3.stageStreamLiveText = var9;
    var9 = {
        'marginRight': 12,
        'flexDirection': 'column',
        'height': '100%'
    };
    var3.stagePreviewWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101627: for (var _fun101627_ip = 0;;) switch (_fun101627_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.userId;
                var _closure2_slot0 = var14;
                var10 = var0.guildId;
                var _closure2_slot1 = var10;
                var31 = var0.status;
                var13 = var0.index;
                var _closure2_slot2 = var13;
                var9 = var0.activity;
                var _closure2_slot3 = var9;
                var28 = var0.stream;
                var _closure2_slot4 = var28;
                var12 = var0.fullwidth;
                var20 = var0.renderingContext;
                var4 = var0.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101627_ip = 83;
                    continue _fun101627
                }
            case 81:
                var4 = false;
            case 83:
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot16;
                var25 = var2.bind(var3)();
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 12;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var8 = var2.analyticsLocations;
                _closure2_slot5 = var8;
                var6 = _closure1_slot0;
                var2 = 13;
                var5 = var7[var2];
                var16 = var6.bind(var3)(var5);
                var15 = var16.useStateFromStores;
                var5 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var15.bind(var16)(var11, var5);
                _closure2_slot6 = var11;
                var5 = 14;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.useGetOrFetchApplication;
                var22 = null;
                var15 = var22 == var9;
                var5 = undefined;
                if (var15) {
                    _fun101627_ip = 221;
                    continue _fun101627
                }
            case 215:
                var5 = var9.application_id;
            case 221:
                var29 = var6.bind(var7)(var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = var6[var2];
                var15 = var5.bind(var3)(var2);
                var7 = var15.useStateFromStores;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    _fun101629: for (var _fun101629_ip = 0;;) switch (_fun101629_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getStageInstanceByChannel;
                            var4 = _closure2_slot4;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun101629_ip = 40;
                                continue _fun101629
                            }
                        case 31:
                            var3 = _closure2_slot4;
                            var0 = var3.channelId;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var21 = var7.bind(var15)(var5, var2);
                var5 = _closure1_slot1;
                var2 = 27;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var9);
                if (var2) {
                    _fun101627_ip = 508;
                    continue _fun101627
                }
            case 300:
                var2 = var22 == var9;
                var5 = undefined;
                if (var2) {
                    _fun101627_ip = 314;
                    continue _fun101627
                }
            case 309:
                var5 = var9.type;
            case 314:
                var2 = _closure1_slot9;
                var2 = var2.LISTENING;
                if (!(var5 !== var2)) {
                    _fun101627_ip = 480;
                    continue _fun101627
                }
            case 331:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 30;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var9);
                if (var2) {
                    _fun101627_ip = 452;
                    continue _fun101627
                }
            case 359:
                var2 = var22 == var9;
                var5 = undefined;
                if (var2) {
                    _fun101627_ip = 373;
                    continue _fun101627
                }
            case 368:
                var5 = var9.type;
            case 373:
                var2 = _closure1_slot9;
                var2 = var2.CUSTOM_STATUS;
                var6 = undefined;
                if (!(var5 !== var2)) {
                    _fun101627_ip = 534;
                    continue _fun101627
                }
            case 392:
                if (!(var22 == var21)) {
                    _fun101627_ip = 424;
                    continue _fun101627
                }
            case 396:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 33;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.GameControllerIcon;
                _fun101627_ip = 534;
                continue _fun101627;
            case 424:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 32;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.StageIcon;
                _fun101627_ip = 534;
                continue _fun101627;
            case 452:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 31;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.XboxNeutralIcon;
                _fun101627_ip = 534;
                continue _fun101627;
            case 480:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 29;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.MusicIcon;
                _fun101627_ip = 534;
                continue _fun101627;
            case 508:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 28;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.SpotifyNeutralIcon;
            case 534:
                var7 = _closure1_slot3;
                var5 = var7.useCallback;
                var2 = new Array(7);
                var2[0] = var14;
                var2[1] = var11;
                var2[2] = var28;
                var2[3] = var10;
                var2[4] = var9;
                var2[5] = var13;
                var2[6] = var8;
                var1 = function() { // Environment: var1
                    _fun101630: for (var _fun101630_ip = 0;;) switch (_fun101630_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun101630_ip = 76;
                                continue _fun101630
                            }
                        case 15:
                            var0 = _closure2_slot3;
                            if (!(var4 != var0)) {
                                _fun101630_ip = 49;
                                continue _fun101630
                            }
                        case 23:
                            var0 = _closure2_slot3;
                            var5 = var0.type;
                            var2 = _closure1_slot9;
                            var2 = var2.CUSTOM_STATUS;
                            if (!(var5 === var2)) {
                                _fun101630_ip = 64;
                                continue _fun101630
                            }
                        case 49:
                            var2 = _closure1_slot7;
                            var9 = var2.STATUS_CARD;
                            _fun101630_ip = 74;
                            continue _fun101630;
                        case 64:
                            var0 = _closure1_slot7;
                            var9 = var0.ACTIVITY_CARD;
                        case 74:
                            _fun101630_ip = 89;
                            continue _fun101630;
                        case 76:
                            var0 = _closure1_slot7;
                            var9 = var0.STREAM_CARD;
                        case 89:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 15;
                            var5 = var5[var0];
                            var0 = undefined;
                            var8 = var6.bind(var0)(var5);
                            var7 = var8.track;
                            var5 = _closure1_slot10;
                            var6 = var5.ACTIVITY_CARD_CLICKED;
                            var5 = {};
                            var5.type = var9;
                            var9 = _closure2_slot2;
                            var5.order = var9;
                            var9 = _closure2_slot1;
                            var5.guild_id = var9;
                            var10 = _closure2_slot0;
                            var9 = new Array(1);
                            var9[0] = var10;
                            var5.highlighted_user_ids = var9;
                            var9 = _closure2_slot4;
                            var10 = var4 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun101630_ip = 191;
                                continue _fun101630
                            }
                        case 182:
                            var10 = _closure2_slot4;
                            var9 = var10.channelId;
                        case 191:
                            var5.destination_channel_id = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var3 = _closure2_slot4;
                            if (!(var4 == var3)) {
                                _fun101630_ip = 267;
                                continue _fun101630
                            }
                        case 210:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 17;
                            var4 = var3[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = 18;
                            var4 = var3[var4];
                            var3 = var3.paths;
                            var5 = var5.bind(var0)(var4, var3);
                            var4 = var5.then;
                            var3 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.default;
                                var1 = {};
                                var3 = _closure2_slot0;
                                var1.userId = var3;
                                var3 = _closure2_slot6;
                                var1.localUser = var3;
                                var0 = _closure2_slot5;
                                var1.sourceAnalyticsLocations = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            _fun101630_ip = 322;
                            continue _fun101630;
                        case 267:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 17;
                            var3 = var2[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 16;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var4.bind(var0)(var3, var2);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.default;
                                var0 = _closure2_slot4;
                                var2 = var0.channelId;
                                var1 = undefined;
                                var0 = true;
                                var0 = var3.bind(var1)(var2, var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 322:
                            return var0;
                    }
                };
                var7 = var5.bind(var7)(var1, var2);
                if (!(var22 != var11)) {
                    _fun101627_ip = 1378;
                    continue _fun101627
                }
            case 595:
                var13 = 'full';
                if (var12) {
                    _fun101627_ip = 620;
                    continue _fun101627
                }
            case 602:
                var2 = var22 != var28;
                var1 = 'medium';
                if (!var2) {
                    _fun101627_ip = 617;
                    continue _fun101627
                }
            case 613:
                var1 = 'large';
            case 617:
                var13 = var1;
            case 620:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 20;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getName;
                var8 = var1.bind(var2)(var10, var22, var11);
                var1 = var22 == var9;
                var2 = undefined;
                if (var1) {
                    _fun101627_ip = 667;
                    continue _fun101627
                }
            case 662:
                var2 = var9.type;
            case 667:
                var1 = _closure1_slot9;
                var1 = var1.CUSTOM_STATUS;
                if (!(var2 !== var1)) {
                    _fun101627_ip = 1306;
                    continue _fun101627
                }
            case 684:
                var5 = _closure1_slot11;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var23 = 22;
                var1 = var1[var23];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.onPress = var7;
                var1.width = var13;
                var1.IconComponent = var6;
                var1.panelVariant = var4;
                var14 = _closure1_slot12;
                var13 = _closure1_slot13;
                if (!(var22 == var21)) {
                    _fun101627_ip = 1064;
                    continue _fun101627
                }
            case 742:
                var6 = {};
                var17 = _closure1_slot11;
                var16 = _closure1_slot4;
                var15 = {};
                var18 = var25.cardImage;
                var15.style = var18;
                var24 = _closure1_slot11;
                var19 = _closure1_slot17;
                var18 = {};
                var26 = var11.id;
                var18.userId = var26;
                var18.activity = var9;
                var18.game = var29;
                var18.stream = var28;
                var18 = var24.bind(var3)(var19, var18);
                var15.children = var18;
                var16 = var17.bind(var3)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot12;
                var17 = _closure1_slot4;
                var16 = {};
                var19 = var25.content;
                var16.style = var19;
                var30 = _closure1_slot11;
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var19 = 24;
                var19 = var27[var19];
                var26 = var24.bind(var3)(var19);
                var19 = {};
                var19.user = var11;
                var24 = var11.avatarDecoration;
                var19.avatarDecoration = var24;
                var24 = _closure1_slot0;
                var32 = 25;
                var32 = var27[var32];
                var32 = var24.bind(var3)(var32);
                var32 = var32.AvatarSizes;
                var32 = var32.XSMALL;
                var19.size = var32;
                var19.guildId = var10;
                var19.status = var31;
                var31 = var25.cardAvatar;
                var19.style = var31;
                var31 = _closure1_slot8;
                var19.autoStatusCutout = var31;
                var26 = var30.bind(var3)(var26, var19);
                var19 = new Array(3);
                var19[0] = var26;
                var30 = _closure1_slot11;
                var23 = var27[var23];
                var23 = var24.bind(var3)(var23);
                var26 = var23.HappeningNowCardHeader;
                var23 = {};
                var31 = true;
                var23.noMargin = var31;
                var23.children = var8;
                var23 = var30.bind(var3)(var26, var23);
                var19[1] = var23;
                var26 = _closure1_slot11;
                var23 = 26;
                var23 = var27[var23];
                var23 = var24.bind(var3)(var23);
                var24 = var23.HappeningNowActivityCardSubtitle;
                var23 = {};
                var23.activity = var9;
                var23.stream = var28;
                var23 = var26.bind(var3)(var24, var23);
                var19[2] = var23;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var6.children = var15;
                _fun101627_ip = 1288;
                continue _fun101627;
            case 1064:
                var15 = {};
                var18 = _closure1_slot12;
                var17 = _closure1_slot4;
                var16 = {};
                var19 = var25.stagePreviewWrapper;
                var16.style = var19;
                var24 = _closure1_slot11;
                var23 = _closure1_slot4;
                var19 = {};
                var25 = var25.cardImageStream;
                var19.style = var25;
                var27 = _closure1_slot11;
                var26 = _closure1_slot17;
                var25 = {};
                var30 = var11.id;
                var25.userId = var30;
                var25.activity = var9;
                var25.game = var29;
                var25.stream = var28;
                var25 = var27.bind(var3)(var26, var25);
                var19.children = var25;
                var23 = var24.bind(var3)(var23, var19);
                var19 = new Array(2);
                var19[0] = var23;
                var23 = var22 != var21;
                var22 = null;
                if (!var23) {
                    _fun101627_ip = 1198;
                    continue _fun101627
                }
            case 1173:
                var25 = _closure1_slot11;
                var24 = _closure1_slot18;
                var23 = {};
                var23.user = var11;
                var23.stage = var21;
                var22 = var25.bind(var3)(var24, var23);
            case 1198:
                var19[1] = var22;
                var16.children = var19;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot11;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 23;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.HappeningNowLiveStageContent;
                var17 = {};
                var17.stage = var21;
                var17.renderingContext = var20;
                var17.guildId = var10;
                var17.streamingUser = var11;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var15.children = var16;
                var6 = var15;
            case 1288:
                var6 = var14.bind(var3)(var13, var6);
                var1.children = var6;
                var1 = var5.bind(var3)(var2, var1);
                _fun101627_ip = 1376;
                continue _fun101627;
            case 1306:
                var6 = _closure1_slot11;
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 21;
                var2 = var13[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.CustomStatusActivityCard;
                var2 = {};
                var2.fullwidth = var12;
                var2.user = var11;
                var2.guildId = var10;
                var2.activity = var9;
                var2.userTitle = var8;
                var2.onPress = var7;
                var2.panelVariant = var4;
                var1 = var6.bind(var3)(var5, var2);
            case 1376:
                return var1;
            case 1378:
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 19;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.HappeningNowCardPlaceholder;
                var0 = {};
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 45;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1377, 1613, 10802, 660, 483, 33, 13206, 13207, 1297, 671, 5688, 566, 6841, 795, 7928, 1307, 7312, 13201, 3920, 13208, 10803, 13202, 5414, 5416, 13211, 5634, 13212, 7736, 7800, 10673, 4823, 5289, 1234, 3199, 8626, 7962, 4667, 13203, 13213, 8629, 5616, 13215, 5700, 2]);