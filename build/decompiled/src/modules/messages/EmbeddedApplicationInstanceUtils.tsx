// modules/messages/EmbeddedApplicationInstanceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function arg0() {
        _fun92474: for (var _fun92474_ip = 0;;) switch (_fun92474_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.embeddedActivity;
                var5 = var0.joinability;
                var8 = var0.currentEmbeddedActivity;
                var11 = var0.channel;
                var0 = null;
                var7 = var0 == var9;
                var3 = {};
                var1 = false;
                var3.disabled = var1;
                var1 = !var7;
                var3.isJoinAction = var1;
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 1;
                var12 = var4[var6];
                var2 = undefined;
                var12 = var10.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var4 = var4[var6];
                var4 = var10.bind(var2)(var4);
                var10 = var4.t;
                if (var7) {
                    _fun92474_ip = 117;
                    continue _fun92474
                }
            case 102:
                var4 = var10.sqe0hj;
                var4 = var12.bind(var13)(var4);
                _fun92474_ip = 128;
                continue _fun92474;
            case 117:
                var10 = var10.RscU7I;
                var4 = var12.bind(var13)(var10);
            case 128:
                var3.text = var4;
                var3.tooltip = var2;
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 2;
                var4 = var12[var4];
                var10 = var10.bind(var2)(var4);
                var4 = var10.isActivitiesInTextEnabled;
                var4 = var4.bind(var10)(var11);
                if (!(var0 != var9)) {
                    _fun92474_ip = 195;
                    continue _fun92474
                }
            case 172:
                if (!(var0 != var8)) {
                    _fun92474_ip = 195;
                    continue _fun92474
                }
            case 176:
                var9 = var9.launchId;
                var8 = var8.launchId;
                if (!(var9 !== var8)) {
                    _fun92474_ip = 1114;
                    continue _fun92474
                }
            case 195:
                if (var7) {
                    _fun92474_ip = 1022;
                    continue _fun92474
                }
            case 201:
                if (!(var0 != var5)) {
                    _fun92474_ip = 241;
                    continue _fun92474
                }
            case 205:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 3;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.CAN_JOIN;
                if (!(var5 === var0)) {
                    _fun92474_ip = 243;
                    continue _fun92474
                }
            case 241:
                return var3;
            case 243:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 936;
                    continue _fun92474
                }
            case 279:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.ACTIVITY_AGE_GATED;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 882;
                    continue _fun92474
                }
            case 315:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 828;
                    continue _fun92474
                }
            case 351:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.ACTIVITY_NOT_SUPPORTED_ON_OS;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 771;
                    continue _fun92474
                }
            case 387:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.CHANNEL_FULL;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 714;
                    continue _fun92474
                }
            case 423:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.NO_CHANNEL_CONNECT_PERMISSION;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 655;
                    continue _fun92474
                }
            case 459:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.NO_CHANNEL;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 596;
                    continue _fun92474
                }
            case 492:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.NO_GUILD;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 596;
                    continue _fun92474
                }
            case 525:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.NO_USER;
                if (!(var0 !== var5)) {
                    _fun92474_ip = 596;
                    continue _fun92474
                }
            case 558:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var2)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.IS_AFK_CHANNEL;
                var7 = undefined;
                if (!(var0 === var5)) {
                    _fun92474_ip = 988;
                    continue _fun92474
                }
            case 596:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.Etp6uI;
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 655:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.w5SAps;
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 714:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.rZfiNq;
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 771:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.UXoQTp;
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 828:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.uGDCcw;
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 882:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0["4WuFRE"];
                var7 = var5.bind(var8)(var0);
                _fun92474_ip = 988;
                continue _fun92474;
            case 936:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var6];
                var5 = var9.bind(var2)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var0 = var0[var6];
                var0 = var9.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.hHGrWz;
                var7 = var5.bind(var8)(var0);
            case 988:
                var0 = {};
                var16 = var0;
                var15 = var3;
                var5 = copyDataProperties(var16, var15);
                var8 = true;
                var5 = 'disabled';
                var0[var5] = var8;
                var5 = 'tooltip';
                var0[var5] = var7;
                return var0;
            case 1022:
                var0 = {};
                var16 = var0;
                var15 = var3;
                var5 = copyDataProperties(var16, var15);
                var7 = !var4;
                var5 = 'disabled';
                var0[var5] = var7;
                var5 = undefined;
                if (var4) {
                    _fun92474_ip = 1103;
                    continue _fun92474
                }
            case 1051:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = var4[var6];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var4[var6];
                var4 = var9.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.f41E1g;
                var5 = var7.bind(var8)(var4);
            case 1103:
                var4 = 'tooltip';
                var0[var4] = var5;
                return var0;
            case 1114:
                var0 = {};
                var16 = var0;
                var15 = var3;
                var3 = copyDataProperties(var16, var15);
                var4 = true;
                var3 = 'disabled';
                var0[var3] = var4;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var6];
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var1[var6];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var1 = var1.DPfdsq;
                var3 = var3.bind(var4)(var1);
                var1 = 'text';
                var0[var1] = var3;
                var1 = 'tooltip';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var8 = 0;
    var5 = var7[var8];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot2 = var4;
    var4 = {};
    var4.ACTIVE = var8;
    var5 = 'ACTIVE';
    var4[var8] = var5;
    var8 = 1;
    var4.ENDED = var8;
    var5 = 'ENDED';
    var4[var8] = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/EmbeddedApplicationInstanceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.EmbedStates = var4;
    var3 = function arg0() {
        var1 = arg0;
        var7 = var1.embeddedActivity;
        var _closure2_slot0 = var7;
        var6 = var1.joinability;
        var _closure2_slot1 = var6;
        var5 = var1.currentEmbeddedActivity;
        var _closure2_slot2 = var5;
        var4 = var1.channel;
        var _closure2_slot3 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = {};
            var3 = _closure2_slot0;
            var1.embeddedActivity = var3;
            var3 = _closure2_slot1;
            var1.joinability = var3;
            var3 = _closure2_slot2;
            var1.currentEmbeddedActivity = var3;
            var0 = _closure2_slot3;
            var1.channel = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useJoinOrStartButtonState = var3;
    var2.getJoinOrStartButtonState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1234, 6824, 7964, 2]);