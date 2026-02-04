// actions/CallActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot6 = var6;
    var6 = var1.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var1.ChannelTypesSets;
    var _closure1_slot8 = var6;
    var1 = var1.ChannelTypes;
    var _closure1_slot9 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        _fun64560: for (var _fun64560_ip = 0;;) switch (_fun64560_ip) {
            case 0:
                var6 = arg0;
                var4 = arg2;
                var3 = arg3;
                var1 = this;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var6;
                var1 = arg1;
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var3;
                var1 = arg4;
                var _closure2_slot5 = var1;
                var2 = function arg0() {
                    _fun64561: for (var _fun64561_ip = 0;;) switch (_fun64561_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.selectVoiceChannel;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = arg0;
                            if (!var2) {
                                _fun64561_ip = 73;
                                continue _fun64561
                            }
                        case 54:
                            var4 = _closure2_slot0;
                            var3 = var4.ring;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2);
                        case 73:
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun64561_ip = 96;
                                continue _fun64561
                            }
                        case 83:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var0)(var1);
                        case 96:
                            return var0;
                    }
                };
                var _closure2_slot6 = var2;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun64560_ip = 71;
                    continue _fun64560
                }
            case 59:
                var1 = undefined;
                var1 = var2.bind(var1)(var4);
                _fun64560_ip = 200;
                continue _fun64560;
            case 71:
                var2 = _closure1_slot4;
                var1 = var2.isBlocked;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun64560_ip = 204;
                    continue _fun64560
                }
            case 92:
                var2 = _closure1_slot5;
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var3);
                var _closure2_slot7 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var5 = _closure1_slot6;
                var4 = var5.CALL;
                var4 = var4.bind(var5)(var6);
                var1.url = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun64562: for (var _fun64562_ip = 0;;) switch (_fun64562_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun64562_ip = 30;
                                continue _fun64562
                            }
                        case 14:
                            var0 = arg0;
                            var0 = var0.body;
                            var1 = var0.ringable;
                        case 30:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = function() { // Environment: var0
                    _fun64563: for (var _fun64563_ip = 0;;) switch (_fun64563_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 6;
                            var1 = var5[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.track;
                            var1 = _closure1_slot7;
                            var3 = var1.OPEN_POPOUT;
                            var1 = {
                                'type': 'Not Friend',
                                'source': 'Call'
                            };
                            var1 = var6.bind(var7)(var3, var1);
                            var1 = 7;
                            var1 = var5[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var8 = 8;
                            var7 = var5[var8];
                            var7 = var6.bind(var0)(var7);
                            var10 = var7.intl;
                            var9 = var10.string;
                            var7 = var5[var8];
                            var7 = var6.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7.My50nf;
                            var7 = var9.bind(var10)(var7);
                            var1.title = var7;
                            var7 = var5[var8];
                            var7 = var6.bind(var0)(var7);
                            var9 = var7.intl;
                            var7 = var9.format;
                            var5 = var5[var8];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.t;
                            var6 = var5.IdKo2z;
                            var5 = {};
                            var12 = _closure2_slot7;
                            var10 = null;
                            var12 = var10 != var12;
                            var10 = '';
                            if (!var12) {
                                _fun64563_ip = 207;
                                continue _fun64563
                            }
                        case 198:
                            var11 = _closure2_slot7;
                            var10 = var11.username;
                        case 207:
                            var5.username = var10;
                            var5 = var7.bind(var9)(var6, var5);
                            var1.body = var5;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = var4[var8];
                            var5 = var7.bind(var0)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var4[var8];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5["PMsq/b"];
                            var5 = var6.bind(var9)(var5);
                            var1.confirmText = var5;
                            var5 = var4[var8];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var4[var8];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.BddRzS;
                            var4 = var5.bind(var6)(var4);
                            var1.cancelText = var4;
                            var4 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.addRelationship;
                                var1 = {};
                                var4 = _closure2_slot4;
                                var1.userId = var4;
                                var4 = {};
                                var5 = 'Call';
                                var4.location = var5;
                                var1.context = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 200:
                var0 = undefined;
                return var0;
            case 204:
                var0 = undefined;
                return var0;
        }
    };
    var1.call = var6;
    var6 = function arg0, arg1, arg2() {
        _fun64565: for (var _fun64565_ip = 0;;) switch (_fun64565_ip) {
            case 0:
                var10 = arg0;
                var5 = arg1;
                var2 = _closure1_slot3;
                var0 = var2.getChannel;
                var4 = var0.bind(var2)(var10);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun64565_ip = 144;
                    continue _fun64565
                }
            case 29:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var3 = undefined;
                var6 = var6.bind(var3)(var0);
                var0 = var6.canRingUsersInChannel;
                var6 = var0.bind(var6)(var4);
                var0 = _closure1_slot8;
                var8 = var0.CALLABLE;
                var7 = var8.has;
                var0 = var4.type;
                var0 = var7.bind(var8)(var0);
                if (var6) {
                    _fun64565_ip = 148;
                    continue _fun64565
                }
            case 90:
                if (!var0) {
                    _fun64565_ip = 144;
                    continue _fun64565
                }
            case 93:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var7 = var6.bind(var3)(var0);
                var6 = var7.dispatch;
                var0 = {};
                var8 = 'CALL_ENQUEUE_RING';
                var0.type = var8;
                var0.channelId = var10;
                var0.recipients = var5;
                var0 = var6.bind(var7)(var0);
            case 144:
                var0 = undefined;
                return var0;
            case 148:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var7 = var0.HTTP;
                var6 = var7.post;
                var0 = {};
                var9 = _closure1_slot6;
                var8 = var9.CALL_RING;
                var8 = var8.bind(var9)(var10);
                var0.url = var8;
                var8 = {};
                var8.recipients = var5;
                var9 = arg2;
                var8.analytics_location = var9;
                var0.body = var8;
                var8 = true;
                var0.oldFormErrors = var8;
                var0.rejectWithError = var8;
                var0 = var6.bind(var7)(var0);
                var6 = var4.type;
                var0 = _closure1_slot9;
                var0 = var0.GUILD_VOICE;
                var0 = var6 === var0;
                if (!var0) {
                    _fun64565_ip = 261;
                    continue _fun64565
                }
            case 257:
                var0 = var2 != var5;
            case 261:
                if (!var0) {
                    _fun64565_ip = 320;
                    continue _fun64565
                }
            case 264:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'GUILD_LOCAL_RING_START';
                var1.type = var6;
                var1.ringing = var5;
                var4 = var4.guild_id;
                var1.guildId = var4;
                var0 = var2.bind(var3)(var1);
            case 320:
                var0 = undefined;
                return var0;
        }
    };
    var1.ring = var6;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.CALL_STOP_RINGING;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.recipients = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.stopRinging = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/CallActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3100, 1621, 660, 4231, 507, 795, 4003, 1234, 8022, 8030, 806, 2]);