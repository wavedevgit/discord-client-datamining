package androidx.work.impl;

import androidx.work.WorkerParameters;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o0 implements n0 {

    /* renamed from: a  reason: collision with root package name */
    private final u f5693a;

    /* renamed from: b  reason: collision with root package name */
    private final r4.b f5694b;

    public o0(u processor, r4.b workTaskExecutor) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(workTaskExecutor, "workTaskExecutor");
        this.f5693a = processor;
        this.f5694b = workTaskExecutor;
    }

    @Override // androidx.work.impl.n0
    public void a(a0 workSpecId, WorkerParameters.a aVar) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f5694b.d(new q4.q(this.f5693a, workSpecId, aVar));
    }

    @Override // androidx.work.impl.n0
    public void d(a0 workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f5694b.d(new q4.r(this.f5693a, workSpecId, false, i10));
    }
}
