package ts;

import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends s {

    /* renamed from: o  reason: collision with root package name */
    private final int f51038o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51039p;

    /* renamed from: q  reason: collision with root package name */
    private final long f51040q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51041r;

    /* renamed from: s  reason: collision with root package name */
    private a f51042s = h2();

    public f(int i10, int i11, long j10, String str) {
        this.f51038o = i10;
        this.f51039p = i11;
        this.f51040q = j10;
        this.f51041r = str;
    }

    private final a h2() {
        return new a(this.f51038o, this.f51039p, this.f51040q, this.f51041r);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f51042s, runnable, false, false, 6, null);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        a.F(this.f51042s, runnable, false, true, 2, null);
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f51042s;
    }

    public final void i2(Runnable runnable, boolean z10, boolean z11) {
        this.f51042s.E(runnable, z10, z11);
    }
}
