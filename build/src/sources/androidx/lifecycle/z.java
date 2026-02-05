package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.sync.Mutex;
import ms.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f4664d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f4665e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Lifecycle f4666i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Lifecycle.State f4667o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function2 f4668p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.lifecycle.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0059a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f4669d;

            /* renamed from: e  reason: collision with root package name */
            Object f4670e;

            /* renamed from: i  reason: collision with root package name */
            Object f4671i;

            /* renamed from: o  reason: collision with root package name */
            Object f4672o;

            /* renamed from: p  reason: collision with root package name */
            Object f4673p;

            /* renamed from: q  reason: collision with root package name */
            Object f4674q;

            /* renamed from: r  reason: collision with root package name */
            int f4675r;

            /* renamed from: s  reason: collision with root package name */
            final /* synthetic */ Lifecycle f4676s;

            /* renamed from: t  reason: collision with root package name */
            final /* synthetic */ Lifecycle.State f4677t;

            /* renamed from: u  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f4678u;

            /* renamed from: v  reason: collision with root package name */
            final /* synthetic */ Function2 f4679v;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: androidx.lifecycle.z$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0060a implements m {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Lifecycle.a f4680d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Ref.ObjectRef f4681e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ CoroutineScope f4682i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Lifecycle.a f4683o;

                /* renamed from: p  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f4684p;

                /* renamed from: q  reason: collision with root package name */
                final /* synthetic */ Mutex f4685q;

                /* renamed from: r  reason: collision with root package name */
                final /* synthetic */ Function2 f4686r;

                /* renamed from: androidx.lifecycle.z$a$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                static final class C0061a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                    /* renamed from: d  reason: collision with root package name */
                    Object f4687d;

                    /* renamed from: e  reason: collision with root package name */
                    Object f4688e;

                    /* renamed from: i  reason: collision with root package name */
                    int f4689i;

                    /* renamed from: o  reason: collision with root package name */
                    final /* synthetic */ Mutex f4690o;

                    /* renamed from: p  reason: collision with root package name */
                    final /* synthetic */ Function2 f4691p;

                    /* JADX INFO: Access modifiers changed from: package-private */
                    /* renamed from: androidx.lifecycle.z$a$a$a$a$a  reason: collision with other inner class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class C0062a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                        /* renamed from: d  reason: collision with root package name */
                        int f4692d;

                        /* renamed from: e  reason: collision with root package name */
                        private /* synthetic */ Object f4693e;

                        /* renamed from: i  reason: collision with root package name */
                        final /* synthetic */ Function2 f4694i;

                        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                        C0062a(Function2 function2, Continuation continuation) {
                            super(2, continuation);
                            this.f4694i = function2;
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Continuation create(Object obj, Continuation continuation) {
                            C0062a c0062a = new C0062a(this.f4694i, continuation);
                            c0062a.f4693e = obj;
                            return c0062a;
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(Object obj) {
                            Object f10 = ur.b.f();
                            int i10 = this.f4692d;
                            if (i10 != 0) {
                                if (i10 == 1) {
                                    kotlin.c.b(obj);
                                } else {
                                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                                }
                            } else {
                                kotlin.c.b(obj);
                                Function2 function2 = this.f4694i;
                                this.f4692d = 1;
                                if (function2.invoke((CoroutineScope) this.f4693e, this) == f10) {
                                    return f10;
                                }
                            }
                            return Unit.f31988a;
                        }

                        @Override // kotlin.jvm.functions.Function2
                        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                            return ((C0062a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                        }
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    C0061a(Mutex mutex, Function2 function2, Continuation continuation) {
                        super(2, continuation);
                        this.f4690o = mutex;
                        this.f4691p = function2;
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Continuation create(Object obj, Continuation continuation) {
                        return new C0061a(this.f4690o, this.f4691p, continuation);
                    }

                    /* JADX WARN: Code restructure failed: missing block: B:15:0x003f, code lost:
                        if (r7.b(null, r6) == r0) goto L22;
                     */
                    @Override // kotlin.coroutines.jvm.internal.a
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object invokeSuspend(java.lang.Object r7) {
                        /*
                            r6 = this;
                            java.lang.Object r0 = ur.b.f()
                            int r1 = r6.f4689i
                            r2 = 2
                            r3 = 1
                            r4 = 0
                            if (r1 == 0) goto L2e
                            if (r1 == r3) goto L21
                            if (r1 != r2) goto L19
                            java.lang.Object r0 = r6.f4687d
                            kotlinx.coroutines.sync.Mutex r0 = (kotlinx.coroutines.sync.Mutex) r0
                            kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L17
                            goto L55
                        L17:
                            r7 = move-exception
                            goto L61
                        L19:
                            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                            r7.<init>(r0)
                            throw r7
                        L21:
                            java.lang.Object r1 = r6.f4688e
                            kotlin.jvm.functions.Function2 r1 = (kotlin.jvm.functions.Function2) r1
                            java.lang.Object r3 = r6.f4687d
                            kotlinx.coroutines.sync.Mutex r3 = (kotlinx.coroutines.sync.Mutex) r3
                            kotlin.c.b(r7)
                            r7 = r3
                            goto L42
                        L2e:
                            kotlin.c.b(r7)
                            kotlinx.coroutines.sync.Mutex r7 = r6.f4690o
                            kotlin.jvm.functions.Function2 r1 = r6.f4691p
                            r6.f4687d = r7
                            r6.f4688e = r1
                            r6.f4689i = r3
                            java.lang.Object r3 = r7.b(r4, r6)
                            if (r3 != r0) goto L42
                            goto L53
                        L42:
                            androidx.lifecycle.z$a$a$a$a$a r3 = new androidx.lifecycle.z$a$a$a$a$a     // Catch: java.lang.Throwable -> L5d
                            r3.<init>(r1, r4)     // Catch: java.lang.Throwable -> L5d
                            r6.f4687d = r7     // Catch: java.lang.Throwable -> L5d
                            r6.f4688e = r4     // Catch: java.lang.Throwable -> L5d
                            r6.f4689i = r2     // Catch: java.lang.Throwable -> L5d
                            java.lang.Object r1 = kotlinx.coroutines.i.g(r3, r6)     // Catch: java.lang.Throwable -> L5d
                            if (r1 != r0) goto L54
                        L53:
                            return r0
                        L54:
                            r0 = r7
                        L55:
                            kotlin.Unit r7 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L17
                            r0.c(r4)
                            kotlin.Unit r7 = kotlin.Unit.f31988a
                            return r7
                        L5d:
                            r0 = move-exception
                            r5 = r0
                            r0 = r7
                            r7 = r5
                        L61:
                            r0.c(r4)
                            throw r7
                        */
                        throw new UnsupportedOperationException("Method not decompiled: androidx.lifecycle.z.a.C0059a.C0060a.C0061a.invokeSuspend(java.lang.Object):java.lang.Object");
                    }

                    @Override // kotlin.jvm.functions.Function2
                    public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                        return ((C0061a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                    }
                }

                C0060a(Lifecycle.a aVar, Ref.ObjectRef objectRef, CoroutineScope coroutineScope, Lifecycle.a aVar2, CancellableContinuation cancellableContinuation, Mutex mutex, Function2 function2) {
                    this.f4680d = aVar;
                    this.f4681e = objectRef;
                    this.f4682i = coroutineScope;
                    this.f4683o = aVar2;
                    this.f4684p = cancellableContinuation;
                    this.f4685q = mutex;
                    this.f4686r = function2;
                }

                /* JADX WARN: Type inference failed for: r9v5, types: [T, kotlinx.coroutines.Job] */
                @Override // androidx.lifecycle.m
                public final void h(LifecycleOwner lifecycleOwner, Lifecycle.a event) {
                    ?? d10;
                    Intrinsics.checkNotNullParameter(lifecycleOwner, "<unused var>");
                    Intrinsics.checkNotNullParameter(event, "event");
                    if (event == this.f4680d) {
                        Ref.ObjectRef objectRef = this.f4681e;
                        d10 = ms.i.d(this.f4682i, null, null, new C0061a(this.f4685q, this.f4686r, null), 3, null);
                        objectRef.element = d10;
                        return;
                    }
                    if (event == this.f4683o) {
                        Job job = (Job) this.f4681e.element;
                        if (job != null) {
                            Job.a.a(job, null, 1, null);
                        }
                        this.f4681e.element = null;
                    }
                    if (event == Lifecycle.a.ON_DESTROY) {
                        CancellableContinuation cancellableContinuation = this.f4684p;
                        Result.a aVar = Result.f31985e;
                        cancellableContinuation.resumeWith(Result.b(Unit.f31988a));
                    }
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0059a(Lifecycle lifecycle, Lifecycle.State state, CoroutineScope coroutineScope, Function2 function2, Continuation continuation) {
                super(2, continuation);
                this.f4676s = lifecycle;
                this.f4677t = state;
                this.f4678u = coroutineScope;
                this.f4679v = function2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0059a(this.f4676s, this.f4677t, this.f4678u, this.f4679v, continuation);
            }

            /* JADX WARN: Removed duplicated region for block: B:36:0x00c6  */
            /* JADX WARN: Removed duplicated region for block: B:39:0x00cf  */
            /* JADX WARN: Type inference failed for: r4v3, types: [T, androidx.lifecycle.z$a$a$a, java.lang.Object] */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r14) {
                /*
                    r13 = this;
                    java.lang.Object r0 = ur.b.f()
                    int r1 = r13.f4675r
                    r2 = 0
                    r3 = 1
                    if (r1 == 0) goto L37
                    if (r1 != r3) goto L2f
                    java.lang.Object r0 = r13.f4674q
                    kotlin.jvm.functions.Function2 r0 = (kotlin.jvm.functions.Function2) r0
                    java.lang.Object r0 = r13.f4673p
                    kotlinx.coroutines.CoroutineScope r0 = (kotlinx.coroutines.CoroutineScope) r0
                    java.lang.Object r0 = r13.f4672o
                    androidx.lifecycle.Lifecycle r0 = (androidx.lifecycle.Lifecycle) r0
                    java.lang.Object r0 = r13.f4671i
                    androidx.lifecycle.Lifecycle$State r0 = (androidx.lifecycle.Lifecycle.State) r0
                    java.lang.Object r0 = r13.f4670e
                    r1 = r0
                    kotlin.jvm.internal.Ref$ObjectRef r1 = (kotlin.jvm.internal.Ref.ObjectRef) r1
                    java.lang.Object r0 = r13.f4669d
                    r4 = r0
                    kotlin.jvm.internal.Ref$ObjectRef r4 = (kotlin.jvm.internal.Ref.ObjectRef) r4
                    kotlin.c.b(r14)     // Catch: java.lang.Throwable -> L2b
                    goto La9
                L2b:
                    r0 = move-exception
                    r14 = r0
                    goto Lc0
                L2f:
                    java.lang.IllegalStateException r14 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r14.<init>(r0)
                    throw r14
                L37:
                    kotlin.c.b(r14)
                    androidx.lifecycle.Lifecycle r14 = r13.f4676s
                    androidx.lifecycle.Lifecycle$State r14 = r14.b()
                    androidx.lifecycle.Lifecycle$State r1 = androidx.lifecycle.Lifecycle.State.f4517d
                    if (r14 != r1) goto L47
                    kotlin.Unit r14 = kotlin.Unit.f31988a
                    return r14
                L47:
                    kotlin.jvm.internal.Ref$ObjectRef r6 = new kotlin.jvm.internal.Ref$ObjectRef
                    r6.<init>()
                    kotlin.jvm.internal.Ref$ObjectRef r1 = new kotlin.jvm.internal.Ref$ObjectRef
                    r1.<init>()
                    androidx.lifecycle.Lifecycle$State r14 = r13.f4677t     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle r12 = r13.f4676s     // Catch: java.lang.Throwable -> La1
                    kotlinx.coroutines.CoroutineScope r7 = r13.f4678u     // Catch: java.lang.Throwable -> La1
                    kotlin.jvm.functions.Function2 r11 = r13.f4679v     // Catch: java.lang.Throwable -> La1
                    r13.f4669d = r6     // Catch: java.lang.Throwable -> La1
                    r13.f4670e = r1     // Catch: java.lang.Throwable -> La1
                    r13.f4671i = r14     // Catch: java.lang.Throwable -> La1
                    r13.f4672o = r12     // Catch: java.lang.Throwable -> La1
                    r13.f4673p = r7     // Catch: java.lang.Throwable -> La1
                    r13.f4674q = r11     // Catch: java.lang.Throwable -> La1
                    r13.f4675r = r3     // Catch: java.lang.Throwable -> La1
                    kotlinx.coroutines.e r9 = new kotlinx.coroutines.e     // Catch: java.lang.Throwable -> La1
                    kotlin.coroutines.Continuation r4 = ur.b.c(r13)     // Catch: java.lang.Throwable -> La1
                    r9.<init>(r4, r3)     // Catch: java.lang.Throwable -> La1
                    r9.H()     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a$a r4 = androidx.lifecycle.Lifecycle.a.Companion     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a r5 = r4.c(r14)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a r8 = r4.a(r14)     // Catch: java.lang.Throwable -> La1
                    r14 = 0
                    kotlinx.coroutines.sync.Mutex r10 = vs.f.b(r14, r3, r2)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.z$a$a$a r4 = new androidx.lifecycle.z$a$a$a     // Catch: java.lang.Throwable -> La1
                    r4.<init>(r5, r6, r7, r8, r9, r10, r11)     // Catch: java.lang.Throwable -> La1
                    r1.element = r4     // Catch: java.lang.Throwable -> La1
                    java.lang.String r14 = "null cannot be cast to non-null type androidx.lifecycle.LifecycleEventObserver"
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r4, r14)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.m r4 = (androidx.lifecycle.m) r4     // Catch: java.lang.Throwable -> La1
                    r12.a(r4)     // Catch: java.lang.Throwable -> La1
                    java.lang.Object r14 = r9.B()     // Catch: java.lang.Throwable -> La1
                    java.lang.Object r4 = ur.b.f()     // Catch: java.lang.Throwable -> La1
                    if (r14 != r4) goto La5
                    kotlin.coroutines.jvm.internal.g.c(r13)     // Catch: java.lang.Throwable -> La1
                    goto La5
                La1:
                    r0 = move-exception
                    r14 = r0
                    r4 = r6
                    goto Lc0
                La5:
                    if (r14 != r0) goto La8
                    return r0
                La8:
                    r4 = r6
                La9:
                    T r14 = r4.element
                    kotlinx.coroutines.Job r14 = (kotlinx.coroutines.Job) r14
                    if (r14 == 0) goto Lb2
                    kotlinx.coroutines.Job.a.a(r14, r2, r3, r2)
                Lb2:
                    T r14 = r1.element
                    androidx.lifecycle.m r14 = (androidx.lifecycle.m) r14
                    if (r14 == 0) goto Lbd
                    androidx.lifecycle.Lifecycle r0 = r13.f4676s
                    r0.d(r14)
                Lbd:
                    kotlin.Unit r14 = kotlin.Unit.f31988a
                    return r14
                Lc0:
                    T r0 = r4.element
                    kotlinx.coroutines.Job r0 = (kotlinx.coroutines.Job) r0
                    if (r0 == 0) goto Lc9
                    kotlinx.coroutines.Job.a.a(r0, r2, r3, r2)
                Lc9:
                    T r0 = r1.element
                    androidx.lifecycle.m r0 = (androidx.lifecycle.m) r0
                    if (r0 == 0) goto Ld4
                    androidx.lifecycle.Lifecycle r1 = r13.f4676s
                    r1.d(r0)
                Ld4:
                    throw r14
                */
                throw new UnsupportedOperationException("Method not decompiled: androidx.lifecycle.z.a.C0059a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0059a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Lifecycle lifecycle, Lifecycle.State state, Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f4666i = lifecycle;
            this.f4667o = state;
            this.f4668p = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f4666i, this.f4667o, this.f4668p, continuation);
            aVar.f4665e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f4664d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f4665e;
                c1 f22 = ms.m0.c().f2();
                C0059a c0059a = new C0059a(this.f4666i, this.f4667o, coroutineScope, this.f4668p, null);
                this.f4664d = 1;
                if (ms.g.g(f22, c0059a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public static final Object a(Lifecycle lifecycle, Lifecycle.State state, Function2 function2, Continuation continuation) {
        if (state != Lifecycle.State.f4518e) {
            if (lifecycle.b() == Lifecycle.State.f4517d) {
                return Unit.f31988a;
            }
            Object g10 = kotlinx.coroutines.i.g(new a(lifecycle, state, function2, null), continuation);
            if (g10 == ur.b.f()) {
                return g10;
            }
            return Unit.f31988a;
        }
        throw new IllegalArgumentException("repeatOnLifecycle cannot start work with the INITIALIZED lifecycle state.");
    }

    public static final Object b(LifecycleOwner lifecycleOwner, Lifecycle.State state, Function2 function2, Continuation continuation) {
        Object a10 = a(lifecycleOwner.getLifecycle(), state, function2, continuation);
        if (a10 == ur.b.f()) {
            return a10;
        }
        return Unit.f31988a;
    }
}
