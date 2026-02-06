package uu;

import bw.a;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a extends bw.a {

    /* renamed from: uu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0683a {
        public static b a(a aVar, List expressionValues, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            List f10 = aVar.f(expressionValues, obj, evaluator);
            Map a10 = cw.c.a(expressionValues);
            return new b(f10, a10, aVar.a(a10, expressionValues));
        }

        public static Object b(a aVar, Map map, List expressionValues) {
            Intrinsics.checkNotNullParameter(expressionValues, "expressionValues");
            if (map == null) {
                return cw.c.b(expressionValues);
            }
            return null;
        }

        public static List c(a aVar, List expression, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expression, "expression");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            return a.C0121a.a(aVar, expression, obj, evaluator);
        }
    }

    Object a(Map map, List list);

    b c(List list, Object obj, h hVar);
}
