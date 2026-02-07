package vs;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f53014o;

    /* renamed from: p  reason: collision with root package name */
    private final int f53015p;

    /* renamed from: q  reason: collision with root package name */
    private final long f53016q;

    /* renamed from: r  reason: collision with root package name */
    private final String f53017r;

    /* renamed from: s  reason: collision with root package name */
    private a f53018s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f53014o = i10;
        this.f53015p = i11;
        this.f53016q = j10;
        this.f53017r = str;
    }

    private final a h2() {
        return new a(this.f53014o, this.f53015p, this.f53016q, this.f53017r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f53018s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f53018s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f53018s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f53018s.s(runnable, z10, z11);
    }
}
