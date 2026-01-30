// modules/chat/native/ChatViewStickyHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ChatViewStickyHeaderAccountSafetyWarnings, environment: var1
        _fun89679: for (var _fun89679_ip = 0;;) switch (_fun89679_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var5 = var0.senderId;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var0 = var6.useStrangerDangerWarning;
                var9 = var0.bind(var6)(var7);
                var0 = 5;
                var0 = var3[var0];
                var8 = var2.bind(var4)(var0);
                var6 = var8.useInappropriateConversationBannerForChannel;
                var0 = _closure1_slot5;
                var10 = var6.bind(var8)(var7, var0);
                var0 = 6;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useLikelyAtoWarning;
                var6 = var0.bind(var2)(var7);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun89679_ip = 226;
                    continue _fun89679
                }
            case 107:
                if (!(var0 == var9)) {
                    _fun89679_ip = 173;
                    continue _fun89679
                }
            case 111:
                var2 = var0 != var10;
                var0 = null;
                if (!var2) {
                    _fun89679_ip = 171;
                    continue _fun89679
                }
            case 120:
                var8 = _closure1_slot6;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.channelId = var7;
                var10 = var10.id;
                var2.warningId = var10;
                var2.senderId = var5;
                var0 = var8.bind(var4)(var3, var2);
            case 171:
                _fun89679_ip = 224;
                continue _fun89679;
            case 173:
                var8 = _closure1_slot6;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 8;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.channelId = var7;
                var9 = var9.id;
                var2.warningId = var9;
                var2.senderId = var5;
                var0 = var8.bind(var4)(var3, var2);
            case 224:
                _fun89679_ip = 277;
                continue _fun89679;
            case 226:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channelId = var7;
                var6 = var6.id;
                var1.warningId = var6;
                var1.senderId = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 277:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LOCATION_CONTEXT_MOBILE;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var7 = var3.Fragment;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun89680: for (var _fun89680_ip = 0;;) switch (_fun89680_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var _closure2_slot0 = var9;
                var8 = var1.scrollToNewMessages;
                var6 = _closure1_slot4;
                var2 = var6.useState;
                var1 = false;
                var4 = var2.bind(var6)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var4 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot1 = var1;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var9);
                var10 = var1.showUnreadsNotice;
                var13 = var1.clearUnreadsNotice;
                var2 = var6.useImperativeHandle;
                var1 = arg1;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = function(arg0) { // Original name: onChatViewScrolled, environment: var1
                        _fun89682: for (var _fun89682_ip = 0;;) switch (_fun89682_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.isFirstMessageVisible;
                                var3 = _closure2_slot0;
                                var2 = var3.isForumPost;
                                var2 = var2.bind(var3)();
                                if (!var2) {
                                    _fun89682_ip = 43;
                                    continue _fun89682
                                }
                            case 29:
                                var2 = _closure2_slot1;
                                var1 = !var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 43:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onChatViewScrolled = var1;
                    return var0;
                };
                var0 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = var9.isForumPost;
                var11 = var6.bind(var9)();
                var7 = null;
                if (!var11) {
                    _fun89680_ip = 196;
                    continue _fun89680
                }
            case 155:
                var7 = null;
                if (!var4) {
                    _fun89680_ip = 196;
                    continue _fun89680
                }
            case 160:
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 11;
                var4 = var14[var4];
                var11 = var11.bind(var3)(var4);
                var4 = {};
                var4.channel = var9;
                var7 = var12.bind(var3)(var11, var4);
            case 196:
                var4 = new Array(5);
                var4[0] = var7;
                var7 = var9.isDM;
                var11 = var7.bind(var9)();
                var7 = null;
                if (!var11) {
                    _fun89680_ip = 259;
                    continue _fun89680
                }
            case 219:
                var14 = _closure1_slot6;
                var12 = _closure1_slot9;
                var11 = {};
                var15 = var9.id;
                var11.channelId = var15;
                var15 = var9.getRecipientId;
                var15 = var15.bind(var9)();
                var11.senderId = var15;
                var7 = var14.bind(var3)(var12, var11);
            case 259:
                var4[1] = var7;
                var7 = null;
                if (!var10) {
                    _fun89680_ip = 309;
                    continue _fun89680
                }
            case 268:
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 12;
                var10 = var14[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.channel = var9;
                var10.clearUnreadsNotice = var13;
                var7 = var12.bind(var3)(var11, var10);
            case 309:
                var4[2] = var7;
                var7 = var9.isDM;
                var7 = var7.bind(var9)();
                var6 = null;
                if (!var7) {
                    _fun89680_ip = 364;
                    continue _fun89680
                }
            case 328:
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 13;
                var7 = var12[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.channel = var9;
                var6 = var11.bind(var3)(var10, var7);
            case 364:
                var4[3] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channel = var9;
                var5.handleScrollToNewMessages = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatViewStickyHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9005, 33, 11590, 9112, 11591, 11592, 11601, 11604, 11605, 11607, 11609, 11612, 11613, 2]);