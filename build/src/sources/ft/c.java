package ft;

import dt.m;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends f {

    /* renamed from: t  reason: collision with root package name */
    public static final c f24365t = new c();

    private c() {
        super(j.f24377c, j.f24378d, j.f24379e, j.f24375a);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher B1(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f24377c) {
            return m.b(this, str);
        }
        return super.B1(i10, str);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        throw new UnsupportedOperationException("Dispatchers.Default cannot be closed");
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "Dispatchers.Default";
    }
}
