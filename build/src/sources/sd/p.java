package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49978o;

    /* renamed from: p  reason: collision with root package name */
    private final Format f49979p;

    /* renamed from: q  reason: collision with root package name */
    private long f49980q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f49981r;

    public p(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, int i11, Format format2) {
        super(dataSource, aVar, format, i10, obj, j10, j11, -9223372036854775807L, -9223372036854775807L, j12);
        this.f49978o = i11;
        this.f49979p = format2;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void b() {
        c j10 = j();
        j10.b(0L);
        b0 c10 = j10.c(0, this.f49978o);
        c10.b(this.f49979p);
        try {
            long b10 = this.f49941i.b(this.f49934b.e(this.f49980q));
            if (b10 != -1) {
                b10 += this.f49980q;
            }
            tc.e eVar = new tc.e(this.f49941i, this.f49980q, b10);
            for (int i10 = 0; i10 != -1; i10 = c10.a(eVar, Integer.MAX_VALUE, true)) {
                this.f49980q += i10;
            }
            c10.d(this.f49939g, 1, (int) this.f49980q, 0, null);
            le.o.a(this.f49941i);
            this.f49981r = true;
        } catch (Throwable th2) {
            le.o.a(this.f49941i);
            throw th2;
        }
    }

    @Override // sd.n
    public boolean h() {
        return this.f49981r;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
    }
}
