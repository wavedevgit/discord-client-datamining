package ws;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f54041o;

    /* renamed from: p  reason: collision with root package name */
    private final int f54042p;

    /* renamed from: q  reason: collision with root package name */
    private final long f54043q;

    /* renamed from: r  reason: collision with root package name */
    private final String f54044r;

    /* renamed from: s  reason: collision with root package name */
    private a f54045s = g2();

    public f(int i10, int i11, long j10, String str) {
        this.f54041o = i10;
        this.f54042p = i11;
        this.f54043q = j10;
        this.f54044r = str;
    }

    private final a g2() {
        return new a(this.f54041o, this.f54042p, this.f54043q, this.f54044r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void S1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f54045s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor e2() {
        return this.f54045s;
    }

    public final void h2(Runnable runnable, boolean z10, boolean z11) {
        this.f54045s.s(runnable, z10, z11);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f54045s, runnable, false, false, 6, null);
    }
}
