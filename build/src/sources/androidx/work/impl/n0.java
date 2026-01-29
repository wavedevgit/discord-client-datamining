package androidx.work.impl;

import androidx.work.WorkerParameters;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface n0 {
    void a(a0 a0Var, WorkerParameters.a aVar);

    default void b(a0 workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        d(workSpecId, i10);
    }

    default void c(a0 workSpecId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        a(workSpecId, null);
    }

    void d(a0 a0Var, int i10);

    default void e(a0 workSpecId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        d(workSpecId, -512);
    }
}
