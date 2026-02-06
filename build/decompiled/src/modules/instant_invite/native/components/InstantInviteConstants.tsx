// modules/instant_invite/native/components/InstantInviteConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67640: for (var _fun67640_ip = 0;;) switch (_fun67640_ip) {
        case 0:
            var6 = require;
            var13 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var13;
            var _closure1_slot2 = var7;
            var12 = global;
            var4 = var12.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var18 = true;
            var1.value = var18;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var1 = 0;
            var3 = var7[var1];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
            var3 = var3.Linking;
            var _closure1_slot3 = var3;
            var5 = 1;
            var3 = var7[var5];
            var3 = var6.bind(var0)(var3);
            var10 = var3.SHARE_APPS_KEY;
            var _closure1_slot4 = var10;
            var3 = var3.SHARE_URLS;
            var _closure1_slot5 = var3;
            var8 = 2;
            var3 = var7[var8];
            var3 = var6.bind(var0)(var3);
            var4 = var3.InviteOptionsType;
            var _closure1_slot6 = var4;
            var3 = var3.SendTypes;
            var _closure1_slot7 = var3;
            var4 = {};
            var4.SHARE = var1;
            var3 = 'SHARE';
            var4[var1] = var3;
            var4.COPY = var5;
            var3 = 'COPY';
            var4[var5] = var3;
            var4.QR_CODE = var8;
            var3 = 'QR_CODE';
            var4[var8] = var3;
            var19 = 3;
            var4.MESSAGES = var19;
            var3 = 'MESSAGES';
            var4[var19] = var3;
            var17 = 4;
            var4.MAIL = var17;
            var3 = 'MAIL';
            var4[var17] = var3;
            var3 = 5;
            var4.FB_MESSENGER = var3;
            var8 = 'FB_MESSENGER';
            var4[var3] = var8;
            var11 = 6;
            var4.GMAIL = var11;
            var8 = 'GMAIL';
            var4[var11] = var8;
            var11 = 7;
            var4.TELEGRAM = var11;
            var8 = 'TELEGRAM';
            var4[var11] = var8;
            var16 = 8;
            var4.TWITTER = var16;
            var8 = 'TWITTER';
            var4[var16] = var8;
            var15 = 9;
            var4.WHATSAPP = var15;
            var8 = 'WHATSAPP';
            var4[var15] = var8;
            var14 = 10;
            var4.LINE = var14;
            var8 = 'LINE';
            var4[var14] = var8;
            var8 = {};
            var20 = var4.SHARE;
            var8.type = var20;
            var19 = var7[var19];
            var19 = var13.bind(var0)(var19);
            var8.icon = var19;
            var20 = var12.Promise;
            var19 = var20.resolve;
            var19 = var19.bind(var20)(var18);
            var8.isAvailable = var19;
            var17 = var7[var17];
            var17 = var13.bind(var0)(var17);
            var8.IconComponent = var17;
            var3 = var7[var3];
            var3 = var13.bind(var0)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.BRAND_500;
            var8.backgroundColor = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.wPadMa;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var3;
            var3 = function arg0() {
                var0 = arg0;
                var9 = var0.channel;
                var4 = var0.code;
                var8 = var0.message;
                var7 = var0.location;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var6.bind(var0)(var1);
                var0 = var1.handleOpenShareSheet;
                var11 = var1;
                var10 = var4;
                var0 = var11[var0](var10, var9, var8, var7, var6);
                return var0;
            };
            var8.onPress = var3;
            var3 = new Array(11);
            var3[0] = var8;
            var8 = {};
            var17 = var4.COPY;
            var8.type = var17;
            var16 = var7[var16];
            var16 = var13.bind(var0)(var16);
            var8.icon = var16;
            var17 = var12.Promise;
            var16 = var17.resolve;
            var16 = var16.bind(var17)(var18);
            var8.isAvailable = var16;
            var15 = var7[var15];
            var15 = var13.bind(var0)(var15);
            var8.IconComponent = var15;
            var15 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.WqhZss;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var15;
            var15 = function arg0() {
                var0 = arg0;
                var4 = var0.channel;
                var3 = var0.code;
                var2 = var0.location;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var0 = var1.handleCopy;
                var0 = var0.bind(var1)(var3, var4, var2);
                return var0;
            };
            var8.onPress = var15;
            var3[1] = var8;
            var8 = {};
            var15 = var4.QR_CODE;
            var8.type = var15;
            var14 = var7[var14];
            var14 = var13.bind(var0)(var14);
            var8.icon = var14;
            var15 = var12.Promise;
            var14 = var15.resolve;
            var12 = 11;
            var12 = var7[var12];
            var16 = var6.bind(var0)(var12);
            var12 = var16.isMetaQuest;
            var12 = var12.bind(var16)();
            var12 = !var12;
            if (!var12) {
                _fun67640_ip = 638;
                continue _fun67640
            }
        case 592:
            var16 = 12;
            var16 = var7[var16];
            var16 = var6.bind(var0)(var16);
            var18 = var16.InstantInviteQRCodeExperiment;
            var17 = var18.getConfig;
            var16 = {};
            var19 = 'InstantInviteConstants';
            var16.location = var19;
            var16 = var17.bind(var18)(var16);
            var12 = var16.enabled;
        case 638:
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = 13;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.IconComponent = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.rriLm1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var9 = var0.code;
                var1 = var0.channel;
                var7 = var0.location;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 14;
                var3 = var11[var0];
                var0 = undefined;
                var6 = var10.bind(var0)(var3);
                var5 = var6.openLazy;
                var3 = _closure1_slot0;
                var2 = 16;
                var2 = var11[var2];
                var4 = var3.bind(var0)(var2);
                var2 = 15;
                var3 = var11[var2];
                var2 = var11.paths;
                var4 = var4.bind(var0)(var3, var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'InstantInviteQRCodeActionSheet-';
                var14 = var3.bind(var2)(var9);
                var2 = {};
                var8 = 17;
                var8 = var11[var8];
                var8 = var10.bind(var0)(var8);
                var8 = var8.bind(var0)(var9);
                var2.link = var8;
                var2.location = var7;
                var2.channel = var1;
                var12 = 'stack';
                var16 = var6;
                var15 = var4;
                var13 = var2;
                var1 = var16[var5](var15, var14, var13, var12, var11);
                return var0;
            };
            var8.onPress = var12;
            var3[2] = var8;
            var8 = {};
            var12 = var4.MESSAGES;
            var8.type = var12;
            var14 = 18;
            var12 = var7[var14];
            var15 = var6.bind(var0)(var12);
            var12 = var15.isIOS;
            var15 = var12.bind(var15)();
            var12 = undefined;
            if (!var15) {
                _fun67640_ip = 742;
                continue _fun67640
            }
        case 730:
            var15 = 19;
            var15 = var7[var15];
            var12 = var13.bind(var0)(var15);
        case 742:
            var8.fullIcon = var12;
            var12 = var7[var14];
            var15 = var6.bind(var0)(var12);
            var12 = var15.isAndroid;
            var15 = var12.bind(var15)();
            var12 = undefined;
            if (!var15) {
                _fun67640_ip = 783;
                continue _fun67640
            }
        case 771:
            var15 = 20;
            var15 = var7[var15];
            var12 = var13.bind(var0)(var15);
        case 783:
            var8.icon = var12;
            var12 = 21;
            var15 = var7[var12];
            var16 = var6.bind(var0)(var15);
            var15 = var16.canSendSMS;
            var15 = var15.bind(var16)();
            var8.isAvailable = var15;
            var15 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.AQKfCj;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var15;
            var15 = function arg0() {
                _fun67648: for (var _fun67648_ip = 0;;) switch (_fun67648_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.channel;
                        var _closure2_slot0 = var11;
                        var10 = var0.code;
                        var _closure2_slot1 = var10;
                        var5 = var0.message;
                        var12 = var0.location;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 7;
                        var3 = var6[var0];
                        var0 = undefined;
                        var8 = var4.bind(var0)(var3);
                        var7 = var8.trackOptionClicked;
                        var3 = _closure1_slot6;
                        var13 = var3.SMS;
                        var16 = var8;
                        var15 = var10;
                        var14 = var11;
                        var3 = var16[var7](var15, var14, var13, var12, var11);
                        var3 = 18;
                        var3 = var6[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if (!var3) {
                            _fun67648_ip = 142;
                            continue _fun67648
                        }
                    case 112:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                    case 142:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.sendSMS;
                        var2 = {};
                        var2.body = var5;
                        var1 = function(arg0, arg1, arg2) { // Environment: var1
                            _fun67649: for (var _fun67649_ip = 0;;) switch (_fun67649_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (!var0) {
                                        _fun67649_ip = 133;
                                        continue _fun67649
                                    }
                                case 9:
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 22;
                                    var0 = var2[var0];
                                    var6 = undefined;
                                    var2 = var1.bind(var6)(var0);
                                    var1 = var2.trackInvite;
                                    var0 = {};
                                    var3 = _closure2_slot1;
                                    var0.inviteKey = var3;
                                    var7 = _closure2_slot0;
                                    var3 = null;
                                    var7 = var3 == var7;
                                    if (var7) {
                                        _fun67649_ip = 76;
                                        continue _fun67649
                                    }
                                case 67:
                                    var5 = _closure2_slot0;
                                    var6 = var5.id;
                                case 76:
                                    var7 = var3 != var6;
                                    var5 = null;
                                    if (!var7) {
                                        _fun67649_ip = 88;
                                        continue _fun67649
                                    }
                                case 85:
                                    var5 = var6;
                                case 88:
                                    var0.channelId = var5;
                                    var0.messageId = var3;
                                    var3 = 'SMS Option';
                                    var0.location = var3;
                                    var3 = {};
                                    var4 = _closure1_slot7;
                                    var4 = var4.SMS;
                                    var3.send_type = var4;
                                    var0.overrideProperties = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 133:
                                    var0 = arg2;
                                    if (!var0) {
                                        _fun67649_ip = 239;
                                        continue _fun67649
                                    }
                                case 139:
                                    var1 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 23;
                                    var0 = var8[var0];
                                    var7 = undefined;
                                    var2 = var1.bind(var7)(var0);
                                    var1 = var2.show;
                                    var0 = {};
                                    var6 = _closure1_slot0;
                                    var3 = 6;
                                    var4 = var8[var3];
                                    var4 = var6.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var3 = var8[var3];
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var3.t;
                                    var3 = var3["1ieAR5"];
                                    var3 = var4.bind(var5)(var3);
                                    var0.body = var3;
                                    var3 = true;
                                    var0.isDismissable = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 239:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var8.onPress = var15;
            var3[3] = var8;
            var8 = {};
            var15 = var4.MAIL;
            var8.type = var15;
            var15 = var7[var14];
            var16 = var6.bind(var0)(var15);
            var15 = var16.isIOS;
            var16 = var15.bind(var16)();
            var15 = undefined;
            if (!var16) {
                _fun67640_ip = 889;
                continue _fun67640
            }
        case 877:
            var16 = 24;
            var16 = var7[var16];
            var15 = var13.bind(var0)(var16);
        case 889:
            var8.fullIcon = var15;
            var14 = var7[var14];
            var15 = var6.bind(var0)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if (!var15) {
                _fun67640_ip = 930;
                continue _fun67640
            }
        case 918:
            var15 = 25;
            var15 = var7[var15];
            var14 = var13.bind(var0)(var15);
        case 930:
            var8.icon = var14;
            var12 = var7[var12];
            var14 = var6.bind(var0)(var12);
            var12 = var14.canSendMail;
            var12 = var12.bind(var14)();
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.QaAypP;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                _fun67651: for (var _fun67651_ip = 0;;) switch (_fun67651_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.channel;
                        var _closure2_slot0 = var11;
                        var10 = var0.code;
                        var _closure2_slot1 = var10;
                        var5 = var0.message;
                        var12 = var0.location;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 7;
                        var3 = var6[var0];
                        var0 = undefined;
                        var8 = var4.bind(var0)(var3);
                        var7 = var8.trackOptionClicked;
                        var3 = _closure1_slot6;
                        var13 = var3.EMAIL;
                        var16 = var8;
                        var15 = var10;
                        var14 = var11;
                        var3 = var16[var7](var15, var14, var13, var12, var11);
                        var3 = 18;
                        var3 = var6[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if (!var3) {
                            _fun67651_ip = 142;
                            continue _fun67651
                        }
                    case 112:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 14;
                        var3 = var6[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                    case 142:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.sendMail;
                        var2 = {};
                        var6 = '';
                        var2.subject = var6;
                        var2.body = var5;
                        var1 = function(arg0, arg1, arg2) { // Environment: var1
                            _fun67652: for (var _fun67652_ip = 0;;) switch (_fun67652_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (!var0) {
                                        _fun67652_ip = 133;
                                        continue _fun67652
                                    }
                                case 9:
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 22;
                                    var0 = var2[var0];
                                    var6 = undefined;
                                    var2 = var1.bind(var6)(var0);
                                    var1 = var2.trackInvite;
                                    var0 = {};
                                    var3 = _closure2_slot1;
                                    var0.inviteKey = var3;
                                    var7 = _closure2_slot0;
                                    var3 = null;
                                    var7 = var3 == var7;
                                    if (var7) {
                                        _fun67652_ip = 76;
                                        continue _fun67652
                                    }
                                case 67:
                                    var5 = _closure2_slot0;
                                    var6 = var5.id;
                                case 76:
                                    var7 = var3 != var6;
                                    var5 = null;
                                    if (!var7) {
                                        _fun67652_ip = 88;
                                        continue _fun67652
                                    }
                                case 85:
                                    var5 = var6;
                                case 88:
                                    var0.channelId = var5;
                                    var0.messageId = var3;
                                    var3 = 'Email Option';
                                    var0.location = var3;
                                    var3 = {};
                                    var4 = _closure1_slot7;
                                    var4 = var4.EMAIL;
                                    var3.send_type = var4;
                                    var0.overrideProperties = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 133:
                                    var0 = arg2;
                                    if (!var0) {
                                        _fun67652_ip = 239;
                                        continue _fun67652
                                    }
                                case 139:
                                    var1 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 23;
                                    var0 = var8[var0];
                                    var7 = undefined;
                                    var2 = var1.bind(var7)(var0);
                                    var1 = var2.show;
                                    var0 = {};
                                    var6 = _closure1_slot0;
                                    var3 = 6;
                                    var4 = var8[var3];
                                    var4 = var6.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var3 = var8[var3];
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var3.t;
                                    var3 = var3["1ieAR5"];
                                    var3 = var4.bind(var5)(var3);
                                    var0.body = var3;
                                    var3 = true;
                                    var0.isDismissable = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 239:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var8.onPress = var12;
            var3[4] = var8;
            var8 = {};
            var12 = var4.FB_MESSENGER;
            var8.type = var12;
            var12 = 26;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var12 = var7[var11];
            var15 = var6.bind(var0)(var12);
            var14 = var15.isAppInstalled;
            var12 = var10.MESSENGER;
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.P0R3ZF;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var11 = var0.channel;
                var7 = var0.code;
                var9 = var0.location;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 17;
                var2 = var4[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var5 = var2.bind(var0)(var7);
                var3 = _closure1_slot0;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var10 = var2.MESSENGER;
                var13 = var4;
                var12 = var7;
                var2 = var13[var3](var12, var11, var10, var9, var8);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.MESSENGER;
                var1 = var4[var1];
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var12;
            var3[5] = var8;
            var8 = {};
            var12 = var4.GMAIL;
            var8.type = var12;
            var12 = 27;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var12 = var7[var11];
            var15 = var6.bind(var0)(var12);
            var14 = var15.isAppInstalled;
            var12 = var10.GMAIL;
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["14o9ZT"];
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var11 = var0.channel;
                var7 = var0.code;
                var6 = var0.message;
                var9 = var0.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var10 = var2.GMAIL;
                var13 = var4;
                var12 = var7;
                var2 = var13[var3](var12, var11, var10, var9, var8);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var5 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.GMAIL;
                var4 = var5[var1];
                var1 = '';
                var1 = var4.bind(var5)(var1, var6);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var12;
            var3[6] = var8;
            var8 = {};
            var12 = var4.TELEGRAM;
            var8.type = var12;
            var12 = 28;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var12 = var7[var11];
            var15 = var6.bind(var0)(var12);
            var14 = var15.isAppInstalled;
            var12 = var10.TELEGRAM;
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["148qIV"];
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var12 = var0.channel;
                var8 = var0.code;
                var6 = var0.message;
                var10 = var0.location;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 17;
                var2 = var4[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var5 = var2.bind(var0)(var8);
                var3 = _closure1_slot0;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var11 = var2.TELEGRAM;
                var14 = var4;
                var13 = var8;
                var2 = var14[var3](var13, var12, var11, var10, var9);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.TELEGRAM;
                var1 = var4[var1];
                var1 = var1.bind(var4)(var6, var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var12;
            var3[7] = var8;
            var8 = {};
            var12 = var4.TWITTER;
            var8.type = var12;
            var12 = 29;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var12 = var7[var11];
            var15 = var6.bind(var0)(var12);
            var14 = var15.isAppInstalled;
            var12 = var10.TWITTER;
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.oAiltV;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var11 = var0.channel;
                var7 = var0.code;
                var5 = var0.message;
                var9 = var0.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var10 = var2.TWITTER;
                var13 = var4;
                var12 = var7;
                var2 = var13[var3](var12, var11, var10, var9, var8);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.TWITTER;
                var1 = var4[var1];
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var12;
            var3[8] = var8;
            var8 = {};
            var12 = var4.WHATSAPP;
            var8.type = var12;
            var12 = 30;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var12 = var7[var11];
            var15 = var6.bind(var0)(var12);
            var14 = var15.isAppInstalled;
            var12 = var10.WHATSAPP;
            var12 = var14.bind(var15)(var12);
            var8.isAvailable = var12;
            var12 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.viazhS;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var12;
            var12 = function arg0() {
                var0 = arg0;
                var11 = var0.channel;
                var7 = var0.code;
                var5 = var0.message;
                var9 = var0.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var10 = var2.WHATSAPP;
                var13 = var4;
                var12 = var7;
                var2 = var13[var3](var12, var11, var10, var9, var8);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.WHATSAPP;
                var1 = var4[var1];
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var12;
            var3[9] = var8;
            var8 = {};
            var12 = var4.LINE;
            var8.type = var12;
            var12 = 31;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var8.fullIcon = var12;
            var11 = var7[var11];
            var12 = var6.bind(var0)(var11);
            var11 = var12.isAppInstalled;
            var10 = var10.LINE;
            var10 = var11.bind(var12)(var10);
            var8.isAvailable = var10;
            var10 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.kqgslH;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.getLabel = var10;
            var9 = function arg0() {
                var0 = arg0;
                var11 = var0.channel;
                var7 = var0.code;
                var5 = var0.message;
                var9 = var0.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackOptionClicked;
                var2 = _closure1_slot6;
                var10 = var2.LINE;
                var13 = var4;
                var12 = var7;
                var2 = var13[var3](var12, var11, var10, var9, var8);
                var3 = _closure1_slot3;
                var2 = var3.openURL;
                var4 = _closure1_slot5;
                var1 = _closure1_slot4;
                var1 = var1.LINE;
                var1 = var4[var1];
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8.onPress = var9;
            var3[10] = var8;
            var8 = var3[var1];
            var1 = new Array(2);
            var1[0] = var8;
            var5 = var3[var5];
            var1[1] = var5;
            var5 = 32;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/instant_invite/native/components/InstantInviteConstants.tsx';
            var5 = var6.bind(var7)(var5);
            var2.ShareItemType = var4;
            var2.SHARE_ITEMS = var3;
            var2.SHARE_ITEMS_DEFAULT = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8366, 660, 8387, 8196, 671, 1234, 8356, 8390, 3257, 8391, 4107, 8392, 8393, 3280, 8394, 1307, 6573, 478, 8409, 8410, 3622, 6550, 3938, 8411, 7611, 8412, 8413, 8414, 8415, 8416, 8417, 2]);