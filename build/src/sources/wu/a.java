package wu;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: wu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0730a {
        private static Double a(a aVar, Object obj) {
            if (obj instanceof Number) {
                return Double.valueOf(((Number) obj).doubleValue());
            }
            if (obj instanceof String) {
                return StringsKt.p((String) obj);
            }
            if (obj instanceof List) {
                return b(aVar, (List) obj);
            }
            if (obj instanceof Boolean) {
                return Double.valueOf(pv.b.a(((Boolean) obj).booleanValue()));
            }
            if (obj == null) {
                return Double.valueOf(0.0d);
            }
            return null;
        }

        private static Double b(a aVar, List list) {
            int size = list.size();
            if (size != 0) {
                if (size != 1) {
                    return null;
                }
                return a(aVar, CollectionsKt.o0(list));
            }
            return Double.valueOf(0.0d);
        }

        public static List c(a aVar, Object obj) {
            List<Object> c10 = pv.a.c(obj);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(c10, 10));
            for (Object obj2 : c10) {
                arrayList.add(a(aVar, obj2));
            }
            return arrayList;
        }
    }
}
