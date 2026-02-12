// modules/guild_settings/native/GuildSettingsModalLanding.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot15;
        var2 = var1.SETTINGS_PANE_VIEWED;
        var1 = {};
        var5 = 'guild';
        var1.settings_type = var5;
        var5 = arg1;
        var1.origin_pane = var5;
        var5 = arg0;
        var1.destination_pane = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function() {
        _fun116034: for (var _fun116034_ip = 0;;) switch (_fun116034_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 15;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isAndroid;
                var2 = var0.bind(var2)();
                var0 = null;
                if (var2) {
                    _fun116034_ip = 44;
                    continue _fun116034
                }
            case 40:
                var0 = _closure1_slot22;
            case 44:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        _fun116035: for (var _fun116035_ip = 0;;) switch (_fun116035_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guild;
                var _closure2_slot0 = var8;
                var2 = var1.isGuildAdmin;
                var3 = var1.canManageGuild;
                var6 = var1.canManageGuildExpressions;
                var9 = var1.canManageChannels;
                var13 = var1.canViewAuditLog;
                var12 = var1.canManageWebhooks;
                var11 = var1.canUnlinkChannelLobbies;
                var17 = var1.categories;
                var1 = var1.pushScreen;
                var _closure2_slot1 = var1;
                var16 = _closure1_slot17;
                var20 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 12;
                var10 = var5[var1];
                var4 = undefined;
                var10 = var20.bind(var4)(var10);
                var15 = var10.FormRow;
                var14 = {};
                var10 = 26;
                var18 = var5[var10];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var5 = var5[var10];
                var5 = var20.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["/dp6yY"];
                var5 = var18.bind(var19)(var5);
                var14.label = var5;
                var5 = _closure1_slot40;
                var5 = var5.bind(var4)();
                var14.trailing = var5;
                var5 = _closure1_slot23;
                var14.leading = var5;
                var5 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.OVERVIEW;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onPress = var5;
                var5 = 'overview';
                var14 = var16.bind(var4)(var15, var14, var5);
                var5 = new Array(1);
                var5[0] = var14;
                var15 = _closure1_slot9;
                var14 = var15.getCurrentUser;
                var16 = var14.bind(var15)();
                if (!var3) {
                    _fun116035_ip = 364;
                    continue _fun116035
                }
            case 231:
                var15 = _closure1_slot20;
                var20 = _closure1_slot17;
                var23 = _closure1_slot0;
                var14 = _closure1_slot3;
                var18 = var14[var1];
                var18 = var23.bind(var4)(var18);
                var19 = var18.FormRow;
                var18 = {};
                var21 = var14[var10];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var14 = var14[var10];
                var14 = var23.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["5tbTdV"];
                var14 = var21.bind(var22)(var14);
                var18.label = var14;
                var14 = _closure1_slot40;
                var14 = var14.bind(var4)();
                var18.trailing = var14;
                var14 = _closure1_slot24;
                var18.leading = var14;
                var14 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.MODERATION;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var18.onPress = var14;
                var14 = 'moderation';
                var14 = var20.bind(var4)(var19, var18, var14);
                var14 = var15.bind(var4)(var14, var5);
            case 364:
                if (!var13) {
                    _fun116035_ip = 503;
                    continue _fun116035
                }
            case 370:
                var14 = _closure1_slot20;
                var19 = _closure1_slot17;
                var22 = _closure1_slot0;
                var13 = _closure1_slot3;
                var15 = var13[var1];
                var15 = var22.bind(var4)(var15);
                var18 = var15.FormRow;
                var15 = {};
                var20 = var13[var10];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var13 = var13[var10];
                var13 = var22.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.SPWLyT;
                var13 = var20.bind(var21)(var13);
                var15.label = var13;
                var13 = _closure1_slot40;
                var13 = var13.bind(var4)();
                var15.trailing = var13;
                var13 = _closure1_slot25;
                var15.leading = var13;
                var13 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.AUDIT_LOG;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var13;
                var13 = 'auditlogs';
                var13 = var19.bind(var4)(var18, var15, var13);
                var13 = var14.bind(var4)(var13, var5);
            case 503:
                if (var9) {
                    _fun116035_ip = 551;
                    continue _fun116035
                }
            case 506:
                var13 = null;
                var13 = var13 != var16;
                if (!var13) {
                    _fun116035_ip = 548;
                    continue _fun116035
                }
            case 515:
                var15 = _closure1_slot2;
                var18 = _closure1_slot3;
                var14 = 27;
                var14 = var18[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.canManageACategory;
                var13 = var14.bind(var15)(var16, var8, var17);
            case 548:
                var9 = var13;
            case 551:
                if (!var9) {
                    _fun116035_ip = 688;
                    continue _fun116035
                }
            case 557:
                var13 = _closure1_slot20;
                var16 = _closure1_slot17;
                var19 = _closure1_slot0;
                var9 = _closure1_slot3;
                var14 = var9[var1];
                var14 = var19.bind(var4)(var14);
                var15 = var14.FormRow;
                var14 = {};
                var17 = var9[var10];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var9 = var9[var10];
                var9 = var19.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.OGiMXJ;
                var9 = var17.bind(var18)(var9);
                var14.label = var9;
                var9 = _closure1_slot40;
                var9 = var9.bind(var4)();
                var14.trailing = var9;
                var9 = _closure1_slot26;
                var14.leading = var9;
                var9 = function() {
                    var4 = _closure1_slot10;
                    var3 = var4.initGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.CHANNELS;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onPress = var9;
                var9 = 'channels';
                var9 = var16.bind(var4)(var15, var14, var9);
                var9 = var13.bind(var4)(var9, var5);
            case 688:
                var9 = var3;
                if (var9) {
                    _fun116035_ip = 697;
                    continue _fun116035
                }
            case 694:
                var9 = var12;
            case 697:
                if (var9) {
                    _fun116035_ip = 703;
                    continue _fun116035
                }
            case 700:
                var9 = var11;
            case 703:
                if (!var9) {
                    _fun116035_ip = 840;
                    continue _fun116035
                }
            case 709:
                var11 = _closure1_slot20;
                var14 = _closure1_slot17;
                var17 = _closure1_slot0;
                var9 = _closure1_slot3;
                var12 = var9[var1];
                var12 = var17.bind(var4)(var12);
                var13 = var12.FormRow;
                var12 = {};
                var15 = var9[var10];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var9 = var9[var10];
                var9 = var17.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.CIsNZw;
                var9 = var15.bind(var16)(var9);
                var12.label = var9;
                var9 = _closure1_slot40;
                var9 = var9.bind(var4)();
                var12.trailing = var9;
                var9 = _closure1_slot27;
                var12.leading = var9;
                var9 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.INTEGRATIONS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var9;
                var9 = 'integrations';
                var9 = var14.bind(var4)(var13, var12, var9);
                var9 = var11.bind(var4)(var9, var5);
            case 840:
                if (!var6) {
                    _fun116035_ip = 1096;
                    continue _fun116035
                }
            case 846:
                var11 = _closure1_slot20;
                var15 = _closure1_slot17;
                var17 = _closure1_slot0;
                var14 = _closure1_slot3;
                var6 = var14[var1];
                var6 = var17.bind(var4)(var6);
                var13 = var6.FormRow;
                var12 = {};
                var6 = var14[var10];
                var6 = var17.bind(var4)(var6);
                var16 = var6.intl;
                var9 = var16.string;
                var6 = var14[var10];
                var6 = var17.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.sMOuuS;
                var6 = var9.bind(var16)(var6);
                var12.label = var6;
                var6 = _closure1_slot40;
                var9 = var6.bind(var4)();
                var12.trailing = var9;
                var9 = _closure1_slot28;
                var12.leading = var9;
                var9 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.EMOJI;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var9;
                var9 = 'emoji';
                var9 = var15.bind(var4)(var13, var12, var9);
                var9 = var11.bind(var4)(var9, var5);
                var9 = _closure1_slot20;
                var13 = _closure1_slot17;
                var11 = var14[var1];
                var11 = var17.bind(var4)(var11);
                var12 = var11.FormRow;
                var11 = {};
                var15 = var14[var10];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var10];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.R5nQkS;
                var14 = var15.bind(var16)(var14);
                var11.label = var14;
                var6 = var6.bind(var4)();
                var11.trailing = var6;
                var6 = _closure1_slot29;
                var11.leading = var6;
                var6 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.STICKERS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var6;
                var6 = 'stickers';
                var6 = var13.bind(var4)(var12, var11, var6);
                var6 = var9.bind(var4)(var6, var5);
            case 1096:
                if (!var3) {
                    _fun116035_ip = 1235;
                    continue _fun116035
                }
            case 1102:
                var6 = _closure1_slot20;
                var12 = _closure1_slot17;
                var15 = _closure1_slot0;
                var3 = _closure1_slot3;
                var9 = var3[var1];
                var9 = var15.bind(var4)(var9);
                var11 = var9.FormRow;
                var9 = {};
                var13 = var3[var10];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var3 = var3[var10];
                var3 = var15.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.Am9YHi;
                var3 = var13.bind(var14)(var3);
                var9.label = var3;
                var3 = _closure1_slot40;
                var3 = var3.bind(var4)();
                var9.trailing = var3;
                var3 = _closure1_slot30;
                var9.leading = var3;
                var3 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.SECURITY;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var3;
                var3 = 'security';
                var3 = var12.bind(var4)(var11, var9, var3);
                var3 = var6.bind(var4)(var3, var5);
            case 1235:
                if (!var2) {
                    _fun116035_ip = 1269;
                    continue _fun116035
                }
            case 1238:
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var3 = 28;
                var3 = var9[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.canSeeVanityUrlSettings;
                var2 = var3.bind(var6)(var8);
            case 1269:
                if (!var2) {
                    _fun116035_ip = 1408;
                    continue _fun116035
                }
            case 1275:
                var2 = _closure1_slot20;
                var8 = _closure1_slot17;
                var13 = _closure1_slot0;
                var9 = _closure1_slot3;
                var3 = var9[var1];
                var3 = var13.bind(var4)(var3);
                var6 = var3.FormRow;
                var3 = {};
                var11 = var9[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["5XZKy/"];
                var9 = var11.bind(var12)(var9);
                var3.label = var9;
                var9 = _closure1_slot40;
                var9 = var9.bind(var4)();
                var3.trailing = var9;
                var9 = _closure1_slot31;
                var3.leading = var9;
                var0 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.VANITY_URL;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onPress = var0;
                var0 = 'vanity';
                var0 = var8.bind(var4)(var6, var3, var0);
                var0 = var2.bind(var4)(var0, var5);
            case 1408:
                var3 = var5.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun116035_ip = 1523;
                    continue _fun116035
                }
            case 1421:
                var3 = _closure1_slot17;
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = var6[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var7 = _closure1_slot16;
                var7 = var7.ANDROID_NO_BORDER;
                var1.titleStyleType = var7;
                var7 = var6[var10];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["3D5yo/"];
                var6 = var7.bind(var8)(var6);
                var1.title = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1523:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        _fun116045: for (var _fun116045_ip = 0;;) switch (_fun116045_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var1 = var1.pushScreen;
                var _closure2_slot0 = var1;
                var2 = var0.features;
                var1 = var2.has;
                var0 = _closure1_slot12;
                var0 = var0.COMMUNITY;
                var4 = var1.bind(var2)(var0);
                var3 = _closure1_slot17;
                var11 = _closure1_slot0;
                var7 = _closure1_slot3;
                var6 = 12;
                var0 = var7[var6];
                var2 = undefined;
                var0 = var11.bind(var2)(var0);
                var1 = var0.FormSection;
                var0 = {};
                var14 = 26;
                var8 = var7[var14];
                var8 = var11.bind(var2)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var7[var14];
                var7 = var11.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7["1g9A/f"];
                var7 = var8.bind(var10)(var7);
                var0.title = var7;
                var8 = _closure1_slot17;
                var13 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = var10[var6];
                var6 = var13.bind(var2)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var11 = var10[var14];
                var11 = var13.bind(var2)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var2)(var10);
                var10 = var10.t;
                if (var4) {
                    _fun116045_ip = 262;
                    continue _fun116045
                }
            case 199:
                var4 = var10.ElKTeb;
                var4 = var11.bind(var12)(var4);
                var6.label = var4;
                var4 = _closure1_slot40;
                var4 = var4.bind(var2)();
                var6.trailing = var4;
                var4 = _closure1_slot33;
                var6.leading = var4;
                var4 = function() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var2 = var0.COMMUNITY_INTRO;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var6.onPress = var4;
                var4 = 'community-intro';
                var4 = var8.bind(var2)(var7, var6, var4);
                _fun116045_ip = 323;
                continue _fun116045;
            case 262:
                var10 = var10.nRtNqn;
                var10 = var11.bind(var12)(var10);
                var6.label = var10;
                var10 = _closure1_slot40;
                var10 = var10.bind(var2)();
                var6.trailing = var10;
                var9 = _closure1_slot32;
                var6.leading = var9;
                var5 = function() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var2 = var0.COMMUNITY;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var6.onPress = var5;
                var5 = 'community-overview';
                var4 = var8.bind(var2)(var7, var6, var5);
            case 323:
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function arg0() {
        _fun116048: for (var _fun116048_ip = 0;;) switch (_fun116048_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.canManageGuild;
                var7 = var1.canManageRoles;
                var3 = var1.canManageBans;
                var2 = var1.pushScreen;
                var _closure2_slot0 = var2;
                var17 = var1.permissionMigrationAvailable;
                var1 = _closure1_slot21;
                var4 = undefined;
                var20 = var1.bind(var4)();
                var11 = _closure1_slot17;
                var14 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 12;
                var8 = var5[var1];
                var8 = var14.bind(var4)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var10 = 26;
                var12 = var5[var10];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var5 = var5[var10];
                var5 = var14.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["9Oq93m"];
                var5 = var12.bind(var13)(var5);
                var8.label = var5;
                var5 = _closure1_slot40;
                var5 = var5.bind(var4)();
                var8.trailing = var5;
                var5 = _closure1_slot34;
                var8.leading = var5;
                var5 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.MEMBERS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var5;
                var5 = 'members';
                var8 = var11.bind(var4)(var9, var8, var5);
                var5 = new Array(1);
                var5[0] = var8;
                if (!var7) {
                    _fun116048_ip = 387;
                    continue _fun116048
                }
            case 193:
                var8 = _closure1_slot20;
                var12 = _closure1_slot17;
                var15 = _closure1_slot0;
                var7 = _closure1_slot3;
                var9 = var7[var1];
                var9 = var15.bind(var4)(var9);
                var11 = var9.FormRow;
                var9 = {};
                var13 = var7[var10];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var7 = var7[var10];
                var7 = var15.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["LPJmL/"];
                var7 = var13.bind(var14)(var7);
                var9.label = var7;
                var7 = _closure1_slot40;
                var7 = var7.bind(var4)();
                var9.trailing = var7;
                var14 = _closure1_slot18;
                var13 = _closure1_slot5;
                var7 = {};
                var16 = _closure1_slot35;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = null;
                if (!var17) {
                    _fun116048_ip = 340;
                    continue _fun116048
                }
            case 314:
                var19 = _closure1_slot17;
                var18 = _closure1_slot5;
                var17 = {};
                var20 = var20.redDot;
                var17.style = var20;
                var16 = var19.bind(var4)(var18, var17);
            case 340:
                var15[1] = var16;
                var7.children = var15;
                var7 = var14.bind(var4)(var13, var7);
                var9.leading = var7;
                var7 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.ROLES;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var7;
                var7 = 'roles';
                var7 = var12.bind(var4)(var11, var9, var7);
                var7 = var8.bind(var4)(var7, var5);
            case 387:
                if (!var6) {
                    _fun116048_ip = 524;
                    continue _fun116048
                }
            case 393:
                var7 = _closure1_slot20;
                var11 = _closure1_slot17;
                var14 = _closure1_slot0;
                var6 = _closure1_slot3;
                var8 = var6[var1];
                var8 = var14.bind(var4)(var8);
                var9 = var8.FormRow;
                var8 = {};
                var12 = var6[var10];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var6 = var6[var10];
                var6 = var14.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.ngRFjZ;
                var6 = var12.bind(var13)(var6);
                var8.label = var6;
                var6 = _closure1_slot40;
                var6 = var6.bind(var4)();
                var8.trailing = var6;
                var6 = _closure1_slot36;
                var8.leading = var6;
                var6 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.INSTANT_INVITES;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var6;
                var6 = 'invites';
                var6 = var11.bind(var4)(var9, var8, var6);
                var6 = var7.bind(var4)(var6, var5);
            case 524:
                if (!var3) {
                    _fun116048_ip = 661;
                    continue _fun116048
                }
            case 530:
                var3 = _closure1_slot20;
                var8 = _closure1_slot17;
                var13 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = var9[var1];
                var6 = var13.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var11 = var9[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var10];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.ZbeITS;
                var9 = var11.bind(var12)(var9);
                var6.label = var9;
                var9 = _closure1_slot40;
                var9 = var9.bind(var4)();
                var6.trailing = var9;
                var9 = _closure1_slot37;
                var6.leading = var9;
                var0 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.BANS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onPress = var0;
                var0 = 'bans';
                var0 = var8.bind(var4)(var7, var6, var0);
                var0 = var3.bind(var4)(var0, var5);
            case 661:
                var6 = var5.length;
                var3 = 0;
                var0 = null;
                if (!(var3 !== var6)) {
                    _fun116048_ip = 763;
                    continue _fun116048
                }
            case 674:
                var3 = _closure1_slot17;
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = var6[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var7 = var6[var10];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["+OecxG"];
                var6 = var7.bind(var8)(var6);
                var1.title = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 763:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        _fun116053: for (var _fun116053_ip = 0;;) switch (_fun116053_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.guild;
                var _closure2_slot0 = var21;
                var11 = var0.contentContainerStyle;
                var0 = var0.updateErrors;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot21;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var9 = _closure1_slot0;
                var20 = _closure1_slot3;
                var1 = 33;
                var1 = var20[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var2 = 34;
                var4 = var20[var2];
                var8 = var9.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var30
                    _fun116054: for (var _fun116054_ip = 0;;) switch (_fun116054_ip) {
                        case 0:
                            var5 = _closure1_slot6;
                            var4 = var5.getChannels;
                            var0 = _closure2_slot0;
                            var3 = null;
                            var7 = var3 == var0;
                            var2 = undefined;
                            if (var7) {
                                _fun116054_ip = 40;
                                continue _fun116054
                            }
                        case 31:
                            var6 = _closure2_slot0;
                            var2 = var6.id;
                        case 40:
                            var2 = var4.bind(var5)(var2);
                            var3 = var3 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun116054_ip = 68;
                                continue _fun116054
                            }
                        case 54:
                            var1 = _closure1_slot14;
                            var1 = var1.GUILD_CATEGORY;
                            var0 = var2[var1];
                        case 68:
                            return var0;
                    }
                };
                var28 = var7.bind(var8)(var6, var4);
                var2 = var20[var2];
                var7 = var9.bind(var3)(var2);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var30
                    var2 = _closure1_slot8;
                    var1 = var2.getGuildPermissionProps;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var29 = var6.bind(var7)(var4, var2);
                var13 = _closure1_slot1;
                var2 = 35;
                var2 = var20[var2];
                var2 = var13.bind(var3)(var2);
                var15 = var2.bind(var3)(var21);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var4 = function() { // Environment: var30
                    var2 = _closure1_slot39;
                    var0 = _closure1_slot13;
                    var1 = var0.LANDING;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var6.bind(var7)(var4, var2);
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var30
                    var7 = 0;
                    var10 = 0;
                    var6 = copyRestArgs(var10);
                    var3 = var6[var7];
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 36;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.setSection;
                    var2 = var2.bind(var4)(var3);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = new Array(0);
                    var10 = var2;
                    var9 = var6;
                    var8 = 0;
                    var6 = arraySpread(var10, var9, var8);
                    var10 = var4;
                    var9 = var2;
                    var8 = var5;
                    var2 = apply(var10, var9, var8);
                    var2 = _closure1_slot39;
                    var1 = _closure1_slot13;
                    var1 = var1.LANDING;
                    var1 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var16 = var4.bind(var6)(var1, var2);
                var27 = var29.isGuildAdmin;
                var19 = var29.canManageGuild;
                var18 = var29.canManageRoles;
                var17 = var29.canManageBans;
                var26 = var29.canManageGuildExpressions;
                var25 = var29.canManageChannels;
                var23 = var29.canViewAuditLog;
                var22 = var29.canManageWebhooks;
                var1 = 37;
                var1 = var20[var1];
                var4 = var9.bind(var3)(var1);
                var2 = var4.useChannelsAllowedToUnlink;
                var1 = var21.id;
                var1 = var2.bind(var4)(var1);
                var2 = var1.length;
                var1 = 0;
                var24 = var2 > var1;
                var1 = 38;
                var1 = var20[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useCanManageGuildRoleSubscriptions;
                var12 = var1.bind(var2)(var21);
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var0 = var0.message;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    _fun116058: for (var _fun116058_ip = 0;;) switch (_fun116058_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.message;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun116058_ip = 63;
                                continue _fun116058
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 39;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.presentError;
                            var0 = _closure2_slot1;
                            var0 = var0.message;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot18;
                var1 = _closure1_slot19;
                var0 = {};
                var7 = _closure1_slot17;
                var4 = 40;
                var4 = var20[var4];
                var4 = var9.bind(var3)(var4);
                var6 = var4.RedesignCompat;
                var4 = {};
                var8 = true;
                var4.enabled = var8;
                var10 = _closure1_slot18;
                var8 = 12;
                var8 = var20[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Form;
                var8 = {};
                var14 = var14.container;
                var8.style = var14;
                var8.contentContainerStyle = var11;
                var14 = _closure1_slot17;
                var11 = 41;
                var11 = var20[var11];
                var13 = var13.bind(var3)(var11);
                var11 = {};
                var20 = {};
                var31 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateIcon;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var20.onUpload = var31;
                var31 = 'guild';
                var20.type = var31;
                var31 = var21.icon;
                var20.icon = var31;
                var31 = var21.name;
                var20.name = var31;
                var30 = function arg0() {
                    _fun116060: for (var _fun116060_ip = 0;;) switch (_fun116060_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4;
                            if (!var0) {
                                _fun116060_ip = 81;
                                continue _fun116060
                            }
                        case 9:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 42;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getGuildIconURL;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var1.id = var5;
                            var1.icon = var4;
                            var4 = true;
                            var1.canAnimate = var4;
                            var4 = 64;
                            var1.size = var4;
                            var0 = var2.bind(var3)(var1);
                        case 81:
                            return var0;
                    }
                };
                var20.makeURL = var30;
                var29 = var29.canManageGuild;
                var29 = !var29;
                var20.disabled = var29;
                var11.iconProps = var20;
                var20 = var21.name;
                var11.text = var20;
                var20 = 'header';
                var11.textAccessibilityRole = var20;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(5);
                var11[0] = var13;
                var20 = _closure1_slot17;
                var14 = _closure1_slot41;
                var13 = {};
                var13.guild = var21;
                var13.categories = var28;
                var13.isGuildAdmin = var27;
                var13.canManageGuild = var19;
                var13.canManageGuildExpressions = var26;
                var13.canManageChannels = var25;
                var13.canUnlinkChannelLobbies = var24;
                var13.canViewAuditLog = var23;
                var13.canManageWebhooks = var22;
                var13.pushScreen = var16;
                var13 = var20.bind(var3)(var14, var13);
                var11[1] = var13;
                var13 = var19;
                if (!var13) {
                    _fun116053_ip = 680;
                    continue _fun116053
                }
            case 655:
                var22 = _closure1_slot17;
                var20 = _closure1_slot42;
                var14 = {};
                var14.guild = var21;
                var14.pushScreen = var16;
                var13 = var22.bind(var3)(var20, var14);
            case 680:
                var11[2] = var13;
                if (!var12) {
                    _fun116053_ip = 728;
                    continue _fun116053
                }
            case 687:
                var20 = _closure1_slot17;
                var14 = _closure1_slot1;
                var22 = _closure1_slot3;
                var13 = 43;
                var13 = var22[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.guild = var21;
                var13.pushScreen = var16;
                var12 = var20.bind(var3)(var14, var13);
            case 728:
                var11[3] = var12;
                var14 = _closure1_slot17;
                var13 = _closure1_slot43;
                var12 = {};
                var12.canManageGuild = var19;
                var12.canManageRoles = var18;
                var12.canManageBans = var17;
                var12.pushScreen = var16;
                var12.permissionMigrationAvailable = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[4] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = _closure1_slot38;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot44 = var0;
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
    var _closure1_slot4 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot12 = var6;
    var6 = var3.GuildSettingsSections;
    var _closure1_slot13 = var6;
    var6 = var3.ChannelTypes;
    var _closure1_slot14 = var6;
    var3 = var3.AnalyticEvents;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TitleStyleType;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot17 = var7;
    var6 = var3.jsxs;
    var _closure1_slot18 = var6;
    var3 = var3.Fragment;
    var _closure1_slot19 = var3;
    var3 = function arg0, arg1() {
        _fun116061: for (var _fun116061_ip = 0;;) switch (_fun116061_ip) {
            case 0:
                var2 = arg1;
                var1 = var2.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun116061_ip = 104;
                    continue _fun116061
                }
            case 14:
                var1 = var2.push;
                var6 = _closure1_slot17;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 12;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var3.bind(var5)(var0);
                var4 = var0.FormDivider;
                var3 = {};
                var0 = true;
                var3.iconPush = var0;
                var8 = var2.length;
                var0 = global;
                var0 = var0.HermesInternal;
                var7 = var0.concat;
                var0 = 'divider-';
                var0 = var7.bind(var0)(var8);
                var0 = var6.bind(var5)(var4, var3, var0);
                var0 = var1.bind(var2)(var0);
            case 104:
                var1 = var2.push;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'width': 8,
        'height': 8,
        'backgroundColor': null,
        'borderRadius': null,
        'right': 4,
        'bottom': 4
    };
    var10 = 14;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_NOTIFICATION;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9.borderRadius = var10;
    var3.redDot = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot21 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FormRow;
    var6 = var3.Arrow;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot22 = var3;
    var3 = 16;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 17;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.CircleInformationIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot23 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 18;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ModerationIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot24 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 19;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ClipboardListIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot25 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 20;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ChannelListIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot26 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 21;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.PuzzlePieceIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot27 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 22;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ReactionIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot28 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 23;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.StickerIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot29 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var10 = 24;
    var9 = var5[var10];
    var9 = var4.bind(var0)(var9);
    var9 = var9.ShieldUserIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot30 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = 25;
    var11 = var5[var9];
    var11 = var4.bind(var0)(var11);
    var11 = var11.LinkIcon;
    var6.IconComponent = var11;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot31 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var11 = 29;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.TreehouseIcon;
    var6.IconComponent = var12;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot32 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.TreehouseIcon;
    var6.IconComponent = var11;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot33 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var11 = 30;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.GroupIcon;
    var6.IconComponent = var11;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot34 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ShieldUserIcon;
    var6.IconComponent = var10;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot35 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRow;
    var8 = var6.Icon;
    var6 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.LinkIcon;
    var6.IconComponent = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot36 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TableRow;
    var6 = var3.Icon;
    var3 = {};
    var8 = 31;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.HammerIcon;
    var3.IconComponent = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot37 = var3;
    var3 = 32;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NavScrim;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot38 = var3;
    var3 = 44;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalLanding.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116062: for (var _fun116062_ip = 0;;) switch (_fun116062_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var6 = var1.contentContainerStyle;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 34;
                var7 = var5[var2];
                var4 = undefined;
                var10 = var3.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var10)(var8, var7);
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var5 = var8.useStateFromStoresObject;
                var2 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot11;
                    var1 = var2.getErrors;
                    var1 = var1.bind(var2)();
                    var0.errors = var1;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var5.bind(var8)(var3, var2, var0);
                var5 = var0.errors;
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun116062_ip = 165;
                    continue _fun116062
                }
            case 135:
                var3 = _closure1_slot17;
                var2 = _closure1_slot44;
                var1 = {};
                var1.guild = var7;
                var1.contentContainerStyle = var6;
                var1.updateErrors = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 165:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1673, 1410, 3093, 1621, 14871, 8285, 660, 4850, 33, 4308, 5441, 1297, 671, 478, 4876, 3267, 14872, 7766, 14874, 10415, 7249, 9148, 7367, 3255, 1234, 3098, 14876, 11011, 4829, 8712, 5224, 1469, 566, 12654, 8284, 14877, 5691, 3149, 4875, 14128, 1417, 14878, 2]);