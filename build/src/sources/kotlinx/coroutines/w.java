package kotlinx.coroutines;

import gs.z0;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class w extends z0 {

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f36360q = AtomicIntegerFieldUpdater.newUpdater(w.class, "_invoked$volatile");
    private volatile /* synthetic */ int _invoked$volatile;

    /* renamed from: p  reason: collision with root package name */
    private final Function1 f36361p;

    public w(Function1 function1) {
        this.f36361p = function1;
    }

    @Override // gs.z0
    public boolean v() {
        return true;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        if (f36360q.compareAndSet(this, 0, 1)) {
            this.f36361p.invoke(th2);
        }
    }
}
