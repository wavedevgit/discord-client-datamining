// modules/threads/native/components/ThreadBrowserRowSubtext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: MessageContent, environment: var1
        var1 = arg0;
        var0 = var1.thread;
        var1 = var1.message;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot13;
        var3 = undefined;
        var7 = var2.bind(var3)();
        var8 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 18;
        var2 = var12[var2];
        var9 = var8.bind(var3)(var2);
        var6 = var9.useSubscribeGuildMembers;
        var5 = {};
        var10 = var0.guild_id;
        var2 = var1.author;
        var13 = var2.id;
        var2 = new Array(1);
        var2[0] = var13;
        var5[var10] = var2;
        var2 = 'ThreadBrowserRowSubtext';
        var2 = var6.bind(var9)(var5, var2);
        var2 = 11;
        var5 = var12[var2];
        var10 = var8.bind(var3)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var11
            _fun105948: for (var _fun105948_ip = 0;;) switch (_fun105948_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun105948_ip = 52;
                        continue _fun105948
                    }
                case 42:
                    var1 = _closure2_slot0;
                    var0 = var1.author;
                case 52:
                    return var0;
            }
        };
        var9 = var9.bind(var10)(var6, var5);
        var2 = var12[var2];
        var10 = var8.bind(var3)(var2);
        var6 = var10.useStateFromStores;
        var2 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var11
            var0 = _closure1_slot5;
            var0 = var0.roleStyle;
            return var0;
        };
        var2 = var6.bind(var10)(var5, var2);
        var _closure2_slot1 = var2;
        var2 = _closure1_slot1;
        var5 = 19;
        var5 = var12[var5];
        var5 = var2.bind(var3)(var5);
        var5 = var5.bind(var3)(var1);
        var6 = var5.nick;
        var _closure2_slot2 = var6;
        var6 = var5.colorString;
        var _closure2_slot3 = var6;
        var5 = var5.colorStrings;
        var _closure2_slot4 = var5;
        var5 = 20;
        var5 = var12[var5];
        var6 = var2.bind(var3)(var5);
        var5 = var6.extractTimestamp;
        var1 = var1.id;
        var10 = var5.bind(var6)(var1);
        var1 = 12;
        var5 = var12[var1];
        var6 = var8.bind(var3)(var5);
        var5 = var6.getTimestampString;
        var6 = var5.bind(var6)(var10);
        var1 = var12[var1];
        var5 = var8.bind(var3)(var1);
        var1 = var5.getTimestampAccessibilityLabel;
        var5 = var1.bind(var5)(var10);
        var1 = 13;
        var1 = var12[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var0.guild_id;
        var0 = var9.id;
        var0 = var2.bind(var3)(var1, var0);
        var _closure2_slot5 = var0;
        var2 = _closure1_slot9;
        var1 = _closure1_slot16;
        var0 = {};
        var0.user = var9;
        var0.timestamp = var6;
        var0.accessibilityLabel = var5;
        var6 = _closure1_slot9;
        var4 = 15;
        var4 = var12[var4];
        var4 = var8.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'lineClamp': 1,
            'ellipsizeMode': 'tail',
            'lineBreakMode': 'tail',
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var7 = var7.subtextContent;
        var4.style = var7;
        var7 = 16;
        var9 = var12[var7];
        var9 = var8.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.format;
        var7 = var12[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.M79KAH;
        var7 = {};
        var12 = function(arg0, arg1) { // Original name: usernameHook, environment: var11
            _fun105950: for (var _fun105950_ip = 0;;) switch (_fun105950_ip) {
                case 0:
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var0 = _closure2_slot2;
                    var5 = null;
                    var6 = var5 != var0;
                    var0 = '';
                    if (!var6) {
                        _fun105950_ip = 37;
                        continue _fun105950
                    }
                case 33:
                    var0 = _closure2_slot2;
                case 37:
                    var2.nickname = var0;
                    var7 = _closure2_slot1;
                    var6 = 'username';
                    var0 = null;
                    if (!(var6 === var7)) {
                        _fun105950_ip = 60;
                        continue _fun105950
                    }
                case 56:
                    var0 = _closure2_slot3;
                case 60:
                    var2.usernameColor = var0;
                    var0 = _closure2_slot3;
                    var2.roleColor = var0;
                    var6 = _closure2_slot5;
                    var0 = null;
                    if (!var6) {
                        _fun105950_ip = 87;
                        continue _fun105950
                    }
                case 83:
                    var0 = _closure2_slot4;
                case 87:
                    var2.roleColors = var0;
                    var6 = _closure2_slot1;
                    var0 = 'dot';
                    var0 = var0 === var6;
                    if (!var0) {
                        _fun105950_ip = 115;
                        continue _fun105950
                    }
                case 107:
                    var1 = _closure2_slot3;
                    var0 = var5 != var1;
                case 115:
                    var2.shouldShowRoleDot = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var7.usernameHook = var12;
        var11 = function(arg0, arg1) { // Original name: messageTextHook, environment: var11
            var4 = _closure1_slot9;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 21;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var5 = _closure1_slot1;
            var0 = 22;
            var0 = var6[var0];
            var6 = var5.bind(var3)(var0);
            var5 = _closure2_slot0;
            var0 = {};
            var7 = true;
            var0.formatInline = var7;
            var0 = var6.bind(var3)(var5, var0);
            var0 = var0.content;
            var1.children = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var7.messageTextHook = var11;
        var7 = var9.bind(var10)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: SubstringRow, environment: var1
        _fun105952: for (var _fun105952_ip = 0;;) switch (_fun105952_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var6 = var0.children;
                var9 = var0.timestamp;
                var8 = var0.accessibilityLabel;
                var0 = _closure1_slot13;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun105952_ip = 215;
                    continue _fun105952
                }
            case 46:
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = var10.row;
                var0.style = var3;
                var3 = new Array(3);
                var3[0] = var6;
                var11 = _closure1_slot9;
                var7 = _closure1_slot4;
                var6 = {};
                var12 = var10.dividerDot;
                var6.style = var12;
                var6 = var11.bind(var4)(var7, var6);
                var3[1] = var6;
                var11 = _closure1_slot9;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 15;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var12 = var10.timestamp;
                var6.style = var12;
                var6.accessibilityLabel = var8;
                var12 = 'text-sm/medium';
                var6.variant = var12;
                var12 = 'text-muted';
                var6.color = var12;
                var12 = global;
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = '';
                var12 = var13.bind(var12)(var9);
                var6.children = var12;
                var6 = var11.bind(var4)(var7, var6);
                var3[2] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun105952_ip = 328;
                continue _fun105952;
            case 215:
                var3 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var10.row;
                var1.style = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 15;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {};
                var10 = var10.timestamp;
                var5.style = var10;
                var5.accessibilityLabel = var8;
                var8 = 'text-sm/medium';
                var5.variant = var8;
                var8 = 'text-muted';
                var5.color = var8;
                var8 = ' ';
                var8 = var8 + var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 328:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: Username, environment: var1
        _fun105953: for (var _fun105953_ip = 0;;) switch (_fun105953_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.nickname;
                var9 = var1.usernameColor;
                var _closure2_slot0 = var9;
                var14 = var1.roleColor;
                var13 = var1.roleColors;
                var6 = var1.shouldShowRoleDot;
                var1 = _closure1_slot13;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var _closure2_slot1 = var7;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun105954: for (var _fun105954_ip = 0;;) switch (_fun105954_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun105954_ip = 24;
                                continue _fun105954
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            var0 = var0.username;
                            _fun105954_ip = 58;
                            continue _fun105954;
                        case 24:
                            var1 = _closure2_slot1;
                            var2 = var1.username;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = _closure2_slot0;
                            var2.color = var3;
                            var1[1] = var2;
                            var0 = var1;
                        case 58:
                            return var0;
                    }
                };
                var9 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 23;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useProcessColorStringsArray;
                var11 = var0.bind(var1)(var13);
                var12 = !var6;
                if (!var12) {
                    _fun105953_ip = 139;
                    continue _fun105953
                }
            case 127:
                var1 = var11.length;
                var0 = 1;
                var12 = var1 > var0;
            case 139:
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                if (!var6) {
                    _fun105953_ip = 206;
                    continue _fun105953
                }
            case 152:
                var10 = _closure1_slot9;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 24;
                var4 = var15[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.RoleDot;
                var4 = {};
                var4.color = var14;
                var4.colors = var13;
                var13 = 'small';
                var4.size = var13;
                var6 = var10.bind(var3)(var7, var4);
            case 206:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 15;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = 25;
                var10 = var14[var10];
                var13 = var13.bind(var3)(var10);
                var10 = var13.isFabric;
                var10 = var10.bind(var13)();
                var10 = !var10;
                var5.experimental_useNativeText = var10;
                var10 = undefined;
                if (!var12) {
                    _fun105953_ip = 295;
                    continue _fun105953
                }
            case 292:
                var10 = var11;
            case 295:
                var5.gradientColors = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageTypes;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot9 = var8;
    var8 = var3.jsxs;
    var _closure1_slot10 = var8;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var8 = var6.CHANNEL_NAME_CHANGE;
    var3 = new Array(2);
    var3[0] = var8;
    var6 = var6.THREAD_STARTER_MESSAGE;
    var3[1] = var6;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.row = var9;
    var9 = {
        'fontSize': 14,
        'lineHeight': 18
    };
    var13 = 18;
    var10 = var12.PRIMARY_MEDIUM;
    var9.fontFamily = var10;
    var10 = 10;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var9.color = var14;
    var3.subText = var9;
    var9 = {
        'lineHeight': 18,
        'flexShrink': 1
    };
    var3.subtextContent = var9;
    var9 = {};
    var9.lineHeight = var13;
    var3.timestamp = var9;
    var9 = {
        'fontSize': 14,
        'lineHeight': 18
    };
    var12 = var12.PRIMARY_SEMIBOLD;
    var9.fontFamily = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var9.color = var12;
    var3.username = var9;
    var9 = {
        'width': 4,
        'height': 4,
        'marginHorizontal': 4,
        'borderRadius': 2,
        'backgroundColor': null,
        'alignSelf': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var12;
    var3.dividerDot = var9;
    var9 = {
        'position': 'absolute',
        'height': 1,
        'left': 16,
        'right': 0,
        'bottom': 0
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var3.divider = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun105955: for (var _fun105955_ip = 0;;) switch (_fun105955_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.thread;
                var _closure2_slot0 = var8;
                var5 = var0.timestamp;
                var7 = var0.accessibilityLabel;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot13;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 11;
                var0 = var10[var1];
                var13 = var2.bind(var3)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var11
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.ownerId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var12.bind(var13)(var6, var0);
                var _closure2_slot1 = var6;
                var0 = var10[var1];
                var14 = var2.bind(var3)(var0);
                var13 = var14.useStateFromStores;
                var0 = _closure1_slot6;
                var12 = new Array(1);
                var12[0] = var0;
                var0 = function() { // Environment: var11
                    var3 = _closure1_slot6;
                    var2 = var3.getMember;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.ownerId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var13.bind(var14)(var12, var0);
                var _closure2_slot2 = var0;
                var1 = var10[var1];
                var12 = var2.bind(var3)(var1);
                var10 = var12.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var11
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var1 = var10.bind(var12)(var2, var1);
                var _closure2_slot3 = var1;
                var1 = null;
                var2 = var1 == var0;
                var10 = undefined;
                if (var2) {
                    _fun105955_ip = 212;
                    continue _fun105955
                }
            case 206:
                var10 = var0.colorString;
            case 212:
                var12 = var1 != var10;
                var2 = null;
                if (!var12) {
                    _fun105955_ip = 224;
                    continue _fun105955
                }
            case 221:
                var2 = var10;
            case 224:
                _closure2_slot4 = var2;
                var2 = var1 == var0;
                var10 = undefined;
                if (var2) {
                    _fun105955_ip = 243;
                    continue _fun105955
                }
            case 237:
                var10 = var0.colorStrings;
            case 243:
                var12 = var1 != var10;
                var2 = null;
                if (!var12) {
                    _fun105955_ip = 255;
                    continue _fun105955
                }
            case 252:
                var2 = var10;
            case 255:
                _closure2_slot5 = var2;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 13;
                var2 = var12[var2];
                var10 = var10.bind(var3)(var2);
                var2 = var8.guild_id;
                var12 = var1 == var6;
                var1 = undefined;
                if (var12) {
                    _fun105955_ip = 298;
                    continue _fun105955
                }
            case 293:
                var1 = var6.id;
            case 298:
                var1 = var10.bind(var3)(var2, var1);
                _closure2_slot6 = var1;
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var1 = var1.bind(var2)(var8);
                _closure2_slot7 = var1;
                var8 = _closure1_slot3;
                var2 = var8.useEffect;
                var1 = function() { // Environment: var11
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                var8 = _closure1_slot3;
                var2 = var8.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var6;
                var0 = function() { // Environment: var11
                    _fun105960: for (var _fun105960_ip = 0;;) switch (_fun105960_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun105960_ip = 21;
                                continue _fun105960
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            if (!(var2 == var1)) {
                                _fun105960_ip = 86;
                                continue _fun105960
                            }
                        case 21:
                            var0 = _closure2_slot7;
                            var0 = var0.current;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.requestMembersById;
                            var1 = var0.guild_id;
                            var4 = var0.ownerId;
                            var0 = new Array(1);
                            var0[0] = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot16;
                var0 = {};
                var0.user = var6;
                var0.timestamp = var5;
                var0.accessibilityLabel = var7;
                var6 = _closure1_slot9;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 15;
                var4 = var12[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'lineBreakMode': 'tail',
                    'style': null,
                    'accessibilityLabel': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var9 = var9.subtextContent;
                var4.style = var9;
                var4.accessibilityLabel = var7;
                var7 = 16;
                var9 = var12[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.imPXd5;
                var7 = {};
                var11 = function(arg0, arg1) { // Original name: usernameHook, environment: var11
                    _fun105961: for (var _fun105961_ip = 0;;) switch (_fun105961_ip) {
                        case 0:
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot17;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var6 = null;
                            var8 = var6 == var1;
                            var1 = undefined;
                            var7 = undefined;
                            if (var8) {
                                _fun105961_ip = 43;
                                continue _fun105961
                            }
                        case 33:
                            var8 = _closure2_slot2;
                            var7 = var8.nick;
                        case 43:
                            if (!(var6 == var7)) {
                                _fun105961_ip = 82;
                                continue _fun105961
                            }
                        case 47:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 17;
                            var0 = var9[var0];
                            var9 = var8.bind(var1)(var0);
                            var8 = var9.getName;
                            var0 = _closure2_slot1;
                            var7 = var8.bind(var9)(var0);
                        case 82:
                            var8 = var6 != var7;
                            var0 = '';
                            if (!var8) {
                                _fun105961_ip = 96;
                                continue _fun105961
                            }
                        case 93:
                            var0 = var7;
                        case 96:
                            var2.nickname = var0;
                            var8 = _closure2_slot3;
                            var7 = 'username';
                            var0 = null;
                            if (!(var7 === var8)) {
                                _fun105961_ip = 119;
                                continue _fun105961
                            }
                        case 115:
                            var0 = _closure2_slot4;
                        case 119:
                            var2.usernameColor = var0;
                            var0 = _closure2_slot4;
                            var2.roleColor = var0;
                            var7 = _closure2_slot6;
                            var0 = null;
                            if (!var7) {
                                _fun105961_ip = 146;
                                continue _fun105961
                            }
                        case 142:
                            var0 = _closure2_slot5;
                        case 146:
                            var2.roleColors = var0;
                            var7 = _closure2_slot3;
                            var0 = 'dot';
                            var0 = var0 === var7;
                            if (!var0) {
                                _fun105961_ip = 174;
                                continue _fun105961
                            }
                        case 166:
                            var5 = _closure2_slot4;
                            var0 = var6 != var5;
                        case 174:
                            var2.shouldShowRoleDot = var0;
                            var0 = arg1;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var7.usernameHook = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/ThreadBrowserRowSubtext.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ThreadSubtext, environment: var1
        _fun105962: for (var _fun105962_ip = 0;;) switch (_fun105962_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.thread;
                var10 = var6.id;
                var _closure2_slot0 = var10;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 11;
                var5 = var1[var3];
                var3 = undefined;
                var9 = var2.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = new Array(1);
                var5[0] = var10;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot8;
                    var1 = var2.getMostRecentMessage;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var9)(var7, var4, var5);
                var7 = 12;
                var1 = var1[var7];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useLastMessageTimestamp;
                var4 = var1.bind(var2)(var6);
                var1 = null;
                if (!(var1 != var8)) {
                    _fun105962_ip = 175;
                    continue _fun105962
                }
            case 113:
                var5 = _closure1_slot12;
                var2 = var5.includes;
                var1 = var8.type;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun105962_ip = 175;
                    continue _fun105962
                }
            case 135:
                var1 = var6.isArchivedThread;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun105962_ip = 175;
                    continue _fun105962
                }
            case 148:
                var5 = _closure1_slot9;
                var2 = _closure1_slot15;
                var1 = {};
                var1.thread = var6;
                var1.message = var8;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 175:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = var1[var7];
                var8 = var2.bind(var3)(var5);
                var5 = var8.getTimestampString;
                var5 = var5.bind(var8)(var4);
                var1 = var1[var7];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getTimestampAccessibilityLabel;
                var4 = var1.bind(var2)(var4);
                var2 = _closure1_slot9;
                var1 = _closure1_slot14;
                var0 = {};
                var0.thread = var6;
                var0.timestamp = var5;
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ThreadSubtext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1672, 1613, 6435, 660, 483, 33, 1297, 671, 566, 6447, 4752, 4642, 3900, 1234, 3195, 7705, 3942, 21, 4839, 6745, 6639, 8153, 3870, 2]);