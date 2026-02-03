package ks;

import hs.r1;
import js.k;
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
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class n {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        Object f36485d;

        /* renamed from: e  reason: collision with root package name */
        Object f36486e;

        /* renamed from: i  reason: collision with root package name */
        int f36487i;

        /* renamed from: o  reason: collision with root package name */
        private /* synthetic */ Object f36488o;

        /* renamed from: p  reason: collision with root package name */
        /* synthetic */ Object f36489p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Function1 f36490q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Flow f36491r;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0466a extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f36492d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f36493e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36494i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0466a(FlowCollector flowCollector, Ref.ObjectRef objectRef, Continuation continuation) {
                super(1, continuation);
                this.f36493e = flowCollector;
                this.f36494i = objectRef;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0466a(this.f36493e, this.f36494i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f36492d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    FlowCollector flowCollector = this.f36493e;
                    ms.e0 e0Var = ls.t.f37615a;
                    Object obj2 = this.f36494i.element;
                    if (obj2 == e0Var) {
                        obj2 = null;
                    }
                    this.f36492d = 1;
                    if (flowCollector.emit(obj2, this) == f10) {
                        return f10;
                    }
                }
                this.f36494i.element = null;
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0466a) create(continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f36495d;

            /* renamed from: e  reason: collision with root package name */
            int f36496e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f36497i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36498o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ FlowCollector f36499p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Ref.ObjectRef objectRef, FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f36498o = objectRef;
                this.f36499p = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                b bVar = new b(this.f36498o, this.f36499p, continuation);
                bVar.f36497i = obj;
                return bVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((js.k) obj).k(), (Continuation) obj2);
            }

            /* JADX WARN: Type inference failed for: r7v3, types: [T, java.lang.Object] */
            /* JADX WARN: Type inference failed for: r7v6, types: [T, ms.e0] */
            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Ref.ObjectRef objectRef;
                Ref.ObjectRef objectRef2;
                Object f10 = pr.b.f();
                int i10 = this.f36496e;
                if (i10 != 0) {
                    if (i10 == 1) {
                        objectRef2 = (Ref.ObjectRef) this.f36495d;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    ?? k10 = ((js.k) this.f36497i).k();
                    objectRef = this.f36498o;
                    boolean z10 = k10 instanceof k.c;
                    if (!z10) {
                        objectRef.element = k10;
                    }
                    FlowCollector flowCollector = this.f36499p;
                    if (z10) {
                        Throwable e10 = js.k.e(k10);
                        if (e10 == null) {
                            Object obj2 = objectRef.element;
                            if (obj2 != null) {
                                if (obj2 == ls.t.f37615a) {
                                    obj2 = null;
                                }
                                this.f36497i = k10;
                                this.f36495d = objectRef;
                                this.f36496e = 1;
                                if (flowCollector.emit(obj2, this) == f10) {
                                    return f10;
                                }
                                objectRef2 = objectRef;
                            }
                            objectRef.element = ls.t.f37617c;
                        } else {
                            throw e10;
                        }
                    }
                    return Unit.f33074a;
                }
                objectRef = objectRef2;
                objectRef.element = ls.t.f37617c;
                return Unit.f33074a;
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((b) create(js.k.b(obj), continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f36500d;

            /* renamed from: e  reason: collision with root package name */
            private /* synthetic */ Object f36501e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Flow f36502i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ks.n$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0467a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ ProducerScope f36503d;

                /* JADX INFO: Access modifiers changed from: package-private */
                /* renamed from: ks.n$a$c$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0468a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f36504d;

                    /* renamed from: i  reason: collision with root package name */
                    int f36506i;

                    C0468a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f36504d = obj;
                        this.f36506i |= Integer.MIN_VALUE;
                        return C0467a.this.emit(null, this);
                    }
                }

                C0467a(ProducerScope producerScope) {
                    this.f36503d = producerScope;
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
                        boolean r0 = r6 instanceof ks.n.a.c.C0467a.C0468a
                        if (r0 == 0) goto L13
                        r0 = r6
                        ks.n$a$c$a$a r0 = (ks.n.a.c.C0467a.C0468a) r0
                        int r1 = r0.f36506i
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f36506i = r1
                        goto L18
                    L13:
                        ks.n$a$c$a$a r0 = new ks.n$a$c$a$a
                        r0.<init>(r6)
                    L18:
                        java.lang.Object r6 = r0.f36504d
                        java.lang.Object r1 = pr.b.f()
                        int r2 = r0.f36506i
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
                        kotlinx.coroutines.channels.ProducerScope r6 = r4.f36503d
                        if (r5 != 0) goto L3a
                        ms.e0 r5 = ls.t.f37615a
                    L3a:
                        r0.f36506i = r3
                        java.lang.Object r5 = r6.u(r5, r0)
                        if (r5 != r1) goto L43
                        return r1
                    L43:
                        kotlin.Unit r5 = kotlin.Unit.f33074a
                        return r5
                    */
                    throw new UnsupportedOperationException("Method not decompiled: ks.n.a.c.C0467a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(Flow flow, Continuation continuation) {
                super(2, continuation);
                this.f36502i = flow;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                c cVar = new c(this.f36502i, continuation);
                cVar.f36501e = obj;
                return cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f36500d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Flow flow = this.f36502i;
                    C0467a c0467a = new C0467a((ProducerScope) this.f36501e);
                    this.f36500d = 1;
                    if (flow.collect(c0467a, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(ProducerScope producerScope, Continuation continuation) {
                return ((c) create(producerScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function1 function1, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f36490q = function1;
            this.f36491r = flow;
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
            throw new UnsupportedOperationException("Method not decompiled: ks.n.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            a aVar = new a(this.f36490q, this.f36491r, continuation);
            aVar.f36488o = coroutineScope;
            aVar.f36489p = flowCollector;
            return aVar.invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        long f36507d;

        /* renamed from: e  reason: collision with root package name */
        int f36508e;

        /* renamed from: i  reason: collision with root package name */
        private /* synthetic */ Object f36509i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f36510o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ long f36511p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Flow f36512q;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f36513d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f36514e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ FlowCollector f36515i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(FlowCollector flowCollector, Continuation continuation) {
                super(2, continuation);
                this.f36515i = flowCollector;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(this.f36515i, continuation);
                aVar.f36514e = obj;
                return aVar;
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                return j(((js.k) obj).k(), (Continuation) obj2);
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
                    java.lang.Object r0 = pr.b.f()
                    int r1 = r4.f36513d
                    r2 = 1
                    if (r1 == 0) goto L19
                    if (r1 != r2) goto L11
                    java.lang.Object r0 = r4.f36514e
                    kotlin.c.b(r5)
                    goto L36
                L11:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r0)
                    throw r5
                L19:
                    kotlin.c.b(r5)
                    java.lang.Object r5 = r4.f36514e
                    js.k r5 = (js.k) r5
                    java.lang.Object r5 = r5.k()
                    kotlinx.coroutines.flow.FlowCollector r1 = r4.f36515i
                    boolean r3 = r5 instanceof js.k.c
                    if (r3 != 0) goto L37
                    r4.f36514e = r5
                    r4.f36513d = r2
                    java.lang.Object r1 = r1.emit(r5, r4)
                    if (r1 != r0) goto L35
                    return r0
                L35:
                    r0 = r5
                L36:
                    r5 = r0
                L37:
                    boolean r0 = r5 instanceof js.k.a
                    if (r0 == 0) goto L49
                    java.lang.Throwable r5 = js.k.e(r5)
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
                throw new UnsupportedOperationException("Method not decompiled: ks.n.b.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            public final Object j(Object obj, Continuation continuation) {
                return ((a) create(js.k.b(obj), continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.n$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0469b extends kotlin.coroutines.jvm.internal.k implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            int f36516d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ long f36517e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0469b(long j10, Continuation continuation) {
                super(1, continuation);
                this.f36517e = j10;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Continuation continuation) {
                return new C0469b(this.f36517e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                pr.b.f();
                if (this.f36516d != 0) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
                throw new r1("Timed out waiting for " + ((Object) Duration.M(this.f36517e)));
            }

            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Continuation continuation) {
                return ((C0469b) create(continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(long j10, Flow flow, Continuation continuation) {
            super(3, continuation);
            this.f36511p = j10;
            this.f36512q = flow;
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
                java.lang.Object r0 = pr.b.f()
                int r1 = r9.f36508e
                r2 = 1
                r3 = 0
                if (r1 == 0) goto L22
                if (r1 != r2) goto L1a
                long r4 = r9.f36507d
                java.lang.Object r1 = r9.f36510o
                js.v r1 = (js.v) r1
                java.lang.Object r6 = r9.f36509i
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
                java.lang.Object r10 = r9.f36509i
                kotlinx.coroutines.CoroutineScope r10 = (kotlinx.coroutines.CoroutineScope) r10
                java.lang.Object r1 = r9.f36510o
                kotlinx.coroutines.flow.FlowCollector r1 = (kotlinx.coroutines.flow.FlowCollector) r1
                long r4 = r9.f36511p
                kotlin.time.Duration$a r6 = kotlin.time.Duration.f36073e
                long r6 = r6.c()
                int r4 = kotlin.time.Duration.k(r4, r6)
                if (r4 <= 0) goto L82
                kotlinx.coroutines.flow.Flow r4 = r9.f36512q
                r5 = 0
                r6 = 2
                kotlinx.coroutines.flow.Flow r4 = ks.g.c(r4, r5, r3, r6, r3)
                js.v r10 = ks.g.E(r4, r10)
                long r4 = r9.f36511p
                r6 = r1
                r1 = r10
            L4b:
                ps.k r10 = new ps.k
                kotlin.coroutines.CoroutineContext r7 = r9.getContext()
                r10.<init>(r7)
                ps.h r7 = r1.k()
                ks.n$b$a r8 = new ks.n$b$a
                r8.<init>(r6, r3)
                r10.e(r7, r8)
                ks.n$b$b r7 = new ks.n$b$b
                r7.<init>(r4, r3)
                ps.c.b(r10, r4, r7)
                r9.f36509i = r6
                r9.f36510o = r1
                r9.f36507d = r4
                r9.f36508e = r2
                java.lang.Object r10 = r10.o(r9)
                if (r10 != r0) goto L77
                return r0
            L77:
                java.lang.Boolean r10 = (java.lang.Boolean) r10
                boolean r10 = r10.booleanValue()
                if (r10 != 0) goto L4b
                kotlin.Unit r10 = kotlin.Unit.f33074a
                return r10
            L82:
                hs.r1 r10 = new hs.r1
                java.lang.String r0 = "Timed out immediately"
                r10.<init>(r0)
                throw r10
            */
            throw new UnsupportedOperationException("Method not decompiled: ks.n.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(CoroutineScope coroutineScope, FlowCollector flowCollector, Continuation continuation) {
            b bVar = new b(this.f36511p, this.f36512q, continuation);
            bVar.f36509i = coroutineScope;
            bVar.f36510o = flowCollector;
            return bVar.invokeSuspend(Unit.f33074a);
        }
    }

    public static final Flow b(Flow flow, final long j10) {
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (i10 == 0) {
                return flow;
            }
            return d(flow, new Function1() { // from class: ks.m
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
        return ls.o.b(new a(function1, flow, null));
    }

    public static final Flow e(Flow flow, long j10) {
        return f(flow, j10);
    }

    private static final Flow f(Flow flow, long j10) {
        return ls.o.b(new b(j10, flow, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long c(long j10, Object obj) {
        return j10;
    }
}
