// modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useCallback;
    var _closure1_slot4 = var6;
    var3 = var3.useMemo;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 50,
        'width': 50,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingBottom': 4
    };
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var12;
    var3.ggContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var8.tintColor = var12;
    var3.noneIcon = var8;
    var8 = {};
    var8.paddingTop = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginLeft = var9;
    var3.newBadge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileDisplayNameStylesEditButton, environment: var1
        _fun79829: for (var _fun79829_ip = 0;;) switch (_fun79829_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.user;
                var _closure2_slot0 = var1;
                var8 = var2.guildId;
                var _closure2_slot1 = var8;
                var11 = var2.isTryItOut;
                var _closure2_slot2 = var11;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot11;
                var17 = var2.bind(var3)();
                var _closure2_slot3 = var17;
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 8;
                var2 = var12[var2];
                var5 = var4.bind(var3)(var2);
                var2 = var5.useNativeStackNavigation;
                var9 = var2.bind(var5)();
                var _closure2_slot4 = var9;
                var2 = 9;
                var2 = var12[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useSelectedDismissibleContent;
                var14 = 10;
                var2 = var12[var14];
                var2 = var4.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var7 = var2.DISPLAY_NAME_STYLES_MOBILE_NEW_BADGE;
                var2 = new Array(1);
                var2[0] = var7;
                var15 = true;
                var6 = var5.bind(var6)(var2, var3, var15);
                var5 = _closure1_slot3;
                var2 = 2;
                var5 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var13 = var5[var2];
                var2 = 1;
                var6 = var5[var2];
                var _closure2_slot5 = var6;
                var2 = 11;
                var2 = var12[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useGuildMemberOrUserPendingDisplayNameStyles;
                var2 = var2.bind(var4)(var1, var8);
                var5 = var2.pendingDisplayNameStyles;
                var7 = var2.tryItOutDisplayNameStyles;
                var4 = _closure1_slot1;
                var2 = 12;
                var2 = var12[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var12 = var1.id;
                var2.userId = var12;
                var2.guildId = var8;
                if (!var11) {
                    _fun79829_ip = 254;
                    continue _fun79829
                }
            case 251:
                var5 = var7;
            case 254:
                var2.pendingDisplayNameStyles = var5;
                var4 = var4.bind(var3)(var2);
                _closure2_slot6 = var4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useDisplayNameStylesEffectConfig;
                var12 = null;
                var16 = var12 == var4;
                var2 = undefined;
                if (var16) {
                    _fun79829_ip = 311;
                    continue _fun79829
                }
            case 305:
                var2 = var4.effectId;
            case 311:
                if (!(var12 == var2)) {
                    _fun79829_ip = 347;
                    continue _fun79829
                }
            case 315:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 14;
                var12 = var18[var12];
                var12 = var16.bind(var3)(var12);
                var12 = var12.DisplayNameEffect;
                var2 = var12.SOLID;
            case 347:
                var5 = var5.bind(var7)(var2);
                _closure2_slot7 = var5;
                var2 = _closure1_slot4;
                var7 = new Array(4);
                var7[0] = var8;
                var7[1] = var11;
                var7[2] = var9;
                var7[3] = var6;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var2 = _closure1_slot7;
                    var2 = var2.DISPLAY_NAME_STYLES_FROM_SETTINGS;
                    var2 = var3.bind(var4)(var2);
                    var6 = _closure2_slot4;
                    var5 = var6.navigate;
                    var3 = _closure1_slot8;
                    var4 = var3.DISPLAY_NAME_STYLES;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var3.guildId = var7;
                    var7 = _closure2_slot2;
                    var3.isTryItOut = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot5;
                    var1 = _closure1_slot9;
                    var1 = var1.TAKE_ACTION;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var2.bind(var3)(var6, var7);
                var9 = _closure1_slot5;
                var7 = new Array(2);
                var7[0] = var5;
                var7[1] = var4;
                var5 = function() { // Environment: var0
                    _fun79831: for (var _fun79831_ip = 0;;) switch (_fun79831_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun79831_ip = 125;
                                continue _fun79831
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 16;
                            var2 = var6[var2];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var4 = _closure1_slot1;
                            var1 = 17;
                            var1 = var6[var1];
                            var4 = var4.bind(var5)(var1);
                            var1 = _closure2_slot6;
                            var1 = var1.fontId;
                            var1 = var4.bind(var5)(var1);
                            var4 = var2.bind(var3)(var1);
                            var0 = _closure2_slot7;
                            var3 = var0.name;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ' + ';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            _fun79831_ip = 185;
                            continue _fun79831;
                        case 125:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.PoWNfe;
                            var0 = var2.bind(var3)(var1);
                        case 185:
                            return var0;
                    }
                };
                var7 = var9.bind(var3)(var5, var7);
                var5 = new Array(4);
                var5[0] = var4;
                var5[1] = var8;
                var1 = var1.id;
                var5[2] = var1;
                var5[3] = var17;
                var1 = function() { // Environment: var0
                    _fun79832: for (var _fun79832_ip = 0;;) switch (_fun79832_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun79832_ip = 133;
                                continue _fun79832
                            }
                        case 13:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var4 = var4.ggContainer;
                            var1.style = var4;
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 20;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var4);
                            var4 = {};
                            var7 = _closure2_slot0;
                            var7 = var7.id;
                            var4.userId = var7;
                            var7 = _closure2_slot1;
                            var4.guildId = var7;
                            var7 = 'Gg';
                            var4.userName = var7;
                            var7 = _closure2_slot6;
                            var4.pendingDisplayNameStyles = var7;
                            var7 = 'heading-xl/semibold';
                            var4.variant = var7;
                            var4 = var3.bind(var0)(var6, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            _fun79832_ip = 200;
                            continue _fun79832;
                        case 133:
                            var4 = _closure1_slot10;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 18;
                            var1 = var8[var1];
                            var3 = undefined;
                            var2 = var7.bind(var3)(var1);
                            var1 = {};
                            var6 = 19;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var1.source = var6;
                            var5 = _closure2_slot3;
                            var5 = var5.noneIcon;
                            var1.style = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 200:
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var1, var5);
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun79833: for (var _fun79833_ip = 0;;) switch (_fun79833_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var6 = null;
                            var1 = var6 == var0;
                            var0 = null;
                            if (var1) {
                                _fun79833_ip = 89;
                                continue _fun79833
                            }
                        case 18:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = _closure2_slot6;
                            var8 = var6 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun79833_ip = 71;
                                continue _fun79833
                            }
                        case 62:
                            var7 = _closure2_slot6;
                            var5 = var7.colors;
                        case 71:
                            if (!(var6 == var5)) {
                                _fun79833_ip = 79;
                                continue _fun79833
                            }
                        case 75:
                            var5 = new Array(0);
                        case 79:
                            var1.colors = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 89:
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot10;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 22;
                var0 = var9[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.UserProfileEditFormButton;
                var0 = {};
                var8 = 16;
                var11 = var9[var8];
                var11 = var12.bind(var3)(var11);
                var19 = var11.intl;
                var18 = var19.string;
                var20 = _closure1_slot1;
                var11 = 23;
                var16 = var9[var11];
                var16 = var20.bind(var3)(var16);
                var16 = var16["86GtGH"];
                var16 = var18.bind(var19)(var16);
                var0.label = var16;
                var9 = var9[var14];
                var9 = var12.bind(var3)(var9);
                var9 = var9.DismissibleContent;
                var12 = var9.DISPLAY_NAME_STYLES_MOBILE_NEW_BADGE;
                var9 = undefined;
                if (!(var13 === var12)) {
                    _fun79829_ip = 712;
                    continue _fun79829
                }
            case 595:
                var14 = _closure1_slot10;
                var13 = _closure1_slot6;
                var12 = {};
                var12['aria-hidden'] = var15;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 24;
                var15 = var18[var15];
                var15 = var21.bind(var3)(var15);
                var16 = var15.TextBadge;
                var15 = {};
                var19 = var18[var8];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var8];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.y2b7CA;
                var18 = var19.bind(var20)(var18);
                var15.text = var18;
                var17 = var17.newBadge;
                var15.style = var17;
                var15 = var14.bind(var3)(var16, var15);
                var12.children = var15;
                var9 = var14.bind(var3)(var13, var12);
            case 712:
                var0.labelTrailing = var9;
                var0.buttonText = var7;
                var0.accessibilityLabel = var7;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var10 = _closure1_slot1;
                var7 = var7[var11];
                var7 = var10.bind(var3)(var7);
                var7 = var7.vJqrIg;
                var7 = var8.bind(var9)(var7);
                var0.accessibilityHint = var7;
                var0.onPress = var6;
                var5 = var5.bind(var3)();
                var0.leading = var5;
                var4 = var4.bind(var3)();
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 1369, 33, 1297, 671, 1469, 5918, 1358, 5546, 3943, 6885, 1625, 795, 1234, 10121, 4045, 5706, 6881, 10122, 10123, 2139, 8236, 2]);