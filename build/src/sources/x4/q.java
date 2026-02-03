package x4;

import java.io.Closeable;
import lu.c0;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53136d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.h f53137e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53138i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53139o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53140p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53141q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53142r;

    public q(c0 c0Var, lu.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53136d = c0Var;
        this.f53137e = hVar;
        this.f53138i = str;
        this.f53139o = closeable;
        this.f53140p = aVar;
    }

    private final void l() {
        if (!this.f53141q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53140p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53141q = true;
            BufferedSource bufferedSource = this.f53142r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53139o;
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
        BufferedSource bufferedSource = this.f53142r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = lu.x.d(x().q(this.f53136d));
        this.f53142r = d10;
        return d10;
    }

    public final String n() {
        return this.f53138i;
    }

    public lu.h x() {
        return this.f53137e;
    }
}
