// utils/native/parseURL.tsx
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
        var3 = var4.bind(var0)(var3);
        var6 = var3.AnalyticEvents;
        var _closure1_slot4 = var6;
        var6 = var3.GuildSettingsSections;
        var _closure1_slot5 = var6;
        var6 = var3.GuildSettingsSubsections;
        var _closure1_slot6 = var6;
        var3 = var3.LinkingTypes;
        var _closure1_slot7 = var3;
        var3 = 2;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var6 = var3.CollectibleShopTab;
        var _closure1_slot8 = var6;
        var3 = var3.CollectiblesMobileShopScreen;
        var _closure1_slot9 = var3;
        var3 = 3;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var3 = var3.UPDATE_CONFIG;
        var _closure1_slot10 = var3;
        var3 = 4;
        var3 = var5[var3];
        var3 = var4.bind(var0)(var3);
        var6 = var3.ApplePaymentLinkDeepLinkActions;
        var _closure1_slot11 = var6;
        var3 = var3.ApplePaymentLinkDeepLinkQueryKeys;
        var _closure1_slot12 = var3;
        var3 = /feature\\/([\w - ] + ) / ;
        var _closure1_slot13 = var3;
        var3 = /feature\\/boost\\ / ([0 - 9] + ) / ;
        var _closure1_slot14 = var3;
        var3 = /users\\/(\d + ) / ;
        var _closure1_slot15 = var3;
        var3 = /(?:connect|oauth2)\\/authorize / ;
        var _closure1_slot16 = var3;
        var3 = /login\\/one - time / ;
        var _closure1_slot17 = var3;
        var3 = /promos\.discord\.gg/;
        var _closure1_slot18 = var3;
        var3 = /mweb-handoff/;
        var _closure1_slot19 = var3;
        var3 = /connections\\/(xbox | playstation | playstation - stg | crunchyroll)\\ / link / ;
        var _closure1_slot20 = var3;
        var3 = /connections\\/([a - z - ] + ) / ;
        var _closure1_slot21 = var3;
        var3 = /guilds\\/(\d + )\\ / settings( ? : \\/([a-z-]+)(?:\\/([a - z - ] + )) ? ) ? /;
    var _closure1_slot22 = var3; var3 = /guilds\\/settings( ? : \\/([a-z-]+)(?:\\/([a - z - ] + )) ? ) ? /;
