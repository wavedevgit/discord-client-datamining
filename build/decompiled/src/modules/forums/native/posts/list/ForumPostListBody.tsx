// modules/forums/native/posts/list/ForumPostListBody.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ForumTimestampFormats;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-start'
    };
    var3.body = var8;
    var8 = {};
    var8.flex = var9;
    var3.contentContainer = var8;
    var8 = {};
    var9 = 'italic';
    var8.fontStyle = var9;
    var3.contentBlocked = var8;
    var8 = {};
    var9 = 12;
    var8.marginLeft = var9;
    var3.thumbnailContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 6
    };
    var3.details = var8;
    var8 = {};
    var9 = 8;
    var8.marginEnd = var9;
    var3.newTagContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/list/ForumPostListBody.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89672: for (var _fun89672_ip = 0;;) switch (_fun89672_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.containerStyle;
                var15 = var0.thread;
                var11 = var0.firstMessage;
                var17 = var0.hasUnreads;
                var8 = var0.isNew;
                var18 = var0.firstMessageLoaded;
                var19 = var0.messageContent;
                var14 = var0.media;
                var13 = var0.isEmbed;
                var12 = var0.isLocalDeviceMedia;
                var16 = var0.senderModifier;
                var0 = _closure1_slot7;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var9.body;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var4 = {};
                var5 = var9.contentContainer;
                var4.style = var5;
                var5 = {};
                var7 = var9.details;
                var5.style = var7;
                if (!var8) {
                    _fun89672_ip = 183;
                    continue _fun89672
                }
            case 140:
                var20 = _closure1_slot5;
                var10 = _closure1_slot1;
                var21 = _closure1_slot2;
                var7 = 5;
                var7 = var21[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var21 = var9.newTagContainer;
                var7.containerStyle = var21;
                var8 = var20.bind(var3)(var10, var7);
            case 183:
                var7 = new Array(3);
                var7[0] = var8;
                var10 = _closure1_slot5;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 6;
                var8 = var20[var8];
                var8 = var21.bind(var3)(var8);
                var21 = var8.ForumPostAuthor;
                var8 = {};
                var8.thread = var15;
                var8.hasUnreads = var17;
                var8 = var10.bind(var3)(var21, var8);
                var7[1] = var8;
                var8 = _closure1_slot1;
                var21 = 7;
                var21 = var20[var21];
                var22 = var8.bind(var3)(var21);
                var21 = {};
                var21.thread = var15;
                var21.hasUnreads = var17;
                var23 = _closure1_slot4;
                var23 = var23.POSTED_DURATION_AGO;
                var21.format = var23;
                var21 = var10.bind(var3)(var22, var21);
                var7[2] = var21;
                var5.children = var7;
                var7 = var2.bind(var3)(var1, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = 8;
                var7 = var20[var7];
                var21 = var8.bind(var3)(var7);
                var7 = {
                    'title': null,
                    'lineClamp': 2,
                    'ellipsizeMode': 'tail'
                };
                var22 = var15.name;
                var7.title = var22;
                var7.hasUnreads = var17;
                var7 = var10.bind(var3)(var21, var7);
                var5[1] = var7;
                var7 = 9;
                var7 = var20[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.messageContent = var19;
                var7.message = var11;
                var19 = false;
                var7.isMessageDeleted = var19;
                var7.messageLoaded = var18;
                var7.hasUnreads = var17;
                var7.senderModifier = var16;
                var7 = var10.bind(var3)(var8, var7);
                var5[2] = var7;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var10 = null;
                if (!(var10 != var11)) {
                    _fun89672_ip = 455;
                    continue _fun89672
                }
            case 444:
                var7 = var11.blocked;
                var5 = null;
                if (var7) {
                    _fun89672_ip = 551;
                    continue _fun89672
                }
            case 455:
                var7 = var10 == var14;
                var5 = null;
                if (var7) {
                    _fun89672_ip = 551;
                    continue _fun89672
                }
            case 464:
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 10;
                var6 = var16[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ForumPostMediaThumbnail;
                var6 = {};
                var6.channel = var15;
                var6.media = var14;
                var6.isEmbed = var13;
                var6.isLocalDeviceMedia = var12;
                var12 = var10 == var11;
                var10 = undefined;
                if (var12) {
                    _fun89672_ip = 529;
                    continue _fun89672
                }
            case 524:
                var10 = var11.id;
            case 529:
                var6.firstMessageId = var10;
                var9 = var9.thumbnailContainer;
                var6.containerStyle = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 551:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6502, 33, 1297, 11655, 11645, 11654, 11656, 11666, 11649, 2]);