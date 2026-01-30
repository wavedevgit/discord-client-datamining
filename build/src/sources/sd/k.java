package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f48985o;

    /* renamed from: p  reason: collision with root package name */
    private final long f48986p;

    /* renamed from: q  reason: collision with root package name */
    private final g f48987q;

    /* renamed from: r  reason: collision with root package name */
    private long f48988r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f48989s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f48990t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f48985o = i11;
        this.f48986p = j15;
        this.f48987q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        long j10;
        if (this.f48988r == 0) {
            c j11 = j();
            j11.b(this.f48986p);
            g gVar = this.f48987q;
            g.b l10 = l(j11);
            long j12 = this.f48927k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f48986p;
            }
            long j14 = this.f48928l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f48986p;
            }
            gVar.e(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48955b.e(this.f48988r);
            a0 a0Var = this.f48962i;
            tc.e eVar = new tc.e(a0Var, e10.f14352g, a0Var.b(e10));
            while (!this.f48989s && this.f48987q.a(eVar)) {
            }
            this.f48988r = eVar.getPosition() - this.f48955b.f14352g;
            le.o.a(this.f48962i);
            this.f48990t = !this.f48989s;
        } catch (Throwable th2) {
            le.o.a(this.f48962i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
        this.f48989s = true;
    }

    @Override // sd.n
    public long g() {
        return this.f48997j + this.f48985o;
    }

    @Override // sd.n
    public boolean h() {
        return this.f48990t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
