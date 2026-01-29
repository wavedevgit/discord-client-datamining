package x4;

import iu.c0;
import java.io.Closeable;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends r {

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53191d;

    /* renamed from: e  reason: collision with root package name */
    private final iu.h f53192e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53193i;

    /* renamed from: o  reason: collision with root package name */
    private final Closeable f53194o;

    /* renamed from: p  reason: collision with root package name */
    private final r.a f53195p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53196q;

    /* renamed from: r  reason: collision with root package name */
    private BufferedSource f53197r;

    public q(c0 c0Var, iu.h hVar, String str, Closeable closeable, r.a aVar) {
        super(null);
        this.f53191d = c0Var;
        this.f53192e = hVar;
        this.f53193i = str;
        this.f53194o = closeable;
        this.f53195p = aVar;
    }

    private final void l() {
        if (!this.f53196q) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53195p;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53196q = true;
            BufferedSource bufferedSource = this.f53197r;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            Closeable closeable = this.f53194o;
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
        BufferedSource bufferedSource = this.f53197r;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        BufferedSource d10 = iu.x.d(x().q(this.f53191d));
        this.f53197r = d10;
        return d10;
    }

    public final String n() {
        return this.f53193i;
    }

    public iu.h x() {
        return this.f53192e;
    }
}
