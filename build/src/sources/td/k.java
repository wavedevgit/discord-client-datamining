package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f48738o;

    /* renamed from: p  reason: collision with root package name */
    private final long f48739p;

    /* renamed from: q  reason: collision with root package name */
    private final g f48740q;

    /* renamed from: r  reason: collision with root package name */
    private long f48741r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f48742s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f48743t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f48738o = i11;
        this.f48739p = j15;
        this.f48740q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        long j10;
        if (this.f48741r == 0) {
            c j11 = j();
            j11.b(this.f48739p);
            g gVar = this.f48740q;
            g.b l10 = l(j11);
            long j12 = this.f48680k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f48739p;
            }
            long j14 = this.f48681l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f48739p;
            }
            gVar.b(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48708b.e(this.f48741r);
            a0 a0Var = this.f48715i;
            uc.e eVar = new uc.e(a0Var, e10.f13989g, a0Var.b(e10));
            while (!this.f48742s && this.f48740q.a(eVar)) {
            }
            this.f48741r = eVar.getPosition() - this.f48708b.f13989g;
            me.o.a(this.f48715i);
            this.f48743t = !this.f48742s;
        } catch (Throwable th2) {
            me.o.a(this.f48715i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f48742s = true;
    }

    @Override // td.n
    public long g() {
        return this.f48750j + this.f48738o;
    }

    @Override // td.n
    public boolean h() {
        return this.f48743t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
