package ft;

import dt.m;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    public static final k f24381i = new k();

    private k() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher B1(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f24378d) {
            return m.b(this, str);
        }
        return super.B1(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f24365t.a2(runnable, true, false);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void w1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f24365t.a2(runnable, true, true);
    }
}
