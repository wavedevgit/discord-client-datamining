// modules/app_dms/useAppDMChatInputState.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useQueryState;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot9 = var3;
    var6 = 7;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationCommandType;
    var7 = var3.PRIMARY_ENTRY_POINT;
    var3 = new Array(4);
    var3[0] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandType;
    var7 = var7.CHAT;
    var3[1] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandType;
    var7 = var7.MESSAGE;
    var3[2] = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ApplicationCommandType;
    var6 = var6.USER;
    var3[3] = var6;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_dms/useAppDMChatInputState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72125: for (var _fun72125_ip = 0;;) switch (_fun72125_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.context;
                var2 = undefined;
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var2;
                var5 = var0.channel;
                var _closure2_slot0 = var5;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var5;
                var1 = function() { // Environment: var4
                    _fun72126: for (var _fun72126_ip = 0;;) switch (_fun72126_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.isDM;
                            var1 = var1.bind(var2)();
                            var3 = true;
                            if (!(var3 === var1)) {
                                _fun72126_ip = 80;
                                continue _fun72126
                            }
                        case 23:
                            var2 = _closure1_slot8;
                            var1 = var2.getUser;
                            var4 = _closure2_slot0;
                            var0 = var4.getRecipientId;
                            var0 = var0.bind(var4)();
                            var1 = var1.bind(var2)(var0);
                            var2 = undefined;
                            var0 = null;
                            if (!(var2 !== var1)) {
                                _fun72126_ip = 78;
                                continue _fun72126
                            }
                        case 63:
                            var2 = var1.bot;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun72126_ip = 78;
                                continue _fun72126
                            }
                        case 75:
                            var0 = var1;
                        case 78:
                            return var0;
                        case 80:
                            var0 = null;
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var1, var3);
                var _closure2_slot1 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var6 = var8[var1];
                var11 = var7.bind(var2)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var4
                    _fun72127: for (var _fun72127_ip = 0;;) switch (_fun72127_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getAppIdForBotUserId;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun72127_ip = 40;
                                continue _fun72127
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var9, var6);
                var1 = var8[var1];
                var9 = var7.bind(var2)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var4
                    _fun72128: for (var _fun72128_ip = 0;;) switch (_fun72128_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var3 = null;
                            var0 = undefined;
                            if (!(var3 !== var2)) {
                                _fun72128_ip = 72;
                                continue _fun72128
                            }
                        case 15:
                            var5 = _closure1_slot6;
                            var4 = var5.getUserProfile;
                            var2 = _closure2_slot1;
                            var7 = var3 == var2;
                            var2 = undefined;
                            if (var7) {
                                _fun72128_ip = 50;
                                continue _fun72128
                            }
                        case 41:
                            var6 = _closure2_slot1;
                            var2 = var6.id;
                        case 50:
                            var2 = var4.bind(var5)(var2);
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun72128_ip = 69;
                                continue _fun72128
                            }
                        case 64:
                            var1 = var2.application;
                        case 69:
                            var0 = var1;
                        case 72:
                            return var0;
                    }
                };
                var8 = var8.bind(var9)(var7, var1);
                var1 = null;
                var7 = var6;
                if (!(var1 == var7)) {
                    _fun72125_ip = 181;
                    continue _fun72125
                }
            case 164:
                var9 = var1 == var8;
                var6 = undefined;
                if (var9) {
                    _fun72125_ip = 178;
                    continue _fun72125
                }
            case 173:
                var6 = var8.id;
            case 178:
                var7 = var6;
            case 181:
                _closure2_slot2 = var7;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var7;
                var6 = function() { // Environment: var4
                    _fun72129: for (var _fun72129_ip = 0;;) switch (_fun72129_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun72129_ip = 84;
                                continue _fun72129
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot1;
                            var6 = var4 == var1;
                            var1 = undefined;
                            if (var6) {
                                _fun72129_ip = 60;
                                continue _fun72129
                            }
                        case 51:
                            var5 = _closure2_slot1;
                            var1 = var5.id;
                        case 60:
                            if (!(var4 == var1)) {
                                _fun72129_ip = 68;
                                continue _fun72129
                            }
                        case 64:
                            var1 = _closure1_slot9;
                        case 68:
                            var0 = {};
                            var4 = true;
                            var0.withMutualGuilds = var4;
                            var0 = var2.bind(var3)(var1, var3, var0);
                        case 84:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var6, var8);
                var9 = var10.useEffect;
                var8 = var1 == var3;
                var6 = undefined;
                if (var8) {
                    _fun72125_ip = 238;
                    continue _fun72125
                }
            case 233:
                var6 = var3.id;
            case 238:
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var4
                    _fun72130: for (var _fun72130_ip = 0;;) switch (_fun72130_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun72130_ip = 29;
                                continue _fun72130
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var1 = var3.id;
                        case 29:
                            if (!(var2 != var1)) {
                                _fun72130_ip = 92;
                                continue _fun72130
                            }
                        case 33:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'APP_DM_OPEN';
                            var1.type = var5;
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            var1.botUserId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 92:
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var6, var8);
                var9 = _closure1_slot4;
                var8 = {};
                var8.channel = var5;
                var5 = 'channel';
                var8.type = var5;
                var6 = {};
                var5 = _closure1_slot10;
                var6.commandTypes = var5;
                var5 = {};
                var5.applicationId = var7;
                var11 = var1 == var3;
                var10 = undefined;
                if (var11) {
                    _fun72125_ip = 308;
                    continue _fun72125
                }
            case 303:
                var10 = var3.id;
            case 308:
                var10 = var1 != var10;
                var5.allowFetch = var10;
                var10 = true;
                var5.allowApplicationState = var10;
                var5 = var9.bind(var2)(var8, var6, var5);
                var8 = var5.descriptors;
                var6 = var8.find;
                var5 = function(arg0) { // Environment: var4
                    _fun72131: for (var _fun72131_ip = 0;;) switch (_fun72131_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.application;
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun72131_ip = 24;
                                continue _fun72131
                            }
                        case 19:
                            var1 = var0.id;
                        case 24:
                            var0 = _closure2_slot2;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var5 = var6.bind(var8)(var5);
                var6 = var1 == var5;
                var9 = undefined;
                if (var6) {
                    _fun72125_ip = 368;
                    continue _fun72125
                }
            case 363:
                var9 = var5.application;
            case 368:
                _closure2_slot3 = var9;
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var9;
                var4 = function() { // Environment: var4
                    _fun72132: for (var _fun72132_ip = 0;;) switch (_fun72132_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun72132_ip = 40;
                                continue _fun72132
                            }
                        case 18:
                            var3 = _closure1_slot7;
                            var2 = var3.createFromServer;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var4 = var6.bind(var8)(var4, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var6 = var5.bind(var2)(var0);
                var5 = var6.useGetOrFetchApplication;
                var8 = var1 == var4;
                var0 = undefined;
                if (!var8) {
                    _fun72125_ip = 440;
                    continue _fun72125
                }
            case 437:
                var0 = var7;
            case 440:
                var5 = var5.bind(var6)(var0);
                var0 = {};
                if (!(var1 != var4)) {
                    _fun72125_ip = 454;
                    continue _fun72125
                }
            case 451:
                var5 = var4;
            case 454:
                var6 = var1 != var5;
                var4 = undefined;
                if (!var6) {
                    _fun72125_ip = 466;
                    continue _fun72125
                }
            case 463:
                var4 = var5;
            case 466:
                var0.application = var4;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun72125_ip = 485;
                    continue _fun72125
                }
            case 479:
                var2 = var3.bot;
            case 485:
                var1 = var1 != var2;
                if (!var1) {
                    _fun72125_ip = 495;
                    continue _fun72125
                }
            case 492:
                var1 = var2;
            case 495:
                var0.isAppDM = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4669, 3445, 4655, 3446, 1613, 660, 1636, 566, 6947, 806, 6874, 2]);