package mp;

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
import mp.m0;
import mp.x5;
import un.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements dn.k {

    /* renamed from: b  reason: collision with root package name */
    private final np.a f37552b;

    /* renamed from: c  reason: collision with root package name */
    private final un.i f37553c;

    /* renamed from: d  reason: collision with root package name */
    private final un.w0 f37554d;

    /* renamed from: e  reason: collision with root package name */
    private Job f37555e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f37556f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f37557g;

    /* renamed from: h  reason: collision with root package name */
    private Job f37558h;

    /* renamed from: i  reason: collision with root package name */
    private final int f37559i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f37557g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f37552b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: mp.l0
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
        public static final /* synthetic */ int[] f37561a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0522c.values().length];
            try {
                iArr[x5.d.c.EnumC0522c.f38225d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38228o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38231r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38226e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38229p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38232s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38235v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38227i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38230q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38233t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38234u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0522c.f38236w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f37561a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37562d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f37564d;

            a(m0 m0Var) {
                this.f37564d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(un.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f51898a)) {
                    Function1 function12 = this.f37564d.f37556f;
                    if (function12 != null) {
                        function12.invoke(new un.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f37564d.f37556f) != null) {
                    function1.invoke(new un.u0());
                }
                return Unit.f32056a;
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
            Object f10 = wr.b.f();
            int i10 = this.f37562d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = un.j.a(m0.this.f37553c.c());
                a aVar = new a(m0.this);
                this.f37562d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37565d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f37567i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37568d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f37569e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f37569e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f37568d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((un.x) this.f37569e, x.e.f51901a));
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
            int f37570d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f37571e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f37572i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f37571e = bVar;
                this.f37572i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f37571e, this.f37572i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f37570d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f37571e).b().invoke(this.f37572i.f37553c.b());
                    return Unit.f32056a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f37567i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f37567i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (rs.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (os.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = wr.b.f()
                int r1 = r6.f37565d
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
                mp.m0 r7 = mp.m0.this
                un.i r7 = mp.m0.l(r7)
                rs.j0 r7 = r7.c()
                mp.m0$d$a r1 = new mp.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = rs.g.H(r7, r1)
                r6.f37565d = r4
                java.lang.Object r7 = rs.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                os.c1 r7 = os.m0.c()
                mp.m0$d$b r1 = new mp.m0$d$b
                mp.x5$d$c$b r4 = r6.f37567i
                mp.m0 r5 = mp.m0.this
                r1.<init>(r4, r5, r2)
                r6.f37565d = r3
                java.lang.Object r7 = os.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f32056a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: mp.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37573d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f37574e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f37575i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f37574e = bVar;
            this.f37575i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f37574e, this.f37575i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f37573d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f37574e).b();
                this.f37573d = 1;
                if (os.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f37575i.f37553c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f37575i.f37556f;
                if (function1 != null) {
                    function1.invoke(new un.v0());
                }
                return Unit.f32056a;
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
        int f37576d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f37578i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f37579o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37580d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f37581e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f37582i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f37581e = bVar;
                this.f37582i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f37581e, this.f37582i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (os.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r6.f37580d
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
                    mp.x5$d$c$b r7 = r6.f37581e
                    mp.x5$d$c$b$b r7 = (mp.x5.d.c.b.C0519b) r7
                    long r4 = r7.c()
                    r6.f37580d = r3
                    java.lang.Object r7 = os.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    mp.m0 r7 = r6.f37582i
                    un.i r7 = mp.m0.l(r7)
                    rs.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof un.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f32056a
                    return r7
                L4d:
                    mp.m0 r7 = r6.f37582i
                    un.i r7 = mp.m0.l(r7)
                    r6.f37580d = r2
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
                    mp.m0 r7 = r6.f37582i
                    kotlin.jvm.functions.Function1 r7 = mp.m0.m(r7)
                    if (r7 == 0) goto L77
                    un.v0 r0 = new un.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f32056a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: mp.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f37578i = jVar;
            this.f37579o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f37578i, this.f37579o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = wr.b.f();
            int i10 = this.f37576d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = m0.this.f37553c;
                this.f37576d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f37578i;
            x5.d.c.b bVar = this.f37579o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f37555e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = os.i.d(jVar, os.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f37555e = d10;
            }
            x5.d.c.b bVar2 = this.f37579o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0519b) bVar2).d().invoke(e10);
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
        int f37583d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f37585i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f37586o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f37585i = bVar;
            this.f37586o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f37585i, this.f37586o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = wr.b.f();
            int i11 = this.f37583d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = m0.this.f37553c;
                this.f37583d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f37585i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0520c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f37586o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof un.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f32056a;
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
        int f37587d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f37589i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f37589i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f37589i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = wr.b.f();
            int i10 = this.f37587d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                un.i iVar = m0.this.f37553c;
                this.f37587d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f37589i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0521d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f37589i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0521d) bVar2).c().invoke(e10);
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public m0(np.a binding, un.i cameraController, un.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f37552b = binding;
        this.f37553c = cameraController;
        this.f37554d = selfieDirectionFeed;
        binding.f41128l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        rp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f37559i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(np.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f41128l.E()) {
            aVar.f41128l.B(new Function0() { // from class: mp.k0
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
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0520c) bVar).c().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f32056a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        os.i.d(jVar, os.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0522c enumC0522c) {
        switch (b.f37561a[enumC0522c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f19430d;
            case 2:
                return OldSelfieOverlayView.b.f19433o;
            case 3:
                return OldSelfieOverlayView.b.f19436r;
            case 4:
                return OldSelfieOverlayView.b.f19431e;
            case 5:
                return OldSelfieOverlayView.b.f19434p;
            case 6:
                return OldSelfieOverlayView.b.f19437s;
            case 7:
                return OldSelfieOverlayView.b.f19440v;
            case 8:
                return OldSelfieOverlayView.b.f19432i;
            case 9:
                return OldSelfieOverlayView.b.f19435q;
            case 10:
                return OldSelfieOverlayView.b.f19438t;
            case 11:
                return OldSelfieOverlayView.b.f19439u;
            case 12:
                return OldSelfieOverlayView.b.f19441w;
            default:
                throw new qr.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: mp.i0
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
            TextView title = this.f37552b.f41129m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            kq.f0.n(title, titleStyleValue, null, 2, null);
            this.f37552b.f41129m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f37552b.f41122f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            kq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f37552b.f41122f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f37552b.f41124h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f37558h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f37552b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = os.i.d(androidx.lifecycle.p.a(rp.f.i(context)), null, null, new c(null), 3, null);
        this.f37558h = d10;
    }

    private static final void w(np.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f41118b.setEnabled(false);
        if (!aVar.f41128l.E()) {
            aVar.f41128l.B(new Function0() { // from class: mp.j0
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
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(np.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // dn.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, dn.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f37556f = rendering.h();
        this.f37557g = rendering.j();
        this.f37553c.d();
        this.f37553c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f37552b.f41120d.setVisibility(8);
        } else {
            this.f37552b.f41120d.setVisibility(0);
        }
        this.f37554d.k(rendering.k());
        final np.a aVar = this.f37552b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(rp.f.i(context));
        TextView textView = this.f37552b.f41129m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f37552b.f41129m;
        CharSequence text = aVar.f41129m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f41122f.getText())) {
            aVar.f41122f.setText(str);
        }
        aVar.f41128l.setLeftPoseImage(rendering.a().a());
        aVar.f41128l.setRightPoseImage(rendering.a().b());
        int i11 = b.f37561a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0521d) {
                        TextView textView3 = aVar.f41122f;
                        textView3.announceForAccessibility(textView3.getContext().getString(jp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f41122f;
                    textView4.announceForAccessibility(textView4.getContext().getString(jp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f41122f;
                textView5.announceForAccessibility(textView5.getContext().getString(jp.e.P));
            }
        } else {
            TextView textView6 = aVar.f41122f;
            textView6.announceForAccessibility(textView6.getContext().getString(jp.e.N));
        }
        aVar.f41118b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0519b)) {
            aVar.f41121e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f41123g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f41118b.setVisibility(4);
            os.i.d(a10, os.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f41128l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f41123g.setVisibility(0);
            aVar.f41118b.setVisibility(4);
            Job job = this.f37555e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = os.i.d(a10, os.m0.b(), null, new e(e10, this, null), 2, null);
            this.f37555e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f41118b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f41128l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: mp.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0519b) {
            x5.d.c.b.C0519b c0519b = (x5.d.c.b.C0519b) e10;
            if (c0519b.e()) {
                os.i.d(a10, os.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f41118b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f41121e.getTag(), Integer.valueOf(c0519b.b()))) {
                TextView countdown = aVar.f41121e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0519b.b(), 1) * 1.5f);
                aVar.f41121e.setText(String.valueOf(c0519b.b()));
                aVar.f41121e.setTag(Integer.valueOf(c0519b.b()));
            }
            OldSelfieOverlayView.J(aVar.f41128l, G(c0519b.a()), c0519b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f37555e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f41118b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f41128l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f37559i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0521d) {
            aVar.f41118b.setVisibility(0);
            aVar.f41118b.setOnClickListener(new View.OnClickListener() { // from class: mp.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(np.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0521d c0521d = (x5.d.c.b.C0521d) e10;
            if (c0521d.b()) {
                aVar.f41118b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f41128l, G(c0521d.a()), c0521d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f41118b.setVisibility(0);
            aVar.f41118b.setOnClickListener(new View.OnClickListener() { // from class: mp.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(np.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f41128l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f41118b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f41128l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0520c) {
            aVar.f41118b.setVisibility(4);
            x5.d.c.b.C0520c c0520c = (x5.d.c.b.C0520c) e10;
            if (c0520c.e()) {
                Job job3 = this.f37555e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                os.i.d(a10, os.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f41128l.I(G(c0520c.a()), c0520c.d(), new Function0() { // from class: mp.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new qr.p();
        }
        zp.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: mp.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: mp.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f41124h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f37552b.getRoot().getContext(), rp.j.f49111a);
            this.f37552b.f41128l.A(l10);
            aq.c.a(viewEnvironment, c10);
        }
    }
}
