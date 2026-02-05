package dv;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        private static List a(b bVar, Object obj) {
            List<Object> list;
            if (obj instanceof List) {
                list = (List) obj;
            } else {
                list = null;
            }
            if (list != null) {
                ArrayList arrayList = new ArrayList();
                for (Object obj2 : list) {
                    CollectionsKt.B(arrayList, a(bVar, obj2));
                }
                return arrayList;
            }
            return CollectionsKt.e(b(bVar, obj));
        }

        private static String b(b bVar, Object obj) {
            if (obj instanceof Number) {
                Number number = (Number) obj;
                if (number.doubleValue() == number.intValue()) {
                    return String.valueOf(number.intValue());
                }
            }
            return vv.a.h(obj);
        }

        private static String c(b bVar, Object obj) {
            List<Object> list;
            if (obj instanceof List) {
                list = (List) obj;
            } else {
                list = null;
            }
            if (list != null) {
                ArrayList arrayList = new ArrayList();
                for (Object obj2 : list) {
                    CollectionsKt.B(arrayList, a(bVar, obj2));
                }
                String x02 = CollectionsKt.x0(arrayList, ",", null, null, 0, null, null, 62, null);
                if (x02 != null) {
                    return x02;
                }
            }
            return b(bVar, obj);
        }

        public static List d(b bVar, Object obj) {
            List<Object> c10 = vv.a.c(obj);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(c10, 10));
            for (Object obj2 : c10) {
                arrayList.add(c(bVar, obj2));
            }
            return arrayList;
        }
    }
}
