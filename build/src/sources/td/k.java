package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f48737o;

    /* renamed from: p  reason: collision with root package name */
    private final long f48738p;

    /* renamed from: q  reason: collision with root package name */
    private final g f48739q;

    /* renamed from: r  reason: collision with root package name */
    private long f48740r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f48741s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f48742t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f48737o = i11;
        this.f48738p = j15;
        this.f48739q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        long j10;
        if (this.f48740r == 0) {
            c j11 = j();
            j11.b(this.f48738p);
            g gVar = this.f48739q;
            g.b l10 = l(j11);
            long j12 = this.f48679k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f48738p;
            }
            long j14 = this.f48680l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f48738p;
            }
            gVar.b(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48707b.e(this.f48740r);
            a0 a0Var = this.f48714i;
            uc.e eVar = new uc.e(a0Var, e10.f13988g, a0Var.b(e10));
            while (!this.f48741s && this.f48739q.a(eVar)) {
            }
            this.f48740r = eVar.getPosition() - this.f48707b.f13988g;
            me.o.a(this.f48714i);
            this.f48742t = !this.f48741s;
        } catch (Throwable th2) {
            me.o.a(this.f48714i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f48741s = true;
    }

    @Override // td.n
    public long g() {
        return this.f48749j + this.f48737o;
    }

    @Override // td.n
    public boolean h() {
        return this.f48742t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
