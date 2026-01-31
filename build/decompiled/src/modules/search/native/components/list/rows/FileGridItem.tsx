// modules/search/native/components/list/rows/FileGridItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105606: for (var _fun105606_ip = 0;;) switch (_fun105606_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 7;
                var0 = var0[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isImageFile;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun105606_ip = 168;
                    continue _fun105606
                }
            case 45:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isVideoFile;
                var0 = var0.bind(var2)(var3);
                var5 = _closure1_slot9;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var0) {
                    _fun105606_ip = 128;
                    continue _fun105606
                }
            case 88:
                var0 = 10;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var2 = var0.FileIcon;
                var0 = {
                    'size': 'lg',
                    'color': 'interactive-text-default'
                };
                var0 = var5.bind(var4)(var2, var0);
                _fun105606_ip = 166;
                continue _fun105606;
            case 128:
                var2 = 9;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.VideoIcon;
                var2 = {
                    'size': 'lg',
                    'color': 'interactive-text-default'
                };
                var0 = var5.bind(var4)(var3, var2);
            case 166:
                _fun105606_ip = 218;
                continue _fun105606;
            case 168:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ImageIcon;
                var1 = {
                    'size': 'lg',
                    'color': 'interactive-text-default'
                };
                var0 = var3.bind(var4)(var2, var1);
            case 218:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.useWindowDimensions;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot7 = var7;
    var3 = var3.SearchFileTypes;
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'padding': 0,
        'backgroundColor': null,
        'overflow': 'hidden'
    };
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.container = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.icon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105607: for (var _fun105607_ip = 0;;) switch (_fun105607_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.data;
                var _closure2_slot0 = var10;
                var1 = var2.onPress;
                var _closure2_slot1 = var1;
                var15 = var2.imageStyle;
                var _closure2_slot2 = var15;
                var12 = var2.containerStyle;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot11;
                var11 = var2.bind(var3)();
                var _closure2_slot3 = var11;
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)();
                var14 = var2.scale;
                var _closure2_slot4 = var14;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var7)(var4, var2);
                var _closure2_slot5 = var8;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var2 = var10.author;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = null;
                var9 = var2 == var8;
                var2 = undefined;
                if (var9) {
                    _fun105607_ip = 171;
                    continue _fun105607
                }
            case 166:
                var2 = var8.guild_id;
            case 171:
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun105609: for (var _fun105609_ip = 0;;) switch (_fun105609_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.author;
                            var1 = var2.getAvatarSource;
                            var4 = _closure2_slot5;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun105609_ip = 43;
                                continue _fun105609
                            }
                        case 34:
                            var3 = _closure2_slot5;
                            var0 = var3.guild_id;
                        case 43:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var9 = var6.bind(var7)(var2, var4);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var10.attachment;
                var13 = var4.bind(var3)(var2);
                _closure2_slot6 = var13;
                var2 = var10.attachment;
                var16 = var2.size;
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var17 = var10.channelId;
                var2 = new Array(3);
                var2[0] = var17;
                var17 = var10.messageId;
                var2[1] = var17;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var3 = var0.channelId;
                    var1.channelId = var3;
                    var0 = var0.messageId;
                    var1.messageId = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var4.bind(var7)(var1, var2);
                var2 = var7.useMemo;
                var1 = new Array(5);
                var1[0] = var10;
                var1[1] = var13;
                var1[2] = var15;
                var1[3] = var14;
                var11 = var11.icon;
                var1[4] = var11;
                var0 = function() { // Environment: var0
                    _fun105611: for (var _fun105611_ip = 0;;) switch (_fun105611_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.type;
                            var0 = _closure1_slot8;
                            var0 = var0.MEDIA_ATTACHMENT;
                            if (!(var0 !== var1)) {
                                _fun105611_ip = 211;
                                continue _fun105611
                            }
                        case 32:
                            var0 = _closure1_slot8;
                            var0 = var0.ATTACHMENT;
                            if (!(var0 !== var1)) {
                                _fun105611_ip = 133;
                                continue _fun105611
                            }
                        case 46:
                            var0 = _closure1_slot8;
                            var0 = var0.AUDIO;
                            if (!(var0 !== var1)) {
                                _fun105611_ip = 64;
                                continue _fun105611
                            }
                        case 60:
                            var0 = undefined;
                            return var0;
                        case 64:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.SearchSoundMediaImage;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.containerStyle = var4;
                            var7 = var4.height;
                            var0.height = var7;
                            var4 = var4.width;
                            var0.width = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 133:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.SearchFileMediaImage;
                            var0 = {};
                            var4 = _closure2_slot6;
                            var0.fileName = var4;
                            var4 = _closure2_slot2;
                            var0.containerStyle = var4;
                            var7 = var4.height;
                            var0.height = var7;
                            var4 = var4.width;
                            var0.width = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 211:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.SearchAttachmentMediaImage;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.containerStyle = var4;
                            var7 = _closure2_slot0;
                            var8 = var7.attachment;
                            var0.attachment = var8;
                            var8 = var7.channelId;
                            var0.channelId = var8;
                            var7 = var7.author;
                            var7 = var7.id;
                            var0.authorId = var7;
                            var6 = _closure2_slot4;
                            var0.scale = var6;
                            var6 = var4.height;
                            var5 = _closure1_slot7;
                            var6 = var6 + var5;
                            var0.containerHeight = var6;
                            var4 = var4.width;
                            var4 = var4 + var5;
                            var0.containerWidth = var4;
                            var4 = function() {
                                var3 = _closure1_slot9;
                                var2 = _closure1_slot4;
                                var1 = {};
                                var5 = _closure2_slot3;
                                var6 = var5.icon;
                                var5 = new Array(2);
                                var5[0] = var6;
                                var6 = _closure2_slot2;
                                var5[1] = var6;
                                var1.style = var5;
                                var5 = _closure1_slot12;
                                var0 = _closure2_slot0;
                                var0 = var0.attachment;
                                var4 = var0.filename;
                                var0 = undefined;
                                var4 = var5.bind(var0)(var4);
                                var1.children = var4;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.renderFallback = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var15 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot10;
                var7 = _closure1_slot0;
                var11 = 14;
                var0 = var6[var11];
                var0 = var7.bind(var3)(var0);
                var1 = var0.SearchListCardContainer;
                var0 = {};
                var0.containerStyle = var12;
                var0.onPress = var4;
                var14 = _closure1_slot9;
                var4 = var6[var11];
                var4 = var7.bind(var3)(var4);
                var12 = var4.SearchListCardThumbnail;
                var4 = {};
                var4.thumbnail = var15;
                var12 = var14.bind(var3)(var12, var4);
                var4 = new Array(3);
                var4[0] = var12;
                var12 = _closure1_slot9;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.SearchListCardContent;
                var6 = {};
                var6.label = var13;
                var13 = 0;
                var14 = var16 > var13;
                var13 = undefined;
                if (!var14) {
                    _fun105607_ip = 473;
                    continue _fun105607
                }
            case 442:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 15;
                var14 = var17[var14];
                var15 = var15.bind(var3)(var14);
                var14 = var15.sizeString;
                var13 = var14.bind(var15)(var16);
            case 473:
                var6.subLabel = var13;
                var6 = var12.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SearchListCardFooter;
                var5 = {};
                var10 = var10.author;
                var5.author = var10;
                var5.avatarSource = var9;
                var5.channel = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/FileGridItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 8861, 33, 1297, 671, 3939, 4814, 8737, 13726, 566, 6761, 13711, 13715, 3968, 2]);