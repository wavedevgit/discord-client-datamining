package x4;

import iu.c0;
import java.io.Closeable;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53207d;

    /* renamed from: e  reason: collision with root package name */
    private final iu.h f53208e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53209i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53210o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53211p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53212q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53213r;

    public q(c0 c0Var, iu.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53207d = c0Var;
        this.f53208e = hVar;
        this.f53209i = str;
        this.f53210o = closeable;
        this.f53211p = aVar;
    }

    private final void l() {
        if (!this.f53212q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53211p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53212q = true;
            BufferedSource bufferedSource = this.f53213r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53210o;
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
        BufferedSource bufferedSource = this.f53213r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = iu.x.d(x().q(this.f53207d));
        this.f53213r = d10;
        return d10;
    }

    public final String n() {
        return this.f53209i;
    }

    public iu.h x() {
        return this.f53208e;
    }
}
