package ep;

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
import ep.a1;
import ep.w;
import ep.x5;
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
import mn.t;
import mn.v;
import mn.x;
import mn.z;
import on.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements vm.k {

    /* renamed from: b  reason: collision with root package name */
    private final fp.c f23446b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.t f23447c;

    /* renamed from: d  reason: collision with root package name */
    private final mn.w0 f23448d;

    /* renamed from: e  reason: collision with root package name */
    private final int f23449e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f23450f;

    /* renamed from: g  reason: collision with root package name */
    private mn.i f23451g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f23452h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f23453i;

    /* renamed from: j  reason: collision with root package name */
    private List f23454j;

    /* renamed from: k  reason: collision with root package name */
    private Job f23455k;

    /* renamed from: l  reason: collision with root package name */
    private Job f23456l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f23457m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f23458n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f23459o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f23460p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f23461q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f23462r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f23463s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f23464t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f23465u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f23466v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f23467w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f23468x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f23469y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23470d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ep.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0305a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f23472d;

            C0305a(w wVar) {
                this.f23472d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f23472d;
                TextView realTimeHint = wVar.f23446b.f25456t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f33282a;
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
            Object f10 = or.b.f();
            int i10 = this.f23470d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = js.g.k(w.this.f23469y, 300L);
                C0305a c0305a = new C0305a(w.this);
                this.f23470d = 1;
                if (k10.collect(c0305a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23473a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f23474b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f23475c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f23012d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f23013e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f23014i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23473a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f39319d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f39320e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f39321i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f23474b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f23834d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f23835e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f23836i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f23837o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f23838p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f23475c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ mn.i f23477e;

        c(mn.i iVar) {
            this.f23477e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, mn.i iVar) {
            Function0 function0 = wVar.f23458n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f23446b.getRoot();
            final w wVar = w.this;
            final mn.i iVar = this.f23477e;
            root.post(new Runnable() { // from class: ep.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements mn.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f23479b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f23480a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f39319d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f39320e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f39321i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f23480a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f23479b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, mn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f33282a;
        }

        @Override // mn.y
        public void a() {
            t.a aVar;
            mn.t tVar = w.this.f23447c;
            PreviewView previewviewSelfieCamera = w.this.f23446b.f25454r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f23480a[this.f23479b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f39292i;
                    } else {
                        throw new ir.p();
                    }
                } else {
                    aVar = t.a.f39291e;
                }
            } else {
                aVar = t.a.f39290d;
            }
            t.a aVar2 = aVar;
            mn.w0 w0Var = w.this.f23448d;
            final x5.d.a aVar3 = this.f23479b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: ep.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (mn.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23481d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ mn.i f23482e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f23483i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f23484d;

            a(w wVar) {
                this.f23484d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(mn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f39337a)) {
                    Function1 function12 = this.f23484d.f23457m;
                    if (function12 != null) {
                        function12.invoke(new mn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f23484d.f23457m) != null) {
                    function1.invoke(new mn.u0());
                }
                return Unit.f33282a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(mn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f23482e = iVar;
            this.f23483i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f23482e, this.f23483i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f23481d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = mn.j.a(this.f23482e.c());
                a aVar = new a(this.f23483i);
                this.f23481d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23485d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ mn.i f23486e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0308a f23487i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f23488o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f23486e = iVar;
            this.f23487i = abstractC0308a;
            this.f23488o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f23486e, this.f23487i, this.f23488o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = or.b.f();
            int i11 = this.f23485d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = this.f23486e;
                this.f23485d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0308a abstractC0308a = this.f23487i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0308a.c cVar = (x5.d.a.AbstractC0308a.c) abstractC0308a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f23488o;
            x5.d.a.AbstractC0308a abstractC0308a2 = this.f23487i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof mn.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0308a.c) abstractC0308a2).c().invoke();
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23489d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ mn.i f23490e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0308a f23491i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23492d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f23493e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f23493e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f23492d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((mn.x) this.f23493e, x.e.f39340a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(mn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23494d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ mn.i f23495e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0308a f23496i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a, Continuation continuation) {
                super(2, continuation);
                this.f23495e = iVar;
                this.f23496i = abstractC0308a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f23495e, this.f23496i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = or.b.f();
                int i11 = this.f23494d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    mn.i iVar = this.f23495e;
                    this.f23494d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0308a.g) this.f23496i).b().invoke(this.f23495e.b());
                return Unit.f33282a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a, Continuation continuation) {
            super(2, continuation);
            this.f23490e = iVar;
            this.f23491i = abstractC0308a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f23490e, this.f23491i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (js.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (gs.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = or.b.f()
                int r1 = r6.f23489d
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
                mn.i r7 = r6.f23490e
                js.j0 r7 = r7.c()
                ep.w$g$a r1 = new ep.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = js.g.H(r7, r1)
                r6.f23489d = r4
                java.lang.Object r7 = js.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                gs.c1 r7 = gs.m0.c()
                ep.w$g$b r1 = new ep.w$g$b
                mn.i r4 = r6.f23490e
                ep.x5$d$a$a r5 = r6.f23491i
                r1.<init>(r4, r5, r2)
                r6.f23489d = r3
                java.lang.Object r7 = gs.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f33282a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ep.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23497d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0308a f23498e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ mn.i f23499i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f23500o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0308a abstractC0308a, mn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f23498e = abstractC0308a;
            this.f23499i = iVar;
            this.f23500o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f23498e, this.f23499i, this.f23500o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f23497d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0308a.i) this.f23498e).b();
                this.f23497d = 1;
                if (gs.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f23499i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f23500o.f23457m;
                if (function1 != null) {
                    function1.invoke(new mn.v0());
                }
                return Unit.f33282a;
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23501d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ mn.i f23502e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f23503i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0308a f23504o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23505d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0308a f23506e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ mn.i f23507i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f23508o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0308a abstractC0308a, mn.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f23506e = abstractC0308a;
                this.f23507i = iVar;
                this.f23508o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f23506e, this.f23507i, this.f23508o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (gs.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = or.b.f()
                    int r1 = r6.f23505d
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
                    ep.x5$d$a$a r7 = r6.f23506e
                    ep.x5$d$a$a$b r7 = (ep.x5.d.a.AbstractC0308a.b) r7
                    long r4 = r7.c()
                    r6.f23505d = r3
                    java.lang.Object r7 = gs.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    mn.i r7 = r6.f23507i
                    js.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof mn.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f33282a
                    return r7
                L49:
                    mn.i r7 = r6.f23507i
                    r6.f23505d = r2
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
                    ep.w r7 = r6.f23508o
                    kotlin.jvm.functions.Function1 r7 = ep.w.z(r7)
                    if (r7 == 0) goto L6f
                    mn.v0 r0 = new mn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f33282a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: ep.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(mn.i iVar, w wVar, x5.d.a.AbstractC0308a abstractC0308a, Continuation continuation) {
            super(2, continuation);
            this.f23502e = iVar;
            this.f23503i = wVar;
            this.f23504o = abstractC0308a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f23502e, this.f23503i, this.f23504o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = or.b.f();
            int i10 = this.f23501d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = this.f23502e;
                this.f23501d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f23503i;
            x5.d.a.AbstractC0308a abstractC0308a = this.f23504o;
            mn.i iVar2 = this.f23502e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f23456l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = gs.i.d(wVar.f23450f, gs.m0.b(), null, new a(abstractC0308a, iVar2, wVar, null), 2, null);
                wVar.f23456l = d10;
            }
            x5.d.a.AbstractC0308a abstractC0308a2 = this.f23504o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0308a.b) abstractC0308a2).d().invoke(e10);
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23509d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f23511i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ mn.i f23512o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0308a f23513p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a, Continuation continuation) {
            super(2, continuation);
            this.f23511i = aVar;
            this.f23512o = iVar;
            this.f23513p = abstractC0308a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f23511i, this.f23512o, this.f23513p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (gs.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = or.b.f()
                int r1 = r5.f23509d
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
                ep.w r6 = ep.w.this
                ep.w.I(r6, r3)
                ep.x5$d$a r6 = r5.f23511i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                ep.w r6 = ep.w.this
                ep.w.G(r6, r3)
                r5.f23509d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = gs.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                mn.i r6 = r5.f23512o
                r5.f23509d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                ep.x5$d$a$a r0 = r5.f23513p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                ep.x5$d$a$a$d r0 = (ep.x5.d.a.AbstractC0308a.C0310d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                ep.x5$d$a$a r0 = r5.f23513p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                ep.x5$d$a$a$d r0 = (ep.x5.d.a.AbstractC0308a.C0310d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                ep.x5$d$a r6 = r5.f23511i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                ep.w r6 = ep.w.this
                ep.w.G(r6, r0)
            L8b:
                ep.w r6 = ep.w.this
                ep.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f33282a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ep.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public w(fp.c binding, mn.t cameraPreview, mn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f23446b = binding;
        this.f23447c = cameraPreview;
        this.f23448d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f23449e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f23450f = androidx.lifecycle.p.a(jp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<on.l> a10 = on.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (on.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f23454j = CollectionsKt.e0(arrayList);
        this.f23469y = js.l0.a(null);
        ConstraintLayout root = this.f23446b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        gs.i.d(this.f23450f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: ep.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: ep.d
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
        animate.withStartAction(new Runnable() { // from class: ep.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: ep.n
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

    private final mn.i Q(x5.d.a aVar) {
        mn.i a10;
        on.n nVar;
        mn.i iVar = this.f23451g;
        if (iVar != null && this.f23452h == aVar.g()) {
            return iVar;
        }
        Context context = this.f23446b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f23446b.f25441e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != sn.a.f49092i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f23474b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = on.n.f44575i;
                    } else {
                        throw new ir.p();
                    }
                } else {
                    nVar = on.n.f44574e;
                }
            } else {
                nVar = on.n.f44573d;
            }
            on.m b10 = on.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new mn.s0());
                a10 = new mn.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                mn.w0 w0Var = this.f23448d;
                sn.a valueOf = sn.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new on.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            mn.t tVar = this.f23447c;
            PreviewView previewviewSelfieCamera = this.f23446b.f25454r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f23446b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        jp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f23451g = a10;
        this.f23452h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(mn.i iVar) {
        Job d10;
        Job job = this.f23455k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f23446b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = gs.i.d(androidx.lifecycle.p.a(jp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f23455k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f23446b.f25446j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f23466v) {
                this.f23466v = true;
                this.f23467w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: ep.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f23467w) {
            this.f23466v = false;
            this.f23467w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: ep.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f23466v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f23467w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        mn.i iVar = this.f23451g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f39319d) {
                    this.f23446b.f25458v.setVisibility(0);
                    Context context = this.f23446b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = jp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f39319d) {
                this.f23446b.f25458v.setVisibility(8);
                Context context2 = this.f23446b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = jp.f.a(context2);
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
        fp.c cVar = this.f23446b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f25447k.setText(str);
            if (cVar.f25447k.getAlpha() != 1.0f && !this.f23464t) {
                this.f23464t = true;
                this.f23463s = false;
                cVar.f25447k.animate().cancel();
                cVar.f25447k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: ep.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f25447k.getAlpha() == 0.0f || this.f23463s) {
        } else {
            this.f23464t = false;
            this.f23463s = true;
            cVar.f25447k.animate().cancel();
            cVar.f25447k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: ep.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f23463s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f23464t = false;
    }

    private final void Z(String str) {
        fp.c cVar = this.f23446b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f25448l.setText(str);
            if (cVar.f25448l.getAlpha() != 1.0f && !this.f23462r) {
                this.f23462r = true;
                cVar.f25448l.animate().cancel();
                cVar.f25448l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: ep.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f25448l.getAlpha() == 0.0f || this.f23461q) {
        } else {
            this.f23461q = true;
            cVar.f25448l.animate().cancel();
            cVar.f25448l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: ep.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f23461q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f23462r = false;
    }

    private final void c0(boolean z10) {
        if (this.f23454j.size() >= 2 && z10) {
            this.f23446b.f25451o.setVisibility(0);
        } else {
            this.f23446b.f25451o.setVisibility(4);
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

    private static final void g0(fp.c cVar, w wVar, x5.d.a aVar, mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a) {
        cVar.f25440d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0308a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f23454j.get((wVar.f23454j.indexOf(aVar.g()) + 1) % wVar.f23454j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, fp.c cVar) {
        wVar.f23460p = false;
        cVar.f25442f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, mn.i iVar) {
        mn.w0 w0Var = wVar.f23448d;
        PreviewView previewviewSelfieCamera = wVar.f23446b.f25454r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        pn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(fp.c cVar) {
        cVar.f25459w.setIntensity(0.0f);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0308a abstractC0308a) {
        wVar.f23459o = false;
        x5.d.a aVar = wVar.f23453i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0308a.h) abstractC0308a).c().invoke();
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(fp.c cVar, w wVar, x5.d.a aVar, mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0308a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0308a abstractC0308a, View view) {
        ((x5.d.a.AbstractC0308a.e) abstractC0308a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, mn.i iVar, x5.d.a.AbstractC0308a abstractC0308a) {
        gs.i.d(wVar.f23450f, gs.m0.c(), null, new j(aVar, iVar, abstractC0308a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f23475c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f20513p;
                        }
                        throw new ir.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f20511i;
                    } else {
                        return SelfieOverlayView.e.f20510e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f20510e;
                } else {
                    return SelfieOverlayView.e.f20511i;
                }
            }
            return SelfieOverlayView.e.f20509d;
        }
        return SelfieOverlayView.e.f20512o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f23459o) {
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
    @Override // vm.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(ep.x5.d.a r21, vm.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ep.w.a(ep.x5$d$a, vm.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
