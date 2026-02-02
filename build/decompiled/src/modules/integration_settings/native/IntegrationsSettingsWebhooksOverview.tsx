// modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun109184: for (var _fun109184_ip = 0;;) switch (_fun109184_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun109184_ip = 76;
                continue _fun109184;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun109187: for (var _fun109187_ip = 0;;) switch (_fun109187_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.avatar;
                var _closure2_slot0 = var6;
                var14 = var1.channel;
                var _closure2_slot1 = var14;
                var10 = var1.guildId;
                var _closure2_slot2 = var10;
                var11 = var1.name;
                var _closure2_slot3 = var11;
                var9 = var1.token;
                var _closure2_slot4 = var9;
                var18 = var1.user;
                var8 = var1.webhookId;
                var _closure2_slot5 = var8;
                var15 = var1.webhookType;
                var _closure2_slot6 = var15;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 15;
                var1 = var12[var1];
                var3 = undefined;
                var2 = var13.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot7 = var1;
                var7 = _closure1_slot8;
                var4 = var7.useCallback;
                var2 = new Array(8);
                var2[0] = var8;
                var2[1] = var15;
                var2[2] = var6;
                var2[3] = var14;
                var2[4] = var10;
                var2[5] = var11;
                var2[6] = var9;
                var2[7] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot7;
                    var2 = var3.push;
                    var0 = _closure1_slot14;
                    var1 = var0.EDIT_WEBHOOK;
                    var0 = {};
                    var5 = _closure2_slot5;
                    var0.webhookId = var5;
                    var5 = _closure2_slot6;
                    var0.webhookType = var5;
                    var5 = _closure2_slot0;
                    var0.avatar = var5;
                    var5 = _closure2_slot3;
                    var0.name = var5;
                    var5 = _closure2_slot1;
                    var0.channel = var5;
                    var5 = _closure2_slot2;
                    var0.guildId = var5;
                    var4 = _closure2_slot4;
                    var0.token = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var10 = var4.bind(var7)(var1, var2);
                var4 = _closure1_slot8;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 16;
                    var1 = var6[var0];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var1);
                    var1 = var2.makeSource;
                    var0 = var6[var0];
                    var4 = var4.bind(var3)(var0);
                    var3 = var4.getUserAvatarURL;
                    var0 = {};
                    var7 = _closure2_slot5;
                    var0.id = var7;
                    var6 = _closure2_slot0;
                    var0.avatar = var6;
                    var5 = _closure1_slot15;
                    var0.discriminator = var5;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot19;
                var1 = _closure1_slot18;
                var0 = {};
                var7 = _closure1_slot17;
                var9 = 17;
                var4 = var12[var9];
                var4 = var13.bind(var3)(var4);
                var6 = var4.FormRow;
                var4 = {};
                var16 = _closure1_slot17;
                var15 = _closure1_slot1;
                var14 = 18;
                var14 = var12[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.source = var17;
                var14 = var16.bind(var3)(var15, var14);
                var4.leading = var14;
                var14 = _closure1_slot17;
                var12 = var12[var9];
                var12 = var13.bind(var3)(var12);
                var12 = var12.FormRow;
                var13 = var12.Arrow;
                var12 = {};
                var12 = var14.bind(var3)(var13, var12);
                var4.trailing = var12;
                var4.label = var11;
                var11 = null;
                if (!(var11 == var18)) {
                    _fun109187_ip = 421;
                    continue _fun109187
                }
            case 327:
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 19;
                var13 = var17[var11];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var11 = var17[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11["7mv59O"];
                var11 = {};
                var16 = _closure1_slot1;
                var15 = 20;
                var15 = var17[var15];
                var16 = var16.bind(var3)(var15);
                var15 = var16.extractTimestamp;
                var15 = var15.bind(var16)(var8);
                var11.timestamp = var15;
                var11 = var13.bind(var14)(var12, var11);
                _fun109187_ip = 540;
                continue _fun109187;
            case 421:
                var13 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 19;
                var14 = var19[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var12 = var19[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12["7EcUbr"];
                var12 = {};
                var17 = _closure1_slot1;
                var16 = 20;
                var16 = var19[var16];
                var20 = var17.bind(var3)(var16);
                var16 = var20.extractTimestamp;
                var16 = var16.bind(var20)(var8);
                var12.timestamp = var16;
                var16 = 21;
                var16 = var19[var16];
                var17 = var17.bind(var3)(var16);
                var16 = var17.getUserTag;
                var16 = var16.bind(var17)(var18);
                var12.user = var16;
                var11 = var14.bind(var15)(var13, var12);
            case 540:
                var4.subLabel = var11;
                var4.onPress = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot17;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormDivider;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5, var8);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var0 = var3.channelId;
        var _closure2_slot0 = var0;
        var0 = var3.user;
        var _closure2_slot1 = var0;
        var0 = null;
        var2 = Object.create(var0);
        var0 = 0;
        var2.channelId = var0;
        var2.user = var0;
        var13 = {};
        var12 = var3;
        var11 = var2;
        var4 = copyDataProperties(var13, var12, var11);
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 22;
        var6 = var7[var2];
        var3 = undefined;
        var10 = var5.bind(var3)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot11;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() { // Environment: var1
            _fun109191: for (var _fun109191_ip = 0;;) switch (_fun109191_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var1 = var2.getUser;
                    var4 = _closure2_slot1;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun109191_ip = 40;
                        continue _fun109191
                    }
                case 31:
                    var3 = _closure2_slot1;
                    var0 = var3.id;
                case 40:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var6 = var9.bind(var10)(var8, var6);
        var2 = var7[var2];
        var7 = var5.bind(var3)(var2);
        var5 = var7.useStateFromStores;
        var8 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot9;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var7)(var2, var1);
        var2 = _closure1_slot17;
        var1 = _closure1_slot24;
        var0 = {};
        var13 = var0;
        var12 = var4;
        var4 = copyDataProperties(var13, var12);
        var4 = 'user';
        var0[var4] = var6;
        var4 = 'channel';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Platform;
    var6 = 7;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.HelpdeskArticles;
    var _closure1_slot13 = var7;
    var7 = var6.ChannelSettingsSections;
    var _closure1_slot14 = var7;
    var7 = var6.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot15 = var7;
    var6 = var6.WebhookTypes;
    var _closure1_slot16 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot17 = var7;
    var7 = var6.Fragment;
    var _closure1_slot18 = var7;
    var6 = var6.jsxs;
    var _closure1_slot19 = var6;
    var6 = 13;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var10 = 14;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var10 = 16;
    var9.paddingTop = var10;
    var6.form = var9;
    var9 = {
        'paddingHorizontal': 16,
        'marginBottom': 16
    };
    var6.hint = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot20 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun109194: for (var _fun109194_ip = 0;;) switch (_fun109194_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun109194_ip = 69;
                        continue _fun109194
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun109194_ip = 105;
                    continue _fun109194;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getHelpText';
        var4.key = var0;
        var0 = function() {
            _fun109195: for (var _fun109195_ip = 0;;) switch (_fun109195_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.webhookType;
                    var0 = _closure1_slot16;
                    var0 = var0.CHANNEL_FOLLOWER;
                    if (!(var1 !== var0)) {
                        _fun109195_ip = 137;
                        continue _fun109195
                    }
                case 31:
                    var1 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 19;
                    var2 = var8[var0];
                    var7 = undefined;
                    var2 = var1.bind(var7)(var2);
                    var3 = var2.intl;
                    var2 = var3.format;
                    var0 = var8[var0];
                    var0 = var1.bind(var7)(var0);
                    var0 = var0.t;
                    var1 = var0["3hX7G+"];
                    var0 = {};
                    var6 = _closure1_slot1;
                    var4 = 23;
                    var4 = var8[var4];
                    var7 = var6.bind(var7)(var4);
                    var6 = var7.getArticleURL;
                    var4 = _closure1_slot13;
                    var4 = var4.WEBHOOKS_INTRODUCTION;
                    var4 = var6.bind(var7)(var4);
                    var0.articleURL = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    _fun109195_ip = 241;
                    continue _fun109195;
                case 137:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var3 = var9[var1];
                    var8 = undefined;
                    var3 = var2.bind(var8)(var3);
                    var4 = var3.intl;
                    var3 = var4.format;
                    var1 = var9[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.t;
                    var2 = var1["5u+aV1"];
                    var1 = {};
                    var7 = _closure1_slot1;
                    var6 = 23;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getArticleURL;
                    var5 = _closure1_slot13;
                    var5 = var5.CHANNEL_FOLLOWING;
                    var5 = var6.bind(var7)(var5);
                    var1.helpdeskArticle = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 241:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderWebhooks';
        var4.key = var6;
        var6 = function() {
            _fun109196: for (var _fun109196_ip = 0;;) switch (_fun109196_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var3 = var0.webhooks;
                    var12 = var0.webhookType;
                    var _closure3_slot0 = var12;
                    var0 = null;
                    var6 = var3;
                    if (!(var0 != var12)) {
                        _fun109196_ip = 52;
                        continue _fun109196
                    }
                case 35:
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var2.bind(var3)(var0);
                case 52:
                    var0 = var1.getHelpText;
                    var8 = var0.bind(var1)();
                    var1 = var6.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun109196_ip = 180;
                        continue _fun109196
                    }
                case 75:
                    var3 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 17;
                    var0 = var10[var5];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var9 = _closure1_slot17;
                    var5 = var10[var5];
                    var5 = var7.bind(var2)(var5);
                    var7 = var5.FormHint;
                    var5 = {};
                    var5.children = var8;
                    var5 = var9.bind(var2)(var7, var5);
                    var0.hint = var5;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var4
                        _fun109198: for (var _fun109198_ip = 0;;) switch (_fun109198_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = var1.id;
                                var0 = var1.type;
                                var11 = var1.avatar;
                                var9 = var1.name;
                                var8 = var1.user;
                                var6 = var1.token;
                                var5 = var1.guild_id;
                                var7 = var1.channel_id;
                                var3 = _closure1_slot17;
                                var2 = _closure1_slot25;
                                var1 = {};
                                var1.webhookId = var4;
                                var1.webhookType = var0;
                                var0 = null;
                                var12 = var0 != var11;
                                var0 = undefined;
                                var10 = undefined;
                                if (!var12) {
                                    _fun109198_ip = 84;
                                    continue _fun109198
                                }
                            case 81:
                                var10 = var11;
                            case 84:
                                var1.avatar = var10;
                                var1.name = var9;
                                var1.user = var8;
                                var1.channelId = var7;
                                var1.token = var6;
                                var1.guildId = var5;
                                var0 = var3.bind(var0)(var2, var1, var4);
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    _fun109196_ip = 521;
                    continue _fun109196;
                case 180:
                    var4 = _closure1_slot19;
                    var3 = _closure1_slot18;
                    var2 = {};
                    var7 = _closure1_slot17;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 17;
                    var5 = var13[var1];
                    var1 = undefined;
                    var5 = var11.bind(var1)(var5);
                    var6 = var5.FormHint;
                    var5 = {};
                    var5.children = var8;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot1;
                    var6 = 24;
                    var6 = var13[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var9 = 25;
                    var9 = var13[var9];
                    var9 = var11.bind(var1)(var9);
                    var9 = var9.WebhookEmpty;
                    var6.Illustration = var9;
                    var9 = _closure1_slot16;
                    var9 = var9.CHANNEL_FOLLOWER;
                    if (!(var12 !== var9)) {
                        _fun109196_ip = 363;
                        continue _fun109196
                    }
                case 304:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = 19;
                    var11 = var15[var9];
                    var11 = var14.bind(var1)(var11);
                    var13 = var11.intl;
                    var11 = var13.string;
                    var9 = var15[var9];
                    var9 = var14.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9["4JAVI+"];
                    var9 = var11.bind(var13)(var9);
                    _fun109196_ip = 420;
                    continue _fun109196;
                case 363:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 19;
                    var13 = var16[var11];
                    var13 = var15.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var11 = var16[var11];
                    var11 = var15.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.dkHRkE;
                    var9 = var13.bind(var14)(var11);
                case 420:
                    var6.title = var9;
                    var9 = _closure1_slot16;
                    var11 = var9.CHANNEL_FOLLOWER;
                    var9 = undefined;
                    if (!(var12 !== var11)) {
                        _fun109196_ip = 497;
                        continue _fun109196
                    }
                case 440:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 19;
                    var11 = var14[var10];
                    var11 = var13.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.Gg3fUf;
                    var9 = var11.bind(var12)(var10);
                case 497:
                    var6.body = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2.children = var5;
                    var0 = var4.bind(var1)(var3, var2);
                case 521:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            var11 = this;
            var1 = _closure1_slot20;
            var0 = var11.context;
            var3 = undefined;
            var10 = var1.bind(var3)(var0);
            var2 = _closure1_slot19;
            var1 = _closure1_slot18;
            var0 = {};
            var9 = _closure1_slot17;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 17;
            var4 = var8[var4];
            var4 = var6.bind(var3)(var4);
            var7 = var4.Form;
            var4 = {};
            var10 = var10.form;
            var4.style = var10;
            var10 = var11.props;
            var10 = var10.contentContainerStyle;
            var4.contentContainerStyle = var10;
            var10 = var11.renderWebhooks;
            var10 = var10.bind(var11)();
            var4.children = var10;
            var7 = var9.bind(var3)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var7 = _closure1_slot17;
            var5 = 26;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.NavScrim;
            var5 = {};
            var5 = var7.bind(var3)(var6, var5);
            var4[1] = var5;
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot21 = var6;
    var3 = 27;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = new Array(0);
    var _closure1_slot22 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109200: for (var _fun109200_ip = 0;;) switch (_fun109200_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var _closure2_slot0 = var7;
                var13 = var0.guildId;
                var _closure2_slot1 = var13;
                var9 = var0.contentContainerStyle;
                var8 = var0.webhookType;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 22;
                var3 = var0[var6];
                var12 = var2.bind(var4)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var12)(var10, var3);
                var _closure2_slot2 = var11;
                var0 = var0[var6];
                var10 = var2.bind(var4)(var0);
                var3 = var10.useStateFromStores;
                var0 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun109202: for (var _fun109202_ip = 0;;) switch (_fun109202_ip) {
                        case 0:
                            var2 = _closure1_slot10;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot2;
                            var4 = null;
                            var5 = var4 == var0;
                            var0 = undefined;
                            if (var5) {
                                _fun109202_ip = 39;
                                continue _fun109202
                            }
                        case 30:
                            var5 = _closure2_slot2;
                            var0 = var5.guild_id;
                        case 39:
                            if (!(var4 == var0)) {
                                _fun109202_ip = 47;
                                continue _fun109202
                            }
                        case 43:
                            var0 = _closure2_slot1;
                        case 47:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var12 = var3.bind(var10)(var2, var0);
                var0 = null;
                var3 = var0 == var12;
                var2 = undefined;
                if (var3) {
                    _fun109200_ip = 157;
                    continue _fun109200
                }
            case 152:
                var2 = var12.id;
            case 157:
                if (!(var0 != var2)) {
                    _fun109200_ip = 164;
                    continue _fun109200
                }
            case 161:
                var13 = var2;
            case 164:
                _closure2_slot3 = var13;
                var3 = var0 == var11;
                var2 = undefined;
                if (var3) {
                    _fun109200_ip = 182;
                    continue _fun109200
                }
            case 177:
                var2 = var11.id;
            case 182:
                if (!(var0 != var2)) {
                    _fun109200_ip = 189;
                    continue _fun109200
                }
            case 186:
                var7 = var2;
            case 189:
                _closure2_slot4 = var7;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var10 = var3.bind(var4)(var2);
                var6 = var10.useStateFromStoresArray;
                var2 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun109203: for (var _fun109203_ip = 0;;) switch (_fun109203_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun109203_ip = 21;
                                continue _fun109203
                            }
                        case 13:
                            var0 = _closure2_slot4;
                            if (!(var2 == var0)) {
                                _fun109203_ip = 64;
                                continue _fun109203
                            }
                        case 21:
                            var0 = _closure2_slot3;
                            if (!(var2 == var0)) {
                                _fun109203_ip = 38;
                                continue _fun109203
                            }
                        case 29:
                            var0 = _closure1_slot22;
                            _fun109203_ip = 62;
                            continue _fun109203;
                        case 38:
                            var4 = _closure1_slot12;
                            var3 = var4.getWebhooksForGuild;
                            var2 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2);
                        case 62:
                            _fun109203_ip = 93;
                            continue _fun109203;
                        case 64:
                            var4 = _closure1_slot12;
                            var3 = var4.getWebhooksForChannel;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var0 = var3.bind(var4)(var2, var1);
                        case 93:
                            return var0;
                    }
                };
                var10 = var6.bind(var10)(var3, var2);
                var6 = _closure1_slot8;
                var3 = var6.useEffect;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    _fun109204: for (var _fun109204_ip = 0;;) switch (_fun109204_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun109204_ip = 21;
                                continue _fun109204
                            }
                        case 13:
                            var1 = _closure2_slot4;
                            if (!(var2 == var1)) {
                                _fun109204_ip = 71;
                                continue _fun109204
                            }
                        case 21:
                            var1 = _closure2_slot3;
                            if (!(var2 != var1)) {
                                _fun109204_ip = 116;
                                continue _fun109204
                            }
                        case 29:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchForGuild;
                            var1 = _closure2_slot3;
                            var1 = var2.bind(var3)(var1);
                            _fun109204_ip = 116;
                            continue _fun109204;
                        case 71:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchForChannel;
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 116:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var6)(var1, var2);
                var1 = var0 != var12;
                var0 = null;
                if (!var1) {
                    _fun109200_ip = 365;
                    continue _fun109200
                }
            case 284:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 29;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot17;
                var6 = _closure1_slot21;
                var5 = {};
                var5.guild = var12;
                var5.channel = var11;
                var5.webhooks = var10;
                var5.contentContainerStyle = var9;
                var5.webhookType = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 365:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1372, 1410, 1613, 14014, 660, 33, 1297, 671, 1469, 1417, 5342, 5416, 1234, 21, 3197, 566, 1675, 7322, 14016, 5169, 3120, 14015, 4862, 2]);