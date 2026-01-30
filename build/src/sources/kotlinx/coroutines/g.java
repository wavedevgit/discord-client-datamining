package kotlinx.coroutines;

import gs.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements gs.n {

    /* renamed from: p  reason: collision with root package name */
    public final gs.o f36345p;

    public g(gs.o oVar) {
        this.f36345p = oVar;
    }

    @Override // gs.n
    public boolean d(Throwable th2) {
        return u().O(th2);
    }

    @Override // gs.n
    public Job getParent() {
        return u();
    }

    @Override // gs.z0
    public boolean v() {
        return true;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        this.f36345p.y1(u());
    }
}
