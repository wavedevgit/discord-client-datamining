package q;

import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y4 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f46726a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f46727b;

    public y4(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f46726a = executor;
        this.f46727b = new AtomicInteger(0);
    }

    public final int a() {
        return this.f46727b.get();
    }

    public final void b() {
        this.f46727b.set(0);
        x.y0.a("VideoUsageControl", "resetDirectly: mVideoUsage reset!");
    }
}
