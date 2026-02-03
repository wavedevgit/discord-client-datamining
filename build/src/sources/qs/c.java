package qs;

import kotlinx.coroutines.CoroutineDispatcher;
import os.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends f {

    /* renamed from: t  reason: collision with root package name */
    public static final c f48172t = new c();

    private c() {
        super(j.f48184c, j.f48185d, j.f48186e, j.f48182a);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public CoroutineDispatcher b2(int i10, String str) {
        m.a(i10);
        if (i10 >= j.f48184c) {
            return m.b(this, str);
        }
        return super.b2(i10, str);
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
