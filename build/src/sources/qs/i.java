package qs;

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
    private final Function3 f48022p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48023d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f48024e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f48026o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: qs.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0603a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f48027d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CoroutineScope f48028e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ i f48029i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ FlowCollector f48030o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: qs.i$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0604a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f48031d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ i f48032e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ FlowCollector f48033i;

                /* renamed from: o  reason: collision with root package name */
                final /* synthetic */ Object f48034o;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0604a(i iVar, FlowCollector flowCollector, Object obj, Continuation continuation) {
                    super(2, continuation);
                    this.f48032e = iVar;
                    this.f48033i = flowCollector;
                    this.f48034o = obj;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0604a(this.f48032e, this.f48033i, this.f48034o, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    Object f10 = ur.b.f();
                    int i10 = this.f48031d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function3 function3 = this.f48032e.f48022p;
                        FlowCollector flowCollector = this.f48033i;
                        Object obj2 = this.f48034o;
                        this.f48031d = 1;
                        if (function3.invoke(flowCollector, obj2, this) == f10) {
                            return f10;
                        }
                    }
                    return Unit.f31988a;
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0604a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: qs.i$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f48035d;

                /* renamed from: e  reason: collision with root package name */
                Object f48036e;

                /* renamed from: i  reason: collision with root package name */
                Object f48037i;

                /* renamed from: o  reason: collision with root package name */
                /* synthetic */ Object f48038o;

                /* renamed from: q  reason: collision with root package name */
                int f48040q;

                b(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f48038o = obj;
                    this.f48040q |= Integer.MIN_VALUE;
                    return C0603a.this.emit(null, this);
                }
            }

            C0603a(Ref.ObjectRef objectRef, CoroutineScope coroutineScope, i iVar, FlowCollector flowCollector) {
                this.f48027d = objectRef;
                this.f48028e = coroutineScope;
                this.f48029i = iVar;
                this.f48030o = flowCollector;
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
                    boolean r0 = r9 instanceof qs.i.a.C0603a.b
                    if (r0 == 0) goto L13
                    r0 = r9
                    qs.i$a$a$b r0 = (qs.i.a.C0603a.b) r0
                    int r1 = r0.f48040q
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f48040q = r1
                    goto L18
                L13:
                    qs.i$a$a$b r0 = new qs.i$a$a$b
                    r0.<init>(r9)
                L18:
                    java.lang.Object r9 = r0.f48038o
                    java.lang.Object r1 = ur.b.f()
                    int r2 = r0.f48040q
                    r3 = 1
                    if (r2 == 0) goto L3b
                    if (r2 != r3) goto L33
                    java.lang.Object r8 = r0.f48037i
                    kotlinx.coroutines.Job r8 = (kotlinx.coroutines.Job) r8
                    java.lang.Object r8 = r0.f48036e
                    java.lang.Object r0 = r0.f48035d
                    qs.i$a$a r0 = (qs.i.a.C0603a) r0
                    kotlin.c.b(r9)
                    goto L5e
                L33:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r9)
                    throw r8
                L3b:
                    kotlin.c.b(r9)
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r7.f48027d
                    T r9 = r9.element
                    kotlinx.coroutines.Job r9 = (kotlinx.coroutines.Job) r9
                    if (r9 == 0) goto L5d
                    qs.k r2 = new qs.k
                    r2.<init>()
                    r9.h(r2)
                    r0.f48035d = r7
                    r0.f48036e = r8
                    r0.f48037i = r9
                    r0.f48040q = r3
                    java.lang.Object r9 = r9.Y0(r0)
                    if (r9 != r1) goto L5d
                    return r1
                L5d:
                    r0 = r7
                L5e:
                    kotlin.jvm.internal.Ref$ObjectRef r9 = r0.f48027d
                    kotlinx.coroutines.CoroutineScope r1 = r0.f48028e
                    ms.c0 r3 = ms.c0.f38912o
                    qs.i$a$a$a r4 = new qs.i$a$a$a
                    qs.i r2 = r0.f48029i
                    kotlinx.coroutines.flow.FlowCollector r0 = r0.f48030o
                    r5 = 0
                    r4.<init>(r2, r0, r8, r5)
                    r5 = 1
                    r6 = 0
                    r2 = 0
                    kotlinx.coroutines.Job r8 = ms.g.d(r1, r2, r3, r4, r5, r6)
                    r9.element = r8
                    kotlin.Unit r8 = kotlin.Unit.f31988a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: qs.i.a.C0603a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f48026o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f48026o, continuation);
            aVar.f48024e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f48023d;
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
                Flow flow = iVar.f48018o;
                C0603a c0603a = new C0603a(objectRef, (CoroutineScope) this.f48024e, iVar, this.f48026o);
                this.f48023d = 1;
                if (flow.collect(c0603a, this) == f10) {
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

    public /* synthetic */ i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, os.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function3, flow, (i11 & 4) != 0 ? kotlin.coroutines.e.f32062d : coroutineContext, (i11 & 8) != 0 ? -2 : i10, (i11 & 16) != 0 ? os.a.f44350d : aVar);
    }

    @Override // qs.e
    protected e g(CoroutineContext coroutineContext, int i10, os.a aVar) {
        return new i(this.f48022p, this.f48018o, coroutineContext, i10, aVar);
    }

    @Override // qs.g
    protected Object q(FlowCollector flowCollector, Continuation continuation) {
        Object g10 = kotlinx.coroutines.i.g(new a(flowCollector, null), continuation);
        if (g10 == ur.b.f()) {
            return g10;
        }
        return Unit.f31988a;
    }

    public i(Function3 function3, Flow flow, CoroutineContext coroutineContext, int i10, os.a aVar) {
        super(flow, coroutineContext, i10, aVar);
        this.f48022p = function3;
    }
}
