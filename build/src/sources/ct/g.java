package ct;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.d;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g extends e {

    /* renamed from: o  reason: collision with root package name */
    protected final Flow f21040o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f21041d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f21042e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f21042e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f21041d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                g gVar = g.this;
                this.f21041d = 1;
                if (gVar.q((FlowCollector) this.f21042e, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31987a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public g(Flow flow, CoroutineContext coroutineContext, int i10, at.a aVar) {
        super(coroutineContext, i10, aVar);
        this.f21040o = flow;
    }

    static /* synthetic */ Object n(g gVar, FlowCollector flowCollector, Continuation continuation) {
        if (gVar.f21031e == -3) {
            CoroutineContext context = continuation.getContext();
            CoroutineContext j10 = ys.x.j(context, gVar.f21030d);
            if (Intrinsics.areEqual(j10, context)) {
                Object q10 = gVar.q(flowCollector, continuation);
                if (q10 == gs.b.f()) {
                    return q10;
                }
                return Unit.f31987a;
            }
            d.b bVar = kotlin.coroutines.d.f32059j;
            if (Intrinsics.areEqual(j10.m(bVar), context.m(bVar))) {
                Object p10 = gVar.p(flowCollector, j10, continuation);
                if (p10 == gs.b.f()) {
                    return p10;
                }
                return Unit.f31987a;
            }
        }
        Object collect = super.collect(flowCollector, continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f31987a;
    }

    static /* synthetic */ Object o(g gVar, ProducerScope producerScope, Continuation continuation) {
        Object q10 = gVar.q(new z(producerScope), continuation);
        if (q10 == gs.b.f()) {
            return q10;
        }
        return Unit.f31987a;
    }

    private final Object p(FlowCollector flowCollector, CoroutineContext coroutineContext, Continuation continuation) {
        FlowCollector e10;
        e10 = f.e(flowCollector, continuation.getContext());
        return f.d(coroutineContext, e10, null, new a(null), continuation, 4, null);
    }

    @Override // ct.e, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return n(this, flowCollector, continuation);
    }

    @Override // ct.e
    protected Object e(ProducerScope producerScope, Continuation continuation) {
        return o(this, producerScope, continuation);
    }

    protected abstract Object q(FlowCollector flowCollector, Continuation continuation);

    @Override // ct.e
    public String toString() {
        return this.f21040o + " -> " + super.toString();
    }
}
