// modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var4 = arg0;
        var14 = var4.user;
        var _closure2_slot0 = var14;
        var12 = var4.applicationId;
        var _closure2_slot1 = var12;
        var1 = var4.accepted;
        var _closure2_slot2 = var1;
        var11 = var4.onAcceptIncomingRequest;
        var _closure2_slot3 = var11;
        var10 = var4.onDeclineIncomingRequest;
        var _closure2_slot4 = var10;
        var17 = var4.accessibilityLabel;
        var8 = var4.acceptRequestAccessibilityLabel;
        var _closure2_slot5 = var8;
        var7 = var4.ignoreRequestAccessibilityLabel;
        var _closure2_slot6 = var7;
        var19 = var4.acceptedRequestLabel;
        var18 = var4.acceptedRequestAccessibilityLabel;
        var3 = {
            'user': 0,
            'applicationId': 0,
            'accepted': 0,
            'onAcceptIncomingRequest': 0,
            'onDeclineIncomingRequest': 0,
            'accessibilityLabel': 0,
            'acceptRequestAccessibilityLabel': 0,
            'ignoreRequestAccessibilityLabel': 0,
            'acceptedRequestLabel': 0,
            'acceptedRequestAccessibilityLabel': 0
        };
        var26 = null;
        var27 = var3;
        var2 = silentSetPrototypeOf(var27, var26);
        var27 = {};
        var26 = var4;
        var25 = var3;
        var6 = copyDataProperties(var27, var26, var25);
        var5 = _closure1_slot0;
        var15 = _closure1_slot2;
        var2 = 6;
        var2 = var15[var2];
        var3 = undefined;
        var13 = var5.bind(var3)(var2);
        var9 = var13.useSharedValue;
        var2 = false;
        var13 = var9.bind(var13)(var2);
        var _closure2_slot7 = var13;
        var2 = 7;
        var9 = var15[var2];
        var21 = var5.bind(var3)(var9);
        var20 = var21.useStateFromStores;
        var9 = _closure1_slot4;
        var16 = new Array(1);
        var16[0] = var9;
        var9 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var9 = var20.bind(var21)(var16, var9);
        var22 = _closure1_slot3;
        var21 = var22.useEffect;
        var20 = new Array(2);
        var20[0] = var1;
        var20[1] = var13;
        var16 = function() { // Environment: var0
            var2 = _closure2_slot7;
            var1 = var2.set;
            var0 = _closure2_slot2;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var16 = var21.bind(var22)(var16, var20);
        var21 = _closure1_slot3;
        var20 = var21.useMemo;
        var16 = new Array(4);
        var16[0] = var8;
        var16[1] = var1;
        var16[2] = var7;
        var16[3] = var14;
        var1 = function() { // Environment: var0
            _fun108619: for (var _fun108619_ip = 0;;) switch (_fun108619_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = {};
                    var1 = _closure1_slot9;
                    if (var0) {
                        _fun108619_ip = 75;
                        continue _fun108619
                    }
                case 19:
                    var0 = var1.ACCEPT;
                    var2.name = var0;
                    var0 = _closure2_slot5;
                    var2.label = var0;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var3 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.DECLINE;
                    var3.name = var4;
                    var4 = _closure2_slot6;
                    var3.label = var4;
                    var0[1] = var3;
                    _fun108619_ip = 195;
                    continue _fun108619;
                case 75:
                    var1 = var1.WAVE;
                    var2.name = var1;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var4 = var10[var1];
                    var9 = undefined;
                    var4 = var3.bind(var9)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var10[var1];
                    var1 = var3.bind(var9)(var1);
                    var1 = var1.t;
                    var3 = var1.m0zYbV;
                    var1 = {};
                    var8 = _closure1_slot1;
                    var7 = 9;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.getName;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var1.username = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var2.label = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 195:
                    return var0;
            }
        };
        var21 = var20.bind(var21)(var1, var16);
        var22 = _closure1_slot3;
        var20 = var22.useCallback;
        var16 = new Array(5);
        var16[0] = var12;
        var16[1] = var11;
        var16[2] = var10;
        var16[3] = var13;
        var16[4] = var14;
        var1 = function(arg0) { // Environment: var0
            _fun108620: for (var _fun108620_ip = 0;;) switch (_fun108620_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = var0.actionName;
                    var1 = _closure1_slot9;
                    var1 = var1.ACCEPT;
                    if (!(var1 !== var2)) {
                        _fun108620_ip = 200;
                        continue _fun108620
                    }
                case 35:
                    var1 = _closure1_slot9;
                    var1 = var1.DECLINE;
                    if (!(var1 !== var2)) {
                        _fun108620_ip = 124;
                        continue _fun108620
                    }
                case 49:
                    var1 = _closure1_slot9;
                    var1 = var1.WAVE;
                    if (!(var1 !== var2)) {
                        _fun108620_ip = 67;
                        continue _fun108620
                    }
                case 63:
                    var1 = undefined;
                    return var1;
                case 67:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.sendWave;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var2 = true;
                    var1 = 'Incoming Friend Request';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                case 124:
                    var2 = _closure2_slot4;
                    var5 = _closure2_slot0;
                    var1 = var5.id;
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1, var4);
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dismissIncomingRequest;
                    var1 = {};
                    var5 = var5.id;
                    var1.userId = var5;
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 200:
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var1 = true;
                    var1 = var3.bind(var4)(var1);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot0;
                    var1 = var4.id;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var1, var3);
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 10;
                    var0 = var5[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.acceptIncomingRequest;
                    var0 = {};
                    var4 = var4.id;
                    var0.userId = var4;
                    var0.applicationId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var16 = var20.bind(var22)(var1, var16);
        var1 = _closure1_slot1;
        var20 = 9;
        var20 = var15[var20];
        var22 = var1.bind(var3)(var20);
        var20 = var22.useUserTag;
        var23 = var20.bind(var22)(var14);
        var _closure2_slot8 = var23;
        var2 = var15[var2];
        var24 = var5.bind(var3)(var2);
        var22 = var24.useStateFromStores;
        var2 = _closure1_slot5;
        var20 = new Array(1);
        var20[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getApplication;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var24 = var22.bind(var24)(var20, var2);
        var _closure2_slot9 = var24;
        var22 = _closure1_slot3;
        var20 = var22.useMemo;
        var2 = new Array(3);
        var2[0] = var24;
        var2[1] = var12;
        var2[2] = var23;
        var0 = function() { // Environment: var0
            _fun108622: for (var _fun108622_ip = 0;;) switch (_fun108622_ip) {
                case 0:
                    var0 = _closure2_slot9;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun108622_ip = 34;
                        continue _fun108622
                    }
                case 13:
                    var0 = _closure2_slot1;
                    var2 = var2 != var0;
                    var0 = '';
                    if (var2) {
                        _fun108622_ip = 32;
                        continue _fun108622
                    }
                case 28:
                    var0 = _closure2_slot8;
                case 32:
                    _fun108622_ip = 99;
                    continue _fun108622;
                case 34:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {
                        'application': null,
                        'textVariant': 'text-xs/medium',
                        'iconSize': 12
                    };
                    var1 = _closure2_slot9;
                    var2.application = var1;
                    var1 = var1.id;
                    var0 = var5.bind(var4)(var3, var2, var1);
                case 99:
                    return var0;
            }
        };
        var20 = var20.bind(var22)(var0, var2);
        var2 = _closure1_slot8;
        var0 = 12;
        var0 = var15[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var27 = var0;
        var26 = var6;
        var6 = copyDataProperties(var27, var26);
        var6 = 'user';
        var0[var6] = var14;
        var6 = _closure1_slot7;
        var22 = var6.PENDING_INCOMING;
        var6 = 'type';
        var0[var6] = var22;
        var6 = _closure1_slot6;
        var22 = var6.ACTIONS;
        var6 = 'mode';
        var0[var6] = var22;
        var6 = 'accessibilityActions';
        var0[var6] = var21;
        var6 = 'accessibilityLabel';
        var0[var6] = var17;
        var6 = 'onAccessibilityAction';
        var0[var6] = var16;
        var17 = _closure1_slot8;
        var6 = 13;
        var6 = var15[var6];
        var6 = var5.bind(var3)(var6);
        var16 = var6.ActionStatusSubLabel;
        var6 = {};
        var6.actioned = var13;
        var6.label = var20;
        var6.actionStatus = var19;
        var6.actionStatusAccessibilityLabel = var18;
        var18 = !var9;
        var6.animate = var18;
        var16 = var17.bind(var3)(var16, var6);
        var6 = 'subLabel';
        var0[var6] = var16;
        var6 = _closure1_slot8;
        var4 = 14;
        var4 = var15[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.IncomingRequestRowActions;
        var4 = {};
        var4.user = var14;
        var4.pressed = var13;
        var4.applicationId = var12;
        var4.onAcceptIncomingRequest = var11;
        var4.onDeclineIncomingRequest = var10;
        var9 = !var9;
        var4.animate = var9;
        var4.acceptRequestAccessibilityLabel = var8;
        var4.ignoreRequestAccessibilityLabel = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = 'trailing';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var6 = var2.user;
        var9 = var2.application;
        var _closure2_slot0 = var9;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.user = var0;
        var1.application = var0;
        var18 = {};
        var17 = var2;
        var16 = var1;
        var4 = copyDataProperties(var18, var17, var16);
        var1 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 9;
        var0 = var11[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.useUserTag;
        var10 = var0.bind(var1)(var6);
        var2 = _closure1_slot8;
        var1 = _closure1_slot10;
        var0 = {};
        var0.user = var6;
        var6 = var9.id;
        var0.applicationId = var6;
        var6 = _closure1_slot0;
        var5 = 8;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var13 = var7.intl;
        var12 = var13.formatToPlainString;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.u6lp4x;
        var7 = {};
        var7.name = var10;
        var7 = var12.bind(var13)(var8, var7);
        var0.accessibilityLabel = var7;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var13 = var7.intl;
        var12 = var13.format;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.gRgJGR;
        var7 = {};
        var14 = function() {
            var4 = _closure1_slot8;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 11;
            var0 = var2[var0];
            var3 = undefined;
            var2 = var1.bind(var3)(var0);
            var1 = {
                'application': null,
                'textVariant': 'text-xs/medium',
                'iconSize': 12
            };
            var0 = _closure2_slot0;
            var1.application = var0;
            var0 = var0.id;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var7.applicationNameHook = var14;
        var7 = var12.bind(var13)(var8, var7);
        var0.acceptedRequestLabel = var7;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var13 = var7.intl;
        var12 = var13.formatToPlainString;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.Ke6fRJ;
        var7 = {};
        var7.name = var10;
        var14 = var9.name;
        var7.applicationName = var14;
        var7 = var12.bind(var13)(var8, var7);
        var0.acceptedRequestAccessibilityLabel = var7;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var13 = var7.intl;
        var12 = var13.formatToPlainString;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.kMUpdH;
        var7 = {};
        var7.name = var10;
        var14 = var9.name;
        var7.applicationName = var14;
        var7 = var12.bind(var13)(var8, var7);
        var0.acceptRequestAccessibilityLabel = var7;
        var7 = var11[var5];
        var7 = var6.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.formatToPlainString;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5.d8Cw5e;
        var5 = {};
        var5.name = var10;
        var9 = var9.name;
        var5.applicationName = var9;
        var5 = var7.bind(var8)(var6, var5);
        var0.ignoreRequestAccessibilityLabel = var5;
        var18 = var0;
        var17 = var4;
        var4 = copyDataProperties(var18, var17);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'accept';
    var3.ACCEPT = var6;
    var6 = 'decline';
    var3.DECLINE = var6;
    var6 = 'wave';
    var3.WAVE = var6;
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/IncomingRequestRow.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = arg0;
        var6 = var2.user;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.user = var0;
        var16 = {};
        var15 = var2;
        var14 = var1;
        var4 = copyDataProperties(var16, var15, var14);
        var1 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 9;
        var0 = var10[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.useUserTag;
        var9 = var0.bind(var1)(var6);
        var2 = _closure1_slot8;
        var1 = _closure1_slot10;
        var0 = {};
        var0.user = var6;
        var6 = _closure1_slot0;
        var5 = 8;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var12 = var7.intl;
        var11 = var12.formatToPlainString;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.u6lp4x;
        var7 = {};
        var7.name = var9;
        var7 = var11.bind(var12)(var8, var7);
        var0.accessibilityLabel = var7;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["0E614Z"];
        var7 = var8.bind(var11)(var7);
        var0.acceptedRequestLabel = var7;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var12 = var7.intl;
        var11 = var12.formatToPlainString;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.cRwkp7;
        var7 = {};
        var7.name = var9;
        var7 = var11.bind(var12)(var8, var7);
        var0.acceptedRequestAccessibilityLabel = var7;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var12 = var7.intl;
        var11 = var12.formatToPlainString;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var8 = var7.MUfqsS;
        var7 = {};
        var7.name = var9;
        var7 = var11.bind(var12)(var8, var7);
        var0.acceptRequestAccessibilityLabel = var7;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.formatToPlainString;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5["0OF9IB"];
        var5 = {};
        var5.name = var9;
        var5 = var7.bind(var8)(var6, var5);
        var0.ignoreRequestAccessibilityLabel = var5;
        var16 = var0;
        var15 = var4;
        var4 = copyDataProperties(var16, var15);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.IncomingFriendRequestRow = var3;
    var1 = function arg0() {
        _fun108626: for (var _fun108626_ip = 0;;) switch (_fun108626_ip) {
            case 0:
                var4 = arg0;
                var7 = var4.user;
                var0 = var4.applicationId;
                var _closure2_slot0 = var0;
                var0 = null;
                var3 = Object.create(var0);
                var1 = 0;
                var3.user = var1;
                var3.applicationId = var1;
                var12 = {};
                var11 = var4;
                var10 = var3;
                var5 = copyDataProperties(var12, var11, var10);
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var3 = var4[var3];
                var4 = undefined;
                var8 = var6.bind(var4)(var3);
                var6 = var8.useStateFromStores;
                var9 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var8)(var3, var2);
                var2 = var0 == var6;
                if (var2) {
                    _fun108626_ip = 142;
                    continue _fun108626
                }
            case 108:
                var3 = _closure1_slot8;
                var2 = _closure1_slot11;
                var1 = {};
                var1.user = var7;
                var1.application = var6;
                var12 = var1;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var0 = var3.bind(var4)(var2, var1);
            case 142:
                return var0;
        }
    };
    var2.ConnectedIncomingGameFriendRequestRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 3454, 8898, 660, 33, 3720, 632, 1234, 3236, 13221, 11804, 9103, 13499, 14012, 2]);