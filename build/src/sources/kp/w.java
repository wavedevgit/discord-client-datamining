package kp;

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
import kp.a1;
import kp.w;
import kp.x5;
import sn.t;
import sn.v;
import sn.x;
import sn.z;
import un.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements bn.k {

    /* renamed from: b  reason: collision with root package name */
    private final lp.c f35565b;

    /* renamed from: c  reason: collision with root package name */
    private final sn.t f35566c;

    /* renamed from: d  reason: collision with root package name */
    private final sn.w0 f35567d;

    /* renamed from: e  reason: collision with root package name */
    private final int f35568e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f35569f;

    /* renamed from: g  reason: collision with root package name */
    private sn.i f35570g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f35571h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f35572i;

    /* renamed from: j  reason: collision with root package name */
    private List f35573j;

    /* renamed from: k  reason: collision with root package name */
    private Job f35574k;

    /* renamed from: l  reason: collision with root package name */
    private Job f35575l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f35576m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f35577n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35578o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35579p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f35580q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f35581r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f35582s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f35583t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f35584u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f35585v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f35586w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f35587x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f35588y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f35589d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: kp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0459a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f35591d;

            C0459a(w wVar) {
                this.f35591d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f35591d;
                TextView realTimeHint = wVar.f35565b.f37153t;
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
            Object f10 = ur.b.f();
            int i10 = this.f35589d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = ps.g.k(w.this.f35588y, 300L);
                C0459a c0459a = new C0459a(w.this);
                this.f35589d = 1;
                if (k10.collect(c0459a, this) == f10) {
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
        public static final /* synthetic */ int[] f35592a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f35593b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f35594c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f35131d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f35132e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f35133i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f35592a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f49986d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f49987e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f49988i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f35593b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f35953d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f35954e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f35955i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f35956o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f35957p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f35594c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ sn.i f35596e;

        c(sn.i iVar) {
            this.f35596e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, sn.i iVar) {
            Function0 function0 = wVar.f35577n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f35565b.getRoot();
            final w wVar = w.this;
            final sn.i iVar = this.f35596e;
            root.post(new Runnable() { // from class: kp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements sn.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f35598b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f35599a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f49986d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f49987e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f49988i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f35599a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f35598b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, sn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f31988a;
        }

        @Override // sn.y
        public void a() {
            t.a aVar;
            sn.t tVar = w.this.f35566c;
            PreviewView previewviewSelfieCamera = w.this.f35565b.f37151r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f35599a[this.f35598b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f49959i;
                    } else {
                        throw new or.p();
                    }
                } else {
                    aVar = t.a.f49958e;
                }
            } else {
                aVar = t.a.f49957d;
            }
            t.a aVar2 = aVar;
            sn.w0 w0Var = w.this.f35567d;
            final x5.d.a aVar3 = this.f35598b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: kp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (sn.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f35600d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ sn.i f35601e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f35602i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f35603d;

            a(w wVar) {
                this.f35603d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(sn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f50004a)) {
                    Function1 function12 = this.f35603d.f35576m;
                    if (function12 != null) {
                        function12.invoke(new sn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f35603d.f35576m) != null) {
                    function1.invoke(new sn.u0());
                }
                return Unit.f31988a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(sn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f35601e = iVar;
            this.f35602i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f35601e, this.f35602i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f35600d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = sn.j.a(this.f35601e.c());
                a aVar = new a(this.f35602i);
                this.f35600d = 1;
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
        int f35604d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ sn.i f35605e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0462a f35606i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f35607o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f35605e = iVar;
            this.f35606i = abstractC0462a;
            this.f35607o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f35605e, this.f35606i, this.f35607o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = ur.b.f();
            int i11 = this.f35604d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.i iVar = this.f35605e;
                this.f35604d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0462a abstractC0462a = this.f35606i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0462a.c cVar = (x5.d.a.AbstractC0462a.c) abstractC0462a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f35607o;
            x5.d.a.AbstractC0462a abstractC0462a2 = this.f35606i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof sn.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0462a.c) abstractC0462a2).c().invoke();
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
        int f35608d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ sn.i f35609e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0462a f35610i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35611d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f35612e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f35612e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                ur.b.f();
                if (this.f35611d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((sn.x) this.f35612e, x.e.f50007a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(sn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35613d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ sn.i f35614e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0462a f35615i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a, Continuation continuation) {
                super(2, continuation);
                this.f35614e = iVar;
                this.f35615i = abstractC0462a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f35614e, this.f35615i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = ur.b.f();
                int i11 = this.f35613d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    sn.i iVar = this.f35614e;
                    this.f35613d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0462a.g) this.f35615i).b().invoke(this.f35614e.b());
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a, Continuation continuation) {
            super(2, continuation);
            this.f35609e = iVar;
            this.f35610i = abstractC0462a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f35609e, this.f35610i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (ps.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (ms.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = ur.b.f()
                int r1 = r6.f35608d
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
                sn.i r7 = r6.f35609e
                ps.j0 r7 = r7.c()
                kp.w$g$a r1 = new kp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ps.g.H(r7, r1)
                r6.f35608d = r4
                java.lang.Object r7 = ps.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                ms.c1 r7 = ms.m0.c()
                kp.w$g$b r1 = new kp.w$g$b
                sn.i r4 = r6.f35609e
                kp.x5$d$a$a r5 = r6.f35610i
                r1.<init>(r4, r5, r2)
                r6.f35608d = r3
                java.lang.Object r7 = ms.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: kp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
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
        int f35616d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0462a f35617e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ sn.i f35618i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f35619o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0462a abstractC0462a, sn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f35617e = abstractC0462a;
            this.f35618i = iVar;
            this.f35619o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f35617e, this.f35618i, this.f35619o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f35616d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0462a.i) this.f35617e).b();
                this.f35616d = 1;
                if (ms.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f35618i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f35619o.f35576m;
                if (function1 != null) {
                    function1.invoke(new sn.v0());
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
        int f35620d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ sn.i f35621e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f35622i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0462a f35623o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35624d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0462a f35625e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ sn.i f35626i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f35627o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0462a abstractC0462a, sn.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f35625e = abstractC0462a;
                this.f35626i = iVar;
                this.f35627o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f35625e, this.f35626i, this.f35627o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ms.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = ur.b.f()
                    int r1 = r6.f35624d
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
                    kp.x5$d$a$a r7 = r6.f35625e
                    kp.x5$d$a$a$b r7 = (kp.x5.d.a.AbstractC0462a.b) r7
                    long r4 = r7.c()
                    r6.f35624d = r3
                    java.lang.Object r7 = ms.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    sn.i r7 = r6.f35626i
                    ps.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof sn.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                L49:
                    sn.i r7 = r6.f35626i
                    r6.f35624d = r2
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
                    kp.w r7 = r6.f35627o
                    kotlin.jvm.functions.Function1 r7 = kp.w.z(r7)
                    if (r7 == 0) goto L6f
                    sn.v0 r0 = new sn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: kp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(sn.i iVar, w wVar, x5.d.a.AbstractC0462a abstractC0462a, Continuation continuation) {
            super(2, continuation);
            this.f35621e = iVar;
            this.f35622i = wVar;
            this.f35623o = abstractC0462a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f35621e, this.f35622i, this.f35623o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = ur.b.f();
            int i10 = this.f35620d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.i iVar = this.f35621e;
                this.f35620d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f35622i;
            x5.d.a.AbstractC0462a abstractC0462a = this.f35623o;
            sn.i iVar2 = this.f35621e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f35575l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ms.i.d(wVar.f35569f, ms.m0.b(), null, new a(abstractC0462a, iVar2, wVar, null), 2, null);
                wVar.f35575l = d10;
            }
            x5.d.a.AbstractC0462a abstractC0462a2 = this.f35623o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0462a.b) abstractC0462a2).d().invoke(e10);
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
        int f35628d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f35630i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ sn.i f35631o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0462a f35632p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a, Continuation continuation) {
            super(2, continuation);
            this.f35630i = aVar;
            this.f35631o = iVar;
            this.f35632p = abstractC0462a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f35630i, this.f35631o, this.f35632p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (ms.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = ur.b.f()
                int r1 = r5.f35628d
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
                kp.w r6 = kp.w.this
                kp.w.I(r6, r3)
                kp.x5$d$a r6 = r5.f35630i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                kp.w r6 = kp.w.this
                kp.w.G(r6, r3)
                r5.f35628d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ms.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                sn.i r6 = r5.f35631o
                r5.f35628d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                kp.x5$d$a$a r0 = r5.f35632p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                kp.x5$d$a$a$d r0 = (kp.x5.d.a.AbstractC0462a.C0464d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                kp.x5$d$a$a r0 = r5.f35632p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                kp.x5$d$a$a$d r0 = (kp.x5.d.a.AbstractC0462a.C0464d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                kp.x5$d$a r6 = r5.f35630i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                kp.w r6 = kp.w.this
                kp.w.G(r6, r0)
            L8b:
                kp.w r6 = kp.w.this
                kp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: kp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public w(lp.c binding, sn.t cameraPreview, sn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f35565b = binding;
        this.f35566c = cameraPreview;
        this.f35567d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f35568e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f35569f = androidx.lifecycle.p.a(pp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<un.l> a10 = un.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (un.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f35573j = CollectionsKt.e0(arrayList);
        this.f35588y = ps.l0.a(null);
        ConstraintLayout root = this.f35565b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        ms.i.d(this.f35569f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: kp.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: kp.d
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
        animate.withStartAction(new Runnable() { // from class: kp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: kp.n
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

    private final sn.i Q(x5.d.a aVar) {
        sn.i a10;
        un.n nVar;
        sn.i iVar = this.f35570g;
        if (iVar != null && this.f35571h == aVar.g()) {
            return iVar;
        }
        Context context = this.f35565b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f35565b.f37138e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != yn.a.f54864i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f35593b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = un.n.f51616i;
                    } else {
                        throw new or.p();
                    }
                } else {
                    nVar = un.n.f51615e;
                }
            } else {
                nVar = un.n.f51614d;
            }
            un.m b10 = un.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new sn.s0());
                a10 = new sn.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                sn.w0 w0Var = this.f35567d;
                yn.a valueOf = yn.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new un.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            sn.t tVar = this.f35566c;
            PreviewView previewviewSelfieCamera = this.f35565b.f37151r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f35565b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        pp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f35570g = a10;
        this.f35571h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(sn.i iVar) {
        Job d10;
        Job job = this.f35574k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f35565b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ms.i.d(androidx.lifecycle.p.a(pp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f35574k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f35565b.f37143j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f35585v) {
                this.f35585v = true;
                this.f35586w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: kp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f35586w) {
            this.f35585v = false;
            this.f35586w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: kp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f35585v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f35586w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        sn.i iVar = this.f35570g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f49986d) {
                    this.f35565b.f37155v.setVisibility(0);
                    Context context = this.f35565b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = pp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f49986d) {
                this.f35565b.f37155v.setVisibility(8);
                Context context2 = this.f35565b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = pp.f.a(context2);
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
        lp.c cVar = this.f35565b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f37144k.setText(str);
            if (cVar.f37144k.getAlpha() != 1.0f && !this.f35583t) {
                this.f35583t = true;
                this.f35582s = false;
                cVar.f37144k.animate().cancel();
                cVar.f37144k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: kp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f37144k.getAlpha() == 0.0f || this.f35582s) {
        } else {
            this.f35583t = false;
            this.f35582s = true;
            cVar.f37144k.animate().cancel();
            cVar.f37144k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: kp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f35582s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f35583t = false;
    }

    private final void Z(String str) {
        lp.c cVar = this.f35565b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f37145l.setText(str);
            if (cVar.f37145l.getAlpha() != 1.0f && !this.f35581r) {
                this.f35581r = true;
                cVar.f37145l.animate().cancel();
                cVar.f37145l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: kp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f37145l.getAlpha() == 0.0f || this.f35580q) {
        } else {
            this.f35580q = true;
            cVar.f37145l.animate().cancel();
            cVar.f37145l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: kp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f35580q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f35581r = false;
    }

    private final void c0(boolean z10) {
        if (this.f35573j.size() >= 2 && z10) {
            this.f35565b.f37148o.setVisibility(0);
        } else {
            this.f35565b.f37148o.setVisibility(4);
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

    private static final void g0(lp.c cVar, w wVar, x5.d.a aVar, sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a) {
        cVar.f37137d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0462a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f35573j.get((wVar.f35573j.indexOf(aVar.g()) + 1) % wVar.f35573j.size()));
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
    public static final void k0(w wVar, lp.c cVar) {
        wVar.f35579p = false;
        cVar.f37139f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, sn.i iVar) {
        sn.w0 w0Var = wVar.f35567d;
        PreviewView previewviewSelfieCamera = wVar.f35565b.f37151r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        vn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(lp.c cVar) {
        cVar.f37156w.setIntensity(0.0f);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0462a abstractC0462a) {
        wVar.f35578o = false;
        x5.d.a aVar = wVar.f35572i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0462a.h) abstractC0462a).c().invoke();
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
    public static final void r0(lp.c cVar, w wVar, x5.d.a aVar, sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0462a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0462a abstractC0462a, View view) {
        ((x5.d.a.AbstractC0462a.e) abstractC0462a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, sn.i iVar, x5.d.a.AbstractC0462a abstractC0462a) {
        ms.i.d(wVar.f35569f, ms.m0.c(), null, new j(aVar, iVar, abstractC0462a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f35594c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f19534p;
                        }
                        throw new or.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f19532i;
                    } else {
                        return SelfieOverlayView.e.f19531e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f19531e;
                } else {
                    return SelfieOverlayView.e.f19532i;
                }
            }
            return SelfieOverlayView.e.f19530d;
        }
        return SelfieOverlayView.e.f19533o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f35578o) {
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
    @Override // bn.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(kp.x5.d.a r21, bn.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kp.w.a(kp.x5$d$a, bn.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
