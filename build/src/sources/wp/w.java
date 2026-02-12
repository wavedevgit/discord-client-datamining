package wp;

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
import fo.t;
import fo.v;
import fo.x;
import fo.z;
import ho.g;
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
import wp.a1;
import wp.w;
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements gn.k {

    /* renamed from: b  reason: collision with root package name */
    private final xp.c f53405b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.t f53406c;

    /* renamed from: d  reason: collision with root package name */
    private final fo.w0 f53407d;

    /* renamed from: e  reason: collision with root package name */
    private final int f53408e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f53409f;

    /* renamed from: g  reason: collision with root package name */
    private fo.i f53410g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f53411h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f53412i;

    /* renamed from: j  reason: collision with root package name */
    private List f53413j;

    /* renamed from: k  reason: collision with root package name */
    private Job f53414k;

    /* renamed from: l  reason: collision with root package name */
    private Job f53415l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f53416m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f53417n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f53418o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f53419p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53420q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f53421r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f53422s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53423t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f53424u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f53425v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f53426w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f53427x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f53428y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53429d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0746a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f53431d;

            C0746a(w wVar) {
                this.f53431d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f53431d;
                TextView realTimeHint = wVar.f53405b.f55108t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f31988a;
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
            Object f10 = gs.b.f();
            int i10 = this.f53429d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = bt.g.k(w.this.f53428y, 300L);
                C0746a c0746a = new C0746a(w.this);
                this.f53429d = 1;
                if (k10.collect(c0746a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53432a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f53433b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f53434c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f52971d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f52972e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f52973i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f53432a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f24136d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f24137e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f24138i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f53433b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f53793d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f53794e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f53795i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f53796o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f53797p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f53434c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f53436e;

        c(fo.i iVar) {
            this.f53436e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, fo.i iVar) {
            Function0 function0 = wVar.f53417n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f53405b.getRoot();
            final w wVar = w.this;
            final fo.i iVar = this.f53436e;
            root.post(new Runnable() { // from class: wp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements fo.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f53438b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f53439a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f24136d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f24137e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f24138i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f53439a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f53438b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, fo.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f31988a;
        }

        @Override // fo.y
        public void a() {
            t.a aVar;
            fo.t tVar = w.this.f53406c;
            PreviewView previewviewSelfieCamera = w.this.f53405b.f55106r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f53439a[this.f53438b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f24109i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    aVar = t.a.f24108e;
                }
            } else {
                aVar = t.a.f24107d;
            }
            t.a aVar2 = aVar;
            fo.w0 w0Var = w.this.f53407d;
            final x5.d.a aVar3 = this.f53438b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: wp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (fo.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53440d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f53441e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f53442i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f53443d;

            a(w wVar) {
                this.f53443d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(fo.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f24154a)) {
                    Function1 function12 = this.f53443d.f53416m;
                    if (function12 != null) {
                        function12.invoke(new fo.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f53443d.f53416m) != null) {
                    function1.invoke(new fo.u0());
                }
                return Unit.f31988a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(fo.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f53441e = iVar;
            this.f53442i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f53441e, this.f53442i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f53440d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = fo.j.a(this.f53441e.c());
                a aVar = new a(this.f53442i);
                this.f53440d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53444d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f53445e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f53446i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f53447o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f53445e = iVar;
            this.f53446i = abstractC0749a;
            this.f53447o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f53445e, this.f53446i, this.f53447o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = gs.b.f();
            int i11 = this.f53444d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = this.f53445e;
                this.f53444d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0749a abstractC0749a = this.f53446i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0749a.c cVar = (x5.d.a.AbstractC0749a.c) abstractC0749a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f53447o;
            x5.d.a.AbstractC0749a abstractC0749a2 = this.f53446i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof fo.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0749a.c) abstractC0749a2).c().invoke();
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53448d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f53449e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f53450i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53451d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f53452e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f53452e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f53451d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((fo.x) this.f53452e, x.e.f24157a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(fo.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53453d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ fo.i f53454e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0749a f53455i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
                super(2, continuation);
                this.f53454e = iVar;
                this.f53455i = abstractC0749a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f53454e, this.f53455i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = gs.b.f();
                int i11 = this.f53453d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    fo.i iVar = this.f53454e;
                    this.f53453d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0749a.g) this.f53455i).b().invoke(this.f53454e.b());
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f53449e = iVar;
            this.f53450i = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f53449e, this.f53450i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (bt.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (ys.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r6.f53448d
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
                fo.i r7 = r6.f53449e
                bt.j0 r7 = r7.c()
                wp.w$g$a r1 = new wp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = bt.g.H(r7, r1)
                r6.f53448d = r4
                java.lang.Object r7 = bt.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                ys.c1 r7 = ys.m0.c()
                wp.w$g$b r1 = new wp.w$g$b
                fo.i r4 = r6.f53449e
                wp.x5$d$a$a r5 = r6.f53450i
                r1.<init>(r4, r5, r2)
                r6.f53448d = r3
                java.lang.Object r7 = ys.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53456d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f53457e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ fo.i f53458i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f53459o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0749a abstractC0749a, fo.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f53457e = abstractC0749a;
            this.f53458i = iVar;
            this.f53459o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f53457e, this.f53458i, this.f53459o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f53456d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0749a.i) this.f53457e).b();
                this.f53456d = 1;
                if (ys.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f53458i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f53459o.f53416m;
                if (function1 != null) {
                    function1.invoke(new fo.v0());
                }
                return Unit.f31988a;
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53460d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f53461e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f53462i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f53463o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53464d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0749a f53465e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ fo.i f53466i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f53467o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0749a abstractC0749a, fo.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f53465e = abstractC0749a;
                this.f53466i = iVar;
                this.f53467o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f53465e, this.f53466i, this.f53467o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ys.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = gs.b.f()
                    int r1 = r6.f53464d
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
                    wp.x5$d$a$a r7 = r6.f53465e
                    wp.x5$d$a$a$b r7 = (wp.x5.d.a.AbstractC0749a.b) r7
                    long r4 = r7.c()
                    r6.f53464d = r3
                    java.lang.Object r7 = ys.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    fo.i r7 = r6.f53466i
                    bt.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof fo.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                L49:
                    fo.i r7 = r6.f53466i
                    r6.f53464d = r2
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
                    wp.w r7 = r6.f53467o
                    kotlin.jvm.functions.Function1 r7 = wp.w.z(r7)
                    if (r7 == 0) goto L6f
                    fo.v0 r0 = new fo.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: wp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(fo.i iVar, w wVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f53461e = iVar;
            this.f53462i = wVar;
            this.f53463o = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f53461e, this.f53462i, this.f53463o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = gs.b.f();
            int i10 = this.f53460d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = this.f53461e;
                this.f53460d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f53462i;
            x5.d.a.AbstractC0749a abstractC0749a = this.f53463o;
            fo.i iVar2 = this.f53461e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f53415l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ys.i.d(wVar.f53409f, ys.m0.b(), null, new a(abstractC0749a, iVar2, wVar, null), 2, null);
                wVar.f53415l = d10;
            }
            x5.d.a.AbstractC0749a abstractC0749a2 = this.f53463o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0749a.b) abstractC0749a2).d().invoke(e10);
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53468d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f53470i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ fo.i f53471o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f53472p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f53470i = aVar;
            this.f53471o = iVar;
            this.f53472p = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f53470i, this.f53471o, this.f53472p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (ys.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r5.f53468d
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
                wp.w r6 = wp.w.this
                wp.w.I(r6, r3)
                wp.x5$d$a r6 = r5.f53470i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                wp.w r6 = wp.w.this
                wp.w.G(r6, r3)
                r5.f53468d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ys.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                fo.i r6 = r5.f53471o
                r5.f53468d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                wp.x5$d$a$a r0 = r5.f53472p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                wp.x5$d$a$a$d r0 = (wp.x5.d.a.AbstractC0749a.C0751d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                wp.x5$d$a$a r0 = r5.f53472p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                wp.x5$d$a$a$d r0 = (wp.x5.d.a.AbstractC0749a.C0751d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                wp.x5$d$a r6 = r5.f53470i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                wp.w r6 = wp.w.this
                wp.w.G(r6, r0)
            L8b:
                wp.w r6 = wp.w.this
                wp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public w(xp.c binding, fo.t cameraPreview, fo.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f53405b = binding;
        this.f53406c = cameraPreview;
        this.f53407d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f53408e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f53409f = androidx.lifecycle.p.a(bq.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<ho.l> a10 = ho.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (ho.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f53413j = CollectionsKt.e0(arrayList);
        this.f53428y = bt.l0.a(null);
        ConstraintLayout root = this.f53405b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        ys.i.d(this.f53409f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: wp.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: wp.d
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
        animate.withStartAction(new Runnable() { // from class: wp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: wp.n
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

    private final fo.i Q(x5.d.a aVar) {
        fo.i a10;
        ho.n nVar;
        fo.i iVar = this.f53410g;
        if (iVar != null && this.f53411h == aVar.g()) {
            return iVar;
        }
        Context context = this.f53405b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f53405b.f55093e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != lo.a.f35951i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f53433b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = ho.n.f27616i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    nVar = ho.n.f27615e;
                }
            } else {
                nVar = ho.n.f27614d;
            }
            ho.m b10 = ho.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new fo.s0());
                a10 = new fo.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                fo.w0 w0Var = this.f53407d;
                lo.a valueOf = lo.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new ho.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            fo.t tVar = this.f53406c;
            PreviewView previewviewSelfieCamera = this.f53405b.f55106r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f53405b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        bq.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f53410g = a10;
        this.f53411h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(fo.i iVar) {
        Job d10;
        Job job = this.f53414k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f53405b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ys.i.d(androidx.lifecycle.p.a(bq.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f53414k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f53405b.f55098j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f53425v) {
                this.f53425v = true;
                this.f53426w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f53426w) {
            this.f53425v = false;
            this.f53426w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f53425v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f53426w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        fo.i iVar = this.f53410g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f24136d) {
                    this.f53405b.f55110v.setVisibility(0);
                    Context context = this.f53405b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = bq.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f24136d) {
                this.f53405b.f55110v.setVisibility(8);
                Context context2 = this.f53405b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = bq.f.a(context2);
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
        xp.c cVar = this.f53405b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f55099k.setText(str);
            if (cVar.f55099k.getAlpha() != 1.0f && !this.f53423t) {
                this.f53423t = true;
                this.f53422s = false;
                cVar.f55099k.animate().cancel();
                cVar.f55099k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f55099k.getAlpha() == 0.0f || this.f53422s) {
        } else {
            this.f53423t = false;
            this.f53422s = true;
            cVar.f55099k.animate().cancel();
            cVar.f55099k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f53422s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f53423t = false;
    }

    private final void Z(String str) {
        xp.c cVar = this.f53405b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f55100l.setText(str);
            if (cVar.f55100l.getAlpha() != 1.0f && !this.f53421r) {
                this.f53421r = true;
                cVar.f55100l.animate().cancel();
                cVar.f55100l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f55100l.getAlpha() == 0.0f || this.f53420q) {
        } else {
            this.f53420q = true;
            cVar.f55100l.animate().cancel();
            cVar.f55100l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f53420q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f53421r = false;
    }

    private final void c0(boolean z10) {
        if (this.f53413j.size() >= 2 && z10) {
            this.f53405b.f55103o.setVisibility(0);
        } else {
            this.f53405b.f55103o.setVisibility(4);
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

    private static final void g0(xp.c cVar, w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a) {
        cVar.f55092d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0749a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f53413j.get((wVar.f53413j.indexOf(aVar.g()) + 1) % wVar.f53413j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, xp.c cVar) {
        wVar.f53419p = false;
        cVar.f55094f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, fo.i iVar) {
        fo.w0 w0Var = wVar.f53407d;
        PreviewView previewviewSelfieCamera = wVar.f53405b.f55106r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        io.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(xp.c cVar) {
        cVar.f55111w.setIntensity(0.0f);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0749a abstractC0749a) {
        wVar.f53418o = false;
        x5.d.a aVar = wVar.f53412i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0749a.h) abstractC0749a).c().invoke();
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(xp.c cVar, w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0749a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0749a abstractC0749a, View view) {
        ((x5.d.a.AbstractC0749a.e) abstractC0749a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a) {
        ys.i.d(wVar.f53409f, ys.m0.c(), null, new j(aVar, iVar, abstractC0749a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f53434c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f20535p;
                        }
                        throw new as.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f20533i;
                    } else {
                        return SelfieOverlayView.e.f20532e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f20532e;
                } else {
                    return SelfieOverlayView.e.f20533i;
                }
            }
            return SelfieOverlayView.e.f20531d;
        }
        return SelfieOverlayView.e.f20534o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f53418o) {
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
    @Override // gn.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(wp.x5.d.a r21, gn.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: wp.w.a(wp.x5$d$a, gn.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
