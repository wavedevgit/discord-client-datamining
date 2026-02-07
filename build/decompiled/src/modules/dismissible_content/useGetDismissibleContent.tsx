// modules/dismissible_content/useGetDismissibleContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun52760: for (var _fun52760_ip = 0;;) switch (_fun52760_ip) {
            case 0:
                var1 = arg0;
                var10 = arg1;
                var11 = arg2;
                var7 = arg3;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var10;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var7;
                var4 = _closure1_slot7;
                var9 = undefined;
                var2 = function(arg0) { // Environment: var0
                    _fun52761: for (var _fun52761_ip = 0;;) switch (_fun52761_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun52761_ip = 39;
                                continue _fun52761
                            }
                        case 16:
                            var2 = arg0;
                            var3 = var2.currentlyShown;
                            var2 = var3.has;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var2 = var4.bind(var9)(var2);
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 9;
                var4 = var12[var4];
                var6 = var5.bind(var9)(var4);
                var4 = var6.useAnyOverlayRenderingLocked;
                var8 = var4.bind(var6)();
                var _closure2_slot4 = var8;
                var4 = 10;
                var6 = var12[var4];
                var15 = var5.bind(var9)(var6);
                var14 = var15.useStateFromStores;
                var13 = new Array(0);
                var6 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var6 = var14.bind(var15)(var13, var6);
                var _closure2_slot5 = var6;
                var4 = var12[var4];
                var12 = var5.bind(var9)(var4);
                var9 = var12.useStateFromStores;
                var4 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    _fun52763: for (var _fun52763_ip = 0;;) switch (_fun52763_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun52763_ip = 43;
                                continue _fun52763
                            }
                        case 16:
                            var4 = _closure1_slot6;
                            var3 = var4.hasUserHitDCCap;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var9 = var9.bind(var12)(var5, var4);
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var3 = new Array(7);
                var3[0] = var1;
                var3[1] = var11;
                var3[2] = var10;
                var3[3] = var9;
                var3[4] = var8;
                var3[5] = var7;
                var3[6] = var6;
                var0 = function() { // Environment: var0
                    _fun52764: for (var _fun52764_ip = 0;;) switch (_fun52764_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var6 = null;
                            if (!(var6 == var1)) {
                                _fun52764_ip = 17;
                                continue _fun52764
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var4 = _closure1_slot4;
                            var3 = var4.hasLoaded;
                            var2 = _closure1_slot10;
                            var2 = var2.PRELOADED_USER_SETTINGS;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun52764_ip = 195;
                                continue _fun52764
                            }
                        case 51:
                            var11 = _closure2_slot0;
                            var7 = _closure2_slot1;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var3 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var2 = 7;
                            var2 = var14[var2];
                            var13 = undefined;
                            var5 = var3.bind(var13)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot9;
                            var3 = var2.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
                            var2 = {};
                            var12 = _closure1_slot0;
                            var8 = 8;
                            var8 = var14[var8];
                            var8 = var12.bind(var13)(var8);
                            var8 = var8.DismissibleContent;
                            var8 = var8[var11];
                            var2.content_type = var8;
                            var11 = var6 != var10;
                            var8 = null;
                            if (!var11) {
                                _fun52764_ip = 149;
                                continue _fun52764
                            }
                        case 146:
                            var8 = var10;
                        case 149:
                            var2.group_name = var8;
                            var10 = var6 != var9;
                            var8 = null;
                            if (!var10) {
                                _fun52764_ip = 166;
                                continue _fun52764
                            }
                        case 163:
                            var8 = var9;
                        case 166:
                            var2.latest_version = var8;
                            var8 = var6 != var7;
                            var6 = null;
                            if (!var8) {
                                _fun52764_ip = 185;
                                continue _fun52764
                            }
                        case 182:
                            var6 = var7;
                        case 185:
                            var2.guild_id = var6;
                            var2 = var4.bind(var5)(var3, var2);
                        case 195:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.requestMarkDismissibleContentAsShown;
                            var18 = _closure2_slot0;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.groupName = var1;
                            var1 = _closure2_slot1;
                            var2.guildId = var1;
                            var1 = _closure2_slot3;
                            var2.version = var1;
                            var16 = _closure2_slot4;
                            var15 = _closure2_slot5;
                            var19 = var5;
                            var17 = var2;
                            var0 = var19[var4](var18, var17, var16, var15, var14);
                            var0 = function() { // Environment: var0
                                _fun52765: for (var _fun52765_ip = 0;;) switch (_fun52765_ip) {
                                    case 0:
                                        var2 = _closure2_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun52765_ip = 64;
                                            continue _fun52765
                                        }
                                    case 13:
                                        var3 = _closure1_slot6;
                                        var2 = var3.hasUserHitDCCap;
                                        var2 = var2.bind(var3)();
                                        var3 = !var2;
                                        var2 = _closure1_slot8;
                                        var1 = {};
                                        var4 = _closure2_slot0;
                                        var1.content = var4;
                                        var0 = _closure2_slot2;
                                        var1.groupName = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1, var3);
                                    case 64:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var3 = null;
                var0 = null;
                if (!var2) {
                    _fun52760_ip = 227;
                    continue _fun52760
                }
            case 215:
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun52760_ip = 227;
                    continue _fun52760
                }
            case 224:
                var0 = var1;
            case 227:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun52767: for (var _fun52767_ip = 0;;) switch (_fun52767_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun52767_ip = 69;
                        continue _fun52767
                    }
                case 15:
                    var2 = _closure1_slot4;
                    var2 = var2.settings;
                    var4 = var2.userContent;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun52767_ip = 66;
                        continue _fun52767
                    }
                case 43:
                    var4 = var4.recurringDismissibleContentStates;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun52767_ip = 66;
                        continue _fun52767
                    }
                case 58:
                    var3 = _closure2_slot0;
                    var2 = var4[var3];
                case 66:
                    var0 = var2;
                case 69:
                    if (!(var1 == var0)) {
                        _fun52767_ip = 80;
                        continue _fun52767
                    }
                case 73:
                    var0 = _closure1_slot11;
                case 80:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun52768: for (var _fun52768_ip = 0;;) switch (_fun52768_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var9 = arg2;
                var0 = arg3;
                var5 = null;
                var3 = var5 != var6;
                var1 = undefined;
                var2 = undefined;
                if (!var3) {
                    _fun52768_ip = 74;
                    continue _fun52768
                }
            case 25:
                var4 = global;
                var10 = var4.Number;
                var8 = var10.isNaN;
                var3 = var4.Number;
                var3 = var3.bind(var1)(var6);
                var8 = var8.bind(var10)(var3);
                var3 = undefined;
                if (var8) {
                    _fun52768_ip = 71;
                    continue _fun52768
                }
            case 60:
                var4 = var4.Number;
                var3 = var4.bind(var1)(var6);
            case 71:
                var2 = var3;
            case 74:
                var10 = 0;
                var4 = 0;
                if (!(var1 !== var2)) {
                    _fun52768_ip = 92;
                    continue _fun52768
                }
            case 82:
                var1 = var0.cooldownDurationMs;
                var4 = var2 + var1;
            case 92:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var3 = var1.bind(var3)();
                var1 = var0.showAfterTimestamp;
                var6 = var5 == var1;
                if (var6) {
                    _fun52768_ip = 160;
                    continue _fun52768
                }
            case 122:
                var1 = var0.showAfterTimestamp;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun52768_ip = 157;
                    continue _fun52768
                }
            case 135:
                var8 = var5 != var2;
                var11 = 0;
                if (!var8) {
                    _fun52768_ip = 147;
                    continue _fun52768
                }
            case 144:
                var11 = var2;
            case 147:
                var8 = var0.showAfterTimestamp;
                var1 = var11 <= var8;
            case 157:
                var6 = var1;
            case 160:
                var1 = var0.numTimesToRecur;
                var1 = var5 == var1;
                if (var1) {
                    _fun52768_ip = 183;
                    continue _fun52768
                }
            case 173:
                var8 = var0.numTimesToRecur;
                var1 = var10 === var8;
            case 183:
                if (var1) {
                    _fun52768_ip = 190;
                    continue _fun52768
                }
            case 186:
                var1 = var5 == var9;
            case 190:
                if (var1) {
                    _fun52768_ip = 203;
                    continue _fun52768
                }
            case 193:
                var0 = var0.numTimesToRecur;
                var1 = var9 < var0;
            case 203:
                var10 = _closure1_slot4;
                var8 = var10.hasLoaded;
                var0 = _closure1_slot10;
                var0 = var0.PRELOADED_USER_SETTINGS;
                var0 = var8.bind(var10)(var0);
                if (var0) {
                    _fun52768_ip = 248;
                    continue _fun52768
                }
            case 234:
                var8 = var5 != var2;
                if (!var8) {
                    _fun52768_ip = 245;
                    continue _fun52768
                }
            case 241:
                var8 = var5 != var9;
            case 245:
                var0 = var8;
            case 248:
                if (!var0) {
                    _fun52768_ip = 254;
                    continue _fun52768
                }
            case 251:
                var0 = var7;
            case 254:
                if (!var0) {
                    _fun52768_ip = 260;
                    continue _fun52768
                }
            case 257:
                var0 = var6;
            case 260:
                if (!var0) {
                    _fun52768_ip = 277;
                    continue _fun52768
                }
            case 263:
                var2 = var5 == var2;
                if (var2) {
                    _fun52768_ip = 274;
                    continue _fun52768
                }
            case 270:
                var2 = var3 >= var4;
            case 274:
                var0 = var2;
            case 277:
                if (!var0) {
                    _fun52768_ip = 283;
                    continue _fun52768
                }
            case 280:
                var0 = var1;
            case 283:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.removeCandidateContent;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsTypes;
    var _closure1_slot10 = var3;
    var3 = {};
    var _closure1_slot11 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dismissible_content/useGetDismissibleContent.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun52769: for (var _fun52769_ip = 0;;) switch (_fun52769_ip) {
            case 0:
                var6 = arg1;
                var _closure2_slot0 = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var0 = var8[var4];
                var3 = undefined;
                var10 = var7.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    _fun52770: for (var _fun52770_ip = 0;;) switch (_fun52770_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var0 = var0.settings;
                            var1 = var0.userContent;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun52770_ip = 36;
                                continue _fun52770
                            }
                        case 30:
                            var0 = var1.dismissedContents;
                        case 36:
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var5, var0);
                var _closure2_slot1 = var0;
                var4 = var8[var4];
                var10 = var7.bind(var3)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var9.bind(var10)(var5, var4);
                var _closure2_slot2 = var5;
                var4 = 12;
                var4 = var8[var4];
                var8 = var7.bind(var3)(var4);
                var7 = var8.useNewUserDismissibleContent;
                var4 = arg0;
                var8 = var7.bind(var8)(var4);
                var7 = null;
                var _closure2_slot3 = var7;
                var10 = _closure1_slot4;
                var9 = var10.hasLoaded;
                var4 = _closure1_slot10;
                var4 = var4.PRELOADED_USER_SETTINGS;
                var4 = var9.bind(var10)(var4);
                if (var4) {
                    _fun52769_ip = 200;
                    continue _fun52769
                }
            case 167:
                var0 = var7 != var0;
                var7 = null;
                if (!var0) {
                    _fun52769_ip = 222;
                    continue _fun52769
                }
            case 176:
                var4 = var8.find;
                var0 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hasBit;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var4.bind(var8)(var0);
                _closure2_slot3 = var0;
                var7 = var0;
                _fun52769_ip = 222;
                continue _fun52769;
            case 200:
                var4 = var8.find;
                var0 = function(arg0) { // Environment: var1
                    _fun52772: for (var _fun52772_ip = 0;;) switch (_fun52772_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun52772_ip = 63;
                                continue _fun52772
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.hasBit;
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 63:
                            return var0;
                    }
                };
                var0 = var4.bind(var8)(var0);
                _closure2_slot3 = var0;
                var7 = var0;
            case 222:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var7, var5, var6);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52774: for (var _fun52774_ip = 0;;) switch (_fun52774_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52774_ip = 89;
                                continue _fun52774
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = _closure2_slot3;
                            var0 = {};
                            var5 = arg0;
                            var0.dismissAction = var5;
                            var5 = _closure2_slot0;
                            var0.groupName = var5;
                            var4 = _closure2_slot2;
                            var0.guildId = var4;
                            var4 = arg1;
                            var0.forceTrack = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGetDismissibleContent = var3;
    var3 = function arg0, arg1, arg2() {
        _fun52775: for (var _fun52775_ip = 0;;) switch (_fun52775_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var7;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var9 = var0.lastDismissedVersion;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var10 = var6.bind(var3)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var10)(var6, var0);
                var _closure2_slot2 = var6;
                var10 = null;
                var _closure2_slot3 = var10;
                var0 = var10 != var4;
                var8 = null;
                if (!var0) {
                    _fun52775_ip = 234;
                    continue _fun52775
                }
            case 109:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var0 = var12[var0];
                var11 = var11.bind(var3)(var0);
                var0 = var11.disableNewUserDismissibleContent;
                var0 = var0.bind(var11)(var4);
                var11 = !var0;
                var13 = _closure1_slot4;
                var12 = var13.hasLoaded;
                var0 = _closure1_slot10;
                var0 = var0.PRELOADED_USER_SETTINGS;
                var0 = var12.bind(var13)(var0);
                if (var0) {
                    _fun52775_ip = 206;
                    continue _fun52775
                }
            case 171:
                var0 = var10 != var9;
                var8 = null;
                if (!var0) {
                    _fun52775_ip = 234;
                    continue _fun52775
                }
            case 180:
                var0 = null;
                if (!var11) {
                    _fun52775_ip = 197;
                    continue _fun52775
                }
            case 185:
                var12 = var9 < var5;
                var0 = null;
                if (!var12) {
                    _fun52775_ip = 197;
                    continue _fun52775
                }
            case 194:
                var0 = var4;
            case 197:
                _closure2_slot3 = var0;
                var8 = var0;
                _fun52775_ip = 234;
                continue _fun52775;
            case 206:
                var0 = null;
                if (!var11) {
                    _fun52775_ip = 227;
                    continue _fun52775
                }
            case 211:
                if (!(var10 != var9)) {
                    _fun52775_ip = 224;
                    continue _fun52775
                }
            case 215:
                var9 = var9 < var5;
                var0 = null;
                if (!var9) {
                    _fun52775_ip = 227;
                    continue _fun52775
                }
            case 224:
                var0 = var4;
            case 227:
                _closure2_slot3 = var0;
                var8 = var0;
            case 234:
                var0 = _closure1_slot12;
                var18 = undefined;
                var17 = var8;
                var16 = var6;
                var15 = var7;
                var14 = var5;
                var3 = var18[var0](var17, var16, var15, var14, var13);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52777: for (var _fun52777_ip = 0;;) switch (_fun52777_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52777_ip = 99;
                                continue _fun52777
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.markVersionedDismissibleContentAsDismissed;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = arg0;
                            var0.dismissAction = var6;
                            var6 = _closure2_slot1;
                            var0.groupName = var6;
                            var5 = _closure2_slot2;
                            var0.guildId = var5;
                            var5 = arg1;
                            var0.forceTrack = var5;
                            var0.version = var1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGetVersionedDismissibleContent = var3;
    var3 = function arg0, arg1, arg2() {
        _fun52778: for (var _fun52778_ip = 0;;) switch (_fun52778_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var12 = var0.lastDismissedAtMs;
                var11 = var0.numTimesDismissed;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var8 = var5.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var0);
                var _closure2_slot1 = var5;
                var0 = null;
                var _closure2_slot2 = var0;
                var8 = var0 != var4;
                var7 = null;
                if (!var8) {
                    _fun52778_ip = 173;
                    continue _fun52778
                }
            case 105:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 12;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.disableNewUserDismissibleContent;
                var8 = var8.bind(var9)(var4);
                var16 = !var8;
                var9 = _closure1_slot14;
                var13 = arg1;
                var17 = undefined;
                var15 = var12;
                var14 = var11;
                var8 = var17[var9](var16, var15, var14, var13, var12);
                var0 = null;
                if (!var8) {
                    _fun52778_ip = 166;
                    continue _fun52778
                }
            case 163:
                var0 = var4;
            case 166:
                _closure2_slot2 = var0;
                var7 = var0;
            case 173:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var7, var5, var6);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52780: for (var _fun52780_ip = 0;;) switch (_fun52780_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52780_ip = 89;
                                continue _fun52780
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.markTimeRecurringDismissibleContentAsDismissed;
                            var1 = _closure2_slot2;
                            var0 = {};
                            var5 = arg0;
                            var0.dismissAction = var5;
                            var5 = _closure2_slot0;
                            var0.groupName = var5;
                            var4 = _closure2_slot1;
                            var0.guildId = var4;
                            var4 = arg1;
                            var0.forceTrack = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGetTimeRecurringDismissibleContent = var3;
    var3 = function arg0, arg1, arg2() {
        _fun52781: for (var _fun52781_ip = 0;;) switch (_fun52781_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var7 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var7;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var12 = var0.lastDismissedObjectId;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var9 = var6.bind(var3)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var0);
                var _closure2_slot2 = var6;
                var11 = null;
                var _closure2_slot3 = var11;
                var0 = var11 != var4;
                var8 = null;
                if (!var0) {
                    _fun52781_ip = 298;
                    continue _fun52781
                }
            case 109:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 12;
                var0 = var10[var0];
                var9 = var9.bind(var3)(var0);
                var0 = var9.disableNewUserDismissibleContent;
                var0 = var0.bind(var9)(var4);
                var9 = !var0;
                var13 = _closure1_slot4;
                var10 = var13.hasLoaded;
                var0 = _closure1_slot10;
                var0 = var0.PRELOADED_USER_SETTINGS;
                var0 = var10.bind(var13)(var0);
                if (var0) {
                    _fun52781_ip = 238;
                    continue _fun52781
                }
            case 171:
                var0 = var11 != var12;
                var8 = null;
                if (!var0) {
                    _fun52781_ip = 298;
                    continue _fun52781
                }
            case 180:
                var0 = null;
                if (!var9) {
                    _fun52781_ip = 229;
                    continue _fun52781
                }
            case 185:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 15;
                var10 = var14[var10];
                var13 = var13.bind(var3)(var10);
                var10 = var13.compare;
                var13 = var10.bind(var13)(var5, var12);
                var10 = 1;
                var0 = null;
                if (!(var10 === var13)) {
                    _fun52781_ip = 229;
                    continue _fun52781
                }
            case 226:
                var0 = var4;
            case 229:
                _closure2_slot3 = var0;
                var8 = var0;
                _fun52781_ip = 298;
                continue _fun52781;
            case 238:
                var0 = null;
                if (!var9) {
                    _fun52781_ip = 291;
                    continue _fun52781
                }
            case 243:
                if (!(var11 != var12)) {
                    _fun52781_ip = 288;
                    continue _fun52781
                }
            case 247:
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 15;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.compare;
                var10 = var9.bind(var10)(var5, var12);
                var9 = 1;
                var0 = null;
                if (!(var9 === var10)) {
                    _fun52781_ip = 291;
                    continue _fun52781
                }
            case 288:
                var0 = var4;
            case 291:
                _closure2_slot3 = var0;
                var8 = var0;
            case 298:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var8, var6, var7);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52783: for (var _fun52783_ip = 0;;) switch (_fun52783_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52783_ip = 94;
                                continue _fun52783
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.markSnowflakeBoundDismissibleContentAsDismissed;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = arg0;
                            var0.dismissAction = var6;
                            var6 = _closure2_slot1;
                            var0.groupName = var6;
                            var5 = _closure2_slot2;
                            var0.guildId = var5;
                            var5 = arg1;
                            var0.forceTrack = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGetSnowflakeBoundDismissibleContent = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun52784: for (var _fun52784_ip = 0;;) switch (_fun52784_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var6 = arg2;
                var7 = arg3;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var7;
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = undefined;
                var10 = var8.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuildDismissedContentState;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var9.bind(var10)(var8, var0);
                var11 = null;
                var8 = var11 != var4;
                var0 = null;
                if (!var8) {
                    _fun52784_ip = 118;
                    continue _fun52784
                }
            case 90:
                var9 = var11 == var10;
                var8 = null;
                if (var9) {
                    _fun52784_ip = 115;
                    continue _fun52784
                }
            case 99:
                var12 = var11 == var10;
                var9 = undefined;
                if (var12) {
                    _fun52784_ip = 112;
                    continue _fun52784
                }
            case 108:
                var9 = var10[var4];
            case 112:
                var8 = var9;
            case 115:
                var0 = var8;
            case 118:
                var8 = var11 == var0;
                var12 = undefined;
                if (var8) {
                    _fun52784_ip = 133;
                    continue _fun52784
                }
            case 127:
                var12 = var0.lastDismissedObjectId;
            case 133:
                var _closure2_slot3 = var11;
                var0 = var11 != var4;
                var8 = null;
                if (!var0) {
                    _fun52784_ip = 338;
                    continue _fun52784
                }
            case 149:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 12;
                var0 = var10[var0];
                var9 = var9.bind(var3)(var0);
                var0 = var9.disableNewUserDismissibleContent;
                var0 = var0.bind(var9)(var4);
                var9 = !var0;
                var13 = _closure1_slot4;
                var10 = var13.hasLoaded;
                var0 = _closure1_slot10;
                var0 = var0.PRELOADED_USER_SETTINGS;
                var0 = var10.bind(var13)(var0);
                if (var0) {
                    _fun52784_ip = 278;
                    continue _fun52784
                }
            case 211:
                var0 = var11 != var12;
                var8 = null;
                if (!var0) {
                    _fun52784_ip = 338;
                    continue _fun52784
                }
            case 220:
                var0 = null;
                if (!var9) {
                    _fun52784_ip = 269;
                    continue _fun52784
                }
            case 225:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 15;
                var10 = var14[var10];
                var13 = var13.bind(var3)(var10);
                var10 = var13.compare;
                var13 = var10.bind(var13)(var5, var12);
                var10 = 1;
                var0 = null;
                if (!(var10 === var13)) {
                    _fun52784_ip = 269;
                    continue _fun52784
                }
            case 266:
                var0 = var4;
            case 269:
                _closure2_slot3 = var0;
                var8 = var0;
                _fun52784_ip = 338;
                continue _fun52784;
            case 278:
                var0 = null;
                if (!var9) {
                    _fun52784_ip = 331;
                    continue _fun52784
                }
            case 283:
                if (!(var11 != var12)) {
                    _fun52784_ip = 328;
                    continue _fun52784
                }
            case 287:
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 15;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.compare;
                var10 = var9.bind(var10)(var5, var12);
                var9 = 1;
                var0 = null;
                if (!(var9 === var10)) {
                    _fun52784_ip = 331;
                    continue _fun52784
                }
            case 328:
                var0 = var4;
            case 331:
                _closure2_slot3 = var0;
                var8 = var0;
            case 338:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var8, var6, var7);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52786: for (var _fun52786_ip = 0;;) switch (_fun52786_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52786_ip = 100;
                                continue _fun52786
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed;
                            var11 = _closure2_slot3;
                            var10 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = {};
                            var7 = arg0;
                            var0.dismissAction = var7;
                            var6 = _closure2_slot2;
                            var0.groupName = var6;
                            var0.guildId = var1;
                            var6 = arg1;
                            var0.forceTrack = var6;
                            var12 = var5;
                            var9 = var1;
                            var8 = var0;
                            var0 = var12[var4](var11, var10, var9, var8, var7);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.UNSAFE_useGetSnowflakeBoundGuildDismissibleContent = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun52787: for (var _fun52787_ip = 0;;) switch (_fun52787_ip) {
            case 0:
                var0 = arg0;
                var5 = arg2;
                var7 = arg3;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var7;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var9 = var6.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var4);
                var _closure2_slot2 = var6;
                var8 = null;
                var _closure2_slot3 = var8;
                var4 = var8 == var0;
                if (var4) {
                    _fun52787_ip = 125;
                    continue _fun52787
                }
            case 89:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 11;
                var9 = var11[var9];
                var11 = var10.bind(var3)(var9);
                var10 = var11.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
                var9 = arg1;
                var4 = var10.bind(var11)(var0, var5, var9);
            case 125:
                var8 = null;
                if (var4) {
                    _fun52787_ip = 137;
                    continue _fun52787
                }
            case 130:
                _closure2_slot3 = var0;
                var8 = var0;
            case 137:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var8, var6, var7);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52789: for (var _fun52789_ip = 0;;) switch (_fun52789_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52789_ip = 94;
                                continue _fun52789
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.markSnowflakeBoundDismissibleContentAsDismissed;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = arg0;
                            var0.dismissAction = var6;
                            var6 = _closure2_slot1;
                            var0.groupName = var6;
                            var5 = _closure2_slot2;
                            var0.guildId = var5;
                            var5 = arg1;
                            var0.forceTrack = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.useGetTimeReccuringSnowflakeBoundDismissibleContent = var3;
    var3 = function arg0, arg1, arg2() {
        _fun52790: for (var _fun52790_ip = 0;;) switch (_fun52790_ip) {
            case 0:
                var5 = arg1;
                var6 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var3 = undefined;
                var10 = var7.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuildDismissedContentState;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var10)(var4, var0);
                var _closure2_slot2 = var0;
                var4 = 12;
                var4 = var8[var4];
                var8 = var7.bind(var3)(var4);
                var7 = var8.useNewUserDismissibleContent;
                var4 = arg0;
                var8 = var7.bind(var8)(var4);
                var7 = null;
                var _closure2_slot3 = var7;
                var10 = _closure1_slot4;
                var9 = var10.hasLoaded;
                var4 = _closure1_slot10;
                var4 = var4.PRELOADED_USER_SETTINGS;
                var4 = var9.bind(var10)(var4);
                if (var4) {
                    _fun52790_ip = 166;
                    continue _fun52790
                }
            case 133:
                var0 = var7 != var0;
                var7 = null;
                if (!var0) {
                    _fun52790_ip = 188;
                    continue _fun52790
                }
            case 142:
                var4 = var8.find;
                var0 = function(arg0) { // Environment: var1
                    _fun52793: for (var _fun52793_ip = 0;;) switch (_fun52793_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot2;
                            var3 = var0[var2];
                            var0 = null;
                            var0 = var0 == var3;
                            if (var0) {
                                _fun52793_ip = 43;
                                continue _fun52793
                            }
                        case 23:
                            var1 = _closure2_slot2;
                            var1 = var1[var2];
                            var2 = var1.dismissed;
                            var1 = false;
                            var0 = var1 === var2;
                        case 43:
                            return var0;
                    }
                };
                var0 = var4.bind(var8)(var0);
                _closure2_slot3 = var0;
                var7 = var0;
                _fun52790_ip = 188;
                continue _fun52790;
            case 166:
                var4 = var8.find;
                var0 = function(arg0) { // Environment: var1
                    _fun52792: for (var _fun52792_ip = 0;;) switch (_fun52792_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot2;
                            var4 = null;
                            var0 = var4 == var0;
                            if (var0) {
                                _fun52792_ip = 31;
                                continue _fun52792
                            }
                        case 19:
                            var3 = _closure2_slot2;
                            var3 = var3[var2];
                            var0 = var4 == var3;
                        case 31:
                            if (var0) {
                                _fun52792_ip = 54;
                                continue _fun52792
                            }
                        case 34:
                            var1 = _closure2_slot2;
                            var1 = var1[var2];
                            var2 = var1.dismissed;
                            var1 = false;
                            var0 = var1 === var2;
                        case 54:
                            return var0;
                    }
                };
                var0 = var4.bind(var8)(var0);
                _closure2_slot3 = var0;
                var7 = var0;
            case 188:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var7, var5, var6);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52794: for (var _fun52794_ip = 0;;) switch (_fun52794_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52794_ip = 90;
                                continue _fun52794
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = arg0;
                            var0.dismissAction = var6;
                            var5 = _closure2_slot1;
                            var0.groupName = var5;
                            var0.guildId = var1;
                            var5 = arg1;
                            var0.forceTrack = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.UNSAFE_useGetSingleUseGuildDismissibleContent = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun52795: for (var _fun52795_ip = 0;;) switch (_fun52795_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var6 = arg3;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = undefined;
                var9 = var7.bind(var3)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuildDismissedContentState;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var8.bind(var9)(var7, var0);
                var0 = null;
                var7 = var0 != var4;
                var8 = null;
                if (!var7) {
                    _fun52795_ip = 111;
                    continue _fun52795
                }
            case 83:
                var9 = var0 == var10;
                var7 = null;
                if (var9) {
                    _fun52795_ip = 108;
                    continue _fun52795
                }
            case 92:
                var11 = var0 == var10;
                var9 = undefined;
                if (var11) {
                    _fun52795_ip = 105;
                    continue _fun52795
                }
            case 101:
                var9 = var10[var4];
            case 105:
                var7 = var9;
            case 108:
                var8 = var7;
            case 111:
                var7 = var0 == var8;
                var12 = undefined;
                if (var7) {
                    _fun52795_ip = 126;
                    continue _fun52795
                }
            case 120:
                var12 = var8.numTimesDismissed;
            case 126:
                var _closure2_slot2 = var0;
                var9 = var0 != var4;
                var7 = null;
                if (!var9) {
                    _fun52795_ip = 225;
                    continue _fun52795
                }
            case 139:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 12;
                var9 = var11[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.disableNewUserDismissibleContent;
                var9 = var9.bind(var10)(var4);
                var11 = !var9;
                var9 = var0 == var8;
                var10 = undefined;
                if (var9) {
                    _fun52795_ip = 188;
                    continue _fun52795
                }
            case 182:
                var10 = var8.lastDismissedAtMs;
            case 188:
                var9 = _closure1_slot14;
                var13 = arg2;
                var17 = undefined;
                var16 = var11;
                var15 = var10;
                var14 = var12;
                var8 = var17[var9](var16, var15, var14, var13, var12);
                var0 = null;
                if (!var8) {
                    _fun52795_ip = 218;
                    continue _fun52795
                }
            case 215:
                var0 = var4;
            case 218:
                _closure2_slot2 = var0;
                var7 = var0;
            case 225:
                var0 = _closure1_slot12;
                var3 = var0.bind(var3)(var7, var5, var6);
                var0 = new Array(2);
                var0[0] = var3;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun52797: for (var _fun52797_ip = 0;;) switch (_fun52797_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun52797_ip = 90;
                                continue _fun52797
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var6 = arg0;
                            var0.dismissAction = var6;
                            var5 = _closure2_slot1;
                            var0.groupName = var5;
                            var0.guildId = var1;
                            var5 = arg1;
                            var0.forceTrack = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0[1] = var1;
                return var0;
        }
    };
    var2.UNSAFE_useGetTimeRecurringGuildDismissibleContent = var3;
    var1 = function arg0() {
        var2 = arg0;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 10;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            _fun52799: for (var _fun52799_ip = 0;;) switch (_fun52799_ip) {
                case 0:
                    var0 = _closure1_slot4;
                    var0 = var0.settings;
                    var1 = var0.userContent;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun52799_ip = 36;
                        continue _fun52799
                    }
                case 30:
                    var0 = var1.dismissedContents;
                case 36:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var3, var1);
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun52800: for (var _fun52800_ip = 0;;) switch (_fun52800_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun52800_ip = 63;
                        continue _fun52800
                    }
                case 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.hasBit;
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = !var1;
                case 63:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useDangerouslyPeekDismissibleContents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 3214, 1362, 1364, 660, 665, 795, 1358, 6010, 566, 1360, 3236, 1357, 3213, 21, 2]);