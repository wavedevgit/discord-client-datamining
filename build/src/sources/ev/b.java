package ev;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        private static Object a(b bVar, Object obj) {
            while (!(obj instanceof Number)) {
                if (obj instanceof String) {
                    return StringsKt.p((String) obj);
                }
                if (obj instanceof List) {
                    obj = CollectionsKt.firstOrNull((List) obj);
                } else {
                    return null;
                }
            }
            return Double.valueOf(((Number) obj).doubleValue());
        }

        public static List b(b bVar, Object obj) {
            List<Object> c10 = cw.a.c(obj);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(c10, 10));
            for (Object obj2 : c10) {
                arrayList.add(a(bVar, obj2));
            }
            return arrayList;
        }
    }
}
