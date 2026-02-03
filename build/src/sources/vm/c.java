package vm;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import um.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final t a(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list.isEmpty()) {
            return um.e.f50472a;
        }
        if (list.size() == 1) {
            return (t) CollectionsKt.Q0(list);
        }
        return new b(list);
    }
}
