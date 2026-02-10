package kotlinx.coroutines;

import ps.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends z0 implements ps.n {

    /* renamed from: p  reason: collision with root package name */
    public final ps.o f34812p;

    public g(ps.o oVar) {
        this.f34812p = oVar;
    }

    @Override // ps.n
    public boolean d(Throwable th2) {
        return u().R(th2);
    }

    @Override // ps.n
    public Job getParent() {
        return u();
    }

    @Override // ps.z0
    public boolean v() {
        return true;
    }

    @Override // ps.z0
    public void w(Throwable th2) {
        this.f34812p.R0(u());
    }
}
