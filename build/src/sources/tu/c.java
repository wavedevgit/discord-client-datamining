package tu;

import java.util.Collection;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import tu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c extends b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        private static boolean a(c cVar, List list, Function2 function2) {
            Integer c10 = c(cVar, (Comparable) CollectionsKt.firstOrNull(list), (Comparable) cw.c.b(list));
            if (c10 == null) {
                return false;
            }
            return ((Boolean) function2.invoke(Integer.valueOf(c10.intValue()), 0)).booleanValue();
        }

        public static boolean b(c cVar, List list, Function2 operator) {
            List d10;
            Intrinsics.checkNotNullParameter(operator, "operator");
            if (list != null && (d10 = cw.a.d(list)) != null) {
                return a(cVar, d10, operator);
            }
            return false;
        }

        private static Integer c(c cVar, Comparable comparable, Comparable comparable2) {
            List g10 = cVar.g(comparable, comparable2);
            if (g10 == null) {
                return null;
            }
            List<Comparable> list = g10;
            boolean z10 = list instanceof Collection;
            if (!z10 || !list.isEmpty()) {
                for (Comparable comparable3 : list) {
                    if (comparable3 != null) {
                        if (!z10 || !list.isEmpty()) {
                            for (Comparable comparable4 : list) {
                                if (comparable4 == null) {
                                    return null;
                                }
                            }
                        }
                        return Integer.valueOf(tr.a.d((Comparable) CollectionsKt.firstOrNull(g10), (Comparable) cw.c.b(g10)));
                    }
                }
            }
            return Integer.valueOf(tr.a.d((Comparable) CollectionsKt.firstOrNull(g10), (Comparable) cw.c.b(g10)));
        }

        public static List d(c cVar, Comparable comparable, Comparable comparable2) {
            return b.a.a(cVar, comparable, comparable2);
        }

        public static List e(c cVar, Comparable comparable, Comparable comparable2) {
            return b.a.b(cVar, comparable, comparable2);
        }

        public static Boolean f(c cVar, Object obj) {
            return b.a.c(cVar, obj);
        }
    }

    boolean b(List list, Function2 function2);
}
