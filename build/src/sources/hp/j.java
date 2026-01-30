package hp;

import android.content.Context;
import ep.a1;
import ep.d2;
import ep.j2;
import ep.m6;
import ep.x1;
import ep.x5;
import gs.i0;
import hp.j;
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
import mn.z;
import on.g;
import tm.b0;
import tm.k;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27649a;

    /* renamed from: b  reason: collision with root package name */
    private final z.a f27650b;

    /* renamed from: c  reason: collision with root package name */
    private final g.a f27651c;

    /* renamed from: d  reason: collision with root package name */
    private final rp.b f27652d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27653d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x1.e f27654e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ k.a f27655i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(x1.e eVar, k.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f27654e = eVar;
            this.f27655i = aVar;
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
                return Unit.f33298a;
            }
            cVar.e(x1.e.s(eVar2, null, 0L, true, false, null, 0L, null, null, 251, null));
            return Unit.f33298a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f27654e, this.f27655i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            r c10;
            Object f10 = or.b.f();
            int i10 = this.f27653d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long t10 = this.f27654e.t();
                this.f27653d = 1;
                if (i0.a(t10, this) == f10) {
                    return f10;
                }
            }
            tm.h c11 = this.f27655i.c();
            c10 = b0.c(null, new Function1() { // from class: hp.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit k10;
                    k10 = j.a.k((r.c) obj2);
                    return k10;
                }
            }, 1, null);
            c11.d(c10);
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public j(Context applicationContext, z.a cameraXControllerFactory, g.a camera2ManagerFactoryFactory, rp.b navigationStateManager) {
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(cameraXControllerFactory, "cameraXControllerFactory");
        Intrinsics.checkNotNullParameter(camera2ManagerFactoryFactory, "camera2ManagerFactoryFactory");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        this.f27649a = applicationContext;
        this.f27650b = cameraXControllerFactory;
        this.f27651c = camera2ManagerFactoryFactory;
        this.f27652d = navigationStateManager;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(k.a aVar, File it) {
        r c10;
        Intrinsics.checkNotNullParameter(it, "it");
        final ArrayList arrayList = new ArrayList();
        String absolutePath = it.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
        arrayList.add(new a1.d(absolutePath, a1.a.f23008i));
        tm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: hp.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = j.j(arrayList, (r.c) obj);
                return j10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        action.e(x1.e.s(eVar2, CollectionsKt.L0(((x1) action.c()).p(), list), 0L, false, true, null, 0L, null, null, 246, null));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(k.a aVar, final x1.e eVar) {
        r c10;
        tm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: hp.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = j.l(x1.e.this, (r.c) obj);
                return l10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33298a;
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
            return Unit.f33298a;
        }
        if (!eVar2.v()) {
            return Unit.f33298a;
        }
        action.e(m6.w(action, ((x1) action.c()).p(), null, eVar.b(), eVar.m(), m6.i(action, false)));
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k.a aVar) {
        m6.r(aVar, null);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(k.a aVar) {
        r c10;
        tm.h c11 = aVar.c();
        c10 = b0.c(null, new Function1() { // from class: hp.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit o10;
                o10 = j.o((r.c) obj);
                return o10;
            }
        }, 1, null);
        c11.d(c10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(x5.c.b.f23780a);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(j jVar, k.a aVar, x5.b bVar) {
        m6.t(jVar.f27649a, aVar, bVar, true);
        return Unit.f33298a;
    }

    public final Object q(final x5.b renderProps, final x1.e renderState, final k.a context) {
        x5.d.c.EnumC0314c enumC0314c;
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        context.a("finalize_delay", new a(renderState, context, null));
        String c10 = renderProps.x().c();
        boolean u10 = renderState.u();
        if (renderState.v()) {
            enumC0314c = x5.d.c.EnumC0314c.f23913w;
        } else {
            enumC0314c = x5.d.c.EnumC0314c.f23911u;
        }
        x5.d.c.EnumC0314c enumC0314c2 = enumC0314c;
        x5.d.c.b.C0312c c0312c = new x5.d.c.b.C0312c(new Function1() { // from class: hp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = j.i(k.a.this, (File) obj);
                return i10;
            }
        }, new Function0() { // from class: hp.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = j.k(k.a.this, renderState);
                return k10;
            }
        }, u10, enumC0314c2, !Intrinsics.areEqual(renderProps.u(), d2.b.f23100a));
        boolean t10 = renderProps.t();
        rp.a b10 = this.f27652d.b();
        Function1 k10 = m6.k(context);
        sn.a aVar = sn.a.f49107e;
        return j2.f(renderProps, context, null, c10, null, null, false, c0312c, m6.v(renderProps), t10, b10, new Function0() { // from class: hp.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = j.m(k.a.this);
                return m10;
            }
        }, new Function0() { // from class: hp.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = j.n(k.a.this);
                return n10;
            }
        }, k10, new Function0() { // from class: hp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit p10;
                p10 = j.p(j.this, context, renderProps);
                return p10;
            }
        }, aVar, null, renderProps.z().b(), this.f27650b, this.f27651c, 0.0f, null, renderState.o(), false, false, false, 50331648, null);
    }
}
