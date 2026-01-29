package vu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import lu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface e extends lu.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        private static boolean a(e eVar, List list, Function2 function2) {
            boolean b10 = eVar.b(CollectionsKt.o((Comparable) CollectionsKt.firstOrNull(list), (Comparable) pv.c.b(list)), function2);
            boolean b11 = eVar.b(CollectionsKt.o((Comparable) pv.c.b(list), (Comparable) pv.c.c(list)), function2);
            if (!b10 || !b11) {
                return false;
            }
            return true;
        }

        public static boolean b(e eVar, List list, Function2 operator) {
            Intrinsics.checkNotNullParameter(operator, "operator");
            return c.a.b(eVar, list, operator);
        }

        public static boolean c(e eVar, List list, Function2 operator) {
            List d10;
            Intrinsics.checkNotNullParameter(operator, "operator");
            if (list != null && (d10 = pv.a.d(list)) != null) {
                if (d10.size() == 2) {
                    return eVar.b(d10, operator);
                }
                if (d10.size() > 2) {
                    return a(eVar, d10, operator);
                }
            }
            return false;
        }

        public static List d(e eVar, Comparable comparable, Comparable comparable2) {
            return c.a.d(eVar, comparable, comparable2);
        }

        public static List e(e eVar, Comparable comparable, Comparable comparable2) {
            return c.a.e(eVar, comparable, comparable2);
        }

        public static Boolean f(e eVar, Object obj) {
            return c.a.f(eVar, obj);
        }
    }
}
