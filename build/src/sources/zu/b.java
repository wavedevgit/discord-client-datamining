package zu;

import bv.a;
import bv.c;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import tu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b extends tu.c, bv.a, bv.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static boolean a(b bVar, Object obj, Function2 operator) {
            boolean z10;
            boolean z11;
            Intrinsics.checkNotNullParameter(operator, "operator");
            List c10 = cw.a.c(obj);
            Object e10 = bVar.e(CollectionsKt.firstOrNull(c10));
            Object e11 = bVar.e(cw.c.b(c10));
            c cVar = c.f56637a;
            List a10 = cVar.a(e10);
            List a11 = cVar.a(e11);
            if (a10 == null && a11 == null) {
                List<Object> list = c10;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (Object obj2 : list) {
                    arrayList.add(bVar.a(obj2));
                }
                return bVar.b(arrayList, operator);
            }
            if (a10 != null) {
                z10 = a10.contains(e11);
            } else {
                z10 = false;
            }
            if (!z10) {
                if (a11 != null) {
                    z11 = a11.contains(e10);
                } else {
                    z11 = false;
                }
                if (!z11) {
                    return false;
                }
                return true;
            }
            return true;
        }

        public static boolean b(b bVar, List list, Function2 operator) {
            Intrinsics.checkNotNullParameter(operator, "operator");
            return c.a.b(bVar, list, operator);
        }

        public static List c(b bVar, Comparable comparable, Comparable comparable2) {
            return c.a.d(bVar, comparable, comparable2);
        }

        public static List d(b bVar, Comparable comparable, Comparable comparable2) {
            return c.a.e(bVar, comparable, comparable2);
        }

        public static Object e(b bVar, Object obj) {
            return c.a.c(bVar, obj);
        }

        public static Object f(b bVar, Object obj) {
            return a.C0120a.c(bVar, obj);
        }

        public static Boolean g(b bVar, Object obj) {
            return c.a.f(bVar, obj);
        }
    }
}
