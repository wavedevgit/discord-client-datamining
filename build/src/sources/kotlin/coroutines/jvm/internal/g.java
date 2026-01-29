package kotlin.coroutines.jvm.internal;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static final Continuation a(Continuation completion) {
        Intrinsics.checkNotNullParameter(completion, "completion");
        return completion;
    }

    public static final void b(Continuation frame) {
        Intrinsics.checkNotNullParameter(frame, "frame");
    }

    public static final void c(Continuation frame) {
        Intrinsics.checkNotNullParameter(frame, "frame");
    }
}
