package xh;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f54673d;

    /* renamed from: e  reason: collision with root package name */
    private final long f54674e;

    /* renamed from: i  reason: collision with root package name */
    private final long f54675i;

    public p(o oVar, long j10, long j11) {
        this.f54673d = oVar;
        long m10 = m(j10);
        this.f54674e = m10;
        this.f54675i = m(m10 + j11);
    }

    private final long m(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f54673d.a()) {
            return this.f54673d.a();
        }
        return j10;
    }

    @Override // xh.o
    public final long a() {
        return this.f54675i - this.f54674e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // xh.o
    public final InputStream g(long j10, long j11) {
        long m10 = m(this.f54674e);
        return this.f54673d.g(m10, m(j11 + m10) - m10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
