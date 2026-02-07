package vs;

import kotlinx.coroutines.CoroutineDispatcher;
import ts.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends f {

    /* renamed from: t  reason: collision with root package name */
    public static final c f53012t = new c();

    private c() {
        super(j.f53024c, j.f53025d, j.f53026e, j.f53022a);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher a2(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f53024c) {
            return m.b(this, str);
        }
        return super.a2(i10, str);
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