var _closure1_slot23 = var3;
var3 = /activate/;
var _closure1_slot24 = var3;
var3 = /quests\\/(\d + ) / ;
var _closure1_slot25 = var3;
var3 = /quest-preview\\/(\d + ) / ;
var _closure1_slot26 = var3;
var3 = /quest-home/;
var _closure1_slot27 = var3;
var3 = /subscriptions\\/(\d + ) / ;
var _closure1_slot28 = var3;
var3 = /games\\/([ ^ \\/]+)\\/updates\\ / ([ ^ \\/]+)/;
                var _closure1_slot29 = var3;
                var3 = function arg0() {
                    _fun28384: for (var _fun28384_ip = 0;;) switch (_fun28384_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.parse;
                            var4 = var1.bind(var2)(var0);
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.fromEntries;
                            var3 = var0.Object;
                            var0 = var3.entries;
                            var4 = var0.bind(var3)(var4);
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun28385: for (var _fun28385_ip = 0;;) switch (_fun28385_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = var4[Symbol.iterator];
                                        var4 = var0().next;
                                        var3 = var4().value;
                                        var1 = var0;
                                        var6 = undefined;
                                        var2 = var1 === var6;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun28385_ip = 27;
                                            continue _fun28385
                                        }
                                    case 24:
                                        var1 = var3;
                                    case 27:
                                        var3 = undefined;
                                        if (var2) {
                                            _fun28385_ip = 57;
                                            continue _fun28385
                                        }
                                    case 32:
                                        var5 = var4().value;
                                        var4 = var0;
                                        var4 = var4 === var6;
                                        var3 = undefined;
                                        var2 = var4;
                                        if (var4) {
                                            _fun28385_ip = 57;
                                            continue _fun28385
                                        }
                                    case 51:
                                        var3 = var5;
                                        var2 = var4;
                                    case 57:
                                        if (var2) {
                                            _fun28385_ip = 63;
                                            continue _fun28385
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = new Array(2);
                                        var0[0] = var1;
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.isArray;
                                        var2 = var1.bind(var2)(var3);
                                        var1 = var3;
                                        if (!var2) {
                                            _fun28385_ip = 101;
                                            continue _fun28385
                                        }
                                    case 95:
                                        var2 = 0;
                                        var1 = var3[var2];
                                    case 101:
                                        var0[1] = var1;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 92: // try_end0
                            return var0;
                        case 94: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = {};
                            return var0;
                    }
                };
                var _closure1_slot30 = var3;
                var3 = 22;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.fileFinishedImporting;
                var3 = 'utils/native/parseURL.tsx';
                var3 = var4.bind(var5)(var3);
                var1 = function arg0() {
                    _fun28386: for (var _fun28386_ip = 0;;) switch (_fun28386_ip) {
                        case 0:
                            var26 = arguments[1];
                            var10 = undefined;
                            if (!(var26 === var10)) {
                                _fun28386_ip = 13;
                                continue _fun28386
                            }
                        case 11:
                            var26 = false;
                        case 13:
                            var _closure2_slot0 = var10;
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var0 = var3[var0];
                            var3 = var1.bind(var10)(var0);
                            var1 = var3.sanitizeUrl;
                            var0 = arg0;
                            var37 = var1.bind(var3)(var0);
                            var13 = null;
                            if (!(var13 != var37)) {
                                _fun28386_ip = 5609;
                                continue _fun28386
                            }
                        case 63:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var0 = var3[var0];
                            var1 = var1.bind(var10)(var0);
                            var0 = var1.parse;
                            var0 = var0.bind(var1)(var37);
                            var19 = var0.protocol;
                            var32 = var0.host;
                            var14 = var0.hostname;
                            var38 = var0.pathname;
                            var12 = var0.query;
                            var3 = _closure1_slot30;
                            var4 = var13 != var12;
                            var0 = '';
                            var1 = var0;
                            if (!var4) {
                                _fun28386_ip = 145;
                                continue _fun28386
                            }
                        case 142:
                            var1 = var12;
                        case 145:
                            var5 = var3.bind(var10)(var1);
                            var1 = var5.fingerprint;
                            var4 = var5.username;
                            var3 = var5.attemptId;
                            var9 = var5.custom_id;
                            var17 = var5.referrer_id;
                            var8 = var5.link_id;
                            var16 = var5.sort;
                            var15 = var5.filter;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 8;
                            var5 = var7[var5];
                            var6 = var6.bind(var10)(var5);
                            var5 = var6.findCodedLink;
                            var5 = var5.bind(var6)(var37);
                            if (!(var13 != var5)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 235:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var18 = 9;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.INVITE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 5554;
                                continue _fun28386
                            }
                        case 279:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.TEMPLATE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 5509;
                                continue _fun28386
                            }
                        case 320:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.BUILD_OVERRIDE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 5464;
                                continue _fun28386
                            }
                        case 361:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.MANUAL_BUILD_OVERRIDE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 5464;
                                continue _fun28386
                            }
                        case 402:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.EXPERIMENT;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 443:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.EVENT;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 484:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.CHANNEL_LINK;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 525:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_DIRECTORY_PROFILE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 566:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.ACTIVITY_BOOKMARK;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1199;
                                continue _fun28386
                            }
                        case 607:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.EMBEDDED_ACTIVITY_INVITE;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 648:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.GUILD_PRODUCT;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 689:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.SERVER_SHOP;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 730:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.SOCIAL_LAYER_STOREFRONT;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 771:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.QUESTS_EMBED;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 812:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_DIRECTORY_STOREFRONT;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 853:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_DIRECTORY_STOREFRONT_SKU;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 894:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.APP_OAUTH2_LINK;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1263;
                                continue _fun28386
                            }
                        case 935:
                            var7 = var5.type;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var6 = var11.bind(var10)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.COLLECTIBLES_SHOP;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1015;
                                continue _fun28386
                            }
                        case 973:
                            var6 = global;
                            var7 = var6.Error;
                            var18 = var5.type;
                            var6 = var6.HermesInternal;
                            var11 = var6.concat;
                            var6 = 'Unknown coded link type: ';
                            var6 = var11.bind(var6)(var18);
                            var6 = var7.bind(var10)(var6);
                            throw var6;
                        case 1015:
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 10;
                            var6 = var11[var6];
                            var11 = var7.bind(var10)(var6);
                            var7 = var11.isVirtualCurrencyEnabled;
                            var6 = {};
                            var18 = 'parseURL';
                            var6.location = var18;
                            var6 = var7.bind(var11)(var6);
                            var6 = var6.enabled;
                            var18 = var5.code;
                            var11 = var18.split;
                            var7 = '-';
                            var18 = var11.bind(var18)(var7);
                            var11 = _closure1_slot3;
                            var7 = 2;
                            var18 = var11.bind(var10)(var18, var7);
                            var7 = 0;
                            var7 = var18[var7];
                            var11 = 1;
                            var18 = var18[var11];
                            if (!var6) {
                                _fun28386_ip = 1123;
                                continue _fun28386
                            }
                        case 1109:
                            var6 = _closure1_slot8;
                            var6 = var6.ORBS;
                            if (!(var7 !== var6)) {
                                _fun28386_ip = 1135;
                                continue _fun28386
                            }
                        case 1123:
                            var6 = _closure1_slot9;
                            var11 = var6.FEATURED_PAGE;
                            _fun28386_ip = 1145;
                            continue _fun28386;
                        case 1135:
                            var6 = _closure1_slot9;
                            var11 = var6.ORBS;
                        case 1145:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var7 = {};
                            var20 = _closure1_slot7;
                            var20 = var20.SHOP;
                            var7.type = var20;
                            var7.screen = var11;
                            var11 = undefined;
                            if (!(var0 !== var18)) {
                                _fun28386_ip = 1187;
                                continue _fun28386
                            }
                        case 1184:
                            var11 = var18;
                        case 1187:
                            var7.skuId = var11;
                            var6.payload = var7;
                            return var6;
                        case 1199:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var7 = {};
                            var11 = _closure1_slot7;
                            var11 = var11.ACTIVITY;
                            var7.type = var11;
                            var11 = var5.code;
                            var7.applicationId = var11;
                            var7.customId = var9;
                            var7.referrerId = var17;
                            var7.linkId = var8;
                            var7.isDeepLink = var26;
                            var6.payload = var7;
                            return var6;
                        case 1263:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var6 = var8[var6];
                            var6 = var7.bind(var10)(var6);
                            var6 = var6.findGiftCodes;
                            var8 = var6.bind(var10)(var37);
                            var6 = var8.length;
                            var7 = 0;
                            if (!(!(var6 > var7))) {
                                _fun28386_ip = 5420;
                                continue _fun28386
                            }
                        case 1308:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 12;
                            var6 = var11[var6];
                            var9 = var9.bind(var10)(var6);
                            var6 = var9.findRemoteAuthFingerprint;
                            var9 = var6.bind(var9)(var32, var38);
                            if (!(var13 != var9)) {
                                _fun28386_ip = 1356;
                                continue _fun28386
                            }
                        case 1344:
                            var6 = var9.length;
                            if (!(!(var6 > var7))) {
                                _fun28386_ip = 5380;
                                continue _fun28386
                            }
                        case 1356:
                            var11 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var18 = 13;
                            var6 = var6[var18];
                            var11 = var11.bind(var10)(var6);
                            var6 = var11.isDiscordHostname;
                            var6 = var6.bind(var11)(var32);
                            if (var6) {
                                _fun28386_ip = 1456;
                                continue _fun28386
                            }
                        case 1390:
                            var11 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var11 = var11.bind(var10)(var6);
                            var6 = var11.isDiscordProtocol;
                            var6 = var6.bind(var11)(var19);
                            if (var6) {
                                _fun28386_ip = 1456;
                                continue _fun28386
                            }
                        case 1421:
                            var11 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var18];
                            var11 = var11.bind(var10)(var6);
                            var6 = var11.isDiscordLocalhost;
                            var6 = var6.bind(var11)(var32, var14);
                            if (!var6) {
                                _fun28386_ip = 3629;
                                continue _fun28386
                            }
                        case 1456:
                            if (!(var13 != var38)) {
                                _fun28386_ip = 3629;
                                continue _fun28386
                            }
                        case 1463:
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var31 = 14;
                            var6 = var6[var31];
                            var11 = var11.bind(var10)(var6);
                            var6 = var11.tryParseChannelPath;
                            var11 = var6.bind(var11)(var38);
                            if (!(var13 == var11)) {
                                _fun28386_ip = 5267;
                                continue _fun28386
                            }
                        case 1501:
                            var14 = var38.match;
                            var6 = _closure1_slot25;
                            var19 = var14.bind(var38)(var6);
                            if (!(var13 != var19)) {
                                _fun28386_ip = 1535;
                                continue _fun28386
                            }
                        case 1520:
                            var6 = var19.length;
                            var18 = 1;
                            if (!(!(var6 > var18))) {
                                _fun28386_ip = 5209;
                                continue _fun28386
                            }
                        case 1535:
                            var14 = var38.match;
                            var6 = _closure1_slot26;
                            var21 = var14.bind(var38)(var6);
                            if (!(var13 != var21)) {
                                _fun28386_ip = 1569;
                                continue _fun28386
                            }
                        case 1554:
                            var6 = var21.length;
                            var20 = 1;
                            if (!(!(var6 > var20))) {
                                _fun28386_ip = 5165;
                                continue _fun28386
                            }
                        case 1569:
                            var14 = var38.match;
                            var6 = _closure1_slot27;
                            var6 = var14.bind(var38)(var6);
                            if (!(var13 == var6)) {
                                _fun28386_ip = 5116;
                                continue _fun28386
                            }
                        case 1591:
                            var14 = var38.match;
                            var6 = _closure1_slot28;
                            var6 = var14.bind(var38)(var6);
                            if (!(var13 == var6)) {
                                _fun28386_ip = 5081;
                                continue _fun28386
                            }
                        case 1613:
                            var14 = var38.match;
                            var6 = _closure1_slot15;
                            var23 = var14.bind(var38)(var6);
                            if (!(var13 != var23)) {
                                _fun28386_ip = 1647;
                                continue _fun28386
                            }
                        case 1632:
                            var6 = var23.length;
                            var22 = 1;
                            if (!(!(var6 > var22))) {
                                _fun28386_ip = 5038;
                                continue _fun28386
                            }
                        case 1647:
                            var14 = var38.match;
                            var6 = _closure1_slot16;
                            var6 = var14.bind(var38)(var6);
                            if (!(var13 != var6)) {
                                _fun28386_ip = 1717;
                                continue _fun28386
                            }
                        case 1666:
                            var14 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var6 = 15;
                            var6 = var25[var6];
                            var25 = var14.bind(var10)(var6);
                            var14 = var25.parseOAuth2AuthorizeProps;
                            var27 = var13 != var12;
                            var6 = var0;
                            if (!var27) {
                                _fun28386_ip = 1705;
                                continue _fun28386
                            }
                        case 1702:
                            var6 = var12;
                        case 1705:
                            var25 = var14.bind(var25)(var6);
                            if (!(var13 == var25)) {
                                _fun28386_ip = 4978;
                                continue _fun28386
                            }
                        case 1717:
                            var14 = var38.match;
                            var6 = _closure1_slot17;
                            var6 = var14.bind(var38)(var6);
                            if (!(var13 == var6)) {
                                _fun28386_ip = 4898;
                                continue _fun28386
                            }
                        case 1739:
                            var14 = var38.match;
                            var6 = _closure1_slot14;
                            var14 = var14.bind(var38)(var6);
                            if (!(var13 != var14)) {
                                _fun28386_ip = 1773;
                                continue _fun28386
                            }
                        case 1758:
                            var27 = var14.length;
                            var6 = 1;
                            if (!(!(var27 > var6))) {
                                _fun28386_ip = 4855;
                                continue _fun28386
                            }
                        case 1773:
                            var28 = var38.match;
                            var27 = _closure1_slot29;
                            var29 = var28.bind(var38)(var27);
                            if (!(var13 != var29)) {
                                _fun28386_ip = 1807;
                                continue _fun28386
                            }
                        case 1792:
                            var27 = var29.length;
                            var28 = 2;
                            if (!(!(var27 > var28))) {
                                _fun28386_ip = 4799;
                                continue _fun28386
                            }
                        case 1807:
                            var30 = var38.match;
                            var27 = _closure1_slot13;
                            var30 = var30.bind(var38)(var27);
                            if (!(var13 != var30)) {
                                _fun28386_ip = 3462;
                                continue _fun28386
                            }
                        case 1829:
                            var33 = var30.length;
                            var27 = 1;
                            if (!(var33 > var27)) {
                                _fun28386_ip = 3462;
                                continue _fun28386
                            }
                        case 1844:
                            var33 = var30[var27];
                            var27 = 'composeMessage';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3436;
                                continue _fun28386
                            }
                        case 1861:
                            var27 = 'contactSync';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3415;
                                continue _fun28386
                            }
                        case 1874:
                            var27 = 'addFriends';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3394;
                                continue _fun28386
                            }
                        case 1887:
                            var27 = 'friends';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3341;
                                continue _fun28386
                            }
                        case 1898:
                            var27 = 'editProfile';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3320;
                                continue _fun28386
                            }
                        case 1911:
                            var27 = 'voiceChannel';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3226;
                                continue _fun28386
                            }
                        case 1922:
                            var27 = 'sessionManagement';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3202;
                                continue _fun28386
                            }
                        case 1935:
                            var27 = 'home';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3125;
                                continue _fun28386
                            }
                        case 1946:
                            var27 = 'icymi';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3101;
                                continue _fun28386
                            }
                        case 1957:
                            var27 = 'connections';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3046;
                                continue _fun28386
                            }
                        case 1968:
                            var27 = 'family-center';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 3017;
                                continue _fun28386
                            }
                        case 1981:
                            var27 = 'promo-url';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2949;
                                continue _fun28386
                            }
                        case 1994:
                            var27 = 'account-standing';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2920;
                                continue _fun28386
                            }
                        case 2007:
                            var27 = 'apple-payment-link';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2740;
                                continue _fun28386
                            }
                        case 2020:
                            var27 = 'open-shop';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2716;
                                continue _fun28386
                            }
                        case 2033:
                            var27 = 'authorized-apps';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2692;
                                continue _fun28386
                            }
                        case 2046:
                            var27 = 'share';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2461;
                                continue _fun28386
                            }
                        case 2057:
                            var27 = 'dave-protocol-verification';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2317;
                                continue _fun28386
                            }
                        case 2070:
                            var27 = 'gift';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2293;
                                continue _fun28386
                            }
                        case 2081:
                            var27 = 'store';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2269;
                                continue _fun28386
                            }
                        case 2092:
                            var27 = 'connected-games';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2245;
                                continue _fun28386
                            }
                        case 2105:
                            var27 = 'boost-settings';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2221;
                                continue _fun28386
                            }
                        case 2115:
                            var27 = 'quest-preview-tool';
                            if (!(var27 !== var33)) {
                                _fun28386_ip = 2164;
                                continue _fun28386
                            }
                        case 2125:
                            var30 = 'subscription-settings';
                            var27 = null;
                            if (!(var30 === var33)) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2140:
                            var30 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.SUBSCRIPTION_SETTINGS;
                            var30.type = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2164:
                            var33 = _closure1_slot30;
                            var34 = var13 != var12;
                            var30 = var0;
                            if (!var34) {
                                _fun28386_ip = 2181;
                                continue _fun28386
                            }
                        case 2178:
                            var30 = var12;
                        case 2181:
                            var30 = var33.bind(var10)(var30);
                            var33 = var30.quest_id;
                            var30 = {};
                            var34 = _closure1_slot7;
                            var34 = var34.QUEST_PREVIEW_TOOL;
                            var30.type = var34;
                            var30.questId = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2221:
                            var30 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.BOOST_SETTINGS;
                            var30.type = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2245:
                            var30 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.CONNECTED_GAMES;
                            var30.type = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2269:
                            var30 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.NITRO_HOME;
                            var30.type = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2293:
                            var30 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.GIFT;
                            var30.type = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2317:
                            var33 = _closure1_slot30;
                            var34 = var13 != var12;
                            var30 = var0;
                            if (!var34) {
                                _fun28386_ip = 2334;
                                continue _fun28386
                            }
                        case 2331:
                            var30 = var12;
                        case 2334:
                            var30 = var33.bind(var10)(var30);
                            var34 = var30.userId;
                            var33 = var30.fingerprint;
                            var30 = var13 != var34;
                            var27 = null;
                            if (!var30) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2362:
                            var30 = var13 != var33;
                            var27 = null;
                            if (!var30) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2374:
                            var35 = _closure1_slot0;
                            var36 = _closure1_slot2;
                            var30 = 18;
                            var30 = var36[var30];
                            var36 = var35.bind(var10)(var30);
                            var35 = var36.getSecureFramesDeeplinkExperiment;
                            var30 = {};
                            var39 = 'parseUrl';
                            var30.location = var39;
                            var30 = var35.bind(var36)(var30);
                            var30 = var30.enabled;
                            var27 = null;
                            if (!var30) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2428:
                            var30 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.DAVE_PROTOCOL_VERIFICATION;
                            var30.type = var35;
                            var30.userId = var34;
                            var30.fingerprint = var33;
                            var27 = var30;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2461:
                            var33 = _closure1_slot0;
                            var34 = _closure1_slot2;
                            var30 = 17;
                            var30 = var34[var30];
                            var33 = var33.bind(var10)(var30);
                            var30 = var33.isIOS;
                            var30 = var30.bind(var33)();
                            var27 = null;
                            if (!var30) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2499:
                            var33 = _closure1_slot30;
                            var34 = var13 != var12;
                            var30 = var0;
                            if (!var34) {
                                _fun28386_ip = 2516;
                                continue _fun28386
                            }
                        case 2513:
                            var30 = var12;
                        case 2516:
                            var33 = var33.bind(var10)(var30);
                            var35 = var33.text;
                            var34 = var33.channelId;
                            var30 = var33.shareId;
                            var40 = var33.attachmentManifest;
                            var39 = function arg0() {
                                var2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                                var1 = var2.test;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            _closure2_slot0 = var39;
                            var36 = 'string';
                            var41 = typeof var30;
                            var33 = undefined;
                            if (!(var36 === var41)) {
                                _fun28386_ip = 2578;
                                continue _fun28386
                            }
                        case 2565:
                            var39 = var39.bind(var10)(var30);
                            var33 = undefined;
                            if (!var39) {
                                _fun28386_ip = 2578;
                                continue _fun28386
                            }
                        case 2575:
                            var33 = var30;
                        case 2578:
                            var30 = typeof var40;
                            if (!(var36 !== var30)) {
                                _fun28386_ip = 2591;
                                continue _fun28386
                            }
                        case 2585:
                            var36 = new Array(0);
                            _fun28386_ip = 2610;
                            continue _fun28386;
                        case 2591:
                            var30 = global;
                            var39 = var30.JSON;
                            var30 = var39.parse;
                            var36 = var30.bind(var39)(var40);
                        case 2610:
                            var30 = global;
                            var39 = var30.Array;
                            var30 = var39.isArray;
                            var30 = var30.bind(var39)(var36);
                            if (var30) {
                                _fun28386_ip = 2635;
                                continue _fun28386
                            }
                        case 2631:
                            var36 = new Array(0);
                        case 2635:
                            var30 = var36.filter;
                            var24 = function(arg0) { // Environment: var24
                                _fun28388: for (var _fun28388_ip = 0;;) switch (_fun28388_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.originalFilename;
                                        var3 = 'string';
                                        var0 = typeof var0;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun28388_ip = 38;
                                            continue _fun28388
                                        }
                                    case 25:
                                        var2 = var1.temporaryFilename;
                                        var2 = typeof var2;
                                        var0 = var3 === var2;
                                    case 38:
                                        if (!var0) {
                                            _fun28388_ip = 61;
                                            continue _fun28388
                                        }
                                    case 41:
                                        var3 = _closure2_slot0;
                                        var2 = var1.temporaryFilename;
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var2);
                                    case 61:
                                        return var0;
                                }
                            };
                            var30 = var30.bind(var36)(var24);
                            var24 = {};
                            var36 = _closure1_slot7;
                            var36 = var36.SHARE;
                            var24.type = var36;
                            var24.text = var35;
                            var24.channelId = var34;
                            var24.shareId = var33;
                            var24.attachmentManifest = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2692:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.AUTHORIZED_APPS;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2716:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.SHOP;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2740:
                            var30 = _closure1_slot0;
                            var33 = _closure1_slot2;
                            var24 = 16;
                            var24 = var33[var24];
                            var33 = var30.bind(var10)(var24);
                            var30 = var33.getApplePaymentLinkExperimentConfig;
                            var24 = {};
                            var34 = 'parseUrl';
                            var24.location = var34;
                            var24 = var30.bind(var33)(var24);
                            var24 = var24.enabled;
                            var33 = _closure1_slot30;
                            var34 = var13 != var12;
                            var30 = var0;
                            if (!var34) {
                                _fun28386_ip = 2803;
                                continue _fun28386
                            }
                        case 2800:
                            var30 = var12;
                        case 2803:
                            var34 = var33.bind(var10)(var30);
                            var30 = _closure1_slot12;
                            var33 = var30.DEEP_LINK_ACTION;
                            var33 = var34[var33];
                            var30 = var30.GUILD_ID;
                            var30 = var34[var30];
                            if (!var24) {
                                _fun28386_ip = 2865;
                                continue _fun28386
                            }
                        case 2835:
                            var35 = _closure1_slot0;
                            var36 = _closure1_slot2;
                            var34 = 17;
                            var34 = var36[var34];
                            var35 = var35.bind(var10)(var34);
                            var34 = var35.isIOS;
                            var24 = var34.bind(var35)();
                        case 2865:
                            var27 = null;
                            if (!var24) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2873:
                            var24 = {};
                            var34 = _closure1_slot7;
                            var34 = var34.APPLE_PAYMENT_LINK;
                            var24.type = var34;
                            if (!(var13 == var33)) {
                                _fun28386_ip = 2903;
                                continue _fun28386
                            }
                        case 2893:
                            var34 = _closure1_slot11;
                            var33 = var34.DEFAULT;
                        case 2903:
                            var24.deepLinkAction = var33;
                            var24.guildId = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2920:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.ACCOUNT_STANDING;
                            var24.type = var30;
                            var24.pathname = var38;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 2949:
                            var30 = _closure1_slot30;
                            var33 = var13 != var12;
                            var24 = var0;
                            if (!var33) {
                                _fun28386_ip = 2966;
                                continue _fun28386
                            }
                        case 2963:
                            var24 = var12;
                        case 2966:
                            var24 = var30.bind(var10)(var24);
                            var30 = var24.promo_url;
                            var27 = null;
                            if (!(var10 !== var30)) {
                                _fun28386_ip = 3455;
                                continue _fun28386
                            }
                        case 2988:
                            var24 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.FEATURE_PROMO_URL;
                            var24.type = var33;
                            var24.promoUrl = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3017:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.FAMILY_CENTER;
                            var24.type = var30;
                            var24.pathname = var38;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3046:
                            var30 = _closure1_slot30;
                            var33 = var13 != var12;
                            var24 = var0;
                            if (!var33) {
                                _fun28386_ip = 3063;
                                continue _fun28386
                            }
                        case 3060:
                            var24 = var12;
                        case 3063:
                            var24 = var30.bind(var10)(var24);
                            var30 = var24.source;
                            var24 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.CONNECTIONS;
                            var24.type = var33;
                            var24.source = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3101:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.ICYMI;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3125:
                            var30 = _closure1_slot30;
                            var33 = var13 != var12;
                            var24 = var0;
                            if (!var33) {
                                _fun28386_ip = 3142;
                                continue _fun28386
                            }
                        case 3139:
                            var24 = var12;
                        case 3142:
                            var24 = var30.bind(var10)(var24);
                            var34 = var24.guild_id;
                            var33 = var24.highlight_channel_id;
                            var30 = var24.highlight_message_id;
                            var24 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.GUILD_HOME;
                            var24.type = var35;
                            var24.guildId = var34;
                            var24.highlightChannelId = var33;
                            var24.highlightMessageId = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3202:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.SESSION_MANAGEMENT;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3226:
                            var30 = _closure1_slot30;
                            var33 = var13 != var12;
                            var24 = var0;
                            if (!var33) {
                                _fun28386_ip = 3243;
                                continue _fun28386
                            }
                        case 3240:
                            var24 = var12;
                        case 3243:
                            var24 = var30.bind(var10)(var24);
                            var36 = var24.guild_id;
                            var35 = var24.channel_id;
                            var34 = var24.user_id;
                            var33 = var24.via;
                            var30 = var24.action;
                            var24 = {};
                            var39 = _closure1_slot7;
                            var39 = var39.VOICE_CHANNEL;
                            var24.type = var39;
                            var24.guildId = var36;
                            var24.channelId = var35;
                            var24.userId = var34;
                            var24.via = var33;
                            var24.action = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3320:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.EDIT_PROFILE;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3341:
                            var30 = _closure1_slot30;
                            var33 = var13 != var12;
                            var24 = var0;
                            if (!var33) {
                                _fun28386_ip = 3358;
                                continue _fun28386
                            }
                        case 3355:
                            var24 = var12;
                        case 3358:
                            var24 = var30.bind(var10)(var24);
                            var30 = var24.user_id;
                            var24 = {};
                            var33 = _closure1_slot7;
                            var33 = var33.FRIENDS;
                            var24.type = var33;
                            var24.userId = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3394:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.ADD_FRIENDS;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3415:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.CONTACT_SYNC;
                            var24.type = var30;
                            var27 = var24;
                            _fun28386_ip = 3455;
                            continue _fun28386;
                        case 3436:
                            var24 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.COMPOSE_MESSAGE;
                            var24.type = var30;
                            var27 = var24;
                        case 3455:
                            if (!(var13 == var27)) {
                                _fun28386_ip = 4780;
                                continue _fun28386
                            }
                        case 3462:
                            var30 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var24 = var24[var31];
                            var30 = var30.bind(var10)(var24);
                            var24 = var30.tryParseEventDetailsPath;
                            var31 = var24.bind(var30)(var38);
                            if (!(var13 == var31)) {
                                _fun28386_ip = 4714;
                                continue _fun28386
                            }
                        case 3497:
                            var30 = var38.match;
                            var24 = _closure1_slot19;
                            var24 = var30.bind(var38)(var24);
                            if (!(var13 == var24)) {
                                _fun28386_ip = 4381;
                                continue _fun28386
                            }
                        case 3519:
                            var30 = var38.match;
                            var24 = _closure1_slot20;
                            var30 = var30.bind(var38)(var24);
                            if (!(var13 == var30)) {
                                _fun28386_ip = 4279;
                                continue _fun28386
                            }
                        case 3541:
                            var33 = var38.match;
                            var24 = _closure1_slot21;
                            var33 = var33.bind(var38)(var24);
                            if (!(var13 == var33)) {
                                _fun28386_ip = 4175;
                                continue _fun28386
                            }
                        case 3563:
                            var34 = var38.match;
                            var24 = _closure1_slot22;
                            var34 = var34.bind(var38)(var24);
                            if (!(var13 == var34)) {
                                _fun28386_ip = 4043;
                                continue _fun28386
                            }
                        case 3585:
                            var35 = var38.match;
                            var24 = _closure1_slot23;
                            var35 = var35.bind(var38)(var24);
                            if (!(var13 == var35)) {
                                _fun28386_ip = 3889;
                                continue _fun28386
                            }
                        case 3607:
                            var36 = var38.match;
                            var24 = _closure1_slot24;
                            var24 = var36.bind(var38)(var24);
                            if (!(var13 == var24)) {
                                _fun28386_ip = 3808;
                                continue _fun28386
                            }
                        case 3629:
                            var36 = var13 == var32;
                            var24 = undefined;
                            if (var36) {
                                _fun28386_ip = 3653;
                                continue _fun28386
                            }
                        case 3638:
                            var38 = var32.match;
                            var36 = _closure1_slot18;
                            var24 = var38.bind(var32)(var36);
                        case 3653:
                            if (!(var13 == var24)) {
                                _fun28386_ip = 3766;
                                continue _fun28386
                            }
                        case 3657:
                            var24 = _closure1_slot10;
                            var36 = var13 == var24;
                            var24 = undefined;
                            if (var36) {
                                _fun28386_ip = 3685;
                                continue _fun28386
                            }
                        case 3670:
                            var36 = _closure1_slot10;
                            var36 = var36.url;
                            var24 = var36.host;
                        case 3685:
                            if (!(var32 !== var24)) {
                                _fun28386_ip = 3724;
                                continue _fun28386
                            }
                        case 3689:
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var32 = {};
                            var36 = _closure1_slot7;
                            var36 = var36.NONE;
                            var32.type = var36;
                            var24.payload = var32;
                            _fun28386_ip = 3764;
                            continue _fun28386;
                        case 3724:
                            var32 = {};
                            var32.fingerprint = var1;
                            var32.attemptId = var3;
                            var36 = {};
                            var38 = _closure1_slot7;
                            var38 = var38.MOBILE_NATIVE_UPDATE;
                            var36.type = var38;
                            var36.url = var37;
                            var32.payload = var36;
                            var24 = var32;
                        case 3764:
                            _fun28386_ip = 3806;
                            continue _fun28386;
                        case 3766:
                            var32 = {};
                            var32.fingerprint = var1;
                            var32.attemptId = var3;
                            var36 = {};
                            var38 = _closure1_slot7;
                            var38 = var38.PROMOTIONS;
                            var36.type = var38;
                            var36.url = var37;
                            var32.payload = var36;
                            var24 = var32;
                        case 3806:
                            return var24;
                        case 3808:
                            var32 = _closure1_slot30;
                            var24 = global;
                            var36 = var24.decodeURIComponent;
                            var37 = var13 != var12;
                            var24 = var0;
                            if (!var37) {
                                _fun28386_ip = 3833;
                                continue _fun28386
                            }
                        case 3830:
                            var24 = var12;
                        case 3833:
                            var24 = var36.bind(var10)(var24);
                            var24 = var32.bind(var10)(var24);
                            var36 = var24.user_code;
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var32 = {};
                            var37 = _closure1_slot7;
                            var37 = var37.ACTIVATE_DEVICE;
                            var32.type = var37;
                            var32.userCode = var36;
                            var24.payload = var32;
                            return var24;
                        case 3889:
                            var32 = _closure1_slot3;
                            var24 = 3;
                            var32 = var32.bind(var10)(var35, var24);
                            var24 = 1;
                            var42 = var32[var24];
                            var24 = 2;
                            var38 = var32[var24];
                            var32 = _closure1_slot30;
                            var35 = var13 != var12;
                            var24 = var0;
                            if (!var35) {
                                _fun28386_ip = 3933;
                                continue _fun28386
                            }
                        case 3930:
                            var24 = var12;
                        case 3933:
                            var24 = var32.bind(var10)(var24);
                            var35 = var24.feature;
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var32 = {};
                            var36 = _closure1_slot7;
                            var36 = var36.GUILD_SETTINGS_PICKER;
                            var32.type = var36;
                            var37 = _closure1_slot1;
                            var39 = _closure1_slot2;
                            var36 = 21;
                            var40 = var39[var36];
                            var41 = var37.bind(var10)(var40);
                            var40 = _closure1_slot5;
                            var40 = var41.bind(var10)(var40, var42);
                            var32.settingsSection = var40;
                            var36 = var39[var36];
                            var37 = var37.bind(var10)(var36);
                            var36 = _closure1_slot6;
                            var36 = var37.bind(var10)(var36, var38);
                            var32.settingsSubsection = var36;
                            var32.feature = var35;
                            var24.payload = var32;
                            return var24;
                        case 4043:
                            var32 = _closure1_slot3;
                            var24 = 4;
                            var32 = var32.bind(var10)(var34, var24);
                            var24 = 1;
                            var34 = var32[var24];
                            var24 = 2;
                            var40 = var32[var24];
                            var24 = 3;
                            var36 = var32[var24];
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var32 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.GUILD_SETTINGS;
                            var32.type = var35;
                            var32.guildId = var34;
                            var35 = _closure1_slot1;
                            var37 = _closure1_slot2;
                            var34 = 21;
                            var38 = var37[var34];
                            var39 = var35.bind(var10)(var38);
                            var38 = _closure1_slot5;
                            var38 = var39.bind(var10)(var38, var40);
                            var32.settingsSection = var38;
                            var34 = var37[var34];
                            var35 = var35.bind(var10)(var34);
                            var34 = _closure1_slot6;
                            var34 = var35.bind(var10)(var34, var36);
                            var32.settingsSubsection = var34;
                            var24.payload = var32;
                            return var24;
                        case 4175:
                            var32 = _closure1_slot3;
                            var24 = 2;
                            var32 = var32.bind(var10)(var33, var24);
                            var24 = var32[var7];
                            var24 = 1;
                            var34 = var32[var24];
                            var32 = _closure1_slot30;
                            var24 = global;
                            var33 = var24.decodeURIComponent;
                            var35 = var13 != var12;
                            var24 = var0;
                            if (!var35) {
                                _fun28386_ip = 4224;
                                continue _fun28386
                            }
                        case 4221:
                            var24 = var12;
                        case 4224:
                            var24 = var33.bind(var10)(var24);
                            var33 = var32.bind(var10)(var24);
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var32 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.USER_CONNECTIONS_CALLBACK;
                            var32.type = var35;
                            var32.provider = var34;
                            var32.searchParams = var33;
                            var24.payload = var32;
                            return var24;
                        case 4279:
                            var32 = _closure1_slot30;
                            var24 = global;
                            var33 = var24.decodeURIComponent;
                            var34 = var13 != var12;
                            var24 = var0;
                            if (!var34) {
                                _fun28386_ip = 4304;
                                continue _fun28386
                            }
                        case 4301:
                            var24 = var12;
                        case 4304:
                            var24 = var33.bind(var10)(var24);
                            var24 = var32.bind(var10)(var24);
                            var33 = var24.code;
                            var32 = var24.state;
                            var24 = 1;
                            var34 = var30[var24];
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var30 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.USER_CONNECTIONS_LINK_CALLBACK;
                            var30.type = var35;
                            var30.provider = var34;
                            var30.callbackCode = var33;
                            var30.callbackState = var32;
                            var24.payload = var30;
                            return var24;
                        case 4381:
                            var32 = _closure1_slot30;
                            var24 = global;
                            var30 = var24.decodeURIComponent;
                            var30 = var30.bind(var10)(var12);
                            var30 = var32.bind(var10)(var30);
                            var34 = var30.key;
                            var35 = var30.redirect;
                            var36 = var30.fingerprint;
                            if (!(var13 != var34)) {
                                _fun28386_ip = 4586;
                                continue _fun28386
                            }
                        case 4427:
                            if (!(var13 != var35)) {
                                _fun28386_ip = 4586;
                                continue _fun28386
                            }
                        case 4434:
                            var33 = var24.URL;
                            var30 = var24.location;
                            var37 = var30.protocol;
                            var30 = var24.window;
                            var30 = var30.GLOBAL_ENV;
                            var32 = var30.WEBAPP_ENDPOINT;
                            var30 = var24.HermesInternal;
                            var30 = var30.concat;
                            var44 = var30.bind(var0)(var37, var32);
                            var32 = var33.prototype;
                            var32 = Object.create(var32, {
                                constructor: {
                                    value: var33
                                }
                            });
                            var46 = var32;
                            var45 = var35;
                            var30 = new var46[var33](var45, var44, var43);
                            var33 = var30 instanceof Object ? var30 : var32;
                            if (!(var13 != var36)) {
                                _fun28386_ip = 4536;
                                continue _fun28386
                            }
                        case 4514:
                            var35 = var33.searchParams;
                            var32 = var35.append;
                            var30 = 'fingerprint';
                            var30 = var32.bind(var35)(var30, var36);
                        case 4536:
                            var30 = {};
                            var30.fingerprint = var36;
                            var30.attemptId = var3;
                            var32 = {};
                            var35 = _closure1_slot7;
                            var35 = var35.MOBILE_WEB_HANDOFF;
                            var32.type = var35;
                            var32.nonce = var34;
                            var32.redirectUrl = var33;
                            var32.fingerprint = var36;
                            var30.payload = var32;
                            return var30;
                        case 4586:
                            var32 = _closure1_slot1;
                            var38 = _closure1_slot2;
                            var30 = 19;
                            var30 = var38[var30];
                            var35 = var32.bind(var10)(var30);
                            var34 = var35.track;
                            var30 = _closure1_slot4;
                            var33 = var30.MOBILE_WEB_HANDOFF_FAILURE;
                            var32 = {};
                            var30 = 'invalid_query_params';
                            var32.reason = var30;
                            var37 = _closure1_slot0;
                            var30 = 20;
                            var30 = var38[var30];
                            var37 = var37.bind(var10)(var30);
                            var30 = var37.maybeExtractId;
                            var30 = var30.bind(var37)(var36);
                            var32.fingerprint = var30;
                            var30 = {};
                            var30.fingerprint = var36;
                            var30 = var34.bind(var35)(var33, var32, var30);
                            var32 = var24.Error;
                            var24 = var32.prototype;
                            var30 = Object.create(var24, {
                                constructor: {
                                    value: var32
                                }
                            });
                            var45 = 'Missing nonce or redirect query params';
                            var46 = var30;
                            var24 = new var46[var32](var45, var44);
                            var24 = var24 instanceof Object ? var24 : var30;
                            throw var24;
                        case 4714:
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var30 = {};
                            var32 = _closure1_slot7;
                            var32 = var32.GUILD_EVENT_DETAILS;
                            var30.type = var32;
                            var32 = var31.guildEventId;
                            var30.guildEventId = var32;
                            var32 = var31.guildId;
                            var30.guildId = var32;
                            var31 = var31.recurrenceId;
                            var30.recurrenceId = var31;
                            var24.payload = var30;
                            return var24;
                        case 4780:
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var24.payload = var27;
                            return var24;
                        case 4799:
                            var24 = {};
                            var24.fingerprint = var1;
                            var24.attemptId = var3;
                            var27 = {};
                            var30 = _closure1_slot7;
                            var30 = var30.GAME_UPDATE;
                            var27.type = var30;
                            var30 = 1;
                            var30 = var29[var30];
                            var27.gameId = var30;
                            var28 = var29[var28];
                            var27.gameUpdateId = var28;
                            var24.payload = var27;
                            return var24;
                        case 4855:
                            var24 = var14[var6];
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var27 = _closure1_slot7;
                            var27 = var27.BOOST_MARKETING;
                            var14.type = var27;
                            var14.guildId = var24;
                            var6.payload = var14;
                            return var6;
                        case 4898:
                            var14 = _closure1_slot30;
                            var24 = var13 != var12;
                            var6 = var0;
                            if (!var24) {
                                _fun28386_ip = 4915;
                                continue _fun28386
                            }
                        case 4912:
                            var6 = var12;
                        case 4915:
                            var6 = var14.bind(var10)(var6);
                            var27 = var6.token;
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var24 = _closure1_slot7;
                            var24 = var24.ONE_TIME_LOGIN;
                            var14.type = var24;
                            var28 = var13 != var27;
                            var24 = null;
                            if (!var28) {
                                _fun28386_ip = 4966;
                                continue _fun28386
                            }
                        case 4963:
                            var24 = var27;
                        case 4966:
                            var14.token = var24;
                            var6.payload = var14;
                            return var6;
                        case 4978:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var24 = _closure1_slot7;
                            var24 = var24.OAUTH2_AUTHORIZE;
                            var14.type = var24;
                            var24 = {};
                            var45 = var24;
                            var44 = var25;
                            var25 = copyDataProperties(var45, var44);
                            var25 = 'wasDeepLink';
                            var24[var25] = var26;
                            var14.props = var24;
                            var6.payload = var14;
                            return var6;
                        case 5038:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var24 = _closure1_slot7;
                            var24 = var24.USER_PROFILE;
                            var14.type = var24;
                            var22 = var23[var22];
                            var14.userId = var22;
                            var6.payload = var14;
                            return var6;
                        case 5081:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var22 = _closure1_slot7;
                            var22 = var22.SUBSCRIPTION_SETTINGS;
                            var14.type = var22;
                            var6.payload = var14;
                            return var6;
                        case 5116:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var22 = _closure1_slot7;
                            var22 = var22.QUESTS;
                            var14.type = var22;
                            var14.referrerId = var17;
                            var14.sort = var16;
                            var14.filter = var15;
                            var6.payload = var14;
                            return var6;
                        case 5165:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var22 = _closure1_slot7;
                            var22 = var22.QUEST_PREVIEW_TOOL;
                            var14.type = var22;
                            var20 = var21[var20];
                            var14.questId = var20;
                            var6.payload = var14;
                            return var6;
                        case 5209:
                            var6 = {};
                            var6.fingerprint = var1;
                            var6.attemptId = var3;
                            var14 = {};
                            var20 = _closure1_slot7;
                            var20 = var20.QUESTS;
                            var14.type = var20;
                            var18 = var19[var18];
                            var14.questId = var18;
                            var14.referrerId = var17;
                            var14.sort = var16;
                            var14.filter = var15;
                            var6.payload = var14;
                            return var6;
                        case 5267:
                            var6 = _closure1_slot30;
                            var14 = var13 != var12;
                            if (!var14) {
                                _fun28386_ip = 5281;
                                continue _fun28386
                            }
                        case 5278:
                            var0 = var12;
                        case 5281:
                            var0 = var6.bind(var10)(var0);
                            var10 = var0.summaryId;
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var6 = {};
                            var12 = var11.messageId;
                            if (!(var13 == var12)) {
                                _fun28386_ip = 5327;
                                continue _fun28386
                            }
                        case 5315:
                            var12 = _closure1_slot7;
                            var12 = var12.CHANNEL;
                            _fun28386_ip = 5337;
                            continue _fun28386;
                        case 5327:
                            var13 = _closure1_slot7;
                            var12 = var13.MESSAGE;
                        case 5337:
                            var6.type = var12;
                            var12 = var11.guildId;
                            var6.guildId = var12;
                            var12 = var11.channelId;
                            var6.channelId = var12;
                            var11 = var11.messageId;
                            var6.messageId = var11;
                            var6.summaryId = var10;
                            var0.payload = var6;
                            return var0;
                        case 5380:
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var6 = {};
                            var10 = _closure1_slot7;
                            var10 = var10.REMOTE_AUTH;
                            var6.type = var10;
                            var6.remoteAuthFingerprint = var9;
                            var0.payload = var6;
                            return var0;
                        case 5420:
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var6 = {};
                            var9 = _closure1_slot7;
                            var9 = var9.GIFT_CODE;
                            var6.type = var9;
                            var7 = var8[var7];
                            var6.giftCode = var7;
                            var0.payload = var6;
                            return var0;
                        case 5464:
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var6 = {};
                            var7 = _closure1_slot7;
                            var7 = var7.BUILD_OVERRIDE;
                            var6.type = var7;
                            var7 = var5.code;
                            var6.overrideUrl = var7;
                            var0.payload = var6;
                            return var0;
                        case 5509:
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var6 = {};
                            var7 = _closure1_slot7;
                            var7 = var7.GUILD_TEMPLATE;
                            var6.type = var7;
                            var7 = var5.code;
                            var6.guildTemplateCode = var7;
                            var0.payload = var6;
                            return var0;
                        case 5554:
                            var0 = {};
                            var0.fingerprint = var1;
                            var0.attemptId = var3;
                            var1 = {};
                            var6 = _closure1_slot7;
                            var6 = var6.INVITE;
                            var1.type = var6;
                            var5 = var5.code;
                            var1.inviteCode = var5;
                            var1.username = var4;
                            var1.deeplinkAttemptId = var3;
                            var0.payload = var1;
                            return var0;
                        case 5609:
                            var0 = {};
                            var1 = {};
                            var2 = _closure1_slot7;
                            var2 = var2.NONE;
                            var1.type = var2;
                            var0.payload = var1;
                            return var0;
                    }
                };
                var2.default = var1;
                return var0;
            })(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 3289, 3322, 3323, 1454, 3153, 1459, 3324, 3329, 3346, 3350, 3464, 1457, 3465, 3339, 3466, 478, 3469, 796, 490, 3470, 2]);