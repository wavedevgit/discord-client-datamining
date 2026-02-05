package np;

import android.content.Context;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kp.a1;
import kp.d2;
import kp.j2;
import kp.m6;
import kp.x1;
import kp.x5;
import ms.i0;
import np.j;
import sn.z;
import un.g;
import zm.b0;
import zm.k;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f41415a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f41416b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f41417c;

    /* renamed from: d  reason: collision with root package name */
    private final xp.b f41418d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41419d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x1.e f41420e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f41421i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(x1.e eVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f41420e = eVar;
            this.f41421i = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(r.c cVar) {
            x1.e eVar;
            Object c10 = cVar.c();
            if (c10 instanceof x1.e) {
                eVar = (x1.e) c10;
            } else {
                eVar = null;
            }
            x1.e eVar2 = eVar;
            if (eVar2 == null) {
                return Unit.f31988a;
            }
            cVar.e(x1.e.t(eVar2, null, 0L, true, false, null, 0L, null, null, 251, null));
            return Unit.f31988a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f41420e, this.f41421i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            r c10;
            Object f10 = ur.b.f();
            int i10 = this.f41419d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long u10 = this.f41420e.u();
                this.f41419d = 1;
                if (i0.a(u10, this) == f10) {
                    return f10;
                }
            }
            zm.h c11 = this.f41421i.c();
            c10 = b0.c(null, new Function1() { // from class: np.i
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
        this.f41415a = applicationContext;
        this.f41416b = cameraXControllerFactory;
        this.f41417c = camera2ManagerFactoryFactory;
        this.f41418d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(k.a aVar, File it) {
        r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        final ArrayList arrayList = new ArrayList();
        String absolutePath = it.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        arrayList.add(new a1.d(absolutePath, a1.a.f35127i));
        zm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: np.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = j.j(arrayList, (r.c) obj);
                return j10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(List list, r.c action) {
        x1.e eVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.e) {
            eVar = (x1.e) c10;
        } else {
            eVar = null;
        }
        x1.e eVar2 = eVar;
        if (eVar2 == null) {
            return Unit.f31988a;
        }
        action.e(x1.e.t(eVar2, CollectionsKt.L0(((x1) action.c()).q(), list), 0L, false, true, null, 0L, null, null, 246, null));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar, final x1.e eVar) {
        r c10;
        zm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: np.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = j.l(x1.e.this, (r.c) obj);
                return l10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(x1.e eVar, r.c action) {
        x1.e eVar2;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof x1.e) {
            eVar2 = (x1.e) c10;
        } else {
            eVar2 = null;
        }
        if (eVar2 == null) {
            return Unit.f31988a;
        }
        if (!eVar2.w()) {
            return Unit.f31988a;
        }
        action.e(m6.w(action, ((x1) action.c()).q(), null, eVar.b(), eVar.n(), m6.i(action, false)));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k.a aVar) {
        m6.r(aVar, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(k.a aVar) {
        r c10;
        zm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: np.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = j.o((r.c) obj);
                return o10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(x5.c.b.f35899a);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(j jVar, k.a aVar, x5.b bVar) {
        m6.t(jVar.f41415a, aVar, bVar, true);
        return Unit.f31988a;
    }

    public final Object q(final x5.b renderProps, final x1.e renderState, final k.a context) {
        x5.d.c.EnumC0468c enumC0468c;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        context.a("finalize_delay", new a(renderState, context, null));
        String c10 = renderProps.x().c();
        boolean v10 = renderState.v();
        if (renderState.w()) {
            enumC0468c = x5.d.c.EnumC0468c.f36032w;
        } else {
            enumC0468c = x5.d.c.EnumC0468c.f36030u;
        }
        x5.d.c.EnumC0468c enumC0468c2 = enumC0468c;
        x5.d.c.b.C0466c c0466c = new x5.d.c.b.C0466c(new Function1() { // from class: np.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = j.i(k.a.this, (File) obj);
                return i10;
            }
        }, new Function0() { // from class: np.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = j.k(k.a.this, renderState);
                return k10;
            }
        }, v10, enumC0468c2, !Intrinsics.areEqual(renderProps.u(), d2.b.f35219a));
        boolean t10 = renderProps.t();
        xp.a b10 = this.f41418d.b();
        Function1 k10 = m6.k(context);
        yn.a aVar = yn.a.f54863e;
        return j2.f(renderProps, context, null, c10, null, null, false, c0466c, m6.v(renderProps), t10, b10, new Function0() { // from class: np.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = j.m(k.a.this);
                return m10;
            }
        }, new Function0() { // from class: np.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = j.n(k.a.this);
                return n10;
            }
        }, k10, new Function0() { // from class: np.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p10;
                p10 = j.p(j.this, context, renderProps);
                return p10;
            }
        }, aVar, null, renderProps.z().b(), this.f41416b, this.f41417c, 0.0f, null, renderState.p(), false, false, false, 50331648, null);
    }
}
