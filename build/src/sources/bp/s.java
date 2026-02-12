package bp;

import android.content.Context;
import en.b0;
import en.k;
import en.r;
import fo.v;
import fo.z;
import ho.g;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import rp.l1;
import to.b4;
import to.c4;
import to.f5;
import to.g3;
import to.h4;
import to.m1;
import to.n1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final Context f7328a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f7329b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f7330c;

    /* renamed from: d  reason: collision with root package name */
    private final jq.b f7331d;

    public s(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, jq.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f7328a = applicationContext;
        this.f7329b = cameraXControllerFactory;
        this.f7330c = camera2ManagerFactoryFactory;
        this.f7331d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(k.a aVar) {
        en.r c10;
        en.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: bp.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = s.k((r.c) obj);
                return k10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0673b.f49279a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(k.a aVar, k kVar) {
        b4.L(aVar, kVar);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(s sVar, k.a aVar, g3.a aVar2) {
        b4.N(sVar.f7328a, aVar, aVar2, true);
        return Unit.f31988a;
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
            eVar = c4.e.f49014o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.p().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.p().w1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f49143d;
        ap.e d10 = renderState.p().d();
        return new kn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f7331d.b(), new Function2() { // from class: bp.l
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit i10;
                i10 = s.i((List) obj, (v) obj2);
                return i10;
            }
        }, new Function0() { // from class: bp.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s.j(k.a.this);
                return j10;
            }
        }, new Function0() { // from class: bp.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = s.l(k.a.this, videoCaptureHelper);
                return l10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f7329b, this.f7330c, null, new Function1() { // from class: bp.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = s.m((Throwable) obj);
                return m10;
            }
        }, b4.x(context), lo.a.f35949d, false, true, false, null, new Function0() { // from class: bp.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n11;
                n11 = s.n();
                return n11;
            }
        }, new Function0() { // from class: bp.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = s.o(s.this, context, renderProps);
                return o10;
            }
        }, 0, null, null, null, 830603264, null)), null, 2, null);
    }
}
