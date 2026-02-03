package kotlinx.coroutines;

import js.z0;
import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f35544p;

    public x(Function1 function1) {
        this.f35544p = function1;
    }

    @Override // js.z0
    public boolean v() {
        return false;
    }

    @Override // js.z0
    public void w(Throwable th2) {
        this.f35544p.invoke(th2);
    }
}
