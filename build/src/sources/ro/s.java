package ro;

import android.content.Context;
import bn.b0;
import bn.k;
import bn.r;
import hp.l1;
import java.util.List;
import jo.b4;
import jo.c4;
import jo.f5;
import jo.g3;
import jo.h4;
import jo.m1;
import jo.n1;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import un.v;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final Context f49074a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f49075b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f49076c;

    /* renamed from: d  reason: collision with root package name */
    private final zp.b f49077d;

    public s(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, zp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f49074a = applicationContext;
        this.f49075b = cameraXControllerFactory;
        this.f49076c = camera2ManagerFactoryFactory;
        this.f49077d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(List list, v vVar) {
        Intrinsics.checkNotNullParameter(list, "<unused var>");
        Intrinsics.checkNotNullParameter(vVar, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(k.a aVar) {
        bn.r c10;
        bn.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: ro.r
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = s.k((r.c) obj);
                return k10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(g3.b.C0429b.f30335a);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(k.a aVar, k kVar) {
        b4.L(aVar, kVar);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(Throwable it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n() {
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(s sVar, k.a aVar, g3.a aVar2) {
        b4.N(sVar.f49074a, aVar, aVar2, true);
        return Unit.f32056a;
    }

    public final Object h(final g3.a renderProps, n1.f renderState, final k.a context, final k videoCaptureHelper) {
        h4.a aVar;
        c4.e eVar;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(videoCaptureHelper, "videoCaptureHelper");
        videoCaptureHelper.b();
        h4 h10 = renderState.h();
        if (h10 instanceof h4.a) {
            aVar = (h4.a) h10;
        } else {
            aVar = null;
        }
        if (aVar == null || (eVar = aVar.a()) == null) {
            eVar = c4.e.f30070o;
        }
        c4.e eVar2 = eVar;
        c4.c c10 = renderState.q().c(eVar2);
        String E = b4.E(renderProps.t(), eVar2, renderState.q().w1(), renderState.f());
        String n10 = renderProps.t().n();
        f5.b.a aVar2 = f5.b.a.f30199d;
        qo.e d10 = renderState.q().d();
        return new hn.d(l1.c(m1.g(renderProps, E, n10, aVar2, c10.c(), d10, eVar2, this.f49077d.b(), new Function2() { // from class: ro.l
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit i10;
                i10 = s.i((List) obj, (v) obj2);
                return i10;
            }
        }, new Function0() { // from class: ro.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s.j(k.a.this);
                return j10;
            }
        }, new Function0() { // from class: ro.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = s.l(k.a.this, videoCaptureHelper);
                return l10;
            }
        }, false, CollectionsKt.l(), renderState, renderState.j(), this.f49075b, this.f49076c, null, new Function1() { // from class: ro.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = s.m((Throwable) obj);
                return m10;
            }
        }, b4.x(context), ao.a.f6226d, false, true, false, null, new Function0() { // from class: ro.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n11;
                n11 = s.n();
                return n11;
            }
        }, new Function0() { // from class: ro.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = s.o(s.this, context, renderProps);
                return o10;
            }
        }, 0, null, null, null, 830603264, null)), null, 2, null);
    }
}
