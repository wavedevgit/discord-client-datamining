package ts;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.s;
import rs.f0;
import rs.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends s implements Executor {

    /* renamed from: o  reason: collision with root package name */
    public static final b f51034o = new b();

    /* renamed from: p  reason: collision with root package name */
    private static final CoroutineDispatcher f51035p;

    static {
        int e10;
        k kVar = k.f51052i;
        e10 = h0.e("kotlinx.coroutines.io.parallelism", kotlin.ranges.d.d(64, f0.a()), 0, 0, 12, null);
        f51035p = CoroutineDispatcher.c2(kVar, e10, null, 2, null);
    }

    private b() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        f51035p.E1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        f51035p.U1(coroutineContext, runnable);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        return k.f51052i.b2(i10, str);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        throw new IllegalStateException("Cannot be invoked on Dispatchers.IO");
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        E1(kotlin.coroutines.e.f32062d, runnable);
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
