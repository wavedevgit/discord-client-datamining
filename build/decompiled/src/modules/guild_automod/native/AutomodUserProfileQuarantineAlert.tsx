// modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun79711: for (var _fun79711_ip = 0;;) switch (_fun79711_ip) {
            case 0:
                var2 = arg0;
                var17 = var2.title;
                var11 = var2.description;
                var6 = var2.buttonCta;
                var5 = var2.onConfirm;
                var1 = _closure1_slot7;
                var0 = _closure1_slot3;
                var3 = undefined;
                var4 = var1.bind(var3)(var2, var0);
                var0 = _closure1_slot18;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 13;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var20 = var0;
                var19 = var4;
                var7 = copyDataProperties(var20, var19);
                var8 = var12.wrapper;
                var7 = 'style';
                var0[var7] = var8;
                var13 = _closure1_slot0;
                var7 = 14;
                var8 = var14[var7];
                var8 = var13.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["ETE/oC"];
                var8 = var8.bind(var9)(var7);
                var7 = 'cancelText';
                var0[var7] = var8;
                var7 = null;
                var8 = var7 == var4;
                var7 = undefined;
                if (var8) {
                    _fun79711_ip = 182;
                    continue _fun79711
                }
            case 176:
                var7 = var4.onClose;
            case 182:
                var4 = 'onCancel';
                var0[var4] = var7;
                var4 = 'confirmText';
                var0[var4] = var6;
                var4 = 'onConfirm';
                var0[var4] = var5;
                var6 = _closure1_slot17;
                var5 = _closure1_slot8;
                var4 = {};
                var7 = var12.body;
                var4.style = var7;
                var9 = _closure1_slot16;
                var15 = _closure1_slot1;
                var13 = _closure1_slot2;
                var14 = 15;
                var7 = var13[var14];
                var8 = var15.bind(var3)(var7);
                var7 = {};
                var16 = 16;
                var16 = var13[var16];
                var16 = var15.bind(var3)(var16);
                var7.source = var16;
                var14 = var13[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.Sizes;
                var14 = var14.CUSTOM;
                var7.size = var14;
                var14 = var12.mainIcon;
                var7.style = var14;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var16 = _closure1_slot16;
                var9 = _closure1_slot0;
                var8 = 17;
                var14 = var13[var8];
                var14 = var9.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = var12.title;
                var14.style = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var7[1] = var14;
                var10 = _closure1_slot16;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = var12.description;
                var8.style = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun79712: for (var _fun79712_ip = 0;;) switch (_fun79712_ip) {
            case 0:
                var7 = arg0;
                var6 = var7.guildId;
                var11 = var7.guildName;
                var1 = var7.automodReason;
                var2 = _closure1_slot7;
                var0 = _closure1_slot4;
                var3 = undefined;
                var8 = var2.bind(var3)(var7, var0);
                var0 = _closure1_slot15;
                var0 = var0.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                if (!(var1 !== var0)) {
                    _fun79712_ip = 114;
                    continue _fun79712
                }
            case 55:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 14;
                var1 = var9[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["QRN+Sk"];
                var7 = var1.bind(var2)(var0);
                _fun79712_ip = 171;
                continue _fun79712;
            case 114:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var1 = var10[var0];
                var1 = var9.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.SpDXI7;
                var7 = var1.bind(var2)(var0);
            case 171:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useOpenFixQuarantinedProfileModal;
                var0 = {};
                var0.guildId = var6;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot6;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var0 = 1;
                var6 = var1[var0];
                if (var6) {
                    _fun79712_ip = 298;
                    continue _fun79712
                }
            case 241:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var1 = var10[var0];
                var1 = var9.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.FFj5Dt;
                var7 = var1.bind(var2)(var0);
            case 298:
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var12 = 14;
                var1 = var0[var12];
                var1 = var9.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var12];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                if (var6) {
                    _fun79712_ip = 360;
                    continue _fun79712
                }
            case 345:
                var6 = var0.WikgZ1;
                var6 = var1.bind(var2)(var6);
                _fun79712_ip = 371;
                continue _fun79712;
            case 360:
                var0 = var0["/PGQf0"];
                var6 = var1.bind(var2)(var0);
            case 371:
                var2 = _closure1_slot16;
                var1 = _closure1_slot19;
                var0 = {};
                var14 = var0;
                var13 = var8;
                var8 = copyDataProperties(var14, var13);
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = var5[var12];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var5 = var5[var12];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var8 = var5.kcYdTq;
                var5 = {};
                var5.guildName = var11;
                var8 = var9.bind(var10)(var8, var5);
                var5 = 'title';
                var0[var5] = var8;
                var5 = 'description';
                var0[var5] = var7;
                var5 = 'buttonCta';
                var0[var5] = var6;
                var5 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = 'onConfirm';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var11 = var2.guildName;
        var1 = _closure1_slot7;
        var0 = _closure1_slot5;
        var3 = undefined;
        var12 = var1.bind(var3)(var2, var0);
        var2 = _closure1_slot16;
        var1 = _closure1_slot19;
        var0 = {};
        var13 = var0;
        var5 = copyDataProperties(var13, var12);
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 14;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var10 = var5.intl;
        var9 = var10.format;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5.c8TwbL;
        var5 = {};
        var5.guildName = var11;
        var6 = var9.bind(var10)(var6, var5);
        var5 = 'title';
        var0[var5] = var6;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.EJJLHp;
        var6 = var6.bind(var9)(var5);
        var5 = 'description';
        var0[var5] = var6;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Viksoo;
        var5 = var5.bind(var6)(var4);
        var4 = 'buttonCta';
        var0[var4] = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 19;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openUserSettings;
            var1 = {};
            var4 = _closure1_slot14;
            var4 = var4.PROFILE_CUSTOMIZATION;
            var1.screen = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = 'onConfirm';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = ['title', 'description', 'buttonCta', 'onConfirm'];
    var _closure1_slot3 = var0;
    var0 = ['guildId', 'guildName', 'automodReason'];
    var _closure1_slot4 = var0;
    var0 = ['guildName'];
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QUARANTINE_USER_ALERT_KEY;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.wrapper = var8;
    var9 = 'center';
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.body = var8;
    var8 = {
        'width': 48,
        'height': 48,
        'tintColor': null,
        'marginBottom': 16
    };
    var10 = 12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_FEEDBACK_CRITICAL;
    var8.tintColor = var10;
    var3.mainIcon = var8;
    var8 = {
        'marginBottom': 16,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79716: for (var _fun79716_ip = 0;;) switch (_fun79716_ip) {
            case 0:
                var5 = arg0;
                var11 = var5.guildId;
                var _closure2_slot0 = var11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 20;
                var2 = var6[var3];
                var4 = undefined;
                var10 = var7.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var9.bind(var10)(var8, var2);
                var _closure2_slot1 = var2;
                var6 = var6[var3];
                var10 = var7.bind(var4)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var6;
                var7 = new Array(1);
                var7[0] = var11;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var6, var7);
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun79716_ip = 137;
                    continue _fun79716
                }
            case 132:
                var7 = var8.name;
            case 137:
                var8 = var6 != var7;
                var6 = '';
                if (!var8) {
                    _fun79716_ip = 151;
                    continue _fun79716
                }
            case 148:
                var6 = var7;
            case 151:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = var8[var3];
                var10 = var7.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    _fun79719: for (var _fun79719_ip = 0;;) switch (_fun79719_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun79719_ip = 95;
                                continue _fun79719
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var6 = var5[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var6);
                            var6 = var7.getAutomodQuarantinedGuildMemberFlags;
                            var10 = _closure1_slot10;
                            var9 = var10.getMember;
                            var8 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var3 = var9.bind(var10)(var8, var3);
                            var3 = var6.bind(var7)(var3);
                            var1 = var5[var1];
                            var2 = var4.bind(var2)(var1);
                            var1 = var2.getAutomodReason;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        case 95:
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var7, var2, var3);
                var3 = _closure1_slot1;
                var2 = 22;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = _closure1_slot12;
                    var1.type = var5;
                    var6 = _closure2_slot0;
                    var1.guild_id = var6;
                    var5 = _closure2_slot1;
                    var1.other_user_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0);
                var0 = _closure1_slot15;
                var0 = var0.AUTOMOD_QUARANTINED_BIO;
                if (!(var7 !== var0)) {
                    _fun79716_ip = 352;
                    continue _fun79716
                }
            case 253:
                var0 = _closure1_slot15;
                var0 = var0.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                if (!(var7 !== var0)) {
                    _fun79716_ip = 352;
                    continue _fun79716
                }
            case 267:
                var0 = _closure1_slot15;
                var0 = var0.AUTOMOD_QUARANTINED_SERVER_TAG;
                if (!(var7 !== var0)) {
                    _fun79716_ip = 319;
                    continue _fun79716
                }
            case 281:
                var3 = _closure1_slot16;
                var2 = _closure1_slot20;
                var0 = {};
                var0.automodReason = var7;
                var0.guildName = var6;
                var14 = var0;
                var13 = var5;
                var8 = copyDataProperties(var14, var13);
                var0 = var3.bind(var4)(var2, var0);
                _fun79716_ip = 350;
                continue _fun79716;
            case 319:
                var8 = _closure1_slot16;
                var3 = _closure1_slot21;
                var2 = {};
                var2.guildName = var6;
                var14 = var2;
                var13 = var5;
                var9 = copyDataProperties(var14, var13);
                var0 = var8.bind(var4)(var3, var2);
            case 350:
                _fun79716_ip = 388;
                continue _fun79716;
            case 352:
                var3 = _closure1_slot16;
                var2 = _closure1_slot20;
                var1 = {};
                var1.automodReason = var7;
                var1.guildName = var6;
                var14 = var1;
                var13 = var5;
                var5 = copyDataProperties(var14, var13);
                var0 = var3.bind(var4)(var2, var1);
            case 388:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 1216, 1681, 1410, 10132, 660, 3079, 33, 1297, 671, 3937, 1234, 4086, 10138, 3941, 10139, 5922, 632, 3097, 4103, 795, 2]);