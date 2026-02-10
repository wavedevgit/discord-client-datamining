package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends b0 implements Job, Continuation, CoroutineScope {

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineContext f34776i;

    public a(CoroutineContext coroutineContext, boolean z10, boolean z11) {
        super(z11);
        if (z10) {
            j0((Job) coroutineContext.m(Job.f34774h));
        }
        this.f34776i = coroutineContext.V0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public String P() {
        return ps.e0.a(this) + " was cancelled";
    }

    protected void S0(Object obj) {
        F(obj);
    }

    protected void T0(Throwable th2, boolean z10) {
    }

    protected void U0(Object obj) {
    }

    public final void X0(ps.c0 c0Var, Object obj, Function2 function2) {
        c0Var.d(function2, obj, this);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlin.coroutines.Continuation
    public final CoroutineContext getContext() {
        return this.f34776i;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f34776i;
    }

    @Override // kotlinx.coroutines.b0
    public final void i0(Throwable th2) {
        ps.a0.a(this.f34776i, th2);
    }

    @Override // kotlinx.coroutines.b0
    public String r0() {
        String g10 = ps.x.g(this.f34776i);
        if (g10 == null) {
            return super.r0();
        }
        return '\"' + g10 + "\":" + super.r0();
    }

    @Override // kotlin.coroutines.Continuation
    public final void resumeWith(Object obj) {
        Object q02 = q0(ps.t.b(obj));
        if (q02 == c0.f34796b) {
            return;
        }
        S0(q02);
    }

    @Override // kotlinx.coroutines.b0
    protected final void w0(Object obj) {
        if (obj instanceof ps.r) {
            ps.r rVar = (ps.r) obj;
            T0(rVar.f44530a, rVar.a());
            return;
        }
        U0(obj);
    }
}
