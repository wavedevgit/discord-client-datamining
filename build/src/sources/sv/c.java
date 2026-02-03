package sv;

import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c {
    public static final Map a(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        Object b10 = b(list);
        if (!a.f(b10)) {
            b10 = null;
        }
        if (!(b10 instanceof Map)) {
            return null;
        }
        return (Map) b10;
    }

    public static final Object b(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return CollectionsKt.q0(list, 1);
    }

    public static final Object c(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return CollectionsKt.q0(list, 2);
    }
}
