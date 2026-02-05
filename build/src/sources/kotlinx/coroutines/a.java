package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends b0 implements Job, Continuation, CoroutineScope {

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineContext f34999i;

    public a(CoroutineContext coroutineContext, boolean z10, boolean z11) {
        super(z11);
        if (z10) {
            i0((Job) coroutineContext.k(Job.f34997h));
        }
        this.f34999i = coroutineContext.V0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public String M() {
        return ms.e0.a(this) + " was cancelled";
    }

    protected void Q0(Object obj) {
        C(obj);
    }

    protected void R0(Throwable th2, boolean z10) {
    }

    protected void T0(Object obj) {
    }

    public final void U0(ms.c0 c0Var, Object obj, Function2 function2) {
        c0Var.d(function2, obj, this);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlin.coroutines.Continuation
    public final CoroutineContext getContext() {
        return this.f34999i;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f34999i;
    }

    @Override // kotlinx.coroutines.b0
    public final void h0(Throwable th2) {
        ms.a0.a(this.f34999i, th2);
    }

    @Override // kotlinx.coroutines.b0
    public String q0() {
        String g10 = ms.x.g(this.f34999i);
        if (g10 == null) {
            return super.q0();
        }
        return '\"' + g10 + "\":" + super.q0();
    }

    @Override // kotlin.coroutines.Continuation
    public final void resumeWith(Object obj) {
        Object p02 = p0(ms.t.b(obj));
        if (p02 == c0.f35019b) {
            return;
        }
        Q0(p02);
    }

    @Override // kotlinx.coroutines.b0
    protected final void v0(Object obj) {
        if (obj instanceof ms.r) {
            ms.r rVar = (ms.r) obj;
            R0(rVar.f38943a, rVar.a());
            return;
        }
        T0(obj);
    }
}
