package go;

import android.content.Context;
import android.util.Size;
import cn.e;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import cp.c1;
import cp.l1;
import eo.b4;
import eo.c4;
import eo.d0;
import eo.e0;
import eo.f5;
import eo.g3;
import eo.h4;
import eo.m1;
import eo.n1;
import eo.q;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import ko.a;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KTypeProjection;
import kotlin.text.StringsKt;
import nq.b;
import pn.z;
import rn.g;
import wm.k;
import wm.o;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f26441a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f26442b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f26443c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f26444d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f26445e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f26446f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f26447g;

    /* renamed from: h  reason: collision with root package name */
    private final up.b f26448h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, up.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f26441a = applicationContext;
        this.f26442b = permissionRequestWorkflow;
        this.f26443c = governmentIdAnalyzeWorkerFactory;
        this.f26444d = governmentIdHintWorkerFactory;
        this.f26445e = webRtcWorkerFactory;
        this.f26446f = cameraXControllerFactory;
        this.f26447g = camera2ManagerFactoryFactory;
        this.f26448h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final oq.a aVar2, r.c action) {
        n1.l lVar;
        wm.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.D() != mo.t.f38932d) {
            wm.h c12 = aVar.c();
            c10 = wm.b0.c(null, new Function1(aVar2) { // from class: go.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B0;
                    B0 = m0.B0(null, (r.c) obj);
                    return B0;
                }
            }, 1, null);
            c12.d(c10);
            return Unit.f32464a;
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(oq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.a();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32464a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final eo.q qVar, final mo.k kVar, final pn.v vVar, final d0.b bVar) {
        h4.a aVar3;
        wm.r c10;
        c4 c11 = eo.r.c(qVar);
        if (kVar.c(aVar) && c11 != null) {
            b4.Q(n1Var, aVar2, aVar, bVar, c11, kVar, vVar, false, null, 0, null, null, 3968, null);
        } else if (aVar.s() && c11 != null) {
            b4.Q(n1Var, aVar2, aVar, bVar, c11, kVar, vVar, false, null, 0, null, null, 3840, null);
        } else {
            h4 g10 = n1Var.g();
            if (g10 instanceof h4.a) {
                aVar3 = (h4.a) g10;
            } else {
                aVar3 = null;
            }
            if (aVar3 == null) {
                return;
            }
            final n1.l lVar = new n1.l(aVar3, n1Var.m(), qVar, b4.I(aVar, aVar3.a()), n1Var.k(), n1Var.j(), n1Var.e(), mo.t.f38934i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: go.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            wm.h c12 = aVar2.c();
            c10 = wm.b0.c(null, new Function1() { // from class: go.t
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P;
                    P = m0.P(n1.this, qVar, bVar, lVar, vVar, (r.c) obj);
                    return P;
                }
            }, 1, null);
            c12.d(c10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(k.a aVar, final mo.k kVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(mo.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(mo.k kVar, r.c action) {
        n1.l lVar;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (kVar.d()) {
                tVar = mo.t.f38933e;
            } else {
                tVar = mo.t.f38934i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, eo.q qVar, d0.b bVar, n1.l lVar, pn.v vVar, r.c action) {
        h4.a aVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h4 g10 = n1Var.g();
        if (g10 instanceof h4.a) {
            aVar = (h4.a) g10;
        } else {
            aVar = null;
        }
        h4.a aVar2 = aVar;
        if (aVar2 == null) {
            return Unit.f32464a;
        }
        action.e(new n1.g(aVar2, ((n1) action.c()).m(), qVar, bVar, ((n1) action.c()).k(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r R(final ko.d dVar) {
        wm.r c10;
        c10 = wm.b0.c(null, new Function1() { // from class: go.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(ko.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(ko.d dVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        n1.d dVar3 = dVar2;
        if (dVar3 == null) {
            return Unit.f32464a;
        }
        action.e(n1.d.p(dVar3, null, null, null, null, null, 0, null, null, dVar, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(wm.h hVar) {
        hVar.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, mo.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, mo.k kVar, List absolutePaths, pn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<eo.c0> i22 = dVar.t().i2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(i22, 10));
        for (eo.c0 c0Var : i22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        eo.q q10 = dVar.q();
        d0.b t10 = dVar.t();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new eo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, q10, kVar, cameraProperties, d0.b.b(t10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final mo.k kVar, final Throwable error) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = m0.X(n1.d.this, aVar2, error, aVar, kVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final mo.k kVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        if (dVar2 == null) {
            return Unit.f32464a;
        }
        action.e(new n1.l(dVar.g(), dVar.m(), dVar.q(), b4.I((g3.a) action.b(), dVar.g().a()), dVar2.k(), dVar2.j(), b4.v(action, false), mo.t.f38934i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: go.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = m0.Y(k.a.this, kVar);
                return Y;
            }
        }, 11264, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(k.a aVar, final mo.k kVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(mo.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(mo.k kVar, r.c action) {
        n1.l lVar;
        mo.t tVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 != null) {
            if (kVar.d()) {
                tVar = mo.t.f38933e;
            } else {
                tVar = mo.t.f38934i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, mo.k kVar) {
        b4.N(m0Var.f26441a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = m0.d0((r.c) obj);
                return d02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.r((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, false, false, null, null, null, 32255, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(n1.l lVar, eo.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, mo.k kVar, List absolutePaths, pn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new eo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.s(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.g().a()), eo.r.b(qVar), d0.a.f21724e, null, null, 32, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(wm.h hVar) {
        hVar.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, mo.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i02;
                i02 = m0.i0(error, (r.c) obj);
                return i02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(Throwable th2, r.c action) {
        n1.l lVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 == null) {
            return Unit.f32464a;
        }
        action.e(n1.l.r(lVar2, null, null, null, f5.b.a.f21844e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1() { // from class: go.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k02;
                k02 = m0.k0(n1.l.this, (r.c) obj);
                return k02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.l.r(lVar, null, null, null, f5.b.a.f21843d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, mo.k kVar) {
        b4.N(m0Var.f26441a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r m0(final n1.l lVar, final eo.q qVar, Result result) {
        wm.r c10;
        wm.r c11;
        wm.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = wm.b0.c(null, new Function1() { // from class: go.p
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit n02;
                    n02 = m0.n0(n1.l.this, qVar, bVar, (r.c) obj);
                    return n02;
                }
            }, 1, null);
            return c12;
        }
        String message = e10.getMessage();
        if (message == null || !StringsKt.V(message, "ENOSPC", false, 2, null)) {
            c10 = wm.b0.c(null, new Function1() { // from class: go.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = wm.b0.c(null, new Function1() { // from class: go.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o02;
                o02 = m0.o0((r.c) obj);
                return o02;
            }
        }, 1, null);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(n1.l lVar, eo.q qVar, d0.b bVar, r.c action) {
        n1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f32464a;
        }
        action.e(new n1.d(lVar.g(), ((n1) action.c()).m(), qVar, bVar, lVar2.k(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.y()));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.z() == f5.b.a.f21845i) {
            action.e(n1.l.r(lVar, null, null, null, f5.b.a.f21844e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r q0(final ko.d dVar) {
        wm.r c10;
        c10 = wm.b0.c(null, new Function1() { // from class: go.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(ko.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(ko.d dVar, r.c action) {
        n1.l lVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar = (n1.l) c10;
        } else {
            lVar = null;
        }
        n1.l lVar2 = lVar;
        if (lVar2 == null) {
            return Unit.f32464a;
        }
        action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, null, null, null, false, false, null, dVar, null, 24575, null));
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r s0(final n1.l lVar, Unit it) {
        wm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = wm.b0.c(null, new Function1() { // from class: go.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit t02;
                t02 = m0.t0(n1.l.this, (r.c) obj);
                return t02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.z() == f5.b.a.f21845i) {
            action.e(n1.l.r(lVar, null, null, null, f5.b.a.f21844e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f32464a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final oq.a aVar3) {
        wm.w.l(aVar2, this.f26445e.a(aVar.v().d()), Reflection.typeOf(nq.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: go.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f26426e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f26427i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f26428o;

            {
                this.f26426e = lVar;
                this.f26427i = aVar;
                this.f26428o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r v02;
                v02 = m0.v0(m0.this, null, this.f26426e, this.f26427i, this.f26428o, (b.AbstractC0526b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.r v0(final m0 m0Var, final oq.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0526b it) {
        wm.r c10;
        wm.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final rn.m b10 = rn.j.b(m0Var.f26441a, rn.n.f49015d);
        if (it instanceof b.AbstractC0526b.C0527b) {
            c11 = wm.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: go.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f26471d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ rn.m f26472e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0526b f26473i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f26474o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f26475p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f26476q;

                {
                    this.f26471d = m0Var;
                    this.f26472e = b10;
                    this.f26473i = it;
                    this.f26474o = lVar;
                    this.f26475p = aVar2;
                    this.f26476q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f26471d, this.f26472e, this.f26473i, this.f26474o, this.f26475p, this.f26476q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0526b.a) {
            c10 = wm.b0.c(null, new Function1(aVar) { // from class: go.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new lr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final oq.a aVar, m0 m0Var, rn.m mVar, b.AbstractC0526b abstractC0526b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        rn.l b10;
        rn.l b11;
        rn.l b12;
        Size f10;
        rn.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.D() == mo.t.f38932d) {
            return Unit.f32464a;
        }
        if (lVar3 != null) {
            action.e(n1.l.r(lVar3, null, null, null, null, null, 0, null, mo.t.f38932d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.c(m0Var.f26445e.b());
        }
        if (aVar != null) {
            aVar.e(m0Var.f26441a);
        }
        int i13 = 0;
        if (mVar != null && (b13 = mVar.b()) != null && (f11 = b13.f()) != null) {
            i10 = f11.getWidth();
        } else {
            i10 = 0;
        }
        if (mVar != null && (b12 = mVar.b()) != null && (f10 = b12.f()) != null) {
            i13 = f10.getHeight();
        }
        if ((mVar != null && (b11 = mVar.b()) != null && b11.e() == 90) || (mVar != null && (b10 = mVar.b()) != null && b10.e() == 270)) {
            i12 = i13;
            i11 = i10;
        } else {
            i11 = i13;
            i12 = i10;
        }
        if (aVar != null) {
            b.AbstractC0526b.C0527b c0527b = (b.AbstractC0526b.C0527b) abstractC0526b;
            aVar.d(c0527b.a().c(), c0527b.a().a(), c0527b.a().b(), lVar.C(), i12, i11, aVar2.v().b(), new Function0() { // from class: go.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: go.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y02;
                    y02 = m0.y0(k.a.this, null);
                    return y02;
                }
            });
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(n1.l lVar) {
        lVar.A().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final oq.a aVar2) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = wm.b0.c(null, new Function1(aVar2) { // from class: go.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = m0.z0(null, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(oq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.a();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32464a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final mo.k videoCaptureHelper, final wm.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = eo.r.d(renderState.q(), renderState.g().a());
        wm.w.l(context, this.f26444d.a(renderState.g().a()), Reflection.typeOf(ko.a.class), "", new Function1() { // from class: go.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r R;
                R = m0.R((ko.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.g().a(), eo.r.b(renderState.q()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.g().a();
        f5.b.a aVar = f5.b.a.f21843d;
        f5.d c10 = d10.c();
        lo.e a11 = eo.r.a(renderState.q());
        up.a b10 = this.f26448h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        vn.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.s());
        videoCaptureHelper.b();
        return new cn.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: go.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(wm.h.this);
                return T;
            }
        }, new Function0() { // from class: go.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f26446f, this.f26447g, new Function2() { // from class: go.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (pn.v) obj2);
                return V;
            }
        }, new Function1() { // from class: go.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: go.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final mo.k videoCaptureHelper, final wm.h sink) {
        vn.a aVar;
        k.a aVar2;
        mo.k kVar;
        zo.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final eo.q s10 = renderState.s();
        c4.c d10 = eo.r.d(s10, renderState.g().a());
        String b10 = eo.r.b(s10);
        boolean z10 = s10 instanceof q.a;
        wm.w.l(context, this.f26443c.a(renderState.g().a(), b10), Reflection.typeOf(eo.e0.class), "", new Function1() { // from class: go.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r m02;
                m02 = m0.m0(n1.l.this, s10, (Result) obj);
                return m02;
            }
        });
        wm.w.l(context, this.f26444d.a(renderState.g().a()), Reflection.typeOf(ko.a.class), "", new Function1() { // from class: go.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.r q02;
                q02 = m0.q0((ko.d) obj);
                return q02;
            }
        });
        vn.a e10 = videoCaptureHelper.e(renderProps);
        vn.a aVar3 = vn.a.f51700d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            wm.w.l(context, o.a.b(wm.o.f52562a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(wm.o.class, KTypeProjection.f32568c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: go.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    wm.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.w() != null) {
            Map f10 = o0.f(lr.v.a(e.a.POSITIVE, this.f26441a.getString(17039370)));
            String string = this.f26441a.getString(ep.e.f22494k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new cn.e(f10, string, null, false, new Function1() { // from class: go.l0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c02;
                    c02 = m0.c0(k.a.this, (e.b) obj);
                    return c02;
                }
            }, 12, null));
        }
        String E = b4.E(renderProps.t(), renderState.g().a(), b10, renderState.f());
        String J = b4.J(renderProps.t(), renderState.g().a(), b10, renderState.f(), z10);
        c4.e a10 = renderState.g().a();
        f5.b.a z12 = renderState.z();
        f5.d c11 = d10.c();
        lo.e a11 = eo.r.a(s10);
        up.a b11 = this.f26448h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        vn.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.y());
        ho.h F = b4.F(renderProps, renderState.g().a());
        videoCaptureHelper.b();
        vn.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, z12, c11, a11, a10, b11, new Function2() { // from class: go.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, s10, this, renderProps, context, videoCaptureHelper, (List) obj, (pn.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: go.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(wm.h.this);
                return f02;
            }
        }, new Function0() { // from class: go.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f26446f, this.f26447g, null, new Function1() { // from class: go.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: go.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: go.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.u()) {
            c10 = b4.b0(g10, this.f26441a, context, renderProps, true, this.f26442b);
        } else {
            if (renderState.t()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && mp.f.f(this.f26441a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f26441a, context, renderProps, true, this.f26442b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.D() == mo.t.f38934i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new cn.d(c10, arrayList);
    }
}
