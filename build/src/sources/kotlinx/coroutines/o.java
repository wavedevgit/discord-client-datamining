package kotlinx.coroutines;

import ys.n0;
import ys.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final n0 f35619p;

    public o(n0 n0Var) {
        this.f35619p = n0Var;
    }

    @Override // ys.z0
    public boolean v() {
        return false;
    }

    @Override // ys.z0
    public void w(Throwable th2) {
        this.f35619p.dispose();
    }
}
