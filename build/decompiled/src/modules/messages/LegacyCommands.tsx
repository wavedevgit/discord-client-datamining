// modules/messages/LegacyCommands.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
        var5 = require;
        var9 = metroImportDefault;
        var2 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var6;
        var0 = function(arg0, arg1, arg2, arg3) { // Original name: executeCommand, environment: var1
            var3 = arg1;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.trackWithMetadata;
            var0 = _closure1_slot6;
            var1 = var0.SLASH_COMMAND_USED;
            var0 = {};
            var5 = arg0;
            var0.command = var5;
            var0 = var2.bind(var4)(var1, var0);
            var2 = var3.action;
            var1 = arg2;
            var0 = arg3;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var _closure1_slot11 = var0;
        var4 = global;
        var8 = var4.Object;
        var7 = var8.defineProperty;
        var3 = {};
        var0 = true;
        var3.value = var0;
        var0 = '__esModule';
        var0 = var7.bind(var8)(var2, var0, var3);
        var0 = 0;
        var3 = var6[var0];
        var0 = undefined;
        var3 = var9.bind(var0)(var3);
        var _closure1_slot3 = var3;
        var3 = 1;
        var3 = var6[var3];
        var3 = var9.bind(var0)(var3);
        var _closure1_slot4 = var3;
        var3 = 2;
        var3 = var6[var3];
        var3 = var9.bind(var0)(var3);
        var _closure1_slot5 = var3;
        var3 = 3;
        var3 = var6[var3];
        var3 = var5.bind(var0)(var3);
        var7 = var3.AnalyticEvents;
        var _closure1_slot6 = var7;
        var7 = var3.MARKDOWN_SPOILER_WRAPPER;
        var _closure1_slot7 = var7;
        var3 = var3.ME;
        var _closure1_slot8 = var3;
        var3 = /\\([*?+\/])/g;
        var _closure1_slot9 = var3;
        var3 = {};
        var7 = {};
        var8 = function() { // Original name: action, environment: var1
            var0 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.EnableTTSCommand;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var0.tts = var1;
            return var0;
        };
        var7.action = var8;
        var3.tts = var7;
        var7 = {};
        var8 = function(arg0) { // Original name: action, environment: var1
            var0 = {};
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '_';
            var1 = arg0;
            var1 = var3.bind(var2)(var1, var2);
            var0.content = var1;
            return var0;
        };
        var7.action = var8;
        var3.me = var7;
        var7 = {};
        var8 = function(arg0) { // Original name: action, environment: var1
            var0 = {};
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = arg0;
            var1 = ' (╯°□°)╯︵ ┻━┻';
            var2 = var4.bind(var3)(var2, var1);
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var0.content = var1;
            return var0;
        };
        var7.action = var8;
        var3.tableflip = var7;
        var7 = {};
        var8 = function(arg0) { // Original name: action, environment: var1
            var0 = {};
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = arg0;
            var1 = ' ┬─┬ノ( º _ ºノ)';
            var2 = var4.bind(var3)(var2, var1);
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var0.content = var1;
            return var0;
        };
        var7.action = var8;
        var3.unflip = var7;
        var7 = {};
        var8 = function(arg0) { // Original name: action, environment: var1
            var0 = {};
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = arg0;
            var1 = ' ¯\\_(ツ)_/¯';
            var2 = var4.bind(var3)(var2, var1);
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var0.content = var1;
            return var0;
        };
        var7.action = var8;
        var3.shrug = var7;
        var7 = {};
        var8 = function(arg0, arg1) { // Original name: action, environment: var1
            _fun90033: for (var _fun90033_ip = 0;;) switch (_fun90033_ip) {
                case 0:
                    var0 = arg1;
                    var1 = var0.channel;
                    var2 = var1.guild_id;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun90033_ip = 23;
                        continue _fun90033
                    }
                case 19:
                    var0 = undefined;
                    return var0;
                case 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.changeNickname;
                    var9 = var1.guild_id;
                    var8 = var1.id;
                    var7 = _closure1_slot8;
                    var6 = arg0;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = {};
                    var1 = '';
                    var0.content = var1;
                    return var0;
            }
        };
        var7.action = var8;
        var3.nick = var7;
        var7 = {};
        var8 = 6;
        var10 = var6[var8];
        var12 = var9.bind(var0)(var10);
        var11 = var12.anyScopeRegex;
        var10 = /^\+:(.+?): *$/;
        var10 = var11.bind(var12)(var10);
        var7.match = var10;
        var10 = function(arg0, arg1) { // Original name: action, environment: var1
            _fun90034: for (var _fun90034_ip = 0;;) switch (_fun90034_ip) {
                case 0:
                    var7 = arg0;
                    var1 = arg1;
                    var0 = var1.isEdit;
                    var1 = var1.channel;
                    if (var0) {
                        _fun90034_ip = 248;
                        continue _fun90034
                    }
                case 23:
                    var4 = _closure1_slot5;
                    var3 = var4.hasPresent;
                    var0 = var1.id;
                    var0 = var3.bind(var4)(var0);
                    if (!var0) {
                        _fun90034_ip = 248;
                        continue _fun90034
                    }
                case 52:
                    var4 = _closure1_slot5;
                    var3 = var4.getMessages;
                    var0 = var1.id;
                    var3 = var3.bind(var4)(var0);
                    var0 = var3.last;
                    var0 = var0.bind(var3)();
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun90034_ip = 248;
                        continue _fun90034
                    }
                case 91:
                    var4 = var0.id;
                    if (!(var3 != var4)) {
                        _fun90034_ip = 248;
                        continue _fun90034
                    }
                case 103:
                    var6 = _closure1_slot4;
                    var5 = var6.getDisambiguatedEmojiContext;
                    var4 = var1.guild_id;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getByName;
                    var4 = var7.trim;
                    var9 = var4.bind(var7)();
                    var8 = var9.slice;
                    var7 = 2;
                    var4 = -1;
                    var4 = var8.bind(var9)(var7, var4);
                    var6 = var5.bind(var6)(var4);
                    if (!(var3 != var6)) {
                        _fun90034_ip = 248;
                        continue _fun90034
                    }
                case 168:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 7;
                    var2 = var8[var2];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var2);
                    var3 = var4.addReaction;
                    var2 = var1.id;
                    var1 = var0.id;
                    var0 = 8;
                    var0 = var8[var0];
                    var5 = var7.bind(var5)(var0);
                    var0 = var5.toReactionEmoji;
                    var0 = var0.bind(var5)(var6);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = {};
                    var1 = '';
                    var0.content = var1;
                    return var0;
                case 248:
                    var0 = undefined;
                    return var0;
            }
        };
        var7.action = var10;
        var3.reaction = var7;
        var7 = {};
        var8 = var6[var8];
        var10 = var9.bind(var0)(var8);
        var9 = var10.anyScopeRegex;
        var8 = /^s\\/([ ^ \\/\\]*(?:\\.[^\\/\\]*)*)\\/([ ^ \\/\\]*(?:\\.[^\\/\\]*)*)(?:\\/([g] * )) ? $ / ; var8 = var9.bind(var10)(var8); var7.match = var8; var8 = function(arg0, arg1) { // Original name: action, environment: var1
                        _fun90035: for (var _fun90035_ip = 0;;) switch (_fun90035_ip) {
                            case 0:
                                var9 = arg0;
                                var1 = arg1;
                                var0 = var1.isEdit;
                                var1 = var1.channel;
                                if (var0) {
                                    _fun90035_ip = 446;
                                    continue _fun90035
                                }
                            case 25:
                                var4 = _closure1_slot5;
                                var3 = var4.getLastEditableMessage;
                                var0 = var1.id;
                                var0 = var3.bind(var4)(var0);
                                var3 = null;
                                if (!(var3 != var0)) {
                                    _fun90035_ip = 434;
                                    continue _fun90035
                                }
                            case 59:
                                var4 = var0.id;
                                if (!(var3 != var4)) {
                                    _fun90035_ip = 434;
                                    continue _fun90035
                                }
                            case 71:
                                var4 = global;
                                var7 = var4.Array;
                                var6 = var7.from;
                                var8 = var9.match;
                                var4 = this;
                                var4 = var4.match;
                                var4 = var4.regex;
                                var4 = var8.bind(var9)(var4);
                                if (!(var3 == var4)) {
                                    _fun90035_ip = 118;
                                    continue _fun90035
                                }
                            case 114:
                                var4 = new Array(0);
                            case 118:
                                var8 = var6.bind(var7)(var4);
                                var7 = _closure1_slot3;
                                var4 = undefined;
                                var6 = 4;
                                var8 = var7.bind(var4)(var8, var6);
                                var6 = 0;
                                var7 = var8[var6];
                                var7 = 1;
                                var12 = var8[var7];
                                var7 = 2;
                                var11 = var8[var7];
                                var7 = 3;
                                var10 = var8[var7];
                                var7 = var3 == var10;
                                var8 = undefined;
                                if (var7) {
                                    _fun90035_ip = 188;
                                    continue _fun90035
                                }
                            case 174:
                                var9 = var10.split;
                                var7 = '';
                                var8 = var9.bind(var10)(var7);
                            case 188:
                                if (!(var3 == var8)) {
                                    _fun90035_ip = 196;
                                    continue _fun90035
                                }
                            case 192:
                                var8 = new Array(0);
                            case 196:
                                var10 = var12.replace;
                                var9 = _closure1_slot9;
                                var7 = function(arg0, arg1) { // Environment: var5
                                    var0 = arg1;
                                    return var0;
                                };
                                var10 = var10.bind(var12)(var9, var7);
                                var7 = var11.replace;
                                var5 = function(arg0, arg1) { // Environment: var5
                                    var0 = arg1;
                                    return var0;
                                };
                                var9 = var7.bind(var11)(var9, var5);
                                var7 = var8.includes;
                                var5 = 'g';
                                var5 = var7.bind(var8)(var5);
                                var8 = var0.content;
                                if (var5) {
                                    _fun90035_ip = 271;
                                    continue _fun90035
                                }
                            case 258:
                                var5 = var8.replace;
                                var5 = var5.bind(var8)(var10, var9);
                                _fun90035_ip = 283;
                                continue _fun90035;
                            case 271:
                                var7 = var8.replaceAll;
                                var5 = var7.bind(var8)(var10, var9);
                            case 283:
                                if (!(var3 != var5)) {
                                    _fun90035_ip = 305;
                                    continue _fun90035
                                }
                            case 287:
                                var3 = var5.trim;
                                var7 = var3.bind(var5)();
                                var3 = '';
                                if (!(var3 === var7)) {
                                    _fun90035_ip = 364;
                                    continue _fun90035
                                }
                            case 305:
                                var3 = var0.attachments;
                                var3 = var3.length;
                                if (!(var6 === var3)) {
                                    _fun90035_ip = 364;
                                    continue _fun90035
                                }
                            case 320:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 9;
                                var3 = var7[var3];
                                var8 = var6.bind(var4)(var3);
                                var7 = var8.deleteMessage;
                                var6 = var1.id;
                                var3 = var0.id;
                                var3 = var7.bind(var8)(var6, var3);
                                _fun90035_ip = 422;
                                continue _fun90035;
                            case 364:
                                var3 = var0.content;
                                if (!(var5 !== var3)) {
                                    _fun90035_ip = 422;
                                    continue _fun90035
                                }
                            case 373:
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 9;
                                var2 = var6[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.editMessage;
                                var2 = var1.id;
                                var1 = var0.id;
                                var0 = {};
                                var0.content = var5;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 422:
                                var0 = {};
                                var1 = '';
                                var0.content = var1;
                                return var0;
                            case 434:
                                var0 = {};
                                var1 = '';
                                var0.content = var1;
                                return var0;
                            case 446:
                                var0 = undefined;
                                return var0;
                        }
                    }; var7.action = var8; var3.searchReplace = var7; var7 = {}; var8 = function(arg0) { // Original name: action, environment: var1
                        var0 = {};
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg0;
                        var2 = var3.bind(var2)(var1);
                        var1 = var2.trim;
                        var1 = var1.bind(var2)();
                        var0.content = var1;
                        return var0;
                    }; var7.action = var8; var3.spoiler = var7;
                    var _closure1_slot10 = var3; var8 = var4.Object; var7 = var8.setPrototypeOf; var4 = null; var4 = var7.bind(var8)(var3, var4); var4 = 11; var4 = var6[var4]; var6 = var5.bind(var0)(var4); var5 = var6.fileFinishedImporting; var4 = 'modules/messages/LegacyCommands.tsx'; var4 = var5.bind(var6)(var4); var2.COMMANDS = var3; var1 = function(arg0, arg1) { // Original name: handleLegacyCommands, environment: var1
                        _fun90039: for (var _fun90039_ip = 0;;) switch (_fun90039_ip) {
                            case 0:
                                var5 = arg0;
                                var11 = _closure1_slot10;
                                var0 = undefined;
                                var7 = null;
                                var6 = undefined;
                                for (var8 in var11)
                                    case 24: {
                                        case 33: var4 = var8;
                                        var2 = _closure1_slot10;
                                        var3 = var2[var4];
                                        var2 = var3.match;
                                        if (var7 == var2) {
                                            _fun90039_ip = 24;
                                            continue _fun90039
                                        }
                                        case 54: var2 = var3.match;
                                        var13 = var2.regex;
                                        var6 = var13;
                                        if (var7 == var6) {
                                            _fun90039_ip = 24;
                                            continue _fun90039
                                        }
                                        case 73: var2 = var13.test;
                                        var2 = var2.bind(var13)(var5);
                                        var6 = var13;
                                        if (!var2) {
                                            _fun90039_ip = 24;
                                            continue _fun90039
                                        }
                                        case 89: var2 = _closure1_slot11;
                                        var14 = arg1;
                                        var18 = undefined;
                                        var17 = var4;
                                        var16 = var3;
                                        var15 = var5;
                                        var1 = var18[var2](var17, var16, var15, var14, var13);
                                        return var1;
                                    }
                            case 113:
                                return var0;
                        }
                    }; var2.handleLegacyCommands = var1;
                    return var0;
                })(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4699, 4213, 660, 1348, 7565, 3105, 6514, 3061, 6487, 4265, 2]);