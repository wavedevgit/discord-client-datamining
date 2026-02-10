package ts;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
import us.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f50918d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f50919e;

    /* renamed from: i  reason: collision with root package name */
    private final Function2 f50920i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50921d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50922e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50923i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f50923i = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50923i, continuation);
            aVar.f50922e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f50921d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Object obj2 = this.f50922e;
                FlowCollector flowCollector = this.f50923i;
                this.f50921d = 1;
                if (flowCollector.emit(obj2, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((a) create(obj, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public c0(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        this.f50918d = coroutineContext;
        this.f50919e = l0.g(coroutineContext);
        this.f50920i = new a(flowCollector, null);
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object c10 = f.c(this.f50918d, obj, this.f50919e, this.f50920i, continuation);
        if (c10 == xr.b.f()) {
            return c10;
        }
        return Unit.f31765a;
    }
}
