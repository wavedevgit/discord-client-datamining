// modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_STAGE_TOPIC_LENGTH;
    var _closure1_slot9 = var6;
    var3 = var3.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot11 = var6;
    var11 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventPrivacyLevel;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 16;
    var8.padding = var12;
    var3.container = var8;
    var9 = 'center';
    var8 = {
        'alignItems': 'center',
        'paddingBottom': 24
    };
    var3.header = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8
    };
    var3.headerTitle = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.headerSubtitle = var8;
    var8 = {
        'padding': 12,
        'width': '100%'
    };
    var9 = 10;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var13;
    var3.textInput = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.startButton = var8;
    var8 = {
        'paddingTop': 8,
        'textAlign': 'center'
    };
    var3.buttonSubtitle = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginBottom = var12;
    var3.ageVerificationNotice = var8;
    var8 = {
        'paddingTop': 8,
        'fontSize': 12
    };
    var11 = var11.PRIMARY_MEDIUM;
    var8.fontFamily = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun51956: for (var _fun51956_ip = 0;;) switch (_fun51956_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.channel;
                var _closure2_slot0 = var17;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot15;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 11;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var2 = _closure1_slot8;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var2.bind(var4)(var1, var0);
                var _closure2_slot1 = var24;
                var2 = _closure1_slot6;
                var1 = var2.useState;
                var12 = null;
                var0 = var12 == var24;
                var4 = undefined;
                if (var0) {
                    _fun51956_ip = 117;
                    continue _fun51956
                }
            case 111:
                var4 = var24.topic;
            case 117:
                var5 = var12 != var4;
                var22 = '';
                var0 = var22;
                if (!var5) {
                    _fun51956_ip = 134;
                    continue _fun51956
                }
            case 131:
                var0 = var4;
            case 134:
                var0 = var1.bind(var2)(var0);
                var5 = _closure1_slot5;
                var4 = 2;
                var0 = var5.bind(var3)(var0, var4);
                var2 = 0;
                var21 = var0[var2];
                _closure2_slot2 = var21;
                var1 = 1;
                var28 = var0[var1];
                var6 = _closure1_slot6;
                var7 = var6.useState;
                var0 = false;
                var0 = var7.bind(var6)(var0);
                var0 = var5.bind(var3)(var0, var4);
                var20 = var0[var2];
                var0 = var0[var1];
                _closure2_slot3 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var12);
                var0 = var5.bind(var3)(var0, var4);
                var25 = var0[var2];
                var0 = var0[var1];
                _closure2_slot4 = var0;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 12;
                var0 = var5[var0];
                var2 = var6.bind(var3)(var0);
                var1 = var2.useShouldAgeVerifyToSpeakForCurrentUser;
                var0 = var17.id;
                var11 = var1.bind(var2)(var0);
                var8 = _closure1_slot1;
                var0 = 13;
                var0 = var5[var0];
                var1 = var8.bind(var3)(var0);
                var0 = function() { // Environment: var18
                    _fun51958: for (var _fun51958_ip = 0;;) switch (_fun51958_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot11;
                            var2 = var1.START_STAGE_OPENED;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun51958_ip = 69;
                                continue _fun51958
                            }
                        case 60:
                            var7 = _closure2_slot1;
                            var6 = var7.id;
                        case 69:
                            var1.stage_instance_id = var6;
                            var6 = false;
                            var1.can_start_public_stage = var6;
                            var5 = _closure2_slot0;
                            var5 = var5.guild_id;
                            var1.guild_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var0 = function() { // Environment: var18
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun51961: for (var _fun51961_ip = 0;;) switch (_fun51961_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun51961_ip = 346;
                                        continue _fun51961
                                    }
                                case 10:
                                    var3 = _closure2_slot2;
                                    var2 = var3.trim;
                                    var3 = var2.bind(var3)();
                                    var2 = '';
                                    if (!(var2 !== var3)) {
                                        _fun51961_ip = 341;
                                        continue _fun51961
                                    }
                                case 38:
                                    var4 = _closure2_slot3;
                                    var3 = undefined;
                                    var2 = true;
                                    var2 = var4.bind(var3)(var2);
                                    var2 = _closure2_slot4;
                                    var5 = null;
                                    var2 = var2.bind(var3)(var5);
                                    var6 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var4 = 15;
                                    var4 = var7[var4];
                                    var6 = var6.bind(var3)(var4);
                                    var4 = var6.dismissGlobalKeyboard;
                                    var4 = var4.bind(var6)();
                                case 95: // try_start_0
                                    var4 = _closure2_slot1;
                                    if (!(var5 == var4)) {
                                        _fun51961_ip = 169;
                                        continue _fun51961
                                    }
                                case 103:
                                    var5 = _closure1_slot2;
                                    var6 = _closure1_slot3;
                                    var4 = 16;
                                    var4 = var6[var4];
                                    var9 = var5.bind(var3)(var4);
                                    var8 = var9.startStage;
                                    var13 = _closure2_slot0;
                                    var12 = _closure2_slot2;
                                    var4 = _closure1_slot12;
                                    var11 = var4.GUILD_ONLY;
                                    var10 = false;
                                    var14 = var9;
                                    var4 = var14[var8](var13, var12, var11, var10, var9);
                                    SaveGenerator(address = 160);
                                case 158:
                                    return var4;
                                case 160:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (!var5) {
                                        _fun51961_ip = 230;
                                        continue _fun51961
                                    }
                                case 166: // try_end0
                                    return var4;
                                case 169: // try_start_1
                                    var5 = _closure1_slot2;
                                    var6 = _closure1_slot3;
                                    var4 = 16;
                                    var4 = var6[var4];
                                    var8 = var5.bind(var3)(var4);
                                    var7 = var8.editStage;
                                    var6 = _closure2_slot0;
                                    var5 = _closure2_slot2;
                                    var4 = _closure1_slot12;
                                    var4 = var4.GUILD_ONLY;
                                    var4 = var7.bind(var8)(var6, var5, var4);
                                    SaveGenerator(address = 224);
                                case 222:
                                    return var4;
                                case 224:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun51961_ip = 267;
                                        continue _fun51961
                                    }
                                case 230:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot3;
                                    var5 = 17;
                                    var5 = var7[var5];
                                    var7 = var6.bind(var3)(var5);
                                    var6 = var7.hideActionSheet;
                                    var5 = _closure1_slot10;
                                    var5 = var6.bind(var7)(var5);
                                case 265: // try_end1
                                    _fun51961_ip = 341;
                                    continue _fun51961;
                                case 267:
                                    return var4;
                                case 270: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 5);
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var2 = 18;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var3)(var2);
                                    var2 = var2.APIError;
                                    var4 = var2.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var14 = var4;
                                    var13 = var5;
                                    var2 = new var14[var2](var13, var12);
                                    var4 = var2 instanceof Object ? var2 : var4;
                                    var2 = _closure2_slot4;
                                    var2 = var2.bind(var3)(var4);
                                    var2 = _closure2_slot3;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                case 341:
                                    var1 = undefined;
                                    return var1;
                                case 346:
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
                var23 = var0.bind(var3)();
                var2 = _closure1_slot14;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var13.header;
                var0.style = var4;
                var7 = _closure1_slot13;
                var4 = 19;
                var4 = var5[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var8 = var7.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var9 = 20;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var8 = var13.headerTitle;
                var5.style = var8;
                if (!(var12 != var24)) {
                    _fun51956_ip = 457;
                    continue _fun51956
                }
            case 400:
                var16 = _closure1_slot0;
                var19 = _closure1_slot3;
                var8 = 21;
                var14 = var19[var8];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var8 = var19[var8];
                var8 = var16.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["5BKP4y"];
                var8 = var14.bind(var15)(var8);
                _fun51956_ip = 512;
                continue _fun51956;
            case 457:
                var19 = _closure1_slot0;
                var26 = _closure1_slot3;
                var14 = 21;
                var15 = var26[var14];
                var15 = var19.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var26[var14];
                var14 = var19.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.DDF0cJ;
                var8 = var15.bind(var16)(var14);
            case 512:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8 = var13.headerSubtitle;
                var5.style = var8;
                if (!(var12 != var24)) {
                    _fun51956_ip = 639;
                    continue _fun51956
                }
            case 582:
                var16 = _closure1_slot0;
                var19 = _closure1_slot3;
                var8 = 21;
                var14 = var19[var8];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var8 = var19[var8];
                var8 = var16.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["I+9bLx"];
                var8 = var14.bind(var15)(var8);
                _fun51956_ip = 694;
                continue _fun51956;
            case 639:
                var19 = _closure1_slot0;
                var26 = _closure1_slot3;
                var14 = 21;
                var15 = var26[var14];
                var15 = var19.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var26[var14];
                var14 = var19.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.bqQIwa;
                var8 = var15.bind(var16)(var14);
            case 694:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var14 = var2.bind(var3)(var1, var0);
                var0 = var12 == var24;
                var8 = undefined;
                if (!var0) {
                    _fun51956_ip = 782;
                    continue _fun51956
                }
            case 727:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 21;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.gR66jX;
                var8 = var1.bind(var2)(var0);
            case 782:
                var2 = _closure1_slot13;
                var30 = _closure1_slot0;
                var19 = _closure1_slot3;
                var0 = 22;
                var0 = var19[var0];
                var0 = var30.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var6 = _closure1_slot14;
                var4 = 23;
                var4 = var19[var4];
                var4 = var30.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var27 = true;
                var4.bottom = var27;
                var7 = var13.container;
                var4.style = var7;
                var7 = new Array(7);
                var7[0] = var14;
                var15 = _closure1_slot1;
                var14 = 24;
                var14 = var19[var14];
                var26 = var15.bind(var3)(var14);
                var14 = {};
                var16 = 21;
                var29 = var19[var16];
                var29 = var30.bind(var3)(var29);
                var32 = var29.intl;
                var31 = var32.string;
                var29 = var19[var16];
                var29 = var30.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29["5FPBOB"];
                var29 = var31.bind(var32)(var29);
                var14.children = var29;
                var14 = var2.bind(var3)(var26, var14);
                var7[1] = var14;
                var14 = 25;
                var14 = var19[var14];
                var14 = var30.bind(var3)(var14);
                var26 = var14.FormInput;
                var14 = {
                    'inActionSheet': true,
                    'style': null,
                    'showTopContainer': false,
                    'multiline': false,
                    'showBorder': false
                };
                var29 = var13.textInput;
                var14.style = var29;
                var29 = _closure1_slot9;
                var14.maxLength = var29;
                var14.value = var21;
                var29 = var19[var16];
                var29 = var30.bind(var3)(var29);
                var32 = var29.intl;
                var31 = var32.string;
                var29 = var19[var16];
                var29 = var30.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.ZwWruY;
                var29 = var31.bind(var32)(var29);
                var14.placeholder = var29;
                var14.onChange = var28;
                var14.autoFocus = var27;
                var27 = 'done';
                var14.returnKeyType = var27;
                var27 = 26;
                var27 = var19[var27];
                var27 = var30.bind(var3)(var27);
                var27 = var27.ClearButtonVisibility;
                var27 = var27.WITH_CONTENT;
                var14.clearButtonVisibility = var27;
                var27 = var19[var16];
                var27 = var30.bind(var3)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var19[var16];
                var27 = var30.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27["5FPBOB"];
                var27 = var28.bind(var29)(var27);
                var14.accessibilityLabel = var27;
                var14.onNext = var23;
                var14 = var2.bind(var3)(var26, var14);
                var7[2] = var14;
                var14 = 27;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var18 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var0 = _closure1_slot10;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14.onConfirmPress = var18;
                var18 = var13.ageVerificationNotice;
                var14.style = var18;
                var17 = var17.id;
                var14.channelId = var17;
                var14 = var2.bind(var3)(var15, var14);
                var7[3] = var14;
                var15 = var12 != var25;
                var14 = null;
                if (!var15) {
                    _fun51956_ip = 1299;
                    continue _fun51956
                }
            case 1228:
                var18 = _closure1_slot13;
                var17 = _closure1_slot0;
                var15 = _closure1_slot3;
                var15 = var15[var9];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-critical'
                };
                var19 = var13.error;
                var15.style = var19;
                var19 = var25.getAnyErrorMessage;
                var19 = var19.bind(var25)();
                var15.children = var19;
                var14 = var18.bind(var3)(var17, var15);
            case 1299:
                var7[4] = var14;
                var17 = _closure1_slot13;
                var15 = _closure1_slot7;
                var14 = {};
                var18 = var13.startButton;
                var14.style = var18;
                var19 = _closure1_slot0;
                var25 = _closure1_slot3;
                var18 = 28;
                var18 = var25[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.Button;
                var18 = {};
                if (!(var12 != var24)) {
                    _fun51956_ip = 1409;
                    continue _fun51956
                }
            case 1355:
                var27 = _closure1_slot0;
                var24 = _closure1_slot3;
                var25 = var24[var16];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var16];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.K344S7;
                var24 = var25.bind(var26)(var24);
                _fun51956_ip = 1461;
                continue _fun51956;
            case 1409:
                var28 = _closure1_slot0;
                var25 = _closure1_slot3;
                var26 = var25[var16];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var16];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.s8mM8A;
                var24 = var26.bind(var27)(var25);
            case 1461:
                var18.text = var24;
                var18.onPress = var23;
                var21 = var22 === var21;
                var18.disabled = var21;
                var18.loading = var20;
                var18.accessibilityHint = var8;
                var18 = var17.bind(var3)(var19, var18);
                var14.children = var18;
                var14 = var17.bind(var3)(var15, var14);
                var7[5] = var14;
                var8 = var12 != var8;
                if (!var8) {
                    _fun51956_ip = 1517;
                    continue _fun51956
                }
            case 1514:
                var8 = !var11;
            case 1517:
                if (!var8) {
                    _fun51956_ip = 1626;
                    continue _fun51956
                }
            case 1520:
                var11 = _closure1_slot13;
                var15 = _closure1_slot0;
                var12 = _closure1_slot3;
                var9 = var12[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'accessible': false,
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var13 = var13.buttonSubtitle;
                var9.style = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.gR66jX;
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1626:
                var7[6] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1377, 4236, 660, 1378, 33, 1297, 671, 566, 4248, 4104, 795, 1582, 5924, 3280, 3352, 5935, 3943, 1234, 4934, 4737, 5938, 5383, 5412, 5939, 4085, 2]);