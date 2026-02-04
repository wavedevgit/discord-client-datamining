package qs;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f48171o;

    /* renamed from: p  reason: collision with root package name */
    private final int f48172p;

    /* renamed from: q  reason: collision with root package name */
    private final long f48173q;

    /* renamed from: r  reason: collision with root package name */
    private final String f48174r;

    /* renamed from: s  reason: collision with root package name */
    private a f48175s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f48171o = i10;
        this.f48172p = i11;
        this.f48173q = j10;
        this.f48174r = str;
    }

    private final a h2() {
        return new a(this.f48171o, this.f48172p, this.f48173q, this.f48174r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f48175s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f48175s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f48175s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f48175s.E(runnable, z10, z11);
    }
}
