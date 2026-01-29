package kotlinx.coroutines;

import gs.z0;
import kotlin.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f36326p;

    public e0(e eVar) {
        this.f36326p = eVar;
    }

    @Override // gs.z0
    public boolean v() {
        return false;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        Object c02 = u().c0();
        if (c02 instanceof gs.r) {
            e eVar = this.f36326p;
            Result.a aVar = Result.f33279e;
            eVar.resumeWith(Result.b(kotlin.c.a(((gs.r) c02).f27178a)));
            return;
        }
        e eVar2 = this.f36326p;
        Result.a aVar2 = Result.f33279e;
        eVar2.resumeWith(Result.b(c0.h(c02)));
    }
}
