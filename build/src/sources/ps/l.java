package ps;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import qs.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class l {
    public static final Flow a(Flow flow, int i10, os.a aVar) {
        if (i10 < 0 && i10 != -2 && i10 != -1) {
            throw new IllegalArgumentException(("Buffer size should be non-negative, BUFFERED, or CONFLATED, but was " + i10).toString());
        } else if (i10 == -1 && aVar != os.a.f44350d) {
            throw new IllegalArgumentException("CONFLATED capacity cannot be used with non-default onBufferOverflow");
        } else {
            if (i10 == -1) {
                aVar = os.a.f44351e;
                i10 = 0;
            }
            int i11 = i10;
            os.a aVar2 = aVar;
            if (flow instanceof qs.q) {
                return q.a.a((qs.q) flow, null, i11, aVar2, 1, null);
            }
            return new qs.h(flow, null, i11, aVar2, 2, null);
        }
    }

    public static /* synthetic */ Flow b(Flow flow, int i10, os.a aVar, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = -2;
        }
        if ((i11 & 2) != 0) {
            aVar = os.a.f44350d;
        }
        return g.b(flow, i10, aVar);
    }

    public static final Flow c(Flow flow) {
        if (flow instanceof c) {
            return flow;
        }
        return new d(flow);
    }

    private static final void d(CoroutineContext coroutineContext) {
        if (coroutineContext.k(Job.f34997h) == null) {
            return;
        }
        throw new IllegalArgumentException(("Flow context cannot contain job in it. Had " + coroutineContext).toString());
    }

    public static final Flow e(Flow flow) {
        Flow b10;
        b10 = b(flow, -1, null, 2, null);
        return b10;
    }

    public static final Flow f(Flow flow, CoroutineContext coroutineContext) {
        d(coroutineContext);
        if (Intrinsics.areEqual(coroutineContext, kotlin.coroutines.e.f32062d)) {
            return flow;
        }
        if (flow instanceof qs.q) {
            return q.a.a((qs.q) flow, coroutineContext, 0, null, 6, null);
        }
        return new qs.h(flow, coroutineContext, 0, null, 12, null);
    }
}
