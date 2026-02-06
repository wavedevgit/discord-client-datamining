package kotlinx.coroutines;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import os.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Continuation f35054p;

    public f0(Continuation continuation) {
        this.f35054p = continuation;
    }

    @Override // os.z0
    public boolean v() {
        return false;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        Continuation continuation = this.f35054p;
        Result.a aVar = Result.f32005e;
        continuation.resumeWith(Result.b(Unit.f32008a));
    }
}
