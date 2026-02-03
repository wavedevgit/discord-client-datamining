package hp;

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
import hp.m0;
import hp.x5;
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
import pn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements ym.k {

    /* renamed from: b  reason: collision with root package name */
    private final ip.a f27355b;

    /* renamed from: c  reason: collision with root package name */
    private final pn.i f27356c;

    /* renamed from: d  reason: collision with root package name */
    private final pn.w0 f27357d;

    /* renamed from: e  reason: collision with root package name */
    private Job f27358e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f27359f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f27360g;

    /* renamed from: h  reason: collision with root package name */
    private Job f27361h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27362i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f27360g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f27355b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: hp.l0
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
        public static final /* synthetic */ int[] f27364a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0366c.values().length];
            try {
                iArr[x5.d.c.EnumC0366c.f28028d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28031o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28034r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28029e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28032p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28035s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28038v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28030i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28033q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28036t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28037u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0366c.f28039w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f27364a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27365d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f27367d;

            a(m0 m0Var) {
                this.f27367d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(pn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f46388a)) {
                    Function1 function12 = this.f27367d.f27359f;
                    if (function12 != null) {
                        function12.invoke(new pn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f27367d.f27359f) != null) {
                    function1.invoke(new pn.u0());
                }
                return Unit.f32464a;
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
            Object f10 = rr.b.f();
            int i10 = this.f27365d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = pn.j.a(m0.this.f27356c.c());
                a aVar = new a(m0.this);
                this.f27365d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27368d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f27370i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f27371d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f27372e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f27372e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                rr.b.f();
                if (this.f27371d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((pn.x) this.f27372e, x.e.f46391a));
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
            int f27373d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f27374e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f27375i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f27374e = bVar;
                this.f27375i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f27374e, this.f27375i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                rr.b.f();
                if (this.f27373d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f27374e).b().invoke(this.f27375i.f27356c.b());
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f27370i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f27370i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (ms.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (js.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = rr.b.f()
                int r1 = r6.f27368d
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
                hp.m0 r7 = hp.m0.this
                pn.i r7 = hp.m0.l(r7)
                ms.j0 r7 = r7.c()
                hp.m0$d$a r1 = new hp.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ms.g.H(r7, r1)
                r6.f27368d = r4
                java.lang.Object r7 = ms.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                js.c1 r7 = js.m0.c()
                hp.m0$d$b r1 = new hp.m0$d$b
                hp.x5$d$c$b r4 = r6.f27370i
                hp.m0 r5 = hp.m0.this
                r1.<init>(r4, r5, r2)
                r6.f27368d = r3
                java.lang.Object r7 = js.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: hp.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f27376d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f27377e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f27378i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f27377e = bVar;
            this.f27378i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f27377e, this.f27378i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f27376d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f27377e).b();
                this.f27376d = 1;
                if (js.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f27378i.f27356c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f27378i.f27359f;
                if (function1 != null) {
                    function1.invoke(new pn.v0());
                }
                return Unit.f32464a;
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
        int f27379d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f27381i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f27382o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f27383d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f27384e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f27385i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f27384e = bVar;
                this.f27385i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f27384e, this.f27385i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (js.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r6.f27383d
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
                    hp.x5$d$c$b r7 = r6.f27384e
                    hp.x5$d$c$b$b r7 = (hp.x5.d.c.b.C0363b) r7
                    long r4 = r7.c()
                    r6.f27383d = r3
                    java.lang.Object r7 = js.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    hp.m0 r7 = r6.f27385i
                    pn.i r7 = hp.m0.l(r7)
                    ms.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof pn.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f32464a
                    return r7
                L4d:
                    hp.m0 r7 = r6.f27385i
                    pn.i r7 = hp.m0.l(r7)
                    r6.f27383d = r2
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
                    hp.m0 r7 = r6.f27385i
                    kotlin.jvm.functions.Function1 r7 = hp.m0.m(r7)
                    if (r7 == 0) goto L77
                    pn.v0 r0 = new pn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f32464a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: hp.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f27381i = jVar;
            this.f27382o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f27381i, this.f27382o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = rr.b.f();
            int i10 = this.f27379d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.i iVar = m0.this.f27356c;
                this.f27379d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f27381i;
            x5.d.c.b bVar = this.f27382o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f27358e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = js.i.d(jVar, js.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f27358e = d10;
            }
            x5.d.c.b bVar2 = this.f27382o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0363b) bVar2).d().invoke(e10);
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
        int f27386d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f27388i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f27389o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f27388i = bVar;
            this.f27389o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f27388i, this.f27389o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = rr.b.f();
            int i11 = this.f27386d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.i iVar = m0.this.f27356c;
                this.f27386d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f27388i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0364c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f27389o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof pn.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f32464a;
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
        int f27390d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f27392i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f27392i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f27392i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = rr.b.f();
            int i10 = this.f27390d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                pn.i iVar = m0.this.f27356c;
                this.f27390d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f27392i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0365d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f27392i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0365d) bVar2).c().invoke(e10);
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public m0(ip.a binding, pn.i cameraController, pn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f27355b = binding;
        this.f27356c = cameraController;
        this.f27357d = selfieDirectionFeed;
        binding.f30974l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        mp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f27362i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(ip.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f30974l.E()) {
            aVar.f30974l.B(new Function0() { // from class: hp.k0
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0364c) bVar).c().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f32464a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        js.i.d(jVar, js.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0366c enumC0366c) {
        switch (b.f27364a[enumC0366c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f19044d;
            case 2:
                return OldSelfieOverlayView.b.f19047o;
            case 3:
                return OldSelfieOverlayView.b.f19050r;
            case 4:
                return OldSelfieOverlayView.b.f19045e;
            case 5:
                return OldSelfieOverlayView.b.f19048p;
            case 6:
                return OldSelfieOverlayView.b.f19051s;
            case 7:
                return OldSelfieOverlayView.b.f19054v;
            case 8:
                return OldSelfieOverlayView.b.f19046i;
            case 9:
                return OldSelfieOverlayView.b.f19049q;
            case 10:
                return OldSelfieOverlayView.b.f19052t;
            case 11:
                return OldSelfieOverlayView.b.f19053u;
            case 12:
                return OldSelfieOverlayView.b.f19055w;
            default:
                throw new lr.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: hp.i0
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
            TextView title = this.f27355b.f30975m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, titleStyleValue, null, 2, null);
            this.f27355b.f30975m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f27355b.f30968f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            fq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f27355b.f30968f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f27355b.f30970h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f27361h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f27355b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = js.i.d(androidx.lifecycle.p.a(mp.f.i(context)), null, null, new c(null), 3, null);
        this.f27361h = d10;
    }

    private static final void w(ip.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f30964b.setEnabled(false);
        if (!aVar.f30974l.E()) {
            aVar.f30974l.B(new Function0() { // from class: hp.j0
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(ip.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // ym.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, ym.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f27359f = rendering.h();
        this.f27360g = rendering.j();
        this.f27356c.d();
        this.f27356c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f27355b.f30966d.setVisibility(8);
        } else {
            this.f27355b.f30966d.setVisibility(0);
        }
        this.f27357d.k(rendering.k());
        final ip.a aVar = this.f27355b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(mp.f.i(context));
        TextView textView = this.f27355b.f30975m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f27355b.f30975m;
        CharSequence text = aVar.f30975m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f30968f.getText())) {
            aVar.f30968f.setText(str);
        }
        aVar.f30974l.setLeftPoseImage(rendering.a().a());
        aVar.f30974l.setRightPoseImage(rendering.a().b());
        int i11 = b.f27364a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0365d) {
                        TextView textView3 = aVar.f30968f;
                        textView3.announceForAccessibility(textView3.getContext().getString(ep.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f30968f;
                    textView4.announceForAccessibility(textView4.getContext().getString(ep.e.Q));
                }
            } else {
                TextView textView5 = aVar.f30968f;
                textView5.announceForAccessibility(textView5.getContext().getString(ep.e.P));
            }
        } else {
            TextView textView6 = aVar.f30968f;
            textView6.announceForAccessibility(textView6.getContext().getString(ep.e.N));
        }
        aVar.f30964b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0363b)) {
            aVar.f30967e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f30969g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f30964b.setVisibility(4);
            js.i.d(a10, js.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f30974l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f30969g.setVisibility(0);
            aVar.f30964b.setVisibility(4);
            Job job = this.f27358e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = js.i.d(a10, js.m0.b(), null, new e(e10, this, null), 2, null);
            this.f27358e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f30964b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f30974l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: hp.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0363b) {
            x5.d.c.b.C0363b c0363b = (x5.d.c.b.C0363b) e10;
            if (c0363b.e()) {
                js.i.d(a10, js.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f30964b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f30967e.getTag(), Integer.valueOf(c0363b.b()))) {
                TextView countdown = aVar.f30967e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0363b.b(), 1) * 1.5f);
                aVar.f30967e.setText(String.valueOf(c0363b.b()));
                aVar.f30967e.setTag(Integer.valueOf(c0363b.b()));
            }
            OldSelfieOverlayView.J(aVar.f30974l, G(c0363b.a()), c0363b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f27358e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f30964b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f30974l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f27362i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0365d) {
            aVar.f30964b.setVisibility(0);
            aVar.f30964b.setOnClickListener(new View.OnClickListener() { // from class: hp.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(ip.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0365d c0365d = (x5.d.c.b.C0365d) e10;
            if (c0365d.b()) {
                aVar.f30964b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f30974l, G(c0365d.a()), c0365d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f30964b.setVisibility(0);
            aVar.f30964b.setOnClickListener(new View.OnClickListener() { // from class: hp.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(ip.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f30974l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f30964b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f30974l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0364c) {
            aVar.f30964b.setVisibility(4);
            x5.d.c.b.C0364c c0364c = (x5.d.c.b.C0364c) e10;
            if (c0364c.e()) {
                Job job3 = this.f27358e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                js.i.d(a10, js.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f30974l.I(G(c0364c.a()), c0364c.d(), new Function0() { // from class: hp.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new lr.p();
        }
        up.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: hp.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: hp.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f30970h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f27355b.getRoot().getContext(), mp.j.f38965a);
            this.f27355b.f30974l.A(l10);
            vp.c.a(viewEnvironment, c10);
        }
    }
}
