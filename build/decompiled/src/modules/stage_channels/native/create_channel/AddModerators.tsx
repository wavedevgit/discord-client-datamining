// modules/stage_channels/native/create_channel/AddModerators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RowType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.flexRow = var8;
    var9 = 16;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.labelIcon = var8;
    var8 = {};
    var8.marginRight = var11;
    var3.radioSelector = var8;
    var8 = {
        'marginLeft': 0,
        'marginRight': 16
    };
    var3.channelTypeIcon = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.suggestions = var8;
    var8 = {
        'marginTop': 12,
        'marginRight': 8
    };
    var3.suggestionPill = var8;
    var8 = {};
    var11 = 7;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var8.flex = var10;
    var3.addMembersContainer = var8;
    var8 = {};
    var8.margin = var9;
    var3.moderatorDescriptionContainer = var8;
    var8 = {
        'margin': 16,
        'marginBottom': 0
    };
    var3.errorMessage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/create_channel/AddModerators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AddModerators, environment: var1
        _fun65680: for (var _fun65680_ip = 0;;) switch (_fun65680_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.guildId;
                var _closure2_slot0 = var1;
                var4 = var5.onChannelCreated;
                var13 = null;
                var3 = Object.create(var13);
                var8 = 0;
                var3.guildId = var8;
                var3.onChannelCreated = var8;
                var23 = {};
                var22 = var5;
                var21 = var3;
                var14 = copyDataProperties(var23, var22, var21);
                var _closure2_slot1 = var14;
                var2 = _closure1_slot10;
                var3 = undefined;
                var15 = var2.bind(var3)();
                var19 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 8;
                var2 = var10[var2];
                var5 = var19.bind(var3)(var2);
                var2 = var5.useNavigation;
                var6 = var2.bind(var5)();
                var _closure2_slot2 = var6;
                var5 = _closure1_slot6;
                var2 = var5.getGuild;
                var12 = var2.bind(var5)(var1);
                var5 = _closure1_slot1;
                var2 = 9;
                var2 = var10[var2];
                var9 = var5.bind(var3)(var2);
                var7 = var13 != var12;
                var2 = 'Guild must not be null';
                var2 = var9.bind(var3)(var7, var2);
                var2 = 10;
                var2 = var10[var2];
                var2 = var5.bind(var3)(var2);
                var4 = var2.bind(var3)(var4);
                var18 = _closure1_slot3;
                var2 = 3;
                var2 = var18.bind(var3)(var4, var2);
                var5 = var2[var8];
                var _closure2_slot3 = var5;
                var7 = 1;
                var17 = var2[var7];
                var9 = 2;
                var16 = var2[var9];
                var _closure2_slot4 = var16;
                var4 = _closure1_slot4;
                var20 = var4.useState;
                var2 = {};
                var2 = var20.bind(var4)(var2);
                var2 = var18.bind(var3)(var2, var9);
                var9 = var2[var8];
                var _closure2_slot5 = var9;
                var8 = var2[var7];
                var7 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var9;
                var2[2] = var14;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun65681: for (var _fun65681_ip = 0;;) switch (_fun65681_ip) {
                        case 0:
                            var1 = global;
                            var4 = var1.Object;
                            var2 = var4.values;
                            var1 = _closure2_slot5;
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.filter;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.row;
                                var1 = var0.id;
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun65683: for (var _fun65683_ip = 0;;) switch (_fun65683_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.row;
                                        var3 = var1.rowType;
                                        var0 = _closure1_slot7;
                                        var0 = var0.ROLE;
                                        if (!(var3 !== var0)) {
                                            _fun65683_ip = 97;
                                            continue _fun65683
                                        }
                                    case 32:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var0 = 11;
                                        var0 = var8[var0];
                                        var6 = undefined;
                                        var5 = var7.bind(var6)(var0);
                                        var4 = var5.createModeratorOverwrite;
                                        var3 = var1.id;
                                        var0 = 12;
                                        var0 = var8[var0];
                                        var0 = var7.bind(var6)(var0);
                                        var0 = var0.PermissionOverwriteType;
                                        var0 = var0.MEMBER;
                                        var0 = var4.bind(var5)(var3, var0);
                                        _fun65683_ip = 160;
                                        continue _fun65683;
                                    case 97:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var7[var2];
                                        var5 = undefined;
                                        var4 = var6.bind(var5)(var2);
                                        var3 = var4.createModeratorOverwrite;
                                        var2 = var1.id;
                                        var1 = 12;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var5)(var1);
                                        var1 = var1.PermissionOverwriteType;
                                        var1 = var1.ROLE;
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 160:
                                        return var0;
                                }
                            };
                            var5 = var1.bind(var2)(var0);
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = _closure2_slot1;
                            var8 = var1;
                            var7 = var0;
                            var4 = copyDataProperties(var8, var7);
                            var4 = _closure2_slot0;
                            var3 = 'guildId';
                            var1[var3] = var4;
                            var3 = new Array(0);
                            var6 = 0;
                            var8 = var3;
                            var7 = var5;
                            var4 = arraySpread(var8, var7, var6);
                            var0 = var0.overwrites;
                            var5 = null;
                            if (!(var5 == var0)) {
                                _fun65681_ip = 126;
                                continue _fun65681
                            }
                        case 122:
                            var0 = new Array(0);
                        case 126:
                            var8 = var3;
                            var7 = var0;
                            var6 = var4;
                            var0 = arraySpread(var8, var7, var6);
                            var0 = 'overwrites';
                            var1[var0] = var3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var4)(var1, var2);
                var _closure2_slot6 = var7;
                var2 = var4.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var9;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun65684: for (var _fun65684_ip = 0;;) switch (_fun65684_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.keys;
                            var0 = _closure2_slot5;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.length;
                            var0 = 0;
                            if (!(!(var1 > var0))) {
                                _fun65684_ip = 100;
                                continue _fun65684
                            }
                        case 38:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 13;
                            var1 = var7[var0];
                            var5 = undefined;
                            var1 = var6.bind(var5)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var7[var0];
                            var0 = var6.bind(var5)(var0);
                            var0 = var0.t;
                            var0 = var0["5Wxrcd"];
                            var0 = var1.bind(var2)(var0);
                            _fun65684_ip = 160;
                            continue _fun65684;
                        case 100:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 13;
                            var2 = var8[var1];
                            var6 = undefined;
                            var2 = var7.bind(var6)(var2);
                            var5 = var2.intl;
                            var2 = var5.string;
                            var1 = var8[var1];
                            var1 = var7.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1.CumH4u;
                            var0 = var2.bind(var5)(var1);
                        case 160:
                            var _closure3_slot0 = var0;
                            var2 = _closure2_slot2;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = _closure2_slot3;
                            if (var3) {
                                _fun65684_ip = 192;
                                continue _fun65684
                            }
                        case 183:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot8;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 15;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var0.text = var4;
                                var4 = _closure2_slot6;
                                var0.onPress = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            _fun65684_ip = 199;
                            continue _fun65684;
                        case 192:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot8;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 14;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderSubmittingIndicator;
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 199:
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var15.addMembersContainer;
                var0.style = var4;
                var5 = _closure1_slot8;
                var4 = {};
                var6 = var15.moderatorDescriptionContainer;
                var4.style = var6;
                var6 = 16;
                var6 = var10[var6];
                var6 = var19.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var14 = 13;
                var16 = var10[var14];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var10 = var10[var14];
                var10 = var19.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.f7VbhF;
                var10 = var16.bind(var18)(var10);
                var6.children = var10;
                var6 = var5.bind(var3)(var7, var6);
                var4.children = var6;
                var5 = var5.bind(var3)(var1, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var17.message;
                var6 = var13 != var5;
                var5 = null;
                if (!var6) {
                    _fun65680_ip = 569;
                    continue _fun65680
                }
            case 472:
                var10 = _closure1_slot8;
                var7 = _closure1_slot5;
                var6 = {};
                var15 = var15.errorMessage;
                var6.style = var15;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 17;
                var15 = var20[var18];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var19 = _closure1_slot0;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.HelpMessageTypes;
                var18 = var18.ERROR;
                var15.messageType = var18;
                var17 = var17.message;
                var15.children = var17;
                var15 = var10.bind(var3)(var16, var15);
                var6.children = var15;
                var5 = var10.bind(var3)(var7, var6);
            case 569:
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 18;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channel = var13;
                var5.guild = var12;
                var13 = _closure1_slot0;
                var11 = 19;
                var11 = var10[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var5.permission = var11;
                var11 = var10[var14];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["Ch6+n4"];
                var10 = var11.bind(var12)(var10);
                var5.inputDesc = var10;
                var5.pendingAdditions = var9;
                var5.setPendingAdditions = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 5881, 33, 1297, 671, 1469, 44, 8092, 4206, 1636, 1234, 4668, 5284, 3900, 6404, 8111, 1380, 2]);