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
    private final g f48872a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f48873b;

    /* renamed from: c  reason: collision with root package name */
    private rn.e f48874c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f48875d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48876e;

    /* renamed from: f  reason: collision with root package name */
    private Job f48877f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: rn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0600a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f48878d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f48879e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f48880i;

        C0600a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = rr.b.f();
            int i10 = this.f48878d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f48879e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f48880i;
                this.f48879e = dVar2;
                this.f48878d = 1;
                if (((FlowCollector) this.f48879e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f48928a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0600a c0600a = new C0600a(continuation);
            c0600a.f48879e = flowCollector;
            c0600a.f48880i = dVar;
            return c0600a.invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48881d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0601a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f48883d;

            C0601a(a aVar) {
                this.f48883d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f48927a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0603d.f48930a)) {
                        this.f48883d.f48875d.setValue(x.e.f46391a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f48928a)) {
                        this.f48883d.f48875d.setValue(new x.a(this.f48883d.f48876e));
                        a aVar = this.f48883d;
                        aVar.f48874c = aVar.f48872a.a();
                        this.f48883d.f48876e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f48883d.f48872a.b()) {
                                Job job = this.f48883d.f48877f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f48883d.u();
                            } else {
                                this.f48883d.f48875d.setValue(x.b.f46388a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f48883d.f48875d.setValue(x.c.f46389a);
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
            int i10 = this.f48881d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = ms.g.e(aVar.t(aVar.f48874c.K()));
                C0601a c0601a = new C0601a(a.this);
                this.f48881d = 1;
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
        int f48884d;

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
            if (this.f48884d == 0) {
                kotlin.c.b(obj);
                a.this.f48875d.setValue(x.c.f46389a);
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
        Object f48886d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48887e;

        /* renamed from: o  reason: collision with root package name */
        int f48889o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48887e = obj;
            this.f48889o |= Integer.MIN_VALUE;
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
        /* synthetic */ Object f48890d;

        /* renamed from: i  reason: collision with root package name */
        int f48892i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48890d = obj;
            this.f48892i |= Integer.MIN_VALUE;
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
        /* synthetic */ Object f48893d;

        /* renamed from: i  reason: collision with root package name */
        int f48895i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f48893d = obj;
            this.f48895i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == rr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f48872a = camera2ManagerFactory;
        this.f48873b = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f48874c = camera2ManagerFactory.a();
        this.f48875d = l0.a(x.c.f46389a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return ms.g.N(j0Var, new C0600a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f48874c = this.f48872a.a();
        js.i.d(this.f48873b, m0.c(), null, new c(null), 2, null);
    }

    @Override // pn.i
    public void a(boolean z10) {
        this.f48874c.G(z10);
    }

    @Override // pn.i
    public v b() {
        return this.f48874c.I();
    }

    @Override // pn.i
    public j0 c() {
        return this.f48875d;
    }

    @Override // pn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f48875d.getValue(), x.c.f46389a) && !(this.f48875d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f48877f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f48875d.setValue(x.d.f46390a);
        d10 = js.i.d(this.f48873b, null, null, new b(null), 3, null);
        this.f48877f = d10;
        this.f48874c.T();
    }

    @Override // pn.i
    public View e() {
        return this.f48874c.J();
    }

    @Override // pn.i
    public void f() {
        this.f48874c.H();
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
            int r1 = r0.f48889o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48889o = r1
            goto L18
        L13:
            rn.a$d r0 = new rn.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48887e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48889o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f48886d
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f48875d
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
            rn.e r5 = r4.f48874c
            r0.f48886d = r4
            r0.f48889o = r3
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
            r0.f48876e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // pn.i
    public void h(boolean z10) {
        this.f48874c.S(z10);
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
            int r1 = r0.f48892i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48892i = r1
            goto L18
        L13:
            rn.a$e r0 = new rn.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f48890d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f48892i
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
            r4.f48876e = r5
            rn.e r5 = r4.f48874c
            r0.f48892i = r3
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
            int r1 = r0.f48895i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f48895i = r1
            goto L18
        L13:
            rn.a$f r0 = new rn.a$f
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
            rn.e r5 = r4.f48874c
            r0.f48895i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rn.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
