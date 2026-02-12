package ys;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u1 extends dt.a0 {

    /* renamed from: p  reason: collision with root package name */
    private final ThreadLocal f55827p;
    private volatile boolean threadLocalIsSet;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public u1(kotlin.coroutines.CoroutineContext r3, kotlin.coroutines.Continuation r4) {
        /*
            r2 = this;
            ys.v1 r0 = ys.v1.f55831d
            kotlin.coroutines.CoroutineContext$Element r1 = r3.m(r0)
            if (r1 != 0) goto Ld
            kotlin.coroutines.CoroutineContext r0 = r3.O0(r0)
            goto Le
        Ld:
            r0 = r3
        Le:
            r2.<init>(r0, r4)
            java.lang.ThreadLocal r0 = new java.lang.ThreadLocal
            r0.<init>()
            r2.f55827p = r0
            kotlin.coroutines.CoroutineContext r4 = r4.getContext()
            kotlin.coroutines.d$b r0 = kotlin.coroutines.d.f32060j
            kotlin.coroutines.CoroutineContext$Element r4 = r4.m(r0)
            boolean r4 = r4 instanceof kotlinx.coroutines.CoroutineDispatcher
            if (r4 != 0) goto L31
            r4 = 0
            java.lang.Object r4 = dt.l0.i(r3, r4)
            dt.l0.f(r3, r4)
            r2.g1(r3, r4)
        L31:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ys.u1.<init>(kotlin.coroutines.CoroutineContext, kotlin.coroutines.Continuation):void");
    }

    private final void e1() {
        if (this.threadLocalIsSet) {
            Pair pair = (Pair) this.f55827p.get();
            if (pair != null) {
                dt.l0.f((CoroutineContext) pair.a(), pair.b());
            }
            this.f55827p.remove();
        }
    }

    @Override // dt.a0, kotlinx.coroutines.a
    protected void V0(Object obj) {
        e1();
        Object a10 = t.a(obj, this.f21868o);
        Continuation continuation = this.f21868o;
        CoroutineContext context = continuation.getContext();
        u1 u1Var = null;
        Object i10 = dt.l0.i(context, null);
        if (i10 != dt.l0.f21898a) {
            u1Var = x.m(continuation, context, i10);
        }
        try {
            this.f21868o.resumeWith(a10);
            Unit unit = Unit.f31988a;
            if (u1Var != null && !u1Var.d1()) {
                return;
            }
            dt.l0.f(context, i10);
        } catch (Throwable th2) {
            if (u1Var == null || u1Var.d1()) {
                dt.l0.f(context, i10);
            }
            throw th2;
        }
    }

    @Override // dt.a0
    public void c1() {
        e1();
    }

    public final boolean d1() {
        boolean z10;
        if (this.threadLocalIsSet && this.f55827p.get() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f55827p.remove();
        return !z10;
    }

    public final void g1(CoroutineContext coroutineContext, Object obj) {
        this.threadLocalIsSet = true;
        this.f55827p.set(as.v.a(coroutineContext, obj));
    }
}
