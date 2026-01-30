package ks;

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
    private final Function3 f36480p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36481d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f36482e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36484o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0464a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f36485d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f36486e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f36487i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f36488o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ks.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0465a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f36489d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f36490e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f36491i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f36492o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0465a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f36490e = iVar;
                    this.f36491i = flowCollector;
                    this.f36492o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0465a(this.f36490e, this.f36491i, this.f36492o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = or.b.f();
                    int i10 = this.f36489d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f36490e.f36480p;
                        FlowCollector flowCollector = this.f36491i;
                        Object obj2 = this.f36492o;
                        this.f36489d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f33298a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0465a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ks.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f36493d;

                /* renamed from: e  reason: collision with root package name */
                Object f36494e;

                /* renamed from: i  reason: collision with root package name */
                Object f36495i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f36496o;

                /* renamed from: q  reason: collision with root package name */
                int f36498q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f36496o = obj;
                    this.f36498q |= Integer.MIN_VALUE;
                    return C0464a.this.emit(null, this);
                }
            }

            C0464a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f36485d = objectRef;
                this.f36486e = coroutineScope;
                this.f36487i = iVar;
                this.f36488o = flowCollector;
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
                    boolean r0 = r9 instanceof ks.i.a.C0464a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ks.i$a$a$b r0 = (ks.i.a.C0464a.b) r0
                    int r1 = r0.f36498q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f36498q = r1
                    goto L18
                L13:
                    ks.i$a$a$b r0 = new ks.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f36496o
                    java.lang.Object r1 = or.b.f()
                    int r2 = r0.f36498q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f36495i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f36494e
                    java.lang.Object r0 = r0.f36493d
                    ks.i$a$a r0 = (ks.i.a.C0464a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f36485d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ks.k r2 = new ks.k
                    r2.<init>()
                    r9.h(r2)
                    r0.f36493d = r7
                    r0.f36494e = r8
                    r0.f36495i = r9
                    r0.f36498q = r3
                    java.lang.Object r9 = r9.X0(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f36485d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f36486e
                    gs.c0 r3 = gs.c0.f27163o
                    ks.i$a$a$a r4 = new ks.i$a$a$a
                    ks.i r2 = r0.f36487i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f36488o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = gs.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f33298a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ks.i.a.C0464a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f36484o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f36484o, continuation);
            aVar.f36482e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36481d;
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
                Flow flow = iVar.f36476o;
                C0464a c0464a = new C0464a(objectRef, (CoroutineScope) this.f36482e, iVar, this.f36484o);
                this.f36481d = 1;
                if (flow.collect(c0464a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, is.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f33372d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? is.a.f31141d : aVar);
    }

    @Override // ks.e
    protected e g(CoroutineContext coroutineContext, int i10, is.a aVar) {
        return new i(this.f36480p, this.f36476o, coroutineContext, i10, aVar);
    }

    @Override // ks.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, is.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f36480p = function3;
    }
}
