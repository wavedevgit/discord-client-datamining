package vo;

import android.content.Context;
import android.util.Size;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import cr.b;
import en.k;
import en.o;
import en.r;
import fo.z;
import ho.g;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kn.e;
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
import rp.c1;
import rp.l1;
import to.b4;
import to.c4;
import to.d0;
import to.e0;
import to.f5;
import to.g3;
import to.h4;
import to.m1;
import to.n1;
import to.q;
import zo.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f51699a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f51700b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f51701c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f51702d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f51703e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f51704f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f51705g;

    /* renamed from: h  reason: collision with root package name */
    private final jq.b f51706h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, jq.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f51699a = applicationContext;
        this.f51700b = permissionRequestWorkflow;
        this.f51701c = governmentIdAnalyzeWorkerFactory;
        this.f51702d = governmentIdHintWorkerFactory;
        this.f51703e = webRtcWorkerFactory;
        this.f51704f = cameraXControllerFactory;
        this.f51705g = camera2ManagerFactoryFactory;
        this.f51706h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final dr.a aVar2, r.c action) {
        n1.l lVar;
        en.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.E() != bp.t.f7332d) {
            en.h c12 = aVar.c();
            c10 = en.b0.c(null, new Function1(aVar2) { // from class: vo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B0;
                    B0 = m0.B0(null, (r.c) obj);
                    return B0;
                }
            }, 1, null);
            c12.d(c10);
            return Unit.f31988a;
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(dr.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.a();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31988a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final to.q qVar, final bp.k kVar, final fo.v vVar, final d0.b bVar) {
        h4.a aVar3;
        en.r c10;
        c4 c11 = to.r.c(qVar);
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
            final n1.l lVar = new n1.l(aVar3, n1Var.l(), qVar, b4.I(aVar, aVar3.a()), n1Var.k(), n1Var.j(), n1Var.e(), bp.t.f7334i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: vo.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            en.h c12 = aVar2.c();
            c10 = en.b0.c(null, new Function1() { // from class: vo.t
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
    public static final Unit N(k.a aVar, final bp.k kVar) {
        en.r c10;
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(bp.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(bp.k kVar, r.c action) {
        n1.l lVar;
        bp.t tVar;
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
                tVar = bp.t.f7333e;
            } else {
                tVar = bp.t.f7334i;
            }
            action.e(n1.l.s(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, to.q qVar, d0.b bVar, n1.l lVar, fo.v vVar, r.c action) {
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
            return Unit.f31988a;
        }
        action.e(new n1.g(aVar2, ((n1) action.c()).l(), qVar, bVar, ((n1) action.c()).k(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r R(final zo.d dVar) {
        en.r c10;
        c10 = en.b0.c(null, new Function1() { // from class: vo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(zo.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(zo.d dVar, r.c action) {
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
            return Unit.f31988a;
        }
        action.e(n1.d.q(dVar3, null, null, null, null, null, 0, null, null, dVar, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(en.h hVar) {
        hVar.d(g3.b.C0673b.f49279a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, bp.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, bp.k kVar, List absolutePaths, fo.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<to.c0> m22 = dVar.u().m2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(m22, 10));
        for (to.c0 c0Var : m22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        to.q r10 = dVar.r();
        d0.b u10 = dVar.u();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new to.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, r10, kVar, cameraProperties, d0.b.b(u10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final bp.k kVar, final Throwable error) {
        en.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = m0.X(n1.d.this, aVar2, error, aVar, kVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final bp.k kVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        if (dVar2 == null) {
            return Unit.f31988a;
        }
        action.e(new n1.l(dVar.g(), dVar.l(), dVar.r(), b4.I((g3.a) action.b(), dVar.g().a()), dVar2.k(), dVar2.j(), b4.v(action, false), bp.t.f7334i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: vo.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = m0.Y(k.a.this, kVar);
                return Y;
            }
        }, 11264, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(k.a aVar, final bp.k kVar) {
        en.r c10;
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(bp.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(bp.k kVar, r.c action) {
        n1.l lVar;
        bp.t tVar;
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
                tVar = bp.t.f7333e;
            } else {
                tVar = bp.t.f7334i;
            }
            action.e(n1.l.s(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, bp.k kVar) {
        b4.N(m0Var.f51699a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        en.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = m0.d0((r.c) obj);
                return d02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.s((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, false, false, null, null, null, 32255, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(n1.l lVar, to.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, bp.k kVar, List absolutePaths, fo.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new to.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.t(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.g().a()), to.r.b(qVar), d0.a.f49024e, null, null, 32, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(en.h hVar) {
        hVar.d(g3.b.C0673b.f49279a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, bp.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        en.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i02;
                i02 = m0.i0(error, (r.c) obj);
                return i02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
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
            return Unit.f31988a;
        }
        action.e(n1.l.s(lVar2, null, null, null, f5.b.a.f49144e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        en.r c10;
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1() { // from class: vo.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k02;
                k02 = m0.k0(n1.l.this, (r.c) obj);
                return k02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.l.s(lVar, null, null, null, f5.b.a.f49143d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, bp.k kVar) {
        b4.N(m0Var.f51699a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r m0(final n1.l lVar, final to.q qVar, Result result) {
        en.r c10;
        en.r c11;
        en.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = en.b0.c(null, new Function1() { // from class: vo.p
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
            c10 = en.b0.c(null, new Function1() { // from class: vo.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = en.b0.c(null, new Function1() { // from class: vo.q
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
    public static final Unit n0(n1.l lVar, to.q qVar, d0.b bVar, r.c action) {
        n1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f31988a;
        }
        action.e(new n1.d(lVar.g(), ((n1) action.c()).l(), qVar, bVar, lVar2.k(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.A()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.B() == f5.b.a.f49145i) {
            action.e(n1.l.s(lVar, null, null, null, f5.b.a.f49144e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r q0(final zo.d dVar) {
        en.r c10;
        c10 = en.b0.c(null, new Function1() { // from class: vo.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(zo.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(zo.d dVar, r.c action) {
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
            return Unit.f31988a;
        }
        action.e(n1.l.s(lVar2, null, null, null, null, null, 0, null, null, null, null, false, false, null, dVar, null, 24575, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r s0(final n1.l lVar, Unit it) {
        en.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = en.b0.c(null, new Function1() { // from class: vo.m
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
        if (lVar.B() == f5.b.a.f49145i) {
            action.e(n1.l.s(lVar, null, null, null, f5.b.a.f49144e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31988a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final dr.a aVar3) {
        en.w.l(aVar2, this.f51703e.a(aVar.v().d()), Reflection.typeOf(cr.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: vo.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f51684e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f51685i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f51686o;

            {
                this.f51684e = lVar;
                this.f51685i = aVar;
                this.f51686o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r v02;
                v02 = m0.v0(m0.this, null, this.f51684e, this.f51685i, this.f51686o, (b.AbstractC0274b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r v0(final m0 m0Var, final dr.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0274b it) {
        en.r c10;
        en.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final ho.m b10 = ho.j.b(m0Var.f51699a, ho.n.f27614d);
        if (it instanceof b.AbstractC0274b.C0275b) {
            c11 = en.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: vo.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f51729d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ ho.m f51730e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0274b f51731i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f51732o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f51733p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f51734q;

                {
                    this.f51729d = m0Var;
                    this.f51730e = b10;
                    this.f51731i = it;
                    this.f51732o = lVar;
                    this.f51733p = aVar2;
                    this.f51734q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f51729d, this.f51730e, this.f51731i, this.f51732o, this.f51733p, this.f51734q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0274b.a) {
            c10 = en.b0.c(null, new Function1(aVar) { // from class: vo.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final dr.a aVar, m0 m0Var, ho.m mVar, b.AbstractC0274b abstractC0274b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        ho.l b10;
        ho.l b11;
        ho.l b12;
        Size f10;
        ho.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.E() == bp.t.f7332d) {
            return Unit.f31988a;
        }
        if (lVar3 != null) {
            action.e(n1.l.s(lVar3, null, null, null, null, null, 0, null, bp.t.f7332d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.b(m0Var.f51703e.b());
        }
        if (aVar != null) {
            aVar.e(m0Var.f51699a);
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
            b.AbstractC0274b.C0275b c0275b = (b.AbstractC0274b.C0275b) abstractC0274b;
            aVar.d(c0275b.a().c(), c0275b.a().a(), c0275b.a().b(), lVar.D(), i12, i11, aVar2.v().b(), new Function0() { // from class: vo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: vo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y02;
                    y02 = m0.y0(k.a.this, null);
                    return y02;
                }
            });
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(n1.l lVar) {
        lVar.C().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final dr.a aVar2) {
        en.r c10;
        en.h c11 = aVar.c();
        c10 = en.b0.c(null, new Function1(aVar2) { // from class: vo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = m0.z0(null, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(dr.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.a();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31988a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final bp.k videoCaptureHelper, final en.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = to.r.d(renderState.r(), renderState.g().a());
        en.w.l(context, this.f51702d.a(renderState.g().a()), Reflection.typeOf(zo.a.class), "", new Function1() { // from class: vo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r R;
                R = m0.R((zo.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.g().a(), to.r.b(renderState.r()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.g().a();
        f5.b.a aVar = f5.b.a.f49143d;
        f5.d c10 = d10.c();
        ap.e a11 = to.r.a(renderState.r());
        jq.a b10 = this.f51706h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        lo.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.t());
        videoCaptureHelper.b();
        return new kn.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: vo.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(en.h.this);
                return T;
            }
        }, new Function0() { // from class: vo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f51704f, this.f51705g, new Function2() { // from class: vo.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (fo.v) obj2);
                return V;
            }
        }, new Function1() { // from class: vo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: vo.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final bp.k videoCaptureHelper, final en.h sink) {
        lo.a aVar;
        k.a aVar2;
        bp.k kVar;
        op.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final to.q t10 = renderState.t();
        c4.c d10 = to.r.d(t10, renderState.g().a());
        String b10 = to.r.b(t10);
        boolean z10 = t10 instanceof q.a;
        en.w.l(context, this.f51701c.a(renderState.g().a(), b10), Reflection.typeOf(to.e0.class), "", new Function1() { // from class: vo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r m02;
                m02 = m0.m0(n1.l.this, t10, (Result) obj);
                return m02;
            }
        });
        en.w.l(context, this.f51702d.a(renderState.g().a()), Reflection.typeOf(zo.a.class), "", new Function1() { // from class: vo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.r q02;
                q02 = m0.q0((zo.d) obj);
                return q02;
            }
        });
        lo.a e10 = videoCaptureHelper.e(renderProps);
        lo.a aVar3 = lo.a.f35949d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            en.w.l(context, o.a.b(en.o.f23001a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(en.o.class, KTypeProjection.f32092c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: vo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.x() != null) {
            Map f10 = o0.f(as.v.a(e.a.POSITIVE, this.f51699a.getString(17039370)));
            String string = this.f51699a.getString(tp.e.f49794k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new kn.e(f10, string, null, false, new Function1() { // from class: vo.l0
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
        f5.b.a B = renderState.B();
        f5.d c11 = d10.c();
        ap.e a11 = to.r.a(t10);
        jq.a b11 = this.f51706h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        lo.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.A());
        wo.h F = b4.F(renderProps, renderState.g().a());
        videoCaptureHelper.b();
        lo.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, B, c11, a11, a10, b11, new Function2() { // from class: vo.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, t10, this, renderProps, context, videoCaptureHelper, (List) obj, (fo.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: vo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(en.h.this);
                return f02;
            }
        }, new Function0() { // from class: vo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f51704f, this.f51705g, null, new Function1() { // from class: vo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: vo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: vo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.v()) {
            c10 = b4.b0(g10, this.f51699a, context, renderProps, true, this.f51700b);
        } else {
            if (renderState.u()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && bq.f.f(this.f51699a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f51699a, context, renderProps, true, this.f51700b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.E() == bp.t.f7334i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new kn.d(c10, arrayList);
    }
}
