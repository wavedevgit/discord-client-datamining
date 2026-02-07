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
    private final np.c f37769b;

    /* renamed from: c  reason: collision with root package name */
    private final un.t f37770c;

    /* renamed from: d  reason: collision with root package name */
    private final un.w0 f37771d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37772e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f37773f;

    /* renamed from: g  reason: collision with root package name */
    private un.i f37774g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f37775h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f37776i;

    /* renamed from: j  reason: collision with root package name */
    private List f37777j;

    /* renamed from: k  reason: collision with root package name */
    private Job f37778k;

    /* renamed from: l  reason: collision with root package name */
    private Job f37779l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f37780m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f37781n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37782o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37783p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f37784q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f37785r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f37786s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f37787t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f37788u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f37789v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f37790w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f37791x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f37792y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37793d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: mp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0513a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f37795d;

            C0513a(w wVar) {
                this.f37795d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f37795d;
                TextView realTimeHint = wVar.f37769b.f41157t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f32056a;
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
            int i10 = this.f37793d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = rs.g.k(w.this.f37792y, 300L);
                C0513a c0513a = new C0513a(w.this);
                this.f37793d = 1;
                if (k10.collect(c0513a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37796a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f37797b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f37798c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f37335d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f37336e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f37337i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f37796a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f51880d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f51881e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f51882i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f37797b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f38157d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f38158e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f38159i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f38160o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f38161p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f37798c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37800e;

        c(un.i iVar) {
            this.f37800e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, un.i iVar) {
            Function0 function0 = wVar.f37781n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f37769b.getRoot();
            final w wVar = w.this;
            final un.i iVar = this.f37800e;
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
        final /* synthetic */ x5.d.a f37802b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f37803a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f51880d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f51881e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f51882i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f37803a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f37802b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, un.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f32056a;
        }

        @Override // un.y
        public void a() {
            t.a aVar;
            un.t tVar = w.this.f37770c;
            PreviewView previewviewSelfieCamera = w.this.f37769b.f41155r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f37803a[this.f37802b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f51853i;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    aVar = t.a.f51852e;
                }
            } else {
                aVar = t.a.f51851d;
            }
            t.a aVar2 = aVar;
            un.w0 w0Var = w.this.f37771d;
            final x5.d.a aVar3 = this.f37802b;
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
        int f37804d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37805e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f37806i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f37807d;

            a(w wVar) {
                this.f37807d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(un.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f51898a)) {
                    Function1 function12 = this.f37807d.f37780m;
                    if (function12 != null) {
                        function12.invoke(new un.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f37807d.f37780m) != null) {
                    function1.invoke(new un.u0());
                }
                return Unit.f32056a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(un.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f37805e = iVar;
            this.f37806i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f37805e, this.f37806i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37804d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = un.j.a(this.f37805e.c());
                a aVar = new a(this.f37806i);
                this.f37804d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37808d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37809e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37810i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f37811o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f37809e = iVar;
            this.f37810i = abstractC0516a;
            this.f37811o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f37809e, this.f37810i, this.f37811o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = wr.b.f();
            int i11 = this.f37808d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = this.f37809e;
                this.f37808d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0516a abstractC0516a = this.f37810i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0516a.c cVar = (x5.d.a.AbstractC0516a.c) abstractC0516a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f37811o;
            x5.d.a.AbstractC0516a abstractC0516a2 = this.f37810i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof un.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0516a.c) abstractC0516a2).c().invoke();
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37812d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37813e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37814i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37815d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f37816e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f37816e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f37815d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((un.x) this.f37816e, x.e.f51901a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(un.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37817d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ un.i f37818e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0516a f37819i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
                super(2, continuation);
                this.f37818e = iVar;
                this.f37819i = abstractC0516a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f37818e, this.f37819i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = wr.b.f();
                int i11 = this.f37817d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    un.i iVar = this.f37818e;
                    this.f37817d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0516a.g) this.f37819i).b().invoke(this.f37818e.b());
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37813e = iVar;
            this.f37814i = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f37813e, this.f37814i, continuation);
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
                int r1 = r6.f37812d
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
                un.i r7 = r6.f37813e
                rs.j0 r7 = r7.c()
                mp.w$g$a r1 = new mp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = rs.g.H(r7, r1)
                r6.f37812d = r4
                java.lang.Object r7 = rs.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                os.c1 r7 = os.m0.c()
                mp.w$g$b r1 = new mp.w$g$b
                un.i r4 = r6.f37813e
                mp.x5$d$a$a r5 = r6.f37814i
                r1.<init>(r4, r5, r2)
                r6.f37812d = r3
                java.lang.Object r7 = os.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f32056a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37820d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37821e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ un.i f37822i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f37823o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0516a abstractC0516a, un.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f37821e = abstractC0516a;
            this.f37822i = iVar;
            this.f37823o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f37821e, this.f37822i, this.f37823o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37820d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0516a.i) this.f37821e).b();
                this.f37820d = 1;
                if (os.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f37822i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f37823o.f37780m;
                if (function1 != null) {
                    function1.invoke(new un.v0());
                }
                return Unit.f32056a;
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37824d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ un.i f37825e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f37826i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37827o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37828d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0516a f37829e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ un.i f37830i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f37831o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0516a abstractC0516a, un.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f37829e = abstractC0516a;
                this.f37830i = iVar;
                this.f37831o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f37829e, this.f37830i, this.f37831o, continuation);
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
                    int r1 = r6.f37828d
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
                    mp.x5$d$a$a r7 = r6.f37829e
                    mp.x5$d$a$a$b r7 = (mp.x5.d.a.AbstractC0516a.b) r7
                    long r4 = r7.c()
                    r6.f37828d = r3
                    java.lang.Object r7 = os.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    un.i r7 = r6.f37830i
                    rs.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof un.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f32056a
                    return r7
                L49:
                    un.i r7 = r6.f37830i
                    r6.f37828d = r2
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
                    mp.w r7 = r6.f37831o
                    kotlin.jvm.functions.Function1 r7 = mp.w.z(r7)
                    if (r7 == 0) goto L6f
                    un.v0 r0 = new un.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f32056a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: mp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(un.i iVar, w wVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37825e = iVar;
            this.f37826i = wVar;
            this.f37827o = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f37825e, this.f37826i, this.f37827o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = wr.b.f();
            int i10 = this.f37824d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = this.f37825e;
                this.f37824d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f37826i;
            x5.d.a.AbstractC0516a abstractC0516a = this.f37827o;
            un.i iVar2 = this.f37825e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f37779l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = os.i.d(wVar.f37773f, os.m0.b(), null, new a(abstractC0516a, iVar2, wVar, null), 2, null);
                wVar.f37779l = d10;
            }
            x5.d.a.AbstractC0516a abstractC0516a2 = this.f37827o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0516a.b) abstractC0516a2).d().invoke(e10);
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37832d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f37834i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ un.i f37835o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0516a f37836p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, un.i iVar, x5.d.a.AbstractC0516a abstractC0516a, Continuation continuation) {
            super(2, continuation);
            this.f37834i = aVar;
            this.f37835o = iVar;
            this.f37836p = abstractC0516a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f37834i, this.f37835o, this.f37836p, continuation);
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
                int r1 = r5.f37832d
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
                mp.x5$d$a r6 = r5.f37834i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                mp.w r6 = mp.w.this
                mp.w.G(r6, r3)
                r5.f37832d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = os.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                un.i r6 = r5.f37835o
                r5.f37832d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                mp.x5$d$a$a r0 = r5.f37836p
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
                mp.x5$d$a$a r0 = r5.f37836p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                mp.x5$d$a$a$d r0 = (mp.x5.d.a.AbstractC0516a.C0518d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                mp.x5$d$a r6 = r5.f37834i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                mp.w r6 = mp.w.this
                mp.w.G(r6, r0)
            L8b:
                mp.w r6 = mp.w.this
                mp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public w(np.c binding, un.t cameraPreview, un.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f37769b = binding;
        this.f37770c = cameraPreview;
        this.f37771d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f37772e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f37773f = androidx.lifecycle.p.a(rp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<wn.l> a10 = wn.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (wn.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f37777j = CollectionsKt.e0(arrayList);
        this.f37792y = rs.l0.a(null);
        ConstraintLayout root = this.f37769b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        os.i.d(this.f37773f, null, null, new a(null), 3, null);
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
        un.i iVar = this.f37774g;
        if (iVar != null && this.f37775h == aVar.g()) {
            return iVar;
        }
        Context context = this.f37769b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f37769b.f41142e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != ao.a.f6228i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f37797b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = wn.n.f54064i;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    nVar = wn.n.f54063e;
                }
            } else {
                nVar = wn.n.f54062d;
            }
            wn.m b10 = wn.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new un.s0());
                a10 = new un.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                un.w0 w0Var = this.f37771d;
                ao.a valueOf = ao.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new wn.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            un.t tVar = this.f37770c;
            PreviewView previewviewSelfieCamera = this.f37769b.f41155r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f37769b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        rp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f37774g = a10;
        this.f37775h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(un.i iVar) {
        Job d10;
        Job job = this.f37778k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f37769b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = os.i.d(androidx.lifecycle.p.a(rp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f37778k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f37769b.f41147j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f37789v) {
                this.f37789v = true;
                this.f37790w = false;
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
        } else if (finalizingCover.getVisibility() != 8 && !this.f37790w) {
            this.f37789v = false;
            this.f37790w = true;
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
        wVar.f37789v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f37790w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        un.i iVar = this.f37774g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f51880d) {
                    this.f37769b.f41159v.setVisibility(0);
                    Context context = this.f37769b.getRoot().getContext();
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
            } else if (b10 == v.b.f51880d) {
                this.f37769b.f41159v.setVisibility(8);
                Context context2 = this.f37769b.getRoot().getContext();
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
        np.c cVar = this.f37769b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f41148k.setText(str);
            if (cVar.f41148k.getAlpha() != 1.0f && !this.f37787t) {
                this.f37787t = true;
                this.f37786s = false;
                cVar.f41148k.animate().cancel();
                cVar.f41148k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: mp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f41148k.getAlpha() == 0.0f || this.f37786s) {
        } else {
            this.f37787t = false;
            this.f37786s = true;
            cVar.f41148k.animate().cancel();
            cVar.f41148k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: mp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f37786s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f37787t = false;
    }

    private final void Z(String str) {
        np.c cVar = this.f37769b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f41149l.setText(str);
            if (cVar.f41149l.getAlpha() != 1.0f && !this.f37785r) {
                this.f37785r = true;
                cVar.f41149l.animate().cancel();
                cVar.f41149l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: mp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f41149l.getAlpha() == 0.0f || this.f37784q) {
        } else {
            this.f37784q = true;
            cVar.f41149l.animate().cancel();
            cVar.f41149l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: mp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f37784q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f37785r = false;
    }

    private final void c0(boolean z10) {
        if (this.f37777j.size() >= 2 && z10) {
            this.f37769b.f41152o.setVisibility(0);
        } else {
            this.f37769b.f41152o.setVisibility(4);
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
        cVar.f41141d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0516a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f37777j.get((wVar.f37777j.indexOf(aVar.g()) + 1) % wVar.f37777j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, np.c cVar) {
        wVar.f37783p = false;
        cVar.f41143f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, un.i iVar) {
        un.w0 w0Var = wVar.f37771d;
        PreviewView previewviewSelfieCamera = wVar.f37769b.f41155r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        xn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(np.c cVar) {
        cVar.f41160w.setIntensity(0.0f);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0516a abstractC0516a) {
        wVar.f37782o = false;
        x5.d.a aVar = wVar.f37776i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0516a.h) abstractC0516a).c().invoke();
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f32056a;
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
        os.i.d(wVar.f37773f, os.m0.c(), null, new j(aVar, iVar, abstractC0516a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f37798c[bVar.ordinal()];
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
        if (this.f37782o) {
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
