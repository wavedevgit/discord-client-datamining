package ss;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
import ts.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f50074d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f50075e;

    /* renamed from: i  reason: collision with root package name */
    private final Function2 f50076i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50077d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50078e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50079i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f50079i = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50079i, continuation);
            aVar.f50078e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f50077d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Object obj2 = this.f50078e;
                FlowCollector flowCollector = this.f50079i;
                this.f50077d = 1;
                if (flowCollector.emit(obj2, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((a) create(obj, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public c0(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        this.f50074d = coroutineContext;
        this.f50075e = l0.g(coroutineContext);
        this.f50076i = new a(flowCollector, null);
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object c10 = f.c(this.f50074d, obj, this.f50075e, this.f50076i, continuation);
        if (c10 == wr.b.f()) {
            return c10;
        }
        return Unit.f32056a;
    }
}
