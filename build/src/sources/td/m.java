package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f49314j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f49315k;

    /* renamed from: l  reason: collision with root package name */
    private long f49316l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f49317m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f49314j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        if (this.f49316l == 0) {
            this.f49314j.b(this.f49315k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f49276b.e(this.f49316l);
            a0 a0Var = this.f49283i;
            uc.e eVar = new uc.e(a0Var, e10.f13989g, a0Var.b(e10));
            while (!this.f49317m && this.f49314j.a(eVar)) {
            }
            this.f49316l = eVar.getPosition() - this.f49276b.f13989g;
        } finally {
            me.o.a(this.f49283i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
        this.f49317m = true;
    }

    public void g(g.b bVar) {
        this.f49315k = bVar;
    }
}
