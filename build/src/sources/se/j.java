package se;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RunnableFuture;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends ThreadPoolExecutor implements AutoCloseable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f49021d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(n nVar) {
        super(1, 1, 1L, TimeUnit.MINUTES, new LinkedBlockingQueue());
        this.f49021d = nVar;
        setThreadFactory(new l(null));
        allowCoreThreadTimeOut(true);
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    @Override // java.util.concurrent.AbstractExecutorService
    protected final RunnableFuture newTaskFor(Runnable runnable, Object obj) {
        return new i(this, runnable, obj);
    }
}
