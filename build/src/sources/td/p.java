package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f50819o;

    /* renamed from: p  reason: collision with root package name */
    private final Format f50820p;

    /* renamed from: q  reason: collision with root package name */
    private long f50821q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f50822r;

    public p(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, int i11, Format format2) {
        super(dataSource, aVar, format, i10, obj, j10, j11, -9223372036854775807L, -9223372036854775807L, j12);
        this.f50819o = i11;
        this.f50820p = format2;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        c j10 = j();
        j10.b(0L);
        b0 c10 = j10.c(0, this.f50819o);
        c10.c(this.f50820p);
        try {
            long b10 = this.f50782i.b(this.f50775b.e(this.f50821q));
            if (b10 != -1) {
                b10 += this.f50821q;
            }
            uc.e eVar = new uc.e(this.f50782i, this.f50821q, b10);
            for (int i10 = 0; i10 != -1; i10 = c10.f(eVar, Integer.MAX_VALUE, true)) {
                this.f50821q += i10;
            }
            c10.a(this.f50780g, 1, (int) this.f50821q, 0, null);
            me.o.a(this.f50782i);
            this.f50822r = true;
        } catch (Throwable th2) {
            me.o.a(this.f50782i);
            throw th2;
        }
    }

    @Override // td.n
    public boolean h() {
        return this.f50822r;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
    }
}
