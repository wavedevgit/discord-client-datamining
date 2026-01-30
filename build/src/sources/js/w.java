package js;

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
        int f32712d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g0 f32713e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f32714i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ MutableSharedFlow f32715o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Object f32716p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: js.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0441a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f32717d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ int f32718e;

            C0441a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0441a c0441a = new C0441a(continuation);
                c0441a.f32718e = ((Number) obj).intValue();
                return c0441a;
            }

            public final Object invoke(int i10, Continuation continuation) {
                return ((C0441a) create(Integer.valueOf(i10), continuation)).invokeSuspend(Unit.f33298a);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                boolean z10;
                or.b.f();
                if (this.f32717d == 0) {
                    kotlin.c.b(obj);
                    if (this.f32718e > 0) {
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
            int f32719d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f32720e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f32721i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ MutableSharedFlow f32722o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object f32723p;

            /* renamed from: js.w$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public /* synthetic */ class C0442a {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f32724a;

                static {
                    int[] iArr = new int[e0.values().length];
                    try {
                        iArr[e0.f32509d.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[e0.f32510e.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[e0.f32511i.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    f32724a = iArr;
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
                super(2, continuation);
                this.f32721i = flow;
                this.f32722o = mutableSharedFlow;
                this.f32723p = obj;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f32721i, this.f32722o, this.f32723p, continuation);
                bVar.f32720e = obj;
                return bVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f32719d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    int i11 = C0442a.f32724a[((e0) this.f32720e).ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 == 3) {
                                Object obj2 = this.f32723p;
                                if (obj2 == c0.f32500a) {
                                    this.f32722o.i();
                                } else {
                                    kotlin.coroutines.jvm.internal.b.a(this.f32722o.b(obj2));
                                }
                            } else {
                                throw new ir.p();
                            }
                        }
                    } else {
                        Flow flow = this.f32721i;
                        MutableSharedFlow mutableSharedFlow = this.f32722o;
                        this.f32719d = 1;
                        if (flow.collect(mutableSharedFlow, this) == f10) {
                            return f10;
                        }
                    }
                }
                return Unit.f33298a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(e0 e0Var, Continuation continuation) {
                return ((b) create(e0Var, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(g0 g0Var, Flow flow, MutableSharedFlow mutableSharedFlow, Object obj, Continuation continuation) {
            super(2, continuation);
            this.f32713e = g0Var;
            this.f32714i = flow;
            this.f32715o = mutableSharedFlow;
            this.f32716p = obj;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f32713e, this.f32714i, this.f32715o, this.f32716p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003c, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0059, code lost:
            if (js.g.t(r8, r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0066, code lost:
            if (r8.collect(r1, r7) == r0) goto L15;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x008a, code lost:
            if (js.g.i(r8, r1, r7) == r0) goto L15;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r8) {
            /*
                r7 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r7.f32712d
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
                js.g0 r8 = r7.f32713e
                js.g0$a r1 = js.g0.f32527a
                js.g0 r6 = r1.a()
                if (r8 != r6) goto L3f
                kotlinx.coroutines.flow.Flow r8 = r7.f32714i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f32715o
                r7.f32712d = r5
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L3f:
                js.g0 r8 = r7.f32713e
                js.g0 r1 = r1.b()
                r5 = 0
                if (r8 != r1) goto L69
                kotlinx.coroutines.flow.MutableSharedFlow r8 = r7.f32715o
                js.j0 r8 = r8.e()
                js.w$a$a r1 = new js.w$a$a
                r1.<init>(r5)
                r7.f32712d = r4
                java.lang.Object r8 = js.g.t(r8, r1, r7)
                if (r8 != r0) goto L5c
                goto L8c
            L5c:
                kotlinx.coroutines.flow.Flow r8 = r7.f32714i
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f32715o
                r7.f32712d = r3
                java.lang.Object r8 = r8.collect(r1, r7)
                if (r8 != r0) goto L8d
                goto L8c
            L69:
                js.g0 r8 = r7.f32713e
                kotlinx.coroutines.flow.MutableSharedFlow r1 = r7.f32715o
                js.j0 r1 = r1.e()
                kotlinx.coroutines.flow.Flow r8 = r8.a(r1)
                kotlinx.coroutines.flow.Flow r8 = js.g.l(r8)
                js.w$a$b r1 = new js.w$a$b
                kotlinx.coroutines.flow.Flow r3 = r7.f32714i
                kotlinx.coroutines.flow.MutableSharedFlow r4 = r7.f32715o
                java.lang.Object r6 = r7.f32716p
                r1.<init>(r3, r4, r6, r5)
                r7.f32712d = r2
                java.lang.Object r8 = js.g.i(r8, r1, r7)
                if (r8 != r0) goto L8d
            L8c:
                return r0
            L8d:
                kotlin.Unit r8 = kotlin.Unit.f33298a
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: js.w.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
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
    private static final js.f0 b(kotlinx.coroutines.flow.Flow r7, int r8) {
        /*
            is.g$b r0 = is.g.f31201g
            int r0 = r0.a()
            int r0 = kotlin.ranges.d.d(r8, r0)
            int r0 = r0 - r8
            boolean r1 = r7 instanceof ks.e
            if (r1 == 0) goto L3c
            r1 = r7
            ks.e r1 = (ks.e) r1
            kotlinx.coroutines.flow.Flow r2 = r1.j()
            if (r2 == 0) goto L3c
            js.f0 r7 = new js.f0
            int r3 = r1.f36467e
            r4 = -3
            if (r3 == r4) goto L26
            r4 = -2
            if (r3 == r4) goto L26
            if (r3 == 0) goto L26
            r0 = r3
            goto L34
        L26:
            is.a r4 = r1.f36468i
            is.a r5 = is.a.f31141d
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
            is.a r8 = r1.f36468i
            kotlin.coroutines.CoroutineContext r1 = r1.f36466d
            r7.<init>(r2, r0, r8, r1)
            return r7
        L3c:
            js.f0 r8 = new js.f0
            is.a r1 = is.a.f31141d
            kotlin.coroutines.e r2 = kotlin.coroutines.e.f33372d
            r8.<init>(r7, r0, r1, r2)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: js.w.b(kotlinx.coroutines.flow.Flow, int):js.f0");
    }

    private static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, Flow flow, MutableSharedFlow mutableSharedFlow, g0 g0Var, Object obj) {
        gs.c0 c0Var;
        if (Intrinsics.areEqual(g0Var, g0.f32527a.a())) {
            c0Var = gs.c0.f27160d;
        } else {
            c0Var = gs.c0.f27163o;
        }
        return gs.g.c(coroutineScope, coroutineContext, c0Var, new a(g0Var, flow, mutableSharedFlow, obj, null));
    }

    public static final a0 d(a0 a0Var, Function2 function2) {
        return new o0(a0Var, function2);
    }

    public static final j0 e(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        f0 b10 = b(flow, 1);
        MutableStateFlow a10 = l0.a(obj);
        return new y(a10, c(coroutineScope, b10.f32526d, b10.f32523a, a10, g0Var, obj));
    }
}
