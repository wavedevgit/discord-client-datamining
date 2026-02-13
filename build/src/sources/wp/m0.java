package wp;

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
import fo.x;
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
import wp.m0;
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements gn.k {

    /* renamed from: b  reason: collision with root package name */
    private final xp.a f53756b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.i f53757c;

    /* renamed from: d  reason: collision with root package name */
    private final fo.w0 f53758d;

    /* renamed from: e  reason: collision with root package name */
    private Job f53759e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f53760f;

    /* renamed from: g  reason: collision with root package name */
    private Function0 f53761g;

    /* renamed from: h  reason: collision with root package name */
    private Job f53762h;

    /* renamed from: i  reason: collision with root package name */
    private final int f53763i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(m0 m0Var) {
            Function0 function0 = m0Var.f53761g;
            if (function0 != null) {
                function0.invoke();
            }
            m0Var.u();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = m0.this.f53756b.getRoot();
            final m0 m0Var = m0.this;
            root.post(new Runnable() { // from class: wp.l0
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
        public static final /* synthetic */ int[] f53765a;

        static {
            int[] iArr = new int[x5.d.c.EnumC0755c.values().length];
            try {
                iArr[x5.d.c.EnumC0755c.f54429d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54432o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54435r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54430e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54433p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54436s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54439v.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54431i.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54434q.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54437t.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54438u.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[x5.d.c.EnumC0755c.f54440w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f53765a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53766d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ m0 f53768d;

            a(m0 m0Var) {
                this.f53768d = m0Var;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(fo.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f24154a)) {
                    Function1 function12 = this.f53768d.f53760f;
                    if (function12 != null) {
                        function12.invoke(new fo.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f53768d.f53760f) != null) {
                    function1.invoke(new fo.u0());
                }
                return Unit.f32556a;
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
            Object f10 = gs.b.f();
            int i10 = this.f53766d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = fo.j.a(m0.this.f53757c.c());
                a aVar = new a(m0.this);
                this.f53766d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53769d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f53771i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53772d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f53773e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f53773e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f53772d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((fo.x) this.f53773e, x.e.f24157a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(fo.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53774d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f53775e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f53776i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f53775e = bVar;
                this.f53776i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f53775e, this.f53776i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f53774d == 0) {
                    kotlin.c.b(obj);
                    ((x5.d.c.b.g) this.f53775e).b().invoke(this.f53776i.f53757c.b());
                    return Unit.f32556a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f53771i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f53771i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x003b, code lost:
            if (bt.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x0051, code lost:
            if (ys.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r6.f53769d
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
                wp.m0 r7 = wp.m0.this
                fo.i r7 = wp.m0.l(r7)
                bt.j0 r7 = r7.c()
                wp.m0$d$a r1 = new wp.m0$d$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = bt.g.H(r7, r1)
                r6.f53769d = r4
                java.lang.Object r7 = bt.g.h(r7, r6)
                if (r7 != r0) goto L3e
                goto L53
            L3e:
                ys.c1 r7 = ys.m0.c()
                wp.m0$d$b r1 = new wp.m0$d$b
                wp.x5$d$c$b r4 = r6.f53771i
                wp.m0 r5 = wp.m0.this
                r1.<init>(r4, r5, r2)
                r6.f53769d = r3
                java.lang.Object r7 = ys.g.g(r7, r1, r6)
                if (r7 != r0) goto L54
            L53:
                return r0
            L54:
                kotlin.Unit r7 = kotlin.Unit.f32556a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.m0.d.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53777d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f53778e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ m0 f53779i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
            super(2, continuation);
            this.f53778e = bVar;
            this.f53779i = m0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f53778e, this.f53779i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f53777d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.c.b.i) this.f53778e).b();
                this.f53777d = 1;
                if (ys.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f53779i.f53757c.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f53779i.f53760f;
                if (function1 != null) {
                    function1.invoke(new fo.v0());
                }
                return Unit.f32556a;
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53780d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f53782i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f53783o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53784d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.c.b f53785e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ m0 f53786i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.c.b bVar, m0 m0Var, Continuation continuation) {
                super(2, continuation);
                this.f53785e = bVar;
                this.f53786i = m0Var;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f53785e, this.f53786i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ys.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = gs.b.f()
                    int r1 = r6.f53784d
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
                    wp.x5$d$c$b r7 = r6.f53785e
                    wp.x5$d$c$b$b r7 = (wp.x5.d.c.b.C0752b) r7
                    long r4 = r7.c()
                    r6.f53784d = r3
                    java.lang.Object r7 = ys.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L5b
                L38:
                    wp.m0 r7 = r6.f53786i
                    fo.i r7 = wp.m0.l(r7)
                    bt.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof fo.x.a
                    if (r7 == 0) goto L4d
                    kotlin.Unit r7 = kotlin.Unit.f32556a
                    return r7
                L4d:
                    wp.m0 r7 = r6.f53786i
                    fo.i r7 = wp.m0.l(r7)
                    r6.f53784d = r2
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
                    wp.m0 r7 = r6.f53786i
                    kotlin.jvm.functions.Function1 r7 = wp.m0.m(r7)
                    if (r7 == 0) goto L77
                    fo.v0 r0 = new fo.v0
                    r0.<init>()
                    r7.invoke(r0)
                L77:
                    kotlin.Unit r7 = kotlin.Unit.f32556a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: wp.m0.f.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(androidx.lifecycle.j jVar, x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f53782i = jVar;
            this.f53783o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f53782i, this.f53783o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = gs.b.f();
            int i10 = this.f53780d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = m0.this.f53757c;
                this.f53780d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            m0 m0Var = m0.this;
            androidx.lifecycle.j jVar = this.f53782i;
            x5.d.c.b bVar = this.f53783o;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = m0Var.f53759e;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ys.i.d(jVar, ys.m0.b(), null, new a(bVar, m0Var, null), 2, null);
                m0Var.f53759e = d10;
            }
            x5.d.c.b bVar2 = this.f53783o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.c.b.C0752b) bVar2).d().invoke(e10);
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53787d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f53789i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.c f53790o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(x5.d.c.b bVar, x5.d.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f53789i = bVar;
            this.f53790o = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f53789i, this.f53790o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = gs.b.f();
            int i11 = this.f53787d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = m0.this.f53757c;
                this.f53787d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f53789i;
            if (Result.h(i10)) {
                ((x5.d.c.b.C0753c) bVar).b().invoke((File) i10);
            }
            x5.d.c cVar = this.f53790o;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof fo.q0)) {
                cVar.h().invoke(e10);
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53791d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.c.b f53793i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.c.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f53793i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f53793i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = gs.b.f();
            int i10 = this.f53791d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = m0.this.f53757c;
                this.f53791d = 1;
                j10 = iVar.j(this);
                if (j10 == f10) {
                    return f10;
                }
            }
            x5.d.c.b bVar = this.f53793i;
            if (Result.h(j10)) {
                Function1 d10 = ((x5.d.c.b.C0754d) bVar).d();
                String absolutePath = ((File) j10).getAbsolutePath();
                Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
                d10.invoke(absolutePath);
            }
            x5.d.c.b bVar2 = this.f53793i;
            Throwable e10 = Result.e(j10);
            if (e10 != null) {
                ((x5.d.c.b.C0754d) bVar2).c().invoke(e10);
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public m0(xp.a binding, fo.i cameraController, fo.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f53756b = binding;
        this.f53757c = cameraController;
        this.f53758d = selfieDirectionFeed;
        binding.f55647l.setPreviewView(cameraController.e());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        bq.f.i(context).getLifecycle().a(new a());
        u();
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f53763i = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(xp.a aVar, final x5.d.c.b bVar, View view) {
        if (!aVar.f55647l.E()) {
            aVar.f55647l.B(new Function0() { // from class: wp.k0
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
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(x5.d.c.b bVar) {
        ((x5.d.c.b.C0753c) bVar).c().invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(x5.d.c cVar) {
        cVar.g().invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(x5.d.c cVar) {
        cVar.i().invoke();
        return Unit.f32556a;
    }

    private static final void F(androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar) {
        ys.i.d(jVar, ys.m0.c(), null, new h(bVar, null), 2, null);
    }

    private final OldSelfieOverlayView.b G(x5.d.c.EnumC0755c enumC0755c) {
        switch (b.f53765a[enumC0755c.ordinal()]) {
            case 1:
                return OldSelfieOverlayView.b.f20451d;
            case 2:
                return OldSelfieOverlayView.b.f20454o;
            case 3:
                return OldSelfieOverlayView.b.f20457r;
            case 4:
                return OldSelfieOverlayView.b.f20452e;
            case 5:
                return OldSelfieOverlayView.b.f20455p;
            case 6:
                return OldSelfieOverlayView.b.f20458s;
            case 7:
                return OldSelfieOverlayView.b.f20461v;
            case 8:
                return OldSelfieOverlayView.b.f20453i;
            case 9:
                return OldSelfieOverlayView.b.f20456q;
            case 10:
                return OldSelfieOverlayView.b.f20459t;
            case 11:
                return OldSelfieOverlayView.b.f20460u;
            case 12:
                return OldSelfieOverlayView.b.f20462w;
            default:
                throw new as.p();
        }
    }

    private final void r(final TextView textView, float f10) {
        textView.setVisibility(0);
        textView.animate().setDuration(500L).scaleX(f10).scaleY(f10).alpha(0.0f).withEndAction(new Runnable() { // from class: wp.i0
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
            TextView title = this.f53756b.f55648m;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, titleStyleValue, null, 2, null);
            this.f53756b.f55648m.setTextColor(-1);
        }
        TextBasedComponentStyle selfieCaptureHintTextStyle = selfieStepStyle.getSelfieCaptureHintTextStyle();
        if (selfieCaptureHintTextStyle != null) {
            TextView hintMessage = this.f53756b.f55641f;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            uq.f0.n(hintMessage, selfieCaptureHintTextStyle, null, 2, null);
            this.f53756b.f55641f.setTextColor(-1);
        }
        Integer capturePageHeaderIconColorValue = selfieStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue != null) {
            this.f53756b.f55643h.setControlsColor(capturePageHeaderIconColorValue.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        Job d10;
        Job job = this.f53762h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f53756b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ys.i.d(androidx.lifecycle.p.a(bq.f.i(context)), null, null, new c(null), 3, null);
        this.f53762h = d10;
    }

    private static final void w(xp.a aVar, final androidx.lifecycle.j jVar, final m0 m0Var, final x5.d.c.b bVar) {
        aVar.f55637b.setEnabled(false);
        if (!aVar.f55647l.E()) {
            aVar.f55647l.B(new Function0() { // from class: wp.j0
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
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(x5.d.c.b bVar) {
        ((x5.d.c.b.f) bVar).b().invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(xp.a aVar, androidx.lifecycle.j jVar, m0 m0Var, x5.d.c.b bVar, View view) {
        w(aVar, jVar, m0Var, bVar);
    }

    @Override // gn.k
    /* renamed from: v */
    public void a(final x5.d.c rendering, gn.a0 viewEnvironment) {
        int i10;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f53760f = rendering.h();
        this.f53761g = rendering.j();
        this.f53757c.d();
        this.f53757c.e().setVisibility(0);
        if (!(rendering.e() instanceof x5.d.c.b.i) && !(rendering.e() instanceof x5.d.c.b.g)) {
            this.f53756b.f55639d.setVisibility(8);
        } else {
            this.f53756b.f55639d.setVisibility(0);
        }
        this.f53758d.k(rendering.k());
        final xp.a aVar = this.f53756b;
        Context context = aVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(bq.f.i(context));
        TextView textView = this.f53756b.f55648m;
        String m10 = rendering.m();
        String str = "";
        if (m10 == null) {
            m10 = "";
        }
        textView.setText(m10);
        TextView textView2 = this.f53756b.f55648m;
        CharSequence text = aVar.f55648m.getText();
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
        if (!Intrinsics.areEqual(str, aVar.f55641f.getText())) {
            aVar.f55641f.setText(str);
        }
        aVar.f55647l.setLeftPoseImage(rendering.a().a());
        aVar.f55647l.setRightPoseImage(rendering.a().b());
        int i11 = b.f53765a[rendering.e().a().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (rendering.e() instanceof x5.d.c.b.C0754d) {
                        TextView textView3 = aVar.f55641f;
                        textView3.announceForAccessibility(textView3.getContext().getString(tp.e.O));
                    }
                } else {
                    TextView textView4 = aVar.f55641f;
                    textView4.announceForAccessibility(textView4.getContext().getString(tp.e.Q));
                }
            } else {
                TextView textView5 = aVar.f55641f;
                textView5.announceForAccessibility(textView5.getContext().getString(tp.e.P));
            }
        } else {
            TextView textView6 = aVar.f55641f;
            textView6.announceForAccessibility(textView6.getContext().getString(tp.e.N));
        }
        aVar.f55637b.setEnabled(true);
        if (!(rendering.e() instanceof x5.d.c.b.C0752b)) {
            aVar.f55640e.setVisibility(8);
        }
        if (!(rendering.e() instanceof x5.d.c.b.i)) {
            aVar.f55642g.setVisibility(8);
        }
        final x5.d.c.b e10 = rendering.e();
        if (e10 instanceof x5.d.c.b.g) {
            aVar.f55637b.setVisibility(4);
            ys.i.d(a10, ys.m0.a(), null, new d(e10, null), 2, null);
            x5.d.c.b.g gVar = (x5.d.c.b.g) e10;
            OldSelfieOverlayView.J(aVar.f55647l, G(gVar.a()), gVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.i) {
            aVar.f55642g.setVisibility(0);
            aVar.f55637b.setVisibility(4);
            Job job = this.f53759e;
            if (job != null) {
                Job.a.a(job, null, 1, null);
            }
            d10 = ys.i.d(a10, ys.m0.b(), null, new e(e10, this, null), 2, null);
            this.f53759e = d10;
        } else if (e10 instanceof x5.d.c.b.f) {
            aVar.f55637b.setVisibility(4);
            x5.d.c.b.f fVar = (x5.d.c.b.f) e10;
            aVar.f55647l.I(G(fVar.a()), fVar.c(), new Function0() { // from class: wp.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = m0.y(x5.d.c.b.this);
                    return y10;
                }
            });
        } else if (e10 instanceof x5.d.c.b.C0752b) {
            x5.d.c.b.C0752b c0752b = (x5.d.c.b.C0752b) e10;
            if (c0752b.e()) {
                ys.i.d(a10, ys.m0.c(), null, new f(a10, e10, null), 2, null);
            }
            aVar.f55637b.setVisibility(4);
            if (!Intrinsics.areEqual(aVar.f55640e.getTag(), Integer.valueOf(c0752b.b()))) {
                TextView countdown = aVar.f55640e;
                Intrinsics.checkNotNullExpressionValue(countdown, "countdown");
                r(countdown, kotlin.ranges.d.d(4 - c0752b.b(), 1) * 1.5f);
                aVar.f55640e.setText(String.valueOf(c0752b.b()));
                aVar.f55640e.setTag(Integer.valueOf(c0752b.b()));
            }
            OldSelfieOverlayView.J(aVar.f55647l, G(c0752b.a()), c0752b.f(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.h) {
            Job job2 = this.f53759e;
            if (job2 != null) {
                Job.a.a(job2, null, 1, null);
            }
            aVar.f55637b.setEnabled(false);
            x5.d.c.b.h hVar = (x5.d.c.b.h) e10;
            aVar.f55647l.I(G(hVar.a()), hVar.d(), hVar.c());
            if (hVar.b()) {
                aVar.getRoot().setHapticFeedbackEnabled(true);
                aVar.getRoot().performHapticFeedback(this.f53763i, 2);
            }
        } else if (e10 instanceof x5.d.c.b.C0754d) {
            aVar.f55637b.setVisibility(0);
            aVar.f55637b.setOnClickListener(new View.OnClickListener() { // from class: wp.d0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.z(xp.a.this, a10, this, e10, view);
                }
            });
            x5.d.c.b.C0754d c0754d = (x5.d.c.b.C0754d) e10;
            if (c0754d.b()) {
                aVar.f55637b.setVisibility(4);
                w(aVar, a10, this, e10);
            }
            OldSelfieOverlayView.J(aVar.f55647l, G(c0754d.a()), c0754d.e(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.e) {
            aVar.f55637b.setVisibility(0);
            aVar.f55637b.setOnClickListener(new View.OnClickListener() { // from class: wp.e0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    m0.A(xp.a.this, e10, view);
                }
            });
            x5.d.c.b.e eVar = (x5.d.c.b.e) e10;
            OldSelfieOverlayView.J(aVar.f55647l, G(eVar.a()), eVar.c(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.a) {
            aVar.f55637b.setVisibility(4);
            x5.d.c.b.a aVar2 = (x5.d.c.b.a) e10;
            OldSelfieOverlayView.J(aVar.f55647l, G(aVar2.a()), aVar2.b(), null, 4, null);
        } else if (e10 instanceof x5.d.c.b.C0753c) {
            aVar.f55637b.setVisibility(4);
            x5.d.c.b.C0753c c0753c = (x5.d.c.b.C0753c) e10;
            if (c0753c.e()) {
                Job job3 = this.f53759e;
                if (job3 != null) {
                    Job.a.a(job3, null, 1, null);
                }
                ys.i.d(a10, ys.m0.c(), null, new g(e10, rendering, null), 2, null);
            }
            aVar.f55647l.I(G(c0753c.a()), c0753c.d(), new Function0() { // from class: wp.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit C;
                    C = m0.C(x5.d.c.b.this);
                    return C;
                }
            });
        } else {
            throw new as.p();
        }
        jq.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: wp.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = m0.D(x5.d.c.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: wp.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E;
                E = m0.E(x5.d.c.this);
                return E;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f55643h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(f10, function0, function02, navigationBar, root);
        StepStyles.SelfieStepStyle l10 = rendering.l();
        if (l10 != null) {
            t(l10);
            int c10 = androidx.core.content.a.c(this.f53756b.getRoot().getContext(), bq.j.f7365a);
            this.f53756b.f55647l.A(l10);
            kq.c.a(viewEnvironment, c10);
        }
    }
}
