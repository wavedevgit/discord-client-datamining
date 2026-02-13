package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49320o;

    /* renamed from: p  reason: collision with root package name */
    private final Format f49321p;

    /* renamed from: q  reason: collision with root package name */
    private long f49322q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f49323r;

    public p(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, int i11, Format format2) {
        super(dataSource, aVar, format, i10, obj, j10, j11, -9223372036854775807L, -9223372036854775807L, j12);
        this.f49320o = i11;
        this.f49321p = format2;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        c j10 = j();
        j10.b(0L);
        b0 c10 = j10.c(0, this.f49320o);
        c10.c(this.f49321p);
        try {
            long b10 = this.f49283i.b(this.f49276b.e(this.f49322q));
            if (b10 != -1) {
                b10 += this.f49322q;
            }
            uc.e eVar = new uc.e(this.f49283i, this.f49322q, b10);
            for (int i10 = 0; i10 != -1; i10 = c10.f(eVar, Integer.MAX_VALUE, true)) {
                this.f49322q += i10;
            }
            c10.a(this.f49281g, 1, (int) this.f49322q, 0, null);
            me.o.a(this.f49283i);
            this.f49323r = true;
        } catch (Throwable th2) {
            me.o.a(this.f49283i);
            throw th2;
        }
    }

    @Override // td.n
    public boolean h() {
        return this.f49323r;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
    }
}
