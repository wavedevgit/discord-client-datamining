package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f49603j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f49604k;

    /* renamed from: l  reason: collision with root package name */
    private long f49605l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f49606m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f49603j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        if (this.f49605l == 0) {
            this.f49603j.e(this.f49604k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49565b.e(this.f49605l);
            a0 a0Var = this.f49572i;
            tc.e eVar = new tc.e(a0Var, e10.f13334g, a0Var.b(e10));
            while (!this.f49606m && this.f49603j.a(eVar)) {
            }
            this.f49605l = eVar.getPosition() - this.f49565b.f13334g;
        } finally {
            le.o.a(this.f49572i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.f49606m = true;
    }

    public void g(g.b bVar) {
        this.f49604k = bVar;
    }
}
