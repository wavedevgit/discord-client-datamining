package kotlinx.coroutines;

import ps.n0;
import ps.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final n0 f34828p;

    public o(n0 n0Var) {
        this.f34828p = n0Var;
    }

    @Override // ps.z0
    public boolean v() {
        return false;
    }

    @Override // ps.z0
    public void w(Throwable th2) {
        this.f34828p.dispose();
    }
}
