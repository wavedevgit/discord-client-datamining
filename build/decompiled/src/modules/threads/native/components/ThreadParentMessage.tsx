// modules/threads/native/components/ThreadParentMessage.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReferencedMessageState;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var7 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var7;
    var6 = var7.setOptions;
    var3 = {
        'renderCodedLinks': false,
        'renderGiftCode': false,
        'renderActivityInstanceEmbed': false,
        'renderActivityInviteEmbed': false,
        'renderEmbeds': true,
        'ignoreMentioned': true,
        'inlineAttachmentMedia': true,
        'inlineEmbedMedia': true,
        'renderReactions': false,
        'renderReplies': true,
        'renderThreadEmbeds': false
    };
    var3 = var6.bind(var7)(var3);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/ThreadParentMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun105094: for (var _fun105094_ip = 0;;) switch (_fun105094_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var1 = var0.messageId;
                var _closure2_slot1 = var1;
                var0 = var0.channelId;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var3 = _closure1_slot3;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 == var7;
                var2 = undefined;
                if (var1) {
                    _fun105094_ip = 103;
                    continue _fun105094
                }
            case 98:
                var2 = var7.state;
            case 103:
                var1 = _closure1_slot4;
                var1 = var1.LOADED;
                var0 = null;
                if (!(var2 === var1)) {
                    _fun105094_ip = 229;
                    continue _fun105094
                }
            case 119:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.transitionToGuild;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1.onPress = var5;
                var6 = _closure1_slot1;
                var5 = 8;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var8 = _closure1_slot7;
                var5.rowGenerator = var8;
                var7 = var7.message;
                var5.message = var7;
                var7 = true;
                var5.useDarkGradient = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 229:
                return var0;
        }
    };
    var2.ThreadChannelStarterMessage = var3;
    var1 = function arg0() {
        _fun105097: for (var _fun105097_ip = 0;;) switch (_fun105097_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.messageId;
                var _closure2_slot0 = var2;
                var1 = var1.channelId;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun105097_ip = 132;
                    continue _fun105097
                }
            case 87:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure1_slot7;
                var1.rowGenerator = var6;
                var1.message = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 132:
                return var0;
        }
    };
    var2.ThreadCreationStarterMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4271, 4252, 33, 6540, 566, 4905, 1220, 8840, 2]);