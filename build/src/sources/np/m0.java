package np;

import android.content.Context;
import android.os.Build;
import android.view.View;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.selfie.view.OldSelfieOverlayView;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import java.io.File;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import np.m0;
import np.x5;
import vn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements en.k {

    /* renamed from: b  reason: collision with root package name */
    private final op.a f39237b;

    /* renamed from: c  reason: collision with root package name */
    private final vn.i f39238c;

    /* renamed from: d  reason: collision with root package name */
    private final vn.w0 f39239d;

    /* renamed from: e  reason: collision with root package name */
    private Job f39240e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f39241f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f39242g;

    /* renamed from: h  reason: collision with root package name */
    private Job f39243h;

    /* renamed from: i  reason: collision with root package name */
    private final int f39244i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f39242g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f39237b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: np.l0
                @Override // java.lang.Runnable
                public final void run() {
                    m0.a.b(m0.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f39246a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0576c.values().length];
            try {
                iArr[x5.d.c.EnumC0576c.f39910d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39913o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39916r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39911e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39914p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39917s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39920v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39912i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39915q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39918t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39919u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0576c.f39921w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f39246a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39247d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f39249d;

            a(m0 m0Var) {
                this.f39249d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(vn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f52758a)) {
                    Function1 function12 = this.f39249d.f39241f;
                    if (function12 != null) {
                        function12.invoke(new vn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f39249d.f39241f) != null) {
                    function1.invoke(new vn.u0());
                }
                return Unit.f31765a;
            }
        }

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39247d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = vn.j.a(m0.this.f39238c.c());
                a aVar = new a(m0.this);
                this.f39247d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39250d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f39252i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39253d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f39254e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f39254e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                xr.b.f();
                if (this.f39253d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((vn.x) this.f39254e, x.e.f52761a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(vn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39255d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f39256e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f39257i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f39256e = bVar;
                this.f39257i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f39256e, this.f39257i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                xr.b.f();
                if (this.f39255d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f39256e).b().invoke(this.f39257i.f39238c.b());
                    return Unit.f31765a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f39252i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f39252i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (ss.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (ps.g.g(r7, r1, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x0053, code lost:
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
                java.lang.Object r0 = xr.b.f()
                int r1 = r6.f39250d
                r2 = 0
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L1f
                if (r1 == r4) goto L1b
                if (r1 != r3) goto L13
                kotlin.c.b(r7)
                goto L54
            L13:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1b:
                kotlin.c.b(r7)
                goto L3e
            L1f:
                kotlin.c.b(r7)
                np.m0 r7 = np.m0.this
                vn.i r7 = np.m0.l(r7)
                ss.j0 r7 = r7.c()
                np.m0$d$a r1 = new np.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ss.g.H(r7, r1)
                r6.f39250d = r4
                java.lang.Object r7 = ss.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                ps.c1 r7 = ps.m0.c()
                np.m0$d$b r1 = new np.m0$d$b
                np.x5$d$c$b r4 = r6.f39252i
                np.m0 r5 = np.m0.this
                r1.<init>(r4, r5, r2)
                r6.f39250d = r3
                java.lang.Object r7 = ps.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: np.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39258d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f39259e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f39260i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f39259e = bVar;
            this.f39260i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f39259e, this.f39260i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39258d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f39259e).b();
                this.f39258d = 1;
                if (ps.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f39260i.f39238c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f39260i.f39241f;
                if (function1 != null) {
                    function1.invoke(new vn.v0());
                }
                return Unit.f31765a;
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39261d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f39263i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f39264o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39265d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f39266e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f39267i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f39266e = bVar;
                this.f39267i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f39266e, this.f39267i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ps.i0.a(r4, r6) == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:18:0x0059, code lost:
                if (r7 == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:19:0x005b, code lost:
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
                    java.lang.Object r0 = xr.b.f()
                    int r1 = r6.f39265d
                    r2 = 2
                    r3 = 1
                    if (r1 == 0) goto L24
                    if (r1 == r3) goto L20
                    if (r1 != r2) goto L18
                    kotlin.c.b(r7)
                    kotlin.Result r7 = (kotlin.Result) r7
                    java.lang.Object r7 = r7.j()
                    goto L5c
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
                    np.x5$d$c$b r7 = r6.f39266e
                    np.x5$d$c$b$b r7 = (np.x5.d.c.b.C0573b) r7
                    long r4 = r7.c()
                    r6.f39265d = r3
                    java.lang.Object r7 = ps.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    np.m0 r7 = r6.f39267i
                    vn.i r7 = np.m0.l(r7)
                    ss.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof vn.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f31765a
                    return r7
                L4d:
                    np.m0 r7 = r6.f39267i
                    vn.i r7 = np.m0.l(r7)
                    r6.f39265d = r2
                    java.lang.Object r7 = r7.i(r6)
                    if (r7 != r0) goto L5c
                L5b:
                    return r0
                L5c:
                    boolean r0 = kotlin.Result.h(r7)
                    if (r0 == 0) goto L67
                    java.io.File r7 = (java.io.File) r7
                    r7.delete()
                L67:
                    np.m0 r7 = r6.f39267i
                    kotlin.jvm.functions.Function1 r7 = np.m0.m(r7)
                    if (r7 == 0) goto L77
                    vn.v0 r0 = new vn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f31765a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: np.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f39263i = jVar;
            this.f39264o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f39263i, this.f39264o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = xr.b.f();
            int i10 = this.f39261d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.i iVar = m0.this.f39238c;
                this.f39261d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f39263i;
            x5.d.c.b bVar = this.f39264o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f39240e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ps.i.d(jVar, ps.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f39240e = d10;
            }
            x5.d.c.b bVar2 = this.f39264o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0573b) bVar2).d().invoke(e10);
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39268d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f39270i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f39271o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f39270i = bVar;
            this.f39271o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f39270i, this.f39271o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = xr.b.f();
            int i11 = this.f39268d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.i iVar = m0.this.f39238c;
                this.f39268d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f39270i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0574c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f39271o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof vn.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39272d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f39274i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f39274i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f39274i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = xr.b.f();
            int i10 = this.f39272d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.i iVar = m0.this.f39238c;
                this.f39272d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f39274i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0575d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f39274i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0575d) bVar2).c().invoke(e10);
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public m0(op.a binding, vn.i cameraController, vn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f39237b = binding;
        this.f39238c = cameraController;
        this.f39239d = selfieDirectionFeed;
        binding.f42555l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        sp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f39244i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(op.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f42555l.E()) {
            aVar.f42555l.B(new Function0() { // from class: np.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit B;
                    B = m0.B(x5.d.c.b.this);
                    return B;
                }
            });
        } else {
            ((x5.d.c.b.e) bVar).b().invoke();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(x5.d.c.b bVar) {
        ((x5.d.c.b.e) bVar).b().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0574c) bVar).c().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f31765a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        ps.i.d(jVar, ps.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0576c enumC0576c) {
        switch (b.f39246a[enumC0576c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f19570d;
            case 2:
                return OldSelfieOverlayView.b.f19573o;
            case 3:
                return OldSelfieOverlayView.b.f19576r;
            case 4:
                return OldSelfieOverlayView.b.f19571e;
            case 5:
                return OldSelfieOverlayView.b.f19574p;
            case 6:
                return OldSelfieOverlayView.b.f19577s;
            case 7:
                return OldSelfieOverlayView.b.f19580v;
            case 8:
                return OldSelfieOverlayView.b.f19572i;
            case 9:
                return OldSelfieOverlayView.b.f19575q;
            case 10:
                return OldSelfieOverlayView.b.f19578t;
            case 11:
                return OldSelfieOverlayView.b.f19579u;
            case 12:
                return OldSelfieOverlayView.b.f19581w;
            default:
                throw new rr.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: np.i0
            @Override // java.lang.Runnable
            public final void run() {
                m0.s(textView);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(TextView textView) {
        textView.setAlpha(1.0f);
        textView.setVisibility(8);
    }

    private final void t(StepStyles.SelfieStepStyle selfieStepStyle) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView title = this.f39237b.f42556m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.f0.n(title, titleStyleValue, null, 2, null);
            this.f39237b.f42556m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f39237b.f42549f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            lq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f39237b.f42549f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f39237b.f42551h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f39243h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f39237b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ps.i.d(androidx.lifecycle.p.a(sp.f.i(context)), null, null, new c(null), 3, null);
        this.f39243h = d10;
    }

    private static final void w(op.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f42545b.setEnabled(false);
        if (!aVar.f42555l.E()) {
            aVar.f42555l.B(new Function0() { // from class: np.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit x10;
                    x10 = m0.x(androidx.lifecycle.j.this, m0Var, bVar);
                    return x10;
                }
            });
        } else {
            F(jVar, m0Var, bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        F(jVar, m0Var, bVar);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(op.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // en.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, en.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f39241f = rendering.h();
        this.f39242g = rendering.j();
        this.f39238c.d();
        this.f39238c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f39237b.f42547d.setVisibility(8);
        } else {
            this.f39237b.f42547d.setVisibility(0);
        }
        this.f39239d.k(rendering.k());
        final op.a aVar = this.f39237b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(sp.f.i(context));
        TextView textView = this.f39237b.f42556m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f39237b.f42556m;
        CharSequence text = aVar.f42556m.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        if (text.length() == 0) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textView2.setVisibility(i10);
        String d11 = rendering.d();
        if (d11 != null) {
            str = d11;
        }
        if (!Intrinsics.areEqual(str, aVar.f42549f.getText())) {
            aVar.f42549f.setText(str);
        }
        aVar.f42555l.setLeftPoseImage(rendering.a().a());
        aVar.f42555l.setRightPoseImage(rendering.a().b());
        int i11 = b.f39246a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0575d) {
                        TextView textView3 = aVar.f42549f;
                        textView3.announceForAccessibility(textView3.getContext().getString(kp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f42549f;
                    textView4.announceForAccessibility(textView4.getContext().getString(kp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f42549f;
                textView5.announceForAccessibility(textView5.getContext().getString(kp.e.P));
            }
        } else {
            TextView textView6 = aVar.f42549f;
            textView6.announceForAccessibility(textView6.getContext().getString(kp.e.N));
        }
        aVar.f42545b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0573b)) {
            aVar.f42548e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f42550g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f42545b.setVisibility(4);
            ps.i.d(a10, ps.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f42555l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f42550g.setVisibility(0);
            aVar.f42545b.setVisibility(4);
            Job job = this.f39240e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = ps.i.d(a10, ps.m0.b(), null, new e(e10, this, null), 2, null);
            this.f39240e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f42545b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f42555l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: np.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0573b) {
            x5.d.c.b.C0573b c0573b = (x5.d.c.b.C0573b) e10;
            if (c0573b.e()) {
                ps.i.d(a10, ps.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f42545b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f42548e.getTag(), Integer.valueOf(c0573b.b()))) {
                TextView countdown = aVar.f42548e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0573b.b(), 1) * 1.5f);
                aVar.f42548e.setText(String.valueOf(c0573b.b()));
                aVar.f42548e.setTag(Integer.valueOf(c0573b.b()));
            }
            OldSelfieOverlayView.J(aVar.f42555l, G(c0573b.a()), c0573b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f39240e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f42545b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f42555l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f39244i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0575d) {
            aVar.f42545b.setVisibility(0);
            aVar.f42545b.setOnClickListener(new View.OnClickListener() { // from class: np.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(op.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0575d c0575d = (x5.d.c.b.C0575d) e10;
            if (c0575d.b()) {
                aVar.f42545b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f42555l, G(c0575d.a()), c0575d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f42545b.setVisibility(0);
            aVar.f42545b.setOnClickListener(new View.OnClickListener() { // from class: np.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(op.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f42555l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f42545b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f42555l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0574c) {
            aVar.f42545b.setVisibility(4);
            x5.d.c.b.C0574c c0574c = (x5.d.c.b.C0574c) e10;
            if (c0574c.e()) {
                Job job3 = this.f39240e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                ps.i.d(a10, ps.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f42555l.I(G(c0574c.a()), c0574c.d(), new Function0() { // from class: np.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new rr.p();
        }
        aq.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: np.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: np.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f42551h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f39237b.getRoot().getContext(), sp.j.f49936a);
            this.f39237b.f42555l.A(l10);
            bq.c.a(viewEnvironment, c10);
        }
    }
}
