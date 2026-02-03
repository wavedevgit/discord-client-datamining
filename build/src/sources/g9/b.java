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
    private final v8.b f25875i;

    /* renamed from: o  reason: collision with root package name */
    private final j f25876o;

    /* renamed from: p  reason: collision with root package name */
    private final i f25877p;

    /* renamed from: q  reason: collision with root package name */
    private i f25878q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f25879r;

    public b(v8.b bVar, j jVar, i iVar) {
        this(bVar, jVar, iVar, true);
    }

    private void A0(j jVar, e eVar) {
        jVar.H(eVar);
        this.f25877p.b(jVar, eVar);
        i iVar = this.f25878q;
        if (iVar != null) {
            iVar.b(jVar, eVar);
        }
    }

    private void C0(j jVar, n nVar) {
        this.f25877p.a(jVar, nVar);
        i iVar = this.f25878q;
        if (iVar != null) {
            iVar.a(jVar, nVar);
        }
    }

    private void L(j jVar, long j10) {
        jVar.R(false);
        jVar.L(j10);
        C0(jVar, n.f55690q);
    }

    @Override // z9.a, z9.b
    public void B(String str, Object obj, b.a aVar) {
        long now = this.f25875i.now();
        j jVar = this.f25876o;
        jVar.x();
        jVar.D(now);
        jVar.B(str);
        jVar.y(obj);
        jVar.F(aVar);
        A0(jVar, e.f55617p);
        if (this.f25879r) {
            N(jVar, now);
        }
    }

    @Override // z9.a, z9.b
    /* renamed from: E */
    public void a(String str, ImageInfo imageInfo, b.a aVar) {
        long now = this.f25875i.now();
        j jVar = this.f25876o;
        jVar.F(aVar);
        jVar.A(now);
        jVar.J(now);
        jVar.B(str);
        jVar.G(imageInfo);
        A0(jVar, e.f55619r);
    }

    @Override // z9.a, z9.b
    /* renamed from: F */
    public void onIntermediateImageSet(String str, ImageInfo imageInfo) {
        long now = this.f25875i.now();
        j jVar = this.f25876o;
        jVar.C(now);
        jVar.B(str);
        jVar.G(imageInfo);
        A0(jVar, e.f55618q);
    }

    public void N(j jVar, long j10) {
        jVar.R(true);
        jVar.Q(j10);
        C0(jVar, n.f55689p);
    }

    public void V() {
        this.f25876o.w();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        V();
    }

    @Override // z9.a, z9.b
    public void h(String str, Throwable th2, b.a aVar) {
        long now = this.f25875i.now();
        j jVar = this.f25876o;
        jVar.F(aVar);
        jVar.z(now);
        jVar.B(str);
        jVar.E(th2);
        A0(jVar, e.f55620s);
        L(jVar, now);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        if (z10) {
            N(this.f25876o, this.f25875i.now());
        } else {
            L(this.f25876o, this.f25875i.now());
        }
    }

    @Override // z9.a, z9.b
    public void x(String str, b.a aVar) {
        long now = this.f25875i.now();
        j jVar = this.f25876o;
        jVar.F(aVar);
        jVar.B(str);
        A0(jVar, e.f55622u);
        if (this.f25879r) {
            L(jVar, now);
        }
    }

    public b(v8.b bVar, j jVar, i iVar, boolean z10) {
        this.f25878q = null;
        this.f25875i = bVar;
        this.f25876o = jVar;
        this.f25877p = iVar;
        this.f25879r = z10;
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
    }
}
