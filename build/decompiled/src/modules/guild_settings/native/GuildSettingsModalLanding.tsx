// modules/guild_settings/native/GuildSettingsModalLanding.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun114531: for (var _fun114531_ip = 0;;) switch (_fun114531_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 15;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var2 = var0.bind(var2)();
                var0 = null;
                if (var2) {
                    _fun114531_ip = 84;
                    continue _fun114531
                }
            case 40:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 12;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.FormRow;
                var2 = var1.Arrow;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 84:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun114532: for (var _fun114532_ip = 0;;) switch (_fun114532_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guild;
                var _closure2_slot0 = var8;
                var2 = var1.isGuildAdmin;
                var3 = var1.canManageGuild;
                var6 = var1.canManageGuildExpressions;
                var11 = var1.canManageChannels;
                var14 = var1.canViewAuditLog;
                var13 = var1.canManageWebhooks;
                var12 = var1.canUnlinkChannelLobbies;
                var18 = var1.categories;
                var1 = var1.pushScreen;
                var _closure2_slot1 = var1;
                var17 = _closure1_slot17;
                var22 = _closure1_slot0;
                var23 = _closure1_slot3;
                var1 = 12;
                var5 = var23[var1];
                var4 = undefined;
                var5 = var22.bind(var4)(var5);
                var16 = var5.FormRow;
                var15 = {};
                var10 = 16;
                var5 = var23[var10];
                var5 = var22.bind(var4)(var5);
                var19 = var5.intl;
                var9 = var19.string;
                var5 = var23[var10];
                var5 = var22.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["/dp6yY"];
                var5 = var9.bind(var19)(var5);
                var15.label = var5;
                var5 = _closure1_slot23;
                var5 = var5.bind(var4)();
                var15.trailing = var5;
                var20 = _closure1_slot17;
                var9 = 17;
                var5 = var23[var9];
                var5 = var22.bind(var4)(var5);
                var5 = var5.TableRow;
                var19 = var5.Icon;
                var5 = {};
                var21 = 18;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.CircleInformationIcon;
                var5.IconComponent = var21;
                var5 = var20.bind(var4)(var19, var5);
                var15.leading = var5;
                var5 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.OVERVIEW;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var5;
                var5 = 'overview';
                var15 = var17.bind(var4)(var16, var15, var5);
                var5 = new Array(1);
                var5[0] = var15;
                var16 = _closure1_slot9;
                var15 = var16.getCurrentUser;
                var17 = var15.bind(var16)();
                if (!var3) {
                    _fun114532_ip = 469;
                    continue _fun114532
                }
            case 285:
                var16 = _closure1_slot20;
                var21 = _closure1_slot17;
                var25 = _closure1_slot0;
                var26 = _closure1_slot3;
                var15 = var26[var1];
                var15 = var25.bind(var4)(var15);
                var20 = var15.FormRow;
                var19 = {};
                var15 = var26[var10];
                var15 = var25.bind(var4)(var15);
                var23 = var15.intl;
                var22 = var23.string;
                var15 = var26[var10];
                var15 = var25.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["5tbTdV"];
                var15 = var22.bind(var23)(var15);
                var19.label = var15;
                var15 = _closure1_slot23;
                var15 = var15.bind(var4)();
                var19.trailing = var15;
                var23 = _closure1_slot17;
                var15 = var26[var9];
                var15 = var25.bind(var4)(var15);
                var15 = var15.TableRow;
                var22 = var15.Icon;
                var15 = {};
                var24 = 19;
                var24 = var26[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.ModerationIcon;
                var15.IconComponent = var24;
                var15 = var23.bind(var4)(var22, var15);
                var19.leading = var15;
                var15 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.MODERATION;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var19.onPress = var15;
                var15 = 'moderation';
                var15 = var21.bind(var4)(var20, var19, var15);
                var15 = var16.bind(var4)(var15, var5);
            case 469:
                if (!var14) {
                    _fun114532_ip = 659;
                    continue _fun114532
                }
            case 475:
                var15 = _closure1_slot20;
                var20 = _closure1_slot17;
                var24 = _closure1_slot0;
                var25 = _closure1_slot3;
                var14 = var25[var1];
                var14 = var24.bind(var4)(var14);
                var19 = var14.FormRow;
                var16 = {};
                var14 = var25[var10];
                var14 = var24.bind(var4)(var14);
                var22 = var14.intl;
                var21 = var22.string;
                var14 = var25[var10];
                var14 = var24.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.SPWLyT;
                var14 = var21.bind(var22)(var14);
                var16.label = var14;
                var14 = _closure1_slot23;
                var14 = var14.bind(var4)();
                var16.trailing = var14;
                var22 = _closure1_slot17;
                var14 = var25[var9];
                var14 = var24.bind(var4)(var14);
                var14 = var14.TableRow;
                var21 = var14.Icon;
                var14 = {};
                var23 = 20;
                var23 = var25[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.ClipboardListIcon;
                var14.IconComponent = var23;
                var14 = var22.bind(var4)(var21, var14);
                var16.leading = var14;
                var14 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.AUDIT_LOG;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var16.onPress = var14;
                var14 = 'auditlogs';
                var14 = var20.bind(var4)(var19, var16, var14);
                var14 = var15.bind(var4)(var14, var5);
            case 659:
                if (var11) {
                    _fun114532_ip = 707;
                    continue _fun114532
                }
            case 662:
                var14 = null;
                var14 = var14 != var17;
                if (!var14) {
                    _fun114532_ip = 704;
                    continue _fun114532
                }
            case 671:
                var16 = _closure1_slot2;
                var19 = _closure1_slot3;
                var15 = 21;
                var15 = var19[var15];
                var16 = var16.bind(var4)(var15);
                var15 = var16.canManageACategory;
                var14 = var15.bind(var16)(var17, var8, var18);
            case 704:
                var11 = var14;
            case 707:
                if (!var11) {
                    _fun114532_ip = 895;
                    continue _fun114532
                }
            case 713:
                var14 = _closure1_slot20;
                var17 = _closure1_slot17;
                var21 = _closure1_slot0;
                var22 = _closure1_slot3;
                var11 = var22[var1];
                var11 = var21.bind(var4)(var11);
                var16 = var11.FormRow;
                var15 = {};
                var11 = var22[var10];
                var11 = var21.bind(var4)(var11);
                var19 = var11.intl;
                var18 = var19.string;
                var11 = var22[var10];
                var11 = var21.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.OGiMXJ;
                var11 = var18.bind(var19)(var11);
                var15.label = var11;
                var11 = _closure1_slot23;
                var11 = var11.bind(var4)();
                var15.trailing = var11;
                var19 = _closure1_slot17;
                var11 = var22[var9];
                var11 = var21.bind(var4)(var11);
                var11 = var11.TableRow;
                var18 = var11.Icon;
                var11 = {};
                var20 = 22;
                var20 = var22[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.ChannelListIcon;
                var11.IconComponent = var20;
                var11 = var19.bind(var4)(var18, var11);
                var15.leading = var11;
                var11 = function() {
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
                var15.onPress = var11;
                var11 = 'channels';
                var11 = var17.bind(var4)(var16, var15, var11);
                var11 = var14.bind(var4)(var11, var5);
            case 895:
                var11 = var3;
                if (var11) {
                    _fun114532_ip = 904;
                    continue _fun114532
                }
            case 901:
                var11 = var13;
            case 904:
                if (var11) {
                    _fun114532_ip = 910;
                    continue _fun114532
                }
            case 907:
                var11 = var12;
            case 910:
                if (!var11) {
                    _fun114532_ip = 1098;
                    continue _fun114532
                }
            case 916:
                var12 = _closure1_slot20;
                var15 = _closure1_slot17;
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var11 = var20[var1];
                var11 = var19.bind(var4)(var11);
                var14 = var11.FormRow;
                var13 = {};
                var11 = var20[var10];
                var11 = var19.bind(var4)(var11);
                var17 = var11.intl;
                var16 = var17.string;
                var11 = var20[var10];
                var11 = var19.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.CIsNZw;
                var11 = var16.bind(var17)(var11);
                var13.label = var11;
                var11 = _closure1_slot23;
                var11 = var11.bind(var4)();
                var13.trailing = var11;
                var17 = _closure1_slot17;
                var11 = var20[var9];
                var11 = var19.bind(var4)(var11);
                var11 = var11.TableRow;
                var16 = var11.Icon;
                var11 = {};
                var18 = 23;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.PuzzlePieceIcon;
                var11.IconComponent = var18;
                var11 = var17.bind(var4)(var16, var11);
                var13.leading = var11;
                var11 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.INTEGRATIONS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onPress = var11;
                var11 = 'integrations';
                var11 = var15.bind(var4)(var14, var13, var11);
                var11 = var12.bind(var4)(var11, var5);
            case 1098:
                if (!var6) {
                    _fun114532_ip = 1456;
                    continue _fun114532
                }
            case 1104:
                var12 = _closure1_slot20;
                var15 = _closure1_slot17;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var6 = var19[var1];
                var6 = var18.bind(var4)(var6);
                var14 = var6.FormRow;
                var13 = {};
                var6 = var19[var10];
                var6 = var18.bind(var4)(var6);
                var16 = var6.intl;
                var11 = var16.string;
                var6 = var19[var10];
                var6 = var18.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.sMOuuS;
                var6 = var11.bind(var16)(var6);
                var13.label = var6;
                var6 = _closure1_slot23;
                var11 = var6.bind(var4)();
                var13.trailing = var11;
                var17 = _closure1_slot17;
                var11 = var19[var9];
                var11 = var18.bind(var4)(var11);
                var11 = var11.TableRow;
                var16 = var11.Icon;
                var11 = {};
                var20 = 24;
                var20 = var19[var20];
                var20 = var18.bind(var4)(var20);
                var20 = var20.ReactionIcon;
                var11.IconComponent = var20;
                var11 = var17.bind(var4)(var16, var11);
                var13.leading = var11;
                var11 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.EMOJI;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onPress = var11;
                var11 = 'emoji';
                var11 = var15.bind(var4)(var14, var13, var11);
                var11 = var12.bind(var4)(var11, var5);
                var11 = _closure1_slot20;
                var14 = _closure1_slot17;
                var12 = var19[var1];
                var12 = var18.bind(var4)(var12);
                var13 = var12.FormRow;
                var12 = {};
                var15 = var19[var10];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var19[var10];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.R5nQkS;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var6 = var6.bind(var4)();
                var12.trailing = var6;
                var16 = _closure1_slot17;
                var6 = var19[var9];
                var6 = var18.bind(var4)(var6);
                var6 = var6.TableRow;
                var15 = var6.Icon;
                var6 = {};
                var17 = 25;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.StickerIcon;
                var6.IconComponent = var17;
                var6 = var16.bind(var4)(var15, var6);
                var12.leading = var6;
                var6 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.STICKERS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var6;
                var6 = 'stickers';
                var6 = var14.bind(var4)(var13, var12, var6);
                var6 = var11.bind(var4)(var6, var5);
            case 1456:
                if (!var3) {
                    _fun114532_ip = 1646;
                    continue _fun114532
                }
            case 1462:
                var6 = _closure1_slot20;
                var13 = _closure1_slot17;
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var3 = var18[var1];
                var3 = var17.bind(var4)(var3);
                var12 = var3.FormRow;
                var11 = {};
                var3 = var18[var10];
                var3 = var17.bind(var4)(var3);
                var15 = var3.intl;
                var14 = var15.string;
                var3 = var18[var10];
                var3 = var17.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.Am9YHi;
                var3 = var14.bind(var15)(var3);
                var11.label = var3;
                var3 = _closure1_slot23;
                var3 = var3.bind(var4)();
                var11.trailing = var3;
                var15 = _closure1_slot17;
                var3 = var18[var9];
                var3 = var17.bind(var4)(var3);
                var3 = var3.TableRow;
                var14 = var3.Icon;
                var3 = {};
                var16 = 26;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.ShieldUserIcon;
                var3.IconComponent = var16;
                var3 = var15.bind(var4)(var14, var3);
                var11.leading = var3;
                var3 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot13;
                    var1 = var0.SECURITY;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var3;
                var3 = 'security';
                var3 = var13.bind(var4)(var12, var11, var3);
                var3 = var6.bind(var4)(var3, var5);
            case 1646:
                if (!var2) {
                    _fun114532_ip = 1680;
                    continue _fun114532
                }
            case 1649:
                var6 = _closure1_slot0;
                var11 = _closure1_slot3;
                var3 = 27;
                var3 = var11[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.canSeeVanityUrlSettings;
                var2 = var3.bind(var6)(var8);
            case 1680:
                if (!var2) {
                    _fun114532_ip = 1870;
                    continue _fun114532
                }
            case 1686:
                var2 = _closure1_slot20;
                var8 = _closure1_slot17;
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var3 = var15[var1];
                var3 = var14.bind(var4)(var3);
                var6 = var3.FormRow;
                var3 = {};
                var11 = var15[var10];
                var11 = var14.bind(var4)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var15[var10];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["5XZKy/"];
                var11 = var12.bind(var13)(var11);
                var3.label = var11;
                var11 = _closure1_slot23;
                var11 = var11.bind(var4)();
                var3.trailing = var11;
                var12 = _closure1_slot17;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.TableRow;
                var11 = var9.Icon;
                var9 = {};
                var13 = 28;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.LinkIcon;
                var9.IconComponent = var13;
                var9 = var12.bind(var4)(var11, var9);
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
            case 1870:
                var3 = var5.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun114532_ip = 1985;
                    continue _fun114532
                }
            case 1883:
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
            case 1985:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun114542: for (var _fun114542_ip = 0;;) switch (_fun114542_ip) {
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
                var12 = _closure1_slot0;
                var7 = _closure1_slot3;
                var6 = 12;
                var0 = var7[var6];
                var2 = undefined;
                var0 = var12.bind(var2)(var0);
                var1 = var0.FormSection;
                var0 = {};
                var10 = 16;
                var8 = var7[var10];
                var8 = var12.bind(var2)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var7 = var7[var10];
                var7 = var12.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7["1g9A/f"];
                var7 = var8.bind(var11)(var7);
                var0.title = var7;
                var8 = _closure1_slot17;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var6 = var14[var6];
                var6 = var13.bind(var2)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var11 = var14[var10];
                var11 = var13.bind(var2)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var2)(var10);
                var10 = var10.t;
                if (var4) {
                    _fun114542_ip = 316;
                    continue _fun114542
                }
            case 199:
                var4 = var10.ElKTeb;
                var4 = var11.bind(var12)(var4);
                var6.label = var4;
                var4 = _closure1_slot23;
                var4 = var4.bind(var2)();
                var6.trailing = var4;
                var16 = _closure1_slot17;
                var4 = 17;
                var4 = var14[var4];
                var4 = var13.bind(var2)(var4);
                var4 = var4.TableRow;
                var15 = var4.Icon;
                var4 = {};
                var17 = 29;
                var17 = var14[var17];
                var17 = var13.bind(var2)(var17);
                var17 = var17.TreehouseIcon;
                var4.IconComponent = var17;
                var4 = var16.bind(var2)(var15, var4);
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
                _fun114542_ip = 431;
                continue _fun114542;
            case 316:
                var10 = var10.nRtNqn;
                var10 = var11.bind(var12)(var10);
                var6.label = var10;
                var10 = _closure1_slot23;
                var10 = var10.bind(var2)();
                var6.trailing = var10;
                var11 = _closure1_slot17;
                var9 = 17;
                var9 = var14[var9];
                var9 = var13.bind(var2)(var9);
                var9 = var9.TableRow;
                var10 = var9.Icon;
                var9 = {};
                var12 = 29;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                var12 = var12.TreehouseIcon;
                var9.IconComponent = var12;
                var9 = var11.bind(var2)(var10, var9);
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
            case 431:
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun114545: for (var _fun114545_ip = 0;;) switch (_fun114545_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.canManageGuild;
                var7 = var1.canManageRoles;
                var3 = var1.canManageBans;
                var2 = var1.pushScreen;
                var _closure2_slot0 = var2;
                var18 = var1.permissionMigrationAvailable;
                var1 = _closure1_slot21;
                var4 = undefined;
                var21 = var1.bind(var4)();
                var12 = _closure1_slot17;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 12;
                var5 = var17[var1];
                var5 = var16.bind(var4)(var5);
                var11 = var5.FormRow;
                var8 = {};
                var10 = 16;
                var5 = var17[var10];
                var5 = var16.bind(var4)(var5);
                var13 = var5.intl;
                var9 = var13.string;
                var5 = var17[var10];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["9Oq93m"];
                var5 = var9.bind(var13)(var5);
                var8.label = var5;
                var5 = _closure1_slot23;
                var5 = var5.bind(var4)();
                var8.trailing = var5;
                var14 = _closure1_slot17;
                var9 = 17;
                var5 = var17[var9];
                var5 = var16.bind(var4)(var5);
                var5 = var5.TableRow;
                var13 = var5.Icon;
                var5 = {};
                var15 = 30;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.GroupIcon;
                var5.IconComponent = var15;
                var5 = var14.bind(var4)(var13, var5);
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
                var8 = var12.bind(var4)(var11, var8, var5);
                var5 = new Array(1);
                var5[0] = var8;
                if (!var7) {
                    _fun114545_ip = 492;
                    continue _fun114545
                }
            case 247:
                var8 = _closure1_slot20;
                var13 = _closure1_slot17;
                var22 = _closure1_slot0;
                var23 = _closure1_slot3;
                var7 = var23[var1];
                var7 = var22.bind(var4)(var7);
                var12 = var7.FormRow;
                var11 = {};
                var7 = var23[var10];
                var7 = var22.bind(var4)(var7);
                var15 = var7.intl;
                var14 = var15.string;
                var7 = var23[var10];
                var7 = var22.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["LPJmL/"];
                var7 = var14.bind(var15)(var7);
                var11.label = var7;
                var7 = _closure1_slot23;
                var7 = var7.bind(var4)();
                var11.trailing = var7;
                var15 = _closure1_slot18;
                var14 = _closure1_slot5;
                var7 = {};
                var19 = _closure1_slot17;
                var16 = var23[var9];
                var16 = var22.bind(var4)(var16);
                var16 = var16.TableRow;
                var17 = var16.Icon;
                var16 = {};
                var20 = 26;
                var20 = var23[var20];
                var20 = var22.bind(var4)(var20);
                var20 = var20.ShieldUserIcon;
                var16.IconComponent = var20;
                var17 = var19.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = null;
                if (!var18) {
                    _fun114545_ip = 445;
                    continue _fun114545
                }
            case 419:
                var20 = _closure1_slot17;
                var19 = _closure1_slot5;
                var18 = {};
                var21 = var21.redDot;
                var18.style = var21;
                var17 = var20.bind(var4)(var19, var18);
            case 445:
                var16[1] = var17;
                var7.children = var16;
                var7 = var15.bind(var4)(var14, var7);
                var11.leading = var7;
                var7 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot13;
                    var1 = var0.ROLES;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var7;
                var7 = 'roles';
                var7 = var13.bind(var4)(var12, var11, var7);
                var7 = var8.bind(var4)(var7, var5);
            case 492:
                if (!var6) {
                    _fun114545_ip = 680;
                    continue _fun114545
                }
            case 498:
                var7 = _closure1_slot20;
                var12 = _closure1_slot17;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var6 = var17[var1];
                var6 = var16.bind(var4)(var6);
                var11 = var6.FormRow;
                var8 = {};
                var6 = var17[var10];
                var6 = var16.bind(var4)(var6);
                var14 = var6.intl;
                var13 = var14.string;
                var6 = var17[var10];
                var6 = var16.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.ngRFjZ;
                var6 = var13.bind(var14)(var6);
                var8.label = var6;
                var6 = _closure1_slot23;
                var6 = var6.bind(var4)();
                var8.trailing = var6;
                var14 = _closure1_slot17;
                var6 = var17[var9];
                var6 = var16.bind(var4)(var6);
                var6 = var6.TableRow;
                var13 = var6.Icon;
                var6 = {};
                var15 = 28;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.LinkIcon;
                var6.IconComponent = var15;
                var6 = var14.bind(var4)(var13, var6);
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
                var6 = var12.bind(var4)(var11, var8, var6);
                var6 = var7.bind(var4)(var6, var5);
            case 680:
                if (!var3) {
                    _fun114545_ip = 868;
                    continue _fun114545
                }
            case 686:
                var3 = _closure1_slot20;
                var8 = _closure1_slot17;
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var6 = var15[var1];
                var6 = var14.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var11 = var15[var10];
                var11 = var14.bind(var4)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var15[var10];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.ZbeITS;
                var11 = var12.bind(var13)(var11);
                var6.label = var11;
                var11 = _closure1_slot23;
                var11 = var11.bind(var4)();
                var6.trailing = var11;
                var12 = _closure1_slot17;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.TableRow;
                var11 = var9.Icon;
                var9 = {};
                var13 = 31;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.HammerIcon;
                var9.IconComponent = var13;
                var9 = var12.bind(var4)(var11, var9);
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
            case 868:
                var6 = var5.length;
                var3 = 0;
                var0 = null;
                if (!(var3 !== var6)) {
                    _fun114545_ip = 970;
                    continue _fun114545
                }
            case 881:
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
            case 970:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun114550: for (var _fun114550_ip = 0;;) switch (_fun114550_ip) {
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
                var1 = 32;
                var1 = var20[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var2 = 33;
                var4 = var20[var2];
                var8 = var9.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var30
                    _fun114551: for (var _fun114551_ip = 0;;) switch (_fun114551_ip) {
                        case 0:
                            var5 = _closure1_slot6;
                            var4 = var5.getChannels;
                            var0 = _closure2_slot0;
                            var3 = null;
                            var7 = var3 == var0;
                            var2 = undefined;
                            if (var7) {
                                _fun114551_ip = 40;
                                continue _fun114551
                            }
                        case 31:
                            var6 = _closure2_slot0;
                            var2 = var6.id;
                        case 40:
                            var2 = var4.bind(var5)(var2);
                            var3 = var3 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun114551_ip = 68;
                                continue _fun114551
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
                var2 = 34;
                var2 = var20[var2];
                var2 = var13.bind(var3)(var2);
                var15 = var2.bind(var3)(var21);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var4 = function() { // Environment: var30
                    var2 = _closure1_slot22;
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
                    var0 = 35;
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
                    var2 = _closure1_slot22;
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
                var1 = 36;
                var1 = var20[var1];
                var4 = var9.bind(var3)(var1);
                var2 = var4.useChannelsAllowedToUnlink;
                var1 = var21.id;
                var1 = var2.bind(var4)(var1);
                var2 = var1.length;
                var1 = 0;
                var24 = var2 > var1;
                var1 = 37;
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
                    _fun114555: for (var _fun114555_ip = 0;;) switch (_fun114555_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.message;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun114555_ip = 63;
                                continue _fun114555
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 38;
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
                var4 = 39;
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
                var11 = 40;
                var11 = var20[var11];
                var13 = var13.bind(var3)(var11);
                var11 = {};
                var20 = {};
                var31 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 35;
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
                    _fun114557: for (var _fun114557_ip = 0;;) switch (_fun114557_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4;
                            if (!var0) {
                                _fun114557_ip = 81;
                                continue _fun114557
                            }
                        case 9:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 41;
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
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(5);
                var11[0] = var13;
                var20 = _closure1_slot17;
                var14 = _closure1_slot24;
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
                    _fun114550_ip = 671;
                    continue _fun114550
                }
            case 646:
                var22 = _closure1_slot17;
                var20 = _closure1_slot25;
                var14 = {};
                var14.guild = var21;
                var14.pushScreen = var16;
                var13 = var22.bind(var3)(var20, var14);
            case 671:
                var11[2] = var13;
                if (!var12) {
                    _fun114550_ip = 719;
                    continue _fun114550
                }
            case 678:
                var20 = _closure1_slot17;
                var14 = _closure1_slot1;
                var22 = _closure1_slot3;
                var13 = 42;
                var13 = var22[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.guild = var21;
                var13.pushScreen = var16;
                var12 = var20.bind(var3)(var14, var13);
            case 719:
                var11[3] = var12;
                var14 = _closure1_slot17;
                var13 = _closure1_slot26;
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
                var7 = _closure1_slot17;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 43;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
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
    var6 = var3.jsx;
    var _closure1_slot17 = var6;
    var6 = var3.jsxs;
    var _closure1_slot18 = var6;
    var3 = var3.Fragment;
    var _closure1_slot19 = var3;
    var3 = function arg0, arg1() {
        _fun114558: for (var _fun114558_ip = 0;;) switch (_fun114558_ip) {
            case 0:
                var2 = arg1;
                var1 = var2.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun114558_ip = 104;
                    continue _fun114558
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var9 = -2;
    var8.marginTop = var9;
    var3.emptySectionHeader = var8;
    var8 = {
        'position': 'absolute',
        'width': 8,
        'height': 8,
        'backgroundColor': null,
        'borderRadius': null,
        'right': 4,
        'bottom': 4
    };
    var9 = 14;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_FEEDBACK_NOTIFICATION;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.redDot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = 44;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalLanding.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun114559: for (var _fun114559_ip = 0;;) switch (_fun114559_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var6 = var1.contentContainerStyle;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 33;
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
                    _fun114559_ip = 165;
                    continue _fun114559
                }
            case 135:
                var3 = _closure1_slot17;
                var2 = _closure1_slot27;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1671, 1410, 3091, 1621, 14665, 8156, 660, 4874, 33, 4302, 5378, 1297, 671, 478, 1234, 4898, 3266, 14666, 7428, 3096, 14668, 10586, 7679, 8797, 8142, 14670, 3254, 11134, 4853, 10128, 1469, 566, 12592, 8155, 14671, 5632, 3147, 4897, 14063, 1417, 14672, 5204, 2]);