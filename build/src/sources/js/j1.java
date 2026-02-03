package js;

import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j1 {
    public static final CompletableJob a(Job job) {
        return new i1(job);
    }

    public static /* synthetic */ CompletableJob b(Job job, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            job = null;
        }
        return a(job);
    }
}
