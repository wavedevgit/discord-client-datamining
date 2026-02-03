// modules/safety_hub/SafetyHubUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun52116: for (var _fun52116_ip = 0;;) switch (_fun52116_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.fields;
                var4 = null;
                if (!(var4 == var1)) {
                    _fun52116_ip = 21;
                    continue _fun52116
                }
            case 17:
                var1 = undefined;
                return var1;
            case 21:
                var5 = var0.fields;
                var2 = var5.reduce;
                var1 = function(arg0, arg1) { // Environment: var3
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.rawName;
                    var1 = var1.rawValue;
                    var0[var2] = var1;
                    return var0;
                };
                var0 = {};
                var2 = var2.bind(var5)(var1, var0);
                var0 = {};
                var5 = _closure1_slot6;
                var5 = var5.HEADER;
                var6 = var2[var5];
                var8 = var4 != var6;
                var7 = '';
                var5 = var7;
                if (!var8) {
                    _fun52116_ip = 82;
                    continue _fun52116
                }
            case 79:
                var5 = var6;
            case 82:
                var0.header = var5;
                var5 = _closure1_slot6;
                var5 = var5.ICON_TYPE;
                var5 = var2[var5];
                var0.icon = var5;
                var5 = _closure1_slot6;
                var5 = var5.BODY;
                var6 = var2[var5];
                var8 = var4 != var6;
                var5 = var7;
                if (!var8) {
                    _fun52116_ip = 131;
                    continue _fun52116
                }
            case 128:
                var5 = var6;
            case 131:
                var0.body = var5;
                var5 = _closure1_slot6;
                var5 = var5.CTAS;
                var5 = var2[var5];
                var6 = var4 != var5;
                if (!var6) {
                    _fun52116_ip = 159;
                    continue _fun52116
                }
            case 156:
                var7 = var5;
            case 159:
                var6 = var7.split;
                var5 = ',';
                var6 = var6.bind(var7)(var5);
                var5 = var6.filter;
                var3 = function(arg0) { // Environment: var3
                    var1 = '';
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var0.ctas = var3;
                var3 = global;
                var5 = var3.parseFloat;
                var3 = _closure1_slot6;
                var3 = var3.TIMESTAMP;
                var3 = var2[var3];
                var6 = var4 != var3;
                var4 = 0;
                if (!var6) {
                    _fun52116_ip = 227;
                    continue _fun52116
                }
            case 224:
                var4 = var3;
            case 227:
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var0.timestamp = var3;
                var3 = _closure1_slot6;
                var3 = var3.THEME;
                var3 = var2[var3];
                var0.theme = var3;
                var3 = _closure1_slot6;
                var3 = var3.LEARN_MORE_LINK;
                var3 = var2[var3];
                var0.learn_more_link = var3;
                var1 = _closure1_slot6;
                var1 = var1.CLASSIFICATION_ID;
                var1 = var2[var1];
                var0.classification_id = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AppealIngestionSignal;
    var _closure1_slot4 = var7;
    var7 = var4.SafetySystemNotificationCtaType;
    var _closure1_slot5 = var7;
    var4 = var4.SafetySystemNotificationEmbedKeys;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/SafetyHubUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 4;
        var1 = var5[var0];
        var4 = undefined;
        var1 = var3.bind(var4)(var1);
        var2 = var1.bind(var4)();
        var1 = var2.to;
        var0 = var5[var0];
        var3 = var3.bind(var4)(var0);
        var0 = arg0;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getClassificationRelativeIncidentTime = var4;
    var4 = function arg0() {
        _fun52120: for (var _fun52120_ip = 0;;) switch (_fun52120_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 5;
                var0 = var0[var5];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var3 = var6.isImageFile;
                var0 = var1.filename;
                var0 = var3.bind(var6)(var0);
                if (var0) {
                    _fun52120_ip = 109;
                    continue _fun52120
                }
            case 48:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var4 = var3.bind(var4)(var0);
                var3 = var4.isVideoFile;
                var0 = var1.filename;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun52120_ip = 109;
                    continue _fun52120
                }
            case 85:
                var3 = var1.filename;
                var0 = null;
                var4 = var0 != var3;
                var0 = '';
                if (!var4) {
                    _fun52120_ip = 107;
                    continue _fun52120
                }
            case 104:
                var0 = var3;
            case 107:
                _fun52120_ip = 160;
                continue _fun52120;
            case 109:
                var4 = _closure1_slot8;
                var1 = var1.filename;
                var2 = null;
                var2 = var2 != var1;
                var3 = '.png';
                if (!var2) {
                    _fun52120_ip = 137;
                    continue _fun52120
                }
            case 134:
                var3 = var1;
            case 137:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var0 = var2.bind(var1)(var4, var3);
            case 160:
                return var0;
        }
    };
    var2.getAttachmentFilename = var4;
    var4 = function arg0() {
        var2 = _closure1_slot9;
        var0 = arg0;
        var1 = var0.embeds;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.parseMessageForProps = var4;
    var2.parseMessageEmbedForProps = var3;
    var3 = function arg0, arg1, arg2() {
        _fun52122: for (var _fun52122_ip = 0;;) switch (_fun52122_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = arg2;
                var0 = _closure1_slot5;
                var0 = var0.LEARN_MORE_LINK;
                if (!(var0 !== var3)) {
                    _fun52122_ip = 145;
                    continue _fun52122
                }
            case 26:
                var0 = _closure1_slot5;
                var0 = var0.POLICY_VIOLATION_DETAIL;
                if (!(var0 !== var3)) {
                    _fun52122_ip = 44;
                    continue _fun52122
                }
            case 40:
                var0 = undefined;
                return var0;
            case 44:
                var0 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 6;
                var5 = var9[var3];
                var7 = undefined;
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.QsqdXC;
                var3 = var5.bind(var6)(var3);
                var0.text = var3;
                var3 = _closure1_slot5;
                var3 = var3.POLICY_VIOLATION_DETAIL;
                var0.type = var3;
                var3 = null;
                var5 = var3 != var4;
                var3 = '';
                if (!var5) {
                    _fun52122_ip = 139;
                    continue _fun52122
                }
            case 136:
                var3 = var4;
            case 139:
                var0.key = var3;
                return var0;
            case 145:
                var0 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["8/GdRB"];
                var3 = var4.bind(var5)(var3);
                var0.text = var3;
                var1 = _closure1_slot5;
                var1 = var1.LEARN_MORE_LINK;
                var0.type = var1;
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun52122_ip = 240;
                    continue _fun52122
                }
            case 237:
                var1 = var2;
            case 240:
                var0.key = var1;
                return var0;
        }
    };
    var2.mapCtaToNativeData = var3;
    var3 = function arg0() {
        _fun52123: for (var _fun52123_ip = 0;;) switch (_fun52123_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.ContentIdType;
                var0 = var0.MESSAGE;
                var0 = var1 !== var0;
                if (var0) {
                    _fun52123_ip = 88;
                    continue _fun52123
                }
            case 52:
                var3 = var2.content;
                var1 = '';
                var1 = var1 === var3;
                if (!var1) {
                    _fun52123_ip = 85;
                    continue _fun52123
                }
            case 68:
                var2 = var2.attachments;
                var3 = var2.length;
                var2 = 0;
                var1 = var2 === var3;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var2.isFlaggedContentEmpty = var3;
    var3 = function(arg0) { // Environment: var1
        var1 = {};
        var2 = _closure1_slot4;
        var4 = var2.DIDNT_VIOLATE_POLICY;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 6;
        var3 = var7[var0];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.mZffAi;
        var3 = var8.bind(var9)(var3);
        var1[var4] = var3;
        var4 = var2.TOO_STRICT_UNFAIR;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.wgZVAn;
        var3 = var8.bind(var9)(var3);
        var1[var4] = var3;
        var4 = var2.DONT_AGREE_PENALTY;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.eu8G4k;
        var3 = var8.bind(var9)(var3);
        var1[var4] = var3;
        var2 = var2.SOMETHING_ELSE;
        var3 = var7[var0];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var0 = var7[var0];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0.XU3s6r;
        var0 = var3.bind(var4)(var0);
        var1[var2] = var0;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.getAppealSignalDisplayText = var3;
    var3 = function(arg0) { // Environment: var1
        _fun52125: for (var _fun52125_ip = 0;;) switch (_fun52125_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var5 = '';
                var0 = var5;
                if (var1) {
                    _fun52125_ip = 110;
                    continue _fun52125
                }
            case 19:
                var1 = var3.length;
                var4 = 0;
                var0 = var5;
                if (!(var4 !== var1)) {
                    _fun52125_ip = 110;
                    continue _fun52125
                }
            case 33:
                var1 = var3.length;
                var2 = 1;
                if (!(var2 !== var1)) {
                    _fun52125_ip = 97;
                    continue _fun52125
                }
            case 45:
                var1 = var3.charAt;
                var4 = var1.bind(var3)(var4);
                var1 = var4.toUpperCase;
                var4 = var1.bind(var4)();
                var1 = var3.slice;
                var2 = var1.bind(var3)(var2);
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var5)(var4, var2);
                _fun52125_ip = 107;
                continue _fun52125;
            case 97:
                var2 = var3.toUpperCase;
                var1 = var2.bind(var3)();
            case 107:
                var0 = var1;
            case 110:
                return var0;
        }
    };
    var2.capitalizeText = var3;
    var3 = function arg0() {
        _fun52126: for (var _fun52126_ip = 0;;) switch (_fun52126_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun52126_ip = 22;
                    continue _fun52126
                }
            case 12:
                var1 = var1.guild_metadata;
                var0 = var2 != var1;
            case 22:
                return var0;
        }
    };
    var2.isGuildClassification = var3;
    var3 = function(arg0) { // Environment: var1
        _fun52127: for (var _fun52127_ip = 0;;) switch (_fun52127_ip) {
            case 0:
                var0 = _closure1_slot7;
                var2 = var0.DSA_APPEAL_REQUEST_DEFLECTION;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun52127_ip = 81;
                    continue _fun52127
                }
            case 20:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var2 = var6[var0];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.aPmsx3;
                var0 = var2.bind(var3)(var0);
                _fun52127_ip = 140;
                continue _fun52127;
            case 81:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["0qyXXH"];
                var0 = var2.bind(var3)(var1);
            case 140:
                return var0;
        }
    };
    var2.getRequestReviewErrorFromCode = var3;
    var3 = function arg0() {
        _fun52128: for (var _fun52128_ip = 0;;) switch (_fun52128_ip) {
            case 0:
                var1 = undefined;
                var0 = arg0;
                var2 = var0.max_expiration_time;
                var1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun52128_ip = 57;
                    continue _fun52128
                }
            case 20: // try_start_0
                var2 = global;
                var3 = var2.Date;
                var4 = var1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
            case 51: // try_end0
                return var1;
            case 53: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
            case 57:
                return var0;
        }
    };
    var2.getClassificationExpiration = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getSuspendedUserToken;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.useIsSuspendedUser = var3;
    var1 = function() {
        var1 = _closure1_slot3;
        var0 = var1.getSuspendedUserToken;
        var1 = var0.bind(var1)();
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isCurrentUserSuspended = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 5936, 660, 1346, 3036, 3971, 1234, 5937, 566, 2]);