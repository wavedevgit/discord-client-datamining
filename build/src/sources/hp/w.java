package hp;

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
import hp.a1;
import hp.w;
import hp.x5;
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
import pn.t;
import pn.v;
import pn.x;
import pn.z;
import rn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements ym.k {

    /* renamed from: b  reason: collision with root package name */
    private final ip.c f27572b;

    /* renamed from: c  reason: collision with root package name */
    private final pn.t f27573c;

    /* renamed from: d  reason: collision with root package name */
    private final pn.w0 f27574d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27575e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f27576f;

    /* renamed from: g  reason: collision with root package name */
    private pn.i f27577g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f27578h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f27579i;

    /* renamed from: j  reason: collision with root package name */
    private List f27580j;

    /* renamed from: k  reason: collision with root package name */
    private Job f27581k;

    /* renamed from: l  reason: collision with root package name */
    private Job f27582l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f27583m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f27584n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f27585o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f27586p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27587q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f27588r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f27589s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f27590t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f27591u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f27592v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f27593w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f27594x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f27595y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27596d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: hp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0357a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f27598d;

            C0357a(w wVar) {
                this.f27598d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f27598d;
                TextView realTimeHint = wVar.f27572b.f31003t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f32464a;
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
            Object f10 = rr.b.f();
            int i10 = this.f27596d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = ms.g.k(w.this.f27595y, 300L);
                C0357a c0357a = new C0357a(w.this);
                this.f27596d = 1;
                if (k10.collect(c0357a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27599a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f27600b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f27601c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f27138d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f27139e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f27140i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f27599a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f46370d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f46371e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f46372i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f27600b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f27960d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f27961e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f27962i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f27963o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f27964p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f27601c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ pn.i f27603e;

        c(pn.i iVar) {
            this.f27603e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, pn.i iVar) {
            Function0 function0 = wVar.f27584n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f27572b.getRoot();
            final w wVar = w.this;
            final pn.i iVar = this.f27603e;
            root.post(new Runnable() { // from class: hp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements pn.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f27605b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f27606a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f46370d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f46371e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f46372i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f27606a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f27605b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, pn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f32464a;
        }

        @Override // pn.y
        public void a() {
            t.a aVar;
            pn.t tVar = w.this.f27573c;
            PreviewView previewviewSelfieCamera = w.this.f27572b.f31001r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f27606a[this.f27605b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f46343i;
                    } else {
                        throw new lr.p();
                    }
                } else {
                    aVar = t.a.f46342e;
                }
            } else {
                aVar = t.a.f46341d;
            }
            t.a aVar2 = aVar;
            pn.w0 w0Var = w.this.f27574d;
            final x5.d.a aVar3 = this.f27605b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: hp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (pn.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27607d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ pn.i f27608e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f27609i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f27610d;

            a(w wVar) {
                this.f27610d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(pn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f46388a)) {
                    Function1 function12 = this.f27610d.f27583m;
                    if (function12 != null) {
                        function12.invoke(new pn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f27610d.f27583m) != null) {
                    function1.invoke(new pn.u0());
                }
                return Unit.f32464a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(pn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f27608e = iVar;
            this.f27609i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f27608e, this.f27609i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f27607d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = pn.j.a(this.f27608e.c());
                a aVar = new a(this.f27609i);
                this.f27607d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27611d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ pn.i f27612e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0360a f27613i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f27614o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f27612e = iVar;
            this.f27613i = abstractC0360a;
            this.f27614o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f27612e, this.f27613i, this.f27614o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = rr.b.f();
            int i11 = this.f27611d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.i iVar = this.f27612e;
                this.f27611d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0360a abstractC0360a = this.f27613i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0360a.c cVar = (x5.d.a.AbstractC0360a.c) abstractC0360a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f27614o;
            x5.d.a.AbstractC0360a abstractC0360a2 = this.f27613i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof pn.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0360a.c) abstractC0360a2).c().invoke();
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27615d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ pn.i f27616e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0360a f27617i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f27618d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f27619e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f27619e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                rr.b.f();
                if (this.f27618d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((pn.x) this.f27619e, x.e.f46391a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(pn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f27620d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ pn.i f27621e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0360a f27622i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a, Continuation continuation) {
                super(2, continuation);
                this.f27621e = iVar;
                this.f27622i = abstractC0360a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f27621e, this.f27622i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = rr.b.f();
                int i11 = this.f27620d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    pn.i iVar = this.f27621e;
                    this.f27620d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0360a.g) this.f27622i).b().invoke(this.f27621e.b());
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a, Continuation continuation) {
            super(2, continuation);
            this.f27616e = iVar;
            this.f27617i = abstractC0360a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f27616e, this.f27617i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (ms.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (js.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = rr.b.f()
                int r1 = r6.f27615d
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
                pn.i r7 = r6.f27616e
                ms.j0 r7 = r7.c()
                hp.w$g$a r1 = new hp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ms.g.H(r7, r1)
                r6.f27615d = r4
                java.lang.Object r7 = ms.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                js.c1 r7 = js.m0.c()
                hp.w$g$b r1 = new hp.w$g$b
                pn.i r4 = r6.f27616e
                hp.x5$d$a$a r5 = r6.f27617i
                r1.<init>(r4, r5, r2)
                r6.f27615d = r3
                java.lang.Object r7 = js.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27623d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0360a f27624e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ pn.i f27625i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f27626o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0360a abstractC0360a, pn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f27624e = abstractC0360a;
            this.f27625i = iVar;
            this.f27626o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f27624e, this.f27625i, this.f27626o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f27623d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0360a.i) this.f27624e).b();
                this.f27623d = 1;
                if (js.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f27625i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f27626o.f27583m;
                if (function1 != null) {
                    function1.invoke(new pn.v0());
                }
                return Unit.f32464a;
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27627d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ pn.i f27628e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f27629i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0360a f27630o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f27631d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0360a f27632e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ pn.i f27633i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f27634o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0360a abstractC0360a, pn.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f27632e = abstractC0360a;
                this.f27633i = iVar;
                this.f27634o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f27632e, this.f27633i, this.f27634o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (js.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r6.f27631d
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
                    hp.x5$d$a$a r7 = r6.f27632e
                    hp.x5$d$a$a$b r7 = (hp.x5.d.a.AbstractC0360a.b) r7
                    long r4 = r7.c()
                    r6.f27631d = r3
                    java.lang.Object r7 = js.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    pn.i r7 = r6.f27633i
                    ms.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof pn.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f32464a
                    return r7
                L49:
                    pn.i r7 = r6.f27633i
                    r6.f27631d = r2
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
                    hp.w r7 = r6.f27634o
                    kotlin.jvm.functions.Function1 r7 = hp.w.z(r7)
                    if (r7 == 0) goto L6f
                    pn.v0 r0 = new pn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f32464a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: hp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(pn.i iVar, w wVar, x5.d.a.AbstractC0360a abstractC0360a, Continuation continuation) {
            super(2, continuation);
            this.f27628e = iVar;
            this.f27629i = wVar;
            this.f27630o = abstractC0360a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f27628e, this.f27629i, this.f27630o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = rr.b.f();
            int i10 = this.f27627d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.i iVar = this.f27628e;
                this.f27627d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f27629i;
            x5.d.a.AbstractC0360a abstractC0360a = this.f27630o;
            pn.i iVar2 = this.f27628e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f27582l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = js.i.d(wVar.f27576f, js.m0.b(), null, new a(abstractC0360a, iVar2, wVar, null), 2, null);
                wVar.f27582l = d10;
            }
            x5.d.a.AbstractC0360a abstractC0360a2 = this.f27630o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0360a.b) abstractC0360a2).d().invoke(e10);
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27635d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f27637i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ pn.i f27638o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0360a f27639p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a, Continuation continuation) {
            super(2, continuation);
            this.f27637i = aVar;
            this.f27638o = iVar;
            this.f27639p = abstractC0360a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f27637i, this.f27638o, this.f27639p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (js.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = rr.b.f()
                int r1 = r5.f27635d
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
                hp.w r6 = hp.w.this
                hp.w.I(r6, r3)
                hp.x5$d$a r6 = r5.f27637i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                hp.w r6 = hp.w.this
                hp.w.G(r6, r3)
                r5.f27635d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = js.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                pn.i r6 = r5.f27638o
                r5.f27635d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                hp.x5$d$a$a r0 = r5.f27639p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                hp.x5$d$a$a$d r0 = (hp.x5.d.a.AbstractC0360a.C0362d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                hp.x5$d$a$a r0 = r5.f27639p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                hp.x5$d$a$a$d r0 = (hp.x5.d.a.AbstractC0360a.C0362d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                hp.x5$d$a r6 = r5.f27637i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                hp.w r6 = hp.w.this
                hp.w.G(r6, r0)
            L8b:
                hp.w r6 = hp.w.this
                hp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public w(ip.c binding, pn.t cameraPreview, pn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f27572b = binding;
        this.f27573c = cameraPreview;
        this.f27574d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f27575e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f27576f = androidx.lifecycle.p.a(mp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<rn.l> a10 = rn.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (rn.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f27580j = CollectionsKt.e0(arrayList);
        this.f27595y = ms.l0.a(null);
        ConstraintLayout root = this.f27572b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        js.i.d(this.f27576f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: hp.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: hp.d
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
        animate.withStartAction(new Runnable() { // from class: hp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: hp.n
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

    private final pn.i Q(x5.d.a aVar) {
        pn.i a10;
        rn.n nVar;
        pn.i iVar = this.f27577g;
        if (iVar != null && this.f27578h == aVar.g()) {
            return iVar;
        }
        Context context = this.f27572b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f27572b.f30988e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != vn.a.f51702i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f27600b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = rn.n.f49017i;
                    } else {
                        throw new lr.p();
                    }
                } else {
                    nVar = rn.n.f49016e;
                }
            } else {
                nVar = rn.n.f49015d;
            }
            rn.m b10 = rn.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new pn.s0());
                a10 = new pn.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                pn.w0 w0Var = this.f27574d;
                vn.a valueOf = vn.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new rn.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            pn.t tVar = this.f27573c;
            PreviewView previewviewSelfieCamera = this.f27572b.f31001r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f27572b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        mp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f27577g = a10;
        this.f27578h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(pn.i iVar) {
        Job d10;
        Job job = this.f27581k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f27572b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = js.i.d(androidx.lifecycle.p.a(mp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f27581k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f27572b.f30993j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f27592v) {
                this.f27592v = true;
                this.f27593w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: hp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f27593w) {
            this.f27592v = false;
            this.f27593w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: hp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f27592v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f27593w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        pn.i iVar = this.f27577g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f46370d) {
                    this.f27572b.f31005v.setVisibility(0);
                    Context context = this.f27572b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = mp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f46370d) {
                this.f27572b.f31005v.setVisibility(8);
                Context context2 = this.f27572b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = mp.f.a(context2);
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
        ip.c cVar = this.f27572b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f30994k.setText(str);
            if (cVar.f30994k.getAlpha() != 1.0f && !this.f27590t) {
                this.f27590t = true;
                this.f27589s = false;
                cVar.f30994k.animate().cancel();
                cVar.f30994k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: hp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f30994k.getAlpha() == 0.0f || this.f27589s) {
        } else {
            this.f27590t = false;
            this.f27589s = true;
            cVar.f30994k.animate().cancel();
            cVar.f30994k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: hp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f27589s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f27590t = false;
    }

    private final void Z(String str) {
        ip.c cVar = this.f27572b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f30995l.setText(str);
            if (cVar.f30995l.getAlpha() != 1.0f && !this.f27588r) {
                this.f27588r = true;
                cVar.f30995l.animate().cancel();
                cVar.f30995l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: hp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f30995l.getAlpha() == 0.0f || this.f27587q) {
        } else {
            this.f27587q = true;
            cVar.f30995l.animate().cancel();
            cVar.f30995l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: hp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f27587q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f27588r = false;
    }

    private final void c0(boolean z10) {
        if (this.f27580j.size() >= 2 && z10) {
            this.f27572b.f30998o.setVisibility(0);
        } else {
            this.f27572b.f30998o.setVisibility(4);
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

    private static final void g0(ip.c cVar, w wVar, x5.d.a aVar, pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a) {
        cVar.f30987d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0360a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f27580j.get((wVar.f27580j.indexOf(aVar.g()) + 1) % wVar.f27580j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, ip.c cVar) {
        wVar.f27586p = false;
        cVar.f30989f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, pn.i iVar) {
        pn.w0 w0Var = wVar.f27574d;
        PreviewView previewviewSelfieCamera = wVar.f27572b.f31001r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        sn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(ip.c cVar) {
        cVar.f31006w.setIntensity(0.0f);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0360a abstractC0360a) {
        wVar.f27585o = false;
        x5.d.a aVar = wVar.f27579i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0360a.h) abstractC0360a).c().invoke();
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(ip.c cVar, w wVar, x5.d.a aVar, pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0360a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0360a abstractC0360a, View view) {
        ((x5.d.a.AbstractC0360a.e) abstractC0360a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, pn.i iVar, x5.d.a.AbstractC0360a abstractC0360a) {
        js.i.d(wVar.f27576f, js.m0.c(), null, new j(aVar, iVar, abstractC0360a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f27601c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f19128p;
                        }
                        throw new lr.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f19126i;
                    } else {
                        return SelfieOverlayView.e.f19125e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f19125e;
                } else {
                    return SelfieOverlayView.e.f19126i;
                }
            }
            return SelfieOverlayView.e.f19124d;
        }
        return SelfieOverlayView.e.f19127o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f27585o) {
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
    @Override // ym.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(hp.x5.d.a r21, ym.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: hp.w.a(hp.x5$d$a, ym.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
