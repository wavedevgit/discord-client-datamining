package kotlinx.coroutines;

import ms.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements ms.n {

    /* renamed from: p  reason: collision with root package name */
    public final ms.o f35035p;

    public g(ms.o oVar) {
        this.f35035p = oVar;
    }

    @Override // ms.n
    public boolean d(Throwable th2) {
        return u().O(th2);
    }

    @Override // ms.n
    public Job getParent() {
        return u();
    }

    @Override // ms.z0
    public boolean v() {
        return true;
    }

    @Override // ms.z0
    public void w(Throwable th2) {
        this.f35035p.y1(u());
    }
}
