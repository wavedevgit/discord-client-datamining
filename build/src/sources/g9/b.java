package g9;

import com.facebook.drawee.drawable.c0;
import com.facebook.imagepipeline.image.ImageInfo;
import java.io.Closeable;
import z9.b;
import z9.e;
import z9.i;
import z9.j;
import z9.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends z9.a implements Closeable, c0 {

    /* renamed from: i  reason: collision with root package name */
    private final v8.b f24875i;

    /* renamed from: o  reason: collision with root package name */
    private final j f24876o;

    /* renamed from: p  reason: collision with root package name */
    private final i f24877p;

    /* renamed from: q  reason: collision with root package name */
    private i f24878q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f24879r;

    public b(v8.b bVar, j jVar, i iVar) {
        this(bVar, jVar, iVar, true);
    }

    private void J(j jVar, e eVar) {
        jVar.H(eVar);
        this.f24877p.b(jVar, eVar);
        i iVar = this.f24878q;
        if (iVar != null) {
            iVar.b(jVar, eVar);
        }
    }

    private void P(j jVar, n nVar) {
        this.f24877p.a(jVar, nVar);
        i iVar = this.f24878q;
        if (iVar != null) {
            iVar.a(jVar, nVar);
        }
    }

    private void z(j jVar, long j10) {
        jVar.R(false);
        jVar.L(j10);
        P(jVar, n.f56055q);
    }

    public void C(j jVar, long j10) {
        jVar.R(true);
        jVar.Q(j10);
        P(jVar, n.f56054p);
    }

    public void I() {
        this.f24876o.w();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        I();
    }

    @Override // z9.a, z9.b
    public void g(String str, Throwable th2, b.a aVar) {
        long now = this.f24875i.now();
        j jVar = this.f24876o;
        jVar.F(aVar);
        jVar.z(now);
        jVar.B(str);
        jVar.E(th2);
        J(jVar, e.f55985s);
        z(jVar, now);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void m(boolean z10) {
        if (z10) {
            C(this.f24876o, this.f24875i.now());
        } else {
            z(this.f24876o, this.f24875i.now());
        }
    }

    @Override // z9.a, z9.b
    public void n(String str, b.a aVar) {
        long now = this.f24875i.now();
        j jVar = this.f24876o;
        jVar.F(aVar);
        jVar.B(str);
        J(jVar, e.f55987u);
        if (this.f24879r) {
            z(jVar, now);
        }
    }

    @Override // z9.a, z9.b
    public void p(String str, Object obj, b.a aVar) {
        long now = this.f24875i.now();
        j jVar = this.f24876o;
        jVar.x();
        jVar.D(now);
        jVar.B(str);
        jVar.y(obj);
        jVar.F(aVar);
        J(jVar, e.f55982p);
        if (this.f24879r) {
            C(jVar, now);
        }
    }

    @Override // z9.a, z9.b
    /* renamed from: s */
    public void a(String str, ImageInfo imageInfo, b.a aVar) {
        long now = this.f24875i.now();
        j jVar = this.f24876o;
        jVar.F(aVar);
        jVar.A(now);
        jVar.J(now);
        jVar.B(str);
        jVar.G(imageInfo);
        J(jVar, e.f55984r);
    }

    @Override // z9.a, z9.b
    /* renamed from: y */
    public void onIntermediateImageSet(String str, ImageInfo imageInfo) {
        long now = this.f24875i.now();
        j jVar = this.f24876o;
        jVar.C(now);
        jVar.B(str);
        jVar.G(imageInfo);
        J(jVar, e.f55983q);
    }

    public b(v8.b bVar, j jVar, i iVar, boolean z10) {
        this.f24878q = null;
        this.f24875i = bVar;
        this.f24876o = jVar;
        this.f24877p = iVar;
        this.f24879r = z10;
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
    }
}
