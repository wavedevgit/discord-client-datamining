// modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun102476: for (var _fun102476_ip = 0;;) switch (_fun102476_ip) {
        case 0:
            var7 = require;
            var15 = metroImportDefault;
            var4 = metroImportAll;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var15;
            var _closure1_slot2 = var4;
            var _closure1_slot3 = var8;
            var0 = function arg0() {
                _fun102477: for (var _fun102477_ip = 0;;) switch (_fun102477_ip) {
                    case 0:
                        var0 = arg0;
                        var13 = var0.users;
                        var3 = var0.max;
                        var4 = undefined;
                        if (!(var3 === var4)) {
                            _fun102477_ip = 25;
                            continue _fun102477
                        }
                    case 22:
                        var3 = 5;
                    case 25:
                        var _closure2_slot0 = var3;
                        var1 = var0.guildId;
                        var _closure2_slot1 = var1;
                        var19 = var0.audienceCount;
                        var6 = var0.isLiveStreaming;
                        var _closure2_slot2 = var4;
                        var _closure2_slot3 = var4;
                        var0 = global;
                        var2 = var0.Math;
                        var1 = var2.max;
                        var0 = var13.length;
                        var0 = var0 - var3;
                        var14 = 0;
                        var0 = var1.bind(var2)(var0, var14);
                        _closure2_slot2 = var0;
                        var1 = _closure1_slot23;
                        var0 = _closure1_slot19;
                        var16 = var1.bind(var4)(var0);
                        _closure2_slot3 = var16;
                        var0 = var13.length;
                        if (!(var14 === var0)) {
                            _fun102477_ip = 139;
                            continue _fun102477
                        }
                    case 121:
                        var0 = null;
                        if (!(var0 != var19)) {
                            _fun102477_ip = 131;
                            continue _fun102477
                        }
                    case 127:
                        if (!(var14 === var19)) {
                            _fun102477_ip = 139;
                            continue _fun102477
                        }
                    case 131:
                        var0 = null;
                        if (!var6) {
                            _fun102477_ip = 533;
                            continue _fun102477
                        }
                    case 139:
                        var3 = _closure1_slot14;
                        var2 = _closure1_slot5;
                        var1 = {};
                        var8 = var16.container;
                        var1.style = var8;
                        var8 = var13.map;
                        var5 = function(arg0, arg1) { // Environment: var5
                            _fun102478: for (var _fun102478_ip = 0;;) switch (_fun102478_ip) {
                                case 0:
                                    var7 = arg1;
                                    var0 = _closure2_slot0;
                                    if (!(!(var7 >= var0))) {
                                        _fun102478_ip = 374;
                                        continue _fun102478
                                    }
                                case 17:
                                    var0 = _closure2_slot0;
                                    var12 = 1;
                                    var0 = var0 - var12;
                                    if (!(var7 === var0)) {
                                        _fun102478_ip = 45;
                                        continue _fun102478
                                    }
                                case 32:
                                    var0 = _closure2_slot2;
                                    var6 = 0;
                                    if (!(!(var0 > var6))) {
                                        _fun102478_ip = 179;
                                        continue _fun102478
                                    }
                                case 45:
                                    var3 = _closure1_slot13;
                                    var2 = _closure1_slot5;
                                    var1 = {};
                                    var0 = _closure2_slot3;
                                    var4 = var0.wrapper;
                                    var0 = new Array(2);
                                    var0[0] = var4;
                                    var4 = 0;
                                    var4 = var4 !== var7;
                                    if (!var4) {
                                        _fun102478_ip = 98;
                                        continue _fun102478
                                    }
                                case 85:
                                    var5 = {};
                                    var8 = 4;
                                    var5.marginLeft = var8;
                                    var4 = var5;
                                case 98:
                                    var0[1] = var4;
                                    var1.style = var0;
                                    var8 = _closure1_slot13;
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot3;
                                    var0 = 17;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var5 = var5.bind(var0)(var4);
                                    var4 = {};
                                    var10 = arg0;
                                    var4.user = var10;
                                    var10 = _closure2_slot1;
                                    var4.guildId = var10;
                                    var9 = _closure1_slot18;
                                    var4.size = var9;
                                    var4 = var8.bind(var0)(var5, var4);
                                    var1.children = var4;
                                    var0 = var3.bind(var0)(var2, var1, var7);
                                    _fun102478_ip = 372;
                                    continue _fun102478;
                                case 179:
                                    var5 = _closure1_slot13;
                                    var4 = _closure1_slot5;
                                    var3 = {};
                                    var1 = _closure2_slot3;
                                    var8 = var1.wrapper;
                                    var1 = new Array(2);
                                    var1[0] = var8;
                                    var6 = var6 !== var7;
                                    if (!var6) {
                                        _fun102478_ip = 230;
                                        continue _fun102478
                                    }
                                case 217:
                                    var7 = {};
                                    var8 = 4;
                                    var7.marginLeft = var8;
                                    var6 = var7;
                                case 230:
                                    var1[1] = var6;
                                    var3.style = var1;
                                    var7 = _closure1_slot13;
                                    var6 = _closure1_slot5;
                                    var1 = {};
                                    var8 = _closure2_slot3;
                                    var8 = var8.overflowCircle;
                                    var1.style = var8;
                                    var10 = _closure1_slot13;
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot3;
                                    var2 = 16;
                                    var8 = var8[var2];
                                    var2 = undefined;
                                    var8 = var9.bind(var2)(var8);
                                    var9 = var8.Text;
                                    var8 = {
                                        'variant': 'text-xs/medium',
                                        'lineClamp': 1,
                                        'maxFontSizeMultiplier': 1
                                    };
                                    var11 = _closure2_slot2;
                                    var13 = var11 + var12;
                                    var11 = global;
                                    var11 = var11.HermesInternal;
                                    var12 = var11.concat;
                                    var11 = '+';
                                    var11 = var12.bind(var11)(var13);
                                    var8.children = var11;
                                    var8 = var10.bind(var2)(var9, var8);
                                    var1.children = var8;
                                    var1 = var7.bind(var2)(var6, var1);
                                    var3.children = var1;
                                    var1 = 'overflow';
                                    var0 = var5.bind(var2)(var4, var3, var1);
                                case 372:
                                    return var0;
                                case 374:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var8 = var8.bind(var13)(var5);
                        var5 = new Array(3);
                        var5[0] = var8;
                        var8 = null;
                        var8 = var8 != var19;
                        if (!var8) {
                            _fun102477_ip = 196;
                            continue _fun102477
                        }
                    case 192:
                        var8 = var19 > var14;
                    case 196:
                        if (!var8) {
                            _fun102477_ip = 466;
                            continue _fun102477
                        }
                    case 202:
                        var11 = _closure1_slot13;
                        var10 = _closure1_slot5;
                        var9 = {};
                        var15 = var16.wrapper;
                        var12 = new Array(2);
                        var12[0] = var15;
                        var13 = var13.length;
                        var13 = var13 > var14;
                        if (!var13) {
                            _fun102477_ip = 251;
                            continue _fun102477
                        }
                    case 238:
                        var14 = {};
                        var15 = 4;
                        var14.marginLeft = var15;
                        var13 = var14;
                    case 251:
                        var12[1] = var13;
                        var9.style = var12;
                        var14 = _closure1_slot14;
                        var13 = _closure1_slot5;
                        var12 = {};
                        var17 = var16.badge;
                        var15 = new Array(2);
                        var15[0] = var17;
                        var16 = var16.audienceBadge;
                        var15[1] = var16;
                        var12.style = var15;
                        var18 = _closure1_slot13;
                        var17 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var15 = 18;
                        var15 = var20[var15];
                        var15 = var17.bind(var4)(var15);
                        var16 = var15.HeadphonesIcon;
                        var15 = {};
                        var21 = 'custom';
                        var15.size = var21;
                        var21 = 19;
                        var21 = var20[var21];
                        var23 = var17.bind(var4)(var21);
                        var22 = var23.makeSizeStyle;
                        var21 = 14;
                        var21 = var22.bind(var23)(var21);
                        var15.style = var21;
                        var16 = var18.bind(var4)(var16, var15);
                        var15 = new Array(2);
                        var15[0] = var16;
                        var18 = _closure1_slot13;
                        var16 = 16;
                        var16 = var20[var16];
                        var16 = var17.bind(var4)(var16);
                        var17 = var16.Text;
                        var16 = {
                            'variant': 'text-xs/semibold',
                            'style': null,
                            'maxFontSizeMultiplier': 1
                        };
                        var20 = {};
                        var21 = 4;
                        var20.marginLeft = var21;
                        var16.style = var20;
                        var16.children = var19;
                        var16 = var18.bind(var4)(var17, var16);
                        var15[1] = var16;
                        var12.children = var15;
                        var12 = var14.bind(var4)(var13, var12);
                        var9.children = var12;
                        var8 = var11.bind(var4)(var10, var9);
                    case 466:
                        var5[1] = var8;
                        if (!var6) {
                            _fun102477_ip = 519;
                            continue _fun102477
                        }
                    case 473:
                        var9 = _closure1_slot13;
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var7 = 20;
                        var7 = var10[var7];
                        var8 = var8.bind(var4)(var7);
                        var7 = {};
                        var10 = {};
                        var11 = 4;
                        var10.marginLeft = var11;
                        var7.style = var10;
                        var6 = var9.bind(var4)(var8, var7);
                    case 519:
                        var5[2] = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 533:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function arg0() {
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun102480: for (var _fun102480_ip = 0;;) switch (_fun102480_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102480_ip = 129;
                                continue _fun102480
                            }
                        case 13:
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.dismissGlobalKeyboard;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot0;
                            var1 = var2.isGuildVoice;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            if (var1) {
                                _fun102480_ip = 102;
                                continue _fun102480
                            }
                        case 73:
                            var1 = 23;
                            var1 = var4[var1];
                            var6 = var2.bind(var3)(var1);
                            var5 = var6.connectAndOpen;
                            var1 = _closure2_slot0;
                            var1 = var5.bind(var6)(var1);
                            _fun102480_ip = 129;
                            continue _fun102480;
                        case 102:
                            var1 = 22;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.openGuildVoiceModal;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot27 = var0;
            var0 = function arg0() {
                _fun102481: for (var _fun102481_ip = 0;;) switch (_fun102481_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.channel;
                        var7 = var0.label;
                        var8 = var0.disabled;
                        var3 = undefined;
                        if (!(var8 === var3)) {
                            _fun102481_ip = 26;
                            continue _fun102481
                        }
                    case 24:
                        var8 = false;
                    case 26:
                        var0 = _closure1_slot24;
                        var5 = var0.bind(var3)();
                        var2 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var0 = 24;
                        var0 = var13[var0];
                        var0 = var2.bind(var3)(var0);
                        var12 = var0.bind(var3)();
                        var0 = 25;
                        var0 = var13[var0];
                        var0 = var2.bind(var3)(var0);
                        var10 = var0.bind(var3)();
                        var0 = _closure1_slot27;
                        var9 = var0.bind(var3)(var1);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var5 = var5.button;
                        var0.style = var5;
                        var6 = _closure1_slot13;
                        var11 = _closure1_slot0;
                        var4 = 26;
                        var4 = var13[var4];
                        var4 = var11.bind(var3)(var4);
                        var5 = var4.Button;
                        var4 = {};
                        var4.onPress = var9;
                        var9 = 27;
                        var9 = var13[var9];
                        var11 = var11.bind(var3)(var9);
                        var9 = var11.isThemeLight;
                        var12 = var9.bind(var11)(var12);
                        var11 = 'tertiary';
                        var9 = var11;
                        if (!var12) {
                            _fun102481_ip = 181;
                            continue _fun102481
                        }
                    case 171:
                        var9 = var11;
                        if (var10) {
                            _fun102481_ip = 181;
                            continue _fun102481
                        }
                    case 177:
                        var9 = 'active';
                    case 181:
                        var4.variant = var9;
                        var9 = 'sm';
                        var4.size = var9;
                        var4.disabled = var8;
                        var4.text = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function arg0() {
                _fun102482: for (var _fun102482_ip = 0;;) switch (_fun102482_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = var1.guildEvent;
                        var9 = var1.channel;
                        var _closure2_slot0 = var9;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 28;
                        var2 = var7[var1];
                        var3 = undefined;
                        var11 = var6.bind(var3)(var2);
                        var10 = var11.useStateFromStoresArray;
                        var2 = _closure1_slot10;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = function() { // Environment: var0
                            var2 = _closure1_slot10;
                            var1 = var2.getVoiceStatesForChannel;
                            var0 = _closure2_slot0;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.user;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var11 = var10.bind(var11)(var5, var2);
                        var2 = var7[var1];
                        var12 = var6.bind(var3)(var2);
                        var10 = var12.useStateFromStores;
                        var2 = _closure1_slot9;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = function() { // Environment: var0
                            var3 = _closure1_slot9;
                            var2 = var3.can;
                            var0 = _closure1_slot12;
                            var1 = var0.CONNECT;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var10.bind(var12)(var5, var2);
                        var1 = var7[var1];
                        var10 = var6.bind(var3)(var1);
                        var2 = var10.useStateFromStores;
                        var12 = _closure1_slot8;
                        var1 = new Array(1);
                        var1[0] = var12;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot8;
                            var1 = var2.getAllApplicationStreamsForChannel;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.length;
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var10 = var2.bind(var10)(var1, var0);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot25;
                        var0 = {};
                        var12 = 29;
                        var13 = var7[var12];
                        var13 = var6.bind(var3)(var13);
                        var15 = var13.intl;
                        var14 = var15.string;
                        var13 = var7[var12];
                        var13 = var6.bind(var3)(var13);
                        var13 = var13.t;
                        var13 = var13["X2K3/4"];
                        var13 = var14.bind(var15)(var13);
                        var0.heading = var13;
                        var4 = var4.name;
                        var0.topic = var4;
                        var4 = var9.name;
                        var0.location = var4;
                        var4 = 30;
                        var4 = var7[var4];
                        var13 = var6.bind(var3)(var4);
                        var4 = var13.getChannelIconComponent;
                        var4 = var4.bind(var13)(var9);
                        var0.LocationIcon = var4;
                        var4 = 31;
                        var4 = var7[var4];
                        var4 = var6.bind(var3)(var4);
                        var4 = var4.CalendarIcon;
                        var0.LiveIcon = var4;
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot26;
                        var4 = {};
                        var13 = var9.guild_id;
                        var4.guildId = var13;
                        var4.users = var11;
                        var4.isLiveStreaming = var10;
                        var4 = var7.bind(var3)(var6, var4);
                        var0.voiceUsers = var4;
                        var4 = undefined;
                        if (!var5) {
                            _fun102482_ip = 407;
                            continue _fun102482
                        }
                    case 331:
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot28;
                        var5 = {};
                        var5.channel = var9;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var9 = var8[var12];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var8[var12];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.VJlc0S;
                        var8 = var9.bind(var10)(var8);
                        var5.label = var8;
                        var4 = var7.bind(var3)(var6, var5);
                    case 407:
                        var0.joinButton = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot29 = var0;
            var0 = function arg0() {
                _fun102487: for (var _fun102487_ip = 0;;) switch (_fun102487_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.guildEvent;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 32;
                        var0 = var2[var0];
                        var4 = undefined;
                        var1 = var1.bind(var4)(var0);
                        var0 = var1.getLocationFromEvent;
                        var12 = var0.bind(var1)(var8);
                        var0 = null;
                        var1 = var0 == var12;
                        if (var1) {
                            _fun102487_ip = 245;
                            continue _fun102487
                        }
                    case 57:
                        var3 = _closure1_slot13;
                        var2 = _closure1_slot25;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var6 = 29;
                        var10 = var9[var6];
                        var10 = var7.bind(var4)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var6 = var9[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.TxqPQR;
                        var6 = var10.bind(var11)(var6);
                        var1.heading = var6;
                        var6 = var8.name;
                        var1.topic = var6;
                        var6 = 33;
                        var6 = var9[var6];
                        var11 = var7.bind(var4)(var6);
                        var10 = var11.guildEventDetailsParser;
                        var6 = true;
                        var6 = var10.bind(var11)(var12, var6);
                        var1.location = var6;
                        var6 = 34;
                        var6 = var9[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.LocationIcon;
                        var1.LocationIcon = var6;
                        var6 = 31;
                        var6 = var9[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.CalendarIcon;
                        var1.LiveIcon = var6;
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot31;
                        var5 = {};
                        var5.guildEvent = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.joinButton = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 245:
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var0 = function arg0() {
                var1 = arg0;
                var7 = var1.guildEvent;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot24;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 35;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildEventDetails;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var1.eventId = var5;
                    var1.event = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.button;
                var0.style = var5;
                var6 = _closure1_slot13;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var4 = 26;
                var4 = var11[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Button;
                var4 = {
                    'onPress': null,
                    'variant': 'active',
                    'size': 'sm'
                };
                var4.onPress = var7;
                var7 = 29;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.z4FcDs;
                var7 = var8.bind(var9)(var7);
                var4.text = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot31 = var0;
            var0 = function arg0() {
                _fun102490: for (var _fun102490_ip = 0;;) switch (_fun102490_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = var1.stageInstance;
                        var9 = var1.channel;
                        var _closure2_slot0 = var9;
                        var16 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 36;
                        var1 = var6[var1];
                        var3 = undefined;
                        var7 = var16.bind(var3)(var1);
                        var5 = var7.useStageParticipants;
                        var2 = var9.id;
                        var1 = 37;
                        var1 = var6[var1];
                        var1 = var16.bind(var3)(var1);
                        var1 = var1.StageChannelParticipantNamedIndex;
                        var1 = var1.SPEAKER;
                        var5 = var5.bind(var7)(var2, var1);
                        var2 = var5.filter;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 37;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.StageChannelParticipantTypes;
                            var0 = var0.VOICE;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.map;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var13 = var2.bind(var5)(var1);
                        var1 = 28;
                        var2 = var6[var1];
                        var11 = var16.bind(var3)(var2);
                        var10 = var11.useStateFromStores;
                        var2 = _closure1_slot6;
                        var7 = new Array(1);
                        var7[0] = var2;
                        var2 = var9.id;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = function() { // Environment: var0
                            var3 = _closure1_slot6;
                            var2 = var3.getParticipantCount;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 37;
                            var4 = var4[var0];
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4);
                            var0 = var0.StageChannelParticipantNamedIndex;
                            var0 = var0.AUDIENCE;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var10 = var10.bind(var11)(var7, var2, var5);
                        var1 = var6[var1];
                        var5 = var16.bind(var3)(var1);
                        var2 = var5.useStateFromStores;
                        var7 = _closure1_slot9;
                        var1 = new Array(1);
                        var1[0] = var7;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot9;
                            var2 = var3.can;
                            var0 = _closure1_slot12;
                            var1 = var0.CONNECT;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var5 = var2.bind(var5)(var1, var0);
                        var0 = 38;
                        var0 = var6[var0];
                        var2 = var16.bind(var3)(var0);
                        var1 = var2.useStageHasStream;
                        var0 = var9.id;
                        var11 = var1.bind(var2)(var0);
                        var0 = 39;
                        var0 = var6[var0];
                        var2 = var16.bind(var3)(var0);
                        var1 = var2.useGuildActiveEvent;
                        var0 = var9.guild_id;
                        var7 = var1.bind(var2)(var0);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot25;
                        var0 = {};
                        var12 = 29;
                        var14 = var6[var12];
                        var14 = var16.bind(var3)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var6 = var6[var12];
                        var6 = var16.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6["X2K3/4"];
                        var6 = var14.bind(var15)(var6);
                        var0.heading = var6;
                        var6 = var9.name;
                        var0.location = var6;
                        var6 = null;
                        var15 = var6 != var7;
                        var14 = undefined;
                        if (!var15) {
                            _fun102490_ip = 384;
                            continue _fun102490
                        }
                    case 353:
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot3;
                        var15 = 30;
                        var15 = var17[var15];
                        var16 = var16.bind(var3)(var15);
                        var15 = var16.getChannelIconComponent;
                        var14 = var15.bind(var16)(var9);
                    case 384:
                        var0.LocationIcon = var14;
                        if (!(var6 == var7)) {
                            _fun102490_ip = 421;
                            continue _fun102490
                        }
                    case 393:
                        var7 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var6 = 40;
                        var6 = var14[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.StageIcon;
                        _fun102490_ip = 447;
                        continue _fun102490;
                    case 421:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var7 = 31;
                        var7 = var15[var7];
                        var7 = var14.bind(var3)(var7);
                        var6 = var7.CalendarIcon;
                    case 447:
                        var0.LiveIcon = var6;
                        var4 = var4.topic;
                        var0.topic = var4;
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot26;
                        var4 = {};
                        var14 = var9.guild_id;
                        var4.guildId = var14;
                        var4.users = var13;
                        var4.isLiveStreaming = var11;
                        var4.audienceCount = var10;
                        var4 = var7.bind(var3)(var6, var4);
                        var0.voiceUsers = var4;
                        var4 = undefined;
                        if (!var5) {
                            _fun102490_ip = 589;
                            continue _fun102490
                        }
                    case 513:
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot28;
                        var5 = {};
                        var5.channel = var9;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var9 = var8[var12];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var8[var12];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8["7vb2cc"];
                        var8 = var9.bind(var10)(var8);
                        var5.label = var8;
                        var4 = var7.bind(var3)(var6, var5);
                    case 589:
                        var0.joinButton = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot32 = var0;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var16 = 0;
            var3 = var8[var16];
            var0 = undefined;
            var9 = var4.bind(var0)(var3);
            var _closure1_slot4 = var9;
            var3 = 1;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 2;
            var3 = var8[var3];
            var3 = var15.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 3;
            var3 = var8[var3];
            var3 = var15.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var17 = 4;
            var3 = var8[var17];
            var3 = var15.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 5;
            var3 = var8[var3];
            var3 = var15.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var8[var3];
            var3 = var15.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var13 = 7;
            var3 = var8[var13];
            var3 = var7.bind(var0)(var3);
            var3 = var3.GuildScheduledEventEntityTypes;
            var _closure1_slot11 = var3;
            var3 = 8;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var3.Permissions;
            var _closure1_slot12 = var3;
            var3 = 9;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var4 = var3.jsx;
            var _closure1_slot13 = var4;
            var4 = var3.jsxs;
            var _closure1_slot14 = var4;
            var3 = var3.Fragment;
            var _closure1_slot15 = var3;
            var14 = 10;
            var3 = var8[var14];
            var3 = var15.bind(var0)(var3);
            var3 = var3.spacing;
            var4 = var3.PX_8;
            var _closure1_slot16 = var4;
            var3 = var8[var14];
            var3 = var15.bind(var0)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_12;
            var _closure1_slot17 = var3;
            var5 = 11;
            var6 = var8[var5];
            var6 = var7.bind(var0)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.XSMALL;
            var _closure1_slot18 = var6;
            var5 = var8[var5];
            var5 = var7.bind(var0)(var5);
            var5 = var5.AVATAR_SIZE_MAP;
            var5 = var5[var6];
            var _closure1_slot19 = var5;
            var5 = var8[var14];
            var5 = var15.bind(var0)(var5);
            var5 = var5.spacing;
            var19 = var5.PX_12;
            var _closure1_slot20 = var19;
            var5 = var8[var14];
            var5 = var15.bind(var0)(var5);
            var5 = var5.spacing;
            var12 = var5.PX_8;
            var _closure1_slot21 = var12;
            var5 = var8[var14];
            var5 = var15.bind(var0)(var5);
            var5 = var5.spacing;
            var18 = var5.PX_4;
            var _closure1_slot22 = var18;
            var5 = 15;
            var6 = var8[var5];
            var11 = var7.bind(var0)(var6);
            var10 = var11.createStyles;
            var6 = function(arg0) { // Environment: var1
                var6 = arg0;
                var0 = {};
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var2 = _closure1_slot21;
                var1.marginTop = var2;
                var0.container = var1;
                var1 = {
                    'backgroundColor': null,
                    'borderRadius': null,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'height': null,
                    'paddingHorizontal': 6
                };
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 10;
                var8 = var5[var2];
                var3 = undefined;
                var8 = var4.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_MOD_STRONG;
                var1.backgroundColor = var8;
                var8 = var5[var2];
                var8 = var4.bind(var3)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var1.height = var6;
                var0.overflowCircle = var1;
                var1 = {};
                var8 = var5[var2];
                var8 = var4.bind(var3)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var8 = var5[var2];
                var8 = var4.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_BASE_LOW;
                var1.backgroundColor = var8;
                var7 = _closure1_slot19;
                var1.height = var7;
                var0.wrapper = var1;
                var1 = {
                    'borderRadius': null,
                    'paddingHorizontal': 8,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var7 = var5[var2];
                var7 = var4.bind(var3)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var1.height = var6;
                var0.badge = var1;
                var1 = {};
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_FEEDBACK_NOTIFICATION;
                var1.backgroundColor = var6;
                var0.liveBadge = var1;
                var1 = {};
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWER;
                var1.backgroundColor = var2;
                var0.audienceBadge = var1;
                return var0;
            };
            var6 = var10.bind(var11)(var6);
            var _closure1_slot23 = var6;
            var5 = var8[var5];
            var10 = var7.bind(var0)(var5);
            var6 = var10.createStyles;
            var5 = {};
            var11 = {};
            var11.padding = var19;
            var5.card = var11;
            var11 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var5.row = var11;
            var11 = {};
            var11.marginTop = var18;
            var5.infoRow = var11;
            var11 = {};
            var11.marginEnd = var17;
            var5.liveNowIcon = var11;
            var11 = {};
            var17 = 'uppercase';
            var11.textTransform = var17;
            var5.uppercase = var11;
            var11 = {};
            var17 = 13;
            var17 = var8[var17];
            var18 = var7.bind(var0)(var17);
            var17 = var18.isAndroid;
            var17 = var17.bind(var18)();
            if (!var17) {
                _fun102476_ip = 669;
                continue _fun102476
            }
        case 663:
            var16 = -2;
        case 669:
            var11.marginTop = var16;
            var5.headingText = var11;
            var11 = {
                'width': 7,
                'height': 7,
                'marginRight': 7
            };
            var16 = var8[var14];
            var16 = var15.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.STATUS_POSITIVE;
            var11.backgroundColor = var16;
            var14 = var8[var14];
            var14 = var15.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.xs;
            var11.borderRadius = var14;
            var5.liveDot = var11;
            var11 = {};
            var11.marginRight = var13;
            var5.calendarIcon = var11;
            var11 = {};
            var11.marginTop = var12;
            var5.topic = var11;
            var11 = {};
            var11.marginTop = var12;
            var5.button = var11;
            var5 = var6.bind(var10)(var5);
            var _closure1_slot24 = var5;
            var6 = var9.memo;
            var5 = function(arg0) { // Environment: var1
                _fun102496: for (var _fun102496_ip = 0;;) switch (_fun102496_ip) {
                    case 0:
                        var0 = arg0;
                        var12 = var0.heading;
                        var17 = var0.location;
                        var19 = var0.LocationIcon;
                        var9 = var0.topic;
                        var18 = var0.isLiveStreaming;
                        var11 = var0.LiveIcon;
                        var6 = var0.voiceUsers;
                        var5 = var0.joinButton;
                        var0 = _closure1_slot24;
                        var3 = undefined;
                        var20 = var0.bind(var3)();
                        var2 = _closure1_slot14;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var4 = {};
                        var7 = var20.row;
                        var4.style = var7;
                        var13 = null;
                        if (!(var13 == var11)) {
                            _fun102496_ip = 119;
                            continue _fun102496
                        }
                    case 91:
                        var10 = _closure1_slot13;
                        var8 = _closure1_slot5;
                        var7 = {};
                        var14 = var20.liveDot;
                        var7.style = var14;
                        var8 = var10.bind(var3)(var8, var7);
                        _fun102496_ip = 153;
                        continue _fun102496;
                    case 119:
                        var10 = _closure1_slot13;
                        var7 = {
                            'size': 'xxs',
                            'color': 'status-positive'
                        };
                        var14 = var20.calendarIcon;
                        var7.style = var14;
                        var8 = var10.bind(var3)(var11, var7);
                    case 153:
                        var7 = new Array(2);
                        var7[0] = var8;
                        var11 = _closure1_slot13;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var14 = 16;
                        var8 = var8[var14];
                        var8 = var10.bind(var3)(var8);
                        var10 = var8.Text;
                        var8 = {};
                        var16 = 'text-xs/semibold';
                        if (!var18) {
                            _fun102496_ip = 207;
                            continue _fun102496
                        }
                    case 201:
                        var16 = 'text-xs/bold';
                    case 207:
                        var8.variant = var16;
                        var16 = 'status-positive';
                        var8.color = var16;
                        var21 = var20.headingText;
                        var16 = new Array(2);
                        var16[0] = var21;
                        if (!var18) {
                            _fun102496_ip = 244;
                            continue _fun102496
                        }
                    case 238:
                        var18 = var20.uppercase;
                    case 244:
                        var16[1] = var18;
                        var8.style = var16;
                        var8.children = var12;
                        var8 = var11.bind(var3)(var10, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var7 = var2.bind(var3)(var1, var4);
                        var4 = new Array(5);
                        var4[0] = var7;
                        var4[1] = var6;
                        var8 = _closure1_slot13;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var14];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.Text;
                        var6 = {
                            'style': null,
                            'lineClamp': 1,
                            'variant': 'text-md/semibold',
                            'color': 'redesign-channel-name-text'
                        };
                        var10 = var20.topic;
                        var6.style = var10;
                        var6.children = var9;
                        var6 = var8.bind(var3)(var7, var6);
                        var4[2] = var6;
                        var8 = _closure1_slot13;
                        var7 = _closure1_slot5;
                        var6 = {};
                        var10 = var20.row;
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = var20.infoRow;
                        var9[1] = var10;
                        var6.style = var9;
                        var9 = var13 != var17;
                        if (!var9) {
                            _fun102496_ip = 570;
                            continue _fun102496
                        }
                    case 402:
                        var12 = _closure1_slot14;
                        var11 = _closure1_slot15;
                        var10 = {};
                        var16 = var13 != var19;
                        if (!var16) {
                            _fun102496_ip = 455;
                            continue _fun102496
                        }
                    case 419:
                        var18 = _closure1_slot13;
                        var13 = {
                            'style': null,
                            'size': 'xxs',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var20 = var20.liveNowIcon;
                        var13.style = var20;
                        var16 = var18.bind(var3)(var19, var13);
                    case 455:
                        var13 = new Array(2);
                        var13[0] = var16;
                        var16 = _closure1_slot13;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var14 = var21[var14];
                        var14 = var20.bind(var3)(var14);
                        var15 = var14.Text;
                        var14 = {
                            'lineClamp': 1,
                            'variant': 'text-xs/medium',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var18 = {};
                        var19 = 13;
                        var19 = var21[var19];
                        var20 = var20.bind(var3)(var19);
                        var19 = var20.isAndroid;
                        var20 = var19.bind(var20)();
                        var19 = 0;
                        if (!var20) {
                            _fun102496_ip = 538;
                            continue _fun102496
                        }
                    case 532:
                        var19 = -2;
                    case 538:
                        var18.marginTop = var19;
                        var14.style = var18;
                        var14.children = var17;
                        var14 = var16.bind(var3)(var15, var14);
                        var13[1] = var14;
                        var10.children = var13;
                        var9 = var12.bind(var3)(var11, var10);
                    case 570:
                        var6.children = var9;
                        var6 = var8.bind(var3)(var7, var6);
                        var4[3] = var6;
                        var4[4] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var5 = var6.bind(var9)(var5);
            var _closure1_slot25 = var5;
            var6 = var9.memo;
            var5 = function(arg0) { // Environment: var1
                _fun102497: for (var _fun102497_ip = 0;;) switch (_fun102497_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.guild;
                        var9 = var1.style;
                        var3 = _closure1_slot24;
                        var4 = undefined;
                        var8 = var3.bind(var4)();
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var6 = 41;
                        var6 = var5[var6];
                        var10 = var3.bind(var4)(var6);
                        var7 = var10.useActiveEventOrStageInstanceChannel;
                        var6 = var0.id;
                        var12 = var7.bind(var10)(var6);
                        var _closure2_slot0 = var12;
                        var6 = 39;
                        var6 = var5[var6];
                        var7 = var3.bind(var4)(var6);
                        var6 = var7.useGuildActiveEvent;
                        var0 = var0.id;
                        var11 = var6.bind(var7)(var0);
                        var _closure2_slot1 = var11;
                        var0 = 28;
                        var0 = var5[var0];
                        var7 = var3.bind(var4)(var0);
                        var6 = var7.useStateFromStores;
                        var0 = _closure1_slot7;
                        var5 = new Array(1);
                        var5[0] = var0;
                        var3 = new Array(1);
                        var3[0] = var12;
                        var0 = function() { // Environment: var2
                            _fun102498: for (var _fun102498_ip = 0;;) switch (_fun102498_ip) {
                                case 0:
                                    var2 = _closure1_slot7;
                                    var1 = var2.getStageInstanceByChannel;
                                    var4 = _closure2_slot0;
                                    var0 = null;
                                    var4 = var0 == var4;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun102498_ip = 40;
                                        continue _fun102498
                                    }
                                case 31:
                                    var3 = _closure2_slot0;
                                    var0 = var3.id;
                                case 40:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var13 = var6.bind(var7)(var5, var0, var3);
                        var0 = _closure1_slot27;
                        var7 = var0.bind(var4)(var12);
                        var6 = _closure1_slot4;
                        var5 = var6.useCallback;
                        var0 = null;
                        var3 = var0 == var12;
                        var10 = undefined;
                        if (var3) {
                            _fun102497_ip = 185;
                            continue _fun102497
                        }
                    case 180:
                        var10 = var12.id;
                    case 185:
                        var3 = new Array(2);
                        var3[0] = var10;
                        var3[1] = var11;
                        var2 = function() { // Environment: var2
                            _fun102499: for (var _fun102499_ip = 0;;) switch (_fun102499_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var1 = null;
                                    if (!(var1 == var0)) {
                                        _fun102499_ip = 86;
                                        continue _fun102499
                                    }
                                case 13:
                                    var0 = _closure2_slot0;
                                    var4 = var1 == var0;
                                    var2 = undefined;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun102499_ip = 37;
                                        continue _fun102499
                                    }
                                case 28:
                                    var4 = _closure2_slot0;
                                    var0 = var4.id;
                                case 37:
                                    if (!(var1 != var0)) {
                                        _fun102499_ip = 143;
                                        continue _fun102499
                                    }
                                case 41:
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var0 = 42;
                                    var0 = var4[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.openChannelLongPressActionSheet;
                                    var0 = _closure2_slot0;
                                    var0 = var0.id;
                                    var0 = var1.bind(var2)(var0);
                                    _fun102499_ip = 143;
                                    continue _fun102499;
                                case 86:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 35;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.openGuildEventDetails;
                                    var0 = {};
                                    var3 = _closure2_slot1;
                                    var4 = var3.id;
                                    var0.eventId = var4;
                                    var0.event = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 143:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var5.bind(var6)(var2, var3);
                        var2 = var0 == var11;
                        var3 = undefined;
                        if (var2) {
                            _fun102497_ip = 225;
                            continue _fun102497
                        }
                    case 219:
                        var3 = var11.entity_type;
                    case 225:
                        var2 = _closure1_slot11;
                        var2 = var2.EXTERNAL;
                        if (!(var3 !== var2)) {
                            _fun102497_ip = 317;
                            continue _fun102497
                        }
                    case 239:
                        if (!(var0 != var12)) {
                            _fun102497_ip = 247;
                            continue _fun102497
                        }
                    case 243:
                        if (!(var0 == var13)) {
                            _fun102497_ip = 290;
                            continue _fun102497
                        }
                    case 247:
                        var2 = var0 != var12;
                        if (!var2) {
                            _fun102497_ip = 258;
                            continue _fun102497
                        }
                    case 254:
                        var2 = var0 != var11;
                    case 258:
                        var5 = null;
                        if (!var2) {
                            _fun102497_ip = 338;
                            continue _fun102497
                        }
                    case 263:
                        var10 = _closure1_slot13;
                        var3 = _closure1_slot29;
                        var2 = {};
                        var2.guildEvent = var11;
                        var2.channel = var12;
                        var5 = var10.bind(var4)(var3, var2);
                        _fun102497_ip = 338;
                        continue _fun102497;
                    case 290:
                        var10 = _closure1_slot13;
                        var3 = _closure1_slot32;
                        var2 = {};
                        var2.stageInstance = var13;
                        var2.channel = var12;
                        var5 = var10.bind(var4)(var3, var2);
                        _fun102497_ip = 338;
                        continue _fun102497;
                    case 317:
                        var10 = _closure1_slot13;
                        var3 = _closure1_slot30;
                        var2 = {};
                        var2.guildEvent = var11;
                        var5 = var10.bind(var4)(var3, var2);
                    case 338:
                        var2 = var0 == var5;
                        var0 = null;
                        if (var2) {
                            _fun102497_ip = 428;
                            continue _fun102497
                        }
                    case 347:
                        var3 = _closure1_slot13;
                        var2 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 43;
                        var1 = var10[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.Card;
                        var1 = {};
                        var10 = 'secondary';
                        var1.variant = var10;
                        var10 = var8.card;
                        var8 = new Array(2);
                        var8[0] = var10;
                        var8[1] = var9;
                        var1.style = var8;
                        var1.onPress = var7;
                        var1.onLongPress = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 428:
                        return var0;
                }
            };
            var5 = var6.bind(var9)(var5);
            var6 = 44;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = 'modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx';
            var6 = var7.bind(var8)(var6);
            var2.default = var5;
            var2.LIVE_CHANNEL_NOTICE_MARGIN_TOP = var4;
            var2.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = var3;
            var1 = function arg0, arg1() {
                _fun102500: for (var _fun102500_ip = 0;;) switch (_fun102500_ip) {
                    case 0:
                        var11 = arg0;
                        var0 = arg1;
                        var4 = var0.hasSpeakers;
                        var1 = var0.hasButton;
                        var3 = var0.hasAudience;
                        var2 = var0.hasStream;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var10 = 12;
                        var5 = var5[var10];
                        var9 = undefined;
                        var7 = var6.bind(var9)(var5);
                        var6 = var7.scaleTextLineHeight;
                        var5 = 'text-xs/bold';
                        var7 = var6.bind(var7)(var5, var11);
                        if (var4) {
                            _fun102500_ip = 84;
                            continue _fun102500
                        }
                    case 76:
                        if (var3) {
                            _fun102500_ip = 84;
                            continue _fun102500
                        }
                    case 79:
                        var6 = 0;
                        if (!var2) {
                            _fun102500_ip = 96;
                            continue _fun102500
                        }
                    case 84:
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot19;
                        var6 = var3 + var2;
                    case 96:
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = var8[var10];
                        var12 = var3.bind(var9)(var2);
                        var5 = var12.scaleTextLineHeight;
                        var2 = 'text-md/semibold';
                        var2 = var5.bind(var12)(var2, var11);
                        var5 = var4 + var2;
                        var4 = _closure1_slot22;
                        var2 = 13;
                        var2 = var8[var2];
                        var3 = var3.bind(var9)(var2);
                        var2 = var3.isAndroid;
                        var8 = var2.bind(var3)();
                        var2 = 0;
                        if (!var8) {
                            _fun102500_ip = 174;
                            continue _fun102500
                        }
                    case 168:
                        var2 = -2;
                    case 174:
                        var4 = var4 + var2;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var10];
                        var10 = var8.bind(var9)(var2);
                        var8 = var10.scaleTextLineHeight;
                        var2 = 'text-xs/medium';
                        var2 = var8.bind(var10)(var2, var11);
                        var4 = var4 + var2;
                        var3 = 0;
                        if (!var1) {
                            _fun102500_ip = 256;
                            continue _fun102500
                        }
                    case 222:
                        var2 = _closure1_slot21;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 14;
                        var1 = var10[var1];
                        var1 = var8.bind(var9)(var1);
                        var1 = var1.SMALL_BUTTON_HEIGHT;
                        var3 = var2 + var1;
                    case 256:
                        var1 = _closure1_slot16;
                        var2 = _closure1_slot20;
                        var1 = var1 + var2;
                        var1 = var1 + var7;
                        var1 = var1 + var6;
                        var1 = var1 + var5;
                        var1 = var1 + var4;
                        var1 = var1 + var3;
                        var1 = var1 + var2;
                        var0 = _closure1_slot17;
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.getScaledLiveChannelNoticeHeight = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4245, 1377, 3715, 3093, 3527, 1378, 483, 33, 671, 5506, 7049, 478, 4088, 1297, 3942, 5504, 10715, 8872, 8071, 1582, 7947, 5962, 3247, 8796, 4084, 3207, 566, 1234, 4809, 8253, 8174, 8235, 8184, 8257, 8482, 5713, 4244, 8152, 4862, 13349, 9182, 4902, 2]);