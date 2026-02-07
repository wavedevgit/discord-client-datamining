package kotlin;

import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final Object a(Throwable exception) {
        Intrinsics.checkNotNullParameter(exception, "exception");
        return new Result.b(exception);
    }

    public static final void b(Object obj) {
        if (!(obj instanceof Result.b)) {
            return;
        }
        throw ((Result.b) obj).f32055d;
    }
}
