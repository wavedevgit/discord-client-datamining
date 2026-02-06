package ts;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 {
    public static final b0 b(Object obj) {
        if (obj != b.f50813a) {
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type S of kotlinx.coroutines.internal.SegmentOrClosed");
            return (b0) obj;
        }
        throw new IllegalStateException("Does not contain segment");
    }

    public static final boolean c(Object obj) {
        if (obj == b.f50813a) {
            return true;
        }
        return false;
    }

    public static Object a(Object obj) {
        return obj;
    }
}
