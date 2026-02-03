package kotlinx.coroutines;

import js.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends z0 {

    /* renamed from: p  reason: collision with root package name */
    public final e f35509p;

    public f(e eVar) {
        this.f35509p = eVar;
    }

    @Override // js.z0
    public boolean v() {
        return true;
    }

    @Override // js.z0
    public void w(Throwable th2) {
        e eVar = this.f35509p;
        eVar.O(eVar.z(u()));
    }
}
