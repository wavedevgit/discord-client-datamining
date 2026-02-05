package po;

import android.content.Context;
import fp.l1;
import ho.b4;
import ho.c0;
import ho.c4;
import ho.d0;
import ho.f5;
import ho.g3;
import ho.h4;
import ho.m1;
import ho.n1;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ms.i0;
import po.j;
import sn.v;
import sn.z;
import un.g;
import zm.b0;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f46112a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f46113b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f46114c;

    /* renamed from: d  reason: collision with root package name */
    private final xp.b f46115d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46116d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ n1.e f46117e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f46118i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(n1.e eVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f46117e = eVar;
            this.f46118i = aVar;
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
                return Unit.f31988a;
            }
            cVar.e(n1.e.q(eVar2, null, null, null, null, 0, null, null, null, 0L, true, 511, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f46117e, this.f46118i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            zm.r c10;
            Object f10 = ur.b.f();
            int i10 = this.f46116d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long s10 = this.f46117e.s();
                this.f46116d = 1;
                if (i0.a(s10, this) == f10) {
                    return f10;
                }
            }
            zm.h c11 = this.f46118i.c();
            c10 = b0.c(null, new Function1() { // from class: po.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = j.a.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c11.d(c10);
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public j(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, xp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f46112a = applicationContext;
        this.f46113b = cameraXControllerFactory;
        this.f46114c = camera2ManagerFactoryFactory;
        this.f46115d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: po.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = j.l((r.c) obj);
                return l10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0362b.f26291a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k.a aVar) {
        b4.L(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(n1.e eVar, k.a aVar, g3.a aVar2, k kVar, File file, v cameraProperties) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(cameraProperties, "cameraProperties");
        List<d0> n10 = eVar.n();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(n10, 10));
        for (d0 d0Var : n10) {
            arrayList.add(d0Var.V0());
        }
        d0.d dVar = d0.d.f26050d;
        boolean contains = arrayList.contains(dVar);
        d0.d dVar2 = d0.d.f26051e;
        boolean contains2 = arrayList.contains(dVar2);
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        List e10 = CollectionsKt.e(new c0(absolutePath, "video/*"));
        if (contains && contains2) {
            dVar = d0.d.f26052i;
        } else if (!contains && contains2) {
            dVar = dVar2;
        }
        b4.Q(eVar, aVar, aVar2, new d0.c(e10, dVar, eVar.r().x1(), d0.a.f26036e), eVar.r(), kVar, cameraProperties, false, null, 0, null, null, 3840, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(j jVar, k.a aVar, g3.a aVar2) {
        b4.N(jVar.f46112a, aVar, aVar2, true);
        return Unit.f31988a;
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
            eVar = c4.e.f26026o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.r().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.r().x1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f26155d;
        oo.e d10 = renderState.r().d();
        return new fn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f46115d.b(), new Function2() { // from class: po.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit j10;
                j10 = j.j((List) obj, (v) obj2);
                return j10;
            }
        }, new Function0() { // from class: po.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = j.k(k.a.this);
                return k10;
            }
        }, new Function0() { // from class: po.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = j.m(k.a.this);
                return m10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f46113b, this.f46114c, null, new Function1() { // from class: po.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit n11;
                n11 = j.n((Throwable) obj);
                return n11;
            }
        }, b4.x(context), yn.a.f54863e, false, true, renderState.t(), new Function2() { // from class: po.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit o10;
                o10 = j.o(n1.e.this, context, renderProps, videoCaptureHelper, (File) obj, (v) obj2);
                return o10;
            }
        }, new Function0() { // from class: po.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p10;
                p10 = j.p();
                return p10;
            }
        }, new Function0() { // from class: po.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = j.q(j.this, context, renderProps);
                return q10;
            }
        }, 0, null, null, null, 805437440, null)), null, 2, null);
    }
}
