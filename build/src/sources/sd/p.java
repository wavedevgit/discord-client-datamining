package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49053o;

    /* renamed from: p  reason: collision with root package name */
    private final Format f49054p;

    /* renamed from: q  reason: collision with root package name */
    private long f49055q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f49056r;

    public p(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, int i11, Format format2) {
        super(dataSource, aVar, format, i10, obj, j10, j11, -9223372036854775807L, -9223372036854775807L, j12);
        this.f49053o = i11;
        this.f49054p = format2;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        c j10 = j();
        j10.b(0L);
        b0 c10 = j10.c(0, this.f49053o);
        c10.b(this.f49054p);
        try {
            long b10 = this.f49016i.b(this.f49009b.e(this.f49055q));
            if (b10 != -1) {
                b10 += this.f49055q;
            }
            tc.e eVar = new tc.e(this.f49016i, this.f49055q, b10);
            for (int i10 = 0; i10 != -1; i10 = c10.a(eVar, Integer.MAX_VALUE, true)) {
                this.f49055q += i10;
            }
            c10.d(this.f49014g, 1, (int) this.f49055q, 0, null);
            le.o.a(this.f49016i);
            this.f49056r = true;
        } catch (Throwable th2) {
            le.o.a(this.f49016i);
            throw th2;
        }
    }

    @Override // sd.n
    public boolean h() {
        return this.f49056r;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
    }
}
