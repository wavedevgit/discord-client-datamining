package kp;

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
import kp.m0;
import kp.x5;
import sn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements bn.k {

    /* renamed from: b  reason: collision with root package name */
    private final lp.a f35348b;

    /* renamed from: c  reason: collision with root package name */
    private final sn.i f35349c;

    /* renamed from: d  reason: collision with root package name */
    private final sn.w0 f35350d;

    /* renamed from: e  reason: collision with root package name */
    private Job f35351e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f35352f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f35353g;

    /* renamed from: h  reason: collision with root package name */
    private Job f35354h;

    /* renamed from: i  reason: collision with root package name */
    private final int f35355i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f35353g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f35348b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: kp.l0
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
        public static final /* synthetic */ int[] f35357a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0468c.values().length];
            try {
                iArr[x5.d.c.EnumC0468c.f36021d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36024o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36027r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36022e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36025p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36028s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36031v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36023i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36026q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36029t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36030u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0468c.f36032w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f35357a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f35358d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f35360d;

            a(m0 m0Var) {
                this.f35360d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(sn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f50004a)) {
                    Function1 function12 = this.f35360d.f35352f;
                    if (function12 != null) {
                        function12.invoke(new sn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f35360d.f35352f) != null) {
                    function1.invoke(new sn.u0());
                }
                return Unit.f31988a;
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
            Object f10 = ur.b.f();
            int i10 = this.f35358d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = sn.j.a(m0.this.f35349c.c());
                a aVar = new a(m0.this);
                this.f35358d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f35361d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f35363i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35364d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f35365e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f35365e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                ur.b.f();
                if (this.f35364d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((sn.x) this.f35365e, x.e.f50007a));
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
            int f35366d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f35367e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f35368i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f35367e = bVar;
                this.f35368i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f35367e, this.f35368i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                ur.b.f();
                if (this.f35366d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f35367e).b().invoke(this.f35368i.f35349c.b());
                    return Unit.f31988a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f35363i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f35363i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (ps.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (ms.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = ur.b.f()
                int r1 = r6.f35361d
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
                kp.m0 r7 = kp.m0.this
                sn.i r7 = kp.m0.l(r7)
                ps.j0 r7 = r7.c()
                kp.m0$d$a r1 = new kp.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ps.g.H(r7, r1)
                r6.f35361d = r4
                java.lang.Object r7 = ps.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                ms.c1 r7 = ms.m0.c()
                kp.m0$d$b r1 = new kp.m0$d$b
                kp.x5$d$c$b r4 = r6.f35363i
                kp.m0 r5 = kp.m0.this
                r1.<init>(r4, r5, r2)
                r6.f35361d = r3
                java.lang.Object r7 = ms.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: kp.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f35369d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f35370e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f35371i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f35370e = bVar;
            this.f35371i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f35370e, this.f35371i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f35369d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f35370e).b();
                this.f35369d = 1;
                if (ms.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f35371i.f35349c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f35371i.f35352f;
                if (function1 != null) {
                    function1.invoke(new sn.v0());
                }
                return Unit.f31988a;
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
        int f35372d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f35374i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f35375o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35376d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f35377e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f35378i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f35377e = bVar;
                this.f35378i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f35377e, this.f35378i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ms.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = ur.b.f()
                    int r1 = r6.f35376d
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
                    kp.x5$d$c$b r7 = r6.f35377e
                    kp.x5$d$c$b$b r7 = (kp.x5.d.c.b.C0465b) r7
                    long r4 = r7.c()
                    r6.f35376d = r3
                    java.lang.Object r7 = ms.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    kp.m0 r7 = r6.f35378i
                    sn.i r7 = kp.m0.l(r7)
                    ps.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof sn.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                L4d:
                    kp.m0 r7 = r6.f35378i
                    sn.i r7 = kp.m0.l(r7)
                    r6.f35376d = r2
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
                    kp.m0 r7 = r6.f35378i
                    kotlin.jvm.functions.Function1 r7 = kp.m0.m(r7)
                    if (r7 == 0) goto L77
                    sn.v0 r0 = new sn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f31988a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: kp.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f35374i = jVar;
            this.f35375o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f35374i, this.f35375o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = ur.b.f();
            int i10 = this.f35372d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.i iVar = m0.this.f35349c;
                this.f35372d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f35374i;
            x5.d.c.b bVar = this.f35375o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f35351e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ms.i.d(jVar, ms.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f35351e = d10;
            }
            x5.d.c.b bVar2 = this.f35375o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0465b) bVar2).d().invoke(e10);
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
        int f35379d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f35381i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f35382o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f35381i = bVar;
            this.f35382o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f35381i, this.f35382o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = ur.b.f();
            int i11 = this.f35379d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.i iVar = m0.this.f35349c;
                this.f35379d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f35381i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0466c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f35382o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof sn.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f31988a;
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
        int f35383d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f35385i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f35385i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f35385i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = ur.b.f();
            int i10 = this.f35383d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                sn.i iVar = m0.this.f35349c;
                this.f35383d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f35385i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0467d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f35385i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0467d) bVar2).c().invoke(e10);
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public m0(lp.a binding, sn.i cameraController, sn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f35348b = binding;
        this.f35349c = cameraController;
        this.f35350d = selfieDirectionFeed;
        binding.f37124l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        pp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f35355i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(lp.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f37124l.E()) {
            aVar.f37124l.B(new Function0() { // from class: kp.k0
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0466c) bVar).c().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f31988a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        ms.i.d(jVar, ms.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0468c enumC0468c) {
        switch (b.f35357a[enumC0468c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f19450d;
            case 2:
                return OldSelfieOverlayView.b.f19453o;
            case 3:
                return OldSelfieOverlayView.b.f19456r;
            case 4:
                return OldSelfieOverlayView.b.f19451e;
            case 5:
                return OldSelfieOverlayView.b.f19454p;
            case 6:
                return OldSelfieOverlayView.b.f19457s;
            case 7:
                return OldSelfieOverlayView.b.f19460v;
            case 8:
                return OldSelfieOverlayView.b.f19452i;
            case 9:
                return OldSelfieOverlayView.b.f19455q;
            case 10:
                return OldSelfieOverlayView.b.f19458t;
            case 11:
                return OldSelfieOverlayView.b.f19459u;
            case 12:
                return OldSelfieOverlayView.b.f19461w;
            default:
                throw new or.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: kp.i0
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
            TextView title = this.f35348b.f37125m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            iq.f0.n(title, titleStyleValue, null, 2, null);
            this.f35348b.f37125m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f35348b.f37118f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            iq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f35348b.f37118f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f35348b.f37120h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f35354h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f35348b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ms.i.d(androidx.lifecycle.p.a(pp.f.i(context)), null, null, new c(null), 3, null);
        this.f35354h = d10;
    }

    private static final void w(lp.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f37114b.setEnabled(false);
        if (!aVar.f37124l.E()) {
            aVar.f37124l.B(new Function0() { // from class: kp.j0
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(lp.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // bn.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, bn.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f35352f = rendering.h();
        this.f35353g = rendering.j();
        this.f35349c.d();
        this.f35349c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f35348b.f37116d.setVisibility(8);
        } else {
            this.f35348b.f37116d.setVisibility(0);
        }
        this.f35350d.k(rendering.k());
        final lp.a aVar = this.f35348b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(pp.f.i(context));
        TextView textView = this.f35348b.f37125m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f35348b.f37125m;
        CharSequence text = aVar.f37125m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f37118f.getText())) {
            aVar.f37118f.setText(str);
        }
        aVar.f37124l.setLeftPoseImage(rendering.a().a());
        aVar.f37124l.setRightPoseImage(rendering.a().b());
        int i11 = b.f35357a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0467d) {
                        TextView textView3 = aVar.f37118f;
                        textView3.announceForAccessibility(textView3.getContext().getString(hp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f37118f;
                    textView4.announceForAccessibility(textView4.getContext().getString(hp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f37118f;
                textView5.announceForAccessibility(textView5.getContext().getString(hp.e.P));
            }
        } else {
            TextView textView6 = aVar.f37118f;
            textView6.announceForAccessibility(textView6.getContext().getString(hp.e.N));
        }
        aVar.f37114b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0465b)) {
            aVar.f37117e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f37119g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f37114b.setVisibility(4);
            ms.i.d(a10, ms.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f37124l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f37119g.setVisibility(0);
            aVar.f37114b.setVisibility(4);
            Job job = this.f35351e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = ms.i.d(a10, ms.m0.b(), null, new e(e10, this, null), 2, null);
            this.f35351e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f37114b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f37124l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: kp.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0465b) {
            x5.d.c.b.C0465b c0465b = (x5.d.c.b.C0465b) e10;
            if (c0465b.e()) {
                ms.i.d(a10, ms.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f37114b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f37117e.getTag(), Integer.valueOf(c0465b.b()))) {
                TextView countdown = aVar.f37117e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0465b.b(), 1) * 1.5f);
                aVar.f37117e.setText(String.valueOf(c0465b.b()));
                aVar.f37117e.setTag(Integer.valueOf(c0465b.b()));
            }
            OldSelfieOverlayView.J(aVar.f37124l, G(c0465b.a()), c0465b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f35351e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f37114b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f37124l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f35355i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0467d) {
            aVar.f37114b.setVisibility(0);
            aVar.f37114b.setOnClickListener(new View.OnClickListener() { // from class: kp.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(lp.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0467d c0467d = (x5.d.c.b.C0467d) e10;
            if (c0467d.b()) {
                aVar.f37114b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f37124l, G(c0467d.a()), c0467d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f37114b.setVisibility(0);
            aVar.f37114b.setOnClickListener(new View.OnClickListener() { // from class: kp.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(lp.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f37124l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f37114b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f37124l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0466c) {
            aVar.f37114b.setVisibility(4);
            x5.d.c.b.C0466c c0466c = (x5.d.c.b.C0466c) e10;
            if (c0466c.e()) {
                Job job3 = this.f35351e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                ms.i.d(a10, ms.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f37124l.I(G(c0466c.a()), c0466c.d(), new Function0() { // from class: kp.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new or.p();
        }
        xp.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: kp.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: kp.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f37120h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f35348b.getRoot().getContext(), pp.j.f46162a);
            this.f35348b.f37124l.A(l10);
            yp.c.a(viewEnvironment, c10);
        }
    }
}
