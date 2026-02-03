package o0;

import a0.b0;
import a0.b1;
import a0.d0;
import a0.e0;
import a0.g2;
import a0.y;
import a0.z;
import android.content.Context;
import androidx.arch.core.util.Function;
import androidx.concurrent.futures.c;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
import d0.n;
import e0.f;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.StringCompanionObject;
import o0.g;
import x.i;
import x.o;
import x.p;
import x.v;
import x.w;
import x.x0;
import x.x1;
import x.y1;
import x.z1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: i  reason: collision with root package name */
    public static final a f42372i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    private static final g f42373j = new g();

    /* renamed from: a  reason: collision with root package name */
    private final Object f42374a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private w.b f42375b;

    /* renamed from: c  reason: collision with root package name */
    private ListenableFuture f42376c;

    /* renamed from: d  reason: collision with root package name */
    private ListenableFuture f42377d;

    /* renamed from: e  reason: collision with root package name */
    private final o0.c f42378e;

    /* renamed from: f  reason: collision with root package name */
    private v f42379f;

    /* renamed from: g  reason: collision with root package name */
    private Context f42380g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f42381h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: o0.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0536a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Context f42382d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0536a(Context context) {
                super(1);
                this.f42382d = context;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final g invoke(v cameraX) {
                g gVar = g.f42373j;
                Intrinsics.checkNotNullExpressionValue(cameraX, "cameraX");
                gVar.w(cameraX);
                g gVar2 = g.f42373j;
                Context a10 = b0.e.a(this.f42382d);
                Intrinsics.checkNotNullExpressionValue(a10, "getApplicationContext(context)");
                gVar2.x(a10);
                return g.f42373j;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final g c(Function1 tmp0, Object obj) {
            Intrinsics.checkNotNullParameter(tmp0, "$tmp0");
            return (g) tmp0.invoke(obj);
        }

        public final ListenableFuture b(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            b2.e.g(context);
            ListenableFuture s10 = g.f42373j.s(context);
            final C0536a c0536a = new C0536a(context);
            ListenableFuture x10 = n.x(s10, new Function() { // from class: o0.f
                @Override // androidx.arch.core.util.Function
                public final Object apply(Object obj) {
                    g c10;
                    c10 = g.a.c(Function1.this, obj);
                    return c10;
                }
            }, c0.a.a());
            Intrinsics.checkNotNullExpressionValue(x10, "context: Context): Liste…tExecutor()\n            )");
            return x10;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f42383a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ v f42384b;

        b(c.a aVar, v vVar) {
            this.f42383a = aVar;
            this.f42384b = vVar;
        }

        @Override // d0.c
        /* renamed from: a */
        public void onSuccess(Void r22) {
            this.f42383a.c(this.f42384b);
        }

        @Override // d0.c
        public void onFailure(Throwable t10) {
            Intrinsics.checkNotNullParameter(t10, "t");
            this.f42383a.f(t10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ v f42385d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(v vVar) {
            super(1);
            this.f42385d = vVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ListenableFuture invoke(Void r12) {
            return this.f42385d.i();
        }
    }

    private g() {
        ListenableFuture p10 = n.p(null);
        Intrinsics.checkNotNullExpressionValue(p10, "immediateFuture<Void>(null)");
        this.f42377d = p10;
        this.f42378e = new o0.c();
        this.f42381h = new HashMap();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final a0.w p(p pVar, o oVar) {
        Iterator it = pVar.c().iterator();
        a0.w wVar = null;
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "cameraSelector.cameraFilterSet");
            x.n nVar = (x.n) next;
            if (!Intrinsics.areEqual(nVar.a(), x.n.f53143a)) {
                y a10 = b1.a(nVar.a());
                Context context = this.f42380g;
                Intrinsics.checkNotNull(context);
                a0.w a11 = a10.a(oVar, context);
                if (a11 == null) {
                    continue;
                } else if (wVar == null) {
                    wVar = a11;
                } else {
                    throw new IllegalArgumentException("Cannot apply multiple extended camera configs at the same time.");
                }
            }
        }
        if (wVar == null) {
            return z.a();
        }
        return wVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int r() {
        v vVar = this.f42379f;
        if (vVar == null) {
            return 0;
        }
        Intrinsics.checkNotNull(vVar);
        return vVar.e().d().c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ListenableFuture s(Context context) {
        synchronized (this.f42374a) {
            ListenableFuture listenableFuture = this.f42376c;
            if (listenableFuture != null) {
                Intrinsics.checkNotNull(listenableFuture, "null cannot be cast to non-null type com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.CameraX>");
                return listenableFuture;
            }
            final v vVar = new v(context, this.f42375b);
            ListenableFuture a10 = androidx.concurrent.futures.c.a(new c.InterfaceC0030c() { // from class: o0.d
                @Override // androidx.concurrent.futures.c.InterfaceC0030c
                public final Object a(c.a aVar) {
                    Object t10;
                    t10 = g.t(g.this, vVar, aVar);
                    return t10;
                }
            });
            this.f42376c = a10;
            Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type com.google.common.util.concurrent.ListenableFuture<androidx.camera.core.CameraX>");
            return a10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object t(g this$0, v cameraX, c.a completer) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(cameraX, "$cameraX");
        Intrinsics.checkNotNullParameter(completer, "completer");
        synchronized (this$0.f42374a) {
            d0.d b10 = d0.d.b(this$0.f42377d);
            final c cVar = new c(cameraX);
            d0.d f10 = b10.f(new d0.a() { // from class: o0.e
                @Override // d0.a
                public final ListenableFuture apply(Object obj) {
                    ListenableFuture u10;
                    u10 = g.u(Function1.this, obj);
                    return u10;
                }
            }, c0.a.a());
            Intrinsics.checkNotNullExpressionValue(f10, "cameraX = CameraX(contex…                        )");
            n.j(f10, new b(completer, cameraX), c0.a.a());
            Unit unit = Unit.f33074a;
        }
        return "ProcessCameraProvider-initializeCameraX";
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ListenableFuture u(Function1 tmp0, Object obj) {
        Intrinsics.checkNotNullParameter(tmp0, "$tmp0");
        return (ListenableFuture) tmp0.invoke(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void v(int i10) {
        v vVar = this.f42379f;
        if (vVar == null) {
            return;
        }
        Intrinsics.checkNotNull(vVar);
        vVar.e().d().d(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w(v vVar) {
        this.f42379f = vVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void x(Context context) {
        this.f42380g = context;
    }

    public final i n(LifecycleOwner lifecycleOwner, p cameraSelector, y1 useCaseGroup) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "lifecycleOwner");
        Intrinsics.checkNotNullParameter(cameraSelector, "cameraSelector");
        Intrinsics.checkNotNullParameter(useCaseGroup, "useCaseGroup");
        c4.a.c("CX:bindToLifecycle-UseCaseGroup");
        try {
            if (r() != 2) {
                v(1);
                x0 DEFAULT = x0.f53279f;
                Intrinsics.checkNotNullExpressionValue(DEFAULT, "DEFAULT");
                Intrinsics.checkNotNullExpressionValue(DEFAULT, "DEFAULT");
                z1 c10 = useCaseGroup.c();
                List a10 = useCaseGroup.a();
                Intrinsics.checkNotNullExpressionValue(a10, "useCaseGroup.effects");
                List b10 = useCaseGroup.b();
                Intrinsics.checkNotNullExpressionValue(b10, "useCaseGroup.useCases");
                x1[] x1VarArr = (x1[]) b10.toArray(new x1[0]);
                i o10 = o(lifecycleOwner, cameraSelector, null, DEFAULT, DEFAULT, c10, a10, (x1[]) Arrays.copyOf(x1VarArr, x1VarArr.length));
                c4.a.f();
                return o10;
            }
            throw new UnsupportedOperationException("bindToLifecycle for single camera is not supported in concurrent camera mode, call unbindAll() first.");
        } catch (Throwable th2) {
            c4.a.f();
            throw th2;
        }
    }

    public final i o(LifecycleOwner lifecycleOwner, p primaryCameraSelector, p pVar, x0 primaryLayoutSettings, x0 secondaryLayoutSettings, z1 z1Var, List effects, x1... useCases) {
        e0 e0Var;
        g2 g2Var;
        Intrinsics.checkNotNullParameter(lifecycleOwner, "lifecycleOwner");
        Intrinsics.checkNotNullParameter(primaryCameraSelector, "primaryCameraSelector");
        Intrinsics.checkNotNullParameter(primaryLayoutSettings, "primaryLayoutSettings");
        Intrinsics.checkNotNullParameter(secondaryLayoutSettings, "secondaryLayoutSettings");
        Intrinsics.checkNotNullParameter(effects, "effects");
        Intrinsics.checkNotNullParameter(useCases, "useCases");
        c4.a.c("CX:bindToLifecycle-internal");
        try {
            b0.p.a();
            v vVar = this.f42379f;
            Intrinsics.checkNotNull(vVar);
            e0 e10 = primaryCameraSelector.e(vVar.f().a());
            Intrinsics.checkNotNullExpressionValue(e10, "primaryCameraSelector.se…cameraRepository.cameras)");
            e10.r(true);
            o q10 = q(primaryCameraSelector);
            Intrinsics.checkNotNull(q10, "null cannot be cast to non-null type androidx.camera.core.impl.RestrictedCameraInfo");
            g2 g2Var2 = (g2) q10;
            if (pVar != null) {
                v vVar2 = this.f42379f;
                Intrinsics.checkNotNull(vVar2);
                e0 e11 = pVar.e(vVar2.f().a());
                e11.r(false);
                o q11 = q(pVar);
                Intrinsics.checkNotNull(q11, "null cannot be cast to non-null type androidx.camera.core.impl.RestrictedCameraInfo");
                e0Var = e11;
                g2Var = (g2) q11;
            } else {
                e0Var = null;
                g2Var = null;
            }
            o0.b c10 = this.f42378e.c(lifecycleOwner, e0.f.B(g2Var2, g2Var));
            Collection e12 = this.f42378e.e();
            for (x1 x1Var : kotlin.collections.i.R(useCases)) {
                for (Object lifecycleCameras : e12) {
                    Intrinsics.checkNotNullExpressionValue(lifecycleCameras, "lifecycleCameras");
                    o0.b bVar = (o0.b) lifecycleCameras;
                    if (bVar.v(x1Var) && !Intrinsics.areEqual(bVar, c10)) {
                        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
                        String format = String.format("Use case %s already bound to a different lifecycle.", Arrays.copyOf(new Object[]{x1Var}, 1));
                        Intrinsics.checkNotNullExpressionValue(format, "format(format, *args)");
                        throw new IllegalStateException(format);
                    }
                }
            }
            if (c10 == null) {
                o0.c cVar = this.f42378e;
                v vVar3 = this.f42379f;
                Intrinsics.checkNotNull(vVar3);
                y.a d10 = vVar3.e().d();
                v vVar4 = this.f42379f;
                Intrinsics.checkNotNull(vVar4);
                b0 d11 = vVar4.d();
                v vVar5 = this.f42379f;
                Intrinsics.checkNotNull(vVar5);
                c10 = cVar.b(lifecycleOwner, new e0.f(e10, e0Var, g2Var2, g2Var, primaryLayoutSettings, secondaryLayoutSettings, d10, d11, vVar5.h()));
            }
            o0.b bVar2 = c10;
            if (useCases.length != 0) {
                o0.c cVar2 = this.f42378e;
                Intrinsics.checkNotNull(bVar2);
                List o10 = CollectionsKt.o(Arrays.copyOf(useCases, useCases.length));
                v vVar6 = this.f42379f;
                Intrinsics.checkNotNull(vVar6);
                cVar2.a(bVar2, z1Var, effects, o10, vVar6.e().d());
            } else {
                Intrinsics.checkNotNull(bVar2);
            }
            c4.a.f();
            return bVar2;
        } catch (Throwable th2) {
            c4.a.f();
            throw th2;
        }
    }

    public o q(p cameraSelector) {
        Object obj;
        Intrinsics.checkNotNullParameter(cameraSelector, "cameraSelector");
        c4.a.c("CX:getCameraInfo");
        try {
            v vVar = this.f42379f;
            Intrinsics.checkNotNull(vVar);
            d0 m10 = cameraSelector.e(vVar.f().a()).m();
            Intrinsics.checkNotNullExpressionValue(m10, "cameraSelector.select(mC…meras).cameraInfoInternal");
            a0.w p10 = p(cameraSelector, m10);
            f.b a10 = f.b.a(m10.b(), p10.N());
            Intrinsics.checkNotNullExpressionValue(a10, "create(\n                …ilityId\n                )");
            synchronized (this.f42374a) {
                obj = this.f42381h.get(a10);
                if (obj == null) {
                    obj = new g2(m10, p10);
                    this.f42381h.put(a10, obj);
                }
                Unit unit = Unit.f33074a;
            }
            return (g2) obj;
        } finally {
            c4.a.f();
        }
    }

    public void y() {
        c4.a.c("CX:unbindAll");
        try {
            b0.p.a();
            v(0);
            this.f42378e.k();
            Unit unit = Unit.f33074a;
        } finally {
            c4.a.f();
        }
    }
}
