// modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var26 = metroImportDefault;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var26;
    var _closure1_slot2 = var15;
    var11 = function arg0, arg1() {
        var2 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var0;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 26;
        var5 = var5[var4];
        var4 = undefined;
        var5 = var6.bind(var4)(var5);
        var4 = var5.useStateFromStores;
        var6 = _closure1_slot18;
        var3 = new Array(1);
        var3[0] = var6;
        var6 = var2.id;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var0;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot18;
            var2 = var3.isInterestedInEventRecurrence;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = var4.bind(var5)(var3, var0, var2);
        var0 = new Array(2);
        var0[0] = var2;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 21;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.handleGuildScheduledEventRsvp;
            var1 = _closure2_slot0;
            var3 = var1.id;
            var2 = _closure2_slot1;
            var1 = var1.guild_id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot28 = var11;
    var9 = function arg0, arg1() {
        _fun66086: for (var _fun66086_ip = 0;;) switch (_fun66086_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var1 = var7.guild_id;
                var _closure2_slot1 = var1;
                var4 = var7.channel_id;
                var _closure2_slot2 = var4;
                var1 = var7.scheduled_start_time;
                var _closure2_slot3 = var1;
                var5 = var7.entity_type;
                var8 = _closure1_slot5;
                var6 = var8.useMemo;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 32;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getEventTimeData;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var8)(var1, var3);
                var1 = var1.withinStartWindow;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 26;
                var3 = var11[var9];
                var6 = undefined;
                var13 = var8.bind(var6)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot13;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var12.bind(var13)(var10, var3);
                var10 = var11[var9];
                var14 = var8.bind(var6)(var10);
                var13 = var14.useStateFromStores;
                var10 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = new Array(1);
                var10[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var13.bind(var14)(var12, var4, var10);
                var4 = 27;
                var4 = var11[var4];
                var8 = var8.bind(var6)(var4);
                var4 = var8.useManageResourcePermissions;
                var11 = null;
                if (!(var11 != var10)) {
                    _fun66086_ip = 209;
                    continue _fun66086
                }
            case 206:
                var3 = var10;
            case 209:
                var3 = var4.bind(var8)(var3);
                var3 = var3.canManageGuildEvent;
                var4 = var3.bind(var6)(var7);
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var9 = var8.bind(var6)(var3);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot13;
                var3 = new Array(1);
                var3[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var8.bind(var9)(var3, var0);
                if (var0) {
                    _fun66086_ip = 290;
                    continue _fun66086
                }
            case 275:
                var0 = _closure1_slot27;
                var0 = var0.JOIN_GUILD;
                _fun66086_ip = 443;
                continue _fun66086;
            case 290:
                var3 = _closure1_slot16;
                var3 = var3.bind(var6)(var7);
                if (var3) {
                    _fun66086_ip = 430;
                    continue _fun66086
                }
            case 305:
                var3 = _closure1_slot17;
                var3 = var3.bind(var6)(var7);
                if (var3) {
                    _fun66086_ip = 347;
                    continue _fun66086
                }
            case 317:
                if (!var1) {
                    _fun66086_ip = 323;
                    continue _fun66086
                }
            case 320:
                if (var4) {
                    _fun66086_ip = 335;
                    continue _fun66086
                }
            case 323:
                var1 = _closure1_slot27;
                var1 = var1.RSVP;
                _fun66086_ip = 345;
                continue _fun66086;
            case 335:
                var3 = _closure1_slot27;
                var1 = var3.START;
            case 345:
                _fun66086_ip = 428;
                continue _fun66086;
            case 347:
                var3 = _closure1_slot19;
                var3 = var3.EXTERNAL;
                if (!(var5 !== var3)) {
                    _fun66086_ip = 401;
                    continue _fun66086
                }
            case 361:
                var6 = _closure1_slot27;
                var3 = arg1;
                if (var3) {
                    _fun66086_ip = 379;
                    continue _fun66086
                }
            case 371:
                var3 = var6.JOIN;
                _fun66086_ip = 399;
                continue _fun66086;
            case 379:
                if (var4) {
                    _fun66086_ip = 390;
                    continue _fun66086
                }
            case 382:
                var5 = var6.CONNECTED;
                _fun66086_ip = 396;
                continue _fun66086;
            case 390:
                var5 = var6.END;
            case 396:
                var3 = var5;
            case 399:
                _fun66086_ip = 425;
                continue _fun66086;
            case 401:
                var5 = _closure1_slot27;
                if (var4) {
                    _fun66086_ip = 416;
                    continue _fun66086
                }
            case 408:
                var4 = var5.STARTED;
                _fun66086_ip = 422;
                continue _fun66086;
            case 416:
                var4 = var5.END;
            case 422:
                var3 = var4;
            case 425:
                var1 = var3;
            case 428:
                _fun66086_ip = 440;
                continue _fun66086;
            case 430:
                var2 = _closure1_slot27;
                var1 = var2.ENDED;
            case 440:
                var0 = var1;
            case 443:
                return var0;
        }
    };
    var _closure1_slot29 = var9;
    var8 = function arg0() {
        _fun66091: for (var _fun66091_ip = 0;;) switch (_fun66091_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.event;
                var1 = var0.recurrenceId;
                var0 = _closure1_slot28;
                var3 = undefined;
                var2 = var0.bind(var3)(var2, var1);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var10 = var1[var0];
                var0 = 1;
                var4 = var1[var0];
                var6 = 'secondary';
                if (!var10) {
                    _fun66091_ip = 67;
                    continue _fun66091
                }
            case 63:
                var6 = 'tertiary';
            case 67:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var10) {
                    _fun66091_ip = 98;
                    continue _fun66091
                }
            case 78:
                var0 = 30;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.BellIcon;
                _fun66091_ip = 116;
                continue _fun66091;
            case 98:
                var0 = 29;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.CheckmarkLargeIcon;
            case 116:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 31;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = 'togglebutton';
                var0.accessibilityRole = var7;
                var7 = {};
                var7.checked = var10;
                var0.accessibilityState = var7;
                var0.variant = var6;
                var7 = _closure1_slot23;
                var6 = {};
                var10 = 'sm';
                var6.size = var10;
                var6 = var7.bind(var3)(var8, var6);
                var0.icon = var6;
                var8 = _closure1_slot0;
                var5 = 20;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.DlcqlU;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.onPress = var4;
                var4 = true;
                var0.grow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var8;
    var7 = function arg0() {
        var1 = arg0;
        var4 = var1.event;
        var _closure2_slot0 = var4;
        var2 = var1.recurrenceId;
        var1 = _closure1_slot28;
        var3 = undefined;
        var2 = var1.bind(var3)(var4, var2);
        var1 = _closure1_slot4;
        var7 = 2;
        var1 = var1.bind(var3)(var2, var7);
        var4 = 0;
        var2 = var1[var4];
        var _closure2_slot1 = var2;
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot2 = var1;
        var8 = _closure1_slot5;
        var6 = var8.useState;
        var1 = false;
        var6 = var6.bind(var8)(var1);
        var1 = _closure1_slot4;
        var1 = var1.bind(var3)(var6, var7);
        var6 = var1[var4];
        var1 = var1[var2];
        var _closure2_slot3 = var1;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun66095: for (var _fun66095_ip = 0;;) switch (_fun66095_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun66095_ip = 213;
                                continue _fun66095
                            }
                        case 10:
                            var3 = _closure2_slot3;
                            var4 = undefined;
                            var1 = true;
                            var1 = var3.bind(var4)(var1);
                        case 26: // try_start_0
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 33;
                            var1 = var6[var1];
                            var7 = var3.bind(var4)(var1);
                            var6 = var7.joinGuild;
                            var1 = _closure2_slot0;
                            var3 = var1.guild_id;
                            var1 = {};
                            var8 = _closure1_slot21;
                            var8 = var8.DIRECTORY_EVENTS;
                            var1.source = var8;
                            var1 = var6.bind(var7)(var3, var1);
                            SaveGenerator(address = 90);
                        case 88:
                            return var1;
                        case 90:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun66095_ip = 184;
                                continue _fun66095
                            }
                        case 96:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 34;
                            var3 = var7[var3];
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.transitionToGuild;
                            var3 = _closure2_slot0;
                            var3 = var3.guild_id;
                            var3 = var6.bind(var7)(var3);
                            var6 = _closure2_slot1;
                            var3 = var6;
                            if (var6) {
                                _fun66095_ip = 159;
                                continue _fun66095
                            }
                        case 146:
                            var6 = _closure1_slot17;
                            var5 = _closure2_slot0;
                            var3 = var6.bind(var4)(var5);
                        case 159:
                            if (var3) {
                                _fun66095_ip = 170;
                                continue _fun66095
                            }
                        case 162:
                            var3 = _closure2_slot2;
                            var3 = var3.bind(var4)();
                        case 170: // try_end0
                            var5 = _closure2_slot3;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var4;
                        case 184:
                            var5 = _closure2_slot3;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 198: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot3;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 213:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var4 = var0.bind(var3)();
        var2 = _closure1_slot23;
        var1 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 31;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.loading = var6;
        var6 = 'active';
        var0.variant = var6;
        var8 = _closure1_slot0;
        var5 = 20;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.VJlc0S;
        var5 = var6.bind(var7)(var5);
        var0.text = var5;
        var0.onPress = var4;
        var4 = true;
        var0.grow = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot31 = var7;
    var5 = function arg0() {
        _fun66097: for (var _fun66097_ip = 0;;) switch (_fun66097_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.event;
                var5 = var0.recurrenceId;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 43;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = null;
                var7 = var0 == var6;
                var1 = undefined;
                if (var7) {
                    _fun66097_ip = 56;
                    continue _fun66097
                }
            case 51:
                var1 = var6.guild_id;
            case 56:
                var7 = var0 == var6;
                var0 = undefined;
                if (var7) {
                    _fun66097_ip = 70;
                    continue _fun66097
                }
            case 65:
                var0 = var6.id;
            case 70:
                var5 = var2.bind(var3)(var1, var0, var5);
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 44;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot0;
                var4 = 20;
                var8 = var7[var4];
                var8 = var6.bind(var3)(var8);
                var10 = var8.intl;
                var9 = var10.formatToPlainString;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var8 = var4["+DLsD8"];
                var4 = {};
                var4.count = var5;
                var4 = var9.bind(var10)(var8, var4);
                var0.accessibilityLabel = var4;
                var4 = 45;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.GroupIcon;
                var0.IconComponent = var4;
                var4 = var5.toLocaleString;
                var4 = var4.bind(var5)();
                var0.text = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var5;
    var4 = function arg0() {
        _fun66098: for (var _fun66098_ip = 0;;) switch (_fun66098_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.event;
                var11 = var0.style;
                var8 = var0.textStyle;
                var9 = var0.condensed;
                var12 = var0.onPress;
                var0 = _closure1_slot26;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var2 = _closure1_slot23;
                var1 = _closure1_slot9;
                var0 = {};
                var5 = 'button';
                var0.accessibilityRole = var5;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var13 = 20;
                var14 = var10[var13];
                var14 = var5.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var10[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.epxpiy;
                var13 = var14.bind(var15)(var13);
                var0.accessibilityHint = var13;
                var13 = var7.name;
                var0.accessibilityLabel = var13;
                var0.onPress = var12;
                var12 = var6.topicContainer;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var11;
                var0.style = var6;
                var6 = _closure1_slot23;
                var4 = 51;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var4.style = var8;
                var8 = undefined;
                if (!var9) {
                    _fun66098_ip = 206;
                    continue _fun66098
                }
            case 203:
                var8 = 1;
            case 206:
                var4.lineClamp = var8;
                var7 = var7.name;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var4;
    var3 = function arg0() {
        _fun66099: for (var _fun66099_ip = 0;;) switch (_fun66099_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.event;
                var12 = var1.description;
                var8 = var1.guild_id;
                var7 = var0.style;
                var13 = var0.textStyle;
                var9 = var0.numberOfLines;
                var1 = var0.condensed;
                var0 = _closure1_slot26;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = null;
                var3 = var2 != var12;
                var0 = null;
                if (!var3) {
                    _fun66099_ip = 259;
                    continue _fun66099
                }
            case 69:
                var10 = var12.length;
                var3 = 0;
                var3 = var10 > var3;
                var0 = null;
                if (!var3) {
                    _fun66099_ip = 259;
                    continue _fun66099
                }
            case 88:
                var0 = null;
                if (var1) {
                    _fun66099_ip = 259;
                    continue _fun66099
                }
            case 96:
                var1 = var2 != var12;
                var0 = null;
                if (!var1) {
                    _fun66099_ip = 259;
                    continue _fun66099
                }
            case 108:
                var3 = _closure1_slot23;
                var2 = _closure1_slot6;
                var1 = {};
                var10 = var6.detailsContainer;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var7;
                var1.style = var6;
                var7 = _closure1_slot23;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 51;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/medium',
                    'color': 'text-subtle'
                };
                var5.style = var13;
                var5.lineClamp = var9;
                var9 = 55;
                var9 = var11[var9];
                var11 = var10.bind(var4)(var9);
                var10 = var11.guildEventDetailsParser;
                var9 = {
                    'guildId': null,
                    'allowLinks': true,
                    'allowHeading': true,
                    'allowList': true
                };
                var9.guildId = var8;
                var8 = true;
                var8 = var10.bind(var11)(var12, var8, var9);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 259:
                return var0;
        }
    };
    var _closure1_slot34 = var3;
    var0 = global;
    var12 = var0.Object;
    var10 = var12.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var12)(var2, var0, var6);
    var23 = 0;
    var6 = var15[var23];
    var0 = undefined;
    var6 = var26.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var22 = 1;
    var6 = var15[var22];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var21 = 2;
    var10 = var15[var21];
    var6 = arg3;
    var16 = var6.bind(var0)(var10);
    var _closure1_slot5 = var16;
    var20 = 3;
    var6 = var15[var20];
    var6 = var14.bind(var0)(var6);
    var10 = var6.View;
    var _closure1_slot6 = var10;
    var10 = var6.Image;
    var _closure1_slot7 = var10;
    var10 = var6.useWindowDimensions;
    var _closure1_slot8 = var10;
    var6 = var6.Pressable;
    var _closure1_slot9 = var6;
    var19 = 4;
    var6 = var15[var19];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var18 = 5;
    var6 = var15[var18];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var17 = 6;
    var6 = var15[var17];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var13 = 7;
    var6 = var15[var13];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var15[var6];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var15[var6];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var6 = 10;
    var10 = var15[var6];
    var10 = var14.bind(var0)(var10);
    var12 = var10.isGuildEventEnded;
    var _closure1_slot16 = var12;
    var10 = var10.isGuildScheduledEventActive;
    var _closure1_slot17 = var10;
    var6 = var15[var6];
    var6 = var26.bind(var0)(var6);
    var _closure1_slot18 = var6;
    var6 = 11;
    var6 = var15[var6];
    var6 = var14.bind(var0)(var6);
    var6 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot19 = var6;
    var27 = 12;
    var6 = var15[var27];
    var6 = var14.bind(var0)(var6);
    var10 = var6.Permissions;
    var _closure1_slot20 = var10;
    var6 = var6.JoinGuildSources;
    var _closure1_slot21 = var6;
    var6 = 13;
    var6 = var15[var6];
    var6 = var14.bind(var0)(var6);
    var28 = var6.Fonts;
    var6 = var6.NOOP;
    var _closure1_slot22 = var6;
    var29 = 14;
    var6 = var15[var29];
    var6 = var14.bind(var0)(var6);
    var10 = var6.jsx;
    var _closure1_slot23 = var10;
    var10 = var6.jsxs;
    var _closure1_slot24 = var10;
    var6 = var6.Fragment;
    var _closure1_slot25 = var6;
    var6 = 15;
    var6 = var15[var6];
    var12 = var14.bind(var0)(var6);
    var10 = var12.createStyles;
    var6 = {};
    var24 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'stretch'
    };
    var25 = 16;
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.colors;
    var30 = var30.BACKGROUND_BASE_LOWEST;
    var24.backgroundColor = var30;
    var6.imageHeaderContainer = var24;
    var24 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.headerContainer = var24;
    var24 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var6.dateContainer = var24;
    var24 = {};
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var24.marginRight = var30;
    var6.dateIcon = var24;
    var24 = {
        'paddingHorizontal': 4,
        'paddingVertical': 2,
        'marginEnd': 8
    };
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.colors;
    var30 = var30.BACKGROUND_BRAND;
    var24.backgroundColor = var30;
    var6.newBadge = var24;
    var24 = {};
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var24.paddingTop = var30;
    var6.topicContainer = var24;
    var24 = {};
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var24.paddingTop = var30;
    var6.detailsContainer = var24;
    var24 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var24.paddingTop = var30;
    var6.channelContainer = var24;
    var24 = {};
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var24.marginRight = var30;
    var6.channelIcon = var24;
    var24 = {};
    var30 = var28.PRIMARY_MEDIUM;
    var24.fontFamily = var30;
    var30 = var15[var25];
    var30 = var26.bind(var0)(var30);
    var30 = var30.colors;
    var30 = var30.TEXT_SUBTLE;
    var24.color = var30;
    var24.fontSize = var29;
    var29 = 18;
    var24.lineHeight = var29;
    var6.channelText = var24;
    var24 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var29 = var15[var25];
    var29 = var26.bind(var0)(var29);
    var29 = var29.spacing;
    var29 = var29.PX_8;
    var24.paddingTop = var29;
    var6.guildInfoContainer = var24;
    var24 = {};
    var29 = var15[var25];
    var29 = var26.bind(var0)(var29);
    var29 = var29.spacing;
    var29 = var29.PX_8;
    var24.marginRight = var29;
    var29 = var15[var25];
    var29 = var26.bind(var0)(var29);
    var29 = var29.radii;
    var29 = var29.sm;
    var24.borderRadius = var29;
    var6.guildIcon = var24;
    var24 = {};
    var29 = 'column';
    var24.flexDirection = var29;
    var6.guildInfo = var24;
    var24 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.guildInfoChannelContainer = var24;
    var24 = {};
    var28 = var28.PRIMARY_MEDIUM;
    var24.fontFamily = var28;
    var28 = var15[var25];
    var28 = var26.bind(var0)(var28);
    var28 = var28.colors;
    var28 = var28.TEXT_SUBTLE;
    var24.color = var28;
    var24.fontSize = var27;
    var24.lineHeight = var25;
    var6.guildInfoChannelText = var24;
    var24 = {};
    var25 = var15[var25];
    var25 = var26.bind(var0)(var25);
    var25 = var25.spacing;
    var25 = var25.PX_8;
    var24.marginRight = var25;
    var6.creatorAvatar = var24;
    var12 = var10.bind(var12)(var6);
    var _closure1_slot26 = var12;
    var10 = {};
    var10.RSVP = var23;
    var6 = 'RSVP';
    var10[var23] = var6;
    var10.JOIN = var22;
    var6 = 'JOIN';
    var10[var22] = var6;
    var10.START = var21;
    var6 = 'START';
    var10[var21] = var6;
    var10.STARTED = var20;
    var6 = 'STARTED';
    var10[var20] = var6;
    var10.CONNECTED = var19;
    var6 = 'CONNECTED';
    var10[var19] = var6;
    var10.END = var18;
    var6 = 'END';
    var10[var18] = var6;
    var10.ENDED = var17;
    var6 = 'ENDED';
    var10[var17] = var6;
    var10.JOIN_GUILD = var13;
    var6 = 'JOIN_GUILD';
    var10[var13] = var6;
    var _closure1_slot27 = var10;
    var13 = var16.memo;
    var6 = function(arg0) { // Environment: var1
        _fun66100: for (var _fun66100_ip = 0;;) switch (_fun66100_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.event;
                var _closure2_slot0 = var8;
                var6 = var0.isConnected;
                var1 = var0.onCloseAction;
                var _closure2_slot1 = var1;
                var7 = var0.recurrenceId;
                var _closure2_slot2 = var7;
                var0 = var8.guild_id;
                var _closure2_slot3 = var0;
                var2 = var8.channel_id;
                var _closure2_slot4 = var2;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 26;
                var10 = var5[var0];
                var3 = undefined;
                var13 = var1.bind(var3)(var10);
                var12 = var13.useStateFromStores;
                var10 = _closure1_slot11;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var9
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var12.bind(var13)(var11, var2, var10);
                var _closure2_slot5 = var2;
                var10 = _closure1_slot1;
                var2 = 35;
                var2 = var5[var2];
                var2 = var10.bind(var3)(var2);
                var11 = var2.bind(var3)();
                var10 = _closure1_slot4;
                var2 = 2;
                var10 = var10.bind(var3)(var11, var2);
                var2 = 1;
                var2 = var10[var2];
                var _closure2_slot6 = var2;
                var2 = _closure1_slot29;
                var2 = var2.bind(var3)(var8, var6);
                var0 = var5[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot14;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var3 = _closure1_slot14;
                    var2 = var3.can;
                    var0 = _closure1_slot20;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot5;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var0);
                var6 = function() {
                    _fun66103: for (var _fun66103_ip = 0;;) switch (_fun66103_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun66103_ip = 118;
                                continue _fun66103
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var4 = var1.entity_type;
                            var2 = _closure1_slot19;
                            var2 = var2.STAGE_INSTANCE;
                            if (!(var4 === var2)) {
                                _fun66103_ip = 65;
                                continue _fun66103
                            }
                        case 40:
                            var6 = _closure2_slot6;
                            var5 = _closure2_slot3;
                            var2 = _closure2_slot5;
                            var4 = var2.id;
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5, var4);
                        case 65:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 39;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var2);
                            var4 = var5.openGuildVoiceModal;
                            var2 = _closure2_slot5;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot1;
                            if (!(var3 != var2)) {
                                _fun66103_ip = 118;
                                continue _fun66103
                            }
                        case 110:
                            var0 = _closure2_slot1;
                            var0 = var0.bind(var1)();
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = _closure1_slot27;
                var0 = var0.ENDED;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 1030;
                    continue _fun66100
                }
            case 244:
                var0 = _closure1_slot27;
                var0 = var0.JOIN;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 893;
                    continue _fun66100
                }
            case 261:
                var0 = _closure1_slot27;
                var0 = var0.CONNECTED;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 785;
                    continue _fun66100
                }
            case 278:
                var0 = _closure1_slot27;
                var0 = var0.RSVP;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 757;
                    continue _fun66100
                }
            case 295:
                var0 = _closure1_slot27;
                var0 = var0.START;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 642;
                    continue _fun66100
                }
            case 312:
                var0 = _closure1_slot27;
                var0 = var0.STARTED;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 533;
                    continue _fun66100
                }
            case 329:
                var0 = _closure1_slot27;
                var0 = var0.END;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 418;
                    continue _fun66100
                }
            case 343:
                var0 = _closure1_slot27;
                var0 = var0.JOIN_GUILD;
                if (!(var0 !== var2)) {
                    _fun66100_ip = 390;
                    continue _fun66100
                }
            case 357:
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 40;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.assertNever;
                var0 = var0.bind(var1)(var2);
                return var3;
            case 390:
                var2 = _closure1_slot23;
                var1 = _closure1_slot31;
                var0 = {};
                var0.event = var8;
                var0.recurrenceId = var7;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 418:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 31;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var10 = 'secondary';
                var0.variant = var10;
                var13 = _closure1_slot0;
                var10 = 20;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.qaYzPA;
                var10 = var11.bind(var12)(var10);
                var0.text = var10;
                var10 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 36;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var4 = 20;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var10 = var7.intl;
                    var8 = var10.string;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.qaYzPA;
                    var7 = var8.bind(var10)(var7);
                    var1.title = var7;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var10 = var7.intl;
                    var8 = var10.string;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.bnDQ7E;
                    var7 = var8.bind(var10)(var7);
                    var1.body = var7;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var10 = var7.intl;
                    var8 = var10.string;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.gm1Vej;
                    var7 = var8.bind(var10)(var7);
                    var1.cancelText = var7;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.p89ACt;
                    var4 = var7.bind(var8)(var4);
                    var1.confirmText = var4;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 37;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.endEvent;
                        var0 = _closure2_slot0;
                        var1 = var0.id;
                        var0 = var0.guild_id;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var4 = 38;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.Colors;
                    var4 = var4.RED;
                    var1.confirmColor = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var10;
                var10 = true;
                var0.grow = var10;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 533:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 31;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'variant': 'secondary',
                    'text': null,
                    'grow': true,
                    'disabled': true
                };
                var13 = _closure1_slot0;
                var10 = 20;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Yz0V6O;
                var10 = var11.bind(var12)(var10);
                var0.text = var10;
                var10 = _closure1_slot22;
                var0.onPress = var10;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 642:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 31;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var10 = 'active';
                var0.variant = var10;
                var13 = _closure1_slot0;
                var10 = 20;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.cK1GGY;
                var10 = var11.bind(var12)(var10);
                var0.text = var10;
                var9 = function() {
                    _fun66104: for (var _fun66104_ip = 0;;) switch (_fun66104_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun66104_ip = 23;
                                continue _fun66104
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 21;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openStartGuildEventModal;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.onPress = var9;
                var9 = true;
                var0.grow = var9;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 757:
                var2 = _closure1_slot23;
                var1 = _closure1_slot30;
                var0 = {};
                var0.event = var8;
                var0.recurrenceId = var7;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 785:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 31;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = 'active';
                var0.variant = var7;
                var10 = _closure1_slot0;
                var7 = 20;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.aW2YlJ;
                var7 = var8.bind(var9)(var7);
                var0.text = var7;
                var0.onPress = var6;
                var7 = true;
                var0.grow = var7;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 893:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 31;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = 'active';
                var0.variant = var7;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 20;
                var9 = var11[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.t;
                if (var5) {
                    _fun66100_ip = 987;
                    continue _fun66100
                }
            case 974:
                var7 = var8.TVBCKZ;
                var7 = var9.bind(var10)(var7);
                _fun66100_ip = 1000;
                continue _fun66100;
            case 987:
                var8 = var8.ZYO5OK;
                var7 = var9.bind(var10)(var8);
            case 1000:
                var0.text = var7;
                var0.onPress = var6;
                var5 = !var5;
                var0.disabled = var5;
                var5 = true;
                var0.grow = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1030:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 31;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'variant': 'secondary',
                    'text': null,
                    'grow': true,
                    'disabled': true
                };
                var8 = _closure1_slot0;
                var5 = 20;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Pj7Xrv;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var4 = _closure1_slot22;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var13.bind(var16)(var6);
    var13 = 61;
    var13 = var15[var13];
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx';
    var13 = var14.bind(var15)(var13);
    var2.useGuildEventCardStyles = var12;
    var12 = function arg0() {
        _fun66107: for (var _fun66107_ip = 0;;) switch (_fun66107_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.event;
                var _closure2_slot0 = var8;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 17;
                var0 = var12[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var4 = var0.bind(var3)(var8);
                var _closure2_slot1 = var4;
                var11 = _closure1_slot0;
                var0 = 18;
                var0 = var12[var0];
                var2 = var11.bind(var3)(var0);
                var1 = var2.SHARE_EVENT_DETAILS_LINK;
                var0 = {};
                var9 = var8.guild_id;
                var0.guildId = var9;
                var8 = var8.id;
                var0.guildEventId = var8;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot2 = var0;
                var2 = _closure1_slot23;
                var0 = 19;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.IconButton;
                var0 = {};
                var8 = 20;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.RDE0Sc;
                var8 = var9.bind(var10)(var8);
                var0.accessibilityLabel = var8;
                var7 = function() {
                    _fun66108: for (var _fun66108_ip = 0;;) switch (_fun66108_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            if (var1) {
                                _fun66108_ip = 74;
                                continue _fun66108
                            }
                        case 21:
                            var1 = 22;
                            var1 = var2[var1];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var1);
                            var5 = var6.copy;
                            var1 = _closure2_slot2;
                            var1 = var5.bind(var6)(var1);
                            var1 = 23;
                            var1 = var2[var1];
                            var4 = var3.bind(var4)(var1);
                            var1 = var4.presentLinkCopied;
                            var1 = var1.bind(var4)();
                            _fun66108_ip = 103;
                            continue _fun66108;
                        case 74:
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openShareEvent;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var7;
                var7 = _closure1_slot2;
                if (var4) {
                    _fun66107_ip = 203;
                    continue _fun66107
                }
            case 194:
                var4 = 25;
                var4 = var7[var4];
                _fun66107_ip = 210;
                continue _fun66107;
            case 203:
                var6 = 24;
                var4 = var7[var6];
            case 210:
                var4 = var5.bind(var3)(var4);
                var0.icon = var4;
                var4 = 'secondary';
                var0.variant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventShareAction = var12;
    var12 = function arg0() {
        _fun66109: for (var _fun66109_ip = 0;;) switch (_fun66109_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.event;
                var _closure2_slot0 = var1;
                var0 = var0.recurrenceId;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var2 = var1.channel_id;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 26;
                var0 = var8[var7];
                var11 = var6.bind(var3)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot13;
                var9 = new Array(1);
                var9[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var10.bind(var11)(var9, var0);
                var7 = var8[var7];
                var11 = var6.bind(var3)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot11;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var10.bind(var11)(var9, var2, var7);
                var2 = 27;
                var2 = var8[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useManageResourcePermissions;
                var8 = null;
                if (!(var8 != var7)) {
                    _fun66109_ip = 168;
                    continue _fun66109
                }
            case 165:
                var0 = var7;
            case 168:
                var0 = var2.bind(var6)(var0);
                var0 = var0.canManageGuildEvent;
                var0 = var0.bind(var3)(var1);
                _closure2_slot3 = var0;
                var2 = _closure1_slot23;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 19;
                var0 = var6[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.IconButton;
                var0 = {};
                var7 = 20;
                var8 = var6[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var6[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.HIgA5a;
                var7 = var8.bind(var9)(var7);
                var0.accessibilityLabel = var7;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.showGuildEventModeratorActionSheet;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var0.onPress = var5;
                var5 = _closure1_slot1;
                var4 = 28;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var0.icon = var4;
                var4 = 'secondary';
                var0.variant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventModeratorAction = var12;
    var2.useEventRsvpState = var11;
    var11 = function arg0() {
        _fun66113: for (var _fun66113_ip = 0;;) switch (_fun66113_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.event;
                var1 = _closure1_slot28;
                var3 = undefined;
                var0 = null;
                var2 = var1.bind(var3)(var2, var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var10 = var1[var0];
                var0 = 1;
                var4 = var1[var0];
                var6 = 'secondary';
                if (!var10) {
                    _fun66113_ip = 63;
                    continue _fun66113
                }
            case 59:
                var6 = 'tertiary';
            case 63:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var10) {
                    _fun66113_ip = 94;
                    continue _fun66113
                }
            case 74:
                var0 = 30;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.BellIcon;
                _fun66113_ip = 112;
                continue _fun66113;
            case 94:
                var0 = 29;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.CheckmarkLargeIcon;
            case 112:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 31;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = 'togglebutton';
                var0.accessibilityRole = var7;
                var7 = {};
                var7.checked = var10;
                var0.accessibilityState = var7;
                var0.variant = var6;
                var7 = _closure1_slot23;
                var6 = {};
                var10 = 'sm';
                var6.size = var10;
                var6 = var7.bind(var3)(var8, var6);
                var0.icon = var6;
                var8 = _closure1_slot0;
                var5 = 20;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.DlcqlU;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.onPress = var4;
                var4 = true;
                var0.grow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventIndicateInterestAction = var11;
    var2.PrimaryActionType = var10;
    var2.usePrimaryActionButtonType = var9;
    var2.GuildEventCardRSVPAction = var8;
    var2.GuildEventJoinAndRSVPAction = var7;
    var2.GuildEventCardPrimaryAction = var6;
    var6 = function arg0() {
        _fun66114: for (var _fun66114_ip = 0;;) switch (_fun66114_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.event;
                var0 = _closure1_slot26;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = _closure1_slot8;
                var0 = var0.bind(var4)();
                var11 = var0.width;
                var1 = var7.image;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun66114_ip = 191;
                    continue _fun66114
                }
            case 50:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 41;
                var1 = var9[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.makeSource;
                var8 = _closure1_slot1;
                var1 = 42;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.bind(var4)(var7, var11);
                var8 = var2.bind(var3)(var1);
                var3 = _closure1_slot23;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var6.imageHeaderContainer;
                var1.style = var6;
                var7 = _closure1_slot23;
                var6 = _closure1_slot7;
                var5 = {};
                var9 = {};
                var9.width = var11;
                var10 = 2.5;
                var10 = var11 / var10;
                var9.height = var10;
                var5.style = var9;
                var5.source = var8;
                var8 = 'cover';
                var5.resizeMode = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 191:
                return var0;
        }
    };
    var2.GuildEventCardImageHeader = var6;
    var2.UserCountIconPill = var5;
    var5 = function arg0() {
        _fun66115: for (var _fun66115_ip = 0;;) switch (_fun66115_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.event;
                var _closure2_slot0 = var14;
                var13 = var2.recurrenceId;
                var0 = var2.showUserCount;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun66115_ip = 35;
                    continue _fun66115
                }
            case 33:
                var0 = true;
            case 35:
                var5 = var2.showEndDate;
                if (!(var5 === var3)) {
                    _fun66115_ip = 47;
                    continue _fun66115
                }
            case 45:
                var5 = false;
            case 47:
                var1 = var2.isPreview;
                if (!(var1 === var3)) {
                    _fun66115_ip = 59;
                    continue _fun66115
                }
            case 57:
                var1 = false;
            case 59:
                var6 = var2.showCreator;
                if (!(var6 === var3)) {
                    _fun66115_ip = 71;
                    continue _fun66115
                }
            case 69:
                var6 = true;
            case 71:
                var4 = var2.isNew;
                if (!(var4 === var3)) {
                    _fun66115_ip = 83;
                    continue _fun66115
                }
            case 81:
                var4 = false;
            case 83:
                var9 = var2.style;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot26;
                var10 = var2.bind(var3)();
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 46;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var17 = var2.bind(var3)();
                var2 = 47;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = null;
                var11 = var7 == var14;
                var2 = undefined;
                if (var11) {
                    _fun66115_ip = 167;
                    continue _fun66115
                }
            case 162:
                var2 = var14.id;
            case 167:
                var2 = var8.bind(var3)(var13, var2);
                var19 = var14.entity_type;
                if (!(var7 == var2)) {
                    _fun66115_ip = 185;
                    continue _fun66115
                }
            case 183:
                var2 = {};
            case 185:
                var2 = var2.is_canceled;
                var15 = var3 !== var2;
                if (!var15) {
                    _fun66115_ip = 201;
                    continue _fun66115
                }
            case 198:
                var15 = var2;
            case 201:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 48;
                var2 = var11[var2];
                var2 = var8.bind(var3)(var2);
                var8 = var2.bind(var3)(var14, var13);
                var2 = var7 == var8;
                var18 = undefined;
                if (var2) {
                    _fun66115_ip = 252;
                    continue _fun66115
                }
            case 236:
                var11 = var8.startTime;
                var2 = var11.toISOString;
                var18 = var2.bind(var11)();
            case 252:
                _closure2_slot1 = var18;
                var2 = undefined;
                if (!var5) {
                    _fun66115_ip = 298;
                    continue _fun66115
                }
            case 261:
                var11 = var7 == var8;
                var5 = undefined;
                if (var11) {
                    _fun66115_ip = 295;
                    continue _fun66115
                }
            case 270:
                var11 = var8.endTime;
                var8 = var7 == var11;
                var5 = undefined;
                if (var8) {
                    _fun66115_ip = 295;
                    continue _fun66115
                }
            case 285:
                var8 = var11.toISOString;
                var5 = var8.bind(var11)();
            case 295:
                var2 = var5;
            case 298:
                _closure2_slot2 = var2;
                var11 = _closure1_slot5;
                var8 = var11.useMemo;
                var5 = new Array(2);
                var5[0] = var18;
                var5[1] = var2;
                var2 = function() { // Environment: var16
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 32;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getEventTimeData;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var8.bind(var11)(var2, var5);
                var5 = _closure1_slot19;
                var18 = var5.STAGE_INSTANCE;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 49;
                var5 = var11[var5];
                var11 = var8.bind(var3)(var5);
                var8 = var11.getGuildScheduledEventHeaderProps;
                var5 = {};
                var5.eventTimeData = var2;
                var18 = var19 === var18;
                var5.isStage = var18;
                var5.theme = var17;
                var5.event = var14;
                var5.isCanceled = var15;
                var5.recurrenceId = var13;
                var5 = var8.bind(var11)(var5);
                var21 = var5.color;
                _closure2_slot3 = var21;
                var17 = var5.text;
                var18 = var5.shouldChangeTextColor;
                _closure2_slot4 = var18;
                var11 = var2.endDateTimeString;
                var5 = null;
                if (!var0) {
                    _fun66115_ip = 544;
                    continue _fun66115
                }
            case 448:
                var8 = _closure1_slot23;
                var2 = _closure1_slot32;
                var0 = {};
                var0.event = var14;
                var0.recurrenceId = var13;
                var13 = var8.bind(var3)(var2, var0);
                var0 = var13;
                if (var1) {
                    _fun66115_ip = 541;
                    continue _fun66115
                }
            case 480:
                var8 = _closure1_slot23;
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 50;
                var1 = var15[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var15 = 'button';
                var1.accessibilityRole = var15;
                var15 = function() {
                    var0 = undefined;
                    return var0;
                };
                var1.onPress = var15;
                var1.children = var13;
                var0 = var8.bind(var3)(var2, var1);
            case 541:
                var5 = var0;
            case 544:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 26;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                var8 = var13.useStateFromStores;
                var0 = _closure1_slot15;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = new Array(1);
                var1[0] = var14;
                var0 = function() { // Environment: var16
                    var2 = _closure1_slot15;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.creator_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var8.bind(var13)(var2, var0, var1);
                var13 = var7 != var11;
                if (!var13) {
                    _fun66115_ip = 618;
                    continue _fun66115
                }
            case 610:
                var0 = '';
                var13 = var0 !== var11;
            case 618:
                var19 = var17;
                if (!var13) {
                    _fun66115_ip = 706;
                    continue _fun66115
                }
            case 624:
                var1 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 20;
                var2 = var20[var0];
                var2 = var1.bind(var3)(var2);
                var8 = var2.intl;
                var2 = var8.format;
                var0 = var20[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.vHYgJW;
                var0 = {};
                var0.start = var17;
                var16 = function arg0() {
                    _fun66119: for (var _fun66119_ip = 0;;) switch (_fun66119_ip) {
                        case 0:
                            var3 = _closure1_slot23;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Text;
                            var0 = {
                                'variant': 'text-sm/semibold',
                                'color': 'text-subtle'
                            };
                            var4 = _closure2_slot4;
                            if (!var4) {
                                _fun66119_ip = 71;
                                continue _fun66119
                            }
                        case 58:
                            var5 = {};
                            var6 = _closure2_slot3;
                            var5.color = var6;
                            var4 = var5;
                        case 71:
                            var0.style = var4;
                            var4 = arg0;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var0.startHook = var16;
                var0.end = var11;
                var19 = var2.bind(var8)(var1, var0);
            case 706:
                var2 = _closure1_slot24;
                var1 = _closure1_slot6;
                var0 = {};
                var11 = var10.headerContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var9;
                var0.style = var8;
                var11 = _closure1_slot23;
                if (var4) {
                    _fun66115_ip = 803;
                    continue _fun66115
                }
            case 745:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 53;
                var4 = var9[var4];
                var4 = var8.bind(var3)(var4);
                var8 = var4.CalendarIcon;
                var4 = {};
                var9 = 'sm';
                var4.size = var9;
                var4.color = var21;
                var9 = var10.dateIcon;
                var4.style = var9;
                var8 = var11.bind(var3)(var8, var4);
                _fun66115_ip = 852;
                continue _fun66115;
            case 803:
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 52;
                var4 = var16[var4];
                var9 = var9.bind(var3)(var4);
                var4 = {};
                var16 = var10.newBadge;
                var4.containerStyle = var16;
                var16 = 'text-xs/bold';
                var4.variant = var16;
                var8 = var11.bind(var3)(var9, var4);
            case 852:
                var4 = new Array(4);
                var4[0] = var8;
                var11 = _closure1_slot23;
                var9 = _closure1_slot6;
                var8 = {};
                var16 = var10.dateContainer;
                var8.style = var16;
                var17 = _closure1_slot23;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 51;
                var16 = var22[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.Text;
                if (var13) {
                    _fun66115_ip = 948;
                    continue _fun66115
                }
            case 912:
                var13 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                if (!var18) {
                    _fun66115_ip = 938;
                    continue _fun66115
                }
            case 929:
                var20 = {};
                var20.color = var21;
                var18 = var20;
            case 938:
                var13.style = var18;
                var13.children = var19;
                _fun66115_ip = 969;
                continue _fun66115;
            case 948:
                var18 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var18.children = var19;
                var13 = var18;
            case 969:
                var13 = var17.bind(var3)(var16, var13);
                var8.children = var13;
                var8 = var11.bind(var3)(var9, var8);
                var4[1] = var8;
                if (!var6) {
                    _fun66115_ip = 996;
                    continue _fun66115
                }
            case 992:
                var6 = var7 != var15;
            case 996:
                if (!var6) {
                    _fun66115_ip = 1157;
                    continue _fun66115
                }
            case 1002:
                var9 = _closure1_slot23;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 54;
                var7 = var13[var11];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var16 = true;
                var7.accessible = var16;
                var12 = _closure1_slot0;
                var16 = 20;
                var17 = var13[var16];
                var17 = var12.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.formatToPlainString;
                var16 = var13[var16];
                var16 = var12.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["+3iypQ"];
                var16 = {};
                var20 = var15.username;
                var16.username = var20;
                var16 = var18.bind(var19)(var17, var16);
                var7.accessibilityLabel = var16;
                var7.user = var15;
                var14 = var14.guild_id;
                var7.guildId = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.XSMALL_20;
                var7.size = var11;
                var10 = var10.creatorAvatar;
                var7.style = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1157:
                var4[2] = var6;
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildEventCardHeader = var5;
    var2.GuildEventCardTitle = var4;
    var2.GuildEventCardDescription = var3;
    var3 = function arg0() {
        var1 = arg0;
        var11 = var1.event;
        var13 = var1.titleStyle;
        var12 = var1.titleContainerStyle;
        var0 = var1.onTitlePress;
        var10 = var1.descriptionStyle;
        var9 = var1.descriptionContainerStyle;
        var8 = var1.condensed;
        var3 = _closure1_slot24;
        var2 = _closure1_slot25;
        var1 = {};
        var7 = _closure1_slot23;
        var6 = _closure1_slot33;
        var4 = {};
        var4.event = var11;
        var4.textStyle = var13;
        var4.style = var12;
        var4.condensed = var8;
        var4.onPress = var0;
        var0 = undefined;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot23;
        var6 = _closure1_slot34;
        var5 = {};
        var5.event = var11;
        var5.textStyle = var10;
        var5.style = var9;
        var5.condensed = var8;
        var8 = 3;
        var5.numberOfLines = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.GuildEventCardMetaInfo = var3;
    var3 = function arg0() {
        _fun66121: for (var _fun66121_ip = 0;;) switch (_fun66121_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.event;
                var1 = _closure1_slot26;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var6 = var5.channel_id;
                var _closure2_slot0 = var6;
                var10 = var5.guild_id;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 26;
                var7 = var2[var3];
                var13 = var1.bind(var4)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var12.bind(var13)(var8, var6, var7);
                var _closure2_slot1 = var15;
                var3 = var2[var3];
                var8 = var1.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot12;
                var6 = new Array(2);
                var6[0] = var3;
                var3 = _closure1_slot10;
                var6[1] = var3;
                var3 = new Array(1);
                var3[0] = var15;
                var0 = function() { // Environment: var0
                    _fun66123: for (var _fun66123_ip = 0;;) switch (_fun66123_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getId;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot12;
                            var1 = var2.isMember;
                            var5 = _closure2_slot1;
                            var0 = null;
                            var5 = var0 == var5;
                            var0 = undefined;
                            if (var5) {
                                _fun66123_ip = 54;
                                continue _fun66123
                            }
                        case 45:
                            var4 = _closure2_slot1;
                            var0 = var4.guild_id;
                        case 54:
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var6, var0, var3);
                var0 = 56;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getLocationFromEvent;
                var2 = var0.bind(var1)(var5);
                var0 = null;
                if (!(var0 == var15)) {
                    _fun66121_ip = 193;
                    continue _fun66121
                }
            case 186:
                if (!(var0 != var2)) {
                    _fun66121_ip = 494;
                    continue _fun66121
                }
            case 193:
                var6 = var0 == var15;
                var1 = undefined;
                if (var6) {
                    _fun66121_ip = 207;
                    continue _fun66121
                }
            case 202:
                var1 = var15.name;
            case 207:
                var14 = var2;
                if (!(var0 != var1)) {
                    _fun66121_ip = 217;
                    continue _fun66121
                }
            case 214:
                var14 = var1;
            case 217:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 57;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getEventLocationIconComponent;
                var8 = var1.bind(var2)(var5, var15, var3);
                var3 = _closure1_slot24;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var9.channelContainer;
                var1.style = var5;
                var6 = var0 != var8;
                if (!var6) {
                    _fun66121_ip = 307;
                    continue _fun66121
                }
            case 277:
                var7 = _closure1_slot23;
                var5 = {};
                var12 = 'sm';
                var5.size = var12;
                var12 = var9.channelIcon;
                var5.style = var12;
                var6 = var7.bind(var4)(var8, var5);
            case 307:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot23;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 51;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var9 = var9.channelText;
                var6.style = var9;
                var12 = var0 != var15;
                var9 = undefined;
                if (!var12) {
                    _fun66121_ip = 396;
                    continue _fun66121
                }
            case 365:
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 58;
                var12 = var16[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.channel = var15;
                var9 = var13.bind(var4)(var12);
            case 396:
                var6.accessibilityLabel = var9;
                var9 = 'text-sm/medium';
                var6.variant = var9;
                var9 = 'text-default';
                var6.color = var9;
                var12 = var0 != var14;
                var9 = null;
                if (!var12) {
                    _fun66121_ip = 468;
                    continue _fun66121
                }
            case 427:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 55;
                var11 = var13[var11];
                var13 = var12.bind(var4)(var11);
                var12 = var13.guildEventDetailsParser;
                var11 = {};
                var11.guildId = var10;
                var10 = true;
                var9 = var12.bind(var13)(var14, var10, var11);
            case 468:
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 494:
                return var0;
        }
    };
    var2.GuildEventSimpleLocation = var3;
    var3 = function arg0() {
        _fun66124: for (var _fun66124_ip = 0;;) switch (_fun66124_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.event;
                var6 = var2.style;
                var13 = var2.textStyle;
                var2 = _closure1_slot26;
                var4 = undefined;
                var11 = var2.bind(var4)();
                var7 = var1.guild_id;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot13;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var3.bind(var5)(var2, var0, var1);
                var0 = null;
                var1 = var0 == var12;
                if (var1) {
                    _fun66124_ip = 326;
                    continue _fun66124
                }
            case 115:
                var3 = _closure1_slot24;
                var2 = _closure1_slot6;
                var1 = {};
                var7 = var11.guildInfoContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 59;
                var5 = var14[var8];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.guild = var12;
                var10 = _closure1_slot0;
                var8 = var14[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.GuildIconSizes;
                var8 = var8.XSMALL_20;
                var5.size = var8;
                var8 = var11.guildIcon;
                var5.style = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot23;
                var7 = _closure1_slot6;
                var6 = {};
                var11 = var11.guildInfo;
                var6.style = var11;
                var11 = _closure1_slot23;
                var9 = 51;
                var9 = var14[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {};
                var14 = 'text-sm/semibold';
                var9.variant = var14;
                var9.style = var13;
                var12 = var12.name;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 326:
                return var0;
        }
    };
    var2.GuildEventCardSimpleGuildInfo = var3;
    var1 = function arg0() {
        _fun66126: for (var _fun66126_ip = 0;;) switch (_fun66126_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.event;
                var1 = _closure1_slot26;
                var4 = undefined;
                var18 = var1.bind(var4)();
                var7 = var5.channel_id;
                var _closure2_slot0 = var7;
                var6 = var5.guild_id;
                var _closure2_slot1 = var6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var8 = var3[var1];
                var11 = var2.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot11;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var7, var8);
                var _closure2_slot2 = var9;
                var7 = var3[var1];
                var11 = var2.bind(var4)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot13;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot13;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var10.bind(var11)(var8, var6, var7);
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStores;
                var1 = _closure1_slot12;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot10;
                var2[1] = var1;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    _fun66129: for (var _fun66129_ip = 0;;) switch (_fun66129_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getId;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot12;
                            var1 = var2.isMember;
                            var5 = _closure2_slot2;
                            var0 = null;
                            var5 = var0 == var5;
                            var0 = undefined;
                            if (var5) {
                                _fun66129_ip = 54;
                                continue _fun66129
                            }
                        case 45:
                            var4 = _closure2_slot2;
                            var0 = var4.guild_id;
                        case 54:
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var3 = var3.bind(var6)(var2, var0, var1);
                var0 = null;
                if (!(var0 != var13)) {
                    _fun66126_ip = 711;
                    continue _fun66126
                }
            case 218:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 56;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getLocationFromEvent;
                var10 = var1.bind(var2)(var5);
                var2 = var0 == var9;
                var1 = undefined;
                if (var2) {
                    _fun66126_ip = 263;
                    continue _fun66126
                }
            case 258:
                var1 = var9.name;
            case 263:
                var17 = var10;
                if (!(var0 != var1)) {
                    _fun66126_ip = 273;
                    continue _fun66126
                }
            case 270:
                var17 = var1;
            case 273:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 57;
                var1 = var8[var1];
                var2 = var11.bind(var4)(var1);
                var1 = var2.getEventLocationIconSource;
                var24 = var1.bind(var2)(var5, var9, var3);
                var3 = _closure1_slot24;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var18.guildInfoContainer;
                var1.style = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot1;
                var12 = 59;
                var5 = var8[var12];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.guild = var13;
                var12 = var8[var12];
                var12 = var11.bind(var4)(var12);
                var12 = var12.GuildIconSizes;
                var12 = var12.SMALL;
                var5.size = var12;
                var12 = var18.guildIcon;
                var5.style = var12;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var12 = var18.guildInfo;
                var6.style = var12;
                var12 = _closure1_slot23;
                var19 = 51;
                var8 = var8[var19];
                var8 = var11.bind(var4)(var8);
                var11 = var8.Text;
                var8 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var13.name;
                var8.children = var13;
                var11 = var12.bind(var4)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var9 = var0 != var9;
                if (var9) {
                    _fun66126_ip = 486;
                    continue _fun66126
                }
            case 482:
                var9 = var0 != var10;
            case 486:
                if (!var9) {
                    _fun66126_ip = 681;
                    continue _fun66126
                }
            case 492:
                var12 = _closure1_slot24;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var18.guildInfoChannelContainer;
                var10.style = var13;
                var15 = var0 != var24;
                if (!var15) {
                    _fun66126_ip = 597;
                    continue _fun66126
                }
            case 519:
                var20 = _closure1_slot23;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 60;
                var13 = var23[var21];
                var16 = var22.bind(var4)(var13);
                var13 = {};
                var13.source = var24;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.Sizes;
                var21 = var21.EXTRA_SMALL;
                var13.size = var21;
                var21 = var18.channelIcon;
                var13.style = var21;
                var21 = true;
                var13.disableColor = var21;
                var15 = var20.bind(var4)(var16, var13);
            case 597:
                var13 = new Array(2);
                var13[0] = var15;
                var16 = _closure1_slot23;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var19];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var18 = var18.guildInfoChannelText;
                var14.style = var18;
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 681:
                var8[1] = var9;
                var6.children = var8;
                var6 = var3.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 711:
                return var0;
        }
    };
    var2.GuildEventCardGuildInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1216, 1372, 1681, 1410, 3091, 1621, 3334, 1378, 660, 483, 33, 1297, 671, 8165, 8167, 7508, 1234, 8095, 5291, 3147, 8168, 3255, 566, 8089, 8169, 3262, 8170, 8171, 8083, 4679, 5615, 8172, 3936, 8100, 3937, 7876, 1304, 1417, 8173, 8174, 8176, 4853, 3246, 8087, 8086, 8177, 4902, 3941, 8180, 8181, 5452, 8163, 8102, 8162, 7875, 7393, 4086, 2]);