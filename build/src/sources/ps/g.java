package ps;

import java.util.Collection;
import java.util.List;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {
    public static final Flow A(Iterable iterable) {
        return u.b(iterable);
    }

    public static final Flow B(Flow... flowArr) {
        return u.c(flowArr);
    }

    public static final Flow C(Flow flow, Function2 function2) {
        return x.b(flow, function2);
    }

    public static final a0 D(a0 a0Var, Function2 function2) {
        return w.d(a0Var, function2);
    }

    public static final os.v E(Flow flow, CoroutineScope coroutineScope) {
        return i.d(flow, coroutineScope);
    }

    public static final j0 F(Flow flow, CoroutineScope coroutineScope, g0 g0Var, Object obj) {
        return w.e(flow, coroutineScope, g0Var, obj);
    }

    public static final Flow G(Flow flow, int i10) {
        return t.e(flow, i10);
    }

    public static final Flow H(Flow flow, Function2 function2) {
        return t.f(flow, function2);
    }

    public static final Flow I(Flow flow, long j10) {
        return n.e(flow, j10);
    }

    public static final Object J(Flow flow, Collection collection, Continuation continuation) {
        return k.a(flow, collection, continuation);
    }

    public static final Object K(Flow flow, List list, Continuation continuation) {
        return k.b(flow, list, continuation);
    }

    public static final Flow M(Flow flow, Function3 function3) {
        return u.d(flow, function3);
    }

    public static final Flow N(Flow flow, Function3 function3) {
        return t.g(flow, function3);
    }

    public static final j0 a(MutableStateFlow mutableStateFlow) {
        return w.a(mutableStateFlow);
    }

    public static final Flow b(Flow flow, int i10, os.a aVar) {
        return l.a(flow, i10, aVar);
    }

    public static final Flow d(Function2 function2) {
        return h.a(function2);
    }

    public static final Flow e(Flow flow) {
        return l.c(flow);
    }

    public static final Flow f(Flow flow, Function3 function3) {
        return s.a(flow, function3);
    }

    public static final Object g(Flow flow, FlowCollector flowCollector, Continuation continuation) {
        return s.b(flow, flowCollector, continuation);
    }

    public static final Object h(Flow flow, Continuation continuation) {
        return j.a(flow, continuation);
    }

    public static final Object i(Flow flow, Function2 function2, Continuation continuation) {
        return j.b(flow, function2, continuation);
    }

    public static final Flow j(Flow flow) {
        return l.e(flow);
    }

    public static final Flow k(Flow flow, long j10) {
        return n.b(flow, j10);
    }

    public static final Flow l(Flow flow) {
        return q.e(flow);
    }

    public static final Flow m(Flow flow, int i10) {
        return t.b(flow, i10);
    }

    public static final Flow n(Flow flow, Function2 function2) {
        return t.c(flow, function2);
    }

    public static final Object o(FlowCollector flowCollector, Flow flow, Continuation continuation) {
        return j.c(flowCollector, flow, continuation);
    }

    public static final Object p(FlowCollector flowCollector, os.v vVar, Continuation continuation) {
        return i.b(flowCollector, vVar, continuation);
    }

    public static final void q(FlowCollector flowCollector) {
        r.a(flowCollector);
    }

    public static final Flow r(Flow flow) {
        return x.a(flow);
    }

    public static final Object s(Flow flow, Continuation continuation) {
        return v.a(flow, continuation);
    }

    public static final Object t(Flow flow, Function2 function2, Continuation continuation) {
        return v.b(flow, function2, continuation);
    }

    public static final Object u(Flow flow, Continuation continuation) {
        return v.c(flow, continuation);
    }

    public static final Flow v(Function2 function2) {
        return h.b(function2);
    }

    public static final Flow w(Object obj) {
        return h.c(obj);
    }

    public static final Flow x(Flow flow, CoroutineContext coroutineContext) {
        return l.f(flow, coroutineContext);
    }

    public static final Job y(Flow flow, CoroutineScope coroutineScope) {
        return j.d(flow, coroutineScope);
    }

    public static final Flow z(Flow flow, Function2 function2) {
        return u.a(flow, function2);
    }
}
