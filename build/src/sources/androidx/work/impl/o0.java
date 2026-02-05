package androidx.work.impl;

import androidx.work.WorkerParameters;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    private final u f5774a;

    /* renamed from: b  reason: collision with root package name */
    private final r4.b f5775b;

    public o0(u processor, r4.b workTaskExecutor) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(workTaskExecutor, "workTaskExecutor");
        this.f5774a = processor;
        this.f5775b = workTaskExecutor;
    }

    @Override // androidx.work.impl.n0
    public void a(a0 workSpecId, WorkerParameters.a aVar) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f5775b.d(new q4.q(this.f5774a, workSpecId, aVar));
    }

    @Override // androidx.work.impl.n0
    public void d(a0 workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f5775b.d(new q4.r(this.f5774a, workSpecId, false, i10));
    }
}
