package vs;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.s;
import ts.f0;
import ts.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends s implements Executor {

    /* renamed from: o  reason: collision with root package name */
    public static final b f52962o = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final CoroutineDispatcher f52963p;

    static {
        int e10;
        k kVar = k.f52980i;
        e10 = h0.e("kotlinx.coroutines.io.parallelism", kotlin.ranges.d.d(64, f0.a()), 0, 0, 12, null);
        f52963p = CoroutineDispatcher.b2(kVar, e10, null, 2, null);
    }

    private b() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        f52963p.D1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        f52963p.T1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher a2(int i10, String str) {
        return k.f52980i.a2(i10, str);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        throw new IllegalStateException("Cannot be invoked on Dispatchers.IO");
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        D1(kotlin.coroutines.e.f32082d, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this;
    }
}
