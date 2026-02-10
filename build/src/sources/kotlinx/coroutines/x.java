package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import ps.z0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x extends z0 {

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f34845p;

    public x(Function1 function1) {
        this.f34845p = function1;
    }

    @Override // ps.z0
    public boolean v() {
        return false;
    }

    @Override // ps.z0
    public void w(Throwable th2) {
        this.f34845p.invoke(th2);
    }
}
