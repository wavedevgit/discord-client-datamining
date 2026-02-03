// modules/messages/native/renderer/MessageWithContent.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RowType;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/MessageWithContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun53955: for (var _fun53955_ip = 0;;) switch (_fun53955_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var9 = var8.changeType;
                var10 = var8.message;
                var23 = var8.roleStyle;
                var22 = var8.isFirst;
                var12 = var8.isEditing;
                var11 = var8.separatorBefore;
                var6 = var8.canAddNewReactions;
                var15 = var8.reactionsTheme;
                var0 = var8.isSystemDM;
                var5 = undefined;
                var20 = var5 !== var0;
                if (!var20) {
                    _fun53955_ip = 71;
                    continue _fun53955
                }
            case 68:
                var20 = var0;
            case 71:
                var0 = var8.canShowImages;
                var21 = var5 === var0;
                if (var21) {
                    _fun53955_ip = 87;
                    continue _fun53955
                }
            case 84:
                var21 = var0;
            case 87:
                var7 = var8.truncation;
                var13 = var8.renderContentOnly;
                var19 = var8.pushFeedbackType;
                var0 = var8.alwaysShowAddReaction;
                var4 = var5 !== var0;
                if (!var4) {
                    _fun53955_ip = 121;
                    continue _fun53955
                }
            case 118:
                var4 = var0;
            case 121:
                var3 = var8.overrideBackgroundHighlight;
                var18 = var8.showContentInventoryEntryFallbackEmbed;
                var0 = {};
                var14 = _closure1_slot4;
                var14 = var14.MESSAGE;
                var0.type = var14;
                var17 = _closure1_slot1;
                var14 = _closure1_slot2;
                var16 = 2;
                var16 = var14[var16];
                var17 = var17.bind(var5)(var16);
                var16 = {};
                var16.options = var2;
                var16.message = var10;
                var16.roleStyle = var23;
                var16.isFirst = var22;
                var16.isEditing = var12;
                var16.canShowImages = var21;
                var16.isSystemDM = var20;
                var20 = false;
                var16.isInlineReplyPreview = var20;
                var16.pushFeedbackType = var19;
                var16.renderContentOnly = var13;
                var16.showContentInventoryEntryFallbackEmbed = var18;
                var16 = var17.bind(var5)(var16);
                var0.message = var16;
                var0.canAddNewReactions = var6;
                var17 = _closure1_slot0;
                var6 = 3;
                var16 = var14[var6];
                var16 = var17.bind(var5)(var16);
                var19 = var16.intl;
                var18 = var19.string;
                var16 = var14[var6];
                var16 = var17.bind(var5)(var16);
                var16 = var16.t;
                var16 = var16.lfIHs4;
                var16 = var18.bind(var19)(var16);
                var0.addNewReactionAccessibilityLabel = var16;
                var0.reactionsTheme = var15;
                var15 = var14[var6];
                var15 = var17.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var6];
                var14 = var17.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14["IOS/dU"];
                var14 = var15.bind(var16)(var14);
                var0.highlightLabel = var14;
                var0.renderContentOnly = var13;
                var0.separatorBefore = var11;
                var0.changeType = var9;
                var0.truncation = var7;
                var0.alwaysShowAddReaction = var4;
                var11 = null;
                if (!(var11 == var3)) {
                    _fun53955_ip = 471;
                    continue _fun53955
                }
            case 392:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 4;
                var4 = var9[var4];
                var9 = var7.bind(var5)(var4);
                var7 = var9.createBackgroundHighlight;
                var4 = {};
                var4.message = var10;
                var13 = arg2;
                var4.theme = var13;
                var4.isEditing = var12;
                var13 = _closure1_slot3;
                var12 = var13.getMessage;
                var10 = var10.id;
                var10 = var12.bind(var13)(var10);
                var10 = var11 != var10;
                var4.isAutomodBlockedMessage = var10;
                var3 = var7.bind(var9)(var4);
            case 471:
                var0.backgroundHighlight = var3;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 4;
                var3 = var7[var3];
                var7 = var4.bind(var5)(var3);
                var4 = var7.createSwipeActions;
                var3 = var2.enableSwipeActions;
                if (!var3) {
                    _fun53955_ip = 519;
                    continue _fun53955
                }
            case 513:
                var3 = var8.canReply;
            case 519:
                var2 = var2.enableSwipeActions;
                if (!var2) {
                    _fun53955_ip = 534;
                    continue _fun53955
                }
            case 528:
                var2 = var8.canEdit;
            case 534:
                var2 = var4.bind(var7)(var3, var2);
                var0.swipeActions = var2;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var7 = var2.intl;
                var3 = var7.string;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["5IEsGx"];
                var2 = var3.bind(var7)(var2);
                var0.replyAccessibilityLabel = var2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var7 = var2.intl;
                var3 = var7.string;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.I3ltXO;
                var2 = var3.bind(var7)(var2);
                var0.forwardAccessibilityLabel = var2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.rBIGBL;
                var1 = var2.bind(var3)(var1);
                var0.threadAccessibilityLabel = var1;
                return var0;
        }
    };
    var2.generateMessageRowData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6517, 6512, 6519, 1234, 6780, 2]);