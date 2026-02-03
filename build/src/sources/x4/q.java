package x4;

import java.io.Closeable;
import ju.c0;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53415d;

    /* renamed from: e  reason: collision with root package name */
    private final ju.h f53416e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53417i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53418o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53419p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53420q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53421r;

    public q(c0 c0Var, ju.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53415d = c0Var;
        this.f53416e = hVar;
        this.f53417i = str;
        this.f53418o = closeable;
        this.f53419p = aVar;
    }

    private final void l() {
        if (!this.f53420q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53419p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53420q = true;
            BufferedSource bufferedSource = this.f53421r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53418o;
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
        BufferedSource bufferedSource = this.f53421r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = ju.x.d(x().q(this.f53415d));
        this.f53421r = d10;
        return d10;
    }

    public final String n() {
        return this.f53417i;
    }

    public ju.h x() {
        return this.f53416e;
    }
}
