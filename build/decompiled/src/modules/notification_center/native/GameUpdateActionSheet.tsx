// modules/notification_center/native/GameUpdateActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'zIndex': 1
    };
    var3.floatingHandle = var8;
    var8 = {};
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
    var8.backgroundColor = var13;
    var3.tabStyle = var8;
    var8 = {};
    var13 = 'relative';
    var8.position = var13;
    var3.scrollView = var8;
    var8 = {
        'paddingHorizontal': 16,
        'gap': 20
    };
    var3.content = var8;
    var8 = {
        'marginTop': 24,
        'paddingVertical': 20,
        'position': 'relative',
        'flexDirection': 'column',
        'gap': 20
    };
    var3.gradientContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967272,
        'bottom': 0,
        'left': 4294967280,
        'right': 4294967280
    };
    var3.gradient = var8;
    var8 = {
        'flexDirection': 'row',
        'gap': 4
    };
    var3.timestampRow = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'gap': 10
    };
    var3.tagsContainer = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var8.borderWidth = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.backgroundColor = var12;
    var8.padding = var9;
    var3.tagWrapper = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'paddingVertical': 12,
        'borderTopWidth': 1,
        'borderTopColor': null,
        'gap': 24
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderTopColor = var12;
    var3.infoRow = var8;
    var8 = {
        'flex': 1,
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-end'
    };
    var3.publishersContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-end',
        'flexWrap': 'wrap',
        'gap': 16
    };
    var3.platformsContainer = var8;
    var8 = {};
    var8.gap = var11;
    var3.gameHeaderContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.gameHeaderRow = var8;
    var8 = {
        'width': 18,
        'height': 18,
        'overflow': 'hidden'
    };
    var3.gameIconContainer = var8;
    var8 = {};
    var11 = '100%';
    var8.height = var11;
    var3.gameIcon = var8;
    var8 = {
        'paddingVertical': 12,
        'gap': 12,
        'borderTopWidth': 1
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderTopColor = var9;
    var3.officialServerInfoRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/GameUpdateActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun118014: for (var _fun118014_ip = 0;;) switch (_fun118014_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.gameUpdateId;
                var _closure2_slot0 = var23;
                var22 = var0.gameId;
                var _closure2_slot1 = var22;
                var42 = var0.initialUpdateTitle;
                var4 = var0.initialStartDate;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var0 = _closure1_slot11;
                var21 = var0.bind(var3)();
                var _closure2_slot2 = var21;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useGetOrFetchApplication;
                var25 = var0.bind(var1)(var22);
                var0 = 8;
                var0 = var5[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useRequestDetectableGameSupplementalData;
                var0 = var0.bind(var1)(var22);
                var0 = 9;
                var0 = var5[var0];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var32
                    var2 = _closure1_slot6;
                    var1 = var2.getGame;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var38 = var6.bind(var7)(var1, var0);
                var7 = _closure1_slot1;
                var0 = 10;
                var0 = var5[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var26 = var0.width;
                var0 = 11;
                var0 = var5[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useGameUpdateData;
                var1 = var0.bind(var1)(var22, var23);
                var0 = var1.data;
                var _closure2_slot3 = var0;
                var13 = var1.isLoading;
                var _closure2_slot4 = var13;
                var6 = var1.error;
                var _closure2_slot5 = var6;
                var10 = _closure1_slot3;
                var1 = var10.useRef;
                var27 = null;
                var1 = var1.bind(var10)(var27);
                var _closure2_slot6 = var1;
                var1 = var10.useRef;
                var1 = var1.bind(var10)(var27);
                var _closure2_slot7 = var1;
                var9 = var10.useEffect;
                var8 = new Array(5);
                var8[0] = var23;
                var8[1] = var13;
                var8[2] = var6;
                var8[3] = var0;
                var8[4] = var22;
                var1 = function() { // Environment: var32
                    _fun118016: for (var _fun118016_ip = 0;;) switch (_fun118016_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var0 = var0.current;
                            var7 = null;
                            if (!(var7 == var0)) {
                                _fun118016_ip = 45;
                                continue _fun118016
                            }
                        case 18:
                            var1 = _closure2_slot7;
                            var0 = global;
                            var2 = var0.Date;
                            var0 = var2.now;
                            var0 = var0.bind(var2)();
                            var1.current = var0;
                        case 45:
                            var0 = _closure2_slot4;
                            var6 = 'LOADING';
                            var4 = var6;
                            if (var0) {
                                _fun118016_ip = 103;
                                continue _fun118016
                            }
                        case 59:
                            var0 = _closure2_slot3;
                            if (!(var7 == var0)) {
                                _fun118016_ip = 81;
                                continue _fun118016
                            }
                        case 67:
                            var0 = _closure2_slot5;
                            var0 = var7 == var0;
                            var4 = var6;
                            if (var0) {
                                _fun118016_ip = 103;
                                continue _fun118016
                            }
                        case 81:
                            var0 = _closure2_slot5;
                            var1 = var7 != var0;
                            var0 = 'SUCCESS';
                            if (!var1) {
                                _fun118016_ip = 100;
                                continue _fun118016
                            }
                        case 96:
                            var0 = 'FAILED';
                        case 100:
                            var4 = var0;
                        case 103:
                            var0 = _closure2_slot6;
                            var0 = var0.current;
                            if (!(var4 !== var0)) {
                                _fun118016_ip = 304;
                                continue _fun118016
                            }
                        case 119:
                            var0 = _closure2_slot6;
                            var0.current = var4;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot7;
                            var1 = var0.GAME_UPDATE_ARTICLE_LOADED;
                            var0 = {};
                            var8 = _closure2_slot1;
                            var0.game_id = var8;
                            var8 = _closure2_slot0;
                            var0.game_update_id = var8;
                            var0.status = var4;
                            var8 = _closure2_slot7;
                            var8 = var8.current;
                            var0.start_timestamp = var8;
                            var6 = var6 === var4;
                            var4 = null;
                            if (var6) {
                                _fun118016_ip = 233;
                                continue _fun118016
                            }
                        case 216:
                            var8 = global;
                            var9 = var8.Date;
                            var8 = var9.now;
                            var4 = var8.bind(var9)();
                        case 233:
                            var0.end_timestamp = var4;
                            var4 = null;
                            if (var6) {
                                _fun118016_ip = 291;
                                continue _fun118016
                            }
                        case 243:
                            var6 = _closure2_slot7;
                            var6 = var6.current;
                            var6 = var7 == var6;
                            var4 = null;
                            if (var6) {
                                _fun118016_ip = 291;
                                continue _fun118016
                            }
                        case 261:
                            var6 = global;
                            var7 = var6.Date;
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var5 = _closure2_slot7;
                            var5 = var5.current;
                            var4 = var6 - var5;
                        case 291:
                            var0.duration_millis = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 304:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var1, var8);
                var1 = 13;
                var1 = var5[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.bottom;
                var1 = 14;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useErrorToast;
                var1 = {};
                var1.isLoading = var13;
                var1.error = var6;
                var1 = var2.bind(var5)(var1);
                var1 = var27 == var0;
                var18 = undefined;
                if (var1) {
                    _fun118014_ip = 385;
                    continue _fun118014
                }
            case 379:
                var18 = var0.update;
            case 385:
                _closure2_slot8 = var18;
                if (!(var27 != var38)) {
                    _fun118014_ip = 542;
                    continue _fun118014
                }
            case 396:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.isNullOrEmpty;
                var5 = var27 == var38;
                var0 = undefined;
                if (var5) {
                    _fun118014_ip = 437;
                    continue _fun118014
                }
            case 431:
                var0 = var38.iconHash;
            case 437:
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun118014_ip = 542;
                    continue _fun118014
                }
            case 445:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 16;
                var0 = var7[var5];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getGameAssetURL;
                var0 = {};
                var6 = var38.applicationId;
                var0.id = var6;
                var6 = var38.iconHash;
                var0.hash = var6;
                var6 = 160;
                var0.size = var6;
                var6 = _closure1_slot0;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SUPPORTS_WEBP;
                var5 = 'png';
                if (!var6) {
                    _fun118014_ip = 531;
                    continue _fun118014
                }
            case 525:
                var5 = 'webp';
            case 531:
                var0.format = var5;
                var50 = var1.bind(var2)(var0);
                _fun118014_ip = 608;
                continue _fun118014;
            case 542:
                var1 = var27 == var25;
                var0 = undefined;
                if (var1) {
                    _fun118014_ip = 605;
                    continue _fun118014
                }
            case 551:
                var5 = var25.getIconURL;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.SUPPORTS_WEBP;
                var2 = 'png';
                if (!var1) {
                    _fun118014_ip = 596;
                    continue _fun118014
                }
            case 590:
                var2 = 'webp';
            case 596:
                var1 = 160;
                var0 = var5.bind(var25)(var1, var2);
            case 605:
                var50 = var0;
            case 608:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useGameUpdateTime;
                var0 = {};
                if (!(var27 == var4)) {
                    _fun118014_ip = 658;
                    continue _fun118014
                }
            case 640:
                var6 = var27 == var18;
                var5 = undefined;
                if (var6) {
                    _fun118014_ip = 655;
                    continue _fun118014
                }
            case 649:
                var5 = var18.startDate;
            case 655:
                var4 = var5;
            case 658:
                var0.startDate = var4;
                var0 = var1.bind(var2)(var0);
                var39 = var0.formattedStartDate;
                var47 = var0.relativeLabel;
                var48 = var0.labelColor;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var50;
                if (!(var27 == var0)) {
                    _fun118014_ip = 760;
                    continue _fun118014
                }
            case 713:
                var4 = var27 == var18;
                var2 = undefined;
                if (var4) {
                    _fun118014_ip = 757;
                    continue _fun118014
                }
            case 722:
                var5 = var18.images;
                var4 = var27 == var5;
                var2 = undefined;
                if (var4) {
                    _fun118014_ip = 757;
                    continue _fun118014
                }
            case 737:
                var4 = 0;
                var4 = var5[var4];
                var5 = var27 == var4;
                var2 = undefined;
                if (var5) {
                    _fun118014_ip = 757;
                    continue _fun118014
                }
            case 752:
                var2 = var4.uri;
            case 757:
                var0 = var2;
            case 760:
                var0 = var1.bind(var3)(var0);
                var36 = var0.primaryColor;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useOfficialServerInvite;
                var0 = {};
                var5 = var27 == var38;
                var4 = undefined;
                if (var5) {
                    _fun118014_ip = 854;
                    continue _fun118014
                }
            case 808:
                var7 = var38.websites;
                var5 = var27 == var7;
                var4 = undefined;
                if (var5) {
                    _fun118014_ip = 854;
                    continue _fun118014
                }
            case 823:
                var6 = var7.find;
                var5 = function(arg0) { // Environment: var32
                    var0 = arg0;
                    var1 = var0.category;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.IGDBWebsiteCategory;
                    var0 = var0.DISCORD;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var6 = var27 == var5;
                var4 = undefined;
                if (var6) {
                    _fun118014_ip = 854;
                    continue _fun118014
                }
            case 849:
                var4 = var5.url;
            case 854:
                var0.serverInviteUrl = var4;
                var33 = var1.bind(var2)(var0);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 21;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useAnimatedFooter;
                var0 = var0.bind(var2)();
                var8 = var0.progress;
                var9 = var0.handleScroll;
                var2 = var0.handleToggle;
                _closure2_slot9 = var2;
                var29 = var0.officialServerRef;
                var11 = var0.scrollViewRef;
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var18;
                var0 = function() { // Environment: var32
                    _fun118018: for (var _fun118018_ip = 0;;) switch (_fun118018_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var2 = null;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun118018_ip = 28;
                                continue _fun118018
                            }
                        case 18:
                            var3 = _closure2_slot8;
                            var1 = var3.platforms;
                        case 28:
                            if (!(var2 != var1)) {
                                _fun118018_ip = 91;
                                continue _fun118018
                            }
                        case 32:
                            var1 = global;
                            var2 = var1.Set;
                            var0 = _closure2_slot8;
                            var3 = var0.platforms;
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var0
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var4 = var1.bind(var3)(var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = var1;
                            var0 = new var5[var2](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            _fun118018_ip = 119;
                            continue _fun118018;
                        case 91:
                            var1 = global;
                            var1 = var1.Set;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var5 = var2;
                            var1 = new var5[var1](var4);
                            var0 = var1 instanceof Object ? var1 : var2;
                        case 119:
                            return var0;
                    }
                };
                var37 = var5.bind(var6)(var0, var2);
                var5 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var18;
                var0 = function() { // Environment: var32
                    _fun118020: for (var _fun118020_ip = 0;;) switch (_fun118020_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun118020_ip = 44;
                                continue _fun118020
                            }
                        case 13:
                            var0 = _closure2_slot8;
                            var2 = var0.images;
                            var1 = var2.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.uri;
                                var0.uri = var2;
                                var2 = arg1;
                                var0.mediaIndex = var2;
                                var2 = var1.height;
                                var0.height = var2;
                                var1 = var1.width;
                                var0.width = var1;
                                var1 = 'attachment';
                                var0.accessoryType = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun118020_ip = 48;
                            continue _fun118020;
                        case 44:
                            var0 = new Array(0);
                        case 48:
                            return var0;
                    }
                };
                var34 = var5.bind(var6)(var0, var2);
                _closure2_slot10 = var34;
                var5 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var34;
                var2[1] = var22;
                var2[2] = var23;
                var0 = function(arg0) { // Environment: var32
                    var0 = arg0;
                    var4 = var0.ref;
                    var5 = var0.initialIndex;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var2 = var3[var0];
                    var0 = undefined;
                    var9 = var6.bind(var0)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot7;
                    var7 = var2.GAME_UPDATE_ARTICLE_CLICKED;
                    var2 = {};
                    var10 = _closure2_slot1;
                    var2.game_id = var10;
                    var10 = _closure2_slot0;
                    var2.game_update_id = var10;
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var11 = var10.concat;
                    var10 = 'OPEN_MEDIA_VIEWER_INDEX_';
                    var10 = var11.bind(var10)(var5);
                    var2.action = var10;
                    var2 = var8.bind(var9)(var7, var2);
                    var2 = _closure1_slot0;
                    var1 = 22;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openMediaModal;
                    var1 = {
                        'initialSources': null,
                        'initialIndex': null,
                        'analyticsSource': 'GameUpdate',
                        'disableMediaOverlayButton': true,
                        'shareable': false,
                        'isRNModal': true
                    };
                    var6 = _closure2_slot10;
                    var1.initialSources = var6;
                    var1.initialIndex = var5;
                    var4 = var4.current;
                    var1.originViewOrOriginLayout = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var31 = var5.bind(var6)(var0, var2);
                var2 = _closure1_slot10;
                var0 = 23;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'scrollable': true,
                    'startExpanded': true,
                    'handleDisabled': true
                };
                var30 = true;
                var5 = var27 == var33;
                var4 = null;
                if (var5) {
                    _fun118014_ip = 1129;
                    continue _fun118014
                }
            case 1069:
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 24;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.progress = var8;
                var8 = var33.invite;
                var5.invite = var8;
                var8 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.GAME_UPDATE_ARTICLE_CLICKED;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.game_id = var6;
                    var5 = _closure2_slot0;
                    var1.game_update_id = var5;
                    var5 = 'JOIN_SERVER_FLOATING';
                    var1.action = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onJoinPress = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 1129:
                var0.footer = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var21.floatingHandle;
                var4.style = var7;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 25;
                var7 = var15[var12];
                var7 = var14.bind(var3)(var7);
                var8 = var7.ActionSheetHeaderBar;
                var7 = {};
                var16 = var21.tabStyle;
                var7.tabStyle = var16;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.ActionSheetHeaderBarVariants;
                var12 = var12.FLOATING;
                var7.variant = var12;
                var12 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7.onPress = var12;
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                if (var13) {
                    _fun118014_ip = 1268;
                    continue _fun118014
                }
            case 1256:
                var6 = var27 == var18;
                var5 = null;
                if (var6) {
                    _fun118014_ip = 3605;
                    continue _fun118014
                }
            case 1268:
                var6 = var27 == var38;
                var5 = null;
                if (var6) {
                    _fun118014_ip = 3605;
                    continue _fun118014
                }
            case 1280:
                var8 = _closure1_slot8;
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 27;
                var6 = var17[var6];
                var6 = var19.bind(var3)(var6);
                var7 = var6.BottomSheetScrollView;
                var6 = {};
                var12 = var21.scrollView;
                var6.style = var12;
                var6.ref = var11;
                var6.onScroll = var9;
                var9 = {};
                var9.paddingBottom = var10;
                var6.contentContainerStyle = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var21.content;
                var9.style = var12;
                var12 = {};
                var14 = var21.gradientContainer;
                var12.style = var14;
                var14 = 28;
                var14 = var17[var14];
                var14 = var19.bind(var3)(var14);
                var15 = var14.LinearGradient;
                var14 = {};
                var16 = new Array(2);
                var16[0] = var36;
                var24 = 29;
                var24 = var17[var24];
                var35 = var19.bind(var3)(var24);
                var28 = var35.darkenColor;
                var24 = 0.3;
                var24 = var28.bind(var35)(var36, var24);
                var16[1] = var24;
                var14.colors = var16;
                var16 = [0, 1];
                var14.locations = var16;
                var36 = 0;
                var16 = {
                    'x': 0,
                    'y': 1
                };
                var14.start = var16;
                var16 = {
                    'x': 1,
                    'y': 0
                };
                var14.end = var16;
                var16 = var21.gradient;
                var14.style = var16;
                var15 = var8.bind(var3)(var15, var14);
                var14 = new Array(3);
                var14[0] = var15;
                var15 = {};
                var16 = var21.timestampRow;
                var15.style = var16;
                var28 = 30;
                var16 = var17[var28];
                var16 = var19.bind(var3)(var16);
                var24 = var16.Text;
                var16 = {
                    'variant': 'text-xs/semibold',
                    'color': 'content-inventory-overlay-text-secondary'
                };
                var49 = 'text-xs/semibold';
                var35 = 31;
                var40 = var17[var35];
                var40 = var19.bind(var3)(var40);
                var44 = var40.intl;
                var43 = var44.string;
                var45 = _closure1_slot1;
                var41 = 32;
                var40 = var17[var41];
                var40 = var45.bind(var3)(var40);
                var40 = var40.OacAil;
                var40 = var43.bind(var44)(var40);
                var16.children = var40;
                var24 = var8.bind(var3)(var24, var16);
                var16 = new Array(3);
                var16[0] = var24;
                var17 = var17[var28];
                var17 = var19.bind(var3)(var17);
                var19 = var17.Text;
                var17 = {
                    'variant': 'text-xs/semibold',
                    'color': 'content-inventory-overlay-text-secondary'
                };
                var17.children = var39;
                var17 = var8.bind(var3)(var19, var17);
                var16[1] = var17;
                var17 = var27 != var47;
                if (!var17) {
                    _fun118014_ip = 1790;
                    continue _fun118014
                }
            case 1678:
                var40 = _closure1_slot10;
                var24 = _closure1_slot9;
                var19 = {};
                var46 = _closure1_slot8;
                var45 = _closure1_slot0;
                var44 = _closure1_slot2;
                var43 = var44[var28];
                var43 = var45.bind(var3)(var43);
                var51 = var43.Text;
                var43 = {
                    'variant': 'text-xs/semibold',
                    'color': 'content-inventory-overlay-text-secondary',
                    'children': '•'
                };
                var51 = var46.bind(var3)(var51, var43);
                var43 = new Array(2);
                var43[0] = var51;
                var44 = var44[var28];
                var44 = var45.bind(var3)(var44);
                var45 = var44.Text;
                var44 = {};
                var44.variant = var49;
                var44.color = var48;
                var44.children = var47;
                var44 = var46.bind(var3)(var45, var44);
                var43[1] = var44;
                var19.children = var43;
                var17 = var40.bind(var3)(var24, var19);
            case 1790:
                var16[2] = var17;
                var15.children = var16;
                var15 = var11.bind(var3)(var10, var15);
                var14[1] = var15;
                var17 = _closure1_slot10;
                var16 = _closure1_slot5;
                var15 = {};
                var19 = var21.gameHeaderContainer;
                var15.style = var19;
                var40 = _closure1_slot8;
                var24 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var28];
                var19 = var24.bind(var3)(var19);
                var24 = var19.Text;
                var19 = {
                    'variant': 'heading-xl/medium',
                    'color': 'content-inventory-overlay-text-secondary'
                };
                if (!(var27 == var42)) {
                    _fun118014_ip = 1890;
                    continue _fun118014
                }
            case 1872:
                var44 = var27 == var18;
                var43 = undefined;
                if (var44) {
                    _fun118014_ip = 1887;
                    continue _fun118014
                }
            case 1881:
                var43 = var18.updateTitle;
            case 1887:
                var42 = var43;
            case 1890:
                var19.children = var42;
                var24 = var40.bind(var3)(var24, var19);
                var19 = new Array(2);
                var19[0] = var24;
                var42 = _closure1_slot10;
                var40 = _closure1_slot5;
                var24 = {};
                var43 = var21.gameHeaderRow;
                var24.style = var43;
                var44 = var27 != var50;
                if (!var44) {
                    _fun118014_ip = 2081;
                    continue _fun118014
                }
            case 1938:
                var46 = _closure1_slot8;
                var45 = _closure1_slot5;
                var43 = {};
                var47 = var21.gameIconContainer;
                var43.style = var47;
                var48 = _closure1_slot4;
                var47 = {};
                var49 = {};
                var49.uri = var50;
                var47.source = var49;
                var49 = var21.gameIcon;
                var47.style = var49;
                var50 = _closure1_slot0;
                var49 = _closure1_slot2;
                var51 = var49[var35];
                var51 = var50.bind(var3)(var51);
                var52 = var51.intl;
                var51 = var52.formatToPlainString;
                var49 = var49[var35];
                var49 = var50.bind(var3)(var49);
                var49 = var49.t;
                var50 = var49["nh+jWk"];
                var49 = {};
                var54 = var27 == var25;
                var53 = undefined;
                if (var54) {
                    _fun118014_ip = 2049;
                    continue _fun118014
                }
            case 2044:
                var53 = var25.name;
            case 2049:
                var49.game = var53;
                var49 = var51.bind(var52)(var50, var49);
                var47.alt = var49;
                var47 = var46.bind(var3)(var48, var47);
                var43.children = var47;
                var44 = var46.bind(var3)(var45, var43);
            case 2081:
                var43 = new Array(2);
                var43[0] = var44;
                var46 = _closure1_slot8;
                var45 = _closure1_slot0;
                var44 = _closure1_slot2;
                var44 = var44[var28];
                var44 = var45.bind(var3)(var44);
                var45 = var44.Text;
                var44 = {
                    'variant': 'text-md/medium',
                    'color': 'content-inventory-overlay-text-secondary'
                };
                var48 = var27 == var25;
                var47 = undefined;
                if (var48) {
                    _fun118014_ip = 2143;
                    continue _fun118014
                }
            case 2138:
                var47 = var25.name;
            case 2143:
                var44.children = var47;
                var44 = var46.bind(var3)(var45, var44);
                var43[1] = var44;
                var24.children = var43;
                var24 = var42.bind(var3)(var40, var24);
                var19[1] = var24;
                var15.children = var19;
                var15 = var17.bind(var3)(var16, var15);
                var14[2] = var15;
                var12.children = var14;
                var14 = var11.bind(var3)(var10, var12);
                var12 = new Array(5);
                var12[0] = var14;
                if (var13) {
                    _fun118014_ip = 2317;
                    continue _fun118014
                }
            case 2206:
                var14 = var34.length;
                var14 = var14 > var36;
                if (!var14) {
                    _fun118014_ip = 2315;
                    continue _fun118014
                }
            case 2218:
                var17 = _closure1_slot8;
                var16 = _closure1_slot5;
                var15 = {};
                var24 = _closure1_slot0;
                var40 = _closure1_slot2;
                var19 = 34;
                var19 = var40[var19];
                var19 = var24.bind(var3)(var19);
                var24 = var19.GravityAttachmentMediaMosaic;
                var19 = {};
                var19.sources = var34;
                var19.handlePressMedia = var31;
                var19.visible = var30;
                var30 = global;
                var31 = var30.Math;
                var30 = var31.max;
                var26 = var26 - var41;
                var26 = var30.bind(var31)(var26, var36);
                var19.widthOverride = var26;
                var19 = var17.bind(var3)(var24, var19);
                var15.children = var19;
                var14 = var17.bind(var3)(var16, var15);
            case 2315:
                _fun118014_ip = 2355;
                continue _fun118014;
            case 2317:
                var17 = _closure1_slot8;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 33;
                var15 = var19[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.GameUpdateImagePlaceholder;
                var15 = {};
                var14 = var17.bind(var3)(var16, var15);
            case 2355:
                var12[1] = var14;
                var16 = _closure1_slot8;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                if (var13) {
                    _fun118014_ip = 2445;
                    continue _fun118014
                }
            case 2374:
                var13 = 35;
                var13 = var17[var13];
                var13 = var15.bind(var3)(var13);
                var14 = var13.TruncatedText;
                var13 = {
                    'variant': 'text-md/normal',
                    'lineClamp': 12
                };
                var19 = function arg0() {
                    _fun118025: for (var _fun118025_ip = 0;;) switch (_fun118025_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 12;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot7;
                            var2 = var1.GAME_UPDATE_ARTICLE_CLICKED;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var1.game_id = var6;
                            var5 = _closure2_slot0;
                            var1.game_update_id = var5;
                            var5 = 'TOGGLE_SHOW_MORE';
                            var6 = arg0;
                            if (!var6) {
                                _fun118025_ip = 89;
                                continue _fun118025
                            }
                        case 83:
                            var5 = 'TOGGLE_SHOW_LESS';
                        case 89:
                            var1.action = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var13.onToggle = var19;
                var24 = var27 == var18;
                var19 = undefined;
                if (var24) {
                    _fun118014_ip = 2433;
                    continue _fun118014
                }
            case 2427:
                var19 = var18.updateDescription;
            case 2433:
                var13.children = var19;
                var13 = var16.bind(var3)(var14, var13);
                _fun118014_ip = 2471;
                continue _fun118014;
            case 2445:
                var14 = 33;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.GameUpdateTextPlaceholder;
                var14 = {};
                var13 = var16.bind(var3)(var15, var14);
            case 2471:
                var12[2] = var13;
                var14 = var27 == var18;
                var13 = undefined;
                if (var14) {
                    _fun118014_ip = 2504;
                    continue _fun118014
                }
            case 2484:
                var14 = var18.tags;
                var15 = var27 == var14;
                var13 = undefined;
                if (var15) {
                    _fun118014_ip = 2504;
                    continue _fun118014
                }
            case 2499:
                var13 = var14.length;
            case 2504:
                var13 = var27 != var13;
                if (!var13) {
                    _fun118014_ip = 2526;
                    continue _fun118014
                }
            case 2511:
                var14 = var18.tags;
                var14 = var14.length;
                var13 = var14 > var36;
            case 2526:
                if (!var13) {
                    _fun118014_ip = 2591;
                    continue _fun118014
                }
            case 2529:
                var16 = _closure1_slot8;
                var15 = _closure1_slot5;
                var14 = {};
                var17 = var21.tagsContainer;
                var14.style = var17;
                var19 = var27 == var18;
                var17 = undefined;
                if (var19) {
                    _fun118014_ip = 2581;
                    continue _fun118014
                }
            case 2558:
                var24 = var18.tags;
                var19 = var24.map;
                var18 = function(arg0) { // Environment: var32
                    var4 = arg0;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.tagWrapper;
                    var1.style = var5;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 30;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var7 = 'text-xs/medium';
                    var5.variant = var7;
                    var5.children = var4;
                    var5 = var3.bind(var0)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var17 = var19.bind(var24)(var18);
            case 2581:
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 2591:
                var12[3] = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot5;
                var13 = {};
                var16 = var38.publishers;
                var16 = var16.length;
                var17 = var16 > var36;
                if (!var17) {
                    _fun118014_ip = 2846;
                    continue _fun118014
                }
            case 2626:
                var19 = _closure1_slot10;
                var18 = _closure1_slot5;
                var16 = {};
                var24 = var21.infoRow;
                var16.style = var24;
                var30 = _closure1_slot8;
                var34 = _closure1_slot0;
                var31 = _closure1_slot2;
                var24 = var31[var28];
                var24 = var34.bind(var3)(var24);
                var26 = var24.Text;
                var24 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var40 = var31[var35];
                var40 = var34.bind(var3)(var40);
                var43 = var40.intl;
                var42 = var43.string;
                var40 = var31[var35];
                var40 = var34.bind(var3)(var40);
                var40 = var40.t;
                var40 = var40["4Byy/G"];
                var40 = var42.bind(var43)(var40);
                var24.children = var40;
                var26 = var30.bind(var3)(var26, var24);
                var24 = new Array(2);
                var24[0] = var26;
                var26 = {};
                var40 = var21.publishersContainer;
                var26.style = var40;
                var31 = var31[var28];
                var31 = var34.bind(var3)(var31);
                var34 = var31.Text;
                var31 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-strong'
                };
                var42 = var38.publishers;
                var40 = var42.join;
                var38 = ', ';
                var38 = var40.bind(var42)(var38);
                var31.children = var38;
                var31 = var30.bind(var3)(var34, var31);
                var26.children = var31;
                var26 = var30.bind(var3)(var18, var26);
                var24[1] = var26;
                var16.children = var24;
                var17 = var19.bind(var3)(var18, var16);
            case 2846:
                var16 = new Array(5);
                var16[0] = var17;
                var24 = '';
                var17 = var24 !== var39;
                if (!var17) {
                    _fun118014_ip = 3041;
                    continue _fun118014
                }
            case 2868:
                var26 = _closure1_slot10;
                var19 = _closure1_slot5;
                var18 = {};
                var30 = var21.infoRow;
                var18.style = var30;
                var38 = _closure1_slot8;
                var34 = _closure1_slot0;
                var31 = _closure1_slot2;
                var30 = var31[var28];
                var30 = var34.bind(var3)(var30);
                var40 = var30.Text;
                var30 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var42 = var31[var35];
                var42 = var34.bind(var3)(var42);
                var43 = var42.intl;
                var42 = var43.string;
                var44 = _closure1_slot1;
                var41 = var31[var41];
                var41 = var44.bind(var3)(var41);
                var41 = var41.OacAil;
                var41 = var42.bind(var43)(var41);
                var30.children = var41;
                var40 = var38.bind(var3)(var40, var30);
                var30 = new Array(2);
                var30[0] = var40;
                var31 = var31[var28];
                var31 = var34.bind(var3)(var31);
                var34 = var31.Text;
                var31 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-strong'
                };
                var31.children = var39;
                var31 = var38.bind(var3)(var34, var31);
                var30[1] = var31;
                var18.children = var30;
                var17 = var26.bind(var3)(var19, var18);
            case 3041:
                var16[1] = var17;
                var17 = var37.size;
                var17 = var17 > var36;
                if (!var17) {
                    _fun118014_ip = 3253;
                    continue _fun118014
                }
            case 3060:
                var26 = _closure1_slot10;
                var19 = _closure1_slot5;
                var18 = {};
                var30 = var21.infoRow;
                var18.style = var30;
                var34 = _closure1_slot8;
                var41 = _closure1_slot0;
                var38 = _closure1_slot2;
                var30 = var38[var28];
                var30 = var41.bind(var3)(var30);
                var31 = var30.Text;
                var30 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var39 = var38[var35];
                var39 = var41.bind(var3)(var39);
                var40 = var39.intl;
                var39 = var40.string;
                var38 = var38[var35];
                var38 = var41.bind(var3)(var38);
                var38 = var38.t;
                var38 = var38.PNqxNe;
                var38 = var39.bind(var40)(var38);
                var30.children = var38;
                var31 = var34.bind(var3)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var31 = {};
                var38 = var21.platformsContainer;
                var31.style = var38;
                var38 = new Array(0);
                var57 = var38;
                var56 = var37;
                var55 = 0;
                var36 = arraySpread(var57, var56, var55);
                var37 = var38.map;
                var36 = function(arg0) { // Environment: var32
                    var4 = arg0;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 36;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.GameUpdatePlatformIcon;
                    var0 = {};
                    var0.platform = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var36 = var37.bind(var38)(var36);
                var31.children = var36;
                var31 = var34.bind(var3)(var19, var31);
                var30[1] = var31;
                var18.children = var30;
                var17 = var26.bind(var3)(var19, var18);
            case 3253:
                var16[2] = var17;
                var17 = var27 != var33;
                if (!var17) {
                    _fun118014_ip = 3458;
                    continue _fun118014
                }
            case 3267:
                var26 = _closure1_slot10;
                var19 = _closure1_slot5;
                var18 = {};
                var30 = var21.officialServerInfoRow;
                var18.style = var30;
                var18.ref = var29;
                var31 = _closure1_slot8;
                var30 = _closure1_slot0;
                var34 = _closure1_slot2;
                var28 = var34[var28];
                var28 = var30.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var36 = var34[var35];
                var36 = var30.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.string;
                var35 = var34[var35];
                var35 = var30.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35.kBDZSL;
                var35 = var36.bind(var37)(var35);
                var28.children = var35;
                var29 = var31.bind(var3)(var29, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = 37;
                var29 = var34[var29];
                var29 = var30.bind(var3)(var29);
                var30 = var29.GameUpdateServerInvite;
                var29 = {};
                var33 = var33.invite;
                var29.invite = var33;
                var32 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.GAME_UPDATE_ARTICLE_CLICKED;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.game_id = var6;
                    var5 = _closure2_slot0;
                    var1.game_update_id = var5;
                    var5 = 'JOIN_SERVER_FULL';
                    var1.action = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var29.onJoinPress = var32;
                var29 = var31.bind(var3)(var30, var29);
                var28[1] = var29;
                var18.children = var28;
                var17 = var26.bind(var3)(var19, var18);
            case 3458:
                var16[3] = var17;
                var19 = _closure1_slot8;
                var18 = _closure1_slot5;
                var17 = {};
                var21 = var21.infoRow;
                var17.style = var21;
                var21 = _closure1_slot0;
                var26 = _closure1_slot2;
                var20 = 38;
                var20 = var26[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.GameUpdateFeedbackModule;
                var20 = {};
                var28 = var27 == var25;
                var26 = undefined;
                if (var28) {
                    _fun118014_ip = 3524;
                    continue _fun118014
                }
            case 3519:
                var26 = var25.name;
            case 3524:
                var26 = var27 == var26;
                if (var26) {
                    _fun118014_ip = 3536;
                    continue _fun118014
                }
            case 3531:
                var24 = var25.name;
            case 3536:
                var20.gameName = var24;
                var20.gameUpdateId = var23;
                var20.gameId = var22;
                var20 = var19.bind(var3)(var21, var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[4] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[4] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 3605:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4671, 660, 33, 1297, 671, 6879, 7837, 566, 1464, 15043, 795, 1568, 15046, 1607, 1417, 15047, 6838, 15048, 15049, 15050, 8854, 4931, 15051, 5202, 3278, 4933, 4098, 3208, 3941, 1234, 2532, 15052, 13573, 15053, 15054, 15059, 15060, 2]);