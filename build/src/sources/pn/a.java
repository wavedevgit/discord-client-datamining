package pn;

import android.view.View;
import hs.j1;
import hs.m0;
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
import ks.j0;
import ks.l0;
import nn.v;
import nn.x;
import pn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements nn.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f46239a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f46240b;

    /* renamed from: c  reason: collision with root package name */
    private pn.e f46241c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f46242d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f46243e;

    /* renamed from: f  reason: collision with root package name */
    private Job f46244f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: pn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0563a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f46245d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f46246e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f46247i;

        C0563a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = pr.b.f();
            int i10 = this.f46245d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f46246e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f46247i;
                this.f46246e = dVar2;
                this.f46245d = 1;
                if (((FlowCollector) this.f46246e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f46295a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0563a c0563a = new C0563a(continuation);
            c0563a.f46246e = flowCollector;
            c0563a.f46247i = dVar;
            return c0563a.invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46248d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: pn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0564a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f46250d;

            C0564a(a aVar) {
                this.f46250d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f46294a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0566d.f46297a)) {
                        this.f46250d.f46242d.setValue(x.e.f42099a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f46295a)) {
                        this.f46250d.f46242d.setValue(new x.a(this.f46250d.f46243e));
                        a aVar = this.f46250d;
                        aVar.f46241c = aVar.f46239a.a();
                        this.f46250d.f46243e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f46250d.f46239a.b()) {
                                Job job = this.f46250d.f46244f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f46250d.u();
                            } else {
                                this.f46250d.f46242d.setValue(x.b.f42096a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f46250d.f46242d.setValue(x.c.f42097a);
                        } else {
                            throw new jr.p();
                        }
                    } else {
                        throw new jr.p();
                    }
                }
                return Unit.f33074a;
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
            Object f10 = pr.b.f();
            int i10 = this.f46248d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = ks.g.e(aVar.t(aVar.f46241c.K()));
                C0564a c0564a = new C0564a(a.this);
                this.f46248d = 1;
                if (e10.collect(c0564a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f46251d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f46251d == 0) {
                kotlin.c.b(obj);
                a.this.f46242d.setValue(x.c.f42097a);
                a.this.d();
                return Unit.f33074a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f46253d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f46254e;

        /* renamed from: o  reason: collision with root package name */
        int f46256o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46254e = obj;
            this.f46256o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == pr.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f46257d;

        /* renamed from: i  reason: collision with root package name */
        int f46259i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46257d = obj;
            this.f46259i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == pr.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f46260d;

        /* renamed from: i  reason: collision with root package name */
        int f46262i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46260d = obj;
            this.f46262i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == pr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f46239a = camera2ManagerFactory;
        this.f46240b = kotlinx.coroutines.i.a(m0.a().Z0(j1.b(null, 1, null)));
        this.f46241c = camera2ManagerFactory.a();
        this.f46242d = l0.a(x.c.f42097a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return ks.g.N(j0Var, new C0563a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f46241c = this.f46239a.a();
        hs.i.d(this.f46240b, m0.c(), null, new c(null), 2, null);
    }

    @Override // nn.i
    public void a(boolean z10) {
        this.f46241c.G(z10);
    }

    @Override // nn.i
    public v b() {
        return this.f46241c.I();
    }

    @Override // nn.i
    public j0 c() {
        return this.f46242d;
    }

    @Override // nn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f46242d.getValue(), x.c.f42097a) && !(this.f46242d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f46244f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f46242d.setValue(x.d.f42098a);
        d10 = hs.i.d(this.f46240b, null, null, new b(null), 3, null);
        this.f46244f = d10;
        this.f46241c.T();
    }

    @Override // nn.i
    public View e() {
        return this.f46241c.J();
    }

    @Override // nn.i
    public void f() {
        this.f46241c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // nn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof pn.a.d
            if (r0 == 0) goto L13
            r0 = r5
            pn.a$d r0 = (pn.a.d) r0
            int r1 = r0.f46256o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46256o = r1
            goto L18
        L13:
            pn.a$d r0 = new pn.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46254e
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46256o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f46253d
            pn.a r0 = (pn.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f46242d
            java.lang.Object r5 = r5.getValue()
            nn.x$e r2 = nn.x.e.f42099a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f33071e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            pn.e r5 = r4.f46241c
            r0.f46253d = r4
            r0.f46256o = r3
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
            r0.f46243e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // nn.i
    public void h(boolean z10) {
        this.f46241c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // nn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof pn.a.e
            if (r0 == 0) goto L13
            r0 = r5
            pn.a$e r0 = (pn.a.e) r0
            int r1 = r0.f46259i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46259i = r1
            goto L18
        L13:
            pn.a$e r0 = new pn.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46257d
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46259i
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
            r4.f46243e = r5
            pn.e r5 = r4.f46241c
            r0.f46259i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // nn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof pn.a.f
            if (r0 == 0) goto L13
            r0 = r5
            pn.a$f r0 = (pn.a.f) r0
            int r1 = r0.f46262i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46262i = r1
            goto L18
        L13:
            pn.a$f r0 = new pn.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f46260d
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f46262i
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
            pn.e r5 = r4.f46241c
            r0.f46262i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: pn.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
