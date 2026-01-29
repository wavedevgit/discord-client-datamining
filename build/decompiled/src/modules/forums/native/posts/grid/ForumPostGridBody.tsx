// modules/forums/native/posts/grid/ForumPostGridBody.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: GIFIcon, environment: var1
        var1 = _closure1_slot9;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 6;
        var0 = var7[var5];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.Sizes;
        var5 = var5.CUSTOM;
        var0.size = var5;
        var5 = 7;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var0.source = var5;
        var5 = true;
        var0.disableColor = var5;
        var4 = var4.gifIcon;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: PlayIcon, environment: var1
        var3 = _closure1_slot7;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 6;
        var0 = var6[var4];
        var2 = undefined;
        var1 = var5.bind(var2)(var0);
        var0 = {};
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.Sizes;
        var4 = var4.SMALL_20;
        var0.size = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var0.source = var4;
        var4 = true;
        var0.disableColor = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: ExtraMediaIcon, environment: var1
        var0 = arg0;
        var10 = var0.extraMediaCount;
        var0 = _closure1_slot9;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var8.extraMediaCountContainer;
        var0.style = var4;
        var7 = _closure1_slot7;
        var12 = _closure1_slot1;
        var9 = _closure1_slot2;
        var11 = 6;
        var4 = var9[var11];
        var6 = var12.bind(var3)(var4);
        var4 = {};
        var13 = 9;
        var13 = var9[var13];
        var13 = var12.bind(var3)(var13);
        var4.source = var13;
        var13 = var8.icon;
        var13 = var13.color;
        var4.color = var13;
        var11 = var9[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.Sizes;
        var11 = var11.REFRESH_SMALL_16;
        var4.size = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var5 = 10;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'lineClamp': 1,
            'variant': 'text-xs/normal',
            'color': 'text-default'
        };
        var8 = var8.extraMediaCount;
        var5.style = var8;
        var8 = global;
        var8 = var8.HermesInternal;
        var9 = var8.concat;
        var8 = '+';
        var8 = var9.bind(var8)(var10);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: MediaGridColumn, environment: var1
        var0 = arg0;
        var6 = var0.column;
        var0 = var0.thread;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot9;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var _closure2_slot1 = var5;
        var2 = var6.filter;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 11;
        var1 = var8[var1];
        var1 = var7.bind(var3)(var1);
        var1 = var1.isNotNullish;
        var6 = var2.bind(var6)(var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.column;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun89885: for (var _fun89885_ip = 0;;) switch (_fun89885_ip) {
                case 0:
                    var10 = arg0;
                    var8 = arg1;
                    var4 = _closure1_slot8;
                    var1 = _closure1_slot4;
                    var3 = var1.Fragment;
                    var2 = {};
                    var1 = 0;
                    var1 = var8 > var1;
                    if (!var1) {
                        _fun89885_ip = 69;
                        continue _fun89885
                    }
                case 34:
                    var9 = _closure1_slot7;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.rowSpacer;
                    var6.style = var5;
                    var5 = undefined;
                    var1 = var9.bind(var5)(var7, var6);
                case 69:
                    var5 = new Array(2);
                    var5[0] = var1;
                    var9 = _closure1_slot7;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var6.bind(var1)(var0);
                    var7 = var0.ForumPostGridMedia;
                    var6 = {};
                    var0 = _closure2_slot0;
                    var6.channel = var0;
                    var11 = var10.media;
                    var6.media = var11;
                    var11 = var10.targetWidth;
                    var6.targetWidth = var11;
                    var10 = var10.targetHeight;
                    var6.targetHeight = var10;
                    var6 = var9.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2.children = var5;
                    var7 = var0.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = '-';
                    var0 = var6.bind(var5)(var7, var0, var8);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.useWindowDimensions;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 20,
        'width': 33,
        'backgroundColor': 'black',
        'borderRadius': null,
        'resizeMode': 'cover'
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.gifIcon = var8;
    var8 = {
        'position': 'relative',
        'backgroundColor': null,
        'height': 225
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {};
    var12 = 192;
    var8.height = var12;
    var3.wideAspectRatioContainer = var8;
    var8 = {};
    var14 = 6;
    var8.paddingLeft = var14;
    var3.mediaIconContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'position': 'absolute',
        'top': 4,
        'left': 4
    };
    var3.headerLeftContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'position': 'absolute',
        'bottom': 4,
        'left': 4,
        'alignItems': 'center',
        'justifyContent': 'flex-start'
    };
    var3.footerLeftContainer = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 4,
        'right': 4,
        'alignItems': 'center',
        'justifyContent': 'flex-start'
    };
    var3.footerRightContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'height': 24,
        'paddingHorizontal': 8,
        'borderRadius': 20
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var3.extraMediaCountContainer = var8;
    var8 = {};
    var8.marginLeft = var13;
    var3.extraMediaCount = var8;
    var8 = {
        'height': 225,
        'flexDirection': 'row',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var3.grid = var8;
    var8 = {};
    var8.height = var12;
    var3.wideAspectRatioGrid = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'column'
    };
    var3.column = var8;
    var8 = {};
    var8.flex = var11;
    var3.cell = var8;
    var8 = {
        'flex': 0,
        'width': 2,
        'height': '100%'
    };
    var3.columnSpacer = var8;
    var8 = {
        'flex': 0,
        'height': 2,
        'width': '100%'
    };
    var3.rowSpacer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_SUBTLE;
    var8.color = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = new Array(2);
    var6 = [0, 3];
    var3[0] = var6;
    var6 = [1, 2];
    var3[1] = var6;
    var _closure1_slot10 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/grid/ForumPostGridBody.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ForumPostGridBody, environment: var1
        _fun89886: for (var _fun89886_ip = 0;;) switch (_fun89886_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.thread;
                var _closure2_slot0 = var2;
                var19 = var0.hasUnreads;
                var0 = var0.media;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot9;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var _closure2_slot2 = var10;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useSomeAppliedTags;
                var5 = 2;
                var4 = var1.bind(var4)(var2, var5);
                var1 = _closure1_slot3;
                var4 = var1.bind(var3)(var4, var5);
                var5 = 0;
                var21 = var4[var5];
                var1 = 1;
                var20 = var4[var1];
                var1 = var21.length;
                var16 = var1 > var5;
                var1 = global;
                var6 = var1.Math;
                var4 = var6.max;
                var7 = var0.length;
                var1 = 4;
                var1 = var7 - var1;
                var12 = var4.bind(var6)(var5, var1);
                var1 = var2.isMediaPost;
                var17 = var1.bind(var2)();
                var1 = function(arg0, arg1) { // Original name: useMediaGridLayout, environment: var8
                    var2 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var4;
                    var5 = _closure1_slot6;
                    var3 = undefined;
                    var3 = var5.bind(var3)();
                    var6 = var3.width;
                    var _closure3_slot2 = var6;
                    var7 = _closure1_slot4;
                    var5 = var7.useMemo;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var0
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.min;
                        var1 = _closure3_slot0;
                        var2 = var1.length;
                        var1 = 2;
                        var4 = var3.bind(var4)(var2, var1);
                        var3 = _closure1_slot10;
                        var2 = var3.slice;
                        var1 = 0;
                        var3 = var2.bind(var3)(var1, var4);
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.filter;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 11;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.isNotNullish;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.length;
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = var5.bind(var7)(var2, var3);
                    var _closure3_slot3 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(3);
                    var1[0] = var6;
                    var1[1] = var5;
                    var1[2] = var4;
                    var0 = function() { // Environment: var0
                        _fun89892: for (var _fun89892_ip = 0;;) switch (_fun89892_ip) {
                            case 0:
                                var3 = _closure3_slot1;
                                var2 = 225;
                                if (!var3) {
                                    _fun89892_ip = 18;
                                    continue _fun89892
                                }
                            case 15:
                                var2 = 192;
                            case 18:
                                var _closure4_slot0 = var2;
                                var2 = _closure3_slot3;
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = arg0;
                                    var3 = var2.filter;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 11;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4);
                                    var1 = var1.isNotNullish;
                                    var1 = var3.bind(var2)(var1);
                                    var1 = var1.length;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure3_slot3;
                                    var1 = var1.length;
                                    var _closure5_slot1 = var1;
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun89894: for (var _fun89894_ip = 0;;) switch (_fun89894_ip) {
                                            case 0:
                                                var1 = _closure3_slot2;
                                                var0 = 48;
                                                var0 = var1 - var0;
                                                var6 = _closure5_slot1;
                                                var3 = var0 / var6;
                                                var1 = 1;
                                                var0 = var6 - var1;
                                                var5 = 2;
                                                var0 = var5 * var0;
                                                var0 = var0 / var6;
                                                var3 = var3 - var0;
                                                var0 = {};
                                                var6 = arg0;
                                                var0.media = var6;
                                                var0.targetWidth = var3;
                                                var2 = _closure3_slot1;
                                                if (!var2) {
                                                    _fun89894_ip = 77;
                                                    continue _fun89894
                                                }
                                            case 69:
                                                var2 = _closure5_slot1;
                                                if (!(!(var2 < var5))) {
                                                    _fun89894_ip = 110;
                                                    continue _fun89894
                                                }
                                            case 77:
                                                var2 = _closure4_slot0;
                                                var4 = _closure5_slot0;
                                                var2 = var2 / var4;
                                                var1 = var4 - var1;
                                                var1 = var5 * var1;
                                                var1 = var1 / var4;
                                                var1 = var2 - var1;
                                                _fun89894_ip = 124;
                                                continue _fun89894;
                                            case 110:
                                                var2 = 1.7777777777777777;
                                                var1 = var3 / var2;
                                            case 124:
                                                var0.targetHeight = var1;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var13 = var1.bind(var3)(var0, var17);
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.messageContainsGifOrVideo;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var14 = var0.containsVideo;
                var15 = var0.containsGif;
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var10.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var17;
                if (!var17) {
                    _fun89886_ip = 246;
                    continue _fun89886
                }
            case 240:
                var6 = var10.wideAspectRatioContainer;
            case 246:
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var4 = {};
                var18 = var10.grid;
                var11 = new Array(2);
                var11[0] = var18;
                if (!var17) {
                    _fun89886_ip = 287;
                    continue _fun89886
                }
            case 281:
                var17 = var10.wideAspectRatioGrid;
            case 287:
                var11[1] = var17;
                var4.style = var11;
                var11 = var13.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun89896: for (var _fun89896_ip = 0;;) switch (_fun89896_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot8;
                            var0 = _closure1_slot4;
                            var3 = var0.Fragment;
                            var2 = {};
                            var0 = 0;
                            var5 = var7 > var0;
                            if (!var5) {
                                _fun89896_ip = 69;
                                continue _fun89896
                            }
                        case 34:
                            var10 = _closure1_slot7;
                            var9 = _closure1_slot5;
                            var6 = {};
                            var0 = _closure2_slot2;
                            var0 = var0.columnSpacer;
                            var6.style = var0;
                            var0 = undefined;
                            var5 = var10.bind(var0)(var9, var6);
                        case 69:
                            var0 = new Array(2);
                            var0[0] = var5;
                            var9 = _closure1_slot7;
                            var6 = _closure1_slot14;
                            var5 = {};
                            var5.column = var8;
                            var1 = _closure2_slot0;
                            var5.thread = var1;
                            var1 = undefined;
                            var5 = var9.bind(var1)(var6, var5);
                            var0[1] = var5;
                            var2.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '';
                            var0 = '-';
                            var0 = var6.bind(var5)(var8, var0, var7);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var8 = var11.bind(var13)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = var16;
                if (!var6) {
                    _fun89886_ip = 425;
                    continue _fun89886
                }
            case 336:
                var11 = _closure1_slot7;
                var8 = _closure1_slot5;
                var7 = {};
                var13 = var10.footerLeftContainer;
                var7.style = var13;
                var13 = var16;
                if (!var16) {
                    _fun89886_ip = 415;
                    continue _fun89886
                }
            case 362:
                var18 = _closure1_slot7;
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 15;
                var16 = var22[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.ForumPostAppliedTagPills;
                var16 = {};
                var16.appliedTags = var21;
                var16.additionalTagsCount = var20;
                var16.hasUnreads = var19;
                var13 = var18.bind(var3)(var17, var16);
            case 415:
                var7.children = var13;
                var6 = var11.bind(var3)(var8, var7);
            case 425:
                var4[1] = var6;
                var6 = var15;
                if (var15) {
                    _fun89886_ip = 438;
                    continue _fun89886
                }
            case 435:
                var6 = var14;
            case 438:
                if (!var6) {
                    _fun89886_ip = 584;
                    continue _fun89886
                }
            case 444:
                var11 = _closure1_slot8;
                var8 = _closure1_slot5;
                var7 = {};
                var13 = var10.headerLeftContainer;
                var7.style = var13;
                if (!var15) {
                    _fun89886_ip = 513;
                    continue _fun89886
                }
            case 467:
                var17 = _closure1_slot7;
                var16 = _closure1_slot5;
                var13 = {};
                var18 = var10.mediaIconContainer;
                var13.style = var18;
                var20 = _closure1_slot7;
                var19 = _closure1_slot11;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var13.children = var18;
                var15 = var17.bind(var3)(var16, var13);
            case 513:
                var13 = new Array(2);
                var13[0] = var15;
                if (!var14) {
                    _fun89886_ip = 570;
                    continue _fun89886
                }
            case 524:
                var17 = _closure1_slot7;
                var16 = _closure1_slot5;
                var15 = {};
                var18 = var10.mediaIconContainer;
                var15.style = var18;
                var20 = _closure1_slot7;
                var19 = _closure1_slot12;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 570:
                var13[1] = var14;
                var7.children = var13;
                var6 = var11.bind(var3)(var8, var7);
            case 584:
                var4[2] = var6;
                var5 = var5 !== var12;
                if (!var5) {
                    _fun89886_ip = 646;
                    continue _fun89886
                }
            case 595:
                var8 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var10.footerRightContainer;
                var6.style = var10;
                var11 = _closure1_slot7;
                var10 = _closure1_slot13;
                var9 = {};
                var9.extraMediaCount = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 646:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 48;
    var2.GRID_HORIZONTAL_PADDING = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4039, 11621, 11622, 9558, 3895, 1304, 11623, 8859, 8830, 11627, 2]);