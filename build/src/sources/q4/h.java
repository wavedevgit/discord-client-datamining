package q4;

import androidx.work.impl.WorkDatabase;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final WorkDatabase f47408a;

    public h(WorkDatabase workDatabase) {
        Intrinsics.checkNotNullParameter(workDatabase, "workDatabase");
        this.f47408a = workDatabase;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer d(h this$0) {
        int d10;
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        d10 = i.d(this$0.f47408a, "next_alarm_manager_id");
        return Integer.valueOf(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer f(h this$0, int i10, int i11) {
        int d10;
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        d10 = i.d(this$0.f47408a, "next_job_scheduler_id");
        if (i10 > d10 || d10 > i11) {
            i.e(this$0.f47408a, "next_job_scheduler_id", i10 + 1);
        } else {
            i10 = d10;
        }
        return Integer.valueOf(i10);
    }

    public final int c() {
        Object z10 = this.f47408a.z(new Callable() { // from class: q4.f
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer d10;
                d10 = h.d(h.this);
                return d10;
            }
        });
        Intrinsics.checkNotNullExpressionValue(z10, "workDatabase.runInTransa…ANAGER_ID_KEY)\n        })");
        return ((Number) z10).intValue();
    }

    public final int e(final int i10, final int i11) {
        Object z10 = this.f47408a.z(new Callable() { // from class: q4.g
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer f10;
                f10 = h.f(h.this, i10, i11);
                return f10;
            }
        });
        Intrinsics.checkNotNullExpressionValue(z10, "workDatabase.runInTransa…            id\n        })");
        return ((Number) z10).intValue();
    }
}
