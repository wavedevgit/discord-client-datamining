package yg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f55413a;

    /* renamed from: b  reason: collision with root package name */
    private final c f55414b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f55415c;

    public w(Executor executor, c cVar, m0 m0Var) {
        this.f55413a = executor;
        this.f55414b = cVar;
        this.f55415c = m0Var;
    }

    @Override // yg.e
    public final void a() {
        this.f55415c.u();
    }

    @Override // yg.h0
    public final void b(Task task) {
        this.f55413a.execute(new v(this, task));
    }

    @Override // yg.f
    public final void onFailure(Exception exc) {
        this.f55415c.s(exc);
    }

    @Override // yg.g
    public final void onSuccess(Object obj) {
        this.f55415c.t(obj);
    }
}
