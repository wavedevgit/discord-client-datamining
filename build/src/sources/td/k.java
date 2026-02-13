package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49306o;

    /* renamed from: p  reason: collision with root package name */
    private final long f49307p;

    /* renamed from: q  reason: collision with root package name */
    private final g f49308q;

    /* renamed from: r  reason: collision with root package name */
    private long f49309r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f49310s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f49311t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f49306o = i11;
        this.f49307p = j15;
        this.f49308q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void a() {
        long j10;
        if (this.f49309r == 0) {
            c j11 = j();
            j11.b(this.f49307p);
            g gVar = this.f49308q;
            g.b l10 = l(j11);
            long j12 = this.f49248k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f49307p;
            }
            long j14 = this.f49249l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f49307p;
            }
            gVar.b(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49276b.e(this.f49309r);
            a0 a0Var = this.f49283i;
            uc.e eVar = new uc.e(a0Var, e10.f13989g, a0Var.b(e10));
            while (!this.f49310s && this.f49308q.a(eVar)) {
            }
            this.f49309r = eVar.getPosition() - this.f49276b.f13989g;
            me.o.a(this.f49283i);
            this.f49311t = !this.f49310s;
        } catch (Throwable th2) {
            me.o.a(this.f49283i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public final void c() {
        this.f49310s = true;
    }

    @Override // td.n
    public long g() {
        return this.f49318j + this.f49306o;
    }

    @Override // td.n
    public boolean h() {
        return this.f49311t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
