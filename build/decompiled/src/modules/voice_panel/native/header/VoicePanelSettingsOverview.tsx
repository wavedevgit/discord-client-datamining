// modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun111625: for (var _fun111625_ip = 0;;) switch (_fun111625_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111625_ip = 46;
                    continue _fun111625
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111625_ip = 55;
                    continue _fun111625
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111625_ip = 345;
                    continue _fun111625
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111625_ip = 323;
                    continue _fun111625
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111625_ip = 283;
                    continue _fun111625
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111625_ip = 270;
                    continue _fun111625
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
                    _fun111625_ip = 163;
                    continue _fun111625
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111625_ip = 179;
                    continue _fun111625
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111625_ip = 249;
                    continue _fun111625
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111625_ip = 249;
                    continue _fun111625
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111625_ip = 234;
                    continue _fun111625
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111625_ip = 247;
                    continue _fun111625
                }
            case 234:
                var8 = _closure1_slot42;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111625_ip = 265;
                continue _fun111625;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111625_ip = 283;
                continue _fun111625;
            case 270:
                var6 = _closure1_slot42;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111625_ip = 323;
                    continue _fun111625
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
                    _fun111625_ip = 330;
                    continue _fun111625
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111626: for (var _fun111626_ip = 0;;) switch (_fun111626_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111626_ip = 56;
                                continue _fun111626
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
                            _fun111626_ip = 67;
                            continue _fun111626;
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
    var _closure1_slot41 = var0;
    var0 = function arg0, arg1() {
        _fun111627: for (var _fun111627_ip = 0;;) switch (_fun111627_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111627_ip = 23;
                    continue _fun111627
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111627_ip = 33;
                    continue _fun111627
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
                    _fun111627_ip = 70;
                    continue _fun111627
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111627_ip = 55;
                    continue _fun111627
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var1 = function arg0() {
        _fun111628: for (var _fun111628_ip = 0;;) switch (_fun111628_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var4 = var1.channelId;
                var _closure2_slot1 = var4;
                var1 = _closure1_slot21;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 17;
                var2 = var14[var1];
                var7 = var16.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot12;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot12;
                    var0 = var2.getVoiceStatesForChannelAlt;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var0 = var0.bind(var2)(var5, var4);
                    var6 = var0.slice;
                    var3 = 0;
                    var2 = 2;
                    var6 = var6.bind(var0)(var3, var2);
                    var3 = var6.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.user;
                        return var0;
                    };
                    var3 = var3.bind(var6)(var2);
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var6 = var0.length;
                    var0 = var3.length;
                    var7 = var6 - var0;
                    var11 = undefined;
                    var10 = var4;
                    var9 = var5;
                    var8 = var3;
                    var0 = var11[var1](var10, var9, var8, var7, var6);
                    return var0;
                };
                var13 = var6.bind(var7)(var5, var2);
                var1 = var14[var1];
                var6 = var16.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var0, var1);
                var8 = _closure1_slot1;
                var0 = 19;
                var0 = var14[var0];
                var0 = var8.bind(var3)(var0);
                var18 = var0.bind(var3)(var1);
                var0 = 20;
                var0 = var14[var0];
                var2 = var16.bind(var3)(var0);
                var1 = var2.useIsSecureFramesUIEnabled;
                var0 = {};
                var0.channelId = var4;
                var5 = var1.bind(var2)(var0);
                var0 = 21;
                var0 = var14[var0];
                var2 = var16.bind(var3)(var0);
                var1 = var2.useIsCallSecureFramesVerified;
                var0 = {};
                var0.channelId = var4;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot19;
                var6 = 22;
                var0 = var14[var6];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var4 = var9.headerContainer;
                var0.style = var4;
                var10 = _closure1_slot18;
                var12 = 23;
                var4 = var14[var12];
                var7 = var8.bind(var3)(var4);
                var4 = {};
                var12 = var14[var12];
                var12 = var16.bind(var3)(var12);
                var12 = var12.VoicePanelEmojiVariant;
                var12 = var12.VoicePanelSettingsHeader;
                var4.variant = var12;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var12 = _closure1_slot19;
                var7 = var14[var6];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var10 = var9.channelTitleWrapper;
                var7.style = var10;
                var17 = _closure1_slot18;
                var10 = 24;
                var14 = var14[var10];
                var14 = var16.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'heading-lg/bold',
                    'lineClamp': 1,
                    'accessibilityRole': 'header'
                };
                var19 = var9.channelTitle;
                var14.style = var19;
                var14.children = var18;
                var16 = var17.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                if (!var15) {
                    _fun111628_ip = 498;
                    continue _fun111628
                }
            case 391:
                var18 = _closure1_slot18;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 25;
                var16 = var23[var16];
                var16 = var22.bind(var3)(var16);
                var17 = var16.ShieldLockIcon;
                var16 = {};
                var19 = var9.secureFramesIcon;
                var16.style = var19;
                var19 = 'xs';
                var16.size = var19;
                var19 = 26;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.mR9cf3;
                var19 = var20.bind(var21)(var19);
                var16.accessibilityLabel = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 498:
                var14[1] = var15;
                var7.children = var14;
                var7 = var12.bind(var3)(var8, var7);
                var4[1] = var7;
                var12 = _closure1_slot18;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'accessibilityRole': 'summary'
                };
                var14 = var9.channelSubtitle;
                var7.style = var14;
                var7.children = var13;
                var7 = var12.bind(var3)(var8, var7);
                var4[2] = var7;
                if (!var5) {
                    _fun111628_ip = 742;
                    continue _fun111628
                }
            case 588:
                var8 = _closure1_slot19;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var6 = var17[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = var9.secureFrames;
                var6.style = var9;
                var12 = _closure1_slot22;
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot18;
                var16 = _closure1_slot0;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'status-positive'
                };
                var13 = 26;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["3BogKe"];
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 742:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot43 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.AnalyticsSections;
    var _closure1_slot13 = var8;
    var8 = var4.Permissions;
    var _closure1_slot14 = var8;
    var4 = var4.RPC_APPLICATION_LOGGING_CATEGORY;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isStreamParticipant;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot18 = var9;
    var8 = var4.jsxs;
    var _closure1_slot19 = var8;
    var4 = var4.Fragment;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var10 = var5.bind(var0)(var4);
    var8 = var10.createStyles;
    var4 = {};
    var15 = 'center';
    var11 = {
        'paddingTop': 24,
        'alignItems': 'center'
    };
    var4.headerContainer = var11;
    var14 = 16;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginTop': 16
    };
    var4.channelTitleWrapper = var11;
    var11 = {};
    var11.textAlign = var15;
    var4.channelTitle = var11;
    var11 = {
        'marginTop': 4,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var4.channelSubtitle = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'marginTop': 8,
        'padding': 4,
        'gap': 4
    };
    var15 = 15;
    var16 = var6[var15];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var16;
    var15 = var6[var15];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11.borderRadius = var15;
    var4.secureFrames = var11;
    var11 = {};
    var11.marginStart = var13;
    var4.secureFramesIcon = var11;
    var4 = var8.bind(var10)(var4);
    var _closure1_slot21 = var4;
    var4 = var6[var14];
    var4 = var5.bind(var0)(var4);
    var8 = var4.LockIcon;
    var4 = {
        'size': 'xxs',
        'color': 'status-positive'
    };
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot22 = var4;
    var8 = 27;
    var4 = var6[var8];
    var4 = var5.bind(var0)(var4);
    var10 = var4.TableRowIcon;
    var4 = {};
    var15 = 28;
    var11 = var6[var15];
    var11 = var5.bind(var0)(var11);
    var11 = var11.WrenchIcon;
    var4.IconComponent = var11;
    var13 = 29;
    var11 = var6[var13];
    var11 = var12.bind(var0)(var11);
    var4.source = var11;
    var4 = var9.bind(var0)(var10, var4);
    var _closure1_slot23 = var4;
    var4 = 30;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot24 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.WrenchIcon;
    var10.IconComponent = var15;
    var13 = var6[var13];
    var13 = var12.bind(var0)(var13);
    var10.source = var13;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot25 = var10;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot26 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var13 = 38;
    var13 = var6[var13];
    var13 = var5.bind(var0)(var13);
    var13 = var13.SettingsIcon;
    var10.IconComponent = var13;
    var13 = 39;
    var15 = var6[var13];
    var15 = var12.bind(var0)(var15);
    var10.source = var15;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot27 = var10;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot28 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var15 = 40;
    var15 = var6[var15];
    var15 = var12.bind(var0)(var15);
    var10.source = var15;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot29 = var10;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot30 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var15 = 41;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.HeadphonesSlashIcon;
    var10.IconComponent = var15;
    var15 = 42;
    var15 = var6[var15];
    var15 = var12.bind(var0)(var15);
    var10.source = var15;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot31 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var15 = 43;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.VideoIcon;
    var10.IconComponent = var15;
    var15 = 44;
    var15 = var6[var15];
    var15 = var12.bind(var0)(var15);
    var10.source = var15;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot32 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var15 = var6[var14];
    var15 = var5.bind(var0)(var15);
    var15 = var15.LockIcon;
    var10.IconComponent = var15;
    var15 = var6[var13];
    var15 = var12.bind(var0)(var15);
    var10.source = var15;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot33 = var10;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot34 = var10;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowIcon;
    var10 = {};
    var14 = var6[var14];
    var14 = var5.bind(var0)(var14);
    var14 = var14.LockIcon;
    var10.IconComponent = var14;
    var13 = var6[var13];
    var13 = var12.bind(var0)(var13);
    var10.source = var13;
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot35 = var10;
    var10 = var6[var4];
    var10 = var5.bind(var0)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot36 = var10;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.TableRowIcon;
    var8 = {};
    var11 = 45;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.GroupPlusIcon;
    var8.IconComponent = var11;
    var11 = 46;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var8.source = var11;
    var11 = 'blurple';
    var8.variant = var11;
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot37 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.TableRowArrow;
    var4 = {};
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot38 = var4;
    var8 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            _fun111633: for (var _fun111633_ip = 0;;) switch (_fun111633_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.stringify;
                    var5 = _closure1_slot15;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var2.bind(var3)(var1);
                    var2 = '';
                    if (!(var2 !== var1)) {
                        _fun111633_ip = 124;
                        continue _fun111633
                    }
                case 56:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 33;
                    var2 = var5[var2];
                    var6 = var3.bind(var0)(var2);
                    var2 = var6.closeVoicePanelSettingsActionSheet;
                    var2 = var2.bind(var6)();
                    var2 = 34;
                    var2 = var5[var2];
                    var5 = var3.bind(var0)(var2);
                    var3 = var5.showShareActionSheet;
                    var2 = {};
                    var2.message = var1;
                    var1 = 'Activity Logs';
                    var1 = var3.bind(var5)(var2, var1);
                    _fun111633_ip = 222;
                    continue _fun111633;
                case 124:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 32;
                    var1 = var8[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 26;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["i+9VWy"];
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                case 222:
                    return var0;
            }
        };
        var0 = new Array(0);
        var5 = var2.bind(var3)(var1, var0);
        var3 = _closure1_slot18;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 35;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.onPress = var5;
        var5 = _closure1_slot23;
        var0.icon = var5;
        var5 = 26;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.iQzQs3;
        var5 = var6.bind(var7)(var5);
        var0.label = var5;
        var4 = _closure1_slot24;
        var0.trailing = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4 = {};
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot39 = var4;
    var8 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 17;
        var1 = var8[var1];
        var3 = undefined;
        var6 = var7.bind(var3)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getShowActivitiesDebugOverlay;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var5.bind(var6)(var2, var1);
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var1.type = var4;
            var4 = arg0;
            var1.visible = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var5 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot18;
        var0 = 37;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var4 = _closure1_slot25;
        var0.icon = var4;
        var4 = 26;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var4];
        var9 = var7.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9["qv5/SP"];
        var9 = var10.bind(var11)(var9);
        var0.accessibilityHint = var9;
        var0.value = var6;
        var0.onValueChange = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["qv5/SP"];
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = {};
    var4 = var9.bind(var0)(var8, var4);
    var _closure1_slot40 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun111637: for (var _fun111637_ip = 0;;) switch (_fun111637_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guildId;
                var _closure2_slot0 = var12;
                var11 = var0.channelId;
                var _closure2_slot1 = var11;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var4 = var2[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var15
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var34 = var6.bind(var7)(var5, var4);
                var _closure2_slot2 = var34;
                var4 = 47;
                var4 = var2[var4];
                var4 = var1.bind(var3)(var4);
                var5 = var4.DeveloperMode;
                var4 = var5.useSetting;
                var7 = var4.bind(var5)();
                var4 = 48;
                var4 = var2[var4];
                var6 = var1.bind(var3)(var4);
                var5 = var6.useHangStatusExperiment;
                var4 = {};
                var4.guildId = var12;
                var8 = 'VoicePanelSettingsOverview';
                var4.location = var8;
                var4 = var5.bind(var6)(var4);
                var24 = var4.enableHangStatus;
                var4 = var2[var0];
                var8 = var1.bind(var3)(var4);
                var6 = var8.useStateFromStores;
                var4 = _closure1_slot12;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var15
                    var3 = _closure1_slot12;
                    var2 = var3.getVoiceStatesForChannelAlt;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var20 = var6.bind(var8)(var5, var4);
                var _closure2_slot3 = var20;
                var4 = var2[var0];
                var9 = var1.bind(var3)(var4);
                var8 = var9.useStateFromStoresArray;
                var4 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var4;
                var5 = new Array(2);
                var5[0] = var34;
                var5[1] = var20;
                var4 = function() { // Environment: var15
                    _fun111640: for (var _fun111640_ip = 0;;) switch (_fun111640_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var7 = null;
                            if (!(var7 != var0)) {
                                _fun111640_ip = 194;
                                continue _fun111640
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun111640_ip = 194;
                                continue _fun111640
                            }
                        case 36:
                            var0 = global;
                            var3 = var0.Set;
                            var4 = _closure2_slot3;
                            var2 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.user;
                                var0 = var0.id;
                                return var0;
                            };
                            var11 = var2.bind(var4)(var0);
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var12 = var2;
                            var0 = new var12[var3](var11, var10);
                            var6 = var0 instanceof Object ? var0 : var2;
                            var0 = new Array(0);
                            var2 = _closure1_slot41;
                            var1 = _closure2_slot2;
                            var1 = var1.recipients;
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun111640_ip = 192;
                                continue _fun111640
                            }
                        case 127:
                            var10 = var2.value;
                            var8 = _closure1_slot11;
                            var1 = var8.getUser;
                            var8 = var1.bind(var8)(var10);
                            var1 = var7 == var8;
                            if (var1) {
                                _fun111640_ip = 164;
                                continue _fun111640
                            }
                        case 154:
                            var9 = var6.has;
                            var1 = var9.bind(var6)(var10);
                        case 164:
                            if (var1) {
                                _fun111640_ip = 177;
                                continue _fun111640
                            }
                        case 167:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var8);
                        case 177:
                            var8 = var3.bind(var4)();
                            var1 = var8.done;
                            var2 = var8;
                            if (!var1) {
                                _fun111640_ip = 127;
                                continue _fun111640
                            }
                        case 192:
                            return var0;
                        case 194:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var18 = var8.bind(var9)(var6, var4, var5);
                var4 = var2[var0];
                var8 = var1.bind(var3)(var4);
                var6 = var8.useStateFromStores;
                var4 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var15
                    var1 = _closure1_slot9;
                    var0 = var1.isSelfDeaf;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var36 = var6.bind(var8)(var5, var4);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = function() { // Environment: var15
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.toggleSelfDeaf;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var4 = new Array(0);
                var35 = var6.bind(var8)(var5, var4);
                var4 = var2[var0];
                var9 = var1.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var4;
                var5 = function() { // Environment: var15
                    var2 = _closure1_slot5;
                    var1 = var2.getVoiceParticipantsHidden;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var32 = var8.bind(var9)(var6, var5);
                var _closure2_slot4 = var32;
                var5 = var2[var0];
                var8 = var1.bind(var3)(var5);
                var6 = var8.useStateFromStores;
                var5 = new Array(2);
                var5[0] = var4;
                var4 = _closure1_slot7;
                var5[1] = var4;
                var4 = function() { // Environment: var15
                    _fun111645: for (var _fun111645_ip = 0;;) switch (_fun111645_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = var3.getSelectedParticipant;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var3)(var0);
                            var3 = _closure1_slot16;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var0 = null;
                            if (!var3) {
                                _fun111645_ip = 78;
                                continue _fun111645
                            }
                        case 41:
                            var3 = var1.stream;
                            var3 = var3.ownerId;
                            var5 = _closure1_slot7;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun111645_ip = 78;
                                continue _fun111645
                            }
                        case 73:
                            var0 = var1.id;
                        case 78:
                            return var0;
                    }
                };
                var22 = var6.bind(var8)(var5, var4);
                var _closure2_slot5 = var22;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var32;
                var4 = function() { // Environment: var15
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 50;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.toggleVoiceParticipantsHidden;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var1 = !var1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var31 = var6.bind(var8)(var4, var5);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var11;
                var4 = function() { // Environment: var15
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 33;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.closeVoicePanelSettingsActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot1;
                    var1 = 51;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var33 = var6.bind(var8)(var4, var5);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var12;
                var4 = function() { // Environment: var15
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 33;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.closeVoicePanelSettingsActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 52;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showVoiceSettingsActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var16 = var6.bind(var8)(var4, var5);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var11;
                var4 = function() { // Environment: var15
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 53;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 55;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 54;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot17;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.channelId = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var30 = var6.bind(var8)(var4, var5);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var22;
                var4 = function() { // Environment: var15
                    _fun111650: for (var _fun111650_ip = 0;;) switch (_fun111650_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111650_ip = 58;
                                continue _fun111650
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 56;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openSecureFramesStreamVerification;
                            var1 = _closure2_slot5;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = var6.bind(var8)(var4, var5);
                var4 = 57;
                var5 = var2[var4];
                var6 = var1.bind(var3)(var5);
                var5 = var6.useIsCallRTCConnectionEmpty;
                var25 = var5.bind(var6)();
                var4 = var2[var4];
                var5 = var1.bind(var3)(var4);
                var4 = var5.useIsStreamRTCConnectionEmpty;
                var21 = var4.bind(var5)(var22);
                var4 = var2[var0];
                var9 = var1.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var4;
                var5 = function() { // Environment: var15
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var4 = new Array(0);
                var9 = var8.bind(var9)(var6, var5, var4);
                var4 = _closure1_slot1;
                var5 = 58;
                var5 = var2[var5];
                var5 = var4.bind(var3)(var5);
                var27 = var5.bind(var3)(var34);
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
                var8 = var13.useStateFromStores;
                var0 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var0;
                var5 = new Array(1);
                var5[0] = var11;
                var0 = function() { // Environment: var15
                    var3 = _closure1_slot10;
                    var2 = var3.canWithPartialContext;
                    var0 = _closure1_slot14;
                    var1 = var0.MANAGE_CHANNELS;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.channelId = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var8.bind(var13)(var6, var0, var5);
                var0 = 59;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useCanInviteMembers;
                var19 = var0.bind(var5)(var11);
                var0 = 60;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useInviteMembersCallback;
                var23 = var0.bind(var5)(var11);
                var0 = 61;
                var0 = var2[var0];
                var0 = var4.bind(var3)(var0);
                var6 = var0.bind(var3)(var34);
                var0 = 20;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useIsSecureFramesUIEnabled;
                var0 = {};
                var0.channelId = var11;
                var17 = var1.bind(var2)(var0);
                var _closure2_slot6 = var17;
                var2 = _closure1_slot19;
                var1 = _closure1_slot20;
                var0 = {};
                var8 = _closure1_slot18;
                var5 = _closure1_slot43;
                var4 = {};
                var4.guildId = var12;
                var4.channelId = var11;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(6);
                var4[0] = var5;
                var11 = null;
                var5 = null;
                if (!var6) {
                    _fun111637_ip = 953;
                    continue _fun111637
                }
            case 864:
                var12 = _closure1_slot18;
                var8 = _closure1_slot0;
                var37 = _closure1_slot2;
                var6 = 62;
                var6 = var37[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.VoicePanelFormSection;
                var6 = {};
                var29 = _closure1_slot18;
                var28 = _closure1_slot1;
                var14 = 63;
                var14 = var37[var14];
                var28 = var28.bind(var3)(var14);
                var14 = {};
                var14.channel = var34;
                var34 = _closure1_slot13;
                var34 = var34.CHANNEL_ACTION_SHEET;
                var14.analyticsSection = var34;
                var14 = var29.bind(var3)(var28, var14);
                var6.children = var14;
                var5 = var12.bind(var3)(var8, var6);
            case 953:
                var4[1] = var5;
                var5 = var13;
                if (var13) {
                    _fun111637_ip = 966;
                    continue _fun111637
                }
            case 963:
                var5 = var27;
            case 966:
                if (!var5) {
                    _fun111637_ip = 1230;
                    continue _fun111637
                }
            case 972:
                var12 = _closure1_slot18;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 62;
                var6 = var14[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.VoicePanelFormSection;
                var6 = {};
                if (!var13) {
                    _fun111637_ip = 1220;
                    continue _fun111637
                }
            case 1010:
                var29 = _closure1_slot18;
                var38 = _closure1_slot0;
                var39 = _closure1_slot2;
                var14 = 35;
                var14 = var39[var14];
                var14 = var38.bind(var3)(var14);
                var28 = var14.TableRow;
                var14 = {};
                var14.onPress = var33;
                var37 = _closure1_slot18;
                var34 = _closure1_slot1;
                var40 = 23;
                var33 = var39[var40];
                var34 = var34.bind(var3)(var33);
                var33 = {};
                var40 = var39[var40];
                var40 = var38.bind(var3)(var40);
                var40 = var40.VoicePanelEmojiVariant;
                var40 = var40.VoicePanelSettingsRowIcon;
                var33.variant = var40;
                var33 = var37.bind(var3)(var34, var33);
                var14.icon = var33;
                var33 = 26;
                var34 = var39[var33];
                var34 = var38.bind(var3)(var34);
                var40 = var34.intl;
                var37 = var40.string;
                var34 = var39[var33];
                var34 = var38.bind(var3)(var34);
                var34 = var34.t;
                var34 = var34.XPDhcc;
                var34 = var37.bind(var40)(var34);
                var14.label = var34;
                var34 = var39[var33];
                var34 = var38.bind(var3)(var34);
                var37 = var34.intl;
                var34 = var37.string;
                var33 = var39[var33];
                var33 = var38.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.w7ZEot;
                var33 = var34.bind(var37)(var33);
                var14.subLabel = var33;
                var33 = _closure1_slot26;
                var14.trailing = var33;
                var13 = var29.bind(var3)(var28, var14);
            case 1220:
                var6.children = var13;
                var5 = var12.bind(var3)(var8, var6);
            case 1230:
                var4[2] = var5;
                var12 = _closure1_slot19;
                var38 = _closure1_slot0;
                var33 = _closure1_slot2;
                var6 = 62;
                var5 = var33[var6];
                var5 = var38.bind(var3)(var5);
                var8 = var5.VoicePanelFormSection;
                var5 = {};
                var29 = _closure1_slot18;
                var14 = 35;
                var13 = var33[var14];
                var13 = var38.bind(var3)(var13);
                var28 = var13.TableRow;
                var13 = {};
                var13.onPress = var16;
                var16 = _closure1_slot27;
                var13.icon = var16;
                var16 = 26;
                var34 = var33[var16];
                var34 = var38.bind(var3)(var34);
                var39 = var34.intl;
                var37 = var39.string;
                var34 = var33[var16];
                var34 = var38.bind(var3)(var34);
                var34 = var34.t;
                var34 = var34.NiTd0e;
                var34 = var37.bind(var39)(var34);
                var13.label = var34;
                var34 = var33[var16];
                var34 = var38.bind(var3)(var34);
                var37 = var34.intl;
                var34 = var37.string;
                var33 = var33[var16];
                var33 = var38.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33["16SG+O"];
                var33 = var34.bind(var37)(var33);
                var13.subLabel = var33;
                var33 = _closure1_slot28;
                var13.trailing = var33;
                var28 = var29.bind(var3)(var28, var13);
                var13 = new Array(6);
                var13[0] = var28;
                if (!var24) {
                    _fun111637_ip = 1431;
                    continue _fun111637
                }
            case 1428:
                var24 = var27;
            case 1431:
                if (!var24) {
                    _fun111637_ip = 1545;
                    continue _fun111637
                }
            case 1434:
                var29 = _closure1_slot18;
                var38 = _closure1_slot0;
                var33 = _closure1_slot2;
                var27 = var33[var14];
                var27 = var38.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {};
                var34 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 64;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.showHangStatusPickerActionSheet;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2.channelId = var1;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var27.onPress = var34;
                var34 = _closure1_slot29;
                var27.icon = var34;
                var34 = var33[var16];
                var34 = var38.bind(var3)(var34);
                var37 = var34.intl;
                var34 = var37.string;
                var33 = var33[var16];
                var33 = var38.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.pwvT9g;
                var33 = var34.bind(var37)(var33);
                var27.label = var33;
                var33 = _closure1_slot30;
                var27.trailing = var33;
                var24 = var29.bind(var3)(var28, var27);
            case 1545:
                var13[1] = var24;
                var34 = _closure1_slot18;
                var33 = _closure1_slot0;
                var29 = _closure1_slot2;
                var24 = 37;
                var27 = var29[var24];
                var27 = var33.bind(var3)(var27);
                var28 = var27.TableSwitchRow;
                var27 = {};
                var37 = _closure1_slot31;
                var27.icon = var37;
                var37 = var29[var16];
                var37 = var33.bind(var3)(var37);
                var39 = var37.intl;
                var38 = var39.string;
                var37 = var29[var16];
                var37 = var33.bind(var3)(var37);
                var37 = var37.t;
                var37 = var37.wjcRFX;
                var37 = var38.bind(var39)(var37);
                var27.accessibilityHint = var37;
                var27.value = var36;
                var27.onValueChange = var35;
                var35 = var29[var16];
                var35 = var33.bind(var3)(var35);
                var37 = var35.intl;
                var36 = var37.string;
                var35 = var29[var16];
                var35 = var33.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35.wjcRFX;
                var35 = var36.bind(var37)(var35);
                var27.label = var35;
                var35 = var29[var16];
                var35 = var33.bind(var3)(var35);
                var37 = var35.intl;
                var36 = var37.string;
                var35 = var29[var16];
                var35 = var33.bind(var3)(var35);
                var35 = var35.t;
                var35 = var35.M3VN2U;
                var35 = var36.bind(var37)(var35);
                var27.subLabel = var35;
                var27 = var34.bind(var3)(var28, var27);
                var13[2] = var27;
                var28 = _closure1_slot18;
                var24 = var29[var24];
                var24 = var33.bind(var3)(var24);
                var27 = var24.TableSwitchRow;
                var24 = {};
                var34 = _closure1_slot32;
                var24.icon = var34;
                var34 = var29[var16];
                var34 = var33.bind(var3)(var34);
                var36 = var34.intl;
                var35 = var36.string;
                var34 = var29[var16];
                var34 = var33.bind(var3)(var34);
                var34 = var34.t;
                var34 = var34.ZMTRyc;
                var34 = var35.bind(var36)(var34);
                var24.accessibilityHint = var34;
                var24.value = var32;
                var24.onValueChange = var31;
                var31 = var29[var16];
                var31 = var33.bind(var3)(var31);
                var34 = var31.intl;
                var32 = var34.string;
                var31 = var29[var16];
                var31 = var33.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.ZMTRyc;
                var31 = var32.bind(var34)(var31);
                var24.label = var31;
                var31 = var29[var16];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var29 = var29[var16];
                var29 = var33.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.MlpCFS;
                var29 = var31.bind(var32)(var29);
                var24.subLabel = var29;
                var24 = var28.bind(var3)(var27, var24);
                var13[3] = var24;
                var24 = var17;
                if (!var17) {
                    _fun111637_ip = 1958;
                    continue _fun111637
                }
            case 1954:
                var24 = var11 == var22;
            case 1958:
                if (!var24) {
                    _fun111637_ip = 1964;
                    continue _fun111637
                }
            case 1961:
                var24 = !var25;
            case 1964:
                if (!var24) {
                    _fun111637_ip = 2125;
                    continue _fun111637
                }
            case 1970:
                var28 = _closure1_slot18;
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var25 = var29[var14];
                var25 = var32.bind(var3)(var25);
                var27 = var25.TableRow;
                var25 = {};
                var25.onPress = var30;
                var30 = _closure1_slot33;
                var25.icon = var30;
                var30 = var29[var16];
                var30 = var32.bind(var3)(var30);
                var33 = var30.intl;
                var31 = var33.string;
                var30 = var29[var16];
                var30 = var32.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.cTQI5t;
                var30 = var31.bind(var33)(var30);
                var25.label = var30;
                var30 = var29[var16];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var16];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.Etxti2;
                var29 = var30.bind(var31)(var29);
                var25.subLabel = var29;
                var29 = _closure1_slot34;
                var25.trailing = var29;
                var24 = var28.bind(var3)(var27, var25);
            case 2125:
                var13[4] = var24;
                if (!var17) {
                    _fun111637_ip = 2136;
                    continue _fun111637
                }
            case 2132:
                var17 = var11 != var22;
            case 2136:
                if (!var17) {
                    _fun111637_ip = 2142;
                    continue _fun111637
                }
            case 2139:
                var17 = !var21;
            case 2142:
                if (!var17) {
                    _fun111637_ip = 2303;
                    continue _fun111637
                }
            case 2148:
                var24 = _closure1_slot18;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = var25[var14];
                var21 = var28.bind(var3)(var21);
                var22 = var21.TableRow;
                var21 = {};
                var21.onPress = var26;
                var26 = _closure1_slot35;
                var21.icon = var26;
                var26 = var25[var16];
                var26 = var28.bind(var3)(var26);
                var29 = var26.intl;
                var27 = var29.string;
                var26 = var25[var16];
                var26 = var28.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.QogHld;
                var26 = var27.bind(var29)(var26);
                var21.label = var26;
                var26 = var25[var16];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var16];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["j5+1ed"];
                var25 = var26.bind(var27)(var25);
                var21.subLabel = var25;
                var25 = _closure1_slot36;
                var21.trailing = var25;
                var17 = var24.bind(var3)(var22, var21);
            case 2303:
                var13[5] = var17;
                var5.children = var13;
                var5 = var12.bind(var3)(var8, var5);
                var4[3] = var5;
                var8 = var20.length;
                var5 = 0;
                var5 = var8 > var5;
                if (var5) {
                    _fun111637_ip = 2338;
                    continue _fun111637
                }
            case 2335:
                var5 = var19;
            case 2338:
                if (!var5) {
                    _fun111637_ip = 2641;
                    continue _fun111637
                }
            case 2344:
                var13 = _closure1_slot19;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = var17[var6];
                var8 = var21.bind(var3)(var8);
                var12 = var8.VoicePanelFormSection;
                var8 = {};
                var22 = var17[var16];
                var22 = var21.bind(var3)(var22);
                var26 = var22.intl;
                var25 = var26.formatToPlainString;
                var17 = var17[var16];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var24 = var17.AWmdd9;
                var21 = {};
                var28 = var20.length;
                var17 = global;
                var22 = var17.HermesInternal;
                var27 = var22.concat;
                var22 = '';
                var27 = var27.bind(var22)(var28);
                var21.count = var27;
                var21 = var25.bind(var26)(var24, var21);
                var17 = var17.HermesInternal;
                var17 = var17.concat;
                var17 = var17.bind(var22)(var21);
                var8.title = var17;
                var17 = null;
                if (!var19) {
                    _fun111637_ip = 2581;
                    continue _fun111637
                }
            case 2477:
                var21 = _closure1_slot18;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = var22[var14];
                var14 = var25.bind(var3)(var14);
                var19 = var14.TableRow;
                var14 = {};
                var14.onPress = var23;
                var23 = _closure1_slot37;
                var14.icon = var23;
                var23 = var22[var16];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var16];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["f1+QIK"];
                var22 = var23.bind(var24)(var22);
                var14.label = var22;
                var22 = _closure1_slot38;
                var14.trailing = var22;
                var17 = var21.bind(var3)(var19, var14);
            case 2581:
                var14 = new Array(3);
                var14[0] = var17;
                var19 = var20.map;
                var17 = function(arg0) { // Environment: var15
                    _fun111654: for (var _fun111654_ip = 0;;) switch (_fun111654_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot18;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 62;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.MemberRowItem;
                            var1 = {};
                            var5 = var0.user;
                            var1.user = var5;
                            var5 = var0.voiceState;
                            var5 = var5.selfStream;
                            var1.selfStream = var5;
                            var6 = var0.nick;
                            var5 = null;
                            var7 = var5 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun111654_ip = 86;
                                continue _fun111654
                            }
                        case 83:
                            var5 = var6;
                        case 86:
                            var1.nick = var5;
                            var6 = _closure2_slot1;
                            var1.channelId = var6;
                            var6 = _closure2_slot0;
                            var1.guildId = var6;
                            var5 = _closure2_slot6;
                            var1.showSecureFramesUI = var5;
                            var0 = var0.user;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var17 = var19.bind(var20)(var17);
                var14[1] = var17;
                var17 = var18.map;
                var15 = function(arg0) { // Environment: var15
                    var0 = arg0;
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 62;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.MemberRowItem;
                    var1 = {};
                    var1.user = var0;
                    var6 = _closure2_slot1;
                    var1.channelId = var6;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = true;
                    var1.notConnected = var5;
                    var1.showRing = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15 = var17.bind(var18)(var15);
                var14[2] = var15;
                var8.children = var14;
                var5 = var13.bind(var3)(var12, var8);
            case 2641:
                var4[4] = var5;
                var5 = null;
                if (!var7) {
                    _fun111637_ip = 2762;
                    continue _fun111637
                }
            case 2650:
                var8 = _closure1_slot19;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = var12[var6];
                var6 = var15.bind(var3)(var6);
                var7 = var6.VoicePanelFormSection;
                var6 = {};
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.J6rqB7;
                var12 = var13.bind(var14)(var12);
                var6.title = var12;
                var11 = null;
                if (!var9) {
                    _fun111637_ip = 2736;
                    continue _fun111637
                }
            case 2732:
                var11 = _closure1_slot39;
            case 2736:
                var9 = new Array(2);
                var9[0] = var11;
                var10 = _closure1_slot40;
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2762:
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 65;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VoicePanelSettingsOverviewHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 3945, 7933, 1216, 1372, 3473, 3093, 1621, 3523, 660, 3520, 8569, 33, 1297, 671, 4834, 566, 14337, 4768, 8568, 8635, 6550, 14338, 4852, 8614, 1234, 4883, 10976, 6584, 4884, 12, 3150, 14334, 7603, 4876, 806, 5344, 5434, 14339, 14340, 8706, 14341, 8598, 11755, 9069, 9070, 1348, 3611, 8573, 7918, 6558, 11760, 3279, 14342, 1307, 8616, 8642, 14343, 14344, 14329, 9803, 8928, 14311, 14345, 2]);