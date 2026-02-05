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
    private final v8.b f24574i;

    /* renamed from: o  reason: collision with root package name */
    private final j f24575o;

    /* renamed from: p  reason: collision with root package name */
    private final i f24576p;

    /* renamed from: q  reason: collision with root package name */
    private i f24577q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f24578r;

    public b(v8.b bVar, j jVar, i iVar) {
        this(bVar, jVar, iVar, true);
    }

    private void C0(j jVar, n nVar) {
        this.f24576p.a(jVar, nVar);
        i iVar = this.f24577q;
        if (iVar != null) {
            iVar.a(jVar, nVar);
        }
    }

    private void L(j jVar, long j10) {
        jVar.R(false);
        jVar.L(j10);
        C0(jVar, n.f55276q);
    }

    private void W(j jVar, e eVar) {
        jVar.H(eVar);
        this.f24576p.b(jVar, eVar);
        i iVar = this.f24577q;
        if (iVar != null) {
            iVar.b(jVar, eVar);
        }
    }

    @Override // z9.a, z9.b
    /* renamed from: E */
    public void a(String str, ImageInfo imageInfo, b.a aVar) {
        long now = this.f24574i.now();
        j jVar = this.f24575o;
        jVar.F(aVar);
        jVar.A(now);
        jVar.J(now);
        jVar.B(str);
        jVar.G(imageInfo);
        W(jVar, e.f55205r);
    }

    @Override // z9.a, z9.b
    /* renamed from: F */
    public void onIntermediateImageSet(String str, ImageInfo imageInfo) {
        long now = this.f24574i.now();
        j jVar = this.f24575o;
        jVar.C(now);
        jVar.B(str);
        jVar.G(imageInfo);
        W(jVar, e.f55204q);
    }

    public void N(j jVar, long j10) {
        jVar.R(true);
        jVar.Q(j10);
        C0(jVar, n.f55275p);
    }

    public void V() {
        this.f24575o.w();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        V();
    }

    @Override // z9.a, z9.b
    public void h(String str, Throwable th2, b.a aVar) {
        long now = this.f24574i.now();
        j jVar = this.f24575o;
        jVar.F(aVar);
        jVar.z(now);
        jVar.B(str);
        jVar.E(th2);
        W(jVar, e.f55206s);
        L(jVar, now);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void m(boolean z10) {
        if (z10) {
            N(this.f24575o, this.f24574i.now());
        } else {
            L(this.f24575o, this.f24574i.now());
        }
    }

    @Override // z9.a, z9.b
    public void o(String str, b.a aVar) {
        long now = this.f24574i.now();
        j jVar = this.f24575o;
        jVar.F(aVar);
        jVar.B(str);
        W(jVar, e.f55208u);
        if (this.f24578r) {
            L(jVar, now);
        }
    }

    @Override // z9.a, z9.b
    public void y(String str, Object obj, b.a aVar) {
        long now = this.f24574i.now();
        j jVar = this.f24575o;
        jVar.x();
        jVar.D(now);
        jVar.B(str);
        jVar.y(obj);
        jVar.F(aVar);
        W(jVar, e.f55203p);
        if (this.f24578r) {
            N(jVar, now);
        }
    }

    public b(v8.b bVar, j jVar, i iVar, boolean z10) {
        this.f24577q = null;
        this.f24574i = bVar;
        this.f24575o = jVar;
        this.f24576p = iVar;
        this.f24578r = z10;
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
    }
}
