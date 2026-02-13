package q4;

import androidx.work.WorkerParameters;
import androidx.work.impl.a0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.u f44506d;

    /* renamed from: e  reason: collision with root package name */
    private final a0 f44507e;

    /* renamed from: i  reason: collision with root package name */
    private final WorkerParameters.a f44508i;

    public q(androidx.work.impl.u processor, a0 startStopToken, WorkerParameters.a aVar) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(startStopToken, "startStopToken");
        this.f44506d = processor;
        this.f44507e = startStopToken;
        this.f44508i = aVar;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f44506d.p(this.f44507e, this.f44508i);
    }
}
