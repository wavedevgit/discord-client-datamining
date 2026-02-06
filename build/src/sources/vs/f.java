package vs;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f52966o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52967p;

    /* renamed from: q  reason: collision with root package name */
    private final long f52968q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52969r;

    /* renamed from: s  reason: collision with root package name */
    private a f52970s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f52966o = i10;
        this.f52967p = i11;
        this.f52968q = j10;
        this.f52969r = str;
    }

    private final a h2() {
        return new a(this.f52966o, this.f52967p, this.f52968q, this.f52969r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f52970s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f52970s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f52970s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f52970s.s(runnable, z10, z11);
    }
}
