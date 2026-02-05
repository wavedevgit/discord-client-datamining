package qs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.FlowCollector;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c0 implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f48002d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f48003e;

    /* renamed from: i  reason: collision with root package name */
    private final Function2 f48004i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f48005d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f48006e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f48007i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f48007i = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f48007i, continuation);
            aVar.f48006e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f48005d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Object obj2 = this.f48006e;
                FlowCollector flowCollector = this.f48007i;
                this.f48005d = 1;
                if (flowCollector.emit(obj2, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((a) create(obj, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public c0(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        this.f48002d = coroutineContext;
        this.f48003e = l0.g(coroutineContext);
        this.f48004i = new a(flowCollector, null);
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object c10 = f.c(this.f48002d, obj, this.f48003e, this.f48004i, continuation);
        if (c10 == ur.b.f()) {
            return c10;
        }
        return Unit.f31988a;
    }
}
