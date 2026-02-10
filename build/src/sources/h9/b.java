package h9;

import aa.b;
import aa.e;
import aa.i;
import aa.j;
import aa.n;
import com.facebook.drawee.drawable.c0;
import com.facebook.imagepipeline.image.ImageInfo;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends aa.a implements Closeable, c0 {

    /* renamed from: i  reason: collision with root package name */
    private final w8.b f27004i;

    /* renamed from: o  reason: collision with root package name */
    private final j f27005o;

    /* renamed from: p  reason: collision with root package name */
    private final i f27006p;

    /* renamed from: q  reason: collision with root package name */
    private i f27007q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f27008r;

    public b(w8.b bVar, j jVar, i iVar) {
        this(bVar, jVar, iVar, true);
    }

    private void J(j jVar, e eVar) {
        jVar.H(eVar);
        this.f27006p.b(jVar, eVar);
        i iVar = this.f27007q;
        if (iVar != null) {
            iVar.b(jVar, eVar);
        }
    }

    private void Q(j jVar, n nVar) {
        this.f27006p.a(jVar, nVar);
        i iVar = this.f27007q;
        if (iVar != null) {
            iVar.a(jVar, nVar);
        }
    }

    private void z(j jVar, long j10) {
        jVar.R(false);
        jVar.L(j10);
        Q(jVar, n.f523q);
    }

    public void C(j jVar, long j10) {
        jVar.R(true);
        jVar.Q(j10);
        Q(jVar, n.f522p);
    }

    public void I() {
        this.f27005o.w();
    }

    @Override // aa.a, aa.b
    public void a(String str, Throwable th2, b.a aVar) {
        long now = this.f27004i.now();
        j jVar = this.f27005o;
        jVar.F(aVar);
        jVar.z(now);
        jVar.B(str);
        jVar.E(th2);
        J(jVar, e.f453s);
        z(jVar, now);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        I();
    }

    @Override // aa.a, aa.b
    public void h(String str, b.a aVar) {
        long now = this.f27004i.now();
        j jVar = this.f27005o;
        jVar.F(aVar);
        jVar.B(str);
        J(jVar, e.f455u);
        if (this.f27008r) {
            z(jVar, now);
        }
    }

    @Override // aa.a, aa.b
    public void i(String str, Object obj, b.a aVar) {
        long now = this.f27004i.now();
        j jVar = this.f27005o;
        jVar.x();
        jVar.D(now);
        jVar.B(str);
        jVar.y(obj);
        jVar.F(aVar);
        J(jVar, e.f450p);
        if (this.f27008r) {
            C(jVar, now);
        }
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        if (z10) {
            C(this.f27005o, this.f27004i.now());
        } else {
            z(this.f27005o, this.f27004i.now());
        }
    }

    @Override // aa.a, aa.b
    /* renamed from: s */
    public void p(String str, ImageInfo imageInfo, b.a aVar) {
        long now = this.f27004i.now();
        j jVar = this.f27005o;
        jVar.F(aVar);
        jVar.A(now);
        jVar.J(now);
        jVar.B(str);
        jVar.G(imageInfo);
        J(jVar, e.f452r);
    }

    @Override // aa.a, aa.b
    /* renamed from: y */
    public void onIntermediateImageSet(String str, ImageInfo imageInfo) {
        long now = this.f27004i.now();
        j jVar = this.f27005o;
        jVar.C(now);
        jVar.B(str);
        jVar.G(imageInfo);
        J(jVar, e.f451q);
    }

    public b(w8.b bVar, j jVar, i iVar, boolean z10) {
        this.f27007q = null;
        this.f27004i = bVar;
        this.f27005o = jVar;
        this.f27006p = iVar;
        this.f27008r = z10;
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
    }
}
