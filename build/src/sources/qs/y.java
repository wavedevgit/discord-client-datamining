package qs;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y {
    public static final void b(final v vVar, CoroutineContext coroutineContext) {
        if (((Number) coroutineContext.A1(0, new Function2() { // from class: qs.x
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                int c10;
                c10 = y.c(v.this, ((Integer) obj).intValue(), (CoroutineContext.Element) obj2);
                return Integer.valueOf(c10);
            }
        })).intValue() == vVar.f48080i) {
            return;
        }
        throw new IllegalStateException(("Flow invariant is violated:\n\t\tFlow was collected in " + vVar.f48079e + ",\n\t\tbut emission happened in " + coroutineContext + ".\n\t\tPlease refer to 'flow' documentation or use 'flowOn' instead").toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int c(v vVar, int i10, CoroutineContext.Element element) {
        CoroutineContext.b key = element.getKey();
        CoroutineContext.Element k10 = vVar.f48079e.k(key);
        if (key != Job.f34997h) {
            if (element != k10) {
                return Integer.MIN_VALUE;
            }
            return i10 + 1;
        }
        Job job = (Job) k10;
        Intrinsics.checkNotNull(element, "null cannot be cast to non-null type kotlinx.coroutines.Job");
        Job d10 = d((Job) element, job);
        if (d10 == job) {
            if (job == null) {
                return i10;
            }
            return i10 + 1;
        }
        throw new IllegalStateException(("Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n\t\tChild of " + d10 + ", expected child of " + job + ".\n\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'").toString());
    }

    public static final Job d(Job job, Job job2) {
        while (job != null) {
            if (job == job2 || !(job instanceof rs.a0)) {
                return job;
            }
            job = ((rs.a0) job).b0();
        }
        return null;
    }
}
