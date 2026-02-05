package un;

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
import ms.j1;
import ms.m0;
import ps.j0;
import ps.l0;
import sn.v;
import sn.x;
import un.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements sn.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f51474a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f51475b;

    /* renamed from: c  reason: collision with root package name */
    private un.e f51476c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f51477d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f51478e;

    /* renamed from: f  reason: collision with root package name */
    private Job f51479f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: un.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0666a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f51480d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f51481e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f51482i;

        C0666a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = ur.b.f();
            int i10 = this.f51480d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f51481e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f51482i;
                this.f51481e = dVar2;
                this.f51480d = 1;
                if (((FlowCollector) this.f51481e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f51530a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0666a c0666a = new C0666a(continuation);
            c0666a.f51481e = flowCollector;
            c0666a.f51482i = dVar;
            return c0666a.invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51483d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: un.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0667a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f51485d;

            C0667a(a aVar) {
                this.f51485d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f51529a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0669d.f51532a)) {
                        this.f51485d.f51477d.setValue(x.e.f50007a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f51530a)) {
                        this.f51485d.f51477d.setValue(new x.a(this.f51485d.f51478e));
                        a aVar = this.f51485d;
                        aVar.f51476c = aVar.f51474a.a();
                        this.f51485d.f51478e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f51485d.f51474a.b()) {
                                Job job = this.f51485d.f51479f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f51485d.u();
                            } else {
                                this.f51485d.f51477d.setValue(x.b.f50004a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f51485d.f51477d.setValue(x.c.f50005a);
                        } else {
                            throw new or.p();
                        }
                    } else {
                        throw new or.p();
                    }
                }
                return Unit.f31988a;
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
            Object f10 = ur.b.f();
            int i10 = this.f51483d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = ps.g.e(aVar.t(aVar.f51476c.K()));
                C0667a c0667a = new C0667a(a.this);
                this.f51483d = 1;
                if (e10.collect(c0667a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51486d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f51486d == 0) {
                kotlin.c.b(obj);
                a.this.f51477d.setValue(x.c.f50005a);
                a.this.d();
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f51488d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f51489e;

        /* renamed from: o  reason: collision with root package name */
        int f51491o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51489e = obj;
            this.f51491o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == ur.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f51492d;

        /* renamed from: i  reason: collision with root package name */
        int f51494i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51492d = obj;
            this.f51494i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == ur.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f51495d;

        /* renamed from: i  reason: collision with root package name */
        int f51497i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51495d = obj;
            this.f51497i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == ur.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f51474a = camera2ManagerFactory;
        this.f51475b = kotlinx.coroutines.i.a(m0.a().V0(j1.b(null, 1, null)));
        this.f51476c = camera2ManagerFactory.a();
        this.f51477d = l0.a(x.c.f50005a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return ps.g.N(j0Var, new C0666a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f51476c = this.f51474a.a();
        ms.i.d(this.f51475b, m0.c(), null, new c(null), 2, null);
    }

    @Override // sn.i
    public void a(boolean z10) {
        this.f51476c.G(z10);
    }

    @Override // sn.i
    public v b() {
        return this.f51476c.I();
    }

    @Override // sn.i
    public j0 c() {
        return this.f51477d;
    }

    @Override // sn.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f51477d.getValue(), x.c.f50005a) && !(this.f51477d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f51479f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f51477d.setValue(x.d.f50006a);
        d10 = ms.i.d(this.f51475b, null, null, new b(null), 3, null);
        this.f51479f = d10;
        this.f51476c.T();
    }

    @Override // sn.i
    public View e() {
        return this.f51476c.J();
    }

    @Override // sn.i
    public void f() {
        this.f51476c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // sn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof un.a.d
            if (r0 == 0) goto L13
            r0 = r5
            un.a$d r0 = (un.a.d) r0
            int r1 = r0.f51491o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51491o = r1
            goto L18
        L13:
            un.a$d r0 = new un.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f51489e
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f51491o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f51488d
            un.a r0 = (un.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f51477d
            java.lang.Object r5 = r5.getValue()
            sn.x$e r2 = sn.x.e.f50007a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f31985e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            un.e r5 = r4.f51476c
            r0.f51488d = r4
            r0.f51491o = r3
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
            r0.f51478e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: un.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // sn.i
    public void h(boolean z10) {
        this.f51476c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // sn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof un.a.e
            if (r0 == 0) goto L13
            r0 = r5
            un.a$e r0 = (un.a.e) r0
            int r1 = r0.f51494i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51494i = r1
            goto L18
        L13:
            un.a$e r0 = new un.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f51492d
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f51494i
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
            r4.f51478e = r5
            un.e r5 = r4.f51476c
            r0.f51494i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: un.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // sn.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof un.a.f
            if (r0 == 0) goto L13
            r0 = r5
            un.a$f r0 = (un.a.f) r0
            int r1 = r0.f51497i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51497i = r1
            goto L18
        L13:
            un.a$f r0 = new un.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f51495d
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f51497i
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
            un.e r5 = r4.f51476c
            r0.f51497i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: un.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
