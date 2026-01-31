// modules/now_playing/native/UserActivitySpotify.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var5 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var14;
    var0 = function arg0, arg1, arg2() {
        _fun62316: for (var _fun62316_ip = 0;;) switch (_fun62316_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot7;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot6;
                var0 = _closure1_slot17;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun62316_ip = 51;
                    continue _fun62316
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun62316_ip = 92;
                continue _fun62316;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun62316_ip = 71;
                    continue _fun62316
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot7;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        _fun62317: for (var _fun62317_ip = 0;;) switch (_fun62317_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun62317_ip = 74;
                continue _fun62317;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var11 = function() {
        var2 = _closure1_slot9;
        var1 = var2.canOpenURL;
        var5 = _closure1_slot10;
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var0 = ':';
        var0 = var4.bind(var3)(var5, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var11;
    var10 = function() {
        var2 = _closure1_slot2;
        var3 = _closure1_slot3;
        var0 = 9;
        var1 = var3[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getConstants;
        var1 = var1.bind(var2)();
        var6 = var1.Identifier;
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var5 = _closure1_slot11;
        var4 = var5.INSTALL_ATTRIBUTION;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = true;
        var1.rejectWithError = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot19 = var10;
    var9 = function arg0, arg1, arg2() {
        _fun62322: for (var _fun62322_ip = 0;;) switch (_fun62322_ip) {
            case 0:
                var8 = arg1;
                var7 = arg2;
                var0 = arg0;
                if (var0) {
                    _fun62322_ip = 71;
                    continue _fun62322
                }
            case 15:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.openURL;
                var5 = _closure1_slot11;
                var4 = var5.WEB_OPEN;
                var0 = 'mobile';
                var0 = var4.bind(var5)(var8, var7, var0);
                var0 = var2.bind(var3)(var0);
                _fun62322_ip = 133;
                continue _fun62322;
            case 71:
                var3 = _closure1_slot9;
                var2 = var3.openURL;
                var6 = _closure1_slot11;
                var5 = var6.PLAYER_OPEN;
                var10 = true;
                var9 = 'mobile';
                var13 = var6;
                var12 = var8;
                var11 = var7;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                var3 = var2.bind(var3)(var1);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 133:
                return var0;
        }
    };
    var _closure1_slot20 = var9;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.sync_id;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot18;
        var0 = undefined;
        var4 = var2.bind(var0)();
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var4 = _closure1_slot20;
            var0 = _closure1_slot12;
            var3 = var0.TRACK;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var4.bind(var1)(var0, var3, var2);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() { // Environment: var1
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot21 = var8;
    var7 = function arg0, arg1, arg2() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var2 = _closure1_slot18;
        var0 = undefined;
        var4 = var2.bind(var0)();
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSpotifyMetadataFromActivity;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.artist_ids;
                var0 = _closure2_slot2;
                var4 = var1[var0];
                var3 = _closure1_slot20;
                var2 = _closure3_slot0;
                var0 = _closure1_slot12;
                var1 = var0.ARTIST;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1, var4);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() { // Environment: var1
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot22 = var7;
    var6 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot18;
        var0 = undefined;
        var4 = var2.bind(var0)();
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSpotifyMetadataFromActivity;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var4 = var0.album_id;
                var3 = _closure1_slot20;
                var2 = _closure3_slot0;
                var0 = _closure1_slot12;
                var1 = var0.ALBUM;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1, var4);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() { // Environment: var1
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot23 = var6;
    var0 = global;
    var15 = var0.Object;
    var12 = var15.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var15)(var2, var0, var3);
    var0 = 0;
    var3 = var14[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var14[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var14[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var14[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var14[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var14[var3];
    var12 = var4.bind(var0)(var3);
    var3 = 6;
    var3 = var14[var3];
    var3 = var13.bind(var0)(var3);
    var4 = var3.Linking;
    var _closure1_slot9 = var4;
    var5 = var3.StyleSheet;
    var3 = 7;
    var3 = var14[var3];
    var3 = var13.bind(var0)(var3);
    var4 = var3.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot10 = var4;
    var4 = var3.SpotifyEndpoints;
    var _closure1_slot11 = var4;
    var3 = var3.SpotifyResourceTypes;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var14[var3];
    var3 = var13.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot13 = var4;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var4 = var5.create;
    var3 = {};
    var15 = {
        'height': 16,
        'marginRight': 8,
        'width': 16
    };
    var3.buttonIcon = var15;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot15 = var3;
    var4 = var12.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot16;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var1 = function() { // Environment: var1
                var0 = _closure3_slot0;
                var0 = var0.props;
                var0 = var0.activity;
                var0 = var0.sync_id;
                var _closure4_slot0 = var0;
                var2 = _closure1_slot18;
                var0 = undefined;
                var4 = var2.bind(var0)();
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    _fun62338: for (var _fun62338_ip = 0;;) switch (_fun62338_ip) {
                        case 0:
                            var0 = arg0;
                            if (var0) {
                                _fun62338_ip = 62;
                                continue _fun62338
                            }
                        case 9:
                            var0 = _closure1_slot19;
                            var3 = undefined;
                            var0 = var0.bind(var3)();
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 11;
                            var0 = var4[var0];
                            var3 = var2.bind(var3)(var0);
                            var2 = var3.openURL;
                            var0 = _closure1_slot11;
                            var0 = var0.APP_STORE;
                            var0 = var2.bind(var3)(var0);
                            _fun62338_ip = 128;
                            continue _fun62338;
                        case 62:
                            var3 = _closure1_slot9;
                            var2 = var3.openURL;
                            var6 = _closure1_slot11;
                            var5 = var6.PLAYER_OPEN;
                            var1 = _closure1_slot12;
                            var4 = var1.TRACK;
                            var1 = _closure4_slot0;
                            var1 = var5.bind(var6)(var4, var1);
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.catch;
                            var1 = function() { // Environment: var1
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 128:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.handlePress = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'renderIcon';
        var4.key = var0;
        var0 = function() {
            var3 = _closure1_slot13;
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var7 = 13;
            var0 = var6[var7];
            var2 = undefined;
            var1 = var5.bind(var2)(var0);
            var0 = {};
            var7 = var6[var7];
            var7 = var5.bind(var2)(var7);
            var7 = var7.Sizes;
            var7 = var7.CUSTOM;
            var0.size = var7;
            var4 = _closure1_slot15;
            var4 = var4.buttonIcon;
            var0.style = var4;
            var4 = 14;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var0.source = var4;
            var4 = true;
            var0.disableColor = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            var4 = this;
            var0 = var4.props;
            var12 = var0.activity;
            var3 = _closure1_slot13;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var5 = 15;
            var0 = var7[var5];
            var2 = undefined;
            var1 = var6.bind(var2)(var0);
            var0 = {};
            var9 = var4.renderIcon;
            var0.renderIcon = var9;
            var9 = _closure1_slot0;
            var8 = 16;
            var10 = var7[var8];
            var10 = var9.bind(var2)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var8 = var7[var8];
            var8 = var9.bind(var2)(var8);
            var8 = var8.t;
            var9 = var8.LEgD7t;
            var8 = {};
            var12 = var12.name;
            var8.platform = var12;
            var8 = var10.bind(var11)(var9, var8);
            var0.text = var8;
            var8 = var4.props;
            var8 = var8.style;
            var0.style = var8;
            var5 = var7[var5];
            var5 = var6.bind(var2)(var5);
            var5 = var5.Sizes;
            var5 = var5.SMALL;
            var0.size = var5;
            var4 = var4.handlePress;
            var0.onPress = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var3.bind(var0)(var4);
    var4 = var12.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot16;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot21;
                var0 = _closure3_slot0;
                var0 = var0.props;
                var1 = var0.activity;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.handleOpenSpotifyTrack = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = var0.props;
            var4 = var0.text;
            var0 = var0.onPress;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.LegacyText;
            var0 = {};
            var5 = function() {
                _fun62347: for (var _fun62347_ip = 0;;) switch (_fun62347_ip) {
                    case 0:
                        var2 = _closure3_slot1;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun62347_ip = 23;
                            continue _fun62347
                        }
                    case 13:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 23:
                        var1 = _closure3_slot0;
                        var0 = var1.handleOpenSpotifyTrack;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPress = var5;
            var5 = true;
            var0.suppressHighlighting = var5;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var3.bind(var0)(var4);
    var15 = var12.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot16;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var1 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var0 = var0.props;
                var4 = _closure1_slot22;
                var3 = var0.activity;
                var2 = var0.userId;
                var0 = undefined;
                var1 = arg0;
                var1 = var4.bind(var0)(var3, var2, var1);
                return var0;
            };
            var0.handleOpenSpotifyArtist = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'renderLink';
        var4.key = var0;
        var0 = function arg0, arg1, arg2() {
            _fun62351: for (var _fun62351_ip = 0;;) switch (_fun62351_ip) {
                case 0:
                    var4 = arg1;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var4;
                    var0 = var0.props;
                    var0 = var0.onPress;
                    var _closure3_slot2 = var0;
                    var3 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 17;
                    var0 = var9[var5];
                    var2 = undefined;
                    var0 = var6.bind(var2)(var0);
                    var1 = var0.LegacyText;
                    var0 = {};
                    var7 = _closure1_slot13;
                    var5 = var9[var5];
                    var5 = var6.bind(var2)(var5);
                    var6 = var5.LegacyText;
                    var5 = {};
                    var8 = function() {
                        _fun62352: for (var _fun62352_ip = 0;;) switch (_fun62352_ip) {
                            case 0:
                                var2 = _closure3_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun62352_ip = 23;
                                    continue _fun62352
                                }
                            case 13:
                                var2 = _closure3_slot2;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 23:
                                var2 = _closure3_slot0;
                                var1 = var2.handleOpenSpotifyArtist;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5.onPress = var8;
                    var8 = true;
                    var5.suppressHighlighting = var8;
                    var8 = arg0;
                    var5.children = var8;
                    var6 = var7.bind(var2)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = ', ';
                    var7 = arg2;
                    if (!var7) {
                        _fun62351_ip = 141;
                        continue _fun62351
                    }
                case 137:
                    var6 = '';
                case 141:
                    var5[1] = var6;
                    var0.children = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = var0.props;
            var2 = var0.artists;
            var1 = var2.split;
            var0 = '; ';
            var6 = var1.bind(var2)(var0);
            var1 = var6.length;
            var0 = 1;
            var0 = var1 - var0;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.LegacyText;
            var0 = {};
            var5 = var6.map;
            var4 = function(arg0, arg1) { // Environment: var4
                var4 = arg1;
                var3 = _closure3_slot0;
                var2 = var3.renderLink;
                var0 = _closure3_slot1;
                var1 = arg0;
                var0 = var4 === var0;
                var0 = var2.bind(var3)(var1, var4, var0);
                return var0;
            };
            var4 = var5.bind(var6)(var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var15);
    var12 = var12.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot16;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var1 = function() { // Environment: var1
                var0 = _closure3_slot0;
                var0 = var0.props;
                var3 = _closure1_slot23;
                var2 = var0.activity;
                var1 = var0.userId;
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var0.handleOpenSpotifyAlbum = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            var4 = this;
            var3 = _closure1_slot13;
            var1 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 17;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.LegacyText;
            var0 = {};
            var5 = var4.handleOpenSpotifyAlbum;
            var0.onPress = var5;
            var5 = true;
            var0.suppressHighlighting = var5;
            var4 = var4.props;
            var4 = var4.text;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var12);
    var12 = 18;
    var12 = var14[var12];
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/now_playing/native/UserActivitySpotify.tsx';
    var12 = var13.bind(var14)(var12);
    var2.canOpenSpotifyUrl = var11;
    var2.attributeInstall = var10;
    var2.openUrl = var9;
    var2.openTrack = var8;
    var2.openArtist = var7;
    var2.openAlbum = var6;
    var2.SpotifyPlayButton = var5;
    var2.SpotifyTrack = var4;
    var2.SpotifyArtists = var3;
    var2.SpotifyAlbum = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 5611, 33, 1594, 507, 3103, 7803, 4045, 6807, 4836, 1234, 4839, 2]);