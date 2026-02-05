package kotlinx.coroutines;

import kotlin.Result;
import ms.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f35032p;

    public e0(e eVar) {
        this.f35032p = eVar;
    }

    @Override // ms.z0
    public boolean v() {
        return false;
    }

    @Override // ms.z0
    public void w(Throwable th2) {
        Object d02 = u().d0();
        if (d02 instanceof ms.r) {
            e eVar = this.f35032p;
            Result.a aVar = Result.f31985e;
            eVar.resumeWith(Result.b(kotlin.c.a(((ms.r) d02).f38943a)));
            return;
        }
        e eVar2 = this.f35032p;
        Result.a aVar2 = Result.f31985e;
        eVar2.resumeWith(Result.b(c0.h(d02)));
    }
}
