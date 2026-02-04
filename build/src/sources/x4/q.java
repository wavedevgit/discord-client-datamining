package x4;

import java.io.Closeable;
import lu.c0;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53133d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.h f53134e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53135i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53136o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53137p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53138q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53139r;

    public q(c0 c0Var, lu.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53133d = c0Var;
        this.f53134e = hVar;
        this.f53135i = str;
        this.f53136o = closeable;
        this.f53137p = aVar;
    }

    private final void l() {
        if (!this.f53138q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53137p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53138q = true;
            BufferedSource bufferedSource = this.f53139r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53136o;
            if (closeable != null) {
                k5.k.d(closeable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        l();
        BufferedSource bufferedSource = this.f53139r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = lu.x.d(x().q(this.f53133d));
        this.f53139r = d10;
        return d10;
    }

    public final String n() {
        return this.f53135i;
    }

    public lu.h x() {
        return this.f53134e;
    }
}
