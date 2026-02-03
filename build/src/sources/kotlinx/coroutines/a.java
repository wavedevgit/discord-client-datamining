package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends b0 implements Job, Continuation, CoroutineScope {

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineContext f35475i;

    public a(CoroutineContext coroutineContext, boolean z10, boolean z11) {
        super(z11);
        if (z10) {
            h0((Job) coroutineContext.l(Job.f35473h));
        }
        this.f35475i = coroutineContext.V0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public String M() {
        return js.e0.a(this) + " was cancelled";
    }

    protected void Q0(Object obj) {
        C(obj);
    }

    protected void S0(Throwable th2, boolean z10) {
    }

    protected void T0(Object obj) {
    }

    public final void U0(js.c0 c0Var, Object obj, Function2 function2) {
        c0Var.d(function2, obj, this);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlinx.coroutines.b0
    public final void g0(Throwable th2) {
        js.a0.a(this.f35475i, th2);
    }

    @Override // kotlin.coroutines.Continuation
    public final CoroutineContext getContext() {
        return this.f35475i;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f35475i;
    }

    @Override // kotlinx.coroutines.b0
    public String p0() {
        String g10 = js.x.g(this.f35475i);
        if (g10 == null) {
            return super.p0();
        }
        return '\"' + g10 + "\":" + super.p0();
    }

    @Override // kotlin.coroutines.Continuation
    public final void resumeWith(Object obj) {
        Object o02 = o0(js.t.b(obj));
        if (o02 == c0.f35495b) {
            return;
        }
        Q0(o02);
    }

    @Override // kotlinx.coroutines.b0
    protected final void u0(Object obj) {
        if (obj instanceof js.r) {
            js.r rVar = (js.r) obj;
            S0(rVar.f31981a, rVar.a());
            return;
        }
        T0(obj);
    }
}
