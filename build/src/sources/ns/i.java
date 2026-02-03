package ns;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends g {

    /* renamed from: p  reason: collision with root package name */
    private final Function3 f41962p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41963d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f41964e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f41966o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ns.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0528a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f41967d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f41968e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f41969i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f41970o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ns.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0529a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f41971d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f41972e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f41973i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f41974o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0529a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f41972e = iVar;
                    this.f41973i = flowCollector;
                    this.f41974o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0529a(this.f41972e, this.f41973i, this.f41974o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = rr.b.f();
                    int i10 = this.f41971d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f41972e.f41962p;
                        FlowCollector flowCollector = this.f41973i;
                        Object obj2 = this.f41974o;
                        this.f41971d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f32464a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0529a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ns.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f41975d;

                /* renamed from: e  reason: collision with root package name */
                Object f41976e;

                /* renamed from: i  reason: collision with root package name */
                Object f41977i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f41978o;

                /* renamed from: q  reason: collision with root package name */
                int f41980q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f41978o = obj;
                    this.f41980q |= Integer.MIN_VALUE;
                    return C0528a.this.emit(null, this);
                }
            }

            C0528a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f41967d = objectRef;
                this.f41968e = coroutineScope;
                this.f41969i = iVar;
                this.f41970o = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x003b  */
            /* JADX WARN: Type inference failed for: r8v2, types: [T, kotlinx.coroutines.Job] */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r8, kotlin.coroutines.Continuation r9) {
                /*
                    r7 = this;
                    boolean r0 = r9 instanceof ns.i.a.C0528a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ns.i$a$a$b r0 = (ns.i.a.C0528a.b) r0
                    int r1 = r0.f41980q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f41980q = r1
                    goto L18
                L13:
                    ns.i$a$a$b r0 = new ns.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f41978o
                    java.lang.Object r1 = rr.b.f()
                    int r2 = r0.f41980q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f41977i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f41976e
                    java.lang.Object r0 = r0.f41975d
                    ns.i$a$a r0 = (ns.i.a.C0528a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f41967d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ns.k r2 = new ns.k
                    r2.<init>()
                    r9.h(r2)
                    r0.f41975d = r7
                    r0.f41976e = r8
                    r0.f41977i = r9
                    r0.f41980q = r3
                    java.lang.Object r9 = r9.Y0(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f41967d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f41968e
                    js.c0 r3 = js.c0.f31950o
                    ns.i$a$a$a r4 = new ns.i$a$a$a
                    ns.i r2 = r0.f41969i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f41970o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = js.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f32464a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ns.i.a.C0528a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f41966o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f41966o, continuation);
            aVar.f41964e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f41963d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Ref.ObjectRef objectRef = new Ref.ObjectRef();
                i iVar = i.this;
                Flow flow = iVar.f41958o;
                C0528a c0528a = new C0528a(objectRef, (CoroutineScope) this.f41964e, iVar, this.f41966o);
                this.f41963d = 1;
                if (flow.collect(c0528a, this) == f10) {
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

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, ls.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f32538d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? ls.a.f37142d : aVar);
    }

    @Override // ns.e
    protected e g(CoroutineContext coroutineContext, int i10, ls.a aVar) {
        return new i(this.f41962p, this.f41958o, coroutineContext, i10, aVar);
    }

    @Override // ns.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, ls.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f41962p = function3;
    }
}
