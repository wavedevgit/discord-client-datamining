package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import le.a0;
import sd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f49454j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f49455k;

    /* renamed from: l  reason: collision with root package name */
    private long f49456l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f49457m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f49454j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        if (this.f49456l == 0) {
            this.f49454j.e(this.f49455k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49416b.e(this.f49456l);
            a0 a0Var = this.f49423i;
            tc.e eVar = new tc.e(a0Var, e10.f12949g, a0Var.b(e10));
            while (!this.f49457m && this.f49454j.a(eVar)) {
            }
            this.f49456l = eVar.getPosition() - this.f49416b.f12949g;
        } finally {
            le.o.a(this.f49423i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.f49457m = true;
    }

    public void g(g.b bVar) {
        this.f49455k = bVar;
    }
}
