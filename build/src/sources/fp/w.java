package fp;

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
import fp.a1;
import fp.w;
import fp.x5;
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
import nn.t;
import nn.v;
import nn.x;
import nn.z;
import pn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements wm.k {

    /* renamed from: b  reason: collision with root package name */
    private final gp.c f24977b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.t f24978c;

    /* renamed from: d  reason: collision with root package name */
    private final nn.w0 f24979d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24980e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f24981f;

    /* renamed from: g  reason: collision with root package name */
    private nn.i f24982g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f24983h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f24984i;

    /* renamed from: j  reason: collision with root package name */
    private List f24985j;

    /* renamed from: k  reason: collision with root package name */
    private Job f24986k;

    /* renamed from: l  reason: collision with root package name */
    private Job f24987l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f24988m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f24989n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f24990o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f24991p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f24992q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f24993r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f24994s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f24995t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f24996u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f24997v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f24998w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f24999x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f25000y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25001d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: fp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0329a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f25003d;

            C0329a(w wVar) {
                this.f25003d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f25003d;
                TextView realTimeHint = wVar.f24977b.f27349t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f33074a;
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
            Object f10 = pr.b.f();
            int i10 = this.f25001d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = ks.g.k(w.this.f25000y, 300L);
                C0329a c0329a = new C0329a(w.this);
                this.f25001d = 1;
                if (k10.collect(c0329a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f25004a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f25005b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f25006c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f24543d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f24544e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f24545i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f25004a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f42078d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f42079e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f42080i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f25005b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f25365d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f25366e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f25367i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f25368o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f25369p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f25006c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nn.i f25008e;

        c(nn.i iVar) {
            this.f25008e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, nn.i iVar) {
            Function0 function0 = wVar.f24989n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f24977b.getRoot();
            final w wVar = w.this;
            final nn.i iVar = this.f25008e;
            root.post(new Runnable() { // from class: fp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements nn.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f25010b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f25011a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f42078d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f42079e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f42080i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f25011a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f25010b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, nn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f33074a;
        }

        @Override // nn.y
        public void a() {
            t.a aVar;
            nn.t tVar = w.this.f24978c;
            PreviewView previewviewSelfieCamera = w.this.f24977b.f27347r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f25011a[this.f25010b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f42051i;
                    } else {
                        throw new jr.p();
                    }
                } else {
                    aVar = t.a.f42050e;
                }
            } else {
                aVar = t.a.f42049d;
            }
            t.a aVar2 = aVar;
            nn.w0 w0Var = w.this.f24979d;
            final x5.d.a aVar3 = this.f25010b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: fp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (nn.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25012d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nn.i f25013e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f25014i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f25015d;

            a(w wVar) {
                this.f25015d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(nn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f42096a)) {
                    Function1 function12 = this.f25015d.f24988m;
                    if (function12 != null) {
                        function12.invoke(new nn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f25015d.f24988m) != null) {
                    function1.invoke(new nn.u0());
                }
                return Unit.f33074a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(nn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f25013e = iVar;
            this.f25014i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f25013e, this.f25014i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f25012d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = nn.j.a(this.f25013e.c());
                a aVar = new a(this.f25014i);
                this.f25012d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25016d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nn.i f25017e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0332a f25018i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f25019o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f25017e = iVar;
            this.f25018i = abstractC0332a;
            this.f25019o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f25017e, this.f25018i, this.f25019o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = pr.b.f();
            int i11 = this.f25016d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                nn.i iVar = this.f25017e;
                this.f25016d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0332a abstractC0332a = this.f25018i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0332a.c cVar = (x5.d.a.AbstractC0332a.c) abstractC0332a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f25019o;
            x5.d.a.AbstractC0332a abstractC0332a2 = this.f25018i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof nn.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0332a.c) abstractC0332a2).c().invoke();
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25020d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nn.i f25021e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0332a f25022i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f25023d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f25024e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f25024e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f25023d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((nn.x) this.f25024e, x.e.f42099a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(nn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f25025d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ nn.i f25026e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0332a f25027i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a, Continuation continuation) {
                super(2, continuation);
                this.f25026e = iVar;
                this.f25027i = abstractC0332a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f25026e, this.f25027i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = pr.b.f();
                int i11 = this.f25025d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    nn.i iVar = this.f25026e;
                    this.f25025d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0332a.g) this.f25027i).b().invoke(this.f25026e.b());
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a, Continuation continuation) {
            super(2, continuation);
            this.f25021e = iVar;
            this.f25022i = abstractC0332a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f25021e, this.f25022i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (ks.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (hs.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = pr.b.f()
                int r1 = r6.f25020d
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
                nn.i r7 = r6.f25021e
                ks.j0 r7 = r7.c()
                fp.w$g$a r1 = new fp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ks.g.H(r7, r1)
                r6.f25020d = r4
                java.lang.Object r7 = ks.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                hs.c1 r7 = hs.m0.c()
                fp.w$g$b r1 = new fp.w$g$b
                nn.i r4 = r6.f25021e
                fp.x5$d$a$a r5 = r6.f25022i
                r1.<init>(r4, r5, r2)
                r6.f25020d = r3
                java.lang.Object r7 = hs.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f33074a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: fp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25028d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0332a f25029e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ nn.i f25030i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f25031o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0332a abstractC0332a, nn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f25029e = abstractC0332a;
            this.f25030i = iVar;
            this.f25031o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f25029e, this.f25030i, this.f25031o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f25028d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0332a.i) this.f25029e).b();
                this.f25028d = 1;
                if (hs.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f25030i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f25031o.f24988m;
                if (function1 != null) {
                    function1.invoke(new nn.v0());
                }
                return Unit.f33074a;
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25032d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ nn.i f25033e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f25034i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0332a f25035o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f25036d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0332a f25037e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ nn.i f25038i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f25039o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0332a abstractC0332a, nn.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f25037e = abstractC0332a;
                this.f25038i = iVar;
                this.f25039o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f25037e, this.f25038i, this.f25039o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (hs.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = pr.b.f()
                    int r1 = r6.f25036d
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
                    fp.x5$d$a$a r7 = r6.f25037e
                    fp.x5$d$a$a$b r7 = (fp.x5.d.a.AbstractC0332a.b) r7
                    long r4 = r7.c()
                    r6.f25036d = r3
                    java.lang.Object r7 = hs.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    nn.i r7 = r6.f25038i
                    ks.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof nn.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                L49:
                    nn.i r7 = r6.f25038i
                    r6.f25036d = r2
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
                    fp.w r7 = r6.f25039o
                    kotlin.jvm.functions.Function1 r7 = fp.w.z(r7)
                    if (r7 == 0) goto L6f
                    nn.v0 r0 = new nn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: fp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(nn.i iVar, w wVar, x5.d.a.AbstractC0332a abstractC0332a, Continuation continuation) {
            super(2, continuation);
            this.f25033e = iVar;
            this.f25034i = wVar;
            this.f25035o = abstractC0332a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f25033e, this.f25034i, this.f25035o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = pr.b.f();
            int i10 = this.f25032d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                nn.i iVar = this.f25033e;
                this.f25032d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f25034i;
            x5.d.a.AbstractC0332a abstractC0332a = this.f25035o;
            nn.i iVar2 = this.f25033e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f24987l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = hs.i.d(wVar.f24981f, hs.m0.b(), null, new a(abstractC0332a, iVar2, wVar, null), 2, null);
                wVar.f24987l = d10;
            }
            x5.d.a.AbstractC0332a abstractC0332a2 = this.f25035o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0332a.b) abstractC0332a2).d().invoke(e10);
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f25040d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f25042i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ nn.i f25043o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0332a f25044p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a, Continuation continuation) {
            super(2, continuation);
            this.f25042i = aVar;
            this.f25043o = iVar;
            this.f25044p = abstractC0332a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f25042i, this.f25043o, this.f25044p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (hs.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = pr.b.f()
                int r1 = r5.f25040d
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
                fp.w r6 = fp.w.this
                fp.w.I(r6, r3)
                fp.x5$d$a r6 = r5.f25042i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                fp.w r6 = fp.w.this
                fp.w.G(r6, r3)
                r5.f25040d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = hs.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                nn.i r6 = r5.f25043o
                r5.f25040d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                fp.x5$d$a$a r0 = r5.f25044p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                fp.x5$d$a$a$d r0 = (fp.x5.d.a.AbstractC0332a.C0334d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                fp.x5$d$a$a r0 = r5.f25044p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                fp.x5$d$a$a$d r0 = (fp.x5.d.a.AbstractC0332a.C0334d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                fp.x5$d$a r6 = r5.f25042i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                fp.w r6 = fp.w.this
                fp.w.G(r6, r0)
            L8b:
                fp.w r6 = fp.w.this
                fp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f33074a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: fp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public w(gp.c binding, nn.t cameraPreview, nn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f24977b = binding;
        this.f24978c = cameraPreview;
        this.f24979d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f24980e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f24981f = androidx.lifecycle.p.a(kp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<pn.l> a10 = pn.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (pn.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f24985j = CollectionsKt.e0(arrayList);
        this.f25000y = ks.l0.a(null);
        ConstraintLayout root = this.f24977b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.f.d(root, false, false, false, false, 15, null);
        hs.i.d(this.f24981f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: fp.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: fp.d
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
        animate.withStartAction(new Runnable() { // from class: fp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: fp.n
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

    private final nn.i Q(x5.d.a aVar) {
        nn.i a10;
        pn.n nVar;
        nn.i iVar = this.f24982g;
        if (iVar != null && this.f24983h == aVar.g()) {
            return iVar;
        }
        Context context = this.f24977b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f24977b.f27334e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != tn.a.f49946i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f25005b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = pn.n.f46381i;
                    } else {
                        throw new jr.p();
                    }
                } else {
                    nVar = pn.n.f46380e;
                }
            } else {
                nVar = pn.n.f46379d;
            }
            pn.m b10 = pn.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new nn.s0());
                a10 = new nn.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                nn.w0 w0Var = this.f24979d;
                tn.a valueOf = tn.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new pn.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            nn.t tVar = this.f24978c;
            PreviewView previewviewSelfieCamera = this.f24977b.f27347r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f24977b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        kp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f24982g = a10;
        this.f24983h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(nn.i iVar) {
        Job d10;
        Job job = this.f24986k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f24977b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = hs.i.d(androidx.lifecycle.p.a(kp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f24986k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f24977b.f27339j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f24997v) {
                this.f24997v = true;
                this.f24998w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: fp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f24998w) {
            this.f24997v = false;
            this.f24998w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: fp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f24997v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f24998w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        nn.i iVar = this.f24982g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f42078d) {
                    this.f24977b.f27351v.setVisibility(0);
                    Context context = this.f24977b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = kp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f42078d) {
                this.f24977b.f27351v.setVisibility(8);
                Context context2 = this.f24977b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = kp.f.a(context2);
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
        gp.c cVar = this.f24977b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f27340k.setText(str);
            if (cVar.f27340k.getAlpha() != 1.0f && !this.f24995t) {
                this.f24995t = true;
                this.f24994s = false;
                cVar.f27340k.animate().cancel();
                cVar.f27340k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: fp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f27340k.getAlpha() == 0.0f || this.f24994s) {
        } else {
            this.f24995t = false;
            this.f24994s = true;
            cVar.f27340k.animate().cancel();
            cVar.f27340k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: fp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f24994s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f24995t = false;
    }

    private final void Z(String str) {
        gp.c cVar = this.f24977b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f27341l.setText(str);
            if (cVar.f27341l.getAlpha() != 1.0f && !this.f24993r) {
                this.f24993r = true;
                cVar.f27341l.animate().cancel();
                cVar.f27341l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: fp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f27341l.getAlpha() == 0.0f || this.f24992q) {
        } else {
            this.f24992q = true;
            cVar.f27341l.animate().cancel();
            cVar.f27341l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: fp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f24992q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f24993r = false;
    }

    private final void c0(boolean z10) {
        if (this.f24985j.size() >= 2 && z10) {
            this.f24977b.f27344o.setVisibility(0);
        } else {
            this.f24977b.f27344o.setVisibility(4);
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

    private static final void g0(gp.c cVar, w wVar, x5.d.a aVar, nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a) {
        cVar.f27333d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0332a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f24985j.get((wVar.f24985j.indexOf(aVar.g()) + 1) % wVar.f24985j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, gp.c cVar) {
        wVar.f24991p = false;
        cVar.f27335f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, nn.i iVar) {
        nn.w0 w0Var = wVar.f24979d;
        PreviewView previewviewSelfieCamera = wVar.f24977b.f27347r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        qn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(gp.c cVar) {
        cVar.f27352w.setIntensity(0.0f);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0332a abstractC0332a) {
        wVar.f24990o = false;
        x5.d.a aVar = wVar.f24984i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0332a.h) abstractC0332a).c().invoke();
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(gp.c cVar, w wVar, x5.d.a aVar, nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0332a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0332a abstractC0332a, View view) {
        ((x5.d.a.AbstractC0332a.e) abstractC0332a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, nn.i iVar, x5.d.a.AbstractC0332a abstractC0332a) {
        hs.i.d(wVar.f24981f, hs.m0.c(), null, new j(aVar, iVar, abstractC0332a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f25006c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f20146p;
                        }
                        throw new jr.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f20144i;
                    } else {
                        return SelfieOverlayView.e.f20143e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f20143e;
                } else {
                    return SelfieOverlayView.e.f20144i;
                }
            }
            return SelfieOverlayView.e.f20142d;
        }
        return SelfieOverlayView.e.f20145o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f24990o) {
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
    @Override // wm.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(fp.x5.d.a r21, wm.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: fp.w.a(fp.x5$d$a, wm.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
