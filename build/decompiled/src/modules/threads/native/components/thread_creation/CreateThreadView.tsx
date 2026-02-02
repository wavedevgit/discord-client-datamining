// modules/threads/native/components/thread_creation/CreateThreadView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun104966: for (var _fun104966_ip = 0;;) switch (_fun104966_ip) {
            case 0:
                var0 = arg0;
                var34 = var0.threadSettingsDraft;
                var _closure2_slot0 = var34;
                var12 = var0.parentChannel;
                var _closure2_slot1 = var12;
                var18 = var0.screenIndex;
                var0 = _closure1_slot14;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var38 = _closure1_slot0;
                var36 = _closure1_slot2;
                var41 = 10;
                var0 = var36[var41];
                var1 = var38.bind(var3)(var0);
                var0 = var1.usePrivateThreadMode;
                var40 = var0.bind(var1)(var12);
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var0 = var12.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var37
                    var0 = function() { // Environment: var0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 11;
                        var2 = var5[var3];
                        var0 = undefined;
                        var9 = var4.bind(var0)(var2);
                        var8 = var9.clearDraft;
                        var2 = _closure2_slot1;
                        var7 = var2.id;
                        var6 = _closure1_slot8;
                        var6 = var6.ThreadSettings;
                        var6 = var8.bind(var9)(var7, var6);
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.clearDraft;
                        var2 = var2.id;
                        var1 = _closure1_slot8;
                        var1 = var1.FirstThreadMessage;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot5;
                var0 = var1.useState;
                var10 = null;
                var2 = var0.bind(var1)(var10);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var13 = 0;
                var33 = var1[var13];
                var0 = 1;
                var0 = var1[var0];
                var1 = {};
                var1.parentChannel = var12;
                var1.threadSettingsDraft = var34;
                var1.privateThreadMode = var40;
                var1.setNameError = var0;
                var0 = function arg0() {
                    _fun104969: for (var _fun104969_ip = 0;;) switch (_fun104969_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.parentChannel;
                            var _closure3_slot0 = var4;
                            var6 = var1.threadSettingsDraft;
                            var _closure3_slot1 = var6;
                            var10 = var1.privateThreadMode;
                            var7 = var1.setNameError;
                            var _closure3_slot2 = var7;
                            var1 = undefined;
                            var _closure3_slot6 = var1;
                            var5 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 27;
                            var3 = var11[var3];
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.useNavigation;
                            var3 = var3.bind(var5)();
                            var _closure3_slot3 = var3;
                            var9 = _closure1_slot5;
                            var8 = var9.useRef;
                            var5 = false;
                            var5 = var8.bind(var9)(var5);
                            var _closure3_slot4 = var5;
                            var5 = var6.parentMessageId;
                            var9 = null;
                            var13 = var9 == var5;
                            var _closure3_slot5 = var13;
                            var12 = _closure1_slot5;
                            var8 = var12.useCallback;
                            var5 = new Array(5);
                            var5[0] = var13;
                            var5[1] = var3;
                            var3 = var6.location;
                            var5[2] = var3;
                            var3 = var6.parentMessageId;
                            var5[3] = var3;
                            var5[4] = var4;
                            var3 = function(arg0) { // Environment: var0
                                _fun104970: for (var _fun104970_ip = 0;;) switch (_fun104970_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var1 = _closure3_slot1;
                                        var2 = var1.location;
                                        var1 = 'Message Shortcut';
                                        if (!(var1 === var2)) {
                                            _fun104970_ip = 235;
                                            continue _fun104970
                                        }
                                    case 28:
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 28;
                                        var1 = var3[var1];
                                        var8 = undefined;
                                        var5 = var2.bind(var8)(var1);
                                        var3 = var5.track;
                                        var1 = _closure1_slot11;
                                        var2 = var1.MESSAGE_SHORTCUT_ACTION_SENT;
                                        var1 = {};
                                        var7 = _closure3_slot0;
                                        var9 = var7.id;
                                        var1.channel_id = var9;
                                        var12 = null;
                                        var9 = var12 == var7;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun104970_ip = 103;
                                            continue _fun104970
                                        }
                                    case 94:
                                        var9 = _closure3_slot0;
                                        var7 = var9.guild_id;
                                    case 103:
                                        var1.guild_id = var7;
                                        var7 = _closure3_slot1;
                                        var7 = var7.parentMessageId;
                                        var1.original_message_id = var7;
                                        var7 = 'thread';
                                        var1.action = var7;
                                        var10 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var9 = 29;
                                        var7 = var7[var9];
                                        var11 = var10.bind(var8)(var7);
                                        var10 = var11.collectGuildAnalyticsMetadata;
                                        var7 = _closure3_slot0;
                                        var12 = var12 == var7;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun104970_ip = 178;
                                            continue _fun104970
                                        }
                                    case 169:
                                        var12 = _closure3_slot0;
                                        var7 = var12.guild_id;
                                    case 178:
                                        var13 = var10.bind(var11)(var7);
                                        var14 = var1;
                                        var7 = copyDataProperties(var14, var13);
                                        var7 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var9];
                                        var8 = var7.bind(var8)(var6);
                                        var7 = var8.collectChannelAnalyticsMetadata;
                                        var6 = _closure3_slot0;
                                        var13 = var7.bind(var8)(var6);
                                        var14 = var1;
                                        var6 = copyDataProperties(var14, var13);
                                        var1 = var3.bind(var5)(var2, var1);
                                    case 235:
                                        var2 = _closure3_slot3;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun104970_ip = 301;
                                            continue _fun104970
                                        }
                                    case 245:
                                        var1 = _closure3_slot5;
                                        if (!var1) {
                                            _fun104970_ip = 363;
                                            continue _fun104970
                                        }
                                    case 252:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 30;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var5 = var3.bind(var1)(var2);
                                        var3 = var5.transitionToGuild;
                                        var2 = var4.guild_id;
                                        var1 = var4.id;
                                        var1 = var3.bind(var5)(var2, var1);
                                        _fun104970_ip = 363;
                                        continue _fun104970;
                                    case 301:
                                        var2 = _closure3_slot3;
                                        var1 = var2.navigate;
                                        var0 = {
                                            'name': 'channel',
                                            'key': 'new-thread',
                                            'params': null,
                                            'merge': true
                                        };
                                        var3 = {};
                                        var5 = var4.guild_id;
                                        var3.guildId = var5;
                                        var4 = var4.id;
                                        var3.channelId = var4;
                                        var4 = false;
                                        var3.showCreateThread = var4;
                                        var0.params = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 363:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var8.bind(var12)(var3, var5);
                            var5 = _closure1_slot1;
                            var3 = 31;
                            var3 = var11[var3];
                            var5 = var5.bind(var1)(var3);
                            var3 = {};
                            var3.parentChannel = var4;
                            var11 = var6.parentMessageId;
                            var3.parentMessageId = var11;
                            var3.threadSettings = var6;
                            var3.privateThreadMode = var10;
                            var10 = var6.location;
                            var11 = var9 != var10;
                            var9 = '(unknown)';
                            if (!var11) {
                                _fun104969_ip = 242;
                                continue _fun104969
                            }
                        case 239:
                            var9 = var10;
                        case 242:
                            var3.location = var9;
                            var3.onThreadCreated = var8;
                            var8 = true;
                            var3.useDefaultThreadName = var8;
                            var5 = var5.bind(var1)(var3);
                            _closure3_slot6 = var5;
                            var3 = _closure1_slot5;
                            var2 = var3.useCallback;
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot3;
                                var2 = undefined;
                                var1 = function*(arg0, arg1) { // Environment: var0
                                    var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                                        _fun104973: for (var _fun104973_ip = 0;;) switch (_fun104973_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun104973_ip = 402;
                                                    continue _fun104973
                                                }
                                            case 10:
                                                var7 = arg0;
                                                var5 = arg1;
                                                var1 = undefined;
                                                var4 = undefined;
                                                var6 = _closure3_slot4;
                                                var6 = var6.current;
                                                if (var6) {
                                                    _fun104973_ip = 399;
                                                    continue _fun104973
                                                }
                                            case 38:
                                                var8 = _closure3_slot4;
                                                var6 = true;
                                                var8.current = var6;
                                                var8 = _closure3_slot2;
                                                var6 = null;
                                                var8 = var8.bind(var1)(var6);
                                            case 61: // try_start_0
                                                var8 = _closure3_slot1;
                                                var8 = var8.parentMessageId;
                                                if (!(var6 == var8)) {
                                                    _fun104973_ip = 105;
                                                    continue _fun104973
                                                }
                                            case 75:
                                                var8 = _closure3_slot1;
                                                var8 = var8.name;
                                                if (!(var6 != var8)) {
                                                    _fun104973_ip = 192;
                                                    continue _fun104973
                                                }
                                            case 88:
                                                var8 = _closure3_slot1;
                                                var9 = var8.name;
                                                var8 = '';
                                                if (!(var8 !== var9)) {
                                                    _fun104973_ip = 192;
                                                    continue _fun104973
                                                }
                                            case 105:
                                                var8 = _closure3_slot6;
                                                var5 = var8.bind(var1)(var7, var5);
                                                SaveGenerator(address = 119);
                                            case 117:
                                                return var5;
                                            case 119:
                                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                                if (var7) {
                                                    _fun104973_ip = 189;
                                                    continue _fun104973
                                                }
                                            case 125:
                                                var9 = _closure1_slot1;
                                                var10 = _closure1_slot2;
                                                var8 = 11;
                                                var8 = var10[var8];
                                                var11 = var9.bind(var1)(var8);
                                                var10 = var11.saveDraft;
                                                var8 = _closure3_slot0;
                                                var9 = var8.id;
                                                var7 = _closure1_slot8;
                                                var8 = var7.FirstThreadMessage;
                                                var7 = '';
                                                var7 = var10.bind(var11)(var9, var7, var8);
                                            case 184: // try_end0
                                                _fun104973_ip = 387;
                                                continue _fun104973;
                                            case 189:
                                                return var5;
                                            case 192: // try_start_1
                                                var9 = _closure3_slot2;
                                                var7 = _closure1_slot0;
                                                var8 = _closure1_slot2;
                                                var5 = 32;
                                                var5 = var8[var5];
                                                var10 = var7.bind(var1)(var5);
                                                var5 = var10.makeEmptyTitleError;
                                                var5 = var5.bind(var10)();
                                                var5 = var9.bind(var1)(var5);
                                                var5 = 33;
                                                var5 = var8[var5];
                                                var7 = var7.bind(var1)(var5);
                                                var5 = var7.dismissKeyboard;
                                                var5 = var5.bind(var7)();
                                                var7 = _closure3_slot4;
                                                var5 = false;
                                                var7.current = var5;
                                            case 268: // try_end1
                                                return var1;
                                            case 271: // catch_target0 // catch_target1
                                                CatchBlockStart(arg_register = 5);
                                                var3 = var5;
                                                var5 = var5.body;
                                                var4 = var5;
                                                var5 = var6 == var5;
                                                var6 = undefined;
                                                if (var5) {
                                                    _fun104973_ip = 298;
                                                    continue _fun104973
                                                }
                                            case 293:
                                                var6 = var4.code;
                                            case 298:
                                                var4 = _closure1_slot10;
                                                var4 = var4.AUTOMOD_TITLE_BLOCKED;
                                                if (!(var6 === var4)) {
                                                    _fun104973_ip = 387;
                                                    continue _fun104973
                                                }
                                            case 315:
                                                var6 = _closure3_slot2;
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var7 = 32;
                                                var7 = var5[var7];
                                                var9 = var4.bind(var1)(var7);
                                                var8 = var9.makeAutomodViolationError;
                                                var7 = var3.body;
                                                var3 = _closure3_slot0;
                                                var3 = var8.bind(var9)(var7, var3);
                                                var3 = var6.bind(var1)(var3);
                                                var3 = 33;
                                                var3 = var5[var3];
                                                var4 = var4.bind(var1)(var3);
                                                var3 = var4.dismissKeyboard;
                                                var3 = var3.bind(var4)();
                                            case 387:
                                                var3 = _closure3_slot4;
                                                var2 = false;
                                                var3.current = var2;
                                            case 399:
                                                return var1;
                                            case 402:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = var0.bind(var1)();
                            var0 = new Array(5);
                            var0[0] = var7;
                            var7 = var6.parentMessageId;
                            var0[1] = var7;
                            var6 = var6.name;
                            var0[2] = var6;
                            var0[3] = var5;
                            var0[4] = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var16 = var0.bind(var3)(var1);
                var5 = _closure1_slot1;
                var0 = 12;
                var1 = var36[var0];
                var2 = var5.bind(var3)(var1);
                var1 = 13;
                var1 = var36[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.CREATE_THREAD;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var1 = 14;
                var1 = var36[var1];
                var1 = var5.bind(var3)(var1);
                var14 = var1.bind(var3)();
                var1 = 15;
                var1 = var36[var1];
                var2 = var5.bind(var3)(var1);
                var22 = false;
                var7 = true;
                var1 = {
                    'isKeyboardAwareOnAndroid': false,
                    'includeKeyboardHeight': true
                };
                var1 = var2.bind(var3)(var1);
                var20 = var1.insets;
                var1 = var12.isForumLikeChannel;
                var30 = var1.bind(var12)();
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var19 = var1.bind(var2)(var10);
                var2 = _closure1_slot5;
                var1 = var2.useRef;
                var17 = var1.bind(var2)(var10);
                var1 = var34.parentMessageId;
                var35 = var10 != var1;
                var2 = _closure1_slot13;
                var0 = var36[var0];
                var0 = var38.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot12;
                var4 = 16;
                var4 = var36[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.absolute = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var11 = var15.container;
                var8 = new Array(2);
                var8[0] = var11;
                var11 = {};
                var20 = var20.bottom;
                var14 = var14.bottom;
                var14 = var20 - var14;
                var11.marginBottom = var14;
                var8[1] = var11;
                var5.style = var8;
                var14 = _closure1_slot12;
                var11 = _closure1_slot6;
                var8 = {};
                var20 = var15.expander;
                var8.style = var20;
                var11 = var14.bind(var3)(var11, var8);
                var8 = new Array(5);
                var8[0] = var11;
                var20 = _closure1_slot12;
                var14 = _closure1_slot7;
                var11 = {};
                var21 = var15.containerContent;
                var11.style = var21;
                var24 = _closure1_slot13;
                var23 = _closure1_slot6;
                var21 = {};
                var25 = var15.options;
                var21.style = var25;
                var27 = _closure1_slot13;
                var26 = _closure1_slot6;
                var25 = {};
                var28 = var15.optionsInner;
                var25.style = var28;
                var31 = _closure1_slot12;
                var29 = _closure1_slot6;
                var28 = {};
                var32 = var15.threadIconContainer;
                var28.style = var32;
                var42 = _closure1_slot12;
                var32 = 17;
                var32 = var36[var32];
                var32 = var38.bind(var3)(var32);
                var39 = var32.ThreadIcon;
                var32 = {
                    'color': 'white',
                    'size': 'lg'
                };
                var32 = var42.bind(var3)(var39, var32);
                var28.children = var32;
                var29 = var31.bind(var3)(var29, var28);
                var28 = new Array(4);
                var28[0] = var29;
                var32 = _closure1_slot12;
                var29 = 18;
                var29 = var36[var29];
                var29 = var38.bind(var3)(var29);
                var31 = var29.Text;
                var29 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'interactive-text-default'
                };
                var39 = var15.title;
                var29.style = var39;
                var42 = 19;
                var36 = var36[var42];
                var36 = var38.bind(var3)(var36);
                var38 = var36.intl;
                var36 = var38.string;
                var43 = _closure1_slot0;
                var39 = _closure1_slot2;
                var39 = var39[var42];
                var39 = var43.bind(var3)(var39);
                var39 = var39.t;
                if (var35) {
                    _fun104966_ip = 723;
                    continue _fun104966
                }
            case 715:
                var35 = var39.j3XWjD;
                _fun104966_ip = 731;
                continue _fun104966;
            case 723:
                var35 = var39.JPvIiL;
            case 731:
                var36 = var36.bind(var38)(var35);
                var35 = var36.toUpperCase;
                var35 = var35.bind(var36)();
                var29.children = var35;
                var29 = var32.bind(var3)(var31, var29);
                var28[1] = var29;
                var32 = _closure1_slot12;
                var31 = _closure1_slot1;
                var35 = _closure1_slot2;
                var29 = 20;
                var29 = var35[var29];
                var31 = var31.bind(var3)(var29);
                var29 = {};
                var29.ref = var17;
                var29.chatInputRef = var19;
                var29.threadSettingsDraft = var34;
                var29.threadNameError = var33;
                var29 = var32.bind(var3)(var31, var29);
                var28[2] = var29;
                var29 = null;
                if (var30) {
                    _fun104966_ip = 1169;
                    continue _fun104966
                }
            case 823:
                var30 = var34.parentMessageId;
                var30 = var10 != var30;
                var29 = null;
                if (var30) {
                    _fun104966_ip = 1169;
                    continue _fun104966
                }
            case 841:
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var41];
                var30 = var31.bind(var3)(var30);
                var30 = var30.PrivateThreadMode;
                var30 = var30.Disabled;
                var29 = null;
                if (!(var40 !== var30)) {
                    _fun104966_ip = 1169;
                    continue _fun104966
                }
            case 879:
                var32 = _closure1_slot12;
                var31 = _closure1_slot6;
                var30 = {};
                var33 = var15.optionPrivateThread;
                var30.style = var33;
                var36 = _closure1_slot12;
                var39 = _closure1_slot0;
                var38 = _closure1_slot2;
                var33 = 21;
                var33 = var38[var33];
                var33 = var39.bind(var3)(var33);
                var35 = var33.TableSwitchRow;
                var33 = {
                    'start': true,
                    'end': true
                };
                var43 = var38[var42];
                var43 = var39.bind(var3)(var43);
                var45 = var43.intl;
                var44 = var45.string;
                var43 = var38[var42];
                var43 = var39.bind(var3)(var43);
                var43 = var43.t;
                var43 = var43.Wy5RIQ;
                var43 = var44.bind(var45)(var43);
                var33.accessibilityHint = var43;
                var43 = var38[var41];
                var43 = var39.bind(var3)(var43);
                var43 = var43.PrivateThreadMode;
                var43 = var43.Enabled;
                var43 = var40 !== var43;
                var33.disabled = var43;
                var43 = var38[var42];
                var43 = var39.bind(var3)(var43);
                var45 = var43.intl;
                var44 = var45.string;
                var43 = var38[var42];
                var43 = var39.bind(var3)(var43);
                var43 = var43.t;
                var43 = var43.F1zyvU;
                var43 = var44.bind(var45)(var43);
                var33.label = var43;
                var43 = var38[var42];
                var43 = var39.bind(var3)(var43);
                var44 = var43.intl;
                var43 = var44.string;
                var42 = var38[var42];
                var42 = var39.bind(var3)(var42);
                var42 = var42.t;
                var42 = var42.Wy5RIQ;
                var42 = var43.bind(var44)(var42);
                var33.subLabel = var42;
                var38 = var38[var41];
                var39 = var39.bind(var3)(var38);
                var38 = var39.getIsPrivate;
                var38 = var38.bind(var39)(var34, var40);
                var33.value = var38;
                var37 = function arg0() {
                    _fun104975: for (var _fun104975_ip = 0;;) switch (_fun104975_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.parentChannelId;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun104975_ip = 66;
                                continue _fun104975
                            }
                        case 19:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.changeThreadSettings;
                            var0 = {};
                            var4 = arg0;
                            var0.isPrivate = var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var33.onValueChange = var37;
                var33 = var36.bind(var3)(var35, var33);
                var30.children = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 1169:
                var28[3] = var29;
                var25.children = var28;
                var26 = var27.bind(var3)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = var34.parentMessageId;
                var27 = var10 != var26;
                var26 = null;
                if (!var27) {
                    _fun104966_ip = 1334;
                    continue _fun104966
                }
            case 1209:
                var29 = _closure1_slot13;
                var28 = _closure1_slot6;
                var27 = {};
                var30 = var15.parentMessageContainer;
                var27.style = var30;
                var32 = _closure1_slot12;
                var31 = _closure1_slot6;
                var30 = {};
                var33 = var15.border;
                var30.style = var33;
                var31 = var32.bind(var3)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var33 = _closure1_slot12;
                var32 = _closure1_slot0;
                var35 = _closure1_slot2;
                var31 = 22;
                var31 = var35[var31];
                var31 = var32.bind(var3)(var31);
                var32 = var31.ThreadCreationStarterMessage;
                var31 = {};
                var35 = var12.id;
                var31.channelId = var35;
                var34 = var34.parentMessageId;
                var31.messageId = var34;
                var31 = var33.bind(var3)(var32, var31);
                var30[1] = var31;
                var27.children = var30;
                var26 = var29.bind(var3)(var28, var27);
            case 1334:
                var25[1] = var26;
                var21.children = var25;
                var21 = var24.bind(var3)(var23, var21);
                var11.children = var21;
                var11 = var20.bind(var3)(var14, var11);
                var8[1] = var11;
                var11 = var12.rateLimitPerUser;
                var11 = var11 > var13;
                var10 = null;
                if (!var11) {
                    _fun104966_ip = 1468;
                    continue _fun104966
                }
            case 1377:
                var14 = _closure1_slot12;
                var13 = _closure1_slot6;
                var11 = {};
                var15 = var15.typingWrapper;
                var11.style = var15;
                var21 = _closure1_slot12;
                var20 = _closure1_slot1;
                var23 = _closure1_slot2;
                var15 = 23;
                var15 = var23[var15];
                var20 = var20.bind(var3)(var15);
                var15 = {};
                var23 = var12.id;
                var15.channelId = var23;
                var15.hasTypingText = var22;
                var22 = _closure1_slot9;
                var22 = var22.CreateThread;
                var15.slowmodeType = var22;
                var15 = var21.bind(var3)(var20, var15);
                var11.children = var15;
                var10 = var14.bind(var3)(var13, var11);
            case 1468:
                var8[2] = var10;
                var15 = _closure1_slot12;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 24;
                var11 = var13[var11];
                var14 = var10.bind(var3)(var11);
                var11 = {};
                var11.ref = var19;
                var11.channel = var12;
                var11.screenIndex = var18;
                var11.secondaryTextFieldRef = var17;
                var11.threadCreationCallback = var16;
                var11 = var15.bind(var3)(var14, var11);
                var8[3] = var11;
                var11 = _closure1_slot12;
                var9 = 25;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = var12.id;
                var9.channelId = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.StyleSheet;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SlowmodeType;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AbortCodes;
    var _closure1_slot10 = var7;
    var3 = var3.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 9;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var15;
    var9.flex = var10;
    var3.container = var9;
    var9 = {};
    var9.flexGrow = var14;
    var3.containerContent = var9;
    var9 = {};
    var9.flex = var10;
    var3.expander = var9;
    var9 = {
        'height': 1,
        'backgroundColor': null,
        'alignSelf': 'stretch',
        'marginBottom': 16
    };
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var10 = 16;
    var3.border = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.marginTop = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.marginBottom = var14;
    var3.title = var9;
    var9 = {};
    var14 = 12;
    var9.marginHorizontal = var14;
    var3.options = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingBottom = var14;
    var3.optionsInner = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.paddingTop = var14;
    var3.optionPrivateThread = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_64;
    var9.width = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_64;
    var9.height = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.marginTop = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xxl;
    var9.borderRadius = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var14;
    var14 = 'center';
    var9.justifyContent = var14;
    var9.alignItems = var14;
    var3.threadIconContainer = var9;
    var9 = {};
    var13 = var13.hairlineWidth;
    var9.borderBottomWidth = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.paddingVertical = var13;
    var13 = 'flex-end';
    var9.justifyContent = var13;
    var13 = 'row';
    var9.flexDirection = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CHAT_BORDER;
    var9.borderColor = var11;
    var3.typingWrapper = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.parentMessageContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun104976: for (var _fun104976_ip = 0;;) switch (_fun104976_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var6 = var0.screenIndex;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 26;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var5 = var0.bind(var4)(var2);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun104976_ip = 96;
                    continue _fun104976
                }
            case 53:
                var3 = _closure1_slot12;
                var2 = _closure1_slot15;
                var1 = {};
                var7 = var5.parentChannel;
                var1.parentChannel = var7;
                var1.screenIndex = var6;
                var5 = var5.threadSettingsDraft;
                var1.threadSettingsDraft = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 96:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/thread_creation/CreateThreadView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.CreateThreadView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3962, 6499, 660, 33, 1297, 671, 7567, 6445, 5690, 5543, 1568, 4858, 8673, 4805, 3902, 1234, 13655, 5380, 13657, 11610, 11557, 11786, 11521, 1470, 795, 4268, 1220, 9217, 13656, 3679, 2]);