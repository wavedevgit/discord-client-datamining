package mo;

import android.content.Context;
import android.util.Size;
import cn.k;
import cn.o;
import cn.r;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import in.e;
import ip.c1;
import ip.l1;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import ko.b4;
import ko.c4;
import ko.d0;
import ko.e0;
import ko.f5;
import ko.g3;
import ko.h4;
import ko.m1;
import ko.n1;
import ko.q;
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
import qo.a;
import tq.b;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f37338a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f37339b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f37340c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f37341d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f37342e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f37343f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f37344g;

    /* renamed from: h  reason: collision with root package name */
    private final aq.b f37345h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, aq.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f37338a = applicationContext;
        this.f37339b = permissionRequestWorkflow;
        this.f37340c = governmentIdAnalyzeWorkerFactory;
        this.f37341d = governmentIdHintWorkerFactory;
        this.f37342e = webRtcWorkerFactory;
        this.f37343f = cameraXControllerFactory;
        this.f37344g = camera2ManagerFactoryFactory;
        this.f37345h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final uq.a aVar2, r.c action) {
        n1.l lVar;
        cn.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.H() != so.t.f49903d) {
            cn.h c12 = aVar.c();
            c10 = cn.b0.c(null, new Function1(aVar2) { // from class: mo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B0;
                    B0 = m0.B0(null, (r.c) obj);
                    return B0;
                }
            }, 1, null);
            c12.d(c10);
            return Unit.f31765a;
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(uq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.a();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31765a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final ko.q qVar, final so.k kVar, final vn.v vVar, final d0.b bVar) {
        h4.a aVar3;
        cn.r c10;
        c4 c11 = ko.r.c(qVar);
        if (kVar.c(aVar) && c11 != null) {
            b4.Q(n1Var, aVar2, aVar, bVar, c11, kVar, vVar, false, null, 0, null, null, 3968, null);
        } else if (aVar.s() && c11 != null) {
            b4.Q(n1Var, aVar2, aVar, bVar, c11, kVar, vVar, false, null, 0, null, null, 3840, null);
        } else {
            h4 h10 = n1Var.h();
            if (h10 instanceof h4.a) {
                aVar3 = (h4.a) h10;
            } else {
                aVar3 = null;
            }
            if (aVar3 == null) {
                return;
            }
            final n1.l lVar = new n1.l(aVar3, n1Var.o(), qVar, b4.I(aVar, aVar3.a()), n1Var.l(), n1Var.j(), n1Var.e(), so.t.f49905i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: mo.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            cn.h c12 = aVar2.c();
            c10 = cn.b0.c(null, new Function1() { // from class: mo.t
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
    public static final Unit N(k.a aVar, final so.k kVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(so.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(so.k kVar, r.c action) {
        n1.l lVar;
        so.t tVar;
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
                tVar = so.t.f49904e;
            } else {
                tVar = so.t.f49905i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, ko.q qVar, d0.b bVar, n1.l lVar, vn.v vVar, r.c action) {
        h4.a aVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        h4 h10 = n1Var.h();
        if (h10 instanceof h4.a) {
            aVar = (h4.a) h10;
        } else {
            aVar = null;
        }
        h4.a aVar2 = aVar;
        if (aVar2 == null) {
            return Unit.f31765a;
        }
        action.e(new n1.g(aVar2, ((n1) action.c()).o(), qVar, bVar, ((n1) action.c()).l(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r R(final qo.d dVar) {
        cn.r c10;
        c10 = cn.b0.c(null, new Function1() { // from class: mo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(qo.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(qo.d dVar, r.c action) {
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
            return Unit.f31765a;
        }
        action.e(n1.d.r(dVar3, null, null, null, null, null, 0, null, null, dVar, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(cn.h hVar) {
        hVar.d(g3.b.C0475b.f31286a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, so.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, so.k kVar, List absolutePaths, vn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<ko.c0> h22 = dVar.w().h2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(h22, 10));
        for (ko.c0 c0Var : h22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        ko.q t10 = dVar.t();
        d0.b w10 = dVar.w();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new ko.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, t10, kVar, cameraProperties, d0.b.b(w10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final so.k kVar, final Throwable error) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = m0.X(n1.d.this, aVar2, error, aVar, kVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final so.k kVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        if (dVar2 == null) {
            return Unit.f31765a;
        }
        action.e(new n1.l(dVar.h(), dVar.o(), dVar.t(), b4.I((g3.a) action.b(), dVar.h().a()), dVar2.l(), dVar2.j(), b4.v(action, false), so.t.f49905i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: mo.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = m0.Y(k.a.this, kVar);
                return Y;
            }
        }, 11264, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(k.a aVar, final so.k kVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(so.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(so.k kVar, r.c action) {
        n1.l lVar;
        so.t tVar;
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
                tVar = so.t.f49904e;
            } else {
                tVar = so.t.f49905i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, so.k kVar) {
        b4.N(m0Var.f37338a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = m0.d0((r.c) obj);
                return d02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.u((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, false, false, null, null, null, 32255, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(n1.l lVar, ko.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, so.k kVar, List absolutePaths, vn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new ko.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.v(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.h().a()), ko.r.b(qVar), d0.a.f31031e, null, null, 32, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(cn.h hVar) {
        hVar.d(g3.b.C0475b.f31286a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, so.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i02;
                i02 = m0.i0(error, (r.c) obj);
                return i02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
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
            return Unit.f31765a;
        }
        action.e(n1.l.u(lVar2, null, null, null, f5.b.a.f31151e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1() { // from class: mo.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k02;
                k02 = m0.k0(n1.l.this, (r.c) obj);
                return k02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.l.u(lVar, null, null, null, f5.b.a.f31150d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, so.k kVar) {
        b4.N(m0Var.f37338a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r m0(final n1.l lVar, final ko.q qVar, Result result) {
        cn.r c10;
        cn.r c11;
        cn.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = cn.b0.c(null, new Function1() { // from class: mo.p
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
            c10 = cn.b0.c(null, new Function1() { // from class: mo.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = cn.b0.c(null, new Function1() { // from class: mo.q
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
    public static final Unit n0(n1.l lVar, ko.q qVar, d0.b bVar, r.c action) {
        n1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f31765a;
        }
        action.e(new n1.d(lVar.h(), ((n1) action.c()).o(), qVar, bVar, lVar2.l(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.D()));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.E() == f5.b.a.f31152i) {
            action.e(n1.l.u(lVar, null, null, null, f5.b.a.f31151e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r q0(final qo.d dVar) {
        cn.r c10;
        c10 = cn.b0.c(null, new Function1() { // from class: mo.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(qo.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(qo.d dVar, r.c action) {
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
            return Unit.f31765a;
        }
        action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, null, null, null, false, false, null, dVar, null, 24575, null));
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r s0(final n1.l lVar, Unit it) {
        cn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = cn.b0.c(null, new Function1() { // from class: mo.m
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
        if (lVar.E() == f5.b.a.f31152i) {
            action.e(n1.l.u(lVar, null, null, null, f5.b.a.f31151e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31765a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final uq.a aVar3) {
        cn.w.l(aVar2, this.f37342e.a(aVar.v().d()), Reflection.typeOf(tq.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: mo.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f37323e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f37324i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f37325o;

            {
                this.f37323e = lVar;
                this.f37324i = aVar;
                this.f37325o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r v02;
                v02 = m0.v0(m0.this, null, this.f37323e, this.f37324i, this.f37325o, (b.AbstractC0697b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final cn.r v0(final m0 m0Var, final uq.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0697b it) {
        cn.r c10;
        cn.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final xn.m b10 = xn.j.b(m0Var.f37338a, xn.n.f55225d);
        if (it instanceof b.AbstractC0697b.C0698b) {
            c11 = cn.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: mo.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f37368d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ xn.m f37369e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0697b f37370i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f37371o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f37372p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f37373q;

                {
                    this.f37368d = m0Var;
                    this.f37369e = b10;
                    this.f37370i = it;
                    this.f37371o = lVar;
                    this.f37372p = aVar2;
                    this.f37373q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f37368d, this.f37369e, this.f37370i, this.f37371o, this.f37372p, this.f37373q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0697b.a) {
            c10 = cn.b0.c(null, new Function1(aVar) { // from class: mo.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new rr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final uq.a aVar, m0 m0Var, xn.m mVar, b.AbstractC0697b abstractC0697b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        xn.l b10;
        xn.l b11;
        xn.l b12;
        Size f10;
        xn.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.H() == so.t.f49903d) {
            return Unit.f31765a;
        }
        if (lVar3 != null) {
            action.e(n1.l.u(lVar3, null, null, null, null, null, 0, null, so.t.f49903d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.e(m0Var.f37342e.b());
        }
        if (aVar != null) {
            aVar.d(m0Var.f37338a);
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
            b.AbstractC0697b.C0698b c0698b = (b.AbstractC0697b.C0698b) abstractC0697b;
            aVar.c(c0698b.a().c(), c0698b.a().a(), c0698b.a().b(), lVar.G(), i12, i11, aVar2.v().b(), new Function0() { // from class: mo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: mo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y02;
                    y02 = m0.y0(k.a.this, null);
                    return y02;
                }
            });
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(n1.l lVar) {
        lVar.F().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final uq.a aVar2) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = cn.b0.c(null, new Function1(aVar2) { // from class: mo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = m0.z0(null, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(uq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.a();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31765a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final so.k videoCaptureHelper, final cn.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = ko.r.d(renderState.t(), renderState.h().a());
        cn.w.l(context, this.f37341d.a(renderState.h().a()), Reflection.typeOf(qo.a.class), "", new Function1() { // from class: mo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r R;
                R = m0.R((qo.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.h().a(), ko.r.b(renderState.t()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.h().a();
        f5.b.a aVar = f5.b.a.f31150d;
        f5.d c10 = d10.c();
        ro.e a11 = ko.r.a(renderState.t());
        aq.a b10 = this.f37345h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        bo.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.v());
        videoCaptureHelper.b();
        return new in.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: mo.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(cn.h.this);
                return T;
            }
        }, new Function0() { // from class: mo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f37343f, this.f37344g, new Function2() { // from class: mo.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (vn.v) obj2);
                return V;
            }
        }, new Function1() { // from class: mo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: mo.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final so.k videoCaptureHelper, final cn.h sink) {
        bo.a aVar;
        k.a aVar2;
        so.k kVar;
        fp.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final ko.q v10 = renderState.v();
        c4.c d10 = ko.r.d(v10, renderState.h().a());
        String b10 = ko.r.b(v10);
        boolean z10 = v10 instanceof q.a;
        cn.w.l(context, this.f37340c.a(renderState.h().a(), b10), Reflection.typeOf(ko.e0.class), "", new Function1() { // from class: mo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r m02;
                m02 = m0.m0(n1.l.this, v10, (Result) obj);
                return m02;
            }
        });
        cn.w.l(context, this.f37341d.a(renderState.h().a()), Reflection.typeOf(qo.a.class), "", new Function1() { // from class: mo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                cn.r q02;
                q02 = m0.q0((qo.d) obj);
                return q02;
            }
        });
        bo.a e10 = videoCaptureHelper.e(renderProps);
        bo.a aVar3 = bo.a.f7161d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            cn.w.l(context, o.a.b(cn.o.f7758a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(cn.o.class, KTypeProjection.f31869c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: mo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    cn.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.B() != null) {
            Map f10 = o0.f(rr.v.a(e.a.POSITIVE, this.f37338a.getString(17039370)));
            String string = this.f37338a.getString(kp.e.f34942k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new in.e(f10, string, null, false, new Function1() { // from class: mo.l0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c02;
                    c02 = m0.c0(k.a.this, (e.b) obj);
                    return c02;
                }
            }, 12, null));
        }
        String E = b4.E(renderProps.t(), renderState.h().a(), b10, renderState.f());
        String J = b4.J(renderProps.t(), renderState.h().a(), b10, renderState.f(), z10);
        c4.e a10 = renderState.h().a();
        f5.b.a E2 = renderState.E();
        f5.d c11 = d10.c();
        ro.e a11 = ko.r.a(v10);
        aq.a b11 = this.f37345h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        bo.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.D());
        no.h F = b4.F(renderProps, renderState.h().a());
        videoCaptureHelper.b();
        bo.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, E2, c11, a11, a10, b11, new Function2() { // from class: mo.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, v10, this, renderProps, context, videoCaptureHelper, (List) obj, (vn.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: mo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(cn.h.this);
                return f02;
            }
        }, new Function0() { // from class: mo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f37343f, this.f37344g, null, new Function1() { // from class: mo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: mo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: mo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.x()) {
            c10 = b4.b0(g10, this.f37338a, context, renderProps, true, this.f37339b);
        } else {
            if (renderState.w()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && sp.f.f(this.f37338a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f37338a, context, renderProps, true, this.f37339b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.H() == so.t.f49905i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new in.d(c10, arrayList);
    }
}
