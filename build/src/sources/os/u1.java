package os;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u1 extends ts.a0 {

    /* renamed from: p  reason: collision with root package name */
    private final ThreadLocal f43583p;
    private volatile boolean threadLocalIsSet;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public u1(kotlin.coroutines.CoroutineContext r3, kotlin.coroutines.Continuation r4) {
        /*
            r2 = this;
            os.v1 r0 = os.v1.f43587d
            kotlin.coroutines.CoroutineContext$Element r1 = r3.m(r0)
            if (r1 != 0) goto Ld
            kotlin.coroutines.CoroutineContext r0 = r3.Y0(r0)
            goto Le
        Ld:
            r0 = r3
        Le:
            r2.<init>(r0, r4)
            java.lang.ThreadLocal r0 = new java.lang.ThreadLocal
            r0.<init>()
            r2.f43583p = r0
            kotlin.coroutines.CoroutineContext r4 = r4.getContext()
            kotlin.coroutines.d$b r0 = kotlin.coroutines.d.f32128g
            kotlin.coroutines.CoroutineContext$Element r4 = r4.m(r0)
            boolean r4 = r4 instanceof kotlinx.coroutines.CoroutineDispatcher
            if (r4 != 0) goto L31
            r4 = 0
            java.lang.Object r4 = ts.l0.i(r3, r4)
            ts.l0.f(r3, r4)
            r2.b1(r3, r4)
        L31:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: os.u1.<init>(kotlin.coroutines.CoroutineContext, kotlin.coroutines.Continuation):void");
    }

    private final void a1() {
        if (this.threadLocalIsSet) {
            Pair pair = (Pair) this.f43583p.get();
            if (pair != null) {
                ts.l0.f((CoroutineContext) pair.a(), pair.b());
            }
            this.f43583p.remove();
        }
    }

    @Override // ts.a0, kotlinx.coroutines.a
    protected void S0(Object obj) {
        a1();
        Object a10 = t.a(obj, this.f50860o);
        Continuation continuation = this.f50860o;
        CoroutineContext context = continuation.getContext();
        u1 u1Var = null;
        Object i10 = ts.l0.i(context, null);
        if (i10 != ts.l0.f50890a) {
            u1Var = x.m(continuation, context, i10);
        }
        try {
            this.f50860o.resumeWith(a10);
            Unit unit = Unit.f32056a;
            if (u1Var != null && !u1Var.Z0()) {
                return;
            }
            ts.l0.f(context, i10);
        } catch (Throwable th2) {
            if (u1Var == null || u1Var.Z0()) {
                ts.l0.f(context, i10);
            }
            throw th2;
        }
    }

    @Override // ts.a0
    public void X0() {
        a1();
    }

    public final boolean Z0() {
        boolean z10;
        if (this.threadLocalIsSet && this.f43583p.get() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f43583p.remove();
        return !z10;
    }

    public final void b1(CoroutineContext coroutineContext, Object obj) {
        this.threadLocalIsSet = true;
        this.f43583p.set(qr.v.a(coroutineContext, obj));
    }
}
