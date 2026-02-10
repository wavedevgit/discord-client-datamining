package ws;

import kotlinx.coroutines.CoroutineDispatcher;
import us.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends f {

    /* renamed from: t  reason: collision with root package name */
    public static final c f54039t = new c();

    private c() {
        super(j.f54051c, j.f54052d, j.f54053e, j.f54049a);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher Z1(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f54051c) {
            return m.b(this, str);
        }
        return super.Z1(i10, str);
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
