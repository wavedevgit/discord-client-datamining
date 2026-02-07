package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f49972j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f49973k;

    /* renamed from: l  reason: collision with root package name */
    private long f49974l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f49975m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f49972j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void b() {
        if (this.f49974l == 0) {
            this.f49972j.e(this.f49973k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49934b.e(this.f49974l);
            a0 a0Var = this.f49941i;
            tc.e eVar = new tc.e(a0Var, e10.f13271g, a0Var.b(e10));
            while (!this.f49975m && this.f49972j.a(eVar)) {
            }
            this.f49974l = eVar.getPosition() - this.f49934b.f13271g;
        } finally {
            le.o.a(this.f49941i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
        this.f49975m = true;
    }

    public void g(g.b bVar) {
        this.f49973k = bVar;
    }
}
