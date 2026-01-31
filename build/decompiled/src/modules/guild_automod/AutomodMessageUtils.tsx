// modules/guild_automod/AutomodMessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var1 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function(arg0, arg1) { // Original name: getEmbedFieldFromMessage, environment: var2
        _fun40740: for (var _fun40740_ip = 0;;) switch (_fun40740_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg0;
                var6 = var0.embeds;
                var2 = null;
                if (!(var2 == var6)) {
                    _fun40740_ip = 28;
                    continue _fun40740
                }
            case 24:
                var6 = new Array(0);
            case 28:
                var5 = _closure1_slot2;
                var3 = undefined;
                var4 = 1;
                var5 = var5.bind(var3)(var6, var4);
                var4 = 0;
                var4 = var5[var4];
                if (!(var2 != var4)) {
                    _fun40740_ip = 94;
                    continue _fun40740
                }
            case 56:
                var6 = var4.type;
                var5 = _closure1_slot7;
                var5 = var5.AUTO_MODERATION_MESSAGE;
                if (!(var6 !== var5)) {
                    _fun40740_ip = 152;
                    continue _fun40740
                }
            case 75:
                var5 = var4.type;
                var0 = _closure1_slot7;
                var0 = var0.AUTO_MODERATION_NOTIFICATION;
                if (!(var5 !== var0)) {
                    _fun40740_ip = 96;
                    continue _fun40740
                }
            case 94:
                return var3;
            case 96:
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun40740_ip = 150;
                    continue _fun40740
                }
            case 105:
                var7 = var4.fields;
                var5 = var2 == var7;
                var0 = undefined;
                if (var5) {
                    _fun40740_ip = 150;
                    continue _fun40740
                }
            case 120:
                var6 = var7.find;
                var5 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.rawName;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun40740_ip = 150;
                    continue _fun40740
                }
            case 144:
                var0 = var5.rawValue;
            case 150:
                return var0;
            case 152:
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun40740_ip = 206;
                    continue _fun40740
                }
            case 161:
                var5 = var4.fields;
                var4 = var2 == var5;
                var0 = undefined;
                if (var4) {
                    _fun40740_ip = 206;
                    continue _fun40740
                }
            case 176:
                var4 = var5.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.rawName;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun40740_ip = 206;
                    continue _fun40740
                }
            case 200:
                var0 = var1.rawValue;
            case 206:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getMessageContentFromEmbed, environment: var2
        _fun40743: for (var _fun40743_ip = 0;;) switch (_fun40743_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.embeds;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun40743_ip = 19;
                    continue _fun40743
                }
            case 15:
                var4 = new Array(0);
            case 19:
                var3 = _closure1_slot2;
                var1 = undefined;
                var2 = 1;
                var3 = var3.bind(var1)(var4, var2);
                var2 = 0;
                var2 = var3[var2];
                var3 = var0 == var2;
                if (var3) {
                    _fun40743_ip = 56;
                    continue _fun40743
                }
            case 50:
                var1 = var2.rawDescription;
            case 56:
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun40743_ip = 70;
                    continue _fun40743
                }
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: getDecisionOutcomeFromMessage, environment: var2
        _fun40744: for (var _fun40744_ip = 0;;) switch (_fun40744_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var2 = var0.DECISION_OUTCOME;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40744_ip = 58;
                    continue _fun40744
                }
            case 56:
                return var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: getQuarantineTypeFromMessage, environment: var2
        _fun40745: for (var _fun40745_ip = 0;;) switch (_fun40745_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var2 = var0.QUARANTINE_USER;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40745_ip = 58;
                    continue _fun40745
                }
            case 56:
                return var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getQuarantineActionFromMessage, environment: var2
        _fun40746: for (var _fun40746_ip = 0;;) switch (_fun40746_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var2 = var0.QUARANTINE_USER_ACTION;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40746_ip = 58;
                    continue _fun40746
                }
            case 56:
                return var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getProfileUpdateTypeFromMessage, environment: var2
        _fun40747: for (var _fun40747_ip = 0;;) switch (_fun40747_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var2 = var0.BLOCK_PROFILE_UPDATE_TYPE;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40747_ip = 58;
                    continue _fun40747
                }
            case 56:
                return var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: getQuarantineEventFromMessage, environment: var2
        _fun40748: for (var _fun40748_ip = 0;;) switch (_fun40748_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var2 = var0.QUARANTINE_EVENT;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun40748_ip = 58;
                    continue _fun40748
                }
            case 56:
                return var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _getUserProfileRuleHeaderText, environment: var2
        _fun40749: for (var _fun40749_ip = 0;;) switch (_fun40749_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = arg2;
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 7;
                var0 = var0[var7];
                var5 = undefined;
                var0 = var6.bind(var5)(var0);
                var0 = var0.AutomodQuarantineUserActionMessageEmbedKeys;
                var0 = var0.BLOCK_PROFILE_UPDATE;
                if (!(var0 !== var2)) {
                    _fun40749_ip = 565;
                    continue _fun40749
                }
            case 53:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var6.bind(var5)(var0);
                var0 = var0.AutomodQuarantineUserActionMessageEmbedKeys;
                var0 = var0.QUARANTINE_USER;
                if (!(var0 !== var2)) {
                    _fun40749_ip = 180;
                    continue _fun40749
                }
            case 86:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var6.bind(var5)(var0);
                var0 = var0.AutomodQuarantineUserActionMessageEmbedKeys;
                var0 = var0.BLOCK_GUEST_JOIN;
                if (!(var0 !== var2)) {
                    _fun40749_ip = 121;
                    continue _fun40749
                }
            case 119:
                return var5;
            case 121:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 9;
                var2 = var8[var0];
                var2 = var7.bind(var5)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.MrYeyS;
                var0 = var2.bind(var6)(var0);
                return var0;
            case 180:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 10;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodQuarantineEventMessageEmbedKeys;
                var0 = var0.MESSAGE_SEND;
                if (!(var0 !== var4)) {
                    _fun40749_ip = 506;
                    continue _fun40749
                }
            case 219:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodQuarantineEventMessageEmbedKeys;
                var0 = var0.GUILD_JOIN;
                if (!(var0 !== var4)) {
                    _fun40749_ip = 447;
                    continue _fun40749
                }
            case 255:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodQuarantineEventMessageEmbedKeys;
                var0 = var0.USERNAME_UPDATE;
                if (!(var0 !== var4)) {
                    _fun40749_ip = 388;
                    continue _fun40749
                }
            case 288:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodQuarantineEventMessageEmbedKeys;
                var2 = var0.CLAN_TAG_UPDATE;
                var0 = undefined;
                if (!(var2 === var4)) {
                    _fun40749_ip = 563;
                    continue _fun40749
                }
            case 326:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var4 = var8[var2];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.qV4K6j;
                var0 = var4.bind(var6)(var2);
                _fun40749_ip = 563;
                continue _fun40749;
            case 388:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var4 = var8[var2];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.KNSkC6;
                var0 = var4.bind(var6)(var2);
                _fun40749_ip = 563;
                continue _fun40749;
            case 447:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var4 = var8[var2];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.m9wWzo;
                var0 = var4.bind(var6)(var2);
                _fun40749_ip = 563;
                continue _fun40749;
            case 506:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var4 = var8[var2];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.PmSMMS;
                var0 = var4.bind(var6)(var2);
            case 563:
                return var0;
            case 565:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 8;
                var0 = var0[var4];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodBlockProfileUpdateMessageEmbedKeys;
                var0 = var0.NICKNAME_UPDATE;
                if (!(var0 !== var3)) {
                    _fun40749_ip = 695;
                    continue _fun40749
                }
            case 601:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var5)(var0);
                var0 = var0.AutomodBlockProfileUpdateMessageEmbedKeys;
                var2 = var0.NICKNAME_RESET;
                var0 = undefined;
                if (!(var2 === var3)) {
                    _fun40749_ip = 752;
                    continue _fun40749
                }
            case 636:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 9;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["7u/rlU"];
                var0 = var3.bind(var4)(var2);
                _fun40749_ip = 752;
                continue _fun40749;
            case 695:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.t98DPb;
                var0 = var2.bind(var3)(var1);
            case 752:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var4 = function(arg0, arg1) { // Original name: getChannelName, environment: var2
        _fun40750: for (var _fun40750_ip = 0;;) switch (_fun40750_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                if (var0) {
                    _fun40750_ip = 71;
                    continue _fun40750
                }
            case 9:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 9;
                var1 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["/YzI63"];
                var0 = var1.bind(var2)(var0);
                _fun40750_ip = 154;
                continue _fun40750;
            case 71:
                var2 = null;
                var4 = var2 == var3;
                var6 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun40750_ip = 89;
                    continue _fun40750
                }
            case 84:
                var1 = var3.name;
            case 89:
                if (!(var2 == var1)) {
                    _fun40750_ip = 151;
                    continue _fun40750
                }
            case 93:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 9;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.J90oLW;
                var1 = var3.bind(var4)(var2);
            case 151:
                var0 = var1;
            case 154:
                return var0;
        }
    };
    var _closure1_slot19 = var4;
    var3 = function(arg0) { // Original name: extractAutomodMessageFields, environment: var2
        _fun40751: for (var _fun40751_ip = 0;;) switch (_fun40751_ip) {
            case 0:
                var7 = arg0;
                var6 = _closure1_slot11;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 6;
                var0 = var9[var5];
                var1 = undefined;
                var0 = var8.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var0 = var0.CHANNEL_ID;
                var3 = var6.bind(var1)(var7, var0);
                var0 = var9[var5];
                var0 = var8.bind(var1)(var0);
                var0 = var0.AutomodMessageEmbedKeys;
                var0 = var0.ALERT_ACTIONS_EXECUTION;
                var10 = var6.bind(var1)(var7, var0);
                var0 = 15;
                var0 = var9[var0];
                var2 = var8.bind(var1)(var0);
                var0 = var2.parseAlertActionsExecution;
                var2 = var0.bind(var2)(var10);
                var0 = {};
                var10 = _closure1_slot12;
                var10 = var10.bind(var1)(var7);
                var0.content = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.RULE_NAME;
                var10 = var6.bind(var1)(var7, var10);
                var0.ruleName = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.DECISION_ID;
                var10 = var6.bind(var1)(var7, var10);
                var0.decisionId = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.KEYWORD;
                var10 = var6.bind(var1)(var7, var10);
                var0.keyword = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.KEYWORD_MATCHED_CONTENT;
                var10 = var6.bind(var1)(var7, var10);
                var0.keywordMatchedContent = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.FLAGGED_MESSAGE_ID;
                var10 = var6.bind(var1)(var7, var10);
                var0.flaggedMessageId = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.TIMEOUT_DURATION;
                var10 = var6.bind(var1)(var7, var10);
                var0.timeoutDuration = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.QUARANTINE_USER;
                var10 = var6.bind(var1)(var7, var10);
                var0.quarantineType = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.QUARANTINE_USER_ACTION;
                var10 = var6.bind(var1)(var7, var10);
                var0.quarantineAction = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.DECISION_REASON;
                var10 = var6.bind(var1)(var7, var10);
                var0.decisionReason = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.APPLICATION_NAME;
                var10 = var6.bind(var1)(var7, var10);
                var0.applicationName = var10;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.AutomodMessageEmbedKeys;
                var10 = var10.INTERACTION_USER_ID;
                var10 = var6.bind(var1)(var7, var10);
                var0.interactionUserId = var10;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodMessageEmbedKeys;
                var5 = var5.INTERACTION_CALLBACK_TYPE;
                var5 = var6.bind(var1)(var7, var5);
                var0.interactionCallbackType = var5;
                var5 = _closure1_slot4;
                var4 = var5.getChannel;
                var4 = var4.bind(var5)(var3);
                var0.embedChannel = var4;
                var0.embedChannelId = var3;
                var3 = null;
                var3 = var3 != var2;
                if (!var3) {
                    _fun40751_ip = 545;
                    continue _fun40751
                }
            case 542:
                var1 = var2;
            case 545:
                var0.alertActionsExecution = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var1, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.MessageEmbedTypes;
    var _closure1_slot7 = var8;
    var8 = var5.MessageTypes;
    var _closure1_slot8 = var8;
    var8 = var5.NOOP_NULL;
    var _closure1_slot9 = var8;
    var5 = var5.Permissions;
    var _closure1_slot10 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_automod/AutomodMessageUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Original name: useAutomodMessageFields, environment: var2
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot20;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var4.bind(var5)(var1, var3);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var6 = var1.embedChannelId;
        var2 = new Array(1);
        var2[0] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getChannel;
            var0 = _closure2_slot1;
            var0 = var0.embedChannelId;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var4.bind(var5)(var3, var0, var2);
        var0 = {};
        var9 = var0;
        var8 = var1;
        var1 = copyDataProperties(var9, var8);
        var1 = 'embedChannel';
        var0[var1] = var2;
        return var0;
    };
    var1.default = var5;
    var5 = function(arg0) { // Original name: isAutomodMessageRecord, environment: var2
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot8;
        var0 = var0.AUTO_MODERATION_ACTION;
        var0 = var1 === var0;
        return var0;
    };
    var1.isAutomodMessageRecord = var5;
    var5 = function(arg0) { // Original name: isAutomodNotification, environment: var2
        _fun40756: for (var _fun40756_ip = 0;;) switch (_fun40756_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.embeds;
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun40756_ip = 38;
                    continue _fun40756
                }
            case 20:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot7;
                    var0 = var0.AUTO_MODERATION_NOTIFICATION;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 38:
                return var0;
        }
    };
    var1.isAutomodNotification = var5;
    var5 = function(arg0, arg1, arg2) { // Original name: getActionHeaderTextMobile, environment: var2
        _fun40758: for (var _fun40758_ip = 0;;) switch (_fun40758_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var0 = _closure1_slot16;
                var10 = undefined;
                var5 = var0.bind(var10)(var8);
                var0 = _closure1_slot15;
                var4 = var0.bind(var10)(var8);
                var0 = _closure1_slot17;
                var2 = var0.bind(var10)(var8);
                var0 = _closure1_slot14;
                var0 = var0.bind(var10)(var8);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun40758_ip = 71;
                    continue _fun40758
                }
            case 53:
                var0 = _closure1_slot18;
                var0 = var0.bind(var10)(var5, var4, var2);
                if (!(var1 == var0)) {
                    _fun40758_ip = 777;
                    continue _fun40758
                }
            case 71:
                var2 = _closure1_slot13;
                var4 = var2.bind(var10)(var8);
                var6 = _closure1_slot11;
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 6;
                var5 = var11[var2];
                var5 = var9.bind(var10)(var5);
                var5 = var5.AutomodMessageEmbedKeys;
                var5 = var5.INTERACTION_CALLBACK_TYPE;
                var5 = var6.bind(var10)(var8, var5);
                var2 = var11[var2];
                var2 = var9.bind(var10)(var2);
                var2 = var2.AutomodMessageEmbedKeys;
                var2 = var2.APPLICATION_NAME;
                var9 = var6.bind(var10)(var8, var2);
                if (!(var1 == var9)) {
                    _fun40758_ip = 310;
                    continue _fun40758
                }
            case 156:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 12;
                var2 = var8[var2];
                var2 = var6.bind(var10)(var2);
                var2 = var2.AutomodDecisionOutcomeEmbedKeys;
                var2 = var2.BLOCKED;
                if (!(var4 === var2)) {
                    _fun40758_ip = 251;
                    continue _fun40758
                }
            case 192:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 9;
                var6 = var12[var2];
                var6 = var11.bind(var10)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                var2 = var2["2kuGkD"];
                var2 = var6.bind(var8)(var2);
                _fun40758_ip = 308;
                continue _fun40758;
            case 251:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var6 = 9;
                var8 = var13[var6];
                var8 = var12.bind(var10)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var6 = var13[var6];
                var6 = var12.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.Oo38tv;
                var2 = var8.bind(var11)(var6);
            case 308:
                return var2;
            case 310:
                var8 = _closure1_slot6;
                var6 = var8.getUser;
                var2 = arg2;
                var8 = var6.bind(var8)(var2);
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 11;
                var2 = var11[var2];
                var2 = var6.bind(var10)(var2);
                var2 = var2.AutomodInteractionCallbackTypeEmbedKeys;
                var2 = var2.MODAL;
                if (!(var5 === var2)) {
                    _fun40758_ip = 371;
                    continue _fun40758
                }
            case 364:
                if (!(var1 == var8)) {
                    _fun40758_ip = 564;
                    continue _fun40758
                }
            case 371:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 12;
                var1 = var5[var1];
                var1 = var2.bind(var10)(var1);
                var1 = var1.AutomodDecisionOutcomeEmbedKeys;
                var1 = var1.BLOCKED;
                if (!(var4 === var1)) {
                    _fun40758_ip = 484;
                    continue _fun40758
                }
            case 407:
                var2 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 9;
                var5 = var11[var1];
                var5 = var2.bind(var10)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var10)(var1);
                var1 = var1.t;
                var2 = var1.I0FiWp;
                var1 = {};
                var1.applicationName = var9;
                var11 = var7.username;
                var1.integrationOwner = var11;
                var1 = var5.bind(var6)(var2, var1);
                _fun40758_ip = 559;
                continue _fun40758;
            case 484:
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 9;
                var6 = var12[var2];
                var6 = var5.bind(var10)(var6);
                var11 = var6.intl;
                var6 = var11.formatToPlainString;
                var2 = var12[var2];
                var2 = var5.bind(var10)(var2);
                var2 = var2.t;
                var5 = var2["0Kmtr7"];
                var2 = {};
                var2.applicationName = var9;
                var12 = var7.username;
                var2.integrationOwner = var12;
                var1 = var6.bind(var11)(var5, var2);
            case 559:
                _fun40758_ip = 775;
                continue _fun40758;
            case 564:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 12;
                var2 = var6[var2];
                var2 = var5.bind(var10)(var2);
                var2 = var2.AutomodDecisionOutcomeEmbedKeys;
                var2 = var2.BLOCKED;
                if (!(var4 === var2)) {
                    _fun40758_ip = 687;
                    continue _fun40758
                }
            case 600:
                var4 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var5 = var11[var2];
                var5 = var4.bind(var10)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var11[var2];
                var2 = var4.bind(var10)(var2);
                var2 = var2.t;
                var4 = var2["MCK/t7"];
                var2 = {};
                var2.applicationName = var9;
                var11 = var8.username;
                var2.interactionUser = var11;
                var11 = var7.username;
                var2.integrationOwner = var11;
                var2 = var5.bind(var6)(var4, var2);
                _fun40758_ip = 772;
                continue _fun40758;
            case 687:
                var4 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var5 = var11[var3];
                var5 = var4.bind(var10)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var11[var3];
                var3 = var4.bind(var10)(var3);
                var3 = var3.t;
                var4 = var3["Xy2Iw+"];
                var3 = {};
                var3.applicationName = var9;
                var8 = var8.username;
                var3.interactionUser = var8;
                var7 = var7.username;
                var3.integrationOwner = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 772:
                var1 = var2;
            case 775:
                return var1;
            case 777:
                return var0;
        }
    };
    var1.getActionHeaderTextMobile = var5;
    var1.getChannelName = var4;
    var4 = function(arg0, arg1) { // Original name: getActionHeaderText, environment: var2
        _fun40759: for (var _fun40759_ip = 0;;) switch (_fun40759_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var16 = arguments[2];
                var9 = arguments[3];
                var10 = arguments[4];
                var12 = undefined;
                if (!(var16 === var12)) {
                    _fun40759_ip = 28;
                    continue _fun40759
                }
            case 21:
                var16 = _closure1_slot9;
            case 28:
                var0 = _closure1_slot16;
                var14 = var0.bind(var12)(var4);
                var0 = _closure1_slot15;
                var8 = var0.bind(var12)(var4);
                var0 = _closure1_slot17;
                var1 = var0.bind(var12)(var4);
                var0 = _closure1_slot14;
                var0 = var0.bind(var12)(var4);
                var3 = _closure1_slot13;
                var6 = var3.bind(var12)(var4);
                var11 = _closure1_slot11;
                var15 = _closure1_slot0;
                var3 = _closure1_slot1;
                var13 = 6;
                var7 = var3[var13];
                var7 = var15.bind(var12)(var7);
                var7 = var7.AutomodMessageEmbedKeys;
                var7 = var7.INTERACTION_CALLBACK_TYPE;
                var7 = var11.bind(var12)(var4, var7);
                var3 = var3[var13];
                var3 = var15.bind(var12)(var3);
                var3 = var3.AutomodMessageEmbedKeys;
                var3 = var3.APPLICATION_NAME;
                var11 = var11.bind(var12)(var4, var3);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun40759_ip = 169;
                    continue _fun40759
                }
            case 151:
                var0 = _closure1_slot18;
                var0 = var0.bind(var12)(var14, var8, var1);
                if (!(var3 == var0)) {
                    _fun40759_ip = 1036;
                    continue _fun40759
                }
            case 169:
                var14 = _closure1_slot5;
                var8 = var14.can;
                var1 = _closure1_slot10;
                var1 = var1.VIEW_CHANNEL;
                var1 = var8.bind(var14)(var1, var2);
                var8 = _closure1_slot19;
                var15 = var8.bind(var12)(var2, var1);
                if (!(var3 != var2)) {
                    _fun40759_ip = 215;
                    continue _fun40759
                }
            case 209:
                var14 = var16;
                if (var1) {
                    _fun40759_ip = 219;
                    continue _fun40759
                }
            case 215:
                var14 = _closure1_slot9;
            case 219:
                var2 = _closure1_slot11;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var13];
                var1 = var8.bind(var12)(var1);
                var1 = var1.AutomodMessageEmbedKeys;
                var1 = var1.VOICE_CHANNEL_STATUS_OUTCOME;
                var4 = var2.bind(var12)(var4, var1);
                var2 = var3 == var4;
                var1 = null;
                if (var2) {
                    _fun40759_ip = 394;
                    continue _fun40759
                }
            case 270:
                var2 = 'blocked';
                if (!(var2 !== var4)) {
                    _fun40759_ip = 313;
                    continue _fun40759
                }
            case 278:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var2 = var8[var2];
                var2 = var4.bind(var12)(var2);
                var2 = var2.t;
                var13 = var2.bma6cs;
                _fun40759_ip = 346;
                continue _fun40759;
            case 313:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var2 = var8[var2];
                var2 = var4.bind(var12)(var2);
                var2 = var2.t;
                var13 = var2.cLQrqz;
            case 346:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 9;
                var2 = var8[var2];
                var2 = var4.bind(var12)(var2);
                var8 = var2.intl;
                var4 = var8.format;
                var2 = {};
                var2.channelName = var15;
                var2.channelHook = var16;
                var1 = var4.bind(var8)(var13, var2);
            case 394:
                if (!(var3 == var1)) {
                    _fun40759_ip = 1034;
                    continue _fun40759
                }
            case 401:
                if (!(var3 == var11)) {
                    _fun40759_ip = 591;
                    continue _fun40759
                }
            case 408:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 12;
                var2 = var8[var2];
                var2 = var4.bind(var12)(var2);
                var2 = var2.AutomodDecisionOutcomeEmbedKeys;
                var2 = var2.BLOCKED;
                if (!(var6 === var2)) {
                    _fun40759_ip = 516;
                    continue _fun40759
                }
            case 444:
                var4 = _closure1_slot0;
                var16 = _closure1_slot1;
                var2 = 9;
                var8 = var16[var2];
                var8 = var4.bind(var12)(var8);
                var13 = var8.intl;
                var8 = var13.format;
                var2 = var16[var2];
                var2 = var4.bind(var12)(var2);
                var2 = var2.t;
                var4 = var2.lOIOSK;
                var2 = {};
                var2.channelName = var15;
                var2.channelHook = var14;
                var2 = var8.bind(var13)(var4, var2);
                _fun40759_ip = 586;
                continue _fun40759;
            case 516:
                var8 = _closure1_slot0;
                var17 = _closure1_slot1;
                var4 = 9;
                var13 = var17[var4];
                var13 = var8.bind(var12)(var13);
                var16 = var13.intl;
                var13 = var16.format;
                var4 = var17[var4];
                var4 = var8.bind(var12)(var4);
                var4 = var4.t;
                var8 = var4.IZg0VQ;
                var4 = {};
                var4.channelName = var15;
                var4.channelHook = var14;
                var2 = var13.bind(var16)(var8, var4);
            case 586:
                _fun40759_ip = 1031;
                continue _fun40759;
            case 591:
                var8 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 11;
                var4 = var13[var4];
                var4 = var8.bind(var12)(var4);
                var4 = var4.AutomodInteractionCallbackTypeEmbedKeys;
                var4 = var4.MODAL;
                if (!(var7 === var4)) {
                    _fun40759_ip = 634;
                    continue _fun40759
                }
            case 627:
                if (!(var3 == var10)) {
                    _fun40759_ip = 837;
                    continue _fun40759
                }
            case 634:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 12;
                var3 = var7[var3];
                var3 = var4.bind(var12)(var3);
                var3 = var3.AutomodDecisionOutcomeEmbedKeys;
                var3 = var3.BLOCKED;
                if (!(var6 === var3)) {
                    _fun40759_ip = 752;
                    continue _fun40759
                }
            case 670:
                var4 = _closure1_slot0;
                var13 = _closure1_slot1;
                var3 = 9;
                var7 = var13[var3];
                var7 = var4.bind(var12)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var3 = var13[var3];
                var3 = var4.bind(var12)(var3);
                var3 = var3.t;
                var4 = var3.s3tjMN;
                var3 = {};
                var3.applicationName = var11;
                var3.channelName = var15;
                var3.channelHook = var14;
                var3.integrationOwnerHook = var9;
                var3 = var7.bind(var8)(var4, var3);
                _fun40759_ip = 832;
                continue _fun40759;
            case 752:
                var7 = _closure1_slot0;
                var16 = _closure1_slot1;
                var4 = 9;
                var8 = var16[var4];
                var8 = var7.bind(var12)(var8);
                var13 = var8.intl;
                var8 = var13.format;
                var4 = var16[var4];
                var4 = var7.bind(var12)(var4);
                var4 = var4.t;
                var7 = var4.AXQufN;
                var4 = {};
                var4.applicationName = var11;
                var4.channelName = var15;
                var4.channelHook = var14;
                var4.integrationOwnerHook = var9;
                var3 = var8.bind(var13)(var7, var4);
            case 832:
                _fun40759_ip = 1028;
                continue _fun40759;
            case 837:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 12;
                var4 = var8[var4];
                var4 = var7.bind(var12)(var4);
                var4 = var4.AutomodDecisionOutcomeEmbedKeys;
                var4 = var4.BLOCKED;
                if (!(var6 === var4)) {
                    _fun40759_ip = 950;
                    continue _fun40759
                }
            case 873:
                var6 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var7 = var13[var4];
                var7 = var6.bind(var12)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var4 = var13[var4];
                var4 = var6.bind(var12)(var4);
                var4 = var4.t;
                var6 = var4.S3lNIT;
                var4 = {};
                var4.applicationName = var11;
                var4.interactionUserHook = var10;
                var4.integrationOwnerHook = var9;
                var4 = var7.bind(var8)(var6, var4);
                _fun40759_ip = 1025;
                continue _fun40759;
            case 950:
                var6 = _closure1_slot0;
                var13 = _closure1_slot1;
                var5 = 9;
                var7 = var13[var5];
                var7 = var6.bind(var12)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var13[var5];
                var5 = var6.bind(var12)(var5);
                var5 = var5.t;
                var6 = var5["4xL9Sk"];
                var5 = {};
                var5.applicationName = var11;
                var5.interactionUserHook = var10;
                var5.integrationOwnerHook = var9;
                var4 = var7.bind(var8)(var6, var5);
            case 1025:
                var3 = var4;
            case 1028:
                var2 = var3;
            case 1031:
                var1 = var2;
            case 1034:
                return var1;
            case 1036:
                return var0;
        }
    };
    var1.getActionHeaderText = var4;
    var4 = function(arg0) { // Original name: getQuarantineReasonString, environment: var2
        _fun40760: for (var _fun40760_ip = 0;;) switch (_fun40760_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 13;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.AutomodQuarantineUserMessageEmbedKeys;
                var1 = var1.NICKNAME;
                if (!(var1 !== var2)) {
                    _fun40760_ip = 384;
                    continue _fun40760
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AutomodQuarantineUserMessageEmbedKeys;
                var1 = var1.USERNAME;
                if (!(var1 !== var2)) {
                    _fun40760_ip = 327;
                    continue _fun40760
                }
            case 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AutomodQuarantineUserMessageEmbedKeys;
                var1 = var1.GLOBAL_NAME;
                if (!(var1 !== var2)) {
                    _fun40760_ip = 268;
                    continue _fun40760
                }
            case 119:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.AutomodQuarantineUserMessageEmbedKeys;
                var1 = var1.CLAN_TAG;
                if (!(var1 !== var2)) {
                    _fun40760_ip = 209;
                    continue _fun40760
                }
            case 152:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pJQVnr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 209:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Rtum01;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 268:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.V9eJ85;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 327:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pJQVnr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 384:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["fkBQa/"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.getQuarantineReasonString = var4;
    var4 = function(arg0) { // Original name: extractAutomodNotificationFields, environment: var2
        _fun40761: for (var _fun40761_ip = 0;;) switch (_fun40761_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot11;
                var8 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 14;
                var3 = var12[var0];
                var1 = undefined;
                var3 = var8.bind(var1)(var3);
                var3 = var3.AutomodNotificationEmbedKeys;
                var3 = var3.NOTIFICATION_TYPE;
                var3 = var2.bind(var1)(var4, var3);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.JOIN_ATTEMPTS;
                var10 = var2.bind(var1)(var4, var5);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.RAID_DATETIME;
                var11 = var2.bind(var1)(var4, var5);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.DMS_SENT;
                var9 = var2.bind(var1)(var4, var5);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.RAID_TYPE;
                var7 = var2.bind(var1)(var4, var5);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.RESOLVED_REASON;
                var6 = var2.bind(var1)(var4, var5);
                var5 = var12[var0];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AutomodNotificationEmbedKeys;
                var5 = var5.DECISION_ID;
                var5 = var2.bind(var1)(var4, var5);
                var0 = var12[var0];
                var0 = var8.bind(var1)(var0);
                var0 = var0.AutomodNotificationEmbedKeys;
                var0 = var0.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
                var4 = var2.bind(var1)(var4, var0);
                var0 = {};
                var2 = null;
                var12 = var2 == var3;
                var8 = null;
                if (var12) {
                    _fun40761_ip = 255;
                    continue _fun40761
                }
            case 252:
                var8 = var3;
            case 255:
                var12 = var2 != var8;
                var3 = undefined;
                if (!var12) {
                    _fun40761_ip = 267;
                    continue _fun40761
                }
            case 264:
                var3 = var8;
            case 267:
                var0.notificationType = var3;
                var8 = var2 != var10;
                var3 = undefined;
                if (!var8) {
                    _fun40761_ip = 294;
                    continue _fun40761
                }
            case 281:
                var8 = global;
                var8 = var8.parseInt;
                var3 = var8.bind(var1)(var10);
            case 294:
                var0.joinAttempts = var3;
                var8 = var2 != var11;
                var3 = undefined;
                if (!var8) {
                    _fun40761_ip = 339;
                    continue _fun40761
                }
            case 308:
                var8 = global;
                var8 = var8.Date;
                var10 = var8.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var8
                    }
                });
                var15 = var10;
                var14 = var11;
                var8 = new var15[var8](var14, var13);
                var3 = var8 instanceof Object ? var8 : var10;
            case 339:
                var0.raidDatetime = var3;
                var8 = var2 != var9;
                var3 = undefined;
                if (!var8) {
                    _fun40761_ip = 366;
                    continue _fun40761
                }
            case 353:
                var8 = global;
                var8 = var8.parseInt;
                var3 = var8.bind(var1)(var9);
            case 366:
                var0.dmsSent = var3;
                var8 = var2 != var7;
                var3 = undefined;
                if (!var8) {
                    _fun40761_ip = 383;
                    continue _fun40761
                }
            case 380:
                var3 = var7;
            case 383:
                var0.raidType = var3;
                var7 = var2 != var6;
                var3 = undefined;
                if (!var7) {
                    _fun40761_ip = 400;
                    continue _fun40761
                }
            case 397:
                var3 = var6;
            case 400:
                var0.resolvedReason = var3;
                var6 = var2 != var5;
                var3 = undefined;
                if (!var6) {
                    _fun40761_ip = 417;
                    continue _fun40761
                }
            case 414:
                var3 = var5;
            case 417:
                var0.decisionId = var3;
                var2 = var2 != var4;
                var1 = undefined;
                if (!var2) {
                    _fun40761_ip = 462;
                    continue _fun40761
                }
            case 431:
                var2 = global;
                var2 = var2.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var3;
                var14 = var4;
                var2 = new var15[var2](var14, var13);
                var1 = var2 instanceof Object ? var2 : var3;
            case 462:
                var0.suspiciousMentionActivityUntil = var1;
                return var0;
        }
    };
    var1.extractAutomodNotificationFields = var4;
    var1.extractAutomodMessageFields = var3;
    var3 = function(arg0) { // Original name: useAutomodAlertActions, environment: var2
        _fun40762: for (var _fun40762_ip = 0;;) switch (_fun40762_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun40762_ip = 43;
                    continue _fun40762
                }
            case 9:
                var2 = _closure1_slot20;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var2 = var1.alertActionsExecution;
                var3 = var0 != var2;
                var1 = null;
                if (!var3) {
                    _fun40762_ip = 41;
                    continue _fun40762
                }
            case 38:
                var1 = var2;
            case 41:
                return var1;
            case 43:
                return var0;
        }
    };
    var1.useAutomodAlertActions = var3;
    var3 = function(arg0) { // Original name: getRaidAlertResolveCTAText, environment: var2
        _fun40763: for (var _fun40763_ip = 0;;) switch (_fun40763_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun40763_ip = 361;
                    continue _fun40763
                }
            case 12:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 17;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.RaidResolutionType;
                var1 = var1.LEGITIMATE_ACTIVITY;
                if (!(var1 !== var2)) {
                    _fun40763_ip = 302;
                    continue _fun40763
                }
            case 56:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.RaidResolutionType;
                var1 = var1.DM_SPAM;
                if (!(var1 !== var2)) {
                    _fun40763_ip = 243;
                    continue _fun40763
                }
            case 92:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.RaidResolutionType;
                var1 = var1.JOIN_RAID;
                if (!(var1 !== var2)) {
                    _fun40763_ip = 184;
                    continue _fun40763
                }
            case 125:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.GPg6JM;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 184:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.qhaRbG;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 243:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.j5V0ij;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 302:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["riQ+HH"];
                var0 = var1.bind(var2)(var0);
                return var0;
            case 361:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Gh3A0O;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.getRaidAlertResolveCTAText = var3;
    var2 = function(arg0) { // Original name: getUserIdOfAutomodAction, environment: var2
        var3 = _closure1_slot11;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 14;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.AutomodNotificationEmbedKeys;
        var1 = var0.ACTION_BY_USER_ID;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var1.getUserIdOfAutomodAction = var2;
    var1.IS_BACKWARDS_COMPAT_RAID_TYPE = var0;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 3050, 1613, 660, 4495, 4496, 4497, 1234, 4498, 4499, 4500, 4501, 4502, 4503, 566, 4504, 2]);