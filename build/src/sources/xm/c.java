package xm;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import wm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final t a(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list.isEmpty()) {
            return wm.e.f52534a;
        }
        if (list.size() == 1) {
            return (t) CollectionsKt.Q0(list);
        }
        return new b(list);
    }
}
