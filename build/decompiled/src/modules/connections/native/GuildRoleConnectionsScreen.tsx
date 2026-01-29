// modules/connections/native/GuildRoleConnectionsScreen.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.Pressable;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var3 = var3.HelpdeskArticles;
    var _closure1_slot13 = var3;
    var7 = 8;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {};
    var10 = 10;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var3.backgroundColor = var13;
    var3.flex = var11;
    var6.container = var3;
    var3 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'padding': 16
    };
    var6.content = var3;
    var3 = {};
    var11 = 24;
    var3.marginTop = var11;
    var6.infoText = var3;
    var3 = {
        'marginTop': 24,
        'flexDirection': 'column',
        'width': '100%'
    };
    var6.verifiedRoles = var3;
    var3 = {
        'flexDirection': 'row',
        'borderColor': null,
        'borderWidth': 2,
        'borderRadius': null,
        'paddingHorizontal': 16,
        'paddingVertical': 20,
        'marginBottom': 16,
        'width': '100%',
        'alignItems': 'center',
        'position': 'relative'
    };
    var11 = 'row';
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var3.borderColor = var13;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var3.borderRadius = var13;
    var6.verifiedRole = var3;
    var3 = {};
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var3.borderColor = var13;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var3.backgroundColor = var13;
    var6.verifiedRoleHasRole = var3;
    var3 = {};
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_MUTED;
    var3.borderColor = var13;
    var6.verifiedRolePressed = var3;
    var3 = {};
    var13 = 12;
    var3.marginRight = var13;
    var6.verifiedRoleIcon = var3;
    var3 = {
        'width': 20,
        'height': 20,
        'borderRadius': 10,
        'backgroundColor': null,
        'position': 'absolute',
        'right': 4294967288,
        'top': 4294967288
    };
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var3.backgroundColor = var10;
    var6.roleCheckmark = var3;
    var3 = 32;
    var10 = {
        'flex': 1,
        'overflow': 'hidden',
        'marginRight': 32
    };
    var6.verifiedRoleName = var10;
    var10 = {};
    var10.flexDirection = var11;
    var6.platformIconContainer = var10;
    var10 = {};
    var11 = -6;
    var10.marginRight = var11;
    var6.cutout = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot16 = var6;
    var6 = {};
    var8 = 11;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CutoutDirection;
    var8 = var8.RIGHT;
    var6.direction = var8;
    var6.radius = var7;
    var _closure1_slot17 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/GuildRoleConnectionsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildRoleConnectionsScreen, environment: var1
        _fun77702: for (var _fun77702_ip = 0;;) switch (_fun77702_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var1 = var1.onCloseModal;
                var _closure2_slot1 = var1;
                var1 = _closure1_slot16;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var _closure2_slot2 = var11;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var _closure2_slot3 = var1;
                var2 = _closure1_slot0;
                var1 = 13;
                var3 = var5[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var10
                    var2 = _closure1_slot11;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var7.bind(var8)(var6, var3);
                var6 = var5[var1];
                var9 = var2.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var10
                    var1 = _closure1_slot9;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure2_slot4 = var6;
                var1 = var5[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var3 = _closure1_slot10;
                    var2 = var3.getMember;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var _closure2_slot5 = var1;
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var2 = new Array(0);
                var7 = var5.bind(var6)(var2);
                var5 = _closure1_slot3;
                var2 = 2;
                var7 = var5.bind(var4)(var7, var2);
                var2 = 0;
                var2 = var7[var2];
                var _closure2_slot6 = var2;
                var5 = 1;
                var5 = var7[var5];
                var _closure2_slot7 = var5;
                var7 = var6.useEffect;
                var5 = new Array(2);
                var5[0] = var0;
                var5[1] = var2;
                var2 = function() { // Environment: var10
                    _fun77706: for (var _fun77706_ip = 0;;) switch (_fun77706_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var1 = var0.length;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun77706_ip = 132;
                                continue _fun77706
                            }
                        case 18:
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 14;
                            var0 = var8[var0];
                            var7 = undefined;
                            var3 = var1.bind(var7)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot12;
                            var1 = var0.PASSPORT_ENTRY_VIEWED;
                            var0 = {};
                            var10 = _closure2_slot6;
                            var9 = var10.map;
                            var6 = function(arg0) { // Environment: var6
                                var0 = arg0;
                                var0 = var0.role_id;
                                return var0;
                            };
                            var6 = var9.bind(var10)(var6);
                            var0.role_ids = var6;
                            var6 = _closure1_slot0;
                            var5 = 15;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.collectGuildAnalyticsMetadata;
                            var4 = _closure2_slot0;
                            var11 = var5.bind(var6)(var4);
                            var12 = var0;
                            var4 = copyDataProperties(var12, var11);
                            var0 = var2.bind(var3)(var1, var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var6)(var2, var5);
                var5 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getGuildRoleConnectionsConfigurations;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var2);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun77702_ip = 603;
                    continue _fun77702
                }
            case 318:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.tags;
                    var1 = var0.guild_connections;
                    var0 = null;
                    var0 = var0 === var1;
                    return var0;
                };
                var12 = var2.bind(var3)(var1);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var11.container;
                var1.style = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var11.content;
                var5.contentContainerStyle = var8;
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 24;
                var8 = var20[var8];
                var8 = var14.bind(var4)(var8);
                var9 = var8.TextWithIOSLinkWorkaround;
                var8 = {
                    'style': null,
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var11.infoText;
                var8.style = var13;
                var13 = 25;
                var15 = var20[var13];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var20[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.t;
                var14 = var13["Y+TsEV"];
                var13 = {};
                var19 = _closure1_slot1;
                var18 = 26;
                var18 = var20[var18];
                var19 = var19.bind(var4)(var18);
                var18 = var19.getArticleURL;
                var17 = _closure1_slot13;
                var17 = var17.CONNECTION_DETAILS;
                var17 = var18.bind(var19)(var17);
                var13.helpdeskArticleUrl = var17;
                var13 = var15.bind(var16)(var14, var13);
                var8.children = var13;
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var11 = var11.verifiedRoles;
                var9.style = var11;
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    _fun77711: for (var _fun77711_ip = 0;;) switch (_fun77711_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var1 = _closure2_slot5;
                            var3 = var1.roles;
                            var2 = var3.includes;
                            var1 = var0.id;
                            var5 = var2.bind(var3)(var1);
                            var _closure3_slot1 = var5;
                            var2 = var0.id;
                            var1 = function(arg0) { // Original name: getIconsForConnectionRole, environment: var7
                                _fun77712: for (var _fun77712_ip = 0;;) switch (_fun77712_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var0 = new Array(0);
                                        var _closure4_slot1 = var0;
                                        var4 = _closure2_slot6;
                                        var3 = var4.find;
                                        var2 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.role_id;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var3 = var3.bind(var4)(var2);
                                        var _closure4_slot2 = var3;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun77712_ip = 151;
                                            continue _fun77712
                                        }
                                    case 51:
                                        var2 = global;
                                        var4 = var2.Set;
                                        var5 = var4.prototype;
                                        var5 = Object.create(var5, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var8 = var5;
                                        var4 = new var8[var4](var7);
                                        var4 = var4 instanceof Object ? var4 : var5;
                                        var _closure4_slot3 = var4;
                                        var5 = var3.rules;
                                        var3 = var5.flat;
                                        var6 = var3.bind(var5)();
                                        var5 = var6.forEach;
                                        var3 = function(arg0) { // Environment: var1
                                            _fun77714: for (var _fun77714_ip = 0;;) switch (_fun77714_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.application_id;
                                                    var0 = undefined;
                                                    if (!(var0 !== var2)) {
                                                        _fun77714_ip = 40;
                                                        continue _fun77714
                                                    }
                                                case 15:
                                                    var4 = _closure4_slot3;
                                                    var3 = var4.add;
                                                    var2 = var1.application_id;
                                                    var2 = var3.bind(var4)(var2);
                                                    _fun77714_ip = 63;
                                                    continue _fun77714;
                                                case 40:
                                                    var3 = _closure4_slot3;
                                                    var2 = var3.add;
                                                    var1 = var1.connection_type;
                                                    var1 = var2.bind(var3)(var1);
                                                case 63:
                                                    return var0;
                                            }
                                        };
                                        var3 = var5.bind(var6)(var3);
                                        var3 = var2.Array;
                                        var2 = var3.from;
                                        var3 = var2.bind(var3)(var4);
                                        var2 = var3.forEach;
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            _fun77715: for (var _fun77715_ip = 0;;) switch (_fun77715_ip) {
                                                case 0:
                                                    var6 = arg0;
                                                    var0 = _closure4_slot3;
                                                    var2 = var0.size;
                                                    var0 = 1;
                                                    var2 = var2 - var0;
                                                    var5 = null;
                                                    var0 = arg1;
                                                    var7 = null;
                                                    if (!(var0 !== var2)) {
                                                        _fun77715_ip = 40;
                                                        continue _fun77715
                                                    }
                                                case 33:
                                                    var7 = _closure1_slot17;
                                                case 40:
                                                    var0 = global;
                                                    var3 = var0.isNaN;
                                                    var2 = var0.parseInt;
                                                    var0 = undefined;
                                                    var2 = var2.bind(var0)(var6);
                                                    var2 = var3.bind(var0)(var2);
                                                    if (var2) {
                                                        _fun77715_ip = 253;
                                                        continue _fun77715
                                                    }
                                                case 72:
                                                    var2 = _closure4_slot2;
                                                    var2 = var2.applications;
                                                    var2 = var2[var6];
                                                    var3 = var5 == var2;
                                                    var12 = undefined;
                                                    if (var3) {
                                                        _fun77715_ip = 101;
                                                        continue _fun77715
                                                    }
                                                case 95:
                                                    var12 = var2.bot;
                                                case 101:
                                                    if (!(var0 !== var12)) {
                                                        _fun77715_ip = 486;
                                                        continue _fun77715
                                                    }
                                                case 108:
                                                    var4 = _closure4_slot1;
                                                    var3 = var4.push;
                                                    var9 = _closure1_slot14;
                                                    var8 = _closure1_slot1;
                                                    var14 = _closure1_slot2;
                                                    var11 = 11;
                                                    var2 = var14[var11];
                                                    var8 = var8.bind(var0)(var2);
                                                    var2 = {};
                                                    var13 = _closure1_slot0;
                                                    var11 = var14[var11];
                                                    var11 = var13.bind(var0)(var11);
                                                    var11 = var11.AvatarSizes;
                                                    var11 = var11.XSMALL;
                                                    var2.size = var11;
                                                    var10 = _closure1_slot8;
                                                    var11 = var10.prototype;
                                                    var11 = Object.create(var11, {
                                                        constructor: {
                                                            value: var10
                                                        }
                                                    });
                                                    var18 = var11;
                                                    var17 = var12;
                                                    var10 = new var18[var10](var17, var16);
                                                    var10 = var10 instanceof Object ? var10 : var11;
                                                    var2.user = var10;
                                                    var11 = _closure2_slot0;
                                                    var2.guildId = var11;
                                                    var10 = _closure2_slot2;
                                                    var10 = var10.cutout;
                                                    var2.style = var10;
                                                    var2.cutout = var7;
                                                    var2 = var9.bind(var0)(var8, var2, var6);
                                                    var2 = var3.bind(var4)(var2);
                                                    _fun77715_ip = 486;
                                                    continue _fun77715;
                                                case 253:
                                                    var3 = _closure1_slot1;
                                                    var10 = _closure1_slot2;
                                                    var2 = 21;
                                                    var2 = var10[var2];
                                                    var4 = var3.bind(var0)(var2);
                                                    var2 = var4.get;
                                                    var9 = var2.bind(var4)(var6);
                                                    var2 = 22;
                                                    var2 = var10[var2];
                                                    var4 = var3.bind(var0)(var2);
                                                    var3 = var4.makeSource;
                                                    var8 = _closure1_slot0;
                                                    var2 = 23;
                                                    var2 = var10[var2];
                                                    var12 = var8.bind(var0)(var2);
                                                    var10 = var12.isThemeDark;
                                                    var2 = _closure2_slot3;
                                                    var2 = var10.bind(var12)(var2);
                                                    var10 = var5 == var9;
                                                    if (var2) {
                                                        _fun77715_ip = 363;
                                                        continue _fun77715
                                                    }
                                                case 345:
                                                    var2 = undefined;
                                                    if (var10) {
                                                        _fun77715_ip = 361;
                                                        continue _fun77715
                                                    }
                                                case 350:
                                                    var5 = var9.icon;
                                                    var2 = var5.lightPNG;
                                                case 361:
                                                    _fun77715_ip = 382;
                                                    continue _fun77715;
                                                case 363:
                                                    var5 = undefined;
                                                    if (var10) {
                                                        _fun77715_ip = 379;
                                                        continue _fun77715
                                                    }
                                                case 368:
                                                    var9 = var9.icon;
                                                    var5 = var9.darkPNG;
                                                case 379:
                                                    var2 = var5;
                                                case 382:
                                                    var9 = var3.bind(var4)(var2);
                                                    var3 = _closure4_slot1;
                                                    var2 = var3.push;
                                                    var5 = _closure1_slot14;
                                                    var4 = _closure1_slot1;
                                                    var12 = _closure1_slot2;
                                                    var10 = 11;
                                                    var1 = var12[var10];
                                                    var4 = var4.bind(var0)(var1);
                                                    var1 = {};
                                                    var11 = _closure1_slot0;
                                                    var10 = var12[var10];
                                                    var10 = var11.bind(var0)(var10);
                                                    var10 = var10.AvatarSizes;
                                                    var10 = var10.XSMALL;
                                                    var1.size = var10;
                                                    var1.source = var9;
                                                    var8 = _closure2_slot2;
                                                    var8 = var8.cutout;
                                                    var1.style = var8;
                                                    var1.cutout = var7;
                                                    var1 = var5.bind(var0)(var4, var1, var6);
                                                    var1 = var2.bind(var3)(var1);
                                                case 486:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    case 151:
                                        return var0;
                                }
                            };
                            var4 = undefined;
                            var9 = var1.bind(var4)(var2);
                            var3 = _closure1_slot15;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var8 = 'button';
                            var1.accessibilityRole = var8;
                            var8 = function(arg0) { // Original name: style, environment: var7
                                _fun77716: for (var _fun77716_ip = 0;;) switch (_fun77716_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.pressed;
                                        var0 = _closure2_slot2;
                                        var1 = var0.verifiedRole;
                                        var0 = new Array(3);
                                        var0[0] = var1;
                                        var5 = _closure3_slot1;
                                        var4 = null;
                                        if (!var5) {
                                            _fun77716_ip = 52;
                                            continue _fun77716
                                        }
                                    case 42:
                                        var5 = _closure2_slot2;
                                        var4 = var5.verifiedRoleHasRole;
                                    case 52:
                                        var0[1] = var4;
                                        var1 = null;
                                        if (!var3) {
                                            _fun77716_ip = 71;
                                            continue _fun77716
                                        }
                                    case 61:
                                        var2 = _closure2_slot2;
                                        var1 = var2.verifiedRolePressed;
                                    case 71:
                                        var0[2] = var1;
                                        return var0;
                                }
                            };
                            var1.style = var8;
                            var7 = function() { // Original name: onPress, environment: var7
                                _fun77717: for (var _fun77717_ip = 0;;) switch (_fun77717_ip) {
                                    case 0:
                                        var0 = _closure3_slot1;
                                        var3 = _closure3_slot0;
                                        var2 = _closure2_slot0;
                                        if (var0) {
                                            _fun77717_ip = 147;
                                            continue _fun77717
                                        }
                                    case 24:
                                        var5 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var4 = 17;
                                        var4 = var0[var4];
                                        var8 = undefined;
                                        var6 = var5.bind(var8)(var4);
                                        var5 = var6.openLazy;
                                        var4 = _closure1_slot0;
                                        var1 = 19;
                                        var1 = var0[var1];
                                        var4 = var4.bind(var8)(var1);
                                        var1 = 20;
                                        var1 = var0[var1];
                                        var0 = var0.paths;
                                        var4 = var4.bind(var8)(var1, var0);
                                        var8 = var3.id;
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var1 = var0.concat;
                                        var0 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
                                        var1 = var1.bind(var0)(var8);
                                        var0 = {};
                                        var0.role = var3;
                                        var0.guildId = var2;
                                        var7 = _closure2_slot1;
                                        var0.onCloseModal = var7;
                                        var0 = var5.bind(var6)(var4, var1, var0);
                                        _fun77717_ip = 164;
                                        continue _fun77717;
                                    case 147:
                                        var1 = function(arg0, arg1) { // Original name: renderLeaveRoleActionSheet, environment: var0
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var0 = arg1;
                                            var _closure5_slot1 = var0;
                                            var5 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var0 = 17;
                                            var4 = var2[var0];
                                            var0 = undefined;
                                            var5 = var5.bind(var0)(var4);
                                            var4 = var5.openLazy;
                                            var7 = _closure1_slot0;
                                            var3 = 19;
                                            var3 = var2[var3];
                                            var7 = var7.bind(var0)(var3);
                                            var3 = 18;
                                            var3 = var2[var3];
                                            var2 = var2.paths;
                                            var3 = var7.bind(var0)(var3, var2);
                                            var7 = var1.id;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var2 = var1.concat;
                                            var1 = 'LeaveConnectionRoleActionSheet-';
                                            var2 = var2.bind(var1)(var7);
                                            var1 = {};
                                            var6 = function() { // Original name: onLeaveRolePressed, environment: var6
                                                var2 = _closure1_slot1;
                                                var3 = _closure1_slot2;
                                                var0 = 17;
                                                var1 = var3[var0];
                                                var0 = undefined;
                                                var4 = var2.bind(var0)(var1);
                                                var1 = var4.hideActionSheet;
                                                var1 = var1.bind(var4)();
                                                var1 = 16;
                                                var1 = var3[var1];
                                                var4 = var2.bind(var0)(var1);
                                                var3 = var4.unassignGuildRoleConnection;
                                                var2 = _closure5_slot1;
                                                var1 = _closure5_slot0;
                                                var1 = var1.id;
                                                var1 = var3.bind(var4)(var2, var1);
                                                return var0;
                                            };
                                            var1.onLeaveRolePressed = var6;
                                            var1 = var4.bind(var5)(var3, var2, var1);
                                            return var0;
                                        };
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var3, var2);
                                    case 164:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onPress = var7;
                            var7 = null;
                            if (!var5) {
                                _fun77711_ip = 241;
                                continue _fun77711
                            }
                        case 111:
                            var10 = _closure1_slot14;
                            var8 = _closure1_slot5;
                            var5 = {};
                            var11 = _closure2_slot2;
                            var11 = var11.roleCheckmark;
                            var5.style = var11;
                            var15 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var13 = 27;
                            var11 = var16[var13];
                            var12 = var15.bind(var4)(var11);
                            var11 = {};
                            var13 = var16[var13];
                            var13 = var15.bind(var4)(var13);
                            var13 = var13.Sizes;
                            var13 = var13.SMALL_20;
                            var11.size = var13;
                            var13 = 28;
                            var13 = var16[var13];
                            var13 = var15.bind(var4)(var13);
                            var11.source = var13;
                            var13 = 10;
                            var13 = var16[var13];
                            var13 = var15.bind(var4)(var13);
                            var13 = var13.unsafe_rawColors;
                            var13 = var13.WHITE;
                            var11.color = var13;
                            var11 = var10.bind(var4)(var12, var11);
                            var5.children = var11;
                            var7 = var10.bind(var4)(var8, var5);
                        case 241:
                            var5 = new Array(4);
                            var5[0] = var7;
                            var8 = _closure1_slot14;
                            var7 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var10 = 29;
                            var10 = var11[var10];
                            var13 = var7.bind(var4)(var10);
                            var10 = {};
                            var12 = _closure2_slot2;
                            var15 = var12.verifiedRoleIcon;
                            var10.style = var15;
                            var14 = _closure2_slot0;
                            var10.guildId = var14;
                            var10.role = var0;
                            var14 = 24;
                            var10.size = var14;
                            var10 = var8.bind(var4)(var13, var10);
                            var5[1] = var10;
                            var10 = _closure1_slot0;
                            var6 = 30;
                            var6 = var11[var6];
                            var6 = var10.bind(var4)(var6);
                            var13 = var6.Text;
                            var6 = {
                                'variant': 'text-md/medium',
                                'color': 'mobile-text-heading-primary',
                                'lineClamp': 1
                            };
                            var14 = var12.verifiedRoleName;
                            var6.style = var14;
                            var14 = var0.name;
                            var6.children = var14;
                            var6 = var8.bind(var4)(var13, var6);
                            var5[2] = var6;
                            var6 = 31;
                            var6 = var11[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = {};
                            var12 = var12.platformIconContainer;
                            var6.style = var12;
                            var12 = new Array(0);
                            var6.users = var12;
                            var6.renderedUsers = var9;
                            var9 = 3;
                            var6.max = var9;
                            var9 = false;
                            var6.withNames = var9;
                            var9 = 11;
                            var9 = var11[var9];
                            var9 = var10.bind(var4)(var9);
                            var9 = var9.AvatarSizes;
                            var9 = var9.XSMALL;
                            var6.avatarSize = var9;
                            var9 = true;
                            var6.withPlusCount = var9;
                            var6 = var8.bind(var4)(var7, var6);
                            var5[3] = var6;
                            var1.children = var5;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var10);
                var9.children = var10;
                var9 = var3.bind(var4)(var2, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 603:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1620, 1216, 1672, 1665, 660, 33, 1297, 671, 5411, 3205, 566, 795, 4259, 4635, 3237, 9819, 1307, 9802, 4352, 1417, 3165, 5289, 1234, 1675, 4039, 9806, 9095, 3895, 8618, 2]);