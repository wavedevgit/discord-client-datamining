package os;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f44838o;

    /* renamed from: p  reason: collision with root package name */
    private final int f44839p;

    /* renamed from: q  reason: collision with root package name */
    private final long f44840q;

    /* renamed from: r  reason: collision with root package name */
    private final String f44841r;

    /* renamed from: s  reason: collision with root package name */
    private a f44842s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f44838o = i10;
        this.f44839p = i11;
        this.f44840q = j10;
        this.f44841r = str;
    }

    private final a h2() {
        return new a(this.f44838o, this.f44839p, this.f44840q, this.f44841r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f44842s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f44842s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f44842s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f44842s.E(runnable, z10, z11);
    }
}
