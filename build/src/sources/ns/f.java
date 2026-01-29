package ns;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f42177o;

    /* renamed from: p  reason: collision with root package name */
    private final int f42178p;

    /* renamed from: q  reason: collision with root package name */
    private final long f42179q;

    /* renamed from: r  reason: collision with root package name */
    private final String f42180r;

    /* renamed from: s  reason: collision with root package name */
    private a f42181s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f42177o = i10;
        this.f42178p = i11;
        this.f42179q = j10;
        this.f42180r = str;
    }

    private final a h2() {
        return new a(this.f42177o, this.f42178p, this.f42179q, this.f42180r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f42181s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f42181s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f42181s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f42181s.E(runnable, z10, z11);
    }
}
