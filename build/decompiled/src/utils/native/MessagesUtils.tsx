// utils/native/MessagesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.InviteStates;
    var _closure1_slot2 = var6;
    var1 = var1.MessageEmbedTypes;
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildTemplateStates;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2() {
        _fun89240: for (var _fun89240_ip = 0;;) switch (_fun89240_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var3 = arg2;
                var4 = var2.messageAuthorActivities;
                var0 = var3.messageAuthorActivities;
                var0 = var4 !== var0;
                if (!var0) {
                    _fun89240_ip = 40;
                    continue _fun89240
                }
            case 28:
                var5 = var1.activity;
                var4 = null;
                var0 = var4 != var5;
            case 40:
                if (!var0) {
                    _fun89240_ip = 89;
                    continue _fun89240
                }
            case 43:
                var4 = var2.messageAuthorActivities;
                var2 = var1.author;
                var2 = var2.id;
                var2 = var4[var2];
                var3 = var3.messageAuthorActivities;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var3[var1];
                var0 = var2 !== var1;
            case 89:
                return var0;
        }
    };
    var1.messageAuthorActivitiesChanged = var6;
    var6 = function arg0, arg1, arg2() {
        _fun89241: for (var _fun89241_ip = 0;;) switch (_fun89241_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var4 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var0 = var3.codedLinks;
                var1 = var0.length;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun89241_ip = 297;
                    continue _fun89241
                }
            case 42:
                var6 = var5.invites;
                var1 = var4.invites;
                var1 = var6 !== var1;
                if (var1) {
                    _fun89241_ip = 77;
                    continue _fun89241
                }
            case 61:
                var7 = var5.appDirectoryEmbedApplications;
                var6 = var4.appDirectoryEmbedApplications;
                var1 = var7 !== var6;
            case 77:
                if (var1) {
                    _fun89241_ip = 96;
                    continue _fun89241
                }
            case 80:
                var7 = var5.invalidAppDirectoryEmbedApplicationIds;
                var6 = var4.invalidAppDirectoryEmbedApplicationIds;
                var1 = var7 !== var6;
            case 96:
                if (var1) {
                    _fun89241_ip = 115;
                    continue _fun89241
                }
            case 99:
                var7 = var5.invalidApplicationIds;
                var6 = var4.invalidApplicationIds;
                var1 = var7 !== var6;
            case 115:
                if (var1) {
                    _fun89241_ip = 134;
                    continue _fun89241
                }
            case 118:
                var7 = var5.appDirectoryEmbedApplicationFetchStates;
                var6 = var4.appDirectoryEmbedApplicationFetchStates;
                var1 = var7 !== var6;
            case 134:
                if (var1) {
                    _fun89241_ip = 153;
                    continue _fun89241
                }
            case 137:
                var7 = var5.guildTemplates;
                var6 = var4.guildTemplates;
                var1 = var7 !== var6;
            case 153:
                if (var1) {
                    _fun89241_ip = 172;
                    continue _fun89241
                }
            case 156:
                var7 = var5.buildOverrides;
                var6 = var4.buildOverrides;
                var1 = var7 !== var6;
            case 172:
                if (var1) {
                    _fun89241_ip = 191;
                    continue _fun89241
                }
            case 175:
                var7 = var5.activityParticipants;
                var6 = var4.activityParticipants;
                var1 = var7 !== var6;
            case 191:
                if (var1) {
                    _fun89241_ip = 210;
                    continue _fun89241
                }
            case 194:
                var7 = var5.quests;
                var6 = var4.quests;
                var1 = var7 !== var6;
            case 210:
                if (var1) {
                    _fun89241_ip = 229;
                    continue _fun89241
                }
            case 213:
                var7 = var5.isFetchingCurrentQuests;
                var6 = var4.isFetchingCurrentQuests;
                var1 = var7 !== var6;
            case 229:
                if (var1) {
                    _fun89241_ip = 248;
                    continue _fun89241
                }
            case 232:
                var7 = var5.applicationAssetFetchingIds;
                var6 = var4.applicationAssetFetchingIds;
                var1 = var7 !== var6;
            case 248:
                if (var1) {
                    _fun89241_ip = 267;
                    continue _fun89241
                }
            case 251:
                var5 = var5.experimentEmbeds;
                var4 = var4.experimentEmbeds;
                var1 = var5 !== var4;
            case 267:
                if (!var1) {
                    _fun89241_ip = 294;
                    continue _fun89241
                }
            case 270:
                var4 = var3.codedLinks;
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun89242: for (var _fun89242_ip = 0;;) switch (_fun89242_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.type;
                            var2 = var0.code;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 2;
                            var3 = var0[var5];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.BUILD_OVERRIDE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1766;
                                continue _fun89242
                            }
                        case 57:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.MANUAL_BUILD_OVERRIDE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1766;
                                continue _fun89242
                            }
                        case 93:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.EXPERIMENT;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1458;
                                continue _fun89242
                            }
                        case 129:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.INVITE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1326;
                                continue _fun89242
                            }
                        case 165:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.TEMPLATE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1216;
                                continue _fun89242
                            }
                        case 201:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.EVENT;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1212;
                                continue _fun89242
                            }
                        case 237:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.CHANNEL_LINK;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1208;
                                continue _fun89242
                            }
                        case 273:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.APP_DIRECTORY_PROFILE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1105;
                                continue _fun89242
                            }
                        case 309:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.ACTIVITY_BOOKMARK;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 1022;
                                continue _fun89242
                            }
                        case 345:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.EMBEDDED_ACTIVITY_INVITE;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 836;
                                continue _fun89242
                            }
                        case 381:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.GUILD_PRODUCT;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 832;
                                continue _fun89242
                            }
                        case 417:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.SERVER_SHOP;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 828;
                                continue _fun89242
                            }
                        case 453:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.SOCIAL_LAYER_STOREFRONT;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 824;
                                continue _fun89242
                            }
                        case 489:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.QUESTS_EMBED;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 768;
                                continue _fun89242
                            }
                        case 525:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.APP_DIRECTORY_STOREFRONT;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 764;
                                continue _fun89242
                            }
                        case 561:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 760;
                                continue _fun89242
                            }
                        case 597:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.APP_OAUTH2_LINK;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 704;
                                continue _fun89242
                            }
                        case 630:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.COLLECTIBLES_SHOP;
                            if (!(var6 !== var3)) {
                                _fun89242_ip = 700;
                                continue _fun89242
                            }
                        case 663:
                            var3 = global;
                            var4 = var3.Error;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = 'Unknown coded link type: ';
                            var3 = var5.bind(var3)(var6);
                            var3 = var4.bind(var0)(var3);
                            throw var3;
                        case 700:
                            var3 = false;
                            return var3;
                        case 704:
                            var3 = _closure2_slot0;
                            var5 = var3.applicationAssetFetchingIds;
                            var3 = _closure2_slot1;
                            var3 = var3.applicationAssetFetchingIds;
                            var3 = var5 !== var3;
                            if (var3) {
                                _fun89242_ip = 758;
                                continue _fun89242
                            }
                        case 734:
                            var5 = _closure2_slot0;
                            var5 = var5.invalidApplicationIds;
                            var4 = _closure2_slot1;
                            var4 = var4.invalidApplicationIds;
                            var3 = var5 !== var4;
                        case 758:
                            return var3;
                        case 760:
                            var3 = false;
                            return var3;
                        case 764:
                            var3 = false;
                            return var3;
                        case 768:
                            var3 = _closure2_slot0;
                            var5 = var3.quests;
                            var3 = _closure2_slot1;
                            var3 = var3.quests;
                            var3 = var5 !== var3;
                            if (var3) {
                                _fun89242_ip = 822;
                                continue _fun89242
                            }
                        case 798:
                            var5 = _closure2_slot0;
                            var5 = var5.isFetchingCurrentQuests;
                            var4 = _closure2_slot1;
                            var4 = var4.isFetchingCurrentQuests;
                            var3 = var5 !== var4;
                        case 822:
                            return var3;
                        case 824:
                            var3 = false;
                            return var3;
                        case 828:
                            var3 = false;
                            return var3;
                        case 832:
                            var3 = false;
                            return var3;
                        case 836:
                            var7 = _closure2_slot0;
                            var4 = var7.invites;
                            var3 = var4.get;
                            var4 = var3.bind(var4)(var2);
                            var3 = _closure2_slot1;
                            var8 = var3.invites;
                            var5 = var8.get;
                            var5 = var5.bind(var8)(var2);
                            var7 = var7.activityParticipants;
                            var3 = var3.activityParticipants;
                            var3 = var7 !== var3;
                            if (var3) {
                                _fun89242_ip = 922;
                                continue _fun89242
                            }
                        case 898:
                            var7 = _closure2_slot0;
                            var8 = var7.invalidApplicationIds;
                            var7 = _closure2_slot1;
                            var7 = var7.invalidApplicationIds;
                            var3 = var8 !== var7;
                        case 922:
                            if (var3) {
                                _fun89242_ip = 949;
                                continue _fun89242
                            }
                        case 925:
                            var7 = _closure2_slot0;
                            var7 = var7.applicationAssetFetchingIds;
                            var6 = _closure2_slot1;
                            var6 = var6.applicationAssetFetchingIds;
                            var3 = var7 !== var6;
                        case 949:
                            if (var3) {
                                _fun89242_ip = 1020;
                                continue _fun89242
                            }
                        case 952:
                            var6 = null;
                            var8 = var6 == var4;
                            var7 = undefined;
                            if (var8) {
                                _fun89242_ip = 968;
                                continue _fun89242
                            }
                        case 963:
                            var7 = var4.state;
                        case 968:
                            var8 = var6 == var5;
                            var4 = undefined;
                            if (var8) {
                                _fun89242_ip = 982;
                                continue _fun89242
                            }
                        case 977:
                            var4 = var5.state;
                        case 982:
                            var4 = var7 !== var4;
                            if (!var4) {
                                _fun89242_ip = 1017;
                                continue _fun89242
                            }
                        case 989:
                            var7 = var6 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89242_ip = 1003;
                                continue _fun89242
                            }
                        case 998:
                            var6 = var5.state;
                        case 1003:
                            var5 = _closure1_slot2;
                            var5 = var5.RESOLVING;
                            var4 = var6 !== var5;
                        case 1017:
                            var3 = var4;
                        case 1020:
                            return var3;
                        case 1022:
                            var3 = _closure2_slot0;
                            var5 = var3.activityParticipants;
                            var3 = _closure2_slot1;
                            var3 = var3.activityParticipants;
                            var3 = var5 !== var3;
                            if (var3) {
                                _fun89242_ip = 1076;
                                continue _fun89242
                            }
                        case 1052:
                            var5 = _closure2_slot0;
                            var6 = var5.invalidApplicationIds;
                            var5 = _closure2_slot1;
                            var5 = var5.invalidApplicationIds;
                            var3 = var6 !== var5;
                        case 1076:
                            if (var3) {
                                _fun89242_ip = 1103;
                                continue _fun89242
                            }
                        case 1079:
                            var5 = _closure2_slot0;
                            var5 = var5.applicationAssetFetchingIds;
                            var4 = _closure2_slot1;
                            var4 = var4.applicationAssetFetchingIds;
                            var3 = var5 !== var4;
                        case 1103:
                            return var3;
                        case 1105:
                            var5 = _closure2_slot0;
                            var4 = var5.appDirectoryEmbedApplications;
                            var8 = var4[var2];
                            var4 = _closure2_slot1;
                            var3 = var4.appDirectoryEmbedApplications;
                            var3 = var3[var2];
                            var7 = var5.invalidAppDirectoryEmbedApplicationIds;
                            var6 = var7.has;
                            var7 = var6.bind(var7)(var2);
                            var9 = var4.invalidAppDirectoryEmbedApplicationIds;
                            var6 = var9.has;
                            var6 = var6.bind(var9)(var2);
                            var5 = var5.appDirectoryEmbedApplicationFetchStates;
                            var5 = var5[var2];
                            var4 = var4.appDirectoryEmbedApplicationFetchStates;
                            var4 = var4[var2];
                            var3 = var8 !== var3;
                            if (var3) {
                                _fun89242_ip = 1199;
                                continue _fun89242
                            }
                        case 1195:
                            var3 = var7 !== var6;
                        case 1199:
                            if (var3) {
                                _fun89242_ip = 1206;
                                continue _fun89242
                            }
                        case 1202:
                            var3 = var5 !== var4;
                        case 1206:
                            return var3;
                        case 1208:
                            var3 = false;
                            return var3;
                        case 1212:
                            var3 = false;
                            return var3;
                        case 1216:
                            var3 = _closure2_slot0;
                            var5 = var3.guildTemplates;
                            var3 = var5.get;
                            var3 = var3.bind(var5)(var2);
                            var4 = _closure2_slot1;
                            var5 = var4.guildTemplates;
                            var4 = var5.get;
                            var4 = var4.bind(var5)(var2);
                            var5 = null;
                            var7 = var5 == var3;
                            var6 = undefined;
                            if (var7) {
                                _fun89242_ip = 1275;
                                continue _fun89242
                            }
                        case 1270:
                            var6 = var3.state;
                        case 1275:
                            var7 = var5 == var4;
                            var3 = undefined;
                            if (var7) {
                                _fun89242_ip = 1289;
                                continue _fun89242
                            }
                        case 1284:
                            var3 = var4.state;
                        case 1289:
                            var3 = var6 !== var3;
                            if (!var3) {
                                _fun89242_ip = 1324;
                                continue _fun89242
                            }
                        case 1296:
                            var6 = var5 == var4;
                            var5 = undefined;
                            if (var6) {
                                _fun89242_ip = 1310;
                                continue _fun89242
                            }
                        case 1305:
                            var5 = var4.state;
                        case 1310:
                            var4 = _closure1_slot4;
                            var4 = var4.RESOLVING;
                            var3 = var5 !== var4;
                        case 1324:
                            return var3;
                        case 1326:
                            var6 = _closure2_slot0;
                            var5 = var6.invites;
                            var3 = var5.get;
                            var3 = var3.bind(var5)(var2);
                            var4 = _closure2_slot1;
                            var7 = var4.invites;
                            var5 = var7.get;
                            var5 = var5.bind(var7)(var2);
                            var6 = var6.applicationAssetFetchingIds;
                            var4 = var4.applicationAssetFetchingIds;
                            var4 = var6 !== var4;
                            var6 = null;
                            var8 = var6 == var3;
                            var7 = undefined;
                            if (var8) {
                                _fun89242_ip = 1401;
                                continue _fun89242
                            }
                        case 1396:
                            var7 = var3.state;
                        case 1401:
                            var8 = var6 == var5;
                            var3 = undefined;
                            if (var8) {
                                _fun89242_ip = 1415;
                                continue _fun89242
                            }
                        case 1410:
                            var3 = var5.state;
                        case 1415:
                            var3 = var7 !== var3;
                            if (!var3) {
                                _fun89242_ip = 1450;
                                continue _fun89242
                            }
                        case 1422:
                            var7 = var6 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89242_ip = 1436;
                                continue _fun89242
                            }
                        case 1431:
                            var6 = var5.state;
                        case 1436:
                            var5 = _closure1_slot2;
                            var5 = var5.RESOLVING;
                            var3 = var6 !== var5;
                        case 1450:
                            if (var3) {
                                _fun89242_ip = 1456;
                                continue _fun89242
                            }
                        case 1453:
                            var3 = var4;
                        case 1456:
                            return var3;
                        case 1458:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 3;
                            var1 = var4[var1];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getExperimentFromEmbedURL;
                            var7 = var1.bind(var3)(var2);
                            var4 = null;
                            var1 = var4 != var7;
                            if (!var1) {
                                _fun89242_ip = 1764;
                                continue _fun89242
                            }
                        case 1501:
                            var3 = _closure2_slot0;
                            var3 = var3.experimentEmbeds;
                            var3 = var3.legacyExperiments;
                            var8 = var4 == var3;
                            var5 = undefined;
                            if (var8) {
                                _fun89242_ip = 1533;
                                continue _fun89242
                            }
                        case 1529:
                            var5 = var3[var7];
                        case 1533:
                            var3 = _closure2_slot1;
                            var3 = var3.experimentEmbeds;
                            var8 = var3.legacyExperiments;
                            var9 = var4 == var8;
                            var3 = undefined;
                            if (var9) {
                                _fun89242_ip = 1562;
                                continue _fun89242
                            }
                        case 1558:
                            var3 = var8[var7];
                        case 1562:
                            var3 = var5 !== var3;
                            if (var3) {
                                _fun89242_ip = 1631;
                                continue _fun89242
                            }
                        case 1569:
                            var5 = _closure2_slot0;
                            var5 = var5.experimentEmbeds;
                            var5 = var5.legacyOverridesInfo;
                            var9 = var4 == var5;
                            var8 = undefined;
                            if (var9) {
                                _fun89242_ip = 1598;
                                continue _fun89242
                            }
                        case 1594:
                            var8 = var5[var7];
                        case 1598:
                            var5 = _closure2_slot1;
                            var5 = var5.experimentEmbeds;
                            var9 = var5.legacyOverridesInfo;
                            var10 = var4 == var9;
                            var5 = undefined;
                            if (var10) {
                                _fun89242_ip = 1627;
                                continue _fun89242
                            }
                        case 1623:
                            var5 = var9[var7];
                        case 1627:
                            var3 = var8 !== var5;
                        case 1631:
                            if (var3) {
                                _fun89242_ip = 1696;
                                continue _fun89242
                            }
                        case 1634:
                            var5 = _closure2_slot0;
                            var5 = var5.experimentEmbeds;
                            var5 = var5.apexExperiments;
                            var9 = var4 == var5;
                            var8 = undefined;
                            if (var9) {
                                _fun89242_ip = 1663;
                                continue _fun89242
                            }
                        case 1659:
                            var8 = var5[var7];
                        case 1663:
                            var5 = _closure2_slot1;
                            var5 = var5.experimentEmbeds;
                            var9 = var5.apexExperiments;
                            var10 = var4 == var9;
                            var5 = undefined;
                            if (var10) {
                                _fun89242_ip = 1692;
                                continue _fun89242
                            }
                        case 1688:
                            var5 = var9[var7];
                        case 1692:
                            var3 = var8 !== var5;
                        case 1696:
                            if (var3) {
                                _fun89242_ip = 1761;
                                continue _fun89242
                            }
                        case 1699:
                            var5 = _closure2_slot0;
                            var5 = var5.experimentEmbeds;
                            var8 = var5.apexOverridesInfo;
                            var9 = var4 == var8;
                            var5 = undefined;
                            if (var9) {
                                _fun89242_ip = 1728;
                                continue _fun89242
                            }
                        case 1724:
                            var5 = var8[var7];
                        case 1728:
                            var6 = _closure2_slot1;
                            var6 = var6.experimentEmbeds;
                            var6 = var6.apexOverridesInfo;
                            var8 = var4 == var6;
                            var4 = undefined;
                            if (var8) {
                                _fun89242_ip = 1757;
                                continue _fun89242
                            }
                        case 1753:
                            var4 = var6[var7];
                        case 1757:
                            var3 = var5 !== var4;
                        case 1761:
                            var1 = var3;
                        case 1764:
                            return var1;
                        case 1766:
                            var3 = _closure2_slot0;
                            var3 = var3.buildOverrides;
                            var4 = var3[var2];
                            var1 = _closure2_slot1;
                            var1 = var1.buildOverrides;
                            var2 = var1[var2];
                            var3 = null;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun89242_ip = 1813;
                                continue _fun89242
                            }
                        case 1808:
                            var1 = var4.state;
                        case 1813:
                            var3 = var3 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun89242_ip = 1827;
                                continue _fun89242
                            }
                        case 1822:
                            var0 = var2.state;
                        case 1827:
                            var0 = var1 !== var0;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 294:
                var0 = var1;
            case 297:
                return var0;
        }
    };
    var1.codedLinksChanged = var6;
    var6 = function arg0, arg1, arg2() {
        _fun89243: for (var _fun89243_ip = 0;;) switch (_fun89243_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = var2.giftCodes;
                var3 = var0.length;
                var0 = 0;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun89243_ip = 63;
                    continue _fun89243
                }
            case 39:
                var3 = var2.giftCodes;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun89244: for (var _fun89244_ip = 0;;) switch (_fun89244_ip) {
                        case 0:
                            var7 = arg0;
                            var1 = _closure2_slot0;
                            var3 = var1.resolvedGiftCodes;
                            var2 = var3.includes;
                            var5 = var2.bind(var3)(var7);
                            var0 = _closure2_slot1;
                            var3 = var0.resolvedGiftCodes;
                            var2 = var3.includes;
                            var4 = var2.bind(var3)(var7);
                            var3 = var1.resolvingGiftCodes;
                            var2 = var3.includes;
                            var3 = var2.bind(var3)(var7);
                            var6 = var0.resolvingGiftCodes;
                            var2 = var6.includes;
                            var2 = var2.bind(var6)(var7);
                            var6 = var1.acceptingGiftCodes;
                            var1 = var6.includes;
                            var1 = var1.bind(var6)(var7);
                            var6 = var0.acceptingGiftCodes;
                            var0 = var6.includes;
                            var0 = var0.bind(var6)(var7);
                            if (!(var5 === var4)) {
                                _fun89244_ip = 126;
                                continue _fun89244
                            }
                        case 114:
                            if (!(var3 === var2)) {
                                _fun89244_ip = 126;
                                continue _fun89244
                            }
                        case 118:
                            if (!(var1 === var0)) {
                                _fun89244_ip = 126;
                                continue _fun89244
                            }
                        case 122:
                            var0 = undefined;
                            return var0;
                        case 126:
                            var0 = true;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 63:
                return var0;
        }
    };
    var1.giftCodesChanged = var6;
    var3 = function arg0, arg1, arg2() {
        _fun89245: for (var _fun89245_ip = 0;;) switch (_fun89245_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = arg0;
                var3 = var0.embeds;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot3;
                    var0 = var0.POST_PREVIEW;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var2 = var3.length;
                var0 = 0;
                var0 = var0 !== var2;
                if (!var0) {
                    _fun89245_ip = 74;
                    continue _fun89245
                }
            case 56:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun89247: for (var _fun89247_ip = 0;;) switch (_fun89247_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getMediaPostEmbedChannelId;
                            var0 = arg0;
                            var0 = var0.url;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun89247_ip = 88;
                                continue _fun89247
                            }
                        case 53:
                            var2 = _closure2_slot0;
                            var2 = var2.mediaPostPreviewEmbeds;
                            var2 = var2[var3];
                            var1 = _closure2_slot1;
                            var1 = var1.mediaPostPreviewEmbeds;
                            var1 = var1[var3];
                            var0 = var2 !== var1;
                        case 88:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 74:
                return var0;
        }
    };
    var1.mediaPostPreviewEmbedsChanged = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/MessagesUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6490, 3327, 3328, 4239, 2]);