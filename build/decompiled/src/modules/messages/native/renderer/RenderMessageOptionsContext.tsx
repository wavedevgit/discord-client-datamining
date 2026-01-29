// modules/messages/native/renderer/RenderMessageOptionsContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = {};
    var3 = 0;
    var1.USER_SETTING = var3;
    var0 = 'USER_SETTING';
    var1[var3] = var0;
    var4 = 1;
    var1.FORCE_ENABLE = var4;
    var0 = 'FORCE_ENABLE';
    var1[var4] = var0;
    var4 = 2;
    var1.FORCE_DISABLE = var4;
    var0 = 'FORCE_DISABLE';
    var1[var4] = var0;
    var0 = dependencyMap;
    var4 = var0[var3];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/RenderMessageOptionsContext.tsx';
    var3 = var4.bind(var5)(var3);
    var2.UserOption = var1;
    var1 = {
        'renderEmbeds': true,
        'renderReactions': true,
        'inlineEmbedMedia': true,
        'inlineAttachmentMedia': true,
        'animateEmoji': true,
        'gifAutoPlay': false,
        'renderCodedLinks': true,
        'renderGiftCode': true,
        'renderActivityInstanceEmbed': true,
        'renderActivityInviteEmbed': true,
        'renderComponents': true,
        'renderThreadEmbeds': true,
        'renderReplies': true,
        'renderCommunicationDisabled': false,
        'renderAttachments': true,
        'renderExecutedCommands': true,
        'renderPolls': true,
        'renderSharedClientTheme': true,
        'renderForumPostActions': true,
        'ignoreMentioned': false,
        'ignoreEmbedDescriptionCache': false,
        'forceHideSimpleEmbedContent': false,
        'enableSwipeActions': false,
        'useAlternateEmbedColors': false
    };
    var2.DEFAULT_OPTIONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);