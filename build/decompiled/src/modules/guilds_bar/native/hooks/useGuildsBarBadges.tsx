// modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['guildActivityIndicatorSource'];
    var _closure1_slot3 = var0;
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
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot12 = var6;
    var3 = var3.Permissions;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot14 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 1,
        'right': 9,
        'backgroundColor': 'transparent',
        'borderColor': 'transparent'
    };
    var3.topRightBadge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 11;
        var0 = var9[var2];
        var5 = undefined;
        var11 = var6.bind(var5)(var0);
        var10 = var11.useStateFromStores;
        var0 = _closure1_slot9;
        var8 = new Array(1);
        var8[0] = var0;
        var7 = function() { // Environment: var1
            _fun101006: for (var _fun101006_ip = 0;;) switch (_fun101006_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var1 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var3)(var0);
                    var0 = null;
                    var4 = var0 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun101006_ip = 61;
                        continue _fun101006
                    }
                case 35:
                    var4 = var3.features;
                    var3 = var4.has;
                    var2 = _closure1_slot12;
                    var2 = var2.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                    var1 = var3.bind(var4)(var2);
                case 61:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun101006_ip = 71;
                        continue _fun101006
                    }
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var7 = var10.bind(var11)(var8, var7);
        var _closure2_slot1 = var7;
        var8 = var9[var2];
        var12 = var6.bind(var5)(var8);
        var11 = var12.useStateFromStores;
        var8 = _closure1_slot7;
        var10 = new Array(3);
        var10[0] = var8;
        var8 = _closure1_slot11;
        var10[1] = var8;
        var8 = _closure1_slot8;
        var10[2] = var8;
        var8 = new Array(2);
        var8[0] = var4;
        var8[1] = var7;
        var7 = function() { // Environment: var1
            _fun101007: for (var _fun101007_ip = 0;;) switch (_fun101007_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (!var0) {
                        _fun101007_ip = 146;
                        continue _fun101007
                    }
                case 13:
                    var4 = _closure1_slot7;
                    var3 = var4.getRequest;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var4 = _closure1_slot11;
                    var3 = var4.getCurrentUser;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun101007_ip = 146;
                        continue _fun101007
                    }
                case 54:
                    if (!(var3 != var0)) {
                        _fun101007_ip = 146;
                        continue _fun101007
                    }
                case 58:
                    var5 = var0.userId;
                    var4 = var4.id;
                    if (!(var5 === var4)) {
                        _fun101007_ip = 146;
                        continue _fun101007
                    }
                case 72:
                    var6 = _closure1_slot8;
                    var5 = var6.getMember;
                    var4 = _closure2_slot0;
                    var2 = var0.userId;
                    var2 = var5.bind(var6)(var4, var2);
                    if (!(var3 != var2)) {
                        _fun101007_ip = 150;
                        continue _fun101007
                    }
                case 101:
                    var2 = var2.isPending;
                    if (var2) {
                        _fun101007_ip = 150;
                        continue _fun101007
                    }
                case 110:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isActionedAndNotAcked;
                    var1 = var1.bind(var2)(var0);
                    if (var1) {
                        _fun101007_ip = 150;
                        continue _fun101007
                    }
                case 146:
                    var1 = undefined;
                    return var1;
                case 150:
                    var0 = var0.applicationStatus;
                    return var0;
            }
        };
        var8 = var11.bind(var12)(var10, var7, var8);
        var2 = var9[var2];
        var10 = var6.bind(var5)(var2);
        var7 = var10.useStateFromStores;
        var2 = _closure1_slot10;
        var6 = new Array(3);
        var6[0] = var2;
        var6[1] = var0;
        var0 = _closure1_slot6;
        var6[2] = var0;
        var2 = new Array(1);
        var2[0] = var4;
        var0 = function() { // Environment: var1
            _fun101008: for (var _fun101008_ip = 0;;) switch (_fun101008_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var5 = var2.bind(var3)(var1);
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun101008_ip = 59;
                        continue _fun101008
                    }
                case 30:
                    var6 = _closure1_slot10;
                    var3 = var6.can;
                    var1 = _closure1_slot13;
                    var1 = var1.MANAGE_GUILD;
                    var1 = var3.bind(var6)(var1, var5);
                    if (var1) {
                        _fun101008_ip = 63;
                        continue _fun101008
                    }
                case 59:
                    var1 = false;
                    return var1;
                case 63:
                    var3 = _closure1_slot6;
                    var1 = var3.getGuildIncident;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var3)(var0);
                    var6 = var2 == var5;
                    var0 = undefined;
                    if (var6) {
                        _fun101008_ip = 137;
                        continue _fun101008
                    }
                case 91:
                    var6 = var5.features;
                    var6 = var6.has;
                    var6 = var2 == var6;
                    var0 = undefined;
                    if (var6) {
                        _fun101008_ip = 137;
                        continue _fun101008
                    }
                case 111:
                    var6 = var5.features;
                    var5 = var6.has;
                    var4 = _closure1_slot12;
                    var4 = var4.INVITES_DISABLED;
                    var0 = var5.bind(var6)(var4);
                case 137:
                    if (var0) {
                        _fun101008_ip = 229;
                        continue _fun101008
                    }
                case 140:
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun101008_ip = 155;
                        continue _fun101008
                    }
                case 149:
                    var1 = var3.invitesDisabledUntil;
                case 155:
                    var1 = var2 != var1;
                    if (!var1) {
                        _fun101008_ip = 226;
                        continue _fun101008
                    }
                case 162:
                    var2 = global;
                    var5 = var2.Date;
                    var8 = var3.invitesDisabledUntil;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var4;
                    var2 = new var9[var2](var8);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var1 = var3 > var2;
                case 226:
                    var0 = var1;
                case 229:
                    return var0;
            }
        };
        var7 = var7.bind(var10)(var6, var0, var2);
        var2 = _closure1_slot1;
        var0 = 13;
        var0 = var9[var0];
        var0 = var2.bind(var5)(var0);
        var0 = var0.bind(var5)(var4);
        var _closure2_slot2 = var0;
        var4 = _closure1_slot5;
        var6 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            _fun101009: for (var _fun101009_ip = 0;;) switch (_fun101009_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var10 = 14;
                    var0 = var0[var10];
                    var4 = undefined;
                    var5 = var1.bind(var4)(var0);
                    var3 = var5.getMediaIcon;
                    var1 = _closure2_slot2;
                    var5 = var3.bind(var5)(var1);
                    var6 = {};
                    var3 = null;
                    var1 = var3 == var5;
                    var7 = undefined;
                    if (var1) {
                        _fun101009_ip = 61;
                        continue _fun101009
                    }
                case 56:
                    var7 = var5.source;
                case 61:
                    var8 = var3 != var7;
                    var1 = null;
                    if (!var8) {
                        _fun101009_ip = 73;
                        continue _fun101009
                    }
                case 70:
                    var1 = var7;
                case 73:
                    var6.guildActivityIndicatorSource = var1;
                    var7 = var3 == var5;
                    var1 = undefined;
                    if (var7) {
                        _fun101009_ip = 92;
                        continue _fun101009
                    }
                case 87:
                    var1 = var5.icon;
                case 92:
                    var6.IconComponent = var1;
                    var0 = _closure2_slot2;
                    var0 = var0.isCurrentUserConnected;
                    var6.isCurrentUserConnected = var0;
                    var1 = var6.guildActivityIndicatorSource;
                    var5 = _closure1_slot4;
                    var0 = _closure1_slot3;
                    var9 = var5.bind(var4)(var6, var0);
                    var0 = {};
                    var6 = var3 != var1;
                    var5 = null;
                    if (!var6) {
                        _fun101009_ip = 205;
                        continue _fun101009
                    }
                case 142:
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.GuildsBarActivityIndicatorBase;
                    var6 = {};
                    var10 = _closure1_slot15;
                    var10 = var10.topRightBadge;
                    var6.style = var10;
                    var6.source = var1;
                    var12 = var6;
                    var11 = var9;
                    var9 = copyDataProperties(var12, var11);
                    var5 = var8.bind(var4)(var7, var6);
                case 205:
                    var0.badgeTopRight = var5;
                    var3 = var3 != var1;
                    var1 = undefined;
                    if (!var3) {
                        _fun101009_ip = 256;
                        continue _fun101009
                    }
                case 219:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var5 = 'top-right';
                    var2.position = var5;
                    var1 = var3.bind(var4)(var2);
                case 256:
                    var0.cutoutTopRight = var1;
                    return var0;
            }
        };
        var0 = var6.bind(var4)(var0, var3);
        var3 = var0.badgeTopRight;
        var6 = var0.cutoutTopRight;
        var _closure2_slot3 = var6;
        var0 = 16;
        var0 = var9[var0];
        var2 = var2.bind(var5)(var0);
        var0 = {};
        var9 = arg1;
        var0.mentionCount = var9;
        var9 = arg2;
        var0.isMentionLowImportance = var9;
        var0.joinRequestState = var8;
        var0.shouldShowInvitesDisabled = var7;
        var0 = var2.bind(var5)(var0);
        var2 = var0.badge;
        var5 = var0.cutout;
        var _closure2_slot4 = var5;
        var0 = {};
        var0.badgeTopRight = var3;
        var0.badgeBottomRight = var2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun101010: for (var _fun101010_ip = 0;;) switch (_fun101010_ip) {
                case 0:
                    var0 = new Array(0);
                    var2 = _closure2_slot3;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun101010_ip = 31;
                        continue _fun101010
                    }
                case 17:
                    var4 = var0.push;
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var0)(var2);
                case 31:
                    var2 = _closure2_slot4;
                    if (!(var3 != var2)) {
                        _fun101010_ip = 53;
                        continue _fun101010
                    }
                case 39:
                    var2 = var0.push;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var0)(var1);
                case 53:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.cutouts = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 8679, 3175, 1672, 1410, 3052, 1613, 660, 33, 566, 3176, 13123, 13125, 13102, 13101, 2]);