package vu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: vu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0688a {
        private static boolean a(a aVar, Object obj) {
            return CollectionsKt.o(null, "", CollectionsKt.l()).contains(obj);
        }

        public static List b(a aVar, Object obj) {
            String obj2;
            if (obj instanceof List) {
                obj = d(aVar, (List) obj);
            }
            List list = null;
            if (obj instanceof List) {
                return null;
            }
            if (obj != null && (obj2 = obj.toString()) != null) {
                list = StringsKt.split$default(obj2, new String[]{"."}, false, 0, 6, null);
            }
            if (list == null) {
                return CollectionsKt.l();
            }
            return list;
        }

        private static Object c(a aVar, List list) {
            Object d10;
            if (list.size() > 1 || (d10 = d(aVar, list)) == null) {
                return list;
            }
            return d10;
        }

        private static Object d(a aVar, List list) {
            Object firstOrNull = CollectionsKt.firstOrNull(list);
            if (firstOrNull instanceof List) {
                return c(aVar, (List) firstOrNull);
            }
            if (a(aVar, firstOrNull)) {
                return null;
            }
            return firstOrNull;
        }
    }
}
