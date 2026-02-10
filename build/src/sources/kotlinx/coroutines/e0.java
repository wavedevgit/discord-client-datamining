package kotlinx.coroutines;

import kotlin.Result;
import ps.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f34809p;

    public e0(e eVar) {
        this.f34809p = eVar;
    }

    @Override // ps.z0
    public boolean v() {
        return false;
    }

    @Override // ps.z0
    public void w(Throwable th2) {
        Object e02 = u().e0();
        if (e02 instanceof ps.r) {
            e eVar = this.f34809p;
            Result.a aVar = Result.f31762e;
            eVar.resumeWith(Result.b(kotlin.c.a(((ps.r) e02).f44530a)));
            return;
        }
        e eVar2 = this.f34809p;
        Result.a aVar2 = Result.f31762e;
        eVar2.resumeWith(Result.b(c0.h(e02)));
    }
}
