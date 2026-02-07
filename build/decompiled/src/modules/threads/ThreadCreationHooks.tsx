// modules/threads/ThreadCreationHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function arg0, arg1() {
        _fun61944: for (var _fun61944_ip = 0;;) switch (_fun61944_ip) {
            case 0:
                var0 = _closure1_slot19;
                var1 = var0.PrivateOnly;
                var0 = arg1;
                var0 = var0 === var1;
                if (var0) {
                    _fun61944_ip = 47;
                    continue _fun61944
                }
            case 23:
                var1 = arg0;
                var2 = var1.isPrivate;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun61944_ip = 44;
                    continue _fun61944
                }
            case 41:
                var1 = var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var0 = function arg0, arg1() {
        _fun61945: for (var _fun61945_ip = 0;;) switch (_fun61945_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = var4.length;
                var0 = var4;
                if (!(var1 > var3)) {
                    _fun61945_ip = 42;
                    continue _fun61945
                }
            case 18:
                var2 = var4.substring;
                var1 = 0;
                var2 = var2.bind(var4)(var1, var3);
                var1 = '...';
                var0 = var2 + var1;
            case 42:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var3 = function arg0, arg1() {
        _fun61946: for (var _fun61946_ip = 0;;) switch (_fun61946_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var7 = null;
                var0 = var7 == var4;
                var5 = null;
                if (var0) {
                    _fun61946_ip = 41;
                    continue _fun61946
                }
            case 17:
                var3 = _closure1_slot9;
                var2 = var3.getMessage;
                var0 = var1.id;
                var5 = var2.bind(var3)(var0, var4);
            case 41:
                var2 = var7 == var5;
                var3 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun61946_ip = 88;
                    continue _fun61946
                }
            case 52:
                var4 = var5.embeds;
                var2 = var7 == var4;
                var0 = undefined;
                if (var2) {
                    _fun61946_ip = 88;
                    continue _fun61946
                }
            case 67:
                var2 = 0;
                var2 = var4[var2];
                var4 = var7 == var2;
                var0 = undefined;
                if (var4) {
                    _fun61946_ip = 88;
                    continue _fun61946
                }
            case 82:
                var0 = var2.rawTitle;
            case 88:
                var4 = var7 != var0;
                var9 = '';
                var2 = var9;
                if (!var4) {
                    _fun61946_ip = 105;
                    continue _fun61946
                }
            case 102:
                var2 = var0;
            case 105:
                var4 = var7 == var5;
                var0 = undefined;
                if (var4) {
                    _fun61946_ip = 149;
                    continue _fun61946
                }
            case 114:
                var4 = var5.poll;
                var6 = var7 == var4;
                var0 = undefined;
                if (var6) {
                    _fun61946_ip = 149;
                    continue _fun61946
                }
            case 129:
                var4 = var4.question;
                var6 = var7 == var4;
                var0 = undefined;
                if (var6) {
                    _fun61946_ip = 149;
                    continue _fun61946
                }
            case 144:
                var0 = var4.text;
            case 149:
                var6 = var7 != var0;
                var4 = var9;
                if (!var6) {
                    _fun61946_ip = 162;
                    continue _fun61946
                }
            case 159:
                var4 = var0;
            case 162:
                if (!(var9 === var2)) {
                    _fun61946_ip = 537;
                    continue _fun61946
                }
            case 169:
                if (!(var9 === var4)) {
                    _fun61946_ip = 519;
                    continue _fun61946
                }
            case 176:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 12;
                var6 = var10[var6];
                var10 = var8.bind(var3)(var6);
                var6 = var10.unparse;
                var11 = var7 == var5;
                var8 = undefined;
                if (var11) {
                    _fun61946_ip = 219;
                    continue _fun61946
                }
            case 214:
                var8 = var5.content;
            case 219:
                var11 = var7 != var8;
                var5 = var9;
                if (!var11) {
                    _fun61946_ip = 232;
                    continue _fun61946
                }
            case 229:
                var5 = var8;
            case 232:
                var1 = var1.id;
                var8 = true;
                var10 = var6.bind(var10)(var5, var1, var8);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var10.split;
                var1 = '\n';
                var5 = var5.bind(var10)(var1);
                var1 = 0;
                var5 = var5[var1];
                var8 = var6.bind(var3)(var5, var8);
                var6 = var8.replace;
                var5 = /^[ #-]+/;
                var5 = var6.bind(var8)(var5, var9);
                var9 = new Array(0);
            case 321:
                var8 = var5.match;
                var6 = /(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,.\/])+/;
                var8 = var8.bind(var5)(var6);
                var6 = var5;
                if (!(var7 != var8)) {
                    _fun61946_ip = 434;
                    continue _fun61946
                }
            case 353:
                var10 = var8.index;
                if (!(var7 != var10)) {
                    _fun61946_ip = 434;
                    continue _fun61946
                }
            case 362:
                var11 = var9.push;
                var12 = var6.substring;
                var10 = var8.index;
                var10 = var12.bind(var6)(var1, var10);
                var10 = var11.bind(var9)(var10);
                var11 = var9.push;
                var10 = var8[var1];
                var10 = var11.bind(var9)(var10);
                var10 = var6.substring;
                var11 = var8.index;
                var8 = var8[var1];
                var8 = var8.length;
                var8 = var11 + var8;
                var5 = var10.bind(var6)(var8);
                _fun61946_ip = 321;
                continue _fun61946;
            case 434:
                var5 = var9.push;
                var5 = var5.bind(var9)(var6);
                var7 = var9[var1];
                var5 = var9.length;
                var8 = 1;
                var6 = var8 < var5;
                var5 = 40;
                var1 = var7;
                if (!var6) {
                    _fun61946_ip = 507;
                    continue _fun61946
                }
            case 469:
                var6 = var9[var8];
                var10 = var7 + var6;
                var6 = var10.length;
                var1 = var7;
                if (!(!(var6 > var5))) {
                    _fun61946_ip = 507;
                    continue _fun61946
                }
            case 489:
                var8 = var8 + 1;
                var6 = var9.length;
                var7 = var10;
                var1 = var7;
                if (var8 < var6) {
                    _fun61946_ip = 469;
                    continue _fun61946
                }
            case 507:
                var0 = _closure1_slot21;
                var0 = var0.bind(var3)(var1, var5);
                return var0;
            case 519:
                var1 = _closure1_slot21;
                var0 = 80;
                var0 = var1.bind(var3)(var4, var0);
                return var0;
            case 537:
                var1 = _closure1_slot21;
                var0 = 40;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun61950: for (var _fun61950_ip = 0;;) switch (_fun61950_ip) {
                    case 0:
                        StartGenerator();
                        var22 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun61950_ip = 1952;
                            continue _fun61950
                        }
                    case 15:
                        var10 = var22;
                        var18 = arg1;
                        var15 = arg2;
                        var4 = arg3;
                        var5 = undefined;
                        var24 = undefined;
                        var _closure4_slot0 = var5;
                        var7 = undefined;
                        var8 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var21 = undefined;
                        var20 = undefined;
                        var6 = undefined;
                        var9 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var17 = undefined;
                        var16 = undefined;
                        var2 = undefined;
                        var19 = var22.isForumLikeChannel;
                        var7 = var19.bind(var22)();
                    case 71: // try_start_0
                        var4 = var4.bind(var5)();
                        SaveGenerator(address = 79);
                    case 77:
                        return var4;
                    case 79:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 19);
                        if (var19) {
                            _fun61950_ip = 375;
                            continue _fun61950
                        }
                    case 88:
                        var24 = var4;
                        _closure4_slot0 = var4;
                        var22 = var4.body;
                        var19 = null;
                        if (!(var19 != var22)) {
                            _fun61950_ip = 231;
                            continue _fun61950
                        }
                    case 109:
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var19 = 27;
                        var25 = var23[var19];
                        var27 = var22.bind(var5)(var25);
                        var26 = var27.dispatch;
                        var25 = {};
                        var29 = 'SLOWMODE_RESET_COOLDOWN';
                        var25.type = var29;
                        var28 = _closure1_slot10;
                        var28 = var28.CreateThread;
                        var25.slowmodeType = var28;
                        var28 = var10;
                        var28 = var28.id;
                        var25.channelId = var28;
                        var25 = var26.bind(var27)(var25);
                        var19 = var23[var19];
                        var23 = var22.bind(var5)(var19);
                        var22 = var23.dispatch;
                        var19 = {};
                        var25 = 'THREAD_CREATE_LOCAL';
                        var19.type = var25;
                        var24 = var24.body;
                        var24 = var24.id;
                        var19.channelId = var24;
                        var19 = var22.bind(var23)(var19);
                        _fun61950_ip = 370;
                        continue _fun61950;
                    case 231:
                        var22 = _closure1_slot1;
                        var28 = _closure1_slot2;
                        var19 = 26;
                        var19 = var28[var19];
                        var23 = var22.bind(var5)(var19);
                        var22 = var23.show;
                        var19 = {};
                        var27 = _closure1_slot0;
                        var24 = 14;
                        var25 = var28[var24];
                        var25 = var27.bind(var5)(var25);
                        var29 = var25.intl;
                        var26 = var29.string;
                        var25 = var28[var24];
                        var25 = var27.bind(var5)(var25);
                        var25 = var25.t;
                        var25 = var25.j2d6Km;
                        var25 = var26.bind(var29)(var25);
                        var19.title = var25;
                        var25 = var28[var24];
                        var25 = var27.bind(var5)(var25);
                        var26 = var25.intl;
                        var25 = var26.string;
                        var24 = var28[var24];
                        var24 = var27.bind(var5)(var24);
                        var24 = var24.t;
                        var24 = var24.fEptJP;
                        var24 = var25.bind(var26)(var24);
                        var19.body = var24;
                        var19 = var22.bind(var23)(var19);
                    case 370: // try_end0
                        _fun61950_ip = 1827;
                        continue _fun61950;
                    case 375:
                        return var4;
                    case 378: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = var4;
                        var _closure4_slot1 = var4;
                        var19 = var4.body;
                        var8 = var19;
                        var4 = null;
                        var19 = var4 == var19;
                        var22 = undefined;
                        if (var19) {
                            _fun61950_ip = 411;
                            continue _fun61950
                        }
                    case 406:
                        var22 = var8.code;
                    case 411:
                        var19 = _closure1_slot13;
                        var19 = var19.TOO_MANY_THREADS;
                        if (!(var22 !== var19)) {
                            _fun61950_ip = 1644;
                            continue _fun61950
                        }
                    case 431:
                        var19 = var3;
                        var19 = var19.body;
                        var14 = var19;
                        var22 = var4 == var19;
                        var19 = undefined;
                        if (var22) {
                            _fun61950_ip = 456;
                            continue _fun61950
                        }
                    case 451:
                        var19 = var14.code;
                    case 456:
                        var14 = _closure1_slot13;
                        var14 = var14.TOO_MANY_ANNOUNCEMENT_THREADS;
                        if (!(var19 !== var14)) {
                            _fun61950_ip = 1503;
                            continue _fun61950
                        }
                    case 473:
                        var14 = var3;
                        var14 = var14.body;
                        var13 = var14;
                        var19 = var4 == var14;
                        var14 = undefined;
                        if (var19) {
                            _fun61950_ip = 498;
                            continue _fun61950
                        }
                    case 493:
                        var14 = var13.code;
                    case 498:
                        var13 = _closure1_slot13;
                        var13 = var13.SLOWMODE_RATE_LIMITED;
                        if (!(var14 !== var13)) {
                            _fun61950_ip = 1358;
                            continue _fun61950
                        }
                    case 515:
                        var13 = var3;
                        var14 = var13.status;
                        var13 = 429;
                        if (!(var13 !== var14)) {
                            _fun61950_ip = 1186;
                            continue _fun61950
                        }
                    case 536:
                        var19 = _closure1_slot11;
                        var14 = var19.has;
                        var13 = var3;
                        var13 = var13.body;
                        var21 = var13;
                        var22 = var4 == var13;
                        var13 = undefined;
                        if (var22) {
                            _fun61950_ip = 570;
                            continue _fun61950
                        }
                    case 565:
                        var13 = var21.code;
                    case 570:
                        var13 = var14.bind(var19)(var13);
                        if (var13) {
                            _fun61950_ip = 1181;
                            continue _fun61950
                        }
                    case 581:
                        var19 = _closure1_slot12;
                        var14 = var19.has;
                        var13 = var3;
                        var13 = var13.body;
                        var20 = var13;
                        var21 = var4 == var13;
                        var13 = undefined;
                        if (var21) {
                            _fun61950_ip = 615;
                            continue _fun61950
                        }
                    case 610:
                        var13 = var20.code;
                    case 615:
                        var13 = var14.bind(var19)(var13);
                        if (var13) {
                            _fun61950_ip = 767;
                            continue _fun61950
                        }
                    case 626:
                        var14 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var13 = 26;
                        var13 = var24[var13];
                        var19 = var14.bind(var5)(var13);
                        var14 = var19.show;
                        var13 = {};
                        var23 = _closure1_slot0;
                        var20 = 14;
                        var21 = var24[var20];
                        var21 = var23.bind(var5)(var21);
                        var25 = var21.intl;
                        var22 = var25.string;
                        var21 = var24[var20];
                        var21 = var23.bind(var5)(var21);
                        var21 = var21.t;
                        var21 = var21.j2d6Km;
                        var21 = var22.bind(var25)(var21);
                        var13.title = var21;
                        var21 = var24[var20];
                        var21 = var23.bind(var5)(var21);
                        var22 = var21.intl;
                        var21 = var22.string;
                        var20 = var24[var20];
                        var20 = var23.bind(var5)(var20);
                        var20 = var20.t;
                        var20 = var20.fEptJP;
                        var20 = var21.bind(var22)(var20);
                        var13.body = var20;
                        var13 = var14.bind(var19)(var13);
                        _fun61950_ip = 1827;
                        continue _fun61950;
                    case 767:
                        var13 = var15;
                        if (!(var4 != var13)) {
                            _fun61950_ip = 1145;
                            continue _fun61950
                        }
                    case 777:
                        var13 = var3;
                        var13 = var13.body;
                        var12 = var13;
                        var14 = var4 == var13;
                        var13 = undefined;
                        if (var14) {
                            _fun61950_ip = 802;
                            continue _fun61950
                        }
                    case 797:
                        var13 = var12.code;
                    case 802:
                        var12 = _closure1_slot13;
                        var12 = var12.EXPLICIT_CONTENT;
                        if (!(var13 !== var12)) {
                            _fun61950_ip = 960;
                            continue _fun61950
                        }
                    case 819:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 23;
                        var12 = var14[var12];
                        var14 = var13.bind(var5)(var12);
                        var13 = var14.handleUploadMessageAttachmentsErrors;
                        var12 = {};
                        var12.file = var15;
                        var19 = var10;
                        var15 = var19.getGuildId;
                        var15 = var15.bind(var19)();
                        var12.guildId = var15;
                        var15 = var18;
                        if (!(var4 == var15)) {
                            _fun61950_ip = 882;
                            continue _fun61950
                        }
                    case 876:
                        var15 = new Array(0);
                        _fun61950_ip = 885;
                        continue _fun61950;
                    case 882:
                        var15 = var18;
                    case 885:
                        var12.analyticsLocations = var15;
                        var15 = var3;
                        var15 = var15.body;
                        var17 = var15;
                        var18 = var4 == var15;
                        var15 = undefined;
                        if (var18) {
                            _fun61950_ip = 915;
                            continue _fun61950
                        }
                    case 910:
                        var15 = var17.code;
                    case 915:
                        var12.code = var15;
                        var15 = var3;
                        var15 = var15.body;
                        var16 = var15;
                        var17 = var4 == var15;
                        var15 = undefined;
                        if (var17) {
                            _fun61950_ip = 945;
                            continue _fun61950
                        }
                    case 939:
                        var15 = var16.reason;
                    case 945:
                        var12.reason = var15;
                        var12 = var13.bind(var14)(var12);
                        _fun61950_ip = 1145;
                        continue _fun61950;
                    case 960:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 29;
                        var12 = var14[var12];
                        var13 = var13.bind(var5)(var12);
                        var12 = var13.createNonce;
                        var11 = var12.bind(var13)();
                        var13 = var3;
                        var13 = var13.body;
                        var13 = var13.attachments;
                        var13 = var4 != var13;
                        var12 = var13;
                        if (!var13) {
                            _fun61950_ip = 1039;
                            continue _fun61950
                        }
                    case 1014:
                        var13 = var3;
                        var13 = var13.body;
                        var13 = var13.attachments;
                        var14 = var13.length;
                        var13 = 0;
                        var12 = var14 > var13;
                    case 1039:
                        if (!var12) {
                            _fun61950_ip = 1145;
                            continue _fun61950
                        }
                    case 1042:
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var12 = 27;
                        var12 = var15[var12];
                        var17 = var14.bind(var5)(var12);
                        var16 = var17.dispatch;
                        var12 = {};
                        var13 = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
                        var12.type = var13;
                        var13 = var11;
                        var12.messageId = var13;
                        var11 = var10;
                        var18 = var11.id;
                        var12.channelId = var18;
                        var18 = var3;
                        var18 = var18.body;
                        var18 = var18.attachments;
                        var12.attachments = var18;
                        var12 = var16.bind(var17)(var12);
                        var12 = 30;
                        var12 = var15[var12];
                        var12 = var14.bind(var5)(var12);
                        var11 = var11.id;
                        var11 = var12.bind(var5)(var11, var13);
                    case 1145:
                        var11 = global;
                        var13 = var11.Promise;
                        var11 = var13.prototype;
                        var12 = Object.create(var11, {
                            constructor: {
                                value: var13
                            }
                        });
                        var31 = function(arg0, arg1) { // Environment: var1
                            _fun61951: for (var _fun61951_ip = 0;;) switch (_fun61951_ip) {
                                case 0:
                                    var2 = arg1;
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var _closure5_slot1 = var2;
                                    var1 = _closure4_slot1;
                                    var3 = var1.body;
                                    var1 = null;
                                    if (!(var1 == var3)) {
                                        _fun61951_ip = 40;
                                        continue _fun61951
                                    }
                                case 34:
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                case 40:
                                    var2 = _closure1_slot6;
                                    var1 = var2.addConditionalChangeListener;
                                    var0 = function() { // Environment: var0
                                        _fun61952: for (var _fun61952_ip = 0;;) switch (_fun61952_ip) {
                                            case 0:
                                                var3 = _closure1_slot6;
                                                var2 = var3.getAndDeleteMostRecentUserCreatedThreadId;
                                                var4 = var2.bind(var3)();
                                                var2 = null;
                                                if (!(var2 == var4)) {
                                                    _fun61952_ip = 31;
                                                    continue _fun61952
                                                }
                                            case 27:
                                                var2 = undefined;
                                                return var2;
                                            case 31:
                                                var3 = _closure1_slot7;
                                                var2 = var3.getChannel;
                                                var2 = var2.bind(var3)(var4);
                                                var _closure6_slot0 = var2;
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var1 = 27;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var2 = var3.bind(var1)(var2);
                                                var1 = var2.wait;
                                                var0 = function() { // Environment: var0
                                                    _fun61953: for (var _fun61953_ip = 0;;) switch (_fun61953_ip) {
                                                        case 0:
                                                            var2 = _closure6_slot0;
                                                            var1 = null;
                                                            if (!(var1 != var2)) {
                                                                _fun61953_ip = 33;
                                                                continue _fun61953
                                                            }
                                                        case 13:
                                                            var2 = _closure5_slot0;
                                                            var1 = _closure6_slot0;
                                                            var0 = undefined;
                                                            var0 = var2.bind(var0)(var1);
                                                            _fun61953_ip = 46;
                                                            continue _fun61953;
                                                        case 33:
                                                            var1 = _closure5_slot1;
                                                            var0 = undefined;
                                                            var0 = var1.bind(var0)();
                                                        case 46:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                var0 = false;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var32 = var12;
                        var11 = new var32[var13](var31, var30);
                        var11 = var11 instanceof Object ? var11 : var12;
                        return var11;
                    case 1181:
                        var11 = var3;
                        throw var11;
                    case 1186:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 26;
                        var11 = var13[var11];
                        var13 = var12.bind(var5)(var11);
                        var12 = var13.show;
                        var11 = {};
                        var14 = var7;
                        var19 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var18 = 14;
                        var16 = var15[var18];
                        var16 = var19.bind(var5)(var16);
                        var17 = var16.intl;
                        var16 = var17.string;
                        var15 = var15[var18];
                        var15 = var19.bind(var5)(var15);
                        var15 = var15.t;
                        if (var14) {
                            _fun61950_ip = 1277;
                            continue _fun61950
                        }
                    case 1264:
                        var14 = var15["1KEdvB"];
                        var14 = var16.bind(var17)(var14);
                        _fun61950_ip = 1288;
                        continue _fun61950;
                    case 1277:
                        var15 = var15.vWNFkx;
                        var14 = var16.bind(var17)(var15);
                    case 1288:
                        var11.title = var14;
                        var17 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var15 = var14[var18];
                        var15 = var17.bind(var5)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var14[var18];
                        var14 = var17.bind(var5)(var14);
                        var14 = var14.t;
                        var14 = var14.Whhv4w;
                        var14 = var15.bind(var16)(var14);
                        var11.body = var14;
                        var11 = var12.bind(var13)(var11);
                        _fun61950_ip = 1827;
                        continue _fun61950;
                    case 1358:
                        var3 = var3.body;
                        var3 = var3.retry_after;
                        var6 = var3;
                        var11 = var4 != var3;
                        var4 = 0;
                        var3 = 0;
                        if (!var11) {
                            _fun61950_ip = 1386;
                            continue _fun61950
                        }
                    case 1383:
                        var3 = var6;
                    case 1386:
                        var9 = var3;
                        if (!(var3 > var4)) {
                            _fun61950_ip = 1827;
                            continue _fun61950
                        }
                    case 1396:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 27;
                        var3 = var12[var3];
                        var6 = var11.bind(var5)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var13 = 'SLOWMODE_SET_COOLDOWN';
                        var3.type = var13;
                        var10 = var10.id;
                        var3.channelId = var10;
                        var10 = _closure1_slot10;
                        var10 = var10.CreateThread;
                        var3.slowmodeType = var10;
                        var10 = var9;
                        var9 = 28;
                        var9 = var12[var9];
                        var9 = var11.bind(var5)(var9);
                        var9 = var9.Millis;
                        var9 = var9.SECOND;
                        var9 = var10 * var9;
                        var3.cooldownMs = var9;
                        var3 = var4.bind(var6)(var3);
                        _fun61950_ip = 1827;
                        continue _fun61950;
                    case 1503:
                        var4 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var3 = 26;
                        var3 = var13[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.show;
                        var3 = {};
                        var12 = _closure1_slot0;
                        var9 = 14;
                        var10 = var13[var9];
                        var10 = var12.bind(var5)(var10);
                        var14 = var10.intl;
                        var11 = var14.string;
                        var10 = var13[var9];
                        var10 = var12.bind(var5)(var10);
                        var10 = var10.t;
                        var10 = var10["1KEdvB"];
                        var10 = var11.bind(var14)(var10);
                        var3.title = var10;
                        var10 = var13[var9];
                        var10 = var12.bind(var5)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var13[var9];
                        var9 = var12.bind(var5)(var9);
                        var9 = var9.t;
                        var9 = var9.jDMxz2;
                        var9 = var10.bind(var11)(var9);
                        var3.body = var9;
                        var3 = var4.bind(var6)(var3);
                        _fun61950_ip = 1827;
                        continue _fun61950;
                    case 1644:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 26;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.show;
                        var3 = {};
                        var9 = var7;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var12 = 14;
                        var11 = var10[var12];
                        var11 = var14.bind(var5)(var11);
                        var13 = var11.intl;
                        var11 = var13.string;
                        var10 = var10[var12];
                        var10 = var14.bind(var5)(var10);
                        var10 = var10.t;
                        if (var9) {
                            _fun61950_ip = 1735;
                            continue _fun61950
                        }
                    case 1722:
                        var9 = var10["1KEdvB"];
                        var9 = var11.bind(var13)(var9);
                        _fun61950_ip = 1746;
                        continue _fun61950;
                    case 1735:
                        var10 = var10.vWNFkx;
                        var9 = var11.bind(var13)(var10);
                    case 1746:
                        var3.title = var9;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var9 = var8[var12];
                        var9 = var11.bind(var5)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var8[var12];
                        var8 = var11.bind(var5)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun61950_ip = 1807;
                            continue _fun61950
                        }
                    case 1794:
                        var7 = var8.P0wT5S;
                        var7 = var9.bind(var10)(var7);
                        _fun61950_ip = 1818;
                        continue _fun61950;
                    case 1807:
                        var8 = var8.KGaiEK;
                        var7 = var9.bind(var10)(var8);
                    case 1818:
                        var3.body = var7;
                        var3 = var4.bind(var6)(var3);
                    case 1827:
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var31 = function(arg0, arg1) { // Environment: var1
                            _fun61954: for (var _fun61954_ip = 0;;) switch (_fun61954_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure4_slot0;
                                    var2 = var1.body;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun61954_ip = 36;
                                        continue _fun61954
                                    }
                                case 27:
                                    var2 = arg1;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                case 36:
                                    var2 = _closure1_slot7;
                                    var1 = var2.addConditionalChangeListener;
                                    var0 = function() { // Environment: var0
                                        _fun61955: for (var _fun61955_ip = 0;;) switch (_fun61955_ip) {
                                            case 0:
                                                var4 = _closure1_slot7;
                                                var3 = var4.getChannel;
                                                var2 = _closure4_slot0;
                                                var2 = var2.body;
                                                var2 = var2.id;
                                                var3 = var3.bind(var4)(var2);
                                                var _closure6_slot0 = var3;
                                                var2 = null;
                                                if (!(var2 == var3)) {
                                                    _fun61955_ip = 50;
                                                    continue _fun61955
                                                }
                                            case 46:
                                                var2 = undefined;
                                                return var2;
                                            case 50:
                                                var3 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var1 = 27;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var2 = var3.bind(var1)(var2);
                                                var1 = var2.wait;
                                                var0 = function() { // Environment: var0
                                                    var2 = _closure5_slot0;
                                                    var1 = _closure6_slot0;
                                                    var0 = undefined;
                                                    var1 = var2.bind(var0)(var1);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                var0 = false;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var32 = var3;
                        var1 = new var32[var4](var31, var30);
                        var1 = var1 instanceof Object ? var1 : var3;
                        SaveGenerator(address = 1864);
                    case 1862:
                        return var1;
                    case 1864:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun61950_ip = 1949;
                            continue _fun61950
                        }
                    case 1870:
                        var2 = var1;
                    case 1873: // try_start_1
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 25;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.fetchMessages;
                        var3 = {};
                        var7 = var2;
                        var7 = var7.id;
                        var3.channelId = var7;
                        var6 = _closure1_slot16;
                        var3.limit = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 1933);
                    case 1931:
                        return var3;
                    case 1933:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun61950_ip = 1941;
                            continue _fun61950
                        }
                    case 1939: // try_end1
                        _fun61950_ip = 1946;
                        continue _fun61950;
                    case 1941:
                        return var3;
                    case 1944: // catch_target1
                        CatchBlockStart(arg_register = 3);
                    case 1946:
                        return var2;
                    case 1949:
                        return var1;
                    case 1952:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var11 = 1;
    var5 = var8[var11];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var10 = 2;
    var9 = var8[var10];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var8[var9];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.DraftType;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.SlowmodeType;
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.FORUM_POST_CREATION_AUTOMOD_ERRORS;
    var _closure1_slot11 = var6;
    var5 = var5.FORUM_POST_CREATION_UPLOAD_ERRORS;
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.AbortCodes;
    var _closure1_slot13 = var6;
    var6 = var5.ChannelTypes;
    var _closure1_slot14 = var6;
    var6 = var5.Endpoints;
    var _closure1_slot15 = var6;
    var6 = var5.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = var6;
    var5 = var5.MessageFlags;
    var _closure1_slot17 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.MessageSendLocation;
    var _closure1_slot18 = var5;
    var5 = {};
    var5.Disabled = var11;
    var6 = 'Disabled';
    var5[var11] = var6;
    var5.Enabled = var10;
    var6 = 'Enabled';
    var5[var10] = var6;
    var5.PrivateOnly = var9;
    var6 = 'PrivateOnly';
    var5[var9] = var6;
    var _closure1_slot19 = var5;
    var6 = 31;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/threads/ThreadCreationHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var2.PrivateThreadMode = var5;
    var5 = function arg0() {
        _fun61957: for (var _fun61957_ip = 0;;) switch (_fun61957_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var3 = undefined;
                var7 = var5.bind(var3)(var1);
                var1 = var7.useCanStartPublicThread;
                var1 = var1.bind(var7)(var4);
                var0 = var6[var0];
                var3 = var5.bind(var3)(var0);
                var0 = var3.useCanStartPrivateThread;
                var0 = var0.bind(var3)(var4);
                var2 = _closure1_slot19;
                if (var0) {
                    _fun61957_ip = 74;
                    continue _fun61957
                }
            case 66:
                var0 = var2.Disabled;
                _fun61957_ip = 94;
                continue _fun61957;
            case 74:
                if (var1) {
                    _fun61957_ip = 85;
                    continue _fun61957
                }
            case 77:
                var1 = var2.PrivateOnly;
                _fun61957_ip = 91;
                continue _fun61957;
            case 85:
                var1 = var2.Enabled;
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var2.usePrivateThreadMode = var5;
    var2.getIsPrivate = var4;
    var2.getDefaultThreadName = var3;
    var3 = function arg0() {
        var1 = arg0;
        var11 = var1.parentChannel;
        var _closure2_slot0 = var11;
        var10 = var1.parentMessageId;
        var _closure2_slot1 = var10;
        var9 = var1.threadSettings;
        var _closure2_slot2 = var9;
        var7 = var1.privateThreadMode;
        var _closure2_slot3 = var7;
        var6 = var1.location;
        var _closure2_slot4 = var6;
        var8 = var1.onThreadCreated;
        var _closure2_slot5 = var8;
        var5 = var1.useDefaultThreadName;
        var _closure2_slot6 = var5;
        var4 = var1.uploadHandler;
        var _closure2_slot7 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun61961: for (var _fun61961_ip = 0;;) switch (_fun61961_ip) {
                        case 0:
                            StartGenerator();
                            var8 = arg0;
                            var7 = arg1;
                            var6 = arg2;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun61961_ip = 680;
                                continue _fun61961
                            }
                        case 21:
                            var2 = undefined;
                            var _closure5_slot0 = var2;
                            var _closure5_slot1 = var2;
                            var _closure5_slot2 = var2;
                            var10 = _closure1_slot20;
                            var5 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var9 = var10.bind(var2)(var5, var9);
                            _closure5_slot0 = var9;
                            var11 = var5.name;
                            var9 = null;
                            var12 = var9 != var11;
                            var10 = '';
                            var5 = var10;
                            if (!var12) {
                                _fun61961_ip = 87;
                                continue _fun61961
                            }
                        case 84:
                            var5 = var11;
                        case 87:
                            _closure5_slot1 = var5;
                            if (!(var10 === var5)) {
                                _fun61961_ip = 183;
                                continue _fun61961
                            }
                        case 95:
                            var5 = _closure2_slot6;
                            if (!var5) {
                                _fun61961_ip = 183;
                                continue _fun61961
                            }
                        case 102:
                            var12 = _closure1_slot22;
                            var11 = _closure2_slot0;
                            var5 = _closure2_slot1;
                            var5 = var12.bind(var2)(var11, var5);
                            if (!(var10 === var5)) {
                                _fun61961_ip = 179;
                                continue _fun61961
                            }
                        case 124:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 14;
                            var11 = var14[var10];
                            var11 = var13.bind(var2)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10["7Xm5QI"];
                            var5 = var11.bind(var12)(var10);
                        case 179:
                            _closure5_slot1 = var5;
                        case 183:
                            var10 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var5 = 15;
                            var5 = var14[var5];
                            var10 = var10.bind(var2)(var5);
                            var5 = var10.getAutoArchiveDuration;
                            var12 = _closure2_slot0;
                            var5 = var5.bind(var10)(var12);
                            _closure5_slot2 = var5;
                            var11 = _closure1_slot7;
                            var10 = var11.getChannel;
                            var13 = _closure1_slot1;
                            var5 = 16;
                            var5 = var14[var5];
                            var14 = var13.bind(var2)(var5);
                            var13 = var14.castMessageIdAsChannelId;
                            var5 = _closure2_slot1;
                            var5 = var13.bind(var14)(var5);
                            var5 = var10.bind(var11)(var5);
                            var11 = _closure1_slot23;
                            var20 = new Array(0);
                            var18 = function() { // Environment: var1
                                _fun61962: for (var _fun61962_ip = 0;;) switch (_fun61962_ip) {
                                    case 0:
                                        var1 = _closure2_slot1;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun61962_ip = 42;
                                            continue _fun61962
                                        }
                                    case 13:
                                        var2 = _closure1_slot15;
                                        var1 = var2.CHANNEL_THREADS;
                                        var0 = _closure2_slot0;
                                        var0 = var0.id;
                                        var3 = var1.bind(var2)(var0);
                                        _fun61962_ip = 74;
                                        continue _fun61962;
                                    case 42:
                                        var5 = _closure1_slot15;
                                        var2 = var5.CHANNEL_MESSAGE_THREADS;
                                        var0 = _closure2_slot0;
                                        var1 = var0.id;
                                        var0 = _closure2_slot1;
                                        var3 = var2.bind(var5)(var1, var0);
                                    case 74:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 17;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var2 = var0.HTTP;
                                        var1 = var2.post;
                                        var0 = {};
                                        var0.url = var3;
                                        var3 = {};
                                        var6 = _closure5_slot1;
                                        var3.name = var6;
                                        var6 = _closure5_slot0;
                                        if (var6) {
                                            _fun61962_ip = 183;
                                            continue _fun61962
                                        }
                                    case 136:
                                        var6 = _closure2_slot0;
                                        var8 = var6.type;
                                        var6 = _closure1_slot14;
                                        var6 = var6.GUILD_ANNOUNCEMENT;
                                        if (!(var8 !== var6)) {
                                            _fun61962_ip = 171;
                                            continue _fun61962
                                        }
                                    case 159:
                                        var6 = _closure1_slot14;
                                        var6 = var6.PUBLIC_THREAD;
                                        _fun61962_ip = 181;
                                        continue _fun61962;
                                    case 171:
                                        var8 = _closure1_slot14;
                                        var6 = var8.ANNOUNCEMENT_THREAD;
                                    case 181:
                                        _fun61962_ip = 193;
                                        continue _fun61962;
                                    case 183:
                                        var7 = _closure1_slot14;
                                        var6 = var7.PRIVATE_THREAD;
                                    case 193:
                                        var3.type = var6;
                                        var5 = _closure5_slot2;
                                        var3.auto_archive_duration = var5;
                                        var4 = _closure2_slot4;
                                        var3.location = var4;
                                        var0.body = var3;
                                        var3 = false;
                                        var0.rejectWithError = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var22 = undefined;
                            var21 = var12;
                            var19 = undefined;
                            var1 = var22[var11](var21, var20, var19, var18, var17);
                            SaveGenerator(address = 295);
                        case 293:
                            return var1;
                        case 295:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 10);
                            if (var10) {
                                _fun61961_ip = 677;
                                continue _fun61961
                            }
                        case 304:
                            if (!(var1 !== var5)) {
                                _fun61961_ip = 623;
                                continue _fun61961
                            }
                        case 311:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 18;
                            var5 = var13[var11];
                            var17 = var12.bind(var2)(var5);
                            var16 = var17.clearDraft;
                            var10 = _closure2_slot0;
                            var15 = var10.id;
                            var5 = _closure1_slot8;
                            var14 = var5.ThreadSettings;
                            var14 = var16.bind(var17)(var15, var14);
                            var11 = var13[var11];
                            var12 = var12.bind(var2)(var11);
                            var11 = var12.clearDraft;
                            var10 = var10.id;
                            var5 = var5.FirstThreadMessage;
                            var5 = var11.bind(var12)(var10, var5);
                            var5 = _closure2_slot5;
                            if (!(var9 != var5)) {
                                _fun61961_ip = 411;
                                continue _fun61961
                            }
                        case 402:
                            var5 = _closure2_slot5;
                            var5 = var5.bind(var2)(var1);
                        case 411:
                            var5 = _closure2_slot7;
                            if (!(var9 != var5)) {
                                _fun61961_ip = 437;
                                continue _fun61961
                            }
                        case 419:
                            if (!(var9 != var6)) {
                                _fun61961_ip = 437;
                                continue _fun61961
                            }
                        case 423:
                            var11 = var6.length;
                            var10 = 0;
                            if (!(!(var11 > var10))) {
                                _fun61961_ip = 605;
                                continue _fun61961
                            }
                        case 437:
                            if (!(var9 != var7)) {
                                _fun61961_ip = 452;
                                continue _fun61961
                            }
                        case 441:
                            var10 = var7.length;
                            var9 = 0;
                            if (!(!(var10 > var9))) {
                                _fun61961_ip = 540;
                                continue _fun61961
                            }
                        case 452:
                            var10 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var9 = 25;
                            var9 = var14[var9];
                            var13 = var10.bind(var2)(var9);
                            var12 = var13.sendMessage;
                            var11 = var1.id;
                            var9 = 12;
                            var9 = var14[var9];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.parse;
                            var20 = var9.bind(var10)(var1, var8);
                            var9 = {};
                            var14 = _closure1_slot18;
                            var14 = var14.THREAD_CREATION;
                            var9.location = var14;
                            var22 = var13;
                            var21 = var11;
                            var19 = undefined;
                            var18 = var9;
                            var9 = var22[var12](var21, var20, var19, var18, var17);
                            _fun61961_ip = 623;
                            continue _fun61961;
                        case 540:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 25;
                            var9 = var11[var9];
                            var12 = var10.bind(var2)(var9);
                            var11 = var12.sendStickers;
                            var21 = var1.id;
                            var9 = {};
                            var13 = _closure1_slot18;
                            var13 = var13.THREAD_CREATION;
                            var9.location = var13;
                            var22 = var12;
                            var20 = var7;
                            var19 = var8;
                            var18 = var9;
                            var9 = var22[var11](var21, var20, var19, var18, var17);
                            _fun61961_ip = 623;
                            continue _fun61961;
                        case 605:
                            var22 = undefined;
                            var21 = var1;
                            var20 = var6;
                            var19 = var8;
                            var18 = var7;
                            var5 = var22[var5](var21, var20, var19, var18, var17);
                        case 623:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 19;
                            var5 = var7[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.clearAll;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var3 = _closure1_slot8;
                            var3 = var3.FirstThreadMessage;
                            var3 = var5.bind(var6)(var4, var3);
                            return var2;
                        case 677:
                            return var1;
                        case 680:
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
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = new Array(8);
        var0[0] = var11;
        var0[1] = var10;
        var0[2] = var9;
        var0[3] = var8;
        var0[4] = var7;
        var0[5] = var6;
        var0[6] = var5;
        var0[7] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCreateThreadCommon = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = arg4;
        var _closure2_slot4 = var1;
        var3 = _closure1_slot23;
        var7 = new Array(0);
        var5 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.HTTP;
            var1 = var2.post;
            var0 = {};
            var6 = _closure1_slot15;
            var5 = var6.CHANNEL_THREADS;
            var3 = _closure2_slot0;
            var3 = var3.id;
            var3 = var5.bind(var6)(var3);
            var0.url = var3;
            var3 = {};
            var5 = _closure2_slot1;
            var3.name = var5;
            var5 = _closure2_slot2;
            var3.type = var5;
            var5 = _closure2_slot3;
            var3.auto_archive_duration = var5;
            var4 = _closure2_slot4;
            var3.location = var4;
            var0.body = var3;
            var3 = false;
            var0.rejectWithError = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = undefined;
        var8 = var4;
        var6 = undefined;
        var0 = var9[var3](var8, var7, var6, var5, var4);
        return var0;
    };
    var2.createThread = var3;
    var1 = function arg0() {
        var1 = arg0;
        var9 = var1.parentChannel;
        var _closure2_slot0 = var9;
        var8 = var1.name;
        var _closure2_slot1 = var8;
        var7 = var1.appliedTags;
        var _closure2_slot2 = var7;
        var5 = var1.analyticsLocations;
        var _closure2_slot3 = var5;
        var6 = var1.onThreadCreated;
        var _closure2_slot4 = var6;
        var4 = var1.upload;
        var _closure2_slot5 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun61969: for (var _fun61969_ip = 0;;) switch (_fun61969_ip) {
                        case 0:
                            StartGenerator();
                            var12 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun61969_ip = 711;
                                continue _fun61969
                            }
                        case 15:
                            var3 = arg2;
                            var4 = undefined;
                            var10 = undefined;
                            var _closure5_slot0 = var4;
                            var11 = undefined;
                            var _closure5_slot1 = var4;
                            var6 = undefined;
                            var5 = undefined;
                            var9 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 20;
                            var8 = var13[var8];
                            var8 = var9.bind(var4)(var8);
                            var13 = var8.bind(var4)(var12);
                            var9 = _closure1_slot3;
                            var8 = 2;
                            var14 = var9.bind(var4)(var13, var8);
                            var13 = 0;
                            var8 = var14[var13];
                            var9 = 1;
                            var9 = var14[var9];
                            var15 = var12;
                            var16 = 0;
                            if (!var8) {
                                _fun61969_ip = 143;
                                continue _fun61969
                            }
                        case 98:
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var8 = 21;
                            var8 = var14[var8];
                            var14 = var12.bind(var4)(var8);
                            var12 = var14.addFlag;
                            var8 = _closure1_slot17;
                            var8 = var8.SUPPRESS_NOTIFICATIONS;
                            var16 = var12.bind(var14)(var13, var8);
                            var15 = var9;
                        case 143:
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var8 = 15;
                            var8 = var12[var8];
                            var17 = var9.bind(var4)(var8);
                            var14 = var17.getAutoArchiveDuration;
                            var12 = _closure2_slot0;
                            var9 = null;
                            var14 = var14.bind(var17)(var12, var9);
                            var18 = _closure1_slot15;
                            var17 = var18.CHANNEL_THREADS;
                            var12 = var12.id;
                            var17 = var17.bind(var18)(var12);
                            var12 = '?use_nested_fields=true';
                            var12 = var17 + var12;
                            _closure5_slot0 = var12;
                            var12 = {};
                            var17 = _closure2_slot1;
                            var12.name = var17;
                            var12.auto_archive_duration = var14;
                            var14 = _closure2_slot2;
                            var12.applied_tags = var14;
                            var14 = {};
                            var14.content = var15;
                            var15 = arg1;
                            var14.sticker_ids = var15;
                            var15 = undefined;
                            if (!(var13 !== var16)) {
                                _fun61969_ip = 265;
                                continue _fun61969
                            }
                        case 262:
                            var15 = var16;
                        case 265:
                            var14.flags = var15;
                            var12.message = var14;
                            var11 = var12;
                            _closure5_slot1 = var12;
                            var12 = var3;
                            if (!(var9 != var12)) {
                                _fun61969_ip = 359;
                                continue _fun61969
                            }
                        case 287:
                            var12 = var3;
                            var12 = var12.length;
                            if (!(var12 > var13)) {
                                _fun61969_ip = 359;
                                continue _fun61969
                            }
                        case 299: // try_start_0
                            var12 = _closure2_slot5;
                            var3 = var12.bind(var4)(var3);
                            SaveGenerator(address = 312);
                        case 310:
                            return var3;
                        case 312:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 12);
                            if (var12) {
                                _fun61969_ip = 596;
                                continue _fun61969
                            }
                        case 321:
                            var10 = var3.uploaderFile;
                            var12 = var11.message;
                            var14 = var3.files;
                            var13 = var14.map;
                            var11 = function(arg0, arg1) { // Environment: var7
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getAttachmentPayload;
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var11 = var13.bind(var14)(var11);
                            var12.attachments = var11;
                        case 359: // try_end0
                            var13 = _closure1_slot23;
                            var22 = _closure2_slot0;
                            var21 = _closure2_slot3;
                            var20 = var10;
                            var19 = function() { // Environment: var7
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var2 = var0.HTTP;
                                var1 = var2.post;
                                var0 = {};
                                var4 = _closure5_slot0;
                                var0.url = var4;
                                var3 = _closure5_slot1;
                                var0.body = var3;
                                var3 = false;
                                var0.rejectWithError = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var23 = undefined;
                            var7 = var23[var13](var22, var21, var20, var19, var18);
                            SaveGenerator(address = 389);
                        case 387:
                            return var7;
                        case 389:
                            ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 10);
                            if (var10) {
                                _fun61969_ip = 593;
                                continue _fun61969
                            }
                        case 398:
                            var14 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var11 = 18;
                            var10 = var12[var11];
                            var18 = var14.bind(var4)(var10);
                            var17 = var18.clearDraft;
                            var13 = _closure2_slot0;
                            var16 = var13.id;
                            var10 = _closure1_slot8;
                            var15 = var10.ThreadSettings;
                            var15 = var17.bind(var18)(var16, var15);
                            var11 = var12[var11];
                            var17 = var14.bind(var4)(var11);
                            var16 = var17.clearDraft;
                            var15 = var13.id;
                            var11 = var10.FirstThreadMessage;
                            var11 = var16.bind(var17)(var15, var11);
                            var11 = 19;
                            var11 = var12[var11];
                            var15 = var14.bind(var4)(var11);
                            var14 = var15.clearAll;
                            var11 = var13.id;
                            var10 = var10.FirstThreadMessage;
                            var10 = var14.bind(var15)(var11, var10);
                            var11 = _closure1_slot0;
                            var10 = 24;
                            var10 = var12[var10];
                            var12 = var11.bind(var4)(var10);
                            var11 = var12.trackForumPostCreated;
                            var10 = {};
                            var14 = var13.guild_id;
                            var10.guildId = var14;
                            var13 = var13.id;
                            var10.channelId = var13;
                            var13 = var7.id;
                            var10.postId = var13;
                            var10 = var11.bind(var12)(var10);
                            var10 = _closure2_slot4;
                            if (!(var9 != var10)) {
                                _fun61969_ip = 590;
                                continue _fun61969
                            }
                        case 581:
                            var10 = _closure2_slot4;
                            var10 = var10.bind(var4)(var7);
                        case 590:
                            return var7;
                        case 593:
                            return var7;
                        case 596:
                            return var3;
                        case 599: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = var3;
                            var7 = var3.file;
                            var6 = var3.code;
                            var5 = var3.reason;
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 23;
                            var2 = var10[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.handleUploadMessageAttachmentsErrors;
                            var2 = {};
                            var2.file = var7;
                            var10 = _closure2_slot0;
                            var7 = var10.getGuildId;
                            var7 = var7.bind(var10)();
                            var2.guildId = var7;
                            var7 = _closure2_slot3;
                            if (!(var9 == var7)) {
                                _fun61969_ip = 686;
                                continue _fun61969
                            }
                        case 680:
                            var7 = new Array(0);
                            _fun61969_ip = 690;
                            continue _fun61969;
                        case 686:
                            var7 = _closure2_slot3;
                        case 690:
                            var2.analyticsLocations = var7;
                            var2.code = var6;
                            var2.reason = var5;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 711:
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
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = new Array(6);
        var0[0] = var9;
        var0[1] = var8;
        var0[2] = var7;
        var0[3] = var6;
        var0[4] = var5;
        var0[5] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCreateForumPostCommon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 7675, 1372, 4000, 4251, 6602, 1233, 660, 1346, 6764, 5639, 7676, 1234, 7677, 21, 507, 6548, 7678, 5640, 1384, 4006, 7679, 6536, 6593, 4002, 806, 667, 6611, 7762, 2]);