// modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.Fragment;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexShrink': 0,
        'flexGrow': 0
    };
    var3.guildIcon = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.subLabel = var9;
    var9 = {
        'width': 12,
        'height': 12,
        'marginRight': 2
    };
    var3.subLabelIcon = var9;
    var9 = {};
    var11 = 11;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var9.marginHorizontal = var11;
    var3.subLabelSeparator = var9;
    var9 = {};
    var9.flexShrink = var10;
    var3.threadName = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChannelRow, environment: var1
        _fun72505: for (var _fun72505_ip = 0;;) switch (_fun72505_ip) {
            case 0:
                var10 = arg0;
                var21 = var10.channel;
                var _closure2_slot0 = var21;
                var2 = var10.mode;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun72505_ip = 38;
                    continue _fun72505
                }
            case 25:
                var0 = _closure1_slot10;
                var2 = var0.NONE;
            case 38:
                var6 = var10.selected;
                if (!(var6 === var4)) {
                    _fun72505_ip = 50;
                    continue _fun72505
                }
            case 48:
                var6 = false;
            case 50:
                var12 = var10.disabled;
                if (!(var12 === var4)) {
                    _fun72505_ip = 61;
                    continue _fun72505
                }
            case 59:
                var12 = false;
            case 61:
                var _closure2_slot1 = var12;
                var9 = var10.onPress;
                var _closure2_slot2 = var9;
                var8 = var10.onLongPress;
                var _closure2_slot3 = var8;
                var15 = var10.trailing;
                var _closure2_slot4 = var15;
                var3 = var10.subLabel;
                var _closure2_slot5 = var3;
                var7 = var10.label;
                var _closure2_slot6 = var7;
                var1 = {
                    'channel': 0,
                    'mode': 0,
                    'selected': 0,
                    'disabled': 0,
                    'onPress': 0,
                    'onLongPress': 0,
                    'trailing': 0,
                    'subLabel': 0,
                    'label': 0
                };
                var19 = null;
                var26 = var1;
                var25 = null;
                var0 = silentSetPrototypeOf(var26, var25);
                var26 = {};
                var25 = var10;
                var24 = var1;
                var0 = copyDataProperties(var26, var25, var24);
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var10 = _closure1_slot15;
                var16 = var10.bind(var4)();
                _closure2_slot7 = var16;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 12;
                var14 = var13[var10];
                var20 = var11.bind(var4)(var14);
                var18 = var20.useStateFromStores;
                var14 = _closure1_slot6;
                var17 = new Array(1);
                var17[0] = var14;
                var14 = function() { // Environment: var5
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var18.bind(var20)(var17, var14);
                _closure2_slot8 = var20;
                var17 = _closure1_slot1;
                var14 = 13;
                var14 = var13[var14];
                var14 = var17.bind(var4)(var14);
                var22 = var14.bind(var4)(var21);
                _closure2_slot9 = var22;
                var14 = var13[var10];
                var23 = var11.bind(var4)(var14);
                var18 = var23.useStateFromStores;
                var14 = _closure1_slot5;
                var17 = new Array(3);
                var17[0] = var14;
                var14 = _closure1_slot9;
                var17[1] = var14;
                var14 = _closure1_slot8;
                var17[2] = var14;
                var14 = function() { // Environment: var5
                    _fun72507: for (var _fun72507_ip = 0;;) switch (_fun72507_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var0.parent_id;
                            var6 = var2.bind(var3)(var0);
                            var0 = null;
                            var2 = var0 == var6;
                            if (var2) {
                                _fun72507_ip = 87;
                                continue _fun72507
                            }
                        case 39:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.computeChannelName;
                            var9 = _closure1_slot9;
                            var8 = _closure1_slot8;
                            var7 = false;
                            var11 = var5;
                            var10 = var6;
                            var0 = var11[var4](var10, var9, var8, var7, var6);
                        case 87:
                            return var0;
                    }
                };
                var17 = var18.bind(var23)(var17, var14);
                _closure2_slot10 = var17;
                var10 = var13[var10];
                var14 = var11.bind(var4)(var10);
                var13 = var14.useStateFromStores;
                var10 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var5
                    var3 = _closure1_slot7;
                    var2 = var3.lastMessageTimestamp;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot11;
                    var0 = var0.CHANNEL;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var18 = var13.bind(var14)(var11, var10);
                _closure2_slot11 = var18;
                var13 = _closure1_slot3;
                var11 = var13.useCallback;
                var10 = new Array(2);
                var10[0] = var21;
                var10[1] = var9;
                var9 = function() { // Environment: var5
                    _fun72509: for (var _fun72509_ip = 0;;) switch (_fun72509_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72509_ip = 28;
                                continue _fun72509
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var11.bind(var13)(var9, var10);
                var11 = var13.useCallback;
                var9 = new Array(2);
                var9[0] = var21;
                var9[1] = var8;
                var8 = function() { // Environment: var5
                    _fun72510: for (var _fun72510_ip = 0;;) switch (_fun72510_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72510_ip = 30;
                                continue _fun72510
                            }
                        case 13:
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun72510_ip = 75;
                            continue _fun72510;
                        case 30:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openChannelLongPressActionSheet;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var11.bind(var13)(var8, var9);
                var14 = var13.useMemo;
                var11 = new Array(3);
                var11[0] = var21;
                var11[1] = var20;
                var8 = var16.guildIcon;
                var11[2] = var8;
                var8 = function() { // Environment: var5
                    _fun72511: for (var _fun72511_ip = 0;;) switch (_fun72511_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun72511_ip = 123;
                                continue _fun72511
                            }
                        case 16:
                            var4 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 15;
                            var1 = var7[var5];
                            var3 = undefined;
                            var1 = var6.bind(var3)(var1);
                            var2 = var1.GuildIconWithChannelType;
                            var1 = {};
                            var9 = '';
                            var1['aria-label'] = var9;
                            var9 = _closure2_slot7;
                            var9 = var9.guildIcon;
                            var1.style = var9;
                            var9 = _closure2_slot8;
                            var1.guild = var9;
                            var8 = _closure2_slot0;
                            var1.channel = var8;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.GuildIconWithChannelTypeSizes;
                            var5 = var5.SMALL_32;
                            var1.size = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 123:
                            return var0;
                    }
                };
                var11 = var14.bind(var13)(var8, var11);
                var14 = var13.useMemo;
                var8 = new Array(2);
                var8[0] = var22;
                var8[1] = var7;
                var7 = function() { // Environment: var5
                    _fun72512: for (var _fun72512_ip = 0;;) switch (_fun72512_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun72512_ip = 19;
                                continue _fun72512
                            }
                        case 13:
                            var0 = _closure2_slot9;
                            _fun72512_ip = 23;
                            continue _fun72512;
                        case 19:
                            var0 = _closure2_slot6;
                        case 23:
                            return var0;
                    }
                };
                var14 = var14.bind(var13)(var7, var8);
                var8 = var13.useMemo;
                var7 = new Array(9);
                var7[0] = var21;
                var21 = var19 == var20;
                var19 = undefined;
                if (var21) {
                    _fun72505_ip = 527;
                    continue _fun72505
                }
            case 522:
                var19 = var20.name;
            case 527:
                var7[1] = var19;
                var7[2] = var18;
                var7[3] = var17;
                var17 = var16.subLabel;
                var7[4] = var17;
                var17 = var16.subLabelIcon;
                var7[5] = var17;
                var17 = var16.subLabelSeparator;
                var7[6] = var17;
                var16 = var16.threadName;
                var7[7] = var16;
                var7[8] = var3;
                var3 = function() { // Environment: var5
                    _fun72513: for (var _fun72513_ip = 0;;) switch (_fun72513_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var4 = undefined;
                            if (!(var4 === var1)) {
                                _fun72513_ip = 516;
                                continue _fun72513
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var1 = var2.isThread;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun72513_ip = 76;
                                continue _fun72513
                            }
                        case 33:
                            var2 = _closure2_slot0;
                            var1 = var2.isForumPost;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun72513_ip = 76;
                                continue _fun72513
                            }
                        case 50:
                            var2 = _closure2_slot8;
                            var1 = null;
                            var2 = var1 == var2;
                            var1 = undefined;
                            if (var2) {
                                _fun72513_ip = 74;
                                continue _fun72513
                            }
                        case 65:
                            var2 = _closure2_slot8;
                            var1 = var2.name;
                        case 74:
                            return var1;
                        case 76:
                            var2 = _closure2_slot0;
                            var1 = var2.isForumPost;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            if (var1) {
                                _fun72513_ip = 124;
                                continue _fun72513
                            }
                        case 104:
                            var1 = 17;
                            var1 = var3[var1];
                            var1 = var2.bind(var4)(var1);
                            var7 = var1.TextIcon;
                            _fun72513_ip = 142;
                            continue _fun72513;
                        case 124:
                            var1 = 16;
                            var1 = var3[var1];
                            var1 = var2.bind(var4)(var1);
                            var7 = var1.ForumIcon;
                        case 142:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var5 = _closure2_slot7;
                            var5 = var5.subLabel;
                            var1.style = var5;
                            var8 = _closure1_slot12;
                            var5 = {};
                            var10 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var9 = 11;
                            var9 = var6[var9];
                            var9 = var10.bind(var4)(var9);
                            var9 = var9.colors;
                            var9 = var9.TEXT_SUBTLE;
                            var5.color = var9;
                            var9 = _closure2_slot7;
                            var9 = var9.subLabelIcon;
                            var5.style = var9;
                            var7 = var8.bind(var4)(var7, var5);
                            var5 = new Array(3);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var11 = 18;
                            var6 = var6[var11];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'style': null,
                                'variant': 'text-xs/medium',
                                'color': 'text-subtle',
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var9 = _closure2_slot7;
                            var9 = var9.threadName;
                            var6.style = var9;
                            var9 = _closure2_slot10;
                            var6.children = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var7 = _closure2_slot11;
                            var6 = null;
                            var7 = var6 != var7;
                            if (!var7) {
                                _fun72513_ip = 500;
                                continue _fun72513
                            }
                        case 320:
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot13;
                            var7 = {};
                            var13 = _closure1_slot12;
                            var16 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var10 = var18[var11];
                            var10 = var16.bind(var4)(var10);
                            var12 = var10.Text;
                            var10 = {
                                'style': null,
                                'variant': 'text-xs/medium',
                                'color': 'text-subtle',
                                'children': '•'
                            };
                            var15 = _closure2_slot7;
                            var15 = var15.subLabelSeparator;
                            var10.style = var15;
                            var12 = var13.bind(var4)(var12, var10);
                            var10 = new Array(2);
                            var10[0] = var12;
                            var11 = var18[var11];
                            var11 = var16.bind(var4)(var11);
                            var12 = var11.Text;
                            var11 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-subtle'
                            };
                            var15 = 19;
                            var15 = var18[var15];
                            var16 = var16.bind(var4)(var15);
                            var15 = var16.calendarFormatCompact;
                            var17 = _closure1_slot1;
                            var14 = 20;
                            var14 = var18[var14];
                            var17 = var17.bind(var4)(var14);
                            var14 = _closure2_slot11;
                            var14 = var17.bind(var4)(var14);
                            var14 = var15.bind(var16)(var14);
                            var11.children = var14;
                            var11 = var13.bind(var4)(var12, var11);
                            var10[1] = var11;
                            var7.children = var10;
                            var6 = var9.bind(var4)(var8, var7);
                        case 500:
                            var5[2] = var6;
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 516:
                            var0 = _closure2_slot5;
                            return var0;
                    }
                };
                var3 = var8.bind(var13)(var3, var7);
                var13 = _closure1_slot3;
                var8 = var13.useMemo;
                var7 = new Array(2);
                var7[0] = var15;
                var7[1] = var12;
                var5 = function() { // Environment: var5
                    _fun72514: for (var _fun72514_ip = 0;;) switch (_fun72514_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun72514_ip = 26;
                                continue _fun72514
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var0 = undefined;
                            if (!var3) {
                                _fun72514_ip = 24;
                                continue _fun72514
                            }
                        case 22:
                            var0 = null;
                        case 24:
                            _fun72514_ip = 30;
                            continue _fun72514;
                        case 26:
                            var0 = _closure2_slot4;
                        case 30:
                            return var0;
                    }
                };
                var8 = var8.bind(var13)(var5, var7);
                var13 = _closure1_slot12;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 18;
                var5 = var15[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var5.children = var14;
                var7 = var13.bind(var4)(var7, var5);
                var5 = {};
                var26 = var5;
                var25 = var0;
                var0 = copyDataProperties(var26, var25);
                var0 = 'disabled';
                var5[var0] = var12;
                var0 = 'icon';
                var5[var0] = var11;
                var0 = 'onPress';
                var5[var0] = var10;
                var0 = 'onLongPress';
                var5[var0] = var9;
                var0 = 'label';
                var5[var0] = var7;
                var0 = 'subLabel';
                var5[var0] = var3;
                var0 = _closure1_slot10;
                var0 = var0.TOGGLE;
                if (!(var2 !== var0)) {
                    _fun72505_ip = 822;
                    continue _fun72505
                }
            case 763:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 22;
                var0 = var7[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.TableRow;
                var0 = {};
                var26 = var0;
                var25 = var5;
                var7 = copyDataProperties(var26, var25);
                var7 = 'trailing';
                var0[var7] = var8;
                var0 = var3.bind(var4)(var2, var0);
                _fun72505_ip = 879;
                continue _fun72505;
            case 822:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableCheckboxRow;
                var1 = {};
                var26 = var1;
                var25 = var5;
                var5 = copyDataProperties(var26, var25);
                var5 = 'checked';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 879:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3901, 3059, 1613, 8838, 4261, 33, 1297, 671, 566, 4748, 9053, 9110, 4808, 4802, 3895, 3091, 3004, 8728, 4854, 2]);