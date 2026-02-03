package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import js.c1;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f4552d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f4553e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Lifecycle f4554i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Lifecycle.State f4555o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function2 f4556p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.lifecycle.z$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0058a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f4557d;

            /* renamed from: e  reason: collision with root package name */
            Object f4558e;

            /* renamed from: i  reason: collision with root package name */
            Object f4559i;

            /* renamed from: o  reason: collision with root package name */
            Object f4560o;

            /* renamed from: p  reason: collision with root package name */
            Object f4561p;

            /* renamed from: q  reason: collision with root package name */
            Object f4562q;

            /* renamed from: r  reason: collision with root package name */
            int f4563r;

            /* renamed from: s  reason: collision with root package name */
            final /* synthetic */ Lifecycle f4564s;

            /* renamed from: t  reason: collision with root package name */
            final /* synthetic */ Lifecycle.State f4565t;

            /* renamed from: u  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f4566u;

            /* renamed from: v  reason: collision with root package name */
            final /* synthetic */ Function2 f4567v;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: androidx.lifecycle.z$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0059a implements m {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Lifecycle.a f4568d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Ref.ObjectRef f4569e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ CoroutineScope f4570i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Lifecycle.a f4571o;

                /* renamed from: p  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f4572p;

                /* renamed from: q  reason: collision with root package name */
                final /* synthetic */ Mutex f4573q;

                /* renamed from: r  reason: collision with root package name */
                final /* synthetic */ Function2 f4574r;

                /* renamed from: androidx.lifecycle.z$a$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                static final class C0060a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                    /* renamed from: d  reason: collision with root package name */
                    Object f4575d;

                    /* renamed from: e  reason: collision with root package name */
                    Object f4576e;

                    /* renamed from: i  reason: collision with root package name */
                    int f4577i;

                    /* renamed from: o  reason: collision with root package name */
                    final /* synthetic */ Mutex f4578o;

                    /* renamed from: p  reason: collision with root package name */
                    final /* synthetic */ Function2 f4579p;

                    /* JADX INFO: Access modifiers changed from: package-private */
                    /* renamed from: androidx.lifecycle.z$a$a$a$a$a  reason: collision with other inner class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class C0061a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                        /* renamed from: d  reason: collision with root package name */
                        int f4580d;

                        /* renamed from: e  reason: collision with root package name */
                        private /* synthetic */ Object f4581e;

                        /* renamed from: i  reason: collision with root package name */
                        final /* synthetic */ Function2 f4582i;

                        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                        C0061a(Function2 function2, Continuation continuation) {
                            super(2, continuation);
                            this.f4582i = function2;
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Continuation create(Object obj, Continuation continuation) {
                            C0061a c0061a = new C0061a(this.f4582i, continuation);
                            c0061a.f4581e = obj;
                            return c0061a;
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(Object obj) {
                            Object f10 = rr.b.f();
                            int i10 = this.f4580d;
                            if (i10 != 0) {
                                if (i10 == 1) {
                                    kotlin.c.b(obj);
                                } else {
                                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                                }
                            } else {
                                kotlin.c.b(obj);
                                Function2 function2 = this.f4582i;
                                this.f4580d = 1;
                                if (function2.invoke((CoroutineScope) this.f4581e, this) == f10) {
                                    return f10;
                                }
                            }
                            return Unit.f32464a;
                        }

                        @Override // kotlin.jvm.functions.Function2
                        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                            return ((C0061a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                        }
                    }

                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    C0060a(Mutex mutex, Function2 function2, Continuation continuation) {
                        super(2, continuation);
                        this.f4578o = mutex;
                        this.f4579p = function2;
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Continuation create(Object obj, Continuation continuation) {
                        return new C0060a(this.f4578o, this.f4579p, continuation);
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
                            java.lang.Object r0 = rr.b.f()
                            int r1 = r6.f4577i
                            r2 = 2
                            r3 = 1
                            r4 = 0
                            if (r1 == 0) goto L2e
                            if (r1 == r3) goto L21
                            if (r1 != r2) goto L19
                            java.lang.Object r0 = r6.f4575d
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
                            java.lang.Object r1 = r6.f4576e
                            kotlin.jvm.functions.Function2 r1 = (kotlin.jvm.functions.Function2) r1
                            java.lang.Object r3 = r6.f4575d
                            kotlinx.coroutines.sync.Mutex r3 = (kotlinx.coroutines.sync.Mutex) r3
                            kotlin.c.b(r7)
                            r7 = r3
                            goto L42
                        L2e:
                            kotlin.c.b(r7)
                            kotlinx.coroutines.sync.Mutex r7 = r6.f4578o
                            kotlin.jvm.functions.Function2 r1 = r6.f4579p
                            r6.f4575d = r7
                            r6.f4576e = r1
                            r6.f4577i = r3
                            java.lang.Object r3 = r7.b(r4, r6)
                            if (r3 != r0) goto L42
                            goto L53
                        L42:
                            androidx.lifecycle.z$a$a$a$a$a r3 = new androidx.lifecycle.z$a$a$a$a$a     // Catch: java.lang.Throwable -> L5d
                            r3.<init>(r1, r4)     // Catch: java.lang.Throwable -> L5d
                            r6.f4575d = r7     // Catch: java.lang.Throwable -> L5d
                            r6.f4576e = r4     // Catch: java.lang.Throwable -> L5d
                            r6.f4577i = r2     // Catch: java.lang.Throwable -> L5d
                            java.lang.Object r1 = kotlinx.coroutines.i.g(r3, r6)     // Catch: java.lang.Throwable -> L5d
                            if (r1 != r0) goto L54
                        L53:
                            return r0
                        L54:
                            r0 = r7
                        L55:
                            kotlin.Unit r7 = kotlin.Unit.f32464a     // Catch: java.lang.Throwable -> L17
                            r0.c(r4)
                            kotlin.Unit r7 = kotlin.Unit.f32464a
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
                        throw new UnsupportedOperationException("Method not decompiled: androidx.lifecycle.z.a.C0058a.C0059a.C0060a.invokeSuspend(java.lang.Object):java.lang.Object");
                    }

                    @Override // kotlin.jvm.functions.Function2
                    public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                        return ((C0060a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                    }
                }

                C0059a(Lifecycle.a aVar, Ref.ObjectRef objectRef, CoroutineScope coroutineScope, Lifecycle.a aVar2, CancellableContinuation cancellableContinuation, Mutex mutex, Function2 function2) {
                    this.f4568d = aVar;
                    this.f4569e = objectRef;
                    this.f4570i = coroutineScope;
                    this.f4571o = aVar2;
                    this.f4572p = cancellableContinuation;
                    this.f4573q = mutex;
                    this.f4574r = function2;
                }

                /* JADX WARN: Type inference failed for: r9v5, types: [T, kotlinx.coroutines.Job] */
                @Override // androidx.lifecycle.m
                public final void h(LifecycleOwner lifecycleOwner, Lifecycle.a event) {
                    ?? d10;
                    Intrinsics.checkNotNullParameter(lifecycleOwner, "<unused var>");
                    Intrinsics.checkNotNullParameter(event, "event");
                    if (event == this.f4568d) {
                        Ref.ObjectRef objectRef = this.f4569e;
                        d10 = js.i.d(this.f4570i, null, null, new C0060a(this.f4573q, this.f4574r, null), 3, null);
                        objectRef.element = d10;
                        return;
                    }
                    if (event == this.f4571o) {
                        Job job = (Job) this.f4569e.element;
                        if (job != null) {
                            Job.a.a(job, null, 1, null);
                        }
                        this.f4569e.element = null;
                    }
                    if (event == Lifecycle.a.ON_DESTROY) {
                        CancellableContinuation cancellableContinuation = this.f4572p;
                        Result.a aVar = Result.f32461e;
                        cancellableContinuation.resumeWith(Result.b(Unit.f32464a));
                    }
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0058a(Lifecycle lifecycle, Lifecycle.State state, CoroutineScope coroutineScope, Function2 function2, Continuation continuation) {
                super(2, continuation);
                this.f4564s = lifecycle;
                this.f4565t = state;
                this.f4566u = coroutineScope;
                this.f4567v = function2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0058a(this.f4564s, this.f4565t, this.f4566u, this.f4567v, continuation);
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r13.f4563r
                    r2 = 0
                    r3 = 1
                    if (r1 == 0) goto L37
                    if (r1 != r3) goto L2f
                    java.lang.Object r0 = r13.f4562q
                    kotlin.jvm.functions.Function2 r0 = (kotlin.jvm.functions.Function2) r0
                    java.lang.Object r0 = r13.f4561p
                    kotlinx.coroutines.CoroutineScope r0 = (kotlinx.coroutines.CoroutineScope) r0
                    java.lang.Object r0 = r13.f4560o
                    androidx.lifecycle.Lifecycle r0 = (androidx.lifecycle.Lifecycle) r0
                    java.lang.Object r0 = r13.f4559i
                    androidx.lifecycle.Lifecycle$State r0 = (androidx.lifecycle.Lifecycle.State) r0
                    java.lang.Object r0 = r13.f4558e
                    r1 = r0
                    kotlin.jvm.internal.Ref$ObjectRef r1 = (kotlin.jvm.internal.Ref.ObjectRef) r1
                    java.lang.Object r0 = r13.f4557d
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
                    androidx.lifecycle.Lifecycle r14 = r13.f4564s
                    androidx.lifecycle.Lifecycle$State r14 = r14.b()
                    androidx.lifecycle.Lifecycle$State r1 = androidx.lifecycle.Lifecycle.State.f4405d
                    if (r14 != r1) goto L47
                    kotlin.Unit r14 = kotlin.Unit.f32464a
                    return r14
                L47:
                    kotlin.jvm.internal.Ref$ObjectRef r6 = new kotlin.jvm.internal.Ref$ObjectRef
                    r6.<init>()
                    kotlin.jvm.internal.Ref$ObjectRef r1 = new kotlin.jvm.internal.Ref$ObjectRef
                    r1.<init>()
                    androidx.lifecycle.Lifecycle$State r14 = r13.f4565t     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle r12 = r13.f4564s     // Catch: java.lang.Throwable -> La1
                    kotlinx.coroutines.CoroutineScope r7 = r13.f4566u     // Catch: java.lang.Throwable -> La1
                    kotlin.jvm.functions.Function2 r11 = r13.f4567v     // Catch: java.lang.Throwable -> La1
                    r13.f4557d = r6     // Catch: java.lang.Throwable -> La1
                    r13.f4558e = r1     // Catch: java.lang.Throwable -> La1
                    r13.f4559i = r14     // Catch: java.lang.Throwable -> La1
                    r13.f4560o = r12     // Catch: java.lang.Throwable -> La1
                    r13.f4561p = r7     // Catch: java.lang.Throwable -> La1
                    r13.f4562q = r11     // Catch: java.lang.Throwable -> La1
                    r13.f4563r = r3     // Catch: java.lang.Throwable -> La1
                    kotlinx.coroutines.e r9 = new kotlinx.coroutines.e     // Catch: java.lang.Throwable -> La1
                    kotlin.coroutines.Continuation r4 = rr.b.c(r13)     // Catch: java.lang.Throwable -> La1
                    r9.<init>(r4, r3)     // Catch: java.lang.Throwable -> La1
                    r9.H()     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a$a r4 = androidx.lifecycle.Lifecycle.a.Companion     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a r5 = r4.c(r14)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.Lifecycle$a r8 = r4.a(r14)     // Catch: java.lang.Throwable -> La1
                    r14 = 0
                    kotlinx.coroutines.sync.Mutex r10 = ss.f.b(r14, r3, r2)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.z$a$a$a r4 = new androidx.lifecycle.z$a$a$a     // Catch: java.lang.Throwable -> La1
                    r4.<init>(r5, r6, r7, r8, r9, r10, r11)     // Catch: java.lang.Throwable -> La1
                    r1.element = r4     // Catch: java.lang.Throwable -> La1
                    java.lang.String r14 = "null cannot be cast to non-null type androidx.lifecycle.LifecycleEventObserver"
                    kotlin.jvm.internal.Intrinsics.checkNotNull(r4, r14)     // Catch: java.lang.Throwable -> La1
                    androidx.lifecycle.m r4 = (androidx.lifecycle.m) r4     // Catch: java.lang.Throwable -> La1
                    r12.a(r4)     // Catch: java.lang.Throwable -> La1
                    java.lang.Object r14 = r9.B()     // Catch: java.lang.Throwable -> La1
                    java.lang.Object r4 = rr.b.f()     // Catch: java.lang.Throwable -> La1
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
                    androidx.lifecycle.Lifecycle r0 = r13.f4564s
                    r0.d(r14)
                Lbd:
                    kotlin.Unit r14 = kotlin.Unit.f32464a
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
                    androidx.lifecycle.Lifecycle r1 = r13.f4564s
                    r1.d(r0)
                Ld4:
                    throw r14
                */
                throw new UnsupportedOperationException("Method not decompiled: androidx.lifecycle.z.a.C0058a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0058a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Lifecycle lifecycle, Lifecycle.State state, Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f4554i = lifecycle;
            this.f4555o = state;
            this.f4556p = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f4554i, this.f4555o, this.f4556p, continuation);
            aVar.f4553e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f4552d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f4553e;
                c1 f22 = js.m0.c().f2();
                C0058a c0058a = new C0058a(this.f4554i, this.f4555o, coroutineScope, this.f4556p, null);
                this.f4552d = 1;
                if (js.g.g(f22, c0058a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public static final Object a(Lifecycle lifecycle, Lifecycle.State state, Function2 function2, Continuation continuation) {
        if (state != Lifecycle.State.f4406e) {
            if (lifecycle.b() == Lifecycle.State.f4405d) {
                return Unit.f32464a;
            }
            Object g10 = kotlinx.coroutines.i.g(new a(lifecycle, state, function2, null), continuation);
            if (g10 == rr.b.f()) {
                return g10;
            }
            return Unit.f32464a;
        }
        throw new IllegalArgumentException("repeatOnLifecycle cannot start work with the INITIALIZED lifecycle state.");
    }

    public static final Object b(LifecycleOwner lifecycleOwner, Lifecycle.State state, Function2 function2, Continuation continuation) {
        Object a10 = a(lifecycleOwner.getLifecycle(), state, function2, continuation);
        if (a10 == rr.b.f()) {
            return a10;
        }
        return Unit.f32464a;
    }
}
