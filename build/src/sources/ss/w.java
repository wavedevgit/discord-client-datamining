package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class w {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50329d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g0 f50330e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f50331i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableSharedFlow f50332o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Object f50333p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ss.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0687a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50334d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ int f50335e;

            C0687a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0687a c0687a = new C0687a(continuation);
                c0687a.f50335e = ((Number) obj).intValue();
                return c0687a;
            }

            public final Object invoke(int i10, Continuation continuation) {
                return ((C0687a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f31765a);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                boolean z10;
                xr.b.f();
                if (this.f50334d == 0) {
                    kotlin.c.b(obj);
                    if (this.f50335e > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return kotlin.coroutines.jvm.internal.b.a(z10);
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return invoke(((Number) obj).intValue(), (Continuation) obj2);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50336d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f50337e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f50338i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ MutableSharedFlow f50339o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object f50340p;

            /* renamed from: ss.w$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0688a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f50341a;

                static {
                    int[] iArr = new int[e0.values().length];
                    try {
                        iArr[e0.f50126d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[e0.f50127e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[e0.f50128i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    f50341a = iArr;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
                super(2, continuation);
                this.f50338i = flow;
                this.f50339o = mutableSharedFlow;
                this.f50340p = obj;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f50338i, this.f50339o, this.f50340p, continuation);
                bVar.f50337e = obj;
                return bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f50336d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    int i11 = C0688a.f50341a[((e0) this.f50337e).ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 == 3) {
                                Object obj2 = this.f50340p;
                                if (obj2 == c0.f50117a) {
                                    this.f50339o.i();
                                } else {
                                    kotlin.coroutines.jvm.internal.b.a(this.f50339o.b(obj2));
                                }
                            } else {
                                throw new rr.p();
                            }
                        }
                    } else {
                        Flow flow = this.f50338i;
                        MutableSharedFlow mutableSharedFlow = this.f50339o;
                        this.f50336d = 1;
                        if (flow.collect(mutableSharedFlow, this) == f10) {
                            return f10;
                        }
                    }
                }
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(e0 e0Var, Continuation continuation) {
                return ((b) create(e0Var, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g0 g0Var, Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f50330e = g0Var;
            this.f50331i = flow;
            this.f50332o = mutableSharedFlow;
            this.f50333p = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f50330e, this.f50331i, this.f50332o, this.f50333p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003c, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0059, code lost:
            if (ss.g.t(r8, r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x008a, code lost:
            if (ss.g.i(r8, r1, r7) == r0) goto L15;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = xr.b.f()
                int r1 = r7.f50329d
                r2 = 4
                r3 = 3
                r4 = 2
                r5 = 1
                if (r1 == 0) goto L25
                if (r1 == r5) goto L21
                if (r1 == r4) goto L1d
                if (r1 == r3) goto L21
                if (r1 != r2) goto L15
                goto L21
            L15:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r0)
                throw r8
            L1d:
                kotlin.c.b(r8)
                goto L5c
            L21:
                kotlin.c.b(r8)
                goto L8d
            L25:
                kotlin.c.b(r8)
                ss.g0 r8 = r7.f50330e
                ss.g0$a r1 = ss.g0.f50144a
                ss.g0 r6 = r1.a()
                if (r8 != r6) goto L3f
                kotlinx.coroutines.flow.Flow r8 = r7.f50331i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f50332o
                r7.f50329d = r5
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L3f:
                ss.g0 r8 = r7.f50330e
                ss.g0 r1 = r1.b()
                r5 = 0
                if (r8 != r1) goto L69
                kotlinx.coroutines.flow.MutableSharedFlow r8 = r7.f50332o
                ss.j0 r8 = r8.d()
                ss.w$a$a r1 = new ss.w$a$a
                r1.<init>(r5)
                r7.f50329d = r4
                java.lang.Object r8 = ss.g.t(r8, r1, r7)
                if (r8 != r0) goto L5c
                goto L8c
            L5c:
                kotlinx.coroutines.flow.Flow r8 = r7.f50331i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f50332o
                r7.f50329d = r3
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L69:
                ss.g0 r8 = r7.f50330e
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f50332o
                ss.j0 r1 = r1.d()
                kotlinx.coroutines.flow.Flow r8 = r8.a(r1)
                kotlinx.coroutines.flow.Flow r8 = ss.g.l(r8)
                ss.w$a$b r1 = new ss.w$a$b
                kotlinx.coroutines.flow.Flow r3 = r7.f50331i
                kotlinx.coroutines.flow.MutableSharedFlow r4 = r7.f50332o
                java.lang.Object r6 = r7.f50333p
                r1.<init>(r3, r4, r6, r5)
                r7.f50329d = r2
                java.lang.Object r8 = ss.g.i(r8, r1, r7)
                if (r8 != r0) goto L8d
            L8c:
                return r0
            L8d:
                kotlin.Unit r8 = kotlin.Unit.f31765a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.w.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public static final j0 a(MutableStateFlow mutableStateFlow) {
        return new y(mutableStateFlow, null);
    }

    /* JADX WARN: Code restructure failed: missing block: B:14:0x002d, code lost:
        if (r3 == 0) goto L17;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final ss.f0 b(kotlinx.coroutines.flow.Flow r7, int r8) {
        /*
            rs.g$b r0 = rs.g.f49292k
            int r0 = r0.a()
            int r0 = kotlin.ranges.d.d(r8, r0)
            int r0 = r0 - r8
            boolean r1 = r7 instanceof ts.e
            if (r1 == 0) goto L3c
            r1 = r7
            ts.e r1 = (ts.e) r1
            kotlinx.coroutines.flow.Flow r2 = r1.j()
            if (r2 == 0) goto L3c
            ss.f0 r7 = new ss.f0
            int r3 = r1.f50925e
            r4 = -3
            if (r3 == r4) goto L26
            r4 = -2
            if (r3 == r4) goto L26
            if (r3 == 0) goto L26
            r0 = r3
            goto L34
        L26:
            rs.a r4 = r1.f50926i
            rs.a r5 = rs.a.f49232d
            r6 = 0
            if (r4 != r5) goto L31
            if (r3 != 0) goto L34
        L2f:
            r0 = r6
            goto L34
        L31:
            if (r8 != 0) goto L2f
            r0 = 1
        L34:
            rs.a r8 = r1.f50926i
            kotlin.coroutines.CoroutineContext r1 = r1.f50924d
            r7.<init>(r2, r0, r8, r1)
            return r7
        L3c:
            ss.f0 r8 = new ss.f0
            rs.a r1 = rs.a.f49232d
            kotlin.coroutines.e r2 = kotlin.coroutines.e.f31839d
            r8.<init>(r7, r0, r1, r2)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: ss.w.b(kotlinx.coroutines.flow.Flow, int):ss.f0");
    }

    private static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, Flow flow, MutableSharedFlow mutableSharedFlow, g0 g0Var, Object obj) {
        ps.c0 c0Var;
        if (Intrinsics.areEqual(g0Var, g0.f50144a.a())) {
            c0Var = ps.c0.f44496d;
        } else {
            c0Var = ps.c0.f44499o;
        }
        return ps.g.c(coroutineScope, coroutineContext, c0Var, new a(g0Var, flow, mutableSharedFlow, obj, null));
    }

    public static final a0 d(a0 a0Var, Function2 function2) {
        return new o0(a0Var, function2);
    }

    public static final j0 e(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        f0 b10 = b(flow, 1);
        MutableStateFlow a10 = l0.a(obj);
        return new y(a10, c(coroutineScope, b10.f50143d, b10.f50140a, a10, g0Var, obj));
    }
}
