package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import os.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f35136p;

    public x(Function1 function1) {
        this.f35136p = function1;
    }

    @Override // os.z0
    public boolean v() {
        return false;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        this.f35136p.invoke(th2);
    }
}
