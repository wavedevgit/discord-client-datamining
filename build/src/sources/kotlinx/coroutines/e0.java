package kotlinx.coroutines;

import kotlin.Result;
import ys.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f35600p;

    public e0(e eVar) {
        this.f35600p = eVar;
    }

    @Override // ys.z0
    public boolean v() {
        return false;
    }

    @Override // ys.z0
    public void w(Throwable th2) {
        Object f02 = u().f0();
        if (f02 instanceof ys.r) {
            e eVar = this.f35600p;
            Result.a aVar = Result.f32553e;
            eVar.resumeWith(Result.b(kotlin.c.a(((ys.r) f02).f56385a)));
            return;
        }
        e eVar2 = this.f35600p;
        Result.a aVar2 = Result.f32553e;
        eVar2.resumeWith(Result.b(c0.h(f02)));
    }
}
