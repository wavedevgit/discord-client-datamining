package ag;

import android.content.Context;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements te.b {

    /* renamed from: a  reason: collision with root package name */
    private final te.b f623a;

    /* renamed from: b  reason: collision with root package name */
    private final te.b f624b;

    public r(Context context) {
        this.f623a = new p(context, com.google.android.gms.common.g.f());
        this.f624b = l.c(context);
    }

    public static /* synthetic */ Task a(r rVar, Task task) {
        if (!task.p() && !task.n()) {
            Exception k10 = task.k();
            if (k10 instanceof ef.b) {
                int b10 = ((ef.b) k10).b();
                if (b10 != 43001 && b10 != 43002 && b10 != 43003 && b10 != 17) {
                    if (b10 == 43000) {
                        return yg.m.e(new Exception("Failed to get app set ID due to an internal error. Please try again later."));
                    }
                    if (b10 == 15) {
                        return yg.m.e(new Exception("The operation to get app set ID timed out. Please try again later."));
                    }
                } else {
                    return rVar.f624b.g();
                }
            }
        }
        return task;
    }

    @Override // te.b
    public final Task g() {
        return this.f623a.g().j(new yg.c() { // from class: ag.q
            @Override // yg.c
            public final Object a(Task task) {
                return r.a(r.this, task);
            }
        });
    }
}
