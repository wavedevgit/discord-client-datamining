package kotlinx.coroutines;

import os.n0;
import os.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final n0 f35071p;

    public o(n0 n0Var) {
        this.f35071p = n0Var;
    }

    @Override // os.z0
    public boolean v() {
        return false;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        this.f35071p.dispose();
    }
}
