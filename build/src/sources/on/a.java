package on;

import android.view.View;
import gs.j1;
import gs.m0;
import js.j0;
import js.l0;
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
import mn.v;
import mn.x;
import on.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements mn.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f44449a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f44450b;

    /* renamed from: c  reason: collision with root package name */
    private on.e f44451c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f44452d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f44453e;

    /* renamed from: f  reason: collision with root package name */
    private Job f44454f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: on.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0542a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f44455d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f44456e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f44457i;

        C0542a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = or.b.f();
            int i10 = this.f44455d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f44456e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f44457i;
                this.f44456e = dVar2;
                this.f44455d = 1;
                if (((FlowCollector) this.f44456e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f44505a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0542a c0542a = new C0542a(continuation);
            c0542a.f44456e = flowCollector;
            c0542a.f44457i = dVar;
            return c0542a.invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44458d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: on.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0543a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f44460d;

            C0543a(a aVar) {
                this.f44460d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f44504a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0545d.f44507a)) {
                        this.f44460d.f44452d.setValue(x.e.f39356a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f44505a)) {
                        this.f44460d.f44452d.setValue(new x.a(this.f44460d.f44453e));
                        a aVar = this.f44460d;
                        aVar.f44451c = aVar.f44449a.a();
                        this.f44460d.f44453e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f44460d.f44449a.b()) {
                                Job job = this.f44460d.f44454f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f44460d.u();
                            } else {
                                this.f44460d.f44452d.setValue(x.b.f39353a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f44460d.f44452d.setValue(x.c.f39354a);
                        } else {
                            throw new ir.p();
                        }
                    } else {
                        throw new ir.p();
                    }
                }
                return Unit.f33298a;
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
            Object f10 = or.b.f();
            int i10 = this.f44458d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = js.g.e(aVar.t(aVar.f44451c.K()));
                C0543a c0543a = new C0543a(a.this);
                this.f44458d = 1;
                if (e10.collect(c0543a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44461d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f44461d == 0) {
                kotlin.c.b(obj);
                a.this.f44452d.setValue(x.c.f39354a);
                a.this.d();
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f44463d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f44464e;

        /* renamed from: o  reason: collision with root package name */
        int f44466o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44464e = obj;
            this.f44466o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == or.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f44467d;

        /* renamed from: i  reason: collision with root package name */
        int f44469i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44467d = obj;
            this.f44469i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == or.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f44470d;

        /* renamed from: i  reason: collision with root package name */
        int f44472i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f44470d = obj;
            this.f44472i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == or.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f44449a = camera2ManagerFactory;
        this.f44450b = kotlinx.coroutines.i.a(m0.a().U0(j1.b(null, 1, null)));
        this.f44451c = camera2ManagerFactory.a();
        this.f44452d = l0.a(x.c.f39354a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return js.g.N(j0Var, new C0542a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f44451c = this.f44449a.a();
        gs.i.d(this.f44450b, m0.c(), null, new c(null), 2, null);
    }

    @Override // mn.i
    public void a(boolean z10) {
        this.f44451c.G(z10);
    }

    @Override // mn.i
    public v b() {
        return this.f44451c.I();
    }

    @Override // mn.i
    public j0 c() {
        return this.f44452d;
    }

    @Override // mn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f44452d.getValue(), x.c.f39354a) && !(this.f44452d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f44454f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f44452d.setValue(x.d.f39355a);
        d10 = gs.i.d(this.f44450b, null, null, new b(null), 3, null);
        this.f44454f = d10;
        this.f44451c.T();
    }

    @Override // mn.i
    public View e() {
        return this.f44451c.J();
    }

    @Override // mn.i
    public void f() {
        this.f44451c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // mn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof on.a.d
            if (r0 == 0) goto L13
            r0 = r5
            on.a$d r0 = (on.a.d) r0
            int r1 = r0.f44466o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44466o = r1
            goto L18
        L13:
            on.a$d r0 = new on.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44464e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44466o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f44463d
            on.a r0 = (on.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f44452d
            java.lang.Object r5 = r5.getValue()
            mn.x$e r2 = mn.x.e.f39356a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f33295e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            on.e r5 = r4.f44451c
            r0.f44463d = r4
            r0.f44466o = r3
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
            r0.f44453e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: on.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // mn.i
    public void h(boolean z10) {
        this.f44451c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // mn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof on.a.e
            if (r0 == 0) goto L13
            r0 = r5
            on.a$e r0 = (on.a.e) r0
            int r1 = r0.f44469i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44469i = r1
            goto L18
        L13:
            on.a$e r0 = new on.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44467d
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44469i
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
            r4.f44453e = r5
            on.e r5 = r4.f44451c
            r0.f44469i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: on.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // mn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof on.a.f
            if (r0 == 0) goto L13
            r0 = r5
            on.a$f r0 = (on.a.f) r0
            int r1 = r0.f44472i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f44472i = r1
            goto L18
        L13:
            on.a$f r0 = new on.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f44470d
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f44472i
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
            on.e r5 = r4.f44451c
            r0.f44472i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: on.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
