package x4;

import java.io.Closeable;
import okio.BufferedSource;
import qu.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54544d;

    /* renamed from: e  reason: collision with root package name */
    private final qu.h f54545e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54546i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f54547o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f54548p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f54549q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f54550r;

    public q(c0 c0Var, qu.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f54544d = c0Var;
        this.f54545e = hVar;
        this.f54546i = str;
        this.f54547o = closeable;
        this.f54548p = aVar;
    }

    private final void k() {
        if (!this.f54549q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54548p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54549q = true;
            BufferedSource bufferedSource = this.f54550r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f54547o;
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
        BufferedSource bufferedSource = this.f54550r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = qu.x.d(n().q(this.f54544d));
        this.f54550r = d10;
        return d10;
    }

    public final String m() {
        return this.f54546i;
    }

    public qu.h n() {
        return this.f54545e;
    }
}
