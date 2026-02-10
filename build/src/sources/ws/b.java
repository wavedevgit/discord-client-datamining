package ws;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.s;
import us.f0;
import us.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends s implements Executor {

    /* renamed from: o  reason: collision with root package name */
    public static final b f54037o = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final CoroutineDispatcher f54038p;

    static {
        int e10;
        k kVar = k.f54055i;
        e10 = h0.e("kotlinx.coroutines.io.parallelism", kotlin.ranges.d.d(64, f0.a()), 0, 0, 12, null);
        f54038p = CoroutineDispatcher.a2(kVar, e10, null, 2, null);
    }

    private b() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void S1(CoroutineContext coroutineContext, Runnable runnable) {
        f54038p.S1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher Z1(int i10, String str) {
        return k.f54055i.Z1(i10, str);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        throw new IllegalStateException("Cannot be invoked on Dispatchers.IO");
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        z1(kotlin.coroutines.e.f31839d, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        f54038p.z1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.s
    public Executor e2() {
        return this;
    }
}
