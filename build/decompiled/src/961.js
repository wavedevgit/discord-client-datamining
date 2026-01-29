// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var2 = ['response.output_item.added', 'response.function_call_arguments.delta', 'response.function_call_arguments.done', 'response.output_item.done'];
    var3 = ['response.created', 'response.in_progress', 'response.failed', 'response.completed', 'response.incomplete', 'response.queued', 'response.output_text.delta'];
    var0 = var3.concat;
    var0 = var0.bind(var3)(var2);
    var3 = ['responses.create', 'chat.completions.create', 'embeddings.create'];
    var1.INSTRUMENTED_METHODS = var3;
    var3 = 'OpenAI';
    var1.OPENAI_INTEGRATION_NAME = var3;
    var1.RESPONSES_TOOL_CALL_EVENT_TYPES = var2;
    var1.RESPONSE_EVENT_TYPES = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);