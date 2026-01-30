package ts;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class w {
    public static final v a(List predicates) {
        Intrinsics.checkNotNullParameter(predicates, "predicates");
        if (predicates.isEmpty()) {
            return a0.f49872a;
        }
        if (predicates.size() == 1) {
            return (v) CollectionsKt.Q0(predicates);
        }
        return new i(predicates);
    }
}
