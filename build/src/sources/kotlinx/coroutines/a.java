package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends b0 implements Job, Continuation, CoroutineScope {

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineContext f36085i;

    public a(CoroutineContext coroutineContext, boolean z10, boolean z11) {
        super(z11);
        if (z10) {
            h0((Job) coroutineContext.l(Job.f36083j));
        }
        this.f36085i = coroutineContext.Z0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public String M() {
        return hs.e0.a(this) + " was cancelled";
    }

    protected void R0(Object obj) {
        C(obj);
    }

    protected void S0(Throwable th2, boolean z10) {
    }

    protected void T0(Object obj) {
    }

    public final void U0(hs.c0 c0Var, Object obj, Function2 function2) {
        c0Var.d(function2, obj, this);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlinx.coroutines.b0
    public final void g0(Throwable th2) {
        hs.a0.a(this.f36085i, th2);
    }

    @Override // kotlin.coroutines.Continuation
    public final CoroutineContext getContext() {
        return this.f36085i;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f36085i;
    }

    @Override // kotlinx.coroutines.b0
    public String p0() {
        String g10 = hs.x.g(this.f36085i);
        if (g10 == null) {
            return super.p0();
        }
        return '\"' + g10 + "\":" + super.p0();
    }

    @Override // kotlin.coroutines.Continuation
    public final void resumeWith(Object obj) {
        Object o02 = o0(hs.t.b(obj));
        if (o02 == c0.f36105b) {
            return;
        }
        R0(o02);
    }

    @Override // kotlinx.coroutines.b0
    protected final void v0(Object obj) {
        if (obj instanceof hs.r) {
            hs.r rVar = (hs.r) obj;
            S0(rVar.f27941a, rVar.a());
            return;
        }
        T0(obj);
    }
}
