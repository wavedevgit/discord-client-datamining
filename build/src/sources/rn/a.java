package rn;

import android.view.View;
import js.j1;
import js.m0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.j0;
import ms.l0;
import pn.v;
import pn.x;
import rn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements pn.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f48875a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f48876b;

    /* renamed from: c  reason: collision with root package name */
    private rn.e f48877c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f48878d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48879e;

    /* renamed from: f  reason: collision with root package name */
    private Job f48880f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: rn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0600a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f48881d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f48882e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f48883i;

        C0600a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = rr.b.f();
            int i10 = this.f48881d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f48882e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f48883i;
                this.f48882e = dVar2;
                this.f48881d = 1;
                if (((FlowCollector) this.f48882e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f48931a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0600a c0600a = new C0600a(continuation);
            c0600a.f48882e = flowCollector;
            c0600a.f48883i = dVar;
            return c0600a.invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48884d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0601a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f48886d;

            C0601a(a aVar) {
                this.f48886d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f48930a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0603d.f48933a)) {
                        this.f48886d.f48878d.setValue(x.e.f46391a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f48931a)) {
                        this.f48886d.f48878d.setValue(new x.a(this.f48886d.f48879e));
                        a aVar = this.f48886d;
                        aVar.f48877c = aVar.f48875a.a();
                        this.f48886d.f48879e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f48886d.f48875a.b()) {
                                Job job = this.f48886d.f48880f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f48886d.u();
                            } else {
                                this.f48886d.f48878d.setValue(x.b.f46388a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f48886d.f48878d.setValue(x.c.f46389a);
                        } else {
                            throw new lr.p();
                        }
                    } else {
                        throw new lr.p();
                    }
                }
                return Unit.f32464a;
            }
        }

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f48884d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = ms.g.e(aVar.t(aVar.f48877c.K()));
                C0601a c0601a = new C0601a(a.this);
                this.f48884d = 1;
                if (e10.collect(c0601a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48887d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f48887d == 0) {
                kotlin.c.b(obj);
                a.this.f48878d.setValue(x.c.f46389a);
                a.this.d();
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f48889d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48890e;

        /* renamed from: o  reason: collision with root package name */
        int f48892o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48890e = obj;
            this.f48892o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == rr.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f48893d;

        /* renamed from: i  reason: collision with root package name */
        int f48895i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48893d = obj;
            this.f48895i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == rr.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f48896d;

        /* renamed from: i  reason: collision with root package name */
        int f48898i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48896d = obj;
            this.f48898i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == rr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f48875a = camera2ManagerFactory;
        this.f48876b = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f48877c = camera2ManagerFactory.a();
        this.f48878d = l0.a(x.c.f46389a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return ms.g.N(j0Var, new C0600a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f48877c = this.f48875a.a();
        js.i.d(this.f48876b, m0.c(), null, new c(null), 2, null);
    }

    @Override // pn.i
    public void a(boolean z10) {
        this.f48877c.G(z10);
    }

    @Override // pn.i
    public v b() {
        return this.f48877c.I();
    }

    @Override // pn.i
    public j0 c() {
        return this.f48878d;
    }

    @Override // pn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f48878d.getValue(), x.c.f46389a) && !(this.f48878d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f48880f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f48878d.setValue(x.d.f46390a);
        d10 = js.i.d(this.f48876b, null, null, new b(null), 3, null);
        this.f48880f = d10;
        this.f48877c.T();
    }

    @Override // pn.i
    public View e() {
        return this.f48877c.J();
    }

    @Override // pn.i
    public void f() {
        this.f48877c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // pn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof rn.a.d
            if (r0 == 0) goto L13
            r0 = r5
            rn.a$d r0 = (rn.a.d) r0
            int r1 = r0.f48892o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48892o = r1
            goto L18
        L13:
            rn.a$d r0 = new rn.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48890e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48892o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f48889d
            rn.a r0 = (rn.a) r0
            kotlin.c.b(r5)
            kotlin.Result r5 = (kotlin.Result) r5
            java.lang.Object r5 = r5.j()
            goto L66
        L33:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L3b:
            kotlin.c.b(r5)
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f48878d
            java.lang.Object r5 = r5.getValue()
            pn.x$e r2 = pn.x.e.f46391a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f32461e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            rn.e r5 = r4.f48877c
            r0.f48889d = r4
            r0.f48892o = r3
            java.lang.Object r5 = r5.W(r0)
            if (r5 != r1) goto L65
            return r1
        L65:
            r0 = r4
        L66:
            boolean r1 = kotlin.Result.g(r5)
            if (r1 == 0) goto L6e
            r1 = 0
            goto L6f
        L6e:
            r1 = r5
        L6f:
            java.lang.Boolean r2 = kotlin.coroutines.jvm.internal.b.a(r3)
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L7b
            r0.f48879e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // pn.i
    public void h(boolean z10) {
        this.f48877c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // pn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof rn.a.e
            if (r0 == 0) goto L13
            r0 = r5
            rn.a$e r0 = (rn.a.e) r0
            int r1 = r0.f48895i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48895i = r1
            goto L18
        L13:
            rn.a$e r0 = new rn.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48893d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48895i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            kotlin.c.b(r5)
            kotlin.Result r5 = (kotlin.Result) r5
            java.lang.Object r5 = r5.j()
            return r5
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            r5 = 0
            r4.f48879e = r5
            rn.e r5 = r4.f48877c
            r0.f48895i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // pn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof rn.a.f
            if (r0 == 0) goto L13
            r0 = r5
            rn.a$f r0 = (rn.a.f) r0
            int r1 = r0.f48898i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48898i = r1
            goto L18
        L13:
            rn.a$f r0 = new rn.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48896d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48898i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            kotlin.c.b(r5)
            kotlin.Result r5 = (kotlin.Result) r5
            java.lang.Object r5 = r5.j()
            return r5
        L2f:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r0)
            throw r5
        L37:
            kotlin.c.b(r5)
            rn.e r5 = r4.f48877c
            r0.f48898i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
