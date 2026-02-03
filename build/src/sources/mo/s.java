package mo;

import android.content.Context;
import cp.l1;
import eo.b4;
import eo.c4;
import eo.f5;
import eo.g3;
import eo.h4;
import eo.m1;
import eo.n1;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import pn.v;
import pn.z;
import rn.g;
import wm.b0;
import wm.k;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final Context f38928a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f38929b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f38930c;

    /* renamed from: d  reason: collision with root package name */
    private final up.b f38931d;

    public s(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, up.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f38928a = applicationContext;
        this.f38929b = cameraXControllerFactory;
        this.f38930c = camera2ManagerFactoryFactory;
        this.f38931d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(k.a aVar) {
        wm.r c10;
        wm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: mo.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = s.k((r.c) obj);
                return k10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0294b.f21979a);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(k.a aVar, k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(s sVar, k.a aVar, g3.a aVar2) {
        b4.N(sVar.f38928a, aVar, aVar2, true);
        return Unit.f32464a;
    }

    public final Object h(final g3.a renderProps, n1.f renderState, final k.a context, final k videoCaptureHelper) {
        h4.a aVar;
        c4.e eVar;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        videoCaptureHelper.b();
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
        c4.c c10 = renderState.o().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.o().x1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f21843d;
        lo.e d10 = renderState.o().d();
        return new cn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f38931d.b(), new Function2() { // from class: mo.l
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit i10;
                i10 = s.i((List) obj, (v) obj2);
                return i10;
            }
        }, new Function0() { // from class: mo.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s.j(k.a.this);
                return j10;
            }
        }, new Function0() { // from class: mo.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = s.l(k.a.this, videoCaptureHelper);
                return l10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f38929b, this.f38930c, null, new Function1() { // from class: mo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = s.m((Throwable) obj);
                return m10;
            }
        }, b4.x(context), vn.a.f51700d, false, true, false, null, new Function0() { // from class: mo.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n11;
                n11 = s.n();
                return n11;
            }
        }, new Function0() { // from class: mo.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = s.o(s.this, context, renderProps);
                return o10;
            }
        }, 0, null, null, null, 830603264, null)), null, 2, null);
    }
}
