package rs;

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
        int f49456d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g0 f49457e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f49458i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableSharedFlow f49459o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Object f49460p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rs.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0641a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f49461d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ int f49462e;

            C0641a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0641a c0641a = new C0641a(continuation);
                c0641a.f49462e = ((Number) obj).intValue();
                return c0641a;
            }

            public final Object invoke(int i10, Continuation continuation) {
                return ((C0641a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f32008a);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                boolean z10;
                wr.b.f();
                if (this.f49461d == 0) {
                    kotlin.c.b(obj);
                    if (this.f49462e > 0) {
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
            int f49463d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f49464e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f49465i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ MutableSharedFlow f49466o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object f49467p;

            /* renamed from: rs.w$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0642a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f49468a;

                static {
                    int[] iArr = new int[e0.values().length];
                    try {
                        iArr[e0.f49253d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[e0.f49254e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[e0.f49255i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    f49468a = iArr;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
                super(2, continuation);
                this.f49465i = flow;
                this.f49466o = mutableSharedFlow;
                this.f49467p = obj;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f49465i, this.f49466o, this.f49467p, continuation);
                bVar.f49464e = obj;
                return bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f49463d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    int i11 = C0642a.f49468a[((e0) this.f49464e).ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 == 3) {
                                Object obj2 = this.f49467p;
                                if (obj2 == c0.f49244a) {
                                    this.f49466o.i();
                                } else {
                                    kotlin.coroutines.jvm.internal.b.a(this.f49466o.b(obj2));
                                }
                            } else {
                                throw new qr.p();
                            }
                        }
                    } else {
                        Flow flow = this.f49465i;
                        MutableSharedFlow mutableSharedFlow = this.f49466o;
                        this.f49463d = 1;
                        if (flow.collect(mutableSharedFlow, this) == f10) {
                            return f10;
                        }
                    }
                }
                return Unit.f32008a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(e0 e0Var, Continuation continuation) {
                return ((b) create(e0Var, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g0 g0Var, Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f49457e = g0Var;
            this.f49458i = flow;
            this.f49459o = mutableSharedFlow;
            this.f49460p = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f49457e, this.f49458i, this.f49459o, this.f49460p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003c, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0059, code lost:
            if (rs.g.t(r8, r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x008a, code lost:
            if (rs.g.i(r8, r1, r7) == r0) goto L15;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r7.f49456d
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
                rs.g0 r8 = r7.f49457e
                rs.g0$a r1 = rs.g0.f49271a
                rs.g0 r6 = r1.a()
                if (r8 != r6) goto L3f
                kotlinx.coroutines.flow.Flow r8 = r7.f49458i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f49459o
                r7.f49456d = r5
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L3f:
                rs.g0 r8 = r7.f49457e
                rs.g0 r1 = r1.b()
                r5 = 0
                if (r8 != r1) goto L69
                kotlinx.coroutines.flow.MutableSharedFlow r8 = r7.f49459o
                rs.j0 r8 = r8.d()
                rs.w$a$a r1 = new rs.w$a$a
                r1.<init>(r5)
                r7.f49456d = r4
                java.lang.Object r8 = rs.g.t(r8, r1, r7)
                if (r8 != r0) goto L5c
                goto L8c
            L5c:
                kotlinx.coroutines.flow.Flow r8 = r7.f49458i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f49459o
                r7.f49456d = r3
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L69:
                rs.g0 r8 = r7.f49457e
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f49459o
                rs.j0 r1 = r1.d()
                kotlinx.coroutines.flow.Flow r8 = r8.a(r1)
                kotlinx.coroutines.flow.Flow r8 = rs.g.l(r8)
                rs.w$a$b r1 = new rs.w$a$b
                kotlinx.coroutines.flow.Flow r3 = r7.f49458i
                kotlinx.coroutines.flow.MutableSharedFlow r4 = r7.f49459o
                java.lang.Object r6 = r7.f49460p
                r1.<init>(r3, r4, r6, r5)
                r7.f49456d = r2
                java.lang.Object r8 = rs.g.i(r8, r1, r7)
                if (r8 != r0) goto L8d
            L8c:
                return r0
            L8d:
                kotlin.Unit r8 = kotlin.Unit.f32008a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: rs.w.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
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
    private static final rs.f0 b(kotlinx.coroutines.flow.Flow r7, int r8) {
        /*
            qs.g$b r0 = qs.g.f48126k
            int r0 = r0.a()
            int r0 = kotlin.ranges.d.d(r8, r0)
            int r0 = r0 - r8
            boolean r1 = r7 instanceof ss.e
            if (r1 == 0) goto L3c
            r1 = r7
            ss.e r1 = (ss.e) r1
            kotlinx.coroutines.flow.Flow r2 = r1.j()
            if (r2 == 0) goto L3c
            rs.f0 r7 = new rs.f0
            int r3 = r1.f50033e
            r4 = -3
            if (r3 == r4) goto L26
            r4 = -2
            if (r3 == r4) goto L26
            if (r3 == 0) goto L26
            r0 = r3
            goto L34
        L26:
            qs.a r4 = r1.f50034i
            qs.a r5 = qs.a.f48066d
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
            qs.a r8 = r1.f50034i
            kotlin.coroutines.CoroutineContext r1 = r1.f50032d
            r7.<init>(r2, r0, r8, r1)
            return r7
        L3c:
            rs.f0 r8 = new rs.f0
            qs.a r1 = qs.a.f48066d
            kotlin.coroutines.e r2 = kotlin.coroutines.e.f32082d
            r8.<init>(r7, r0, r1, r2)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.w.b(kotlinx.coroutines.flow.Flow, int):rs.f0");
    }

    private static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, Flow flow, MutableSharedFlow mutableSharedFlow, g0 g0Var, Object obj) {
        os.c0 c0Var;
        if (Intrinsics.areEqual(g0Var, g0.f49271a.a())) {
            c0Var = os.c0.f43491d;
        } else {
            c0Var = os.c0.f43494o;
        }
        return os.g.c(coroutineScope, coroutineContext, c0Var, new a(g0Var, flow, mutableSharedFlow, obj, null));
    }

    public static final a0 d(a0 a0Var, Function2 function2) {
        return new o0(a0Var, function2);
    }

    public static final j0 e(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        f0 b10 = b(flow, 1);
        MutableStateFlow a10 = l0.a(obj);
        return new y(a10, c(coroutineScope, b10.f49270d, b10.f49267a, a10, g0Var, obj));
    }
}
