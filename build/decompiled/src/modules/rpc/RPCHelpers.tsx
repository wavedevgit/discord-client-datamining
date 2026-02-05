// modules/rpc/RPCHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun63918: for (var _fun63918_ip = 0;;) switch (_fun63918_ip) {
        case 0:
            var11 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var12;
            var0 = function arg0() {
                _fun63919: for (var _fun63919_ip = 0;;) switch (_fun63919_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.type;
                        var1 = 'customEmoji';
                        if (!(var1 === var2)) {
                            _fun63919_ip = 26;
                            continue _fun63919
                        }
                    case 16:
                        var1 = 'emoji';
                        var0.type = var1;
                    case 26:
                        var2 = var0.type;
                        var1 = 'emoji';
                        var1 = var1 === var2;
                        if (!var1) {
                            _fun63919_ip = 48;
                            continue _fun63919
                        }
                    case 42:
                        var1 = var0.src;
                    case 48:
                        if (!var1) {
                            _fun63919_ip = 77;
                            continue _fun63919
                        }
                    case 51:
                        var3 = _closure1_slot28;
                        var2 = var0.src;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var0.src = var1;
                    case 77:
                        var1 = global;
                        var3 = var1.Array;
                        var2 = var3.isArray;
                        var1 = var0.content;
                        var1 = var2.bind(var3)(var1);
                        if (!var1) {
                            _fun63919_ip = 131;
                            continue _fun63919
                        }
                    case 103:
                        var3 = var0.content;
                        var2 = var3.map;
                        var1 = _closure1_slot27;
                        var1 = var2.bind(var3)(var1);
                        var0.content = var1;
                    case 131:
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var6 = function arg0() {
                _fun63920: for (var _fun63920_ip = 0;;) switch (_fun63920_ip) {
                    case 0:
                        var7 = arg0;
                        var1 = /^http/;
                        var0 = var1.test;
                        var1 = var0.bind(var1)(var7);
                        var0 = var7;
                        if (var1) {
                            _fun63920_ip = 121;
                            continue _fun63920
                        }
                    case 33:
                        var1 = global;
                        var2 = var1.location;
                        var6 = var2.protocol;
                        var2 = var1.location;
                        var5 = var2.host;
                        var3 = var7.charAt;
                        var2 = 0;
                        var2 = var3.bind(var7)(var2);
                        var4 = '/';
                        if (!(var4 === var2)) {
                            _fun63920_ip = 84;
                            continue _fun63920
                        }
                    case 80:
                        var4 = '';
                    case 84:
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var13 = '';
                        var11 = '//';
                        var12 = var6;
                        var10 = var5;
                        var9 = var4;
                        var8 = var7;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                    case 121:
                        return var0;
                }
            };
            var _closure1_slot28 = var6;
            var5 = function arg0() {
                _fun63921: for (var _fun63921_ip = 0;;) switch (_fun63921_ip) {
                    case 0:
                        var2 = arguments[1];
                        var0 = undefined;
                        if (!(var2 === var0)) {
                            _fun63921_ip = 13;
                            continue _fun63921
                        }
                    case 9:
                        var2 = new Array(0);
                    case 13:
                        var1 = var2.indexOf;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = -1;
                        var0 = var1 > var0;
                        return var0;
                }
            };
            var _closure1_slot29 = var5;
            var4 = function arg0() {
                _fun63922: for (var _fun63922_ip = 0;;) switch (_fun63922_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 19;
                        var0 = var4[var0];
                        var5 = undefined;
                        var7 = var2.bind(var5)(var0);
                        var6 = var7.parseToAST;
                        var4 = var1.content;
                        var2 = {};
                        var0 = var1.channel_id;
                        var2.channelId = var0;
                        var0 = true;
                        var4 = var6.bind(var7)(var4, var0, var2);
                        var2 = var4.map;
                        var0 = _closure1_slot27;
                        var8 = var2.bind(var4)(var0);
                        var4 = _closure1_slot8;
                        var2 = var4.getChannel;
                        var0 = var1.channel_id;
                        var9 = var2.bind(var4)(var0);
                        var0 = var1.author;
                        var2 = null;
                        var0 = var2 != var0;
                        var4 = undefined;
                        if (!var0) {
                            _fun63922_ip = 139;
                            continue _fun63922
                        }
                    case 109:
                        var7 = _closure1_slot7;
                        var13 = var1.author;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var14 = var6;
                        var0 = new var14[var7](var13, var12);
                        var4 = var0 instanceof Object ? var0 : var6;
                    case 139:
                        var0 = var1.author;
                        var0 = var2 != var0;
                        var7 = undefined;
                        if (!var0) {
                            _fun63922_ip = 186;
                            continue _fun63922
                        }
                    case 154:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var0 = 20;
                        var0 = var10[var0];
                        var6 = var6.bind(var5)(var0);
                        var0 = var6.getUserAuthor;
                        var7 = var0.bind(var6)(var4, var9);
                    case 186:
                        var0 = {};
                        var6 = var1.id;
                        var0.id = var6;
                        var6 = var1.blocked;
                        var0.blocked = var6;
                        var6 = var1.bot;
                        var0.bot = var6;
                        var6 = var1.content;
                        var0.content = var6;
                        var9 = var8.length;
                        var6 = undefined;
                        if (!var9) {
                            _fun63922_ip = 241;
                            continue _fun63922
                        }
                    case 238:
                        var6 = var8;
                    case 241:
                        var0.content_parsed = var6;
                        var8 = var2 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun63922_ip = 263;
                            continue _fun63922
                        }
                    case 257:
                        var6 = var7.nick;
                    case 263:
                        var0.nick = var6;
                        var8 = var2 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun63922_ip = 283;
                            continue _fun63922
                        }
                    case 277:
                        var6 = var7.colorString;
                    case 283:
                        var0.author_color = var6;
                        var6 = var1.edited_timestamp;
                        if (var6) {
                            _fun63922_ip = 305;
                            continue _fun63922
                        }
                    case 299:
                        var6 = var1.editedTimestamp;
                    case 305:
                        var0.edited_timestamp = var6;
                        var6 = var1.timestamp;
                        var0.timestamp = var6;
                        var6 = var1.tts;
                        var0.tts = var6;
                        var6 = var1.mentions;
                        var0.mentions = var6;
                        var6 = var1.mention_everyone;
                        if (var6) {
                            _fun63922_ip = 358;
                            continue _fun63922
                        }
                    case 352:
                        var6 = var1.mentionEveryone;
                    case 358:
                        var0.mention_everyone = var6;
                        var6 = var1.mention_roles;
                        if (var6) {
                            _fun63922_ip = 378;
                            continue _fun63922
                        }
                    case 372:
                        var6 = var1.mentionRoles;
                    case 378:
                        var0.mention_roles = var6;
                        var6 = var1.embeds;
                        var0.embeds = var6;
                        var6 = var1.attachments;
                        var0.attachments = var6;
                        var6 = var2 != var4;
                        var2 = undefined;
                        if (!var6) {
                            _fun63922_ip = 439;
                            continue _fun63922
                        }
                    case 414:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 21;
                        var3 = var7[var3];
                        var3 = var6.bind(var5)(var3);
                        var2 = var3.bind(var5)(var4);
                    case 439:
                        var0.author = var2;
                        var2 = var1.pinned;
                        var0.pinned = var2;
                        var1 = var1.type;
                        var0.type = var1;
                        return var0;
                }
            };
            var _closure1_slot30 = var4;
            var3 = function arg0, arg1, arg2() {
                _fun63923: for (var _fun63923_ip = 0;;) switch (_fun63923_ip) {
                    case 0:
                        var0 = arg2;
                        var11 = var0.mute;
                        var10 = var0.deaf;
                        var9 = var0.selfMute;
                        var8 = var0.selfDeaf;
                        var7 = var0.suppress;
                        var3 = var0.userId;
                        var2 = _closure1_slot13;
                        var0 = var2.getUser;
                        var4 = var0.bind(var2)(var3);
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun63923_ip = 247;
                            continue _fun63923
                        }
                    case 65:
                        var0 = {};
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 22;
                        var12 = var6[var2];
                        var2 = undefined;
                        var15 = var5.bind(var2)(var12);
                        var14 = var15.getName;
                        var13 = arg0;
                        var12 = arg1;
                        var12 = var14.bind(var15)(var13, var12, var4);
                        var0.nick = var12;
                        var14 = _closure1_slot10;
                        var13 = var14.isLocalMute;
                        var12 = var4.id;
                        var12 = var13.bind(var14)(var12);
                        var0.mute = var12;
                        var14 = _closure1_slot10;
                        var13 = var14.getLocalVolume;
                        var12 = var4.id;
                        var12 = var13.bind(var14)(var12);
                        var0.volume = var12;
                        var13 = _closure1_slot10;
                        var12 = var13.getLocalPan;
                        var1 = var4.id;
                        var1 = var12.bind(var13)(var1);
                        var0.pan = var1;
                        var1 = {};
                        var1.mute = var11;
                        var1.deaf = var10;
                        var1.self_mute = var9;
                        var1.self_deaf = var8;
                        var1.suppress = var7;
                        var0.voice_state = var1;
                        var1 = 21;
                        var1 = var6[var1];
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.bind(var2)(var4);
                        var0.user = var1;
                        return var0;
                    case 247:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = 'Invalid user id: ';
                        var18 = var1.bind(var0)(var3);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var19 = var1;
                        var0 = new var19[var2](var18, var17);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot31 = var3;
            var0 = function arg0() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'retries': 3,
                    'rejectWithError': true
                };
                var6 = _closure1_slot19;
                var5 = var6.APPLICATION_RPC;
                var4 = arg0;
                var4 = var5.bind(var6)(var4);
                var1.url = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.body;
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot21;
                    var0 = var0.INVALID_CLIENTID;
                    var2.closeCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'Invalid Client ID';
                    var6 = var1;
                    var5 = var2;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot32 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0, arg1, arg2) { // Environment: var2
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun63929: for (var _fun63929_ip = 0;;) switch (_fun63929_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arg0;
                                var9 = arg1;
                                var8 = arg2;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun63929_ip = 439;
                                    continue _fun63929
                                }
                            case 19:
                                var3 = _closure1_slot4;
                                var2 = var3.getApplication;
                                var6 = var2.bind(var3)(var9);
                                var4 = 'string';
                                var2 = typeof var8;
                                var3 = var6;
                                if (!(var4 === var2)) {
                                    _fun63929_ip = 266;
                                    continue _fun63929
                                }
                            case 54:
                                var4 = var5.transport;
                                var2 = _closure1_slot16;
                                var2 = var2.POST_MESSAGE;
                                if (!(var4 !== var2)) {
                                    _fun63929_ip = 206;
                                    continue _fun63929
                                }
                            case 77:
                                var2 = _closure1_slot32;
                                var10 = undefined;
                                var2 = var2.bind(var10)(var9);
                                SaveGenerator(address = 92);
                            case 90:
                                return var2;
                            case 92:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun63929_ip = 203;
                                    continue _fun63929
                                }
                            case 98:
                                var7 = _closure1_slot5;
                                var4 = var7.createFromServer;
                                var3 = var4.bind(var7)(var2);
                                var11 = _closure1_slot29;
                                var4 = var2.rpc_origins;
                                var4 = var11.bind(var10)(var8, var4);
                                if (var4) {
                                    _fun63929_ip = 266;
                                    continue _fun63929
                                }
                            case 135:
                                var7 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var4 = 26;
                                var4 = var11[var4];
                                var11 = var7.bind(var10)(var4);
                                var10 = {};
                                var4 = _closure1_slot21;
                                var4 = var4.INVALID_ORIGIN;
                                var10.closeCode = var4;
                                var4 = var11.prototype;
                                var7 = Object.create(var4, {
                                    constructor: {
                                        value: var11
                                    }
                                });
                                var12 = 'Invalid Origin';
                                var14 = var7;
                                var13 = var10;
                                var4 = new var14[var11](var13, var12, var11);
                                var4 = var4 instanceof Object ? var4 : var7;
                                throw var4;
                            case 203:
                                return var2;
                            case 206:
                                var7 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 27;
                                var2 = var4[var2];
                                var4 = undefined;
                                var2 = var7.bind(var4)(var2);
                                var10 = var2.bind(var4)(var9);
                                var2 = null;
                                if (!(var2 != var10)) {
                                    _fun63929_ip = 371;
                                    continue _fun63929
                                }
                            case 242:
                                var7 = _closure1_slot29;
                                var2 = new Array(1);
                                var2[0] = var10;
                                var2 = var7.bind(var4)(var8, var2);
                                var3 = var6;
                                if (!var2) {
                                    _fun63929_ip = 371;
                                    continue _fun63929
                                }
                            case 266:
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun63929_ip = 308;
                                    continue _fun63929
                                }
                            case 272:
                                var7 = _closure1_slot5;
                                var6 = var7.createFromServer;
                                var8 = _closure1_slot32;
                                var2 = undefined;
                                var2 = var8.bind(var2)(var9);
                                SaveGenerator(address = 297);
                            case 295:
                                return var2;
                            case 297:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun63929_ip = 368;
                                    continue _fun63929
                                }
                            case 303:
                                var3 = var6.bind(var7)(var2);
                            case 308:
                                var10 = var3.id;
                                var9 = var3.name;
                                var8 = var3.icon;
                                var7 = var3.coverImage;
                                var6 = var3.flags;
                                var3 = {};
                                var3.id = var10;
                                var3.name = var9;
                                var3.icon = var8;
                                var3.coverImage = var7;
                                var3.flags = var6;
                                var5.application = var3;
                                var3 = undefined;
                                return var3;
                            case 368:
                                return var2;
                            case 371:
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 26;
                                var2 = var5[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = {};
                                var1 = _closure1_slot21;
                                var1 = var1.INVALID_ORIGIN;
                                var3.closeCode = var1;
                                var1 = var4.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var12 = 'Invalid Origin';
                                var14 = var2;
                                var13 = var3;
                                var1 = new var14[var4](var13, var12, var11);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 439:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot33 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot33 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0, arg1, arg2) { // Environment: var2
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun63932: for (var _fun63932_ip = 0;;) switch (_fun63932_ip) {
                            case 0:
                                StartGenerator();
                                var7 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun63932_ip = 212;
                                    continue _fun63932
                                }
                            case 13:
                                var2 = arg2;
                                var4 = undefined;
                                var3 = undefined;
                                var5 = _closure1_slot26;
                                var6 = var5[var7];
                                var3 = var6;
                                var5 = null;
                                if (!(var5 != var6)) {
                                    _fun63932_ip = 42;
                                    continue _fun63932
                                }
                            case 40:
                                _fun63932_ip = 112;
                                continue _fun63932;
                            case 42:
                                var9 = 60;
                                var5 = arg1;
                                if (!var5) {
                                    _fun63932_ip = 54;
                                    continue _fun63932
                                }
                            case 51:
                                var9 = 2;
                            case 54:
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 28;
                                var5 = var8[var5];
                                var8 = var6.bind(var4)(var5);
                                var10 = _closure1_slot25;
                                var6 = var8.prototype;
                                var6 = Object.create(var6, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var12 = var6;
                                var11 = var9;
                                var5 = new var12[var8](var11, var10, var9);
                                var6 = var5 instanceof Object ? var5 : var6;
                                var3 = var6;
                                var5 = _closure1_slot26;
                                var5[var7] = var6;
                            case 112: // try_start_0
                                var5 = var3;
                                var3 = var5.process;
                                var2 = var3.bind(var5)(var2);
                                SaveGenerator(address = 130);
                            case 128:
                                return var2;
                            case 130:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun63932_ip = 139;
                                    continue _fun63932
                                }
                            case 136: // try_end0
                                return var4;
                            case 139:
                                return var2;
                            case 142: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 26;
                                var2 = var5[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = {};
                                var1 = _closure1_slot21;
                                var1 = var1.CLOSE_ABNORMAL;
                                var3.closeCode = var1;
                                var1 = var4.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var10 = 'Socket closed during throttle';
                                var12 = var2;
                                var11 = var3;
                                var1 = new var12[var4](var11, var10, var9);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 212:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot34 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot34 = var0;
            var7 = global;
            var13 = var7.Object;
            var9 = var13.defineProperty;
            var8 = {};
            var0 = true;
            var8.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var13)(var2, var0, var8);
            var14 = 0;
            var8 = var12[var14];
            var0 = undefined;
            var8 = var10.bind(var0)(var8);
            var _closure1_slot3 = var8;
            var8 = 1;
            var9 = var12[var8];
            var9 = var10.bind(var0)(var9);
            var _closure1_slot4 = var9;
            var9 = 2;
            var13 = var12[var9];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot5 = var13;
            var13 = 3;
            var13 = var12[var13];
            var13 = var11.bind(var0)(var13);
            var13 = var13.GUILD_VOCAL_CHANNEL_TYPES;
            var _closure1_slot6 = var13;
            var13 = 4;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot7 = var13;
            var13 = 5;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot8 = var13;
            var13 = 6;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot9 = var13;
            var13 = 7;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot10 = var13;
            var13 = 8;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot11 = var13;
            var13 = 9;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot12 = var13;
            var13 = 10;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot13 = var13;
            var13 = 11;
            var13 = var12[var13];
            var13 = var10.bind(var0)(var13);
            var _closure1_slot14 = var13;
            var13 = 12;
            var13 = var12[var13];
            var13 = var11.bind(var0)(var13);
            var15 = var13.RPC_LOCAL_SCOPE;
            var _closure1_slot15 = var15;
            var13 = var13.TransportTypes;
            var _closure1_slot16 = var13;
            var13 = 13;
            var13 = var12[var13];
            var13 = var11.bind(var0)(var13);
            var15 = var13.ActivityActionTypes;
            var _closure1_slot17 = var15;
            var15 = var13.ChannelTypes;
            var _closure1_slot18 = var15;
            var15 = var13.Endpoints;
            var _closure1_slot19 = var15;
            var15 = var13.MAX_MESSAGES_PER_CHANNEL;
            var _closure1_slot20 = var15;
            var15 = var13.RPCCloseCodes;
            var _closure1_slot21 = var15;
            var15 = var13.RPCErrors;
            var _closure1_slot22 = var15;
            var13 = var13.RTCConnectionStates;
            var _closure1_slot23 = var13;
            var13 = 14;
            var13 = var12[var13];
            var16 = var10.bind(var0)(var13);
            var15 = var16.toURLSafe;
            var13 = var7.window;
            var13 = var13.GLOBAL_ENV;
            var13 = var13.API_ENDPOINT;
            var16 = var15.bind(var16)(var13);
            var15 = null;
            var17 = var15 == var16;
            var13 = undefined;
            if (var17) {
                _fun63918_ip = 501;
                continue _fun63918
            }
        case 495:
            var13 = var16.host;
        case 501:
            var15 = var15 != var13;
            var16 = 'localhost';
            if (!var15) {
                _fun63918_ip = 517;
                continue _fun63918
            }
        case 514:
            var16 = var13;
        case 517:
            var15 = var16.split;
            var13 = ':';
            var13 = var15.bind(var16)(var13);
            var13 = var13[var14];
            var14 = var13.includes;
            var17 = '.';
            var14 = var14.bind(var13)(var17);
            var16 = var13;
            if (!var14) {
                _fun63918_ip = 634;
                continue _fun63918
            }
        case 555:
            var14 = var13.split;
            var18 = var14.bind(var13)(var17);
            var14 = var18.length;
            var14 = var14 - var8;
            var19 = var18[var14];
            var15 = /^\d+$/;
            var14 = var15.test;
            var14 = var14.bind(var15)(var19);
            if (var14) {
                _fun63918_ip = 631;
                continue _fun63918
            }
        case 605:
            var15 = var18.slice;
            var14 = -2;
            var15 = var15.bind(var18)(var14);
            var14 = var15.join;
            var13 = var14.bind(var15)(var17);
        case 631:
            var16 = var13;
        case 634:
            var14 = var7.RegExp;
            var13 = 15;
            var15 = var12[var13];
            var18 = var10.bind(var0)(var15);
            var17 = var18.escape;
            var15 = 'https://';
            var18 = var17.bind(var18)(var15);
            var13 = var12[var13];
            var15 = var10.bind(var0)(var13);
            var13 = var15.escape;
            var21 = var13.bind(var15)(var16);
            var7 = var7.HermesInternal;
            var16 = var7.concat;
            var24 = '^';
            var22 = '(?:[a-z]+\\.)?(';
            var20 = '|discordapp.com|discord.com)$';
            var23 = var18;
            var23 = var24[var16](var23, var22, var21, var20, var19);
            var13 = var14.prototype;
            var13 = Object.create(var13, {
                constructor: {
                    value: var14
                }
            });
            var24 = var13;
            var7 = new var24[var14](var23, var22);
            var7 = var7 instanceof Object ? var7 : var13;
            var _closure1_slot24 = var7;
            var7 = 16;
            var7 = var12[var7];
            var7 = var10.bind(var0)(var7);
            var7 = var7.Millis;
            var7 = var7.MINUTE;
            var8 = var8 * var7;
            var _closure1_slot25 = var8;
            var7 = {};
            var _closure1_slot26 = var7;
            var10 = 29;
            var10 = var12[var10];
            var12 = var11.bind(var0)(var10);
            var11 = var12.fileFinishedImporting;
            var10 = 'modules/rpc/RPCHelpers.tsx';
            var10 = var11.bind(var12)(var10);
            var2.VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = var9;
            var9 = 60;
            var2.VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = var9;
            var2.VALIDATE_SOCKET_PERIOD_MS = var8;
            var2.VALIDATE_SOCKET_THROTTLERS = var7;
            var2.getRemoteIconURL = var6;
            var6 = function arg0, arg1() {
                var3 = arg0;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 17;
                var1 = var6[var0];
                var4 = undefined;
                var2 = var5.bind(var4)(var1);
                var1 = var2.isEqual;
                var0 = var6[var0];
                var6 = var5.bind(var4)(var0);
                var5 = var6.pick;
                var0 = global;
                var4 = var0.Object;
                var0 = var4.keys;
                var4 = var0.bind(var4)(var3);
                var0 = arg1;
                var0 = var5.bind(var6)(var0, var4);
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var2.containsSameValues = var6;
            var2.validateOrigin = var5;
            var5 = function arg0, arg1() {
                _fun63934: for (var _fun63934_ip = 0;;) switch (_fun63934_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var2 = arg1;
                        var _closure2_slot1 = var2;
                        var3 = new Array(0);
                        var2 = var1.getGuildId;
                        var2 = var2.bind(var1)();
                        var _closure2_slot2 = var2;
                        var4 = _closure1_slot18;
                        var5 = var4.GUILD_CATEGORY;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = _closure1_slot6;
                        var6 = 1;
                        var8 = var4;
                        var2 = arraySpread(var8, var7, var6);
                        var2 = var4.includes;
                        var1 = var1.type;
                        var1 = var2.bind(var4)(var1);
                        if (var1) {
                            _fun63934_ip = 130;
                            continue _fun63934
                        }
                    case 87:
                        var2 = var3.push;
                        var1 = global;
                        var5 = var1.Promise;
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure1_slot11;
                            var2 = var3.whenReady;
                            var5 = _closure2_slot0;
                            var1 = var5.id;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchMessages;
                            var1 = {};
                            var5 = var5.id;
                            var1.channelId = var5;
                            var4 = _closure1_slot20;
                            var1.limit = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var9 = var4;
                        var1 = new var9[var5](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var1 = var2.bind(var3)(var1);
                    case 130:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.all;
                        var2 = var1.bind(var2)(var3);
                        var1 = var2.then;
                        var0 = function() { // Environment: var0
                            _fun63937: for (var _fun63937_ip = 0;;) switch (_fun63937_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = var1.isNSFW;
                                    var0 = var0.bind(var1)();
                                    if (!var0) {
                                        _fun63937_ip = 59;
                                        continue _fun63937
                                    }
                                case 20:
                                    var1 = _closure1_slot13;
                                    var0 = var1.getCurrentUser;
                                    var0 = var0.bind(var1)();
                                    var1 = null;
                                    var2 = var1 == var0;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun63937_ip = 53;
                                        continue _fun63937
                                    }
                                case 47:
                                    var1 = var0.nsfwAllowed;
                                case 53:
                                    var0 = true;
                                    if (!(var0 === var1)) {
                                        _fun63937_ip = 66;
                                        continue _fun63937
                                    }
                                case 59:
                                    var0 = _closure2_slot1;
                                    if (var0) {
                                        _fun63937_ip = 72;
                                        continue _fun63937
                                    }
                                case 66:
                                    var2 = new Array(0);
                                    _fun63937_ip = 123;
                                    continue _fun63937;
                                case 72:
                                    var5 = _closure1_slot11;
                                    var3 = var5.getMessages;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var3 = var3.bind(var5)(var1);
                                    var1 = var3.toArray;
                                    var3 = var1.bind(var3)();
                                    var1 = var3.map;
                                    var0 = _closure1_slot30;
                                    var2 = var1.bind(var3)(var0);
                                case 123:
                                    var0 = global;
                                    var5 = var0.Object;
                                    var1 = var5.values;
                                    var7 = _closure1_slot14;
                                    var6 = var7.getVoiceStatesForChannel;
                                    var3 = _closure2_slot0;
                                    var0 = var3.id;
                                    var0 = var6.bind(var7)(var0);
                                    var5 = var1.bind(var5)(var0);
                                    var1 = var5.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var4 = _closure1_slot31;
                                        var3 = _closure2_slot2;
                                        var0 = _closure2_slot0;
                                        var2 = var0.id;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var4.bind(var1)(var3, var2, var0);
                                        return var0;
                                    };
                                    var1 = var1.bind(var5)(var0);
                                    var0 = {};
                                    var5 = var3.id;
                                    var0.id = var5;
                                    var5 = var3.name;
                                    var0.name = var5;
                                    var5 = var3.type;
                                    var0.type = var5;
                                    var5 = var3.topic;
                                    var0.topic = var5;
                                    var5 = var3.bitrate;
                                    var0.bitrate = var5;
                                    var5 = var3.userLimit;
                                    var0.user_limit = var5;
                                    var4 = _closure2_slot2;
                                    var0.guild_id = var4;
                                    var3 = var3.position;
                                    var0.position = var3;
                                    var0.messages = var2;
                                    var0.voice_states = var1;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.transformChannel = var5;
            var2.transformInternalTextMessage = var4;
            var2.transformVoiceState = var3;
            var3 = function arg0, arg1() {
                var2 = arg1;
                var0 = {};
                var1 = arg0;
                var0.type = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)(var2);
                var0.user = var1;
                var1 = {};
                var5 = _closure1_slot12;
                var4 = var5.getStatus;
                var3 = var2.id;
                var2 = null;
                var3 = var4.bind(var5)(var3, var2);
                var1.status = var3;
                var1.activity = var2;
                var0.presence = var1;
                return var0;
            };
            var2.transformBaseRelationship = var3;
            var3 = function arg0, arg1() {
                _fun63940: for (var _fun63940_ip = 0;;) switch (_fun63940_ip) {
                    case 0:
                        var2 = arg0;
                        var7 = arg1;
                        var4 = null;
                        var0 = var2;
                        if (!(var4 != var7)) {
                            _fun63940_ip = 104;
                            continue _fun63940
                        }
                    case 15:
                        var1 = {};
                        var9 = var1;
                        var8 = var2;
                        var3 = copyDataProperties(var9, var8);
                        var3 = {};
                        var8 = var2.presence;
                        var9 = var3;
                        var5 = copyDataProperties(var9, var8);
                        var6 = _closure1_slot12;
                        var5 = var6.getApplicationActivity;
                        var2 = var2.user;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2, var7);
                        var5 = var4 != var2;
                        var4 = null;
                        if (!var5) {
                            _fun63940_ip = 83;
                            continue _fun63940
                        }
                    case 80:
                        var4 = var2;
                    case 83:
                        var2 = 'activity';
                        var3[var2] = var4;
                        var2 = 'presence';
                        var1[var2] = var3;
                        var0 = var1;
                    case 104:
                        return var0;
                }
            };
            var2.transformApplicationRelationship = var3;
            var3 = function arg0() {
                _fun63941: for (var _fun63941_ip = 0;;) switch (_fun63941_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0;
                        var8 = undefined;
                        var2 = undefined;
                        var3 = undefined;
                        var6 = null;
                        if (!(var6 != var0)) {
                            _fun63941_ip = 233;
                            continue _fun63941
                        }
                    case 21:
                        var7 = global;
                        var0 = var7.window;
                        var0 = var0.location;
                        var1 = var0.origin;
                        var3 = var1;
                        var0 = var5;
                        if (!(var0 !== var1)) {
                            _fun63941_ip = 229;
                            continue _fun63941
                        }
                    case 53: // try_start_0
                        var1 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 23;
                        var0 = var9[var0];
                        var8 = var1.bind(var8)(var0);
                        var1 = var8.parse;
                        var0 = var5;
                        var0 = var1.bind(var8)(var0);
                        var2 = var0.hostname;
                    case 96: // try_end0
                        var7 = var7.window;
                        var7 = var7.location;
                        var8 = var7.hostname;
                        var7 = var2;
                        var7 = var8 === var7;
                        var1 = var7;
                        if (!var7) {
                            _fun63941_ip = 139;
                            continue _fun63941
                        }
                    case 126:
                        var7 = var2;
                        var2 = 'localhost';
                        var1 = var2 === var7;
                    case 139:
                        var0 = var1;
                        if (var1) {
                            _fun63941_ip = 221;
                            continue _fun63941
                        }
                    case 145:
                        var8 = var5;
                        var7 = var8.match;
                        var2 = 'staging';
                        var2 = var7.bind(var8)(var2);
                        var2 = var6 == var2;
                        var1 = var2;
                        if (!var2) {
                            _fun63941_ip = 218;
                            continue _fun63941
                        }
                    case 175:
                        var7 = _closure1_slot24;
                        var6 = var7.test;
                        var5 = var6.bind(var7)(var5);
                        var5 = !var5;
                        var2 = var5;
                        if (var5) {
                            _fun63941_ip = 215;
                            continue _fun63941
                        }
                    case 198:
                        var5 = _closure1_slot24;
                        var4 = var5.test;
                        var3 = var4.bind(var5)(var3);
                        var2 = !var3;
                    case 215:
                        var1 = !var2;
                    case 218:
                        var0 = var1;
                    case 221:
                        return var0;
                    case 223: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                    case 229:
                        var0 = true;
                        return var0;
                    case 233:
                        var0 = false;
                        return var0;
                }
            };
            var2.isMatchingOrigin = var3;
            var3 = function arg0, arg1, arg2() {
                _fun63942: for (var _fun63942_ip = 0;;) switch (_fun63942_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg2;
                        var5 = _closure1_slot9;
                        var2 = var5.getGuild;
                        var0 = var4.getGuildId;
                        var0 = var0.bind(var4)();
                        var0 = var2.bind(var5)(var0);
                        var2 = null;
                        if (!(var2 == var0)) {
                            _fun63942_ip = 51;
                            continue _fun63942
                        }
                    case 39:
                        var2 = var4.getApplicationId;
                        var2 = var2.bind(var4)();
                        _fun63942_ip = 57;
                        continue _fun63942;
                    case 51:
                        var2 = var0.application_id;
                    case 57:
                        var0 = arg1;
                        var0 = var2 === var0;
                        if (var0) {
                            _fun63942_ip = 122;
                            continue _fun63942
                        }
                    case 67:
                        var2 = var3.indexOf;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 24;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.OAuth2Scopes;
                        var1 = var1.MESSAGES_READ;
                        var2 = var2.bind(var3)(var1);
                        var1 = -1;
                        var0 = var2 > var1;
                    case 122:
                        return var0;
                }
            };
            var2.hasMessageReadPermission = var3;
            var3 = function arg0() {
                _fun63943: for (var _fun63943_ip = 0;;) switch (_fun63943_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot23;
                        var1 = var1.RTC_CONNECTED;
                        if (!(var1 !== var3)) {
                            _fun63943_ip = 50;
                            continue _fun63943
                        }
                    case 20:
                        var1 = _closure1_slot23;
                        var1 = var1.RTC_CONNECTING;
                        if (!(var1 !== var3)) {
                            _fun63943_ip = 50;
                            continue _fun63943
                        }
                    case 34:
                        var0 = _closure1_slot23;
                        var0 = var0.RTC_DISCONNECTED;
                        if (!(var0 !== var3)) {
                            _fun63943_ip = 50;
                            continue _fun63943
                        }
                    case 48:
                        return var3;
                    case 50:
                        var2 = var3.replace;
                        var1 = /^RTC_/;
                        var0 = 'VOICE_';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.getVoiceConnectionState = var3;
            var3 = function arg0, arg1, arg2() {
                _fun63944: for (var _fun63944_ip = 0;;) switch (_fun63944_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = _closure1_slot17;
                        var1 = var0.JOIN;
                        var0 = arg0;
                        var0 = var0 === var1;
                        if (!var0) {
                            _fun63944_ip = 62;
                            continue _fun63944
                        }
                    case 26:
                        var3 = null;
                        var1 = var3 != var2;
                        if (!var1) {
                            _fun63944_ip = 44;
                            continue _fun63944
                        }
                    case 35:
                        var2 = var2.id;
                        var1 = var3 != var2;
                    case 44:
                        if (!var1) {
                            _fun63944_ip = 59;
                            continue _fun63944
                        }
                    case 47:
                        var2 = arg2;
                        var2 = var2.join;
                        var1 = var3 != var2;
                    case 59:
                        var0 = var1;
                    case 62:
                        return var0;
                }
            };
            var2.validateActivityInvite = var3;
            var3 = function() {
                var0 = undefined;
                var3 = _closure1_slot33;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.validateSocketApplication = var3;
            var3 = function() {
                var0 = undefined;
                var3 = _closure1_slot34;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.processSocketThrottlers = var3;
            var3 = function arg0, arg1() {
                _fun63947: for (var _fun63947_ip = 0;;) switch (_fun63947_ip) {
                    case 0:
                        var1 = null;
                        var0 = arg1;
                        if (!(var1 == var0)) {
                            _fun63947_ip = 39;
                            continue _fun63947
                        }
                    case 9:
                        var0 = arg0;
                        var1 = var0.authorization;
                        var2 = _closure1_slot15;
                        var0 = new Array(1);
                        var0[0] = var2;
                        var1.scopes = var0;
                    case 39:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.validateOriginAndUpdateSocket = var3;
            var3 = function arg0() {
                var1 = _closure1_slot10;
                var0 = var1.getSettings;
                var1 = var0.bind(var1)();
                var6 = function arg0() {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.sort;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.index;
                        var0 = arg1;
                        var0 = var0.index;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.id;
                        var0.id = var2;
                        var1 = var1.name;
                        var0.name = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = arg0;
                var5 = undefined;
                var3 = var0.bind(var5)(var1);
                var0 = {};
                var2 = {};
                var8 = _closure1_slot10;
                var7 = var8.getInputDevices;
                var7 = var7.bind(var8)();
                var7 = var6.bind(var5)(var7);
                var2.available_devices = var7;
                var7 = var1.inputDeviceId;
                var2.device_id = var7;
                var7 = var1.inputVolume;
                var2.volume = var7;
                var0.input = var2;
                var2 = {};
                var7 = _closure1_slot10;
                var4 = var7.getOutputDevices;
                var4 = var4.bind(var7)();
                var4 = var6.bind(var5)(var4);
                var2.available_devices = var4;
                var4 = var1.outputDeviceId;
                var2.device_id = var4;
                var4 = var1.outputVolume;
                var2.volume = var4;
                var0.output = var2;
                var2 = {};
                var4 = var1.mode;
                var2.type = var4;
                var4 = var1.modeOptions;
                var4 = var4.autoThreshold;
                var2.auto_threshold = var4;
                var4 = var1.modeOptions;
                var4 = var4.threshold;
                var2.threshold = var4;
                var2.shortcut = var3;
                var3 = var1.modeOptions;
                var3 = var3.delay;
                var2.delay = var3;
                var0.mode = var2;
                var2 = var1.automaticGainControl;
                var0.automatic_gain_control = var2;
                var2 = var1.echoCancellation;
                var0.echo_cancellation = var2;
                var2 = var1.noiseSuppression;
                var0.noise_suppression = var2;
                var2 = var1.qos;
                var0.qos = var2;
                var2 = var1.silenceWarning;
                var0.silence_warning = var2;
                var2 = var1.deaf;
                var0.deaf = var2;
                var1 = var1.mute;
                var0.mute = var1;
                return var0;
            };
            var2.getDeprecatedVoiceSettingsWithShortcut = var3;
            var3 = function arg0, arg1() {
                var2 = _closure1_slot10;
                var1 = var2.getSettings;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var2 = arg1;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var0 = {};
                var2 = {};
                var4 = var1.mode;
                var2.type = var4;
                var2.shortcut = var3;
                var0.input_mode = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = var1.localMutes;
                var2 = var3.bind(var4)(var2);
                var0.local_mutes = var2;
                var2 = var1.localVolumes;
                var0.local_volumes = var2;
                var2 = var1.mute;
                var0.self_mute = var2;
                var1 = var1.deaf;
                var0.self_deaf = var1;
                return var0;
            };
            var2.getVoiceSettingsWithShortcut = var3;
            var3 = function arg0() {
                _fun63953: for (var _fun63953_ip = 0;;) switch (_fun63953_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure1_slot16;
                        var1 = var1.POST_MESSAGE;
                        if (!(var5 === var1)) {
                            _fun63953_ip = 24;
                            continue _fun63953
                        }
                    case 20:
                        var1 = undefined;
                        return var1;
                    case 24:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var0 = _closure1_slot22;
                        var0 = var0.INVALID_COMMAND;
                        var2.errorCode = var0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var1 = 'command not available from "';
                        var0 = ' transport';
                        var6 = var4.bind(var1)(var5, var0);
                        var1 = var3.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = var1;
                        var7 = var2;
                        var0 = new var8[var3](var7, var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.validatePostMessageTransport = var3;
            var1 = function arg0() {
                _fun63954: for (var _fun63954_ip = 0;;) switch (_fun63954_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.id;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun63954_ip = 21;
                            continue _fun63954
                        }
                    case 14:
                        var0 = var0.id;
                        return var0;
                    case 21:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var0 = _closure1_slot22;
                        var0 = var0.INVALID_COMMAND;
                        var2.errorCode = var0;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'Invalid application';
                        var6 = var1;
                        var5 = var2;
                        var0 = new var6[var3](var5, var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.validateApplication = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3454, 3455, 1376, 1628, 1372, 1410, 3476, 4249, 3610, 1621, 3521, 3356, 660, 1457, 3326, 667, 22, 6546, 4783, 3982, 7955, 3960, 1459, 3339, 507, 7949, 7940, 7956, 2]);