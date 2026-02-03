// modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87167: for (var _fun87167_ip = 0;;) switch (_fun87167_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var11 = var7.type;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 3;
                var1 = var0[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var1 = var5.getSelectPlaceholder;
                var12 = var1.bind(var5)(var7);
                var1 = 4;
                var1 = var0[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useComponentStateContext;
                var10 = var1.bind(var2)();
                var1 = _closure1_slot1;
                var5 = 5;
                var0 = var0[var5];
                var8 = var1.bind(var3)(var0);
                var1 = null;
                var2 = var1 == var10;
                var0 = undefined;
                if (var2) {
                    _fun87167_ip = 105;
                    continue _fun87167
                }
            case 99:
                var0 = var10.modal;
            case 105:
                var2 = var1 != var0;
                var0 = 'SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext';
                var0 = var8.bind(var3)(var2, var0);
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var5 = var2.bind(var3)(var0);
                var2 = var1 == var10;
                var0 = undefined;
                if (var2) {
                    _fun87167_ip = 152;
                    continue _fun87167
                }
            case 147:
                var0 = var10.channelId;
            case 152:
                var2 = var1 != var0;
                var0 = 'SearchableSelectActionComponent must be used inside a channel';
                var0 = var5.bind(var3)(var2, var0);
                var5 = _closure1_slot4;
                var2 = var5.getChannel;
                var0 = var10.channelId;
                var2 = var2.bind(var5)(var0);
                var5 = var1 == var2;
                var0 = undefined;
                if (var5) {
                    _fun87167_ip = 201;
                    continue _fun87167
                }
            case 196:
                var0 = var2.guild_id;
            case 201:
                var2 = var1 != var0;
                var9 = null;
                if (!var2) {
                    _fun87167_ip = 213;
                    continue _fun87167
                }
            case 210:
                var9 = var0;
            case 213:
                var _closure2_slot1 = var9;
                var8 = _closure1_slot3;
                var5 = var8.useMemo;
                var0 = var7.defaultValues;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var9;
                var0 = function() { // Environment: var4
                    _fun87168: for (var _fun87168_ip = 0;;) switch (_fun87168_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getSnowflakeSelectDefaultValues;
                            var1 = _closure2_slot0;
                            var1 = var1.defaultValues;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun87168_ip = 64;
                                continue _fun87168
                            }
                        case 60:
                            var0 = new Array(0);
                        case 64:
                            return var0;
                    }
                };
                var8 = var5.bind(var8)(var0, var2);
                var2 = var10.useComponentState;
                var0 = var8.length;
                var14 = 0;
                var5 = var0 > var14;
                var0 = undefined;
                if (!var5) {
                    _fun87167_ip = 293;
                    continue _fun87167
                }
            case 279:
                var5 = {};
                var5.type = var11;
                var5.selectedOptions = var8;
                var0 = var5;
            case 293:
                var2 = var2.bind(var10)(var7, var0);
                var0 = var2.state;
                var11 = var2.visualState;
                var2 = var2.executeStateUpdate;
                var5 = var10.modal;
                var5 = var5.customId;
                var _closure2_slot2 = var5;
                var13 = var1 == var0;
                var16 = undefined;
                if (var13) {
                    _fun87167_ip = 346;
                    continue _fun87167
                }
            case 341:
                var16 = var0.type;
            case 346:
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = 7;
                var13 = var13[var15];
                var13 = var17.bind(var3)(var13);
                var13 = var13.ComponentType;
                var13 = var13.USER_SELECT;
                if (!(var16 !== var13)) {
                    _fun87167_ip = 526;
                    continue _fun87167
                }
            case 385:
                var13 = var1 == var0;
                var16 = undefined;
                if (var13) {
                    _fun87167_ip = 399;
                    continue _fun87167
                }
            case 394:
                var16 = var0.type;
            case 399:
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var17.bind(var3)(var13);
                var13 = var13.ComponentType;
                var13 = var13.ROLE_SELECT;
                if (!(var16 !== var13)) {
                    _fun87167_ip = 526;
                    continue _fun87167
                }
            case 432:
                var13 = var1 == var0;
                var16 = undefined;
                if (var13) {
                    _fun87167_ip = 446;
                    continue _fun87167
                }
            case 441:
                var16 = var0.type;
            case 446:
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var17.bind(var3)(var13);
                var13 = var13.ComponentType;
                var13 = var13.MENTIONABLE_SELECT;
                if (!(var16 !== var13)) {
                    _fun87167_ip = 526;
                    continue _fun87167
                }
            case 479:
                var13 = var1 == var0;
                var16 = undefined;
                if (var13) {
                    _fun87167_ip = 493;
                    continue _fun87167
                }
            case 488:
                var16 = var0.type;
            case 493:
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var17.bind(var3)(var13);
                var13 = var13.ComponentType;
                var13 = var13.CHANNEL_SELECT;
                if (!(var16 === var13)) {
                    _fun87167_ip = 532;
                    continue _fun87167
                }
            case 526:
                var8 = var0.selectedOptions;
            case 532:
                var0 = var10.getParents;
                var13 = var0.bind(var10)(var7);
                var16 = var1 == var13;
                var0 = undefined;
                if (var16) {
                    _fun87167_ip = 556;
                    continue _fun87167
                }
            case 552:
                var0 = var13[var14];
            case 556:
                var1 = var1 == var0;
                var14 = undefined;
                if (var1) {
                    _fun87167_ip = 570;
                    continue _fun87167
                }
            case 565:
                var14 = var0.type;
            case 570:
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.ComponentType;
                var13 = var1.LABEL;
                var1 = undefined;
                if (!(var14 === var13)) {
                    _fun87167_ip = 608;
                    continue _fun87167
                }
            case 605:
                var1 = var0;
            case 608:
                var0 = {};
                var10 = var10.channelId;
                var0.channelId = var10;
                var0.guildId = var9;
                var0.containerId = var5;
                var0.onSubmit = var2;
                var0.labelComponent = var1;
                var _closure2_slot3 = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 8;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = {};
                var19 = var5;
                var18 = var7;
                var7 = copyDataProperties(var19, var18);
                var7 = 'placeholder';
                var5[var7] = var12;
                var7 = 'state';
                var5[var7] = var11;
                var7 = _closure1_slot0;
                var6 = 9;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.transformSearchableSelectOptions;
                var7 = var6.bind(var7)(var8, var9);
                var6 = 'selectedOptions';
                var5[var6] = var7;
                var0.model = var5;
                var4 = function() {
                    _fun87169: for (var _fun87169_ip = 0;;) switch (_fun87169_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.ComponentType;
                            var1 = var1.CHANNEL_SELECT;
                            if (!(var3 !== var1)) {
                                _fun87169_ip = 172;
                                continue _fun87169
                            }
                        case 53:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 10;
                            var3 = var1[var3];
                            var7 = var4.bind(var0)(var3);
                            var5 = var7.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 12;
                            var3 = var1[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 13;
                            var3 = var1[var3];
                            var1 = var1.paths;
                            var4 = var4.bind(var0)(var3, var1);
                            var8 = _closure2_slot2;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var1 = 'MentionableSelectComponentActionSheet:';
                            var3 = var3.bind(var1)(var8);
                            var1 = {};
                            var8 = _closure2_slot0;
                            var1.selectionActionComponent = var8;
                            var10 = _closure2_slot3;
                            var11 = var1;
                            var8 = copyDataProperties(var11, var10);
                            var1 = var5.bind(var7)(var4, var3, var1);
                            _fun87169_ip = 289;
                            continue _fun87169;
                        case 172:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 10;
                            var3 = var1[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 12;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 11;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var7 = _closure2_slot2;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = 'ChannelSelectComponentActionSheet:';
                            var2 = var2.bind(var1)(var7);
                            var1 = {};
                            var7 = _closure2_slot0;
                            var1.selectionActionComponent = var7;
                            var10 = _closure2_slot3;
                            var11 = var1;
                            var6 = copyDataProperties(var11, var10);
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 289:
                            return var0;
                    }
                };
                var0.onTap = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 3965, 6817, 44, 6823, 1636, 11262, 6825, 3269, 10077, 1307, 10073, 2]);