package mo;

import android.content.Context;
import cp.l1;
import eo.b4;
import eo.c0;
import eo.c4;
import eo.d0;
import eo.f5;
import eo.g3;
import eo.h4;
import eo.m1;
import eo.n1;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import js.i0;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import mo.j;
import pn.v;
import pn.z;
import rn.g;
import wm.b0;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38915a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f38916b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f38917c;

    /* renamed from: d  reason: collision with root package name */
    private final up.b f38918d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38919d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.e f38920e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f38921i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(n1.e eVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f38920e = eVar;
            this.f38921i = aVar;
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
                return Unit.f32464a;
            }
            cVar.e(n1.e.p(eVar2, null, null, null, null, 0, null, null, null, 0L, true, 511, null));
            return Unit.f32464a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f38920e, this.f38921i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wm.r c10;
            Object f10 = rr.b.f();
            int i10 = this.f38919d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long r10 = this.f38920e.r();
                this.f38919d = 1;
                if (i0.a(r10, this) == f10) {
                    return f10;
                }
            }
            wm.h c11 = this.f38921i.c();
            c10 = b0.c(null, new Function1() { // from class: mo.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = j.a.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c11.d(c10);
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public j(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, up.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f38915a = applicationContext;
        this.f38916b = cameraXControllerFactory;
        this.f38917c = camera2ManagerFactoryFactory;
        this.f38918d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: mo.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = j.l((r.c) obj);
                return l10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k.a aVar) {
        b4.L(aVar, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(n1.e eVar, k.a aVar, g3.a aVar2, k kVar, File file, v cameraProperties) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<d0> m10 = eVar.m();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(m10, 10));
        for (d0 d0Var : m10) {
            arrayList.add(d0Var.V0());
        }
        d0.d dVar = d0.d.f21738d;
        boolean contains = arrayList.contains(dVar);
        d0.d dVar2 = d0.d.f21739e;
        boolean contains2 = arrayList.contains(dVar2);
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        List e10 = CollectionsKt.e(new c0(absolutePath, "video/*"));
        if (contains && contains2) {
            dVar = d0.d.f21740i;
        } else if (!contains && contains2) {
            dVar = dVar2;
        }
        b4.Q(eVar, aVar, aVar2, new d0.c(e10, dVar, eVar.q().x1(), d0.a.f21724e), eVar.q(), kVar, cameraProperties, false, null, 0, null, null, 3840, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(j jVar, k.a aVar, g3.a aVar2) {
        b4.N(jVar.f38915a, aVar, aVar2, true);
        return Unit.f32464a;
    }

    public final Object i(final g3.a renderProps, final n1.e renderState, final k.a context, final k videoCaptureHelper) {
        h4.a aVar;
        c4.e eVar;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        context.a("finalize_delay", new a(renderState, context, null));
        h4 g10 = renderState.g();
        if (g10 instanceof h4.a) {
            aVar = (h4.a) g10;
        } else {
            aVar = null;
        }
        if (aVar == null || (eVar = aVar.a()) == null) {
            eVar = c4.e.f21714o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.q().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.q().x1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f21843d;
        lo.e d10 = renderState.q().d();
        return new cn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f38918d.b(), new Function2() { // from class: mo.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit j10;
                j10 = j.j((List) obj, (v) obj2);
                return j10;
            }
        }, new Function0() { // from class: mo.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = j.k(k.a.this);
                return k10;
            }
        }, new Function0() { // from class: mo.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = j.m(k.a.this);
                return m10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f38916b, this.f38917c, null, new Function1() { // from class: mo.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n11;
                n11 = j.n((Throwable) obj);
                return n11;
            }
        }, b4.x(context), vn.a.f51701e, false, true, renderState.s(), new Function2() { // from class: mo.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit o10;
                o10 = j.o(n1.e.this, context, renderProps, videoCaptureHelper, (File) obj, (v) obj2);
                return o10;
            }
        }, new Function0() { // from class: mo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p10;
                p10 = j.p();
                return p10;
            }
        }, new Function0() { // from class: mo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = j.q(j.this, context, renderProps);
                return q10;
            }
        }, 0, null, null, null, 805437440, null)), null, 2, null);
    }
}
