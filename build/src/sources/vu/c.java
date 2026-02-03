package vu;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import uu.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c extends uu.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static boolean a(c cVar, Object obj, Function2 operator) {
            Intrinsics.checkNotNullParameter(operator, "operator");
            List c10 = sv.a.c(obj);
            if (c10.size() != 1) {
                List<Object> list = c10;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (Object obj2 : list) {
                    arrayList.add(cVar.a(obj2));
                }
                return cVar.b(arrayList, operator);
            }
            return false;
        }

        public static boolean b(c cVar, List list, Function2 operator) {
            Intrinsics.checkNotNullParameter(operator, "operator");
            return b.a.b(cVar, list, operator);
        }

        public static List c(c cVar, Comparable comparable, Comparable comparable2) {
            return cVar.d(comparable, comparable2);
        }

        public static List d(c cVar, Comparable comparable, Comparable comparable2) {
            return b.a.d(cVar, comparable, comparable2);
        }

        public static Object e(c cVar, Object obj) {
            return b.a.e(cVar, obj);
        }

        public static Object f(c cVar, Object obj) {
            Number number;
            if (obj instanceof Number) {
                number = (Number) obj;
            } else {
                number = null;
            }
            if (number != null) {
                return Double.valueOf(number.doubleValue());
            }
            return obj;
        }

        public static Boolean g(c cVar, Object obj) {
            return b.a.g(cVar, obj);
        }
    }

    Object a(Object obj);
}
