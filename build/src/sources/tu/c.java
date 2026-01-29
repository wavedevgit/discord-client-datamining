package tu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        private static Object a(c cVar, Object obj) {
            String str;
            String obj2;
            Object intOrNull;
            Object obj3 = null;
            if (obj instanceof String) {
                str = (String) obj;
            } else {
                str = null;
            }
            if (str != null && (intOrNull = StringsKt.toIntOrNull(str)) != null) {
                obj3 = intOrNull;
            } else if (str != null) {
                obj3 = StringsKt.p(str);
            }
            if (obj3 != null && (obj2 = obj3.toString()) != null) {
                return obj2;
            }
            return obj;
        }

        private static Object b(c cVar, Object obj) {
            if (obj instanceof List) {
                List list = (List) obj;
                if (list.size() == 1) {
                    return b(cVar, CollectionsKt.firstOrNull(list));
                }
            }
            return obj;
        }

        public static Object c(c cVar, Object obj) {
            Object b10 = b(cVar, obj);
            if (!Intrinsics.areEqual(b10, obj)) {
                return new b(a(cVar, b10));
            }
            return a(cVar, obj);
        }
    }

    Object e(Object obj);
}
