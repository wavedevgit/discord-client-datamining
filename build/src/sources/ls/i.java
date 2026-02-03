package ls;

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
    private final Function3 f37562p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37563d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f37564e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f37566o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ls.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0489a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f37567d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f37568e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f37569i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f37570o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ls.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0490a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f37571d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f37572e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f37573i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f37574o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0490a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f37572e = iVar;
                    this.f37573i = flowCollector;
                    this.f37574o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0490a(this.f37572e, this.f37573i, this.f37574o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = pr.b.f();
                    int i10 = this.f37571d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f37572e.f37562p;
                        FlowCollector flowCollector = this.f37573i;
                        Object obj2 = this.f37574o;
                        this.f37571d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f33074a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0490a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ls.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f37575d;

                /* renamed from: e  reason: collision with root package name */
                Object f37576e;

                /* renamed from: i  reason: collision with root package name */
                Object f37577i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f37578o;

                /* renamed from: q  reason: collision with root package name */
                int f37580q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f37578o = obj;
                    this.f37580q |= Integer.MIN_VALUE;
                    return C0489a.this.emit(null, this);
                }
            }

            C0489a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f37567d = objectRef;
                this.f37568e = coroutineScope;
                this.f37569i = iVar;
                this.f37570o = flowCollector;
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
                    boolean r0 = r9 instanceof ls.i.a.C0489a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ls.i$a$a$b r0 = (ls.i.a.C0489a.b) r0
                    int r1 = r0.f37580q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f37580q = r1
                    goto L18
                L13:
                    ls.i$a$a$b r0 = new ls.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f37578o
                    java.lang.Object r1 = pr.b.f()
                    int r2 = r0.f37580q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f37577i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f37576e
                    java.lang.Object r0 = r0.f37575d
                    ls.i$a$a r0 = (ls.i.a.C0489a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f37567d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ls.k r2 = new ls.k
                    r2.<init>()
                    r9.h(r2)
                    r0.f37575d = r7
                    r0.f37576e = r8
                    r0.f37577i = r9
                    r0.f37580q = r3
                    java.lang.Object r9 = r9.e1(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f37567d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f37568e
                    hs.c0 r3 = hs.c0.f27910o
                    ls.i$a$a$a r4 = new ls.i$a$a$a
                    ls.i r2 = r0.f37569i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f37570o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = hs.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f33074a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ls.i.a.C0489a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f37566o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f37566o, continuation);
            aVar.f37564e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f37563d;
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
                Flow flow = iVar.f37558o;
                C0489a c0489a = new C0489a(objectRef, (CoroutineScope) this.f37564e, iVar, this.f37566o);
                this.f37563d = 1;
                if (flow.collect(c0489a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, js.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f33148d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? js.a.f32204d : aVar);
    }

    @Override // ls.e
    protected e f(CoroutineContext coroutineContext, int i10, js.a aVar) {
        return new i(this.f37562p, this.f37558o, coroutineContext, i10, aVar);
    }

    @Override // ls.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == pr.b.f()) {
            return g10;
        }
        return Unit.f33074a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, js.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f37562p = function3;
    }
}
