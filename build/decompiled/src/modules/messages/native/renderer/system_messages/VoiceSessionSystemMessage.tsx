// modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun56020: for (var _fun56020_ip = 0;;) switch (_fun56020_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = arg2;
                var5 = arg3;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun56020_ip = 22;
                    continue _fun56020
                }
            case 18:
                if (!(var4 == var2)) {
                    _fun56020_ip = 26;
                    continue _fun56020
                }
            case 22:
                var0 = undefined;
                return var0;
            case 26:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 3;
                var6 = var6[var0];
                var0 = undefined;
                var8 = var7.bind(var0)(var6);
                var7 = var8.isNativeMessageEligibleForEnhancedRoleColors;
                var6 = var3.guildId;
                var0 = var1.author;
                var0 = var0.id;
                var6 = var7.bind(var8)(var6, var0, var5);
                var0 = {};
                var7 = 'bindUserMenu';
                var0.action = var7;
                var2 = var2.id;
                var0.userId = var2;
                var2 = var3.colorString;
                var0.colorString = var2;
                var7 = 'username';
                var2 = null;
                if (!(var7 === var5)) {
                    _fun56020_ip = 128;
                    continue _fun56020
                }
            case 122:
                var2 = var3.colorString;
            case 128:
                var0.linkColor = var2;
                var2 = var3.colorString;
                var0.roleColor = var2;
                var2 = null;
                if (!var6) {
                    _fun56020_ip = 155;
                    continue _fun56020
                }
            case 149:
                var2 = var3.colorStrings;
            case 155:
                var0.roleColors = var2;
                var2 = 'dot';
                var2 = var2 === var5;
                if (!var2) {
                    _fun56020_ip = 181;
                    continue _fun56020
                }
            case 171:
                var3 = var3.colorString;
                var2 = var4 != var3;
            case 181:
                var0.shouldShowRoleDot = var2;
                var1 = var1.channel_id;
                var0.messageChannelId = var1;
                var1 = true;
                var0.medium = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1() {
        _fun56021: for (var _fun56021_ip = 0;;) switch (_fun56021_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = var10.channel_id;
                var1 = var2.bind(var3)(var1);
                var _closure2_slot0 = var1;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var8 = undefined;
                var1 = var2.bind(var8)(var1);
                var4 = var1.bind(var8)(var10);
                var2 = _closure1_slot0;
                var1 = 6;
                var1 = var3[var1];
                var2 = var2.bind(var8)(var1);
                var1 = var2.getMessageAuthorWithProcessedColor;
                var7 = var1.bind(var2)(var10);
                var1 = function(arg0) { // Environment: var0
                    _fun56022: for (var _fun56022_ip = 0;;) switch (_fun56022_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = var0.call;
                            var0 = null;
                            var5 = var0 == var3;
                            var2 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun56022_ip = 54;
                                continue _fun56022
                            }
                        case 27:
                            var6 = var3.participants;
                            var5 = var6.reduce;
                            var3 = function(arg0, arg1) { // Environment: var1
                                _fun56023: for (var _fun56023_ip = 0;;) switch (_fun56023_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure1_slot5;
                                        var1 = var2.getUser;
                                        var0 = arg1;
                                        var2 = var1.bind(var2)(var0);
                                        var1 = null;
                                        var0 = var4;
                                        if (!(var1 != var2)) {
                                            _fun56023_ip = 94;
                                            continue _fun56023
                                        }
                                    case 33:
                                        var3 = var2.id;
                                        var1 = _closure3_slot0;
                                        var1 = var1.author;
                                        var1 = var1.id;
                                        var0 = var4;
                                        if (!(var3 !== var1)) {
                                            _fun56023_ip = 94;
                                            continue _fun56023
                                        }
                                    case 63:
                                        var1 = new Array(1);
                                        var5 = 0;
                                        var7 = var1;
                                        var6 = var4;
                                        var3 = arraySpread(var7, var6, var5);
                                        var1[var3] = var2;
                                        var2 = 1;
                                        var2 = var3 + var2;
                                        var0 = var1;
                                    case 94:
                                        return var0;
                                }
                            };
                            var1 = new Array(0);
                            var4 = var5.bind(var6)(var3, var1);
                        case 54:
                            if (!(var0 == var4)) {
                                _fun56022_ip = 62;
                                continue _fun56022
                            }
                        case 58:
                            var4 = new Array(0);
                        case 62:
                            var3 = _closure1_slot3;
                            var1 = var3.getUserAffinitiesMap;
                            var3 = var1.bind(var3)();
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 4;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.maybeSortByProbability;
                            var0 = 'VoiceSession - participants';
                            var0 = var1.bind(var2)(var4, var3, var0);
                            return var0;
                    }
                };
                var2 = var1.bind(var8)(var10);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var0 = {};
                    var0.user = var4;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getUserAuthorWithProcessedColor;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var4, var1);
                    var0.messageAuthor = var1;
                    return var0;
                };
                var6 = var1.bind(var2)(var0);
                var12 = null;
                if (!(var12 != var4)) {
                    _fun56021_ip = 458;
                    continue _fun56021
                }
            case 122:
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 7;
                var2 = var11[var0];
                var2 = var1.bind(var8)(var2);
                var3 = var2.intl;
                var2 = var3.formatToParts;
                var0 = var11[var0];
                var0 = var1.bind(var8)(var0);
                var0 = var0.t;
                var1 = var0.atbXuX;
                var0 = {};
                var13 = var6.length;
                var11 = 1;
                var13 = var13 + var11;
                var0.userCount = var13;
                var13 = var7.nick;
                var0.username = var13;
                var14 = _closure1_slot6;
                var21 = var10.author;
                var22 = undefined;
                var20 = var10;
                var19 = var7;
                var18 = var9;
                var13 = var22[var14](var21, var20, var19, var18, var17);
                var0.usernameOnClick = var13;
                var13 = 0;
                var15 = var6[var13];
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun56021_ip = 261;
                    continue _fun56021
                }
            case 249:
                var15 = var15.messageAuthor;
                var14 = var15.nick;
            case 261:
                var0.username2 = var14;
                var15 = _closure1_slot6;
                var16 = var6[var13];
                var17 = var12 == var16;
                var14 = undefined;
                if (var17) {
                    _fun56021_ip = 288;
                    continue _fun56021
                }
            case 283:
                var14 = var16.user;
            case 288:
                var16 = var6[var13];
                var17 = var12 == var16;
                var13 = undefined;
                if (var17) {
                    _fun56021_ip = 307;
                    continue _fun56021
                }
            case 301:
                var13 = var16.messageAuthor;
            case 307:
                var22 = undefined;
                var21 = var14;
                var20 = var10;
                var19 = var13;
                var18 = var9;
                var13 = var22[var15](var21, var20, var19, var18, var17);
                var0.username2OnClick = var13;
                var14 = var6[var11];
                var15 = var12 == var14;
                var13 = undefined;
                if (var15) {
                    _fun56021_ip = 357;
                    continue _fun56021
                }
            case 345:
                var14 = var14.messageAuthor;
                var13 = var14.nick;
            case 357:
                var0.username3 = var13;
                var14 = _closure1_slot6;
                var15 = var6[var11];
                var16 = var12 == var15;
                var13 = undefined;
                if (var16) {
                    _fun56021_ip = 386;
                    continue _fun56021
                }
            case 381:
                var13 = var15.user;
            case 386:
                var15 = var6[var11];
                var16 = var12 == var15;
                var12 = undefined;
                if (var16) {
                    _fun56021_ip = 405;
                    continue _fun56021
                }
            case 399:
                var12 = var15.messageAuthor;
            case 405:
                var22 = undefined;
                var21 = var13;
                var20 = var10;
                var19 = var12;
                var18 = var9;
                var12 = var22[var14](var21, var20, var19, var18, var17);
                var0.username3OnClick = var12;
                var6 = var6.length;
                var6 = var6 - var11;
                var0.otherCount = var6;
                var0.duration = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun56021_ip = 559;
                continue _fun56021;
            case 458:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.formatToParts;
                var1 = var6[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.HzBfIN;
                var1 = {};
                var6 = var7.nick;
                var1.username = var6;
                var6 = _closure1_slot6;
                var21 = var10.author;
                var22 = undefined;
                var20 = var10;
                var19 = var7;
                var18 = var9;
                var5 = var22[var6](var21, var20, var19, var18, var17);
                var1.usernameOnClick = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 559:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var6 = var3.message;
        var5 = var3.roleStyle;
        var0 = {};
        var4 = _closure1_slot7;
        var2 = undefined;
        var4 = var4.bind(var2)(var6, var5);
        var0.content = var4;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 8;
        var1 = var5[var1];
        var1 = var4.bind(var2)(var1);
        var7 = var1.bind(var2)(var3);
        var8 = var0;
        var1 = copyDataProperties(var8, var7);
        return var0;
    };
    var2.createVoiceSessionSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6793, 1372, 1621, 6697, 6795, 6703, 6696, 1234, 6698, 2]);