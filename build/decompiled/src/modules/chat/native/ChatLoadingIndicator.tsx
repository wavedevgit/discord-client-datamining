// modules/chat/native/ChatLoadingIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.jsxs;
    var _closure1_slot14 = var6;
    var3 = var3.Fragment;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.container = var9;
    var9 = {
        'height': 8,
        'width': 8
    };
    var10 = 12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9.backgroundColor = var10;
    var3.pulse = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = function() { // Original name: openLoadingIndicatorDebugBody, environment: var1
        _fun72053: for (var _fun72053_ip = 0;;) switch (_fun72053_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun72053_ip = 35;
                    continue _fun72053
                }
            case 25:
                var2 = var3.isStaff;
                var1 = var2.bind(var3)();
            case 35:
                if (!var1) {
                    _fun72053_ip = 94;
                    continue _fun72053
                }
            case 38:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.openLazy;
                var0 = {};
                var3 = function() { // Original name: importer, environment: var3
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = 15;
                    var1 = var0[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = 14;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var1 = var1.default;
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot13;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var6 = arg0;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var5 = 'Chat Loading indicator';
                            var4 = 'title';
                            var1[var4] = var5;
                            var5 = _closure1_slot18;
                            var0 = undefined;
                            var4 = {};
                            var5 = var3.bind(var0)(var5, var4);
                            var4 = 'children';
                            var1[var4] = var5;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.importer = var3;
                var3 = true;
                var0.isDismissable = var3;
                var0 = var1.bind(var2)(var0);
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var6 = var7.memo;
    var3 = function() { // Environment: var1
        _fun72057: for (var _fun72057_ip = 0;;) switch (_fun72057_ip) {
            case 0:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var5 = var4[var3];
                var3 = undefined;
                var8 = var1.bind(var3)(var5);
                var7 = var8.useStateFromStoresObject;
                var5 = _closure1_slot8;
                var6 = new Array(3);
                var6[0] = var5;
                var5 = _closure1_slot7;
                var6[1] = var5;
                var5 = _closure1_slot9;
                var6[2] = var5;
                var5 = function() { // Environment: var2
                    _fun72058: for (var _fun72058_ip = 0;;) switch (_fun72058_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getChannelId;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot7;
                            var1 = var2.isConnected;
                            var1 = var1.bind(var2)();
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72058_ip = 83;
                                continue _fun72058
                            }
                        case 37:
                            var2 = _closure1_slot8;
                            var0 = var2.getMessages;
                            var2 = var0.bind(var2)(var3);
                            var0 = {};
                            var3 = var2.cached;
                            var0.messagesCached = var3;
                            var2 = var2.ready;
                            var0.messagesReady = var2;
                            var0.connected = var1;
                            return var0;
                        case 83:
                            var0 = {
                                'messagesCached': false,
                                'messagesReady': false
                            };
                            var0.connected = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var6, var5);
                var6 = var5.messagesCached;
                var8 = var5.messagesReady;
                var5 = var5.connected;
                var7 = function(arg0, arg1, arg2) { // Original name: renderField, environment: var2
                    _fun72059: for (var _fun72059_ip = 0;;) switch (_fun72059_ip) {
                        case 0:
                            var7 = arg1;
                            var9 = arg2;
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot15;
                            var1 = {};
                            var4 = new Array(5);
                            var0 = arg0;
                            var4[0] = var0;
                            var0 = ':';
                            var4[1] = var0;
                            var0 = ' ';
                            var4[2] = var0;
                            var12 = _closure1_slot13;
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var11 = 17;
                            var5 = var0[var11];
                            var0 = undefined;
                            var5 = var8.bind(var0)(var5);
                            var8 = var5.Text;
                            var5 = {};
                            var10 = 'text-md/normal';
                            var5.variant = var10;
                            var10 = 'text-feedback-critical';
                            if (!var7) {
                                _fun72059_ip = 106;
                                continue _fun72059
                            }
                        case 100:
                            var10 = 'text-feedback-positive';
                        case 106:
                            var5.color = var10;
                            var10 = 'false';
                            var13 = var10;
                            if (!var7) {
                                _fun72059_ip = 124;
                                continue _fun72059
                            }
                        case 120:
                            var13 = 'true';
                        case 124:
                            var5.children = var13;
                            var5 = var12.bind(var0)(var8, var5);
                            var4[3] = var5;
                            var8 = null;
                            var12 = var8 != var9;
                            var5 = null;
                            if (!var12) {
                                _fun72059_ip = 236;
                                continue _fun72059
                            }
                        case 149:
                            var5 = null;
                            if (!(var7 !== var9)) {
                                _fun72059_ip = 236;
                                continue _fun72059
                            }
                        case 155:
                            var8 = _closure1_slot14;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-md/normal',
                                'color': 'text-muted'
                            };
                            if (!var9) {
                                _fun72059_ip = 202;
                                continue _fun72059
                            }
                        case 198:
                            var10 = 'true';
                        case 202:
                            var9 = [' ', '(should be '];
                            var9[2] = var10;
                            var10 = ' to hide loading indicator)';
                            var9[3] = var10;
                            var6.children = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 236:
                            var4[4] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var2 = _closure1_slot14;
                var0 = 17;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var9 = 'messages.cached';
                var4 = false;
                var9 = var7.bind(var3)(var9, var6, var4);
                var4 = new Array(7);
                var4[0] = var9;
                var9 = '\n';
                var4[1] = var9;
                var10 = 'messages.ready';
                var11 = true;
                var10 = var7.bind(var3)(var10, var8, var11);
                var4[2] = var10;
                var4[3] = var9;
                var10 = 'connected';
                var10 = var7.bind(var3)(var10, var5, var11);
                var4[4] = var10;
                var4[5] = var9;
                if (var6) {
                    _fun72057_ip = 213;
                    continue _fun72057
                }
            case 210:
                var6 = !var8;
            case 213:
                if (var6) {
                    _fun72057_ip = 219;
                    continue _fun72057
                }
            case 216:
                var6 = !var5;
            case 219:
                var5 = 'should show chat indicator';
                var5 = var7.bind(var3)(var5, var6);
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/ChatLoadingIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useShouldChannelShowLoadingIndicator, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 18;
        var2 = var4[var2];
        var6 = undefined;
        var2 = var3.bind(var6)(var2);
        var7 = var2.ChatLoadingIndicatorExperiment;
        var5 = var7.useConfig;
        var2 = {};
        var8 = 'ChatLoadingIndicatorGuard';
        var2.location = var8;
        var2 = var5.bind(var7)(var2);
        var2 = var2.enabled;
        var _closure2_slot1 = var2;
        var2 = 16;
        var2 = var4[var2];
        var5 = var3.bind(var6)(var2);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot8;
        var3 = new Array(3);
        var3[0] = var2;
        var2 = _closure1_slot7;
        var3[1] = var2;
        var2 = _closure1_slot11;
        var3[2] = var2;
        var2 = function() { // Environment: var1
            _fun72061: for (var _fun72061_ip = 0;;) switch (_fun72061_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun72061_ip = 14;
                        continue _fun72061
                    }
                case 10:
                    var0 = false;
                    return var0;
                case 14:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun72061_ip = 118;
                        continue _fun72061
                    }
                case 24:
                    var3 = _closure1_slot11;
                    var2 = var3.getState;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot12;
                    var2 = var2.ACTIVE;
                    if (!(var3 === var2)) {
                        _fun72061_ip = 114;
                        continue _fun72061
                    }
                case 55:
                    var3 = _closure1_slot8;
                    var2 = var3.getMessages;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure1_slot7;
                    var0 = var1.isConnected;
                    var1 = var0.bind(var1)();
                    var0 = var2.cached;
                    if (var0) {
                        _fun72061_ip = 106;
                        continue _fun72061
                    }
                case 97:
                    var2 = var2.ready;
                    var0 = !var2;
                case 106:
                    if (var0) {
                        _fun72061_ip = 112;
                        continue _fun72061
                    }
                case 109:
                    var0 = !var1;
                case 112:
                    return var0;
                case 114:
                    var0 = false;
                    return var0;
                case 118:
                    var0 = false;
                    return var0;
            }
        };
        var5 = var4.bind(var5)(var3, var2);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = false;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot3;
        var0 = 2;
        var3 = var2.bind(var6)(var3, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot3 = var2;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun72062: for (var _fun72062_ip = 0;;) switch (_fun72062_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    if (var2) {
                        _fun72062_ip = 27;
                        continue _fun72062
                    }
                case 12:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                case 27:
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 3000;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useShouldChannelShowLoadingIndicator = var3;
    var1 = function() { // Original name: ChannelHeaderLoadingIndicator, environment: var1
        _fun72065: for (var _fun72065_ip = 0;;) switch (_fun72065_ip) {
            case 0:
                var1 = _closure1_slot16;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 16;
                var2 = var14[var1];
                var7 = var13.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var9 = var5.bind(var7)(var3, var2);
                var _closure2_slot0 = var9;
                var1 = var14[var1];
                var5 = var13.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun72067: for (var _fun72067_ip = 0;;) switch (_fun72067_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun72067_ip = 37;
                                continue _fun72067
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun72067_ip = 47;
                                continue _fun72067
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var2, var1);
                var5 = 19;
                var2 = var14[var5];
                var3 = var13.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() { // Original name: t, environment: var0
                    _fun72068: for (var _fun72068_ip = 0;;) switch (_fun72068_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = {};
                            if (var0) {
                                _fun72068_ip = 308;
                                continue _fun72068
                            }
                        case 15:
                            var2 = {};
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var12 = 19;
                            var0 = var18[var12];
                            var13 = undefined;
                            var5 = var17.bind(var13)(var0);
                            var4 = var5.withRepeat;
                            var0 = var18[var12];
                            var8 = var17.bind(var13)(var0);
                            var7 = var8.withSequence;
                            var0 = 20;
                            var3 = var18[var0];
                            var9 = var17.bind(var13)(var3);
                            var6 = var9.withTiming;
                            var3 = {};
                            var16 = 0;
                            var3.duration = var16;
                            var11 = 1;
                            var6 = var6.bind(var9)(var11, var3);
                            var3 = var18[var0];
                            var20 = var17.bind(var13)(var3);
                            var10 = var20.withTiming;
                            var9 = {};
                            var19 = 1500;
                            var9.duration = var19;
                            var3 = var18[var12];
                            var3 = var17.bind(var13)(var3);
                            var21 = var3.Easing;
                            var3 = var21.bezier;
                            var15 = 0.4;
                            var14 = 0.2;
                            var26 = var21;
                            var25 = var15;
                            var24 = 0;
                            var23 = var14;
                            var22 = var11;
                            var3 = var26[var3](var25, var24, var23, var22, var21);
                            var9.easing = var3;
                            var3 = 0.5;
                            var3 = var10.bind(var20)(var3, var9);
                            var0 = var18[var0];
                            var10 = var17.bind(var13)(var0);
                            var9 = var10.withTiming;
                            var0 = {};
                            var0.duration = var19;
                            var12 = var18[var12];
                            var12 = var17.bind(var13)(var12);
                            var13 = var12.Easing;
                            var12 = var13.bezier;
                            var26 = var13;
                            var25 = var15;
                            var24 = 0;
                            var12 = var26[var12](var25, var24, var23, var22, var21);
                            var0.easing = var12;
                            var0 = var9.bind(var10)(var11, var0);
                            var3 = var7.bind(var8)(var6, var3, var0);
                            var0 = -1;
                            var0 = var4.bind(var5)(var3, var0);
                            var2.scale = var0;
                            var0 = new Array(1);
                            var0[0] = var2;
                            var1.transform = var0;
                            var0 = var1;
                            _fun72068_ip = 319;
                            continue _fun72068;
                        case 308:
                            var2 = new Array(0);
                            var1.transform = var2;
                            var0 = var1;
                        case 319:
                            return var0;
                    }
                };
                var7 = {};
                var7.useReducedMotion = var9;
                var9 = var14[var5];
                var9 = var13.bind(var4)(var9);
                var9 = var9.withRepeat;
                var7.withRepeat = var9;
                var9 = var14[var5];
                var9 = var13.bind(var4)(var9);
                var9 = var9.withSequence;
                var7.withSequence = var9;
                var9 = 20;
                var9 = var14[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.withTiming;
                var7.withTiming = var9;
                var9 = var14[var5];
                var9 = var13.bind(var4)(var9);
                var9 = var9.Easing;
                var7.Easing = var9;
                var0.__closure = var7;
                var7 = 17454673879926.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot19;
                var0.__initData = var7;
                var10 = var2.bind(var3)(var0);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var0 = {};
                var7 = var8.container;
                var0.style = var7;
                var9 = _closure1_slot13;
                var7 = _closure1_slot1;
                var5 = var14[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.View;
                var5 = {};
                var11 = var8.pulse;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var10;
                var5.style = var8;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = 17;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var10 = 21;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.JwIJMV;
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var0.children = var5;
                var5 = var3.bind(var4)(var2, var0);
                var0 = var5;
                if (!var1) {
                    _fun72065_ip = 497;
                    continue _fun72065
                }
            case 447:
                var3 = _closure1_slot13;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = _closure1_slot17;
                var1.onPress = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 497:
                return var0;
        }
    };
    var2.ChannelHeaderLoadingIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3433, 4207, 1661, 1613, 5239, 660, 33, 1297, 671, 3890, 3891, 1307, 566, 3895, 8979, 3677, 4050, 1234, 4858, 2]);