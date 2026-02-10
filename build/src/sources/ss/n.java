package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Ref;
import kotlin.time.Duration;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ps.r1;
import rs.k;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class n {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        Object f50183d;

        /* renamed from: e  reason: collision with root package name */
        Object f50184e;

        /* renamed from: i  reason: collision with root package name */
        int f50185i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f50186o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f50187p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Function1 f50188q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Flow f50189r;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ss.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0681a extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f50190d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50191e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f50192i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0681a(FlowCollector flowCollector, Ref.ObjectRef objectRef, Continuation continuation) {
                super(1, continuation);
                this.f50191e = flowCollector;
                this.f50192i = objectRef;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0681a(this.f50191e, this.f50192i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f50190d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = this.f50191e;
                    us.e0 e0Var = ts.t.f50991a;
                    Object obj2 = this.f50192i.element;
                    if (obj2 == e0Var) {
                        obj2 = null;
                    }
                    this.f50190d = 1;
                    if (flowCollector.emit(obj2, this) == f10) {
                        return f10;
                    }
                }
                this.f50192i.element = null;
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0681a) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f50193d;

            /* renamed from: e  reason: collision with root package name */
            int f50194e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f50195i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f50196o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50197p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Ref.ObjectRef objectRef, FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f50196o = objectRef;
                this.f50197p = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f50196o, this.f50197p, continuation);
                bVar.f50195i = obj;
                return bVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((rs.k) obj).k(), (Continuation) obj2);
            }

            /* JADX WARN: Type inference failed for: r7v3, types: [T, java.lang.Object] */
            /* JADX WARN: Type inference failed for: r7v6, types: [T, us.e0] */
            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Ref.ObjectRef objectRef;
                Ref.ObjectRef objectRef2;
                Object f10 = xr.b.f();
                int i10 = this.f50194e;
                if (i10 != 0) {
                    if (i10 == 1) {
                        objectRef2 = (Ref.ObjectRef) this.f50193d;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    ?? k10 = ((rs.k) this.f50195i).k();
                    objectRef = this.f50196o;
                    boolean z10 = k10 instanceof k.c;
                    if (!z10) {
                        objectRef.element = k10;
                    }
                    FlowCollector flowCollector = this.f50197p;
                    if (z10) {
                        Throwable e10 = rs.k.e(k10);
                        if (e10 == null) {
                            Object obj2 = objectRef.element;
                            if (obj2 != null) {
                                if (obj2 == ts.t.f50991a) {
                                    obj2 = null;
                                }
                                this.f50195i = k10;
                                this.f50193d = objectRef;
                                this.f50194e = 1;
                                if (flowCollector.emit(obj2, this) == f10) {
                                    return f10;
                                }
                                objectRef2 = objectRef;
                            }
                            objectRef.element = ts.t.f50993c;
                        } else {
                            throw e10;
                        }
                    }
                    return Unit.f31765a;
                }
                objectRef = objectRef2;
                objectRef.element = ts.t.f50993c;
                return Unit.f31765a;
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((b) create(rs.k.b(obj), continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50198d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f50199e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f50200i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ss.n$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0682a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ ProducerScope f50201d;

                /* JADX INFO: Access modifiers changed from: package-private */
                /* renamed from: ss.n$a$c$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0683a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f50202d;

                    /* renamed from: i  reason: collision with root package name */
                    int f50204i;

                    C0683a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f50202d = obj;
                        this.f50204i |= Integer.MIN_VALUE;
                        return C0682a.this.emit(null, this);
                    }
                }

                C0682a(ProducerScope producerScope) {
                    this.f50201d = producerScope;
                }

                /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                @Override // kotlinx.coroutines.flow.FlowCollector
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public final java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                    /*
                        r4 = this;
                        boolean r0 = r6 instanceof ss.n.a.c.C0682a.C0683a
                        if (r0 == 0) goto L13
                        r0 = r6
                        ss.n$a$c$a$a r0 = (ss.n.a.c.C0682a.C0683a) r0
                        int r1 = r0.f50204i
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f50204i = r1
                        goto L18
                    L13:
                        ss.n$a$c$a$a r0 = new ss.n$a$c$a$a
                        r0.<init>(r6)
                    L18:
                        java.lang.Object r6 = r0.f50202d
                        java.lang.Object r1 = xr.b.f()
                        int r2 = r0.f50204i
                        r3 = 1
                        if (r2 == 0) goto L31
                        if (r2 != r3) goto L29
                        kotlin.c.b(r6)
                        goto L43
                    L29:
                        java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                        java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                        r5.<init>(r6)
                        throw r5
                    L31:
                        kotlin.c.b(r6)
                        kotlinx.coroutines.channels.ProducerScope r6 = r4.f50201d
                        if (r5 != 0) goto L3a
                        us.e0 r5 = ts.t.f50991a
                    L3a:
                        r0.f50204i = r3
                        java.lang.Object r5 = r6.x(r5, r0)
                        if (r5 != r1) goto L43
                        return r1
                    L43:
                        kotlin.Unit r5 = kotlin.Unit.f31765a
                        return r5
                    */
                    throw new UnsupportedOperationException("Method not decompiled: ss.n.a.c.C0682a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(Flow flow, Continuation continuation) {
                super(2, continuation);
                this.f50200i = flow;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                c cVar = new c(this.f50200i, continuation);
                cVar.f50199e = obj;
                return cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f50198d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f50200i;
                    C0682a c0682a = new C0682a((ProducerScope) this.f50199e);
                    this.f50198d = 1;
                    if (flow.collect(c0682a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(ProducerScope producerScope, Continuation continuation) {
                return ((c) create(producerScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function1 function1, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f50188q = function1;
            this.f50189r = flow;
        }

        /* JADX WARN: Code restructure failed: missing block: B:27:0x009f, code lost:
            if (r7.emit(r15, r14) == r0) goto L24;
         */
        /* JADX WARN: Code restructure failed: missing block: B:37:0x00e2, code lost:
            if (r7.o(r14) != r0) goto L6;
         */
        /* JADX WARN: Code restructure failed: missing block: B:38:0x00e4, code lost:
            return r0;
         */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0066  */
        /* JADX WARN: Removed duplicated region for block: B:35:0x00be  */
        /* JADX WARN: Removed duplicated region for block: B:39:0x00e5  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:37:0x00e2 -> B:7:0x001e). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r15) {
            /*
                Method dump skipped, instructions count: 232
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.n.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            a aVar = new a(this.f50188q, this.f50189r, continuation);
            aVar.f50186o = coroutineScope;
            aVar.f50187p = flowCollector;
            return aVar.invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        long f50205d;

        /* renamed from: e  reason: collision with root package name */
        int f50206e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f50207i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f50208o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ long f50209p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Flow f50210q;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50211d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f50212e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50213i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f50213i = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f50213i, continuation);
                aVar.f50212e = obj;
                return aVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((rs.k) obj).k(), (Continuation) obj2);
            }

            /* JADX WARN: Removed duplicated region for block: B:17:0x003c  */
            /* JADX WARN: Removed duplicated region for block: B:22:0x0049  */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r5) {
                /*
                    r4 = this;
                    java.lang.Object r0 = xr.b.f()
                    int r1 = r4.f50211d
                    r2 = 1
                    if (r1 == 0) goto L19
                    if (r1 != r2) goto L11
                    java.lang.Object r0 = r4.f50212e
                    kotlin.c.b(r5)
                    goto L36
                L11:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r0)
                    throw r5
                L19:
                    kotlin.c.b(r5)
                    java.lang.Object r5 = r4.f50212e
                    rs.k r5 = (rs.k) r5
                    java.lang.Object r5 = r5.k()
                    kotlinx.coroutines.flow.FlowCollector r1 = r4.f50213i
                    boolean r3 = r5 instanceof rs.k.c
                    if (r3 != 0) goto L37
                    r4.f50212e = r5
                    r4.f50211d = r2
                    java.lang.Object r1 = r1.emit(r5, r4)
                    if (r1 != r0) goto L35
                    return r0
                L35:
                    r0 = r5
                L36:
                    r5 = r0
                L37:
                    boolean r0 = r5 instanceof rs.k.a
                    if (r0 == 0) goto L49
                    java.lang.Throwable r5 = rs.k.e(r5)
                    if (r5 != 0) goto L48
                    r5 = 0
                    java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r5)
                    return r5
                L48:
                    throw r5
                L49:
                    java.lang.Boolean r5 = kotlin.coroutines.jvm.internal.b.a(r2)
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: ss.n.b.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((a) create(rs.k.b(obj), continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ss.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0684b extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f50214d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ long f50215e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0684b(long j10, Continuation continuation) {
                super(1, continuation);
                this.f50215e = j10;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0684b(this.f50215e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                xr.b.f();
                if (this.f50214d != 0) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                throw new r1("Timed out waiting for " + ((Object) Duration.M(this.f50215e)));
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0684b) create(continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(long j10, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f50209p = j10;
            this.f50210q = flow;
        }

        /*  JADX ERROR: JadxOverflowException in pass: RegionMakerVisitor
            jadx.core.utils.exceptions.JadxOverflowException: Regions count limit reached
            	at jadx.core.utils.ErrorsCounter.addError(ErrorsCounter.java:56)
            	at jadx.core.utils.ErrorsCounter.error(ErrorsCounter.java:30)
            	at jadx.core.dex.attributes.nodes.NotificationAttrNode.addError(NotificationAttrNode.java:18)
            */
        /* JADX WARN: Removed duplicated region for block: B:13:0x0076 A[RETURN] */
        /* JADX WARN: Removed duplicated region for block: B:16:0x007f  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:12:0x0074 -> B:14:0x0077). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r10) {
            /*
                r9 = this;
                java.lang.Object r0 = xr.b.f()
                int r1 = r9.f50206e
                r2 = 1
                r3 = 0
                if (r1 == 0) goto L22
                if (r1 != r2) goto L1a
                long r4 = r9.f50205d
                java.lang.Object r1 = r9.f50208o
                rs.v r1 = (rs.v) r1
                java.lang.Object r6 = r9.f50207i
                kotlinx.coroutines.flow.FlowCollector r6 = (kotlinx.coroutines.flow.FlowCollector) r6
                kotlin.c.b(r10)
                goto L77
            L1a:
                java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r10.<init>(r0)
                throw r10
            L22:
                kotlin.c.b(r10)
                java.lang.Object r10 = r9.f50207i
                kotlinx.coroutines.CoroutineScope r10 = (kotlinx.coroutines.CoroutineScope) r10
                java.lang.Object r1 = r9.f50208o
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                long r4 = r9.f50209p
                kotlin.time.Duration$a r6 = kotlin.time.Duration.f34764e
                long r6 = r6.c()
                int r4 = kotlin.time.Duration.k(r4, r6)
                if (r4 <= 0) goto L82
                kotlinx.coroutines.flow.Flow r4 = r9.f50210q
                r5 = 0
                r6 = 2
                kotlinx.coroutines.flow.Flow r4 = ss.g.c(r4, r5, r3, r6, r3)
                rs.v r10 = ss.g.E(r4, r10)
                long r4 = r9.f50209p
                r6 = r1
                r1 = r10
            L4b:
                xs.k r10 = new xs.k
                kotlin.coroutines.CoroutineContext r7 = r9.getContext()
                r10.<init>(r7)
                xs.h r7 = r1.l()
                ss.n$b$a r8 = new ss.n$b$a
                r8.<init>(r6, r3)
                r10.f(r7, r8)
                ss.n$b$b r7 = new ss.n$b$b
                r7.<init>(r4, r3)
                xs.c.b(r10, r4, r7)
                r9.f50207i = r6
                r9.f50208o = r1
                r9.f50205d = r4
                r9.f50206e = r2
                java.lang.Object r10 = r10.o(r9)
                if (r10 != r0) goto L77
                return r0
            L77:
                java.lang.Boolean r10 = (java.lang.Boolean) r10
                boolean r10 = r10.booleanValue()
                if (r10 != 0) goto L4b
                kotlin.Unit r10 = kotlin.Unit.f31765a
                return r10
            L82:
                ps.r1 r10 = new ps.r1
                java.lang.String r0 = "Timed out immediately"
                r10.<init>(r0)
                throw r10
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.n.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            b bVar = new b(this.f50209p, this.f50210q, continuation);
            bVar.f50207i = coroutineScope;
            bVar.f50208o = flowCollector;
            return bVar.invokeSuspend(Unit.f31765a);
        }
    }

    public static final Flow b(Flow flow, final long j10) {
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 == 0) {
                return flow;
            }
            return d(flow, new Function1() { // from class: ss.m
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    long c10;
                    c10 = n.c(j10, obj);
                    return Long.valueOf(c10);
                }
            });
        }
        throw new IllegalArgumentException("Debounce timeout should not be negative");
    }

    private static final Flow d(Flow flow, Function1 function1) {
        return ts.o.b(new a(function1, flow, null));
    }

    public static final Flow e(Flow flow, long j10) {
        return f(flow, j10);
    }

    private static final Flow f(Flow flow, long j10) {
        return ts.o.b(new b(j10, flow, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long c(long j10, Object obj) {
        return j10;
    }
}
