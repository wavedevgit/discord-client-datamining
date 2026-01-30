// utils/MaskedLinkUtils.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot11 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot12 = var6;
    var3 = var3.MessageFlags;
    var _closure1_slot13 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/MaskedLinkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: isLinkTrusted, environment: var1
        _fun51519: for (var _fun51519_ip = 0;;) switch (_fun51519_ip) {
            case 0:
                var3 = _closure1_slot4;
                var1 = var3.getChannel;
                var4 = _closure1_slot9;
                var0 = var4.getChannelId;
                var0 = var0.bind(var4)();
                var5 = var1.bind(var3)(var0);
                var0 = null;
                var1 = var0 != var5;
                if (!var1) {
                    _fun51519_ip = 59;
                    continue _fun51519
                }
            case 40:
                var4 = var5.type;
                var3 = _closure1_slot10;
                var3 = var3.DM;
                var1 = var4 === var3;
            case 59:
                if (!var1) {
                    _fun51519_ip = 104;
                    continue _fun51519
                }
            case 62:
                var3 = _closure1_slot8;
                var2 = var3.isFriend;
                var4 = var5.getRecipientId;
                var4 = var4.bind(var5)();
                var5 = var0 != var4;
                var0 = '';
                if (!var5) {
                    _fun51519_ip = 96;
                    continue _fun51519
                }
            case 93:
                var0 = var4;
            case 96:
                var0 = var2.bind(var3)(var0);
                var1 = !var0;
            case 104:
                var0 = !var1;
                if (var1) {
                    _fun51519_ip = 120;
                    continue _fun51519
                }
            case 110:
                var2 = arg0;
                var1 = arg1;
                var0 = var2 === var1;
            case 120:
                return var0;
        }
    };
    var2.isLinkTrusted = var3;
    var1 = function(arg0, arg1) { // Original name: handleClick, environment: var1
        _fun51520: for (var _fun51520_ip = 0;;) switch (_fun51520_ip) {
            case 0:
                var8 = arg0;
                var2 = arguments[2];
                var0 = arg1;
                var9 = undefined;
                if (!(var2 === var9)) {
                    _fun51520_ip = 21;
                    continue _fun51520
                }
            case 17:
                var2 = new Array(0);
            case 21:
                var30 = var2;
                var3 = arguments[3];
                var23 = undefined;
                var25 = undefined;
                var _closure2_slot0 = var9;
                var24 = undefined;
                var7 = undefined;
                var37 = undefined;
                var14 = undefined;
                var _closure2_slot1 = var9;
                var20 = undefined;
                var1 = undefined;
                var _closure2_slot2 = var9;
                var13 = undefined;
                var _closure2_slot3 = var9;
                var6 = undefined;
                var _closure2_slot4 = var9;
                var15 = undefined;
                var _closure2_slot5 = var9;
                var12 = undefined;
                var _closure2_slot6 = var9;
                var11 = undefined;
                var _closure2_slot7 = var9;
                var10 = undefined;
                var40 = undefined;
                var36 = undefined;
                var34 = undefined;
                var35 = undefined;
                var27 = undefined;
                var29 = undefined;
                var28 = undefined;
                var33 = undefined;
                var31 = undefined;
                var32 = undefined;
                var26 = undefined;
                var5 = undefined;
                var19 = undefined;
                var18 = undefined;
                var22 = undefined;
                var17 = undefined;
                var16 = undefined;
                var23 = var8.trusted;
                var25 = var8.onClick;
                var2 = var8.onConfirm;
                _closure2_slot0 = var2;
                var24 = var8.onCancel;
                var7 = var8.shouldConfirm;
                var37 = var8.messageId;
                var2 = var8.channelId;
                var14 = var2;
                _closure2_slot1 = var2;
                var38 = _closure1_slot1;
                var39 = _closure1_slot2;
                var2 = 8;
                var2 = var39[var2];
                var39 = var38.bind(var9)(var2);
                var38 = var39.sanitizeUrl;
                var2 = var8.href;
                var38 = var38.bind(var39)(var2);
                var20 = var38;
                var2 = null;
                if (!(var2 != var38)) {
                    _fun51520_ip = 1992;
                    continue _fun51520
                }
            case 224:
                var38 = var20;
                var1 = var38;
                _closure2_slot2 = var38;
            case 234: // try_start_0
                var38 = global;
                var39 = var38.decodeURI;
                var38 = var20;
                var38 = var39.bind(var9)(var38);
            case 250: // try_end0
                _fun51520_ip = 274;
                continue _fun51520;
            case 252: // catch_target0
                CatchBlockStart(arg_register = 38);
                var38 = global;
                var38 = var38.encodeURI;
                var20 = var38.bind(var9)(var20);
                var1 = var20;
                _closure2_slot2 = var20;
            case 274:
                var13 = null;
                _closure2_slot3 = var2;
                var20 = false;
                var6 = false;
                _closure2_slot4 = var20;
                var38 = var37;
                var15 = var38;
                _closure2_slot5 = var38;
                var39 = var14;
                var12 = var39;
                _closure2_slot6 = var39;
                var11 = null;
                _closure2_slot7 = var2;
                if (!(var2 != var38)) {
                    _fun51520_ip = 834;
                    continue _fun51520
                }
            case 321:
                var38 = var14;
                if (!(var2 != var38)) {
                    _fun51520_ip = 834;
                    continue _fun51520
                }
            case 331:
                var41 = _closure1_slot7;
                var38 = var41.getMessage;
                var39 = var14;
                var34 = var38.bind(var41)(var39, var37);
                var38 = _closure1_slot4;
                var37 = var38.getBasicChannel;
                var37 = var37.bind(var38)(var39);
                var35 = var37;
                var38 = var2 == var37;
                var37 = undefined;
                if (var38) {
                    _fun51520_ip = 385;
                    continue _fun51520
                }
            case 377:
                var38 = var35;
                var37 = var38.guild_id;
            case 385:
                var10 = var37;
                var37 = var2 != var37;
                var38 = null;
                if (!var37) {
                    _fun51520_ip = 400;
                    continue _fun51520
                }
            case 397:
                var38 = var10;
            case 400:
                var13 = var38;
                _closure2_slot3 = var38;
                var37 = _closure1_slot5;
                var10 = var37.getGuild;
                var27 = var10.bind(var37)(var38);
                var39 = var34;
                var41 = var2 == var39;
                var39 = undefined;
                if (var41) {
                    _fun51520_ip = 459;
                    continue _fun51520
                }
            case 433:
                var41 = var34;
                var41 = var41.messageReference;
                var40 = var41;
                var41 = var2 == var41;
                var39 = undefined;
                if (var41) {
                    _fun51520_ip = 459;
                    continue _fun51520
                }
            case 454:
                var39 = var40.guild_id;
            case 459:
                var39 = var2 != var39;
                var38 = var39;
                if (!var39) {
                    _fun51520_ip = 494;
                    continue _fun51520
                }
            case 469:
                var39 = var34;
                var40 = var2 == var39;
                var39 = undefined;
                if (var40) {
                    _fun51520_ip = 490;
                    continue _fun51520
                }
            case 481:
                var40 = var34;
                var39 = var40.webhookId;
            case 490:
                var38 = var2 != var39;
            case 494:
                var37 = var38;
                if (!var38) {
                    _fun51520_ip = 539;
                    continue _fun51520
                }
            case 500:
                var38 = var34;
                var39 = var2 == var38;
                var38 = undefined;
                if (var39) {
                    _fun51520_ip = 536;
                    continue _fun51520
                }
            case 512:
                var41 = var34;
                var40 = var41.hasFlag;
                var39 = _closure1_slot13;
                var39 = var39.IS_CROSSPOST;
                var38 = var40.bind(var41)(var39);
            case 536:
                var37 = var38;
            case 539:
                var10 = var37;
                if (!var37) {
                    _fun51520_ip = 552;
                    continue _fun51520
                }
            case 545:
                var37 = var13;
                var10 = var2 != var37;
            case 552:
                var29 = var10;
                if (!var10) {
                    _fun51520_ip = 600;
                    continue _fun51520
                }
            case 558:
                var10 = var34;
                var37 = var2 == var10;
                var10 = undefined;
                if (var37) {
                    _fun51520_ip = 596;
                    continue _fun51520
                }
            case 570:
                var37 = var34;
                var37 = var37.messageReference;
                var36 = var37;
                var37 = var2 == var37;
                var10 = undefined;
                if (var37) {
                    _fun51520_ip = 596;
                    continue _fun51520
                }
            case 591:
                var10 = var36.guild_id;
            case 596:
                if (!(var2 == var10)) {
                    _fun51520_ip = 612;
                    continue _fun51520
                }
            case 600:
                var10 = var13;
                var11 = var10;
                _closure2_slot7 = var10;
                _fun51520_ip = 670;
                continue _fun51520;
            case 612:
                var10 = var34;
                var36 = var10.messageReference;
                var36 = var36.message_id;
                var15 = var36;
                _closure2_slot5 = var36;
                var36 = var10.messageReference;
                var36 = var36.channel_id;
                var12 = var36;
                _closure2_slot6 = var36;
                var10 = var10.messageReference;
                var10 = var10.guild_id;
                var11 = var10;
                _closure2_slot7 = var10;
            case 670:
                var36 = var35;
                var37 = var2 == var36;
                var36 = undefined;
                if (var37) {
                    _fun51520_ip = 687;
                    continue _fun51520
                }
            case 682:
                var36 = var35.type;
            case 687:
                var35 = _closure1_slot10;
                var35 = var35.GUILD_ANNOUNCEMENT;
                var35 = var36 === var35;
                var10 = var35;
                if (!var35) {
                    _fun51520_ip = 751;
                    continue _fun51520
                }
            case 707:
                var35 = var27;
                var36 = var2 == var35;
                var35 = undefined;
                if (var36) {
                    _fun51520_ip = 745;
                    continue _fun51520
                }
            case 719:
                var37 = var27.features;
                var36 = var37.has;
                var27 = _closure1_slot12;
                var27 = var27.COMMUNITY;
                var35 = var36.bind(var37)(var27);
            case 745:
                var27 = true;
                var10 = var27 === var35;
            case 751:
                var28 = var10;
                var10 = var34;
                var10 = var2 == var10;
                var27 = undefined;
                if (var10) {
                    _fun51520_ip = 790;
                    continue _fun51520
                }
            case 766:
                var36 = var34;
                var35 = var36.hasFlag;
                var10 = _closure1_slot13;
                var10 = var10.EPHEMERAL;
                var27 = var35.bind(var36)(var10);
            case 790:
                var10 = true;
                var33 = var10 === var27;
                var34 = var2 != var34;
                var27 = var34;
                if (!var34) {
                    _fun51520_ip = 809;
                    continue _fun51520
                }
            case 806:
                var27 = !var33;
            case 809:
                var10 = var27;
                if (!var27) {
                    _fun51520_ip = 827;
                    continue _fun51520
                }
            case 815:
                var27 = var29;
                if (var29) {
                    _fun51520_ip = 824;
                    continue _fun51520
                }
            case 821:
                var27 = var28;
            case 824:
                var10 = var27;
            case 827:
                var6 = var10;
                _closure2_slot4 = var10;
            case 834:
                var10 = var14;
                if (!(var2 != var10)) {
                    _fun51520_ip = 1149;
                    continue _fun51520
                }
            case 844:
                var28 = _closure1_slot4;
                var27 = var28.getChannel;
                var10 = var14;
                var10 = var27.bind(var28)(var10);
                var31 = var10;
                var28 = _closure1_slot5;
                var27 = var28.getGuild;
                var29 = var2 == var10;
                var10 = undefined;
                if (var29) {
                    _fun51520_ip = 895;
                    continue _fun51520
                }
            case 882:
                var33 = var31;
                var29 = var33.getGuildId;
                var10 = var29.bind(var33)();
            case 895:
                var32 = var27.bind(var28)(var10);
                var28 = var31;
                var28 = var2 != var28;
                var27 = var28;
                if (!var28) {
                    _fun51520_ip = 920;
                    continue _fun51520
                }
            case 913:
                var28 = var32;
                var27 = var2 != var28;
            case 920:
                var10 = var27;
                if (!var27) {
                    _fun51520_ip = 955;
                    continue _fun51520
                }
            case 926:
                var27 = var32;
                var29 = var27.features;
                var28 = var29.has;
                var27 = _closure1_slot12;
                var27 = var27.DISCOVERABLE;
                var10 = var28.bind(var29)(var27);
            case 955:
                if (!var10) {
                    _fun51520_ip = 1056;
                    continue _fun51520
                }
            case 958:
                var27 = _closure1_slot1;
                var35 = _closure1_slot2;
                var10 = 11;
                var10 = var35[var10];
                var29 = var27.bind(var9)(var10);
                var28 = var29.track;
                var10 = _closure1_slot11;
                var27 = var10.URL_CLICKED;
                var10 = {};
                var34 = _closure1_slot0;
                var33 = 12;
                var33 = var35[var33];
                var35 = var34.bind(var9)(var33);
                var34 = var35.getHostname;
                var33 = var1;
                var33 = var34.bind(var35)(var33);
                var10.url_domain = var33;
                var32 = var32.id;
                var10.guild_id = var32;
                var31 = var31.id;
                var10.channel_id = var31;
                var10 = var28.bind(var29)(var27, var10);
            case 1056:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var10 = 13;
                var10 = var28[var10];
                var27 = var27.bind(var9)(var10);
                var10 = var14;
                var10 = var27.bind(var9)(var10);
                if (!var10) {
                    _fun51520_ip = 1149;
                    continue _fun51520
                }
            case 1087:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var10 = 11;
                var10 = var28[var10];
                var29 = var27.bind(var9)(var10);
                var28 = var29.track;
                var10 = _closure1_slot11;
                var27 = var10.CHANGE_LOG_CTA_CLICKED;
                var10 = {};
                var31 = 'inline_link';
                var10.cta_type = var31;
                var31 = var1;
                var10.target = var31;
                var10 = var28.bind(var29)(var27, var10);
            case 1149:
                var28 = _closure1_slot1;
                var27 = _closure1_slot2;
                var10 = 14;
                var27 = var27[var10];
                var29 = var28.bind(var9)(var27);
                var28 = var29.trackLinkClicked;
                var27 = var1;
                var27 = var28.bind(var29)(var27);
                var27 = var25;
                if (!(var2 == var27)) {
                    _fun51520_ip = 1259;
                    continue _fun51520
                }
            case 1190:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var27 = 15;
                var27 = var29[var27];
                var27 = var28.bind(var9)(var27);
                var29 = var27.default;
                var28 = var1;
                var27 = {};
                var27.skipExtensionCheck = var9;
                var27.analyticsLocations = var30;
                var27 = var29.bind(var9)(var28, var27);
                var26 = var27;
                if (!(var2 != var27)) {
                    _fun51520_ip = 1276;
                    continue _fun51520
                }
            case 1243:
                var27 = var26;
                var26 = var0;
                var26 = var27.bind(var9)(var26);
                if (!var26) {
                    _fun51520_ip = 1276;
                    continue _fun51520
                }
            case 1257:
                return var9;
            case 1259:
                var26 = var25;
                var25 = var0;
                var25 = var26.bind(var9)(var25);
                if (var25) {
                    _fun51520_ip = 1990;
                    continue _fun51520
                }
            case 1276:
                var5 = function() { // Original name: handleConfirm, environment: var21
                    _fun51521: for (var _fun51521_ip = 0;;) switch (_fun51521_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun51521_ip = 90;
                                continue _fun51521
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackAnnouncementMessageLinkClicked;
                            var1 = {};
                            var4 = _closure2_slot5;
                            var1.messageId = var4;
                            var4 = _closure2_slot1;
                            var1.channelId = var4;
                            var4 = _closure2_slot3;
                            var1.guildId = var4;
                            var4 = _closure2_slot6;
                            var1.sourceChannelId = var4;
                            var4 = _closure2_slot7;
                            var1.sourceGuildId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 90:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun51521_ip = 112;
                                continue _fun51521
                            }
                        case 100:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun51521_ip = 146;
                            continue _fun51521;
                        case 112:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 146:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var24;
                if (!(var2 == var25)) {
                    _fun51520_ip = 1295;
                    continue _fun51520
                }
            case 1288:
                var21 = function() { // Environment: var21
                    var0 = undefined;
                    return var0;
                };
                _fun51520_ip = 1298;
                continue _fun51520;
            case 1295:
                var21 = var24;
            case 1298:
                var19 = var21;
                var25 = _closure1_slot3;
                var24 = var25.isBlockedDomain;
                var21 = var1;
                var21 = var24.bind(var25)(var21);
                if (!(var2 === var21)) {
                    _fun51520_ip = 1935;
                    continue _fun51520
                }
            case 1326:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 18;
                var21 = var25[var21];
                var25 = var24.bind(var9)(var21);
                var24 = var25.shouldShowLinkNotDiscordWarning;
                var21 = var1;
                var21 = var24.bind(var25)(var21);
                if (var21) {
                    _fun51520_ip = 1877;
                    continue _fun51520
                }
            case 1366:
                var21 = var23;
                var24 = 'function';
                var21 = typeof var21;
                if (!(var24 !== var21)) {
                    _fun51520_ip = 1385;
                    continue _fun51520
                }
            case 1380:
                var21 = var23;
                _fun51520_ip = 1389;
                continue _fun51520;
            case 1385:
                var21 = var23.bind(var9)();
            case 1389:
                var18 = var21;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var21 = 12;
                var21 = var24[var21];
                var24 = var23.bind(var9)(var21);
                var23 = var24.getProtocol;
                var21 = var1;
                var24 = var23.bind(var24)(var21);
                var22 = var24;
                var23 = 'http:';
                var23 = var23 === var24;
                var21 = var23;
                if (var23) {
                    _fun51520_ip = 1454;
                    continue _fun51520
                }
            case 1443:
                var23 = var22;
                var22 = 'https:';
                var21 = var22 === var23;
            case 1454:
                var17 = !var21;
                if (!var21) {
                    _fun51520_ip = 1492;
                    continue _fun51520
                }
            case 1460:
                if (var18) {
                    _fun51520_ip = 1797;
                    continue _fun51520
                }
            case 1466:
                var22 = _closure1_slot6;
                var21 = var22.isTrustedDomain;
                var18 = var1;
                var18 = var21.bind(var22)(var18);
                if (var18) {
                    _fun51520_ip = 1797;
                    continue _fun51520
                }
            case 1492:
                var18 = var17;
                if (!var18) {
                    _fun51520_ip = 1524;
                    continue _fun51520
                }
            case 1498:
                var22 = _closure1_slot6;
                var21 = var22.isTrustedProtocol;
                var18 = var1;
                var18 = var21.bind(var22)(var18);
                if (var18) {
                    _fun51520_ip = 1797;
                    continue _fun51520
                }
            case 1524:
                var18 = var0;
                if (!(var2 != var18)) {
                    _fun51520_ip = 1544;
                    continue _fun51520
                }
            case 1531:
                var21 = var0;
                var18 = var21.preventDefault;
                var18 = var18.bind(var21)();
            case 1544:
                if (var17) {
                    _fun51520_ip = 1700;
                    continue _fun51520
                }
            case 1550:
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 20;
                var17 = var21[var17];
                var21 = var18.bind(var9)(var17);
                var18 = var21.punycodeLink;
                var17 = var1;
                var17 = var18.bind(var21)(var17);
                var16 = var17;
                if (!(var2 == var17)) {
                    _fun51520_ip = 1596;
                    continue _fun51520
                }
            case 1591:
                var21 = var1;
                _fun51520_ip = 1602;
                continue _fun51520;
            case 1596:
                var21 = var16.displayTarget;
            case 1602:
                var17 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 21;
                var16 = var23[var16];
                var18 = var17.bind(var9)(var16);
                var17 = var18.show;
                var16 = {};
                var16.url = var21;
                var22 = _closure1_slot0;
                var21 = 22;
                var21 = var23[var21];
                var21 = var22.bind(var9)(var21);
                var21 = var21.trustDomain;
                var16.trustUrl = var21;
                var21 = var5;
                var16.onConfirm = var21;
                var21 = var19;
                var16.onCancel = var21;
                var16.isProtocol = var20;
                var20 = var3;
                var16.contextKey = var20;
                var16 = var17.bind(var18)(var16);
                _fun51520_ip = 1875;
                continue _fun51520;
            case 1700:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var16 = 21;
                var16 = var22[var16];
                var18 = var17.bind(var9)(var16);
                var17 = var18.show;
                var16 = {};
                var20 = var1;
                var16.url = var20;
                var21 = _closure1_slot0;
                var20 = 22;
                var20 = var22[var20];
                var20 = var21.bind(var9)(var20);
                var20 = var20.trustProtocol;
                var16.trustUrl = var20;
                var20 = var5;
                var16.onConfirm = var20;
                var16.onCancel = var19;
                var19 = true;
                var16.isProtocol = var19;
                var19 = var3;
                var16.contextKey = var19;
                var16 = var17.bind(var18)(var16);
                _fun51520_ip = 1875;
                continue _fun51520;
            case 1797:
                var16 = var0;
                if (!(var2 != var16)) {
                    _fun51520_ip = 1871;
                    continue _fun51520
                }
            case 1804:
                var16 = var7;
                if (!(var2 != var16)) {
                    _fun51520_ip = 1814;
                    continue _fun51520
                }
            case 1811:
                if (var7) {
                    _fun51520_ip = 1871;
                    continue _fun51520
                }
            case 1814:
                if (!var6) {
                    _fun51520_ip = 1875;
                    continue _fun51520
                }
            case 1817:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var10 = var7.bind(var9)(var6);
                var7 = var10.trackAnnouncementMessageLinkClicked;
                var6 = {};
                var6.messageId = var15;
                var6.channelId = var14;
                var6.guildId = var13;
                var6.sourceChannelId = var12;
                var6.sourceGuildId = var11;
                var6 = var7.bind(var10)(var6);
                _fun51520_ip = 1875;
                continue _fun51520;
            case 1871:
                var5 = var5.bind(var9)();
            case 1875:
                return var9;
            case 1877:
                var5 = var0;
                if (!(var2 != var5)) {
                    _fun51520_ip = 1897;
                    continue _fun51520
                }
            case 1884:
                var6 = var0;
                var5 = var6.preventDefault;
                var5 = var5.bind(var6)();
            case 1897:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 19;
                var5 = var7[var5];
                var7 = var6.bind(var9)(var5);
                var6 = var7.show;
                var5 = var1;
                var5 = var6.bind(var7)(var5);
                var5 = undefined;
                return var5;
            case 1935:
                var5 = var0;
                if (!(var2 != var5)) {
                    _fun51520_ip = 1955;
                    continue _fun51520
                }
            case 1942:
                var6 = var0;
                var5 = var6.preventDefault;
                var5 = var5.bind(var6)();
            case 1955:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 17;
                var5 = var7[var5];
                var6 = var6.bind(var9)(var5);
                var5 = var6.show;
                var1 = var5.bind(var6)(var1);
                var1 = undefined;
                return var1;
            case 1990:
                return var9;
            case 1992:
                var1 = var0;
                if (!(var2 != var1)) {
                    _fun51520_ip = 2012;
                    continue _fun51520
                }
            case 1999:
                var1 = var0;
                var0 = var1.preventDefault;
                var0 = var0.bind(var1)();
            case 2012:
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 9;
                var0 = var10[var0];
                var2 = var1.bind(var9)(var0);
                var1 = var2.show;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = 10;
                var6 = var10[var4];
                var6 = var5.bind(var9)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var10[var4];
                var6 = var5.bind(var9)(var6);
                var6 = var6.t;
                var6 = var6.x87gan;
                var6 = var7.bind(var11)(var6);
                var0.title = var6;
                var6 = var10[var4];
                var6 = var5.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.format;
                var4 = var10[var4];
                var4 = var5.bind(var9)(var4);
                var4 = var4.t;
                var5 = var4["9rqRwl"];
                var4 = {};
                var8 = var8.href;
                var4.url = var8;
                var4 = var6.bind(var7)(var5, var4);
                var0.body = var4;
                var4 = true;
                var0.isDismissable = var4;
                var0.contextKey = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.handleClick = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5852, 1372, 1410, 5853, 4213, 3059, 1661, 660, 3105, 3962, 1234, 795, 5854, 5855, 5856, 5858, 3097, 11336, 12154, 11342, 4746, 12155, 12157, 2]);