// modules/user_profile/native/UserProfilePrimaryInfo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var8;
    var4 = function(arg0) { // Original name: DisplayName, environment: var5
        _fun59536: for (var _fun59536_ip = 0;;) switch (_fun59536_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.user;
                var _closure2_slot0 = var2;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var10 = var1.name;
                var _closure2_slot2 = var10;
                var3 = var1.themeType;
                var11 = var1.onPress;
                var9 = var1.accessibilityHint;
                var8 = var1.showChevron;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun59536_ip = 63;
                    continue _fun59536
                }
            case 61:
                var8 = false;
            case 63:
                var1 = var1.pendingDisplayNameStyles;
                var _closure2_slot3 = var1;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var2 = _closure1_slot15;
                var7 = var2.bind(var4)();
                _closure2_slot4 = var7;
                var2 = _closure1_slot18;
                var2 = var2.bind(var4)(var3);
                var2 = var2.headingVariant;
                _closure2_slot5 = var2;
                var5 = function() { // Original name: renderDisplayName, environment: var0
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 9;
                    var0 = var7[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var0.userId = var6;
                    var6 = _closure2_slot1;
                    var0.guildId = var6;
                    var6 = _closure2_slot2;
                    var0.userName = var6;
                    var6 = _closure2_slot5;
                    var0.variant = var6;
                    var6 = _closure1_slot0;
                    var5 = 10;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.EffectDisplayType;
                    var5 = var5.STATIC;
                    var0.effectDisplayType = var5;
                    var5 = 2;
                    var0.lineClamp = var5;
                    var4 = _closure2_slot3;
                    var0.pendingDisplayNameStyles = var4;
                    var4 = 'mobile-text-heading-primary';
                    var0.defaultColor = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6 = function() { // Original name: renderBotTag, environment: var0
                    _fun59538: for (var _fun59538_ip = 0;;) switch (_fun59538_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.isSystemUser;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun59538_ip = 132;
                                continue _fun59538
                            }
                        case 20:
                            var0 = _closure2_slot0;
                            var1 = var0.bot;
                            var0 = null;
                            if (!var1) {
                                _fun59538_ip = 130;
                                continue _fun59538
                            }
                        case 35:
                            var4 = _closure1_slot12;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var1 = var8[var6];
                            var3 = undefined;
                            var2 = var7.bind(var3)(var1);
                            var1 = {};
                            var9 = _closure2_slot4;
                            var9 = var9.botTag;
                            var1.style = var9;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var6 = var6.Types;
                            var6 = var6.BOT;
                            var1.type = var6;
                            var7 = _closure2_slot0;
                            var6 = var7.isVerifiedBot;
                            var6 = var6.bind(var7)();
                            var1.verified = var6;
                            var0 = var4.bind(var3)(var2, var1);
                        case 130:
                            _fun59538_ip = 227;
                            continue _fun59538;
                        case 132:
                            var4 = _closure1_slot12;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var1 = var8[var6];
                            var3 = undefined;
                            var2 = var7.bind(var3)(var1);
                            var1 = {};
                            var9 = _closure2_slot4;
                            var9 = var9.botTag;
                            var1.style = var9;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var6 = var6.Types;
                            var6 = var6.SYSTEM_DM;
                            var1.type = var6;
                            var6 = _closure2_slot0;
                            var5 = var6.isVerifiedBot;
                            var5 = var5.bind(var6)();
                            var1.verified = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 227:
                            return var0;
                    }
                };
                var0 = null;
                if (!(var0 != var11)) {
                    _fun59536_ip = 285;
                    continue _fun59536
                }
            case 134:
                var3 = _closure1_slot13;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var0 = var12[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var11;
                var11 = 'button';
                var0.accessibilityRole = var11;
                var0.accessibilityLabel = var10;
                var0.accessibilityHint = var9;
                var7 = var7.displayName;
                var0.style = var7;
                var9 = var5.bind(var4)();
                var7 = new Array(3);
                var7[0] = var9;
                var9 = var6.bind(var4)();
                var7[1] = var9;
                if (!var8) {
                    _fun59536_ip = 269;
                    continue _fun59536
                }
            case 219:
                var11 = _closure1_slot12;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 13;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ChevronSmallDownIcon;
                var9 = {
                    'size': 'sm',
                    'color': 'icon-muted'
                };
                var8 = var11.bind(var4)(var10, var9);
            case 269:
                var7[2] = var8;
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun59536_ip = 325;
                continue _fun59536;
            case 285:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var7 = var5.bind(var4)();
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.bind(var4)();
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 325:
                return var0;
        }
    };
    var _closure1_slot19 = var4;
    var3 = function(arg0) { // Original name: UserTagAndPronouns, environment: var5
        _fun59539: for (var _fun59539_ip = 0;;) switch (_fun59539_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.userTag;
                var _closure2_slot0 = var8;
                var16 = var2.pronouns;
                var _closure2_slot1 = var16;
                var4 = var2.themeType;
                var12 = var2.onPressUserTag;
                var _closure2_slot2 = var12;
                var1 = var2.userTagAccessibilityHint;
                var _closure2_slot3 = var1;
                var17 = var2.onPressPronouns;
                var15 = var2.pronounsAccessibilityHint;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot15;
                var6 = var2.bind(var3)();
                var10 = null;
                var5 = var10 != var16;
                if (!var5) {
                    _fun59539_ip = 100;
                    continue _fun59539
                }
            case 89:
                var7 = var16.length;
                var2 = 0;
                var5 = var7 > var2;
            case 100:
                var2 = _closure1_slot18;
                var2 = var2.bind(var3)(var4);
                var19 = var2.textVariant;
                _closure2_slot4 = var19;
                var7 = _closure1_slot3;
                var4 = var7.useCallback;
                var2 = new Array(4);
                var2[0] = var12;
                var2[1] = var19;
                var2[2] = var8;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun59540: for (var _fun59540_ip = 0;;) switch (_fun59540_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun59540_ip = 176;
                                continue _fun59540
                            }
                        case 16:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 14;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.Text;
                            var1 = {
                                'variant': null,
                                'color': 'mobile-text-heading-primary',
                                'lineClamp': 2
                            };
                            var6 = _closure2_slot4;
                            var1.variant = var6;
                            var6 = _closure2_slot0;
                            var1.children = var6;
                            var6 = var4.bind(var5)(var3, var1);
                            var3 = _closure2_slot2;
                            var1 = var6;
                            if (!(var0 != var3)) {
                                _fun59540_ip = 174;
                                continue _fun59540
                            }
                        case 99:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 12;
                            var2 = var8[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.PressableOpacity;
                            var2 = {};
                            var8 = _closure2_slot2;
                            var2.onPress = var8;
                            var8 = 'button';
                            var2.accessibilityRole = var8;
                            var8 = _closure2_slot0;
                            var2.accessibilityLabel = var8;
                            var7 = _closure2_slot3;
                            var2.accessibilityHint = var7;
                            var2.children = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 174:
                            return var1;
                        case 176:
                            return var0;
                    }
                };
                var4 = var4.bind(var7)(var1, var2);
                var14 = function() { // Original name: renderPronouns, environment: var0
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': null,
                        'color': 'mobile-text-heading-primary',
                        'lineClamp': 1
                    };
                    var5 = _closure2_slot4;
                    var0.variant = var5;
                    var4 = _closure2_slot1;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var6.detailsText;
                var0.style = var6;
                var6 = var4.bind(var3)();
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun59539_ip = 370;
                    continue _fun59539
                }
            case 202:
                var8 = _closure1_slot13;
                var7 = _closure1_slot14;
                var6 = {};
                var18 = _closure1_slot12;
                var13 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 14;
                var9 = var20[var9];
                var9 = var13.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {};
                var9.variant = var19;
                var19 = 'mobile-text-heading-primary';
                var9.color = var19;
                var19 = _closure1_slot8;
                var9.children = var19;
                var13 = var18.bind(var3)(var13, var9);
                var9 = new Array(2);
                var9[0] = var13;
                if (!(var10 == var12)) {
                    _fun59539_ip = 289;
                    continue _fun59539
                }
            case 283:
                var10 = var14.bind(var3)();
                _fun59539_ip = 356;
                continue _fun59539;
            case 289:
                var13 = _closure1_slot12;
                var12 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 12;
                var11 = var18[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.PressableOpacity;
                var11 = {};
                var11.onPress = var17;
                var17 = 'button';
                var11.accessibilityRole = var17;
                var11.accessibilityLabel = var16;
                var11.accessibilityHint = var15;
                var14 = var14.bind(var3)();
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 356:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 370:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var0 = function(arg0) { // Original name: ProfileBadge, environment: var5
        _fun59542: for (var _fun59542_ip = 0;;) switch (_fun59542_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.source;
                var _closure2_slot0 = var13;
                var6 = var0.id;
                var _closure2_slot1 = var6;
                var17 = var0.label;
                var _closure2_slot2 = var17;
                var5 = var0.badgeSize;
                var9 = var0.userId;
                var4 = var0.themeType;
                var0 = var0.showToastOnPress;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun59542_ip = 63;
                    continue _fun59542
                }
            case 61:
                var0 = true;
            case 63:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot15;
                var14 = var1.bind(var3)();
                var2 = null;
                var1 = var2 != var5;
                var15 = undefined;
                if (!var1) {
                    _fun59542_ip = 106;
                    continue _fun59542
                }
            case 93:
                var1 = {};
                var1.width = var5;
                var1.height = var5;
                var15 = var1;
            case 106:
                var5 = _closure1_slot3;
                var1 = var5.useRef;
                var11 = var1.bind(var5)(var2);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var1 = var7[var1];
                var8 = var5.bind(var3)(var1);
                var1 = var8.useTieredTenureBadgeClickHandler;
                var1 = var1.bind(var8)(var6, var9, var4);
                _closure2_slot3 = var1;
                var1 = 16;
                var1 = var7[var1];
                var9 = var5.bind(var3)(var1);
                var8 = var9.useAdUser;
                var1 = 'profile_badge';
                var1 = var8.bind(var9)(var1);
                _closure2_slot4 = var1;
                var1 = 17;
                var1 = var7[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.getRootNavigationRef;
                var7 = var1.bind(var5)();
                var1 = var2 != var7;
                var5 = undefined;
                if (!var1) {
                    _fun59542_ip = 246;
                    continue _fun59542
                }
            case 221:
                var1 = var7.isReady;
                var1 = var1.bind(var7)();
                var5 = undefined;
                if (!var1) {
                    _fun59542_ip = 246;
                    continue _fun59542
                }
            case 236:
                var1 = var7.getCurrentRoute;
                var5 = var1.bind(var7)();
            case 246:
                var7 = var2 == var5;
                var1 = undefined;
                if (var7) {
                    _fun59542_ip = 276;
                    continue _fun59542
                }
            case 255:
                var5 = var5.params;
                var7 = var2 == var5;
                var1 = undefined;
                if (var7) {
                    _fun59542_ip = 276;
                    continue _fun59542
                }
            case 270:
                var1 = var5.showOrbsBadgeCoachmark;
            case 276:
                var16 = var2 != var1;
                if (!var16) {
                    _fun59542_ip = 286;
                    continue _fun59542
                }
            case 283:
                var16 = var1;
            case 286:
                var7 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 18;
                var1 = var18[var8];
                var9 = var7.bind(var3)(var1);
                var5 = var9.useOrbsBadgeCoachmark;
                var1 = {};
                var16 = !var16;
                var1.disabled = var16;
                var5 = var5.bind(var9)(var1);
                var1 = 19;
                var9 = var18[var1];
                var9 = var7.bind(var3)(var9);
                var16 = var9.intl;
                var9 = var16.formatToPlainString;
                var1 = var18[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var7 = var1.A0LN9t;
                var1 = {};
                var1.badgeLabel = var17;
                var16 = var9.bind(var16)(var7, var1);
                var1 = _closure1_slot10;
                var1 = var1.YOU_SCREEN;
                var1 = var4 === var1;
                if (!var1) {
                    _fun59542_ip = 411;
                    continue _fun59542
                }
            case 400:
                var9 = 'string';
                var7 = typeof var6;
                var1 = var9 === var7;
            case 411:
                var7 = null;
                if (!var1) {
                    _fun59542_ip = 458;
                    continue _fun59542
                }
            case 416:
                var17 = _closure1_slot12;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 20;
                var1 = var18[var1];
                var9 = var9.bind(var3)(var1);
                var1 = {};
                var1.targetRef = var11;
                var1.badgeId = var6;
                var7 = var17.bind(var3)(var9, var1);
            case 458:
                var1 = _closure1_slot10;
                var1 = var1.YOU_SCREEN;
                var1 = var4 === var1;
                if (!var1) {
                    _fun59542_ip = 486;
                    continue _fun59542
                }
            case 475:
                var9 = 'string';
                var4 = typeof var6;
                var1 = var9 === var4;
            case 486:
                if (!var1) {
                    _fun59542_ip = 499;
                    continue _fun59542
                }
            case 489:
                var4 = 'orb_profile_badge';
                var1 = var4 === var6;
            case 499:
                if (!var1) {
                    _fun59542_ip = 506;
                    continue _fun59542
                }
            case 502:
                var1 = var2 != var5;
            case 506:
                var6 = null;
                if (!var1) {
                    _fun59542_ip = 557;
                    continue _fun59542
                }
            case 511:
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.badgeRef = var11;
                var20 = var5.props;
                var21 = var1;
                var5 = copyDataProperties(var21, var20);
                var6 = var4.bind(var3)(var2, var1);
            case 557:
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var4 = {};
                var9 = _closure1_slot12;
                if (var0) {
                    _fun59542_ip = 662;
                    continue _fun59542
                }
            case 574:
                var5 = _closure1_slot4;
                var0 = {};
                var17 = var14.badge;
                var8 = new Array(2);
                var8[0] = var17;
                var8[1] = var15;
                var0.style = var8;
                var0.source = var13;
                var8 = true;
                var0.accessible = var8;
                var8 = 'image';
                var0.accessibilityRole = var8;
                var0.accessibilityLabel = var16;
                var0.ref = var11;
                var5 = var9.bind(var3)(var5, var0);
                var0 = new Array(3);
                var0[0] = var5;
                var0[1] = var7;
                var0[2] = var6;
                var4.children = var0;
                var0 = var4;
                _fun59542_ip = 790;
                continue _fun59542;
            case 662:
                var8 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 12;
                var5 = var17[var5];
                var5 = var8.bind(var3)(var5);
                var8 = var5.PressableOpacity;
                var5 = {};
                var17 = 'image';
                var5.accessibilityRole = var17;
                var5.accessibilityLabel = var16;
                var12 = function() { // Original name: onPress, environment: var12
                    _fun59543: for (var _fun59543_ip = 0;;) switch (_fun59543_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var7 = null;
                            if (!(var7 != var0)) {
                                _fun59543_ip = 28;
                                continue _fun59543
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun59543_ip = 391;
                            continue _fun59543;
                        case 28:
                            var1 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 21;
                            var0 = var3[var0];
                            var9 = undefined;
                            var2 = var1.bind(var9)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var5 = _closure2_slot2;
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var8 = 'PROFILE_BADGE-';
                            var8 = var10.bind(var8)(var5);
                            var0.key = var8;
                            var0.content = var5;
                            var5 = _closure2_slot0;
                            var0.icon = var5;
                            var0 = var1.bind(var2)(var0);
                            var1 = _closure2_slot1;
                            var2 = _closure1_slot0;
                            var0 = 22;
                            var0 = var3[var0];
                            var0 = var2.bind(var9)(var0);
                            var0 = var0.QUEST_COMPLETED_BADGE;
                            if (!(var1 === var0)) {
                                _fun59543_ip = 391;
                                continue _fun59543
                            }
                        case 143:
                            var1 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var0 = 23;
                            var0 = var12[var0];
                            var3 = var1.bind(var9)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot11;
                            var1 = var0.QUEST_CONTENT_VIEWED;
                            var0 = {};
                            var11 = _closure1_slot0;
                            var5 = 24;
                            var5 = var12[var5];
                            var10 = var11.bind(var9)(var5);
                            var8 = var10.getContentProperties;
                            var5 = 25;
                            var5 = var12[var5];
                            var5 = var11.bind(var9)(var5);
                            var5 = var5.QuestContent;
                            var5 = var5.QUEST_BADGE;
                            var13 = var8.bind(var10)(var5);
                            var14 = var0;
                            var5 = copyDataProperties(var14, var13);
                            var5 = _closure2_slot4;
                            var5 = var7 != var5;
                            var8 = null;
                            if (!var5) {
                                _fun59543_ip = 296;
                                continue _fun59543
                            }
                        case 251:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 26;
                            var5 = var11[var5];
                            var10 = var10.bind(var9)(var5);
                            var5 = var10.isIOS;
                            var5 = var5.bind(var10)();
                            var8 = null;
                            if (!var5) {
                                _fun59543_ip = 296;
                                continue _fun59543
                            }
                        case 286:
                            var5 = _closure2_slot4;
                            var8 = var5.advertisingId;
                        case 296:
                            var5 = 'apple_advertising_id';
                            var0[var5] = var8;
                            var5 = _closure2_slot4;
                            var8 = var7 != var5;
                            var5 = null;
                            if (!var8) {
                                _fun59543_ip = 365;
                                continue _fun59543
                            }
                        case 320:
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 26;
                            var6 = var10[var6];
                            var8 = var8.bind(var9)(var6);
                            var6 = var8.isAndroid;
                            var6 = var6.bind(var8)();
                            var5 = null;
                            if (!var6) {
                                _fun59543_ip = 365;
                                continue _fun59543
                            }
                        case 355:
                            var4 = _closure2_slot4;
                            var5 = var4.advertisingId;
                        case 365:
                            var4 = 'android_advertising_id';
                            var0[var4] = var5;
                            var5 = false;
                            var4 = 'is_targeted';
                            var0[var4] = var5;
                            var0 = var2.bind(var3)(var1, var0);
                        case 391:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var12;
                var5.ref = var11;
                var12 = _closure1_slot12;
                var11 = _closure1_slot4;
                var10 = {};
                var16 = var14.badge;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var10.style = var14;
                var10.source = var13;
                var10 = var12.bind(var3)(var11, var10);
                var5.children = var10;
                var8 = var9.bind(var3)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var7;
                var5[2] = var6;
                var4.children = var5;
                var0 = var4;
            case 790:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var1 = function(arg0) { // Original name: ProfileBadgeRows, environment: var5
        _fun59544: for (var _fun59544_ip = 0;;) switch (_fun59544_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.userId;
                var _closure2_slot0 = var12;
                var6 = var1.badges;
                var0 = var1.isTryItOut;
                var2 = var1.style;
                var _closure2_slot1 = var2;
                var2 = var1.themeType;
                var _closure2_slot2 = var2;
                var11 = var1.showToastOnPress;
                var _closure2_slot3 = var11;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot15;
                var7 = var1.bind(var3)();
                var _closure2_slot4 = var7;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)(var2);
                var8 = var1.badgeSize;
                var _closure2_slot5 = var8;
                var9 = var1.badgeRowHorizontalPadding;
                var _closure2_slot6 = var9;
                var2 = var6.map;
                var1 = function(arg0) { // Environment: var4
                    _fun59545: for (var _fun59545_ip = 0;;) switch (_fun59545_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot21;
                            var2 = {};
                            var1 = var0.id;
                            var2.id = var1;
                            var5 = _closure2_slot0;
                            var2.userId = var5;
                            var5 = {};
                            var6 = var0.iconSrc;
                            var8 = null;
                            if (!(var8 == var6)) {
                                _fun59545_ip = 66;
                                continue _fun59545
                            }
                        case 50:
                            var9 = _closure1_slot7;
                            var8 = var0.icon;
                            var7 = undefined;
                            var6 = var9.bind(var7)(var8);
                        case 66:
                            var5.uri = var6;
                            var2.source = var5;
                            var5 = var0.description;
                            var2.label = var5;
                            var5 = _closure2_slot5;
                            var2.badgeSize = var5;
                            var5 = _closure2_slot2;
                            var2.themeType = var5;
                            var1 = _closure2_slot3;
                            var2.showToastOnPress = var1;
                            var1 = var0.id;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var10 = var2.bind(var6)(var1);
                var _closure2_slot7 = var10;
                if (!var0) {
                    _fun59544_ip = 148;
                    continue _fun59544
                }
            case 127:
                var2 = var6.find;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = 'premium';
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var2.bind(var6)(var1);
                var1 = null;
                var0 = var1 == var2;
            case 148:
                if (!var0) {
                    _fun59544_ip = 317;
                    continue _fun59544
                }
            case 154:
                var1 = var10.push;
                var6 = _closure1_slot12;
                var2 = _closure1_slot21;
                var0 = {};
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 27;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var0.source = var13;
                var13 = 'premium';
                var0.id = var13;
                var0.userId = var12;
                var13 = _closure1_slot0;
                var12 = 19;
                var14 = var16[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12["8zbGNR"];
                var12 = {};
                var16 = global;
                var16 = var16.Date;
                var17 = var16.prototype;
                var17 = Object.create(var17, {
                    constructor: {
                        value: var16
                    }
                });
                var20 = var17;
                var16 = new var20[var16](var19);
                var16 = var16 instanceof Object ? var16 : var17;
                var12.date = var16;
                var12 = var14.bind(var15)(var13, var12);
                var0.label = var12;
                var0.badgeSize = var8;
                var0.showToastOnPress = var11;
                var0 = var6.bind(var3)(var2, var0);
                var0 = var1.bind(var10)(var0);
            case 317:
                var0 = _closure1_slot6;
                var0 = var0.bind(var3)();
                var0 = var0.width;
                _closure2_slot8 = var0;
                var6 = _closure1_slot3;
                var2 = var6.useMemo;
                var1 = new Array(4);
                var1[0] = var10;
                var1[1] = var9;
                var1[2] = var8;
                var1[3] = var0;
                var0 = function() { // Environment: var4
                    var5 = global;
                    var3 = var5.Math;
                    var2 = var3.floor;
                    var7 = _closure2_slot8;
                    var1 = _closure1_slot9;
                    var6 = 2;
                    var1 = var6 * var1;
                    var7 = var7 - var1;
                    var1 = _closure2_slot6;
                    var1 = var6 * var1;
                    var8 = _closure2_slot5;
                    var6 = 8;
                    var6 = var8 + var6;
                    var1 = var7 - var1;
                    var1 = var1 / var6;
                    var7 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var7;
                    var3 = var5.Array;
                    var2 = var3.from;
                    var1 = {};
                    var6 = var5.Math;
                    var5 = var6.ceil;
                    var4 = _closure2_slot7;
                    var4 = var4.length;
                    var4 = var4 / var7;
                    var4 = var5.bind(var6)(var4);
                    var1.length = var4;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var5 = arg1;
                        var3 = _closure2_slot7;
                        var2 = var3.slice;
                        var4 = _closure3_slot0;
                        var1 = var5 * var4;
                        var0 = 1;
                        var0 = var5 + var0;
                        var0 = var0 * var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = var7.badges;
                var7 = new Array(1);
                var7[0] = var8;
                var0.style = var7;
                var7 = 'list';
                var0.accessibilityRole = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 19;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.VWV0y5;
                var5 = var7.bind(var8)(var5);
                var0.accessibilityLabel = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var0 = _closure2_slot4;
                    var5 = var0.badgeRow;
                    var0 = new Array(3);
                    var0[0] = var5;
                    var5 = {};
                    var6 = _closure2_slot6;
                    var5.paddingHorizontal = var6;
                    var0[1] = var5;
                    var1 = _closure2_slot1;
                    var0[2] = var1;
                    var2.style = var0;
                    var0 = arg0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var0 = function(arg0) { // Original name: GuildTag, environment: var5
        _fun59550: for (var _fun59550_ip = 0;;) switch (_fun59550_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.user;
                var6 = var0.themeType;
                var9 = var0.style;
                var10 = var0.showToastOnPress;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun59550_ip = 33;
                    continue _fun59550
                }
            case 31:
                var10 = false;
            case 33:
                var0 = _closure1_slot15;
                var7 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 28;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var2 = var5.getUserPrimaryGuild;
                var3 = null;
                var8 = var3 == var14;
                var0 = undefined;
                if (var8) {
                    _fun59550_ip = 87;
                    continue _fun59550
                }
            case 81:
                var0 = var14.primaryGuild;
            case 87:
                var2 = var2.bind(var5)(var0);
                var0 = var2.tag;
                var2 = var2.guildId;
                var5 = _closure1_slot18;
                var5 = var5.bind(var4)(var6);
                var13 = var5.badgeSize;
                var6 = var5.guildTagBadgeSize;
                var11 = var5.guildTagHorizontalPadding;
                var5 = var5.guildTagTextVariant;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 26;
                var8 = var15[var8];
                var12 = var12.bind(var4)(var8);
                var8 = var12.isAndroid;
                var8 = var8.bind(var12)();
                var12 = 4;
                var15 = var12;
                if (!var8) {
                    _fun59550_ip = 177;
                    continue _fun59550
                }
            case 174:
                var15 = 2;
            case 177:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 14;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var8 = var8.TextStyleSheet;
                var8 = var8[var5];
                var8 = var8.fontSize;
                var8 = var8 + var15;
                var15 = var3 == var0;
                var0 = null;
                if (var15) {
                    _fun59550_ip = 351;
                    continue _fun59550
                }
            case 229:
                var2 = var3 == var2;
                var0 = null;
                if (var2) {
                    _fun59550_ip = 351;
                    continue _fun59550
                }
            case 238:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 29;
                var1 = var15[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var14 = var14.id;
                var1.userId = var14;
                var10 = !var10;
                var1.disabledTooltip = var10;
                var10 = var7.guildTag;
                var7 = new Array(3);
                var7[0] = var10;
                var10 = {};
                var12 = var13 + var12;
                var10.minHeight = var12;
                var10.paddingHorizontal = var11;
                var7[1] = var10;
                var7[2] = var9;
                var1.containerStyles = var7;
                var7 = {};
                var7.lineHeight = var8;
                var1.textStyle = var7;
                var1.badgeSize = var6;
                var1.textVariant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 351:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var9 = var8[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.Image;
    var _closure1_slot4 = var9;
    var9 = var6.View;
    var _closure1_slot5 = var9;
    var6 = var6.useWindowDimensions;
    var _closure1_slot6 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.getBadgeAssetFromCDN;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.DIVIDER_DOT;
    var _closure1_slot8 = var9;
    var9 = var6.PROFILE_SIDE_PADDING;
    var _closure1_slot9 = var9;
    var9 = var6.UserProfileThemeTypes;
    var _closure1_slot10 = var9;
    var16 = 4;
    var6 = var8[var16];
    var6 = var7.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot11 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var11 = var6.GuildTagBadgeSize;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.jsx;
    var _closure1_slot12 = var10;
    var10 = var6.jsxs;
    var _closure1_slot13 = var10;
    var6 = var6.Fragment;
    var _closure1_slot14 = var6;
    var6 = 7;
    var6 = var8[var6];
    var12 = var7.bind(var0)(var6);
    var10 = var12.createStyles;
    var6 = {};
    var13 = {};
    var14 = 'column';
    var13.flexDirection = var14;
    var6.container = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'columnGap': 4
    };
    var6.displayName = var13;
    var14 = 8;
    var13 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 8
    };
    var6.details = var13;
    var13 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'alignContent': 'center',
        'paddingVertical': 2
    };
    var6.detailsText = var13;
    var13 = {};
    var13.marginLeft = var16;
    var6.botTag = var13;
    var13 = {
        'alignSelf': 'center',
        'borderRadius': null,
        'columnGap': 4
    };
    var16 = var8[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var13.borderRadius = var16;
    var6.guildTag = var13;
    var13 = {};
    var16 = 'contain';
    var13.resizeMode = var16;
    var6.badge = var13;
    var13 = {
        'alignSelf': 'center',
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'rowGap': 8
    };
    var6.badges = var13;
    var13 = {
        'borderRadius': null,
        'paddingVertical': 2,
        'justifyContent': 'flex-start',
        'flexDirection': 'row',
        'marginRight': 'auto',
        'columnGap': 4
    };
    var14 = var8[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13.borderRadius = var14;
    var6.badgeRow = var13;
    var6 = var10.bind(var12)(var6);
    var _closure1_slot15 = var6;
    var6 = {
        'headingVariant': 'heading-xl/bold',
        'textVariant': 'text-md/normal',
        'badgeSize': 20,
        'badgeRowHorizontalPadding': 7,
        'guildTagBadgeSize': null,
        'guildTagTextVariant': 'text-sm/medium',
        'guildTagHorizontalPadding': 8
    };
    var10 = var11.SIZE_16;
    var6.guildTagBadgeSize = var10;
    var _closure1_slot16 = var6;
    var6 = {};
    var10 = var9.PREVIEW;
    var9 = {
        'headingVariant': 'heading-lg/bold',
        'textVariant': 'text-sm/normal',
        'badgeSize': 16,
        'badgeRowHorizontalPadding': 6,
        'guildTagBadgeSize': null,
        'guildTagTextVariant': 'text-xs/medium',
        'guildTagHorizontalPadding': 6
    };
    var11 = var11.SIZE_12;
    var9.guildTagBadgeSize = var11;
    var6[var10] = var9;
    var _closure1_slot17 = var6;
    var6 = function(arg0) { // Original name: getStyleConfig, environment: var5
        _fun59551: for (var _fun59551_ip = 0;;) switch (_fun59551_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                if (!var2) {
                    _fun59551_ip = 19;
                    continue _fun59551
                }
            case 8:
                var1 = _closure1_slot17;
                var0 = var1[var2];
            case 19:
                var1 = null;
                if (!(var1 == var0)) {
                    _fun59551_ip = 32;
                    continue _fun59551
                }
            case 25:
                var0 = _closure1_slot16;
            case 32:
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var6 = 31;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/native/UserProfilePrimaryInfo.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function(arg0) { // Original name: UserProfilePrimaryInfo, environment: var5
        _fun59552: for (var _fun59552_ip = 0;;) switch (_fun59552_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.user;
                var24 = var1.guildId;
                var26 = var1.displayName;
                var21 = var1.pronouns;
                var5 = var1.style;
                var15 = var1.badges;
                var0 = var1.badgeContainerBackground;
                var13 = var1.themeType;
                var22 = var1.onPressDisplayName;
                var11 = var1.displayNameAccessibilityHint;
                var20 = var1.onPressUserTag;
                var19 = var1.userTagAccessibilityHint;
                var18 = var1.onPressPronouns;
                var17 = var1.pronounsAccessibilityHint;
                var10 = var1.showChevron;
                var12 = var1.showBadgeToastOnPress;
                var7 = var1.pendingDisplayNameStyles;
                var1 = _closure1_slot15;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var14 = {};
                var14.backgroundColor = var0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 30;
                var4 = var2[var0];
                var6 = var1.bind(var3)(var4);
                var4 = var6.useName;
                var25 = var4.bind(var6)(var16);
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useUserTag;
                var23 = var0.bind(var1)(var16);
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var8.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot19;
                var4 = {};
                var4.user = var16;
                var4.guildId = var24;
                var27 = '';
                var24 = var25;
                if (!(var27 !== var26)) {
                    _fun59552_ip = 243;
                    continue _fun59552
                }
            case 231:
                var27 = null;
                if (!(var27 != var26)) {
                    _fun59552_ip = 240;
                    continue _fun59552
                }
            case 237:
                var25 = var26;
            case 240:
                var24 = var25;
            case 243:
                var4.name = var24;
                var4.themeType = var13;
                var4.onPress = var22;
                var4.accessibilityHint = var11;
                var4.showChevron = var10;
                var4.pendingDisplayNameStyles = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.details;
                var5.style = var8;
                var11 = _closure1_slot12;
                var10 = _closure1_slot20;
                var8 = {};
                var24 = var16.isProvisional;
                var22 = null;
                if (var24) {
                    _fun59552_ip = 329;
                    continue _fun59552
                }
            case 326:
                var22 = var23;
            case 329:
                var8.userTag = var22;
                var8.pronouns = var21;
                var8.themeType = var13;
                var8.onPressUserTag = var20;
                var8.userTagAccessibilityHint = var19;
                var8.onPressPronouns = var18;
                var8.pronounsAccessibilityHint = var17;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var17 = _closure1_slot12;
                var11 = _closure1_slot23;
                var10 = {};
                var10.user = var16;
                var10.themeType = var13;
                var10.style = var14;
                var10.showToastOnPress = var12;
                var10 = var17.bind(var3)(var11, var10);
                var8[1] = var10;
                var11 = _closure1_slot12;
                var10 = _closure1_slot22;
                var9 = {};
                var16 = var16.id;
                var9.userId = var16;
                var9.badges = var15;
                var9.style = var14;
                var9.themeType = var13;
                var9.showToastOnPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var5;
    var2.DisplayName = var4;
    var2.UserTagAndPronouns = var3;
    var2.ProfileBadgeRows = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6937, 6920, 660, 6601, 33, 1297, 671, 6880, 6881, 5729, 4865, 7329, 3900, 7331, 5234, 3879, 7334, 1234, 7336, 3107, 6925, 795, 5239, 5193, 478, 7337, 6771, 7338, 3195, 2]);