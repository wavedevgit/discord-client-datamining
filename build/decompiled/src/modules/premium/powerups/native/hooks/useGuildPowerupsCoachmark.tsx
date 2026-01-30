// modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun103199: for (var _fun103199_ip = 0;;) switch (_fun103199_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var2 = 120;
                var1.height = var2;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 8;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.spacing;
                var8 = var7.PX_16;
                var7 = 2;
                var8 = var7 * var8;
                var7 = 260;
                var7 = var7 - var8;
                var1.width = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.md;
                var1.borderRadius = var3;
                var0.coachmarkImage = var1;
                var1 = {};
                var3 = 'cover';
                var1.resizeMode = var3;
                var0.coachmarkCover = var1;
                var1 = {
                    'width': 50,
                    'height': 50
                };
                var2 = _closure1_slot8;
                var4 = var2.LIGHT;
                var2 = '#0000003D';
                var3 = arg0;
                if (!(var3 === var4)) {
                    _fun103199_ip = 154;
                    continue _fun103199
                }
            case 148:
                var2 = '#0000001A';
            case 154:
                var1.backgroundColor = var2;
                var0.boostGemBackground = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useGuildPowerupsCoachmark, environment: var1
        var12 = arg1;
        var9 = arg2;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var9;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var5 = 9;
        var6 = var3[var5];
        var0 = undefined;
        var11 = var2.bind(var0)(var6);
        var10 = var11.useStateFromStores;
        var6 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var6;
        var7 = new Array(1);
        var7[0] = var12;
        var6 = function() { // Environment: var1
            _fun103201: for (var _fun103201_ip = 0;;) switch (_fun103201_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun103201_ip = 40;
                        continue _fun103201
                    }
                case 35:
                    var0 = var1.name;
                case 40:
                    return var0;
            }
        };
        var11 = var10.bind(var11)(var8, var6, var7);
        var _closure2_slot2 = var11;
        var6 = 10;
        var6 = var3[var6];
        var8 = var2.bind(var0)(var6);
        var7 = var8.useGuildPowerupsMobileNotificationsEnabled;
        var6 = 'useGuildPowerupsCoachmark';
        var10 = var7.bind(var8)(var6);
        var _closure2_slot3 = var10;
        var7 = _closure1_slot1;
        var6 = 11;
        var6 = var3[var6];
        var6 = var7.bind(var0)(var6);
        var7 = var6.bind(var0)();
        var6 = _closure1_slot10;
        var8 = var6.bind(var0)(var7);
        var _closure2_slot4 = var8;
        var5 = var3[var5];
        var13 = var2.bind(var0)(var5);
        var7 = var13.useStateFromStores;
        var5 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var1
            var0 = _closure1_slot4;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var7 = var7.bind(var13)(var6, var5);
        var _closure2_slot5 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var4 = new Array(6);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4[5] = var7;
        var1 = function() { // Environment: var1
            _fun103203: for (var _fun103203_ip = 0;;) switch (_fun103203_ip) {
                case 0:
                    var0 = {
                        'title': '',
                        'description': '',
                        'position': 'bottom',
                        'visible': false
                    };
                    var14 = '';
                    var1 = function() { // Original name: onDismiss, environment: var2
                        var0 = undefined;
                        return var0;
                    };
                    var0.onDismiss = var1;
                    var3 = _closure2_slot3;
                    if (!var3) {
                        _fun103203_ip = 2007;
                        continue _fun103203
                    }
                case 45:
                    var3 = _closure2_slot1;
                    var16 = null;
                    if (!(var16 != var3)) {
                        _fun103203_ip = 2007;
                        continue _fun103203
                    }
                case 58:
                    var4 = function() { // Original name: handleButtonPress, environment: var2
                        var4 = _closure2_slot1;
                        var2 = var4.markAsDismissed;
                        var1 = _closure1_slot7;
                        var1 = var1.TAKE_ACTION;
                        var1 = var2.bind(var4)(var1);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var3 = _closure2_slot0;
                        var1.guildId = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = function() { // Original name: handleDismiss, environment: var2
                        var2 = _closure2_slot1;
                        var1 = var2.markAsDismissed;
                        var0 = _closure1_slot7;
                        var0 = var0.USER_DISMISS;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = _closure2_slot1;
                    var7 = var5.type;
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var9 = 13;
                    var6 = var6[var9];
                    var8 = undefined;
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.LEVEL_REACHED;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 1722;
                        continue _fun103203
                    }
                case 125:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.PERKS_AVAILABLE;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 1479;
                        continue _fun103203
                    }
                case 161:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.PERKS_PURCHASABLE;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 883;
                        continue _fun103203
                    }
                case 197:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.NEW_PERK_AVAILABLE;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 327;
                        continue _fun103203
                    }
                case 230:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.GAME_SERVER_HOSTING_AVAILABLE;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 325;
                        continue _fun103203
                    }
                case 263:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var10.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 325;
                        continue _fun103203
                    }
                case 296:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.GuildPowerupNotificationPopoutType;
                    var6 = var6.GAME_SERVER_HOSTING_ENABLED;
                case 325:
                    return var0;
                case 327:
                    var6 = _closure2_slot1;
                    var9 = var6.powerups;
                    var7 = var9.find;
                    var6 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.skuId;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 20;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var0 = var0.VANITY_URL_POWERUP_SKU_ID;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var7.bind(var9)(var6);
                    if (!(var16 == var6)) {
                        _fun103203_ip = 637;
                        continue _fun103203
                    }
                case 361:
                    var7 = var9.find;
                    var6 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot6;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var0.skuId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var7.bind(var9)(var6);
                    var6 = var0;
                    if (!(var16 != var7)) {
                        _fun103203_ip = 632;
                        continue _fun103203
                    }
                case 388:
                    var7 = {};
                    var22 = var7;
                    var21 = var0;
                    var9 = copyDataProperties(var22, var21);
                    var10 = true;
                    var9 = 'visible';
                    var7[var9] = var10;
                    var10 = function() { // Original name: renderImgComponent, environment: var2
                        var3 = _closure1_slot9;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 17;
                        var0 = var6[var0];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var0);
                        var0 = {};
                        var4 = 22;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var0.imageUrl = var4;
                        var4 = _closure2_slot4;
                        var4 = var4.coachmarkImage;
                        var0.style = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var9 = 'renderImgComponent';
                    var7[var9] = var10;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 15;
                    var10 = var13[var9];
                    var10 = var12.bind(var8)(var10);
                    var18 = var10.intl;
                    var15 = var18.string;
                    var17 = _closure1_slot1;
                    var10 = 16;
                    var11 = var13[var10];
                    var11 = var17.bind(var8)(var11);
                    var11 = var11["kA2c+n"];
                    var15 = var15.bind(var18)(var11);
                    var11 = 'title';
                    var7[var11] = var15;
                    var11 = var13[var9];
                    var11 = var12.bind(var8)(var11);
                    var15 = var11.intl;
                    var11 = var15.string;
                    var10 = var13[var10];
                    var10 = var17.bind(var8)(var10);
                    var10 = var10.TUilLj;
                    var11 = var11.bind(var15)(var10);
                    var10 = 'description';
                    var7[var10] = var11;
                    var10 = var13[var9];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.t;
                    var9 = var9.RzWDqY;
                    var10 = var10.bind(var11)(var9);
                    var9 = 'buttonLabel';
                    var7[var9] = var10;
                    var10 = 'primary';
                    var9 = 'buttonVariant';
                    var7[var9] = var10;
                    var9 = 'onButtonPress';
                    var7[var9] = var4;
                    var9 = 'onDismiss';
                    var7[var9] = var3;
                    var6 = var7;
                case 632:
                    _fun103203_ip = 881;
                    continue _fun103203;
                case 637:
                    var7 = {};
                    var22 = var7;
                    var21 = var0;
                    var9 = copyDataProperties(var22, var21);
                    var10 = true;
                    var9 = 'visible';
                    var7[var9] = var10;
                    var10 = function() { // Original name: renderImgComponent, environment: var2
                        var3 = _closure1_slot9;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 17;
                        var0 = var6[var0];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var0);
                        var0 = {};
                        var4 = 21;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var0.imageUrl = var4;
                        var4 = _closure2_slot4;
                        var4 = var4.coachmarkImage;
                        var0.style = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var9 = 'renderImgComponent';
                    var7[var9] = var10;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 15;
                    var10 = var13[var9];
                    var10 = var12.bind(var8)(var10);
                    var18 = var10.intl;
                    var15 = var18.string;
                    var17 = _closure1_slot1;
                    var10 = 16;
                    var11 = var13[var10];
                    var11 = var17.bind(var8)(var11);
                    var11 = var11.Ygpx4Q;
                    var15 = var15.bind(var18)(var11);
                    var11 = 'title';
                    var7[var11] = var15;
                    var11 = var13[var9];
                    var11 = var12.bind(var8)(var11);
                    var15 = var11.intl;
                    var11 = var15.string;
                    var10 = var13[var10];
                    var10 = var17.bind(var8)(var10);
                    var10 = var10.mmNkUA;
                    var11 = var11.bind(var15)(var10);
                    var10 = 'description';
                    var7[var10] = var11;
                    var10 = var13[var9];
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.t;
                    var9 = var9.RzWDqY;
                    var10 = var10.bind(var11)(var9);
                    var9 = 'buttonLabel';
                    var7[var9] = var10;
                    var10 = 'primary';
                    var9 = 'buttonVariant';
                    var7[var9] = var10;
                    var9 = 'onButtonPress';
                    var7[var9] = var4;
                    var9 = 'onDismiss';
                    var7[var9] = var3;
                    var6 = var7;
                case 881:
                    return var6;
                case 883:
                    var6 = _closure2_slot1;
                    var13 = var6.powerups;
                    var _closure3_slot0 = var13;
                    var6 = var13.length;
                    var12 = 0;
                    if (!(var12 !== var6)) {
                        _fun103203_ip = 1477;
                        continue _fun103203
                    }
                case 911:
                    var7 = var13.length;
                    var6 = 3;
                    if (!(!(var7 >= var6))) {
                        _fun103203_ip = 1132;
                        continue _fun103203
                    }
                case 926:
                    var7 = var13.length;
                    var6 = 2;
                    if (!(var6 !== var7)) {
                        _fun103203_ip = 1016;
                        continue _fun103203
                    }
                case 938:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 15;
                    var6 = var11[var6];
                    var6 = var7.bind(var8)(var6);
                    var10 = var6.intl;
                    var9 = var10.formatToPlainString;
                    var7 = _closure1_slot1;
                    var6 = 16;
                    var6 = var11[var6];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.ZF8NT6;
                    var6 = {};
                    var11 = var13[var12];
                    var11 = var11.title;
                    var6.perk = var11;
                    var9 = var9.bind(var10)(var7, var6);
                    _fun103203_ip = 1130;
                    continue _fun103203;
                case 1016:
                    var7 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 15;
                    var6 = var15[var6];
                    var6 = var7.bind(var8)(var6);
                    var11 = var6.intl;
                    var10 = var11.formatToPlainString;
                    var7 = _closure1_slot1;
                    var6 = 16;
                    var6 = var15[var6];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.wcQOqC;
                    var6 = {};
                    var15 = var13[var12];
                    var19 = var15.title;
                    var15 = 1;
                    var15 = var13[var15];
                    var18 = var15.title;
                    var15 = global;
                    var15 = var15.HermesInternal;
                    var17 = var15.concat;
                    var15 = ' & ';
                    var15 = var17.bind(var14)(var19, var15, var18);
                    var6.perks = var15;
                    var9 = var10.bind(var11)(var7, var6);
                case 1130:
                    _fun103203_ip = 1244;
                    continue _fun103203;
                case 1132:
                    var7 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 15;
                    var6 = var15[var6];
                    var6 = var7.bind(var8)(var6);
                    var11 = var6.intl;
                    var10 = var11.formatToPlainString;
                    var7 = _closure1_slot1;
                    var6 = 16;
                    var6 = var15[var6];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6["6Sv+3M"];
                    var6 = {};
                    var12 = var13[var12];
                    var12 = var12.title;
                    var6.perk = var12;
                    var12 = 1;
                    var12 = var13[var12];
                    var12 = var12.title;
                    var6.perk2 = var12;
                    var12 = 2;
                    var12 = var13[var12];
                    var12 = var12.title;
                    var6.perk3 = var12;
                    var9 = var10.bind(var11)(var7, var6);
                case 1244:
                    var6 = {};
                    var22 = var6;
                    var21 = var0;
                    var7 = copyDataProperties(var22, var21);
                    var10 = true;
                    var7 = 'visible';
                    var6[var7] = var10;
                    var10 = function() { // Original name: renderImgComponent, environment: var2
                        _fun103209: for (var _fun103209_ip = 0;;) switch (_fun103209_ip) {
                            case 0:
                                var3 = _closure1_slot9;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 17;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var5 = _closure3_slot0;
                                var6 = var5.length;
                                var5 = 1;
                                if (!(!(var6 > var5))) {
                                    _fun103209_ip = 120;
                                    continue _fun103209
                                }
                            case 50:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var6 = 19;
                                var6 = var9[var6];
                                var11 = var8.bind(var2)(var6);
                                var10 = var11.getGuildPowerupBannerImage;
                                var8 = _closure3_slot0;
                                var6 = 0;
                                var9 = var8[var6];
                                var8 = _closure2_slot5;
                                var6 = true;
                                var8 = var10.bind(var11)(var9, var8, var6);
                                var6 = null;
                                var9 = var6 != var8;
                                var6 = '';
                                if (!var9) {
                                    _fun103209_ip = 118;
                                    continue _fun103209
                                }
                            case 115:
                                var6 = var8;
                            case 118:
                                _fun103209_ip = 140;
                                continue _fun103209;
                            case 120:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var7 = 18;
                                var7 = var9[var7];
                                var6 = var8.bind(var2)(var7);
                            case 140:
                                var0.imageUrl = var6;
                                var4 = _closure3_slot0;
                                var4 = var4.length;
                                var4 = var5 === var4;
                                var0.isAnimated = var4;
                                var5 = _closure2_slot4;
                                var6 = var5.coachmarkImage;
                                var4 = new Array(2);
                                var4[0] = var6;
                                var5 = var5.coachmarkCover;
                                var4[1] = var5;
                                var0.style = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var7 = 'renderImgComponent';
                    var6[var7] = var10;
                    var10 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 15;
                    var7 = var15[var12];
                    var7 = var10.bind(var8)(var7);
                    var13 = var7.intl;
                    var11 = var13.formatToPlainString;
                    var10 = _closure1_slot1;
                    var7 = 16;
                    var7 = var15[var7];
                    var7 = var10.bind(var8)(var7);
                    var10 = var7.LmpChE;
                    var7 = {};
                    var15 = _closure2_slot2;
                    var15 = var16 != var15;
                    if (!var15) {
                        _fun103203_ip = 1354;
                        continue _fun103203
                    }
                case 1350:
                    var14 = _closure2_slot2;
                case 1354:
                    var7.guildName = var14;
                    var10 = var11.bind(var13)(var10, var7);
                    var7 = 'title';
                    var6[var7] = var10;
                    var7 = 'description';
                    var6[var7] = var9;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = var7[var12];
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var7 = var7[var12];
                    var7 = var11.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.RzWDqY;
                    var9 = var9.bind(var10)(var7);
                    var7 = 'buttonLabel';
                    var6[var7] = var9;
                    var9 = 'primary';
                    var7 = 'buttonVariant';
                    var6[var7] = var9;
                    var7 = 'onButtonPress';
                    var6[var7] = var4;
                    var7 = 'onDismiss';
                    var6[var7] = var3;
                    return var6;
                case 1477:
                    return var0;
                case 1479:
                    var6 = {};
                    var22 = var6;
                    var21 = var0;
                    var7 = copyDataProperties(var22, var21);
                    var9 = true;
                    var7 = 'visible';
                    var6[var7] = var9;
                    var9 = function() { // Original name: renderImgComponent, environment: var2
                        var3 = _closure1_slot9;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {
                            'style': null,
                            'gemWidth': 30,
                            'gemHeight': 30
                        };
                        var4 = _closure2_slot4;
                        var4 = var4.boostGemBackground;
                        var0.style = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var7 = 'renderImgComponent';
                    var6[var7] = var9;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 15;
                    var9 = var12[var7];
                    var9 = var11.bind(var8)(var9);
                    var15 = var9.intl;
                    var13 = var15.string;
                    var14 = _closure1_slot1;
                    var9 = 16;
                    var10 = var12[var9];
                    var10 = var14.bind(var8)(var10);
                    var10 = var10.QpQBPQ;
                    var13 = var13.bind(var15)(var10);
                    var10 = 'title';
                    var6[var10] = var13;
                    var10 = var12[var7];
                    var10 = var11.bind(var8)(var10);
                    var13 = var10.intl;
                    var10 = var13.string;
                    var9 = var12[var9];
                    var9 = var14.bind(var8)(var9);
                    var9 = var9["6hn0xF"];
                    var10 = var10.bind(var13)(var9);
                    var9 = 'description';
                    var6[var9] = var10;
                    var9 = var12[var7];
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var7 = var12[var7];
                    var7 = var11.bind(var8)(var7);
                    var7 = var7.t;
                    var7 = var7.RzWDqY;
                    var9 = var9.bind(var10)(var7);
                    var7 = 'buttonLabel';
                    var6[var7] = var9;
                    var9 = 'primary';
                    var7 = 'buttonVariant';
                    var6[var7] = var9;
                    var7 = 'onButtonPress';
                    var6[var7] = var4;
                    var7 = 'onDismiss';
                    var6[var7] = var3;
                    return var6;
                case 1722:
                    var12 = _closure2_slot1;
                    var1 = {};
                    var22 = var1;
                    var21 = var0;
                    var6 = copyDataProperties(var22, var21);
                    var7 = true;
                    var6 = 'visible';
                    var1[var6] = var7;
                    var6 = function() { // Original name: renderImgComponent, environment: var2
                        var3 = _closure1_slot9;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {
                            'style': null,
                            'gemWidth': 30,
                            'gemHeight': 30
                        };
                        var4 = _closure2_slot4;
                        var4 = var4.boostGemBackground;
                        var0.style = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var2 = 'renderImgComponent';
                    var1[var2] = var6;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var6 = var9[var2];
                    var6 = var7.bind(var8)(var6);
                    var14 = var6.intl;
                    var13 = var14.formatToPlainString;
                    var6 = _closure1_slot1;
                    var5 = 16;
                    var10 = var9[var5];
                    var10 = var6.bind(var8)(var10);
                    var11 = var10["Zg/m9K"];
                    var10 = {};
                    var15 = var12.powerup;
                    var15 = var15.title;
                    var10.perkName = var15;
                    var11 = var13.bind(var14)(var11, var10);
                    var10 = 'title';
                    var1[var10] = var11;
                    var10 = var9[var2];
                    var10 = var7.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.formatToPlainString;
                    var5 = var9[var5];
                    var5 = var6.bind(var8)(var5);
                    var6 = var5["1EGXSK"];
                    var5 = {};
                    var12 = var12.powerup;
                    var12 = var12.title;
                    var5.perkName = var12;
                    var6 = var10.bind(var11)(var6, var5);
                    var5 = 'description';
                    var1[var5] = var6;
                    var5 = var9[var2];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.RzWDqY;
                    var5 = var5.bind(var6)(var2);
                    var2 = 'buttonLabel';
                    var1[var2] = var5;
                    var5 = 'primary';
                    var2 = 'buttonVariant';
                    var1[var2] = var5;
                    var2 = 'onButtonPress';
                    var1[var2] = var4;
                    var2 = 'onDismiss';
                    var1[var2] = var3;
                    return var1;
                case 2007:
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var1, var4);
        var1 = 23;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.useCoachmark;
        var1 = arg0;
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1410, 6678, 1369, 483, 33, 1297, 671, 566, 13425, 3205, 13352, 13351, 13389, 1234, 1881, 13391, 13426, 13388, 6601, 13427, 13415, 6979, 2]);