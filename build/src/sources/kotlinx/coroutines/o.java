package kotlinx.coroutines;

import hs.n0;
import hs.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final n0 f36137p;

    public o(n0 n0Var) {
        this.f36137p = n0Var;
    }

    @Override // hs.z0
    public boolean v() {
        return false;
    }

    @Override // hs.z0
    public void w(Throwable th2) {
        this.f36137p.dispose();
    }
}
