package x4;

import java.io.Closeable;
import okio.BufferedSource;
import ou.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53677d;

    /* renamed from: e  reason: collision with root package name */
    private final ou.h f53678e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53679i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53680o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53681p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53682q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53683r;

    public q(c0 c0Var, ou.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53677d = c0Var;
        this.f53678e = hVar;
        this.f53679i = str;
        this.f53680o = closeable;
        this.f53681p = aVar;
    }

    private final void k() {
        if (!this.f53682q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53681p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53682q = true;
            BufferedSource bufferedSource = this.f53683r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53680o;
            if (closeable != null) {
                k5.k.d(closeable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        k();
        BufferedSource bufferedSource = this.f53683r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = ou.x.d(o().q(this.f53677d));
        this.f53683r = d10;
        return d10;
    }

    public final String m() {
        return this.f53679i;
    }

    public ou.h o() {
        return this.f53678e;
    }
}
