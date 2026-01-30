// modules/threads/ThreadHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var11;
    var7 = function(arg0, arg1) { // Original name: useCanStartPublicThread, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot16;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var2 = 8;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun55427: for (var _fun55427_ip = 0;;) switch (_fun55427_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isForumLikeChannel;
                    var2 = var1.bind(var2)();
                    if (var2) {
                        _fun55427_ip = 79;
                        continue _fun55427
                    }
                case 23:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.combine;
                    var2 = _closure1_slot10;
                    var3 = var2.CREATE_PUBLIC_THREADS;
                    var2 = _closure1_slot10;
                    var2 = var2.READ_MESSAGE_HISTORY;
                    var3 = var4.bind(var5)(var3, var2);
                    _fun55427_ip = 89;
                    continue _fun55427;
                case 79:
                    var2 = _closure1_slot10;
                    var3 = var2.SEND_MESSAGES;
                case 89:
                    var2 = _closure1_slot8;
                    var1 = var2.can;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var1 = var6.bind(var7)(var5, var0, var1);
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var4, var0);
        return var0;
    };
    var _closure1_slot14 = var7;
    var6 = function(arg0) { // Original name: useCanStartPrivateThread, environment: var1
        _fun55428: for (var _fun55428_ip = 0;;) switch (_fun55428_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 8;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(1);
                var2[0] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.combine;
                    var0 = _closure1_slot10;
                    var0 = var0.CREATE_PRIVATE_THREADS;
                    var1 = var1.bind(var4)(var0);
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var0, var2);
                var5 = var4.type;
                var0 = _closure1_slot12;
                var0 = var0.GUILD_TEXT;
                var0 = var5 === var0;
                if (!var0) {
                    _fun55428_ip = 103;
                    continue _fun55428
                }
            case 93:
                var1 = _closure1_slot16;
                var0 = var1.bind(var3)(var2, var4);
            case 103:
                return var0;
        }
    };
    var _closure1_slot15 = var6;
    var0 = function(arg0, arg1, arg2) { // Original name: canStartThread, environment: var1
        _fun55430: for (var _fun55430_ip = 0;;) switch (_fun55430_ip) {
            case 0:
                var2 = arg2;
                var0 = arg0;
                if (var0) {
                    _fun55430_ip = 13;
                    continue _fun55430
                }
            case 9:
                var0 = false;
                return var0;
            case 13:
                var4 = _closure1_slot5;
                var3 = var4.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun55430_ip = 45;
                    continue _fun55430
                }
            case 41:
                var1 = false;
                return var1;
            case 45:
                var1 = null;
                if (!(var1 != var2)) {
                    _fun55430_ip = 105;
                    continue _fun55430
                }
            case 51:
                var3 = var2.hasFlag;
                var1 = _closure1_slot11;
                var1 = var1.HAS_THREAD;
                var1 = var3.bind(var2)(var1);
                if (var1) {
                    _fun55430_ip = 113;
                    continue _fun55430
                }
            case 75:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 10;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun55430_ip = 109;
                    continue _fun55430
                }
            case 105:
                var0 = true;
                return var0;
            case 109:
                var0 = false;
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: hasSendPermission, environment: var1
        _fun55431: for (var _fun55431_ip = 0;;) switch (_fun55431_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun55431_ip = 40;
                    continue _fun55431
                }
            case 15:
                var2 = var3.can;
                var1 = _closure1_slot10;
                var1 = var1.SEND_MESSAGES_IN_THREADS;
                var0 = var2.bind(var3)(var1, var4);
            case 40:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _canUnarchiveThread, environment: var1
        _fun55432: for (var _fun55432_ip = 0;;) switch (_fun55432_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = arg2;
                var5 = null;
                var3 = var5 == var1;
                if (var3) {
                    _fun55432_ip = 31;
                    continue _fun55432
                }
            case 18:
                var0 = var1.isThread;
                var0 = var0.bind(var1)();
                var3 = !var0;
            case 31:
                var0 = !var3;
                if (var3) {
                    _fun55432_ip = 68;
                    continue _fun55432
                }
            case 37:
                var3 = var1.threadMetadata;
                var1 = var4;
                if (!(var5 != var3)) {
                    _fun55432_ip = 65;
                    continue _fun55432
                }
            case 50:
                var3 = var3.locked;
                var1 = var4;
                if (!var3) {
                    _fun55432_ip = 65;
                    continue _fun55432
                }
            case 62:
                var1 = var2;
            case 65:
                var0 = var1;
            case 68:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var5 = function(arg0) { // Original name: useIsActiveChannelOrUnarchivableThread, environment: var1
        _fun55433: for (var _fun55433_ip = 0;;) switch (_fun55433_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 8;
                var2 = var5[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.useStateFromStores;
                var6 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun55434: for (var _fun55434_ip = 0;;) switch (_fun55434_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun55434_ip = 49;
                                continue _fun55434
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.can;
                            var2 = _closure1_slot10;
                            var2 = var2.SEND_MESSAGES_IN_THREADS;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1, var0);
                var6 = null;
                var0 = var6 != var4;
                if (!var0) {
                    _fun55433_ip = 152;
                    continue _fun55433
                }
            case 71:
                var1 = var4.isThread;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if (var1) {
                    _fun55433_ip = 97;
                    continue _fun55433
                }
            case 87:
                var2 = var4.isActiveThread;
                var1 = var2.bind(var4)();
            case 97:
                if (var1) {
                    _fun55433_ip = 149;
                    continue _fun55433
                }
            case 100:
                var2 = var4.isArchivedThread;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun55433_ip = 140;
                    continue _fun55433
                }
            case 113:
                var4 = var4.threadMetadata;
                var6 = var6 == var4;
                var5 = undefined;
                if (var6) {
                    _fun55433_ip = 134;
                    continue _fun55433
                }
            case 128:
                var5 = var4.locked;
            case 134:
                var4 = true;
                var2 = var4 !== var5;
            case 140:
                if (!var2) {
                    _fun55433_ip = 146;
                    continue _fun55433
                }
            case 143:
                var2 = var3;
            case 146:
                var1 = var2;
            case 149:
                var0 = var1;
            case 152:
                return var0;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function(arg0) { // Original name: useIsThreadModerator, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot21;
            var2 = _closure2_slot0;
            var0 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var4;
    var3 = function(arg0) { // Original name: isThreadModerator, environment: var1
        _fun55437: for (var _fun55437_ip = 0;;) switch (_fun55437_ip) {
            case 0:
                var4 = arg0;
                var5 = arguments[1];
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun55437_ip = 30;
                    continue _fun55437
                }
            case 12:
                var1 = _closure1_slot8;
                var0 = new Array(1);
                var0[0] = var1;
                var5 = var0;
            case 30:
                var2 = _closure1_slot4;
                var0 = 1;
                var2 = var2.bind(var3)(var5, var0);
                var0 = 0;
                var3 = var2[var0];
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun55437_ip = 83;
                    continue _fun55437
                }
            case 61:
                var2 = var3.can;
                var1 = _closure1_slot10;
                var1 = var1.MANAGE_THREADS;
                var0 = var2.bind(var3)(var1, var4);
            case 83:
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var0 = global;
    var13 = var0.Object;
    var9 = var13.defineProperty;
    var8 = {};
    var14 = true;
    var8.value = var14;
    var0 = '__esModule';
    var0 = var9.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var11[var0];
    var0 = undefined;
    var8 = var12.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var11[var8];
    var9 = var12.bind(var0)(var8);
    var8 = 2;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var8 = var8.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var12.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var12.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var11[var8];
    var8 = var12.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var11[var8];
    var8 = var12.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var12 = var8.Permissions;
    var _closure1_slot10 = var12;
    var12 = var8.MessageFlags;
    var _closure1_slot11 = var12;
    var8 = var8.ChannelTypes;
    var _closure1_slot12 = var8;
    var8 = {
        'id': '2022-07_voice_in_threads',
        'label': 'Voice in Threads',
        'kind': 'guild'
    };
    var12 = {};
    var13 = false;
    var12.enabled = var13;
    var8.defaultConfig = var12;
    var13 = {
        'id': 1,
        'label': 'On'
    };
    var12 = {};
    var12.enabled = var14;
    var13.config = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var8.treatments = var12;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot13 = var8;
    var9 = 15;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/threads/ThreadHooks.tsx';
    var9 = var10.bind(var11)(var9);
    var2.VoiceInThreadsExperiment = var8;
    var2.useCanStartPublicThread = var7;
    var7 = function(arg0, arg1) { // Original name: computeCanStartPublicThread, environment: var1
        _fun55438: for (var _fun55438_ip = 0;;) switch (_fun55438_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.isForumLikeChannel;
                var1 = var0.bind(var4)();
                if (var1) {
                    _fun55438_ip = 75;
                    continue _fun55438
                }
            case 19:
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.combine;
                var1 = _closure1_slot10;
                var2 = var1.CREATE_PUBLIC_THREADS;
                var1 = _closure1_slot10;
                var1 = var1.READ_MESSAGE_HISTORY;
                var2 = var3.bind(var5)(var2, var1);
                _fun55438_ip = 85;
                continue _fun55438;
            case 75:
                var1 = _closure1_slot10;
                var2 = var1.SEND_MESSAGES;
            case 85:
                var3 = _closure1_slot16;
                var1 = _closure1_slot8;
                var0 = var1.can;
                var2 = var0.bind(var1)(var2, var4);
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var4, var0);
                return var0;
        }
    };
    var2.computeCanStartPublicThread = var7;
    var2.useCanStartPrivateThread = var6;
    var6 = function(arg0, arg1) { // Original name: computeCanStartPrivateThread, environment: var1
        var4 = arg0;
        var3 = _closure1_slot16;
        var2 = _closure1_slot8;
        var1 = var2.can;
        var0 = _closure1_slot10;
        var0 = var0.CREATE_PRIVATE_THREADS;
        var2 = var1.bind(var2)(var0, var4);
        var1 = undefined;
        var0 = arg1;
        var0 = var3.bind(var1)(var2, var4, var0);
        return var0;
    };
    var2.computeCanStartPrivateThread = var6;
    var6 = function(arg0) { // Original name: useCanStartThread, environment: var1
        _fun55440: for (var _fun55440_ip = 0;;) switch (_fun55440_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot14;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                var1 = _closure1_slot15;
                var1 = var1.bind(var2)(var3);
                if (var0) {
                    _fun55440_ip = 32;
                    continue _fun55440
                }
            case 29:
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var2.useCanStartThread = var6;
    var6 = function(arg0) { // Original name: useCanViewThreadForMessage, environment: var1
        _fun55441: for (var _fun55441_ip = 0;;) switch (_fun55441_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var11 = var6.bind(var5)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var3;
                var8 = new Array(1);
                var8[0] = var4;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 11;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.castMessageIdAsChannelId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var10.bind(var11)(var9, var3, var8);
                var _closure2_slot1 = var3;
                var2 = var7[var2];
                var7 = var6.bind(var5)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var0 = _closure1_slot10;
                    var1 = var0.VIEW_CHANNEL;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var1, var2);
                var1 = var4.hasFlag;
                var0 = _closure1_slot11;
                var0 = var0.HAS_THREAD;
                var0 = var1.bind(var4)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun55441_ip = 169;
                    continue _fun55441
                }
            case 151:
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun55441_ip = 166;
                    continue _fun55441
                }
            case 160:
                var2 = !var2;
                var1 = !var2;
            case 166:
                var0 = var1;
            case 169:
                return var0;
        }
    };
    var2.useCanViewThreadForMessage = var6;
    var6 = function(arg0) { // Original name: useHasActiveThreads, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var5 = _closure1_slot9;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot8;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun55445: for (var _fun55445_ip = 0;;) switch (_fun55445_ip) {
                case 0:
                    var6 = _closure1_slot9;
                    var5 = var6.getActiveJoinedThreadsForParent;
                    var2 = _closure2_slot0;
                    var4 = var2.guild_id;
                    var3 = var2.id;
                    var8 = var5.bind(var6)(var4, var3);
                    var5 = var6.getActiveJoinedRelevantThreadsForParent;
                    var4 = var2.guild_id;
                    var3 = var2.id;
                    var3 = var5.bind(var6)(var4, var3);
                    var _closure3_slot0 = var3;
                    var5 = var6.getActiveUnjoinedThreadsForParent;
                    var4 = var2.guild_id;
                    var2 = var2.id;
                    var5 = var5.bind(var6)(var4, var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 12;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var9 = var2.bind(var4)(var3);
                    var3 = var9.some;
                    var2 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot8;
                        var2 = var3.can;
                        var0 = _closure1_slot10;
                        var1 = var0.VIEW_CHANNEL;
                        var0 = arg0;
                        var0 = var0.channel;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var3 = var3.bind(var9)(var2);
                    var2 = var7[var1];
                    var2 = var6.bind(var4)(var2);
                    var9 = var2.bind(var4)(var8);
                    var8 = var9.some;
                    var2 = function(arg0) { // Environment: var0
                        _fun55447: for (var _fun55447_ip = 0;;) switch (_fun55447_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.channel;
                                var2 = var0.id;
                                var0 = _closure3_slot0;
                                var2 = var2 in var0;
                                var0 = !var2;
                                if (var2) {
                                    _fun55447_ip = 64;
                                    continue _fun55447
                                }
                            case 30:
                                var4 = _closure1_slot8;
                                var3 = var4.can;
                                var2 = _closure1_slot10;
                                var2 = var2.VIEW_CHANNEL;
                                var1 = var1.channel;
                                var0 = var3.bind(var4)(var2, var1);
                            case 64:
                                return var0;
                        }
                    };
                    var2 = var8.bind(var9)(var2);
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var4 = var1.bind(var4)(var5);
                    var1 = var4.some;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot8;
                        var2 = var3.can;
                        var0 = _closure1_slot10;
                        var1 = var0.VIEW_CHANNEL;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var1.bind(var4)(var0);
                    var0 = {};
                    if (var3) {
                        _fun55445_ip = 199;
                        continue _fun55445
                    }
                case 196:
                    var3 = var2;
                case 199:
                    if (var3) {
                        _fun55445_ip = 205;
                        continue _fun55445
                    }
                case 202:
                    var3 = var1;
                case 205:
                    var0.hasActiveThreads = var3;
                    if (var1) {
                        _fun55445_ip = 216;
                        continue _fun55445
                    }
                case 213:
                    var1 = var2;
                case 216:
                    var0.hasMoreActiveThreads = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasActiveThreads = var6;
    var6 = function(arg0) { // Original name: useCanManageThread, environment: var1
        _fun55449: for (var _fun55449_ip = 0;;) switch (_fun55449_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 8;
                var2 = var8[var5];
                var6 = undefined;
                var10 = var7.bind(var6)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun55450: for (var _fun55450_ip = 0;;) switch (_fun55450_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun55450_ip = 40;
                                continue _fun55450
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.parent_id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var3, var2);
                var _closure2_slot1 = var3;
                var2 = var8[var5];
                var12 = var7.bind(var6)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var2;
                var9 = new Array(1);
                var9[0] = var3;
                var2 = function() { // Environment: var0
                    _fun55451: for (var _fun55451_ip = 0;;) switch (_fun55451_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun55451_ip = 49;
                                continue _fun55451
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.can;
                            var2 = _closure1_slot10;
                            var2 = var2.MANAGE_THREADS;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var10, var2, var9);
                var5 = var8[var5];
                var6 = var7.bind(var6)(var5);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var0);
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun55449_ip = 162;
                    continue _fun55449
                }
            case 158:
                var0 = var1 != var3;
            case 162:
                if (!var0) {
                    _fun55449_ip = 228;
                    continue _fun55449
                }
            case 165:
                var1 = var4.isThread;
                var1 = var1.bind(var4)();
                var3 = !var1;
                var1 = !var3;
                if (var3) {
                    _fun55449_ip = 225;
                    continue _fun55449
                }
            case 184:
                var3 = !var2;
                var2 = !var3;
                if (!var3) {
                    _fun55449_ip = 222;
                    continue _fun55449
                }
            case 193:
                var3 = var4.isLockedThread;
                var3 = var3.bind(var4)();
                var3 = !var3;
                if (!var3) {
                    _fun55449_ip = 219;
                    continue _fun55449
                }
            case 209:
                var4 = var4.ownerId;
                var3 = var4 === var5;
            case 219:
                var2 = var3;
            case 222:
                var1 = var2;
            case 225:
                var0 = var1;
            case 228:
                return var0;
        }
    };
    var2.useCanManageThread = var6;
    var6 = function(arg0) { // Original name: useCanUnarchiveThread, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var5.bind(var3)(var2);
        var5 = var6.useStateFromStores;
        var7 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot17;
            var2 = _closure2_slot0;
            var1 = _closure1_slot8;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var2 = var5.bind(var6)(var2, var1);
        var1 = _closure1_slot20;
        var1 = var1.bind(var3)(var4);
        var0 = _closure1_slot18;
        var0 = var0.bind(var3)(var4, var2, var1);
        return var0;
    };
    var2.useCanUnarchiveThread = var6;
    var6 = function(arg0) { // Original name: canUnarchiveThread, environment: var1
        var4 = arg0;
        var3 = _closure1_slot18;
        var5 = _closure1_slot17;
        var1 = _closure1_slot8;
        var2 = undefined;
        var1 = var5.bind(var2)(var4, var1);
        var0 = _closure1_slot21;
        var0 = var0.bind(var2)(var4);
        var0 = var3.bind(var2)(var4, var1, var0);
        return var0;
    };
    var2.canUnarchiveThread = var6;
    var2.useIsActiveChannelOrUnarchivableThread = var5;
    var5 = function(arg0) { // Original name: getIsActiveChannelOrUnarchivableThread, environment: var1
        _fun55456: for (var _fun55456_ip = 0;;) switch (_fun55456_ip) {
            case 0:
                var6 = arg0;
                var4 = null;
                var0 = var4 != var6;
                if (!var0) {
                    _fun55456_ip = 119;
                    continue _fun55456
                }
            case 12:
                var1 = var6.isThread;
                var1 = var1.bind(var6)();
                var1 = !var1;
                if (var1) {
                    _fun55456_ip = 38;
                    continue _fun55456
                }
            case 28:
                var2 = var6.isActiveThread;
                var1 = var2.bind(var6)();
            case 38:
                if (var1) {
                    _fun55456_ip = 116;
                    continue _fun55456
                }
            case 41:
                var2 = var6.isArchivedThread;
                var2 = var2.bind(var6)();
                if (!var2) {
                    _fun55456_ip = 81;
                    continue _fun55456
                }
            case 54:
                var3 = var6.threadMetadata;
                var5 = var4 == var3;
                var4 = undefined;
                if (var5) {
                    _fun55456_ip = 75;
                    continue _fun55456
                }
            case 69:
                var4 = var3.locked;
            case 75:
                var3 = true;
                var2 = var3 !== var4;
            case 81:
                if (!var2) {
                    _fun55456_ip = 113;
                    continue _fun55456
                }
            case 84:
                var5 = _closure1_slot8;
                var4 = var5.can;
                var3 = _closure1_slot10;
                var3 = var3.SEND_MESSAGES_IN_THREADS;
                var2 = var4.bind(var5)(var3, var6);
            case 113:
                var1 = var2;
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.getIsActiveChannelOrUnarchivableThread = var5;
    var5 = function(arg0) { // Original name: computeIsReadOnlyThread, environment: var1
        _fun55457: for (var _fun55457_ip = 0;;) switch (_fun55457_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot8;
                var1 = var3.can;
                var0 = _closure1_slot10;
                var0 = var0.MANAGE_THREADS;
                var1 = var1.bind(var3)(var0, var2);
                var0 = var2.isArchivedLockedThread;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun55457_ip = 48;
                    continue _fun55457
                }
            case 45:
                var0 = !var1;
            case 48:
                return var0;
        }
    };
    var2.computeIsReadOnlyThread = var5;
    var2.useIsThreadModerator = var4;
    var2.isThreadModerator = var3;
    var3 = function(arg0) { // Original name: useCanRemoveThreadMember, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot7;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot8;
        var1[1] = var5;
        var4 = _closure1_slot6;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun55459: for (var _fun55459_ip = 0;;) switch (_fun55459_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun55459_ip = 105;
                        continue _fun55459
                    }
                case 30:
                    var2 = _closure1_slot6;
                    var0 = var2.getId;
                    var3 = var0.bind(var2)();
                    var2 = var4.type;
                    var0 = _closure1_slot12;
                    var0 = var0.PRIVATE_THREAD;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun55459_ip = 76;
                        continue _fun55459
                    }
                case 66:
                    var2 = var4.ownerId;
                    var0 = var2 === var3;
                case 76:
                    if (var0) {
                        _fun55459_ip = 103;
                        continue _fun55459
                    }
                case 79:
                    var3 = _closure1_slot21;
                    var1 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var4, var2);
                case 103:
                    return var0;
                case 105:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanRemoveThreadMember = var3;
    var3 = function(arg0) { // Original name: useCanJoinThreadVoice, environment: var1
        _fun55460: for (var _fun55460_ip = 0;;) switch (_fun55460_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 13;
                var0 = var1[var0];
                var8 = undefined;
                var0 = var3.bind(var8)(var0);
                var0 = var0.bind(var8)();
                var7 = _closure1_slot0;
                var3 = 8;
                var3 = var1[var3];
                var9 = var7.bind(var8)(var3);
                var4 = var9.useStateFromStores;
                var10 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot8;
                    var2 = var3.can;
                    var0 = _closure1_slot10;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var4.bind(var9)(var3, var2);
                var2 = _closure1_slot19;
                var2 = var2.bind(var8)(var6);
                var11 = _closure1_slot13;
                var10 = var11.useExperiment;
                var9 = {};
                var4 = var6.guild_id;
                var9.guildId = var4;
                var4 = 'e791ea_1';
                var9.location = var4;
                var4 = {};
                var12 = false;
                var4.autoTrackExposure = var12;
                var4 = var10.bind(var11)(var9, var4);
                var4 = var4.enabled;
                var9 = 14;
                var1 = var1[var9];
                var7 = var7.bind(var8)(var1);
                var1 = var7.useShouldAgeVerifyForAgeGate;
                var1 = var1.bind(var7)();
                if (!var1) {
                    _fun55460_ip = 200;
                    continue _fun55460
                }
            case 167:
                var7 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var9];
                var8 = var7.bind(var8)(var5);
                var7 = var8.shouldShowAgeGateForChannelId;
                var5 = var6.id;
                var1 = var7.bind(var8)(var5);
            case 200:
                var0 = !var0;
                if (!var0) {
                    _fun55460_ip = 216;
                    continue _fun55460
                }
            case 206:
                var5 = var6.isVocalThread;
                var0 = var5.bind(var6)();
            case 216:
                if (!var0) {
                    _fun55460_ip = 222;
                    continue _fun55460
                }
            case 219:
                var0 = var4;
            case 222:
                if (!var0) {
                    _fun55460_ip = 228;
                    continue _fun55460
                }
            case 225:
                var0 = var3;
            case 228:
                if (!var0) {
                    _fun55460_ip = 234;
                    continue _fun55460
                }
            case 231:
                var0 = var2;
            case 234:
                if (!var0) {
                    _fun55460_ip = 240;
                    continue _fun55460
                }
            case 237:
                var0 = !var1;
            case 240:
                return var0;
        }
    };
    var2.useCanJoinThreadVoice = var3;
    var3 = function(arg0) { // Original name: useIsNonModInLockedThread, environment: var1
        _fun55462: for (var _fun55462_ip = 0;;) switch (_fun55462_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var0 = var2.isLockedThread;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun55462_ip = 33;
                    continue _fun55462
                }
            case 30:
                var0 = !var1;
            case 33:
                return var0;
        }
    };
    var2.useIsNonModInLockedThread = var3;
    var1 = function(arg0) { // Original name: isNonModInLockedThread, environment: var1
        _fun55463: for (var _fun55463_ip = 0;;) switch (_fun55463_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot21;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var0 = var2.isLockedThread;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun55463_ip = 33;
                    continue _fun55463
                }
            case 30:
                var0 = !var1;
            case 33:
                return var0;
        }
    };
    var2.isNonModInLockedThread = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1589, 1376, 1216, 1372, 3050, 4513, 660, 566, 484, 6634, 21, 22, 6659, 4514, 2]);