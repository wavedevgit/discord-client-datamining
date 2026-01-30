package kotlinx.coroutines;

import gs.z0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Continuation f36344p;

    public f0(Continuation continuation) {
        this.f36344p = continuation;
    }

    @Override // gs.z0
    public boolean v() {
        return false;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        Continuation continuation = this.f36344p;
        Result.a aVar = Result.f33295e;
        continuation.resumeWith(Result.b(Unit.f33298a));
    }
}
