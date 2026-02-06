package wn;

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
import os.j1;
import os.m0;
import rs.j0;
import rs.l0;
import un.v;
import un.x;
import wn.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements un.i {

    /* renamed from: a  reason: collision with root package name */
    private final g f53874a;

    /* renamed from: b  reason: collision with root package name */
    private final CoroutineScope f53875b;

    /* renamed from: c  reason: collision with root package name */
    private wn.e f53876c;

    /* renamed from: d  reason: collision with root package name */
    private MutableStateFlow f53877d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53878e;

    /* renamed from: f  reason: collision with root package name */
    private Job f53879f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: wn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0719a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f53880d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f53881e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f53882i;

        C0719a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            e.d dVar;
            Object f10 = wr.b.f();
            int i10 = this.f53880d;
            if (i10 != 0) {
                if (i10 == 1) {
                    dVar = (e.d) this.f53881e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                e.d dVar2 = (e.d) this.f53882i;
                this.f53881e = dVar2;
                this.f53880d = 1;
                if (((FlowCollector) this.f53881e).emit(dVar2, this) == f10) {
                    return f10;
                }
                dVar = dVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual(dVar, e.d.b.f53930a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, e.d dVar, Continuation continuation) {
            C0719a c0719a = new C0719a(continuation);
            c0719a.f53881e = flowCollector;
            c0719a.f53882i = dVar;
            return c0719a.invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53883d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wn.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0720a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f53885d;

            C0720a(a aVar) {
                this.f53885d = aVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(e.d dVar, Continuation continuation) {
                if (!Intrinsics.areEqual(dVar, e.d.a.f53929a)) {
                    if (Intrinsics.areEqual(dVar, e.d.C0722d.f53932a)) {
                        this.f53885d.f53877d.setValue(x.e.f51853a);
                    } else if (Intrinsics.areEqual(dVar, e.d.b.f53930a)) {
                        this.f53885d.f53877d.setValue(new x.a(this.f53885d.f53878e));
                        a aVar = this.f53885d;
                        aVar.f53876c = aVar.f53874a.a();
                        this.f53885d.f53878e = false;
                    } else if (dVar instanceof e.d.c) {
                        e.c a10 = ((e.d.c) dVar).a();
                        if (a10 instanceof e.c.a) {
                            if (this.f53885d.f53874a.b()) {
                                Job job = this.f53885d.f53879f;
                                if (job != null) {
                                    Job.a.a(job, null, 1, null);
                                }
                                this.f53885d.u();
                            } else {
                                this.f53885d.f53877d.setValue(x.b.f51850a);
                            }
                        } else if (a10 instanceof e.c.b) {
                            this.f53885d.f53877d.setValue(x.c.f51851a);
                        } else {
                            throw new qr.p();
                        }
                    } else {
                        throw new qr.p();
                    }
                }
                return Unit.f32008a;
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
            Object f10 = wr.b.f();
            int i10 = this.f53883d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                Flow e10 = rs.g.e(aVar.t(aVar.f53876c.K()));
                C0720a c0720a = new C0720a(a.this);
                this.f53883d = 1;
                if (e10.collect(c0720a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53886d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f53886d == 0) {
                kotlin.c.b(obj);
                a.this.f53877d.setValue(x.c.f51851a);
                a.this.d();
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f53888d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f53889e;

        /* renamed from: o  reason: collision with root package name */
        int f53891o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f53889e = obj;
            this.f53891o |= Integer.MIN_VALUE;
            Object g10 = a.this.g(this);
            if (g10 == wr.b.f()) {
                return g10;
            }
            return Result.a(g10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f53892d;

        /* renamed from: i  reason: collision with root package name */
        int f53894i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f53892d = obj;
            this.f53894i |= Integer.MIN_VALUE;
            Object i10 = a.this.i(this);
            if (i10 == wr.b.f()) {
                return i10;
            }
            return Result.a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f53895d;

        /* renamed from: i  reason: collision with root package name */
        int f53897i;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f53895d = obj;
            this.f53897i |= Integer.MIN_VALUE;
            Object j10 = a.this.j(this);
            if (j10 == wr.b.f()) {
                return j10;
            }
            return Result.a(j10);
        }
    }

    public a(g camera2ManagerFactory) {
        Intrinsics.checkNotNullParameter(camera2ManagerFactory, "camera2ManagerFactory");
        this.f53874a = camera2ManagerFactory;
        this.f53875b = kotlinx.coroutines.i.a(m0.a().Y0(j1.b(null, 1, null)));
        this.f53876c = camera2ManagerFactory.a();
        this.f53877d = l0.a(x.c.f51851a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Flow t(j0 j0Var) {
        return rs.g.N(j0Var, new C0719a(null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u() {
        this.f53876c = this.f53874a.a();
        os.i.d(this.f53875b, m0.c(), null, new c(null), 2, null);
    }

    @Override // un.i
    public void a(boolean z10) {
        this.f53876c.G(z10);
    }

    @Override // un.i
    public v b() {
        return this.f53876c.I();
    }

    @Override // un.i
    public j0 c() {
        return this.f53877d;
    }

    @Override // un.i
    public void d() {
        Job d10;
        if (!Intrinsics.areEqual(this.f53877d.getValue(), x.c.f51851a) && !(this.f53877d.getValue() instanceof x.a)) {
            return;
        }
        Job job = this.f53879f;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        this.f53877d.setValue(x.d.f51852a);
        d10 = os.i.d(this.f53875b, null, null, new b(null), 3, null);
        this.f53879f = d10;
        this.f53876c.T();
    }

    @Override // un.i
    public View e() {
        return this.f53876c.J();
    }

    @Override // un.i
    public void f() {
        this.f53876c.H();
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x006e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0079  */
    @Override // un.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof wn.a.d
            if (r0 == 0) goto L13
            r0 = r5
            wn.a$d r0 = (wn.a.d) r0
            int r1 = r0.f53891o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f53891o = r1
            goto L18
        L13:
            wn.a$d r0 = new wn.a$d
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f53889e
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f53891o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r0 = r0.f53888d
            wn.a r0 = (wn.a) r0
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
            kotlinx.coroutines.flow.MutableStateFlow r5 = r4.f53877d
            java.lang.Object r5 = r5.getValue()
            un.x$e r2 = un.x.e.f51853a
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r2)
            if (r5 != 0) goto L58
            kotlin.Result$a r5 = kotlin.Result.f32005e
            r5 = 0
            java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
            java.lang.Object r5 = kotlin.Result.b(r5)
            return r5
        L58:
            wn.e r5 = r4.f53876c
            r0.f53888d = r4
            r0.f53891o = r3
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
            r0.f53878e = r3
        L7b:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.a.g(kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // un.i
    public void h(boolean z10) {
        this.f53876c.S(z10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // un.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object i(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof wn.a.e
            if (r0 == 0) goto L13
            r0 = r5
            wn.a$e r0 = (wn.a.e) r0
            int r1 = r0.f53894i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f53894i = r1
            goto L18
        L13:
            wn.a$e r0 = new wn.a$e
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f53892d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f53894i
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
            r4.f53878e = r5
            wn.e r5 = r4.f53876c
            r0.f53894i = r3
            java.lang.Object r5 = r5.X(r0)
            if (r5 != r1) goto L48
            return r1
        L48:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.a.i(kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0037  */
    @Override // un.i
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object j(kotlin.coroutines.Continuation r5) {
        /*
            r4 = this;
            boolean r0 = r5 instanceof wn.a.f
            if (r0 == 0) goto L13
            r0 = r5
            wn.a$f r0 = (wn.a.f) r0
            int r1 = r0.f53897i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f53897i = r1
            goto L18
        L13:
            wn.a$f r0 = new wn.a$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f53895d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f53897i
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
            wn.e r5 = r4.f53876c
            r0.f53897i = r3
            java.lang.Object r5 = r5.Q(r0)
            if (r5 != r1) goto L45
            return r1
        L45:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: wn.a.j(kotlin.coroutines.Continuation):java.lang.Object");
    }
}
