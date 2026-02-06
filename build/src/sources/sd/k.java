package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49916o;

    /* renamed from: p  reason: collision with root package name */
    private final long f49917p;

    /* renamed from: q  reason: collision with root package name */
    private final g f49918q;

    /* renamed from: r  reason: collision with root package name */
    private long f49919r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f49920s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f49921t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f49916o = i11;
        this.f49917p = j15;
        this.f49918q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void b() {
        long j10;
        if (this.f49919r == 0) {
            c j11 = j();
            j11.b(this.f49917p);
            g gVar = this.f49918q;
            g.b l10 = l(j11);
            long j12 = this.f49858k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f49917p;
            }
            long j14 = this.f49859l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f49917p;
            }
            gVar.e(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49886b.e(this.f49919r);
            a0 a0Var = this.f49893i;
            tc.e eVar = new tc.e(a0Var, e10.f13271g, a0Var.b(e10));
            while (!this.f49920s && this.f49918q.a(eVar)) {
            }
            this.f49919r = eVar.getPosition() - this.f49886b.f13271g;
            le.o.a(this.f49893i);
            this.f49921t = !this.f49920s;
        } catch (Throwable th2) {
            le.o.a(this.f49893i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f49920s = true;
    }

    @Override // sd.n
    public long g() {
        return this.f49928j + this.f49916o;
    }

    @Override // sd.n
    public boolean h() {
        return this.f49921t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
