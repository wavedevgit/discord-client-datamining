package lo;

import android.content.Context;
import android.util.Size;
import bn.k;
import bn.o;
import bn.r;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import hn.e;
import hp.c1;
import hp.l1;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import jo.b4;
import jo.c4;
import jo.d0;
import jo.e0;
import jo.f5;
import jo.g3;
import jo.h4;
import jo.m1;
import jo.n1;
import jo.q;
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
import po.a;
import sq.b;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f36508a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f36509b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f36510c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f36511d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f36512e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f36513f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f36514g;

    /* renamed from: h  reason: collision with root package name */
    private final zp.b f36515h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, zp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f36508a = applicationContext;
        this.f36509b = permissionRequestWorkflow;
        this.f36510c = governmentIdAnalyzeWorkerFactory;
        this.f36511d = governmentIdHintWorkerFactory;
        this.f36512e = webRtcWorkerFactory;
        this.f36513f = cameraXControllerFactory;
        this.f36514g = camera2ManagerFactoryFactory;
        this.f36515h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final tq.a aVar2, r.c action) {
        n1.l lVar;
        bn.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.H() != ro.t.f49078d) {
            bn.h c12 = aVar.c();
            c10 = bn.b0.c(null, new Function1(aVar2) { // from class: lo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B0;
                    B0 = m0.B0(null, (r.c) obj);
                    return B0;
                }
            }, 1, null);
            c12.d(c10);
            return Unit.f32056a;
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(tq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.a();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32056a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final jo.q qVar, final ro.k kVar, final un.v vVar, final d0.b bVar) {
        h4.a aVar3;
        bn.r c10;
        c4 c11 = jo.r.c(qVar);
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
            final n1.l lVar = new n1.l(aVar3, n1Var.o(), qVar, b4.I(aVar, aVar3.a()), n1Var.l(), n1Var.j(), n1Var.e(), ro.t.f49080i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: lo.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            bn.h c12 = aVar2.c();
            c10 = bn.b0.c(null, new Function1() { // from class: lo.t
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
    public static final Unit N(k.a aVar, final ro.k kVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(ro.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(ro.k kVar, r.c action) {
        n1.l lVar;
        ro.t tVar;
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
                tVar = ro.t.f49079e;
            } else {
                tVar = ro.t.f49080i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, jo.q qVar, d0.b bVar, n1.l lVar, un.v vVar, r.c action) {
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
            return Unit.f32056a;
        }
        action.e(new n1.g(aVar2, ((n1) action.c()).o(), qVar, bVar, ((n1) action.c()).l(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r R(final po.d dVar) {
        bn.r c10;
        c10 = bn.b0.c(null, new Function1() { // from class: lo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(po.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(po.d dVar, r.c action) {
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
            return Unit.f32056a;
        }
        action.e(n1.d.r(dVar3, null, null, null, null, null, 0, null, null, dVar, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(bn.h hVar) {
        hVar.d(g3.b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, ro.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, ro.k kVar, List absolutePaths, un.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<jo.c0> i22 = dVar.w().i2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(i22, 10));
        for (jo.c0 c0Var : i22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        jo.q t10 = dVar.t();
        d0.b w10 = dVar.w();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new jo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, t10, kVar, cameraProperties, d0.b.b(w10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final ro.k kVar, final Throwable error) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = m0.X(n1.d.this, aVar2, error, aVar, kVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final ro.k kVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        if (dVar2 == null) {
            return Unit.f32056a;
        }
        action.e(new n1.l(dVar.h(), dVar.o(), dVar.t(), b4.I((g3.a) action.b(), dVar.h().a()), dVar2.l(), dVar2.j(), b4.v(action, false), ro.t.f49080i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: lo.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = m0.Y(k.a.this, kVar);
                return Y;
            }
        }, 11264, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(k.a aVar, final ro.k kVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(ro.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(ro.k kVar, r.c action) {
        n1.l lVar;
        ro.t tVar;
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
                tVar = ro.t.f49079e;
            } else {
                tVar = ro.t.f49080i;
            }
            action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, ro.k kVar) {
        b4.N(m0Var.f36508a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = m0.d0((r.c) obj);
                return d02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.u((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, false, false, null, null, null, 32255, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(n1.l lVar, jo.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, ro.k kVar, List absolutePaths, un.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new jo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.v(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.h().a()), jo.r.b(qVar), d0.a.f30080e, null, null, 32, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(bn.h hVar) {
        hVar.d(g3.b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, ro.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i02;
                i02 = m0.i0(error, (r.c) obj);
                return i02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
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
            return Unit.f32056a;
        }
        action.e(n1.l.u(lVar2, null, null, null, f5.b.a.f30200e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1() { // from class: lo.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k02;
                k02 = m0.k0(n1.l.this, (r.c) obj);
                return k02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.l.u(lVar, null, null, null, f5.b.a.f30199d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, ro.k kVar) {
        b4.N(m0Var.f36508a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r m0(final n1.l lVar, final jo.q qVar, Result result) {
        bn.r c10;
        bn.r c11;
        bn.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = bn.b0.c(null, new Function1() { // from class: lo.p
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
            c10 = bn.b0.c(null, new Function1() { // from class: lo.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = bn.b0.c(null, new Function1() { // from class: lo.q
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
    public static final Unit n0(n1.l lVar, jo.q qVar, d0.b bVar, r.c action) {
        n1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f32056a;
        }
        action.e(new n1.d(lVar.h(), ((n1) action.c()).o(), qVar, bVar, lVar2.l(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.D()));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.E() == f5.b.a.f30201i) {
            action.e(n1.l.u(lVar, null, null, null, f5.b.a.f30200e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r q0(final po.d dVar) {
        bn.r c10;
        c10 = bn.b0.c(null, new Function1() { // from class: lo.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(po.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(po.d dVar, r.c action) {
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
            return Unit.f32056a;
        }
        action.e(n1.l.u(lVar2, null, null, null, null, null, 0, null, null, null, null, false, false, null, dVar, null, 24575, null));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r s0(final n1.l lVar, Unit it) {
        bn.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = bn.b0.c(null, new Function1() { // from class: lo.m
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
        if (lVar.E() == f5.b.a.f30201i) {
            action.e(n1.l.u(lVar, null, null, null, f5.b.a.f30200e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f32056a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final tq.a aVar3) {
        bn.w.l(aVar2, this.f36512e.a(aVar.v().d()), Reflection.typeOf(sq.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: lo.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f36493e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f36494i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f36495o;

            {
                this.f36493e = lVar;
                this.f36494i = aVar;
                this.f36495o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r v02;
                v02 = m0.v0(m0.this, null, this.f36493e, this.f36494i, this.f36495o, (b.AbstractC0650b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.r v0(final m0 m0Var, final tq.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0650b it) {
        bn.r c10;
        bn.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final wn.m b10 = wn.j.b(m0Var.f36508a, wn.n.f54062d);
        if (it instanceof b.AbstractC0650b.C0651b) {
            c11 = bn.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: lo.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f36538d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ wn.m f36539e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0650b f36540i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f36541o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f36542p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f36543q;

                {
                    this.f36538d = m0Var;
                    this.f36539e = b10;
                    this.f36540i = it;
                    this.f36541o = lVar;
                    this.f36542p = aVar2;
                    this.f36543q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f36538d, this.f36539e, this.f36540i, this.f36541o, this.f36542p, this.f36543q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0650b.a) {
            c10 = bn.b0.c(null, new Function1(aVar) { // from class: lo.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new qr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final tq.a aVar, m0 m0Var, wn.m mVar, b.AbstractC0650b abstractC0650b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        wn.l b10;
        wn.l b11;
        wn.l b12;
        Size f10;
        wn.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.H() == ro.t.f49078d) {
            return Unit.f32056a;
        }
        if (lVar3 != null) {
            action.e(n1.l.u(lVar3, null, null, null, null, null, 0, null, ro.t.f49078d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.b(m0Var.f36512e.b());
        }
        if (aVar != null) {
            aVar.e(m0Var.f36508a);
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
            b.AbstractC0650b.C0651b c0651b = (b.AbstractC0650b.C0651b) abstractC0650b;
            aVar.d(c0651b.a().c(), c0651b.a().a(), c0651b.a().b(), lVar.G(), i12, i11, aVar2.v().b(), new Function0() { // from class: lo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: lo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y02;
                    y02 = m0.y0(k.a.this, null);
                    return y02;
                }
            });
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(n1.l lVar) {
        lVar.F().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final tq.a aVar2) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = bn.b0.c(null, new Function1(aVar2) { // from class: lo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = m0.z0(null, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(tq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.a();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f32056a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final ro.k videoCaptureHelper, final bn.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = jo.r.d(renderState.t(), renderState.h().a());
        bn.w.l(context, this.f36511d.a(renderState.h().a()), Reflection.typeOf(po.a.class), "", new Function1() { // from class: lo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r R;
                R = m0.R((po.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.h().a(), jo.r.b(renderState.t()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.h().a();
        f5.b.a aVar = f5.b.a.f30199d;
        f5.d c10 = d10.c();
        qo.e a11 = jo.r.a(renderState.t());
        zp.a b10 = this.f36515h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        ao.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.v());
        videoCaptureHelper.b();
        return new hn.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: lo.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(bn.h.this);
                return T;
            }
        }, new Function0() { // from class: lo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f36513f, this.f36514g, new Function2() { // from class: lo.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (un.v) obj2);
                return V;
            }
        }, new Function1() { // from class: lo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: lo.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final ro.k videoCaptureHelper, final bn.h sink) {
        ao.a aVar;
        k.a aVar2;
        ro.k kVar;
        ep.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final jo.q v10 = renderState.v();
        c4.c d10 = jo.r.d(v10, renderState.h().a());
        String b10 = jo.r.b(v10);
        boolean z10 = v10 instanceof q.a;
        bn.w.l(context, this.f36510c.a(renderState.h().a(), b10), Reflection.typeOf(jo.e0.class), "", new Function1() { // from class: lo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r m02;
                m02 = m0.m0(n1.l.this, v10, (Result) obj);
                return m02;
            }
        });
        bn.w.l(context, this.f36511d.a(renderState.h().a()), Reflection.typeOf(po.a.class), "", new Function1() { // from class: lo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.r q02;
                q02 = m0.q0((po.d) obj);
                return q02;
            }
        });
        ao.a e10 = videoCaptureHelper.e(renderProps);
        ao.a aVar3 = ao.a.f6226d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            bn.w.l(context, o.a.b(bn.o.f6917a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(bn.o.class, KTypeProjection.f32160c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: lo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    bn.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.B() != null) {
            Map f10 = o0.f(qr.v.a(e.a.POSITIVE, this.f36508a.getString(17039370)));
            String string = this.f36508a.getString(jp.e.f30850k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new hn.e(f10, string, null, false, new Function1() { // from class: lo.l0
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
        qo.e a11 = jo.r.a(v10);
        zp.a b11 = this.f36515h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        ao.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.D());
        mo.h F = b4.F(renderProps, renderState.h().a());
        videoCaptureHelper.b();
        ao.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, E2, c11, a11, a10, b11, new Function2() { // from class: lo.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, v10, this, renderProps, context, videoCaptureHelper, (List) obj, (un.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: lo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(bn.h.this);
                return f02;
            }
        }, new Function0() { // from class: lo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f36513f, this.f36514g, null, new Function1() { // from class: lo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: lo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: lo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.x()) {
            c10 = b4.b0(g10, this.f36508a, context, renderProps, true, this.f36509b);
        } else {
            if (renderState.w()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && rp.f.f(this.f36508a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f36508a, context, renderProps, true, this.f36509b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.H() == ro.t.f49080i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new hn.d(c10, arrayList);
    }
}
