package po;

import android.content.Context;
import fp.l1;
import ho.b4;
import ho.c4;
import ho.f5;
import ho.g3;
import ho.h4;
import ho.m1;
import ho.n1;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import sn.v;
import sn.z;
import un.g;
import zm.b0;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final Context f46125a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f46126b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f46127c;

    /* renamed from: d  reason: collision with root package name */
    private final xp.b f46128d;

    public s(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, xp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f46125a = applicationContext;
        this.f46126b = cameraXControllerFactory;
        this.f46127c = camera2ManagerFactoryFactory;
        this.f46128d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(k.a aVar) {
        zm.r c10;
        zm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: po.r
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
        action.d(g3.b.C0362b.f26291a);
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
        b4.N(sVar.f46125a, aVar, aVar2, true);
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
            eVar = c4.e.f26026o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.p().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.p().x1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f26155d;
        oo.e d10 = renderState.p().d();
        return new fn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f46128d.b(), new Function2() { // from class: po.l
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit i10;
                i10 = s.i((List) obj, (v) obj2);
                return i10;
            }
        }, new Function0() { // from class: po.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s.j(k.a.this);
                return j10;
            }
        }, new Function0() { // from class: po.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = s.l(k.a.this, videoCaptureHelper);
                return l10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f46126b, this.f46127c, null, new Function1() { // from class: po.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = s.m((Throwable) obj);
                return m10;
            }
        }, b4.x(context), yn.a.f54862d, false, true, false, null, new Function0() { // from class: po.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n11;
                n11 = s.n();
                return n11;
            }
        }, new Function0() { // from class: po.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = s.o(s.this, context, renderProps);
                return o10;
            }
        }, 0, null, null, null, 830603264, null)), null, 2, null);
    }
}
