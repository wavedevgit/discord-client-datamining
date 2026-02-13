package x4;

import av.c0;
import java.io.Closeable;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54937d;

    /* renamed from: e  reason: collision with root package name */
    private final av.h f54938e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54939i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f54940o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f54941p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f54942q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f54943r;

    public q(c0 c0Var, av.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f54937d = c0Var;
        this.f54938e = hVar;
        this.f54939i = str;
        this.f54940o = closeable;
        this.f54941p = aVar;
    }

    private final void i() {
        if (!this.f54942q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54941p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54942q = true;
            BufferedSource bufferedSource = this.f54943r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f54940o;
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
        BufferedSource bufferedSource = this.f54943r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = av.x.d(n().q(this.f54937d));
        this.f54943r = d10;
        return d10;
    }

    public final String m() {
        return this.f54939i;
    }

    public av.h n() {
        return this.f54938e;
    }
}
