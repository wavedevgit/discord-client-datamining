package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f50805o;

    /* renamed from: p  reason: collision with root package name */
    private final long f50806p;

    /* renamed from: q  reason: collision with root package name */
    private final g f50807q;

    /* renamed from: r  reason: collision with root package name */
    private long f50808r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f50809s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50810t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f50805o = i11;
        this.f50806p = j15;
        this.f50807q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        long j10;
        if (this.f50808r == 0) {
            c j11 = j();
            j11.b(this.f50806p);
            g gVar = this.f50807q;
            g.b l10 = l(j11);
            long j12 = this.f50747k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f50806p;
            }
            long j14 = this.f50748l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f50806p;
            }
            gVar.b(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f50775b.e(this.f50808r);
            a0 a0Var = this.f50782i;
            uc.e eVar = new uc.e(a0Var, e10.f13411g, a0Var.b(e10));
            while (!this.f50809s && this.f50807q.a(eVar)) {
            }
            this.f50808r = eVar.getPosition() - this.f50775b.f13411g;
            me.o.a(this.f50782i);
            this.f50810t = !this.f50809s;
        } catch (Throwable th2) {
            me.o.a(this.f50782i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f50809s = true;
    }

    @Override // td.n
    public long g() {
        return this.f50817j + this.f50805o;
    }

    @Override // td.n
    public boolean h() {
        return this.f50810t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
