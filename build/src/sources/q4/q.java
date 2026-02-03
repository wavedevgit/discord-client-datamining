package q4;

import androidx.work.WorkerParameters;
import androidx.work.impl.a0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.u f47204d;

    /* renamed from: e  reason: collision with root package name */
    private final a0 f47205e;

    /* renamed from: i  reason: collision with root package name */
    private final WorkerParameters.a f47206i;

    public q(androidx.work.impl.u processor, a0 startStopToken, WorkerParameters.a aVar) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(startStopToken, "startStopToken");
        this.f47204d = processor;
        this.f47205e = startStopToken;
        this.f47206i = aVar;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f47204d.p(this.f47205e, this.f47206i);
    }
}
