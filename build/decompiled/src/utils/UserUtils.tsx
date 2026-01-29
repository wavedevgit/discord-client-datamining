// utils/UserUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var17;
    var0 = function(arg0) { // Original name: present, environment: var6
        _fun27870: for (var _fun27870_ip = 0;;) switch (_fun27870_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun27870_ip = 23;
                    continue _fun27870
                }
            case 12:
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 23:
                var0 = !var0;
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var13 = function(arg0) { // Original name: nameFromUser, environment: var6
        _fun27871: for (var _fun27871_ip = 0;;) switch (_fun27871_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot10;
                var2 = var1.global_name;
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun27871_ip = 82;
                    continue _fun27871
                }
            case 26:
                var3 = _closure1_slot10;
                var2 = var1.globalName;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun27871_ip = 74;
                    continue _fun27871
                }
            case 44:
                var3 = _closure1_slot10;
                var2 = var1.username;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun27871_ip = 67;
                    continue _fun27871
                }
            case 61:
                var0 = _closure1_slot7;
                _fun27871_ip = 72;
                continue _fun27871;
            case 67:
                var0 = var1.username;
            case 72:
                _fun27871_ip = 80;
                continue _fun27871;
            case 74:
                var0 = var1.globalName;
            case 80:
                _fun27871_ip = 88;
                continue _fun27871;
            case 82:
                var0 = var1.global_name;
            case 88:
                return var0;
        }
    };
    var _closure1_slot11 = var13;
    var12 = function(arg0) { // Original name: getName, environment: var6
        _fun27872: for (var _fun27872_ip = 0;;) switch (_fun27872_ip) {
            case 0:
                var0 = arg0;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun27872_ip = 13;
                    continue _fun27872
                }
            case 9:
                var1 = undefined;
                return var1;
            case 13:
                var2 = _closure1_slot2;
                var4 = var2.hidePersonalInformation;
                var2 = _closure1_slot11;
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                if (!var4) {
                    _fun27872_ip = 78;
                    continue _fun27872
                }
            case 40:
                var6 = var2.toLocaleLowerCase;
                var6 = var6.bind(var2)();
                var8 = var0.username;
                var7 = var5 == var8;
                var5 = undefined;
                if (var7) {
                    _fun27872_ip = 74;
                    continue _fun27872
                }
            case 64:
                var7 = var8.toLocaleLowerCase;
                var5 = var7.bind(var8)();
            case 74:
                var4 = var6 === var5;
            case 78:
                if (!var4) {
                    _fun27872_ip = 97;
                    continue _fun27872
                }
            case 81:
                var5 = var0.discriminator;
                var0 = '0';
                var4 = var0 === var5;
            case 97:
                var0 = var2;
                if (!var4) {
                    _fun27872_ip = 112;
                    continue _fun27872
                }
            case 103:
                var1 = _closure1_slot8;
                var0 = var1.bind(var3)(var2);
            case 112:
                return var0;
        }
    };
    var11 = function(arg0) { // Original name: useName, environment: var6
        _fun27873: for (var _fun27873_ip = 0;;) switch (_fun27873_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot2;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var2);
                var5 = null;
                if (!(var5 == var0)) {
                    _fun27873_ip = 66;
                    continue _fun27873
                }
            case 64:
                return var3;
            case 66:
                var2 = _closure1_slot11;
                var2 = var2.bind(var3)(var0);
                if (!var4) {
                    _fun27873_ip = 116;
                    continue _fun27873
                }
            case 78:
                var6 = var2.toLocaleLowerCase;
                var6 = var6.bind(var2)();
                var8 = var0.username;
                var7 = var5 == var8;
                var5 = undefined;
                if (var7) {
                    _fun27873_ip = 112;
                    continue _fun27873
                }
            case 102:
                var7 = var8.toLocaleLowerCase;
                var5 = var7.bind(var8)();
            case 112:
                var4 = var6 === var5;
            case 116:
                if (!var4) {
                    _fun27873_ip = 135;
                    continue _fun27873
                }
            case 119:
                var5 = var0.discriminator;
                var0 = '0';
                var4 = var0 === var5;
            case 135:
                var0 = var2;
                if (!var4) {
                    _fun27873_ip = 150;
                    continue _fun27873
                }
            case 141:
                var1 = _closure1_slot8;
                var0 = var1.bind(var3)(var2);
            case 150:
                return var0;
        }
    };
    var10 = function(arg0) { // Original name: getGlobalName, environment: var6
        _fun27875: for (var _fun27875_ip = 0;;) switch (_fun27875_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun27875_ip = 13;
                    continue _fun27875
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var4 = _closure1_slot10;
                var3 = var1.globalName;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun27875_ip = 64;
                    continue _fun27875
                }
            case 36:
                var3 = _closure1_slot10;
                var2 = var1.global_name;
                var2 = var3.bind(var0)(var2);
                var0 = undefined;
                if (!var2) {
                    _fun27875_ip = 62;
                    continue _fun27875
                }
            case 56:
                var0 = var1.global_name;
            case 62:
                _fun27875_ip = 70;
                continue _fun27875;
            case 64:
                var0 = var1.globalName;
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var10;
    var9 = function(arg0) { // Original name: getFormattedName, environment: var6
        _fun27876: for (var _fun27876_ip = 0;;) switch (_fun27876_ip) {
            case 0:
                var3 = arg0;
                var4 = arguments[1];
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun27876_ip = 14;
                    continue _fun27876
                }
            case 12:
                var4 = false;
            case 14:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun27876_ip = 115;
                    continue _fun27876
                }
            case 20:
                var5 = _closure1_slot12;
                var7 = var5.bind(var1)(var3);
                if (var4) {
                    _fun27876_ip = 50;
                    continue _fun27876
                }
            case 35:
                var6 = var3.username;
                if (!(var2 == var6)) {
                    _fun27876_ip = 48;
                    continue _fun27876
                }
            case 44:
                var6 = _closure1_slot7;
            case 48:
                _fun27876_ip = 59;
                continue _fun27876;
            case 50:
                var0 = _closure1_slot15;
                var6 = var0.bind(var1)(var3);
            case 59:
                var0 = var7;
                if (!(var0 !== var6)) {
                    _fun27876_ip = 113;
                    continue _fun27876
                }
            case 66:
                var1 = var6;
                if (!(var2 != var7)) {
                    _fun27876_ip = 110;
                    continue _fun27876
                }
            case 73:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var12 = '';
                var10 = ' (';
                var8 = ')';
                var11 = var7;
                var9 = var6;
                var1 = var12[var5](var11, var10, var9, var8, var7);
            case 110:
                var0 = var1;
            case 113:
                return var0;
            case 115:
                var0 = _closure1_slot7;
                return var0;
        }
    };
    var8 = function(arg0) { // Original name: humanizeStatus, environment: var6
        _fun27877: for (var _fun27877_ip = 0;;) switch (_fun27877_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun27877_ip = 14;
                    continue _fun27877
                }
            case 12:
                var0 = false;
            case 14:
                var2 = _closure1_slot5;
                var2 = var2.ONLINE;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 420;
                    continue _fun27877
                }
            case 34:
                var2 = _closure1_slot5;
                var2 = var2.OFFLINE;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 363;
                    continue _fun27877
                }
            case 51:
                var2 = _closure1_slot5;
                var2 = var2.IDLE;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 304;
                    continue _fun27877
                }
            case 68:
                var2 = _closure1_slot5;
                var2 = var2.DND;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 245;
                    continue _fun27877
                }
            case 85:
                var2 = _closure1_slot5;
                var2 = var2.INVISIBLE;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 186;
                    continue _fun27877
                }
            case 99:
                var2 = _closure1_slot5;
                var2 = var2.STREAMING;
                if (!(var2 !== var3)) {
                    _fun27877_ip = 127;
                    continue _fun27877
                }
            case 113:
                var2 = _closure1_slot5;
                var2 = var2.UNKNOWN;
                var2 = null;
                return var2;
            case 127:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.XKYej5;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 186:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.bg24HO;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 245:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.jaNpQH;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 304:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.qWbtVU;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 363:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.Vv0abJ;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 420:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun27877_ip = 480;
                    continue _fun27877
                }
            case 467:
                var0 = var1.WbGtnH;
                var0 = var2.bind(var3)(var0);
                _fun27877_ip = 493;
                continue _fun27877;
            case 480:
                var1 = var1["9hghLD"];
                var0 = var2.bind(var3)(var1);
            case 493:
                return var0;
        }
    };
    var7 = function(arg0, arg1) { // Original name: accountAgeInRange, environment: var6
        _fun27878: for (var _fun27878_ip = 0;;) switch (_fun27878_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var4 = var0.maxDaysOld;
                var3 = var0.minDaysOld;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun27878_ip = 26;
                    continue _fun27878
                }
            case 24:
                var3 = 0;
            case 26:
                var0 = null;
                if (!(var0 != var1)) {
                    _fun27878_ip = 111;
                    continue _fun27878
                }
            case 32:
                var2 = global;
                var5 = var2.Date;
                var2 = var5.now;
                var2 = var2.bind(var5)();
                var5 = var1.createdAt;
                var1 = var5.getTime;
                var1 = var1.bind(var5)();
                var2 = var2 - var1;
                var0 = var0 == var4;
                if (var0) {
                    _fun27878_ip = 91;
                    continue _fun27878
                }
            case 76:
                var1 = _closure1_slot6;
                var1 = var1 * var4;
                var0 = var2 <= var1;
            case 91:
                if (!var0) {
                    _fun27878_ip = 109;
                    continue _fun27878
                }
            case 94:
                var1 = _closure1_slot6;
                var1 = var1 * var3;
                var0 = var2 >= var1;
            case 109:
                return var0;
            case 111:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var7;
    var0 = function(arg0, arg1, arg2) { // Original name: presentUserTag, environment: var6
        _fun27879: for (var _fun27879_ip = 0;;) switch (_fun27879_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var7 = arg2;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun27879_ip = 253;
                    continue _fun27879
                }
            case 18:
                var5 = _closure1_slot10;
                var3 = var1.username;
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                if (var3) {
                    _fun27879_ip = 46;
                    continue _fun27879
                }
            case 40:
                var3 = _closure1_slot7;
                return var3;
            case 46:
                var6 = var0.identifiable;
                var5 = 'always';
                var3 = false;
                if (!(var5 !== var6)) {
                    _fun27879_ip = 83;
                    continue _fun27879
                }
            case 62:
                var6 = var0.identifiable;
                var5 = 'never';
                var3 = var7;
                if (!(var5 === var6)) {
                    _fun27879_ip = 83;
                    continue _fun27879
                }
            case 81:
                var3 = true;
            case 83:
                var6 = var1.discriminator;
                var5 = '0';
                if (!(var5 !== var6)) {
                    _fun27879_ip = 186;
                    continue _fun27879
                }
            case 99:
                var6 = var1.discriminator;
                var5 = _closure1_slot4;
                if (!(var6 !== var5)) {
                    _fun27879_ip = 186;
                    continue _fun27879
                }
            case 113:
                var5 = var0.forcePomelo;
                if (var5) {
                    _fun27879_ip = 186;
                    continue _fun27879
                }
            case 122:
                var6 = var0.mode;
                var5 = 'username';
                if (!(var5 !== var6)) {
                    _fun27879_ip = 179;
                    continue _fun27879
                }
            case 135:
                if (var3) {
                    _fun27879_ip = 179;
                    continue _fun27879
                }
            case 138:
                var9 = var1.username;
                var8 = var1.discriminator;
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = '';
                var5 = '#';
                var5 = var7.bind(var6)(var9, var5, var8);
                _fun27879_ip = 184;
                continue _fun27879;
            case 179:
                var5 = var1.username;
            case 184:
                return var5;
            case 186:
                if (var3) {
                    _fun27879_ip = 196;
                    continue _fun27879
                }
            case 189:
                var3 = var1.username;
                _fun27879_ip = 210;
                continue _fun27879;
            case 196:
                var2 = _closure1_slot8;
                var1 = var1.username;
                var3 = var2.bind(var4)(var1);
            case 210:
                var2 = var0.decoration;
                var1 = 'never';
                var0 = var3;
                if (!(var1 !== var2)) {
                    _fun27879_ip = 251;
                    continue _fun27879
                }
            case 229:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '@';
                var0 = var2.bind(var1)(var3);
            case 251:
                return var0;
            case 253:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.sKdZ6U;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var5 = function(arg0, arg1) { // Original name: getUserTag, environment: var6
        _fun27880: for (var _fun27880_ip = 0;;) switch (_fun27880_ip) {
            case 0:
                var4 = {};
                var6 = _closure1_slot9;
                var7 = var4;
                var1 = copyDataProperties(var7, var6);
                var6 = arg1;
                var7 = var4;
                var1 = copyDataProperties(var7, var6);
                var3 = _closure1_slot14;
                var2 = var4.identifiable;
                var1 = 'auto';
                var2 = var1 !== var2;
                if (var2) {
                    _fun27880_ip = 57;
                    continue _fun27880
                }
            case 47:
                var0 = _closure1_slot2;
                var2 = var0.hidePersonalInformation;
            case 57:
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var4, var2);
                return var0;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function(arg0, arg1) { // Original name: useUserTag, environment: var6
        var4 = _closure1_slot14;
        var3 = {};
        var8 = _closure1_slot9;
        var9 = var3;
        var1 = copyDataProperties(var9, var8);
        var8 = arg1;
        var9 = var3;
        var1 = copyDataProperties(var9, var8);
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var6 = var5.bind(var2)(var1);
        var5 = var6.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var0 = var0.hidePersonalInformation;
            return var0;
        };
        var1 = var5.bind(var6)(var1, var0);
        var0 = arg0;
        var0 = var4.bind(var2)(var0, var3, var1);
        return var0;
    };
    var3 = function(arg0) { // Original name: useDirectMessageRecipient, environment: var6
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun27884: for (var _fun27884_ip = 0;;) switch (_fun27884_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun27884_ip = 17;
                        continue _fun27884
                    }
                case 13:
                    var0 = undefined;
                    return var0;
                case 17:
                    var2 = _closure2_slot0;
                    var0 = var2.isPrivate;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    if (!var2) {
                        _fun27884_ip = 87;
                        continue _fun27884
                    }
                case 36:
                    var4 = _closure2_slot0;
                    var2 = var4.isDM;
                    var2 = var2.bind(var4)();
                    var0 = null;
                    if (!var2) {
                        _fun27884_ip = 87;
                        continue _fun27884
                    }
                case 55:
                    var3 = _closure1_slot3;
                    var2 = var3.getUser;
                    var4 = _closure2_slot0;
                    var1 = var4.getRecipientId;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 87:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = function() { // Original name: getUserIsStaff, environment: var6
        _fun27885: for (var _fun27885_ip = 0;;) switch (_fun27885_ip) {
            case 0:
                var1 = _closure1_slot3;
                var0 = var1.getCurrentUser;
                var2 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun27885_ip = 35;
                    continue _fun27885
                }
            case 25:
                var1 = var2.isStaff;
                var0 = var1.bind(var2)();
            case 35:
                return var0;
        }
    };
    var0 = global;
    var19 = var0.Object;
    var18 = var19.defineProperty;
    var14 = {};
    var0 = true;
    var14.value = var0;
    var0 = '__esModule';
    var0 = var18.bind(var19)(var2, var0, var14);
    var0 = 0;
    var14 = var17[var0];
    var0 = undefined;
    var14 = var15.bind(var0)(var14);
    var _closure1_slot2 = var14;
    var14 = 1;
    var14 = var17[var14];
    var14 = var15.bind(var0)(var14);
    var _closure1_slot3 = var14;
    var14 = 2;
    var14 = var17[var14];
    var14 = var16.bind(var0)(var14);
    var15 = var14.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot4 = var15;
    var14 = var14.StatusTypes;
    var _closure1_slot5 = var14;
    var14 = 86400000;
    var _closure1_slot6 = var14;
    var14 = '???';
    var _closure1_slot7 = var14;
    var14 = function(arg0) { // Original name: conceal, environment: var6
        var1 = arg0;
        var0 = 0;
        var3 = var1[var0];
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '…';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var _closure1_slot8 = var14;
    var14 = {
        'mode': 'full',
        'decoration': 'never',
        'identifiable': 'auto',
        'forcePomelo': false
    };
    var _closure1_slot9 = var14;
    var14 = {};
    var14.getName = var12;
    var14.useName = var11;
    var15 = function(arg0) { // Original name: isNameConcealed, environment: var6
        _fun27887: for (var _fun27887_ip = 0;;) switch (_fun27887_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.length;
                var0 = 2;
                var0 = var0 === var1;
                if (!var0) {
                    _fun27887_ip = 33;
                    continue _fun27887
                }
            case 18:
                var2 = var3.endsWith;
                var1 = '…';
                var0 = var2.bind(var3)(var1);
            case 33:
                return var0;
        }
    };
    var14.isNameConcealed = var15;
    var14.getUserTag = var5;
    var14.useUserTag = var4;
    var14.getUserIsStaff = var1;
    var14.getFormattedName = var9;
    var14.getGlobalName = var10;
    var14.humanizeStatus = var8;
    var14.useDirectMessageRecipient = var3;
    var15 = 5;
    var15 = var17[var15];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'utils/UserUtils.tsx';
    var15 = var16.bind(var17)(var15);
    var2.default = var14;
    var2.nameFromUser = var13;
    var2.getName = var12;
    var2.useName = var11;
    var2.getGlobalName = var10;
    var2.getFormattedName = var9;
    var2.humanizeStatus = var8;
    var2.accountAgeInRange = var7;
    var7 = function(arg0) { // Original name: ageEligibleForPremiumUpsell, environment: var6
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var0 = {
            'minDaysOld': 0,
            'maxDaysOld': 30
        };
        var0 = var3.bind(var2)(var1, var0);
        var0 = !var0;
        return var0;
    };
    var2.ageEligibleForPremiumUpsell = var7;
    var6 = function(arg0) { // Original name: isNewUser, environment: var6
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var0 = {
            'minDaysOld': 0,
            'maxDaysOld': 7
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.isNewUser = var6;
    var2.getUserTag = var5;
    var2.useUserTag = var4;
    var2.useDirectMessageRecipient = var3;
    var2.getUserIsStaff = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3196, 1613, 660, 566, 1234, 2]);