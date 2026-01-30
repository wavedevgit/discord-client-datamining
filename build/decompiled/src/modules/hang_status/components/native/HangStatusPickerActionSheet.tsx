// modules/hang_status/components/native/HangStatusPickerActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun111684: for (var _fun111684_ip = 0;;) switch (_fun111684_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var11 = 1;
            var6 = var5[var11];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.HangStatusTypes;
            var _closure1_slot9 = var6;
            var6 = var3.HANG_STATUS_ACTION_SHEET_KEY;
            var _closure1_slot10 = var6;
            var6 = var3.HANG_STATUS_FAVORITE_ACTION_SHEET_KEY;
            var _closure1_slot11 = var6;
            var6 = var3.STATUS_MAX_LENGTH;
            var _closure1_slot12 = var6;
            var3 = var3.SYSTEM_HANG_STATUS_TYPES;
            var _closure1_slot13 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.ActivityTypes;
            var _closure1_slot14 = var6;
            var3 = var3.AnalyticEvents;
            var _closure1_slot15 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.EmojiIntention;
            var _closure1_slot16 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot17 = var6;
            var3 = var3.jsxs;
            var _closure1_slot18 = var3;
            var3 = 10;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'gap': null,
                'alignItems': 'center',
                'width': '100%',
                'paddingHorizontal': 16,
                'paddingBottom': 16
            };
            var9 = 11;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var8.gap = var12;
            var14 = 16;
            var3.inputRow = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'gap': null,
                'alignItems': 'center'
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_4;
            var8.gap = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.INPUT_BACKGROUND_DEFAULT;
            var8.backgroundColor = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var8.borderRadius = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_4;
            var8.padding = var12;
            var8.flex = var11;
            var3.inputContainer = var8;
            var8 = {};
            var8.flexGrow = var11;
            var3.input = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'gap': null,
                'alignItems': 'center'
            };
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var8.gap = var11;
            var3.row = var8;
            var8 = {
                'paddingHorizontal': 16,
                'gap': 16
            };
            var3.statusSections = var8;
            var11 = 24;
            var8 = {
                'height': 24,
                'width': 24
            };
            var3.emojiStyle = var8;
            var8 = {};
            var13 = 12;
            var12 = var5[var13];
            var15 = var4.bind(var0)(var12);
            var12 = var15.isIOS;
            var16 = var12.bind(var15)();
            var12 = 20;
            var15 = var12;
            if (!var16) {
                _fun111684_ip = 632;
                continue _fun111684
            }
        case 629:
            var15 = var11;
        case 632:
            var8.fontSize = var15;
            var15 = var5[var13];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isIOS;
            var16 = var15.bind(var16)();
            var15 = 28;
            if (var16) {
                _fun111684_ip = 665;
                continue _fun111684
            }
        case 662:
            var15 = var11;
        case 665:
            var8.lineHeight = var15;
            var3.emojiStyleText = var8;
            var8 = {
                'height': 20,
                'width': 20
            };
            var3.inputEmojiStyle = var8;
            var8 = {};
            var15 = var5[var13];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isIOS;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun111684_ip = 717;
                continue _fun111684
            }
        case 714:
            var14 = var12;
        case 717:
            var8.fontSize = var14;
            var13 = var5[var13];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isIOS;
            var13 = var13.bind(var14)();
            if (var13) {
                _fun111684_ip = 747;
                continue _fun111684
            }
        case 744:
            var11 = var12;
        case 747:
            var8.lineHeight = var11;
            var3.inputEmojiStyleText = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.INPUT_BACKGROUND_DEFAULT;
            var8.backgroundColor = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_12;
            var8.padding = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.radii;
            var11 = var11.round;
            var8.borderRadius = var11;
            var3.inputButton = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
            var8.backgroundColor = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_12;
            var8.padding = var11;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var8.borderRadius = var9;
            var3.randomizeButton = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot19 = var3;
            var3 = 45;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/hang_status/components/native/HangStatusPickerActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: HangStatusPickerActionSheet, environment: var1
                _fun111685: for (var _fun111685_ip = 0;;) switch (_fun111685_ip) {
                    case 0:
                        var0 = arg0;
                        var17 = var0.initialStatusType;
                        var6 = var0.initialStatusText;
                        var16 = var0.initialStatusEmoji;
                        var7 = var0.channelId;
                        var _closure2_slot0 = var7;
                        var3 = undefined;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var _closure2_slot11 = var3;
                        var _closure2_slot12 = var3;
                        var _closure2_slot13 = var3;
                        var _closure2_slot14 = var3;
                        var _closure2_slot15 = var3;
                        var _closure2_slot16 = var3;
                        var _closure2_slot17 = var3;
                        var _closure2_slot18 = var3;
                        var _closure2_slot19 = var3;
                        var0 = _closure1_slot19;
                        var9 = var0.bind(var3)();
                        var _closure2_slot1 = var9;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 13;
                        var1 = var4[var0];
                        var11 = var2.bind(var3)(var1);
                        var8 = var11.useStateFromStores;
                        var1 = _closure1_slot7;
                        var5 = new Array(1);
                        var5[0] = var1;
                        var1 = function() { // Environment: var13
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var8.bind(var11)(var5, var1);
                        var _closure2_slot2 = var5;
                        var1 = var4[var0];
                        var14 = var2.bind(var3)(var1);
                        var12 = var14.useStateFromStores;
                        var1 = _closure1_slot8;
                        var11 = new Array(1);
                        var11[0] = var1;
                        var8 = function() { // Environment: var13
                            var1 = _closure1_slot8;
                            var0 = var1.getCustomHangStatus;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var23 = var12.bind(var14)(var11, var8);
                        var _closure2_slot3 = var23;
                        var8 = var4[var0];
                        var12 = var2.bind(var3)(var8);
                        var11 = var12.useStateFromStores;
                        var8 = new Array(1);
                        var8[0] = var1;
                        var1 = function() { // Environment: var13
                            var1 = _closure1_slot8;
                            var0 = var1.getCurrentHangStatus;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var14 = var11.bind(var12)(var8, var1);
                        var8 = _closure1_slot1;
                        var1 = 14;
                        var1 = var4[var1];
                        var1 = var8.bind(var3)(var1);
                        var15 = var1.bind(var3)();
                        var1 = 15;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.useHangStatusExperiment;
                        var1 = {};
                        var20 = null;
                        var11 = var20 == var5;
                        var8 = undefined;
                        if (var11) {
                            _fun111685_ip = 301;
                            continue _fun111685
                        }
                    case 296:
                        var8 = var5.guild_id;
                    case 301:
                        var1.guildId = var8;
                        var8 = 'HangStatusPickerActionSheet';
                        var1.location = var8;
                        var1 = var2.bind(var4)(var1);
                        var36 = var1.defaultStatusVariant;
                        _closure2_slot4 = var36;
                        var4 = var1.allowPermanentClear;
                        _closure2_slot5 = var4;
                        var1 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = var8[var0];
                        var11 = var1.bind(var3)(var0);
                        var2 = var11.useStateFromStores;
                        var0 = _closure1_slot8;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var13
                            var1 = _closure1_slot8;
                            var0 = var1.getFavoritedStatuses;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var18 = var2.bind(var11)(var1, var0);
                        var2 = _closure1_slot4;
                        var11 = var2.useMemo;
                        var1 = new Array(1);
                        var1[0] = var36;
                        var0 = function() { // Environment: var13
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getHangStatusOptions;
                            var0 = _closure2_slot4;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var31 = var11.bind(var2)(var0, var1);
                        _closure2_slot6 = var31;
                        var1 = _closure1_slot1;
                        var0 = 17;
                        var0 = var8[var0];
                        var0 = var1.bind(var3)(var0);
                        var0 = var0.bind(var3)();
                        var8 = var0.bottom;
                        var1 = var2.useState;
                        if (!(var20 == var6)) {
                            _fun111685_ip = 472;
                            continue _fun111685
                        }
                    case 455:
                        var11 = var20 == var23;
                        var0 = undefined;
                        if (var11) {
                            _fun111685_ip = 469;
                            continue _fun111685
                        }
                    case 464:
                        var0 = var23.status;
                    case 469:
                        var6 = var0;
                    case 472:
                        var11 = var20 != var6;
                        var0 = undefined;
                        if (!var11) {
                            _fun111685_ip = 484;
                            continue _fun111685
                        }
                    case 481:
                        var0 = var6;
                    case 484:
                        var1 = var1.bind(var2)(var0);
                        var0 = _closure1_slot3;
                        var12 = 2;
                        var0 = var0.bind(var3)(var1, var12);
                        var11 = 0;
                        var33 = var0[var11];
                        _closure2_slot7 = var33;
                        var2 = 1;
                        var0 = var0[var2];
                        _closure2_slot8 = var0;
                        var6 = _closure1_slot4;
                        var1 = var6.useState;
                        var0 = var14;
                        if (!(var20 != var17)) {
                            _fun111685_ip = 542;
                            continue _fun111685
                        }
                    case 539:
                        var0 = var17;
                    case 542:
                        if (!(var20 == var0)) {
                            _fun111685_ip = 568;
                            continue _fun111685
                        }
                    case 546:
                        var19 = var20 != var23;
                        var17 = undefined;
                        if (!var19) {
                            _fun111685_ip = 565;
                            continue _fun111685
                        }
                    case 555:
                        var19 = _closure1_slot9;
                        var17 = var19.CUSTOM;
                    case 565:
                        var0 = var17;
                    case 568:
                        var1 = var1.bind(var6)(var0);
                        var0 = _closure1_slot3;
                        var0 = var0.bind(var3)(var1, var12);
                        var30 = var0[var11];
                        _closure2_slot9 = var30;
                        var0 = var0[var2];
                        _closure2_slot10 = var0;
                        var6 = _closure1_slot4;
                        var1 = var6.useState;
                        if (!(var20 == var16)) {
                            _fun111685_ip = 630;
                            continue _fun111685
                        }
                    case 612:
                        var17 = var20 == var23;
                        var0 = undefined;
                        if (var17) {
                            _fun111685_ip = 627;
                            continue _fun111685
                        }
                    case 621:
                        var0 = var23.emoji;
                    case 627:
                        var16 = var0;
                    case 630:
                        var17 = var20 != var16;
                        var0 = undefined;
                        if (!var17) {
                            _fun111685_ip = 642;
                            continue _fun111685
                        }
                    case 639:
                        var0 = var16;
                    case 642:
                        var0 = var1.bind(var6)(var0);
                        var6 = _closure1_slot3;
                        var0 = var6.bind(var3)(var0, var12);
                        var38 = var0[var11];
                        _closure2_slot11 = var38;
                        var0 = var0[var2];
                        _closure2_slot12 = var0;
                        var1 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var0 = 18;
                        var0 = var16[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.bind(var3)(var5);
                        _closure2_slot13 = var1;
                        var17 = _closure1_slot4;
                        var16 = var17.useState;
                        var0 = false;
                        var0 = var16.bind(var17)(var0);
                        var0 = var6.bind(var3)(var0, var12);
                        var34 = var0[var11];
                        var0 = var0[var2];
                        _closure2_slot14 = var0;
                        var32 = var20 != var30;
                        if (!var32) {
                            _fun111685_ip = 757;
                            continue _fun111685
                        }
                    case 743:
                        var2 = _closure1_slot13;
                        var0 = var2.includes;
                        var32 = var0.bind(var2)(var30);
                    case 757:
                        var6 = _closure1_slot4;
                        var12 = var6.useMemo;
                        var2 = new Array(3);
                        var2[0] = var33;
                        var2[1] = var38;
                        var2[2] = var23;
                        var0 = function() { // Environment: var13
                            _fun111691: for (var _fun111691_ip = 0;;) switch (_fun111691_ip) {
                                case 0:
                                    var0 = _closure2_slot7;
                                    var2 = null;
                                    var0 = var2 != var0;
                                    if (!var0) {
                                        _fun111691_ip = 38;
                                        continue _fun111691
                                    }
                                case 16:
                                    var3 = _closure2_slot7;
                                    var1 = var3.trim;
                                    var3 = var1.bind(var3)();
                                    var1 = '';
                                    var0 = var1 !== var3;
                                case 38:
                                    if (!var0) {
                                        _fun111691_ip = 150;
                                        continue _fun111691
                                    }
                                case 41:
                                    var3 = _closure2_slot7;
                                    var1 = _closure2_slot3;
                                    var4 = var2 == var1;
                                    var5 = undefined;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun111691_ip = 69;
                                        continue _fun111691
                                    }
                                case 60:
                                    var4 = _closure2_slot3;
                                    var1 = var4.status;
                                case 69:
                                    var1 = var3 !== var1;
                                    if (var1) {
                                        _fun111691_ip = 147;
                                        continue _fun111691
                                    }
                                case 76:
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 19;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var5)(var3);
                                    var3 = _closure2_slot11;
                                    var6 = _closure2_slot3;
                                    var8 = var2 == var6;
                                    var6 = undefined;
                                    if (var8) {
                                        _fun111691_ip = 126;
                                        continue _fun111691
                                    }
                                case 116:
                                    var7 = _closure2_slot3;
                                    var6 = var7.emoji;
                                case 126:
                                    var7 = var2 != var6;
                                    var2 = undefined;
                                    if (!var7) {
                                        _fun111691_ip = 138;
                                        continue _fun111691
                                    }
                                case 135:
                                    var2 = var6;
                                case 138:
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1 = !var2;
                                case 147:
                                    var0 = var1;
                                case 150:
                                    return var0;
                            }
                        };
                        var17 = var12.bind(var6)(var0, var2);
                        var12 = var6.useCallback;
                        var2 = function() { // Environment: var13
                            var3 = _closure2_slot8;
                            var0 = undefined;
                            var2 = '';
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot12;
                            var2 = var2.bind(var0)(var0);
                            var2 = _closure2_slot14;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = new Array(0);
                        var0 = var12.bind(var6)(var2, var0);
                        _closure2_slot15 = var0;
                        var16 = var6.useCallback;
                        var12 = new Array(3);
                        var12[0] = var38;
                        var12[1] = var33;
                        var12[2] = var30;
                        var2 = function(arg0, arg1, arg2) { // Environment: var13
                            _fun111693: for (var _fun111693_ip = 0;;) switch (_fun111693_ip) {
                                case 0:
                                    var7 = arg0;
                                    var5 = arg1;
                                    var4 = arg2;
                                    var2 = null;
                                    if (!(var2 == var7)) {
                                        _fun111693_ip = 22;
                                        continue _fun111693
                                    }
                                case 15:
                                    var7 = _closure2_slot9;
                                case 22:
                                    if (!(var2 == var5)) {
                                        _fun111693_ip = 33;
                                        continue _fun111693
                                    }
                                case 26:
                                    var5 = _closure2_slot7;
                                case 33:
                                    if (!(var2 == var4)) {
                                        _fun111693_ip = 44;
                                        continue _fun111693
                                    }
                                case 37:
                                    var4 = _closure2_slot11;
                                case 44:
                                    if (!(var2 == var4)) {
                                        _fun111693_ip = 62;
                                        continue _fun111693
                                    }
                                case 48:
                                    var4 = {
                                        'id': null,
                                        'name': '💭',
                                        'animated': false
                                    };
                                case 62:
                                    var0 = _closure1_slot9;
                                    var0 = var0.CUSTOM;
                                    if (!(var7 !== var0)) {
                                        _fun111693_ip = 117;
                                        continue _fun111693
                                    }
                                case 79:
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 20;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var6 = var6.bind(var0)(var3);
                                    var3 = var6.updateHangStatus;
                                    var0 = true;
                                    var0 = var3.bind(var6)(var7, var0);
                                    _fun111693_ip = 189;
                                    continue _fun111693;
                                case 117:
                                    var0 = var2 != var5;
                                    if (!var0) {
                                        _fun111693_ip = 142;
                                        continue _fun111693
                                    }
                                case 124:
                                    var3 = var5.trim;
                                    var6 = var3.bind(var5)();
                                    var3 = '';
                                    var0 = var3 !== var6;
                                case 142:
                                    if (!var0) {
                                        _fun111693_ip = 149;
                                        continue _fun111693
                                    }
                                case 145:
                                    var0 = var2 != var4;
                                case 149:
                                    if (!var0) {
                                        _fun111693_ip = 189;
                                        continue _fun111693
                                    }
                                case 152:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 20;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.updateCustomHangStatus;
                                    var0 = true;
                                    var0 = var2.bind(var3)(var5, var4, var0);
                                case 189:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 21;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.hideActionSheet;
                                    var1 = _closure1_slot10;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var2 = var16.bind(var6)(var2, var12);
                        _closure2_slot16 = var2;
                        var19 = var6.useCallback;
                        var16 = function(arg0) { // Environment: var13
                            var3 = _closure2_slot10;
                            var0 = _closure1_slot9;
                            var2 = var0.CUSTOM;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot8;
                            var2 = arg0;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot14;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var12 = new Array(0);
                        var28 = var19.bind(var6)(var16, var12);
                        var16 = var6.useCallback;
                        var12 = new Array(2);
                        var12[0] = var33;
                        var12[1] = var7;
                        var7 = function(arg0) { // Environment: var13
                            _fun111695: for (var _fun111695_ip = 0;;) switch (_fun111695_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = {};
                                    var1 = var0.id;
                                    var5.id = var1;
                                    var2 = var0.id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun111695_ip = 47;
                                        continue _fun111695
                                    }
                                case 25:
                                    var2 = var0.surrogates;
                                    if (!(var1 != var2)) {
                                        _fun111695_ip = 47;
                                        continue _fun111695
                                    }
                                case 34:
                                    var3 = var0.surrogates;
                                    var2 = '';
                                    if (!(var2 === var3)) {
                                        _fun111695_ip = 68;
                                        continue _fun111695
                                    }
                                case 47:
                                    var2 = var0.name;
                                    var3 = var1 != var2;
                                    var1 = '';
                                    if (!var3) {
                                        _fun111695_ip = 66;
                                        continue _fun111695
                                    }
                                case 63:
                                    var1 = var2;
                                case 66:
                                    _fun111695_ip = 73;
                                    continue _fun111695;
                                case 68:
                                    var1 = var0.surrogates;
                                case 73:
                                    var5.name = var1;
                                    var0 = var0.animated;
                                    var5.animated = var0;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 22;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.showHangStatusPickerActionSheet;
                                    var1 = {};
                                    var4 = _closure1_slot9;
                                    var4 = var4.CUSTOM;
                                    var1.initialStatusType = var4;
                                    var6 = _closure2_slot7;
                                    var1.initialStatusText = var6;
                                    var1.initialStatusEmoji = var5;
                                    var4 = _closure2_slot0;
                                    var1.channelId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var7 = var16.bind(var6)(var7, var12);
                        _closure2_slot17 = var7;
                        var16 = var6.useCallback;
                        var12 = new Array(1);
                        var12[0] = var7;
                        var7 = function() { // Environment: var13
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openEmojiPickerActionSheet;
                            var1 = {};
                            var5 = _closure2_slot17;
                            var1.onPressEmoji = var5;
                            var4 = _closure1_slot16;
                            var4 = var4.STATUS;
                            var1.pickerIntention = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var27 = var16.bind(var6)(var7, var12);
                        var12 = var6.useCallback;
                        var7 = new Array(2);
                        var7[0] = var2;
                        var7[1] = var0;
                        var0 = function(arg0) { // Environment: var13
                            _fun111697: for (var _fun111697_ip = 0;;) switch (_fun111697_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 24;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var5 = var1.bind(var0)(var3);
                                    var2 = _closure2_slot16;
                                    if (var5) {
                                        _fun111697_ip = 87;
                                        continue _fun111697
                                    }
                                case 43:
                                    var4 = _closure1_slot9;
                                    var6 = var4.CUSTOM;
                                    var5 = var3.status;
                                    var7 = var3.emoji;
                                    var4 = null;
                                    var8 = var4 != var7;
                                    var4 = undefined;
                                    if (!var8) {
                                        _fun111697_ip = 78;
                                        continue _fun111697
                                    }
                                case 75:
                                    var4 = var7;
                                case 78:
                                    var4 = var2.bind(var0)(var6, var5, var4);
                                    _fun111697_ip = 100;
                                    continue _fun111697;
                                case 87:
                                    var2 = var2.bind(var0)(var3);
                                    var1 = _closure2_slot15;
                                    var1 = var1.bind(var0)();
                                case 100:
                                    return var0;
                            }
                        };
                        var0 = var12.bind(var6)(var0, var7);
                        _closure2_slot18 = var0;
                        var12 = var6.useCallback;
                        var7 = new Array(1);
                        var7[0] = var4;
                        var4 = function() { // Environment: var13
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 20;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.clearHangStatus;
                            var3 = _closure2_slot5;
                            var2 = true;
                            var2 = var5.bind(var6)(var2, var3);
                            var3 = _closure1_slot1;
                            var2 = 21;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var1 = _closure1_slot10;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var24 = var12.bind(var6)(var4, var7);
                        var7 = var6.useCallback;
                        var4 = new Array(3);
                        var4[0] = var33;
                        var4[1] = var38;
                        var4[2] = var2;
                        var2 = function() { // Environment: var13
                            var5 = _closure2_slot16;
                            var2 = _closure1_slot9;
                            var4 = var2.CUSTOM;
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot11;
                            var0 = undefined;
                            var2 = var5.bind(var0)(var4, var3, var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 21;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var1 = _closure1_slot10;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var26 = var7.bind(var6)(var2, var4);
                        var4 = var6.useCallback;
                        var2 = new Array(3);
                        var2[0] = var38;
                        var2[1] = var1;
                        var7 = var20 == var5;
                        var1 = undefined;
                        if (var7) {
                            _fun111685_ip = 1066;
                            continue _fun111685
                        }
                    case 1061:
                        var1 = var5.id;
                    case 1066:
                        var2[2] = var1;
                        var1 = function() { // Environment: var13
                            _fun111700: for (var _fun111700_ip = 0;;) switch (_fun111700_ip) {
                                case 0:
                                    var7 = null;
                                    var0 = undefined;
                                    var15 = 19;
                                    var14 = 1;
                                    var13 = '';
                                    var12 = 25;
                                    var11 = 0;
                                    var10 = null;
                                    var9 = null;
                                    var8 = undefined;
                                    var5 = undefined;
                                case 33:
                                    var2 = _closure2_slot13;
                                    var3 = var2.length;
                                    var2 = var10;
                                    var4 = var9;
                                    if (!(var11 !== var3)) {
                                        _fun111700_ip = 311;
                                        continue _fun111700
                                    }
                                case 55:
                                    var16 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var12];
                                    var17 = var16.bind(var0)(var3);
                                    var16 = var17.sample;
                                    var3 = _closure2_slot13;
                                    var17 = var16.bind(var17)(var3);
                                    var16 = var7 == var17;
                                    var3 = undefined;
                                    if (var16) {
                                        _fun111700_ip = 101;
                                        continue _fun111700
                                    }
                                case 96:
                                    var3 = var17.id;
                                case 101:
                                    if (!(var7 == var3)) {
                                        _fun111700_ip = 158;
                                        continue _fun111700
                                    }
                                case 105:
                                    var16 = {
                                        'id': null,
                                        'name': null,
                                        'animated': false
                                    };
                                    var3 = var7 == var17;
                                    var19 = undefined;
                                    if (var3) {
                                        _fun111700_ip = 134;
                                        continue _fun111700
                                    }
                                case 128:
                                    var19 = var17.optionallyDiverseSequence;
                                case 134:
                                    var18 = var7 != var19;
                                    var3 = var13;
                                    if (!var18) {
                                        _fun111700_ip = 147;
                                        continue _fun111700
                                    }
                                case 144:
                                    var3 = var19;
                                case 147:
                                    var16.name = var3;
                                    var18 = var17;
                                    _fun111700_ip = 198;
                                    continue _fun111700;
                                case 158:
                                    var3 = {};
                                    var20 = var17.id;
                                    var3.id = var20;
                                    var20 = var17.name;
                                    var3.name = var20;
                                    var20 = var17.animated;
                                    var3.animated = var20;
                                    var19 = var8;
                                    var18 = var5;
                                    var16 = var3;
                                case 198:
                                    var3 = _closure2_slot13;
                                    var3 = var3.length;
                                    var2 = var17;
                                    var4 = var16;
                                    if (!(var14 !== var3)) {
                                        _fun111700_ip = 311;
                                        continue _fun111700
                                    }
                                case 217:
                                    var10 = var17;
                                    var9 = var16;
                                    var8 = var19;
                                    var5 = var18;
                                    if (var7 == var17) {
                                        _fun111700_ip = 33;
                                        continue _fun111700
                                    }
                                case 236:
                                    var3 = var17.name;
                                    var10 = var17;
                                    var9 = var16;
                                    var8 = var19;
                                    var5 = var18;
                                    if (var7 == var3) {
                                        _fun111700_ip = 33;
                                        continue _fun111700
                                    }
                                case 260:
                                    var20 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var15];
                                    var20 = var20.bind(var0)(var3);
                                    var3 = _closure2_slot11;
                                    var3 = var20.bind(var0)(var16, var3);
                                    var10 = var17;
                                    var9 = var16;
                                    var8 = var19;
                                    var5 = var18;
                                    var2 = var10;
                                    var4 = var9;
                                    if (var3) {
                                        _fun111700_ip = 33;
                                        continue _fun111700
                                    }
                                case 311:
                                    var3 = var7 != var4;
                                    if (!var3) {
                                        _fun111700_ip = 336;
                                        continue _fun111700
                                    }
                                case 318:
                                    var8 = var7 == var2;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun111700_ip = 332;
                                        continue _fun111700
                                    }
                                case 327:
                                    var5 = var2.name;
                                case 332:
                                    var3 = var7 != var5;
                                case 336:
                                    if (!var3) {
                                        _fun111700_ip = 453;
                                        continue _fun111700
                                    }
                                case 339:
                                    var3 = _closure2_slot12;
                                    var3 = var3.bind(var0)(var4);
                                    var3 = _closure2_slot8;
                                    var2 = var2.name;
                                    var2 = var3.bind(var0)(var2);
                                    var3 = _closure2_slot14;
                                    var2 = true;
                                    var2 = var3.bind(var0)(var2);
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var2 = 26;
                                    var2 = var8[var2];
                                    var4 = var5.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot15;
                                    var2 = var1.HANG_STATUS_RANDOMIZER_CLICKED;
                                    var1 = 27;
                                    var1 = var8[var1];
                                    var5 = var5.bind(var0)(var1);
                                    var1 = _closure2_slot2;
                                    var7 = var7 == var1;
                                    var1 = undefined;
                                    if (var7) {
                                        _fun111700_ip = 442;
                                        continue _fun111700
                                    }
                                case 433:
                                    var6 = _closure2_slot2;
                                    var1 = var6.id;
                                case 442:
                                    var1 = var5.bind(var0)(var1);
                                    var1 = var3.bind(var4)(var2, var1);
                                case 453:
                                    return var0;
                            }
                        };
                        var21 = var4.bind(var6)(var1, var2);
                        var4 = _closure1_slot4;
                        var2 = var4.useCallback;
                        var1 = new Array(5);
                        var1[0] = var5;
                        var1[1] = var36;
                        var1[2] = var0;
                        var1[3] = var31;
                        var1[4] = var9;
                        var0 = function(arg0, arg1, arg2) { // Environment: var13
                            _fun111701: for (var _fun111701_ip = 0;;) switch (_fun111701_ip) {
                                case 0:
                                    var6 = arg0;
                                    var _closure3_slot0 = var6;
                                    var1 = _closure1_slot1;
                                    var0 = _closure1_slot2;
                                    var17 = 24;
                                    var0 = var0[var17];
                                    var4 = undefined;
                                    var0 = var1.bind(var4)(var0);
                                    var0 = var0.bind(var4)(var6);
                                    var9 = null;
                                    var12 = null;
                                    if (!var0) {
                                        _fun111701_ip = 57;
                                        continue _fun111701
                                    }
                                case 46:
                                    var1 = _closure2_slot6;
                                    var12 = var1[var6];
                                case 57:
                                    var3 = _closure1_slot18;
                                    var2 = _closure1_slot5;
                                    var10 = {};
                                    var14 = _closure2_slot1;
                                    var1 = var14.row;
                                    var10.style = var1;
                                    var15 = _closure1_slot17;
                                    var13 = _closure1_slot1;
                                    var16 = _closure1_slot2;
                                    if (var0) {
                                        _fun111701_ip = 204;
                                        continue _fun111701
                                    }
                                case 99:
                                    var1 = 30;
                                    var1 = var16[var1];
                                    var11 = var13.bind(var4)(var1);
                                    var1 = {};
                                    var1.size = var17;
                                    var18 = var6.emoji;
                                    var1.emoji = var18;
                                    var11 = var15.bind(var4)(var11, var1);
                                    var1 = new Array(2);
                                    var1[0] = var11;
                                    var18 = _closure1_slot0;
                                    var11 = 29;
                                    var11 = var16[var11];
                                    var11 = var18.bind(var4)(var11);
                                    var18 = var11.Text;
                                    var11 = {};
                                    var19 = 'text-md/semibold';
                                    var11.variant = var19;
                                    var19 = var6.status;
                                    var11.children = var19;
                                    var11 = var15.bind(var4)(var18, var11);
                                    var1[1] = var11;
                                    var10.children = var1;
                                    var1 = var10;
                                    _fun111701_ip = 390;
                                    continue _fun111701;
                                case 204:
                                    var11 = 28;
                                    var11 = var16[var11];
                                    var13 = var13.bind(var4)(var11);
                                    var11 = {};
                                    var19 = _closure1_slot6;
                                    var18 = var19.getId;
                                    var18 = var18.bind(var19)();
                                    var11.userId = var18;
                                    var11.size = var17;
                                    var17 = var14.emojiStyle;
                                    var11.emojiStyle = var17;
                                    var14 = var14.emojiStyleText;
                                    var11.textEmojiStyle = var14;
                                    var14 = {};
                                    var17 = _closure1_slot14;
                                    var17 = var17.HANG_STATUS;
                                    var14.type = var17;
                                    var14.state = var6;
                                    var11.hangStatusActivity = var14;
                                    var14 = _closure2_slot4;
                                    var11.fallbackVariant = var14;
                                    var13 = var15.bind(var4)(var13, var11);
                                    var11 = new Array(2);
                                    var11[0] = var13;
                                    var14 = _closure1_slot0;
                                    var13 = 29;
                                    var13 = var16[var13];
                                    var13 = var14.bind(var4)(var13);
                                    var14 = var13.Text;
                                    var13 = {};
                                    var16 = 'text-md/semibold';
                                    var13.variant = var16;
                                    var16 = var9 == var12;
                                    var17 = undefined;
                                    if (var16) {
                                        _fun111701_ip = 355;
                                        continue _fun111701
                                    }
                                case 350:
                                    var17 = var12.title;
                                case 355:
                                    var18 = var9 != var17;
                                    var16 = '';
                                    if (!var18) {
                                        _fun111701_ip = 369;
                                        continue _fun111701
                                    }
                                case 366:
                                    var16 = var17;
                                case 369:
                                    var13.children = var16;
                                    var13 = var15.bind(var4)(var14, var13);
                                    var11[1] = var13;
                                    var10.children = var11;
                                    var1 = var10;
                                case 390:
                                    var10 = var3.bind(var4)(var2, var1);
                                    var3 = _closure1_slot17;
                                    var2 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var1 = 31;
                                    var1 = var11[var1];
                                    var1 = var2.bind(var4)(var1);
                                    var2 = var1.TableRow;
                                    var1 = {};
                                    if (var0) {
                                        _fun111701_ip = 438;
                                        continue _fun111701
                                    }
                                case 431:
                                    var11 = var6.status;
                                    _fun111701_ip = 469;
                                    continue _fun111701;
                                case 438:
                                    var14 = var9 == var12;
                                    var13 = undefined;
                                    if (var14) {
                                        _fun111701_ip = 452;
                                        continue _fun111701
                                    }
                                case 447:
                                    var13 = var12.title;
                                case 452:
                                    var14 = var9 != var13;
                                    var12 = '';
                                    if (!var14) {
                                        _fun111701_ip = 466;
                                        continue _fun111701
                                    }
                                case 463:
                                    var12 = var13;
                                case 466:
                                    var11 = var12;
                                case 469:
                                    var1['aria-label'] = var11;
                                    var1.label = var10;
                                    var10 = function() { // Original name: onPress, environment: var8
                                        var2 = _closure2_slot18;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1.onPress = var10;
                                    var8 = function() { // Original name: onLongPress, environment: var8
                                        var4 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 21;
                                        var3 = var2[var0];
                                        var0 = undefined;
                                        var6 = var4.bind(var0)(var3);
                                        var5 = var6.openLazy;
                                        var4 = _closure1_slot0;
                                        var3 = 33;
                                        var3 = var2[var3];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = 32;
                                        var3 = var2[var3];
                                        var2 = var2.paths;
                                        var10 = var4.bind(var0)(var3, var2);
                                        var9 = _closure1_slot11;
                                        var2 = {};
                                        var1 = _closure2_slot2;
                                        var2.channel = var1;
                                        var1 = _closure3_slot0;
                                        var2.status = var1;
                                        var7 = 'stack';
                                        var11 = var6;
                                        var8 = var2;
                                        var1 = var11[var5](var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var1.onLongPress = var8;
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun111701_ip = 517;
                                        continue _fun111701
                                    }
                                case 507:
                                    var8 = var6.emoji;
                                    var0 = var9 != var8;
                                case 517:
                                    if (!var0) {
                                        _fun111701_ip = 565;
                                        continue _fun111701
                                    }
                                case 520:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var7 = 34;
                                    var7 = var9[var7];
                                    var8 = var8.bind(var4)(var7);
                                    var7 = var8.canUseEmojiForHangStatus;
                                    var6 = var6.emoji;
                                    var5 = _closure2_slot2;
                                    var5 = var7.bind(var8)(var6, var5);
                                    var0 = !var5;
                                case 565:
                                    var1.disabled = var0;
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var8 = var0.concat;
                                    var7 = '';
                                    var6 = arg2;
                                    var5 = '-status-';
                                    var0 = arg1;
                                    var0 = var8.bind(var7)(var6, var5, var0);
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var4)(var0, var1);
                        _closure2_slot19 = var0;
                        var2 = _closure1_slot18;
                        var22 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 35;
                        var0 = var7[var0];
                        var0 = var22.bind(var3)(var0);
                        var1 = var0.BottomSheet;
                        var0 = {};
                        var37 = true;
                        var0.scrollable = var37;
                        var6 = _closure1_slot17;
                        var4 = 36;
                        var4 = var7[var4];
                        var4 = var22.bind(var3)(var4);
                        var5 = var4.BottomSheetTitleHeader;
                        var4 = {};
                        var19 = 37;
                        var12 = var7[var19];
                        var12 = var22.bind(var3)(var12);
                        var16 = var12.intl;
                        var12 = var16.string;
                        var7 = var7[var19];
                        var7 = var22.bind(var3)(var7);
                        var7 = var7.t;
                        var7 = var7.qstQuS;
                        var7 = var12.bind(var16)(var7);
                        var4.title = var7;
                        var7 = null;
                        if (!var17) {
                            _fun111685_ip = 1344;
                            continue _fun111685
                        }
                    case 1254:
                        var22 = _closure1_slot17;
                        var35 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var12 = 38;
                        var12 = var25[var12];
                        var12 = var35.bind(var3)(var12);
                        var16 = var12.ActionSheetHeaderPressableText;
                        var12 = {};
                        var12.onPress = var26;
                        var26 = var25[var19];
                        var26 = var35.bind(var3)(var26);
                        var29 = var26.intl;
                        var26 = var29.string;
                        var25 = var25[var19];
                        var25 = var35.bind(var3)(var25);
                        var25 = var25.t;
                        var25 = var25["R3BPH+"];
                        var25 = var26.bind(var29)(var25);
                        var12.label = var25;
                        var7 = var22.bind(var3)(var16, var12);
                    case 1344:
                        var4.trailing = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.header = var4;
                        var7 = _closure1_slot18;
                        var5 = _closure1_slot5;
                        var4 = {};
                        var6 = var9.inputRow;
                        var4.style = var6;
                        var6 = {};
                        var12 = var9.inputContainer;
                        var6.style = var12;
                        var26 = _closure1_slot17;
                        var39 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var16 = 39;
                        var12 = var22[var16];
                        var12 = var39.bind(var3)(var12);
                        var25 = var12.PressableOpacity;
                        var12 = {};
                        var29 = var9.inputButton;
                        var12.style = var29;
                        var29 = var22[var19];
                        var29 = var39.bind(var3)(var29);
                        var35 = var29.intl;
                        var29 = var35.string;
                        var22 = var22[var19];
                        var22 = var39.bind(var3)(var22);
                        var22 = var22.t;
                        var22 = var22.WkfRZP;
                        var22 = var29.bind(var35)(var22);
                        var12.accessibilityLabel = var22;
                        var22 = {};
                        var35 = var20 == var38;
                        var29 = undefined;
                        if (var35) {
                            _fun111685_ip = 1497;
                            continue _fun111685
                        }
                    case 1492:
                        var29 = var38.name;
                    case 1497:
                        var22.text = var29;
                        var12.accessibilityValue = var22;
                        var22 = 'button';
                        var12.accessibilityRole = var22;
                        var12.onPress = var27;
                        if (var34) {
                            _fun111685_ip = 1635;
                            continue _fun111685
                        }
                    case 1521:
                        if (!var32) {
                            _fun111685_ip = 1635;
                            continue _fun111685
                        }
                    case 1524:
                        var35 = _closure1_slot17;
                        var29 = _closure1_slot1;
                        var39 = _closure1_slot2;
                        var27 = 28;
                        var27 = var39[var27];
                        var29 = var29.bind(var3)(var27);
                        var27 = {};
                        var40 = _closure1_slot6;
                        var39 = var40.getId;
                        var39 = var39.bind(var40)();
                        var27.userId = var39;
                        var39 = 20;
                        var27.size = var39;
                        var39 = var9.inputEmojiStyle;
                        var27.emojiStyle = var39;
                        var39 = var9.inputEmojiStyleText;
                        var27.textEmojiStyle = var39;
                        var39 = {};
                        var40 = _closure1_slot14;
                        var40 = var40.HANG_STATUS;
                        var39.type = var40;
                        var39.state = var30;
                        var27.hangStatusActivity = var39;
                        var27.fallbackVariant = var36;
                        var27 = var35.bind(var3)(var29, var27);
                        _fun111685_ip = 1694;
                        continue _fun111685;
                    case 1635:
                        var36 = _closure1_slot17;
                        var35 = _closure1_slot1;
                        var39 = _closure1_slot2;
                        var29 = 30;
                        var29 = var39[var29];
                        var35 = var35.bind(var3)(var29);
                        var29 = {};
                        var39 = var9.inputEmojiStyle;
                        var29.style = var39;
                        var39 = 20;
                        var29.size = var39;
                        var29.emoji = var38;
                        var29.withPlaceholder = var37;
                        var27 = var36.bind(var3)(var35, var29);
                    case 1694:
                        var12.children = var27;
                        var25 = var26.bind(var3)(var25, var12);
                        var12 = new Array(3);
                        var12[0] = var25;
                        var27 = _closure1_slot17;
                        var37 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var25 = 40;
                        var25 = var29[var25];
                        var25 = var37.bind(var3)(var25);
                        var26 = var25.BottomSheetTextInput;
                        var25 = {};
                        var35 = var9.input;
                        var25.style = var35;
                        var35 = _closure1_slot12;
                        var25.maxLength = var35;
                        var35 = var29[var19];
                        var35 = var37.bind(var3)(var35);
                        var38 = var35.intl;
                        var36 = var38.string;
                        var35 = var29[var19];
                        var35 = var37.bind(var3)(var35);
                        var35 = var35.t;
                        var35 = var35.KPop4s;
                        var35 = var36.bind(var38)(var35);
                        var25.placeholder = var35;
                        var35 = var29[var19];
                        var35 = var37.bind(var3)(var35);
                        var36 = var35.intl;
                        var35 = var36.string;
                        var29 = var29[var19];
                        var29 = var37.bind(var3)(var29);
                        var29 = var29.t;
                        var29 = var29.xalUlT;
                        var29 = var35.bind(var36)(var29);
                        var25.accessibilityLabel = var29;
                        var29 = 'blurAndSubmit';
                        var25.submitBehavior = var29;
                        var29 = var33;
                        if (var34) {
                            _fun111685_ip = 1906;
                            continue _fun111685
                        }
                    case 1879:
                        var29 = var33;
                        if (!var32) {
                            _fun111685_ip = 1906;
                            continue _fun111685
                        }
                    case 1885:
                        var31 = var31[var30];
                        var32 = var20 == var31;
                        var30 = undefined;
                        if (var32) {
                            _fun111685_ip = 1903;
                            continue _fun111685
                        }
                    case 1898:
                        var30 = var31.title;
                    case 1903:
                        var29 = var30;
                    case 1906:
                        var25.value = var29;
                        var25.onChangeText = var28;
                        var28 = 'none';
                        var25.autoCapitalize = var28;
                        var25 = var27.bind(var3)(var26, var25);
                        var12[1] = var25;
                        if (!(var20 == var23)) {
                            _fun111685_ip = 1950;
                            continue _fun111685
                        }
                    case 1938:
                        var23 = var20 == var14;
                        var14 = null;
                        if (var23) {
                            _fun111685_ip = 2097;
                            continue _fun111685
                        }
                    case 1950:
                        var14 = null;
                        if (var17) {
                            _fun111685_ip = 2097;
                            continue _fun111685
                        }
                    case 1958:
                        var23 = _closure1_slot17;
                        var25 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var17 = var26[var16];
                        var17 = var25.bind(var3)(var17);
                        var20 = var17.PressableOpacity;
                        var17 = {};
                        var27 = var9.inputButton;
                        var17.style = var27;
                        var27 = var26[var19];
                        var27 = var25.bind(var3)(var27);
                        var29 = var27.intl;
                        var28 = var29.string;
                        var27 = var26[var19];
                        var27 = var25.bind(var3)(var27);
                        var27 = var27.t;
                        var27 = var27.VkKicb;
                        var27 = var28.bind(var29)(var27);
                        var17.accessibilityLabel = var27;
                        var17.accessibilityRole = var22;
                        var17.onPress = var24;
                        var24 = 41;
                        var24 = var26[var24];
                        var24 = var25.bind(var3)(var24);
                        var25 = var24.TrashIcon;
                        var24 = {};
                        var26 = 'sm';
                        var24.size = var26;
                        var24 = var23.bind(var3)(var25, var24);
                        var17.children = var24;
                        var14 = var23.bind(var3)(var20, var17);
                    case 2097:
                        var12[2] = var14;
                        var6.children = var12;
                        var6 = var7.bind(var3)(var5, var6);
                        var14 = new Array(2);
                        var14[0] = var6;
                        var20 = _closure1_slot17;
                        var6 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var16 = var12[var16];
                        var16 = var6.bind(var3)(var16);
                        var17 = var16.PressableOpacity;
                        var16 = {};
                        var23 = var9.randomizeButton;
                        var16.style = var23;
                        var23 = var12[var19];
                        var23 = var6.bind(var3)(var23);
                        var25 = var23.intl;
                        var24 = var25.string;
                        var23 = var12[var19];
                        var23 = var6.bind(var3)(var23);
                        var23 = var23.t;
                        var23 = var23["5UAi59"];
                        var23 = var24.bind(var25)(var23);
                        var16.accessibilityLabel = var23;
                        var16.accessibilityRole = var22;
                        var16.onPress = var21;
                        var21 = 42;
                        var21 = var12[var21];
                        var21 = var6.bind(var3)(var21);
                        var22 = var21.DiceIcon;
                        var21 = {};
                        var23 = 'md';
                        var21.size = var23;
                        var24 = _closure1_slot1;
                        var23 = 11;
                        var23 = var12[var23];
                        var23 = var24.bind(var3)(var23);
                        var23 = var23.colors;
                        var23 = var23.ICON_STRONG;
                        var21.color = var23;
                        var21 = var20.bind(var3)(var22, var21);
                        var16.children = var21;
                        var16 = var20.bind(var3)(var17, var16);
                        var14[1] = var16;
                        var4.children = var14;
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot18;
                        var5 = 43;
                        var5 = var12[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.BottomSheetScrollView;
                        var5 = {};
                        var12 = {};
                        var12.paddingBottom = var8;
                        var8 = new Array(2);
                        var8[0] = var12;
                        var9 = var9.statusSections;
                        var8[1] = var9;
                        var5.contentContainerStyle = var8;
                        var8 = var18.length;
                        var9 = var8 > var11;
                        if (!var9) {
                            _fun111685_ip = 2488;
                            continue _fun111685
                        }
                    case 2379:
                        var14 = _closure1_slot17;
                        var21 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var8 = 44;
                        var8 = var16[var8];
                        var8 = var21.bind(var3)(var8);
                        var12 = var8.TableRowGroup;
                        var8 = {};
                        var17 = var16[var19];
                        var17 = var21.bind(var3)(var17);
                        var20 = var17.intl;
                        var17 = var20.string;
                        var16 = var16[var19];
                        var16 = var21.bind(var3)(var16);
                        var16 = var16.t;
                        var16 = var16["3XKWcA"];
                        var16 = var17.bind(var20)(var16);
                        var8.title = var16;
                        var17 = var18.map;
                        var16 = function(arg0, arg1) { // Environment: var13
                            var4 = _closure2_slot19;
                            var3 = undefined;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = 'favorite';
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var16 = var17.bind(var18)(var16);
                        var8.children = var16;
                        var9 = var14.bind(var3)(var12, var8);
                    case 2488:
                        var8 = new Array(2);
                        var8[0] = var9;
                        var9 = var15.length;
                        var9 = var9 > var11;
                        if (!var9) {
                            _fun111685_ip = 2615;
                            continue _fun111685
                        }
                    case 2508:
                        var12 = _closure1_slot17;
                        var18 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 44;
                        var10 = var14[var10];
                        var10 = var18.bind(var3)(var10);
                        var11 = var10.TableRowGroup;
                        var10 = {};
                        var16 = var14[var19];
                        var16 = var18.bind(var3)(var16);
                        var17 = var16.intl;
                        var16 = var17.string;
                        var14 = var14[var19];
                        var14 = var18.bind(var3)(var14);
                        var14 = var14.t;
                        var14 = var14["+9QSnj"];
                        var14 = var16.bind(var17)(var14);
                        var10.title = var14;
                        var14 = var15.map;
                        var13 = function(arg0, arg1) { // Environment: var13
                            var4 = _closure2_slot19;
                            var3 = undefined;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = 'recent';
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var13 = var14.bind(var15)(var13);
                        var10.children = var13;
                        var9 = var12.bind(var3)(var11, var10);
                    case 2615:
                        var8[1] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1216, 1372, 3570, 3571, 660, 1616, 33, 1297, 671, 478, 566, 14314, 3573, 7748, 1568, 14316, 644, 14318, 3237, 14313, 6952, 3572, 22, 795, 11945, 7750, 3901, 7757, 4860, 14319, 1307, 14317, 4893, 5173, 1234, 5172, 4864, 5370, 3228, 14320, 4895, 5324, 2]);