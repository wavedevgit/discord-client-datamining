package vs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import ts.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    public static final k f53028i = new k();

    private k() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f53012t.i2(runnable, true, false);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void T1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f53012t.i2(runnable, true, true);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher a2(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f53025d) {
            return m.b(this, str);
        }
        return super.a2(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }
}
