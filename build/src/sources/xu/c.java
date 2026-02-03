package xu;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static Double a(c cVar, Object obj, Function1 operation) {
            List list;
            List list2;
            Integer num;
            Integer num2;
            List l02;
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (obj != null) {
                list = sv.a.b(obj);
            } else {
                list = null;
            }
            if (list != null) {
                list2 = CollectionsKt.l0(list);
            } else {
                list2 = null;
            }
            if (list2 != null) {
                num = Integer.valueOf(list2.size());
            } else {
                num = null;
            }
            if (list != null) {
                num2 = Integer.valueOf(list.size());
            } else {
                num2 = null;
            }
            if (!Intrinsics.areEqual(num, num2) || list == null || (l02 = CollectionsKt.l0(list)) == null) {
                return null;
            }
            return (Double) operation.invoke(l02);
        }
    }
}
