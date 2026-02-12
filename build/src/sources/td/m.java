package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f48746j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f48747k;

    /* renamed from: l  reason: collision with root package name */
    private long f48748l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f48749m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f48746j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        if (this.f48748l == 0) {
            this.f48746j.b(this.f48747k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48708b.e(this.f48748l);
            a0 a0Var = this.f48715i;
            uc.e eVar = new uc.e(a0Var, e10.f13989g, a0Var.b(e10));
            while (!this.f48749m && this.f48746j.a(eVar)) {
            }
            this.f48748l = eVar.getPosition() - this.f48708b.f13989g;
        } finally {
            me.o.a(this.f48715i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
        this.f48749m = true;
    }

    public void g(g.b bVar) {
        this.f48747k = bVar;
    }
}
