package x4;

import av.c0;
import java.io.Closeable;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54368d;

    /* renamed from: e  reason: collision with root package name */
    private final av.h f54369e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54370i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f54371o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f54372p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f54373q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f54374r;

    public q(c0 c0Var, av.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f54368d = c0Var;
        this.f54369e = hVar;
        this.f54370i = str;
        this.f54371o = closeable;
        this.f54372p = aVar;
    }

    private final void i() {
        if (!this.f54373q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54372p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54373q = true;
            BufferedSource bufferedSource = this.f54374r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f54371o;
            if (closeable != null) {
                k5.k.d(closeable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        i();
        BufferedSource bufferedSource = this.f54374r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = av.x.d(n().q(this.f54368d));
        this.f54374r = d10;
        return d10;
    }

    public final String m() {
        return this.f54370i;
    }

    public av.h n() {
        return this.f54369e;
    }
}
