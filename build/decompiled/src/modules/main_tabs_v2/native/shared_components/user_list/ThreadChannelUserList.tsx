// modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var17 = var0.channelId;
        var _closure2_slot0 = var17;
        var18 = var0.guildId;
        var _closure2_slot1 = var18;
        var7 = var0.disableStickySections;
        var6 = var0.listStyleOverride;
        var5 = var0.disableBottomSafeZone;
        var4 = var0.insetEnd;
        var9 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 7;
        var1 = var13[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var2 = var1.analyticsLocations;
        var _closure2_slot2 = var2;
        var1 = _closure1_slot0;
        var8 = 8;
        var10 = var13[var8];
        var15 = var1.bind(var3)(var10);
        var14 = var15.useStateFromStores;
        var10 = _closure1_slot6;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = function() { // Environment: var12
            var2 = _closure1_slot6;
            var1 = var2.getGuild;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var14 = var14.bind(var15)(var11, var10);
        var10 = 9;
        var10 = var13[var10];
        var11 = var1.bind(var3)(var10);
        var10 = var11.useThreadMemberListSections;
        var14 = var10.bind(var11)(var17, var14);
        var _closure2_slot3 = var14;
        var8 = var13[var8];
        var15 = var1.bind(var3)(var8);
        var11 = var15.useStateFromStores;
        var8 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() { // Environment: var12
            var2 = _closure1_slot4;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var19 = var11.bind(var15)(var10, var8);
        var _closure2_slot4 = var19;
        var8 = 10;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.bind(var3)();
        var _closure2_slot5 = var8;
        var16 = _closure1_slot3;
        var9 = var16.useRef;
        var10 = 0;
        var9 = var9.bind(var16)(var10);
        var _closure2_slot6 = var9;
        var9 = var16.useRef;
        var9 = var9.bind(var16)(var10);
        var _closure2_slot7 = var9;
        var10 = var16.useMemo;
        var9 = new Array(3);
        var9[0] = var17;
        var9[1] = var18;
        var9[2] = var8;
        var8 = function() { // Environment: var12
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 11;
            var0 = var2[var0];
            var3 = undefined;
            var2 = var1.bind(var3)(var0);
            var1 = function() { // Environment: var0
                _fun105808: for (var _fun105808_ip = 0;;) switch (_fun105808_ip) {
                    case 0:
                        var4 = _closure1_slot4;
                        var2 = var4.getChannel;
                        var1 = _closure2_slot0;
                        var2 = var2.bind(var4)(var1);
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun105808_ip = 116;
                            continue _fun105808
                        }
                    case 30:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.subscribeChannelDimensions;
                        var0 = {};
                        var4 = _closure2_slot1;
                        var0.guildId = var4;
                        var4 = _closure2_slot0;
                        var0.channelId = var4;
                        var4 = _closure2_slot7;
                        var4 = var4.current;
                        var0.y = var4;
                        var4 = _closure2_slot6;
                        var4 = var4.current;
                        var0.height = var4;
                        var3 = _closure2_slot5;
                        var0.rowHeight = var3;
                        var0 = var1.bind(var2)(var0);
                    case 116:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = 50;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var10 = var10.bind(var16)(var8, var9);
        var _closure2_slot8 = var10;
        var11 = var16.useCallback;
        var9 = new Array(1);
        var9[0] = var10;
        var8 = function(arg0) { // Environment: var12
            var2 = _closure2_slot6;
            var1 = arg0;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var1 = var1.height;
            var2.current = var1;
            var1 = _closure2_slot8;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var9 = var11.bind(var16)(var8, var9);
        var15 = var16.useCallback;
        var11 = new Array(1);
        var11[0] = var10;
        var8 = function(arg0) { // Environment: var12
            var2 = _closure2_slot7;
            var1 = arg0;
            var1 = var1.nativeEvent;
            var1 = var1.contentOffset;
            var1 = var1.y;
            var2.current = var1;
            var1 = _closure2_slot8;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var8 = var15.bind(var16)(var8, var11);
        var15 = var16.useEffect;
        var11 = new Array(2);
        var11[0] = var19;
        var11[1] = var10;
        var10 = function() { // Environment: var12
            _fun105811: for (var _fun105811_ip = 0;;) switch (_fun105811_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun105811_ip = 23;
                        continue _fun105811
                    }
                case 13:
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 23:
                    var0 = undefined;
                    return var0;
            }
        };
        var10 = var15.bind(var16)(var10, var11);
        var15 = var16.useCallback;
        var11 = new Array(1);
        var11[0] = var14;
        var10 = function(arg0) { // Environment: var12
            _fun105812: for (var _fun105812_ip = 0;;) switch (_fun105812_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun105812_ip = 46;
                        continue _fun105812
                    }
                case 20:
                    var6 = var1.label;
                    var1 = var1.userIds;
                    var5 = var1.length;
                    if (!(var0 != var6)) {
                        _fun105812_ip = 46;
                        continue _fun105812
                    }
                case 40:
                    var0 = 0;
                    if (!(var0 === var5)) {
                        _fun105812_ip = 50;
                        continue _fun105812
                    }
                case 46:
                    var0 = undefined;
                    return var0;
                case 50:
                    var0 = {};
                    var1 = 'section';
                    var0.type = var1;
                    var1 = {};
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ' — ';
                    var2 = var4.bind(var3)(var6, var2, var5);
                    var1.title = var2;
                    var0.props = var1;
                    return var0;
            }
        };
        var10 = var15.bind(var16)(var10, var11);
        var15 = var16.useCallback;
        var11 = new Array(4);
        var11[0] = var14;
        var11[1] = var18;
        var11[2] = var17;
        var11[3] = var2;
        var2 = function(arg0, arg1) { // Environment: var12
            _fun105813: for (var _fun105813_ip = 0;;) switch (_fun105813_ip) {
                case 0:
                    var1 = arg1;
                    var2 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var2[var0];
                    var0 = var0.userIds;
                    var4 = _closure1_slot7;
                    var3 = var4.getUser;
                    var2 = var0[var1];
                    var11 = var3.bind(var4)(var2);
                    var7 = null;
                    var2 = var7 != var11;
                    var5 = undefined;
                    var6 = undefined;
                    if (!var2) {
                        _fun105813_ip = 83;
                        continue _fun105813
                    }
                case 58:
                    var10 = _closure1_slot5;
                    var4 = var10.getMember;
                    var3 = _closure2_slot1;
                    var2 = var11.id;
                    var6 = var4.bind(var10)(var3, var2);
                case 83:
                    var2 = 0;
                    var4 = var2 === var1;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var3 = var1 === var0;
                    if (!(var7 == var11)) {
                        _fun105813_ip = 138;
                        continue _fun105813
                    }
                case 109:
                    var0 = {};
                    var1 = 'placeholder';
                    var0.type = var1;
                    var1 = {};
                    var1.start = var4;
                    var1.end = var3;
                    var0.props = var1;
                    _fun105813_ip = 311;
                    continue _fun105813;
                case 138:
                    var1 = {};
                    var2 = 'user';
                    var1.type = var2;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var10 = var10.NONE;
                    var2.type = var10;
                    var2.user = var11;
                    var8 = _closure2_slot1;
                    var2.guildId = var8;
                    var10 = var7 == var6;
                    var8 = undefined;
                    if (var10) {
                        _fun105813_ip = 191;
                        continue _fun105813
                    }
                case 185:
                    var8 = var6.nick;
                case 191:
                    if (!(var7 == var8)) {
                        _fun105813_ip = 226;
                        continue _fun105813
                    }
                case 195:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 13;
                    var9 = var12[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.getGlobalName;
                    var8 = var9.bind(var10)(var11);
                case 226:
                    var2.nickname = var8;
                    var9 = var7 == var6;
                    var8 = undefined;
                    if (var9) {
                        _fun105813_ip = 246;
                        continue _fun105813
                    }
                case 240:
                    var8 = var6.colorString;
                case 246:
                    var2.usernameColor = var8;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun105813_ip = 266;
                        continue _fun105813
                    }
                case 260:
                    var5 = var6.colorStrings;
                case 266:
                    var2.roleColors = var5;
                    var5 = true;
                    var2.isNameplatedRow = var5;
                    var2.canShowDisplayNameStylesFont = var5;
                    var5 = function arg0() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var3 = arg0;
                        var3 = var3.id;
                        var1.userId = var3;
                        var4 = _closure2_slot2;
                        var1.sourceAnalyticsLocations = var4;
                        var3 = _closure2_slot0;
                        var1.channelId = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onPress = var5;
                    var2.start = var4;
                    var2.end = var3;
                    var1.props = var2;
                    var0 = var1;
                case 311:
                    return var0;
            }
        };
        var11 = var15.bind(var16)(var2, var11);
        var2 = _closure1_slot9;
        var0 = 15;
        var0 = var13[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.UsersFastList;
        var0 = {};
        var13 = var14.map;
        var12 = function(arg0) { // Environment: var12
            var0 = arg0;
            var0 = var0.userIds;
            var0 = var0.length;
            return var0;
        };
        var12 = var13.bind(var14)(var12);
        var0.sections = var12;
        var0.getItemProps = var11;
        var0.getSectionProps = var10;
        var0.onLayout = var9;
        var0.onScroll = var8;
        var0.disableStickySections = var7;
        var7 = true;
        var0.disableBackgroundOverlay = var7;
        var0.listStyleOverride = var6;
        var0.disableBottomSafeZone = var5;
        var0.insetEnd = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1681, 1410, 1621, 660, 33, 5726, 566, 13788, 7559, 13782, 7744, 3236, 7350, 9096, 2]);