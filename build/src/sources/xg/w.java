package xg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f53861a;

    /* renamed from: b  reason: collision with root package name */
    private final c f53862b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f53863c;

    public w(Executor executor, c cVar, m0 m0Var) {
        this.f53861a = executor;
        this.f53862b = cVar;
        this.f53863c = m0Var;
    }

    @Override // xg.e
    public final void a() {
        this.f53863c.u();
    }

    @Override // xg.h0
    public final void b(Task task) {
        this.f53861a.execute(new v(this, task));
    }

    @Override // xg.f
    public final void onFailure(Exception exc) {
        this.f53863c.s(exc);
    }

    @Override // xg.g
    public final void onSuccess(Object obj) {
        this.f53863c.t(obj);
    }
}
