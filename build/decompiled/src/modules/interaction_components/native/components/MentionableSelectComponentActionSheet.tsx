// modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 9;
    var10 = var5[var12];
    var10 = var13.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var10;
    var10 = var11.PRIMARY_MEDIUM;
    var8.fontFamily = var10;
    var10 = 12;
    var8.fontSize = var10;
    var14 = 16;
    var8.lineHeight = var14;
    var3.name = var8;
    var8 = {};
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var8.color = var12;
    var11 = var11.PRIMARY_MEDIUM;
    var8.fontFamily = var11;
    var8.fontSize = var10;
    var3.discriminator = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexGrow': 1,
        'alignItems': 'center',
        'justifyContent': 'flex-end',
        'marginRight': 12
    };
    var3.roleCountContainer = var8;
    var8 = {};
    var8.paddingRight = var9;
    var3.roleCountText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79392: for (var _fun79392_ip = 0;;) switch (_fun79392_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.selectionActionComponent;
                var _closure2_slot0 = var12;
                var11 = var0.labelComponent;
                var4 = var0.channelId;
                var _closure2_slot1 = var4;
                var2 = var0.guildId;
                var _closure2_slot2 = var2;
                var10 = var0.containerId;
                var8 = var0.onSubmit;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                var _closure2_slot3 = var1;
                var6 = _closure1_slot6;
                var1 = var6.getGuild;
                var18 = var1.bind(var6)(var2);
                var _closure2_slot4 = var18;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var7 = var6.bind(var3)(var1);
                var1 = null;
                var1 = var1 == var18;
                var6 = undefined;
                if (var1) {
                    _fun79392_ip = 126;
                    continue _fun79392
                }
            case 121:
                var6 = var18.id;
            case 126:
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 11;
                var1 = var15[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.MIN_REREQUEST_TIME;
                var1 = var7.bind(var3)(var6, var1);
                _closure2_slot5 = var1;
                var17 = _closure1_slot3;
                var7 = var17.useCallback;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var4;
                var1 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.queryMentionables;
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var9 = var7.bind(var17)(var1, var6);
                var1 = _closure1_slot1;
                var6 = 12;
                var6 = var15[var6];
                var7 = var1.bind(var3)(var6);
                var6 = {};
                var6.selectActionComponent = var12;
                var6.containerId = var10;
                var6.guildId = var2;
                var6.queryOptions = var9;
                var6.onSubmit = var8;
                var6 = var7.bind(var3)(var6);
                var10 = var6.options;
                var9 = var6.selectedOptions;
                var8 = var6.isSelected;
                var14 = var6.onPressOptionItem;
                var7 = var6.submitSelection;
                var6 = var6.setQuery;
                var16 = var17.useCallback;
                var13 = new Array(2);
                var13[0] = var18;
                var13[1] = var2;
                var2 = function(arg0) { // Environment: var5
                    _fun79394: for (var _fun79394_ip = 0;;) switch (_fun79394_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 13;
                            var1 = var1[var6];
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.SelectOptionType;
                            var1 = var1.USER;
                            if (!(var2 !== var1)) {
                                _fun79394_ip = 397;
                                continue _fun79394
                            }
                        case 52:
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.SelectOptionType;
                            var1 = var1.ROLE;
                            if (!(var2 !== var1)) {
                                _fun79394_ip = 92;
                                continue _fun79394
                            }
                        case 90:
                            return var4;
                        case 92:
                            var3 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 != var3;
                            var7 = undefined;
                            if (!var3) {
                                _fun79394_ip = 140;
                                continue _fun79394
                            }
                        case 110:
                            var9 = _closure1_slot5;
                            var8 = var9.getRole;
                            var3 = _closure2_slot4;
                            var6 = var3.id;
                            var3 = var0.value;
                            var7 = var8.bind(var9)(var6, var3);
                        case 140:
                            var3 = _closure2_slot4;
                            if (!(var1 != var3)) {
                                _fun79394_ip = 395;
                                continue _fun79394
                            }
                        case 151:
                            if (!(var1 != var7)) {
                                _fun79394_ip = 395;
                                continue _fun79394
                            }
                        case 158:
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var6 = 15;
                            var3 = var3[var6];
                            var8 = var8.bind(var4)(var3);
                            var3 = var8.canGuildUseRoleIcons;
                            var2 = _closure2_slot4;
                            var2 = var3.bind(var8)(var2, var7);
                            if (!var2) {
                                _fun79394_ip = 269;
                                continue _fun79394
                            }
                        case 197:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getRoleIconData;
                            var2 = var2.bind(var3)(var7);
                            if (!(var1 == var2)) {
                                _fun79394_ip = 231;
                                continue _fun79394
                            }
                        case 229:
                            var2 = {};
                        case 231:
                            var3 = var2.customIconSrc;
                            var8 = var2.unicodeEmoji;
                            var2 = var1 != var3;
                            var9 = undefined;
                            if (!var2) {
                                _fun79394_ip = 261;
                                continue _fun79394
                            }
                        case 252:
                            var2 = {};
                            var2.uri = var3;
                            var9 = var2;
                        case 261:
                            if (!(var1 == var9)) {
                                _fun79394_ip = 336;
                                continue _fun79394
                            }
                        case 265:
                            if (!(var1 == var8)) {
                                _fun79394_ip = 336;
                                continue _fun79394
                            }
                        case 269:
                            var6 = _closure1_slot10;
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 17;
                            var2 = var10[var2];
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.ShieldUserIcon;
                            var2 = {};
                            var11 = var1 == var7;
                            var10 = undefined;
                            if (var11) {
                                _fun79394_ip = 316;
                                continue _fun79394
                            }
                        case 310:
                            var10 = var7.colorString;
                        case 316:
                            if (!(var1 == var10)) {
                                _fun79394_ip = 324;
                                continue _fun79394
                            }
                        case 320:
                            var10 = _closure1_slot9;
                        case 324:
                            var2.color = var10;
                            var2 = var6.bind(var4)(var3, var2);
                            return var2;
                        case 336:
                            var6 = _closure1_slot10;
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 16;
                            var2 = var10[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var2.source = var9;
                            var2.unicodeEmoji = var8;
                            var8 = 24;
                            var2.size = var8;
                            var7 = var7.name;
                            var2.name = var7;
                            var2 = var6.bind(var4)(var3, var2);
                            return var2;
                        case 395:
                            return var1;
                        case 397:
                            var2 = _closure1_slot8;
                            var1 = var2.getUser;
                            var0 = var0.value;
                            var10 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var10)) {
                                _fun79394_ip = 587;
                                continue _fun79394
                            }
                        case 426:
                            var3 = _closure1_slot7;
                            var2 = var3.isMobileOnline;
                            var1 = var10.id;
                            var9 = var2.bind(var3)(var1);
                            var2 = var3.isVROnline;
                            var1 = var10.id;
                            var8 = var2.bind(var3)(var1);
                            var2 = var3.getStatus;
                            var1 = var10.id;
                            var6 = var2.bind(var3)(var1);
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var7 = 14;
                            var1 = var1[var7];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var1.user = var10;
                            var1.isMobileOnline = var9;
                            var1.isVROnline = var8;
                            var1.status = var6;
                            var6 = _closure2_slot2;
                            var9 = var0 != var6;
                            var6 = undefined;
                            if (!var9) {
                                _fun79394_ip = 542;
                                continue _fun79394
                            }
                        case 538:
                            var6 = _closure2_slot2;
                        case 542:
                            var1.guildId = var6;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var4)(var5);
                            var5 = var5.AvatarSizes;
                            var5 = var5.XSMALL;
                            var1.size = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 587:
                            return var0;
                    }
                };
                var13 = var16.bind(var17)(var2, var13);
                var2 = _closure1_slot10;
                var0 = 18;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPressOptionItem = var14;
                var0.renderIcon = var13;
                var13 = function arg0() {
                    _fun79395: for (var _fun79395_ip = 0;;) switch (_fun79395_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.SelectOptionType;
                            var2 = var2.USER;
                            if (!(var4 !== var2)) {
                                _fun79395_ip = 51;
                                continue _fun79395
                            }
                        case 49:
                            return var3;
                        case 51:
                            var4 = _closure1_slot8;
                            var2 = var4.getUser;
                            var1 = var1.value;
                            var4 = var2.bind(var4)(var1);
                            var2 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 19;
                            var0 = var5[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0.user = var4;
                            var4 = _closure2_slot3;
                            var5 = var4.name;
                            var0.usernameStyle = var5;
                            var5 = var4.discriminator;
                            var0.discriminatorStyle = var5;
                            var4 = var4.name;
                            var0.nicknameStyle = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.renderDescription = var13;
                var13 = function arg0() {
                    _fun79396: for (var _fun79396_ip = 0;;) switch (_fun79396_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.SelectOptionType;
                            var1 = var1.ROLE;
                            if (!(var3 !== var1)) {
                                _fun79396_ip = 51;
                                continue _fun79396
                            }
                        case 49:
                            return var0;
                        case 51:
                            var3 = _closure2_slot4;
                            var1 = null;
                            var6 = var1 != var3;
                            var3 = undefined;
                            if (!var6) {
                                _fun79396_ip = 99;
                                continue _fun79396
                            }
                        case 69:
                            var8 = _closure1_slot5;
                            var7 = var8.getRole;
                            var6 = _closure2_slot4;
                            var6 = var6.id;
                            var2 = var2.value;
                            var3 = var7.bind(var8)(var6, var2);
                        case 99:
                            var2 = var1 == var3;
                            var9 = null;
                            if (var2) {
                                _fun79396_ip = 137;
                                continue _fun79396
                            }
                        case 108:
                            var2 = _closure2_slot5;
                            var6 = var1 == var2;
                            var2 = undefined;
                            if (var6) {
                                _fun79396_ip = 134;
                                continue _fun79396
                            }
                        case 121:
                            var6 = _closure2_slot5;
                            var3 = var3.id;
                            var2 = var6[var3];
                        case 134:
                            var9 = var2;
                        case 137:
                            if (!(var1 != var9)) {
                                _fun79396_ip = 291;
                                continue _fun79396
                            }
                        case 144:
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var10 = _closure2_slot3;
                            var5 = var10.roleCountContainer;
                            var1.style = var5;
                            var7 = _closure1_slot10;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 20;
                            var4 = var8[var4];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.Text;
                            var4 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'interactive-text-default'
                            };
                            var10 = var10.roleCountText;
                            var4.style = var10;
                            var4.children = var9;
                            var5 = var7.bind(var0)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = 21;
                            var5 = var8[var5];
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.UserIcon;
                            var5 = {};
                            var8 = 'xs';
                            var5.size = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var1 = var3.bind(var0)(var2, var1);
                            return var1;
                        case 291:
                            return var0;
                    }
                };
                var0.renderOptionSuffix = var13;
                var0.selectionActionComponent = var12;
                var0.labelComponent = var11;
                var0.options = var10;
                var10 = var9.length;
                var0.selectedCount = var10;
                var0.selectedOptions = var9;
                var0.isSelected = var8;
                var0.submitSelection = var7;
                var0.onQueryChange = var6;
                var5 = function arg0() {
                    _fun79397: for (var _fun79397_ip = 0;;) switch (_fun79397_ip) {
                        case 0:
                            var8 = arg0;
                            var2 = var8.type;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 13;
                            var0 = var0[var4];
                            var5 = undefined;
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.SelectOptionType;
                            var0 = var0.USER;
                            if (!(var2 !== var0)) {
                                _fun79397_ip = 161;
                                continue _fun79397
                            }
                        case 49:
                            var2 = var8.type;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.SelectOptionType;
                            var0 = var0.ROLE;
                            if (!(var2 !== var0)) {
                                _fun79397_ip = 89;
                                continue _fun79397
                            }
                        case 87:
                            return var5;
                        case 89:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 22;
                            var3 = var6[var0];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var2.bind(var5)(var0);
                            var0 = var0.t;
                            var2 = var0.F6ejkk;
                            var0 = {};
                            var6 = var8.label;
                            var0.roleName = var6;
                            var0 = var3.bind(var4)(var2, var0);
                            return var0;
                        case 161:
                            var3 = _closure1_slot8;
                            var2 = var3.getUser;
                            var0 = var8.value;
                            var6 = var2.bind(var3)(var0);
                            var7 = null;
                            if (!(var7 != var6)) {
                                _fun79397_ip = 196;
                                continue _fun79397
                            }
                        case 187:
                            var0 = var6.bot;
                            if (var0) {
                                _fun79397_ip = 287;
                                continue _fun79397
                            }
                        case 196:
                            var2 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 22;
                            var3 = var9[var0];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var9[var0];
                            var0 = var2.bind(var5)(var0);
                            var0 = var0.t;
                            var2 = var0.AydQ7a;
                            var0 = {};
                            var9 = var8.label;
                            var0.username = var9;
                            var10 = var7 == var6;
                            var9 = undefined;
                            if (var10) {
                                _fun79397_ip = 274;
                                continue _fun79397
                            }
                        case 268:
                            var9 = var6.discriminator;
                        case 274:
                            var0.discriminator = var9;
                            var0 = var3.bind(var4)(var2, var0);
                            _fun79397_ip = 376;
                            continue _fun79397;
                        case 287:
                            var2 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 22;
                            var3 = var9[var1];
                            var3 = var2.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var9[var1];
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.t;
                            var2 = var1["zogo/8"];
                            var1 = {};
                            var8 = var8.label;
                            var1.username = var8;
                            var7 = var7 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun79397_ip = 365;
                                continue _fun79397
                            }
                        case 359:
                            var5 = var6.discriminator;
                        case 365:
                            var1.discriminator = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 376:
                            return var0;
                    }
                };
                var0.itemAccessibilityLabel = var5;
                var0.channelId = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1674, 1410, 3610, 1621, 660, 33, 1297, 671, 9919, 6853, 10114, 3977, 5456, 6755, 6756, 8161, 10112, 8221, 3941, 10115, 1234, 2]);