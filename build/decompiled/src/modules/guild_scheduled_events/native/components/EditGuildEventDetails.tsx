// modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var8.paddingVertical = var9;
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66570: for (var _fun66570_ip = 0;;) switch (_fun66570_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildEvent;
                var _closure2_slot0 = var1;
                var13 = var0.initialGuildEvent;
                var0 = var0.onChange;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var25 = var1.name;
                var10 = var1.description;
                var7 = var1.entityType;
                var0 = var1.scheduledStartTime;
                var _closure2_slot2 = var0;
                var4 = var1.scheduledEndTime;
                var _closure2_slot3 = var4;
                var14 = var1.recurrenceRule;
                var _closure2_slot4 = var14;
                var12 = _closure1_slot5;
                var6 = var12.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var8
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var6.bind(var12)(var1, var2);
                var _closure2_slot5 = var15;
                var2 = var12.useMemo;
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    _fun66572: for (var _fun66572_ip = 0;;) switch (_fun66572_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun66572_ip = 67;
                                continue _fun66572
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 7;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = _closure2_slot2;
                            var4 = var2.bind(var3)(var0);
                            var3 = var4.add;
                            var2 = 1;
                            var0 = 'hour';
                            var0 = var3.bind(var4)(var2, var0);
                            _fun66572_ip = 101;
                            continue _fun66572;
                        case 67:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 7;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 101:
                            return var0;
                    }
                };
                var21 = var2.bind(var12)(var0, var1);
                var _closure2_slot6 = var21;
                var1 = var12.useState;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 8;
                    var1 = var4[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.recurrenceRuleToOption;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var0 = var4[var0];
                    var4 = var1.bind(var5)(var0);
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var1);
                    var0 = _closure2_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var12)(var0);
                var11 = _closure1_slot4;
                var6 = 2;
                var0 = var11.bind(var3)(var0, var6);
                var2 = 0;
                var1 = var0[var2];
                var _closure2_slot7 = var1;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot8 = var0;
                var9 = var12.useMemo;
                var4 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 7;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var2.bind(var1)(var0);
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var22 = var9.bind(var12)(var4, var0);
                var9 = var12.useMemo;
                var4 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 7;
                    var1 = var5[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.bind(var4)();
                    var2 = var3.add;
                    var1 = _closure1_slot0;
                    var0 = 8;
                    var0 = var5[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.MAX_DAYS_AHEAD_AN_EVENT_CAN_START;
                    var0 = 'days';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = new Array(0);
                var19 = var9.bind(var12)(var4, var0);
                var9 = var12.useMemo;
                var4 = new Array(1);
                var4[0] = var15;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot5;
                    var3 = var1.bind(var2)(var0);
                    var2 = var3.add;
                    var1 = 15;
                    var0 = 'minutes';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var18 = var9.bind(var12)(var0, var4);
                var9 = var12.useMemo;
                var4 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 7;
                    var1 = var5[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.bind(var4)();
                    var2 = var3.add;
                    var1 = _closure1_slot0;
                    var0 = 8;
                    var0 = var5[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.MAX_DAYS_AHEAD_AN_EVENT_CAN_END;
                    var0 = 'days';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = new Array(0);
                var17 = var9.bind(var12)(var4, var0);
                var0 = var12.useRef;
                var9 = null;
                var4 = var0.bind(var12)(var9);
                var _closure2_slot9 = var4;
                var0 = _closure1_slot6;
                var24 = var0.bind(var3)(var13);
                var _closure2_slot10 = var24;
                var0 = var12.useState;
                var0 = var0.bind(var12)(var9);
                var0 = var11.bind(var3)(var0, var6);
                var26 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot11 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot12 = var0;
                var0 = function arg0() {
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot13 = var0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var6 = var9 != var26;
                var11 = null;
                if (!var6) {
                    _fun66570_ip = 486;
                    continue _fun66570
                }
            case 422:
                var13 = _closure1_slot8;
                var12 = _closure1_slot0;
                var20 = _closure1_slot3;
                var6 = 10;
                var6 = var20[var6];
                var6 = var12.bind(var3)(var6);
                var12 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-feedback-critical'
                };
                var16 = var16.error;
                var6.style = var16;
                var6.children = var26;
                var11 = var13.bind(var3)(var12, var6);
            case 486:
                var6 = new Array(2);
                var6[0] = var11;
                var13 = _closure1_slot8;
                var23 = _closure1_slot0;
                var16 = _closure1_slot3;
                var11 = 11;
                var11 = var16[var11];
                var11 = var23.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {};
                var20 = 6;
                var27 = var16[var20];
                var27 = var23.bind(var3)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var16[var20];
                var27 = var23.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.PDTjLN;
                var27 = var28.bind(var29)(var27);
                var11.text = var27;
                var27 = 'primary';
                var11.variant = var27;
                var27 = function() {
                    _fun66579: for (var _fun66579_ip = 0;;) switch (_fun66579_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.dismissGlobalKeyboard;
                            var1 = var1.bind(var3)();
                        case 35: // try_start_0
                            var4 = _closure2_slot11;
                            var3 = null;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure2_slot0;
                            var3 = var3.name;
                            var4 = var3.length;
                            var3 = 0;
                            if (!(var3 !== var4)) {
                                _fun66579_ip = 121;
                                continue _fun66579
                            }
                        case 69:
                            var4 = _closure2_slot12;
                            var3 = var4.navigate;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 13;
                            var1 = var6[var1];
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.EditGuildEventScreens;
                            var1 = var1.PREVIEW;
                            var1 = var3.bind(var4)(var1);
                        case 116: // try_end0
                            _fun66579_ip = 269;
                            continue _fun66579;
                        case 121: // try_start_1
                            var1 = global;
                            var4 = var1.Error;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 6;
                            var3 = var7[var1];
                            var3 = var6.bind(var0)(var3);
                            var5 = var3.intl;
                            var3 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.GoV0uR;
                            var8 = var3.bind(var5)(var1);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var9 = var3;
                            var1 = new var9[var4](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var3;
                            throw var1;
                        case 208: // try_end1 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 1);
                            var4 = _closure2_slot11;
                            var3 = var1.message;
                            var3 = var4.bind(var0)(var3);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 14;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = var1.message;
                            var1 = var2.bind(var3)(var1);
                        case 269:
                            return var0;
                    }
                };
                var11.onPress = var27;
                var26 = var9 != var26;
                var11.disabled = var26;
                var11 = var13.bind(var3)(var12, var11);
                var6[1] = var11;
                var0.children = var6;
                var11 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot10;
                var6 = _closure1_slot1;
                var0 = 15;
                var0 = var16[var0];
                var1 = var6.bind(var3)(var0);
                var0 = {};
                var0.action = var11;
                var0.ref = var4;
                var4 = 16;
                var4 = var16[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var11 = var16[var20];
                var11 = var23.bind(var3)(var11);
                var26 = var11.intl;
                var12 = var26.string;
                var11 = var16[var20];
                var11 = var23.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.GG6vbr;
                var11 = var12.bind(var26)(var11);
                var4.title = var11;
                var11 = var16[var20];
                var11 = var23.bind(var3)(var11);
                var26 = var11.intl;
                var12 = var26.string;
                var11 = var16[var20];
                var11 = var23.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.q5lgwV;
                var11 = var12.bind(var26)(var11);
                var4.subtitle = var11;
                var6 = var13.bind(var3)(var6, var4);
                var4 = new Array(6);
                var4[0] = var6;
                var11 = 17;
                var6 = var16[var11];
                var6 = var23.bind(var3)(var6);
                var12 = var6.GuildEventTopic;
                var6 = {};
                var6.topic = var25;
                var25 = function arg0() {
                    var2 = _closure2_slot13;
                    var1 = {};
                    var0 = arg0;
                    var1.name = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onChange = var25;
                var6 = var13.bind(var3)(var12, var6);
                var4[1] = var6;
                var6 = var16[var11];
                var6 = var23.bind(var3)(var6);
                var12 = var6.GuildEventDatetime;
                var6 = {};
                var6.date = var15;
                var25 = function arg0() {
                    _fun66581: for (var _fun66581_ip = 0;;) switch (_fun66581_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun66581_ip = 206;
                                continue _fun66581
                            }
                        case 16:
                            var3 = {};
                            var1 = var5.toISOString;
                            var1 = var1.bind(var5)();
                            var3.scheduledStartTime = var1;
                            var1 = _closure2_slot3;
                            var4 = null;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun66581_ip = 61;
                                continue _fun66581
                            }
                        case 46:
                            var6 = _closure2_slot6;
                            var2 = var6.isBefore;
                            var1 = var2.bind(var6)(var5);
                        case 61:
                            if (!var1) {
                                _fun66581_ip = 128;
                                continue _fun66581
                            }
                        case 64:
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 7;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var6.bind(var2)(var1);
                            var7 = var1.bind(var2)(var5);
                            var6 = var7.add;
                            var2 = 1;
                            var1 = 'hour';
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = var2.toISOString;
                            var1 = var1.bind(var2)();
                            var3.scheduledEndTime = var1;
                        case 128:
                            var1 = var4 != var5;
                            if (!var1) {
                                _fun66581_ip = 143;
                                continue _fun66581
                            }
                        case 135:
                            var2 = _closure2_slot7;
                            var1 = var4 != var2;
                        case 143:
                            if (!var1) {
                                _fun66581_ip = 193;
                                continue _fun66581
                            }
                        case 146:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.recurrenceOptionToRecurrenceRule;
                            var1 = _closure2_slot7;
                            var1 = var2.bind(var4)(var1, var5);
                            var3.recurrenceRule = var1;
                        case 193:
                            var2 = _closure2_slot13;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        case 206:
                            var2 = _closure2_slot11;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var0 = 6;
                            var3 = var6[var0];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var0 = var6[var0];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.t;
                            var0 = var0.nKIaRG;
                            var0 = var3.bind(var4)(var0);
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var6.onChange = var25;
                var6.disabled = var24;
                var6.minimumDate = var22;
                var6.maximumDate = var19;
                var19 = var16[var20];
                var19 = var23.bind(var3)(var19);
                var24 = var19.intl;
                var22 = var24.string;
                var19 = var16[var20];
                var19 = var23.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.kKOIwJ;
                var19 = var22.bind(var24)(var19);
                var6.dateLabel = var19;
                var19 = var16[var20];
                var19 = var23.bind(var3)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var16 = var16[var20];
                var16 = var23.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["6dGmCD"];
                var16 = var19.bind(var22)(var16);
                var6.timeLabel = var16;
                var6 = var13.bind(var3)(var12, var6);
                var4[2] = var6;
                var6 = _closure1_slot7;
                var6 = var6.EXTERNAL;
                var6 = var7 === var6;
                if (!var6) {
                    _fun66570_ip = 1166;
                    continue _fun66570
                }
            case 1006:
                var13 = _closure1_slot8;
                var19 = _closure1_slot0;
                var16 = _closure1_slot3;
                var7 = var16[var11];
                var7 = var19.bind(var3)(var7);
                var12 = var7.GuildEventDatetime;
                var7 = {};
                var7.date = var21;
                var21 = function arg0() {
                    var3 = arg0;
                    var2 = _closure2_slot13;
                    var1 = {};
                    var0 = var3.toISOString;
                    var0 = var0.bind(var3)();
                    var1.scheduledEndTime = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onChange = var21;
                var7.minimumDate = var18;
                var7.maximumDate = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var18 = var21.string;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.CTLgZJ;
                var17 = var18.bind(var21)(var17);
                var7.dateLabel = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.j2RuXF;
                var16 = var17.bind(var18)(var16);
                var7.timeLabel = var16;
                var6 = var13.bind(var3)(var12, var7);
            case 1166:
                var4[3] = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var12 = var5[var11];
                var12 = var6.bind(var3)(var12);
                var13 = var12.GuildEventRecurrence;
                var12 = {};
                var12.startDate = var15;
                var12.recurrenceRule = var14;
                var14 = function arg0() {
                    _fun66583: for (var _fun66583_ip = 0;;) switch (_fun66583_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun66583_ip = 82;
                                continue _fun66583
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.recurrenceOptionToRecurrenceRule;
                            var3 = _closure2_slot5;
                            var5 = var4.bind(var5)(var2, var3);
                            var4 = _closure2_slot1;
                            var3 = {};
                            var3.recurrenceRule = var5;
                            var3 = var4.bind(var1)(var3);
                            var0 = _closure2_slot8;
                            var0 = var0.bind(var1)(var2);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12.onRecurrenceChange = var14;
                var12 = var7.bind(var3)(var13, var12);
                var4[4] = var12;
                var5 = var5[var11];
                var5 = var6.bind(var3)(var5);
                var6 = var5.GuildEventDescription;
                var5 = {};
                var11 = var9 != var10;
                var9 = '';
                if (!var11) {
                    _fun66570_ip = 1262;
                    continue _fun66570
                }
            case 1259:
                var9 = var10;
            case 1262:
                var5.description = var9;
                var9 = function arg0() {
                    var2 = _closure2_slot13;
                    var1 = {};
                    var0 = arg0;
                    var1.description = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onChange = var9;
                var8 = function() {
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun66586: for (var _fun66586_ip = 0;;) switch (_fun66586_ip) {
                            case 0:
                                var1 = _closure2_slot9;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun66586_ip = 37;
                                    continue _fun66586
                                }
                            case 18:
                                var0 = _closure2_slot9;
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
                var5.onFocus = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3335, 1378, 33, 1297, 1234, 3047, 8155, 1469, 3942, 4084, 1582, 8173, 3162, 8177, 8222, 8179, 2]);