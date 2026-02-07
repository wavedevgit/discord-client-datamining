package ss;

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
    private final Function3 f50094p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50095d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50096e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50098o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ss.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0652a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f50099d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f50100e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f50101i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50102o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ss.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0653a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f50103d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f50104e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f50105i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f50106o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0653a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f50104e = iVar;
                    this.f50105i = flowCollector;
                    this.f50106o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0653a(this.f50104e, this.f50105i, this.f50106o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = wr.b.f();
                    int i10 = this.f50103d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f50104e.f50094p;
                        FlowCollector flowCollector = this.f50105i;
                        Object obj2 = this.f50106o;
                        this.f50103d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f32056a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0653a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ss.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f50107d;

                /* renamed from: e  reason: collision with root package name */
                Object f50108e;

                /* renamed from: i  reason: collision with root package name */
                Object f50109i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f50110o;

                /* renamed from: q  reason: collision with root package name */
                int f50112q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f50110o = obj;
                    this.f50112q |= Integer.MIN_VALUE;
                    return C0652a.this.emit(null, this);
                }
            }

            C0652a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f50099d = objectRef;
                this.f50100e = coroutineScope;
                this.f50101i = iVar;
                this.f50102o = flowCollector;
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
                    boolean r0 = r9 instanceof ss.i.a.C0652a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    ss.i$a$a$b r0 = (ss.i.a.C0652a.b) r0
                    int r1 = r0.f50112q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f50112q = r1
                    goto L18
                L13:
                    ss.i$a$a$b r0 = new ss.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f50110o
                    java.lang.Object r1 = wr.b.f()
                    int r2 = r0.f50112q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f50109i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f50108e
                    java.lang.Object r0 = r0.f50107d
                    ss.i$a$a r0 = (ss.i.a.C0652a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f50099d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    ss.k r2 = new ss.k
                    r2.<init>()
                    r9.k(r2)
                    r0.f50107d = r7
                    r0.f50108e = r8
                    r0.f50109i = r9
                    r0.f50112q = r3
                    java.lang.Object r9 = r9.d1(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f50099d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f50100e
                    os.c0 r3 = os.c0.f43542o
                    ss.i$a$a$a r4 = new ss.i$a$a$a
                    ss.i r2 = r0.f50101i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f50102o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = os.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f32056a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: ss.i.a.C0652a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f50098o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50098o, continuation);
            aVar.f50096e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f50095d;
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
                Flow flow = iVar.f50090o;
                C0652a c0652a = new C0652a(objectRef, (CoroutineScope) this.f50096e, iVar, this.f50098o);
                this.f50095d = 1;
                if (flow.collect(c0652a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, qs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f32130d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? qs.a.f48114d : aVar);
    }

    @Override // ss.e
    protected e h(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return new i(this.f50094p, this.f50090o, coroutineContext, i10, aVar);
    }

    @Override // ss.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32056a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f50094p = function3;
    }
}
