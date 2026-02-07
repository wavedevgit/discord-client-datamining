// modules/search/native/components/list/rows/MediaGridItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var8 = 1;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var7 = var3.Pressable;
    var _closure1_slot5 = var7;
    var3 = var3.useWindowDimensions;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.SEARCH_LIST_SECTION_TOP_PADDING;
    var3 = var3.SearchMediaTypes;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {};
    var13 = 6;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11.borderRadius = var15;
    var15 = 'hidden';
    var11.overflow = var15;
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var11.backgroundColor = var13;
    var3.container = var11;
    var11 = {
        'flex': 1,
        'resizeMode': 'cover'
    };
    var3.image = var11;
    var11 = {};
    var11.marginTop = var12;
    var3.marginTop = var11;
    var11 = {
        'position': 'absolute',
        'top': 8,
        'right': 8
    };
    var3.avatar = var11;
    var11 = {};
    var11.padding = var9;
    var3.card = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var3.HIDDEN = var9;
    var7 = 'HIDDEN';
    var3[var9] = var7;
    var3.VISIBLE = var8;
    var7 = 'VISIBLE';
    var3[var8] = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun106091: for (var _fun106091_ip = 0;;) switch (_fun106091_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.media;
                var _closure2_slot0 = var16;
                var13 = var0.size;
                var _closure2_slot1 = var13;
                var6 = var0.containerStyle;
                var2 = var0.onPress;
                var _closure2_slot2 = var2;
                var0 = var0.animate;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var4 = _closure1_slot11;
                var15 = var4.bind(var3)();
                var4 = _closure1_slot6;
                var4 = var4.bind(var3)();
                var17 = var4.scale;
                var9 = _closure1_slot3;
                var4 = var9.useRef;
                var8 = null;
                var10 = var4.bind(var9)(var8);
                var _closure2_slot3 = var10;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var11 = var5.bind(var3)(var4);
                var7 = var11.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var7.bind(var11)(var5, var4);
                var _closure2_slot4 = var11;
                var7 = var9.useMemo;
                var4 = var16.author;
                var5 = new Array(2);
                var5[0] = var4;
                var12 = var8 == var11;
                var4 = undefined;
                if (var12) {
                    _fun106091_ip = 183;
                    continue _fun106091
                }
            case 178:
                var4 = var11.guild_id;
            case 183:
                var5[1] = var4;
                var4 = function() { // Environment: var1
                    _fun106093: for (var _fun106093_ip = 0;;) switch (_fun106093_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.author;
                            var1 = var2.getAvatarSource;
                            var4 = _closure2_slot4;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun106093_ip = 43;
                                continue _fun106093
                            }
                        case 34:
                            var3 = _closure2_slot4;
                            var0 = var3.guild_id;
                        case 43:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var20 = var7.bind(var9)(var4, var5);
                var7 = _closure1_slot3;
                var5 = var7.useCallback;
                var4 = new Array(2);
                var4[0] = var16;
                var4[1] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.media = var3;
                    var0 = _closure2_slot3;
                    var0 = var0.current;
                    var1.originView = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var5.bind(var7)(var2, var4);
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 8;
                var2 = var2[var4];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useSharedValue;
                var9 = _closure1_slot12;
                if (var0) {
                    _fun106091_ip = 275;
                    continue _fun106091
                }
            case 267:
                var0 = var9.VISIBLE;
                _fun106091_ip = 281;
                continue _fun106091;
            case 275:
                var0 = var9.HIDDEN;
            case 281:
                var2 = var2.bind(var5)(var0);
                _closure2_slot5 = var2;
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = var0[var4];
                var11 = var19.bind(var3)(var5);
                var9 = var11.useAnimatedStyle;
                var5 = function() {
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.withTiming;
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 10;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.timingStandard;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {};
                var18 = 9;
                var18 = var0[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.withTiming;
                var12.withTiming = var18;
                var12.opacity = var2;
                var18 = 10;
                var18 = var0[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.timingStandard;
                var12.timingStandard = var18;
                var5.__closure = var12;
                var12 = 9644750191833.0;
                var5.__workletHash = var12;
                var12 = _closure1_slot13;
                var5.__initData = var12;
                var5 = var9.bind(var11)(var5);
                var11 = _closure1_slot3;
                var12 = var11.useEffect;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = _closure1_slot12;
                    var0 = var0.VISIBLE;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var12.bind(var11)(var2, var9);
                var9 = var11.useMemo;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    var0.height = var1;
                    return var0;
                };
                var9 = var9.bind(var11)(var1, var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var11 = var15.container;
                var4 = new Array(4);
                var4[0] = var11;
                var4[1] = var6;
                var4[2] = var9;
                var4[3] = var5;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var4.ref = var10;
                var4.style = var9;
                var9 = 'button';
                var4.accessibilityRole = var9;
                var4.onPress = var7;
                var9 = var16.type;
                var7 = _closure1_slot8;
                var7 = var7.EMBED;
                var9 = var9 === var7;
                if (!var9) {
                    _fun106091_ip = 677;
                    continue _fun106091
                }
            case 568:
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 11;
                var7 = var12[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.SearchEmbedMediaImage;
                var7 = {};
                var12 = var16.sources;
                var7.sources = var12;
                var12 = var16.embed;
                var7.embed = var12;
                var12 = var16.messageId;
                var7.messageId = var12;
                var12 = var16.channelId;
                var7.channelId = var12;
                var12 = var16.author;
                var12 = var12.id;
                var7.authorId = var12;
                var7.scale = var17;
                var7.containerHeight = var13;
                var7.containerWidth = var13;
                var9 = var11.bind(var3)(var10, var7);
            case 677:
                var7 = new Array(5);
                var7[0] = var9;
                var10 = var16.type;
                var9 = _closure1_slot8;
                var9 = var9.ATTACHMENT;
                var9 = var10 === var9;
                if (!var9) {
                    _fun106091_ip = 796;
                    continue _fun106091
                }
            case 707:
                var12 = _closure1_slot9;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 11;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.SearchAttachmentMediaImage;
                var10 = {};
                var18 = var16.attachment;
                var10.attachment = var18;
                var18 = var16.channelId;
                var10.channelId = var18;
                var18 = var16.author;
                var18 = var18.id;
                var10.authorId = var18;
                var10.scale = var17;
                var10.containerHeight = var13;
                var10.containerWidth = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 796:
                var7[1] = var9;
                var10 = var16.type;
                var9 = _closure1_slot8;
                var9 = var9.AUDIO;
                var9 = var10 === var9;
                if (!var9) {
                    _fun106091_ip = 868;
                    continue _fun106091
                }
            case 822:
                var12 = _closure1_slot9;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 11;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.SearchSoundMediaImage;
                var10 = {};
                var10.height = var13;
                var10.width = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 868:
                var7[2] = var9;
                var10 = var16.type;
                var9 = _closure1_slot8;
                var9 = var9.COMPONENT;
                var9 = var10 === var9;
                if (!var9) {
                    _fun106091_ip = 1011;
                    continue _fun106091
                }
            case 894:
                var12 = _closure1_slot9;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 11;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.SearchComponentMediaImage;
                var10 = {};
                var18 = var16.unfurledMediaItem;
                var10.unfurledMediaItem = var18;
                var18 = var16.sources;
                var10.sources = var18;
                var18 = var16.channelId;
                var10.channelId = var18;
                var18 = var16.author;
                var18 = var18.id;
                var10.authorId = var18;
                var18 = var16.author;
                var18 = var18.bot;
                var10.isBot = var18;
                var10.scale = var17;
                var10.containerHeight = var13;
                var10.containerWidth = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1011:
                var7[3] = var9;
                var8 = var8 != var20;
                if (!var8) {
                    _fun106091_ip = 1182;
                    continue _fun106091
                }
            case 1025:
                var11 = _closure1_slot9;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var15.avatar;
                var9.style = var12;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 12;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Card;
                var12 = {};
                var17 = 'low';
                var12.shadow = var17;
                var15 = var15.card;
                var12.style = var15;
                var15 = _closure1_slot1;
                var17 = 13;
                var14 = var19[var17];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.source = var20;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.XSMALL;
                var14.size = var17;
                var16 = var16.author;
                var16 = var16.avatarDecoration;
                var14.avatarDecoration = var16;
                var14 = var11.bind(var3)(var15, var14);
                var12.children = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1182:
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/MediaGridItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 8985, 33, 1297, 671, 566, 3721, 4097, 4883, 13819, 4902, 5504, 2]);