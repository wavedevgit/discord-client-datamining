// modules/guild_settings/audit_log/native/AuditLog.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun115184: for (var _fun115184_ip = 0;;) switch (_fun115184_ip) {
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
                _fun115184_ip = 76;
                continue _fun115184;
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
    var0 = function arg0, arg1() {
        _fun115187: for (var _fun115187_ip = 0;;) switch (_fun115187_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = _closure1_slot3;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.NotRenderedChanges;
                var0 = arg0;
                var0 = var0.targetType;
                var2 = var1[var0];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun115187_ip = 71;
                    continue _fun115187
                }
            case 53:
                var1 = arg1;
                var1 = var1.key;
                var2 = var2[var1];
                var1 = true;
                var0 = var1 === var2;
            case 71:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun115188: for (var _fun115188_ip = 0;;) switch (_fun115188_ip) {
            case 0:
                var6 = arg1;
                var8 = arg2;
                var2 = var6.action;
                var1 = _closure1_slot17;
                var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(var2 !== var1)) {
                    _fun115188_ip = 292;
                    continue _fun115188
                }
            case 31:
                var2 = var6.action;
                var1 = _closure1_slot17;
                var1 = var1.AUTO_MODERATION_FLAG_TO_CHANNEL;
                if (!(var2 !== var1)) {
                    _fun115188_ip = 292;
                    continue _fun115188
                }
            case 53:
                var2 = var6.action;
                var1 = _closure1_slot17;
                var1 = var1.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
                if (!(var2 !== var1)) {
                    _fun115188_ip = 292;
                    continue _fun115188
                }
            case 75:
                var2 = var6.action;
                var1 = _closure1_slot17;
                var1 = var1.AUTO_MODERATION_QUARANTINE_USER;
                if (!(var2 !== var1)) {
                    _fun115188_ip = 292;
                    continue _fun115188
                }
            case 97:
                var1 = var6.options;
                var1 = var1.integration_type;
                var5 = null;
                if (!(var5 != var1)) {
                    _fun115188_ip = 161;
                    continue _fun115188
                }
            case 114:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 18;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.get;
                var1 = var6.options;
                var1 = var1.integration_type;
                var1 = var2.bind(var3)(var1);
                if (!(var5 == var1)) {
                    _fun115188_ip = 203;
                    continue _fun115188
                }
            case 161:
                var7 = var5 != var8;
                var2 = undefined;
                if (!var7) {
                    _fun115188_ip = 201;
                    continue _fun115188
                }
            case 170:
                var7 = var6.user;
                var5 = var5 == var7;
                var3 = undefined;
                if (var5) {
                    _fun115188_ip = 198;
                    continue _fun115188
                }
            case 184:
                var6 = var7.getAvatarSource;
                var5 = false;
                var3 = var6.bind(var7)(var8, var5);
            case 198:
                var2 = var3;
            case 201:
                return var2;
            case 203:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 19;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.isThemeDark;
                var2 = arg0;
                var2 = var3.bind(var5)(var2);
                var1 = var1.icon;
                if (var2) {
                    _fun115188_ip = 253;
                    continue _fun115188
                }
            case 245:
                var3 = var1.lightPNG;
                _fun115188_ip = 259;
                continue _fun115188;
            case 253:
                var3 = var1.darkPNG;
            case 259:
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.makeSource;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 292:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 16;
                var1 = var7[var0];
                var5 = undefined;
                var2 = var6.bind(var5)(var1);
                var1 = var2.ensureAvatarSource;
                var3 = 17;
                var3 = var7[var3];
                var4 = var6.bind(var5)(var3);
                var3 = var4.makeSource;
                var0 = var7[var0];
                var5 = var6.bind(var5)(var0);
                var0 = var5.getAutomodAvatarURL;
                var0 = var0.bind(var5)();
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun115189: for (var _fun115189_ip = 0;;) switch (_fun115189_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 20;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useGetOrFetchApplication;
                var5 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun115189_ip = 111;
                    continue _fun115189
                }
            case 53:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 21;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var5 = var5.name;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 111:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var9 = var7.bind(var0)(var6);
    var _closure1_slot11 = var9;
    var13 = 8;
    var6 = var5[var13];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var14 = 10;
    var6 = var5[var14];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.AuditLogTargetTypes;
    var _closure1_slot15 = var8;
    var8 = var6.AuditLogActionTypes;
    var _closure1_slot16 = var8;
    var8 = var6.AuditLogActions;
    var _closure1_slot17 = var8;
    var8 = var6.NOOP;
    var _closure1_slot18 = var8;
    var12 = var6.Fonts;
    var6 = var6.AuditLogChangeKeys;
    var _closure1_slot19 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot20 = var8;
    var6 = var6.jsxs;
    var _closure1_slot21 = var6;
    var6 = 13;
    var6 = var5[var6];
    var10 = var4.bind(var0)(var6);
    var8 = var10.createLegacyClassComponentStyles;
    var6 = {};
    var11 = {
        'marginHorizontal': 8,
        'marginVertical': 4,
        'borderRadius': 3
    };
    var6.container = var11;
    var11 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.rowContainer = var11;
    var11 = {
        'marginRight': 24,
        'flex': 1
    };
    var6.titleContainer = var11;
    var11 = {};
    var11.marginHorizontal = var13;
    var6.title = var11;
    var11 = {
        'fontSize': 12,
        'lineHeight': 30
    };
    var13 = 14;
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_400;
    var11.color = var15;
    var6.discriminator = var11;
    var11 = {
        'marginLeft': 10,
        'height': 32,
        'width': 32
    };
    var6.avatar = var11;
    var11 = {
        'fontSize': 12,
        'marginHorizontal': 8,
        'marginTop': 8
    };
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_400;
    var11.color = var15;
    var6.timestamp = var11;
    var11 = {
        'height': 13,
        'width': 8,
        'marginRight': 8
    };
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var11.tintColor = var15;
    var6.arrow = var11;
    var11 = {};
    var16 = {};
    var15 = '90deg';
    var16.rotate = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var11.transform = var15;
    var6.rotate90 = var11;
    var11 = {};
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11.marginTop = var15;
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11.padding = var15;
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var11.borderRadius = var15;
    var15 = var5[var13];
    var15 = var7.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var11.backgroundColor = var15;
    var6.changesContainer = var11;
    var11 = {
        'flexDirection': 'row',
        'flex': 1,
        'alignItems': 'flex-start'
    };
    var6.changeRow = var11;
    var11 = {};
    var11.marginRight = var14;
    var14 = var12.CODE_BOLD;
    var11.fontFamily = var14;
    var6.changeNumberText = var11;
    var11 = {
        'color': null,
        'alignItems': 'baseline',
        'fontSize': 14
    };
    var14 = var5[var13];
    var14 = var7.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.PRIMARY_400;
    var11.color = var14;
    var6.changeItemText = var11;
    var11 = {
        'height': 10,
        'width': 10,
        'borderRadius': 5
    };
    var13 = var5[var13];
    var13 = var7.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.TRANSPARENT;
    var11.borderColor = var13;
    var6.colorHook = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'fontFamily': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginTop': 4294967294
    };
    var12 = var12.PRIMARY_MEDIUM;
    var11.fontFamily = var12;
    var6.colorsHook = var11;
    var11 = {
        'flex': 1,
        'alignItems': 'flex-start'
    };
    var6.changeItemContent = var11;
    var11 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var6.changeItemTextContainer = var11;
    var11 = {
        'height': 'auto',
        'paddingVertical': 0,
        'paddingHorizontal': 4
    };
    var6.forumTag = var11;
    var11 = {
        'height': 14,
        'width': 14
    };
    var6.imageEmoji = var11;
    var11 = {
        'fontSize': 14,
        'lineHeight': 16
    };
    var6.textEmoji = var11;
    var6 = var8.bind(var10)(var6);
    var _closure1_slot22 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun115191: for (var _fun115191_ip = 0;;) switch (_fun115191_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun115191_ip = 69;
                        continue _fun115191
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun115191_ip = 105;
                    continue _fun115191;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'hasChangesToRender';
        var4.key = var0;
        var0 = function() {
            _fun115192: for (var _fun115192_ip = 0;;) switch (_fun115192_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var3 = var0.log;
                    var _closure3_slot0 = var3;
                    var4 = var3.changes;
                    var5 = var3.actionType;
                    var0 = _closure1_slot16;
                    var0 = var0.DELETE;
                    var0 = var5 !== var0;
                    if (var0) {
                        _fun115192_ip = 70;
                        continue _fun115192
                    }
                case 51:
                    var6 = var3.action;
                    var5 = _closure1_slot17;
                    var5 = var5.MEMBER_BAN_ADD;
                    var0 = var6 === var5;
                case 70:
                    if (var0) {
                        _fun115192_ip = 92;
                        continue _fun115192
                    }
                case 73:
                    var6 = var3.action;
                    var5 = _closure1_slot17;
                    var5 = var5.MEMBER_KICK;
                    var0 = var6 === var5;
                case 92:
                    if (var0) {
                        _fun115192_ip = 114;
                        continue _fun115192
                    }
                case 95:
                    var3 = var3.action;
                    var1 = _closure1_slot17;
                    var1 = var1.MEMBER_PRUNE;
                    var0 = var3 === var1;
                case 114:
                    if (!var0) {
                        _fun115192_ip = 147;
                        continue _fun115192
                    }
                case 117:
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun115192_ip = 144;
                        continue _fun115192
                    }
                case 126:
                    var3 = var4.some;
                    var2 = function(arg0) { // Environment: var2
                        var3 = _closure1_slot24;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var2, var0);
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2);
                case 144:
                    var0 = var1;
                case 147:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderTitle';
        var4.key = var6;
        var6 = function() {
            _fun115194: for (var _fun115194_ip = 0;;) switch (_fun115194_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot22;
                    var1 = var0.context;
                    var4 = undefined;
                    var5 = var2.bind(var4)(var1);
                    var _closure3_slot0 = var5;
                    var0 = var0.props;
                    var2 = var0.log;
                    var _closure3_slot1 = var2;
                    var14 = var2.user;
                    var _closure3_slot2 = var14;
                    var12 = var2.target;
                    var _closure3_slot3 = var12;
                    var9 = var2.options;
                    var _closure3_slot4 = var9;
                    var1 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 15;
                    var0 = var3[var0];
                    var1 = var1.bind(var4)(var0);
                    var0 = var1.getChangeTitle;
                    var8 = var0.bind(var1)(var2);
                    var13 = null;
                    var1 = var13 != var8;
                    var0 = null;
                    if (!var1) {
                        _fun115194_ip = 376;
                        continue _fun115194
                    }
                case 115:
                    var3 = _closure1_slot20;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 21;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var2 = var1.Text;
                    var1 = {
                        'style': null,
                        'accessibilityRole': 'header',
                        'variant': 'text-md/medium',
                        'color': 'mobile-text-heading-primary'
                    };
                    var5 = var5.title;
                    var1.style = var5;
                    var5 = 22;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var7 = var5.intl;
                    var6 = var7.format;
                    var5 = {};
                    var5.user = var14;
                    var5.target = var12;
                    var12 = function() {
                        _fun115195: for (var _fun115195_ip = 0;;) switch (_fun115195_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var3 = null;
                                if (!(var3 == var1)) {
                                    _fun115195_ip = 286;
                                    continue _fun115195
                                }
                            case 16:
                                var1 = _closure3_slot4;
                                var1 = var1.integration_type;
                                if (!(var3 == var1)) {
                                    _fun115195_ip = 92;
                                    continue _fun115195
                                }
                            case 30:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var1 = 22;
                                var2 = var7[var1];
                                var5 = undefined;
                                var2 = var6.bind(var5)(var2);
                                var4 = var2.intl;
                                var2 = var4.string;
                                var1 = var7[var1];
                                var1 = var6.bind(var5)(var1);
                                var1 = var1.t;
                                var1 = var1["30mdIx"];
                                var1 = var2.bind(var4)(var1);
                                return var1;
                            case 92:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var1 = 18;
                                var1 = var5[var1];
                                var5 = undefined;
                                var6 = var4.bind(var5)(var1);
                                var4 = var6.get;
                                var1 = _closure3_slot4;
                                var1 = var1.integration_type;
                                var4 = var4.bind(var6)(var1);
                                var6 = var3 == var4;
                                var1 = undefined;
                                if (var6) {
                                    _fun115195_ip = 151;
                                    continue _fun115195
                                }
                            case 146:
                                var1 = var4.name;
                            case 151:
                                if (!(var3 == var1)) {
                                    _fun115195_ip = 212;
                                    continue _fun115195
                                }
                            case 155:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 22;
                                var4 = var8[var3];
                                var4 = var7.bind(var5)(var4);
                                var6 = var4.intl;
                                var4 = var6.string;
                                var3 = var8[var3];
                                var3 = var7.bind(var5)(var3);
                                var3 = var3.t;
                                var3 = var3["n+olu7"];
                                var1 = var4.bind(var6)(var3);
                            case 212:
                                var4 = _closure1_slot20;
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var2 = 21;
                                var2 = var6[var2];
                                var2 = var3.bind(var5)(var2);
                                var3 = var2.Text;
                                var2 = {
                                    'variant': 'text-md/medium',
                                    'color': 'text-default'
                                };
                                var2.children = var1;
                                var1 = _closure3_slot4;
                                var6 = var1.integration_type;
                                var1 = 'integration';
                                var1 = var1 + var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var1;
                            case 286:
                                var4 = _closure1_slot21;
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var1 = 21;
                                var1 = var8[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.Text;
                                var1 = {
                                    'variant': 'text-md/medium',
                                    'color': 'text-default'
                                };
                                var6 = _closure1_slot1;
                                var5 = 23;
                                var5 = var8[var5];
                                var9 = var6.bind(var3)(var5);
                                var6 = var9.getUserTag;
                                var8 = _closure3_slot2;
                                var5 = {};
                                var10 = 'username';
                                var5.mode = var10;
                                var6 = var6.bind(var9)(var8, var5);
                                var5 = new Array(2);
                                var5[0] = var6;
                                var6 = var8.hasUniqueUsername;
                                var6 = var6.bind(var8)();
                                var6 = !var6;
                                if (!var6) {
                                    _fun115195_ip = 474;
                                    continue _fun115195
                                }
                            case 400:
                                var9 = _closure1_slot20;
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var7 = 24;
                                var7 = var10[var7];
                                var7 = var8.bind(var3)(var7);
                                var8 = var7.LegacyText;
                                var7 = {};
                                var10 = _closure3_slot0;
                                var10 = var10.discriminator;
                                var7.style = var10;
                                var10 = _closure3_slot2;
                                var11 = var10.discriminator;
                                var10 = '#';
                                var10 = var10 + var11;
                                var7.children = var10;
                                var6 = var9.bind(var3)(var8, var7);
                            case 474:
                                var5[1] = var6;
                                var1.children = var5;
                                var0 = _closure3_slot2;
                                var5 = var0.id;
                                var0 = 'user';
                                var0 = var0 + var5;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var5.userHook = var12;
                    var12 = function arg0, arg1() {
                        _fun115196: for (var _fun115196_ip = 0;;) switch (_fun115196_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                var2 = var0.targetType;
                                var0 = _closure1_slot15;
                                var0 = var0.USER;
                                if (!(var2 === var0)) {
                                    _fun115196_ip = 48;
                                    continue _fun115196
                                }
                            case 30:
                                var2 = _closure3_slot3;
                                var0 = _closure1_slot12;
                                var0 = var2 instanceof var0;
                                if (var0) {
                                    _fun115196_ip = 272;
                                    continue _fun115196
                                }
                            case 48:
                                var0 = _closure3_slot1;
                                var2 = var0.targetType;
                                var0 = _closure1_slot15;
                                var0 = var0.GUILD;
                                if (!(var2 === var0)) {
                                    _fun115196_ip = 127;
                                    continue _fun115196
                                }
                            case 72:
                                var0 = _closure3_slot3;
                                var2 = 'object';
                                var0 = typeof var0;
                                if (!(var2 === var0)) {
                                    _fun115196_ip = 127;
                                    continue _fun115196
                                }
                            case 87:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var0 = 25;
                                var0 = var3[var0];
                                var6 = undefined;
                                var3 = var2.bind(var6)(var0);
                                var2 = var3.isGuildRecord;
                                var0 = _closure3_slot3;
                                var0 = var2.bind(var3)(var0);
                                if (var0) {
                                    _fun115196_ip = 191;
                                    continue _fun115196
                                }
                            case 127:
                                var5 = _closure1_slot20;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var0 = 21;
                                var0 = var3[var0];
                                var4 = undefined;
                                var0 = var2.bind(var4)(var0);
                                var3 = var0.Text;
                                var2 = {
                                    'variant': 'text-md/medium',
                                    'color': 'text-default'
                                };
                                var0 = arg0;
                                var2.children = var0;
                                var0 = arg1;
                                var0 = var5.bind(var4)(var3, var2, var0);
                                _fun115196_ip = 267;
                                continue _fun115196;
                            case 191:
                                var5 = _closure1_slot20;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var2 = 21;
                                var2 = var4[var2];
                                var2 = var3.bind(var6)(var2);
                                var4 = var2.Text;
                                var3 = {
                                    'variant': 'text-md/medium',
                                    'color': 'text-default'
                                };
                                var2 = _closure3_slot3;
                                var7 = var2.name;
                                var3.children = var7;
                                var7 = var2.id;
                                var2 = 'target';
                                var2 = var2 + var7;
                                var0 = var5.bind(var6)(var4, var3, var2);
                            case 267:
                                _fun115196_ip = 492;
                                continue _fun115196;
                            case 272:
                                var5 = _closure1_slot21;
                                var3 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var2 = 21;
                                var2 = var9[var2];
                                var4 = undefined;
                                var2 = var3.bind(var4)(var2);
                                var3 = var2.Text;
                                var2 = {
                                    'variant': 'text-md/medium',
                                    'color': 'text-default'
                                };
                                var7 = _closure1_slot1;
                                var6 = 23;
                                var6 = var9[var6];
                                var10 = var7.bind(var4)(var6);
                                var9 = var10.getUserTag;
                                var7 = _closure3_slot3;
                                var6 = {};
                                var11 = 'username';
                                var6.mode = var11;
                                var9 = var9.bind(var10)(var7, var6);
                                var6 = new Array(2);
                                var6[0] = var9;
                                var9 = var7.discriminator;
                                var7 = '0';
                                var7 = var7 !== var9;
                                if (!var7) {
                                    _fun115196_ip = 460;
                                    continue _fun115196
                                }
                            case 386:
                                var10 = _closure1_slot20;
                                var9 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var8 = 24;
                                var8 = var11[var8];
                                var8 = var9.bind(var4)(var8);
                                var9 = var8.LegacyText;
                                var8 = {};
                                var11 = _closure3_slot0;
                                var11 = var11.discriminator;
                                var8.style = var11;
                                var11 = _closure3_slot3;
                                var12 = var11.discriminator;
                                var11 = '#';
                                var11 = var11 + var12;
                                var8.children = var11;
                                var7 = var10.bind(var4)(var9, var8);
                            case 460:
                                var6[1] = var7;
                                var2.children = var6;
                                var1 = _closure3_slot3;
                                var6 = var1.id;
                                var1 = 'target';
                                var1 = var1 + var6;
                                var0 = var5.bind(var4)(var3, var2, var1);
                            case 492:
                                return var0;
                        }
                    };
                    var5.targetHook = var12;
                    var14 = var9.count;
                    var15 = var13 != var14;
                    var12 = '';
                    if (!var15) {
                        _fun115194_ip = 248;
                        continue _fun115194
                    }
                case 245:
                    var12 = var14;
                case 248:
                    var5.count = var12;
                    var12 = var9.channel;
                    if (!(var13 != var12)) {
                        _fun115194_ip = 328;
                        continue _fun115194
                    }
                case 262:
                    var12 = var9.channel;
                    var13 = 'string';
                    var12 = typeof var12;
                    if (!(var13 !== var12)) {
                        _fun115194_ip = 328;
                        continue _fun115194
                    }
                case 278:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 26;
                    var12 = var14[var12];
                    var16 = var13.bind(var4)(var12);
                    var15 = var16.computeChannelName;
                    var20 = var9.channel;
                    var19 = _closure1_slot14;
                    var18 = _closure1_slot13;
                    var17 = true;
                    var21 = var16;
                    var11 = var21[var15](var20, var19, var18, var17, var16);
                    _fun115194_ip = 333;
                    continue _fun115194;
                case 328:
                    var11 = var9.channel;
                case 333:
                    var5.channel = var11;
                    var10 = function arg0, arg1() {
                        var4 = _closure1_slot20;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 21;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var2 = var0.Text;
                        var1 = {
                            'variant': 'text-md/medium',
                            'color': 'text-default'
                        };
                        var0 = arg0;
                        var1.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var5.channelHook = var10;
                    var9 = var9.subtarget;
                    var5.subtarget = var9;
                    var5 = var6.bind(var7)(var8, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 376:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'renderRoleUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun115198: for (var _fun115198_ip = 0;;) switch (_fun115198_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.newValue;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var1 = var0.bind(var1)(var3);
                    var0 = null;
                    if (!var1) {
                        _fun115198_ip = 51;
                        continue _fun115198
                    }
                case 32:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = _closure1_slot20;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 21;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {
                            'variant': 'text-sm/medium',
                            'color': 'text-muted'
                        };
                        var5 = var0.name;
                        var1.children = var5;
                        var0 = var0.id;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderPermissionUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun115200: for (var _fun115200_ip = 0;;) switch (_fun115200_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = arg0;
                    var3 = var0.newValue;
                    var0 = global;
                    var2 = var0.Array;
                    var0 = var2.isArray;
                    var2 = var0.bind(var2)(var3);
                    var0 = null;
                    if (!var2) {
                        _fun115200_ip = 58;
                        continue _fun115200
                    }
                case 41:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var3 = _closure1_slot20;
                        var1 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var0 = 21;
                        var0 = var7[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.Text;
                        var0 = {
                            'variant': 'text-sm/medium',
                            'color': 'text-muted'
                        };
                        var6 = _closure1_slot2;
                        var5 = 15;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.getStringForPermission;
                        var5 = _closure3_slot0;
                        var5 = var5.props;
                        var5 = var5.log;
                        var5 = var6.bind(var7)(var4, var5);
                        var0.children = var5;
                        var0 = var3.bind(var2)(var1, var0, var4);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 58:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderChangeDetails';
        var4.key = var6;
        var6 = function arg0() {
            _fun115202: for (var _fun115202_ip = 0;;) switch (_fun115202_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var5 = _closure1_slot22;
                    var3 = var0.context;
                    var4 = undefined;
                    var6 = var5.bind(var4)(var3);
                    var _closure3_slot2 = var6;
                    var0 = var0.props;
                    var3 = var0.log;
                    var _closure3_slot3 = var3;
                    var5 = var3.changes;
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun115202_ip = 126;
                        continue _fun115202
                    }
                case 65:
                    var5 = 0;
                    var _closure3_slot4 = var5;
                    var5 = var3.changes;
                    var3 = var5.map;
                    var2 = function(arg0, arg1) { // Environment: var2
                        _fun115203: for (var _fun115203_ip = 0;;) switch (_fun115203_ip) {
                            case 0:
                                var7 = arg0;
                                var1 = _closure1_slot24;
                                var0 = _closure3_slot3;
                                var5 = undefined;
                                var0 = var1.bind(var5)(var0, var7);
                                if (var0) {
                                    _fun115203_ip = 1535;
                                    continue _fun115203
                                }
                            case 33:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.CHANNEL_UPDATE;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 79;
                                    continue _fun115203
                                }
                            case 56:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.CHANNEL_CREATE;
                                if (!(var1 === var0)) {
                                    _fun115203_ip = 101;
                                    continue _fun115203
                                }
                            case 79:
                                var1 = var7.key;
                                var0 = _closure1_slot19;
                                var0 = var0.TYPE;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 424;
                                    continue _fun115203
                                }
                            case 101:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.MEMBER_UPDATE;
                                if (!(var1 === var0)) {
                                    _fun115203_ip = 146;
                                    continue _fun115203
                                }
                            case 124:
                                var1 = var7.key;
                                var0 = _closure1_slot19;
                                var0 = var0.COMMUNICATION_DISABLED_UNTIL;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 329;
                                    continue _fun115203
                                }
                            case 146:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.GUILD_UPDATE;
                                if (!(var1 === var0)) {
                                    _fun115203_ip = 188;
                                    continue _fun115203
                                }
                            case 169:
                                var1 = var7.key;
                                var0 = _closure1_slot19;
                                var0 = var0.OWNER_ID;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 221;
                                    continue _fun115203
                                }
                            case 188:
                                var0 = {};
                                var1 = var7.oldValue;
                                var0.oldValue = var1;
                                var1 = var7.newValue;
                                var0.newValue = var1;
                                var1 = false;
                                var0.transformedValues = var1;
                                _fun115203_ip = 324;
                                continue _fun115203;
                            case 221:
                                var1 = {};
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 23;
                                var8 = var4[var2];
                                var12 = var3.bind(var5)(var8);
                                var11 = var12.getUserTag;
                                var10 = var7.oldValue;
                                var8 = {};
                                var9 = 'username';
                                var8.mode = var9;
                                var8 = var11.bind(var12)(var10, var8);
                                var1.oldValue = var8;
                                var2 = var4[var2];
                                var8 = var3.bind(var5)(var2);
                                var4 = var8.getUserTag;
                                var3 = var7.newValue;
                                var2 = {};
                                var2.mode = var9;
                                var2 = var4.bind(var8)(var3, var2);
                                var1.newValue = var2;
                                var2 = true;
                                var1.transformedValues = var2;
                                var0 = var1;
                            case 324:
                                _fun115203_ip = 554;
                                continue _fun115203;
                            case 329:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 28;
                                var1 = var3[var1];
                                var2 = var2.bind(var5)(var1);
                                var1 = var7.newValue;
                                var4 = var2.bind(var5)(var1);
                                var1 = {};
                                var2 = var7.oldValue;
                                var1.oldValue = var2;
                                var2 = var4.isValid;
                                var2 = var2.bind(var4)();
                                if (var2) {
                                    _fun115203_ip = 394;
                                    continue _fun115203
                                }
                            case 386:
                                var2 = var7.newValue;
                                _fun115203_ip = 404;
                                continue _fun115203;
                            case 394:
                                var3 = var4.calendar;
                                var2 = var3.bind(var4)();
                            case 404:
                                var1.newValue = var2;
                                var2 = true;
                                var1.transformedValues = var2;
                                var0 = var1;
                                _fun115203_ip = 554;
                                continue _fun115203;
                            case 424:
                                var1 = {};
                                var2 = var7.oldValue;
                                var3 = null;
                                if (!(var3 == var2)) {
                                    _fun115203_ip = 481;
                                    continue _fun115203
                                }
                            case 438:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var4 = 27;
                                var4 = var9[var4];
                                var9 = var8.bind(var5)(var4);
                                var8 = var9.channelTypeString;
                                var4 = {};
                                var10 = var7.oldValue;
                                var4.type = var10;
                                var2 = var8.bind(var9)(var4);
                            case 481:
                                var1.oldValue = var2;
                                var2 = var7.newValue;
                                if (!(var3 == var2)) {
                                    _fun115203_ip = 539;
                                    continue _fun115203
                                }
                            case 496:
                                var4 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 27;
                                var3 = var8[var3];
                                var8 = var4.bind(var5)(var3);
                                var4 = var8.channelTypeString;
                                var3 = {};
                                var9 = var7.newValue;
                                var3.type = var9;
                                var2 = var4.bind(var8)(var3);
                            case 539:
                                var1.newValue = var2;
                                var2 = true;
                                var1.transformedValues = var2;
                                var0 = var1;
                            case 554:
                                var8 = var0.oldValue;
                                var _closure4_slot0 = var8;
                                var18 = var0.newValue;
                                var _closure4_slot1 = var18;
                                var15 = var0.transformedValues;
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.MEMBER_ROLE_UPDATE;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 694;
                                    continue _fun115203
                                }
                            case 603:
                                var0 = _closure3_slot3;
                                var1 = var0.targetType;
                                var0 = _closure1_slot15;
                                var0 = var0.ROLE;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 675;
                                    continue _fun115203
                                }
                            case 627:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.CHANNEL_OVERWRITE_CREATE;
                                if (!(var1 !== var0)) {
                                    _fun115203_ip = 675;
                                    continue _fun115203
                                }
                            case 650:
                                var0 = _closure3_slot3;
                                var1 = var0.action;
                                var0 = _closure1_slot17;
                                var0 = var0.CHANNEL_OVERWRITE_UPDATE;
                                var11 = null;
                                if (!(var1 === var0)) {
                                    _fun115203_ip = 692;
                                    continue _fun115203
                                }
                            case 675:
                                var1 = _closure3_slot0;
                                var0 = var1.renderPermissionUpdate;
                                var11 = var0.bind(var1)(var7);
                            case 692:
                                _fun115203_ip = 711;
                                continue _fun115203;
                            case 694:
                                var1 = _closure3_slot0;
                                var0 = var1.renderRoleUpdate;
                                var11 = var0.bind(var1)(var7);
                            case 711:
                                var1 = _closure3_slot1;
                                var0 = var7.key;
                                var1 = var1[var0];
                                var0 = null;
                                var2 = var0 == var1;
                                var4 = undefined;
                                if (var2) {
                                    _fun115203_ip = 740;
                                    continue _fun115203
                                }
                            case 735:
                                var4 = var1.bind(var5)(var7);
                            case 740:
                                if (!(var0 != var4)) {
                                    _fun115203_ip = 1533;
                                    continue _fun115203
                                }
                            case 747:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 22;
                                var1 = var3[var1];
                                var1 = var2.bind(var5)(var1);
                                var3 = var1.intl;
                                var2 = var3.format;
                                var1 = {};
                                var1.oldValue = var8;
                                var1.newValue = var18;
                                var8 = global;
                                var9 = var8.Array;
                                var8 = var9.isArray;
                                var9 = var8.bind(var9)(var18);
                                var8 = 0;
                                if (!var9) {
                                    _fun115203_ip = 817;
                                    continue _fun115203
                                }
                            case 812:
                                var8 = var18.length;
                            case 817:
                                var1.count = var8;
                                var8 = _closure3_slot3;
                                var8 = var8.options;
                                var8 = var8.subtarget;
                                if (!(var0 == var8)) {
                                    _fun115203_ip = 847;
                                    continue _fun115203
                                }
                            case 841:
                                var8 = var7.subtarget;
                            case 847:
                                var9 = var0 != var8;
                                var7 = '';
                                if (!var9) {
                                    _fun115203_ip = 861;
                                    continue _fun115203
                                }
                            case 858:
                                var7 = var8;
                            case 861:
                                var1.subtarget = var7;
                                var7 = function() {
                                    var0 = null;
                                    return var0;
                                };
                                var1.newColorHook = var7;
                                var7 = function arg0, arg1() {
                                    var1 = _closure4_slot1;
                                    var7 = var1.primary_color;
                                    var1 = _closure4_slot1;
                                    var5 = var1.secondary_color;
                                    var0 = _closure4_slot1;
                                    var1 = var0.tertiary_color;
                                    var4 = _closure1_slot20;
                                    var3 = _closure1_slot10;
                                    var2 = {};
                                    var6 = _closure3_slot2;
                                    var6 = var6.colorsHook;
                                    var2.style = var6;
                                    var6 = new Array(3);
                                    var6[0] = var7;
                                    var6[1] = var5;
                                    var6[2] = var1;
                                    var5 = var6.filter;
                                    var7 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 29;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var0 = var7.bind(var1)(var0);
                                    var0 = var0.isNotNullish;
                                    var6 = var5.bind(var6)(var0);
                                    var5 = var6.map;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        _fun115206: for (var _fun115206_ip = 0;;) switch (_fun115206_ip) {
                                            case 0:
                                                var13 = arg0;
                                                var4 = arg1;
                                                var3 = _closure1_slot21;
                                                var0 = _closure1_slot9;
                                                var2 = var0.Fragment;
                                                var1 = {};
                                                var8 = _closure1_slot20;
                                                var7 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var0 = 21;
                                                var5 = var5[var0];
                                                var0 = undefined;
                                                var5 = var7.bind(var0)(var5);
                                                var7 = var5.Text;
                                                var5 = {};
                                                var9 = 'text-sm/bold';
                                                var5.variant = var9;
                                                var9 = 0;
                                                var9 = var4 > var9;
                                                var17 = '';
                                                var16 = var17;
                                                if (!var9) {
                                                    _fun115206_ip = 90;
                                                    continue _fun115206
                                                }
                                            case 84:
                                                var16 = ', ';
                                            case 90:
                                                var12 = _closure1_slot0;
                                                var14 = _closure1_slot3;
                                                var11 = 30;
                                                var9 = var14[var11];
                                                var10 = var12.bind(var0)(var9);
                                                var9 = var10.int2hex;
                                                var10 = var9.bind(var10)(var13);
                                                var9 = var10.toUpperCase;
                                                var15 = var9.bind(var10)();
                                                var9 = global;
                                                var9 = var9.HermesInternal;
                                                var10 = var9.concat;
                                                var9 = ' ';
                                                var9 = var10.bind(var17)(var16, var15, var9);
                                                var5.children = var9;
                                                var7 = var8.bind(var0)(var7, var5);
                                                var5 = new Array(2);
                                                var5[0] = var7;
                                                var8 = _closure1_slot20;
                                                var7 = _closure1_slot10;
                                                var6 = {};
                                                var9 = _closure3_slot2;
                                                var10 = var9.colorHook;
                                                var9 = new Array(2);
                                                var9[0] = var10;
                                                var10 = {};
                                                var11 = var14[var11];
                                                var12 = var12.bind(var0)(var11);
                                                var11 = var12.int2hex;
                                                var11 = var11.bind(var12)(var13);
                                                var10.backgroundColor = var11;
                                                var9[1] = var10;
                                                var6.style = var9;
                                                var6 = var8.bind(var0)(var7, var6);
                                                var5[1] = var6;
                                                var1.children = var5;
                                                var0 = var3.bind(var0)(var2, var1, var4);
                                                return var0;
                                        }
                                    };
                                    var0 = var5.bind(var6)(var0);
                                    var2.children = var0;
                                    var0 = arg1;
                                    var0 = var4.bind(var1)(var3, var2, var0);
                                    return var0;
                                };
                                var1.newColorsHook = var7;
                                var7 = function() {
                                    var0 = null;
                                    return var0;
                                };
                                var1.oldColorHook = var7;
                                var7 = function arg0, arg1() {
                                    var4 = _closure1_slot20;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 31;
                                    var0 = var2[var0];
                                    var3 = undefined;
                                    var0 = var1.bind(var3)(var0);
                                    var2 = var0.AppliedForumTagPill;
                                    var1 = {};
                                    var0 = _closure4_slot0;
                                    var1.tag = var0;
                                    var0 = _closure3_slot2;
                                    var0 = var0.forumTag;
                                    var1.containerStyle = var0;
                                    var0 = arg1;
                                    var0 = var4.bind(var3)(var2, var1, var0);
                                    return var0;
                                };
                                var1.oldTagHook = var7;
                                var7 = function arg0, arg1() {
                                    var4 = _closure1_slot20;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 31;
                                    var0 = var2[var0];
                                    var3 = undefined;
                                    var0 = var1.bind(var3)(var0);
                                    var2 = var0.AppliedForumTagPill;
                                    var1 = {};
                                    var0 = _closure4_slot1;
                                    var1.tag = var0;
                                    var0 = _closure3_slot2;
                                    var0 = var0.forumTag;
                                    var1.containerStyle = var0;
                                    var0 = arg1;
                                    var0 = var4.bind(var3)(var2, var1, var0);
                                    return var0;
                                };
                                var1.newTagHook = var7;
                                var7 = function arg0, arg1() {
                                    _fun115210: for (var _fun115210_ip = 0;;) switch (_fun115210_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            var1 = var1 != var2;
                                            var4 = undefined;
                                            var5 = undefined;
                                            if (!var1) {
                                                _fun115210_ip = 78;
                                                continue _fun115210
                                            }
                                        case 20:
                                            var2 = _closure1_slot1;
                                            var3 = _closure1_slot3;
                                            var1 = 17;
                                            var1 = var3[var1];
                                            var3 = var2.bind(var4)(var1);
                                            var2 = var3.getEmojiURL;
                                            var1 = {
                                                'id': null,
                                                'animated': false,
                                                'size': 24
                                            };
                                            var6 = _closure4_slot0;
                                            var1.id = var6;
                                            var5 = var2.bind(var3)(var1);
                                        case 78:
                                            var3 = _closure1_slot20;
                                            var2 = _closure1_slot1;
                                            var6 = _closure1_slot3;
                                            var1 = 32;
                                            var1 = var6[var1];
                                            var2 = var2.bind(var4)(var1);
                                            var1 = {};
                                            var1.src = var5;
                                            var0 = _closure4_slot0;
                                            var1.name = var0;
                                            var0 = _closure3_slot2;
                                            var5 = var0.textEmoji;
                                            var1.textEmojiStyle = var5;
                                            var0 = var0.imageEmoji;
                                            var1.fastImageStyle = var0;
                                            var0 = arg1;
                                            var0 = var3.bind(var4)(var2, var1, var0);
                                            return var0;
                                    }
                                };
                                var1.oldEmojiHook = var7;
                                var7 = function arg0, arg1() {
                                    _fun115211: for (var _fun115211_ip = 0;;) switch (_fun115211_ip) {
                                        case 0:
                                            var2 = _closure4_slot1;
                                            var1 = null;
                                            var1 = var1 != var2;
                                            var4 = undefined;
                                            var5 = undefined;
                                            if (!var1) {
                                                _fun115211_ip = 78;
                                                continue _fun115211
                                            }
                                        case 20:
                                            var2 = _closure1_slot1;
                                            var3 = _closure1_slot3;
                                            var1 = 17;
                                            var1 = var3[var1];
                                            var3 = var2.bind(var4)(var1);
                                            var2 = var3.getEmojiURL;
                                            var1 = {
                                                'id': null,
                                                'animated': false,
                                                'size': 24
                                            };
                                            var6 = _closure4_slot1;
                                            var1.id = var6;
                                            var5 = var2.bind(var3)(var1);
                                        case 78:
                                            var3 = _closure1_slot20;
                                            var2 = _closure1_slot1;
                                            var6 = _closure1_slot3;
                                            var1 = 32;
                                            var1 = var6[var1];
                                            var2 = var2.bind(var4)(var1);
                                            var1 = {};
                                            var1.src = var5;
                                            var0 = _closure4_slot1;
                                            var1.name = var0;
                                            var0 = _closure3_slot2;
                                            var5 = var0.textEmoji;
                                            var1.textEmojiStyle = var5;
                                            var0 = var0.imageEmoji;
                                            var1.fastImageStyle = var0;
                                            var0 = arg1;
                                            var0 = var3.bind(var4)(var2, var1, var0);
                                            return var0;
                                    }
                                };
                                var1.newEmojiHook = var7;
                                var6 = function arg0, arg1() {
                                    _fun115212: for (var _fun115212_ip = 0;;) switch (_fun115212_ip) {
                                        case 0:
                                            var4 = _closure1_slot20;
                                            var3 = _closure1_slot26;
                                            var2 = {};
                                            var0 = _closure4_slot0;
                                            var7 = null;
                                            var5 = var7 == var0;
                                            var1 = undefined;
                                            var0 = undefined;
                                            if (var5) {
                                                _fun115212_ip = 43;
                                                continue _fun115212
                                            }
                                        case 33:
                                            var5 = _closure4_slot0;
                                            var0 = var5.application_id;
                                        case 43:
                                            if (!(var7 == var0)) {
                                                _fun115212_ip = 73;
                                                continue _fun115212
                                            }
                                        case 47:
                                            var5 = _closure4_slot1;
                                            var7 = var7 == var5;
                                            var5 = undefined;
                                            if (var7) {
                                                _fun115212_ip = 70;
                                                continue _fun115212
                                            }
                                        case 60:
                                            var6 = _closure4_slot1;
                                            var5 = var6.application_id;
                                        case 70:
                                            var0 = var5;
                                        case 73:
                                            var2.applicationId = var0;
                                            var0 = arg1;
                                            var0 = var4.bind(var1)(var3, var2, var0);
                                            return var0;
                                    }
                                };
                                var1.applicationHook = var6;
                                var17 = var2.bind(var3)(var4, var1);
                                if (!(var0 != var17)) {
                                    _fun115203_ip = 1531;
                                    continue _fun115203
                                }
                            case 989:
                                var1 = _closure3_slot3;
                                var2 = var1.actionType;
                                var1 = _closure1_slot16;
                                var1 = var1.CREATE;
                                if (!(var1 !== var2)) {
                                    _fun115203_ip = 1109;
                                    continue _fun115203
                                }
                            case 1013:
                                var1 = _closure1_slot16;
                                var1 = var1.UPDATE;
                                if (!(var1 !== var2)) {
                                    _fun115203_ip = 1076;
                                    continue _fun115203
                                }
                            case 1027:
                                var1 = _closure1_slot16;
                                var1 = var1.DELETE;
                                var9 = undefined;
                                if (!(var1 === var2)) {
                                    _fun115203_ip = 1140;
                                    continue _fun115203
                                }
                            case 1043:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var1 = var3[var1];
                                var1 = var2.bind(var5)(var1);
                                var1 = var1.unsafe_rawColors;
                                var9 = var1.RED_400;
                                _fun115203_ip = 1140;
                                continue _fun115203;
                            case 1076:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var1 = var3[var1];
                                var1 = var2.bind(var5)(var1);
                                var1 = var1.unsafe_rawColors;
                                var9 = var1.YELLOW_300;
                                _fun115203_ip = 1140;
                                continue _fun115203;
                            case 1109:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 14;
                                var1 = var3[var1];
                                var1 = var2.bind(var5)(var1);
                                var1 = var1.unsafe_rawColors;
                                var9 = var1.GREEN_360;
                            case 1140:
                                var1 = _closure3_slot4;
                                var1 = var1 + 1;
                                _closure3_slot4 = var1;
                                var4 = _closure1_slot21;
                                var3 = _closure1_slot10;
                                var2 = {};
                                var7 = _closure3_slot2;
                                var1 = var7.changeRow;
                                var2.style = var1;
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var19 = 21;
                                var1 = var1[var19];
                                var1 = var6.bind(var5)(var1);
                                var6 = var1.Text;
                                var1 = {};
                                var8 = 'text-sm/bold';
                                var1.variant = var8;
                                var8 = var7.changeNumberText;
                                var7 = new Array(2);
                                var7[0] = var8;
                                var8 = {};
                                var8.color = var9;
                                var7[1] = var8;
                                var1.style = var7;
                                var8 = _closure3_slot4;
                                var7 = 10;
                                var7 = var8 < var7;
                                var8 = null;
                                if (!var7) {
                                    _fun115203_ip = 1262;
                                    continue _fun115203
                                }
                            case 1256:
                                var8 = '0';
                            case 1262:
                                var7 = new Array(3);
                                var7[0] = var8;
                                var8 = _closure3_slot4;
                                var7[1] = var8;
                                var8 = ' —';
                                var7[2] = var8;
                                var1.children = var7;
                                var6 = var4.bind(var5)(var6, var1);
                                var1 = new Array(2);
                                var1[0] = var6;
                                var8 = _closure1_slot21;
                                var7 = _closure1_slot10;
                                var6 = {};
                                var10 = _closure3_slot2;
                                var9 = var10.changeItemContent;
                                var6.style = var9;
                                var9 = {};
                                var10 = var10.changeItemTextContainer;
                                var9.style = var10;
                                var14 = _closure1_slot20;
                                var12 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var10 = var10[var19];
                                var10 = var12.bind(var5)(var10);
                                var12 = var10.Text;
                                var10 = {};
                                var19 = 'text-sm/normal';
                                var10.variant = var19;
                                var10.children = var17;
                                var12 = var14.bind(var5)(var12, var10);
                                var10 = new Array(2);
                                var10[0] = var12;
                                var14 = var0 != var18;
                                var12 = null;
                                if (!var14) {
                                    _fun115203_ip = 1463;
                                    continue _fun115203
                                }
                            case 1407:
                                var14 = true;
                                var12 = null;
                                if (!(var14 !== var15)) {
                                    _fun115203_ip = 1463;
                                    continue _fun115203
                                }
                            case 1415:
                                var15 = _closure1_slot20;
                                var14 = _closure1_slot10;
                                var13 = {};
                                var16 = _closure3_slot2;
                                var17 = var16.colorHook;
                                var16 = new Array(2);
                                var16[0] = var17;
                                var17 = {};
                                var17.backgroundColor = var18;
                                var16[1] = var17;
                                var13.style = var16;
                                var12 = var15.bind(var5)(var14, var13);
                            case 1463:
                                var10[1] = var12;
                                var9.children = var10;
                                var10 = var8.bind(var5)(var7, var9);
                                var9 = new Array(2);
                                var9[0] = var10;
                                var12 = var0 != var11;
                                var10 = null;
                                if (!var12) {
                                    _fun115203_ip = 1497;
                                    continue _fun115203
                                }
                            case 1494:
                                var10 = var11;
                            case 1497:
                                var9[1] = var10;
                                var6.children = var9;
                                var6 = var8.bind(var5)(var7, var6);
                                var1[1] = var6;
                                var2.children = var1;
                                var1 = arg1;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var1;
                            case 1531:
                                return var0;
                            case 1533:
                                return var0;
                            case 1535:
                                var0 = null;
                                return var0;
                        }
                    };
                    var5 = var3.bind(var5)(var2);
                    var3 = _closure1_slot20;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var6 = var6.changesContainer;
                    var1.style = var6;
                    var1.children = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'renderChangeSummary';
        var4.key = var6;
        var6 = function() {
            _fun115213: for (var _fun115213_ip = 0;;) switch (_fun115213_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.props;
                    var0 = var1.expanded;
                    var1 = var1.log;
                    if (!var0) {
                        _fun115213_ip = 368;
                        continue _fun115213
                    }
                case 25:
                    var4 = var1.targetType;
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1189;
                        continue _fun115213
                    }
                case 51:
                    var3 = _closure1_slot15;
                    var3 = var3.CHANNEL;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1144;
                        continue _fun115213
                    }
                case 68:
                    var3 = _closure1_slot15;
                    var3 = var3.CHANNEL_OVERWRITE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1144;
                        continue _fun115213
                    }
                case 85:
                    var3 = _closure1_slot15;
                    var3 = var3.USER;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1099;
                        continue _fun115213
                    }
                case 102:
                    var3 = _closure1_slot15;
                    var3 = var3.ROLE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1054;
                        continue _fun115213
                    }
                case 119:
                    var3 = _closure1_slot15;
                    var3 = var3.INVITE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 1009;
                        continue _fun115213
                    }
                case 136:
                    var3 = _closure1_slot15;
                    var3 = var3.WEBHOOK;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 964;
                        continue _fun115213
                    }
                case 153:
                    var3 = _closure1_slot15;
                    var3 = var3.EMOJI;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 919;
                        continue _fun115213
                    }
                case 170:
                    var3 = _closure1_slot15;
                    var3 = var3.INTEGRATION;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 874;
                        continue _fun115213
                    }
                case 187:
                    var3 = _closure1_slot15;
                    var3 = var3.STAGE_INSTANCE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 829;
                        continue _fun115213
                    }
                case 204:
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD_SCHEDULED_EVENT;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 784;
                        continue _fun115213
                    }
                case 221:
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD_SCHEDULED_EVENT_EXCEPTION;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 739;
                        continue _fun115213
                    }
                case 238:
                    var3 = _closure1_slot15;
                    var3 = var3.THREAD;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 694;
                        continue _fun115213
                    }
                case 255:
                    var3 = _closure1_slot15;
                    var3 = var3.STICKER;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 649;
                        continue _fun115213
                    }
                case 272:
                    var3 = _closure1_slot15;
                    var3 = var3.APPLICATION_COMMAND;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 597;
                        continue _fun115213
                    }
                case 289:
                    var3 = _closure1_slot15;
                    var3 = var3.AUTO_MODERATION_RULE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 552;
                        continue _fun115213
                    }
                case 306:
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD_SOUNDBOARD;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 507;
                        continue _fun115213
                    }
                case 323:
                    var3 = _closure1_slot15;
                    var3 = var3.VOICE_CHANNEL_STATUS;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 462;
                        continue _fun115213
                    }
                case 340:
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD_MEMBER_VERIFICATION;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 417;
                        continue _fun115213
                    }
                case 354:
                    var3 = _closure1_slot15;
                    var3 = var3.GUILD_PROFILE;
                    if (!(var3 !== var4)) {
                        _fun115213_ip = 372;
                        continue _fun115213
                    }
                case 368:
                    var3 = null;
                    return var3;
                case 372:
                    var4 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 15;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.GuildProfileChangeStrings;
                    var3 = var3.bind(var5)();
                    var3 = var4.bind(var2)(var3);
                    return var3;
                case 417:
                    var4 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 15;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.MemberVerificationChangeStrings;
                    var3 = var3.bind(var5)();
                    var3 = var4.bind(var2)(var3);
                    return var3;
                case 462:
                    var4 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 15;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.VoiceChannelStatusStrings;
                    var3 = var3.bind(var5)();
                    var3 = var4.bind(var2)(var3);
                    return var3;
                case 507:
                    var4 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 15;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.GuildSoundboardChangeStrings;
                    var3 = var3.bind(var5)();
                    var3 = var4.bind(var2)(var3);
                    return var3;
                case 552:
                    var4 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 15;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var3 = var5.AutoModerationRuleChangeStrings;
                    var3 = var3.bind(var5)();
                    var3 = var4.bind(var2)(var3);
                    return var3;
                case 597:
                    var3 = var2.renderChangeDetails;
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 15;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.CommandPermissionChangeStrings;
                    var1 = var1.changes;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 649:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.StickerChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 694:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.ThreadChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 739:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.GuildScheduledEventExceptionChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 784:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.GuildScheduledEventChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 829:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.StageInstanceChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 874:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.IntegrationChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 919:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.EmojiChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 964:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.WebhookChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 1009:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.InviteChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 1054:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.RoleChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 1099:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.UserChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 1144:
                    var3 = var2.renderChangeDetails;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.ChannelChangeStrings;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 1189:
                    var1 = var2.renderChangeDetails;
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 15;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var0 = var3.GuildChangeStrings;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun115214: for (var _fun115214_ip = 0;;) switch (_fun115214_ip) {
                case 0:
                    var7 = this;
                    var1 = _closure1_slot22;
                    var0 = var7.context;
                    var3 = undefined;
                    var18 = var1.bind(var3)(var0);
                    var1 = var7.props;
                    var30 = var1.log;
                    var _closure3_slot0 = var30;
                    var6 = var1.expanded;
                    var0 = var1.onHeaderClick;
                    var29 = var1.guildId;
                    var2 = var1.channel;
                    var _closure3_slot1 = var2;
                    var8 = var1.containerStyle;
                    var28 = var1.theme;
                    var14 = var30.user;
                    var _closure3_slot2 = var14;
                    var1 = var7.hasChangesToRender;
                    var13 = var1.bind(var7)();
                    var2 = var30.timestampStart;
                    var1 = var2.calendar;
                    var5 = var1.bind(var2)();
                    var2 = var30.timestampEnd;
                    var1 = var2.calendar;
                    var10 = var1.bind(var2)();
                    if (!(var5 !== var10)) {
                        _fun115214_ip = 207;
                        continue _fun115214
                    }
                case 133:
                    var4 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 24;
                    var1 = var9[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var9 = var18.timestamp;
                    var1.style = var9;
                    var9 = new Array(3);
                    var9[0] = var5;
                    var11 = '—';
                    var9[1] = var11;
                    var9[2] = var10;
                    var1.children = var9;
                    var17 = var4.bind(var3)(var2, var1);
                    _fun115214_ip = 259;
                    continue _fun115214;
                case 207:
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 24;
                    var1 = var9[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var9 = var18.timestamp;
                    var1.style = var9;
                    var1.children = var5;
                    var17 = var4.bind(var3)(var2, var1);
                case 259:
                    if (var13) {
                        _fun115214_ip = 266;
                        continue _fun115214
                    }
                case 262:
                    var0 = _closure1_slot18;
                case 266:
                    var _closure3_slot3 = var0;
                    var5 = null;
                    var19 = null;
                    if (!var6) {
                        _fun115214_ip = 283;
                        continue _fun115214
                    }
                case 277:
                    var19 = var18.rotate90;
                case 283:
                    var2 = _closure1_slot21;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 33;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.Card;
                    var0 = {};
                    var4 = false;
                    var0.accessible = var4;
                    var9 = var18.container;
                    var4 = new Array(2);
                    var4[0] = var9;
                    var4[1] = var8;
                    var0.style = var4;
                    var4 = 'secondary';
                    if (!var6) {
                        _fun115214_ip = 353;
                        continue _fun115214
                    }
                case 349:
                    var4 = 'primary';
                case 353:
                    var0.variant = var4;
                    var4 = 'none';
                    if (!var6) {
                        _fun115214_ip = 368;
                        continue _fun115214
                    }
                case 364:
                    var4 = 'strong';
                case 368:
                    var0.border = var4;
                    var4 = function() {
                        var2 = _closure3_slot3;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var4;
                    var9 = _closure1_slot21;
                    var8 = _closure1_slot10;
                    var4 = {};
                    var10 = var18.rowContainer;
                    var4.style = var10;
                    var15 = _closure1_slot20;
                    var11 = _closure1_slot1;
                    var27 = _closure1_slot3;
                    var10 = 34;
                    var10 = var27[var10];
                    var11 = var11.bind(var3)(var10);
                    var10 = {};
                    var20 = var30.action;
                    var10.action = var20;
                    var11 = var15.bind(var3)(var11, var10);
                    var10 = new Array(4);
                    var10[0] = var11;
                    var23 = _closure1_slot20;
                    var26 = _closure1_slot0;
                    var21 = 35;
                    var11 = var27[var21];
                    var11 = var26.bind(var3)(var11);
                    var22 = var11.PressableOpacity;
                    var15 = {};
                    var20 = 'button';
                    var15.accessibilityRole = var20;
                    var11 = 22;
                    var24 = var27[var11];
                    var24 = var26.bind(var3)(var24);
                    var25 = var24.intl;
                    var24 = var25.string;
                    var11 = var27[var11];
                    var11 = var26.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.iXAna6;
                    var11 = var24.bind(var25)(var11);
                    var15.accessibilityLabel = var11;
                    var24 = var5 == var14;
                    var11 = undefined;
                    if (var24) {
                        _fun115214_ip = 554;
                        continue _fun115214
                    }
                case 549:
                    var11 = var14.username;
                case 554:
                    var15.accessibilityHint = var11;
                    var11 = function() {
                        _fun115216: for (var _fun115216_ip = 0;;) switch (_fun115216_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 36;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.hideActionSheet;
                                var2 = var2.bind(var3)();
                                var4 = _closure3_slot2;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun115216_ip = 101;
                                    continue _fun115216
                                }
                            case 48:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var1 = 37;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var4 = _closure3_slot2;
                                var4 = var4.id;
                                var1.userId = var4;
                                var3 = _closure3_slot1;
                                var3 = var3.id;
                                var1.channelId = var3;
                                var1 = var2.bind(var0)(var1);
                            case 101:
                                return var0;
                        }
                    };
                    var15.onPress = var11;
                    var26 = _closure1_slot20;
                    var24 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var27 = 38;
                    var14 = var11[var27];
                    var25 = var24.bind(var3)(var14);
                    var24 = {};
                    var14 = var18.avatar;
                    var24.style = var14;
                    var14 = _closure1_slot25;
                    var14 = var14.bind(var3)(var28, var30, var29);
                    var24.source = var14;
                    var14 = _closure1_slot0;
                    var27 = var11[var27];
                    var27 = var14.bind(var3)(var27);
                    var27 = var27.AvatarSizes;
                    var27 = var27.SMALL;
                    var24.size = var27;
                    var24 = var26.bind(var3)(var25, var24);
                    var15.children = var24;
                    var15 = var23.bind(var3)(var22, var15);
                    var10[1] = var15;
                    var15 = _closure1_slot21;
                    var11 = var11[var21];
                    var11 = var14.bind(var3)(var11);
                    var14 = var11.PressableOpacity;
                    var11 = {};
                    var11.accessibilityRole = var20;
                    var20 = {};
                    var20.expanded = var6;
                    var21 = !var13;
                    var20.disabled = var21;
                    var11.accessibilityState = var20;
                    var16 = function() {
                        var2 = _closure3_slot3;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var11.onPress = var16;
                    var16 = var18.titleContainer;
                    var11.style = var16;
                    var16 = !var13;
                    var11.disabled = var16;
                    var16 = var7.renderTitle;
                    var20 = var16.bind(var7)();
                    var16 = new Array(2);
                    var16[0] = var20;
                    var16[1] = var17;
                    var11.children = var16;
                    var11 = var15.bind(var3)(var14, var11);
                    var10[2] = var11;
                    var11 = null;
                    if (!var13) {
                        _fun115214_ip = 878;
                        continue _fun115214
                    }
                case 783:
                    var14 = _closure1_slot20;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot3;
                    var15 = 39;
                    var12 = var17[var15];
                    var13 = var16.bind(var3)(var12);
                    var12 = {};
                    var20 = var18.arrow;
                    var18 = new Array(2);
                    var18[0] = var20;
                    var18[1] = var19;
                    var12.style = var18;
                    var15 = var17[var15];
                    var15 = var16.bind(var3)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.CUSTOM;
                    var12.size = var15;
                    var15 = 40;
                    var15 = var17[var15];
                    var15 = var16.bind(var3)(var15);
                    var12.source = var15;
                    var11 = var14.bind(var3)(var13, var12);
                case 878:
                    var10[3] = var11;
                    var4.children = var10;
                    var8 = var9.bind(var3)(var8, var4);
                    var4 = new Array(2);
                    var4[0] = var8;
                    var5 = null;
                    if (!var6) {
                        _fun115214_ip = 917;
                        continue _fun115214
                    }
                case 905:
                    var6 = var7.renderChangeSummary;
                    var5 = var6.bind(var7)();
                case 917:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var6 = 41;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThemeContext;
    var3.contextType = var6;
    var6 = 42;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.connectStores;
    var6 = new Array(1);
    var6[0] = var9;
    var1 = function() { // Environment: var1
        var0 = {};
        var1 = _closure1_slot11;
        var1 = var1.theme;
        var0.theme = var1;
        return var0;
    };
    var1 = var7.bind(var8)(var6, var1);
    var1 = var1.bind(var0)(var3);
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/audit_log/native/AuditLog.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 3196, 1628, 3100, 1621, 660, 33, 1297, 671, 14686, 1418, 1417, 4395, 3206, 6884, 3941, 1234, 3236, 4876, 1598, 4792, 4236, 3045, 1304, 668, 9414, 5769, 4900, 14697, 4902, 3278, 7353, 5452, 4086, 10208, 3159, 566, 2]);