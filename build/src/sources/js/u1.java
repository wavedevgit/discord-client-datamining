package js;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u1 extends os.a0 {

    /* renamed from: p  reason: collision with root package name */
    private final ThreadLocal f31991p;
    private volatile boolean threadLocalIsSet;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public u1(kotlin.coroutines.CoroutineContext r3, kotlin.coroutines.Continuation r4) {
        /*
            r2 = this;
            js.v1 r0 = js.v1.f31995d
            kotlin.coroutines.CoroutineContext$Element r1 = r3.l(r0)
            if (r1 != 0) goto Ld
            kotlin.coroutines.CoroutineContext r0 = r3.V0(r0)
            goto Le
        Ld:
            r0 = r3
        Le:
            r2.<init>(r0, r4)
            java.lang.ThreadLocal r0 = new java.lang.ThreadLocal
            r0.<init>()
            r2.f31991p = r0
            kotlin.coroutines.CoroutineContext r4 = r4.getContext()
            kotlin.coroutines.d$b r0 = kotlin.coroutines.d.f32536g
            kotlin.coroutines.CoroutineContext$Element r4 = r4.l(r0)
            boolean r4 = r4 instanceof kotlinx.coroutines.CoroutineDispatcher
            if (r4 != 0) goto L31
            r4 = 0
            java.lang.Object r4 = os.l0.i(r3, r4)
            os.l0.f(r3, r4)
            r2.a1(r3, r4)
        L31:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: js.u1.<init>(kotlin.coroutines.CoroutineContext, kotlin.coroutines.Continuation):void");
    }

    private final void Z0() {
        if (this.threadLocalIsSet) {
            Pair pair = (Pair) this.f31991p.get();
            if (pair != null) {
                os.l0.f((CoroutineContext) pair.a(), pair.b());
            }
            this.f31991p.remove();
        }
    }

    @Override // os.a0, kotlinx.coroutines.a
    protected void Q0(Object obj) {
        Z0();
        Object a10 = t.a(obj, this.f44500o);
        Continuation continuation = this.f44500o;
        CoroutineContext context = continuation.getContext();
        u1 u1Var = null;
        Object i10 = os.l0.i(context, null);
        if (i10 != os.l0.f44530a) {
            u1Var = x.m(continuation, context, i10);
        }
        try {
            this.f44500o.resumeWith(a10);
            Unit unit = Unit.f32464a;
            if (u1Var != null && !u1Var.X0()) {
                return;
            }
            os.l0.f(context, i10);
        } catch (Throwable th2) {
            if (u1Var == null || u1Var.X0()) {
                os.l0.f(context, i10);
            }
            throw th2;
        }
    }

    @Override // os.a0
    public void W0() {
        Z0();
    }

    public final boolean X0() {
        boolean z10;
        if (this.threadLocalIsSet && this.f31991p.get() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f31991p.remove();
        return !z10;
    }

    public final void a1(CoroutineContext coroutineContext, Object obj) {
        this.threadLocalIsSet = true;
        this.f31991p.set(lr.v.a(coroutineContext, obj));
    }
}
