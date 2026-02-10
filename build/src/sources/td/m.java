package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f48745j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f48746k;

    /* renamed from: l  reason: collision with root package name */
    private long f48747l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f48748m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f48745j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        if (this.f48747l == 0) {
            this.f48745j.b(this.f48746k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f48707b.e(this.f48747l);
            a0 a0Var = this.f48714i;
            uc.e eVar = new uc.e(a0Var, e10.f13988g, a0Var.b(e10));
            while (!this.f48748m && this.f48745j.a(eVar)) {
            }
            this.f48747l = eVar.getPosition() - this.f48707b.f13988g;
        } finally {
            me.o.a(this.f48714i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
        this.f48748m = true;
    }

    public void g(g.b bVar) {
        this.f48746k = bVar;
    }
}
