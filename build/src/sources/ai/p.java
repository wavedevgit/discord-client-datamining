package ai;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends o {

    /* renamed from: d  reason: collision with root package name */
    private final o f815d;

    /* renamed from: e  reason: collision with root package name */
    private final long f816e;

    /* renamed from: i  reason: collision with root package name */
    private final long f817i;

    public p(o oVar, long j10, long j11) {
        this.f815d = oVar;
        long m10 = m(j10);
        this.f816e = m10;
        this.f817i = m(m10 + j11);
    }

    private final long m(long j10) {
        if (j10 < 0) {
            return 0L;
        }
        if (j10 > this.f815d.a()) {
            return this.f815d.a();
        }
        return j10;
    }

    @Override // ai.o
    public final long a() {
        return this.f817i - this.f816e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ai.o
    public final InputStream h(long j10, long j11) {
        long m10 = m(this.f816e);
        return this.f815d.h(m10, m(j11 + m10) - m10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
    }
}
