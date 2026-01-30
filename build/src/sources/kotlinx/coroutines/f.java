package kotlinx.coroutines;

import gs.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends z0 {

    /* renamed from: p  reason: collision with root package name */
    public final e f36343p;

    public f(e eVar) {
        this.f36343p = eVar;
    }

    @Override // gs.z0
    public boolean v() {
        return true;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        e eVar = this.f36343p;
        eVar.O(eVar.z(u()));
    }
}
