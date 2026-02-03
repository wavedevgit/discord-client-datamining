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
    private final v8.b f26662i;

    /* renamed from: o  reason: collision with root package name */
    private final j f26663o;

    /* renamed from: p  reason: collision with root package name */
    private final i f26664p;

    /* renamed from: q  reason: collision with root package name */
    private i f26665q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f26666r;

    public b(v8.b bVar, j jVar, i iVar) {
        this(bVar, jVar, iVar, true);
    }

    private void D0(j jVar, n nVar) {
        this.f26664p.a(jVar, nVar);
        i iVar = this.f26665q;
        if (iVar != null) {
            iVar.a(jVar, nVar);
        }
    }

    private void L(j jVar, long j10) {
        jVar.R(false);
        jVar.L(j10);
        D0(jVar, n.f55552q);
    }

    private void t0(j jVar, e eVar) {
        jVar.H(eVar);
        this.f26664p.b(jVar, eVar);
        i iVar = this.f26665q;
        if (iVar != null) {
            iVar.b(jVar, eVar);
        }
    }

    @Override // z9.a, z9.b
    public void B(String str, Object obj, b.a aVar) {
        long now = this.f26662i.now();
        j jVar = this.f26663o;
        jVar.x();
        jVar.D(now);
        jVar.B(str);
        jVar.y(obj);
        jVar.F(aVar);
        t0(jVar, e.f55479p);
        if (this.f26666r) {
            N(jVar, now);
        }
    }

    @Override // z9.a, z9.b
    /* renamed from: E */
    public void a(String str, ImageInfo imageInfo, b.a aVar) {
        long now = this.f26662i.now();
        j jVar = this.f26663o;
        jVar.F(aVar);
        jVar.A(now);
        jVar.J(now);
        jVar.B(str);
        jVar.G(imageInfo);
        t0(jVar, e.f55481r);
    }

    @Override // z9.a, z9.b
    /* renamed from: F */
    public void onIntermediateImageSet(String str, ImageInfo imageInfo) {
        long now = this.f26662i.now();
        j jVar = this.f26663o;
        jVar.C(now);
        jVar.B(str);
        jVar.G(imageInfo);
        t0(jVar, e.f55480q);
    }

    public void N(j jVar, long j10) {
        jVar.R(true);
        jVar.Q(j10);
        D0(jVar, n.f55551p);
    }

    public void V() {
        this.f26663o.w();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        V();
    }

    @Override // z9.a, z9.b
    public void h(String str, Throwable th2, b.a aVar) {
        long now = this.f26662i.now();
        j jVar = this.f26663o;
        jVar.F(aVar);
        jVar.z(now);
        jVar.B(str);
        jVar.E(th2);
        t0(jVar, e.f55482s);
        L(jVar, now);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        if (z10) {
            N(this.f26663o, this.f26662i.now());
        } else {
            L(this.f26663o, this.f26662i.now());
        }
    }

    @Override // z9.a, z9.b
    public void x(String str, b.a aVar) {
        long now = this.f26662i.now();
        j jVar = this.f26663o;
        jVar.F(aVar);
        jVar.B(str);
        t0(jVar, e.f55484u);
        if (this.f26666r) {
            L(jVar, now);
        }
    }

    public b(v8.b bVar, j jVar, i iVar, boolean z10) {
        this.f26665q = null;
        this.f26662i = bVar;
        this.f26663o = jVar;
        this.f26664p = iVar;
        this.f26666r = z10;
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
    }
}
