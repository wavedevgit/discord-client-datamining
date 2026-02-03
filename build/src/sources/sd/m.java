package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f49457j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f49458k;

    /* renamed from: l  reason: collision with root package name */
    private long f49459l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f49460m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f49457j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        if (this.f49459l == 0) {
            this.f49457j.e(this.f49458k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49419b.e(this.f49459l);
            a0 a0Var = this.f49426i;
            tc.e eVar = new tc.e(a0Var, e10.f12949g, a0Var.b(e10));
            while (!this.f49460m && this.f49457j.a(eVar)) {
            }
            this.f49459l = eVar.getPosition() - this.f49419b.f12949g;
        } finally {
            le.o.a(this.f49426i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.f49460m = true;
    }

    public void g(g.b bVar) {
        this.f49458k = bVar;
    }
}
