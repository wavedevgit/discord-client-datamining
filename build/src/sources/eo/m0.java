package eo;

import an.e;
import android.content.Context;
import android.util.Size;
import ap.c1;
import ap.l1;
import bo.b4;
import bo.c4;
import bo.d0;
import bo.e0;
import bo.f5;
import bo.g3;
import bo.h4;
import bo.m1;
import bo.n1;
import bo.q;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import io.a;
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
import lq.b;
import nn.z;
import pn.g;
import um.k;
import um.o;
import um.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23038a;

    /* renamed from: b  reason: collision with root package name */
    private final c1 f23039b;

    /* renamed from: c  reason: collision with root package name */
    private final e0.a f23040c;

    /* renamed from: d  reason: collision with root package name */
    private final a.b f23041d;

    /* renamed from: e  reason: collision with root package name */
    private final b.a f23042e;

    /* renamed from: f  reason: collision with root package name */
    private final z.a f23043f;

    /* renamed from: g  reason: collision with root package name */
    private final g.a f23044g;

    /* renamed from: h  reason: collision with root package name */
    private final sp.b f23045h;

    public m0(Context applicationContext, c1 permissionRequestWorkflow, e0.a governmentIdAnalyzeWorkerFactory, a.b governmentIdHintWorkerFactory, b.a webRtcWorkerFactory, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, sp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(governmentIdAnalyzeWorkerFactory, "governmentIdAnalyzeWorkerFactory");
        Intrinsics.checkNotNullParameter(governmentIdHintWorkerFactory, "governmentIdHintWorkerFactory");
        Intrinsics.checkNotNullParameter(webRtcWorkerFactory, "webRtcWorkerFactory");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f23038a = applicationContext;
        this.f23039b = permissionRequestWorkflow;
        this.f23040c = governmentIdAnalyzeWorkerFactory;
        this.f23041d = governmentIdHintWorkerFactory;
        this.f23042e = webRtcWorkerFactory;
        this.f23043f = cameraXControllerFactory;
        this.f23044g = camera2ManagerFactoryFactory;
        this.f23045h = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A0(k.a aVar, final mq.a aVar2, r.c action) {
        n1.l lVar;
        um.r c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c11 = action.c();
        if (c11 instanceof n1.l) {
            lVar = (n1.l) c11;
        } else {
            lVar = null;
        }
        if (lVar != null && lVar.D() != ko.t.f33064d) {
            um.h c12 = aVar.c();
            c10 = um.b0.c(null, new Function1(aVar2) { // from class: eo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit B0;
                    B0 = m0.B0(null, (r.c) obj);
                    return B0;
                }
            }, 1, null);
            c12.d(c10);
            return Unit.f33074a;
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B0(mq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (aVar != null) {
            aVar.a();
        }
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f33074a;
    }

    private final void M(g3.a aVar, final n1 n1Var, final k.a aVar2, final bo.q qVar, final ko.k kVar, final nn.v vVar, final d0.b bVar) {
        h4.a aVar3;
        um.r c10;
        c4 c11 = bo.r.c(qVar);
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
            final n1.l lVar = new n1.l(aVar3, n1Var.m(), qVar, b4.I(aVar, aVar3.a()), n1Var.k(), n1Var.j(), n1Var.e(), ko.t.f33066i, aVar.v().d(), null, false, false, n1Var.f(), null, new Function0() { // from class: eo.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit N;
                    N = m0.N(k.a.this, kVar);
                    return N;
                }
            }, 11776, null);
            um.h c12 = aVar2.c();
            c10 = um.b0.c(null, new Function1() { // from class: eo.t
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
    public static final Unit N(k.a aVar, final ko.k kVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = m0.O(ko.k.this, (r.c) obj);
                return O;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(ko.k kVar, r.c action) {
        n1.l lVar;
        ko.t tVar;
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
                tVar = ko.t.f33065e;
            } else {
                tVar = ko.t.f33066i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(n1 n1Var, bo.q qVar, d0.b bVar, n1.l lVar, nn.v vVar, r.c action) {
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
            return Unit.f33074a;
        }
        action.e(new n1.g(aVar2, ((n1) action.c()).m(), qVar, bVar, ((n1) action.c()).k(), ((n1) action.c()).j(), lVar, vVar, null, false, ((n1) action.c()).f(), 768, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r R(final io.d dVar) {
        um.r c10;
        c10 = um.b0.c(null, new Function1() { // from class: eo.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S;
                S = m0.S(io.d.this, (r.c) obj);
                return S;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(io.d dVar, r.c action) {
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
            return Unit.f33074a;
        }
        action.e(n1.d.p(dVar3, null, null, null, null, null, 0, null, null, dVar, SetSpanOperation.SPAN_MAX_PRIORITY, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(um.h hVar) {
        hVar.d(g3.b.C0124b.f6924a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(k.a aVar, ko.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(n1.d dVar, m0 m0Var, g3.a aVar, k.a aVar2, ko.k kVar, List absolutePaths, nn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<bo.c0> i22 = dVar.t().i2();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(i22, 10));
        for (bo.c0 c0Var : i22) {
            arrayList.add(c0Var.a());
        }
        List L0 = CollectionsKt.L0(arrayList, absolutePaths);
        bo.q q10 = dVar.q();
        d0.b t10 = dVar.t();
        List<String> list = L0;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList2.add(new bo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, dVar, aVar2, q10, kVar, cameraProperties, d0.b.b(t10, arrayList2, null, null, null, null, null, 62, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(final k.a aVar, final n1.d dVar, final g3.a aVar2, final ko.k kVar, final Throwable error) {
        um.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.u
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit X;
                X = m0.X(n1.d.this, aVar2, error, aVar, kVar, (r.c) obj);
                return X;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(n1.d dVar, g3.a aVar, Throwable th2, final k.a aVar2, final ko.k kVar, r.c action) {
        n1.d dVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.d) {
            dVar2 = (n1.d) c10;
        } else {
            dVar2 = null;
        }
        if (dVar2 == null) {
            return Unit.f33074a;
        }
        action.e(new n1.l(dVar.g(), dVar.m(), dVar.q(), b4.I((g3.a) action.b(), dVar.g().a()), dVar2.k(), dVar2.j(), b4.v(action, false), ko.t.f33066i, aVar.v().d(), th2, false, false, dVar2.f(), null, new Function0() { // from class: eo.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = m0.Y(k.a.this, kVar);
                return Y;
            }
        }, 11264, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(k.a aVar, final ko.k kVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.a0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = m0.Z(ko.k.this, (r.c) obj);
                return Z;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(ko.k kVar, r.c action) {
        n1.l lVar;
        ko.t tVar;
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
                tVar = ko.t.f33065e;
            } else {
                tVar = ko.t.f33066i;
            }
            action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, tVar, null, null, false, false, null, null, null, 32639, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(m0 m0Var, k.a aVar, g3.a aVar2, ko.k kVar) {
        b4.N(m0Var.f23038a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(k.a aVar, e.b it) {
        um.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d02;
                d02 = m0.d0((r.c) obj);
                return d02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        n1 n1Var = (n1) action.c();
        if (n1Var instanceof n1.l) {
            action.e(n1.l.r((n1.l) n1Var, null, null, null, null, null, 0, null, null, null, null, false, false, null, null, null, 32255, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(n1.l lVar, bo.q qVar, m0 m0Var, g3.a aVar, k.a aVar2, ko.k kVar, List absolutePaths, nn.v cameraProperties) {
        Intrinsics.checkNotNullParameter(absolutePaths, "absolutePaths");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<String> list = absolutePaths;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new bo.c0(str, null, 2, null));
        }
        m0Var.M(aVar, lVar, aVar2, lVar.s(), kVar, cameraProperties, new d0.b(arrayList, b4.W(lVar.g().a()), bo.r.b(qVar), d0.a.f6669e, null, null, 32, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(um.h hVar) {
        hVar.d(g3.b.C0124b.f6924a);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(k.a aVar, ko.k kVar) {
        b4.L(aVar, kVar);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(k.a aVar, final Throwable error) {
        um.r c10;
        Intrinsics.checkNotNullParameter(error, "error");
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i02;
                i02 = m0.i0(error, (r.c) obj);
                return i02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
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
            return Unit.f33074a;
        }
        action.e(n1.l.r(lVar2, null, null, null, f5.b.a.f6789e, null, 0, null, null, null, th2, false, false, null, null, null, 32247, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(k.a aVar, final n1.l lVar) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1() { // from class: eo.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k02;
                k02 = m0.k0(n1.l.this, (r.c) obj);
                return k02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(n1.l.r(lVar, null, null, null, f5.b.a.f6788d, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(m0 m0Var, k.a aVar, g3.a aVar2, ko.k kVar) {
        b4.N(m0Var.f23038a, aVar, aVar2, kVar.c(aVar2));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r m0(final n1.l lVar, final bo.q qVar, Result result) {
        um.r c10;
        um.r c11;
        um.r c12;
        Object j10 = result.j();
        Throwable e10 = Result.e(j10);
        if (e10 == null) {
            final d0.b bVar = (d0.b) j10;
            c12 = um.b0.c(null, new Function1() { // from class: eo.p
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
            c10 = um.b0.c(null, new Function1() { // from class: eo.r
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit p02;
                    p02 = m0.p0(n1.l.this, (r.c) obj);
                    return p02;
                }
            }, 1, null);
            return c10;
        }
        c11 = um.b0.c(null, new Function1() { // from class: eo.q
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
    public static final Unit n0(n1.l lVar, bo.q qVar, d0.b bVar, r.c action) {
        n1.l lVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        if (lVar2 == null) {
            return Unit.f33074a;
        }
        action.e(new n1.d(lVar.g(), ((n1) action.c()).m(), qVar, bVar, lVar2.k(), lVar2.j(), b4.v(action, false), lVar2.f(), lVar2.y()));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new g3.b.c(new InternalErrorInfo.NoDiskSpaceErrorInfo(null, 1, null)));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(n1.l lVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (lVar.z() == f5.b.a.f6790i) {
            action.e(n1.l.r(lVar, null, null, null, f5.b.a.f6789e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r q0(final io.d dVar) {
        um.r c10;
        c10 = um.b0.c(null, new Function1() { // from class: eo.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit r02;
                r02 = m0.r0(io.d.this, (r.c) obj);
                return r02;
            }
        }, 1, null);
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(io.d dVar, r.c action) {
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
            return Unit.f33074a;
        }
        action.e(n1.l.r(lVar2, null, null, null, null, null, 0, null, null, null, null, false, false, null, dVar, null, 24575, null));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r s0(final n1.l lVar, Unit it) {
        um.r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        c10 = um.b0.c(null, new Function1() { // from class: eo.m
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
        if (lVar.z() == f5.b.a.f6790i) {
            action.e(n1.l.r(lVar, null, null, null, f5.b.a.f6789e, null, 0, null, null, null, null, false, false, null, null, null, 32759, null));
        }
        return Unit.f33074a;
    }

    private final void u0(final g3.a aVar, final n1.l lVar, final k.a aVar2, final mq.a aVar3) {
        um.w.l(aVar2, this.f23042e.a(aVar.v().d()), Reflection.typeOf(lq.b.class), "", new Function1(aVar3, lVar, aVar, aVar2) { // from class: eo.h

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ n1.l f23023e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ g3.a f23024i;

            /* renamed from: o  reason: collision with root package name */
            public final /* synthetic */ k.a f23025o;

            {
                this.f23023e = lVar;
                this.f23024i = aVar;
                this.f23025o = aVar2;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                um.r v02;
                v02 = m0.v0(m0.this, null, this.f23023e, this.f23024i, this.f23025o, (b.AbstractC0487b) obj);
                return v02;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final um.r v0(final m0 m0Var, final mq.a aVar, final n1.l lVar, final g3.a aVar2, final k.a aVar3, final b.AbstractC0487b it) {
        um.r c10;
        um.r c11;
        Intrinsics.checkNotNullParameter(it, "it");
        final pn.m b10 = pn.j.b(m0Var.f23038a, pn.n.f46379d);
        if (it instanceof b.AbstractC0487b.C0488b) {
            c11 = um.b0.c(null, new Function1(aVar, m0Var, b10, it, lVar, aVar2, aVar3) { // from class: eo.x

                /* renamed from: d  reason: collision with root package name */
                public final /* synthetic */ m0 f23068d;

                /* renamed from: e  reason: collision with root package name */
                public final /* synthetic */ pn.m f23069e;

                /* renamed from: i  reason: collision with root package name */
                public final /* synthetic */ b.AbstractC0487b f23070i;

                /* renamed from: o  reason: collision with root package name */
                public final /* synthetic */ n1.l f23071o;

                /* renamed from: p  reason: collision with root package name */
                public final /* synthetic */ g3.a f23072p;

                /* renamed from: q  reason: collision with root package name */
                public final /* synthetic */ k.a f23073q;

                {
                    this.f23068d = m0Var;
                    this.f23069e = b10;
                    this.f23070i = it;
                    this.f23071o = lVar;
                    this.f23072p = aVar2;
                    this.f23073q = aVar3;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit w02;
                    w02 = m0.w0(null, this.f23068d, this.f23069e, this.f23070i, this.f23071o, this.f23072p, this.f23073q, (r.c) obj);
                    return w02;
                }
            }, 1, null);
            return c11;
        } else if (it instanceof b.AbstractC0487b.a) {
            c10 = um.b0.c(null, new Function1(aVar) { // from class: eo.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit A0;
                    A0 = m0.A0(k.a.this, null, (r.c) obj);
                    return A0;
                }
            }, 1, null);
            return c10;
        } else {
            throw new jr.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(final mq.a aVar, m0 m0Var, pn.m mVar, b.AbstractC0487b abstractC0487b, final n1.l lVar, g3.a aVar2, final k.a aVar3, r.c action) {
        n1.l lVar2;
        int i10;
        int i11;
        int i12;
        pn.l b10;
        pn.l b11;
        pn.l b12;
        Size f10;
        pn.l b13;
        Size f11;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof n1.l) {
            lVar2 = (n1.l) c10;
        } else {
            lVar2 = null;
        }
        n1.l lVar3 = lVar2;
        if (lVar3 != null && lVar3.D() == ko.t.f33064d) {
            return Unit.f33074a;
        }
        if (lVar3 != null) {
            action.e(n1.l.r(lVar3, null, null, null, null, null, 0, null, ko.t.f33064d, null, null, false, false, null, null, null, 32639, null));
        }
        if (aVar != null) {
            aVar.e(m0Var.f23042e.b());
        }
        if (aVar != null) {
            aVar.d(m0Var.f23038a);
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
            b.AbstractC0487b.C0488b c0488b = (b.AbstractC0487b.C0488b) abstractC0487b;
            aVar.c(c0488b.a().c(), c0488b.a().a(), c0488b.a().b(), lVar.C(), i12, i11, aVar2.v().b(), new Function0() { // from class: eo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x02;
                    x02 = m0.x0(n1.l.this);
                    return x02;
                }
            }, new Function0(aVar) { // from class: eo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y02;
                    y02 = m0.y0(k.a.this, null);
                    return y02;
                }
            });
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(n1.l lVar) {
        lVar.A().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y0(k.a aVar, final mq.a aVar2) {
        um.r c10;
        um.h c11 = aVar.c();
        c10 = um.b0.c(null, new Function1(aVar2) { // from class: eo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z02;
                z02 = m0.z0(null, (r.c) obj);
                return z02;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z0(mq.a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        aVar.a();
        action.e(new n1.j(null, null, null, null, 0, ((n1) action.c()).f(), null, null, 223, null));
        return Unit.f33074a;
    }

    public final Object Q(final g3.a renderProps, final n1.d renderState, final k.a context, final ko.k videoCaptureHelper, final um.h sink) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        c4.c d10 = bo.r.d(renderState.q(), renderState.g().a());
        um.w.l(context, this.f23041d.a(renderState.g().a()), Reflection.typeOf(io.a.class), "", new Function1() { // from class: eo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                um.r R;
                R = m0.R((io.d) obj);
                return R;
            }
        });
        String E = b4.E(renderProps.t(), renderState.g().a(), bo.r.b(renderState.q()), renderState.f());
        String n10 = renderProps.t().n();
        c4.e a10 = renderState.g().a();
        f5.b.a aVar = f5.b.a.f6788d;
        f5.d c10 = d10.c();
        jo.e a11 = bo.r.a(renderState.q());
        sp.a b10 = this.f23045h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        int m10 = renderProps.m() - 1;
        Function1 x10 = b4.x(context);
        tn.a e10 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.s());
        videoCaptureHelper.b();
        return new an.d(l1.c(m1.g(renderProps, E, n10, aVar, c10, a11, a10, b10, null, new Function0() { // from class: eo.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit T;
                T = m0.T(um.h.this);
                return T;
            }
        }, new Function0() { // from class: eo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit U;
                U = m0.U(k.a.this, videoCaptureHelper);
                return U;
            }
        }, true, a12, renderState, j10, this.f23043f, this.f23044g, new Function2() { // from class: eo.f0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit V;
                V = m0.V(n1.d.this, this, renderProps, context, videoCaptureHelper, (List) obj, (nn.v) obj2);
                return V;
            }
        }, new Function1() { // from class: eo.g0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit W;
                W = m0.W(k.a.this, renderState, renderProps, videoCaptureHelper, (Throwable) obj);
                return W;
            }
        }, x10, e10, false, false, false, null, null, new Function0() { // from class: eo.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit a02;
                a02 = m0.a0(m0.this, context, renderProps, videoCaptureHelper);
                return a02;
            }
        }, m10, K, null, null, 601882880, null)), null, 2, null);
    }

    public final Object b0(final g3.a renderProps, final n1.l renderState, final k.a context, final ko.k videoCaptureHelper, final um.h sink) {
        tn.a aVar;
        k.a aVar2;
        ko.k kVar;
        xo.c c10;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        Intrinsics.checkNotNullParameter(sink, "sink");
        final bo.q s10 = renderState.s();
        c4.c d10 = bo.r.d(s10, renderState.g().a());
        String b10 = bo.r.b(s10);
        boolean z10 = s10 instanceof q.a;
        um.w.l(context, this.f23040c.a(renderState.g().a(), b10), Reflection.typeOf(bo.e0.class), "", new Function1() { // from class: eo.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                um.r m02;
                m02 = m0.m0(n1.l.this, s10, (Result) obj);
                return m02;
            }
        });
        um.w.l(context, this.f23041d.a(renderState.g().a()), Reflection.typeOf(io.a.class), "", new Function1() { // from class: eo.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                um.r q02;
                q02 = m0.q0((io.d) obj);
                return q02;
            }
        });
        tn.a e10 = videoCaptureHelper.e(renderProps);
        tn.a aVar3 = tn.a.f49944d;
        boolean z11 = e10 == aVar3 && !videoCaptureHelper.d();
        if (!d10.b().b() || z11) {
            aVar = aVar3;
        } else {
            aVar = aVar3;
            um.w.l(context, o.a.b(um.o.f50500a, kotlin.ranges.d.e(d10.b().a(), 0L), null, 2, null), Reflection.typeOf(um.o.class, KTypeProjection.f33178c.d(Reflection.typeOf(Unit.class))), d10.e(), new Function1() { // from class: eo.k0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    um.r s02;
                    s02 = m0.s0(n1.l.this, (Unit) obj);
                    return s02;
                }
            });
        }
        ArrayList arrayList = new ArrayList();
        if (renderState.w() != null) {
            Map f10 = o0.f(jr.v.a(e.a.POSITIVE, this.f23038a.getString(17039370)));
            String string = this.f23038a.getString(cp.e.f20648k);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            arrayList.add(new an.e(f10, string, null, false, new Function1() { // from class: eo.l0
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
        jo.e a11 = bo.r.a(s10);
        sp.a b11 = this.f23045h.b();
        List a12 = d10.a().a().a();
        int j10 = renderState.j();
        Function1 x10 = b4.x(context);
        tn.a e11 = videoCaptureHelper.e(renderProps);
        String K = b4.K(renderProps.t(), renderState.y());
        fo.h F = b4.F(renderProps, renderState.g().a());
        videoCaptureHelper.b();
        tn.a aVar4 = aVar;
        f5.b g10 = m1.g(renderProps, E, J, z12, c11, a11, a10, b11, new Function2() { // from class: eo.b
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit e02;
                e02 = m0.e0(n1.l.this, s10, this, renderProps, context, videoCaptureHelper, (List) obj, (nn.v) obj2);
                return e02;
            }
        }, new Function0() { // from class: eo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit f02;
                f02 = m0.f0(um.h.this);
                return f02;
            }
        }, new Function0() { // from class: eo.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g02;
                g02 = m0.g0(k.a.this, videoCaptureHelper);
                return g02;
            }
        }, false, a12, renderState, j10, this.f23043f, this.f23044g, null, new Function1() { // from class: eo.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h02;
                h02 = m0.h0(k.a.this, (Throwable) obj);
                return h02;
            }
        }, x10, e11, false, false, false, null, new Function0() { // from class: eo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = m0.j0(k.a.this, renderState);
                return j02;
            }
        }, new Function0() { // from class: eo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l02;
                l02 = m0.l0(m0.this, context, renderProps, videoCaptureHelper);
                return l02;
            }
        }, 0, K, F, null, 165806080, null);
        if (renderState.u()) {
            c10 = b4.b0(g10, this.f23038a, context, renderProps, true, this.f23039b);
        } else {
            if (renderState.t()) {
                kVar = videoCaptureHelper;
                if (kVar.c(renderProps) && kp.f.f(this.f23038a) && renderProps.v().b()) {
                    c10 = b4.X(g10, this.f23038a, context, renderProps, true, this.f23039b);
                } else {
                    aVar2 = context;
                }
            } else {
                aVar2 = context;
                kVar = videoCaptureHelper;
            }
            if (kVar.e(renderProps) == aVar4 && renderState.D() == ko.t.f33066i) {
                kVar.b();
                u0(renderProps, renderState, aVar2, null);
                c10 = l1.c(g10);
            } else {
                c10 = l1.c(g10);
            }
        }
        return new an.d(c10, arrayList);
    }
}
