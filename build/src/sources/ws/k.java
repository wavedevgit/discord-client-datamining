package ws;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.CoroutineDispatcher;
import us.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    public static final k f54055i = new k();

    private k() {
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void S1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f54039t.h2(runnable, true, true);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher Z1(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f54052d) {
            return m.b(this, str);
        }
        return super.Z1(i10, str);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.IO";
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        c.f54039t.h2(runnable, true, false);
    }
}
