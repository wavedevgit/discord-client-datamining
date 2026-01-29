package a0;

import a0.n0;
import android.os.SystemClock;
import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g0 implements i1.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f54a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55b;

    /* renamed from: c  reason: collision with root package name */
    private final long f56c;

    /* renamed from: d  reason: collision with root package name */
    private final Throwable f57d;

    public g0(long j10, int i10, Throwable th2) {
        this.f56c = SystemClock.elapsedRealtime() - j10;
        this.f55b = i10;
        if (th2 instanceof n0.b) {
            this.f54a = 2;
            this.f57d = th2;
        } else if (th2 instanceof x.w0) {
            Throwable cause = th2.getCause();
            th2 = cause != null ? cause : th2;
            this.f57d = th2;
            if (th2 instanceof x.r) {
                this.f54a = 2;
            } else if (th2 instanceof IllegalArgumentException) {
                this.f54a = 1;
            } else {
                this.f54a = 0;
            }
        } else {
            this.f54a = 0;
            this.f57d = th2;
        }
    }

    @Override // x.i1.b
    public int a() {
        return this.f54a;
    }

    @Override // x.i1.b
    public Throwable b() {
        return this.f57d;
    }

    @Override // x.i1.b
    public long c() {
        return this.f56c;
    }
}
