// modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
    var _closure1_slot9 = var6;
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot11 = var6;
    var3 = var3.GuildSettingsSections;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.Fragment;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var9 = 8;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 16;
    var8.marginTop = var10;
    var3.channelSelection = var8;
    var8 = {};
    var8.paddingVertical = var9;
    var3.error = var8;
    var8 = {};
    var9 = 24;
    var8.marginTop = var9;
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65441: for (var _fun65441_ip = 0;;) switch (_fun65441_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.guild;
                var _closure2_slot0 = var16;
                var7 = var0.guildEvent;
                var _closure2_slot1 = var7;
                var12 = var0.guildEventId;
                var2 = var0.initialGuildEvent;
                var0 = var0.onChange;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot16;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var8 = _closure1_slot5;
                var0 = var8.useRef;
                var21 = null;
                var4 = var0.bind(var8)(var21);
                var _closure2_slot3 = var4;
                var10 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 11;
                var0 = var9[var1];
                var17 = var10.bind(var3)(var0);
                var15 = var17.useStateFromStores;
                var0 = _closure1_slot6;
                var14 = new Array(1);
                var14[0] = var0;
                var0 = var7.channelId;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var13
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var15.bind(var17)(var14, var0, var5);
                var1 = var9[var1];
                var17 = var10.bind(var3)(var1);
                var15 = var17.useStateFromStores;
                var1 = _closure1_slot7;
                var14 = new Array(1);
                var14[0] = var1;
                var5 = new Array(1);
                var5[0] = var16;
                var1 = function() { // Environment: var13
                    var3 = _closure1_slot7;
                    var2 = var3.can;
                    var0 = _closure1_slot11;
                    var1 = var0.MANAGE_ROLES;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var15.bind(var17)(var14, var1, var5);
                var1 = var8.useState;
                var14 = var1.bind(var8)(var21);
                var8 = _closure1_slot4;
                var1 = 2;
                var8 = var8.bind(var3)(var14, var1);
                var1 = 0;
                var20 = var8[var1];
                var1 = 1;
                var1 = var8[var1];
                var _closure2_slot4 = var1;
                var1 = 12;
                var1 = var9[var1];
                var8 = var10.bind(var3)(var1);
                var1 = var8.useNavigation;
                var1 = var1.bind(var8)();
                var _closure2_slot5 = var1;
                var1 = _closure1_slot8;
                var15 = var1.bind(var3)(var2);
                var8 = _closure1_slot13;
                var2 = _closure1_slot1;
                var1 = 13;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.guild = var16;
                var1.channel = var0;
                var1.guildEventId = var12;
                var12 = 10;
                var9 = var9[var12];
                var14 = var10.bind(var3)(var9);
                var10 = var14.getChannelTypeFromEntity;
                var9 = var7.entityType;
                var9 = var10.bind(var14)(var9);
                var1.channelType = var9;
                var9 = function arg0() {
                    var3 = _closure2_slot4;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = arg0;
                    var3 = var3.id;
                    var1.channelId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onChangeChannel = var9;
                var9 = var11.channelSelection;
                var1.style = var9;
                var1 = var8.bind(var3)(var2, var1);
                var8 = var7.entityType;
                var2 = _closure1_slot10;
                var2 = var2.EXTERNAL;
                if (!(var8 !== var2)) {
                    _fun65441_ip = 388;
                    continue _fun65441
                }
            case 377:
                var8 = var1;
                if (!(var21 == var0)) {
                    _fun65441_ip = 484;
                    continue _fun65441
                }
            case 384:
                var8 = null;
                _fun65441_ip = 484;
                continue _fun65441;
            case 388:
                var2 = _closure1_slot13;
                var10 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 14;
                var0 = var9[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.GuildEventLocation;
                var0 = {};
                var9 = var9[var12];
                var10 = var10.bind(var3)(var9);
                var9 = var10.getLocationFromEventData;
                var10 = var9.bind(var10)(var7);
                var12 = var21 != var10;
                var9 = '';
                if (!var12) {
                    _fun65441_ip = 454;
                    continue _fun65441
                }
            case 451:
                var9 = var10;
            case 454:
                var0.location = var9;
                var9 = function arg0() {
                    var3 = _closure2_slot4;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = {};
                    var4 = arg0;
                    var3.location = var4;
                    var1.entityMetadata = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onChange = var9;
                var9 = function() {
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun65447: for (var _fun65447_ip = 0;;) switch (_fun65447_ip) {
                            case 0:
                                var1 = _closure2_slot3;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun65447_ip = 37;
                                    continue _fun65447
                                }
                            case 18:
                                var0 = _closure2_slot3;
                                var1 = var0.current;
                                var0 = var1.scrollToEnd;
                                var0 = var0.bind(var1)();
                            case 37:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 100;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.onFocus = var9;
                var8 = var2.bind(var3)(var1, var0);
            case 484:
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var0 = {};
                var9 = var21 != var20;
                var10 = null;
                if (!var9) {
                    _fun65441_ip = 567;
                    continue _fun65441
                }
            case 503:
                var14 = _closure1_slot13;
                var12 = _closure1_slot0;
                var17 = _closure1_slot3;
                var9 = 15;
                var9 = var17[var9];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-feedback-critical'
                };
                var17 = var11.error;
                var9.style = var17;
                var9.children = var20;
                var10 = var14.bind(var3)(var12, var9);
            case 567:
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot13;
                var10 = _closure1_slot0;
                var17 = _closure1_slot3;
                var14 = 16;
                var14 = var17[var14];
                var14 = var10.bind(var3)(var14);
                var19 = var14.Button;
                var18 = {};
                var14 = 9;
                var22 = var17[var14];
                var22 = var10.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var17[var14];
                var22 = var10.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.PDTjLN;
                var22 = var23.bind(var24)(var22);
                var18.text = var22;
                var22 = 'primary';
                var18.variant = var22;
                var22 = function() {
                    _fun65448: for (var _fun65448_ip = 0;;) switch (_fun65448_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.dismissGlobalKeyboard;
                            var1 = var1.bind(var3)();
                        case 35: // try_start_0
                            var3 = _closure2_slot4;
                            var5 = null;
                            var3 = var3.bind(var0)(var5);
                            var8 = _closure2_slot1;
                            var4 = var8.entityType;
                            var3 = var8.channelId;
                            var6 = _closure1_slot10;
                            var6 = var6.NONE;
                            if (!(var4 !== var6)) {
                                _fun65448_ip = 376;
                                continue _fun65448
                            }
                        case 81:
                            var6 = _closure1_slot10;
                            var6 = var6.EXTERNAL;
                            if (!(var4 === var6)) {
                                _fun65448_ip = 133;
                                continue _fun65448
                            }
                        case 95:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 10;
                            var6 = var9[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getLocationFromEventData;
                            var6 = var6.bind(var7)(var8);
                            if (!(var5 != var6)) {
                                _fun65448_ip = 289;
                                continue _fun65448
                            }
                        case 133:
                            if (!(var5 == var3)) {
                                _fun65448_ip = 151;
                                continue _fun65448
                            }
                        case 137:
                            var3 = _closure1_slot10;
                            var3 = var3.EXTERNAL;
                            if (!(var4 === var3)) {
                                _fun65448_ip = 202;
                                continue _fun65448
                            }
                        case 151:
                            var4 = _closure2_slot5;
                            var3 = var4.push;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 18;
                            var1 = var6[var1];
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.EditGuildEventScreens;
                            var1 = var1.DETAILS;
                            var1 = var3.bind(var4)(var1);
                        case 197: // try_end0
                            _fun65448_ip = 524;
                            continue _fun65448;
                        case 202: // try_start_1
                            var1 = global;
                            var4 = var1.Error;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 9;
                            var3 = var7[var1];
                            var3 = var6.bind(var0)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1["4LQwnw"];
                            var10 = var3.bind(var5)(var1);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = var3;
                            var1 = new var11[var4](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            throw var1;
                        case 289:
                            var1 = global;
                            var4 = var1.Error;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 9;
                            var3 = var7[var1];
                            var3 = var6.bind(var0)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.q91szp;
                            var10 = var3.bind(var5)(var1);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = var3;
                            var1 = new var11[var4](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            throw var1;
                        case 376:
                            var1 = global;
                            var4 = var1.Error;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 9;
                            var3 = var7[var1];
                            var3 = var6.bind(var0)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.C4KzmQ;
                            var10 = var3.bind(var5)(var1);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var11 = var3;
                            var1 = new var11[var4](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var3;
                            throw var1;
                        case 463: // try_end1 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 1);
                            var4 = _closure2_slot4;
                            var3 = var1.message;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 19;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = var1.message;
                            var1 = var2.bind(var3)(var1);
                        case 524:
                            return var0;
                    }
                };
                var18.onPress = var22;
                var20 = var21 != var20;
                var18.disabled = var20;
                var18 = var12.bind(var3)(var19, var18);
                var9[1] = var18;
                var0.children = var9;
                var18 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot15;
                var9 = _closure1_slot1;
                var0 = 20;
                var0 = var17[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var0.action = var18;
                var0.ref = var4;
                var4 = 21;
                var4 = var17[var4];
                var9 = var9.bind(var3)(var4);
                var4 = {};
                var18 = var17[var14];
                var18 = var10.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var17[var14];
                var18 = var10.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["DC+Qm8"];
                var18 = var19.bind(var20)(var18);
                var4.title = var18;
                var18 = var17[var14];
                var18 = var10.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var17[var14];
                var18 = var10.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.IwmXLP;
                var18 = var19.bind(var20)(var18);
                var4.subtitle = var18;
                var9 = var12.bind(var3)(var9, var4);
                var4 = new Array(5);
                var4[0] = var9;
                var9 = 14;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.GuildEventEntityTypeSelection;
                var9 = {};
                var9.guild = var16;
                var16 = var7.entityType;
                var9.entityType = var16;
                var16 = function arg0() {
                    _fun65449: for (var _fun65449_ip = 0;;) switch (_fun65449_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var4 = null;
                            var2 = var2.bind(var0)(var4);
                            var2 = {};
                            var2.entityType = var6;
                            var2.scheduledEndTime = var0;
                            var5 = _closure1_slot10;
                            var5 = var5.EXTERNAL;
                            if (!(var6 === var5)) {
                                _fun65449_ip = 142;
                                continue _fun65449
                            }
                        case 48:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var5 = 22;
                            var6 = var6[var5];
                            var7 = var7.bind(var0)(var6);
                            var6 = _closure2_slot1;
                            var6 = var6.scheduledStartTime;
                            var6 = var7.bind(var0)(var6);
                            if (!(var4 == var6)) {
                                _fun65449_ip = 108;
                                continue _fun65449
                            }
                        case 87:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var3 = var3[var5];
                            var3 = var4.bind(var0)(var3);
                            var6 = var3.bind(var0)();
                        case 108:
                            var5 = var6.add;
                            var4 = 1;
                            var3 = 'hour';
                            var4 = var5.bind(var6)(var4, var3);
                            var3 = var4.toISOString;
                            var3 = var3.bind(var4)();
                            var2.scheduledEndTime = var3;
                        case 142:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var9.onChange = var16;
                var9.disabled = var15;
                var9 = var12.bind(var3)(var10, var9);
                var4[1] = var9;
                var4[2] = var8;
                var9 = _closure1_slot9;
                var8 = var9.has;
                var7 = var7.entityType;
                var7 = var8.bind(var9)(var7);
                if (!var7) {
                    _fun65441_ip = 980;
                    continue _fun65441
                }
            case 948:
                var10 = _closure1_slot13;
                var9 = _closure1_slot1;
                var12 = _closure1_slot3;
                var8 = 23;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var7 = var10.bind(var3)(var9, var8);
            case 980:
                var4[3] = var7;
                if (!var5) {
                    _fun65441_ip = 1112;
                    continue _fun65441
                }
            case 990:
                var8 = _closure1_slot13;
                var10 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 24;
                var6 = var9[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.TextWithIOSLinkWorkaround;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var11 = var11.text;
                var6.style = var11;
                var11 = var9[var14];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var9 = var9[var14];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9["K+DH2o"];
                var9 = {};
                var13 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 25;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.open;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot12;
                    var1 = var1.ROLES;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var9.onClick = var13;
                var9 = var11.bind(var12)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1112:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 3052, 3295, 1378, 660, 33, 1297, 1234, 8066, 566, 1469, 8088, 8071, 3902, 4045, 1582, 8065, 3121, 8069, 8114, 3006, 8115, 5296, 8116, 2]);