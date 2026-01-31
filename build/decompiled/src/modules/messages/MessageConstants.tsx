// modules/messages/MessageConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var9 = 0;
    var3 = var11[var9];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var3 = var3.ChannelStreamTypes;
    var _closure1_slot0 = var3;
    var5 = var1.Object;
    var3 = var5.freeze;
    var1 = {
        'referencedAvatarProfile': false,
        'referencedUsernameProfile': false,
        'interactionAvatarProfile': false,
        'interactionUsernameProfile': false,
        'interactionData': false,
        'avatarProfile': false,
        'usernameProfile': false,
        'emojiPicker': false,
        'emojiBurstPicker': false,
        'moreUtilities': false,
        'contextMenu': false
    };
    var8 = var3.bind(var5)(var1);
    var6 = {};
    var1 = 'ERROR_SOURCE_UNKNOWN';
    var6.ERROR_SOURCE_UNKNOWN = var1;
    var1 = 'PRECOMPRESSION_SUM_TOO_LARGE';
    var6.PRECOMPRESSION_SUM_TOO_LARGE = var1;
    var1 = 'PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE';
    var6.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = var1;
    var1 = 'POSTCOMPRESSION_SUM_TOO_LARGE';
    var6.POSTCOMPRESSION_SUM_TOO_LARGE = var1;
    var1 = 'POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE';
    var6.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = var1;
    var1 = 'UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR';
    var6.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = var1;
    var1 = 'EXPLICIT_CONTENT';
    var6.EXPLICIT_CONTENT = var1;
    var5 = {};
    var1 = 'a';
    var5.SYSTEM_DM_TAG_SYSTEM_TYPE = var1;
    var1 = 'b';
    var5.BOT_TAG_SERVER_TYPE = var1;
    var1 = 'd';
    var5.BOT_TAG_BOT_TYPE = var1;
    var1 = 'g';
    var5.POLL_TYPE = var1;
    var3 = {};
    var12 = {};
    var1 = 1;
    var13 = var11[var1];
    var13 = var7.bind(var0)(var13);
    var13 = var13.Millis;
    var14 = var13.SECOND;
    var13 = 10;
    var13 = var13 * var14;
    var12.response = var13;
    var13 = var11[var1];
    var13 = var7.bind(var0)(var13);
    var13 = var13.Millis;
    var13 = var13.MINUTE;
    var13 = var1 * var13;
    var12.deadline = var13;
    var3.timeout = var12;
    var12 = 2;
    var12 = var11[var12];
    var13 = var7.bind(var0)(var12);
    var12 = var11[var1];
    var12 = var7.bind(var0)(var12);
    var12 = var12.Millis;
    var14 = var12.SECOND;
    var12 = 0.5;
    var12 = var12 * var14;
    var1 = var11[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var7 = var1.SECOND;
    var1 = 60;
    var16 = var1 * var7;
    var7 = var13.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var13
        }
    });
    var18 = var7;
    var17 = var12;
    var1 = new var18[var13](var17, var16, var15);
    var1 = var1 instanceof Object ? var1 : var7;
    var3.backoff = var1;
    var1 = 8;
    var3.retries = var1;
    var1 = {};
    var7 = 'push_notification';
    var1.PUSH_NOTIFICATION = var7;
    var7 = 'chat_input';
    var1.CHAT_INPUT = var7;
    var7 = 'share_modal';
    var1.SHARE_MODAL = var7;
    var7 = 'voice_message';
    var1.VOICE_MESSAGE = var7;
    var7 = 'thread_creation';
    var1.THREAD_CREATION = var7;
    var7 = 'forwarding';
    var1.FORWARDING = var7;
    var7 = 'user_profile';
    var1.USER_PROFILE = var7;
    var7 = 'explicit_retry';
    var1.RETRY = var7;
    var7 = 'overlay';
    var1.OVERLAY = var7;
    var7 = 'activity_share';
    var1.ACTIVITY_SHARE = var7;
    var7 = 'icymi';
    var1.ICYMI = var7;
    var7 = 'instant_upload';
    var1.INSTANT_UPLOAD = var7;
    var7 = 'app_command';
    var1.APP_COMMAND = var7;
    var7 = 'private_message_command';
    var1.PRIVATE_MESSAGE_COMMAND = var7;
    var7 = 'poll_creation';
    var1.POLL_CREATION = var7;
    var7 = 'share_custom_theme';
    var1.SHARE_CUSTOM_THEME = var7;
    var7 = 'channel_prompt';
    var1.CHANNEL_PROMPT = var7;
    var7 = 'gif_reply';
    var1.GIF_REPLY = var7;
    var7 = 'sticker_reply';
    var1.STICKER_REPLY = var7;
    var7 = 'send_wave';
    var1.SEND_WAVE = var7;
    var7 = 'gifting';
    var1.GIFTING = var7;
    var7 = 'content_inventory_memberlist';
    var1.CONTENT_INVENTORY_MEMBERLIST = var7;
    var7 = 'greet';
    var1.GREET = var7;
    var7 = 'social_layer_storefront';
    var1.SOCIAL_LAYER_STOREFRONT = var7;
    var7 = 'other';
    var1.OTHER = var7;
    var7 = 3;
    var7 = var11[var7];
    var11 = var10.bind(var0)(var7);
    var10 = var11.fileFinishedImporting;
    var7 = 'modules/messages/MessageConstants.tsx';
    var7 = var10.bind(var11)(var7);
    var7 = [0, 4, 8, 16, 24];
    var2.MESSAGE_GROUP_SPACING = var7;
    var7 = 16;
    var2.DEFAULT_COZY_SPACING = var7;
    var2.DEFAULT_COMPACT_SPACING = var9;
    var2.DEFAULT_POPOUTS = var8;
    var2.MESSAGE_PADDING = var7;
    var2.PLACEHOLDER_BUFFER = var7;
    var7 = 32;
    var2.NEW_MESSAGE_BAR_BUFFER = var7;
    var7 = 64;
    var2.NEW_MESSAGE_BAR_BUFFER_LARGE = var7;
    var7 = '---new-messages-bar';
    var2.NEW_MESSAGE_BAR_ID = var7;
    var7 = 'SPOILER_';
    var2.SPOILER_ATTACHMENT_PREFIX = var7;
    var2.FileUploadErrorTypes = var6;
    var2.MessageTagTypes = var5;
    var5 = 209715200;
    var2.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE = var5;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot0;
        var0 = var0.MESSAGE;
        var0 = var1 === var0;
        return var0;
    };
    var2.isChannelStreamMessage = var4;
    var2.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS = var3;
    var2.MessageSendLocation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 667, 561, 2]);