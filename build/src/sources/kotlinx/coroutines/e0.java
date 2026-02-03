package kotlinx.coroutines;

import js.z0;
import kotlin.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f35508p;

    public e0(e eVar) {
        this.f35508p = eVar;
    }

    @Override // js.z0
    public boolean v() {
        return false;
    }

    @Override // js.z0
    public void w(Throwable th2) {
        Object c02 = u().c0();
        if (c02 instanceof js.r) {
            e eVar = this.f35508p;
            Result.a aVar = Result.f32461e;
            eVar.resumeWith(Result.b(kotlin.c.a(((js.r) c02).f31981a)));
            return;
        }
        e eVar2 = this.f35508p;
        Result.a aVar2 = Result.f32461e;
        eVar2.resumeWith(Result.b(c0.h(c02)));
    }
}
