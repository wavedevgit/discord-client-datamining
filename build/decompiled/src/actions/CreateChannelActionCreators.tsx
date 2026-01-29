// actions/CreateChannelActionCreators.tsx
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
    var1 = var4.bind(var0)(var1);
    var6 = var1.BITRATE_DEFAULT;
    var _closure1_slot4 = var6;
    var6 = var1.ChannelTypes;
    var _closure1_slot5 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: createChannel, environment: var3
        _fun65451: for (var _fun65451_ip = 0;;) switch (_fun65451_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.guildId;
                var _closure2_slot0 = var10;
                var8 = var1.type;
                var12 = var1.name;
                var3 = var1.permissionOverwrites;
                var7 = undefined;
                if (!(var3 === var7)) {
                    _fun65451_ip = 40;
                    continue _fun65451
                }
            case 36:
                var3 = new Array(0);
            case 40:
                var _closure2_slot1 = var3;
                var11 = var1.bitrate;
                var9 = var1.userLimit;
                var6 = var1.parentId;
                var2 = var1.skuId;
                var1 = var1.branchId;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 3;
                var4 = var14[var4];
                var14 = var13.bind(var7)(var4);
                var13 = var14.dispatch;
                var4 = {};
                var15 = 'CREATE_CHANNEL_MODAL_SUBMIT';
                var4.type = var15;
                var4.guildId = var10;
                var4.channelType = var8;
                var4 = var13.bind(var14)(var4);
                var4 = {};
                var4.type = var8;
                var4.name = var12;
                var4.permission_overwrites = var3;
                var3 = null;
                var12 = var3 != var11;
                if (!var12) {
                    _fun65451_ip = 160;
                    continue _fun65451
                }
            case 152:
                var13 = _closure1_slot4;
                var12 = var11 !== var13;
            case 160:
                if (!var12) {
                    _fun65451_ip = 169;
                    continue _fun65451
                }
            case 163:
                var4.bitrate = var11;
            case 169:
                var11 = var3 != var9;
                if (!var11) {
                    _fun65451_ip = 182;
                    continue _fun65451
                }
            case 176:
                var12 = 0;
                var11 = var9 > var12;
            case 182:
                if (!var11) {
                    _fun65451_ip = 191;
                    continue _fun65451
                }
            case 185:
                var4.user_limit = var9;
            case 191:
                if (!(var3 != var6)) {
                    _fun65451_ip = 201;
                    continue _fun65451
                }
            case 195:
                var4.parent_id = var6;
            case 201:
                var6 = _closure1_slot5;
                var6 = var6.GUILD_STORE;
                if (!(var8 === var6)) {
                    _fun65451_ip = 234;
                    continue _fun65451
                }
            case 215:
                if (!(var3 != var2)) {
                    _fun65451_ip = 376;
                    continue _fun65451
                }
            case 222:
                var4.sku_id = var2;
                var4.branch_id = var1;
            case 234:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 4;
                var1 = var8[var1];
                var3 = var2.bind(var7)(var1);
                var2 = var3.post;
                var1 = {};
                var9 = _closure1_slot6;
                var6 = var9.GUILD_CHANNELS;
                var6 = var6.bind(var9)(var10);
                var1.url = var6;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = {};
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.CHANNEL_CREATE;
                var4.event = var5;
                var5 = function(arg0) { // Original name: properties, environment: var0
                    _fun65452: for (var _fun65452_ip = 0;;) switch (_fun65452_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var6 = undefined;
                            var2 = var1.bind(var6)(var0);
                            var1 = var2.exact;
                            var0 = {};
                            var3 = _closure2_slot1;
                            var5 = var3.length;
                            var3 = 0;
                            var3 = var5 > var3;
                            var0.is_private = var3;
                            var5 = null;
                            var7 = var5 == var4;
                            var3 = undefined;
                            if (var7) {
                                _fun65452_ip = 89;
                                continue _fun65452
                            }
                        case 70:
                            var7 = var4.body;
                            var8 = var5 == var7;
                            var3 = undefined;
                            if (var8) {
                                _fun65452_ip = 89;
                                continue _fun65452
                            }
                        case 84:
                            var3 = var7.id;
                        case 89:
                            var0.channel_id = var3;
                            var7 = var5 == var4;
                            var3 = undefined;
                            if (var7) {
                                _fun65452_ip = 121;
                                continue _fun65452
                            }
                        case 102:
                            var4 = var4.body;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun65452_ip = 121;
                                continue _fun65452
                            }
                        case 116:
                            var3 = var4.type;
                        case 121:
                            var0.channel_type = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4.properties = var5;
                var1.trackedActionData = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun65453: for (var _fun65453_ip = 0;;) switch (_fun65453_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = _closure1_slot3;
                            var4 = var5.isOptInEnabled;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3);
                            if (!var3) {
                                _fun65453_ip = 130;
                                continue _fun65453
                            }
                        case 31:
                            var4 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var3 = 7;
                            var3 = var11[var3];
                            var10 = undefined;
                            var8 = var4.bind(var10)(var3);
                            var7 = var8.updateChannelOverrideSettings;
                            var6 = _closure2_slot0;
                            var3 = var0.body;
                            var14 = var3.id;
                            var4 = {};
                            var3 = _closure1_slot7;
                            var3 = var3.OPT_IN_ENABLED;
                            var4.flags = var3;
                            var9 = _closure1_slot0;
                            var3 = 8;
                            var3 = var11[var3];
                            var3 = var9.bind(var10)(var3);
                            var3 = var3.NotificationLabels;
                            var12 = var3.OptedIn;
                            var16 = var8;
                            var15 = var6;
                            var13 = var4;
                            var3 = var16[var7](var15, var14, var13, var12, var11);
                        case 130:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.checkGuildTemplateDirty;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE';
                    var1.type = var4;
                    var4 = var0.body;
                    var1.errors = var4;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 376:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = 'Unexpected missing SKU';
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.createChannel = var6;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: createRoleSubscriptionTemplateChannel, environment: var3
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 4;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var8 = _closure1_slot6;
        var5 = var8.GUILD_CHANNELS;
        var3 = arg0;
        var3 = var5.bind(var8)(var3);
        var0.url = var3;
        var3 = {};
        var5 = arg1;
        var3.name = var5;
        var5 = arg2;
        var3.type = var5;
        var5 = arg3;
        var3.topic = var5;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 5;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.CHANNEL_CREATE;
        var3.event = var4;
        var4 = function(arg0) { // Original name: properties, environment: var4
            _fun65456: for (var _fun65456_ip = 0;;) switch (_fun65456_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var6 = undefined;
                    var2 = var1.bind(var6)(var0);
                    var1 = var2.exact;
                    var0 = {};
                    var3 = true;
                    var0.is_private = var3;
                    var5 = null;
                    var7 = var5 == var4;
                    var3 = undefined;
                    if (var7) {
                        _fun65456_ip = 73;
                        continue _fun65456
                    }
                case 54:
                    var7 = var4.body;
                    var8 = var5 == var7;
                    var3 = undefined;
                    if (var8) {
                        _fun65456_ip = 73;
                        continue _fun65456
                    }
                case 68:
                    var3 = var7.id;
                case 73:
                    var0.channel_id = var3;
                    var7 = var5 == var4;
                    var3 = undefined;
                    if (var7) {
                        _fun65456_ip = 105;
                        continue _fun65456
                    }
                case 86:
                    var4 = var4.body;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun65456_ip = 105;
                        continue _fun65456
                    }
                case 100:
                    var3 = var4.type;
                case 105:
                    var0.channel_type = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var3.properties = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createRoleSubscriptionTemplateChannel = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/CreateChannelActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4260, 660, 665, 806, 4482, 481, 1385, 4654, 4651, 6445, 2]);