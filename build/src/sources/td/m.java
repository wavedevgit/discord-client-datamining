package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import me.a0;
import td.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends f {

    /* renamed from: j  reason: collision with root package name */
    private final g f50813j;

    /* renamed from: k  reason: collision with root package name */
    private g.b f50814k;

    /* renamed from: l  reason: collision with root package name */
    private long f50815l;

    /* renamed from: m  reason: collision with root package name */
    private volatile boolean f50816m;

    public m(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, g gVar) {
        super(dataSource, aVar, 2, format, i10, obj, -9223372036854775807L, -9223372036854775807L);
        this.f50813j = gVar;
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void a() {
        if (this.f50815l == 0) {
            this.f50813j.b(this.f50814k, -9223372036854775807L, -9223372036854775807L);
        }
        try {
            com.google.android.exoplayer2.upstream.a e10 = this.f50775b.e(this.f50815l);
            a0 a0Var = this.f50782i;
            uc.e eVar = new uc.e(a0Var, e10.f13411g, a0Var.b(e10));
            while (!this.f50816m && this.f50813j.a(eVar)) {
            }
            this.f50815l = eVar.getPosition() - this.f50775b.f13411g;
        } finally {
            me.o.a(this.f50782i);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.e
    public void c() {
        this.f50816m = true;
    }

    public void g(g.b bVar) {
        this.f50814k = bVar;
    }
}
