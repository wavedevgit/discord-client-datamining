// modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun92962: for (var _fun92962_ip = 0;;) switch (_fun92962_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92962_ip = 46;
                    continue _fun92962
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92962_ip = 55;
                    continue _fun92962
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92962_ip = 345;
                    continue _fun92962
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92962_ip = 323;
                    continue _fun92962
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92962_ip = 283;
                    continue _fun92962
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92962_ip = 270;
                    continue _fun92962
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
                    _fun92962_ip = 163;
                    continue _fun92962
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92962_ip = 179;
                    continue _fun92962
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92962_ip = 249;
                    continue _fun92962
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92962_ip = 249;
                    continue _fun92962
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92962_ip = 234;
                    continue _fun92962
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92962_ip = 247;
                    continue _fun92962
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92962_ip = 265;
                continue _fun92962;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92962_ip = 283;
                continue _fun92962;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92962_ip = 323;
                    continue _fun92962
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
                    _fun92962_ip = 330;
                    continue _fun92962
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92963: for (var _fun92963_ip = 0;;) switch (_fun92963_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92963_ip = 56;
                                continue _fun92963
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
                            _fun92963_ip = 67;
                            continue _fun92963;
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
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun92964: for (var _fun92964_ip = 0;;) switch (_fun92964_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92964_ip = 23;
                    continue _fun92964
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92964_ip = 33;
                    continue _fun92964
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
                    _fun92964_ip = 70;
                    continue _fun92964
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92964_ip = 55;
                    continue _fun92964
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OnboardingConnectionType;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildOnboardingModalStates;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {
        'display': 'flex',
        'flex': 1,
        'flexGrow': 1
    };
    var9 = 13;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var8.marginTop = var9;
    var9 = 14;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginBottom = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexGrow': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.scrollContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginBottom = var11;
    var3.header = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginBottom = var11;
    var3.title = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginTop = var11;
    var3.description = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginTop = var11;
    var3.connectionsList = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'bottom': 0,
        'paddingBottom': null,
        'position': 'absolute',
        'width': '100%'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingBottom = var11;
    var11 = '100%';
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var3.footer = var8;
    var8 = {};
    var8.flexGrow = var0;
    var13 = 44;
    var8.height = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.footerButton = var8;
    var8 = {};
    var13 = 15;
    var13 = var5[var13];
    var15 = var10.bind(var0)(var13);
    var14 = var12.PRIMARY_SEMIBOLD;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.WHITE;
    var12 = 16;
    var17 = var15.bind(var0)(var14, var13, var12);
    var18 = var8;
    var12 = copyDataProperties(var18, var17);
    var3.footerButtonText = var8;
    var8 = {};
    var8.width = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.footerContent = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var9;
    var3.buttonSkip = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92965: for (var _fun92965_ip = 0;;) switch (_fun92965_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var10 = var0.onComplete;
                var _closure2_slot1 = var10;
                var19 = var0.isLastStep;
                var _closure2_slot2 = var19;
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var2 = var4.bind(var3)(var0);
                var0 = var2.useNavigation;
                var11 = var0.bind(var2)();
                var _closure2_slot3 = var11;
                var6 = _closure1_slot1;
                var0 = 17;
                var0 = var5[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var17 = var0.bottom;
                var0 = 64;
                var2 = var0 + var17;
                var0 = 14;
                var0 = var5[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.spacing;
                var0 = var0.PX_8;
                var13 = var2 + var0;
                var7 = _closure1_slot3;
                var2 = var7.useRef;
                var0 = false;
                var0 = var2.bind(var7)(var0);
                var _closure2_slot4 = var0;
                var6 = 18;
                var0 = var5[var6];
                var15 = var4.bind(var3)(var0);
                var14 = var15.useStateFromStores;
                var0 = _closure1_slot10;
                var12 = new Array(1);
                var12[0] = var0;
                var2 = function() { // Environment: var18
                    var2 = _closure1_slot10;
                    var1 = var2.getConnections;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var14.bind(var15)(var12, var2);
                var _closure2_slot5 = var22;
                var2 = var5[var6];
                var15 = var4.bind(var3)(var2);
                var14 = var15.useStateFromStoresArray;
                var12 = new Array(1);
                var12[0] = var0;
                var2 = function() { // Environment: var18
                    var2 = _closure1_slot10;
                    var1 = var2.getOnboardingPromptsForOnboarding;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var14.bind(var15)(var12, var2);
                var _closure2_slot6 = var2;
                var12 = var5[var6];
                var16 = var4.bind(var3)(var12);
                var15 = var16.useStateFromStores;
                var12 = _closure1_slot9;
                var14 = new Array(1);
                var14[0] = var12;
                var12 = function() { // Environment: var18
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var15.bind(var16)(var14, var12);
                var _closure2_slot7 = var14;
                var12 = var5[var6];
                var20 = var4.bind(var3)(var12);
                var16 = var20.useStateFromStores;
                var12 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var12;
                var12 = function() { // Environment: var18
                    var2 = _closure1_slot6;
                    var1 = var2.getRulesPrompt;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var16.bind(var20)(var15, var12);
                var _closure2_slot8 = var12;
                var15 = var5[var6];
                var20 = var4.bind(var3)(var15);
                var16 = var20.useStateFromStores;
                var15 = new Array(1);
                var15[0] = var0;
                var0 = function() { // Environment: var18
                    var1 = _closure1_slot10;
                    var0 = var1.isLoading;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var16.bind(var20)(var15, var0);
                var _closure2_slot9 = var0;
                var6 = var5[var6];
                var21 = var4.bind(var3)(var6);
                var20 = var21.useStateFromStores;
                var6 = _closure1_slot7;
                var16 = new Array(2);
                var16[0] = var6;
                var6 = _closure1_slot8;
                var16[1] = var6;
                var15 = new Array(1);
                var15[0] = var22;
                var6 = function() { // Environment: var18
                    _fun92971: for (var _fun92971_ip = 0;;) switch (_fun92971_ip) {
                        case 0:
                            var1 = _closure1_slot17;
                            var0 = _closure2_slot5;
                            var5 = undefined;
                            var4 = var1.bind(var5)(var0);
                            var1 = var4.bind(var5)();
                            var0 = var1.done;
                            var3 = null;
                            var2 = var1;
                            var1 = undefined;
                            if (var0) {
                                _fun92971_ip = 204;
                                continue _fun92971
                            }
                        case 43:
                            var0 = var2.value;
                            var8 = var0.connection_type;
                            var7 = _closure1_slot11;
                            var7 = var7.APPLICATION;
                            if (!(var8 !== var7)) {
                                _fun92971_ip = 149;
                                continue _fun92971
                            }
                        case 68:
                            var9 = var0.connection_type;
                            var7 = _closure1_slot11;
                            var8 = var7.PROVIDER_CONNECTED_ACCOUNT;
                            var7 = var1;
                            if (!(var9 === var8)) {
                                _fun92971_ip = 177;
                                continue _fun92971
                            }
                        case 91:
                            var8 = var0.provider_id;
                            var7 = var1;
                            if (!(var3 != var8)) {
                                _fun92971_ip = 177;
                                continue _fun92971
                            }
                        case 104:
                            var10 = _closure1_slot8;
                            var9 = var10.getAccount;
                            var8 = var0.provider_id;
                            var9 = var9.bind(var10)(var3, var8);
                            var7 = var9;
                            if (!(var3 != var7)) {
                                _fun92971_ip = 177;
                                continue _fun92971
                            }
                        case 133:
                            var8 = var9.revoked;
                            var7 = var9;
                            if (var8) {
                                _fun92971_ip = 177;
                                continue _fun92971
                            }
                        case 145:
                            var8 = true;
                            return var8;
                        case 149:
                            var9 = _closure1_slot7;
                            var8 = var9.getNewestTokenForApplication;
                            var0 = var0.application_id;
                            var0 = var8.bind(var9)(var0);
                            var7 = var1;
                            if (!(var3 == var0)) {
                                _fun92971_ip = 200;
                                continue _fun92971
                            }
                        case 177:
                            var8 = var4.bind(var5)();
                            var0 = var8.done;
                            var1 = var7;
                            var2 = var8;
                            if (var0) {
                                _fun92971_ip = 204;
                                continue _fun92971
                            }
                        case 195:
                            _fun92971_ip = 43;
                            continue _fun92971;
                        case 200:
                            var0 = true;
                            return var0;
                        case 204:
                            var0 = false;
                            return var0;
                    }
                };
                var15 = var20.bind(var21)(var16, var6, var15);
                var _closure2_slot10 = var15;
                var20 = var7.useEffect;
                var16 = new Array(3);
                var16[0] = var1;
                var16[1] = var0;
                var16[2] = var22;
                var6 = function() { // Environment: var18
                    _fun92972: for (var _fun92972_ip = 0;;) switch (_fun92972_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun92972_ip = 297;
                                continue _fun92972
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun92972_ip = 297;
                                continue _fun92972
                            }
                        case 31:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if (var1) {
                                _fun92972_ip = 297;
                                continue _fun92972
                            }
                        case 46:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 19;
                            var3 = var10[var2];
                            var8 = undefined;
                            var5 = var9.bind(var8)(var3);
                            var3 = var5.getProviderConnectionState;
                            var4 = _closure2_slot5;
                            var6 = var3.bind(var5)(var4);
                            var2 = var10[var2];
                            var3 = var9.bind(var8)(var2);
                            var2 = var3.getApplicationConnectionState;
                            var5 = var2.bind(var3)(var4);
                            var3 = _closure1_slot1;
                            var2 = 20;
                            var2 = var10[var2];
                            var4 = var3.bind(var8)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot13;
                            var2 = var1.GUILD_ONBOARDING_STEP_VIEWED;
                            var1 = {};
                            var7 = 21;
                            var7 = var10[var7];
                            var12 = var9.bind(var8)(var7);
                            var11 = var12.collectGuildAnalyticsMetadata;
                            var7 = _closure2_slot0;
                            var13 = var11.bind(var12)(var7);
                            var14 = var1;
                            var7 = copyDataProperties(var14, var13);
                            var7 = 22;
                            var7 = var10[var7];
                            var7 = var9.bind(var8)(var7);
                            var8 = var7.CONNECTIONS_STEP;
                            var7 = 'step';
                            var1[var7] = var8;
                            var8 = false;
                            var7 = 'required';
                            var1[var7] = var8;
                            var8 = var6.connected;
                            var7 = 'provider_connections_connected';
                            var1[var7] = var8;
                            var7 = var6.notConnected;
                            var6 = 'provider_connections_not_connected';
                            var1[var6] = var7;
                            var7 = var5.connected;
                            var6 = 'application_connections_connected';
                            var1[var6] = var7;
                            var6 = var5.notConnected;
                            var5 = 'application_connections_not_connected';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure2_slot4;
                            var0 = true;
                            var1.current = var0;
                        case 297:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var20.bind(var7)(var6, var16);
                var6 = var7.useCallback;
                var16 = var2.length;
                var2 = new Array(9);
                var2[0] = var16;
                var2[1] = var14;
                var2[2] = var12;
                var2[3] = var11;
                var2[4] = var10;
                var2[5] = var22;
                var2[6] = var15;
                var2[7] = var19;
                var2[8] = var1;
                var1 = function() { // Environment: var18
                    _fun92973: for (var _fun92973_ip = 0;;) switch (_fun92973_ip) {
                        case 0:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 19;
                            var2 = var12[var6];
                            var0 = undefined;
                            var4 = var11.bind(var0)(var2);
                            var3 = var4.getProviderConnectionState;
                            var5 = _closure2_slot5;
                            var10 = var3.bind(var4)(var5);
                            var3 = var12[var6];
                            var4 = var11.bind(var0)(var3);
                            var3 = var4.getApplicationConnectionState;
                            var9 = var3.bind(var4)(var5);
                            var4 = _closure1_slot1;
                            var3 = 20;
                            var3 = var12[var3];
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.track;
                            var3 = _closure1_slot13;
                            var4 = var3.GUILD_ONBOARDING_STEP_COMPLETED;
                            var3 = {};
                            var5 = 21;
                            var5 = var12[var5];
                            var14 = var11.bind(var0)(var5);
                            var13 = var14.collectGuildAnalyticsMetadata;
                            var5 = _closure2_slot0;
                            var15 = var13.bind(var14)(var5);
                            var16 = var3;
                            var5 = copyDataProperties(var16, var15);
                            var5 = 22;
                            var5 = var12[var5];
                            var5 = var11.bind(var0)(var5);
                            var11 = var5.CONNECTIONS_STEP;
                            var5 = 'step';
                            var3[var5] = var11;
                            var5 = _closure2_slot10;
                            var11 = !var5;
                            var5 = 'skipped';
                            var3[var5] = var11;
                            var11 = false;
                            var5 = 'back';
                            var3[var5] = var11;
                            var5 = 0;
                            var11 = 'options_selected';
                            var3[var11] = var5;
                            var12 = true;
                            var11 = 'in_onboarding';
                            var3[var11] = var12;
                            var12 = _closure2_slot2;
                            var11 = 'is_final_step';
                            var3[var11] = var12;
                            var12 = var10.connected;
                            var11 = 'provider_connections_connected';
                            var3[var11] = var12;
                            var11 = var10.notConnected;
                            var10 = 'provider_connections_not_connected';
                            var3[var10] = var11;
                            var11 = var9.connected;
                            var10 = 'application_connections_connected';
                            var3[var10] = var11;
                            var10 = var9.notConnected;
                            var9 = 'application_connections_not_connected';
                            var3[var9] = var10;
                            var3 = var7.bind(var8)(var4, var3);
                            var3 = _closure2_slot6;
                            var3 = var3.length;
                            if (!(!(var3 > var5))) {
                                _fun92973_ip = 386;
                                continue _fun92973
                            }
                        case 310:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.showRulesInOnboarding;
                            var4 = _closure2_slot7;
                            var3 = _closure2_slot8;
                            var3 = var6.bind(var7)(var4, var3);
                            if (var3) {
                                _fun92973_ip = 360;
                                continue _fun92973
                            }
                        case 350:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var0)();
                            _fun92973_ip = 418;
                            continue _fun92973;
                        case 360:
                            var6 = _closure2_slot3;
                            var4 = var6.push;
                            var3 = _closure1_slot12;
                            var3 = var3.RULES;
                            var3 = var4.bind(var6)(var3);
                            _fun92973_ip = 418;
                            continue _fun92973;
                        case 386:
                            var4 = _closure2_slot3;
                            var3 = var4.push;
                            var1 = _closure1_slot12;
                            var2 = var1.PROMPT;
                            var1 = {};
                            var1.currentPrompt = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 418:
                            return var0;
                    }
                };
                var14 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot14;
                var1 = 23;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.SafeAreaPaddingView;
                var4 = {};
                var5 = true;
                var4.top = var5;
                var6 = var9.flex;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var9.container;
                var5[1] = var6;
                var4.style = var5;
                if (var0) {
                    _fun92965_ip = 1224;
                    continue _fun92965
                }
            case 590:
                var6 = _closure1_slot15;
                var5 = _closure1_slot4;
                var0 = {};
                var7 = var9.flex;
                var0.style = var7;
                var10 = _closure1_slot5;
                var7 = {};
                var12 = var9.scrollContainer;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var12.paddingBottom = var13;
                var11[1] = var12;
                var7.contentContainerStyle = var11;
                var12 = {};
                var11 = var9.header;
                var12.style = var11;
                var11 = _closure1_slot14;
                var27 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = 24;
                var13 = var16[var20];
                var13 = var27.bind(var3)(var13);
                var23 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var9.title;
                var13.style = var21;
                var21 = 25;
                var24 = var16[var21];
                var24 = var27.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var16[var21];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.eDVMrA;
                var24 = var25.bind(var26)(var24);
                var13.children = var24;
                var23 = var11.bind(var3)(var23, var13);
                var13 = new Array(2);
                var13[0] = var23;
                var20 = var16[var20];
                var20 = var27.bind(var3)(var20);
                var23 = var20.Text;
                var20 = {
                    'style': null,
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var24 = var9.description;
                var20.style = var24;
                var24 = var16[var21];
                var24 = var27.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var16[var21];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.BozOXu;
                var24 = var25.bind(var26)(var24);
                var20.children = var24;
                var20 = var11.bind(var3)(var23, var20);
                var13[1] = var20;
                var12.children = var13;
                var13 = var6.bind(var3)(var5, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var20 = var9.connectionsList;
                var13.style = var20;
                var20 = var22.map;
                var18 = function(arg0, arg1) { // Environment: var18
                    var4 = _closure1_slot14;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 26;
                    var0 = var6[var0];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var0);
                    var1 = {};
                    var0 = arg0;
                    var1.connection = var0;
                    var0 = _closure2_slot0;
                    var1.guildId = var0;
                    var0 = 27;
                    var0 = var6[var0];
                    var0 = var5.bind(var3)(var0);
                    var0 = var0.GUILD_ONBOARDING;
                    var1.location = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var18 = var20.bind(var22)(var18);
                var13.children = var18;
                var13 = var11.bind(var3)(var5, var13);
                var12[1] = var13;
                var7.children = var12;
                var10 = var6.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = {};
                var13 = var9.footer;
                var12 = new Array(3);
                var12[0] = var13;
                var13 = var9.footerContent;
                var12[1] = var13;
                var13 = {};
                var13.paddingBottom = var17;
                var12[2] = var13;
                var10.style = var12;
                var13 = _closure1_slot1;
                var12 = 28;
                var12 = var16[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = var9.footerButtonText;
                var12.textStyle = var16;
                var17 = var9.footerButton;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = !var15;
                if (!var17) {
                    _fun92965_ip = 1044;
                    continue _fun92965
                }
            case 1041:
                var17 = !var19;
            case 1044:
                if (!var17) {
                    _fun92965_ip = 1053;
                    continue _fun92965
                }
            case 1047:
                var17 = var9.buttonSkip;
            case 1053:
                var16[1] = var17;
                var12.style = var16;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var21];
                var17 = var20.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var21];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                if (var19) {
                    _fun92965_ip = 1134;
                    continue _fun92965
                }
            case 1105:
                if (var15) {
                    _fun92965_ip = 1121;
                    continue _fun92965
                }
            case 1108:
                var15 = var16["5Wxrcd"];
                var15 = var17.bind(var18)(var15);
                _fun92965_ip = 1132;
                continue _fun92965;
            case 1121:
                var19 = var16.PDTjLN;
                var15 = var17.bind(var18)(var19);
            case 1132:
                _fun92965_ip = 1174;
                continue _fun92965;
            case 1134:
                var16 = var16["8SuVoE"];
                var19 = var17.bind(var18)(var16);
                var16 = global;
                var16 = var16.HermesInternal;
                var18 = var16.concat;
                var17 = '';
                var16 = ' 🎉';
                var15 = var18.bind(var17)(var19, var16);
            case 1174:
                var12.text = var15;
                var12.onPress = var14;
                var12 = var11.bind(var3)(var13, var12);
                var10.children = var12;
                var10 = var11.bind(var3)(var5, var10);
                var7[1] = var10;
                var0.children = var7;
                var0 = var6.bind(var3)(var5, var0);
                var4.children = var0;
                var0 = var4;
                _fun92965_ip = 1378;
                continue _fun92965;
            case 1224:
                var7 = _closure1_slot14;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var9.flex;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var9[1] = var10;
                var5.style = var9;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 24;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var10 = 25;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.ZTNur7;
                var10 = var11.bind(var12)(var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4.children = var5;
                var0 = var4;
            case 1378:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4701, 4586, 4519, 1410, 4688, 4583, 4685, 660, 483, 33, 1297, 4703, 671, 4682, 1469, 1568, 566, 4582, 795, 4302, 4687, 4734, 3941, 1234, 9890, 5579, 4873, 2]);