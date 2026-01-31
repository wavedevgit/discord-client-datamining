// modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.calculateLocaleOptions;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot12 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot13 = var6;
    var6 = var3.GuildSettingsSections;
    var _closure1_slot14 = var6;
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var6 = var3.Fragment;
    var _closure1_slot17 = var6;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var3.flex = var9;
    var6.overview = var3;
    var3 = 24;
    var9 = {
        'marginTop': 24,
        'marginBottom': 0
    };
    var6.formCTAButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot19 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildSettingsModalCommunity, environment: var1
        _fun116211: for (var _fun116211_ip = 0;;) switch (_fun116211_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var2 = var0.onClose;
                var _closure2_slot1 = var2;
                var4 = undefined;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var0 = _closure1_slot19;
                var8 = var0.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var3 = var5.bind(var4)(var0);
                var0 = var3.useNavigation;
                var14 = var0.bind(var3)();
                var _closure2_slot2 = var14;
                var3 = 12;
                var0 = var6[var3];
                var10 = var5.bind(var4)(var0);
                var9 = var10.useStateFromStoresObject;
                var0 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var11
                    var1 = _closure1_slot10;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var9.bind(var10)(var7, var0);
                var12 = var0.submitting;
                var _closure2_slot3 = var12;
                var7 = var0.hasChanges;
                var _closure2_slot4 = var7;
                var0 = var0.guild;
                var _closure2_slot5 = var0;
                var9 = var6[var3];
                var16 = var5.bind(var4)(var9);
                var15 = var16.useStateFromStoresObject;
                var9 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var11
                    _fun116213: for (var _fun116213_ip = 0;;) switch (_fun116213_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot5;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun116213_ip = 51;
                                continue _fun116213
                            }
                        case 18:
                            var7 = _closure1_slot7;
                            var6 = var7.can;
                            var4 = _closure1_slot15;
                            var5 = var4.MANAGE_GUILD;
                            var4 = _closure2_slot5;
                            var1 = var6.bind(var7)(var5, var4);
                        case 51:
                            var0.canManage = var1;
                            var1 = _closure2_slot5;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun116213_ip = 100;
                                continue _fun116213
                            }
                        case 67:
                            var5 = _closure1_slot7;
                            var4 = var5.can;
                            var3 = _closure1_slot15;
                            var3 = var3.ADMINISTRATOR;
                            var2 = _closure2_slot5;
                            var1 = var4.bind(var5)(var3, var2);
                        case 100:
                            var0.isAdmin = var1;
                            return var0;
                    }
                };
                var9 = var15.bind(var16)(var10, var9);
                var28 = var9.canManage;
                var _closure2_slot6 = var28;
                var10 = var9.isAdmin;
                var3 = var6[var3];
                var9 = var5.bind(var4)(var3);
                var6 = var9.useStateFromStoresObject;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var11
                    _fun116214: for (var _fun116214_ip = 0;;) switch (_fun116214_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot4;
                            var5 = var7.getChannel;
                            var2 = _closure2_slot5;
                            var6 = null;
                            var8 = var6 == var2;
                            var2 = undefined;
                            if (var8) {
                                _fun116214_ip = 42;
                                continue _fun116214
                            }
                        case 32:
                            var8 = _closure2_slot5;
                            var2 = var8.rulesChannelId;
                        case 42:
                            var2 = var5.bind(var7)(var2);
                            var0.rulesChannel = var2;
                            var2 = _closure1_slot4;
                            var1 = var2.getChannel;
                            var5 = _closure2_slot5;
                            var5 = var6 == var5;
                            var3 = undefined;
                            if (var5) {
                                _fun116214_ip = 84;
                                continue _fun116214
                            }
                        case 74:
                            var4 = _closure2_slot5;
                            var3 = var4.publicUpdatesChannelId;
                        case 84:
                            var1 = var1.bind(var2)(var3);
                            var0.publicUpdatesChannel = var1;
                            return var0;
                    }
                };
                var3 = var6.bind(var9)(var5, var3);
                var25 = var3.rulesChannel;
                var _closure2_slot7 = var25;
                var21 = var3.publicUpdatesChannel;
                var _closure2_slot8 = var21;
                var9 = _closure1_slot3;
                var6 = var9.useEffect;
                var5 = new Array(3);
                var5[0] = var0;
                var5[1] = var14;
                var5[2] = var2;
                var3 = function() { // Environment: var11
                    _fun116215: for (var _fun116215_ip = 0;;) switch (_fun116215_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun116215_ip = 49;
                                continue _fun116215
                            }
                        case 16:
                            var1 = _closure2_slot5;
                            var3 = var1.features;
                            var2 = var3.has;
                            var1 = _closure1_slot13;
                            var1 = var1.COMMUNITY;
                            var0 = var2.bind(var3)(var1);
                        case 49:
                            if (var0) {
                                _fun116215_ip = 130;
                                continue _fun116215
                            }
                        case 52:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.setSection;
                            var0 = _closure1_slot14;
                            var1 = var0.COMMUNITY_INTRO;
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot2;
                            var2 = var3.replace;
                            var1 = var0.COMMUNITY_INTRO;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var0.onClose = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var6.bind(var9)(var3, var5);
                var6 = var9.useCallback;
                var5 = new Array(1);
                var5[0] = var0;
                var3 = function() { // Environment: var11
                    _fun116216: for (var _fun116216_ip = 0;;) switch (_fun116216_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun116216_ip = 163;
                                continue _fun116216
                            }
                        case 16:
                            var1 = global;
                            var2 = var1.Set;
                            var4 = _closure2_slot5;
                            var7 = var4.features;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var2](var7, var6);
                            var5 = var0 instanceof Object ? var0 : var1;
                            var3 = var5.delete;
                            var1 = _closure1_slot13;
                            var2 = var1.COMMUNITY;
                            var2 = var3.bind(var5)(var2);
                            var2 = var5.delete;
                            var1 = var1.DISCOVERABLE;
                            var1 = var2.bind(var5)(var1);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.saveGuild;
                            var1 = var4.id;
                            var0 = {
                                'features': null,
                                'rulesChannelId': null,
                                'publicUpdatesChannelId': null
                            };
                            var0.features = var5;
                            var4 = var4.preferredLocale;
                            var0.preferredLocale = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 163:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = var6.bind(var9)(var3, var5);
                var9 = null;
                var22 = var9 != var0;
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var23 = 14;
                var5 = var3[var23];
                var5 = var15.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var3[var23];
                var3 = var15.bind(var4)(var3);
                var3 = var3.t;
                if (var22) {
                    _fun116211_ip = 403;
                    continue _fun116211
                }
            case 388:
                var15 = var3.kQzUNk;
                var17 = var5.bind(var6)(var15);
                _fun116211_ip = 416;
                continue _fun116211;
            case 403:
                var3 = var3.aQzVF8;
                var17 = var5.bind(var6)(var3);
            case 416:
                var5 = _closure1_slot3;
                var6 = var5.useEffect;
                var3 = new Array(5);
                var3[0] = var0;
                var3[1] = var14;
                var3[2] = var12;
                var3[3] = var7;
                var3[4] = var2;
                var2 = function() { // Environment: var11
                    _fun116217: for (var _fun116217_ip = 0;;) switch (_fun116217_ip) {
                        case 0:
                            var0 = function() { // Original name: handlePublicCancelChanges, environment: var4
                                _fun116218: for (var _fun116218_ip = 0;;) switch (_fun116218_ip) {
                                    case 0:
                                        var1 = _closure2_slot5;
                                        var2 = null;
                                        if (!(var2 != var1)) {
                                            _fun116218_ip = 58;
                                            continue _fun116218
                                        }
                                    case 13:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 13;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var4.cancelChanges;
                                        var1 = _closure2_slot5;
                                        var1 = var1.id;
                                        var1 = var3.bind(var4)(var1);
                                    case 58:
                                        var1 = _closure2_slot1;
                                        if (!(var2 != var1)) {
                                            _fun116218_ip = 76;
                                            continue _fun116218
                                        }
                                    case 66:
                                        var1 = _closure2_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 76:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var0;
                            var0 = function() { // Original name: handlePublicSaveChanges, environment: var4
                                _fun116219: for (var _fun116219_ip = 0;;) switch (_fun116219_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun116219_ip = 116;
                                            continue _fun116219
                                        }
                                    case 13:
                                        var0 = _closure2_slot5;
                                        var3 = var0.id;
                                        var8 = var0.rulesChannelId;
                                        var6 = var0.publicUpdatesChannelId;
                                        var5 = var0.preferredLocale;
                                        var4 = var0.features;
                                        var7 = var0.safetyAlertsChannelId;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 13;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.saveGuild;
                                        var0 = {};
                                        var0.rulesChannelId = var8;
                                        var0.safetyAlertsChannelId = var7;
                                        var0.publicUpdatesChannelId = var6;
                                        var0.preferredLocale = var5;
                                        var0.features = var4;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 116:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var0;
                            var2 = _closure2_slot2;
                            var1 = var2.setOptions;
                            var0 = {};
                            var5 = _closure2_slot3;
                            if (var5) {
                                _fun116217_ip = 64;
                                continue _fun116217
                            }
                        case 46:
                            var6 = _closure2_slot4;
                            var5 = undefined;
                            if (!var6) {
                                _fun116217_ip = 62;
                                continue _fun116217
                            }
                        case 55:
                            var5 = function() { // Environment: var4
                                var3 = _closure1_slot16;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 15;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var0.onPress = var4;
                                var4 = 14;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["ETE/oC"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 62:
                            _fun116217_ip = 71;
                            continue _fun116217;
                        case 64:
                            var5 = function() { // Environment: var4
                                var0 = null;
                                return var0;
                            };
                        case 71:
                            var0.headerLeft = var5;
                            var5 = _closure2_slot3;
                            if (var5) {
                                _fun116217_ip = 101;
                                continue _fun116217
                            }
                        case 83:
                            var5 = _closure2_slot4;
                            var3 = undefined;
                            if (!var5) {
                                _fun116217_ip = 99;
                                continue _fun116217
                            }
                        case 92:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot16;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 15;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure3_slot1;
                                var0.onPress = var4;
                                var4 = 14;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 99:
                            _fun116217_ip = 108;
                            continue _fun116217;
                        case 101:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot16;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 16;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderSubmittingIndicator;
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 108:
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    _fun116224: for (var _fun116224_ip = 0;;) switch (_fun116224_ip) {
                        case 0:
                            var4 = _closure1_slot5;
                            var3 = var4.getChannels;
                            var0 = _closure2_slot0;
                            var3 = var3.bind(var4)(var0);
                            var0 = new Array(0);
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun116224_ip = 79;
                                continue _fun116224
                            }
                        case 37:
                            var2 = _closure1_slot6;
                            var4 = var3[var2];
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.channel;
                                var1 = var0.type;
                                var0 = _closure1_slot12;
                                var0 = var0.GUILD_TEXT;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var6 = var0.channel;
                                var0 = {};
                                var1 = var6.id;
                                var0.value = var1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 17;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.computeChannelName;
                                var9 = _closure1_slot9;
                                var8 = _closure1_slot8;
                                var7 = true;
                                var11 = var5;
                                var10 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                var0.label = var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 79:
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                _closure2_slot9 = var1;
                var6 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var25;
                var2 = function() { // Environment: var11
                    _fun116227: for (var _fun116227_ip = 0;;) switch (_fun116227_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 18;
                            var2 = var9[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var8 = _closure1_slot0;
                            var1 = 20;
                            var1 = var9[var1];
                            var3 = var8.bind(var0)(var1);
                            var1 = 19;
                            var2 = var9[var1];
                            var1 = var9.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 14;
                            var6 = var9[var1];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var1 = var9[var1];
                            var1 = var8.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.Yr6nGx;
                            var1 = var6.bind(var7)(var1);
                            var2.title = var1;
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)();
                            var2.items = var1;
                            var1 = function(arg0) { // Original name: onItemSelect, environment: var1
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 13;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.rulesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 18;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onItemSelect = var1;
                            var7 = _closure2_slot7;
                            var1 = null;
                            var7 = var1 == var7;
                            var1 = undefined;
                            if (var7) {
                                _fun116227_ip = 171;
                                continue _fun116227
                            }
                        case 162:
                            var6 = _closure2_slot7;
                            var1 = var6.id;
                        case 171:
                            var2.selectedItem = var1;
                            var1 = 'SelectRulesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var19 = var6.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var21;
                var1 = function() { // Environment: var11
                    _fun116229: for (var _fun116229_ip = 0;;) switch (_fun116229_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 18;
                            var2 = var9[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var8 = _closure1_slot0;
                            var1 = 20;
                            var1 = var9[var1];
                            var3 = var8.bind(var0)(var1);
                            var1 = 19;
                            var2 = var9[var1];
                            var1 = var9.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 14;
                            var6 = var9[var1];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var1 = var9[var1];
                            var1 = var8.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.VqhxxN;
                            var1 = var6.bind(var7)(var1);
                            var2.title = var1;
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)();
                            var2.items = var1;
                            var1 = function(arg0) { // Original name: onItemSelect, environment: var1
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 13;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateGuild;
                                var1 = {};
                                var6 = arg0;
                                var1.publicUpdatesChannelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 18;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onItemSelect = var1;
                            var7 = _closure2_slot8;
                            var1 = null;
                            var7 = var1 == var7;
                            var1 = undefined;
                            if (var7) {
                                _fun116229_ip = 171;
                                continue _fun116229
                            }
                        case 162:
                            var6 = _closure2_slot8;
                            var1 = var6.id;
                        case 171:
                            var2.selectedItem = var1;
                            var1 = 'SelectUpdatesChannel';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var20 = var3.bind(var5)(var1, var2);
                var2 = var9 == var0;
                var1 = undefined;
                if (var2) {
                    _fun116211_ip = 567;
                    continue _fun116211
                }
            case 561:
                var1 = var0.preferredLocale;
            case 567:
                _closure2_slot10 = var1;
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 18;
                    var2 = var10[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 20;
                    var2 = var10[var2];
                    var6 = var9.bind(var0)(var2);
                    var2 = 19;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = {};
                    var6 = 14;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6["dXE8/D"];
                    var6 = var7.bind(var8)(var6);
                    var2.title = var6;
                    var1 = _closure1_slot11;
                    var1 = var1.bind(var0)();
                    var2.items = var1;
                    var1 = function(arg0) { // Original name: onItemSelect, environment: var1
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 13;
                        var1 = var3[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.updateGuild;
                        var1 = {};
                        var6 = arg0;
                        var1.preferredLocale = var6;
                        var1 = var4.bind(var5)(var1);
                        var1 = 18;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onItemSelect = var1;
                    var1 = _closure2_slot10;
                    var2.selectedItem = var1;
                    var1 = 'SelectLocale';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var1 = var3.bind(var5)(var1, var2);
                _closure2_slot11 = var1;
                var1 = var9 == var0;
                var0 = null;
                if (var1) {
                    _fun116211_ip = 1534;
                    continue _fun116211
                }
            case 617:
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
                var1 = var5[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot18;
                var18 = 22;
                var5 = var5[var18];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Form;
                var5 = {};
                var8 = var8.overview;
                var5.style = var8;
                var8 = var9 != var25;
                var27 = null;
                if (!var8) {
                    _fun116211_ip = 738;
                    continue _fun116211
                }
            case 692:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 17;
                var8 = var14[var8];
                var16 = var12.bind(var4)(var8);
                var15 = var16.computeChannelName;
                var34 = _closure1_slot9;
                var33 = _closure1_slot8;
                var32 = true;
                var36 = var16;
                var35 = var25;
                var27 = var36[var15](var35, var34, var33, var32, var31);
            case 738:
                var14 = _closure1_slot16;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var8 = var25[var18];
                var8 = var26.bind(var4)(var8);
                var12 = var8.FormSection;
                var8 = {};
                var15 = var25[var18];
                var15 = var26.bind(var4)(var15);
                var16 = var15.FormHint;
                var15 = {};
                var29 = var25[var23];
                var29 = var26.bind(var4)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var25[var23];
                var29 = var26.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29["3q1TEo"];
                var29 = var30.bind(var31)(var29);
                var15.children = var29;
                var15 = var14.bind(var4)(var16, var15);
                var8.hint = var15;
                var15 = var25[var18];
                var15 = var26.bind(var4)(var15);
                var16 = var15.FormRow;
                var15 = {};
                var29 = var25[var23];
                var29 = var26.bind(var4)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var25[var23];
                var29 = var26.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29.U5BW0c;
                var29 = var30.bind(var31)(var29);
                var15.label = var29;
                var28 = !var28;
                var15.disabled = var28;
                var25 = var25[var18];
                var25 = var26.bind(var4)(var25);
                var25 = var25.FormRow;
                var26 = var25.Arrow;
                var25 = {};
                var25.label = var27;
                var25 = var14.bind(var4)(var26, var25);
                var15.trailing = var25;
                var15.onPress = var19;
                var15 = var14.bind(var4)(var16, var15);
                var8.children = var15;
                var12 = var14.bind(var4)(var12, var8);
                var8 = new Array(4);
                var8[0] = var12;
                var12 = var9 != var21;
                var26 = null;
                if (!var12) {
                    _fun116211_ip = 1040;
                    continue _fun116211
                }
            case 994:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 17;
                var12 = var15[var12];
                var19 = var14.bind(var4)(var12);
                var16 = var19.computeChannelName;
                var34 = _closure1_slot9;
                var33 = _closure1_slot8;
                var32 = true;
                var36 = var19;
                var35 = var21;
                var26 = var36[var16](var35, var34, var33, var32, var31);
            case 1040:
                var15 = _closure1_slot16;
                var25 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = var21[var18];
                var12 = var25.bind(var4)(var12);
                var14 = var12.FormSection;
                var12 = {};
                var16 = var21[var18];
                var16 = var25.bind(var4)(var16);
                var19 = var16.FormHint;
                var16 = {};
                var27 = var21[var23];
                var27 = var25.bind(var4)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var21[var23];
                var27 = var25.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27["Fg6O/5"];
                var27 = var28.bind(var29)(var27);
                var16.children = var27;
                var16 = var15.bind(var4)(var19, var16);
                var12.hint = var16;
                var16 = var21[var18];
                var16 = var25.bind(var4)(var16);
                var19 = var16.FormRow;
                var16 = {};
                var27 = var21[var23];
                var27 = var25.bind(var4)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var21[var23];
                var27 = var25.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.vAyDGU;
                var27 = var28.bind(var29)(var27);
                var16.label = var27;
                var27 = !var10;
                var16.disabled = var27;
                var21 = var21[var18];
                var21 = var25.bind(var4)(var21);
                var21 = var21.FormRow;
                var25 = var21.Arrow;
                var21 = {};
                var21.label = var26;
                var21 = var15.bind(var4)(var25, var21);
                var16.trailing = var21;
                var16.onPress = var20;
                var16 = var15.bind(var4)(var19, var16);
                var12.children = var16;
                var12 = var15.bind(var4)(var14, var12);
                var8[1] = var12;
                var11 = function() { // Environment: var11
                    _fun116233: for (var _fun116233_ip = 0;;) switch (_fun116233_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var0 = var0.preferredLocale;
                            var _closure3_slot0 = var0;
                            var2 = _closure1_slot11;
                            var3 = undefined;
                            var4 = var2.bind(var3)();
                            var2 = var4.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var2.bind(var4)(var1);
                            var2 = null;
                            var2 = var2 == var1;
                            var9 = undefined;
                            if (var2) {
                                _fun116233_ip = 65;
                                continue _fun116233
                            }
                        case 60:
                            var9 = var1.label;
                        case 65:
                            var2 = _closure1_slot16;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 22;
                            var0 = var10[var7];
                            var0 = var8.bind(var3)(var0);
                            var1 = var0.FormSection;
                            var0 = {};
                            var4 = var10[var7];
                            var4 = var8.bind(var3)(var4);
                            var5 = var4.FormHint;
                            var4 = {};
                            var11 = 14;
                            var12 = var10[var11];
                            var12 = var8.bind(var3)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var10[var11];
                            var12 = var8.bind(var3)(var12);
                            var12 = var12.t;
                            var12 = var12["l2g81/"];
                            var12 = var13.bind(var14)(var12);
                            var4.children = var12;
                            var4 = var2.bind(var3)(var5, var4);
                            var0.hint = var4;
                            var4 = var10[var7];
                            var4 = var8.bind(var3)(var4);
                            var5 = var4.FormRow;
                            var4 = {};
                            var12 = var10[var11];
                            var12 = var8.bind(var3)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var10[var11];
                            var11 = var8.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.VeC8vc;
                            var11 = var12.bind(var13)(var11);
                            var4.label = var11;
                            var11 = _closure2_slot6;
                            var11 = !var11;
                            var4.disabled = var11;
                            var7 = var10[var7];
                            var7 = var8.bind(var3)(var7);
                            var7 = var7.FormRow;
                            var8 = var7.Arrow;
                            var7 = {};
                            var7.label = var9;
                            var7 = var2.bind(var3)(var8, var7);
                            var4.trailing = var7;
                            var6 = _closure2_slot11;
                            var4.onPress = var6;
                            var4 = var2.bind(var3)(var5, var4);
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var11 = var11.bind(var4)();
                var8[2] = var11;
                var9 = null;
                if (!var10) {
                    _fun116211_ip = 1510;
                    continue _fun116211
                }
            case 1304:
                var12 = _closure1_slot18;
                var11 = _closure1_slot17;
                var10 = {};
                var16 = _closure1_slot16;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var13 = var14[var18];
                var13 = var15.bind(var4)(var13);
                var19 = var13.FormSection;
                var13 = {};
                var20 = 23;
                var20 = var14[var20];
                var20 = var15.bind(var4)(var20);
                var21 = var20.TableRow;
                var20 = {};
                var25 = 'danger';
                var20.variant = var25;
                var20.onPress = var24;
                var24 = var14[var23];
                var24 = var15.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var14[var23];
                var23 = var15.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.c1BmbC;
                var23 = var24.bind(var25)(var23);
                var20.label = var23;
                var22 = !var22;
                var20.disabled = var22;
                var20 = var16.bind(var4)(var21, var20);
                var13.children = var20;
                var19 = var16.bind(var4)(var19, var13);
                var13 = new Array(2);
                var13[0] = var19;
                var14 = var14[var18];
                var14 = var15.bind(var4)(var14);
                var15 = var14.FormHint;
                var14 = {};
                var18 = {};
                var19 = 8;
                var18.marginTop = var19;
                var14.style = var18;
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 1510:
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1534:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1662, 3050, 3059, 1613, 8115, 13513, 660, 33, 1297, 1469, 566, 8114, 1234, 5284, 4668, 4755, 3237, 5339, 1307, 4860, 5340, 4861, 2]);