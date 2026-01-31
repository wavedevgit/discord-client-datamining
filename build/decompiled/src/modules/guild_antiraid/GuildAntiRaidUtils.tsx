// modules/guild_antiraid/GuildAntiRaidUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: hasDetectedRaid, environment: var1
        _fun55716: for (var _fun55716_ip = 0;;) switch (_fun55716_ip) {
            case 0:
                var6 = arg0;
                var1 = var6.raidDetectedAt;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun55716_ip = 90;
                    continue _fun55716
                }
            case 18:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 1;
                var7 = var5[var1];
                var3 = undefined;
                var7 = var4.bind(var3)(var7);
                var6 = var6.raidDetectedAt;
                var8 = var7.bind(var3)(var6);
                var7 = var8.add;
                var6 = _closure1_slot3;
                var2 = 'hours';
                var2 = var7.bind(var8)(var6, var2);
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var0 = var2 > var1;
            case 90:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var4 = var4.NAGBAR_DISPLAY_MAX_HOURS;
    var _closure1_slot3 = var4;
    var4 = {
        'month': 'numeric',
        'day': 'numeric',
        'hour': 'numeric',
        'minute': '2-digit'
    };
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_antiraid/GuildAntiRaidUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.DATE_CONFIG = var4;
    var4 = function(arg0) { // Original name: hasDetectedActivity, environment: var1
        _fun55717: for (var _fun55717_ip = 0;;) switch (_fun55717_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.dmSpamDetectedAt;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun55717_ip = 90;
                    continue _fun55717
                }
            case 18:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 1;
                var8 = var6[var1];
                var4 = undefined;
                var9 = var5.bind(var4)(var8);
                var8 = var7.dmSpamDetectedAt;
                var10 = var9.bind(var4)(var8);
                var9 = var10.add;
                var8 = _closure1_slot3;
                var3 = 'hours';
                var3 = var9.bind(var10)(var8, var3);
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var0 = var3 > var1;
            case 90:
                if (var0) {
                    _fun55717_ip = 181;
                    continue _fun55717
                }
            case 93:
                var1 = var7.raidDetectedAt;
                var1 = var2 != var1;
                if (!var1) {
                    _fun55717_ip = 178;
                    continue _fun55717
                }
            case 106:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 1;
                var8 = var6[var2];
                var4 = undefined;
                var8 = var5.bind(var4)(var8);
                var7 = var7.raidDetectedAt;
                var9 = var8.bind(var4)(var7);
                var8 = var9.add;
                var7 = _closure1_slot3;
                var3 = 'hours';
                var3 = var8.bind(var9)(var7, var3);
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var1 = var3 > var2;
            case 178:
                var0 = var1;
            case 181:
                return var0;
        }
    };
    var2.hasDetectedActivity = var4;
    var2.hasDetectedRaid = var3;
    var3 = function(arg0) { // Original name: hasDetectedDMRaid, environment: var1
        _fun55718: for (var _fun55718_ip = 0;;) switch (_fun55718_ip) {
            case 0:
                var6 = arg0;
                var1 = var6.dmSpamDetectedAt;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun55718_ip = 90;
                    continue _fun55718
                }
            case 18:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 1;
                var7 = var5[var1];
                var3 = undefined;
                var7 = var4.bind(var3)(var7);
                var6 = var6.dmSpamDetectedAt;
                var8 = var7.bind(var3)(var6);
                var7 = var8.add;
                var6 = _closure1_slot3;
                var2 = 'hours';
                var2 = var7.bind(var8)(var6, var2);
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var0 = var2 > var1;
            case 90:
                return var0;
        }
    };
    var2.hasDetectedDMRaid = var3;
    var3 = function(arg0) { // Original name: getIncidentAlertType, environment: var1
        _fun55719: for (var _fun55719_ip = 0;;) switch (_fun55719_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var4 = undefined;
                var0 = undefined;
                if (var1) {
                    _fun55719_ip = 74;
                    continue _fun55719
                }
            case 16:
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)(var3);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.GuildIncidentAlertTypes;
                if (var1) {
                    _fun55719_ip = 65;
                    continue _fun55719
                }
            case 57:
                var1 = var2.DM_RAID;
                _fun55719_ip = 71;
                continue _fun55719;
            case 65:
                var1 = var2.JOIN_RAID;
            case 71:
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var2.getIncidentAlertType = var3;
    var3 = function(arg0, arg1) { // Original name: getEnabledInterventions, environment: var1
        _fun55720: for (var _fun55720_ip = 0;;) switch (_fun55720_ip) {
            case 0:
                var0 = new Array(0);
                var1 = arg0;
                if (!var1) {
                    _fun55720_ip = 57;
                    continue _fun55720
                }
            case 10:
                var2 = var0.push;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GuildIncidentActionTypes;
                var1 = var1.INVITES_DISABLED;
                var1 = var2.bind(var0)(var1);
            case 57:
                var1 = arg1;
                if (!var1) {
                    _fun55720_ip = 110;
                    continue _fun55720
                }
            case 63:
                var2 = var0.push;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GuildIncidentActionTypes;
                var1 = var1.DMS_DISABLED;
                var1 = var2.bind(var0)(var1);
            case 110:
                return var0;
        }
    };
    var2.getEnabledInterventions = var3;
    var3 = function(arg0, arg1) { // Original name: getDisabledInterventions, environment: var1
        _fun55721: for (var _fun55721_ip = 0;;) switch (_fun55721_ip) {
            case 0:
                var0 = new Array(0);
                var1 = arg0;
                if (var1) {
                    _fun55721_ip = 57;
                    continue _fun55721
                }
            case 10:
                var2 = var0.push;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GuildIncidentActionTypes;
                var1 = var1.INVITES_DISABLED;
                var1 = var2.bind(var0)(var1);
            case 57:
                var1 = arg1;
                if (var1) {
                    _fun55721_ip = 110;
                    continue _fun55721
                }
            case 63:
                var2 = var0.push;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GuildIncidentActionTypes;
                var1 = var1.DMS_DISABLED;
                var1 = var2.bind(var0)(var1);
            case 110:
                return var0;
        }
    };
    var2.getDisabledInterventions = var3;
    var3 = function(arg0) { // Original name: isUnderLockdown, environment: var1
        _fun55722: for (var _fun55722_ip = 0;;) switch (_fun55722_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.dmsDisabledUntil;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun55722_ip = 82;
                    continue _fun55722
                }
            case 18:
                var1 = global;
                var6 = var1.Date;
                var7 = var3.dmsDisabledUntil;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var4 = new var8[var6](var7, var6);
                var4 = var4 instanceof Object ? var4 : var5;
                var1 = var1.Date;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var5;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var5;
                var0 = var4 > var1;
            case 82:
                if (var0) {
                    _fun55722_ip = 165;
                    continue _fun55722
                }
            case 85:
                var1 = var3.invitesDisabledUntil;
                var1 = var2 != var1;
                if (!var1) {
                    _fun55722_ip = 162;
                    continue _fun55722
                }
            case 98:
                var2 = global;
                var5 = var2.Date;
                var7 = var3.invitesDisabledUntil;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var4;
                var2 = new var8[var2](var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var1 = var3 > var2;
            case 162:
                var0 = var1;
            case 165:
                return var0;
        }
    };
    var2.isUnderLockdown = var3;
    var3 = function(arg0) { // Original name: hasDMsDisabled, environment: var1
        _fun55723: for (var _fun55723_ip = 0;;) switch (_fun55723_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55723_ip = 20;
                    continue _fun55723
                }
            case 14:
                var0 = var2.dmsDisabledUntil;
            case 20:
                var0 = var1 != var0;
                if (!var0) {
                    _fun55723_ip = 91;
                    continue _fun55723
                }
            case 27:
                var1 = global;
                var4 = var1.Date;
                var5 = var2.dmsDisabledUntil;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var0 = var2 > var1;
            case 91:
                return var0;
        }
    };
    var2.hasDMsDisabled = var3;
    var3 = function(arg0) { // Original name: hasInvitesDisabled, environment: var1
        _fun55724: for (var _fun55724_ip = 0;;) switch (_fun55724_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55724_ip = 20;
                    continue _fun55724
                }
            case 14:
                var0 = var2.invitesDisabledUntil;
            case 20:
                var0 = var1 != var0;
                if (!var0) {
                    _fun55724_ip = 91;
                    continue _fun55724
                }
            case 27:
                var1 = global;
                var4 = var1.Date;
                var5 = var2.invitesDisabledUntil;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var0 = var2 > var1;
            case 91:
                return var0;
        }
    };
    var2.hasInvitesDisabled = var3;
    var1 = function(arg0, arg1) { // Original name: getSecurityActionDetailsString, environment: var1
        _fun55725: for (var _fun55725_ip = 0;;) switch (_fun55725_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var11 = var0.dmsDisabledUntil;
                var1 = null;
                if (!(var1 == var11)) {
                    _fun55725_ip = 24;
                    continue _fun55725
                }
            case 18:
                var11 = var0.invitesDisabledUntil;
            case 24:
                if (!(var1 != var11)) {
                    _fun55725_ip = 518;
                    continue _fun55725
                }
            case 31:
                var2 = var0.dmsDisabledUntil;
                var2 = var1 != var2;
                var0 = var0.invitesDisabledUntil;
                var1 = var1 != var0;
                var3 = var2;
                if (!var3) {
                    _fun55725_ip = 60;
                    continue _fun55725
                }
            case 57:
                var3 = var1;
            case 60:
                var0 = true;
                if (!(var3 !== var0)) {
                    _fun55725_ip = 374;
                    continue _fun55725
                }
            case 69:
                if (!(var2 !== var0)) {
                    _fun55725_ip = 230;
                    continue _fun55725
                }
            case 76:
                if (!(var1 !== var0)) {
                    _fun55725_ip = 86;
                    continue _fun55725
                }
            case 80:
                var0 = '';
                return var0;
            case 86:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 3;
                var0 = var12[var5];
                var9 = undefined;
                var0 = var10.bind(var9)(var0);
                var3 = var0.intl;
                var2 = var3.formatToPlainString;
                var0 = var12[var5];
                var0 = var10.bind(var9)(var0);
                var0 = var0.t;
                var1 = var0.M3iSyL;
                var0 = {};
                var0.guildName = var6;
                var7 = global;
                var7 = var7.Date;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = var8;
                var14 = var11;
                var7 = new var15[var7](var14, var13);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.toLocaleString;
                var5 = var12[var5];
                var5 = var10.bind(var9)(var5);
                var5 = var5.intl;
                var5 = var5.currentLocale;
                var4 = _closure1_slot4;
                var4 = var7.bind(var8)(var5, var4);
                var0.time = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 230:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 3;
                var0 = var12[var5];
                var9 = undefined;
                var0 = var10.bind(var9)(var0);
                var3 = var0.intl;
                var2 = var3.formatToPlainString;
                var0 = var12[var5];
                var0 = var10.bind(var9)(var0);
                var0 = var0.t;
                var1 = var0["HNKxf+"];
                var0 = {};
                var0.guildName = var6;
                var7 = global;
                var7 = var7.Date;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = var8;
                var14 = var11;
                var7 = new var15[var7](var14, var13);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.toLocaleString;
                var5 = var12[var5];
                var5 = var10.bind(var9)(var5);
                var5 = var5.intl;
                var5 = var5.currentLocale;
                var4 = _closure1_slot4;
                var4 = var7.bind(var8)(var5, var4);
                var0.time = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 374:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 3;
                var0 = var10[var5];
                var8 = undefined;
                var0 = var9.bind(var8)(var0);
                var3 = var0.intl;
                var2 = var3.formatToPlainString;
                var0 = var10[var5];
                var0 = var9.bind(var8)(var0);
                var0 = var0.t;
                var1 = var0.hCZitf;
                var0 = {};
                var0.guildName = var6;
                var6 = global;
                var6 = var6.Date;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var7;
                var14 = var11;
                var6 = new var15[var6](var14, var13);
                var7 = var6 instanceof Object ? var6 : var7;
                var6 = var7.toLocaleString;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.intl;
                var5 = var5.currentLocale;
                var4 = _closure1_slot4;
                var4 = var6.bind(var7)(var5, var4);
                var0.time = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 518:
                var0 = '';
                return var0;
        }
    };
    var2.getSecurityActionDetailsString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6692, 3004, 6693, 1234, 2]);