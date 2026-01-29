package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f48969o;

    /* renamed from: p  reason: collision with root package name */
    private final long f48970p;

    /* renamed from: q  reason: collision with root package name */
    private final g f48971q;

    /* renamed from: r  reason: collision with root package name */
    private long f48972r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f48973s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f48974t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f48969o = i11;
        this.f48970p = j15;
        this.f48971q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        long j10;
        if (this.f48972r == 0) {
            c j11 = j();
            j11.b(this.f48970p);
            g gVar = this.f48971q;
            g.b l10 = l(j11);
            long j12 = this.f48911k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f48970p;
            }
            long j14 = this.f48912l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f48970p;
            }
            gVar.e(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48939b.e(this.f48972r);
            a0 a0Var = this.f48946i;
            tc.e eVar = new tc.e(a0Var, e10.f14352g, a0Var.b(e10));
            while (!this.f48973s && this.f48971q.a(eVar)) {
            }
            this.f48972r = eVar.getPosition() - this.f48939b.f14352g;
            le.o.a(this.f48946i);
            this.f48974t = !this.f48973s;
        } catch (Throwable th2) {
            le.o.a(this.f48946i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
        this.f48973s = true;
    }

    @Override // sd.n
    public long g() {
        return this.f48981j + this.f48969o;
    }

    @Override // sd.n
    public boolean h() {
        return this.f48974t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
