package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k extends a {

    /* renamed from: o  reason: collision with root package name */
    private final int f49449o;

    /* renamed from: p  reason: collision with root package name */
    private final long f49450p;

    /* renamed from: q  reason: collision with root package name */
    private final g f49451q;

    /* renamed from: r  reason: collision with root package name */
    private long f49452r;

    /* renamed from: s  reason: collision with root package name */
    private volatile boolean f49453s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f49454t;

    public k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12, long j13, long j14, int i11, long j15, g gVar) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12, j13, j14);
        this.f49449o = i11;
        this.f49450p = j15;
        this.f49451q = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void b() {
        long j10;
        if (this.f49452r == 0) {
            c j11 = j();
            j11.b(this.f49450p);
            g gVar = this.f49451q;
            g.b l10 = l(j11);
            long j12 = this.f49391k;
            long j13 = -9223372036854775807L;
            if (j12 == -9223372036854775807L) {
                j10 = -9223372036854775807L;
            } else {
                j10 = j12 - this.f49450p;
            }
            long j14 = this.f49392l;
            if (j14 != -9223372036854775807L) {
                j13 = j14 - this.f49450p;
            }
            gVar.e(l10, j10, j13);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49419b.e(this.f49452r);
            a0 a0Var = this.f49426i;
            tc.e eVar = new tc.e(a0Var, e10.f12949g, a0Var.b(e10));
            while (!this.f49453s && this.f49451q.a(eVar)) {
            }
            this.f49452r = eVar.getPosition() - this.f49419b.f12949g;
            le.o.a(this.f49426i);
            this.f49454t = !this.f49453s;
        } catch (Throwable th2) {
            le.o.a(this.f49426i);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public final void c() {
        this.f49453s = true;
    }

    @Override // sd.n
    public long g() {
        return this.f49461j + this.f49449o;
    }

    @Override // sd.n
    public boolean h() {
        return this.f49454t;
    }

    protected g.b l(c cVar) {
        return cVar;
    }
}
