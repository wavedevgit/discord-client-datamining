package kotlinx.coroutines;

import ys.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements ys.n {

    /* renamed from: p  reason: collision with root package name */
    public final ys.o f35603p;

    public g(ys.o oVar) {
        this.f35603p = oVar;
    }

    @Override // ys.n
    public boolean d(Throwable th2) {
        return u().R(th2);
    }

    @Override // ys.n
    public Job getParent() {
        return u();
    }

    @Override // ys.z0
    public boolean v() {
        return true;
    }

    @Override // ys.z0
    public void w(Throwable th2) {
        this.f35603p.J(u());
    }
}
