package gs;

import kotlin.Result;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q {
    public static final CompletableDeferred a(Job job) {
        return new p(job);
    }

    public static /* synthetic */ CompletableDeferred b(Job job, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            job = null;
        }
        return a(job);
    }

    public static final boolean c(CompletableDeferred completableDeferred, Object obj) {
        Throwable e10 = Result.e(obj);
        if (e10 == null) {
            return completableDeferred.J0(obj);
        }
        return completableDeferred.I0(e10);
    }
}
