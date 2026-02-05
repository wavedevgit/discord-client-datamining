package jo;

import android.content.Context;
import android.util.Size;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import fn.e;
import fp.c1;
import fp.l1;
import ho.b4;
import ho.c4;
import ho.d0;
import ho.e0;
import ho.f5;
import ho.g3;
import ho.h4;
import ho.m1;
import ho.n1;
import ho.q;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
import no.a;
import qq.b;
import sn.z;
import un.g;
import zm.k;
import zm.o;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f31124a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f31125b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f31126c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f31127d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f31128e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f31129f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f31130g;

    /* renamed from: h  reason: collision with root package name */
    private final xp.b f31131h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, xp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f31124a = applicationContext;
        this.f31125b = permissionRequestWorkflow;
        this.f31126c = governmentIdAnalyzeWorkerFactory;
        this.f31127d = governmentIdHintWorkerFactory;
        this.f31128e = webRtcWorkerFactory;
        this.f31129f = cameraXControllerFactory;
        this.f31130g = camera2ManagerFactoryFactory;
        this.f31131h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final rq.a aVar2, r.c action) {
        n1.l lVar;
        zm.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.D() != po.t.f46129d) {
            zm.h c12 = aVar.c();
            c10 = zm.b0.c(null, new Function1(aVar2) { // from class: jo.b0
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
    public static final Unit B0(rq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.b();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31988a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final ho.q qVar, final po.k kVar, final sn.v vVar, final d0.b bVar) {
        h4.a aVar3;
        zm.r c10;
        c4 c11 = ho.r.c(qVar);
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
            final n1.l lVar = new n1.l(aVar3, n1Var.n(), qVar, b4.I(aVar, aVar3.a()), n1Var.l(), n1Var.j(), n1Var.e(), po.t.f46131i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: jo.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            zm.h c12 = aVar2.c();
            c10 = zm.b0.c(null, new Function1() { // from class: jo.t
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
    public static final Unit N(k.a aVar, final po.k kVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(po.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(po.k kVar, r.c action) {
        n1.l lVar;
        po.t tVar;
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
                tVar = po.t.f46130e;
            } else {
                tVar = po.t.f46131i;
            }
            action.e(n1.l.s(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, ho.q qVar, d0.b bVar, n1.l lVar, sn.v vVar, r.c action) {
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
        action.e(new n1.g(aVar2, ((n1) action.c()).n(), qVar, bVar, ((n1) action.c()).l(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r R(final no.d dVar) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: jo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(no.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(no.d dVar, r.c action) {
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
    public static final Unit T(zm.h hVar) {
        hVar.d(g3.b.C0362b.f26291a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, po.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, po.k kVar, List absolutePaths, sn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<ho.c0> i22 = dVar.u().i2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(i22, 10));
        for (ho.c0 c0Var : i22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        ho.q r10 = dVar.r();
        d0.b u10 = dVar.u();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new ho.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, r10, kVar, cameraProperties, d0.b.b(u10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final po.k kVar, final Throwable error) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.u
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
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final po.k kVar, r.c action) {
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
        action.e(new n1.l(dVar.g(), dVar.n(), dVar.r(), b4.I((g3.a) action.b(), dVar.g().a()), dVar2.l(), dVar2.j(), b4.v(action, false), po.t.f46131i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: jo.v
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
    public static final Unit Y(k.a aVar, final po.k kVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(po.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(po.k kVar, r.c action) {
        n1.l lVar;
        po.t tVar;
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
                tVar = po.t.f46130e;
            } else {
                tVar = po.t.f46131i;
            }
            action.e(n1.l.s(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, po.k kVar) {
        b4.N(m0Var.f31124a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.i
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
    public static final Unit e0(n1.l lVar, ho.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, po.k kVar, List absolutePaths, sn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new ho.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.t(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.g().a()), ho.r.b(qVar), d0.a.f26036e, null, null, 32, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(zm.h hVar) {
        hVar.d(g3.b.C0362b.f26291a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, po.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.o
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
        action.e(n1.l.s(lVar2, null, null, null, f5.b.a.f26156e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1() { // from class: jo.j
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
        action.e(n1.l.s(lVar, null, null, null, f5.b.a.f26155d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, po.k kVar) {
        b4.N(m0Var.f31124a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r m0(final n1.l lVar, final ho.q qVar, Result result) {
        zm.r c10;
        zm.r c11;
        zm.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = zm.b0.c(null, new Function1() { // from class: jo.p
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
            c10 = zm.b0.c(null, new Function1() { // from class: jo.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = zm.b0.c(null, new Function1() { // from class: jo.q
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
    public static final Unit n0(n1.l lVar, ho.q qVar, d0.b bVar, r.c action) {
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
        action.e(new n1.d(lVar.g(), ((n1) action.c()).n(), qVar, bVar, lVar2.l(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.z()));
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
        if (lVar.A() == f5.b.a.f26157i) {
            action.e(n1.l.s(lVar, null, null, null, f5.b.a.f26156e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r q0(final no.d dVar) {
        zm.r c10;
        c10 = zm.b0.c(null, new Function1() { // from class: jo.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(no.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(no.d dVar, r.c action) {
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
    public static final zm.r s0(final n1.l lVar, Unit it) {
        zm.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = zm.b0.c(null, new Function1() { // from class: jo.m
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
        if (lVar.A() == f5.b.a.f26157i) {
            action.e(n1.l.s(lVar, null, null, null, f5.b.a.f26156e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f31988a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final rq.a aVar3) {
        zm.w.l(aVar2, this.f31128e.a(aVar.v().d()), Reflection.typeOf(qq.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: jo.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f31109e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f31110i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f31111o;

            {
                this.f31109e = lVar;
                this.f31110i = aVar;
                this.f31111o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r v02;
                v02 = m0.v0(m0.this, null, this.f31109e, this.f31110i, this.f31111o, (b.AbstractC0601b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zm.r v0(final m0 m0Var, final rq.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0601b it) {
        zm.r c10;
        zm.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final un.m b10 = un.j.b(m0Var.f31124a, un.n.f51614d);
        if (it instanceof b.AbstractC0601b.C0602b) {
            c11 = zm.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: jo.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f31154d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ un.m f31155e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0601b f31156i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f31157o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f31158p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f31159q;

                {
                    this.f31154d = m0Var;
                    this.f31155e = b10;
                    this.f31156i = it;
                    this.f31157o = lVar;
                    this.f31158p = aVar2;
                    this.f31159q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f31154d, this.f31155e, this.f31156i, this.f31157o, this.f31158p, this.f31159q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0601b.a) {
            c10 = zm.b0.c(null, new Function1(aVar) { // from class: jo.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new or.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final rq.a aVar, m0 m0Var, un.m mVar, b.AbstractC0601b abstractC0601b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        un.l b10;
        un.l b11;
        un.l b12;
        Size f10;
        un.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.D() == po.t.f46129d) {
            return Unit.f31988a;
        }
        if (lVar3 != null) {
            action.e(n1.l.s(lVar3, null, null, null, null, null, 0, null, po.t.f46129d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.a(m0Var.f31128e.b());
        }
        if (aVar != null) {
            aVar.e(m0Var.f31124a);
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
            b.AbstractC0601b.C0602b c0602b = (b.AbstractC0601b.C0602b) abstractC0601b;
            aVar.d(c0602b.a().c(), c0602b.a().a(), c0602b.a().b(), lVar.C(), i12, i11, aVar2.v().b(), new Function0() { // from class: jo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: jo.d0
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
        lVar.B().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final rq.a aVar2) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = zm.b0.c(null, new Function1(aVar2) { // from class: jo.e0
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
    public static final Unit z0(rq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.b();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f31988a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final po.k videoCaptureHelper, final zm.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = ho.r.d(renderState.r(), renderState.g().a());
        zm.w.l(context, this.f31127d.a(renderState.g().a()), Reflection.typeOf(no.a.class), "", new Function1() { // from class: jo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r R;
                R = m0.R((no.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.g().a(), ho.r.b(renderState.r()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.g().a();
        f5.b.a aVar = f5.b.a.f26155d;
        f5.d c10 = d10.c();
        oo.e a11 = ho.r.a(renderState.r());
        xp.a b10 = this.f31131h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        yn.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.t());
        videoCaptureHelper.b();
        return new fn.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: jo.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(zm.h.this);
                return T;
            }
        }, new Function0() { // from class: jo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f31129f, this.f31130g, new Function2() { // from class: jo.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (sn.v) obj2);
                return V;
            }
        }, new Function1() { // from class: jo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: jo.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final po.k videoCaptureHelper, final zm.h sink) {
        yn.a aVar;
        k.a aVar2;
        po.k kVar;
        cp.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final ho.q t10 = renderState.t();
        c4.c d10 = ho.r.d(t10, renderState.g().a());
        String b10 = ho.r.b(t10);
        boolean z10 = t10 instanceof q.a;
        zm.w.l(context, this.f31126c.a(renderState.g().a(), b10), Reflection.typeOf(ho.e0.class), "", new Function1() { // from class: jo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r m02;
                m02 = m0.m0(n1.l.this, t10, (Result) obj);
                return m02;
            }
        });
        zm.w.l(context, this.f31127d.a(renderState.g().a()), Reflection.typeOf(no.a.class), "", new Function1() { // from class: jo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                zm.r q02;
                q02 = m0.q0((no.d) obj);
                return q02;
            }
        });
        yn.a e10 = videoCaptureHelper.e(renderProps);
        yn.a aVar3 = yn.a.f54862d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            zm.w.l(context, o.a.b(zm.o.f56088a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(zm.o.class, KTypeProjection.f32092c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: jo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    zm.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.x() != null) {
            Map f10 = o0.f(or.v.a(e.a.POSITIVE, this.f31124a.getString(17039370)));
            String string = this.f31124a.getString(hp.e.f26806k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new fn.e(f10, string, null, false, new Function1() { // from class: jo.l0
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
        f5.b.a A = renderState.A();
        f5.d c11 = d10.c();
        oo.e a11 = ho.r.a(t10);
        xp.a b11 = this.f31131h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        yn.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.z());
        ko.h F = b4.F(renderProps, renderState.g().a());
        videoCaptureHelper.b();
        yn.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, A, c11, a11, a10, b11, new Function2() { // from class: jo.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, t10, this, renderProps, context, videoCaptureHelper, (List) obj, (sn.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: jo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(zm.h.this);
                return f02;
            }
        }, new Function0() { // from class: jo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f31129f, this.f31130g, null, new Function1() { // from class: jo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: jo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: jo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.v()) {
            c10 = b4.b0(g10, this.f31124a, context, renderProps, true, this.f31125b);
        } else {
            if (renderState.u()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && pp.f.f(this.f31124a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f31124a, context, renderProps, true, this.f31125b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.D() == po.t.f46131i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new fn.d(c10, arrayList);
    }
}
