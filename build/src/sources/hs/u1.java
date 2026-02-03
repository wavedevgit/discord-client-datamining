package hs;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u1 extends ms.a0 {

    /* renamed from: p  reason: collision with root package name */
    private final ThreadLocal f27951p;
    private volatile boolean threadLocalIsSet;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public u1(kotlin.coroutines.CoroutineContext r3, kotlin.coroutines.Continuation r4) {
        /*
            r2 = this;
            hs.v1 r0 = hs.v1.f27955d
            kotlin.coroutines.CoroutineContext$Element r1 = r3.l(r0)
            if (r1 != 0) goto Ld
            kotlin.coroutines.CoroutineContext r0 = r3.Z0(r0)
            goto Le
        Ld:
            r0 = r3
        Le:
            r2.<init>(r0, r4)
            java.lang.ThreadLocal r0 = new java.lang.ThreadLocal
            r0.<init>()
            r2.f27951p = r0
            kotlin.coroutines.CoroutineContext r4 = r4.getContext()
            kotlin.coroutines.d$b r0 = kotlin.coroutines.d.f33146h
            kotlin.coroutines.CoroutineContext$Element r4 = r4.l(r0)
            boolean r4 = r4 instanceof kotlinx.coroutines.CoroutineDispatcher
            if (r4 != 0) goto L31
            r4 = 0
            java.lang.Object r4 = ms.l0.i(r3, r4)
            ms.l0.f(r3, r4)
            r2.b1(r3, r4)
        L31:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: hs.u1.<init>(kotlin.coroutines.CoroutineContext, kotlin.coroutines.Continuation):void");
    }

    private final void a1() {
        if (this.threadLocalIsSet) {
            Pair pair = (Pair) this.f27951p.get();
            if (pair != null) {
                ms.l0.f((CoroutineContext) pair.a(), pair.b());
            }
            this.f27951p.remove();
        }
    }

    @Override // ms.a0, kotlinx.coroutines.a
    protected void R0(Object obj) {
        a1();
        Object a10 = t.a(obj, this.f39145o);
        Continuation continuation = this.f39145o;
        CoroutineContext context = continuation.getContext();
        u1 u1Var = null;
        Object i10 = ms.l0.i(context, null);
        if (i10 != ms.l0.f39175a) {
            u1Var = x.m(continuation, context, i10);
        }
        try {
            this.f39145o.resumeWith(a10);
            Unit unit = Unit.f33074a;
            if (u1Var != null && !u1Var.X0()) {
                return;
            }
            ms.l0.f(context, i10);
        } catch (Throwable th2) {
            if (u1Var == null || u1Var.X0()) {
                ms.l0.f(context, i10);
            }
            throw th2;
        }
    }

    @Override // ms.a0
    public void W0() {
        a1();
    }

    public final boolean X0() {
        boolean z10;
        if (this.threadLocalIsSet && this.f27951p.get() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f27951p.remove();
        return !z10;
    }

    public final void b1(CoroutineContext coroutineContext, Object obj) {
        this.threadLocalIsSet = true;
        this.f27951p.set(jr.v.a(coroutineContext, obj));
    }
}
