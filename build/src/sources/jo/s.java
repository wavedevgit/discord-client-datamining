package jo;

import android.content.Context;
import ao.b4;
import ao.c4;
import ao.f5;
import ao.g3;
import ao.h4;
import ao.m1;
import ao.n1;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import mn.v;
import mn.z;
import on.g;
import tm.b0;
import tm.k;
import tm.r;
import zo.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final Context f32266a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f32267b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f32268c;

    /* renamed from: d  reason: collision with root package name */
    private final rp.b f32269d;

    public s(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, rp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f32266a = applicationContext;
        this.f32267b = cameraXControllerFactory;
        this.f32268c = camera2ManagerFactoryFactory;
        this.f32269d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(k.a aVar) {
        tm.r c10;
        tm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: jo.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = s.k((r.c) obj);
                return k10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0090b.f6101a);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(k.a aVar, k kVar) {
        b4.L(aVar, kVar);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(s sVar, k.a aVar, g3.a aVar2) {
        b4.N(sVar.f32266a, aVar, aVar2, true);
        return Unit.f33282a;
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
            eVar = c4.e.f5836o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.o().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.o().x1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f5965d;
        io.e d10 = renderState.o().d();
        return new zm.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f32269d.b(), new Function2() { // from class: jo.l
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit i10;
                i10 = s.i((List) obj, (v) obj2);
                return i10;
            }
        }, new Function0() { // from class: jo.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s.j(k.a.this);
                return j10;
            }
        }, new Function0() { // from class: jo.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = s.l(k.a.this, videoCaptureHelper);
                return l10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f32267b, this.f32268c, null, new Function1() { // from class: jo.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = s.m((Throwable) obj);
                return m10;
            }
        }, b4.x(context), sn.a.f49090d, false, true, false, null, new Function0() { // from class: jo.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n11;
                n11 = s.n();
                return n11;
            }
        }, new Function0() { // from class: jo.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = s.o(s.this, context, renderProps);
                return o10;
            }
        }, 0, null, null, null, 830603264, null)), null, 2, null);
    }
}
