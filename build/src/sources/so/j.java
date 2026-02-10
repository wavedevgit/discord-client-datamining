package so;

import android.content.Context;
import cn.b0;
import cn.k;
import cn.r;
import ip.l1;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import ko.b4;
import ko.c0;
import ko.c4;
import ko.d0;
import ko.f5;
import ko.g3;
import ko.h4;
import ko.m1;
import ko.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ps.i0;
import so.j;
import vn.v;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f49886a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f49887b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f49888c;

    /* renamed from: d  reason: collision with root package name */
    private final aq.b f49889d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49890d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.e f49891e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f49892i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(n1.e eVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f49891e = eVar;
            this.f49892i = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            n1.e eVar;
            Object c10 = cVar.c();
            if (c10 instanceof n1.e) {
                eVar = (n1.e) c10;
            } else {
                eVar = null;
            }
            n1.e eVar2 = eVar;
            if (eVar2 == null) {
                return Unit.f31765a;
            }
            cVar.e(n1.e.r(eVar2, null, null, null, null, 0, null, null, null, 0L, true, 511, null));
            return Unit.f31765a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f49891e, this.f49892i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            cn.r c10;
            Object f10 = xr.b.f();
            int i10 = this.f49890d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long u10 = this.f49891e.u();
                this.f49890d = 1;
                if (i0.a(u10, this) == f10) {
                    return f10;
                }
            }
            cn.h c11 = this.f49892i.c();
            c10 = b0.c(null, new Function1() { // from class: so.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = j.a.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c11.d(c10);
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public j(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, aq.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f49886a = applicationContext;
        this.f49887b = cameraXControllerFactory;
        this.f49888c = camera2ManagerFactoryFactory;
        this.f49889d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar) {
        cn.r c10;
        cn.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: so.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = j.l((r.c) obj);
                return l10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0475b.f31286a);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k.a aVar) {
        b4.L(aVar, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(n1.e eVar, k.a aVar, g3.a aVar2, k kVar, File file, v cameraProperties) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<d0> o10 = eVar.o();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(o10, 10));
        for (d0 d0Var : o10) {
            arrayList.add(d0Var.R0());
        }
        d0.d dVar = d0.d.f31045d;
        boolean contains = arrayList.contains(dVar);
        d0.d dVar2 = d0.d.f31046e;
        boolean contains2 = arrayList.contains(dVar2);
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        List e10 = CollectionsKt.e(new c0(absolutePath, "video/*"));
        if (contains && contains2) {
            dVar = d0.d.f31047i;
        } else if (!contains && contains2) {
            dVar = dVar2;
        }
        b4.Q(eVar, aVar, aVar2, new d0.c(e10, dVar, eVar.t().r1(), d0.a.f31031e), eVar.t(), kVar, cameraProperties, false, null, 0, null, null, 3840, null);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p() {
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(j jVar, k.a aVar, g3.a aVar2) {
        b4.N(jVar.f49886a, aVar, aVar2, true);
        return Unit.f31765a;
    }

    public final Object i(final g3.a renderProps, final n1.e renderState, final k.a context, final k videoCaptureHelper) {
        h4.a aVar;
        c4.e eVar;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        context.a("finalize_delay", new a(renderState, context, null));
        h4 h10 = renderState.h();
        if (h10 instanceof h4.a) {
            aVar = (h4.a) h10;
        } else {
            aVar = null;
        }
        if (aVar == null || (eVar = aVar.a()) == null) {
            eVar = c4.e.f31021o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.t().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.t().r1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f31150d;
        ro.e d10 = renderState.t().d();
        return new in.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f49889d.b(), new Function2() { // from class: so.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit j10;
                j10 = j.j((List) obj, (v) obj2);
                return j10;
            }
        }, new Function0() { // from class: so.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = j.k(k.a.this);
                return k10;
            }
        }, new Function0() { // from class: so.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = j.m(k.a.this);
                return m10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f49887b, this.f49888c, null, new Function1() { // from class: so.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n11;
                n11 = j.n((Throwable) obj);
                return n11;
            }
        }, b4.x(context), bo.a.f7162e, false, true, renderState.v(), new Function2() { // from class: so.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit o10;
                o10 = j.o(n1.e.this, context, renderProps, videoCaptureHelper, (File) obj, (v) obj2);
                return o10;
            }
        }, new Function0() { // from class: so.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p10;
                p10 = j.p();
                return p10;
            }
        }, new Function0() { // from class: so.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = j.q(j.this, context, renderProps);
                return q10;
            }
        }, 0, null, null, null, 805437440, null)), null, 2, null);
    }
}
