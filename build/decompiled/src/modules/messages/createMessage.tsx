// modules/messages/createMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: userRecordToServer, environment: var1
        var0 = arg0;
        var6 = var0.id;
        var5 = var0.username;
        var4 = var0.avatar;
        var3 = var0.discriminator;
        var2 = var0.bot;
        var1 = var0.globalName;
        var0 = {};
        var0.id = var6;
        var0.username = var5;
        var0.avatar = var4;
        var0.discriminator = var3;
        var0.bot = var2;
        var0.global_name = var1;
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var4 = 0;
    var8 = var6[var4];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MessageStates;
    var _closure1_slot7 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot8 = var7;
    var7 = var4.LOCAL_BOT_ID;
    var _closure1_slot9 = var7;
    var7 = var4.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot10 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/createMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: createMessage, environment: var1
        _fun54212: for (var _fun54212_ip = 0;;) switch (_fun54212_ip) {
            case 0:
                var9 = arg0;
                var13 = var9.channelId;
                var14 = var9.content;
                var8 = var9.tts;
                var19 = undefined;
                if (!(var8 === var19)) {
                    _fun54212_ip = 27;
                    continue _fun54212
                }
            case 25:
                var8 = false;
            case 27:
                var15 = var9.type;
                if (!(var15 === var19)) {
                    _fun54212_ip = 49;
                    continue _fun54212
                }
            case 36:
                var0 = _closure1_slot8;
                var15 = var0.DEFAULT;
            case 49:
                var7 = var9.messageReference;
                var0 = var9.allowedMentions;
                var16 = var9.author;
                var6 = var9.flags;
                var5 = var9.nonce;
                var4 = var9.poll;
                var3 = var9.sharedCustomTheme;
                var2 = var9.changelogId;
                var1 = var9.giftingPrompt;
                var9 = var9.state;
                var12 = new Array(0);
                var11 = _closure1_slot8;
                var11 = var11.REPLY;
                if (!(var15 === var11)) {
                    _fun54212_ip = 255;
                    continue _fun54212
                }
            case 131:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 4;
                var11 = var18[var11];
                var20 = var17.bind(var19)(var11);
                var11 = null;
                var18 = var11 != var7;
                var17 = 'Replies must have a message reference';
                var17 = var20.bind(var19)(var18, var17);
                if (!(var11 != var0)) {
                    _fun54212_ip = 182;
                    continue _fun54212
                }
            case 173:
                var0 = var0.replied_user;
                if (!var0) {
                    _fun54212_ip = 255;
                    continue _fun54212
                }
            case 182:
                var17 = _closure1_slot3;
                var0 = var17.getMessageByReference;
                var0 = var0.bind(var17)(var7);
                var11 = var11 == var0;
                var17 = undefined;
                if (var11) {
                    _fun54212_ip = 211;
                    continue _fun54212
                }
            case 206:
                var17 = var0.state;
            case 211:
                var11 = _closure1_slot4;
                var11 = var11.LOADED;
                if (!(var17 === var11)) {
                    _fun54212_ip = 255;
                    continue _fun54212
                }
            case 225:
                var11 = var12.push;
                var17 = _closure1_slot12;
                var0 = var0.message;
                var0 = var0.author;
                var0 = var17.bind(var19)(var0);
                var0 = var11.bind(var12)(var0);
            case 255:
                var17 = null;
                if (!(var17 == var16)) {
                    _fun54212_ip = 274;
                    continue _fun54212
                }
            case 261:
                var11 = _closure1_slot6;
                var0 = var11.getCurrentUser;
                var16 = var0.bind(var11)();
            case 274:
                var0 = _closure1_slot5;
                var0 = var16 instanceof var0;
                var11 = var16;
                if (!var0) {
                    _fun54212_ip = 297;
                    continue _fun54212
                }
            case 288:
                var0 = _closure1_slot12;
                var11 = var0.bind(var19)(var16);
            case 297:
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 4;
                var0 = var18[var0];
                var18 = var16.bind(var19)(var0);
                var16 = var17 != var11;
                var0 = 'createMessage: author cannot be undefined';
                var0 = var18.bind(var19)(var16, var0);
                var0 = {};
                var16 = var5;
                if (!(var17 == var16)) {
                    _fun54212_ip = 372;
                    continue _fun54212
                }
            case 342:
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = 5;
                var17 = var20[var17];
                var18 = var18.bind(var19)(var17);
                var17 = var18.createNonce;
                var16 = var17.bind(var18)();
            case 372:
                var0.id = var16;
                var0.type = var15;
                var0.content = var14;
                var0.channel_id = var13;
                var0.author = var11;
                var11 = new Array(0);
                var0.attachments = var11;
                var11 = new Array(0);
                var0.embeds = var11;
                var11 = false;
                var0.pinned = var11;
                var0.mentions = var12;
                var12 = new Array(0);
                var0.mention_channels = var12;
                var12 = new Array(0);
                var0.mention_roles = var12;
                var0.mention_everyone = var11;
                var11 = global;
                var11 = var11.Date;
                var12 = var11.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var11
                    }
                });
                var23 = var12;
                var11 = new var23[var11](var22);
                var12 = var11 instanceof Object ? var11 : var12;
                var11 = var12.toISOString;
                var11 = var11.bind(var12)();
                var0.timestamp = var11;
                if (var9) {
                    _fun54212_ip = 502;
                    continue _fun54212
                }
            case 492:
                var10 = _closure1_slot7;
                var9 = var10.SENDING;
            case 502:
                var0.state = var9;
                var0.tts = var8;
                var0.message_reference = var7;
                var7 = new Array(0);
                var0.message_snapshots = var7;
                var0.flags = var6;
                var0.nonce = var5;
                var0.poll = var4;
                var0.shared_client_theme = var3;
                var0.changelog_id = var2;
                var0.gifting_prompt = var1;
                return var0;
        }
    };
    var2.default = var4;
    var2.userRecordToServer = var3;
    var1 = function(arg0) { // Original name: createBotMessage, environment: var1
        _fun54213: for (var _fun54213_ip = 0;;) switch (_fun54213_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.messageId;
                var5 = var0.channelId;
                var6 = var0.content;
                var2 = var0.embeds;
                var1 = var0.loggingName;
                var0 = {};
                var4 = null;
                if (!(var4 == var3)) {
                    _fun54213_ip = 73;
                    continue _fun54213
                }
            case 38:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 5;
                var8 = var8[var7];
                var7 = undefined;
                var8 = var9.bind(var7)(var8);
                var7 = var8.createNonce;
                var3 = var7.bind(var8)();
            case 73:
                var0.id = var3;
                var7 = _closure1_slot8;
                var7 = var7.DEFAULT;
                var0.type = var7;
                var7 = _closure1_slot11;
                var7 = var7.EPHEMERAL;
                var0.flags = var7;
                var0.content = var6;
                var0.channel_id = var5;
                var5 = {
                    'id': null,
                    'username': 'Clyde',
                    'discriminator': null,
                    'avatar': 'clyde',
                    'bot': true
                };
                var6 = _closure1_slot9;
                var5.id = var6;
                var6 = _closure1_slot10;
                var5.discriminator = var6;
                var0.author = var5;
                var5 = new Array(0);
                var0.attachments = var5;
                if (!(var4 == var2)) {
                    _fun54213_ip = 172;
                    continue _fun54213
                }
            case 168:
                var2 = new Array(0);
            case 172:
                var0.embeds = var2;
                var2 = false;
                var0.pinned = var2;
                var4 = new Array(0);
                var0.mentions = var4;
                var4 = new Array(0);
                var0.mention_channels = var4;
                var4 = new Array(0);
                var0.mention_roles = var4;
                var0.mention_everyone = var2;
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var5;
                var4 = new var11[var4](var10);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = var5.toISOString;
                var4 = var4.bind(var5)();
                var0.timestamp = var4;
                var3 = _closure1_slot7;
                var3 = var3.SENT;
                var0.state = var3;
                var0.tts = var2;
                var0.loggingName = var1;
                return var0;
        }
    };
    var2.createBotMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4231, 1620, 1613, 660, 44, 6505, 2]);