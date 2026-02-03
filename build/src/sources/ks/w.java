package ks;

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
        int f36631d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g0 f36632e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f36633i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableSharedFlow f36634o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Object f36635p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0472a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f36636d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ int f36637e;

            C0472a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0472a c0472a = new C0472a(continuation);
                c0472a.f36637e = ((Number) obj).intValue();
                return c0472a;
            }

            public final Object invoke(int i10, Continuation continuation) {
                return ((C0472a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f33074a);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                boolean z10;
                pr.b.f();
                if (this.f36636d == 0) {
                    kotlin.c.b(obj);
                    if (this.f36637e > 0) {
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
            int f36638d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f36639e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f36640i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ MutableSharedFlow f36641o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object f36642p;

            /* renamed from: ks.w$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0473a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f36643a;

                static {
                    int[] iArr = new int[e0.values().length];
                    try {
                        iArr[e0.f36428d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[e0.f36429e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[e0.f36430i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    f36643a = iArr;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
                super(2, continuation);
                this.f36640i = flow;
                this.f36641o = mutableSharedFlow;
                this.f36642p = obj;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f36640i, this.f36641o, this.f36642p, continuation);
                bVar.f36639e = obj;
                return bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f36638d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    int i11 = C0473a.f36643a[((e0) this.f36639e).ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 == 3) {
                                Object obj2 = this.f36642p;
                                if (obj2 == c0.f36419a) {
                                    this.f36641o.i();
                                } else {
                                    kotlin.coroutines.jvm.internal.b.a(this.f36641o.b(obj2));
                                }
                            } else {
                                throw new jr.p();
                            }
                        }
                    } else {
                        Flow flow = this.f36640i;
                        MutableSharedFlow mutableSharedFlow = this.f36641o;
                        this.f36638d = 1;
                        if (flow.collect(mutableSharedFlow, this) == f10) {
                            return f10;
                        }
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(e0 e0Var, Continuation continuation) {
                return ((b) create(e0Var, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g0 g0Var, Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f36632e = g0Var;
            this.f36633i = flow;
            this.f36634o = mutableSharedFlow;
            this.f36635p = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f36632e, this.f36633i, this.f36634o, this.f36635p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003c, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0059, code lost:
            if (ks.g.t(r8, r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x008a, code lost:
            if (ks.g.i(r8, r1, r7) == r0) goto L15;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = pr.b.f()
                int r1 = r7.f36631d
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
                ks.g0 r8 = r7.f36632e
                ks.g0$a r1 = ks.g0.f36446a
                ks.g0 r6 = r1.a()
                if (r8 != r6) goto L3f
                kotlinx.coroutines.flow.Flow r8 = r7.f36633i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f36634o
                r7.f36631d = r5
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L3f:
                ks.g0 r8 = r7.f36632e
                ks.g0 r1 = r1.b()
                r5 = 0
                if (r8 != r1) goto L69
                kotlinx.coroutines.flow.MutableSharedFlow r8 = r7.f36634o
                ks.j0 r8 = r8.d()
                ks.w$a$a r1 = new ks.w$a$a
                r1.<init>(r5)
                r7.f36631d = r4
                java.lang.Object r8 = ks.g.t(r8, r1, r7)
                if (r8 != r0) goto L5c
                goto L8c
            L5c:
                kotlinx.coroutines.flow.Flow r8 = r7.f36633i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f36634o
                r7.f36631d = r3
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L69:
                ks.g0 r8 = r7.f36632e
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f36634o
                ks.j0 r1 = r1.d()
                kotlinx.coroutines.flow.Flow r8 = r8.a(r1)
                kotlinx.coroutines.flow.Flow r8 = ks.g.l(r8)
                ks.w$a$b r1 = new ks.w$a$b
                kotlinx.coroutines.flow.Flow r3 = r7.f36633i
                kotlinx.coroutines.flow.MutableSharedFlow r4 = r7.f36634o
                java.lang.Object r6 = r7.f36635p
                r1.<init>(r3, r4, r6, r5)
                r7.f36631d = r2
                java.lang.Object r8 = ks.g.i(r8, r1, r7)
                if (r8 != r0) goto L8d
            L8c:
                return r0
            L8d:
                kotlin.Unit r8 = kotlin.Unit.f33074a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: ks.w.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
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
    private static final ks.f0 b(kotlinx.coroutines.flow.Flow r7, int r8) {
        /*
            js.g$b r0 = js.g.f32264g
            int r0 = r0.a()
            int r0 = kotlin.ranges.d.d(r8, r0)
            int r0 = r0 - r8
            boolean r1 = r7 instanceof ls.e
            if (r1 == 0) goto L3c
            r1 = r7
            ls.e r1 = (ls.e) r1
            kotlinx.coroutines.flow.Flow r2 = r1.j()
            if (r2 == 0) goto L3c
            ks.f0 r7 = new ks.f0
            int r3 = r1.f37549e
            r4 = -3
            if (r3 == r4) goto L26
            r4 = -2
            if (r3 == r4) goto L26
            if (r3 == 0) goto L26
            r0 = r3
            goto L34
        L26:
            js.a r4 = r1.f37550i
            js.a r5 = js.a.f32204d
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
            js.a r8 = r1.f37550i
            kotlin.coroutines.CoroutineContext r1 = r1.f37548d
            r7.<init>(r2, r0, r8, r1)
            return r7
        L3c:
            ks.f0 r8 = new ks.f0
            js.a r1 = js.a.f32204d
            kotlin.coroutines.e r2 = kotlin.coroutines.e.f33148d
            r8.<init>(r7, r0, r1, r2)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: ks.w.b(kotlinx.coroutines.flow.Flow, int):ks.f0");
    }

    private static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, Flow flow, MutableSharedFlow mutableSharedFlow, g0 g0Var, Object obj) {
        hs.c0 c0Var;
        if (Intrinsics.areEqual(g0Var, g0.f36446a.a())) {
            c0Var = hs.c0.f27907d;
        } else {
            c0Var = hs.c0.f27910o;
        }
        return hs.g.c(coroutineScope, coroutineContext, c0Var, new a(g0Var, flow, mutableSharedFlow, obj, null));
    }

    public static final a0 d(a0 a0Var, Function2 function2) {
        return new o0(a0Var, function2);
    }

    public static final j0 e(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        f0 b10 = b(flow, 1);
        MutableStateFlow a10 = l0.a(obj);
        return new y(a10, c(coroutineScope, b10.f36445d, b10.f36442a, a10, g0Var, obj));
    }
}
