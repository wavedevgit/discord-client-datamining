// modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.CodedLinkExtendedType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot7 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: createGuildProfileInvite, environment: var1
        _fun92338: for (var _fun92338_ip = 0;;) switch (_fun92338_ip) {
            case 0:
                var9 = arg0;
                var21 = arg1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var7 = 5;
                var2 = var4[var7];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var2 = var2.bind(var6)(var21);
                var5 = var2.colors;
                var16 = var2.baseColors;
                var3 = _closure1_slot0;
                var2 = 6;
                var2 = var4[var2];
                var8 = var3.bind(var6)(var2);
                var2 = var8.buildGuildProfileFromInvite;
                var10 = var2.bind(var8)(var9);
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.isThemeDark;
                var3 = var2.bind(var3)(var21);
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var2 = var4.bind(var6)(var2);
                var2 = var2.unsafe_rawColors;
                if (var3) {
                    _fun92338_ip = 135;
                    continue _fun92338
                }
            case 127:
                var11 = var2.PRIMARY_160;
                _fun92338_ip = 141;
                continue _fun92338;
            case 135:
                var11 = var2.PRIMARY_660;
            case 141:
                var2 = null;
                var3 = var2 != var10;
                var8 = null;
                if (!var3) {
                    _fun92338_ip = 183;
                    continue _fun92338
                }
            case 152:
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 9;
                var3 = var12[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.fromGuildProfile;
                var8 = var3.bind(var4)(var10);
            case 183:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 10;
                var3 = var13[var3];
                var12 = var4.bind(var6)(var3);
                var3 = var12.getProfilePrimaryColor;
                var12 = var3.bind(var12)(var10);
                var3 = 11;
                var3 = var13[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getBackgroundForProfile;
                if (!(var2 != var12)) {
                    _fun92338_ip = 239;
                    continue _fun92338
                }
            case 236:
                var11 = var12;
            case 239:
                var11 = var3.bind(var4)(var21, var11);
                var4 = _closure1_slot3;
                var3 = 2;
                var11 = var4.bind(var6)(var11, var3);
                var4 = 0;
                var17 = var11[var4];
                var3 = 1;
                var13 = var11[var3];
                var3 = var2 == var10;
                var24 = undefined;
                if (var3) {
                    _fun92338_ip = 286;
                    continue _fun92338
                }
            case 280:
                var24 = var10.memberCount;
            case 286:
                if (!(var2 == var24)) {
                    _fun92338_ip = 296;
                    continue _fun92338
                }
            case 290:
                var24 = var9.approximate_member_count;
            case 296:
                var3 = var2 == var10;
                var23 = undefined;
                if (var3) {
                    _fun92338_ip = 311;
                    continue _fun92338
                }
            case 305:
                var23 = var10.onlineCount;
            case 311:
                if (!(var2 == var23)) {
                    _fun92338_ip = 321;
                    continue _fun92338
                }
            case 315:
                var23 = var9.approximate_presence_count;
            case 321:
                var11 = var2 == var10;
                var3 = undefined;
                if (var11) {
                    _fun92338_ip = 335;
                    continue _fun92338
                }
            case 330:
                var3 = var10.icon;
            case 335:
                if (!(var2 == var3)) {
                    _fun92338_ip = 402;
                    continue _fun92338
                }
            case 339:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 13;
                var3 = var12[var3];
                var12 = var11.bind(var6)(var3);
                var11 = var12.getAcronym;
                var3 = var2 == var10;
                var14 = undefined;
                if (var3) {
                    _fun92338_ip = 379;
                    continue _fun92338
                }
            case 374:
                var14 = var10.name;
            case 379:
                var15 = var2 != var14;
                var3 = '';
                if (!var15) {
                    _fun92338_ip = 393;
                    continue _fun92338
                }
            case 390:
                var3 = var14;
            case 393:
                var15 = var11.bind(var12)(var3);
                var14 = undefined;
                _fun92338_ip = 469;
                continue _fun92338;
            case 402:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 12;
                var3 = var12[var3];
                var12 = var11.bind(var6)(var3);
                var11 = var12.getGuildIconURL;
                var3 = {};
                var18 = var10.id;
                var3.id = var18;
                var18 = var10.icon;
                var3.icon = var18;
                var18 = true;
                var3.canAnimate = var18;
                var18 = 128;
                var3.size = var18;
                var14 = var11.bind(var12)(var3);
                var15 = undefined;
            case 469:
                var11 = var2 == var8;
                var3 = undefined;
                if (var11) {
                    _fun92338_ip = 504;
                    continue _fun92338
                }
            case 478:
                var18 = var8.features;
                var12 = var18.has;
                var11 = _closure1_slot6;
                var11 = var11.DISCOVERABLE;
                var3 = var12.bind(var18)(var11);
            case 504:
                var12 = undefined;
                if (!var3) {
                    _fun92338_ip = 628;
                    continue _fun92338
                }
            case 509:
                var11 = var2 == var10;
                var3 = undefined;
                if (var11) {
                    _fun92338_ip = 524;
                    continue _fun92338
                }
            case 518:
                var3 = var10.customBanner;
            case 524:
                var3 = var2 != var3;
                var12 = undefined;
                if (!var3) {
                    _fun92338_ip = 628;
                    continue _fun92338
                }
            case 533:
                var20 = _closure1_slot1;
                var22 = _closure1_slot2;
                var3 = 12;
                var3 = var22[var3];
                var18 = var20.bind(var6)(var3);
                var11 = var18.getGuildDiscoverySplashURL;
                var3 = {};
                var19 = var10.id;
                var3.id = var19;
                var19 = var10.customBanner;
                var3.splash = var19;
                var19 = 14;
                var19 = var22[var19];
                var19 = var20.bind(var6)(var19);
                var20 = var19.bind(var6)();
                var19 = 400;
                var19 = var19 * var20;
                var3.size = var19;
                var3 = var11.bind(var18)(var3);
                var11 = var2 != var3;
                var12 = undefined;
                if (!var11) {
                    _fun92338_ip = 628;
                    continue _fun92338
                }
            case 625:
                var12 = var3;
            case 628:
                var3 = var2 != var24;
                if (!var3) {
                    _fun92338_ip = 639;
                    continue _fun92338
                }
            case 635:
                var3 = var24 >= var7;
            case 639:
                if (var3) {
                    _fun92338_ip = 656;
                    continue _fun92338
                }
            case 642:
                var7 = var2 != var23;
                if (!var7) {
                    _fun92338_ip = 653;
                    continue _fun92338
                }
            case 649:
                var7 = var23 > var4;
            case 653:
                var3 = var7;
            case 656:
                var19 = undefined;
                var18 = undefined;
                if (!var3) {
                    _fun92338_ip = 816;
                    continue _fun92338
                }
            case 666:
                var3 = var2 != var23;
                var7 = undefined;
                if (!var3) {
                    _fun92338_ip = 738;
                    continue _fun92338
                }
            case 675:
                var11 = _closure1_slot0;
                var25 = _closure1_slot2;
                var3 = 15;
                var20 = var25[var3];
                var20 = var11.bind(var6)(var20);
                var22 = var20.intl;
                var20 = var22.formatToPlainString;
                var3 = var25[var3];
                var3 = var11.bind(var6)(var3);
                var3 = var3.t;
                var11 = var3["LC+S+m"];
                var3 = {};
                var3.membersOnline = var23;
                var7 = var20.bind(var22)(var11, var3);
            case 738:
                var11 = var2 != var24;
                var3 = undefined;
                if (!var11) {
                    _fun92338_ip = 810;
                    continue _fun92338
                }
            case 747:
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var11 = 15;
                var22 = var25[var11];
                var22 = var20.bind(var6)(var22);
                var23 = var22.intl;
                var22 = var23.formatToPlainString;
                var11 = var25[var11];
                var11 = var20.bind(var6)(var11);
                var11 = var11.t;
                var20 = var11.zRl6XR;
                var11 = {};
                var11.count = var24;
                var3 = var22.bind(var23)(var20, var11);
            case 810:
                var18 = var3;
                var19 = var7;
            case 816:
                var3 = var2 != var10;
                var7 = null;
                if (!var3) {
                    _fun92338_ip = 862;
                    continue _fun92338
                }
            case 825:
                var11 = _closure1_slot0;
                var20 = _closure1_slot2;
                var3 = 16;
                var3 = var20[var3];
                var20 = var11.bind(var6)(var3);
                var11 = var20.getGuildProfileCTAType;
                var3 = var9.code;
                var7 = var11.bind(var20)(var10, var3);
            case 862:
                var20 = _closure1_slot0;
                var3 = _closure1_slot2;
                var11 = 16;
                var3 = var3[var11];
                var3 = var20.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.IS_MEMBER;
                if (!(var3 !== var7)) {
                    _fun92338_ip = 1305;
                    continue _fun92338
                }
            case 901:
                var20 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var20.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.HAS_APPLICATION;
                if (!(var3 !== var7)) {
                    _fun92338_ip = 1248;
                    continue _fun92338
                }
            case 937:
                var20 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var20.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.APPLY_TO_JOIN;
                if (!(var3 !== var7)) {
                    _fun92338_ip = 1191;
                    continue _fun92338
                }
            case 973:
                var20 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var20.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.ACCEPT_ROLES;
                if (!(var3 !== var7)) {
                    _fun92338_ip = 1131;
                    continue _fun92338
                }
            case 1009:
                var20 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var20.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.LURK_DISCOVERABLE;
                if (!(var3 !== var7)) {
                    _fun92338_ip = 1071;
                    continue _fun92338
                }
            case 1042:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var7.bind(var6)(var3);
                var3 = var3.CTATypes;
                var3 = var3.JOIN_VIA_INVITE;
            case 1071:
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var3 = 15;
                var7 = var22[var3];
                var7 = var20.bind(var6)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var3 = var22[var3];
                var3 = var20.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.XpeFYr;
                var20 = var7.bind(var11)(var3);
                _fun92338_ip = 1360;
                continue _fun92338;
            case 1131:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 15;
                var7 = var23[var3];
                var7 = var22.bind(var6)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var3 = var23[var3];
                var3 = var22.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.MMlhsr;
                var20 = var7.bind(var11)(var3);
                _fun92338_ip = 1360;
                continue _fun92338;
            case 1191:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 15;
                var7 = var23[var3];
                var7 = var22.bind(var6)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var3 = var23[var3];
                var3 = var22.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["7XdMW2"];
                var20 = var7.bind(var11)(var3);
                _fun92338_ip = 1360;
                continue _fun92338;
            case 1248:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 15;
                var7 = var23[var3];
                var7 = var22.bind(var6)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var3 = var23[var3];
                var3 = var22.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["4yfIDk"];
                var20 = var7.bind(var11)(var3);
                _fun92338_ip = 1360;
                continue _fun92338;
            case 1305:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var3 = 15;
                var7 = var23[var3];
                var7 = var22.bind(var6)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var3 = var23[var3];
                var3 = var22.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.IRoQXr;
                var20 = var7.bind(var11)(var3);
            case 1360:
                var3 = var2 != var8;
                var11 = undefined;
                if (!var3) {
                    _fun92338_ip = 1401;
                    continue _fun92338
                }
            case 1369:
                var7 = _closure1_slot0;
                var22 = _closure1_slot2;
                var3 = 17;
                var3 = var22[var3];
                var7 = var7.bind(var6)(var3);
                var3 = var7.getGuildBadgeImageSource;
                var11 = var3.bind(var7)(var8, var21);
            case 1401:
                var3 = var2 == var10;
                var8 = undefined;
                if (var3) {
                    _fun92338_ip = 1442;
                    continue _fun92338
                }
            case 1410:
                var21 = var10.traits;
                var3 = var2 == var21;
                var8 = undefined;
                if (var3) {
                    _fun92338_ip = 1442;
                    continue _fun92338
                }
            case 1425:
                var7 = var21.filter;
                var3 = function(arg0) { // Environment: var0
                    _fun92339: for (var _fun92339_ip = 0;;) switch (_fun92339_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun92339_ip = 38;
                                continue _fun92339
                            }
                        case 12:
                            var2 = var1.label;
                            var1 = var2.trim;
                            var1 = var1.bind(var2)();
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 38:
                            return var0;
                    }
                };
                var8 = var7.bind(var21)(var3);
            case 1442:
                var3 = var2 != var10;
                var7 = undefined;
                if (!var3) {
                    _fun92338_ip = 1583;
                    continue _fun92338
                }
            case 1454:
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var3 = 18;
                var3 = var25[var3];
                var24 = var21.bind(var6)(var3);
                var23 = var24.getEstablishedDate;
                var22 = _closure1_slot1;
                var3 = 19;
                var3 = var25[var3];
                var26 = var22.bind(var6)(var3);
                var22 = var26.extractTimestamp;
                var3 = var10.id;
                var22 = var22.bind(var26)(var3);
                var3 = _closure1_slot4;
                var3 = var3.locale;
                var24 = var23.bind(var24)(var22, var3);
                var3 = 15;
                var22 = var25[var3];
                var22 = var21.bind(var6)(var22);
                var23 = var22.intl;
                var22 = var23.formatToPlainString;
                var3 = var25[var3];
                var3 = var21.bind(var6)(var3);
                var3 = var3.t;
                var21 = var3.zb2Q56;
                var3 = {};
                var3.createdAtDate = var24;
                var7 = var22.bind(var23)(var21, var3);
            case 1583:
                var3 = var9.roles;
                var21 = var2 != var3;
                var3 = undefined;
                if (!var21) {
                    _fun92338_ip = 1719;
                    continue _fun92338
                }
            case 1598:
                var21 = var9.roles;
                var21 = var21.length;
                var21 = var21 > var4;
                var3 = undefined;
                if (!var21) {
                    _fun92338_ip = 1719;
                    continue _fun92338
                }
            case 1618:
                var21 = var9.guild;
                var21 = var2 != var21;
                var3 = undefined;
                if (!var21) {
                    _fun92338_ip = 1719;
                    continue _fun92338
                }
            case 1632:
                var21 = var9.guild;
                var21 = var21.id;
                var _closure2_slot0 = var21;
                var28 = var9.roles;
                var23 = new Array(0);
                var29 = var23;
                var27 = 0;
                var21 = arraySpread(var29, var28, var27);
                var22 = var23.sort;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 20;
                var21 = var25[var21];
                var21 = var24.bind(var6)(var21);
                var21 = var21.sortInviteRoles;
                var22 = var22.bind(var23)(var21);
                var21 = var22.map;
                var0 = function(arg0) { // Environment: var0
                    _fun92340: for (var _fun92340_ip = 0;;) switch (_fun92340_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 20;
                            var0 = var6[var0];
                            var5 = undefined;
                            var7 = var1.bind(var5)(var0);
                            var4 = var7.inviteRoleToDisplayData;
                            var0 = _closure2_slot0;
                            var4 = var4.bind(var7)(var0, var3);
                            var0 = 21;
                            var0 = var6[var0];
                            var1 = var1.bind(var5)(var0);
                            var0 = var1.getRoleIconData;
                            var6 = 16;
                            var0 = var0.bind(var1)(var4, var6);
                            var7 = null;
                            if (!(var7 == var0)) {
                                _fun92340_ip = 82;
                                continue _fun92340
                            }
                        case 80:
                            var0 = {};
                        case 82:
                            var9 = var0.customIconSrc;
                            var8 = var0.unicodeEmoji;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 22;
                            var0 = var4[var0];
                            var4 = var1.bind(var5)(var0);
                            var1 = var4.int2hex;
                            var10 = var3.color;
                            var11 = var7 != var10;
                            var0 = 0;
                            if (!var11) {
                                _fun92340_ip = 137;
                                continue _fun92340
                            }
                        case 134:
                            var0 = var10;
                        case 137:
                            var4 = var1.bind(var4)(var0);
                            if (!(var7 == var9)) {
                                _fun92340_ip = 155;
                                continue _fun92340
                            }
                        case 146:
                            var0 = var7 != var8;
                            var1 = undefined;
                            if (!var0) {
                                _fun92340_ip = 268;
                                continue _fun92340
                            }
                        case 155:
                            var0 = {};
                            var0.source = var9;
                            var9 = var7 == var8;
                            var7 = undefined;
                            if (var9) {
                                _fun92340_ip = 175;
                                continue _fun92340
                            }
                        case 170:
                            var7 = var8.surrogates;
                        case 175:
                            var0.unicodeEmoji = var7;
                            var7 = var3.name;
                            var0.name = var7;
                            var0.size = var6;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 15;
                            var8 = var10[var6];
                            var8 = var7.bind(var5)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var6 = var10[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.t;
                            var7 = var6["9+YWrE"];
                            var6 = {};
                            var10 = var3.name;
                            var6.name = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var0.alt = var6;
                            var1 = var0;
                        case 268:
                            var0 = {};
                            var6 = var3.id;
                            var0.id = var6;
                            var3 = var3.name;
                            var0.name = var3;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 23;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.processColorOrThrow;
                            var2 = var2.bind(var3)(var4);
                            var0.color = var2;
                            var0.roleIcon = var1;
                            return var0;
                    }
                };
                var3 = var21.bind(var22)(var0);
            case 1719:
                var0 = {};
                var29 = var0;
                var28 = var16;
                var16 = copyDataProperties(var29, var28);
                var16 = _closure1_slot5;
                var21 = var16.GUILD_PROFILE_INVITE;
                var16 = 'extendedType';
                var0[var16] = var21;
                var16 = 'acceptLabelText';
                var0[var16] = var20;
                var16 = 'onlineText';
                var0[var16] = var19;
                var16 = 'memberText';
                var0[var16] = var18;
                var16 = var2 == var10;
                var18 = undefined;
                if (var16) {
                    _fun92338_ip = 1795;
                    continue _fun92338
                }
            case 1790:
                var18 = var10.name;
            case 1795:
                var16 = 'titleText';
                var0[var16] = var18;
                var18 = var2 != var14;
                var16 = undefined;
                if (!var18) {
                    _fun92338_ip = 1816;
                    continue _fun92338
                }
            case 1813:
                var16 = var14;
            case 1816:
                var14 = 'thumbnailUrl';
                var0[var14] = var16;
                var14 = 'thumbnailText';
                var0[var14] = var15;
                var15 = var2 == var10;
                var14 = undefined;
                if (var15) {
                    _fun92338_ip = 1850;
                    continue _fun92338
                }
            case 1845:
                var14 = var10.description;
            case 1850:
                var16 = var2 != var14;
                var15 = '';
                if (!var16) {
                    _fun92338_ip = 1864;
                    continue _fun92338
                }
            case 1861:
                var15 = var14;
            case 1864:
                var14 = 'bodyText';
                var0[var14] = var15;
                var15 = true;
                var14 = 'embedCanBeTapped';
                var0[var14] = var15;
                var14 = 'canBeAccepted';
                var0[var14] = var15;
                var14 = var9.type;
                if (!(var2 == var14)) {
                    _fun92338_ip = 1916;
                    continue _fun92338
                }
            case 1906:
                var9 = _closure1_slot7;
                var14 = var9.GUILD;
            case 1916:
                var9 = 'type';
                var0[var9] = var14;
                var9 = 'inviteSplash';
                var0[var9] = var12;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 23;
                var15 = var14[var9];
                var16 = var12.bind(var6)(var15);
                var15 = var16.processColorOrThrow;
                var16 = var15.bind(var16)(var17);
                var15 = 'bannerColor';
                var0[var15] = var16;
                var9 = var14[var9];
                var12 = var12.bind(var6)(var9);
                var9 = var12.processColorOrThrow;
                var12 = var9.bind(var12)(var13);
                var9 = 'bannerColorSecondary';
                var0[var9] = var12;
                if (!(var2 == var8)) {
                    _fun92338_ip = 2015;
                    continue _fun92338
                }
            case 2011:
                var8 = new Array(0);
            case 2015:
                var8 = var8.length;
                var9 = var8 > var4;
                if (var9) {
                    _fun92338_ip = 2059;
                    continue _fun92338
                }
            case 2027:
                var12 = var2 == var10;
                var8 = undefined;
                if (var12) {
                    _fun92338_ip = 2042;
                    continue _fun92338
                }
            case 2036:
                var8 = var10.gameApplicationIds;
            case 2042:
                if (!(var2 == var8)) {
                    _fun92338_ip = 2050;
                    continue _fun92338
                }
            case 2046:
                var8 = new Array(0);
            case 2050:
                var8 = var8.length;
                var9 = var8 > var4;
            case 2059:
                var8 = 'hasProfileOverflow';
                var0[var8] = var9;
                var8 = var2 != var11;
                var9 = undefined;
                if (!var8) {
                    _fun92338_ip = 2110;
                    continue _fun92338
                }
            case 2079:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 24;
                var8 = var12[var8];
                var10 = var10.bind(var6)(var8);
                var8 = var10.getAssetUriForEmbed;
                var9 = var8.bind(var10)(var11);
            case 2110:
                var8 = 'badgeIconUrl';
                var0[var8] = var9;
                var8 = var5.acceptLabelGreenBackgroundColor;
                var5 = 'acceptLabelBackgroundColor';
                var0[var5] = var8;
                var5 = 'establishedText';
                var0[var5] = var7;
                var5 = 'headerText';
                var0[var5] = var2;
                var5 = 'roles';
                var0[var5] = var3;
                var5 = var2 != var3;
                var2 = undefined;
                if (!var5) {
                    _fun92338_ip = 2243;
                    continue _fun92338
                }
            case 2174:
                var3 = var3.length;
                var3 = var3 > var4;
                var2 = undefined;
                if (!var3) {
                    _fun92338_ip = 2243;
                    continue _fun92338
                }
            case 2188:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.stcSfI;
                var2 = var3.bind(var4)(var1);
            case 2243:
                var1 = 'rolesHeadingText';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createGuildProfileInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1676, 11501, 660, 3294, 9979, 7341, 3165, 671, 1598, 7350, 7348, 1417, 1608, 1586, 1234, 7377, 7358, 3295, 21, 1667, 6697, 668, 6482, 6607, 2]);