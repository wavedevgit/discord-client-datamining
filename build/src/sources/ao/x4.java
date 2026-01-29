package ao;

import ao.g3;
import ao.n1;
import ao.q;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyWorker;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import tm.k;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class x4 {
    public static final void g(g3.a renderProps, n1.h renderState, k.a context, jo.k videoCaptureHelper) {
        tm.r c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        q p10 = renderState.p();
        if (p10 instanceof q.a) {
            tm.h c11 = context.c();
            c10 = tm.b0.c(null, new Function1() { // from class: ao.r4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit h10;
                    h10 = x4.h((r.c) obj);
                    return h10;
                }
            }, 1, null);
            c11.d(c10);
        } else if (p10 instanceof q.b) {
            b4.Q(renderState, context, renderProps, renderState.r(), ((q.b) p10).a(), videoCaptureHelper, renderState.o(), false, null, 0, null, null, 3968, null);
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(r.c action) {
        n1.h hVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.h) {
            hVar = (n1.h) c10;
        } else {
            hVar = null;
        }
        if (hVar == null) {
            return Unit.f33282a;
        }
        action.e(hVar.s(true));
        return Unit.f33282a;
    }

    public static final void i(final g3.a renderProps, final n1.h renderState, final k.a context, final jo.k videoCaptureHelper, AutoClassifyWorker.b autoClassifyWorkerFactory) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(autoClassifyWorkerFactory, "autoClassifyWorkerFactory");
        tm.w.l(context, autoClassifyWorkerFactory.a(renderProps.r(), renderProps.n(), renderProps.k(), renderProps.j(), renderState.r(), new AutoClassifyWorker.SupplementaryData(), renderProps.o(), renderProps.b().a()), Reflection.typeOf(AutoClassifyWorker.class), "", new Function1() { // from class: ao.s4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                tm.r j10;
                j10 = x4.j(k.a.this, videoCaptureHelper, renderProps, renderState, (AutoClassifyWorker.c) obj);
                return j10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final tm.r j(final k.a aVar, final jo.k kVar, final g3.a aVar2, final n1.h hVar, final AutoClassifyWorker.c it) {
        tm.r c10;
        tm.r c11;
        tm.r c12;
        tm.r c13;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof AutoClassifyWorker.c.a) {
            c13 = tm.b0.c(null, new Function1() { // from class: ao.t4
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit k10;
                    k10 = x4.k(k.a.this, it, kVar, (r.c) obj);
                    return k10;
                }
            }, 1, null);
            return c13;
        } else if (it instanceof AutoClassifyWorker.c.b) {
            final AutoClassifyWorker.a a10 = ((AutoClassifyWorker.c.b) it).a();
            if (a10 instanceof AutoClassifyWorker.a.C0238a) {
                c12 = tm.b0.c(null, new Function1() { // from class: ao.u4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit l10;
                        l10 = x4.l(k.a.this, aVar2, hVar, a10, kVar, (r.c) obj);
                        return l10;
                    }
                }, 1, null);
                return c12;
            } else if (a10 instanceof AutoClassifyWorker.a.b) {
                c11 = tm.b0.c(null, new Function1() { // from class: ao.v4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit m10;
                        m10 = x4.m(n1.h.this, a10, (r.c) obj);
                        return m10;
                    }
                }, 1, null);
                return c11;
            } else if (a10 instanceof AutoClassifyWorker.a.c) {
                c10 = tm.b0.c(null, new Function1() { // from class: ao.w4
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit n10;
                        n10 = x4.n(n1.h.this, a10, (r.c) obj);
                        return n10;
                    }
                }, 1, null);
                return c10;
            } else {
                throw new ir.p();
            }
        } else {
            throw new ir.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar, AutoClassifyWorker.c cVar, jo.k kVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        b4.U(aVar, new g3.b.c(((AutoClassifyWorker.c.a) cVar).a()), kVar);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(k.a aVar, g3.a aVar2, n1.h hVar, AutoClassifyWorker.a aVar3, jo.k kVar, r.c action) {
        n1.h hVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.h) {
            hVar2 = (n1.h) c10;
        } else {
            hVar2 = null;
        }
        n1.h hVar3 = hVar2;
        if (hVar3 == null) {
            return Unit.f33282a;
        }
        action.e(hVar3.s(false));
        AutoClassifyWorker.a.C0238a c0238a = (AutoClassifyWorker.a.C0238a) aVar3;
        b4.Q(hVar3, aVar, aVar2, hVar.r(), c0238a.a(), kVar, new mn.v(null, null, null, 0, 15, null), false, c0238a.a().b(), 0, null, null, 3200, null);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(n1.h hVar, AutoClassifyWorker.a aVar, r.c action) {
        n1.h hVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.h) {
            hVar2 = (n1.h) c10;
        } else {
            hVar2 = null;
        }
        if (hVar2 == null) {
            return Unit.f33282a;
        }
        n1.h hVar3 = hVar2;
        action.e(new n1.a(hVar3.q(), hVar3.m(), hVar3.k(), hVar3.j(), b4.v(action, false), hVar3.f(), hVar.r().i2(), new mn.v(null, null, null, 0, 15, null), ((AutoClassifyWorker.a.b) aVar).a(), null, null, c.f5809d, 1536, null));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(n1.h hVar, AutoClassifyWorker.a aVar, r.c action) {
        n1.h hVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.h) {
            hVar2 = (n1.h) c10;
        } else {
            hVar2 = null;
        }
        if (hVar2 == null) {
            return Unit.f33282a;
        }
        n1.h hVar3 = hVar2;
        action.e(new n1.a(hVar3.q(), hVar3.m(), hVar3.k(), hVar3.j(), b4.v(action, false), hVar3.f(), hVar.r().i2(), new mn.v(null, null, null, 0, 15, null), ((AutoClassifyWorker.a.c) aVar).a(), null, null, c.f5810e, 1536, null));
        return Unit.f33282a;
    }
}
