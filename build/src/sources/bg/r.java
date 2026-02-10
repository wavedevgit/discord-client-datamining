package bg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements ue.b {

    /* renamed from: a  reason: collision with root package name */
    private final ue.b f6717a;

    /* renamed from: b  reason: collision with root package name */
    private final ue.b f6718b;

    public r(Context context) {
        this.f6717a = new p(context, com.google.android.gms.common.g.f());
        this.f6718b = l.c(context);
    }

    public static /* synthetic */ Task a(r rVar, Task task) {
        if (!task.p() && !task.n()) {
            Exception k10 = task.k();
            if (k10 instanceof ff.b) {
                int b10 = ((ff.b) k10).b();
                if (b10 != 43001 && b10 != 43002 && b10 != 43003 && b10 != 17) {
                    if (b10 == 43000) {
                        return zg.m.e(new Exception("Failed to get app set ID due to an internal error. Please try again later."));
                    }
                    if (b10 == 15) {
                        return zg.m.e(new Exception("The operation to get app set ID timed out. Please try again later."));
                    }
                } else {
                    return rVar.f6718b.g();
                }
            }
        }
        return task;
    }

    @Override // ue.b
    public final Task g() {
        return this.f6717a.g().j(new zg.c() { // from class: bg.q
            @Override // zg.c
            public final Object a(Task task) {
                return r.a(r.this, task);
            }
        });
    }
}
