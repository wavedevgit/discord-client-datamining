package wg;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w implements g, f, e, h0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f52439a;

    /* renamed from: b  reason: collision with root package name */
    private final c f52440b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52441c;

    public w(Executor executor, c cVar, m0 m0Var) {
        this.f52439a = executor;
        this.f52440b = cVar;
        this.f52441c = m0Var;
    }

    @Override // wg.e
    public final void a() {
        this.f52441c.u();
    }

    @Override // wg.h0
    public final void b(Task task) {
        this.f52439a.execute(new v(this, task));
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        this.f52441c.s(exc);
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        this.f52441c.t(obj);
    }
}
