// modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun109210: for (var _fun109210_ip = 0;;) switch (_fun109210_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun109210_ip = 46;
                    continue _fun109210
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun109210_ip = 55;
                    continue _fun109210
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun109210_ip = 345;
                    continue _fun109210
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun109210_ip = 323;
                    continue _fun109210
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun109210_ip = 283;
                    continue _fun109210
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun109210_ip = 270;
                    continue _fun109210
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun109210_ip = 163;
                    continue _fun109210
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun109210_ip = 179;
                    continue _fun109210
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun109210_ip = 249;
                    continue _fun109210
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun109210_ip = 249;
                    continue _fun109210
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun109210_ip = 234;
                    continue _fun109210
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun109210_ip = 247;
                    continue _fun109210
                }
            case 234:
                var8 = _closure1_slot31;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun109210_ip = 265;
                continue _fun109210;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun109210_ip = 283;
                continue _fun109210;
            case 270:
                var6 = _closure1_slot31;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun109210_ip = 323;
                    continue _fun109210
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun109210_ip = 330;
                    continue _fun109210
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun109211: for (var _fun109211_ip = 0;;) switch (_fun109211_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun109211_ip = 56;
                                continue _fun109211
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun109211_ip = 67;
                            continue _fun109211;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun109212: for (var _fun109212_ip = 0;;) switch (_fun109212_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun109212_ip = 23;
                    continue _fun109212
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun109212_ip = 33;
                    continue _fun109212
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun109212_ip = 70;
                    continue _fun109212
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun109212_ip = 55;
                    continue _fun109212
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun109213: for (var _fun109213_ip = 0;;) switch (_fun109213_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.userId;
                var0 = var1.userId;
                var0 = var3 === var0;
                if (!var0) {
                    _fun109213_ip = 37;
                    continue _fun109213
                }
            case 23:
                var2 = var2.applicationId;
                var1 = var1.applicationId;
                var0 = var2 === var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        _fun109214: for (var _fun109214_ip = 0;;) switch (_fun109214_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var0 = var4 === var1;
                if (var0) {
                    _fun109214_ip = 57;
                    continue _fun109214
                }
            case 19:
                var3 = var4.length;
                var1 = var1.length;
                var1 = var3 === var1;
                if (!var1) {
                    _fun109214_ip = 54;
                    continue _fun109214
                }
            case 36:
                var3 = var4.every;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun109215: for (var _fun109215_ip = 0;;) switch (_fun109215_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var0 = arg1;
                            var1 = var1[var0];
                            var3 = var2.user;
                            var0 = var1.user;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun109215_ip = 48;
                                continue _fun109215
                            }
                        case 34:
                            var2 = var2.applicationId;
                            var1 = var1.applicationId;
                            var0 = var2 === var1;
                        case 48:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var13 = 0;
    var3 = var5[var13];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var10 = 2;
    var7 = var5[var10];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var9 = 3;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Sections;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot13 = var7;
    var7 = var3.AnalyticsSections;
    var _closure1_slot14 = var7;
    var7 = var3.InstantInviteSources;
    var _closure1_slot15 = var7;
    var3 = var3.RelationshipTypes;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot18 = var7;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = {};
    var3.FIND_FRIENDS = var13;
    var8 = 'FIND_FRIENDS';
    var3[var13] = var8;
    var3.INCOMING_FRIEND_REQUESTS = var12;
    var8 = 'INCOMING_FRIEND_REQUESTS';
    var3[var12] = var8;
    var3.INCOMING_GAME_FRIEND_REQUESTS = var10;
    var8 = 'INCOMING_GAME_FRIEND_REQUESTS';
    var3[var10] = var8;
    var3.CONTACT_SUGGESTIONS = var9;
    var8 = 'CONTACT_SUGGESTIONS';
    var3[var9] = var8;
    var _closure1_slot20 = var3;
    var3 = 11;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var10.flex = var12;
    var3.container = var10;
    var10 = {};
    var12 = 12;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var13;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.paddingVertical = var13;
    var3.inviteAppsContainerNonSticky = var10;
    var10 = {
        'paddingTop': 0,
        'paddingBottom': 0,
        'minWidth': '100%'
    };
    var3.inviteAppsContentContainer = var10;
    var10 = {};
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var13;
    var3.emptyContainer = var10;
    var10 = {};
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginHorizontal = var13;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.paddingTop = var13;
    var3.emptyActionContainer = var10;
    var10 = {
        'backgroundColor': null,
        'justifyContent': 'center',
        'flex': 1
    };
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var12;
    var3.loading = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot21 = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 13;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openContactSyncModal;
        var1 = _closure1_slot14;
        var2 = var1.FRIENDS_ADD_FRIENDS_MODAL;
        var1 = {};
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot22 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun109219: for (var _fun109219_ip = 0;;) switch (_fun109219_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun109219_ip = 299;
                            continue _fun109219
                        }
                    case 10:
                        var2 = arg0;
                        var7 = undefined;
                        var5 = undefined;
                    case 17: // try_start_0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 14;
                        var1 = var6[var1];
                        var8 = var3.bind(var7)(var1);
                        var3 = var8.createFriendInvite;
                        var1 = _closure1_slot15;
                        var1 = var1.ADD_FRIENDS_MODAL;
                        var6 = null;
                        var1 = var3.bind(var8)(var6, var1);
                        SaveGenerator(address = 68);
                    case 66:
                        return var1;
                    case 68:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun109219_ip = 208;
                            continue _fun109219
                        }
                    case 77:
                        var5 = var1.code;
                    case 82: // try_end0
                        var3 = var2;
                        var2 = {};
                        var2.channel = var6;
                        var11 = var5;
                        var2.code = var11;
                        var6 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 16;
                        var8 = var13[var5];
                        var8 = var6.bind(var7)(var8);
                        var9 = var8.intl;
                        var8 = var9.formatToPlainString;
                        var5 = var13[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.t;
                        var6 = var5.PJf9P9;
                        var5 = {};
                        var12 = _closure1_slot1;
                        var10 = 17;
                        var10 = var13[var10];
                        var10 = var12.bind(var7)(var10);
                        var10 = var10.bind(var7)(var11);
                        var5.link = var10;
                        var5 = var8.bind(var9)(var6, var5);
                        var2.message = var5;
                        var4 = _closure1_slot15;
                        var4 = var4.ADD_FRIENDS_MODAL;
                        var2.location = var4;
                        var2 = var3.bind(var7)(var2);
                        return var7;
                    case 208:
                        return var1;
                    case 211: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 15;
                        var1 = var8[var1];
                        var3 = var6.bind(var7)(var1);
                        var2 = var3.presentError;
                        var1 = 16;
                        var4 = var8[var1];
                        var4 = var6.bind(var7)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var1 = var8[var1];
                        var1 = var6.bind(var7)(var1);
                        var1 = var1.t;
                        var1 = var1.R0RpRX;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    case 299:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot23 = var3;
    var3 = 21;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TableRow;
    var9 = var8.Icon;
    var8 = {};
    var10 = 22;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.FriendsIcon;
    var8.IconComponent = var10;
    var10 = 'blurple';
    var8.variant = var10;
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot24 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TableRow;
    var9 = var8.Arrow;
    var8 = {};
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot25 = var8;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TableRow;
    var10 = var8.Icon;
    var8 = {};
    var9 = 23;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.AtIcon;
    var8.IconComponent = var12;
    var8 = var7.bind(var0)(var10, var8);
    var _closure1_slot26 = var8;
    var8 = 24;
    var8 = var5[var8];
    var10 = var6.bind(var0)(var8);
    var8 = {};
    var8.absolute = var11;
    var8 = var7.bind(var0)(var10, var8);
    var _closure1_slot27 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TableRow;
    var8 = var3.Icon;
    var3 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.AtIcon;
    var3.IconComponent = var9;
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot28 = var3;
    var3 = 25;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot29 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109221: for (var _fun109221_ip = 0;;) switch (_fun109221_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.navigation;
                var _closure2_slot0 = var5;
                var0 = var0.route;
                var0 = var0.params;
                var0 = var0.sourcePage;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot23 = var3;
                var _closure2_slot24 = var3;
                var0 = _closure1_slot21;
                var18 = var0.bind(var3)();
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 26;
                var1 = var8[var0];
                var2 = var7.bind(var3)(var1);
                var1 = 27;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.ADD_FRIENDS;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var _closure2_slot2 = var4;
                var12 = _closure1_slot5;
                var2 = var12.useState;
                var1 = new Array(0);
                var1 = var2.bind(var12)(var1);
                var9 = _closure1_slot3;
                var19 = 2;
                var1 = var9.bind(var3)(var1, var19);
                var6 = 0;
                var2 = var1[var6];
                var _closure2_slot3 = var2;
                var17 = 1;
                var1 = var1[var17];
                var _closure2_slot4 = var1;
                var2 = var12.useState;
                var1 = new Array(0);
                var1 = var2.bind(var12)(var1);
                var1 = var9.bind(var3)(var1, var19);
                var2 = var1[var6];
                var _closure2_slot5 = var2;
                var1 = var1[var17];
                var _closure2_slot6 = var1;
                var2 = var12.useState;
                var1 = new Array(0);
                var1 = var2.bind(var12)(var1);
                var2 = var9.bind(var3)(var1, var19);
                var1 = var2[var6];
                var _closure2_slot7 = var1;
                var2 = var2[var17];
                var _closure2_slot8 = var2;
                var10 = var12.useState;
                var2 = new Array(0);
                var2 = var10.bind(var12)(var2);
                var2 = var9.bind(var3)(var2, var19);
                var9 = var2[var6];
                var _closure2_slot9 = var9;
                var2 = var2[var17];
                var _closure2_slot10 = var2;
                var11 = var12.useCallback;
                var10 = function(arg0, arg1) { // Environment: var13
                    _fun109222: for (var _fun109222_ip = 0;;) switch (_fun109222_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var _closure3_slot1 = var2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun109222_ip = 45;
                                continue _fun109222
                            }
                        case 22:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = function(arg0) { // Environment: var0
                                var0 = new Array(1);
                                var4 = arg0;
                                var3 = 0;
                                var5 = var0;
                                var2 = arraySpread(var5, var4, var3);
                                var1 = _closure3_slot0;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            _fun109222_ip = 66;
                            continue _fun109222;
                        case 45:
                            var2 = _closure2_slot10;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var0 = new Array(1);
                                var6 = arg0;
                                var5 = 0;
                                var7 = var0;
                                var2 = arraySpread(var7, var6, var5);
                                var1 = {};
                                var4 = _closure3_slot0;
                                var1.userId = var4;
                                var3 = _closure3_slot1;
                                var1.applicationId = var3;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var2 = var11.bind(var12)(var10, var2);
                var _closure2_slot11 = var2;
                var11 = var12.useCallback;
                var10 = function(arg0, arg1) { // Environment: var13
                    _fun109225: for (var _fun109225_ip = 0;;) switch (_fun109225_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var _closure3_slot1 = var2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun109225_ip = 45;
                                continue _fun109225
                            }
                        case 22:
                            var3 = _closure2_slot4;
                            var2 = undefined;
                            var1 = function(arg0) { // Environment: var0
                                var0 = new Array(1);
                                var4 = arg0;
                                var3 = 0;
                                var5 = var0;
                                var2 = arraySpread(var5, var4, var3);
                                var1 = _closure3_slot0;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            _fun109225_ip = 66;
                            continue _fun109225;
                        case 45:
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var0 = new Array(1);
                                var6 = arg0;
                                var5 = 0;
                                var7 = var0;
                                var2 = arraySpread(var7, var6, var5);
                                var1 = {};
                                var4 = _closure3_slot0;
                                var1.userId = var4;
                                var3 = _closure3_slot1;
                                var1.applicationId = var3;
                                var0[var2] = var1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var2 = var11.bind(var12)(var10, var2);
                var _closure2_slot12 = var2;
                var2 = 28;
                var2 = var8[var2];
                var10 = var7.bind(var3)(var2);
                var2 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.FRIEND_ADD_VIEWED;
                    var1 = {};
                    var5 = _closure1_slot14;
                    var5 = var5.FRIENDS_ADD_FRIENDS_MODAL;
                    var1.friend_add_type = var5;
                    var5 = _closure2_slot1;
                    var1.source_page = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var10.bind(var3)(var2);
                var11 = var12.useCallback;
                var10 = new Array(1);
                var10[0] = var5;
                var2 = function() { // Environment: var13
                    var2 = _closure2_slot0;
                    var1 = var2.navigate;
                    var0 = 'username-search';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var20 = var11.bind(var12)(var2, var10);
                var _closure2_slot13 = var20;
                var11 = var12.useCallback;
                var10 = new Array(1);
                var10[0] = var4;
                var2 = function(arg0) { // Environment: var13
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = var3.id;
                    var1.userId = var4;
                    var1.localUser = var3;
                    var3 = _closure2_slot2;
                    var1.sourceAnalyticsLocations = var3;
                    var3 = 'Add Friends Modal User Profile';
                    var1.location = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var11.bind(var12)(var2, var10);
                var _closure2_slot14 = var2;
                var12 = _closure1_slot0;
                var11 = 31;
                var2 = var8[var11];
                var22 = var12.bind(var3)(var2);
                var21 = var22.useStateFromStoresArray;
                var16 = _closure1_slot10;
                var14 = new Array(2);
                var14[0] = var16;
                var10 = _closure1_slot11;
                var14[1] = var10;
                var2 = function() { // Environment: var13
                    _fun109231: for (var _fun109231_ip = 0;;) switch (_fun109231_ip) {
                        case 0:
                            var5 = new Array(0);
                            var4 = _closure1_slot30;
                            var3 = _closure1_slot10;
                            var2 = var3.getMutableRelationships;
                            var3 = var2.bind(var3)();
                            var2 = var3.keys;
                            var2 = var2.bind(var3)();
                            var3 = undefined;
                            var9 = var4.bind(var3)(var2);
                            var6 = var9.bind(var3)();
                            var4 = var6.done;
                            var8 = null;
                            var7 = var6;
                            var6 = undefined;
                            if (var4) {
                                _fun109231_ip = 160;
                                continue _fun109231
                            }
                        case 65:
                            var13 = var7.value;
                            var10 = _closure1_slot10;
                            var4 = var10.isUnfilteredPendingIncoming;
                            var4 = var4.bind(var10)(var13);
                            if (!var4) {
                                _fun109231_ip = 145;
                                continue _fun109231
                            }
                        case 90:
                            var10 = _closure1_slot11;
                            var4 = var10.getUser;
                            var4 = var4.bind(var10)(var13);
                            var10 = var8 == var4;
                            if (var10) {
                                _fun109231_ip = 126;
                                continue _fun109231
                            }
                        case 112:
                            var12 = _closure2_slot3;
                            var11 = var12.includes;
                            var10 = var11.bind(var12)(var13);
                        case 126:
                            var6 = var4;
                            if (var10) {
                                _fun109231_ip = 145;
                                continue _fun109231
                            }
                        case 132:
                            var10 = var5.push;
                            var10 = var10.bind(var5)(var4);
                            var6 = var4;
                        case 145:
                            var10 = var9.bind(var3)();
                            var4 = var10.done;
                            var7 = var10;
                            if (!var4) {
                                _fun109231_ip = 65;
                                continue _fun109231
                            }
                        case 160:
                            var4 = new Array(0);
                            var _closure3_slot0 = var4;
                            var7 = _closure2_slot5;
                            var6 = var7.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun109232: for (var _fun109232_ip = 0;;) switch (_fun109232_ip) {
                                    case 0:
                                        var2 = _closure1_slot11;
                                        var1 = var2.getUser;
                                        var0 = arg0;
                                        var2 = var1.bind(var2)(var0);
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun109232_ip = 44;
                                            continue _fun109232
                                        }
                                    case 27:
                                        var1 = _closure3_slot0;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                    case 44:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var6.bind(var7)(var2);
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 32;
                            var1 = var6[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.unionBy;
                            var1 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var4, var5, var1);
                            var1 = var2.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 33;
                                var1 = var5[var0];
                                var3 = undefined;
                                var6 = var4.bind(var3)(var1);
                                var2 = var6.getName;
                                var1 = arg0;
                                var2 = var2.bind(var6)(var1);
                                var1 = var2.localeCompare;
                                var0 = var5[var0];
                                var4 = var4.bind(var3)(var0);
                                var3 = var4.getName;
                                var0 = arg1;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var21.bind(var22)(var14, var2);
                var _closure2_slot15 = var2;
                var11 = var8[var11];
                var14 = var12.bind(var3)(var11);
                var12 = var14.useStateFromStores;
                var21 = _closure1_slot9;
                var11 = new Array(3);
                var11[0] = var21;
                var11[1] = var16;
                var11[2] = var10;
                var10 = new Array(2);
                var10[0] = var9;
                var10[1] = var1;
                var26 = _closure1_slot33;
                var28 = function() { // Environment: var13
                    var4 = _closure1_slot9;
                    var3 = var4.getGameRelationshipsByType;
                    var2 = _closure1_slot16;
                    var2 = var2.PENDING_INCOMING;
                    var4 = var3.bind(var4)(var2);
                    var5 = new Array(0);
                    var _closure3_slot0 = var5;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var0
                        _fun109236: for (var _fun109236_ip = 0;;) switch (_fun109236_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.id;
                                var _closure4_slot0 = var6;
                                var3 = var0.applicationId;
                                var _closure4_slot1 = var3;
                                var4 = _closure1_slot11;
                                var0 = var4.getUser;
                                var4 = var0.bind(var4)(var6);
                                var5 = _closure1_slot10;
                                var0 = var5.isSpam;
                                var0 = var0.bind(var5)(var6);
                                if (var0) {
                                    _fun109236_ip = 74;
                                    continue _fun109236
                                }
                            case 59:
                                var5 = _closure1_slot10;
                                var2 = var5.isBlockedOrIgnored;
                                var0 = var2.bind(var5)(var6);
                            case 74:
                                if (var0) {
                                    _fun109236_ip = 83;
                                    continue _fun109236
                                }
                            case 77:
                                var2 = null;
                                var0 = var2 == var4;
                            case 83:
                                if (var0) {
                                    _fun109236_ip = 111;
                                    continue _fun109236
                                }
                            case 86:
                                var5 = _closure2_slot7;
                                var2 = var5.some;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot32;
                                    var2 = {};
                                    var1 = _closure4_slot0;
                                    var2.userId = var1;
                                    var0 = _closure4_slot1;
                                    var2.applicationId = var0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var0 = var2.bind(var5)(var1);
                            case 111:
                                if (var0) {
                                    _fun109236_ip = 141;
                                    continue _fun109236
                                }
                            case 114:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = {};
                                var0.user = var4;
                                var0.applicationId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 141:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var6 = _closure2_slot9;
                    var3 = var6.forEach;
                    var2 = function(arg0) { // Environment: var0
                        _fun109238: for (var _fun109238_ip = 0;;) switch (_fun109238_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.userId;
                                var3 = var0.applicationId;
                                var1 = _closure1_slot11;
                                var0 = var1.getUser;
                                var4 = var0.bind(var1)(var2);
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun109238_ip = 64;
                                    continue _fun109238
                                }
                            case 37:
                                var2 = _closure3_slot1;
                                var1 = var2.push;
                                var0 = {};
                                var0.user = var4;
                                var0.applicationId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 64:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.unionBy;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.user;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var4, var5, var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 33;
                        var1 = var5[var0];
                        var3 = undefined;
                        var6 = var4.bind(var3)(var1);
                        var2 = var6.getName;
                        var1 = arg0;
                        var1 = var1.user;
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.localeCompare;
                        var0 = var5[var0];
                        var4 = var4.bind(var3)(var0);
                        var3 = var4.getName;
                        var0 = arg1;
                        var0 = var0.user;
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var30 = var14;
                var29 = var11;
                var27 = var10;
                var10 = var30[var12](var29, var28, var27, var26, var25);
                var _closure2_slot16 = var10;
                var1 = 34;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var7 = var1.added;
                var _closure2_slot17 = var7;
                var7 = var1.setAdded;
                var _closure2_slot18 = var7;
                var11 = var1.friendSuggestions;
                var _closure2_slot19 = var11;
                var1 = var11.length;
                var7 = var1 > var6;
                if (!var7) {
                    _fun109221_ip = 622;
                    continue _fun109221
                }
            case 610:
                var8 = var2.length;
                var1 = 3;
                var7 = var8 > var1;
            case 622:
                _closure2_slot20 = var7;
                var1 = var11.length;
                var1 = var1 > var6;
                if (!var1) {
                    _fun109221_ip = 650;
                    continue _fun109221
                }
            case 638:
                var9 = var10.length;
                var8 = 3;
                var1 = var9 > var8;
            case 650:
                _closure2_slot21 = var1;
                var21 = _closure1_slot5;
                var12 = var21.useMemo;
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var1;
                var8 = function() { // Environment: var13
                    _fun109241: for (var _fun109241_ip = 0;;) switch (_fun109241_ip) {
                        case 0:
                            var0 = _closure2_slot21;
                            if (var0) {
                                _fun109241_ip = 21;
                                continue _fun109241
                            }
                        case 10:
                            var0 = _closure2_slot16;
                            var3 = var0.length;
                            _fun109241_ip = 52;
                            continue _fun109241;
                        case 21:
                            var0 = global;
                            var5 = var0.Math;
                            var2 = var5.min;
                            var0 = _closure2_slot16;
                            var1 = var0.length;
                            var0 = 3;
                            var3 = var2.bind(var5)(var1, var0);
                        case 52:
                            var0 = new Array(0);
                            var2 = 0;
                            var5 = var2 < var3;
                            var1 = null;
                            if (!var5) {
                                _fun109241_ip = 101;
                                continue _fun109241
                            }
                        case 67:
                            var5 = _closure2_slot16;
                            var5 = var5[var2];
                            if (!(var1 != var5)) {
                                _fun109241_ip = 94;
                                continue _fun109241
                            }
                        case 79:
                            var6 = var0.push;
                            var5 = var5.applicationId;
                            var5 = var6.bind(var0)(var5);
                        case 94:
                            var2 = var2 + 1;
                            if (var2 < var3) {
                                _fun109241_ip = 67;
                                continue _fun109241
                            }
                        case 101:
                            return var0;
                    }
                };
                var9 = var12.bind(var21)(var8, var9);
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 35;
                var8 = var16[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.bind(var3)(var9);
                var8 = {};
                var8.navigation = var5;
                var5 = function arg0() {
                    var0 = arg0;
                    var5 = var0.navigation;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot5;
                    var3 = var4.useState;
                    var2 = false;
                    var6 = var3.bind(var4)(var2);
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var0 = 2;
                    var3 = var3.bind(var2)(var6, var0);
                    var0 = 0;
                    var0 = var3[var0];
                    var2 = 1;
                    var2 = var3[var2];
                    var _closure3_slot1 = var2;
                    var3 = var4.useEffect;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.addListener;
                        var1 = 'transitionEnd';
                        var0 = function() { // Environment: var0
                            var2 = _closure3_slot1;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var8 = var5.bind(var3)(var8);
                var14 = _closure1_slot0;
                var5 = 18;
                var9 = var16[var5];
                var12 = var14.bind(var3)(var9);
                var9 = var12.useContactSyncAccount;
                var12 = var9.bind(var12)();
                var5 = var16[var5];
                var9 = var14.bind(var3)(var5);
                var5 = var9.isContactSyncEnabled;
                var5 = var5.bind(var9)(var12);
                var12 = var21.useState;
                var9 = false;
                var12 = var12.bind(var21)(var9);
                var9 = _closure1_slot3;
                var12 = var9.bind(var3)(var12, var19);
                var9 = var12[var6];
                var12 = var12[var17];
                _closure2_slot22 = var12;
                var19 = var21.useEffect;
                var17 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.checkContactPermissions;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun109246: for (var _fun109246_ip = 0;;) switch (_fun109246_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure1_slot17;
                                var0 = var0.NOT_DETERMINED;
                                var2 = var4 === var0;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 19;
                                var3 = var3[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var3);
                                var3 = var5.isAndroid;
                                var3 = var3.bind(var5)();
                                if (!var3) {
                                    _fun109246_ip = 69;
                                    continue _fun109246
                                }
                            case 55:
                                var1 = _closure1_slot17;
                                var1 = var1.UNAUTHORIZED;
                                var3 = var4 === var1;
                            case 69:
                                var1 = _closure2_slot22;
                                if (var2) {
                                    _fun109246_ip = 82;
                                    continue _fun109246
                                }
                            case 79:
                                var2 = var3;
                            case 82:
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = new Array(0);
                var12 = var19.bind(var21)(var17, var12);
                var12 = 20;
                var12 = var16[var12];
                var14 = var14.bind(var3)(var12);
                var12 = var14.isMetaQuest;
                var12 = var12.bind(var14)();
                var16 = !var12;
                if (!var16) {
                    _fun109221_ip = 874;
                    continue _fun109221
                }
            case 862:
                var5 = !var5;
                if (var5) {
                    _fun109221_ip = 871;
                    continue _fun109221
                }
            case 868:
                var5 = var9;
            case 871:
                var16 = var5;
            case 874:
                _closure2_slot23 = var16;
                var5 = var2.length;
                var9 = var6 === var5;
                if (!var9) {
                    _fun109221_ip = 899;
                    continue _fun109221
                }
            case 890:
                var5 = var10.length;
                var9 = var6 === var5;
            case 899:
                if (!var9) {
                    _fun109221_ip = 911;
                    continue _fun109221
                }
            case 902:
                var5 = var11.length;
                var9 = var6 === var5;
            case 911:
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var12 = var2.length;
                var2 = new Array(6);
                var2[0] = var12;
                var11 = var11.length;
                var2[1] = var11;
                var10 = var10.length;
                var2[2] = var10;
                var2[3] = var16;
                var2[4] = var7;
                var2[5] = var1;
                var1 = function() { // Environment: var13
                    _fun109247: for (var _fun109247_ip = 0;;) switch (_fun109247_ip) {
                        case 0:
                            var0 = _closure2_slot23;
                            var2 = 1;
                            if (!var0) {
                                _fun109247_ip = 16;
                                continue _fun109247
                            }
                        case 13:
                            var2 = 2;
                        case 16:
                            var0 = new Array(4);
                            var0[0] = var2;
                            var4 = _closure2_slot20;
                            var2 = 4;
                            var3 = var2;
                            if (var4) {
                                _fun109247_ip = 46;
                                continue _fun109247
                            }
                        case 37:
                            var4 = _closure2_slot15;
                            var3 = var4.length;
                        case 46:
                            var0[1] = var3;
                            var3 = _closure2_slot21;
                            if (var3) {
                                _fun109247_ip = 66;
                                continue _fun109247
                            }
                        case 57:
                            var3 = _closure2_slot16;
                            var2 = var3.length;
                        case 66:
                            var0[2] = var2;
                            var1 = _closure2_slot19;
                            var1 = var1.length;
                            var0[3] = var1;
                            return var0;
                    }
                };
                var14 = var5.bind(var6)(var1, var2);
                _closure2_slot24 = var14;
                var5 = var6.useCallback;
                var2 = function(arg0) { // Environment: var13
                    _fun109248: for (var _fun109248_ip = 0;;) switch (_fun109248_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure1_slot20;
                            var0 = var0.FIND_FRIENDS;
                            if (!(var0 !== var1)) {
                                _fun109248_ip = 313;
                                continue _fun109248
                            }
                        case 23:
                            var0 = _closure1_slot20;
                            var0 = var0.INCOMING_FRIEND_REQUESTS;
                            if (!(var0 !== var1)) {
                                _fun109248_ip = 232;
                                continue _fun109248
                            }
                        case 40:
                            var0 = _closure1_slot20;
                            var0 = var0.INCOMING_GAME_FRIEND_REQUESTS;
                            if (!(var0 !== var1)) {
                                _fun109248_ip = 151;
                                continue _fun109248
                            }
                        case 54:
                            var0 = _closure1_slot20;
                            var0 = var0.CONTACT_SUGGESTIONS;
                            if (!(var0 !== var1)) {
                                _fun109248_ip = 72;
                                continue _fun109248
                            }
                        case 68:
                            var0 = undefined;
                            return var0;
                        case 72:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 16;
                            var4 = var8[var3];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var7.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3["1uAmCw"];
                            var3 = var4.bind(var5)(var3);
                            var1.title = var3;
                            var0.props = var1;
                            return var0;
                        case 151:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 16;
                            var4 = var8[var3];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var7.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3["0uVuaU"];
                            var3 = var4.bind(var5)(var3);
                            var1.title = var3;
                            var0.props = var1;
                            return var0;
                        case 232:
                            var0 = {};
                            var1 = 'section';
                            var0.type = var1;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 16;
                            var3 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["93cLE3"];
                            var2 = var3.bind(var4)(var2);
                            var1.title = var2;
                            var0.props = var1;
                            return var0;
                        case 313:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var12 = var5.bind(var6)(var2, var1);
                var2 = _closure1_slot19;
                var1 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = var19[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot27;
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot7;
                var5 = {};
                var7 = var18.container;
                var5.style = var7;
                var10 = _closure1_slot18;
                var7 = {};
                var11 = var18.inviteAppsContainerNonSticky;
                var7.style = var11;
                var17 = _closure1_slot1;
                var11 = 36;
                var11 = var19[var11];
                var17 = var17.bind(var3)(var11);
                var11 = {};
                var19 = _closure1_slot23;
                var11.onItemPressed = var19;
                var19 = var18.inviteAppsContentContainer;
                var11.contentContainerStyle = var19;
                var11 = var10.bind(var3)(var17, var11);
                var7.children = var11;
                var10 = var10.bind(var3)(var6, var7);
                var7 = new Array(2);
                var7[0] = var10;
                if (var8) {
                    _fun109221_ip = 1242;
                    continue _fun109221
                }
            case 1143:
                if (var9) {
                    _fun109221_ip = 1242;
                    continue _fun109221
                }
            case 1146:
                var11 = _closure1_slot18;
                var10 = _closure1_slot7;
                var8 = {};
                var17 = var18.loading;
                var8.style = var17;
                var19 = _closure1_slot6;
                var17 = {
                    'animating': true,
                    'color': null,
                    'size': 'large'
                };
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 12;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.unsafe_rawColors;
                var21 = var21.BRAND_500;
                var17.color = var21;
                var17 = var11.bind(var3)(var19, var17);
                var8.children = var17;
                var8 = var11.bind(var3)(var10, var8);
                _fun109221_ip = 1524;
                continue _fun109221;
            case 1242:
                if (var9) {
                    _fun109221_ip = 1325;
                    continue _fun109221
                }
            case 1245:
                var11 = _closure1_slot18;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 37;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.UsersFastList;
                var9 = {};
                var9.sections = var14;
                var13 = function arg0, arg1() {
                    _fun109249: for (var _fun109249_ip = 0;;) switch (_fun109249_ip) {
                        case 0:
                            var6 = arg0;
                            var4 = arg1;
                            var10 = 0;
                            var1 = var10 === var4;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot24;
                            var5 = var3[var6];
                            var3 = 1;
                            var3 = var5 - var3;
                            var3 = var4 === var3;
                            var _closure3_slot1 = var3;
                            var7 = _closure1_slot20;
                            var7 = var7.FIND_FRIENDS;
                            if (!(var7 !== var6)) {
                                _fun109249_ip = 451;
                                continue _fun109249
                            }
                        case 64:
                            var7 = _closure1_slot20;
                            var7 = var7.INCOMING_FRIEND_REQUESTS;
                            if (!(var7 !== var6)) {
                                _fun109249_ip = 364;
                                continue _fun109249
                            }
                        case 81:
                            var7 = _closure1_slot20;
                            var7 = var7.INCOMING_GAME_FRIEND_REQUESTS;
                            if (!(var7 !== var6)) {
                                _fun109249_ip = 235;
                                continue _fun109249
                            }
                        case 98:
                            var5 = _closure1_slot20;
                            var5 = var5.CONTACT_SUGGESTIONS;
                            if (!(var5 !== var6)) {
                                _fun109249_ip = 116;
                                continue _fun109249
                            }
                        case 112:
                            var5 = undefined;
                            return var5;
                        case 116:
                            var5 = _closure2_slot19;
                            var6 = var5[var4];
                            var _closure3_slot5 = var6;
                            var5 = {};
                            var7 = 'custom';
                            var5.type = var7;
                            var11 = null;
                            var9 = var11 == var6;
                            var7 = undefined;
                            if (var9) {
                                _fun109249_ip = 155;
                                continue _fun109249
                            }
                        case 149:
                            var7 = var6.mutualFriendsCount;
                        case 155:
                            var12 = var11 != var7;
                            var9 = 'contactSuggestionNoMutualCount';
                            var7 = var9;
                            if (!var12) {
                                _fun109249_ip = 202;
                                continue _fun109249
                            }
                        case 171:
                            var11 = var11 == var6;
                            var8 = undefined;
                            if (var11) {
                                _fun109249_ip = 186;
                                continue _fun109249
                            }
                        case 180:
                            var8 = var6.mutualFriendsCount;
                        case 186:
                            var8 = var8 > var10;
                            var7 = var9;
                            if (!var8) {
                                _fun109249_ip = 202;
                                continue _fun109249
                            }
                        case 196:
                            var7 = 'contactSuggestionMutualCount';
                        case 202:
                            var5.itemType = var7;
                            var6 = var6.user;
                            var6 = var6.id;
                            var5.key = var6;
                            var6 = function() {
                                var3 = _closure1_slot18;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 40;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.ContactSuggestionRow;
                                var0 = {};
                                var9 = _closure2_slot17;
                                var8 = var9.includes;
                                var7 = _closure3_slot5;
                                var7 = var8.bind(var9)(var7);
                                var0.added = var7;
                                var7 = _closure3_slot5;
                                var0.suggestedFriend = var7;
                                var7 = _closure3_slot0;
                                var0.start = var7;
                                var6 = _closure3_slot1;
                                var0.end = var6;
                                var5 = _closure2_slot14;
                                var0.onPress = var5;
                                var4 = _closure1_slot15;
                                var4 = var4.ADD_FRIENDS_MODAL;
                                var0.location = var4;
                                var4 = function() {
                                    var2 = _closure2_slot18;
                                    var1 = undefined;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = new Array(1);
                                        var4 = arg0;
                                        var3 = 0;
                                        var5 = var0;
                                        var2 = arraySpread(var5, var4, var3);
                                        var1 = _closure3_slot5;
                                        var0[var2] = var1;
                                        var1 = 1;
                                        var1 = var2 + var1;
                                        return var0;
                                    };
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0.onAddSuggestion = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var5.component = var6;
                            return var5;
                        case 235:
                            if (!var3) {
                                _fun109249_ip = 245;
                                continue _fun109249
                            }
                        case 238:
                            var5 = _closure2_slot21;
                            if (var5) {
                                _fun109249_ip = 336;
                                continue _fun109249
                            }
                        case 245:
                            var5 = _closure2_slot16;
                            var5 = var5[var4];
                            var6 = var5.user;
                            var _closure3_slot3 = var6;
                            var10 = var5.applicationId;
                            var _closure3_slot4 = var10;
                            var5 = {
                                'type': 'custom',
                                'itemType': 'incomingRequest'
                            };
                            var9 = var6.id;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var8 = var6.concat;
                            var7 = '';
                            var6 = '-';
                            var6 = var8.bind(var7)(var9, var6, var10);
                            var5.key = var6;
                            var6 = function() {
                                var3 = _closure1_slot18;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 39;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.ConnectedIncomingGameFriendRequestRow;
                                var0 = {};
                                var7 = _closure2_slot9;
                                var6 = var7.find;
                                var5 = function(arg0) { // Environment: var5
                                    var3 = _closure1_slot32;
                                    var2 = {};
                                    var1 = _closure3_slot3;
                                    var1 = var1.id;
                                    var2.userId = var1;
                                    var0 = _closure3_slot4;
                                    var2.applicationId = var0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var6 = var6.bind(var7)(var5);
                                var5 = null;
                                var5 = var5 != var6;
                                var0.accepted = var5;
                                var6 = _closure3_slot4;
                                var0.applicationId = var6;
                                var6 = _closure3_slot3;
                                var0.user = var6;
                                var6 = _closure3_slot0;
                                var0.start = var6;
                                var5 = _closure3_slot1;
                                var0.end = var5;
                                var5 = _closure2_slot14;
                                var0.onPress = var5;
                                var5 = _closure2_slot12;
                                var0.onDeclineIncomingRequest = var5;
                                var4 = _closure2_slot11;
                                var0.onAcceptIncomingRequest = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var5.component = var6;
                            return var5;
                        case 336:
                            var5 = {
                                'type': 'custom',
                                'itemType': 'viewAll',
                                'key': 'gameFriendRequestsViewAll'
                            };
                            var6 = function() {
                                var3 = _closure1_slot18;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 38;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var4 = function() {
                                    var2 = _closure2_slot0;
                                    var1 = var2.navigate;
                                    var0 = 'requests';
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPress = var4;
                                var4 = _closure2_slot16;
                                var7 = var4.slice;
                                var6 = 3;
                                var7 = var7.bind(var4)(var6);
                                var6 = var7.map;
                                var5 = function(arg0) { // Environment: var5
                                    var0 = arg0;
                                    var0 = var0.user;
                                    return var0;
                                };
                                var5 = var6.bind(var7)(var5);
                                var0.users = var5;
                                var4 = var4.length;
                                var0.count = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var5.component = var6;
                            return var5;
                        case 364:
                            if (!var3) {
                                _fun109249_ip = 374;
                                continue _fun109249
                            }
                        case 367:
                            var3 = _closure2_slot20;
                            if (var3) {
                                _fun109249_ip = 423;
                                continue _fun109249
                            }
                        case 374:
                            var3 = _closure2_slot15;
                            var4 = var3[var4];
                            var _closure3_slot2 = var4;
                            var3 = {
                                'type': 'custom',
                                'itemType': 'incomingRequest'
                            };
                            var4 = var4.id;
                            var3.key = var4;
                            var4 = function() {
                                var3 = _closure1_slot18;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 39;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.IncomingFriendRequestRow;
                                var0 = {};
                                var8 = _closure2_slot5;
                                var7 = var8.includes;
                                var6 = _closure3_slot2;
                                var6 = var6.id;
                                var6 = var7.bind(var8)(var6);
                                var0.accepted = var6;
                                var6 = _closure3_slot2;
                                var0.user = var6;
                                var6 = _closure3_slot0;
                                var0.start = var6;
                                var5 = _closure3_slot1;
                                var0.end = var5;
                                var5 = _closure2_slot14;
                                var0.onPress = var5;
                                var5 = _closure2_slot12;
                                var0.onDeclineIncomingRequest = var5;
                                var4 = _closure2_slot11;
                                var0.onAcceptIncomingRequest = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var3.component = var4;
                            return var3;
                        case 423:
                            var3 = {
                                'type': 'custom',
                                'itemType': 'viewAll',
                                'key': 'friendRequestsViewAll'
                            };
                            var4 = function() {
                                var3 = _closure1_slot18;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 38;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var4 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 29;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var2);
                                    var4 = var5.track;
                                    var2 = _closure1_slot13;
                                    var3 = var2.FRIEND_FINDER_SECTION_EXPANDED;
                                    var2 = {};
                                    var1 = _closure1_slot12;
                                    var1 = var1.PENDING;
                                    var2.section_id = var1;
                                    var1 = 3;
                                    var2.truncated_count = var1;
                                    var6 = _closure2_slot15;
                                    var6 = var6.length;
                                    var2.expanded_count = var6;
                                    var6 = 'AddFriends';
                                    var2.location = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var3 = _closure2_slot0;
                                    var2 = var3.navigate;
                                    var1 = 'requests';
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var0.onPress = var4;
                                var4 = _closure2_slot15;
                                var6 = var4.slice;
                                var5 = 3;
                                var5 = var6.bind(var4)(var5);
                                var0.users = var5;
                                var4 = var4.length;
                                var0.count = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var3.component = var4;
                            return var3;
                        case 451:
                            if (!var1) {
                                _fun109249_ip = 461;
                                continue _fun109249
                            }
                        case 454:
                            var0 = _closure2_slot23;
                            if (var0) {
                                _fun109249_ip = 489;
                                continue _fun109249
                            }
                        case 461:
                            var0 = {
                                'type': 'custom',
                                'itemType': 'addByUsername',
                                'key': 'addByUsername'
                            };
                            var1 = function() {
                                var3 = _closure1_slot18;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var0 = 21;
                                var0 = var10[var0];
                                var2 = undefined;
                                var0 = var9.bind(var2)(var0);
                                var1 = var0.TableRow;
                                var0 = {
                                    'start': null,
                                    'end': true,
                                    'label': null,
                                    'labelLineClamp': 1,
                                    'icon': null,
                                    'arrow': true
                                };
                                var6 = _closure2_slot23;
                                var6 = !var6;
                                var0.start = var6;
                                var6 = 16;
                                var7 = var10[var6];
                                var7 = var9.bind(var2)(var7);
                                var8 = var7.intl;
                                var7 = var8.string;
                                var6 = var10[var6];
                                var6 = var9.bind(var2)(var6);
                                var6 = var6.t;
                                var6 = var6.QzVsOs;
                                var6 = var7.bind(var8)(var6);
                                var0.label = var6;
                                var5 = _closure1_slot26;
                                var0.icon = var5;
                                var4 = _closure2_slot13;
                                var0.onPress = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.component = var1;
                            _fun109249_ip = 518;
                            continue _fun109249;
                        case 489:
                            var1 = {
                                'type': 'custom',
                                'itemType': 'showContactSyncCTA',
                                'key': 'showContactSyncCTA'
                            };
                            var2 = function() {
                                var3 = _closure1_slot18;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var0 = 21;
                                var0 = var9[var0];
                                var2 = undefined;
                                var0 = var8.bind(var2)(var0);
                                var1 = var0.TableRow;
                                var0 = {
                                    'start': true,
                                    'label': null,
                                    'labelLineClamp': 1
                                };
                                var5 = 16;
                                var6 = var9[var5];
                                var6 = var8.bind(var2)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var2)(var5);
                                var5 = var5.t;
                                var5 = var5.j2POVo;
                                var5 = var6.bind(var7)(var5);
                                var0.label = var5;
                                var5 = _closure1_slot24;
                                var0.icon = var5;
                                var5 = _closure1_slot25;
                                var0.trailing = var5;
                                var4 = _closure1_slot22;
                                var0.onPress = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.component = var2;
                            var0 = var1;
                        case 518:
                            return var0;
                    }
                };
                var9.getItemProps = var13;
                var9.getSectionProps = var12;
                var12 = 12;
                var9.insetEnd = var12;
                var12 = true;
                var9.disableStickySections = var12;
                var9 = var11.bind(var3)(var10, var9);
                _fun109221_ip = 1521;
                continue _fun109221;
            case 1325:
                var12 = _closure1_slot19;
                var11 = _closure1_slot8;
                var10 = {};
                var13 = var18.emptyContainer;
                var10.style = var13;
                var17 = _closure1_slot18;
                var14 = _closure1_slot7;
                var13 = {};
                var18 = var18.emptyActionContainer;
                var13.style = var18;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var18 = 21;
                var18 = var25[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.TableRow;
                var18 = {
                    'label': null,
                    'labelLineClamp': 1,
                    'icon': null,
                    'arrow': true,
                    'onPress': null,
                    'start': true,
                    'end': true
                };
                var21 = 16;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.QzVsOs;
                var21 = var22.bind(var23)(var21);
                var18.label = var21;
                var21 = _closure1_slot28;
                var18.icon = var21;
                var18.onPress = var20;
                var18 = var17.bind(var3)(var19, var18);
                var13.children = var18;
                var14 = var17.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = null;
                if (!var16) {
                    _fun109221_ip = 1507;
                    continue _fun109221
                }
            case 1503:
                var14 = _closure1_slot29;
            case 1507:
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1521:
                var8 = var9;
            case 1524:
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 8806, 3102, 1621, 9617, 660, 9594, 33, 1297, 671, 9592, 5975, 3149, 1234, 6642, 9596, 478, 4112, 4876, 3151, 4830, 7690, 14070, 5785, 5639, 4109, 795, 8334, 632, 22, 3237, 13266, 6979, 9023, 8909, 14071, 14072, 14074, 2]);