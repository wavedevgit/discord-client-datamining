// stores/UserSettingsModalStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun51934: for (var _fun51934_ip = 0;;) switch (_fun51934_ip) {
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
                _fun51934_ip = 74;
                continue _fun51934;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var10 = function arg0() {
        _fun51937: for (var _fun51937_ip = 0;;) switch (_fun51937_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot5;
                var1 = var3.getCurrentUser;
                var7 = var1.bind(var3)();
                var1 = null;
                if (!(var1 != var7)) {
                    _fun51937_ip = 330;
                    continue _fun51937
                }
            case 28:
                var3 = var2.section;
                if (!(var1 == var3)) {
                    _fun51937_ip = 41;
                    continue _fun51937
                }
            case 37:
                var3 = _closure1_slot9;
            case 41:
                _closure1_slot9 = var3;
                var3 = var2.subsection;
                var3 = var1 != var3;
                if (!var3) {
                    _fun51937_ip = 66;
                    continue _fun51937
                }
            case 58:
                var4 = _closure1_slot9;
                var3 = var1 != var4;
            case 66:
                if (!var3) {
                    _fun51937_ip = 87;
                    continue _fun51937
                }
            case 69:
                var5 = _closure1_slot10;
                var4 = _closure1_slot9;
                var3 = var2.subsection;
                var5[var4] = var3;
            case 87:
                var3 = var2.scrollPosition;
                var3 = var1 != var3;
                if (!var3) {
                    _fun51937_ip = 108;
                    continue _fun51937
                }
            case 100:
                var4 = _closure1_slot9;
                var3 = var1 != var4;
            case 108:
                if (!var3) {
                    _fun51937_ip = 129;
                    continue _fun51937
                }
            case 111:
                var5 = _closure1_slot11;
                var4 = _closure1_slot9;
                var3 = var2.scrollPosition;
                var5[var4] = var3;
            case 129:
                var3 = _closure1_slot6;
                var3 = var3.OPEN;
                _closure1_slot8 = var3;
                var3 = {};
                _closure1_slot12 = var3;
                var4 = {};
                var3 = _closure1_slot7;
                var5 = var3.ACCOUNT;
                var3 = {};
                var6 = var7.id;
                var3.userId = var6;
                var6 = var7.username;
                var3.username = var6;
                var6 = var7.discriminator;
                var3.discriminator = var6;
                var6 = var7.email;
                var3.email = var6;
                var6 = var7.avatar;
                var3.avatar = var6;
                var6 = '';
                var3.password = var6;
                var3.newPassword = var1;
                var6 = var7.isClaimed;
                var6 = var6.bind(var7)();
                var3.claimed = var6;
                var4[var5] = var3;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                _closure1_slot13 = var3;
                var4 = var2.analyticsLocation;
                var5 = var1 != var4;
                var3 = null;
                if (!var5) {
                    _fun51937_ip = 282;
                    continue _fun51937
                }
            case 279:
                var3 = var4;
            case 282:
                _closure1_slot14 = var3;
                var3 = var2.analyticsLocations;
                if (!(var1 == var3)) {
                    _fun51937_ip = 300;
                    continue _fun51937
                }
            case 296:
                var3 = new Array(0);
            case 300:
                _closure1_slot15 = var3;
                var2 = var2.searchParams;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun51937_ip = 322;
                    continue _fun51937
                }
            case 319:
                var1 = var2;
            case 322:
                _closure1_slot16 = var1;
                var1 = undefined;
                return var1;
            case 330:
                var1 = _closure1_slot19;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var10;
    var9 = function() {
        var0 = _closure1_slot6;
        var0 = var0.CLOSED;
        _closure1_slot8 = var0;
        var0 = null;
        _closure1_slot13 = var0;
        _closure1_slot9 = var0;
        var2 = {};
        _closure1_slot10 = var2;
        var2 = {};
        _closure1_slot11 = var2;
        _closure1_slot14 = var0;
        var2 = new Array(0);
        _closure1_slot15 = var2;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot19 = var9;
    var8 = function() {
        var0 = _closure1_slot6;
        var0 = var0.OPEN;
        _closure1_slot8 = var0;
        var0 = {};
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot20 = var8;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var1 = var7.FormStates;
    var _closure1_slot6 = var1;
    var7 = var7.UserSettingsSections;
    var _closure1_slot7 = var7;
    var1 = var1.CLOSED;
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var _closure1_slot13 = var1;
    var _closure1_slot14 = var1;
    var7 = new Array(0);
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun51941: for (var _fun51941_ip = 0;;) switch (_fun51941_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun51941_ip = 69;
                        continue _fun51941
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun51941_ip = 105;
                    continue _fun51941;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSubsection';
        var4.key = var6;
        var6 = function() {
            _fun51944: for (var _fun51944_ip = 0;;) switch (_fun51944_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun51944_ip = 28;
                        continue _fun51944
                    }
                case 16:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = var2[var1];
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getScrollPosition';
        var4.key = var6;
        var6 = function() {
            _fun51945: for (var _fun51945_ip = 0;;) switch (_fun51945_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun51945_ip = 28;
                        continue _fun51945
                    }
                case 16:
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot9;
                    var0 = var2[var1];
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAnalyticsLocation';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAnalyticsLocations';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getErrors';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSubmitting';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot8;
            var0 = _closure1_slot6;
            var0 = var0.SUBMITTING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getSettings';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getSearchParams';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserSettingsModalStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var11 = function arg0() {
        var2 = _closure1_slot18;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.USER_SETTINGS_MODAL_OPEN = var11;
    var1.USER_SETTINGS_MODAL_INIT = var10;
    var1.USER_SETTINGS_MODAL_CLOSE = var9;
    var1.LOGOUT = var9;
    var9 = function() {
        var0 = _closure1_slot6;
        var0 = var0.SUBMITTING;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_SETTINGS_MODAL_SUBMIT = var9;
    var9 = function arg0() {
        _fun51954: for (var _fun51954_ip = 0;;) switch (_fun51954_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = _closure1_slot6;
                var0 = var0.SUBMITTING;
                if (!(var2 === var0)) {
                    _fun51954_ip = 74;
                    continue _fun51954
                }
            case 21:
                var0 = _closure1_slot6;
                var0 = var0.OPEN;
                _closure1_slot8 = var0;
                var0 = _closure1_slot7;
                var0 = var0.ACCOUNT;
                _closure1_slot9 = var0;
                var0 = arg0;
                var0 = var0.errors;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun51954_ip = 66;
                    continue _fun51954
                }
            case 64:
                var0 = {};
            case 66:
                _closure1_slot12 = var0;
                var0 = undefined;
                return var0;
            case 74:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_SUBMIT_FAILURE = var9;
    var9 = function arg0() {
        _fun51955: for (var _fun51955_ip = 0;;) switch (_fun51955_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.section;
                _closure1_slot9 = var2;
                var3 = null;
                _closure1_slot14 = var3;
                var2 = var0.analyticsLocations;
                if (!(var3 == var2)) {
                    _fun51955_ip = 35;
                    continue _fun51955
                }
            case 31:
                var2 = new Array(0);
            case 35:
                _closure1_slot15 = var2;
                var2 = var0.subsection;
                if (!(var3 != var2)) {
                    _fun51955_ip = 67;
                    continue _fun51955
                }
            case 49:
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = var0.subsection;
                var2[var1] = var0;
            case 67:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_SET_SECTION = var9;
    var9 = function arg0() {
        _fun51956: for (var _fun51956_ip = 0;;) switch (_fun51956_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.forSection;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun51956_ip = 40;
                    continue _fun51956
                }
            case 15:
                var2 = _closure1_slot9;
                if (!(var3 != var2)) {
                    _fun51956_ip = 51;
                    continue _fun51956
                }
            case 26:
                var2 = _closure1_slot10;
                var0 = _closure1_slot9;
                var0 = delete var2[var0];
                _fun51956_ip = 51;
                continue _fun51956;
            case 40:
                var0 = _closure1_slot10;
                var0 = delete var0[var1];
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_CLEAR_SUBSECTION = var9;
    var9 = function arg0() {
        _fun51957: for (var _fun51957_ip = 0;;) switch (_fun51957_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.forSection;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun51957_ip = 40;
                    continue _fun51957
                }
            case 15:
                var2 = _closure1_slot9;
                if (!(var3 != var2)) {
                    _fun51957_ip = 51;
                    continue _fun51957
                }
            case 26:
                var2 = _closure1_slot11;
                var0 = _closure1_slot9;
                var0 = delete var2[var0];
                _fun51957_ip = 51;
                continue _fun51957;
            case 40:
                var0 = _closure1_slot11;
                var0 = delete var0[var1];
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION = var9;
    var9 = function arg0() {
        _fun51958: for (var _fun51958_ip = 0;;) switch (_fun51958_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.settings;
                var2 = _closure1_slot13;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun51958_ip = 28;
                    continue _fun51958
                }
            case 22:
                var1 = {};
                _closure1_slot13 = var1;
            case 28:
                var2 = _closure1_slot13;
                var1 = _closure1_slot7;
                var1 = var1.ACCOUNT;
                var5 = var2[var1];
                var2 = _closure1_slot13;
                var0 = _closure1_slot7;
                var1 = var0.ACCOUNT;
                var0 = {};
                var6 = var0;
                var4 = copyDataProperties(var6, var5);
                var6 = var0;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                var2[var1] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_UPDATE_ACCOUNT = var9;
    var1.USER_SETTINGS_MODAL_SUBMIT_COMPLETE = var8;
    var3 = function() {
        _fun51959: for (var _fun51959_ip = 0;;) switch (_fun51959_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = var1.getCurrentUser;
                var6 = var0.bind(var1)();
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var5 = null;
                if (!(var5 != var6)) {
                    _fun51959_ip = 147;
                    continue _fun51959
                }
            case 32:
                var3 = {};
                var1 = _closure1_slot7;
                var4 = var1.ACCOUNT;
                var1 = {};
                var7 = var6.id;
                var1.userId = var7;
                var7 = var6.username;
                var1.username = var7;
                var7 = var6.discriminator;
                var1.discriminator = var7;
                var7 = var6.email;
                var1.email = var7;
                var7 = var6.avatar;
                var1.avatar = var7;
                var7 = '';
                var1.password = var7;
                var1.newPassword = var5;
                var5 = var6.isClaimed;
                var5 = var5.bind(var6)();
                var1.claimed = var5;
                var3[var4] = var1;
                var1 = {};
                var9 = var1;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                _closure1_slot13 = var1;
            case 147:
                return var0;
        }
    };
    var1.USER_SETTINGS_MODAL_RESET = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/UserSettingsModalStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1613, 660, 566, 806, 2]);