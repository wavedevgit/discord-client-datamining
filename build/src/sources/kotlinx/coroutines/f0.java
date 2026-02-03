package kotlinx.coroutines;

import js.z0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Continuation f35510p;

    public f0(Continuation continuation) {
        this.f35510p = continuation;
    }

    @Override // js.z0
    public boolean v() {
        return false;
    }

    @Override // js.z0
    public void w(Throwable th2) {
        Continuation continuation = this.f35510p;
        Result.a aVar = Result.f32461e;
        continuation.resumeWith(Result.b(Unit.f32464a));
    }
}
