package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.jvm.functions.Function1;
import os.z0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class w extends z0 {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35134q = AtomicIntegerFieldUpdater.newUpdater(w.class, "_invoked$volatile");
    private volatile /* synthetic */ int _invoked$volatile;

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f35135p;

    public w(Function1 function1) {
        this.f35135p = function1;
    }

    @Override // os.z0
    public boolean v() {
        return true;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        if (f35134q.compareAndSet(this, 0, 1)) {
            this.f35135p.invoke(th2);
        }
    }
}
