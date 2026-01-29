// modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: createRequestToSpeakEphemeralIndication, environment: var1
        _fun55699: for (var _fun55699_ip = 0;;) switch (_fun55699_ip) {
            case 0:
                var11 = arg0;
                var1 = var11.hasFlag;
                var0 = _closure1_slot7;
                var0 = var0.EPHEMERAL;
                var0 = var1.bind(var11)(var0);
                if (!var0) {
                    _fun55699_ip = 49;
                    continue _fun55699
                }
            case 30:
                var1 = var11.type;
                var0 = _closure1_slot8;
                var0 = var0.STAGE_RAISE_HAND;
                if (!(var1 !== var0)) {
                    _fun55699_ip = 53;
                    continue _fun55699
                }
            case 49:
                var0 = undefined;
                return var0;
            case 53:
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var3 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var9 = var3.intl;
                var8 = var9.formatToParts;
                var3 = var6[var1];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var7 = var3["qDAX++"];
                var3 = {};
                var10 = {};
                var12 = 'bindDismissMessage';
                var10.action = var12;
                var10.message = var11;
                var3.handleDelete = var10;
                var3 = var8.bind(var9)(var7, var3);
                var0.content = var3;
                var7 = _closure1_slot1;
                var3 = 5;
                var3 = var6[var3];
                var7 = var7.bind(var4)(var3);
                var3 = var7.getArticleURL;
                var2 = _closure1_slot6;
                var2 = var2.EPHEMERAL_MESSAGES;
                var2 = var3.bind(var7)(var2);
                var0.helpArticleLink = var2;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.htHOrp;
                var1 = var2.bind(var3)(var1);
                var0.helpButtonAccessibilityLabel = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot6 = var6;
    var6 = var3.MessageFlags;
    var _closure1_slot7 = var6;
    var6 = var3.MessageTypes;
    var _closure1_slot8 = var6;
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createStageRaiseHandSystemMessage, environment: var1
        _fun55700: for (var _fun55700_ip = 0;;) switch (_fun55700_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.message;
                var18 = var3.roleStyle;
                var15 = var6.author;
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 6;
                var0 = var12[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var6);
                var11 = var0.nick;
                var16 = var0.colorString;
                var13 = var0.colorStrings;
                var10 = var0.guildId;
                var5 = _closure1_slot4;
                var4 = var5.getChannel;
                var0 = var6.channel_id;
                var7 = var4.bind(var5)(var0);
                var5 = _closure1_slot5;
                var4 = var5.can;
                var0 = _closure1_slot9;
                var0 = var0.MUTE_MEMBERS;
                var5 = var4.bind(var5)(var0, var7);
                var8 = _closure1_slot3;
                var7 = var8.getParticipant;
                var4 = var6.channel_id;
                var0 = var6.author;
                var0 = var0.id;
                var4 = var7.bind(var8)(var4, var0);
                var0 = global;
                var9 = var0.Date;
                var8 = _closure1_slot1;
                var7 = 7;
                var7 = var12[var7];
                var12 = var8.bind(var2)(var7);
                var8 = var12.extractTimestamp;
                var7 = var6.id;
                var21 = var8.bind(var12)(var7);
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var22 = var8;
                var7 = new var22[var9](var21, var20);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.toISOString;
                var7 = var7.bind(var8)();
                var9 = var0.Date;
                var12 = null;
                var0 = var12 == var4;
                var8 = undefined;
                if (var0) {
                    _fun55700_ip = 264;
                    continue _fun55700
                }
            case 243:
                var0 = var4.voiceState;
                var14 = var12 == var0;
                var8 = undefined;
                if (var14) {
                    _fun55700_ip = 264;
                    continue _fun55700
                }
            case 258:
                var8 = var0.requestToSpeakTimestamp;
            case 264:
                var14 = var12 != var8;
                var0 = 0;
                if (!var14) {
                    _fun55700_ip = 276;
                    continue _fun55700
                }
            case 273:
                var0 = var8;
            case 276:
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var22 = var8;
                var21 = var0;
                var0 = new var22[var9](var21, var20);
                var8 = var0 instanceof Object ? var0 : var8;
                var0 = var8.toISOString;
                var0 = var0.bind(var8)();
                var0 = var7 === var0;
                if (!var5) {
                    _fun55700_ip = 367;
                    continue _fun55700
                }
            case 316:
                var8 = var12 == var4;
                var7 = undefined;
                if (var8) {
                    _fun55700_ip = 331;
                    continue _fun55700
                }
            case 325:
                var7 = var4.rtsState;
            case 331:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 8;
                var4 = var9[var4];
                var4 = var8.bind(var2)(var4);
                var4 = var4.RequestToSpeakStates;
                var4 = var4.REQUESTED_TO_SPEAK;
                var5 = var7 === var4;
            case 367:
                if (!var5) {
                    _fun55700_ip = 373;
                    continue _fun55700
                }
            case 370:
                var5 = var0;
            case 373:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var9 = var8.bind(var2)(var0);
                var4 = var9.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var15.id;
                var14 = var4.bind(var9)(var10, var0, var18);
                var0 = {};
                var4 = 4;
                var9 = var7[var4];
                var9 = var8.bind(var2)(var9);
                var10 = var9.intl;
                var9 = var10.formatToParts;
                var7 = var7[var4];
                var7 = var8.bind(var2)(var7);
                var7 = var7.t;
                var8 = var7.M87x7Y;
                var7 = {};
                var7.username = var11;
                var11 = {};
                var17 = 'bindUserMenu';
                var11.action = var17;
                var15 = var15.id;
                var11.userId = var15;
                var17 = 'username';
                var15 = null;
                if (!(var17 === var18)) {
                    _fun55700_ip = 498;
                    continue _fun55700
                }
            case 495:
                var15 = var16;
            case 498:
                var11.linkColor = var15;
                var12 = null;
                if (!var14) {
                    _fun55700_ip = 511;
                    continue _fun55700
                }
            case 508:
                var12 = var13;
            case 511:
                var11.roleColors = var12;
                var12 = var6.channel_id;
                var11.messageChannelId = var12;
                var12 = true;
                var11.medium = var12;
                var7.usernameOnClick = var11;
                var7 = var9.bind(var10)(var8, var7);
                var0.content = var7;
                var0.showInviteToSpeakButton = var5;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = var5[var4];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var5[var4];
                var4 = var9.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.f0T7hI;
                var4 = var7.bind(var8)(var4);
                var0.buttonLabel = var4;
                var4 = _closure1_slot10;
                var4 = var4.bind(var2)(var6);
                var0.ephemeralIndication = var4;
                var4 = _closure1_slot1;
                var1 = 10;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var20 = var1.bind(var2)(var3);
                var21 = var0;
                var1 = copyDataProperties(var21, var20);
                return var0;
        }
    };
    var2.createStageRaiseHandSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4203, 1372, 3050, 660, 1234, 1675, 6634, 21, 4196, 6635, 6636, 2]);