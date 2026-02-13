package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends b0 implements Job, Continuation, CoroutineScope {

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineContext f35567i;

    public a(CoroutineContext coroutineContext, boolean z10, boolean z11) {
        super(z11);
        if (z10) {
            k0((Job) coroutineContext.m(Job.f35565k));
        }
        this.f35567i = coroutineContext.O0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public String P() {
        return ys.e0.a(this) + " was cancelled";
    }

    protected void V0(Object obj) {
        F(obj);
    }

    protected void W0(Throwable th2, boolean z10) {
    }

    protected void X0(Object obj) {
    }

    public final void Y0(ys.c0 c0Var, Object obj, Function2 function2) {
        c0Var.d(function2, obj, this);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlin.coroutines.Continuation
    public final CoroutineContext getContext() {
        return this.f35567i;
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f35567i;
    }

    @Override // kotlinx.coroutines.b0
    public final void j0(Throwable th2) {
        ys.a0.a(this.f35567i, th2);
    }

    @Override // kotlin.coroutines.Continuation
    public final void resumeWith(Object obj) {
        Object r02 = r0(ys.t.b(obj));
        if (r02 == c0.f35587b) {
            return;
        }
        V0(r02);
    }

    @Override // kotlinx.coroutines.b0
    public String s0() {
        String g10 = ys.x.g(this.f35567i);
        if (g10 == null) {
            return super.s0();
        }
        return '\"' + g10 + "\":" + super.s0();
    }

    @Override // kotlinx.coroutines.b0
    protected final void x0(Object obj) {
        if (obj instanceof ys.r) {
            ys.r rVar = (ys.r) obj;
            W0(rVar.f56385a, rVar.a());
            return;
        }
        X0(obj);
    }
}
