package bt;

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
        int f7758d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g0 f7759e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f7760i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableSharedFlow f7761o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Object f7762p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: bt.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0119a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f7763d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ int f7764e;

            C0119a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0119a c0119a = new C0119a(continuation);
                c0119a.f7764e = ((Number) obj).intValue();
                return c0119a;
            }

            public final Object invoke(int i10, Continuation continuation) {
                return ((C0119a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f31987a);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                boolean z10;
                gs.b.f();
                if (this.f7763d == 0) {
                    kotlin.c.b(obj);
                    if (this.f7764e > 0) {
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
            int f7765d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f7766e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f7767i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ MutableSharedFlow f7768o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object f7769p;

            /* renamed from: bt.w$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0120a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f7770a;

                static {
                    int[] iArr = new int[e0.values().length];
                    try {
                        iArr[e0.f7555d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[e0.f7556e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[e0.f7557i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    f7770a = iArr;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
                super(2, continuation);
                this.f7767i = flow;
                this.f7768o = mutableSharedFlow;
                this.f7769p = obj;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f7767i, this.f7768o, this.f7769p, continuation);
                bVar.f7766e = obj;
                return bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f7765d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    int i11 = C0120a.f7770a[((e0) this.f7766e).ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 == 3) {
                                Object obj2 = this.f7769p;
                                if (obj2 == c0.f7546a) {
                                    this.f7768o.i();
                                } else {
                                    kotlin.coroutines.jvm.internal.b.a(this.f7768o.b(obj2));
                                }
                            } else {
                                throw new as.p();
                            }
                        }
                    } else {
                        Flow flow = this.f7767i;
                        MutableSharedFlow mutableSharedFlow = this.f7768o;
                        this.f7765d = 1;
                        if (flow.collect(mutableSharedFlow, this) == f10) {
                            return f10;
                        }
                    }
                }
                return Unit.f31987a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(e0 e0Var, Continuation continuation) {
                return ((b) create(e0Var, continuation)).invokeSuspend(Unit.f31987a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g0 g0Var, Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f7759e = g0Var;
            this.f7760i = flow;
            this.f7761o = mutableSharedFlow;
            this.f7762p = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f7759e, this.f7760i, this.f7761o, this.f7762p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003c, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0059, code lost:
            if (bt.g.t(r8, r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x008a, code lost:
            if (bt.g.i(r8, r1, r7) == r0) goto L15;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = gs.b.f()
                int r1 = r7.f7758d
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
                bt.g0 r8 = r7.f7759e
                bt.g0$a r1 = bt.g0.f7573a
                bt.g0 r6 = r1.a()
                if (r8 != r6) goto L3f
                kotlinx.coroutines.flow.Flow r8 = r7.f7760i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f7761o
                r7.f7758d = r5
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L3f:
                bt.g0 r8 = r7.f7759e
                bt.g0 r1 = r1.b()
                r5 = 0
                if (r8 != r1) goto L69
                kotlinx.coroutines.flow.MutableSharedFlow r8 = r7.f7761o
                bt.j0 r8 = r8.d()
                bt.w$a$a r1 = new bt.w$a$a
                r1.<init>(r5)
                r7.f7758d = r4
                java.lang.Object r8 = bt.g.t(r8, r1, r7)
                if (r8 != r0) goto L5c
                goto L8c
            L5c:
                kotlinx.coroutines.flow.Flow r8 = r7.f7760i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f7761o
                r7.f7758d = r3
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L69:
                bt.g0 r8 = r7.f7759e
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f7761o
                bt.j0 r1 = r1.d()
                kotlinx.coroutines.flow.Flow r8 = r8.a(r1)
                kotlinx.coroutines.flow.Flow r8 = bt.g.l(r8)
                bt.w$a$b r1 = new bt.w$a$b
                kotlinx.coroutines.flow.Flow r3 = r7.f7760i
                kotlinx.coroutines.flow.MutableSharedFlow r4 = r7.f7761o
                java.lang.Object r6 = r7.f7762p
                r1.<init>(r3, r4, r6, r5)
                r7.f7758d = r2
                java.lang.Object r8 = bt.g.i(r8, r1, r7)
                if (r8 != r0) goto L8d
            L8c:
                return r0
            L8d:
                kotlin.Unit r8 = kotlin.Unit.f31987a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.w.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
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
    private static final bt.f0 b(kotlinx.coroutines.flow.Flow r7, int r8) {
        /*
            at.g$b r0 = at.g.f6164a
            int r0 = r0.a()
            int r0 = kotlin.ranges.d.d(r8, r0)
            int r0 = r0 - r8
            boolean r1 = r7 instanceof ct.e
            if (r1 == 0) goto L3c
            r1 = r7
            ct.e r1 = (ct.e) r1
            kotlinx.coroutines.flow.Flow r2 = r1.j()
            if (r2 == 0) goto L3c
            bt.f0 r7 = new bt.f0
            int r3 = r1.f21031e
            r4 = -3
            if (r3 == r4) goto L26
            r4 = -2
            if (r3 == r4) goto L26
            if (r3 == 0) goto L26
            r0 = r3
            goto L34
        L26:
            at.a r4 = r1.f21032i
            at.a r5 = at.a.f6104d
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
            at.a r8 = r1.f21032i
            kotlin.coroutines.CoroutineContext r1 = r1.f21030d
            r7.<init>(r2, r0, r8, r1)
            return r7
        L3c:
            bt.f0 r8 = new bt.f0
            at.a r1 = at.a.f6104d
            kotlin.coroutines.e r2 = kotlin.coroutines.e.f32061d
            r8.<init>(r7, r0, r1, r2)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: bt.w.b(kotlinx.coroutines.flow.Flow, int):bt.f0");
    }

    private static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, Flow flow, MutableSharedFlow mutableSharedFlow, g0 g0Var, Object obj) {
        ys.c0 c0Var;
        if (Intrinsics.areEqual(g0Var, g0.f7573a.a())) {
            c0Var = ys.c0.f55782d;
        } else {
            c0Var = ys.c0.f55785o;
        }
        return ys.g.c(coroutineScope, coroutineContext, c0Var, new a(g0Var, flow, mutableSharedFlow, obj, null));
    }

    public static final a0 d(a0 a0Var, Function2 function2) {
        return new o0(a0Var, function2);
    }

    public static final j0 e(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        f0 b10 = b(flow, 1);
        MutableStateFlow a10 = l0.a(obj);
        return new y(a10, c(coroutineScope, b10.f7572d, b10.f7569a, a10, g0Var, obj));
    }
}
