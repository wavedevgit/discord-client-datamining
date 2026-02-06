package mp;

import android.content.Context;
import android.os.Build;
import android.view.View;
import android.view.ViewPropertyAnimator;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.view.SelfieOverlayView;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
import mp.a1;
import mp.w;
import mp.x5;
import un.t;
import un.v;
import un.x;
import un.z;
import wn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements dn.k {

    /* renamed from: b  reason: collision with root package name */
    private final np.c f37721b;

    /* renamed from: c  reason: collision with root package name */
    private final un.t f37722c;

    /* renamed from: d  reason: collision with root package name */
    private final un.w0 f37723d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37724e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f37725f;

    /* renamed from: g  reason: collision with root package name */
    private un.i f37726g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f37727h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f37728i;

    /* renamed from: j  reason: collision with root package name */
    private List f37729j;

    /* renamed from: k  reason: collision with root package name */
    private Job f37730k;

    /* renamed from: l  reason: collision with root package name */
    private Job f37731l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f37732m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f37733n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37734o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37735p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f37736q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f37737r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f37738s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f37739t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f37740u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f37741v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f37742w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f37743x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f37744y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37745d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: mp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0513a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f37747d;

            C0513a(w wVar) {
                this.f37747d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f37747d;
                TextView realTimeHint = wVar.f37721b.f41109t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f32008a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37745d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = rs.g.k(w.this.f37744y, 300L);
                C0513a c0513a = new C0513a(w.this);
                this.f37745d = 1;
                if (k10.collect(c0513a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37748a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f37749b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f37750c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f37287d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f37288e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f37289i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f37748a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f51832d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f51833e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f51834i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f37749b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f38109d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f38110e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f38111i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f38112o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f38113p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f37750c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37752e;

        c(un.i iVar) {
            this.f37752e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, un.i iVar) {
            Function0 function0 = wVar.f37733n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f37721b.getRoot();
            final w wVar = w.this;
            final un.i iVar = this.f37752e;
            root.post(new Runnable() { // from class: mp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements un.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f37754b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f37755a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f51832d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f51833e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f51834i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f37755a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f37754b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, un.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f32008a;
        }

        @Override // un.y
        public void a() {
            t.a aVar;
            un.t tVar = w.this.f37722c;
            PreviewView previewviewSelfieCamera = w.this.f37721b.f41107r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f37755a[this.f37754b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f51805i;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    aVar = t.a.f51804e;
                }
            } else {
                aVar = t.a.f51803d;
            }
            t.a aVar2 = aVar;
            un.w0 w0Var = w.this.f37723d;
            final x5.d.a aVar3 = this.f37754b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: mp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (un.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37756d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37757e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f37758i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f37759d;

            a(w wVar) {
                this.f37759d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(un.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f51850a)) {
                    Function1 function12 = this.f37759d.f37732m;
                    if (function12 != null) {
                        function12.invoke(new un.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f37759d.f37732m) != null) {
                    function1.invoke(new un.u0());
                }
                return Unit.f32008a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(un.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f37757e = iVar;
            this.f37758i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f37757e, this.f37758i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37756d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = un.j.a(this.f37757e.c());
                a aVar = new a(this.f37758i);
                this.f37756d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37760d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37761e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37762i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f37763o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f37761e = iVar;
            this.f37762i = abstractC0516a;
            this.f37763o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f37761e, this.f37762i, this.f37763o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = wr.b.f();
            int i11 = this.f37760d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = this.f37761e;
                this.f37760d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0516a abstractC0516a = this.f37762i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0516a.c cVar = (x5.d.a.AbstractC0516a.c) abstractC0516a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f37763o;
            x5.d.a.AbstractC0516a abstractC0516a2 = this.f37762i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof un.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0516a.c) abstractC0516a2).c().invoke();
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37764d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37765e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37766i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37767d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f37768e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f37768e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f37767d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((un.x) this.f37768e, x.e.f51853a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(un.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37769d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ un.i f37770e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0516a f37771i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
                super(2, continuation);
                this.f37770e = iVar;
                this.f37771i = abstractC0516a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f37770e, this.f37771i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = wr.b.f();
                int i11 = this.f37769d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    un.i iVar = this.f37770e;
                    this.f37769d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0516a.g) this.f37771i).b().invoke(this.f37770e.b());
                return Unit.f32008a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37765e = iVar;
            this.f37766i = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f37765e, this.f37766i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (rs.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (os.g.g(r7, r1, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x004f, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r6.f37764d
                r2 = 0
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L1f
                if (r1 == r4) goto L1b
                if (r1 != r3) goto L13
                kotlin.c.b(r7)
                goto L50
            L13:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1b:
                kotlin.c.b(r7)
                goto L3a
            L1f:
                kotlin.c.b(r7)
                un.i r7 = r6.f37765e
                rs.j0 r7 = r7.c()
                mp.w$g$a r1 = new mp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = rs.g.H(r7, r1)
                r6.f37764d = r4
                java.lang.Object r7 = rs.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                os.c1 r7 = os.m0.c()
                mp.w$g$b r1 = new mp.w$g$b
                un.i r4 = r6.f37765e
                mp.x5$d$a$a r5 = r6.f37766i
                r1.<init>(r4, r5, r2)
                r6.f37764d = r3
                java.lang.Object r7 = os.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f32008a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37772d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37773e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ un.i f37774i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f37775o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0516a abstractC0516a, un.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f37773e = abstractC0516a;
            this.f37774i = iVar;
            this.f37775o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f37773e, this.f37774i, this.f37775o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37772d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0516a.i) this.f37773e).b();
                this.f37772d = 1;
                if (os.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f37774i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f37775o.f37732m;
                if (function1 != null) {
                    function1.invoke(new un.v0());
                }
                return Unit.f32008a;
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37776d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37777e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f37778i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37779o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37780d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0516a f37781e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ un.i f37782i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f37783o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0516a abstractC0516a, un.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f37781e = abstractC0516a;
                this.f37782i = iVar;
                this.f37783o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f37781e, this.f37782i, this.f37783o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (os.i0.a(r4, r6) == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:18:0x0051, code lost:
                if (r7 == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:19:0x0053, code lost:
                return r0;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r7) {
                /*
                    r6 = this;
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r6.f37780d
                    r2 = 2
                    r3 = 1
                    if (r1 == 0) goto L24
                    if (r1 == r3) goto L20
                    if (r1 != r2) goto L18
                    kotlin.c.b(r7)
                    kotlin.Result r7 = (kotlin.Result) r7
                    java.lang.Object r7 = r7.j()
                    goto L54
                L18:
                    java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r7.<init>(r0)
                    throw r7
                L20:
                    kotlin.c.b(r7)
                    goto L38
                L24:
                    kotlin.c.b(r7)
                    mp.x5$d$a$a r7 = r6.f37781e
                    mp.x5$d$a$a$b r7 = (mp.x5.d.a.AbstractC0516a.b) r7
                    long r4 = r7.c()
                    r6.f37780d = r3
                    java.lang.Object r7 = os.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    un.i r7 = r6.f37782i
                    rs.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof un.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f32008a
                    return r7
                L49:
                    un.i r7 = r6.f37782i
                    r6.f37780d = r2
                    java.lang.Object r7 = r7.i(r6)
                    if (r7 != r0) goto L54
                L53:
                    return r0
                L54:
                    boolean r0 = kotlin.Result.h(r7)
                    if (r0 == 0) goto L5f
                    java.io.File r7 = (java.io.File) r7
                    r7.delete()
                L5f:
                    mp.w r7 = r6.f37783o
                    kotlin.jvm.functions.Function1 r7 = mp.w.z(r7)
                    if (r7 == 0) goto L6f
                    un.v0 r0 = new un.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f32008a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: mp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(un.i iVar, w wVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37777e = iVar;
            this.f37778i = wVar;
            this.f37779o = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f37777e, this.f37778i, this.f37779o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = wr.b.f();
            int i10 = this.f37776d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = this.f37777e;
                this.f37776d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f37778i;
            x5.d.a.AbstractC0516a abstractC0516a = this.f37779o;
            un.i iVar2 = this.f37777e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f37731l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = os.i.d(wVar.f37725f, os.m0.b(), null, new a(abstractC0516a, iVar2, wVar, null), 2, null);
                wVar.f37731l = d10;
            }
            x5.d.a.AbstractC0516a abstractC0516a2 = this.f37779o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0516a.b) abstractC0516a2).d().invoke(e10);
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37784d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f37786i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ un.i f37787o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37788p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37786i = aVar;
            this.f37787o = iVar;
            this.f37788p = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f37786i, this.f37787o, this.f37788p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (os.i0.a(1000, r5) == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x004c, code lost:
            if (r6 == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004e, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r5.f37784d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L24
                if (r1 == r3) goto L20
                if (r1 != r2) goto L18
                kotlin.c.b(r6)
                kotlin.Result r6 = (kotlin.Result) r6
                java.lang.Object r6 = r6.j()
                goto L4f
            L18:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L20:
                kotlin.c.b(r6)
                goto L44
            L24:
                kotlin.c.b(r6)
                mp.w r6 = mp.w.this
                mp.w.I(r6, r3)
                mp.x5$d$a r6 = r5.f37786i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                mp.w r6 = mp.w.this
                mp.w.G(r6, r3)
                r5.f37784d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = os.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                un.i r6 = r5.f37787o
                r5.f37784d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                mp.x5$d$a$a r0 = r5.f37788p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                mp.x5$d$a$a$d r0 = (mp.x5.d.a.AbstractC0516a.C0518d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                mp.x5$d$a$a r0 = r5.f37788p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                mp.x5$d$a$a$d r0 = (mp.x5.d.a.AbstractC0516a.C0518d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                mp.x5$d$a r6 = r5.f37786i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                mp.w r6 = mp.w.this
                mp.w.G(r6, r0)
            L8b:
                mp.w r6 = mp.w.this
                mp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f32008a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    public w(np.c binding, un.t cameraPreview, un.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f37721b = binding;
        this.f37722c = cameraPreview;
        this.f37723d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f37724e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f37725f = androidx.lifecycle.p.a(rp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<wn.l> a10 = wn.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (wn.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f37729j = CollectionsKt.e0(arrayList);
        this.f37744y = rs.l0.a(null);
        ConstraintLayout root = this.f37721b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        os.i.d(this.f37725f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: mp.k
            @Override // java.lang.Runnable
            public final void run() {
                w.K(textView);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void K(TextView textView) {
        textView.setAlpha(0.8f);
        textView.setVisibility(8);
    }

    private final void L(final View view, final Function0 function0, final Function0 function02) {
        view.setVisibility(0);
        view.setAlpha(0.0f);
        ViewPropertyAnimator animate = view.animate();
        animate.setStartDelay(0L);
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: mp.d
            @Override // java.lang.Runnable
            public final void run() {
                w.M(Function0.this, view, function02);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void M(Function0 function0, final View view, final Function0 function02) {
        function0.invoke();
        ViewPropertyAnimator animate = view.animate();
        animate.setStartDelay(1000L);
        animate.withStartAction(new Runnable() { // from class: mp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: mp.n
            @Override // java.lang.Runnable
            public final void run() {
                w.O(view);
            }
        }).alpha(0.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(Function0 function0) {
        function0.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void O(View view) {
        view.setVisibility(4);
    }

    private final un.i Q(x5.d.a aVar) {
        un.i a10;
        wn.n nVar;
        un.i iVar = this.f37726g;
        if (iVar != null && this.f37727h == aVar.g()) {
            return iVar;
        }
        Context context = this.f37721b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f37721b.f41094e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != ao.a.f6228i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f37749b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = wn.n.f54016i;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    nVar = wn.n.f54015e;
                }
            } else {
                nVar = wn.n.f54014d;
            }
            wn.m b10 = wn.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new un.s0());
                a10 = new un.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                un.w0 w0Var = this.f37723d;
                ao.a valueOf = ao.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new wn.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            un.t tVar = this.f37722c;
            PreviewView previewviewSelfieCamera = this.f37721b.f41107r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f37721b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        rp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f37726g = a10;
        this.f37727h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(un.i iVar) {
        Job d10;
        Job job = this.f37730k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f37721b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = os.i.d(androidx.lifecycle.p.a(rp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f37730k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f37721b.f41099j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f37741v) {
                this.f37741v = true;
                this.f37742w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: mp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f37742w) {
            this.f37741v = false;
            this.f37742w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: mp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f37741v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f37742w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        un.i iVar = this.f37726g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f51832d) {
                    this.f37721b.f41111v.setVisibility(0);
                    Context context = this.f37721b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = rp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f51832d) {
                this.f37721b.f41111v.setVisibility(8);
                Context context2 = this.f37721b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = rp.f.a(context2);
                if (a11 != null && (window = a11.getWindow()) != null) {
                    WindowManager.LayoutParams attributes2 = window.getAttributes();
                    attributes2.screenBrightness = -1.0f;
                    window.setAttributes(attributes2);
                }
            } else {
                iVar.a(false);
            }
        }
    }

    private final void W(String str) {
        np.c cVar = this.f37721b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f41100k.setText(str);
            if (cVar.f41100k.getAlpha() != 1.0f && !this.f37739t) {
                this.f37739t = true;
                this.f37738s = false;
                cVar.f41100k.animate().cancel();
                cVar.f41100k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: mp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f41100k.getAlpha() == 0.0f || this.f37738s) {
        } else {
            this.f37739t = false;
            this.f37738s = true;
            cVar.f41100k.animate().cancel();
            cVar.f41100k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: mp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f37738s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f37739t = false;
    }

    private final void Z(String str) {
        np.c cVar = this.f37721b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f41101l.setText(str);
            if (cVar.f41101l.getAlpha() != 1.0f && !this.f37737r) {
                this.f37737r = true;
                cVar.f41101l.animate().cancel();
                cVar.f41101l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: mp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f41101l.getAlpha() == 0.0f || this.f37736q) {
        } else {
            this.f37736q = true;
            cVar.f41101l.animate().cancel();
            cVar.f41101l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: mp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f37736q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f37737r = false;
    }

    private final void c0(boolean z10) {
        if (this.f37729j.size() >= 2 && z10) {
            this.f37721b.f41104o.setVisibility(0);
        } else {
            this.f37721b.f41104o.setVisibility(4);
        }
    }

    private final void d0(TextView textView, String str, int i10) {
        if (str != null && !StringsKt.k0(str)) {
            textView.setText(str);
            textView.setVisibility(0);
            return;
        }
        textView.setVisibility(i10);
    }

    static /* synthetic */ void e0(w wVar, TextView textView, String str, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = 8;
        }
        wVar.d0(textView, str, i10);
    }

    private static final void g0(np.c cVar, w wVar, x5.d.a aVar, un.i iVar, x5.d.a.AbstractC0516a abstractC0516a) {
        cVar.f41093d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0516a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f37729j.get((wVar.f37729j.indexOf(aVar.g()) + 1) % wVar.f37729j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, np.c cVar) {
        wVar.f37735p = false;
        cVar.f41095f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, un.i iVar) {
        un.w0 w0Var = wVar.f37723d;
        PreviewView previewviewSelfieCamera = wVar.f37721b.f41107r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        xn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(np.c cVar) {
        cVar.f41112w.setIntensity(0.0f);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0516a abstractC0516a) {
        wVar.f37734o = false;
        x5.d.a aVar = wVar.f37728i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0516a.h) abstractC0516a).c().invoke();
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(np.c cVar, w wVar, x5.d.a aVar, un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0516a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0516a abstractC0516a, View view) {
        ((x5.d.a.AbstractC0516a.e) abstractC0516a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, un.i iVar, x5.d.a.AbstractC0516a abstractC0516a) {
        os.i.d(wVar.f37725f, os.m0.c(), null, new j(aVar, iVar, abstractC0516a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f37750c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f19514p;
                        }
                        throw new qr.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f19512i;
                    } else {
                        return SelfieOverlayView.e.f19511e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f19511e;
                } else {
                    return SelfieOverlayView.e.f19512i;
                }
            }
            return SelfieOverlayView.e.f19510d;
        }
        return SelfieOverlayView.e.f19513o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f37734o) {
            return;
        }
        Z(aVar.h());
        W(aVar.f());
    }

    /* JADX WARN: Removed duplicated region for block: B:106:0x0312  */
    /* JADX WARN: Removed duplicated region for block: B:109:0x031d  */
    /* JADX WARN: Removed duplicated region for block: B:118:0x0351  */
    /* JADX WARN: Removed duplicated region for block: B:119:0x0360  */
    /* JADX WARN: Removed duplicated region for block: B:122:0x037b A[ADDED_TO_REGION] */
    @Override // dn.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(mp.x5.d.a r21, dn.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: mp.w.a(mp.x5$d$a, dn.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
