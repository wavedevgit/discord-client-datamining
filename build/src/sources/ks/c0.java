package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
import ls.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f36460d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f36461e;

    /* renamed from: i  reason: collision with root package name */
    private final Function2 f36462i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36463d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f36464e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36465i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f36465i = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f36465i, continuation);
            aVar.f36464e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36463d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Object obj2 = this.f36464e;
                FlowCollector flowCollector = this.f36465i;
                this.f36463d = 1;
                if (flowCollector.emit(obj2, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((a) create(obj, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public c0(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        this.f36460d = coroutineContext;
        this.f36461e = l0.g(coroutineContext);
        this.f36462i = new a(flowCollector, null);
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object c10 = f.c(this.f36460d, obj, this.f36461e, this.f36462i, continuation);
        if (c10 == or.b.f()) {
            return c10;
        }
        return Unit.f33298a;
    }
}
