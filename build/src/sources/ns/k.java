package ns;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import ls.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    public static final k f42207i = new k();

    private k() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f42191t.i2(runnable, true, false);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f42191t.i2(runnable, true, true);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f42204d) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }
}
