package fp;

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
import fp.m0;
import fp.x5;
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
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements wm.k {

    /* renamed from: b  reason: collision with root package name */
    private final gp.a f24760b;

    /* renamed from: c  reason: collision with root package name */
    private final nn.i f24761c;

    /* renamed from: d  reason: collision with root package name */
    private final nn.w0 f24762d;

    /* renamed from: e  reason: collision with root package name */
    private Job f24763e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f24764f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f24765g;

    /* renamed from: h  reason: collision with root package name */
    private Job f24766h;

    /* renamed from: i  reason: collision with root package name */
    private final int f24767i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f24765g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f24760b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: fp.l0
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
        public static final /* synthetic */ int[] f24769a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0338c.values().length];
            try {
                iArr[x5.d.c.EnumC0338c.f25433d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25436o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25439r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25434e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25437p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25440s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25443v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25435i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25438q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25441t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25442u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0338c.f25444w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f24769a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24770d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f24772d;

            a(m0 m0Var) {
                this.f24772d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(nn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f42096a)) {
                    Function1 function12 = this.f24772d.f24764f;
                    if (function12 != null) {
                        function12.invoke(new nn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f24772d.f24764f) != null) {
                    function1.invoke(new nn.u0());
                }
                return Unit.f33074a;
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
            Object f10 = pr.b.f();
            int i10 = this.f24770d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = nn.j.a(m0.this.f24761c.c());
                a aVar = new a(m0.this);
                this.f24770d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24773d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f24775i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f24776d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f24777e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f24777e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f24776d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((nn.x) this.f24777e, x.e.f42099a));
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
            int f24778d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f24779e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f24780i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f24779e = bVar;
                this.f24780i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f24779e, this.f24780i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f24778d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f24779e).b().invoke(this.f24780i.f24761c.b());
                    return Unit.f33074a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f24775i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f24775i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (ks.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (hs.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = pr.b.f()
                int r1 = r6.f24773d
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
                fp.m0 r7 = fp.m0.this
                nn.i r7 = fp.m0.l(r7)
                ks.j0 r7 = r7.c()
                fp.m0$d$a r1 = new fp.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ks.g.H(r7, r1)
                r6.f24773d = r4
                java.lang.Object r7 = ks.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                hs.c1 r7 = hs.m0.c()
                fp.m0$d$b r1 = new fp.m0$d$b
                fp.x5$d$c$b r4 = r6.f24775i
                fp.m0 r5 = fp.m0.this
                r1.<init>(r4, r5, r2)
                r6.f24773d = r3
                java.lang.Object r7 = hs.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f33074a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: fp.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f24781d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f24782e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f24783i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f24782e = bVar;
            this.f24783i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f24782e, this.f24783i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f24781d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f24782e).b();
                this.f24781d = 1;
                if (hs.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f24783i.f24761c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f24783i.f24764f;
                if (function1 != null) {
                    function1.invoke(new nn.v0());
                }
                return Unit.f33074a;
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
        int f24784d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f24786i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f24787o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f24788d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f24789e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f24790i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f24789e = bVar;
                this.f24790i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f24789e, this.f24790i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (hs.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = pr.b.f()
                    int r1 = r6.f24788d
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
                    fp.x5$d$c$b r7 = r6.f24789e
                    fp.x5$d$c$b$b r7 = (fp.x5.d.c.b.C0335b) r7
                    long r4 = r7.c()
                    r6.f24788d = r3
                    java.lang.Object r7 = hs.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    fp.m0 r7 = r6.f24790i
                    nn.i r7 = fp.m0.l(r7)
                    ks.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof nn.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                L4d:
                    fp.m0 r7 = r6.f24790i
                    nn.i r7 = fp.m0.l(r7)
                    r6.f24788d = r2
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
                    fp.m0 r7 = r6.f24790i
                    kotlin.jvm.functions.Function1 r7 = fp.m0.m(r7)
                    if (r7 == 0) goto L77
                    nn.v0 r0 = new nn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f33074a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: fp.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f24786i = jVar;
            this.f24787o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f24786i, this.f24787o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = pr.b.f();
            int i10 = this.f24784d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                nn.i iVar = m0.this.f24761c;
                this.f24784d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f24786i;
            x5.d.c.b bVar = this.f24787o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f24763e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = hs.i.d(jVar, hs.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f24763e = d10;
            }
            x5.d.c.b bVar2 = this.f24787o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0335b) bVar2).d().invoke(e10);
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
        int f24791d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f24793i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f24794o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f24793i = bVar;
            this.f24794o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f24793i, this.f24794o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = pr.b.f();
            int i11 = this.f24791d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                nn.i iVar = m0.this.f24761c;
                this.f24791d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f24793i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0336c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f24794o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof nn.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f33074a;
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
        int f24795d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f24797i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f24797i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f24797i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = pr.b.f();
            int i10 = this.f24795d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                nn.i iVar = m0.this.f24761c;
                this.f24795d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f24797i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0337d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f24797i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0337d) bVar2).c().invoke(e10);
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public m0(gp.a binding, nn.i cameraController, nn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f24760b = binding;
        this.f24761c = cameraController;
        this.f24762d = selfieDirectionFeed;
        binding.f27320l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        kp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f24767i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(gp.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f27320l.E()) {
            aVar.f27320l.B(new Function0() { // from class: fp.k0
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
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0336c) bVar).c().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f33074a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        hs.i.d(jVar, hs.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0338c enumC0338c) {
        switch (b.f24769a[enumC0338c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f20062d;
            case 2:
                return OldSelfieOverlayView.b.f20065o;
            case 3:
                return OldSelfieOverlayView.b.f20068r;
            case 4:
                return OldSelfieOverlayView.b.f20063e;
            case 5:
                return OldSelfieOverlayView.b.f20066p;
            case 6:
                return OldSelfieOverlayView.b.f20069s;
            case 7:
                return OldSelfieOverlayView.b.f20072v;
            case 8:
                return OldSelfieOverlayView.b.f20064i;
            case 9:
                return OldSelfieOverlayView.b.f20067q;
            case 10:
                return OldSelfieOverlayView.b.f20070t;
            case 11:
                return OldSelfieOverlayView.b.f20071u;
            case 12:
                return OldSelfieOverlayView.b.f20073w;
            default:
                throw new jr.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: fp.i0
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
            TextView title = this.f24760b.f27321m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            dq.f0.n(title, titleStyleValue, null, 2, null);
            this.f24760b.f27321m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f24760b.f27314f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            dq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f24760b.f27314f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f24760b.f27316h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f24766h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f24760b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = hs.i.d(androidx.lifecycle.p.a(kp.f.i(context)), null, null, new c(null), 3, null);
        this.f24766h = d10;
    }

    private static final void w(gp.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f27310b.setEnabled(false);
        if (!aVar.f27320l.E()) {
            aVar.f27320l.B(new Function0() { // from class: fp.j0
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
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(gp.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // wm.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, wm.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f24764f = rendering.h();
        this.f24765g = rendering.j();
        this.f24761c.d();
        this.f24761c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f24760b.f27312d.setVisibility(8);
        } else {
            this.f24760b.f27312d.setVisibility(0);
        }
        this.f24762d.k(rendering.k());
        final gp.a aVar = this.f24760b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(kp.f.i(context));
        TextView textView = this.f24760b.f27321m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f24760b.f27321m;
        CharSequence text = aVar.f27321m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f27314f.getText())) {
            aVar.f27314f.setText(str);
        }
        aVar.f27320l.setLeftPoseImage(rendering.a().a());
        aVar.f27320l.setRightPoseImage(rendering.a().b());
        int i11 = b.f24769a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0337d) {
                        TextView textView3 = aVar.f27314f;
                        textView3.announceForAccessibility(textView3.getContext().getString(cp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f27314f;
                    textView4.announceForAccessibility(textView4.getContext().getString(cp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f27314f;
                textView5.announceForAccessibility(textView5.getContext().getString(cp.e.P));
            }
        } else {
            TextView textView6 = aVar.f27314f;
            textView6.announceForAccessibility(textView6.getContext().getString(cp.e.N));
        }
        aVar.f27310b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0335b)) {
            aVar.f27313e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f27315g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f27310b.setVisibility(4);
            hs.i.d(a10, hs.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f27320l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f27315g.setVisibility(0);
            aVar.f27310b.setVisibility(4);
            Job job = this.f24763e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = hs.i.d(a10, hs.m0.b(), null, new e(e10, this, null), 2, null);
            this.f24763e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f27310b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f27320l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: fp.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0335b) {
            x5.d.c.b.C0335b c0335b = (x5.d.c.b.C0335b) e10;
            if (c0335b.e()) {
                hs.i.d(a10, hs.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f27310b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f27313e.getTag(), Integer.valueOf(c0335b.b()))) {
                TextView countdown = aVar.f27313e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0335b.b(), 1) * 1.5f);
                aVar.f27313e.setText(String.valueOf(c0335b.b()));
                aVar.f27313e.setTag(Integer.valueOf(c0335b.b()));
            }
            OldSelfieOverlayView.J(aVar.f27320l, G(c0335b.a()), c0335b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f24763e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f27310b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f27320l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f24767i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0337d) {
            aVar.f27310b.setVisibility(0);
            aVar.f27310b.setOnClickListener(new View.OnClickListener() { // from class: fp.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(gp.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0337d c0337d = (x5.d.c.b.C0337d) e10;
            if (c0337d.b()) {
                aVar.f27310b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f27320l, G(c0337d.a()), c0337d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f27310b.setVisibility(0);
            aVar.f27310b.setOnClickListener(new View.OnClickListener() { // from class: fp.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(gp.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f27320l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f27310b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f27320l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0336c) {
            aVar.f27310b.setVisibility(4);
            x5.d.c.b.C0336c c0336c = (x5.d.c.b.C0336c) e10;
            if (c0336c.e()) {
                Job job3 = this.f24763e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                hs.i.d(a10, hs.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f27320l.I(G(c0336c.a()), c0336c.d(), new Function0() { // from class: fp.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new jr.p();
        }
        sp.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: fp.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: fp.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f27316h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        sp.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f24760b.getRoot().getContext(), kp.j.f36238a);
            this.f24760b.f27320l.A(l10);
            tp.c.a(viewEnvironment, c10);
        }
    }
}
