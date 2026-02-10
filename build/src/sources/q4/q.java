package q4;

import androidx.work.WorkerParameters;
import androidx.work.impl.a0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.u f43937d;

    /* renamed from: e  reason: collision with root package name */
    private final a0 f43938e;

    /* renamed from: i  reason: collision with root package name */
    private final WorkerParameters.a f43939i;

    public q(androidx.work.impl.u processor, a0 startStopToken, WorkerParameters.a aVar) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(startStopToken, "startStopToken");
        this.f43937d = processor;
        this.f43938e = startStopToken;
        this.f43939i = aVar;
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f43937d.p(this.f43938e, this.f43939i);
    }
}
