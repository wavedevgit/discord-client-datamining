// modules/user_profile/UserProfileSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun49201: for (var _fun49201_ip = 0;;) switch (_fun49201_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun49201_ip = 74;
                continue _fun49201;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var16 = function() {
        var0 = _closure1_slot8;
        var0 = var0.OPEN;
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var15 = function() {
        var0 = _closure1_slot8;
        var0 = var0.CLOSED;
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot19 = var15;
    var11 = function arg0() {
        _fun49206: for (var _fun49206_ip = 0;;) switch (_fun49206_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = _closure1_slot21;
                var2 = {};
                var0 = 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
                var2.type = var0;
                var2.guildId = var3;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var4 = _closure1_slot22;
                var2 = {};
                var5 = 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
                var2.type = var5;
                var2.guildId = var3;
                var2 = var4.bind(var0)(var2);
                var2 = _closure1_slot24;
                var2 = var2.bind(var0)();
                var2 = _closure1_slot25;
                var2 = var2.bind(var0)();
                var2 = _closure1_slot17;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun49206_ip = 93;
                    continue _fun49206
                }
            case 89:
                var3 = _closure1_slot9;
            case 93:
                var1 = {};
                var2[var3] = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var11;
    var13 = function arg0() {
        _fun49207: for (var _fun49207_ip = 0;;) switch (_fun49207_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var3 = _closure1_slot14;
                var6 = null;
                var0 = var4;
                if (!(var6 == var4)) {
                    _fun49207_ip = 41;
                    continue _fun49207
                }
            case 37:
                var0 = _closure1_slot9;
            case 41:
                var0 = var3[var0];
                if (!(var6 == var0)) {
                    _fun49207_ip = 51;
                    continue _fun49207
                }
            case 49:
                var0 = {};
            case 51:
                var0 = var1.bind(var2)(var0);
                var1 = var0.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun49207_ip = 169;
                    continue _fun49207
                }
            case 67:
                var3 = _closure1_slot14;
                var2 = var4;
                if (!(var6 == var4)) {
                    _fun49207_ip = 82;
                    continue _fun49207
                }
            case 78:
                var2 = _closure1_slot9;
            case 82:
                var1 = {};
                var0 = _closure1_slot14;
                if (!(var6 == var4)) {
                    _fun49207_ip = 96;
                    continue _fun49207
                }
            case 92:
                var4 = _closure1_slot9;
            case 96:
                var8 = var0[var4];
                var9 = var1;
                var0 = copyDataProperties(var9, var8);
                var0 = undefined;
                var4 = 'pendingGlobalName';
                var1[var4] = var0;
                var4 = 'pendingDisplayNameStyles';
                var1[var4] = var0;
                var4 = 'pendingAvatar';
                var1[var4] = var0;
                var4 = 'pendingAvatarDecoration';
                var1[var4] = var0;
                var4 = 'pendingNameplate';
                var1[var4] = var0;
                var4 = 'pendingProfileEffect';
                var1[var4] = var0;
                var3[var2] = var1;
                return var0;
            case 169:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot21 = var13;
    var12 = function arg0() {
        _fun49208: for (var _fun49208_ip = 0;;) switch (_fun49208_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var3 = _closure1_slot14;
                var6 = null;
                var0 = var4;
                if (!(var6 == var4)) {
                    _fun49208_ip = 41;
                    continue _fun49208
                }
            case 37:
                var0 = _closure1_slot9;
            case 41:
                var0 = var3[var0];
                if (!(var6 == var0)) {
                    _fun49208_ip = 51;
                    continue _fun49208
                }
            case 49:
                var0 = {};
            case 51:
                var0 = var1.bind(var2)(var0);
                var1 = var0.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun49208_ip = 169;
                    continue _fun49208
                }
            case 67:
                var3 = _closure1_slot14;
                var2 = var4;
                if (!(var6 == var4)) {
                    _fun49208_ip = 82;
                    continue _fun49208
                }
            case 78:
                var2 = _closure1_slot9;
            case 82:
                var1 = {};
                var0 = _closure1_slot14;
                if (!(var6 == var4)) {
                    _fun49208_ip = 96;
                    continue _fun49208
                }
            case 92:
                var4 = _closure1_slot9;
            case 96:
                var8 = var0[var4];
                var9 = var1;
                var0 = copyDataProperties(var9, var8);
                var0 = undefined;
                var4 = 'pendingPronouns';
                var1[var4] = var0;
                var4 = 'pendingProfileEffect';
                var1[var4] = var0;
                var4 = 'pendingBanner';
                var1[var4] = var0;
                var4 = 'pendingAccentColor';
                var1[var4] = var0;
                var4 = 'pendingThemeColors';
                var1[var4] = var0;
                var4 = 'pendingBio';
                var1[var4] = var0;
                var3[var2] = var1;
                return var0;
            case 169:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot22 = var12;
    var10 = function() {
        var0 = _closure1_slot12;
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var10;
    var9 = function() {
        _fun49210: for (var _fun49210_ip = 0;;) switch (_fun49210_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = _closure1_slot9;
                var3 = var2[var0];
                var0 = null;
                if (!(var0 == var3)) {
                    _fun49210_ip = 23;
                    continue _fun49210
                }
            case 21:
                var3 = {};
            case 23:
                var4 = var0 == var3;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun49210_ip = 40;
                    continue _fun49210
                }
            case 34:
                var2 = var3.pendingLegacyUsernameDisabled;
            case 40:
                if (!(var0 !== var2)) {
                    _fun49210_ip = 80;
                    continue _fun49210
                }
            case 44:
                var3 = _closure1_slot14;
                var2 = _closure1_slot9;
                var1 = {};
                var5 = var3[var2];
                var6 = var1;
                var4 = copyDataProperties(var6, var5);
                var4 = 'pendingLegacyUsernameDisabled';
                var1[var4] = var0;
                var3[var2] = var1;
                return var0;
            case 80:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var9;
    var8 = function() {
        _fun49211: for (var _fun49211_ip = 0;;) switch (_fun49211_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = _closure1_slot9;
                var3 = var2[var0];
                var0 = null;
                if (!(var0 == var3)) {
                    _fun49211_ip = 23;
                    continue _fun49211
                }
            case 21:
                var3 = {};
            case 23:
                var4 = var0 == var3;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun49211_ip = 40;
                    continue _fun49211
                }
            case 34:
                var2 = var3.pendingPrimaryGuildId;
            case 40:
                if (!(var0 !== var2)) {
                    _fun49211_ip = 80;
                    continue _fun49211
                }
            case 44:
                var3 = _closure1_slot14;
                var2 = _closure1_slot9;
                var1 = {};
                var5 = var3[var2];
                var6 = var1;
                var4 = copyDataProperties(var6, var5);
                var4 = 'pendingPrimaryGuildId';
                var1[var4] = var0;
                var3[var2] = var1;
                return var0;
            case 80:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot25 = var8;
    var3 = function() {
        var3 = _closure1_slot20;
        var2 = {};
        var0 = 'USER_SETTINGS_RESET_ALL_PENDING';
        var2.type = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot23;
        var2 = var2.bind(var0)();
        var1 = _closure1_slot19;
        var1 = var1.bind(var0)();
        return var0;
    };
    var0 = global;
    var17 = var0.Object;
    var7 = var17.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var17)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var1 = var7.BIO_MAX_LENGTH;
    var _closure1_slot7 = var1;
    var1 = var7.FormStates;
    var _closure1_slot8 = var1;
    var17 = var7.ME;
    var _closure1_slot9 = var17;
    var7 = var7.UserSettingsSections;
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var17 = {};
    var _closure1_slot13 = var17;
    var17 = {};
    var _closure1_slot14 = var17;
    var _closure1_slot15 = var7;
    var1 = var1.CLOSED;
    var _closure1_slot16 = var1;
    var1 = {};
    var _closure1_slot17 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var14
        var3 = function() {
            _fun49214: for (var _fun49214_ip = 0;;) switch (_fun49214_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun49214_ip = 69;
                        continue _fun49214
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun49214_ip = 105;
                    continue _fun49214;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'getFormState';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getErrors';
        var4.key = var6;
        var6 = function arg0() {
            _fun49216: for (var _fun49216_ip = 0;;) switch (_fun49216_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot17;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun49216_ip = 20;
                        continue _fun49216
                    }
                case 16:
                    var3 = _closure1_slot9;
                case 20:
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun49216_ip = 32;
                        continue _fun49216
                    }
                case 28:
                    var0 = _closure1_slot13;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPendingChanges';
        var4.key = var6;
        var6 = function arg0() {
            _fun49217: for (var _fun49217_ip = 0;;) switch (_fun49217_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot14;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun49217_ip = 20;
                        continue _fun49217
                    }
                case 16:
                    var3 = _closure1_slot9;
                case 20:
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun49217_ip = 32;
                        continue _fun49217
                    }
                case 28:
                    var0 = _closure1_slot11;
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getTryItOutChanges';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'showNotice';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.getPendingChanges;
            var0 = arg0;
            var2 = var1.bind(var2)(var0);
            var0 = global;
            var1 = var0.Object;
            var0 = var1.values;
            var2 = var0.bind(var1)(var2);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var1 = undefined;
                var0 = arg0;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'canSubmit';
        var4.key = var6;
        var5 = function arg0() {
            _fun49221: for (var _fun49221_ip = 0;;) switch (_fun49221_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getPendingChanges;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var2 = var1.pendingBio;
                    var0 = undefined;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun49221_ip = 54;
                        continue _fun49221
                    }
                case 32:
                    var1 = var1.pendingBio;
                    var2 = var1.length;
                    var1 = _closure1_slot7;
                    var0 = var2 > var1;
                case 54:
                    var0 = !var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserProfileSettingsStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var20 = var6.bind(var0)(var1);
    var1 = {};
    var1.USER_SETTINGS_ACCOUNT_INIT = var16;
    var1.USER_SETTINGS_MODAL_INIT = var16;
    var1.USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS = var16;
    var16 = function arg0() {
        _fun49222: for (var _fun49222_ip = 0;;) switch (_fun49222_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.section;
                var0 = _closure1_slot10;
                var0 = var0.ACCOUNT;
                if (!(var2 === var0)) {
                    _fun49222_ip = 49;
                    continue _fun49222
                }
            case 25:
                var0 = _closure1_slot8;
                var0 = var0.OPEN;
                _closure1_slot16 = var0;
                var0 = {};
                _closure1_slot17 = var0;
                var0 = undefined;
                return var0;
            case 49:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_SET_SECTION = var16;
    var1.USER_SETTINGS_ACCOUNT_CLOSE = var15;
    var1.USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM = var3;
    var15 = function() {
        var0 = _closure1_slot8;
        var0 = var0.SUBMITTING;
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SUBMIT = var15;
    var15 = function arg0() {
        _fun49224: for (var _fun49224_ip = 0;;) switch (_fun49224_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.errors;
                var4 = _closure1_slot16;
                var0 = _closure1_slot8;
                var0 = var0.SUBMITTING;
                if (!(var4 === var0)) {
                    _fun49224_ip = 79;
                    continue _fun49224
                }
            case 35:
                var0 = _closure1_slot8;
                var0 = var0.OPEN;
                _closure1_slot16 = var0;
                var0 = _closure1_slot17;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun49224_ip = 63;
                    continue _fun49224
                }
            case 59:
                var2 = _closure1_slot9;
            case 63:
                if (!(var4 == var1)) {
                    _fun49224_ip = 71;
                    continue _fun49224
                }
            case 67:
                var1 = _closure1_slot13;
            case 71:
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE = var15;
    var15 = function arg0() {
        _fun49225: for (var _fun49225_ip = 0;;) switch (_fun49225_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var5 = var0.avatar;
                var3 = _closure1_slot14;
                var7 = null;
                var1 = var6;
                if (!(var7 == var6)) {
                    _fun49225_ip = 34;
                    continue _fun49225
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var4 = _closure1_slot14;
                if (!(var7 == var6)) {
                    _fun49225_ip = 48;
                    continue _fun49225
                }
            case 44:
                var6 = _closure1_slot9;
            case 48:
                var8 = var4[var6];
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var4 = 'pendingAvatar';
                var0[var4] = var5;
                var3[var1] = var0;
                var1 = {};
                var8 = _closure1_slot15;
                var9 = var1;
                var0 = copyDataProperties(var9, var8);
                var0 = undefined;
                var3 = 'tryItOutAvatar';
                var1[var3] = var0;
                _closure1_slot15 = var1;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR = var15;
    var15 = function arg0() {
        var0 = arg0;
        var4 = var0.globalName;
        var2 = _closure1_slot14;
        var1 = _closure1_slot9;
        var0 = {};
        var5 = var2[var1];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = 'pendingGlobalName';
        var0[var3] = var4;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME = var15;
    var15 = function arg0() {
        var0 = arg0;
        var4 = var0.legacyUsernameDisabled;
        var2 = _closure1_slot14;
        var1 = _closure1_slot9;
        var0 = {};
        var5 = var2[var1];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = 'pendingLegacyUsernameDisabled';
        var0[var3] = var4;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED = var15;
    var15 = function arg0() {
        _fun49228: for (var _fun49228_ip = 0;;) switch (_fun49228_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var4 = var0.item;
                var2 = var4.type;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 6;
                var1 = var0[var5];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var2 !== var1)) {
                    _fun49228_ip = 274;
                    continue _fun49228
                }
            case 62:
                var2 = var4.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var2 !== var1)) {
                    _fun49228_ip = 209;
                    continue _fun49228
                }
            case 100:
                var2 = var4.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var0)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var2 === var1)) {
                    _fun49228_ip = 334;
                    continue _fun49228
                }
            case 141:
                var3 = _closure1_slot14;
                var9 = null;
                var2 = var6;
                if (!(var9 == var6)) {
                    _fun49228_ip = 158;
                    continue _fun49228
                }
            case 154:
                var2 = _closure1_slot9;
            case 158:
                var1 = {};
                var8 = _closure1_slot14;
                var5 = var6;
                if (!(var9 == var6)) {
                    _fun49228_ip = 175;
                    continue _fun49228
                }
            case 171:
                var5 = _closure1_slot9;
            case 175:
                var10 = var8[var5];
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var8 = var4.value;
                var5 = 'pendingNameplate';
                var1[var5] = var8;
                var3[var2] = var1;
                _fun49228_ip = 334;
                continue _fun49228;
            case 209:
                var3 = _closure1_slot14;
                var9 = null;
                var2 = var6;
                if (!(var9 == var6)) {
                    _fun49228_ip = 226;
                    continue _fun49228
                }
            case 222:
                var2 = _closure1_slot9;
            case 226:
                var1 = {};
                var8 = _closure1_slot14;
                var5 = var6;
                if (!(var9 == var6)) {
                    _fun49228_ip = 243;
                    continue _fun49228
                }
            case 239:
                var5 = _closure1_slot9;
            case 243:
                var10 = var8[var5];
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var8 = var4.value;
                var5 = 'pendingProfileEffect';
                var1[var5] = var8;
                var3[var2] = var1;
                _fun49228_ip = 334;
                continue _fun49228;
            case 274:
                var3 = _closure1_slot14;
                var8 = null;
                var2 = var6;
                if (!(var8 == var6)) {
                    _fun49228_ip = 291;
                    continue _fun49228
                }
            case 287:
                var2 = _closure1_slot9;
            case 291:
                var1 = {};
                var5 = _closure1_slot14;
                if (!(var8 == var6)) {
                    _fun49228_ip = 305;
                    continue _fun49228
                }
            case 301:
                var6 = _closure1_slot9;
            case 305:
                var10 = var5[var6];
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var5 = var4.value;
                var4 = 'pendingAvatarDecoration';
                var1[var4] = var5;
                var3[var2] = var1;
            case 334:
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM = var15;
    var15 = function arg0() {
        _fun49229: for (var _fun49229_ip = 0;;) switch (_fun49229_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.banner;
                var2 = _closure1_slot14;
                var7 = null;
                var1 = var5;
                if (!(var7 == var5)) {
                    _fun49229_ip = 34;
                    continue _fun49229
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var3 = _closure1_slot14;
                if (!(var7 == var5)) {
                    _fun49229_ip = 48;
                    continue _fun49229
                }
            case 44:
                var5 = _closure1_slot9;
            case 48:
                var8 = var3[var5];
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'pendingBanner';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER = var15;
    var15 = function arg0() {
        _fun49230: for (var _fun49230_ip = 0;;) switch (_fun49230_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.bio;
                var2 = _closure1_slot14;
                var7 = null;
                var1 = var5;
                if (!(var7 == var5)) {
                    _fun49230_ip = 34;
                    continue _fun49230
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var3 = _closure1_slot14;
                if (!(var7 == var5)) {
                    _fun49230_ip = 48;
                    continue _fun49230
                }
            case 44:
                var5 = _closure1_slot9;
            case 48:
                var8 = var3[var5];
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'pendingBio';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_BIO = var15;
    var15 = function arg0() {
        _fun49231: for (var _fun49231_ip = 0;;) switch (_fun49231_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.pronouns;
                var2 = _closure1_slot14;
                var7 = null;
                var1 = var5;
                if (!(var7 == var5)) {
                    _fun49231_ip = 34;
                    continue _fun49231
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var3 = _closure1_slot14;
                if (!(var7 == var5)) {
                    _fun49231_ip = 48;
                    continue _fun49231
                }
            case 44:
                var5 = _closure1_slot9;
            case 48:
                var8 = var3[var5];
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'pendingPronouns';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS = var15;
    var15 = function arg0() {
        var0 = arg0;
        var4 = var0.color;
        var2 = _closure1_slot14;
        var1 = _closure1_slot9;
        var0 = {};
        var5 = var2[var1];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = 'pendingAccentColor';
        var0[var3] = var4;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR = var15;
    var15 = function arg0() {
        _fun49233: for (var _fun49233_ip = 0;;) switch (_fun49233_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.themeColors;
                var2 = _closure1_slot14;
                var7 = null;
                var1 = var5;
                if (!(var7 == var5)) {
                    _fun49233_ip = 34;
                    continue _fun49233
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var3 = _closure1_slot14;
                if (!(var7 == var5)) {
                    _fun49233_ip = 48;
                    continue _fun49233
                }
            case 44:
                var5 = _closure1_slot9;
            case 48:
                var8 = var3[var5];
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'pendingThemeColors';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.avatar;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutAvatar';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.avatarDecoration;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutAvatarDecoration';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.profileEffect;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutProfileEffect';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.banner;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutBanner';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.themeColors;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutThemeColors';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.displayNameStyles;
        var1 = {};
        var4 = _closure1_slot15;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'tryItOutDisplayNameStyles';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES = var15;
    var15 = function arg0() {
        var0 = arg0;
        var6 = var0.banner;
        var5 = var0.themeColors;
        var4 = var0.avatarDecoration;
        var3 = var0.displayNameStyles;
        var1 = {};
        var7 = _closure1_slot15;
        var8 = var1;
        var2 = copyDataProperties(var8, var7);
        var2 = 'tryItOutBanner';
        var1[var2] = var6;
        var2 = 'tryItOutThemeColors';
        var1[var2] = var5;
        var2 = 'tryItOutAvatarDecoration';
        var1[var2] = var4;
        var2 = 'tryItOutDisplayNameStyles';
        var1[var2] = var3;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET = var15;
    var15 = function arg0() {
        var0 = arg0;
        var4 = var0.primaryGuildId;
        var2 = _closure1_slot14;
        var1 = _closure1_slot9;
        var0 = {};
        var5 = var2[var1];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = 'pendingPrimaryGuildId';
        var0[var3] = var4;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID = var15;
    var15 = function arg0() {
        _fun49242: for (var _fun49242_ip = 0;;) switch (_fun49242_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.displayNameStyles;
                var2 = _closure1_slot14;
                var7 = null;
                var1 = var5;
                if (!(var7 == var5)) {
                    _fun49242_ip = 34;
                    continue _fun49242
                }
            case 30:
                var1 = _closure1_slot9;
            case 34:
                var0 = {};
                var3 = _closure1_slot14;
                if (!(var7 == var5)) {
                    _fun49242_ip = 48;
                    continue _fun49242
                }
            case 44:
                var5 = _closure1_slot9;
            case 48:
                var8 = var3[var5];
                var9 = var0;
                var3 = copyDataProperties(var9, var8);
                var3 = 'pendingDisplayNameStyles';
                var0[var3] = var4;
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES = var15;
    var14 = function arg0() {
        _fun49243: for (var _fun49243_ip = 0;;) switch (_fun49243_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot17;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun49243_ip = 25;
                    continue _fun49243
                }
            case 21:
                var2 = _closure1_slot9;
            case 25:
                var0 = {};
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_CLEAR_ERRORS = var14;
    var1.USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES = var13;
    var1.USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES = var12;
    var1.USER_SETTINGS_RESET_ALL_PENDING = var11;
    var1.USER_SETTINGS_RESET_ALL_TRY_IT_OUT = var10;
    var1.USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED = var9;
    var1.USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES = var8;
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var21 = var3;
    var19 = var1;
    var1 = new var21[var7](var20, var19, var18);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/UserProfileSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 3493, 566, 806, 2]);