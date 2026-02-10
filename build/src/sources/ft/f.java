package ft;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f24366o;

    /* renamed from: p  reason: collision with root package name */
    private final int f24367p;

    /* renamed from: q  reason: collision with root package name */
    private final long f24368q;

    /* renamed from: r  reason: collision with root package name */
    private final String f24369r;

    /* renamed from: s  reason: collision with root package name */
    private a f24370s = Y1();

    public f(int i10, int i11, long j10, String str) {
        this.f24366o = i10;
        this.f24367p = i11;
        this.f24368q = j10;
        this.f24369r = str;
    }

    private final a Y1() {
        return new a(this.f24366o, this.f24367p, this.f24368q, this.f24369r);
    }

    @Override // kotlinx.coroutines.s
    public Executor P1() {
        return this.f24370s;
    }

    public final void a2(Runnable runnable, boolean z10, boolean z11) {
        this.f24370s.s(runnable, z10, z11);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f24370s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void w1(CoroutineContext coroutineContext, Runnable runnable) {
        a.y(this.f24370s, runnable, false, true, 2, null);
    }
}
