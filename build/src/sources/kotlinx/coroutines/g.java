package kotlinx.coroutines;

import hs.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements hs.n {

    /* renamed from: p  reason: collision with root package name */
    public final hs.o f36121p;

    public g(hs.o oVar) {
        this.f36121p = oVar;
    }

    @Override // hs.n
    public boolean d(Throwable th2) {
        return u().O(th2);
    }

    @Override // hs.n
    public Job getParent() {
        return u();
    }

    @Override // hs.z0
    public boolean v() {
        return true;
    }

    @Override // hs.z0
    public void w(Throwable th2) {
        this.f36121p.Y0(u());
    }
}
