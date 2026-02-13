package ho;

import android.view.View;
import bt.j0;
import bt.l0;
import fo.v;
import fo.x;
import ho.e;
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
import ys.j1;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements fo.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f28042a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f28043b;

    /* renamed from: c  reason: collision with root package name */
    private ho.e f28044c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f28045d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f28046e;

    /* renamed from: f  reason: collision with root package name */
    private Job f28047f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: ho.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0364a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f28048d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f28049e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f28050i;

        C0364a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = gs.b.f();
            int i10 = this.f28048d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f28049e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f28050i;
                this.f28049e = dVar2;
                this.f28048d = 1;
                if (((FlowCollector) this.f28049e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f28098a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0364a c0364a = new C0364a(continuation);
            c0364a.f28049e = flowCollector;
            c0364a.f28050i = dVar;
            return c0364a.invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28051d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ho.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0365a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f28053d;

            C0365a(a aVar) {
                this.f28053d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f28097a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0367d.f28100a)) {
                        this.f28053d.f28045d.setValue(x.e.f24157a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f28098a)) {
                        this.f28053d.f28045d.setValue(new x.a(this.f28053d.f28046e));
                        a aVar = this.f28053d;
                        aVar.f28044c = aVar.f28042a.a();
                        this.f28053d.f28046e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f28053d.f28042a.b()) {
                                Job job = this.f28053d.f28047f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f28053d.u();
                            } else {
                                this.f28053d.f28045d.setValue(x.b.f24154a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f28053d.f28045d.setValue(x.c.f24155a);
                        } else {
                            throw new as.p();
                        }
                    } else {
                        throw new as.p();
                    }
                }
                return Unit.f32556a;
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
            Object f10 = gs.b.f();
            int i10 = this.f28051d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = bt.g.e(aVar.t(aVar.f28044c.K()));
                C0365a c0365a = new C0365a(a.this);
                this.f28051d = 1;
                if (e10.collect(c0365a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f28054d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f28054d == 0) {
                kotlin.c.b(obj);
                a.this.f28045d.setValue(x.c.f24155a);
                a.this.d();
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f28056d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f28057e;

        /* renamed from: o  reason: collision with root package name */
        int f28059o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f28057e = obj;
            this.f28059o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == gs.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f28060d;

        /* renamed from: i  reason: collision with root package name */
        int f28062i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f28060d = obj;
            this.f28062i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == gs.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f28063d;

        /* renamed from: i  reason: collision with root package name */
        int f28065i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f28063d = obj;
            this.f28065i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == gs.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f28042a = camera2ManagerFactory;
        this.f28043b = kotlinx.coroutines.i.a(m0.a().O0(j1.b(null, 1, null)));
        this.f28044c = camera2ManagerFactory.a();
        this.f28045d = l0.a(x.c.f24155a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return bt.g.N(j0Var, new C0364a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f28044c = this.f28042a.a();
        ys.i.d(this.f28043b, m0.c(), null, new c(null), 2, null);
    }

    @Override // fo.i
    public void a(boolean z10) {
        this.f28044c.G(z10);
    }

    @Override // fo.i
    public v b() {
        return this.f28044c.I();
    }

    @Override // fo.i
    public j0 c() {
        return this.f28045d;
    }

    @Override // fo.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f28045d.getValue(), x.c.f24155a) && !(this.f28045d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f28047f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f28045d.setValue(x.d.f24156a);
        d10 = ys.i.d(this.f28043b, null, null, new b(null), 3, null);
        this.f28047f = d10;
        this.f28044c.T();
    }

    @Override // fo.i
    public View e() {
        return this.f28044c.J();
    }

    @Override // fo.i
    public void f() {
        this.f28044c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // fo.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof ho.a.d
            if (r0 == 0) goto L13
            r0 = r5
            ho.a$d r0 = (ho.a.d) r0
            int r1 = r0.f28059o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f28059o = r1
            goto L18
        L13:
            ho.a$d r0 = new ho.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f28057e
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f28059o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f28056d
            ho.a r0 = (ho.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f28045d
            java.lang.Object r5 = r5.getValue()
            fo.x$e r2 = fo.x.e.f24157a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f32553e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            ho.e r5 = r4.f28044c
            r0.f28056d = r4
            r0.f28059o = r3
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
            r0.f28046e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: ho.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // fo.i
    public void h(boolean z10) {
        this.f28044c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // fo.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof ho.a.e
            if (r0 == 0) goto L13
            r0 = r5
            ho.a$e r0 = (ho.a.e) r0
            int r1 = r0.f28062i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f28062i = r1
            goto L18
        L13:
            ho.a$e r0 = new ho.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f28060d
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f28062i
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
            r4.f28046e = r5
            ho.e r5 = r4.f28044c
            r0.f28062i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: ho.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // fo.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof ho.a.f
            if (r0 == 0) goto L13
            r0 = r5
            ho.a$f r0 = (ho.a.f) r0
            int r1 = r0.f28065i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f28065i = r1
            goto L18
        L13:
            ho.a$f r0 = new ho.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f28063d
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f28065i
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
            ho.e r5 = r4.f28044c
            r0.f28065i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: ho.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
