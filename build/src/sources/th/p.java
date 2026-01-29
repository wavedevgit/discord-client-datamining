package th;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f49566d;

    /* renamed from: e  reason: collision with root package name */
    private final long f49567e;

    /* renamed from: i  reason: collision with root package name */
    private final long f49568i;

    public p(o oVar, long j10, long j11) {
        this.f49566d = oVar;
        long n10 = n(j10);
        this.f49567e = n10;
        this.f49568i = n(n10 + j11);
    }

    private final long n(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f49566d.a()) {
            return this.f49566d.a();
        }
        return j10;
    }

    @Override // th.o
    public final long a() {
        return this.f49568i - this.f49567e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // th.o
    public final InputStream h(long j10, long j11) {
        long n10 = n(this.f49567e);
        return this.f49566d.h(n10, n(j11 + n10) - n10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
