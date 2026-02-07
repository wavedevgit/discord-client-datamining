package xh;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f54721d;

    /* renamed from: e  reason: collision with root package name */
    private final long f54722e;

    /* renamed from: i  reason: collision with root package name */
    private final long f54723i;

    public p(o oVar, long j10, long j11) {
        this.f54721d = oVar;
        long m10 = m(j10);
        this.f54722e = m10;
        this.f54723i = m(m10 + j11);
    }

    private final long m(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f54721d.a()) {
            return this.f54721d.a();
        }
        return j10;
    }

    @Override // xh.o
    public final long a() {
        return this.f54723i - this.f54722e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // xh.o
    public final InputStream g(long j10, long j11) {
        long m10 = m(this.f54722e);
        return this.f54721d.g(m10, m(j11 + m10) - m10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
