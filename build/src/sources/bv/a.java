package bv;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: bv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0120a {
        private static Object a(a aVar, List list) {
            if (cw.a.g(list)) {
                return Double.valueOf(0.0d);
            }
            if (list.isEmpty()) {
                return "";
            }
            return b(aVar, list);
        }

        private static Object b(a aVar, List list) {
            List list2;
            if (list.size() == 1 && !(CollectionsKt.firstOrNull(list) instanceof Boolean)) {
                list2 = list;
            } else {
                list2 = null;
            }
            if (list2 == null) {
                return null;
            }
            return aVar.a(CollectionsKt.firstOrNull(list));
        }

        public static Object c(a aVar, Object obj) {
            if (obj instanceof Number) {
                return Double.valueOf(((Number) obj).doubleValue());
            }
            if (obj instanceof String) {
                Double p10 = StringsKt.p((String) obj);
                if (p10 != null) {
                    return p10;
                }
            } else if (obj instanceof List) {
                Object a10 = a(aVar, (List) obj);
                if (a10 != null) {
                    return a10;
                }
            } else if (obj instanceof Boolean) {
                return Double.valueOf(cw.b.a(((Boolean) obj).booleanValue()));
            }
            return obj;
        }
    }

    Object a(Object obj);
}
