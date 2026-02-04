package th;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f50062d;

    /* renamed from: e  reason: collision with root package name */
    private final long f50063e;

    /* renamed from: i  reason: collision with root package name */
    private final long f50064i;

    public p(o oVar, long j10, long j11) {
        this.f50062d = oVar;
        long n10 = n(j10);
        this.f50063e = n10;
        this.f50064i = n(n10 + j11);
    }

    private final long n(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f50062d.a()) {
            return this.f50062d.a();
        }
        return j10;
    }

    @Override // th.o
    public final long a() {
        return this.f50064i - this.f50063e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // th.o
    public final InputStream h(long j10, long j11) {
        long n10 = n(this.f50063e);
        return this.f50062d.h(n10, n(j11 + n10) - n10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
