package ct;

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
    private final Function3 f21045p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21046d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f21047e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f21049o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ct.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0276a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f21050d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f21051e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f21052i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f21053o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ct.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0277a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f21054d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f21055e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f21056i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f21057o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0277a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f21055e = iVar;
                    this.f21056i = flowCollector;
                    this.f21057o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0277a(this.f21055e, this.f21056i, this.f21057o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = gs.b.f();
                    int i10 = this.f21054d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f21055e.f21045p;
                        FlowCollector flowCollector = this.f21056i;
                        Object obj2 = this.f21057o;
                        this.f21054d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f31988a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0277a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ct.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f21058d;

                /* renamed from: e  reason: collision with root package name */
                Object f21059e;

                /* renamed from: i  reason: collision with root package name */
                Object f21060i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f21061o;

                /* renamed from: q  reason: collision with root package name */
                int f21063q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f21061o = obj;
                    this.f21063q |= Integer.MIN_VALUE;
                    return C0276a.this.emit(null, this);
                }
            }

            C0276a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f21050d = objectRef;
                this.f21051e = coroutineScope;
                this.f21052i = iVar;
                this.f21053o = flowCollector;
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
                    boolean r0 = r9 instanceof ct.i.a.C0276a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ct.i$a$a$b r0 = (ct.i.a.C0276a.b) r0
                    int r1 = r0.f21063q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f21063q = r1
                    goto L18
                L13:
                    ct.i$a$a$b r0 = new ct.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f21061o
                    java.lang.Object r1 = gs.b.f()
                    int r2 = r0.f21063q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f21060i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f21059e
                    java.lang.Object r0 = r0.f21058d
                    ct.i$a$a r0 = (ct.i.a.C0276a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f21050d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ct.k r2 = new ct.k
                    r2.<init>()
                    r9.i(r2)
                    r0.f21058d = r7
                    r0.f21059e = r8
                    r0.f21060i = r9
                    r0.f21063q = r3
                    java.lang.Object r9 = r9.S0(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f21050d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f21051e
                    ys.c0 r3 = ys.c0.f55786o
                    ct.i$a$a$a r4 = new ct.i$a$a$a
                    ct.i r2 = r0.f21052i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f21053o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = ys.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f31988a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ct.i.a.C0276a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f21049o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f21049o, continuation);
            aVar.f21047e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f21046d;
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
                Flow flow = iVar.f21041o;
                C0276a c0276a = new C0276a(objectRef, (CoroutineScope) this.f21047e, iVar, this.f21049o);
                this.f21046d = 1;
                if (flow.collect(c0276a, this) == f10) {
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

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, at.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f32062d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? at.a.f6104d : aVar);
    }

    @Override // ct.e
    protected e f(CoroutineContext coroutineContext, int i10, at.a aVar) {
        return new i(this.f21045p, this.f21041o, coroutineContext, i10, aVar);
    }

    @Override // ct.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == gs.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, at.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f21045p = function3;
    }
}
