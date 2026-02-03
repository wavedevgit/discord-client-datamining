package xo;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final c a(Object obj, Object baseScreen, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(obj, "<this>");
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        return b(new ym.c(obj, CollectionsKt.l()), baseScreen, compatibilityKey);
    }

    public static final c b(ym.c cVar, Object baseScreen, String compatibilityKey) {
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        Intrinsics.checkNotNullParameter(baseScreen, "baseScreen");
        Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
        return new c(baseScreen, CollectionsKt.e(cVar), compatibilityKey);
    }
}
