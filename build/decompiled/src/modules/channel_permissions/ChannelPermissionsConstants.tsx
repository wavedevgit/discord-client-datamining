// modules/channel_permissions/ChannelPermissionsConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var9;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var12 = 0;
    var3 = var9[var12];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var4 = var3.ChannelTypes;
    var _closure1_slot3 = var4;
    var4 = var3.ChannelTypesSets;
    var _closure1_slot4 = var4;
    var4 = var3.HelpdeskArticles;
    var _closure1_slot5 = var4;
    var4 = var3.Permissions;
    var _closure1_slot6 = var4;
    var3 = var3.UserSettingsSections;
    var6 = {};
    var6.EMPTY_STATE = var12;
    var3 = 'EMPTY_STATE';
    var6[var12] = var3;
    var11 = 1;
    var6.ADMINISTRATOR = var11;
    var3 = 'ADMINISTRATOR';
    var6[var11] = var3;
    var10 = 2;
    var6.ROLE = var10;
    var3 = 'ROLE';
    var6[var10] = var3;
    var4 = 3;
    var6.OWNER = var4;
    var3 = 'OWNER';
    var6[var4] = var3;
    var5 = 4;
    var6.MEMBER = var5;
    var3 = 'MEMBER';
    var6[var5] = var3;
    var5 = 5;
    var6.USER = var5;
    var3 = 'USER';
    var6[var5] = var3;
    var7 = 6;
    var6.GUILD = var7;
    var3 = 'GUILD';
    var6[var7] = var3;
    var5 = {};
    var5.ROLES = var12;
    var3 = 'ROLES';
    var5[var12] = var3;
    var5.MEMBERS = var11;
    var3 = 'MEMBERS';
    var5[var11] = var3;
    var5.USERS = var10;
    var3 = 'USERS';
    var5[var10] = var3;
    var5.GUILDS = var4;
    var3 = 'GUILDS';
    var5[var4] = var3;
    var4 = {};
    var3 = 'settings-page';
    var4.SETTINGS_PAGE = var3;
    var3 = 'members-list';
    var4.MEMBERS_LIST = var3;
    var3 = 'empty-state';
    var4.EMPTY_STATE = var3;
    var3 = 'create-channel';
    var4.CREATE_CHANNEL = var3;
    var3 = {};
    var10 = 'basic';
    var3.BASIC = var10;
    var10 = 'advanced';
    var3.ADVANCED = var10;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/channel_permissions/ChannelPermissionsConstants.tsx';
    var7 = var8.bind(var9)(var7);
    var2.RowType = var6;
    var2.AudienceSelectorSections = var5;
    var5 = 20;
    var2.MEMBER_REQUEST_COUNT = var5;
    var5 = 'channelPermissionSettingsAdvancedModeOn';
    var2.ADVANCED_MODE_ON_KEY = var5;
    var2.TrackExposureLocations = var4;
    var2.SettingMode = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: getChannelPermissionSpecMap, environment: var1
        _fun51752: for (var _fun51752_ip = 0;;) switch (_fun51752_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var12 = arg2;
                var5 = var10.type;
                var0 = {};
                var1 = _closure1_slot6;
                var2 = var1.VIEW_CHANNEL;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 113;
                    continue _fun51752
                }
            case 54:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 1;
                var6 = var13[var1];
                var8 = undefined;
                var6 = var11.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var1 = var13[var1];
                var1 = var11.bind(var8)(var1);
                var1 = var1.t;
                var1 = var1["W/A4Qp"];
                var1 = var6.bind(var7)(var1);
                _fun51752_ip = 170;
                continue _fun51752;
            case 113:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 1;
                var7 = var14[var6];
                var11 = undefined;
                var7 = var13.bind(var11)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var14[var6];
                var6 = var13.bind(var11)(var6);
                var6 = var6.t;
                var6 = var6.uV83yi;
                var1 = var7.bind(var8)(var6);
            case 170:
                var2.title = var1;
                var1 = _closure1_slot3;
                var6 = var1.GUILD_CATEGORY;
                if (var9) {
                    _fun51752_ip = 268;
                    continue _fun51752
                }
            case 187:
                if (!(var5 !== var6)) {
                    _fun51752_ip = 228;
                    continue _fun51752
                }
            case 191:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 1;
                var7 = var7[var1];
                var1 = undefined;
                var1 = var8.bind(var1)(var7);
                var1 = var1.t;
                var1 = var1.M2iEy3;
                _fun51752_ip = 263;
                continue _fun51752;
            case 228:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 1;
                var8 = var8[var7];
                var7 = undefined;
                var7 = var11.bind(var7)(var8);
                var7 = var7.t;
                var1 = var7.SzosGs;
            case 263:
                _fun51752_ip = 409;
                continue _fun51752;
            case 268:
                if (!(var6 !== var5)) {
                    _fun51752_ip = 374;
                    continue _fun51752
                }
            case 272:
                var6 = _closure1_slot3;
                var6 = var6.GUILD_VOICE;
                if (!(var6 !== var5)) {
                    _fun51752_ip = 337;
                    continue _fun51752
                }
            case 286:
                var6 = _closure1_slot3;
                var6 = var6.GUILD_STAGE_VOICE;
                if (!(var6 !== var5)) {
                    _fun51752_ip = 337;
                    continue _fun51752
                }
            case 300:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var1 = var6["3jG0Bo"];
                _fun51752_ip = 409;
                continue _fun51752;
            case 337:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var1 = var6.ejL1Wo;
                _fun51752_ip = 409;
                continue _fun51752;
            case 374:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var1 = var6["o/vBzj"];
            case 409:
                var2.description = var1;
                var1 = _closure1_slot6;
                var6 = var1.VIEW_CHANNEL;
                var2.flag = var6;
                var0[var3] = var2;
                var2 = var1.MANAGE_CHANNELS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var1 = {};
                var2 = _closure1_slot3;
                var2 = var2.GUILD_CATEGORY;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 523;
                    continue _fun51752
                }
            case 464:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 1;
                var6 = var13[var2];
                var8 = undefined;
                var6 = var11.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var13[var2];
                var2 = var11.bind(var8)(var2);
                var2 = var2.t;
                var2 = var2.nAw15L;
                var2 = var6.bind(var7)(var2);
                _fun51752_ip = 580;
                continue _fun51752;
            case 523:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 1;
                var7 = var14[var6];
                var11 = undefined;
                var7 = var13.bind(var11)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var14[var6];
                var6 = var13.bind(var11)(var6);
                var6 = var6.t;
                var6 = var6["9qLtWs"];
                var2 = var7.bind(var8)(var6);
            case 580:
                var1.title = var2;
                var2 = _closure1_slot3;
                var2 = var2.GUILD_CATEGORY;
                if (!(var2 !== var5)) {
                    _fun51752_ip = 740;
                    continue _fun51752
                }
            case 601:
                var2 = _closure1_slot3;
                var2 = var2.GUILD_VOICE;
                if (!(var2 !== var5)) {
                    _fun51752_ip = 703;
                    continue _fun51752
                }
            case 615:
                var2 = _closure1_slot3;
                var2 = var2.GUILD_STAGE_VOICE;
                if (!(var2 !== var5)) {
                    _fun51752_ip = 666;
                    continue _fun51752
                }
            case 629:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.t;
                var2 = var2.ydL28i;
                _fun51752_ip = 775;
                continue _fun51752;
            case 666:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var2 = var6.SDX669;
                _fun51752_ip = 775;
                continue _fun51752;
            case 703:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var2 = var6["+gl2ne"];
                _fun51752_ip = 775;
                continue _fun51752;
            case 740:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 1;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var6 = var6.t;
                var2 = var6.KJ2JnG;
            case 775:
                var1.description = var2;
                var2 = _closure1_slot6;
                var6 = var2.MANAGE_CHANNELS;
                var1.flag = var6;
                var0[var3] = var1;
                var3 = var2.MANAGE_ROLES;
                var1 = var3.toString;
                var8 = var1.bind(var3)();
                var3 = {};
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 1;
                var11 = var1[var7];
                var6 = undefined;
                var11 = var13.bind(var6)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var1[var7];
                var11 = var13.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.ICb6am;
                var11 = var14.bind(var15)(var11);
                var3.title = var11;
                var11 = _closure1_slot3;
                var11 = var11.GUILD_CATEGORY;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 971;
                    continue _fun51752
                }
            case 893:
                var11 = _closure1_slot3;
                var11 = var11.GUILD_STAGE_VOICE;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 939;
                    continue _fun51752
                }
            case 907:
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.hOMXOv;
                _fun51752_ip = 1001;
                continue _fun51752;
            case 939:
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var7];
                var14 = var15.bind(var6)(var14);
                var14 = var14.t;
                var11 = var14.hcw4mx;
                _fun51752_ip = 1001;
                continue _fun51752;
            case 971:
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var7];
                var14 = var15.bind(var6)(var14);
                var14 = var14.t;
                var11 = var14.TyyCMD;
            case 1001:
                var3.description = var11;
                var11 = var2.MANAGE_ROLES;
                var3.flag = var11;
                var0[var8] = var3;
                var3 = var2.MANAGE_WEBHOOKS;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = {};
                var8 = var1[var7];
                var8 = var13.bind(var6)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var1 = var1[var7];
                var1 = var13.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["/ADKmM"];
                var1 = var8.bind(var11)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 1132;
                    continue _fun51752
                }
            case 1100:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.CYBZry;
                _fun51752_ip = 1162;
                continue _fun51752;
            case 1132:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["K5+ZZ7"];
            case 1162:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.MANAGE_WEBHOOKS;
                var2.flag = var8;
                var0[var3] = var2;
                var3 = var1.CREATE_INSTANT_INVITE;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = {};
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = var8[var7];
                var11 = var14.bind(var6)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var8 = var8[var7];
                var8 = var14.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.zJrgTG;
                var8 = var11.bind(var13)(var8);
                var2.title = var8;
                var8 = _closure1_slot3;
                var8 = var8.GUILD_CATEGORY;
                if (!(var8 !== var5)) {
                    _fun51752_ip = 1365;
                    continue _fun51752
                }
            case 1273:
                var8 = _closure1_slot3;
                var8 = var8.GUILD_VOICE;
                if (!(var8 !== var5)) {
                    _fun51752_ip = 1333;
                    continue _fun51752
                }
            case 1287:
                var8 = _closure1_slot3;
                var8 = var8.GUILD_STAGE_VOICE;
                if (!(var8 !== var5)) {
                    _fun51752_ip = 1333;
                    continue _fun51752
                }
            case 1301:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.q4g2aI;
                _fun51752_ip = 1395;
                continue _fun51752;
            case 1333:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var13.bind(var6)(var11);
                var11 = var11.t;
                var8 = var11.lUCs1n;
                _fun51752_ip = 1395;
                continue _fun51752;
            case 1365:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var13.bind(var6)(var11);
                var11 = var11.t;
                var8 = var11["3YFAAX"];
            case 1395:
                var2.description = var8;
                var8 = var1.CREATE_INSTANT_INVITE;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.SEND_MESSAGES;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var1 = _closure1_slot4;
                var8 = var1.GUILD_THREADS_ONLY;
                var1 = var8.has;
                var1 = var1.bind(var8)(var5);
                if (var1) {
                    _fun51752_ip = 1580;
                    continue _fun51752
                }
            case 1458:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 1526;
                    continue _fun51752
                }
            case 1472:
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var13.bind(var6)(var8);
                var11 = var8.intl;
                var8 = var11.string;
                var1 = var1[var7];
                var1 = var13.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.T32rkC;
                var1 = var8.bind(var11)(var1);
                _fun51752_ip = 1578;
                continue _fun51752;
            case 1526:
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = var8[var7];
                var11 = var14.bind(var6)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var8 = var8[var7];
                var8 = var14.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.S1VOwd;
                var1 = var11.bind(var13)(var8);
            case 1578:
                _fun51752_ip = 1634;
                continue _fun51752;
            case 1580:
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = var8[var7];
                var11 = var14.bind(var6)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var8 = var8[var7];
                var8 = var14.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.nJwAHX;
                var1 = var11.bind(var13)(var8);
            case 1634:
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 2037;
                    continue _fun51752
                }
            case 1655:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 1942;
                    continue _fun51752
                }
            case 1672:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 1909;
                    continue _fun51752
                }
            case 1689:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 1805;
                    continue _fun51752
                }
            case 1703:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 1750;
                    continue _fun51752
                }
            case 1717:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.WQ6zpT;
                _fun51752_ip = 2067;
                continue _fun51752;
            case 1750:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 4;
                var8 = var13[var8];
                var13 = var11.bind(var6)(var8);
                var11 = var13.getTextInVoiceSendMessageChannelPermissionText;
                var8 = null;
                var14 = var8 == var12;
                var8 = undefined;
                if (var14) {
                    _fun51752_ip = 1795;
                    continue _fun51752
                }
            case 1787:
                var8 = var12.sendMessagesDisabled;
            case 1795:
                var1 = var11.bind(var13)(var8);
                _fun51752_ip = 2067;
                continue _fun51752;
            case 1805:
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = var17[var7];
                var8 = var11.bind(var6)(var8);
                var14 = var8.intl;
                var13 = var14.format;
                var8 = var17[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var11 = var8.WFwfSD;
                var8 = {};
                var16 = _closure1_slot1;
                var15 = 3;
                var15 = var17[var15];
                var17 = var16.bind(var6)(var15);
                var16 = var17.getArticleURL;
                var15 = _closure1_slot5;
                var15 = var15.ANNOUNCEMENT_CHANNELS;
                var15 = var16.bind(var17)(var15);
                var8.articleURL = var15;
                var1 = var13.bind(var14)(var11, var8);
                _fun51752_ip = 2067;
                continue _fun51752;
            case 1909:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.LG9VAi;
                _fun51752_ip = 2067;
                continue _fun51752;
            case 1942:
                var8 = null;
                if (!(var8 != var12)) {
                    _fun51752_ip = 2004;
                    continue _fun51752
                }
            case 1948:
                var8 = var12.createPostsDisabled;
                if (!var8) {
                    _fun51752_ip = 2004;
                    continue _fun51752
                }
            case 1959:
                var8 = var10.isMediaChannel;
                var8 = var8.bind(var10)();
                if (var8) {
                    _fun51752_ip = 2004;
                    continue _fun51752
                }
            case 1972:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 2;
                var8 = var11[var8];
                var10 = var10.bind(var6)(var8);
                var8 = var10.getForumChannelPermissionText;
                var8 = var8.bind(var10)();
                _fun51752_ip = 2032;
                continue _fun51752;
            case 2004:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var7];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var8 = var10.LG9VAi;
            case 2032:
                var1 = var8;
                _fun51752_ip = 2067;
                continue _fun51752;
            case 2037:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.IjeLuu;
            case 2067:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.SEND_MESSAGES;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.EMBED_LINKS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["969dEL"];
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 2210;
                    continue _fun51752
                }
            case 2178:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.XFFhA0;
                _fun51752_ip = 2240;
                continue _fun51752;
            case 2210:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["7zlUay"];
            case 2240:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.EMBED_LINKS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.ATTACH_FILES;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var1 = {};
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = var2[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var2 = var2[var7];
                var2 = var11.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["3AS4UM"];
                var2 = var8.bind(var10)(var2);
                var1.title = var2;
                var2 = _closure1_slot3;
                var2 = var2.GUILD_CATEGORY;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 2383;
                    continue _fun51752
                }
            case 2351:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.WK9r7F;
                _fun51752_ip = 2413;
                continue _fun51752;
            case 2383:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var2 = var8.XREf9l;
            case 2413:
                var1.description = var2;
                var2 = _closure1_slot6;
                var8 = var2.ATTACH_FILES;
                var1.flag = var8;
                var0[var3] = var1;
                var3 = var2.ADD_REACTIONS;
                var1 = var3.toString;
                var8 = var1.bind(var3)();
                var3 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = var1[var7];
                var10 = var11.bind(var6)(var10);
                var14 = var10.intl;
                var13 = var14.string;
                var10 = var1[var7];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.yEoJAr;
                var10 = var13.bind(var14)(var10);
                var3.title = var10;
                var10 = _closure1_slot3;
                var10 = var10.GUILD_CATEGORY;
                if (!(var10 !== var5)) {
                    _fun51752_ip = 2602;
                    continue _fun51752
                }
            case 2524:
                var10 = _closure1_slot3;
                var10 = var10.GUILD_VOICE;
                if (!(var10 !== var5)) {
                    _fun51752_ip = 2570;
                    continue _fun51752
                }
            case 2538:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var7];
                var10 = var13.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.PVjR1Y;
                _fun51752_ip = 2632;
                continue _fun51752;
            case 2570:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var13 = var14.bind(var6)(var13);
                var13 = var13.t;
                var10 = var13.xSSbIs;
                _fun51752_ip = 2632;
                continue _fun51752;
            case 2602:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var13 = var14.bind(var6)(var13);
                var13 = var13.t;
                var10 = var13.pZT2Zh;
            case 2632:
                var3.description = var10;
                var10 = var2.ADD_REACTIONS;
                var3.flag = var10;
                var0[var8] = var3;
                var3 = var2.USE_EXTERNAL_EMOJIS;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = {};
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["+bxf3H"];
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 2763;
                    continue _fun51752
                }
            case 2731:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.Qc5vOr;
                _fun51752_ip = 2793;
                continue _fun51752;
            case 2763:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.mWAbK4;
            case 2793:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.USE_EXTERNAL_EMOJIS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.USE_EXTERNAL_STICKERS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.ERNhYf;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 2936;
                    continue _fun51752
                }
            case 2904:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.VF4fZZ;
                _fun51752_ip = 2966;
                continue _fun51752;
            case 2936:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["39whJ4"];
            case 2966:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.USE_EXTERNAL_STICKERS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.MENTION_EVERYONE;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var1 = {};
                var2 = _closure1_slot3;
                var2 = var2.GUILD_STAGE_VOICE;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 3147;
                    continue _fun51752
                }
            case 3024:
                var2 = null;
                if (!(var2 != var12)) {
                    _fun51752_ip = 3039;
                    continue _fun51752
                }
            case 3030:
                var2 = var12.inGameMentionsExperiment;
                if (var2) {
                    _fun51752_ip = 3093;
                    continue _fun51752
                }
            case 3039:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = var2[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var2 = var2[var7];
                var2 = var11.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.Y78KGC;
                var2 = var8.bind(var10)(var2);
                _fun51752_ip = 3145;
                continue _fun51752;
            case 3093:
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var7];
                var10 = var13.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var7];
                var8 = var13.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.lEO7Wr;
                var2 = var10.bind(var11)(var8);
            case 3145:
                _fun51752_ip = 3201;
                continue _fun51752;
            case 3147:
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var7];
                var10 = var13.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var7];
                var8 = var13.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.VDUAHO;
                var2 = var10.bind(var11)(var8);
            case 3201:
                var1.title = var2;
                var2 = _closure1_slot3;
                var2 = var2.GUILD_CATEGORY;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 3345;
                    continue _fun51752
                }
            case 3222:
                var2 = _closure1_slot3;
                var2 = var2.GUILD_STAGE_VOICE;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 3313;
                    continue _fun51752
                }
            case 3236:
                var2 = null;
                if (!(var2 != var12)) {
                    _fun51752_ip = 3251;
                    continue _fun51752
                }
            case 3242:
                var2 = var12.inGameMentionsExperiment;
                if (var2) {
                    _fun51752_ip = 3283;
                    continue _fun51752
                }
            case 3251:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["6IUSdt"];
                _fun51752_ip = 3311;
                continue _fun51752;
            case 3283:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var2 = var8.wdHpIC;
            case 3311:
                _fun51752_ip = 3343;
                continue _fun51752;
            case 3313:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var2 = var8.rZn1oO;
            case 3343:
                _fun51752_ip = 3375;
                continue _fun51752;
            case 3345:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var2 = var8["HOhg/B"];
            case 3375:
                var1.description = var2;
                var2 = _closure1_slot6;
                var8 = var2.MENTION_EVERYONE;
                var1.flag = var8;
                var0[var3] = var1;
                var3 = var2.MANAGE_MESSAGES;
                var1 = var3.toString;
                var8 = var1.bind(var3)();
                var3 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = var1[var7];
                var10 = var11.bind(var6)(var10);
                var14 = var10.intl;
                var13 = var14.string;
                var10 = var1[var7];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10["6lU9xM"];
                var10 = var13.bind(var14)(var10);
                var3.title = var10;
                var10 = _closure1_slot3;
                var10 = var10.GUILD_CATEGORY;
                if (!(var10 !== var5)) {
                    _fun51752_ip = 3639;
                    continue _fun51752
                }
            case 3489:
                var10 = _closure1_slot3;
                var10 = var10.GUILD_ANNOUNCEMENT;
                if (!(var10 !== var5)) {
                    _fun51752_ip = 3538;
                    continue _fun51752
                }
            case 3503:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var7];
                var10 = var13.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10["SeA+G9"];
                _fun51752_ip = 3669;
                continue _fun51752;
            case 3538:
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = var19[var7];
                var13 = var14.bind(var6)(var13);
                var16 = var13.intl;
                var15 = var16.format;
                var13 = var19[var7];
                var13 = var14.bind(var6)(var13);
                var13 = var13.t;
                var14 = var13.XRxOo0;
                var13 = {};
                var18 = _closure1_slot1;
                var17 = 3;
                var17 = var19[var17];
                var19 = var18.bind(var6)(var17);
                var18 = var19.getArticleURL;
                var17 = _closure1_slot5;
                var17 = var17.ANNOUNCEMENT_CHANNELS;
                var17 = var18.bind(var19)(var17);
                var13.articleURL = var17;
                var10 = var15.bind(var16)(var14, var13);
                _fun51752_ip = 3669;
                continue _fun51752;
            case 3639:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var7];
                var13 = var14.bind(var6)(var13);
                var13 = var13.t;
                var10 = var13["5R9nYh"];
            case 3669:
                var3.description = var10;
                var10 = var2.MANAGE_MESSAGES;
                var3.flag = var10;
                var0[var8] = var3;
                var3 = var2.PIN_MESSAGES;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = {};
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.Y5BI39;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 3800;
                    continue _fun51752
                }
            case 3768:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["0l2EjL"];
                _fun51752_ip = 3830;
                continue _fun51752;
            case 3800:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.gmbD87;
            case 3830:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.PIN_MESSAGES;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.BYPASS_SLOWMODE;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.kqcjeV;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 3973;
                    continue _fun51752
                }
            case 3941:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.Ha1xbw;
                _fun51752_ip = 4003;
                continue _fun51752;
            case 3973:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.C4t1Xu;
            case 4003:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.BYPASS_SLOWMODE;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.READ_MESSAGE_HISTORY;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var1 = _closure1_slot4;
                var8 = var1.GUILD_THREADS_ONLY;
                var1 = var8.has;
                var1 = var1.bind(var8)(var5);
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var7];
                var10 = var13.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var7];
                var8 = var13.bind(var6)(var8);
                var8 = var8.t;
                if (var1) {
                    _fun51752_ip = 4121;
                    continue _fun51752
                }
            case 4108:
                var1 = var8.l9ufaR;
                var1 = var10.bind(var11)(var1);
                _fun51752_ip = 4134;
                continue _fun51752;
            case 4121:
                var8 = var8["0RQwtn"];
                var1 = var10.bind(var11)(var8);
            case 4134:
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 4311;
                    continue _fun51752
                }
            case 4155:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 4259;
                    continue _fun51752
                }
            case 4169:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 4227;
                    continue _fun51752
                }
            case 4183:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 4227;
                    continue _fun51752
                }
            case 4197:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.cuMfH0;
                _fun51752_ip = 4341;
                continue _fun51752;
            case 4227:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.RqCc7i;
                _fun51752_ip = 4341;
                continue _fun51752;
            case 4259:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 4;
                var8 = var11[var8];
                var11 = var10.bind(var6)(var8);
                var10 = var11.getTextInVoiceReadMessageHistoryChannelPermissionText;
                var8 = null;
                var13 = var8 == var12;
                var8 = undefined;
                if (var13) {
                    _fun51752_ip = 4304;
                    continue _fun51752
                }
            case 4296:
                var8 = var12.readMessageHistoryDisabled;
            case 4304:
                var1 = var10.bind(var11)(var8);
                _fun51752_ip = 4341;
                continue _fun51752;
            case 4311:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["cJRv/g"];
            case 4341:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.READ_MESSAGE_HISTORY;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.SEND_TTS_MESSAGES;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.mMbwh7;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 4484;
                    continue _fun51752
                }
            case 4452:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.CpakGz;
                _fun51752_ip = 4514;
                continue _fun51752;
            case 4484:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.b7pc9U;
            case 4514:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.SEND_TTS_MESSAGES;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.USE_APPLICATION_COMMANDS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.nkoPOt;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 4657;
                    continue _fun51752
                }
            case 4625:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.ReG3gG;
                _fun51752_ip = 4687;
                continue _fun51752;
            case 4657:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["D+qW0J"];
            case 4687:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.USE_APPLICATION_COMMANDS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.SEND_VOICE_MESSAGES;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var7];
                var1 = var11.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.WlWSBT;
                var1 = var8.bind(var10)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 4830;
                    continue _fun51752
                }
            case 4798:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.BhEo9V;
                _fun51752_ip = 4860;
                continue _fun51752;
            case 4830:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.gavGfv;
            case 4860:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.SEND_VOICE_MESSAGES;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.SEND_POLLS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var1 = {};
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = var2[var7];
                var8 = var11.bind(var6)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var2 = var2[var7];
                var2 = var11.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.UMQ7Ww;
                var2 = var8.bind(var10)(var2);
                var1.title = var2;
                var2 = _closure1_slot3;
                var2 = var2.GUILD_CATEGORY;
                if (!(var5 !== var2)) {
                    _fun51752_ip = 5003;
                    continue _fun51752
                }
            case 4971:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var8.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.ckKKIO;
                _fun51752_ip = 5033;
                continue _fun51752;
            case 5003:
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var6)(var8);
                var8 = var8.t;
                var2 = var8["18Ya7L"];
            case 5033:
                var1.description = var2;
                var2 = _closure1_slot6;
                var8 = var2.SEND_POLLS;
                var1.flag = var8;
                var0[var3] = var1;
                var3 = var2.CONNECT;
                var1 = var3.toString;
                var8 = var1.bind(var3)();
                var3 = {};
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = var1[var7];
                var11 = var10.bind(var6)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var1[var7];
                var11 = var10.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.S0W8Z5;
                var11 = var12.bind(var13)(var11);
                var3.title = var11;
                var11 = _closure1_slot3;
                var11 = var11.GUILD_CATEGORY;
                if (var9) {
                    _fun51752_ip = 5349;
                    continue _fun51752
                }
            case 5146:
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5314;
                    continue _fun51752
                }
            case 5153:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5279;
                    continue _fun51752
                }
            case 5167:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5244;
                    continue _fun51752
                }
            case 5181:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5244;
                    continue _fun51752
                }
            case 5195:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5244;
                    continue _fun51752
                }
            case 5209:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var12.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.HvG8uR;
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5244:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var12 = var13.bind(var6)(var12);
                var12 = var12.t;
                var9 = var12["QU/Rw8"];
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5279:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var12 = var13.bind(var6)(var12);
                var12 = var12.t;
                var9 = var12["G9+Qie"];
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5314:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var7];
                var12 = var13.bind(var6)(var12);
                var12 = var12.t;
                var9 = var12.stA0Hl;
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5349:
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5508;
                    continue _fun51752
                }
            case 5356:
                var11 = _closure1_slot3;
                var11 = var11.GUILD_STAGE_VOICE;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5476;
                    continue _fun51752
                }
            case 5370:
                var11 = _closure1_slot3;
                var11 = var11.GUILD_TEXT;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5444;
                    continue _fun51752
                }
            case 5384:
                var11 = _closure1_slot3;
                var11 = var11.GUILD_FORUM;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5444;
                    continue _fun51752
                }
            case 5398:
                var11 = _closure1_slot3;
                var11 = var11.GUILD_MEDIA;
                if (!(var11 !== var5)) {
                    _fun51752_ip = 5444;
                    continue _fun51752
                }
            case 5412:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.j4AyO8;
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5444:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.LsS8xT;
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5476:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.SOFNhP;
                _fun51752_ip = 5538;
                continue _fun51752;
            case 5508:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.XcrieN;
            case 5538:
                var3.description = var9;
                var9 = var2.CONNECT;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.SPEAK;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["8w1tIR"];
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5792;
                    continue _fun51752
                }
            case 5640:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5760;
                    continue _fun51752
                }
            case 5654:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5728;
                    continue _fun51752
                }
            case 5668:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5728;
                    continue _fun51752
                }
            case 5682:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 5728;
                    continue _fun51752
                }
            case 5696:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["568E6d"];
                _fun51752_ip = 5822;
                continue _fun51752;
            case 5728:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11["+VXsJI"];
                _fun51752_ip = 5822;
                continue _fun51752;
            case 5760:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.a8n741;
                _fun51752_ip = 5822;
                continue _fun51752;
            case 5792:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.iXhS6R;
            case 5822:
                var3.description = var9;
                var9 = var2.SPEAK;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.STREAM;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.FlNoSV;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6076;
                    continue _fun51752
                }
            case 5924:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6044;
                    continue _fun51752
                }
            case 5938:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6044;
                    continue _fun51752
                }
            case 5952:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6044;
                    continue _fun51752
                }
            case 5966:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6012;
                    continue _fun51752
                }
            case 5980:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.RY8rIc;
                _fun51752_ip = 6106;
                continue _fun51752;
            case 6012:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.swJcN6;
                _fun51752_ip = 6106;
                continue _fun51752;
            case 6044:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.AuEQEC;
                _fun51752_ip = 6106;
                continue _fun51752;
            case 6076:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11["ryG0/J"];
            case 6106:
                var3.description = var9;
                var9 = var2.STREAM;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.USE_EMBEDDED_ACTIVITIES;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.rLSGeh;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6297;
                    continue _fun51752
                }
            case 6205:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6265;
                    continue _fun51752
                }
            case 6219:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6265;
                    continue _fun51752
                }
            case 6233:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.qinvMU;
                _fun51752_ip = 6327;
                continue _fun51752;
            case 6265:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.RyEwla;
                _fun51752_ip = 6327;
                continue _fun51752;
            case 6297:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.maNzCO;
            case 6327:
                var3.description = var9;
                var9 = var2.USE_EMBEDDED_ACTIVITIES;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.USE_EXTERNAL_APPS;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["3TzAk0"];
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6520;
                    continue _fun51752
                }
            case 6428:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6488;
                    continue _fun51752
                }
            case 6442:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6488;
                    continue _fun51752
                }
            case 6456:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.czqMLp;
                _fun51752_ip = 6550;
                continue _fun51752;
            case 6488:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.qPUPip;
                _fun51752_ip = 6550;
                continue _fun51752;
            case 6520:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.bgIY3H;
            case 6550:
                var3.description = var9;
                var9 = var2.USE_EXTERNAL_APPS;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.USE_SOUNDBOARD;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.Bco7NG;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6902;
                    continue _fun51752
                }
            case 6652:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6801;
                    continue _fun51752
                }
            case 6669:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6801;
                    continue _fun51752
                }
            case 6683:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 6801;
                    continue _fun51752
                }
            case 6697:
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = var16[var7];
                var9 = var11.bind(var6)(var9);
                var13 = var9.intl;
                var12 = var13.format;
                var9 = var16[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var11 = var9.GEi6Ym;
                var9 = {};
                var15 = _closure1_slot1;
                var14 = 3;
                var14 = var16[var14];
                var16 = var15.bind(var6)(var14);
                var15 = var16.getArticleURL;
                var14 = _closure1_slot5;
                var14 = var14.SOUNDBOARD;
                var14 = var15.bind(var16)(var14);
                var9.helpCenterArticle = var14;
                var9 = var12.bind(var13)(var11, var9);
                _fun51752_ip = 7001;
                continue _fun51752;
            case 6801:
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = var17[var7];
                var11 = var12.bind(var6)(var11);
                var14 = var11.intl;
                var13 = var14.format;
                var11 = var17[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11["6eYqU1"];
                var11 = {};
                var16 = _closure1_slot1;
                var15 = 3;
                var15 = var17[var15];
                var17 = var16.bind(var6)(var15);
                var16 = var17.getArticleURL;
                var15 = _closure1_slot5;
                var15 = var15.SOUNDBOARD;
                var15 = var16.bind(var17)(var15);
                var11.helpCenterArticle = var15;
                var9 = var13.bind(var14)(var12, var11);
                _fun51752_ip = 7001;
                continue _fun51752;
            case 6902:
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = var17[var7];
                var11 = var12.bind(var6)(var11);
                var14 = var11.intl;
                var13 = var14.format;
                var11 = var17[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11["0kBp/0"];
                var11 = {};
                var16 = _closure1_slot1;
                var15 = 3;
                var15 = var17[var15];
                var17 = var16.bind(var6)(var15);
                var16 = var17.getArticleURL;
                var15 = _closure1_slot5;
                var15 = var15.SOUNDBOARD;
                var15 = var16.bind(var17)(var15);
                var11.helpCenterArticle = var15;
                var9 = var13.bind(var14)(var12, var11);
            case 7001:
                var3.description = var9;
                var9 = var2.USE_SOUNDBOARD;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.USE_EXTERNAL_SOUNDS;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.pwaVJ6;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.qDpPtX;
                var3.description = var9;
                var9 = var2.USE_EXTERNAL_SOUNDS;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.USE_VAD;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["08zAV7"];
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7360;
                    continue _fun51752
                }
            case 7208:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7328;
                    continue _fun51752
                }
            case 7222:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7296;
                    continue _fun51752
                }
            case 7236:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7296;
                    continue _fun51752
                }
            case 7250:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7296;
                    continue _fun51752
                }
            case 7264:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.s2eihY;
                _fun51752_ip = 7390;
                continue _fun51752;
            case 7296:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11["3GJwsc"];
                _fun51752_ip = 7390;
                continue _fun51752;
            case 7328:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.BJKqsW;
                _fun51752_ip = 7390;
                continue _fun51752;
            case 7360:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.fUYPly;
            case 7390:
                var3.description = var9;
                var9 = var2.USE_VAD;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.PRIORITY_SPEAKER;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.BVK71i;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7759;
                    continue _fun51752
                }
            case 7492:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7651;
                    continue _fun51752
                }
            case 7509:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7651;
                    continue _fun51752
                }
            case 7526:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 7651;
                    continue _fun51752
                }
            case 7540:
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = var14[var7];
                var9 = var17.bind(var6)(var9);
                var13 = var9.intl;
                var12 = var13.format;
                var9 = var14[var7];
                var9 = var17.bind(var6)(var9);
                var9 = var9.t;
                var11 = var9.Ij0yKX;
                var9 = {};
                var15 = var14[var7];
                var15 = var17.bind(var6)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var7];
                var14 = var17.bind(var6)(var14);
                var14 = var14.t;
                var14 = var14.DkSwJ2;
                var14 = var15.bind(var16)(var14);
                var9.keybind = var14;
                var9 = var12.bind(var13)(var11, var9);
                _fun51752_ip = 7865;
                continue _fun51752;
            case 7651:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = var15[var7];
                var11 = var18.bind(var6)(var11);
                var14 = var11.intl;
                var13 = var14.format;
                var11 = var15[var7];
                var11 = var18.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11["4nbjL0"];
                var11 = {};
                var16 = var15[var7];
                var16 = var18.bind(var6)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var7];
                var15 = var18.bind(var6)(var15);
                var15 = var15.t;
                var15 = var15.DkSwJ2;
                var15 = var16.bind(var17)(var15);
                var11.keybind = var15;
                var9 = var13.bind(var14)(var12, var11);
                _fun51752_ip = 7865;
                continue _fun51752;
            case 7759:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = var15[var7];
                var11 = var18.bind(var6)(var11);
                var14 = var11.intl;
                var13 = var14.format;
                var11 = var15[var7];
                var11 = var18.bind(var6)(var11);
                var11 = var11.t;
                var12 = var11.g5MzON;
                var11 = {};
                var16 = var15[var7];
                var16 = var18.bind(var6)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var7];
                var15 = var18.bind(var6)(var15);
                var15 = var15.t;
                var15 = var15.DkSwJ2;
                var15 = var16.bind(var17)(var15);
                var11.keybind = var15;
                var9 = var13.bind(var14)(var12, var11);
            case 7865:
                var3.description = var9;
                var9 = var2.PRIORITY_SPEAKER;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.MUTE_MEMBERS;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["8EI30/"];
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8119;
                    continue _fun51752
                }
            case 7967:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8087;
                    continue _fun51752
                }
            case 7981:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8055;
                    continue _fun51752
                }
            case 7995:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8055;
                    continue _fun51752
                }
            case 8009:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8055;
                    continue _fun51752
                }
            case 8023:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.LW5C9P;
                _fun51752_ip = 8149;
                continue _fun51752;
            case 8055:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.KYDG2K;
                _fun51752_ip = 8149;
                continue _fun51752;
            case 8087:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.EbvdH9;
                _fun51752_ip = 8149;
                continue _fun51752;
            case 8119:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.bcuobK;
            case 8149:
                var3.description = var9;
                var9 = var2.MUTE_MEMBERS;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.DEAFEN_MEMBERS;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["9L47Fr"];
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8354;
                    continue _fun51752
                }
            case 8248:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8322;
                    continue _fun51752
                }
            case 8262:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8322;
                    continue _fun51752
                }
            case 8276:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8322;
                    continue _fun51752
                }
            case 8290:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.UAdIxo;
                _fun51752_ip = 8384;
                continue _fun51752;
            case 8322:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11["d+i1nX"];
                _fun51752_ip = 8384;
                continue _fun51752;
            case 8354:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.amZ5vn;
            case 8384:
                var3.description = var9;
                var9 = var2.DEAFEN_MEMBERS;
                var3.flag = var9;
                var0[var8] = var3;
                var8 = var2.MOVE_MEMBERS;
                var3 = var8.toString;
                var8 = var3.bind(var8)();
                var3 = {};
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var12 = var9.intl;
                var11 = var12.string;
                var9 = var1[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.YtjJPQ;
                var9 = var11.bind(var12)(var9);
                var3.title = var9;
                var9 = _closure1_slot3;
                var9 = var9.GUILD_CATEGORY;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8638;
                    continue _fun51752
                }
            case 8486:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_STAGE_VOICE;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8606;
                    continue _fun51752
                }
            case 8500:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_TEXT;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8574;
                    continue _fun51752
                }
            case 8514:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_FORUM;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8574;
                    continue _fun51752
                }
            case 8528:
                var9 = _closure1_slot3;
                var9 = var9.GUILD_MEDIA;
                if (!(var9 !== var5)) {
                    _fun51752_ip = 8574;
                    continue _fun51752
                }
            case 8542:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.nSD1ah;
                _fun51752_ip = 8668;
                continue _fun51752;
            case 8574:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.cbdQy2;
                _fun51752_ip = 8668;
                continue _fun51752;
            case 8606:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.bizKz6;
                _fun51752_ip = 8668;
                continue _fun51752;
            case 8638:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var11 = var11.t;
                var9 = var11.XmoyRD;
            case 8668:
                var3.description = var9;
                var9 = var2.MOVE_MEMBERS;
                var3.flag = var9;
                var0[var8] = var3;
                var3 = var2.REQUEST_TO_SPEAK;
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var2 = {};
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["5kicT2"];
                var1 = var8.bind(var9)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 8799;
                    continue _fun51752
                }
            case 8767:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.uzlYFE;
                _fun51752_ip = 8829;
                continue _fun51752;
            case 8799:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.T1lMSl;
            case 8829:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.REQUEST_TO_SPEAK;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.MANAGE_THREADS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var1 = _closure1_slot4;
                var8 = var1.GUILD_THREADS_ONLY;
                var1 = var8.has;
                var1 = var1.bind(var8)(var5);
                if (var1) {
                    _fun51752_ip = 9018;
                    continue _fun51752
                }
            case 8896:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 8964;
                    continue _fun51752
                }
            case 8910:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.kEqgr7;
                var1 = var8.bind(var9)(var1);
                _fun51752_ip = 9016;
                continue _fun51752;
            case 8964:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.QKe7Q3;
                var1 = var9.bind(var10)(var8);
            case 9016:
                _fun51752_ip = 9072;
                continue _fun51752;
            case 9018:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.ossiZD;
                var1 = var9.bind(var10)(var8);
            case 9072:
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9182;
                    continue _fun51752
                }
            case 9090:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9150;
                    continue _fun51752
                }
            case 9104:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9150;
                    continue _fun51752
                }
            case 9118:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.yvan0j;
                _fun51752_ip = 9212;
                continue _fun51752;
            case 9150:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["XLi/jG"];
                _fun51752_ip = 9212;
                continue _fun51752;
            case 9182:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.S31soU;
            case 9212:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.MANAGE_THREADS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.CREATE_PUBLIC_THREADS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["25rKnX"];
                var1 = var8.bind(var9)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 9355;
                    continue _fun51752
                }
            case 9323:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["5SDtGB"];
                _fun51752_ip = 9385;
                continue _fun51752;
            case 9355:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["+M1yLj"];
            case 9385:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.CREATE_PUBLIC_THREADS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.CREATE_PRIVATE_THREADS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.QwbTSa;
                var1 = var8.bind(var9)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 9528;
                    continue _fun51752
                }
            case 9496:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.Chg2zd;
                _fun51752_ip = 9558;
                continue _fun51752;
            case 9528:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8["hBS/zn"];
            case 9558:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.CREATE_PRIVATE_THREADS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.SEND_MESSAGES_IN_THREADS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var1 = _closure1_slot4;
                var8 = var1.GUILD_THREADS_ONLY;
                var1 = var8.has;
                var1 = var1.bind(var8)(var5);
                if (var1) {
                    _fun51752_ip = 9747;
                    continue _fun51752
                }
            case 9625:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 9693;
                    continue _fun51752
                }
            case 9639:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.fTE74g;
                var1 = var8.bind(var9)(var1);
                _fun51752_ip = 9745;
                continue _fun51752;
            case 9693:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["5QlVGy"];
                var1 = var9.bind(var10)(var8);
            case 9745:
                _fun51752_ip = 9801;
                continue _fun51752;
            case 9747:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var7];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.fqhqWm;
                var1 = var9.bind(var10)(var8);
            case 9801:
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9911;
                    continue _fun51752
                }
            case 9819:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9879;
                    continue _fun51752
                }
            case 9833:
                var1 = _closure1_slot3;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var5)) {
                    _fun51752_ip = 9879;
                    continue _fun51752
                }
            case 9847:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.xHO6Me;
                _fun51752_ip = 9941;
                continue _fun51752;
            case 9879:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.XTnrPH;
                _fun51752_ip = 9941;
                continue _fun51752;
            case 9911:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.DlIVcN;
            case 9941:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.SEND_MESSAGES_IN_THREADS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.MANAGE_EVENTS;
                var1 = var2.toString;
                var3 = var1.bind(var2)();
                var2 = {};
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = var1[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var1 = var1[var7];
                var1 = var10.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.HIgA5a;
                var1 = var8.bind(var9)(var1);
                var2.title = var1;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_CATEGORY;
                if (!(var5 !== var1)) {
                    _fun51752_ip = 10084;
                    continue _fun51752
                }
            case 10052:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["4pO/TY"];
                _fun51752_ip = 10114;
                continue _fun51752;
            case 10084:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.t;
                var1 = var8.CP2sz4;
            case 10114:
                var2.description = var1;
                var1 = _closure1_slot6;
                var8 = var1.MANAGE_EVENTS;
                var2.flag = var8;
                var0[var3] = var2;
                var2 = var1.CREATE_EVENTS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = var3[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var3 = var3[var7];
                var3 = var10.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.qyjZua;
                var3 = var8.bind(var9)(var3);
                var1.title = var3;
                var3 = _closure1_slot3;
                var3 = var3.GUILD_CATEGORY;
                if (!(var5 !== var3)) {
                    _fun51752_ip = 10257;
                    continue _fun51752
                }
            case 10225:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.sPoBLa;
                _fun51752_ip = 10287;
                continue _fun51752;
            case 10257:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var3 = var5.XpibmC;
            case 10287:
                var1.description = var3;
                var3 = _closure1_slot6;
                var5 = var3.CREATE_EVENTS;
                var1.flag = var5;
                var0[var2] = var1;
                var2 = var3.SET_VOICE_CHANNEL_STATUS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.VBwkUf;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.C6BzXx;
                var1.description = var4;
                var3 = var3.SET_VOICE_CHANNEL_STATUS;
                var1.flag = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.getChannelPermissionSpecMap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1234, 5878, 1675, 5879, 5880, 2]);