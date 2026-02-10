package ts;

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
    private final Function3 f50938p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50939d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50940e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50942o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ts.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0699a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f50943d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f50944e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f50945i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50946o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ts.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0700a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f50947d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f50948e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f50949i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f50950o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0700a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f50948e = iVar;
                    this.f50949i = flowCollector;
                    this.f50950o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0700a(this.f50948e, this.f50949i, this.f50950o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = xr.b.f();
                    int i10 = this.f50947d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f50948e.f50938p;
                        FlowCollector flowCollector = this.f50949i;
                        Object obj2 = this.f50950o;
                        this.f50947d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f31765a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0700a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ts.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f50951d;

                /* renamed from: e  reason: collision with root package name */
                Object f50952e;

                /* renamed from: i  reason: collision with root package name */
                Object f50953i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f50954o;

                /* renamed from: q  reason: collision with root package name */
                int f50956q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f50954o = obj;
                    this.f50956q |= Integer.MIN_VALUE;
                    return C0699a.this.emit(null, this);
                }
            }

            C0699a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f50943d = objectRef;
                this.f50944e = coroutineScope;
                this.f50945i = iVar;
                this.f50946o = flowCollector;
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
                    boolean r0 = r9 instanceof ts.i.a.C0699a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ts.i$a$a$b r0 = (ts.i.a.C0699a.b) r0
                    int r1 = r0.f50956q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f50956q = r1
                    goto L18
                L13:
                    ts.i$a$a$b r0 = new ts.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f50954o
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f50956q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f50953i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f50952e
                    java.lang.Object r0 = r0.f50951d
                    ts.i$a$a r0 = (ts.i.a.C0699a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f50943d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ts.k r2 = new ts.k
                    r2.<init>()
                    r9.k(r2)
                    r0.f50951d = r7
                    r0.f50952e = r8
                    r0.f50953i = r9
                    r0.f50956q = r3
                    java.lang.Object r9 = r9.W0(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f50943d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f50944e
                    ps.c0 r3 = ps.c0.f44499o
                    ts.i$a$a$a r4 = new ts.i$a$a$a
                    ts.i r2 = r0.f50945i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f50946o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = ps.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f31765a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ts.i.a.C0699a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f50942o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50942o, continuation);
            aVar.f50940e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f50939d;
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
                Flow flow = iVar.f50934o;
                C0699a c0699a = new C0699a(objectRef, (CoroutineScope) this.f50940e, iVar, this.f50942o);
                this.f50939d = 1;
                if (flow.collect(c0699a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, rs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f31839d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? rs.a.f49232d : aVar);
    }

    @Override // ts.e
    protected e f(CoroutineContext coroutineContext, int i10, rs.a aVar) {
        return new i(this.f50938p, this.f50934o, coroutineContext, i10, aVar);
    }

    @Override // ts.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == xr.b.f()) {
            return g10;
        }
        return Unit.f31765a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, rs.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f50938p = function3;
    }
}
