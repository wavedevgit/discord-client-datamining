package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f48983o;

    /* renamed from: p  reason: collision with root package name */
    private final Format f48984p;

    /* renamed from: q  reason: collision with root package name */
    private long f48985q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f48986r;

    public p(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, int i11, Format format2) {
        super(dataSource, aVar, format, i10, obj, j10, j11, -9223372036854775807L, -9223372036854775807L, j12);
        this.f48983o = i11;
        this.f48984p = format2;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        c j10 = j();
        j10.b(0L);
        b0 c10 = j10.c(0, this.f48983o);
        c10.b(this.f48984p);
        try {
            long b10 = this.f48946i.b(this.f48939b.e(this.f48985q));
            if (b10 != -1) {
                b10 += this.f48985q;
            }
            tc.e eVar = new tc.e(this.f48946i, this.f48985q, b10);
            for (int i10 = 0; i10 != -1; i10 = c10.a(eVar, Integer.MAX_VALUE, true)) {
                this.f48985q += i10;
            }
            c10.d(this.f48944g, 1, (int) this.f48985q, 0, null);
            le.o.a(this.f48946i);
            this.f48986r = true;
        } catch (Throwable th2) {
            le.o.a(this.f48946i);
            throw th2;
        }
    }

    @Override // sd.n
    public boolean h() {
        return this.f48986r;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
    }
}
