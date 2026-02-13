package bt;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7592d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Flow f7593e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow flow, Continuation continuation) {
            super(2, continuation);
            this.f7593e = flow;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f7593e, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f7592d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f7593e;
                this.f7592d = 1;
                if (g.h(flow, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public static final Object a(Flow flow, Continuation continuation) {
        Object collect = flow.collect(ct.s.f21097d, continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f32556a;
    }

    public static final Object b(Flow flow, Function2 function2, Continuation continuation) {
        Flow b10;
        b10 = l.b(g.z(flow, function2), 0, null, 2, null);
        Object h10 = g.h(b10, continuation);
        if (h10 == gs.b.f()) {
            return h10;
        }
        return Unit.f32556a;
    }

    public static final Object c(FlowCollector flowCollector, Flow flow, Continuation continuation) {
        g.q(flowCollector);
        Object collect = flow.collect(flowCollector, continuation);
        if (collect == gs.b.f()) {
            return collect;
        }
        return Unit.f32556a;
    }

    public static final Job d(Flow flow, CoroutineScope coroutineScope) {
        Job d10;
        d10 = ys.i.d(coroutineScope, null, null, new a(flow, null), 3, null);
        return d10;
    }
}
