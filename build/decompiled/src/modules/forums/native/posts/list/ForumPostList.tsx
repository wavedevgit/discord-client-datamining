// modules/forums/native/posts/list/ForumPostList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.header = var8;
    var8 = {
        'flex': 1,
        'marginBottom': 12
    };
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/list/ForumPostList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89638: for (var _fun89638_ip = 0;;) switch (_fun89638_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.messageContent;
                var10 = var0.firstMessage;
                var17 = var0.firstMessageLoaded;
                var9 = var0.hasUnreads;
                var22 = var0.isNew;
                var20 = var0.media;
                var19 = var0.isEmbed;
                var18 = var0.isLocalDeviceMedia;
                var8 = var0.parentChannel;
                var11 = var0.thread;
                var16 = var0.senderModifier;
                var0 = _closure1_slot9;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSomeAppliedTags;
                var2 = 2;
                var1 = var0.bind(var1)(var11, var2);
                var0 = _closure1_slot3;
                var1 = var0.bind(var3)(var1, var2);
                var24 = 0;
                var28 = var1[var24];
                var0 = 1;
                var27 = var1[var0];
                var1 = var11.hasFlag;
                var0 = _closure1_slot5;
                var0 = var0.PINNED;
                var15 = var1.bind(var11)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot8;
                var0 = {};
                var5 = _closure1_slot4;
                var4 = {};
                var6 = var23.content;
                var4.style = var6;
                var6 = var15;
                if (var15) {
                    _fun89638_ip = 201;
                    continue _fun89638
                }
            case 192:
                var7 = var28.length;
                var6 = var24 !== var7;
            case 201:
                if (!var6) {
                    _fun89638_ip = 351;
                    continue _fun89638
                }
            case 207:
                var14 = _closure1_slot7;
                var13 = _closure1_slot4;
                var7 = {};
                var23 = var23.header;
                var7.style = var23;
                var23 = var15;
                if (!var23) {
                    _fun89638_ip = 264;
                    continue _fun89638
                }
            case 232:
                var26 = _closure1_slot6;
                var25 = _closure1_slot1;
                var29 = _closure1_slot2;
                var15 = 7;
                var15 = var29[var15];
                var25 = var25.bind(var3)(var15);
                var15 = {};
                var23 = var26.bind(var3)(var25, var15);
            case 264:
                var15 = new Array(2);
                var15[0] = var23;
                var23 = var28.length;
                var23 = var24 !== var23;
                if (!var23) {
                    _fun89638_ip = 337;
                    continue _fun89638
                }
            case 284:
                var26 = _closure1_slot6;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var24 = 8;
                var24 = var29[var24];
                var24 = var25.bind(var3)(var24);
                var25 = var24.ForumPostAppliedTagPills;
                var24 = {};
                var24.appliedTags = var28;
                var24.additionalTagsCount = var27;
                var24.hasUnreads = var9;
                var23 = var26.bind(var3)(var25, var24);
            case 337:
                var15[1] = var23;
                var7.children = var15;
                var6 = var14.bind(var3)(var13, var7);
            case 351:
                var13 = new Array(2);
                var13[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var14 = 9;
                var14 = var12[var14];
                var15 = var6.bind(var3)(var14);
                var14 = {};
                var14.thread = var11;
                var14.firstMessage = var10;
                var14.hasUnreads = var9;
                var14.isNew = var22;
                var14.messageContent = var21;
                var14.media = var20;
                var14.isEmbed = var19;
                var14.isLocalDeviceMedia = var18;
                var14.firstMessageLoaded = var17;
                var14.senderModifier = var16;
                var14 = var7.bind(var3)(var15, var14);
                var13[1] = var14;
                var4.children = var13;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 10;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.thread = var11;
                var5.firstMessage = var10;
                var5.hasUnreads = var9;
                var5.parentChannel = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1379, 33, 1297, 8919, 11622, 11632, 11644, 11647, 2]);