// modules/media_viewer/native/components/MediaViewerThumbnails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot5 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.THUMBNAIL_MARGIN;
    var10 = var3.THUMBNAIL_HEIGHT;
    var3 = var3.THUMBNAIL_WIDTH_MARGIN;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Original name: ObscuredView, environment: var1
        _fun72998: for (var _fun72998_ip = 0;;) switch (_fun72998_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.source;
                var5 = var0.index;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var0 = var3.useMediaItemSpoilerState;
                var5 = var0.bind(var3)(var5);
                var3 = _closure1_slot3;
                var0 = 2;
                var5 = var3.bind(var4)(var5, var0);
                var0 = 0;
                var3 = var5[var0];
                var0 = 1;
                var9 = var5[var0];
                var0 = 6;
                var0 = var7[var0];
                var5 = var2.bind(var4)(var0);
                var2 = var5.useToken;
                var6 = _closure1_slot1;
                var0 = 7;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.colors;
                var0 = var0.SPOILER_HIDDEN_BACKGROUND;
                var7 = var2.bind(var5)(var0);
                var0 = null;
                if (!var3) {
                    _fun72998_ip = 299;
                    continue _fun72998
                }
            case 133:
                var3 = var1.spoiler;
                if (var3) {
                    _fun72998_ip = 156;
                    continue _fun72998
                }
            case 142:
                var1 = var1.obscure;
                var0 = null;
                if (!var1) {
                    _fun72998_ip = 299;
                    continue _fun72998
                }
            case 156:
                var3 = _closure1_slot8;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var5 = _closure1_slot6;
                var10 = var5.absoluteFill;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var1.style = var5;
                var5 = 9;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var10 = _closure1_slot0;
                var9 = 10;
                var9 = var11[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.isAndroid;
                var10 = var9.bind(var10)();
                var9 = 'light';
                if (!var10) {
                    _fun72998_ip = 259;
                    continue _fun72998
                }
            case 255:
                var9 = 'dark';
            case 259:
                var5.blurTheme = var9;
                var8 = _closure1_slot6;
                var8 = var8.absoluteFill;
                var5.style = var8;
                var5.android_fallbackColor = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 299:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var6 = var8.createAnimatedComponent;
    var3 = 12;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var6.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var12 = 60;
    var9.height = var12;
    var3.containerPortrait = var9;
    var9 = {
        'overflow': 'hidden',
        'marginHorizontal': null,
        'borderRadius': 2
    };
    var9.marginHorizontal = var11;
    var3.thumbnailButtonPortrait = var9;
    var9 = {};
    var9.height = var10;
    var10 = '100%';
    var9.width = var10;
    var3.thumbnailImagePortrait = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun72999: for (var _fun72999_ip = 0;;) switch (_fun72999_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.source;
                var19 = var1.numSources;
                var15 = var1.selectedIndex;
                var11 = var1.index;
                var _closure2_slot0 = var11;
                var6 = var1.onSelect;
                var _closure2_slot1 = var6;
                var1 = var1.useThumbnailStyle;
                var2 = _closure1_slot12;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var14 = global;
                var5 = var14.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var4);
                var10 = var4;
                if (!var2) {
                    _fun72999_ip = 90;
                    continue _fun72999
                }
            case 84:
                var2 = 0;
                var10 = var4[var2];
            case 90:
                var5 = var1.bind(var3)(var10, var11);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 8;
                var0 = var13[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var6 = var12.thumbnailButtonPortrait;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot5;
                var4 = {
                    'needsOffscreenAlphaCompositing': true,
                    'renderToHardwareTextureAndroid': true,
                    'accessibilityRole': 'imagebutton',
                    'accessibilityLabel': null,
                    'accessibilityHint': 'Double tap to focus'
                };
                var16 = 1;
                var18 = var11 + var16;
                var14 = var14.HermesInternal;
                var17 = var14.concat;
                var16 = 'Thumbnail preview, ';
                var14 = ' of ';
                var14 = var17.bind(var16)(var18, var14, var19);
                var4.accessibilityLabel = var14;
                var14 = {};
                var15 = var15 === var11;
                var14.selected = var15;
                var4.accessibilityState = var14;
                var4.onPress = var7;
                var7 = 14;
                var7 = var13[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var12 = var12.thumbnailImagePortrait;
                var7.style = var12;
                var13 = var10.thumbnail;
                var14 = null;
                var12 = var10;
                var10 = var12;
                if (!(var14 != var13)) {
                    _fun72999_ip = 308;
                    continue _fun72999
                }
            case 305:
                var10 = var13;
            case 308:
                var7.source = var10;
                var10 = false;
                var7.enableAnimation = var10;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot8;
                var9 = _closure1_slot10;
                var8 = {};
                var8.source = var12;
                var8.index = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaViewerThumbnails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MediaViewerThumbnails, environment: var1
        var0 = arg0;
        var26 = var0.syncer;
        var2 = _closure1_slot12;
        var3 = undefined;
        var18 = var2.bind(var3)();
        var4 = var26.sources;
        var _closure2_slot0 = var4;
        var9 = var26.useThumbnailsProps;
        var21 = var26.index;
        var _closure2_slot1 = var21;
        var8 = var26.onEndReached;
        var7 = var26.onEndReachedThreshold;
        var5 = var26.variableWidthThumbnailsEnabled;
        var _closure2_slot2 = var5;
        var17 = var26.thumbnailScrollPositions;
        var _closure2_slot3 = var17;
        var6 = _closure1_slot7;
        var2 = var4.length;
        var25 = 1;
        var2 = var2 - var25;
        var10 = var9.bind(var3)(var6, var2);
        var19 = var10.ref;
        var12 = var10.headerBufferSize;
        var9 = var10.headerBufferStyle;
        var _closure2_slot4 = var9;
        var11 = var10.footerBufferSize;
        var2 = var10.footerBufferStyle;
        var _closure2_slot5 = var2;
        var23 = var10.scrollEnabled;
        var _closure2_slot6 = var23;
        var14 = var10.onScroll;
        var24 = var10.onSelect;
        var _closure2_slot7 = var24;
        var13 = var10.useThumbnailStyle;
        var _closure2_slot8 = var13;
        var6 = var10.screenWidth;
        var16 = var10.itemSize;
        var20 = _closure1_slot4;
        var15 = var20.useMemo;
        var10 = new Array(2);
        var10[0] = var17;
        var10[1] = var5;
        var5 = function() { // Environment: var1
            _fun73002: for (var _fun73002_ip = 0;;) switch (_fun73002_ip) {
                case 0:
                    var0 = new Array(0);
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    if (!var1) {
                        _fun73002_ip = 90;
                        continue _fun73002
                    }
                case 28:
                    var1 = _closure2_slot2;
                    var5 = var0.push;
                    if (var1) {
                        _fun73002_ip = 55;
                        continue _fun73002
                    }
                case 40:
                    var1 = _closure1_slot7;
                    var1 = var3 * var1;
                    var1 = var5.bind(var0)(var1);
                    _fun73002_ip = 74;
                    continue _fun73002;
                case 55:
                    var1 = _closure2_slot3;
                    var1 = var1[var3];
                    var1 = var1.scrollStart;
                    var1 = var5.bind(var0)(var1);
                case 74:
                    var3 = var3 + 1;
                    var1 = _closure2_slot3;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun73002_ip = 28;
                        continue _fun73002
                    }
                case 90:
                    return var0;
            }
        };
        var5 = var15.bind(var20)(var5, var10);
        var10 = _closure1_slot0;
        var17 = _closure1_slot2;
        var15 = 15;
        var15 = var17[var15];
        var22 = var10.bind(var3)(var15);
        var15 = var22.useSelectedMediaSource;
        var22 = var15.bind(var22)(var26);
        var15 = _closure1_slot3;
        var22 = var15.bind(var3)(var22, var25);
        var15 = 0;
        var25 = var22[var15];
        var _closure2_slot9 = var25;
        var22 = var20.useCallback;
        var15 = new Array(4);
        var15[0] = var4;
        var15[1] = var25;
        var15[2] = var24;
        var15[3] = var13;
        var13 = function(arg0, arg1) { // Environment: var1
            var5 = arg1;
            var3 = _closure1_slot8;
            var2 = _closure1_slot13;
            var1 = {};
            var1.index = var5;
            var4 = _closure2_slot0;
            var5 = var4[var5];
            var1.source = var5;
            var4 = var4.length;
            var1.numSources = var4;
            var4 = _closure2_slot9;
            var1.selectedIndex = var4;
            var4 = _closure2_slot7;
            var1.onSelect = var4;
            var0 = _closure2_slot8;
            var1.useThumbnailStyle = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var15 = var22.bind(var20)(var13, var15);
        var22 = var20.useMemo;
        var4 = var4.length;
        var13 = new Array(1);
        var13[0] = var4;
        var4 = function() { // Environment: var1
            var0 = _closure2_slot0;
            var1 = var0.length;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var13 = var22.bind(var20)(var4, var13);
        var4 = 11;
        var4 = var17[var4];
        var17 = var10.bind(var3)(var4);
        var10 = var17.useAnimatedProps;
        var4 = function() { // Original name: i, environment: var1
            var0 = {};
            var2 = _closure2_slot6;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.scrollEnabled = var1;
            return var0;
        };
        var22 = {};
        var22.scrollEnabled = var23;
        var4.__closure = var22;
        var22 = 13439565264141.0;
        var4.__workletHash = var22;
        var22 = _closure1_slot14;
        var4.__initData = var22;
        var4 = var10.bind(var17)(var4);
        var17 = var20.useCallback;
        var10 = new Array(1);
        var10[0] = var9;
        var9 = function() { // Environment: var1
            var3 = _closure1_slot8;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot4;
            var0.style = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var10 = var17.bind(var20)(var9, var10);
        var17 = var20.useCallback;
        var9 = new Array(1);
        var9[0] = var2;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot8;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure2_slot5;
            var0.style = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var9 = var17.bind(var20)(var2, var9);
        var17 = var20.useMemo;
        var2 = new Array(1);
        var2[0] = var21;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot1;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var17 = var17.bind(var20)(var1, var2);
        var2 = _closure1_slot8;
        var1 = _closure1_slot11;
        var0 = {
            'ref': null,
            'style': null,
            'sections': null,
            'stickyHeaderFooter': true,
            'disableContentWrappers': true,
            'automaticallyAdjustContentInsets': false,
            'showsVerticalScrollIndicator': false,
            'showsHorizontalScrollIndicator': false,
            'initialScrollOrientation': 'center'
        };
        var0.ref = var19;
        var18 = var18.containerPortrait;
        var0.style = var18;
        var0.sections = var13;
        var13 = true;
        var0.initialScrollItem = var17;
        var0.itemSize = var16;
        var0.renderItem = var15;
        var0.onScroll = var14;
        var0.horizontal = var13;
        var0.headerSize = var12;
        var0.footerSize = var11;
        var0.renderHeader = var10;
        var0.renderFooter = var9;
        var0.onEndReached = var8;
        var0.endReachedThreshold = var7;
        var0.chunkBase = var6;
        var0.snapToOffsets = var5;
        var0.animatedProps = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8816, 33, 9148, 3110, 671, 3869, 4032, 478, 3679, 6418, 1297, 4667, 8803, 2]);