package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f48993j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f48994k;

    /* renamed from: l  reason: collision with root package name */
    private long f48995l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f48996m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f48993j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        if (this.f48995l == 0) {
            this.f48993j.e(this.f48994k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48955b.e(this.f48995l);
            a0 a0Var = this.f48962i;
            tc.e eVar = new tc.e(a0Var, e10.f14352g, a0Var.b(e10));
            while (!this.f48996m && this.f48993j.a(eVar)) {
            }
            this.f48995l = eVar.getPosition() - this.f48955b.f14352g;
        } finally {
            le.o.a(this.f48962i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.f48996m = true;
    }

    public void g(g.b bVar) {
        this.f48994k = bVar;
    }
}
