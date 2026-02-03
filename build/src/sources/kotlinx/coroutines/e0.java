package kotlinx.coroutines;

import hs.z0;
import kotlin.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f36118p;

    public e0(e eVar) {
        this.f36118p = eVar;
    }

    @Override // hs.z0
    public boolean v() {
        return false;
    }

    @Override // hs.z0
    public void w(Throwable th2) {
        Object c02 = u().c0();
        if (c02 instanceof hs.r) {
            e eVar = this.f36118p;
            Result.a aVar = Result.f33071e;
            eVar.resumeWith(Result.b(kotlin.c.a(((hs.r) c02).f27941a)));
            return;
        }
        e eVar2 = this.f36118p;
        Result.a aVar2 = Result.f33071e;
        eVar2.resumeWith(Result.b(c0.h(c02)));
    }
}
