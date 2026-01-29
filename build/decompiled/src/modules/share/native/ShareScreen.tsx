// modules/share/native/ShareScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96759: for (var _fun96759_ip = 0;;) switch (_fun96759_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: getAttachmentsRestriction, environment: var1
                _fun96760: for (var _fun96760_ip = 0;;) switch (_fun96760_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot8;
                        var0 = var4 instanceof var0;
                        if (!var0) {
                            _fun96760_ip = 36;
                            continue _fun96760
                        }
                    case 17:
                        var1 = _closure1_slot9;
                        var0 = var4.type;
                        var6 = undefined;
                        var0 = var1.bind(var6)(var0);
                        if (var0) {
                            _fun96760_ip = 40;
                            continue _fun96760
                        }
                    case 36:
                        var0 = undefined;
                        return var0;
                    case 40:
                        var3 = _closure1_slot11;
                        var1 = var3.can;
                        var0 = _closure1_slot13;
                        var0 = var0.ATTACH_FILES;
                        var1 = var1.bind(var3)(var0, var4);
                        var0 = undefined;
                        if (var1) {
                            _fun96760_ip = 135;
                            continue _fun96760
                        }
                    case 71:
                        var1 = {};
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 14;
                        var3 = var7[var2];
                        var3 = var5.bind(var6)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.t;
                        var2 = var2.P7yvbm;
                        var2 = var3.bind(var4)(var2);
                        var1.label = var2;
                        var0 = var1;
                    case 135:
                        return var0;
                }
            };
            var _closure1_slot21 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var9 = 0;
            var3 = var5[var9];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var11 = 1;
            var3 = var5[var11];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var6 = var5[var3];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.NativeModules;
            var _closure1_slot6 = var6;
            var3 = var3.View;
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.ChannelRecordBase;
            var _closure1_slot8 = var6;
            var3 = var3.isGuildChannelType;
            var _closure1_slot9 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot11 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.AnalyticEvents;
            var _closure1_slot12 = var6;
            var6 = var3.Permissions;
            var _closure1_slot13 = var6;
            var3 = var3.MAX_UPLOAD_COUNT;
            var _closure1_slot14 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.MAX_DESTINATION_COUNT;
            var _closure1_slot15 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.UserRowModes;
            var _closure1_slot16 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot17 = var6;
            var6 = var3.Fragment;
            var _closure1_slot18 = var6;
            var3 = var3.jsxs;
            var _closure1_slot19 = var3;
            var3 = 11;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var12 = 'center';
            var8.textAlign = var12;
            var3.title = var8;
            var8 = {};
            var8.flex = var11;
            var3.content = var8;
            var8 = {};
            var11 = 12;
            var12 = var5[var11];
            var13 = var4.bind(var0)(var12);
            var12 = var13.isIOS;
            var13 = var12.bind(var13)();
            var12 = 0;
            if (!var13) {
                _fun96759_ip = 435;
                continue _fun96759
            }
        case 413:
            var13 = 13;
            var13 = var5[var13];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var12 = var13.PX_16;
        case 435:
            var8.paddingHorizontal = var12;
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isIOS;
            var11 = var11.bind(var12)();
            var9 = 0;
            if (!var11) {
                _fun96759_ip = 486;
                continue _fun96759
            }
        case 463:
            var11 = 13;
            var11 = var5[var11];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var9 = var11.PX_8;
        case 486:
            var8.paddingVertical = var9;
            var9 = 13;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_BASE_LOWER;
            var8.backgroundColor = var9;
            var3.headerContainer = var8;
            var8 = {
                'borderBottomWidth': 0,
                'shadowColor': 'transparent',
                'backgroundColor': 'transparent'
            };
            var3.header = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot20 = var3;
            var3 = 35;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/share/native/ShareScreen.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: ShareScreen, environment: var1
                _fun96761: for (var _fun96761_ip = 0;;) switch (_fun96761_ip) {
                    case 0:
                        var0 = arg0;
                        var22 = var0.sharedContent;
                        var _closure2_slot0 = var22;
                        var27 = var0.onClose;
                        var _closure2_slot1 = var27;
                        var3 = undefined;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var _closure2_slot11 = var3;
                        var0 = _closure1_slot20;
                        var8 = var0.bind(var3)();
                        var2 = _closure1_slot5;
                        var4 = var2.useMemo;
                        var1 = new Array(1);
                        var1[0] = var22;
                        var0 = function() { // Environment: var10
                            _fun96762: for (var _fun96762_ip = 0;;) switch (_fun96762_ip) {
                                case 0:
                                    var3 = _closure2_slot0;
                                    var0 = new Array(0);
                                    var1 = var3.targetUserId;
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun96762_ip = 53;
                                        continue _fun96762
                                    }
                                case 23:
                                    var4 = var0.push;
                                    var1 = {};
                                    var5 = 'user';
                                    var1.type = var5;
                                    var5 = var3.targetUserId;
                                    var1.id = var5;
                                    var1 = var4.bind(var0)(var1);
                                case 53:
                                    var1 = var3.targetChannelId;
                                    if (!(var2 != var1)) {
                                        _fun96762_ip = 93;
                                        continue _fun96762
                                    }
                                case 63:
                                    var2 = var0.push;
                                    var1 = {};
                                    var4 = 'channel';
                                    var1.type = var4;
                                    var3 = var3.targetChannelId;
                                    var1.id = var3;
                                    var1 = var2.bind(var0)(var1);
                                case 93:
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var2)(var0, var1);
                        var0 = var2.useState;
                        var0 = var0.bind(var2)(var1);
                        var5 = _closure1_slot4;
                        var4 = 2;
                        var0 = var5.bind(var3)(var0, var4);
                        var16 = 0;
                        var24 = var0[var16];
                        var _closure2_slot2 = var24;
                        var1 = 1;
                        var0 = var0[var1];
                        var _closure2_slot3 = var0;
                        var15 = var24.length;
                        var _closure2_slot4 = var15;
                        var0 = var22.attachments;
                        var6 = var0.length;
                        var0 = _closure1_slot14;
                        var12 = var6 > var0;
                        var _closure2_slot5 = var12;
                        var7 = var2.useCallback;
                        var6 = function(arg0) { // Environment: var10
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = new Array(0);
                        var23 = var7.bind(var2)(var6, var0);
                        var6 = var2.useState;
                        var0 = false;
                        var0 = var6.bind(var2)(var0);
                        var0 = var5.bind(var3)(var0, var4);
                        var14 = var0[var16];
                        var0 = var0[var1];
                        var _closure2_slot6 = var0;
                        var0 = var2.useRef;
                        var0 = var0.bind(var2)(var14);
                        var _closure2_slot7 = var0;
                        if (!(!(var15 <= var1))) {
                            _fun96761_ip = 295;
                            continue _fun96761
                        }
                    case 230:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 14;
                        var5 = var7[var0];
                        var5 = var2.bind(var3)(var5);
                        var6 = var5.intl;
                        var5 = var6.formatToPlainString;
                        var0 = var7[var0];
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.t;
                        var2 = var0.jWtYUm;
                        var0 = {};
                        var0.count = var15;
                        var17 = var5.bind(var6)(var2, var0);
                        _fun96761_ip = 350;
                        continue _fun96761;
                    case 295:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 14;
                        var2 = var7[var0];
                        var2 = var6.bind(var3)(var2);
                        var5 = var2.intl;
                        var2 = var5.string;
                        var0 = var7[var0];
                        var0 = var6.bind(var3)(var0);
                        var0 = var0.t;
                        var0 = var0.TXNS7S;
                        var17 = var2.bind(var5)(var0);
                    case 350:
                        var5 = _closure1_slot5;
                        var2 = var5.useState;
                        var6 = var22.text;
                        var0 = null;
                        var7 = var0 != var6;
                        var0 = '';
                        if (!var7) {
                            _fun96761_ip = 380;
                            continue _fun96761
                        }
                    case 377:
                        var0 = var6;
                    case 380:
                        var2 = var2.bind(var5)(var0);
                        var0 = _closure1_slot4;
                        var0 = var0.bind(var3)(var2, var4);
                        var20 = var0[var16];
                        _closure2_slot8 = var20;
                        var19 = var0[var1];
                        var1 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var0 = 15;
                        var0 = var25[var0];
                        var0 = var1.bind(var3)(var0);
                        var0 = var0.bind(var3)(var20);
                        var6 = var0.embed;
                        _closure2_slot9 = var6;
                        var0 = var0.isLoading;
                        _closure2_slot10 = var0;
                        var4 = _closure1_slot5;
                        var7 = var4.useCallback;
                        var5 = _closure1_slot3;
                        var2 = function*() { // Environment: var10
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun96765: for (var _fun96765_ip = 0;;) switch (_fun96765_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun96765_ip = 955;
                                            continue _fun96765
                                        }
                                    case 12:
                                        var1 = undefined;
                                        var6 = undefined;
                                        var _closure4_slot0 = var1;
                                        var _closure4_slot1 = var1;
                                        var _closure4_slot2 = var1;
                                        var7 = undefined;
                                        var2 = _closure2_slot7;
                                        var2 = var2.current;
                                        if (var2) {
                                            _fun96765_ip = 952;
                                            continue _fun96765
                                        }
                                    case 48:
                                        var2 = _closure2_slot7;
                                        var4 = true;
                                        var2.current = var4;
                                        var2 = _closure2_slot6;
                                        var2 = var2.bind(var1)(var4);
                                    case 69: // try_start_0
                                        var2 = global;
                                        var8 = var2.Promise;
                                        var5 = var8.all;
                                        var11 = _closure2_slot2;
                                        var10 = var11.map;
                                        var12 = _closure1_slot0;
                                        var13 = _closure1_slot2;
                                        var2 = 16;
                                        var2 = var13[var2];
                                        var2 = var12.bind(var1)(var2);
                                        var2 = var2.getOrResolveChannelIdFromDestinationId;
                                        var2 = var10.bind(var11)(var2);
                                        var2 = var5.bind(var8)(var2);
                                        SaveGenerator(address = 135);
                                    case 133:
                                        return var2;
                                    case 135:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun96765_ip = 903;
                                            continue _fun96765
                                        }
                                    case 144:
                                        var8 = var2.filter;
                                        var10 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var5 = 17;
                                        var5 = var11[var5];
                                        var5 = var10.bind(var1)(var5);
                                        var5 = var5.isNotNullish;
                                        var5 = var8.bind(var2)(var5);
                                        var6 = var5;
                                        var5 = var5.length;
                                        var8 = 0;
                                        if (!(var8 !== var5)) {
                                            _fun96765_ip = 797;
                                            continue _fun96765
                                        }
                                    case 197:
                                        var5 = _closure2_slot0;
                                        var11 = var5.attachments;
                                        _closure4_slot0 = var11;
                                        var10 = var11.map;
                                        var5 = function(arg0) { // Environment: var9
                                            _fun96766: for (var _fun96766_ip = 0;;) switch (_fun96766_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var1 = var0.mimeType;
                                                    var0 = null;
                                                    var2 = var0 != var1;
                                                    var0 = 'unknown';
                                                    if (!var2) {
                                                        _fun96766_ip = 25;
                                                        continue _fun96766
                                                    }
                                                case 22:
                                                    var0 = var1;
                                                case 25:
                                                    return var0;
                                            }
                                        };
                                        var5 = var10.bind(var11)(var5);
                                        _closure4_slot1 = var5;
                                        var10 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var5 = 19;
                                        var5 = var11[var5];
                                        var10 = var10.bind(var1)(var5);
                                        var12 = var6;
                                        var11 = var12.map;
                                        var5 = function() { // Environment: var9
                                            var3 = _closure1_slot3;
                                            var2 = undefined;
                                            var1 = function*(arg0) { // Environment: var0
                                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                                    _fun96769: for (var _fun96769_ip = 0;;) switch (_fun96769_ip) {
                                                        case 0:
                                                            StartGenerator();
                                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                            if (var1) {
                                                                _fun96769_ip = 217;
                                                                continue _fun96769
                                                            }
                                                        case 10:
                                                            var4 = _closure1_slot10;
                                                            var2 = var4.getChannel;
                                                            var1 = arg0;
                                                            var8 = var2.bind(var4)(var1);
                                                            var1 = null;
                                                            if (!(var1 != var8)) {
                                                                _fun96769_ip = 212;
                                                                continue _fun96769
                                                            }
                                                        case 39:
                                                            var4 = _closure1_slot0;
                                                            var2 = _closure1_slot2;
                                                            var1 = 18;
                                                            var1 = var2[var1];
                                                            var2 = undefined;
                                                            var5 = var4.bind(var2)(var1);
                                                            var4 = var5.sendShareMessage;
                                                            var1 = {};
                                                            var6 = _closure4_slot0;
                                                            var1.attachments = var6;
                                                            var1.channel = var8;
                                                            var6 = _closure2_slot8;
                                                            var1.comment = var6;
                                                            var1 = var4.bind(var5)(var1);
                                                            SaveGenerator(address = 106);
                                                        case 104:
                                                            return var1;
                                                        case 106:
                                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                            if (var4) {
                                                                _fun96769_ip = 209;
                                                                continue _fun96769
                                                            }
                                                        case 112:
                                                            var5 = _closure1_slot1;
                                                            var6 = _closure1_slot2;
                                                            var4 = 20;
                                                            var4 = var6[var4];
                                                            var6 = var5.bind(var2)(var4);
                                                            var5 = var6.track;
                                                            var3 = _closure1_slot12;
                                                            var4 = var3.SHARE_MESSAGE_SENT;
                                                            var3 = {};
                                                            var9 = var8.guild_id;
                                                            var3.guild_id = var9;
                                                            var9 = var8.id;
                                                            var3.channel_id = var9;
                                                            var8 = var8.type;
                                                            var3.channel_type = var8;
                                                            var8 = _closure4_slot0;
                                                            var8 = var8.length;
                                                            var3.num_attachments = var8;
                                                            var7 = _closure4_slot1;
                                                            var3.attachment_mimetypes = var7;
                                                            var3 = var5.bind(var6)(var4, var3);
                                                            return var2;
                                                        case 209:
                                                            return var1;
                                                        case 212:
                                                            var1 = false;
                                                            return var1;
                                                        case 217:
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var1 = var3.bind(var2)(var1);
                                            var _closure5_slot0 = var1;
                                            var0 = function() { // Environment: var0
                                                var0 = undefined;
                                                var3 = _closure5_slot0;
                                                var2 = var3.apply;
                                                var0 = arguments;
                                                var1 = var0;
                                                var0 = this;
                                                var0 = var2.bind(var3)(var0, var1);
                                                return var0;
                                            };
                                            return var0;
                                        };
                                        var5 = var5.bind(var1)();
                                        var5 = var11.bind(var12)(var5);
                                        var5 = var10.bind(var1)(var5);
                                        SaveGenerator(address = 285);
                                    case 283:
                                        return var5;
                                    case 285:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun96765_ip = 773;
                                            continue _fun96765
                                        }
                                    case 294:
                                        _closure4_slot2 = var5;
                                        var11 = var5.every;
                                        var10 = function(arg0) { // Environment: var9
                                            var0 = arg0;
                                            var1 = var0.status;
                                            var0 = 'fulfilled';
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var10 = var11.bind(var5)(var10);
                                        if (var10) {
                                            _fun96765_ip = 562;
                                            continue _fun96765
                                        }
                                    case 322:
                                        var12 = _closure2_slot2;
                                        var11 = var12.filter;
                                        var10 = function(arg0, arg1) { // Environment: var9
                                            var1 = _closure4_slot2;
                                            var0 = arg1;
                                            var0 = var1[var0];
                                            var1 = var0.status;
                                            var0 = 'rejected';
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var14 = var11.bind(var12)(var10);
                                        var11 = _closure1_slot5;
                                        var10 = var11.lazy;
                                        var9 = function() { // Environment: var9
                                            var2 = _closure1_slot0;
                                            var0 = _closure1_slot2;
                                            var1 = 24;
                                            var1 = var0[var1];
                                            var3 = undefined;
                                            var2 = var2.bind(var3)(var1);
                                            var1 = 23;
                                            var1 = var0[var1];
                                            var0 = var0.paths;
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                        };
                                        var13 = var10.bind(var11)(var9);
                                        var16 = _closure1_slot0;
                                        var19 = _closure1_slot2;
                                        var9 = 25;
                                        var9 = var19[var9];
                                        var12 = var16.bind(var1)(var9);
                                        var11 = var12.openAlert;
                                        var10 = _closure1_slot17;
                                        var9 = {};
                                        var15 = 14;
                                        var17 = var19[var15];
                                        var17 = var16.bind(var1)(var17);
                                        var20 = var17.intl;
                                        var18 = var20.string;
                                        var17 = var19[var15];
                                        var17 = var16.bind(var1)(var17);
                                        var17 = var17.t;
                                        var17 = var17.dA1gbw;
                                        var17 = var18.bind(var20)(var17);
                                        var9.title = var17;
                                        var17 = var19[var15];
                                        var17 = var16.bind(var1)(var17);
                                        var18 = var17.intl;
                                        var17 = var18.formatToPlainString;
                                        var15 = var19[var15];
                                        var15 = var16.bind(var1)(var15);
                                        var15 = var15.t;
                                        var16 = var15.thm88D;
                                        var15 = {};
                                        var19 = var14.length;
                                        var15.count = var19;
                                        var15 = var17.bind(var18)(var16, var15);
                                        var9.content = var15;
                                        var9.failedDestinations = var14;
                                        var10 = var10.bind(var1)(var13, var9);
                                        var9 = 'share-failed-alert-modal';
                                        var9 = var11.bind(var12)(var9, var10);
                                    case 536: // try_end0
                                        var9 = _closure2_slot6;
                                        var10 = false;
                                        var9 = var9.bind(var1)(var10);
                                        var9 = _closure2_slot7;
                                        var9.current = var10;
                                        _fun96765_ip = 952;
                                        continue _fun96765;
                                    case 562: // try_start_1
                                        var10 = var6[var8];
                                        var7 = var10;
                                        var8 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var6 = 21;
                                        var6 = var9[var6];
                                        var9 = var8.bind(var1)(var6);
                                        var8 = var9.fetchMessages;
                                        var6 = {};
                                        var6.channelId = var10;
                                        var6 = var8.bind(var9)(var6);
                                        SaveGenerator(address = 610);
                                    case 608:
                                        return var6;
                                    case 610:
                                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                                        if (var8) {
                                            _fun96765_ip = 749;
                                            continue _fun96765
                                        }
                                    case 619:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var10 = 22;
                                        var10 = var9[var10];
                                        var12 = var8.bind(var1)(var10);
                                        var11 = var12.transitionToChannel;
                                        var10 = var7;
                                        var7 = {
                                            'navigationReplace': true,
                                            'openTextInVoiceIfVoiceChannel': true
                                        };
                                        var7 = var11.bind(var12)(var10, var7);
                                        var7 = 12;
                                        var7 = var9[var7];
                                        var8 = var8.bind(var1)(var7);
                                        var7 = var8.isAndroid;
                                        var7 = var7.bind(var8)();
                                        if (!var7) {
                                            _fun96765_ip = 715;
                                            continue _fun96765
                                        }
                                    case 693:
                                        var7 = _closure1_slot6;
                                        var8 = var7.ShareManager;
                                        var7 = var8.launchApp;
                                        var7 = var7.bind(var8)();
                                    case 715:
                                        var7 = _closure2_slot1;
                                        var7 = var7.bind(var1)();
                                    case 723: // try_end1
                                        var8 = _closure2_slot6;
                                        var9 = false;
                                        var8 = var8.bind(var1)(var9);
                                        var8 = _closure2_slot7;
                                        var8.current = var9;
                                        var7 = undefined;
                                        return var7;
                                    case 749:
                                        var7 = _closure2_slot6;
                                        var8 = false;
                                        var7 = var7.bind(var1)(var8);
                                        var7 = _closure2_slot7;
                                        var7.current = var8;
                                        return var6;
                                    case 773:
                                        var6 = _closure2_slot6;
                                        var7 = false;
                                        var6 = var6.bind(var1)(var7);
                                        var6 = _closure2_slot7;
                                        var6.current = var7;
                                        return var5;
                                    case 797: // try_start_2
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var4 = 18;
                                        var4 = var10[var4];
                                        var6 = var9.bind(var1)(var4);
                                        var5 = var6.showInformationToast;
                                        var4 = 14;
                                        var7 = var10[var4];
                                        var7 = var9.bind(var1)(var7);
                                        var8 = var7.intl;
                                        var7 = var8.string;
                                        var4 = var10[var4];
                                        var4 = var9.bind(var1)(var4);
                                        var4 = var4.t;
                                        var4 = var4.wFcUiF;
                                        var4 = var7.bind(var8)(var4);
                                        var4 = var5.bind(var6)(var4);
                                    case 877: // try_end2
                                        var5 = _closure2_slot6;
                                        var6 = false;
                                        var5 = var5.bind(var1)(var6);
                                        var5 = _closure2_slot7;
                                        var5.current = var6;
                                        var4 = undefined;
                                        return var4;
                                    case 903:
                                        var4 = _closure2_slot6;
                                        var5 = false;
                                        var4 = var4.bind(var1)(var5);
                                        var4 = _closure2_slot7;
                                        var4.current = var5;
                                        return var2;
                                    case 927: // catch_target0 // catch_target1 // catch_target2
                                        CatchBlockStart(arg_register = 2);
                                        var5 = _closure2_slot6;
                                        var4 = false;
                                        var5 = var5.bind(var1)(var4);
                                        var3 = _closure2_slot7;
                                        var3.current = var4;
                                        throw var2;
                                    case 952:
                                        return var1;
                                    case 955:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var5 = var5.bind(var3)(var2);
                        var2 = new Array(4);
                        var2[0] = var27;
                        var2[1] = var24;
                        var11 = var22.attachments;
                        var2[2] = var11;
                        var2[3] = var20;
                        var13 = var7.bind(var4)(var5, var2);
                        var5 = var4.useMemo;
                        var2 = new Array(3);
                        var2[0] = var6;
                        var2[1] = var0;
                        var0 = var22.attachments;
                        var2[2] = var0;
                        var0 = function() { // Environment: var10
                            _fun96774: for (var _fun96774_ip = 0;;) switch (_fun96774_ip) {
                                case 0:
                                    var0 = _closure2_slot9;
                                    var12 = null;
                                    if (!(var12 == var0)) {
                                        _fun96774_ip = 39;
                                        continue _fun96774
                                    }
                                case 13:
                                    var0 = _closure2_slot0;
                                    var0 = var0.attachments;
                                    var2 = var0.length;
                                    var1 = 0;
                                    var0 = null;
                                    if (!(var1 !== var2)) {
                                        _fun96774_ip = 192;
                                        continue _fun96774
                                    }
                                case 39:
                                    var4 = _closure1_slot19;
                                    var3 = _closure1_slot18;
                                    var2 = {};
                                    var8 = _closure1_slot17;
                                    var7 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var1 = 26;
                                    var5 = var11[var1];
                                    var1 = undefined;
                                    var6 = var7.bind(var1)(var5);
                                    var5 = {};
                                    var9 = _closure2_slot0;
                                    var9 = var9.attachments;
                                    var5.attachments = var9;
                                    var9 = true;
                                    var5.isRevamp = var9;
                                    var6 = var8.bind(var1)(var6, var5);
                                    var5 = new Array(2);
                                    var5[0] = var6;
                                    var6 = 27;
                                    var6 = var11[var6];
                                    var7 = var7.bind(var1)(var6);
                                    var6 = {};
                                    var11 = _closure2_slot9;
                                    var12 = var12 == var11;
                                    var11 = undefined;
                                    if (var12) {
                                        _fun96774_ip = 153;
                                        continue _fun96774
                                    }
                                case 143:
                                    var12 = _closure2_slot9;
                                    var11 = var12.embed;
                                case 153:
                                    var6.embed = var11;
                                    var10 = _closure2_slot10;
                                    var6.isLoadingEmbed = var10;
                                    var6.isRevamp = var9;
                                    var6 = var8.bind(var1)(var7, var6);
                                    var5[1] = var6;
                                    var2.children = var5;
                                    var0 = var4.bind(var1)(var3, var2);
                                case 192:
                                    return var0;
                            }
                        };
                        var18 = var5.bind(var4)(var0, var2);
                        var0 = 28;
                        var0 = var25[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var21 = true;
                        var0.ignoreKeyboard = var21;
                        var0 = var1.bind(var3)(var0);
                        var0 = var0.height;
                        _closure2_slot11 = var0;
                        var2 = var4.useMemo;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var10
                            _fun96775: for (var _fun96775_ip = 0;;) switch (_fun96775_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 12;
                                    var0 = var3[var0];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var0);
                                    var0 = var2.isAndroid;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun96775_ip = 49;
                                        continue _fun96775
                                    }
                                case 38:
                                    var0 = {};
                                    var2 = 1;
                                    var0.flex = var2;
                                    _fun96775_ip = 113;
                                    continue _fun96775;
                                case 49:
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 29;
                                    var1 = var4[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.isMetaQuest;
                                    var1 = var1.bind(var2)();
                                    var2 = {};
                                    if (var1) {
                                        _fun96775_ip = 100;
                                        continue _fun96775
                                    }
                                case 84:
                                    var1 = _closure2_slot11;
                                    var2.height = var1;
                                    var1 = var2;
                                    _fun96775_ip = 110;
                                    continue _fun96775;
                                case 100:
                                    var3 = 1;
                                    var2.flex = var3;
                                    var1 = var2;
                                case 110:
                                    var0 = var1;
                                case 113:
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot19;
                        var1 = _closure1_slot7;
                        var0 = {};
                        var0.style = var4;
                        var5 = _closure1_slot17;
                        var4 = {};
                        var6 = var8.headerContainer;
                        var4.style = var6;
                        var11 = _closure1_slot0;
                        var6 = 30;
                        var6 = var25[var6];
                        var6 = var11.bind(var3)(var6);
                        var7 = var6.Header;
                        var6 = {};
                        var26 = var8.header;
                        var6.headerStyle = var26;
                        var26 = 14;
                        var28 = var25[var26];
                        var28 = var11.bind(var3)(var28);
                        var29 = var28.intl;
                        var28 = var29.string;
                        var26 = var25[var26];
                        var26 = var11.bind(var3)(var26);
                        var26 = var26.t;
                        var26 = var26["MR7/kg"];
                        var26 = var28.bind(var29)(var26);
                        var6.title = var26;
                        var10 = function(arg0) { // Original name: headerTitle, environment: var10
                            _fun96776: for (var _fun96776_ip = 0;;) switch (_fun96776_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = var0.children;
                                    var2 = _closure2_slot5;
                                    if (var2) {
                                        _fun96776_ip = 112;
                                        continue _fun96776
                                    }
                                case 21:
                                    var2 = _closure2_slot4;
                                    var1 = _closure1_slot15;
                                    var1 = var2 >= var1;
                                    var7 = undefined;
                                    var4 = undefined;
                                    if (!var1) {
                                        _fun96776_ip = 180;
                                        continue _fun96776
                                    }
                                case 43:
                                    var2 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 14;
                                    var3 = var8[var1];
                                    var3 = var2.bind(var7)(var3);
                                    var6 = var3.intl;
                                    var3 = var6.formatToPlainString;
                                    var1 = var8[var1];
                                    var1 = var2.bind(var7)(var1);
                                    var1 = var1.t;
                                    var2 = var1["3Fbkir"];
                                    var1 = {};
                                    var7 = _closure1_slot15;
                                    var1.count = var7;
                                    var4 = var3.bind(var6)(var2, var1);
                                    _fun96776_ip = 180;
                                    continue _fun96776;
                                case 112:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 14;
                                    var3 = var8[var1];
                                    var2 = undefined;
                                    var3 = var7.bind(var2)(var3);
                                    var6 = var3.intl;
                                    var3 = var6.formatToPlainString;
                                    var1 = var8[var1];
                                    var1 = var7.bind(var2)(var1);
                                    var1 = var1.t;
                                    var2 = var1["qqyp/e"];
                                    var1 = {};
                                    var7 = _closure1_slot14;
                                    var1.limit = var7;
                                    var4 = var3.bind(var6)(var2, var1);
                                case 180:
                                    var3 = _closure1_slot17;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 31;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.GenericHeaderTitle;
                                    var0 = {};
                                    var0.title = var5;
                                    var0.subtitle = var4;
                                    var4 = 'text-feedback-warning';
                                    var0.subtitleColor = var4;
                                    var4 = 'redesign/heading-18/bold';
                                    var0.variant = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var6.headerTitle = var10;
                        var10 = 'center';
                        var6.headerTitleAlign = var10;
                        var10 = 32;
                        var10 = var25[var10];
                        var26 = var11.bind(var3)(var10);
                        var10 = var26.getHeaderCloseButton;
                        var10 = var10.bind(var26)(var27);
                        var6.headerLeft = var10;
                        var10 = 12;
                        var10 = var25[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.isIOS;
                        var11 = var10.bind(var11)();
                        var10 = undefined;
                        if (!var11) {
                            _fun96761_ip = 805;
                            continue _fun96761
                        }
                    case 803:
                        var10 = 0;
                    case 805:
                        var6.headerStatusBarHeight = var10;
                        var6 = var5.bind(var3)(var7, var6);
                        var4.children = var6;
                        var5 = var5.bind(var3)(var1, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot19;
                        var6 = _closure1_slot7;
                        var5 = {};
                        var8 = var8.content;
                        var5.style = var8;
                        var11 = _closure1_slot17;
                        var10 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var8 = 33;
                        var8 = var25[var8];
                        var10 = var10.bind(var3)(var8);
                        var8 = {};
                        var25 = _closure1_slot16;
                        var25 = var25.TOGGLE;
                        var8.rowMode = var25;
                        var8.initialSelectedDestinations = var24;
                        var8.onSelectedDestinationChange = var23;
                        var22 = var22.attachments;
                        var22 = var22.length;
                        var23 = var22 > var16;
                        var22 = undefined;
                        if (!var23) {
                            _fun96761_ip = 928;
                            continue _fun96761
                        }
                    case 924:
                        var22 = _closure1_slot21;
                    case 928:
                        var8.getRowIsUnavailable = var22;
                        var8.insetEnd = var16;
                        var8.disableGradient = var21;
                        var8.disableStickySections = var21;
                        var21 = _closure1_slot15;
                        var21 = var15 >= var21;
                        if (var21) {
                            _fun96761_ip = 962;
                            continue _fun96761
                        }
                    case 959:
                        var21 = var12;
                    case 962:
                        var8.disableSelection = var21;
                        var10 = var11.bind(var3)(var10, var8);
                        var8 = new Array(2);
                        var8[0] = var10;
                        var11 = _closure1_slot17;
                        var10 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var9 = 34;
                        var9 = var21[var9];
                        var10 = var10.bind(var3)(var9);
                        var9 = {};
                        var9.text = var20;
                        var9.setText = var19;
                        var9.preview = var18;
                        var9.sendLabel = var17;
                        var15 = var15 > var16;
                        if (!var15) {
                            _fun96761_ip = 1036;
                            continue _fun96761
                        }
                    case 1033:
                        var15 = !var12;
                    case 1036:
                        var9.canSend = var15;
                        var9.isSending = var14;
                        var9.onSend = var13;
                        var9.disabled = var12;
                        var9 = var11.bind(var3)(var10, var9);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1376, 1372, 3050, 660, 8837, 8838, 33, 1297, 478, 671, 1234, 12560, 6581, 1304, 12561, 3321, 795, 8404, 3897, 9128, 1307, 3982, 12562, 12563, 1464, 4059, 4665, 8844, 4661, 9028, 12564, 2]);