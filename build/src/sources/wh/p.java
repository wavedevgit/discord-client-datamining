package wh;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f53086d;

    /* renamed from: e  reason: collision with root package name */
    private final long f53087e;

    /* renamed from: i  reason: collision with root package name */
    private final long f53088i;

    public p(o oVar, long j10, long j11) {
        this.f53086d = oVar;
        long m10 = m(j10);
        this.f53087e = m10;
        this.f53088i = m(m10 + j11);
    }

    private final long m(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f53086d.a()) {
            return this.f53086d.a();
        }
        return j10;
    }

    @Override // wh.o
    public final long a() {
        return this.f53088i - this.f53087e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // wh.o
    public final InputStream h(long j10, long j11) {
        long m10 = m(this.f53087e);
        return this.f53086d.h(m10, m(j11 + m10) - m10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
