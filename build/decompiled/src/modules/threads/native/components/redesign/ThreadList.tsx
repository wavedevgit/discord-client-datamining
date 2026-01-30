// modules/threads/native/components/redesign/ThreadList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ThreadListSection, environment: var1
        var0 = arg0;
        var5 = var0.title;
        var1 = _closure1_slot7;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 4;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'text-xs/bold',
            'color': 'text-default'
        };
        var4 = var4.section;
        var0.style = var4;
        var4 = var5.toUpperCase;
        var4 = var4.bind(var5)();
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: renderItem, environment: var1
        _fun106568: for (var _fun106568_ip = 0;;) switch (_fun106568_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var2 = var0.type;
                var1 = 'section';
                if (!(var1 !== var2)) {
                    _fun106568_ip = 110;
                    continue _fun106568
                }
            case 21:
                var1 = 'thread';
                if (!(var1 !== var2)) {
                    _fun106568_ip = 33;
                    continue _fun106568
                }
            case 29:
                var1 = undefined;
                return var1;
            case 33:
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = var0.threadId;
                var1.threadId = var5;
                var5 = var0.onPress;
                var1.onPress = var5;
                var5 = var0.start;
                var1.start = var5;
                var5 = var0.end;
                var1.end = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 110:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var0 = var0.title;
                var1.title = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: keyExtractor, environment: var1
        _fun106569: for (var _fun106569_ip = 0;;) switch (_fun106569_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'section';
                if (!(var1 !== var2)) {
                    _fun106569_ip = 36;
                    continue _fun106569
                }
            case 16:
                var1 = 'thread';
                if (!(var1 !== var2)) {
                    _fun106569_ip = 28;
                    continue _fun106569
                }
            case 24:
                var1 = undefined;
                return var1;
            case 28:
                var1 = var0.threadId;
                return var1;
            case 36:
                var0 = var0.title;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: EnterExitCrossFadeContainer, environment: var1
        _fun106570: for (var _fun106570_ip = 0;;) switch (_fun106570_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.contentContainerStyle;
                var13 = var0.cleanUp;
                var _closure2_slot0 = var13;
                var11 = var0.state;
                var _closure2_slot1 = var11;
                var7 = var0.children;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 6;
                var2 = var0[var5];
                var6 = var9.bind(var3)(var2);
                var2 = var6.useSharedValue;
                var14 = 7;
                var0 = var0[var14];
                var0 = var9.bind(var3)(var0);
                var0 = var0.TransitionStates;
                var9 = var0.MOUNTED;
                var0 = 0;
                if (!(var11 === var9)) {
                    _fun106570_ip = 103;
                    continue _fun106570
                }
            case 100:
                var0 = 1;
            case 103:
                var12 = var2.bind(var6)(var0);
                _closure2_slot2 = var12;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var5];
                var9 = var15.bind(var3)(var2);
                var6 = var9.useAnimatedStyle;
                var2 = function() { // Original name: p, environment: var1
                    var0 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 8;
                    var2 = var12[var2];
                    var10 = undefined;
                    var6 = var11.bind(var10)(var2);
                    var5 = var6.withSpring;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = 9;
                    var2 = var12[var2];
                    var2 = var11.bind(var10)(var2);
                    var15 = var2.springStandard;
                    var2 = function(arg0) { // Original name: t, environment: var2
                        _fun106572: for (var _fun106572_ip = 0;;) switch (_fun106572_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun106572_ip = 54;
                                    continue _fun106572
                                }
                            case 6:
                                var2 = _closure2_slot1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.TransitionStates;
                                var1 = var1.YEETED;
                                var0 = var2 === var1;
                            case 54:
                                if (!var0) {
                                    _fun106572_ip = 103;
                                    continue _fun106572
                                }
                            case 57:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot0;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 103:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = {};
                    var9 = _closure2_slot1;
                    var7.state = var9;
                    var9 = 7;
                    var9 = var12[var9];
                    var9 = var11.bind(var10)(var9);
                    var9 = var9.TransitionStates;
                    var7.TransitionStates = var9;
                    var9 = 6;
                    var9 = var12[var9];
                    var9 = var11.bind(var10)(var9);
                    var9 = var9.runOnJS;
                    var7.runOnJS = var9;
                    var8 = _closure2_slot0;
                    var7.cleanUp = var8;
                    var2.__closure = var7;
                    var7 = 2519144051135.0;
                    var2.__workletHash = var7;
                    var1 = _closure1_slot10;
                    var2.__initData = var1;
                    var14 = 'respect-motion-settings';
                    var17 = var6;
                    var16 = var4;
                    var13 = var2;
                    var1 = var17[var5](var16, var15, var14, var13, var12);
                    var0.opacity = var1;
                    return var0;
                };
                var10 = {};
                var16 = 8;
                var16 = var0[var16];
                var16 = var15.bind(var3)(var16);
                var16 = var16.withSpring;
                var10.withSpring = var16;
                var10.opacity = var12;
                var16 = 9;
                var16 = var0[var16];
                var16 = var15.bind(var3)(var16);
                var16 = var16.springStandard;
                var10.springStandard = var16;
                var10.state = var11;
                var14 = var0[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.TransitionStates;
                var10.TransitionStates = var14;
                var14 = var0[var5];
                var14 = var15.bind(var3)(var14);
                var14 = var14.runOnJS;
                var10.runOnJS = var14;
                var10.cleanUp = var13;
                var2.__closure = var10;
                var10 = 5037750127944.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot9;
                var2.__initData = var10;
                var6 = var6.bind(var9)(var2);
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var11;
                var1 = function() { // Environment: var1
                    _fun106573: for (var _fun106573_ip = 0;;) switch (_fun106573_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var4 = var1.YEETED;
                            var1 = 1;
                            if (!(var5 === var4)) {
                                _fun106573_ip = 62;
                                continue _fun106573
                            }
                        case 60:
                            var1 = 0;
                        case 62:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var5 = _closure1_slot4;
                var9 = var5.absoluteFill;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot5;
                var4 = {};
                var4.style = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getThreadListStateKey, environment: var1
        var0 = arg0;
        return var0;
    };
    var _closure1_slot16 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.StyleSheet;
    var _closure1_slot4 = var7;
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var6.container = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.center = var9;
    var9 = {
        'marginTop': 24,
        'marginBottom': 10
    };
    var6.header = var9;
    var9 = {
        'marginVertical': 16,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.footer = var9;
    var9 = {
        'marginTop': 16,
        'marginBottom': 8
    };
    var6.section = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}";
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'list';
    var3.LIST = var6;
    var6 = 'empty';
    var3.EMPTY = var6;
    var6 = 'loading';
    var3.LOADING = var6;
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/redesign/ThreadList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ThreadList, environment: var1
        var1 = arg0;
        var16 = var1.channel;
        var9 = var1.onThreadPress;
        var _closure2_slot0 = var9;
        var12 = var1.onCreateThreadPress;
        var _closure2_slot1 = var12;
        var15 = var1.contentContainerStyle;
        var _closure2_slot2 = var15;
        var1 = _closure1_slot7;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var _closure2_slot3 = var10;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 10;
        var2 = var7[var5];
        var6 = var1.bind(var3)(var2);
        var2 = var6.useActiveThreads;
        var2 = var2.bind(var6)(var16);
        var14 = var2.joinedThreadIds;
        var _closure2_slot4 = var14;
        var2 = var2.unjoinedThreadIds;
        var _closure2_slot5 = var2;
        var5 = var7[var5];
        var13 = var1.bind(var3)(var5);
        var11 = var13.useArchivedThreads;
        var5 = 11;
        var5 = var7[var5];
        var5 = var1.bind(var3)(var5);
        var5 = var5.ThreadSortOrder;
        var21 = var5.LATEST_ACTIVITY;
        var20 = _closure1_slot8;
        var5 = 12;
        var5 = var7[var5];
        var5 = var1.bind(var3)(var5);
        var5 = var5.ThreadSearchTagSetting;
        var19 = var5.MATCH_SOME;
        var23 = var13;
        var22 = var16;
        var6 = var23[var11](var22, var21, var20, var19, var18);
        var16 = var6.threadIds;
        var _closure2_slot6 = var16;
        var17 = var6.canLoadMore;
        var _closure2_slot7 = var17;
        var5 = var6.loadMore;
        var _closure2_slot8 = var5;
        var13 = var6.loading;
        var _closure2_slot9 = var13;
        var11 = _closure1_slot3;
        var8 = var11.useCallback;
        var6 = new Array(3);
        var6[0] = var13;
        var6[1] = var17;
        var6[2] = var5;
        var5 = function() { // Environment: var0
            _fun106576: for (var _fun106576_ip = 0;;) switch (_fun106576_ip) {
                case 0:
                    var1 = _closure2_slot9;
                    var1 = !var1;
                    if (!var1) {
                        _fun106576_ip = 17;
                        continue _fun106576
                    }
                case 13:
                    var1 = _closure2_slot7;
                case 17:
                    if (!var1) {
                        _fun106576_ip = 30;
                        continue _fun106576
                    }
                case 20:
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 30:
                    var0 = undefined;
                    return var0;
            }
        };
        var11 = var8.bind(var11)(var5, var6);
        var _closure2_slot10 = var11;
        var8 = _closure1_slot3;
        var6 = var8.useMemo;
        var5 = new Array(4);
        var5[0] = var16;
        var5[1] = var14;
        var5[2] = var9;
        var5[3] = var2;
        var2 = function() { // Environment: var0
            _fun106577: for (var _fun106577_ip = 0;;) switch (_fun106577_ip) {
                case 0:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot4;
                    var3 = var3.length;
                    var4 = 0;
                    if (!(var3 > var4)) {
                        _fun106577_ip = 148;
                        continue _fun106577
                    }
                case 28:
                    var5 = var0.push;
                    var3 = {};
                    var6 = 'section';
                    var3.type = var6;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 13;
                    var9 = var11[var6];
                    var7 = undefined;
                    var9 = var8.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var8 = var6.fcXlhe;
                    var7 = {};
                    var6 = _closure2_slot4;
                    var11 = var6.length;
                    var7.count = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var3.title = var7;
                    var3 = var5.bind(var0)(var3);
                    var5 = var6.forEach;
                    var3 = function(arg0, arg1) { // Environment: var1
                        var5 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var3 = 'thread';
                        var0.type = var3;
                        var3 = arg0;
                        var0.threadId = var3;
                        var3 = 0;
                        var3 = var3 === var5;
                        var0.start = var3;
                        var4 = _closure2_slot4;
                        var6 = var4.length;
                        var4 = 1;
                        var4 = var6 - var4;
                        var4 = var5 === var4;
                        var0.end = var4;
                        var3 = _closure2_slot0;
                        var0.onPress = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                case 148:
                    var3 = _closure2_slot5;
                    var3 = var3.length;
                    if (!(var3 > var4)) {
                        _fun106577_ip = 281;
                        continue _fun106577
                    }
                case 161:
                    var5 = var0.push;
                    var3 = {};
                    var6 = 'section';
                    var3.type = var6;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 13;
                    var9 = var11[var6];
                    var7 = undefined;
                    var9 = var8.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var8 = var6.GHY7yQ;
                    var7 = {};
                    var6 = _closure2_slot5;
                    var11 = var6.length;
                    var7.count = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var3.title = var7;
                    var3 = var5.bind(var0)(var3);
                    var5 = var6.forEach;
                    var3 = function(arg0, arg1) { // Environment: var1
                        var5 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var3 = 'thread';
                        var0.type = var3;
                        var3 = arg0;
                        var0.threadId = var3;
                        var3 = 0;
                        var3 = var3 === var5;
                        var0.start = var3;
                        var4 = _closure2_slot5;
                        var6 = var4.length;
                        var4 = 1;
                        var4 = var6 - var4;
                        var4 = var5 === var4;
                        var0.end = var4;
                        var3 = _closure2_slot0;
                        var0.onPress = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                case 281:
                    var3 = _closure2_slot6;
                    var3 = var3.length;
                    if (!(var3 > var4)) {
                        _fun106577_ip = 401;
                        continue _fun106577
                    }
                case 294:
                    var4 = var0.push;
                    var3 = {};
                    var5 = 'section';
                    var3.type = var5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 13;
                    var6 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.XsgrjS;
                    var5 = var6.bind(var7)(var5);
                    var3.title = var5;
                    var3 = var4.bind(var0)(var3);
                    var3 = _closure2_slot6;
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var5 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var3 = 'thread';
                        var0.type = var3;
                        var3 = arg0;
                        var0.threadId = var3;
                        var3 = 0;
                        var3 = var3 === var5;
                        var0.start = var3;
                        var4 = _closure2_slot6;
                        var6 = var4.length;
                        var4 = 1;
                        var4 = var6 - var4;
                        var4 = var5 === var4;
                        var0.end = var4;
                        var3 = _closure2_slot0;
                        var0.onPress = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 401:
                    return var0;
            }
        };
        var14 = var6.bind(var8)(var2, var5);
        var _closure2_slot11 = var14;
        var8 = _closure1_slot3;
        var6 = var8.useMemo;
        var2 = var14.length;
        var5 = new Array(2);
        var5[0] = var2;
        var5[1] = var13;
        var2 = function() { // Environment: var0
            _fun106581: for (var _fun106581_ip = 0;;) switch (_fun106581_ip) {
                case 0:
                    var1 = _closure2_slot9;
                    if (!var1) {
                        _fun106581_ip = 25;
                        continue _fun106581
                    }
                case 10:
                    var1 = _closure2_slot11;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun106581_ip = 89;
                        continue _fun106581
                    }
                case 25:
                    var0 = _closure2_slot11;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun106581_ip = 63;
                        continue _fun106581
                    }
                case 40:
                    var0 = _closure1_slot11;
                    var1 = var0.LIST;
                    var0 = new Array(1);
                    var0[0] = var1;
                    _fun106581_ip = 87;
                    continue _fun106581;
                case 63:
                    var1 = _closure1_slot11;
                    var2 = var1.EMPTY;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 87:
                    _fun106581_ip = 113;
                    continue _fun106581;
                case 89:
                    var1 = _closure1_slot11;
                    var2 = var1.LOADING;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 113:
                    return var0;
            }
        };
        var6 = var6.bind(var8)(var2, var5);
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var5 = new Array(1);
        var5[0] = var12;
        var2 = function() { // Environment: var0
            _fun106582: for (var _fun106582_ip = 0;;) switch (_fun106582_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    var1 = var0 != var1;
                    if (!var1) {
                        _fun106582_ip = 209;
                        continue _fun106582
                    }
                case 19:
                    var4 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 14;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {
                        'icon': null,
                        'onPress': null,
                        'label': null,
                        'start': true,
                        'end': true,
                        'arrow': true
                    };
                    var10 = _closure1_slot6;
                    var6 = 15;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    var6 = var6.RowButton;
                    var7 = var6.Icon;
                    var6 = {};
                    var11 = 'blurple';
                    var6.variant = var11;
                    var11 = 16;
                    var11 = var9[var11];
                    var11 = var8.bind(var3)(var11);
                    var11 = var11.ThreadPlusIcon;
                    var6.IconComponent = var11;
                    var6 = var10.bind(var3)(var7, var6);
                    var1.icon = var6;
                    var5 = _closure2_slot1;
                    var1.onPress = var5;
                    var5 = 13;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.rBIGBL;
                    var5 = var6.bind(var7)(var5);
                    var1.label = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 209:
                    return var0;
            }
        };
        var9 = var8.bind(var9)(var2, var5);
        var _closure2_slot12 = var9;
        var8 = _closure1_slot3;
        var5 = var8.useCallback;
        var2 = new Array(10);
        var2[0] = var15;
        var2[1] = var14;
        var2[2] = var13;
        var2[3] = var12;
        var2[4] = var11;
        var11 = var10.center;
        var2[5] = var11;
        var11 = var10.container;
        var2[6] = var11;
        var11 = var10.header;
        var2[7] = var11;
        var10 = var10.footer;
        var2[8] = var10;
        var2[9] = var9;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            _fun106583: for (var _fun106583_ip = 0;;) switch (_fun106583_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var1 = _closure1_slot11;
                    var1 = var1.EMPTY;
                    if (!(var1 !== var2)) {
                        _fun106583_ip = 452;
                        continue _fun106583
                    }
                case 32:
                    var1 = _closure1_slot11;
                    var1 = var1.LOADING;
                    if (!(var1 !== var2)) {
                        _fun106583_ip = 351;
                        continue _fun106583
                    }
                case 49:
                    var1 = _closure1_slot11;
                    var1 = var1.LIST;
                    if (!(var1 !== var2)) {
                        _fun106583_ip = 67;
                        continue _fun106583
                    }
                case 63:
                    var1 = undefined;
                    return var1;
                case 67:
                    var7 = _closure1_slot6;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var12 = _closure2_slot3;
                    var1 = var12.container;
                    var2.contentContainerStyle = var1;
                    var2.state = var6;
                    var2.cleanUp = var5;
                    var10 = _closure1_slot6;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 19;
                    var8 = var16[var1];
                    var1 = undefined;
                    var8 = var15.bind(var1)(var8);
                    var9 = var8.AnimatedFlashList;
                    var8 = {};
                    var13 = _closure2_slot11;
                    var8.data = var13;
                    var13 = _closure2_slot12;
                    var8.ListHeaderComponent = var13;
                    var12 = var12.header;
                    var8.ListHeaderComponentStyle = var12;
                    var12 = _closure1_slot13;
                    var8.renderItem = var12;
                    var12 = _closure1_slot14;
                    var8.keyExtractor = var12;
                    var12 = _closure2_slot10;
                    var8.onEndReached = var12;
                    var12 = 0.4;
                    var8.onEndReachedThreshold = var12;
                    var12 = 13;
                    var13 = var16[var12];
                    var13 = var15.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var1)(var12);
                    var12 = var12.t;
                    var12 = var12.B2panI;
                    var12 = var13.bind(var14)(var12);
                    var8.accessibilityLabel = var12;
                    var12 = 64;
                    var8.estimatedItemSize = var12;
                    var13 = _closure2_slot9;
                    var12 = undefined;
                    if (!var13) {
                        _fun106583_ip = 294;
                        continue _fun106583
                    }
                case 274:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var13 = 18;
                    var13 = var15[var13];
                    var12 = var14.bind(var1)(var13);
                case 294:
                    var8.ListFooterComponent = var12;
                    var13 = _closure2_slot9;
                    var12 = undefined;
                    if (!var13) {
                        _fun106583_ip = 318;
                        continue _fun106583
                    }
                case 308:
                    var13 = _closure2_slot3;
                    var12 = var13.footer;
                case 318:
                    var8.ListFooterComponentStyle = var12;
                    var11 = _closure2_slot2;
                    var8.contentContainerStyle = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var2.children = var8;
                    var1 = var7.bind(var1)(var3, var2, var4);
                    return var1;
                case 351:
                    var7 = _closure1_slot6;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var9 = var8.container;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var8 = var8.center;
                    var1[1] = var8;
                    var2.contentContainerStyle = var1;
                    var2.state = var6;
                    var2.cleanUp = var5;
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 18;
                    var8 = var8[var1];
                    var1 = undefined;
                    var9 = var9.bind(var1)(var8);
                    var8 = {};
                    var8 = var10.bind(var1)(var9, var8);
                    var2.children = var8;
                    var1 = var7.bind(var1)(var3, var2, var4);
                    return var1;
                case 452:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var7 = var7.container;
                    var1.contentContainerStyle = var7;
                    var1.state = var6;
                    var1.cleanUp = var5;
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 17;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = {};
                    var8 = _closure2_slot1;
                    var5.onCreateThreadPress = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var5 = var5.bind(var8)(var0, var2);
        var2 = _closure1_slot6;
        var0 = 7;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var0.items = var6;
        var0.renderItem = var5;
        var4 = _closure1_slot16;
        var0.getItemKey = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3901, 13832, 3679, 3987, 4040, 4046, 11892, 1381, 1383, 1234, 4860, 5341, 11763, 13834, 13835, 5714, 2]);