// modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: YouStatusRadioGroup, environment: var1
        var0 = function() { // Original name: useStatusRadioRowProps, environment: var4
            var3 = _closure1_slot4;
            var2 = var3.useMemo;
            var1 = function() { // Environment: var0
                var1 = {};
                var7 = _closure1_slot18;
                var4 = _closure1_slot0;
                var9 = _closure1_slot3;
                var3 = 13;
                var0 = var9[var3];
                var6 = undefined;
                var0 = var4.bind(var6)(var0);
                var5 = var0.TableRowIcon;
                var0 = {};
                var8 = _closure1_slot1;
                var10 = 14;
                var10 = var9[var10];
                var10 = var8.bind(var6)(var10);
                var0.source = var10;
                var10 = 'text-status-online';
                var0.variant = var10;
                var0 = var7.bind(var6)(var5, var0);
                var1.icon = var0;
                var0 = _closure1_slot15;
                var0 = var0.ONLINE;
                var1.value = var0;
                var0 = new Array(4);
                var0[0] = var1;
                var1 = {};
                var10 = _closure1_slot18;
                var5 = var9[var3];
                var5 = var4.bind(var6)(var5);
                var7 = var5.TableRowIcon;
                var5 = {};
                var11 = 15;
                var11 = var9[var11];
                var11 = var8.bind(var6)(var11);
                var5.source = var11;
                var11 = 'text-status-idle';
                var5.variant = var11;
                var5 = var10.bind(var6)(var7, var5);
                var1.icon = var5;
                var5 = _closure1_slot15;
                var5 = var5.IDLE;
                var1.value = var5;
                var0[1] = var1;
                var1 = {};
                var10 = _closure1_slot18;
                var5 = var9[var3];
                var5 = var4.bind(var6)(var5);
                var7 = var5.TableRowIcon;
                var5 = {};
                var11 = 16;
                var11 = var9[var11];
                var11 = var8.bind(var6)(var11);
                var5.source = var11;
                var11 = 'text-status-dnd';
                var5.variant = var11;
                var5 = var10.bind(var6)(var7, var5);
                var1.icon = var5;
                var5 = _closure1_slot15;
                var5 = var5.DND;
                var1.value = var5;
                var0[2] = var1;
                var1 = {};
                var5 = _closure1_slot18;
                var3 = var9[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.TableRowIcon;
                var3 = {};
                var7 = 17;
                var7 = var9[var7];
                var7 = var8.bind(var6)(var7);
                var3.source = var7;
                var7 = 'text-status-offline';
                var3.variant = var7;
                var3 = var5.bind(var6)(var4, var3);
                var1.icon = var3;
                var2 = _closure1_slot15;
                var2 = var2.INVISIBLE;
                var1.value = var2;
                var0[3] = var1;
                return var0;
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3 = undefined;
        var6 = var0.bind(var3)();
        var11 = _closure1_slot0;
        var12 = _closure1_slot3;
        var1 = 18;
        var2 = var12[var1];
        var2 = var11.bind(var3)(var2);
        var5 = var2.StatusSetting;
        var2 = var5.useSetting;
        var5 = var2.bind(var5)();
        var _closure2_slot0 = var5;
        var1 = var12[var1];
        var1 = var11.bind(var3)(var1);
        var2 = var1.StatusExpiresAtSetting;
        var1 = var2.useSetting;
        var1 = var1.bind(var2)();
        var _closure2_slot1 = var1;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var4
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var0 = 19;
            var1 = var3[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var1 = {};
            var5 = _closure2_slot0;
            var1.prevStatus = var5;
            var5 = arg0;
            var1.nextStatus = var5;
            var1 = var4.bind(var0)(var1);
            var1 = 20;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var7 = var7.bind(var8)(var1, var2);
        var2 = _closure1_slot18;
        var0 = 21;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.TableRadioGroup;
        var0 = {};
        var8 = 22;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["0DPAZH"];
        var8 = var9.bind(var10)(var8);
        var0.title = var8;
        var0.onChange = var7;
        var0.defaultValue = var5;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            _fun103311: for (var _fun103311_ip = 0;;) switch (_fun103311_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot18;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 23;
                    var1 = var8[var1];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var18 = var1;
                    var17 = var0;
                    var6 = copyDataProperties(var18, var17);
                    var6 = 24;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.getStatusLabel;
                    var6 = var0.value;
                    var7 = var7.bind(var8)(var6);
                    var6 = 'label';
                    var1[var6] = var7;
                    var8 = var0.value;
                    var7 = _closure2_slot0;
                    var6 = undefined;
                    if (!(var8 === var7)) {
                        _fun103311_ip = 297;
                        continue _fun103311
                    }
                case 108:
                    var8 = _closure2_slot1;
                    var7 = null;
                    var7 = var7 != var8;
                    var6 = undefined;
                    if (!var7) {
                        _fun103311_ip = 297;
                        continue _fun103311
                    }
                case 126:
                    var8 = _closure2_slot1;
                    var7 = '0';
                    var6 = undefined;
                    if (!(var7 !== var8)) {
                        _fun103311_ip = 297;
                        continue _fun103311
                    }
                case 145:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var10 = 22;
                    var5 = var14[var10];
                    var5 = var11.bind(var3)(var5);
                    var9 = var5.intl;
                    var8 = var9.formatToPlainString;
                    var5 = var14[var10];
                    var5 = var11.bind(var3)(var5);
                    var5 = var5.t;
                    var7 = var5.BWD8fs;
                    var5 = {};
                    var13 = global;
                    var15 = var13.Date;
                    var13 = var13.Number;
                    var12 = _closure2_slot1;
                    var18 = var13.bind(var3)(var12);
                    var13 = var15.prototype;
                    var13 = Object.create(var13, {
                        constructor: {
                            value: var15
                        }
                    });
                    var19 = var13;
                    var12 = new var19[var15](var18, var17);
                    var13 = var12 instanceof Object ? var12 : var13;
                    var12 = var13.toLocaleString;
                    var10 = var14[var10];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.intl;
                    var11 = var10.currentLocale;
                    var10 = {
                        'month': 'numeric',
                        'day': 'numeric',
                        'hour': 'numeric',
                        'minute': '2-digit'
                    };
                    var10 = var12.bind(var13)(var11, var10);
                    var5.endTime = var10;
                    var6 = var8.bind(var9)(var7, var5);
                case 297:
                    var5 = 'subLabel';
                    var1[var5] = var6;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: ThemeRadioGroup, environment: var1
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var1 = 25;
        var1 = var16[var1];
        var3 = undefined;
        var5 = var15.bind(var3)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot8;
            var0 = var0.theme;
            return var0;
        };
        var7 = var4.bind(var5)(var2, var1);
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            _fun103314: for (var _fun103314_ip = 0;;) switch (_fun103314_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot16;
                    var0 = var0.MIDNIGHT;
                    if (!(var3 === var0)) {
                        _fun103314_ip = 55;
                        continue _fun103314
                    }
                case 20:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 26;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.setShouldSyncAppearanceSettings;
                    var0 = false;
                    var0 = var2.bind(var4)(var0);
                case 55:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 27;
                    var2 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var2);
                    var2 = var6.resetBackgroundGradientPreset;
                    var2 = var2.bind(var6)();
                    var2 = 28;
                    var2 = var4[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.resetCustomTheme;
                    var2 = var2.bind(var5)();
                    var2 = _closure1_slot1;
                    var1 = 26;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateTheme;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0 = new Array(0);
        var8 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot18;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = _closure1_slot19;
        var4 = 21;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.TableRadioGroup;
        var4 = {};
        var12 = 22;
        var9 = var16[var12];
        var9 = var15.bind(var3)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var16[var12];
        var9 = var15.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.Ksh3ik;
        var9 = var10.bind(var13)(var9);
        var4.title = var9;
        var4.onChange = var8;
        var4.defaultValue = var7;
        var10 = _closure1_slot18;
        var8 = 23;
        var7 = var16[var8];
        var7 = var15.bind(var3)(var7);
        var9 = var7.TableRadioRow;
        var7 = {};
        var17 = _closure1_slot18;
        var13 = 29;
        var13 = var16[var13];
        var13 = var15.bind(var3)(var13);
        var14 = var13.ThemeLightIcon;
        var13 = {};
        var13 = var17.bind(var3)(var14, var13);
        var7.icon = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.K2sFfo;
        var13 = var14.bind(var17)(var13);
        var7.label = var13;
        var13 = _closure1_slot16;
        var13 = var13.LIGHT;
        var7.value = var13;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var13 = _closure1_slot18;
        var9 = var16[var8];
        var9 = var15.bind(var3)(var9);
        var10 = var9.TableRadioRow;
        var9 = {};
        var18 = _closure1_slot18;
        var14 = 30;
        var14 = var16[var14];
        var14 = var15.bind(var3)(var14);
        var17 = var14.ThemeDarkIcon;
        var14 = {};
        var14 = var18.bind(var3)(var17, var14);
        var9.icon = var14;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.string;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.b8Cei3;
        var14 = var17.bind(var18)(var14);
        var9.label = var14;
        var14 = _closure1_slot16;
        var14 = var14.DARKER;
        var9.value = var14;
        var9 = var13.bind(var3)(var10, var9);
        var7[1] = var9;
        var10 = _closure1_slot18;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.TableRadioRow;
        var8 = {};
        var17 = _closure1_slot18;
        var13 = 31;
        var13 = var16[var13];
        var13 = var15.bind(var3)(var13);
        var14 = var13.ThemeMidnightIcon;
        var13 = {};
        var13 = var17.bind(var3)(var14, var13);
        var8.icon = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.pQwSpQ;
        var12 = var13.bind(var14)(var12);
        var8.label = var12;
        var11 = _closure1_slot16;
        var11 = var11.MIDNIGHT;
        var8.value = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: YouAccountRadioGroup, environment: var1
        _fun103315: for (var _fun103315_ip = 0;;) switch (_fun103315_ip) {
            case 0:
                var0 = _closure1_slot20;
                var4 = undefined;
                var13 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 25;
                var0 = var2[var0];
                var7 = var1.bind(var4)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var9
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var5.bind(var7)(var3, var0);
                var _closure2_slot0 = var10;
                var0 = 34;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useMultiAccountUsers;
                var0 = var0.bind(var1)();
                var0 = var0.multiAccountUsers;
                var _closure2_slot1 = var0;
                var1 = function(arg0) { // Original name: useAccountRadioRowProps, environment: var9
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.useStateFromStores;
                    var2 = _closure1_slot11;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.hidePersonalInformation;
                        return var0;
                    };
                    var4 = var4.bind(var6)(var3, var2);
                    var _closure3_slot1 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            _fun103320: for (var _fun103320_ip = 0;;) switch (_fun103320_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = _closure1_slot9;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var13 = var1;
                                    var12 = var2;
                                    var0 = new var13[var0](var12, var11);
                                    var8 = var0 instanceof Object ? var0 : var1;
                                    var0 = _closure3_slot1;
                                    var1 = null;
                                    if (var0) {
                                        _fun103320_ip = 88;
                                        continue _fun103320
                                    }
                                case 45:
                                    var0 = var8.hasUniqueUsername;
                                    var0 = var0.bind(var8)();
                                    var1 = null;
                                    if (var0) {
                                        _fun103320_ip = 88;
                                        continue _fun103320
                                    }
                                case 60:
                                    var4 = var8.discriminator;
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var0 = '#';
                                    var1 = var3.bind(var0)(var4);
                                case 88:
                                    var0 = {};
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot3;
                                    var3 = 32;
                                    var3 = var4[var3];
                                    var4 = undefined;
                                    var7 = var5.bind(var4)(var3);
                                    var5 = var7.getUserTag;
                                    var3 = {};
                                    var10 = 'username';
                                    var3.mode = var10;
                                    var10 = _closure3_slot1;
                                    var9 = 'always';
                                    if (!var10) {
                                        _fun103320_ip = 145;
                                        continue _fun103320
                                    }
                                case 139:
                                    var9 = 'never';
                                case 145:
                                    var3.identifiable = var9;
                                    var3 = var5.bind(var7)(var8, var3);
                                    var0.label = var3;
                                    var2 = var2.id;
                                    var0.value = var2;
                                    var0.subLabel = var1;
                                    var3 = _closure1_slot18;
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var5 = 33;
                                    var1 = var7[var5];
                                    var2 = var2.bind(var4)(var1);
                                    var1 = {};
                                    var1.user = var8;
                                    var1.guildId = var4;
                                    var6 = _closure1_slot0;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var4)(var5);
                                    var5 = var5.AvatarSizes;
                                    var5 = var5.REFRESH_MEDIUM_32;
                                    var1.size = var5;
                                    var1 = var3.bind(var4)(var2, var1);
                                    var0.icon = var1;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var11 = var1.bind(var4)(var0);
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = null;
                var7 = var0 == var10;
                var1 = undefined;
                if (var7) {
                    _fun103315_ip = 146;
                    continue _fun103315
                }
            case 141:
                var1 = var10.id;
            case 146:
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var9
                    _fun103321: for (var _fun103321_ip = 0;;) switch (_fun103321_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var0 = _closure2_slot0;
                            var1 = null;
                            var6 = var1 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun103321_ip = 38;
                                continue _fun103321
                            }
                        case 29:
                            var6 = _closure2_slot0;
                            var4 = var6.id;
                        case 38:
                            if (!(var5 !== var4)) {
                                _fun103321_ip = 300;
                                continue _fun103321
                            }
                        case 45:
                            var4 = _closure2_slot1;
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            if (!(var1 != var2)) {
                                _fun103321_ip = 300;
                                continue _fun103321
                            }
                        case 73:
                            var4 = var2.tokenStatus;
                            var3 = _closure1_slot7;
                            var3 = var3.INVALID;
                            if (!(var4 !== var3)) {
                                _fun103321_ip = 220;
                                continue _fun103321
                            }
                        case 99:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 36;
                            var3 = var5[var3];
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.track;
                            var3 = _closure1_slot13;
                            var6 = var3.MULTI_ACCOUNT_SWITCH_ATTEMPT;
                            var3 = {};
                            var9 = 37;
                            var9 = var5[var9];
                            var9 = var4.bind(var0)(var9);
                            var9 = var9.YOU_ACCOUNT_ACTION_SHEET;
                            var3.location = var9;
                            var3 = var7.bind(var8)(var6, var3);
                            var3 = 20;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot2;
                            var3 = 38;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.switchAccount;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            _fun103321_ip = 300;
                            continue _fun103321;
                        case 220:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 35;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var2 = _closure1_slot14;
                            var2 = var2.LOGIN;
                            var2 = var5.bind(var0)(var2);
                            var2 = 36;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot13;
                            var2 = var1.LOGIN_VIEWED;
                            var1 = {};
                            var5 = 'you_account_action_sheet';
                            var1.source = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 300:
                            return var0;
                    }
                };
                var12 = var3.bind(var5)(var1, var2);
                var1 = var0 == var10;
                var0 = null;
                if (var1) {
                    _fun103315_ip = 508;
                    continue _fun103315
                }
            case 175:
                var3 = _closure1_slot19;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var13.account;
                var1.style = var5;
                var8 = _closure1_slot18;
                var7 = _closure1_slot5;
                var5 = {};
                var13 = var13.manage;
                var5.style = var13;
                var18 = _closure1_slot18;
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var13 = 39;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var15 = var13.PressableOpacity;
                var14 = {};
                var13 = function() { // Original name: onPress, environment: var9
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 35;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var2.bind(var1)(var0);
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14.onPress = var13;
                var21 = _closure1_slot18;
                var13 = 40;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var20 = var13.Text;
                var19 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-link'
                };
                var13 = 22;
                var22 = var17[var13];
                var22 = var16.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var17[var13];
                var22 = var16.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.HxrBOZ;
                var22 = var23.bind(var24)(var22);
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var14.children = var19;
                var14 = var18.bind(var4)(var15, var14);
                var5.children = var14;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot18;
                var6 = 21;
                var6 = var17[var6];
                var6 = var16.bind(var4)(var6);
                var7 = var6.TableRadioGroup;
                var6 = {};
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.oMNyYN;
                var13 = var14.bind(var15)(var13);
                var6.title = var13;
                var6.onChange = var12;
                var10 = var10.id;
                var6.defaultValue = var10;
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var8 = var1;
                    var7 = var0;
                    var5 = copyDataProperties(var8, var7);
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 508:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() { // Original name: FocusModeSetting, environment: var1
        _fun103325: for (var _fun103325_ip = 0;;) switch (_fun103325_ip) {
            case 0:
                var0 = _closure1_slot20;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 41;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useFocusModeEnabled;
                var8 = var0.bind(var3)();
                var0 = 18;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.FocusModeExpiresAtSetting;
                var0 = var3.useSetting;
                var16 = var0.bind(var3)();
                var0 = 42;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var2 = var0.QuietModeExperiment;
                var1 = var2.useExperiment;
                var0 = {};
                var3 = 'you action sheet';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.allowQuietMode;
                if (var0) {
                    _fun103325_ip = 129;
                    continue _fun103325
                }
            case 121:
                var0 = null;
                if (!var8) {
                    _fun103325_ip = 639;
                    continue _fun103325
                }
            case 129:
                var3 = _closure1_slot18;
                var13 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 43;
                var1 = var10[var1];
                var1 = var13.bind(var4)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var7 = _closure1_slot18;
                var5 = 44;
                var5 = var10[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var17 = 22;
                var11 = var10[var17];
                var11 = var13.bind(var4)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var10[var17];
                var11 = var13.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.wCxBOc;
                var11 = var12.bind(var14)(var11);
                var5.accessibilityLabel = var11;
                var11 = var10[var17];
                var11 = var13.bind(var4)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var10[var17];
                var11 = var13.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.wCxBOc;
                var11 = var12.bind(var14)(var11);
                var5.accessibilityHint = var11;
                var14 = _closure1_slot18;
                var11 = 45;
                var11 = var10[var11];
                var11 = var13.bind(var4)(var11);
                var12 = var11.BellSlashIcon;
                var11 = {};
                var15 = var15.leadingIcon;
                var11.style = var15;
                var11 = var14.bind(var4)(var12, var11);
                var5.icon = var11;
                var11 = function(arg0) { // Original name: onValueChange, environment: var11
                    _fun103326: for (var _fun103326_ip = 0;;) switch (_fun103326_ip) {
                        case 0:
                            var0 = arg0;
                            if (var0) {
                                _fun103326_ip = 46;
                                continue _fun103326
                            }
                        case 9:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 41;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.setFocusMode;
                            var0 = false;
                            var0 = var2.bind(var3)(var0);
                            _fun103326_ip = 137;
                            continue _fun103326;
                        case 46:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot3;
                            var2 = 20;
                            var2 = var0[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 47;
                            var1 = var0[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = 46;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var5)(var1, var0);
                            var1 = {};
                            var0 = function(arg0, arg1) { // Original name: onSelect, environment: var0
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var0 = 41;
                                var4 = var3[var0];
                                var0 = undefined;
                                var7 = var2.bind(var0)(var4);
                                var6 = var7.setFocusMode;
                                var5 = arg0;
                                var4 = arg1;
                                var4 = var6.bind(var7)(var5, var4);
                                var4 = _closure1_slot1;
                                var1 = 20;
                                var1 = var3[var1];
                                var4 = var4.bind(var0)(var1);
                                var1 = var4.hideActionSheet;
                                var1 = var1.bind(var4)();
                                var1 = 48;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.showYouAccountActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1.onSelect = var0;
                            var0 = 'FocusModeOptionsActionSheet';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onValueChange = var11;
                var5.value = var8;
                var11 = var10[var17];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var17];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.wCxBOc;
                var10 = var11.bind(var12)(var10);
                var5.label = var10;
                if (!var8) {
                    _fun103325_ip = 414;
                    continue _fun103325
                }
            case 398:
                var8 = null;
                if (!(var8 != var16)) {
                    _fun103325_ip = 414;
                    continue _fun103325
                }
            case 404:
                var8 = '0';
                if (!(var8 === var16)) {
                    _fun103325_ip = 473;
                    continue _fun103325
                }
            case 414:
                var12 = _closure1_slot0;
                var8 = _closure1_slot3;
                var10 = var8[var17];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var8[var17];
                var8 = var12.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.i0nsoY;
                var8 = var10.bind(var11)(var8);
                _fun103325_ip = 618;
                continue _fun103325;
            case 473:
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var9 = var13[var17];
                var9 = var14.bind(var4)(var9);
                var12 = var9.intl;
                var11 = var12.formatToPlainString;
                var9 = var13[var17];
                var9 = var14.bind(var4)(var9);
                var9 = var9.t;
                var10 = var9.BWD8fs;
                var9 = {};
                var15 = global;
                var18 = var15.Date;
                var15 = var15.Number;
                var20 = var15.bind(var4)(var16);
                var16 = var18.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var18
                    }
                });
                var21 = var16;
                var15 = new var21[var18](var20, var19);
                var16 = var15 instanceof Object ? var15 : var16;
                var15 = var16.toLocaleString;
                var13 = var13[var17];
                var13 = var14.bind(var4)(var13);
                var13 = var13.intl;
                var14 = var13.currentLocale;
                var13 = {
                    'month': 'numeric',
                    'day': 'numeric',
                    'hour': 'numeric',
                    'minute': '2-digit'
                };
                var13 = var15.bind(var16)(var14, var13);
                var9.endTime = var13;
                var8 = var11.bind(var12)(var10, var9);
            case 618:
                var5.subLabel = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 639:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: CustomStatus, environment: var1
        _fun103328: for (var _fun103328_ip = 0;;) switch (_fun103328_ip) {
            case 0:
                var0 = _closure1_slot20;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 49;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCustomStatusActivity;
                var10 = var0.bind(var1)();
                var8 = null;
                var1 = var8 == var10;
                var0 = undefined;
                if (var1) {
                    _fun103328_ip = 61;
                    continue _fun103328
                }
            case 56:
                var0 = var10.state;
            case 61:
                var22 = var8 != var0;
                if (!var22) {
                    _fun103328_ip = 81;
                    continue _fun103328
                }
            case 68:
                var1 = var10.state;
                var0 = '';
                var22 = var0 !== var1;
            case 81:
                var1 = var8 == var10;
                var0 = undefined;
                if (var1) {
                    _fun103328_ip = 96;
                    continue _fun103328
                }
            case 90:
                var0 = var10.emoji;
            case 96:
                var0 = var8 != var0;
                if (var22) {
                    _fun103328_ip = 106;
                    continue _fun103328
                }
            case 103:
                var22 = var0;
            case 106:
                var2 = _closure1_slot18;
                var11 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 43;
                var0 = var7[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.TableRowGroup;
                var0 = {};
                var6 = _closure1_slot19;
                var4 = 50;
                var4 = var7[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.Card;
                var4 = {
                    'shadow': 'none',
                    'border': 'none'
                };
                var9 = var16.customStatusRow;
                var4.style = var9;
                var17 = _closure1_slot19;
                var9 = 39;
                var7 = var7[var9];
                var7 = var11.bind(var3)(var7);
                var11 = var7.PressableOpacity;
                var7 = {};
                var12 = var16.customStatusEditButton;
                var7.style = var12;
                var13 = 'button';
                var7.accessibilityRole = var13;
                var19 = _closure1_slot0;
                var18 = _closure1_slot3;
                var12 = 22;
                var20 = var18[var12];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var18[var12];
                var18 = var19.bind(var3)(var18);
                var19 = var18.t;
                if (var22) {
                    _fun103328_ip = 286;
                    continue _fun103328
                }
            case 273:
                var18 = var19["/UonHN"];
                var18 = var20.bind(var21)(var18);
                _fun103328_ip = 299;
                continue _fun103328;
            case 286:
                var19 = var19["2p9FMw"];
                var18 = var20.bind(var21)(var19);
            case 299:
                var7.accessibilityLabel = var18;
                var18 = undefined;
                if (!var22) {
                    _fun103328_ip = 413;
                    continue _fun103328
                }
            case 308:
                var20 = _closure1_slot0;
                var19 = _closure1_slot3;
                var21 = var19[var12];
                var21 = var20.bind(var3)(var21);
                var23 = var21.intl;
                var21 = var23.formatToPlainString;
                var19 = var19[var12];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.GE7QzY;
                var19 = {};
                var24 = var10.emoji;
                var26 = var8 == var24;
                var25 = undefined;
                if (var26) {
                    _fun103328_ip = 379;
                    continue _fun103328
                }
            case 374:
                var25 = var24.name;
            case 379:
                var26 = var8 != var25;
                var24 = '';
                if (!var26) {
                    _fun103328_ip = 393;
                    continue _fun103328
                }
            case 390:
                var24 = var25;
            case 393:
                var19.emoji = var24;
                var24 = var10.state;
                var19.status = var24;
                var18 = var21.bind(var23)(var20, var19);
            case 413:
                var7.accessibilityHint = var18;
                var18 = function() { // Original name: onPress, environment: var14
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var0 = 20;
                    var2 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot0;
                    var1 = 51;
                    var1 = var6[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEditCustomStatusModal;
                    var1 = {};
                    var4 = 'YouAccountActionSheet';
                    var1.location = var4;
                    var4 = 37;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.YOU_ACCOUNT_ACTION_SHEET;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.analyticsLocations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7.onPress = var18;
                var19 = var8 == var10;
                var18 = undefined;
                if (var19) {
                    _fun103328_ip = 444;
                    continue _fun103328
                }
            case 438:
                var18 = var10.emoji;
            case 444:
                if (!(var8 == var18)) {
                    _fun103328_ip = 506;
                    continue _fun103328
                }
            case 448:
                var20 = _closure1_slot18;
                var19 = _closure1_slot0;
                var21 = _closure1_slot3;
                var18 = 53;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.ReactionIcon;
                var18 = {};
                var21 = 'md';
                var18.size = var21;
                var21 = var16.leadingIcon;
                var18.style = var21;
                var19 = var20.bind(var3)(var19, var18);
                _fun103328_ip = 557;
                continue _fun103328;
            case 506:
                var21 = _closure1_slot18;
                var20 = _closure1_slot1;
                var23 = _closure1_slot3;
                var18 = 52;
                var18 = var23[var18];
                var20 = var20.bind(var3)(var18);
                var18 = {};
                var23 = var10.emoji;
                var18.emoji = var23;
                var23 = _closure1_slot17;
                var18.size = var23;
                var19 = var21.bind(var3)(var20, var18);
            case 557:
                var18 = new Array(2);
                var18[0] = var19;
                var21 = _closure1_slot18;
                var20 = _closure1_slot0;
                var23 = _closure1_slot3;
                var19 = 40;
                var19 = var23[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 2
                };
                if (var22) {
                    _fun103328_ip = 665;
                    continue _fun103328
                }
            case 611:
                var25 = _closure1_slot0;
                var22 = _closure1_slot3;
                var23 = var22[var12];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var12];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["/UonHN"];
                var22 = var23.bind(var24)(var22);
                _fun103328_ip = 670;
                continue _fun103328;
            case 665:
                var22 = var10.state;
            case 670:
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[1] = var19;
                var7.children = var18;
                var11 = var17.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var10 = var8 != var10;
                var8 = null;
                if (!var10) {
                    _fun103328_ip = 874;
                    continue _fun103328
                }
            case 714:
                var11 = _closure1_slot18;
                var18 = _closure1_slot0;
                var17 = _closure1_slot3;
                var9 = var17[var9];
                var9 = var18.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var14 = function(arg0) { // Original name: onPress, environment: var14
                    var1 = arg0;
                    var0 = var1.stopPropagation;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 54;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var14;
                var9.accessibilityRole = var13;
                var13 = var17[var12];
                var13 = var18.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var17[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.wfYTHe;
                var12 = var13.bind(var14)(var12);
                var9.accessibilityLabel = var12;
                var12 = var16.customStatusRemoveButton;
                var9.style = var12;
                var14 = _closure1_slot18;
                var13 = _closure1_slot6;
                var12 = {};
                var16 = var16.trailingIcon;
                var12.style = var16;
                var16 = _closure1_slot1;
                var15 = 55;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var12.source = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 874:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
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
    var6 = var6.bind(var0)(var3);
    var _closure1_slot4 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MultiAccountTokenStatus;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot13 = var7;
    var7 = var3.AuthStates;
    var _closure1_slot14 = var7;
    var7 = var3.StatusTypes;
    var _closure1_slot15 = var7;
    var3 = var3.ThemeTypes;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.TABLE_ROW_HEIGHT;
    var7 = var3.TABLE_ROW_ICON_SIZE;
    var _closure1_slot17 = var7;
    var11 = var3.TABLE_ROW_PADDING;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot18 = var7;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'relative';
    var9.position = var10;
    var3.account = var9;
    var9 = {
        'position': 'absolute',
        'right': 0,
        'zIndex': 100
    };
    var3.manage = var9;
    var9 = {
        'width': 24,
        'height': 24,
        'margin': 4
    };
    var3.leadingIcon = var9;
    var9 = {
        'tintColor': null,
        'width': 16,
        'height': 16
    };
    var10 = 12;
    var10 = var5[var10];
    var10 = var13.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var10;
    var3.trailingIcon = var9;
    var9 = {
        'padding': 0,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = 'center';
    var9.gap = var11;
    var3.customStatusRow = var9;
    var9 = {
        'minHeight': null,
        'padding': null,
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9.minHeight = var12;
    var9.padding = var11;
    var9.gap = var11;
    var3.customStatusEditButton = var9;
    var9 = {};
    var9.height = var12;
    var9.paddingHorizontal = var11;
    var9.alignItems = var10;
    var9.justifyContent = var10;
    var3.customStatusRemoveButton = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun103331: for (var _fun103331_ip = 0;;) switch (_fun103331_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.statusOnly;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun103331_ip = 17;
                    continue _fun103331
                }
            case 15:
                var8 = false;
            case 17:
                var5 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 56;
                var0 = var11[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.useMultiAccountMobile;
                var12 = var0.bind(var1)();
                var1 = _closure1_slot1;
                var0 = 57;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = 'theme_setting_in_account_sheet';
                var7 = var1.bind(var3)(var0);
                var0 = 25;
                var0 = var11[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var0 = var0.isDeveloper;
                    return var0;
                };
                var10 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot18;
                var0 = 58;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var0.startExpanded = var12;
                var6 = _closure1_slot18;
                var4 = 59;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var13 = _closure1_slot0;
                var16 = _closure1_slot3;
                var11 = 22;
                var14 = var16[var11];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var16[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.t;
                if (var8) {
                    _fun103331_ip = 252;
                    continue _fun103331
                }
            case 221:
                if (var12) {
                    _fun103331_ip = 239;
                    continue _fun103331
                }
            case 224:
                var11 = var13["qP/i6k"];
                var11 = var14.bind(var15)(var11);
                _fun103331_ip = 250;
                continue _fun103331;
            case 239:
                var16 = var13["ldCE/p"];
                var11 = var14.bind(var15)(var16);
            case 250:
                _fun103331_ip = 265;
                continue _fun103331;
            case 252:
                var13 = var13["3Uj+2p"];
                var11 = var14.bind(var15)(var13);
            case 265:
                var4.title = var11;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var4 = true;
                var0.showGradient = var4;
                var6 = _closure1_slot19;
                var5 = _closure1_slot0;
                var11 = _closure1_slot3;
                var4 = 60;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var11 = 24;
                var4.spacing = var11;
                var11 = var7;
                if (!var11) {
                    _fun103331_ip = 347;
                    continue _fun103331
                }
            case 331:
                var14 = _closure1_slot18;
                var13 = _closure1_slot22;
                var7 = {};
                var11 = var14.bind(var3)(var13, var7);
            case 347:
                var7 = new Array(6);
                var7[0] = var11;
                var14 = _closure1_slot18;
                var13 = _closure1_slot21;
                var11 = {};
                var11 = var14.bind(var3)(var13, var11);
                var7[1] = var11;
                var14 = _closure1_slot18;
                var13 = _closure1_slot24;
                var11 = {};
                var11 = var14.bind(var3)(var13, var11);
                var7[2] = var11;
                var14 = _closure1_slot18;
                var13 = _closure1_slot25;
                var11 = {};
                var11 = var14.bind(var3)(var13, var11);
                var7[3] = var11;
                var11 = !var8;
                if (!var11) {
                    _fun103331_ip = 424;
                    continue _fun103331
                }
            case 421:
                var11 = var12;
            case 424:
                if (!var11) {
                    _fun103331_ip = 443;
                    continue _fun103331
                }
            case 427:
                var14 = _closure1_slot18;
                var13 = _closure1_slot23;
                var12 = {};
                var11 = var14.bind(var3)(var13, var12);
            case 443:
                var7[4] = var11;
                var8 = !var8;
                if (!var8) {
                    _fun103331_ip = 456;
                    continue _fun103331
                }
            case 453:
                var8 = var10;
            case 456:
                if (!var8) {
                    _fun103331_ip = 503;
                    continue _fun103331
                }
            case 459:
                var11 = _closure1_slot18;
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 61;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'title': 'Developer Tools',
                    'embedded': true
                };
                var8 = var11.bind(var3)(var10, var9);
            case 503:
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 62;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10171, 3155, 1620, 10343, 3196, 1613, 660, 4826, 33, 1297, 671, 4861, 5720, 5717, 5718, 5719, 1348, 8680, 3237, 5379, 1234, 5378, 7835, 566, 7584, 10676, 10677, 10761, 10763, 10765, 3195, 5409, 13048, 13453, 795, 5536, 10175, 4858, 4832, 8679, 13457, 5320, 5373, 8711, 13458, 1307, 13450, 5625, 4856, 6938, 7754, 7636, 6948, 6625, 10170, 4549, 5164, 5167, 4033, 11325, 2]);