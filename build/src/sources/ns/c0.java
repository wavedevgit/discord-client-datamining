package ns;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
import os.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f41942d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f41943e;

    /* renamed from: i  reason: collision with root package name */
    private final Function2 f41944i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f41945d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f41946e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f41947i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f41947i = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f41947i, continuation);
            aVar.f41946e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f41945d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Object obj2 = this.f41946e;
                FlowCollector flowCollector = this.f41947i;
                this.f41945d = 1;
                if (flowCollector.emit(obj2, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((a) create(obj, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public c0(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        this.f41942d = coroutineContext;
        this.f41943e = l0.g(coroutineContext);
        this.f41944i = new a(flowCollector, null);
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object c10 = f.c(this.f41942d, obj, this.f41943e, this.f41944i, continuation);
        if (c10 == rr.b.f()) {
            return c10;
        }
        return Unit.f32464a;
    }
}
