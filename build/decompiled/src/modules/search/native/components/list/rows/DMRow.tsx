// modules/search/native/components/list/rows/DMRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105336: for (var _fun105336_ip = 0;;) switch (_fun105336_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.user;
                var2 = var0.type;
                var5 = var0.animate;
                var8 = var0.guildId;
                var0 = _closure1_slot15;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = _closure1_slot12;
                var0 = var0.PENDING_INCOMING;
                if (!(var2 !== var0)) {
                    _fun105336_ip = 133;
                    continue _fun105336
                }
            case 51:
                var3 = _closure1_slot13;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var9 = var7.id;
                var0.userId = var9;
                var0.guildId = var8;
                var8 = var6.activityStatusIcon;
                var0.iconStyle = var8;
                var6 = var6.activityStatusText;
                var0.textStyle = var6;
                var6 = 16;
                var0.emojiSize = var6;
                var0.animate = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun105336_ip = 209;
                continue _fun105336;
            case 133:
                var3 = _closure1_slot13;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'lineClamp': 1,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var5 = 12;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.getUserTag;
                var5 = var5.bind(var6)(var7);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 209:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ActivityIndicator;
    var _closure1_slot7 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StatusTypes;
    var _closure1_slot11 = var7;
    var3 = var3.RelationshipTypes;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 12;
    var9.marginRight = var11;
    var3.avatar = var9;
    var9 = {
        'width': 14,
        'height': 14
    };
    var3.activityStatusIcon = var9;
    var9 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18,
        'fontWeight': '400'
    };
    var11 = 10;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var9.color = var11;
    var3.activityStatusText = var9;
    var9 = {};
    var9.marginLeft = var10;
    var3.tag = var9;
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.title = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105337: for (var _fun105337_ip = 0;;) switch (_fun105337_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.user;
                var _closure2_slot0 = var16;
                var2 = var1.nickname;
                var _closure2_slot1 = var2;
                var2 = var1.premiumSince;
                var _closure2_slot2 = var2;
                var19 = var1.isOwner;
                var _closure2_slot3 = var19;
                var14 = var1.type;
                var _closure2_slot4 = var14;
                var15 = var1.guildId;
                var _closure2_slot5 = var15;
                var22 = var1.onPress;
                var _closure2_slot6 = var22;
                var6 = var1.trailing;
                var5 = var1.accessibilityActions;
                var4 = var1.onAccessibilityAction;
                var3 = undefined;
                var _closure2_slot13 = var3;
                var1 = _closure1_slot15;
                var21 = var1.bind(var3)();
                var _closure2_slot7 = var21;
                var20 = _closure1_slot5;
                var8 = var20.useState;
                var1 = false;
                var9 = var8.bind(var20)(var1);
                var8 = _closure1_slot4;
                var1 = 2;
                var9 = var8.bind(var3)(var9, var1);
                var1 = 0;
                var8 = var9[var1];
                var1 = 1;
                var1 = var9[var1];
                var _closure2_slot8 = var1;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 14;
                var1 = var11[var9];
                var17 = var10.bind(var3)(var1);
                var13 = var17.useStateFromStoresObject;
                var1 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot9;
                    var4 = var3.isMobileOnline;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.isMobileOnline = var2;
                    var4 = var3.isVROnline;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.isVROnline = var2;
                    var2 = var3.getStatus;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.status = var1;
                    return var0;
                };
                var12 = var13.bind(var17)(var12, var1);
                var17 = var12.isMobileOnline;
                var _closure2_slot9 = var17;
                var1 = var12.isVROnline;
                var _closure2_slot10 = var1;
                var18 = var12.status;
                var _closure2_slot11 = var18;
                var12 = var11[var9];
                var24 = var10.bind(var3)(var12);
                var23 = var24.useStateFromStores;
                var12 = _closure1_slot8;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var13 = var23.bind(var24)(var13, var12);
                var _closure2_slot12 = var13;
                var9 = var11[var9];
                var12 = var10.bind(var3)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    _fun105340: for (var _fun105340_ip = 0;;) switch (_fun105340_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun105340_ip = 42;
                                continue _fun105340
                            }
                        case 13:
                            var3 = _closure1_slot10;
                            var2 = var3.getNickname;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var0);
                            _fun105340_ip = 46;
                            continue _fun105340;
                        case 42:
                            var0 = _closure2_slot1;
                        case 46:
                            return var0;
                    }
                };
                var11 = var11.bind(var12)(var10, var9);
                _closure2_slot1 = var11;
                var12 = var20.useCallback;
                var10 = _closure1_slot3;
                var9 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun105342: for (var _fun105342_ip = 0;;) switch (_fun105342_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun105342_ip = 94;
                                    continue _fun105342
                                }
                            case 7:
                                var3 = _closure2_slot8;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 23: // try_start_0
                                var3 = _closure2_slot6;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 45);
                            case 43:
                                return var1;
                            case 45:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun105342_ip = 65;
                                    continue _fun105342
                                }
                            case 51: // try_end0
                                var5 = _closure2_slot8;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var4;
                            case 65:
                                var5 = _closure2_slot8;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 79: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot8;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 94:
                                return var0;
                        }
                    };
                    return var0;
                };
                var10 = var10.bind(var3)(var9);
                var9 = new Array(2);
                var9[0] = var22;
                var22 = var16.id;
                var9[1] = var22;
                var9 = var12.bind(var20)(var10, var9);
                var10 = null;
                var20 = var11;
                if (!(var10 == var20)) {
                    _fun105337_ip = 406;
                    continue _fun105337
                }
            case 375:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 12;
                var10 = var12[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.getName;
                var20 = var10.bind(var11)(var16);
            case 406:
                _closure2_slot13 = var20;
                var11 = _closure1_slot5;
                var12 = var11.useMemo;
                var22 = var21.title;
                var10 = new Array(6);
                var10[0] = var22;
                var21 = var21.tag;
                var10[1] = var21;
                var10[2] = var20;
                var10[3] = var16;
                var10[4] = var19;
                var10[5] = var2;
                var2 = function() { // Environment: var0
                    _fun105343: for (var _fun105343_ip = 0;;) switch (_fun105343_ip) {
                        case 0:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot7;
                            var0 = var0.title;
                            var1.style = var0;
                            var6 = _closure1_slot13;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.Text;
                            var4 = {
                                'lineClamp': 1,
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var7 = _closure2_slot13;
                            var4.children = var7;
                            var5 = var6.bind(var0)(var5, var4);
                            var4 = new Array(4);
                            var4[0] = var5;
                            var5 = _closure2_slot0;
                            var5 = var5.bot;
                            if (!var5) {
                                _fun105343_ip = 227;
                                continue _fun105343
                            }
                        case 109:
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var14 = 15;
                            var6 = var6[var14];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var11 = _closure2_slot7;
                            var11 = var11.tag;
                            var6.style = var11;
                            var12 = _closure2_slot0;
                            var11 = var12.isVerifiedBot;
                            var11 = var11.bind(var12)();
                            var6.verified = var11;
                            var11 = var12.isSystemUser;
                            var11 = var11.bind(var12)();
                            var13 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var12 = var12[var14];
                            var12 = var13.bind(var0)(var12);
                            var12 = var12.Types;
                            if (var11) {
                                _fun105343_ip = 211;
                                continue _fun105343
                            }
                        case 203:
                            var11 = var12.BOT;
                            _fun105343_ip = 217;
                            continue _fun105343;
                        case 211:
                            var11 = var12.SYSTEM_DM;
                        case 217:
                            var6.type = var11;
                            var5 = var8.bind(var0)(var7, var6);
                        case 227:
                            var4[1] = var5;
                            var5 = _closure2_slot3;
                            if (!var5) {
                                _fun105343_ip = 351;
                                continue _fun105343
                            }
                        case 238:
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot6;
                            var6 = {};
                            var11 = _closure2_slot7;
                            var11 = var11.tag;
                            var6.style = var11;
                            var13 = _closure1_slot13;
                            var15 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var14 = 16;
                            var11 = var16[var14];
                            var12 = var15.bind(var0)(var11);
                            var11 = {};
                            var14 = var16[var14];
                            var14 = var15.bind(var0)(var14);
                            var14 = var14.Sizes;
                            var14 = var14.REFRESH_SMALL_16;
                            var11.size = var14;
                            var14 = 17;
                            var14 = var16[var14];
                            var14 = var15.bind(var0)(var14);
                            var11.source = var14;
                            var14 = true;
                            var11.disableColor = var14;
                            var11 = var13.bind(var0)(var12, var11);
                            var6.children = var11;
                            var5 = var8.bind(var0)(var7, var6);
                        case 351:
                            var4[2] = var5;
                            var6 = _closure2_slot2;
                            var5 = null;
                            var5 = var5 != var6;
                            if (!var5) {
                                _fun105343_ip = 481;
                                continue _fun105343
                            }
                        case 368:
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot6;
                            var6 = {};
                            var10 = _closure2_slot7;
                            var10 = var10.tag;
                            var6.style = var10;
                            var11 = _closure1_slot13;
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 16;
                            var9 = var14[var12];
                            var10 = var13.bind(var0)(var9);
                            var9 = {};
                            var12 = var14[var12];
                            var12 = var13.bind(var0)(var12);
                            var12 = var12.Sizes;
                            var12 = var12.REFRESH_SMALL_16;
                            var9.size = var12;
                            var12 = 18;
                            var12 = var14[var12];
                            var12 = var13.bind(var0)(var12);
                            var9.source = var12;
                            var12 = true;
                            var9.disableColor = var12;
                            var9 = var11.bind(var0)(var10, var9);
                            var6.children = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 481:
                            var4[3] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var12 = var12.bind(var11)(var2, var10);
                var10 = var11.useMemo;
                var2 = new Array(5);
                var2[0] = var16;
                var2[1] = var18;
                var2[2] = var17;
                var2[3] = var1;
                var2[4] = var15;
                var1 = function() { // Environment: var0
                    _fun105344: for (var _fun105344_ip = 0;;) switch (_fun105344_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var7 = 19;
                            var0 = var0[var7];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = _closure2_slot0;
                            var0.user = var6;
                            var6 = _closure2_slot5;
                            var0.guildId = var6;
                            var6 = _closure1_slot11;
                            var9 = var6.OFFLINE;
                            var8 = _closure2_slot11;
                            var6 = null;
                            if (!(var9 !== var8)) {
                                _fun105344_ip = 74;
                                continue _fun105344
                            }
                        case 70:
                            var6 = _closure2_slot11;
                        case 74:
                            var0.status = var6;
                            var6 = _closure2_slot9;
                            var0.isMobileOnline = var6;
                            var6 = _closure2_slot10;
                            var0.isVROnline = var6;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.AvatarSizes;
                            var5 = var5.LARGE_48;
                            var0.size = var5;
                            var4 = _closure2_slot0;
                            var4 = var4.avatarDecoration;
                            var0.avatarDecoration = var4;
                            var4 = true;
                            var0.autoStatusCutout = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var10 = var10.bind(var11)(var1, var2);
                var2 = var11.useMemo;
                var1 = new Array(4);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var0 = function() { // Environment: var0
                    _fun105345: for (var _fun105345_ip = 0;;) switch (_fun105345_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var0 = var3[var0];
                            var5 = undefined;
                            var3 = var1.bind(var5)(var0);
                            var1 = var3.getUserTag;
                            var0 = _closure2_slot0;
                            var7 = var1.bind(var3)(var0);
                            var1 = null;
                            if (!(var1 != var7)) {
                                _fun105345_ip = 117;
                                continue _fun105345
                            }
                        case 49:
                            var0 = _closure2_slot0;
                            var0 = var0.isProvisional;
                            if (var0) {
                                _fun105345_ip = 117;
                                continue _fun105345
                            }
                        case 62:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 11;
                            var0 = var8[var0];
                            var0 = var3.bind(var5)(var0);
                            var3 = var0.Text;
                            var0 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-muted'
                            };
                            var0.children = var7;
                            var0 = var4.bind(var5)(var3, var0);
                            _fun105345_ip = 185;
                            continue _fun105345;
                        case 117:
                            var3 = _closure2_slot4;
                            var3 = var1 != var3;
                            var1 = null;
                            if (!var3) {
                                _fun105345_ip = 182;
                                continue _fun105345
                            }
                        case 130:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot16;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.user = var7;
                            var7 = _closure2_slot5;
                            var2.guildId = var7;
                            var7 = _closure2_slot4;
                            var2.type = var7;
                            var6 = _closure2_slot12;
                            var6 = !var6;
                            var2.animate = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 182:
                            var0 = var1;
                        case 185:
                            return var0;
                    }
                };
                var11 = var2.bind(var11)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 20;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SearchListRow;
                var0 = {};
                var0.label = var12;
                var0.subLabel = var11;
                var0.icon = var10;
                var0.onPress = var9;
                if (!var8) {
                    _fun105337_ip = 618;
                    continue _fun105337
                }
            case 602:
                var9 = _closure1_slot13;
                var8 = _closure1_slot7;
                var7 = {};
                var6 = var9.bind(var3)(var8, var7);
            case 618:
                var0.trailing = var6;
                var0.accessibilityActions = var5;
                var0.onAccessibilityAction = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/DMRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1298, 3601, 3091, 660, 33, 1297, 671, 3932, 3227, 7755, 566, 5762, 4077, 8135, 9960, 5447, 13719, 2]);