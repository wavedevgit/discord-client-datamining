package kotlinx.coroutines;

import js.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements js.n {

    /* renamed from: p  reason: collision with root package name */
    public final js.o f35511p;

    public g(js.o oVar) {
        this.f35511p = oVar;
    }

    @Override // js.n
    public boolean d(Throwable th2) {
        return u().O(th2);
    }

    @Override // js.n
    public Job getParent() {
        return u();
    }

    @Override // js.z0
    public boolean v() {
        return true;
    }

    @Override // js.z0
    public void w(Throwable th2) {
        this.f35511p.B1(u());
    }
}
