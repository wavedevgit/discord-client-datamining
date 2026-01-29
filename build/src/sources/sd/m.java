package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f48977j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f48978k;

    /* renamed from: l  reason: collision with root package name */
    private long f48979l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f48980m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f48977j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        if (this.f48979l == 0) {
            this.f48977j.e(this.f48978k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48939b.e(this.f48979l);
            a0 a0Var = this.f48946i;
            tc.e eVar = new tc.e(a0Var, e10.f14352g, a0Var.b(e10));
            while (!this.f48980m && this.f48977j.a(eVar)) {
            }
            this.f48979l = eVar.getPosition() - this.f48939b.f14352g;
        } finally {
            le.o.a(this.f48946i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.f48980m = true;
    }

    public void g(g.b bVar) {
        this.f48978k = bVar;
    }
}
