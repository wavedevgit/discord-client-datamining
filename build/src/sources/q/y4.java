package q;

import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y4 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f43730a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f43731b;

    public y4(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f43730a = executor;
        this.f43731b = new AtomicInteger(0);
    }

    public final int a() {
        return this.f43731b.get();
    }

    public final void b() {
        this.f43731b.set(0);
        x.y0.a("VideoUsageControl", "resetDirectly: mVideoUsage reset!");
    }
}
