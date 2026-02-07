package kotlinx.coroutines;

import os.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements os.n {

    /* renamed from: p  reason: collision with root package name */
    public final os.o f35103p;

    public g(os.o oVar) {
        this.f35103p = oVar;
    }

    @Override // os.n
    public boolean d(Throwable th2) {
        return u().R(th2);
    }

    @Override // os.n
    public Job getParent() {
        return u();
    }

    @Override // os.z0
    public boolean v() {
        return true;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        this.f35103p.K0(u());
    }
}
