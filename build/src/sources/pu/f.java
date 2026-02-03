package pu;

import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import pu.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface f extends pu.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static b a(f fVar, List expressionValues, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return a.C0565a.a(fVar, expressionValues, obj, evaluator);
        }

        public static Object b(f fVar, Map map, List expressionValues) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            return a.C0565a.b(fVar, map, expressionValues);
        }

        public static Object c(f fVar, Object obj, Object obj2, h evaluator, Function2 arrayOperation) {
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            Intrinsics.checkNotNullParameter(arrayOperation, "arrayOperation");
            return arrayOperation.invoke(fVar.c(sv.a.c(obj), obj2, evaluator), evaluator);
        }

        public static List d(f fVar, List expression, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expression, "expression");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return a.C0565a.c(fVar, expression, obj, evaluator);
        }
    }

    Object b(Object obj, Object obj2, h hVar, Function2 function2);
}
