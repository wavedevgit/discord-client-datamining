// modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun92393: for (var _fun92393_ip = 0;;) switch (_fun92393_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var5 = var0.bind(var1)();
                var3 = null;
                var4 = var3 == var5;
                var0 = undefined;
                if (var4) {
                    _fun92393_ip = 37;
                    continue _fun92393
                }
            case 27:
                var4 = var5.isStaff;
                var0 = var4.bind(var5)();
            case 37:
                if (var0) {
                    _fun92393_ip = 75;
                    continue _fun92393
                }
            case 40:
                var5 = _closure1_slot4;
                var4 = var5.getCurrentUser;
                var5 = var4.bind(var5)();
                var4 = var3 == var5;
                var1 = undefined;
                if (var4) {
                    _fun92393_ip = 72;
                    continue _fun92393
                }
            case 62:
                var4 = var5.isStaffPersonal;
                var1 = var4.bind(var5)();
            case 72:
                var0 = var1;
            case 75:
                if (var0) {
                    _fun92393_ip = 126;
                    continue _fun92393
                }
            case 78:
                var5 = _closure1_slot3;
                var1 = var5.getGuild;
                var4 = '943265993613008967';
                var1 = var1.bind(var5)(var4);
                var1 = var3 != var1;
                if (!var1) {
                    _fun92393_ip = 123;
                    continue _fun92393
                }
            case 105:
                var3 = _closure1_slot2;
                var2 = var3.isLurking;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun92394: for (var _fun92394_ip = 0;;) switch (_fun92394_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var2;
                var3 = arg2;
                var _closure2_slot1 = var3;
                var3 = var2.author;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun92394_ip = 73;
                    continue _fun92394
                }
            case 31:
                var2 = var1.codedLinks;
                var3 = var2.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun92394_ip = 73;
                    continue _fun92394
                }
            case 48:
                var2 = var1.codedLinks;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun92395: for (var _fun92395_ip = 0;;) switch (_fun92395_ip) {
                        case 0:
                            var0 = arg0;
                            var9 = var0.type;
                            var5 = var0.code;
                            var8 = var0.url;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var10 = 3;
                            var0 = var0[var10];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.INVITE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1320;
                                continue _fun92395
                            }
                        case 62:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.TEMPLATE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1279;
                                continue _fun92395
                            }
                        case 98:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.BUILD_OVERRIDE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1238;
                                continue _fun92395
                            }
                        case 134:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.MANUAL_BUILD_OVERRIDE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1181;
                                continue _fun92395
                            }
                        case 170:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.EVENT;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1140;
                                continue _fun92395
                            }
                        case 206:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.CHANNEL_LINK;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1099;
                                continue _fun92395
                            }
                        case 242:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.APP_DIRECTORY_PROFILE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 1034;
                                continue _fun92395
                            }
                        case 278:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.ACTIVITY_BOOKMARK;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 969;
                                continue _fun92395
                            }
                        case 314:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.EMBEDDED_ACTIVITY_INVITE;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 917;
                                continue _fun92395
                            }
                        case 350:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.EXPERIMENT;
                            if (!(var9 !== var0)) {
                                _fun92395_ip = 838;
                                continue _fun92395
                            }
                        case 386:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var10];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.CodedLinkType;
                            var2 = var0.GUILD_PRODUCT;
                            var0 = null;
                            if (!(var9 !== var2)) {
                                _fun92395_ip = 836;
                                continue _fun92395
                            }
                        case 424:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var10];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.SERVER_SHOP;
                            var0 = null;
                            if (!(var9 !== var2)) {
                                _fun92395_ip = 836;
                                continue _fun92395
                            }
                        case 462:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var10];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.SOCIAL_LAYER_STOREFRONT;
                            var0 = null;
                            if (!(var9 !== var2)) {
                                _fun92395_ip = 836;
                                continue _fun92395
                            }
                        case 500:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var10];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.QUESTS_EMBED;
                            if (!(var9 !== var2)) {
                                _fun92395_ip = 783;
                                continue _fun92395
                            }
                        case 536:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var10];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.CodedLinkType;
                            var6 = var2.APP_DIRECTORY_STOREFRONT;
                            var2 = null;
                            if (!(var9 !== var6)) {
                                _fun92395_ip = 781;
                                continue _fun92395
                            }
                        case 574:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var6 = var6[var10];
                            var6 = var7.bind(var3)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_DIRECTORY_STOREFRONT_SKU;
                            var2 = null;
                            if (!(var9 !== var6)) {
                                _fun92395_ip = 781;
                                continue _fun92395
                            }
                        case 612:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var6 = var6[var10];
                            var6 = var7.bind(var3)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_OAUTH2_LINK;
                            if (!(var9 !== var6)) {
                                _fun92395_ip = 715;
                                continue _fun92395
                            }
                        case 645:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var6 = var6[var10];
                            var6 = var7.bind(var3)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.COLLECTIBLES_SHOP;
                            var4 = null;
                            if (!(var9 !== var6)) {
                                _fun92395_ip = 713;
                                continue _fun92395
                            }
                        case 680:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var6 = 15;
                            var6 = var10[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.assertNever;
                            var6 = var6.bind(var7)(var9);
                            var4 = undefined;
                        case 713:
                            _fun92395_ip = 778;
                            continue _fun92395;
                        case 715:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var6 = 9;
                            var6 = var9[var6];
                            var9 = var7.bind(var3)(var6);
                            var7 = var9.createAppMessageEmbed;
                            var6 = {};
                            var11 = _closure2_slot1;
                            var6.theme = var11;
                            var6.appId = var5;
                            var6.embedUrl = var8;
                            var10 = _closure2_slot0;
                            var6.message = var10;
                            var4 = var7.bind(var9)(var6);
                        case 778:
                            var2 = var4;
                        case 781:
                            _fun92395_ip = 833;
                            continue _fun92395;
                        case 783:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 14;
                            var4 = var7[var4];
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.createQuestsEmbed;
                            var4 = {};
                            var9 = _closure2_slot1;
                            var4.theme = var9;
                            var4.questId = var5;
                            var2 = var6.bind(var7)(var4);
                        case 833:
                            var0 = var2;
                        case 836:
                            _fun92395_ip = 915;
                            continue _fun92395;
                        case 838:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 12;
                            var2 = var6[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.canSeeExperimentEmbeds;
                            var4 = var2.bind(var4)();
                            var2 = null;
                            if (!var4) {
                                _fun92395_ip = 912;
                                continue _fun92395
                            }
                        case 873:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 13;
                            var4 = var7[var4];
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.createExperimentEmbed;
                            var4 = _closure2_slot1;
                            var2 = var6.bind(var7)(var8, var4);
                        case 912:
                            var0 = var2;
                        case 915:
                            _fun92395_ip = 967;
                            continue _fun92395;
                        case 917:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 11;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createEmbeddedActivityInviteEmbed;
                            var2 = {};
                            var7 = _closure2_slot1;
                            var2.theme = var7;
                            var2.inviteCode = var5;
                            var0 = var4.bind(var6)(var2);
                        case 967:
                            _fun92395_ip = 1032;
                            continue _fun92395;
                        case 969:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 10;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createActivityMessageEmbed;
                            var2 = {};
                            var9 = _closure2_slot1;
                            var2.theme = var9;
                            var2.appId = var5;
                            var2.embedUrl = var8;
                            var7 = _closure2_slot0;
                            var2.message = var7;
                            var0 = var4.bind(var6)(var2);
                        case 1032:
                            _fun92395_ip = 1097;
                            continue _fun92395;
                        case 1034:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 9;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createAppMessageEmbed;
                            var2 = {};
                            var9 = _closure2_slot1;
                            var2.theme = var9;
                            var2.appId = var5;
                            var2.embedUrl = var8;
                            var7 = _closure2_slot0;
                            var2.message = var7;
                            var0 = var4.bind(var6)(var2);
                        case 1097:
                            _fun92395_ip = 1138;
                            continue _fun92395;
                        case 1099:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 8;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createVoiceChannelLinkEmbed;
                            var2 = _closure2_slot1;
                            var0 = var4.bind(var6)(var5, var2);
                        case 1138:
                            _fun92395_ip = 1179;
                            continue _fun92395;
                        case 1140:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createGuildScheduledEventLinkEmbed;
                            var2 = _closure2_slot1;
                            var0 = var4.bind(var6)(var5, var2);
                        case 1179:
                            _fun92395_ip = 1236;
                            continue _fun92395;
                        case 1181:
                            var2 = _closure1_slot5;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!var4) {
                                _fun92395_ip = 1233;
                                continue _fun92395
                            }
                        case 1194:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 6;
                            var4 = var7[var4];
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.createBuildOverrideEmbed;
                            var4 = _closure2_slot1;
                            var2 = var6.bind(var7)(var5, var4);
                        case 1233:
                            var0 = var2;
                        case 1236:
                            _fun92395_ip = 1277;
                            continue _fun92395;
                        case 1238:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 6;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createBuildOverrideEmbed;
                            var2 = _closure2_slot1;
                            var0 = var4.bind(var6)(var5, var2);
                        case 1277:
                            _fun92395_ip = 1318;
                            continue _fun92395;
                        case 1279:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 5;
                            var2 = var6[var2];
                            var6 = var4.bind(var3)(var2);
                            var4 = var6.createGuildTemplateEmbed;
                            var2 = _closure2_slot1;
                            var0 = var4.bind(var6)(var5, var2);
                        case 1318:
                            _fun92395_ip = 1364;
                            continue _fun92395;
                        case 1320:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.createInviteEmbed;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var5, var1);
                        case 1364:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun92394_ip = 77;
                continue _fun92394;
            case 73:
                var0 = new Array(0);
            case 77:
                return var0;
        }
    };
    var2.createCodedLinkEmbeds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3092, 1410, 1621, 3327, 12060, 12071, 12073, 12066, 12075, 11611, 12076, 12068, 9881, 10097, 12081, 1304, 2]);