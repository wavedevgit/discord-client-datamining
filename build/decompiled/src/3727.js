// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var8 = {};
    var3 = 1;
    var8.warn = var3;
    var0 = 'warn';
    var8[var3] = var0;
    var3 = 2;
    var8.error = var3;
    var0 = 'error';
    var8[var3] = var0;
    var _closure1_slot3 = var8;
    var0 = {};
    var3 = "function logToConsole_Pnpm_loggerTs1(data){switch(data.level){case'warn':console.warn(data.message.content);break;case'error':case'fatal':case'syntax':console.error(data.message.content);break;}}";
    var0.code = var3;
    var _closure1_slot4 = var0;
    var3 = function() { // Environment: var6
        var0 = function arg0() {
            _fun33204: for (var _fun33204_ip = 0;;) switch (_fun33204_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.level;
                    var1 = 'warn';
                    if (!(var1 !== var2)) {
                        _fun33204_ip = 73;
                        continue _fun33204
                    }
                case 17:
                    var1 = 'error';
                    if (!(var1 !== var2)) {
                        _fun33204_ip = 43;
                        continue _fun33204
                    }
                case 25:
                    var1 = 'fatal';
                    if (!(var1 !== var2)) {
                        _fun33204_ip = 43;
                        continue _fun33204
                    }
                case 33:
                    var1 = 'syntax';
                    if (!(var1 === var2)) {
                        _fun33204_ip = 101;
                        continue _fun33204
                    }
                case 43:
                    var1 = global;
                    var3 = var1.console;
                    var2 = var3.error;
                    var1 = var0.message;
                    var1 = var1.content;
                    var1 = var2.bind(var3)(var1);
                    _fun33204_ip = 101;
                    continue _fun33204;
                case 73:
                    var1 = global;
                    var2 = var1.console;
                    var1 = var2.warn;
                    var0 = var0.message;
                    var0 = var0.content;
                    var0 = var1.bind(var2)(var0);
                case 101:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4297880609329.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var7 = {};
    var7.logFunction = var3;
    var3 = var8.warn;
    var7.level = var3;
    var7.strict = var1;
    var _closure1_slot6 = var7;
    var1 = {};
    var3 = 'function formatMessage_Pnpm_loggerTs2(message){return"[Reanimated] "+message;}';
    var1.code = var3;
    var _closure1_slot7 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0() {
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '[Reanimated] ';
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4586683970876.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot8 = var1;
    var1 = {};
    var3 = 'function createLog_Pnpm_loggerTs3(level,message){const{formatMessage}=this.__closure;const formattedMessage=formatMessage(message);return{level:level,message:{content:formattedMessage,substitutions:[]},category:formattedMessage,componentStack:[],componentStackType:null,stack:new Error().stack};}';
    var1.code = var3;
    var _closure1_slot9 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0, arg1() {
            var2 = _closure1_slot8;
            var1 = undefined;
            var0 = arg1;
            var1 = var2.bind(var1)(var0);
            var0 = {};
            var2 = arg0;
            var0.level = var2;
            var2 = {};
            var2.content = var1;
            var3 = new Array(0);
            var2.substitutions = var3;
            var0.message = var2;
            var0.category = var1;
            var1 = new Array(0);
            var0.componentStack = var1;
            var1 = null;
            var0.componentStackType = var1;
            var1 = global;
            var1 = var1.Error;
            var2 = var1.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var1
                }
            });
            var5 = var2;
            var1 = new var5[var1](var4);
            var1 = var1 instanceof Object ? var1 : var2;
            var1 = var1.stack;
            var0.stack = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot8;
        var2.formatMessage = var3;
        var0.__closure = var2;
        var2 = 5107313473751.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot10 = var1;
    var1 = {};
    var3 = 'function registerLoggerConfig_Pnpm_loggerTs4(config){global.__reanimatedLoggerConfig=config;}';
    var1.code = var3;
    var _closure1_slot11 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0() {
            var1 = _closure1_slot0;
            var0 = arg0;
            var1.__reanimatedLoggerConfig = var0;
            var0 = undefined;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1484852907300.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot11;
        var0.__initData = var1;
        return var0;
    };
    var5 = var1.bind(var0)();
    var _closure1_slot12 = var5;
    var1 = {};
    var3 = 'function replaceLoggerImplementation_Pnpm_loggerTs5(logFunction){const{registerLoggerConfig}=this.__closure;registerLoggerConfig({...global.__reanimatedLoggerConfig,logFunction:logFunction});}';
    var1.code = var3;
    var _closure1_slot13 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0() {
            var2 = _closure1_slot12;
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var0 = _closure1_slot0;
            var3 = var0.__reanimatedLoggerConfig;
            var1 = {};
            var0 = arg0;
            var1.logFunction = var0;
            var0 = {};
            var1 = var4.bind(var5)(var0, var3, var1);
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot12;
        var2.registerLoggerConfig = var3;
        var0.__closure = var2;
        var2 = 9450518662656.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot13;
        var0.__initData = var1;
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = {};
    var3 = 'function updateLoggerConfig_Pnpm_loggerTs6(options){const{registerLoggerConfig,DEFAULT_LOGGER_CONFIG}=this.__closure;var _options$level,_options$strict;registerLoggerConfig({...global.__reanimatedLoggerConfig,level:(_options$level=options===null||options===void 0?void 0:options.level)!==null&&_options$level!==void 0?_options$level:DEFAULT_LOGGER_CONFIG.level,strict:(_options$strict=options===null||options===void 0?void 0:options.strict)!==null&&_options$strict!==void 0?_options$strict:DEFAULT_LOGGER_CONFIG.strict});}';
    var1.code = var3;
    var _closure1_slot14 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0() {
            _fun33214: for (var _fun33214_ip = 0;;) switch (_fun33214_ip) {
                case 0:
                    var9 = arg0;
                    var2 = _closure1_slot12;
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var0 = _closure1_slot0;
                    var4 = var0.__reanimatedLoggerConfig;
                    var3 = {};
                    var8 = null;
                    var10 = var8 == var9;
                    var0 = undefined;
                    var1 = undefined;
                    if (var10) {
                        _fun33214_ip = 54;
                        continue _fun33214
                    }
                case 48:
                    var1 = var9.level;
                case 54:
                    if (!(var8 == var1)) {
                        _fun33214_ip = 68;
                        continue _fun33214
                    }
                case 58:
                    var10 = _closure1_slot6;
                    var1 = var10.level;
                case 68:
                    var3.level = var1;
                    var10 = var8 == var9;
                    var1 = undefined;
                    if (var10) {
                        _fun33214_ip = 88;
                        continue _fun33214
                    }
                case 82:
                    var1 = var9.strict;
                case 88:
                    if (!(var8 == var1)) {
                        _fun33214_ip = 102;
                        continue _fun33214
                    }
                case 92:
                    var7 = _closure1_slot6;
                    var1 = var7.strict;
                case 102:
                    var3.strict = var1;
                    var1 = {};
                    var1 = var5.bind(var6)(var1, var4, var3);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot12;
        var2.registerLoggerConfig = var3;
        var3 = _closure1_slot6;
        var2.DEFAULT_LOGGER_CONFIG = var3;
        var0.__closure = var2;
        var2 = 14435084623184.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot14;
        var0.__initData = var1;
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = {};
    var9 = 'function handleLog_Pnpm_loggerTs7(level,message,options){const{LogLevel,DOCS_REFERENCE,createLog}=this.__closure;const config=global.__reanimatedLoggerConfig;if(options.strict&&!config.strict||LogLevel[level]<config.level){return;}if(options.strict){message+="\\n\\n"+DOCS_REFERENCE;}config.logFunction(createLog(level,message));}';
    var1.code = var9;
    var _closure1_slot15 = var1;
    var1 = function() { // Environment: var6
        var0 = function arg0, arg1, arg2() {
            _fun33216: for (var _fun33216_ip = 0;;) switch (_fun33216_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var1 = arg2;
                    var2 = _closure1_slot0;
                    var2 = var2.__reanimatedLoggerConfig;
                    var4 = var1.strict;
                    if (!var4) {
                        _fun33216_ip = 40;
                        continue _fun33216
                    }
                case 31:
                    var6 = var2.strict;
                    var4 = !var6;
                case 40:
                    if (var4) {
                        _fun33216_ip = 61;
                        continue _fun33216
                    }
                case 43:
                    var6 = _closure1_slot3;
                    var7 = var6[var5];
                    var6 = var2.level;
                    var4 = var7 < var6;
                case 61:
                    if (var4) {
                        _fun33216_ip = 133;
                        continue _fun33216
                    }
                case 64:
                    var1 = var1.strict;
                    var4 = var3;
                    if (!var1) {
                        _fun33216_ip = 110;
                        continue _fun33216
                    }
                case 76:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '\n\n';
                    var1 = "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.";
                    var1 = var7.bind(var6)(var1);
                    var4 = var3 + var1;
                case 110:
                    var1 = var2.logFunction;
                    var3 = _closure1_slot10;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var5, var4);
                    var0 = var1.bind(var2)(var0);
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.LogLevel = var3;
        var3 = "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.";
        var2.DOCS_REFERENCE = var3;
        var3 = _closure1_slot10;
        var2.createLog = var3;
        var0.__closure = var2;
        var2 = 5113579927044.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot15;
        var0.__initData = var1;
        return var0;
    };
    var12 = var1.bind(var0)();
    var _closure1_slot16 = var12;
    var11 = {};
    var1 = "function warn_Pnpm_loggerTs8(message,options={}){const{handleLog}=this.__closure;handleLog('warn',message,options);}";
    var11.code = var1;
    var10 = {};
    var1 = "function error_Pnpm_loggerTs9(message,options={}){const{handleLog}=this.__closure;handleLog('error',message,options);}";
    var10.code = var1;
    var1 = {};
    var9 = function arg0() {
        _fun33217: for (var _fun33217_ip = 0;;) switch (_fun33217_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var4 = _closure1_slot16;
                var3 = arguments.length;
                var1 = 1;
                if (!(var3 > var1)) {
                    _fun33217_ip = 29;
                    continue _fun33217
                }
            case 21:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun33217_ip = 33;
                    continue _fun33217
                }
            case 29:
                var3 = {};
                _fun33217_ip = 37;
                continue _fun33217;
            case 33:
                var3 = arguments[var1];
            case 37:
                var2 = 'warn';
                var1 = arg0;
                var1 = var4.bind(var0)(var2, var1, var3);
                return var0;
        }
    };
    var13 = {};
    var13.handleLog = var12;
    var9.__closure = var13;
    var13 = 13521870617115.0;
    var9.__workletHash = var13;
    var9.__initData = var11;
    var1.warn = var9;
    var9 = function arg0() {
        _fun33218: for (var _fun33218_ip = 0;;) switch (_fun33218_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var4 = _closure1_slot16;
                var3 = arguments.length;
                var1 = 1;
                if (!(var3 > var1)) {
                    _fun33218_ip = 29;
                    continue _fun33218
                }
            case 21:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun33218_ip = 33;
                    continue _fun33218
                }
            case 29:
                var3 = {};
                _fun33218_ip = 37;
                continue _fun33218;
            case 33:
                var3 = arguments[var1];
            case 37:
                var2 = 'error';
                var1 = arg0;
                var1 = var4.bind(var0)(var2, var1, var3);
                return var0;
        }
    };
    var11 = {};
    var11.handleLog = var12;
    var9.__closure = var11;
    var11 = 10275432056698.0;
    var9.__workletHash = var11;
    var9.__initData = var10;
    var1.error = var9;
    var2.LogLevel = var8;
    var2.DEFAULT_LOGGER_CONFIG = var7;
    var6 = function arg0() {
        var2 = arg0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 0;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.addLogBoxLog;
        var3 = var3.bind(var4)(var2);
        var1 = _closure1_slot5;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.logToLogBoxAndConsole = var6;
    var2.registerLoggerConfig = var5;
    var2.replaceLoggerImplementation = var4;
    var2.updateLoggerConfig = var3;
    var2.logger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3726]);