package xn;

import android.view.View;
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
import ps.j1;
import ps.m0;
import ss.j0;
import ss.l0;
import vn.v;
import vn.x;
import xn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements vn.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f55085a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f55086b;

    /* renamed from: c  reason: collision with root package name */
    private xn.e f55087c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f55088d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f55089e;

    /* renamed from: f  reason: collision with root package name */
    private Job f55090f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: xn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0766a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f55091d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f55092e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f55093i;

        C0766a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = xr.b.f();
            int i10 = this.f55091d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f55092e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f55093i;
                this.f55092e = dVar2;
                this.f55091d = 1;
                if (((FlowCollector) this.f55092e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f55141a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0766a c0766a = new C0766a(continuation);
            c0766a.f55092e = flowCollector;
            c0766a.f55093i = dVar;
            return c0766a.invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55094d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: xn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0767a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f55096d;

            C0767a(a aVar) {
                this.f55096d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f55140a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0769d.f55143a)) {
                        this.f55096d.f55088d.setValue(x.e.f52761a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f55141a)) {
                        this.f55096d.f55088d.setValue(new x.a(this.f55096d.f55089e));
                        a aVar = this.f55096d;
                        aVar.f55087c = aVar.f55085a.a();
                        this.f55096d.f55089e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f55096d.f55085a.b()) {
                                Job job = this.f55096d.f55090f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f55096d.u();
                            } else {
                                this.f55096d.f55088d.setValue(x.b.f52758a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f55096d.f55088d.setValue(x.c.f52759a);
                        } else {
                            throw new rr.p();
                        }
                    } else {
                        throw new rr.p();
                    }
                }
                return Unit.f31765a;
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
            Object f10 = xr.b.f();
            int i10 = this.f55094d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = ss.g.e(aVar.t(aVar.f55087c.K()));
                C0767a c0767a = new C0767a(a.this);
                this.f55094d = 1;
                if (e10.collect(c0767a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55097d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f55097d == 0) {
                kotlin.c.b(obj);
                a.this.f55088d.setValue(x.c.f52759a);
                a.this.d();
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f55099d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f55100e;

        /* renamed from: o  reason: collision with root package name */
        int f55102o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55100e = obj;
            this.f55102o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == xr.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f55103d;

        /* renamed from: i  reason: collision with root package name */
        int f55105i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55103d = obj;
            this.f55105i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == xr.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f55106d;

        /* renamed from: i  reason: collision with root package name */
        int f55108i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f55106d = obj;
            this.f55108i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == xr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f55085a = camera2ManagerFactory;
        this.f55086b = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f55087c = camera2ManagerFactory.a();
        this.f55088d = l0.a(x.c.f52759a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return ss.g.N(j0Var, new C0766a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f55087c = this.f55085a.a();
        ps.i.d(this.f55086b, m0.c(), null, new c(null), 2, null);
    }

    @Override // vn.i
    public void a(boolean z10) {
        this.f55087c.G(z10);
    }

    @Override // vn.i
    public v b() {
        return this.f55087c.I();
    }

    @Override // vn.i
    public j0 c() {
        return this.f55088d;
    }

    @Override // vn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f55088d.getValue(), x.c.f52759a) && !(this.f55088d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f55090f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f55088d.setValue(x.d.f52760a);
        d10 = ps.i.d(this.f55086b, null, null, new b(null), 3, null);
        this.f55090f = d10;
        this.f55087c.T();
    }

    @Override // vn.i
    public View e() {
        return this.f55087c.J();
    }

    @Override // vn.i
    public void f() {
        this.f55087c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // vn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof xn.a.d
            if (r0 == 0) goto L13
            r0 = r5
            xn.a$d r0 = (xn.a.d) r0
            int r1 = r0.f55102o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55102o = r1
            goto L18
        L13:
            xn.a$d r0 = new xn.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55100e
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55102o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f55099d
            xn.a r0 = (xn.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f55088d
            java.lang.Object r5 = r5.getValue()
            vn.x$e r2 = vn.x.e.f52761a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f31762e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            xn.e r5 = r4.f55087c
            r0.f55099d = r4
            r0.f55102o = r3
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
            r0.f55089e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // vn.i
    public void h(boolean z10) {
        this.f55087c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // vn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof xn.a.e
            if (r0 == 0) goto L13
            r0 = r5
            xn.a$e r0 = (xn.a.e) r0
            int r1 = r0.f55105i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55105i = r1
            goto L18
        L13:
            xn.a$e r0 = new xn.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55103d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55105i
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
            r4.f55089e = r5
            xn.e r5 = r4.f55087c
            r0.f55105i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // vn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof xn.a.f
            if (r0 == 0) goto L13
            r0 = r5
            xn.a$f r0 = (xn.a.f) r0
            int r1 = r0.f55108i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f55108i = r1
            goto L18
        L13:
            xn.a$f r0 = new xn.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f55106d
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f55108i
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
            xn.e r5 = r4.f55087c
            r0.f55108i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: xn.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
