package ns;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f42193o;

    /* renamed from: p  reason: collision with root package name */
    private final int f42194p;

    /* renamed from: q  reason: collision with root package name */
    private final long f42195q;

    /* renamed from: r  reason: collision with root package name */
    private final String f42196r;

    /* renamed from: s  reason: collision with root package name */
    private a f42197s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f42193o = i10;
        this.f42194p = i11;
        this.f42195q = j10;
        this.f42196r = str;
    }

    private final a h2() {
        return new a(this.f42193o, this.f42194p, this.f42195q, this.f42196r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f42197s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f42197s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f42197s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f42197s.E(runnable, z10, z11);
    }
}
