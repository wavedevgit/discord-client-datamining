package rs;

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
import os.r1;
import qs.k;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class n {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        Object f49358d;

        /* renamed from: e  reason: collision with root package name */
        Object f49359e;

        /* renamed from: i  reason: collision with root package name */
        int f49360i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f49361o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f49362p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Function1 f49363q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Flow f49364r;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rs.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0635a extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f49365d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f49366e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f49367i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0635a(FlowCollector flowCollector, Ref.ObjectRef objectRef, Continuation continuation) {
                super(1, continuation);
                this.f49366e = flowCollector;
                this.f49367i = objectRef;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0635a(this.f49366e, this.f49367i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f49365d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = this.f49366e;
                    ts.e0 e0Var = ss.t.f50147a;
                    Object obj2 = this.f49367i.element;
                    if (obj2 == e0Var) {
                        obj2 = null;
                    }
                    this.f49365d = 1;
                    if (flowCollector.emit(obj2, this) == f10) {
                        return f10;
                    }
                }
                this.f49367i.element = null;
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0635a) create(continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f49368d;

            /* renamed from: e  reason: collision with root package name */
            int f49369e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f49370i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f49371o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ FlowCollector f49372p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Ref.ObjectRef objectRef, FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f49371o = objectRef;
                this.f49372p = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f49371o, this.f49372p, continuation);
                bVar.f49370i = obj;
                return bVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((qs.k) obj).k(), (Continuation) obj2);
            }

            /* JADX WARN: Type inference failed for: r7v3, types: [T, java.lang.Object] */
            /* JADX WARN: Type inference failed for: r7v6, types: [T, ts.e0] */
            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Ref.ObjectRef objectRef;
                Ref.ObjectRef objectRef2;
                Object f10 = wr.b.f();
                int i10 = this.f49369e;
                if (i10 != 0) {
                    if (i10 == 1) {
                        objectRef2 = (Ref.ObjectRef) this.f49368d;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    ?? k10 = ((qs.k) this.f49370i).k();
                    objectRef = this.f49371o;
                    boolean z10 = k10 instanceof k.c;
                    if (!z10) {
                        objectRef.element = k10;
                    }
                    FlowCollector flowCollector = this.f49372p;
                    if (z10) {
                        Throwable e10 = qs.k.e(k10);
                        if (e10 == null) {
                            Object obj2 = objectRef.element;
                            if (obj2 != null) {
                                if (obj2 == ss.t.f50147a) {
                                    obj2 = null;
                                }
                                this.f49370i = k10;
                                this.f49368d = objectRef;
                                this.f49369e = 1;
                                if (flowCollector.emit(obj2, this) == f10) {
                                    return f10;
                                }
                                objectRef2 = objectRef;
                            }
                            objectRef.element = ss.t.f50149c;
                        } else {
                            throw e10;
                        }
                    }
                    return Unit.f32056a;
                }
                objectRef = objectRef2;
                objectRef.element = ss.t.f50149c;
                return Unit.f32056a;
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((b) create(qs.k.b(obj), continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f49373d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f49374e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f49375i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: rs.n$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0636a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ ProducerScope f49376d;

                /* JADX INFO: Access modifiers changed from: package-private */
                /* renamed from: rs.n$a$c$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0637a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f49377d;

                    /* renamed from: i  reason: collision with root package name */
                    int f49379i;

                    C0637a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f49377d = obj;
                        this.f49379i |= Integer.MIN_VALUE;
                        return C0636a.this.emit(null, this);
                    }
                }

                C0636a(ProducerScope producerScope) {
                    this.f49376d = producerScope;
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
                        boolean r0 = r6 instanceof rs.n.a.c.C0636a.C0637a
                        if (r0 == 0) goto L13
                        r0 = r6
                        rs.n$a$c$a$a r0 = (rs.n.a.c.C0636a.C0637a) r0
                        int r1 = r0.f49379i
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f49379i = r1
                        goto L18
                    L13:
                        rs.n$a$c$a$a r0 = new rs.n$a$c$a$a
                        r0.<init>(r6)
                    L18:
                        java.lang.Object r6 = r0.f49377d
                        java.lang.Object r1 = wr.b.f()
                        int r2 = r0.f49379i
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
                        kotlinx.coroutines.channels.ProducerScope r6 = r4.f49376d
                        if (r5 != 0) goto L3a
                        ts.e0 r5 = ss.t.f50147a
                    L3a:
                        r0.f49379i = r3
                        java.lang.Object r5 = r6.x(r5, r0)
                        if (r5 != r1) goto L43
                        return r1
                    L43:
                        kotlin.Unit r5 = kotlin.Unit.f32056a
                        return r5
                    */
                    throw new UnsupportedOperationException("Method not decompiled: rs.n.a.c.C0636a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(Flow flow, Continuation continuation) {
                super(2, continuation);
                this.f49375i = flow;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                c cVar = new c(this.f49375i, continuation);
                cVar.f49374e = obj;
                return cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f49373d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f49375i;
                    C0636a c0636a = new C0636a((ProducerScope) this.f49374e);
                    this.f49373d = 1;
                    if (flow.collect(c0636a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(ProducerScope producerScope, Continuation continuation) {
                return ((c) create(producerScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function1 function1, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f49363q = function1;
            this.f49364r = flow;
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
            throw new UnsupportedOperationException("Method not decompiled: rs.n.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            a aVar = new a(this.f49363q, this.f49364r, continuation);
            aVar.f49361o = coroutineScope;
            aVar.f49362p = flowCollector;
            return aVar.invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        long f49380d;

        /* renamed from: e  reason: collision with root package name */
        int f49381e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f49382i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f49383o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ long f49384p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Flow f49385q;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f49386d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f49387e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ FlowCollector f49388i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f49388i = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f49388i, continuation);
                aVar.f49387e = obj;
                return aVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((qs.k) obj).k(), (Continuation) obj2);
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
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r4.f49386d
                    r2 = 1
                    if (r1 == 0) goto L19
                    if (r1 != r2) goto L11
                    java.lang.Object r0 = r4.f49387e
                    kotlin.c.b(r5)
                    goto L36
                L11:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r0)
                    throw r5
                L19:
                    kotlin.c.b(r5)
                    java.lang.Object r5 = r4.f49387e
                    qs.k r5 = (qs.k) r5
                    java.lang.Object r5 = r5.k()
                    kotlinx.coroutines.flow.FlowCollector r1 = r4.f49388i
                    boolean r3 = r5 instanceof qs.k.c
                    if (r3 != 0) goto L37
                    r4.f49387e = r5
                    r4.f49386d = r2
                    java.lang.Object r1 = r1.emit(r5, r4)
                    if (r1 != r0) goto L35
                    return r0
                L35:
                    r0 = r5
                L36:
                    r5 = r0
                L37:
                    boolean r0 = r5 instanceof qs.k.a
                    if (r0 == 0) goto L49
                    java.lang.Throwable r5 = qs.k.e(r5)
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
                throw new UnsupportedOperationException("Method not decompiled: rs.n.b.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((a) create(qs.k.b(obj), continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: rs.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0638b extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f49389d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ long f49390e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0638b(long j10, Continuation continuation) {
                super(1, continuation);
                this.f49390e = j10;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0638b(this.f49390e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f49389d != 0) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                throw new r1("Timed out waiting for " + ((Object) Duration.M(this.f49390e)));
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0638b) create(continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(long j10, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f49384p = j10;
            this.f49385q = flow;
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
                java.lang.Object r0 = wr.b.f()
                int r1 = r9.f49381e
                r2 = 1
                r3 = 0
                if (r1 == 0) goto L22
                if (r1 != r2) goto L1a
                long r4 = r9.f49380d
                java.lang.Object r1 = r9.f49383o
                qs.v r1 = (qs.v) r1
                java.lang.Object r6 = r9.f49382i
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
                java.lang.Object r10 = r9.f49382i
                kotlinx.coroutines.CoroutineScope r10 = (kotlinx.coroutines.CoroutineScope) r10
                java.lang.Object r1 = r9.f49383o
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                long r4 = r9.f49384p
                kotlin.time.Duration$a r6 = kotlin.time.Duration.f35055e
                long r6 = r6.c()
                int r4 = kotlin.time.Duration.j(r4, r6)
                if (r4 <= 0) goto L82
                kotlinx.coroutines.flow.Flow r4 = r9.f49385q
                r5 = 0
                r6 = 2
                kotlinx.coroutines.flow.Flow r4 = rs.g.c(r4, r5, r3, r6, r3)
                qs.v r10 = rs.g.E(r4, r10)
                long r4 = r9.f49384p
                r6 = r1
                r1 = r10
            L4b:
                ws.k r10 = new ws.k
                kotlin.coroutines.CoroutineContext r7 = r9.getContext()
                r10.<init>(r7)
                ws.h r7 = r1.l()
                rs.n$b$a r8 = new rs.n$b$a
                r8.<init>(r6, r3)
                r10.d(r7, r8)
                rs.n$b$b r7 = new rs.n$b$b
                r7.<init>(r4, r3)
                ws.c.b(r10, r4, r7)
                r9.f49382i = r6
                r9.f49383o = r1
                r9.f49380d = r4
                r9.f49381e = r2
                java.lang.Object r10 = r10.o(r9)
                if (r10 != r0) goto L77
                return r0
            L77:
                java.lang.Boolean r10 = (java.lang.Boolean) r10
                boolean r10 = r10.booleanValue()
                if (r10 != 0) goto L4b
                kotlin.Unit r10 = kotlin.Unit.f32056a
                return r10
            L82:
                os.r1 r10 = new os.r1
                java.lang.String r0 = "Timed out immediately"
                r10.<init>(r0)
                throw r10
            */
            throw new UnsupportedOperationException("Method not decompiled: rs.n.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            b bVar = new b(this.f49384p, this.f49385q, continuation);
            bVar.f49382i = coroutineScope;
            bVar.f49383o = flowCollector;
            return bVar.invokeSuspend(Unit.f32056a);
        }
    }

    public static final Flow b(Flow flow, final long j10) {
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 == 0) {
                return flow;
            }
            return d(flow, new Function1() { // from class: rs.m
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
        return ss.o.b(new a(function1, flow, null));
    }

    public static final Flow e(Flow flow, long j10) {
        return f(flow, j10);
    }

    private static final Flow f(Flow flow, long j10) {
        return ss.o.b(new b(j10, flow, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long c(long j10, Object obj) {
        return j10;
    }
}
