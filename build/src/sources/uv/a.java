package uv;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: uv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0674a {
        public static List a(a aVar, List expression, Object obj, h evaluator) {
            Intrinsics.checkNotNullParameter(expression, "expression");
            Intrinsics.checkNotNullParameter(evaluator, "evaluator");
            Object b10 = b(aVar, CollectionsKt.firstOrNull(expression), obj, evaluator);
            if (b10 instanceof List) {
                return (List) b10;
            }
            return null;
        }

        private static Object b(a aVar, Object obj, Object obj2, h hVar) {
            if (obj instanceof List) {
                Iterable<Object> iterable = (Iterable) obj;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(iterable, 10));
                for (Object obj3 : iterable) {
                    arrayList.add(b(aVar, obj3, obj2, hVar));
                }
                return arrayList;
            } else if (vv.a.f(obj)) {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.collections.Map<kotlin.String, kotlin.Any?>");
                return hVar.a((Map) obj, obj2);
            } else {
                return obj;
            }
        }
    }

    List f(List list, Object obj, h hVar);
}
