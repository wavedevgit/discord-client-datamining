package ep;

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
import ep.m0;
import ep.x5;
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
import mn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements vm.k {

    /* renamed from: b  reason: collision with root package name */
    private final fp.a f23229b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.i f23230c;

    /* renamed from: d  reason: collision with root package name */
    private final mn.w0 f23231d;

    /* renamed from: e  reason: collision with root package name */
    private Job f23232e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f23233f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f23234g;

    /* renamed from: h  reason: collision with root package name */
    private Job f23235h;

    /* renamed from: i  reason: collision with root package name */
    private final int f23236i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f23234g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f23229b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: ep.l0
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
        public static final /* synthetic */ int[] f23238a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0314c.values().length];
            try {
                iArr[x5.d.c.EnumC0314c.f23902d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23905o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23908r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23903e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23906p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23909s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23912v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23904i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23907q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23910t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23911u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0314c.f23913w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f23238a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23239d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f23241d;

            a(m0 m0Var) {
                this.f23241d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(mn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f39337a)) {
                    Function1 function12 = this.f23241d.f23233f;
                    if (function12 != null) {
                        function12.invoke(new mn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f23241d.f23233f) != null) {
                    function1.invoke(new mn.u0());
                }
                return Unit.f33282a;
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
            Object f10 = or.b.f();
            int i10 = this.f23239d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = mn.j.a(m0.this.f23230c.c());
                a aVar = new a(m0.this);
                this.f23239d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23242d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f23244i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23245d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f23246e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f23246e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f23245d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((mn.x) this.f23246e, x.e.f39340a));
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
            int f23247d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f23248e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f23249i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f23248e = bVar;
                this.f23249i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f23248e, this.f23249i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                or.b.f();
                if (this.f23247d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f23248e).b().invoke(this.f23249i.f23230c.b());
                    return Unit.f33282a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f23244i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f23244i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (js.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (gs.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = or.b.f()
                int r1 = r6.f23242d
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
                ep.m0 r7 = ep.m0.this
                mn.i r7 = ep.m0.l(r7)
                js.j0 r7 = r7.c()
                ep.m0$d$a r1 = new ep.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = js.g.H(r7, r1)
                r6.f23242d = r4
                java.lang.Object r7 = js.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                gs.c1 r7 = gs.m0.c()
                ep.m0$d$b r1 = new ep.m0$d$b
                ep.x5$d$c$b r4 = r6.f23244i
                ep.m0 r5 = ep.m0.this
                r1.<init>(r4, r5, r2)
                r6.f23242d = r3
                java.lang.Object r7 = gs.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f33282a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ep.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f23250d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f23251e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f23252i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f23251e = bVar;
            this.f23252i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f23251e, this.f23252i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f23250d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f23251e).b();
                this.f23250d = 1;
                if (gs.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f23252i.f23230c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f23252i.f23233f;
                if (function1 != null) {
                    function1.invoke(new mn.v0());
                }
                return Unit.f33282a;
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
        int f23253d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f23255i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f23256o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23257d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f23258e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f23259i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f23258e = bVar;
                this.f23259i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f23258e, this.f23259i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (gs.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = or.b.f()
                    int r1 = r6.f23257d
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
                    ep.x5$d$c$b r7 = r6.f23258e
                    ep.x5$d$c$b$b r7 = (ep.x5.d.c.b.C0311b) r7
                    long r4 = r7.c()
                    r6.f23257d = r3
                    java.lang.Object r7 = gs.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    ep.m0 r7 = r6.f23259i
                    mn.i r7 = ep.m0.l(r7)
                    js.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof mn.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f33282a
                    return r7
                L4d:
                    ep.m0 r7 = r6.f23259i
                    mn.i r7 = ep.m0.l(r7)
                    r6.f23257d = r2
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
                    ep.m0 r7 = r6.f23259i
                    kotlin.jvm.functions.Function1 r7 = ep.m0.m(r7)
                    if (r7 == 0) goto L77
                    mn.v0 r0 = new mn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f33282a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: ep.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f23255i = jVar;
            this.f23256o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f23255i, this.f23256o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = or.b.f();
            int i10 = this.f23253d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = m0.this.f23230c;
                this.f23253d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f23255i;
            x5.d.c.b bVar = this.f23256o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f23232e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = gs.i.d(jVar, gs.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f23232e = d10;
            }
            x5.d.c.b bVar2 = this.f23256o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0311b) bVar2).d().invoke(e10);
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
        int f23260d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f23262i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f23263o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f23262i = bVar;
            this.f23263o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f23262i, this.f23263o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = or.b.f();
            int i11 = this.f23260d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = m0.this.f23230c;
                this.f23260d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f23262i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0312c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f23263o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof mn.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f33282a;
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
        int f23264d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f23266i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f23266i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f23266i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = or.b.f();
            int i10 = this.f23264d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = m0.this.f23230c;
                this.f23264d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f23266i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0313d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f23266i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0313d) bVar2).c().invoke(e10);
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public m0(fp.a binding, mn.i cameraController, mn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f23229b = binding;
        this.f23230c = cameraController;
        this.f23231d = selfieDirectionFeed;
        binding.f25427l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        jp.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f23236i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(fp.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f25427l.E()) {
            aVar.f25427l.B(new Function0() { // from class: ep.k0
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0312c) bVar).c().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f33282a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        gs.i.d(jVar, gs.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0314c enumC0314c) {
        switch (b.f23238a[enumC0314c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f20429d;
            case 2:
                return OldSelfieOverlayView.b.f20432o;
            case 3:
                return OldSelfieOverlayView.b.f20435r;
            case 4:
                return OldSelfieOverlayView.b.f20430e;
            case 5:
                return OldSelfieOverlayView.b.f20433p;
            case 6:
                return OldSelfieOverlayView.b.f20436s;
            case 7:
                return OldSelfieOverlayView.b.f20439v;
            case 8:
                return OldSelfieOverlayView.b.f20431i;
            case 9:
                return OldSelfieOverlayView.b.f20434q;
            case 10:
                return OldSelfieOverlayView.b.f20437t;
            case 11:
                return OldSelfieOverlayView.b.f20438u;
            case 12:
                return OldSelfieOverlayView.b.f20440w;
            default:
                throw new ir.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: ep.i0
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
            TextView title = this.f23229b.f25428m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.f0.n(title, titleStyleValue, null, 2, null);
            this.f23229b.f25428m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f23229b.f25421f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            cq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f23229b.f25421f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f23229b.f25423h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f23235h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f23229b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = gs.i.d(androidx.lifecycle.p.a(jp.f.i(context)), null, null, new c(null), 3, null);
        this.f23235h = d10;
    }

    private static final void w(fp.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f25417b.setEnabled(false);
        if (!aVar.f25427l.E()) {
            aVar.f25427l.B(new Function0() { // from class: ep.j0
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
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(fp.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // vm.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, vm.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f23233f = rendering.h();
        this.f23234g = rendering.j();
        this.f23230c.d();
        this.f23230c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f23229b.f25419d.setVisibility(8);
        } else {
            this.f23229b.f25419d.setVisibility(0);
        }
        this.f23231d.k(rendering.k());
        final fp.a aVar = this.f23229b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(jp.f.i(context));
        TextView textView = this.f23229b.f25428m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f23229b.f25428m;
        CharSequence text = aVar.f25428m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f25421f.getText())) {
            aVar.f25421f.setText(str);
        }
        aVar.f25427l.setLeftPoseImage(rendering.a().a());
        aVar.f25427l.setRightPoseImage(rendering.a().b());
        int i11 = b.f23238a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0313d) {
                        TextView textView3 = aVar.f25421f;
                        textView3.announceForAccessibility(textView3.getContext().getString(bp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f25421f;
                    textView4.announceForAccessibility(textView4.getContext().getString(bp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f25421f;
                textView5.announceForAccessibility(textView5.getContext().getString(bp.e.P));
            }
        } else {
            TextView textView6 = aVar.f25421f;
            textView6.announceForAccessibility(textView6.getContext().getString(bp.e.N));
        }
        aVar.f25417b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0311b)) {
            aVar.f25420e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f25422g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f25417b.setVisibility(4);
            gs.i.d(a10, gs.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f25427l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f25422g.setVisibility(0);
            aVar.f25417b.setVisibility(4);
            Job job = this.f23232e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = gs.i.d(a10, gs.m0.b(), null, new e(e10, this, null), 2, null);
            this.f23232e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f25417b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f25427l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: ep.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0311b) {
            x5.d.c.b.C0311b c0311b = (x5.d.c.b.C0311b) e10;
            if (c0311b.e()) {
                gs.i.d(a10, gs.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f25417b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f25420e.getTag(), Integer.valueOf(c0311b.b()))) {
                TextView countdown = aVar.f25420e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0311b.b(), 1) * 1.5f);
                aVar.f25420e.setText(String.valueOf(c0311b.b()));
                aVar.f25420e.setTag(Integer.valueOf(c0311b.b()));
            }
            OldSelfieOverlayView.J(aVar.f25427l, G(c0311b.a()), c0311b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f23232e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f25417b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f25427l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f23236i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0313d) {
            aVar.f25417b.setVisibility(0);
            aVar.f25417b.setOnClickListener(new View.OnClickListener() { // from class: ep.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(fp.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0313d c0313d = (x5.d.c.b.C0313d) e10;
            if (c0313d.b()) {
                aVar.f25417b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f25427l, G(c0313d.a()), c0313d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f25417b.setVisibility(0);
            aVar.f25417b.setOnClickListener(new View.OnClickListener() { // from class: ep.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(fp.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f25427l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f25417b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f25427l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0312c) {
            aVar.f25417b.setVisibility(4);
            x5.d.c.b.C0312c c0312c = (x5.d.c.b.C0312c) e10;
            if (c0312c.e()) {
                Job job3 = this.f23232e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                gs.i.d(a10, gs.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f25427l.I(G(c0312c.a()), c0312c.d(), new Function0() { // from class: ep.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new ir.p();
        }
        rp.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: ep.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: ep.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f25423h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f23229b.getRoot().getContext(), jp.j.f32303a);
            this.f23229b.f25427l.A(l10);
            sp.c.a(viewEnvironment, c10);
        }
    }
}
