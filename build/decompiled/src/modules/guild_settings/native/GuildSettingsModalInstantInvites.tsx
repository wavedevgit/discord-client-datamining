// modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun116943: for (var _fun116943_ip = 0;;) switch (_fun116943_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPauseInvites;
                var5 = var0.invitesDisabled;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 11;
                var1 = var0[var8];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var8];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Uwsjn6;
                var6 = var1.bind(var2)(var0);
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var8];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                if (var5) {
                    _fun116943_ip = 179;
                    continue _fun116943
                }
            case 100:
                var11 = var2.format;
                var1 = var0[var8];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var9 = var1.IFBHag;
                var1 = {};
                var13 = _closure1_slot1;
                var12 = 12;
                var12 = var0[var12];
                var14 = var13.bind(var3)(var12);
                var13 = var14.getArticleURL;
                var12 = _closure1_slot11;
                var12 = var12.INVITE_DISABLED;
                var12 = var13.bind(var14)(var12);
                var1.helpArticleUrl = var12;
                var9 = var11.bind(var2)(var9, var1);
                _fun116943_ip = 211;
                continue _fun116943;
            case 179:
                var1 = var2.string;
                var0 = var0[var8];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["2LLbj9"];
                var9 = var1.bind(var2)(var0);
            case 211:
                var2 = _closure1_slot12;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 13;
                var0 = var11[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.TableCheckboxRow;
                var0 = {};
                var0.label = var6;
                var8 = _closure1_slot12;
                var6 = 14;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.TextWithIOSLinkWorkaround;
                var6 = {};
                var11 = 'text-xs/medium';
                var6.variant = var11;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.subLabel = var6;
                var6 = null;
                if (!var5) {
                    _fun116943_ip = 359;
                    continue _fun116943
                }
            case 301:
                var9 = _closure1_slot12;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 15;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TableRowIcon;
                var7 = {};
                var11 = _closure1_slot1;
                var10 = 16;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var7.source = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 359:
                var0.icon = var6;
                var0.checked = var5;
                var0.onPress = var4;
                var4 = true;
                var0.start = var4;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = function arg0() {
        _fun116944: for (var _fun116944_ip = 0;;) switch (_fun116944_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.invites;
                var _closure2_slot0 = var3;
                var8 = var1.guild;
                var _closure2_slot1 = var8;
                var11 = var1.showChannel;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun116944_ip = 38;
                    continue _fun116944
                }
            case 36:
                var11 = false;
            case 38:
                var _closure2_slot2 = var11;
                var7 = var1.contentContainerStyle;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var2 = _closure1_slot15;
                var6 = var2.bind(var4)();
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 17;
                var9 = var2[var9];
                var10 = var5.bind(var4)(var9);
                var9 = var10.useInvitesDisabledPermission;
                var14 = var9.bind(var10)(var8);
                _closure2_slot3 = var14;
                var13 = 18;
                var2 = var2[var13];
                var10 = var5.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getGuildIncident;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var9.bind(var10)(var5, var2);
                _closure2_slot4 = var17;
                var9 = var8.features;
                var5 = var9.has;
                var2 = _closure1_slot10;
                var2 = var2.INVITES_DISABLED;
                var10 = var5.bind(var9)(var2);
                if (var10) {
                    _fun116944_ip = 296;
                    continue _fun116944
                }
            case 205:
                var5 = null;
                var9 = var5 == var17;
                var2 = undefined;
                if (var9) {
                    _fun116944_ip = 222;
                    continue _fun116944
                }
            case 216:
                var2 = var17.invitesDisabledUntil;
            case 222:
                var2 = var5 != var2;
                if (!var2) {
                    _fun116944_ip = 293;
                    continue _fun116944
                }
            case 229:
                var5 = global;
                var15 = var5.Date;
                var20 = var17.invitesDisabledUntil;
                var12 = var15.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var15
                    }
                });
                var21 = var12;
                var9 = new var21[var15](var20, var19);
                var9 = var9 instanceof Object ? var9 : var12;
                var5 = var5.Date;
                var12 = var5.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var5
                    }
                });
                var21 = var12;
                var5 = new var21[var5](var20);
                var5 = var5 instanceof Object ? var5 : var12;
                var2 = var9 > var5;
            case 293:
                var10 = var2;
            case 296:
                _closure2_slot5 = var10;
                var9 = _closure1_slot4;
                var5 = var9.useState;
                var2 = false;
                var5 = var5.bind(var9)(var2);
                var2 = _closure1_slot3;
                var16 = 2;
                var5 = var2.bind(var4)(var5, var16);
                var2 = 0;
                var9 = var5[var2];
                _closure2_slot6 = var9;
                var15 = 1;
                var5 = var5[var15];
                _closure2_slot7 = var5;
                var18 = _closure1_slot4;
                var12 = var18.useState;
                var5 = 21;
                var12 = var12.bind(var18)(var5);
                var5 = _closure1_slot3;
                var12 = var5.bind(var4)(var12, var16);
                var5 = var12[var2];
                var12 = var12[var15];
                _closure2_slot8 = var12;
                var16 = _closure1_slot4;
                var15 = var16.useMemo;
                var12 = new Array(3);
                var12[0] = var3;
                var12[1] = var14;
                var12[2] = var11;
                var11 = function() { // Environment: var0
                    _fun116946: for (var _fun116946_ip = 0;;) switch (_fun116946_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.sortBy;
                            var3 = _closure2_slot0;
                            var0 = function(arg0) { // Environment: var0
                                _fun116947: for (var _fun116947_ip = 0;;) switch (_fun116947_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = _closure2_slot2;
                                        if (var0) {
                                            _fun116947_ip = 71;
                                            continue _fun116947
                                        }
                                    case 13:
                                        var3 = var1.inviter;
                                        var0 = null;
                                        var4 = var0 == var3;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun116947_ip = 55;
                                            continue _fun116947
                                        }
                                    case 30:
                                        var4 = var3.username;
                                        var3 = var0 == var4;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun116947_ip = 55;
                                            continue _fun116947
                                        }
                                    case 45:
                                        var3 = var4.toLowerCase;
                                        var2 = var3.bind(var4)();
                                    case 55:
                                        var3 = var0 != var2;
                                        var0 = '';
                                        if (!var3) {
                                            _fun116947_ip = 69;
                                            continue _fun116947
                                        }
                                    case 66:
                                        var0 = var2;
                                    case 69:
                                        _fun116947_ip = 105;
                                        continue _fun116947;
                                    case 71:
                                        var2 = var1.channel;
                                        var1 = null;
                                        var3 = var1 == var2;
                                        var1 = undefined;
                                        if (var3) {
                                            _fun116947_ip = 102;
                                            continue _fun116947
                                        }
                                    case 87:
                                        var3 = var2.name;
                                        var2 = var3.toLowerCase;
                                        var1 = var2.bind(var3)();
                                    case 102:
                                        var0 = var1;
                                    case 105:
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var5)(var3, var0);
                            var2 = _closure2_slot3;
                            if (!var2) {
                                _fun116946_ip = 75;
                                continue _fun116946
                            }
                        case 60:
                            var2 = var0.unshift;
                            var1 = _closure1_slot17;
                            var1 = var2.bind(var0)(var1);
                        case 75:
                            return var0;
                    }
                };
                var16 = var15.bind(var16)(var11, var12);
                _closure2_slot9 = var16;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var15 = var12.bind(var4)(var11);
                var13 = var15.useStateFromStoresArray;
                var11 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getSortedLinkedChannelsForGuild;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var13.bind(var15)(var12, var11);
                _closure2_slot10 = var11;
                var15 = _closure1_slot4;
                var13 = var15.useMemo;
                var12 = new Array(2);
                var12[0] = var16;
                var12[1] = var11;
                var11 = function() { // Environment: var0
                    var4 = _closure2_slot9;
                    var2 = var4.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = 'invite';
                        var0.type = var1;
                        var1 = arg0;
                        var0.data = var1;
                        return var0;
                    };
                    var6 = var2.bind(var4)(var0);
                    var0 = new Array(0);
                    var5 = 0;
                    var7 = var0;
                    var5 = arraySpread(var7, var6, var5);
                    var4 = _closure2_slot10;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = 'channel';
                        var0.type = var1;
                        var1 = arg0;
                        var0.data = var1;
                        return var0;
                    };
                    var6 = var3.bind(var4)(var1);
                    var7 = var0;
                    var1 = arraySpread(var7, var6, var5);
                    return var0;
                };
                var13 = var13.bind(var15)(var11, var12);
                var16 = _closure1_slot4;
                var15 = var16.useEffect;
                var12 = function() { // Environment: var0
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var1 = 21;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = new Array(0);
                var11 = var15.bind(var16)(var12, var11);
                var16 = _closure1_slot4;
                var15 = var16.useCallback;
                var12 = function(arg0) { // Environment: var0
                    _fun116953: for (var _fun116953_ip = 0;;) switch (_fun116953_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = 'invite';
                            if (!(var0 !== var2)) {
                                _fun116953_ip = 28;
                                continue _fun116953
                            }
                        case 16:
                            var0 = var1.data;
                            var0 = var0.id;
                            _fun116953_ip = 38;
                            continue _fun116953;
                        case 28:
                            var1 = var1.data;
                            var0 = var1.code;
                        case 38:
                            return var0;
                    }
                };
                var11 = new Array(0);
                var12 = var15.bind(var16)(var12, var11);
                var16 = _closure1_slot4;
                var15 = var16.useCallback;
                var11 = new Array(3);
                var11[0] = var9;
                var11[1] = var17;
                var11[2] = var8;
                var8 = function() { // Environment: var0
                    _fun116954: for (var _fun116954_ip = 0;;) switch (_fun116954_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (var0) {
                                _fun116954_ip = 282;
                                continue _fun116954
                            }
                        case 13:
                            var2 = _closure2_slot7;
                            var3 = undefined;
                            var0 = true;
                            var0 = var2.bind(var3)(var0);
                        case 26: // try_start_0 // try_start_1
                            var0 = {};
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 20;
                            var5 = var2[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.GuildIncidentActionSources;
                            var5 = var5.MESSAGE;
                            var0.source = var5;
                            var5 = 21;
                            var5 = var2[var5];
                            var8 = var7.bind(var3)(var5);
                            var6 = var8.getIncidentAlertType;
                            var5 = _closure2_slot4;
                            var5 = var6.bind(var8)(var5);
                            var0.alertType = var5;
                            var5 = _closure1_slot1;
                            var4 = 22;
                            var4 = var2[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.openLazy;
                            var4 = 24;
                            var4 = var2[var4];
                            var7 = var7.bind(var3)(var4);
                            var4 = 23;
                            var4 = var2[var4];
                            var2 = var2.paths;
                            var4 = var7.bind(var3)(var4, var2);
                            var2 = {};
                            var7 = _closure2_slot1;
                            var2.guild = var7;
                            var2.analyticsData = var0;
                            var0 = 'GuildIncidentActionsActionSheet';
                            var0 = var5.bind(var6)(var4, var0, var2);
                        case 179: // try_end0
                            _fun116954_ip = 254;
                            continue _fun116954;
                        case 181: // catch_target0
                            CatchBlockStart(arg_register = 5);
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 25;
                            var0 = var8[var0];
                            var4 = var7.bind(var3)(var0);
                            var2 = var4.open;
                            var0 = {};
                            var6 = 'GUILD_SETTINGS_MODAL_INVITE_ERROR';
                            var0.key = var6;
                            var6 = 16;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var0.icon = var6;
                            var5 = var5.message;
                            var0.content = var5;
                            var0 = var2.bind(var4)(var0);
                        case 254: // try_end1
                            var2 = _closure2_slot7;
                            var0 = false;
                            var0 = var2.bind(var3)(var0);
                            _fun116954_ip = 282;
                            continue _fun116954;
                        case 267: // catch_target1
                            CatchBlockStart(arg_register = 0);
                            var2 = _closure2_slot7;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                            throw var0;
                        case 282:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var15.bind(var16)(var8, var11);
                _closure2_slot11 = var11;
                var16 = _closure1_slot4;
                var15 = var16.useCallback;
                var8 = new Array(3);
                var8[0] = var10;
                var8[1] = var11;
                var8[2] = var9;
                var0 = function(arg0) { // Environment: var0
                    _fun116955: for (var _fun116955_ip = 0;;) switch (_fun116955_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.item;
                            var1 = var6.type;
                            var0 = 'invite';
                            if (!(var0 !== var1)) {
                                _fun116955_ip = 75;
                                continue _fun116955
                            }
                        case 21:
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 26;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.LinkedChannelInvite;
                            var0 = {};
                            var4 = var6.data;
                            var0.channel = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun116955_ip = 193;
                            continue _fun116955;
                        case 75:
                            var1 = var6.data;
                            var3 = var1.code;
                            var1 = _closure1_slot16;
                            if (!(var3 !== var1)) {
                                _fun116955_ip = 142;
                                continue _fun116955
                            }
                        case 96:
                            var5 = _closure1_slot12;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 26;
                            var1 = var4[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = {};
                            var6 = var6.data;
                            var1.invite = var6;
                            var1 = var5.bind(var4)(var3, var1);
                            _fun116955_ip = 190;
                            continue _fun116955;
                        case 142:
                            var5 = _closure1_slot12;
                            var4 = _closure1_slot19;
                            var3 = {};
                            var6 = _closure2_slot5;
                            var3.invitesDisabled = var6;
                            var6 = _closure2_slot6;
                            var3.invitesDisabledLoading = var6;
                            var2 = _closure2_slot11;
                            var3.onPauseInvites = var2;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var4, var3);
                        case 190:
                            var0 = var1;
                        case 193:
                            return var0;
                    }
                };
                var8 = var15.bind(var16)(var0, var8);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun116944_ip = 989;
                    continue _fun116944
                }
            case 658:
                var0 = var13.length;
                if (!(var2 !== var0)) {
                    _fun116944_ip = 766;
                    continue _fun116944
                }
            case 667:
                var3 = _closure1_slot12;
                var2 = _closure1_slot5;
                var0 = {};
                if (var14) {
                    _fun116944_ip = 688;
                    continue _fun116944
                }
            case 680:
                var15 = var6.list;
                _fun116944_ip = 694;
                continue _fun116944;
            case 688:
                var15 = var6.listWithPause;
            case 694:
                var14 = new Array(1);
                var14[0] = var15;
                var0.style = var14;
                var0.data = var13;
                var0.keyExtractor = var12;
                var0.renderItem = var8;
                var8 = 10;
                var0.initialNumToRender = var8;
                var0.windowSize = var5;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.content;
                var5[1] = var6;
                var0.contentContainerStyle = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116944_ip = 987;
                continue _fun116944;
            case 766:
                var5 = _closure1_slot14;
                var3 = _closure1_slot13;
                var2 = {};
                var8 = _closure1_slot12;
                var7 = _closure1_slot19;
                var6 = {};
                var6.onPauseInvites = var11;
                var6.invitesDisabled = var10;
                var6.invitesDisabledLoading = var9;
                var7 = var8.bind(var4)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot12;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 28;
                var7 = var14[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var13 = _closure1_slot0;
                var10 = 29;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.InviteEmpty;
                var7.Illustration = var10;
                var10 = 11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["+nLJkZ"];
                var11 = var12.bind(var15)(var11);
                var7.title = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.F53CAc;
                var10 = var11.bind(var12)(var10);
                var7.body = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var0 = var5.bind(var4)(var3, var2);
            case 987:
                _fun116944_ip = 1027;
                continue _fun116944;
            case 989:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 27;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SceneLoadingIndicator;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 1027:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.Platform;
    var4 = var4.FlatList;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var12 = 8;
    var4 = var6[var12];
    var4 = var5.bind(var0)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var4 = var4.HelpdeskArticles;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.Fragment;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10.paddingTop = var12;
    var4.list = var10;
    var10 = {
        'padding': 16,
        'gap': 24
    };
    var4.content = var10;
    var10 = {};
    var10.paddingTop = var11;
    var4.listWithPause = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var7 = 'pause_invites';
    var _closure1_slot16 = var7;
    var4 = {};
    var4.code = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var16 = var7;
    var15 = var4;
    var4 = new var16[var8](var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var _closure1_slot18 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun116956: for (var _fun116956_ip = 0;;) switch (_fun116956_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var9 = var1.contentContainerStyle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var5 = var3[var1];
                var4 = undefined;
                var10 = var2.bind(var4)(var5);
                var8 = var10.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var10)(var7, var5);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun116958: for (var _fun116958_ip = 0;;) switch (_fun116958_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var0 = var2.getProps;
                            var0 = var0.bind(var2)();
                            var0 = var0.invites;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun116958_ip = 33;
                                continue _fun116958
                            }
                        case 29:
                            var0 = _closure1_slot18;
                        case 33:
                            return var0;
                    }
                };
                var10 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 != var11;
                if (!var1) {
                    _fun116956_ip = 230;
                    continue _fun116956
                }
            case 123:
                var3 = _closure1_slot14;
                var2 = _closure1_slot13;
                var1 = {};
                var8 = _closure1_slot12;
                var7 = _closure1_slot20;
                var5 = {};
                var5.guild = var11;
                var5.invites = var10;
                var5.contentContainerStyle = var9;
                var9 = true;
                var5.showChannel = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot12;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 30;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 230:
                return var0;
        }
    };
    var2.default = var3;
    var2.InvitesDisabledRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8791, 5959, 1372, 1410, 8213, 660, 33, 1297, 1235, 1689, 8846, 5390, 4912, 7517, 11731, 566, 22, 6808, 6806, 3282, 10128, 1307, 3153, 9197, 5911, 7418, 14868, 5260, 2]);