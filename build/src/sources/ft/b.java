package ft;

import dt.f0;
import dt.h0;
import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends s implements Executor {

    /* renamed from: o  reason: collision with root package name */
    public static final b f24363o = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final CoroutineDispatcher f24364p;

    static {
        int e10;
        k kVar = k.f24381i;
        e10 = h0.e("kotlinx.coroutines.io.parallelism", kotlin.ranges.d.d(64, f0.a()), 0, 0, 12, null);
        f24364p = CoroutineDispatcher.E1(kVar, e10, null, 2, null);
    }

    private b() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher B1(int i10, String str) {
        return k.f24381i.B1(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        f24364p.b1(coroutineContext, runnable);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        throw new IllegalStateException("Cannot be invoked on Dispatchers.IO");
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        b1(kotlin.coroutines.e.f32062d, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void w1(CoroutineContext coroutineContext, Runnable runnable) {
        f24364p.w1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.s
    public Executor P1() {
        return this;
    }
}
