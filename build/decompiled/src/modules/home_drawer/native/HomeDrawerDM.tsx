// modules/home_drawer/native/HomeDrawerDM.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: HomeDrawerDMExpandedChildren, environment: var1
        var0 = arg0;
        var12 = var0.channel;
        var _closure2_slot0 = var12;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 8;
        var4 = var6[var5];
        var3 = undefined;
        var9 = var1.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot8;
        var7 = new Array(1);
        var7[0] = var4;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot8;
            var1 = var2.getUser;
            var3 = _closure2_slot0;
            var0 = var3.getRecipientId;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var8.bind(var9)(var7, var4);
        var _closure2_slot1 = var4;
        var4 = var6[var5];
        var9 = var1.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot8;
        var7 = new Array(2);
        var7[0] = var4;
        var4 = _closure1_slot6;
        var7[1] = var4;
        var4 = function() { // Environment: var2
            _fun101740: for (var _fun101740_ip = 0;;) switch (_fun101740_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 == var0;
                    var0 = null;
                    if (var2) {
                        _fun101740_ip = 105;
                        continue _fun101740
                    }
                case 18:
                    var5 = _closure1_slot5;
                    var4 = _closure2_slot0;
                    var4 = var4.type;
                    var6 = undefined;
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun101740_ip = 57;
                        continue _fun101740
                    }
                case 44:
                    var4 = _closure2_slot1;
                    var4 = var1 != var4;
                    var1 = null;
                    if (!var4) {
                        _fun101740_ip = 102;
                        continue _fun101740
                    }
                case 57:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.computeChannelName;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot6;
                    var1 = var5.bind(var6)(var4, var3, var2);
                case 102:
                    var0 = var1;
                case 105:
                    return var0;
            }
        };
        var4 = var8.bind(var9)(var7, var4);
        var _closure2_slot2 = var4;
        var7 = 10;
        var7 = var6[var7];
        var9 = var1.bind(var3)(var7);
        var8 = var9.useBaseChannelUnreadBadgeState;
        var7 = false;
        var7 = var8.bind(var9)(var12, var7);
        var10 = var7.unread;
        var _closure2_slot3 = var10;
        var8 = _closure1_slot1;
        var7 = 11;
        var7 = var6[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var7.unread = var10;
        var11 = var8.bind(var3)(var12, var7);
        var _closure2_slot4 = var11;
        var5 = var6[var5];
        var9 = var1.bind(var3)(var5);
        var8 = var9.useStateFromStores;
        var5 = _closure1_slot7;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() { // Environment: var2
            var3 = _closure1_slot7;
            var2 = var3.getChannelMuteConfig;
            var0 = _closure2_slot0;
            var1 = var0.guild_id;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var8.bind(var9)(var7, var5);
        var _closure2_slot5 = var5;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() { // Environment: var2
            _fun101742: for (var _fun101742_ip = 0;;) switch (_fun101742_ip) {
                case 0:
                    var0 = _closure2_slot5;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun101742_ip = 126;
                        continue _fun101742
                    }
                case 13:
                    var0 = {};
                    var3 = _closure2_slot5;
                    var3 = var3.end_time;
                    var3 = var2 == var3;
                    if (var3) {
                        _fun101742_ip = 100;
                        continue _fun101742
                    }
                case 32:
                    var4 = global;
                    var7 = var4.Date;
                    var5 = _closure2_slot5;
                    var8 = var5.end_time;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var4 = var4.Date;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var6;
                    var4 = new var9[var4](var8);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var3 = var5 > var4;
                case 100:
                    var0.isMuted = var3;
                    var1 = _closure2_slot5;
                    var1 = var1.end_time;
                    var1 = var2 != var1;
                    var0.isTemporary = var1;
                    _fun101742_ip = 140;
                    continue _fun101742;
                case 126:
                    var0 = {
                        'isMuted': false,
                        'isTemporary': false
                    };
                case 140:
                    return var0;
            }
        };
        var9 = var8.bind(var9)(var5, var7);
        var _closure2_slot6 = var9;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var5 = new Array(3);
        var5[0] = var4;
        var5[1] = var10;
        var5[2] = var9;
        var4 = function() { // Environment: var2
            _fun101743: for (var _fun101743_ip = 0;;) switch (_fun101743_ip) {
                case 0:
                    var0 = _closure2_slot6;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun101743_ip = 26;
                        continue _fun101743
                    }
                case 13:
                    var0 = _closure2_slot6;
                    var0 = var0.isMuted;
                    if (var0) {
                        _fun101743_ip = 35;
                        continue _fun101743
                    }
                case 26:
                    var7 = _closure1_slot9;
                    _fun101743_ip = 123;
                    continue _fun101743;
                case 35:
                    var0 = _closure2_slot6;
                    if (!(var1 != var0)) {
                        _fun101743_ip = 56;
                        continue _fun101743
                    }
                case 43:
                    var0 = _closure2_slot6;
                    var0 = var0.isTemporary;
                    if (var0) {
                        _fun101743_ip = 89;
                        continue _fun101743
                    }
                case 56:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.BellSlashIcon;
                    _fun101743_ip = 120;
                    continue _fun101743;
                case 89:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var0 = var1.BellZIcon;
                case 120:
                    var7 = var0;
                case 123:
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var0 = {
                        'flexDirection': 'row',
                        'alignItems': 'center',
                        'gap': 4
                    };
                    var1.style = var0;
                    var8 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 14;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var6 = var4.Text;
                    var4 = {};
                    var10 = 'text-md/semibold';
                    var4.variant = var10;
                    var11 = _closure2_slot3;
                    var10 = 'text-muted';
                    if (!var11) {
                        _fun101743_ip = 214;
                        continue _fun101743
                    }
                case 208:
                    var10 = 'mobile-text-heading-primary';
                case 214:
                    var4.color = var10;
                    var9 = _closure2_slot2;
                    var4.children = var9;
                    var6 = var8.bind(var0)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var6 = _closure1_slot10;
                    var5 = {};
                    var8 = 'xs';
                    var5.size = var8;
                    var5 = var6.bind(var0)(var7, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var5 = var7.bind(var8)(var4, var5);
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var4 = new Array(4);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var2 = function() { // Environment: var2
            _fun101744: for (var _fun101744_ip = 0;;) switch (_fun101744_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun101744_ip = 163;
                        continue _fun101744
                    }
                case 19:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ChannelRowPreview;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.channel = var7;
                    var7 = _closure2_slot4;
                    var1.message = var7;
                    var7 = 'text-xs/medium';
                    var1.variant = var7;
                    var8 = _closure2_slot3;
                    var7 = 'text-muted';
                    if (!var8) {
                        _fun101744_ip = 101;
                        continue _fun101744
                    }
                case 95:
                    var7 = 'text-strong';
                case 101:
                    var1.color = var7;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 16;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.ChannelListLayoutTypes;
                    var6 = var6.COZY;
                    var1.layout = var6;
                    var5 = _closure2_slot6;
                    var5 = var5.isMuted;
                    var1.muted = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 163:
                    return var0;
            }
        };
        var4 = var7.bind(var8)(var2, var4);
        var2 = _closure1_slot10;
        var0 = 17;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.HomeDrawerSharedItem;
        var0 = {};
        var0.title = var5;
        var0.subtitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isMultiUserDM;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerDM.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HomeDrawerDMExpandedChildrenWrapper, environment: var1
        _fun101745: for (var _fun101745_ip = 0;;) switch (_fun101745_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 18;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var6 = var0.MobileHomeDrawerExperiment;
                var2 = var6.useConfig;
                var0 = {};
                var7 = 'dm-expanded-children';
                var0.location = var7;
                var0 = var2.bind(var6)(var0);
                var6 = var0.enableHome;
                var2 = _closure1_slot1;
                var0 = 19;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = var0.isChatBesideChannelList;
                var0 = null;
                if (!var6) {
                    _fun101745_ip = 124;
                    continue _fun101745
                }
            case 99:
                var0 = null;
                if (var2) {
                    _fun101745_ip = 124;
                    continue _fun101745
                }
            case 104:
                var3 = _closure1_slot10;
                var2 = _closure1_slot12;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 124:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1376, 3059, 4266, 1613, 483, 33, 566, 4754, 13197, 10816, 13193, 8715, 3901, 8736, 8749, 13172, 3884, 3881, 2]);