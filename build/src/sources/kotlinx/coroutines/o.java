package kotlinx.coroutines;

import gs.n0;
import gs.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final n0 f36345p;

    public o(n0 n0Var) {
        this.f36345p = n0Var;
    }

    @Override // gs.z0
    public boolean v() {
        return false;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        this.f36345p.dispose();
    }
}
