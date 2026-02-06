// modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun115594: for (var _fun115594_ip = 0;;) switch (_fun115594_ip) {
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
                _fun115594_ip = 76;
                continue _fun115594;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun115597: for (var _fun115597_ip = 0;;) switch (_fun115597_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.integration;
                var13 = var0.option;
                var _closure2_slot0 = var13;
                var7 = var0.isLast;
                var0 = var0.onPress;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot14;
                var2 = _closure1_slot8;
                var1 = {};
                var8 = _closure1_slot13;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var9 = 13;
                var4 = var10[var9];
                var0 = undefined;
                var4 = var11.bind(var0)(var4);
                var5 = var4.FormRow;
                var4 = {};
                var17 = _closure1_slot13;
                var15 = var10[var9];
                var15 = var11.bind(var0)(var15);
                var15 = var15.FormRow;
                var16 = var15.Label;
                var15 = {};
                var18 = var13.label;
                var15.text = var18;
                var15 = var17.bind(var0)(var16, var15);
                var4.label = var15;
                var12 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.value;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var12;
                var12 = _closure1_slot13;
                var10 = var10[var9];
                var10 = var11.bind(var0)(var10);
                var10 = var10.FormRow;
                var11 = var10.Radio;
                var10 = {};
                var14 = var14.expire_grace_period;
                var13 = var13.value;
                var13 = var14 === var13;
                var10.selected = var13;
                var10 = var12.bind(var0)(var11, var10);
                var4.leading = var10;
                var5 = var8.bind(var0)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (var7) {
                    _fun115597_ip = 259;
                    continue _fun115597
                }
            case 217:
                var8 = _closure1_slot13;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var0)(var6);
                var7 = var6.FormDivider;
                var6 = {};
                var9 = true;
                var6.iconPush = var9;
                var5 = var8.bind(var0)(var7, var6);
            case 259:
                var4[1] = var5;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun115599: for (var _fun115599_ip = 0;;) switch (_fun115599_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isSyncing;
                var5 = var1.onPress;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useLegacyClassComponentStyles;
                var2 = _closure1_slot16;
                var8 = var3.bind(var6)(var2);
                var3 = _closure1_slot13;
                if (var0) {
                    _fun115599_ip = 262;
                    continue _fun115599
                }
            case 64:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var0 = var6.bind(var4)(var0);
                var2 = var0.PressableOpacity;
                var0 = {};
                var7 = 'button';
                var0.accessibilityRole = var7;
                var7 = 11;
                var9 = var10[var7];
                var9 = var6.bind(var4)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var7 = var10[var7];
                var7 = var6.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["+Josox"];
                var7 = var9.bind(var11)(var7);
                var0.accessibilityLabel = var7;
                var0.onPress = var5;
                var7 = _closure1_slot13;
                var5 = 13;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.FormRow;
                var6 = var5.Icon;
                var5 = {};
                var8 = var8.forceSyncIcon;
                var5.style = var8;
                var9 = _closure1_slot1;
                var8 = 15;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var5.source = var8;
                var8 = 16;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.PRIMARY_500;
                var5.color = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun115599_ip = 286;
                continue _fun115599;
            case 262:
                var2 = _closure1_slot10;
                var1 = {
                    'animating': true,
                    'size': 'small'
                };
                var0 = var3.bind(var4)(var2, var1);
            case 286:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.integration;
        var8 = var0.onPress;
        var3 = _closure1_slot13;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var4 = 13;
        var0 = var13[var4];
        var2 = undefined;
        var0 = var12.bind(var2)(var0);
        var1 = var0.FormSection;
        var0 = {};
        var11 = _closure1_slot13;
        var6 = var13[var4];
        var6 = var12.bind(var2)(var6);
        var10 = var6.FormHint;
        var6 = {};
        var9 = 11;
        var14 = var13[var9];
        var14 = var12.bind(var2)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var13[var9];
        var14 = var12.bind(var2)(var14);
        var14 = var14.t;
        var14 = var14["7r4OKg"];
        var14 = var15.bind(var16)(var14);
        var6.children = var14;
        var6 = var11.bind(var2)(var10, var6);
        var0.hint = var6;
        var6 = _closure1_slot13;
        var4 = var13[var4];
        var4 = var12.bind(var2)(var4);
        var5 = var4.FormSwitchRow;
        var4 = {};
        var10 = var13[var9];
        var10 = var12.bind(var2)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.bZBLBs;
        var9 = var10.bind(var11)(var9);
        var4.label = var9;
        var9 = var7.enable_emoticons;
        var4.value = var9;
        var4.onValueChange = var8;
        var7 = var7.syncing;
        var4.disabled = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.View;
    var _closure1_slot8 = var8;
    var8 = var6.Image;
    var _closure1_slot9 = var8;
    var6 = var6.ActivityIndicator;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot13 = var7;
    var7 = var6.jsxs;
    var _closure1_slot14 = var7;
    var6 = var6.Fragment;
    var _closure1_slot15 = var6;
    var6 = 12;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var10 = 24;
    var9.fontSize = var10;
    var6.integrationLabel = var9;
    var9 = {
        'width': 48,
        'height': 48,
        'marginRight': 16
    };
    var6.integrationIcon = var9;
    var9 = {};
    var10 = 10;
    var9.marginLeft = var10;
    var6.forceSyncIcon = var9;
    var9 = {};
    var10 = 'right';
    var9.textAlign = var10;
    var6.value = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun115602: for (var _fun115602_ip = 0;;) switch (_fun115602_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun115602_ip = 86;
                        continue _fun115602
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun115602_ip = 120;
                    continue _fun115602;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var7 = var0.guildId;
                        var1 = var0.integration;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.updateIntegration;
                        var11 = var1.id;
                        var9 = var1.expire_grace_period;
                        var8 = var1.enable_emoticons;
                        var10 = arg0;
                        var13 = var6;
                        var12 = var7;
                        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                        return var0;
                    };
                    var0.handleExpireBehaviorChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var7 = var0.guildId;
                        var1 = var0.integration;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.updateIntegration;
                        var11 = var1.id;
                        var10 = var1.expire_behavior;
                        var8 = var1.enable_emoticons;
                        var9 = arg0;
                        var13 = var6;
                        var12 = var7;
                        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                        return var0;
                    };
                    var0.handleExpireGracePeriodChange = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var7 = var0.guildId;
                        var1 = var0.integration;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.updateIntegration;
                        var11 = var1.id;
                        var10 = var1.expire_behavior;
                        var9 = var1.expire_grace_period;
                        var8 = arg0;
                        var13 = var6;
                        var12 = var7;
                        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                        return var0;
                    };
                    var0.handleToggleEmotes = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var4 = var0.guildId;
                        var1 = var0.integration;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.syncIntegration;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var4, var1);
                        return var0;
                    };
                    var0.handleSync = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun115607: for (var _fun115607_ip = 0;;) switch (_fun115607_ip) {
                case 0:
                    var24 = this;
                    var _closure3_slot0 = var24;
                    var1 = _closure1_slot16;
                    var0 = var24.context;
                    var3 = undefined;
                    var28 = var1.bind(var3)(var0);
                    var0 = var24.props;
                    var1 = var0.guildRoles;
                    var26 = var0.integration;
                    var _closure3_slot1 = var26;
                    var11 = var0.theme;
                    var0 = var26.role_id;
                    var25 = null;
                    var2 = var25 != var0;
                    var13 = null;
                    if (!var2) {
                        _fun115607_ip = 76;
                        continue _fun115607
                    }
                case 72:
                    var13 = var1[var0];
                case 76:
                    var0 = var25 != var13;
                    var17 = undefined;
                    if (!var0) {
                        _fun115607_ip = 304;
                        continue _fun115607
                    }
                case 88:
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var8 = _closure1_slot13;
                    var10 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 13;
                    var4 = var15[var6];
                    var4 = var10.bind(var3)(var4);
                    var7 = var4.FormDivider;
                    var4 = {};
                    var7 = var8.bind(var3)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var8 = _closure1_slot13;
                    var6 = var15[var6];
                    var6 = var10.bind(var3)(var6);
                    var7 = var6.FormRow;
                    var6 = {};
                    var9 = 11;
                    var12 = var15[var9];
                    var12 = var10.bind(var3)(var12);
                    var16 = var12.intl;
                    var12 = var16.string;
                    var9 = var15[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.eBtNBa;
                    var9 = var12.bind(var16)(var9);
                    var6.label = var9;
                    var12 = _closure1_slot13;
                    var9 = 18;
                    var9 = var15[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.Text;
                    var9 = {
                        'style': null,
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var15 = var28.value;
                    var9.style = var15;
                    var13 = var13.name;
                    var9.children = var13;
                    var9 = var12.bind(var3)(var10, var9);
                    var6.trailing = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var4[1] = var6;
                    var0.children = var4;
                    var17 = var2.bind(var3)(var1, var0);
                case 304:
                    var1 = var26.type;
                    var0 = 'youtube';
                    if (!(var0 !== var1)) {
                        _fun115607_ip = 461;
                        continue _fun115607
                    }
                case 320:
                    var2 = var26.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'twitch.tv/';
                    var20 = var1.bind(var0)(var2);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 11;
                    var1 = var6[var0];
                    var1 = var4.bind(var3)(var1);
                    var8 = var1.intl;
                    var7 = var8.string;
                    var1 = var6[var0];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1["S/WCrG"];
                    var18 = var7.bind(var8)(var1);
                    var0 = var6[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var27 = var0.RdUTrl;
                    var6 = _closure1_slot13;
                    var4 = _closure1_slot21;
                    var0 = {};
                    var0.integration = var26;
                    var7 = var24.handleToggleEmotes;
                    var0.onPress = var7;
                    var10 = var6.bind(var3)(var4, var0);
                    _fun115607_ip = 565;
                    continue _fun115607;
                case 461:
                    var0 = var26.account;
                    var1 = var25 == var0;
                    var2 = undefined;
                    if (var1) {
                        _fun115607_ip = 481;
                        continue _fun115607
                    }
                case 476:
                    var2 = var0.name;
                case 481:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 11;
                    var1 = var6[var0];
                    var1 = var4.bind(var3)(var1);
                    var8 = var1.intl;
                    var7 = var8.string;
                    var1 = var6[var0];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1.A5MiqO;
                    var18 = var7.bind(var8)(var1);
                    var0 = var6[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var27 = var0["7lNtce"];
                    var20 = var2;
                    var10 = undefined;
                case 565:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.get;
                    var0 = var26.type;
                    var8 = var1.bind(var2)(var0);
                    var0 = var25 != var8;
                    var19 = null;
                    if (!var0) {
                        _fun115607_ip = 715;
                        continue _fun115607
                    }
                case 609:
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 20;
                    var4 = var12[var4];
                    var7 = var9.bind(var3)(var4);
                    var6 = var7.makeSource;
                    var4 = 21;
                    var4 = var12[var4];
                    var9 = var9.bind(var3)(var4);
                    var4 = var9.isThemeDark;
                    var4 = var4.bind(var9)(var11);
                    var8 = var8.icon;
                    if (var4) {
                        _fun115607_ip = 684;
                        continue _fun115607
                    }
                case 676:
                    var4 = var8.lightPNG;
                    _fun115607_ip = 690;
                    continue _fun115607;
                case 684:
                    var4 = var8.darkPNG;
                case 690:
                    var4 = var6.bind(var7)(var4);
                    var0.source = var4;
                    var4 = var28.integrationIcon;
                    var0.style = var4;
                    var19 = var2.bind(var3)(var1, var0);
                case 715:
                    var0 = function() {
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.values;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.IntegrationExpireGracePeriodTypes;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            var0 = global;
                            var2 = var0.Number;
                            var1 = var2.isInteger;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var5 = arg0;
                            var0 = {};
                            var0.value = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 11;
                            var3 = var7[var1];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1.eGjmy5;
                            var1 = {};
                            var1.days = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.label = var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var16 = var0.bind(var3)();
                    var _closure3_slot2 = var16;
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot15;
                    var0 = {};
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var11 = 13;
                    var4 = var21[var11];
                    var4 = var22.bind(var3)(var4);
                    var7 = var4.Form;
                    var4 = {};
                    var6 = {};
                    var8 = 1;
                    var6.flex = var8;
                    var4.style = var6;
                    var6 = var24.props;
                    var6 = var6.contentContainerStyle;
                    var4.contentContainerStyle = var6;
                    var9 = _closure1_slot13;
                    var6 = var21[var11];
                    var6 = var22.bind(var3)(var6);
                    var8 = var6.FormSection;
                    var6 = {};
                    var15 = _closure1_slot13;
                    var12 = var21[var11];
                    var12 = var22.bind(var3)(var12);
                    var13 = var12.FormRow;
                    var12 = {};
                    var23 = _closure1_slot13;
                    var21 = var21[var11];
                    var21 = var22.bind(var3)(var21);
                    var21 = var21.FormRow;
                    var22 = var21.Label;
                    var21 = {};
                    var28 = var28.integrationLabel;
                    var21.style = var28;
                    var30 = var26.user;
                    var29 = var25 == var30;
                    var28 = undefined;
                    if (var29) {
                        _fun115607_ip = 899;
                        continue _fun115607
                    }
                case 890:
                    var29 = var30.toString;
                    var28 = var29.bind(var30)();
                case 899:
                    var21.text = var28;
                    var21 = var23.bind(var3)(var22, var21);
                    var12.label = var21;
                    var12.subLabel = var20;
                    var12.leading = var19;
                    var12 = var15.bind(var3)(var13, var12);
                    var6.children = var12;
                    var6 = var9.bind(var3)(var8, var6);
                    var9 = new Array(5);
                    var9[0] = var6;
                    var12 = _closure1_slot14;
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var6 = var21[var11];
                    var6 = var22.bind(var3)(var6);
                    var8 = var6.FormSection;
                    var6 = {};
                    var15 = 11;
                    var13 = var21[var15];
                    var13 = var22.bind(var3)(var13);
                    var20 = var13.intl;
                    var19 = var20.string;
                    var13 = var21[var15];
                    var13 = var22.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.i17qFc;
                    var13 = var19.bind(var20)(var13);
                    var6.title = var13;
                    var20 = _closure1_slot13;
                    var13 = var21[var11];
                    var13 = var22.bind(var3)(var13);
                    var19 = var13.FormRow;
                    var13 = {};
                    var21 = var21[var15];
                    var21 = var22.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.format;
                    var21 = {};
                    var29 = var26.subscriber_count;
                    var30 = var25 != var29;
                    var28 = '';
                    if (!var30) {
                        _fun115607_ip = 1091;
                        continue _fun115607
                    }
                case 1088:
                    var28 = var29;
                case 1091:
                    var21.subscribers = var28;
                    var21 = var22.bind(var23)(var27, var21);
                    var13.label = var21;
                    var22 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var21 = var30[var15];
                    var21 = var22.bind(var3)(var21);
                    var27 = var21.intl;
                    var23 = var27.formatToPlainString;
                    var21 = var30[var15];
                    var21 = var22.bind(var3)(var21);
                    var21 = var21.t;
                    var22 = var21["+42M+u"];
                    var21 = {};
                    var29 = _closure1_slot1;
                    var28 = 22;
                    var28 = var30[var28];
                    var29 = var29.bind(var3)(var28);
                    var28 = var26.synced_at;
                    var29 = var29.bind(var3)(var28);
                    var28 = var29.calendar;
                    var28 = var28.bind(var29)();
                    var21.datetime = var28;
                    var21 = var23.bind(var27)(var22, var21);
                    var13.subLabel = var21;
                    var23 = _closure1_slot13;
                    var22 = _closure1_slot20;
                    var21 = {};
                    var27 = var26.syncing;
                    var25 = var25 != var27;
                    if (!var25) {
                        _fun115607_ip = 1238;
                        continue _fun115607
                    }
                case 1235:
                    var25 = var27;
                case 1238:
                    var21.isSyncing = var25;
                    var24 = var24.handleSync;
                    var21.onPress = var24;
                    var21 = var23.bind(var3)(var22, var21);
                    var13.trailing = var21;
                    var19 = var20.bind(var3)(var19, var13);
                    var13 = new Array(2);
                    var13[0] = var19;
                    var13[1] = var17;
                    var6.children = var13;
                    var6 = var12.bind(var3)(var8, var6);
                    var9[1] = var6;
                    var17 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var12 = var8[var11];
                    var12 = var6.bind(var3)(var12);
                    var13 = var12.FormSection;
                    var12 = {};
                    var12.title = var18;
                    var20 = _closure1_slot13;
                    var18 = var8[var11];
                    var18 = var6.bind(var3)(var18);
                    var19 = var18.FormRow;
                    var18 = {};
                    var21 = var8[var15];
                    var21 = var6.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var8[var15];
                    var21 = var6.bind(var3)(var21);
                    var21 = var21.t;
                    var21 = var21["6kpw4i"];
                    var21 = var22.bind(var23)(var21);
                    var18.label = var21;
                    var21 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleExpireBehaviorChange;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 23;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.IntegrationExpireBehaviorTypes;
                        var0 = var0.REMOVE_ROLE;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var18.onPress = var21;
                    var23 = _closure1_slot13;
                    var21 = var8[var11];
                    var21 = var6.bind(var3)(var21);
                    var21 = var21.FormRow;
                    var22 = var21.Radio;
                    var21 = {};
                    var27 = var26.expire_behavior;
                    var25 = 23;
                    var24 = var8[var25];
                    var24 = var6.bind(var3)(var24);
                    var24 = var24.IntegrationExpireBehaviorTypes;
                    var24 = var24.REMOVE_ROLE;
                    var24 = var27 === var24;
                    var21.selected = var24;
                    var21 = var23.bind(var3)(var22, var21);
                    var18.leading = var21;
                    var19 = var20.bind(var3)(var19, var18);
                    var18 = new Array(3);
                    var18[0] = var19;
                    var21 = _closure1_slot13;
                    var19 = var8[var11];
                    var19 = var6.bind(var3)(var19);
                    var20 = var19.FormDivider;
                    var19 = {};
                    var22 = true;
                    var19.iconPush = var22;
                    var19 = var21.bind(var3)(var20, var19);
                    var18[1] = var19;
                    var21 = _closure1_slot13;
                    var19 = var8[var11];
                    var19 = var6.bind(var3)(var19);
                    var20 = var19.FormRow;
                    var19 = {};
                    var22 = var8[var15];
                    var22 = var6.bind(var3)(var22);
                    var24 = var22.intl;
                    var23 = var24.string;
                    var22 = var8[var15];
                    var22 = var6.bind(var3)(var22);
                    var22 = var22.t;
                    var22 = var22.fQUQIJ;
                    var22 = var23.bind(var24)(var22);
                    var19.label = var22;
                    var22 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleExpireBehaviorChange;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 23;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.IntegrationExpireBehaviorTypes;
                        var0 = var0.KICK;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var19.onPress = var22;
                    var24 = _closure1_slot13;
                    var22 = var8[var11];
                    var22 = var6.bind(var3)(var22);
                    var22 = var22.FormRow;
                    var23 = var22.Radio;
                    var22 = {};
                    var26 = var26.expire_behavior;
                    var25 = var8[var25];
                    var25 = var6.bind(var3)(var25);
                    var25 = var25.IntegrationExpireBehaviorTypes;
                    var25 = var25.KICK;
                    var25 = var26 === var25;
                    var22.selected = var25;
                    var22 = var24.bind(var3)(var23, var22);
                    var19.leading = var22;
                    var19 = var21.bind(var3)(var20, var19);
                    var18[2] = var19;
                    var12.children = var18;
                    var12 = var17.bind(var3)(var13, var12);
                    var9[2] = var12;
                    var13 = _closure1_slot13;
                    var11 = var8[var11];
                    var11 = var6.bind(var3)(var11);
                    var12 = var11.FormSection;
                    var11 = {};
                    var17 = var8[var15];
                    var17 = var6.bind(var3)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var8[var15];
                    var15 = var6.bind(var3)(var15);
                    var15 = var15.t;
                    var15 = var15.uiXMow;
                    var15 = var17.bind(var18)(var15);
                    var11.title = var15;
                    var15 = var16.map;
                    var14 = function(arg0, arg1) { // Environment: var14
                        var4 = arg1;
                        var3 = _closure1_slot13;
                        var2 = _closure1_slot19;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var1.integration = var5;
                        var5 = arg0;
                        var1.option = var5;
                        var5 = _closure3_slot2;
                        var6 = var5.length;
                        var5 = 1;
                        var5 = var6 - var5;
                        var5 = var4 === var5;
                        var1.isLast = var5;
                        var0 = _closure3_slot0;
                        var0 = var0.handleExpireGracePeriodChange;
                        var1.onPress = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1, var4);
                        return var0;
                    };
                    var14 = var15.bind(var16)(var14);
                    var11.children = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    var9[3] = var11;
                    var9[4] = var10;
                    var4.children = var9;
                    var7 = var2.bind(var3)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var7 = _closure1_slot13;
                    var5 = 24;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.NavScrim;
                    var5 = {};
                    var5 = var7.bind(var3)(var6, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot17 = var6;
    var3 = 25;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/integrations/native/GuildSettingsModalIntegrationSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115614: for (var _fun115614_ip = 0;;) switch (_fun115614_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.integrationId;
                var5 = var0.contentContainerStyle;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 26;
                var8 = var6[var0];
                var4 = undefined;
                var11 = var3.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot12;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var7
                    var1 = _closure1_slot12;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var9 = var8.guild;
                var _closure2_slot0 = var9;
                var11 = var8.integrations;
                var0 = var6[var0];
                var10 = var3.bind(var4)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var7
                    _fun115616: for (var _fun115616_ip = 0;;) switch (_fun115616_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun115616_ip = 45;
                                continue _fun115616
                            }
                        case 18:
                            var3 = _closure1_slot11;
                            var2 = var3.getRolesSnapshot;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var8 = var8.bind(var10)(var3, var0);
                var3 = _closure1_slot1;
                var0 = 27;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var6 = var0.bind(var4)();
                var3 = null;
                var10 = var3 == var11;
                var0 = undefined;
                if (var10) {
                    _fun115614_ip = 174;
                    continue _fun115614
                }
            case 157:
                var10 = var11.filter;
                var7 = function(arg0) { // Environment: var7
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var10.bind(var11)(var7);
            case 174:
                var10 = var3 == var0;
                var7 = undefined;
                if (var10) {
                    _fun115614_ip = 187;
                    continue _fun115614
                }
            case 183:
                var7 = var0[var2];
            case 187:
                var2 = var3 == var9;
                var0 = null;
                if (var2) {
                    _fun115614_ip = 259;
                    continue _fun115614
                }
            case 196:
                var2 = var3 == var7;
                var0 = null;
                if (var2) {
                    _fun115614_ip = 259;
                    continue _fun115614
                }
            case 205:
                var2 = var3 == var8;
                var0 = null;
                if (var2) {
                    _fun115614_ip = 259;
                    continue _fun115614
                }
            case 214:
                var3 = _closure1_slot13;
                var2 = _closure1_slot17;
                var1 = {};
                var9 = var9.id;
                var1.guildId = var9;
                var1.guildRoles = var8;
                var1.integration = var7;
                var1.theme = var6;
                var1.contentContainerStyle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 259:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1674, 8181, 33, 14788, 1234, 1297, 5383, 4905, 14789, 671, 8180, 3943, 4396, 1417, 3208, 3047, 14790, 5207, 3161, 566, 3248, 14762, 2]);