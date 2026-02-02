// ../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var16;
    var0 = function arg0, arg1, arg2() {
        _fun28280: for (var _fun28280_ip = 0;;) switch (_fun28280_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot20;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun28280_ip = 51;
                    continue _fun28280
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun28280_ip = 92;
                continue _fun28280;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun28280_ip = 71;
                    continue _fun28280
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun28281: for (var _fun28281_ip = 0;;) switch (_fun28281_ip) {
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
                _fun28281_ip = 74;
                continue _fun28281;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var17 = 0;
    var1 = var16[var17];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var5 = 1;
    var1 = var16[var5];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var4 = 2;
    var1 = var16[var4];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var18 = 3;
    var1 = var16[var18];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var3 = 4;
    var1 = var16[var3];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var7 = 5;
    var1 = var16[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var13 = {};
    var13.UNSPECIFIED = var17;
    var1 = 'UNSPECIFIED';
    var13[var17] = var1;
    var13.USER = var5;
    var6 = 'USER';
    var13[var5] = var6;
    var13.INSTALLATION = var4;
    var6 = 'INSTALLATION';
    var13[var4] = var6;
    var13.GUILD = var18;
    var6 = 'GUILD';
    var13[var18] = var6;
    var _closure1_slot8 = var13;
    var12 = {};
    var12.SURFACE_UNSPECIFIED = var17;
    var6 = 'SURFACE_UNSPECIFIED';
    var12[var17] = var6;
    var12.API = var5;
    var6 = 'API';
    var12[var5] = var6;
    var12.APP = var4;
    var6 = 'APP';
    var12[var4] = var6;
    var12.DEVELOPER_PORTAL = var18;
    var6 = 'DEVELOPER_PORTAL';
    var12[var18] = var6;
    var12.ADMIN_PANEL = var3;
    var6 = 'ADMIN_PANEL';
    var12[var3] = var6;
    var12.ADS_BUDGET_AB = var7;
    var6 = 'ADS_BUDGET_AB';
    var12[var7] = var6;
    var _closure1_slot9 = var12;
    var11 = {};
    var11.ENABLED = var17;
    var6 = 'ENABLED';
    var11[var17] = var6;
    var11.DISABLED = var5;
    var6 = 'DISABLED';
    var11[var5] = var6;
    var _closure1_slot10 = var11;
    var10 = {};
    var10.FULL = var17;
    var6 = 'FULL';
    var10[var17] = var6;
    var10.FORCE_CONTROL = var18;
    var6 = 'FORCE_CONTROL';
    var10[var18] = var6;
    var10.OVERRIDES_ONLY = var3;
    var6 = 'OVERRIDES_ONLY';
    var10[var3] = var6;
    var10.OFF = var7;
    var6 = 'OFF';
    var10[var7] = var6;
    var _closure1_slot11 = var10;
    var9 = {};
    var9.DEFAULT = var17;
    var6 = 'DEFAULT';
    var9[var17] = var6;
    var9.HOLDOUT = var5;
    var6 = 'HOLDOUT';
    var9[var5] = var6;
    var _closure1_slot12 = var9;
    var8 = {};
    var8.UNSPECIFIED = var17;
    var8[var17] = var1;
    var8.CONTROL = var5;
    var6 = 'CONTROL';
    var8[var5] = var6;
    var8.TREATMENT = var4;
    var6 = 'TREATMENT';
    var8[var4] = var6;
    var8.OVERRIDE = var18;
    var6 = 'OVERRIDE';
    var8[var18] = var6;
    var _closure1_slot13 = var8;
    var7 = {};
    var7.UNSPECIFIED = var17;
    var7[var17] = var1;
    var7.ACTIVE = var5;
    var6 = 'ACTIVE';
    var7[var5] = var6;
    var7.UNUSED = var4;
    var6 = 'UNUSED';
    var7[var4] = var6;
    var7.BURNED = var18;
    var6 = 'BURNED';
    var7[var18] = var6;
    var7.PRESERVED = var3;
    var6 = 'PRESERVED';
    var7[var3] = var6;
    var _closure1_slot14 = var7;
    var6 = {};
    var6.UNSPECIFIED = var17;
    var6[var17] = var1;
    var6.DRAFT = var5;
    var1 = 'DRAFT';
    var6[var5] = var1;
    var6.MEASUREMENT = var4;
    var1 = 'MEASUREMENT';
    var6[var4] = var1;
    var6.ROLLING_OUT = var3;
    var1 = 'ROLLING_OUT';
    var6[var3] = var1;
    var3 = 6;
    var6.ARCHIVED = var3;
    var1 = 'ARCHIVED';
    var6[var3] = var1;
    var3 = 7;
    var6.AA_MODE = var3;
    var1 = 'AA_MODE';
    var6[var3] = var1;
    var _closure1_slot15 = var6;
    var1 = 9;
    var3 = var16[var1];
    var3 = var15.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var14
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot19;
            var5 = new Array(33);
            var0 = {
                'no': 1,
                'name': 'id',
                'kind': 'scalar',
                'T': 6
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'name',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'created_at',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'creator_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'version',
                'kind': 'scalar',
                'T': 5
            };
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'edited_at',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 7,
                'name': 'editor_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[6] = var0;
            var0 = {
                'no': 8,
                'name': 'title',
                'kind': 'scalar',
                'T': 9
            };
            var5[7] = var0;
            var0 = {
                'no': 9,
                'name': 'description',
                'kind': 'scalar',
                'T': 9
            };
            var5[8] = var0;
            var0 = {
                'no': 10,
                'name': 'hypothesis',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[9] = var0;
            var0 = {
                'no': 11,
                'name': 'tech_spec_link',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var7;
            var5[10] = var0;
            var0 = {
                'no': 12,
                'name': 'revision',
                'kind': 'scalar',
                'T': 5
            };
            var5[11] = var0;
            var0 = {
                'no': 13,
                'name': 'hash_key',
                'kind': 'scalar',
                'T': 9
            };
            var5[12] = var0;
            var0 = {
                'no': 14,
                'name': 'unit_type',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot8;
                var0 = ['discord_protos.discord_experimentation.v1.Experiment.UnitType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[13] = var0;
            var0 = {
                'no': 15,
                'name': 'variations',
                'kind': 'message',
                'repeat': 1
            };
            var7 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var0.T = var7;
            var5[14] = var0;
            var0 = {
                'no': 16,
                'name': 'rules',
                'kind': 'message',
                'repeat': 1
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Rule;
                return var0;
            };
            var0.T = var7;
            var5[15] = var0;
            var0 = {
                'no': 18,
                'name': 'phase',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot15;
                var0 = ['discord_protos.discord_experimentation.v1.Phase'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[16] = var0;
            var0 = {
                'no': 19,
                'name': 'surfaces',
                'kind': 'enum',
                'repeat': 1
            };
            var7 = function() {
                var1 = _closure1_slot9;
                var0 = ['discord_protos.discord_experimentation.v1.Experiment.Surface'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[17] = var0;
            var0 = {
                'no': 20,
                'name': 'owning_team_id',
                'kind': 'scalar',
                'T': 9
            };
            var5[18] = var0;
            var0 = {
                'no': 21,
                'name': 'cached_notification_channel_id',
                'kind': 'scalar',
                'T': 6
            };
            var5[19] = var0;
            var0 = {
                'no': 22,
                'name': 'exposure_tracking',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot10;
                var0 = ['discord_protos.discord_experimentation.v1.Experiment.ExposureTracking'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[20] = var0;
            var0 = {
                'no': 25,
                'name': 'assignment_mode',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot11;
                var0 = ['discord_protos.discord_experimentation.v1.Experiment.AssignmentMode'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[21] = var0;
            var0 = {
                'no': 23,
                'name': 'enable_edit_raw_json_ui',
                'kind': 'scalar',
                'T': 8
            };
            var5[22] = var0;
            var0 = {
                'no': 24,
                'name': 'winning_variation_id',
                'kind': 'scalar',
                'T': 5
            };
            var5[23] = var0;
            var0 = {
                'no': 34,
                'name': 'extra_outcome_context',
                'kind': 'scalar',
                'T': 9
            };
            var5[24] = var0;
            var0 = {
                'no': 26,
                'name': 'type',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot12;
                var0 = ['discord_protos.discord_experimentation.v1.Experiment.Type'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[25] = var0;
            var0 = {
                'no': 27,
                'name': 'is_template',
                'kind': 'scalar',
                'T': 8
            };
            var5[26] = var0;
            var0 = {
                'no': 28,
                'name': 'field_numbers_to_copy',
                'kind': 'scalar',
                'repeat': 1,
                'T': 5
            };
            var5[27] = var0;
            var0 = {
                'no': 29,
                'name': 'engine_feature_flags',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[28] = var0;
            var0 = {
                'no': 30,
                'name': 'debug_config',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot18;
                return var0;
            };
            var0.T = var7;
            var5[29] = var0;
            var0 = {
                'no': 31,
                'name': 'expected_end_date',
                'kind': 'message'
            };
            var7 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var7;
            var5[30] = var0;
            var0 = {
                'no': 32,
                'name': 'is_automated_change',
                'kind': 'scalar',
                'T': 8
            };
            var5[31] = var0;
            var0 = {
                'no': 33,
                'name': 'archive_at',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Timestamp;
                return var0;
            };
            var0.T = var6;
            var5[32] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Experiment'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28301: for (var _fun28301_ip = 0;;) switch (_fun28301_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'id': '0',
                        'name': '',
                        'creatorId': '0',
                        'version': 0,
                        'editorId': '0',
                        'title': '',
                        'description': '',
                        'revision': 0,
                        'hashKey': '',
                        'unitType': 0,
                        'variations': null,
                        'rules': null,
                        'phase': 0,
                        'surfaces': null,
                        'owningTeamId': '',
                        'cachedNotificationChannelId': '0',
                        'exposureTracking': 0,
                        'assignmentMode': 0,
                        'enableEditRawJsonUi': false,
                        'winningVariationId': 0,
                        'extraOutcomeContext': '',
                        'type': 0,
                        'isTemplate': false
                    };
                    var1 = new Array(0);
                    var0.variations = var1;
                    var1 = new Array(0);
                    var0.rules = var1;
                    var1 = new Array(0);
                    var0.surfaces = var1;
                    var10 = false;
                    var1 = new Array(0);
                    var0.fieldNumbersToCopy = var1;
                    var1 = new Array(0);
                    var0.engineFeatureFlags = var1;
                    var0.isAutomatedChange = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 9;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28301_ip = 175;
                        continue _fun28301
                    }
                case 145:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 175:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28302: for (var _fun28302_ip = 0;;) switch (_fun28302_ip) {
                case 0:
                    var23 = arg0;
                    var22 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun28302_ip = 27;
                        continue _fun28302
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var23.pos;
                    var2 = arg1;
                    var21 = var3 + var2;
                    var2 = var23.pos;
                    var2 = var2 < var21;
                    var20 = undefined;
                    var18 = 9;
                    var17 = true;
                    var16 = false;
                    var15 = 'throw';
                    var14 = 6;
                    var13 = 7;
                    var12 = 8;
                    var11 = 2;
                    var10 = 0;
                    var9 = 1;
                    var8 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun28302_ip = 2065;
                        continue _fun28302
                    }
                case 95:
                    var2 = var23.tag;
                    var6 = var2.bind(var23)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var20)(var6, var11);
                    var7 = var2[var10];
                    var6 = var2[var9];
                    SwitchImm(value_reg = 7, jump_table_address = 2147, default_jump_address = 1929, unsigned_min_value = 1, unsigned_max_value = 34) // Switch table: [1890, 1858, 1777, 1735, 1702, 1621, 1579, 1547, 1515, 1434, 1353, 1320, 1288, 1255, 1195, 1116, 1929, 1083, 913, 881, 839, 806, 740, 707, 773, 642, 609, 439, 397, 335, 254, 221, 140, 675];
                case 140:
                    var24 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var14];
                    var2 = var24.bind(var20)(var2);
                    var26 = var2.Timestamp;
                    var25 = var26.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.archiveAt;
                    var37 = var26;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var25](var36, var35, var34, var33, var32);
                    var0.archiveAt = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 221:
                    var2 = var23.bool;
                    var2 = var2.bind(var23)();
                    var0.isAutomatedChange = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 254:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var14];
                    var2 = var28.bind(var20)(var2);
                    var30 = var2.Timestamp;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.expectedEndDate;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.expectedEndDate = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 335:
                    var30 = _closure1_slot18;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.debugConfig;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.debugConfig = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 397:
                    var29 = var0.engineFeatureFlags;
                    var28 = var29.push;
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var2 = var28.bind(var29)(var2);
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 439:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var18];
                    var2 = var28.bind(var20)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    if (!(var6 !== var2)) {
                        _fun28302_ip = 514;
                        continue _fun28302
                    }
                case 471:
                    var29 = var0.fieldNumbersToCopy;
                    var28 = var29.push;
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var2 = var28.bind(var29)(var2);
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 514:
                    var2 = var23.int32;
                    var28 = var2.bind(var23)();
                    var2 = var23.pos;
                    var28 = var28 + var2;
                    var2 = var23.pos;
                    var27 = var8;
                    var26 = var28;
                    var25 = var4;
                    var24 = var3;
                    if (!(var2 < var28)) {
                        _fun28302_ip = 2041;
                        continue _fun28302
                    }
                case 557:
                    var30 = var0.fieldNumbersToCopy;
                    var29 = var30.push;
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var2 = var29.bind(var30)(var2);
                    var2 = var23.pos;
                    var27 = var8;
                    var25 = var4;
                    var24 = var3;
                    var26 = var28;
                    if (var2 < var26) {
                        _fun28302_ip = 557;
                        continue _fun28302
                    }
                case 604:
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 609:
                    var2 = var23.bool;
                    var2 = var2.bind(var23)();
                    var0.isTemplate = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 642:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.type = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 675:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.extraOutcomeContext = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 707:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.winningVariationId = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 740:
                    var2 = var23.bool;
                    var2 = var2.bind(var23)();
                    var0.enableEditRawJsonUi = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 773:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.assignmentMode = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 806:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.exposureTracking = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 839:
                    var2 = var23.fixed64;
                    var28 = var2.bind(var23)();
                    var2 = var28.toString;
                    var2 = var2.bind(var28)();
                    var0.cachedNotificationChannelId = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 881:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.owningTeamId = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 913:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var18];
                    var2 = var28.bind(var20)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    if (!(var6 !== var2)) {
                        _fun28302_ip = 988;
                        continue _fun28302
                    }
                case 945:
                    var29 = var0.surfaces;
                    var28 = var29.push;
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var2 = var28.bind(var29)(var2);
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 988:
                    var2 = var23.int32;
                    var28 = var2.bind(var23)();
                    var2 = var23.pos;
                    var28 = var28 + var2;
                    var2 = var23.pos;
                    var27 = var28;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    if (!(var2 < var28)) {
                        _fun28302_ip = 2041;
                        continue _fun28302
                    }
                case 1031:
                    var30 = var0.surfaces;
                    var29 = var30.push;
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var2 = var29.bind(var30)(var2);
                    var2 = var23.pos;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    var27 = var28;
                    if (var2 < var27) {
                        _fun28302_ip = 1031;
                        continue _fun28302
                    }
                case 1078:
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1083:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.phase = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1116:
                    var29 = var0.rules;
                    var28 = var29.push;
                    var30 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var12];
                    var2 = var30.bind(var20)(var2);
                    var31 = var2.Rule;
                    var30 = var31.internalBinaryRead;
                    var2 = var23.uint32;
                    var2 = var2.bind(var23)();
                    var2 = var30.bind(var31)(var23, var2, var22);
                    var2 = var28.bind(var29)(var2);
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1195:
                    var29 = var0.variations;
                    var28 = var29.push;
                    var31 = _closure1_slot16;
                    var30 = var31.internalBinaryRead;
                    var2 = var23.uint32;
                    var2 = var2.bind(var23)();
                    var2 = var30.bind(var31)(var23, var2, var22);
                    var2 = var28.bind(var29)(var2);
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1255:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.unitType = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1288:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.hashKey = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1320:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.revision = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1353:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var13];
                    var2 = var28.bind(var20)(var2);
                    var30 = var2.StringValue;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.techSpecLink;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.techSpecLink = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1434:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var13];
                    var2 = var28.bind(var20)(var2);
                    var30 = var2.StringValue;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.hypothesis;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.hypothesis = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1515:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.description = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1547:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.title = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1579:
                    var2 = var23.fixed64;
                    var28 = var2.bind(var23)();
                    var2 = var28.toString;
                    var2 = var2.bind(var28)();
                    var0.editorId = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1621:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var14];
                    var2 = var28.bind(var20)(var2);
                    var30 = var2.Timestamp;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.editedAt;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.editedAt = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1702:
                    var2 = var23.int32;
                    var2 = var2.bind(var23)();
                    var0.version = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1735:
                    var2 = var23.fixed64;
                    var28 = var2.bind(var23)();
                    var2 = var28.toString;
                    var2 = var2.bind(var28)();
                    var0.creatorId = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1777:
                    var28 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var14];
                    var2 = var28.bind(var20)(var2);
                    var30 = var2.Timestamp;
                    var29 = var30.internalBinaryRead;
                    var2 = var23.uint32;
                    var35 = var2.bind(var23)();
                    var33 = var0.createdAt;
                    var37 = var30;
                    var36 = var23;
                    var34 = var22;
                    var2 = var37[var29](var36, var35, var34, var33, var32);
                    var0.createdAt = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1858:
                    var2 = var23.string;
                    var2 = var2.bind(var23)();
                    var0.name = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1890:
                    var2 = var23.fixed64;
                    var28 = var2.bind(var23)();
                    var2 = var28.toString;
                    var2 = var2.bind(var28)();
                    var0.id = var2;
                    var27 = var8;
                    var26 = var5;
                    var25 = var4;
                    var24 = var3;
                    _fun28302_ip = 2041;
                    continue _fun28302;
                case 1929:
                    var28 = var22.readUnknownField;
                    if (!(var15 !== var28)) {
                        _fun28302_ip = 2067;
                        continue _fun28302
                    }
                case 1942:
                    var2 = var23.skip;
                    var2 = var2.bind(var23)(var6);
                    var27 = var8;
                    var26 = var5;
                    var25 = var28;
                    var24 = var2;
                    if (!(var16 !== var28)) {
                        _fun28302_ip = 2041;
                        continue _fun28302
                    }
                case 1969:
                    var30 = var28;
                    if (!(var17 === var28)) {
                        _fun28302_ip = 2005;
                        continue _fun28302
                    }
                case 1976:
                    var31 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var18];
                    var29 = var31.bind(var20)(var29);
                    var29 = var29.UnknownFieldHandler;
                    var30 = var29.onRead;
                case 2005:
                    var36 = var1.typeName;
                    var37 = undefined;
                    var35 = var0;
                    var34 = var7;
                    var33 = var6;
                    var32 = var2;
                    var29 = var37[var30](var36, var35, var34, var33, var32, var31);
                    var27 = var8;
                    var26 = var5;
                    var25 = var28;
                    var24 = var2;
                case 2041:
                    var2 = var23.pos;
                    var8 = var27;
                    var5 = var26;
                    var4 = var25;
                    var3 = var24;
                    if (var2 < var21) {
                        _fun28302_ip = 95;
                        continue _fun28302
                    }
                case 2065:
                    return var0;
                case 2067:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var32 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var37 = 'Unknown field ';
                    var35 = ' (wire type ';
                    var33 = ') for ';
                    var36 = var7;
                    var34 = var6;
                    var36 = var37[var4](var36, var35, var34, var33, var32, var31);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var37 = var1;
                    var0 = new var37[var2](var36, var35);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28303: for (var _fun28303_ip = 0;;) switch (_fun28303_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.id;
                    var7 = '0';
                    if (!(var7 !== var1)) {
                        _fun28303_ip = 90;
                        continue _fun28303
                    }
                case 24:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Bit64;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.fixed64;
                    var1 = var4.id;
                    var1 = var3.bind(var5)(var1);
                case 90:
                    var1 = var4.name;
                    var8 = '';
                    if (!(var8 !== var1)) {
                        _fun28303_ip = 168;
                        continue _fun28303
                    }
                case 103:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.name;
                    var1 = var3.bind(var5)(var1);
                case 168:
                    var1 = var4.createdAt;
                    if (!var1) {
                        _fun28303_ip = 283;
                        continue _fun28303
                    }
                case 177:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var1 = 6;
                    var1 = var12[var1];
                    var9 = undefined;
                    var1 = var11.bind(var9)(var1);
                    var6 = var1.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.createdAt;
                    var10 = var0.tag;
                    var1 = 9;
                    var1 = var12[var1];
                    var1 = var11.bind(var9)(var1);
                    var1 = var1.WireType;
                    var9 = var1.LengthDelimited;
                    var1 = 3;
                    var9 = var10.bind(var0)(var1, var9);
                    var1 = var9.fork;
                    var1 = var1.bind(var9)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 283:
                    var1 = var4.creatorId;
                    if (!(var7 !== var1)) {
                        _fun28303_ip = 360;
                        continue _fun28303
                    }
                case 293:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Bit64;
                    var1 = 4;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.fixed64;
                    var1 = var4.creatorId;
                    var1 = var3.bind(var5)(var1);
                case 360:
                    var1 = var4.version;
                    var9 = 0;
                    if (!(var9 !== var1)) {
                        _fun28303_ip = 439;
                        continue _fun28303
                    }
                case 372:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 5;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.version;
                    var1 = var3.bind(var5)(var1);
                case 439:
                    var1 = var4.editedAt;
                    if (!var1) {
                        _fun28303_ip = 551;
                        continue _fun28303
                    }
                case 448:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var11 = 6;
                    var1 = var14[var11];
                    var12 = undefined;
                    var1 = var13.bind(var12)(var1);
                    var6 = var1.Timestamp;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.editedAt;
                    var10 = var0.tag;
                    var1 = 9;
                    var1 = var14[var1];
                    var1 = var13.bind(var12)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    var10 = var10.bind(var0)(var11, var1);
                    var1 = var10.fork;
                    var1 = var1.bind(var10)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 551:
                    var1 = var4.editorId;
                    if (!(var7 !== var1)) {
                        _fun28303_ip = 628;
                        continue _fun28303
                    }
                case 561:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Bit64;
                    var1 = 7;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.fixed64;
                    var1 = var4.editorId;
                    var1 = var3.bind(var5)(var1);
                case 628:
                    var1 = var4.title;
                    if (!(var8 !== var1)) {
                        _fun28303_ip = 702;
                        continue _fun28303
                    }
                case 637:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 8;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.title;
                    var1 = var3.bind(var5)(var1);
                case 702:
                    var1 = var4.description;
                    if (!(var8 !== var1)) {
                        _fun28303_ip = 773;
                        continue _fun28303
                    }
                case 711:
                    var5 = var0.tag;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var3 = 9;
                    var6 = var1[var3];
                    var1 = undefined;
                    var1 = var10.bind(var1)(var6);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    var5 = var5.bind(var0)(var3, var1);
                    var3 = var5.string;
                    var1 = var4.description;
                    var1 = var3.bind(var5)(var1);
                case 773:
                    var1 = var4.hypothesis;
                    if (!var1) {
                        _fun28303_ip = 888;
                        continue _fun28303
                    }
                case 782:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var1 = 7;
                    var1 = var13[var1];
                    var10 = undefined;
                    var1 = var12.bind(var10)(var1);
                    var6 = var1.StringValue;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.hypothesis;
                    var11 = var0.tag;
                    var1 = 9;
                    var1 = var13[var1];
                    var1 = var12.bind(var10)(var1);
                    var1 = var1.WireType;
                    var10 = var1.LengthDelimited;
                    var1 = 10;
                    var10 = var11.bind(var0)(var1, var10);
                    var1 = var10.fork;
                    var1 = var1.bind(var10)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 888:
                    var1 = var4.techSpecLink;
                    if (!var1) {
                        _fun28303_ip = 1003;
                        continue _fun28303
                    }
                case 897:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var1 = 7;
                    var1 = var13[var1];
                    var10 = undefined;
                    var1 = var12.bind(var10)(var1);
                    var6 = var1.StringValue;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.techSpecLink;
                    var11 = var0.tag;
                    var1 = 9;
                    var1 = var13[var1];
                    var1 = var12.bind(var10)(var1);
                    var1 = var1.WireType;
                    var10 = var1.LengthDelimited;
                    var1 = 11;
                    var10 = var11.bind(var0)(var1, var10);
                    var1 = var10.fork;
                    var1 = var1.bind(var10)();
                    var3 = var5.bind(var6)(var3, var1, var2);
                    var1 = var3.join;
                    var1 = var1.bind(var3)();
                case 1003:
                    var1 = var4.revision;
                    if (!(var9 !== var1)) {
                        _fun28303_ip = 1080;
                        continue _fun28303
                    }
                case 1013:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 12;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.revision;
                    var1 = var3.bind(var5)(var1);
                case 1080:
                    var1 = var4.hashKey;
                    if (!(var8 !== var1)) {
                        _fun28303_ip = 1156;
                        continue _fun28303
                    }
                case 1090:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 13;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.hashKey;
                    var1 = var3.bind(var5)(var1);
                case 1156:
                    var1 = var4.unitType;
                    if (!(var9 !== var1)) {
                        _fun28303_ip = 1233;
                        continue _fun28303
                    }
                case 1166:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 14;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.unitType;
                    var1 = var3.bind(var5)(var1);
                case 1233:
                    var1 = var4.variations;
                    var1 = var1.length;
                    var5 = var9 < var1;
                    var6 = 9;
                    var3 = undefined;
                    var11 = 15;
                    var10 = 0;
                    if (!var5) {
                        _fun28303_ip = 1367;
                        continue _fun28303
                    }
                case 1264:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryWrite;
                    var5 = var4.variations;
                    var12 = var5[var10];
                    var15 = var0.tag;
                    var16 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var16.bind(var3)(var5);
                    var5 = var5.WireType;
                    var5 = var5.LengthDelimited;
                    var15 = var15.bind(var0)(var11, var5);
                    var5 = var15.fork;
                    var5 = var5.bind(var15)();
                    var12 = var13.bind(var14)(var12, var5, var2);
                    var5 = var12.join;
                    var5 = var5.bind(var12)();
                    var10 = var10 + 1;
                    var5 = var4.variations;
                    var5 = var5.length;
                    if (var10 < var5) {
                        _fun28303_ip = 1264;
                        continue _fun28303
                    }
                case 1367:
                    var5 = var4.rules;
                    var5 = var5.length;
                    var5 = var9 < var5;
                    var12 = 8;
                    var11 = 16;
                    var10 = 0;
                    if (!var5) {
                        _fun28303_ip = 1507;
                        continue _fun28303
                    }
                case 1393:
                    var17 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var13 = var5[var12];
                    var13 = var17.bind(var3)(var13);
                    var15 = var13.Rule;
                    var14 = var15.internalBinaryWrite;
                    var13 = var4.rules;
                    var13 = var13[var10];
                    var16 = var0.tag;
                    var5 = var5[var6];
                    var5 = var17.bind(var3)(var5);
                    var5 = var5.WireType;
                    var5 = var5.LengthDelimited;
                    var16 = var16.bind(var0)(var11, var5);
                    var5 = var16.fork;
                    var5 = var5.bind(var16)();
                    var13 = var14.bind(var15)(var13, var5, var2);
                    var5 = var13.join;
                    var5 = var5.bind(var13)();
                    var10 = var10 + 1;
                    var5 = var4.rules;
                    var5 = var5.length;
                    if (var10 < var5) {
                        _fun28303_ip = 1393;
                        continue _fun28303
                    }
                case 1507:
                    var5 = var4.phase;
                    if (!(var9 !== var5)) {
                        _fun28303_ip = 1576;
                        continue _fun28303
                    }
                case 1517:
                    var11 = var0.tag;
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.WireType;
                    var10 = var5.Varint;
                    var5 = 18;
                    var11 = var11.bind(var0)(var5, var10);
                    var10 = var11.int32;
                    var5 = var4.phase;
                    var5 = var10.bind(var11)(var5);
                case 1576:
                    var5 = var4.surfaces;
                    var5 = var5.length;
                    if (!var5) {
                        _fun28303_ip = 1710;
                        continue _fun28303
                    }
                case 1590:
                    var11 = var0.tag;
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.WireType;
                    var10 = var5.LengthDelimited;
                    var5 = 19;
                    var10 = var11.bind(var0)(var5, var10);
                    var5 = var10.fork;
                    var5 = var5.bind(var10)();
                    var5 = var4.surfaces;
                    var5 = var5.length;
                    var5 = var9 < var5;
                    var10 = 0;
                    if (!var5) {
                        _fun28303_ip = 1701;
                        continue _fun28303
                    }
                case 1662:
                    var11 = var0.int32;
                    var5 = var4.surfaces;
                    var5 = var5[var10];
                    var5 = var11.bind(var0)(var5);
                    var10 = var10 + 1;
                    var5 = var4.surfaces;
                    var5 = var5.length;
                    if (var10 < var5) {
                        _fun28303_ip = 1662;
                        continue _fun28303
                    }
                case 1701:
                    var5 = var0.join;
                    var5 = var5.bind(var0)();
                case 1710:
                    var5 = var4.owningTeamId;
                    if (!(var8 !== var5)) {
                        _fun28303_ip = 1778;
                        continue _fun28303
                    }
                case 1720:
                    var11 = var0.tag;
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.WireType;
                    var10 = var5.LengthDelimited;
                    var5 = 20;
                    var11 = var11.bind(var0)(var5, var10);
                    var10 = var11.string;
                    var5 = var4.owningTeamId;
                    var5 = var10.bind(var11)(var5);
                case 1778:
                    var5 = var4.cachedNotificationChannelId;
                    if (!(var7 !== var5)) {
                        _fun28303_ip = 1847;
                        continue _fun28303
                    }
                case 1788:
                    var10 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.WireType;
                    var7 = var5.Bit64;
                    var5 = 21;
                    var10 = var10.bind(var0)(var5, var7);
                    var7 = var10.fixed64;
                    var5 = var4.cachedNotificationChannelId;
                    var5 = var7.bind(var10)(var5);
                case 1847:
                    var5 = var4.exposureTracking;
                    if (!(var9 !== var5)) {
                        _fun28303_ip = 1916;
                        continue _fun28303
                    }
                case 1857:
                    var10 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.WireType;
                    var7 = var5.Varint;
                    var5 = 22;
                    var10 = var10.bind(var0)(var5, var7);
                    var7 = var10.int32;
                    var5 = var4.exposureTracking;
                    var5 = var7.bind(var10)(var5);
                case 1916:
                    var5 = var4.assignmentMode;
                    if (!(var9 !== var5)) {
                        _fun28303_ip = 1985;
                        continue _fun28303
                    }
                case 1926:
                    var10 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.WireType;
                    var7 = var5.Varint;
                    var5 = 25;
                    var10 = var10.bind(var0)(var5, var7);
                    var7 = var10.int32;
                    var5 = var4.assignmentMode;
                    var5 = var7.bind(var10)(var5);
                case 1985:
                    var7 = var4.enableEditRawJsonUi;
                    var5 = false;
                    if (!(var5 !== var7)) {
                        _fun28303_ip = 2056;
                        continue _fun28303
                    }
                case 1997:
                    var11 = var0.tag;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.WireType;
                    var10 = var7.Varint;
                    var7 = 23;
                    var11 = var11.bind(var0)(var7, var10);
                    var10 = var11.bool;
                    var7 = var4.enableEditRawJsonUi;
                    var7 = var10.bind(var11)(var7);
                case 2056:
                    var7 = var4.winningVariationId;
                    if (!(var9 !== var7)) {
                        _fun28303_ip = 2125;
                        continue _fun28303
                    }
                case 2066:
                    var11 = var0.tag;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.WireType;
                    var10 = var7.Varint;
                    var7 = 24;
                    var11 = var11.bind(var0)(var7, var10);
                    var10 = var11.int32;
                    var7 = var4.winningVariationId;
                    var7 = var10.bind(var11)(var7);
                case 2125:
                    var7 = var4.extraOutcomeContext;
                    if (!(var8 !== var7)) {
                        _fun28303_ip = 2193;
                        continue _fun28303
                    }
                case 2135:
                    var10 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.LengthDelimited;
                    var7 = 34;
                    var10 = var10.bind(var0)(var7, var8);
                    var8 = var10.string;
                    var7 = var4.extraOutcomeContext;
                    var7 = var8.bind(var10)(var7);
                case 2193:
                    var7 = var4.type;
                    if (!(var9 !== var7)) {
                        _fun28303_ip = 2260;
                        continue _fun28303
                    }
                case 2202:
                    var10 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.Varint;
                    var7 = 26;
                    var10 = var10.bind(var0)(var7, var8);
                    var8 = var10.int32;
                    var7 = var4.type;
                    var7 = var8.bind(var10)(var7);
                case 2260:
                    var7 = var4.isTemplate;
                    if (!(var5 !== var7)) {
                        _fun28303_ip = 2329;
                        continue _fun28303
                    }
                case 2270:
                    var10 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.Varint;
                    var7 = 27;
                    var10 = var10.bind(var0)(var7, var8);
                    var8 = var10.bool;
                    var7 = var4.isTemplate;
                    var7 = var8.bind(var10)(var7);
                case 2329:
                    var7 = var4.fieldNumbersToCopy;
                    var7 = var7.length;
                    if (!var7) {
                        _fun28303_ip = 2463;
                        continue _fun28303
                    }
                case 2343:
                    var10 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.LengthDelimited;
                    var7 = 28;
                    var8 = var10.bind(var0)(var7, var8);
                    var7 = var8.fork;
                    var7 = var7.bind(var8)();
                    var7 = var4.fieldNumbersToCopy;
                    var7 = var7.length;
                    var7 = var9 < var7;
                    var8 = 0;
                    if (!var7) {
                        _fun28303_ip = 2454;
                        continue _fun28303
                    }
                case 2415:
                    var10 = var0.int32;
                    var7 = var4.fieldNumbersToCopy;
                    var7 = var7[var8];
                    var7 = var10.bind(var0)(var7);
                    var8 = var8 + 1;
                    var7 = var4.fieldNumbersToCopy;
                    var7 = var7.length;
                    if (var8 < var7) {
                        _fun28303_ip = 2415;
                        continue _fun28303
                    }
                case 2454:
                    var7 = var0.join;
                    var7 = var7.bind(var0)();
                case 2463:
                    var7 = var4.engineFeatureFlags;
                    var7 = var7.length;
                    var7 = var9 < var7;
                    var8 = 29;
                    var9 = 0;
                    if (!var7) {
                        _fun28303_ip = 2563;
                        continue _fun28303
                    }
                case 2486:
                    var10 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var10.bind(var0)(var8, var7);
                    var10 = var11.string;
                    var7 = var4.engineFeatureFlags;
                    var7 = var7[var9];
                    var7 = var10.bind(var11)(var7);
                    var9 = var9 + 1;
                    var7 = var4.engineFeatureFlags;
                    var7 = var7.length;
                    if (var9 < var7) {
                        _fun28303_ip = 2486;
                        continue _fun28303
                    }
                case 2563:
                    var7 = var4.debugConfig;
                    if (!var7) {
                        _fun28303_ip = 2656;
                        continue _fun28303
                    }
                case 2572:
                    var10 = _closure1_slot18;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.debugConfig;
                    var12 = var0.tag;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 30;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 2656:
                    var7 = var4.expectedEndDate;
                    if (!var7) {
                        _fun28303_ip = 2763;
                        continue _fun28303
                    }
                case 2665:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var8 = 6;
                    var8 = var7[var8];
                    var8 = var11.bind(var3)(var8);
                    var10 = var8.Timestamp;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.expectedEndDate;
                    var12 = var0.tag;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 31;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 2763:
                    var7 = var4.isAutomatedChange;
                    if (!(var5 !== var7)) {
                        _fun28303_ip = 2832;
                        continue _fun28303
                    }
                case 2773:
                    var9 = var0.tag;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.WireType;
                    var8 = var7.Varint;
                    var7 = 32;
                    var9 = var9.bind(var0)(var7, var8);
                    var8 = var9.bool;
                    var7 = var4.isAutomatedChange;
                    var7 = var8.bind(var9)(var7);
                case 2832:
                    var7 = var4.archiveAt;
                    if (!var7) {
                        _fun28303_ip = 2939;
                        continue _fun28303
                    }
                case 2841:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var8 = 6;
                    var8 = var7[var8];
                    var8 = var11.bind(var3)(var8);
                    var10 = var8.Timestamp;
                    var9 = var10.internalBinaryWrite;
                    var8 = var4.archiveAt;
                    var12 = var0.tag;
                    var7 = var7[var6];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.WireType;
                    var11 = var7.LengthDelimited;
                    var7 = 33;
                    var11 = var12.bind(var0)(var7, var11);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var8 = var9.bind(var10)(var8, var7, var2);
                    var7 = var8.join;
                    var7 = var7.bind(var8)();
                case 2939:
                    var2 = var2.writeUnknownFields;
                    if (!(var5 !== var2)) {
                        _fun28303_ip = 3001;
                        continue _fun28303
                    }
                case 2949:
                    var5 = 1;
                    if (!(var5 == var2)) {
                        _fun28303_ip = 2985;
                        continue _fun28303
                    }
                case 2956:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 2985:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 3001:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var22 = var4;
    var3 = new var22[var3](var21);
    var5 = var3 instanceof Object ? var3 : var4;
    var3 = var16[var1];
    var3 = var15.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var14
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot19;
            var5 = new Array(6);
            var0 = {
                'no': 1,
                'name': 'id',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'label',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'target_allocation',
                'kind': 'scalar',
                'T': 5
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'buckets',
                'kind': 'message',
                'repeat': 1
            };
            var7 = function() {
                var0 = _closure1_slot17;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'type',
                'kind': 'enum'
            };
            var7 = function() {
                var1 = _closure1_slot13;
                var0 = ['discord_protos.discord_experimentation.v1.Variation.Type'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'configuration',
                'kind': 'message'
            };
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StringValue;
                return var0;
            };
            var0.T = var6;
            var5[5] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Variation'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28309: for (var _fun28309_ip = 0;;) switch (_fun28309_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'id': 0,
                        'label': '',
                        'targetAllocation': 0,
                        'buckets': null,
                        'type': 0
                    };
                    var1 = new Array(0);
                    var0.buckets = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 9;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28309_ip = 132;
                        continue _fun28309
                    }
                case 102:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 132:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28310: for (var _fun28310_ip = 0;;) switch (_fun28310_ip) {
                case 0:
                    var21 = arg0;
                    var20 = arg2;
                    var0 = arg3;
                    var19 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28310_ip = 27;
                        continue _fun28310
                    }
                case 18:
                    var1 = var19.create;
                    var0 = var1.bind(var19)();
                case 27:
                    var2 = var21.pos;
                    var1 = arg1;
                    var18 = var2 + var1;
                    var1 = var21.pos;
                    var1 = var1 < var18;
                    var17 = undefined;
                    var15 = 7;
                    var14 = 9;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 6;
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28310_ip = 588;
                        continue _fun28310
                    }
                case 97:
                    var1 = var21.tag;
                    var22 = var1.bind(var21)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var17)(var22, var6);
                    var30 = var1[var4];
                    var29 = var1[var5];
                    if (!(var5 !== var30)) {
                        _fun28310_ip = 548;
                        continue _fun28310
                    }
                case 131:
                    if (!(var6 !== var30)) {
                        _fun28310_ip = 525;
                        continue _fun28310
                    }
                case 138:
                    if (!(var7 !== var30)) {
                        _fun28310_ip = 501;
                        continue _fun28310
                    }
                case 145:
                    if (!(var8 !== var30)) {
                        _fun28310_ip = 450;
                        continue _fun28310
                    }
                case 152:
                    if (!(var9 !== var30)) {
                        _fun28310_ip = 426;
                        continue _fun28310
                    }
                case 159:
                    if (!(var10 !== var30)) {
                        _fun28310_ip = 351;
                        continue _fun28310
                    }
                case 166:
                    var24 = var20.readUnknownField;
                    if (!(var11 !== var24)) {
                        _fun28310_ip = 271;
                        continue _fun28310
                    }
                case 176:
                    var1 = var21.skip;
                    var1 = var1.bind(var21)(var29);
                    var23 = var24;
                    var22 = var1;
                    if (!(var12 !== var24)) {
                        _fun28310_ip = 570;
                        continue _fun28310
                    }
                case 200:
                    var26 = var24;
                    if (!(var13 === var24)) {
                        _fun28310_ip = 236;
                        continue _fun28310
                    }
                case 207:
                    var27 = _closure1_slot0;
                    var25 = _closure1_slot1;
                    var25 = var25[var14];
                    var25 = var27.bind(var17)(var25);
                    var25 = var25.UnknownFieldHandler;
                    var26 = var25.onRead;
                case 236:
                    var35 = var19.typeName;
                    var36 = undefined;
                    var34 = var0;
                    var33 = var30;
                    var32 = var29;
                    var31 = var1;
                    var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                    var23 = var24;
                    var22 = var1;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 271:
                    var1 = global;
                    var24 = var1.globalThis;
                    var25 = var24.Error;
                    var31 = var19.typeName;
                    var1 = var1.HermesInternal;
                    var27 = var1.concat;
                    var36 = 'Unknown field ';
                    var34 = ' (wire type ';
                    var32 = ') for ';
                    var35 = var30;
                    var33 = var29;
                    var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                    var24 = var25.prototype;
                    var24 = Object.create(var24, {
                        constructor: {
                            value: var25
                        }
                    });
                    var36 = var24;
                    var1 = new var36[var25](var35, var34);
                    var1 = var1 instanceof Object ? var1 : var24;
                    throw var1;
                case 351:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var15];
                    var1 = var24.bind(var17)(var1);
                    var26 = var1.StringValue;
                    var25 = var26.internalBinaryRead;
                    var1 = var21.uint32;
                    var34 = var1.bind(var21)();
                    var32 = var0.configuration;
                    var36 = var26;
                    var35 = var21;
                    var33 = var20;
                    var1 = var36[var25](var35, var34, var33, var32, var31);
                    var0.configuration = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 426:
                    var1 = var21.int32;
                    var1 = var1.bind(var21)();
                    var0.type = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 450:
                    var25 = var0.buckets;
                    var24 = var25.push;
                    var27 = _closure1_slot17;
                    var26 = var27.internalBinaryRead;
                    var1 = var21.uint32;
                    var1 = var1.bind(var21)();
                    var1 = var26.bind(var27)(var21, var1, var20);
                    var1 = var24.bind(var25)(var1);
                    var23 = var3;
                    var22 = var2;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 501:
                    var1 = var21.int32;
                    var1 = var1.bind(var21)();
                    var0.targetAllocation = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 525:
                    var1 = var21.string;
                    var1 = var1.bind(var21)();
                    var0.label = var1;
                    var23 = var3;
                    var22 = var2;
                    _fun28310_ip = 570;
                    continue _fun28310;
                case 548:
                    var1 = var21.int32;
                    var1 = var1.bind(var21)();
                    var0.id = var1;
                    var23 = var3;
                    var22 = var2;
                case 570:
                    var1 = var21.pos;
                    var3 = var23;
                    var2 = var22;
                    if (var1 < var18) {
                        _fun28310_ip = 97;
                        continue _fun28310
                    }
                case 588:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28311: for (var _fun28311_ip = 0;;) switch (_fun28311_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = var4.id;
                    var7 = 0;
                    if (!(var7 !== var1)) {
                        _fun28311_ip = 86;
                        continue _fun28311
                    }
                case 20:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.id;
                    var1 = var3.bind(var5)(var1);
                case 86:
                    var3 = var4.label;
                    var1 = '';
                    if (!(var1 !== var3)) {
                        _fun28311_ip = 164;
                        continue _fun28311
                    }
                case 99:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.label;
                    var1 = var3.bind(var5)(var1);
                case 164:
                    var1 = var4.targetAllocation;
                    if (!(var7 !== var1)) {
                        _fun28311_ip = 241;
                        continue _fun28311
                    }
                case 174:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 3;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.targetAllocation;
                    var1 = var3.bind(var5)(var1);
                case 241:
                    var1 = var4.buckets;
                    var1 = var1.length;
                    var5 = var7 < var1;
                    var6 = 9;
                    var3 = undefined;
                    var9 = 4;
                    var8 = 0;
                    if (!var5) {
                        _fun28311_ip = 375;
                        continue _fun28311
                    }
                case 272:
                    var12 = _closure1_slot17;
                    var11 = var12.internalBinaryWrite;
                    var5 = var4.buckets;
                    var10 = var5[var8];
                    var13 = var0.tag;
                    var14 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var14.bind(var3)(var5);
                    var5 = var5.WireType;
                    var5 = var5.LengthDelimited;
                    var13 = var13.bind(var0)(var9, var5);
                    var5 = var13.fork;
                    var5 = var5.bind(var13)();
                    var10 = var11.bind(var12)(var10, var5, var2);
                    var5 = var10.join;
                    var5 = var5.bind(var10)();
                    var8 = var8 + 1;
                    var5 = var4.buckets;
                    var5 = var5.length;
                    if (var8 < var5) {
                        _fun28311_ip = 272;
                        continue _fun28311
                    }
                case 375:
                    var5 = var4.type;
                    if (!(var7 !== var5)) {
                        _fun28311_ip = 442;
                        continue _fun28311
                    }
                case 384:
                    var8 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.WireType;
                    var7 = var5.Varint;
                    var5 = 5;
                    var8 = var8.bind(var0)(var5, var7);
                    var7 = var8.int32;
                    var5 = var4.type;
                    var5 = var7.bind(var8)(var5);
                case 442:
                    var5 = var4.configuration;
                    if (!var5) {
                        _fun28311_ip = 549;
                        continue _fun28311
                    }
                case 451:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var7 = 7;
                    var7 = var5[var7];
                    var7 = var10.bind(var3)(var7);
                    var9 = var7.StringValue;
                    var8 = var9.internalBinaryWrite;
                    var7 = var4.configuration;
                    var11 = var0.tag;
                    var5 = var5[var6];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.WireType;
                    var10 = var5.LengthDelimited;
                    var5 = 6;
                    var10 = var11.bind(var0)(var5, var10);
                    var5 = var10.fork;
                    var5 = var5.bind(var10)();
                    var7 = var8.bind(var9)(var7, var5, var2);
                    var5 = var7.join;
                    var5 = var5.bind(var7)();
                case 549:
                    var2 = var2.writeUnknownFields;
                    var5 = false;
                    if (!(var5 !== var2)) {
                        _fun28311_ip = 613;
                        continue _fun28311
                    }
                case 561:
                    var5 = 1;
                    if (!(var5 == var2)) {
                        _fun28311_ip = 597;
                        continue _fun28311
                    }
                case 568:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 597:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 613:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var22 = var4;
    var3 = new var22[var3](var21);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot16 = var4;
    var3 = var16[var1];
    var3 = var15.bind(var0)(var3);
    var17 = var3.MessageType;
    var3 = function(arg0) { // Environment: var14
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot19;
            var5 = new Array(3);
            var0 = {
                'no': 1,
                'name': 'start',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'stop',
                'kind': 'scalar',
                'T': 5
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'type',
                'kind': 'enum'
            };
            var6 = function() {
                var1 = _closure1_slot14;
                var0 = ['discord_protos.discord_experimentation.v1.Bucket.Type'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var6;
            var5[2] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.Bucket'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28315: for (var _fun28315_ip = 0;;) switch (_fun28315_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'start': 0,
                        'stop': 0,
                        'type': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 9;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28315_ip = 118;
                        continue _fun28315
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28316: for (var _fun28316_ip = 0;;) switch (_fun28316_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28316_ip = 27;
                        continue _fun28316
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 9;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28316_ip = 406;
                        continue _fun28316
                    }
                case 85:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var6);
                    var26 = var1[var4];
                    var25 = var1[var5];
                    if (!(var5 !== var26)) {
                        _fun28316_ip = 366;
                        continue _fun28316
                    }
                case 119:
                    if (!(var6 !== var26)) {
                        _fun28316_ip = 342;
                        continue _fun28316
                    }
                case 126:
                    if (!(var7 !== var26)) {
                        _fun28316_ip = 318;
                        continue _fun28316
                    }
                case 133:
                    var20 = var16.readUnknownField;
                    if (!(var8 !== var20)) {
                        _fun28316_ip = 238;
                        continue _fun28316
                    }
                case 143:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var25);
                    var19 = var20;
                    var18 = var1;
                    if (!(var9 !== var20)) {
                        _fun28316_ip = 388;
                        continue _fun28316
                    }
                case 167:
                    var22 = var20;
                    if (!(var10 === var20)) {
                        _fun28316_ip = 203;
                        continue _fun28316
                    }
                case 174:
                    var23 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var21 = var23.bind(var13)(var21);
                    var21 = var21.UnknownFieldHandler;
                    var22 = var21.onRead;
                case 203:
                    var31 = var15.typeName;
                    var32 = undefined;
                    var30 = var0;
                    var29 = var26;
                    var28 = var25;
                    var27 = var1;
                    var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                    var19 = var20;
                    var18 = var1;
                    _fun28316_ip = 388;
                    continue _fun28316;
                case 238:
                    var1 = global;
                    var20 = var1.globalThis;
                    var21 = var20.Error;
                    var27 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var32 = 'Unknown field ';
                    var30 = ' (wire type ';
                    var28 = ') for ';
                    var31 = var26;
                    var29 = var25;
                    var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {
                        constructor: {
                            value: var21
                        }
                    });
                    var32 = var20;
                    var1 = new var32[var21](var31, var30);
                    var1 = var1 instanceof Object ? var1 : var20;
                    throw var1;
                case 318:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.type = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28316_ip = 388;
                    continue _fun28316;
                case 342:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.stop = var1;
                    var19 = var3;
                    var18 = var2;
                    _fun28316_ip = 388;
                    continue _fun28316;
                case 366:
                    var1 = var17.int32;
                    var1 = var1.bind(var17)();
                    var0.start = var1;
                    var19 = var3;
                    var18 = var2;
                case 388:
                    var1 = var17.pos;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun28316_ip = 85;
                        continue _fun28316
                    }
                case 406:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28317: for (var _fun28317_ip = 0;;) switch (_fun28317_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.start;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun28317_ip = 83;
                        continue _fun28317
                    }
                case 17:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.start;
                    var1 = var3.bind(var5)(var1);
                case 83:
                    var1 = var4.stop;
                    if (!(var2 !== var1)) {
                        _fun28317_ip = 160;
                        continue _fun28317
                    }
                case 93:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.stop;
                    var1 = var3.bind(var5)(var1);
                case 160:
                    var1 = var4.type;
                    if (!(var2 !== var1)) {
                        _fun28317_ip = 235;
                        continue _fun28317
                    }
                case 169:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 3;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.type;
                    var1 = var2.bind(var3)(var1);
                case 235:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun28317_ip = 312;
                        continue _fun28317
                    }
                case 250:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28317_ip = 294;
                        continue _fun28317
                    }
                case 257:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 294:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 312:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var17);
    var17 = var3.prototype;
    var17 = Object.create(var17, {
        constructor: {
            value: var3
        }
    });
    var22 = var17;
    var3 = new var22[var3](var21);
    var3 = var3 instanceof Object ? var3 : var17;
    var _closure1_slot17 = var3;
    var1 = var16[var1];
    var1 = var15.bind(var0)(var1);
    var17 = var1.MessageType;
    var1 = function(arg0) { // Environment: var14
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot19;
            var5 = new Array(6);
            var0 = {
                'no': 1,
                'name': 'enable_decision_logging',
                'kind': 'scalar',
                'T': 8
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'metrics_sample_rate',
                'kind': 'scalar',
                'T': 1
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'log_context_on_failure',
                'kind': 'scalar',
                'T': 8
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'log_raw_headers',
                'kind': 'scalar',
                'T': 8
            };
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'tag_filter_metrics',
                'kind': 'scalar',
                'T': 8
            };
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'decision_log_sample_rate',
                'kind': 'scalar',
                'T': 1
            };
            var5[5] = var0;
            var0 = ['discord_protos.discord_experimentation.v1.DebugConfig'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun28320: for (var _fun28320_ip = 0;;) switch (_fun28320_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'enableDecisionLogging': false,
                        'metricsSampleRate': 0,
                        'logContextOnFailure': false,
                        'logRawHeaders': false,
                        'tagFilterMetrics': false,
                        'decisionLogSampleRate': 0
                    };
                    var10 = false;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 9;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun28320_ip = 122;
                        continue _fun28320
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun28321: for (var _fun28321_ip = 0;;) switch (_fun28321_ip) {
                case 0:
                    var20 = arg0;
                    var19 = arg2;
                    var0 = arg3;
                    var18 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun28321_ip = 27;
                        continue _fun28321
                    }
                case 18:
                    var1 = var18.create;
                    var0 = var1.bind(var18)();
                case 27:
                    var2 = var20.pos;
                    var1 = arg1;
                    var17 = var2 + var1;
                    var1 = var20.pos;
                    var1 = var1 < var17;
                    var16 = undefined;
                    var14 = 9;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 6;
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun28321_ip = 508;
                        continue _fun28321
                    }
                case 94:
                    var1 = var20.tag;
                    var21 = var1.bind(var20)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var16)(var21, var6);
                    var29 = var1[var4];
                    var28 = var1[var5];
                    if (!(var5 !== var29)) {
                        _fun28321_ip = 468;
                        continue _fun28321
                    }
                case 128:
                    if (!(var6 !== var29)) {
                        _fun28321_ip = 444;
                        continue _fun28321
                    }
                case 135:
                    if (!(var7 !== var29)) {
                        _fun28321_ip = 420;
                        continue _fun28321
                    }
                case 142:
                    if (!(var8 !== var29)) {
                        _fun28321_ip = 396;
                        continue _fun28321
                    }
                case 149:
                    if (!(var9 !== var29)) {
                        _fun28321_ip = 372;
                        continue _fun28321
                    }
                case 156:
                    if (!(var10 !== var29)) {
                        _fun28321_ip = 348;
                        continue _fun28321
                    }
                case 163:
                    var23 = var19.readUnknownField;
                    if (!(var11 !== var23)) {
                        _fun28321_ip = 268;
                        continue _fun28321
                    }
                case 173:
                    var1 = var20.skip;
                    var1 = var1.bind(var20)(var28);
                    var22 = var23;
                    var21 = var1;
                    if (!(var12 !== var23)) {
                        _fun28321_ip = 490;
                        continue _fun28321
                    }
                case 197:
                    var25 = var23;
                    if (!(var13 === var23)) {
                        _fun28321_ip = 233;
                        continue _fun28321
                    }
                case 204:
                    var26 = _closure1_slot0;
                    var24 = _closure1_slot1;
                    var24 = var24[var14];
                    var24 = var26.bind(var16)(var24);
                    var24 = var24.UnknownFieldHandler;
                    var25 = var24.onRead;
                case 233:
                    var34 = var18.typeName;
                    var35 = undefined;
                    var33 = var0;
                    var32 = var29;
                    var31 = var28;
                    var30 = var1;
                    var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                    var22 = var23;
                    var21 = var1;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 268:
                    var1 = global;
                    var23 = var1.globalThis;
                    var24 = var23.Error;
                    var30 = var18.typeName;
                    var1 = var1.HermesInternal;
                    var26 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') for ';
                    var34 = var29;
                    var32 = var28;
                    var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                    var23 = var24.prototype;
                    var23 = Object.create(var23, {
                        constructor: {
                            value: var24
                        }
                    });
                    var35 = var23;
                    var1 = new var35[var24](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var23;
                    throw var1;
                case 348:
                    var1 = var20.double;
                    var1 = var1.bind(var20)();
                    var0.decisionLogSampleRate = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 372:
                    var1 = var20.bool;
                    var1 = var1.bind(var20)();
                    var0.tagFilterMetrics = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 396:
                    var1 = var20.bool;
                    var1 = var1.bind(var20)();
                    var0.logRawHeaders = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 420:
                    var1 = var20.bool;
                    var1 = var1.bind(var20)();
                    var0.logContextOnFailure = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 444:
                    var1 = var20.double;
                    var1 = var1.bind(var20)();
                    var0.metricsSampleRate = var1;
                    var22 = var3;
                    var21 = var2;
                    _fun28321_ip = 490;
                    continue _fun28321;
                case 468:
                    var1 = var20.bool;
                    var1 = var1.bind(var20)();
                    var0.enableDecisionLogging = var1;
                    var22 = var3;
                    var21 = var2;
                case 490:
                    var1 = var20.pos;
                    var3 = var22;
                    var2 = var21;
                    if (var1 < var17) {
                        _fun28321_ip = 94;
                        continue _fun28321
                    }
                case 508:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun28322: for (var _fun28322_ip = 0;;) switch (_fun28322_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.enableDecisionLogging;
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun28322_ip = 85;
                        continue _fun28322
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.enableDecisionLogging;
                    var2 = var3.bind(var5)(var2);
                case 85:
                    var2 = var4.metricsSampleRate;
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun28322_ip = 164;
                        continue _fun28322
                    }
                case 97:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Bit64;
                    var2 = 2;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.double;
                    var2 = var4.metricsSampleRate;
                    var2 = var5.bind(var6)(var2);
                case 164:
                    var2 = var4.logContextOnFailure;
                    if (!(var1 !== var2)) {
                        _fun28322_ip = 241;
                        continue _fun28322
                    }
                case 174:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 3;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.bool;
                    var2 = var4.logContextOnFailure;
                    var2 = var5.bind(var6)(var2);
                case 241:
                    var2 = var4.logRawHeaders;
                    if (!(var1 !== var2)) {
                        _fun28322_ip = 318;
                        continue _fun28322
                    }
                case 251:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 4;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.bool;
                    var2 = var4.logRawHeaders;
                    var2 = var5.bind(var6)(var2);
                case 318:
                    var2 = var4.tagFilterMetrics;
                    if (!(var1 !== var2)) {
                        _fun28322_ip = 395;
                        continue _fun28322
                    }
                case 328:
                    var6 = var0.tag;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5);
                    var2 = var2.WireType;
                    var5 = var2.Varint;
                    var2 = 5;
                    var6 = var6.bind(var0)(var2, var5);
                    var5 = var6.bool;
                    var2 = var4.tagFilterMetrics;
                    var2 = var5.bind(var6)(var2);
                case 395:
                    var2 = var4.decisionLogSampleRate;
                    if (!(var3 !== var2)) {
                        _fun28322_ip = 472;
                        continue _fun28322
                    }
                case 405:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Bit64;
                    var2 = 6;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.double;
                    var2 = var4.decisionLogSampleRate;
                    var2 = var3.bind(var5)(var2);
                case 472:
                    var2 = arg2;
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun28322_ip = 547;
                        continue _fun28322
                    }
                case 485:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun28322_ip = 529;
                        continue _fun28322
                    }
                case 492:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 529:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 547:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var17);
    var17 = var1.prototype;
    var17 = Object.create(var17, {
        constructor: {
            value: var1
        }
    });
    var22 = var17;
    var1 = new var22[var1](var21);
    var1 = var1 instanceof Object ? var1 : var17;
    var _closure1_slot18 = var1;
    var14 = 10;
    var14 = var16[var14];
    var16 = var15.bind(var0)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx';
    var14 = var15.bind(var16)(var14);
    var2.Experiment_UnitType = var13;
    var2.Experiment_Surface = var12;
    var2.Experiment_ExposureTracking = var11;
    var2.Experiment_AssignmentMode = var10;
    var2.Experiment_Type = var9;
    var2.Variation_Type = var8;
    var2.Bucket_Type = var7;
    var2.Phase = var6;
    var2.Experiment = var5;
    var2.Variation = var4;
    var2.Bucket = var3;
    var2.DebugConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1341, 1342, 3293, 1313, 2]);