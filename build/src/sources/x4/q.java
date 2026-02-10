package x4;

import java.io.Closeable;
import okio.BufferedSource;
import ru.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54636d;

    /* renamed from: e  reason: collision with root package name */
    private final ru.h f54637e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54638i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f54639o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f54640p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f54641q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f54642r;

    public q(c0 c0Var, ru.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f54636d = c0Var;
        this.f54637e = hVar;
        this.f54638i = str;
        this.f54639o = closeable;
        this.f54640p = aVar;
    }

    private final void k() {
        if (!this.f54641q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54640p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54641q = true;
            BufferedSource bufferedSource = this.f54642r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f54639o;
            if (closeable != null) {
                k5.k.d(closeable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource g() {
        k();
        BufferedSource bufferedSource = this.f54642r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = ru.x.d(n().q(this.f54636d));
        this.f54642r = d10;
        return d10;
    }

    public final String m() {
        return this.f54638i;
    }

    public ru.h n() {
        return this.f54637e;
    }
}
