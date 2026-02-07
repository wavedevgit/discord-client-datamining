package kotlinx.coroutines;

import kotlin.Result;
import os.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f35100p;

    public e0(e eVar) {
        this.f35100p = eVar;
    }

    @Override // os.z0
    public boolean v() {
        return false;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        Object e02 = u().e0();
        if (e02 instanceof os.r) {
            e eVar = this.f35100p;
            Result.a aVar = Result.f32053e;
            eVar.resumeWith(Result.b(kotlin.c.a(((os.r) e02).f43573a)));
            return;
        }
        e eVar2 = this.f35100p;
        Result.a aVar2 = Result.f32053e;
        eVar2.resumeWith(Result.b(c0.h(e02)));
    }
}
